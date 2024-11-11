import Navbar from "../components/Nav"
import Hero from "../components/Hero"
import AboutMe from "../components/AboutMe"
import SkillshowCase  from "../components/SkillshowCase"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

export default function Home(){
  return(
    <main>
<Navbar />
<Hero />
<AboutMe />
<SkillshowCase />
<Projects/>
<Contact/>
 

    </main>
  )
}