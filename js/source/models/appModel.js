import * as ko from 'knockout';
import THeadCellModel from './theadCellModel';
import TBodyCellModel from './tbodyCellModel';
import {thead, json} from  './../data';

const AppModel = function(heads, bodys) {
    const self = this;

    self.allTHead = heads.map(head => head.map(cell => new THeadCellModel(cell)));
    self.allBody = bodys.map(body => body.map(cell => new TBodyCellModel(cell)));

    self.currentTHead = ko.observableArray(self.allTHead[0]);
    self.currentBody = ko.observableArray(self.allBody[0]);

    self.changeTable = function(buttonNumber) {
        let number = buttonNumber();

        if (self.allTHead[number] && self.allBody[number]) {
            self.currentTHead(self.allTHead[number]);
            self.currentBody(self.allBody[number]);
        }
    };
};

ko.applyBindings(new AppModel(thead, json));