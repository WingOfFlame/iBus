import 'jquery';
import 'bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function init() {
  $('#searchBar').submit(function() {
    /* fetch data*/
    return false;
  });

  $('#sideNav a').click(function(e) {
    e.preventDefault()
    $(this).tab('show')
  });

  $('#topNav a').click(function(e) {
    e.preventDefault()
    $(this).tab('show')
    $('#myNavbar').collapse('toggle')
  });

  /* https://bootsnipp.com/snippets/3kB4m collapse panel*/
  function toggleIcon(e) {
    $(e.target)
      .prev('.panel-heading')
      .find(".more-less")
      .toggleClass('glyphicon-plus glyphicon-minus');
  }
  $('.panel-group').on('hidden.bs.collapse', toggleIcon);
  $('.panel-group').on('shown.bs.collapse', toggleIcon);

}

$(document).ready(init());
