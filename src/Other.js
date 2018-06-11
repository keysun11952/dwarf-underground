import React, { Component } from 'react'
import Other01 from './Other01.js'
import Other02 from './Other02.js'
import Other03 from './Other03.js'
import Other04 from './Other04.js'

class Others extends React.Component {
    render() {
        return this.props.name
    }
}

class Other extends Component {
    constructor() {
        super()
        this.state = {
            others: [<Other01 />, <Other02 />, <Other03 />, <Other04 />]
        }
    }

    render() {
        return (
            <div className="small-12 columns other-articles">
                <h2>From around the Realm</h2>
                {this.state.others.map(others => <Others name={others} />)}
            </div>
        )
    }
}

export default Other
