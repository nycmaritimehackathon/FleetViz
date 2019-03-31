// ##############################
// // // Chart variables
// #############################

// chartExample1 and chartExample2 options
let chart1_2_options = {
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  tooltips: {
    backgroundColor: '#f5f5f5',
    titleFontColor: '#333',
    bodyFontColor: '#666',
    bodySpacing: 4,
    xPadding: 12,
    mode: 'nearest',
    intersect: 0,
    position: 'nearest',
  },
  responsive: true,
  scales: {
    yAxes: [
      {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: 'rgba(29,140,248,0.0)',
          zeroLineColor: 'transparent',
        },
        ticks: {
          suggestedMin: 60,
          suggestedMax: 125,
          padding: 20,
          fontColor: '#9a9a9a',
        },
      },
    ],
    xAxes: [
      {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: 'rgba(29,140,248,0.1)',
          zeroLineColor: 'transparent',
        },
        ticks: {
          padding: 20,
          fontColor: '#9a9a9a',
        },
      },
    ],
  },
};

let cargoChart = {
    data: {
      labels: ["TEU Full", "TEU Empty", "Reefers"],
      datasets: [
        {
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          borderColor: "rgba(0,0,0,0)",
          data: [1277, 17, 128]
        }
      ]
    },
    options: {
      circumference: 1 * Math.PI,
      rotation: 1 * Math.PI
    }
}

let weatherChart = {
  data1: canvas => {
    let ctx = canvas.getContext('2d');

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
    gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
    gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors

    return {
      labels: [
        '12.03.2019 23:30',
        '13.03.2019 02:43',
        '13.03.2019 16:00',
        '14.03.2019 00:01',
        '14.03.2019 02:30',
        '14.03.2019 13:00',
        '15.03.2019 01:00',
        '15.03.2019 16:00',
        '16.03.2019 17:00',
        '17.03.2019 11:01',
        '17.03.2019 13:30',
        '18.03.2019 02:19',
        '18.03.2019 03:30',
        '18.03.2019 17:00',
      ],
      datasets: [
        {
          label: 'Douglas Sea State',
          fill: true,
          backgroundColor: gradientStroke,
          hoverBackgroundColor: gradientStroke,
          borderColor: '#00FA9A',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          data: [4, 4, null, null, 3, 3, 3, 3, null, null, 4, 4, 4, null],
        },
      ],
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      backgroundColor: '#f5f5f5',
      titleFontColor: '#333',
      bodyFontColor: '#666',
      bodySpacing: 4,
      xPadding: 12,
      mode: 'nearest',
      intersect: 0,
      position: 'nearest',
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: 'rgba(225,78,202,0.1)',
            zeroLineColor: 'transparent',
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 9,
            padding: 20,
            fontColor: '#9e9e9e',
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: 'rgba(225,78,202,0.1)',
            zeroLineColor: 'transparent',
          },
          ticks: {
            padding: 20,
            fontColor: '#9e9e9e',
          },
        },
      ],
    },
  },
  data2: canvas => {
    let ctx = canvas.getContext('2d');

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
    gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
    gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors

    return {
      labels: [
        '12.03.2019 23:30',
        '13.03.2019 02:43',
        '13.03.2019 16:00',
        '14.03.2019 00:01',
        '14.03.2019 02:30',
        '14.03.2019 13:00',
        '15.03.2019 01:00',
        '15.03.2019 16:00',
        '16.03.2019 17:00',
        '17.03.2019 11:01',
        '17.03.2019 13:30',
        '18.03.2019 02:19',
        '18.03.2019 03:30',
        '18.03.2019 17:00',
      ],
      datasets: [
        {
          label: 'Wind Speed',
          fill: true,
          backgroundColor: gradientStroke,
          hoverBackgroundColor: gradientStroke,
          borderColor: '#00FA9A',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          data: [null,6,13.3,8.9,null,null,7.1,14,9.4,6,null,null,8.1,8],
        },
      ],
    };
  },
};

