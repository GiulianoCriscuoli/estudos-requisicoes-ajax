function update() {

    //  $.post('update.php', function(dev) {

    //      $('#developer').html('<b>' + dev.nome + dev.sobrenome + '</b>')
    // }, 'JSON');

    $.ajax({
        url: 'update.php',
        type: 'POST',
        contentType: false,
        processData: false,
    }, function(dev) {
        $('#developer').html('<b>'+ dev.nome + dev.sobrenome + '</b>');
    });
}

setInterval("update()", 2000);


$(function() {
    update();
});

