$('.owl-carousel').owlCarousel({
    items:1,
    margin:10,
    autoHeight:true
});

owl.on('changed.owl.carousel', function(event) { 
console.log(event)
})