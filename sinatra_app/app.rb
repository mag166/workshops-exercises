require "sinatra"
require 'sinatra/reloader'
require "./classmate.rb"

NAME = "Minhal Abbas Gardezi"
names = ["edward elric (alchemist / pokemon master)", "ronnie the html G.O.A.T", "team rocket", "yorvin the dominican", "marria the edgecase queen"]
people = {
  "minhal" => Classmate.new("minhal", "sexy dance"),
  "scott" => Classmate.new("scott", "being a bitch"),
  "orlando" => Classmate.new("orlando", "teach")
}
get "/" do
    return "Hello human, are you ready for us robots to take over!? |8-D|"
end

get "/sei" do
    return "This class is the bees knees"
end

get "/my_name" do
    return "Hello, my name is #{NAME}"
end

get "/all_names" do
    return names.join(", ")
end

get "/people/:name" do
    return people[params[:name]].i_have_the_power!
  end