import axios from "axios"

export default async function approveUnitHead(currentUser, incomingUser, unitId, remarks, token) {
	try {
		if (token) {
			if(!remarks) {
				let url = process.env.API_URL + '/user/' + currentUser;
				const response = await axios({
					method: 'PUT',
					url: url,
					data: {
						role: '1'
					},
					headers: {'Content-Type': 'application/json', Authorization: `Bearer ${token}`}
				})	
				if(response.data.success == true) {
					let url = process.env.API_URL + '/user/' + incomingUser;
					const response = await axios({
						method: 'PUT',
						url: url,
						data: {
							role: '2'
						},
						headers: {'Content-Type': 'application/json', Authorization: `Bearer ${token}`}
					})	
					if(response.data.success == true) {
						let url = process.env.API_URL + '/faculty/basic-info/unit/' + unitId;
						const response = await axios({
							method: 'PUT',
							url: url,
							data: {
								incomingUnitHead: null
							},
							headers: {'Content-Type': 'application/json', Authorization: `Bearer ${token}`}
						})
					}
					return response.data
				}
			} else {
				let url = process.env.API_URL + '/faculty/basic-info/unit/' + unitId;
				const response = await axios({
					method: 'PUT',
					url: url,
					data: {
						approverRemarks: remarks
					},
					headers: {'Content-Type': 'application/json', Authorization: `Bearer ${token}`}
				})	

				return response.data
			}
		}
	} catch (err) {
		console.error(err)
		return err
	}
}