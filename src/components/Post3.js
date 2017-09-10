import React from 'react'
import './Post.css';

const Post3 = () => {
  return (
	<div id="pageBody">
		<a className="backButton post-link" href="/">BACK</a>
		<img className="topPic pure-img" src="/images/magicfox1.png" alt="Magic Fox 1" />
		<div className="midText">
			<h1>Barcelona ☀️📍</h1>

			Currently walking through the streets. Such a nice city and of course the weather is awesome 😊👍🏻
			Have a good day guys!

		</div>
		<img className="topPic pure-img" src="/images/magicfox2.jpg" alt="Magic Fox 2" />
		<div className="midText">
			<h1>Weekend 😊👍🏻</h1>

			Guys thank you so much for your positive feedback on my first YouTube video ❤️ you are the best!
			Check my complete outfit at @aboutyoude

		</div>
		<img className="topPic pure-img" src="/images/magicfox3.jpeg" alt="Magic Fox 3" />
		<div className="midText">
			<h1>Casual ✌🏼</h1>

			Hope you had a good day guys! I spent the day in the city with @kosta_williams 😊 Enjoy your evening 👍🏻

		</div>

		<div className="spacer"></div>
	</div>
  )
}

export default Post3
