import React, { useEffect } from 'react'

function Listener() {
    function handleClick() {
        console.log("clickeaste")
    }

    useEffect(() => {
        const btnElement = document.getElementById("btn-click");
        console.log("---->", btnElement)
        btnElement.addEventListener("click", handleClick)


        return (() => {
            btnElement.removeEventListener("click", handleClick)

        })

    }, [])

    return (
        <div>
            <h2>Listener</h2>

            <button id="btn-click">Click me</button>
            <button onClick={handleClick}></button>
        </div>
    )
}

export default Listener