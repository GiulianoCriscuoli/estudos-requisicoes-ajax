$(function() {

   $("#form").bind("submit", function(e) {
       e.preventDefault();

       console.log("Formulário foi submitado!");
   });

    $("#name, #email").bind("focus", function() {

        $this = $(this);

        $this.addClass("focus");
    });

    $("#name, #email").bind("blur", function() {

        $this = $(this);

        $this.removeClass("focus");
    });
});