// #########################################
// // // used inside src/views/Dashboard.jsx
// #########################################
let chartExample1 = {
  data1: canvas => {
    let ctx = canvas.getContext('2d');

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(29,140,248,0.2)');
    gradientStroke.addColorStop(0.4, 'rgba(29,140,248,0.0)');
    gradientStroke.addColorStop(0, 'rgba(29,140,248,0)'); //blue colors

    return {
      labels: [
        '12.03.2019 23:30',
        '13.03.2019 02:43',
        '13.03.2019 16:00',
        '14.03.2019 00:01',
        '14.03.2019 02:30',
        '14.03.2019 13:00',
        '15.03.2019 01:00',
        '15.03.2019 16:00',
        '16.03.2019 17:00',
        '17.03.2019 11:01',
        '17.03.2019 13:30',
        '18.03.2019 02:19',
        '18.03.2019 03:30',
        '18.03.2019 17:00',
      ],
      datasets: [
        {
          label: 'SFOC ME',
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: '#1f8ef1',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#1f8ef1',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#1f8ef1',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [
            null,
            195.3,
            192.5,
            189.7,
            151,
            null,
            206.1,
            200.9,
            200.7,
            204.3,
            203.2,
            null,
            216.8,
            206.5,
          ],
        },
      ],
    };
  },
  data2: canvas => {
    let ctx = canvas.getContext('2d');

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(29,140,248,0.2)');
    gradientStroke.addColorStop(0.4, 'rgba(29,140,248,0.0)');
    gradientStroke.addColorStop(0, 'rgba(29,140,248,0)'); //blue colors

    return {
      labels: [
        '12.03.2019 23:30',
        '13.03.2019 02:43',
        '13.03.2019 16:00',
        '14.03.2019 00:01',
        '14.03.2019 02:30',
        '14.03.2019 13:00',
        '15.03.2019 01:00',
        '15.03.2019 16:00',
        '16.03.2019 17:00',
        '17.03.2019 11:01',
        '17.03.2019 13:30',
        '18.03.2019 02:19',
        '18.03.2019 03:30',
        '18.03.2019 17:00',
      ],
      datasets: [
        {
          label: 'SFOC AE',
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: '#1f8ef1',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#1f8ef1',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#1f8ef1',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [
            226.8,
            241.1,
            223.2,
            225.5,
            221.5,
            228.2,
            245.5,
            232.5,
            228.9,
            230.5,
            243.1,
            244,
            249.1,
            223.2,
          ],
        },
      ],
    };
  },
  data3: canvas => {
    let ctx = canvas.getContext('2d');

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(29,140,248,0.2)');
    gradientStroke.addColorStop(0.4, 'rgba(29,140,248,0.0)');
    gradientStroke.addColorStop(0, 'rgba(29,140,248,0)'); //blue colors

    return {
      labels: [
        'JAN',
        'FEB',
        'MAR',
        'APR',
        'MAY',
        'JUN',
        'JUL',
        'AUG',
        'SEP',
        'OCT',
        'NOV',
        'DEC',
      ],
      datasets: [
        {
          label: 'My First dataset',
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: '#1f8ef1',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#1f8ef1',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#1f8ef1',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130],
        },
      ],
    };
  },
  options: chart1_2_options,
};

// #########################################
// // // used inside src/views/Dashboard.jsx
// #########################################
let chartExample2 = {
  data: canvas => {
    let ctx = canvas.getContext('2d');

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(178,34,34,0.2)');
    gradientStroke.addColorStop(0.4, 'rgba(178,34,34,0.0)');
    gradientStroke.addColorStop(0, 'rgba(178,34,34,0)'); //blue colors

    return {
      labels: [
        '12.03.2019 23:30',
        '13.03.2019 02:43',
        '13.03.2019 16:00',
        '14.03.2019 00:01',
        '14.03.2019 02:30',
        '14.03.2019 13:00',
        '15.03.2019 01:00',
        '15.03.2019 16:00',
        '16.03.2019 17:00',
        '17.03.2019 11:01',
        '17.03.2019 13:30',
        '18.03.2019 02:19',
        '18.03.2019 03:30',
        '18.03.2019 17:00',
      ],
      datasets: [
        {
          label: 'HFO ROB',
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: '#CD5C5C',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#CD5C5C',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#1f8ef1',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [
            2773.8,
            2768.7,
            2705.9,
            2667.8,
            2665.3,
            2659.7,
            2650.7,
            2574.2,
            2448.1,
            2376.5,
            2372.9,
            2365.4,
            2364.1,
            2344.99,
          ],
        },
      ],
    };
  },
  options: chart1_2_options,
};

