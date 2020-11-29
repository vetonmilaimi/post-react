import React from "react";

class PostContent extends React.Component {
    state = {
        date: ""
    };

    componentDidMount() {
        this.getDate();
    }

    getDate = () => {
        let date = new Date().toLocaleString();
        this.setState({ date });
    }


    render() {
        const { date } = this.state;
        const posts = this.props.posts.map((post, id) => {
            return (
                <div className="post-content" id={id}>
                    <h3>{post.title}</h3>
                    <p>{post.postText}</p>
                    <hr />
                    <p>Creation Data: {date}</p>

                    <button id={id} onClick={() => {
                            document.getElementsByClassName("post-content")[id].remove();
                            // document.getElementById("id").remove();
                    }}>Remove</button>

                    <button>Edit</button>
                </div>
            );
        });

        return (
            <div>
                {posts}
            </div>
        );
    }
}

export default PostContent;