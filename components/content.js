import Head from 'next/head'
import Link from 'next/link'
import Sidebar from './sidebar' 

function Content(props){
	return(
		<div>
			<div class = "row">
            <Sidebar />
                <div className="col-10">
                    <div className="container">
                        { props.children }
                    </div>
                </div>
	    </div>
		</div>
	)
}

export default Content