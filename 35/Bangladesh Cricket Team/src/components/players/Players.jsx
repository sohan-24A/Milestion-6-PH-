import React, { use, useState } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';
import Selected from '../SelectedPlayers/Selected';

const Players = ({ playerPromise,setCoin ,coin}) => {
    // console.log(playerPromise);
    const allPlayer = use(playerPromise)
    const [selectedType,setSelectedType] =useState("available")
    const [selectedPlayers,setSelectedPlayers] = useState([])
    // console.log(allPlayer);
    return (
        <div>
            <div className=' flex justify-between items-center my-6 container mx-auto '>
                {selectedType ==="available" ?  <h2 className='font-bold text-2xl'>
                    Available Player
                </h2>:  <h2 className='font-bold text-2xl'>
                    Selected({selectedPlayers.length}/{allPlayer.length})
                </h2> }
               
                <div>
                    <button
                    onClick={()=>setSelectedType('available')}
                     className={`btn ${selectedType ==='available' ?" bg-[#E7FE29]" : 'bg-white'} rounded-r-none rounded-l-2xl`}>Available</button>
                    <button
                     onClick={()=>setSelectedType('selected')}
                     className={`btn ${selectedType ==='selected' ?" bg-[#E7FE29]" : 'bg-white'} rounded-l-none rounded-r-2xl`}>Selected({selectedPlayers.length})</button>
                </div>

                
            </div>
              {selectedType ==="available"? <div className='container mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
                {
                    allPlayer.map((player,idx) => <AvailablePlayers
                    key={idx} player={player} setCoin={setCoin} coin={coin} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers}></AvailablePlayers>)
                }
            </div> : <Selected selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}  setCoin={setCoin} coin={coin}></Selected>}
            
        </div>
    );
};

export default Players;