(function () {
  'use strict';

  /**
   * Úr sýnilausn fyrir verkefni 7.
   */

  /**
   * Hreinsa börn úr elementi
   *
   * @param {object} element Element sem á að hreinsa börn úr
   */

  var startButton = document.getElementByClassName("start");
  startButton.addEventListener("click", start());
  /**
   * Byrjar leik
   *
   * - Felur startButton og sýnir problem
   * - Núllstillir total og correct
   * - Kallar í fyrsta sinn í tick()
   * - Sýnir fyrstu spurningu
   */


  function start() {
    startButton = document.getElementByClassName("startButton");
  }
  /**
   * Finnur öll element DOM og setur upp event handlers.
   *
   * @param {number} _playTime Fjöldi sekúnda sem hver leikur er
   */


  function init(_playTime) {
    startButton = document.getElementByClassName("start");
    document.addEventListener("start", start()); // todo útfæra
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  /**
   * Útbúa stigatöflu, sækir gögn í gegnum storage.js
   */

  var Highscore =
  /*#__PURE__*/
  function () {
    function Highscore() {
      _classCallCheck(this, Highscore);

      this.scores = document.querySelector('.highscore__scores');
      this.button = document.querySelector('.highscore__button');
      this.button.addEventListener('click', this.clear.bind(this));
    }
    /**
     * Hlaða stigatöflu inn
     */


    _createClass(Highscore, [{
      key: "load",
      value: function load() {} // todo útfæra

      /**
       * Hreinsa allar færslur úr stigatöflu, tengt við takka .highscore__button
       */

    }, {
      key: "clear",
      value: function clear() {} // todo útfæra

      /**
       * Hlaða inn stigatöflu fyrir gefin gögn.
       *
       * @param {array} data Fylki af færslum í stigatöflu
       */

    }, {
      key: "highscore",
      value: function highscore(data) {// todo útfæra
      }
    }]);

    return Highscore;
  }();

  var PLAY_TIME = 10;
  document.addEventListener('DOMContentLoaded', function () {
    init(PLAY_TIME);
    var highscore = new Highscore();
    highscore.load();
  });

}());
//# sourceMappingURL=bundle.js.map
