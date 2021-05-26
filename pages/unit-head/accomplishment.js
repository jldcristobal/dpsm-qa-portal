import LayoutUnitHead from '../../components/layout-unit-head'
import Publication from '../../components/unit-head/accomplishments/publication'
import PublicServiceAccomplishment from '../../components/unit-head/accomplishments/public-service-accomplishment'
import LicensureExam from '../../components/unit-head/accomplishments/licensure-exam'
import TrainingSeminar from '../../components/unit-head/accomplishments/training-seminar'
import ResearchGrant from '../../components/unit-head/accomplishments/research-grant'

function Dashboard() {
    return (
        <LayoutUnitHead>
            <nav>
            <div className="nav nav-tabs nav-fill nav-justified" id="nav-tab" role="tablist">
                {/* <a className="nav-item nav-link active" id="academic-accomplishment-tab" data-toggle="tab" href="#academic-accomplishment" role="tab" aria-controls="academic-accomplishment" aria-selected="true">Academic Accomplishments</a> */}
		<a className="nav-item nav-link active" id="public-service-accomplishment-tab" data-toggle="tab" href="#public-service-accomplishment" role="tab" aria-controls="public-service-accomplishment" aria-selected="true">Public Service Accomplishments</a>
		<a className="nav-item nav-link" id="publication-tab" data-toggle="tab" href="#publication" role="tab" aria-controls="publication" aria-selected="false">Publications</a>
		<a className="nav-item nav-link" id="training-seminar-tab" data-toggle="tab" href="#training-seminar" role="tab" aria-controls="training-seminar" aria-selected="false">Training/Seminars</a>
		<a className="nav-item nav-link" id="licensure-exam-tab" data-toggle="tab" href="#licensure-exam" role="tab" aria-controls="licensure-exam" aria-selected="false">Licensure Exams</a>
		<a className="nav-item nav-link" id="research-grant-tab" data-toggle="tab" href="#research-grant" role="tab" aria-controls="research-grant" aria-selected="false">Research Grants</a>
            </div>
            </nav>
		<br />
		<br />
            <div className="tab-content" id="nav-tabContent">
            {/* <div className="tab-pane fade show active" id="academic-accomplishment" role="tabpanel" aria-labelledby="academic-accomplishment-tab"><AcademicAccomplishment /></div> */}
	    <div className="tab-pane fade show active" id="public-service-accomplishment" role="tabpanel" aria-labelledby="public-service-accomplishment-tab"><PublicServiceAccomplishment /></div>
	    <div className="tab-pane fade" id="publication" role="tabpanel" aria-labelledby="publication-tab"><Publication /></div>
	    <div className="tab-pane fade" id="training-seminar" role="tabpanel" aria-labelledby="training-seminar-tab"><TrainingSeminar /></div>
	    <div className="tab-pane fade" id="licensure-exam" role="tabpanel" aria-labelledby="licensure-exam-tab"><LicensureExam /></div>
	    <div className="tab-pane fade" id="research-grant" role="tabpanel" aria-labelledby="research-grant-tab"><ResearchGrant /></div>
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