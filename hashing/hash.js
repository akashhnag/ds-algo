let bucketSize=30;
let bucket=new Array(bucketSize);

class HashNode{
    constructor(key,value,next){
        this.key=key;
        this.value=value;
        this.next=next || null;
    }

    insert(key,value){
       let index=getHash(key);
       if(bucket[index]===undefined){
            bucket[index]=new HashNode(key,value);

       }else{
          let currentNode=bucket[index];
          while (currentNode.next) {
              currentNode=currentNode.next;
          }
          currentNode.next=new HashNode(key,value);
       }
    }

    update(key,value){
        let index=getHash(key);
        if(bucket[index]===undefined){
                bucket[index]=new HashNode(key,value);
        }
        else if(bucket[index]['key']===key){
            bucket[index]['value']=value;
        }
        else{
            let currentNode=bucket[index];
            while (currentNode.next) {
                if(currentNode.next.key===key){
                    currentNode.next.value=value;
                    return;
                }
                currentNode=currentNode.next;
            }
            currentNode.next=new HashNode(key,value);
        }
    }

    get(key){
        let index=getHash(key);
        for(let i=0;i<bucket.length;i++){
            if(i===index){
                if(bucket[i].key===key){
                    console.log(bucket[i].value);
                }
                else{
                    let currentNode=bucket[index];
                    while (currentNode.next) {
                        if(currentNode.next.key===key){
                            console.log(currentNode.next.value);
                            return;
                        }
                        currentNode=currentNode.next;
                    }
                }
            }
        }
    }

    getAll(){
        let result=[];
        bucket.forEach((ele)=>{
            if(ele){
                result.push(ele.value);
                while (ele.next) {
                    result.push(ele.next.value);
                    ele=ele.next;
                }
            }
        })
        console.log(result);

    }
}

function getHash(key){
    let sum=0;
    for(let i=0;i<key.length;i++){
        sum+=key.charCodeAt(i)
    }
    return(sum%bucketSize);
}

let ob=new HashNode();
ob.insert("Becca",'becca@becca.com');
ob.insert("John",'john@john.com');
ob.insert("Jhon",'jhonn@jhon.com');
ob.insert("Becca",'becca@gmail.com');
ob.insert('Megan','megan@megan.com');

// console.log('bucket',bucket);
// ob.update("John",'john@johnmichael.com');
// console.log('bucket after updation',bucket);

ob.getAll();
