myfile = input("enter a file name: ")

file_handle = open(myfile, 'r')
contents = file_handle.read()
file_handle.close()

print(contents)