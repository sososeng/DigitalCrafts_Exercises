import io

file_handle = io.StringIO()

num =0
while True:
	print(num)
	try:
		file_handle.write("*" * 1000)
		num=num+1
	except:
		import traceback
		traceback.print_exc()
		raise
			
file_handle.close()

contents = file_handle.getvalue()