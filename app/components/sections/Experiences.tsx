import React from "react";
import { Experience } from "../../../utils/types";
import { Card } from "../ui/Card";
export default function Experiences({
    experiences,
    sectionId,
  }: {
    experiences: Experience[];
    sectionId: string;
  }) {
    return (
      <section
        id={sectionId}
        className="flex justify-center items-center min-h-screen font-mono px-4 sm:px-8 md:px-16 bg-gradient-to-b to-green-50 from-yellow-50 text-gray-900"
      >
        <Card>
          <div className="py-10 px-4 sm:px-6 lg:px-10 max-w-5xl w-full">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative pl-10 ${
                  index === experiences.length - 1
                    ? "border-l-0 mb-0"
                    : "border-l-2 border-orange-100 pb-10"
                }`}
              >
                <div className="absolute -left-4 top-1 w-fit h-fit rounded-full text-2xl">💡</div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-green-800">
                    {exp.role}
                  </h3>
                  <p className="text-base md:text-lg text-green-700 flex flex-wrap gap-2 mt-1">
                    <span className="text-blue-700 font-medium">{exp.company}</span>
                    <span className="hidden sm:inline">|</span>
                    <span>{exp.period}</span>
                  </p>
                  <ul className="list-disc list-inside mt-3 space-y-2 text-green-900 text-sm md:text-base">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>
    );
  }
  
