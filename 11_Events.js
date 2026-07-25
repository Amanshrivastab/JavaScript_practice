// basic event listner nad events object 
document.getElementById("btn").addEventListener("click",(e)=>{
    console.log(e);
});

//2. e.type
document.getElementById("btn").addEventListener("click",(e)=>{
    console.log(e.type); 
});
//3. e.timestamp
document.getElementById("btn").addEventListener("click" , (e)=>{
    console.log(e.timeStamp);
});
//4.  e.target 
document.getElementById("parent").addEventListener("click",(e)=>{
    console.log("target",e.target);
});
//5. e.currenttarget
document.getElementById("parent").addEventListener("click",(e)=>{
    console.log("current target",e.currentTarget);
});
//6. differnce between target and current target
document.getElementById("parent").addEventListener("click",(e)=>{
    console.log("target",e.target.tagName);
    console.log("cuurent target",e.currentTarget.tagName);
});
//7. prevent default on click 
document.getElementById("mylink").addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("link nevigation prevented ");

});
//8. prevent default on submit 
document.getElementById("myform").addEventListener("click",(e)=>{
    e.preventDefault();
    console.log(e.defaultPrevented);
});
//9. defaultprevented (true case)
document.getElementById("mylink").addEventListener("click",(e)=>{
    console.log(e.defaultPrevented);// false unless prevented above
});
//10. bubbling
document.getElementById("parent").addEventListener("click",()=>{
    console.log("parent clicked");
});
document.getElementById("parent").addEventListener("click",()=>{
    console.log("child clicked");
})

//11. perpogetion
document.getElementById("child").addEventListener("click",(e)=>{
    e.stopPropagation();
    console.log(" stop propogestion ");
});
//12. capturing [phases]
document.getElementById("parent").addEventListener("click",(e)=>{
    console.log(" parent capture");
},true);
document.getElementById("child").addEventListener("click",()=>{
    console.log("child capture")
})
//13.stopImmidiatePropegation
document.getElementById("btn").addEventListener("click",(e)=>{
    e.stopImmediatePropagation();
    console.log("this is listner run ");
});
document.getElementById("btn").addEventListener("click",()=>{
    console.log("this will not run");
})

// 14. enevt deligation 
document.getElementById("list").addEventListener("click",(e)=>{
    if(e.target.tagName == "li"){
        console.log("list item cliccked",e.target.textContent);
    }
});
//15. target with nested element 
document.getElementById("parent").addEventListener("click",(e=>{
    console.log(e.target);
}));
//16.multiple event types 
["click","mouseover","keydown"].forEach((evt)=>{
    document.getElementById("btn").addEventListener(evt,(e)=>{
        console.log(e.type);
    });
});

//17.cpustum event
const myEvent = new CustomEvent("myEvent",{detail:{msg:"hellow"}});
document.dispatchEvent(myEvent);
//18.timestamp gap between clicks
let lastClick = 0;
document.getElementById("btn").addEventListener("click",(e)=>{
    console.log("gap:",e.timeStamp-lastClick,"ms");
    lastClick = e.timeStamp;
});
//20. All concepts togather
document.getElementById("parent").addEventListener("click",(e)=>{
    console.log("type",e.type);
    console.log("target",e.target);
    console.log("cuurent target", e.currentTarget);
    console.log("default prevented ",e.defaultPrevented);
});