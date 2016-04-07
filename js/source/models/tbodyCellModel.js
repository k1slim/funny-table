const TBodyCellModel = function(cell) {
    const self = this;

    Object
        .keys(cell)
        .forEach(key => self[key] = cell[key]);
};

export default TBodyCellModel;