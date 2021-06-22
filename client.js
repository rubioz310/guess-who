console.log('Here are all the available people:', people);
$(readyNow);

function readyNow(){
    updateName();
    showPictures();
    $('#gameSection').on('click', 'img', function(){
        guessWho($(this));
    })
    $('#messagePopup').slideUp();
}

function showPictures(){
    let alreadyUsed=[];
    let index = 0;
    //Shows  all pictures in random order
    while (index < people.length) {
        let randomPerson = people[randomNumber(0, people.length - 1)];//Get a random person from original array
        //This checks if the random person is already shown, if so it will pick another one
        // until it finds one that is not and it will add it to that array
        if(!alreadyUsed.includes(randomPerson)){
            $('#gameSection').append(
                `<img src="https://github.com/${randomPerson.githubUsername}.png?size=250" alt="Profile image of Chris" data-name=${randomPerson.name}>`
            );
            alreadyUsed.push(randomPerson);
            index++;//Being inside the if secures that it will show all pictures
        }
    }
    //This shows all pictures in order of array
    // for (const person of people) {
    //     $('#gameSection').append(`
    //     <img src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of Chris" data-name=${person.name}>
    //     `);
    // }
}

//Shows alert if you pick the right alert or not
function guessWho(clickedName){
    if( clickedName.data('name') == $('#personName').data('name')){
        // alert('You got that right, awesome!. Play again');
        rightAnswer(clickedName);
    }else{
        wrongAnswer(clickedName);
    }
}
//On right answer img background turns green and updates name on the DOM
function rightAnswer(clickedName){
    clickedName.toggleClass('green');
    $('#messagePopup').text("Great job. Let's play again"); 
    $('#messagePopup').slideDown();  
    setTimeout(() => {
        clickedName.toggleClass('green'); 
        updateName();
        $('#messagePopup').slideUp();  
    }, 2.0*1000);
}
//On wrong answer img background turns red
function wrongAnswer(clickedName){
    clickedName.toggleClass('red');
    $('#messagePopup').text('Oops! Keep trying.');  
    $('#messagePopup').slideDown();  
    setTimeout(() => {
        clickedName.toggleClass('red');
        $('#messagePopup').slideUp();  
    }, 2.0*1000);
}

//Picks a new random person to find in the pictures
function updateName(){
    let randomName = people[randomNumber(0, people.length - 1)];
    $('#personName').text(`Guess who is: ${randomName.name}`);
    $('#personName').data('name', `${randomName.name}`);
}

//R.N.G'sus(Random Number Generator suplier....s)
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}