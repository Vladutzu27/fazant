from itertools import product
import string

# Generează capetele de la aa la zz
capete = [''.join(p) for p in product(string.ascii_lowercase, repeat=2)]

with open("lista.txt", "r", encoding="utf-8") as f:
    cuvinte = [line.strip() for line in f if line.strip()]

bune = []

for cap in capete:
    matching = [cuv for cuv in cuvinte if cuv.startswith(cap)]
    if not matching:
        continue

    print(f"\nCuvintele care încep cu '{cap}':")
    for cuv in matching:
        print(" ", cuv)

    rasp = input(f"Le păstrăm pe toate cu '{cap}'? (Y/n): ").strip().lower()
    if rasp in ["", "y", "yes"]:
        bune.append(cap)

print("\nCapete bune:")
print("\n".join(bune))
