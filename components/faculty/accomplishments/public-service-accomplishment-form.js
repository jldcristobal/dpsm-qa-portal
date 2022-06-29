import React from 'react'
import { Formik, Form, Field } from "formik"
import Router from 'next/router'

import addPublicService from '../../../services/faculty/accomplishments/addPublicService'

class PublicServiceAccomplishmentForm extends React.Component{
    constructor(props){
        super(props)
	this.state = {
		startdate: ""
	}
    }
    
	render(){
        let PublicServiceDetails = {
            type: "",
            position: "",
            organization: "",
            description: "",
            startDate: "",
            endDate: "",
            proof: ""
        }

		return(
            <Formik
                initialValues={PublicServiceDetails}
                onSubmit={async (values, {resetForm}) => {
                    let form = document.getElementById('psForm')
                    let formData = new FormData(form)
                    let alert = document.getElementById("publicservicealert")
                    let res = await addPublicService(formData, this.props.token)
                    if(res.success == true) { 
                        alert.className ="alert alert-success"
                        alert.style = "visibility: visible"
                        alert.innerHTML = res.message
                    } else {
                        alert.className = "alert alert-danger"
                        if(res.error) alert.innerHTML = res.error[0].message
                        else alert.innerHTML = res.message
                    }
                    $("#publicservicealert").fadeTo(5000, 500).slideUp(500, function(){
                        $("#publicservicealert").slideUp(500);
                    });

                    resetForm()
                    Router.push('/faculty/accomplishment')
                }}
            >
                {({ values, errors, touched, isSubmitting }) => (
                <Form id = "psForm">
                    <hr />
                    <br />
		    <h6>Required</h6>
                    <div className = "form-row">
                        <div className = "form-group col-md-2">
                            <label htmlFor = "PublicServicePosition[]" className = "required-label"> Position/Role </label>
                            <Field className = "form-control" type = "text" name = "position" id = "position" placeholder = "Input position/role" required />
                        </div>
                    <div className = "form-group col-md-2">
                            <label htmlFor = "PublicServiceOrganization[]" className = "required-label"> Organization </label>
                            <Field className = "form-control" type = "text" name = "organization" id = "organization" placeholder = "Input organization" required />
                        </div>
                        <div className = "form-group col-md-2">
                            <label htmlFor = "PublicServiceAccomplishmentStartDate[]" className = "required-label"> Start Date </label>
                            <Field type = "date" className = "form-control" onChange={e => this.setState({ startdate: e.target.value })} name = "startDate" id = "startDate" required />
                        </div>
                        <div className = "form-group col-md-2">
                            <label htmlFor = "PublicServiceAccomplishmentEndDate[]"> End Date </label>
                            <Field type = "date" className = "form-control" min={this.state.startdate} name = "endDate" id = "endDate" />
                        </div>
                        <div className = "form-group col-md-2">
                            <label htmlFor = "PublicServiceAccomplishmentProof[]"> Proof </label>
                            <Field type = "file" className = "form-control-file" name = "proof" id = "proof"  />
                        </div>
                    </div>
                    <div className = "form-row">
                    <div className = "form-group col-md-4">
                        <label htmlFor = "PublicServiceAccomplishmentType[]" className = "required-label"> Type of Contribution </label>
                        <Field as = "select" className = "form-control" name = "type" id = "type" required>
                            <option value = "Within UPM">Within UPM</option>
                            <option value = "Within Pro">Contribution to the Profession</option>
                            <option value = "Within Nat">Contribution to the Nation</option>
                            <option value = "Within Wor">Contribution to the World</option>
                        </Field>
                    </div>
                    <div className = "form-group col-md-6">
                            <label htmlFor = "PublicServiceAccomplishmentDescription[]"> Description </label>
                            <Field className = "form-control" type = "text" name = "description" id = "description" placeholder = "Input description" />
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
                    <hr />
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

export default PublicServiceAccomplishmentForm
