class Problem {
    constructor() {
        this.args = new URLSearchParams(window.location.search);
        document.getElementById('content').src = `/problems/${this.args.get('id')}`
    }
    resize() {
        const obj = document.getElementById('content');
        obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
    }
}

window.addEventListener('load', () => {
    window.problem = new Problem();
})