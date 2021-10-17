import React from 'react'
import Banner from './Banner/banner'
import ContentBar from './ContentBar/contentBar'
import Posting from './Posting/posting'
import style from './profileFeed.css'

const profileFeed = () => {
  return (
    <div className="profileFeed">
      <div className="profileFeed__Banner">
        <Banner />
      </div>
      <div className="profileFeed__Posting">
        <Posting />
      </div>
      <div className="profileFeed__ContentBar">
        <ContentBar />
      </div>
    </div>
  )
}
export default profileFeed
