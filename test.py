import math

#값 입력받기


a=str(input('원소 기호를 입력해주세요 : '))  
b=int(input('원자량을 입력해주세요 : '))
c=int(input('원소 번호를 입력해주세요 : '))
d=int(input('이온 상태 전하량을 입력해주세요 : '))
e=int(input('화학식에서의 원자 개수를 입력해주세요 : '))

d1=str('+') #이온 전하량이 1인 경우 부호만 표기하기




if e==1 :   #화학식에서의 원자 개수가 1인 경우
    if d==0 :   #이온 전하량이 0인 경우
        print('%d\n%{}s\n%d'.format(len(str(b))+1) % (b,a,c))
    if d==1 :   #이온 전하량이 1인 경우
        print('%d%3c\n%{}s\n%d'.format(len(str(b))+1) % (b,d1,a,c))
    if d>=2 : #이온 전하량이 0과 1이 아닌 경우 중에서도 양수인 경우
        d=abs(d)  #이온 전하량을 절대값으로 바꾸기
          #이온 전하량을 표시할 때 부호를 뒤로 빼기
        print('%d%3d+\n%{}s\n%d'.format(len(str(b))+1) % (b,d,a,c))
    if d<0 : #이온 전하량이 0과 1이 아닌 경우 중에서도 음수인 경우
        d=abs(d) #이온 전하량을 절대값으로 바꾸기
          #이온 전하량을 표시할 때 부호를 뒤로 빼기
        print('%d%3d-\n%{}s\n%d'.format(len(str(b))+1) % (b,d,a,c))
              
else :     #화학식에서의 원자 개수가 1이 아닌 경우
    if d==0 :   #이온 전하량이 0인 경우
        print('%d\n%{}s\n%d%{}d'.format(len(str(b))+1,len(str(b))-len(str(c))+3) % (b,a,c,e))
    if d==1 :   #이온 전하량이 1인 경우
        print('%d%3c\n%{}s\n%d%{}d'.format(len(str(b))+1,len(str(b))-len(str(c))+3) % (b,d1,a,c,e))
    if d>=2 : #이온 전하량이 0과 1이 아닌 경우 중에서도 양수인 경우
        d=abs(d) #이온 전하량을 절대값으로 바꾸기
          #이온 전하량을 표시할 때 부호를 뒤로 빼기
        print('%d%3d+\n%{}s\n%d%{}d'.format(len(str(b))+1,len(str(b))-len(str(c))+3) % (b,d,a,c,e))
    if d<0 : #이온 전하량이 0과 1이 아닌 경우 중에서도 음수인 경우
        d=abs(d) #이온 전하량을 절대값으로 바꾸기
           #이온 전하량을 표시할 때 부호를 뒤로 빼기
        print('%d%3d-\n%{}s\n%d%{}d'.format(len(str(b))+1,len(str(b))-len(str(c))+3) % (b,d,a,c,e))