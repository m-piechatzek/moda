import React from 'react'
import './Feed.css';

const Feed = () => {
  return (
    <div>
      <div className="center-feed">
        <a href="/post">  <img className="blog-size" src={"/images/blog_color10.png"} /></a>
        <img className="blog-size" src={"/images/blog_color2.png"} />
        <img className="blog-size" src={"/images/blog_color3.png"} />
        <img className="blog-size" src={"/images/blog_color4.png"} />
        <img className="blog-size" src={"/images/blog_color5.png"} />
        <img className="blog-size" src={"/images/blog_color6.png"} />
        <a href="/post3"> <img className="blog-size" src={"/images/blog_color9.png"} /> </a>
        <img className="blog-size" src={"/images/blog_color8.png"} />
        <img className="blog-size" src={"/images/blog_color11.png"} />
        <img className="blog-size" src={"/images/blog_color12.png"} />
      </div>
    </div>
  )
}

export default Feed
