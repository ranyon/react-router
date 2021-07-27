import React from 'react';


const Servicedetails = (props) =>{
    return(
        <>
        <center>
        <h4>servicedetails:{props.match.params.id}</h4>
        </center>
        </>
    )
}

export default Servicedetails;