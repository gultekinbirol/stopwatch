const formatTimeUnit = (unit) => {
    if (unit < 10) {
        return (unit = `0 ${unit}`);
    }
    return unit;
};

export default formatTimeUnit;
