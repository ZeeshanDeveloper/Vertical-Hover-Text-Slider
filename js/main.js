////main
$(document).ready(function () {
    var someNumbers = [];
    var tempOrder;
    var order = 0;
    var dt = new Date();
    var time = dt.getHours() + ":" + dt.getMinutes();
    $('.main-content').each(function () {
        if ($(this).attr('id') == 'home') {
            someNumbers = ['Brand It', 'Elgant', 'Creative', 'Young', 'Sharp', 'Unique'];

            $(this).find('p').append(" <span date-order='" + order + "' class='transition-top brand-anim'><i>" + someNumbers[order] + "</i></span>");
        }
        else if ($(this).attr('id') == 'contact') {
            someNumbers = ['Karachi', time];
            $(this).find('p').append(" <span date-order='" + order + "' class='transition-top'>" + someNumbers[order] + "</span>");
        }
        else {
        }
    });

    var firsttime = 0;
    $(".main-content p").hover(function () {
        if (firsttime != 1) {
            $(this).find('span').addClass("gone")
            setTimeout(function () {
                $('.gone').remove();
                $('.coming').removeClass('coming');
            }, 0200);

            tempOrder = $(this).find('span').attr('date-order');
            order = order + 1;

            var abc = someNumbers.length;
            if (abc == order) {
                order = 0;
            }

            $(this).find('span').after(" <span date-order='" + order + "' class='coming scroll transition-top'>" + someNumbers[order] + "</span>")

            setTimeout(function () {
                $(this).find('span').siblings('.coming').removeClass("coming");
            }, 0100);
        }
        firsttime = 1;
    }, function () {
        firsttime = 0;
        $(this).find('span').addClass("gone");
        setTimeout(function () {
            $('.gone').remove();
            $('.coming').removeClass('coming');
        }, 0200);

        tempOrder = $(this).find('span').attr('date-order');
        order = order + 1;

        var abc = someNumbers.length;
        if (abc == order) {
            order = 0;
        }

        $(this).find('.gone').after(" <span date-order='" + order + "' class='coming transition-top'>" + someNumbers[order] + "</span>")
        setTimeout(function () {
            $(this).find('.coming').removeClass("coming");
        }, 0100);
    });
  });
