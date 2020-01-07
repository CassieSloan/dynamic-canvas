import React, { Component } from "react";

class ColourSelector extends Component {
    state = { hex: this.props.hex }

    onInputChange(event) { //on name of element name of event
        console.log(event.target.value);
    }

    render() {
        const { hex } = this.state

        return(
            <input 
            type="color" 
            value={ hex } 
            onChange={(event) => { 
                this.setState({ hex: event.target.value})
            }} />
        );
    }

    static defaultProps = {
        hex: "#ffffff"
    }
}

export default ColourSelector;