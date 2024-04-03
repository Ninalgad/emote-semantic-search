function clearAll() {
    while (imgItems.firstChild) {
        imgItems.removeChild(imgItems.firstChild);
    }
    while (txtItems.firstChild) {
        txtItems.removeChild(txtItems.firstChild);
    }
}

function fetchSearch() {
    var query = document.getElementById("query").value;
    var imgItems = document.getElementById("imgItems");
    var txtItems = document.getElementById("txtItems");
    clearAll();

    const apiUrl = '/search/' + query;
    d3.json(apiUrl).then(function(data) {
        console.log(data.result);

        const imgData = data.result[0].img;
        const txtData = data.result[0].txt;

        appendItems(imgData, imgItems);
        appendItems(txtData, txtItems);
    });
}

function appendItems(data, container) {
    for (const item of data) {
        const entry = document.createElement('li');
        const imgElement = document.createElement('img');
        imgElement.src = item.href;
        imgElement.width = "50";
        imgElement.height = "50";

        entry.appendChild(imgElement);
        container.appendChild(entry);
    }
}
