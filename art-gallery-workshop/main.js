class Classic{
    constructor(frame="black-border", art_url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/687px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"){
        this.frame = frame;
        this.art_url = art_url;
    }

    render(){
        let img = document.createElement("img");
        img.src = this.art_url;
        img.classList.add("border")
        document.body.appendChild(img);

    }

}
var art1 = new Classic("http://simpleabstract.com/assets/images/Oil-On-Canvas-Abstract-Art.jpg")
art1.render()
art1.render()
art1.render()

art1.render()
art1.render()
art1.render()

// class Meme extends Classic{
//     constructor(frame="red-frame", art_url="http://i0.kym-cdn.com/entries/icons/original/000/022/940/spongebobicon.jpg"){
//         super("red-frame",art_url);
//     }

// }
// var meme1 = new Meme("http://i0.kym-cdn.com/entries/icons/original/000/022/940/spongebobicon.jpg")
// meme1.render()