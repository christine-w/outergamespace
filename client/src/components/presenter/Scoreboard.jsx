import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import _ from 'underscore';

const propTypes = {
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
  final: PropTypes.bool,
  restartGame: PropTypes.func,
};

const defaultProps = {
  final: false,
  restartGame: () => {},
};

const updateUserScore = (username, gameScore) => (
  axios.post('/user', { username, gameScore })
);

const Scoreboard = ({ players, final, restartGame }) => {
  const sortedPlayers = _.sortBy(players, 'score').reverse();
  return (
    <div className="container-fluid gameBackground">
      <div className="row align-items-center justify-content-md-center">
        <div className="card col-sm-9 animated-slideInLeft">
          <div className="card-block">
            <div className="list-group list-group-flush">
              {sortedPlayers.map(player =>
                <ScoreboardEntry player={player}/>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

Scoreboard.propTypes = propTypes;
Scoreboard.defaultProps = defaultProps;

export default Scoreboard;

// return (
//   <div className="screen">
//     <div className="screen-top" >{final && 'Final'} Scoreboard</div>

//     <div className="screen-middle screen-bordered" >
//       <div className="table-body">
//         <div className="table-col">
//           {sortedPlayers.map(player => (
//             <div key={player.username} className="table-row" >{player.username}</div>
//           ))}
//         </div>

//         <div className="table-col">
//           {sortedPlayers.map((player) => {
//             if (final) {
//               updateUserScore(player.username, player.score)
//                 .then(() => 'done');
//             }
//             return (<div key={player.username} className="table-row" >{player.score}</div>);
//           })}
//         </div>
//       </div>
//     </div>

//     <div className="screen-bottom">
//       {final && <button onClick={restartGame} >New Game</button>}
//     </div>
//   </div>
// );