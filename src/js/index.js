const btnWhoAmI = document.getElementById('who-am-i')
const btnMyHistory = document.getElementById('my-history')
const btnMyObjective = document.getElementById('my-objective')
const btnWhatIDo = document.getElementById('what-i-do')

const sections = document.querySelectorAll('.item-list')

const buttonToSectionMap = {
    "who-am-i": sections[0],
    "my-history": sections[1],
    "my-objective": sections[2],
    "what-i-do": sections[3]
};

document.querySelectorAll('.buttons-grid button').forEach(button =>  {
    button.addEventListener('click', function() {
        sections.forEach(section => section.classList.remove ('selected'));
        buttonToSectionMap[button.id].classList.add('selected');
    });
});