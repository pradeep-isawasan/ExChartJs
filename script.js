// Labels along x-axis
var date = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];

// For drawing the lines
var confirmed = [566, 673, 790, 900, 1030, 1183, 1306, 1518, 1624, 1796, 2031];
var recovered = [42, 49, 60, 75, 87, 114, 139, 139, 183, 199, 215];
var death = [0, 2, 2, 200, 3, 4, 10, 14, 16, 20, 23];

var ctx = document.getElementById("mychart");

var mychart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: date,
        datasets: [
            {
                data: confirmed,
                label: "Confirmed Cases",
                borderColor: "#4933FF",
                fill: false 
            },
            {
                data: recovered,
                label: "Recovered Cases",
                borderColor: "#00FF0C",
                fill: false  
            },
            {
                data: death,
                label: "Death Cases",
                borderColor: "#EDFC00",
                fill: false    
            }
        ]
        }
    });