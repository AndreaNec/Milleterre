import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'SmartContractMilleterre',
  tokenName: 'Milleterre',
  tokenSymbol: 'M',
  maxSupply: 1000,
  limitMint: 53,
  whitelistSale: {
    price: 0.65,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.75,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.75,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0x13444A912F521053b8022D9EFfd16109b288BD8A",
  openSeaSlug: 'my-nft-token',
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
