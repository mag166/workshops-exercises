require "sinatra"
require 'sinatra/reloader'
require "rubyjokes"

joke = RubyJoke.new


get "/" do
    return "Hello Word! Ready for some Jokes?!"
end

get "/jokes/:type" do
    return "params[type]"
end

