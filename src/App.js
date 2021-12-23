import React from 'react'
import './App.css'
import Null from './null.css'
import Footer from './components/Footer/footer'
import Header from './components/Header/header'
import MenuNavigation from './components/Menu/menu'
import {Route} from 'react-router-dom'
import ProfileFeedContainer from "./components/Profile/ProfileFeed/profileFeedContainer";
import DialogsContainer from "./components/Dialogs/dialogsContainer";
import SearchUserContainer from "./components/SearchUsers/SearchUserContainer";
import HeaderContainer from "./components/Header/headerContainer";
import LoginContainer from "./components/Login/LoginContainer";


function App() {
    return (
        <div className="app-wrapper">
            <div className="app-wrapper__container">
                <div className="app-wrapper__app">
                    <HeaderContainer/>
                    <MenuNavigation/>
                    <div className="app-wrapper__content">
                        <Route path="/profile/:userId"
                               render={() => <ProfileFeedContainer/>}/>
                        <Route path="/dialogs"
                               render={() => <DialogsContainer/>}/>
                        <Route path="/search"
                               render={() => <SearchUserContainer/>}/>
                        <Route path="/login"
                               render={() => <LoginContainer/>}/>
                    </div>
                    </div>

            </div>
            <div className="app-wrapper__footer"><Footer/></div>
        </div>
    )

}


export default App
