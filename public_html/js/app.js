  var apiKey = "e3dd511a";
  var apiurl = "https://www.omdbapi.com/";
  function EpisodeFunction(id) {
    var d ={ "i": id , "apikey": apiKey };
    $.ajax(
      {
        data: d,
        url: apiurl,
        success: function(result){
          $("#Episode_title").val(result.Title);
          $("#Episode_description").val(result.Plot);
          $("#Episode_classification").val(result.Rated);
          $("#Episode_duration").val(result.Runtime);
          $("#img-preview-1").attr("src",result.Poster.replace("300","1000"));
          $("#episode_image").val(result.Poster.replace("300","1000"));

          $("#div1").hide();
        }

      }
    );
  }
  function SerieFunction(id) {
    var d ={ "i": id , "apikey": apiKey };
    $.ajax(
      {
        data: d,
        url: apiurl,
        success: function(result){
          $("#Serie_title").val(result.Title);
          $("#Serie_year").val(parseInt(result.Year));
          $("#Serie_description").val(result.Plot);
          $("#Serie_classification").val(result.Rated);
          $("#Serie_duration").val(result.totalSeasons +" Seasons");
          $("#Serie_imdb").val(result.imdbRating);
          $("#Serie_title").val(result.Title);
          $("#Serie_tags").val(result.Genre);
          $("#img-preview").attr("src",result.Poster.replace("300","1000"));
          $("#serie_image").val(result.Poster.replace("300","1000"));

          var genres =  result.Genre.split(", ");
          for (var i = 0; i < genres.length; i++) {
            genres[i]
          }
          $("input[name='Serie[genres][]']").each(function (index, obj) {
                console.log($(this).next().html());
                 $(this).prop( "checked", false );

                for (var j = 0; j < genres.length; j++) {
                     console.log("*"+$(this).next().html().toUpperCase()+"-"+genres[j].toUpperCase()+"*");
                      if ($(this).next().html().toUpperCase() == genres[j].toUpperCase()) {
                           $(this).prop( "checked", true );
                      }
                }
          });
           $("#div1").hide();
        }

      }
    );
  }
  function MovieFunction(id) {
    var d ={ "i": id , "apikey": apiKey };
    $.ajax(
      {
        data: d,
        url: apiurl,
        success: function(result){
          $("#Movie_title").val(result.Title);
          $("#Movie_year").val(parseInt(result.Year));
          $("#Movie_description").val(result.Plot);
          $("#Movie_classification").val(result.Rated);
          $("#Movie_duration").val(result.Runtime);
          $("#Movie_imdb").val(result.imdbRating);
          $("#Movie_title").val(result.Title);
          $("#Movie_tags").val(result.Genre);
          $("#img-preview").attr("src",result.Poster.replace("300","1000"));
          $("#movie_image").val(result.Poster.replace("300","1000"));

          var genres =  result.Genre.split(", ");
          for (var i = 0; i < genres.length; i++) {
            genres[i]
          }
          $("input[name='Movie[genres][]']").each(function (index, obj) {
                console.log($(this).next().html());
                 $(this).prop( "checked", false );

                for (var j = 0; j < genres.length; j++) {
                     console.log("*"+$(this).next().html().toUpperCase()+"-"+genres[j].toUpperCase()+"*");
                      if ($(this).next().html().toUpperCase() == genres[j].toUpperCase()) {
                           $(this).prop( "checked", true );
                      }
                }
          });
           $("#div1").hide();
        }

      }
    );
  }
