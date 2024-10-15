import React from 'react'
import Page_Nav from '../components/PageNav'
import "../app.css";
import Project from '../components/Project/Project';
import { Analytics } from "@vercel/analytics/react"

const page = () => {
  return (
    <div>
      <Analytics></Analytics>
      <Page_Nav title='Projects'></Page_Nav>
      <div className='projects'>
        <Project url="https://ai.booogle.app" title='Local Chat' alt='local chat' image='/project_images/LocalChat.webp' description='Local Chat is a AI chat interface that uses Gemini Nano running locally in chrome. The website use html/js/css utilizing window.ai to get the AI running fully locally.'></Project>
        <Project url="https://github.com/GoodVessel92551/Booogle-Revise-Website" title='Booogle Revise' alt='booogle revise' image='/project_images/Revise.webp' description='Booogle Revise is a website that allows users to create and review flashcards, quizzes and allows for classes for teachers. It is built in python and html/js/css.'></Project>
        <Project url="https://me.booogle.app" title='My Website' alt='Me Website' image='/project_images/GoodVessel92551.webp' description='This is the website that you are currently on it is build in React and running next.js as the back end. It currently has a home page and a project page but there is more to come.'></Project>
      </div>
    </div>
  )
}

export default page;

