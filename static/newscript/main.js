document.getElementById("svg").innerHTML = india2

function renderDistrict(id){
         if (stateslist[convertToCapsRemoveSpaceAddHypen(id.replace(/_/g, ' '))]) {
         const id_state = convertToCapsRemoveSpaceAddHypen(id.replace(/_/g, ' '));
        document.getElementById("svg").innerHTML = stateslist[id_state]
        $("#totalCount").html("")
        let stateName = id.replace(/_/g, ' ')
        stroke_dist = id_state + "_dist";
        return_back();
        districtwise(stateName, id_state)
        getRecentShutdownStateWise(stateName)
        dist_name(id_state.replace(/_/g, ' '));
    }
}

//added code for rendering state name on top right corner of the map

function dist_name(dist_name) {
    var name_function = '<h4>' + dist_name + '</h4>';
    $('#state-name').html(name_function);
}
$(document).on("click", "path", function () {
    renderDistrict($(this).attr("id"))
})

function createLabelsForIndia(statevalue) {
    for (const [key, value] of Object.entries(statevalue)) {
        const statename = convertToCapsRemoveSpaceAddHypen(key);
        let fillcolor = decideColorsForPath(value);

        try {
            let x;
            if (statename === "Jammu_And_Kashmir") {
                x = document.querySelectorAll(`#Jammu_and_Kashmir`);
                fillcolor = decideColorsForPath(statevalue["Jammu and Kashmir"]);
            } else if (statename === "NCT_Of_Delhi") {
                x = document.querySelectorAll(`#NCT_of_Delhi`);
                fillcolor = decideColorsForPath(statevalue["NCT of Delhi"]);
            } else {
                x = document.querySelectorAll(`#${statename}`);
            }

            x[0].setAttribute('style', `fill: ${fillcolor}!important`);
        } catch (err) {
            console.log(err);
        }

        let y = convertToCapsRemoveSpace(key);
        if (y === "NCTOfDelhi") {
            y = "NCTofDelhi";
        }

        try {
            const circleId = `circleIndia23${y}`;
            const circleGrpId = `circleGrpIndia23${y}`;
            const textSpanId = `textSpanIndia23${y}`;

            document.querySelectorAll(`#${circleId}`)[0].setAttribute('style', `fill: ${decideColorsForcircles(value)}!important`);
            document.querySelectorAll(`#${circleGrpId}`)[0].setAttribute('style', `display: block`);
            document.getElementById(textSpanId).innerHTML = value;

            if (value < 20) {
                document.querySelectorAll(`#${textSpanId}`)[0].setAttribute('x', `35.198178`);
                $(`#${textSpanId}`).attr("x", "35.198178");
            }

            if (value > 99) {
                document.querySelectorAll(`#${textSpanId}`)[0].setAttribute('x', `34.678178`);
                $(`#${textSpanId}`).attr("x", "34.678178");
                let circler = parseInt($(`#${circleId}`).attr("r")) + 0.5;
                $(`#${circleId}`).attr("r", circler);
            }
        } catch (err) {
            console.log(err);
        }
    }
}

function createLabelsForDistric(statevalue, statenamedistrict) {
    for (const [key, value] of Object.entries(statevalue)) {
        const statename = convertToCapsRemoveSpaceAddHypen(key);
        const fillcolor = decideColorsForPath(value);

        try {
            const x = document.querySelectorAll(`#${statename}`);
            x[0].setAttribute('style', `fill: ${fillcolor}!important`);

        } catch (err) {

        }

        let y = convertToCapsRemoveSpace(key);
        if (statenamedistrict === "Jammu_and_Kashmir") {
            statenamedistrict = "Jammu_And_Kashmir";
        }

        try {
            const circleId = `circle${statenamedistrict}${y}`;
            const circleGrpId = `circleGrp${statenamedistrict}${y}`;
            const textSpanId = `textSpan${statenamedistrict}${y}`;

            document.querySelectorAll(`#${circleId}`)[0].setAttribute('style', `fill: ${decideColorsForcircles(value)}!important`);
            document.querySelectorAll(`#${circleGrpId}`)[0].setAttribute('style', `display: block`);
            document.getElementById(textSpanId).innerHTML = value;

            if (value < 20) {
                document.querySelectorAll(`#${textSpanId}`)[0].setAttribute('x', `35.198178`);
                $(`#${textSpanId}`).attr("x", "35.198178");
            }

            if (value > 99) {
                document.querySelectorAll(`#${textSpanId}`)[0].setAttribute('x', `34.678178`);
                $(`#${textSpanId}`).attr("x", "34.678178");
                let circler = parseInt($(`#${circleId}`).attr("r")) + 0.5;
                $(`#${circleId}`).attr("r", circler);
            }
        } catch (err) {
            // console.log(err);
        }
    }
}

