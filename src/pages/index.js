import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Hello from './hello.mdx';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
 
  const H1=(props)=>(
    <h1 className="bg-red-500 text-3xl" {...props}/>
  );
  return (
    <>
      <Hello   components={{p:H1}}/>
    
    </>
  )
}
