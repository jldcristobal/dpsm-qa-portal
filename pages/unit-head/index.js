import LayoutUnitHead from '../../components/layout-unit-head'
import AccomplishmentCount from '../../components/unit-head/dashboard/accomplishment-count/accomplishment-count'

function Dashboard() {
    return (
        <LayoutUnitHead>
		<div className="col-9">
            		<nav>
            			<div className="nav nav-tabs nav-fill nav-justified" id="nav-tab" role="tablist">
					<a className="nav-item nav-link" id="accomplishment-count-tab" data-toggle="tab" href="#accomplishment-count" role="tab" aria-controls="accomplishment-count" aria-selected="false">Accomplishment Count</a>
					<a className="nav-item nav-link" id="employment-status-tab" data-toggle="tab" href="#employment-status" role="tab" aria-controls="employment-status" aria-selected="false">Employment Status</a>
					<a className="nav-item nav-link" id="SET-score-tab" data-toggle="tab" href="#SET-score" role="tab" aria-controls="SET-score" aria-selected="false">Outstanding SET scores</a>
            			</div>
            		</nav>
	    		<div className="tab-content" id="nav-tabContent">
	    			<div className="tab-pane fade show active" id="accomplishment-count" role="tabpanel" aria-labelledby="accomplishment-count-tab"><AccomplishmentCount /></div>
				<div className="tab-pane fade" id="employment-status" role="tabpanel" aria-labelledby="employment-status-tab">sup</div>
	    			<div className="tab-pane fade" id="SET-score" role="tabpanel" aria-labelledby="SET-score-tab">sup</div>
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
		</div>
        </LayoutUnitHead>
    )
  }
  
  export default Dashboard
