import React from 'react';
import './App.css';
import PageBanner from './Struct/banner';
import ContentBar from './Struct/contentBar';
import Header from './Struct/header';
import MenuNavigation from './Struct/menu';

function App() {
  return <div className="app-wrapper">
      <Header />
      <MenuNavigation />
      <PageBanner />
      <ContentBar/>
    </div>
}

export default App;
