import React  from 'react';

export var TestQuestion = React.createClass({

    render() {
        var { tests} = this.props;
        return (
            <div>
                {tests.question}
            </div>
        )
    }
});
