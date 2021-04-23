import React from 'react'

function OneOnOneComparitions(props) {
    // DEFINING CONSTANT VARIABLES
    const oneOnOneMatrix = props.data.map((array, i) => {
        return(
            <div key={i} style={{display: 'flex', backgroundColor: 'orange'}}>
                {
                    array.map((item, j) => {
                        return(
                            <div key={j} style={{padding: 10, border: '1px solid black'}}>
                                <img src={item.image} alt='' style={{height: 90, width: 160}}/>
                            </div>
                        )
                    })
                }
            </div>
        )
    })

    // RETURNING VIEW
    return(
        <div >
            {oneOnOneMatrix}
        </div>
    )
}

export default OneOnOneComparitions