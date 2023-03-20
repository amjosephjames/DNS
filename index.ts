import dns from "dns";
// const hostname: string = "google.com";
// const hostname: string = "myservices.netlifyapp.com";
const hostname: string = "netnaija.com";
dns.lookup(hostname, function (err, address, family) {
  if (err) {
    console.log("Wrong input");
    return;
  }
  console.log("address", address);
  console.log("family", family);
});

dns.resolve(hostname,function (err,address){
    if(err){
        console.log("Wrong input v4")
        return;
    }
    console.log("Addressv4",address)
})
dns.resolve4(hostname, function(err,address){
    if(err){
        console.log("Wrong input");
        return;
    }
    console.log("Addressv4",address)
})
dns.resolve6(hostname, function(err,address){
    if(err){
        console.log("Wrong input");
        return;
    }
    console.log("Addressv4",address)
})
