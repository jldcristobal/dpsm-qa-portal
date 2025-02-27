import axios from "axios"
import jwt from 'jsonwebtoken'

export default async function deletePublicService(data, token) {
	let cookieData = jwt.decode(token)
    let facultyId = cookieData.facultyId
	try {
		if(token) {
			try {
				const response = await axios.delete(process.env.API_URL + "/faculty/accomplishment/" + facultyId + "/public-service", {
					headers: {
						Authorization: `Bearer ${token}`
					},
					data: {
						publicServiceId: `${data}`
					}
				})
				return response.data
			}  catch (err) {
				console.error(err)
				return err
			}
		}
	} catch (err) {
		console.error(err)
		return err
	}
}