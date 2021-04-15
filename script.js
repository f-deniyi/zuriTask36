const fs = require('fs');
const axios = require('axios');
const fetchPosts = async () => {
    try{
        let response = await axios.get('http://jsonplaceholder.typicode.com/posts');
        fs.writeFile('./result/posts.json',JSON.stringify(response.data),err=>{
            if(err){
               throw err
            }else{
                console.log('done');
            }
        });
    }catch(err){
        console.log(err);
    }
   
}
fetchPosts();