import Layout from '../components/layout'

function ChangePassword() {
    return (
        <Layout>
		<br />
		<h4 align = "center"> Change Password </h4>
                <form>
			<div className = "form-group col-md-6">
				<label htmlFor="old-password">Original Password:</label>
                		<input className = "form-control" type="password" id="old-password" name="old-password" />
			</div>
			<div className = "form-group col-md-6">
				<label htmlFor="new-password">New Password:</label>
                		<input className = "form-control" type="password" id="new-password" name="new-password" />
			</div>
			<div className = "form-group col-md-6">
				<label htmlFor="confirm-new-password">Confirm New Password:</label>
                		<input className = "form-control" type="password" id="confirm-new-password" name="confirm-new-password" />
			</div>
			<input type="submit" className = "btn btn-primary" value="Change Password"></input>
		</form>
        </Layout>
    )
  }
  
  export default ChangePassword