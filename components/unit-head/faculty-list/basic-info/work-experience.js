import Link from 'next/link'

function WorkExperience(){
	return(
	<div>
			<h5 align = "center"> Outside UP Manila </h5>
			<table className = "table table-striped table-sm">
			<tbody>
				<tr>
					<th>Employer</th>
					<th>Position</th>
					<th>Start Date</th>
					<th>End Date</th>
					<th>Description</th>
					<th>Proof</th>
                            		<th>Status</th>
			    		<th>Action</th>
				</tr>
				<tr>
					<td>ON Semiconductor</td>
					<td>Systems Analyst</td>
					<td>2020-01-26</td>
					<td>Present</td>
					<td>Developer of Genesis program</td>
					<td><a href = "#">Download proof</a></td>
			    		<td>Pending Approval</td>
                            		<td>
						<div className = "btn-group">
							<a className="btn btn-info" data-toggle="modal" data-target="#approveWorkExperience">Approve</a>
							<a className="btn btn-danger" data-toggle="modal" data-target="#rejectWorkExperience">Reject</a>
						</div>
			    		</td>
				</tr>
				<tr>
					<td>NASA</td>
					<td>Aeronautics Engineer</td>
					<td>2017-05-26</td>
					<td>2020-01-25</td>
					<td>Principal contributor in Jet Propulsion Lab</td>
					<td><a href = "#">Download proof</a></td>
					<td>Pending Approval</td>
                            		<td>
						<div className = "btn-group">
							<a className="btn btn-info" data-toggle="modal" data-target="#approveWorkExperience">Approve</a>
							<a className="btn btn-danger" data-toggle="modal" data-target="#rejectWorkExperience">Reject</a>
						</div>
			    		</td>
				</tr>
				<tr>
					<td>Ubisoft</td>
					<td>Creative Director</td>
					<td>2010-09-06</td>
					<td>2017-05-25</td>
					<td>Lead in creative development of games</td>
					<td><a href = "#">Download proof</a></td>
					<td>Pending Approval</td>
                            		<td>
						<div className = "btn-group">
							<a className="btn btn-info" data-toggle="modal" data-target="#approveWorkExperience">Approve</a>
							<a className="btn btn-danger" data-toggle="modal" data-target="#rejectWorkExperience">Reject</a>
						</div>
			    		</td>
				</tr>
			</tbody>
		</table>

		<div className="modal fade" id="approveWorkExperience" tabIndex="-1" role="dialog" aria-labelledby="approveWorkExperienceLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="approveWorkExperienceLabel">Approve Work Experience Information</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p> Are you sure you want to approve this submission? </p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-primary">Yes, approve</button>
                    </div>
                    </div>
                </div>
            </div>
        
            <div className="modal fade" id="rejectWorkExperience" tabIndex="-1" role="dialog" aria-labelledby="rejectWorkExperienceLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="rejectWorkExperienceLabel">Reject WorkExperience Information</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <hr />
                        <p> Are you sure you want to reject this submission? </p>
			<form>
				<div className = "form-group">
					<label htmlFor = "rejectReasonWorkExperience"> Reason </label>
					<textarea className = "form-control" name = "rejectReasonWorkExperience" rows = "5" /> 
				</div>
			</form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">No, don't reject</button>
			<button type="button" className="btn btn-danger">Yes, reject</button>
                    </div>
                    </div>
                </div>
            </div>


</div>
	)
}

export default WorkExperience