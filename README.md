# Toaster
##A steam like notification engine for toast messages

![alt text](https://raw.githubusercontent.com/Rosefalk/Toaster/master/media/toasts.jpg "default look, can be changed")

###Dependencies
jQuery
SCSS (optional, but needed for easy configuration!)

###To create a toast message
toaster.toast(object)

Examples:
toaster.toast();
toaster.toast({title:"this is a title", text:"this is body text"});

Object reacts to the following / what is marked up in defaults:

    var toaster = {
        defaults : {
            toaster      : "toaster",   //the ID of the toaster
            icon         : undefined,   //an optional icon
            title        : "Title",     //title of toaster
            text         : "Text",      //text of toaster
            timeFadeIn   : 400,         //time it takes to fade in
            timeDelay    : 4000,        //delay before it fades out
            timeFadeOut  : 1000,        //toast fade out
            func         : undefined,   //optional function to be run on click
            playSound    : true         //should a sound play when notifying?
        },
        toast: toast //this is the function that creates the notifications
    };

Javascript handles all program related and SCSS/precompiler handles layout.
If you want to change layout then change it in the SCSS! Variables have been
broken out for you :)

Pop-up position, colors, fonts and so on can easily be configured.
