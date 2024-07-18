import React from 'react'
import Page_Nav from '../components/PageNav'
import "../app.css";
import Project from '../components/Project/Project';

const page = () => {
  return (
    <div>
      <Page_Nav title='Projects'></Page_Nav>
      <div>
        <Project title='' alt='' image='' description=''></Project>
      </div>
    </div>
  )
}

export default page
