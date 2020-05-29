type callbackResponse is record
    price: nat; // FixedPoint
    symbol: string;
    senderAddress: address;
end;

type action is
  | GetPrice of (unit)
  | SetPrice of (callbackResponse)

type store is record
  price: nat; // FixedPoint
  oracleAddress: address;
  symbol: string;
end

type return is list (operation) * store

const emptyOps: list(operation) = list end

// This is a record, in case we need to add more properties, remember this is an example
type request is record
  callback : contract(callbackResponse);
  symbol: string;
end

const unauthorizedSymbol : string = "0"
const unauthorizedOriginAddress : string = "1"

function getPrice(var store: store): return is
    block {
        // The entry point where the information will arrive in THIS contract
        const requested : request = record [
            callback =  case (Tezos.get_entrypoint_opt("%setPrice", Tezos.self_address) : option(contract(callbackResponse))) of
                            | Some (cb) -> cb
                            | None -> (failwith ("Not a contract"): contract (callbackResponse))
                        end;
            symbol = store.symbol
        ];

        // The entry point of the contract, from where we are going to obtain the information
        // Must be of the same type, request, see the "contract(request)"
        const destination : contract (request) =
            case (Tezos.get_entrypoint_opt ("%getPrice", store.oracleAddress) : option (contract (request))) of
                | Some (cb) -> cb
                | None -> (failwith ("Entrypoint not found.") : contract (request))
            end;

    } with (list [Tezos.transaction (requested, 0mutez, destination)], store);

function setPrice (const response : callbackResponse ; var store : store) : return is
    block { 
        if(response.symbol =/= store.symbol) 
        then failwith(unauthorizedSymbol);
        else skip;

        if(response.senderAddress =/= Tezos.self_address) 
        then failwith(unauthorizedOriginAddress);
        else skip;

        patch store with record [price = response.price]
    } with (emptyOps, store);

function main (const action: action; var store: store): return is
  block {
    skip
  } with case action of
    | GetPrice(n) -> getPrice(store)
    | SetPrice(n) -> setPrice(n, store)
  end;