import './App.scss'

//components
import Header from './containers/Header/Header';
import CardSection from './containers/CardSection/CardSection';
import WeAre from './containers/WeAre/WeAre';
import WeDo from './containers/WeDo/WeDo';
import Careers from './containers/Careers/Careers';
import TabSection from './containers/TabSection/TabSection';
import ContactUs from './containers/ContactUs/ContactUs';
import CookieSection from './containers/CookieSection/CookieSection';
import Footer from './components/Footer/Footer';

function App(props) {
  return (
    <div className='App'>
      <Header />
      <CardSection />
      <WeAre />
      <WeDo />
      <Careers />
      <TabSection />
      <ContactUs />
      <CookieSection />
      <Footer />
    </div>
  )
}

export default App
