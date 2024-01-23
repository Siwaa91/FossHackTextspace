function renderCurrentlyActiveShutdowns(){
    // Create a new XMLHttpRequest object

const xhr = new XMLHttpRequest();

// Set the request method and URL
xhr.open("GET", "get-active-shutdowns");

// Set the request header
xhr.setRequestHeader("Content-Type", "application/json");

// Define a callback function to handle the response
xhr.onload = function() {
  // Check if the request was successful
  if (xhr.status === 200) {
    // Get the response data and parse it into a JSON response

    const arrayData = JSON.parse(JSON.parse(xhr.response).data);
    let districtsCount = 0;
    let marqueeBody = "";

    arrayData.forEach((arrayItem,index)=>{
        const state = arrayItem.fields.state
    // parsing districts from string of array
        districtsCount += JSON.parse(arrayItem.fields.district.replace(/'/g, "\"")).length;
        const districts = JSON.parse(arrayItem.fields.district.replace(/'/g, "\"")).join(', ')
        if(index < (arrayData.length-1)){
            marqueeBody+=state+" - "+districts+ " | "
        }
        else
        {
           marqueeBody+=state+" - "+districts
        }
    })

    divElement = document.getElementById("active-shutdowns-inner")
    // Check if the array is greater then 5
    if (districtsCount > 5) {
      divElement.innerHTML =  ` <marquee>
       <div class="active-shutdowns-inner-box">
       <p class="active-shutdown-text">Currently active shutdowns - ${marqueeBody}</p>
     </div>
</marquee>`

    }

    else {
        divElement.innerHTML = `     
        <div class="active-shutdowns-inner-box">
          <p class="active-shutdown-text">Currently active shutdowns - ${marqueeBody}</p>
     </div>
        `
    }
  }
};

// Send the request
xhr.send();

}
renderCurrentlyActiveShutdowns()