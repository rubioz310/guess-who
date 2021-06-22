console.log('Here are all the available people:', people);
$(readyNow);
function readyNow(){
    updateName();
    showPictures();
    $('#gameSection').on('click', 'img', function(){
        guessWho($(this).data('name'));
    })
}

function showPictures(){
    let alreadyUsed=[];
    let index = 0;
    //Shows  all pictures in random order
    while (index < people.length) {
        let randomPerson = people[randomNumber(0, people.length - 1)];
        if(!alreadyUsed.includes(randomPerson)){
            $('#gameSection').append(
                `<img src="https://github.com/${randomPerson.githubUsername}.png?size=250" alt="Profile image of Chris" data-name=${randomPerson.name}>`
            );
            alreadyUsed.push(randomPerson);
            index++;
        }
    }
    //This shows all pictures in order of array
    // for (const person of people) {
    //     $('#gameSection').append(`
    //     <img src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of Chris" data-name=${person.name}>
    //     `);
    // }
}

function guessWho(clickedName){
    if( clickedName == $('#personName').data('name')){
        alert('You got that right, awesome!. Play again');
        updateName();
    }else(
        alert('Oops! Wrong one. Try again')
    )
}

function updateName(){
    let randomName = people[randomNumber(0, people.length - 1)];
    $('#personName').text(`Click on: ${randomName.name}`);
    $('#personName').data('name', `${randomName.name}`);
}



function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}