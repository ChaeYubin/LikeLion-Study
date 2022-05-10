from googletrans import Translator

translator = Translator()

# sentence = "안녕하세요 코드라이언입니다."
sentence = input("번역할 문장을 입력해보세요: ")
destlang = input("어떤 언어로 번역을 원하시나요? ")

result = translator.translate(sentence, destlang)
detected = translator.detect(sentence)

print(detected.lang, ":", sentence)
print(result.dest, ":", result.text)