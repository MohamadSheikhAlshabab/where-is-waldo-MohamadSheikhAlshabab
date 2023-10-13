const example = [
  ["A", "A", "A"],
  ["A", "A", "A"],
  ["A", "B", "A"]
];

const whereIsWaldo = (matrix) => {
  const result = [];
  let initValue , waldoIs = '';
  
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){

      if(matrix[0][0] === matrix[0][1] && matrix[0][0] === matrix[1][0]){
        initValue = matrix[0][0];
      }else if (matrix[0][1] === matrix[1][0]){
        initValue = matrix[0][1];
      }

      if (initValue !== matrix[i][j]){
        initValue = matrix[i][j];
        waldoIs = initValue;
        result.push(+i+1,+j+1);
      }
    }
  }
  return `Waldo is ${waldoIs}, his locaction is [${result}]`;
}

console.log(whereIsWaldo(example));
console.log(whereIsWaldo([
  ["c", "c", "c", "c"],
  ["c", "c", "c", "d"]
]));

console.log(whereIsWaldo([
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "P", "O"]
]));