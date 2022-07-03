import React, { useState } from 'react';
import { useMoralis, useMoralisQuery } from 'react-moralis';
import TransferMoney from './TransferMoney';
import Proposal from './Proposal';

const FetchProposals = ({ userType }) => {
  const { user, isAuthenticated } = useMoralis();
  const { data } = useMoralisQuery('ProposalTable');
  const info = useMoralisQuery('isProposalOpen');

  const [modalStatus, setModalStatus] = useState(false);
  const [proposalID, setProposalID] = useState();
  const [ngoWalletAddress, setNgoWalletAddress] = useState('');

  const fetchedProposals = JSON.parse(JSON.stringify(data));
  const hasProposals = fetchedProposals.length > 0 ? true : false;

  const isProposalClose = (proposalID) => {
    for (const i of JSON.parse(JSON.stringify(info.data))) {
      if (i.proposalID === proposalID) {
        if (i.isClosed) {
          return true;
        }
      }
    }
    return false;
  };

  const emptyResult = (
    <div>
      <h3>No Campaigns have been created yet!</h3>
    </div>
  );

  const proposalsVisibleToDonor = (
    <div className="fetchProposalResult-dashboard flex__center section__padding">
      <h1>Current Events</h1>
      <div className="proposalResult">
        {fetchedProposals.map((proposal) => {
          return (
            !isProposalClose(proposal['proposalID']) && (
              <Proposal
                key={proposal['proposalID']}
                proposal={proposal}
                showmodal={setModalStatus}
                setProposalID={setProposalID}
                setNgoWalletAddress={setNgoWalletAddress}
              />
            )
          );
        })}
      </div>
      {modalStatus && (
        <div className="TransferMoney__modal flex__center">
          <TransferMoney
            showmodal={setModalStatus}
            proposalID={proposalID}
            ngoWalletAddress={ngoWalletAddress}
          />
        </div>
      )}
    </div>
  );

  const proposalsVisibleToNGO = isAuthenticated && (
    <div className="fetchProposalResult-dashboard flex__center section__padding">
      <h1>OnGoing Events</h1>
      <div className="completedProposals">
        {fetchedProposals.map((proposal) => {
          return (
            user.get('ethAddress') === proposal.ngoAddress &&
            !isProposalClose(proposal['proposalID']) && (
              <Proposal
                key={proposal['proposalID']}
                proposal={proposal}
                userType="NGO"
              />
            )
          );
        })}
      </div>

      <h1 style={{ marginTop: '3.5rem' }}>Completed Events</h1>
      <div className="completedProposals" style={{ flexWrap: 'nowrap' }}>
        {fetchedProposals.map((proposal) => {
          return (
            user.get('ethAddress') === proposal.ngoAddress &&
            isProposalClose(proposal['proposalID']) && (
              <Proposal key={proposal['proposalID']} proposal={proposal} userType="NGO" />
            )
          );
        })}
      </div>
    </div>
  );

  if (userType === 'DONOR') {
    return hasProposals ? proposalsVisibleToDonor : emptyResult;
  } else {
    return hasProposals ? proposalsVisibleToNGO : emptyResult;
  }
};

export default FetchProposals;
