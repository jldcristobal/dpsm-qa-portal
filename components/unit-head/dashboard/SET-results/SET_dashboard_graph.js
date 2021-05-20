import React from 'react'
import Chart from 'react-apexcharts'

class SETDashboardGraph extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["Outstanding", "Satisfactory", "Needs Improvement"]
        }
      },
      series: [
        {
          name: "SET Ratings Count",
          data: [20, 25, 75]
        }
      ]
    }
  }

  render() {
    return (
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

export default SETDashboardGraph