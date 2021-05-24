import UpdateEmploymentInfo from './update-employment-info'

function UpdateFaculty(){
	return(
		<div>
		<h3 align ="center"> Update Faculty Information </h3>
		<div className = "form-group col-md-6 required">
				<label className = "control-label" htmlFor ="Position"> Faculty Member: </label>
                    		<select className = "form-control" name = "faculty-to-update" required>
					<option>Cabalo, Francis</option>
					<option>Chua, Richard Bryann</option>
					<option>Yu, Berwin</option>
				</select>
                </div>
		<hr />
                <nav>
            		<div className="nav nav-tabs nav-fill nav-justified" id="nav-tab" role="tablist">
                		<a className="nav-item nav-link active" id="employment-info-tab" data-toggle="tab" href="#employment-info" role="tab" aria-controls="employment-info" aria-selected="true">Update Employment Information</a>
                		<a className="nav-item nav-link" id="SET-results-tab" data-toggle="tab" href="#SET-results" role="tab" aria-controls="SET-results" aria-selected="false">Add SET Results</a>
            		</div>
            	</nav>
		<br />
		<br />
           	<div className="tab-content" id="nav-tabContent">
            		<div className="tab-pane fade show active" id="employment-info" role="tabpanel" aria-labelledby="employment-info-tab"><UpdateEmploymentInfo /></div>
            		<div className="tab-pane fade" id="SET-results" role="tabpanel" aria-labelledby="SET-results-tab"></div>
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

export default UpdateFaculty