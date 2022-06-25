import React, { useState } from 'react';
import { TabList, Tab, Widget, Table, Form } from 'web3uikit';
import { useMoralis, useMoralisWeb3Api, useWeb3ExecuteFunction } from 'react-moralis';
import Footer from '../../components/Home/Footer/Footer';
import Navbar from '../../components/Home/Navbar/Navbar';
import sampleProposals from '../../utils/sample-proposals';
import './Dao.css';

const DaoDashboard = () => {
  const [passRate, setPassRate] = useState(0);
  const [totalP, setTotalP] = useState(0);
  const [counted, setCounted] = useState(0);
  const [voters, setVoters] = useState(0);
  const { Moralis, isInitialized } = useMoralis();
  const [proposals, setProposals] = useState(sampleProposals);
  const Web3Api = useMoralisWeb3Api();
  const [sub, setSub] = useState();
  const contractProcessor = useWeb3ExecuteFunction();

  return (
    <>
      <Navbar userType="DAO" />
      <div className="content">
        <TabList defaultActiveKey={1} tabStyle="bulbUnion">
          <Tab tabKey={1} tabName={'DAO'}>
            {proposals && (
              <div className="tabContent">
                <p className="daoDashboardProposalTableName">Governance Overview</p>
                <div className="widgets">
                  <Widget
                    className="widgetContainer"
                    info={totalP}
                    title="Proposals Created"
                    style={{ width: '200%' }}
                  >
                    <div className="extraWidgetInfo">
                      <div className="extraTitle">Pass Rate</div>
                      <div className="progress">
                        <div className="progressPercentage" style={{ width: `${passRate}%` }}></div>
                      </div>
                    </div>
                  </Widget>
                  <Widget
                    className="widgetContainer"
                    info={voters.length}
                    title="Eligible Voters"
                  />
                  <Widget
                    className="widgetContainer"
                    info={totalP - counted}
                    title="Ongoing Proposals"
                  />
                </div>
                <p className="daoDashboardProposalTableName">Recent Proposals</p>
                <div>
                  <Table
                    columnsConfig="10% 70% 20%"
                    data={proposals}
                    header={[<span>ID</span>, <span>Description</span>, <span>Status</span>]}
                    pageSize={5}
                    className="daoDashboardProposalTable"
                  />
                </div>
                <Form
                  buttonConfig={{
                    isLoading: sub,
                    loadingText: 'Submitting Proposal',
                    text: 'Submit',
                    theme: 'secondary',
                  }}
                  data={[
                    {
                      inputWidth: '100%',
                      name: 'New Proposal',
                      type: 'textarea',
                      validation: {
                        required: true,
                      },
                      value: '',
                    },
                  ]}
                  title="Create a New Proposal"
                  className="daoDashboardProposalForm"
                />
              </div>
            )}
          </Tab>
        </TabList>
      </div>
      <div className="voting"></div>
      <Footer />
    </>
  );
};

export default DaoDashboard;
