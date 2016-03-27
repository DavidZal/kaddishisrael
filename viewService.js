exports.plans = {
    features: [
        "Kaddish three times daily for the first year",     //0
        "Torah learning daily for the first year",          //1
        "Kaddish three times daily on the first yahrzeit", //2
        "Torah learning on the first yahrzeit",               //3
        "Kaddish three times daily on the yahrzeit annually", //4
        "Torah learning on the yahrzeit annually"              //5

    ],
    planItems: [
    {
        name: 'level 4',
        price: "$450",
        features: [4, 5,1],
        headerColor: '#F0E68C'
    },
    {
        name: 'level 3',
        price: "$350",
        features: [2, 3, 1],
        headerColor: '#EEE8AA'
    },
   {
       name: 'level 2',
       price: "$150",
       features: [4, 5],
       headerColor: '#FFFBB7'
   },
   {
       name: 'level 1',
       price: "$65",
       features: [2, 3],
       headerColor: '#FFFFE0'
   }
    ]
};




exports.getNav = function (url) {
    var pages = [
    { name: 'home', url: '/' },
    { name: 'contact us', url: '/contact' },
    { name: 'about us', url: '/about' },
    { name: 'programs', url: '/order' },
    ];

    pages.forEach(function (o) {
        if (o.url == url)
            o.active = true;
    });

    return pages;
}

