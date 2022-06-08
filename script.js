var stat = 0;
var i = 0;
var sample = {};

const body = document.querySelector('body');
const container = document.querySelector('.container');
const books = document.querySelector('#books');

const option = document.createElement('div');
option.setAttribute('id', 'option');
option.style.width = '350px';
option.style.height = '350px';
option.style.backgroundColor = '#d9f99d';
option.style.position = 'absolute';
option.style.top = 'calc(50vh - 175px)';
option.style.left = 'calc(50vw - 175px)';

const inputTitle = document.createElement('input');
const inputAuthor = document.createElement('input');
const inputPages = document.createElement('input');
const submit = document.createElement('button');
const book = document.createElement('div');
book.setAttribute('class','book');

const inputRead = document.createElement('label');
inputRead.setAttribute('class','switch');
const checkbox = document.createElement('input');
checkbox.setAttribute('type','checkbox');
const sliderRound = document.createElement('span');
sliderRound.setAttribute('class','slider round');

const readResult = document.createElement('div');
readResult.setAttribute('id','read-result');
readResult.innerText = 'NO';
readResult.style.color = 'red';

const readStat = document.createElement('div');
readStat.setAttribute('id','read-status');
readStat.appendChild(inputRead);
readStat.appendChild(readResult);

sliderRound.addEventListener('click', () => {
    if (checkbox.checked) {
        readResult.innerText = 'NO';
        readResult.style.color = 'red';
    } else {
        readResult.innerText = 'YES';
        readResult.style.color = 'blue';
    }
});

const addBook = document.querySelector('button');

addBook.addEventListener('mouseover', () => {
    addBook.style.border = '5px solid yellow';
});

addBook.addEventListener('mouseleave', () => {
    addBook.style.border = '5px solid white';
});

inputRead.appendChild(checkbox);
inputRead.appendChild(sliderRound);

addBook.addEventListener('mousedown', () =>{
    if (stat == 0) {
        container.style.filter = 'brightness(0.7)';
        body.style.backgroundColor = '#94a3b8';
        body.appendChild(option);
        addBook.style.backgroundColor = 'yellow';
        addBook.style.border = '5px solid yellow';
        option.innerHTML += '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z" /></svg>'

        const title = document.createElement('div');
        title.innerText += 'TITLE';
        option.appendChild(title);
        option.appendChild(inputTitle);

        const author = document.createElement('div');
        author.innerText += 'AUTHOR';
        option.appendChild(author);
        option.appendChild(inputAuthor);

        const pages = document.createElement('div');
        pages.innerText += 'PAGES';
        option.appendChild(pages);
        option.appendChild(inputPages);

        const read = document.createElement('div');
        read.innerText += 'READ ?';
        option.appendChild(read);
        option.appendChild(readStat);

        submit.innerText = "ADD BOOK";
        submit.setAttribute('id','submit');

        option.appendChild(submit);
        stat = 1;
        readResult.innerText = 'NO';

        const close = document.querySelector('svg');
        close.addEventListener('click', () => {
            body.removeChild(option);
            body.style.backgroundColor = '#60a5fa';
            container.style.filter = 'brightness(1)';
            addBook.style.backgroundColor = 'white';
            addBook.style.border = '5px solid white';
            while (option.hasChildNodes()) {
                option.removeChild(option.firstChild);
            };
            inputTitle.value = "";
            inputAuthor.value = "";
            inputPages.value = "";
            checkbox.checked = false;
            stat = 0;
            readResult.innerText = 'NO';
        });
    };
});

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return (title+' By '+author);
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book.title,book.author,book.pages, book.read);
}

//const book1 = new Book ("The hobbit", "JRR Tolkien", "365", true);

//addBookToLibrary(book1);

