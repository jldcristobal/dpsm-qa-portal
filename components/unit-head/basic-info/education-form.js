import React from 'react'

class EducationForm extends React.Component{
	constructor(){
		super()
		this.state = {
			duplicateForms: []
		}
	}

	clone(){
		this.state.duplicateForms.push(<div><hr /><div className = "form-row">
                        <div className = "form-group col-md-2">
                            <label htmlFor = "SchoolEducationalHistory[]"> School/Institution </label>
                            <input className = "form-control" type = "text" name = "SchoolEducationalHistory[]" placeholder = "Input school" />
                        </div>
                        <div className = "form-group col-md-4">
                            <label htmlFor = "DegreeEducationalHistory[]"> Degree/Certification </label>
                            <input className = "form-control" type = "text" name = "DegreeEducationalHistory[]" placeholder = "Input degree" />
                        </div>
                        <div className = "form-group col-md-4">
                            <label htmlFor = "MajorEducationalHistory[]"> Major/Specialization </label>
                            <input className = "form-control" type = "text" name = "MajorEducationalHistory[]" placeholder = "Input major" />
                        </div>
			<div className = "form-group col-md-2 required">
				<label className = "control-label" htmlFor ="DegreeType"> Degree Type </label>
                    		<select className = "form-control" name = "DegreeType" required>
					<option>BS</option>
					<option>BA</option>
					<option>MS</option>
					<option>PhD</option>
				</select>
                	</div>
		     </div>
		     <div className = "form-row">
                        <div className = "form-group col-md-2">
                            <label htmlFor = "StartDateEducationalHistory[]"> Start Date </label>
                            <input type = "date" className = "form-control" name = "StartDateEducationalHistory[]" />
                        </div>
                        <div className = "form-group col-md-2">
                            <label htmlFor = "EndDateEducationalHistory[]"> End Date </label>
                            <input type = "date" className = "form-control" name = "EndDateEducationalHistory[]" />
                        </div>
                        <div className = "form-group col-md-2">
                            <label htmlFor = "ProofEducationalHistory[]"> Proof </label>
                            <input type = "file" className = "form-control-file" name = "ProofEducationalHistory[]" />
                        </div>
                    </div>
			<style jsx>{`
			hr{
				border: 1px solid black;
			}
		`}</style>
			</div>)
		this.setState({
			
		})
	}
	remove(){
		this.state.duplicateForms.pop()
		this.setState({
			
		})
	}
	render(){
		return(
		<form>
                    <hr />
                    <div className = "form-row">
                        <div className = "col-auto">
                            <button type = "button" className = "btn btn-primary" id = "AddEducationalHistory" onClick = {() => this.clone()}> Add Educational History </button>
                        </div>
                        <div className = "col-auto">
                            <button type = "button" className = "btn btn-danger" id = "RemoveEducationalHistory" onClick = {() => this.remove()}> Remove a Row </button>
                        </div>
                    </div>
                    <br />
                    <div className = "form-row">
                        <div className = "form-group col-md-2">
                            <label htmlFor = "SchoolEducationalHistory[]"> School/Institution </label>
                            <input className = "form-control" type = "text" name = "SchoolEducationalHistory[]" placeholder = "Input school" />
                        </div>
                        <div className = "form-group col-md-4">
                            <label htmlFor = "DegreeEducationalHistory[]"> Degree/Certification </label>
                            <input className = "form-control" type = "text" name = "DegreeEducationalHistory[]" placeholder = "Input degree" />
                        </div>
                        <div className = "form-group col-md-4">
                            <label htmlFor = "MajorEducationalHistory[]"> Major/Specialization </label>
                            <input className = "form-control" type = "text" name = "MajorEducationalHistory[]" placeholder = "Input major" />
                        </div>
			<div className = "form-group col-md-2 required">
				<label className = "control-label" htmlFor ="DegreeType"> Degree Type </label>
                    		<select className = "form-control" name = "DegreeType" required>
					<option>BS</option>
					<option>BA</option>
					<option>MS</option>
					<option>PhD</option>
				</select>
                	</div>
		     </div>
		     <div className = "form-row">
                        <div className = "form-group col-md-2">
                            <label htmlFor = "StartDateEducationalHistory[]"> Start Date </label>
                            <input type = "date" className = "form-control" name = "StartDateEducationalHistory[]" />
                        </div>
                        <div className = "form-group col-md-2">
                            <label htmlFor = "EndDateEducationalHistory[]"> End Date </label>
                            <input type = "date" className = "form-control" name = "EndDateEducationalHistory[]" />
                        </div>
                        <div className = "form-group col-md-2">
                            <label htmlFor = "ProofEducationalHistory[]"> Proof </label>
                            <input type = "file" className = "form-control-file" name = "ProofEducationalHistory[]" />
                        </div>
                    </div>
                    <div id = "EducationalHistory">
                        {this.state.duplicateForms}
                    </div>
                    <br />
                    <button type = "submit" className = "btn btn-primary"> Submit </button>
                    <hr />
                   
                </form>
	)
	}
}

export default EducationForm
