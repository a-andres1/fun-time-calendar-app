$().ready(function () {
    console.log("ready");
});

// luxon date 
var currentDate = luxon.DateTime.local();
var topDate = $("#currentDay");
var printDate = currentDate.toLocaleString(luxon.DateTime.DATE_MED_WITH_WEEKDAY)
topDate.text(printDate);


// array for mainHourDiv to loop through
var hours = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm",]

// for loop that creates divs for each hour
for (var i = 0; i < hours.length; i++){
// create hour divs 
var mainHourDiv = $("<div>");
// adds class - row
mainHourDiv.addClass("row").attr("id", hours[i]);

// creates column for holding hour times
var hourColumn = $("<div>" + hours[i] + "</div>");
// adds column class for spacing
hourColumn.addClass("col-md-1 hour");


var textArea = $("<input>");
// adds classes for spacing to textArea divs
textArea.addClass("col-md-10 textFill input-group timeblock");

// creates save button 
var saveBtn = $("<button>");
// adds classes to button
saveBtn.addClass("col-md-1 saveBtn");

// apppends div to container
$(".container").append(mainHourDiv);
}


// appends coloumn to mainHourDiv row
$(".row").append(hourColumn);
// creates text in hourColumn
// for (var i = 0; i < hours.length; i++){
// $("div.hour").attr("id", hours[i]);
// console.log (hours[i]);
// }


// appends the text area to the mainHourDiv row
$(".row").append(textArea);
// adds text to see the spacing for now
// $("div.timeblock").text("text goes here")var 



// appends button to mainHourDiv
$(".row").append(saveBtn);
// displays text to test if it's working
$("button.saveBtn").text("save")


$(".saveBtn").click(function(){
console.log("save");
var savedText = $("#textFill").val();

localStorage.setItem("save", savedText)
});