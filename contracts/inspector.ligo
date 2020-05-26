type action is
  | GetPrice of (string * address)
  | SetPrice of (string)

type store is record
  price: string;
end

type return is list (operation) * store

const emptyOps: list(operation) = list end

// This is a record, in case we need to add more properties, remember this is an example
type request is record
  callback : contract(string);
  assetSymbol: string;
end

function getPrice(const assetSymbol: string; const oracleContractAddress: address; var store: store): return is
    block {
        // The entry point where the information will arrive in THIS contract
        const requested : request = record [
            callback =  case (Tezos.get_entrypoint_opt("%setPrice", Tezos.self_address) : option(contract(string))) of
                            | Some (cb) -> cb
                            | None -> (failwith ("Not a contract"): contract (string))
                        end;
            assetSymbol = assetSymbol
        ];

        // The entry point of the contract, from where we are going to obtain the information
        // Must be of the same type, request, see the "contract(request)"
        const destination : contract (request) =
            case (Tezos.get_entrypoint_opt ("%getPrice", oracleContractAddress) : option (contract (request))) of
                | Some (cb) -> cb
                | None -> (failwith ("Entrypoint not found.") : contract (request))
            end;

    } with (list [Tezos.transaction (requested, 0mutez, destination)], store);

function setPrice (const value : string ; var store : store) : return is
    block { 
        patch store with record [price = value]
    } with (emptyOps, store);

function main (const action: action; var store: store): return is
  block {
    skip
  } with case action of
    | GetPrice(n) -> getPrice(n.0, n.1, store)
    | SetPrice(n) -> setPrice(n, store)
  end;