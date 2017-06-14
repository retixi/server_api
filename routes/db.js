const repo = require('./data.json');
module.exports = {
    store(){
        require('fs').writeFileSync(__dirname + "\\data.json",JSON.stringify(repo))
    },
    get(index){
        return repo[index]
    },
    add(user){
        repo.push(user)
        this.store()
        console.log(__dirname + "\data.json")
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
