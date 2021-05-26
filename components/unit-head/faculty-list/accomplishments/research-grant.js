import Link from 'next/link'

function ResearchGrant(){
	return(
		<div>
			<div>
	<table className = "table table-striped table-sm">
		<tbody>
			<tr>
				<th>Research Project</th>
				<th>Researcher/s</th>
				<th>Sponsor</th>
				<th>Amount</th>
				<th>Projected Duration</th>
				<th>Start Date</th>
				<th>End Date</th>
				<th>Research Progress</th>
				<th>Proof</th>
				<th>Status</th>
				<th>Action</th>
			</tr>
			<tr>
				<td>COVID-19 vaccine</td>
				<td><a href = "#">Steve</a>, Bob, Greg</td>
				<td>WHO</td>
				<td>Php100,000,000</td>
				<td>2019-11-20 to 2021-5-18</td>
				<td>2019-12-25</td>
				<td></td>
				<td>Ongoing</td>
				<td><a href ="#">Download proof</a></td>
				<td>Pending Approval</td>
				<td>
					<div className = "btn-group">
						<a className="btn btn-info" data-toggle="modal" data-target="#approveResearchGrant">Approve</a>
						<a className="btn btn-danger" data-toggle="modal" data-target="#rejectResearchGrant">Reject</a>
					</div>
			    	</td>
			</tr>
			<tr>
				<td>Lightsail Prototype</td>
				<td><a href = "#">Steve</a>, Bob, Greg</td>
				<td>NASA</td>
				<td>Php1,500,000,000</td>
				<td>2019-11-20 to 2021-5-18</td>
				<td>2019-12-25</td>
				<td></td>
				<td>Ongoing</td>
				<td><a href ="#">Download proof</a></td>
				<td>Pending Approval</td>
				<td>
					<div className = "btn-group">
						<a className="btn btn-info" data-toggle="modal" data-target="#approveResearchGrant">Approve</a>
						<a className="btn btn-danger" data-toggle="modal" data-target="#rejectResearchGrant">Reject</a>
					</div>
			    	</td>
			</tr>
			<tr>
				<td>Microplastic Filtration System</td>
				<td><a href = "#">Steve</a>, Bob, Greg</td>
				<td>EPA</td>
				<td>Php70,000,000</td>
				<td>2019-11-20 to 2021-5-18</td>
				<td>2019-12-25</td>
				<td></td>
				<td>Ongoing</td>
				<td><a href ="#">Download proof</a></td>
				<td>Verified</td>
				<td>
					<div className = "btn-group">
						<a className="btn btn-info disabled" data-toggle="modal" data-target="#approveResearchGrant">Approve</a>
						<a className="btn btn-danger disabled" data-toggle="modal" data-target="#rejectResearchGrant">Reject</a>
					</div>
			    	</td>
			</tr>
		</tbody>
	</table>	
	</div>

	<div className="modal fade" id="approveResearchGrant" tabIndex="-1" role="dialog" aria-labelledby="approveResearchGrantLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="approveResearchGrantLabel">Approve Research Grant Information</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p> Are you sure you want to approve this submission? </p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Yes, approve</button>
                    </div>
                    </div>
                </div>
            </div>
        
            <div className="modal fade" id="rejectResearchGrant" tabIndex="-1" role="dialog" aria-labelledby="rejectResearchGrantLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="rejectResearchGrantLabel">Reject Research Grant Information</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <hr />
                        <p> Are you sure you want to reject this submission? </p>
			<form>
				<div className = "form-group">
					<label htmlFor = "rejectReasonResearchGrant"> Reason </label>
					<textarea className = "form-control" name = "rejectReasonResearchGrant" rows = "5" /> 
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

export default ResearchGrant