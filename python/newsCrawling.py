import requests
from bs4 import BeautifulSoup
import pandas as pd
import openpyxl

keyword = input("검색할 키워드를 입력해주세요: ")
page = int(input("크롤링할 페이지를 입력해주세요. ex) 1(숫자만 입력): "))
print("크롤링할 페이지: ", page, "페이지\n")

# 네이버 검색-뉴스 탭에서 '날씨' 검색 시 나오는 URL
# https://search.naver.com/search.naver?where=news&sm=tab_jum&query=%EB%82%A0%EC%94%A8
# https://search.naver.com/search.naver?where=news&sm=tab_pge&query=%EB%82%A0%EC%94%A8&sort=0&photo=0&field=0&pd=0&ds=&de=&cluster_rank=21&mynews=0&office_type=0&office_section_code=0&news_office_checked=&nso=so:r,p:all,a:all&start=11
# query=날씨 -> query라는 인자에 검색어가 들어감
# start=11 -> start라는 인자에 몇번째 기사를 보여줄 지 들어감
# start=11 -> 2페이지, start=21 -> 3페이지

if page == 1:
    searchUrl = f"https://search.naver.com/search.naver?where=news&sm=tab_jum&query={keyword}"
else:
    page = str(10 * (page - 1) + 1)  # 2페이지부터 start = 11, 21, 31, ... 
    searchUrl = f"https://search.naver.com/search.naver?where=news&sm=tab_pge&query={keyword}&sort=0&photo=0&field=0&pd=0&ds=&de=&cluster_rank=22&mynews=0&office_type=0&office_section_code=0&news_office_checked=&nso=so:r,p:all,a:all&start={page}"

num = 1  # number 리스트에 넣을 번호 변수
number = []  # 번호 리스트
title = []  # 제목 리스트

response = requests.get(searchUrl)  # url 요청 후 응답 받아오기
soup = BeautifulSoup(response.text, 'html.parser')  

for tag in soup.select('a[class=news_tit]'):  # a 태그 내에서 class=news_tit 인 것만 선택
    number.append(num)  # number 리스트에 번호 넣기
    title.append(tag.text)  # title 리스트에 뉴스 헤드라인 넣기
    num += 1

newsDict = dict(zip(number ,title))  # {number : title} 딕셔너리 생성
newsDF = pd.DataFrame(list(newsDict.items()), columns=['번호', '제목'])  # 딕셔너리로 dataframe 생성
print(newsDF)  # DF 출력

newsDF.to_excel('news_headline.xlsx')  # 엑셀 파일로 저장
