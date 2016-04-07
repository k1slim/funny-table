const THeadCellModel = function(cell) {
    const self = this;

    self.title = cell.title;
    self.prop = cell.prop;

    self.template = cell.template ? cell.template : 'normal';
    self.options = cell.options ? cell.options : '';

};

export default THeadCellModel;