import Image from "next/image";
import Navigation from "./my-boxes/Navigation";
import Hero from "./my-boxes/Hero";
import Header from "./my-boxes/Header";
import sanrio from './assets/sanrio.png'
import LinkButton from "./my-components/LinkButton";

export default function Home() {
  
  return (
    
    <>
    <Header/>
    <div className="flex flex-row mt-3 align-middle justify-center items-center">
      <Image
        src={sanrio}
        width={100}
        height={100}
        alt="Sanrio Logo"
      />
      <div className="p-3 text-5xl text-zinc-800">Mini Moka</div>
    </div>
    <Navigation/>
    <Hero/>
    <LinkButton title="Login page test"/>
    </>
  );
}

// https://rrgulcdegwztusptzodr.supabase.co/auth/v1/callback