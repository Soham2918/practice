interface keyvalue{
    key:number
    value:string
}

interface keyw{
    key:string;
    kk:string
    pp:number
    bb:boolean
}

function show(){
    let key1:keyvalue={value:"one",key:1}
    let k2:keyw={key:'one', kk:"two",pp:25,bb:true}
    console.log(key1);
    console.log(k2);
    
    
}

show()