import React, { Component } from 'react'

export default class Blogdetails extends Component {
    render() {
        console.warn(this.props.match.params.id)
        return (
            <div>
                <h1>blog details</h1>
            </div>
        )
    }
}
