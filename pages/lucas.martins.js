import PersonalProfile from '../components/PersonalProfile'
import photo from '../public/lucas.png'

export default function Page() {
  return <PersonalProfile
    name="Lucas Martins"
    whats="5551992434789"
    linkedin="https://www.linkedin.com/in/lucas-martins-dev/"
    photo={photo}
  />
}