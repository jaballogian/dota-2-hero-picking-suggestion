// DATA
import sortedHeroDetailList from './sortedHeroDetailList'
import heroCoverImageList from './heroCoverImageList'

const sortedHeroDetailWithImageList = sortedHeroDetailList.map((item, index) => {
    item.image = heroCoverImageList[index].default
    return {...item}
})

console.log('sortedHeroDetailWithImageList', sortedHeroDetailWithImageList)

export default sortedHeroDetailWithImageList