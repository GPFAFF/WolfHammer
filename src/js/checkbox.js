const createTeam = document.querySelector('.create');
const editTeam = document.querySelector('.edit');
const setTeams = document.querySelector('.set_teams');
const checkboxes = Array.from(document.querySelectorAll('input'));
const teamz = setTeams.querySelectorAll('.teamz');
const scoreBoard = document.querySelector('.score');
const dots = Array.from(document.querySelectorAll('.dots'));
const teamSelect = document.querySelectorAll('.active_team');
const names = document.querySelectorAll('.name');

let teams = [];
let score = 0;


const checkboxDOMselect = (checkValue, parentElement) => {
  if (checkValue.checked) {
    const newElem = document.createElement('p');
    const name = document.createTextNode(checkValue.name);
    newElem.classList.add('teamz');
    newElem.appendChild(name);
    parentElement.appendChild(newElem);
  }
  // else if (!checkValue.checked) {
  //   setTeams.childNodes.forEach(team => {
  //     if (checkValue.name === team.textContent) {
  //     parentElement.removeChild(team);
  //   }});
  // }
}

const createTeams = (arr, target) => {
  if (!arr.checked) {
    const players = Array.from(document.querySelectorAll('input:checked')).filter((input => {
      return {
        id: input.id,
        name: input.name
      };
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
      parseTeams(teams);
      updateTeamSelect();
    }
    if (!players.length) {
      console.error('PICK A PLAYER');
    }
  }
  // const players = Array.from(document.querySelectorAll('input:checked')).map(input => { return { id: input.id, name: input.name }; });
}

const parseTeams = (teams) => {

  // get team array
  // map through array to split them up
  teams.map((team, index) => {
    // filter through the array
    console.log(teams[0], teams[1]);
    teams[teams.length - 1].players.filter(team => {
      // compare the players in each array remove the duplicates
      if (!team.name) {
        teams.pop();
      }
    })
  })
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
  } else {
      console.error('You must pick a player first.');
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
  activeTeam.players.forEach((player, index) => {
    document.querySelectorAll('.teamz')[player.value - 1].innerHTML = `${player.name} has ${activeTeam.score} dots.`
  })
};

// EL's
document.addEventListener("click", event => {
  if (!teams.includes(event.target) && event.target.matches("input")) {
    //event.target.parentNode.classList.add('hide');
    checkboxDOMselect(event.target, setTeams);
  }
  return teams;
});

// checkboxes.addEventListener('change', (event) =>{
//   createTeams(checkboxes, event.target.id)
// })
createTeam.addEventListener("click", (event) => {
  createTeams(checkboxes, event.target.id)
});

editTeam.addEventListener('click', (event) => {
  editTeams(checkboxes, event.target);
})

dots.forEach(dot => dot.addEventListener('click', calculateScore));