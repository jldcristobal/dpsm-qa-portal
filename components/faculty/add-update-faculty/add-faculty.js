function AddFaculty(){
	return(
		<form action="">
		<h3 align ="center"> Add Faculty Member </h3>
		<br />
                <div className = "form-row">
                    <div className = "form-group col-md-3 required">
                        <label className = "control-label" htmlFor = "FirstName"> First Name </label>
                        <input className = "form-control" type = "text" name = "FirstName" required />
                    </div>
                    <div className = "form-group col-md-3">
                        <label htmlFor = "MiddleName"> Middle Name </label>
                        <input className = "form-control" type = "text" name = "MiddleName"/>
                    </div>
                    <div className = "form-group col-md-3 required">
                        <label className = "control-label" htmlFor = "LastName"> Last Name </label>
                        <input className = "form-control" type = "text" name = "LastName" required />
                    </div>
		    <div className = "form-group col-md-3">
                        <label htmlFor = "Suffix"> Suffix </label>
                        <input className = "form-control" type = "text" name = "Suffix" />
                    </div>
                </div>
		<div className = "form-row">
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
		</div>
		<br />
		<button type = "submit" className = "btn btn-primary"> Add Faculty </button>
            </form>
	)
}

export default AddFaculty