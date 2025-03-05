import Image from "next/image"
import Link from "next/link"
import { ChevronRight, MapPin, Phone, Mail, Clock, CheckCircle, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/pest/deck-hero.jpeg"
            alt="Premium decking installation by Huggie Decking"
            fill
            className="object-cover brightness-[.25]"
            priority
          />
        </div>
        <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl items-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Transform Your Outdoor Space
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
              Premium decking solutions in Johannesburg by Huggie Decking
              
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                Get a Free Quote
              </Button>
              <Button size="lg" variant="outline" className="bg-black/30 text-white border-white hover:bg-black/50">
                View Our Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/*  Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Decking </h2>
            <p className="text-lg text-gray-600 max-w-5xl mx-auto">
              We provide premium decking solutions tailored to your needs and space<br/><br/>
              When it comes to customization in superior deck building, the deck company to call on is Synthetic Deck.  That is one of the reasons we are the number one choice in South Africa, we are focused on just working on deck building, deck repairs and  related to decks. 
<br/>
<br/>


You can feel secure knowing that every one of our crew members is as dedicated to perfection in craftsmanship and superior customer care. We take great pride in the work that we do and in this industry in general. This is all evident in the results that we are able to provide for each and every one of our customers.


            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02]">
              <div className="h-64 relative">
                <Image
                  src="/pest/deck-hero.jpeg"
                  alt="Composite Decking"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Composite Decking</h3>
                <p className="text-gray-600 mb-4">
                  Durable, low-maintenance composite decking that withstands the Johannesburg climate.
                  
                </p>
                <Link href="/" className="text-amber-600 font-medium inline-flex items-center">
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02]">
              <div className="h-64 relative">
                <Image
                  src="/pest/sdeck.jpeg"
                  alt="Custom Deck Design"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Custom Deck Design</h3>
                <p className="text-gray-600 mb-4">
                  Bespoke deck designs including multi-level decks, stairs, and integrated features.
                </p>
                <Link href="/" className="text-amber-600 font-medium inline-flex items-center">
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02]">
              <div className="h-64 relative">
                <Image
                  src="/images/pimg1.jpg"
                  alt="Pool Decking"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Pool Decking</h3>
                <p className="text-gray-600 mb-4">
                  Specialized pool surrounds and decking solutions for residential and commercial pools.
                </p>
                <Link href="/" className="text-amber-600 font-medium inline-flex items-center">
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Huggie Decking</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're committed to quality, reliability, and exceptional customer service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Quality Materials</h3>
              <p className="text-gray-600">Premium composite and timber decking materials built to last</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Expert Installation</h3>
              <p className="text-gray-600">Skilled craftsmen with years of experience in decking installation</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">5-Year Warranty</h3>
              <p className="text-gray-600">Peace of mind with our comprehensive workmanship warranty</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Free Consultations</h3>
              <p className="text-gray-600">Personalized advice and no-obligation quotes for your project</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Featured Projects</h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Browse through our recent decking installations across Johannesburg
              </p>
            </div>
            <Button className="mt-4 md:mt-0 bg-amber-600 hover:bg-amber-700 self-start">View All Projects</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <div className="group relative overflow-hidden rounded-lg shadow-md">
              <div className="h-80 relative">
                <Image
                  src="/images/ww1.jpg"
                  alt="Residential Deck Project"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Modern Composite Deck</h3>
                <p className="mb-3">Sandton, Johannesburg</p>
                <Link href="/projects" className="inline-flex items-center text-amber-300 font-medium">
                  View project <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative overflow-hidden rounded-lg shadow-md">
              <div className="h-80 relative">
                <Image
                  src="/images/pool5.jpg"
                  alt="Pool Deck Project"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Luxury Pool Surround</h3>
                <p className="mb-3">Bryanston, Johannesburg</p>
                <Link href="/projects" className="inline-flex items-center text-amber-300 font-medium">
                  View project <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group relative overflow-hidden rounded-lg shadow-md">
              <div className="h-80 relative">
                <Image
                  src="/images/mm.jpg"
                  alt="Multi-level Deck Project"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Multi-level Garden Deck</h3>
                <p className="mb-3">Fourways, Johannesburg</p>
                <Link href="/projects" className="inline-flex items-center text-amber-300 font-medium">
                  View project <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don&apos;t just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                &quote;Huggie Decking transformed our backyard into an amazing entertainment space. The quality of work and
                attention to detail was outstanding.&quote;
              </p>
              <div>
                <p className="font-bold">Sarah Johnson</p>
                <p className="text-gray-500">Sandton, Johannesburg</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
              &quote;Professional from start to finish. The team was punctual, clean, and completed our deck ahead of
                schedule. Couldn't be happier with the result.&quote;
              </p>
              <div>
                <p className="font-bold">Michael Nkosi</p>
                <p className="text-gray-500">Fourways, Johannesburg</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
              &quote;We had a complex multi-level deck project with integrated seating. Huggie Decking provided excellent
                advice and delivered a stunning result that exceeded our expectations.&quote;
              </p>
              <div>
                <p className="font-bold">David & Lisa Thompson</p>
                <p className="text-gray-500">Bryanston, Johannesburg</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Outdoor Space?</h2>
            <p className="text-xl mb-8">
              Contact us today for a free consultation and quote. We serve all areas in and around Johannesburg.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
                Get a Free Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-amber-700">
                View Our Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions or ready to start your decking project? Get in touch with our team.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="h-6 w-6 text-amber-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Phone</h3>
                    <p className="text-gray-600">+27 69 238 9358</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="h-6 w-6 text-amber-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Email</h3>
                    <p className="text-gray-600">info@huggiedecking.co.za</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="h-6 w-6 text-amber-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Location</h3>
                    <p className="text-gray-600">Johannesburg, South Africa</p>
                    <p className="text-gray-600">Serving all surrounding areas</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Clock className="h-6 w-6 text-amber-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8am - 5pm</p>
                    <p className="text-gray-600">Saturday: 9am - 2pm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                    placeholder="Tell us about your project"
                  ></textarea>
                </div>
                <Button className="w-full bg-amber-600 hover:bg-amber-700">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}





// "use client";

// import { AnimatedBeamMultipleOutputDemo } from "@/components/demos/animated-beam-demo";
// import { AnimatedShinyTextDemo } from "@/components/demos/animated-shiny-text-demo";
// import BoxRevealDemo from "@/components/demos/box-reveal-demo";
// import { CoverDemo } from "@/components/demos/cover-demo";
// import backgroundImage from "@/public/images/main-hero.jpg"
// import { ScrollBasedVelocityDemo } from "@/components/demos/scroll-based-velocity-demo";
// import { WordPullUpDemo } from "@/components/demos/word-pull-up-demo";
// import BoxReveal from "@/components/magicui/box-reveal";
// import NumberTicker from "@/components/magicui/number-ticker";
// import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
// import Image from "next/image";
// import Link from "next/link";
// import { PiCheckBold } from "react-icons/pi";
// import { Link as ScrollLink, Element } from "react-scroll";
// import { IconStarFilled } from "@tabler/icons-react";
// import { ShootingStarsAndStarsBackgroundDemo } from "@/components/demos/shooting-stars-demo";
// import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
// import  from "@/components/2ui/";
// import All from "@/public/images/all-";
// import { DeckingTypes } from "./about-us/decking-types";
// import Navbar from "./about-us/ui/Navbar";


// const  = [
//   {
//     icon: "/pest/freeco.png",
//     title: " ECO FRIENDLY TECHNOLOGIES ",
//     description:
//       "Eco friendly technologies is also used to describe a class of electronic devices that can promote and help to pest control",
//   },
//   {
//     icon: "/pest/homico.png",
//     title: "FREE HOME INSPECTION",
//     description:
//       "A home inspection is a limited, non-invasive examination of the condition of a home, often in connection with the sale",
//   },
//   {
//     icon: "/pest/manico.png",
//     title: "PROFESSIONAL & PROTECTED",
//     description:
//       "We have a great, professional and high-quality team, our trained staff will protect your home and family against any pests",
//   },
//   {
//     icon: "/pest/homico.png",
//     title: "FAST PEST REMOVAL",
//     description:
//       "We are the company for safe pest removal. We know all about dangerous insect and provide insects control treatments",
//   },

// ];

// export default function Home() {
//   return (
//     <div
//       className="overflow-clip 
//  inset-0 
//  -z-10 h-full w-full  bg-[#fafafa]
//   bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
//    bg-[size:14px_24px]"
//     >
//     <Image
//         src={backgroundImage}
//         alt="Hero Background"
//         style={{ height:"550px"}} 
//         className="absolute inset-0 z-0 "
//       />

// <Navbar/>




// { /*

//   <Element
//         name="top"
//         className="overflow-hidden rounded-[6px] top-5 sticky md:mx-auto z-50 
//   bg-white flex items-center 
//    justify-between py-6 px-4 md:px-8 mx-6"
//       >



//         <Link href={"/"}>
//          <p className="text-[20px] text-bold"> HG Decking</p>
//         </Link>

//         <div className="absolute right-1/2 translate-x-1/2 transform">
//           <div className="hidden  md:flex gap-x-10 items-center text-gray-700 font-medium text-lg cursor-pointer">
//             <Link href={"/showcase"} className="hover:text-blue-500">
//               Home
//             </Link>
//             <Link href={"/showcase"} className="hover:text-blue-500">
//               About US
//             </Link>


//             <ScrollLink
//               to=""
//               smooth={true}
//               className="hover:text-blue-500"
//             >
//               
//             </ScrollLink>

//             <ScrollLink
//               to="process"
//               smooth={true}
//               className="hover:text-blue-500"
//             >
//               Testimonials
//             </ScrollLink>


//           </div>
//         </div>

//         <div className="flex items-center gap-x-4">
//           <a href="tel:519400200" className="hidden lg:flex">
//             <button className="px-4 py-2 rounded-md flex items-center gap-x-3">
//               +27 74 684 5729
//             </button>
//           </a>

//           <Link
//             href={"/meeting"}
//             className="
//   py-3 
//   px-6
//   text-[16px]
//   md:text-lg 
//   hover:bg-[#abcbff]
//   rounded-[6px]
//   border-2
//   border-black
//   text-white
//   bg-[#121212]
//   transition
//   duration-200
//      hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
//           >
//             Book a call
//           </Link>
//         </div>
//       </Element>
//  */}

      

