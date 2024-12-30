//GO.js 2.0 by Instel. Don't remove this line!
function spawn(X, Y, ID) {
    const newDiv = document.createElement('div');
    newDiv.id = ID;
    document.body.appendChild(newDiv); 
    const element = document.getElementById(ID);
    element.style.backgroundColor = 'red';
    element.style.width = '50px';
    element.style.height = '50px';
    element.style.position = 'absolute';
    element.style.left = X;
    element.style.top = Y;
    element.style.margin = '0px';
    element.style.padding = '0px';
    element.style.cursor = 'default';
    console.log(ID + ' spawned at ' + X + ', ' + Y)
}
function move(X, Y, ID) {
    const element = document.getElementById(ID);
    element.style.left = X;
    element.style.top = Y;
    console.log(ID + ' moved to ' + X + ', ' + Y)
}
function size(Width, Height, ID) {
    const element = document.getElementById(ID);
    element.style.width = Width;
    element.style.height = Height;
    console.log(ID + ' resized to ' + Width + ', ' + Height)
}
function color(Color, ID) {
    const element = document.getElementById(ID);
    element.style.backgroundColor = Color;
    console.log(ID + "'s color is now " + Color)
}
function radius(Radius, ID) {
    const element = document.getElementById(ID);
    element.style.borderRadius = Radius;
    console.log(ID + "'s radius is now " + Radius)
}
function remove(ID) {
    const element = document.getElementById(ID);
    element.remove();
    console.log('Removed ' + ID)
}
function opacity(Opacity, ID) {
    const element = document.getElementById(ID);
    element.style.opacity = Opacity/100;
    console.log(ID + "'s opacity is now " + Opacity)
}
function text(Text, Font, Color, ID) {
    const element = document.getElementById(ID);
    element.style.color = Color;
    element.style.fontFamily = Font;
    element.textContent = Text;
    console.log(ID + "'s text set to '" + Text + "' with the color " + Color + 'and the font ' + Font)
}
function cursor(Cursor, ID) {
    const element = document.getElementById(ID);
    element.style.cursor = Cursor;
    console.log(ID + "'s cursor set to '" + Cursor)
}
function background(Color) {
    const element = document.getElementById('main');
    element.style.backgroundColor = Color;
}