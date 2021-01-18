import React from 'react'
import NavTop from './Nav'

const Layout = ({ title, footer, children }) => {
  return (
    <div>
      <NavTop />
      <h1>{title}</h1>
      <p></p>
      {children}
      <hr/>
      <footer>{footer}</footer>
      <style jsx>
        {`
          h1 {
            text-align: center;
          }
          p {
            border-bottom: 2px solid #eee;
            width: 50%;
            margin: auto;
          }
        `}
      </style>
    </div>
  )
}

export default Layout
