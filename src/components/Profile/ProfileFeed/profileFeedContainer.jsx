import React from 'react'
import Banner from './Banner/banner'
import ContentBarContainer from './ContentBar/contentBarContainer'
import PostingContainer from './Posting/postingContainer'
import style from './profileFeed.css'

const profileFeedContainer = (props) => {
    debugger
  let postsElements = props.profileState._profilePage.getPosts().map(elem => <ContentBarContainer
    name={elem.name}
    message={elem.post}
    likesCount={elem.likesCount} />);


  return (
    <div className="profileFeed">
      <div className="profileFeed__Banner">
        <Banner />
      </div>
      <div className="profileFeed__Posting">
        <PostingContainer defaultValue={props.profileState._newPostText} dispatch={props.dispatch} />
      </div>
      <div className="profileFeed__ContentBar">
        {postsElements}
      </div>
    </div>
  )
}
export default profileFeedContainer
