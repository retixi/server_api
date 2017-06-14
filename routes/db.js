const repo = require('./data.json');
module.exports = {
    store(){
        require('fs').writeFileSync('./data.json",JSON.stringify(repo))
    },
    get(index){
        return repo[index]
    },
    add(user){
        repo.push(user)
        this.store()
    },
    del(index){
        repo[index] = null
        this.store()
    },
    update(index,newuser){
        repo[index] = newuser
        this.store()
    }
}
