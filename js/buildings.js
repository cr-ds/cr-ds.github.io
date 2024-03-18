$(function(){
    var loadedFilesCount = 0;
    var totalFilesCount = 2;

    function fileLoaded() {
        loadedFilesCount++;
        if (loadedFilesCount === totalFilesCount) {
            // All files loaded toggle view
            $("#loading").toggle();
        }
    }

    // At <NameOfScript> insert the name of the script you exported the plot as html from
    $("#plot1").load("../plots/buildings_plot1.html", function() {
        fileLoaded();
        $("#plot1load").toggle();
    });
    $("#plot2").load("../plots/buildings_plot2.html", function() {
        fileLoaded();
        $("#plot2load").toggle();
    });
});