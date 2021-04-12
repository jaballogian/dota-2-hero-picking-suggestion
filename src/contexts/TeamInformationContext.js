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
        for(let i = 0; i < inputHeroListTeam.length; i++){
            const item = inputHeroListTeam[i]

            // COUNT FOR MELEE AND RANGED UNITS
            if(item['attack_capability'] === 1){
                meleeCount++
            }
            else if(item['attack_capability'] === 2){
                rangeCount++
            }
        }
        return {meleeCount, rangeCount}
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