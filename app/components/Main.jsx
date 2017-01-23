var React = require('react');
import {TestFrame} from 'TestFrame';

var Main = (props) => {
    return (
        <div>
            <div className="row">
                <div className="">
                    <TestFrame />
                    {props.children}
                </div>
            </div>

        </div>
        )
}

module.exports = Main;