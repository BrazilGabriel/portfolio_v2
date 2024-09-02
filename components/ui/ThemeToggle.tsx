/* eslint-disable tailwindcss/no-custom-classname */
"use client"
import React from 'react'
import { useTheme } from "next-themes"


const ThemeToggle = () => {
    const { setTheme } = useTheme()
  return (
     <div>
        <button className='border-white-200 mx-2 my-4 rounded-md border px-4 py-2' onClick={() => setTheme("light")}>Light </button>
        <button className='border-white-200 mx-2 my-4 rounded-md border px-4 py-2' onClick={() => setTheme("dark")}>Dark</button>
           
     </div>
 )

 }

export default ThemeToggle