$(document).ready(function () {

  $("#search").click(function(){
    var d ={ "s": $("#Movie_title").val(), "apikey": apiKey,"type":"movie"};
    $.ajax(
      {
        data: d,
        url: apiurl,
        success: function(result){
          var List = "";
          for (var i = 0; i < result.Search.length; i++) {
            List+="<div  onclick=\"MovieFunction('"+result.Search[i].imdbID+"')\" alt="+result.Search[i].imdbID+" class='poster-search'><img src='"+result.Search[i].Poster+"'/><span>"+result.Search[i].Title+"</span><div>"+result.Search[i].Year+"</div></div>";
          }
          $("#result_search").html(List);
          $("#div1").show();
        }
      }
    );
  })
    $("#search_episodes").click(function(){
      var seasonNum = $("#season_id").val().replace( /^\D+/g, '');
      var d ={ "Season": seasonNum, "apikey": apiKey,"t" : $("#serie_name").val()};
      $.ajax(
        {
          data: d,
          url: apiurl,
          success: function(result){
            var List = "";
            for (var i = 0; i < result.Episodes.length; i++) {
              List+="<div  onclick=\"EpisodeFunction('"+result.Episodes[i].imdbID+"')\" alt="+result.Episodes[i].imdbID+" class='poster-search'>"+result.Episodes[i].Title+" (Episode : " + result.Episodes[i].Episode+") </span><div>"+result.Episodes[i].Released+"</div></div>";
            }
            $("#result_search").html(List);
            $("#div1").show();

          }
        }
      );
  })
  $("#search_series").click(function(){
    var d ={ "s": $("#Serie_title").val(), "apikey": apiKey,"type":"series"};
    $.ajax(
      {
        data: d,
        url: apiurl,
        success: function(result){
          var List = "";
          for (var i = 0; i < result.Search.length; i++) {
            List+="<div  onclick=\"SerieFunction('"+result.Search[i].imdbID+"')\" alt="+result.Search[i].imdbID+" class='poster-search'><img src='"+result.Search[i].Poster+"'/><span>"+result.Search[i].Title+"</span><div>"+result.Search[i].Year+"</div></div>";
          }
          $("#result_search").html(List);
          $("#div1").show();

        }
      }
    );
  })
  $("#close_search").click(function () {
       $("#div1").hide();
  })
  $(".btn-select").click(function () {
      $(".input-file").click();
  })


  $(".select-video").click(function () {
      $(".input-video").click();
  })
    $("#Video_color").change(function(){
      $(".textarea-quotes").css("background-color","#"+$(this).val());
      $(".quote-view").css("background-color","#"+$(this).val());
    })

  $(".input-video").change(function(evt) {
    var $source = $('#video_here');
    $source[0].src = URL.createObjectURL(this.files[0]);
    $source.parent()[0].load();
    $source.parent("video").css({"display":"block"})
  });
  $(".img-selector").change(function(){
      readURL(this,"#img-preview");
  });
  $(".alert-dashborad .close").click(function() {
    $(".alert-dashborad").fadeOut();
  })
  $("#new_season_btn").click(function() {
         $("#new_season_dialog").show();
           return false;

  })
  $("#new_season_btn_close").click(function() {
         $("#new_season_dialog").hide();
         return false;
  })
  $("#Movie_sourcetype").change(function(argument) {
      if ($("#Movie_sourcetype").val()==5) {
          $("#Movie_sourceurl").parent().hide();
          $("#Movie_sourcefile").parent().show();
      }else{
          $("#Movie_sourceurl").parent().show();
          $("#Movie_sourcefile").parent().hide();
      }
  });
  $("#Source_type").change(function(argument) {
      if ($("#Source_type").val()==5) {
          $("#Source_url").parent().hide();
          $("#Source_file").parent().show();
      }else{
          $("#Source_url").parent().show();
          $("#Source_file").parent().hide();
      }
  });
$("#Movie_trailertype").change(function(argument) {
      if ($("#Movie_trailertype").val()==5) {
          $("#Movie_trailerurl").parent().hide();
          $("#Movie_trailerfile").parent().show();
      }else{
          $("#Movie_trailerurl").parent().show();
          $("#Movie_trailerfile").parent().hide();
      }
  });
$("#Serie_trailertype").change(function(argument) {
      if ($("#Serie_trailertype").val()==5) {
          $("#Serie_trailerurl").parent().hide();
          $("#Serie_trailerfile").parent().show();
      }else{
          $("#Serie_trailerurl").parent().show();
          $("#Serie_trailerfile").parent().hide();
      }
  });
$("#Episode_sourcetype").change(function(argument) {
      if ($("#Episode_sourcetype").val()==5) {
          $("#Episode_sourceurl").parent().hide();
          $("#Episode_sourcefile").parent().show();
      }else{
          $("#Episode_sourceurl").parent().show();
          $("#Episode_sourcefile").parent().hide();
      }
  });
  $("#Slide_type").change(function() {
      if ($("#Slide_type").val()==5) {
        $("#Slide_channel").parent().hide();
        $("#Slide_url").parent().hide();
        $("#Slide_category").parent().hide();
        $("#Slide_poster").parent().hide();
        $("#Slide_genre").parent().show();
      }
      if ($("#Slide_type").val()==4) {
        $("#Slide_channel").parent().hide();
        $("#Slide_url").parent().hide();
        $("#Slide_category").parent().hide();
        $("#Slide_poster").parent().show();
        $("#Slide_genre").parent().hide();
      }
      if ($("#Slide_type").val()==3) {
        $("#Slide_channel").parent().show();
        $("#Slide_url").parent().hide();
        $("#Slide_category").parent().hide();
        $("#Slide_poster").parent().hide();
        $("#Slide_genre").parent().hide();
      }
      if ($("#Slide_type").val()==2) {
        $("#Slide_channel").parent().hide();
        $("#Slide_url").parent().hide();
        $("#Slide_category").parent().show();
        $("#Slide_poster").parent().hide();
        $("#Slide_genre").parent().hide();
      }
      if ($("#Slide_type").val()==1) {
        $("#Slide_channel").parent().hide();
        $("#Slide_url").parent().show();
        $("#Slide_category").parent().hide();
        $("#Slide_poster").parent().hide();
        $("#Slide_genre").parent().hide();
      }
  });
  $(".btn-select-1").click(function () {
      $(".input-file-1").click();
  })
  $(".img-selector-1").change(function(){
      readURLL(this,"#img-preview-1");
  });

  $(".input-btn-3").click(function () {
      $(".input-file-3").click();
  })
});
function readURL(input,pr) {
    if (input.files && input.files[0]) {
    var countFiles = input.files.length;
     var imgPath = input.value;
     var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();

     if (extn == "png" || extn == "jpg" || extn == "jpeg") {
        var reader = new FileReader();
        reader.onload = function (e) {
            $(pr).attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
      }else{
          alert("the image file is not valid please select a valid image file : png,jpg or jpeg");
      }
    }
}


$(function() {
    // Multiple images preview in browser
    var imagesPreview = function(input, placeToInsertImagePreview) {

        if (input.files) {
            var filesAmount = input.files.length;

            for (i = 0; i < filesAmount; i++) {
                var reader = new FileReader();

                reader.onload = function(event) {
                    $($.parseHTML('<img style="width:210px;height:auto;display:inline-block;margin:15px"  class="thumbnail thumbnail-2" />')).attr('src', event.target.result).appendTo(placeToInsertImagePreview);
                }

                reader.readAsDataURL(input.files[i]);
            }
        }

    };

    $('#product_files').on('change', function() {
        imagesPreview(this, 'div.gallery');
    });
    
});
jQuery(function() {
  $(".img-thum-product").click(function() {
    $("#image_product_view").attr({"src":$(this).attr("data")});
    $(".img-thum-product").removeClass("img-thum-product-active");
    $(this).addClass("img-thum-product-active");
  });
    $(".button-file").change(function(){
        readURL(this);
    });
});
function readURL(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('.image-preview').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}


$(function() {
    // Multiple images preview in browser
    var imagesPreview = function(input, placeToInsertImagePreview) {

        if (input.files) {
            var filesAmount = input.files.length;

            for (i = 0; i < filesAmount; i++) {
                var reader = new FileReader();

                reader.onload = function(event) {
                    $($.parseHTML('<img style="width:230px;height:230px;margin:10px;display:inline-block"  class="thumbnail thumbnail-2" >')).attr('src', event.target.result).appendTo(placeToInsertImagePreview);
                }

                reader.readAsDataURL(input.files[i]);
            }
        }

    };

    $('#Wallpaper_files').on('change', function() {
        $("div.gallery").html("");
        imagesPreview(this, 'div.gallery');
    });
    
});
$(document).ready(function () {
  $(".img-selector").change(function(){
      readURLL(this,"#img-preview");
  });
});
function readURLL(input,pr) {
    if (input.files && input.files[0]) {
    var countFiles = input.files.length;
     var imgPath = input.value;
     var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();

     if (extn == "png" || extn == "jpg" || extn == "jpeg" || extn == "gif") {
        var reader = new FileReader();
        reader.onload = function (e) {
            $(pr).attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
      }else{
          alert("the image file is not valid please select a valid image file : png,jpg or jpeg");
      }
    }
}
