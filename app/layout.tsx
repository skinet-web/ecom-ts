'use client'

import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'
import { StateContext } from './context/StateContext'
import {Toaster} from 'react-hot-toast'
import Head from 'next/head'
import { metadata } from './components/metadata'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

      </Head>
      <body className=' flex  flex-col justify-center items-center'>
      <StateContext>
          <Toaster />
          {children}
          <Footer />
      </StateContext>
        
      </body>
      
    </html>
    
  )
}
