import React  from 'react';

export var TestItem = (props) => {

    var {variant} = props;
    return (
        <div>
            <label>
                <input
                    type="radio"
                    name="radio-test"/> {variant}
            </label>
        </div>
    )
}
export default TestItem;
