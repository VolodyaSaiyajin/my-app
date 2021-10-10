import React from 'react'
import './App.css'
import Null from './null.css'
import Profile from './components/Profile/ProfileFeed/profileFeed'
import Footer from './components/Footer/footer'
import Header from './components/Header/header'
import MenuNavigation from './components/Menu/menu'
import { BrowserRouter, Route } from 'react-router-dom'
import Dialogs from './components/Dialogs/dialogs'

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <MenuNavigation />
        <Route path="/profile" component={Profile}>
          <Profile />
        </Route>
        <Route path="/Dialogs" component={Dialogs}>
          <Dialogs/>
        </Route>
        {/* <Route path="/profile" component={Settings}>
          <Settings />
        </Route> */}

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
