import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

const about = () => {
  return (
    <Layout title="About Page" footer={`Copyright ${new Date().getMonth()}`}>
      <h2>About Page</h2>
      <Link href="/"><a>Home</a></Link>
      <p>My name is Olugbenga</p>

      <style jsx>
        {`
          p {
            color: indigo;
            font-size: 20px;
          }
        `}
      </style>

    </Layout>
  )
}

export default about
