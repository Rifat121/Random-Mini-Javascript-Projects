let data =[
    {
        name:'Tamim Iqbal',
        type: 'Opener'
    },
    {
        name:'Imrul Kayes',
        type: 'Opener'
    },
    {
        name:'Shakib Al Hasan',
        type: 'All-rounder'
    },
    {
        name:'Afif Hossain',
        type: 'All-rounder'
    },
    {
        name:'Mahmudullah Riyad',
        type: 'All-rounder'
    },
    {
        name:'Taskin Ahmed',
        type: 'Bowler'
    },
    {
        name:'Nasum Ahmed',
        type: 'Bowler'
    },
];

const info = document.querySelector('#info')

let details = data.map(function(item) {
    return '<div>' + item.name + ' - ' + item.type + '</div>';
});
console.log(details)
info.innerHTML = details.join('\n');