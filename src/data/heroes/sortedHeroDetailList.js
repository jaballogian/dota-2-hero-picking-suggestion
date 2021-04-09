import heroDetailList from './heroDetailList'

// A FUNCTION TO SORT 2 OBJECTS BY A PROPERTY
function sortByProperty(property){  
    return function(a,b){  
        if(a[property] > b[property])  
            return 1;  
        else if(a[property] < b[property])  
            return -1;  
   
        return 0;  
    }  
}

const sortedHeroDetailList = heroDetailList.sort(sortByProperty('id'))

// console.log('sortedHeroDetailList', sortedHeroDetailList)

export default sortedHeroDetailList