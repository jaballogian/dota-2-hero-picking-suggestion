// GET HERO LIST
// https://www.dota2.com/datafeed/herolist?language=english

// GET HERO DETAIL BY ID
// https://www.dota2.com/datafeed/herodata?language=english&hero_id=1

// GET HERO COVER IMAGE
// https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/abaddon_full.png

// GET HERO FULL BODY IMAGE
// https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/abaddon.png

// GET HERO FULL BODY VIDEO
// https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/abaddon.webm

const apiList = {
    // APIS
    getHeroListURL: 'https://www.dota2.com/datafeed/herolist?language=english',
    getHeroDetailURL: 'https://www.dota2.com/datafeed/herodata?language=english&hero_id=',
    getHeroCoverImageURL: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/',
    getHeroFullBodyImageURL: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/',
    getHeroFullBodyVideoURL: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/'
}

export default apiList