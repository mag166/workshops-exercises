require "./chuck.rb"

chuck = ChuckJokes.new 

if ARGV.length == 2 
        puts chuck.replace_name(ARGV[0]+" "+ARGV[1])

elsif ARGV[0] == "random"
    puts chuck.random

elsif ARGV.length == 1 && ARGV[0].to_i != 0
    puts chuck.get_joke_by_id(ARGV[0])

else
    chuck.help
end



