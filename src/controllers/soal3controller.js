exports.decimal = (req, res) => {
    let decimal = Number(req.body.dec)

    let biner = decimal.toString(2)
    let octal = decimal.toString(8)
    let hex = decimal.toString(16).toUpperCase()

    let response = {
        decimal: decimal,
        biner: biner,
        octal: octal,
        hexadecimal: hex
    }
    return res.json(response)
}

exports.biner = (req, res) => {
    let bin = Number(req.body.bin)

    let decimal = perseInt(bin, 2)
    let octal = perseInt(bin, 2).toString(8)
    let hex = perseInt(bin, 2).toString(16).toUpperCase()

    let response = {
        biner: bin,
        decimal: decimal,
        octal: octal,
        hexadecimal: hex
    }
    return res.json(response)
}

exports.octal = (req, res) => {
    let octal = Number(req.body.oc)

    let decimal = perseInt(oc, 8)
    let biner = decimal.toString(2)
    let hex = decimal.toString(16).toUpperCase()

    let response = {
        octal: octal,
        decimal: decimal,
        biner: biner,
        hexadecimal: hex
    }
    return res.json(response)
}

exports.hexadecimal = (req, res) => {
    let hex = Number(req.body.hex)

    let decimal = perseInt(hex, 16)
    let biner = decimal.toString(2)
    let octal = decimal.toString(8)

    let response = {
        hexadecimal: hex,
        decimal: decimal,
        biner: biner,
        octal: octal
    }
    return res.json(response)
}