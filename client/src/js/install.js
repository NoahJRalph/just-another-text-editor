const butInstall = document.getElementById('buttonInstall');
// Most code for the following section was pulled from edX Web Development Bootcamp Module 19 Activity 28.
// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return
    }
    promptEvent.prompt();
    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
});
window.addEventListener('appinstalled', (event) => {
    console.log(`PWA installed successfully.`)
    window.deferredPrompt = null;
});
