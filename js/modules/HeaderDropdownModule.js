export default function MenuDropdownModule() {
  if ($('.header').length) {
    /** MENU IN MOBILE */
    $('.header__list  .dropdown').each(function () {
      const dropdown = $(this);
      const arrows = $('<i></i>');
      arrows.addClass('fa fa-angle-down');
      dropdown.find('a').eq(0).append(arrows);
      // add back btn

    });

    const prevBtn = `<div class="prev-btn">
                      <div class="icon">
                        <i
                          class="fa fa-angle-left"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <p>Sản phẩm</p>
                    </div>`;
    $(prevBtn).insertBefore('.header__list > .dropdown > .sub-menu-wrap > .sub-menu > ul')

    $('.header__list .dropdown .fa').each(function () {
      const dropdown = $(this).closest('.dropdown');
      $(this).on('click', function (e) {
        e.preventDefault();
        // CLOSE MENU SIBLING
        dropdown.siblings().removeClass('--show');
        dropdown.siblings().find('.sub-menu').slideUp();
        dropdown.siblings().find('.fa').removeClass('--active');

        // MOVE BODY TO LEFT
        // OPEN MENU CLICKED
        dropdown.toggleClass('--show');
        // $(this).parent().next('.sub-menu').stop().slideToggle();
        // $(this).toggleClass('--active');
      });
    });


    /** MENU IN MOBILE - END */
  }
}
