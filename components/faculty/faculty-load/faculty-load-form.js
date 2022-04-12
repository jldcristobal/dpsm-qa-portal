import React from 'react'
import { Formik, Form, Field } from 'formik'
import Router from 'next/router'

import addFacultyLoad from '../../../services/admin/addFacultyLoad'

class FacultyLoadForm extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let year = []
        let currYear = new Date().getFullYear()
        for(let i = currYear; i >= 1970; i--) {
            year.push(i)
        }
        
        let options = Object.keys(year).map((i) => {
            return(
                <option value={year[i]}>{year[i]-1}-{year[i]}</option>
            )
        })
        
        let FacLoadDetails = {
            subject: "",
            section: "",
            semester: "1st Semester",
            acadYear: currYear,
            syllabus: ""
        }

        return(
            <Formik
                initialValues={FacLoadDetails}
                onSubmit={async (values, {resetForm}) => {
                    let form = document.getElementById('facLoadForm')
                    let formData = new FormData(form)

                    let res = await addFacultyLoad(formData, this.props.token)
                    let alert = document.getElementById("loadalert")
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
                    $("#loadalert").fadeTo(5000, 500).slideUp(500, function(){
                        $("#loadalert").slideUp(500);
                    });

                    resetForm()
                    Router.push('/admin/' + this.props.facultyId)
                }}
            >
                {({ values, errors, touched, isSubmitting }) => (
                    <Form id = "facLoadForm">
                        <hr />
                        <h5>Add Faculty Load</h5>
                        <br/>
                        <h6>Required</h6>
                        <br />
                        <div className = "form-row">
                            <Field className = "form-control" type = "hidden" name = "facultyId" value = {this.props.facultyId} />
                            <div className = "form-group col-md-2">
                                <label htmlFor = "Subject"> Subject </label>
                                <Field className = "form-control" type = "text" name = "subject" placeholder = "Input subject" required />
                            </div>
                            <div className = "form-group col-md-2">
                                <label htmlFor = "Section"> Section </label>
                                <Field className = "form-control" type = "text" name = "section" placeholder = "Input section" required />
                            </div>
                            <div className = "form-group col-md-3">
                                <label htmlFor = "Semester"> Semester </label>
                                <Field as = "select" className = "form-control" name = "semester" required>
                                    <option value = "1st">1st Semester</option>
                                    <option value = "2nd">2nd Semester</option>
                                    <option value = "Midyear">Mid-Year</option>
                                </Field>
                            </div>
                            <div className = "form-group col-md-2">
                                <label htmlFor = "Year"> Academic Year </label>
                                <Field as = "select" className = "form-control" name = "academicYear" required>
                                    {options}
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
                    </Form>
                )}
                 <style jsx>{`
            .form-group.required .control-label:after{
                content: "*";
                color: #f00;
            }
            h6:before{
                content: "* ";
                color: #f00;
            }
            #alert {
                visibility: hidden;
            }
        `}</style>
            </Formik>
        )
    }
}

export default FacultyLoadForm
