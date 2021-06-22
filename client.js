console.log('Here are all the available people:', people);
$(readyNow);
function readyNow(){
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

