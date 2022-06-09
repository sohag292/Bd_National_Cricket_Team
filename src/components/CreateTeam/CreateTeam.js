import React from 'react';
import './CreateTeam.css'
function CreateTeam(props) {
    const{ playername,  Role, img, income, team }=props.players;

    return (
        <div className="team-details1">
        <div>
            <img  src={img} alt=""/>
            <h2>{playername}</h2>
            <p>Team: {team}</p>
            <p>Role: {Role}</p>
            <p>Income: {income}</p>
        </div>
    </div>
    );
}

export default CreateTeam;