var random = new Array();

random[0] = "https://hub.nimiq-testnet.com/cashlink/#o7PkqXS8YTbTHnWw5qwpQHRJzKDLBQRPJP79V3lbaosAAAAAAAAnEAdUaGFua3Mx"
random[1] = "https://hub.nimiq-testnet.com/cashlink/#h55vol_897tOqnrL8yKL6SCXROoe7aM_fUc7VJRbXFAAAAAAAAAnEAd0aGFua3My"
random[2] = "https://hub.nimiq-testnet.com/cashlink/#f-pLwPMJA_H7Z_1Hb7a5zwyApr0a4e0RDYr4rHUcS40AAAAAAAAnEAd0aGFua3Mz"
random[3] = "https://hub.nimiq-testnet.com/cashlink/#xexlP4pHQgOBBBIxEnoVRaCWTO_jH9m_rOGdfqOPggkAAAAAAAAnEAd0aGFua3M0"
random[4] = "https://hub.nimiq-testnet.com/cashlink/#S37PyYXQ7lOvI6a7z7QlQbyQQ6olrfGRun-R2pSs-QoAAAAAAAAnEAd0aGFua3M1"
random[5] = "https://hub.nimiq-testnet.com/cashlink/#iBx5Y2u4mU3oEXqqQdnFqOT0hvH8tfXhdbzmqWD4Ss8AAAAAAAAnEAd0aGFua3M2"
random[6] = "https://hub.nimiq-testnet.com/cashlink/#HOxLCTViY7Nlel3K7K73nIK-eGv2lHzM-WHhZO4JKK4AAAAAAAAnEAd0aGFua3M3"
random[7] = "https://hub.nimiq-testnet.com/cashlink/#oGZ6XgjZsdPPJ5NGYuNUhTMXT7AuYz6n1q9FXfJpdsoAAAAAAAAnEAd0aGFua3M4"
random[8] = "https://hub.nimiq-testnet.com/cashlink/#-HUIR_CTzKwfhK6nqBU2CohMRVlAVB4Mg-sRQTkSwXgAAAAAAAAnEAd0aGFua3M5"
random[9] = "https://hub.nimiq-testnet.com/cashlink/#Rw4g2U0gfh7RfLvZUqI6JqL5pt7Kd2X91_JiUFKYOhwAAAAAAAAnEAh0aGFua3MxMA=="
random[10] = "https://www.nimiq.com/"



var arr = []

function randomlink() {
    var randomUrl = random[Math.ceil(Math.random() * 12 + 1)]
    console.log(arr.indexOf(randomUrl))
    if (arr.indexOf(randomUrl) > -1) {
        randomlink();
    };
    console.log(randomUrl);
    window.location = randomUrl;
    arr[arr.length] = randomUrl;
}