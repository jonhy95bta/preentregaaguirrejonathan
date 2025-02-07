import React from 'react'
import { SpinnerCircular } from "spinners-react";
function Loader() {
    return (
        <SpinnerCircular size={88} thickness={61} speed={124} color="rgba(172, 57, 59, 1)" secondaryColor="rgba(0, 0, 0, 0.94)" />
    )
}

export default Loader