var day;
(function (day) {
    day[day["mod"] = 5] = "mod";
    day[day["tue"] = 6] = "tue";
    day[day["wed"] = 7] = "wed";
    day[day["thur"] = 1] = "thur";
})(day || (day = {}));
var dir;
(function (dir) {
    dir["up"] = "up";
    dir["top"] = "top";
    dir[dir["success"] = 100] = "success";
})(dir || (dir = {}));
console.log(day.thur);
console.log(dir.top + dir.success);
