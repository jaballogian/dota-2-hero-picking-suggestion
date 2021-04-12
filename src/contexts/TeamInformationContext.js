import React, {useContext} from 'react'

import {HeroListContext} from './HeroListContext'

const TeamInformationContext = React.createContext()

function TeamInformationContextProdiver(props){
    // DEFINING CONSTANT VARIABLES
    const {myHeroList, opponentsHeroList} = useContext(HeroListContext)

    // DEFINING CONSTANT FUNCTIONS
    const summarizeTeamInformation = (inputHeroListTeam) => {
        let meleeCount = 0
        let rangeCount = 0
        let strengthCount = 0
        let agilityCount = 0
        let intelligenceCount = 0

        for(let i = 0; i < inputHeroListTeam.length; i++){
            const item = inputHeroListTeam[i]

            // COUNT FOR MELEE AND RANGED UNITS
            if(item['attack_capability'] === 1){
                meleeCount++
            }
            else if(item['attack_capability'] === 2){
                rangeCount++
            }

            // COUNT FOR HERO ATTRIBUTES
            if(item['primary_attr'] === 0){
                strengthCount++
            }
            else if(item['primary_attr'] === 1){
                agilityCount++
            }
            else if(item['primary_attr'] === 2){
                intelligenceCount++
            }
        }
        return {meleeCount, rangeCount, strengthCount, agilityCount, intelligenceCount}
    }

    // CALLING CONSTANT VARIABLES
    console.log('my team information', summarizeTeamInformation(myHeroList))
    console.log("opponent's team information", summarizeTeamInformation(opponentsHeroList))

    // RETURNING VIEW
    return(
        <TeamInformationContext.Provider value={{}}>
            {props.children}
        </TeamInformationContext.Provider>
    )
}

export {TeamInformationContextProdiver, TeamInformationContext}