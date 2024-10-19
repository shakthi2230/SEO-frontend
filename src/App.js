import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/LandingPage';
import Services from './pages/Services/Services';
import AboutUs from './pages/Aboutus/AboutUs';
import Services2 from './pages/Services/Services2';
import SEOAnalytics from './pages/whatwedo/SEOAnalytics';
import StepBox from './pages/StepBox/StepBox';
import Testimonial from './pages/testiminials/testimonial';





function App() {
  return (
    <div >
      <LandingPage/>
      <Services/>
      <AboutUs/>
      <Services2/>
      <SEOAnalytics/>
      <StepBox/>
      <Testimonial/>

      
    </div>
  );
}

export default App;
