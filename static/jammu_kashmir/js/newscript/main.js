document.getElementById("svg").innerHTML = Jammu_And_Kashmir

$(document).on("click", "path", function () {
    if (stateslist[convertToCapsRemoveSpaceAddHypen($(this).attr("id").replace(/_/g, ' '))]) {
        document.getElementById("svg").innerHTML = stateslist[convertToCapsRemoveSpaceAddHypen($(this).attr("id").replace(/_/g, ' '))]
        return_back()
    }
})

    districtwise("Jammu and Kashmir")
    getRecentShutdownStateWise("Jammu and Kashmir")
    // dist_name(id_state.replace(/_/g, ' '));
    setTimeout(function () {
        createLabelsForDistric(data_stutdowns_india, "Jammu_And_Kashmir")
    }, 2000);



setTimeout(function () {
    createLabelsForIndia(data_stutdowns_india)
}, 5000);

function createLabelsForIndia(statevalue) {
    for (key in statevalue) {
        statevalue[key]
        let statename = convertToCapsRemoveSpaceAddHypen(key)
        let fillcolor = decideColorsForPath(statevalue[key])
        // console.log(fillcolor, statename)

        if (statename == "Jammu_And_Kashmir") {
            let fillcolor = decideColorsForPath(statevalue["Jammu and Kashmir"])

            let x = document.querySelectorAll(`#Jammu_and_Kashmir`);

            try {
                x[0].setAttribute('style', `fill: ${fillcolor}!important`);
            } catch (err) {
                console.log(err)

            }
        } else {
            let x = document.querySelectorAll(`#${statename}`);

            try {
                x[0].setAttribute('style', `fill: ${fillcolor}!important`);
            } catch (err) {
                console.log(err)

            }
        }


        let y = convertToCapsRemoveSpace(key)
        try {

            document.querySelectorAll(`#circleIndia23${y}`)[0].setAttribute('style', `fill: ${decideColorsForcircles(statevalue[key])}!important`);
            document.querySelectorAll(`#circleGrpIndia23${y}`)[0].setAttribute('style', `display: block`);
            document.getElementById(`textSpanIndia23${y}`).innerHTML = statevalue[key]
            if (statevalue[key] < 20) {
                document.querySelectorAll(`#textSpanIndia23${y}`)[0].setAttribute('x', `35.198178`);
                $(`#textSpanIndia23${y}`).attr("x", "35.198178")
            }
            if (statevalue[key] > 99) {
                document.querySelectorAll(`#textSpanIndia23${y}`)[0].setAttribute('x', `34.678178`);
                $(`#textSpanIndia23${y}`).attr("x", "34.678178")
                let circler = parseInt($(`#circleIndia23${y}`).attr("r")) + 0.5
                $(`#circleIndia23${y}`).attr("r", circler)
            }

        } catch (err) {
            console.log(err)

        }

        // console.log(decideColorsForcircles(statevalue[key]))


    }
}

function createLabelsForDistric(statevalue, statenamedistrict) {

    for (key in statevalue) {
        statevalue[key]
        // console.log(key)
        // console.log(statenamedistrict)
        let statename = convertToCapsRemoveSpaceAddHypen(key)
        let fillcolor = decideColorsForPath(statevalue[key])
        // console.log(fillcolor, statename)

        try {
               let x = document.querySelectorAll(`#${statename}`);
            x[0].setAttribute('style', `fill: ${fillcolor}!important`);
        } catch (err) {
            console.log(err)

        }

        let y = convertToCapsRemoveSpace(key)
        if(statenamedistrict=="Jammu_and_Kashmir")
        {
            console.log(true)
            statenamedistrict="Jammu_And_Kashmir"
        }
        try {
console.log(`#circle${statenamedistrict}${y}`)
            document.querySelectorAll(`#circle${statenamedistrict}${y}`)[0].setAttribute('style', `fill: ${decideColorsForcircles(statevalue[key])}!important`);
            document.querySelectorAll(`#circleGrp${statenamedistrict}${y}`)[0].setAttribute('style', `display: block`);
            document.getElementById(`textSpan${statenamedistrict}${y}`).innerHTML = statevalue[key]
            if (statevalue[key] < 20) {
                document.querySelectorAll(`#textSpan${statenamedistrict}${y}`)[0].setAttribute('x', `35.198178`);
                $(`#textSpan${statenamedistrict}${y}`).attr("x", "35.198178")
            }
            if (statevalue[key] > 99) {
                document.querySelectorAll(`#textSpan${statenamedistrict}${y}`)[0].setAttribute('x', `34.678178`);
                $(`#textSpan${statenamedistrict}${y}`).attr("x", "34.678178")
                let circler = parseInt($(`#circle${statenamedistrict}${y}`).attr("r")) + 0.5
                $(`#circle${statenamedistrict}${y}`).attr("r", circler)
            }

        } catch (err) {
            console.log(err)

        }

        console.log(decideColorsForcircles(statevalue[key]))


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
    return assignColor([num], maxNum)
}

function decideColorsForcircles(num) {
    if (num >=0 && num <=5 ) {
        return "#ffc53c"
    } else if (num >5 && num <= 10) {
        return "#ff9e3c"
    } else if (num >10) {
        return "#ff7f57"
    }

    // return "#FFC53C"

}

function back() {

    $('#back_to_map').html("");
    document.getElementById("svg").innerHTML = india2
    allstates()
    setTimeout(function () {
        createLabelsForIndia(data_stutdowns_india)
        $('#state-name').html("");
    }, 2000);

}

function return_back() {
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
    // console.log("Hii I am path color ", pathcolor)
    x[0].setAttribute('style', `fill: ${pathcolor}!important`);


})


//script for coloring shutdown circles

function assignColor2(dataArrya, maxNum) {

    let data = dataArrya
    let number = maxNum /10
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

function decideColorsForPath2(num,maxnum) {
    return assignColor2([num], maxnum)
}

 var maxnum = yearWiseData[_.max(Object.keys(yearWiseData), function (o) {
    return yearWiseData[o];
})]
