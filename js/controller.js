/**
 * Created by jimi on 2/10/2015.
 */
var app = angular.module('notesApp', []);
app.controller('listCtrl',[function() {
        var self = this;

        self.items = [
            {id: 1, label: 'first', done: true},
            {id: 2, label: 'second', done: false}
        ];//items

        self.getDoneClass = function(item) {
            return {
                finished: item.done,
                unfinished: !item.done
            };
        };//getDoneClass
    }]);
