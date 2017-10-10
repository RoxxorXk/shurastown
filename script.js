new Vue({
	el: '#app',
	data:{
		drawer: false,
		connect:false,
		sbar:false,
		seico: true,
		testv:null,
		fav: true,
		cmod: true,
		notif:69,
		checkbox: false,
		
	},
	props: {
		source: String,
	},
	methods: {
		test: function() {
			this.sbar = !this.sbar
			this.seico = !this.seico
		}
	}
})