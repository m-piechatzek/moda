import React from 'react'
import './profile.css';

const Profile = () => {
  function switchPic() {
    document.getElementById("blog2").src="/images/fake-profile-2-prices.jpg";
    console.log("test");
  }
  function switchPicBack() {
    document.getElementById("blog2").src="/images/fake-profile-2.jpg";
    console.log("test");
  }
  function goToLink() {
    window.open("https://www.anthropologie.com/shop/matiko-michelle-block-heel-sandals?category=shoes&color=072");
  }
  return (
    <div className="App">
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
                      <img id="blog2" src="images/fake-profile-2.jpg"
                      onMouseOver={switchPic}
                      onMouseOut={switchPicBack}
                      onClick={goToLink}></img>
                      <h2>Oversized Sleeves</h2>
                      <p>
                         Here’s my look from the recent Anthropologie rooftop dinner party that
                         I attend a few weeks ago. If you haven’t checked out that post, I told
                         the Anthropologie NYC team what I was into and they styled me up
                         perfectly! I’m all about this statement sleeve moment for a twist on
                         the many off the shoulder tops already in my closet — cause how many
                         is too many, really?
                      </p>
                      <a className="link-profile" href="/post2">read more</a>

                   </div>
                </div>

                <div classname = "pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                   <div classname="graybox">
                      <img id="blog" src="images/fake-profile-3.jpg"></img>
                      <h2>A secret smartwatch</h2>
                      <p>I’d like you to officially meet Shola. You might have noticed him sparingly
                      in an Instagram Story or a Valentine’s Day post. A devoted Instagram Husband,
                      he’s dedicated many a weekend or vacation day to getting the perfect shot.
                      When Fossil asked me to try out their new hybrid smartwatch, I immediately new
                      I had to ask if Shola could try one out too.</p>
                      <a className="link-profile" href="/post2">read more</a>
                   </div>
                </div>

                  <div classname = "pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                     <div classname="graybox">
                        <img id="blog" src="images/fake-profile-4.jpg"></img>
                        <h2>A summer Friday hotspot</h2>
                        <p>I had so much fun hosting LOFT’s first 97 Days of Summer in-store event
                        this past Friday in NYC. I was all ruffles and smiles in a one shoulder blouse
                        and wrap skirt.</p>
                      <a className="link-profile" href="/post2">read more</a>
                     </div>
                  </div>
           </div>
           </div>
    </div>

</div>
  )
}

export default Profile
