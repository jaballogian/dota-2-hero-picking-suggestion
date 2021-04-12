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
    const addToMyHeroList = (inputHeroData) => {
        // console.log('addToMyHeroList', inputHeroData)
        setMyHeroList(previousValue => [...previousValue, inputHeroData])
    }

    const addToOpponentsHeroList = (inputHeroData) => {
        // console.log('addToOpponentsHeroList', inputHeroData)
        setOpponentsHeroList(previousValue => [...previousValue, inputHeroData])
    }

    const addToBannedHeroList = (inputHeroData) => {
        // console.log('addToBannedHeroList', inputHeroData)
        setBannedHeroList(previousValue => [...previousValue, inputHeroData])
    }

    // CALLING CONSTANT FUNCTIONS
    // console.log('heroPoolList', heroPoolList)
    console.log('myHeroList', myHeroList)
    console.log('opponentsHeroList', opponentsHeroList)
    console.log('bannedHeroList', bannedHeroList)

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