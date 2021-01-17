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
mainHourDiv.addClass("row");
$(".container").append(mainHourDiv);

var hourColumn = $("<div>");
hourColumn.addClass("col-md-1");
$(".row").append(hourColumn);

var textArea = $("<div>");
textArea.addClass("col-md-10 textFill");
$(".row").append(textArea);

var saveBtn = $("<button>");
saveBtn.addClass("col-md-1 save btn");
$(".row").append(saveBtn);

