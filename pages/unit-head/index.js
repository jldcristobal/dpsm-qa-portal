import LayoutUnitHead from '../../components/layout-unit-head'
import AnalyticsTable from '../../components/unit-head/dashboard/dashboard_table'

function Dashboard() {
    return (
        <LayoutUnitHead>
            <div className="col-9">
                <div className="container">
                    <AnalyticsTable />
                </div>
            </div>
        </LayoutUnitHead>
    )
  }
  
  export default Dashboard
