"use client"
import React, { useState } from "react";

const programsData = [
  {
    slug: "metaverse",
    image: "/metaverse.webp",
    header: "Web 3.0 (Blockchain) and Metaverse Specialization",
    description: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    quarters: [
      {
        title: "Quarter IV",
        description: "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 D",
        number: 4
      },
      {
        title: "Quarter V",
        description: "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
        number: 5
      }
    ]
  },
  {
    slug: "ambient",
    image: "/ambient.webp",
    header: "Ambient Computing and IoT Specialization",
    description: "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
    quarters: [
      {
        title: "Quarter IV",
        description: "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
        number: 4
      },
      {
        title: "Quarter V",
        description: "AI-361: Deep Learning and MLOps",
        number: 5
      }
    ]
  },
  { 
    slug:"network",
    image: "/network.webp", 
    header: "Cloud-Native Computing Specialization",
    description:"The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
    quarters:[
    {
      title: "Quarter IV",
      description: "CN-351: Certified Kubernetes Application Developer (CKAD)",
      number: 4
    },
    {
      title: "Quarter V",
      description: "CN-361: Developing Multi-Cloud Apps using CDK for Terraform",
      number: 5
    },]
  },
  { 
    slug:"genomics",
    image: "/genomics.webp", 
    header: "Genomics and Bioinformatics Specialization",
    description:"Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
    quarters:[
    {
      title: "Quarter IV",
      description: "Bio-361: Bioinformatics with Python",
      number: 4
    },
    {
      title: "Quarter V",
      description: "Bio-351: Python for Biologists",
      number: 5
    },]
  },
  { 
    slug:"ai",
    image: "/ai.webp", 
    header: "Artificial Intelligence (AI) and Deep Learning Specialization",
    description:"The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
    quarters:[
    {
      title: "Quarter IV",
      description: "Bio-361: Bioinformatics with Python",
      number: 4
    },
    {
      title: "Quarter V",
      description: "Bio-351: Python for Biologists",
      number: 5
    },]
  }
];

const QuarterBox = ({ description, header, number }:any) => (
  <div className={`flex flex-col p-4 relative gap-12`}>
    <p className="text-sm font-bold">{header}</p>
    <p className="text-xs text-gray-500">{description}</p>
    <p className="text-gray-200 absolute top-0 right-0 font-bold text-9xl -z-10">{number}</p>
  </div>
);

const Task = () => {
  const [selectedItem, setSelectedItem] = useState("ai");

  const handleItemClick = (slug:any) => {
    setSelectedItem(slug);
  };

  const selectedItemData = programsData.find((item) => item.slug === selectedItem);

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center lg:justify-between">
      <div className="basis-8/12 p-4">
        <h2 className="text-4xl font-bold py-4">Specialized Tracks:</h2>
        <p className="mt-4">
          After completing the first three quarters, the participants will select
          one or more specializations consisting of two courses each.
        </p>
        {selectedItemData && (
          <>
            <div className="shadow-xl rounded-xl border border-slate-200 py-8 px-8 mt-4 sticky top-24"> 
            <h2 className="text-xl text-teal-900 font-bold py-4">Specialized Tracks:</h2>
            <h3 className="text-2xl font-semibold mt-8">{selectedItemData.header}</h3>
            <p className="mt-2">{selectedItemData.description}</p>
            <div className="mt-4">
            <button className="text-lg font-bold mt-4 underline">Learn More</button>
            <div className="lg:flex">
              {selectedItemData?.quarters.map((quarter, index) => (
            
              <QuarterBox 
                  key={index}
                  description={quarter.description}
                  header={quarter.title}
                  number={quarter.number}
                        haveBorder={false}    /> 
              ))}
            </div> 
            </div>
            </div>
          </>
        )}
      </div>

      <div className="px-4 space-y-4 py-6 basis-4/12 bg-slate-100 flex-1">
        {programsData.map((item) => (
          <div key={item.slug} onClick={() => handleItemClick(item.slug)} className={`flex px-4 py-4 gap-x-4 mb-4 lg:mb-0 cursor-pointer ${selectedItem === item.slug ? 'border-2 border-blue-500' : ''}`}>
            <img src={item.image} className="w-40 h-24" alt="product" />
            <div>
              <h4 className="text-primary font-medium">Specialized Program</h4>
              <h3 className="text-xl font-semibold">{item.header}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task;
