import Link from 'next/link'
import PublicServiceAccomplishmentForm from './public-service-accomplishment-form'
import NameDisplay from '../../../components/name-display'

function PublicServiceAccomplishment(){
	return(
	<div>
		<h2 align = "center"> Public Service Accomplishments </h2>
		<NameDisplay />
		<div>
		<h5 align = "center">Within UP Manila </h5>
                <table className = "table table-striped table-sm">
                    <tbody>
                        <tr>
                            <th>Position/Role</th>
			    <th>Organization</th>
			    <th>Description</th>
                            <th>Start Date</th>
			    <th>End Date</th>
                            <th>Proof</th>
			    <th>Status</th>
                            <th>Action</th>
                        </tr>
                        <tr>
			    <td></td>
                            <td></td>
                            <td></td>
			    <td>2020-02-29</td>
			    <td></td>
                            <td></td>
			    <td>Pending Approval</td>
                            <td>
				<div className = "btn-group">
					<a className="btn btn-info" data-toggle="modal" data-target="#editPublicService">Edit</a>
					<a className="btn btn-danger" data-toggle="modal" data-target="#deletePublicService">Delete</a>
				</div>
			    </td>
                        </tr>
                        <tr>
			    <td></td>
                            <td></td>
                            <td></td>
			    <td>2020-03-20</td>
			    <td></td>
                            <td></td>
			    <td>Verified</td>
                            <td>
				<div className = "btn-group">
					<a className="btn btn-info" data-toggle="modal" data-target="#editPublicService">Edit</a>
					<a className="btn btn-danger" data-toggle="modal" data-target="#deletePublicService">Delete</a>
				</div>
			    </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
		<br />
		<h5 align = "center"> Contributions to Profession </h5>
                <table className = "table table-striped table-sm">
                    <tbody>
                        <tr>
                            <th>Position/Role</th>
			    <th>Organization</th>
			    <th>Description</th>
                            <th>Start Date</th>
			    <th>End Date</th>
                            <th>Proof</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        <tr>
			    <td></td>
                            <td></td>
                            <td></td>
			    <td>2020-02-29</td>
                            <td></td>
			    <td></td>
			    <td>Pending Approval</td>
                            <td>
				<div className = "btn-group">
					<a className="btn btn-info" data-toggle="modal" data-target="#editPublicService">Edit</a>
					<a className="btn btn-danger" data-toggle="modal" data-target="#deletePublicService">Delete</a>
				</div>
			    </td>
                        </tr>
                        <tr>
			    <td></td>
                            <td></td>
                            <td></td>
			    <td>2020-03-20</td>
                            <td></td>
			    <td></td>
			    <td>Verified</td>
                            <td>
				<div className = "btn-group">
					<a className="btn btn-info" data-toggle="modal" data-target="#editPublicService">Edit</a>
					<a className="btn btn-danger" data-toggle="modal" data-target="#deletePublicService">Delete</a>
				</div>
			    </td>
                        </tr>
                    </tbody>
                </table>
		<br />
		<h5 align = "center"> Contributions to the Nation </h5>
                <table className = "table table-striped table-sm">
                    <tbody>
                        <tr>
                            <th>Position/Role</th>
			    <th>Organization</th>
			    <th>Description</th>
                            <th>Start Date</th>
			    <th>End Date</th>
                            <th>Proof</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        <tr>
			    <td></td>
                            <td></td>
                            <td></td>
			    <td>2020-02-29</td>
                            <td></td>
			    <td></td>
			    <td>Pending Approval</td>
                            <td>
				<div className = "btn-group">
					<a className="btn btn-info" data-toggle="modal" data-target="#editPublicService">Edit</a>
					<a className="btn btn-danger" data-toggle="modal" data-target="#deletePublicService">Delete</a>
				</div>
			    </td>
                        </tr>
                        <tr>
			    <td></td>
                            <td></td>
                            <td></td>
			    <td>2020-03-20</td>
                            <td></td>
			    <td></td>
			    <td>Verified</td>
                            <td>
				<div className = "btn-group">
					<a className="btn btn-info" data-toggle="modal" data-target="#editPublicService">Edit</a>
					<a className="btn btn-danger" data-toggle="modal" data-target="#deletePublicService">Delete</a>
				</div>
			    </td>
                        </tr>
                    </tbody>
                </table>
		<br />
		<h5 align = "center"> Contributions to the World </h5>
                <table className = "table table-striped table-sm">
                    <tbody>
                        <tr>
                            <th>Position/Role</th>
			    <th>Organization</th>
			    <th>Description</th>
                            <th>Start Date</th>
			    <th>End Date</th>
                            <th>Proof</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        <tr>
			    <td></td>
                            <td></td>
                            <td></td>
			    <td>2020-02-29</td>
                            <td></td>
			    <td></td>
			    <td>Pending Approval</td>
                            <td>
				<div className = "btn-group">
					<a className="btn btn-info" data-toggle="modal" data-target="#editPublicService">Edit</a>
					<a className="btn btn-danger" data-toggle="modal" data-target="#deletePublicService">Delete</a>
				</div>
			    </td>
                        </tr>
                        <tr>
			    <td></td>
                            <td></td>
                            <td></td>
			    <td>2020-03-20</td>
                            <td></td>
			    <td></td>
			    <td>Verified</td>
                            <td>
				<div className = "btn-group">
					<a className="btn btn-info" data-toggle="modal" data-target="#editPublicService">Edit</a>
					<a className="btn btn-danger" data-toggle="modal" data-target="#deletePublicService">Delete</a>
				</div>
			    </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div>
                <PublicServiceAccomplishmentForm />
            </div>   
		
		<div className="modal fade" id="editPublicService" tabIndex="-1" role="dialog" aria-labelledby="editPublicServiceLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="editPublicServiceLabel">Update Public Service Accomplishment Information</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <hr />
                            <div className = "form-row">
                        	<div className = "form-group">
                            		<label htmlFor = "PublicServicePositionUpdate"> Position/Role </label>
                            		<input className = "form-control" type = "text" name = "PublicServicePositionUpdate" placeholder = "Input position/role" />
                        	</div>
                    	    </div>
                            <div className = "form-row">
                        	<div className = "form-group">
                            		<label htmlFor = "PublicServiceOrganizationUpdate"> Organization </label>
                            		<input className = "form-control" type = "text" name = "PublicServiceOrganizationUpdate" placeholder = "Input organization" />
                       		</div>
                    	    </div>
                            <div className = "form-row">
                        	<div className = "form-group">
                            		<label htmlFor = "PublicServiceAccomplishmentStartDateUpdate"> Start Date </label>
                            		<input type = "date" className = "form-control" name = "PublicServiceAccomplishmentStartDateUpdate" />
                        	</div>
                    	    </div>
                            <div className = "form-row">
                        	<div className = "form-group">
                            		<label htmlFor = "StartDateEducationalHistoryUpdate"> Start Date </label>
                            		<input type = "date" className = "form-control" name = "StartDateEducationalHistoryUpdate" />
                       		</div>
                    	    </div>
                            <div className = "form-row">
                        	<div className = "form-group">
                            		<label htmlFor = "PublicServiceAccomplishmentEndDateUpdate"> End Date </label>
                            		<input type = "date" className = "form-control" name = "PublicServiceAccomplishmentEndDateUpdate" />
                        	</div>
                    	    </div>
                            <div className = "form-row">
                        	<div className = "form-group">
                            		<label htmlFor = "PublicServiceAccomplishmentDescriptionUpdate"> Description </label>
                            		<input className = "form-control" type = "text" name = "PublicServiceAccomplishmentDescriptionUpdate" placeholder = "Input description" />
                        	</div>
                    	    </div>
			    <div className = "form-row">
                        	<div className = "form-group col-md-2">
                            		<label htmlFor = "PublicServiceAccomplishmentProofUpdate"> Proof </label>
                            		<input type = "file" className = "form-control-file" name = "PublicServiceAccomplishmentProofUpdate" />
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
        
            <div className="modal fade" id="deletePublicService" tabIndex="-1" role="dialog" aria-labelledby="deletePublicServiceLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="deletePublicServiceLabel">Delete Public Service Accomplishment Information</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <hr />
                        <p> Are you sure you want to delete this public service accomplishment information? </p>
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

export default PublicServiceAccomplishment
