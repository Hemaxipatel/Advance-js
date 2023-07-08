function convertCurrency() {
    var amount = parseFloat(document.getElementById('amount').value);
    var fromCurrency = document.getElementById('fromCurrency').value;
    var toCurrency = document.getElementById('toCurrency').value;
    var convertedAmount;

    //conversion rate
    var conversionRates = {
        INR: {
            USD: 0.012,
            EUR: 0.011,
            GBP: 0.0095
        },
        USD: {
            EUR: 0.84,
            GBP: 0.72,
            INR: 82.74
        },
        EUR: {
            USD: 1.19,
            GBP: 0.86,
            INR: 90.03
        },
        GBP: {
            USD: 1.39,
            EUR: 1.17,
            INR: 105.37
        }
    }
    if (fromCurrency === toCurrency) {
        convertedAmount = amount
    } else {
        convertedAmount = amount * conversionRates[fromCurrency][toCurrency]
    }
    document.getElementById('result').textContent = convertedAmount.toFixed(3) + ' ' + toCurrency;
}
