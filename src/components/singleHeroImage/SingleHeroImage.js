import React from 'react'

// IMAGES
import heroCoverImageList from '../../data/heroes/heroCoverImageList'

// ICONS
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded'
import BlockRoundedIcon from '@material-ui/icons/BlockRounded'

function SingleHeroImage(){  
    return(
        <div style={{position: 'absolute', width: 256, height: 144}}>
            <img src={heroCoverImageList[0].default} alt='' style={{position: 'absolute', width: '100%', height: '100%'}}/>
            {/* ADD HERO TO OPPONENT'S TEAM */}
            <AddCircleOutlineRoundedIcon style={{color: 'crimson', height: 40, width: 40, position: 'absolute', top: 5, left: 5, cursor: 'pointer'}}/>

            {/* ADD HERO TO YOUR TEAM */}
            <AddCircleOutlineRoundedIcon style={{color: 'forestgreen', height: 40, width: 40, position: 'absolute', top: 5, right: 5, cursor: 'pointer'}}/>

            {/* YOUR TEAM BAN THIS HERO */}
            <BlockRoundedIcon style={{color: 'forestgreen', height: 40, width: 40, position: 'absolute', bottom: 5, right: 5, cursor: 'pointer'}}/>

            {/* YOUR OPPONENT'S TEAM BANS THIS HERO */}
            <BlockRoundedIcon style={{color: 'crimson', height: 40, width: 40, position: 'absolute', bottom: 5, left: 5, cursor: 'pointer'}}/>
        </div>
    )
}

export default SingleHeroImage