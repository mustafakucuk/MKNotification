(function($){
   $.fn.MKNotification = function(mknOptions){
     var mkn = $.extend({
       'MKMessage' : 'Default Message!',
       'MKDelay' : 'None',
       'MKIcon' : 'None',
       'MKSound' : 'None'
     },mknOptions);
     var docHeight = $(document).height();

     return this.each(function(index, element){

       if(mkn.MKIcon=="None"){
         var MKNotificationIcon = "";
       }else{
         var MKNotificationIcon = '<div id="MKNotificationIcon"><img src="'+mkn.MKIcon+'"></div>';
       }

       if(mkn.MKSound!="None"){
        function MKSound(){
          var audioElement = document.createElement('audio');
           audioElement.setAttribute('src', mkn.MKSound);
           audioElement.setAttribute('autoplay', 'autoplay');
           $.get();
           audioElement.addEventListener("load", function() {
           audioElement.play();
           }, true);
        }
       }

       if(mkn.MKDelay=="None"){
         var MKNotificationShow = $('body').append('<div id="MKNotification"><div class="MKNotification"><div id="MKNotificationText">'+MKNotificationIcon+mkn.MKMessage+'</div></div></div>');
         $('body').find("#MKNotification").hide().slideDown(200);
         MKSound();
       }else {
         var MKNotificationShow = $('body').append('<div id="MKNotification"><div class="MKNotification"><div id="MKNotificationText">'+MKNotificationIcon+mkn.MKMessage+'</div></div></div>');
         $('body').find("#MKNotification").hide().slideDown(200);
         MKSound();
         setTimeout(function(){
           $('body').find("#MKNotification").slideUp(200, function() { $(this).remove(); } );
         }, mkn.MKDelay);
       }


   });


   }
})(jQuery);
