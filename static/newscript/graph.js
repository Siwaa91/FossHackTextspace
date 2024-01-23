// IIFE to encapsulate the code
//graph for showing hours of shutdowns
(function () {
  // Assuming the API endpoint URL
  var apiUrl = '/get-graph-time/';

  // Fetching data from the API
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Now you have the API response in the 'data' variable
      var apiResponse = data;

      // Extracting data from the API response
      var durationData = apiResponse.duration_data;

      // Generating data for each series
      var under24HoursData = [];
      var between24And72HoursData = [];
      var greaterThan72HoursData = [];
      var infoNotAvailableData = [];
      var categories = [];

      // Loop through the years in reverse order and set default value 0 for "Information Not Available"
      for (var year in durationData) {
        if (durationData.hasOwnProperty(year)) {
          categories.unshift(year); // Add to the beginning of the array (reverse order)
          under24HoursData.unshift(durationData[year].lte_24 || 0);
          between24And72HoursData.unshift(durationData[year].gte_24_lte_72 || 0);
          greaterThan72HoursData.unshift(durationData[year].gte_72 || 0);
          infoNotAvailableData.unshift(durationData[year].none || 0);
        }
      }

      // Creating options for ApexCharts
      var options = {
        series: [
          { name: 'Under 24 Hours', data: under24HoursData },
          { name: 'Hours greater than 24 less than 72', data: between24And72HoursData },
          { name: 'Hours greater than 72', data: greaterThan72HoursData },
          { name: 'Information Not Available', data: infoNotAvailableData }
        ],
        chart: {
          height: 400,
          type: 'area',
          toolbar: { show: false },
          stacked: true
        },
        dataLabels: { enabled: true },
        stroke: { curve: 'smooth' },
        xaxis: { categories: categories },
      };

      // Rendering the chart
      var chart = new ApexCharts(document.querySelector("#area-chart"), options);
      chart.render();

    })
    .catch(error => console.error('Error fetching data from the API:', error));
})();

//graph for showing network type
(function () {
  $.ajax({
    type: 'GET',
    url: "/get-graph-network/",
    success: function (response) {

      // Extracting years and reversing the order
      var years = Object.keys(response.msg).reverse();

      // Generating data arrays for each type of network
      var mobileData = [];
      var broadbandData = [];
      var bothData = [];
      var infoNotAvailableData = [];

      // Loop through each year and populate the data arrays
      for (var i = 0; i < years.length; i++) {
        var year = years[i];
        var yearData = response.msg[year];
        mobileData.push(yearData['mobile'] || 0);
        broadbandData.push(yearData['broad'] || 0);
        bothData.push(yearData['both'] || 0);
        infoNotAvailableData.push(yearData['na'] || 0);
      }

      var options = {
        series: [
          { name: "Mobile", data: mobileData },
          { name: "Broadband", data: broadbandData },
          { name: "Both", data: bothData },
          { name: "Information Not Available", data: infoNotAvailableData }
        ],
        chart: {
          height: 350,
          type: 'line',
          dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
          },
          toolbar: {
            show: false
          }
        },
        colors: ['#77B6EA', '#545454', '#57cd61', '#FF0000'],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: 'smooth'
        },
        grid: {
          borderColor: '#e7e7e7',
          row: {
            colors: ['#f3f3f3', 'transparent'],
            opacity: 0.4
          },
        },
        markers: {
          size: 1
        },
        xaxis: {
          categories: years,
          title: {
            text: 'Years'
          }
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          floating: true,
          offsetY: -25,
          offsetX: -5
        }
      };

      // Render the chart within the IIFE
      // var chart = new ApexCharts(document.querySelector("#line-chart-1"), options);
      // chart.render();

        var chart2 = new ApexCharts(document.querySelector("#line-chart"), options);
      chart2.render();
    },
    error: function (response) {
      console.log("error");
    }
  });
})();

//graph for showing nature of shutdown
(function () {
  $.ajax({
    type: 'GET',
    url: "/get-graph-nature/", // Replace with your actual API endpoint
    success: function (response) {
      var years = Object.keys(response.msg).reverse();
      var preventiveData = [];
      var reactiveData = [];

      for (var i = 0; i < years.length; i++) {
        var year = years[i];
        var yearData = response.msg[year];
        preventiveData.push(yearData.preventive || 0);
        reactiveData.push(yearData.reactive || 0);
      }

      var options = {
        series: [
          { name: "Preventive", data: preventiveData },
          { name: "Reactive", data: reactiveData }
        ],
        chart: {
          type: 'bar',
          height: 430,
          toolbar: {
            show: false
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            dataLabels: {
              position: 'top',
            },
          }
        },
        dataLabels: {
          enabled: false,
          offsetX: -6,
          style: {
            fontSize: '12px',
            colors: ['#fff']
          }
        },
        stroke: {
          show: true,
          width: 1,
          colors: ['#fff']
        },
        xaxis: {
          categories: years,
        },
      };

      var chart = new ApexCharts(document.querySelector("#linec"), options);
      chart.render();
      // var chart2 = new ApexCharts(document.querySelector("#linec2"), options);
      // chart2.render();
    },
    error: function (error) {
      console.error('Error fetching data from the API:', error);
    }
  });
})();

// api call for geting graph details the body and title.
(async function() {
  try {
    const response = await fetch('/get-graphs');
    const data = await response.json();

    const graphData = JSON.parse(data.msg);

    graphData.forEach(graph => {
      const { graphid, title, description } = graph.fields;
      const titleElement = document.getElementById(`graph-${graphid}-title`);
      const descElement = document.getElementById(`graph-${graphid}-desc`);

      if (titleElement && descElement) {
        titleElement.textContent = title;
        descElement.textContent = description;
      }
    });
  } catch (error) {
    console.error('Error fetching or processing data:', error);
  }
})();

