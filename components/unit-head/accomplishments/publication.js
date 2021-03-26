import Link from 'next/link'
import PublicationForm from './publication-form'
import NameDisplay from '../../../components/name-display'

function Publication(){
	return(
		<div>
		<h2 align = "center"> Publications </h2>
		<NameDisplay />
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
				<td></td>
				<td></td>
				<td>Pending Approval</td>
				<td>
				<div className = "btn-group">
					<a className="btn btn-info" data-toggle="modal" data-target="#editPublication">Edit</a>
					<a className="btn btn-danger" data-toggle="modal" data-target="#deletePublication">Delete</a>
				</div>
			    </td>
			</tr>
			<tr>
				<td>Advanced Computer Systems</td>
				<td></td>
				<td>2017-05-26</td>
				<td></td>
				<td></td>
				<td></td>
				<td>Verified</td>
				<div className = "btn-group">
					<a className="btn btn-info" data-toggle="modal" data-target="#editPublication">Edit</a>
					<a className="btn btn-danger" data-toggle="modal" data-target="#deletePublication">Delete</a>
				</div>
			</tr>
			<tr>
				<td>Algorithms and Advanced Data Structures I</td>
				<td></td>
				<td>2010-09-06</td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<div className = "btn-group">
					<a className="btn btn-info" data-toggle="modal" data-target="#editPublication">Edit</a>
					<a className="btn btn-danger" data-toggle="modal" data-target="#deletePublication">Delete</a>
				</div>
			</tr>
		</tbody>
	</table>	
	</div>
	<div>
		<PublicationForm />
	</div>

	<div className="modal fade" id="editPublication" tabIndex="-1" role="dialog" aria-labelledby="editPublicationLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="editPublicationLabel">Update Publication Information</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <hr />
                            <div className = "form-row">
                        	<div className = "form-group">
					<label htmlFor = "PublicationUpdate"> Publication </label>
					<input className = "form-control" type = "text" name = "PublicationUpdate" placeholder = "Input publication name/title" />
				</div>
                    	    </div>
                            <div className = "form-row">
                        	<div className = "form-group">
					<label htmlFor = "PublicationCitationUpdate"> Citation </label>
					<input className = "form-control" type = "text" name = "PublicationCitationUpdate" placeholder = "Input full citation for publication" />
				</div>
                    	    </div>
                            <div className = "form-row">
                        	<div className = "form-group"> 
					<label htmlFor = "PublicationURLUpdate"> URL </label>
					<input className = "form-control" type = "text" name = "PublicationURLUpdate" placeholder = "Input publication URL" />
				</div>
                    	    </div>
                            <div className = "form-row">
                        	<div className = "form-group">
					<label htmlFor = "PublishDateUpdate"> Date Published </label>
					<input type = "date" className = "form-control" name = "PublishDateUpdate" />
				</div>
                    	    </div>
                            <div className = "form-row">
                        	<div className = "form-group">
					<label htmlFor = "PublicationAuthorNonDPSMUpdate"> Authors (non-DPSM) </label>
					<input className = "form-control" type = "text" name = "PublicationAuthorNonDPSMUpdate" placeholder = "Input all authors outside DPSM (separate names with commas)" />
				</div>
                    	    </div>
			    <div className = "form-row">
                        	<div className = "form-group">
					<label htmlFor = "PublicationAuthorDPSMUpdate"> Authors (DPSM) </label>
					<input className = "form-control" type = "text" name = "PublicationAuthorDPSMUpdate" placeholder = "Input author (must be part of DPSM)" />
				</div>
                    	    </div>
                            <div className = "form-row">
                        	<div className = "form-group">
                            		<label htmlFor = "PublicationProofUpdate"> Proof </label>
                            		<input type = "file" className = "form-control-file" name = "PublicationProofUpdate" />
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
        
            <div className="modal fade" id="deletePublication" tabIndex="-1" role="dialog" aria-labelledby="deletePublicationLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="deletePublicationLabel">Delete Publication Information</h5>
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

export default Publication
