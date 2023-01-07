import React from 'react';


function Coin(props){
return(
<div className='coin'>
    <h1>{props.name}</h1>
    <img src={props.icon} alt="Coin Icon"/>
    <h3>{props.price}</h3>
    <h4>{props.symbol}</h4>
</div>
)
}

export default Coin;