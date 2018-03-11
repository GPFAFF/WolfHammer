import { noPlayersError, clearErrors } from './errors';

const createTeam = document.querySelector('.create');
const editTeam = document.querySelector('.edit');
const clearTeam = document.querySelector('.clear');
const setTeams = document.querySelector('.set_teams');
const checkboxes = Array.from(document.querySelectorAll('input'));
const teamSelectBox = document.querySelectorAll('.active_team__select');
const teamOne = setTeams.querySelector('.team_1');
const teamTwo = setTeams.querySelector('.team_2');
const scoreBoard = document.querySelector('.score');
const dots = Array.from(document.querySelectorAll('.dots'));
const teamSelect = document.querySelectorAll('.active_team');
const names = document.querySelectorAll('.name');

let teams = [];
let score = 0;


// const checkboxDOMselect = (checkValue) => {
//   // console.log(checkValue);
//   // console.log(setTeams);
//   // if (checkValue.checked) {
//   //   setTeams.childNodes.forEach((team, index) => setTeams[index].innerHTML = event.target.name);

//   // }
//   // setTeams.childNodes.forEach(team => team.innerHTML = event.target.name);

//   //setTeams.appendChild(checkValue.name);
//   if (checkValue.checked) {

//     const newElem = document.createElement('p');
//     const name = document.createTextNode(checkValue.name);
//     newElem.classList.add('teamz');
//     newElem.appendChild(name);
//     parentElement.appendChild(newElem);
//   } else if (!checkValue.checked) {
//     teams.pop();
//     setTeams.childNodes.forEach(team => {
//       if (checkValue.name === team.textContent) {
//       parentElement.removeChild(team);
//     }});
//   }
// }

const createTeams = (arr, target) => {
  if (!arr.checked) {
    const players = Array.from(document.querySelectorAll('input:checked')).filter((input => {
      if (!input.getAttribute('disabled')) {
        return {
          id: input.id,
          name: input.name
        };
      }
    }))

    if (players.length) {
      teams.push({
        players,
        score: 0,
        id: teams.length
      })
      if (teams.length >= 2) {
        createTeam.setAttribute("disabled", "disabled");
      }
      updateTeamSelect();
      clearErrors();

    }
    if (!players.length) {
      noPlayersError();
    }
  }
  // const players = Array.from(document.querySelectorAll('input:checked')).map(input => { return { id: input.id, name: input.name }; });
}

const clearTeams = (teams, checkboxes) => {
  checkboxes.forEach(checkbox => {
    checkbox.checked = false
    checkbox.removeAttribute('disabled');
  });
  createTeam.removeAttribute('disabled');

  teamSelectBox.forEach((select) => {
    while (select.firstChild) {
      select.removeChild(select.firstChild);
    }
  });

  setTeams.childNodes.forEach((team, index) => {
    team.childNodes.forEach(target => target.remove());
  })
  clearErrors();

  teams.length = 0;
}

const calculateScore = (event, target) => {
  event.preventDefault();
  const current = event.target;
  if (teams.length) {

    var teamSelect = parseInt(document.querySelectorAll('.active_team__select')[0].value);

    const activeTeam = teams[teamSelect];

    const activeTeamSelected = teams.filter(team => team.id === activeTeam)[0];

    activeTeam.score += parseInt(current.dataset.dot);
    updateTeamData(activeTeam);
    scoreBoardTally();
    clearErrors();

  } else {
     noPlayersError();
  }
}

const updateTeamSelect = () => {
  const teamSelect = document.querySelectorAll('.active_team__select')[0];

  teamSelect.innerHTML = '';

  teams.forEach(item => {
    const teamOption = document.createElement('option');
    teamOption.value = item.id;
    teamOption.innerText = `Team ${item.id + 1}`;
    teamSelect.appendChild(teamOption);
  });
  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      checkbox.setAttribute('disabled', true);
    }
  })
}

const editTeams = (checkbox) => {
  checkboxes.forEach(checkbox => checkbox.removeAttribute('disabled'));
}

const updateTeamData = (activeTeam) => {
  const team = document.querySelector('.set_teams');
  let players = [];
  activeTeam.players.forEach((player, index) => {
    players.push(player.name);
  })
  const appendTeam = `.team_${activeTeam.id + 1 }`;
  const target = team.querySelector(appendTeam);
  target.innerHTML = `${players.join(', ')} has ${activeTeam.score} dots`
};

const scoreBoardTally = () => {
  const teamOne = teams[0];
  const teamTwo = teams[1];

  scoreBoard.innerHTML = `Scorecard: ${Number(teamOne.score - teamTwo.score)}`

}

// EL's
// document.addEventListener("click", event => {
//   if (!teams.includes(event.target) && event.target.matches("input")) {
//     //event.target.parentNode.classList.add('hide');
//     checkboxDOMselect(event.target);
//   }
//   return teams;
// });

checkboxes.forEach(checkbox => checkbox.addEventListener('change', (event) =>{
  clearErrors();
}))

clearTeam.addEventListener("click", (event) => {
  clearTeams(teams, checkboxes);
})

createTeam.addEventListener("click", (event) => {
  createTeams(checkboxes, event.target.id)
});

editTeam.addEventListener('click', (event) => {
  editTeams(checkboxes, event.target);
})

dots.forEach(dot => dot.addEventListener('click', calculateScore));