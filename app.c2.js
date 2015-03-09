app.c2 = {

	page: "#page2",

	data: {
		nombre: ""
	},

	init: function() {
		console.log("INIT del controlador2, page2");
	},

	update: function() {
		console.log("UPDATE del controlador2, page2");
		 $('#page2feed').pongstgrm({
      accessId:     '679256982',
      accessToken:  '177382734.1fb234f.840ef02c62804bc791d6b2c8371c95bb',
      show: 'citzag'
    });

	}

};