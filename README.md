### Decentralized Document Holder using Blockchain
#### Overview
This project aims to utilize Blockchain technology to create a fully decentralized document holder system. Traditional document storage methods often rely on centralized servers, which can be vulnerable to security breaches. By leveraging the transparency and immutability of Blockchain, we provide a secure and efficient platform for storing, sharing, and managing documents.

The image below displays the general flow of the application. 
![systemmodel](https://github.com/vvatsaraj09/Decentralised-Document-Holder/assets/55319493/476c0e34-1f4c-4bb0-91bb-9d612a79e1c0)


#### Features
10 Document Upload:
Users can upload documents of various formats, providing a mandatory document name and category, along with an optional description. The provided categories include:

1) Educational Documents
2) Professional Documents
3) Identity Proofs
4) Medical Records
5) Personal Documents

Categories facilitate easy organization and retrieval of documents. Users have the flexibility to add, edit, or delete categories as needed.

2) Document Searching: 
Documents can be easily searched by name, description, and categories, simplifying the retrieval process.

3) Document Access:
Uploaded documents are accessible to the owner for viewing, updating, sharing, or deletion. The system also maintains multiple versions of documents for reference.

4) Document Sharing:
Documents can be shared with other users using their Aadhaar number. Shared documents grant viewing and deleting access to the recipient.

5) Group Interface
Users can create their own document groups, allowing for shared document spaces among multiple members. Key features of the group interface include:

1) Creation of multiple groups with unique names
2) Addition of members using their Aadhaar numbers
3) All group members can add, view, and delete documents
4) Members have the option to leave groups they no longer wish to be a part of
5) Admin privileges enable the removal of members from groups

#### Technology Stack
1) Solidity: Utilized for smart contract development, enabling the creation of secure and transparent document management protocols on the Blockchain.
2) Truffle and Ganache: Employed for local development and testing of smart contracts, providing a simulated Blockchain environment.
3) Metamask: Facilitates the connection to the application, enabling users to interact with the Blockchain securely through their web browsers.
4) IPFS (InterPlanetary File System): Used for the secure and decentralized storage of documents, ensuring data integrity and availability.

### How to Use
1) Install Dependencies: Ensure that you have the necessary dependencies installed, including Truffle, Ganache, and Metamask.
2) Deploy Smart Contracts: Deploy the provided smart contracts using Truffle onto your preferred Blockchain network (local or testnet).
3) Connect Metamask: Connect your Metamask wallet to the application, allowing for secure interaction with the Blockchain.
4) Upload and Manage Documents: Utilize the application interface to upload, manage, and share documents securely using Blockchain technology.
