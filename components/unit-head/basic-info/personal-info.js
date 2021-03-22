import Link from 'next/link'
import PersonalInfoDependents from './personal-info-dependents'

function PersonalInfo() {
    return (
        <div>
	    	<h3 align = "center"> Personal Information: <u>Cena, John</u> </h3>
		<br />
		<h6>Required</h6>
		
            <form action="">
		<br />
                <div className = "form-row">
                    <div className = "form-group col-md-3 required">
                        <label className = "control-label" htmlFor = "FirstName"> First Name </label>
                        <input className = "form-control" type = "text" name = "FirstName" value = "Jodie Lee Diane" required />
                    </div>
                    <div className = "form-group col-md-3">
                        <label htmlFor = "MiddleName"> Middle Name </label>
                        <input className = "form-control" type = "text" name = "MiddleName" value = "Pacay"/>
                    </div>
                    <div className = "form-group col-md-3 required">
                        <label className = "control-label" htmlFor = "LastName"> Last Name </label>
                        <input className = "form-control" type = "text" name = "LastName" value = "Cristobal" required />
                    </div>
		    <div className = "form-group col-md-3">
                        <label htmlFor = "Suffix"> Suffix </label>
                        <input className = "form-control" type = "text" name = "Suffix" />
                    </div>
                </div>
                <div className = "form-row">
                    <div className = "form-group col-md-4 required">
				<label className = "control-label" htmlFor ="Sex"> Sex </label>
                    		<select className = "form-control" name = "Sex" required>
					<option>Male</option>
					<option>Female</option>
				</select>
                	</div>
                    <div className = "form-group col-md-4 required">
                        <label className = "control-label" htmlFor = "DateOfBirth"> Date of Birth </label>
                        <input className = "form-control" type = "date" name = "DateOfBirth" value = "1994-01-06" required />
                    </div>
                    <div className = "form-group col-md-4 required">
                        <label className = "control-label" htmlFor = "PlaceOfBirth"> Place of Birth </label>
                        <input className = "form-control" type = "text" name = "PlaceOfBirth" value = "Cristobal" required />
                    </div>
                </div>
                <br />
                <div className = "form-group required">
                    <label className = "control-label" htmlFor = "PresentAddress"> Present Address </label>
                    <input className = "form-control" type = "text" name = "PresentAddress" required />
                </div>
                <div className = "form-group required">
                    <label className = "control-label" htmlFor = "PermanentAddress"> Permanent Address </label>
                    <input className = "form-control" type = "text" name = "PermanentAddress" required />
                </div>
		<div className = "form-row">
                	<div className = "form-group col-md-6 required">
				<label className = "control-label" htmlFor ="CivilStatus"> Civil Status </label>
                    		<select className = "form-control" name = "CivilStatus" required>
					<option>Single</option>
					<option>Married</option>
					<option>Separated (Legally)</option>
					<option>Divorced</option>
					<option>Widowed</option>
				</select>
                	</div>
               		<div className = "form-group col-md-6">
                    		<label htmlFor = "Religion"> Religion </label>
                    		<input className = "form-control" type = "text" name = "Religion" />
                	</div>
		</div>
                <div className = "form-row">
                    <div className = "form-group col-md-6 required">
                        <label className = "control-label" htmlFor = "ContactNumber"> Contact Number (Landline) </label>
                        <input className = "form-control" type = "tel" name = "ContactNumberLandline" pattern = "[0-9]{8}" required />
                    </div>
		    <div className = "form-group col-md-6 required">
                        <label className = "control-label" htmlFor = "ContactNumber"> Contact Number (Mobile) </label>
                        <input className = "form-control" type = "tel" name = "ContactNumberMobile" pattern = "[0]{1}[9]{1}[0-9]{9}" required />
                    </div>
                </div>
		<div className = "form-row">
		    <div className = "form-group col-md-6 required">
                        <label className = "control-label" htmlFor = "EmailAddress"> Email Address (UP Mail) </label>
                        <input className = "form-control" type = "email" name = "EmailAddressUP" disabled required />
                    </div>
		    <div className = "form-group col-md-6">
                        <label className = "control-label" htmlFor = "EmailAddress"> Email Address (alternate) </label>
                        <input className = "form-control" type = "email" name = "EmailAddressAlt" />
                    </div>
		</div>
                <div className = "form-row">
                    <div className = "form-group col-md-6 required">
                        <label className = "control-label" htmlFor = "EmergencyContact"> Emergency Contact </label>
                        <input className = "form-control" type = "text" name = "EmergencyContact" required />
                    </div>
                    <div className = "form-group col-md-6 required">
                        <label className = "control-label" htmlFor = "EmergencyContactNumber"> Emergency Contact Number </label>
                        <input className = "form-control" type = "tel" name = "EmergencyContactNumber" pattern = "[0]{1}[9]{1}[0-9]{9}" required />
                    </div>
                </div>
		<h5 align = "center"> Dependents </h5>
		<div className = "form-row">
		    <div className = "form-group col-md-4 required"> 
			<label className = "control-label" htmlFor = "Dependent"> Name of Dependent </label>
                        <input className = "form-control" type = "text" name = "Dependent" value = "Steve" required disabled />
                    </div>
                    <div className = "form-group col-md-4 required">
                        <label className = "control-label" htmlFor = "DependentDateOfBirth"> Date of Birth </label>
                        <input className = "form-control" type = "date" name = "DependentDateOfBirth" value = "1994-01-06" required disabled />
                    </div>
		    <div className = "form-group col-md-4 required">
                        <label className = "control-label" htmlFor = "DependentRelationship[]"> Relationship to User </label>
                        <input className = "form-control" type = "text" name = "DependentRelationship[]" value = "Son" required disabled />
                    </div>
                </div>
		<PersonalInfoDependents />
		{/* <div className = "form-row">
			<div className = "form-group col-md-3 required">
				<label className = "control-label" htmlFor ="Unit"> Unit </label>
                    		<select className = "form-control" name = "Unit">
					<option>Mathematics and Computer Science</option>
					<option>Physics and Geology</option>
					<option>Chemistry</option>
				</select>
                	</div>
			<div className = "form-group col-md-6 required">
				<label className = "control-label" htmlFor ="Position"> Position </label>
                    		<select className = "form-control" name = "Position" required>
					<option>Instructor 1</option>
					<option>Instructor 2</option>
					<option>Instructor 3</option>
					<option>Instructor 4</option>
					<option>Instructor 5</option>
					<option>Instructor 6</option>
					<option>Instructor 7</option>
					<option>Assistant Professor 1</option>
					<option>Assistant Professor 2</option>
					<option>Assistant Professor 3</option>
					<option>Assistant Professor 4</option>
					<option>Assistant Professor 5</option>
					<option>Assistant Professor 6</option>
					<option>Assistant Professor 7</option>
					<option>Associate Professor 1</option>
					<option>Associate Professor 2</option>
					<option>Associate Professor 3</option>
					<option>Associate Professor 4</option>
					<option>Associate Professor 5</option>
					<option>Associate Professor 6</option>
					<option>Associate Professor 7</option>
					<option>Professor 1</option>
					<option>Professor 2</option>
					<option>Professor 3</option>
					<option>Professor 4</option>
					<option>Professor 5</option>
					<option>Professor 6</option>
					<option>Professor 7</option>
					<option>Professor 8</option>
					<option>Professor 9</option>
					<option>Professor 10</option>
					<option>Professor 11</option>
					<option>Professor 12</option>
					<option>Lecturer 1</option>
					<option>Lecturer 2</option>
					<option>Lecturer 3</option>
					<option>Senior Lecturer 1</option>
					<option>Senior Lecturer 2</option>
					<option>Senior Lecturer 3</option>
				</select>
                	</div>
			<div className = "form-group col-md-3 required">
				<label className = "control-label" htmlFor ="PositionType"> Type </label>
                    		<select className = "form-control" name = "PositionType" required>
					<option>Part-time</option>
					<option>Full-time</option>
				</select>
                	</div>
		</div> */}
		<br />
		<button type = "submit" className = "btn btn-primary"> Update </button>
            </form>
	<style jsx>{`
		.form-group.required .control-label:after{
			content: "*";
			color: #f00;
		}
		h6:before{
			content: "* ";
			color: #f00;
		}
	`}</style>
        </div>     
    )
  }
  
  export default PersonalInfo
