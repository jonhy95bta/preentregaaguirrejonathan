import React from 'react'

function Task({ children }) {

    const [filterState, setFilterState] = useState("all")

    const HandleFilterChange = (event) => {
        setFilterState(event.target.value);
    };

    return children(filterState, handleFilterChange);
}

export default Task