//       <main className="md:pb-10 pt-[5rem] md:pt-[9rem]">
//         <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-14">
         

// <div className="">

//           <h1>
//             <CoverDemo />
//           </h1>
         
// </div>
       

          

//           <div className="grid md:pt-[3rem] grid-cols-2 md:grid-cols-4 gap-4 items-center text-left md:justify-items-center md:mx-auto mt-[3rem] md:mt-16">
//             <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
//               <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
//                 <PiCheckBold className="text-xl text-blue-500" />
//                 Decking
//               </p>
//             </BoxReveal>
//             <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
//               <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
//                 <PiCheckBold className="text-xl text-blue-500" />
//                 Balustrades
//               </p>
//             </BoxReveal>
//             <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
//               <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
//                 <PiCheckBold className="text-xl text-blue-500" />
//                 pergolas
//               </p>
//             </BoxReveal>
//             <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
//               <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
//                 <PiCheckBold className="text-xl text-blue-500" />
//                Pool Decking
//               </p>
//             </BoxReveal>
//           </div>

//           <div className="md:flex items-center justify-between gap-y-4 my-10 gap-x-28 mx-auto">
//             <div className="md:w-2/5">
//               <h1 className="text-2xl font-medium text-gray-600 w-4/5">
//                 Trusted by South Africans
//               </h1>

