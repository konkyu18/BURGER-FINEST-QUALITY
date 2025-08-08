// メニュー
const menu = document.querySelector('#menu');
 const lists = [
    {
        name: 'よくばりハンバーガー',
        img:'よくばりハンバーガー.jpg',
        price: 1000,
    },
    {
        name: 'ダブルチーズハンバーガー',
        img:'ダブルチーズハンバーガー.jpg',
        price: 600,
    },
    {
        name: 'てりやきハンバーガ－',
        img:'てりやきハンバーガ－.jpg',
        price: 600,
    },
    {
        name: 'ハンバーガー',
        img:'ハンバーガー.jpg',
        price: 400,
    }, 
    {
        name: 'チーズハンバーガー',
        img:'チーズハンバーガー.jpg',
        price: 500,
    },
    {
        name: 'ヘルシーハンバーガー',
        img:'ヘルシーハンバーガー.jpg',
        price: 500,
    },
    {
        name: 'ポテト',
        img:'ポテト.jpg',
        price: 300,
     },
     {
        name: 'コーラ',
        img:'コーラ.jpg',
        price: 150,
     },
     {
        name: 'サラダ',
        img:'サラダ.jpg',
         price: 300,
     }, 
 ];

 for(let i= 0; i < lists.length; i++){
    const{name, img, price} = lists[i];
    const content =`<div><img src="img/${img}" alt=""><h2>${name}</h2><p>${price}円</p></div>`;
    menu.insertAdjacentHTML('beforeend', content);
 }