submit.addEventListener('click', () => {
    sample[i] = new Book (inputTitle.value, inputAuthor.value, inputPages.value, checkbox.checked);
    addBookToLibrary(sample[i]);
    console.log(myLibrary);
    //console.log(sample[i].title);
    var a = sample[i].title;
    var b = sample[i].author;
    var c = sample[i].pages;

    body.removeChild(option);
    body.style.backgroundColor = '#60a5fa';
    container.style.filter = 'brightness(1)';
    addBook.style.backgroundColor = 'white';
    addBook.style.border = '5px solid white';
    while (option.hasChildNodes()) {
        option.removeChild(option.firstChild);
    };

    stat = 0;

    const book = document.createElement('div')
    book.setAttribute('class','book');
    book.setAttribute('id', 'entry'+i);

    book.innerHTML = 'TITLE:';

    const entryTitle = document.createElement('div');
    entryTitle.innerText = inputTitle.value;
    entryTitle.setAttribute('id','title'+i);
    book.appendChild(entryTitle);

    book.innerHTML += 'AUTHOR:';

    const entryAuthor = document.createElement('div');
    entryAuthor.innerText = inputAuthor.value;
    book.appendChild(entryAuthor);

    book.innerHTML += 'PAGES:';

    const entryPages = document.createElement('div');
    entryPages.innerText = inputPages.value;
    book.appendChild(entryPages);

    book.innerHTML += 'READ?';

    const entryRead = document.createElement('div');
    if (checkbox.checked == true) {
        entryRead.innerText = "Yes";
    } else {
        entryRead.innerText = "No";
    }
    book.appendChild(entryRead);

    i++;

    const edit = document.createElement('button');
    const del = document.createElement('button');

    edit.setAttribute('id', 'edit');
    edit.setAttribute('value',i)
    edit.innerText = 'EDIT'
    book.appendChild(edit);

    edit.addEventListener('mouseup', () => {
        container.style.filter = 'brightness(0.7)';
        body.style.backgroundColor = '#94a3b8';
        body.appendChild(option);
        addBook.style.backgroundColor = 'yellow';
        addBook.style.border = '5px solid yellow';
        option.innerHTML += '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z" /></svg>'

        //console.log(a);

        const title = document.createElement('div');
        title.innerText += 'TITLE';
        inputTitle.value = a;
        option.appendChild(title);
        option.appendChild(inputTitle);

        const author = document.createElement('div');
        author.innerText += 'AUTHOR';
        inputAuthor.value = b;
        option.appendChild(author);
        option.appendChild(inputAuthor);

        const pages = document.createElement('div');
        pages.innerText += 'PAGES';
        inputPages.value = c;
        option.appendChild(pages);
        option.appendChild(inputPages);

        const read = document.createElement('div');
        read.innerText += 'READ ?';
        option.appendChild(read);
        option.appendChild(readStat);

        const save = document.createElement('button');
        save.setAttribute('id','save');
        save.innerText = 'SAVE';
        option.appendChild(save);

        let editArr = document.querySelectorAll('#edit');
        let sampArr1 = Array.from(editArr);
        console.log(sampArr1.indexOf(edit));
        var editPos = sampArr1.indexOf(edit);
        /* save.addEventListener('mouseover', () => {
            console.log(sampArr1.indexOf(edit));
        }); */

        save.addEventListener('click', () => {
            body.removeChild(option);
            body.style.backgroundColor = '#60a5fa';
            container.style.filter = 'brightness(1)';
            addBook.style.backgroundColor = 'white';
            addBook.style.border = '5px solid white';
            while (option.hasChildNodes()) {
                option.removeChild(option.firstChild);
            };

            while (book.hasChildNodes()) {
                book.removeChild(book.firstChild);
            };

            book.innerHTML = 'TITLE:';

            const entryTitle = document.createElement('div');
            entryTitle.innerText = inputTitle.value;
            entryTitle.setAttribute('id','title'+i);
            book.appendChild(entryTitle);
            myLibrary[editPos*4] = inputTitle.value;

            book.innerHTML += 'AUTHOR:';

            const entryAuthor = document.createElement('div');
            entryAuthor.innerText = inputAuthor.value;
            book.appendChild(entryAuthor);
            myLibrary[editPos*4 + 1] = inputAuthor.value;

            book.innerHTML += 'PAGES:';

            const entryPages = document.createElement('div');
            entryPages.innerText = inputPages.value;
            book.appendChild(entryPages);
            myLibrary[editPos*4 + 2] = inputPages.value;

            book.innerHTML += 'READ?';

            const entryRead = document.createElement('div');
            if (checkbox.checked == true) {
                entryRead.innerText = "Yes";
                myLibrary[editPos*4 + 3] = true;
            } else {
                entryRead.innerText = "No";
                myLibrary[editPos*4 + 3] = false;
            }
            book.appendChild(entryRead);

            book.appendChild(edit);
            book.appendChild(del);

            inputTitle.value = "";
            inputAuthor.value = "";
            inputPages.value = "";
            checkbox.checked = false;
            readResult.innerText = 'NO';
        });

        const close = document.querySelector('svg');
        close.addEventListener('click', () => {
            body.removeChild(option);
            body.style.backgroundColor = '#60a5fa';
            container.style.filter = 'brightness(1)';
            addBook.style.backgroundColor = 'white';
            addBook.style.border = '5px solid white';
            while (option.hasChildNodes()) {
                option.removeChild(option.firstChild);
            };
            inputTitle.value = "";
            inputAuthor.value = "";
            inputPages.value = "";
            checkbox.checked = false;
            stat = 0;
            readResult.innerText = 'NO';
        });
        
    });

    del.setAttribute('id', 'del');
    del.setAttribute('value',i)
    del.innerText = 'DELETE';
    book.appendChild(del);

    del.addEventListener('mouseup', () => {
        //console.log(del.value);
        
        let delArr = document.querySelectorAll('#del');
        let sampArr = Array.from(delArr);
        //console.log(sampArr);
        let delPos = sampArr.indexOf(del) + 1;
        console.log(delPos);
        console.log(4*delPos-4)
        myLibrary.splice(4*delPos-4,4);
        console.log(myLibrary);

        books.removeChild(book);

        i--;
        del.setAttribute('value',i);
    });

    books.appendChild(book);
    
    inputTitle.value = "";
    inputAuthor.value = "";
    inputPages.value = "";
    checkbox.checked = false;
    readResult.innerText = 'NO';
});