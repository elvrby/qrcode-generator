import qrcode
# Download this file and run in terminal by "python QrGenerator.py" or by klik run python file 
# Insert your url down here
url = "https://"

qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)

qr.add_data(url)
qr.make(fit=True)

img = qr.make_image(fill='black', back_color='white')

# Codename for the image
img.save("code_qr.png")

print("QR Code successfuly created as 'code_qr.png'")
