import React, {useState} from 'react'

import sortedHeroDetailWithImageList from '../data/heroes/sortedHeroDetailWithImageList'
import {sortByProperty} from '../data/heroes/sortedHeroDetailList'
import variables from '../utils/variables'

const HeroListContext = React.createContext()

function HeroListContextProvider(props){
    // DEFINING CONSTANT VARIABLES
    const [heroPoolList, setHeroPoolList] = useState(sortedHeroDetailWithImageList)
    const [myHeroList, setMyHeroList] = useState([])                        // MAXIMUM LENGTH IS 5
    const [opponentsHeroList, setOpponentsHeroList] = useState([])          // MAXIMUM LENGTH IS 5
    const [bannedHeroList, setBannedHeroList] = useState([])                // MAXIMUM LENGTH IS 14

    // DEFINING CONSTANT FUNCTIONS
    const addHeroToList = (inputHeroData, inputHeroListType) => {
        if(inputHeroListType === variables.heroPoolList){
            setHeroPoolList(previousValue => [...previousValue, inputHeroData].sort(sortByProperty('name_loc')))
        }
        else if(inputHeroListType === variables.myHeroList){
            if(myHeroList.length < 5){
                setMyHeroList(previousValue => [...previousValue, inputHeroData])
                removeHeroFromList(inputHeroData, variables.heroPoolList)
            }
        }
        else if(inputHeroListType === variables.opponentsHeroList){
            if(opponentsHeroList.length < 5){
                setOpponentsHeroList(previousValue => [...previousValue, inputHeroData])
                removeHeroFromList(inputHeroData, variables.heroPoolList)
            }
        }
        else if(inputHeroListType === variables.bannedHeroList){
            if(bannedHeroList.length < 14){
                setBannedHeroList(previousValue => [...previousValue, inputHeroData])
                removeHeroFromList(inputHeroData, variables.heroPoolList)
            }
        }
    }

    const removeHeroFromList = (inputHeroData, inputHeroListType) => {
        if(inputHeroListType === variables.heroPoolList){
            const updatedHeroPoolList = heroPoolList.filter(item => item.id !== inputHeroData.id)
            setHeroPoolList(updatedHeroPoolList)
        }
        else if(inputHeroListType === variables.myHeroList){
            const updatedMyHeroList = myHeroList.filter(item => item.id !== inputHeroData.id)
            setMyHeroList(updatedMyHeroList)
            addHeroToList(inputHeroData, variables.heroPoolList)
        }
        else if(inputHeroListType === variables.opponentsHeroList){
            const updatedOpponentsHeroList = opponentsHeroList.filter(item => item.id !== inputHeroData.id)
            setOpponentsHeroList(updatedOpponentsHeroList)
            addHeroToList(inputHeroData, variables.heroPoolList)
        }
        else if(inputHeroListType === variables.bannedHeroList){
            const updatedBannedHeroList = bannedHeroList.filter(item => item.id !== inputHeroData.id)
            setBannedHeroList(updatedBannedHeroList)
            addHeroToList(inputHeroData, variables.heroPoolList)
        }
    }

    // CALLING CONSTANT FUNCTIONS
    // console.log(variables.heroPoolList, heroPoolList)
    // console.log(variables.myHeroList, myHeroList)
    // console.log(variables.opponentsHeroList, opponentsHeroList)
    // console.log(variables.bannedHeroList, bannedHeroList)

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