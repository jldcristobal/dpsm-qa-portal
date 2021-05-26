import Head from 'next/head'
import Header from './header'
import SidebarUnitHead from './sidebar-unit-head'
import Footer from './footer'
import Content from './content'

function LayoutUnitHead(props) {
    return (
        <div className = "container-fluid">
            <Head>
                <title>DPSM-QA-PORTAL</title>
                {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link> */}
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" />
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
            </Head>
            <Header />
		<div className = "row" id = "layout_row">
            <SidebarUnitHead />
                <div className="col-10">
                    <div className="container">
                        { props.children }
                    </div>
                </div>
	    </div>
        </div>
    )
  }
  
  export default LayoutUnitHead