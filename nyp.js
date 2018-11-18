const classAttributes = "nytc---modal-window---windowContainer nytc---modal-window---isShown nytc---shared---whiteBG";

function findModal(attrs) {
    return document.getElementsByClassName(attrs)[0];
}

findModal(classAttributes).remove();
