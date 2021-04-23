const rejalt = document.getElementById("rejalt_no");
const submit = document.getElementById("btn");

submit.addEventListener("click", function(e){
    e.preventDefault();
    const num = document.getElementById("number").value;
    if(num === ""){
        alert("Sorry you did not add any numbers!");
    }else if(num < 0){
        alert("You have dialed the wrong number!")
    }else{
        rejalt.style.visibility = "visible"
    }

    // Covating
    bynariNumber = Number(num).toString(2);
    rejalt.innerText = bynariNumber;
})