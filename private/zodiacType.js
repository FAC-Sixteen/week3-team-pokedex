let zodiacType = function(sign, callback) {
    if (sign === 'pisces' || sign === 'cancer' || sign === 'scorpio'){
        return callback('water')
    }

    if (sign === 'aries' || sign === 'leo' || sign === 'sagittarius'){
        return callback('fire')
    }

    if (sign === 'taurus' || sign === 'virgo' || sign === 'capricorn'){
        return callback('earth')
    }

    if (sign === 'gemini' || sign === 'libra' || sign === 'aquarius'){
        return callback('air')
    }
}
