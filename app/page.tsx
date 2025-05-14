import About from "./components/sections/About";
import ContactMe from "./components/sections/ContactMe";
import Experiences from "./components/sections/Experiences";
import Hero from "./components/sections/Hero";
import Sidebar from "./components/ui/Sidebar";
import Skills from "./components/sections/Skills";
import { aboutMe, experiences, hero, navItems, profile, skill, welcome,projects, educationData } from "../utils/data";
import Projects from "./components/sections/Projects";
import Education from "./components/sections/Education";


export default function Home() {
  return (
    <div className="flex flex-col">
        <Sidebar />
        <Hero sectionId={navItems[0].id} githubUrl={profile.github.url} hero={hero} />
        <About sectionId={navItems[1].id} aboutMe={aboutMe} />
        <Skills sectionId={navItems[2].id} skill={skill} />
        <Experiences sectionId={navItems[3].id} experiences={experiences} />
        <Projects sectionId={navItems[4].id} projects={projects} />
        <Education education={educationData} sectionId={navItems[5].id} />      
        <ContactMe sectionId={navItems[6].id} profile={profile} welcome={welcome.text} />
    </div>
  );
}
