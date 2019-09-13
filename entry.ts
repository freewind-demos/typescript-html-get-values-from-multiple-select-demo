const mySelect = document.getElementById('my-select') as HTMLSelectElement;
const myButton = document.getElementById('my-button') as HTMLButtonElement;

myButton.onclick = () => {
  console.log('selected values', Array.from(mySelect.selectedOptions).map(it => it.value))
  console.log('value', mySelect.value);
}
