document.querySelector('input[name=mode]').addEventListener('change', function() {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    }, 1000);
    document.documentElement.setAttribute('data-theme', this.checked ? 'dark' : 'light');
});