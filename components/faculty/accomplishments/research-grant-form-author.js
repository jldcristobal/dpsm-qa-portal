import React from 'react'

class ResearchGrantFormAuthor extends React.Component{
	constructor(){
		super()
		this.state = {
			duplicateAuthors: []
		}
	}
	clone(){
		this.state.duplicateAuthors.push(<div><div className = "form-row">
			<div className = "form-group col-md-6">
				<label htmlFor = "ResearchAuthorDPSM[]"> Researcher (from DPSM) </label>
				<select className = "form-control col-md-6" name = "ResearchAuthorDPSM[]" required>
					<option>Cabalo, Francis</option>
					<option>Yu, Berwin</option>
				</select>
			</div>
		</div></div>)
		this.setState({

		})
	}
	remove(){
		this.state.duplicateAuthors.pop()
		this.setState({

		})
	}
	render(){
		return(<div>
			<div className = "btn-group btn-group-sm col-md-2">
				<button type = "button" className = "btn btn-primary" id = "AddAuthor" onClick = {() => this.clone()}> Add Researcher </button>
				<button type = "button" className = "btn btn-danger" id = "RemoveAuthor" onClick = {() => this.remove()}> Remove a Row </button>
			</div>
			<div className = "form-row">
			<div className = "form-group col-md-6">
				<label htmlFor = "ResearchAuthorDPSM[]"> Researcher (from DPSM) </label>
				<select className = "form-control col-md-6" name = "ResearchAuthorDPSM[]" required>
					<option>Cabalo, Francis</option>
					<option>Yu, Berwin</option>
				</select>
			</div>
		</div>
		<div>
				{this.state.duplicateAuthors}
		</div>
		</div>
		)
	}
}

export default ResearchGrantFormAuthor
