let ul = document.querySelector("ul")

class Profile{
    constructor(name,url, photo, repos){
        this.name = name;
        this.url = url
        this.photo = photo;
        this.repos = [];
    }
    add(repo){
        this.repos.push(repo)
    }
}

class Repo{
    constructor(name, url){
        this.name = name
        this.url = url
    }


}


axios.get("https://api.github.com/users/mag166")
.then((response) => {
    let data = response.data
    let profile = new Profile(data.name, data.url, data.avatar_url)

    axios.get(data.repos_url)
    .then((response2) => {
        response2.data.forEach((item) => {
            profile.add(new Repo(item.name, item.html_url))
        })
    })
    let li = document.createElement("li")

})
