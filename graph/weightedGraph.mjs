class WeightedGaphVertex{
    constructor(value){
        this.value = value;
        this.adjacent_vertices = {};
    }

    addAdjacentVertex(vertex,weight){
        this.adjacent_vertices[vertex.value] = weight;
    }

    removeAdjacentVertex(vertex){
        delete this.adjacent_vertices[vertex.value];
    }
}

let seoul = new WeightedGaphVertex("서울");
let ownju = new WeightedGaphVertex("원주");
let grangneug = new WeightedGaphVertex("강릉");
let daejeon = new WeightedGaphVertex("대전");
let jeonju = new WeightedGaphVertex("전주");
let daegu = new WeightedGaphVertex("대구");

seoul.addAdjacentVertex(ownju,87);
seoul.addAdjacentVertex(grangneug,165);
seoul.addAdjacentVertex(daejeon,140);
seoul.addAdjacentVertex(jeonju,187);
console.log(seoul.adjacent_vertices);