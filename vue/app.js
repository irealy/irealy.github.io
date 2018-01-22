let form = new Vue({
	el: '.form-request',
	data: {
		name: '',
		lastname: '',
		email: '',
		guesses: [],
		formsucces: false
	},
	methods: {
		addGuess() {
			this.guesses.push({
				value: ''
			})
		},
		removeGuess(index) {
			this.guesses.splice(index, 1);
		}
	}
})