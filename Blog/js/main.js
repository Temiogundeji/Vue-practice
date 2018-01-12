// Manage Post ---Component

Vue.component('manage-posts', {
	template:'#manage-template',
	 data: function(){
	 	return{
  		posts:[
				'Complete Javascript Tutorial',
				'Complete Vuejs Tutorial',
				'Complete Nodejs Tutorial',
				'Get Accustomed to using APIs'
			]
		}
	  }
	})

//Create Post ---Component
Vue.component('create-posts', {
	template:'#create-template',
	props:['posts']
})

new Vue({
  el: '#app',
  data:{
  currentView: 'manage-posts',
	}
})


