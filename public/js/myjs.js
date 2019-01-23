function deleteProduct(id){
    $.ajax({
        url: 'https://appcuatuine.herokuapp.com/products/' + id,
        type: 'DELETE',
        data: {"_id" : id},
        success: function(response){
            alert('Success.');
            location.href = '/products';
        },
        error: function(response, message){
            alert('Error. ' + message );
            location.href = '/products';
            console.log(response);
        }
    });
}