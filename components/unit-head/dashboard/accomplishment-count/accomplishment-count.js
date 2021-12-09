import AccomplishmentAnalyticsTable from '../../../../components/unit-head/dashboard/accomplishment-count/accomplishment_dashboard_table'
import AccomplishmentDashboardGraph from '../../../../components/unit-head/dashboard/accomplishment-count/accomplishment_dashboard_graph'
import Router from 'next/router'

function AccomplishmentCount(props){ 
	let accompList = props.children
    
    let chemPSACount = 0
    let chemTSCount = 0
	let chemPubCount = 0
	let chemRGCount = 0
	
	let mcsuPSACount = 0
	let mcsuTSCount = 0
	let mcsuPubCount = 0
	let mcsuRGCount = 0
	
	let p6GeoPSACount = 0
	let p6GeoTSCount = 0
	let p6GeoPubCount = 0
	let p6GeoRGCount = 0

	let tableData = []

	let unitId
	let startDate
	let endDate

	if(accompList != null) {
		Object.keys(accompList).map(key => {
		  if(accompList[key].faculty_unit.unitId == 1) {
			chemPSACount += accompList[key].faculty_public_services.length
			chemTSCount += accompList[key].faculty_training_seminars.length
			chemPubCount += accompList[key].faculty_publishers.length
			chemRGCount += accompList[key].faculty_researchers.length
		  }
		  else if(accompList[key].faculty_unit.unitId == 2) {
			mcsuPSACount += accompList[key].faculty_public_services.length
			mcsuTSCount += accompList[key].faculty_training_seminars.length
			mcsuPubCount += accompList[key].faculty_publishers.length
			mcsuRGCount += accompList[key].faculty_researchers.length
		  }
		  else if(accompList[key].faculty_unit.unitId == 3) {
			p6GeoPSACount += accompList[key].faculty_public_services.length
			p6GeoTSCount += accompList[key].faculty_training_seminars.length
			p6GeoPubCount += accompList[key].faculty_publishers.length
			p6GeoRGCount += accompList[key].faculty_researchers.length
		  }

		  if(accompList[key].faculty_public_services.length > 0) {
			accompList[key].faculty_public_services.forEach(async (i) => {
				await tableData.push({
					col1: {/*<a href = {`${'/faculty/view/' + encodeURIComponent(accompList[key].facultyId)}`}>*/} {accompList[key].lastName + ', ' + accompList[key].firstName} {/*</a>*/},
					col2: i.position + ' - ' + i.organization,
					col3: 'Public Service',
					col4: i.startDate,
					col5: i.endDate
				})
			})
		  }

		  if(accompList[key].faculty_publishers.length > 0) {
			accompList[key].faculty_publishers.forEach(async (i) => {
				await tableData.push({
					col1: {/*<a href = {`${'/faculty/view/' + encodeURIComponent(accompList[key].facultyId)}`}>*/} {accompList[key].lastName + ', ' + accompList[key].firstName} {/*</a>*/},
					col2: i.faculty_publication.title,
					col3: 'Publication',
					col4: i.faculty_publication.publicationDate,
					col5: i.faculty_publication.publicationDate
				})
			})
		  }

		  if(accompList[key].faculty_training_seminars.length > 0) {
			accompList[key].faculty_training_seminars.forEach(async (i) => {
				await tableData.push({
					col1: {/*<a href = {`${'/faculty/view/' + encodeURIComponent(accompList[key].facultyId)}`}>*/} {accompList[key].lastName + ', ' + accompList[key].firstName} {/*</a>*/},
					col2: i.role + ' - ' + i.title,
					col3: 'Training/Seminar',
					col4: i.dateFrom,
					col5: i.dateTo
				})
			})
		  }

		  if(accompList[key].faculty_researchers.length > 0) {
			accompList[key].faculty_researchers.forEach(async (i) => {
				await tableData.push({
					col1: {/*<a href = {`${'/faculty/view/' + encodeURIComponent(accompList[key].facultyId)}`}>*/} {accompList[key].lastName + ', ' + accompList[key].firstName} {/*</a>*/},
					col2: i.faculty_research_grant.researchName,
					col3: 'Research Grant',
					col4: i.faculty_research_grant.actualStart,
					col5: i.faculty_research_grant.actualEnd
				})
			})
		  }
		});
	}

	const graphData = [
		{
		  "AccomplishmentType": "Public Service",
		  "MCSU": mcsuPSACount,
		  "MCSUColor": "hsl(88, 70%, 50%)",
		  "Chem": chemPSACount,
		  "ChemColor": "hsl(102, 70%, 50%)",
		  "Physics/Geology": p6GeoPSACount,
		  "Physics/GeologyColor": "hsl(127, 70%, 50%)",
		},
		{
		  "AccomplishmentType": "Publications",
		  "MCSU": mcsuPubCount,
		  "MCSUColor": "hsl(109, 70%, 50%)",
		  "Chem": chemPubCount,
		  "ChemColor": "hsl(151, 70%, 50%)",
		  "Physics/Geology": p6GeoPubCount,
		  "Physics/GeologyColor": "hsl(177, 70%, 50%)",
		},
		{
		  "AccomplishmentType": "Research Grants",
		  "MCSU": mcsuRGCount,
		  "hot dogColor": "hsl(67, 70%, 50%)",
		  "Chem": chemRGCount,
		  "ChemColor": "hsl(215, 70%, 50%)",
		  "Physics/Geology": p6GeoRGCount,
		  "Physics/GeologyColor": "hsl(244, 70%, 50%)",
		},
		{
		  "AccomplishmentType": "Training/Seminars",
		  "MCSU": mcsuTSCount,
		  "hot dogColor": "hsl(234, 70%, 50%)",
		  "Chem": chemTSCount,
		  "ChemColor": "hsl(302, 70%, 50%)",
		  "Physics/Geology": p6GeoTSCount,
		  "Physics/GeologyColor": "hsl(178, 70%, 50%)",
		}
	  ]

	if(props.queryList.accomplishment == 1) {
		unitId = props.queryList.unitId
		startDate = props.queryList.startDate
		endDate = props.queryList.endDate
	}

	return(
		<div>
			<br />
			<h3 align = "center">Accomplishment Count</h3>
			
			<div className = "form-row">
				{
					props.role == 3 && 
					<div className = "form-group col-md-3">
						<label className = "control-label" htmlFor ="DeptUnit"> Department Unit </label>
						<select className = "form-control" name = "DeptUnit" id="DeptUnit" defaultValue={unitId}>
							<option value="0">All</option>
							<option value="1">Chemistry Unit</option>
							<option value="2">Mathematics and Computing Sciences Unit</option>
							<option value="3">Physics and Geology Unit</option>
						</select>
					</div>
				}

				<div className = "form-group col-md-3">
					<label className = "control-label" htmlFor ="StartTimePeriod"> From  </label>
					<input className = "form-control" type = "date" name = "StartTimePeriod" id="StartTimePeriod" defaultValue={startDate} />
				</div>

				<div className = "form-group col-md-3">
					<label className = "control-label" htmlFor ="EndTimePeriod"> To </label>
					<input className = "form-control" type = "date" name = "EndTimePeriod" id="EndTimePeriod" defaultValue={endDate}/>
				</div>
				
				<div className = "form-group col-md-3">
					<br/>
					<button className = "btn btn-info" onClick={() => {
						let unitId

						if(props.role ==3) {
							unitId = document.getElementById('DeptUnit').value
						}
						let startDate = document.getElementById('StartTimePeriod').value
						let endDate = document.getElementById('EndTimePeriod').value

						let url = '/faculty'
						let query = {
							accomplishment: 1
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
					<a className="nav-item nav-link" id="graph-tab" data-toggle="tab" href="#graph" role="tab" aria-controls="graph" aria-selected="false">Overview</a>
					<a className="nav-item nav-link" id="table-tab" data-toggle="tab" href="#table" role="tab" aria-controls="table" aria-selected="false">Full List</a>
            			</div>
            		</nav>
	    		<div className="tab-content" id="nav-tabContent">
	    			<div className="tab-pane fade show active" id="graph" role="tabpanel" aria-labelledby="graph-tab"><AccomplishmentDashboardGraph data={graphData} /></div>
	    			<div className="tab-pane fade" id="table" role="tabpanel" aria-labelledby="table-tab"><AccomplishmentAnalyticsTable data={tableData} /></div>
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

export default AccomplishmentCount
