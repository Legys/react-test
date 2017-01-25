import React  from 'react';

export var TestItem = React.createClass({
    render() {
        var { variant } = this.props;
        return (
            <div>
                <label> <input type="radio" name="radio-test"/> {variant} </label>
            </div>
        )
    }
});
