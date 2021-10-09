import React from 'react';
import './App.css';
import Null from "./null.css";
import PageBanner from './components/Banner/banner';
import ContentBar from './components/ContentBar/contentBar';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import MenuNavigation from './components/Menu/menu';
import Posting from './components/Posting/posting';

function App() {
  return <div className="app-wrapper">
      <Header/>
      <MenuNavigation />
      <PageBanner/>
      <Posting/>
      <ContentBar/>
      <Footer />
    </div>
}

export default App;
