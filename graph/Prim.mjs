//수행평가 제외
class City {
  constructor(name) {
    this.name = name;
    //간선의 가중치를 넣기 위한 해쉬테이블.
    this.adjacent_cities = {};
  }

  addAdjacentCity(city, distance) {
    this.adjacent_cities[city.name] = distance;
  }

  removeAdjacentCity(city) {
    delete this.adjacent_cities[city.name];
  }
}

let seoul = new City('서울');
let wonju = new City('원주');
let gangreung = new City('강릉');
let daejeon = new City('대전');
let jeonju = new City('전주');
let daegu = new City('대구');

//간선 가중치
seoul.addAdjacentCity(wonju, 87);
seoul.addAdjacentCity(gangreung, 165);
seoul.addAdjacentCity(daejeon, 140);
seoul.addAdjacentCity(jeonju, 187);

wonju.addAdjacentCity(seoul, 87);
wonju.addAdjacentCity(gangreung, 95);
wonju.addAdjacentCity(daejeon, 118);
wonju.addAdjacentCity(daegu, 178);

gangreung.addAdjacentCity(seoul, 165);
gangreung.addAdjacentCity(wonju, 95);
gangreung.addAdjacentCity(daegu, 212);

daejeon.addAdjacentCity(seoul, 140);
daejeon.addAdjacentCity(wonju, 118);
daejeon.addAdjacentCity(jeonju, 56);
daejeon.addAdjacentCity(daegu, 122);

jeonju.addAdjacentCity(seoul, 187);
jeonju.addAdjacentCity(daejeon, 56);
jeonju.addAdjacentCity(daegu, 130);

daegu.addAdjacentCity(gangreung, 212);
daegu.addAdjacentCity(wonju, 178);
daegu.addAdjacentCity(daejeon, 122);
daegu.addAdjacentCity(jeonju, 130);

class Prim {
  constructor() {
    this.all_cities = {};
  }

  registerCity(city) {
    this.all_cities[city.name] = city;
  }

  MST(start_city) {
    console.log(this.all_cities);
    let visited_cities = {};
    let unvisited_cities = {};
    let mst_table = {};

    // 클래스 필드에 있는 all_cities 객체를 unvisited_cities로 복사 작업.
    for (let city_name in this.all_cities) {
      unvisited_cities[city_name] = this.all_cities[city_name];
    }

    // 예외처리
    if (unvisited_cities[start_city.name] === null) {
      console.log('출발 도시가 등록되어있지 않습니다.');
      return null;
    } else {
      // infinity로 초기화
      for (let city_name in unvisited_cities) {
        // shortest_path_table[city_name] = Infinity;
        mst_table[city_name] = { distance: Infinity, city: null };
      }
    }

    // 시작은 0으로 초기화
    // shortest_path_table[start_city.name] = 0;
    mst_table[start_city.name].distance = 0;
    console.log(mst_table);

    while (Object.keys(unvisited_cities).length > 0) {
      //tb에 가까운 거리 순.
      //시작 adjacent 시티 돌고 => 거리가 가까운 도시.
      let closest_city_name = null;

      for (let city_name in unvisited_cities) {
        // 첫 시점 기준으로 무한대와 0과 비교하여 closest_city_name으로 치환.
        if (
          closest_city_name === null ||
          mst_table[city_name].distance < mst_table[closest_city_name].distance
        ) {
          closest_city_name = city_name;
        }
      }

      //방문하지 않은 도시 => 방문한 도시 tb로 바꾸고.
      visited_cities[closest_city_name] = unvisited_cities[closest_city_name];
      //방문하지 안은 도시 tb에서 소멸.
      delete unvisited_cities[closest_city_name];

      //인접 도시 돌고 + 거리 더해서 계산하기(출발 도시 기준)
      for (let adjacent_city_name in visited_cities[closest_city_name]
        .adjacent_cities) {
        if (unvisited_cities[adjacent_city_name] === null) continue;

        //다익스트라와 차이점(제일 중요@@@@@@@@@@@@@@@@@)
        let distance =
          visited_cities[closest_city_name].adjacent_cities[adjacent_city_name];

        // 거리가 작은 것으로 바꾸기.
        if (mst_table[adjacent_city_name].distance > distance) {
          mst_table[adjacent_city_name].distance = distance;
          mst_table[adjacent_city_name].city =
            visited_cities[closest_city_name].name;
        }
      }
    }
    console.log(mst_table);
  }
}

let prim = new Prim();
prim.registerCity(seoul);
prim.registerCity(wonju);
prim.registerCity(gangreung);
prim.registerCity(daejeon);
prim.registerCity(jeonju);
prim.registerCity(daegu);

prim.MST(seoul);
// dijkstra.shortestPath(jeonju);