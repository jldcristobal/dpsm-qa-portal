import LayoutUnitHead from '../../components/layout-unit-head'
import PersonalInfo from '../../components/unit-head/basic-info/personal-info'
import Education from '../../components/unit-head/basic-info/education'
import EmploymentHistory from '../../components/unit-head/basic-info/employment-history'
import WorkExperience from '../../components/unit-head/basic-info/work-experience'

function Dashboard() {
    return (
        <LayoutUnitHead>
            <nav>
            <div className="nav nav-tabs nav-fill nav-justified" id="nav-tab" role="tablist">
                <a className="nav-item nav-link active" id="personal-info-tab" data-toggle="tab" href="#personal-info" role="tab" aria-controls="personal-info" aria-selected="true">Personal Information</a>
                {/* <a className="nav-item nav-link" id="emp-history-tab" data-toggle="tab" href="#emp-history" role="tab" aria-controls="emp-history" aria-selected="false">Employment History</a> */}
                <a className="nav-item nav-link" id="educ-tab" data-toggle="tab" href="#educ" role="tab" aria-controls="educ" aria-selected="false">Education</a>
                <a className="nav-item nav-link" id="work-exp-tab" data-toggle="tab" href="#work-exp" role="tab" aria-controls="work-exp" aria-selected="false">Work Experience</a>
            </div>
            </nav>
		<br />
		<br />
            <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="personal-info" role="tabpanel" aria-labelledby="personal-info-tab"><PersonalInfo /></div>
            {/* <div className="tab-pane fade" id="emp-history" role="tabpanel" aria-labelledby="emp-history-tab"><EmploymentHistory /></div> */}
            <div className="tab-pane fade" id="educ" role="tabpanel" aria-labelledby="educ-tab"><Education /></div>
            <div className="tab-pane fade" id="work-exp" role="tabpanel" aria-labelledby="work-exp-tab"><WorkExperience /></div>
            </div>
	<style jsx>{`
		a.nav-item:focus{
			background-color:#78b6c2;
		}
		a.nav-item:hover{
			background-color:#78b6c2;
		}
		a.active{
			background-color:#78b6c2;
		}
	`}</style>
        </LayoutUnitHead>
    )
  }
  
  export default Dashboard