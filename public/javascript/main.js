

let currentIdx = 0

//CACHED ELEMENTS Getting Main and getting number of children representing number of cocktails
const cocktailBin = document.querySelector("main")
const cocktailCount = cocktailBin.children.length



let array = []

let arrayIndexes = []




init()


//make all classes hidden

//creates an array of indexs picked at random. with length of cocktailCount
function init() {
  for (i = 0; i < cocktailCount; i++) {
    arrayIndexes.push(i)
  }
  console.log(arrayIndexes)

  while (arrayIndexes.length > 0) {
    //!selects random index
    let num = Math.floor(Math.random() * arrayIndexes.length)
    //!pushes that value into array
    array.push(arrayIndexes[num])
    //!Delete that index from arrayIndex
    arrayIndexes.splice(num, 1)
  }
  //! result is an array of same length as #cocktails with random index numbers
  console.log(array)

  //!Making sure all cocktails are hidden except for index[0] from array
  array.forEach((div, idx) => {
    const element = document.querySelector(`#cocktail_0${idx}`)
    if (idx === array[0]) {
      element.className = "wrapper"
    }
  })

}