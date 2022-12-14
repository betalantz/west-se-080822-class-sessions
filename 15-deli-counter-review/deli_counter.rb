katz_deli = []

def line(deli)
   if deli.empty?
        puts "The line is currently empty." 
   else
        deli_line = "The line is currently:"
        # deli.each_with_index {|customer, index|
        #         deli_line += " #{index + 1}. #{customer}"
        #     }
        deli.each.with_index(1) {|customer, idx|
            deli_line << " #{idx}. #{customer}"
        }
        puts deli_line
    end     
end

def take_a_number(deli, name)
    deli << name
    puts "Welcome, #{name}. You are number #{deli.length} in line."
end

def now_serving(deli)
    if deli.empty?
        puts "There is nobody waiting to be served!"
    else
        current = deli.shift
        puts "Currently serving #{current}."
    end
   
end

take_a_number(katz_deli, "Lantz")
line(katz_deli)