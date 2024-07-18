import image from "../assets/ProfileImage.png"
import Image from 'next/image'

function Profile_Image(){
    return <Image  alt="Profile Image" className="profileImage" width={128} height={128}  src="/ProfileImage.png"></Image>
}

export default Profile_Image;