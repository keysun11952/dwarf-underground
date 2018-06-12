import React, { Component } from 'react'

class Links extends Component {
    render() {
        return (
            <div className="article-links">
                <a className="article-link" onClick={() => {
                    document.querySelector("textarea").removeAttribute("hidden")
                    document.getElementById("submit").removeAttribute("hidden")
                }}>
                    <i className="fa fa-comments-o"></i>
                    <span className="article-link-text">Comments</span>
                </a>
                <a className="article-link" href="#">
                    <i className="fa fa-share"></i>
                    <span className="article-link-text">Share Post</span>
                </a>
                <textarea className="comment" cols="20" rows="2" hidden></textarea>
                <a className="submit" id="submit" hidden onClick={() => {
                    const comment = document.querySelector("textarea").value
                    document.getElementById("comment").innerHTML += "Comment: " + comment + "<br />"
                    document.getElementById("comment").removeAttribute("hidden")
                    document.querySelector("textarea").value = ""
                }}>submit</a>
                <p id="comment" hidden></p>
            </div>
        )
    }
}

export default Links
