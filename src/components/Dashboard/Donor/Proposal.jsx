import React from 'react';
import { useMoralis, useMoralisQuery } from 'react-moralis';
import { getExplorer } from '../../../helpers/networks';
import './Proposal.css';

const Proposal = ({ proposal, showmodal, setProposalID, setNgoWalletAddress, userType }) => {
  const { ngoAddress, proposalID, title, description, amtThreshold } = proposal;
  const { data } = useMoralisQuery('DonationTable');
  const { Moralis } = useMoralis();

  const fetchAmountReceived = () => {
    let amt = 0;
    for (const i of JSON.parse(JSON.stringify(data))) {
      if (i.proposalID === proposalID) {
        amt += parseFloat(Moralis.Units.FromWei(i.amount));
      }
    }
    return amt;
  };

  return (
    <>
      <div className="proposal__card">
        <h4 className="section__heading">{title}</h4>
        <p className="p__normal">{description}</p>
        <div className="p__funds">
          <p className="p__normal">
            <span>Funds Required</span> <br /> {amtThreshold} MATIC
          </p>
          <p className="p__normal">
            <span>Funds Raised</span> <br />
            {fetchAmountReceived()} MATIC
          </p>
        </div>
        {userType !== 'NGO' && (
          <div className="proposal__card-buttonsContainer">
            <a
              href={`${getExplorer('0x13881')}/address/${ngoAddress}#internaltx`}
              target="_blank"
              rel="noreferrer"
              className="custom__button"
            >
              View Donations &rarr;
            </a>
            <button
              className="custom__button"
              onClick={() => {
                setProposalID(proposalID);
                setNgoWalletAddress(ngoAddress);
                showmodal(true);
              }}
            >
              Donate
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Proposal;
