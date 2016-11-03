//Declare the Color Object with our new keyword below here.
const Color = new Object();

/*
** rgb is an array that hold the color values.
** first is red -> R, then green -> G, and blue -> B
** Example
*/

Color.isColor = function(rgb){
  //each color must be between 0 and 255. Also can be equal.

  let redworks = (rgb[0] >= 0) && (rgb[0] <= 255);
  let greenworks = (rgb[0] >= 0) && (rgb[0] <= 255);
  let blueworks = (rgb[0] >= 0) && (rgb[0] <=255);

  if(redworks && greenworks && blueworks){
    return true;
  }
  else{
    return false;
  }
};

Color.redIntensity = function(rgb){
  let r = rgb[0]/255 *100;
  Math.Round(r);
  return r;
};

//greenIntensity
Color.greenIntensity = function(rgb){
  let g = rgb[1]/255 *100;
  Math.Round(g);
  return g;
};

//blueIntensity
Color.blueIntensity = function(rgb){
  let b = rgb[2]/255 *100;
  Math.Round(b);
  return b;
};

//brightness
Color.brightness = function(rgb){
  let bright = 
  return bright;
};

//complement
Color.complement = function(rgb){
  let comp = [];
  for(var c=0;c<3;c++){
    if()
  }
}
