import ContentBar from "./ContentBar/contentBar";
import Banner from "./Banner/banner";
import PostingContainer from "./Posting/postingContainer";
import React from "react";

const ProfileFeed = (state, props) => {
    debugger
    let postsElements = state._postsForMap.map(elem => <ContentBar
        name={elem.name}
        message={elem.postMessage}
        likesCount={elem.likesCount}
        key={elem.id}
        userId={elem.id}/>);

    debugger
    return (

        <div className="profileFeed">
            <div className="profileFeed__Banner">
                <Banner profile={props.profile}/>
            </div>
            <div className="profileFeed__Posting">
                <PostingContainer/>
            </div>
            <div className="profileFeed__ContentBar">
                {postsElements}
            </div>
        </div>
    )
}
debugger
export default ProfileFeed;