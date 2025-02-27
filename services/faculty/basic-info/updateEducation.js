import axios from "axios"
import jwt from 'jsonwebtoken'

export default async function updateEducation(formData, token) {
	let cookieData = jwt.decode(token)
    let facultyId = cookieData.facultyId
	try {
	    if (token) {

	        let url = process.env.API_URL + '/faculty/basic-info/' + facultyId;

		    if(formData.get('proof') == "") {
				formData.delete('proof')
			}
			if(formData.get('endDate') == "") {
				formData.delete('endDate')
			}
		    const response = await axios({
			    method: 'PUT',
			    url: url + '/education',
			    data: formData,
			    headers: {'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}`}
		    })	
			return response.data
	    } else {
	        console.log(access.result.message)
		}
	} catch (err) {
		console.error(err)
		return err
	}
}