import React, { Component } from 'react'
import "./index.scss"
import { Button } from 'antd'

export default class PrimaryButton extends Component {
    render() {
        const {href} = this.props;
        return (
            <a className="primary-button" href={href || '/'}>
                {this.props.children}
            </a>
        )
    }
}
