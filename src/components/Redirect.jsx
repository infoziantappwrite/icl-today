import React from 'react'

const Redirect = ({link}) => {
    React.useEffect(() => {
        window.location.replace(link)
    });
    
    // Return null as this component doesn't render anything
}

export default Redirect;