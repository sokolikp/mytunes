// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td><%= playCount %></td><td><%= votes %></td>\
                        <td class="upvote">^</td><td class="downvote">v</td>'),

  initialize: function(){

    this.model.on('change:votes', function(){
      this.render();
    }, this);

    this.model.on('change:playCount', function() {
      //if song added is the first song, play
      this.render();
    }, this);

  },

  events: {
    'click .upvote': function(){
      this.model.upvote();
    },
    'click .downvote': function(){
      this.model.downvote();
    },
    'click': function() {
      this.model.enqueue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
