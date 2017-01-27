import React from 'react';


export var TestVariants =  (props) => {

    const variantItem  = props.variants.map((variant, i) => {
        console.log(variant);
        return (
            <li  key={i}>
                <label >
                    <input
                        type="radio"
                        name="radio-test"

                        /> {variant}
                </label>
            </li>
            )

    });
    const pickVariant = () => {

        props.pickVariant();

    }
    const radioCheck = (e) => {
        console.log('Radio check ' + e.target.value);

    }
    return (
        <div>
            <ul  onChange={radioCheck}>{variantItem}</ul>
            <button onClick={pickVariant}  className="button button-medium">Ok</button>
        </div>

         )
}



export default TestVariants;

