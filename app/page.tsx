import { Header } from "@/components/header/header";
import { Hero } from "@/components/hero/hero";
import { About } from "@/components/about/about";
import { Resume } from "@/components/resume/resume";
import { Experience } from "@/components/experience/experience";
import { Projects } from "@/components/projects/projects";
import { Stats } from "@/components/stats/stats";
import { Contact } from "@/components/contact/contact";

export default function Page() {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Stats />
            <Resume />
            <Contact />
        </>
    );
}