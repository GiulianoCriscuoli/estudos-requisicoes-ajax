let btnCep = document.getElementById("button");

function searchCep() {
    var cep = document.getElementById("cep").value;
    var url = "http://viacep.com.br/ws/"+ cep +"/json/";

    $.ajax({

        url: url,
        type: "GET",
        success: function(response) {
            console.log(response);
        }
    });
}

btnCep.addEventListener("click", searchCep);
