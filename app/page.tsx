import About from "./components/sections/About";
import ContactMe from "./components/sections/ContactMe";
import Experiences from "./components/sections/Experiences";
import Hero from "./components/sections/Hero";
import Sidebar from "./components/ui/Sidebar";
import Skills from "./components/sections/Skills";
import { aboutMe, experiences, hero, navItems, profile, skill, welcome } from "../utils/data";

export default function Home() {
  return (
    <div className="flex flex-col">
        <Sidebar />
        <Hero sectionId={navItems[0].id} githubUrl={profile.github.url} hero={hero} />
        <About sectionId={navItems[1].id} aboutMe={aboutMe} />
        <Skills sectionId={navItems[2].id} skill={skill} />
        <Experiences sectionId={navItems[3].id} experiences={experiences} />
        <ContactMe sectionId={navItems[4].id} profile={profile} welcome={welcome.text} />
    </div>
  );
}
