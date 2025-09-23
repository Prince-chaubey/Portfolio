import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/Prince-chaubey/WanderStay" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a href="https://wanderstay-fullstack-s9h0.onrender.com/listings" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>WanderStay - Your own Destination</h3>
              <p>
                WanderStay – a full-stack Airbnb-inspired web app for discovering, creating, and managing property listings, built with Node.js, Express, and MongoDB Atlas.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>EJS</li>
                <li>Express Js</li>
                <li>Node</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/Prince-chaubey/SnapEats-FullStack" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                  <a href="https://snapeats-fullstack-2.onrender.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>SnapEats </h3>
              <p> A MERN-based online food delivery platform with an integrated admin dashboard to manage restaurants, update order details, and track deliveries in real-time. </p>
            </div>
            <footer> <ul className="tech-list"> <li>React Js</li> <li>Express Js</li> <li>MongoDB</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/Prince-chaubey/shopnest" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
                <a href="https://shopnestforus.netlify.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>

               
              </div>
            </header>
            <div className="body">
              <h3>ShopNest: React.js powered E-Commerce for Smart Shopping</h3>
              <p>
                ShopNest is a modern e-commerce platform built with React.js, featuring dynamic product browsing, a secure cart and checkout system, user authentication, and a responsive design for a seamless shopping experience.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Js</li>
                <li>Tailwind </li>
                <li>FireBase</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>


        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/Prince-chaubey/Weather-Dashboard" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://creative-kelpie-5c5f56.netlify.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Weather-Dashboard</h3>
              <p>A React-based weather application that provides real-time weather updates and a 5-day forecast using the OpenWeather API. Built with Tailwind CSS and Context API, it features city search, detailed weather metrics, dark/light mode toggle, refresh functionality, and a sleek responsive UI for a smooth user experience.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Js</li>
                <li>Tailwind Css</li>
                <li>Context API</li>
               
              </ul>
            </footer>
          </div>
        </ScrollAnimation>



      </div>
    </Container>
  );
}