// #########################################
// // // used inside src/views/Dashboard.jsx
// #########################################
let chartExample3 = {
  data: canvas => {
    let ctx = canvas.getContext('2d');

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(210,105,30,0.2)');
    gradientStroke.addColorStop(0.4, 'rgba(210,105,30,0.0)');
    gradientStroke.addColorStop(0, 'rgba(210,105,30,0)'); //blue colors

    return {
      labels: [
        '12.03.2019 23:30',
        '13.03.2019 02:43',
        '13.03.2019 16:00',
        '14.03.2019 00:01',
        '14.03.2019 02:30',
        '14.03.2019 13:00',
        '15.03.2019 01:00',
        '15.03.2019 16:00',
        '16.03.2019 17:00',
        '17.03.2019 11:01',
        '17.03.2019 13:30',
        '18.03.2019 02:19',
        '18.03.2019 03:30',
        '18.03.2019 17:00',
      ],
      datasets: [
        {
          label: 'MGO ROB',
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: '#FF4500',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#FF4500',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#1f8ef1',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [
            449.93,
            444.83,
            382.01,
            343.97,
            341.44,
            335.85,
            328.67,
            328.67,
            328.67,
            328.67,
            328.67,
            328.67,
            328.67,
            328.67,
            328.67,
          ],
        },
      ],
    };
  },
  options: chart1_2_options,
};

// #########################################
// // // used inside src/views/Dashboard.jsx
// #########################################
const chartExample4 = {
  data: canvas => {
    let ctx = canvas.getContext('2d');

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');
    gradientStroke.addColorStop(0.4, 'rgba(66,134,121,0.0)'); //green colors
    gradientStroke.addColorStop(0, 'rgba(66,134,121,0)'); //green colors

    return {
      labels: [
        '12.03.2019 23:30',
        '13.03.2019 02:43',
        '13.03.2019 16:00',
        '14.03.2019 00:01',
        '14.03.2019 02:30',
        '14.03.2019 13:00',
        '15.03.2019 01:00',
        '15.03.2019 16:00',
        '16.03.2019 17:00',
        '17.03.2019 11:01',
        '17.03.2019 13:30',
        '18.03.2019 02:19',
        '18.03.2019 03:30',
        '18.03.2019 17:00',
      ],
      datasets: [
        {
          label: 'My First dataset',
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: '#00d6b4',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#00d6b4',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#00d6b4',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [
            57685,
            57685,
            57685,
            57685,
            57685,
            57685,
            57685,
            57685,
            56055,
            56055,
            56055,
            56055,
            56055,
            56055,
          ],
        },
      ],
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },

    tooltips: {
      backgroundColor: '#f5f5f5',
      titleFontColor: '#333',
      bodyFontColor: '#666',
      bodySpacing: 4,
      xPadding: 12,
      mode: 'nearest',
      intersect: 0,
      position: 'nearest',
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: 'transparent',
          },
          ticks: {
            suggestedMin: 50,
            suggestedMax: 125,
            padding: 20,
            fontColor: '#9e9e9e',
          },
        },
      ],

      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(0,242,195,0.1)',
            zeroLineColor: 'transparent',
          },
          ticks: {
            padding: 20,
            fontColor: '#9e9e9e',
          },
        },
      ],
    },
  },
};

module.exports = {
  chartExample1, // in src/views/Dashboard.jsx
  chartExample2, // in src/views/Dashboard.jsx
  chartExample3, // in src/views/Dashboard.jsx
  chartExample4, // in src/views/Dashboard.jsx
  weatherChart,
  cargoChart
};
