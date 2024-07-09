

if (window.location.pathname === '/home') {
    window.location.replace('/home.html');
} else if (window.location.pathname === '/home.html') {
    history.pushState({ foo: 'fake' }, 'Fake Url', 'home');
}

if (window.location.pathname === '/contact') {
    window.location.replace('/contact.html');
} else if (window.location.pathname === '/contact.html') {
    history.pushState({ foo: 'fake' }, 'Fake Url', 'contact');
}

if (window.location.pathname === '/3D') {
    window.location.replace('/3dprojects.html');
} else if (window.location.pathname === '/3dprojects.html') {
    history.pushState({ foo: 'fake' }, 'Fake Url', '3D');
}

if (window.location.pathname === '/2D') {
    window.location.replace('/designprojects.html');
} else if (window.location.pathname === '/designprojects.html') {
    history.pushState({ foo: 'fake' }, 'Fake Url', '2D');
}
