let apiCall=async(url)=> {
    try{
        let res = await fetch(url);
        let data = await res.json();
        return(data);
    }
    catch(err){
      console.log(err)
    }

    //add api call logic here


}


let appendArticles = (articles, main) =>{
    main.innerHTML = null;
    //add append logic here
    articles.map((el)=>{
        let div = document.createElement("div");
        div.setAttribute("id","blog");
        div.addEventListener("click",()=>{
            selectedBlog(el);
        })
     

        let title = document.createElement("div");
        title.innerText=el.title
   
        let img = document.createElement("img");
        img.src=el.urlToImage
   
        let description = document.createElement("div");
        description.innerText=el.description
   
        div.append(title,description,img);
   
        main.append(div)
       
      })

}

let selectedBlog=(el)=>{
    localStorage.setItem("article",JSON.stringify(el));
    window.location.href="./blog.html"
}


export { apiCall, appendArticles }

