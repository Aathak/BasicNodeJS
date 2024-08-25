exports.kubus = (req, res) => {
    let sisi = Number(req.body.sisi);

    let luaspermukaan = sisi * sisi * sisi;
    let volume = 6 * (sisi * sisi);

    let response = {
        sisi: sisi,
        luaspermukaan: luaspermukaan,
        volume: volume
    };

    return res.json(response);

};

exports.balok = (req, res) => {
    let panjang = Number(req.body.panjang);
    let lebar = Number(req.body.lebar);
    let tinggi = Number(req.body.tinggi);

    let luaspermukaan = (2 * panjang * lebar) + (2 * panjang * tinggi) * (2 * lebar * tinggi);
    let volume = panjang * lebar * tinggi;

    let response = {
        panjang: panjang,
        lebar: lebar,
        tinggi: tinggi,
        luaspermukaan: luaspermukaan,
        volume: volume
    };

    return res.json(response);

};

exports.bola = (req, res) => {
    let jarijari = Number(req.body.jarijari);

    let luaspermukaan = Math.PI * 4 * jarijari * jarijari
    let volume = 4/3 * Math.PI * jarijari * jarijari * jarijari;

    let response = {
        jarijari : jarijari,
        luaspermukaan: luaspermukaan,
        volume: volume
    };

    return res.json(response);

};

exports.tabung = (req, res) => {
    let jarijari = Number(req.body.jarijari);
    let tinggi = Number(req.body.tinggi);

    let luaspermukaan = (2 * Math.PI * jarijari * tinggi) + (2 * Math.PI * jarijari * jarijari)
    let volume = Math.PI * jarijari * jarijari * tinggi

    let response = {
        jarijari : jarijari,
        tinggi: tinggi,
        luaspermukaan: luaspermukaan,
        volume: volume
    };

    return res.json(response);

};

