$(function(){

    function resultImc() {

        let weight = $("#weight").val();
        let height = $("#height").val();

        weight = weight.replace(",", ".");
        height = height.replace(",", ".");

        let imc = weight / (height * height);

        imc = imc.toFixed(2);

        $("#result").html("Seu IMC é: "+ imc +"Kg/m²").addClass('detach');
    }

    $("button").bind("click", resultImc);

});