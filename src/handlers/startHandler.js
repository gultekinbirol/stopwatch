import dom from '../dom.js';
import data from '../data.js';

import updateTime from '../utils/updateTime.js';
import updateTimeComponent from '../components/updateTimeComponent.js';

const startHandler = () => {
    if (data.intervalId) {
        clearInterval(data.intervalId);
    }

    data.intervalId = setInterval(() => {
        const newData = updateTime(data);

        // update dom
        updateTimeComponent(dom.time, newData);
    }, 10);
};

export default startHandler;
