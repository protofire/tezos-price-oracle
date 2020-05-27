interface asset {
    symbol: string;
    price: string;
}
export declare const fetchAssets: () => Promise<asset[]>;
export declare const updateAssets: (assets: asset[]) => Promise<void>;
export {};
