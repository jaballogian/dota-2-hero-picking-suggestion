import React, {useContext} from 'react'

import { HeroListContext } from '../../contexts/HeroListContext'

// CUSTOM COMPONENTS
import SingleHeroImage from '../../components/singleHeroImage/SingleHeroImage'

function Test() {
    // DEFINING CONSTANT VARIABLES
    const {heroPoolList} = useContext(HeroListContext)

    console.log('heroPoolList', heroPoolList)

    const heroListView = heroPoolList.map((item, index) => (
        <SingleHeroImage key={index}/>
    ))

    // RETURNING VIEW
    return(
        <div>
            {heroListView}
        </div>
    )
}

export default Test