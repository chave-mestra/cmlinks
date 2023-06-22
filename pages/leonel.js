import CmProfile from '../components/CmProfile'
import PersonalProfile from '../components/PersonalProfile'
import photo from '../public/leonel.jpeg'

export default function Page() {
  return <>

    <CmProfile/>

    <PersonalProfile
      name="Leonel Gaedke"
      whats="5551980594255"
      linkedin="https://www.linkedin.com/in/leonel-godois-gaedke-544541b4/"
      photo={photo}
    />
  </>
}