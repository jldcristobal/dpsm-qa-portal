import React from 'react'

class TrainingSeminarForm extends React.Component{
	constructor(){
		super()
		this.state = {
			duplicateForms: []
		}
	}
	clone(){
		this.state.duplicateForms.push(<div><hr /><div className = "form-row">
			<div className = "form-group col-md-3">
                            <label htmlFor = "TrainingSeminar[]"> Name of Training/Seminar </label>
                            <input className = "form-control" type = "text" name = "TrainingSeminar[]" placeholder = "Input training/seminar" />
                        </div>
			<div className = "form-group col-md-3">
                            <label htmlFor = "TrainingSeminarRole[]"> Role</label>
                            <input className = "form-control" type = "text" name = "TrainingSeminarRole[]" placeholder = "Input training/seminar" />
                        </div>
			<div className = "form-group col-md-3">
                            <label htmlFor = "TrainingSeminarVenue[]"> Venue </label>
                            <input className = "form-control" type = "text" name = "TrainingSeminarVenue[]" placeholder = "Input venue" />
                        </div>
			<div className = "form-group col-md-2">
                            <label htmlFor = "TrainingSeminarStartDate[]"> Start Date </label>
                            <input type = "date" className = "form-control" name = "TrainingSeminarStartDate[]" />
                        </div>
			<div className = "form-group col-md-2">
                            <label htmlFor = "TrainingSeminarEndDate[]"> End Date </label>
                            <input type = "date" className = "form-control" name = "TrainingSeminarEndDate[]" />
                        </div>
			<div className = "form-group col-md-8">
			    <label htmlFor = "TrainingSeminarRemarks[]"> Remarks </label>
                            <input className = "form-control" type = "text" name = "TrainingSeminarRemarks[]" placeholder = "Input remarks" />
			</div>
			<div className = "form-group col-md-2">
                            <label htmlFor = "TrainingSeminarProof[]"> Proof </label>
                            <input type = "file" className = "form-control-file" name = "TrainingSeminarProof[]" />
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
                            <button type = "button" className = "btn btn-primary" id = "AddAccomplishment" onClick = {() => this.clone()}> Add Training/Seminar </button>
                        </div>
                        <div className = "col-auto">
                            <button type = "button" className = "btn btn-danger" id = "RemoveAccomplishment" onClick = {() => this.remove()}> Remove a Row </button>
                        </div>
                    </div>
                    <br />
                    <div className = "form-row">
			<div className = "form-group col-md-3">
                            <label htmlFor = "TrainingSeminar[]"> Name of Training/Seminar </label>
                            <input className = "form-control" type = "text" name = "TrainingSeminar[]" placeholder = "Input training/seminar" />
                        </div>
			<div className = "form-group col-md-3">
                            <label htmlFor = "TrainingSeminarRole[]"> Role</label>
                            <input className = "form-control" type = "text" name = "TrainingSeminarRole[]" placeholder = "Input training/seminar" />
                        </div>
			<div className = "form-group col-md-3">
                            <label htmlFor = "TrainingSeminarVenue[]"> Venue </label>
                            <input className = "form-control" type = "text" name = "TrainingSeminarVenue[]" placeholder = "Input venue" />
                        </div>
			<div className = "form-group col-md-2">
                            <label htmlFor = "TrainingSeminarStartDate[]"> Start Date </label>
                            <input type = "date" className = "form-control" name = "TrainingSeminarStartDate[]" />
                        </div>
			<div className = "form-group col-md-2">
                            <label htmlFor = "TrainingSeminarEndDate[]"> End Date </label>
                            <input type = "date" className = "form-control" name = "TrainingSeminarEndDate[]" />
                        </div>
			<div className = "form-group col-md-8">
			    <label htmlFor = "TrainingSeminarRemarks[]"> Remarks </label>
                            <input className = "form-control" type = "text" name = "TrainingSeminarRemarks[]" placeholder = "Input remarks" />
			</div>
			<div className = "form-group col-md-2">
                            <label htmlFor = "TrainingSeminarProof[]"> Proof </label>
                            <input type = "file" className = "form-control-file" name = "TrainingSeminarProof[]" />
                        </div>
                    </div>
                    <div id = "TrainingSeminar">
                        {this.state.duplicateForms}
                    </div>
                    <br />
                    <button type = "submit" className = "btn btn-primary"> Submit </button>
                    <hr />
                    
                </form>
		)
	}
}

export default TrainingSeminarForm