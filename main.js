function calculateInterest() {
    principal = Number(document.getElementById("inputP").value);
    rate = Number(document.getElementById("inputR").value);
    time = Number(document.getElementById("inputT").value);

    document.getElementById("principal-formula").innerHTML = principal;
    document.getElementById("rate").innerHTML = rate;
    document.getElementById("time").innerHTML = time;
    document.getElementById("principal-amount").innerHTML = principal;
    
    simpleInterest = principal * rate * time / 100;
    amount = principal + simpleInterest;
    
    document.getElementById("interest").innerHTML = simpleInterest;
    document.getElementById("interest-amount").innerHTML = simpleInterest;
    document.getElementById("amount").innerHTML = amount;
}