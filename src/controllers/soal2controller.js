exports.celcius = (req, res) => {
    let celcius = Number(req.body.celcius);

    let fahrenheit = celcius * 9/5 + 32;
    let reamur = celcius * 4/5;
    let kelvin = celcius + 273;

    let response = {
        "celcius" : celcius,
        "result" : {
            "fahrenheit": fahrenheit,
            "reamur": reamur,
            "kelvin": kelvin
        }
    };

    return res.json(response);

};

exports.reamur = (req, res) => {
    let reamur = Number(req.body.reamur);

    let celcius = reamur * 5/4
    let fahrenheit = (reamur * 9/4) + 32
    let kelvin = (9/4 * reamur) + 273

    let response = {
        "reamur" : reamur,
        "result" : {
            "fahrenheit": fahrenheit,
            "celcius": celcius,
            "kelvin": kelvin
        }
    };

    return res.json(response);

};

exports.kelvin = (req, res) => {
    let kelvin = Number(req.body.kelvin);

    let reamur = (kelvin - 273) * 4/5;
    let celcius = kelvin - 273;
    let fahrenheit = (kelvin -273) * 9/5 + 32

    let response = {
        "kelvin" : kelvin,
        "result" : {
            "fahrenheit": fahrenheit,
            "reamur": reamur,
            "celcius": celcius
        }
    };

    return res.json(response);

};

exports.fahrenheit = (req, res) => {
    let fahrenheit = Number(req.body.fahrenheit);

    let celcius = (fahrenheit - 32) * 5/9;
    let reamur = (fahrenheit - 32) * 4/9;

    let response = {
        "fahrenheit" : fahrenheit,
        "result" : {
            "celcius": celcius,
            "reamur": reamur
        }
    };

    return res.json(response);

};