app.c1 = {
	
	page: "#page1",

	init: function() {
		console.log("INIT del controlador1, page1");
		
		$('#page1listview').on("click", "li", function() {
			app.c2.data.nombre = $(this).text();
		});

		app.c1.updateList();
	},

	updateList: function() {
		var llista = [];
		for(var i = 0, max = app.m.alumnes.length; i < max; i++) {
			llista.push([
				'<li>',
				'	<a href="#page2">',
				app.m.alumnes[i].nom ,
				'	</a>',
				'</li>',
			].join(''));
		}
		$('#page1listview').html(llista.join(''));
		$('#page1listview').listview("refresh");
	},

	update: function() {
		console.log("UPDATE del controlador1, page1");
	}

};