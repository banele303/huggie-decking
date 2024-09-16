import { BlurFadeDemo } from "@/components/demos/blur-fade-demo";
import Footer from "@/components/footer";
import WordFadeIn from "@/components/magicui/word-fade-in";
import ShowcaseNavbar from "@/components/showcase-navbar";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import Image from "next/image";
import Link from "next/link";
import backgroundImage from "@/public/images/main-hero.jpg"
import { AboutHero } from "./about-hero";
import { SecondSection } from "./second-section";
import { DeckingTypes } from "./decking-types";
import Navbar from "./ui/Navbar";


const AboutUS = () => {
  return (
    <div
      className="
        overflow-clip 
 inset-0 
 -z-10 h-full w-full bg-[#fafafa]
  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
   bg-[size:14px_24px] md:px-[2rem]"
   
    >
     

     <section
      
        className="overflow-hidden rounded-[6px] top-5 sticky md:mx-auto z-50 
  bg-white flex items-center 
   justify-between py-6 px-4 md:px-8 mx-6"
      >
        <Link href={"/"}>
          <Image
            src={"/logo/logo.webp"}
            alt="Logo"
            width={1000}
            height={1000}
            className="w-28"
          />
        </Link>

       <Navbar/>

        <div className="flex items-center gap-x-4">
          <a href="tel:519400200" className="hidden lg:flex">
            <button className="px-4 py-2 rounded-md flex items-center gap-x-3">
              +27 74 684 5729
            </button>
          </a>

          <Link
            href={"/meeting"}
            className="
  py-3 
  px-6
  text-lg 
  hover:bg-[#abcbff]
  rounded-[6px]
  border-2
  border-black
  text-white
  bg-[#121212]
  transition
  duration-200
     hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
          >
            Book a call
          </Link>
        </div>
      </section>
      <Image
        src={backgroundImage}
        alt="Hero Background"
        style={{   height:"500px"}} 
        className="absolute inset-0 z-0 "
      />










<AboutHero/>

<SecondSection/>

<DeckingTypes/>
    </div>
  );
};

export default AboutUS;
