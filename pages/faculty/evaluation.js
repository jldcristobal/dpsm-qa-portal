import Layout from '../../components/layout'
import EvaluationSemester from '../../components/faculty/evaluation/evaluation-semester'
import NameDisplay from '../../components/name-display'
import Link from 'next/link'

function Evaluation() {
    return (
        <Layout>
            <br />
		<h2 align = "center"> Peer Evaluation </h2>
		<NameDisplay />
		<div className = "list-group">
			<a className = "list-group-item list-group-item-action list-group-item-secondary" href = "#evaluation_ay20202021" data-toggle = "collapse" aria-controls = "evaluation_ay20202021">AY 2020-2021</a>
				<div id = "evaluation_ay20202021" className = "jumbotron collapse">
					<EvaluationSemester />
				</div>
			
			<a className = "list-group-item list-group-item-action list-group-item-secondary" href = "#evaluation_ay20192020" data-toggle = "collapse" aria-controls = "evaluation_ay20192020">AY 2019-2020</a>
                		<div id = "evaluation_ay20192020" className = "jumbotron collapse">
					<EvaluationSemester />
				</div>

			<a className = "list-group-item list-group-item-action list-group-item-secondary" href = "#evaluation_ay20182019" data-toggle = "collapse" aria-controls = "evaluation_ay20182019">AY 2018-2019</a>
                		<div id = "evaluation_ay20182019" className = "jumbotron collapse">
					<EvaluationSemester />
				</div>
            	</div>
		<style jsx>{`
			.list-group-item-info{
				text-indent:5%;
			}
		`}</style>
        </Layout>
    )
  }
  
 export default Evaluation
