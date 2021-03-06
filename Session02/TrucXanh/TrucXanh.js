//DONE
var cards = [
    {
        name: "php",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/php-logo_1.png",
        id: 1,
    },
    {
        name: "css3",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/css3-logo.png",
        id: 2
    },
    {
        name: "html5",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/html5-logo.png",
        id: 3
    },
    {
        name: "jquery",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/jquery-logo.png",
        id: 4
    },
    {
        name: "javascript",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/js-logo.png",
        id: 5
    },
    {
        name: "node",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/nodejs-logo.png",
        id: 6
    },
    {
        name: "photoshop",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/photoshop-logo.png",
        id: 7
    },
    {
        name: "python",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/python-logo.png",
        id: 8
    },
    {
        name: "rails",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/rails-logo.png",
        id: 9
    },
    {
        name: "sass",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/sass-logo.png",
        id: 10
    },
];

function createScore() {

    let score = document.createElement("h1")
    score.innerText = ""
    score.style.width = "30%"
    score.style.height = "5%"
    score.style.fontSize = "30px"
    score.style.position = "absolute"
    score.style.top = "5%"
    score.style.left = '5%'
    score.style.fontFamily = "Impact,Charcoal,sans-serif"
    score.style.opacity = 0
    document.body.appendChild(score)
    return score

}

function createReset() {

    let reset = document.createElement("button")
    reset.style.width = "10%"
    reset.style.height = "5%"
    reset.style.backgroundImage = "url(asset/NewGame.png)"
    reset.style.backgroundColor = "transparent"
    reset.style.border = "0"
    reset.style.backgroundSize = "100% 100%"
    reset.addEventListener("click", resetGame)
    reset.style.position = 'absolute'
    reset.style.top = "5%"
    reset.style.left = "85%"
    document.body.appendChild(reset)
    return reset

}

function createPlay() {

    let eLementPlay = document.createElement("button")
    eLementPlay.style.width = "10%"
    eLementPlay.style.height = "5%"
    eLementPlay.style.backgroundImage = "url(asset/StartGame.png)"
    eLementPlay.style.backgroundSize = "100% 100%"
    eLementPlay.style.backgroundColor = "transparent"
    eLementPlay.style.border = "0"
    eLementPlay.addEventListener("click", playGame)
    eLementPlay.style.position = 'absolute'
    eLementPlay.style.top = "5%"
    eLementPlay.style.left = "70%"
    document.body.appendChild(eLementPlay)
    return eLementPlay

}

function playGame() {
    displayCards()
    elementPlay.disabled = true
    elementPlay.style.opacity = "0.5"
    elementScore.style.opacity = 1
    elementTimeOut.style.opacity = 1
    setTimeOutGame(time)
}
function resetGame() {

    arrayCard = []
    console.log(createdArray20Card())
    removeCard()
    this.score = score = 10000  
    totalScore(this.score)
    setTimeOutGame(time, true)
    playGame()

}
function createBoardGame() {

    let boardGame = document.createElement("div")
    boardGame.style.position = "relative"
    boardGame.style.width = "50%";
    boardGame.style.height = "50%";
    boardGame.style.margin = '0 auto'
    document.body.appendChild(boardGame)
    return boardGame
    
}
function createLabel(index) {

    let label = document.createElement("div");
    label.innerText = index;
    label.style.position = "absolute"
    label.style.top = "40%";
    label.style.left = "42%";
    label.style.fontSize = "30px";
    label.style.textAlign = "center"
    return label;
}

function createImg(index) {

    let img = document.createElement("image")
    img.addEventListener("click", clicked)
    img.style.position = "absolute"
    img.style.borderRadius = "10px"
    img.style.width = "19%"
    img.style.height = "22%"
    img.style.borderSpacing = "20px"
    img.style.backgroundSize = "100% 100%"
    return img

}

function createCover(index) {

    let cover = document.createElement("div");
    cover.style.position = "absolute"
    cover.style.backgroundColor = "orange"
    cover.style.borderRadius = "10px"
    cover.style.width = "100%";
    cover.style.height = "100%";
    cover.style.border = "thin solid blue"
    return cover

}
function createTimeOut() {

    let timeout = document.createElement("h1")
    timeout.style.position = "absolute"
    timeout.style.width = "20%%"
    timeout.style.height = "10%"
    timeout.style.top = "10%"
    timeout.style.left = "5%"
    timeout.innerText = "Time out: "
    timeout.style.opacity = 0
    document.body.appendChild(timeout)
    return timeout

}
function setTimeOutGame(time, isResetTime = false) {
    
    if (isResetTime == true) {
        isResetTime != isResetTime
        return clearInterval(x)
    }
    return x = setInterval(function () {
        if (time >= 0) {
            elementTimeOut.innerText = "Time out: " + time;
            time--
        }
        else {
            clearInterval(x)
            endGame()  
        }
    }, 1000)

}
function endGame() {

    let text = "End Game!!!"
    if (confirm(text)) {
        return resetGame()
    } else {
        return resetGame()
    }

}
// variables
let arrayCard = []
let countClick = 1
let score = 10000
let time = 60 
let firstCard = {}
let secondCard = {}
// element
let board = createBoardGame()
let reset = createReset()
let elementTimeOut = createTimeOut()
let elementPlay = createPlay()
let elementScore = createScore()
let totalsScore = totalScore(score)

