import React from "react";

class PostContent extends React.Component {
    render() {
        const posts = this.props.posts.map((post,i) =>{
            return (
                <div className="post-content">
                    <h3>{post.title}</h3>
                    <p>{post.postText}</p>
                </div>
            );
        })
        return (
            {posts}
        );
    }
}

export default PostContent;