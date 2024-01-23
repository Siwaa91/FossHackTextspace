function fetchData() {
    try {
        document.getElementById("loader-1").classList.add("loader-active");
        fetch('/get-shutdowns-year')
            .then(response => response.json())
            .then(data => {
                const shutdownStatsInner = document.querySelector('.shutdown-stats-inner');
                shutdownStatsInner.innerHTML = '';

                // Check if the 'msg' property exists in the response
                if (data.msg) {
                    // Convert the data.msg object to an array of entries and reverse it
                    const reversedData = Object.entries(data.msg).reverse();
                    reversedData.forEach(([year, count]) => {
                        const div = document.createElement('div');
                        div.className = 'shutdown-stats-text-blocks';
                        div.innerHTML = `<p class="shutdown-text-upper" id="shutdownCircle${year}">${count}</p>` +
                            `<p class="shutdown-text-lower">${year}</p>`;
                        shutdownStatsInner.appendChild(div);

                        const shutdownCircle = document.getElementById(`shutdownCircle${year}`);
                        if (shutdownCircle) {
                            shutdownCircle.style.background = decideColorsForPath2(count, maxnum);
                        }
                    });
                   document.getElementById("loader-1").classList.remove("loader-active");
                } else {
                    console.error('Invalid response format:', data);
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchData();
