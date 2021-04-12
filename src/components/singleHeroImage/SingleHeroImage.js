import React, {useState} from 'react'

// IMAGES
import heroCoverImageList from '../../data/heroes/heroCoverImageList'

// ICONS
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded'
import BlockRoundedIcon from '@material-ui/icons/BlockRounded'

function SingleHeroImage(){
    // DEFINING CONSTANT VARIABLES
    const [isHovered, setIsHovered] = useState(false)

    const addHeroToOpponentsTeam =
        isHovered &&
        <AddCircleOutlineRoundedIcon style={{color: 'crimson', height: 30, width: 30, position: 'absolute', top: 5, left: 5, cursor: 'pointer'}}/>

    const addHeroToYourTeam =
        isHovered &&
        <AddCircleOutlineRoundedIcon style={{color: 'forestgreen', height: 30, width: 30, position: 'absolute', top: 5, right: 5, cursor: 'pointer'}}/>
    
    const bansThisHero =
        isHovered &&
        <div style={{width: '100%', height: 30, position: 'absolute', left: 0, bottom:5, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <BlockRoundedIcon style={{color: 'grey', height: 30, width: 30, cursor: 'pointer'}}/>
        </div>
    
    // RETURNING VIEW
    return(
        <div 
            style={{position: 'absolute', width: 256, height: 144}} 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={heroCoverImageList[0].default} alt='' style={{position: 'absolute', width: '100%', height: '100%'}}/>
            
            {addHeroToOpponentsTeam}
            {addHeroToYourTeam}
            {bansThisHero}
        </div>
    )
}

export default SingleHeroImage