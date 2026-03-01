import { Header } from "@/components/header/header";
import { Hero } from "@/components/hero/hero";
import { About } from "@/components/about/about";
import { Experience } from "@/components/experience/experience";
import { Projects } from "@/components/projects/projects";
import { Stats } from "@/components/stats/stats";
import { Contact } from "@/components/contact/contact";

export default function Page() {
    return (
        <>
            <Header />
            <Hero />
            <Projects />
            <About />
            <Experience />
            <Stats />
            <Contact />
        </>
    );
}