from PIL import Image
from PIL import ImageFilter

img = Image.open("C:/likelion/image/cat.jpg")

# 이미지 크기 변경 + 파일로 저장
resize_img = img.resize((300, 300))  # 인자값은 튜플 자료형, 원본 이미지 사이즈는 236 x 236
resize_img.save("C:/likelion/image/resize_cat.jpg")

# 이미지 45도 회전 + 파일로 저장
rotate_img = img.rotate(45)
rotate_img.save("C:/likelion/image/rotate_cat.jpg")

# 이미지 필터 사용해서 블러 처리 + 파일로 저장
blur_img = img.filter(ImageFilter.BLUR)
blur_img.save("C:/likelion/image/blur_cat.jpg")

# 새로운 컬러 이미지 생성 후, 앞에서 저장한 3개의 이미지 모두 합치기
new_img = Image.new("RGB", (img.size[0] + 300, img.size[1] + 300), (255, 229, 198))
# 파라미터는 (mode, size, color)
# size = (원본 이미지의 가로 사이즈 + 크기 변경한 이미지의 가로 사이즈, 원본 이미지 세로 사이즈 + 크기 변경한 이미지의 세로 사이즈)
new_img.paste(resize_img, (0, 0))  # 왼쪽 상단에 붙이기
new_img.paste(rotate_img, (resize_img.size[0], 0))  # resize_img의 가로가 끝나는 위치에 갖다 붙이기
new_img.paste(blur_img, (0, resize_img.size[1]))  # 왼쪽 아래(resize_img의 세로가 끝나는 위치)에 붙이기
new_img.show()  # 이미지 보이기

