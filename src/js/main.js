var owl = $('.owl-carousel').owlCarousel({
    items:1,
    margin:10,
    autoHeight:true,
    onInitialized: function () {
        $('<span class="testimonials__counts">1/6</span>').prependTo('.testimonials .owl-nav')
    }
});

owl.on('changed.owl.carousel', function(event) {
    console.log(event)
    $('.testimonials__counts').text((event.page.index + 1) + ' / ' + event.page.count)
})
