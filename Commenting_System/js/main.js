 //Creating our vue component
Vue.component('post',{
	template:'#post-template',
	props:['post'],
	data:function(){
		return{
			upvoted:false,
			downvoted:false
		}
	},
	methods:{
		upvote: function(){
			this.upvoted = !this.upvoted,
			this.downvoted = false
		},
		downvote: function(){
			this.downvoted = !this.downvoted,
			this.upvoted = false
		}
	},
	computed:{
		votes:function () {
			if(this.upvoted){
				return this.post.votes + 1;
			}
			else if(this.downvoted){
				return this.post.votes  - 1;
			}
			else{
				return this.post.votes;
			}
		}
	}
})


//Creating an instance of our Vue-Model

var vm = new Vue({
	el:'#app',
	data:{
		posts: [{

                title: "A post for our reddit demo starting at 15 votes",
                votes: 15
            },
            {
                title: "Try out the upvoting, it works, I promise",
                votes: 53
            },
            {
                title: "coligo is the bomb!",
                votes: 10
        }]

	}
})




var vm = new Vue({
  el: "#commentApp",
  data: {
    comments: [{
      title: "Great article!",
      votes: 2
    }, {
      title: "VueJs commenting system with votes!",
      votes: 5
    }, {
      title: "The random pun that gets a lot of upvotes",
      votes: 85
    }],
    comment: ""
  },
  methods: {
    postComment: function() {
      this.comments.push({
        title: this.comment,
        votes: 0
      })
      this.comment = "";
    }
  }
});

