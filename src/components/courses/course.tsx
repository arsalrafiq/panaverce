import React from "react";
import { Button } from "../ui/button";

const Courses = () => {
  const header = "Core Courses \n (Common in All Specializations):";

  // Array of course objects
  const courses = [
    {
      title: "Quarter I",
      description: "CS-101: Object-Oriented Programming using TypeScript",
      number:1
    },
    {
      title: "Quarter II",
      description: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
      number:2
    },
    {
      title: "Quarter III",
      description: "S-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
      number:3
    }
  ];

  return (
    <div>
      <div className="p-8">
        <h2 className="text-xl font-semibold">Program of Studies</h2>
        <h3 className="flex flex-col text-4xl font-semibold mt-2 whitespace-pre-line">
          {header}
        </h3>
        <p className="mt-2">
          Every participant of the program will start by completing the
          following three core courses.
        </p>
        <Button className="mt-4 rounded-full bg-green-900 text-lg">
          Enroll Now
        </Button>

        <div className="left-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-4 max-w-screen-xl max-auto">
          {/* Mapping over the courses array to render each course box */}
          {courses.map((course, index) => (
            <div key={index} className="p-4 relative">
              <p className="text-xl font-bold">{course.title}</p>
              <p className="text-sm font-medium">{course.description}</p>
              {/* Displaying the index (+1 because indexing starts from 0) */}
              <div className="text-gray-200 absolute top-0 right-0 font-bold text-9xl -z-10">{index + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;

