import heroCounterListRaw from './heroCounterListRaw'

const heroCounterList = heroCounterListRaw.map((item) => {
    let newItem = {}
    newItem['bad_against'] = item['Bad against'].split(', ')
    newItem['good_against'] = item['Good against'].split(', ')
    newItem['works_well_with'] = item['Works well with'].split(', ')
    return newItem
})

console.log('heroCounterList', heroCounterList)

export default heroCounterList