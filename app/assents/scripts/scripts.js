window.addEventListener('mousemove', (event) =>
{

    let cursorX = event.pageX;
    let cursorY = event.pageY;

    let cursor = document.querySelector('#cursor');
    
    cursor.style.marginLeft = cursorX + 'px';
    cursor.style.marginTop = cursorY + 'px';

    

});