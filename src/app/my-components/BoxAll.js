import React from "react";
import CardBox from "./CardBox";
import { createClient } from "@/utils/supabase/client";

export default async function BoxAll() {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('MiniMoka')
    .select('*')


  return (
    <div className="flex flex-row justify-center align-middle items-center px-10">
      <CardBox list={data}/>
    </div>
  );
}