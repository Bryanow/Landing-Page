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


//About me function
document.querySelectorAll('.buttons-grid button').forEach(button =>  {
    button.addEventListener('click', function() {
        sections.forEach(section => section.classList.remove ('selected'));
        buttonToSectionMap[button.id].classList.add('selected');
    });
});

//timeline function
document.querySelectorAll(".timeline-event").forEach(event => {
    event.addEventListener("click", function () {
        // Remove a classe "active" de todas as bolinhas
        document.querySelectorAll(".timeline-event").forEach(e => e.classList.remove("active"));
        this.classList.add("active"); // Adiciona "active" na bolinha clicada

        // Esconde todas as sections
        document.querySelectorAll(".timeline-section").forEach(section => section.classList.remove("clicked"));

        // Exibe apenas a section correspondente
        const targetId = this.getAttribute("data-target");
        document.getElementById(targetId).classList.add("clicked");
    });
});