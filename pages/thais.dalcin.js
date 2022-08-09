import PersonalProfile from '../components/PersonalProfile'
import photo from '../public/thais.jpg'

export default function Page() {
  return <PersonalProfile
    name="Thais Dalcin"
    whats="5551981285704"
    linkedin="https://www.linkedin.com/in/thais-dalcin/"
    photo={photo}
  />
}