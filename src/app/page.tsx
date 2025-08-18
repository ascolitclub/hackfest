import {
  CommunitySection,
  HackFestCommunityCoordinator,
} from "@/components/Community";
import { Countdown } from "@/components/Countdown";
// import { FAQs } from "@/components/FAQ";
import FAQ_AD from "@/components/FAQ/FAQ_AD";
import { HeroSection } from "@/components/Hero";
import LogoCloud from "@/components/LogoCloud/LogoCloud";
import TeamSection from "@/components/Team/Team";
import Testimonials from "@/components/Testimonials/Testimonials";

function Home() {
  return (
    <>
      <HeroSection />
      <Countdown />
      <LogoCloud />
      <TeamSection />
      <HackFestCommunityCoordinator />
      <Testimonials />
      <FAQ_AD />
      <CommunitySection />
    </>
  );
}

export default Home;
