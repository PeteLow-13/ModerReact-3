import React from 'react'

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
       return lat > 0 ? 'summer' : 'winter'
    } else {
        return lat > 0 ? 'winter' : 'summer'
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth())
    const text = season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach!'

    return <div>
        <h1>{text}</h1>
        </div>

    //below is the same but with more logic in the JSX
    // return (
    //     <div>{season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the Beach!'}</div>
    // )
}

export default SeasonDisplay