function convertToCapsRemoveSpace(val) {
    let output = val.replace(/\w+/g, function (txt) {
        // uppercase first letter and add rest unchanged
        return txt.charAt(0).toUpperCase() + txt.substr(1);
    }).replace(/\s/g, '');// remove any spaces
    return output

}

function convertToCapsRemoveSpaceAddHypen(val) {
    let output = val.replace(/\w+/g, function (txt) {
        // uppercase first letter and add rest unchanged
        return txt.charAt(0).toUpperCase() + txt.substr(1);
    }).replace(/\s/g, '_');// remove any spaces
    return output

}


//function for calculating colors vlaues..
//dataArray takes a number of shutdown in form of array ex:- [1]
//maxNum takes number of max shutdown in partucular array

function assignColor(dataArrya, maxNum) {

    let data = dataArrya
    let number = maxNum / 20
    let emptyarray = []
    let lastValue = 0

    //here we are distributing values in equal parts and pushing it to
    //the empty array like 228/20 = 11.4 so arrya will be [11.4,22.8 and so on]
    for (let index = 0; index < 20; index++) {
        lastValue += number
        emptyarray.push(lastValue)
    }
    //for loop for checking values in data array always give only one value
    // so that it can return single value
    for (let i = 0; i < data.length; i++) {
        var tempNum = data[i]

        for (let j = 0; j < emptyarray.length; j++) {
            if (j == 0) {
                if (tempNum <= emptyarray[j]) {
                    return pickcolor[j]
                }
            } else {

                if (tempNum >= emptyarray[j - 1] && tempNum <= emptyarray[j + 1]) {
                    return pickcolor[j]

                }

            }

        }

    }

}


function decideColorsForPath(num) {
    if (num == maxNum) {
        return pickcolor[18]
    } else {
        return assignColor([num], maxNum)
    }
}

function decideColorsForcircles(num) {
    if (num >= 0 && num <= 5) {
        return "#ffc53c"
    } else if (num > 5 && num <= 10) {
        return "#ff9e3c"
    } else if (num > 10) {
        return "#ff7f57"
    }

    // return "#FFC53C"

}

function back() {
    //hiding state name on clicking back button
    $('#state-name').html("");

    //showing india name on india map
    $("#india-active").show()

    //to set the count to zero
    $("#totalCount").html("")

    //hiding back button
    $('#back_to_map').html("");

    document.getElementById("svg").innerHTML = india2
    allstates()

}

function return_back() {
    $("#india-active").hide(100)
    var back_function = '<i onclick="back()" class="fa fa-arrow-left" style="font-size:24px"></i>';
    $('#back_to_map').html(back_function);
}

var pathcolor = ""
var pathid = ""

$(document).on("mouseover", "path", function () {
    pathid = "#" + $(this).attr("id")
    pathcolor = $(pathid).css("fill");
    let x = document.querySelectorAll(pathid);
    x[0].setAttribute('style', `fill: #7088ff!important`);
})

$(document).on("mouseout", "path", function () {
    let x = document.querySelectorAll(pathid);
    x[0].setAttribute('style', `fill: ${pathcolor}!important`);
})


//script for coloring shutdown circles

function assignColor2(dataArrya, maxNum) {

    let data = dataArrya
    let number = maxNum / 10
    let emptyarray = []
    let lastValue = 0

    //here we are distributing values in equal parts and pushing it to
    //the empty array like 228/20 = 11.4 so arrya will be [11.4,22.8 and so on]
    for (let index = 0; index < 10; index++) {
        lastValue += number
        emptyarray.push(lastValue)
    }

    //for loop for checking values in data array always give only one value
    // so that it can return single value
    for (let i = 0; i < data.length; i++) {
        var tempNum = data[i]

        for (let j = 0; j < emptyarray.length; j++) {
            if (j == 0) {
                if (tempNum <= emptyarray[j]) {
                    return pickcolor2[j]
                }
            } else {

                if (tempNum >= emptyarray[j - 1] && tempNum <= emptyarray[j + 1]) {
                    return pickcolor2[j]

                }

            }

        }

    }

}

function decideColorsForPath2(num, maxnum) {
    return assignColor2([num], maxnum)
}

var maxnum = yearWiseData[_.max(Object.keys(yearWiseData), function (o) {
    return yearWiseData[o];
})]

for (key in yearWiseData) {
    // console.log(`shutdownCircle${key}`)
    document.getElementById('shutdownCircle' + key).style.background = decideColorsForPath2(yearWiseData[key], maxnum)
}


//map plot

