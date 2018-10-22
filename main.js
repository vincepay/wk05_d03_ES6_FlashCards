let $createCard = $("#createCard")
let $cardColumns = $(".card-columns")
let $flipCardBtns = []


const createCard = (e) => {
  let frontText = $("#frontText").val()
  let backText = $("#backText").val()
  let btn = '<button class="btn btn-primary flip-card">Flip Card</button>'
  let newCard = 

  `
    <div class="card text-center" style="width: 18rem;">
      <div class="card-body">
      <p class="card-text">${frontText}</p>
      <p class="card-text hidden">${backText}</p>
      ${btn}
      </div>
    </div>
    `
  $cardColumns.append(newCard)
  $flipCardBtns.push(btn)
  newBtn($flipCardBtns)
  console.log($(btn))
}

const newBtn = (btns) => {
  console.log(btns)
  for (btn in btns){
    console.log(btn)
    $(btn).click( () =>{
      console.log("click")
    })
  }
}

const flipCard = (e) => {
  console.log(e)
}

$($createCard).click( () => {
  createCard(event)
})

$($flipCardBtns).each( () => {
  console.log("in loop")
  $(this).click(function(){
    alert("cliked")
    flipCard(event)
  })
})

console.log($createCard)