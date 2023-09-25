const addnote = document.getElementById("btn");

const updatedata = () => {
    const textdata = document.querySelectorAll("textarea");
    const notes = [];

    textdata.forEach((note) => {
        return notes.push(note.value);


    });
    localStorage.setItem('notes', JSON.stringify(notes));
}

const addNote = (text = "") => {

    const note = document.createElement('div')
    note.classList.add('note')


    const htmldata = `
                <div class="operation">
                    <button class="edit" type="button"><i class="fas fa-edit"></i></button>
                    <button class = "delete" type="button"><i class="fas fa-trash-alt"></i></button>
                </div>
                    <div class="main ${text ? "" : "hidden"}"></div>
                    <textarea class="${text ? "hidden" : ""}"></textarea>`;

    note.insertAdjacentHTML("afterbegin", htmldata)


    document.body.appendChild(note)


    const editbutton = note.querySelector(".edit");
    const delbutton = note.querySelector(".delete");
    const maindiv = note.querySelector(".main");
    const textarea = note.querySelector("textarea");


    delbutton.addEventListener("click", () => {
        note.remove();
        updatedata();
    })

    editbutton.addEventListener("click", () => {
        maindiv.classList.toggle("hidden");
        textarea.classList.toggle("hidden")
    })


    textarea.value = text;
    maindiv.innerHTML = text;


    textarea.addEventListener("change", (event) => {
        const value = event.target.value;
        maindiv.innerHTML = value;


        updatedata();
    })
}


const notes = JSON.parse(localStorage.getItem('notes'));


if (notes) {
    notes.forEach((note) => (addNote(note)))
}

addnote.addEventListener("click", () => addNote())



