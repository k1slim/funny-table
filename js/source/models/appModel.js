import * as ko from 'knockout';
import THeadCellModel from './theadCellModel';

var thead = [
    {
        prop: 'pk',
        title: 'index',
        template: 'naormal'
    }, {
        prop: 'name',
        title: 'name',
        template: 'naormal'
    },
    {
        prop: 'q',
        title: 'qwerty',
        template: 'naormal'
    }
];

var json = [
    {pk: 12, name: 'Vas', q: 'zz'},
    {pk: 11, name: 'Igar', q: 45},
    {pk: 14, name: 'hdsadf', q: 17},
    {pk: 16, name: 'qwerty', q: 24}
];

const AppModel = function(head, body) {
    const self = this;
    self.thead = ko.observableArray(head.map(cell => new THeadCellModel(cell)));
    self.body = ko.observableArray(body);
};

ko.applyBindings(new AppModel(thead, json));