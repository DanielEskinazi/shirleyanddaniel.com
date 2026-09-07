// Countdown to the ceremony (home page)
(function () {
  var el = document.getElementById('countdown');
  if (!el) return;
  var target = new Date('2027-01-02T17:30:00-05:00').getTime();
  var cells = {
    days: document.getElementById('cd-days'),
    hours: document.getElementById('cd-hours'),
    mins: document.getElementById('cd-mins'),
    secs: document.getElementById('cd-secs'),
  };
  function tick() {
    var d = Math.max(0, target - Date.now());
    var days = Math.floor(d / 86400000); d -= days * 86400000;
    var hours = Math.floor(d / 3600000); d -= hours * 3600000;
    var mins = Math.floor(d / 60000); d -= mins * 60000;
    var secs = Math.floor(d / 1000);
    cells.days.textContent = days;
    cells.hours.textContent = hours;
    cells.mins.textContent = mins;
    cells.secs.textContent = secs;
  }
  tick();
  setInterval(tick, 1000);
})();

// Story photo carousel (our story page)
(function () {
  document.querySelectorAll('.story-carousel').forEach(function (carousel) {
    var track = carousel.querySelector('.carousel-track');
    carousel.querySelectorAll('.carousel-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var dir = btn.classList.contains('next') ? 1 : -1;
        track.scrollBy({ left: dir * track.clientWidth * 0.8, behavior: 'smooth' });
      });
    });
  });
})();

// Drive-time map origin selector (travel page)
(function () {
  var map = document.getElementById('drive-map');
  if (!map) return;
  var dest = 'Villa+Toscana+Miami,+Homestead,+FL';
  var link = document.getElementById('drive-link');
  var buttons = document.querySelectorAll('.origin-btn');
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      buttons.forEach(function (b) { b.classList.remove('selected'); });
      btn.classList.add('selected');
      var from = btn.dataset.from;
      map.src = 'https://maps.google.com/maps?saddr=' + from + '&daddr=' + dest + '&output=embed';
      link.href = 'https://www.google.com/maps/dir/' + from + '/' + dest;
    });
  });
})();
