//  Basic practise foe promise in java script 
//1. BASIC PROMISE CREATION 
function example1(){
    console.log("example one ");
    const p= new Promise((resolve , reject) =>{
        const success = true ;
        setTimeout(()=>{
            if(success) resolve("task completed successfully ");
            else reject (new Error("task failed"));
        },1000);
    });
    p.then((result)=> console.log("resolved :", result))
    .catch((err)=> console.error("rejected",err.message));

}

//2. function for chaning prosses (.then() and catch() )
function fakeFetchUser(id){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve({id,name:"Aman"}),500);
    });

}
function fakeFetchPost(userId){
    return new Promise((resolve)=>{
        setTimeout(()=> resolve([`post one ${userId}`,`post 2 by ${userId}`]),500);
    });
}

function  example2_chaningTest(){
    console.log("/  example 2");
    fakeFetchUser(1)
    .then((user)=> fakeFetchPost(user.id))
    .then((posts)=>console.log("posts (.then style):",posts))
    .catch((err)=>console.error(err));
}
async function example2_chaning_asyncAwait() {
    console.log("example 2b: chaning");
    try{
        const user = await fakeFetchUser(2);
        const posts = await fakeFetchPost(user.id);
        console.log("posts (async await)", posts);

    }catch(err){
        console.log(err);
    }

    
}
//3. ERROR HANDLING - catch is mandetry
function fakeFetchDataWithError(){
    return new Promise((resolve,reject)=> {
        setTimeout(()=>reject(new Error("Network error!")),500);
    });
}
function example3_errorHandling(){
    console.log("example 3 error handlinng");
    fakeFetchDataWithError()
    .then((res)=> console.log(res))
    .catch((err)=> console.error("caought error ",err.message));
}
async function example3_errorHandling_async() {
    console.log("example 3 handle by async");
    try{
        await fakeFetchDataWithError();
    }catch(err){
        console.error("caught (async/await):",err.message);
    }
    
}
//4. promise.all - run in parellel and fail if any rejects 
function delay(value ,ms , shouldFail = false){
    return new Promise((resolve , reject)=>{
        setTimeout(() => {
            if(reject) reject(new Error(`${value} failed`));
            else resolve(value);
        }, ms);
    })
} 
function example4_promiseAll(){
    console.log("example 4 promise all ");
    Promise.all([delay("A",300),delay("B",200),delay("C",400)])
    .then((result)=> console.log("All resolved ", result))
    .catch((err)=> console.error("One failed, all rejected ", err.message));
}

//5. promise face - frist one to settle wins 
function timeout(ms){
    return new Promise((_,reject) =>{
        setTimeout(() => {
            reject(new Error("request timed out "))
        }, ms);
    });

}
function example5_promiseRace(){
    console.log("example 5: promise rate ");
    const slowRequest =delay("service responces ",2000);  // more than time to promise race 
    Promise.race([slowRequest,timeout (1000)])
    .then((res) => console.log("race result ",res))
    .catch((err)=> console.error("race error ",err.message));
}

//







// function for run the promise functions(all function )
async function runAll(){
    //example1();
    //await new Promise((r)=>setTimeout(r, 1200));

    //example2_chaningTest();
    //await example2_chaning_asyncAwait();
    //await new Promise((r)=> setTimeout(r,600));

    //example3_errorHandling();
   //example3_errorHandling_async();
   //await new Promise((r)=>setTimeout(r,600));

   // example4_promiseAll();
   //await new Promise((r)=>setTimeout(r,600));

  // example5_promiseRace();
   //await new Promise((r)=> timeout(r,600));







    console.log("/n run examples finishes running ");

}
runAll();    // fuction call
