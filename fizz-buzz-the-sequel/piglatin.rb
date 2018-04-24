def piglatin(str)
    sentence = str.split(" ")
    returnSentence = ""
    for word in sentence
        if word.length > 1
            if(word[0] == "a" || word[0] == "e" || word[0] == "i" || word[0] == "o"|| word[0] == "u")
                returnSentence += word + " "
            else
                temp = word
                firstLetter = temp[0]
                temp += firstLetter + "ay"
                temp[0] = ""
                returnSentence += temp + " "
            end
        end
    end
    return returnSentence
end

puts piglatin("bitch dont kill my vibe aaron")