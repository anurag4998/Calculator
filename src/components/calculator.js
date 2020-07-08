import React from 'react';
import Button from "./button";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.generatethreedigit = this.generatethreedigit.bind(this)
        this.generatetwodigit = this.generatetwodigit.bind(this)
        this.sum = this.sum.bind(this)
        this.multiply = this.multiply.bind(this)
        this.subtract = this.subtract.bind(this)

        this.state =
        {
            result: 0,
            number1: 0,
            number2: 0
        }
    }
    generateRandomThreeDigit() {
        return Math.floor(Math.random() * 1000) + 1;
    }
    generateRandomTwoDigit() {
        return Math.floor(Math.random() * 100) + 1;
    }
    generatethreedigit() {

        this.setState({
            result: 0,
            number1: this.generateRandomThreeDigit(),
            number2: this.generateRandomThreeDigit()

        })

    }
    generatetwodigit() {
        this.setState({
            result: 0,
            number1: this.generateRandomTwoDigit(),
            number2: this.generateRandomTwoDigit(),

        })
    }
    sum() {
        this.setState({
            result: this.state.number1 + this.state.number2

        })
    }
    multiply() {
        this.setState({
            result: this.state.number1 * this.state.number2

        })
    }
    subtract() {
        this.setState({
            result: this.state.number1 - this.state.number2

        })
    }

    render() {
        return (
            <div className="container containerbox">
                <Button function={this.generatethreedigit} value={'Three digit'} />
                <Button function={this.generatetwodigit} value={'Two digit'} />
                <Button function={this.sum} value={'Add'} />
                <Button function={this.subtract} value={'Subtract'} />
                <Button function={this.multiply} value={'Multiply'} />

                <div>
                    <div className="row">
                        <div className="col-12 col-sm-2 col-lg-1 m-2 text">
                            {this.state.number1}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-2 col-lg-1 m-2 text">
                            {this.state.number2}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-2 col-lg-1 m-2 text">
                            Result: {this.state.result}
                        </div>
                    </div>

                </div>
            </div>

        )
    }


}

export default Counter;