import React, { createContext, useEffect, useState } from "react";
import { useMoralis } from "react-moralis";

const { ethereum } = window;
export const CharityContext = createContext();

export const CharityDAOProvider = ({ children }) => {
  const { web3, Moralis, user } = useMoralis();

  useEffect(() => {
    const checkIfWalletIsConnected = async () => {
      try {
        if (!ethereum) return alert("Please install MetaMask.");
      } catch (error) {
        console.log(error);
      }
    };

    checkIfWalletIsConnected();
  }, []);

  return (
    <CharityContext.Provider value={{ }}>
      {children}
    </CharityContext.Provider>
  );
};
