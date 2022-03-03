interface SaleConfig {
  price: number;
  maxMintAmountPerTx: number;
};
export default interface CollectionConfigInterface {
  contractName: string,
  tokenName: string;
  tokenSymbol: string;
  maxSupply: number;
  limitMint: number;
  whitelistSale: SaleConfig;
  preSale: SaleConfig;
  publicSale: SaleConfig;
  contractAddress: string|null,
  whitelistAddresses: string[],
  openSeaSlug: string|null,
};