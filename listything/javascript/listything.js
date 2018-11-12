var balance = document.getElementById("balance");
var currentbalance = 10;

var amount = document.getElementById("amount").value;
var withdrawal = document.getElementById("withdrawal").checked;
var deposit = document.getElementById("deposit").checked;
var reason = document.getElementById("reason");
var submit = document.getElementById("submit");
var date;


var withdrawalchosen;
var depositchosen;
var depositwithdrawal;

   
   balance.innerHTML = "$" +currentbalance;
   balance.style.color = "white";

function newLine() {

    console.log(amount);
    //alert(amount);
    if (document.getElementById("deposit").checked == true && document.getElementById("withdrawal").checked == true) {
    	alert("You cant both withdraw and deposit funds at the same time");
    	console.log("to many radios")
    } else if (document.getElementById("deposit").checked == false && document.getElementById("withdrawal").checked == false) {
        alert("Please Select either deposit to add or withdrawal to remove money");
    } else if (document.getElementById("deposit").checked == true) {
        
        console.log("amount " +amount);
        currentbalance = currentbalance + amount;
        //newbalance = currentbalance + document.getElementById("amount").value;
        
        
        balance.innerHTML = "$" +currentbalance;
        //alert("working");
        console.log(currentbalance)
        depositwithdrawal = "deposit";
        d = new Date();
        date = d.toDateString();
        console.log(amount);
        document.getElementById("deposit").checked = false;
        //deposit = false;
        console.log("1" +reason);
  
        chosen()
        newTrTd();



    } else if (document.getElementById("withdrawal").checked == true) {
      
        balance = currentbalance - amount;
        balance.innerHTML = "$" +currentbalance;
        depositwithdrawal = "withdrawal";
        d = new Date();
        date = d.toDateString();
        console.log(amount);
        document.getElementById("withdrawal").checked = false;
        withdrawal = false;

        newTrTd("newtablerow");

    } else {
        alert("error something went wrong");
        console.log("error: something went wrong")
    }    

    
}

function chosen() {

	if(depositwithdrawal == "withdrawal" && depositwithdrawal != "deposit") {
          withdrawalchosen = "Withdrawal";
          depositchosen = "";
	} else if (depositwithdrawal == "deposit" && depositwithdrawal != "withdrawal") {
          withdrawalchosen = "";
          depositchosen = "Deposit";
    } else if (depositwithdrawal == "deposit" && depositwithdrawal == "withdrawal") {
    	console.log("What do you think you are doing");
    } else {
    	console.log("You shouldnt See this error");
    }

}


function newTrTd() {

// Find a <table> element with id="table":
var table = document.getElementById("table");

// Create an empty <tr> element and add it to the 1st position of the table:
var row = table.insertRow(-1);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(1);
var cell4 = row.insertCell(1);
var cell5 = row.insertCell(1);
var cell6 = row.insertCell(1);
var cell7 = row.insertCell(1);

// Add some text to the new cells:
cell1.innerHTML = "";
cell2.innerHTML = "$" +currentbalance;
cell3.innerHTML = "$" +amount;
cell4.innerHTML = withdrawalchosen;
cell5.innerHTML = depositchosen;
cell6.innerHTML = "" +reason;
cell7.innerHTML = date;



}