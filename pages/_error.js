import React from 'react'
import Link from 'next/link'


const errorPage = () => {
  return (
    <div>
      <h1>Oops! Something went wrong....Try again!</h1>
      <p>Try <Link href="/"><a>going back</a></Link></p>
      <style jsx>
        {`
          div {
            border: 1px solid #eee;
            box-shadow: 0 2px 3px #ccc;
            padding: 20px;
            text-align: center;
          }
        `}
      </style>
    </div>
  )
}

export default errorPage
