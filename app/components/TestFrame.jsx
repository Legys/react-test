import React from 'react';
import { TestVariant } from 'TestVariant';

export var TestFrame = React.createClass({
    handleSubmit(e) {
        e.preventDefault();
    },
    getDefaultProps() {
        tests = [
            {
                id: 1,
                question: 'How old are you',
                variants: [25, 30, 16]
            },
            {
                id: 2,
                question: 'Your height',
                variants: [165, 179, 182]
            },
        ]
    },
   render() {

       return (
           <div className="container test-frame">
                <div className="column small-centered small-10 large-6">
                    <p className="test__question" > {this.props.tests[0].question} </p>
                    <form className="test">
                        <TestVariant />
                        <button onSubmit={this.handleSubmit} className="button button-medium">Ok</button>
                    </form>
                </div>
           </div>
       )
   }
});

