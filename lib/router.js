/**
 * Created by adamginsburg on 14/06/15.
 */
Router.configure({
    layoutTemplate: 'standard',
    loadingTemplate: 'loading',
    waitOn: function () {
        Meteor.subscribe("images");

    }
});

Router.route('/', {
    name: 'home'


});