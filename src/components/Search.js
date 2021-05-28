import React, { useState } from "react"
import List from "./List";

const Search = () => {
    const [value, setValue] = useState("");
    return (
        <React.Fragment>
            <form className="ui form">
                <input
                    type="text"
                    placeholder="Search Wikipedia..."
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </form>

            <List />
        </React.Fragment>
    );
}

export default Search;