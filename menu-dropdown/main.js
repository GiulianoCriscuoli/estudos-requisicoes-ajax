$("li").hover(function() {

    $this = $(this);

    $this.find(".content").slideDown();

}, function(){

    $this = $(this);

    $this.find(".content").slideUp();

});