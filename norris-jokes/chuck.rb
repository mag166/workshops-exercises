require "httparty"

class ChuckJokes
    def help
        "Do some stuff and get some fun Chuck"
    end
  
    def get_joke_by_id(id)
        response = HTTParty.get("http://api.icndb.com/jokes/#{id}")
        response["value"]["joke"]
    end
  
    def replace_name(name)
        if(name.split.size != 2)
            puts name.split
            puts("You need two names")

        else
            names = name.split
            firstName = names[0]
            lastName = names[1]

            response = HTTParty.get("http://api.icndb.com/jokes/random?firstName=#{firstName}&lastName=#{lastName}")
            response["value"]["joke"]
        end

    end
  
    def random
        response = HTTParty.get('http://api.icndb.com/jokes/random')
        response["value"]["joke"]

    end
  end

