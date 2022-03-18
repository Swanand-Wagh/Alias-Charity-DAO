import React from "react";
import { useMoralisQuery } from "react-moralis";
import { CharityContext } from "../../Context/CharityContext";

const FetchProposals = () => {
    // const queryProposal = useMoralisQuery(
    //   "Proposals",
    //   (query) => query.equalTo("categoryId", selectedCategory["categoryId"]),
    //   [selectedCategory],
    //   { live: true }
    // );

    // const fetched_Proposals = JSON.parse(
    //   JSON.stringify(queryProposal.data, ["postId", "contentId", "postOwner"])
    // ).reverse();
    // const hasProposals = fetched_Proposals.length > 0 ? true : false;

  const emptyResult = (
    <div>
      <h3>No Campaigns have been created yet!</h3>
    </div>
  );

  const proposalResult = (
    <div>
      {/* {fetched_Proposals.map((post) => (
        <Post key={post["postId"]} post={post} />
      ))} */}
    </div>
  );

  //   return hasProposals ? proposalResult : emptyResult;
  return true ? proposalResult : emptyResult;
};

export default FetchProposals;
