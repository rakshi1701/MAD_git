self.addEventListener("install",()=>{
    console.log("Installed")

    caches.open("covid").then((cache)=>{
        cache.add("/")
        cache.add("/index.html")
        cache.add("/sw.js")
    }).catch(err=>console.log(err))
})

self.addEventListener("active",()=>{
    console.log("Activated")
})

self.addEventListener("fetch",(e)=>{
  e.respondWith(
    caches.match(e.request).then((response)=>{
        return response || fetch(e.request)
    }).catch(err=>console.log(err))
  )
})