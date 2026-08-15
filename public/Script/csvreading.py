import csv
import os

CSV_FOLDER = "public/certificateCSV"
OUTPUT_FILE = "src/data/certificate.js"

EVENTS = {
    "AutoCad.csv": "AutoCAD",
    "MS.csv": "MS",
    "QGIS.csv": "QGIS",
}

certificates = []

for filename, event in EVENTS.items():
    filepath = os.path.join(CSV_FOLDER, filename)

    with open(filepath, "r", encoding="utf-8-sig") as file:
        reader = csv.DictReader(file)

        for row in reader:
            name = row["Name"].strip()
            certificate_id = row["Certificate ID"].strip()

            certificates.append({
                "id": certificate_id,
                "name": name,
                "event": event,
                "date": "15 August 2026"
            })

os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)

with open(OUTPUT_FILE, "w", encoding="utf-8") as file:
    file.write("const certificates = [\n")

    for cert in certificates:
        file.write("  {\n")
        file.write(f"    id: {cert['id']!r},\n")
        file.write(f"    name: {cert['name']!r},\n")
        file.write(f"    event: {cert['event']!r},\n")
        file.write(f"    date: {cert['date']!r},\n")
        file.write("  },\n")

    file.write("];\n\n")
    file.write("export default certificates;\n")

print(f"Generated {len(certificates)} certificates.")
print(f"Saved to: {OUTPUT_FILE}")