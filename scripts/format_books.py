#!/usr/bin/env python3

import os
import time
import subprocess
from datetime import datetime
import csv

html_str =["document.write(`<table>"]  

with open("../data/books.csv") as file:
    header = file.readline().split(',')
    html_str.append("<tr><th class=\"title\">"+header[0]+"</th><th>"+header[1]+"</th><th class=\"comments\">"+header[2]+"</th><th></tr><tr></tr>")
    for line in file:
        line = line.split(',')
        html_str.append("<tr><td class=\"title\">"+line[0]+"</td><td>"+line[1]+"</td><td class=\"comments\">"+line[2]+"</td><td></tr><tr><td></td></tr>")
 
html_str.append("""</table>`)""")
html_str = "".join(html_str)
Html_file= open("../js/books.js","w")
Html_file.write(html_str)
Html_file.close()