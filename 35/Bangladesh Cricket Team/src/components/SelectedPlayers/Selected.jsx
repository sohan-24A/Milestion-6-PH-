import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { toast } from 'react-toastify';

const Selected = ({selectedPlayers,setSelectedPlayers,coin,setCoin}) => {
    // console.log(selectedPlayers);
    const handleDeletedSelectedPlayer = (player) =>{
        const filter = selectedPlayers.filter(selected => selected.playerName !== player.playerName)
        toast.error('Delete successfully')
        setSelectedPlayers(filter)
        setCoin(coin+ player.playerPrice)
    }
    return (
        <div className='container mx-auto'>
            { selectedPlayers.length ===0 ? <div className='h-[300px] flex items-center justify-center flex-col gap-4'>
                <h2 className='text-2xl font-medium'>No players selectd yet </h2>
                <p className='text-3xl'>Go to Available tab to select players</p>
            </div>
             :
                selectedPlayers.map((player, idx) => {
                    return <div key={idx} className='flex justify-between items-center px-4 py-2 rounded-2xl shadow-2xl my-4'>
                        <div className='flex items-center gap-3'>
                            <img className='w-20' src={player.playerImg} alt="" />
                            <div>
                                <h2 className='font-bold flex items-center gap-2'> <FaUserAlt />{player.playerName}</h2>
                                <p className='text-xl'>{player.playerType}</p>
                            </div>
                        </div>
                        <button className='btn text-red-500' 
                        onClick={() =>handleDeletedSelectedPlayer(player)}><MdDelete /></button>
                    </div>
                })
            }
        </div>
    );
};

export default Selected;