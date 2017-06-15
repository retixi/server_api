const repo = require('../data.json');
module.exports = {
    store(){
        require('fs').writeFileSync('./data.json',JSON.stringify(repo))
    },
    get(index){
        return repo[index]
    },
    FindByEmail(email){
        function searchemail(obj) {
            return obj.email === email;
        }
        return repo.find(searchemail)
    },
    add(user){
        if(!this.FindByEmail(user.email))
        {
            repo.push(user);
            this.store()
            return true
        }
        else{
            console.log('existed')
            return false
        }
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
