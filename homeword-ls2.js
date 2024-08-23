// Bài 10
const employees10 = [
    { id: 1, name: "John", workingDays: 22, lateDays: 2, salary: 2000 },
    { id: 2, name: "Jane", workingDays: 25, lateDays: 0, salary: 2500 },
    { id: 3, name: "Mark", workingDays: 20, lateDays: 1, salary: 3000 },
];
const highest =  Math.max(...employees10.map(productivity => productivity.workingDays / productivity.salary));
const efficiency = employees10.filter((productivity)=> productivity.workingDays / productivity.salary === highest)
console.log(efficiency)
//Bài 11
const employeesDay = [
    { id: 1, name: "John", workingDays: 20 },
    { id: 2, name: "Jane", workingDays: 22 },
    { id: 3, name: "Mark", workingDays: 20 },
    { id: 4, name: "Sam", workingDays: 24 },
    { id: 5, name: "Lucy", workingDays: 22 },
];
const histogram1 = employeesDay.filter((people) => people.workingDays ===22)
console.log(histogram1)
const histogram2 = employeesDay.filter((people) => people.workingDays ===20)
console.log(histogram2)
const histogram3 = employeesDay.filter((people) => people.workingDays ===24)
console.log(histogram3)
//Bài 12
const employeesDelay = [
  {
    id: 1,
    name: "John",
    email: "john@example.com",
    workingDays: 22,
    lateDays: 2,
    salary: 2000,
  },
  {
    id: 2,
    name: "Jane",
    email: "jane@example.com",
    workingDays: 20,
    lateDays: 0,
    salary: 2500,
  },
  {
    id: 3,
    name: "Mark",
    email: "mark@example.com",
    workingDays: 25,
    lateDays: 1,
    salary: 3000,
  },
];
const delay = employeesDelay.map((goToWorkLate) => ({
  name: goToWorkLate.name,
  email: goToWorkLate.email,
  workInfo: {
    workingDays: goToWorkLate.workingDays,
    lateDays: goToWorkLate.lateDays,
  },
}));
console.log(delay);
//Bài 13
let tasks = [ 
    { name: "Hoàn thành bài tập JavaScript", description: "Làm xong bài tập về Array và Object", completed: false },
    { name: "Đọc sách", description: "Đọc xong chương 3", completed: true },
    { name: "Đi mua hàng", description: "Mua thêm thức ăn cho tuần", completed: false }
];
//1
// tasks.unshift({ name: "chơi game", description: "lên Cao thủ", completed: true });
// console.log(tasks)
let newTasks = [{ name: "chơi game", description: "lên Cao thủ", completed: true }, ...tasks];
console.log(newTasks);
//2
const complete = newTasks.filter(task => task.completed ===true);
console.log(complete);
//3
newTasks.sort((a, b) => a.name.localeCompare(b.name));
console.log(newTasks);

newTasks.sort((a, b) => b.name.localeCompare(a.name));
console.log(newTasks);