//               <div className="flex my-6 gap-x-5 w-full">
//                 <div>
//                   <h1 className="text-blue-500 text-3xl md:text-5xl">
//                     <NumberTicker value={100} /> +
//                     <p className="text-gray-500 text-sm md:text-md">
//                       Happy Clients
//                     </p>
//                   </h1>
//                 </div>

//                 <div className="w-px bg-gray-300 self-stretch"></div>

//                 <div className="flex-1 min-w-0">
//                   <h1 className="text-blue-500 text-3xl md:text-5xl whitespace-nowrap overflow-hidden">
//                     <NumberTicker value={50} /> +
//                     <p className="text-gray-500 text-sm md:text-md">
//                       Projects Completed
//                     </p>
//                   </h1>
//                 </div>
//               </div>
//             </div>

//             <section className="overflow-hidden mt-10 w-full h-[200px] md:w-4/5">
//               <InfiniteMovingLogos
//                 speed="slow"
//                 direction="left"
//                 items={[
//                   {
//                     logo: "/images/img3.jpg",
//                     name: "Logo",
//                   },
//                   {
//                     logo: "/images/pimg1.jpg",
//                     name: "Logo",
//                   },
//                   {
//                     logo: "/images/img4.jpg",
//                     name: "Logo",
//                   },
//                   {
//                     logo: "/images/pool3.jpg",
//                     name: "Logo",
//                   },
//                 ]}
//               />
//             </section>
//           </div>
//         </div>
//       </main>









