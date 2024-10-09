// App.js
/* global chrome */
// App.js
import React from 'react';

const App = () => {
    const handleSendRequests = () => {
        // Directly open the target URL
        window.open('https://www.linkedin.com/mynetwork/grow/', '_blank');
    };

    return (
        <div>
            <h1>LinkedIn Connector</h1>
            <button onClick={handleSendRequests}>Send Connection Request</button>
        </div>
    );
};

export default App;
