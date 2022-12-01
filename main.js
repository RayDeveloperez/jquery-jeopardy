let readJeopardyData =async () =>{

    let rawJeopardyData = await fetch ('jeopardy.json');

    // console.log(rawJeopardyData);
    let data = await rawJeopardyData.json();
    // console.log(data)

    let groupedData = _.groupBy(data,"value");
    console.log(groupedData);


let oneHundo = document.querySelectorAll("#oneHundo .grid-item")
let twoHundo = document.querySelectorAll("#twoHundo .grid-item")
let fourHundo = document.querySelectorAll("#fourHundo .grid-item")
let sixHundo = document.querySelectorAll("#sixHundo .grid-item")
let eightHundo = document.querySelectorAll("#eightHundo .grid-item")

let question = document.querySelector("h3")
let Input = document.querySelector("#answer")
let submitButton = document.querySelector('#inputForm')
let bank = 0;
let scoreboard =document.querySelector('#scoreboard')
let score = 0;

let arr =[]
for(let i = 0;i<oneHundo.length;i++){
oneHundo[i].addEventListener('click',()=>{
    arr = [];
    arr.push(groupedData.$100[Math.floor(Math.random() * groupedData.$100.length )])
    answer = arr[0].answer
    question.innerText = arr[0].question
    oneHundo[i].disable = true
    oneHundo[i].style.backgroundColor = "gray"

})
}
for(let i = 0;i<twoHundo.length;i++){
    twoHundo[i].addEventListener('click',()=>{
        arr = [];
        arr.push(groupedData.$200[Math.floor(Math.random() * groupedData.$200.length )])
        answer = arr[0].answer
        question.innerText = arr[0].question
        twoHundo[i].disable = true
        twoHundo[i].style.backgroundColor = "gray"
    })
}
for(let i = 0;i<fourHundo.length;i++){
    fourHundo[i].addEventListener('click',()=>{
        arr = [];
        arr.push(groupedData.$400[Math.floor(Math.random() * groupedData.$400.length )])
        answer = arr[0].answer
        question.innerText = arr[0].question
        fourHundo[i].disable = true
        fourHundo[i].style.backgroundColor = "gray"
    })
}
for(let i = 0;i<sixHundo.length;i++){
    sixHundo[i].addEventListener('click',()=>{
        arr = [];
        arr.push(groupedData.$600[Math.round(Math.random() * 100 )])
        answer = arr[0].answer
        question.innerText = arr[0].question
        sixHundo[i].disable = true
        sixHundo[i].style.backgroundColor = "gray"
        
    })
}
for(let i = 0;i<eightHundo.length;i++){
    eightHundo[i].addEventListener('click',()=>{
        arr = [];
        arr.push(groupedData.$800[Math.round(Math.random() * 100 )])
         answer = arr[0].answer
        question.innerText = arr[0].question
        eightHundo[i].disable = true
        eightHundo[i].style.backgroundColor = "gray"
       
    })
}
submitButton.addEventListener("submit",(event)=>{
    event.preventDefault();
    answer = arr[0].answer;
    question.innerText = arr[0].question;

    if(Input.value === answer){
        question.innerText = `Congrats! That is Correct`
        bank += parseInt(arr[0].value.substr(1));
        console.log(bank)
        scoreboard.innerText = bank
        // score.appendChild(scoreboard)
        
    } else {
        question.innerText = `Unfortunately Your answer Incorrect`
    }
    Input.value = "";
    
    console.log(submitButton)
})
}
readJeopardyData();
