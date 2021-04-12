import React from 'react'

import { HeroListContextProvider } from '../../contexts/HeroListContext'

// CUSTOM COMPONENTS
import SingleHeroImage from '../../components/singleHeroImage/SingleHeroImage'

function Test() {
    return(
        <HeroListContextProvider>
            <SingleHeroImage/>
        </HeroListContextProvider>
    )
}

export default Test