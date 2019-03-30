// Ajax callback , http requests

class Request{
    constructor(){
        this.xhr = new XMLHttpRequest();
    }

    get(url,callback){
        this.xhr.open("GET",url); 
        this.xhr.onload = () => {
            console.log(this);
            if(this.xhr.status === 200){
                callback(null,this.xhr.responseText);
            }else{
                //Hata durumu
                callback("There is error",null);
            }
        };
        this.xhr.send();
    }
    post(url,data,callback){
        this.xhr.open("POST",url);
        this.xhr.setRequestHeader("Content-type","application/json");

        this.xhr.onload = () => {
            if(this.xhr.status === 201){
                callback(null,this.xhr.responseText);
            }else{
                callback("Post Request : Herhangi bir hata oluştu",null);
            }
        }
        this.xhr.send(JSON.stringify(data));
    }
    put(url,data,callback){
        this.xhr.open("PUT",url);
        this.xhr.setRequestHeader("Content-type","application/json");

        this.xhr.onload = () => {
            if(this.xhr.status === 200){
                callback(null,this.xhr.responseText);
            }else{
                callback("Put Request : Herhangi bir hata oluştu",null);
            }
        }
        this.xhr.send(JSON.stringify(data));
    }
    delete(url,callback){
        this.xhr.open("DELETE",url); 
        this.xhr.onload = () => {
            console.log(this);
            if(this.xhr.status === 200){
                callback(null,"Data is deleted");
            }else{
                //Hata durumu
                callback("dELETE eRROR : There is error",null);
            }
        };
        this.xhr.send();
    }
}
const request = new Request();
// GET

// request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){
//     if(err === null){
//         console.log(response);
//     }else{
//         //Hata
//         console.log(err);
//     }
// });

// POST

// request.post("https://jsonplaceholder.typicode.com/albums",{userId:2,title:"Thriller"},function(err,album){
//     if(err === null){
//         console.log(album);
//     }else{
//         console.log(err);
//     }
// });

// PUT

// request.put("https://jsonplaceholder.typicode.com/albums/10",{userId:123,title:"AlbumName"},function(err,album){
//     if(err === null){
//         console.log(album);
//     }else{
//         console.log(err);
//     }
// });

// DELETE

// request.delete("https://jsonplaceholder.typicode.com/albums/10",function(err,response){
//     if(err === null){
//         console.log(response);
//     }else{
//         //Hata
//         console.log(err);
//     }
// });