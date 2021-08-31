fetch("./Output/authorized_cap.json")
  .then((response) => response.json())
  .then((data) => {
    let result = Object.entries(data);

    Highcharts.chart("chart1", {
      chart: {
        type: "column",
      },
      title: {
        text: "Histogram of Authorized Cap",
        style: {
          fontFamily: 'sans-serif',
          fontSize:'20px',
          color:'red'
        },
      },
      subtitle: {
        text: 'Source: <a href="https://data.gov.in/catalog/company-master-data?filters%5Bfield_catalog_reference%5D=354261&format=json&offset=12&limit=6&sort%5Bcreated%5D=desc">data.gov.in</a>',
      },
      xAxis: {
        type: "category",
        title: {
          text: "intervals",
          style: {
            fontFamily: 'sans-serif',
            fontSize:'15px',
            fontStyle: 'italic',
            color:'blue'
          },
        },
        labels: {
          rotation: -45,
          style: {
            fontSize: "13px",
            fontFamily: "Verdana, sans-serif",
          },
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: "number of companies",
          style: {
            fontFamily: 'sans-serif',
            fontSize:'15px',
            fontStyle: 'italic',
            color:'blue'
          },
        },
      },
      legend: {
        enabled: false,
      },
      series: [
        {
          name: "Maharastra-Company Data",
          data: result,
          dataLabels: {
            enabled: true,
            rotation: -90,
            color: "#FFFFFF",
            align: "right",
            format: "{point.y:.1f}", // one decimal
            y: 10, // 10 pixels down from the top
            style: {
              fontSize: "13px",
              fontFamily: "Verdana, sans-serif",
            },
          },
        },
      ],
    });
  });

  fetch("./Output/date_of_registration.json")
  .then((response) => response.json())
  .then((data) => {
    let result = Object.entries(data);

    Highcharts.chart("chart2", {
      chart: {
        type: "column",
      },
      title: {
        text: " Company registration by year",
        style: {
          fontFamily: 'sans-serif',
          fontSize:'20px',
          color:'red'
        },
      },
      subtitle: {
        text: 'Source: <a href="https://data.gov.in/catalog/company-master-data?filters%5Bfield_catalog_reference%5D=354261&format=json&offset=12&limit=6&sort%5Bcreated%5D=desc">data.gov.in</a>',
      },
      xAxis: {
        type: "category",
        title: {
          text: "years",
          style: {
            fontFamily: 'sans-serif',
            fontSize:'15px',
            fontStyle: 'italic',
            color:'blue'
          },
        },
        labels: {
          rotation: -45,
          style: {
            fontSize: "13px",
            fontFamily: "Verdana, sans-serif",
          },
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: "number of companies",
          style: {
            fontFamily: 'sans-serif',
            fontSize:'15px',
            fontStyle: 'italic',
            color:'blue'
          },
        },
      },
      legend: {
        enabled: false,
      },
      series: [
        {
          name: "Company Data",
          data: result,
          dataLabels: {
            enabled: true,
            rotation: -90,
            color: "#FFFFFF",
            align: "right",
            format: "{point.y:.1f}", // one decimal
            y: 10, // 10 pixels down from the top
            style: {
              fontSize: "13px",
              fontFamily: "Verdana, sans-serif",
            },
          },
        },
      ],
    });
  });


  fetch("./Output/resgistration_Principal_Business.json")
  .then((response) => response.json())
  .then((data) => {

    Highcharts.chart("chart3", {
      chart: {
        type: "column",
      },
      title: {
        text: "Top 10 registrations by 'Principal Business Activity' for the year 2015",
        style: {
          fontFamily: 'sans-serif',
          fontSize:'20px',
          color:'red'
        },
      },
      subtitle: {
        text: 'Source: <a href="https://data.gov.in/catalog/company-master-data?filters%5Bfield_catalog_reference%5D=354261&format=json&offset=12&limit=6&sort%5Bcreated%5D=desc">data.gov.in</a>',
      },
      xAxis: {
        type:"category",
        title: {
          text: "PRINCIPAL_BUSINESS_ACTIVITY_AS_PER_CINs",
          style: {
            fontFamily: 'sans-serif',
            fontSize:'15px',
            fontStyle: 'italic',
            color:'blue'
          },
        },
        labels: {
          rotation: -45,
          style: {
            fontSize: "13px",
            fontFamily: "Verdana, sans-serif",
          },
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: "number of registrations",
          style: {
            fontFamily: 'sans-serif',
            fontSize:'15px',
            fontStyle: 'italic',
            color:'blue'
          },
        },
      },
      legend: {
        enabled: false,
      },
      series: [
        {
          name: "Company Data",
          data: data,
          dataLabels: {
            enabled: true,
            rotation: -90,
            color: "#FFFFFF",
            align: "right",
            format: "{point.y:.1f}", // one decimal
            y: 10, // 10 pixels down from the top
            style: {
              fontSize: "13px",
              fontFamily: "Verdana, sans-serif",
            },
          },
        },
      ],
    });
  });



  fetch("./Output/registration_industrial_class.json")
  .then((response) => response.json())
  .then((data) => {

    Highcharts.chart("chart4", {
      chart: {
        type: "column",
      },
      title: {
        text: "Top registrations by 'Industrial Class'",
        style: {
          fontFamily: 'sans-serif',
          fontSize:'20px',
          color:'red'
        },
      },
      subtitle: {
        text: 'Source: <a href="https://data.gov.in/catalog/company-master-data?filters%5Bfield_catalog_reference%5D=354261&format=json&offset=12&limit=6&sort%5Bcreated%5D=desc">data.gov.in</a>',
      },
      xAxis: {
        type: "category",
        title: {
          text: "Industrial Class",
          style: {
            fontFamily: 'sans-serif',
            fontSize:'15px',
            fontStyle: 'italic',
            color:'blue'
          },
        },
        labels: {
          rotation: -45,
          style: {
            fontSize: "13px",
            fontFamily: "Verdana, sans-serif",
          },
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: "number of registrations",
          style: {
            fontFamily: 'sans-serif',
            fontSize:'15px',
            fontStyle: 'italic',
            color:'blue'
          },
        },
      },
      legend: {
        enabled: false,
      },
      series: [
        {
          name: "Company Data",
          data: data,
          dataLabels: {
            enabled: true,
            rotation: -90,
            color: "#FFFFFF",
            align: "right",
            format: "{point.y:.1f}", // one decimal
            y: 10, // 10 pixels down from the top
            style: {
              fontSize: "13px",
              fontFamily: "Verdana, sans-serif",
            },
          },
        },
      ],
    });
  });