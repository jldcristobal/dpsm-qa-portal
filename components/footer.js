import Link from 'next/link'

function Footer() {
    return (
	<div className = "row">
        	<nav className="navbar navbar-expand-lg">
            		&copy; Copyright 2021 DPSM
        	</nav>
		<style jsx>{`
		.navbar{
			background-color: #eee;
			width:100%;
		}
		`}</style>
	</div>
    )
  }
  
  export default Footer