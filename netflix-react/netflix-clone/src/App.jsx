import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavBarDark from './components/navBarDark'
import UnderNav from './components/UnderNav'
import FooterDark from './components/FooterDark'
import CardsShow from './components/CardsShow'



function App() {

  return (
    <div className="app-container">
    <NavBarDark/>
    <UnderNav/>
    <CardsShow title="Trending Now" searchQuery="harry potter"/>
    <CardsShow title="Watch it Again" searchQuery="rambo"/>
    <CardsShow title="New Releases" searchQuery="shrek"/>
    <FooterDark/>
    </div>
  )
}

export default App
