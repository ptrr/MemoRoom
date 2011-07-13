$(function(){
  rsz();

    var resizeTimer = null;
    $(window).bind('resize', function() {
        if (resizeTimer) clearTimeout(resizeTimer);
        resizeTimer = setTimeout(rsz, 100);
    });

});

Event.observe(window, 'load', function() {
  fadeout.delay(1.5, 'notice');
  fadeout.delay(1.5, 'alert');
});

function fadeout(element)
{
  if($(element) != undefined)
  {
    Effect.Fade(element, { duration: 1.5 });
  }
}

function show_element(element)
{
  if($(element).visible()) { element = 'files_and_folders'; }

  elements = ['files_and_folders', 'permissions', 'clipboard'];
  elements.splice(elements.indexOf(element), 1);

  elements.each(function(e) {
    if($(e) != undefined && $(e).visible()) { Effect.BlindUp(e, { duration: 0.5 }); }
  });

  Effect.BlindDown(element, { delay: 0.5, duration: 0.5 });
  if($('show_' + element + '_link') != undefined) { $('show_' + element + '_link').className = 'highlight'; }

  elements.each(function(e) {
    if($('show_' + e + '_link') != undefined) { $('show_' + e + '_link').className = 'folder_menu'; }
  });
}

function update_counter(element, counter)
{
  $(counter).innerHTML = element.value.length;
  $(counter).style.color = element.value.length > 256 ? '#F00' : '#000';
}

function rsz(){
    if($(window).height() < 500){
        $("#main").height(500)
    } else {
        $("#main").height($(window).height() - 160);
    }
}

