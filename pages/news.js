import React from 'react'
// import Head from 'next/head'
import Layout from '../components/Layout'
import axios from 'axios'

const News = ({ news: { articles } }) => {

  return (
    <Layout title="News">
      <div>
        <h2>List of News</h2>
        {
          articles.map((article, index) => {
            return <div className="articles" key={index}>
              <p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">{article.title} </a>
              </p>
              <p>{article.description} </p>
              <small>{article.author} </small>
            </div>
          })
        }
        <style jsx>
          {`
            h2 {
              text-align: center;
              margin: 16px 0;
            }
            .articles {
              border: 1px solid #eee;
              box-shadow: 0 2px 3px #ccc;
              padding: 20px;
              text-align: center;
            }
          `}
        </style>
      </div>
    </Layout>
  )
}


News.getInitialProps = async () => {
  let news
  try {
    const res = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=d1c0adf16619482eb5c03d15a7f45b59')
    news = res.data
  } catch (err) {
    console.log('Error: ', err)
    news = []
  }
  return {
    news
  }
}

export default News
