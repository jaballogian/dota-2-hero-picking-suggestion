const summarizeTeamInformation = (inputHeroListTeam) => {
    let meleeCount = 0
    let rangeCount = 0

    let strengthCount = 0
    let agilityCount = 0
    let intelligenceCount = 0

    // [CARRY, SUPPORT, NUKER, DISABLER, JUNGLER, DURABLE, ESCAPE, PUSHER, INITIATOR]
    let roleCountArray = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    let rolePowerArray = [0, 0, 0, 0, 0, 0, 0, 0, 0]

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
        for(let j = 0; j < roleCountArray.length; j++){
            if(item['role_levels'][j] > 0){
                roleCountArray[j]++
                rolePowerArray[j] = rolePowerArray[j] + item['role_levels'][j]
            }
        }
    }
    return {
        attackType: {
            meleeCount, 
            rangeCount
        },
        attributeType: {
            strengthCount, 
            agilityCount, 
            intelligenceCount
        },
        roleCountArray,
        rolePowerArray
    }
}

export default summarizeTeamInformation