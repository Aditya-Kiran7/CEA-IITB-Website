import qrcode
import os

BASE_URL = "https://www.civil.iitb.ac.in/cea/#/cea/verify?id="

INPUT_FILE = "src/data/certificate.js"
OUTPUT_FOLDER = "QR_Codes"

os.makedirs(OUTPUT_FOLDER, exist_ok=True)

# Read certificate.js
with open(INPUT_FILE, "r", encoding="utf-8") as file:
    content = file.read()

# Extract IDs from lines like:
# id: 'CEA26-AC0001',

import re

ids = re.findall(r"id:\s*['\"]([^'\"]+)['\"]", content)

print(f"Found {len(ids)} certificates.")

for certificate_id in ids:
    url = BASE_URL + certificate_id

    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=10,
        border=4,
    )

    qr.add_data(url)
    qr.make(fit=True)

    image = qr.make_image()

    filename = os.path.join(
        OUTPUT_FOLDER,
        f"{certificate_id}.png"
    )

    image.save(filename)

print(f"Generated {len(ids)} QR codes in '{OUTPUT_FOLDER}/'")