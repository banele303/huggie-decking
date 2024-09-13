import Link from "next/link";
import Image from "next/image";
export function SecondSection ( ) {
    return (
<div>
        <h3
            className="
           text-2xl md:text-4xl my-6 pt-[6rem] md:my-10 md:text-center px-[2rem] font-extrabold text-blue-300">

 WOODEN PATIO DECKING, PERGOLAS & BALUSTRADES
          </h3>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-2 mx-auto my-[3rem]">
     
        <div className="max-auto mx-[2rem] md:ml-[4rem]">
          
         
          <p
            className="
           text-xl md:text-xl my-6 md:my-10  text-gray-500"
          >
           When it comes to customization in superior deck building, the deck company to call on is Synthetic Deck.  That is one of the reasons we are the number one choice in South Africa, we are focused on just working on deck building, deck repairs and services related to decks. 
<br/>
<br/>


You can feel secure knowing that every one of our crew members is as dedicated to perfection in craftsmanship and superior customer care. We take great pride in the work that we do and in this industry in general. This is all evident in the results that we are able to provide for each and every one of our customers.

          </p>

          
        </div>
        <div className="mx-auto pt-[5rem] px-[2rem]">
          <Image
            src={"/images/pimg1.jpg"}
            width={10000}
            height={10000}
            className=" roundend-md"
            alt="image"
          />
        </div>
      </section>



<section>

<h3
            className="
           text-2xl md:text-4xl my-6 pt-[6rem] md:my-10 md:text-center px-[2rem] font-extrabold text-blue-300">
Choose from a range of decking options
          </h3>
<p  className="
           text-xl md:text-xl my-6 md:my-10 px-[2rem] md:px-[6rem] leading-9 md:text-center text-gray-500">

          There are a wide range of decking options from composite to wooden. Each has its pros and cons. Decking is a great compliment to existing driveway or swimming pool paving. Request a quote to get a free assessment and get your Decking prices.
          </p>
    </section>


      </div>
    )
}