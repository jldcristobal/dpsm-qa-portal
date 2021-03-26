import Link from 'next/link'
import TrainingSeminarForm from './training-seminar-form'
import NameDisplay from '../../../components/name-display'

function TrainingSeminar() {
    return (
        <div>
	    <h2 align = "center"> Training/Seminars </h2>
	    <NameDisplay />
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
					<a className="btn btn-info" data-toggle="modal" data-target="#editTrainingSeminar">Edit</a>
					<a className="btn btn-danger" data-toggle="modal" data-target="#deleteTrainingSeminar">Delete</a>
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
					<a className="btn btn-info" data-toggle="modal" data-target="#editTrainingSeminar">Edit</a>
					<a className="btn btn-danger" data-toggle="modal" data-target="#deleteTrainingSeminar">Delete</a>
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
					<a className="btn btn-info disabled" data-toggle="modal" data-target="#editTrainingSeminar">Edit</a>
					<a className="btn btn-danger disabled" data-toggle="modal" data-target="#deleteTrainingSeminar">Delete</a>
				</div>
			    </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div>
                <TrainingSeminarForm />
            </div>   
	
<div className="modal fade" id="editTrainingSeminar" tabIndex="-1" role="dialog" aria-labelledby="editTrainingSeminarLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="editTrainingSeminarLabel">Update Training/Seminar Information</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <hr />
                            <div className = "form-row">
                        	<div className = "form-group">
                            		<label htmlFor = "TrainingSeminarUpdate"> Name of Training/Seminar </label>
                            		<input className = "form-control" type = "text" name = "TrainingSeminarUpdate" placeholder = "Input training/seminar" />
                        	</div>
                    	    </div>
                            <div className = "form-row">
                        	<div className = "form-group">
                            		<label htmlFor = "TrainingSeminarRoleUpdate"> Role</label>
                            		<input className = "form-control" type = "text" name = "TrainingSeminarRoleUpdate" placeholder = "Input role" />
                        	</div>
                    	    </div>
                            <div className = "form-row">
                        	<div className = "form-group">
                            		<label htmlFor = "TrainingSeminarVenueUpdate"> Venue </label>
                            		<input className = "form-control" type = "text" name = "TrainingSeminarVenueUpdate" placeholder = "Input venue" />
                        	</div>
                    	    </div>
                            <div className = "form-row">
                        	<div className = "form-group">
                            		<label htmlFor = "TrainingSeminarStartDateUpdate"> Start Date </label>
                            		<input type = "date" className = "form-control" name = "TrainingSeminarStartDateUpdate" />
                       		</div>
                    	    </div>
                            <div className = "form-row">
                        	<div className = "form-group">
                            		<label htmlFor = "TrainingSeminarEndDateUpdate"> End Date </label>
                            		<input type = "date" className = "form-control" name = "TrainingSeminarEndDateUpdate" />
                        	</div>
                    	    </div>
			    <div className = "form-row">
                        	<div className = "form-group">
                            		<label htmlFor = "TrainingSeminarRemarksUpdate"> Remarks </label>
                            		<input className = "form-control" type = "text" name = "TrainingSeminarRemarksUpdate" placeholder = "Input remarks" />
                        	</div>
                    	    </div>
                            <div className = "form-row">
                        	<div className = "form-group">
                            		<label htmlFor = "TrainingSeminarProofUpdate"> Proof </label>
                            		<input type = "file" className = "form-control-file" name = "TrainingSeminarProofUpdate" />
                        	</div>
                    	    </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
        
            <div className="modal fade" id="deleteTrainingSeminar" tabIndex="-1" role="dialog" aria-labelledby="deleteTrainingSeminarLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="deleteTrainingSeminarLabel">Delete Training/Seminar Information</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <hr />
                        <p> Are you sure you want to delete this education information? </p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">No, don't delete</button>
			<button type="button" className="btn btn-danger">Yes, delete</button>
                    </div>
                    </div>
                </div>
            </div>
            
        
        </div>
	
	
    )
  }
  
  export default TrainingSeminar
