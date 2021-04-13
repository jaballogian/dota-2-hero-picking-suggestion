import React, {useState, useContext} from 'react'

// CUSTOM COMPONENTS AND DATA
import {HeroListContext} from '../../contexts/HeroListContext'

// IMAGES
import strengthAttribute from '../../images/attributes/hero_strength.png'
import agilityAttribute from '../../images/attributes/hero_agility.png'
import intelligenceAttribute from '../../images/attributes/hero_intelligence.png'

// ICONS
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded'
import BlockRoundedIcon from '@material-ui/icons/BlockRounded'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

// MATERIAL UI LIBRARIRES
import Typography from '@material-ui/core/Typography';

function SingleHeroImage(props){
    // DEFINING CONSTANT VARIABLES
    const [isHovered, setIsHovered] = useState(false)

    const {
        addToMyHeroList, 
        addToOpponentsHeroList, 
        addToBannedHeroList,
        removeHeroFromMyHeroList,
        removeHeroFromOpponentsHeroList,
        removeHeroFromBannedHeroList
    } = useContext(HeroListContext)

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
            {/* ADD HERO TO OPPONENT'S TEAM */}
            <AddCircleOutlineRoundedIcon 
                style={{
                    color: 'crimson', 
                    height: 30, 
                    width: 30, 
                    cursor: 'pointer'
                }}
                onClick={() => addToOpponentsHeroList(props.heroData)}
            />

            {/* BAN THIS HERO */}
            <BlockRoundedIcon 
                style={{
                    color: 'white', 
                    height: 30, 
                    width: 30, 
                    cursor: 'pointer'
                }}
                onClick={() => addToBannedHeroList(props.heroData)}
            />

            {/* ADD HERO TO MY TEAM */}
            <AddCircleOutlineRoundedIcon 
                style={{
                    color: 'forestgreen', 
                    height: 30, 
                    width: 30, 
                    cursor: 'pointer'
                }}
                onClick={() => addToMyHeroList(props.heroData)}
            />
        </div>

    const deleteHeroFromList = (inputHeroData, inputHeroListType) => {
        if(inputHeroListType === 'myHeroList'){
            removeHeroFromMyHeroList(inputHeroData)
        }
        else if(inputHeroListType === 'opponentsHeroList'){
            removeHeroFromOpponentsHeroList(inputHeroData)
        }
        else if(inputHeroListType === 'bannedHeroList'){
            removeHeroFromBannedHeroList(inputHeroData)
        }
    }

    // REMOVE HERO FROM LIST
    const deleteOption =
        isHovered &&
        <DeleteOutlinedIcon 
            style={{
                color: 'white', 
                height: 30, 
                width: 30, 
                cursor: 'pointer',
                position: 'absolute', 
                left: 0, 
                top:0,
                padding: '5px 5px 0px 5px'
            }}
            onClick={() => deleteHeroFromList(props.heroData, props.listType)}
        />

    const heroPrimaryAttribute = () => {
        if(props.attribute === 0){
            return strengthAttribute
        }
        else if(props.attribute === 1){
            return agilityAttribute
        } 
        else if(props.attribute === 2) {
            return intelligenceAttribute
        }
    }

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
            <img 
                src={heroPrimaryAttribute()} 
                alt='' 
                style={{
                    height: 30, 
                    width: 30, 
                    marginRight: 10
                }}
            />
            <Typography 
                variant="h6" 
                style={{
                    color: 'white'
                }}
            >
                {props.fullname}
            </Typography>
        </div>
    
    // RETURNING VIEW
    return(
        <div 
            style={{
                position: 'relative', 
                width: 256, 
                height: 144
            }} 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
            <img 
                src={props.image}
                alt='' 
                style={{
                    position: 'absolute', 
                    width: '100%', 
                    height: '100%'
                }}
            />
            {
                props.actionType === 'action' ? actionOptions : deleteOption
            }
            {heroFullname}
        </div>
    )
}

export default SingleHeroImage