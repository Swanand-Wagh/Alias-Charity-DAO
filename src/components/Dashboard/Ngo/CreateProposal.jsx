import React, { useContext, useState } from "react";
import { useMoralisFile, useWeb3ExecuteFunction } from "react-moralis";
import './CreateProposal.css';
import { CharityContext } from "../../Context/CharityContext";
import toast, { Toaster } from "react-hot-toast";
import dashboardImage from '../../../assets/dashboard/world-ngo-day-mauritius.svg';

const CreateProposal = () => {
  const { toastStyles, contractABI, contractAddress, walletAddress } =
    useContext(CharityContext);
  // const contractABIJson = JSON.parse(contractABI);
  // const contractProcessor = useWeb3ExecuteFunction();
  // const ipfsProcessor = useMoralisFile();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [amtToBeRaised, setAmtToBeRaised] = useState(0);

  // const addProposal = async (post) => {
  //   const contentUri = await processContent(post);
  //   const options = {
  //     contractAddress: contractAddress,
  //     functionName: "createProposal",
  //     abi: contractABIJson,
  //     params: {
  //       _parentId: "0x91",
  // _contentUri: contentUri,
  //     },
  //   };
  //   await contractProcessor.fetch({
  //     params: options,
  //     onSuccess: () => toast.success("success", toastStyles),
  //     onError: (error) => toast.error(error.message, toastStyles),
  //   });
  // }

  // const processContent = async (content) => {
  //   const ipfsResult = await ipfsProcessor.saveFile(
  //     "post.json",
  //     { base64: btoa(JSON.stringify(content)) },
  //     { saveIPFS: true }
  //   );
  //   return ipfsResult._ipfs;
  // };

  const validateForm = () => {
    let result = !title || !content || !amtToBeRaised ? false : true;
    return result;
  };

  const clearForm = () => {
    setTitle("");
    setContent("");
    setAmtToBeRaised("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return toast.error("Incomplete Form Submission", toastStyles);
    }
    // addProposal({ title, content, amtToBeRaised });
    clearForm();
  };

  return (
    <>
      <Toaster />
      <div className="app__dashboard container__bg flex__center section__padding">
        <h1 className="section__heading">Lorem ipsum dolor sit amet</h1>
        <form className="app__dashboard-form" onSubmit={onSubmit}>
          <div className="app__dashboards-form-wrapper flex__center">
            <div className="app__dashboards-form-inputs flex__center">
              <input
                className=""
                type="text"
                placeholder="Event Name"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
              <input
                className=""
                type="number"
                step="0.0001"
                placeholder="Amount to be Raised"
                onChange={(e) => setAmtToBeRaised(e.target.value)}
                value={amtToBeRaised}
              />
              <textarea
                className=""
                type="text"
                placeholder="Event Description"
                rows="4"
                onChange={(e) => setContent(e.target.value)}
                value={content}
              />
            </div>
            <button type="submit" className="custom__button">
              Submit
            </button>
          </div>
          <div className="app__dashboard-image">
            <p className="section__heading">Raise Fund For A Reason</p>
            <img src={dashboardImage} alt="DashboardImage" />
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateProposal;
