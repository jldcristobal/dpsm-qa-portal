import SETAnalyticsTable from '../../../../components/unit-head/dashboard/SET-results/SET_dashboard_table'
import SETDashboardGraph from '../../../../components/unit-head/dashboard/SET-results/SET_dashboard_graph'

function SETResults(){
	return(
		<div>
			<br />
			<h3 align = "center">SET Results</h3>
			<div className = "form-group col-md-4 required">
					<label className = "control-label" htmlFor ="DeptUnit"> Department Unit </label>
                    			<select className = "form-control" name = "DeptUnit" required>
						<option>All</option>
						<option>Mathematics and Computing Sciences Unit</option>
						<option>Chemistry Unit</option>
						<option>Physics and Geology Unit</option>
					</select>
                	</div>
			<div className = "form-row">
                    		<div className = "form-group col-md-4 required">
					<label className = "control-label" htmlFor ="StartTimePeriod"> From  </label>
                    			<input className = "form-control" type = "date" name = "StartTimePeriod" required />
                		</div>

				<div className = "form-group col-md-4 required">
					<label className = "control-label" htmlFor ="EndTimePeriod"> To </label>
                    			<input className = "form-control" type = "date" name = "EndTimePeriod" required />
                		</div>
			</div>

			<button className = "btn btn-info"> Change Time Period</button>
			<nav>
            			<div className="nav nav-tabs nav-fill nav-justified" id="nav-tab" role="tablist">
					<a className="nav-item nav-link" id="SET-graph-tab" data-toggle="tab" href="#SET-graph" role="tab" aria-controls="SET-graph" aria-selected="false">Overview</a>
					<a className="nav-item nav-link" id="SET-table-tab" data-toggle="tab" href="#SET-table" role="tab" aria-controls="SET-table" aria-selected="false">Full List</a>
            			</div>
            		</nav>
	    		<div className="tab-content" id="nav-tabContent">
	    			<div className="tab-pane fade show active" id="SET-graph" role="tabpanel" aria-labelledby="SET-graph-tab"><SETDashboardGraph /></div>
	    			<div className="tab-pane fade" id="SET-table" role="tabpanel" aria-labelledby="SETt-table-tab"><SETAnalyticsTable /></div>
            		</div>
                
		<style jsx>{`
			a.nav-item:focus{
				background-color:#78b6c2;
			}
			a.nav-item:hover{
				background-color:#78b6c2;
			}
			a.active{
				background-color:#78b6c2;
			}
		`}</style>
		</div>
	)
}

export default SETResults