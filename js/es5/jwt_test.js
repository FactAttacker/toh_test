let jwt = "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIyOCIsImlhdCI6MTUxOTk5NjkxOCwic3ViIjoiIiwiaXNzIjoibGVlQHRlc3QyLmNvbSIsImV4cCI6MTUyMDA4MzMxOH0.1Dh-jaeEEoFNCIgUVm9KdGnL8tYMpd536mqZBgS90Z0";

console.log(jwt.split('.')[1]);

let decodeStr = atob(jwt.split('.')[1]);

console.log(atob(jwt.split('.')[1]));
