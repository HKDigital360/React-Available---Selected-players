import React from 'react';
import deleteImg from "../../assets/delete.png"
import playerImg from "../../assets/R (1).png"
const SelectedPlayers = ({chosenPlayer}) => {
    console.log(chosenPlayer)
    return (
        <div className='max-w-330 mx-auto font-bold mt-2.5'>
            
            {
                chosenPlayer.map(player=>

                    <div className='flex mt-2.5 justify-between items-center  rounded-3xl bg-blue-200 shadow-amber-200'>
                <div className='p-4'>
                    <img className='w-20 rounded-2xl' src={player.image} alt="" />
                    <h1 className='text-3xl '>{player.name}</h1>
                    <h4>{player.playing_role}</h4>

                </div>
                <div  className='p-4'>
                    <button onClick={()=>player.remove} className='btn'><img className='w-5' src={deleteImg} alt="" /></button>
                </div>

            </div>    

                )
            }
        </div>
    );
};

export default SelectedPlayers;