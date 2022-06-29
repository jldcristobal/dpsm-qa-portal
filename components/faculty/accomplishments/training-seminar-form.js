import React from 'react'
import { Formik, Form, Field } from "formik"
import Router from 'next/router'

import addTraining from '../../../services/faculty/accomplishments/addTraining'

class TrainingSeminarForm extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			startdate: ""
		}
	}
	
	render(){
        let TrainingDetails = {
            title: "",
            role: "",
            dateFrom: "",
            dateTo: "",
            venue: "",
            proof: ""
        }
		return(
            <Formik
                initialValues={TrainingDetails}
                onSubmit={async (values, {resetForm}) => {
                    let form = document.getElementById('tsForm')
                    let formData = new FormData(form)

                    let alert = document.getElementById("trainingseminaralert")
                    let res = await addTraining(formData, this.props.token)
                    if(res.success == true) { 
                        alert.className ="alert alert-success"
                        alert.style = "visibility: visible"
                        alert.innerHTML = res.message
                    } else {
                        alert.className = "alert alert-danger"
                        if(res.error) alert.innerHTML = res.error[0].message
                        else alert.innerHTML = res.message
                    }
                    $("#trainingseminaralert").fadeTo(5000, 500).slideUp(500, function(){
                        $("#trainingseminaralert").slideUp(500);
                    });

                    resetForm()
                    Router.push('/faculty/accomplishment')
                }}
            >
                {({ values, errors, touched, isSubmitting }) => (
        			<Form id = "tsForm">
                        <hr />
                        <br />
			<h6>Required</h6>
                        <div className = "form-row">
                            <div className = "form-group col-md-3">
                                <label htmlFor = "TrainingSeminar[]" className = "required-label"> Name of Training/Seminar </label>
                                <Field className = "form-control" type = "text" name = "title" id = "title" placeholder = "Input training/seminar" required />
                            </div>
                            <div className = "form-group col-md-3">
                                <label htmlFor = "TrainingSeminarRole[]" className = "required-label"> Role</label>
                                <Field className = "form-control" type = "text" name = "role" id = "role" placeholder = "Input role in training/seminar" required />
                            </div>
                            <div className = "form-group col-md-2">
                                <label htmlFor = "TrainingSeminarVenue[]" className = "required-label"> Venue </label>
                                <Field className = "form-control" type = "text" name = "venue" id = "venue" placeholder = "Input venue" required />
                            </div>
                            <div className = "form-group col-md-2">
                                <label htmlFor = "TrainingSeminarStartDate[]" className = "required-label"> Start Date </label>
                                <Field type = "date" className = "form-control" onChange={e => this.setState({ startdate: e.target.value })}  name = "dateFrom" id = "dateFrom" required />
                            </div>
                            <div className = "form-group col-md-2">
                                <label htmlFor = "TrainingSeminarEndDate[]"> End Date </label>
                                <Field type = "date" className = "form-control" min={this.state.startdate} name = "dateTo" id = "dateTo" />
                            </div>
                            <div className = "form-group col-md-8">
                                <label htmlFor = "TrainingSeminarRemarks[]"> Remarks </label>
                                <Field className = "form-control" type = "text" name = "remarks" id = "remarks" placeholder = "Input remarks" />
                            </div>
                            <div className = "form-group col-md-4">
                                <label htmlFor = "TrainingSeminarProof[]"> Proof </label>
                                <Field type = "file" className = "form-control-file" name = "proof" id = "proof" />
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

export default TrainingSeminarForm
