import LayoutUnitHead from '../../../components/layout-unit-head'
import Link from 'next/link'

function FacultyList() {
    return (
        <LayoutUnitHead>
	<div id = "mcsu">
            <h4 align = "center"> Mathematics and Computing Sciences Unit </h4>
		<div className = "list-group">
			<Link href = "/unit-head/faculty/faculty-view"><a href = "" className = "list-group-item list-group-item-action list-group-item-light">Baes, Gregorio</a></Link>
			<a href = "" className = "list-group-item list-group-item-action list-group-item-light">Billones, Liza</a>
			<a href = "" className = "list-group-item list-group-item-action list-group-item-light">Cabalo, Francis</a>
			<a href = "" className = "list-group-item list-group-item-action list-group-item-light">Chua, Richard Bryann</a>
			<a href = "" className = "list-group-item list-group-item-action list-group-item-light">Yu, Berwin Jarret</a>
		</div>
	</div>
	<div id = "chem">
            <h4 align = "center"> Chemistry Unit </h4>
		<div className = "list-group">
			<Link href = "/unit-head/faculty/faculty-view"><a href = "" className = "list-group-item list-group-item-action list-group-item-light">Baes, Gregorio</a></Link>
			<a href = "" className = "list-group-item list-group-item-action list-group-item-light">Billones, Liza</a>
			<a href = "" className = "list-group-item list-group-item-action list-group-item-light">Cabalo, Francis</a>
			<a href = "" className = "list-group-item list-group-item-action list-group-item-light">Chua, Richard Bryann</a>
			<a href = "" className = "list-group-item list-group-item-action list-group-item-light">Yu, Berwin Jarret</a>
		</div>
	</div>
	<div id = "physics">
            <h4 align = "center"> Physics and Geology Unit </h4>
		<div className = "list-group">
			<Link href = "/unit-head/faculty/faculty-view"><a href = "" className = "list-group-item list-group-item-action list-group-item-light">Baes, Gregorio</a></Link>
			<a href = "" className = "list-group-item list-group-item-action list-group-item-light">Billones, Liza</a>
			<a href = "" className = "list-group-item list-group-item-action list-group-item-light">Cabalo, Francis</a>
			<a href = "" className = "list-group-item list-group-item-action list-group-item-light">Chua, Richard Bryann</a>
			<a href = "" className = "list-group-item list-group-item-action list-group-item-light">Yu, Berwin Jarret</a>
		</div>
	</div>
        </LayoutUnitHead>
    )
  }
  
  export default FacultyList