let data = new FormData();

data.append('name', 'Giuliano');
data.append('age', '23');
data.append('address', 'Porto Alegre');

$.ajax({
    url: 'http://127.0.0.1:5500/teste/script.php',
    contentType: false,
    processData: false,
    type: 'POST',
    data: data,
}).done(function(response){
    window.alert(response);
})