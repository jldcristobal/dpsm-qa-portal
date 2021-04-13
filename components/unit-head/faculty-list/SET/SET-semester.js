function SETSemester() {
	return(
		<table className = "table table-sm">
			<thead>
				<tr>
					<th>Subject</th>
					<th>SET Result</th>

				</tr>
			</thead>
			<tbody>
				<tr>
					<td>CMSC 127</td>
					<td>3</td>
				</tr>
				<tr>
					<td>CMSC 128</td>
					<td>3</td>
				</tr>
			</tbody>
			<tfoot>
				<tr>
					<td></td>
					<th>Average SET score: 3</th>
				</tr>
			</tfoot>
		</table>
	)
}

export default SETSemester