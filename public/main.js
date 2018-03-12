const UpdateName1 = () => {
  let team1name = document.querySelector("#team1name").value;
  document.querySelector("#Name1Team").textContent = team1name;
}

const Add1Team1 = () => {
  let scoreone = document.querySelector("#scoreone").textContent;
  scoreone++;
  document.querySelector("#scoreone").textContent = scoreone;
}

const Sub1Team1 = () => {
  let scoreone = document.querySelector("#scoreone").textContent;
  scoreone--;
  document.querySelector("#scoreone").textContent = scoreone;
}

const UpdateName2 = () => {
  let team2name = document.querySelector("#team2name").value;
  document.querySelector("#Name2Team").textContent = team2name;
}

const Add1Team2 = () => {
  let scoretwo = document.querySelector("#scoretwo").textContent;
  scoretwo++;
  document.querySelector("#scoretwo").textContent = scoretwo;
}

const Sub1Team2 = () => {
  let scoretwo = document.querySelector("#scoretwo").textContent;
  scoretwo--;
  document.querySelector("#scoretwo").textContent = scoretwo;
}