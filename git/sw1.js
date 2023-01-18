self.addEventListener("install",(e)=>{
    console.log("installed");
})

self.addEventListener("activate",(e) =>
{
    console.log("Activated");
}) 

self.addEventListener("fetch",(e)=>{
    console.log("fetched");

    fetch("http://apt.github.com/users/rakshi1701")
    .then((e)=>{
        return e.json;
    })
    .then((json)=>{
        console.log(json);
    })
    .catch((e)=>{
        console.log(e);
    })
})