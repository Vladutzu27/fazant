import numpy as np
import random
import os
import requests

FaraCratime = []
inchizitiiValide = []

with open('C:/Users/vladm/Downloads/wordlist/inchizitiiValide.txt', encoding='utf-8') as file:
    content = file.read()

inchizitiiValide = content.split()

for i in range(0, len(inchizitiiValide)):
    if(len(inchizitiiValide[i]) > 2):
        if("-" not in inchizitiiValide[i]):
            FaraCratime.append(inchizitiiValide[i])
        else:
            print(inchizitiiValide[i] + " are cratimă")
    else:
        print(inchizitiiValide[i] + " e prea scurt")

print(FaraCratime)