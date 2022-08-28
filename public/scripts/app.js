let RedirectProjects = document.querySelector('#RedirectProjects').addEventListener('click', () =>
{
    let projectsContainer = document.querySelector('#projectsContainer').offsetTop;
    window.scroll(0, projectsContainer)

});