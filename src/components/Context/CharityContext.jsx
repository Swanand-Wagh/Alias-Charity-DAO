import React, { createContext, useEffect, useState } from "react";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import { contract_ABI, contract_Address } from "../../utils/constants";
import toast, { Toaster } from "react-hot-toast";

const { ethereum } = window;
export const CharityContext = createContext();

export const CharityDAOProvider = ({ children }) => {
  const { Moralis, isAuthenticated, refetchUserData } = useMoralis();
  const [contractABI, setContractABI] = useState(contract_ABI);
  const [contractAddress, setContractAddress] = useState(contract_Address);
  const contractProcessor = useWeb3ExecuteFunction();
  const [userWalletBalance, setUserWalletBalance] = useState(0);

  const toastStyles = {
    style: {
      marginTop: "4.25rem",
      fontWeight: "600",
      background: "#333",
      color: "#fff",
    },
  };

  const getEllipsisTxt = (str, n = 6) => {
    if (str) {
      return `${str.slice(0, n)}...${str.slice(str.length - n)}`;
    }
    return "";
  };

  // Enable Web3 and fetch eth balance
  useEffect(() => {
    const enable = async () => {
      await Moralis.enableWeb3();
      isAuthenticated && refetchUserData();
      const money = await Moralis.Web3API.account.getNativeBalance({
        chain: "ropsten",
      });
      let eth = parseFloat(Moralis.Units.FromWei(money.balance)).toFixed(4);
      setUserWalletBalance(eth);
    };
    enable();
  }, [Moralis, isAuthenticated]);

  useEffect(() => {
    const checkIfMetaMaskExists = async () => {
      try {
        if (!ethereum)
          return toast.error("Please install MetaMask!", toastStyles);
      } catch (error) {
        console.log(error);
      }
    };

    checkIfMetaMaskExists();
  }, []);

  const createNGO = async () => {
    await Moralis.enableWeb3();
    const options = {
      contractAddress: contractAddress,
      functionName: "createNGO",
      abi: contractABI,
    };

    await contractProcessor.fetch({
      params: options,
      onSuccess: () => toast.success("NGO Created Successfully!", toastStyles),
      onError: (error) => toast.error(error.message, toastStyles),
    });
  };

  return (
    <>
      <Toaster />
      <CharityContext.Provider
        value={{
          contractABI,
          setContractABI,
          contractAddress,
          setContractAddress,
          toastStyles,
          createNGO,
          userWalletBalance,
          getEllipsisTxt,
        }}
      >
        {children}
      </CharityContext.Provider>
    </>
  );
};
