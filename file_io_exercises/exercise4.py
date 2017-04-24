import json
import matplotlib.pyplot as plot





myfile = input("which file? ")



with open(myfile, 'rb') as fh:
  data = json.load(fh)
  print(data["data"][0][0])
  plot.plot(data["data"])



  plot.show()