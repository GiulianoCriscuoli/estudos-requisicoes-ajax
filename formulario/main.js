function submit(id_form) {

    let form = $('#'+id_form);

    form.submit(function(e) {

        e.preventDefault();

       
        $.ajax({
            url: form.attr('action'),
            type: form.attr('method'),
            data: form.serialize(),

            success: function(i) {
                $("#info").html("Enviado com sucesso!");
            },

            error: function() {
               $("#info").html("Aconteceu um erro!");
            }
        })

    });
}