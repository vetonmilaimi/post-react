import React from "react";
    
class PostForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <h1>Create new post</h1>
                <div>
                    <label htmlFor="title">Title</label> <br />
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={this.props.form.title}
                        onChange={this.props.handleChange}
                        placeholder="Title of Post"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="postText">Write Something</label> <br />
                    <textarea 
                        id="postText"
                        name="postText"
                        value={this.props.form.postText} 
                        onChange={this.props.handleChange}
                        placeholder="Write something..."
                        rows="6"
                        cols="22"
                        required
                    >
                    </textarea>
                </div>

                <button type="submit">Post</button>
            </form>
        );
    }
}

export default PostForm;