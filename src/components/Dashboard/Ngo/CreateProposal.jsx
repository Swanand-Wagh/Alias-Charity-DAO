import React, { useContext, useState } from "react";
import { useMoralisFile, useWeb3ExecuteFunction } from "react-moralis";
import { CharityContext } from "../../Context/CharityContext";
import toast, { Toaster } from "react-hot-toast";

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
      <form onSubmit={onSubmit}>
        <div className="">
          <div className="">
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
          <button type="submit" className="">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateProposal;
