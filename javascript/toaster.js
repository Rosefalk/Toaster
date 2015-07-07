function toast(jsonData){
    //create reference to this without changing it
    var self = this;
    //create reference to jsonData without changing it
    var json = $.extend({},self.defaults,jsonData);
    //toaster is the ID of the toaster you want to target
    var $toaster= $("#"+json.toaster);
    var $burner = $toaster.children(".burn");
    var $tmpl   = $toaster.children(".toast");
    var audio   = $toaster.children("audio").get(0);
    //clone the hidden template and insert data
    var $toast  = $tmpl.clone();
        $toast.find(".title").text(json.title)
        $toast.find(".text").text(json.text)
        $toast.find(".left-column").css("background-image","url("+json.icon+")")
    //if no icon has been chosen, remove it
        if(json.icon === undefined){
            $toast.find(".left-column").addClass("hide")
            $toast.find(".right-column").addClass("wide")
        }
    //if a function has been added, run it, if not, remove toast
        if(json.func != undefined){
            $toast.on("click", function(){
                json.func();
                $(this).remove()
            })
        }else{
            $toast.on("click", function(){
                $toast.finish();
            })
        }
    //actuall instance the toast
        $toast.appendTo($burner);
    //optionally play sound
        if(json.playSound){
            audio.play();
        }
    //remove toast after a while
        $toast.fadeIn(400)
              .delay(4000)
              .fadeOut(1000, function() {
                  $(this).remove();
              })
    //console.log(json)
    return self;
}

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
