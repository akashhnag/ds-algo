let am=[[0,1,0,0,1],[1,0,1,1,1],[0,1,0,1,0],[0,1,1,0,1],[1,1,0,1,0]];
let g=[0,1,2,3,4];
let visited=[];
let adjacentNodes=[];
adjacentNodes.push(g[0]);
let c=0;
while(adjacentNodes.length!=0){
    explore()
    adjacentNodes.splice(0,1);
    visited.push(g[c]);
    ++c;
}

console.log(visited);


function explore(){
    for(let i=0;i<am.length;i++){
        console.log(c);

        if(am[c][i]===1){
            if(!checkVisited(g[i])){
                adjacentNodes.push(g[i])
            }

        }
    }
}

function checkVisited(node){
    if(visited.length===0){
        return false
    }
    else{
        for(let i=0;i<=visited.length;i++){
            if(node===visited[i]){
                return(true);
            }
            else{
                return(false)
            }
        }
    }

}
