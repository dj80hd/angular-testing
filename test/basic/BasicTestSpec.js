

describe("mySuite", function () {
    beforeEach(module('notesApp'));
    var ctrl;

    beforeEach(inject(function($controller) {
        ctrl = $controller('listCtrl');
    }));

    it('should have items', function() {
        expect(ctrl.items).toEqual(
            [{id: 1, label: 'first', done: true}, {id: 2, label: 'second', done: false}]
        );
    });

});