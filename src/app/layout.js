import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

export const metadata = {
  title: 'Blog App',
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='container'>
          <div className='wrapper'>
            <Navbar />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
