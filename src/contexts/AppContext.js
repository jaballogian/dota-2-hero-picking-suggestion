import React, {useState, useEffect} from 'react'

// DATA AND UTILS
import apiList from '../data/apiList'

const AppContext = React.createContext()

function AppContextProvider(props){
    // DEFINING CONSTANT VARIABLES
    const [heroList, setHeroList] = useState([])
    const [detailHeroList, setDetailHeroList] = useState([])

    const HEROLISTAPIURL = apiList.getHeroListURL
    const DETAILHEROAPIURL = apiList.getDetailHeroURL

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

    const fetchDetailHeroByIdAPIURL = (inputId) => {
        fetch(`${DETAILHEROAPIURL}${inputId}`, {
            method: 'GET'
        })
        .then(response => {
            return response.json()
        })
        .then(responseJson => {
            setDetailHeroList(previousValue => [...previousValue, responseJson.result.data.heroes[0]])
        })
    }

    // CALLING CONSTANT FUNCTIONS
    useEffect(() => {
        fetchHeroListAPI()
    }, [])

    useEffect(() => {
        if(heroList.length !== 0){
            for(let i = 0; i < heroList.length; i++){
                fetchDetailHeroByIdAPIURL(heroList[i].id)
            }
        }
    }, [heroList])

    // console.log('AppContext - hero list', heroList)
    // console.log('AppContext - detail hero list', detailHeroList)

    // RETURNING VIEW
    return(
        <AppContext.Provider value={{heroList}}>
            {props.children}
        </AppContext.Provider>
    )
}

export {AppContextProvider, AppContext}