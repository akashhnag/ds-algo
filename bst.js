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

    preOrder(){
        let node=this.root;
        traversePreOrder(node);
    }

    postOrder(){
        let node=this.root;
        traversePostOrder(node);
    }

    levelOrder(){
        let node=this.root;
        if(node.left!=null && node.right!=null)
        {
            console.log(node.data);        
            nodeQueue.push(node.left);
            nodeQueue.push(node.right);
        }            
        traverselevelOrder(nodeQueue);
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

function traversePreOrder(node){
    if(node!=null){
        console.log(node.data);
        traverseInOrder(node.left);
        traverseInOrder(node.right);
    }
}

function traversePostOrder(node){
    if(node!=null){
        traverseInOrder(node.left);
        traverseInOrder(node.right);
        console.log(node.data);
    }
}


function traverselevelOrder(node)
{
    while(nodeQueue.length>0){        
        if(node[0].left!=null && node[0].right!=null)
        {
            console.log(node[0].data);        
            nodeQueue.push(node[0].left);
            nodeQueue.push(node[0].right);
        }
        else if(node[0].left!=null)
        {
            console.log(node[0].data);        
            nodeQueue.push(node[0].left);   
        }
        else if(node[0].right!=null)
        {
            console.log(node[0].data);        
            nodeQueue.push(node[0].right);   
        }
        else{
            console.log(node[0].data);            
        }
         nodeQueue.splice(0,1); 
    }
    
    
    // console.log('before',nodeQueue);
   
    //console.log('after',nodeQueue[0]);
    
}

let arr=[8,3,1,6,4,7,10,14,13];
let ob1=new BST();

for(let i=0;i<arr.length;i++){
    ob1.add(arr[i]);
}

//ob1.isPresent(10)
// console.log('Inorder');
// ob1.inOrder();
// console.log('preorder');
// ob1.preOrder();
// console.log('postorder');
// ob1.postOrder();

ob1.levelOrder();