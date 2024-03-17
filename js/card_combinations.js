$(function(){
    $("#general").toggle();

    var loadedFilesCount = 0;
    var totalFilesCount = 21;

    function fileLoaded() {
        loadedFilesCount++;
        if (loadedFilesCount === totalFilesCount) {
            // All files loaded toggle view
            $("#loading").toggle();
            $("#general").toggle();
        }
    }

    $("#plot1").load("../plots/deckProperties_plot1.html", function() {
        fileLoaded();
    });
    $("#plot2").load("../plots/deckProperties_plot2.html", function() {
        fileLoaded();
    });
    $("#plot3").load("../plots/deckProperties_plot3.html", function() {
        fileLoaded();
    });
    $("#wincon").load("../plots/deckProperties_plot4.html", function() {
        fileLoaded();
    });
    $("#support").load("../plots/deckProperties_plot5.html", function() {
        fileLoaded();
    });
    $("#topsingle").load("../plots/deckProperties_plot6.html", function() {
        fileLoaded();
    });
    $("#worstsingle").load("../plots/deckProperties_plot7.html", function() {
        fileLoaded();
    });
    $("#toptwo").load("../plots/deckProperties_plot8.html", function() {
        fileLoaded();
    });
    $("#worsttwo").load("../plots/deckProperties_plot9.html", function() {
        fileLoaded();
    });
    $("#topthree").load("../plots/deckProperties_plot10.html", function() {
        fileLoaded();
    });
    $("#worstthree").load("../plots/deckProperties_plot11.html", function() {
        fileLoaded();
    });
    $("#topfour").load("../plots/deckProperties_plot12.html", function() {
        fileLoaded();
    });
    $("#worstfour").load("../plots/deckProperties_plot13.html", function() {
        fileLoaded();
    });
    $("#topfive").load("../plots/deckProperties_plot14.html", function() {
        fileLoaded();
    });
    $("#worstfive").load("../plots/deckProperties_plot15.html", function() {
        fileLoaded();
    });
    $("#topsix").load("../plots/deckProperties_plot16.html", function() {
        fileLoaded();
    });
    $("#worstsix").load("../plots/deckProperties_plot17.html", function() {
        fileLoaded();
    });
    $("#topseven").load("../plots/deckProperties_plot18.html", function() {
        fileLoaded();
    });
    $("#worstseven").load("../plots/deckProperties_plot19.html", function() {
        fileLoaded();
    });
    $("#topdecks").load("../plots/deckProperties_plot20.html", function() {
        fileLoaded();
    });
    $("#worstdecks").load("../plots/deckProperties_plot21.html", function() {
        fileLoaded();
    });
});