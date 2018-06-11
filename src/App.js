import React, { Component } from 'react';
import './App.css';
import Header from './Header.js'
import Footer from './Footer.js'
import Other from './Other.js'
import Aside from './Aside.js'
import Article from './Article.js'
import Avatar from './Avatar.js'
import Links from './Links.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="expanded row">
          <div className="large-8 medium-12 columns article">
            <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
            <Avatar />
            <Article />
            <Links />
          </div>
          <Aside />
          <Other />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
