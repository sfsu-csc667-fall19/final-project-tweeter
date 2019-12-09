import React from 'react';

const Loader = (props) => {
    return(
        <div className="loader">
            {props.paging && (
                <p>Loading...</p>
            )}
        </div>
    )

}
export default Loader;