# Toaster
##A steam like notification engine for toast messages

![alt text](https://raw.githubusercontent.com/Rosefalk/Toaster/master/media/toasts.jpg "default look, can be changed")

###Dependencies
jQuery
SCSS (optional, but needed for easy configuration!)

###Implementation

- Link  toaster.js (found in the javascript folder) to your project **after** your jQuery link
- Link screen.css (found in the stylesheets folder) to your project
- Then add the following html snippet to a suitable location (body is a perfect choice)

```html
<div id="toaster" class="toast-wrapper">
    <audio>
     <source src="media/ping.wav" type="audio/wav">
    </audio>
    <div class="burn"></div>
    <div class="toast hide">
        <div class="left-column columns"></div>
        <div class="right-column columns">
            <h3 class="title"></h3>
            <p class="text"></p>
        </div>
    </div>
</div>
```

###To create a toast message
toaster.toast(object)

Examples:

    toaster.toast();
    toaster.toast({title:"this is a title", text:"this is body text"});

Object reacts to the following / what is marked up in defaults:
```javascript
var toaster = {
    defaults : {
        toaster      : "toaster",   //the ID of the toaster
        icon         : undefined,   //an optional icon
        title        : "Title",     //title of toaster
        text         : "Text",      //text of toaster
        timeFadeIn   : 400,         //time it takes to fade in
        timeDelay    : 4000,        //delay before it fades out
        timeFadeOut  : 1000,        //toast fade out (set to -1 to keep toasts from fading out)
        func         : undefined,   //optional function to be run on click, first parameter is the html object
        playSound    : true         //should a sound play when notifying?
    },
    toast: toast //this is the function that creates the notifications
};
```
Javascript handles all program related and SCSS/precompiler handles layout.
If you want to change layout then change it in the SCSS! Variables have been
broken out for you :)

Pop-up position, colors, fonts and so on can easily be configured.

###FAQ

- Q: I'm getting an Audio Error.
- A: playSound true, needs an Audio tag. If you don't want sound at all, set playsound to false and ditch the Audio tag.

- Q: I don't like the design of the notifications.
- A: Change layout in screen.scss and compile to css
