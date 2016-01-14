$( document ).ready(function() {
    var heights = $(".main").map(function() {
        return $(this).height();
    }).get(),

    maxHeight = Math.max.apply(null, heights);

    $(".main").height(maxHeight);
});