//       <h3
//             className="
//            text-2xl md:text-4xl my-6 md:my-10 md:text-center px-[2rem] font-extrabold text-blue-300">

// WOODEN PATIO DECKING, PERGOLAS & BALUSTRADES
//           </h3>

//       <section className="grid grid-cols-1 md:grid-cols-2 gap-2 mx-auto my-[3rem]">
     
//         <div className="max-auto mx-[2rem] md:ml-[4rem]">
          
//           <h3
//             className="
//            text-xl md:text-l my-6 md:my-10  text-bold text-gray-500"
//           >
       

//           </h3>
//           <p
//             className="
//            text-xl md:text-xl my-6 md:my-10  text-gray-500"
//           >
//             Our expertise lies in delivering a high level of pest management, creating pest-free environments conducive to comfortable living and peak performance. By eliminating diseases associated with pests, we ensure that residents can live comfortably and employees can perform at their optimum level.
//           </p>

//           <Link
//             href="/meeting"
//             className="py-3 
//             px-10
//             md:px-16
//       md:text-xl
//       hover:bg-[#abcbff] 
//       roundend-[4x]
//       border-2 
//       border-black 
//       dark:border-white 
//        bg-[#121212] 
//        text-white 
//        transition 
//        duration-200 
//        hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
//           >
//             About Us
//           </Link>
//         </div>
//         <div className="mx-auto pt-[5rem] px-[2rem]">
//           <Image
//             src={"/images/pool4.jpg"}
//             width={10000}
//             height={10000}
//             className=""
//             alt="image"
//           />
//         </div>
//       </section>













//       <Element name="">
//         <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto pt-[2rem]">
//           <h1>
//             <WordPullUpDemo />
//           </h1>
//           <p className="md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">

//             Trusted. Experienced. Dedicated
//           </p>

         
//         </div>
//       </Element>









// <All/>



//       <section className="py-20">
//         <ScrollBasedVelocityDemo />
//       </section>

//       <section>

//         <h1 className="text-xl md:text-2xl md:text-center pt-[2rem] font-medium flex i gap-x-2 md:mx-auto ">
//           What our Clients are saying

//         </h1>


