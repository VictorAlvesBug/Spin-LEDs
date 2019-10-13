let led = [];
let str = "";
let numLeds = 7;

function setup()
{
	createCanvas(800, 600);

	for(let i=0; i<numLeds; i++)
	{
		led[i] = new Led(i);
	}

	let word = "FIAP";
	//let word = "FIAP";
	let preStr = "";

	for(let i=0; i<word.length; i++)
	{
		preStr += "-------" + "-------";

		switch(word.charAt(i))
		{
			case 'F':
				preStr += 
				"0000000"+
				"00-00--"+
				"00-00--"+
				"00-----";
				break;

			case 'I':
				preStr += 
				"0000000";
				break;

			case 'A':
				preStr += 
				"--00000"+
				"-0-0---"+
				"0--0---"+
				"-0-0---"+
				"--00000";
				break;

			case 'P':
				preStr += 
				"0000000"+
				"00-00--"+
				"00-00--"+
				"-000---";
				break;

			case 'B':
				preStr += 
				"0000000"+
				"0-----0"+
				"0--0--0"+
				"-00-00-";
				break;

			case 'C':
				preStr += 
				"-00000-"+
				"00---00"+
				"00---00"+
				"00---00";
				break;

			case 'D':
				preStr +=
				"0000000"+
				"00---00"+
				"00---00"+ 
				"-00000-";
				break;

			case 'E':
				preStr += 
				"0000000"+
				"00-0-00"+
				"00-0-00"+
				"00---00";
				break;

			case 'G':
				preStr += 
				"-00000-"+
				"00---00"+
				"00-0-00"+
				"00-000-";
				break;

			case 'H':
				preStr += 
				"0000000"+
				"--00---"+
				"--00---"+
				"0000000";
				break;

			case 'J':
				preStr += 
				"00--00-"+
				"00---00"+
				"000000-";
				break;

			case 'K':
				preStr += 
				"0000000"+
				"-00-00-"+
				"00---00"+
				"0-----0";
				break;

			case 'L':
				preStr += 
				"0000000"+
				"-----00"+
				"-----00";
				break;

			case 'M':
				preStr += 
				"0000000"+
				"00-----"+
				"-00----"+
				"00-----"+
				"0000000";
				break;

			case 'N':
				preStr += 
				"0000000"+
				"-00----"+
				"--000--"+
				"----00-"+
				"0000000";
				break;

			case 'O':
				preStr += 
				"-00000-"+
				"00---00"+
				"00---00"+
				"-00000-";
				break;

			case 'Q':
				preStr += 
				"-00000-"+
				"00---00"+
				"00---0-"+
				"-0000-0";
				break;

			case 'R':
				preStr += 
				"0000000"+
				"00-00--"+
				"00-00--"+
				"-000-00";
				break;

			case 'S':
				preStr += 
				"-00---0"+
				"0--0--0"+
				"0--0--0"+
				"0---00-";
				break;

			case 'T':
				preStr += 
				"00-----"+
				"00-----"+
				"0000000"+
				"00-----"+
				"00-----";
				break;

			case 'U':
				preStr += 
				"000000-"+
				"-----00"+
				"-----00"+
				"000000-";
				break;

			case 'V':
				preStr += 
				"000----"+
				"--000--"+
				"-----00"+
				"--000--"+
				"000----";
				break;

			case 'W':
				preStr += 
				"0000000"+
				"-----00"+
				"----00-"+
				"-----00"+
				"0000000";
				break;

			case 'X':
				preStr += 
				"00---00"+
				"-00-00-"+
				"--000--"+
				"-00-00-"+
				"00---00";
				break;

			case 'Y':
				preStr += 
				"00---00"+
				"-00-00-"+
				"--00---"+
				"-00----"+
				"00-----";
				break;

			case 'Z':
				preStr += 
				"00--000"+
				"00-0000"+
				"00-0-00"+
				"0000-00"+
				"000--00";
				break;
		}
	}

	for(let n=0; n<numLeds; n++)
	{
		for(let i=n; i<preStr.length; i+=numLeds)
		{
			str += preStr.charAt(i);
		}
	}

	/*str = 
	"-00000-0-----0-----0000--"+
	"-0-----0----0-0----0---0-"+
	"-0-00--0---0---0---0-00--"+
	"-0-----0--0--------0-----"+
	"-0-----0-0-------0-0-----";*/

	background(0);
}

function draw()
{
	//background(0);
	fill(0, 20);
	rect(0, 0, width, height);

	translate(width/2, height/2);

	let strPortion = [];

	for(let i=0; i<numLeds; i++)
	{
		strPortion.push(str.substring(i*(str.length/numLeds), (i+1)*(str.length/numLeds)));
	}

	for(let i=0; i<numLeds; i++)
	{
		let newColor;

		if(strPortion[i].length > led[numLeds-1-i].position)
		{
			if(strPortion[i].charAt(led[numLeds-1-i].position) == '0')
			{
				led[numLeds-1-i].color = color(255, 0, 0);
			}
			else
			{
				led[numLeds-1-i].color = color(0, 0);
			}
		}
		else
		{
			led[numLeds-1-i].color = color(0, 0);
		}
	}

	for(let i=0; i<numLeds; i++)
	{
		led[i].update();
		led[i].show();
	}
}