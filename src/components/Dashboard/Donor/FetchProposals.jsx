import React, { useState } from "react";
import { useMoralisQuery } from "react-moralis";
import TransferMoney from "./TransferMoney";
import Proposal from "./Proposal";

const FetchProposals = () => {
  const { data } = useMoralisQuery("ProposalTable");
  const { info } = useMoralisQuery("isProposalOpen");
  const [modalStatus, setModalStatus] = useState(false);
  const [proposalID, setProposalID] = useState();
  const [isProposalFetched, setIsProposalFetched] = useState(false);

  const fetchedProposals = JSON.parse(JSON.stringify(data));
  const hasProposals = fetchedProposals.length > 0 ? true : false;

  const isProposalOpen = (proposalID) => {
    console.log(JSON.parse(JSON.stringify(info)));
  };

  useEffect(() => {
    info ? setIsProposalFetched(true) : setIsProposalFetched(false);
  }, [info]);

  const emptyResult = (
    <div>
      <h3>No Campaigns have been created yet!</h3>
    </div>
  );

  const proposalResult = (
    <div className='fetchProposalResult-dashboard flex__center section__padding'>
      <h1>Current Events</h1>
      <div className='proposalResult'>
        {isProposalFetched &&
          fetchedProposals.map((proposal) => {
            return (
              <Proposal
                key={proposal["proposalID"]}
                proposal={proposal}
                showmodal={setModalStatus}
                setProposalID={setProposalID}
                isProposalOpen={isProposalOpen(proposal["proposalID"])}
              />
            );
          })}
      </div>
      {modalStatus && (
        <div className='TransferMoney__modal flex__center'>
          <TransferMoney showmodal={setModalStatus} proposalID={proposalID} />
        </div>
      )}
    </div>
  );

  return hasProposals ? proposalResult : emptyResult;
};

export default FetchProposals;
