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

        if(item['role_levels'][0] > 0){
            carryCount++
        }
        if(item['role_levels'][1] > 0){
            supportCount++
        }
        if(item['role_levels'][2] > 0){
            nukerCount++
        }
        if(item['role_levels'][3] > 0){
            disablerCount++
        }
        if(item['role_levels'][4] > 0){
            junglerCount++
        }
        if(item['role_levels'][5] > 0){
            durableCount++
        }
        if(item['role_levels'][6] > 0){
            escapeCount++
        }
        if(item['role_levels'][7] > 0){
           pusherCount++
        }
        if(item['role_levels'][8] > 0){
            initiatorCount++
        }
    }
    return {
        attack_type: {
            meleeCount, 
            rangeCount
        },
        attribute_type: {
            strengthCount, 
            agilityCount, 
            intelligenceCount
        },
        role_levels: {
            carryCount, 
            supportCount, 
            nukerCount, 
            disablerCount, 
            junglerCount, 
            durableCount, 
            escapeCount, 
            pusherCount, 
            initiatorCount
        },
        roleCountArray,
        rolePowerArray
    }
}

export default summarizeTeamInformation