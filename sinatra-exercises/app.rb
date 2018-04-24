require 'sinatra'
require 'sinatra/reloader'

get "/" do
    erb :index
end

get "/double_time" do
    @text = "I am Sexy "
    erb :double_time
end 

get "/info" do 
    erb :info
end

post "/info" do 
    puts params
    redirect "/"
end