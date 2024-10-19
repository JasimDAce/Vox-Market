'use client'
import Image from "next/image";
import { useEffect, useRef } from "react";
import axios from "axios";
import React from "react";

export default function Home() {

  const runonce = useRef(false);
  useEffect(() => {
    if(!runonce.current){
      runonce.current=true;
       axios.get(`${process.env.NEXT_PUBLIC_API_URL}`,{withCredentials: true}).then((result) => {
      console.log(result);
    }).catch((err) => {
      console.log(err);
    });
    }
   
  },[])
   return (
    <div>This is Home Page</div>
  );
  }

  
  

