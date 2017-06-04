$( document ).ready(() => {
  $("img.designer").each(function() {
    if ($(this).width() > 1.2*$(this).height()) {
      $(this).addClass("wide");
      $(this).parent().addClass("short");
    }
  });
})
