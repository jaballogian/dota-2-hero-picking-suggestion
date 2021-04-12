import React, {useContext} from 'react'

// CUSTOM COMPONENTS AND DATA
import { HeroListContext } from '../../contexts/HeroListContext'
import SingleHeroImage from '../../components/singleHeroImage/SingleHeroImage'
import heroCoverImageList from '../../data/heroes/heroCoverImageList'

function Test() {
    // DEFINING CONSTANT VARIABLES
    const {heroPoolList} = useContext(HeroListContext)

    console.log('heroPoolList', heroPoolList)
    // console.log('heroCoverImageList', heroCoverImageList)

    const heroListView = heroPoolList.map((item, index) => (
        <SingleHeroImage key={index} fullname={item.name_loc} image={heroCoverImageList[index].default} attribute={item.primary_attr}/>
    ))

    // RETURNING VIEW
    return(
        <div>
            {heroListView}
        </div>
    )
}

export default Test