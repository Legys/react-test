import React from 'react';


export var TestVariants =  (props) => {
    const variantItem  = props.variants.map((variant, i) => {
        console.log(variant)
        return (
            <li key={i}>
                <label>
                    <input
                        type="radio"
                        name="radio-test"/> {variant}
                </label>
            </li>
            )

    });
    return (
        <div>
            <ul >{variantItem}</ul>
        </div>

         )
}



export default TestVariants;
