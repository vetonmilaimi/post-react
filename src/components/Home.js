import React from "react";

import PostContent from "./PostContent";

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            title: 'Title',
            postText: 'The standard chunk of Lorem Ipsum used since the 1500s is    reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.g'
        }
    }

    render() {
        return(
            <PostContent posts={this.state.posts} />
        );
    }
}

export default Home;