var app = {

    findByName: function() {
        console.log('findByName');
        this.store.findByName($('.search-key').val(), function(employees) {
            var l = employees.length;
            var e;
            $('.employee-list').empty();
            for (var i=0; i<l; i++) {
                e = employees[i];
                $('.employee-list').append('<li><a href="#employees/' + e.id + '">' + e.firstName + ' ' + e.lastName + '</a></li>');
            }
        });
    },

    renderHomeView: function() {
    	var html = 
    		"<div class='header'><h1>Directory - Home<span><img class='userimage' src='./img/xbox_avatar_64_2014.png' /></span></h1></div>" +
    		"<div class='search-view'>" +
    		"<input class='search-key' type='text'/>" +
    		"<ul class='employee-list'></ul>" +
    		"</div>"
    	$('body').html(html);
    	$('.search-key').on('keyup', $.proxy(this.findByName, this));
    },
    
    initialize: function() {
    	var self = this;
        this.store = new MemoryStore(function() {
        	self.renderHomeView();
        });
    }

};

app.initialize();