$().ready(function () {
    console.log("ready");
    loadTask();
});

// luxon date 
var currentDate = luxon.DateTime.local();
var topDate = $("#currentDay");
var printDate = currentDate.toLocaleString(luxon.DateTime.DATETIME_FULL);
topDate.text(printDate);
// gets current hour
var currentHour = luxon.DateTime.local().c.hour
console.log(currentHour);

// array for mainHourDiv to loop through
var hours = ["8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm",]

var hoursMil = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"]

// for loop that creates divs for each hour
for (var i = 0; i < hours.length; i++) {
    // create hour divs with class and ids
    var mainHourDiv = $("<div>").addClass("row");
    // creates column for holding hour times with column class for spacing
    var hourColumn = $("<div>").addClass("col-md-1 hour").attr("id", "time-" + hoursMil[i]).attr("data-hour", hoursMil[i]).text(hours[i]);
    // creates input area with classes for spacing to textArea divs
    var textArea = $("<input>").addClass("col-md-10 textFill input-group timeblock inputGroup-sizing-lg ").attr("id",  hoursMil[i]);
    // creates save button with classes
    var saveBtn = $("<button>").addClass("col-md-1 saveBtn").attr("id", hoursMil[i]);

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
$("button.saveBtn").html("<i class=\"far fa-save\"></i>");

// on click event to save input boxes into local storage
$(".saveBtn").click(function () {
    var userTask = $(this)
    console.log(userTask)
    var userTaskId = userTask.attr("id")
    console.log(userTaskId);
    // debugger
    var savedText = $("input#" + userTaskId).val();

    localStorage.setItem(userTaskId, savedText);

});

// function for loading tasks from local storage when page reloads
function loadTask(){
    // for loop for storing items in local storage
    for (var i = 0; i < 24; i++){
        console.log("loading data for task " + localStorage.getItem(i))
        $("input#" + i).val(localStorage.getItem(i))
    }
}

 //for loop for creating the backgrounds of the input boxes
function checkTime() {
   
    for (var i = 0; i < hours.length; i++) {

        var testHour = $("div#time-" + hoursMil[i]).data("hour")
        if (testHour == currentHour) {
            $("input#" + hoursMil[i]).addClass("present");
        }
        else if (testHour < currentHour) {
            $("input#" + hoursMil[i]).addClass("past");
        }
        else if (testHour > currentHour) {
            $("input#" + hoursMil[i]).addClass("future");
        }

    }

};

checkTime();