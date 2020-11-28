import React from "react";

class PostContent extends React.Component {
    render() {
        const posts = this.props.posts.map((post,i) =>{
            return (
                <div className="post-content" key={i}>
                    <h3>{post.title}</h3>
                    <p>{post.postText}</p>
                    <p>Creation Data: {this.date}</p>
                </div>
            );
        })

        return (
            <div>
                {posts}
            </div>
        );
    }
}

export default PostContent;