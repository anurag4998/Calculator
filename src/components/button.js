import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <button onClick={this.props.function} className="btn btn-sm btn-secondary col-2 ml-2 mr-1 ">{this.props.value} </button>
        )
    }

}

export default Button;