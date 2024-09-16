"use client";

import { AnimatedBeamMultipleOutputDemo } from "@/components/demos/animated-beam-demo";
import { AnimatedShinyTextDemo } from "@/components/demos/animated-shiny-text-demo";
import BoxRevealDemo from "@/components/demos/box-reveal-demo";
import { CoverDemo } from "@/components/demos/cover-demo";
import backgroundImage from "@/public/images/main-hero.jpg"
import { ScrollBasedVelocityDemo } from "@/components/demos/scroll-based-velocity-demo";
import { WordPullUpDemo } from "@/components/demos/word-pull-up-demo";
import BoxReveal from "@/components/magicui/box-reveal";
import NumberTicker from "@/components/magicui/number-ticker";
import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
import Image from "next/image";
import Link from "next/link";
import { PiCheckBold } from "react-icons/pi";
import { Link as ScrollLink, Element } from "react-scroll";
import { IconStarFilled } from "@tabler/icons-react";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/demos/shooting-stars-demo";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import Services from "@/components/2ui/services";
import Allservices from "@/public/images/all-services";
import { DeckingTypes } from "./about-us/decking-types";
import Navbar from "./about-us/ui/Navbar";


const services = [
  {
    icon: "/pest/freeco.png",
    title: " ECO FRIENDLY TECHNOLOGIES ",
    description:
      "Eco friendly technologies is also used to describe a class of electronic devices that can promote and help to pest control",
  },
  {
    icon: "/pest/homico.png",
    title: "FREE HOME INSPECTION",
    description:
      "A home inspection is a limited, non-invasive examination of the condition of a home, often in connection with the sale",
  },
  {
    icon: "/pest/manico.png",
    title: "PROFESSIONAL & PROTECTED",
    description:
      "We have a great, professional and high-quality team, our trained staff will protect your home and family against any pests",
  },
  {
    icon: "/pest/homico.png",
    title: "FAST PEST REMOVAL",
    description:
      "We are the company for safe pest removal. We know all about dangerous insect and provide insects control treatments",
  },

];

