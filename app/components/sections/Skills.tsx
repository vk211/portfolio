import { SkillCategory, SkillInfo } from "../../../utils/types";
import Image from "next/image";


function SkillCard({ skill }: { skill: SkillInfo }) {
    return <div className="bg-white shadow-lg w-full md:max-w-1/4 rounded-2xl">
        <h2 className="text-xl font-bold mb-4 rounded-t-2xl text-gray-600 bg-amber-100 p-4">{skill.label}</h2>
        <div className="flex flex-wrap gap-4 px-4 pb-4">
            {skill.items.map((item) => (
                <div key={item.name} className="flex items-center bg-gray-100 shadow-sm py-2 px-3 gap-2 rounded-2xl hover:scale-110 transition-transform duration-200 cursor-pointer">
                    {item.logo && <Image src={item.logo} alt={item.name} width={20} height={20} className="w-6 h-6" />}
                    <span key={item.name} className="text-gray-600 font-medium">{item.name}</span>
                </div>
            ))}
        </div>
    </div>
}

export default function Skills({ skill, sectionId }: { skill: SkillCategory; sectionId: string }) {
    return (
        <section id={sectionId} className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-yellow-50">
            <div className="min-h-screen flex flex-col items-center justify-center py-10">
                <div className="flex flex-row flex-wrap justify-center gap-6 px-4">
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
