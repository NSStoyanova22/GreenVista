import React from "react";
import { deletePost } from "../../utils/HTTPServise";

export const Post = (props) => {
    const [isAdmin, setIsAdmin] = React.useState(props.isAdmin || false)
    const deleteItem = () => {
        deletePost({id: props.postId}).then((res) =>{
            console.log(res)
        })
    }
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
            {isAdmin ? (
                <span onClick={deleteItem}>Delete</span>
            ) : null}
        </div>
    )
}