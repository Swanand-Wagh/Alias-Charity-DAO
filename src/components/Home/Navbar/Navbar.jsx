import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMoralis } from 'react-moralis';
import { CharityContext } from '../../Context/CharityContext';
import toast, { Toaster } from 'react-hot-toast';
import { getExplorer } from '../../../helpers/networks';
import siteLogo from '../../../assets/logo.png';
import './Navbar.css';

const Navbar = ({ userType }) => {
  let navigate = useNavigate();
  const { toastStyles, createNGO, userWalletBalance, getEllipsisTxt } = useContext(CharityContext);
  const { authenticate, isAuthenticated, isAuthenticating, logout, user, account } = useMoralis();

  const [isNGO, setIsNGO] = useState(undefined);

  const hideElement = { display: 'none' };
  const showElement = { display: 'block' };

  useEffect(() => {
    if (isNGO !== undefined) {
      if (
        (isAuthenticated && isNGO && userType === 'DONOR') ||
        (isAuthenticating && !isNGO && userType === 'NGO')
      ) {
        toast.error('Connect Again using a DONOR Account!', toastStyles);
        logout();
      }
      if (
        (isAuthenticated && !isNGO && userType === 'NGO') ||
        (isAuthenticating && isNGO && userType === 'DONOR')
      ) {
        toast.error('Connect Again using a NGO Account!!', toastStyles);
        logout();
      }
    }
  }, [isNGO]);

  useEffect(() => {
    if (user) {
      setIsNGO(user.get('isNgo'));
    }
  }, []);

  const connectWallet = async () => {
    authenticate().then((u) => {
      const isNGO = u?.get('isNgo');
      setIsNGO(isNGO);

      if (isNGO === undefined) {
        if (userType === 'NGO') createNGO();

        const bool = userType === 'NGO';
        u.set('isNgo', bool);
        u.save();
      } else {
        if (!isNGO) {
          userType === 'DONOR'
            ? toast.success('Wallet Successfully Connected!', toastStyles)
            : navigate('/dashboard/donor');
        } else {
          userType === 'NGO'
            ? toast.success('Wallet Successfully Connected!', toastStyles)
            : navigate('/dashboard/ngo');
        }
      }
    });
  };

  return (
    <>
      <Toaster />
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
          {userType && !isAuthenticated && <li onClick={() => connectWallet()}>Connect Wallet</li>}
          {userType && isAuthenticated && (
            <>
              <li>
                {userType} :{' '}
                <span style={{ fontWeight: '500' }}>{getEllipsisTxt(user.getUsername())}</span>
              </li>
              <li
                onClick={() => {
                  toast.error('Wallet Disconnected!', toastStyles);
                  logout();
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
