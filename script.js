$().ready(function () {
    console.log("ready");
});

// luxon date 
var currentDate = luxon.DateTime.local();
var topDate = $("#currentDay");
var printDate = currentDate.toLocaleString(luxon.DateTime.DATETIME_FULL);
topDate.text(printDate);
// gets current hour
console.log(luxon.DateTime.local().c.hour);


// array for mainHourDiv to loop through
var hours = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm",]

// for loop that creates divs for each hour
for (var i = 0; i < hours.length; i++){
// create hour divs with class and ids
var mainHourDiv = $("<div>").addClass("row");
// creates column for holding hour times with column class for spacing
var hourColumn = $("<div>").addClass("col-md-1 hour").attr("id", hours[i]).text(hours[i]);
// creates input area with classes for spacing to textArea divs
var textArea = $("<input>").addClass("col-md-10 textFill input-group timeblock inputGroup-sizing-lg");
// creates save button with classes
var saveBtn = $("<button>").addClass("col-md-1 saveBtn");

// apppends div to container
$(".container").append(mainHourDiv); 
// appends coloumn to mainHourDiv row
$(".container").append(hourColumn);   
// appends the text area to the mainHourDiv row
$(".container").append(textArea);
// appends button to mainHourDiv
$(".container").append(saveBtn);

}

// displays text to test if it's working
$("button.saveBtn").text("save");

$(".saveBtn").click(function(){
    $(this)
console.log("save");
var savedText = $("#textFill").val();

localStorage.setItem("save", savedText)

// getItem
});


// function (checkTime){
// check the text? in hourColumn against the hour in Luxon to assign past present or future
// if 
    

// } 