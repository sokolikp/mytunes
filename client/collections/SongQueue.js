// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

    this.on('add', function() {
      if(this.length === 1) {
        //first song? Play
        this.playFirst();
      }

    }, this);

    this.on('ended', function() {
      this.at(0).dequeue();
      if(this.length) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(song){
      this.dequeue(song);
    }, this);

    // this.on('enqueue', function(song){
    //   console.log("I'm triggering enqueue with song: " + song);
    //   this.enqueue(song);
    // }, this);
  },

  playFirst: function() {
    this.at(0).play();
    // this.at(0).dequeue();
    // this.at(1).enqueue();
    // this.at(1).play();
  },

  dequeue: function(song) {
    this.remove(song);
  },

  // enqueue: function(song) {
  //   console.log("I'm queueing a song")
  //   this.add(song);
  // }

});
