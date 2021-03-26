import Link from 'next/link'
import PublicationForm from './publication-form'
import NameDisplay from '../../../components/name-display'

function Publication(props){
    let content = Object.keys(props.children).map(key => {
        let pub = props.children[key].faculty_publishers;
        return (
            <tr>
                <td>{props.children[key].title}</td>
                <td>
                    {Object.keys(pub).map(auth => {
                        return (
                            <a href = "#">{pub[auth].faculty_personal_info.firstName}, </a>
                        );
                    })}
                    {props.children[key].nonFacultyAuthors}
                </td>
                <td>{props.children[key].publicationDate}</td>
                <td>{props.children[key].url}</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        );
    });
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
				<td>Blum, S., Parr, B., Kinnear, G. (2020). Principles of Programming Language. <i>Scientific American</i>, 108, 204-210</td>
				<td><a href ="#">Download proof</a></td>
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
				<td><a href = "#">Steve</a>, Bob, Greg</td>
				<td>2017-05-26</td>
				<td>http://clubpenguin.com</td>
				<td>Blum, S., Parr, B., Kinnear, G. (2017). Advanced Computer Systems. <i>Scientific American</i>, 101, 97-105</td>
				<td><a href ="#">Download proof</a></td>
				<td>Pending Approval</td>
				<div className = "btn-group">
					<a className="btn btn-info" data-toggle="modal" data-target="#editPublication">Edit</a>
					<a className="btn btn-danger" data-toggle="modal" data-target="#deletePublication">Delete</a>
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
					<a className="btn btn-info disabled" data-toggle="modal" data-target="#editPublication">Edit</a>
					<a className="btn btn-danger disabled" data-toggle="modal" data-target="#deletePublication">Delete</a>
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
