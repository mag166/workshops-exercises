require 'sinatra'
require 'sinatra/reloader'
require 'googlebooks'

get "/" do
    erb :index
end

post "/" do
    @books = GoogleBooks.search(params[:query])
    erb :results
end 


# get "/results" do
#     erb :results
# end