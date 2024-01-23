//The function to render trending videos in html body
function renderTrendingVideos(trendingVideos) {

    //initializing the container for trendingVideos section.
    let container = document.getElementById('trendingVideosContainer');

    //starting for loop for iterating response array through api using apiCallForTrendingVideos()
    for (let i = 0; i < trendingVideos.length; i++) {

      //I have set 2 if conditions for example if the current index is 0 then it will create first block of layout with
      //one big container and
      //for the second index it will create two small containers within a same size as first container

      //condition 0 for one big container
        if (i === 0) {
            container.innerHTML += `
                  <div class="fifth-col-2-row-1"
                       style="background-image: url('https://internetshutdowns.in/media/${trendingVideos[i].fields.uploadThumbnail}');">
                    <div class="fifth-col-2-row-1-txt">${trendingVideos[i].fields.videoTitle}</div>
                    <img src="static/images/playbtn.png" alt="playbutton"
                         onclick="window.open('${trendingVideos[i].fields.videoLink}', '_blank');"
                         data-url="${trendingVideos[i].fields.videoLink}"
                         class="video-play-btn-img">
                  </div>
                  
                  <div class="fifth-col-2-row-2" id="fifth-col-2-row-2"> </div>
                `;
            container = document.getElementById("fifth-col-2-row-2");
        }
        //second condition for two small containers within a big container
        else if (i === 1 || i === 2) {
            container.innerHTML += `
        <div class="fifth-col-2-row-2-col-1"
             style="background-image: url('https://internetshutdowns.in/media/${trendingVideos[i].fields.uploadThumbnail}')">
          <div class="fifth-col-2-row-2-txt">${trendingVideos[i].fields.videoTitle}</div>
          <img src="static/images/playbtn.png" alt="playbutton"
               onclick="window open('${trendingVideos[i].fields.videoLink}', '_blank');"
               data-url="${trendingVideos[i].fields.videoLink}"
               class="video-play-btn-img">
        </div>
    `;
        }
    }

}


//function to create api call and getting array as a response for trending videos section.
function apiCallForTrendingVideos() {
    const xhr = new XMLHttpRequest();

// Set the request method and URL
    xhr.open("GET", "get-trending-videos");

// Set the request header
    xhr.setRequestHeader("Content-Type", "application/json");

// Define a callback function to handle the response
    xhr.onload = function () {
        // Check if the request was successful
        if (xhr.status === 200) {
            // Get the response data and parse it into a JSON response

            const arrayData = JSON.parse(JSON.parse(xhr.response).data);

            //calling renderTrendingVideos() function to render the section with response data

            renderTrendingVideos(arrayData)

        }
    };

// Send the request
    xhr.send();
}

apiCallForTrendingVideos()

