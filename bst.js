class Node{
    constructor(data,left=null,right=null){
        this.data=data;
        this.left=left;
        this.right=right;
    }
}

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
            console.log(node);

        }
    }

    isPresent(value){
        let node=this.root
        if(value===this.root.data){
            console.log('present at root');
        }
        else{
           searchValue(node,value)
        }
    }

    inOrder(){
        let node=this.root;
        traverseInOrder(node);
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

let level=1;
function searchValue(node,value){
    if(value>node.data){
        if(node.right!=null){
            level++;
            searchValue(node.right,value);

        }
        else{
            console.log(value,'not present');
        }

    }
    else if(value<node.data){
        if(node.left!=null){
            level++;
            searchValue(node.left,value);

        }
        else{
            console.log(value,'not present');
        }

    }
    else if(value===node.data){
        console.log(node.data,'present at level',level);

    }

}

function traverseInOrder(node){
    if(node!=null){
        traverseInOrder(node.left);
        console.log(node.data);
        traverseInOrder(node.right);
    }
}




let arr=[8,3,1,6,4,7,10,14,13];
let ob1=new BST();

for(let i=0;i<arr.length;i++){
    ob1.add(arr[i]);
}

//ob1.isPresent(10)
ob1.inOrder()
