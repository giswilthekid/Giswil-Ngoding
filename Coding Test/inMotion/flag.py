def flagBuild(size):

	for i in range (size):
		flag = ""
		if (i == size//2):
			flag += "O" * size
		else:
			for j in range (size):
				if (j == i) or (j == size//2) or (j == size - i - 1):
					flag += "O"
				else:
					flag += "_"

		print(flag)

flagBuild(9)