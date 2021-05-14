import './app.scss'
import { Competences } from './atomic/organism/competences'
import { Education } from './atomic/organism/education'
import { Experience } from './atomic/organism/experience'
import { Hobbies } from './atomic/organism/hobbies'
import { Languages } from './atomic/organism/languages'
import { Skills } from './atomic/organism/skills'
import { Header } from './atomic/organism/header/header'

const App = () => {
  return (
    <div className="cv">
      <Header />
      <div className="cv-content">
        <div>
          <Experience />
          <Education />
        </div>
        <div>
          <Languages />
          <Skills />
          <Competences />
          <Hobbies />
        </div>
      </div>
    </div>
  )
}


export default App;
