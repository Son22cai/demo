const toggleSwitch = document.getElementById("toggle-switch");
const  nutdep = document.getElementById('nutdep');
toggleSwitch.addEventListener('change', function() {
    console.log(this)
    if (this.checked) {
        nutdep.style.backgroundColor = 'blue';
        nutdep.style.color = 'white';
    } else {
        nutdep.style.backgroundColor = '#ff6347';
        nutdep.style.color = 'black';
    }
});