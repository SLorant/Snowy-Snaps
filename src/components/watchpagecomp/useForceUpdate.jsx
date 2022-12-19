import React, { useState } from 'react';

//create your forceUpdate hook
const useForceUpdate = () => {

    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update state to force render
    // An function that increment 👆🏻 the previous state like here 
    // is better than directly setting `value + 1`
}

export default useForceUpdate