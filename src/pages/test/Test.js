import React, {useContext} from 'react'

// CUSTOM COMPONENTS AND DATA
import { HeroListContext } from '../../contexts/HeroListContext'
import SingleHeroImage from '../../components/singleHeroImage/SingleHeroImage'
import summarizeTeamInformation from '../../contexts/summarizeTeamInformation'
import variables from '../../utils/variables'

// MATERIAL UI LIBRARIRES
import Typography from '@material-ui/core/Typography';

// ICONS
import MeleeIcon from '../../images/attack_type/melee.svg'
import RangedIcon from '../../images/attack_type/ranged.svg'

// IMAGES
import StrengthAttribute from '../../images/attributes/hero_strength.png'
import AgilityAttribute from '../../images/attributes/hero_agility.png'
import IntelligenceAttribute from '../../images/attributes/hero_intelligence.png'

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

    console.log('my team information', myTeamInformation)
    console.log("opponent's team information", opponentsTeamInformation)

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

            {/* MY TEAM INFORMATION */}
            <div style={{margin: 20}}>
                <Typography variant="h6" style={{color: 'black'}}>
                    My Team Information
                </Typography>
                
                {/* ATTACK TYPES */}
                <Typography variant="h6" style={{color: 'black'}}>
                    Attack Types
                </Typography>
                
                {/* MELEE COUNT */}
                <div style={{display: 'flex'}}>
                    <img src={MeleeIcon} alt='' style={{height: 20, width: 20, marginRight: 10}}/>
                    <Typography variant="h6" style={{color: 'black'}}>
                        {myTeamInformation['attackType']['meleeCount']}
                    </Typography>
                </div>

                {/* RANGED COUNT */}
                <div style={{display: 'flex'}}>
                    <img src={RangedIcon} alt='' style={{height: 20, width: 20, marginRight: 10}}/>
                    <Typography variant="h6" style={{color: 'black'}}>
                        {myTeamInformation['attackType']['rangeCount']}
                    </Typography>
                </div>
                
                {/* ATTRIBUTE TYPES */}
                <Typography variant="h6" style={{color: 'black'}}>
                    Attribute Types
                </Typography>

                {/* STRENGTH COUNT */}
                <div style={{display: 'flex'}}>
                    <img src={StrengthAttribute} alt='' style={{height: 30, width: 30, marginRight: 10}}/>
                    <Typography variant="h6" style={{color: 'black'}}>
                        {myTeamInformation['attributeType']['strengthCount']}
                    </Typography>
                </div>

                {/* AGILITY COUNT */}
                <div style={{display: 'flex'}}>
                    <img src={AgilityAttribute} alt='' style={{height: 30, width: 30, marginRight: 10}}/>
                    <Typography variant="h6" style={{color: 'black'}}>
                        {myTeamInformation['attributeType']['agilityCount']}
                    </Typography>
                </div>

                {/* INTELLIGENCE COUNT */}
                <div style={{display: 'flex'}}>
                    <img src={IntelligenceAttribute} alt='' style={{height: 30, width: 30, marginRight: 10}}/>
                    <Typography variant="h6" style={{color: 'black'}}>
                        {myTeamInformation['attributeType']['intelligenceCount']}
                    </Typography>
                </div>

                {/* ATTRIBUTE TYPES */}
                <Typography variant="h6" style={{color: 'black'}}>
                    Roles
                </Typography>

                {/* CARRY COUNT */}
                <div style={{display: 'flex'}}>
                    <Typography variant="h6" style={{color: 'black'}}>
                        {`Carry: ${myTeamInformation['roleCountArray'][0]}`}
                    </Typography>
                </div>

                {/* SUPPORT COUNT */}
                <div style={{display: 'flex'}}>
                    <Typography variant="h6" style={{color: 'black'}}>
                        {`Support: ${myTeamInformation['roleCountArray'][1]}`}
                    </Typography>
                </div>

                {/* NUKER COUNT */}
                <div style={{display: 'flex'}}>
                    <Typography variant="h6" style={{color: 'black'}}>
                        {`Nuker: ${myTeamInformation['roleCountArray'][2]}`}
                    </Typography>
                </div>

                {/* DISABLER COUNT */}
                <div style={{display: 'flex'}}>
                    <Typography variant="h6" style={{color: 'black'}}>
                        {`Disabler: ${myTeamInformation['roleCountArray'][3]}`}
                    </Typography>
                </div>

                {/* JUNGLER COUNT */}
                <div style={{display: 'flex'}}>
                    <Typography variant="h6" style={{color: 'black'}}>
                        {`Jungler: ${myTeamInformation['roleCountArray'][4]}`}
                    </Typography>
                </div>

                {/* DURABLE COUNT */}
                <div style={{display: 'flex'}}>
                    <Typography variant="h6" style={{color: 'black'}}>
                        {`Durable: ${myTeamInformation['roleCountArray'][5]}`}
                    </Typography>
                </div>

                {/* ESCAPE COUNT */}
                <div style={{display: 'flex'}}>
                    <Typography variant="h6" style={{color: 'black'}}>
                        {`Escape: ${myTeamInformation['roleCountArray'][6]}`}
                    </Typography>
                </div>

                {/* PUSHER COUNT */}
                <div style={{display: 'flex'}}>
                    <Typography variant="h6" style={{color: 'black'}}>
                        {`Pusher: ${myTeamInformation['roleCountArray'][7]}`}
                    </Typography>
                </div>

                {/* INITIATOR COUNT */}
                <div style={{display: 'flex'}}>
                    <Typography variant="h6" style={{color: 'black'}}>
                        {`Initiator: ${myTeamInformation['roleCountArray'][8]}`}
                    </Typography>
                </div>
            </div>

            {/* OPPONENT'S TEAM INFORMATION */}
            <div style={{margin: 20}}>
                <Typography variant="h6" style={{color: 'black'}}>
                    Opponent's Team Information
                </Typography>
                
                {/* ATTACK TYPES */}
                <Typography variant="h6" style={{color: 'black'}}>
                    Attack Types
                </Typography>
                
                {/* MELEE COUNT */}
                <div style={{display: 'flex'}}>
                    <img src={MeleeIcon} alt='' style={{height: 20, width: 20, marginRight: 10}}/>
                    <Typography variant="h6" style={{color: 'black'}}>
                        {opponentsTeamInformation['attackType']['meleeCount']}
                    </Typography>
                </div>

                {/* RANGED COUNT */}
                <div style={{display: 'flex'}}>
                    <img src={RangedIcon} alt='' style={{height: 20, width: 20, marginRight: 10}}/>
                    <Typography variant="h6" style={{color: 'black'}}>
                        {opponentsTeamInformation['attackType']['rangeCount']}
                    </Typography>
                </div>
                
                {/* ATTRIBUTE TYPES */}
                <Typography variant="h6" style={{color: 'black'}}>
                    Attribute Types
                </Typography>

                {/* STRENGTH COUNT */}
                <div style={{display: 'flex'}}>
                    <img src={StrengthAttribute} alt='' style={{height: 30, width: 30, marginRight: 10}}/>
                    <Typography variant="h6" style={{color: 'black'}}>
                        {opponentsTeamInformation['attributeType']['strengthCount']}
                    </Typography>
                </div>

                {/* AGILITY COUNT */}
                <div style={{display: 'flex'}}>
                    <img src={AgilityAttribute} alt='' style={{height: 30, width: 30, marginRight: 10}}/>
                    <Typography variant="h6" style={{color: 'black'}}>
                        {opponentsTeamInformation['attributeType']['agilityCount']}
                    </Typography>
                </div>

                {/* INTELLIGENCE COUNT */}
                <div style={{display: 'flex'}}>
                    <img src={IntelligenceAttribute} alt='' style={{height: 30, width: 30, marginRight: 10}}/>
                    <Typography variant="h6" style={{color: 'black'}}>
                        {opponentsTeamInformation['attributeType']['intelligenceCount']}
                    </Typography>
                </div>

                {/* ATTRIBUTE TYPES */}
                <Typography variant="h6" style={{color: 'black'}}>
                    Roles
                </Typography>

                {/* CARRY COUNT */}
                <div style={{display: 'flex'}}>
                    <Typography variant="h6" style={{color: 'black'}}>
                        {`Carry: ${opponentsTeamInformation['roleCountArray'][0]}`}
                    </Typography>
                </div>

                {/* SUPPORT COUNT */}
                <div style={{display: 'flex'}}>
                    <Typography variant="h6" style={{color: 'black'}}>
                        {`Support: ${opponentsTeamInformation['roleCountArray'][1]}`}
                    </Typography>
                </div>

                {/* NUKER COUNT */}
                <div style={{display: 'flex'}}>
                    <Typography variant="h6" style={{color: 'black'}}>
                        {`Nuker: ${opponentsTeamInformation['roleCountArray'][2]}`}
                    </Typography>
                </div>

                {/* DISABLER COUNT */}
                <div style={{display: 'flex'}}>
                    <Typography variant="h6" style={{color: 'black'}}>
                        {`Disabler: ${opponentsTeamInformation['roleCountArray'][3]}`}
                    </Typography>
                </div>

                {/* JUNGLER COUNT */}
                <div style={{display: 'flex'}}>
                    <Typography variant="h6" style={{color: 'black'}}>
                        {`Jungler: ${opponentsTeamInformation['roleCountArray'][4]}`}
                    </Typography>
                </div>

                {/* DURABLE COUNT */}
                <div style={{display: 'flex'}}>
                    <Typography variant="h6" style={{color: 'black'}}>
                        {`Durable: ${opponentsTeamInformation['roleCountArray'][5]}`}
                    </Typography>
                </div>

                {/* ESCAPE COUNT */}
                <div style={{display: 'flex'}}>
                    <Typography variant="h6" style={{color: 'black'}}>
                        {`Escape: ${opponentsTeamInformation['roleCountArray'][6]}`}
                    </Typography>
                </div>

                {/* PUSHER COUNT */}
                <div style={{display: 'flex'}}>
                    <Typography variant="h6" style={{color: 'black'}}>
                        {`Pusher: ${opponentsTeamInformation['roleCountArray'][7]}`}
                    </Typography>
                </div>

                {/* INITIATOR COUNT */}
                <div style={{display: 'flex'}}>
                    <Typography variant="h6" style={{color: 'black'}}>
                        {`Initiator: ${opponentsTeamInformation['roleCountArray'][8]}`}
                    </Typography>
                </div>
            </div>
        </div>
    )
}

export default Test