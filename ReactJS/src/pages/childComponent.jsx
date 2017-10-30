import React, { Component } from 'react';

// Child Component
export class ListItem extends Component {
    render() {
        return (
            <li>
                {this.props.quantity} × {this.props.name}
            </li>
        );
    }
}

export class NewItem extends Component {
    render() {
        return (
            <li>
                {this.props.marka} - {this.props.year}
            </li>
        );
    }
}
