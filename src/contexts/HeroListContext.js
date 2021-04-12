import React, {useState} from 'react'

import sortedHeroDetailList from '../data/heroes/sortedHeroDetailList'

const HeroListContext = React.createContext()

function HeroListContextProvider(props){
    // DEFINING CONSTANT VARIABLES
    const [heroPoolList, setHeroPoolList] = useState(sortedHeroDetailList)
    const [myHeroList, setMyHeroList] = useState([])                        // MAXIMUM LENGTH IS 5
    const [opponentsHeroList, setOpponentsHeroList] = useState([])          // MAXIMUM LENGTH IS 5
    const [bannedHeroList, setBannedHeroList] = useState([])                // MAXIMUM LENGTH IS 14

    // DEFINING CONSTANT FUNCTIONS
    const addToMyHeroList = () => {
        console.log('addToMyHeroList')
    }

    const addToOpponentsHeroList = () => {
        console.log('addToOpponentsHeroList')
    }

    const addToBannedHeroList = () => {
        console.log('addToBannedHeroList')
    }

    // CALLING CONSTANT FUNCTIONS
    // console.log('heroPoolList', heroPoolList)

    // RETURNING VIEW
    return(
        <HeroListContext.Provider 
            value={{
                heroPoolList,
                addToMyHeroList,
                addToOpponentsHeroList,
                addToBannedHeroList
            }}
        >
            {props.children}
        </HeroListContext.Provider>
    )
}

export {HeroListContextProvider, HeroListContext}