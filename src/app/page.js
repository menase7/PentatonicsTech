import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import ServiceSection from "@/components/ServiceSection";
import TeamMember from "@/components/TeamMember";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <ServiceSection />
      <ProjectSection />
      <TeamMember />
      <ContactForm />
    </div>
  );
}
