const formatTimeUnit = (unit) => {
    if (unit < 10) {
        return (unit = `0 ${unit}`);
    } else {
        return unit;
    }
};

export default formatTimeUnit;
