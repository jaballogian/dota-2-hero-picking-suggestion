import sortedHeroDetailWithImageList from './3_heroDetailWithImageList/sortedHeroDetailWithImageList'
import heroCounterList from './4_heroCounterList/heroCounterList'

const completeHeroDataList = heroCounterList.map((item, index) => {
    // DELETE HERO PROPERTY FROM HERO COUNTER LIST ITEM
    const {hero, ...newItem}  = item
    // MERGE EVERY ITEM INSIDE HERO COUNTER LIST AND SORTED HERO DETAIL WITH IMAGE LIST
    return {...newItem, ...sortedHeroDetailWithImageList[index]}    
})

// console.log('completeHeroDataList', completeHeroDataList)

export default completeHeroDataList