import React from 'react'

export default function CatFacts(props) {
    const { catFacts, onClick } = props
    return(
        <div id="catFacts">
            <h2>Today's Cat Facts</h2>
            {catFacts.map(fact => {
                return <p>{fact}</p>
            })}
            <button onClick={onClick}>Get another Cat Fact</button>
        </div>
    )
}