import Head from "next/head";

const CourseDescription = () => {
  return (
    <div className="relative">
      <div className="container mx-auto px-4 py-8 bg-gray-100 text-slate-800 mt-4 flex">
        {/* Left side - Course Description */}
        <div className="pr-80 flex-1 p-4 relative z-4">
        <h4 className="text-teal-500 text-lg">
          W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps
        </h4>
        <h2 className="text-4xl font-bold">Course Description:</h2>
        <p className="max-w-full">
          In this course you will learn how to develop Web 3.0 DApps, create a
          project, deploy it in production, write smart contracts, unit test
          them, and create user interfaces for them. We will also learn to
          develop ERC-20 and NFT tokens, DAOs, Oracles, etc. Please note that in
          order to develop Web 3 applications you also need to build on top of
          Web 2.0 technologies which we have already covered in the previous
          quarters.
        </p>
        <div className="flex items-center p-4">
          <div className="px-2 py-10 font-bold text-2xl w-60 h-32 border-2 border-teal-500 justify-center items-center">
            Specialized Track
          </div>
          <div className="px-2 py-10 text-2xl font-bold flex-col bg-teal-600 w-60 h-32 text-gray-100">
            Duration 13 Weeks
          </div>
        </div>
        <div className="course-title text-4xl font-bold mb-4">
          Course Outline: 
        </div>
        <p>
            <strong>
            Blockchain and Metaverse Theory
            </strong>
            by Matthew Ball
          </p>
        <p>
            <strong>
              The Metaverse: And How It Will Revolutionize Everything
            </strong>
            by Matthew Ball
          </p>
          <p>
            <strong>Mastering Blockchain - Fourth Edition</strong> by Imran
          Rafiq
          </p>
          <p>
            <strong>Smart Contract Development in Solidity</strong>
          </p>
          <ul>
            <li>
              <strong>Solidity Programming Essentials - Second Edition</strong>{" "}
              by Danish
            </li>
            <li>Solidity Learning Repo</li>
          </ul>
          <p>
            <strong>Dapp Development using Ethers.js and Next.js 13</strong>
          </p>
          <ul>
            <li>Dapp Learning Repo</li>
          </ul>
          <p>
            <strong>Tokennomics</strong>
          </p>
          <ul>
            <li>
              <strong>
                Blockchain Project: Create a Token and Launch ICO/IEO/IDO
              </strong>
            </li>
            <li>Understand the difference between IDO vs. IEO vs. ICO</li>
            <li>Project Part 1: How to Launch a IEO on Binance Launchpad</li>
            <li>Project Part 2: How to Launch a IDO on Polkastarter</li>
            <li>Project Part 3: Create a Pako Token</li>
            <li>Project Part 4: Develop Crowd Sale Contract</li>
            <li>Project Part 5: Trying it with MetaMask</li>
            <li>Project Part 6: Trying it with Multisignature Wallets</li>
            <li>Project Part 7: Sending Tokens using Ethers.js</li>
            <li>
              Project Part 8 Advance: Create, Deploy, Mint, and Sell an NFT
            </li>
          </ul>
      </div>
      {/* Right side - Program Structure */}
      <div className="absolute top-0 right-0  w-1/3 overflow-y-auto">
        <div className="flex-1  max-w-2xl start-0">
          <div className="shadow-sm border-2 mt-8 px-8 py-4 rounded-lg">
            <h4 className="text-xl font-bold">program-structure</h4>

            <p>
              After finishing the first three quarters, the participants will
              delve into two specialized quarters specific to their chosen
              specialization
            </p>
            <div className="mb-4 flex items-center space-x-5">
              <div className="cursor-pointer bg-teal-400 text-center w-12 py-2 m-2">
                Q1
              </div>
              <strong className="">Quarter I</strong>
            </div>
            <div className="mb-4 flex items-center space-x-5">
              <div className="cursor-pointer bg-teal-400 text-center w-12 py-2 m-2">
                Q2
              </div>
              <strong className="">Quarter II</strong>
            </div>
            <div className="mb-4 flex items-center space-x-5">
              <div className="cursor-pointer bg-teal-400 text-center w-12 py-2 m-2">
                Q3
              </div>
              <strong className="">Quarter III</strong>
            </div>
            <div className="mb-4 flex items-center space-x-5">
              <div className="cursor-pointer bg-teal-400 text-center w-12 py-2 m-2">
                Q4
              </div>
              <strong className="">Quarter IV</strong>
            </div>
            <div className="mb-4 flex items-center space-x-5">
              <div className="cursor-pointer bg-teal-400 text-center w-12 py-2 m-2">
                Q5
              </div>
              <strong className="">Quarter V</strong>
            </div>
          </div>
        </div>
      </div>{" "}
    </div></div>
  );
};

export default CourseDescription;

