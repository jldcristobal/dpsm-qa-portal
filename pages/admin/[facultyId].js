import Layout from '../../components/layout'
import PersonalInfo from '../../components/faculty/basic-info/personal-info'
import Education from '../../components/faculty/basic-info/education'
import WorkExperience from '../../components/faculty/basic-info/work-experience'
import Publication from '../../components/faculty/accomplishments/publication'
import PublicServiceAccomplishment from '../../components/faculty/accomplishments/public-service-accomplishment'
import LicensureExam from '../../components/faculty/accomplishments/licensure-exam'
import TrainingSeminar from '../../components/faculty/accomplishments/training-seminar'
import ResearchGrant from '../../components/faculty/accomplishments/research-grant'
import Evaluation from '../../components/unit-head/faculty-list/evaluation/evaluation'
import FacultyLoader from '../../components/faculty/faculty-load/faculty-load'

import jwt from 'jsonwebtoken'
import { parseCookies } from "../../helpers"

function BasicInfo(props) {
    return (
        <Layout userId={props.data.userId} role={props.data.role} name={props.data.name}>
            <nav>
            <div className="nav nav-tabs nav-justified flex-column flex-md-row" id="nav-tab-main" role="tablist">
				<a className="nav-item nav-link active" id="basic-info-tab" data-toggle="tab" href="#basic-info" role="tab" aria-controls="basic-info" aria-selected="true">Basic Information</a>
				<a className="nav-item nav-link" id="accomplishments-tab" data-toggle="tab" href="#accomplishments" role="tab" aria-controls="accomplishments" aria-selected="false">Accomplishments</a>
{/*<a className="nav-item nav-link" id="evaluation-tab" data-toggle="tab" href="#evaluation" role="tab" aria-controls="evaluation" aria-selected="false">Peer Evaluation</a>*/}
				<a className="nav-item nav-link" id="faculty-load-tab" data-toggle="tab" href="#faculty-load" role="tab" aria-controls="faculty-load" aria-selected="false">Faculty Load</a>
            </div>
            <div className="tab-content" id="nav-tabContent-main">
	    		<div className="tab-pane fade show active" id="basic-info" role="tabpanel" aria-labelledby="basic-info-tab">
				    <nav>
           				<div className="nav nav-tabs nav-justified flex-column flex-md-row" id="nav-tab-basic-info" role="tablist">
                            <a className="nav-item nav-link active" id="personal-info-tab" data-toggle="tab" href="#personal-info" role="tab" aria-controls="personal-info" aria-selected="true">Personal Information</a>
                            <a className="nav-item nav-link" id="educ-tab" data-toggle="tab" href="#educ" role="tab" aria-controls="educ" aria-selected="false">Education</a>
                            <a className="nav-item nav-link" id="work-exp-tab" data-toggle="tab" href="#work-exp" role="tab" aria-controls="work-exp" aria-selected="false">Work Experience</a>
                        </div>
                    </nav>
				    <div className="tab-content" id="nav-tabContent-basic-info">
                        <div className="tab-pane fade show active" id="personal-info" role="tabpanel" aria-labelledby="personal-info-tab">
                            <PersonalInfo token = { props.token.user } unit = {props.unit} position={props.position}>{ props.personalInfo }</PersonalInfo>
                        </div>
                        <div className="tab-pane fade" id="educ" role="tabpanel" aria-labelledby="educ-tab">
                            <Education name = { props.name } token = { props.token.user } unit = {props.unit} position={props.position} facultyFlag={false} viewFlag={true}>{ props.education }</Education>
                        </div>
                        <div className="tab-pane fade" id="work-exp" role="tabpanel" aria-labelledby="work-exp-tab">
                            <WorkExperience name = { props.name } token = { props.token.user } unit = {props.unit} position={props.position} employment = { props.employment } viewFlag={true} role={props.data.role} facultyId={props.pathFacultyId} positionsList={props.positionsList}>{ props.workExperience }</WorkExperience>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="accomplishments" role="tabpanel" aria-labelledby="accomplishments-tab">
                    <nav>
                        <div className="nav nav-tabs nav-justified flex-column flex-md-row" id="nav-tab-accomplishment" role="tablist">
                            <a className="nav-item nav-link active" id="public-service-accomplishment-tab" data-toggle="tab" href="#public-service-accomplishment" role="tab" aria-controls="public-service-accomplishment" aria-selected="true">Public Service Accomplishments</a>
                            <a className="nav-item nav-link" id="publication-tab" data-toggle="tab" href="#publication" role="tab" aria-controls="publication" aria-selected="false">Publications</a>
                            <a className="nav-item nav-link" id="training-seminar-tab" data-toggle="tab" href="#training-seminar" role="tab" aria-controls="training-seminar" aria-selected="false">Training/Seminars</a>
                            <a className="nav-item nav-link" id="licensure-exam-tab" data-toggle="tab" href="#licensure-exam" role="tab" aria-controls="licensure-exam" aria-selected="false">Licensure Exams</a>
                            <a className="nav-item nav-link" id="research-grant-tab" data-toggle="tab" href="#research-grant" role="tab" aria-controls="research-grant" aria-selected="false">Research Grants</a>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent-accomplishment">
                        <div className="tab-pane fade show active" id="public-service-accomplishment" role="tabpanel" aria-labelledby="public-service-accomplishment-tab">
                            <PublicServiceAccomplishment name = { props.name } token = { props.token.user } unit = {props.unit} position={props.position} facultyFlag={false} viewFlag={true}>{ props.publicService }</PublicServiceAccomplishment>
                        </div>
                        <div className="tab-pane fade" id="publication" role="tabpanel" aria-labelledby="publication-tab">
                            <Publication faculty = { props.faculty } name = { props.name } token = { props.token.user } unit = {props.unit} position={props.position} facultyFlag={false} facultyId={props.pathFacultyId} viewFlag={true}>{ props.publications }</Publication></div>
                        <div className="tab-pane fade" id="training-seminar" role="tabpanel" aria-labelledby="training-seminar-tab">
                            <TrainingSeminar name = { props.name } token = { props.token.user } unit = {props.unit} position={props.position} facultyFlag={false} viewFlag={true}>{ props.trainingSeminar }</TrainingSeminar>
                        </div>
                        <div className="tab-pane fade" id="licensure-exam" role="tabpanel" aria-labelledby="licensure-exam-tab">
                            <LicensureExam name = { props.name } token = { props.token.user } unit = {props.unit} position={props.position} facultyFlag={false} viewFlag={true}>{ props.licensureExam }</LicensureExam>
                        </div>
                        <div className="tab-pane fade" id="research-grant" role="tabpanel" aria-labelledby="research-grant-tab">
                            <ResearchGrant name = { props.name } token = { props.token.user } unit = {props.unit} position={props.position} facultyFlag={false} facultyId={props.pathFacultyId} viewFlag={true}>{ props.researchGrant }</ResearchGrant>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="evaluation" role="tabpanel" aria-labelledby="evaluation-tab">
                    <Evaluation />
                </div>
                <div className="tab-pane fade" id="faculty-load" role="tabpanel" aria-labelledby="faculty-load-tab">
                    <FacultyLoader name = { props.name } token = { props.token.user } unit = {props.unit} position={props.position} facultyFlag={false} facultyId={props.pathFacultyId} clerkFlag={true} viewFlag={true}>{ props.facultyLoad }</FacultyLoader>
                </div>
            </div>

            </nav>

    <style jsx>{`
		#nav-tab-main a.nav-item:focus{
			background-color:#78b6c2;
		}
		#nav-tab-main a.nav-item:hover{
			background-color:#78b6c2;
		}
		#nav-tab-main a.nav-item .active{
			background-color:#78b6c2;
		}
		a.nav-item{
			background-color: #aaa;
		}
		#nav-tabContent-main a.nav-item{
			background-color: #78b6c2;
		}
		#nav-tabContent-main a.nav-item .active{
			background-color: #5486b8;
		}
		#nav-tabContent-main a.nav-item:focus{
			background-color:#5486b8;
		}
		#nav-tabContent-main a.nav-item:hover{
			background-color:#5486b8;
		}
		.tab-pane.active
		{
			background-color: #fff;
		}
        .list-group-item-info{
            text-indent:5%;
        }
	`}</style>
        </Layout>
    )
  }

  export async function getServerSideProps(context) {
    const token = parseCookies(context.req)

    let personalInfo
    let name
    let unit
    let position
    let data
    let employmentInfo
    let education
    let workExperience
    let publicService
    let publications
    let trainingSeminar
    let licensureExam
    let researchGrant
    let positionsList
    let facultyLoad

    if (context.res) {
        if (Object.keys(token).length === 0 && token.constructor === Object) {
            return {
                redirect: {
                    destination: '/login',
                    permanent: false,
                },
            }
        }
        else {
            data = jwt.decode(token.user)
            
            if(context.params.facultyId) {
                let facultyId = context.params.facultyId
                
                let url = 'https://api.dpsmqaportal.com/api/faculty/basic-info/' + facultyId;
                let header = {
                    headers: {
                        'Authorization': 'Bearer ' + token.user
                    }
                }
            
                const personal = await fetch(url, header)
                personalInfo = await personal.json()
                name = personalInfo.result.lastName + ', ' + personalInfo.result.firstName

                const employment = await fetch('https://api.dpsmqaportal.com/api/faculty/basic-info/' + facultyId + '/employment', header)
                employmentInfo = await employment.json()
                unit = employmentInfo.result.faculty_unit.unit.unit
                if(employmentInfo.result.faculty_employment_infos[0]) {
                    position = employmentInfo.result.faculty_employment_infos[0].faculty_employment_position.position
                }

                const load = await fetch('https://api.dpsmqaportal.com/api/faculty/load/' + facultyId, header)
                facultyLoad = await load.json()

                const educ = await fetch('https://api.dpsmqaportal.com/api/faculty/basic-info/' + facultyId + '/education', header)
                education = await educ.json()

                const work = await fetch('https://api.dpsmqaportal.com/api/faculty/basic-info/' + facultyId + '/work-exp', header)
                workExperience = await work.json()

                const psa = await fetch('https://api.dpsmqaportal.com/api/faculty/accomplishment/' + facultyId + '/public-service', header)
                publicService = await psa.json()

                const pub = await fetch('https://api.dpsmqaportal.com/api/faculty/accomplishment/' + facultyId + '/publication', header)
                publications = await pub.json()

                const ts = await fetch('https://api.dpsmqaportal.com/api/faculty/accomplishment/' + facultyId + '/training-seminar', header)
                trainingSeminar = await ts.json()

                const le = await fetch('https://api.dpsmqaportal.com/api/faculty/accomplishment/' + facultyId + '/licensure-exam', header)
                licensureExam = await le.json()

                const rg = await fetch('https://api.dpsmqaportal.com/api/faculty/accomplishment/' + facultyId + '/research-grant', header)
                researchGrant = await rg.json()

                const positions = await fetch('https://api.dpsmqaportal.com/api/faculty/basic-info/employment/positions', header)
                positionsList = await positions.json()
                positionsList = positionsList.result
            } else {
                return {
                    redirect: {
                        destination: '/admin',
                        permanent: true,
                    },
                }
            }
            
        }
    } 

    return { 
        props: {
            token: token && token,
            data: data,
            name,
            personalInfo: personalInfo.result,
            unit,
            facultyLoad: facultyLoad.result,
            pathFacultyId: context.params.facultyId,
            position: position || null,
            education: education.result,
            employment: employmentInfo.result,
            workExperience: workExperience.result,
            publicService: publicService.result,
            publications: publications.result,
            trainingSeminar: trainingSeminar.result,
            licensureExam: licensureExam.result,
            researchGrant: researchGrant.result,
            pathFacultyId: context.params.facultyId,
            positionsList
        }
    }
}

export default BasicInfo
