let array = new Array(7).fill(null)


init()
//cached element references

//make all classes hidden

function init(){
//pick a random cocktail
let num = Math.floor(Math.random() * array.length)
console.log(num)
  //Make each cocktail card hidden
array.forEach((div,idx)=>{
const element = document.querySelector(`#cocktail_0${idx}`)
if(idx === num){
  element.className = "wrapper"
}
})
//pick a random cocktail


}