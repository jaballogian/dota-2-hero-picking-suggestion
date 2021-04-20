import React from 'react'

import variables from '../../utils/variables'

// ICONS
import MeleeIcon from '../../images/attack_type/melee.svg'
import RangedIcon from '../../images/attack_type/ranged.svg'

// IMAGES
import StrengthAttribute from '../../images/attributes/hero_strength.png'
import AgilityAttribute from '../../images/attributes/hero_agility.png'
import IntelligenceAttribute from '../../images/attributes/hero_intelligence.png'

// MATERIAL UI LIBRARIRES
import Typography from '@material-ui/core/Typography';

function TeamInformation(props){
    // DEFINING CONSTANT VARIABLES
    const attackTypeIconList = [MeleeIcon, RangedIcon]
    const attributeTypeIconList = [StrengthAttribute, AgilityAttribute, IntelligenceAttribute]
    const roleKeyList = [
        'Carry', 'Support', 'Nuker',
        'Disabler', 'Jungler', 'Durable',
        'Escape', 'Pusher', 'Initiator'
    ]

    const attackTypeListView = props.data.attackType.map((item, index) => (
        <div key={index} style={{display: 'flex'}}>
            <img src={attackTypeIconList[index]} alt='' style={{height: 20, width: 20, marginRight: 10}}/>
            <Typography variant="h6" style={{color: 'black'}}>
                {item}
            </Typography>
        </div>
    ))

    const attributeTypeListView = props.data.attributeType.map((item, index) => (
        <div key={index} style={{display: 'flex'}}>
            <img src={attributeTypeIconList[index]} alt='' style={{height: 30, width: 30, marginRight: 10}}/>
            <Typography variant="h6" style={{color: 'black'}}>
                {item}
            </Typography>
        </div>
    ))

    const roleCountListView = props.data.roleCountArray.map((item, index) => (
        <Typography key={index} variant="h6" style={{color: 'black'}}>
            {`${roleKeyList[index]}: ${item}`}
        </Typography>
    ))

    const rolePowerListView = props.data.rolePowerArray.map((item, index) => (
        <Typography key={index} variant="h6" style={{color: 'black'}}>
            {`${roleKeyList[index]}: ${item}`}
        </Typography>
    ))
    
    return(
        <div style={{margin: 20}}>
            <Typography variant="h6" style={{color: 'black'}}>
                {props.listType === variables.myHeroList ? 'My Team Information' : "Opponent's Team Information"}
            </Typography>
            
            {/* ATTACK TYPES */}
            <Typography variant="h6" style={{color: 'orange'}}>
                Attack Types
            </Typography>
            
            {attackTypeListView}
            
            {/* ATTRIBUTE TYPES */}
            <Typography variant="h6" style={{color: 'orange'}}>
                Attribute Types
            </Typography>

            {attributeTypeListView}

            {/* ATTRIBUTE TYPES */}
            <Typography variant="h6" style={{color: 'orange'}}>
                Role Counts
            </Typography>

            {roleCountListView}

            {/* ATTRIBUTE TYPES */}
            <Typography variant="h6" style={{color: 'orange'}}>
                Role Powers
            </Typography>

            {rolePowerListView}
        </div>
    )
}

export default TeamInformation