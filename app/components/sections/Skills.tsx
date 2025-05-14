import { SkillCategory, SkillInfo } from "../../../utils/types";
import Image from "next/image";

function SkillCard({ skill }: { skill: SkillInfo }) {
    return (
      <div className="w-[300px] h-[280px] bg-white shadow-lg rounded-2xl flex flex-col">
        <h2 className="text-xl font-bold rounded-t-2xl text-gray-600 bg-amber-100 p-4">
          {skill.label}
        </h2>
        <div className="flex flex-wrap gap-3 px-4 pt-2 pb-5 overflow-hidden">
          {skill.items.map((item) => (
            <div
              key={item.name}
              className="flex items-center bg-gray-100 shadow-sm py-1.5 px-3 gap-2 rounded-2xl hover:scale-110 transition-transform duration-200 cursor-pointer"
            >
              {item.logo && (
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              )}
              <span className="text-gray-600 text-sm font-medium">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  
  
  export default function Skills({
    skill,
    sectionId,
  }: {
    skill: SkillCategory;
    sectionId: string;
  }) {
    return (
      <section
        id={sectionId}
        className="w-full bg-gradient-to-b from-green-50 to-yellow-50 py-12 px-4"
      >
        <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-700 mb-10">
  SKILLS
</h1>

          <div className="flex flex-wrap justify-center gap-6">
            <SkillCard key={skill.language.label} skill={skill.language} />
            <SkillCard key={skill.backend.label} skill={skill.backend} />
            <SkillCard key={skill.frontend.label} skill={skill.frontend} />
            <SkillCard key={skill.devops.label} skill={skill.devops} />
            <SkillCard key={skill.api.label} skill={skill.api} />
            <SkillCard key={skill.tools.label} skill={skill.tools} />
          </div>
        </div>
      </section>
    );
  }