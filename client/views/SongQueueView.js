// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    // this.render();
    this.collection.on("add", this.render, this);
    this.collection.on("remove", this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html('<tr><th>Song Queue</th><th></th><th></th></tr>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
    // return this.$el;
  }


});
