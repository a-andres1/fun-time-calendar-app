# fun-time-calendar-app

My main issue was figuring out the issues I was having with the ids. First it was a .attr problem but then it was a generating problem. If you go through my commit history, you'll see I was generating only one hourDiv that I appended to each mainHourDiv so the text was constantly being rewritten. The problem was how I was appending things. I was appending the new divs to themselves as I went through the for loop. After figuring out the problem was really using css to make it easier to align the pieces how I wanted them to be aligned, so I could write my jQuery correctly. 

