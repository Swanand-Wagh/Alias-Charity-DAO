# Alias Charity System using Blockchain

Numerous scandals related to the traditional charity processes affected the
way public perceives charity and this increased the mistrust in charitable organizations.
In fact, due to the self-isolation and lockdown volunteers are not able to collect on
the streets; furthermore, the cancellation or postponement of mass events and
individual or small group activities have brought community fundraising to a
juddering halt. A substantial number of people have felt the desire to donate for
the recent coronavirus pandemic. Surely, they have wondered how their donations
were used, whether for the stated purposes or for others.

## Walkthrough

- There are two dashboards available (DONOR & NGO). If you go to the Donor Dashboard for the first time and connect your Metamask wallet, you will be logged in as a DONOR and will not be able to connect the same wallet from the NGO Dashboard. The same is true for a NGO account.
- If you're a NGO, you may submit a proposal (NGO Campaign/Event) and request funding.
- You may give crypto(MATIC in my case) to the created NGO Proposal if you're a DONOR. You may also see all of the donations that NGO has received.
- Both the NGO and the DONOR may see their account balance and previous transactions.

#### **Note:** This is not a DAO yet, but I hope to make it into a Charity-DAO in the future.

## Demo

https://alias-charity-blockchain.vercel.app/

## Tech Stack

- Frontend : React.js
- Backend: Solidity
- Server Database: Moralis
- Chain : Polygon Chain
- Contract Deployment : Remix
- Website Hosting : Firebase

## Installation

```
  git clone https://github.com/Swanand-Wagh/Alias-Charity-DAO.git
  cd Alias-Charity-DAO
  npm install or yarn install
```

## General Setup

To run this project, you will need to create a .env file outside /src & provide your appId and serverUrl from Moralis

```
REACT_APP_MORALIS_APPLICATION_ID = xxxxxxxxxxxx
REACT_APP_MORALIS_SERVER_URL = https://xxxxxx.grandmoralis.com:2053/server
```

- Install [Metamask](https://metamask.io/)
- Get the SERVER_URL & APP_ID after creating a [Moralis Server](https://admin.moralis.io/servers) & clicking on "View Details".
- Copy the [contract](https://github.com/Swanand-Wagh/Alias-Charity-DAO/blob/master/smart_contract/Charity.sol), head over to [Remix](https://remix.ethereum.org/) & paste inside /contracts.
- Head over to your selected network's faucets & get some free tokens.
- Open /helpers/networks.js & add the required network details, same on which you will deploy your contract & create a moralis server. You'd also have to change getBlockExplorer line from everywhere inside code to your specific network.
- Before deploying contract, make sure you select "Injected Web3" & use the same network inside Metamask as you used to create the moralis server. ( For ex. Ropsten, Mumbai )
- Copy the contract address you got after deploying the contract & replace with the address inside /utils/constants.js
- Copy the ABI you got after deploying & replace with the ABI inside /utils/ABI.json
- You're Done.

## Acknowledgements

- [Moralis Docs](https://docs.moralis.io/introduction/readme)
- [React Moralis](https://github.com/MoralisWeb3/react-moralis)
- [Ethereum Boilerplate](https://github.com/ethereum-boilerplate/ethereum-boilerplate)
- [Web3 Social Network Boilerplate](https://github.com/ethereum-boilerplate/web3-social-network-boilerplate)

## 🔗 Links

If you have any feedback or bugs to report, please reach out to me.

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://swanandwagh.netlify.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/swanandwagh1208/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/SwanandWagh1208)
