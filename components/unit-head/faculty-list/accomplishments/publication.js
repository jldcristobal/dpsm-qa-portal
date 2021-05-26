import Link from 'next/link'

function Publication(){
	return(
		<div>
			<div>
	<table className = "table table-striped table-sm">
		<tbody>
			<tr>
				<th>Publication</th>
				<th>Author/s</th>
				<th>Publication Date</th>
				<th>URL</th>
				<th>Citation</th>
				<th>Proof</th>
				<th>Status</th>
				<th>Action</th>
			</tr>
			<tr>
				<td>Principles of Programming Languages</td>
				<td><a href = "#">Steve</a>, Bob, Greg</td>
				<td>2020-01-26</td>
				<td>http://clubpenguin.com</td>
				<td>Blum, S., Parr, B., Kinnear, G. (2020). Principles of Programming Language. <i>Scientific American</i>, 108, 204-210</td>
				<td><a href ="#">Download proof</a></td>
				<td>Pending Approval</td>
				<td>
				<div className = "btn-group">
					<a className="btn btn-info" data-toggle="modal" data-target="#approvePublication">Approve</a>
					<a className="btn btn-danger" data-toggle="modal" data-target="#rejectPublication">Reject</a>
				</div>
			    </td>
			</tr>
			<tr>
				<td>Advanced Computer Systems</td>
				<td><a href = "#">Steve</a>, Bob, Greg</td>
				<td>2017-05-26</td>
				<td>http://clubpenguin.com</td>
				<td>Blum, S., Parr, B., Kinnear, G. (2017). Advanced Computer Systems. <i>Scientific American</i>, 101, 97-105</td>
				<td><a href ="#">Download proof</a></td>
				<td>Pending Approval</td>
				<div className = "btn-group">
					<a className="btn btn-info" data-toggle="modal" data-target="#approvePublication">Approve</a>
					<a className="btn btn-danger" data-toggle="modal" data-target="#rejectPublication">Reject</a>
				</div>
			</tr>
			<tr>
				<td>Algorithms and Advanced Data Structures I</td>
				<td><a href = "#">Steve</a>, Bob, Greg</td>
				<td>2010-09-06</td>
				<td>http://clubpenguin.com</td>
				<td>Blum, S., Parr, B., Kinnear, G. (2010). Algorithms and Advanced Data Structures I. <i>Scientific American</i>, 88, 35-50</td>
				<td><a href ="#">Download proof</a></td>
				<td>Verified</td>
				<div className = "btn-group">
					<a className="btn btn-info disabled" data-toggle="modal" data-target="#approvePublication">Approve</a>
					<a className="btn btn-danger disabled" data-toggle="modal" data-target="#rejectPublication">Reject</a>
				</div>
			</tr>
		</tbody>
	</table>	
	</div>

	<div className="modal fade" id="approvePublication" tabIndex="-1" role="dialog" aria-labelledby="approvePublicationLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="approvePublicationLabel">Approve Publication Information</h5>
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
        
            <div className="modal fade" id="rejectPublication" tabIndex="-1" role="dialog" aria-labelledby="rejectPublicationLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="rejectPublicationLabel">Reject Publication Information</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <hr />
                        <p> Are you sure you want to reject this submission? </p>
			<form>
				<div className = "form-group">
					<label htmlFor = "rejectReasonPublication"> Reason </label>
					<textarea className = "form-control" name = "rejectReasonPublication" rows = "5" /> 
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

export default Publication