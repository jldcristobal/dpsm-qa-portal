import React from 'react';
import { Formik, Form, Field } from "formik"
import Router from 'next/router'

import addWorkExp from '../../../services/faculty/basic-info/addWorkExp'

class WorkExpForm extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			startdate: ""
		}
	}

	render(){
		let WorkDetails = {
			employerName: "",
			position: "",
			startDate: "",
			endDate: "",
			description: ""
		}
		return(
			<Formik
				initialValues={WorkDetails}
				onSubmit={async (values, {resetForm}) => {
					let alert = document.getElementById("workexpalert")
					let res = await addWorkExp(values, this.props.token)
					if(res.success == true) { 
						alert.className ="alert alert-success"
						alert.style = "visibility: visible"
						alert.innerHTML = res.message
					} else {
						alert.className = "alert alert-danger"
						if(res.error) alert.innerHTML = res.error[0].message
						else alert.innerHTML = res.message
					}
					$("#workexpalert").fadeTo(5000, 500).slideUp(500, function(){
						$("#workexpalert").slideUp(500);
					});
					
					resetForm()
					Router.push('/faculty/basic-info', '/faculty/basic-info')
				}}
			>
				{({ values, errors, touched, isSubmitting }) => (
					<Form>
						<hr />
						<br />
						<h6>Required</h6>
						<div className = "form-row">
							<div className = "form-group col-md-3">
								<label htmlFor = "EmployerWorkExperience[]" className = "required-label"> Employer </label>
								<Field className = "form-control" type = "text" name = "employerName" placeholder = "Input name of employer" required />
							</div>
							<div className = "form-group col-md-3">
								<label htmlFor = "PositionWorkExperience[]" className = "required-label"> Title/Position </label>
								<Field className = "form-control" type = "text" name = "position" placeholder = "Input position" required />
							</div>
							<div className = "form-group col-md-6">
								<label htmlFor = "DescriptionWorkExperience[]"> Description </label>
								<Field className = "form-control" type = "text" name = "description" placeholder = "Add Description" />
							</div>
						</div>
						<div className = "form-row">
							<div className = "form-group col-md-3">
								<label htmlFor = "StartDateWorkExperience[]" className = "required-label"> Start Date </label>
								<Field type = "date" className = "form-control" onChange={e => this.setState({ startdate: e.target.value })} name = "startDate" required />
							</div>
							<div className = "form-group col-md-3">
								<label htmlFor = "EndDateWorkExperience[]"> End Date </label>
								<Field type = "date" className = "form-control" min={this.state.startdate} name = "endDate" />
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

export default WorkExpForm;
