//Gets Current Bitcoin Prices

function fetchData() {
    fetch('https://blockchain.info/ticker')
        .then(res => {
            if (!res.ok) {
                throw error('Error');
            }
            return res.json();
        })
        .then(data => {

            //Loops through the data and appends currency code to select

            Object.keys(data).forEach(key => {

                $('.selCurr').append(`<option>${key}</option>`);
                $('.selCurr2').append(`<option>${key}</option>`);

                //Inserts data into the html

                $('.selCurr').change(function() {
                    if (this.value === data[key].symbol) {
                        $('.curr').html(`BTC → ${data[key].symbol}`)
                        $('.15m').html(`15m: ${data[key]['15m']}`)
                        $('.last').html(`Last: ${data[key].last}`)
                        $('.buy').html(`Buy: ${data[key].buy}`);
                        $('.sell').html(`Sell: ${data[key].sell}`);

                        //Displays selected country name to the user

                        switch (this.value) {
                            case 'AUD':
                                $('.country').html(`Bitcoin To Australian Dollar`);
                                break;
                            case 'BRL':
                                $('.country').html(`Bitcoin To Brazillian Real`);
                                break;
                            case 'CAD':
                                $('.country').html(`Bitcoin To Canadian Dollar`);
                                break;
                            case 'CHF':
                                $('.country').html(`Bitcoin To Swiss Franc`);
                                break;
                            case 'CLP':
                                $('.country').html(`Bitcoin To Chliean Peso`);
                                break;
                            case 'CNY':
                                $('.country').html(`Bitcoin To Chinese Yuan`);
                                break;
                            case 'CZK':
                                $('.country').html(`Bitcoin To Czech Koruna`);
                                break;
                            case 'DKK':
                                $('.country').html(`Bitcoin To Danish Krone`);
                                break;
                            case 'EUR':
                                $('.country').html(`Bitcoin To Euro`);
                                break;
                            case 'GBP':
                                $('.country').html(`Bitcoin To British Pound`);
                                break;
                            case 'HKD':
                                $('.country').html(`Bitcoin To Hong Kong Dollar`);
                                break;
                            case 'HRK':
                                $('.country').html(`Bitcoin To Croatian Kuna`);
                                break;
                            case 'HUF':
                                $('.country').html(`Bitcoin To Hungarian Forint`);
                                break;
                            case 'INR':
                                $('.country').html(`Bitcoin To Indian Rupee`);
                                break;
                            case 'ISK':
                                $('.country').html(`Bitcoin To Icelandic Króna`);
                                break;
                            case 'JPY':
                                $('.country').html(`Bitcoin To Japanese Yen`);
                                break;
                            case 'KRW':
                                $('.country').html(`Bitcoin To South Korean Won`);
                                break;
                            case 'NZD':
                                $('.country').html(`Bitcoin To New Zealand Dollar`);
                                break;
                            case 'PLN':
                                $('.country').html(`Bitcoin To Poland Złoty`);
                                break;
                            case 'RON':
                                $('.country').html(`Bitcoin To Romanian Leu`);
                                break;
                            case 'RUB':
                                $('.country').html(`Bitcoin To Russian Ruble`);
                                break;
                            case 'SEK':
                                $('.country').html(`Bitcoin To Swedish Krona`);
                                break;
                            case 'SGD':
                                $('.country').html(`Bitcoin To Singapore Dollar`);
                                break;
                            case 'THB':
                                $('.country').html(`Bitcoin To Thai Baht`);
                                break;
                            case 'TRY':
                                $('.country').html(`Bitcoin To Turkish Lira`);
                                break;
                            case 'TWD':
                                $('.country').html(`Bitcoin To Taiwan Dollar`);
                                break;
                            case 'USD':
                                $('.country').html(`Bitcoin To US Dollar`);
                                break;

                        }
                    }

                });

            });

        })

    .catch(error => {
        console.log(error)
    });

}

//Function Call
fetchData();


//Gets Prices Of A Given Value

$('.run').click(function() {
    const url = new URL('https://blockchain.info/tobtc?')

    //Sets Parameters For Query String

    let params = { currency: $('.selCurr2').val(), value: $('.value').val() }
    url.search = new URLSearchParams(params).toString();


    fetch(url)
        .then(res => {
            if (!res.ok) {
                throw error('Error');
            }
            return res.json();

        })
        .then(data => {
            //Uses data to display bitcoin value in the html

            $('.result').html(`<h4>${data} Bitcoin</h4>`);


        })


    .catch(error => {
        console.log(error)
    });

})