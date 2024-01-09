*TECHNICAL STRUCTURE: To create this counter I used pure HTML, CSS and JS without the use of external libraries both for the simplicity of the project itself and as an exercise to fix even better the concepts previously studied. I chose to add a toggle to switch to dark mode and also a custom initial message having inserted a prompt that as soon as the page opens asks for the user's name. All this is done both to enrich the page with elements and make it more dynamic and to use various Javascript features. 
I organized the project into folders trying to keep the code as lean as possible.

*STYLE: I opted for a minimal style in which we find the counter in the center of the page where, thanks to an "after" element, I tried to give a more attractive design while remaining simple and trying to give the idea also thanks to the selected font of an application a little retro.
I added the dark mode toggle at the top right and a welcome message for the user.
As far as media queries are concerned, I had to make just a few small adjustments to make it usable also from mobile in landscape mode.

*JAVASCRIPT USE: In addition to managing the buttons where I used "query selector" and then "addEventListener" to assign the functions of increasing, decreasing and resetting the counter, I also tried to use Javascript to create the welcome message which is nothing more than an h1 generated thanks to "createElement", for inserting the prompt that asks for the username and inserting it into the h1 and for managing the switch button to dark mode, where I used the "classList.toggle" function ” to assign a new class and therefore a new style to the elements.
