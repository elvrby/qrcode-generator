import qrcode

# Masukkan URL yang ingin Anda ubah menjadi kode QR
url = "https://www.youtube.com/watch?v=0EGltPnGPzc"

# Membuat objek QRCode
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)

# Tambahkan URL ke objek QRCode
qr.add_data(url)
qr.make(fit=True)

# Buat gambar dari QRCode
img = qr.make_image(fill='black', back_color='white')

# Simpan gambar
img.save("kode_qr.png")

print("Kode QR berhasil dibuat dan disimpan sebagai 'kode_qr.png'")
