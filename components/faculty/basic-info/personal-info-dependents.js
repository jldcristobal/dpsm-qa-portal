import React from 'react'

class PersonalInfoDependents extends React.Component{
	constructor(){
		super()
		this.state = {
			duplicateForms: []
		}
	}

	clone(){
		this.state.duplicateForms.push(<div><hr /><div className = "form-row">
                        <div className = "form-group col-md-6">
                            <label htmlFor = "DependentName[]"> Name </label>
                            <input className = "form-control" type = "text" name = "DependentName[]" placeholder = "Input name of dependent" />
                        </div>
                        <div className = "form-group col-md-4">
                            <label htmlFor = "DependentDateOfBirth[]"> Date of Birth </label>
                            <input type = "date" className = "form-control" name = "DependentDateOfBirth[]" />
                        </div>
			<div className = "form-group col-md-4 required">
                            <label className = "control-label" htmlFor = "DependentRelationship[]"> Relationship to User </label>
                            <input className = "form-control" type = "text" name = "DependentRelationship[]" />
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
		<div>
                    <hr />
                    <div className = "form-row">
                        <div className = "col-auto">
                            <button type = "button" className = "btn btn-primary" id = "AddDependent" onClick = {() => this.clone()}> Add Dependent </button>
                        </div>
                        <div className = "col-auto">
                            <button type = "button" className = "btn btn-danger" id = "RemoveDependent" onClick = {() => this.remove()}> Remove a Row </button>
                        </div>
                    </div>
                    <br />
                    <div className = "form-row">
                        <div className = "form-group col-md-6">
                            <label htmlFor = "DependentName[]"> Name </label>
                            <input className = "form-control" type = "text" name = "DependentName[]" placeholder = "Input name of dependent" />
                        </div>
                        <div className = "form-group col-md-4">
                            <label htmlFor = "DependentDateOfBirth[]"> Date of Birth </label>
                            <input type = "date" className = "form-control" name = "DependentDateOfBirth[]" />
                        </div>
			<div className = "form-group col-md-4 required">
                            <label className = "control-label" htmlFor = "DependentRelationship[]"> Relationship to User </label>
                            <input className = "form-control" type = "text" name = "DependentRelationship[]" />
                    	</div>
                    </div>
                    <div id = "Dependents">
                        {this.state.duplicateForms}
                    </div>
                   
		</div>
		)
	}
}

export default PersonalInfoDependents

