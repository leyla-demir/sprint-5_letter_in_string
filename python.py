string = input('Enter A String  : ')
letter = input('Enter A Letter  : ')
count = string.lower().count(letter.lower())
print(f'{string} kelimesinin içerisinde {letter} kelimesi {count} defa geçmektedir')