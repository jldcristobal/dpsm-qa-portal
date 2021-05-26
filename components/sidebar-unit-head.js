import Link from 'next/link'

function SidebarUnitHead() {
    return (
            <div className="col-2">
                <div className="list-group">
			<a className = "list-group-item list-group-item-action list-group-item-secondary" data-toggle = "collapse" href = "#facultyMenu" aria-controls = "facultyMenu"> Faculty </a>
			<div id = "facultyMenu" className = "collapse show">
                    <Link href="/unit-head"><a className = "list-group-item list-group-item-action list-group-item-success">Dashboard</a></Link>
                    <Link href="/unit-head/basic-info"><a className = "list-group-item list-group-item-action list-group-item-success">Basic Information</a></Link>
                    <Link href="/unit-head/accomplishment"><a className = "list-group-item list-group-item-action list-group-item-success">Accomplishment</a></Link>
                    <Link href="/unit-head/faculty-load"><a className = "list-group-item list-group-item-action list-group-item-success">Faculty Load</a></Link>
                    <Link href="/unit-head/evaluation"><a className = "list-group-item list-group-item-action list-group-item-success ">Peer Evaluation</a></Link>
		    <Link href="/unit-head/faculty/all"><a className = "list-group-item list-group-item-action list-group-item-success ">Faculty List</a></Link>
		    <Link href="/unit-head/pending-approval"><a className = "list-group-item list-group-item-action list-group-item-success "> Pending Approval <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#ff0000" class="bi bi-exclamation-octagon-fill" viewBox="0 0 16 16">
  <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg></a></Link>
			</div>
                </div>
                <div className="list-group">
                    <Link href="/student"><a className = "list-group-item list-group-item-action list-group-item-secondary">Student</a></Link>
                </div>
                <div className="list-group">
                    <Link href="/alumni"><a className = "list-group-item list-group-item-action list-group-item-secondary">Alumni</a></Link>
                </div>
                <div className="list-group">
                    <Link href="/department-activities"><a className = "list-group-item list-group-item-action list-group-item-secondary">Department Activities</a></Link>
                </div>
		<div className="list-group">
                    <Link href="/"><a className = "list-group-item list-group-item-action list-group-item-danger">Log Out</a></Link>
                </div>

		<style jsx>{`
			.col-2 {
  				background-color: #017823;
			}
			.list-group-item-success{
				text-indent:20%;
			}
		`}</style>
            </div>           
    )
  }
  
  export default SidebarUnitHead