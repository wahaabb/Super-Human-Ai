import React from 'react';
import { Link } from 'react-router-dom';
import '../../SCSS/Frontend/home.css';
import Cards from '../../Components/Cards/index';
import img1 from '../../Assets/undraw_time_management_re_tk5w.svg';
import img2 from '../../Assets/undraw_chat_bot_re_e2gj.svg';
import img3 from '../../Assets/undraw_job_hunt_re_q203.svg';

export default function Home() {
  return (
    <>
      {/* Need for SuperHuman AI Section */}
      <div className="needSection">
        <h1 className="h1Text mb-5">Need for SuperHuman AI</h1>
        <div className="infoDiv" data-aos="zoom-in-down">
          <img src={img1} alt="AI Empowerment" className="image" />
          <p className="pText">
            In today's dynamic job market, the job application process is time-consuming and daunting. This highlights the need for a solution that streamlines and automates the application experience.
          </p>
        </div>
        <div className="infoDiv" data-aos="zoom-in-down">
          <img src={img2} alt="AI Preparation" className="image" />
          <p className="pText">
            AI has significantly impacted traditional roles by replacing some with AI-driven positions. This necessitates the development of new tools to expedite the process of connecting with companies and securing employment.
          </p>

        </div>

        <div className="infoDiv" data-aos="zoom-in-down">
          <img src={img3} alt="AI Success" className="image" />
          <p className="pText">
            Job seekers face inefficient processes and a lack of personalized career guidance, making it difficult to identify and develop relevant skills. Additionally, limited access to curated learning resources hinders their ability to enhance qualifications and stay competitive.
          </p>
        </div>
      </div>
      <div className='link2'>
        <Link className="button2 mb-5" to="/dashboard/agent">
          Try Now
          <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
      {/* What We Do Section */}
      <div className="whatWeDoSection">
        <h1 className="h1Text mb-5">What We Do</h1>
        <div className="cardsContainer">
          <div className="card cardHover" data-aos="fade-up">
            <h2 className="cardTitle">Resume Parser</h2>
            <p className="cardDescription">
              Our AI-powered resume parser extracts key information and formats it for better job search visibility.
            </p>
          </div>
          <div className="card cardHover" data-aos="fade-up" data-aos-delay="200">
            <h2 className="cardTitle">Personalized Curated Learning Assistant</h2>
            <p className="cardDescription">
              A learning assistant that curates personalized content to help you upskill and stay competitive in the job market.
            </p>
          </div>
          <div className="card cardHover" data-aos="fade-up" data-aos-delay="400">
            <h2 className="cardTitle">AI Job Search Automation Tool</h2>
            <p className="cardDescription">
              Automate your job search with AI that finds and applies for jobs tailored to your skills and preferences.
            </p>
          </div>
        </div>
      </div>
      {/* Cards section */}
      <div className='container-fluid'>
        <h1 className="h1Text mb-5 text-center">Technologies Used</h1>
        <div className='row'>
          <Cards heading="Web search Automation" text="Perform web analysis and summarizes the responses." />
          <Cards heading="Google search Automation" text="Performs google search and extracts all relevant information and links. " />
          <Cards heading="Selenium Automation" text=" Create an extension for auto filling of application." />
          <Cards heading="Job GPT" text="An LLM model fine tuned for analyzing the resumes." />
          <Cards heading="Advanced RAG" text="We employ state-of-art RAG pipeline for accurate information retrieval." />
          <Cards heading="Web app and Chrome Extension" text="We build a web app powered by React and A chrome extension." />
        </div>
      </div>
    </>
  );
}
