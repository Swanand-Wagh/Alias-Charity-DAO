import React, { createContext, useEffect, useState } from 'react';
import { useMoralis, useWeb3ExecuteFunction } from 'react-moralis';
import { contract_ABI, contract_Address } from '../../utils/constants';
import toast from 'react-hot-toast';
import console from 'console-browserify';

const { ethereum } = window;
export const CharityContext = createContext();

export const CharityDAOProvider = ({ children }) => {
  const { Moralis, isAuthenticated, refetchUserData, isWeb3Enabled, isWeb3EnableLoading } =
    useMoralis();

  const [contractABI, setContractABI] = useState(contract_ABI);
  const [contractAddress, setContractAddress] = useState(contract_Address);
  const contractProcessor = useWeb3ExecuteFunction();
  const [userWalletBalance, setUserWalletBalance] = useState(0);

  const toastStyles = {
    style: {
      marginTop: '4.25rem',
      fontWeight: '600',
      background: '#333',
      color: '#fff',
      duration: 3000,
    },
  };

  const getEllipsisTxt = (str, n = 6) => {
    if (str) {
      return `${str.slice(0, n)}...${str.slice(str.length - n)}`;
    }
    return '';
  };

  // Enable Web3 and fetch matic balance
  useEffect(() => {
    if (isAuthenticated) {
      try {
        const enable = async () => {
          if (!isWeb3Enabled && !isWeb3EnableLoading) await Moralis.enableWeb3();
          isAuthenticated && (await refetchUserData());

          const money = await Moralis.Web3API.account.getNativeBalance({
            chain: 'mumbai',
          });
          let matic = parseFloat(Moralis.Units.FromWei(money.balance)).toFixed(4);
          setUserWalletBalance(matic);
        };

        enable();
      } catch (error) {
        console.log(error.message);
      }
    }
  }, [Moralis, isAuthenticated]);

  useEffect(() => {
    if (!isAuthenticated) {
      const checkIfMetaMaskExists = async () => {
        try {
          if (!ethereum) return toast.error('Please install MetaMask!', toastStyles);
        } catch (error) {
          console.log(error);
        }
      };

      checkIfMetaMaskExists();
    }
  }, []);

  const createNGO = async () => {
    try {
      if (!isWeb3Enabled) await Moralis.enableWeb3();
      const options = {
        contractAddress: contractAddress,
        functionName: 'createNGO',
        abi: contractABI,
      };

      await contractProcessor.fetch({
        params: options,
        onSuccess: () => toast.success('NGO Created Successfully!', toastStyles),
        onError: (error) => toast.error('Error during NGO Creation!', toastStyles),
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
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
