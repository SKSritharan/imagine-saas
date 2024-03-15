import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { LandingContent } from "@/components/landing-content";

const LandingPage = () => {
  return (
    <div className="h-full ">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
      <footer className="text-center text-gray-500 text-sm mt-8">
        Design & Development by Surendranathan Shasangan
      </footer>
    </div>
  );
};

export default LandingPage;