//         <main className="md:flex items-center justify-center space-y-6 md:space-y-0 md:gap-x-20 xl:w-4/5 2xl:w-[68%] mx-auto px-6 md:px-0">

//           <div className="flex flex-col gap-y-5 pt-4">
//             <h1 className="text-lg md:text-xl ">
//              It has Been amazing working with Huggie Decking company , they have been transparent in each and every step of the project and the 
//              way they do the work is professional and I highly recommend them for any decking project
//             </h1>
//             <div className="flex items-center gap-x-1">
//               <IconStarFilled className="text-4xl text-yellow-500" />
//               <IconStarFilled className="text-4xl text-yellow-500" />
//               <IconStarFilled className="text-4xl text-yellow-500" />
//               <IconStarFilled className="text-4xl text-yellow-500" />
//               <IconStarFilled className="text-4xl text-yellow-500" />
//             </div>

//             <span className="text-xl font-medium">
//               Sandile Mthethwa
//             </span>
//           </div>
//           <div className="flex flex-col gap-y-5 ">
//             <h1 className="text-lg md:text-xl ">
//              Amazing work by Huggie and team they are the best in decking , I highly recommend them
//             </h1>
//             <div className="flex items-center gap-x-1">
//               <IconStarFilled className="text-4xl text-yellow-500" />
//               <IconStarFilled className="text-4xl text-yellow-500" />
//               <IconStarFilled className="text-4xl text-yellow-500" />
//               <IconStarFilled className="text-4xl text-yellow-500" />
//               <IconStarFilled className="text-4xl text-yellow-500" />
//             </div>

//             <span className="text-xl font-medium">
//               Jordan, Brisson 
//             </span>
//           </div>


//           <div className="flex flex-col gap-y-5 ">
//             <h1 className="text-lg md:text-xl ">
//              If you are looking for modern decking to elavate your house look no further they are the best when it comes to decking
//             </h1>
//             <div className="flex items-center gap-x-1">
//               <IconStarFilled className="text-4xl text-yellow-500" />
//               <IconStarFilled className="text-4xl text-yellow-500" />
//               <IconStarFilled className="text-4xl text-yellow-500" />
//               <IconStarFilled className="text-4xl text-yellow-500" />
//               <IconStarFilled className="text-4xl text-yellow-500" />
//             </div>

//             <span className="text-xl font-medium">
//               Jordan, Brisson <br />
//               CEO, Atlas Massage
//             </span>
//           </div>




//         </main>
//       </section>

//       <Element name="guarentees">
//         <ShootingStarsAndStarsBackgroundDemo />
//       </Element>

// <div className="pt-[6rem]">
// <DeckingTypes/>
// </div>


//       <section className="my-10 md:py-20 xl:w-4/5 2xl:w-[68%] md:mx-auto">
//         <LetsMakeThingsHappenSection />
//       </section>

//       <footer className="bg-[#fafafa] py-10  px-6 md:px-0 md:mx-auto border-t">
//         <div className="flex flex-col  justify-between gap-y-3 xl:w-4/5 2xl:w-[68%] mx-auto">
//           <h1 className="text-3xl md:text-5xl font-medium ">
//             Huggie Decking
//           </h1>
//           <div className="grid grid-cols-2 gap-6">
//         <p className="text-left  text-xl  text-gray-500">+27 69 238 9358</p>
//         <p className="text-left  text-xl  text-gray-500">
//           Pool Decking
//         </p>
//         <p className="text-left  text-xl  text-gray-500">
//           Wall decking
//         </p>
        
//         <p className="text-left  text-xl  text-gray-500">
//           Huggie@huggiedecking.co.za
//         </p>
//         </div>
//         </div>

//         <div className="flex md:justify-center gap-x-4 mt-10">
//           © 2025 Huggie Decking. All Rights Reserved.
//           <Link href="/" className="text-blue-500">
//             Privacy Policy
//           </Link>
//         </div>
//       </footer>
//     </div>
//   );
// }
