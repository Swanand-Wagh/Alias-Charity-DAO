import React, { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";

const { ethereum } = window;
export const CharityContext = createContext();

const createEthereumContract = () => {
  // const provider = new ethers.providers.Web3Provider(ethereum);
  // const signer = provider.getSigner();
  // const transactionsContract = new ethers.Contract(
  //   contractAddress,
  //   contractABI,
  //   signer
  // );

  // return transactionsContract;
};

export const CharityDAOProvider = ({ children }) => {
  const [formData, setformData] = useState({
    addressTo: "",
    amount: "",
    message: "",
  });
  const [currentAccount, setCurrentAccount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem("transactionCount")
  );

  const handleChange = (e, name) => {
    setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const sendTransaction = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");
      const { addressTo, amount, message } = formData;
      const transactionsContract = createEthereumContract();
      const parsedAmount = ethers.utils.parseEther(amount);

      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: currentAccount,
            to: addressTo,
            gas: "0x5208",
            value: parsedAmount._hex,
          },
        ],
      });

      const transactionHash = await transactionsContract.addToBlockchain(
        addressTo,
        parsedAmount,
        message,
      );

      setIsLoading(true);
      await transactionHash.wait();
      setIsLoading(false);

      setformData({
        addressTo: "",
        amount: "",
        message: "",
      });
      alert("Transaction Successful!");

      const transactionsCount =
        await transactionsContract.getTransactionCount();
      setTransactionCount(transactionsCount.toNumber());
    } catch (error) {
      console.log(error);
    }
  };

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
    <CharityContext.Provider
      value={{
        handleChange,
        setformData,
        formData,
        currentAccount,
        sendTransaction,
        isLoading,
      }}
    >
      {children}
    </CharityContext.Provider>
  );
};
