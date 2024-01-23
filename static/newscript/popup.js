function showPopup(){
    // Create a new XMLHttpRequest object

const xhrRequest = new XMLHttpRequest();

// Set the request method and URL
xhrRequest.open("GET", "get-popup");

// Set the request header
xhrRequest.setRequestHeader("Content-Type", "application/json");

// Define a callback function to handle the response
xhrRequest.onload = function() {
  // Check if the request was successful
  if (xhrRequest.status === 200) {
      // Get the response data and parse it into a JSON response

      let arrayData2 = JSON.parse(JSON.parse(xhrRequest.response).msg)[0].fields;

      if (!arrayData2.isDisabled){
   let indexData = `<div class="is-popup" id="is-popup">
            <div class="is-popup-inner">
                <div class="is-popup-row">
                    <div class="popup-close-btn" id="popup-close-btn" onclick="closeIsPopup()">X</div>
                    <div class="popup-header">${arrayData2.header}</div>
                    <div class="popup-inner-row">
                            <div class="popup-col-1" style="background-image:url('https://internetshutdowns.in/media/${arrayData2.uploadThumbnail}');">
                
                        <img src="/static/images/playbtn.png" data-url="${arrayData2.videoLink}"
                             alt="playbtn" class="shutdown-play-btn"
                             onclick="window.open('${arrayData2.videoLink}', '_blank');">
                        </div>
                        <div class="popup-col-2">
                            <div class="popup-col-txt-1">
                               ${arrayData2.description}

                            </div>
                            <div class="popup-col-txt-2"> ${arrayData2.subdescription}</div>
                            <div class="popup-col-btn" onclick="window.open('${arrayData2.link}', '_blank');">
                                    <p>Click
                                    here</p>
                                    <p>Special report pages</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>`

          document.getElementById("popup-div").innerHTML=indexData;
      }
  }
  }

// Send the request
xhrRequest.send();
}

showPopup()

function closeIsPopup(){
      $("#is-popup").fadeOut(500);
}
