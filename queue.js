const queueSize = 5;
let queue = Array(queueSize).fill(null); // Inisialisasi array queue dengan nilai null
let front = -1;
let rear = -1;

// Menampilkan queue
function displayQueue() {
    const display = document.getElementById("queueDisplay");
    display.innerHTML = "";
    queue.forEach(item => {
        const queueItem = document.createElement("div");
        queueItem.classList.add("queue-item");
        queueItem.textContent = item !== null ? item : ""; // Jika null, tampilkan kosong
        display.appendChild(queueItem);
    });
}

// Menambahkan elemen ke queue
function enqueue() {
    const value = parseInt(document.getElementById("inputValue").value);

    if (isNaN(value)) {
        alert("Masukkan nilai angka yang valid!");
        return;
    }

    if ((front === 0 && rear === queueSize - 1) || (rear === (front - 1) % (queueSize - 1))) {
        alert("Queue penuh!");
        return;
    } else if (front === -1) {
        front = rear = 0;
        queue[rear] = value;
    } else if (rear === queueSize - 1 && front !== 0) {
        rear = 0;
        queue[rear] = value;
    } else {
        rear++;
        queue[rear] = value;
    }

    displayQueue();
}

// Menghapus elemen dari queue
function dequeue() {
    if (front === -1) {
        alert("Queue kosong!");
        return;
    }

    const removedElement = queue[front];
    queue[front] = null;

    if (front === rear) {
        front = rear = -1; // Queue menjadi kosong
    } else if (front === queueSize - 1) {
        front = 0;
    } else {
        front++;
    }

    displayQueue();
}

// Inisialisasi tampilan awal queue
displayQueue();
