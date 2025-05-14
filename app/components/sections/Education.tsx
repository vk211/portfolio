import React from "react";
import type { Education} from "../../../utils/types";
import { Card } from "../ui/Card";

export default function Education({
  education,
  sectionId,
}: {
  education: Education[];
  sectionId: string;
}) {
  return (
    <section
      id={sectionId}
      className="flex flex-col justify-center items-center min-h-screen px-4 sm:px-8 md:px-16 bg-gradient-to-b from-yellow-50 to-green-50 text-gray-900"
    >
      <h1 className="text-4xl font-bold text-center text-gray-700 mb-10">
        EDUCATION
      </h1>

      <Card>
        <div className="py-10 px-4 sm:px-6 lg:px-10 max-w-5xl w-full">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`relative pl-10 ${
                index === education.length - 1
                  ? "border-l-0 mb-0"
                  : "border-l-2 border-orange-100 pb-10"
              }`}
            >
              <div className="absolute -left-4 top-1 w-fit h-fit rounded-full text-2xl">🎓</div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-green-800">
                  {edu.degree}
                </h3>
                <p className="text-base md:text-lg text-green-700 flex flex-wrap gap-2 mt-1">
                  <span className="text-blue-700 font-medium">{edu.institution}</span>
                  <span className="hidden sm:inline">|</span>
                  <span>{edu.duration}</span>
                </p>
                {edu.grade && (
                  <p className="text-green-600 text-sm md:text-base mt-1">
                    {edu.grade}
                  </p>
                )}
                {edu.highlights && (
                  <ul className="list-disc list-inside mt-3 space-y-2 text-green-900 text-sm md:text-base">
                    {edu.highlights.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}
