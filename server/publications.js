/**
 * Created by adamginsburg on 14/06/15.
 */
Meteor.publish('images', function() {
   // this.unblock();
    return Images.find(); // needs to be filtered
});
