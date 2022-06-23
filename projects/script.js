let number, turn;
const max = 7,
    badShadow = "1px 1px 5px red ,-1px -1px 5px red",
    goodShadow = "1px 1px 5px green ,-1px -1px 5px green",
    restart = document.querySelector(".card .front button"),
    answer = document.querySelector(".card .front span"),
    card = document.querySelector(".card"),
    messageP = document.querySelector(".message"),
    guess = document.querySelector(".gameZone input"),
    submit = document.querySelector(".gameZone button");