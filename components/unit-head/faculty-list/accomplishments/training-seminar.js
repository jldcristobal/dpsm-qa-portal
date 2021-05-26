import Link from 'next/link'

function TrainingSeminar() {
    return (
        <div>
            <div>
                <table className = "table table-striped table-sm">
                    <tbody>
                        <tr>
                            <th>Name of Training/Seminar</th>
			    <th>Role</th>
			    <th>Venue</th>
                            <th>Start Date</th>
			    <th>End Date</th>
			    <th>Remarks</th>
                            <th>Proof</th>
                            <th>Status</th>
			    <th>Action</th>
                        </tr>
                        <tr>
                            <td>Paradigm Shifts in Public Health</td>
			    <td>Attendee</td>
                            <td>Hammerstein Ballroom</td>
                            <td>2020-11-11</td>
			    <td>2020-11-11</td>
			    <td></td>
			    <td><a href = "#">Download proof</a></td>
			    <td>Pending Approval</td>
                            <td>
				<div className = "btn-group">
					<a className="btn btn-info" data-toggle="modal" data-target="#approveTrainingSeminar">Edit</a>
					<a className="btn btn-danger" data-toggle="modal" data-target="#rejectTrainingSeminar">Delete</a>
				</div>
			    </td>
                        </tr>
                        <tr>
                            <td>Privacy in the Age of Information</td>
     			    <td>Lecturer</td>
                            <td>Madison Square Garden</td>
                            <td>2020-1-14</td>
			    <td>2020-1-14</td>
			    <td></td>
			    <td><a href = "#">Download proof</a></td>
			    <td>Pending Approval</td>
                            <td>
				<div className = "btn-group">
					<a className="btn btn-info" data-toggle="modal" data-target="#approveTrainingSeminar">Edit</a>
					<a className="btn btn-danger" data-toggle="modal" data-target="#rejectTrainingSeminar">Delete</a>
				</div>
			    </td>
                        </tr>
                        <tr>
                            <td>A Primer on String Theory</td>
                            <td>Lecturer</td>
                            <td>Full Sail University</td>
			    <td>2020-4-1</td>
			    <td>2020-4-1</td>
			    <td></td>
			    <td><a href = "#">Download proof</a></td>
                            <td>Verified</td>
			    <td>
				<div className = "btn-group">
					<a className="btn btn-info disabled" data-toggle="modal" data-target="#approveTrainingSeminar">Edit</a>
					<a className="btn btn-danger disabled" data-toggle="modal" data-target="#rejectTrainingSeminar">Delete</a>
				</div>
			    </td>
                        </tr>
                    </tbody>
                </table>
            </div> 
	
<div className="modal fade" id="approveTrainingSeminar" tabIndex="-1" role="dialog" aria-labelledby="approveTrainingSeminarLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="approveTrainingSeminarLabel">Approve Training/Seminar Information</h5>
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
        
            <div className="modal fade" id="rejectTrainingSeminar" tabIndex="-1" role="dialog" aria-labelledby="rejectTrainingSeminarLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="rejectTrainingSeminarLabel">Reject Training/Seminar Information</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <hr />
                        <p> Are you sure you want to reject this submission? </p>
			<form>
				<div className = "form-group">
					<label htmlFor = "rejectReasonTrainingSeminar"> Reason </label>
					<textarea className = "form-control" name = "rejectReasonTrainingSeminar" rows = "5" /> 
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
  
  export default TrainingSeminar