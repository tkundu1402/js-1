const billInput = document.getElementById('billTotalinput')
const numberOfPeopleDiv =  document.getElementById('numberOfPeople')
const tipInput = document.getElementById('tipInput')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

let numberOfPeople = Number(numberOfPeopleDiv.innerText)

const calculateBill =(() =>{
    const bill = Number(billInput.value)
    const tipPercent = Number(tipInput.value)/100
    const tipAmount  = bill * tipPercent
    const total = tipAmount + bill
    const perPersonTotal = total / numberOfPeople
    perPersonTotalDiv.innerText = '{perPersonTotal.toFixed(2)}'
})
const increasesPeople = (() => {
numberOfPeople +- 1
numberOfPeopleDiv.innerText = numberOfPeople
calculateBill
})
const decreasesPeople  = (() =>{
    if (numberOfPeople <= 1) {
        return
    }
})
