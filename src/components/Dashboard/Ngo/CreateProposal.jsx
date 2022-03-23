import React, { useContext, useState } from 'react';
import { useMoralis, useWeb3ExecuteFunction } from 'react-moralis';
import { CharityContext } from '../../Context/CharityContext';
import toast, { Toaster } from 'react-hot-toast';
import dashboardImage from '../../../assets/dashboard/world-ngo-day-mauritius.svg';
import './CreateProposal.css';

const CreateProposal = () => {
  const { Moralis, isAuthenticated, isWeb3Enabled } = useMoralis();

  const { toastStyles, contractABI, contractAddress } = useContext(CharityContext);
  const contractProcessor = useWeb3ExecuteFunction();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [amtToBeRaised, setAmtToBeRaised] = useState(0);

  const addProposal = async () => {
    if (!isWeb3Enabled) await Moralis.enableWeb3();
    const options = {
      contractAddress: contractAddress,
      functionName: 'createProposal',
      abi: contractABI,
      params: {
        title,
        content,
        amtThreshold: amtToBeRaised,
      },
    };

    await contractProcessor.fetch({
      params: options,
      onSuccess: () => toast.success('Event Created Successfully!', toastStyles),
      onError: (error) => toast.error(error.message, toastStyles),
    });
  };

  const validateForm = () => {
    let result = !title || !content || !amtToBeRaised ? false : true;
    return result;
  };

  const clearForm = () => {
    setTitle('');
    setContent('');
    setAmtToBeRaised('');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (isAuthenticated) {
      if (!validateForm()) {
        return toast.error('Incomplete Form Submission!', toastStyles);
      }
      addProposal();
      clearForm();
    } else {
      clearForm();
      return toast.error('Please Connect Wallet to Create Proposal!', toastStyles);
    }
  };

  return (
    <>
      <Toaster />
      <div className="app__dashboard container__bg flex__center section__padding">
        <h1 className="section__heading">Host an Event</h1>
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
            <p className="section__heading">Raise Funds For A Reason</p>
            <img src={dashboardImage} alt="DashboardImage" />
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateProposal;
