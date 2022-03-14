import React, { useContext } from "react";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import Loader from "./Loader";

import { CharityContext } from "../../Context/CharityContext";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className=""
  />
);

const Donate = () => {
  const { handleChange, formData, currentAccount, sendTransaction, isLoading } =
    useContext(CharityContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { addressTo, amount, message } = formData;
    if (!addressTo || !amount || !message) return;

    sendTransaction();
  };

  return (
    <>
      <div className="">
        <div className="">
          <div className="">
            <div className="">
              <div className="">
                <SiEthereum fontSize={21} />
              </div>
              <BsInfoCircle fontSize={17} />
            </div>
            <div>
              <p className="">{currentAccount ? currentAccount : "....."}</p>
              <p>Ethereum</p>
            </div>
          </div>
        </div>
        <div className="">
          <Input
            placeholder="Address To"
            name="addressTo"
            type="text"
            handleChange={handleChange}
            value={formData.addressTo}
          />
          <Input
            placeholder="Amount (ETH)"
            name="amount"
            type="number"
            handleChange={handleChange}
            value={formData.amount}
          />
          <Input
            placeholder="Enter Message"
            name="message"
            type="text"
            handleChange={handleChange}
            value={formData.message}
          />
          <div />
          {isLoading ? (
            <Loader />
          ) : (
            <button type="button" onClick={handleSubmit} className="">
              Send now
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Donate;
