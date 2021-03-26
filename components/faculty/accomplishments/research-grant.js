import Link from 'next/link'
import ResearchGrantForm from './research-grant-form'
import NameDisplay from '../../../components/name-display'

function ResearchGrant(){
	return(
		<div>
			<h2 align = "center"> Research Grants </h2>
			<NameDisplay />
			<div>
	<table className = "table table-striped table-sm">
		<tbody>
			<tr>
				<th>Research Name</th>
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
						<a className="btn btn-info" data-toggle="modal" data-target="#editResearchGrant">Edit</a>
						<a className="btn btn-danger" data-toggle="modal" data-target="#deleteResearchGrant">Delete</a>
					</div>
			    	</td>
			</tr>
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td>2017-05-26</td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td>Pending Approval</td>
				<td>
					<div className = "btn-group">
						<a className="btn btn-info" data-toggle="modal" data-target="#editResearchGrant">Edit</a>
						<a className="btn btn-danger" data-toggle="modal" data-target="#deleteResearchGrant">Delete</a>
					</div>
			    	</td>
			</tr>
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td>2010-09-06</td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td>Verified</td>
				<td>
					<div className = "btn-group">
						<a className="btn btn-info" data-toggle="modal" data-target="#editResearchGrant">Edit</a>
						<a className="btn btn-danger" data-toggle="modal" data-target="#deleteResearchGrant">Delete</a>
					</div>
			    	</td>
			</tr>
		</tbody>
	</table>	
	</div>
	<div>
		<ResearchGrantForm />
	</div>

	<div className="modal fade" id="editResearchGrant" tabIndex="-1" role="dialog" aria-labelledby="editResearchGrantLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="editResearchGrantLabel">Update Research Grant Information</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <hr />
                            <div className = "form-row">
                        	<div className = "form-group">
					<label htmlFor = "ResearchUpdate"> Research Name </label>
					<input className = "form-control" type = "text" name = "ResearchUpdate" placeholder = "Input research name" />
				</div>
                    	    </div>
                            <div className = "form-row">
                        	<div className = "form-group"> 
					<label htmlFor = "ResearchSponsorUpdate"> Sponsor </label>
					<input className = "form-control" type = "text" name = "ResearchSponsorUpdate" placeholder = "Input sponsor" />
				</div>
                    	    </div>
                            <div className = "form-row">
                        	<div className = "form-group"> 
					<label htmlFor = "ResearchAmountUpdate"> Amount </label>
					<input className = "form-control" type = "text" name = "ResearchAmountUpdate" placeholder = "Input amount" />
				</div>
                    	    </div>
                            <div className = "form-row">
                        	<div className = "form-group">
					<label htmlFor = "ResearchStartDateUpdate"> Start Date (Actual) </label>
					<input type = "date" className = "form-control" name = "ResearchStartDateUpdate" />
				</div>
                    	    </div>
                            <div className = "form-row">
                        	<div className = "form-group">
					<label htmlFor = "ResearchEndDateUpdate"> End Date (Actual) </label>
					<input type = "date" className = "form-control" name = "ResearchEndDateUpdate" />
				</div>
                    	    </div>
			    <div className = "form-row">
                        	<div className = "form-group">
					<label htmlFor = "ResearchProjectedStartDateUpdate"> Start Date (Projected) </label>
					<input type = "date" className = "form-control" name = "ResearchProjectedStartDateUpdate" />
				</div>
                    	    </div>
			    <div className = "form-row">
                        	<div className = "form-group">
					<label htmlFor = "ResearchProjectedEndDateUpdate"> End Date (Projected) </label>
					<input type = "date" className = "form-control" name = "ResearchProjectedEndDateUpdate" />
				</div>
                    	    </div>
			    <div className = "form-row">
                        	<div className = "form-group"> 
					<label htmlFor = "ResearchProgressUpdate"> Research Progress </label>
					<input className = "form-control" type = "text" name = "ResearchProgressUpdate" placeholder = "Input progress" />
				</div>
                    	    </div>
			    <div className = "form-row">
                        	<div className = "form-group">
					<label htmlFor = "ResearchAuthorNonDPSMUpdate"> Authors (non-DPSM) </label>
					<input className = "form-control" type = "text" name = "ResearchAuthorNonDPSMUpdate" placeholder = "Input all authors outside DPSM (separate names with commas)" />
				</div>
                    	    </div>
			    <div className = "form-row">
                        	<div className = "form-group">
					<label htmlFor = "ResearchAuthorDPSMUpdate"> Authors (DPSM) </label>
					<input className = "form-control" type = "text" name = "ResearchAuthorDPSMUpdate" placeholder = "Input author (must be from DPSM)" />
				</div>
                    	    </div>
                            <div className = "form-row">
                        	<div className = "form-group">
                            		<label htmlFor = "ResearchProofUpdate"> Proof </label>
                            		<input type = "file" className = "form-control-file" name = "ResearchProofUpdate" />
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
        
            <div className="modal fade" id="deleteResearchGrant" tabIndex="-1" role="dialog" aria-labelledby="deleteResearchGrantLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="deleteResearchGrantLabel">Delete Research Grant Information</h5>
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

export default ResearchGrant
