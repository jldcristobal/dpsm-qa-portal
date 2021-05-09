import LayoutUnitHead from '../../components/layout-unit-head'

function PendingApproval() {
    return (
        <LayoutUnitHead>
		<br />
		<h3 align = "center">Submissions Pending Approval</h3>
            	<table className = "table table-striped">
			<tbody>
                        	<tr>
                            		<th>Name</th>
                            		<th>Date Submitted</th>
					<th></th>
                        	</tr>
                       		<tr>
                            		<td>Ramos, Derryck</td>
                            		<td>2020-03-20</td>
			    		<td><a href = ''>Click to view submission</a></td>
                        	</tr>
                        	<tr>
                            		<td>Cena, John</td>
			    		<td>2020-03-20</td>
					<td><a href = ''>Click to view submission</a></td>
                        	</tr>
                    </tbody>
	    	</table>
        </LayoutUnitHead>
    )
  }
  
 export default PendingApproval