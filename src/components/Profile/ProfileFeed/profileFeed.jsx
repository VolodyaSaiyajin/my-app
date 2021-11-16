import ContentBar from "./ContentBar/contentBar";
import Banner from "./Banner/banner";
import PostingContainer from "./Posting/postingContainer";
import React from "react";
import Dialogs from "../../Dialogs/dialogs";

const ProfileFeed = (state) => {
    debugger

    let postsElements = state._postsForMap.map(elem => <ContentBar
        name={elem.name}
        message={elem.postMessage}
        likesCount={elem.likesCount}
        key={elem.id}/>);


    return (
        <div className="profileFeed">
            <div className="profileFeed__Banner">
                <Banner/>
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

export default ProfileFeed;