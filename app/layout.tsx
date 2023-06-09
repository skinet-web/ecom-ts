'use client'

import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'
import { StateContext } from './context/StateContext'
import {Toaster} from 'react-hot-toast'




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en">
       
      <body >
        <StateContext>
        <Navbar /> 
        <div className=' flex  flex-col justify-center items-center'>
        
           
            <Toaster />
            {children}
            <Footer />
       
        </div>
        </StateContext>
        
      </body>
      
    </html>
    
  )
}
