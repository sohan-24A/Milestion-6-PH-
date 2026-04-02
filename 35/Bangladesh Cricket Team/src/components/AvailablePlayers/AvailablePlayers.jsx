import React, { useState } from 'react';
import { FaUserAlt } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";
import { toast } from 'react-toastify';

const AvailablePlayers = ({ player,setCoin,coin,selectedPlayers,setSelectedPlayers }) => {
    // console.log(player);
    const { playerName, playerCountry, playerType, rating, battingStyle, bowlingStyle, playerPrice, playerImg } = player
    const [isSelected, setIsSelected] = useState(false)

    const handChoosePlayer = () =>{
        let newCoin = coin - playerPrice
        if(newCoin>= 0){
            toast.success(`${playerName} is selected`)
             setIsSelected(true) ;
        setCoin(coin-playerPrice) ;
        setSelectedPlayers([...selectedPlayers,player])   
        }
        else{
            toast.warning('Not enough coin to this player')
        }
        
       
    }
    return (
        <div className="card bg-gray-300 shadow-sm ">
            <figure className='flex pt-2'>
                <img className='w-52 md:w-60 h-48 object-cover rounded-xl'
                    src={playerImg}
                    alt="Shoes" />
            </figure>
            <div className="card-body space-y-2">
                <h2 className="card-title"> <FaUserAlt />{playerName}</h2>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-2'>
                        <FaFlag />
                        <p>{playerCountry}</p>
                    </div>
                    <h3 className='text-xl font-medium'>{playerType} </h3>
                </div>
                <div className="divider"></div>
                <div className='flex items-center justify-between'>
                    <h2 className='font-bold'>Rating</h2>
                    <div>
                        <p>{rating}</p>
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <p className='font-bold'>{battingStyle}</p>
                    <p className='text-right'>{bowlingStyle}</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className='font-semibold'>Price : {playerPrice}</p>
                    <button
                        onClick={() => handChoosePlayer()}
                        className="btn"
                        disabled={isSelected}>
                        {isSelected ? "Selected" : 'Chooose Player'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AvailablePlayers;