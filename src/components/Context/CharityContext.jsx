import React, { createContext, useEffect, useState } from "react";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import { contract_ABI, contract_Address } from "../../utils/constants";
import toast, { Toaster } from "react-hot-toast";

const { ethereum } = window;
export const CharityContext = createContext();

export const CharityDAOProvider = ({ children }) => {
  const { web3, Moralis, user } = useMoralis();
  const [contractABI, setContractABI] = useState(contract_ABI);
  const [contractAddress, setContractAddress] = useState(contract_Address);
  const contractProcessor = useWeb3ExecuteFunction();

  const toastStyles = {
    style: {
      marginTop: "4.25rem",
      fontWeight: "600",
      background: "#333",
      color: "#fff",
    },
  };

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
        }}
      >
        {children}
      </CharityContext.Provider>
    </>
  );
};
