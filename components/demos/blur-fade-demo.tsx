import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";
import Link from "next/link";

const works = [
  {
    background: "bg-gray-200",
    imageUrl: "/images/pool3.jpg",
   
  },
  {
    background: "bg-gray-200",
    imageUrl: "/demin/px4.jfif",
   
  },
  {
    background: "bg-gray-200",
    imageUrl: "/demin/mx2.jfif",
   
  },
  {
    background: "bg-gray-200",
    imageUrl: "/demin/px5.jfif",
   
  },
  {
    background: "bg-gray-200",
    imageUrl: "/demin/mx3.jfif",
   
  },
  {
    background: "bg-gray-200",
    imageUrl: "/demin/mx1.jfif",
   
  },
  {
    background: "bg-gray-200",
    imageUrl: "/demin/mx3.jfif",
   
  },
  {
    background: "bg-gray-200",
    imageUrl: "/demin/px1.jfif",
   
  },
  {
    background: "bg-gray-200",
    imageUrl: "/demin/mdx.jfif",
   
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/main-hero.jpg",
   
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/ww4.jpg",
   
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/p1.jpg",
   
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/p2.jpg",
    
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/mm.jpg",
    
  },
  {
    background: "bg-gray-200",
    imageUrl: "/demin/px3.jfif",
    
  },
 
  {
    background: "bg-gray-200",
    imageUrl: "/demin/mx2.jfif",
    
  },
 


];

export function BlurFadeDemo() {
  return (
    <section id="photos">
      <div className="grid md:grid-cols-2 gap-8 mt-10 justify-items-center">
        {works.map(({ imageUrl }, idx) => (
          <BlurFade
            key={ imageUrl}
            delay={0.25 + idx * 0.05}
            inView
            className={`rounded-lg ${works[idx].background} p-4`}
          >
           
              <Image
                height={10000}
                width={10000}
                className="
                h-full md:h-[350px] w-full object-cover rounded-lg"
        
              
       
                src={imageUrl}
                alt={`Random stock image ${idx + 1}`}
              />
          
            
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
