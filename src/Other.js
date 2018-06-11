import React, { Component } from 'react'
import Other01 from './Other01.js'
import Other02 from './Other02.js'
import Other03 from './Other03.js'
import Other04 from './Other04.js'

class Other extends Component {
    render() {
        return (
            <div className="small-12 columns other-articles">
                <h2>From around the Realm</h2>
                <Other01 />
                <Other02 />
                <Other03 />
                <Other04 />
            </div>
        )
    }
}

export default Other
