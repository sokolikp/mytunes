// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

    this.on('add', function() {
      //if song added is the first song, play
      if(this.length === 1) {
        this.playFirst();
      }

    }, this);

    this.on('ended', function() {
      //This dequeue function calls SongModels' function, not THIS dequeue!
      this.at(0).dequeue();
    }, this);

    //call built-in dequeue, which plays next song
    this.on('dequeue', function(song){
      this.dequeue(song);
    }, this);
  },

  playFirst: function() {
    this.at(0).play();
  },

  dequeue: function(song) {
    var temp = this.at(0);
    this.remove(song);
    if(temp === song && this.length){
      this.playFirst();
    }
  },

});
