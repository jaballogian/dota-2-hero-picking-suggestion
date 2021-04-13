import React, {useContext} from 'react'

// CUSTOM COMPONENTS AND DATA
import { HeroListContext } from '../../contexts/HeroListContext'
import SingleHeroImage from '../../components/singleHeroImage/SingleHeroImage'
import summarizeTeamInformation from '../../contexts/summarizeTeamInformation'
import variables from '../../utils/variables'
import TeamInformation from '../../components/teamInformation/TeamInformation'

// MATERIAL UI LIBRARIRES
import Typography from '@material-ui/core/Typography';

function Test() {
    // DEFINING CONSTANT VARIABLES
    const {heroPoolList, myHeroList, opponentsHeroList, bannedHeroList} = useContext(HeroListContext)

    // console.log('heroPoolList', heroPoolList)

    const heroPoolListView = heroPoolList.map((item, index) => (
        <SingleHeroImage 
            key={index} 
            fullname={item.name_loc.toUpperCase()} 
            image={item.image} 
            attribute={item.primary_attr}
            heroData={item}
            actionType={variables.action}
            listType={variables.heroPoolList}
        />
    ))

    const myHeroListView = myHeroList.map((item, index) => (
        <SingleHeroImage 
            key={index} 
            fullname={item.name_loc.toUpperCase()} 
            image={item.image} 
            attribute={item.primary_attr}
            heroData={item}
            actionType={variables.delete}
            listType={variables.myHeroList}
        />
    ))

    const opponentsHeroListView = opponentsHeroList.map((item, index) => (
        <SingleHeroImage 
            key={index} 
            fullname={item.name_loc.toUpperCase()} 
            image={item.image} 
            attribute={item.primary_attr}
            heroData={item}
            actionType={variables.delete}
            listType={variables.opponentsHeroList}
        />
    ))

    const bannedHeroListView = bannedHeroList.map((item, index) => (
        <SingleHeroImage 
            key={index} 
            fullname={item.name_loc.toUpperCase()} 
            image={item.image} 
            attribute={item.primary_attr}
            heroData={item}
            actionType={variables.delete}
            listType={variables.bannedHeroList}
        />
    ))

    const myTeamInformation = summarizeTeamInformation(myHeroList)
    const opponentsTeamInformation = summarizeTeamInformation(opponentsHeroList)

    // console.log('my team information', myTeamInformation)
    // console.log("opponent's team information", opponentsTeamInformation)

    // RETURNING VIEW
    return(
        <div style={{display: 'flex'}}>
            {/* MY HERO LIST */}
            <div style={{margin: 20}}>
                <Typography 
                    variant="h6" 
                    style={{
                        color: 'black'
                    }}
                >
                    My hero list
                </Typography>
                {myHeroListView}
            </div>

            {/* OPPONENT'S HERO LIST */}
            <div style={{margin: 20}}>
                <Typography 
                    variant="h6" 
                    style={{
                        color: 'black'
                    }}
                >
                    Opponent's hero list
                </Typography>
                {opponentsHeroListView}
            </div>

            {/* BANNED HERO LIST */}
            <div style={{margin: 20}}>
                <Typography 
                    variant="h6" 
                    style={{
                        color: 'black'
                    }}
                >
                    Banned hero list
                </Typography>
                {bannedHeroListView}
            </div>

            {/* HERO POOL LIST */}
            <div style={{margin: 20}}>
                <Typography 
                    variant="h6" 
                    style={{
                        color: 'black'
                    }}
                >
                    Hero pool list
                </Typography>
                {heroPoolListView}
            </div>

            <TeamInformation data={myTeamInformation}/>
            <TeamInformation data={opponentsTeamInformation}/>
        </div>
    )
}

export default Test