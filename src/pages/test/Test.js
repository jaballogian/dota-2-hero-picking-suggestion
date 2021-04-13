import React, {useContext} from 'react'

// CUSTOM COMPONENTS AND DATA
import { HeroListContext } from '../../contexts/HeroListContext'
import SingleHeroImage from '../../components/singleHeroImage/SingleHeroImage'
import summarizeTeamInformation from '../../contexts/summarizeTeamInformation'

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
        />
    ))

    const myHeroListView = myHeroList.map((item, index) => (
        <SingleHeroImage 
            key={index} 
            fullname={item.name_loc.toUpperCase()} 
            image={item.image} 
            attribute={item.primary_attr}
            heroData={item}
        />
    ))

    const opponentsHeroListView = opponentsHeroList.map((item, index) => (
        <SingleHeroImage 
            key={index} 
            fullname={item.name_loc.toUpperCase()} 
            image={item.image} 
            attribute={item.primary_attr}
            heroData={item}
        />
    ))

    const bannedHeroListView = bannedHeroList.map((item, index) => (
        <SingleHeroImage 
            key={index} 
            fullname={item.name_loc.toUpperCase()} 
            image={item.image} 
            attribute={item.primary_attr}
            heroData={item}
        />
    ))

    const myTeamInformation = summarizeTeamInformation(myHeroList)
    const yourTeamInformation = summarizeTeamInformation(opponentsHeroList)

    console.log('my team information', myTeamInformation)
    console.log("opponent's team information", yourTeamInformation)

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
                        {myTeamInformation['attack_type']['meleeCount']}
                    </Typography>
                </div>

                {/* RANGED COUNT */}
                <div style={{display: 'flex'}}>
                    <img src={RangedIcon} alt='' style={{height: 20, width: 20, marginRight: 10}}/>
                    <Typography variant="h6" style={{color: 'black'}}>
                        {myTeamInformation['attack_type']['rangeCount']}
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
                        {myTeamInformation['attribute_type']['strengthCount']}
                    </Typography>
                </div>

                {/* AGILITY COUNT */}
                <div style={{display: 'flex'}}>
                    <img src={AgilityAttribute} alt='' style={{height: 30, width: 30, marginRight: 10}}/>
                    <Typography variant="h6" style={{color: 'black'}}>
                        {myTeamInformation['attribute_type']['agilityCount']}
                    </Typography>
                </div>

                {/* INTELLIGENCE COUNT */}
                <div style={{display: 'flex'}}>
                    <img src={IntelligenceAttribute} alt='' style={{height: 30, width: 30, marginRight: 10}}/>
                    <Typography variant="h6" style={{color: 'black'}}>
                        {myTeamInformation['attribute_type']['intelligenceCount']}
                    </Typography>
                </div>

                {/* ATTRIBUTE TYPES */}
                <Typography variant="h6" style={{color: 'black'}}>
                    Roles
                </Typography>

                {/* CARRY COUNT */}
                <div style={{display: 'flex'}}>
                    <Typography variant="h6" style={{color: 'black'}}>
                        {`Carry: ${myTeamInformation['role_levels']['carryCount']}`}
                    </Typography>
                </div>

                {/* SUPPORT COUNT */}
                <div style={{display: 'flex'}}>
                    <Typography variant="h6" style={{color: 'black'}}>
                        {`Support: ${myTeamInformation['role_levels']['supportCount']}`}
                    </Typography>
                </div>

                {/* NUKER COUNT */}
                <div style={{display: 'flex'}}>
                    <Typography variant="h6" style={{color: 'black'}}>
                        {`Nuker: ${myTeamInformation['role_levels']['nukerCount']}`}
                    </Typography>
                </div>

                {/* DISABLER COUNT */}
                <div style={{display: 'flex'}}>
                    <Typography variant="h6" style={{color: 'black'}}>
                        {`Disabler: ${myTeamInformation['role_levels']['disablerCount']}`}
                    </Typography>
                </div>

                {/* JUNGLER COUNT */}
                <div style={{display: 'flex'}}>
                    <Typography variant="h6" style={{color: 'black'}}>
                        {`Jungler: ${myTeamInformation['role_levels']['junglerCount']}`}
                    </Typography>
                </div>

                {/* DURABLE COUNT */}
                <div style={{display: 'flex'}}>
                    <Typography variant="h6" style={{color: 'black'}}>
                        {`Durable: ${myTeamInformation['role_levels']['durableCount']}`}
                    </Typography>
                </div>

                {/* ESCAPE COUNT */}
                <div style={{display: 'flex'}}>
                    <Typography variant="h6" style={{color: 'black'}}>
                        {`Escape: ${myTeamInformation['role_levels']['escapeCount']}`}
                    </Typography>
                </div>

                {/* PUSHER COUNT */}
                <div style={{display: 'flex'}}>
                    <Typography variant="h6" style={{color: 'black'}}>
                        {`Pusher: ${myTeamInformation['role_levels']['pusherCount']}`}
                    </Typography>
                </div>

                {/* INITIATOR COUNT */}
                <div style={{display: 'flex'}}>
                    <Typography variant="h6" style={{color: 'black'}}>
                        {`Initiator: ${myTeamInformation['role_levels']['initiatorCount']}`}
                    </Typography>
                </div>
            </div>
        </div>
    )
}

export default Test