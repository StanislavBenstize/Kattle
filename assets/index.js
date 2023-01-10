const kattle = new Kattle("white", 10);

const btnAddWater = document.querySelector(".add");
const btnSubWater = document.querySelector(".sub");
const btnStartGame = document.querySelector(".kattleBtn");
const kattleCont = document.querySelector(".kattleContent");
const showChancgeWater = document.querySelector(".kattleAnim");

function startGame() {
   btnStartGame.style.visibility = "hidden";
}

function addWater1() {
   kattleCont.textContent = kattle.addWater(1);
}
function subWater1() {
   kattleCont.textContent = kattle.subWater(1);
   kattle.subWater();
}

btnAddWater.addEventListener("click", addWater1);
btnSubWater.addEventListener("click", subWater1);
btnStartGame.addEventListener("click", startGame);
