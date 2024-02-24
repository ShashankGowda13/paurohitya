
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { Button } from "@/components/ui/button";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {

console




  return (
    <>
     <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
      <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">

        <div className="flex flex-col justify-center gap-20 ">
          <h1 className="h1-bold">Host, Connect, Celebrate: Your
          Events, Our Platform!</h1>
          <p className="p-regular-20  md:p-regular-24"> "Discover the ancient allure of Paurohitya – your online sanctuary for timeless Vedic wisdom. Unveil sacred rituals and personalized consultations, forging a path to spiritual enlightenment." </p>
          <Button size="lg" asChild className="button w-full sm:w-fit">
            <Link href="#events">Explore Now</Link>
          </Button>

        </div>
        <Image src='/assets/images/project.png' alt="hero" 
        width={800}
        height={300}
        className="max-h-[100vh] object-conatin  object-center 2xl:max-h[50vh]"
       />
      </div>

     </section>

     <section id="events" className="wrapper my-8  flex flex-col gap-8 md:gap-12">
      <h2 className="h2-bold">Trusted By <br/>Thousands of Events</h2>

      <div className="flex w-full flex-col gap-5 md:flex-row">
      Search
      CategoryFilter 
      

      </div>
     


     </section>

    
    </>
    
 
  )
}