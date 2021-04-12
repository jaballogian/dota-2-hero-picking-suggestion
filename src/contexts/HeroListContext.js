import React, {useState} from 'react'

import sortedHeroDetailList from '../data/heroes/sortedHeroDetailList'

const HeroListContext = React.createContext()

function HeroListContextProvider(props){
    // DEFINING CONSTANT VARIABLES
    const [heroPoolList, setHeroPoolList] = useState(sortedHeroDetailList)

    console.log('heroPoolList', heroPoolList)

    // RETURNING VIEW
    return(
        <HeroListContext.Provider value={{heroPoolList}}>
            {props.children}
        </HeroListContext.Provider>
    )
}

export {HeroListContextProvider, HeroListContext}