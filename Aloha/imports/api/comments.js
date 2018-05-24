import { Mongo } from 'meteor/mongo';


export const Comments = new Mongo.Collection('comments');


if (Meteor.isServer){
  Meteor.publish('comments_publication', function commentPublicationFunction(){
    return Comments.find();
  });
}




Meteor.methods({


  'addComments'(text, currentUser){
    Comments.insert({
      text: text,
      complete: false,
      createdAt: new Date(),
      username: currentUser
    });
  },

  'deleteComment'(id){
    Comments.remove(id);
  }

})
