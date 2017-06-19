const DOC = $(document);

class Modal {
    constructor() {
       this.button = '.js-modal-btn';
       this.overlay = '.js-overlay';
       this.modal = $('.js-modal');
       this.slider = $('.js-slider-modal');
       this.slideTitle = '.js-slide-title';
       this.slideImage = '.js-slide-image';
       this.slideText = '.js-slide-descr';
       this.slideDate = '.js-slide-date';
    }

    init() {
        this._open();
        this._close();
    }

    _open() {
        DOC.on('click', this.button, function(e) {
            const target = $(e.currentTarget);
            let slideID = target.closest('.slider').data('slider');
            let currentSlide = $('[data-slider="' + slideID +'"]').find('.slider__item:not(.slick-cloned)');
            let sliderLength = $('[data-slider="' + slideID +'"]').find('.slider__item:not(.slick-cloned)').length;
            let slideNumber = target.parent().index() - 1;
                if(slideNumber > sliderLength) slideNumber = 1;  


            currentSlide.each(function(i, elem) {
                let image = $(elem).find(this.slideImage).data('href');
                let title = $(elem).find(this.slideTitle).html();
                let descr = $(elem).find(this.slideText).html();
                let date = $(elem).find(this.slideDate).html();
                
                $(this.slider).append('<div class="modal__item modal-slide"/>');
                $('.modal-slide').eq(i).append('<div class="modal-slide__title"/>');
                $('.modal-slide').eq(i).append('<div class="modal-slide__image"/>');
                $('.modal-slide').eq(i).append('<div class="modal-slide__descr"/>');
                $('.modal-slide').eq(i).append('<div class="modal-slide__date"/>');

                $('.modal-slide__title').eq(i).html(title);
                $('.modal-slide__descr').eq(i).html(descr);
                $('.modal-slide__date').eq(i).html(date);
                $('.modal-slide__image').eq(i).css('background-image', 'url(' + image + ')');
            }.bind(this))


            this.modal.addClass('is-show');
            this.slider.slick({
                fade: true,
                initialSlide: slideNumber - 1
            });

            $('.modal-slide').append('<div class="modal-slide__id"/>')
            $('.modal-slide__id').html(slideNumber + ' / ' + sliderLength)

            this.slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
              $('.modal-slide__id').html(nextSlide + 1 + ' / ' + sliderLength)
            }.bind(this));

        }.bind(this))
    }
    _close() {
        DOC.on('click', this.overlay, function() {
            this.modal.removeClass('is-show');
            this.slider.slick('unslick');
            this.slider.find('.modal__item').remove();
        }.bind(this))
    }
}

let modal = new Modal();
modal.init();