import React from "react";

import PostContent from "./PostContent";
import PostForm from "./PostForm";

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            form: {
                title: '',
                postText: '',
            }
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;

        this.setState(prevState => {
            return {
                form: {
                    ...prevState.form,
                    [name]: event.target.value
                }
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const { title, postText} = this.state.form;
        
        this.setState(prevState => {
            return {
                posts: [
                    prevState.form,
                    ...prevState.posts
                ],
                form: {
                    title: '',
                    postText: ''
                }
            };
        });
    }


    render() {
        return(
            <div>
                <PostForm 
                    handleChange = {this.handleChange}
                    handleSubmit = {this.handleSubmit}
                    form = {this.state.form}
                />
                <PostContent posts={this.state.posts} />
            </div>
        );
    }
}

export default Home;