const offers = new Map([
    ["12345", {
        "offers": [
            {
                "order_id": 12345,
                "krs_e_number": "2313445",
                "status": "B",
                "negotiations": [
                    {
                        "paper_count": 12,
                        "price": "21",
                        "negotiation_id": "12"
                    }
                ]
            }
        ],
        "page_envelope": {
            "page": 1,
            "items_on_page": 2,
            "total_pages": 1
        }
    }],
    ["98765", {
        "offers": [
            {
                "order_id": 98765,
                "krs_e_number": "998877",
                "status": "A",
                "negotiations": [
                    {
                        "paper_count": 20,
                        "price": "30",
                        "negotiation_id": "55"
                    },
                    {
                        "paper_count": 15,
                        "price": "25",
                        "negotiation_id": "56"
                    }
                ]
            },
            {
                "order_id": 54321,
                "krs_e_number": "112233",
                "status": "B",
                "negotiations": [
                    {
                        "paper_count": 10,
                        "price": "18",
                        "negotiation_id": "32"
                    }
                ]
            }
        ],
        "page_envelope": {
            "page": 1,
            "items_on_page": 2,
            "total_pages": 2
        }
    }
    ]
]);

const producePageEnvelope = (items_on_page) => {
    return {
        "page_envelope": {
            "page": 1,
            "items_on_page": `${items_on_page}`,
            "total_pages": 1
        }
    }
}

const produceErrorResponse = (comment = '') => {
    return `
{
  "comment": [
    "${comment}"
  ]
}
`
    //It does work, plz no complaining ;)
}

module.exports = {
    offers,
    produceErrorResponse,
    producePageEnvelope
}