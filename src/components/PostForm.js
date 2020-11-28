import React from "react";

class PostForm extends React.Component {
    render() {
        <form onSubmit={this.props.handleSubmit}>
            <h2>Create new post</h2>
            <div>
                <label htmlFor="title" placeholder="Title:">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={this.props.form.title}
                />
            </div>

            <div>
                <label htmlFor="postText" placeholder="Write something...">Write Something</label>
                <textarea 
                    id="postText"
                    name="postText"
                    value={this.props.form.postText} 
                >
                </textarea>
            </div>

            <button type="submit">Post</button>
        </form>
    }
}

export default PostForm;