(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`)
})();

((name)=> {console.log(`DB CONNECTED ${name}`)})("shivank") //unnamed IIFE

// when 2 IIFE there should be a semicolon after 1
