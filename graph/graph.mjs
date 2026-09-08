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

let jake = new Vertex("Jake");
let ben = new Vertex("Ben");
let joy = new Vertex("Joy");
let ivy = new Vertex("Ivy");
let elin = new Vertex("Elin");
let anna = new Vertex("Anna");
let david = new Vertex("David");

jake.addAdjaecntVertex(ben);
ben.addAdjaecntVertex(jake);
joy.addAdjaecntVertex(ben);
joy.addAdjaecntVertex(ivy);
ivy.addAdjaecntVertex(ben);
ivy.addAdjaecntVertex(joy);
elin.addAdjaecntVertex(ben);
elin.addAdjaecntVertex(anna);
anna.addAdjaecntVertex(ben);
anna.addAdjaecntVertex(david);
anna.addAdjaecntVertex(elin);
david.addAdjaecntVertex(anna);

console.log(anna.adjacent_vertices);
console.log(anna.adjacent_vertices);