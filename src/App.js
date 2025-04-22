import React from "react";
import './App.css';

function Navbar() {
  return (
    <nav className="nav">
    <ul>
    <li><a href="#Home">Home</a></li>
      <li><a href="#About">About</a></li>
    <li><a href="#Projects">Projects</a></li>
    <li><a href="#Contact">Contact</a></li>
   </ul>
    
    </nav>
   
  );

}

function App() {
return (
<div className="App">
<Navbar/>
<Home/>
<About/>
<Projects/>
<Contact/>
<Footer/>
</div>
)
}

function Home() {
  return (
 <section id="Home"
 className="Home">
<h1>Hello everyone, I am Justin Ildefonso. I am 20 years old and my place of birth is PR. Some hobbies of mine are, Basketball, Baseball, Working out, and Coding, 2 things that I love are my girlfriend and my Family
</h1>
<img src="/images/me.jpeg" alt="me and my girlfriend" width="200px"/>
 </section>
    
   
  );
}

function About() {
  return (
 <section id="About"
 className="About">
<h1>Some Things About Me</h1>
<p>Programming Languages: Javascript, HTML, CSS, PHP, C <br></br>
Frameworks: React,  React Native <br></br>
Design Tools: Figma, Photoshop <br></br>
Soft Skills: Teamwork, Communication, Problem-Solving <br></br>
Languages: English, Spanish</p>
    </section>
  )
}
  function Projects() {
  return (
  <section id="Section"
  className="Section">
  <h1>Projects</h1>
  <ul>
  <li>
  <img src="/images/project1.png" alt="project"/>
  <p>Project One: Collection of JavaScript algorithms and React-based web applications and mobile applications</p>
  <a href="https://github.com/Justinbecec1">Project One</a>
  </li>
  <li>
  <img src="/images/project2.png" alt="project"/>
  <p>Project Two: Dynamic web application for handling form submissions and database storage using PHP and MySQL</p>
  <a href="https://students.gaim.ucf.edu/~ju988475/dig3134c/">Project Two</a>
  </li>
  <li>
  <img src="/images/project3.png" alt="project"/>
  <p>Project Three: Mobile App Design</p>
  <a href="https://www.figma.com/design/TRodFjLz3jIrxQldx6js9O/TODO-app-design?node-id=1-2&t=YNhbWW7lZ4xUdtmF-1">Project Three</a>
  </li>
  </ul>
  </section>
  )
}
function Contact() {
  return (
 <section id="Contact"
 className="Contact">
<h1>Heres How to Contact Me!</h1>
<form>
  <label for="email">Email:</label>
  <input type="text" id="email" name="email" value="email" required/>
  <label for="message">Message:</label>
  <input type="message" id="message" name="message" value="message" required/>
  <input type="submit" value="Submit"/>
</form> 
</section>
  )
}
  
function Footer() {
  return (
 <section id="Footer"
 className="Footer">
<h1>Justin Ildefonso</h1>
 </section>
    
   
  );
}

  
   




export default App;
