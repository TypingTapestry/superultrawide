var icon = document.getElementById('icon');

if (localStorage.getItem('theme') == null) {
    localStorage.setItem('theme', 'light');
};

let localData = localStorage.getItem('theme');

if (localData == 'light') {
    icon.src = 'images/sunset.svg';
    document.body.classList.remove('darkTheme');
} else if (localData == 'dark') {
    icon.src = 'images/sunrise.svg';
    document.body.classList.add('darkTheme');
};

icon.onclick = function() {
    document.body.classList.toggle('darkTheme');
    if (document.body.classList.contains('darkTheme')) {
        icon.src = 'images/sunrise.svg';
        localStorage.setItem('theme', 'dark');
    } else {
        icon.src = 'images/sunset.svg';
        localStorage.setItem('theme', 'light');
    };
};