import React, { useState } from 'react';
import userIcon from "../../assets/user.png"
import flagIcon from "../../assets/report.png"
import playerImg from "../../assets/R (1).png"
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';

const PlayerCard = ({player,toggle, availableBalance, setAvailableBalance, chosenPlayer, setChosenPlayer}) => {
   const [isSelected, setIsSelected]= useState(false);
//    const handelSelected = (selectedPlayerData)=>{
   
//     if (AvailablePlayers<player.price){
//         alert("Not enough Coins!!")
//         return
//     }

//     setIsSelected(true);setAvailableBalance(availableBalance - selectedPlayerData.price);
//      setChosenPlayer([...chosenPlayer,selectedPlayerData])
//    };
  
   return (
        <div  className="card p-4  bg-base-100 shadow-sm mt-4 max-w-330 ">
                    <figure>
                        <img
                            src={playerImg}
                            alt="Shoes" />
                    </figure>
                    <div className="mt-3.5">
                        <div className='flex items-center'>
                            <img className='w-5 h-5' src={userIcon} alt="" /> <h2 className="card-title ml-3">{player.name}</h2>

                        </div>
                        <div className='flex justify-between items-center my-3 border-b-2 pb-2 border-b-blue-300'>
                            <div className='flex items-center'>
                                <img className='w-5 h-5' src={flagIcon} alt="" />
                                <p>{player.country}</p>
                            </div>
                            <button className='btn font-semibold'>{player.playing_role
                            }</button>
                        </div>
                        <div className='flex justify-between font-bold'>
                            <span>Rating</span>
                            <span>{player.rating}</span>
                        </div>
                        <div className='flex justify-between items-center my-3'>
                            <span className='font-bold'>{player.batting_style}</span>
                            <span className=''>{player.bowling_style}</span>
                        </div>
                        <div className='flex justify-between items-center font-bold'>
                            <p>Price  <span>{player.price}</span></p>
                            <button className={`btn text-black ${toggle === true ? "bg-[#50e00d]" : ""}`} disabled={isSelected} onClick={()=>{setIsSelected(true);setAvailableBalance(availableBalance - player.price); setChosenPlayer([...chosenPlayer,player])}} >{isSelected===true?"Selected":"Choose Player"}</button>
                        </div>

                    </div>
                    
                </div>
                
    );
    
};

export default PlayerCard;