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

        let carryCount = 0
        let supportCount = 0
        let nukerCount = 0
        let disablerCount = 0
        let junglerCount = 0
        let durableCount = 0
        let escapeCount = 0
        let pusherCount = 0
        let initiatorCount = 0

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

            // COUNT FOR HERO ROLES
            if(item['role_levels'][0] > 0){
                carryCount++
            }
            else if(item['role_levels'][1] > 0){
                supportCount++
            }
            else if(item['role_levels'][2] > 0){
                nukerCount++
            }
            else if(item['role_levels'][3] > 0){
                disablerCount++
            }
            else if(item['role_levels'][4] > 0){
                junglerCount++
            }
            else if(item['role_levels'][5] > 0){
                durableCount++
            }
            else if(item['role_levels'][6] > 0){
                escapeCount++
            }
            else if(item['role_levels'][7] > 0){
                pusherCount++
            }
            else if(item['role_levels'][8] > 0){
                initiatorCount++
            }
        }
        return {meleeCount, rangeCount,
            strengthCount, agilityCount, intelligenceCount,
            carryCount, supportCount, nukerCount, disablerCount, junglerCount, durableCount, escapeCount, pusherCount, initiatorCount
        }
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