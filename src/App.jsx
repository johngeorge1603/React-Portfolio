import './App.scss'
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import Skills from './Components/Skills/Skills';
import Title from './Components/Titles/Title';







const App = () => {
  return <div>

    <section id='HomePage'>
    <Navbar/>
      <Main/>
      <div id='video-background'>
      <video  autoPlay muted loop id="video-background" > 
        <source src="/bg-video-2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Your other content */}
      </div>
    </section>



      <section id='About'><Title type="About"/>
        </section>

      <section id='AboutPage'>
        <About/>
      </section>


      <section id='Skills'><Title type="Skills"/></section>

      <section id='SkillsPage'>
        <Skills/>
      </section>

      <section id='Portfolio'><Title type="Projects"/></section>

      <Portfolio />


      <section id='Contact'><Title type="Contact"/></section>
      <section id='ContactPage'>
        <Contact/>
      </section>


  </div>;
};

export default App;
