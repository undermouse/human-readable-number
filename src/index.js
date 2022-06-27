module.exports = function toReadable(number) { // module.exports = 
    let hrn = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        0: 'zero'
    };

    let hrnTens = {
        10: 'ten',
        11: 'eleven',
        12: 'twelwe',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    }

    let hundreds = Math.trunc(number / 100);
    let tens = (Math.trunc(number / 10)) % 10;
    let ones = Math.trunc(number % 10);

    console.log(hundreds);
    console.log(tens);
    console.log(ones);

    let hundredsStr, tensStr, onesStr = '';
    if (number > 100) {
        switch (hundreds) {
            case 0:
                hundredsStr = '';
                break;
            case 1:
                hundredsStr = hrn[1] + ' hundred ';
                break;
            case 2:
                hundredsStr = hrn[2] + ' hundred ';
                break;
            case 3:
                hundredsStr = hrn[3] + ' hundred ';
                break;
            case 4:
                hundredsStr = hrn[4] + ' hundred ';
                break;
            case 5:
                hundredsStr = hrn[5] + ' hundred ';
                break;
            case 6:
                hundredsStr = hrn[6] + ' hundred ';
                break;
            case 7:
                hundredsStr = hrn[7] + ' hundred ';
                break;
            case 8:
                hundredsStr = hrn[8] + ' hundred ';
                break;
            case 9:
                hundredsStr = hrn[9] + ' hundred ';
                break;
        }
    } else {
        hundredsStr = '';
    }

    switch (tens) {
        case 2:
            tensStr = hrnTens[2];
            break;
        case 3:
            tensStr = hrnTens[3];
            break;
        case 4:
            tensStr = hrnTens[4];
            break;
        case 5:
            tensStr = hrnTens[5];
            break;
        case 6:
            tensStr = hrnTens[6];
            break;
        case 7:
            tensStr = hrnTens[7];
            break;
        case 8:
            tensStr = hrnTens[8];
            break;
        case 9:
            tensStr = hrnTens[9];
            break;
        case 0:
            tensStr = '';
            break;
    }

    switch (ones) {
        case 0:
            onesStr = '';
            break;
        case 1:
            onesStr = hrn[1];
            break;
        case 2:
            onesStr = hrn[2];
            break;
        case 3:
            onesStr = hrn[3];
            break;
        case 4:
            onesStr = hrn[4];
            break;
        case 5:
            onesStr = hrn[5];
            break;
        case 6:
            onesStr = hrn[6];
            break;
        case 7:
            onesStr = hrn[7];
            break;
        case 8:
            onesStr = hrn[8];
            break;
        case 9:
            onesStr = hrn[9];
            break;
    }
if (tens === 1) {
    switch (ones) {    
    case 0:
            tensStr = '';
            onesStr = hrnTens[10];
            break;
        case 1:
            tensStr = '';
            onesStr = hrnTens[11];
            break;
        case 2:
            tensStr = '';
            onesStr = hrnTens[12];
            break;
        case 3:
            tensStr = '';
            onesStr = hrnTens[13];
            break;
        case 4:
            tensStr = '';
            onesStr = hrnTens[14];
            break;
        case 5:
            tensStr = '';
            onesStr = hrnTens[15];
            break;
        case 6:
            tensStr = '';
            onesStr = hrnTens[16];
            break;
        case 7:
            tensStr = '';
            onesStr = hrnTens[17];
            break;
        case 8:
            tensStr = '';
            onesStr = hrnTens[18];
            break;
        case 9:
            tensStr = '';
            onesStr = hrnTens[19];
            break;
    }
}

return (hundredsStr + "" + tensStr + " " + onesStr);

}

