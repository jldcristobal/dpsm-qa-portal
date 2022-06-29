import React from 'react'
import ResearchGrantFormAuthor from './research-grant-form-author'
import { Formik, Form, Field } from "formik"
import Router from 'next/router'

import addResearch from '../../../services/faculty/accomplishments/addResearch'

class ResearchGrantForm extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			startdateProjected: ""
			startdateActual: ""
		}
	}
	
	render(){
		let ResearchDetails = {
			researchName: "",
			granter: "",
			amount: "",
			projectedStart: "",
			projectedEnd: "",
			actualStart: "",
			actualEnd: "",
			researchProgress: "",
			nonFacultyResearchers: ""
		}
		return(
			<Formik
				initialValues={ResearchDetails}
                onSubmit={async (values, {resetForm}) => {
                	let form = document.getElementById('resForm')
                	let formData = new FormData(form)

                	let alert = document.getElementById("researchalert")
					let res = await addResearch(formData, this.props.token)
					
					if(res.success == true) { 
						alert.className ="alert alert-success"
						alert.style = "visibility: visible"
						alert.innerHTML = res.message
					} else {
						alert.className = "alert alert-danger"
						if(res.error) values.message = res.error[0].message
						else values.message = res.message
					}
					
					$("#publicationalert").fadeTo(5000, 500).slideUp(500, function(){
						$("#publicationalert").slideUp(500);
					});

                	resetForm()
                	Router.push('/faculty/accomplishment')
                }}
			>
				{({ values, errors, touched, isSubmitting }) => (
					<Form id = "resForm">
						<hr />
						<br />
						<h6>Required</h6>
						<div className = "form-row">
							<div className = "form-group col-md-12">
								<label htmlFor = "Research[]" className = "required-label"> Research Project </label>
								<Field className = "form-control" type = "text" name = "researchName" placeholder = "Input research name" required />
							</div>
						</div>
						<div className = "form-row">
							<div className = "form-group col-md-12"> 
								<label htmlFor = "ResearchSponsor[]" className = "required-label"> Sponsor </label>
								<Field className = "form-control" type = "text" name = "granter" placeholder = "Input sponsor" required />
							</div>
						</div>
						<div className = "form-row">
							<div className = "form-group col-md-6"> 
								<label htmlFor = "ResearchAmount[]" className = "required-label"> Amount </label>
								<Field className = "form-control" type = "text" name = "amount" placeholder = "Input amount" required />
							</div>
							<div className = "form-group col-md-6">
	                            				<label htmlFor = "ResearchProof[]"> Proof </label>
	                            				<Field type = "file" className = "form-control-file" name = "proof" id = "proof" />
	                       				 </div>
						</div>
						<div className = "form-row">
							<div className = "form-group col-md-12">
								<label htmlFor = "ResearchAuthorNonDPSM[]"> Researchers (non-DPSM) </label>
								<Field className = "form-control" type = "text" name = "nonFacultyResearchers" placeholder = "Input all authors outside DPSM (separate names with commas)" />
							</div>
						</div>
						<div>
							<ResearchGrantFormAuthor faculty = {this.props.faculty} />
						</div>
						<div className = "form-row">
							<div className = "form-group col-md-2">
								<label htmlFor = "ResearchProjectedStartDate[]" className = "required-label"> Start Date (Projected) </label>
								<Field type = "date" className = "form-control" onChange={e => this.setState({ startdateProjected: e.target.value })} name = "projectedStart" required />
							</div>
							<div className = "form-group col-md-2">
								<label htmlFor = "ResearchProjectedEndDate[]" className = "required-label"> End Date (Projected) </label>
								<Field type = "date" className = "form-control" min={this.state.startdateProjected} name = "projectedEnd" required />
							</div>
							<div className = "form-group col-md-2">
								<label htmlFor = "ResearchStartDate[]" className = "required-label"> Start Date (Actual) </label>
								<Field type = "date" className = "form-control" onChange={e => this.setState({ startdateActual: e.target.value })} name = "actualStart" required />
							</div>
							<div className = "form-group col-md-2">
								<label htmlFor = "ResearchEndDate[]"> End Date (Actual) </label>
								<Field type = "date" className = "form-control" min={this.state.startdateActual} name = "actualEnd" />
							</div>
							<div className = "form-group col-md-4"> 
								<label htmlFor = "ResearchProgress[]" className = "required-label"> Research Progress </label>
								<Field as = "select" className = "form-control" name = "researchProgress" required>
	                                				<option value = "Ongoing">Ongoing</option>
	                                				<option value = "Completed">Completed</option>
	                            				</Field>
							</div>
						</div>
						<br />
						<button
							type = "submit"
							className = "btn btn-primary col-md-12"
							disabled = {isSubmitting}
						>
							Submit
						</button>
						<style jsx>{`
		label.required-label:after{
			content: "*";
			color: #f00;
		}
		h6:before{
			content: "* ";
			color: #f00;
		}
	`}</style>
					</Form>
				)}
				
			</Formik>
		)
	}
}

export default ResearchGrantForm
