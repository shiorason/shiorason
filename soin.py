s = input()
mi = int(s)

soin = []
while mi % 2 ==0:
  mi = mi // 2
  soin.append(2)

f = 3
while f ** 2 <= mi:
  if mi % f ==0:
    mi = mi // f
    soin.append(f)
  else:
    f = f + 2

if mi != 1:
  soin.append(mi)

sopr = str(soin)
sopt = sopr[1:-1]
print(sopt.replace(","," *"))
