function toast(jsonData){
    //create reference to this without changing it
    var self = this;
    //create reference to jsonData without changing it
    var settings = $.extend({},self.defaults,jsonData);
    //toaster is the ID of the toaster you want to target
    var $toaster= $("#"+settings.toaster);
    var $burner = $toaster.children(".burn");
    var $tmpl   = $toaster.children(".toast");
    var audio   = $toaster.children("audio").get(0);
    //clone the hidden template and insert data
    var $toast  = $tmpl.clone();
        $toast.find(".title").html(settings.title)
        $toast.find(".text").html(settings.text)
        $toast.find(".left-column").css("background-image","url("+settings.icon+")")
    //if no icon has been chosen, remove it
        if(settings.icon === undefined){
            $toast.find(".left-column").addClass("hide")
            $toast.find(".right-column").addClass("wide")
        }
    //if a function has been added, run it, if not, remove toast
        if(settings.func != undefined){
            $toast.on("click", function(){
                settings.func(this);
                $(this).remove()
            })
        }else{
            $toast.on("click", function(){
                $toast.finish();
    //A more elegant process would be nice as
    //finish() doesn't fade/remove when timeFadeOut = -1
    //since they're not queued with that setting
                $toast.remove();
            })
        }
    //actuall instance the toast
        $toast.appendTo($burner);
    //optionally play sound
        if(settings.playSound){
            audio.play();
        }
    //remove toast after a while
        $toast.fadeIn(settings.timeFadeIn)

        if(settings.timeFadeOut != -1){
            $toast.delay(settings.timeDelay)
            .fadeOut(settings.timeFadeout, function() {
              $(this).remove();
            })
        }
    //console.log(settings)
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
        timeFadeOut  : -1,        //toast fade out
        func         : undefined,   //optional function to be run on click
        playSound    : true         //should a sound play when notifying?
    },
    toast: toast //this is the function that creates the notifications
};
