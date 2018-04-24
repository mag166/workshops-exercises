require "sinatra"
require 'sinatra/reloader'
require "rubyjokes"

joke = RubyJoke.new


get "/" do
    return "Hello Word! Ready for some Jokes?!"
end

get "/jokes/:type" do
    return joke.get_joke({limitTo: "#{params[:type]}"})
end

get "/surprise" do
    return joke.get_joke({limitTo: ['nerdy','explicit'].sample})
end

