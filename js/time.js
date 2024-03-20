$(function(){
    var loadedFilesCount = 0;
    var totalFilesCount = 9;

    function fileLoaded() {
        loadedFilesCount++;
        if (loadedFilesCount === totalFilesCount) {
            // All files loaded toggle view
            $("#loading").toggle();
        }
    }

    // At <NameOfScript> insert the name of the script you exported the plot as html from
    $("#plot1").load("../plots/time_plot1.html", function() {
        fileLoaded();
        $("#plot1load").toggle();
    });
    $("#plot2").load("../plots/time_plot2.html", function() {
        fileLoaded();
        $("#plot2load").toggle();
    });
    $("#monday").load("../plots/time_plot3.html", function() {
        fileLoaded();
        $("#mondayload").toggle();
    });
    $("#tuesday").load("../plots/time_plot4.html", function() {
        fileLoaded();
        $("#tuesdayload").toggle();
    });
    $("#wednesday").load("../plots/time_plot5.html", function() {
        fileLoaded();
        $("#wednesdayload").toggle();
    });
    $("#thursday").load("../plots/time_plot6.html", function() {
        fileLoaded();
        $("#thursdayload").toggle();
    });
    $("#friday").load("../plots/time_plot7.html", function() {
        fileLoaded();
        $("#fridayload").toggle();
    });
    $("#saturday").load("../plots/time_plot8.html", function() {
        fileLoaded();
        $("#saturdayload").toggle();
    });
    $("#sunday").load("../plots/time_plot9.html", function() {
        fileLoaded();
        $("#sundayload").toggle();
    });
});