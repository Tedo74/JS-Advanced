function extractText() {
    let content = Array.from($('#items li'))
        .map(e => {
            return $(e).text();
        })
        .join(', ');
    let result = $('#result').text(content);
}