import Link from 'next/link'

function Education() {
    return (
        <div>
            <div>
                <table className = "table table-striped">
                    <tbody>
                        <tr>
                            <th>Institution/School</th>
                            <th>Degree/Certification</th>
                            <th>Major/Specialization</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Proof</th>
                            <th>Status</th>
			    <th>Action</th>
                        </tr>
                        <tr>
                            <td>University of the Philippines Diliman</td>
                            <td>Doctor of Philosophy in Computer Science</td>
                            <td>None</td>
                            <td>2020-01-26</td>
                            <td>Present</td>
                            <td></td>
			    <td>Pending Approval</td>
                            <td>
				<div className = "btn-group">
					<a className="btn btn-info" data-toggle="modal" data-target="#approveEducation">Approve</a>
					<a className="btn btn-danger" data-toggle="modal" data-target="#rejectEducation">Reject</a>
				</div>
			    </td>
                        </tr>
                        <tr>
                            <td>University of the Philippines Diliman</td>
                            <td>MS Computer Science</td>
                            <td>Biostat</td>
                            <td>2017-05-26</td>
                            <td>2020-01-25</td>
                            <td></td>
			    <td>Pending Approval</td>
                            <td>
				<div className = "btn-group">
					<a className="btn btn-info" data-toggle="modal" data-target="#approveEducation">Approve</a>
					<a className="btn btn-danger" data-toggle="modal" data-target="#rejectEducation">Reject</a>
				</div>
			    </td>
                        </tr>
                        <tr>
                            <td>University of the Philippines Los Banos</td>
                            <td>BS Computer Science</td>
                            <td>Health Informatics</td>
                            <td>2010-09-06</td>
                            <td>2017-05-25</td>
                            <td></td>
			    <td>Verified</td>
                            <td>
				<div className = "btn-group">
					<a className="btn btn-info disabled" data-toggle="modal" data-target="#approveEducation">Approve</a>
					<a className="btn btn-danger disabled" data-toggle="modal" data-target="#rejectEducation">Reject</a>
				</div>
			    </td>
                        </tr>
                    </tbody>
                </table>
            </div> 

            <div className="modal fade" id="approveEducation" tabIndex="-1" role="dialog" aria-labelledby="approveEducationLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="approveEducationLabel">Approve Education Information</h5>
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
        
            <div className="modal fade" id="rejectEducation" tabIndex="-1" role="dialog" aria-labelledby="rejectEducationLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="rejectEducationLabel">Reject Education Information</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <hr />
                        <p> Are you sure you want to reject this submission? </p>
			<form>
				<div className = "form-group">
					<label htmlFor = "rejectReasonEducation"> Reason </label>
					<textarea className = "form-control" name = "rejectReasonEducation" rows = "5" /> 
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
  
  export default Education