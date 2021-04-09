import React, {useState, useEffect} from 'react'

// DATA AND UTILS
import apiList from '../data/apiList'

const AppContext = React.createContext()

function AppContextProvider(props){
    // DEFINING CONSTANT VARIABLES
    const [heroList, setHeroList] = useState([])
    const [heroDetailList, setHeroDetailList] = useState([])

    const HEROLISTAPIURL = apiList.getHeroListURL
    const HERODETAILAPIURL = apiList.getHeroDetailURL

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
        fetch(`${HERODETAILAPIURL}${inputId}`, {
            method: 'GET'
        })
        .then(response => {
            return response.json()
        })
        .then(responseJson => {
            const formattedResponseJson = responseJson.result.data.heroes.map((item) => {
                let newItem = {}
                newItem.id = item.id
                newItem.name = item.name
                newItem.order_id = item.order_id
                newItem.name_loc = item.name_loc
                newItem.primary_attr = item.primary_attr
                newItem.attack_capability = item.attack_capability
                newItem.role_levels = item.role_levels
                return newItem
            })
            setHeroDetailList(previousValue => [...previousValue, formattedResponseJson[0]])
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
    // console.log('AppContext - hero detail list', heroDetailList)

    // RETURNING VIEW
    return(
        <AppContext.Provider value={{heroList}}>
            {props.children}
        </AppContext.Provider>
    )
}

export {AppContextProvider, AppContext}