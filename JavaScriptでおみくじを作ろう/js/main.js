'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () =>{
    // const result = ['大吉', '中吉', '凶','末吉']
    // const result = ['大吉', '大吉', '凶','大吉']
    // const n = Math.floor(Math.random() * result.length)
    // btn.textContent = result[n];
    const n = Math.random();
    if(n<0.05){
      btn.textContent = '大吉';
    }else if(n<0.2){
      btn.textContent = '中吉';
    }else{
      btn.textContent = '凶';
    }

  })
  btn.addEventListener('mousedown', () =>{
    btn.classList.add('pressed');
  })
  btn.addEventListener('mouseup', () =>{
    btn.classList.remove('pressed');
  })
}
