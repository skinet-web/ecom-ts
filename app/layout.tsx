import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'

export const metadata = {
  title: 'Ecommerce - TS/Sanity',
  description: 'Ecommerce - TS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=' flex  flex-col justify-center items-center'>
        
        {children}
        <Footer />
      </body>
      
    </html>
  )
}
