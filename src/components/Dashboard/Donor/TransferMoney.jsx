import React, { useContext, useEffect, useState } from "react";
import Loader from "./Loader";
import { useMoralis } from "react-moralis";
import toast, { Toaster } from "react-hot-toast";
import { CharityContext } from "../../Context/CharityContext";
import polygonLogo from "../../../assets/dashboard/polygon.png";

const TransferMoney = ({ showmodal }) => {
  const { Moralis, user, web3, isAuthenticated } = useMoralis();
  const { toastStyles, contractABI, contractAddress } =
    useContext(CharityContext);

  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState(0);

  const transfer = async () => {
    let Charity = new web3.eth.Contract(contractABI, contractAddress);
    const currentUser = user.get("ethAddress");
    const id = await Charity.methods
      .transferFunds(id, message)
      .send({
        from: currentUser,
        value: Moralis.Units.ETH(amount),
      })
      .then(() => {
        toast.success(`Successfully Donated ${amount} MATIC!`, toastStyles);
      });
  };

  const validateForm = () => {
    let result = !message || !amount ? false : true;
    return result;
  };

  const clearForm = () => {
    setMessage("");
    setAmount(0);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (isAuthenticated) {
      if (!validateForm()) {
        clearForm();
        showmodal(false);
        return toast.error("Incomplete Form Submission!", toastStyles);
      }
      transfer();
      clearForm();
      showmodal(false);
    } else {
      clearForm();
      showmodal(false);
      return toast.error("Please Connect Wallet to Donate!", toastStyles);
    }
  };

  return (
    <>
      <Toaster />
      <div className="app__transferMoney flex__center">
        <div className="modal__close">
          <button
            title="Close"
            className="p__subHeading"
            onClick={() => showmodal(false)}
          >
            X
          </button>
        </div>
        <form onSubmit={onSubmit}>
          <div className="app__transferMoney-info-container">
            <div className="app__transferMoney-icons-container">
              <div className="app__transferMoney-icons-container-polygon flex__center">
                <img src={polygonLogo} title="Polygon" alt="Polygon" />
                <p style={{ marginLeft: ".65rem" }} className="p__subHeading">
                  Polygon
                </p>
              </div>
            </div>
            <div className="app__transferMoney-info-container-userName">
              <p className="p__subHeading">
                {user ? user.getUsername() : "....."}
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
              <button className="transfer__button custom__button">
                Transfer 💸
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default TransferMoney;