export default function Home() {
  return (
    <div
      className="overflow-clip 
 inset-0 
 -z-10 h-full w-full  bg-[#fafafa]
  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
   bg-[size:14px_24px]"
    >
    <Image
        src={backgroundImage}
        alt="Hero Background"
        style={{ height:"550px"}} 
        className="absolute inset-0 z-0 "
      />


<Navbar/>

{ /*

  <Element
        name="top"
        className="overflow-hidden rounded-[6px] top-5 sticky md:mx-auto z-50 
  bg-white flex items-center 
   justify-between py-6 px-4 md:px-8 mx-6"
      >



        <Link href={"/"}>
         <p className="text-[20px] text-bold"> HG Decking</p>
        </Link>

        <div className="absolute right-1/2 translate-x-1/2 transform">
          <div className="hidden  md:flex gap-x-10 items-center text-gray-700 font-medium text-lg cursor-pointer">
            <Link href={"/showcase"} className="hover:text-blue-500">
              Home
            </Link>
            <Link href={"/showcase"} className="hover:text-blue-500">
              About US
            </Link>


            <ScrollLink
              to="services"
              smooth={true}
              className="hover:text-blue-500"
            >
              Services
            </ScrollLink>

            <ScrollLink
              to="process"
              smooth={true}
              className="hover:text-blue-500"
            >
              Testimonials
            </ScrollLink>


          </div>
        </div>

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
  text-[16px]
  md:text-lg 
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
      </Element>
 */}

      

      <main className="md:pb-10 pt-[5rem] md:pt-[9rem]">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-14">
         

<div className="">

          <h1>
            <CoverDemo />
          </h1>
         
</div>
       

          

          <div className="grid md:pt-[3rem] grid-cols-2 md:grid-cols-4 gap-4 items-center text-left md:justify-items-center md:mx-auto mt-[3rem] md:mt-16">
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Decking
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Balustrades
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                pergolas
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
               Pool Decking
              </p>
            </BoxReveal>
          </div>

          <div className="md:flex items-center justify-between gap-y-4 my-10 gap-x-28 mx-auto">
            <div className="md:w-2/5">
              <h1 className="text-2xl font-medium text-gray-600 w-4/5">
                Trusted by South Africans
              </h1>

              <div className="flex my-6 gap-x-5 w-full">
                <div>
                  <h1 className="text-blue-500 text-3xl md:text-5xl">
                    <NumberTicker value={100} /> +
                    <p className="text-gray-500 text-sm md:text-md">
                      Happy Clients
                    </p>
                  </h1>
                </div>

                <div className="w-px bg-gray-300 self-stretch"></div>

                <div className="flex-1 min-w-0">
                  <h1 className="text-blue-500 text-3xl md:text-5xl whitespace-nowrap overflow-hidden">
                    <NumberTicker value={50} /> +
                    <p className="text-gray-500 text-sm md:text-md">
                      Projects Completed
                    </p>
                  </h1>
                </div>
              </div>
            </div>

            <section className="overflow-hidden mt-10 w-full h-[200px] md:w-4/5">
              <InfiniteMovingLogos
                speed="slow"
                direction="left"
                items={[
                  {
                    logo: "/images/img3.jpg",
                    name: "Logo",
                  },
                  {
                    logo: "/images/pimg1.jpg",
                    name: "Logo",
                  },
                  {
                    logo: "/images/img4.jpg",
                    name: "Logo",
                  },
                  {
                    logo: "/images/pool3.jpg",
                    name: "Logo",
                  },
                ]}
              />
            </section>
          </div>
        </div>
      </main>









      <h3
            className="
           text-2xl md:text-4xl my-6 md:my-10 md:text-center px-[2rem] font-extrabold text-blue-300">

WOODEN PATIO DECKING, PERGOLAS & BALUSTRADES
          </h3>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-2 mx-auto my-[3rem]">
     
        <div className="max-auto mx-[2rem] md:ml-[4rem]">
          
          <h3
            className="
           text-xl md:text-l my-6 md:my-10  text-bold text-gray-500"
          >
          When it comes to customization in superior deck building, the deck company to call on is Synthetic Deck.  That is one of the reasons we are the number one choice in South Africa, we are focused on just working on deck building, deck repairs and services related to decks. 
<br/>
<br/>


You can feel secure knowing that every one of our crew members is as dedicated to perfection in craftsmanship and superior customer care. We take great pride in the work that we do and in this industry in general. This is all evident in the results that we are able to provide for each and every one of our customers.



          </h3>
          <p
            className="
           text-xl md:text-xl my-6 md:my-10  text-gray-500"
          >
            Our expertise lies in delivering a high level of pest management, creating pest-free environments conducive to comfortable living and peak performance. By eliminating diseases associated with pests, we ensure that residents can live comfortably and employees can perform at their optimum level.
          </p>

          <Link
            href="/meeting"
            className="py-3 
            px-10
            md:px-16
      md:text-xl
      hover:bg-[#abcbff] 
      roundend-[4x]
      border-2 
      border-black 
      dark:border-white 
       bg-[#121212] 
       text-white 
       transition 
       duration-200 
       hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
          >
            About Us
          </Link>
        </div>
        <div className="mx-auto pt-[5rem] px-[2rem]">
          <Image
            src={"/images/pool4.jpg"}
            width={10000}
            height={10000}
            className=""
            alt="image"
          />
        </div>
      </section>













      <Element name="services">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto pt-[2rem]">
          <h1>
            <WordPullUpDemo />
          </h1>
          <p className="md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">

            Trusted. Experienced. Dedicated
          </p>

         
        </div>
      </Element>









<Allservices/>



      <section className="py-20">
        <ScrollBasedVelocityDemo />
      </section>

      <section>

        <h1 className="text-xl md:text-2xl md:text-center pt-[2rem] font-medium flex i gap-x-2 md:mx-auto ">
          What our Clients are saying

        </h1>


        <main className="md:flex items-center justify-center space-y-6 md:space-y-0 md:gap-x-20 xl:w-4/5 2xl:w-[68%] mx-auto px-6 md:px-0">

          <div className="flex flex-col gap-y-5 pt-4">
            <h1 className="text-lg md:text-xl ">
             It has Been amazing working with Huggie Decking company , they have been transparent in each and every step of the project and the 
             way they do the work is professional and I highly recommend them for any decking project
            </h1>
            <div className="flex items-center gap-x-1">
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
            </div>

            <span className="text-xl font-medium">
              Sandile Mthethwa
            </span>
          </div>
          <div className="flex flex-col gap-y-5 ">
            <h1 className="text-lg md:text-xl ">
             Amazing work by Huggie and team they are the best in decking , I highly recommend them
            </h1>
            <div className="flex items-center gap-x-1">
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
            </div>

            <span className="text-xl font-medium">
              Jordan, Brisson 
            </span>
          </div>


          <div className="flex flex-col gap-y-5 ">
            <h1 className="text-lg md:text-xl ">
             If you are looking for modern decking to elavate your house look no further they are the best when it comes to decking
            </h1>
            <div className="flex items-center gap-x-1">
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
            </div>

            <span className="text-xl font-medium">
              Jordan, Brisson <br />
              CEO, Atlas Massage
            </span>
          </div>




        </main>
      </section>

      <Element name="guarentees">
        <ShootingStarsAndStarsBackgroundDemo />
      </Element>

<div className="pt-[6rem]">
<DeckingTypes/>
</div>


      <section className="my-10 md:py-20 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <LetsMakeThingsHappenSection />
      </section>

      <footer className="bg-[#fafafa] py-10  px-6 md:px-0 md:mx-auto border-t">
        <div className="flex flex-col  justify-between gap-y-3 xl:w-4/5 2xl:w-[68%] mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium ">
            Huggie Decking
          </h1>
          <div className="grid grid-cols-2 gap-6">
        <p className="text-left  text-xl  text-gray-500">+27 69 238 9358</p>
        <p className="text-left  text-xl  text-gray-500">
          Pool Decking
        </p>
        <p className="text-left  text-xl  text-gray-500">
          Wall decking
        </p>
        
        <p className="text-left  text-xl  text-gray-500">
          Huggie@huggiedecking.co.za
        </p>
        </div>
        </div>

        <div className="flex md:justify-center gap-x-4 mt-10">
          © 2025 Huggie Decking. All Rights Reserved.
          <Link href="/" className="text-blue-500">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
}
