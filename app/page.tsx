
import ImageGroup from './components/ImageGroup'
import Description from './components/Description'
import SocialButtons  from './components/SocialButtons'
import "./app.css";

function Home() {

  return (
    <>
    <div className='topContainer'>
    <ImageGroup></ImageGroup>
    <Description></Description>
    <div className='buttonContainer'>
      <SocialButtons type='discord'></SocialButtons>
      <SocialButtons type="mail"></SocialButtons>
      <SocialButtons type='projects'></SocialButtons>
    </div>
    </div>
    </>
  )
}

export default Home
