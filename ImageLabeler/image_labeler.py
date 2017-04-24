from PIL import Image, ImageDraw, ImageFont
import os
spacing = 5
for filename in os.listdir('photos'):
    name = os.path.splitext(filename)[0]
    im = Image.open('photos/'+filename)
    im.thumbnail((750,750),Image.ANTIALIAS)
    width, height = im.size
    ubuntu = ImageFont.truetype('font.ttf', int(width/7.5))
    w= ubuntu.getsize(max(name.split(),key=len))[0]
    h = ubuntu.getsize("B")[1]*2+spacing
    print(name,width,w)
    print(name,height,h)
    draw = ImageDraw.Draw(im)
    draw.multiline_text(((width-w)/2,2*(height-h)/3),name.replace(" ","\n"), font=ubuntu,spacing=spacing,align="center")
    im.save(os.path.join('withName', filename))
