def snakeEyes
    i = 0
    prng = Random.new
    counter = 0;
    while(i < 100)
        roll1 = prng.rand(1..6)
        roll2 = prng.rand(1..6)

        if roll1 == 1 && roll2 == 1
            counter+=1
            # puts("#{roll1} + #{roll2}")
        end

        i+=1
    end
    return counter
end

puts snakeEyes