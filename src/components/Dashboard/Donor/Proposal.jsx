import React from "react";
import { getExplorer } from "../../../helpers/networks";
import "./Proposal.css";

const Proposal = ({ proposal, showmodal, setProposalID }) => {
  const { ngoAddress, proposalID, title, description, amtThreshold } = proposal;

  return (
    <>
      <div className='proposal__card'>
        <h4 className='section__heading'>{title}</h4>
        <p className='p__normal'>{description}</p>
        <p className='p__normal'>Amount to be raised - {amtThreshold} MATIC</p>
        {/* <p className="p__normal">Amout received till now - 0 MATIC</p> */}
        <div className='proposal__card-buttonsContainer'>
          <a
            href={`${getExplorer("0x13881")}/address/${ngoAddress}`}
            target='_blank'
            rel='noreferrer'
            className='custom__button'
          >
            View Donations &rarr;
          </a>
          <button
            className='custom__button'
            onClick={() => {
              setProposalID(proposalID);
              showmodal(true);
            }}
          >
            Donate
          </button>
        </div>
      </div>
    </>
  );
};

export default Proposal;
