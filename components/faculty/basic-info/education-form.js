import React from 'react'
import { Formik, Form, Field } from 'formik'
import Router from 'next/router'

import addEducation from '../../../services/faculty/basic-info/addEducation'

class EducationForm extends React.Component{
    constructor(props){
        super(props)
	this.state = {
		startdate: ""
	}
    }

    render(){
        let EducationDetails = {
            institutionSchool: "",
            degreeType: "",
            degreeCert: "",
            majorSpecialization: "",
            startDate: "",
            endDate: "",
            proof: ""
        }

        return(
            <Formik
                initialValues={EducationDetails}
                onSubmit={async (values, {resetForm}) => {
                    let alert = document.getElementById("educalert")

                    let form = document.getElementById('educForm')
                    let formData = new FormData(form)

                    let res = await addEducation(formData, this.props.token)
                    if(res.success == true) { 
                        alert.className ="alert alert-success"
                        alert.style = "visibility: visible"
                        alert.innerHTML = res.message
                    } else {
                        alert.className = "alert alert-danger"
                        if(res.error) alert.innerHTML = res.error[0].message
                        else alert.innerHTML = res.message
                    }
                    
                    alert.setAttribute("style", "visibility: visible");
                    $("#educalert").fadeTo(5000, 500).slideUp(500, function(){
                        $("#educalert").slideUp(500);
                    });

                    resetForm()
                    Router.push('/faculty/basic-info')
                }}
            >
                {({ values, errors, touched, isSubmitting }) => (
                    <Form id = "educForm">
                        <hr />
                        <br />
                        <h6>Required</h6>
                        <div className = "form-row">
                            <div className = "form-group col-md-12">
                                <label htmlFor = "SchoolEducationalHistory[]" className = "required-label"> School/Institution </label>
                                <Field className = "form-control" type = "text" name = "institutionSchool" id ="institutionSchool" placeholder = "Input school" required />
                            </div>
                        </div>
                        <div className = "form-row">
                            <div className = "form-group col-md-2 required">
                                <label className = "control-label" htmlFor ="DegreeType" className = "required-label"> Degree Type </label>
                                    <Field as = "select" className = "form-control" name = "degreeType" id = "degreeType" required>
                                        <option value = "AA">AA</option>
                                        <option value = "AS">AS</option>
                                        <option value = "BA">BA</option>
                                        <option value = "BS">BS</option>
                                        <option value = "MA">MA</option>
                                        <option value = "MS">MS</option>
                                        <option value = "MD">MD</option>
                                        <option value = "PhD">PhD</option>
                                        <option value = "DEng">DEng</option>
                                        <option value = "DrPH">DrPH</option>
                                    </Field>
                            </div>
                            <div className = "form-group col-md-4">
                                <label htmlFor = "DegreeEducationalHistory[]" className = "required-label"> Degree/Certification </label>
                                <Field className = "form-control" type = "text" name = "degreeCert" id = "degreeCert" placeholder = "Input degree" required />
                            </div>

                            <div className = "form-group col-md-4">
                                <label htmlFor = "MajorEducationalHistory[]"> Major/Specialization </label>
                                <Field className = "form-control" type = "text" name = "majorSpecialization" id = "majorSpecialization" placeholder = "Input major" />
                            </div>
                        </div>
                         <div className = "form-row">
                                <div className = "form-group col-md-2">
                                    <label htmlFor = "StartDateEducationalHistory[]" className = "required-label"> Start Date </label>
                                    <Field type = "date" className = "form-control" name = "startDate" onChange={e => this.setState({ startdate: e.target.value })} id = "startDate" required />
                                </div>
                                <div className = "form-group col-md-2">
                                    <label htmlFor = "EndDateEducationalHistory[]"> End Date </label>
                                    <Field type = "date" className = "form-control" name = "endDate" min={this.state.startdate} id = "endDate" />
                                </div>
                                <div className = "form-group col-md-2">
                                    <label htmlFor = "ProofEducationalHistory[]"> Proof </label>
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

export default EducationForm
