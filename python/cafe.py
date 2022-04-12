import time 

# 디저트, 음료 메뉴판 초기화
dessert = {'블루베리 케이크':6900, '생크림 카스테라':4500, '애플파이':5200, '휘낭시에':2500}
drink = {'아메리카노':4000, '아이스티':4000, '유자차':4500, '바닐라라떼':4500}

# 장바구니 리스트
dessert_basket = []
drink_basket = []

# 주문 메뉴 총 금액을 계산하는 함수
def total_charge(set_dessert, set_drink):
    charge = 0
    for i in set_dessert:
        charge += dessert.get(i)
    for i in set_drink:
        charge += drink.get(i)

    return charge

# main
print("디저트 카페에 오신 것을 환영합니다.")
print("주문을 중단하고 싶으시면 'q'를 눌러주세요. 아래는 메뉴판입니다.\n")
print("====================================================================================")
print("디저트 => ", dessert)
print("음료 => ", drink)
print("====================================================================================")

# 장바구니에 메뉴 추가
while True:
    dessert_choice = input("장바구니에 담고 싶은 디저트 1개를 선택해주세요 : ")
    
    if dessert_choice == 'q':
        break
    else:
        dessert_basket.append(dessert_choice)
        print(dessert_choice, " 메뉴가 장바구니에 담겼습니다.\n")

    drink_choice = input("장바구니에 담고 싶은 음료 1개를 선택해주세요. : ")
    if drink_choice == 'q':
        break
    else:
        drink_basket.append(drink_choice)
        print(drink_choice, " 메뉴가 장바구니에 담겼습니다.")

    print("====================================================================================\n")

# 장바구니 현황
print("\n★ 장바구니에 담긴 디저트를 알려드립니다. ★")
print(dessert_basket)
print("\n★ 장바구니에 담긴 음료를 알려드립니다. ★")
print(drink_basket)

# 장바구니 set
dessert_set = set(dessert_basket)
drink_set = set(drink_basket)

# 장바구니 메뉴 삭제
while True:
    menu_del = input("\n장바구니에서 삭제하고 싶은 메뉴 1개를 입력해주세요 : ")

    if(menu_del == "q"):
        break
    else:
        dessert_set = dessert_set - set([menu_del])
        drink_set = drink_set - set([menu_del])

    if dessert_set or drink_set:
        print("\n현재 장바구니 현황입니다.")
        if dessert_set:
            print(dessert_set, end=' ')
        if drink_set:
            print(drink_set)
    else:
        print("장바구니에 아무것도 없습니다.")

# 최종 장바구니 내역
print("\n★ 최종 장바구니에 담긴 내역을 알려드립니다.★")
print("디저트 : ", dessert_set, " 음료 : ", drink_set)

# 최종 장바구니
total_basket = dessert_set.union(drink_set)

# 영수증 출력
print("\n=================영수증을 출력해드리겠습니다.=================")
now = time.localtime()  # 현재 주문 시각 
print("주문 시각 : ", "%04d/%02d/%02d %02d:%02d:%02d" % (now.tm_year, now.tm_mon, now.tm_mday, now.tm_hour, now.tm_min, now.tm_sec))
print("주문 내역 : ", total_basket)
print("주문하신 메뉴의 총 금액은 ", total_charge(dessert_set, drink_set), "원 입니다.\n")
print("★ 카페를 이용해주셔서 감사합니다. ★")