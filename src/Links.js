import React, { Component } from 'react'

class Links extends Component {
    render() {
        return (
            <div className="article-links">
                <a className="article-link" onClick={() => document.querySelector("textarea").removeAttribute("hidden")}>
                    <i className="fa fa-comments-o"></i>
                    <span className="article-link-text">Comments</span>
                </a>
                <a className="article-link" href="#">
                    <i className="fa fa-share"></i>
                    <span className="article-link-text">Share Post</span>
                </a>
                <textarea name="comment" id="comment" cols="20" rows="2" hidden></textarea>
            </div>
        )
    }
}

export default Links
