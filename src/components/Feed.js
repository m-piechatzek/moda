import React from 'react'
import './Feed.css';

const Feed = () => {
  return (
    <div>
    <div className="custom-menu-wrapper ">
          <div className="pure-menu custom-menu custom-menu-top">
              <a href="#" className="pure-menu-heading custom-menu-brand"><img className="logo-size" src={"/images/logo_moda_black.jpg"} /></a>
            <a href="#" className="custom-menu-toggle" id="toggle"><s className="bar"></s><s className="bar"></s></a>
          </div>
          <div className="pure-menu pure-menu-horizontal pure-menu-scrollable custom-menu custom-menu-bottom custom-menu-tucked fa-float" id="tuckedMenu">
              <div className="custom-menu-screen"></div>
            <ul className="pure-menu-list">
                  <li className="pure-menu-item"><a href="#" className="pure-menu-link"><i className="fa fa-search fa-lg" aria-hidden="true"></i></a></li>
                <li className="pure-menu-item"><a href="#" className="pure-menu-link"><i className="fa fa-heart-o fa-lg" aria-hidden="true"></i></a></li>
              <li className="pure-menu-item"><a href="#" className="pure-menu-link"><i className="fa fa-user-o fa-lg" aria-hidden="true"></i></a></li>
              </ul>
          </div>
      </div>

      <img className="" src={"/images/blog_color1.png"} />

    </div>


  )
}

export default Feed
