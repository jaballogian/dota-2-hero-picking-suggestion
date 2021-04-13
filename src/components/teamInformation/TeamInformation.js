import React from 'react'

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
    const roleCountKeyList = [
        'Carry', 'Support', 'Nuker',
        'Disabler', 'Jungler', 'Durable',
        'Escape', 'Pusher', 'Initiator'
    ]

    const roleCountArray = props.data.roleCountArray.map((item, index) => (
        <Typography variant="h6" style={{color: 'black'}}>
            {`${roleCountKeyList[index]}: ${item}`}
        </Typography>
    ))
    
    return(
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
                    {props.data['attackType']['meleeCount']}
                </Typography>
            </div>

            {/* RANGED COUNT */}
            <div style={{display: 'flex'}}>
                <img src={RangedIcon} alt='' style={{height: 20, width: 20, marginRight: 10}}/>
                <Typography variant="h6" style={{color: 'black'}}>
                    {props.data['attackType']['rangeCount']}
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
                    {props.data['attributeType']['strengthCount']}
                </Typography>
            </div>

            {/* AGILITY COUNT */}
            <div style={{display: 'flex'}}>
                <img src={AgilityAttribute} alt='' style={{height: 30, width: 30, marginRight: 10}}/>
                <Typography variant="h6" style={{color: 'black'}}>
                    {props.data['attributeType']['agilityCount']}
                </Typography>
            </div>

            {/* INTELLIGENCE COUNT */}
            <div style={{display: 'flex'}}>
                <img src={IntelligenceAttribute} alt='' style={{height: 30, width: 30, marginRight: 10}}/>
                <Typography variant="h6" style={{color: 'black'}}>
                    {props.data['attributeType']['intelligenceCount']}
                </Typography>
            </div>

            {/* ATTRIBUTE TYPES */}
            <Typography variant="h6" style={{color: 'black'}}>
                Roles
            </Typography>

            {roleCountArray}
        </div>
    )
}

export default TeamInformation