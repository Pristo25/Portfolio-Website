const ctx = document.getElementById('salesChart').getContext('2d');

// Data penjualan
const data2022 = [4017, 6135, 7091, 5841, 5036, 4547, 3467, 3970, 6313, 3595, 9207, 5945];
const data2023 = [2416, 4136, 7935, 8004, 9505, 5026, 6108, 6343, 9404, 9280, 9287, 8689];
const labels = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

// Konfigurasi chart
const config = {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [
            {
                label: '2022',
                data: data2022,
                backgroundColor: 'rgba(54, 162, 235, 0.7)', // Warna biru
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: '2023',
                data: data2023,
                backgroundColor: 'rgba(255, 99, 132, 0.7)', // Warna merah
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true, // Responsif secara otomatis
        maintainAspectRatio: false, // Memastikan grafik tetap proporsional di berbagai ukuran layar
        plugins: {
            legend: {
                position: 'top', // Posisi legend di atas
                labels: {
                    font: {
                        size: 12 // Ukuran teks lebih kecil untuk perangkat kecil
                    }
                }
            },
            title: {
                display: true,
                text: 'Laporan Penjualan',
                font: {
                    size: 16 // Judul lebih kecil di layar kecil
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    font: {
                        size: 10 // Ukuran teks pada sumbu X
                    }
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    font: {
                        size: 10 // Ukuran teks pada sumbu Y
                    }
                }
            }
        }
    }    
};

// Render chart
new Chart(ctx, config);