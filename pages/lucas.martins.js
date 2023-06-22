import CmProfile from '../components/CmProfile'
import PersonalProfile from '../components/PersonalProfile'
import photo from '../public/lucas-2023.jpg'

export default function Page() {
  return <>

    <CmProfile/>

    <PersonalProfile
      name="Lucas Martins"
      whats="5551992434789"
      linkedin="https://www.linkedin.com/in/lucas-martins-dev/"
      photo={photo}
    />
  </>
}