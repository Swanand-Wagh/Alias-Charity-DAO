export const networkConfig = {
  "0x3": {
    currencySymbol: "ETH",
    blockExplorerUrl: "https://ropsten.etherscan.io/",
  },
};

export const getExplorer = (chain) => networkConfig[chain]?.blockExplorerUrl;

