

// Call the function directly, removing the globalCount increment
allstates();

function allstates() {
    document.getElementById("loader-2").classList.add("loader-active");
    $.ajax({
        type: 'GET',
        url: "/getAllShutdowns/",
        success: function (response) {
            var myresponse = JSON.parse(response.msg);
            var data_stutdowns_india = {};

            var table = '<table> <tr><th> S.No </th> <th> State </th> <th> Total ShutDowns</th> </tr>';
            for (let i = 0; i < myresponse.length; i++) {
                // globalCount += myresponse[i].fields.totalNumber;
                if(i ===0){
                    document.getElementById("most-shutdown-name-and-count").innerHTML=myresponse[i].fields.state + " , "+myresponse[i].fields.totalNumber;
                }
                data_stutdowns_india[myresponse[i].fields.state] = myresponse[i].fields.totalNumber;
                table += `<tr><td>${parseInt(i + 1)}</td><td>${myresponse[i].fields.state}</td><td>${myresponse[i].fields.totalNumber}</td></tr>`;
            }
            table += "</table>";

            $('#table').html(table);
            $('#totalCount').html(countTotal(data_stutdowns_india));
            maxNum = data_stutdowns_india[_.max(Object.keys(data_stutdowns_india), o => data_stutdowns_india[o])];
            createLabelsForIndia(data_stutdowns_india);
            $("svg title").html("");

            document.getElementById("loader-2").classList.remove("loader-active");
        },
        error: function (response) {
            alert("error");
        }
    });
}

function countTotal(obj) {
    return Object.values(obj).reduce((acc, val) => acc + parseFloat(val), 0);
}

function districtwise(stateName, id_state) {
    document.getElementById("loader-2").classList.add("loader-active");
    $.ajax({
        type: 'GET',
        url: "/getShutdowns/",
        data: { "state": stateName },
        success: function (response) {
            var myresponse = JSON.parse(response.msg);
            var data_stutdowns_india = {};

            var table = '<table> <tr><th> S.No </th> <th> State </th> <th> Total ShutDowns</th> </tr>';
            for (let i = 0; i < myresponse.length; i++) {
                data_stutdowns_india[myresponse[i].fields.district] = myresponse[i].fields.totalNumber;
                table += `<tr><td>${parseInt(i + 1)}</td><td>${myresponse[i].fields.district}</td><td>${myresponse[i].fields.totalNumber}</td></tr>`;
            }
            table += "</table>";

            $('#table').html(table);
            $('#totalCount').html(response.total);
            maxNum = data_stutdowns_india[_.max(Object.keys(data_stutdowns_india), o => data_stutdowns_india[o])];
            createLabelsForDistric(data_stutdowns_india, id_state);
            $("svg title").html("");
            document.getElementById("loader-2").classList.remove("loader-active");
        },
        error: function (response) {
            alert("error");
        }
    });
}

function createDate(date) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    return new Date(date).getDate() + "-" + months[new Date(date).getMonth()] + "-" + new Date(date).getFullYear();
}

function truncateString(title) {
    return jQuery.trim(title).substring(0, 100).split(" ").slice(0, -1).join(" ") + "...";
}

function getRecentShutdownStateWise(state) {
    $.ajax({
        type: 'GET',
        url: "/getStateWise/",
        data: { "state": state },
        success: function (response) {
            const myresponse = JSON.parse(response.msg);
            const renderTo = document.getElementById("render-recent-shutdown");
            renderTo.innerHTML = "";
            for (let i = 0; i < myresponse.length; i++) {
                const date = createDate(myresponse[i].fields.publishedDate);
                const description = truncateString(myresponse[i].fields.description);

                let temp_district_string = "";
                try {
                    const temp_districts = JSON.parse(myresponse[i].fields.district.replaceAll("'", '"'));
                    temp_district_string = temp_districts.map(item => item).join(", ");
                } catch (err) {
                    temp_district_string = myresponse[i].fields.district;
                }

                const renderData = `<div class="recent-shutdown-card">
                    <div class="recent-shutdown-card-date">${date}</div>
                    <div class="recent-shutdown-card-body">${description}</div>
                    <div class="recent-shutdown-card-source">Source: <i><a href="${myresponse[i].fields.source}">${temp_district_string} </a></i>- <b>${myresponse[i].fields.state}</b></div>
                </div>`;

                renderTo.innerHTML += renderData;
            }
        },
        error: function (response) {
            alert("error");
        }
    });
}


function findStateOriginalName(result) {
    let statesArray = ["Andhra Pradesh", "Arunachal Pradesh", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana",
          "Himachal Pradesh", "Jharkhand", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
          "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman Nicobar", "Chandigarh",
          "Daman and Diu", "Dadra and Nagar Haveli", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "NCT of Delhi",
          "Puducherry", "Assam", "Maharashtra", "Madhya Pradesh", "Meghalaya", "Karnataka", "Manipur"]
    result = result.replace(/\s|_/g, '').toLowerCase();
    for (let state of statesArray) {
        const stateWithoutSpaces = state.replace(/\s|_/g, '').toLowerCase();
        if (result === stateWithoutSpaces) {
            return state;
        }
    }
    return "State not found";
}

function labelIndiaClicked() {
    renderDistrict(findStateOriginalName(this.id.split("23")[1]));
}

function circleIndiaClicked() {
    renderDistrict(findStateOriginalName(this.id.split("23")[1]));
}

function textSpanIndiaClicked() {
    renderDistrict(findStateOriginalName(this.id.split("23")[1]));
}
