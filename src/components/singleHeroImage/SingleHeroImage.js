import React, {useState} from 'react'

// IMAGES
import heroCoverImageList from '../../data/heroes/heroCoverImageList'
import heroAttribute from '../../images/attributes/hero_agility.png'

// ICONS
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded'
import BlockRoundedIcon from '@material-ui/icons/BlockRounded'

// MATERIAL UI LIBRARIRES
import Typography from '@material-ui/core/Typography';

function SingleHeroImage(){
    // DEFINING CONSTANT VARIABLES
    const [isHovered, setIsHovered] = useState(false)

    const actionOptions =
        isHovered &&
        <div 
            style={{
                width: '100%', 
                height: 30, 
                position: 'absolute', 
                left: 0, 
                top:0, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                padding: '5px 5px 0px 5px', 
                boxSizing: 'border-box'
                }}
            >
            <AddCircleOutlineRoundedIcon style={{color: 'crimson', height: 30, width: 30, cursor: 'pointer'}}/>
            <BlockRoundedIcon style={{color: 'grey', height: 30, width: 30, cursor: 'pointer'}}/>
            <AddCircleOutlineRoundedIcon style={{color: 'forestgreen', height: 30, width: 30, cursor: 'pointer'}}/>
        </div>

    const heroFullname = 
        isHovered &&
        <div 
            style={{
                width: '100%', 
                height: 50,
                position: 'absolute', 
                left: 0, 
                bottom: 0, 
                display: 'flex', 
                alignItems: 'center',
                padding: '0px 5px 5px 5px', 
                boxSizing: 'border-box'
            }}
            >
            <img src={heroAttribute} alt='' style={{height: 30, width: 30, marginRight: 10}}/>
            <Typography 
                variant="h6" 
                style={{
                    color: 'white'
                }}
            >
                HERO FULLNAME
            </Typography>
        </div>
    
    // RETURNING VIEW
    return(
        <div 
            style={{position: 'absolute', width: 256, height: 144}} 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={heroCoverImageList[0].default} alt='' style={{position: 'absolute', width: '100%', height: '100%'}}/>
            
            {actionOptions}
            {heroFullname}
        </div>
    )
}

export default SingleHeroImage