def reverse(str)
    chars = str.split('')
    reversed = ""
    chars.each do |item|
        reversed = item + reversed
    end

    return reversed
end


puts reverse("Bitch Ass Ho")