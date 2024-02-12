import React from "react";

export const PostPictureHeader = () => {
    return(
        <div className="forumPage">
            {uploadedPhotoUrl && (
            <div className="postHeader">
                <p className="username">@username</p>
                <img src={uploadedPhotoUrl} alt="Uploaded" style={{ maxWidth: '100%', height: 'auto' }} className="uploadedImage"/>
                <p className="username">Challenge Name</p>
                <p className="username">Given Heading</p>
                <button className="postBtn">Post</button>
                <button className="cancelBtn">Cancel</button>
            </div>
            )}
        </div>
    )
}