// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  comparator: function(song) {
    return -song.get('votes');
  }
});
