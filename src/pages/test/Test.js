import React, {useContext} from 'react'

// CUSTOM COMPONENTS AND DATA
import { HeroListContext } from '../../contexts/HeroListContext'
import SingleHeroImage from '../../components/singleHeroImage/SingleHeroImage'

function Test() {
    // DEFINING CONSTANT VARIABLES
    const {heroPoolList} = useContext(HeroListContext)

    console.log('heroPoolList', heroPoolList)
    // console.log('heroCoverImageList', heroCoverImageList)

    const heroListView = heroPoolList.map((item, index) => (
        <SingleHeroImage 
            key={index} 
            fullname={item.name_loc} 
            image={heroPoolList[index].image} 
            attribute={item.primary_attr}
            heroData={item}
        />
    ))

    // RETURNING VIEW
    return(
        <div>
            {heroListView}
        </div>
    )
}

export default Test