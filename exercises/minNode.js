//to find smallest and the largest node in BST
class Node{
    constructor(data,left=null,right=null){
        this.data=data;
        this.left=left;
        this.right=right;
    }
}

let nodeQueue=[];
class BST{
    constructor(){
        this.root=null
    }

    add(data){
        let node=this.root;
        if(node===null){
            this.root=new Node(data);
        }
        else{
            searchTree(node,data);
            //console.log(node);
        }
    }

    smallestNode(){
        let node=this.root;
        traverseLeftLeaf(node)
    }

    largestNode(){
        let node=this.root;
        traverseRightLeaf(node)
    }

}

function searchTree(node,data){
    if(data<node.data){
        if(node.left===null){
            node.left=new Node(data);
        }
        else{
            searchTree(node.left,data)
        }

    }
    else{
        if(node.right===null){
            node.right=new Node(data);
        }
        else{
            searchTree(node.right,data)
        }
    }
}

let minlevel=0;
let maxlevel=0;
let min=0;let max=0;
function traverseLeftLeaf(node){
    if(node!=null){
        minlevel++;
        min=node.data;
        traverseLeftLeaf(node.left);
    }
}

function traverseRightLeaf(node){
    if(node!=null){
        maxlevel++;
        max=node.data
        traverseRightLeaf(node.right);
    }
}



//let arr=[8,3,1,6,4,7,10,14,13];
//let arr=[20,22,8,4,12,10,14]
let arr=[5,2,12,1,3,9,21,19,25]
let ob1=new BST();

for(let i=0;i<arr.length;i++){
    ob1.add(arr[i]);
}


ob1.smallestNode();
ob1.largestNode();
console.log(min,'in level',minlevel);
console.log(max,'in level',maxlevel);
