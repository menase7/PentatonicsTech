import Blogs from "@/components/Blogs";
import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import ServiceSection from "@/components/ServiceSection";
import TeamMember from "@/components/TeamMember";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <ServiceSection />
      <ProjectSection />
      {/* <TeamMember /> */}
      {/* <Testimonials /> */}
      <Blogs />
      <ContactForm />
    </div>
  );
}
