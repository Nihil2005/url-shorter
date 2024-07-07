import Login from "@/components/Login";
import Signup from "@/components/Signup";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import React from 'react'
import { useSearchParams } from "react-router-dom"



const AuthPage = () => {
  const [serachParams] = useSearchParams();
  return (
    <div className="mt-36 flex flex-col items-center gap-10">
      <h1 className="text-5xl font-extrabold">
        {serachParams.get("createNew")?"Hold Up! Lets Login First...":"Login / Signup"}
     
      </h1>

      <Tabs defaultValue="login" className="w-[400px]">
  <TabsList className='grid w-full grid-cols-2' >
    <TabsTrigger value="login">Login</TabsTrigger>
    <TabsTrigger value="signup">Signup</TabsTrigger>
  </TabsList>
  <TabsContent value="login"><Login/></TabsContent>
  <TabsContent value="signup">
    <Signup/>
  </TabsContent>
</Tabs>

   
    </div>
  )
}

export default AuthPage