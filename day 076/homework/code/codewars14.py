
# https://www.codewars.com/kata/597a660f59873cc353000061/train/python

# Arrays and hex color codes

def get_colors(col_arr):
    def dominant_color(hex_color):
        r = int(hex_color[0:2], 16)
        g = int(hex_color[2:4], 16)
        b = int(hex_color[4:6], 16)
        if r > g and r > b:
            return "Red"
        elif g > r and g > b:
            return "Green"
        else:
            return "Blue"
    result = []
    for sub in col_arr:
        counts = {"Red": 0, "Green": 0, "Blue": 0}
        for color in sub:
            counts[dominant_color(color)] += 1
        used = [(v, k) for k, v in counts.items() if v > 0]
        used.sort(reverse=True)
        major = used[0][1]
        minor = used[1][1]
        result.append(f"{major}+{minor}")
    return ",".join(result)