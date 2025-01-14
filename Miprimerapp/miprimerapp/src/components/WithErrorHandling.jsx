import React from 'react'

export default function WithErrorHandlingHOC(ChildComponent) {
    function WrappedComponent(props) {
        const { error, ...restProps } = props;
        if (error)
            return <div>
                <h4>Oops! Algo salio mal</h4>
                <p>{error}</p>
            </div>
        else
            return <ChildComponent {...restProps} />

    }
    return WrappedComponent;
}

