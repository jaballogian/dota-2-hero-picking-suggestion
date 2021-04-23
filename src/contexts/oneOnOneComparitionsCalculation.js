const oneOnOneComparitionsCalculation = (inputMyHeroList, inputOpponentsHeroList) => {
    let informationMatrix = []

    for(let i = 0; i < inputMyHeroList.length; i++){
        const myHeroItem = inputMyHeroList[i]
        let informationArray = []
        for(let j = 0; j < inputOpponentsHeroList.length; j++){
            const opponentsHeroItem = inputOpponentsHeroList[j]

            if(myHeroItem['bad_against'].includes(opponentsHeroItem['name_loc'])){
                informationArray.push(opponentsHeroItem)
            }
            else if(myHeroItem['good_against'].includes(opponentsHeroItem['name_loc'])){
                informationArray.push(myHeroItem)
            }
            else{
                informationArray.push('unpredicted')
            }
        }
        informationMatrix.push(informationArray)
    }
    
    // console.log('informationMatrix', informationMatrix)

    return informationMatrix
}

export default oneOnOneComparitionsCalculation