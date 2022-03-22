import React, { useState } from "react";
import { useMoralisQuery } from "react-moralis";
import Proposal from "./Proposal";
import TransferMoney from "./TransferMoney";

const FetchProposals = () => {
  const { data } = useMoralisQuery("ProposalTable");
  const [modalStatus, setModalStatus] = useState(false);

  const fetchedProposals = JSON.parse(JSON.stringify(data));
  const hasProposals = fetchedProposals.length > 0 ? true : false;

  const emptyResult = (
    <div>
      <h3>No Campaigns have been created yet!</h3>
    </div>
  );

  const proposalResult = (
    <div className="fetchProposalResult-dashboard flex__center section__padding">
      <h1>Current Events</h1>
      <div className="proposalResult">
        {fetchedProposals.map((proposal) => {
          return (
            <Proposal
              key={proposal["proposalID"]}
              proposal={proposal}
              showmodal={setModalStatus}
            />
          );
        })}
      </div>
      {modalStatus && (
        <div className="TransferMoney__modal flex__center">
          <TransferMoney showmodal={setModalStatus} />
        </div>
      )}
    </div>
  );

  return hasProposals ? proposalResult : emptyResult;
};

export default FetchProposals;
