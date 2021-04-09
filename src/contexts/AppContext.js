import React, {useState, useEffect} from 'react'

// DATA AND UTILS
import apiList from '../data/apiList'

const AppContext = React.createContext()

function AppContextProvider(props){
    // DEFINING CONSTANT VARIABLES
    const [heroList, setHeroList] = useState([])

    const HEROLISTAPIURL = apiList.getHeroListURL

    // DEFINING CONSTANT FUNCTIONS
    const fetchHeroListAPI = () => {
        fetch(HEROLISTAPIURL, {
            method: 'GET'
        })
        .then(response => {
            return response.json()
        })
        .then(responseJson => {
            setHeroList(responseJson.result.data.heroes) 
        })
    }

    // CALLING CONSTANT FUNCTIONS
    useEffect(() => {
        fetchHeroListAPI()
    }, [])

    // console.log('AppContext - hero list', heroList)

    // RETURNING VIEW
    return(
        <AppContext.Provider value={{heroList}}>
            {props.children}
        </AppContext.Provider>
    )
}

export {AppContextProvider, AppContext}