import React from 'react';
function WithLoader(Component) {
    return function WihLoaderComponent({ fetching, ...props }) {
        if (!fetching) return (<Component {...props} />);
        return (<p>Be Hold, fetching data may take some time :)</p>);
    }
}
export default WithLoader;
