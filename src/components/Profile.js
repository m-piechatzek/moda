import React from 'react'
import './profile.css';

const Profile = () => {
  return (
    <div id="mainContainer">
        <img classname="pure-img" id="headShot" src="images/fake-profile-1.jpg"></img>
        <h1>Janelle Lloyd</h1>
        <hr/>
        <table>
            <tr>
                <td>10k<br/>followers</td>
                <td>5k<br/>following</td>
                <td>287<br/>posts</td>
            </tr>
        </table>
        <hr/>


          <div classname="grids-example">
             <div classname="pure-g">
                <div classname="pure-u-1-1">
                   <div classname="graybox">
                        <p>
                            Hey! I’m Janelle. Originally from Atlanta, but have been studying and working in
                            New York City for almost 10 years. You could say I’m a fashion and retail industry
                            vet with experience in buying, styling, product development, and marketing. It’s more of
                            an obsession really. In love with learning and personal growth, I recently got my
                            MBA from NYU and now work at Google in the heart of NYC’s meatpacking district.
                        </p>
                   </div>
                </div>



                <div classname = "pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                   <div classname = "graybox">
                      <img classname="pure-img" id="blog" src="images/fake-profile-2.jpg"></img>
                      <h2>Oversized Sleeves</h2>
                      <p>
                         Here’s my look from the recent Anthropologie rooftop dinner party that
                         I attend a few weeks ago. If you haven’t checked out that post, I told
                         the Anthropologie NYC team what I was into and they styled me up
                         perfectly! I’m all about this statement sleeve moment for a twist on
                         the many off the shoulder tops already in my closet — cause how many
                         is too many, really?
                      </p>
                      
                   </div>
                </div>

                <div classname = "pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                   <div classname="graybox">
                      <p>Second Column</p>
                   </div>
                </div>
           </div>
           </div>
    </div>
  )
}

export default Profile
