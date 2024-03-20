$(function(){
    var loadedFilesCount = 0;
    var totalFilesCount = 7;

    function fileLoaded() {
        loadedFilesCount++;
        if (loadedFilesCount === totalFilesCount) {
            // All files loaded toggle view
            $("#loading").toggle();
        }
    }

    // At <NameOfScript> insert the name of the script you exported the plot as html from
    $("#plot1").load("../plots/paytowin_plot1.html", function() {
        fileLoaded();
        $("#plot1load").toggle();
    });
    $("#plot2").load("../plots/paytowin_plot2.html", function() {
        fileLoaded();
        $("#plot2load").toggle();
    });
    $("#plot3").load("../plots/paytowin_plot3.html", function() {
        fileLoaded();
        $("#plot3load").toggle();
    });
    $("#plot4").load("../plots/paytowin_plot4.html", function() {
        fileLoaded();
        $("#plot4load").toggle();
    });
    $("#plot5").load("../plots/paytowin_plot5.html", function() {
        fileLoaded();
        $("#plot5load").toggle();
    });
    $("#plot6").load("../plots/paytowin_plot6.html", function() {
        fileLoaded();
        $("#plot6load").toggle();
    });
    $("#plot7").load("../plots/paytowin_plot7.html", function() {
        fileLoaded();
        $("#plot7load").toggle();
    });
});