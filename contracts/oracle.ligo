type request is record
  callback : contract(string);
  assetSymbol: string;
end

type action is
| SetPrice of (string * string)
| GetPrice of (request)
| SetPaused of (bool)
| SetPoster of (address)

type symbol is string;

type assetInfo is record
    price: string;
    blockTimestamp: timestamp;
end

type store is record 
    paused: bool;
    owner: address;
    poster: address;
    assets: big_map(symbol, assetInfo);
end

type return is list (operation) * store;

const emptyOps: list(operation) = list end;

const pausedError :string = "0"
const unauthorized : string = "1"
const failedToGetPrice: string = "2"

function getPrice(const r: request; var store: store): return is 
    block {
        if(store.paused)
            then failwith(pausedError);
            else skip;

        const asset: assetInfo = case store.assets[r.assetSymbol] of          
            | Some(asset) -> asset
            | None -> (failwith(failedToGetPrice): assetInfo)
        end;

        const operations: list(operation) = list [Tezos.transaction(asset.price, 0mutez, r.callback)]
    } with(operations, store);

function setPrice(const symbol: string; const value: string; var store : store) : return is
    block {
        if (sender =/= store.poster) 
        then failwith(unauthorized);
        else skip;

        if (store.paused) 
        then failwith(pausedError);
        else skip;

        store.assets[symbol] := record 
            price = value; 
            blockTimestamp = now; 
        end;
    } with (emptyOps, store);

function setPaused(const value: bool; var store : store) : return is
    block {
        if (sender =/= store.owner) 
        then failwith(unauthorized);
        else store.paused := value;
    } with (emptyOps, store);

function setPoster(const value: address; var store : store) : return is
    block {
        if (sender =/= store.owner) 
        then failwith(unauthorized);
        else store.poster := value;
    } with (emptyOps, store);

function main (const action: action; var store: store): return is
    block {
        skip
    } with case action of
        | GetPrice(n) -> getPrice(n, store)
        | SetPrice(n) -> setPrice(n.0, n.1, store)
        | SetPaused(n) -> setPaused(n, store)
        | SetPoster(n) -> setPoster(n, store)
    end;  