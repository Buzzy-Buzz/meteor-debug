/**
 * Created by adamginsburg on 14/06/15.
 */
Template.home.events({
    'dropped #dropzone': function(e, template) {
        e.preventDefault();
        e.stopImmediatePropagation();
        alert("dropped")
        FS.Utility.eachFile(e, function(file) {
            var fsFile = new FS.File(file);

            newFile = Images.insert(fsFile, function (err, fileObj) {
                //Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
                if (err){
                    throwError("Error Uploading File " + err.message)

                }


            });



        });




    },
});

Template.home.helpers({
    images: function(){
        return Images.find();
    }
})