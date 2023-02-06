import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import MDXComponents from './MDXComponents'
import styles from '../styles/Markdown.module.css';


export default function okay({children}) {
  

  return (
    <div>
 <p className='text-xl bg-red-800'>
  
  
  hello
  </p>
    <MDXProvider components={MDXComponents}>

      {children}
    </MDXProvider>
    </div>
  )
}
