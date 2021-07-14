export default function ProductModule() {
  // PRODUCT FILTER
  $('.pd-filter-item .title').on('click', function () {
    $(this).next('.list').stop().slideToggle();
  });
  $('.pd-filter-mobile').on('click', () => {
    $('.pd-filter').toggleClass('--active');
    $('body').toggleClass('stop-scrolling');
  });
  $('.pd-filter-close').on('click', () => {
    $('.pd-filter').removeClass('--active');
    $('body').removeClass('stop-scrolling');
  });

  // COMPARE PRODUCT
  // const render = () => {
  //   const pdList = JSON.parse(localStorage.getItem('pd-list')) || [];
  //   let rs = '';
  //   pdList.forEach((p) => {
  //     rs += `<div class="item">
  //     <div class="remove" data-id="${p.id}">
  //       <a href="${p.url}">
  //         <img src="${p.stie_url}/template/images/icon-remove.png" alt="" />
  //       </a>
  //     </div>
  //     <div class="img">
  //       <a href="${p.url}">
  //         <img src="${p.urlImg}" alt="" />
  //       </a>
  //     </div>
  //     <div class="content">
  //       <p><a href="${p.url}">${p.title}</a></p>
  //     </div>
  //     <div class="pd-dt-btn mona-btn-add-compare">
  //       <a data-product='{"productId": "${p.dataId}"}' href="javascript:;" class="main-btn btn-border compare-action is-loading-btn">Chọn</a>
  //     </div>
  //   </div>`;
  //   });
  //   $('.select-compare-list').html(rs);
  //   $('.select-compare').removeClass('--hidden');
  // };
  // const methodCompare = {
  //   add(data) {
  //     const pdList = JSON.parse(localStorage.getItem('pd-list')) || [];
  //     const pdAlready = pdList.find((pd) => pd.id === data.id);
  //     if (pdList.length >= 4) {
  //       alert('Chỉ được chọn tối đa 4 sản phẩm');
  //       return;
  //     }
  //     if (pdAlready) {
  //       alert('Sản phẩm đã được chọn');
  //       return;
  //     }
  //     pdList.push(data);
  //     localStorage.setItem('pd-list', JSON.stringify(pdList));
  //   },
  //   remove(id) {
  //     const pdList = JSON.parse(localStorage.getItem('pd-list')) || [];
  //     const pdNewList = pdList.filter((pd) => pd.id !== id);
  //     if (pdNewList.length <= 0) {
  //       $('.select-compare').addClass('--close');
  //     }
  //     localStorage.setItem('pd-list', JSON.stringify(pdNewList));
  //   },
  // };
  // $('.c-pd-compare').on('click', function (e) {
  //   e.preventDefault();
  //   const data = JSON.parse($(this).attr('data-pd'));
  //   $('.select-compare').removeClass('--close');
  //   methodCompare.add(data);
  //   render();
  // });
  // $('.select-compare-action').on('click', function () {
  //   const isHidden = this.classList.contains('select-compare-hide') ?
  //     true :
  //     false;
  //   if (isHidden) {
  //     $('.select-compare').toggleClass('--hidden');
  //   } else {
  //     $('.select-compare').addClass('--close');
  //   }
  // });
  // $('.select-compare-close').on('click', () => {
  //   $('.select-compare').addClass('--close');
  //   localStorage.removeItem('pd-list');
  // });
  // $('.select-compare-list ').on('click', '.remove', function (e) {
  //   e.preventDefault();
  //   const id = $(this).data('id');
  //   methodCompare.remove(id);
  //   render();
  // });
  // $('.header-compare').on('click', function (e) {
  //   e.preventDefault();
  //   $('.select-compare').removeClass('--close');
  // });
  // render();

  $('.banner-item .main-title').on('click', (e) => e.preventDefault())

  // SET HEIGHT COMPARE LIST
  $('.compare-col').each((idx, col) => {
    $(col).find('li').each((idx2, li) => {
      let maxH = $(li).outerHeight();
      const siblings = $(li).parents('.compare-col').siblings();
      $(siblings).each((_, col2) => {
        const height = $(col2).find('li').eq(idx2).outerHeight();
        if (height >= maxH) {
          maxH = height;
        }
        $(col2).find('li').eq(idx2).css('height', `${maxH}px`);
      });
    })
  })
  if (document.querySelectorAll('.compare-col').length >= 4) {
    document.querySelector('.compare-col').style.bottom = '.3rem'
  }

}