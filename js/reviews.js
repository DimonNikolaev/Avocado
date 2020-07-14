$('.reviews_rating').each(function (index, element) {


    let rate = $(element).find('.reviews_rate').text();
    let ratePercent = '"' + (parseFloat(rate) / 5 * 100) * 2 + '%' + '"';

    let newElement = $('<svg viewBox="0 0 200 40" x="0" y="0" width="200px" height="40px" fill="url(#Gradient' + index + ')"\n' +
        '    xmlns="http://www.w3.org/2000/svg">\n' +
        '\n' +
        '        <path d="M20 0L24.4903 13.8197H39.0211L27.2654 22.3607L31.7557 36.1803L20 27.6393L8.2443 36.1803L12.7346 22.3607L0.97887 13.8197H15.5097L20 0Z\n' +
        '    M61 0L65.4903 13.8197H80.0211L68.2654 22.3607L72.7557 36.1803L61 27.6393L49.2443 36.1803L53.7346 22.3607L41.9789 13.8197H56.5097L61 0Z\n' +
        '    M101 0L105.49 13.8197H120.021L108.265 22.3607L112.756 36.1803L101 27.6393L89.2443 36.1803L93.7346 22.3607L81.9789 13.8197H96.5097L101 0Z\n' +
        '    M141 0L145.49 13.8197H160.021L148.265 22.3607L152.756 36.1803L141 27.6393L129.244 36.1803L133.735 22.3607L121.979 13.8197H136.51L141 0Z\n' +
        '    M181 0L185.49 13.8197H200.021L188.265 22.3607L192.756 36.1803L181 27.6393L169.244 36.1803L173.735 22.3607L161.979 13.8197H176.51L181 0Z"/>\n' +
        '    <linearGradient id="Gradient' + index + '" x1="0" y1="0" ' + 'x2=' + ratePercent + 'y2="0">\n' +
        '        <stop offset="50%" stop-color="#FFC148"/>\n' +
        '        <stop offset="50%" stop-color="#EAEAEA"/>\n' +
        '        </linearGradient>\n' +
        '        </svg>');

    $(element).find('.reviews_stars').append(newElement);
});