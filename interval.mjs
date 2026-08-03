class Job{
    constructor(jobName, startTime, endTime){
        this.jobName = jobName;
        this.startTime = startTime;
        this.endTime = endTime;
    }
}

class IntervalScheduler{
    constructor(){
        this.Jobs = [];
    }

    addJob(job){
        this.Jobs.push(job);
    }

    intervalScheduling(){
        this.Jobs.sort((a,b)=> a.endTime - b.endTime);
        //console.log(this.Jobs)
        
        let result = [];
        for(let currentJob of this.Jobs){
            if(result.length === 0){
                result.push(currentJob);
            }else if(currentJob.startTime >= result[result.length-1].endTime){
                result.push(currentJob);
            }
        }
        console.log(result);
    }
    
}

let a = new Job("A", 0 , 6);
let b = new Job("B", 1 , 4);
let c = new Job("C", 3 , 6);
let d = new Job("D", 3 , 8);
let e = new Job("E", 4 , 7);
let f = new Job("F", 5, 9);
let g = new Job("G", 6 , 10);
let h = new Job("H", 8 , 11);

let intervalScheduler = new IntervalScheduler();
intervalScheduler.addJob(a);
intervalScheduler.addJob(b);
intervalScheduler.addJob(c);
intervalScheduler.addJob(d);
intervalScheduler.addJob(e);
intervalScheduler.addJob(f);
intervalScheduler.addJob(g);
intervalScheduler.addJob(h);

intervalScheduler.intervalScheduling();