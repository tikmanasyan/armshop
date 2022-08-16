jQuery(document).ready(function ($) {
    function printProducts(products) {
        if(products.length > 0) {
            let row = '';
            products.forEach( product => {
                row += `<div>
                            <img src="" alt="">

                        </div>`;
            })
        }
    }

    $.ajax({

    });
});