import React from "react";

export const Post = (props) => {
    return(
        <div className="post">
            <p>{props.username}</p>
            <div className="picturePost">
                {props.imgUrl !==  "" ? (
                    <img src={props.imgUrl} alt="post image" />
                ) : null}
            </div>
            <h2>{props.challengeName}</h2>
            <h3>{props.givenHeading}</h3>
        </div>
    )
}