Vue.component('message', {
	props:['title', 'body'],
	data:{
		isVisible:false
	},
	template:`
	<div class="container" v-show="isVisible">
	<div class="text-center" id="header">
		<h1>{{ title }}</h1>
	</div>
	<p id="article-body">
		{{ body }}
	</p>
	<div id="footer" class="text-center">
		<h2><i>{{body}}</i></h2>
	</div>

	</div>

	<button type="button" class=" btn btn-danger" @click="hideMessage">X</button>

	`
},

methods:{

	hideMessage (){
		this.isVisible = false
	}

}
)

new Vue({
	el:"#app"
})

