import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMoralis, useMoralisWeb3Api } from 'react-moralis';
import { CharityContext } from '../../Context/CharityContext';
import toast from 'react-hot-toast';
import { getExplorer } from '../../../helpers/networks';
import siteLogo from '../../../assets/logo.png';
import './Navbar.css';
import console from 'console-browserify';

const Navbar = ({ userType }) => {
  let navigate = useNavigate();
  const { toastStyles, userWalletBalance, getEllipsisTxt } = useContext(CharityContext);
  const { authenticate, isAuthenticated, logout, user, account } = useMoralis();
  const Web3Api = useMoralisWeb3Api();

  const hideElement = { display: 'none' };
  const showElement = { display: 'block' };

  // CONNECT TO NGO-DASHBOARD ONLY IF WALLET HAS NFT ELSE CONNECT TO DONOR-DASHBOARD 
  const connectUserWallet = async () => {
    if (!isAuthenticated) {
      try {
        authenticate().then(async (u) => {
          const wallet = u?.get('ethAddress');

          const options = {
            chain: 'mumbai',
            address: wallet,
            token_address: '0x5fcd3A03F56F5C12be1B5C408D3c138e07Cb7502',
          };
          const polygonNFTs = await Web3Api.account.getNFTsForContract(options);
          const _hasNFT = polygonNFTs.result.length > 0;

          if ((_hasNFT && userType === 'NGO') || (!_hasNFT && userType === 'DONOR')) {
            toast.success('Wallet Successfully Connected!', toastStyles);
          } else {
            await logout();
            toast.error('Retry using Appropriate Wallet!', toastStyles);
          }
        });
      } catch (error) {
        toast.error('Some Error Occured!', toastStyles);
      }
    }
  };

  return (
    <>
      <nav className="app__navbar flex__center section__padding">
        <img src={siteLogo} title="Logo" alt="logo" onClick={() => navigate('/')} />
        <ul>
          {userType && isAuthenticated && account && (
            <>
              <li>
                <a
                  href={`${getExplorer('0x13881')}/address/${account}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  View on Polyscan
                </a>
              </li>
              <li>Balance: {userWalletBalance} MATIC</li>
            </>
          )}
          <li
            onClick={() => navigate('/dashboard/ngo')}
            style={userType ? hideElement : showElement}
          >
            NGO Dashboard
          </li>
          <li
            onClick={() => navigate('/dashboard/donor')}
            style={userType ? hideElement : showElement}
          >
            DONOR Dashboard
          </li>
          {userType && !isAuthenticated && (
            <li onClick={() => connectUserWallet()}>Connect Wallet</li>
          )}
          {userType && isAuthenticated && (
            <>
              <li>
                {userType} :{' '}
                <span style={{ fontWeight: '500' }}>{getEllipsisTxt(user.get('ethAddress'))}</span>
              </li>
              <li
                onClick={async () => {
                  toast.error('Wallet Disconnected!', toastStyles);
                  await logout();
                }}
              >
                Logout
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
