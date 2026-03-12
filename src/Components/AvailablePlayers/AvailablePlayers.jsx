import React, { use } from 'react';

import PlayerCard from '../PlayerCard/PlayerCard';
const AvailablePlayers = ({ playersPromise,toggle, availableBalance, setAvailableBalance, chosenPlayer, setChosenPlayer }) => {
    const playersData = use(playersPromise)
    // console.log(playersData)
    return (
        <div className='max-w-330 mx-auto grid grid-cols-1 md:grid-cols-3 gap-3.5'>
            {
                playersData.map(player => <PlayerCard chosenPlayer={chosenPlayer} setChosenPlayer={setChosenPlayer} toggle={toggle} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} player={player} key={player.name}></PlayerCard>  )
            }

        </div>
    );
};

export default AvailablePlayers;