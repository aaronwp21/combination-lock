export function add(){
  return Array.from(arguments).reduce((total, next) => total + next, 0);
}

export function ave(){
  const arr = Array.from(arguments);
  const total = arr.reduce((total, next) => total + next, 0);
  const numberOfItems = arr.length;
  return total / numberOfItems;
}