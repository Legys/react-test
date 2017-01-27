import React from 'react';
import TestFrame  from 'TestFrame';


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

export default Main;