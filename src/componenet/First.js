import React from 'react'

const First = () => {

    const style = {
        color:"white",
        backgroundColor:"#87CEFA",
        borderBottom:"solid 3px #333",
        height:"30px",
        maxWidth:"550px",
       margin:"auto",
       borderRadius:"3px",
       userSelect:"none"

        


    }
    return (
        <div style = {style}>
            <p>This Is Our First React Application</p>
        </div>
    )
}

export default First
