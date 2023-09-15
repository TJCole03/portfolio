import { useState } from 'react';

export default function About(props) {
	return(
		<div className="ProjectPage">
			<center>
				<h1>My {props.page}</h1>
				<div className="solitaireContainer">
				<h2 className = "solitaire">Solitaire Game w/ Vanilla Javascript</h2>
				<h3> <a href="url"> https://github.com/TJCole03/unit-1-project </a> </h3>
				<h3 className = "projectDesc"> This was my very first project in Javascript. Let's be honest: I bit off more
					than I could chew and the game was not complete in time. However, I got fantastic 
					leeway into finishing my first solitaire game for the future and learned a lot about
					what there is to learn in the world of code. Click the link to my github repo to see 
					more information!
				</h3>
				<img className='solitaireImg' src="./img/Solitaire_cards_out.png" />
				</div>
				<div className="tomatoesContainer">
				<h2 className="tomatoes">Tomato Varieties API</h2>
				<h3> <a href="url"> https://github.com/TJCole03/Tomatoes </a> </h3>
				<h3 className="projectDesc"> This is a basic API for a database for logging novel tomato
					varieties bred and propagated by university students around the world.
					Every year we have new varieties of tomato that get bred in academic institutions.
					I want to make a centralized database for university students to share their new findings
					with each other and fellow researchers.
				</h3>
				<img className='tomatoERD' src = "./img/tomato-erd.png"/>
				</div>

				<div className='animalContainer'>
				<h2 className="animal">MERN Stack Cafe</h2>
				<h3> <a href="url"> https://github.com/TJCole03/mern-cafe </a> </h3>
				<h3> <a href="url"> https://animaldrums.tjcole.me/ </a> </h3>
				<h3 className="projectDesc"> This is my first forray into the world of the MERN 
					stack (Mongoose, Express, React, Node.js), where I heavily retrofitted a food
					menu to my own whimsy. 
				</h3>
				<img className='animalDrumsImg' src = "./img/animaldrums.png"/>
				</div>
			</center>
		</div>
	) 
}
