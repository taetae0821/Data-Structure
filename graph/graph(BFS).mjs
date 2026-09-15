import {Queue} from "./../Queue.mjs";

class Vertex{
    constructor(value){
        this.value = value;
        this.adjacent_vertices = [];
    }

    addAdjaecntVertex(vertex){
        this.adjacent_vertices.push(vertex);
    }

    removeAdjaecentVertex(vertex){
        for(let i = 0; i<this.addAdjaecntVertex.length; i++){
            if(this.addAdjaecntVertex[i]===vertex){
                this.addAdjaecntVertex.splice(i,1);
            }
        }
    }
}

function BFS(vertex){
    let queue = new Queue();
    let visited_vertices ={};
    
    visited_vertices[vertex.value] = true;
    queue.enqueue(vertex);

    while(queue.isEmpty()===false){
        let currentVertex = queue.dequeue().data;
        console.log(`정점 : ${currentVertex.value}`);

        for(let adjacent of currentVertex.adjacent_vertices){
            if(visited_vertices[adjacent.value] === true){
                continue;
            }else{
                visited_vertices[adjacent.value] = true;
                queue.enqueue(adjacent);
            }
        }
    }
}



let ben = new Vertex("Ben");
let jack = new Vertex("Jack");
let ivy = new Vertex("Ivy");
let elin = new Vertex("Elin");
let anna = new Vertex("Anna");
let david = new Vertex("David");
let joy = new Vertex("Joy");
let owen = new Vertex("Owen");

ben.addAdjaecntVertex(ivy);
ben.addAdjaecntVertex(jack);
ben.addAdjaecntVertex(anna);
ben.addAdjaecntVertex(david);

ivy.addAdjaecntVertex(ben);
ivy.addAdjaecntVertex(joy);

joy.addAdjaecntVertex(ivy);
joy.addAdjaecntVertex(jack);

anna.addAdjaecntVertex(ben);

david.addAdjaecntVertex(ben);
david.addAdjaecntVertex(elin);

elin.addAdjaecntVertex(david);
elin.addAdjaecntVertex(owen);

owen.addAdjaecntVertex(elin);

BFS(ben);