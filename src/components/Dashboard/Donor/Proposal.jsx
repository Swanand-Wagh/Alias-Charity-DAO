import React, { useContext } from "react";
import { CharityContext } from "../../Context/CharityContext";
import { getExplorer } from "../../../helpers/networks";

const Proposal = ({ proposal }) => {
  const { toastStyles, contractABI, contractAddress } =
    useContext(CharityContext);
  const { ngoAddress, proposalID, title, description, amtThreshold } = proposal;

  return (
    <>
      <div className="proposal__card">
        <h4>{title}</h4>
        <p>{description}</p>
        <p>{amtThreshold}</p>
        <a
          href={`${getExplorer("0x13881")}/address/${ngoAddress}`}
          target="_blank"
          rel="noreferrer"
        >
          View Donations
        </a>
        <button>Donate</button>
      </div>
    </>
  );
};

export default Proposal;
