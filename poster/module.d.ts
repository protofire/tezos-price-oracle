declare namespace NodeJS {
    export interface ProcessEnv {
        MNEMONIC: string;
        SECRET: string;
        PKH: string;
        PASSWORD: string;
        EMAIL: string;
        TEZOS_RPC: string;
        ORACLE_ADDRESS: string;
    }
  }