class Emote
    attr_reader :str
    def initialize(str)
        @str = str
    end
    
    def happy
        " #{str} 😀"
    end
    
    def sad
        " #{str} 😞"
    end
    
    def laughing
        " #{str} 🤣"
    end
    
    def angry
        " #{str} 😡"
    end
end
  
  
  
  @sentence = Emote.new("This is an okay program")
  @sentence2 = Emote.new("This is the second sentence")
  @sentence3 = Emote.new("This is the third")
#   puts sentence.happy
#   puts sentence.sad
#   puts sentence.laughing
#   puts sentence.angry
#   puts sentence.inspect