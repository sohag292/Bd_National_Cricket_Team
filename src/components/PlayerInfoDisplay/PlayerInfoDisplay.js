import React, { useEffect, useState } from 'react';
import './PlayerInfoDisplay.css'
import NavBar from '../NavBar/NavBar'
import playersData from '../../fakeData/PlayersData'
import PlayerInfo from '../PlayerInformation/PlayerInfo';


import PlayerCount from '../PlayerCount/PlayerCount';
import CreateTeam from '../CreateTeam/CreateTeam';
function PlayerInfoDisplay(props) {
    const [players, setPlayers] = useState([]);
    const [AddPlayer,setAddPlayer] = useState([]);

    useEffect(() => {
        setPlayers(playersData);
        // console.log(playersData);
    }, []);

    const handleAddPlayers=(playerinfo)=>{
        const newCard =[...AddPlayer,playerinfo];
        setAddPlayer(newCard);
    };
    return (
        <div>
            <NavBar></NavBar>
            <div className="players-container">
                <div className="players-info-container">
                    {
                        players.map(playerinfo=><PlayerInfo playerinfo={playerinfo} handleAddPlayers={handleAddPlayers}></PlayerInfo>) 
                    }
                </div>
                <div className="">
                    <PlayerCount PlayersCount={AddPlayer}></PlayerCount>
                    
                    {
                        AddPlayer.map(players=><CreateTeam players={players}></CreateTeam>)
                    }
                </div>
            </div>
            
        </div>
    );
}

export default PlayerInfoDisplay;