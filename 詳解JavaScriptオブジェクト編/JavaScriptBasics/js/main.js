'use strict';
{
  // const numbers=[1,2,3,8];
  // const [a,b,...rest]=numbers;
  // console.log(a);
  // console.log(b);
  // console.log(rest);

  const player = {
    name: 'taguchi',
    score: 55,
    hp: 33,
    mp: 22,
  };

  const {name, score ,...point}=player;
  console.log(name);
  console.log(score);
  console.log(point);

}
