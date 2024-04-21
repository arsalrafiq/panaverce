import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="text-teal-900 grid grid-cols-1 lg:grid-cols-3 gap-2 py-8 px-8">
      <div className="border-t p-8 ">
        <div className="flex flex-col justify-between h-full items-center">
          <div>
            <Image
              src="/panaverse-logo.png"
              width={110}
              height={110}
              alt="panaverse-logo"
            />
            <p className="px-4 text-lg">
              Certified Web 3.0 and Metaverse Developer A One and Quarter Years
              Panaverse DAO Earn as you Learn Program Getting Ready for the Next
              Generation of the Internet
            </p>
          </div>
          <div className="flex space-x-2 p-2">
            <FacebookIcon className="text-gray-600" />
            <YoutubeIcon className="text-gray-600" />
            <TwitterIcon className="text-gray-600" />
            <SmartphoneIcon className="text-gray-600" />
          </div>
        </div>
      </div>
      <div className="border-t p-8 py-16 ">
        <div>
          <h3 className="text-lg font-medium ">Programs</h3>
          <ul className="text-lg">
            <li>Web 3.0 and Metaverse Developer</li>
            <li>Artificial Intelligence</li>
            <li>Cloud-Native Computing</li>
            <li>Ambient Computing and IoT</li>
            <li>Genomics and Bioinformatics</li>
            <li>Network Programmability and Automation</li>
          </ul>
        </div>
      </div>
      <div className="border-t p-8 py-20 ">
        <div>
          <h3 className="text-lg font-medium ">Pages</h3>
          <ul className="text-lg ">
            <li>Home</li>
            <li>Quarter 1</li>
            <li>Quarter 2</li>
            <li>Quarter 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
function FacebookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YoutubeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

function TwitterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function SmartphoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}
