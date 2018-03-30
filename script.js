$
("getTokenButton").click(function(){
    $.post("", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
});