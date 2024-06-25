const label = document.querySelector('label');
const dropZone = document.querySelector('#drop-zone');
const input = document.querySelector('input');

function onEnter(event) {
    event.preventDefault();
    label.classList.add('active');
}

function onLeave(event) {
    event.preventDefault();
    if (label.classList.contains('active')) {
        label.classList.remove('active');
    }
}

function onDrop(event) {
    event.preventDefault();
    label.classList.remove('active');

    const files = event.dataTransfer.files;
    if (files.length > 0) {
        input.files = files;
        const type = files[0].type;
        const formats = ['image/jpeg', 'image/png', 'image/jpg'];

        if (!formats.includes(type)) {
            alert("File format not allowed");
            return;
        }

        if (document.querySelector('#cover')) {
            dropZone.removeChild(document.querySelector('#cover'));
        }

        const img = document.createElement('img');
        img.id = "cover";
        img.src = URL.createObjectURL(files[0]);
        dropZone.appendChild(img);
    }
}

label.addEventListener('dragenter', onEnter);
label.addEventListener('dragover', onEnter);
label.addEventListener('dragleave', onLeave);
label.addEventListener('drop', onDrop);
label.addEventListener('dragend', onLeave);

input.addEventListener('change', event => {
    if (input.files.length > 0) {
        const type = input.files[0].type;
        const formats = ['image/jpeg', 'image/png', 'image/jpg'];

        if (!formats.includes(type)) {
            alert("Formato não permitido");
            return;
        }

        if (document.querySelector('#cover')) {
            dropZone.removeChild(document.querySelector('#cover'));
        }

        const img = document.createElement('img');
        img.id = "cover";
        img.src = URL.createObjectURL(input.files[0]);
        dropZone.appendChild(img);
    }
});
