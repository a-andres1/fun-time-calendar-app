$().ready(function () {
    console.log("ready");
});

// luxon date 
var currentDate = luxon.DateTime.local();
var topDate = $("#currentDay");
var printDate = currentDate.toLocaleString(luxon.DateTime.DATE_MED_WITH_WEEKDAY)
topDate.text(printDate);


// create hour divs 
var mainHourDiv = $("<div>");
// adds class - row
mainHourDiv.addClass("row");
// apppends div to container
$(".container").append(mainHourDiv);

// creates column for holding hour times
var hourColumn = $("<div>");
// adds column class for spacing
hourColumn.addClass("col-md-1 hour");
// appends coloumn to mainHourDiv row
$(".row").append(hourColumn);
// creates text in hourColumn
hourColumn.text("hours")

var textArea = $("<div>");
// adds classes for spacing to textArea divs
textArea.addClass("col-md-10 textFill timeblock");
// appends the text area to the mainHourDiv row
$(".row").append(textArea);
// adds text to see the spacing for now
textArea.text("text goes here")

// creates save button 
var saveBtn = $("<button>");
// adds classes to button
saveBtn.addClass("col-md-1 saveBtn");
// appends button to mainHourDiv
$(".row").append(saveBtn);
// displays text to test if it's working
saveBtn.text("save")

// array for mainHourDiv to loop through
var hours = ["8", "9", "10", "11", "12", "1", "2", "3", "4", "5", "6",]

for (var i = 0; i<hours.length; i++){

}