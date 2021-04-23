import React, {useContext} from 'react'

// CUSTOM COMPONENTS AND DATA
import {HeroListContext} from '../../contexts/HeroListContext'

function OneOnOneComparitions(props) {
    // DEFINING CONSTANT VARIABLES
    const {myHeroList, opponentsHeroList} = useContext(HeroListContext)

    const myColumn = myHeroList.map((item, index) => (
        <div key={index} style={{padding: 10, border: '1px solid black', backgroundColor: 'green'}}>
            <img src={item.image} alt='' style={{height: 90, width: 160}}/>
        </div>
    ))

    const opponentsRow = opponentsHeroList.map((item, index) => (
        <div key={index} style={{padding: 10, border: '1px solid black', backgroundColor: 'red'}}>
            <img src={item.image} alt='' style={{height: 90, width: 160}}/>
        </div>
    ))
    
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
            {/* OPPONENT'S HERO LIST */}
            <div style={{display: 'flex', marginBottom: 10, marginLeft: 192}}>
                {opponentsRow}
            </div>

            <div style={{display: 'flex'}}>
                {/* MY HERO LIST */}
                <div style={{marginRight: 10}}>
                    {myColumn}
                </div>

                {/* COMPARITION MATRIX */}
                <div>
                    {oneOnOneMatrix}
                </div>
            </div>
        </div>
    )
}

export default OneOnOneComparitions