function createdArray20Card() {
    indexCards = 0
    for (let i = 0; i < 20; i++) {
        if (indexCards > 9) {
            indexCards = 0
        }
        arrayCard.push(cards[indexCards])
        indexCards++
    }
    return arrayCard
}
function displayCards() {

    let countCardInRow = 0
    let leftSpace = 0
    let topSpace = 0
    let arrayCardShuffled = shuffleCards(createdArray20Card())
    for (let index = 1; index <= 20; index++) {
        let img = board.appendChild(createImg(index))
        img.setAttribute("id", `${index}`)
        img.setAttribute("value", `${arrayCard[index - 1].id}`)
        img.style.backgroundImage = `url(${arrayCardShuffled[index - 1].img})`
        if (countCardInRow > 4) {
            topSpace += 25
            img.style.top = `${topSpace}%`
            img.style.left = `${leftSpace}%`
            leftSpace = 0
            countCardInRow = 0
        }
        img.style.top = `${topSpace}%`
        img.style.left = `${leftSpace}%`
        img.appendChild(createCover(index)).setAttribute("id", `c${index}`)
        img.appendChild(createLabel(index)).setAttribute("id", `l${index}`)
        countCardInRow++
        leftSpace += 20
    }
}
function removeCard() {
    for (let index = 1; index <= 20; index++) {
        let element = document.getElementById(`${index}`)
        element.remove()
        arrayCard.pop()
    }
}
function shuffleCards(params) {
    return params.sort(() => (Math.random() - 0.5))
}

function clicked(params) {

    console.log(params)
    console.log("id: ", params.path[1].id)
    console.log("value: ", params.path[1].attributes["value"].value)
    console.log("cid: ", params.path[1].id)
    console.log("lis: ", params.path[1].id)
    document.getElementById(`c${params.path[1].id}`).hidden = true
    document.getElementById(`l${params.path[1].id}`).hidden = true
    if (countClick >= 2) {
        secondCard.value = params.path[1].attributes["value"].value
        secondCard.idCover = `c${params.path[1].id}`
        secondCard.idLabel = `l${params.path[1].id}`
        setTimeout(() => {
            checkedImage(firstCard, secondCard)
            return
        }, 1);
        countClick = 1
    } else {
        firstCard.value = params.path[1].attributes["value"].value
        firstCard.idCover = `c${params.path[1].id}`
        firstCard.idLabel = `l${params.path[1].id}`
        countClick++
    }
    console.log("Count click: ", countClick)

}

function totalScore(params) {
    return elementScore.innerText = "SCORE: " + params
}

function checkedImage(firstCard, secondCard) {

    console.log(firstCard, secondCard)
    closeClick()
    if (firstCard.value == secondCard.value) {
        arrayTwoCardSelected = []
        console.log("MATCH --- Score: ", score += 1000)
        openClick()
        return totalScore(score)
    } else {
        setTimeout(() => {
            document.getElementById(firstCard.idCover).hidden = false
            document.getElementById(firstCard.idLabel).hidden = false
            document.getElementById(secondCard.idCover).hidden = false
            document.getElementById(secondCard.idLabel).hidden = false
            openClick()
        }, 1000);
        console.log("NOT MATCH --- Score: ", score -= 500)
        if (score <= 0) {
            endGame()
        }
        else {

            return totalScore(score)
        }

    }
}
function closeClick() {
    for (let index = 1; index <= 20; index++) {
        document.getElementById(`${index}`)
            .removeEventListener("click", clicked)
    }
}
function openClick() {

    for (let index = 1; index <= 20; index++) {
        document.getElementById(`${index}`).addEventListener("click", clicked)
    }
    
}

//DONE



// create card
    // create image
    // create cover
    // create label
    // open
    // close
    // hide

// create 20 cards ( 20 index, 10 value )
    // display cards
    // shuffle cards
    // first card
    // second card
    // matched ? hide : close