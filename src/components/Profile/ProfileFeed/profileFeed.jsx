import ContentBar from "./ContentBar/contentBar";
import Banner from "./Banner/banner";
import PostingContainer from "./Posting/postingContainer";
import React from "react";
import Dialogs from "../../Dialogs/dialogs";

const ProfileFeed= (state) => {
    debugger

    let postsElements = state._posts.map(elem => <ContentBar
        name={elem.name}
        message={elem.post}
        likesCount={elem.likesCount} />);


    return (
        <div className="profileFeed">
            <div className="profileFeed__Banner">
                <Banner />
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