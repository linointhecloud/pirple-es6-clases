const convertTimeToSeconds = (value, label) => {
    let seconds = 0;
    switch (label) {
        case 'minute': case 'minutes':
            seconds = value * 60;
        break;
        case 'hour': case 'hours':
            seconds = value * 60 * 60;
        break;
        case 'day': case 'days':
            seconds = value * 60 * 60 * 24
        break;
        default:
            seconds = value;
        break;
    }
    return seconds;
}

const validateInputTime = (value, label) => {
    let valid = false;
    switch (label) {
        case 'second': case 'minute': case 'hour': case 'day':
            valid = value == 1 ? true : false;
        break;
        case 'seconds': case 'minutes': case 'hours': case 'days':
            valid = value > 1 ? true : false;
        break;
        default: break;
    }
    return valid;
}

const convertSecondsToHumanReadable = (seconds) => {
    let s = 0;
    let m = 0;
    let h = 0;
    let d = 0;
    d = seconds / (24 * 60 * 60);
    h = seconds / (60 * 60);
    m = seconds / 60;
    // Extra credit
    if (Number.isInteger(d) && d > 0) {
        return [d, d > 1 ? "days" : "day"];
    } else if (Number.isInteger(h) && h > 0) {
        return [h, h > 1 ? "hours" : "hour"];
    } else if (Number.isInteger(m) && m > 0) {
        return [m, m > 1 ? "minutes" : "minute"];
    } else if (Number.isInteger(s) && s > 0) {
        return [s, s > 1 ? "seconds": "second"];
    } else {
        return false;
    }
}

const timeAdder = (value1, label1, value2, label2) => {
    let validateFirstInput = validateInputTime(value1, label1);
    let validateSecondInput = validateInputTime(value2, label2);

    if (validateFirstInput && validateSecondInput) {
        totalSeconds = convertTimeToSeconds(value1, label1) + convertTimeToSeconds(value2, label2);
        console.log(convertSecondsToHumanReadable(totalSeconds));
    } else {
        console.log('Please check your input values');
    }
}

timeAdder(20, 'hours', 4, 'hours');
timeAdder(1, 'hour', 4, 'hours');
timeAdder(2, 'hours', 5, 'minutes');
timeAdder(20, 'days', 4, 'hours');
timeAdder(1, 'hour', 4, 'minutes');
timeAdder(5, 'hour', 5, 'minutes');
