// SPDX-License-Identifier: MIT
pragma solidity >=0.8.9;

contract Charity {
    event ProposalCreated(bytes32 indexed ngoID, string indexed postID);

    event Transfer(
        address from,
        address receiver,
        uint256 amount,
        string message,
        uint256 timestamp
    );

    struct NGO {
        bytes32 _id;
        address wallet_address;
        bool ngoExists;
    }

    struct Proposal {
        string id;
        bytes32 postOwner;
        string title;
        string content;
        uint256 amt; // funds received
        uint256 amtThreshold; // funds to be raised
        bool proposalExists; // to check if proposal already exists
        bool closed; // true if proposal has raised required funds
    }

    // Map of all NGOs
    mapping(bytes32 => NGO) ngoRegistry;
    mapping(string => Proposal) proposalRegistry;

    function createNGO() public {
        bytes32 id = keccak256(abi.encode(msg.sender));
        ngoRegistry[id]._id = id;
        ngoRegistry[id].wallet_address = msg.sender;
        ngoRegistry[id].ngoExists = true;
    }

    /// @notice NGO creates a proposal ie. A Campaign/Event
    /// @param id Proposal ID
    /// @param title Title of the Proposal
    /// @param content Description of the Proposal
    /// @param amtThreshold Total Funds to be Raised
    /// @return creationStatus True if proposal was created successfully. Otherwise false.
    function createProposal(
        string memory id,
        string memory title,
        string memory content,
        uint256 amtThreshold
    ) public returns (bool) {
        bytes32 NGOId = keccak256(abi.encode(msg.sender));
        if (ngoRegistry[NGOId].ngoExists) {
            if (!proposalRegistry[id].proposalExists) {
                proposalRegistry[id].proposalExists = true;
                proposalRegistry[id].closed = false;
                proposalRegistry[id].postOwner = NGOId;
                proposalRegistry[id].id = id;
                proposalRegistry[id].title = title;
                proposalRegistry[id].content = content;
                proposalRegistry[id].amt = 0;
                proposalRegistry[id].amtThreshold = amtThreshold;

                emit ProposalCreated(NGOId, id);
                return true;
            }
        }
        return false;
    }

    function transferFunds(string memory proposalID, string memory message)
        public
        payable
    {
        if (proposalRegistry[proposalID].proposalExists) {
            bytes32 NGOId = proposalRegistry[proposalID].postOwner;

            if (ngoRegistry[NGOId].ngoExists) {
                address receiver = ngoRegistry[NGOId].wallet_address;

                if (msg.sender != receiver) {
                    payable(receiver).transfer(msg.value);
                    emit Transfer(
                        msg.sender,
                        receiver,
                        msg.value,
                        message,
                        block.timestamp
                    );
                    proposalRegistry[proposalID].amt += msg.value;

                    if (proposalReachedThreshold(proposalID)) {
                        proposalRegistry[proposalID].closed = true;
                    }
                }
            }
        }
    }

    function proposalReachedThreshold(string memory proposalID)
        private
        view
        returns (bool)
    {
        return
            proposalRegistry[proposalID].amt >=
            proposalRegistry[proposalID].amtThreshold;
    }

    function getProposal(string memory proposalID)
        public
        view
        returns (
            bytes32,
            string memory,
            string memory,
            uint256,
            uint256,
            bool
        )
    {
        return (
            proposalRegistry[proposalID].postOwner,
            proposalRegistry[proposalID].title,
            proposalRegistry[proposalID].content,
            proposalRegistry[proposalID].amt,
            proposalRegistry[proposalID].amtThreshold,
            proposalRegistry[proposalID].closed
        );
    }
}
