var data_stutdowns_india = [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 1, 0, 0, 0, 0, 0, 0, 1, 0];


const value = data_stutdowns_india;
name = "State Name",
    stroke = StateId,
    color = pickcolor;
plot(value, name, color, stroke);


var globalCount=0
function plot(value, name, color, stroke) {
    var svg = '<svg   viewBox="0 0 432 488" id="cvambox">';
    stroke.map((item) => {
        var x = stroke.indexOf(item);
        if(value[x]!==0)
        {
            var y=value[x]+200
        }
        else
        {
            var y=value[x]
        }
        var color_index = Math.floor((y) / 20);
        console.log(color[color_index]);
        svg += '<path class="on-hover-outer" id="' + item[0] + '" d="' + item[1] + '" style="fill:' + color[color_index] + '"><title class="on-hover-inner">' + item[0].replace('_'," ") + " " + value[x] + '</title></path>';
    });
    svg += "</svg>";

    var table = '<table> <tr><th> S.No </th> <th> State </th> <th> Total ShutDown Count </th> </tr>';
    stroke.map((item) => {
              if(data_stutdowns_india[stroke.indexOf(item)]!== undefined)
        {
             globalCount+=data_stutdowns_india[stroke.indexOf(item)]//to count the numbers of shutdowns according to index value of stroke in data
        }
        table += '<tr><td>' + stroke.indexOf(item) + '</td><td>' + item[0] + '</td><td>' + value[stroke.indexOf(item)] + '</td></tr>';
    });
    $('#svg').html(svg);
    $('#table').html(table);
     $('#totalCount').html(globalCount)
    globalCount=0 //to reset the global count after rendering it to the map
}




var image = $('#render-img');
let SR = $('#cvambox path');


function return_back() {
    var back_function = '<i onclick="back()" class="fa fa-arrow-left" style="font-size:24px"></i>';
    $('#back_to_map').html(back_function);

}

function dist_name(dist_name) {
    var name_function = '<h4><kbd>' + dist_name + '</kbd></h4>';
    $('#state-name').html(name_function);
}

function back() {
    location.reload();
    return false;
}