import datetime
import time

for yuk in range(0,10000,1):
  time.sleep(1)
  dt_now = datetime.datetime.now()
  t = dt_now
  tchi = t.hour + 9

  if t.minute <= 9:
    tcha = "0" + str(t.minute)

  else :
    tcha = str(t.minute)

  if t.second <= 9:
    sec = "0" + str(t.second)

  else:
    sec = str(t.second)

  if t.second % 10 == 0:
    print(str(t.month)+"月"+str(t.day)+"日 "+str(tchi)+":"+tcha+":"+ sec)
