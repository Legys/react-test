import React  from 'react';

export var TestQuestion = (props)  => {
        var { question} = props;
        return (
            <div>
                <ul>{question}</ul>
            </div>
            )
};
