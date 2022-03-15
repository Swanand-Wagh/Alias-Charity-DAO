import React, { useEffect, useState } from "react";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import Loader from "./Loader";
import { useMoralis } from "react-moralis";

const TransferMoney = () => {
  const { Moralis, user } = useMoralis();

  const [receiver, setReceiver] = useState("");
  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState(0);
  const [tx, setTx] = useState();

  useEffect(() => {
    message && amount && receiver
      ? setTx({ receiver, amount, message })
      : setTx();
  }, [message, amount, receiver]);

  const transfer = async () => {
    await Moralis.enableWeb3();
    let options = {
      native: "native",
      amount: Moralis.Units.ETH(amount),
      receiver,
      awaitReceipt: false,
    };

    await Moralis.transfer(options);
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
              <p className="">{user ? user.getUsername() : "....."}</p>
              <p>Ethereum</p>
            </div>
          </div>
        </div>
        <div className="">
          <input
            placeholder="Address To"
            name="receiver"
            type="text"
            onChange={(e) => setReceiver(e.target.value)}
            value={receiver}
          />
          <input
            placeholder="Amount (ETH)"
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
            <button onClick={() => transfer()} disabled={!tx}>
              Transfer 💸
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default TransferMoney;
