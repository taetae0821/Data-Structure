class City{
    constructor(name){
        this.name = name;
        this.adjacent_cities = {};
    }

    addAjacentCity(city,distance){
        this.adjacent_cities[city.name] = distance;
    }

    removeAjacentCity(city){
        delete this.adjacent_cities[city.name];
    }

}

class Dijkstra{
    constructor() {
        this.all_cities = {};
    }

    registerCity(city){
        this.all_cities[city.name] = city;
    }

    shortestPath(start_city, end_city){
        let visited_cities = {};
        let unvisited_cities = {};
        let shortest_path_table = {};
        let previous_city_table = {};

        if(this.all_cities[start_city.name] === undefined){
            console.log("출발 도시가 등록되어 있지 않습니다");
            return;
        }

        for(let city_name in this.all_cities){
            unvisited_cities[city_name] = this.all_cities[city_name];
            shortest_path_table[city_name] = Infinity;
            previous_city_table[city_name] = null;
        }
        shortest_path_table[start_city.name] = 0;

        while(Object.keys(unvisited_cities).length > 0){
            let closest_city_name = null;
            for(let city_name in unvisited_cities){
                if(closest_city_name === null || shortest_path_table[city_name] < shortest_path_table[closest_city_name]){
                    closest_city_name = city_name;
                }
            }

            // 남은 도시들에 도달할 수 없는 경우
            if(shortest_path_table[closest_city_name] === Infinity){
                break;
            }

            let closest_city = unvisited_cities[closest_city_name];
            visited_cities[closest_city_name] = closest_city;
            delete unvisited_cities[closest_city_name];

            for(let adjacent_city_name in closest_city.adjacent_cities){
                if(unvisited_cities[adjacent_city_name] === undefined){
                    continue;
                }
                let distance = shortest_path_table[closest_city_name] + closest_city.adjacent_cities[adjacent_city_name];
                if(distance < shortest_path_table[adjacent_city_name]){
                    shortest_path_table[adjacent_city_name] = distance;
                    previous_city_table[adjacent_city_name] = closest_city_name;
                }
            }
        }
        console.log(shortest_path_table);

        if(shortest_path_table[end_city.name] === undefined || shortest_path_table[end_city.name] === Infinity){
            console.log(`${end_city.name}까지 가는 경로가 없습니다`);
            return;
        }

        let path = [];
        let current_city_name = end_city.name;
        while(current_city_name !== null){
            path.unshift(current_city_name);
            current_city_name = previous_city_table[current_city_name];
        }
        console.log(`${start_city.name} → ${end_city.name} 최단 경로: ${path.join(" → ")} (${shortest_path_table[end_city.name]})`);
    }
}

let seoul = new City("서울");
let wonju = new City("원주");
let gangneug = new City("강릉");
let daejeon = new City("대전");
let jeonju = new City("전주");
let daegu = new City("대구");

seoul.addAjacentCity(wonju,87);
seoul.addAjacentCity(gangneug,165);
seoul.addAjacentCity(daejeon,140);
seoul.addAjacentCity(jeonju,187);

wonju.addAjacentCity(seoul,87);
wonju.addAjacentCity(gangneug,95);
wonju.addAjacentCity(daejeon,118);
wonju.addAjacentCity(daegu,178);

gangneug.addAjacentCity(seoul,165);
gangneug.addAjacentCity(wonju,95);
gangneug.addAjacentCity(daegu,212);

daejeon.addAjacentCity(seoul,140);
daejeon.addAjacentCity(wonju,118);
daejeon.addAjacentCity(jeonju,56);
daejeon.addAjacentCity(daegu,122);

jeonju.addAjacentCity(seoul,187);
jeonju.addAjacentCity(daejeon,56);
jeonju.addAjacentCity(daegu,130);

daegu.addAjacentCity(wonju,178);
daegu.addAjacentCity(gangneug,212);
daegu.addAjacentCity(daejeon,122);
daegu.addAjacentCity(jeonju,130);


console.log(seoul);

let dijkstra = new Dijkstra();
dijkstra.registerCity(seoul)
dijkstra.registerCity(wonju)
dijkstra.registerCity(gangneug)
dijkstra.registerCity(daejeon)
dijkstra.registerCity(jeonju)
dijkstra.registerCity(daegu)

dijkstra.shortestPath(seoul, daegu);