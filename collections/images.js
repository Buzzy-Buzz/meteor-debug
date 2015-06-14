/**
 * Created by adamginsburg on 14/06/15.
 */
/**
 * Created by adamginsburg on 1/07/2014.
 */



Images = new FS.Collection("images", {
    stores: [


        new FS.Store.S3("originalImages",{
            //region: "s3-us-west-2.amazonaws.com", //optional in most cases
            accessKeyId: "<access key>", //required if environment variables are not set
            secretAccessKey: "<secret key>", //required if environment variables are not set
            bucket: "buzzytestbucket", //required
            ACL: "public-read-write", //optional, default is 'private', but you can allow public or secure access routed through your app URL

        }),


    ],
    filter: {
        allow: {
            contentTypes: ['image/*'] //allow only images in this FS.Collection
        }
    }
});




Images.allow({
    update:  function(userId, file){return true;},
    remove: function(userId, file){return true;},
    insert: function(userId, file){return true;},
    download: function(userId, file){return true;}
});

