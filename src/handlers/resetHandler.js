import data from '../data.js';
import dom from '../dom.js';

import updateTimeComponent from '../components/updateTimeComponent.js';

const resetHandler = () => {
    if (data.intervalId) {
        clearInterval(data.intervalId);
    }

    data.milliseconds = 0;
    data.seconds = 0;
    data.minutes = 0;

    // dom
    updateTimeComponent(dom.time, data);
};

export default resetHandler;
