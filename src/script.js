new Vue({
	el: '#app',
	data:{
		pseudo: "RoxxorXx",
		userico: ' src/usrpic/rox.png',
		color:"dark",
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
			{ pic:' src/img/favicon.png', user:'Shurave'},
			{ pic:' src/usrpic/rox.png', user:'RoxxorXx'},
			{ pic:' src/usrpic/kay.png', user:'Kayslowyn'},
			{ pic:' src/img/owl.png', user:"Admin"},
			{ pic:' src/usrpic/lys.png', user:"Deathu Arisu"},
			{ pic:' src/img/owl.png', user:"Default User"},
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
		bdrawer: function(arg){
			this.choice = arg
			this.drawer = false
		},

	}
})