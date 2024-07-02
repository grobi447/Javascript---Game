//SELECTORS
const board = document.querySelector("#board");
const start = document.querySelector("button");
const game = document.querySelector("#game")
const menu = document.querySelector("#menu")
const end = document.querySelector("#end")
const mission = document.querySelector("#missions")
const piece = document.querySelector("#piece")
const rotate = document.querySelector("#rotate")
const mirror = document.querySelector("#mirror")
const pieceTime = document.querySelector("#time")
const result = document.querySelector("#result")
const spring = document.querySelector("#spring")
const summer = document.querySelector("#summer")
const winter = document.querySelector("#winter")
const autumn = document.querySelector("#autumn")
const current_stat = document.querySelector("#current_stat")
const remainingTime = document.querySelector("#remainingTime")
const stat = document.querySelector("#stat")
const springStat = document.querySelector("#spingStat")
const summerStat = document.querySelector("#summerStat")
const autumnStat = document.querySelector("#autumnStat")
const winterStat = document.querySelector("#winterStat")
const missionA = document.querySelector("#missionA")
const missionB = document.querySelector("#missionB")
const missionC = document.querySelector("#missionC")
const missionD = document.querySelector("#missionD")
const mountainsAround = document.querySelector("#mountainsAround")
const sumAll = document.querySelector("#sumAll")
//DATA
//1 = mountain, 2 = farm, 3 = water, 4 = town, 5 = forest
var map = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
];
const mountains = [
    {
        'x': 2,
        'y': 2
    },
    {
        'x': 4,
        'y': 9
    },
    {
        'x': 6,
        'y': 4
    },
    {
        'x': 9,
        'y': 10
    },
    {
        'x': 10,
        'y': 6
    }
];
const elements = [
    {
        time: 2,
        type: 'water',
        shape: [[1, 1, 1],
        [0, 0, 0],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'town',
        shape: [[1, 1, 1],
        [0, 0, 0],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 1,
        type: 'forest',
        shape: [[1, 1, 0],
        [0, 1, 1],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'farm',
        shape: [[1, 1, 1],
        [0, 0, 1],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'forest',
        shape: [[1, 1, 1],
        [0, 0, 1],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'town',
        shape: [[1, 1, 1],
        [0, 1, 0],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'farm',
        shape: [[1, 1, 1],
        [0, 1, 0],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 1,
        type: 'town',
        shape: [[1, 1, 0],
        [1, 0, 0],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 1,
        type: 'town',
        shape: [[1, 1, 1],
        [1, 1, 0],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 1,
        type: 'farm',
        shape: [[1, 1, 0],
        [0, 1, 1],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 1,
        type: 'farm',
        shape: [[0, 1, 0],
        [1, 1, 1],
        [0, 1, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'water',
        shape: [[1, 1, 1],
        [1, 0, 0],
        [1, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'water',
        shape: [[1, 0, 0],
        [1, 1, 1],
        [1, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'forest',
        shape: [[1, 1, 0],
        [0, 1, 1],
        [0, 0, 1]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'forest',
        shape: [[1, 1, 0],
        [0, 1, 1],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'water',
        shape: [[1, 1, 0],
        [1, 1, 0],
        [0, 0, 0]],
        rotation: 0,
        mirrored: false
    },
];
const missions =
{
    "basic": [
        {
            "title": "Az erdő széle",
            "description": "A térképed szélével szomszédos erdőmezőidért egy-egy pontot kapsz."
        },
        {
            "title": "Álmos-völgy",
            "description": "Minden olyan sorért, amelyben három erdőmező van, négy-négy pontot kapsz."
        },
        {
            "title": "Krumpliöntözés",
            "description": "A farmmezőiddel szomszédos vízmezőidért két-két pontot kapsz."
        },
        {
            "title": "Határvidék",
            "description": "Minden teli sorért vagy oszlopért 6-6 pontot kapsz."
        }
    ],
    "extra": [
        {
            "title": "Fasor",
            "description": "A leghosszabb, függőlegesen megszakítás nélkül egybefüggő erdőmezők mindegyikéért kettő-kettő pontot kapsz. Két azonos hosszúságú esetén csak az egyikért."
        },
        {
            "title": "Gazdag város",
            "description": "A legalább három különböző tereptípussal szomszédos falurégióidért három-három pontot kapsz."
        },
        {
            "title": "Öntözőcsatorna",
            "description": "Minden olyan oszlopodért, amelyben a farm illetve a vízmezők száma megegyezik, négy-négy pontot kapsz. Mindkét tereptípusból legalább egy-egy mezőnek lennie kell az oszlopban ahhoz, hogy pontot kaphass érte."
        },
        {
            "title": "Mágusok völgye",
            "description": "A hegymezőiddel szomszédos vízmezőidért három-három pontot kapsz."
        },
        {
            "title": "Üres telek",
            "description": "A városmezőiddel szomszédos üres mezőkért 2-2 pontot kapsz."
        },
        {
            "title": "Sorház",
            "description": "A leghosszabb, vízszintesen megszakítás nélkül egybefüggő falumezők mindegyikéért kettő-kettő pontot kapsz."
        },
        {
            "title": "Páratlan silók",
            "description": "Minden páratlan sorszámú teli oszlopodért 10-10 pontot kapsz."
        },
        {
            "title": "Gazdag vidék",
            "description": "Minden legalább öt különböző tereptípust tartalmazó sorért négy-négy pontot kapsz."
        }
    ],
};
const seasons = ["Tavasz (AB)", "Nyár (BC)", "Ősz (CD)", "Tél (DA)"]
var current_piece
var time = 28
var rem_time = 0
var springPoints = 0
var summerPoints = 0
var autumnPoints = 0
var winterPoints = 0
var sumHatarvidek=0
var sumAlmosvolgy = 0
var sumErdoszele = 0
var sumKrumpliontozes = 0
var points
var currentSeason
var before
//GAMELOGIC
start.addEventListener('click', startGame)

function updateStat() {

    if (rem_time > 6) {
        rem_time = 0
    }
    if (time > 21) {
        drawPoints()
        current_stat.innerHTML = ` Jelenlegi évaszak: ${seasons[0]}`
        remainingTime.innerHTML = ` Évszakból hátralévő idő: ${rem_time}/7`
        currentSeason = seasons[0]
    }
    else if (time <= 21 && time > 14) {
        currentSeason = seasons[1]
        if (before != currentSeason) {
            updatePoints()
        }
        current_stat.innerHTML = ` Jelenlegi évaszak: ${seasons[1]}`
        remainingTime.innerHTML = ` Évszakból hátralévő idő: ${rem_time}/7`

    }
    else if (time <= 14 && time > 7) {
        currentSeason = seasons[2]
        if (before != currentSeason) {
            updatePoints()
        }
        current_stat.innerHTML = ` Jelenlegi évaszak: ${seasons[2]}`
        remainingTime.innerHTML = ` Évszakból hátralévő idő: ${rem_time}/7`

    }
    else if(time <= 7 && time > 0){
        currentSeason = seasons[3]
        if (before != currentSeason) {
            updatePoints()
        }
        current_stat.innerHTML = ` Jelenlegi évaszak: ${seasons[3]}`
        remainingTime.innerHTML = ` Évszakból hátralévő idő: ${rem_time}/7`
    }
    else{
        updatePoints()
    }

    if (rem_time == 6 && current_piece.time == 2) {
        time = time - 1
    }
    else {
        time = time - current_piece.time
    }
    rem_time = rem_time + current_piece.time

}
function korbehegy(){
    var korbehegyPoints = 0
    for(let i = 0; i < mountains.length; i++){
        if(map[mountains[i].x-2][mountains[i].y-1] !=0 
        && map[mountains[i].x][mountains[i].y-1] !=0 
        && map[mountains[i].x-1][mountains[i].y-2] !=0 
        && map[mountains[i].x-1][mountains[i].y] !=0){
            korbehegyPoints++
        }
    }
    return korbehegyPoints
}
function krumpliontozes(){
    var krumpliontozesPoints=0
    //Sarok
    if(map[0][0]==2){
        if(map[0][1]==3){
            krumpliontozesPoints+=2
        }
        if(map[1][0]==3){
            krumpliontozesPoints+=2
        }
    }
    if(map[0][map.length-1]==2){
        if(map[0][map.length-2]==3){
            krumpliontozesPoints+=2
        }
        if(map[1][map.length-1]==3){
            krumpliontozesPoints+=2
        }
    }
    if(map[map.length-1][0]==2){
        if(map[map.length-2][0]==3){
            krumpliontozesPoints+=2
        }
        if(map[map.length-1][1]==3){
            krumpliontozesPoints+=2
        }
    }
    if(map[map.length-1][map.length-1]==2){
        if(map[map.length-2][map.length-1]==3){
            krumpliontozesPoints+=2
        }
        if(map[map.length-1][map.length-2]==3){
            krumpliontozesPoints+=2
        }
    }
    //FELSŐ, ALSÓ
    for (let i = 1; i < map.length-1; i++) {
        if(map[0][i]==2){
            if(map[0][i-1]==3){
                krumpliontozesPoints+=2
            }
            if(map[0][i+1]==3){
                krumpliontozesPoints+=2
            }
            if(map[1][i]==3){
                krumpliontozesPoints+=2
            }
        }
        if (map[map.length-1][i]==2) {
            if(map[map.length-1][i-1]==3){
                krumpliontozesPoints+=2
            }
            if(map[map.length-1][i+1]==3){
                krumpliontozesPoints+=2
            }
            if(map[map.length-2][i]==3){
                krumpliontozesPoints+=2
            }
        }    
    }
    //JOBB BAL
    for (let i = 1; i < map.length-1; i++) {
        if(map[i][0]==2){
            if(map[i+1][0]==3){
                krumpliontozesPoints+=2
            }
            if(map[i-1][0]==3){
                krumpliontozesPoints+=2
            }
            if(map[i][1]==3){
                krumpliontozesPoints+=2
            }
        }
        if(map[i][map.length-1]==2){
            if(map[i+1][map.length-1]==3){
                krumpliontozesPoints+=2
            }
            if(map[i-1][map.length-1]==3){
                krumpliontozesPoints+=2
            }
            if(map[i][map.length-2]==3){
                krumpliontozesPoints+=2
            }
        }
    }
    //Közép
    for (let i = 1; i < map.length-1; i++) {
        for (let j = 1; j < map[0].length-1; j++) {
            if(map[i][j]==2){
                if(map[i+1][j]==3){
                    krumpliontozesPoints+=2
                }
                if(map[i-1][j]==3){
                    krumpliontozesPoints+=2
                }
                if(map[i][j+1]==3){
                    krumpliontozesPoints+=2
                }
                if(map[i][j-1]==3){
                    krumpliontozesPoints+=2
                }
            }
        }
        
    }

    return krumpliontozesPoints
}
function erdoszele() {
    var erdoszelePoint = 0
    for (let i = 1; i < map.length-1; i++) {
        if (map[0][i] == 5) {
            erdoszelePoint++
        }
        if(map[map.length-1][i]==5){
            erdoszelePoint++
        }
    }
    for (let i = 0; i < map.length; i++) {
        if(map[i][0]==5){
            erdoszelePoint++
        }
        if(map[i][map.length-1]==5){
            erdoszelePoint++
        }
    }
    return erdoszelePoint
}
function almosvolgy() {
    var almosPoint = 0
    for (let i = 0; i < map.length; i++) {
        var counter = 0
        for (let j = 0; j < map[0].length; j++) {
            if (map[i][j] == 5) {
                counter++
            }
        }
        if (counter == 3) {
            almosPoint += 4
        }
    }
    return almosPoint
}
function hatarvidek() {
    var hatarPoint = 0
    for (let i = 0; i < map.length; i++) {
        var talalt = 0
        for (let j = 0; j < map[0].length; j++) {
            if (map[i][j] == 0) {
                talalt = 1
            }

        }
        if (talalt == 0) {
            hatarPoint += 6
        }
    }
    for (let i = 0; i < map.length; i++) {
        var talalt = 0
        for (let j = 0; j < map[0].length; j++) {
            if (map[j][i] == 0) {
                talalt = 1
            }

        }
        if (talalt == 0) {
            hatarPoint += 6
        }
    }
    return hatarPoint
}
function startGame() {
    menu.style.display = 'none';
    end.style.display = 'none';
    game.style.display = 'flex';
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[0].length; j++) {
            mountains.forEach(e => {
                if (i + 1 === e.x && j + 1 === e.y) {
                    map[i][j] = 1;
                }
            })
        }
    }

    drawBoard()

    updatePiece()
    updateStat()
    drawMissions()
    updateMissions()

}
function drawBoard() {
    board.innerHTML = ""
    for (let i = 0; i < map.length; i++) {
        let tr = document.createElement('tr')
        for (let j = 0; j < map[0].length; j++) {
            let td = document.createElement('td')
            let size = window.innerHeight * 0.6 / map.length
            td.style.width = `${size}px`
            td.style.height = `${size}px`
            td.innerHTML = map[i][j]
            if (map[i][j] == 1) {
                td.style.backgroundImage = "url('assets/mountain_tile.png')";
            }
            if (map[i][j] == 2) {
                td.style.backgroundImage = "url('assets/plains_tile.png')"
            }
            if (map[i][j] == 3) {
                td.style.backgroundImage = "url('assets/water_tile.png')"
            }
            if (map[i][j] == 4) {
                td.style.backgroundImage = "url('assets/village_tile.png')"
            }
            if (map[i][j] == 5) {
                td.style.backgroundImage = "url('assets/forest_tile.png')"

            }
            td.style.backgroundSize = 'cover'
            tr.append(td)
        }
        board.append(tr)
    }
}

function drawMissions() {
    mission.innerHTML = ""
    for (let i = 0; i < 2; i++) {
        let tr = document.createElement('tr')
        for (let j = 0; j < 2; j++) {

            let td = document.createElement('td')
            var rand_num = Math.floor(Math.random() * missions.basic.length);
            if (missions.basic[parseInt(rand_num)].title === "Az erdő széle") {
                td.style.backgroundImage = "url('missions/erdo_szele.png')";
            }
            if (missions.basic[parseInt(rand_num)].title === "Álmos-völgy") {
                td.style.backgroundImage = "url('missions/Almos_volgy.png')";
            }
            if (missions.basic[parseInt(rand_num)].title === "Krumpliöntözés") {
                td.style.backgroundImage = "url('missions/krumpliontozes.png')";
            }
            if (missions.basic[parseInt(rand_num)].title === "Határvidék") {
                td.style.backgroundImage = "url('missions/Hatarvidek.png')";
            }
            td.id = missions.basic[parseInt(rand_num)].title

            missions.basic.splice(rand_num, 1)

            tr.append(td)
        }
        mission.append(tr)
    }
}
function updateMissions() {
    var counter = 1
    for (let row of mission.rows) {
        for (let cell of row.cells) {
            //Spring
            if (current_stat.innerHTML == ` Jelenlegi évaszak: ${seasons[0]}`) {
                if (counter == 1) {
                    cell.innerHTML = "🟢A"
                }
                if (counter == 2) {
                    cell.innerHTML = "🟢B"
                }
                if (counter == 3) {
                    cell.innerHTML = "C"
                }
                if (counter == 4) {
                    cell.innerHTML = "D"
                }
            }
            //Summer
            if (current_stat.innerHTML == ` Jelenlegi évaszak: ${seasons[1]}`) {
                if (counter == 1) {
                    cell.innerHTML = "A"
                }
                if (counter == 2) {
                    cell.innerHTML = "🟢B"
                }
                if (counter == 3) {
                    cell.innerHTML = "🟢C"
                }
                if (counter == 4) {
                    cell.innerHTML = "D"
                }
            }
            //Autumn
            if (current_stat.innerHTML == ` Jelenlegi évaszak: ${seasons[2]}`) {
                if (counter == 1) {
                    cell.innerHTML = "A"
                }
                if (counter == 2) {
                    cell.innerHTML = "B"
                }
                if (counter == 3) {
                    cell.innerHTML = "🟢C"
                }
                if (counter == 4) {
                    cell.innerHTML = "🟢D"
                }
            }
            //Winer
            if (current_stat.innerHTML == ` Jelenlegi évaszak: ${seasons[3]}`) {
                if (counter == 1) {
                    cell.innerHTML = "🟢A"
                }
                if (counter == 2) {
                    cell.innerHTML = "B"
                }
                if (counter == 3) {
                    cell.innerHTML = "C"
                }
                if (counter == 4) {
                    cell.innerHTML = "🟢D"
                }
            }
            counter++
        }
    }
}

function updatePiece() {
    var piece = Math.floor(Math.random() * elements.length)
    current_piece = elements[piece];
    drawPiece()
}
function drawPoints(){
    
    points = springPoints + summerPoints + autumnPoints + winterPoints
    spring.innerHTML = `Tavasz: <br>${springPoints} pont`
    summer.innerHTML = `Nyár: <br>${summerPoints} pont`
    autumn.innerHTML = `Ősz: <br>${autumnPoints} pont`
    winter.innerHTML = `Tél: <br>${winterPoints} pont`
    result.innerHTML = `Összesen: ${points} pont`
}
function updatePoints() {

    for (let row of mission.rows) {
        for (let cell of row.cells) {
            //HATÁRVIDÉK
            if (cell.id == "Határvidék" && (cell.innerHTML == "🟢A" || cell.innerHTML == "🟢B" || cell.innerHTML == "🟢C" || cell.innerHTML == "🟢D")) {
                if (current_stat.innerHTML == ` Jelenlegi évaszak: ${seasons[0]}`) {
                    springPoints += hatarvidek()
                    sumHatarvidek+=hatarvidek()
                }
                if (current_stat.innerHTML == ` Jelenlegi évaszak: ${seasons[1]}`) {
                    summerPoints += hatarvidek()
                    sumHatarvidek+=hatarvidek()
                }
                if (current_stat.innerHTML == ` Jelenlegi évaszak: ${seasons[2]}`) {
                    autumnPoints += hatarvidek()
                    sumHatarvidek+=hatarvidek()
                }
                if (current_stat.innerHTML == ` Jelenlegi évaszak: ${seasons[3]}`) {
                    winterPoints += hatarvidek()
                    sumHatarvidek+=hatarvidek()
                }
            }
            //ALMOS-VOLGY
            if (cell.id == "Álmos-völgy" && (cell.innerHTML == "🟢A" || cell.innerHTML == "🟢B" || cell.innerHTML == "🟢C" || cell.innerHTML == "🟢D")) {
                if (current_stat.innerHTML == ` Jelenlegi évaszak: ${seasons[0]}`) {
                    springPoints += almosvolgy()
                    sumAlmosvolgy+=almosvolgy()
                }
                if (current_stat.innerHTML == ` Jelenlegi évaszak: ${seasons[1]}`) {
                    summerPoints += almosvolgy()
                    sumAlmosvolgy+=almosvolgy()
                }
                if (current_stat.innerHTML == ` Jelenlegi évaszak: ${seasons[2]}`) {
                    autumnPoints += almosvolgy()
                    sumAlmosvolgy+=almosvolgy()
                }
                if (current_stat.innerHTML == ` Jelenlegi évaszak: ${seasons[3]}`) {
                    winterPoints += almosvolgy()
                    sumAlmosvolgy+=almosvolgy()
                }
            }
            //ERDOSZELE
            if (cell.id == "Az erdő széle" && (cell.innerHTML == "🟢A" || cell.innerHTML == "🟢B" || cell.innerHTML == "🟢C" || cell.innerHTML == "🟢D")) {
                if (current_stat.innerHTML == ` Jelenlegi évaszak: ${seasons[0]}`) {
                    springPoints += erdoszele()
                    sumErdoszele+=erdoszele()
                }
                if (current_stat.innerHTML == ` Jelenlegi évaszak: ${seasons[1]}`) {
                    summerPoints += erdoszele()
                    sumErdoszele+=erdoszele()
                }
                if (current_stat.innerHTML == ` Jelenlegi évaszak: ${seasons[2]}`) {
                    autumnPoints += erdoszele()
                    sumErdoszele+=erdoszele()
                }
                if (current_stat.innerHTML == ` Jelenlegi évaszak: ${seasons[3]}`) {
                    winterPoints += erdoszele()
                    sumErdoszele+=erdoszele()
                }
            }
            //krumpliontozes
            if (cell.id == "Krumpliöntözés" && (cell.innerHTML == "🟢A" || cell.innerHTML == "🟢B" || cell.innerHTML == "🟢C" || cell.innerHTML == "🟢D")) {
                if (current_stat.innerHTML == ` Jelenlegi évaszak: ${seasons[0]}`) {
                    springPoints += krumpliontozes()
                    sumKrumpliontozes+=krumpliontozes()
                }
                if (current_stat.innerHTML == ` Jelenlegi évaszak: ${seasons[1]}`) {
                    summerPoints += krumpliontozes()
                    sumKrumpliontozes+=krumpliontozes()
                }
                if (current_stat.innerHTML == ` Jelenlegi évaszak: ${seasons[2]}`) {
                    autumnPoints += krumpliontozes()
                    sumKrumpliontozes+=krumpliontozes()
                }
                if (current_stat.innerHTML == ` Jelenlegi évaszak: ${seasons[3]}`) {
                    winterPoints += krumpliontozes()
                    sumKrumpliontozes+=krumpliontozes()
                }
            }
        }
    }
    drawPoints()
}

function drawPiece() {
    piece.innerHTML = ""
    for (var i = 0; i < current_piece.shape.length; i++) {
        let tr = document.createElement('tr')
        for (var j = 0; j < current_piece.shape[0].length; j++) {
            let td = document.createElement('td')
            td.innerHTML = current_piece.shape[i][j]
            if (current_piece.shape[i][j] == 1 && current_piece.type == 'water') {
                td.style.backgroundImage = "url('assets/water_tile.png')"
            }
            if (current_piece.shape[i][j] == 1 && current_piece.type == 'forest') {
                td.style.backgroundImage = "url('assets/forest_tile.png')"
            }
            if (current_piece.shape[i][j] == 1 && current_piece.type == 'farm') {
                td.style.backgroundImage = "url('assets/plains_tile.png')"
            }
            if (current_piece.shape[i][j] == 1 && current_piece.type == 'town') {
                td.style.backgroundImage = "url('assets/village_tile.png')"
            }
            td.style.width = "40px"
            td.style.height = "40px"
            td.style.backgroundSize = "cover"
            tr.append(td)
        }
        piece.append(tr)
        pieceTime.innerHTML = `${current_piece.time}🕒`
    }
}
function rotateShape(shape) {
    let rows = shape.length;
    let cols = shape[0].length;
    let rotateShape = [];

    for (let i = 0; i < cols; i++) {
        rotateShape[i] = [];
        for (let j = 0; j < rows; j++) {
            rotateShape[i][j] = shape[rows - j - 1][i];
        }
    }
    return rotateShape;
}
function endscreen(){
    springStat.innerHTML = `Tavasz: ${springPoints} pont`
    summerStat.innerHTML = `Nyár: ${summerPoints} pont`
    autumnStat.innerHTML = `Ősz: ${autumnPoints} pont`
    winterStat.innerHTML = `Tél: ${winterPoints} pont`
    missionA.innerHTML = `Határvidék: ${sumHatarvidek} pont`
    missionB.innerHTML = `Álmos-völgy: ${sumAlmosvolgy} pont`
    missionC.innerHTML = `Az erdő széle: ${sumErdoszele} pont`
    missionD.innerHTML = `Krumpliöntözés: ${sumKrumpliontozes} pont`
    mountainsAround.innerHTML = `Körbekerített hegy mező: ${korbehegy()} pont`
    
    sumAll.innerHTML = `Összesen: ${springPoints+summerPoints+autumnPoints+winterPoints+korbehegy()} pont`

}
function mirrorShape(shape) {
    let mirroredShape = [];

    for (let i = 0; i < shape.length; i++) {
        mirroredShape[i] = [];
        for (let j = 0; j < shape[i].length; j++) {
            mirroredShape[i][j] = shape[i][shape[i].length - j - 1];
        }
    }

    return mirroredShape;
}

mirror.addEventListener("click", () => {
    current_piece.shape = mirrorShape(current_piece.shape);
    drawPiece()
})

rotate.addEventListener("click", () => {
    current_piece.shape = rotateShape(current_piece.shape);
    drawPiece()
})

board.addEventListener("click", (e) => {
    if (e.target.matches('td')) {
        var clickedRow = e.target.parentNode.rowIndex
        var clickedCol = e.target.cellIndex
        var canPut = 0
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (current_piece.shape[i][j] == 1 && map[clickedRow + i][clickedCol + j] != 0) {
                    canPut = 1

                }

            }
        }
        if (canPut == 0) {
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (current_piece.shape[i][j] == 1) {
                        if (current_piece.type == 'farm') {
                            map[clickedRow + i][clickedCol + j] = 2
                            board.rows[clickedRow + i].cells[clickedCol + j].innerHTML = 2
                        }
                        if (current_piece.type == 'water') {
                            map[clickedRow + i][clickedCol + j] = 3
                            board.rows[clickedRow + i].cells[clickedCol + j].innerHTML = 3
                        }
                        if (current_piece.type == 'town') {
                            map[clickedRow + i][clickedCol + j] = 4
                            board.rows[clickedRow + i].cells[clickedCol + j].innerHTML = 4
                        }
                        if (current_piece.type == 'forest') {
                            map[clickedRow + i][clickedCol + j] = 5
                            board.rows[clickedRow + i].cells[clickedCol + j].innerHTML = 5
                        }
                    }
                }
            }
            if (time < 1) {
                updateStat()
                game.style.display = "none"
                end.style.display = 'flex';
                endscreen()
            }
            else{
                drawBoard()
                updatePiece()
                before = currentSeason
                updateStat()
                updateMissions()
            }
        }
    }
})