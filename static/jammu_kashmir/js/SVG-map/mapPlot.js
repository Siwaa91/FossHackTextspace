var globalCount=0

name = "State Name",
    stroke = StateId,
    color = pickcolor;
// allstates()

var totalglobalsum
var data_stutdowns_india=""
function allstates(){
    $.ajax({
              type: 'GET',
              url: "/getAllShutdowns/",
              data : {"order":"desc","per_page":"6"},
                  success: function (response) {

                  var myresponse=JSON.parse(response.msg)
                  data_stutdowns_india={}

                     var table = '<table> <tr><th> S.No </th> <th> State </th> <th> Total ShutDowns</th> </tr>';
                  for (let i = 0; i <myresponse.length ; i++) {
                      globalCount+=myresponse[i].fields.totalNumber
                      data_stutdowns_india[ myresponse[i].fields.state]=myresponse[i].fields.totalNumber
                      table += '<tr><td>' + parseInt(i+1) + '</td><td>' + myresponse[i].fields.state + '</td><td>' + myresponse[i].fields.totalNumber + '</td></tr>';
                  }
                  table+="</table>"

                   $('#table').html(table);
                        $('#totalCount').html(globalCount)
                      totalglobalsum=countTotal(data_stutdowns_india)
                      globalCount=0
                  plot(data_stutdowns_india,name,color,stroke)
                      maxNum = data_stutdowns_india[_.max(Object.keys(data_stutdowns_india), function (o) {
    return data_stutdowns_india[o];
})]


              },
              error: function (response)
              {

               alert("error")
              }
          })
}

function countTotal(obj) {
    let sum = 0;
  for( var el in obj ) {
    if( obj.hasOwnProperty( el ) ) {
      sum += parseFloat( obj[el] );
    }
  }
  return sum;
}

var maxNum
var globalname
// districtwise("Jammu and Kashmir")
function districtwise(stateName){
       $.ajax({
              type: 'GET',
              url: "/getShutdowns/",
              data : {"state":stateName},
                  success: function (response) {
                  // console.log("success")
                  var myresponse=JSON.parse(response.msg)
                  // globalname=response
                  //     console.log(globalname)
                  data_stutdowns_india={}
                  // console.log("check 1")
                     var table = '<table> <tr><th> S.No </th> <th> State </th> <th> Total ShutDowns</th> </tr>';
                  for (let i = 0; i <myresponse.length ; i++) {
                      // globalCount+=myresponse[i].fields.totalNumber
                      data_stutdowns_india[ myresponse[i].fields.district]=myresponse[i].fields.totalNumber
                      table += '<tr><td>' + parseInt(i+1) + '</td><td>' + myresponse[i].fields.district + '</td><td>' + myresponse[i].fields.totalNumber + '</td></tr>';
                  }
                  table+="</table>"

                   $('#table').html(table);
                  $('#totalCount').html(response.total)
                      console.log(response.total)
                      globalCount=0
                  // console.log("stroke",strok)
                  // plot(data_stutdowns_india,name,color,strok)
                      console.log("finished-2")
                      totalglobalsum=countTotal(data_stutdowns_india)
                      maxNum = data_stutdowns_india[_.max(Object.keys(data_stutdowns_india), function (o) {
    return data_stutdowns_india[o];
})]

              },
              error: function (response)
              {

               alert("error")
              }
          })
}

function createDate(date)
{
    var month = new Array();
month[0] = "Jan";
month[1] = "Feb";
month[2] = "Mar";
month[3] = "Apr";
month[4] = "May";
month[5] = "Jun";
month[6] = "Jul";
month[7] = "Aug";
month[8] = "Sept";
month[9] = "Oct";
month[10] = "Nov";
month[11] = "Dec";

  var date =new Date(Date.parse(date)).getDate().toString()+"-"+month[new Date(Date.parse(date)).getMonth().toString()]+"-"+new Date(Date.parse(date)).getFullYear().toString()
    return date
}

function truncateString(title)
{
    var shortText=jQuery.trim(title).substring(0, 100)
    .split(" ").slice(0, -1).join(" ") + "...";
    return shortText
}

function getRecentShutdownStateWise(state)
{
             $.ajax({
              type: 'GET',
              url: "/getStateWise/",
              data : {"state":state},
              success: function (response) {
                  console.log("success")

                   let myresponse=JSON.parse(response.msg)
                  var renderTo=document.getElementById("render-recent-shutdown")
                  renderTo.innerHTML=""
                  for (let i = 0; i <myresponse.length ; i++) {
                     var date=createDate(myresponse[i].fields.publishedDate)
                      var description=truncateString(myresponse[i].fields.description)
                      console.log("success1")
                      var renderData=`<div class="recent-shutdown-card">
                                    <div class="recent-shutdown-card-date">${date}</div>
                                    <div class="recent-shutdown-card-body">${description}</div>
                                    <div class="recent-shutdown-card-source">Source: <i><a href="${myresponse[i].fields.source}">${myresponse[i].fields.district}, ${myresponse[i].fields.state}</a></i></div>
                                </div>`
                      renderTo.innerHTML+=renderData
                  }

              },
              error: function (response)
              {

               alert("error")
              }
          })
}

var myvar=[]

function plot(value,name, color, stroke) {
    var svg = '<svg   viewBox="0 0 432 488" id="cvambox">';
    // console.log(stroke ,"stroke 2")
    stroke.map((item) => {
        var myitem

        if (item[0].replace(/_/g, ' ') in value) {
    myitem=value[item[0].replace(/_/g, ' ')]
} else {
  myitem=0
}
        var x = stroke.indexOf(item);
        var color_index = Math.floor(+(myitem) / 50);
        myvar.push(item[0].replace(/_/g, ' '))

        svg += '<path id="' + item[0] + '" d="' + item[1] + '" style="fill:' + color[color_index] + '"><title>' + item[0].replace(/_/g, ' ') + " " + myitem + '</title></path>';
    });
    svg += "</svg>";

    // $('#svg').html(svg);

}


var image = $('#render-img');

$(document).on("click", "#cvambox path", function(){

    const id_state = $(this).attr('id');
    let stateName=$(this).attr('id').replace(/_/g, ' ')
    console.log("check 2.1", id_state)
    stroke_dist = id_state + "_dist";
    var dist = eval(stroke_dist);
    return_back();
    // plot(value, name, color, dist);
    districtwise(dist,stateName)
    getRecentShutdownStateWise(stateName)
    dist_name(id_state.replace(/_/g, ' '));
    dist_value(value)
})

function return_back() {
    var back_function = '<i onclick="back()" class="fa fa-arrow-left" style="font-size:24px"></i>';
    $('#back_to_map').html(back_function);
     $("#hidden-video-container").fadeIn(300);
    $("#hidden-video-spacing").fadeIn(300);
    $("#hide-shutdown-spacing").fadeOut(300);
    $("#hide-shutdown-heading").fadeOut(300);
    $("#hide-shutdown-spacing-2").fadeOut(300);
    $("#hide-shutdown-container").fadeOut(300);
}

function dist_name(dist_name) {
    var name_function = '<h4>' + dist_name + '</h4>';
    $('#state-name').html(name_function);
}

function back() {
    // location.reload();
    allstates()
     $('#back_to_map').html("");
    $("#hide-shutdown-spacing").fadeIn(300);
    $("#hide-shutdown-heading").fadeIn(300);
    $("#hide-shutdown-spacing-2").fadeIn(300);
    $("#hide-shutdown-container").fadeIn(300);
     $('#state-name').html("");

}