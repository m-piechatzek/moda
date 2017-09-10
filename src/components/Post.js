import React from 'react'
import './Post.css';

const Post = () => {
  return (
	<div id="pageBody">
		<div className="spacer"></div>
		<a className="backButton" href="/">BACK</a>
		<img className="topPic pure-img" src="/images/lehappy1.jpg" alt="Le Happy 1" />
		<div className="midText">
			<h1>I can see through you</h1>
			
			Back in the days, I would shoot my blog outfits on a white plain wall making sure the outfit was the only subject. 
			Its the way I started this blog and I honestly really loved sharing my looks that way!  This shoot with Christina at 
			her studio reminds me of those posts I used to do and I forgot how much I loved it 
			
		</div>
		<img className="topPic pure-img" src="/images/lehappymerged.jpg" alt="Le Happy 1" />
		<div className="midText">
			<h1>Some days are just meant for the park</h1>
			
			This is one of my favorite outfits involving vintage so far.  I was wearing a vintage sheer dress I got from etsy 
			and layered it with a mesh white top and wore some shorts underneath.Layering prints can be quite tricky but it is 
			all about the textures and making sure they blend well together. I definitely will be wearing a lot of mesh this 
			fall (its currently a major trend) but I won’t be limiting myself to wearing it just as a top! It can be so fun to 
			wear it under any other piece, particularly a nice printed dress or a vintage t-shirt.
			
		</div>
		<img className="topPic pure-img" src="/images/lehappy4.jpg" alt="Le Happy 1" />
		<div className="midText">
			<h1>I wanna be sedated</h1>
			
			One of those outfits that were totally a no brainer today. Whenever I get anything plaid, I feel the urge of going 
			back to my roots haha and pair it with a band tee lol. Such a cliche overused extra and expected combo but I 
			can’t control myself. I’ve had this Ramones tee for so long, so it felt quite good to take it out for a walk! 
			
		</div>
		
		<div className="spacer"></div>
	</div>
  )
}

export default Post
