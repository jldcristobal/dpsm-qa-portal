import React from 'react'
import Chart from 'react-apexcharts'

class AccomplishmentDashboardGraph extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["Publications", "Public Service", "Training/Seminars", "Research Grants"]
        }
      },
      series: [
        {
          name: "Accomplishment Count",
          data: [30, 40, 45, 50]
        }
      ]
    }
  }


  render() {
   return(
     <div className="app">
	<br />
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="750"
            />
          </div>
        </div>
      </div>
   )
  }

}

export default AccomplishmentDashboardGraph