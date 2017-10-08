new Vue({
	el: '#app',
	data:{
		drawer: false,
		sbar:false,
		seico: true,
		testv:null,
		fav: true,
	    message: false,
	    hints: true,
	    items: [
	      { title: 'Click Me' },
	      { title: 'Click Me' },
	      { title: 'Click Me' },
	      { title: 'Click Me 2' }
	    ]
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