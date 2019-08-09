var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
                label: 'Merah',
                data: [12, 19, 3, 23, 2, 3],
                backgroundColor: 'rgba(255, 99, 132, 100)'
            },
            {
                label: 'Biru',
                data: [12, 19, 3, 23, 2, 3],
                backgroundColor: 'rgba(54, 162, 235, 100)'
            }
        ]
    },
    options: {
        legend: {
            position: 'bottom'
        }
    }
});
var aa = document.getElementById("myChart1").getContext('2d');
var myChart1 = new Chart(aa, {
    type: 'pie',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: 'Apa nih',
            data: [12, 19, 3, 23, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 100)',
                'rgba(54, 162, 235, 100)',
                'rgba(255, 206, 86, 100)',
                'rgba(75, 192, 192, 100)',
                'rgba(153, 102, 255, 100)',
                'rgba(255, 159, 64, 100)'
            ],
        }]
    },
    options: {
        legend: {
            position: 'bottom'
        }
    }
});
var bb = document.getElementById("myChart2").getContext('2d');
var myChart2 = new Chart(bb, {
    type: 'line',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: 'Line Apa nih',
            data: [12, 19, 3, 23, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 100)',
                'rgba(54, 162, 235, 100)',
                'rgba(255, 206, 86, 100)',
                'rgba(75, 192, 192, 100)',
                'rgba(153, 102, 255, 100)',
                'rgba(255, 159, 64, 100)'
            ],
        }]
    },
    options: {
        legend: {
            position: 'bottom'
        }
    }
});
var cc = document.getElementById("myChart3").getContext('2d');
var myChart3 = new Chart(cc, {
    type: 'doughnut',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: 'Apa nih',
            data: [12, 19, 3, 23, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 100)',
                'rgba(54, 162, 235, 100)',
                'rgba(255, 206, 86, 100)',
                'rgba(75, 192, 192, 100)',
                'rgba(153, 102, 255, 100)',
                'rgba(255, 159, 64, 100)'
            ],
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
            position: 'bottom'
        }
    }
});

function fungsi() {
    var a = document.getElementById(3);
    if (a.style.display == "none") {
        a.style.display = "block";
        $('#3a').text("Sembunyikan");
    } else {
        a.style.display = "none";
        $('#3a').text("Tampilkan Chart");
    }
}

function fungsi2() {
    var b = document.getElementById(4);
    if (b.style.display == "none") {
        b.style.display = "block";
        $('#4a').text("Sembunyikan");
    } else {
        b.style.display = "none";
        $('#4a').text("Tampilkan Chart");
    }
}

function fungsi3() {
    var b = document.getElementById(2);
    if (b.style.display == "none") {
        b.style.display = "block";
        $('#2a').text("Sembunyikan");
    } else {
        b.style.display = "none";
        $('#2a').text("Tampilkan Chart");
    }
}

function fungsi4() {
    var b = document.getElementById(1);
    if (b.style.display == "none") {
        b.style.display = "block";
        $('#1a').text("Sembunyikan");
    } else {
        b.style.display = "none";
        $('#1a').text("Tampilkan Chart");
    }
}

function updateTextInput(val) {
    $('#id').text(val);
}