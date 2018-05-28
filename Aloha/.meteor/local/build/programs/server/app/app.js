var require = meteorInstall({"imports":{"api":{"comments.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////
//                                                                               //
// imports/api/comments.js                                                       //
//                                                                               //
///////////////////////////////////////////////////////////////////////////////////
                                                                                 //
module.export({
  Comments: () => Comments
});
let Mongo;
module.watch(require("meteor/mongo"), {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
const Comments = new Mongo.Collection('comments');

if (Meteor.isServer) {
  Meteor.publish('comments_publication', function commentPublicationFunction() {
    return Comments.find();
  });
}

Meteor.methods({
  'addComments'(text, currentUser) {
    Comments.insert({
      text: text,
      complete: false,
      createdAt: new Date(),
      username: currentUser
    });
  },

  'deleteComment'(id) {
    Comments.remove(id);
  }

});
///////////////////////////////////////////////////////////////////////////////////

},"tasks.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////
//                                                                               //
// imports/api/tasks.js                                                          //
//                                                                               //
///////////////////////////////////////////////////////////////////////////////////
                                                                                 //
module.export({
  Tasks: () => Tasks
});
let Mongo;
module.watch(require("meteor/mongo"), {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
const Tasks = new Mongo.Collection('tasks');
///////////////////////////////////////////////////////////////////////////////////

}}},"server":{"main.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////
//                                                                               //
// server/main.js                                                                //
//                                                                               //
///////////////////////////////////////////////////////////////////////////////////
                                                                                 //
let Meteor;
module.watch(require("meteor/meteor"), {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
module.watch(require("../imports/api/tasks.js"));
module.watch(require("../imports/api/comments.js"));
Meteor.startup(() => {});
///////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".jsx"
  ]
});
require("/server/main.js");
//# sourceURL=meteor://💻app/app/app.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvY29tbWVudHMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3Rhc2tzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvbWFpbi5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnQiLCJDb21tZW50cyIsIk1vbmdvIiwid2F0Y2giLCJyZXF1aXJlIiwidiIsIkNvbGxlY3Rpb24iLCJNZXRlb3IiLCJpc1NlcnZlciIsInB1Ymxpc2giLCJjb21tZW50UHVibGljYXRpb25GdW5jdGlvbiIsImZpbmQiLCJtZXRob2RzIiwidGV4dCIsImN1cnJlbnRVc2VyIiwiaW5zZXJ0IiwiY29tcGxldGUiLCJjcmVhdGVkQXQiLCJEYXRlIiwidXNlcm5hbWUiLCJpZCIsInJlbW92ZSIsIlRhc2tzIiwic3RhcnR1cCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsT0FBT0MsTUFBUCxDQUFjO0FBQUNDLFlBQVMsTUFBSUE7QUFBZCxDQUFkO0FBQXVDLElBQUlDLEtBQUo7QUFBVUgsT0FBT0ksS0FBUCxDQUFhQyxRQUFRLGNBQVIsQ0FBYixFQUFxQztBQUFDRixRQUFNRyxDQUFOLEVBQVE7QUFBQ0gsWUFBTUcsQ0FBTjtBQUFROztBQUFsQixDQUFyQyxFQUF5RCxDQUF6RDtBQUcxQyxNQUFNSixXQUFXLElBQUlDLE1BQU1JLFVBQVYsQ0FBcUIsVUFBckIsQ0FBakI7O0FBR1AsSUFBSUMsT0FBT0MsUUFBWCxFQUFvQjtBQUNsQkQsU0FBT0UsT0FBUCxDQUFlLHNCQUFmLEVBQXVDLFNBQVNDLDBCQUFULEdBQXFDO0FBQzFFLFdBQU9ULFNBQVNVLElBQVQsRUFBUDtBQUNELEdBRkQ7QUFHRDs7QUFLREosT0FBT0ssT0FBUCxDQUFlO0FBR2IsZ0JBQWNDLElBQWQsRUFBb0JDLFdBQXBCLEVBQWdDO0FBQzlCYixhQUFTYyxNQUFULENBQWdCO0FBQ2RGLFlBQU1BLElBRFE7QUFFZEcsZ0JBQVUsS0FGSTtBQUdkQyxpQkFBVyxJQUFJQyxJQUFKLEVBSEc7QUFJZEMsZ0JBQVVMO0FBSkksS0FBaEI7QUFNRCxHQVZZOztBQVliLGtCQUFnQk0sRUFBaEIsRUFBbUI7QUFDakJuQixhQUFTb0IsTUFBVCxDQUFnQkQsRUFBaEI7QUFDRDs7QUFkWSxDQUFmLEU7Ozs7Ozs7Ozs7O0FDZkFyQixPQUFPQyxNQUFQLENBQWM7QUFBQ3NCLFNBQU0sTUFBSUE7QUFBWCxDQUFkO0FBQWlDLElBQUlwQixLQUFKO0FBQVVILE9BQU9JLEtBQVAsQ0FBYUMsUUFBUSxjQUFSLENBQWIsRUFBcUM7QUFBQ0YsUUFBTUcsQ0FBTixFQUFRO0FBQUNILFlBQU1HLENBQU47QUFBUTs7QUFBbEIsQ0FBckMsRUFBeUQsQ0FBekQ7QUFFcEMsTUFBTWlCLFFBQVEsSUFBSXBCLE1BQU1JLFVBQVYsQ0FBcUIsT0FBckIsQ0FBZCxDOzs7Ozs7Ozs7OztBQ0ZQLElBQUlDLE1BQUo7QUFBV1IsT0FBT0ksS0FBUCxDQUFhQyxRQUFRLGVBQVIsQ0FBYixFQUFzQztBQUFDRyxTQUFPRixDQUFQLEVBQVM7QUFBQ0UsYUFBT0YsQ0FBUDtBQUFTOztBQUFwQixDQUF0QyxFQUE0RCxDQUE1RDtBQUErRE4sT0FBT0ksS0FBUCxDQUFhQyxRQUFRLHlCQUFSLENBQWI7QUFBaURMLE9BQU9JLEtBQVAsQ0FBYUMsUUFBUSw0QkFBUixDQUFiO0FBSzNIRyxPQUFPZ0IsT0FBUCxDQUFlLE1BQU0sQ0FDcEIsQ0FERCxFIiwiZmlsZSI6Ii9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XG5cblxuZXhwb3J0IGNvbnN0IENvbW1lbnRzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ2NvbW1lbnRzJyk7XG5cblxuaWYgKE1ldGVvci5pc1NlcnZlcil7XG4gIE1ldGVvci5wdWJsaXNoKCdjb21tZW50c19wdWJsaWNhdGlvbicsIGZ1bmN0aW9uIGNvbW1lbnRQdWJsaWNhdGlvbkZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIENvbW1lbnRzLmZpbmQoKTtcbiAgfSk7XG59XG5cblxuXG5cbk1ldGVvci5tZXRob2RzKHtcblxuXG4gICdhZGRDb21tZW50cycodGV4dCwgY3VycmVudFVzZXIpe1xuICAgIENvbW1lbnRzLmluc2VydCh7XG4gICAgICB0ZXh0OiB0ZXh0LFxuICAgICAgY29tcGxldGU6IGZhbHNlLFxuICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLFxuICAgICAgdXNlcm5hbWU6IGN1cnJlbnRVc2VyXG4gICAgfSk7XG4gIH0sXG5cbiAgJ2RlbGV0ZUNvbW1lbnQnKGlkKXtcbiAgICBDb21tZW50cy5yZW1vdmUoaWQpO1xuICB9XG5cbn0pXG4iLCJpbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XG5cbmV4cG9ydCBjb25zdCBUYXNrcyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCd0YXNrcycpO1xuIiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XG5pbXBvcnQgJy4uL2ltcG9ydHMvYXBpL3Rhc2tzLmpzJztcbmltcG9ydCAnLi4vaW1wb3J0cy9hcGkvY29tbWVudHMuanMnO1xuXG5cbk1ldGVvci5zdGFydHVwKCgpID0+IHtcbn0pO1xuIl19
