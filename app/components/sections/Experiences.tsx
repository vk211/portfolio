import React from "react";
import { Experience } from "../../../utils/types";
import { Card } from "../ui/Card";

export default function Experiences({experiences, sectionId}: {experiences: Experience[]; sectionId: string}) {
    return (
        <section id={sectionId} className="flex justify-center items-center min-h-screen font-mono px-3 bg-gradient-to-b to-green-50 from-yellow-50 text-gray-900">
            <Card>
                <div className="py-8 px-2 sm:px-4 max-w-fit">
                    {experiences.map((exp, index) => (
                        <div key={index} className={`w-[90%] sm:w-150 -left-2 relative ml-6 ${index === experiences.length - 1 ? 'border-l-0 mb-0' : 'pb-8 border-orange-100 border-l-2'}`}>
                            <div className="absolute w-fit h-fit rounded-full -left-3.5 text-2xl">💡</div>
                            <div className="ml-6">
                                <h3 className="text-xl font-semibold text-green-800">{exp.role}</h3>
                                <p className="text-lg text-green-700 flex flex-col sm:flex-row gap-1 sm:flex-wrap">
                                    <span className="text-blue-700">{exp.company}</span>
                                    <span className="hidden sm:block">|</span>
                                    <span>{exp.period}</span>
                                </p>
                                <ul className="list-disc list-inside mt-2 text-green-900">
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
};
