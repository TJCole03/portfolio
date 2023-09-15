import { useState } from 'react';


export default function Home(props) {
	return(
		<div className="HomePage">
			<center>
				<h1 className='header' >T.J. Cole</h1>
				<img className='proPic' src= './img/picOfMe.png' />
				<div className="div">
					<h3 className='intro' > Welcome to my portfolio. </h3>
					<h4 className='titles' >Software Engineer | Frontend Developer | Full-stack Developer | Sustainability Aficionado </h4>
						<h4 className= 'based'>
						I am based out of Central Pennsylvania but am open to working remotely for companies around the Philadelphia area.
						My passions in tech include frontend development using MERN software, collaborating with other programmers to solve 
						complex problems, and integrating my background in Sustainability Studies with technology. 
						</h4>
				</div>
				<div className= 'skills'>
					<h2 className="skillListHeader"> Skills and Aptitudes: </h2>
					
					<h3 className= 'skillList' >
							HTML/CSS |
							Javascript |
							React |
							MERN Stack |
							Front-End  |
							Styling 
					</h3>
				</div>
				<div className='storyContainer'>
					<h2 className= 'storyHeader' > My Story </h2>
					<h3 className= 'story' > I began my journey into software development in the most unexpected place: the woods in Pennsylvania.
						I remember how I first realized our human connection with nature, and how I developed my passion for environmental sustainability. 
						I decided to major in Sustainability Studies with a concentration in Sustainable Agriculture. Originally, I wanted to own and run 
						urban gardens to help out with our nations problems with food deserts. Fast-forward to graduation: I left my university with a wealth 
						of knowledge about issues with sustainability. I did not know how, or where, I could apply my skills. 
						<br/>
						I found a home primarily in the greenhouse and landscaping industries. While working these jobs helped me develop a wide variety of skills, 
						I was still thirsting to be able to apply my college degree somewhere. 
						<br/>
						I found software engineering on a whim, based on suggestions from friends and peers amid the conversations we shared. Looking into this field 
						made becoming an engineer feel as though I would set aside my knowledge of sustainability for something else. I could not be happier to be wrong! 
						Software engineering gave me a plethora	of tools and skills for me to work in the sustainability sector and allows me to dive further into my passion for stewardship. 
					</h3>
					<h2 className= 'susHeader' > Why Sustainability? </h2>
					<h3 className= 'susStory' > Since I was a child, I never understood why humans have treated our planet the way we have. 
						<br/>
						{/* Learning about sustainability brought forth a lot of personal challenges. In essence, my major encompassed the conept of problem and solution. 
						When you dive deep into learning about problems, you begin to understand hard truths about the inner workings of our systems, as well as the depravity of man. 
						My years in learning about sustainability brought forth times of mental darkness as I wallowed in my own thoughts. Savior complex, along with a healthy dose of white 
						guit overtake a young person learing about the world. I spent years contending with an immense burden I put on myself for everything I thought I caused. It was not 
						until I got older when I realized the powers that be depend on folks feeling the way I do to drive our wedge of divison ever so deeper. I was flabberghasted and disgusted. 
						I abandoned identity politics, did away with my "us vs. them" mentality, and realized we're all humans who've been unwittingly ensared in a shell game played by the 
						faceless corporate elite. This is called "growth" my friends.  */}
						My journey with sustainability
						<br/>
					</h3>

					 {/* <h3> I graduated from Messiah University with a B.A. in Sustainability Studies
						with a concentration in Agriculture. My studies included plant science, ecology, political science, 
						social issues, world/local poverty, and ethics. I got into Sustainability early on due to my passion for 
						environmental protection. After graduating I learned there was a lot more to making our world better than 
						cleaning up rivers or pushing certain bills; we live in a complex and vastly integrated system that values money, and major policies 
						designed to retain wealth. Our priority as Westerners has shifted from stewardship to economy. I've been on a long journey ever since, 
						trying to find out where I can fit in, and how I can use my knowledge to help make a small difference. 
					</h3>   */}
				</div>
				
				<a href="./img/Resume.pdf"> <h1>Resume </h1></a>

			</center>
		</div>
	) 
}
