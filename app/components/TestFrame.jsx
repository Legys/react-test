import React from 'react';
import { TestVariants } from 'TestVariants';
import { TestQuestion } from 'TestQuestion';
export var TestFrame = React.createClass({
    handleNext(e) {
        e.preventDefault();
        console.log('next');
        this.setState({
                step: step + 1
        })
    },
    getInitialState() {
        return {
            step: 0
        }
    },
    getDefaultProps() {
        return {
            tests:[
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
        }

    },
   render() {
        var {tests} = this.props;
     /*  var renderVariants = () => {
            return tests.map = (test, i) => {
                return    <TestItem key={test.id} variant={test[i].variants} />
            }
       }*/
       return (
           <div className="container test-frame">
                <div className="column small-centered small-10 large-6">
                        <TestQuestion tests={tests[this.state.step]}/>
                        <TestVariants variants={tests[this.state.step].variants}/>
                    <button onSubmit={this.handleNext} className="button button-medium">Ok</button>
                </div>
           </div>
       )
   }
});

