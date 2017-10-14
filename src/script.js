new Vue({
	el: '#app',
	data:{
		pseudo: "RoxxorXx",
		userico: 'src/img/owl.png',

		drawer: false,
		connect:false,
		sbar:false,
		seico: true,
		testv:null,
		fav: true,
		cmod: true,
		notif:69,
		checkbox: false,
		choice:1,	
		cnews:true,
		d2:true,	
		nbichat:5,
		images:[
			{ pic:' src/img/favicon.png'},
			{ pic:' src/img/favicon.png'},
			{ pic:' src/img/favicon.png'},
			{ pic:' src/img/favicon.png'},
		]

	},
	props: {
		source: String,
	},
	methods: {
		logout: function(){
			this.connect = !this.connect
			this.choice=1
		},
		test: function() {
			this.sbar = !this.sbar
			this.seico = !this.seico
		},

	}
})