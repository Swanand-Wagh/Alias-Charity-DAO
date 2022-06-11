import React, { useContext, useState } from 'react';
import { useMoralis, useWeb3ExecuteFunction } from 'react-moralis';
import { CharityContext } from '../../Context/CharityContext';
import toast from 'react-hot-toast';
import polygonLogo from '../../../assets/dashboard/polygon.png';
import Loader from './Loader';

const TransferMoney = ({ showmodal, proposalID, ngoWalletAddress }) => {
  const { Moralis, isAuthenticated, isWeb3Enabled, isWeb3EnableLoading } = useMoralis();

  const { toastStyles, contractABI, contractAddress } = useContext(CharityContext);
  const contractProcessor = useWeb3ExecuteFunction();

  const [message, setMessage] = useState('');
  const [amount, setAmount] = useState(0);

  const transfer = async () => {
    if (isAuthenticated) {
      try {
        if (!isWeb3Enabled && !isWeb3EnableLoading) await Moralis.enableWeb3();
        const options = {
          contractAddress: contractAddress,
          functionName: 'transferFunds',
          abi: contractABI,
          params: {
            proposalID,
            message,
          },
          msgValue: Moralis.Units.ETH(amount),
        };

        await contractProcessor.fetch({
          params: options,
          onSuccess: () => toast.success(`Successfully Donated ${amount} MATIC!`, toastStyles),
          onError: () => toast.error("Try Again, Donation Failed!", toastStyles),
        });
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const validateForm = () => {
    let result = !message || !amount ? false : true;
    return result;
  };

  const clearForm = () => {
    setMessage('');
    setAmount(0);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (isAuthenticated) {
      if (!validateForm()) {
        clearForm();
        showmodal(false);
        return toast.error('Incomplete Form Submission!', toastStyles);
      }
      transfer();
      clearForm();
      showmodal(false);
    } else {
      clearForm();
      showmodal(false);
      return toast.error('Please Connect Wallet to Donate!', toastStyles);
    }
  };

  return (
    <>
      <div className="app__transferMoney flex__center">
        <div className="modal__close">
          <button title="Close" className="p__subHeading" onClick={() => showmodal(false)}>
            X
          </button>
        </div>
        <form onSubmit={onSubmit}>
          <div className="app__transferMoney-info-container">
            <div className="app__transferMoney-icons-container">
              <div className="app__transferMoney-icons-container-polygon flex__center">
                <img src={polygonLogo} title="Polygon" alt="Polygon" />
                <p style={{ marginLeft: '.65rem' }} className="p__subHeading">
                  Polygon
                </p>
              </div>
            </div>
            <div className="app__transferMoney-info-container-userName">
              <p style={{ marginTop: '16px' }} className="p__subHeading">
                NGO:{' '}
                <span style={{ fontSize: '16px' }}>
                  {ngoWalletAddress ? ngoWalletAddress : '.....'}
                </span>
              </p>
            </div>
          </div>
          <div className="app__transferMoney-input-container">
            <input
              placeholder="Amount (MATIC)"
              name="amount"
              type="number"
              step="0.0001"
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
            />
            <input
              placeholder="Enter Message"
              name="message"
              type="text"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <div />
            {false ? (
              <Loader />
            ) : (
              <button className="transfer__button custom__button">Transfer 💸</button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default TransferMoney;
