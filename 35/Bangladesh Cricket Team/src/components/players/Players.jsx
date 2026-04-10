import React, { use, useState } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';
import Selected from '../SelectedPlayers/Selected';

const Players = ({ playerPromise, setCoin, coin }) => {
    const allPlayer = use(playerPromise);

    const [selectedType, setSelectedType] = useState("available");
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [search, setSearch] = useState("");

    // 🔍 Filter players
   const filteredPlayers = search
  ? allPlayer.filter(player =>
      (player.playerName || "").toLowerCase().includes(search.toLowerCase())
    //   console.log(player.name);
    )
  : allPlayer;

    return (
        <div>

            {/* 🔹 Header */}
            <div className='flex justify-between items-center my-6 container mx-auto'>

                {selectedType === "available" ? (
                    <h2 className='font-bold text-2xl'>Available Player</h2>
                ) : (
                    <h2 className='font-bold text-2xl'>
                        Selected ({selectedPlayers.length}/{allPlayer.length})
                    </h2>
                )}

                {/* 🔹 Toggle Button */}
                <div>
                    <button
                        onClick={() => setSelectedType('available')}
                        className={`btn ${selectedType === 'available' ? "bg-[#E7FE29]" : 'bg-white'} rounded-r-none rounded-l-2xl`}
                    >
                        Available
                    </button>

                    <button
                        onClick={() => setSelectedType('selected')}
                        className={`btn ${selectedType === 'selected' ? "bg-[#E7FE29]" : 'bg-white'} rounded-l-none rounded-r-2xl`}
                    >
                        Selected ({selectedPlayers.length})
                    </button>
                </div>
            </div>

            {/* 🔍 Search Input (only available section) */}
            {selectedType === "available" && (
                <div className="container mx-auto mb-4">
                    <input
                        type="text"
                        placeholder="Search player..."
                        // value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        // onKeyDown={(e) => {
                        //     if (e.key === "Enter") {
                        //         console.log("Search:", search);
                        //     }
                        // }}
                        className="border p-2 rounded w-full"
                    />
                </div>
            )}

            {/* 🔹 Content */}
            {
                selectedType === "available" ? (
                    <div className='container mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
                        {
                            filteredPlayers.map((player, idx) => (
                                <AvailablePlayers
                                    key={idx}
                                    player={player}
                                    setCoin={setCoin}
                                    coin={coin}
                                    setSelectedPlayers={setSelectedPlayers}
                                    selectedPlayers={selectedPlayers}
                                />
                            ))
                        }
                    </div>
                ) : (
                    <Selected
                        selectedPlayers={selectedPlayers}
                        setSelectedPlayers={setSelectedPlayers}
                        setCoin={setCoin}
                        coin={coin}
                    />
                )
            }

        </div>
    );
};

export default Players;