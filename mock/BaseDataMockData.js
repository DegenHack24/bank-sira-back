const peers = {
    "allowed_list": [
        {
            "api_version": "v2.0.1",
            "url": "http://localhost:8080",
            "ppra_name": "BM PKO BP"
        },
        {
            "api_version": "v2.0.1",
            "url": "http://localhost:8081",
            "ppra_name": "ING Bank Śląski S.A."
        }
    ],
    "blocked_list": [
        {
            "api_version": "v2.0.0",
            "url": "https://example.com/api",
            "ppra_name": "Millenium"
        }
    ]
};

const issuers = {
    "issuers": [
        {
            "name": "Firma",
            "krs_e_number": "2233232",
            "registration_date": "2014-12-03",
            "address": "ul. Puławska 15, 03-682 Warszawa",
            "nip": "5384354",
            "regon": "5384354",
            "number_of_my_assets": 340,
            "my_share_in_equity": 0.12
        }
    ],
    "page_envelope": {
        "page": 1,
        "items_on_page": 20,
        "total_pages": 20
    }
}

module.exports = {
    issuers,
    peers
}