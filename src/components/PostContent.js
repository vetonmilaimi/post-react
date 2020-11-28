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

        const posts = this.props.posts.map((post, i) => {
            return (
                <div className="post-content" key={i}>
                    <h3>{post.title}</h3>
                    <p>{post.postText}</p>
                    <hr />
                    <p>Creation Data: {date}</p>

                    <button onClick={() => {
                        document.getElementsByClassName("post-content")[i].remove();
                    }}>Remove</button>
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