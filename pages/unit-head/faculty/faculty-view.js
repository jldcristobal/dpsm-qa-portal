import Link from 'next/link'
import LayoutUnitHead from '../../../components/layout-unit-head'
import NameDisplay from '../../../components/name-display'
import PersonalInfo from '../../../components/unit-head/faculty-list/basic-info/personal-info'
import Education from '../../../components/unit-head/faculty-list/basic-info/education'
import WorkExperience from '../../../components/unit-head/faculty-list/basic-info/work-experience'
import PublicServiceAccomplishment from '../../../components/unit-head/faculty-list/accomplishments/public-service-accomplishment'
import Publication from '../../../components/unit-head/faculty-list/accomplishments/publication'
import TrainingSeminar from '../../../components/unit-head/faculty-list/accomplishments/training-seminar'
import LicensureExam from '../../../components/unit-head/faculty-list/accomplishments/licensure-exam'
import ResearchGrant from '../../../components/unit-head/faculty-list/accomplishments/research-grant'
import Evaluation from '../../../components/unit-head/faculty-list/evaluation/evaluation'
import FacultySET from '../../../components/unit-head/faculty-list/SET/SET'

function FacultyView() {
    return (
        <LayoutUnitHead>
		<br />
		<Link href = "/unit-head/faculty/all"><a href = "#">Back</a></Link>
		<br />
            	<h4 align = "center"> View Profile: </h4>
		<NameDisplay />
		<nav>
            		<div className="nav nav-tabs nav-fill nav-justified" id="nav-tab-main" role="tablist">
				<a className="nav-item nav-link active" id="basic-info-tab" data-toggle="tab" href="#basic-info" role="tab" aria-controls="basic-info" aria-selected="true">Basic Information</a>
				<a className="nav-item nav-link" id="accomplishments-tab" data-toggle="tab" href="#accomplishments" role="tab" aria-controls="accomplishments" aria-selected="false">Accomplishments</a>
				<a className="nav-item nav-link" id="evaluation-tab" data-toggle="tab" href="#evaluation" role="tab" aria-controls="evaluation" aria-selected="false">Peer Evaluation</a>
				<a className="nav-item nav-link" id="SET-tab" data-toggle="tab" href="#SET" role="tab" aria-controls="SET" aria-selected="false">SET</a>
            		</div>
            	</nav>
		<div className="tab-content" id="nav-tabContent-main">
	    		<div className="tab-pane fade show active" id="basic-info" role="tabpanel" aria-labelledby="basic-info-tab">
				<nav>
           				<div className="nav nav-tabs nav-fill nav-justified" id="nav-tab-basic-info" role="tablist">
                				<a className="nav-item nav-link active" id="personal-info-tab" data-toggle="tab" href="#personal-info" role="tab" aria-controls="personal-info" aria-selected="true">Personal Information</a>
                				<a className="nav-item nav-link" id="educ-tab" data-toggle="tab" href="#educ" role="tab" aria-controls="educ" aria-selected="false">Education</a>
                				<a className="nav-item nav-link" id="work-exp-tab" data-toggle="tab" href="#work-exp" role="tab" aria-controls="work-exp" aria-selected="false">Work Experience</a>
            				</div>
            			</nav>
				<div className="tab-content" id="nav-tabContent-basic-info">
            				<div className="tab-pane fade show active" id="personal-info" role="tabpanel" aria-labelledby="personal-info-tab"><PersonalInfo /></div>
            				<div className="tab-pane fade" id="educ" role="tabpanel" aria-labelledby="educ-tab"><Education /></div>
            				<div className="tab-pane fade" id="work-exp" role="tabpanel" aria-labelledby="work-exp-tab"><WorkExperience /></div>
            			</div>
			</div>
	    		<div className="tab-pane fade" id="accomplishments" role="tabpanel" aria-labelledby="accomplishments-tab">
				<nav>
            				<div className="nav nav-tabs nav-fill nav-justified" id="nav-tab-accomplishment" role="tablist">
						<a className="nav-item nav-link active" id="public-service-accomplishment-tab" data-toggle="tab" href="#public-service-accomplishment" role="tab" aria-controls="public-service-accomplishment" aria-selected="true">Public Service Accomplishments</a>
						<a className="nav-item nav-link" id="publication-tab" data-toggle="tab" href="#publication" role="tab" aria-controls="publication" aria-selected="false">Publications</a>
						<a className="nav-item nav-link" id="training-seminar-tab" data-toggle="tab" href="#training-seminar" role="tab" aria-controls="training-seminar" aria-selected="false">Training/Seminars</a>
						<a className="nav-item nav-link" id="licensure-exam-tab" data-toggle="tab" href="#licensure-exam" role="tab" aria-controls="licensure-exam" aria-selected="false">Licensure Exams</a>
						<a className="nav-item nav-link" id="research-grant-tab" data-toggle="tab" href="#research-grant" role="tab" aria-controls="research-grant" aria-selected="false">Research Grants</a>
            				</div>
            			</nav>
				 <div className="tab-content" id="nav-tabContent-accomplishment">
	    				<div className="tab-pane fade show active" id="public-service-accomplishment" role="tabpanel" aria-labelledby="public-service-accomplishment-tab"><PublicServiceAccomplishment /></div>
	    				<div className="tab-pane fade" id="publication" role="tabpanel" aria-labelledby="publication-tab"><Publication /></div>
	    				<div className="tab-pane fade" id="training-seminar" role="tabpanel" aria-labelledby="training-seminar-tab"><TrainingSeminar /></div>
	    				<div className="tab-pane fade" id="licensure-exam" role="tabpanel" aria-labelledby="licensure-exam-tab"><LicensureExam /></div>
	    				<div className="tab-pane fade" id="research-grant" role="tabpanel" aria-labelledby="research-grant-tab"><ResearchGrant />></div>
            			</div>
			</div>
			<div className="tab-pane fade" id="evaluation" role="tabpanel" aria-labelledby="evaluation-tab">
				<Evaluation />
			</div>
			<div className="tab-pane fade" id="SET" role="tabpanel" aria-labelledby="SET-tab">
				<FacultySET />
			</div>
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
  
  export default FacultyView
