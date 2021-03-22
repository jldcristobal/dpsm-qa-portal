import React from 'react'

class PublicServiceAccomplishmentForm extends React.Component{
	constructor(){
		super()
		this.state = {
			duplicateForms: []
		}
	}
	clone(){
		this.state.duplicateForms.push(<div><hr /><div className = "form-row">
                        <div className = "form-group col-md-2">
                            <label htmlFor = "PublicServicePosition[]"> Position/Role </label>
                            <input className = "form-control" type = "text" name = "PublicServicePosition[]" placeholder = "Input position/role" />
                        </div>
			<div className = "form-group col-md-2">
                            <label htmlFor = "PublicServiceOrganization[]"> Organization </label>
                            <input className = "form-control" type = "text" name = "PublicServiceOrganization[]" placeholder = "Input organization" />
                        </div>
			<div className = "form-group col-md-2">
                            <label htmlFor = "PublicServiceAccomplishmentStartDate[]"> Start Date </label>
                            <input type = "date" className = "form-control" name = "PublicServiceAccomplishmentStartDate[]" />
                        </div>
                        <div className = "form-group col-md-2">
                            <label htmlFor = "PublicServiceAccomplishmentEndDate[]"> End Date </label>
                            <input type = "date" className = "form-control" name = "PublicServiceAccomplishmentEndDate[]" />
                        </div>
                        <div className = "form-group col-md-2">
                            <label htmlFor = "PublicServiceAccomplishmentProof[]"> Proof </label>
                            <input type = "file" className = "form-control-file" name = "PublicServiceAccomplishmentProof[]" />
                        </div>
                    </div>
		    <div className = "form-row">
			<div className = "form-group col-md-4">
                            <label htmlFor = "PublicServiceAccomplishmentType[]"> Type of Contribution </label>
                            <select className = "form-control" name = "PublicServiceAccomplishmentType" required>
					<option>Within UPM</option>
					<option>Contribution to Profession</option>
					<option>Contribution to Nation</option>
					<option>Contribution to the World</option>
			    </select>
                        </div>
			<div className = "form-group col-md-6">
                            <label htmlFor = "PublicServiceAccomplishmentDescription[]"> Description </label>
                            <input className = "form-control" type = "text" name = "PublicServiceAccomplishmentDescription[]" placeholder = "Input description" />
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
                            <button type = "button" className = "btn btn-primary" id = "AddAccomplishment" onClick = {() => this.clone()}> Add Accomplishment </button>
                        </div>
                        <div className = "col-auto">
                            <button type = "button" className = "btn btn-danger" id = "RemoveAccomplishment" onClick = {() => this.remove()}> Remove a Row </button>
                        </div>
                    </div>
                    <br />
                    <div className = "form-row">
                        <div className = "form-group col-md-2">
                            <label htmlFor = "PublicServicePosition[]"> Position/Role </label>
                            <input className = "form-control" type = "text" name = "PublicServicePosition[]" placeholder = "Input position/role" />
                        </div>
			<div className = "form-group col-md-2">
                            <label htmlFor = "PublicServiceOrganization[]"> Organization </label>
                            <input className = "form-control" type = "text" name = "PublicServiceOrganization[]" placeholder = "Input organization" />
                        </div>
                        <div className = "form-group col-md-2">
                            <label htmlFor = "PublicServiceAccomplishmentStartDate[]"> Start Date </label>
                            <input type = "date" className = "form-control" name = "PublicServiceAccomplishmentStartDate[]" />
                        </div>
                        <div className = "form-group col-md-2">
                            <label htmlFor = "PublicServiceAccomplishmentEndDate[]"> End Date </label>
                            <input type = "date" className = "form-control" name = "PublicServiceAccomplishmentEndDate[]" />
                        </div>
                        <div className = "form-group col-md-2">
                            <label htmlFor = "PublicServiceAccomplishmentProof[]"> Proof </label>
                            <input type = "file" className = "form-control-file" name = "PublicServiceAccomplishmentProof[]" />
                        </div>
                    </div>
		    <div className = "form-row">
			<div className = "form-group col-md-4">
                            <label htmlFor = "PublicServiceAccomplishmentType[]"> Type of Contribution </label>
                            <select className = "form-control" name = "PublicServiceAccomplishmentType" required>
					<option>Within UPM</option>
					<option>Contribution to Profession</option>
					<option>Contribution to Nation</option>
					<option>Contribution to the World</option>
			    </select>
                        </div>
			<div className = "form-group col-md-6">
                            <label htmlFor = "PublicServiceAccomplishmentDescription[]"> Description </label>
                            <input className = "form-control" type = "text" name = "PublicServiceAccomplishmentDescription[]" placeholder = "Input description" />
                        </div>
		    </div>
                    <div id = "PublicServiceAccomplishment">
                        {this.state.duplicateForms}
                    </div>
                    <br />
                    <button type = "submit" className = "btn btn-primary"> Submit </button>
                    <hr />
                    
                </form>
		)
	}
}

export default PublicServiceAccomplishmentForm
