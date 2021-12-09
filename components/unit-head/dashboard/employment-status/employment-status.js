import EmploymentAnalyticsTable from '../../../../components/unit-head/dashboard/employment-status/employment_dashboard_table'
import EmploymentDashboardGraph from '../../../../components/unit-head/dashboard/employment-status/employment_dashboard_graph'
import Router from 'next/router'

function EmploymentStatus(props){
	let empList = props.children

	let chemftCount = 0
	let chemptCount = 0
	let chemlecCount = 0

	let mcsuftCount = 0
	let mcsuptCount = 0
	let mcsulecCount = 0

	let p6GeoftCount = 0
	let p6GeoptCount = 0
	let p6GeolecCount = 0

	let tableData = []

	let unitId
	let startDate
	let endDate
	
	if(empList) {
		empList.forEach(async (e) => {
			if(e.faculty_employment_infos[0].status == 'Full-time') {
				if(e.faculty_unit.unitId == 1) chemftCount++
				else if(e.faculty_unit.unitId == 2) mcsuftCount++
				else if(e.faculty_unit.unitId == 3) p6GeoftCount++
			} else if(e.faculty_employment_infos[0].status == 'Lecturer') {
				if(e.faculty_unit.unitId == 1) chemlecCount++
				else if(e.faculty_unit.unitId == 2) mcsulecCount++
				else if(e.faculty_unit.unitId == 3) p6GeolecCount++
			} else if(e.faculty_employment_infos[0].status == 'Part-time') {
				if(e.faculty_unit.unitId == 1) chemptCount++
				else if(e.faculty_unit.unitId == 2) mcsuptCount++
				else if(e.faculty_unit.unitId == 3) p6GeoptCount++
			}

			await tableData.push({
				col1: {/*<a href = {`${'/faculty/view/' + encodeURIComponent(e.facultyId)}`}>*/} {e.lastName + ', ' + e.firstName} {/*</a>*/},
				col2: e.faculty_employment_infos[0].faculty_employment_position.position,
				col3: e.faculty_employment_infos[0].status,
				col4: e.faculty_employment_infos[0].category
			})
		})
	}

	const graphData = [
		{
		  "EmploymentStatus": "Part-time",
		  "MCSU": mcsuptCount,
		  "MCSUColor": "hsl(109, 70%, 50%)",
		  "Chem": chemptCount,
		  "ChemColor": "hsl(151, 70%, 50%)",
		  "Physics/Geology": p6GeoptCount,
		  "Physics/GeologyColor": "hsl(177, 70%, 50%)",
		},
		{
		  "EmploymentStatus": "Full-time",
		  "MCSU": mcsuftCount,
		  "hot dogColor": "hsl(67, 70%, 50%)",
		  "Chem": chemftCount,
		  "ChemColor": "hsl(215, 70%, 50%)",
		  "Physics/Geology": p6GeoftCount,
		  "Physics/GeologyColor": "hsl(244, 70%, 50%)",
		},
		{
		  "EmploymentStatus": "Lecturer",
		  "MCSU": mcsulecCount,
		  "hot dogColor": "hsl(234, 70%, 50%)",
		  "Chem": chemlecCount,
		  "ChemColor": "hsl(302, 70%, 50%)",
		  "Physics/Geology": p6GeolecCount,
		  "Physics/GeologyColor": "hsl(178, 70%, 50%)",
		}
	]
	
	if(props.queryList.employment == 1) {
		unitId = props.queryList.unitId
		startDate = props.queryList.startDate
		endDate = props.queryList.endDate
	}

	return(
		<div>
			<br />
			<h3 align = "center">Employment Status</h3>
			<div className = "form-row">
				{
					props.role == 3 &&
					<div className = "form-group col-md-3">
						<label className = "control-label" htmlFor ="EmpDeptUnit"> Department Unit </label>
						<select className = "form-control" name = "EmpDeptUnit" id="EmpDeptUnit" defaultValue={unitId}>
							<option value="0">All</option>
							<option value="1">Chemistry Unit</option>
							<option value="2">Mathematics and Computing Sciences Unit</option>
							<option value="3">Physics and Geology Unit</option>
						</select>
					</div>
				}
				<div className = "form-group col-md-3">
					<label className = "control-label" htmlFor ="EmpStartTimePeriod"> From  </label>
					<input className = "form-control" type = "date" name = "EmpStartTimePeriod" id="EmpStartTimePeriod" defaultValue={startDate} />
				</div>

				<div className = "form-group col-md-3">
					<label className = "control-label" htmlFor ="EmpEndTimePeriod"> To </label>
					<input className = "form-control" type = "date" name = "EmpEndTimePeriod" id="EmpEndTimePeriod" defaultValue={endDate}/>
				</div>
				
				<div className = "form-group col-md-3">
					<br/>
					<button className = "btn btn-info" onClick={() => {
						let unitId = document.getElementById('EmpDeptUnit').value
						let startDate = document.getElementById('EmpStartTimePeriod').value
						let endDate = document.getElementById('EmpEndTimePeriod').value

						let url = '/faculty'
						let query = {
							employment: 1
						}
						if(unitId && unitId != 0) query.unitId = unitId
						if(startDate) query.startDate = startDate
						if(endDate) query.endDate = endDate

						Router.push({
							pathname: url,
							query
						})
						
						window.setTimeout(function(){
                            window.location.reload()
                        }, 1000);
					}}> Filter</button>
				</div>
			</div>

			<nav>
				<div className="nav nav-tabs nav-fill nav-justified" id="nav-tab" role="tablist">
					<a className="nav-item nav-link" id="employment-graph-tab" data-toggle="tab" href="#employment-graph" role="tab" aria-controls="employment-graph" aria-selected="false">Overview</a>
					<a className="nav-item nav-link" id="employment-table-tab" data-toggle="tab" href="#employment-table" role="tab" aria-controls="employment-table" aria-selected="false">Full List</a>
				</div>
			</nav>
			<div className="tab-content" id="nav-tabContent">
				<div className="tab-pane fade show active" id="employment-graph" role="tabpanel" aria-labelledby="employment-graph-tab"><EmploymentDashboardGraph data={graphData} /></div>
				<div className="tab-pane fade" id="employment-table" role="tabpanel" aria-labelledby="employment-table-tab"><EmploymentAnalyticsTable data={tableData} /></div>
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

export default EmploymentStatus
