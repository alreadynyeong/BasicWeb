travel = ["Singapore", "Osaka", "Guam"];
console.log(travel[1]);
travel.push("Jeju");
console.log("push",travel);
travel.unshift("Hanoi");
console.log("unshift",travel);
travel.pop();
console.log("pop",travel);
travel.shift();
console.log("shift",travel);
console.log("splice", travel.splice(2,1))