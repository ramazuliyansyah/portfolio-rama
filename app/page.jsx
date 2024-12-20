import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">IT Support & Jr. Web Developer</span>
            <h1 className="h1 mb-6">
              Hello I&#39;m <br />{" "}
              <span className="text-accent">Rama Zuliyansyah</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              An enthusiastic IT Support and Junior Web Developer with a passion
              for technology and problem-solving. My journey in the tech world
              has been driven by a desire to help others navigate and leverage
              technology effectively.
            </p>
            {/* button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/assets/resume/CV_Rama Zuliyansyah_2024 (v1).pdf"
                download="CV_Rama Zuliyansyah_2024 (v1).pdf"
                className="uppercase flex items-center gap-2"
              >
                <Button variant="outline" size="lg">
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
