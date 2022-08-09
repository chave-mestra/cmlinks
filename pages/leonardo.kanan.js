import PersonalProfile from '../components/PersonalProfile'
import photo from '../public/leo.jpg'

export default function Page() {
  return <PersonalProfile
    name="Leonardo Kanan"
    whats="5551981101419"
    linkedin="https://www.linkedin.com/in/leonardo-kanan-35b28217/"
    photo={photo}
  />
}