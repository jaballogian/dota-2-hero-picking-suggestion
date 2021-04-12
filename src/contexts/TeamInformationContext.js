import React from 'react'

const TeamInformationContext = React.createContext()

function TeamInformationContextProdiver(props){
    return(
        <TeamInformationContext.Provider value={{}}>
            {props.children}
        </TeamInformationContext.Provider>
    )
}

export {TeamInformationContextProdiver, TeamInformationContext}