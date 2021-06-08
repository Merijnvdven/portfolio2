let data = [

    {
        naam: 'johan',
        leeftijd: '30'
    },
    {
        naam: 'kees',
        leeftijd: '35'
    },
    {
        naam: 'ferry',
        leeftijd: '24'
    },
    {
        naam: 'tim',
        leeftijd: '18'
    },
    {
        naam: 'bas',
        leeftijd: '25'
    },
    {
        naam: 'sem',
        leeftijd: '23'
    }
];

const info = document.querySelector('#info');

let details = data.map(function(item) {
    return '<div>'+ item.naam + ' ' + 'is ' + item.leeftijd + ' jaar oud' + '</div>'


});


info.innerHTML = details.join('\n');