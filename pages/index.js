import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import { Button } from 'reactstrap'

const index = () => {

  const copyrightYear = new Date().getFullYear()


  return (
    <Layout title="Home Page" footer={`Copyright ${copyrightYear}`}>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="My SEO React app with Next JS"/>
        <meta name="author" content="Benga Olasebikan"/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
          crossOrigin="anonymous" />
      </Head>
      <h1>Hello from Next JS</h1>
      <h2>Created by: Benga</h2>
      <img src="/static/pp2.png" alt="Benga Olasebikan" height="150" />

      <Button color="primary">Submit</Button>
      <style jsx>
        {`
          img {
            padding: 8px;
            margin-left: 12px;
          }
        `}
      </style>
    </Layout>
  )
}

export default index
