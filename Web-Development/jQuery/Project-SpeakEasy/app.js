/**
 * Created by manishgiri on 12/2/2016.
 */
var template = function(text) {
    return '<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + text + '</span><i class="glyphicon glyphicon-remove"></i></p>';
};

var main = function() {
    $('form').submit(function() {
        var text = $("#todo").val();
        var html = template(text);
        $(".list").append(html);
        //text = '';
        $("#todo").val('');

        return false;
    });

    $(document).on("click", ".glyphicon-star", function() {
        $(this).toggleClass("active");
    });

    $(document).on("click",".glyphicon-remove" , function() {
        //$(this).toggleClass("active");
        $(this).parent().remove();
    });

    function add(item) {
        var html = template(item);
        $(".list").append(html);

    }
    var command = {
        'add *item': add
    };

    // Add our commands to annyang
    annyang.addCommands(command);

    // Start listening
    annyang.start();

};

$(document).ready(main);
