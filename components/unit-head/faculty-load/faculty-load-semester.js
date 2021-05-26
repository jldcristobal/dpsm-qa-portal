function FacultyLoadSemester() {
	return(
		<table className = "table table-sm">
			<thead>
				<tr>
					<th>Subject</th>
					<th>Section</th>
					<th>Room</th>
					<th>Days</th>
					<th>Time</th>
					<th>Hours Per Week</th>
					<th>Number of Students</th>
					<th>SET Results</th>
					<th>Number of Units</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>CMSC 127</td>
					<td>MHI</td>
					<td>RH 110</td>
					<td>MTh</td>
					<td>7AM-10AM</td>
					<td>3</td>
					<td>700</td>
					<td><a href = "#">View spreadsheet</a></td>
					<td>3</td>
				</tr>
				<tr>
					<td>CMSC 128</td>
					<td>TFK</td>
					<td>RH 110</td>
					<td>MTh</td>
					<td>7AM-10AM</td>
					<td>3</td>
					<td>700</td>
					<td><a href = "#">View spreadsheet</a></td>
					<td>3</td>
				</tr>
			</tbody>
			<tfoot>
				<tr>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<th>Total Units: 6</th>
				</tr>
			</tfoot>
		</table>
	)
}

export default FacultyLoadSemester