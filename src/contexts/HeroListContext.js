import React from 'react'

const HeroListContext = React.createContext()

function HeroListContextProvider(props){
    return(
        <HeroListContext.Provider value={{}}>
            {props.children}
        </HeroListContext.Provider>
    )
}

export {HeroListContextProvider, HeroListContext}