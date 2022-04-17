import random  # qna() 함수에서 질문을 랜덤으로 출력하기 위함

# 질문, 답변 딕셔너리
qna_dict = {"집밖에 나가는 것 자체가 스케줄?":"",
            "불금에는 북적대는 곳보단 집이지?":"",
            "휴대폰만 있어도 안 심심한가요?":"",
            "카톡, 문자 알림을 잘 확인하지 않나요?":"",
            "아무 생각이 없다. 왜냐하면 아무 생각이 없기 때문이다 라고 자주 느끼나요?":"",
            "당신은 배달앱 VIP인가요?":"",
            "친구와의 약속이 갑작스레 파토났을 때 아쉽다는 생각보다 오예!라는 생각이 더 자주 드나요?":""}


def qna(name): 
    print("===== 안녕하세요 ", name, "님, 당신은 집순이일까요? =====")
    print("===== 모든 질문의 대답을 네, 아니오로 답변해주세요 =====")
    qna_num = int(input("받을 질문의 개수를 입력해주세요(최대 7개 가능): "))

    yes_num = 0  # '네' 답변의 개수

    for i in range(qna_num):
        question = random.choice(list(qna_dict.items()))  # 질문 랜덤으로 뽑기       
        del(qna_dict[question[0]])  # 뽑은 질문은 딕셔너리에서 제거 -> 중복된 질문 방지

        print(question[0])  # 질문 출력
        answer = input("답변: ")  

        if answer == "네":  # 답변이 '네'이면 yes_num 1 증가
            yes_num += 1

    percent = yes_num / qna_num * 100

    return percent

        
def your_type(percent):
    if percent > 75:
        print("당신은 집순이입니다.")
    elif percent > 50:
        print("당신은 집을 조금 더 좋아하네요.")
    elif percent > 25:
        print("당신은 밖을 조금 더 좋아하네요.")
    else:
        print("당신은 바깥순이입니다.")


# main
name = input("당신의 이름은? ")
your_type(qna(name))
