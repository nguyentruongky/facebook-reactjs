import React from 'react'
import './Widgets.css'
function Widgets() {
    return (
        <div className="widgets">
            <iframe
                src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v11.0&appId=156149402950367&autoLogAppEvents=1"
                width="340"
                height="100%"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowTransparency="true"
                allow="encrypted-media"
            ></iframe>
        </div>
    )
}

export default Widgets
