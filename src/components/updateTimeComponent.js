import formatTimeUnit from '../utils/formatTimeUnit.js';
import formatMilliseconds from '../utils/formatMilliseconds.js';

const updateTimeComponent = (timeDom, time) => {
    timeDom.querySelector('.milliseconds').innerText = formatMilliseconds(
        time.milliseconds,
    );

    if (time.seconds !== time.oldSeconds) {
        timeDom.querySelector('.seconds').innerText = formatTimeUnit(
            time.seconds,
        );
    }

    if (time.minutes !== time.oldMinutes) {
        timeDom.querySelector('.minutes').innerText = formatTimeUnit(
            time.minutes,
        );
    }

    time.oldSeconds = time.seconds;
    time.oldMinutes = time.minutes;
};

export default updateTimeComponent;
