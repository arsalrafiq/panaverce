"use client"
import React, { useState } from "react";
import Image from "next/image";


const outcomepoint: string[] = [
  "Product Ownership",
  "Freelancing",
  "Global Marketing by Panaverse DAO",
  "Boosting Economy",
];

const Programmes: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>(
    outcomepoint.reduce((acc, _, index) => {
      acc[index] = true;
      return acc;
    }, {})
  );

  const handleCheckboxChange = (index: number) => {
    setCheckedItems({
      ...checkedItems,
      [index]: !checkedItems[index],
    });
  };

  return (
    <section className="flex item-centre justify-between flex-col-reverse md:flex-row p-8">
      <div className="items-center p-12">
        <Image
          src="/outcome-poster.webp"
          width={1800}
          height={1800}
          alt="program-outcome"
        />
      </div>
     <div>  <h2 className="text-2xl font-extrabold mt-20 justify-between items-center">
        The Outcome for Participants of the Program
      </h2>
      <p>
        As a graduate of this program, you will own valuable products such as
        Full-Stack App Templates, AR and VR Experiences, and APIs that are
        marketed globally by the Panaverse DAO. You will also have the
        opportunity to offer your services at a rate of $50 per hour, providing
        a path to financial stability while contributing to the growth of
        Pakistan's software exports.
      </p>

     <div className="grid grid-cols-2 items-center p-8 gap-8"> 
        {outcomepoint.map((item, index) => (
          <div key={index} className="items-center space-x-2">
            <input
              type="checkbox"
              id={`checkbox-${index}`}
              checked={checkedItems[index]}
              onChange={() => handleCheckboxChange(index)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <label htmlFor={`checkbox-${index}`}>{item}</label>
          </div>
        ))}</div>
      </div>
    </section>
  );
};

export default Programmes;
