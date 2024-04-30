let data = [];
let screen = document.querySelector(".screen")
let allbuttons = document.querySelectorAll("button")

// get any button the user press
allbuttons.forEach(function(eachbtn){

    eachbtn.onclick = function(){
        
        if(eachbtn.innerText === "="){
            
            // display result
            let convertedData = data.join("")  
            let result = eval(convertedData) 
            screen.innerText = result
            
        }else if(eachbtn.innerText === "C"){
            data = [];
            screen.innerText = 0
        }
        
        
        else{
            // storing user input
            data.push(eachbtn.innerText)
            let convertedData = data.join("")  
            screen.innerText = convertedData
        }
        
    }
})