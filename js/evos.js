$(function(){
    var loadedFilesCount = 0;
    var totalFilesCount = 4;

    function fileLoaded() {
        loadedFilesCount++;
        if (loadedFilesCount === totalFilesCount) {
            // All files loaded toggle view
            $("#loading").toggle();
        }
    }

    // At <NameOfScript> insert the name of the script you exported the plot as html from
    $("#plot1").load("../plots/evo_plot1.html", function() {
        fileLoaded();
        $("#plot1load").toggle();
    });
    $("#plot2").load("../plots/evo_plot2.html", function() {
        fileLoaded();
        $("#plot2load").toggle();
    });
    $("#plot3").load("../plots/evo_plot3.html", function() {
        fileLoaded();
        $("#plot3load").toggle();
    });
    $("#plot4").load("../plots/evo_plot4.html", function() {
        fileLoaded();
        $("#plot4load").toggle();
    });
});