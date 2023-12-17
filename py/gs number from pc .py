import random

a = [0]
g = 0
n = 1
num = random.randint(1, 100)
mine = int(input("come on :"))
a.append(num)
print(a)
while a[n] != mine:
    if a[n] > mine:
        if a[n-1] < a[n]:

            a.append(int((a[n-1] + a[n])/2))
            n += 1
            g += 1

        else:
            a.append(int(a[n-1] / 2))
            n += 1
            g += 1
    else:
        if int((a[n] + a[n-1] / 2)) == mine:
            break
        else:
            a.append(int(a[n-1] + a[n]))
            g += 1
            n += 1


print("wow i did it my number is ",
      a[n], "and your number was ", mine, " after ", g, "tries!")
print(a)
