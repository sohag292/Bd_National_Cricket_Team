import React from 'react';
import './PlayerInfor.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button'
function PlayerInfo(props) {
    const {img, playername, team, age, born, Role, batting_style, bowling_style, income} =props.playerinfo;
    console.log(props.playerinfo);
    return (
        <div className="players-card">
        <div className="players-info">
        <img src={img} alt="" />
         <h2>{playername}</h2>
         <h5>Team: {team}</h5>
         <p>Age: {age}</p>
         <p>Born: {born}</p>
         <p>Role: {Role}</p>
         <p>Batting Style: {batting_style}</p>
         <p>Bowling Style: {bowling_style}</p>
         <p>Salary: {income}</p>
        </div>
        <div class="d-grid gap-2">
                <Button variant="dark" onClick={()=>props.handleAddPlayers(props.playerinfo)} type="button"><span class="fs-5 p-3">Add <FontAwesomeIcon icon={faPlusSquare} /></span></Button>
            </div>
     </div>
    );
}

export default PlayerInfo;