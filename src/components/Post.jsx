import React from "react";

export const Post = (props) => {
    return(
        <div className="post">
            <h1>{props.username}</h1>
            <div className="picturePost">
                {props.imgUrl !==  "" ? (
                    <img src={props.imgUrl} alt="post image" />
                ) : null}
            </div>
            <h1>{props.challengeName}</h1>
            <h1>{props.givenHeading}</h1>
        </div>
    )
}