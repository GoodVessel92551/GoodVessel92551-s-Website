
import ImageGroup from './components/ImageGroup'
import Description from './components/Description'
import SocialButtons  from './components/SocialButtons'
import Page_Nav from './components/PageNav';
import "./app.css";
import exp from 'constants';
import { Analytics } from "@vercel/analytics/react"

function Home() {

  return (
    <>
    <Analytics></Analytics>
    <Page_Nav title='Home'></Page_Nav>
    <div className='topContainer'>
    <ImageGroup></ImageGroup>
    <Description></Description>
    <div className='buttonContainer'>
    <SocialButtons type='projects'></SocialButtons>
      <SocialButtons type='discord'></SocialButtons>
      <SocialButtons type="mail"></SocialButtons>
    </div>
    </div>
    </>
  )
}

export default Home;
