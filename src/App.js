import React from 'react'
import './App.css'
import Null from './null.css'
import ProfileFeed from './components/Profile/ProfileFeed/profileFeed'
import Footer from './components/Footer/footer'
import Header from './components/Header/header'
import MenuNavigation from './components/Menu/menu'
import {Route} from 'react-router-dom'
import Dialogs from './components/Dialogs/dialogsContainer'
import ProfileContainer from "./components/Profile/ProfileFeed/profileFeedContainer";
import DialogsContainer from "./components/Dialogs/dialogsContainer";


function App() {
    return (
        <div className="app-wrapper">
            <div className="app-wrapper__container">
                <div className="app-wrapper__app">
                    <Header/>
                    <MenuNavigation/>
                    <Route path="/profile"
                           render={() => <ProfileContainer/>}/>
                    <Route path="/dialogs"
                           render={() => <DialogsContainer/>}/>
                </div>
            </div>
            <div class="app-wrapper__footer"><Footer/></div>
        </div>
    )

}


export default App
