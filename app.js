// let hello = 'Hello World';
// alert(hello);

// IF文の文法
// let orange = 100;
// let apple = 120;

// if(orange < apple){
//   alert('みかんの値段がりんごより安い');
// } else if(orange == apple){
//   alert('みかんとりんごが同じ値段');
// } else{
//   alert('みかんの値段がりんごより高い');
// }

// while文の文法
let max = 100;
let num = 1;
let count = 0;

while(num < max){
  num = num * 2;
  count = count + 1;
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

// 最初の１回だけはtrue、falseに関係なく判定される
// do{
//   最低1回は行われる処理
// }while(条件式);

// For文　繰り返す回数が決まっている場合
let i;
let num = 0;

for(i = 1; i < 11; i++){
  num = num + i;
}

alert('1から10まで足し算した結果は' + num + 'です');