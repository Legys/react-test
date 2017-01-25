import React from 'react';
import {TestItem} from 'TestItem';

export var TestVariants =  (props) => {
    var {variants} = props;

    var renderItem = variants.map((variant, i) => {
        return
            <TestItem
                key={i}
                variant={variant[1]}/>
    });
    return (
        <div>
            {renderItem}
        </div>
    )
}