
import React from "react"
import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import signup from '@/app/assets/signup.png'
import { Buttons } from "./Buttons";
import welcome from '@/app/assets/welcome.png'
import { supabase } from "@/lib/supabase-client";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
  
  export default function Modal() {
    async function signInWithDiscord() {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'discord',
        options: {
          redirectTo: `https://localhost:3000/loggedin`,
        },
      })
    }
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
            <Button className="text-lg flex gap-[5px]" variant="ghost"><CgProfile />
            Sign In</Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="rounded-lg py-4 px-5 w-300 h-150">
          {/* <div className="flex flex-row gap-5">
            <div className="flex bg-rose-100 w-100 h-200">
              
            </div>
          <div> */}
          <div>
            <div>
              {/* Header */}
              <AlertDialogHeader className="flex justify-center align-middle items-center mb-3">
                <AlertDialogTitle className="text-2xl">Login</AlertDialogTitle>
                <AlertDialogDescription className="text-md">
                  Welcome to Mini Moka!
                </AlertDialogDescription>
              </AlertDialogHeader>
              <div  className="rounded-lg flex justify-center items-center align-middle mb-3" >
                <Image
                  src={welcome}
                  width={100}
                  height={100}
                  alt="Sanrio Logo"
                />
              </div>
              
              <div className="flex flex-col justify-center align-middle items-center gap-3">
                <Buttons title="Sign in with Google" onClick={signInWithDiscord}/>
                <Buttons title="Sign in with Discord" onClick={signInWithDiscord}/>
                <AlertDialogCancel className="m-0 bg-rose-100 text-md w-full">Cancel</AlertDialogCancel>
              </div>
              
            </div>
            
          </div>
          

        </AlertDialogContent>
      </AlertDialog>
    )
  }
  