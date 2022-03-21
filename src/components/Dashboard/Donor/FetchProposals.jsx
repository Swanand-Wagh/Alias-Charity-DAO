import React from "react";
import { useMoralisQuery } from "react-moralis";
import Proposal from "./Proposal";

const FetchProposals = () => {
  const { data } = useMoralisQuery("ProposalTable");

  const fetchedProposals = JSON.parse(JSON.stringify(data));
  const hasProposals = fetchedProposals.length > 0 ? true : false;

  const emptyResult = (
    <div>
      <h3>No Campaigns have been created yet!</h3>
    </div>
  );

  const proposalResult = (
    <div>
      {fetchedProposals.map((proposal) => {
        return <Proposal key={proposal["proposalID"]} proposal={proposal} />;
      })}
    </div>
  );

  return hasProposals ? proposalResult : emptyResult;
};

export default FetchProposals;
