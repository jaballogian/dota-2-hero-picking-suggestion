import React, {useState} from 'react'

import sortedHeroDetailWithImageList from '../data/heroes/sortedHeroDetailWithImageList'

const HeroListContext = React.createContext()

function HeroListContextProvider(props){
    // DEFINING CONSTANT VARIABLES
    const [heroPoolList, setHeroPoolList] = useState(sortedHeroDetailWithImageList)
    const [myHeroList, setMyHeroList] = useState([])                        // MAXIMUM LENGTH IS 5
    const [opponentsHeroList, setOpponentsHeroList] = useState([])          // MAXIMUM LENGTH IS 5
    const [bannedHeroList, setBannedHeroList] = useState([])                // MAXIMUM LENGTH IS 14

    // DEFINING CONSTANT FUNCTIONS
    const removeHeroFromHeroPoolList = (inputHeroData) => {
        const updatedHeroPoolList = heroPoolList.filter(item => item.id !== inputHeroData.id)
        setHeroPoolList(updatedHeroPoolList)
    }

    const addToMyHeroList = (inputHeroData) => {
        // console.log('addToMyHeroList', inputHeroData)
        if(myHeroList.length < 5){
            setMyHeroList(previousValue => [...previousValue, inputHeroData])
            removeHeroFromHeroPoolList(inputHeroData)
        }
    }

    const addToOpponentsHeroList = (inputHeroData) => {
        // console.log('addToOpponentsHeroList', inputHeroData)
        if(opponentsHeroList.length < 5){
            setOpponentsHeroList(previousValue => [...previousValue, inputHeroData])
            removeHeroFromHeroPoolList(inputHeroData)
        }
    }

    const addToBannedHeroList = (inputHeroData) => {
        // console.log('addToBannedHeroList', inputHeroData)
        if(bannedHeroList.length < 14){
            setBannedHeroList(previousValue => [...previousValue, inputHeroData])
            removeHeroFromHeroPoolList(inputHeroData)
        }
    }

    // CALLING CONSTANT FUNCTIONS
    // console.log('heroPoolList', heroPoolList)
    // console.log('myHeroList', myHeroList)
    // console.log('opponentsHeroList', opponentsHeroList)
    // console.log('bannedHeroList', bannedHeroList)

    // RETURNING VIEW
    return(
        <HeroListContext.Provider 
            value={{
                heroPoolList,
                myHeroList,
                addToMyHeroList,
                opponentsHeroList,
                addToOpponentsHeroList,
                bannedHeroList,
                addToBannedHeroList
            }}
        >
            {props.children}
        </HeroListContext.Provider>
    )
}

export {HeroListContextProvider, HeroListContext}