myfile = input("enter a file name: ")

file_handle = open(myfile, 'w')

st = input("Enter contents")

file_handle.write(st)

file_handle.close()