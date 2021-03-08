// $(document).ready(function() {
    
//     $("#cmd").click(function() {

//         $("#box").load("data.txt");
//     })
// });

$(document).ready(function() {

    $("#cmd").click(function() {
        
        $("#box").load("data.txt", function(responseTxt, statusTxt, xhr) {

            if(statusTxt == "success") {
                alert("Sucesso na comunicação!");
            }

            if(statusTxt == "error") {
                alert("Erro na comunicação!"+ xhr.status + ":" + xhr.statusTxt);
            }
        });
    })
})