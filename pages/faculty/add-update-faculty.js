import Layout from '../../components/layout'
import AddFaculty from '../../components/faculty/add-update-faculty/add-faculty'
import UpdateFaculty from '../../components/faculty/add-update-faculty/update-faculty'

function AddUpdateFaculty() {
    return (
        <Layout>
            <nav>
            	<div className="nav nav-tabs nav-fill nav-justified" id="nav-tab" role="tablist">
                	<a className="nav-item nav-link active" id="add-faculty-tab" data-toggle="tab" href="#add-faculty" role="tab" aria-controls="add-faculty" aria-selected="true">Add New Faculty</a>
                	<a className="nav-item nav-link" id="update-faculty-tab" data-toggle="tab" href="#update-faculty" role="tab" aria-controls="update-faculty" aria-selected="false">Update Faculty Info</a>
            	</div>
            </nav>
		<br />
		<br />
            <div className="tab-content" id="nav-tabContent">
            	<div className="tab-pane fade show active" id="add-faculty" role="tabpanel" aria-labelledby="add-faculty-tab"><AddFaculty /></div>
            	<div className="tab-pane fade" id="update-faculty" role="tabpanel" aria-labelledby="update-faculty-tab"><UpdateFaculty /></div>
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
        </Layout>
    )
  }
  
 export default AddUpdateFaculty