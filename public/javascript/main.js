
//Variables
let currentIdx = 0
let array = []
let arrayIndexes = []

//CACHED ELEMENTS Getting Main and getting number of children representing number of cocktails
const cocktailBin = document.querySelector("main")
const cocktailCount = cocktailBin.children.length - 1
const nextButton = document.getElementById("next-flashcard")
const refreshBtn = document.getElementById("refresh")

//Event Listeners
nextButton.addEventListener('click',(evt)=>{
  
  console.log(currentIdx)
  console.log(cocktailCount)
  
  if(currentIdx < cocktailCount){
    currentIdx++
    render()
  }else if(currentIdx === cocktailCount){
    nextButton.className = "hidden"
    refreshBtn.className = "show"
  }
  
})



//Functions
init()



function init() {
  for (i = 0; i < cocktailCount; i++) {
    arrayIndexes.push(i)
  }
  while (arrayIndexes.length > 0) {
    //!selects random index
    let num = Math.floor(Math.random() * arrayIndexes.length)
    //!pushes that value into array
    array.push(arrayIndexes[num])
    //!Delete that index from arrayIndex
    arrayIndexes.splice(num, 1)
  }
  //! result is an array of same length as #cocktails with random index numbers
render()

}

function render(){
  //?Making sure all cocktails are hidden except for index[currentIDX] from array
  array.forEach((div, idx) => {
    const element = document.querySelector(`#cocktail_0${idx}`)
    if (idx === array[currentIdx]) {
      element.className = "wrapper"
    }
    else{
      element.className = "hidden"
    }
  })
}