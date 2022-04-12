import Link from 'next/link'
import { useCookies } from "react-cookie";
import { useState } from 'react'
import { useRouter } from 'next/router'

function Sidebar(props) { 
    const router = useRouter()

    const [cookies, setCookie, removeCookie] = useCookies(["user"]);

    function handleRemoveCookie() {
        removeCookie("user");
    }

    let faculty = true
    let staff = true

    if(props.role == 1 || props.role == 2 || props.role == 3) {
        staff = false
        if(props.role == 2 || props.role == 3) {
            faculty = false
        } 
    }

    const [isActive, setActive] = useState("false")

    const handleToggle = () => {
    	setActive(!isActive)
    }

    return (
        <div id="sidebar">
	    <div className = "alert alert-info col-12 d-md-none text-center" onClick = {handleToggle}> Main Menu </div>
            <div id = "menu" className = {isActive ? null : "d-none d-md-block"}>
                <div className="list-group col-12">
			<a className = "list-group-item list-group-item-action list-group-item-secondary" data-toggle = "collapse" data-target = "#facultyMenu" aria-controls = "facultyMenu"> Faculty </a>
                <div id = "facultyMenu" className = "collapse show">
                    { !staff && !faculty && <Link href={{ pathname: "/faculty" }}><a className = "list-group-item list-group-item-action list-group-item-success" id = { router.pathname === "/faculty" ?  "active"  : "inactive" }>Dashboard</a></Link> }
                    { !staff && <Link href={{ pathname: "/faculty/basic-info" }}><a className = "list-group-item list-group-item-action list-group-item-success" id = { router.pathname === "/faculty/basic-info" ?  "active"  : "inactive" }>Basic Information</a></Link> }
                    { !staff && <Link href={{ pathname: "/faculty/accomplishment" }}><a className = "list-group-item list-group-item-action list-group-item-success" id = { router.pathname === "/faculty/accomplishment" ?  "active"  : "inactive" }>Accomplishment</a></Link> }
                    { !staff && <Link href={{ pathname: "/faculty/faculty-load" }}><a className = "list-group-item list-group-item-action list-group-item-success" id = { router.pathname === "/faculty/faculty-load" ?  "active"  : "inactive" }>Faculty Load</a></Link> }
                    {/* !staff && <Link href={{ pathname: "/faculty/evaluation" }}><a className = "list-group-item list-group-item-action list-group-item-success " id = { router.pathname === "/faculty/evaluation" ?  "active"  : "inactive" }>Peer Evaluation</a></Link> */}
                    { !staff && !faculty && <Link href={{ pathname: "/faculty/view/all" }}><a className = "list-group-item list-group-item-action list-group-item-success " id = { router.pathname === "/faculty/view/all" ?  "active"  : "inactive" }>Faculty List</a></Link> }
                    { !staff && !faculty && <Link href={{ pathname: "/faculty/approval" }}>
                        <a className = "list-group-item list-group-item-action list-group-item-success " id = { router.pathname === "/faculty/approval" ?  "active"  : "inactive" }> 
                            Pending Approvals &nbsp;{props.approvalList.facultyCount > 0 && <span className="badge badge-danger">{props.approvalList.facultyCount}</span>}
                        </a>
                    </Link> }
                    { staff && <Link href={{ pathname: "/admin" }}><a className = "list-group-item list-group-item-action list-group-item-success " id = { router.pathname === "/admin" ?  "active"  : "inactive" }>Faculty List</a></Link> }
		            { !staff && !faculty && props.roleAssignment && <Link href ={{ pathname: "/faculty/role-assignment" }}>
                        <a className = "list-group-item list-group-item-action list-group-item-success" id = { router.pathname === "/faculty/role-assignment" ?  "active"  : "inactive" }>
                            Role Assignment &nbsp;<span className="badge badge-danger">!</span>
                        </a>
                    </Link> }
                    { !staff && !faculty && !props.roleAssignment && <Link href ={{ pathname: "/faculty/role-assignment" }}>
                        <a className = "list-group-item list-group-item-action list-group-item-success" id = { router.pathname === "/faculty/role-assignment" ?  "active"  : "inactive" }>
                            Role Assignment
                        </a>
                    </Link> }
                </div>
                </div>
		{/*<div className="list-group col-12">
                    <Link href="/student"><a className = "list-group-item list-group-item-action list-group-item-secondary">Student</a></Link>
                </div>
                <div className="list-group col-12">
                    <Link href="/alumni"><a className = "list-group-item list-group-item-action list-group-item-secondary">Alumni</a></Link>
                </div>
                <div className="list-group col-12">
                    <Link href="/department-activities"><a className = "list-group-item list-group-item-action list-group-item-secondary">Department Activities</a></Link>
                </div>
		        <div className="list-group col-12">
                    <Link href="/login"><a className = "list-group-item list-group-item-action list-group-item-danger" onClick={handleRemoveCookie}>Log Out</a></Link>
                </div>*/}

		<style jsx>{`
			#menu {
  				background-color: #017823;
			}
			.list-group-item-success{
				text-indent:20%;
			}
			#active{
				background-color: #005919;
				color: #fff;
			}
		`}</style>
            </div>
	</div>					    
    )
  }
  
  export default Sidebar
