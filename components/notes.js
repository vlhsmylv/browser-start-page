function getNotes() { 
    const notes = localStorage.getItem("__homepage__notes");

    return (notes !== null && notes?.length !== 0) ? notes : false;
}

function setNotes(notes) {
    localStorage.setItem("__homepage__notes", notes);
}