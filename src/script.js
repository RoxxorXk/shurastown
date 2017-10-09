new Vue({
	el: '#app',
	data:{
		drawer: false,
		connect:true,
		sbar:false,
		seico: true,
		testv:null,
		fav: true,
		cmod: true,
		notif:69,
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