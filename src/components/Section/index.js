import React, { Component } from 'react'
import './index.scss'
export default class Section extends Component {
    render() {
        const {className} = this.props;
        return (
            <div className={`section ${className || ''}`}>
                {this.props.children}
            </div>
        )
    }
}
