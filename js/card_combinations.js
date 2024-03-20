$(function(){
    var loadedFilesCount = 0;
    var totalFilesCount = 21;

    function fileLoaded() {
        loadedFilesCount++;
        if (loadedFilesCount === totalFilesCount) {
            // All files loaded toggle view
            $("#loading").toggle();
        }
    }

    if ($(window).width() < 1228) {
        $( "#cat1" ).removeClass( "row-cols-6" ).addClass( "row-cols-1" );
        $( "#cat2" ).removeClass( "row-cols-6" ).addClass( "row-cols-1" );
        $( "#cat3" ).removeClass( "row-cols-6" ).addClass( "row-cols-1" );
        $( "#cat4" ).removeClass( "row-cols-6" ).addClass( "row-cols-1" );
        $( "#cat5" ).removeClass( "row-cols-6" ).addClass( "row-cols-1" );
        $( "#cat6" ).removeClass( "row-cols-6" ).addClass( "row-cols-1" );
        $( "#cat7" ).removeClass( "row-cols-6" ).addClass( "row-cols-1" );
        $( "#cat8" ).removeClass( "row-cols-6" ).addClass( "row-cols-1" );
        $( "#cat9" ).removeClass( "row-cols-6" ).addClass( "row-cols-1" );
    };

    $("#plot1").load("../plots/deckProperties_plot1.html", function() {
        fileLoaded();
        $("#plot1load").toggle();
    });
    $("#plot2").load("../plots/deckProperties_plot2.html", function() {
        fileLoaded();
        $("#plot2load").toggle();
    });
    $("#plot3").load("../plots/deckProperties_plot3.html", function() {
        fileLoaded();
        $("#plot3load").toggle();
    });
    $("#wincon").load("../plots/deckProperties_plot4.html", function() {
        fileLoaded();
        $("#winconload").toggle();
    });
    $("#support").load("../plots/deckProperties_plot5.html", function() {
        fileLoaded();
        $("#supportload").toggle();
    });
    $("#topsingle").load("../plots/deckProperties_plot6.html", function() {
        fileLoaded();
        $("#topsingleload").toggle();
    });
    $("#worstsingle").load("../plots/deckProperties_plot7.html", function() {
        fileLoaded();
        $("#worstsingleload").toggle();
    });
    $("#toptwo").load("../plots/deckProperties_plot8.html", function() {
        fileLoaded();
        $("#toptwoload").toggle();
    });
    $("#worsttwo").load("../plots/deckProperties_plot9.html", function() {
        fileLoaded();
        $("#worsttwoload").toggle();
    });
    $("#topthree").load("../plots/deckProperties_plot10.html", function() {
        fileLoaded();
        $("#topthreeload").toggle();
    });
    $("#worstthree").load("../plots/deckProperties_plot11.html", function() {
        fileLoaded();
        $("#worstthreeload").toggle();
    });
    $("#topfour").load("../plots/deckProperties_plot12.html", function() {
        fileLoaded();
        $("#topfourload").toggle();
    });
    $("#worstfour").load("../plots/deckProperties_plot13.html", function() {
        fileLoaded();
        $("#worstfourload").toggle();
    });
    $("#topfive").load("../plots/deckProperties_plot14.html", function() {
        fileLoaded();
        $("#topfiveload").toggle();
    });
    $("#worstfive").load("../plots/deckProperties_plot15.html", function() {
        fileLoaded();
        $("#worstfiveload").toggle();
    });
    $("#topsix").load("../plots/deckProperties_plot16.html", function() {
        fileLoaded();
        $("#topsixload").toggle();
    });
    $("#worstsix").load("../plots/deckProperties_plot17.html", function() {
        fileLoaded();
        $("#worstsixload").toggle();
    });
    $("#topseven").load("../plots/deckProperties_plot18.html", function() {
        fileLoaded();
        $("#topsevenload").toggle();
    });
    $("#worstseven").load("../plots/deckProperties_plot19.html", function() {
        fileLoaded();
        $("#worstsevenload").toggle();
    });
    $("#topdecks").load("../plots/deckProperties_plot20.html", function() {
        fileLoaded();
        $("#topdecksload").toggle();
    });
    $("#worstdecks").load("../plots/deckProperties_plot21.html", function() {
        fileLoaded();
        $("#worstdecksload").toggle();
    });


});

$(window).resize(function() {
    if ($(window).width() < 1228) {
      $( "#cat1" ).removeClass( "row-cols-6" ).addClass( "row-cols-1" );
      $( "#cat2" ).removeClass( "row-cols-6" ).addClass( "row-cols-1" );
      $( "#cat3" ).removeClass( "row-cols-6" ).addClass( "row-cols-1" );
      $( "#cat4" ).removeClass( "row-cols-6" ).addClass( "row-cols-1" );
      $( "#cat5" ).removeClass( "row-cols-6" ).addClass( "row-cols-1" );
      $( "#cat6" ).removeClass( "row-cols-6" ).addClass( "row-cols-1" );
      $( "#cat7" ).removeClass( "row-cols-6" ).addClass( "row-cols-1" );
      $( "#cat8" ).removeClass( "row-cols-6" ).addClass( "row-cols-1" );
      $( "#cat9" ).removeClass( "row-cols-6" ).addClass( "row-cols-1" );
    };
    if ($(window).width() >= 1228) {
        $( "#cat1" ).removeClass( "row-cols-1" ).addClass( "row-cols-6" );
        $( "#cat2" ).removeClass( "row-cols-1" ).addClass( "row-cols-6" );
        $( "#cat3" ).removeClass( "row-cols-1" ).addClass( "row-cols-6" );
        $( "#cat4" ).removeClass( "row-cols-1" ).addClass( "row-cols-6" );
        $( "#cat5" ).removeClass( "row-cols-1" ).addClass( "row-cols-6" );
        $( "#cat6" ).removeClass( "row-cols-1" ).addClass( "row-cols-6" );
        $( "#cat7" ).removeClass( "row-cols-1" ).addClass( "row-cols-6" );
        $( "#cat8" ).removeClass( "row-cols-1" ).addClass( "row-cols-6" );
        $( "#cat9" ).removeClass( "row-cols-1" ).addClass( "row-cols-6" );
      }
  });