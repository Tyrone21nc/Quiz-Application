let submit = document.getElementById("sbmt");


document.getElementById("quiz-form").addEventListener("submit", function(e){
    e.preventDefault();     // this prevents page from reloading when the submit button is clicked


    document.getElementById("ans").style.display = "contents";
    document.getElementById("answer").style.display = "contents";
    let v1 = document.getElementById("pts");
    let v2 = document.getElementById("points");
    v1.style.fontSize = "20px";
    v2.style.fontSize = "20px";
    v1.style.backgroundColor = "rgb(20, 100, 40)";
    v2.style.backgroundColor = "rgb(20, 100, 40)";
    v1.style.display = "contents";
    v2.style.display = "contents";
    let points = 0;

    let ch1 = document.getElementById("OQ");
    let ch2 = document.getElementById("technician");
    let ch3 = document.getElementById("false");
    if (ch1.checked){
        document.getElementById("question1").textContent = 
            `You answered correctly!!`;
        document.getElementById("question1").style.backgroundColor = 
            "rgb(40, 150, 40)";
        document.getElementById("question1").style.textAlign = "center";
        points++;
        v2.textContent = points;
    } else{
        document.getElementById("question1").textContent = 
        `You answered incorrectly!! Try again`;
        document.getElementById("question1").style.backgroundColor = 
            "rgb(150, 40, 40)";
        document.getElementById("question1").style.textAlign = "center";
    }


    if (ch2.value.trim().toUpperCase() === "IT"){
        document.getElementById("question2").textContent = 
            `You answered correctly!!`;
        document.getElementById("question2").style.backgroundColor = 
            "rgb(40, 150, 40)";
        document.getElementById("question2").style.textAlign = "center";
        points++;
        v2.textContent = points;
    } else{
        document.getElementById("question2").textContent = 
        `You answered incorrectly!! Try again`;
        document.getElementById("question2").style.backgroundColor = 
            "rgb(150, 40, 40)";
        document.getElementById("question2").style.textAlign = "center";
    }


    if (ch3.checked){
        document.getElementById("question3").textContent = 
            `You answered correctly!!`;
        document.getElementById("question3").style.backgroundColor = 
            "rgb(40, 150, 40)";
        document.getElementById("question3").style.textAlign = "center";
        points++;
        v2.textContent = points;
    } else{
        document.getElementById("question3").textContent = 
        `You answered incorrectly!! Try again`;
        document.getElementById("question3").style.backgroundColor = 
            "rgb(150, 40, 40)";
        document.getElementById("question3").style.textAlign = "center";
    }
});





