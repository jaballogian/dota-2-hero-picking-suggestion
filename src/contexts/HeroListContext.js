import React, {useState} from 'react'

import sortedHeroDetailWithImageList from '../data/heroes/sortedHeroDetailWithImageList'
import {sortByProperty} from '../data/heroes/sortedHeroDetailList'

const HeroListContext = React.createContext()

function HeroListContextProvider(props){
    // DEFINING CONSTANT VARIABLES
    const [heroPoolList, setHeroPoolList] = useState(sortedHeroDetailWithImageList)
    const [myHeroList, setMyHeroList] = useState([])                        // MAXIMUM LENGTH IS 5
    const [opponentsHeroList, setOpponentsHeroList] = useState([])          // MAXIMUM LENGTH IS 5
    const [bannedHeroList, setBannedHeroList] = useState([])                // MAXIMUM LENGTH IS 14

    // DEFINING CONSTANT FUNCTIONS
    const addHeroToList = (inputHeroData, inputHeroListType) => {
        if(inputHeroListType === 'heroPoolList'){
            setHeroPoolList(previousValue => [...previousValue, inputHeroData].sort(sortByProperty('name_loc')))
        }
        else if(inputHeroListType === 'myHeroList'){
            if(myHeroList.length < 5){
                setMyHeroList(previousValue => [...previousValue, inputHeroData])
                removeHeroFromList(inputHeroData, 'heroPoolList')
            }
        }
        else if(inputHeroListType === 'opponentsHeroList'){
            if(opponentsHeroList.length < 5){
                setOpponentsHeroList(previousValue => [...previousValue, inputHeroData])
                removeHeroFromList(inputHeroData, 'heroPoolList')
            }
        }
        else if(inputHeroListType === 'bannedHeroList'){
            if(bannedHeroList.length < 14){
                setBannedHeroList(previousValue => [...previousValue, inputHeroData])
                removeHeroFromList(inputHeroData, 'heroPoolList')
            }
        }
    }

    const removeHeroFromList = (inputHeroData, inputHeroListType) => {
        if(inputHeroListType === 'heroPoolList'){
            const updatedHeroPoolList = heroPoolList.filter(item => item.id !== inputHeroData.id)
            setHeroPoolList(updatedHeroPoolList)
        }
        else if(inputHeroListType === 'myHeroList'){
            const updatedMyHeroList = myHeroList.filter(item => item.id !== inputHeroData.id)
            setMyHeroList(updatedMyHeroList)
            addHeroToList(inputHeroData, 'heroPoolList')
        }
        else if(inputHeroListType === 'opponentsHeroList'){
            const updatedOpponentsHeroList = opponentsHeroList.filter(item => item.id !== inputHeroData.id)
            setOpponentsHeroList(updatedOpponentsHeroList)
            addHeroToList(inputHeroData, 'heroPoolList')
        }
        else if(inputHeroListType === 'bannedHeroList'){
            const updatedBannedHeroList = bannedHeroList.filter(item => item.id !== inputHeroData.id)
            setBannedHeroList(updatedBannedHeroList)
            addHeroToList(inputHeroData, 'heroPoolList')
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
                opponentsHeroList,
                bannedHeroList,
                addHeroToList,
                removeHeroFromList
            }}
        >
            {props.children}
        </HeroListContext.Provider>
    )
}

export {HeroListContextProvider, HeroListContext}