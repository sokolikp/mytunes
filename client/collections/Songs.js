// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  // initialize: function(){
  //   this.on('enqueue', function(song){
  //     console.log("I'm triggering enqueue with song: " + song);
  //     this.enqueue(song);
  //   }, this);
  // }

});
