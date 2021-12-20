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


function App() {
    return (
        <div className="app-wrapper">
            <div className="app-wrapper__container">
                <div className="app-wrapper__app">
                    <HeaderContainer/>
                    <MenuNavigation/>
                    <Route path="/profile/:userId"
                           render={() => <ProfileFeedContainer/>}/>
                    <Route path="/dialogs"
                           render={() => <DialogsContainer/>}/>
                    <Route path="/search"
                           render={() => <SearchUserContainer/>}/>
                </div>
            </div>
            <div className="app-wrapper__footer"><Footer/></div>
        </div>
    )

}


export default App
