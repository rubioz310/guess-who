console.log('Here are all the available people:', people);
$(readyNow);
function readyNow(){
    updateName();
    showPictures();
    $('#gameSection').on('click', 'img', function(){
        showName($(this).data('name'));
    })
}

function showPictures(){
    for (const person of people) {
        $('#gameSection').append(`
        <img src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of Chris" data-name=${person.name}>
        `);
    }
}

function showName(name){
    console.log(name);
}

function updateName(){
    let randomName = people[randomNumber(0, people.length - 1)];
    $('#personName').text(`Click on: ${randomName.name}`);
}



function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}