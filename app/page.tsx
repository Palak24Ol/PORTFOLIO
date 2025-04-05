import Encryption from "@/components/main/Encryption";
import Experience from "@/components/main/Experience";
import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
 
import RecentProjects from "@/components/main/RecentProjects";
import Skills from "@/components/main/Skills";

 

export default function Home() {
  return (
     <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero/>
        <Skills/>
        <Encryption />
        
        <RecentProjects/>
        <Experience />
        <Footer />


      </div>
      
     </main>
  );
}
