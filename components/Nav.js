import React from 'react'
import Link from 'next/link'

const NavTop = () => {

  return (
    <div className="my-nav">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/blogs">
        <a>Blogs</a>
      </Link>
      <Link href="/news">
        <a>News</a>
      </Link>

      <style jsx>{`
        a {
            padding: 10px;
        }
    `}</style>
    </div>
  )
}

export default NavTop
