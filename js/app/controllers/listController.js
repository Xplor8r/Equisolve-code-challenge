function listController(listService){
    let ctrl = this;
    listService
        .getList()
        .then(res=>{
            // sort response data from get request by published_at
            ctrl.data = res.data.sort((a, b) => (a.published_at < b.published_at) ? 1 : ((a.published_at > b.published_at) ? -1 : 0));
            console.log(ctrl.data)
        })    
}

angular
	.module('app')
	.controller('listController', listController);