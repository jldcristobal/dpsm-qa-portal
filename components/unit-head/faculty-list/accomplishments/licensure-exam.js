import Link from 'next/link'

function LicensureExam() {
    return (
        <div>
            <div>
                <table className = "table table-striped table-sm">
                    <tbody>
                        <tr>
			    <th>Exam Name</th>
                            <th>Rank</th>
                            <th>Date</th>
			    <th>License Number</th>
                            <th>Proof</th>
                            <th>Status</th>
		   	    <th>Action</th>
                        </tr>
                        <tr>
			    <td>Mechanical Engineering</td>
                            <td>3</td>
                            <td>2020-11-11</td>
			    <td>0000-0000</td>
                            <td><a href = "#">Download proof</a></td>
			    <td>Pending Approval</td>
                            <td>
				<div className = "btn-group">
					<a className="btn btn-info" data-toggle="modal" data-target="#approveLicensureExam">Approve</a>
					<a className="btn btn-danger" data-toggle="modal" data-target="#rejectLicensureExam">Reject</a>
				</div>
			    </td>
                        </tr>
                        <tr>
			    <td>Pharmacy</td>
                            <td>8</td>
                            <td>2020-1-14</td>
			    <td>1111-1111</td>
                            <td><a href = "#">Download proof</a></td>
			    <td>Pending Approval</td>
                            <td>
				<div className = "btn-group">
					<a className="btn btn-info" data-toggle="modal" data-target="#approveLicensureExam">Approve</a>
					<a className="btn btn-danger" data-toggle="modal" data-target="#rejectLicensureExam">Reject</a>
				</div>
			    </td>
                        </tr>
                        <tr>
			    <td>Chemistry</td>
                            <td>1</td>
                            <td>2020-4-1</td>
			    <td>2222-2222</td>
                            <td><a href = "#">Download proof</a></td>
                            <td>Verified</td>
			    <td>
				<div className = "btn-group">
					<a className="btn btn-info disabled" data-toggle="modal" data-target="#approveLicensureExam">Approve</a>
					<a className="btn btn-danger disabled" data-toggle="modal" data-target="#rejectLicensureExam">Reject</a>
				</div>
			    </td>
                        </tr>
                    </tbody>
                </table>
            </div>

	
<div className="modal fade" id="approveLicensureExam" tabIndex="-1" role="dialog" aria-labelledby="approveLicensureExamLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="approveLicensureExamLabel">Approve Licensure Exam Information</h5>
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
        
            <div className="modal fade" id="rejectLicensureExam" tabIndex="-1" role="dialog" aria-labelledby="rejectLicensureExamLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="rejectLicensureExamLabel">Reject Licensure Exam Information</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <hr />
                        <p> Are you sure you want to reject this submission? </p>
			<form>
				<div className = "form-group">
					<label htmlFor = "rejectReasonLicensureExam"> Reason </label>
					<textarea className = "form-control" name = "rejectReasonLicensureExam" rows = "5" /> 
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
  
  export default LicensureExam