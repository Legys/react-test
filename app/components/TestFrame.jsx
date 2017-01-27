import React from 'react';
import { TestVariants } from 'TestVariants';
import { TestQuestion } from 'TestQuestion';

class TestFrame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 0,
            triggerResult: false
        }
        this.handleNext = this.handleNext.bind(this);
        /*this.handleRightAnswer = this.handleRightAnswer.bind(this);*/
    }
    handleNext(e) {
        e.preventDefault();
        console.log('next');
        console.log(this.state.step);

            this.setState({
                step: this.state.step + 1
            });

    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.step === this.props.tests.length) {
             this.setState({
                step: this.state.step,
                 triggerResult: true
            });
            return false;
        }
        return true;
    }
   render() {
            const que = this.props.tests[this.state.step].question;
            const variants = this.props.tests[this.state.step].variants;
       const renderTotal = () => {
               return (
                   <div>You got </div>
               )
       }

     return (
           <div className="container test-frame callout primary">
                <div className="column small-centered small-10 large-6">
                    {!this.state.triggerResult ?
                        (
                            <div>
                                <TestQuestion question={que}/>
                                <TestVariants  variants={variants}/>
                                <button onClick={this.handleNext} className="button button-medium">Ok</button>
                            </div>
                        ) :
                        (
                            renderTotal()
                        )

                    }
                </div>
           </div>
       )
   }
};

TestFrame.defaultProps = {
    tests: [
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
        {
            id: 3,
            question: 'Your weight',
            variants: [60, 70, 80, 90, 100]
        },
    ]
}
export default TestFrame;
