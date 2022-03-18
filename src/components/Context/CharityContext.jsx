import React, { createContext, useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { contract_ABI, contract_Address } from "../../utils/constants";
import toast, { Toaster } from "react-hot-toast";

const { ethereum } = window;
export const CharityContext = createContext();

export const CharityDAOProvider = ({ children }) => {
  const { web3, Moralis, user } = useMoralis();
  const [contractABI, setContractABI] = useState(contract_ABI);
  const [contractAddress, setContractAddress] = useState(contract_Address);

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
        }}
      >
        {children}
      </CharityContext.Provider>
    </>
  );
};
