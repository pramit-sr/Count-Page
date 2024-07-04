const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const count = document.querySelector('.count');
const changeby = document.querySelector('.changeby');
const reset = document.querySelector('.reset');

plus.addEventListener('click' , () => {
    console.log("Plus clicked");
    const countvar = parseInt(count.innerText);
    const no = parseInt(changeby.value);
    count.innerText = countvar+no;

})
minus.addEventListener('click' , () => {
    console.log("Minus clicked");
    const countvar = parseInt(count.innerText);
    const no = parseInt(changeby.value);
    count.innerText = countvar-no;
})
reset.addEventListener  ('click' ,() => {
    count.innerText = 0;
})