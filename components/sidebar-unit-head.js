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
