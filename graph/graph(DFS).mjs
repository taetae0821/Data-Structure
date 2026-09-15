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

function DFS(vertex, visited_vertices = {}){
    visited_vertices[vertex.value] = true; //사이클 형성안되기 위해서
    console.log(`정점 : ${vertex.value}`);
    for(let adjacent of vertex.adjacent_vertices){
        if(visited_vertices[adjacent.value]===true){
            continue;
        }else{
            DFS(adjacent,visited_vertices);
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

DFS(ben);