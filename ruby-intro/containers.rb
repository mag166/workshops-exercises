colors = %w{green black white}
names = %w{orlando minhal steve}


colors_and_names = {
  colors: colors,
  names: names,
}

for color in colors do
    puts color
end

for name in names do
    puts name
end

colors_and_names[:colors].each do |color|
    puts color
end

colors_and_names[:names].each do |name|
    puts name
end
