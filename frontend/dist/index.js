/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./src/appControl/backdropChangeInterval.js":
/*!**************************************************!*\
  !*** ./src/appControl/backdropChangeInterval.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var index = 1;
  setInterval(function () {
    var backdrops = document.querySelectorAll('.backdrop-img');
    var currentBackdrop = document.querySelector('.backdrop-img.shown');
    index %= backdrops.length;
    currentBackdrop.className = 'backdrop-img hidden';
    backdrops[index].className = 'backdrop-img shown';
    index += 1;
  }, 7000);
});

/***/ }),

/***/ "./src/appControl/championModalController.js":
/*!***************************************************!*\
  !*** ./src/appControl/championModalController.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ChampionModalController = function () {
  var toggleActiveAbility = function toggleActiveAbility(clickedAbilityId) {
    var abilityImages = document.querySelectorAll('.spell-img');
    var abilityInfos = document.querySelectorAll('.ability-info');
    abilityImages.forEach(function (img) {
      img.classList.remove('clicked');
    });
    abilityInfos.forEach(function (info) {
      info.classList.remove('active');
    });
    var clickedImage = document.querySelector("#".concat(clickedAbilityId, "-img"));
    clickedImage.className = 'spell-img clicked';
    var activeAbility = document.querySelector("#".concat(clickedAbilityId, "-ability"));
    activeAbility.className = 'ability-info active';
  };

  var changeModalTemplate = function changeModalTemplate(clickedModalNavLink) {
    var templates = document.querySelectorAll('.modal-template');
    templates.forEach(function (template) {
      var templateName = template.id.substring(0, template.id.indexOf('-'));

      if (templateName === clickedModalNavLink.id) {
        var chosenTemplate = template;
        chosenTemplate.style.display = 'block';
      } else {
        var hiddenTemplate = template;
        hiddenTemplate.style.display = 'none';
      }
    });
  };

  var dispayItemDetails = function dispayItemDetails(hoveredItemImage) {
    var itemDetails = hoveredItemImage.nextElementSibling;
    itemDetails.style.display = 'flex';
  };

  var hideItemDetails = function hideItemDetails(unhoveredItemImage) {
    var itemDetails = unhoveredItemImage.nextElementSibling;
    itemDetails.style.display = 'none';
  };

  var toggleSkinImages = function toggleSkinImages(arrowClassList) {
    var skinImagesContainer = document.querySelector('.skin-images-container');
    var currentShownImage = document.querySelector('.skin-image-container.shown');
    var skinName = document.querySelector('.skin-name');
    currentShownImage.className = 'skin-image-container';
    var firstImage = skinImagesContainer.firstElementChild;
    var lastImage = skinImagesContainer.lastElementChild;

    if (firstImage === currentShownImage && arrowClassList.includes('left-arrow')) {
      lastImage.className = 'skin-image-container shown';
      skinName.textContent = lastImage.id;
    } else if (lastImage === currentShownImage && arrowClassList.includes('right-arrow')) {
      firstImage.className = 'skin-image-container shown';
      skinName.textContent = firstImage.id;
    } else if (arrowClassList.includes('right-arrow')) {
      currentShownImage.nextElementSibling.className = 'skin-image-container shown';
      skinName.textContent = currentShownImage.nextElementSibling.id;
    } else {
      currentShownImage.previousElementSibling.className = 'skin-image-container shown';
      skinName.textContent = currentShownImage.previousElementSibling.id;
    }
  };

  var clearMainModal = function clearMainModal() {
    var mainContainer = document.querySelector('#main-container');
    var championName = mainContainer.querySelector('.champion-name');
    var championTitle = mainContainer.querySelector('.champion-title');
    var championRoles = mainContainer.querySelector('.champion-roles');
    var championLore = mainContainer.querySelector('.champion-lore');
    var abilityDetails = mainContainer.querySelector('.ability-details');
    var championTips = mainContainer.querySelector('.champion-tips');
    var mainModalHeader = [championName, championTitle, championRoles];
    mainModalHeader.forEach(function (element) {
      var currentElement = element;
      currentElement.textContent = '';
    });
    championLore.remove();
    abilityDetails.remove();
    championTips.remove();
  };

  var clearStatsModal = function clearStatsModal() {
    var statsContainer = document.querySelector('#stats-container');
    var championName = statsContainer.querySelector('.champion-name');
    var championTitle = statsContainer.querySelector('.champion-title');
    var championStatsOverview = statsContainer.querySelector('.champion-stats-overview');
    var alldamageStats = statsContainer.querySelectorAll('.damage-stats');
    var itemSetsContainer = statsContainer.querySelector('.item-sets-container');
    var bestMatchups = statsContainer.querySelector('.best-matchups');
    var worstMatchups = statsContainer.querySelector('.worst-matchups');
    var statsModalHeader = [championName, championTitle, championStatsOverview];
    statsModalHeader.forEach(function (element) {
      var currentElement = element;
      currentElement.textContent = '';
    });
    alldamageStats.forEach(function (damageStat) {
      var damageStatElement = damageStat;
      damageStatElement.remove();
    });
    var statsModalContent = [itemSetsContainer, bestMatchups, worstMatchups];
    statsModalContent.forEach(function (content) {
      var contentElement = content;
      contentElement.remove();
    });
  };

  var clearSkinsModal = function clearSkinsModal() {
    var skinImagesContainer = document.querySelector('.skin-images-container');
    skinImagesContainer.remove();
  };

  var closeChampionModal = function closeChampionModal() {
    var modal = document.querySelector('.modal');
    var mainContainer = document.querySelector('#main-container');
    var statsContainer = document.querySelector('#stats-container');
    var skinsContainer = document.querySelector('#skins-container');
    modal.style.display = 'none';
    mainContainer.style.display = 'block';
    statsContainer.style.display = 'none';
    skinsContainer.style.display = 'none';
  };

  var modalClickEvents = function modalClickEvents(event) {
    var modal = document.querySelector('.modal');

    if (event.target.className === 'spell-img') {
      var dashIndex = event.target.id.indexOf('-');
      var abilityId = event.target.id.slice(0, dashIndex);
      toggleActiveAbility(abilityId);
    }

    if (event.target.className === 'modal-nav-link') {
      changeModalTemplate(event.target);
    }

    if (Array.from(event.target.classList).includes('img-scroll-arrow')) {
      toggleSkinImages(Array.from(event.target.classList));
    }

    if (event.target.className === 'close-modal-btn') {
      modal.removeEventListener('click', modalClickEvents);
      closeChampionModal();
      clearMainModal();
      clearStatsModal();
      clearSkinsModal();
    }
  };

  var modalMouseoverEvents = function modalMouseoverEvents(event) {
    if (event.target.className === 'item-img' || event.target.className === 'component-item-img') {
      dispayItemDetails(event.target);
    }
  };

  var modalMouseoutEvents = function modalMouseoutEvents(event) {
    if (event.target.className === 'item-img' || event.target.className === 'component-item-img') {
      if (!event.target) return;
      var relatedTarget = event.relatedTarget;

      while (relatedTarget) {
        if (relatedTarget === event.target) return;
        relatedTarget = relatedTarget.parentNode;
      }

      hideItemDetails(event.target);
    }
  };

  var modalArrowEvents = function modalArrowEvents(event) {
    var skinsContainer = document.querySelector('#skins-container');

    if (skinsContainer.style.display === 'block') {
      if (event.key === 'ArrowRight') {
        var rightArrow = document.querySelector('.right-arrow');
        toggleSkinImages(Array.from(rightArrow.classList));
      }

      if (event.key === 'ArrowLeft') {
        var leftArrow = document.querySelector('.left-arrow');
        toggleSkinImages(Array.from(leftArrow.classList));
      }
    }
  };

  var modalChangeListeners = function modalChangeListeners() {
    var modal = document.querySelector('.modal');
    modal.addEventListener('click', modalClickEvents);
    modal.addEventListener('mouseover', modalMouseoverEvents);
    modal.addEventListener('mouseout', modalMouseoutEvents);
    document.addEventListener('keydown', modalArrowEvents);
  };

  return {
    modalChangeListeners: modalChangeListeners
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChampionModalController);

/***/ }),

/***/ "./src/appControl/championsPageController.js":
/*!***************************************************!*\
  !*** ./src/appControl/championsPageController.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _championData_championDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../championData/championDetails */ "./src/championData/championDetails.js");
/* harmony import */ var _championData_championStats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../championData/championStats */ "./src/championData/championStats.js");
/* harmony import */ var _templates_championDetailsModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../templates/championDetailsModal */ "./src/templates/championDetailsModal.js");
/* harmony import */ var _templates_championStatsModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/championStatsModal */ "./src/templates/championStatsModal.js");
/* harmony import */ var _templates_championSkinsModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../templates/championSkinsModal */ "./src/templates/championSkinsModal.js");
/* harmony import */ var _championModalController__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./championModalController */ "./src/appControl/championModalController.js");
/* harmony import */ var _filterChampions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filterChampions */ "./src/appControl/filterChampions.js");
/* harmony import */ var _sortChampions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sortChampions */ "./src/appControl/sortChampions.js");
/* harmony import */ var _championData_getAllChampions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../championData/getAllChampions */ "./src/championData/getAllChampions.js");












var ChampionsPageController = function () {
  var displayDropdownOptions = function displayDropdownOptions(dropdownOptions) {
    var allDropdownOptions = document.querySelectorAll('.dropdown-options');
    allDropdownOptions.forEach(function (options) {
      var optionsStyle = options.style;
      optionsStyle.display = 'none';
    });
    var dropdownOptionsStyle = dropdownOptions.style;
    dropdownOptionsStyle.display = 'flex';
  };

  var hideDropdownOptions = function hideDropdownOptions(dropdownOptions) {
    var dropdownOptionsStyle = dropdownOptions.style;
    dropdownOptionsStyle.display = 'none';
  };

  var dropdownOptionsToggle = function dropdownOptionsToggle(dropdownBtn) {
    var dropdownOptions = dropdownBtn.parentElement.querySelector('.dropdown-options');

    if (dropdownOptions.style.display !== 'flex') {
      displayDropdownOptions(dropdownOptions);
    } else {
      hideDropdownOptions(dropdownOptions);
    }
  };

  var displayChampionModal = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(championId) {
      var modal, championDetails, championStats, skinImagesContainer;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              modal = document.querySelector('.modal');
              _context.next = 3;
              return (0,_championData_championDetails__WEBPACK_IMPORTED_MODULE_2__["default"])(championId);

            case 3:
              championDetails = _context.sent;
              _context.next = 6;
              return (0,_championData_championStats__WEBPACK_IMPORTED_MODULE_3__["default"])(championId);

            case 6:
              championStats = _context.sent;
              skinImagesContainer = document.querySelector('.skin-images-container');
              /*
                purpose of the if statement is to prevent spam clicks from rendering
                duplicate content onto the champion modal.
              */

              if (!skinImagesContainer) {
                (0,_templates_championDetailsModal__WEBPACK_IMPORTED_MODULE_4__["default"])(championDetails);
                (0,_templates_championStatsModal__WEBPACK_IMPORTED_MODULE_5__["default"])(championDetails, championStats);
                (0,_templates_championSkinsModal__WEBPACK_IMPORTED_MODULE_6__["default"])(championDetails);
              }

              modal.style.display = 'block';
              _championModalController__WEBPACK_IMPORTED_MODULE_7__["default"].modalChangeListeners();

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function displayChampionModal(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var selectLaneFilterOption = function selectLaneFilterOption(clickedLaneOption) {
    var championsSection = document.querySelector('.champions-section');
    var activeLaneOption = document.querySelector('.header-option.active');

    if (clickedLaneOption === activeLaneOption || championsSection.style.visibility === 'hidden') {
      return false;
    }

    activeLaneOption.classList.remove('active');
    clickedLaneOption.classList.add('active');
    return true;
  };

  var checkLaneFilterOption = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(allChampionStats) {
      var activeLaneOption, laneName;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              activeLaneOption = document.querySelector('.header-option.active');
              laneName = activeLaneOption.classList[0];
              _context2.next = 4;
              return _filterChampions__WEBPACK_IMPORTED_MODULE_8__["default"].filterByLane(laneName, allChampionStats);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function checkLaneFilterOption(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var checkSortingOption = function checkSortingOption(allChampionStats) {
    var activeSortingOption = document.querySelector('.sort.active');

    if (activeSortingOption === null) {
      _sortChampions__WEBPACK_IMPORTED_MODULE_9__["default"].sortByDefaultOrder(allChampionStats);
    } else if (Array.from(activeSortingOption.classList).includes('winrate')) {
      _sortChampions__WEBPACK_IMPORTED_MODULE_9__["default"].sortChampionsByWinrate(allChampionStats);
    } else if (Array.from(activeSortingOption.classList).includes('pickrate')) {
      _sortChampions__WEBPACK_IMPORTED_MODULE_9__["default"].sortChampionsByPickrate(allChampionStats);
    } else if (Array.from(activeSortingOption.classList).includes('damage')) {
      _sortChampions__WEBPACK_IMPORTED_MODULE_9__["default"].sortChampionsByDamageDone(allChampionStats);
    }
  };

  var checkActiveRoleOptions = function checkActiveRoleOptions(allChampionDetails) {
    var activeRoleOptions = document.querySelectorAll('.role.active');

    if (activeRoleOptions.length === 0) {
      return false;
    }

    var activeRoles = Array.from(activeRoleOptions).map(function (activeRoleOption) {
      var activeRole = activeRoleOption.classList[0];
      return activeRole;
    });
    _filterChampions__WEBPACK_IMPORTED_MODULE_8__["default"].filterByRole(activeRoles, allChampionDetails);
    return true;
  };

  var checkActiveDifficultyOptions = function checkActiveDifficultyOptions(allChampionDetails) {
    var activeDifficultyOptions = document.querySelectorAll('.difficulty.active');

    if (activeDifficultyOptions.length === 0) {
      return false;
    }

    var activeDifficulties = Array.from(activeDifficultyOptions).map(function (activeDifficultyOption) {
      var activeDifficulty = activeDifficultyOption.classList[0];
      return activeDifficulty;
    });
    _filterChampions__WEBPACK_IMPORTED_MODULE_8__["default"].filterByDifficulty(activeDifficulties, allChampionDetails);
    return true;
  };

  var selectMultiDropdownOption = function selectMultiDropdownOption(dropdownOption) {
    dropdownOption.classList.add('active');
  };

  var deselectDropdownOption = function deselectDropdownOption(dropdownOption) {
    dropdownOption.classList.remove('active');
  };

  var toggleDropdownOption = function toggleDropdownOption(dropdownOption) {
    if (!Array.from(dropdownOption.classList).includes('active')) {
      selectMultiDropdownOption(dropdownOption);
    } else {
      deselectDropdownOption(dropdownOption);
    }
  };

  var selectSingleDropdownOption = function selectSingleDropdownOption(dropdownOption) {
    var activeDropdownOption = document.querySelector('.single-select.active');

    if (activeDropdownOption === null) {
      dropdownOption.classList.add('active');
      return;
    }

    if (activeDropdownOption === dropdownOption) {
      deselectDropdownOption(dropdownOption);
      return;
    }

    activeDropdownOption.classList.remove('active');
    dropdownOption.classList.add('active');
  };

  var redirectToFrontPage = function redirectToFrontPage() {
    window.location.href = 'index.html';
  };

  var championsPageClickEvents = /*#__PURE__*/function () {
    var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee5(event) {
      var checkOptions, hideChampionsSection, showChampionsSection, removeChampionsPageListener, addChampionsPageListener, showLoader, hideLoader, filterAndSortChampionsSection;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              /* Helper functions for click events */
              checkOptions = /*#__PURE__*/function () {
                var _ref4 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {
                  var allChampionStats, allChampionDetails;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          _context3.next = 2;
                          return (0,_championData_getAllChampions__WEBPACK_IMPORTED_MODULE_10__.getAllChampionStats)();

                        case 2:
                          allChampionStats = _context3.sent;
                          _context3.next = 5;
                          return (0,_championData_getAllChampions__WEBPACK_IMPORTED_MODULE_10__.getAllChampionDetails)();

                        case 5:
                          allChampionDetails = _context3.sent;
                          _context3.next = 8;
                          return checkLaneFilterOption(allChampionStats);

                        case 8:
                          checkSortingOption(allChampionStats);
                          checkActiveRoleOptions(allChampionDetails);
                          checkActiveDifficultyOptions(allChampionDetails);

                        case 11:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
                }));

                return function checkOptions() {
                  return _ref4.apply(this, arguments);
                };
              }();

              hideChampionsSection = function hideChampionsSection() {
                var championsSection = document.querySelector('.champions-section');
                championsSection.style.visibility = 'hidden';
              };

              showChampionsSection = function showChampionsSection() {
                var championsSection = document.querySelector('.champions-section');
                championsSection.style.visibility = 'visible';
              };

              removeChampionsPageListener = function removeChampionsPageListener() {
                var championsPage = document.querySelector('#champions-page');
                championsPage.removeEventListener('click', championsPageClickEvents);
              };

              addChampionsPageListener = function addChampionsPageListener() {
                var championsPage = document.querySelector('#champions-page');
                championsPage.addEventListener('click', championsPageClickEvents);
              };

              showLoader = function showLoader() {
                var loader = document.querySelector('.loader');
                loader.style.display = 'block';
              };

              hideLoader = function hideLoader() {
                var loader = document.querySelector('.loader');
                loader.style.display = 'none';
              };

              filterAndSortChampionsSection = /*#__PURE__*/function () {
                var _ref5 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4(waitTime) {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          hideChampionsSection();
                          showLoader();
                          removeChampionsPageListener();
                          _context4.next = 5;
                          return checkOptions();

                        case 5:
                          setTimeout(function () {
                            showChampionsSection();
                            hideLoader();
                          }, waitTime);
                          addChampionsPageListener();

                        case 7:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                }));

                return function filterAndSortChampionsSection(_x4) {
                  return _ref5.apply(this, arguments);
                };
              }();
              /* click event responses */


              if (Array.from(event.target.classList).includes('dropdown-btn')) {
                dropdownOptionsToggle(event.target);
              }

              if (event.target.parentElement.className === 'champion-container shown') {
                displayChampionModal(event.target.parentElement.dataset.id);
              }

              if (event.target.parentElement.parentElement.className === 'champion-container shown') {
                displayChampionModal(event.target.parentElement.parentElement.dataset.id);
              }

              if (Array.from(event.target.classList).includes('multi-select')) {
                toggleDropdownOption(event.target);
                filterAndSortChampionsSection(600);
              }

              if (Array.from(event.target.classList).includes('single-select')) {
                selectSingleDropdownOption(event.target);
                filterAndSortChampionsSection(1000);
              }

              if (Array.from(event.target.classList).includes('header-option')) {
                selectLaneFilterOption(event.target);
                filterAndSortChampionsSection(600);
              }

              if (event.target.className === 'app-name') {
                redirectToFrontPage();
              }

            case 15:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function championsPageClickEvents(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  var championsPageKeyEvents = function championsPageKeyEvents(event) {
    var _document = document,
        activeElement = _document.activeElement;

    if (event.key === 'Enter') {
      if (activeElement && activeElement.className === 'champion-container shown') {
        displayChampionModal(activeElement.dataset.id);
      }

      if (activeElement && activeElement.className === 'champion-img') {
        displayChampionModal(activeElement.parentElement.dataset.id);
      }
    }
  };

  var championsPageListeners = function championsPageListeners() {
    var championsPage = document.querySelector('#champions-page');
    championsPage.addEventListener('click', championsPageClickEvents);
    championsPage.addEventListener('keydown', championsPageKeyEvents);
  };

  return {
    championsPageListeners: championsPageListeners,
    displayChampionModal: displayChampionModal
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChampionsPageController);

/***/ }),

/***/ "./src/appControl/filterChampions.js":
/*!*******************************************!*\
  !*** ./src/appControl/filterChampions.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _championData_championStats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../championData/championStats */ "./src/championData/championStats.js");
/* harmony import */ var _templates_renderHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../templates/renderHelpers */ "./src/templates/renderHelpers.js");





var ChampionFilter = function () {
  var renderAllChampions = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(allChampionStats) {
      var championsSection;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              championsSection = document.querySelector('.champions-section');
              allChampionStats.forEach(function (champion) {
                (0,_templates_renderHelpers__WEBPACK_IMPORTED_MODULE_3__.createChampionContainer)(champion, championsSection);
              });
              return _context.abrupt("return", championsSection);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function renderAllChampions(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var clearChampionsSection = function clearChampionsSection() {
    var championsSection = document.querySelector('.champions-section');
    championsSection.textContent = '';
  };

  var showChampion = function showChampion(champion) {
    champion.classList.add('shown');
    champion.classList.remove('hidden');
  };

  var hideChampion = function hideChampion(champion) {
    champion.classList.add('hidden');
    champion.classList.remove('shown');
  };

  var filterByLane = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(clickedLane, allChampionStats) {
      var championsSection, allChampions, results, championStats;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              clearChampionsSection();
              _context2.next = 3;
              return renderAllChampions(allChampionStats);

            case 3:
              championsSection = _context2.sent;
              championsSection.style.visibility = 'hidden';
              allChampions = document.querySelectorAll('.champion-container');

              if (!(clickedLane === 'all')) {
                _context2.next = 10;
                break;
              }

              allChampions.forEach(function (champion) {
                showChampion(champion);
              });
              _context2.next = 16;
              break;

            case 10:
              results = [];
              allChampions.forEach(function (champion) {
                var championId = champion.dataset.id;
                results.push((0,_championData_championStats__WEBPACK_IMPORTED_MODULE_2__["default"])(championId));
              });
              _context2.next = 14;
              return Promise.all(results);

            case 14:
              championStats = _context2.sent;
              championStats.forEach(function (champion) {
                var championLane = champion.lane;
                var championElement = document.querySelector("[data-id=".concat(champion.championId, "]"));

                if (championLane.toLowerCase() !== clickedLane) {
                  hideChampion(championElement);
                } else {
                  showChampion(championElement);
                }
              });

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function filterByLane(_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();

  var filterByRole = function filterByRole(activeRoles, allChampionDetails) {
    var championElements = document.querySelectorAll('.champion-container');
    championElements.forEach(function (champion) {
      var roleMatchFound = false;
      activeRoles.forEach(function (role) {
        var championRoles = allChampionDetails[champion.dataset.id].tags;
        championRoles.forEach(function (championRole) {
          if (championRole.toLowerCase() === role) {
            roleMatchFound = true;
          }
        });
      });

      if (!roleMatchFound) {
        hideChampion(champion);
      }
    });
  };

  var categoriseDifficultyNum = function categoriseDifficultyNum(difficultyNum) {
    if (difficultyNum <= 3) {
      return 'low';
    }

    if (difficultyNum <= 6) {
      return 'medium';
    }

    return 'high';
  };

  var filterByDifficulty = /*#__PURE__*/function () {
    var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(activeDifficulties, allChampionDetails) {
      var championElements;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              championElements = document.querySelectorAll('.champion-container');
              championElements.forEach(function (champion) {
                var difficultyMatchFound = false;
                activeDifficulties.forEach(function (difficulty) {
                  var championDifficultyNum = allChampionDetails[champion.dataset.id].info.difficulty;
                  var championDifficulty = categoriseDifficultyNum(championDifficultyNum);

                  if (difficulty.toLowerCase() === championDifficulty) {
                    difficultyMatchFound = true;
                  }
                });

                if (!difficultyMatchFound) {
                  hideChampion(champion);
                }
              });

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function filterByDifficulty(_x4, _x5) {
      return _ref3.apply(this, arguments);
    };
  }();

  return {
    filterByLane: filterByLane,
    filterByRole: filterByRole,
    filterByDifficulty: filterByDifficulty
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChampionFilter);

/***/ }),

/***/ "./src/appControl/searchbarController.js":
/*!***********************************************!*\
  !*** ./src/appControl/searchbarController.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _championsPageController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./championsPageController */ "./src/appControl/championsPageController.js");




var SearchbarController = function () {
  var showAutoCompleteNames = function showAutoCompleteNames(searchContainer) {
    var autoCompleteNames = searchContainer.querySelector('.auto-complete-names');
    autoCompleteNames.style.display = 'block';
  };

  var hideAutoCompleteNames = function hideAutoCompleteNames() {
    var autoCompleteNameElements = document.querySelectorAll('.auto-complete-names');
    autoCompleteNameElements.forEach(function (autoCompleteNameElement) {
      var autoCompleteNames = autoCompleteNameElement;
      autoCompleteNames.style.display = 'none';
    });
  };

  var searchbarFocusInEvent = function searchbarFocusInEvent(event) {
    if (event.target.className === 'search') {
      var searchContainer = event.target.parentElement;
      showAutoCompleteNames(searchContainer);
      event.target.focus();
    }
  };

  var searchbarFocusoutEvent = function searchbarFocusoutEvent(event) {
    if (!event.relatedTarget || event.relatedTarget.className !== 'auto-complete-name-wrapper' && event.relatedTarget.className !== 'search') {
      hideAutoCompleteNames();
    }
  };

  var searchBarInputEvent = function searchBarInputEvent(event) {
    if (event.target.className === 'search') {
      var inputValue = event.target.value;
      var autoCompleteNames = document.querySelectorAll('.auto-complete-name');
      autoCompleteNames.forEach(function (autoCompleteName) {
        var name = autoCompleteName;

        if (name.id.toLowerCase().includes(inputValue.toLowerCase())) {
          name.parentElement.style.display = 'block';
        } else {
          name.parentElement.style.display = 'none';
        }
      });
    }
  };

  var searchbarKeydownEvents = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(event) {
      var _document, activeElement, goToStart, action, autoCompleteNameElements, autoCompleteNames, _document2, _activeElement, searchContainerClassName, autoCompleteName;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if ((event.key === 'ArrowDown' || event.key === 'ArrowUp') && event.target !== document.querySelector('body')) {
                _document = document, activeElement = _document.activeElement;
                event.preventDefault();
                action = {
                  ArrowUp: 'previous',
                  ArrowDown: 'next'
                };

                if (activeElement.className === 'search' && event.key === 'ArrowDown') {
                  activeElement = activeElement.nextElementSibling.firstElementChild;
                  /* Skips autocomplete names which are currently not displayed */

                  while (activeElement.style.display === 'none') {
                    activeElement = activeElement.nextElementSibling;
                  }

                  activeElement.focus();
                } else {
                  activeElement = activeElement["".concat(action[event.key], "ElementSibling")];

                  while (activeElement && activeElement.style.display === 'none') {
                    activeElement = activeElement["".concat(action[event.key], "ElementSibling")];
                  }
                  /* Checks which search bar dropdown is currently displayed */


                  autoCompleteNameElements = document.querySelectorAll('.auto-complete-names');
                  autoCompleteNames = Array.from(autoCompleteNameElements).filter(function (autoCompleteNameElement) {
                    var isShowing = autoCompleteNameElement.style.display === 'block';
                    return isShowing;
                  });

                  if (autoCompleteNames[0] !== undefined && !activeElement) {
                    /* Returns to the start or the end of the dropdown when an arrow key is pressed */
                    goToStart = action[event.key] === 'next' || event.key === 'Home';
                    activeElement = autoCompleteNames[0].children[goToStart ? 0 : autoCompleteNames[0].children.length - 1];

                    while (activeElement && activeElement.style.display === 'none') {
                      activeElement = activeElement["".concat(action[event.key], "ElementSibling")];
                    }
                  }

                  if (activeElement) {
                    activeElement.focus();
                  }
                }
              }

              if (!(event.key === 'Enter')) {
                _context.next = 13;
                break;
              }

              _document2 = document, _activeElement = _document2.activeElement;

              if (!(_activeElement && _activeElement.className === 'auto-complete-name-wrapper')) {
                _context.next = 13;
                break;
              }

              searchContainerClassName = _activeElement.parentElement.parentElement.classList[1];
              autoCompleteName = _activeElement.firstElementChild;
              /* Checks which page the search bar is on */

              if (!(searchContainerClassName === 'desktop-search-container' || searchContainerClassName === 'mobile-search-container')) {
                _context.next = 11;
                break;
              }

              localStorage.setItem('championId', autoCompleteName.dataset.championId);
              window.location.href = 'champions.html';
              _context.next = 13;
              break;

            case 11:
              _context.next = 13;
              return _championsPageController__WEBPACK_IMPORTED_MODULE_2__["default"].displayChampionModal(autoCompleteName.dataset.championId);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function searchbarKeydownEvents(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var searchbarClickEvents = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(event) {
      var clickAutoCompleteName, searchContainer, searchContainerClassName, autoCompleteName, _searchContainerClassName, _autoCompleteName;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              clickAutoCompleteName = /*#__PURE__*/function () {
                var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(searchContainerClassName, autoCompleteName) {
                  var autoCompleteNameElements;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          if (!(searchContainerClassName === 'desktop-search-container' || searchContainerClassName === 'mobile-search-container')) {
                            _context2.next = 5;
                            break;
                          }

                          localStorage.setItem('championId', autoCompleteName.dataset.championId);
                          window.location.href = 'champions.html';
                          _context2.next = 9;
                          break;

                        case 5:
                          _context2.next = 7;
                          return _championsPageController__WEBPACK_IMPORTED_MODULE_2__["default"].displayChampionModal(autoCompleteName.dataset.championId);

                        case 7:
                          autoCompleteNameElements = document.querySelectorAll('.auto-complete-names');
                          autoCompleteNameElements.forEach(function (autoCompleteNameElement) {
                            var autoCompleteNames = autoCompleteNameElement;
                            autoCompleteNames.style.display = 'none';
                          });

                        case 9:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));

                return function clickAutoCompleteName(_x3, _x4) {
                  return _ref3.apply(this, arguments);
                };
              }();

              searchContainer = event.target.parentElement.parentElement;

              if (event.target.className === 'auto-complete-name-wrapper') {
                searchContainerClassName = searchContainer.classList[1];
                autoCompleteName = event.target.firstChild;
                clickAutoCompleteName(searchContainerClassName, autoCompleteName);
              }

              if (event.target.className === 'auto-complete-name') {
                _searchContainerClassName = searchContainer.parentElement.classList[1];
                _autoCompleteName = event.target;
                clickAutoCompleteName(_searchContainerClassName, _autoCompleteName);
              }

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function searchbarClickEvents(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var searchContainerListeners = function searchContainerListeners() {
    // const searchContainer = document.querySelector('.search-container');
    document.addEventListener('focusin', searchbarFocusInEvent);
    document.addEventListener('focusout', searchbarFocusoutEvent);
    document.addEventListener('input', searchBarInputEvent);
    document.addEventListener('keydown', searchbarKeydownEvents);
    document.addEventListener('click', searchbarClickEvents);
  };

  return {
    searchContainerListeners: searchContainerListeners
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchbarController);

/***/ }),

/***/ "./src/appControl/sortChampions.js":
/*!*****************************************!*\
  !*** ./src/appControl/sortChampions.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _templates_renderHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates/renderHelpers */ "./src/templates/renderHelpers.js");
// import { getAllChampionStats } from '../championData/getAllChampions';


var SortChampions = function () {
  var clearChampionsSection = function clearChampionsSection() {
    var championsSection = document.querySelector('.champions-section');
    championsSection.style.visiblity = 'hidden';
    championsSection.textContent = '';
  };

  var recreateChampionsSection = function recreateChampionsSection(champions) {
    var championsSection = document.querySelector('.champions-section');
    champions.forEach(function (champion) {
      (0,_templates_renderHelpers__WEBPACK_IMPORTED_MODULE_0__.createChampionContainer)(champion, championsSection);
    });
  };

  var filterChampions = function filterChampions(allChampionStats) {
    // const allChampionStats = await getAllChampionStats();
    var filteredChampionStats = allChampionStats.filter(function (championStats) {
      var championElement = document.querySelector("[data-id=".concat(championStats.id, "]"));
      return championElement.className === 'champion-container shown';
    });
    return filteredChampionStats;
  };

  var sortChampionsByWinrate = function sortChampionsByWinrate(allChampionStats) {
    var filteredChampionStats = filterChampions(allChampionStats);
    var filteredChampionsSorted = filteredChampionStats.sort(function (a, b) {
      return b.winRate - a.winRate;
    });
    clearChampionsSection();
    recreateChampionsSection(filteredChampionsSorted);
    return filteredChampionsSorted;
  };

  var sortChampionsByPickrate = function sortChampionsByPickrate(allChampionStats) {
    var filteredChampionStats = filterChampions(allChampionStats);
    var filteredChampionsSorted = filteredChampionStats.sort(function (a, b) {
      return b.pickRate - a.pickRate;
    });
    clearChampionsSection();
    recreateChampionsSection(filteredChampionsSorted);
    return filteredChampionsSorted;
  };

  var sortChampionsByDamageDone = function sortChampionsByDamageDone(allChampionStats) {
    var filteredChampionStats = filterChampions(allChampionStats);
    var filteredChampionsSorted = filteredChampionStats.sort(function (a, b) {
      return b.damagePerMatch.totalDamage.value - a.damagePerMatch.totalDamage.value;
    });
    clearChampionsSection();
    recreateChampionsSection(filteredChampionsSorted);
    return filteredChampionsSorted;
  };

  var sortByDefaultOrder = function sortByDefaultOrder(allChampionStats) {
    // const allChampionStats = await getAllChampionStats();
    var filteredChampionStats = allChampionStats.filter(function (championStats) {
      var championElement = document.querySelector("[data-id=".concat(championStats.id, "]"));

      if (championElement === null) {
        return false;
      }

      return championElement.className === 'champion-container shown';
    });
    clearChampionsSection();
    recreateChampionsSection(filteredChampionStats);
  };

  return {
    sortChampionsByWinrate: sortChampionsByWinrate,
    sortChampionsByPickrate: sortChampionsByPickrate,
    sortChampionsByDamageDone: sortChampionsByDamageDone,
    sortByDefaultOrder: sortByDefaultOrder
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SortChampions);

/***/ }),

/***/ "./src/championData/championDetails.js":
/*!*********************************************!*\
  !*** ./src/championData/championDetails.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);



var fetchChampionDetails = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(championId) {
    var response, champions, championDetails;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("https://ddragon.leagueoflegends.com/cdn/11.20.1/data/en_US/champion/".concat(championId, ".json"), {
              mode: 'cors'
            });

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            champions = _context.sent;
            championDetails = champions.data[championId];
            return _context.abrupt("return", championDetails);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchChampionDetails(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getChampionPassives = function getChampionPassives(championDetails) {
  var passiveData = championDetails.passive;
  var passiveName = passiveData.name;
  var passiveDescription = passiveData.description;
  var passiveId = passiveData.image.full;
  var passiveImgUrl = "https://ddragon.leagueoflegends.com/cdn/11.21.1/img/passive/".concat(passiveId);
  return {
    passiveName: passiveName,
    passiveDescription: passiveDescription,
    passiveImgUrl: passiveImgUrl
  };
};

var getChampionSpells = function getChampionSpells(championDetails) {
  var spellsData = championDetails.spells;
  var spells = [];
  spellsData.forEach(function (spell) {
    var spellObject = {
      name: spell.name,
      id: spell.id,
      description: spell.description,
      costBurn: spell.costBurn,
      costType: spell.costType,
      cooldown: spell.cooldownBurn,
      imgUrl: "https://ddragon.leagueoflegends.com/cdn/11.21.1/img/spell/".concat(spell.id, ".png")
    };
    spells.push(spellObject);
  });
  return spells;
};

var getChampionDetails = /*#__PURE__*/function () {
  var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(championId) {
    var championDetails, championPassive, spells, championTitle;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetchChampionDetails(championId);

          case 2:
            championDetails = _context2.sent;
            championPassive = getChampionPassives(championDetails);
            spells = getChampionSpells(championDetails); // Make first letter of the champion title a capital letter.

            championTitle = championDetails.title.replace(championDetails.title[0], championDetails.title[0].toUpperCase());

            if (championDetails.partype === 'None') {
              championDetails.partype = 'Manaless';
            }

            if (championDetails.id === 'Akshan') {
              championDetails.allytips[0] = 'You can’t use consumables like potions during your Comeuppance, make sure to use them before channeling.';
            }

            if (championDetails.id === 'Vex') {
              championDetails.allytips.push('Vex is great at diving into the backline, but her escape potential is low so timing is key.');
            }

            return _context2.abrupt("return", {
              name: championDetails.name,
              id: championDetails.id,
              title: championTitle,
              lore: championDetails.lore,
              roles: championDetails.tags,
              skins: championDetails.skins,
              resource: championDetails.partype,
              passive: championPassive,
              spells: spells,
              tips: championDetails.allytips
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getChampionDetails(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getChampionDetails);

/***/ }),

/***/ "./src/championData/championStats.js":
/*!*******************************************!*\
  !*** ./src/championData/championStats.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);



var fetchChampionStats = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(championId) {
    var devUrl, response, championStats;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            /* Relative urls are used for when the app is in production and localhost url for development */
            devUrl = 'http://127.0.0.1:5500/frontend/dist/champions.html';

            if (!(window.location.href === devUrl)) {
              _context.next = 7;
              break;
            }

            _context.next = 4;
            return fetch("http://localhost:3001/".concat(championId), {
              mode: 'cors'
            });

          case 4:
            _context.t0 = _context.sent;
            _context.next = 10;
            break;

          case 7:
            _context.next = 9;
            return fetch("".concat(championId), {
              mode: 'cors'
            });

          case 9:
            _context.t0 = _context.sent;

          case 10:
            response = _context.t0;
            _context.next = 13;
            return response.json();

          case 13:
            championStats = _context.sent;
            return _context.abrupt("return", championStats);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchChampionStats(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getChampionStats = /*#__PURE__*/function () {
  var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(championId) {
    var championStats, winRate, pickRate, lane;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetchChampionStats(championId);

          case 2:
            championStats = _context2.sent;
            winRate = championStats.winRate.toFixed(2);
            pickRate = championStats.pickRate.toFixed(2);
            lane = championStats.lane[0] + championStats.lane.substring(1).toLowerCase();
            return _context2.abrupt("return", {
              championId: championId,
              kda: championStats.kdaRatio,
              damagePerMatch: championStats.damagePerMatch,
              itemSets: championStats.itemChoices.slice(1),
              bestMatchUps: championStats.matchUps.bestMatchUps,
              worstMatchUps: championStats.matchUps.worstMatchUps,
              winRate: winRate,
              pickRate: pickRate,
              lane: lane
            });

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getChampionStats(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getChampionStats);

/***/ }),

/***/ "./src/championData/getAllChampions.js":
/*!*********************************************!*\
  !*** ./src/championData/getAllChampions.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllChampionDetails": () => (/* binding */ getAllChampionDetails),
/* harmony export */   "getAllChampionStats": () => (/* binding */ getAllChampionStats)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);



var getAllChampionDetails = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var versionsResponse, versions, latestVersion, championsResponse, allChampions;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('https://ddragon.leagueoflegends.com/api/versions.json');

          case 2:
            versionsResponse = _context.sent;
            _context.next = 5;
            return versionsResponse.json();

          case 5:
            versions = _context.sent;
            latestVersion = versions[0];
            _context.next = 9;
            return fetch("https://ddragon.leagueoflegends.com/cdn/".concat(latestVersion, "/data/en_US/champion.json"));

          case 9:
            championsResponse = _context.sent;
            _context.next = 12;
            return championsResponse.json();

          case 12:
            allChampions = _context.sent;
            return _context.abrupt("return", allChampions.data);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getAllChampionDetails() {
    return _ref.apply(this, arguments);
  };
}();

var getAllChampionStats = /*#__PURE__*/function () {
  var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
    var devUrl, response, allChampionStats;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            devUrl = 'http://127.0.0.1:5500/frontend/dist/champions.html';

            if (!(window.location.href === devUrl)) {
              _context2.next = 7;
              break;
            }

            _context2.next = 4;
            return fetch('http://localhost:3001/champions', {
              mode: 'cors'
            });

          case 4:
            _context2.t0 = _context2.sent;
            _context2.next = 10;
            break;

          case 7:
            _context2.next = 9;
            return fetch('champions', {
              mode: 'cors'
            });

          case 9:
            _context2.t0 = _context2.sent;

          case 10:
            response = _context2.t0;
            _context2.next = 13;
            return response.json();

          case 13:
            allChampionStats = _context2.sent;
            return _context2.abrupt("return", allChampionStats);

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getAllChampionStats() {
    return _ref2.apply(this, arguments);
  };
}();



/***/ }),

/***/ "./src/championData/itemInfo.js":
/*!**************************************!*\
  !*** ./src/championData/itemInfo.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);





// Fetches all the items a champion can buy in a match
var fetchAllItems = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
    var versionResponse, versions, latestVersion, response, allItems;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('https://ddragon.leagueoflegends.com/api/versions.json', {
              mode: 'cors'
            });

          case 2:
            versionResponse = _context.sent;
            _context.next = 5;
            return versionResponse.json();

          case 5:
            versions = _context.sent;
            latestVersion = versions[0];
            _context.next = 9;
            return fetch("https://ddragon.leagueoflegends.com/cdn/".concat(latestVersion, "/data/en_US/item.json"));

          case 9:
            response = _context.sent;
            _context.next = 12;
            return response.json();

          case 12:
            allItems = _context.sent;
            return _context.abrupt("return", allItems.data);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchAllItems() {
    return _ref.apply(this, arguments);
  };
}();

var ItemInfo = /*#__PURE__*/function () {
  function ItemInfo(itemId) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ItemInfo);

    this.itemId = itemId;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ItemInfo, [{
    key: "getItemDetails",
    value: function getItemDetails(allItems) {
      var itemDetails = allItems[this.itemId];
      return itemDetails;
    }
  }, {
    key: "getItemImage",
    value: function getItemImage(allItems) {
      var itemDetails = this.getItemDetails(allItems);
      var itemImageId = itemDetails.image.full;
      var imageUrl = "https://ddragon.leagueoflegends.com/cdn/11.22.1/img/item/".concat(itemImageId);
      return imageUrl;
    } // gets info on the items used to create the instance item

  }, {
    key: "getComponentItems",
    value: function getComponentItems(allItems) {
      var itemDetails = this.getItemDetails(allItems);
      var componentItemIds = itemDetails.from;

      if (componentItemIds === undefined) {
        return [];
      }

      var componentItemDetails = componentItemIds.map(function (itemId) {
        return {
          name: allItems[itemId].name,
          imageUrl: "https://ddragon.leagueoflegends.com/cdn/11.22.1/img/item/".concat(itemId, ".png"),
          cost: allItems[itemId].gold.total
        };
      });
      return componentItemDetails;
    }
  }, {
    key: "getItemInfo",
    value: function getItemInfo(allItems) {
      var itemDetails = this.getItemDetails(allItems);
      var name = itemDetails.name;
      var description = itemDetails.description;
      var cost = itemDetails.gold.total;
      var imageUrl = this.getItemImage(allItems);
      var componentItems = this.getComponentItems(allItems);
      var tags = itemDetails.tags;
      return {
        name: name,
        description: description,
        cost: cost,
        imageUrl: imageUrl,
        componentItems: componentItems,
        tags: tags
      };
    }
  }], [{
    key: "getAllItems",
    value: function () {
      var _getAllItems = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2() {
        var allItems;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                allItems = fetchAllItems();
                return _context2.abrupt("return", allItems);

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getAllItems() {
        return _getAllItems.apply(this, arguments);
      }

      return getAllItems;
    }()
  }]);

  return ItemInfo;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemInfo);

/***/ }),

/***/ "./src/helpers/elementCreation.js":
/*!****************************************!*\
  !*** ./src/helpers/elementCreation.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ElementCreation = function () {
  var createChildElementWithClass = function createChildElementWithClass(tag, className, parentElement) {
    var element = document.createElement(tag);
    element.className = className;
    parentElement.appendChild(element);
    return element;
  };

  var createChildElementWithId = function createChildElementWithId(tag, id, parentElement) {
    var element = document.createElement(tag);
    element.id = id;
    parentElement.appendChild(element);
    return element;
  };

  var createChildElementWithClassAndId = function createChildElementWithClassAndId(tag, className, id, parentElement) {
    var element = document.createElement(tag);
    element.className = className;
    element.id = id;
    parentElement.appendChild(element);
    return element;
  };

  var createChildImageElementWithClass = function createChildImageElementWithClass(className, parentElement, src, alt) {
    var imageElement = createChildElementWithClass('img', className, parentElement);
    imageElement.src = src;
    imageElement.alt = alt;
    return imageElement;
  };

  return {
    createChildElementWithClass: createChildElementWithClass,
    createChildElementWithId: createChildElementWithId,
    createChildElementWithClassAndId: createChildElementWithClassAndId,
    createChildImageElementWithClass: createChildImageElementWithClass
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ElementCreation);

/***/ }),

/***/ "./src/templates/championDetailsModal.js":
/*!***********************************************!*\
  !*** ./src/templates/championDetailsModal.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _renderHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderHelpers */ "./src/templates/renderHelpers.js");
/* harmony import */ var _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/elementCreation */ "./src/helpers/elementCreation.js");





var championDetailsModal = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(championData) {
    var championRoles, roles, championResource, resource, championResourceName, loreContainer, championLore, abilitiesContainer, abilityDetails, abilityImgs, passiveImg, imgLabel, index, i, abilityInfo, abilityName, abilityDescription, abilityLabel, cooldown, championTipsSection, championTips, _i, championTip;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            (0,_renderHelpers__WEBPACK_IMPORTED_MODULE_2__.renderHeaderDetails)(championData, 'main');
            championRoles = document.querySelector('.champion-roles');
            roles = championData.roles;
            roles.forEach(function (role) {
              var championRole = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_3__["default"].createChildElementWithClass('div', 'champion-role', championRoles);
              var championRoleName = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_3__["default"].createChildElementWithClass('span', 'champion-role-name', championRole);
              championRoleName.textContent = role;
              _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_3__["default"].createChildImageElementWithClass('champion-role-image', championRole, "".concat(_renderHelpers__WEBPACK_IMPORTED_MODULE_2__.images["".concat(role, ".png")]), role);
            });
            /* The type of resource that a champion uses e.g. mana, energy etc */

            championResource = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_3__["default"].createChildElementWithClass('div', 'champion-resource', championRoles);
            resource = championData.resource;
            championResourceName = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_3__["default"].createChildElementWithClass('span', 'champion-resource-name', championResource);
            championResourceName.textContent = resource;
            _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_3__["default"].createChildImageElementWithClass('champion-resource-image', championResource, "".concat(_renderHelpers__WEBPACK_IMPORTED_MODULE_2__.images["".concat(resource, ".png")]), resource);
            /* Creates the main content of the main modal */

            loreContainer = document.querySelector('.lore-container');
            championLore = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_3__["default"].createChildElementWithClass('span', 'champion-lore', loreContainer);
            championLore.innerHTML = championData.lore;
            abilitiesContainer = document.querySelector('.abilities-container');
            abilityDetails = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_3__["default"].createChildElementWithClass('div', 'ability-details', abilitiesContainer);
            abilityImgs = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_3__["default"].createChildElementWithClass('div', 'ability-imgs', abilityDetails);
            passiveImg = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_3__["default"].createChildImageElementWithClass('spell-img clicked', abilityImgs, championData.passive.passiveImgUrl, championData.passive.passiveName);
            passiveImg.id = 'passive-img';
            imgLabel = ['Q', 'W', 'E', 'R'];
            index = 0;
            championData.spells.forEach(function (spell) {
              var spellImg = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_3__["default"].createChildImageElementWithClass('spell-img', abilityImgs, spell.imgUrl, spell.name); // Grabs letter Q, W, E or R which uniquely identifies a champions abilities

              spellImg.id = "".concat(imgLabel[index], "-img");
              index += 1;
            });
            /* loops through champion's passive and 4 abilities */

            for (i = 0; i < 5; i += 1) {
              abilityInfo = document.createElement('div');
              abilityName = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_3__["default"].createChildElementWithClass('span', 'ability-name', abilityInfo);
              abilityDescription = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_3__["default"].createChildElementWithClass('span', 'ability-description', abilityInfo);
              abilityLabel = ['Passive', 'Q', 'W', 'E', 'R'];

              if (i === 0) {
                abilityInfo.className = 'ability-info active';
                abilityInfo.id = 'passive-ability';
                abilityName.textContent = "".concat(championData.passive.passiveName, " (").concat(abilityLabel[i], ")");
                abilityDescription.innerHTML = championData.passive.passiveDescription;
              } else {
                cooldown = document.createElement('span');
                cooldown.className = 'ability-cooldown';
                cooldown.textContent = "Cooldown: ".concat(championData.spells[i - 1].cooldown, " seconds");
                abilityInfo.appendChild(cooldown);
                abilityInfo.className = 'ability-info';
                abilityInfo.id = "".concat(abilityLabel[i], "-ability");
                abilityName.textContent = "".concat(championData.spells[i - 1].name, " (").concat(abilityLabel[i], ")");
                abilityDescription.innerHTML = championData.spells[i - 1].description;
              }

              abilityDetails.appendChild(abilityInfo);
            }

            championTipsSection = document.querySelector('.champion-tips-section');
            championTips = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_3__["default"].createChildElementWithClass('div', 'champion-tips', championTipsSection);

            for (_i = 0; _i < 2 && _i < championData.tips.length; _i += 1) {
              championTip = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_3__["default"].createChildElementWithClass('span', 'champion-tip', championTips);
              championTip.textContent = "".concat(championData.tips[_i]);
            }

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function championDetailsModal(_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (championDetailsModal);

/***/ }),

/***/ "./src/templates/championSkinsModal.js":
/*!*********************************************!*\
  !*** ./src/templates/championSkinsModal.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/elementCreation */ "./src/helpers/elementCreation.js");




var championSkinsModal = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(championDetails) {
    var skins, skinsContainer, skinName, skinImagesContainer;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            skins = championDetails.skins;
            skinsContainer = document.querySelector('#skins-container');
            skinName = document.querySelector('.skin-name');
            skinImagesContainer = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_2__["default"].createChildElementWithClass('div', 'skin-images-container', skinsContainer);
            skins.forEach(function (skin) {
              if (skin.num === 0) {
                var shownImageContainer = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_2__["default"].createChildElementWithClassAndId('div', 'skin-image-container shown', "Default ".concat(championDetails.name), skinImagesContainer);
                skinName.textContent = "Default ".concat(championDetails.name);
                var shownImageUrl = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/".concat(championDetails.id, "_").concat(skin.num, ".jpg");
                _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_2__["default"].createChildImageElementWithClass('skin-image', shownImageContainer, shownImageUrl, 'default skin');
              } else {
                var imageContainer = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_2__["default"].createChildElementWithClassAndId('div', 'skin-image-container', skin.name, skinImagesContainer);
                var imageUrl = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/".concat(championDetails.id, "_").concat(skin.num, ".jpg");
                _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_2__["default"].createChildImageElementWithClass('skin-image', imageContainer, imageUrl, skin.name);
              }
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function championSkinsModal(_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (championSkinsModal);

/***/ }),

/***/ "./src/templates/championStatsModal.js":
/*!*********************************************!*\
  !*** ./src/templates/championStatsModal.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _championData_itemInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../championData/itemInfo */ "./src/championData/itemInfo.js");
/* harmony import */ var _renderHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderHelpers */ "./src/templates/renderHelpers.js");
/* harmony import */ var _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/elementCreation */ "./src/helpers/elementCreation.js");






var championStatsModal = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(championData, championStats) {
    var statsOverview, lane, trueDamageCircleStroke, physicalDamageCircleStroke, magicDamageCircleStroke, trueDamagePercent, physicalDamagePercent, magicDamagePercent, totalDamageText, trueDamageValue, physicalDamageValue, magicDamageValue, itemSets, allItems, championItemBuilds, itemSetsContainer, bestMatchupsSection, bestMatchupsElement, bestMatchupsData, worstMatchupsSection, worstMatchupsElement, worstMatchupsData;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            (0,_renderHelpers__WEBPACK_IMPORTED_MODULE_3__.renderHeaderDetails)(championData, 'stats');
            statsOverview = document.querySelector('.champion-stats-overview');
            (0,_renderHelpers__WEBPACK_IMPORTED_MODULE_3__.renderStatOverview)(statsOverview, 'Win Rate', championStats.winRate);
            (0,_renderHelpers__WEBPACK_IMPORTED_MODULE_3__.renderStatOverview)(statsOverview, 'Pick Rate', championStats.pickRate);
            /* Make every letter except the first lower case */

            lane = "".concat(championStats.lane[0] + championStats.lane.substring(1).toLowerCase());
            (0,_renderHelpers__WEBPACK_IMPORTED_MODULE_3__.renderChampionLane)(statsOverview, lane);
            /* Sets the values and percentages for the average damage section of the stats modal */

            trueDamageCircleStroke = document.querySelector('#true-damage-stroke');
            physicalDamageCircleStroke = document.querySelector('#physical-damage-stroke');
            magicDamageCircleStroke = document.querySelector('#magic-damage-stroke');
            trueDamagePercent = Math.round(championStats.damagePerMatch.trueDamage.percentage);
            physicalDamagePercent = Math.round(championStats.damagePerMatch.physicalDamage.percentage);
            magicDamagePercent = Math.round(championStats.damagePerMatch.magicDamage.percentage);
            trueDamageCircleStroke.style.strokeDasharray = "".concat(trueDamagePercent, " 100");
            physicalDamageCircleStroke.style.strokeDasharray = "".concat(physicalDamagePercent + trueDamagePercent, " 100");
            magicDamageCircleStroke.style.strokeDasharray = '100, 100';
            totalDamageText = document.querySelector('.total-damage-text');
            totalDamageText.textContent = Math.round(championStats.damagePerMatch.totalDamage.value);
            trueDamageValue = Math.round(championStats.damagePerMatch.trueDamage.value);
            physicalDamageValue = Math.round(championStats.damagePerMatch.physicalDamage.value);
            magicDamageValue = Math.round(championStats.damagePerMatch.magicDamage.value);
            (0,_renderHelpers__WEBPACK_IMPORTED_MODULE_3__.renderDamageStats)('physical', physicalDamageValue, physicalDamagePercent);
            (0,_renderHelpers__WEBPACK_IMPORTED_MODULE_3__.renderDamageStats)('magic', magicDamageValue, magicDamagePercent);
            (0,_renderHelpers__WEBPACK_IMPORTED_MODULE_3__.renderDamageStats)('true', trueDamageValue, trueDamagePercent);
            /* Renders the item builds section of the stats modal */

            itemSets = championStats.itemSets;
            _context.next = 26;
            return _championData_itemInfo__WEBPACK_IMPORTED_MODULE_2__["default"].getAllItems();

          case 26:
            allItems = _context.sent;
            championItemBuilds = document.querySelector('.champion-item-builds');
            itemSetsContainer = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_4__["default"].createChildElementWithClass('div', 'item-sets-container', championItemBuilds);
            itemSets.forEach(function (itemSet) {
              var itemSetContainer = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_4__["default"].createChildElementWithClass('div', 'item-set-container', itemSetsContainer);
              itemSet.forEach(function (itemId) {
                var item = new _championData_itemInfo__WEBPACK_IMPORTED_MODULE_2__["default"](itemId);
                var itemInfo = item.getItemInfo(allItems);

                if (!itemInfo.tags.includes('Trinket') && !itemInfo.tags.includes('Consumable')) {
                  var mainComponentContainer = document.createElement('div');
                  mainComponentContainer.className = 'main-component-container';
                  itemSetContainer.appendChild(mainComponentContainer);
                  var mainItem = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_4__["default"].createChildElementWithClass('div', 'main-item', mainComponentContainer);
                  _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_4__["default"].createChildImageElementWithClass('item-img', mainItem, itemInfo.imageUrl, "".concat(itemId, ".png"));
                  var itemDetailsContainer = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_4__["default"].createChildElementWithClass('div', 'item-details-container', mainItem);
                  var nameElement = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_4__["default"].createChildElementWithClass('span', 'item-name', itemDetailsContainer);
                  nameElement.textContent = itemInfo.name;
                  var descriptionElement = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_4__["default"].createChildElementWithClass('span', 'item-description', itemDetailsContainer);
                  descriptionElement.innerHTML = itemInfo.description;
                  var itemCost = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_4__["default"].createChildElementWithClass('div', 'item-cost', itemDetailsContainer);
                  var costLabel = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_4__["default"].createChildElementWithClass('span', 'cost-label', itemCost);
                  costLabel.textContent = 'Gold: ';
                  var costAmount = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_4__["default"].createChildElementWithClass('span', 'cost-amount', itemCost);
                  costAmount.textContent = itemInfo.cost;
                  /* The component items are the smaller items that appear below the main item */

                  var componentItems = itemInfo.componentItems;
                  var componentItemsContainer = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_4__["default"].createChildElementWithClass('div', 'component-items-container', mainComponentContainer);
                  componentItems.forEach(function (componentItem) {
                    var componentItemElement = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_4__["default"].createChildElementWithClass('div', 'component-item', componentItemsContainer);
                    _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_4__["default"].createChildImageElementWithClass('component-item-img', componentItemElement, componentItem.imageUrl, "".concat(componentItem.name));
                    var componentItemDetailsContainer = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_4__["default"].createChildElementWithClass('div', 'component-item-details-container', componentItemElement);
                    var componentItemName = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_4__["default"].createChildElementWithClass('span', 'component-item-name', componentItemDetailsContainer);
                    componentItemName.textContent = componentItem.name;
                    var componentItemCost = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_4__["default"].createChildElementWithClass('div', 'component-item-cost', componentItemDetailsContainer);
                    var componentItemCostLabel = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_4__["default"].createChildElementWithClass('span', 'component-item-cost-label', componentItemCost);
                    componentItemCostLabel.textContent = 'Gold: ';
                    var componentItemAmount = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_4__["default"].createChildElementWithClass('span', 'component-item-amount', componentItemCost);
                    componentItemAmount.textContent = componentItem.cost;
                  });
                }
              });
            });
            /* Renders the matchups section of the champion modal stats page */

            bestMatchupsSection = document.querySelector('.best-matchups-section');
            bestMatchupsElement = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_4__["default"].createChildElementWithClass('div', 'best-matchups matchups', bestMatchupsSection);
            bestMatchupsData = championStats.bestMatchUps;
            (0,_renderHelpers__WEBPACK_IMPORTED_MODULE_3__.renderMatchupsInfo)(bestMatchupsElement, bestMatchupsData);
            worstMatchupsSection = document.querySelector('.worst-matchups-section');
            worstMatchupsElement = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_4__["default"].createChildElementWithClass('div', 'worst-matchups matchups', worstMatchupsSection);
            worstMatchupsData = championStats.worstMatchUps;
            (0,_renderHelpers__WEBPACK_IMPORTED_MODULE_3__.renderMatchupsInfo)(worstMatchupsElement, worstMatchupsData);

          case 38:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function championStatsModal(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (championStatsModal);

/***/ }),

/***/ "./src/templates/renderHelpers.js":
/*!****************************************!*\
  !*** ./src/templates/renderHelpers.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderHeaderDetails": () => (/* binding */ renderHeaderDetails),
/* harmony export */   "renderStatOverview": () => (/* binding */ renderStatOverview),
/* harmony export */   "renderChampionLane": () => (/* binding */ renderChampionLane),
/* harmony export */   "renderDamageStats": () => (/* binding */ renderDamageStats),
/* harmony export */   "images": () => (/* binding */ images),
/* harmony export */   "renderMatchupsInfo": () => (/* binding */ renderMatchupsInfo),
/* harmony export */   "createChampionContainer": () => (/* binding */ createChampionContainer)
/* harmony export */ });
/* harmony import */ var _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/elementCreation */ "./src/helpers/elementCreation.js");


var importAll = function importAll(r) {
  var images = {};
  r.keys().forEach(function (item) {
    images[item.replace('./', '')] = r(item);
  });
  return images;
};

var images = importAll(__webpack_require__("./src/images sync \\.(png|jpe?g|svg)$"));

var renderHeaderDetails = function renderHeaderDetails(championData, modalContainer) {
  var container = document.querySelector("#".concat(modalContainer, "-container"));
  container.style.background = "no-repeat url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/".concat(championData.id, "_0.jpg) 70% 80%");
  container.style.backgroundSize = 'cover';
  var championTitle = container.querySelector('.champion-title');
  championTitle.textContent = championData.title;
  var championName = container.querySelector('.champion-name');
  championName.textContent = championData.name;
};
/* Renders win or pick rate to the DOM */


var renderStatOverview = function renderStatOverview(statsOverview, rateText, rateType) {
  var championRate = document.createElement('div');
  var label = document.createElement('span');
  var rateValue = document.createElement('span');
  /* Turns 'Win Rate' into 'win-rate' */

  var lowerCaseText = rateText.replace(' ', '-').toLowerCase();
  championRate.className = lowerCaseText;
  label.id = "".concat(lowerCaseText, "-label");
  label.className = 'label';
  rateValue.className = "".concat(lowerCaseText, "-value");
  label.textContent = rateText;
  rateValue.textContent = "".concat(rateType, "%");
  championRate.appendChild(label);
  championRate.appendChild(rateValue);
  statsOverview.appendChild(championRate);
};

var renderChampionLane = function renderChampionLane(statsOverview, lane) {
  var championLaneInfo = document.createElement('div');
  championLaneInfo.className = 'lane-info';
  var laneText = document.createElement('span');
  laneText.className = 'lane-text label';
  laneText.textContent = lane;
  var laneIcon = document.createElement('img');
  laneIcon.className = 'lane-icon champion-role-image';
  laneIcon.src = "".concat(images["".concat(lane, ".png")]);
  laneIcon.alt = "".concat(lane, ".png");
  championLaneInfo.appendChild(laneText);
  championLaneInfo.appendChild(laneIcon);
  statsOverview.appendChild(championLaneInfo);
};

var renderDamageStats = function renderDamageStats(damageType, damageValue, damagePercentage) {
  var damageContainer = document.querySelector("#".concat(damageType, "-damage-container"));
  var damageStats = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_0__["default"].createChildElementWithClass('div', 'damage-stats', damageContainer);
  var damageValueElement = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_0__["default"].createChildElementWithId('span', "".concat(damageType, "-value"), damageStats);
  var damagePercentageElement = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_0__["default"].createChildElementWithId('span', "".concat(damageType, "-percentage"), damageStats);
  damageValueElement.textContent = "".concat(damageValue);
  damagePercentageElement.textContent = "".concat(damagePercentage, "%");
};

var renderMatchupsInfo = function renderMatchupsInfo(matchupsElement, matchupsData) {
  matchupsData.forEach(function (matchup) {
    var matchupInfo = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_0__["default"].createChildElementWithClass('div', 'matchup-info', matchupsElement);
    var enemyChampionName = matchup[1].name;
    var enemyChampionId = matchup[0];
    var enemyChampionImgUrl = "https://ddragon.leagueoflegends.com/cdn/11.22.1/img/champion/".concat(enemyChampionId, ".png");
    _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_0__["default"].createChildImageElementWithClass('enemy-champion-img', matchupInfo, enemyChampionImgUrl, "small-".concat(enemyChampionId));
    var matchupStats = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_0__["default"].createChildElementWithClass('div', 'matchup-stats', matchupInfo);
    var enemyChampionNameElement = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_0__["default"].createChildElementWithClass('span', 'enemy-champion-name', matchupStats);
    enemyChampionNameElement.textContent = enemyChampionName;
    var winrateAgainst = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_0__["default"].createChildElementWithClass('div', 'winrate-against', matchupStats);
    var winrateAgainstLabel = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_0__["default"].createChildElementWithClass('span', 'winrate-against-label', winrateAgainst);
    winrateAgainstLabel.textContent = 'Winrate: ';
    var color = matchupsElement.className === 'best-matchups matchups' ? 'blue' : 'red';
    var winrateAgainstPercentage = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_0__["default"].createChildElementWithClass('span', "winrate-against-percentage ".concat(color), winrateAgainst);
    winrateAgainstPercentage.textContent = "".concat(matchup[1].winRateAgainst.toFixed(0), "%");
    var gamesPlayedAgainst = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_0__["default"].createChildElementWithClass('span', 'games-played-against', matchupStats);
    gamesPlayedAgainst.textContent = "Games: ".concat(matchup[1].matches);
  });
};

var createChampionContainer = function createChampionContainer(champion, championsSection) {
  var championContainer = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_0__["default"].createChildElementWithClass('div', 'champion-container shown', championsSection);
  var championId = champion.id ? champion.id : champion.championName;
  championContainer.dataset.id = championId;
  var championImgUrl = "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/".concat(championId, "_0.jpg");
  var championImg = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_0__["default"].createChildImageElementWithClass('champion-img', championContainer, championImgUrl, '');
  championImg.tabIndex = 0;
  championContainer.tabIndex = 0;
  var championNameWrapper = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_0__["default"].createChildElementWithClass('div', 'champion-name-wrapper', championContainer);
  var championName = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_0__["default"].createChildElementWithClass('span', 'champion-name', championNameWrapper);
  championName.textContent = champion.name;
};



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stylesheets/frontpage.scss":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stylesheets/frontpage.scss ***!
  \*********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --rasin-black: #1d1e2c;\n  --transparent-rasin-black: #1d1e2c91;\n  --dark-gold: #927543;\n  --light-gold: #c7ab6e;\n}\n\n#front-page {\n  background-color: var(--rasin-black);\n  min-height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: -4;\n  font-family: \"Barlow\", sans-serif;\n}\n#front-page .app-name-container {\n  background-color: var(--dark-gold);\n  padding: 0.3em;\n  border-radius: 8px 0px 8px 0;\n  cursor: pointer;\n}\n#front-page .app-name {\n  font-weight: 900;\n  font-size: 2rem;\n  letter-spacing: 3px;\n}\n#front-page .app-name-container:hover {\n  color: var(--dark-gold);\n  background-color: white;\n}\n#front-page .page-header {\n  display: flex;\n  justify-content: space-evenly;\n  color: white;\n  background-color: var(--rasin-black);\n  max-width: 100%;\n  padding: 1em 0;\n  border-style: solid;\n  border-color: var(--dark-gold);\n  border-width: 0 0 2px 0;\n  align-items: center;\n}\n#front-page .app-name-display-container {\n  position: absolute;\n  top: 0;\n  letter-spacing: 3px;\n  background-color: #181a20b3;\n  padding: 0.2em;\n  border-radius: 11px;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  padding-top: 6em;\n}\n#front-page .app-name-display {\n  font-size: 2em;\n  margin-bottom: 6px;\n  color: var(--light-gold);\n}\n#front-page .slogan-display {\n  color: white;\n  font-size: 1.2em;\n  margin-top: 2em;\n}\n#front-page .search {\n  padding: 0.5em;\n  min-width: 18em;\n  background: #e2e4e9;\n  outline: none;\n  border-style: none;\n  color: var(--rasin-black);\n  font-weight: 600;\n  min-height: 2.6em;\n  font-size: 1em;\n}\n#front-page .splash-section {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: relative;\n  align-items: center;\n}\n#front-page .backdrop-img {\n  max-width: 100%;\n  min-height: 50vh;\n  background-color: transparent;\n  color: #222;\n  opacity: 0.7;\n}\n#front-page .backdrop {\n  z-index: -2;\n  position: relative;\n  width: 100%;\n}\n#front-page .backdrop::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  z-index: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-image: linear-gradient(90deg, #14181d, rgba(20, 24, 29, 0.985565) 0.97%, rgba(20, 24, 29, 0.945131) 2.07833%, rgba(20, 24, 29, 0.883007) 3.29667%, rgba(20, 24, 29, 0.803499) 4.60167%, rgba(20, 24, 29, 0.710915) 5.96667%, rgba(20, 24, 29, 0.609563) 7.365%, rgba(20, 24, 29, 0.50375) 8.77167%, rgba(20, 24, 29, 0.397784) 10.16%, rgba(20, 24, 29, 0.295973) 11.505%, rgba(20, 24, 29, 0.202624) 12.78%, rgba(20, 24, 29, 0.122044) 13.95833%, rgba(20, 24, 29, 0.0585423) 15.01667%, rgba(20, 24, 29, 0.0164249) 15.92833%, rgba(20, 24, 29, 0) 16.66667%, rgba(20, 24, 29, 0) 83.33333%, rgba(20, 24, 29, 0.0164249) 84.07167%, rgba(20, 24, 29, 0.0585423) 84.98333%, rgba(20, 24, 29, 0.122044) 86.04167%, rgba(20, 24, 29, 0.202624) 87.22%, rgba(20, 24, 29, 0.295973) 88.495%, rgba(20, 24, 29, 0.397784) 89.84%, rgba(20, 24, 29, 0.50375) 91.22833%, rgba(20, 24, 29, 0.609563) 92.635%, rgba(20, 24, 29, 0.710915) 94.03333%, rgba(20, 24, 29, 0.803499) 95.39833%, rgba(20, 24, 29, 0.883007) 96.70333%, rgba(20, 24, 29, 0.945131) 97.92167%, rgba(20, 24, 29, 0.985565) 99.03%, #14181d), linear-gradient(0deg, #14181d, #14181d 21.48148%, rgba(20, 24, 29, 0.985565) 23.63704%, rgba(20, 24, 29, 0.945131) 26.1%, rgba(20, 24, 29, 0.883007) 28.80741%, rgba(20, 24, 29, 0.803499) 31.70741%, rgba(20, 24, 29, 0.710915) 34.74074%, rgba(20, 24, 29, 0.609563) 37.84815%, rgba(20, 24, 29, 0.50375) 40.97407%, rgba(20, 24, 29, 0.397784) 44.05926%, rgba(20, 24, 29, 0.295973) 47.04815%, rgba(20, 24, 29, 0.202624) 49.88148%, rgba(20, 24, 29, 0.122044) 52.5%, rgba(20, 24, 29, 0.0585423) 54.85185%, rgba(20, 24, 29, 0.0164249) 56.87778%, rgba(20, 24, 29, 0) 58.51852%);\n}\n#front-page .backdrop .shown {\n  opacity: 0.7;\n  transition: opacity 0.6s ease-in;\n}\n#front-page .backdrop .hidden {\n  opacity: 0;\n  position: fixed;\n  transition: opacity 0.6s ease-in;\n}\n#front-page #tpa-backdrop.hidden {\n  transition: none;\n}\n#front-page .slogan-container {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 16em;\n}\n#front-page .slogan-1 {\n  color: white;\n  font-size: 1.3rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  text-align: center;\n  font-family: \"Barlow\", sans-serif;\n}\n#front-page .slogan-2 {\n  color: white;\n  font-size: 1.8rem;\n  font-weight: 900;\n  text-transform: uppercase;\n  text-align: center;\n  font-family: \"Barlow\", sans-serif;\n}\n#front-page .mobile-discover-btn-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  margin-bottom: 2em;\n  width: 100%;\n  padding-bottom: 2em;\n}\n#front-page .front-page-btn {\n  color: white;\n  background: transparent;\n  padding: 0.5em;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  border-style: none;\n  background-color: var(--dark-gold);\n}\n#front-page .front-page-btn:hover {\n  background-color: var(--light-gold);\n}\n#front-page .mobile-search-container {\n  position: relative;\n  display: block;\n  max-width: 100%;\n  margin: auto;\n}\n#front-page .mobile-search-container .auto-complete-names {\n  max-height: 10rem;\n}\n#front-page .discover-btn-container {\n  position: absolute;\n  margin-bottom: 3em;\n  display: none;\n  top: 21.5em;\n}\n#front-page .discover-btn {\n  border-style: solid;\n  color: var(--rasin-black);\n  border-color: var(--rasin-black);\n  background-color: var(--dark-gold);\n  font-size: 1.4em;\n  border-radius: 75% 10%/0% 75%;\n  text-decoration: none;\n  padding: 0.5em;\n}\n#front-page .discover-btn:hover {\n  background-color: var(--light-gold);\n}\n#front-page .navigation-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n#front-page .desktop-search-container {\n  position: relative;\n  display: none;\n  max-width: 100%;\n}\n#front-page .auto-complete-names {\n  position: absolute;\n  border: 1px solid #d4d4d4;\n  border-bottom: none;\n  border-top: none;\n  z-index: 4;\n  top: 100%;\n  width: 100%;\n  max-height: 14rem;\n  overflow: auto;\n  scroll-behavior: smooth;\n  display: none;\n}\n#front-page .auto-complete-name-wrapper {\n  padding: 10px;\n  cursor: pointer;\n  background-color: #fff;\n  border-bottom: 1px solid #d4d4d4;\n  color: var(--rasin-black);\n  font-weight: 600;\n  width: 100%;\n}\n#front-page .auto-complete-name-wrapper:hover {\n  background-color: var(--light-gold);\n}\n#front-page .auto-complete-name-wrapper:focus {\n  background-color: var(--light-gold);\n}\n#front-page .search {\n  padding: 0.5em;\n  min-width: 18em;\n  background: #e2e4e9;\n  outline: none;\n  border-style: none;\n  color: var(--rasin-black);\n  font-weight: 600;\n  min-height: 2.6em;\n  font-size: 1em;\n}\n#front-page .legal-boilerplate {\n  color: white;\n  font-size: 0.8em;\n  position: absolute;\n  bottom: 0;\n  padding: 0 1.3em 0.6em 1.3em;\n  text-align: center;\n  background-color: var(--dark-gold);\n  width: 100%;\n  font-weight: 600;\n}\n@media (min-width: 700px) {\n  #front-page .mobile-search-container {\n    display: none;\n  }\n  #front-page .desktop-search-container {\n    display: block;\n  }\n}\n@media (min-width: 1200px) {\n  #front-page .mobile-discover-btn-container {\n    display: none;\n  }\n  #front-page .discover-btn-container {\n    display: block;\n  }\n  #front-page .legal-boilerplate {\n    font-size: 1em;\n    padding-top: 0.6em;\n  }\n  #front-page .slogan-container {\n    top: 30em;\n  }\n  #front-page .slogan-1 {\n    font-size: 1.8rem;\n  }\n  #front-page .slogan-2 {\n    font-size: 2.1rem;\n  }\n}\n@media (max-width: 1400px) {\n  #front-page .discover-btn-container {\n    top: 18em;\n  }\n}", "",{"version":3,"sources":["webpack://./src/stylesheets/frontpage.scss"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n\n}\n\n:root {\n  --rasin-black: #1d1e2c;\n  --transparent-rasin-black: #1d1e2c91;\n  --dark-gold: #927543;\n  --light-gold: #c7ab6e;\n}\n\n#front-page {\n  background-color: var(--rasin-black);\n  min-height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: -4;\n  font-family: \"Barlow\", sans-serif;\n\n  .app-name-container {\n    background-color: var(--dark-gold);\n    padding: 0.3em;\n    border-radius: 8px 0px 8px 0;\n    cursor: pointer;\n  }\n\n  .app-name {\n    font-weight: 900;\n    font-size: 2rem;\n    letter-spacing: 3px;\n  }\n\n  .app-name-container:hover {\n    color: var(--dark-gold);\n    background-color: white;\n  }\n\n  .page-header {\n    display: flex;\n    justify-content: space-evenly;\n    color: white;\n    background-color: var(--rasin-black);\n    max-width: 100%;\n    padding: 1em 0;\n    border-style: solid;\n    border-color: var(--dark-gold);\n    border-width: 0 0 2px 0;\n    align-items: center;\n  }\n\n  .app-name-display-container {\n    position: absolute;\n    top: 0;\n    letter-spacing: 3px;\n    background-color: #181a20b3;\n    padding: 0.2em;\n    border-radius: 11px;\n    width: 100%;\n    height: 100%;\n    text-align: center;\n    padding-top: 6em;\n  }\n\n  .app-name-display {\n    font-size: 2em;\n    margin-bottom: 6px;\n    color: var(--light-gold);\n  }\n\n  .slogan-display {\n    color: white;\n    font-size: 1.2em;\n    margin-top: 2em;\n  }\n\n  .search {\n    padding: 0.5em;\n    min-width: 18em;\n    background: #e2e4e9;\n    outline: none;\n    border-style: none;\n    color: var(--rasin-black);\n    font-weight: 600;\n    min-height: 2.6em;\n    font-size: 1em;\n\n  }\n\n  .splash-section {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    position: relative;\n    align-items: center;\n  }\n\n  .backdrop-img {\n    max-width: 100%;\n    min-height: 50vh;\n    background-color: transparent;\n    color: #222;\n    opacity: 0.7;\n  }\n\n  .backdrop {\n    z-index: -2;\n    position: relative;\n    width: 100%;\n  }\n  \n  .backdrop::after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    z-index: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-repeat: no-repeat;\n    background-image: linear-gradient(90deg,#14181d,rgba(20,24,29,.985565) .97%,rgba(20,24,29,.945131) 2.07833%,rgba(20,24,29,.883007) 3.29667%,rgba(20,24,29,.803499) 4.60167%,rgba(20,24,29,.710915) 5.96667%,rgba(20,24,29,.609563) 7.365%,rgba(20,24,29,.50375) 8.77167%,rgba(20,24,29,.397784) 10.16%,rgba(20,24,29,.295973) 11.505%,rgba(20,24,29,.202624) 12.78%,rgba(20,24,29,.122044) 13.95833%,rgba(20,24,29,.0585423) 15.01667%,rgba(20,24,29,.0164249) 15.92833%,rgba(20,24,29,0) 16.66667%,rgba(20,24,29,0) 83.33333%,rgba(20,24,29,.0164249) 84.07167%,rgba(20,24,29,.0585423) 84.98333%,rgba(20,24,29,.122044) 86.04167%,rgba(20,24,29,.202624) 87.22%,rgba(20,24,29,.295973) 88.495%,rgba(20,24,29,.397784) 89.84%,rgba(20,24,29,.50375) 91.22833%,rgba(20,24,29,.609563) 92.635%,rgba(20,24,29,.710915) 94.03333%,rgba(20,24,29,.803499) 95.39833%,rgba(20,24,29,.883007) 96.70333%,rgba(20,24,29,.945131) 97.92167%,rgba(20,24,29,.985565) 99.03%,#14181d),linear-gradient(0deg,#14181d,#14181d 21.48148%,rgba(20,24,29,.985565) 23.63704%,rgba(20,24,29,.945131) 26.1%,rgba(20,24,29,.883007) 28.80741%,rgba(20,24,29,.803499) 31.70741%,rgba(20,24,29,.710915) 34.74074%,rgba(20,24,29,.609563) 37.84815%,rgba(20,24,29,.50375) 40.97407%,rgba(20,24,29,.397784) 44.05926%,rgba(20,24,29,.295973) 47.04815%,rgba(20,24,29,.202624) 49.88148%,rgba(20,24,29,.122044) 52.5%,rgba(20,24,29,.0585423) 54.85185%,rgba(20,24,29,.0164249) 56.87778%,rgba(20,24,29,0) 58.51852%);\n  }\n\n  .backdrop .shown {\n    opacity: 0.7;\n    transition: opacity 0.6s ease-in;\n  }\n\n  .backdrop .hidden {\n    opacity: 0;\n    position: fixed;\n    transition: opacity 0.6s ease-in;\n  }\n\n  #tpa-backdrop.hidden{\n    transition: none;\n  }\n\n  .slogan-container {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    top: 16em;\n  }\n\n  .slogan-1 {\n    color: white;\n    font-size: 1.3rem;\n    font-weight: 600;\n    text-transform: uppercase;\n    text-align: center;\n    font-family: 'Barlow', sans-serif;  \n  }\n\n  .slogan-2 {\n    color: white;\n    font-size: 1.8rem;\n    font-weight: 900;\n    text-transform: uppercase;\n    text-align: center;\n    font-family: 'Barlow', sans-serif;  \n  }\n\n  .mobile-discover-btn-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    margin-bottom: 2em;\n    width: 100%;\n    padding-bottom: 2em;\n  }\n\n  .front-page-btn {\n    color: white;\n    background: transparent;\n    padding: 0.5em;\n    font-size: 1rem;\n    font-weight: 600;\n    cursor: pointer;\n    border-style: none;\n    background-color: var(--dark-gold);\n  }\n\n  .front-page-btn:hover {\n    background-color: var(--light-gold);\n  }\n\n  .mobile-search-container {\n    position: relative;\n    display: block;\n    max-width: 100%;\n    margin: auto;\n\n    .auto-complete-names {\n      max-height: 10rem;\n    }\n  }\n\n  .discover-btn-container {\n    position: absolute;\n    margin-bottom: 3em;\n    display: none;\n    top: 21.5em;\n  }\n\n  .discover-btn {\n    border-style: solid;\n    color: var(--rasin-black);\n    border-color: var(--rasin-black);\n    background-color: var(--dark-gold);\n    font-size: 1.4em;\n    border-radius: 75% 10%/0% 75%;\n    text-decoration: none;\n    padding: 0.5em;\n  }\n\n  .discover-btn:hover {\n    background-color: var(--light-gold)\n  }\n\n  .navigation-section {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .desktop-search-container {\n    position: relative;\n    display: none;\n    max-width: 100%;\n  }\n\n  .auto-complete-names {\n    position: absolute;\n    border: 1px solid #d4d4d4;\n    border-bottom: none;\n    border-top: none;\n    z-index: 4;\n    top: 100%;\n    width: 100%;\n    max-height: 14rem;\n    overflow: auto;\n    scroll-behavior: smooth; \n    display: none;\n  }\n\n  .auto-complete-name-wrapper {\n    padding: 10px;\n    cursor: pointer;\n    background-color: #fff; \n    border-bottom: 1px solid #d4d4d4; \n    color: var(--rasin-black);\n    font-weight: 600;\n    width: 100%;\n  }\n\n  .auto-complete-name-wrapper:hover {\n    background-color: var(--light-gold);\n  }\n\n  .auto-complete-name-wrapper:focus {\n    background-color: var(--light-gold);\n  }\n  \n  .search {\n    padding: 0.5em;\n    min-width: 18em;\n    background: #e2e4e9;\n    outline: none;\n    border-style: none;\n    color: var(--rasin-black);\n    font-weight: 600;\n    min-height: 2.6em;\n    font-size: 1em;\n  }\n\n  .legal-boilerplate {\n    color: white;\n    font-size: 0.8em;\n    position: absolute;\n    bottom: 0;\n    padding: 0 1.3em 0.6em 1.3em;\n    text-align: center;\n    background-color: var(--dark-gold);\n    width: 100%;\n    font-weight: 600;\n  }\n\n  @media (min-width: 700px) {\n    .mobile-search-container {\n      display: none;\n    }\n\n    .desktop-search-container {\n      display: block;\n    }\n  }\n\n  @media (min-width: 1200px) {\n    .mobile-discover-btn-container {\n      display: none;\n    }\n\n    .discover-btn-container {\n      display: block;\n    }\n\n    .legal-boilerplate {\n      font-size: 1em;\n      padding-top: 0.6em;\n    }\n\n    .slogan-container {\n      top: 30em;\n    }\n\n    .slogan-1 {\n      font-size: 1.8rem;\n    }\n\n    .slogan-2 {\n      font-size: 2.1rem;\n    }\n  }\n\n  @media (max-width: 1400px) {\n    .discover-btn-container {\n      top: 18em;\n    }\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stylesheets/modals.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stylesheets/modals.scss ***!
  \******************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n}\n\n:root {\n  --rasin-black: #1d1e2c;\n  --dark-gold: #927543;\n  --light-gold: #c7ab6e;\n}\n\nbody {\n  font-family: \"Inter\", Arial, Helvetica, sans-serif;\n}\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  padding: 2rem 0;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.4);\n  font-family: \"Barlow\", sans-serif;\n}\n.modal #main-container {\n  position: relative;\n  margin: auto;\n  padding: 0;\n  max-width: 75%;\n  min-height: 49rem;\n  margin-top: 0;\n  background: rgba(0, 0, 0, 0.1);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -webkit-animation-name: animatetop;\n  -webkit-animation-duration: 0.4s;\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  border: 1px solid #888;\n  display: block;\n}\n.modal #main-container #main {\n  color: var(--dark-gold);\n}\n.modal .modal-header {\n  background-color: #181a20e0;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 1em;\n  border-color: var(--dark-gold);\n  border-style: solid;\n  padding: 0;\n  border-radius: 0;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  background-color: #181a20bf;\n}\n.modal .navigation-bar {\n  display: flex;\n  background-color: var(--rasin-black);\n  width: 100%;\n  align-items: center;\n}\n.modal .close-modal-btn-wrapper {\n  position: absolute;\n  left: 1.2em;\n}\n.modal .close-modal-btn {\n  cursor: pointer;\n  font-weight: 900;\n  font-size: 1.6em;\n}\n.modal .close-modal-btn:hover {\n  color: var(--light-gold);\n}\n.modal .modal-nav-links {\n  display: flex;\n  justify-content: space-evenly;\n  font-size: 22px;\n  width: 100%;\n}\n.modal .modal-nav-link {\n  cursor: pointer;\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n}\n.modal .modal-nav-link:hover {\n  color: var(--dark-gold);\n}\n.modal .champion-heading {\n  margin: auto;\n  text-align: center;\n  font-size: 20px;\n  color: white;\n}\n.modal .champion-name {\n  margin: auto;\n}\n.modal .champion-title {\n  color: var(--light-gold);\n  font-size: 20px;\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n}\n.modal .champion-roles {\n  display: flex;\n  justify-content: center;\n}\n.modal .champion-role {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-left: 2rem;\n  margin-right: 2rem;\n}\n.modal .champion-resource {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-left: 2rem;\n  margin-right: 2rem;\n}\n.modal .champion-role-image {\n  height: 3.5rem;\n  width: 3.5rem;\n}\n.modal .champion-resource-image {\n  height: 3.5rem;\n  width: 3.5rem;\n}\n.modal .champion-role-name {\n  font-weight: 600;\n  font-size: 20px;\n}\n.modal .champion-resource-name {\n  font-weight: 600;\n  font-size: 20px;\n}\n.modal .champion-main-info {\n  padding: 1.8rem;\n  max-width: 34rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: last baseline;\n}\n@-webkit-keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n.modal .lore-container {\n  background-color: #181a20e0;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 1em;\n  border-color: var(--dark-gold);\n  border-style: solid;\n}\n.modal .subheading {\n  margin: auto;\n  margin-bottom: 0.4em;\n  color: var(--light-gold);\n  text-align: center;\n}\n.modal .abilities-container {\n  background-color: #181a20e0;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 1em;\n  border-color: var(--dark-gold);\n  border-style: solid;\n  width: 28em;\n}\n.modal .abilities-heading {\n  text-align: center;\n}\n.modal .ability-imgs {\n  margin-bottom: 1em;\n  display: flex;\n  justify-content: space-evenly;\n}\n.modal .ability-description {\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n}\n.modal .champion-details {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.modal .champion-extra-info {\n  display: flex;\n  flex-direction: column;\n}\n.modal .ability-info {\n  display: none;\n}\n.modal .ability-info.active {\n  display: flex;\n  flex-direction: column;\n}\n.modal .spell-img {\n  cursor: pointer;\n  margin: 0 0.5rem;\n  height: 3.3rem;\n  width: 3.3rem;\n}\n.modal .spell-img.clicked {\n  border-style: solid;\n  border-color: var(--dark-gold);\n  border-width: 4px;\n}\n.modal .champion-tips-section {\n  background-color: #181a20e0;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 1em;\n  border-color: var(--dark-gold);\n  border-style: solid;\n  margin-bottom: auto;\n  max-width: 34rem;\n  text-align: center;\n}\n.modal .champion-tips {\n  display: flex;\n  flex-direction: column;\n}\n.modal .champion-tip {\n  margin-bottom: 1em;\n}\n.modal #stats-container {\n  position: relative;\n  margin: auto;\n  padding: 0;\n  max-width: 75%;\n  min-height: 49rem;\n  margin-top: 0;\n  background: rgba(0, 0, 0, 0.1);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -webkit-animation-name: animatetop;\n  -webkit-animation-duration: 0.4s;\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  border: 1px solid #888;\n  display: none;\n}\n.modal #stats-container #stats {\n  color: var(--dark-gold);\n}\n.modal .champion-stats-overview {\n  display: flex;\n  justify-content: space-evenly;\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n  max-width: 25rem;\n  min-width: 20rem;\n  font-size: 24px;\n}\n.modal .win-rate {\n  display: flex;\n  flex-direction: column;\n}\n.modal .pick-rate {\n  display: flex;\n  flex-direction: column;\n}\n.modal .lane-info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.modal .pick-rate-value {\n  margin-top: 0.4em;\n  color: var(--light-gold);\n}\n.modal .win-rate-value {\n  margin-top: 0.4em;\n  color: var(--light-gold);\n}\n.modal .label {\n  font-size: 20px;\n}\n.modal .champion-damage-container {\n  background-color: #181a20e0;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 1em;\n  border-color: var(--dark-gold);\n  border-style: solid;\n  max-height: 17.5rem;\n  font-size: 1em;\n}\n.modal .damage-heading {\n  text-align: center;\n}\n.modal .circular-chart {\n  display: block;\n  margin: auto;\n  width: 80%;\n  max-height: 14em;\n}\n.modal .circle {\n  fill: none;\n  stroke-width: 2.2;\n  stroke-linecap: round;\n  animation: progress 1s ease-out forwards;\n}\n.modal #magic-damage-stroke {\n  stroke: #35a7ff;\n}\n.modal #physical-damage-stroke {\n  stroke: #ff5964;\n}\n.modal #true-damage-stroke {\n  stroke: #ffe74c;\n}\n@keyframes progress {\n  0% {\n    stroke-dasharray: 0 100;\n  }\n}\n.modal .total-damage-text {\n  font-size: 4px;\n  text-anchor: middle;\n  fill: white;\n}\n.modal .total-damage-label {\n  font-size: 3px;\n  text-anchor: middle;\n  fill: var(--dark-gold);\n}\n.modal .champion-main-stats {\n  display: flex;\n  justify-content: space-evenly;\n}\n.modal .champion-item-builds {\n  background-color: #181a20e0;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 1em;\n  border-color: var(--dark-gold);\n  border-style: solid;\n  max-height: 17.5rem;\n}\n.modal .damage-stats-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n}\n.modal .damage-info {\n  display: flex;\n  max-height: 92%;\n  height: 92%;\n  font-size: 1em;\n}\n.modal .damage-type-container {\n  display: flex;\n  flex-direction: column;\n  font-size: 1em;\n}\n.modal .damage-stats {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n.modal #physical-damage-label {\n  color: #ff5964;\n}\n.modal #magic-damage-label {\n  color: #35a7ff;\n}\n.modal #true-damage-label {\n  color: #ffe74c;\n}\n.modal .item-details-container {\n  background-color: #181a20e0;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 1em;\n  border-color: var(--dark-gold);\n  border-style: solid;\n  font-size: 14px;\n  display: none;\n  position: absolute;\n  background-color: #181a20;\n  margin-right: 2rem;\n  flex-direction: column;\n  justify-content: space-evenly;\n  width: 40%;\n  right: 10em;\n  margin-bottom: 3.5em;\n  text-align: center;\n}\n.modal .item-name {\n  font-weight: 600;\n  font-size: 16px;\n}\n.modal .main-item {\n  display: flex;\n  flex-direction: column-reverse;\n}\n.modal .cost-label {\n  color: var(--light-gold);\n  font-size: 16px;\n}\n.modal .component-items-container {\n  display: flex;\n}\n.modal .component-item-name {\n  font-size: 16px;\n}\n.modal .cost-amount {\n  font-size: 16px;\n}\n.modal .component-item-cost-label {\n  color: var(--light-gold);\n  font-size: 16px;\n}\n.modal .component-item-amount {\n  font-size: 16px;\n}\n.modal .component-item-details-container {\n  background-color: #181a20e0;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 1em;\n  border-color: var(--dark-gold);\n  border-style: solid;\n  font-size: 14px;\n  display: none;\n  position: absolute;\n  background-color: #181a20;\n  flex-direction: column;\n}\n.modal .item-sets-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  max-height: 90%;\n}\n.modal .item-set-container {\n  display: flex;\n  justify-content: center;\n  max-width: 100%;\n  border-style: none;\n  border-width: 2px;\n  padding: 0.4em;\n}\n.modal .main-component-container {\n  background-color: #181a20e0;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 1em;\n  border-color: var(--dark-gold);\n  border-style: solid;\n  background-color: #06040083;\n  border-radius: 1em;\n  color: white;\n  margin: 0em;\n  font-weight: 600;\n  font-size: 16px;\n  border-style: solid;\n  padding: 0;\n  border-radius: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-width: 1px;\n}\n.modal .item-img {\n  max-width: 2.7em;\n  max-height: 2.7em;\n  border-radius: 1em;\n  padding-bottom: 0;\n}\n.modal .component-item-img {\n  max-width: 1.8em;\n  max-height: 1.8em;\n}\n.modal .champion-matchups {\n  background-color: #181a20e0;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 1em;\n  border-color: var(--dark-gold);\n  border-style: solid;\n  max-height: 25.2rem;\n  margin-bottom: 0;\n  border-radius: 0 0 0 0;\n  display: flex;\n  justify-content: space-evenly;\n}\n.modal .matchups {\n  display: flex;\n  justify-content: space-around;\n  max-width: 24rem;\n}\n.modal .matchup-info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  background-color: #17161a;\n  padding: 0.5em;\n  margin: auto 0.5em;\n  border-radius: 1em;\n}\n.modal .matchup-info:hover {\n  background-color: #17161ac9;\n}\n.modal .matchup-stats {\n  display: flex;\n  flex-direction: column;\n  font-size: 14px;\n  font-family: \"Helvetica Neue\", Helvetica, \"Apple SD Gothic Neo\", AppleGothic, Dotum, Arial, Tahoma;\n}\n.modal .enemy-champion-img {\n  border-radius: 50%;\n  max-height: 3em;\n  max-width: 3em;\n  margin-bottom: 0.5em;\n}\n.modal .winrate-against-percentage.blue {\n  color: #35a7ff;\n}\n.modal .winrate-against-percentage.red {\n  color: #ff5964;\n}\n.modal #skins-container {\n  position: relative;\n  margin: auto;\n  padding: 0;\n  max-width: 75%;\n  min-height: 49rem;\n  margin-top: 0;\n  background: rgba(0, 0, 0, 0.1);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -webkit-animation-name: animatetop;\n  -webkit-animation-duration: 0.4s;\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  border: 1px solid #888;\n  display: none;\n  position: absolute;\n  min-height: 0;\n  margin: 0 auto;\n  max-width: 99%;\n  width: 99%;\n}\n.modal #skins-container .navigation-bar {\n  border-bottom: solid 3px var(--dark-gold);\n}\n.modal #skins-container #skins {\n  color: var(--dark-gold);\n}\n.modal #skins-container .modal-header {\n  margin-bottom: 0;\n}\n.modal .skin-image-container {\n  box-sizing: border-box;\n  max-width: 100%;\n  display: none;\n}\n.modal .skin-image-container.shown {\n  display: block;\n}\n.modal .skin-image {\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n.modal .skin-name {\n  font-size: 1em;\n}\n.modal #skins-container .champion-heading {\n  display: flex;\n  background-color: var(--rasin-black);\n  justify-content: space-evenly;\n  width: 100%;\n  align-items: center;\n}\n.modal .img-scroll-arrow {\n  cursor: pointer;\n  font-size: 1.5em;\n}\n.modal .img-scroll-arrow:hover {\n  color: var(--dark-gold);\n}\n@media (max-width: 1120px) {\n  .modal .component-item-img {\n    display: none;\n  }\n  .modal .item-sets-container {\n    min-height: 80%;\n  }\n  .modal .item-details-container {\n    min-width: 70%;\n    right: -6em;\n  }\n}\n@media (max-width: 1250px) {\n  .modal .item-img {\n    max-height: 2.2rem;\n    max-width: 2.2rem;\n  }\n  .modal .champion-details {\n    flex-direction: column-reverse;\n  }\n  .modal .abilities-container {\n    text-align: center;\n    width: auto;\n    max-width: 31rem;\n  }\n  .modal .lore-container {\n    text-align: center;\n  }\n  .modal #main-container {\n    height: 76rem;\n  }\n  .modal .item-details-container {\n    min-width: 70%;\n    right: -6em;\n  }\n}\n@media (max-width: 700px) {\n  .modal .item-sets-container {\n    flex-direction: row;\n  }\n  .modal .item-set-container {\n    flex-direction: column;\n  }\n  .modal .matchups {\n    flex-direction: column;\n  }\n  .modal .champion-matchups {\n    max-height: 28.2rem;\n  }\n  .modal .matchup-info {\n    margin: 0.2em auto;\n  }\n  .modal #main-container {\n    max-width: 100%;\n  }\n  .modal #stats-container {\n    max-width: 100%;\n    min-height: 63rem;\n  }\n  .modal .item-details-container {\n    right: -1em;\n  }\n}\n@media (max-width: 840px) {\n  .modal .damage-info {\n    flex-direction: column-reverse;\n    justify-content: space-between;\n    font-size: 15px;\n  }\n  .modal .games-played-against {\n    display: none;\n  }\n  .modal .damage-stats-container {\n    flex-direction: row;\n  }\n}\n@media (max-width: 560px) {\n  .modal .champion-main-stats {\n    flex-direction: column;\n  }\n  .modal .item-set-container {\n    flex-direction: row;\n  }\n  .modal .item-sets-container {\n    flex-direction: column;\n  }\n  .modal .champion-damage-container {\n    max-width: 100%;\n    align-items: center;\n  }\n  .modal .damage-stats-info {\n    flex-direction: column;\n  }\n  .modal .damage-info {\n    flex-direction: row;\n    align-items: flex-start;\n  }\n  .modal .damage-type-container {\n    margin: 0.2em auto;\n  }\n  .modal .circular-chart {\n    max-height: 195px;\n    max-width: 80%;\n  }\n  .modal .damage-stats-container {\n    flex-direction: column;\n  }\n  .modal .champion-role {\n    margin-left: 0.5em;\n    margin-right: 0.5em;\n  }\n  .modal .champion-resource {\n    margin-left: 0.5em;\n    margin-right: 0.5em;\n  }\n  .modal .champion-roles {\n    font-size: 20px;\n  }\n  .modal .spell-img {\n    height: 2.8em;\n    width: 2.8em;\n    margin: auto;\n  }\n  .modal .item-details-container {\n    right: 2em;\n  }\n}\n@media (max-width: 414px) {\n  .modal .champion-stats-overview {\n    font-size: 20px;\n    min-width: 17rem;\n  }\n  .modal .champion-name {\n    font-size: 2rem;\n  }\n  .modal .modal-nav-links {\n    font-size: 18px;\n  }\n  .modal .close-modal-btn-wrapper {\n    left: 0.7em;\n  }\n  .modal .close-modal-btn {\n    font-size: 1.2em;\n  }\n}\n@media (min-width: 1300px) {\n  .modal #skins-container {\n    position: relative;\n    max-width: 70%;\n    min-height: auto;\n  }\n}\n@media (min-width: 1950px) {\n  .modal #skins-container {\n    max-width: 50%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/stylesheets/modals.scss"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n}\n\n:root {\n  --rasin-black: #1d1e2c;\n  --dark-gold: #927543;\n  --light-gold: #c7ab6e;\n}\n\n@mixin containerBackground {\n  background-color: #181a20e0;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 1em;\n  border-color: var(--dark-gold);\n  border-style: solid;\n}\n\n@mixin subHeadingStyle {\n  margin: auto;\n  margin-bottom: 0.4em;\n  color: var(--light-gold);\n  text-align: center;\n}\n\n@mixin iconSize {\n  height: 3.5rem;\n  width: 3.5rem;\n}\n\n@mixin iconText {\n  font-weight: 600;\n  font-size: 20px;\n}\n\n@mixin iconContainer {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-left: 2rem;\n  margin-right: 2rem;\n}\n\n@mixin smallMargin {\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n}\n\n@mixin modalContentContainer {\n  position: relative;\n  margin: auto;\n  padding: 0;\n  max-width: 75%;\n  min-height: 49rem;\n  margin-top: 0;\n  background: rgba(0, 0, 0, 0.1);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -webkit-animation-name: animatetop;\n  -webkit-animation-duration: 0.4s;\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  border: 1px solid #888;\n}\n\nbody {\n  font-family: \"Inter\", Arial, Helvetica, sans-serif;\n}\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  padding: 2rem 0;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgb(0, 0, 0, 0.4);\n  font-family: \"Barlow\", sans-serif;\n\n  #main-container {\n    @include modalContentContainer();\n    display: block;\n\n    #main {\n      color: var(--dark-gold);\n    }\n  }\n\n  .modal-header {\n    @include containerBackground();\n    padding: 0;\n    border-radius: 0;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    background-color: #181a20bf;\n  }\n\n  .navigation-bar {\n    display: flex;\n    background-color: var(--rasin-black);\n    width: 100%;\n    align-items: center;\n  }\n\n  .close-modal-btn-wrapper {\n    position: absolute;\n    left: 1.2em;\n  }\n\n  .close-modal-btn {\n    cursor: pointer;\n    font-weight: 900;\n    font-size: 1.6em;\n  }  \n\n  .close-modal-btn:hover {\n    color: var(--light-gold);\n  }\n\n  .modal-nav-links {\n    display: flex;\n    justify-content: space-evenly;\n    font-size: 22px;\n    width: 100%;\n  }\n\n  .modal-nav-link {\n    cursor: pointer;\n    @include smallMargin();\n  }\n\n  .modal-nav-link:hover {\n    color: var(--dark-gold);\n  }\n\n  .champion-heading {\n    margin: auto;\n    text-align: center;\n    font-size: 20px;\n    color: white;\n  }\n\n  .champion-name {\n    margin: auto;\n  }\n\n  .champion-title {\n    color: var(--light-gold);\n    font-size: 20px;\n    @include smallMargin();\n  }\n\n  .champion-roles {\n    display: flex;\n    justify-content: center;\n  }\n\n  .champion-role {\n    @include iconContainer();\n  }\n\n  .champion-resource {\n    @include iconContainer();\n  }\n\n  .champion-role-image {\n    @include iconSize();\n  }\n\n  .champion-resource-image {\n    @include iconSize();\n  }\n\n  .champion-role-name {\n    @include iconText();\n  }\n\n  .champion-resource-name {\n    @include iconText();\n  }\n\n  .champion-main-info {\n    padding: 1.8rem;\n    max-width: 34rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: last baseline;\n  }\n\n  @-webkit-keyframes animatetop {\n    from {\n      top: -300px;\n      opacity: 0;\n    }\n    to {\n      top: 0;\n      opacity: 1;\n    }\n  }\n\n  @keyframes animatetop {\n    from {\n      top: -300px;\n      opacity: 0;\n    }\n    to {\n      top: 0;\n      opacity: 1;\n    }\n  }\n\n  .lore-container {\n    @include containerBackground();\n  }\n\n  .subheading {\n    @include subHeadingStyle();\n  }\n\n  .abilities-container {\n    @include containerBackground();\n    width: 28em;\n  }\n\n  .abilities-heading {\n    text-align: center;\n  }\n\n  .ability-imgs {\n    margin-bottom: 1em;\n    display: flex;\n    justify-content: space-evenly;\n  }\n\n  .ability-description {\n    @include smallMargin();\n  }\n\n  .champion-details {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .champion-extra-info {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .ability-info {\n    display: none;\n  }\n\n  .ability-info.active {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .spell-img {\n    cursor: pointer;\n    margin: 0 0.5rem;\n    height: 3.3rem;\n    width: 3.3rem;\n  }\n\n  .spell-img.clicked {\n    border-style: solid;\n    border-color: var(--dark-gold);\n    border-width: 4px;\n  }\n\n  .champion-tips-section {\n    @include containerBackground();\n    margin-bottom: auto;\n    max-width: 34rem;\n    text-align: center;\n  }\n\n  .champion-tips {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .champion-tip {\n    margin-bottom: 1em;\n  }\n\n  #stats-container {\n    @include modalContentContainer();\n    display: none;\n\n    #stats {\n      color: var(--dark-gold);\n    }\n  }\n\n  .champion-stats-overview {\n    display: flex;\n    justify-content: space-evenly;\n    @include smallMargin();\n    max-width: 25rem;\n    min-width: 20rem;\n    font-size: 24px;\n  }\n\n  .win-rate {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .pick-rate {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .lane-info {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .pick-rate-value {\n    margin-top: 0.4em;\n    color: var(--light-gold);\n  }\n\n  .win-rate-value {\n    margin-top: 0.4em;\n    color: var(--light-gold);\n  }\n\n  .label {\n    font-size: 20px;\n  }\n\n  .champion-damage-container {\n    @include containerBackground();\n    max-height: 17.5rem;\n    font-size: 1em;\n  }\n\n  .damage-heading {\n    text-align: center;\n  }\n\n  .circular-chart {\n    display: block;\n    margin: auto;\n    width: 80%;\n    max-height: 14em;\n  }\n\n  .circle {\n    fill: none;\n    stroke-width: 2.2;\n    stroke-linecap: round;\n    animation: progress 1s ease-out forwards;\n  }\n\n  #magic-damage-stroke {\n    stroke: #35a7ff;\n  }\n\n  #physical-damage-stroke {\n    stroke: #ff5964;\n  }\n\n  #true-damage-stroke {\n    stroke: #ffe74c;\n  }\n\n  @keyframes progress {\n    0% {\n      stroke-dasharray: 0 100;\n    }\n  }\n\n  .total-damage-text {\n    font-size: 4px;\n    text-anchor: middle;\n    fill: white;\n  }\n\n  .total-damage-label {\n    font-size: 3px;\n    text-anchor: middle;\n    fill: var(--dark-gold);\n  }\n\n  .champion-main-stats {\n    display: flex;\n    justify-content: space-evenly;\n  }\n\n  .champion-item-builds {\n    @include containerBackground();\n    max-height: 17.5rem;\n  }\n\n  .damage-stats-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n  }\n\n  .damage-info {\n    display: flex;\n    max-height: 92%;\n    height: 92%;\n    font-size: 1em;\n  }\n\n  .damage-type-container {\n    display: flex;\n    flex-direction: column;\n    font-size: 1em;\n  }\n\n  .damage-stats {\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n  }\n\n  #physical-damage-label {\n    color: #ff5964;\n  }\n\n  #magic-damage-label {\n    color: #35a7ff;\n  }\n\n  #true-damage-label {\n    color: #ffe74c;\n  }\n\n  .item-details-container {\n    @include containerBackground();\n    font-size: 14px;\n    display: none;\n    position: absolute;\n    background-color: #181a20;\n    margin-right: 2rem;\n    flex-direction: column;\n    justify-content: space-evenly;\n    width: 40%;\n    right: 10em;\n    margin-bottom: 3.5em;\n    text-align: center;\n  }\n\n  .item-name {\n    font-weight: 600;\n    font-size: 16px;\n  }\n\n  .main-item {\n    display: flex;\n    flex-direction: column-reverse;\n  }\n\n  .cost-label {\n    color: var(--light-gold);\n    font-size: 16px;\n  }\n\n  .component-items-container {\n    display: flex;\n  }\n\n  .component-item-name {\n    font-size: 16px;\n  }\n\n  .cost-amount {\n    font-size: 16px;\n  }\n\n  .component-item-cost-label {\n    color: var(--light-gold);\n    font-size: 16px;\n  }\n\n  .component-item-amount {\n    font-size: 16px;\n  }\n\n  .component-item-details-container {\n    @include containerBackground();\n    font-size: 14px;\n    display: none;\n    position: absolute;\n    background-color: #181a20;\n    flex-direction: column;\n  }\n\n  .item-sets-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    max-height: 90%;\n  }\n\n  .item-set-container {\n    display: flex;\n    justify-content: center;\n    max-width: 100%;\n    border-style: none;\n    border-width: 2px;\n    padding: 0.4em;\n  }\n\n  .main-component-container {\n    @include containerBackground();\n    background-color: #06040083;\n    border-radius: 1em;\n    color: white;\n    margin: 0em;\n    font-weight: 600;\n    font-size: 16px;\n    border-style: solid;\n    padding: 0;\n    border-radius: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border-width: 1px;\n  }\n\n  .item-img {\n    max-width: 2.7em;\n    max-height: 2.7em;\n    border-radius: 1em;\n    //padding: 1em;\n    padding-bottom: 0;\n  }\n\n  .component-item-img {\n    max-width: 1.8em;\n    max-height: 1.8em;\n  }\n\n  .champion-matchups {\n    @include containerBackground();\n    max-height: 25.2rem;\n    margin-bottom: 0;\n    border-radius: 0 0 0 0;\n    display: flex;\n    justify-content: space-evenly;\n  }\n\n  .matchups {\n    display: flex;\n    justify-content: space-around;\n    max-width: 24rem;\n  }\n\n  .matchup-info {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    background-color: #17161a;\n    padding: 0.5em;\n    margin: auto 0.5em;\n    border-radius: 1em;\n  }\n\n  .matchup-info:hover {\n    background-color: #17161ac9;\n  }\n\n  .matchup-stats {\n    display: flex;\n    flex-direction: column;\n    font-size: 14px;\n    font-family: \"Helvetica Neue\", Helvetica, \"Apple SD Gothic Neo\", AppleGothic,\n      Dotum, Arial, Tahoma;\n  }\n\n  .enemy-champion-img {\n    border-radius: 50%;\n    max-height: 3em;\n    max-width: 3em;\n    margin-bottom: 0.5em;\n  }\n\n  .winrate-against-percentage.blue {\n    color: #35a7ff;\n  }\n\n  .winrate-against-percentage.red {\n    color: #ff5964;\n  }\n\n  #skins-container {\n    @include modalContentContainer();\n    display:none;\n    position: absolute;\n    min-height: 0;\n    margin: 0 auto;\n    max-width: 99%;\n    width: 99%;\n\n    .navigation-bar {\n      border-bottom: solid 3px var(--dark-gold);\n    }\n\n    #skins {\n      color: var(--dark-gold)\n    }\n  }\n\n  #skins-container .modal-header {\n    margin-bottom: 0;\n  }\n\n  .skin-image-container {\n    box-sizing: border-box;\n    max-width: 100%;\n    display: none;\n  }\n\n  .skin-image-container.shown {\n    display: block;\n  }\n\n  .skin-image {\n    top: 0;\n    left: 0;\n    width: 100%;\n  }\n\n  .skin-name {\n    font-size: 1em;\n  }\n\n  #skins-container .champion-heading {\n    display: flex;\n    background-color: var(--rasin-black);\n    justify-content: space-evenly;\n    width: 100%;\n    align-items: center;\n  }\n\n  .img-scroll-arrow {\n    cursor: pointer;\n    font-size: 1.5em;\n  }\n\n  .img-scroll-arrow:hover {\n    color: var(--dark-gold);\n  }\n\n  @media (max-width: 1120px) {\n    .component-item-img {\n      display: none;\n    }\n\n    .item-sets-container {\n      min-height: 80%;\n    }\n\n    .item-details-container {\n      min-width: 70%;\n      right: -6em;\n    }\n  }\n\n  @media (max-width: 1250px) {\n    .item-img {\n      max-height: 2.2rem;\n      max-width: 2.2rem;\n    }\n\n    .champion-details {\n      flex-direction: column-reverse;\n    }\n\n    .abilities-container {\n      text-align: center;\n      width: auto;\n      max-width: 31rem;\n    }\n\n    .lore-container {\n      text-align: center;\n    }\n\n    #main-container {\n      height: 76rem;\n    }\n\n    .item-details-container {\n      min-width: 70%;\n      right: -6em;\n    }\n  }\n\n  @media (max-width: 700px) {\n    .item-sets-container {\n      flex-direction: row;\n    }\n\n    .item-set-container {\n      flex-direction: column;\n    }\n\n    .matchups {\n      flex-direction: column;\n    }\n\n    .champion-matchups {\n      max-height: 28.2rem;\n    }\n\n    .matchup-info {\n      margin: 0.2em auto;\n    }\n\n    #main-container {\n      max-width: 100%;\n    }\n\n    #stats-container {\n      max-width: 100%;\n      min-height: 63rem;\n    }\n\n    .item-details-container {\n      right: -1em;\n    }\n  }\n\n  @media (max-width: 840px) {\n    .damage-info {\n      flex-direction: column-reverse;\n      justify-content: space-between;\n      font-size: 15px;\n    }\n\n    .games-played-against {\n      display: none;\n    }\n\n    .damage-stats-container {\n      flex-direction: row;\n    }\n  }\n\n  @media (max-width: 560px) {\n    .champion-main-stats {\n      flex-direction: column;\n    }\n\n    .item-set-container {\n      flex-direction: row;\n    }\n\n    .item-sets-container {\n      flex-direction: column;\n    }\n\n    .champion-damage-container {\n      max-width: 100%;\n      align-items: center;\n    }\n\n    .damage-stats-info {\n      flex-direction: column;\n    }\n\n    .damage-info {\n      flex-direction: row;\n      align-items: flex-start;\n    }\n\n    .damage-type-container {\n      margin: 0.2em auto;\n    }\n\n    .circular-chart {\n      max-height: 195px;\n      max-width: 80%;\n    }\n\n    .damage-stats-container {\n      flex-direction: column;\n    }\n\n    .champion-role {\n      margin-left: 0.5em;\n      margin-right: 0.5em;\n    }\n\n    .champion-resource {\n      margin-left: 0.5em;\n      margin-right: 0.5em;\n    }\n\n    .champion-roles {\n      font-size: 20px;\n    }\n\n    .spell-img {\n      height: 2.8em;\n      width: 2.8em;\n      margin: auto;\n    }\n\n    .item-details-container {\n      right: 2em;\n    }\n  }\n\n  @media (max-width: 414px) {\n    .champion-stats-overview {\n      font-size: 20px;\n      min-width: 17rem;\n    }\n\n    .champion-name {\n      font-size: 2rem;\n    }\n\n    .modal-nav-links {\n      font-size: 18px;\n    }\n\n    .close-modal-btn-wrapper {\n      left: 0.7em;\n    }\n\n    .close-modal-btn {\n      font-size: 1.2em;\n    }\n  }\n\n  @media (min-width: 1300px) {\n    #skins-container {\n      position: relative;\n      max-width: 70%;\n      min-height: auto;\n    }\n  }\n\n  @media (min-width: 1950px) {\n    #skins-container {\n      max-width: 50%;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./src/stylesheets/frontpage.scss":
/*!****************************************!*\
  !*** ./src/stylesheets/frontpage.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_frontpage_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./frontpage.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stylesheets/frontpage.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_frontpage_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_frontpage_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_frontpage_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_frontpage_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/stylesheets/modals.scss":
/*!*************************************!*\
  !*** ./src/stylesheets/modals.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modals_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./modals.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stylesheets/modals.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modals_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modals_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modals_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modals_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/images sync \\.(png|jpe?g|svg)$":
/*!**********************************************************!*\
  !*** ./src/images/ sync nonrecursive \.(png|jpe?g|svg)$ ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Assassin.png": "./src/images/Assassin.png",
	"./Blood Well.png": "./src/images/Blood Well.png",
	"./Bottom.png": "./src/images/Bottom.png",
	"./Controller.png": "./src/images/Controller.png",
	"./Courage.png": "./src/images/Courage.png",
	"./Crimson Rush.png": "./src/images/Crimson Rush.png",
	"./Energy.png": "./src/images/Energy.png",
	"./Fighter.png": "./src/images/Fighter.png",
	"./Flow.png": "./src/images/Flow.png",
	"./Fury.png": "./src/images/Fury.png",
	"./Grit.png": "./src/images/Grit.png",
	"./Heat.png": "./src/images/Heat.png",
	"./Jungle.png": "./src/images/Jungle.png",
	"./Mage.png": "./src/images/Mage.png",
	"./Mana.png": "./src/images/Mana.png",
	"./Manaless.png": "./src/images/Manaless.png",
	"./Marksman.png": "./src/images/Marksman.png",
	"./Melee.png": "./src/images/Melee.png",
	"./Middle.png": "./src/images/Middle.png",
	"./Rage.png": "./src/images/Rage.png",
	"./Ranged.png": "./src/images/Ranged.png",
	"./Specialist.png": "./src/images/Specialist.png",
	"./Support.png": "./src/images/Support.png",
	"./Tank.png": "./src/images/Tank.png",
	"./Top.png": "./src/images/Top.png",
	"./Utility.png": "./src/images/Utility.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/images sync \\.(png|jpe?g|svg)$";

/***/ }),

/***/ "./src/images/Assassin.png":
/*!*********************************!*\
  !*** ./src/images/Assassin.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d45be1c2c0bd51f741c2.png";

/***/ }),

/***/ "./src/images/Blood Well.png":
/*!***********************************!*\
  !*** ./src/images/Blood Well.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ffde57f49c47ff0535f2.png";

/***/ }),

/***/ "./src/images/Bottom.png":
/*!*******************************!*\
  !*** ./src/images/Bottom.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "acb28d23af4db3f6fe89.png";

/***/ }),

/***/ "./src/images/Controller.png":
/*!***********************************!*\
  !*** ./src/images/Controller.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fcb308589bac446b07c4.png";

/***/ }),

/***/ "./src/images/Courage.png":
/*!********************************!*\
  !*** ./src/images/Courage.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "02f6ab0cf6c865d1bb56.png";

/***/ }),

/***/ "./src/images/Crimson Rush.png":
/*!*************************************!*\
  !*** ./src/images/Crimson Rush.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "02f6ab0cf6c865d1bb56.png";

/***/ }),

/***/ "./src/images/Energy.png":
/*!*******************************!*\
  !*** ./src/images/Energy.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bfd7274a1c59fc0d3291.png";

/***/ }),

/***/ "./src/images/Fighter.png":
/*!********************************!*\
  !*** ./src/images/Fighter.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5c44855b8e453f3abf57.png";

/***/ }),

/***/ "./src/images/Flow.png":
/*!*****************************!*\
  !*** ./src/images/Flow.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b75badb6e215a0f54b52.png";

/***/ }),

/***/ "./src/images/Fury.png":
/*!*****************************!*\
  !*** ./src/images/Fury.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5c7db58ac2040f00b573.png";

/***/ }),

/***/ "./src/images/Grit.png":
/*!*****************************!*\
  !*** ./src/images/Grit.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "02f6ab0cf6c865d1bb56.png";

/***/ }),

/***/ "./src/images/Heat.png":
/*!*****************************!*\
  !*** ./src/images/Heat.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c7dbf351ddd8665de67f.png";

/***/ }),

/***/ "./src/images/Jungle.png":
/*!*******************************!*\
  !*** ./src/images/Jungle.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "03954a4511367107d603.png";

/***/ }),

/***/ "./src/images/Mage.png":
/*!*****************************!*\
  !*** ./src/images/Mage.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "eda18b5db894127afd6e.png";

/***/ }),

/***/ "./src/images/Mana.png":
/*!*****************************!*\
  !*** ./src/images/Mana.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "270c95e7e93eb8587e13.png";

/***/ }),

/***/ "./src/images/Manaless.png":
/*!*********************************!*\
  !*** ./src/images/Manaless.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7d69ed5b1eabc94aa359.png";

/***/ }),

/***/ "./src/images/Marksman.png":
/*!*********************************!*\
  !*** ./src/images/Marksman.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2c8f1044ec139ab8d1a1.png";

/***/ }),

/***/ "./src/images/Melee.png":
/*!******************************!*\
  !*** ./src/images/Melee.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ee3b33b01a15556c7b23.png";

/***/ }),

/***/ "./src/images/Middle.png":
/*!*******************************!*\
  !*** ./src/images/Middle.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "28648caf7edfd10e085f.png";

/***/ }),

/***/ "./src/images/Rage.png":
/*!*****************************!*\
  !*** ./src/images/Rage.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "02f6ab0cf6c865d1bb56.png";

/***/ }),

/***/ "./src/images/Ranged.png":
/*!*******************************!*\
  !*** ./src/images/Ranged.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cb995914f616e25bae5e.png";

/***/ }),

/***/ "./src/images/Specialist.png":
/*!***********************************!*\
  !*** ./src/images/Specialist.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "83de1f61524c911aa1cc.png";

/***/ }),

/***/ "./src/images/Support.png":
/*!********************************!*\
  !*** ./src/images/Support.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "00d8123f9faf16163309.png";

/***/ }),

/***/ "./src/images/Tank.png":
/*!*****************************!*\
  !*** ./src/images/Tank.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "916f968d25b960fd73e2.png";

/***/ }),

/***/ "./src/images/Top.png":
/*!****************************!*\
  !*** ./src/images/Top.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "95abe670bbf23ed4b5c9.png";

/***/ }),

/***/ "./src/images/Utility.png":
/*!********************************!*\
  !*** ./src/images/Utility.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "85a1d168f76f189f2ea4.png";

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stylesheets_frontpage_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stylesheets/frontpage.scss */ "./src/stylesheets/frontpage.scss");
/* harmony import */ var _stylesheets_modals_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stylesheets/modals.scss */ "./src/stylesheets/modals.scss");
/* harmony import */ var _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/elementCreation */ "./src/helpers/elementCreation.js");
/* harmony import */ var _championData_getAllChampions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./championData/getAllChampions */ "./src/championData/getAllChampions.js");
/* harmony import */ var _appControl_searchbarController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./appControl/searchbarController */ "./src/appControl/searchbarController.js");
/* harmony import */ var _appControl_backdropChangeInterval__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./appControl/backdropChangeInterval */ "./src/appControl/backdropChangeInterval.js");









var createSearchDropdown = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var allChampions, allChampionsArray, searchContainers;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,_championData_getAllChampions__WEBPACK_IMPORTED_MODULE_5__.getAllChampionDetails)();

          case 2:
            allChampions = _context.sent;
            allChampionsArray = Object.values(allChampions);
            searchContainers = document.querySelectorAll('.search-container');
            searchContainers.forEach(function (searchContainer) {
              var autoCompleteNames = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_4__["default"].createChildElementWithClass('div', 'auto-complete-names', searchContainer);
              allChampionsArray.forEach(function (champion) {
                var championName = champion.name;
                var championId = champion.id;
                var autoCompleteNameWrapper = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_4__["default"].createChildElementWithClass('div', 'auto-complete-name-wrapper', autoCompleteNames);
                autoCompleteNameWrapper.tabIndex = '-1';
                var autoCompleteName = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_4__["default"].createChildElementWithClass('span', 'auto-complete-name', autoCompleteNameWrapper);
                autoCompleteName.textContent = championName;
                autoCompleteName.dataset.championId = championId;
                autoCompleteName.id = championName;
              });
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createSearchDropdown() {
    return _ref.apply(this, arguments);
  };
}();

var renderPage = /*#__PURE__*/function () {
  var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return createSearchDropdown();

          case 2:
            _appControl_searchbarController__WEBPACK_IMPORTED_MODULE_6__["default"].searchContainerListeners();

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function renderPage() {
    return _ref2.apply(this, arguments);
  };
}();

renderPage();
(0,_appControl_backdropChangeInterval__WEBPACK_IMPORTED_MODULE_7__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxZQUFZLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxNQUFNLFVBQVUsVUFBVSxXQUFXLEtBQUssTUFBTSxXQUFXLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1B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LEtBQUsscUNBQXFDLGtCQUFrQixLQUFLLDZCQUE2Qix1QkFBdUIsS0FBSyxHQUFHLDhCQUE4Qiw2QkFBNkIseUJBQXlCLHFCQUFxQix1QkFBdUIsS0FBSyxHQUFHLDhCQUE4Qiw2QkFBNkIscUJBQXFCLEtBQUssR0FBRyxPQUFPLDhGQUE4RixVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sWUFBWSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sWUFBWSxVQUFVLE1BQU0sTUFBTSxZQUFZLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLFlBQVksVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxZQUFZLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFlBQVksV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFlBQVksVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sWUFBWSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxZQUFZLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sWUFBWSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxZQUFZLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sWUFBWSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sWUFBWSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLGFBQWEsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sV0FBVyxXQUFXLEtBQUssTUFBTSxhQUFhLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLGFBQWEsV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxVQUFVLEtBQUssTUFBTSxhQUFhLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLFVBQVUsS0FBSyxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFB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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFVBQVU7QUFDVjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLGNBQWM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLG1CQUFtQjtBQUNwRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLGtCQUFrQjs7QUFFbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdCQUFnQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsS0FBMEIsb0JBQW9CLENBQUU7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNodkJBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXNKO0FBQ3RKO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsZ0lBQU87Ozs7QUFJZ0c7QUFDeEgsT0FBTyxpRUFBZSxnSUFBTyxJQUFJLHVJQUFjLEdBQUcsdUlBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQW1KO0FBQ25KO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsNkhBQU87Ozs7QUFJNkY7QUFDckgsT0FBTyxpRUFBZSw2SEFBTyxJQUFJLG9JQUFjLEdBQUcsb0lBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbENlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0Esa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNkQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTXdPLG9CQUFvQjtBQUFBLHNMQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0EzVixvRkFBcUIsRUFEckI7O0FBQUE7QUFDckJpRixZQUFBQSxZQURxQjtBQUVyQjJRLFlBQUFBLGlCQUZxQixHQUVEQyxNQUFNLENBQUNDLE1BQVAsQ0FBYzdRLFlBQWQsQ0FGQztBQUlyQjhRLFlBQUFBLGdCQUpxQixHQUlGcmMsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixtQkFBMUIsQ0FKRTtBQUszQm9jLFlBQUFBLGdCQUFnQixDQUFDMWIsT0FBakIsQ0FBeUIsVUFBQ2tNLGVBQUQsRUFBcUI7QUFDNUMsa0JBQU1DLGlCQUFpQixHQUFHNkcsNEZBQUEsQ0FDeEIsS0FEd0IsRUFDakIscUJBRGlCLEVBQ005RyxlQUROLENBQTFCO0FBR0FxUCxjQUFBQSxpQkFBaUIsQ0FBQ3ZiLE9BQWxCLENBQTBCLFVBQUN1SyxRQUFELEVBQWM7QUFDdEMsb0JBQU1oSSxZQUFZLEdBQUdnSSxRQUFRLENBQUN1QyxJQUE5QjtBQUNBLG9CQUFNckcsVUFBVSxHQUFHOEQsUUFBUSxDQUFDM0osRUFBNUI7QUFDQSxvQkFBTSthLHVCQUF1QixHQUFHM0ksNEZBQUEsQ0FDOUIsS0FEOEIsRUFDdkIsNEJBRHVCLEVBQ083RyxpQkFEUCxDQUFoQztBQUdBd1AsZ0JBQUFBLHVCQUF1QixDQUFDUixRQUF4QixHQUFtQyxJQUFuQztBQUNBLG9CQUFNdE8sZ0JBQWdCLEdBQUdtRyw0RkFBQSxDQUN2QixNQUR1QixFQUNmLG9CQURlLEVBQ08ySSx1QkFEUCxDQUF6QjtBQUdBOU8sZ0JBQUFBLGdCQUFnQixDQUFDMUssV0FBakIsR0FBK0JJLFlBQS9CO0FBQ0FzSyxnQkFBQUEsZ0JBQWdCLENBQUM1QyxPQUFqQixDQUF5QnhELFVBQXpCLEdBQXNDQSxVQUF0QztBQUNBb0csZ0JBQUFBLGdCQUFnQixDQUFDak0sRUFBakIsR0FBc0IyQixZQUF0QjtBQUNELGVBYkQ7QUFjRCxhQWxCRDs7QUFMMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBcEIrWSxvQkFBb0I7QUFBQTtBQUFBO0FBQUEsR0FBMUI7O0FBMEJBLElBQU1NLFVBQVU7QUFBQSx1TEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDWE4sb0JBQW9CLEVBRFQ7O0FBQUE7QUFFakJ0UCxZQUFBQSxnR0FBQTs7QUFGaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBVjRQLFVBQVU7QUFBQTtBQUFBO0FBQUEsR0FBaEI7O0FBS0FBLFVBQVU7QUFDVlAsOEVBQWMsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9hcHBDb250cm9sL2JhY2tkcm9wQ2hhbmdlSW50ZXJ2YWwuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9hcHBDb250cm9sL2NoYW1waW9uTW9kYWxDb250cm9sbGVyLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvYXBwQ29udHJvbC9jaGFtcGlvbnNQYWdlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL2FwcENvbnRyb2wvZmlsdGVyQ2hhbXBpb25zLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvYXBwQ29udHJvbC9zZWFyY2hiYXJDb250cm9sbGVyLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvYXBwQ29udHJvbC9zb3J0Q2hhbXBpb25zLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvY2hhbXBpb25EYXRhL2NoYW1waW9uRGV0YWlscy5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL2NoYW1waW9uRGF0YS9jaGFtcGlvblN0YXRzLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvY2hhbXBpb25EYXRhL2dldEFsbENoYW1waW9ucy5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL2NoYW1waW9uRGF0YS9pdGVtSW5mby5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL2hlbHBlcnMvZWxlbWVudENyZWF0aW9uLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvdGVtcGxhdGVzL2NoYW1waW9uRGV0YWlsc01vZGFsLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvdGVtcGxhdGVzL2NoYW1waW9uU2tpbnNNb2RhbC5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL3RlbXBsYXRlcy9jaGFtcGlvblN0YXRzTW9kYWwuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy90ZW1wbGF0ZXMvcmVuZGVySGVscGVycy5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL3N0eWxlc2hlZXRzL2Zyb250cGFnZS5zY3NzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvc3R5bGVzaGVldHMvbW9kYWxzLnNjc3MiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvc3R5bGVzaGVldHMvZnJvbnRwYWdlLnNjc3M/NDcyNiIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL3N0eWxlc2hlZXRzL21vZGFscy5zY3NzP2NmODMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy9ob21lL2RheW8vRGVza3RvcC9vZGluUHJvamVjdC9MZWFndWUtQXBwL2Zyb250ZW5kL3NyYy9pbWFnZXN8c3luY3xub25yZWN1cnNpdmV8L1xcLihwbmd8anBlIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9sZWFndWUtYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2xlYWd1ZS1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9sZWFndWUtYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2xlYWd1ZS1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBsZXQgaW5kZXggPSAxO1xuXG4gIHNldEludGVydmFsKCgpID0+IHtcbiAgICBjb25zdCBiYWNrZHJvcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmFja2Ryb3AtaW1nJyk7XG4gICAgY29uc3QgY3VycmVudEJhY2tkcm9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2tkcm9wLWltZy5zaG93bicpO1xuICAgIGluZGV4ICU9IGJhY2tkcm9wcy5sZW5ndGg7XG4gICAgY3VycmVudEJhY2tkcm9wLmNsYXNzTmFtZSA9ICdiYWNrZHJvcC1pbWcgaGlkZGVuJztcbiAgICBiYWNrZHJvcHNbaW5kZXhdLmNsYXNzTmFtZSA9ICdiYWNrZHJvcC1pbWcgc2hvd24nO1xuICAgIGluZGV4ICs9IDE7XG4gIH0sIDcwMDApO1xufTtcbiIsImNvbnN0IENoYW1waW9uTW9kYWxDb250cm9sbGVyID0gKCgpID0+IHtcbiAgY29uc3QgdG9nZ2xlQWN0aXZlQWJpbGl0eSA9IChjbGlja2VkQWJpbGl0eUlkKSA9PiB7XG4gICAgY29uc3QgYWJpbGl0eUltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zcGVsbC1pbWcnKTtcbiAgICBjb25zdCBhYmlsaXR5SW5mb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWJpbGl0eS1pbmZvJyk7XG5cbiAgICBhYmlsaXR5SW1hZ2VzLmZvckVhY2goKGltZykgPT4ge1xuICAgICAgaW1nLmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrZWQnKTtcbiAgICB9KTtcbiAgICBhYmlsaXR5SW5mb3MuZm9yRWFjaCgoaW5mbykgPT4ge1xuICAgICAgaW5mby5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNsaWNrZWRJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2NsaWNrZWRBYmlsaXR5SWR9LWltZ2ApO1xuICAgIGNsaWNrZWRJbWFnZS5jbGFzc05hbWUgPSAnc3BlbGwtaW1nIGNsaWNrZWQnO1xuXG4gICAgY29uc3QgYWN0aXZlQWJpbGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2NsaWNrZWRBYmlsaXR5SWR9LWFiaWxpdHlgKTtcbiAgICBhY3RpdmVBYmlsaXR5LmNsYXNzTmFtZSA9ICdhYmlsaXR5LWluZm8gYWN0aXZlJztcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VNb2RhbFRlbXBsYXRlID0gKGNsaWNrZWRNb2RhbE5hdkxpbmspID0+IHtcbiAgICBjb25zdCB0ZW1wbGF0ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwtdGVtcGxhdGUnKTtcbiAgICB0ZW1wbGF0ZXMuZm9yRWFjaCgodGVtcGxhdGUpID0+IHtcbiAgICAgIGNvbnN0IHRlbXBsYXRlTmFtZSA9IHRlbXBsYXRlLmlkLnN1YnN0cmluZygwLCB0ZW1wbGF0ZS5pZC5pbmRleE9mKCctJykpO1xuICAgICAgaWYgKHRlbXBsYXRlTmFtZSA9PT0gY2xpY2tlZE1vZGFsTmF2TGluay5pZCkge1xuICAgICAgICBjb25zdCBjaG9zZW5UZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgICAgICBjaG9zZW5UZW1wbGF0ZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGhpZGRlblRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgICAgIGhpZGRlblRlbXBsYXRlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZGlzcGF5SXRlbURldGFpbHMgPSAoaG92ZXJlZEl0ZW1JbWFnZSkgPT4ge1xuICAgIGNvbnN0IGl0ZW1EZXRhaWxzID0gaG92ZXJlZEl0ZW1JbWFnZS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgaXRlbURldGFpbHMuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgfTtcblxuICBjb25zdCBoaWRlSXRlbURldGFpbHMgPSAodW5ob3ZlcmVkSXRlbUltYWdlKSA9PiB7XG4gICAgY29uc3QgaXRlbURldGFpbHMgPSB1bmhvdmVyZWRJdGVtSW1hZ2UubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGl0ZW1EZXRhaWxzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlU2tpbkltYWdlcyA9IChhcnJvd0NsYXNzTGlzdCkgPT4ge1xuICAgIGNvbnN0IHNraW5JbWFnZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2tpbi1pbWFnZXMtY29udGFpbmVyJyk7XG4gICAgY29uc3QgY3VycmVudFNob3duSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2tpbi1pbWFnZS1jb250YWluZXIuc2hvd24nKTtcbiAgICBjb25zdCBza2luTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5za2luLW5hbWUnKTtcblxuICAgIGN1cnJlbnRTaG93bkltYWdlLmNsYXNzTmFtZSA9ICdza2luLWltYWdlLWNvbnRhaW5lcic7XG4gICAgY29uc3QgZmlyc3RJbWFnZSA9IHNraW5JbWFnZXNDb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgY29uc3QgbGFzdEltYWdlID0gc2tpbkltYWdlc0NvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkO1xuXG4gICAgaWYgKGZpcnN0SW1hZ2UgPT09IGN1cnJlbnRTaG93bkltYWdlICYmIGFycm93Q2xhc3NMaXN0LmluY2x1ZGVzKCdsZWZ0LWFycm93JykpIHtcbiAgICAgIGxhc3RJbWFnZS5jbGFzc05hbWUgPSAnc2tpbi1pbWFnZS1jb250YWluZXIgc2hvd24nO1xuICAgICAgc2tpbk5hbWUudGV4dENvbnRlbnQgPSBsYXN0SW1hZ2UuaWQ7XG4gICAgfSBlbHNlIGlmIChsYXN0SW1hZ2UgPT09IGN1cnJlbnRTaG93bkltYWdlICYmIGFycm93Q2xhc3NMaXN0LmluY2x1ZGVzKCdyaWdodC1hcnJvdycpKSB7XG4gICAgICBmaXJzdEltYWdlLmNsYXNzTmFtZSA9ICdza2luLWltYWdlLWNvbnRhaW5lciBzaG93bic7XG4gICAgICBza2luTmFtZS50ZXh0Q29udGVudCA9IGZpcnN0SW1hZ2UuaWQ7XG4gICAgfSBlbHNlIGlmIChhcnJvd0NsYXNzTGlzdC5pbmNsdWRlcygncmlnaHQtYXJyb3cnKSkge1xuICAgICAgY3VycmVudFNob3duSW1hZ2UubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTmFtZSA9ICdza2luLWltYWdlLWNvbnRhaW5lciBzaG93bic7XG4gICAgICBza2luTmFtZS50ZXh0Q29udGVudCA9IGN1cnJlbnRTaG93bkltYWdlLm5leHRFbGVtZW50U2libGluZy5pZDtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudFNob3duSW1hZ2UucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc05hbWUgPSAnc2tpbi1pbWFnZS1jb250YWluZXIgc2hvd24nO1xuICAgICAgc2tpbk5hbWUudGV4dENvbnRlbnQgPSBjdXJyZW50U2hvd25JbWFnZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmlkO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjbGVhck1haW5Nb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tY29udGFpbmVyJyk7XG4gICAgY29uc3QgY2hhbXBpb25OYW1lID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tbmFtZScpO1xuICAgIGNvbnN0IGNoYW1waW9uVGl0bGUgPSBtYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbi10aXRsZScpO1xuICAgIGNvbnN0IGNoYW1waW9uUm9sZXMgPSBtYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbi1yb2xlcycpO1xuICAgIGNvbnN0IGNoYW1waW9uTG9yZSA9IG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLWxvcmUnKTtcbiAgICBjb25zdCBhYmlsaXR5RGV0YWlscyA9IG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvcignLmFiaWxpdHktZGV0YWlscycpO1xuICAgIGNvbnN0IGNoYW1waW9uVGlwcyA9IG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLXRpcHMnKTtcblxuICAgIGNvbnN0IG1haW5Nb2RhbEhlYWRlciA9IFtjaGFtcGlvbk5hbWUsIGNoYW1waW9uVGl0bGUsIGNoYW1waW9uUm9sZXNdO1xuICAgIG1haW5Nb2RhbEhlYWRlci5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICBjdXJyZW50RWxlbWVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgIH0pO1xuXG4gICAgY2hhbXBpb25Mb3JlLnJlbW92ZSgpO1xuICAgIGFiaWxpdHlEZXRhaWxzLnJlbW92ZSgpO1xuICAgIGNoYW1waW9uVGlwcy5yZW1vdmUoKTtcbiAgfTtcblxuICBjb25zdCBjbGVhclN0YXRzTW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3RhdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhdHMtY29udGFpbmVyJyk7XG4gICAgY29uc3QgY2hhbXBpb25OYW1lID0gc3RhdHNDb250YWluZXIucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLW5hbWUnKTtcbiAgICBjb25zdCBjaGFtcGlvblRpdGxlID0gc3RhdHNDb250YWluZXIucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLXRpdGxlJyk7XG4gICAgY29uc3QgY2hhbXBpb25TdGF0c092ZXJ2aWV3ID0gc3RhdHNDb250YWluZXIucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLXN0YXRzLW92ZXJ2aWV3Jyk7XG4gICAgY29uc3QgYWxsZGFtYWdlU3RhdHMgPSBzdGF0c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuZGFtYWdlLXN0YXRzJyk7XG4gICAgY29uc3QgaXRlbVNldHNDb250YWluZXIgPSBzdGF0c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuaXRlbS1zZXRzLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGJlc3RNYXRjaHVwcyA9IHN0YXRzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5iZXN0LW1hdGNodXBzJyk7XG4gICAgY29uc3Qgd29yc3RNYXRjaHVwcyA9IHN0YXRzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy53b3JzdC1tYXRjaHVwcycpO1xuXG4gICAgY29uc3Qgc3RhdHNNb2RhbEhlYWRlciA9IFtjaGFtcGlvbk5hbWUsIGNoYW1waW9uVGl0bGUsIGNoYW1waW9uU3RhdHNPdmVydmlld107XG4gICAgc3RhdHNNb2RhbEhlYWRlci5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICBjdXJyZW50RWxlbWVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgIH0pO1xuICAgIGFsbGRhbWFnZVN0YXRzLmZvckVhY2goKGRhbWFnZVN0YXQpID0+IHtcbiAgICAgIGNvbnN0IGRhbWFnZVN0YXRFbGVtZW50ID0gZGFtYWdlU3RhdDtcbiAgICAgIGRhbWFnZVN0YXRFbGVtZW50LnJlbW92ZSgpO1xuICAgIH0pO1xuICAgIGNvbnN0IHN0YXRzTW9kYWxDb250ZW50ID0gW2l0ZW1TZXRzQ29udGFpbmVyLCBiZXN0TWF0Y2h1cHMsIHdvcnN0TWF0Y2h1cHNdO1xuICAgIHN0YXRzTW9kYWxDb250ZW50LmZvckVhY2goKGNvbnRlbnQpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnRFbGVtZW50ID0gY29udGVudDtcbiAgICAgIGNvbnRlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyU2tpbnNNb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCBza2luSW1hZ2VzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNraW4taW1hZ2VzLWNvbnRhaW5lcicpO1xuICAgIHNraW5JbWFnZXNDb250YWluZXIucmVtb3ZlKCk7XG4gIH07XG5cbiAgY29uc3QgY2xvc2VDaGFtcGlvbk1vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHN0YXRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YXRzLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHNraW5zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NraW5zLWNvbnRhaW5lcicpO1xuXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBtYWluQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHN0YXRzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgc2tpbnNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfTtcblxuICBjb25zdCBtb2RhbENsaWNrRXZlbnRzID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcblxuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnc3BlbGwtaW1nJykge1xuICAgICAgY29uc3QgZGFzaEluZGV4ID0gZXZlbnQudGFyZ2V0LmlkLmluZGV4T2YoJy0nKTtcbiAgICAgIGNvbnN0IGFiaWxpdHlJZCA9IGV2ZW50LnRhcmdldC5pZC5zbGljZSgwLCBkYXNoSW5kZXgpO1xuICAgICAgdG9nZ2xlQWN0aXZlQWJpbGl0eShhYmlsaXR5SWQpO1xuICAgIH1cblxuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnbW9kYWwtbmF2LWxpbmsnKSB7XG4gICAgICBjaGFuZ2VNb2RhbFRlbXBsYXRlKGV2ZW50LnRhcmdldCk7XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmZyb20oZXZlbnQudGFyZ2V0LmNsYXNzTGlzdCkuaW5jbHVkZXMoJ2ltZy1zY3JvbGwtYXJyb3cnKSkge1xuICAgICAgdG9nZ2xlU2tpbkltYWdlcyhBcnJheS5mcm9tKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QpKTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2Nsb3NlLW1vZGFsLWJ0bicpIHtcbiAgICAgIG1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbW9kYWxDbGlja0V2ZW50cyk7XG4gICAgICBjbG9zZUNoYW1waW9uTW9kYWwoKTtcbiAgICAgIGNsZWFyTWFpbk1vZGFsKCk7XG4gICAgICBjbGVhclN0YXRzTW9kYWwoKTtcbiAgICAgIGNsZWFyU2tpbnNNb2RhbCgpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBtb2RhbE1vdXNlb3ZlckV2ZW50cyA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnaXRlbS1pbWcnXG4gICAgICB8fCBldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnY29tcG9uZW50LWl0ZW0taW1nJykge1xuICAgICAgZGlzcGF5SXRlbURldGFpbHMoZXZlbnQudGFyZ2V0KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbW9kYWxNb3VzZW91dEV2ZW50cyA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnaXRlbS1pbWcnXG4gICAgfHwgZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2NvbXBvbmVudC1pdGVtLWltZycpIHtcbiAgICAgIGlmICghZXZlbnQudGFyZ2V0KSByZXR1cm47XG5cbiAgICAgIGxldCB7IHJlbGF0ZWRUYXJnZXQgfSA9IGV2ZW50O1xuXG4gICAgICB3aGlsZSAocmVsYXRlZFRhcmdldCkge1xuICAgICAgICBpZiAocmVsYXRlZFRhcmdldCA9PT0gZXZlbnQudGFyZ2V0KSByZXR1cm47XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQgPSByZWxhdGVkVGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICB9XG5cbiAgICAgIGhpZGVJdGVtRGV0YWlscyhldmVudC50YXJnZXQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBtb2RhbEFycm93RXZlbnRzID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3Qgc2tpbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2tpbnMtY29udGFpbmVyJyk7XG4gICAgaWYgKHNraW5zQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycpIHtcbiAgICAgIGlmIChldmVudC5rZXkgPT09ICdBcnJvd1JpZ2h0Jykge1xuICAgICAgICBjb25zdCByaWdodEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJpZ2h0LWFycm93Jyk7XG4gICAgICAgIHRvZ2dsZVNraW5JbWFnZXMoQXJyYXkuZnJvbShyaWdodEFycm93LmNsYXNzTGlzdCkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dMZWZ0Jykge1xuICAgICAgICBjb25zdCBsZWZ0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGVmdC1hcnJvdycpO1xuICAgICAgICB0b2dnbGVTa2luSW1hZ2VzKEFycmF5LmZyb20obGVmdEFycm93LmNsYXNzTGlzdCkpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBtb2RhbENoYW5nZUxpc3RlbmVycyA9ICgpID0+IHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuXG4gICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtb2RhbENsaWNrRXZlbnRzKTtcbiAgICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBtb2RhbE1vdXNlb3ZlckV2ZW50cyk7XG4gICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBtb2RhbE1vdXNlb3V0RXZlbnRzKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgbW9kYWxBcnJvd0V2ZW50cyk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBtb2RhbENoYW5nZUxpc3RlbmVycyxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IENoYW1waW9uTW9kYWxDb250cm9sbGVyO1xuIiwiaW1wb3J0IGdldENoYW1waW9uRGV0YWlscyBmcm9tICcuLi9jaGFtcGlvbkRhdGEvY2hhbXBpb25EZXRhaWxzJztcbmltcG9ydCBnZXRDaGFtcGlvblN0YXRzIGZyb20gJy4uL2NoYW1waW9uRGF0YS9jaGFtcGlvblN0YXRzJztcbmltcG9ydCBjaGFtcGlvbkRldGFpbHNNb2RhbCBmcm9tICcuLi90ZW1wbGF0ZXMvY2hhbXBpb25EZXRhaWxzTW9kYWwnO1xuaW1wb3J0IGNoYW1waW9uU3RhdHNNb2RhbCBmcm9tICcuLi90ZW1wbGF0ZXMvY2hhbXBpb25TdGF0c01vZGFsJztcbmltcG9ydCBjaGFtcGlvblNraW5zTW9kYWwgZnJvbSAnLi4vdGVtcGxhdGVzL2NoYW1waW9uU2tpbnNNb2RhbCc7XG5pbXBvcnQgQ2hhbXBpb25Nb2RhbENvbnRyb2xsZXIgZnJvbSAnLi9jaGFtcGlvbk1vZGFsQ29udHJvbGxlcic7XG5pbXBvcnQgQ2hhbXBpb25GaWx0ZXIgZnJvbSAnLi9maWx0ZXJDaGFtcGlvbnMnO1xuaW1wb3J0IFNvcnRDaGFtcGlvbnMgZnJvbSAnLi9zb3J0Q2hhbXBpb25zJztcbmltcG9ydCB7IGdldEFsbENoYW1waW9uRGV0YWlscywgZ2V0QWxsQ2hhbXBpb25TdGF0cyB9IGZyb20gJy4uL2NoYW1waW9uRGF0YS9nZXRBbGxDaGFtcGlvbnMnO1xuXG5jb25zdCBDaGFtcGlvbnNQYWdlQ29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGNvbnN0IGRpc3BsYXlEcm9wZG93bk9wdGlvbnMgPSAoZHJvcGRvd25PcHRpb25zKSA9PiB7XG4gICAgY29uc3QgYWxsRHJvcGRvd25PcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duLW9wdGlvbnMnKTtcbiAgICBhbGxEcm9wZG93bk9wdGlvbnMuZm9yRWFjaCgob3B0aW9ucykgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uc1N0eWxlID0gb3B0aW9ucy5zdHlsZTtcbiAgICAgIG9wdGlvbnNTdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZHJvcGRvd25PcHRpb25zU3R5bGUgPSBkcm9wZG93bk9wdGlvbnMuc3R5bGU7XG4gICAgZHJvcGRvd25PcHRpb25zU3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgfTtcblxuICBjb25zdCBoaWRlRHJvcGRvd25PcHRpb25zID0gKGRyb3Bkb3duT3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IGRyb3Bkb3duT3B0aW9uc1N0eWxlID0gZHJvcGRvd25PcHRpb25zLnN0eWxlO1xuICAgIGRyb3Bkb3duT3B0aW9uc1N0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH07XG5cbiAgY29uc3QgZHJvcGRvd25PcHRpb25zVG9nZ2xlID0gKGRyb3Bkb3duQnRuKSA9PiB7XG4gICAgY29uc3QgZHJvcGRvd25PcHRpb25zID0gZHJvcGRvd25CdG4ucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24tb3B0aW9ucycpO1xuICAgIGlmIChkcm9wZG93bk9wdGlvbnMuc3R5bGUuZGlzcGxheSAhPT0gJ2ZsZXgnKSB7XG4gICAgICBkaXNwbGF5RHJvcGRvd25PcHRpb25zKGRyb3Bkb3duT3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhpZGVEcm9wZG93bk9wdGlvbnMoZHJvcGRvd25PcHRpb25zKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheUNoYW1waW9uTW9kYWwgPSBhc3luYyAoY2hhbXBpb25JZCkgPT4ge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG4gICAgY29uc3QgY2hhbXBpb25EZXRhaWxzID0gYXdhaXQgZ2V0Q2hhbXBpb25EZXRhaWxzKGNoYW1waW9uSWQpO1xuXG4gICAgY29uc3QgY2hhbXBpb25TdGF0cyA9IGF3YWl0IGdldENoYW1waW9uU3RhdHMoY2hhbXBpb25JZCk7XG5cbiAgICBjb25zdCBza2luSW1hZ2VzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNraW4taW1hZ2VzLWNvbnRhaW5lcicpO1xuICAgIC8qXG4gICAgICBwdXJwb3NlIG9mIHRoZSBpZiBzdGF0ZW1lbnQgaXMgdG8gcHJldmVudCBzcGFtIGNsaWNrcyBmcm9tIHJlbmRlcmluZ1xuICAgICAgZHVwbGljYXRlIGNvbnRlbnQgb250byB0aGUgY2hhbXBpb24gbW9kYWwuXG4gICAgKi9cbiAgICBpZiAoIXNraW5JbWFnZXNDb250YWluZXIpIHtcbiAgICAgIGNoYW1waW9uRGV0YWlsc01vZGFsKGNoYW1waW9uRGV0YWlscyk7XG4gICAgICBjaGFtcGlvblN0YXRzTW9kYWwoY2hhbXBpb25EZXRhaWxzLCBjaGFtcGlvblN0YXRzKTtcbiAgICAgIGNoYW1waW9uU2tpbnNNb2RhbChjaGFtcGlvbkRldGFpbHMpO1xuICAgIH1cblxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIENoYW1waW9uTW9kYWxDb250cm9sbGVyLm1vZGFsQ2hhbmdlTGlzdGVuZXJzKCk7XG4gIH07XG5cbiAgY29uc3Qgc2VsZWN0TGFuZUZpbHRlck9wdGlvbiA9IChjbGlja2VkTGFuZU9wdGlvbikgPT4ge1xuICAgIGNvbnN0IGNoYW1waW9uc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb25zLXNlY3Rpb24nKTtcbiAgICBjb25zdCBhY3RpdmVMYW5lT3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1vcHRpb24uYWN0aXZlJyk7XG4gICAgaWYgKGNsaWNrZWRMYW5lT3B0aW9uID09PSBhY3RpdmVMYW5lT3B0aW9uIHx8IGNoYW1waW9uc1NlY3Rpb24uc3R5bGUudmlzaWJpbGl0eSA9PT0gJ2hpZGRlbicpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgYWN0aXZlTGFuZU9wdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBjbGlja2VkTGFuZU9wdGlvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrTGFuZUZpbHRlck9wdGlvbiA9IGFzeW5jIChhbGxDaGFtcGlvblN0YXRzKSA9PiB7XG4gICAgY29uc3QgYWN0aXZlTGFuZU9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItb3B0aW9uLmFjdGl2ZScpO1xuICAgIGNvbnN0IGxhbmVOYW1lID0gYWN0aXZlTGFuZU9wdGlvbi5jbGFzc0xpc3RbMF07XG4gICAgYXdhaXQgQ2hhbXBpb25GaWx0ZXIuZmlsdGVyQnlMYW5lKGxhbmVOYW1lLCBhbGxDaGFtcGlvblN0YXRzKTtcbiAgfTtcblxuICBjb25zdCBjaGVja1NvcnRpbmdPcHRpb24gPSAoYWxsQ2hhbXBpb25TdGF0cykgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZVNvcnRpbmdPcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc29ydC5hY3RpdmUnKTtcbiAgICBpZiAoYWN0aXZlU29ydGluZ09wdGlvbiA9PT0gbnVsbCkge1xuICAgICAgU29ydENoYW1waW9ucy5zb3J0QnlEZWZhdWx0T3JkZXIoYWxsQ2hhbXBpb25TdGF0cyk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5mcm9tKGFjdGl2ZVNvcnRpbmdPcHRpb24uY2xhc3NMaXN0KS5pbmNsdWRlcygnd2lucmF0ZScpKSB7XG4gICAgICBTb3J0Q2hhbXBpb25zLnNvcnRDaGFtcGlvbnNCeVdpbnJhdGUoYWxsQ2hhbXBpb25TdGF0cyk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5mcm9tKGFjdGl2ZVNvcnRpbmdPcHRpb24uY2xhc3NMaXN0KS5pbmNsdWRlcygncGlja3JhdGUnKSkge1xuICAgICAgU29ydENoYW1waW9ucy5zb3J0Q2hhbXBpb25zQnlQaWNrcmF0ZShhbGxDaGFtcGlvblN0YXRzKTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmZyb20oYWN0aXZlU29ydGluZ09wdGlvbi5jbGFzc0xpc3QpLmluY2x1ZGVzKCdkYW1hZ2UnKSkge1xuICAgICAgU29ydENoYW1waW9ucy5zb3J0Q2hhbXBpb25zQnlEYW1hZ2VEb25lKGFsbENoYW1waW9uU3RhdHMpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjaGVja0FjdGl2ZVJvbGVPcHRpb25zID0gKGFsbENoYW1waW9uRGV0YWlscykgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZVJvbGVPcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJvbGUuYWN0aXZlJyk7XG4gICAgaWYgKGFjdGl2ZVJvbGVPcHRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBhY3RpdmVSb2xlcyA9IEFycmF5LmZyb20oYWN0aXZlUm9sZU9wdGlvbnMpLm1hcCgoYWN0aXZlUm9sZU9wdGlvbikgPT4ge1xuICAgICAgY29uc3QgYWN0aXZlUm9sZSA9IGFjdGl2ZVJvbGVPcHRpb24uY2xhc3NMaXN0WzBdO1xuICAgICAgcmV0dXJuIGFjdGl2ZVJvbGU7XG4gICAgfSk7XG4gICAgQ2hhbXBpb25GaWx0ZXIuZmlsdGVyQnlSb2xlKGFjdGl2ZVJvbGVzLCBhbGxDaGFtcGlvbkRldGFpbHMpO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrQWN0aXZlRGlmZmljdWx0eU9wdGlvbnMgPSAoYWxsQ2hhbXBpb25EZXRhaWxzKSA9PiB7XG4gICAgY29uc3QgYWN0aXZlRGlmZmljdWx0eU9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGlmZmljdWx0eS5hY3RpdmUnKTtcbiAgICBpZiAoYWN0aXZlRGlmZmljdWx0eU9wdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGFjdGl2ZURpZmZpY3VsdGllcyA9IEFycmF5LmZyb20oYWN0aXZlRGlmZmljdWx0eU9wdGlvbnMpLm1hcCgoYWN0aXZlRGlmZmljdWx0eU9wdGlvbikgPT4ge1xuICAgICAgY29uc3QgYWN0aXZlRGlmZmljdWx0eSA9IGFjdGl2ZURpZmZpY3VsdHlPcHRpb24uY2xhc3NMaXN0WzBdO1xuICAgICAgcmV0dXJuIGFjdGl2ZURpZmZpY3VsdHk7XG4gICAgfSk7XG4gICAgQ2hhbXBpb25GaWx0ZXIuZmlsdGVyQnlEaWZmaWN1bHR5KGFjdGl2ZURpZmZpY3VsdGllcywgYWxsQ2hhbXBpb25EZXRhaWxzKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBzZWxlY3RNdWx0aURyb3Bkb3duT3B0aW9uID0gKGRyb3Bkb3duT3B0aW9uKSA9PiB7XG4gICAgZHJvcGRvd25PcHRpb24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIH07XG5cbiAgY29uc3QgZGVzZWxlY3REcm9wZG93bk9wdGlvbiA9IChkcm9wZG93bk9wdGlvbikgPT4ge1xuICAgIGRyb3Bkb3duT3B0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZURyb3Bkb3duT3B0aW9uID0gKGRyb3Bkb3duT3B0aW9uKSA9PiB7XG4gICAgaWYgKCFBcnJheS5mcm9tKGRyb3Bkb3duT3B0aW9uLmNsYXNzTGlzdCkuaW5jbHVkZXMoJ2FjdGl2ZScpKSB7XG4gICAgICBzZWxlY3RNdWx0aURyb3Bkb3duT3B0aW9uKGRyb3Bkb3duT3B0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVzZWxlY3REcm9wZG93bk9wdGlvbihkcm9wZG93bk9wdGlvbik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNlbGVjdFNpbmdsZURyb3Bkb3duT3B0aW9uID0gKGRyb3Bkb3duT3B0aW9uKSA9PiB7XG4gICAgY29uc3QgYWN0aXZlRHJvcGRvd25PcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2luZ2xlLXNlbGVjdC5hY3RpdmUnKTtcbiAgICBpZiAoYWN0aXZlRHJvcGRvd25PcHRpb24gPT09IG51bGwpIHtcbiAgICAgIGRyb3Bkb3duT3B0aW9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoYWN0aXZlRHJvcGRvd25PcHRpb24gPT09IGRyb3Bkb3duT3B0aW9uKSB7XG4gICAgICBkZXNlbGVjdERyb3Bkb3duT3B0aW9uKGRyb3Bkb3duT3B0aW9uKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYWN0aXZlRHJvcGRvd25PcHRpb24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgZHJvcGRvd25PcHRpb24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIH07XG5cbiAgY29uc3QgcmVkaXJlY3RUb0Zyb250UGFnZSA9ICgpID0+IHtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICdpbmRleC5odG1sJztcbiAgfTtcblxuICBjb25zdCBjaGFtcGlvbnNQYWdlQ2xpY2tFdmVudHMgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAvKiBIZWxwZXIgZnVuY3Rpb25zIGZvciBjbGljayBldmVudHMgKi9cbiAgICBjb25zdCBjaGVja09wdGlvbnMgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBhbGxDaGFtcGlvblN0YXRzID0gYXdhaXQgZ2V0QWxsQ2hhbXBpb25TdGF0cygpO1xuICAgICAgY29uc3QgYWxsQ2hhbXBpb25EZXRhaWxzID0gYXdhaXQgZ2V0QWxsQ2hhbXBpb25EZXRhaWxzKCk7XG4gICAgICBhd2FpdCBjaGVja0xhbmVGaWx0ZXJPcHRpb24oYWxsQ2hhbXBpb25TdGF0cyk7XG4gICAgICBjaGVja1NvcnRpbmdPcHRpb24oYWxsQ2hhbXBpb25TdGF0cyk7XG4gICAgICBjaGVja0FjdGl2ZVJvbGVPcHRpb25zKGFsbENoYW1waW9uRGV0YWlscyk7XG4gICAgICBjaGVja0FjdGl2ZURpZmZpY3VsdHlPcHRpb25zKGFsbENoYW1waW9uRGV0YWlscyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhpZGVDaGFtcGlvbnNTZWN0aW9uID0gKCkgPT4ge1xuICAgICAgY29uc3QgY2hhbXBpb25zU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbnMtc2VjdGlvbicpO1xuICAgICAgY2hhbXBpb25zU2VjdGlvbi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgfTtcblxuICAgIGNvbnN0IHNob3dDaGFtcGlvbnNTZWN0aW9uID0gKCkgPT4ge1xuICAgICAgY29uc3QgY2hhbXBpb25zU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbnMtc2VjdGlvbicpO1xuICAgICAgY2hhbXBpb25zU2VjdGlvbi5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgIH07XG5cbiAgICBjb25zdCByZW1vdmVDaGFtcGlvbnNQYWdlTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICBjb25zdCBjaGFtcGlvbnNQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoYW1waW9ucy1wYWdlJyk7XG4gICAgICBjaGFtcGlvbnNQYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbXBpb25zUGFnZUNsaWNrRXZlbnRzKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkQ2hhbXBpb25zUGFnZUxpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgY29uc3QgY2hhbXBpb25zUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGFtcGlvbnMtcGFnZScpO1xuICAgICAgY2hhbXBpb25zUGFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW1waW9uc1BhZ2VDbGlja0V2ZW50cyk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNob3dMb2FkZXIgPSAoKSA9PiB7XG4gICAgICBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGVyJyk7XG4gICAgICBsb2FkZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfTtcblxuICAgIGNvbnN0IGhpZGVMb2FkZXIgPSAoKSA9PiB7XG4gICAgICBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGVyJyk7XG4gICAgICBsb2FkZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9O1xuXG4gICAgY29uc3QgZmlsdGVyQW5kU29ydENoYW1waW9uc1NlY3Rpb24gPSBhc3luYyAod2FpdFRpbWUpID0+IHtcbiAgICAgIGhpZGVDaGFtcGlvbnNTZWN0aW9uKCk7XG4gICAgICBzaG93TG9hZGVyKCk7XG4gICAgICByZW1vdmVDaGFtcGlvbnNQYWdlTGlzdGVuZXIoKTtcbiAgICAgIGF3YWl0IGNoZWNrT3B0aW9ucygpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNob3dDaGFtcGlvbnNTZWN0aW9uKCk7XG4gICAgICAgIGhpZGVMb2FkZXIoKTtcbiAgICAgIH0sIHdhaXRUaW1lKTtcbiAgICAgIGFkZENoYW1waW9uc1BhZ2VMaXN0ZW5lcigpO1xuICAgIH07XG5cbiAgICAvKiBjbGljayBldmVudCByZXNwb25zZXMgKi9cbiAgICBpZiAoQXJyYXkuZnJvbShldmVudC50YXJnZXQuY2xhc3NMaXN0KS5pbmNsdWRlcygnZHJvcGRvd24tYnRuJykpIHtcbiAgICAgIGRyb3Bkb3duT3B0aW9uc1RvZ2dsZShldmVudC50YXJnZXQpO1xuICAgIH1cblxuICAgIGlmIChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc05hbWUgPT09ICdjaGFtcGlvbi1jb250YWluZXIgc2hvd24nKSB7XG4gICAgICBkaXNwbGF5Q2hhbXBpb25Nb2RhbChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LmlkKTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc05hbWUgPT09ICdjaGFtcGlvbi1jb250YWluZXIgc2hvd24nKSB7XG4gICAgICBkaXNwbGF5Q2hhbXBpb25Nb2RhbChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmRhdGFzZXQuaWQpO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5mcm9tKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QpLmluY2x1ZGVzKCdtdWx0aS1zZWxlY3QnKSkge1xuICAgICAgdG9nZ2xlRHJvcGRvd25PcHRpb24oZXZlbnQudGFyZ2V0KTtcbiAgICAgIGZpbHRlckFuZFNvcnRDaGFtcGlvbnNTZWN0aW9uKDYwMCk7XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmZyb20oZXZlbnQudGFyZ2V0LmNsYXNzTGlzdCkuaW5jbHVkZXMoJ3NpbmdsZS1zZWxlY3QnKSkge1xuICAgICAgc2VsZWN0U2luZ2xlRHJvcGRvd25PcHRpb24oZXZlbnQudGFyZ2V0KTtcbiAgICAgIGZpbHRlckFuZFNvcnRDaGFtcGlvbnNTZWN0aW9uKDEwMDApO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5mcm9tKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QpLmluY2x1ZGVzKCdoZWFkZXItb3B0aW9uJykpIHtcbiAgICAgIHNlbGVjdExhbmVGaWx0ZXJPcHRpb24oZXZlbnQudGFyZ2V0KTtcbiAgICAgIGZpbHRlckFuZFNvcnRDaGFtcGlvbnNTZWN0aW9uKDYwMCk7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdhcHAtbmFtZScpIHtcbiAgICAgIHJlZGlyZWN0VG9Gcm9udFBhZ2UoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2hhbXBpb25zUGFnZUtleUV2ZW50cyA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgYWN0aXZlRWxlbWVudCB9ID0gZG9jdW1lbnQ7XG5cbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBpZiAoYWN0aXZlRWxlbWVudCAmJiBhY3RpdmVFbGVtZW50LmNsYXNzTmFtZSA9PT0gJ2NoYW1waW9uLWNvbnRhaW5lciBzaG93bicpIHtcbiAgICAgICAgZGlzcGxheUNoYW1waW9uTW9kYWwoYWN0aXZlRWxlbWVudC5kYXRhc2V0LmlkKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQgJiYgYWN0aXZlRWxlbWVudC5jbGFzc05hbWUgPT09ICdjaGFtcGlvbi1pbWcnKSB7XG4gICAgICAgIGRpc3BsYXlDaGFtcGlvbk1vZGFsKGFjdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5kYXRhc2V0LmlkKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2hhbXBpb25zUGFnZUxpc3RlbmVycyA9ICgpID0+IHtcbiAgICBjb25zdCBjaGFtcGlvbnNQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoYW1waW9ucy1wYWdlJyk7XG4gICAgY2hhbXBpb25zUGFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW1waW9uc1BhZ2VDbGlja0V2ZW50cyk7XG4gICAgY2hhbXBpb25zUGFnZS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgY2hhbXBpb25zUGFnZUtleUV2ZW50cyk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjaGFtcGlvbnNQYWdlTGlzdGVuZXJzLFxuICAgIGRpc3BsYXlDaGFtcGlvbk1vZGFsLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhbXBpb25zUGFnZUNvbnRyb2xsZXI7XG4iLCJpbXBvcnQgZ2V0Q2hhbXBpb25TdGF0cyBmcm9tICcuLi9jaGFtcGlvbkRhdGEvY2hhbXBpb25TdGF0cyc7XG5pbXBvcnQgeyBjcmVhdGVDaGFtcGlvbkNvbnRhaW5lciB9IGZyb20gJy4uL3RlbXBsYXRlcy9yZW5kZXJIZWxwZXJzJztcblxuY29uc3QgQ2hhbXBpb25GaWx0ZXIgPSAoKCkgPT4ge1xuICBjb25zdCByZW5kZXJBbGxDaGFtcGlvbnMgPSBhc3luYyAoYWxsQ2hhbXBpb25TdGF0cykgPT4ge1xuICAgIGNvbnN0IGNoYW1waW9uc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb25zLXNlY3Rpb24nKTtcbiAgICBhbGxDaGFtcGlvblN0YXRzLmZvckVhY2goKGNoYW1waW9uKSA9PiB7XG4gICAgICBjcmVhdGVDaGFtcGlvbkNvbnRhaW5lcihjaGFtcGlvbiwgY2hhbXBpb25zU2VjdGlvbik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNoYW1waW9uc1NlY3Rpb247XG4gIH07XG5cbiAgY29uc3QgY2xlYXJDaGFtcGlvbnNTZWN0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGNoYW1waW9uc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb25zLXNlY3Rpb24nKTtcbiAgICBjaGFtcGlvbnNTZWN0aW9uLnRleHRDb250ZW50ID0gJyc7XG4gIH07XG5cbiAgY29uc3Qgc2hvd0NoYW1waW9uID0gKGNoYW1waW9uKSA9PiB7XG4gICAgY2hhbXBpb24uY2xhc3NMaXN0LmFkZCgnc2hvd24nKTtcbiAgICBjaGFtcGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgfTtcblxuICBjb25zdCBoaWRlQ2hhbXBpb24gPSAoY2hhbXBpb24pID0+IHtcbiAgICBjaGFtcGlvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBjaGFtcGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdzaG93bicpO1xuICB9O1xuXG4gIGNvbnN0IGZpbHRlckJ5TGFuZSA9IGFzeW5jIChjbGlja2VkTGFuZSwgYWxsQ2hhbXBpb25TdGF0cykgPT4ge1xuICAgIGNsZWFyQ2hhbXBpb25zU2VjdGlvbigpO1xuICAgIGNvbnN0IGNoYW1waW9uc1NlY3Rpb24gPSBhd2FpdCByZW5kZXJBbGxDaGFtcGlvbnMoYWxsQ2hhbXBpb25TdGF0cyk7XG4gICAgY2hhbXBpb25zU2VjdGlvbi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgY29uc3QgYWxsQ2hhbXBpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYW1waW9uLWNvbnRhaW5lcicpO1xuICAgIGlmIChjbGlja2VkTGFuZSA9PT0gJ2FsbCcpIHtcbiAgICAgIGFsbENoYW1waW9ucy5mb3JFYWNoKChjaGFtcGlvbikgPT4ge1xuICAgICAgICBzaG93Q2hhbXBpb24oY2hhbXBpb24pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgICAgIGFsbENoYW1waW9ucy5mb3JFYWNoKChjaGFtcGlvbikgPT4ge1xuICAgICAgICBjb25zdCBjaGFtcGlvbklkID0gY2hhbXBpb24uZGF0YXNldC5pZDtcbiAgICAgICAgcmVzdWx0cy5wdXNoKGdldENoYW1waW9uU3RhdHMoY2hhbXBpb25JZCkpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBjaGFtcGlvblN0YXRzID0gYXdhaXQgUHJvbWlzZS5hbGwocmVzdWx0cyk7XG4gICAgICBjaGFtcGlvblN0YXRzLmZvckVhY2goKGNoYW1waW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoYW1waW9uTGFuZSA9IGNoYW1waW9uLmxhbmU7XG4gICAgICAgIGNvbnN0IGNoYW1waW9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPSR7Y2hhbXBpb24uY2hhbXBpb25JZH1dYCk7XG4gICAgICAgIGlmIChjaGFtcGlvbkxhbmUudG9Mb3dlckNhc2UoKSAhPT0gY2xpY2tlZExhbmUpIHtcbiAgICAgICAgICBoaWRlQ2hhbXBpb24oY2hhbXBpb25FbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaG93Q2hhbXBpb24oY2hhbXBpb25FbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGZpbHRlckJ5Um9sZSA9IChhY3RpdmVSb2xlcywgYWxsQ2hhbXBpb25EZXRhaWxzKSA9PiB7XG4gICAgY29uc3QgY2hhbXBpb25FbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFtcGlvbi1jb250YWluZXInKTtcblxuICAgIGNoYW1waW9uRWxlbWVudHMuZm9yRWFjaCgoY2hhbXBpb24pID0+IHtcbiAgICAgIGxldCByb2xlTWF0Y2hGb3VuZCA9IGZhbHNlO1xuICAgICAgYWN0aXZlUm9sZXMuZm9yRWFjaCgocm9sZSkgPT4ge1xuICAgICAgICBjb25zdCBjaGFtcGlvblJvbGVzID0gYWxsQ2hhbXBpb25EZXRhaWxzW2NoYW1waW9uLmRhdGFzZXQuaWRdLnRhZ3M7XG4gICAgICAgIGNoYW1waW9uUm9sZXMuZm9yRWFjaCgoY2hhbXBpb25Sb2xlKSA9PiB7XG4gICAgICAgICAgaWYgKGNoYW1waW9uUm9sZS50b0xvd2VyQ2FzZSgpID09PSByb2xlKSB7XG4gICAgICAgICAgICByb2xlTWF0Y2hGb3VuZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgaWYgKCFyb2xlTWF0Y2hGb3VuZCkge1xuICAgICAgICBoaWRlQ2hhbXBpb24oY2hhbXBpb24pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGNhdGVnb3Jpc2VEaWZmaWN1bHR5TnVtID0gKGRpZmZpY3VsdHlOdW0pID0+IHtcbiAgICBpZiAoZGlmZmljdWx0eU51bSA8PSAzKSB7XG4gICAgICByZXR1cm4gJ2xvdyc7XG4gICAgfVxuXG4gICAgaWYgKGRpZmZpY3VsdHlOdW0gPD0gNikge1xuICAgICAgcmV0dXJuICdtZWRpdW0nO1xuICAgIH1cblxuICAgIHJldHVybiAnaGlnaCc7XG4gIH07XG5cbiAgY29uc3QgZmlsdGVyQnlEaWZmaWN1bHR5ID0gYXN5bmMgKGFjdGl2ZURpZmZpY3VsdGllcywgYWxsQ2hhbXBpb25EZXRhaWxzKSA9PiB7XG4gICAgY29uc3QgY2hhbXBpb25FbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFtcGlvbi1jb250YWluZXInKTtcblxuICAgIGNoYW1waW9uRWxlbWVudHMuZm9yRWFjaCgoY2hhbXBpb24pID0+IHtcbiAgICAgIGxldCBkaWZmaWN1bHR5TWF0Y2hGb3VuZCA9IGZhbHNlO1xuICAgICAgYWN0aXZlRGlmZmljdWx0aWVzLmZvckVhY2goKGRpZmZpY3VsdHkpID0+IHtcbiAgICAgICAgY29uc3QgY2hhbXBpb25EaWZmaWN1bHR5TnVtID0gYWxsQ2hhbXBpb25EZXRhaWxzW2NoYW1waW9uLmRhdGFzZXQuaWRdLmluZm8uZGlmZmljdWx0eTtcbiAgICAgICAgY29uc3QgY2hhbXBpb25EaWZmaWN1bHR5ID0gY2F0ZWdvcmlzZURpZmZpY3VsdHlOdW0oY2hhbXBpb25EaWZmaWN1bHR5TnVtKTtcblxuICAgICAgICBpZiAoZGlmZmljdWx0eS50b0xvd2VyQ2FzZSgpID09PSBjaGFtcGlvbkRpZmZpY3VsdHkpIHtcbiAgICAgICAgICBkaWZmaWN1bHR5TWF0Y2hGb3VuZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKCFkaWZmaWN1bHR5TWF0Y2hGb3VuZCkge1xuICAgICAgICBoaWRlQ2hhbXBpb24oY2hhbXBpb24pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZmlsdGVyQnlMYW5lLFxuICAgIGZpbHRlckJ5Um9sZSxcbiAgICBmaWx0ZXJCeURpZmZpY3VsdHksXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBDaGFtcGlvbkZpbHRlcjtcbiIsImltcG9ydCBDaGFtcGlvbnNQYWdlQ29udHJvbGxlciBmcm9tICcuL2NoYW1waW9uc1BhZ2VDb250cm9sbGVyJztcblxuY29uc3QgU2VhcmNoYmFyQ29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGNvbnN0IHNob3dBdXRvQ29tcGxldGVOYW1lcyA9IChzZWFyY2hDb250YWluZXIpID0+IHtcbiAgICBjb25zdCBhdXRvQ29tcGxldGVOYW1lcyA9IHNlYXJjaENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuYXV0by1jb21wbGV0ZS1uYW1lcycpO1xuICAgIGF1dG9Db21wbGV0ZU5hbWVzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9O1xuXG4gIGNvbnN0IGhpZGVBdXRvQ29tcGxldGVOYW1lcyA9ICgpID0+IHtcbiAgICBjb25zdCBhdXRvQ29tcGxldGVOYW1lRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXV0by1jb21wbGV0ZS1uYW1lcycpO1xuICAgIGF1dG9Db21wbGV0ZU5hbWVFbGVtZW50cy5mb3JFYWNoKChhdXRvQ29tcGxldGVOYW1lRWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgYXV0b0NvbXBsZXRlTmFtZXMgPSBhdXRvQ29tcGxldGVOYW1lRWxlbWVudDtcbiAgICAgIGF1dG9Db21wbGV0ZU5hbWVzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgc2VhcmNoYmFyRm9jdXNJbkV2ZW50ID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdzZWFyY2gnKSB7XG4gICAgICBjb25zdCBzZWFyY2hDb250YWluZXIgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgIHNob3dBdXRvQ29tcGxldGVOYW1lcyhzZWFyY2hDb250YWluZXIpO1xuICAgICAgZXZlbnQudGFyZ2V0LmZvY3VzKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNlYXJjaGJhckZvY3Vzb3V0RXZlbnQgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoIWV2ZW50LnJlbGF0ZWRUYXJnZXQgfHwgKGV2ZW50LnJlbGF0ZWRUYXJnZXQuY2xhc3NOYW1lICE9PSAnYXV0by1jb21wbGV0ZS1uYW1lLXdyYXBwZXInICYmIGV2ZW50LnJlbGF0ZWRUYXJnZXQuY2xhc3NOYW1lICE9PSAnc2VhcmNoJykpIHtcbiAgICAgIGhpZGVBdXRvQ29tcGxldGVOYW1lcygpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZWFyY2hCYXJJbnB1dEV2ZW50ID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdzZWFyY2gnKSB7XG4gICAgICBjb25zdCBpbnB1dFZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgY29uc3QgYXV0b0NvbXBsZXRlTmFtZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXV0by1jb21wbGV0ZS1uYW1lJyk7XG4gICAgICBhdXRvQ29tcGxldGVOYW1lcy5mb3JFYWNoKChhdXRvQ29tcGxldGVOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBhdXRvQ29tcGxldGVOYW1lO1xuICAgICAgICBpZiAobmFtZS5pZC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICBuYW1lLnBhcmVudEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmFtZS5wYXJlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZWFyY2hiYXJLZXlkb3duRXZlbnRzID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgaWYgKChldmVudC5rZXkgPT09ICdBcnJvd0Rvd24nIHx8IGV2ZW50LmtleSA9PT0gJ0Fycm93VXAnKSAmJiBldmVudC50YXJnZXQgIT09IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSkge1xuICAgICAgbGV0IHsgYWN0aXZlRWxlbWVudCB9ID0gZG9jdW1lbnQ7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBsZXQgZ29Ub1N0YXJ0O1xuICAgICAgY29uc3QgYWN0aW9uID0ge1xuICAgICAgICBBcnJvd1VwOiAncHJldmlvdXMnLCBBcnJvd0Rvd246ICduZXh0JyxcbiAgICAgIH07XG5cbiAgICAgIGlmIChhY3RpdmVFbGVtZW50LmNsYXNzTmFtZSA9PT0gJ3NlYXJjaCcgJiYgZXZlbnQua2V5ID09PSAnQXJyb3dEb3duJykge1xuICAgICAgICBhY3RpdmVFbGVtZW50ID0gYWN0aXZlRWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIC8qIFNraXBzIGF1dG9jb21wbGV0ZSBuYW1lcyB3aGljaCBhcmUgY3VycmVudGx5IG5vdCBkaXNwbGF5ZWQgKi9cbiAgICAgICAgd2hpbGUgKGFjdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgYWN0aXZlRWxlbWVudCA9IGFjdGl2ZUVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICB9XG4gICAgICAgIGFjdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFjdGl2ZUVsZW1lbnQgPSBhY3RpdmVFbGVtZW50W2Ake2FjdGlvbltldmVudC5rZXldfUVsZW1lbnRTaWJsaW5nYF07XG4gICAgICAgIHdoaWxlIChhY3RpdmVFbGVtZW50ICYmIGFjdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgYWN0aXZlRWxlbWVudCA9IGFjdGl2ZUVsZW1lbnRbYCR7YWN0aW9uW2V2ZW50LmtleV19RWxlbWVudFNpYmxpbmdgXTtcbiAgICAgICAgfVxuICAgICAgICAvKiBDaGVja3Mgd2hpY2ggc2VhcmNoIGJhciBkcm9wZG93biBpcyBjdXJyZW50bHkgZGlzcGxheWVkICovXG4gICAgICAgIGNvbnN0IGF1dG9Db21wbGV0ZU5hbWVFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hdXRvLWNvbXBsZXRlLW5hbWVzJyk7XG4gICAgICAgIGNvbnN0IGF1dG9Db21wbGV0ZU5hbWVzID0gQXJyYXkuZnJvbShhdXRvQ29tcGxldGVOYW1lRWxlbWVudHMpLmZpbHRlcihcbiAgICAgICAgICAoYXV0b0NvbXBsZXRlTmFtZUVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzU2hvd2luZyA9IGF1dG9Db21wbGV0ZU5hbWVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09ICdibG9jayc7XG4gICAgICAgICAgICByZXR1cm4gaXNTaG93aW5nO1xuICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgICAgIGlmIChhdXRvQ29tcGxldGVOYW1lc1swXSAhPT0gdW5kZWZpbmVkICYmICFhY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgLyogUmV0dXJucyB0byB0aGUgc3RhcnQgb3IgdGhlIGVuZCBvZiB0aGUgZHJvcGRvd24gd2hlbiBhbiBhcnJvdyBrZXkgaXMgcHJlc3NlZCAqL1xuICAgICAgICAgIGdvVG9TdGFydCA9IGFjdGlvbltldmVudC5rZXldID09PSAnbmV4dCcgfHwgZXZlbnQua2V5ID09PSAnSG9tZSc7XG4gICAgICAgICAgYWN0aXZlRWxlbWVudCA9IGF1dG9Db21wbGV0ZU5hbWVzWzBdLmNoaWxkcmVuW1xuICAgICAgICAgICAgZ29Ub1N0YXJ0ID8gMCA6IGF1dG9Db21wbGV0ZU5hbWVzWzBdLmNoaWxkcmVuLmxlbmd0aCAtIDFcbiAgICAgICAgICBdO1xuICAgICAgICAgIHdoaWxlIChhY3RpdmVFbGVtZW50ICYmIGFjdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICBhY3RpdmVFbGVtZW50ID0gYWN0aXZlRWxlbWVudFtgJHthY3Rpb25bZXZlbnQua2V5XX1FbGVtZW50U2libGluZ2BdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgIGFjdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIGNvbnN0IHsgYWN0aXZlRWxlbWVudCB9ID0gZG9jdW1lbnQ7XG4gICAgICBpZiAoYWN0aXZlRWxlbWVudCAmJiBhY3RpdmVFbGVtZW50LmNsYXNzTmFtZSA9PT0gJ2F1dG8tY29tcGxldGUtbmFtZS13cmFwcGVyJykge1xuICAgICAgICBjb25zdCBzZWFyY2hDb250YWluZXJDbGFzc05hbWUgPSBhY3RpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3RbMV07XG4gICAgICAgIGNvbnN0IGF1dG9Db21wbGV0ZU5hbWUgPSBhY3RpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkO1xuXG4gICAgICAgIC8qIENoZWNrcyB3aGljaCBwYWdlIHRoZSBzZWFyY2ggYmFyIGlzIG9uICovXG4gICAgICAgIGlmIChzZWFyY2hDb250YWluZXJDbGFzc05hbWUgPT09ICdkZXNrdG9wLXNlYXJjaC1jb250YWluZXInXG4gICAgICAgICAgICB8fCBzZWFyY2hDb250YWluZXJDbGFzc05hbWUgPT09ICdtb2JpbGUtc2VhcmNoLWNvbnRhaW5lcicpIHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2hhbXBpb25JZCcsIGF1dG9Db21wbGV0ZU5hbWUuZGF0YXNldC5jaGFtcGlvbklkKTtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICdjaGFtcGlvbnMuaHRtbCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXdhaXQgQ2hhbXBpb25zUGFnZUNvbnRyb2xsZXIuZGlzcGxheUNoYW1waW9uTW9kYWwoYXV0b0NvbXBsZXRlTmFtZS5kYXRhc2V0LmNoYW1waW9uSWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNlYXJjaGJhckNsaWNrRXZlbnRzID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgY2xpY2tBdXRvQ29tcGxldGVOYW1lID0gYXN5bmMgKHNlYXJjaENvbnRhaW5lckNsYXNzTmFtZSwgYXV0b0NvbXBsZXRlTmFtZSkgPT4ge1xuICAgICAgaWYgKHNlYXJjaENvbnRhaW5lckNsYXNzTmFtZSA9PT0gJ2Rlc2t0b3Atc2VhcmNoLWNvbnRhaW5lcidcbiAgICAgIHx8IHNlYXJjaENvbnRhaW5lckNsYXNzTmFtZSA9PT0gJ21vYmlsZS1zZWFyY2gtY29udGFpbmVyJykge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2hhbXBpb25JZCcsIGF1dG9Db21wbGV0ZU5hbWUuZGF0YXNldC5jaGFtcGlvbklkKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnY2hhbXBpb25zLmh0bWwnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXdhaXQgQ2hhbXBpb25zUGFnZUNvbnRyb2xsZXIuZGlzcGxheUNoYW1waW9uTW9kYWwoYXV0b0NvbXBsZXRlTmFtZS5kYXRhc2V0LmNoYW1waW9uSWQpO1xuICAgICAgICBjb25zdCBhdXRvQ29tcGxldGVOYW1lRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXV0by1jb21wbGV0ZS1uYW1lcycpO1xuICAgICAgICBhdXRvQ29tcGxldGVOYW1lRWxlbWVudHMuZm9yRWFjaCgoYXV0b0NvbXBsZXRlTmFtZUVsZW1lbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBhdXRvQ29tcGxldGVOYW1lcyA9IGF1dG9Db21wbGV0ZU5hbWVFbGVtZW50O1xuICAgICAgICAgIGF1dG9Db21wbGV0ZU5hbWVzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3Qgc2VhcmNoQ29udGFpbmVyID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2F1dG8tY29tcGxldGUtbmFtZS13cmFwcGVyJykge1xuICAgICAgY29uc3Qgc2VhcmNoQ29udGFpbmVyQ2xhc3NOYW1lID0gc2VhcmNoQ29udGFpbmVyLmNsYXNzTGlzdFsxXTtcbiAgICAgIGNvbnN0IGF1dG9Db21wbGV0ZU5hbWUgPSBldmVudC50YXJnZXQuZmlyc3RDaGlsZDtcbiAgICAgIGNsaWNrQXV0b0NvbXBsZXRlTmFtZShzZWFyY2hDb250YWluZXJDbGFzc05hbWUsIGF1dG9Db21wbGV0ZU5hbWUpO1xuICAgIH1cblxuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnYXV0by1jb21wbGV0ZS1uYW1lJykge1xuICAgICAgY29uc3Qgc2VhcmNoQ29udGFpbmVyQ2xhc3NOYW1lID0gc2VhcmNoQ29udGFpbmVyLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0WzFdO1xuICAgICAgY29uc3QgYXV0b0NvbXBsZXRlTmFtZSA9IGV2ZW50LnRhcmdldDtcbiAgICAgIGNsaWNrQXV0b0NvbXBsZXRlTmFtZShzZWFyY2hDb250YWluZXJDbGFzc05hbWUsIGF1dG9Db21wbGV0ZU5hbWUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZWFyY2hDb250YWluZXJMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgLy8gY29uc3Qgc2VhcmNoQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1jb250YWluZXInKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgc2VhcmNoYmFyRm9jdXNJbkV2ZW50KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIHNlYXJjaGJhckZvY3Vzb3V0RXZlbnQpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgc2VhcmNoQmFySW5wdXRFdmVudCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHNlYXJjaGJhcktleWRvd25FdmVudHMpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VhcmNoYmFyQ2xpY2tFdmVudHMpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc2VhcmNoQ29udGFpbmVyTGlzdGVuZXJzLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoYmFyQ29udHJvbGxlcjtcbiIsIi8vIGltcG9ydCB7IGdldEFsbENoYW1waW9uU3RhdHMgfSBmcm9tICcuLi9jaGFtcGlvbkRhdGEvZ2V0QWxsQ2hhbXBpb25zJztcbmltcG9ydCB7IGNyZWF0ZUNoYW1waW9uQ29udGFpbmVyIH0gZnJvbSAnLi4vdGVtcGxhdGVzL3JlbmRlckhlbHBlcnMnO1xuXG5jb25zdCBTb3J0Q2hhbXBpb25zID0gKCgpID0+IHtcbiAgY29uc3QgY2xlYXJDaGFtcGlvbnNTZWN0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGNoYW1waW9uc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb25zLXNlY3Rpb24nKTtcbiAgICBjaGFtcGlvbnNTZWN0aW9uLnN0eWxlLnZpc2libGl0eSA9ICdoaWRkZW4nO1xuICAgIGNoYW1waW9uc1NlY3Rpb24udGV4dENvbnRlbnQgPSAnJztcbiAgfTtcblxuICBjb25zdCByZWNyZWF0ZUNoYW1waW9uc1NlY3Rpb24gPSAoY2hhbXBpb25zKSA9PiB7XG4gICAgY29uc3QgY2hhbXBpb25zU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbnMtc2VjdGlvbicpO1xuICAgIGNoYW1waW9ucy5mb3JFYWNoKChjaGFtcGlvbikgPT4ge1xuICAgICAgY3JlYXRlQ2hhbXBpb25Db250YWluZXIoY2hhbXBpb24sIGNoYW1waW9uc1NlY3Rpb24pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGZpbHRlckNoYW1waW9ucyA9IChhbGxDaGFtcGlvblN0YXRzKSA9PiB7XG4gICAgLy8gY29uc3QgYWxsQ2hhbXBpb25TdGF0cyA9IGF3YWl0IGdldEFsbENoYW1waW9uU3RhdHMoKTtcbiAgICBjb25zdCBmaWx0ZXJlZENoYW1waW9uU3RhdHMgPSBhbGxDaGFtcGlvblN0YXRzLmZpbHRlcigoY2hhbXBpb25TdGF0cykgPT4ge1xuICAgICAgY29uc3QgY2hhbXBpb25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9JHtjaGFtcGlvblN0YXRzLmlkfV1gKTtcbiAgICAgIHJldHVybiBjaGFtcGlvbkVsZW1lbnQuY2xhc3NOYW1lID09PSAnY2hhbXBpb24tY29udGFpbmVyIHNob3duJztcbiAgICB9KTtcblxuICAgIHJldHVybiBmaWx0ZXJlZENoYW1waW9uU3RhdHM7XG4gIH07XG5cbiAgY29uc3Qgc29ydENoYW1waW9uc0J5V2lucmF0ZSA9IChhbGxDaGFtcGlvblN0YXRzKSA9PiB7XG4gICAgY29uc3QgZmlsdGVyZWRDaGFtcGlvblN0YXRzID0gZmlsdGVyQ2hhbXBpb25zKGFsbENoYW1waW9uU3RhdHMpO1xuICAgIGNvbnN0IGZpbHRlcmVkQ2hhbXBpb25zU29ydGVkID0gZmlsdGVyZWRDaGFtcGlvblN0YXRzLnNvcnQoKGEsIGIpID0+IGIud2luUmF0ZSAtIGEud2luUmF0ZSk7XG4gICAgY2xlYXJDaGFtcGlvbnNTZWN0aW9uKCk7XG4gICAgcmVjcmVhdGVDaGFtcGlvbnNTZWN0aW9uKGZpbHRlcmVkQ2hhbXBpb25zU29ydGVkKTtcbiAgICByZXR1cm4gZmlsdGVyZWRDaGFtcGlvbnNTb3J0ZWQ7XG4gIH07XG5cbiAgY29uc3Qgc29ydENoYW1waW9uc0J5UGlja3JhdGUgPSAoYWxsQ2hhbXBpb25TdGF0cykgPT4ge1xuICAgIGNvbnN0IGZpbHRlcmVkQ2hhbXBpb25TdGF0cyA9IGZpbHRlckNoYW1waW9ucyhhbGxDaGFtcGlvblN0YXRzKTtcbiAgICBjb25zdCBmaWx0ZXJlZENoYW1waW9uc1NvcnRlZCA9IGZpbHRlcmVkQ2hhbXBpb25TdGF0cy5zb3J0KChhLCBiKSA9PiBiLnBpY2tSYXRlIC0gYS5waWNrUmF0ZSk7XG4gICAgY2xlYXJDaGFtcGlvbnNTZWN0aW9uKCk7XG4gICAgcmVjcmVhdGVDaGFtcGlvbnNTZWN0aW9uKGZpbHRlcmVkQ2hhbXBpb25zU29ydGVkKTtcbiAgICByZXR1cm4gZmlsdGVyZWRDaGFtcGlvbnNTb3J0ZWQ7XG4gIH07XG5cbiAgY29uc3Qgc29ydENoYW1waW9uc0J5RGFtYWdlRG9uZSA9IChhbGxDaGFtcGlvblN0YXRzKSA9PiB7XG4gICAgY29uc3QgZmlsdGVyZWRDaGFtcGlvblN0YXRzID0gZmlsdGVyQ2hhbXBpb25zKGFsbENoYW1waW9uU3RhdHMpO1xuXG4gICAgY29uc3QgZmlsdGVyZWRDaGFtcGlvbnNTb3J0ZWQgPSBmaWx0ZXJlZENoYW1waW9uU3RhdHMuc29ydChcbiAgICAgIChhLCBiKSA9PiBiLmRhbWFnZVBlck1hdGNoLnRvdGFsRGFtYWdlLnZhbHVlIC0gYS5kYW1hZ2VQZXJNYXRjaC50b3RhbERhbWFnZS52YWx1ZSxcbiAgICApO1xuICAgIGNsZWFyQ2hhbXBpb25zU2VjdGlvbigpO1xuICAgIHJlY3JlYXRlQ2hhbXBpb25zU2VjdGlvbihmaWx0ZXJlZENoYW1waW9uc1NvcnRlZCk7XG4gICAgcmV0dXJuIGZpbHRlcmVkQ2hhbXBpb25zU29ydGVkO1xuICB9O1xuXG4gIGNvbnN0IHNvcnRCeURlZmF1bHRPcmRlciA9IChhbGxDaGFtcGlvblN0YXRzKSA9PiB7XG4gICAgLy8gY29uc3QgYWxsQ2hhbXBpb25TdGF0cyA9IGF3YWl0IGdldEFsbENoYW1waW9uU3RhdHMoKTtcbiAgICBjb25zdCBmaWx0ZXJlZENoYW1waW9uU3RhdHMgPSBhbGxDaGFtcGlvblN0YXRzLmZpbHRlcigoY2hhbXBpb25TdGF0cykgPT4ge1xuICAgICAgY29uc3QgY2hhbXBpb25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9JHtjaGFtcGlvblN0YXRzLmlkfV1gKTtcbiAgICAgIGlmIChjaGFtcGlvbkVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNoYW1waW9uRWxlbWVudC5jbGFzc05hbWUgPT09ICdjaGFtcGlvbi1jb250YWluZXIgc2hvd24nO1xuICAgIH0pO1xuICAgIGNsZWFyQ2hhbXBpb25zU2VjdGlvbigpO1xuICAgIHJlY3JlYXRlQ2hhbXBpb25zU2VjdGlvbihmaWx0ZXJlZENoYW1waW9uU3RhdHMpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc29ydENoYW1waW9uc0J5V2lucmF0ZSxcbiAgICBzb3J0Q2hhbXBpb25zQnlQaWNrcmF0ZSxcbiAgICBzb3J0Q2hhbXBpb25zQnlEYW1hZ2VEb25lLFxuICAgIHNvcnRCeURlZmF1bHRPcmRlcixcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFNvcnRDaGFtcGlvbnM7XG4iLCJjb25zdCBmZXRjaENoYW1waW9uRGV0YWlscyA9IGFzeW5jIChjaGFtcGlvbklkKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi8xMS4yMC4xL2RhdGEvZW5fVVMvY2hhbXBpb24vJHtjaGFtcGlvbklkfS5qc29uYCwgeyBtb2RlOiAnY29ycycgfSk7XG4gIGNvbnN0IGNoYW1waW9ucyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgY29uc3QgY2hhbXBpb25EZXRhaWxzID0gY2hhbXBpb25zLmRhdGFbY2hhbXBpb25JZF07XG5cbiAgcmV0dXJuIGNoYW1waW9uRGV0YWlscztcbn07XG5cbmNvbnN0IGdldENoYW1waW9uUGFzc2l2ZXMgPSAoY2hhbXBpb25EZXRhaWxzKSA9PiB7XG4gIGNvbnN0IHBhc3NpdmVEYXRhID0gY2hhbXBpb25EZXRhaWxzLnBhc3NpdmU7XG4gIGNvbnN0IHBhc3NpdmVOYW1lID0gcGFzc2l2ZURhdGEubmFtZTtcbiAgY29uc3QgcGFzc2l2ZURlc2NyaXB0aW9uID0gcGFzc2l2ZURhdGEuZGVzY3JpcHRpb247XG4gIGNvbnN0IHBhc3NpdmVJZCA9IHBhc3NpdmVEYXRhLmltYWdlLmZ1bGw7XG4gIGNvbnN0IHBhc3NpdmVJbWdVcmwgPSBgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLzExLjIxLjEvaW1nL3Bhc3NpdmUvJHtwYXNzaXZlSWR9YDtcblxuICByZXR1cm4ge1xuICAgIHBhc3NpdmVOYW1lLFxuICAgIHBhc3NpdmVEZXNjcmlwdGlvbixcbiAgICBwYXNzaXZlSW1nVXJsLFxuICB9O1xufTtcblxuY29uc3QgZ2V0Q2hhbXBpb25TcGVsbHMgPSAoY2hhbXBpb25EZXRhaWxzKSA9PiB7XG4gIGNvbnN0IHNwZWxsc0RhdGEgPSBjaGFtcGlvbkRldGFpbHMuc3BlbGxzO1xuICBjb25zdCBzcGVsbHMgPSBbXTtcblxuICBzcGVsbHNEYXRhLmZvckVhY2goKHNwZWxsKSA9PiB7XG4gICAgY29uc3Qgc3BlbGxPYmplY3QgPSB7XG4gICAgICBuYW1lOiBzcGVsbC5uYW1lLFxuICAgICAgaWQ6IHNwZWxsLmlkLFxuICAgICAgZGVzY3JpcHRpb246IHNwZWxsLmRlc2NyaXB0aW9uLFxuICAgICAgY29zdEJ1cm46IHNwZWxsLmNvc3RCdXJuLFxuICAgICAgY29zdFR5cGU6IHNwZWxsLmNvc3RUeXBlLFxuICAgICAgY29vbGRvd246IHNwZWxsLmNvb2xkb3duQnVybixcbiAgICAgIGltZ1VybDogYGh0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi8xMS4yMS4xL2ltZy9zcGVsbC8ke3NwZWxsLmlkfS5wbmdgLFxuICAgIH07XG4gICAgc3BlbGxzLnB1c2goc3BlbGxPYmplY3QpO1xuICB9KTtcblxuICByZXR1cm4gc3BlbGxzO1xufTtcblxuY29uc3QgZ2V0Q2hhbXBpb25EZXRhaWxzID0gYXN5bmMgKGNoYW1waW9uSWQpID0+IHtcbiAgY29uc3QgY2hhbXBpb25EZXRhaWxzID0gYXdhaXQgZmV0Y2hDaGFtcGlvbkRldGFpbHMoY2hhbXBpb25JZCk7XG4gIGNvbnN0IGNoYW1waW9uUGFzc2l2ZSA9IGdldENoYW1waW9uUGFzc2l2ZXMoY2hhbXBpb25EZXRhaWxzKTtcbiAgY29uc3Qgc3BlbGxzID0gZ2V0Q2hhbXBpb25TcGVsbHMoY2hhbXBpb25EZXRhaWxzKTtcblxuICAvLyBNYWtlIGZpcnN0IGxldHRlciBvZiB0aGUgY2hhbXBpb24gdGl0bGUgYSBjYXBpdGFsIGxldHRlci5cbiAgY29uc3QgY2hhbXBpb25UaXRsZSA9IGNoYW1waW9uRGV0YWlscy50aXRsZS5yZXBsYWNlKFxuICAgIGNoYW1waW9uRGV0YWlscy50aXRsZVswXSwgY2hhbXBpb25EZXRhaWxzLnRpdGxlWzBdLnRvVXBwZXJDYXNlKCksXG4gICk7XG5cbiAgaWYgKGNoYW1waW9uRGV0YWlscy5wYXJ0eXBlID09PSAnTm9uZScpIHtcbiAgICBjaGFtcGlvbkRldGFpbHMucGFydHlwZSA9ICdNYW5hbGVzcyc7XG4gIH1cblxuICBpZiAoY2hhbXBpb25EZXRhaWxzLmlkID09PSAnQWtzaGFuJykge1xuICAgIGNoYW1waW9uRGV0YWlscy5hbGx5dGlwc1swXSA9ICdZb3UgY2Fu4oCZdCB1c2UgY29uc3VtYWJsZXMgbGlrZSBwb3Rpb25zIGR1cmluZyB5b3VyIENvbWV1cHBhbmNlLCBtYWtlIHN1cmUgdG8gdXNlIHRoZW0gYmVmb3JlIGNoYW5uZWxpbmcuJztcbiAgfVxuXG4gIGlmIChjaGFtcGlvbkRldGFpbHMuaWQgPT09ICdWZXgnKSB7XG4gICAgY2hhbXBpb25EZXRhaWxzLmFsbHl0aXBzLnB1c2goJ1ZleCBpcyBncmVhdCBhdCBkaXZpbmcgaW50byB0aGUgYmFja2xpbmUsIGJ1dCBoZXIgZXNjYXBlIHBvdGVudGlhbCBpcyBsb3cgc28gdGltaW5nIGlzIGtleS4nKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmFtZTogY2hhbXBpb25EZXRhaWxzLm5hbWUsXG4gICAgaWQ6IGNoYW1waW9uRGV0YWlscy5pZCxcbiAgICB0aXRsZTogY2hhbXBpb25UaXRsZSxcbiAgICBsb3JlOiBjaGFtcGlvbkRldGFpbHMubG9yZSxcbiAgICByb2xlczogY2hhbXBpb25EZXRhaWxzLnRhZ3MsXG4gICAgc2tpbnM6IGNoYW1waW9uRGV0YWlscy5za2lucyxcbiAgICByZXNvdXJjZTogY2hhbXBpb25EZXRhaWxzLnBhcnR5cGUsXG4gICAgcGFzc2l2ZTogY2hhbXBpb25QYXNzaXZlLFxuICAgIHNwZWxscyxcbiAgICB0aXBzOiBjaGFtcGlvbkRldGFpbHMuYWxseXRpcHMsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRDaGFtcGlvbkRldGFpbHM7XG4iLCJjb25zdCBmZXRjaENoYW1waW9uU3RhdHMgPSBhc3luYyAoY2hhbXBpb25JZCkgPT4ge1xuICAvKiBSZWxhdGl2ZSB1cmxzIGFyZSB1c2VkIGZvciB3aGVuIHRoZSBhcHAgaXMgaW4gcHJvZHVjdGlvbiBhbmQgbG9jYWxob3N0IHVybCBmb3IgZGV2ZWxvcG1lbnQgKi9cbiAgY29uc3QgZGV2VXJsID0gJ2h0dHA6Ly8xMjcuMC4wLjE6NTUwMC9mcm9udGVuZC9kaXN0L2NoYW1waW9ucy5odG1sJztcbiAgY29uc3QgcmVzcG9uc2UgPSB3aW5kb3cubG9jYXRpb24uaHJlZiA9PT0gZGV2VXJsXG4gICAgPyBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxLyR7Y2hhbXBpb25JZH1gLCB7IG1vZGU6ICdjb3JzJyB9KVxuICAgIDogYXdhaXQgZmV0Y2goYCR7Y2hhbXBpb25JZH1gLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgY29uc3QgY2hhbXBpb25TdGF0cyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICByZXR1cm4gY2hhbXBpb25TdGF0cztcbn07XG5cbmNvbnN0IGdldENoYW1waW9uU3RhdHMgPSBhc3luYyAoY2hhbXBpb25JZCkgPT4ge1xuICBjb25zdCBjaGFtcGlvblN0YXRzID0gYXdhaXQgZmV0Y2hDaGFtcGlvblN0YXRzKGNoYW1waW9uSWQpO1xuXG4gIGNvbnN0IHdpblJhdGUgPSBjaGFtcGlvblN0YXRzLndpblJhdGUudG9GaXhlZCgyKTtcbiAgY29uc3QgcGlja1JhdGUgPSBjaGFtcGlvblN0YXRzLnBpY2tSYXRlLnRvRml4ZWQoMik7XG4gIGNvbnN0IGxhbmUgPSBjaGFtcGlvblN0YXRzLmxhbmVbMF0gKyBjaGFtcGlvblN0YXRzLmxhbmUuc3Vic3RyaW5nKDEpLnRvTG93ZXJDYXNlKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBjaGFtcGlvbklkLFxuICAgIGtkYTogY2hhbXBpb25TdGF0cy5rZGFSYXRpbyxcbiAgICBkYW1hZ2VQZXJNYXRjaDogY2hhbXBpb25TdGF0cy5kYW1hZ2VQZXJNYXRjaCxcbiAgICBpdGVtU2V0czogY2hhbXBpb25TdGF0cy5pdGVtQ2hvaWNlcy5zbGljZSgxKSxcbiAgICBiZXN0TWF0Y2hVcHM6IGNoYW1waW9uU3RhdHMubWF0Y2hVcHMuYmVzdE1hdGNoVXBzLFxuICAgIHdvcnN0TWF0Y2hVcHM6IGNoYW1waW9uU3RhdHMubWF0Y2hVcHMud29yc3RNYXRjaFVwcyxcbiAgICB3aW5SYXRlLFxuICAgIHBpY2tSYXRlLFxuICAgIGxhbmUsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRDaGFtcGlvblN0YXRzO1xuIiwiY29uc3QgZ2V0QWxsQ2hhbXBpb25EZXRhaWxzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB2ZXJzaW9uc1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2FwaS92ZXJzaW9ucy5qc29uJyk7XG4gIGNvbnN0IHZlcnNpb25zID0gYXdhaXQgdmVyc2lvbnNSZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IGxhdGVzdFZlcnNpb24gPSB2ZXJzaW9uc1swXTtcbiAgY29uc3QgY2hhbXBpb25zUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLyR7bGF0ZXN0VmVyc2lvbn0vZGF0YS9lbl9VUy9jaGFtcGlvbi5qc29uYCk7XG4gIGNvbnN0IGFsbENoYW1waW9ucyA9IGF3YWl0IGNoYW1waW9uc1Jlc3BvbnNlLmpzb24oKTtcblxuICByZXR1cm4gYWxsQ2hhbXBpb25zLmRhdGE7XG59O1xuXG5jb25zdCBnZXRBbGxDaGFtcGlvblN0YXRzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBkZXZVcmwgPSAnaHR0cDovLzEyNy4wLjAuMTo1NTAwL2Zyb250ZW5kL2Rpc3QvY2hhbXBpb25zLmh0bWwnO1xuICBjb25zdCByZXNwb25zZSA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmID09PSBkZXZVcmxcbiAgICA/IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvY2hhbXBpb25zJywgeyBtb2RlOiAnY29ycycgfSlcbiAgICA6IGF3YWl0IGZldGNoKCdjaGFtcGlvbnMnLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgY29uc3QgYWxsQ2hhbXBpb25TdGF0cyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICByZXR1cm4gYWxsQ2hhbXBpb25TdGF0cztcbn07XG5cbmV4cG9ydCB7XG4gIGdldEFsbENoYW1waW9uRGV0YWlscyxcbiAgZ2V0QWxsQ2hhbXBpb25TdGF0cyxcbn07XG4iLCIvLyBGZXRjaGVzIGFsbCB0aGUgaXRlbXMgYSBjaGFtcGlvbiBjYW4gYnV5IGluIGEgbWF0Y2hcbmNvbnN0IGZldGNoQWxsSXRlbXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHZlcnNpb25SZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9hcGkvdmVyc2lvbnMuanNvbicsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICBjb25zdCB2ZXJzaW9ucyA9IGF3YWl0IHZlcnNpb25SZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IGxhdGVzdFZlcnNpb24gPSB2ZXJzaW9uc1swXTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLyR7bGF0ZXN0VmVyc2lvbn0vZGF0YS9lbl9VUy9pdGVtLmpzb25gKTtcbiAgY29uc3QgYWxsSXRlbXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIGFsbEl0ZW1zLmRhdGE7XG59O1xuXG5jbGFzcyBJdGVtSW5mbyB7XG4gIGNvbnN0cnVjdG9yKGl0ZW1JZCkge1xuICAgIHRoaXMuaXRlbUlkID0gaXRlbUlkO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldEFsbEl0ZW1zKCkge1xuICAgIGNvbnN0IGFsbEl0ZW1zID0gZmV0Y2hBbGxJdGVtcygpO1xuICAgIHJldHVybiBhbGxJdGVtcztcbiAgfVxuXG4gIGdldEl0ZW1EZXRhaWxzKGFsbEl0ZW1zKSB7XG4gICAgY29uc3QgaXRlbURldGFpbHMgPSBhbGxJdGVtc1t0aGlzLml0ZW1JZF07XG4gICAgcmV0dXJuIGl0ZW1EZXRhaWxzO1xuICB9XG5cbiAgZ2V0SXRlbUltYWdlKGFsbEl0ZW1zKSB7XG4gICAgY29uc3QgaXRlbURldGFpbHMgPSB0aGlzLmdldEl0ZW1EZXRhaWxzKGFsbEl0ZW1zKTtcbiAgICBjb25zdCBpdGVtSW1hZ2VJZCA9IGl0ZW1EZXRhaWxzLmltYWdlLmZ1bGw7XG4gICAgY29uc3QgaW1hZ2VVcmwgPSBgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLzExLjIyLjEvaW1nL2l0ZW0vJHtpdGVtSW1hZ2VJZH1gO1xuICAgIHJldHVybiBpbWFnZVVybDtcbiAgfVxuXG4gIC8vIGdldHMgaW5mbyBvbiB0aGUgaXRlbXMgdXNlZCB0byBjcmVhdGUgdGhlIGluc3RhbmNlIGl0ZW1cbiAgZ2V0Q29tcG9uZW50SXRlbXMoYWxsSXRlbXMpIHtcbiAgICBjb25zdCBpdGVtRGV0YWlscyA9IHRoaXMuZ2V0SXRlbURldGFpbHMoYWxsSXRlbXMpO1xuICAgIGNvbnN0IGNvbXBvbmVudEl0ZW1JZHMgPSBpdGVtRGV0YWlscy5mcm9tO1xuICAgIGlmIChjb21wb25lbnRJdGVtSWRzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3QgY29tcG9uZW50SXRlbURldGFpbHMgPSBjb21wb25lbnRJdGVtSWRzLm1hcCgoaXRlbUlkKSA9PiAoe1xuICAgICAgbmFtZTogYWxsSXRlbXNbaXRlbUlkXS5uYW1lLFxuICAgICAgaW1hZ2VVcmw6IGBodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vMTEuMjIuMS9pbWcvaXRlbS8ke2l0ZW1JZH0ucG5nYCxcbiAgICAgIGNvc3Q6IGFsbEl0ZW1zW2l0ZW1JZF0uZ29sZC50b3RhbCxcbiAgICB9KSk7XG4gICAgcmV0dXJuIGNvbXBvbmVudEl0ZW1EZXRhaWxzO1xuICB9XG5cbiAgZ2V0SXRlbUluZm8oYWxsSXRlbXMpIHtcbiAgICBjb25zdCBpdGVtRGV0YWlscyA9IHRoaXMuZ2V0SXRlbURldGFpbHMoYWxsSXRlbXMpO1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gaXRlbURldGFpbHM7XG4gICAgY29uc3QgeyBkZXNjcmlwdGlvbiB9ID0gaXRlbURldGFpbHM7XG4gICAgY29uc3QgY29zdCA9IGl0ZW1EZXRhaWxzLmdvbGQudG90YWw7XG4gICAgY29uc3QgaW1hZ2VVcmwgPSB0aGlzLmdldEl0ZW1JbWFnZShhbGxJdGVtcyk7XG4gICAgY29uc3QgY29tcG9uZW50SXRlbXMgPSB0aGlzLmdldENvbXBvbmVudEl0ZW1zKGFsbEl0ZW1zKTtcbiAgICBjb25zdCB7IHRhZ3MgfSA9IGl0ZW1EZXRhaWxzO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGNvc3QsXG4gICAgICBpbWFnZVVybCxcbiAgICAgIGNvbXBvbmVudEl0ZW1zLFxuICAgICAgdGFncyxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW1JbmZvO1xuIiwiY29uc3QgRWxlbWVudENyZWF0aW9uID0gKCgpID0+IHtcbiAgY29uc3QgY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzID0gKHRhZywgY2xhc3NOYW1lLCBwYXJlbnRFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlQ2hpbGRFbGVtZW50V2l0aElkID0gKHRhZywgaWQsIHBhcmVudEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGVsZW1lbnQuaWQgPSBpZDtcbiAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzQW5kSWQgPSAodGFnLCBjbGFzc05hbWUsIGlkLCBwYXJlbnRFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICBlbGVtZW50LmlkID0gaWQ7XG4gICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzID0gKGNsYXNzTmFtZSwgcGFyZW50RWxlbWVudCwgc3JjLCBhbHQpID0+IHtcbiAgICBjb25zdCBpbWFnZUVsZW1lbnQgPSBjcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2ltZycsIGNsYXNzTmFtZSwgcGFyZW50RWxlbWVudCk7XG4gICAgaW1hZ2VFbGVtZW50LnNyYyA9IHNyYztcbiAgICBpbWFnZUVsZW1lbnQuYWx0ID0gYWx0O1xuXG4gICAgcmV0dXJuIGltYWdlRWxlbWVudDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcyxcbiAgICBjcmVhdGVDaGlsZEVsZW1lbnRXaXRoSWQsXG4gICAgY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzQW5kSWQsXG4gICAgY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBFbGVtZW50Q3JlYXRpb247XG4iLCJpbXBvcnQgeyByZW5kZXJIZWFkZXJEZXRhaWxzLCBpbWFnZXMgfSBmcm9tICcuL3JlbmRlckhlbHBlcnMnO1xuaW1wb3J0IEVsZW1lbnRDcmVhdGlvbiBmcm9tICcuLi9oZWxwZXJzL2VsZW1lbnRDcmVhdGlvbic7XG5cbmNvbnN0IGNoYW1waW9uRGV0YWlsc01vZGFsID0gYXN5bmMgKGNoYW1waW9uRGF0YSkgPT4ge1xuICByZW5kZXJIZWFkZXJEZXRhaWxzKGNoYW1waW9uRGF0YSwgJ21haW4nKTtcblxuICBjb25zdCBjaGFtcGlvblJvbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLXJvbGVzJyk7XG4gIGNvbnN0IHsgcm9sZXMgfSA9IGNoYW1waW9uRGF0YTtcbiAgcm9sZXMuZm9yRWFjaCgocm9sZSkgPT4ge1xuICAgIGNvbnN0IGNoYW1waW9uUm9sZSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdjaGFtcGlvbi1yb2xlJywgY2hhbXBpb25Sb2xlcyk7XG4gICAgY29uc3QgY2hhbXBpb25Sb2xlTmFtZSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnY2hhbXBpb24tcm9sZS1uYW1lJywgY2hhbXBpb25Sb2xlKTtcbiAgICBjaGFtcGlvblJvbGVOYW1lLnRleHRDb250ZW50ID0gcm9sZTtcbiAgICBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MoJ2NoYW1waW9uLXJvbGUtaW1hZ2UnLCBjaGFtcGlvblJvbGUsIGAke2ltYWdlc1tgJHtyb2xlfS5wbmdgXX1gLCByb2xlKTtcbiAgfSk7XG4gIC8qIFRoZSB0eXBlIG9mIHJlc291cmNlIHRoYXQgYSBjaGFtcGlvbiB1c2VzIGUuZy4gbWFuYSwgZW5lcmd5IGV0YyAqL1xuICBjb25zdCBjaGFtcGlvblJlc291cmNlID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2NoYW1waW9uLXJlc291cmNlJywgY2hhbXBpb25Sb2xlcyk7XG4gIGNvbnN0IHsgcmVzb3VyY2UgfSA9IGNoYW1waW9uRGF0YTtcbiAgY29uc3QgY2hhbXBpb25SZXNvdXJjZU5hbWUgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2NoYW1waW9uLXJlc291cmNlLW5hbWUnLCBjaGFtcGlvblJlc291cmNlKTtcbiAgY2hhbXBpb25SZXNvdXJjZU5hbWUudGV4dENvbnRlbnQgPSByZXNvdXJjZTtcbiAgRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzKCdjaGFtcGlvbi1yZXNvdXJjZS1pbWFnZScsIGNoYW1waW9uUmVzb3VyY2UsIGAke2ltYWdlc1tgJHtyZXNvdXJjZX0ucG5nYF19YCwgcmVzb3VyY2UpO1xuXG4gIC8qIENyZWF0ZXMgdGhlIG1haW4gY29udGVudCBvZiB0aGUgbWFpbiBtb2RhbCAqL1xuICBjb25zdCBsb3JlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvcmUtY29udGFpbmVyJyk7XG4gIGNvbnN0IGNoYW1waW9uTG9yZSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnY2hhbXBpb24tbG9yZScsIGxvcmVDb250YWluZXIpO1xuICBjaGFtcGlvbkxvcmUuaW5uZXJIVE1MID0gY2hhbXBpb25EYXRhLmxvcmU7XG5cbiAgY29uc3QgYWJpbGl0aWVzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFiaWxpdGllcy1jb250YWluZXInKTtcbiAgY29uc3QgYWJpbGl0eURldGFpbHMgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnYWJpbGl0eS1kZXRhaWxzJywgYWJpbGl0aWVzQ29udGFpbmVyKTtcbiAgY29uc3QgYWJpbGl0eUltZ3MgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnYWJpbGl0eS1pbWdzJywgYWJpbGl0eURldGFpbHMpO1xuICBjb25zdCBwYXNzaXZlSW1nID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzKFxuICAgICdzcGVsbC1pbWcgY2xpY2tlZCcsIGFiaWxpdHlJbWdzLCBjaGFtcGlvbkRhdGEucGFzc2l2ZS5wYXNzaXZlSW1nVXJsLCBjaGFtcGlvbkRhdGEucGFzc2l2ZS5wYXNzaXZlTmFtZSxcbiAgKTtcbiAgcGFzc2l2ZUltZy5pZCA9ICdwYXNzaXZlLWltZyc7XG5cbiAgY29uc3QgaW1nTGFiZWwgPSBbJ1EnLCAnVycsICdFJywgJ1InXTtcbiAgbGV0IGluZGV4ID0gMDtcblxuICBjaGFtcGlvbkRhdGEuc3BlbGxzLmZvckVhY2goKHNwZWxsKSA9PiB7XG4gICAgY29uc3Qgc3BlbGxJbWcgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAnc3BlbGwtaW1nJywgYWJpbGl0eUltZ3MsIHNwZWxsLmltZ1VybCwgc3BlbGwubmFtZSxcbiAgICApO1xuICAgIC8vIEdyYWJzIGxldHRlciBRLCBXLCBFIG9yIFIgd2hpY2ggdW5pcXVlbHkgaWRlbnRpZmllcyBhIGNoYW1waW9ucyBhYmlsaXRpZXNcbiAgICBzcGVsbEltZy5pZCA9IGAke2ltZ0xhYmVsW2luZGV4XX0taW1nYDtcbiAgICBpbmRleCArPSAxO1xuICB9KTtcblxuICAvKiBsb29wcyB0aHJvdWdoIGNoYW1waW9uJ3MgcGFzc2l2ZSBhbmQgNCBhYmlsaXRpZXMgKi9cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpICs9IDEpIHtcbiAgICBjb25zdCBhYmlsaXR5SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGFiaWxpdHlOYW1lID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdhYmlsaXR5LW5hbWUnLCBhYmlsaXR5SW5mbyk7XG4gICAgY29uc3QgYWJpbGl0eURlc2NyaXB0aW9uID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdhYmlsaXR5LWRlc2NyaXB0aW9uJywgYWJpbGl0eUluZm8pO1xuICAgIGNvbnN0IGFiaWxpdHlMYWJlbCA9IFsnUGFzc2l2ZScsICdRJywgJ1cnLCAnRScsICdSJ107XG5cbiAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgYWJpbGl0eUluZm8uY2xhc3NOYW1lID0gJ2FiaWxpdHktaW5mbyBhY3RpdmUnO1xuICAgICAgYWJpbGl0eUluZm8uaWQgPSAncGFzc2l2ZS1hYmlsaXR5JztcbiAgICAgIGFiaWxpdHlOYW1lLnRleHRDb250ZW50ID0gYCR7Y2hhbXBpb25EYXRhLnBhc3NpdmUucGFzc2l2ZU5hbWV9ICgke2FiaWxpdHlMYWJlbFtpXX0pYDtcbiAgICAgIGFiaWxpdHlEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBjaGFtcGlvbkRhdGEucGFzc2l2ZS5wYXNzaXZlRGVzY3JpcHRpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvb2xkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgY29vbGRvd24uY2xhc3NOYW1lID0gJ2FiaWxpdHktY29vbGRvd24nO1xuICAgICAgY29vbGRvd24udGV4dENvbnRlbnQgPSBgQ29vbGRvd246ICR7Y2hhbXBpb25EYXRhLnNwZWxsc1tpIC0gMV0uY29vbGRvd259IHNlY29uZHNgO1xuICAgICAgYWJpbGl0eUluZm8uYXBwZW5kQ2hpbGQoY29vbGRvd24pO1xuXG4gICAgICBhYmlsaXR5SW5mby5jbGFzc05hbWUgPSAnYWJpbGl0eS1pbmZvJztcbiAgICAgIGFiaWxpdHlJbmZvLmlkID0gYCR7YWJpbGl0eUxhYmVsW2ldfS1hYmlsaXR5YDtcbiAgICAgIGFiaWxpdHlOYW1lLnRleHRDb250ZW50ID0gYCR7Y2hhbXBpb25EYXRhLnNwZWxsc1tpIC0gMV0ubmFtZX0gKCR7YWJpbGl0eUxhYmVsW2ldfSlgO1xuICAgICAgYWJpbGl0eURlc2NyaXB0aW9uLmlubmVySFRNTCA9IGNoYW1waW9uRGF0YS5zcGVsbHNbaSAtIDFdLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGFiaWxpdHlEZXRhaWxzLmFwcGVuZENoaWxkKGFiaWxpdHlJbmZvKTtcbiAgfVxuXG4gIGNvbnN0IGNoYW1waW9uVGlwc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tdGlwcy1zZWN0aW9uJyk7XG4gIGNvbnN0IGNoYW1waW9uVGlwcyA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdjaGFtcGlvbi10aXBzJywgY2hhbXBpb25UaXBzU2VjdGlvbik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAyICYmIGkgPCBjaGFtcGlvbkRhdGEudGlwcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGNoYW1waW9uVGlwID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdjaGFtcGlvbi10aXAnLCBjaGFtcGlvblRpcHMpO1xuICAgIGNoYW1waW9uVGlwLnRleHRDb250ZW50ID0gYCR7Y2hhbXBpb25EYXRhLnRpcHNbaV19YDtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2hhbXBpb25EZXRhaWxzTW9kYWw7XG4iLCJpbXBvcnQgRWxlbWVudENyZWF0aW9uIGZyb20gJy4uL2hlbHBlcnMvZWxlbWVudENyZWF0aW9uJztcblxuY29uc3QgY2hhbXBpb25Ta2luc01vZGFsID0gYXN5bmMgKGNoYW1waW9uRGV0YWlscykgPT4ge1xuICBjb25zdCB7IHNraW5zIH0gPSBjaGFtcGlvbkRldGFpbHM7XG4gIGNvbnN0IHNraW5zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NraW5zLWNvbnRhaW5lcicpO1xuICBjb25zdCBza2luTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5za2luLW5hbWUnKTtcbiAgY29uc3Qgc2tpbkltYWdlc0NvbnRhaW5lciA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdza2luLWltYWdlcy1jb250YWluZXInLCBza2luc0NvbnRhaW5lcik7XG5cbiAgc2tpbnMuZm9yRWFjaCgoc2tpbikgPT4ge1xuICAgIGlmIChza2luLm51bSA9PT0gMCkge1xuICAgICAgY29uc3Qgc2hvd25JbWFnZUNvbnRhaW5lciA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3NBbmRJZChcbiAgICAgICAgJ2RpdicsICdza2luLWltYWdlLWNvbnRhaW5lciBzaG93bicsIGBEZWZhdWx0ICR7Y2hhbXBpb25EZXRhaWxzLm5hbWV9YCwgc2tpbkltYWdlc0NvbnRhaW5lcixcbiAgICAgICk7XG4gICAgICBza2luTmFtZS50ZXh0Q29udGVudCA9IGBEZWZhdWx0ICR7Y2hhbXBpb25EZXRhaWxzLm5hbWV9YDtcbiAgICAgIGNvbnN0IHNob3duSW1hZ2VVcmwgPSBgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuL2ltZy9jaGFtcGlvbi9zcGxhc2gvJHtjaGFtcGlvbkRldGFpbHMuaWR9XyR7c2tpbi5udW19LmpwZ2A7XG4gICAgICBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MoJ3NraW4taW1hZ2UnLCBzaG93bkltYWdlQ29udGFpbmVyLCBzaG93bkltYWdlVXJsLCAnZGVmYXVsdCBza2luJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGltYWdlQ29udGFpbmVyID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCAnc2tpbi1pbWFnZS1jb250YWluZXInLCBza2luLm5hbWUsIHNraW5JbWFnZXNDb250YWluZXIpO1xuICAgICAgY29uc3QgaW1hZ2VVcmwgPSBgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuL2ltZy9jaGFtcGlvbi9zcGxhc2gvJHtjaGFtcGlvbkRldGFpbHMuaWR9XyR7c2tpbi5udW19LmpwZ2A7XG4gICAgICBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MoJ3NraW4taW1hZ2UnLCBpbWFnZUNvbnRhaW5lciwgaW1hZ2VVcmwsIHNraW4ubmFtZSk7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNoYW1waW9uU2tpbnNNb2RhbDtcbiIsImltcG9ydCBJdGVtSW5mbyBmcm9tICcuLi9jaGFtcGlvbkRhdGEvaXRlbUluZm8nO1xuaW1wb3J0IHtcbiAgcmVuZGVySGVhZGVyRGV0YWlscyxcbiAgcmVuZGVyU3RhdE92ZXJ2aWV3LFxuICByZW5kZXJEYW1hZ2VTdGF0cyxcbiAgcmVuZGVyQ2hhbXBpb25MYW5lLFxuICByZW5kZXJNYXRjaHVwc0luZm8sXG59IGZyb20gJy4vcmVuZGVySGVscGVycyc7XG5pbXBvcnQgRWxlbWVudENyZWF0aW9uIGZyb20gJy4uL2hlbHBlcnMvZWxlbWVudENyZWF0aW9uJztcblxuY29uc3QgY2hhbXBpb25TdGF0c01vZGFsID0gYXN5bmMgKGNoYW1waW9uRGF0YSwgY2hhbXBpb25TdGF0cykgPT4ge1xuICByZW5kZXJIZWFkZXJEZXRhaWxzKGNoYW1waW9uRGF0YSwgJ3N0YXRzJyk7XG5cbiAgY29uc3Qgc3RhdHNPdmVydmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbi1zdGF0cy1vdmVydmlldycpO1xuXG4gIHJlbmRlclN0YXRPdmVydmlldyhzdGF0c092ZXJ2aWV3LCAnV2luIFJhdGUnLCBjaGFtcGlvblN0YXRzLndpblJhdGUpO1xuICByZW5kZXJTdGF0T3ZlcnZpZXcoc3RhdHNPdmVydmlldywgJ1BpY2sgUmF0ZScsIGNoYW1waW9uU3RhdHMucGlja1JhdGUpO1xuICAvKiBNYWtlIGV2ZXJ5IGxldHRlciBleGNlcHQgdGhlIGZpcnN0IGxvd2VyIGNhc2UgKi9cbiAgY29uc3QgbGFuZSA9IGAke2NoYW1waW9uU3RhdHMubGFuZVswXSArIGNoYW1waW9uU3RhdHMubGFuZS5zdWJzdHJpbmcoMSkudG9Mb3dlckNhc2UoKX1gO1xuICByZW5kZXJDaGFtcGlvbkxhbmUoc3RhdHNPdmVydmlldywgbGFuZSk7XG5cbiAgLyogU2V0cyB0aGUgdmFsdWVzIGFuZCBwZXJjZW50YWdlcyBmb3IgdGhlIGF2ZXJhZ2UgZGFtYWdlIHNlY3Rpb24gb2YgdGhlIHN0YXRzIG1vZGFsICovXG5cbiAgY29uc3QgdHJ1ZURhbWFnZUNpcmNsZVN0cm9rZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cnVlLWRhbWFnZS1zdHJva2UnKTtcbiAgY29uc3QgcGh5c2ljYWxEYW1hZ2VDaXJjbGVTdHJva2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGh5c2ljYWwtZGFtYWdlLXN0cm9rZScpO1xuICBjb25zdCBtYWdpY0RhbWFnZUNpcmNsZVN0cm9rZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWdpYy1kYW1hZ2Utc3Ryb2tlJyk7XG5cbiAgY29uc3QgdHJ1ZURhbWFnZVBlcmNlbnQgPSBNYXRoLnJvdW5kKGNoYW1waW9uU3RhdHMuZGFtYWdlUGVyTWF0Y2gudHJ1ZURhbWFnZS5wZXJjZW50YWdlKTtcbiAgY29uc3QgcGh5c2ljYWxEYW1hZ2VQZXJjZW50ID0gTWF0aC5yb3VuZChjaGFtcGlvblN0YXRzLmRhbWFnZVBlck1hdGNoLnBoeXNpY2FsRGFtYWdlLnBlcmNlbnRhZ2UpO1xuICBjb25zdCBtYWdpY0RhbWFnZVBlcmNlbnQgPSBNYXRoLnJvdW5kKGNoYW1waW9uU3RhdHMuZGFtYWdlUGVyTWF0Y2gubWFnaWNEYW1hZ2UucGVyY2VudGFnZSk7XG5cbiAgdHJ1ZURhbWFnZUNpcmNsZVN0cm9rZS5zdHlsZS5zdHJva2VEYXNoYXJyYXkgPSBgJHt0cnVlRGFtYWdlUGVyY2VudH0gMTAwYDtcbiAgcGh5c2ljYWxEYW1hZ2VDaXJjbGVTdHJva2Uuc3R5bGUuc3Ryb2tlRGFzaGFycmF5ID0gYCR7cGh5c2ljYWxEYW1hZ2VQZXJjZW50ICsgdHJ1ZURhbWFnZVBlcmNlbnR9IDEwMGA7XG4gIG1hZ2ljRGFtYWdlQ2lyY2xlU3Ryb2tlLnN0eWxlLnN0cm9rZURhc2hhcnJheSA9ICcxMDAsIDEwMCc7XG4gIGNvbnN0IHRvdGFsRGFtYWdlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3RhbC1kYW1hZ2UtdGV4dCcpO1xuICB0b3RhbERhbWFnZVRleHQudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKGNoYW1waW9uU3RhdHMuZGFtYWdlUGVyTWF0Y2gudG90YWxEYW1hZ2UudmFsdWUpO1xuXG4gIGNvbnN0IHRydWVEYW1hZ2VWYWx1ZSA9IE1hdGgucm91bmQoY2hhbXBpb25TdGF0cy5kYW1hZ2VQZXJNYXRjaC50cnVlRGFtYWdlLnZhbHVlKTtcbiAgY29uc3QgcGh5c2ljYWxEYW1hZ2VWYWx1ZSA9IE1hdGgucm91bmQoY2hhbXBpb25TdGF0cy5kYW1hZ2VQZXJNYXRjaC5waHlzaWNhbERhbWFnZS52YWx1ZSk7XG4gIGNvbnN0IG1hZ2ljRGFtYWdlVmFsdWUgPSBNYXRoLnJvdW5kKGNoYW1waW9uU3RhdHMuZGFtYWdlUGVyTWF0Y2gubWFnaWNEYW1hZ2UudmFsdWUpO1xuXG4gIHJlbmRlckRhbWFnZVN0YXRzKCdwaHlzaWNhbCcsIHBoeXNpY2FsRGFtYWdlVmFsdWUsIHBoeXNpY2FsRGFtYWdlUGVyY2VudCk7XG4gIHJlbmRlckRhbWFnZVN0YXRzKCdtYWdpYycsIG1hZ2ljRGFtYWdlVmFsdWUsIG1hZ2ljRGFtYWdlUGVyY2VudCk7XG4gIHJlbmRlckRhbWFnZVN0YXRzKCd0cnVlJywgdHJ1ZURhbWFnZVZhbHVlLCB0cnVlRGFtYWdlUGVyY2VudCk7XG5cbiAgLyogUmVuZGVycyB0aGUgaXRlbSBidWlsZHMgc2VjdGlvbiBvZiB0aGUgc3RhdHMgbW9kYWwgKi9cbiAgY29uc3QgeyBpdGVtU2V0cyB9ID0gY2hhbXBpb25TdGF0cztcbiAgY29uc3QgYWxsSXRlbXMgPSBhd2FpdCBJdGVtSW5mby5nZXRBbGxJdGVtcygpO1xuICBjb25zdCBjaGFtcGlvbkl0ZW1CdWlsZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24taXRlbS1idWlsZHMnKTtcbiAgY29uc3QgaXRlbVNldHNDb250YWluZXIgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnaXRlbS1zZXRzLWNvbnRhaW5lcicsIGNoYW1waW9uSXRlbUJ1aWxkcyk7XG5cbiAgaXRlbVNldHMuZm9yRWFjaCgoaXRlbVNldCkgPT4ge1xuICAgIGNvbnN0IGl0ZW1TZXRDb250YWluZXIgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnaXRlbS1zZXQtY29udGFpbmVyJywgaXRlbVNldHNDb250YWluZXIpO1xuXG4gICAgaXRlbVNldC5mb3JFYWNoKChpdGVtSWQpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBuZXcgSXRlbUluZm8oaXRlbUlkKTtcbiAgICAgIGNvbnN0IGl0ZW1JbmZvID0gaXRlbS5nZXRJdGVtSW5mbyhhbGxJdGVtcyk7XG4gICAgICBpZiAoIWl0ZW1JbmZvLnRhZ3MuaW5jbHVkZXMoJ1RyaW5rZXQnKSAmJiAhaXRlbUluZm8udGFncy5pbmNsdWRlcygnQ29uc3VtYWJsZScpKSB7XG4gICAgICAgIGNvbnN0IG1haW5Db21wb25lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWFpbkNvbXBvbmVudENvbnRhaW5lci5jbGFzc05hbWUgPSAnbWFpbi1jb21wb25lbnQtY29udGFpbmVyJztcbiAgICAgICAgaXRlbVNldENvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluQ29tcG9uZW50Q29udGFpbmVyKTtcblxuICAgICAgICBjb25zdCBtYWluSXRlbSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdtYWluLWl0ZW0nLCBtYWluQ29tcG9uZW50Q29udGFpbmVyKTtcblxuICAgICAgICBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MoJ2l0ZW0taW1nJywgbWFpbkl0ZW0sIGl0ZW1JbmZvLmltYWdlVXJsLCBgJHtpdGVtSWR9LnBuZ2ApO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1EZXRhaWxzQ29udGFpbmVyID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2l0ZW0tZGV0YWlscy1jb250YWluZXInLCBtYWluSXRlbSk7XG5cbiAgICAgICAgY29uc3QgbmFtZUVsZW1lbnQgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2l0ZW0tbmFtZScsIGl0ZW1EZXRhaWxzQ29udGFpbmVyKTtcbiAgICAgICAgbmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSBpdGVtSW5mby5uYW1lO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkVsZW1lbnQgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2l0ZW0tZGVzY3JpcHRpb24nLCBpdGVtRGV0YWlsc0NvbnRhaW5lcik7XG4gICAgICAgIGRlc2NyaXB0aW9uRWxlbWVudC5pbm5lckhUTUwgPSBpdGVtSW5mby5kZXNjcmlwdGlvbjtcbiAgICAgICAgY29uc3QgaXRlbUNvc3QgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnaXRlbS1jb3N0JywgaXRlbURldGFpbHNDb250YWluZXIpO1xuICAgICAgICBjb25zdCBjb3N0TGFiZWwgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2Nvc3QtbGFiZWwnLCBpdGVtQ29zdCk7XG4gICAgICAgIGNvc3RMYWJlbC50ZXh0Q29udGVudCA9ICdHb2xkOiAnO1xuICAgICAgICBjb25zdCBjb3N0QW1vdW50ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdjb3N0LWFtb3VudCcsIGl0ZW1Db3N0KTtcbiAgICAgICAgY29zdEFtb3VudC50ZXh0Q29udGVudCA9IGl0ZW1JbmZvLmNvc3Q7XG5cbiAgICAgICAgLyogVGhlIGNvbXBvbmVudCBpdGVtcyBhcmUgdGhlIHNtYWxsZXIgaXRlbXMgdGhhdCBhcHBlYXIgYmVsb3cgdGhlIG1haW4gaXRlbSAqL1xuICAgICAgICBjb25zdCB7IGNvbXBvbmVudEl0ZW1zIH0gPSBpdGVtSW5mbztcbiAgICAgICAgY29uc3QgY29tcG9uZW50SXRlbXNDb250YWluZXIgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnY29tcG9uZW50LWl0ZW1zLWNvbnRhaW5lcicsIG1haW5Db21wb25lbnRDb250YWluZXIpO1xuXG4gICAgICAgIGNvbXBvbmVudEl0ZW1zLmZvckVhY2goKGNvbXBvbmVudEl0ZW0pID0+IHtcbiAgICAgICAgICBjb25zdCBjb21wb25lbnRJdGVtRWxlbWVudCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdjb21wb25lbnQtaXRlbScsIGNvbXBvbmVudEl0ZW1zQ29udGFpbmVyKTtcbiAgICAgICAgICBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAgICAgICAnY29tcG9uZW50LWl0ZW0taW1nJywgY29tcG9uZW50SXRlbUVsZW1lbnQsIGNvbXBvbmVudEl0ZW0uaW1hZ2VVcmwsIGAke2NvbXBvbmVudEl0ZW0ubmFtZX1gLFxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBjb25zdCBjb21wb25lbnRJdGVtRGV0YWlsc0NvbnRhaW5lciA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdjb21wb25lbnQtaXRlbS1kZXRhaWxzLWNvbnRhaW5lcicsIGNvbXBvbmVudEl0ZW1FbGVtZW50KTtcblxuICAgICAgICAgIGNvbnN0IGNvbXBvbmVudEl0ZW1OYW1lID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdjb21wb25lbnQtaXRlbS1uYW1lJywgY29tcG9uZW50SXRlbURldGFpbHNDb250YWluZXIpO1xuICAgICAgICAgIGNvbXBvbmVudEl0ZW1OYW1lLnRleHRDb250ZW50ID0gY29tcG9uZW50SXRlbS5uYW1lO1xuICAgICAgICAgIGNvbnN0IGNvbXBvbmVudEl0ZW1Db3N0ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2NvbXBvbmVudC1pdGVtLWNvc3QnLCBjb21wb25lbnRJdGVtRGV0YWlsc0NvbnRhaW5lcik7XG4gICAgICAgICAgY29uc3QgY29tcG9uZW50SXRlbUNvc3RMYWJlbCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnY29tcG9uZW50LWl0ZW0tY29zdC1sYWJlbCcsIGNvbXBvbmVudEl0ZW1Db3N0KTtcbiAgICAgICAgICBjb21wb25lbnRJdGVtQ29zdExhYmVsLnRleHRDb250ZW50ID0gJ0dvbGQ6ICc7XG4gICAgICAgICAgY29uc3QgY29tcG9uZW50SXRlbUFtb3VudCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnY29tcG9uZW50LWl0ZW0tYW1vdW50JywgY29tcG9uZW50SXRlbUNvc3QpO1xuICAgICAgICAgIGNvbXBvbmVudEl0ZW1BbW91bnQudGV4dENvbnRlbnQgPSBjb21wb25lbnRJdGVtLmNvc3Q7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgLyogUmVuZGVycyB0aGUgbWF0Y2h1cHMgc2VjdGlvbiBvZiB0aGUgY2hhbXBpb24gbW9kYWwgc3RhdHMgcGFnZSAqL1xuICBjb25zdCBiZXN0TWF0Y2h1cHNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJlc3QtbWF0Y2h1cHMtc2VjdGlvbicpO1xuICBjb25zdCBiZXN0TWF0Y2h1cHNFbGVtZW50ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2Jlc3QtbWF0Y2h1cHMgbWF0Y2h1cHMnLCBiZXN0TWF0Y2h1cHNTZWN0aW9uKTtcbiAgY29uc3QgYmVzdE1hdGNodXBzRGF0YSA9IGNoYW1waW9uU3RhdHMuYmVzdE1hdGNoVXBzO1xuICByZW5kZXJNYXRjaHVwc0luZm8oYmVzdE1hdGNodXBzRWxlbWVudCwgYmVzdE1hdGNodXBzRGF0YSk7XG5cbiAgY29uc3Qgd29yc3RNYXRjaHVwc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29yc3QtbWF0Y2h1cHMtc2VjdGlvbicpO1xuICBjb25zdCB3b3JzdE1hdGNodXBzRWxlbWVudCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICd3b3JzdC1tYXRjaHVwcyBtYXRjaHVwcycsIHdvcnN0TWF0Y2h1cHNTZWN0aW9uKTtcbiAgY29uc3Qgd29yc3RNYXRjaHVwc0RhdGEgPSBjaGFtcGlvblN0YXRzLndvcnN0TWF0Y2hVcHM7XG4gIHJlbmRlck1hdGNodXBzSW5mbyh3b3JzdE1hdGNodXBzRWxlbWVudCwgd29yc3RNYXRjaHVwc0RhdGEpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2hhbXBpb25TdGF0c01vZGFsO1xuIiwiaW1wb3J0IEVsZW1lbnRDcmVhdGlvbiBmcm9tICcuLi9oZWxwZXJzL2VsZW1lbnRDcmVhdGlvbic7XG5cbmNvbnN0IGltcG9ydEFsbCA9IChyKSA9PiB7XG4gIGNvbnN0IGltYWdlcyA9IHt9O1xuICByLmtleXMoKS5mb3JFYWNoKChpdGVtKSA9PiB7IGltYWdlc1tpdGVtLnJlcGxhY2UoJy4vJywgJycpXSA9IHIoaXRlbSk7IH0pO1xuICByZXR1cm4gaW1hZ2VzO1xufTtcblxuY29uc3QgaW1hZ2VzID0gaW1wb3J0QWxsKHJlcXVpcmUuY29udGV4dCgnLi4vaW1hZ2VzJywgZmFsc2UsIC9cXC4ocG5nfGpwZT9nfHN2ZykkLykpO1xuXG5jb25zdCByZW5kZXJIZWFkZXJEZXRhaWxzID0gKGNoYW1waW9uRGF0YSwgbW9kYWxDb250YWluZXIpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7bW9kYWxDb250YWluZXJ9LWNvbnRhaW5lcmApO1xuICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZCA9IGBuby1yZXBlYXQgdXJsKGh0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi9pbWcvY2hhbXBpb24vc3BsYXNoLyR7Y2hhbXBpb25EYXRhLmlkfV8wLmpwZykgNzAlIDgwJWA7XG4gIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb3Zlcic7XG5cbiAgY29uc3QgY2hhbXBpb25UaXRsZSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tdGl0bGUnKTtcbiAgY2hhbXBpb25UaXRsZS50ZXh0Q29udGVudCA9IGNoYW1waW9uRGF0YS50aXRsZTtcblxuICBjb25zdCBjaGFtcGlvbk5hbWUgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLW5hbWUnKTtcbiAgY2hhbXBpb25OYW1lLnRleHRDb250ZW50ID0gY2hhbXBpb25EYXRhLm5hbWU7XG59O1xuXG4vKiBSZW5kZXJzIHdpbiBvciBwaWNrIHJhdGUgdG8gdGhlIERPTSAqL1xuY29uc3QgcmVuZGVyU3RhdE92ZXJ2aWV3ID0gKHN0YXRzT3ZlcnZpZXcsIHJhdGVUZXh0LCByYXRlVHlwZSkgPT4ge1xuICBjb25zdCBjaGFtcGlvblJhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNvbnN0IHJhdGVWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAvKiBUdXJucyAnV2luIFJhdGUnIGludG8gJ3dpbi1yYXRlJyAqL1xuICBjb25zdCBsb3dlckNhc2VUZXh0ID0gcmF0ZVRleHQucmVwbGFjZSgnICcsICctJykudG9Mb3dlckNhc2UoKTtcblxuICBjaGFtcGlvblJhdGUuY2xhc3NOYW1lID0gbG93ZXJDYXNlVGV4dDtcbiAgbGFiZWwuaWQgPSBgJHtsb3dlckNhc2VUZXh0fS1sYWJlbGA7XG4gIGxhYmVsLmNsYXNzTmFtZSA9ICdsYWJlbCc7XG4gIHJhdGVWYWx1ZS5jbGFzc05hbWUgPSBgJHtsb3dlckNhc2VUZXh0fS12YWx1ZWA7XG4gIGxhYmVsLnRleHRDb250ZW50ID0gcmF0ZVRleHQ7XG4gIHJhdGVWYWx1ZS50ZXh0Q29udGVudCA9IGAke3JhdGVUeXBlfSVgO1xuXG4gIGNoYW1waW9uUmF0ZS5hcHBlbmRDaGlsZChsYWJlbCk7IGNoYW1waW9uUmF0ZS5hcHBlbmRDaGlsZChyYXRlVmFsdWUpO1xuICBzdGF0c092ZXJ2aWV3LmFwcGVuZENoaWxkKGNoYW1waW9uUmF0ZSk7XG59O1xuXG5jb25zdCByZW5kZXJDaGFtcGlvbkxhbmUgPSAoc3RhdHNPdmVydmlldywgbGFuZSkgPT4ge1xuICBjb25zdCBjaGFtcGlvbkxhbmVJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNoYW1waW9uTGFuZUluZm8uY2xhc3NOYW1lID0gJ2xhbmUtaW5mbyc7XG4gIGNvbnN0IGxhbmVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBsYW5lVGV4dC5jbGFzc05hbWUgPSAnbGFuZS10ZXh0IGxhYmVsJztcbiAgbGFuZVRleHQudGV4dENvbnRlbnQgPSBsYW5lO1xuICBjb25zdCBsYW5lSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBsYW5lSWNvbi5jbGFzc05hbWUgPSAnbGFuZS1pY29uIGNoYW1waW9uLXJvbGUtaW1hZ2UnO1xuICBsYW5lSWNvbi5zcmMgPSBgJHtpbWFnZXNbYCR7bGFuZX0ucG5nYF19YDtcbiAgbGFuZUljb24uYWx0ID0gYCR7bGFuZX0ucG5nYDtcbiAgY2hhbXBpb25MYW5lSW5mby5hcHBlbmRDaGlsZChsYW5lVGV4dCk7XG4gIGNoYW1waW9uTGFuZUluZm8uYXBwZW5kQ2hpbGQobGFuZUljb24pO1xuICBzdGF0c092ZXJ2aWV3LmFwcGVuZENoaWxkKGNoYW1waW9uTGFuZUluZm8pO1xufTtcblxuY29uc3QgcmVuZGVyRGFtYWdlU3RhdHMgPSAoZGFtYWdlVHlwZSwgZGFtYWdlVmFsdWUsIGRhbWFnZVBlcmNlbnRhZ2UpID0+IHtcbiAgY29uc3QgZGFtYWdlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZGFtYWdlVHlwZX0tZGFtYWdlLWNvbnRhaW5lcmApO1xuXG4gIGNvbnN0IGRhbWFnZVN0YXRzID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2RhbWFnZS1zdGF0cycsIGRhbWFnZUNvbnRhaW5lcik7XG5cbiAgY29uc3QgZGFtYWdlVmFsdWVFbGVtZW50ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhJZCgnc3BhbicsIGAke2RhbWFnZVR5cGV9LXZhbHVlYCwgZGFtYWdlU3RhdHMpO1xuICBjb25zdCBkYW1hZ2VQZXJjZW50YWdlRWxlbWVudCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoSWQoJ3NwYW4nLCBgJHtkYW1hZ2VUeXBlfS1wZXJjZW50YWdlYCwgZGFtYWdlU3RhdHMpO1xuICBkYW1hZ2VWYWx1ZUVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtkYW1hZ2VWYWx1ZX1gO1xuICBkYW1hZ2VQZXJjZW50YWdlRWxlbWVudC50ZXh0Q29udGVudCA9IGAke2RhbWFnZVBlcmNlbnRhZ2V9JWA7XG59O1xuXG5jb25zdCByZW5kZXJNYXRjaHVwc0luZm8gPSAobWF0Y2h1cHNFbGVtZW50LCBtYXRjaHVwc0RhdGEpID0+IHtcbiAgbWF0Y2h1cHNEYXRhLmZvckVhY2goKG1hdGNodXApID0+IHtcbiAgICBjb25zdCBtYXRjaHVwSW5mbyA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdtYXRjaHVwLWluZm8nLCBtYXRjaHVwc0VsZW1lbnQpO1xuICAgIGNvbnN0IGVuZW15Q2hhbXBpb25OYW1lID0gbWF0Y2h1cFsxXS5uYW1lO1xuICAgIGNvbnN0IGVuZW15Q2hhbXBpb25JZCA9IG1hdGNodXBbMF07XG4gICAgY29uc3QgZW5lbXlDaGFtcGlvbkltZ1VybCA9IGBodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vMTEuMjIuMS9pbWcvY2hhbXBpb24vJHtlbmVteUNoYW1waW9uSWR9LnBuZ2A7XG4gICAgRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzKFxuICAgICAgJ2VuZW15LWNoYW1waW9uLWltZycsIG1hdGNodXBJbmZvLCBlbmVteUNoYW1waW9uSW1nVXJsLCBgc21hbGwtJHtlbmVteUNoYW1waW9uSWR9YCxcbiAgICApO1xuXG4gICAgY29uc3QgbWF0Y2h1cFN0YXRzID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ21hdGNodXAtc3RhdHMnLCBtYXRjaHVwSW5mbyk7XG4gICAgY29uc3QgZW5lbXlDaGFtcGlvbk5hbWVFbGVtZW50ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdlbmVteS1jaGFtcGlvbi1uYW1lJywgbWF0Y2h1cFN0YXRzKTtcbiAgICBlbmVteUNoYW1waW9uTmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSBlbmVteUNoYW1waW9uTmFtZTtcbiAgICBjb25zdCB3aW5yYXRlQWdhaW5zdCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICd3aW5yYXRlLWFnYWluc3QnLCBtYXRjaHVwU3RhdHMpO1xuICAgIGNvbnN0IHdpbnJhdGVBZ2FpbnN0TGFiZWwgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ3dpbnJhdGUtYWdhaW5zdC1sYWJlbCcsIHdpbnJhdGVBZ2FpbnN0KTtcbiAgICB3aW5yYXRlQWdhaW5zdExhYmVsLnRleHRDb250ZW50ID0gJ1dpbnJhdGU6ICc7XG4gICAgY29uc3QgY29sb3IgPSBtYXRjaHVwc0VsZW1lbnQuY2xhc3NOYW1lID09PSAnYmVzdC1tYXRjaHVwcyBtYXRjaHVwcycgPyAnYmx1ZScgOiAncmVkJztcbiAgICBjb25zdCB3aW5yYXRlQWdhaW5zdFBlcmNlbnRhZ2UgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgYHdpbnJhdGUtYWdhaW5zdC1wZXJjZW50YWdlICR7Y29sb3J9YCwgd2lucmF0ZUFnYWluc3QpO1xuICAgIHdpbnJhdGVBZ2FpbnN0UGVyY2VudGFnZS50ZXh0Q29udGVudCA9IGAke21hdGNodXBbMV0ud2luUmF0ZUFnYWluc3QudG9GaXhlZCgwKX0lYDtcbiAgICBjb25zdCBnYW1lc1BsYXllZEFnYWluc3QgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2dhbWVzLXBsYXllZC1hZ2FpbnN0JywgbWF0Y2h1cFN0YXRzKTtcbiAgICBnYW1lc1BsYXllZEFnYWluc3QudGV4dENvbnRlbnQgPSBgR2FtZXM6ICR7bWF0Y2h1cFsxXS5tYXRjaGVzfWA7XG4gIH0pO1xufTtcblxuY29uc3QgY3JlYXRlQ2hhbXBpb25Db250YWluZXIgPSAoY2hhbXBpb24sIGNoYW1waW9uc1NlY3Rpb24pID0+IHtcbiAgY29uc3QgY2hhbXBpb25Db250YWluZXIgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnY2hhbXBpb24tY29udGFpbmVyIHNob3duJywgY2hhbXBpb25zU2VjdGlvbik7XG4gIGNvbnN0IGNoYW1waW9uSWQgPSBjaGFtcGlvbi5pZCA/IGNoYW1waW9uLmlkIDogY2hhbXBpb24uY2hhbXBpb25OYW1lO1xuICBjaGFtcGlvbkNvbnRhaW5lci5kYXRhc2V0LmlkID0gY2hhbXBpb25JZDtcbiAgY29uc3QgY2hhbXBpb25JbWdVcmwgPSBgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuL2ltZy9jaGFtcGlvbi9sb2FkaW5nLyR7Y2hhbXBpb25JZH1fMC5qcGdgO1xuICBjb25zdCBjaGFtcGlvbkltZyA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEltYWdlRWxlbWVudFdpdGhDbGFzcyhcbiAgICAnY2hhbXBpb24taW1nJywgY2hhbXBpb25Db250YWluZXIsIGNoYW1waW9uSW1nVXJsLCAnJyxcbiAgKTtcbiAgY2hhbXBpb25JbWcudGFiSW5kZXggPSAwO1xuICBjaGFtcGlvbkNvbnRhaW5lci50YWJJbmRleCA9IDA7XG4gIGNvbnN0IGNoYW1waW9uTmFtZVdyYXBwZXIgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnY2hhbXBpb24tbmFtZS13cmFwcGVyJywgY2hhbXBpb25Db250YWluZXIpO1xuICBjb25zdCBjaGFtcGlvbk5hbWUgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2NoYW1waW9uLW5hbWUnLCBjaGFtcGlvbk5hbWVXcmFwcGVyKTtcbiAgY2hhbXBpb25OYW1lLnRleHRDb250ZW50ID0gY2hhbXBpb24ubmFtZTtcbn07XG5cbmV4cG9ydCB7XG4gIHJlbmRlckhlYWRlckRldGFpbHMsXG4gIHJlbmRlclN0YXRPdmVydmlldyxcbiAgcmVuZGVyQ2hhbXBpb25MYW5lLFxuICByZW5kZXJEYW1hZ2VTdGF0cyxcbiAgaW1hZ2VzLFxuICByZW5kZXJNYXRjaHVwc0luZm8sXG4gIGNyZWF0ZUNoYW1waW9uQ29udGFpbmVyLFxufTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1yYXNpbi1ibGFjazogIzFkMWUyYztcXG4gIC0tdHJhbnNwYXJlbnQtcmFzaW4tYmxhY2s6ICMxZDFlMmM5MTtcXG4gIC0tZGFyay1nb2xkOiAjOTI3NTQzO1xcbiAgLS1saWdodC1nb2xkOiAjYzdhYjZlO1xcbn1cXG5cXG4jZnJvbnQtcGFnZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAtNDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmFybG93XFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuI2Zyb250LXBhZ2UgLmFwcC1uYW1lLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgcGFkZGluZzogMC4zZW07XFxuICBib3JkZXItcmFkaXVzOiA4cHggMHB4IDhweCAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jZnJvbnQtcGFnZSAuYXBwLW5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XFxufVxcbiNmcm9udC1wYWdlIC5hcHAtbmFtZS1jb250YWluZXI6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuI2Zyb250LXBhZ2UgLnBhZ2UtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFlbSAwO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci13aWR0aDogMCAwIDJweCAwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2Zyb250LXBhZ2UgLmFwcC1uYW1lLWRpc3BsYXktY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwYjM7XFxuICBwYWRkaW5nOiAwLjJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiA2ZW07XFxufVxcbiNmcm9udC1wYWdlIC5hcHAtbmFtZS1kaXNwbGF5IHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbn1cXG4jZnJvbnQtcGFnZSAuc2xvZ2FuLWRpc3BsYXkge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG4gIG1hcmdpbi10b3A6IDJlbTtcXG59XFxuI2Zyb250LXBhZ2UgLnNlYXJjaCB7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIG1pbi13aWR0aDogMThlbTtcXG4gIGJhY2tncm91bmQ6ICNlMmU0ZTk7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBtaW4taGVpZ2h0OiAyLjZlbTtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG4jZnJvbnQtcGFnZSAuc3BsYXNoLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNmcm9udC1wYWdlIC5iYWNrZHJvcC1pbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogNTB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6ICMyMjI7XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcbiNmcm9udC1wYWdlIC5iYWNrZHJvcCB7XFxuICB6LWluZGV4OiAtMjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4jZnJvbnQtcGFnZSAuYmFja2Ryb3A6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMTQxODFkLCByZ2JhKDIwLCAyNCwgMjksIDAuOTg1NTY1KSAwLjk3JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjk0NTEzMSkgMi4wNzgzMyUsIHJnYmEoMjAsIDI0LCAyOSwgMC44ODMwMDcpIDMuMjk2NjclLCByZ2JhKDIwLCAyNCwgMjksIDAuODAzNDk5KSA0LjYwMTY3JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjcxMDkxNSkgNS45NjY2NyUsIHJnYmEoMjAsIDI0LCAyOSwgMC42MDk1NjMpIDcuMzY1JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjUwMzc1KSA4Ljc3MTY3JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjM5Nzc4NCkgMTAuMTYlLCByZ2JhKDIwLCAyNCwgMjksIDAuMjk1OTczKSAxMS41MDUlLCByZ2JhKDIwLCAyNCwgMjksIDAuMjAyNjI0KSAxMi43OCUsIHJnYmEoMjAsIDI0LCAyOSwgMC4xMjIwNDQpIDEzLjk1ODMzJSwgcmdiYSgyMCwgMjQsIDI5LCAwLjA1ODU0MjMpIDE1LjAxNjY3JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjAxNjQyNDkpIDE1LjkyODMzJSwgcmdiYSgyMCwgMjQsIDI5LCAwKSAxNi42NjY2NyUsIHJnYmEoMjAsIDI0LCAyOSwgMCkgODMuMzMzMzMlLCByZ2JhKDIwLCAyNCwgMjksIDAuMDE2NDI0OSkgODQuMDcxNjclLCByZ2JhKDIwLCAyNCwgMjksIDAuMDU4NTQyMykgODQuOTgzMzMlLCByZ2JhKDIwLCAyNCwgMjksIDAuMTIyMDQ0KSA4Ni4wNDE2NyUsIHJnYmEoMjAsIDI0LCAyOSwgMC4yMDI2MjQpIDg3LjIyJSwgcmdiYSgyMCwgMjQsIDI5LCAwLjI5NTk3MykgODguNDk1JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjM5Nzc4NCkgODkuODQlLCByZ2JhKDIwLCAyNCwgMjksIDAuNTAzNzUpIDkxLjIyODMzJSwgcmdiYSgyMCwgMjQsIDI5LCAwLjYwOTU2MykgOTIuNjM1JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjcxMDkxNSkgOTQuMDMzMzMlLCByZ2JhKDIwLCAyNCwgMjksIDAuODAzNDk5KSA5NS4zOTgzMyUsIHJnYmEoMjAsIDI0LCAyOSwgMC44ODMwMDcpIDk2LjcwMzMzJSwgcmdiYSgyMCwgMjQsIDI5LCAwLjk0NTEzMSkgOTcuOTIxNjclLCByZ2JhKDIwLCAyNCwgMjksIDAuOTg1NTY1KSA5OS4wMyUsICMxNDE4MWQpLCBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzE0MTgxZCwgIzE0MTgxZCAyMS40ODE0OCUsIHJnYmEoMjAsIDI0LCAyOSwgMC45ODU1NjUpIDIzLjYzNzA0JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjk0NTEzMSkgMjYuMSUsIHJnYmEoMjAsIDI0LCAyOSwgMC44ODMwMDcpIDI4LjgwNzQxJSwgcmdiYSgyMCwgMjQsIDI5LCAwLjgwMzQ5OSkgMzEuNzA3NDElLCByZ2JhKDIwLCAyNCwgMjksIDAuNzEwOTE1KSAzNC43NDA3NCUsIHJnYmEoMjAsIDI0LCAyOSwgMC42MDk1NjMpIDM3Ljg0ODE1JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjUwMzc1KSA0MC45NzQwNyUsIHJnYmEoMjAsIDI0LCAyOSwgMC4zOTc3ODQpIDQ0LjA1OTI2JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjI5NTk3MykgNDcuMDQ4MTUlLCByZ2JhKDIwLCAyNCwgMjksIDAuMjAyNjI0KSA0OS44ODE0OCUsIHJnYmEoMjAsIDI0LCAyOSwgMC4xMjIwNDQpIDUyLjUlLCByZ2JhKDIwLCAyNCwgMjksIDAuMDU4NTQyMykgNTQuODUxODUlLCByZ2JhKDIwLCAyNCwgMjksIDAuMDE2NDI0OSkgNTYuODc3NzglLCByZ2JhKDIwLCAyNCwgMjksIDApIDU4LjUxODUyJSk7XFxufVxcbiNmcm9udC1wYWdlIC5iYWNrZHJvcCAuc2hvd24ge1xcbiAgb3BhY2l0eTogMC43O1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjZzIGVhc2UtaW47XFxufVxcbiNmcm9udC1wYWdlIC5iYWNrZHJvcCAuaGlkZGVuIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNnMgZWFzZS1pbjtcXG59XFxuI2Zyb250LXBhZ2UgI3RwYS1iYWNrZHJvcC5oaWRkZW4ge1xcbiAgdHJhbnNpdGlvbjogbm9uZTtcXG59XFxuI2Zyb250LXBhZ2UgLnNsb2dhbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDE2ZW07XFxufVxcbiNmcm9udC1wYWdlIC5zbG9nYW4tMSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCYXJsb3dcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG4jZnJvbnQtcGFnZSAuc2xvZ2FuLTIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmFybG93XFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuI2Zyb250LXBhZ2UgLm1vYmlsZS1kaXNjb3Zlci1idG4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBtYXJnaW4tYm90dG9tOiAyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctYm90dG9tOiAyZW07XFxufVxcbiNmcm9udC1wYWdlIC5mcm9udC1wYWdlLWJ0biB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxufVxcbiNmcm9udC1wYWdlIC5mcm9udC1wYWdlLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG59XFxuI2Zyb250LXBhZ2UgLm1vYmlsZS1zZWFyY2gtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG4jZnJvbnQtcGFnZSAubW9iaWxlLXNlYXJjaC1jb250YWluZXIgLmF1dG8tY29tcGxldGUtbmFtZXMge1xcbiAgbWF4LWhlaWdodDogMTByZW07XFxufVxcbiNmcm9udC1wYWdlIC5kaXNjb3Zlci1idG4tY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDNlbTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB0b3A6IDIxLjVlbTtcXG59XFxuI2Zyb250LXBhZ2UgLmRpc2NvdmVyLWJ0biB7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGZvbnQtc2l6ZTogMS40ZW07XFxuICBib3JkZXItcmFkaXVzOiA3NSUgMTAlLzAlIDc1JTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbn1cXG4jZnJvbnQtcGFnZSAuZGlzY292ZXItYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbn1cXG4jZnJvbnQtcGFnZSAubmF2aWdhdGlvbi1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2Zyb250LXBhZ2UgLmRlc2t0b3Atc2VhcmNoLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG4jZnJvbnQtcGFnZSAuYXV0by1jb21wbGV0ZS1uYW1lcyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDRkNGQ0O1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIGJvcmRlci10b3A6IG5vbmU7XFxuICB6LWluZGV4OiA0O1xcbiAgdG9wOiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxNHJlbTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4jZnJvbnQtcGFnZSAuYXV0by1jb21wbGV0ZS1uYW1lLXdyYXBwZXIge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q0ZDRkNDtcXG4gIGNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbiNmcm9udC1wYWdlIC5hdXRvLWNvbXBsZXRlLW5hbWUtd3JhcHBlcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG59XFxuI2Zyb250LXBhZ2UgLmF1dG8tY29tcGxldGUtbmFtZS13cmFwcGVyOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbn1cXG4jZnJvbnQtcGFnZSAuc2VhcmNoIHtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgbWluLXdpZHRoOiAxOGVtO1xcbiAgYmFja2dyb3VuZDogI2UyZTRlOTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIG1pbi1oZWlnaHQ6IDIuNmVtO1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcbiNmcm9udC1wYWdlIC5sZWdhbC1ib2lsZXJwbGF0ZSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDAuOGVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgcGFkZGluZzogMCAxLjNlbSAwLjZlbSAxLjNlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xcbiAgI2Zyb250LXBhZ2UgLm1vYmlsZS1zZWFyY2gtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gICNmcm9udC1wYWdlIC5kZXNrdG9wLXNlYXJjaC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgI2Zyb250LXBhZ2UgLm1vYmlsZS1kaXNjb3Zlci1idG4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gICNmcm9udC1wYWdlIC5kaXNjb3Zlci1idG4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuICAjZnJvbnQtcGFnZSAubGVnYWwtYm9pbGVycGxhdGUge1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgcGFkZGluZy10b3A6IDAuNmVtO1xcbiAgfVxcbiAgI2Zyb250LXBhZ2UgLnNsb2dhbi1jb250YWluZXIge1xcbiAgICB0b3A6IDMwZW07XFxuICB9XFxuICAjZnJvbnQtcGFnZSAuc2xvZ2FuLTEge1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gIH1cXG4gICNmcm9udC1wYWdlIC5zbG9nYW4tMiB7XFxuICAgIGZvbnQtc2l6ZTogMi4xcmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTQwMHB4KSB7XFxuICAjZnJvbnQtcGFnZSAuZGlzY292ZXItYnRuLWNvbnRhaW5lciB7XFxuICAgIHRvcDogMThlbTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlc2hlZXRzL2Zyb250cGFnZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUdBO0VBQ0Usc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUFB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O0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQTdCSjtBQWdDRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBOUJKO0FBaUNFO0VBQ0UsbUNBQUE7QUEvQko7QUFrQ0U7RUFDRSxtQ0FBQTtBQWhDSjtBQW1DRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBakNKO0FBb0NFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBbENKO0FBcUNFO0VBQ0U7SUFDRSxhQUFBO0VBbkNKO0VBc0NFO0lBQ0UsY0FBQTtFQXBDSjtBQUNGO0FBdUNFO0VBQ0U7SUFDRSxhQUFBO0VBckNKO0VBd0NFO0lBQ0UsY0FBQTtFQXRDSjtFQXlDRTtJQUNFLGNBQUE7SUFDQSxrQkFBQTtFQXZDSjtFQTBDRTtJQUNFLFNBQUE7RUF4Q0o7RUEyQ0U7SUFDRSxpQkFBQTtFQXpDSjtFQTRDRTtJQUNFLGlCQUFBO0VBMUNKO0FBQ0Y7QUE2Q0U7RUFDRTtJQUNFLFNBQUE7RUEzQ0o7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbn1cXG5cXG46cm9vdCB7XFxuICAtLXJhc2luLWJsYWNrOiAjMWQxZTJjO1xcbiAgLS10cmFuc3BhcmVudC1yYXNpbi1ibGFjazogIzFkMWUyYzkxO1xcbiAgLS1kYXJrLWdvbGQ6ICM5Mjc1NDM7XFxuICAtLWxpZ2h0LWdvbGQ6ICNjN2FiNmU7XFxufVxcblxcbiNmcm9udC1wYWdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IC00O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCYXJsb3dcXFwiLCBzYW5zLXNlcmlmO1xcblxcbiAgLmFwcC1uYW1lLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICAgIHBhZGRpbmc6IDAuM2VtO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHggMHB4IDhweCAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuXFxuICAuYXBwLW5hbWUge1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XFxuICB9XFxuXFxuICAuYXBwLW5hbWUtY29udGFpbmVyOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgfVxcblxcbiAgLnBhZ2UtaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDFlbSAwO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICAgIGJvcmRlci13aWR0aDogMCAwIDJweCAwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmFwcC1uYW1lLWRpc3BsYXktY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBiMztcXG4gICAgcGFkZGluZzogMC4yZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDExcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDZlbTtcXG4gIH1cXG5cXG4gIC5hcHAtbmFtZS1kaXNwbGF5IHtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDZweDtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgfVxcblxcbiAgLnNsb2dhbi1kaXNwbGF5IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICBtYXJnaW4tdG9wOiAyZW07XFxuICB9XFxuXFxuICAuc2VhcmNoIHtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIG1pbi13aWR0aDogMThlbTtcXG4gICAgYmFja2dyb3VuZDogI2UyZTRlOTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBtaW4taGVpZ2h0OiAyLjZlbTtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuXFxuICB9XFxuXFxuICAuc3BsYXNoLXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmJhY2tkcm9wLWltZyB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogNTB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiAjMjIyO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxuICB9XFxuXFxuICAuYmFja2Ryb3Age1xcbiAgICB6LWluZGV4OiAtMjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIFxcbiAgLmJhY2tkcm9wOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywjMTQxODFkLHJnYmEoMjAsMjQsMjksLjk4NTU2NSkgLjk3JSxyZ2JhKDIwLDI0LDI5LC45NDUxMzEpIDIuMDc4MzMlLHJnYmEoMjAsMjQsMjksLjg4MzAwNykgMy4yOTY2NyUscmdiYSgyMCwyNCwyOSwuODAzNDk5KSA0LjYwMTY3JSxyZ2JhKDIwLDI0LDI5LC43MTA5MTUpIDUuOTY2NjclLHJnYmEoMjAsMjQsMjksLjYwOTU2MykgNy4zNjUlLHJnYmEoMjAsMjQsMjksLjUwMzc1KSA4Ljc3MTY3JSxyZ2JhKDIwLDI0LDI5LC4zOTc3ODQpIDEwLjE2JSxyZ2JhKDIwLDI0LDI5LC4yOTU5NzMpIDExLjUwNSUscmdiYSgyMCwyNCwyOSwuMjAyNjI0KSAxMi43OCUscmdiYSgyMCwyNCwyOSwuMTIyMDQ0KSAxMy45NTgzMyUscmdiYSgyMCwyNCwyOSwuMDU4NTQyMykgMTUuMDE2NjclLHJnYmEoMjAsMjQsMjksLjAxNjQyNDkpIDE1LjkyODMzJSxyZ2JhKDIwLDI0LDI5LDApIDE2LjY2NjY3JSxyZ2JhKDIwLDI0LDI5LDApIDgzLjMzMzMzJSxyZ2JhKDIwLDI0LDI5LC4wMTY0MjQ5KSA4NC4wNzE2NyUscmdiYSgyMCwyNCwyOSwuMDU4NTQyMykgODQuOTgzMzMlLHJnYmEoMjAsMjQsMjksLjEyMjA0NCkgODYuMDQxNjclLHJnYmEoMjAsMjQsMjksLjIwMjYyNCkgODcuMjIlLHJnYmEoMjAsMjQsMjksLjI5NTk3MykgODguNDk1JSxyZ2JhKDIwLDI0LDI5LC4zOTc3ODQpIDg5Ljg0JSxyZ2JhKDIwLDI0LDI5LC41MDM3NSkgOTEuMjI4MzMlLHJnYmEoMjAsMjQsMjksLjYwOTU2MykgOTIuNjM1JSxyZ2JhKDIwLDI0LDI5LC43MTA5MTUpIDk0LjAzMzMzJSxyZ2JhKDIwLDI0LDI5LC44MDM0OTkpIDk1LjM5ODMzJSxyZ2JhKDIwLDI0LDI5LC44ODMwMDcpIDk2LjcwMzMzJSxyZ2JhKDIwLDI0LDI5LC45NDUxMzEpIDk3LjkyMTY3JSxyZ2JhKDIwLDI0LDI5LC45ODU1NjUpIDk5LjAzJSwjMTQxODFkKSxsaW5lYXItZ3JhZGllbnQoMGRlZywjMTQxODFkLCMxNDE4MWQgMjEuNDgxNDglLHJnYmEoMjAsMjQsMjksLjk4NTU2NSkgMjMuNjM3MDQlLHJnYmEoMjAsMjQsMjksLjk0NTEzMSkgMjYuMSUscmdiYSgyMCwyNCwyOSwuODgzMDA3KSAyOC44MDc0MSUscmdiYSgyMCwyNCwyOSwuODAzNDk5KSAzMS43MDc0MSUscmdiYSgyMCwyNCwyOSwuNzEwOTE1KSAzNC43NDA3NCUscmdiYSgyMCwyNCwyOSwuNjA5NTYzKSAzNy44NDgxNSUscmdiYSgyMCwyNCwyOSwuNTAzNzUpIDQwLjk3NDA3JSxyZ2JhKDIwLDI0LDI5LC4zOTc3ODQpIDQ0LjA1OTI2JSxyZ2JhKDIwLDI0LDI5LC4yOTU5NzMpIDQ3LjA0ODE1JSxyZ2JhKDIwLDI0LDI5LC4yMDI2MjQpIDQ5Ljg4MTQ4JSxyZ2JhKDIwLDI0LDI5LC4xMjIwNDQpIDUyLjUlLHJnYmEoMjAsMjQsMjksLjA1ODU0MjMpIDU0Ljg1MTg1JSxyZ2JhKDIwLDI0LDI5LC4wMTY0MjQ5KSA1Ni44Nzc3OCUscmdiYSgyMCwyNCwyOSwwKSA1OC41MTg1MiUpO1xcbiAgfVxcblxcbiAgLmJhY2tkcm9wIC5zaG93biB7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjZzIGVhc2UtaW47XFxuICB9XFxuXFxuICAuYmFja2Ryb3AgLmhpZGRlbiB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjZzIGVhc2UtaW47XFxuICB9XFxuXFxuICAjdHBhLWJhY2tkcm9wLmhpZGRlbntcXG4gICAgdHJhbnNpdGlvbjogbm9uZTtcXG4gIH1cXG5cXG4gIC5zbG9nYW4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDE2ZW07XFxuICB9XFxuXFxuICAuc2xvZ2FuLTEge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnQmFybG93Jywgc2Fucy1zZXJpZjsgIFxcbiAgfVxcblxcbiAgLnNsb2dhbi0yIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ0JhcmxvdycsIHNhbnMtc2VyaWY7ICBcXG4gIH1cXG5cXG4gIC5tb2JpbGUtZGlzY292ZXItYnRuLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMmVtO1xcbiAgfVxcblxcbiAgLmZyb250LXBhZ2UtYnRuIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICB9XFxuXFxuICAuZnJvbnQtcGFnZS1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gIH1cXG5cXG4gIC5tb2JpbGUtc2VhcmNoLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcblxcbiAgICAuYXV0by1jb21wbGV0ZS1uYW1lcyB7XFxuICAgICAgbWF4LWhlaWdodDogMTByZW07XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5kaXNjb3Zlci1idG4tY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzZW07XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHRvcDogMjEuNWVtO1xcbiAgfVxcblxcbiAgLmRpc2NvdmVyLWJ0biB7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgICBmb250LXNpemU6IDEuNGVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA3NSUgMTAlLzAlIDc1JTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gIH1cXG5cXG4gIC5kaXNjb3Zlci1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1nb2xkKVxcbiAgfVxcblxcbiAgLm5hdmlnYXRpb24tc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuZGVza3RvcC1zZWFyY2gtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuYXV0by1jb21wbGV0ZS1uYW1lcyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZDRkNDtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgei1pbmRleDogNDtcXG4gICAgdG9wOiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMTRyZW07XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDsgXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAuYXV0by1jb21wbGV0ZS1uYW1lLXdyYXBwZXIge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IFxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q0ZDRkNDsgXFxuICAgIGNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLmF1dG8tY29tcGxldGUtbmFtZS13cmFwcGVyOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICB9XFxuXFxuICAuYXV0by1jb21wbGV0ZS1uYW1lLXdyYXBwZXI6Zm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gIH1cXG4gIFxcbiAgLnNlYXJjaCB7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBtaW4td2lkdGg6IDE4ZW07XFxuICAgIGJhY2tncm91bmQ6ICNlMmU0ZTk7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbWluLWhlaWdodDogMi42ZW07XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgfVxcblxcbiAgLmxlZ2FsLWJvaWxlcnBsYXRlIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDAuOGVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcGFkZGluZzogMCAxLjNlbSAwLjZlbSAxLjNlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIH1cXG5cXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xcbiAgICAubW9iaWxlLXNlYXJjaC1jb250YWluZXIge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLmRlc2t0b3Atc2VhcmNoLWNvbnRhaW5lciB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gICAgLm1vYmlsZS1kaXNjb3Zlci1idG4tY29udGFpbmVyIHtcXG4gICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5kaXNjb3Zlci1idG4tY29udGFpbmVyIHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcblxcbiAgICAubGVnYWwtYm9pbGVycGxhdGUge1xcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICAgIHBhZGRpbmctdG9wOiAwLjZlbTtcXG4gICAgfVxcblxcbiAgICAuc2xvZ2FuLWNvbnRhaW5lciB7XFxuICAgICAgdG9wOiAzMGVtO1xcbiAgICB9XFxuXFxuICAgIC5zbG9nYW4tMSB7XFxuICAgICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIH1cXG5cXG4gICAgLnNsb2dhbi0yIHtcXG4gICAgICBmb250LXNpemU6IDIuMXJlbTtcXG4gICAgfVxcbiAgfVxcblxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDE0MDBweCkge1xcbiAgICAuZGlzY292ZXItYnRuLWNvbnRhaW5lciB7XFxuICAgICAgdG9wOiAxOGVtO1xcbiAgICB9XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLXJhc2luLWJsYWNrOiAjMWQxZTJjO1xcbiAgLS1kYXJrLWdvbGQ6ICM5Mjc1NDM7XFxuICAtLWxpZ2h0LWdvbGQ6ICNjN2FiNmU7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIHBhZGRpbmc6IDJyZW0gMDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBmb250LWZhbWlseTogXFxcIkJhcmxvd1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcbi5tb2RhbCAjbWFpbi1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMDtcXG4gIG1heC13aWR0aDogNzUlO1xcbiAgbWluLWhlaWdodDogNDlyZW07XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4ubW9kYWwgI21haW4tY29udGFpbmVyICNtYWluIHtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbn1cXG4ubW9kYWwgLm1vZGFsLWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwZTA7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwYmY7XFxufVxcbi5tb2RhbCAubmF2aWdhdGlvbi1iYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1vZGFsIC5jbG9zZS1tb2RhbC1idG4td3JhcHBlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxLjJlbTtcXG59XFxuLm1vZGFsIC5jbG9zZS1tb2RhbC1idG4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGZvbnQtc2l6ZTogMS42ZW07XFxufVxcbi5tb2RhbCAuY2xvc2UtbW9kYWwtYnRuOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG59XFxuLm1vZGFsIC5tb2RhbC1uYXYtbGlua3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5tb2RhbCAubW9kYWwtbmF2LWxpbmsge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLXRvcDogMC41ZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG59XFxuLm1vZGFsIC5tb2RhbC1uYXYtbGluazpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1oZWFkaW5nIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1uYW1lIHtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi10aXRsZSB7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAwLjVlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXJvbGVzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1yb2xlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tcmVzb3VyY2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1yb2xlLWltYWdlIHtcXG4gIGhlaWdodDogMy41cmVtO1xcbiAgd2lkdGg6IDMuNXJlbTtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1yZXNvdXJjZS1pbWFnZSB7XFxuICBoZWlnaHQ6IDMuNXJlbTtcXG4gIHdpZHRoOiAzLjVyZW07XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tcm9sZS1uYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tcmVzb3VyY2UtbmFtZSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLW1haW4taW5mbyB7XFxuICBwYWRkaW5nOiAxLjhyZW07XFxuICBtYXgtd2lkdGg6IDM0cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxhc3QgYmFzZWxpbmU7XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRldG9wIHtcXG4gIGZyb20ge1xcbiAgICB0b3A6IC0zMDBweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdG9wOiAwO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xcbiAgZnJvbSB7XFxuICAgIHRvcDogLTMwMHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0b3A6IDA7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbi5tb2RhbCAubG9yZS1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMGUwO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC42ZW07XFxuICBsaW5lLWhlaWdodDogMS40O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG59XFxuLm1vZGFsIC5zdWJoZWFkaW5nIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDAuNGVtO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmFiaWxpdGllcy1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMGUwO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC42ZW07XFxuICBsaW5lLWhlaWdodDogMS40O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIHdpZHRoOiAyOGVtO1xcbn1cXG4ubW9kYWwgLmFiaWxpdGllcy1oZWFkaW5nIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1vZGFsIC5hYmlsaXR5LWltZ3Mge1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG4ubW9kYWwgLmFiaWxpdHktZGVzY3JpcHRpb24ge1xcbiAgbWFyZ2luLXRvcDogMC41ZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLWV4dHJhLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5tb2RhbCAuYWJpbGl0eS1pbmZvIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5tb2RhbCAuYWJpbGl0eS1pbmZvLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLm1vZGFsIC5zcGVsbC1pbWcge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAwIDAuNXJlbTtcXG4gIGhlaWdodDogMy4zcmVtO1xcbiAgd2lkdGg6IDMuM3JlbTtcXG59XFxuLm1vZGFsIC5zcGVsbC1pbWcuY2xpY2tlZCB7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgYm9yZGVyLXdpZHRoOiA0cHg7XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tdGlwcy1zZWN0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBlMDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcbiAgbWF4LXdpZHRoOiAzNHJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi10aXBzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXRpcCB7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcbi5tb2RhbCAjc3RhdHMtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXgtd2lkdGg6IDc1JTtcXG4gIG1pbi1oZWlnaHQ6IDQ5cmVtO1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubW9kYWwgI3N0YXRzLWNvbnRhaW5lciAjc3RhdHMge1xcbiAgY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tc3RhdHMtb3ZlcnZpZXcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgbWFyZ2luLXRvcDogMC41ZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG4gIG1heC13aWR0aDogMjVyZW07XFxuICBtaW4td2lkdGg6IDIwcmVtO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG4ubW9kYWwgLndpbi1yYXRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ubW9kYWwgLnBpY2stcmF0ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLm1vZGFsIC5sYW5lLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubW9kYWwgLnBpY2stcmF0ZS12YWx1ZSB7XFxuICBtYXJnaW4tdG9wOiAwLjRlbTtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG59XFxuLm1vZGFsIC53aW4tcmF0ZS12YWx1ZSB7XFxuICBtYXJnaW4tdG9wOiAwLjRlbTtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG59XFxuLm1vZGFsIC5sYWJlbCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tZGFtYWdlLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwZTA7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgbWF4LWhlaWdodDogMTcuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG4ubW9kYWwgLmRhbWFnZS1oZWFkaW5nIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1vZGFsIC5jaXJjdWxhci1jaGFydCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXgtaGVpZ2h0OiAxNGVtO1xcbn1cXG4ubW9kYWwgLmNpcmNsZSB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlLXdpZHRoOiAyLjI7XFxuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XFxuICBhbmltYXRpb246IHByb2dyZXNzIDFzIGVhc2Utb3V0IGZvcndhcmRzO1xcbn1cXG4ubW9kYWwgI21hZ2ljLWRhbWFnZS1zdHJva2Uge1xcbiAgc3Ryb2tlOiAjMzVhN2ZmO1xcbn1cXG4ubW9kYWwgI3BoeXNpY2FsLWRhbWFnZS1zdHJva2Uge1xcbiAgc3Ryb2tlOiAjZmY1OTY0O1xcbn1cXG4ubW9kYWwgI3RydWUtZGFtYWdlLXN0cm9rZSB7XFxuICBzdHJva2U6ICNmZmU3NGM7XFxufVxcbkBrZXlmcmFtZXMgcHJvZ3Jlc3Mge1xcbiAgMCUge1xcbiAgICBzdHJva2UtZGFzaGFycmF5OiAwIDEwMDtcXG4gIH1cXG59XFxuLm1vZGFsIC50b3RhbC1kYW1hZ2UtdGV4dCB7XFxuICBmb250LXNpemU6IDRweDtcXG4gIHRleHQtYW5jaG9yOiBtaWRkbGU7XFxuICBmaWxsOiB3aGl0ZTtcXG59XFxuLm1vZGFsIC50b3RhbC1kYW1hZ2UtbGFiZWwge1xcbiAgZm9udC1zaXplOiAzcHg7XFxuICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xcbiAgZmlsbDogdmFyKC0tZGFyay1nb2xkKTtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1tYWluLXN0YXRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1pdGVtLWJ1aWxkcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwZTA7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgbWF4LWhlaWdodDogMTcuNXJlbTtcXG59XFxuLm1vZGFsIC5kYW1hZ2Utc3RhdHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmRhbWFnZS1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXgtaGVpZ2h0OiA5MiU7XFxuICBoZWlnaHQ6IDkyJTtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG4ubW9kYWwgLmRhbWFnZS10eXBlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG4ubW9kYWwgLmRhbWFnZS1zdGF0cyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG4ubW9kYWwgI3BoeXNpY2FsLWRhbWFnZS1sYWJlbCB7XFxuICBjb2xvcjogI2ZmNTk2NDtcXG59XFxuLm1vZGFsICNtYWdpYy1kYW1hZ2UtbGFiZWwge1xcbiAgY29sb3I6ICMzNWE3ZmY7XFxufVxcbi5tb2RhbCAjdHJ1ZS1kYW1hZ2UtbGFiZWwge1xcbiAgY29sb3I6ICNmZmU3NGM7XFxufVxcbi5tb2RhbCAuaXRlbS1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwZTA7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjA7XFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB3aWR0aDogNDAlO1xcbiAgcmlnaHQ6IDEwZW07XFxuICBtYXJnaW4tYm90dG9tOiAzLjVlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1vZGFsIC5pdGVtLW5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLm1vZGFsIC5tYWluLWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG59XFxuLm1vZGFsIC5jb3N0LWxhYmVsIHtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLm1vZGFsIC5jb21wb25lbnQtaXRlbXMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5tb2RhbCAuY29tcG9uZW50LWl0ZW0tbmFtZSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5tb2RhbCAuY29zdC1hbW91bnQge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4ubW9kYWwgLmNvbXBvbmVudC1pdGVtLWNvc3QtbGFiZWwge1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4ubW9kYWwgLmNvbXBvbmVudC1pdGVtLWFtb3VudCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5tb2RhbCAuY29tcG9uZW50LWl0ZW0tZGV0YWlscy1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMGUwO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC42ZW07XFxuICBsaW5lLWhlaWdodDogMS40O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLm1vZGFsIC5pdGVtLXNldHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWF4LWhlaWdodDogOTAlO1xcbn1cXG4ubW9kYWwgLml0ZW0tc2V0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBib3JkZXItd2lkdGg6IDJweDtcXG4gIHBhZGRpbmc6IDAuNGVtO1xcbn1cXG4ubW9kYWwgLm1haW4tY29tcG9uZW50LWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwZTA7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2MDQwMDgzO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luOiAwZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxufVxcbi5tb2RhbCAuaXRlbS1pbWcge1xcbiAgbWF4LXdpZHRoOiAyLjdlbTtcXG4gIG1heC1oZWlnaHQ6IDIuN2VtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgcGFkZGluZy1ib3R0b206IDA7XFxufVxcbi5tb2RhbCAuY29tcG9uZW50LWl0ZW0taW1nIHtcXG4gIG1heC13aWR0aDogMS44ZW07XFxuICBtYXgtaGVpZ2h0OiAxLjhlbTtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1tYXRjaHVwcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwZTA7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgbWF4LWhlaWdodDogMjUuMnJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgMCAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG4ubW9kYWwgLm1hdGNodXBzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIG1heC13aWR0aDogMjRyZW07XFxufVxcbi5tb2RhbCAubWF0Y2h1cC1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTYxYTtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgbWFyZ2luOiBhdXRvIDAuNWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG4ubW9kYWwgLm1hdGNodXAtaW5mbzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNjFhYzk7XFxufVxcbi5tb2RhbCAubWF0Y2h1cC1zdGF0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIFxcXCJBcHBsZSBTRCBHb3RoaWMgTmVvXFxcIiwgQXBwbGVHb3RoaWMsIERvdHVtLCBBcmlhbCwgVGFob21hO1xcbn1cXG4ubW9kYWwgLmVuZW15LWNoYW1waW9uLWltZyB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBtYXgtaGVpZ2h0OiAzZW07XFxuICBtYXgtd2lkdGg6IDNlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG4ubW9kYWwgLndpbnJhdGUtYWdhaW5zdC1wZXJjZW50YWdlLmJsdWUge1xcbiAgY29sb3I6ICMzNWE3ZmY7XFxufVxcbi5tb2RhbCAud2lucmF0ZS1hZ2FpbnN0LXBlcmNlbnRhZ2UucmVkIHtcXG4gIGNvbG9yOiAjZmY1OTY0O1xcbn1cXG4ubW9kYWwgI3NraW5zLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nOiAwO1xcbiAgbWF4LXdpZHRoOiA3NSU7XFxuICBtaW4taGVpZ2h0OiA0OXJlbTtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG1pbi1oZWlnaHQ6IDA7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1heC13aWR0aDogOTklO1xcbiAgd2lkdGg6IDk5JTtcXG59XFxuLm1vZGFsICNza2lucy1jb250YWluZXIgLm5hdmlnYXRpb24tYmFyIHtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCB2YXIoLS1kYXJrLWdvbGQpO1xcbn1cXG4ubW9kYWwgI3NraW5zLWNvbnRhaW5lciAjc2tpbnMge1xcbiAgY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxufVxcbi5tb2RhbCAjc2tpbnMtY29udGFpbmVyIC5tb2RhbC1oZWFkZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuLm1vZGFsIC5za2luLWltYWdlLWNvbnRhaW5lciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLm1vZGFsIC5za2luLWltYWdlLWNvbnRhaW5lci5zaG93biB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLm1vZGFsIC5za2luLWltYWdlIHtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm1vZGFsIC5za2luLW5hbWUge1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcbi5tb2RhbCAjc2tpbnMtY29udGFpbmVyIC5jaGFtcGlvbi1oZWFkaW5nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1vZGFsIC5pbWctc2Nyb2xsLWFycm93IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcbi5tb2RhbCAuaW1nLXNjcm9sbC1hcnJvdzpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDExMjBweCkge1xcbiAgLm1vZGFsIC5jb21wb25lbnQtaXRlbS1pbWcge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLm1vZGFsIC5pdGVtLXNldHMtY29udGFpbmVyIHtcXG4gICAgbWluLWhlaWdodDogODAlO1xcbiAgfVxcbiAgLm1vZGFsIC5pdGVtLWRldGFpbHMtY29udGFpbmVyIHtcXG4gICAgbWluLXdpZHRoOiA3MCU7XFxuICAgIHJpZ2h0OiAtNmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTI1MHB4KSB7XFxuICAubW9kYWwgLml0ZW0taW1nIHtcXG4gICAgbWF4LWhlaWdodDogMi4ycmVtO1xcbiAgICBtYXgtd2lkdGg6IDIuMnJlbTtcXG4gIH1cXG4gIC5tb2RhbCAuY2hhbXBpb24tZGV0YWlscyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gIH1cXG4gIC5tb2RhbCAuYWJpbGl0aWVzLWNvbnRhaW5lciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIG1heC13aWR0aDogMzFyZW07XFxuICB9XFxuICAubW9kYWwgLmxvcmUtY29udGFpbmVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbiAgLm1vZGFsICNtYWluLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogNzZyZW07XFxuICB9XFxuICAubW9kYWwgLml0ZW0tZGV0YWlscy1jb250YWluZXIge1xcbiAgICBtaW4td2lkdGg6IDcwJTtcXG4gICAgcmlnaHQ6IC02ZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgLm1vZGFsIC5pdGVtLXNldHMtY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIH1cXG4gIC5tb2RhbCAuaXRlbS1zZXQtY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5tb2RhbCAubWF0Y2h1cHMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLm1vZGFsIC5jaGFtcGlvbi1tYXRjaHVwcyB7XFxuICAgIG1heC1oZWlnaHQ6IDI4LjJyZW07XFxuICB9XFxuICAubW9kYWwgLm1hdGNodXAtaW5mbyB7XFxuICAgIG1hcmdpbjogMC4yZW0gYXV0bztcXG4gIH1cXG4gIC5tb2RhbCAjbWFpbi1jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICB9XFxuICAubW9kYWwgI3N0YXRzLWNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogNjNyZW07XFxuICB9XFxuICAubW9kYWwgLml0ZW0tZGV0YWlscy1jb250YWluZXIge1xcbiAgICByaWdodDogLTFlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDg0MHB4KSB7XFxuICAubW9kYWwgLmRhbWFnZS1pbmZvIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gIH1cXG4gIC5tb2RhbCAuZ2FtZXMtcGxheWVkLWFnYWluc3Qge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLm1vZGFsIC5kYW1hZ2Utc3RhdHMtY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDU2MHB4KSB7XFxuICAubW9kYWwgLmNoYW1waW9uLW1haW4tc3RhdHMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLm1vZGFsIC5pdGVtLXNldC1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcbiAgLm1vZGFsIC5pdGVtLXNldHMtY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5tb2RhbCAuY2hhbXBpb24tZGFtYWdlLWNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIC5tb2RhbCAuZGFtYWdlLXN0YXRzLWluZm8ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLm1vZGFsIC5kYW1hZ2UtaW5mbyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgfVxcbiAgLm1vZGFsIC5kYW1hZ2UtdHlwZS1jb250YWluZXIge1xcbiAgICBtYXJnaW46IDAuMmVtIGF1dG87XFxuICB9XFxuICAubW9kYWwgLmNpcmN1bGFyLWNoYXJ0IHtcXG4gICAgbWF4LWhlaWdodDogMTk1cHg7XFxuICAgIG1heC13aWR0aDogODAlO1xcbiAgfVxcbiAgLm1vZGFsIC5kYW1hZ2Utc3RhdHMtY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5tb2RhbCAuY2hhbXBpb24tcm9sZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcXG4gIH1cXG4gIC5tb2RhbCAuY2hhbXBpb24tcmVzb3VyY2Uge1xcbiAgICBtYXJnaW4tbGVmdDogMC41ZW07XFxuICAgIG1hcmdpbi1yaWdodDogMC41ZW07XFxuICB9XFxuICAubW9kYWwgLmNoYW1waW9uLXJvbGVzIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgfVxcbiAgLm1vZGFsIC5zcGVsbC1pbWcge1xcbiAgICBoZWlnaHQ6IDIuOGVtO1xcbiAgICB3aWR0aDogMi44ZW07XFxuICAgIG1hcmdpbjogYXV0bztcXG4gIH1cXG4gIC5tb2RhbCAuaXRlbS1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgIHJpZ2h0OiAyZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA0MTRweCkge1xcbiAgLm1vZGFsIC5jaGFtcGlvbi1zdGF0cy1vdmVydmlldyB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbWluLXdpZHRoOiAxN3JlbTtcXG4gIH1cXG4gIC5tb2RhbCAuY2hhbXBpb24tbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gIH1cXG4gIC5tb2RhbCAubW9kYWwtbmF2LWxpbmtzIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgfVxcbiAgLm1vZGFsIC5jbG9zZS1tb2RhbC1idG4td3JhcHBlciB7XFxuICAgIGxlZnQ6IDAuN2VtO1xcbiAgfVxcbiAgLm1vZGFsIC5jbG9zZS1tb2RhbC1idG4ge1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTMwMHB4KSB7XFxuICAubW9kYWwgI3NraW5zLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWF4LXdpZHRoOiA3MCU7XFxuICAgIG1pbi1oZWlnaHQ6IGF1dG87XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxOTUwcHgpIHtcXG4gIC5tb2RhbCAjc2tpbnMtY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiA1MCU7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXNoZWV0cy9tb2RhbHMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQUNGOztBQThEQTtFQUNFLGtEQUFBO0FBM0RGOztBQThEQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Es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QkFBQTtFQWxDSjtFQXFDRTtJQUNFLG1CQUFBO0VBbkNKO0VBc0NFO0lBQ0Usc0JBQUE7RUFwQ0o7RUF1Q0U7SUFDRSxlQUFBO0lBQ0EsbUJBQUE7RUFyQ0o7RUF3Q0U7SUFDRSxzQkFBQTtFQXRDSjtFQXlDRTtJQUNFLG1CQUFBO0lBQ0EsdUJBQUE7RUF2Q0o7RUEwQ0U7SUFDRSxrQkFBQTtFQXhDSjtFQTJDRTtJQUNFLGlCQUFBO0lBQ0EsY0FBQTtFQXpDSjtFQTRDRTtJQUNFLHNCQUFBO0VBMUNKO0VBNkNFO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtFQTNDSjtFQThDRTtJQUNFLGtCQUFBO0lBQ0EsbUJBQUE7RUE1Q0o7RUErQ0U7SUFDRSxlQUFBO0VBN0NKO0VBZ0RFO0lBQ0UsYUFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0VBOUNKO0VBaURFO0lBQ0UsVUFBQTtFQS9DSjtBQUNGO0FBa0RFO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUFoREo7RUFtREU7SUFDRSxlQUFBO0VBakRKO0VBb0RFO0lBQ0UsZUFBQTtFQWxESjtFQXFERTtJQUNFLFdBQUE7RUFuREo7RUFzREU7SUFDRSxnQkFBQTtFQXBESjtBQUNGO0FBdURFO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtFQXJESjtBQUNGO0FBd0RFO0VBQ0U7SUFDRSxjQUFBO0VBdERKO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbjpyb290IHtcXG4gIC0tcmFzaW4tYmxhY2s6ICMxZDFlMmM7XFxuICAtLWRhcmstZ29sZDogIzkyNzU0MztcXG4gIC0tbGlnaHQtZ29sZDogI2M3YWI2ZTtcXG59XFxuXFxuQG1peGluIGNvbnRhaW5lckJhY2tncm91bmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMGUwO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC42ZW07XFxuICBsaW5lLWhlaWdodDogMS40O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG59XFxuXFxuQG1peGluIHN1YkhlYWRpbmdTdHlsZSB7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAwLjRlbTtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuQG1peGluIGljb25TaXplIHtcXG4gIGhlaWdodDogMy41cmVtO1xcbiAgd2lkdGg6IDMuNXJlbTtcXG59XFxuXFxuQG1peGluIGljb25UZXh0IHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbkBtaXhpbiBpY29uQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxufVxcblxcbkBtaXhpbiBzbWFsbE1hcmdpbiB7XFxuICBtYXJnaW4tdG9wOiAwLjVlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG5cXG5AbWl4aW4gbW9kYWxDb250ZW50Q29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXgtd2lkdGg6IDc1JTtcXG4gIG1pbi1oZWlnaHQ6IDQ5cmVtO1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIHBhZGRpbmc6IDJyZW0gMDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNCk7XFxuICBmb250LWZhbWlseTogXFxcIkJhcmxvd1xcXCIsIHNhbnMtc2VyaWY7XFxuXFxuICAjbWFpbi1jb250YWluZXIge1xcbiAgICBAaW5jbHVkZSBtb2RhbENvbnRlbnRDb250YWluZXIoKTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuXFxuICAgICNtYWluIHtcXG4gICAgICBjb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLm1vZGFsLWhlYWRlciB7XFxuICAgIEBpbmNsdWRlIGNvbnRhaW5lckJhY2tncm91bmQoKTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMGJmO1xcbiAgfVxcblxcbiAgLm5hdmlnYXRpb24tYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5jbG9zZS1tb2RhbC1idG4td3JhcHBlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMS4yZW07XFxuICB9XFxuXFxuICAuY2xvc2UtbW9kYWwtYnRuIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBmb250LXNpemU6IDEuNmVtO1xcbiAgfSAgXFxuXFxuICAuY2xvc2UtbW9kYWwtYnRuOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgfVxcblxcbiAgLm1vZGFsLW5hdi1saW5rcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLm1vZGFsLW5hdi1saW5rIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBAaW5jbHVkZSBzbWFsbE1hcmdpbigpO1xcbiAgfVxcblxcbiAgLm1vZGFsLW5hdi1saW5rOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICB9XFxuXFxuICAuY2hhbXBpb24taGVhZGluZyB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1uYW1lIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXRpdGxlIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIEBpbmNsdWRlIHNtYWxsTWFyZ2luKCk7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tcm9sZXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1yb2xlIHtcXG4gICAgQGluY2x1ZGUgaWNvbkNvbnRhaW5lcigpO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXJlc291cmNlIHtcXG4gICAgQGluY2x1ZGUgaWNvbkNvbnRhaW5lcigpO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXJvbGUtaW1hZ2Uge1xcbiAgICBAaW5jbHVkZSBpY29uU2l6ZSgpO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXJlc291cmNlLWltYWdlIHtcXG4gICAgQGluY2x1ZGUgaWNvblNpemUoKTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1yb2xlLW5hbWUge1xcbiAgICBAaW5jbHVkZSBpY29uVGV4dCgpO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXJlc291cmNlLW5hbWUge1xcbiAgICBAaW5jbHVkZSBpY29uVGV4dCgpO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLW1haW4taW5mbyB7XFxuICAgIHBhZGRpbmc6IDEuOHJlbTtcXG4gICAgbWF4LXdpZHRoOiAzNHJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBsYXN0IGJhc2VsaW5lO1xcbiAgfVxcblxcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xcbiAgICBmcm9tIHtcXG4gICAgICB0b3A6IC0zMDBweDtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgfVxcblxcbiAgQGtleWZyYW1lcyBhbmltYXRldG9wIHtcXG4gICAgZnJvbSB7XFxuICAgICAgdG9wOiAtMzAwcHg7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5sb3JlLWNvbnRhaW5lciB7XFxuICAgIEBpbmNsdWRlIGNvbnRhaW5lckJhY2tncm91bmQoKTtcXG4gIH1cXG5cXG4gIC5zdWJoZWFkaW5nIHtcXG4gICAgQGluY2x1ZGUgc3ViSGVhZGluZ1N0eWxlKCk7XFxuICB9XFxuXFxuICAuYWJpbGl0aWVzLWNvbnRhaW5lciB7XFxuICAgIEBpbmNsdWRlIGNvbnRhaW5lckJhY2tncm91bmQoKTtcXG4gICAgd2lkdGg6IDI4ZW07XFxuICB9XFxuXFxuICAuYWJpbGl0aWVzLWhlYWRpbmcge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuYWJpbGl0eS1pbWdzIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIH1cXG5cXG4gIC5hYmlsaXR5LWRlc2NyaXB0aW9uIHtcXG4gICAgQGluY2x1ZGUgc21hbGxNYXJnaW4oKTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tZXh0cmEtaW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAuYWJpbGl0eS1pbmZvIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5hYmlsaXR5LWluZm8uYWN0aXZlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5zcGVsbC1pbWcge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbjogMCAwLjVyZW07XFxuICAgIGhlaWdodDogMy4zcmVtO1xcbiAgICB3aWR0aDogMy4zcmVtO1xcbiAgfVxcblxcbiAgLnNwZWxsLWltZy5jbGlja2VkIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgICBib3JkZXItd2lkdGg6IDRweDtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi10aXBzLXNlY3Rpb24ge1xcbiAgICBAaW5jbHVkZSBjb250YWluZXJCYWNrZ3JvdW5kKCk7XFxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XFxuICAgIG1heC13aWR0aDogMzRyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi10aXBzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi10aXAge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICB9XFxuXFxuICAjc3RhdHMtY29udGFpbmVyIHtcXG4gICAgQGluY2x1ZGUgbW9kYWxDb250ZW50Q29udGFpbmVyKCk7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuXFxuICAgICNzdGF0cyB7XFxuICAgICAgY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1zdGF0cy1vdmVydmlldyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBAaW5jbHVkZSBzbWFsbE1hcmdpbigpO1xcbiAgICBtYXgtd2lkdGg6IDI1cmVtO1xcbiAgICBtaW4td2lkdGg6IDIwcmVtO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICB9XFxuXFxuICAud2luLXJhdGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLnBpY2stcmF0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAubGFuZS1pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5waWNrLXJhdGUtdmFsdWUge1xcbiAgICBtYXJnaW4tdG9wOiAwLjRlbTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgfVxcblxcbiAgLndpbi1yYXRlLXZhbHVlIHtcXG4gICAgbWFyZ2luLXRvcDogMC40ZW07XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gIH1cXG5cXG4gIC5sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1kYW1hZ2UtY29udGFpbmVyIHtcXG4gICAgQGluY2x1ZGUgY29udGFpbmVyQmFja2dyb3VuZCgpO1xcbiAgICBtYXgtaGVpZ2h0OiAxNy41cmVtO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gIH1cXG5cXG4gIC5kYW1hZ2UtaGVhZGluZyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5jaXJjdWxhci1jaGFydCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1heC1oZWlnaHQ6IDE0ZW07XFxuICB9XFxuXFxuICAuY2lyY2xlIHtcXG4gICAgZmlsbDogbm9uZTtcXG4gICAgc3Ryb2tlLXdpZHRoOiAyLjI7XFxuICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcXG4gICAgYW5pbWF0aW9uOiBwcm9ncmVzcyAxcyBlYXNlLW91dCBmb3J3YXJkcztcXG4gIH1cXG5cXG4gICNtYWdpYy1kYW1hZ2Utc3Ryb2tlIHtcXG4gICAgc3Ryb2tlOiAjMzVhN2ZmO1xcbiAgfVxcblxcbiAgI3BoeXNpY2FsLWRhbWFnZS1zdHJva2Uge1xcbiAgICBzdHJva2U6ICNmZjU5NjQ7XFxuICB9XFxuXFxuICAjdHJ1ZS1kYW1hZ2Utc3Ryb2tlIHtcXG4gICAgc3Ryb2tlOiAjZmZlNzRjO1xcbiAgfVxcblxcbiAgQGtleWZyYW1lcyBwcm9ncmVzcyB7XFxuICAgIDAlIHtcXG4gICAgICBzdHJva2UtZGFzaGFycmF5OiAwIDEwMDtcXG4gICAgfVxcbiAgfVxcblxcbiAgLnRvdGFsLWRhbWFnZS10ZXh0IHtcXG4gICAgZm9udC1zaXplOiA0cHg7XFxuICAgIHRleHQtYW5jaG9yOiBtaWRkbGU7XFxuICAgIGZpbGw6IHdoaXRlO1xcbiAgfVxcblxcbiAgLnRvdGFsLWRhbWFnZS1sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogM3B4O1xcbiAgICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xcbiAgICBmaWxsOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLW1haW4tc3RhdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1pdGVtLWJ1aWxkcyB7XFxuICAgIEBpbmNsdWRlIGNvbnRhaW5lckJhY2tncm91bmQoKTtcXG4gICAgbWF4LWhlaWdodDogMTcuNXJlbTtcXG4gIH1cXG5cXG4gIC5kYW1hZ2Utc3RhdHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuZGFtYWdlLWluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXgtaGVpZ2h0OiA5MiU7XFxuICAgIGhlaWdodDogOTIlO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gIH1cXG5cXG4gIC5kYW1hZ2UtdHlwZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gIH1cXG5cXG4gIC5kYW1hZ2Utc3RhdHMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgfVxcblxcbiAgI3BoeXNpY2FsLWRhbWFnZS1sYWJlbCB7XFxuICAgIGNvbG9yOiAjZmY1OTY0O1xcbiAgfVxcblxcbiAgI21hZ2ljLWRhbWFnZS1sYWJlbCB7XFxuICAgIGNvbG9yOiAjMzVhN2ZmO1xcbiAgfVxcblxcbiAgI3RydWUtZGFtYWdlLWxhYmVsIHtcXG4gICAgY29sb3I6ICNmZmU3NGM7XFxuICB9XFxuXFxuICAuaXRlbS1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgIEBpbmNsdWRlIGNvbnRhaW5lckJhY2tncm91bmQoKTtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjA7XFxuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIHJpZ2h0OiAxMGVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzLjVlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLml0ZW0tbmFtZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gIH1cXG5cXG4gIC5tYWluLWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICB9XFxuXFxuICAuY29zdC1sYWJlbCB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgfVxcblxcbiAgLmNvbXBvbmVudC1pdGVtcy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcblxcbiAgLmNvbXBvbmVudC1pdGVtLW5hbWUge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICB9XFxuXFxuICAuY29zdC1hbW91bnQge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICB9XFxuXFxuICAuY29tcG9uZW50LWl0ZW0tY29zdC1sYWJlbCB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgfVxcblxcbiAgLmNvbXBvbmVudC1pdGVtLWFtb3VudCB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gIH1cXG5cXG4gIC5jb21wb25lbnQtaXRlbS1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgIEBpbmNsdWRlIGNvbnRhaW5lckJhY2tncm91bmQoKTtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjA7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAuaXRlbS1zZXRzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXgtaGVpZ2h0OiA5MCU7XFxuICB9XFxuXFxuICAuaXRlbS1zZXQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXG4gICAgcGFkZGluZzogMC40ZW07XFxuICB9XFxuXFxuICAubWFpbi1jb21wb25lbnQtY29udGFpbmVyIHtcXG4gICAgQGluY2x1ZGUgY29udGFpbmVyQmFja2dyb3VuZCgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYwNDAwODM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDBlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXG4gIH1cXG5cXG4gIC5pdGVtLWltZyB7XFxuICAgIG1heC13aWR0aDogMi43ZW07XFxuICAgIG1heC1oZWlnaHQ6IDIuN2VtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XFxuICAgIC8vcGFkZGluZzogMWVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcXG4gIH1cXG5cXG4gIC5jb21wb25lbnQtaXRlbS1pbWcge1xcbiAgICBtYXgtd2lkdGg6IDEuOGVtO1xcbiAgICBtYXgtaGVpZ2h0OiAxLjhlbTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1tYXRjaHVwcyB7XFxuICAgIEBpbmNsdWRlIGNvbnRhaW5lckJhY2tncm91bmQoKTtcXG4gICAgbWF4LWhlaWdodDogMjUuMnJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDAgMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB9XFxuXFxuICAubWF0Y2h1cHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgbWF4LXdpZHRoOiAyNHJlbTtcXG4gIH1cXG5cXG4gIC5tYXRjaHVwLWluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNjFhO1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgbWFyZ2luOiBhdXRvIDAuNWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XFxuICB9XFxuXFxuICAubWF0Y2h1cC1pbmZvOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTYxYWM5O1xcbiAgfVxcblxcbiAgLm1hdGNodXAtc3RhdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIFxcXCJBcHBsZSBTRCBHb3RoaWMgTmVvXFxcIiwgQXBwbGVHb3RoaWMsXFxuICAgICAgRG90dW0sIEFyaWFsLCBUYWhvbWE7XFxuICB9XFxuXFxuICAuZW5lbXktY2hhbXBpb24taW1nIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBtYXgtaGVpZ2h0OiAzZW07XFxuICAgIG1heC13aWR0aDogM2VtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG4gIH1cXG5cXG4gIC53aW5yYXRlLWFnYWluc3QtcGVyY2VudGFnZS5ibHVlIHtcXG4gICAgY29sb3I6ICMzNWE3ZmY7XFxuICB9XFxuXFxuICAud2lucmF0ZS1hZ2FpbnN0LXBlcmNlbnRhZ2UucmVkIHtcXG4gICAgY29sb3I6ICNmZjU5NjQ7XFxuICB9XFxuXFxuICAjc2tpbnMtY29udGFpbmVyIHtcXG4gICAgQGluY2x1ZGUgbW9kYWxDb250ZW50Q29udGFpbmVyKCk7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtaW4taGVpZ2h0OiAwO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgbWF4LXdpZHRoOiA5OSU7XFxuICAgIHdpZHRoOiA5OSU7XFxuXFxuICAgIC5uYXZpZ2F0aW9uLWJhciB7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IHZhcigtLWRhcmstZ29sZCk7XFxuICAgIH1cXG5cXG4gICAgI3NraW5zIHtcXG4gICAgICBjb2xvcjogdmFyKC0tZGFyay1nb2xkKVxcbiAgICB9XFxuICB9XFxuXFxuICAjc2tpbnMtY29udGFpbmVyIC5tb2RhbC1oZWFkZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgfVxcblxcbiAgLnNraW4taW1hZ2UtY29udGFpbmVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLnNraW4taW1hZ2UtY29udGFpbmVyLnNob3duIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAuc2tpbi1pbWFnZSB7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuc2tpbi1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICB9XFxuXFxuICAjc2tpbnMtY29udGFpbmVyIC5jaGFtcGlvbi1oZWFkaW5nIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuaW1nLXNjcm9sbC1hcnJvdyB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gIH1cXG5cXG4gIC5pbWctc2Nyb2xsLWFycm93OmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICB9XFxuXFxuICBAbWVkaWEgKG1heC13aWR0aDogMTEyMHB4KSB7XFxuICAgIC5jb21wb25lbnQtaXRlbS1pbWcge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLml0ZW0tc2V0cy1jb250YWluZXIge1xcbiAgICAgIG1pbi1oZWlnaHQ6IDgwJTtcXG4gICAgfVxcblxcbiAgICAuaXRlbS1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgICAgbWluLXdpZHRoOiA3MCU7XFxuICAgICAgcmlnaHQ6IC02ZW07XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjUwcHgpIHtcXG4gICAgLml0ZW0taW1nIHtcXG4gICAgICBtYXgtaGVpZ2h0OiAyLjJyZW07XFxuICAgICAgbWF4LXdpZHRoOiAyLjJyZW07XFxuICAgIH1cXG5cXG4gICAgLmNoYW1waW9uLWRldGFpbHMge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gICAgfVxcblxcbiAgICAuYWJpbGl0aWVzLWNvbnRhaW5lciB7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgIG1heC13aWR0aDogMzFyZW07XFxuICAgIH1cXG5cXG4gICAgLmxvcmUtY29udGFpbmVyIHtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgI21haW4tY29udGFpbmVyIHtcXG4gICAgICBoZWlnaHQ6IDc2cmVtO1xcbiAgICB9XFxuXFxuICAgIC5pdGVtLWRldGFpbHMtY29udGFpbmVyIHtcXG4gICAgICBtaW4td2lkdGg6IDcwJTtcXG4gICAgICByaWdodDogLTZlbTtcXG4gICAgfVxcbiAgfVxcblxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICAgIC5pdGVtLXNldHMtY29udGFpbmVyIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICB9XFxuXFxuICAgIC5pdGVtLXNldC1jb250YWluZXIge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgLm1hdGNodXBzIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5jaGFtcGlvbi1tYXRjaHVwcyB7XFxuICAgICAgbWF4LWhlaWdodDogMjguMnJlbTtcXG4gICAgfVxcblxcbiAgICAubWF0Y2h1cC1pbmZvIHtcXG4gICAgICBtYXJnaW46IDAuMmVtIGF1dG87XFxuICAgIH1cXG5cXG4gICAgI21haW4tY29udGFpbmVyIHtcXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgI3N0YXRzLWNvbnRhaW5lciB7XFxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICAgIG1pbi1oZWlnaHQ6IDYzcmVtO1xcbiAgICB9XFxuXFxuICAgIC5pdGVtLWRldGFpbHMtY29udGFpbmVyIHtcXG4gICAgICByaWdodDogLTFlbTtcXG4gICAgfVxcbiAgfVxcblxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDg0MHB4KSB7XFxuICAgIC5kYW1hZ2UtaW5mbyB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIH1cXG5cXG4gICAgLmdhbWVzLXBsYXllZC1hZ2FpbnN0IHtcXG4gICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5kYW1hZ2Utc3RhdHMtY29udGFpbmVyIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgKG1heC13aWR0aDogNTYwcHgpIHtcXG4gICAgLmNoYW1waW9uLW1haW4tc3RhdHMge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgLml0ZW0tc2V0LWNvbnRhaW5lciB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgfVxcblxcbiAgICAuaXRlbS1zZXRzLWNvbnRhaW5lciB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAuY2hhbXBpb24tZGFtYWdlLWNvbnRhaW5lciB7XFxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLmRhbWFnZS1zdGF0cy1pbmZvIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5kYW1hZ2UtaW5mbyB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgfVxcblxcbiAgICAuZGFtYWdlLXR5cGUtY29udGFpbmVyIHtcXG4gICAgICBtYXJnaW46IDAuMmVtIGF1dG87XFxuICAgIH1cXG5cXG4gICAgLmNpcmN1bGFyLWNoYXJ0IHtcXG4gICAgICBtYXgtaGVpZ2h0OiAxOTVweDtcXG4gICAgICBtYXgtd2lkdGg6IDgwJTtcXG4gICAgfVxcblxcbiAgICAuZGFtYWdlLXN0YXRzLWNvbnRhaW5lciB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAuY2hhbXBpb24tcm9sZSB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xcbiAgICAgIG1hcmdpbi1yaWdodDogMC41ZW07XFxuICAgIH1cXG5cXG4gICAgLmNoYW1waW9uLXJlc291cmNlIHtcXG4gICAgICBtYXJnaW4tbGVmdDogMC41ZW07XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcXG4gICAgfVxcblxcbiAgICAuY2hhbXBpb24tcm9sZXMge1xcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgfVxcblxcbiAgICAuc3BlbGwtaW1nIHtcXG4gICAgICBoZWlnaHQ6IDIuOGVtO1xcbiAgICAgIHdpZHRoOiAyLjhlbTtcXG4gICAgICBtYXJnaW46IGF1dG87XFxuICAgIH1cXG5cXG4gICAgLml0ZW0tZGV0YWlscy1jb250YWluZXIge1xcbiAgICAgIHJpZ2h0OiAyZW07XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0MTRweCkge1xcbiAgICAuY2hhbXBpb24tc3RhdHMtb3ZlcnZpZXcge1xcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICBtaW4td2lkdGg6IDE3cmVtO1xcbiAgICB9XFxuXFxuICAgIC5jaGFtcGlvbi1uYW1lIHtcXG4gICAgICBmb250LXNpemU6IDJyZW07XFxuICAgIH1cXG5cXG4gICAgLm1vZGFsLW5hdi1saW5rcyB7XFxuICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB9XFxuXFxuICAgIC5jbG9zZS1tb2RhbC1idG4td3JhcHBlciB7XFxuICAgICAgbGVmdDogMC43ZW07XFxuICAgIH1cXG5cXG4gICAgLmNsb3NlLW1vZGFsLWJ0biB7XFxuICAgICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgfVxcbiAgfVxcblxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEzMDBweCkge1xcbiAgICAjc2tpbnMtY29udGFpbmVyIHtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgbWF4LXdpZHRoOiA3MCU7XFxuICAgICAgbWluLWhlaWdodDogYXV0bztcXG4gICAgfVxcbiAgfVxcblxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDE5NTBweCkge1xcbiAgICAjc2tpbnMtY29udGFpbmVyIHtcXG4gICAgICBtYXgtd2lkdGg6IDUwJTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgZGVmaW5lKEl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBkZWZpbmUoR3AsIFwiY29uc3RydWN0b3JcIiwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICBkZWZpbmUoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIFwiY29uc3RydWN0b3JcIiwgR2VuZXJhdG9yRnVuY3Rpb24pO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIGRlZmluZShBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSwgYXN5bmNJdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIik7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBkZWZpbmUoR3AsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgZGVmaW5lKEdwLCBcInRvU3RyaW5nXCIsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9KTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCBpbiBtb2Rlcm4gZW5naW5lc1xuICAvLyB3ZSBjYW4gZXhwbGljaXRseSBhY2Nlc3MgZ2xvYmFsVGhpcy4gSW4gb2xkZXIgZW5naW5lcyB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09IFwib2JqZWN0XCIpIHtcbiAgICBnbG9iYWxUaGlzLnJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG4gIH0gZWxzZSB7XG4gICAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbiAgfVxufVxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mcm9udHBhZ2Uuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zyb250cGFnZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tb2RhbHMuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFscy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsInZhciBtYXAgPSB7XG5cdFwiLi9Bc3Nhc3Npbi5wbmdcIjogXCIuL3NyYy9pbWFnZXMvQXNzYXNzaW4ucG5nXCIsXG5cdFwiLi9CbG9vZCBXZWxsLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9CbG9vZCBXZWxsLnBuZ1wiLFxuXHRcIi4vQm90dG9tLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9Cb3R0b20ucG5nXCIsXG5cdFwiLi9Db250cm9sbGVyLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9Db250cm9sbGVyLnBuZ1wiLFxuXHRcIi4vQ291cmFnZS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvQ291cmFnZS5wbmdcIixcblx0XCIuL0NyaW1zb24gUnVzaC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvQ3JpbXNvbiBSdXNoLnBuZ1wiLFxuXHRcIi4vRW5lcmd5LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9FbmVyZ3kucG5nXCIsXG5cdFwiLi9GaWdodGVyLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9GaWdodGVyLnBuZ1wiLFxuXHRcIi4vRmxvdy5wbmdcIjogXCIuL3NyYy9pbWFnZXMvRmxvdy5wbmdcIixcblx0XCIuL0Z1cnkucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL0Z1cnkucG5nXCIsXG5cdFwiLi9Hcml0LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9Hcml0LnBuZ1wiLFxuXHRcIi4vSGVhdC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvSGVhdC5wbmdcIixcblx0XCIuL0p1bmdsZS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvSnVuZ2xlLnBuZ1wiLFxuXHRcIi4vTWFnZS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvTWFnZS5wbmdcIixcblx0XCIuL01hbmEucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL01hbmEucG5nXCIsXG5cdFwiLi9NYW5hbGVzcy5wbmdcIjogXCIuL3NyYy9pbWFnZXMvTWFuYWxlc3MucG5nXCIsXG5cdFwiLi9NYXJrc21hbi5wbmdcIjogXCIuL3NyYy9pbWFnZXMvTWFya3NtYW4ucG5nXCIsXG5cdFwiLi9NZWxlZS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvTWVsZWUucG5nXCIsXG5cdFwiLi9NaWRkbGUucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL01pZGRsZS5wbmdcIixcblx0XCIuL1JhZ2UucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL1JhZ2UucG5nXCIsXG5cdFwiLi9SYW5nZWQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL1JhbmdlZC5wbmdcIixcblx0XCIuL1NwZWNpYWxpc3QucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL1NwZWNpYWxpc3QucG5nXCIsXG5cdFwiLi9TdXBwb3J0LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9TdXBwb3J0LnBuZ1wiLFxuXHRcIi4vVGFuay5wbmdcIjogXCIuL3NyYy9pbWFnZXMvVGFuay5wbmdcIixcblx0XCIuL1RvcC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvVG9wLnBuZ1wiLFxuXHRcIi4vVXRpbGl0eS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvVXRpbGl0eS5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1hZ2VzIHN5bmMgXFxcXC4ocG5nfGpwZT9nfHN2ZykkXCI7IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn0iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGVzaGVldHMvZnJvbnRwYWdlLnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlc2hlZXRzL21vZGFscy5zY3NzJztcbmltcG9ydCBFbGVtZW50Q3JlYXRpb24gZnJvbSAnLi9oZWxwZXJzL2VsZW1lbnRDcmVhdGlvbic7XG5pbXBvcnQgeyBnZXRBbGxDaGFtcGlvbkRldGFpbHMgfSBmcm9tICcuL2NoYW1waW9uRGF0YS9nZXRBbGxDaGFtcGlvbnMnO1xuaW1wb3J0IFNlYXJjaGJhckNvbnRyb2xsZXIgZnJvbSAnLi9hcHBDb250cm9sL3NlYXJjaGJhckNvbnRyb2xsZXInO1xuaW1wb3J0IGJhY2tkcm9wQ2hhbmdlIGZyb20gJy4vYXBwQ29udHJvbC9iYWNrZHJvcENoYW5nZUludGVydmFsJztcblxuY29uc3QgY3JlYXRlU2VhcmNoRHJvcGRvd24gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGFsbENoYW1waW9ucyA9IGF3YWl0IGdldEFsbENoYW1waW9uRGV0YWlscygpO1xuICBjb25zdCBhbGxDaGFtcGlvbnNBcnJheSA9IE9iamVjdC52YWx1ZXMoYWxsQ2hhbXBpb25zKTtcblxuICBjb25zdCBzZWFyY2hDb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlYXJjaC1jb250YWluZXInKTtcbiAgc2VhcmNoQ29udGFpbmVycy5mb3JFYWNoKChzZWFyY2hDb250YWluZXIpID0+IHtcbiAgICBjb25zdCBhdXRvQ29tcGxldGVOYW1lcyA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAnZGl2JywgJ2F1dG8tY29tcGxldGUtbmFtZXMnLCBzZWFyY2hDb250YWluZXIsXG4gICAgKTtcbiAgICBhbGxDaGFtcGlvbnNBcnJheS5mb3JFYWNoKChjaGFtcGlvbikgPT4ge1xuICAgICAgY29uc3QgY2hhbXBpb25OYW1lID0gY2hhbXBpb24ubmFtZTtcbiAgICAgIGNvbnN0IGNoYW1waW9uSWQgPSBjaGFtcGlvbi5pZDtcbiAgICAgIGNvbnN0IGF1dG9Db21wbGV0ZU5hbWVXcmFwcGVyID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcyhcbiAgICAgICAgJ2RpdicsICdhdXRvLWNvbXBsZXRlLW5hbWUtd3JhcHBlcicsIGF1dG9Db21wbGV0ZU5hbWVzLFxuICAgICAgKTtcbiAgICAgIGF1dG9Db21wbGV0ZU5hbWVXcmFwcGVyLnRhYkluZGV4ID0gJy0xJztcbiAgICAgIGNvbnN0IGF1dG9Db21wbGV0ZU5hbWUgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKFxuICAgICAgICAnc3BhbicsICdhdXRvLWNvbXBsZXRlLW5hbWUnLCBhdXRvQ29tcGxldGVOYW1lV3JhcHBlcixcbiAgICAgICk7XG4gICAgICBhdXRvQ29tcGxldGVOYW1lLnRleHRDb250ZW50ID0gY2hhbXBpb25OYW1lO1xuICAgICAgYXV0b0NvbXBsZXRlTmFtZS5kYXRhc2V0LmNoYW1waW9uSWQgPSBjaGFtcGlvbklkO1xuICAgICAgYXV0b0NvbXBsZXRlTmFtZS5pZCA9IGNoYW1waW9uTmFtZTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCByZW5kZXJQYWdlID0gYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBjcmVhdGVTZWFyY2hEcm9wZG93bigpO1xuICBTZWFyY2hiYXJDb250cm9sbGVyLnNlYXJjaENvbnRhaW5lckxpc3RlbmVycygpO1xufTtcblxucmVuZGVyUGFnZSgpO1xuYmFja2Ryb3BDaGFuZ2UoKTtcbiJdLCJuYW1lcyI6WyJpbmRleCIsInNldEludGVydmFsIiwiYmFja2Ryb3BzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY3VycmVudEJhY2tkcm9wIiwicXVlcnlTZWxlY3RvciIsImxlbmd0aCIsImNsYXNzTmFtZSIsIkNoYW1waW9uTW9kYWxDb250cm9sbGVyIiwidG9nZ2xlQWN0aXZlQWJpbGl0eSIsImNsaWNrZWRBYmlsaXR5SWQiLCJhYmlsaXR5SW1hZ2VzIiwiYWJpbGl0eUluZm9zIiwiZm9yRWFjaCIsImltZyIsImNsYXNzTGlzdCIsInJlbW92ZSIsImluZm8iLCJjbGlja2VkSW1hZ2UiLCJhY3RpdmVBYmlsaXR5IiwiY2hhbmdlTW9kYWxUZW1wbGF0ZSIsImNsaWNrZWRNb2RhbE5hdkxpbmsiLCJ0ZW1wbGF0ZXMiLCJ0ZW1wbGF0ZSIsInRlbXBsYXRlTmFtZSIsImlkIiwic3Vic3RyaW5nIiwiaW5kZXhPZiIsImNob3NlblRlbXBsYXRlIiwic3R5bGUiLCJkaXNwbGF5IiwiaGlkZGVuVGVtcGxhdGUiLCJkaXNwYXlJdGVtRGV0YWlscyIsImhvdmVyZWRJdGVtSW1hZ2UiLCJpdGVtRGV0YWlscyIsIm5leHRFbGVtZW50U2libGluZyIsImhpZGVJdGVtRGV0YWlscyIsInVuaG92ZXJlZEl0ZW1JbWFnZSIsInRvZ2dsZVNraW5JbWFnZXMiLCJhcnJvd0NsYXNzTGlzdCIsInNraW5JbWFnZXNDb250YWluZXIiLCJjdXJyZW50U2hvd25JbWFnZSIsInNraW5OYW1lIiwiZmlyc3RJbWFnZSIsImZpcnN0RWxlbWVudENoaWxkIiwibGFzdEltYWdlIiwibGFzdEVsZW1lbnRDaGlsZCIsImluY2x1ZGVzIiwidGV4dENvbnRlbnQiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwiY2xlYXJNYWluTW9kYWwiLCJtYWluQ29udGFpbmVyIiwiY2hhbXBpb25OYW1lIiwiY2hhbXBpb25UaXRsZSIsImNoYW1waW9uUm9sZXMiLCJjaGFtcGlvbkxvcmUiLCJhYmlsaXR5RGV0YWlscyIsImNoYW1waW9uVGlwcyIsIm1haW5Nb2RhbEhlYWRlciIsImVsZW1lbnQiLCJjdXJyZW50RWxlbWVudCIsImNsZWFyU3RhdHNNb2RhbCIsInN0YXRzQ29udGFpbmVyIiwiY2hhbXBpb25TdGF0c092ZXJ2aWV3IiwiYWxsZGFtYWdlU3RhdHMiLCJpdGVtU2V0c0NvbnRhaW5lciIsImJlc3RNYXRjaHVwcyIsIndvcnN0TWF0Y2h1cHMiLCJzdGF0c01vZGFsSGVhZGVyIiwiZGFtYWdlU3RhdCIsImRhbWFnZVN0YXRFbGVtZW50Iiwic3RhdHNNb2RhbENvbnRlbnQiLCJjb250ZW50IiwiY29udGVudEVsZW1lbnQiLCJjbGVhclNraW5zTW9kYWwiLCJjbG9zZUNoYW1waW9uTW9kYWwiLCJtb2RhbCIsInNraW5zQ29udGFpbmVyIiwibW9kYWxDbGlja0V2ZW50cyIsImV2ZW50IiwidGFyZ2V0IiwiZGFzaEluZGV4IiwiYWJpbGl0eUlkIiwic2xpY2UiLCJBcnJheSIsImZyb20iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibW9kYWxNb3VzZW92ZXJFdmVudHMiLCJtb2RhbE1vdXNlb3V0RXZlbnRzIiwicmVsYXRlZFRhcmdldCIsInBhcmVudE5vZGUiLCJtb2RhbEFycm93RXZlbnRzIiwia2V5IiwicmlnaHRBcnJvdyIsImxlZnRBcnJvdyIsIm1vZGFsQ2hhbmdlTGlzdGVuZXJzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImdldENoYW1waW9uRGV0YWlscyIsImdldENoYW1waW9uU3RhdHMiLCJjaGFtcGlvbkRldGFpbHNNb2RhbCIsImNoYW1waW9uU3RhdHNNb2RhbCIsImNoYW1waW9uU2tpbnNNb2RhbCIsIkNoYW1waW9uRmlsdGVyIiwiU29ydENoYW1waW9ucyIsImdldEFsbENoYW1waW9uRGV0YWlscyIsImdldEFsbENoYW1waW9uU3RhdHMiLCJDaGFtcGlvbnNQYWdlQ29udHJvbGxlciIsImRpc3BsYXlEcm9wZG93bk9wdGlvbnMiLCJkcm9wZG93bk9wdGlvbnMiLCJhbGxEcm9wZG93bk9wdGlvbnMiLCJvcHRpb25zIiwib3B0aW9uc1N0eWxlIiwiZHJvcGRvd25PcHRpb25zU3R5bGUiLCJoaWRlRHJvcGRvd25PcHRpb25zIiwiZHJvcGRvd25PcHRpb25zVG9nZ2xlIiwiZHJvcGRvd25CdG4iLCJwYXJlbnRFbGVtZW50IiwiZGlzcGxheUNoYW1waW9uTW9kYWwiLCJjaGFtcGlvbklkIiwiY2hhbXBpb25EZXRhaWxzIiwiY2hhbXBpb25TdGF0cyIsInNlbGVjdExhbmVGaWx0ZXJPcHRpb24iLCJjbGlja2VkTGFuZU9wdGlvbiIsImNoYW1waW9uc1NlY3Rpb24iLCJhY3RpdmVMYW5lT3B0aW9uIiwidmlzaWJpbGl0eSIsImFkZCIsImNoZWNrTGFuZUZpbHRlck9wdGlvbiIsImFsbENoYW1waW9uU3RhdHMiLCJsYW5lTmFtZSIsImZpbHRlckJ5TGFuZSIsImNoZWNrU29ydGluZ09wdGlvbiIsImFjdGl2ZVNvcnRpbmdPcHRpb24iLCJzb3J0QnlEZWZhdWx0T3JkZXIiLCJzb3J0Q2hhbXBpb25zQnlXaW5yYXRlIiwic29ydENoYW1waW9uc0J5UGlja3JhdGUiLCJzb3J0Q2hhbXBpb25zQnlEYW1hZ2VEb25lIiwiY2hlY2tBY3RpdmVSb2xlT3B0aW9ucyIsImFsbENoYW1waW9uRGV0YWlscyIsImFjdGl2ZVJvbGVPcHRpb25zIiwiYWN0aXZlUm9sZXMiLCJtYXAiLCJhY3RpdmVSb2xlT3B0aW9uIiwiYWN0aXZlUm9sZSIsImZpbHRlckJ5Um9sZSIsImNoZWNrQWN0aXZlRGlmZmljdWx0eU9wdGlvbnMiLCJhY3RpdmVEaWZmaWN1bHR5T3B0aW9ucyIsImFjdGl2ZURpZmZpY3VsdGllcyIsImFjdGl2ZURpZmZpY3VsdHlPcHRpb24iLCJhY3RpdmVEaWZmaWN1bHR5IiwiZmlsdGVyQnlEaWZmaWN1bHR5Iiwic2VsZWN0TXVsdGlEcm9wZG93bk9wdGlvbiIsImRyb3Bkb3duT3B0aW9uIiwiZGVzZWxlY3REcm9wZG93bk9wdGlvbiIsInRvZ2dsZURyb3Bkb3duT3B0aW9uIiwic2VsZWN0U2luZ2xlRHJvcGRvd25PcHRpb24iLCJhY3RpdmVEcm9wZG93bk9wdGlvbiIsInJlZGlyZWN0VG9Gcm9udFBhZ2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJjaGFtcGlvbnNQYWdlQ2xpY2tFdmVudHMiLCJjaGVja09wdGlvbnMiLCJoaWRlQ2hhbXBpb25zU2VjdGlvbiIsInNob3dDaGFtcGlvbnNTZWN0aW9uIiwicmVtb3ZlQ2hhbXBpb25zUGFnZUxpc3RlbmVyIiwiY2hhbXBpb25zUGFnZSIsImFkZENoYW1waW9uc1BhZ2VMaXN0ZW5lciIsInNob3dMb2FkZXIiLCJsb2FkZXIiLCJoaWRlTG9hZGVyIiwiZmlsdGVyQW5kU29ydENoYW1waW9uc1NlY3Rpb24iLCJ3YWl0VGltZSIsInNldFRpbWVvdXQiLCJkYXRhc2V0IiwiY2hhbXBpb25zUGFnZUtleUV2ZW50cyIsImFjdGl2ZUVsZW1lbnQiLCJjaGFtcGlvbnNQYWdlTGlzdGVuZXJzIiwiY3JlYXRlQ2hhbXBpb25Db250YWluZXIiLCJyZW5kZXJBbGxDaGFtcGlvbnMiLCJjaGFtcGlvbiIsImNsZWFyQ2hhbXBpb25zU2VjdGlvbiIsInNob3dDaGFtcGlvbiIsImhpZGVDaGFtcGlvbiIsImNsaWNrZWRMYW5lIiwiYWxsQ2hhbXBpb25zIiwicmVzdWx0cyIsInB1c2giLCJQcm9taXNlIiwiYWxsIiwiY2hhbXBpb25MYW5lIiwibGFuZSIsImNoYW1waW9uRWxlbWVudCIsInRvTG93ZXJDYXNlIiwiY2hhbXBpb25FbGVtZW50cyIsInJvbGVNYXRjaEZvdW5kIiwicm9sZSIsInRhZ3MiLCJjaGFtcGlvblJvbGUiLCJjYXRlZ29yaXNlRGlmZmljdWx0eU51bSIsImRpZmZpY3VsdHlOdW0iLCJkaWZmaWN1bHR5TWF0Y2hGb3VuZCIsImRpZmZpY3VsdHkiLCJjaGFtcGlvbkRpZmZpY3VsdHlOdW0iLCJjaGFtcGlvbkRpZmZpY3VsdHkiLCJTZWFyY2hiYXJDb250cm9sbGVyIiwic2hvd0F1dG9Db21wbGV0ZU5hbWVzIiwic2VhcmNoQ29udGFpbmVyIiwiYXV0b0NvbXBsZXRlTmFtZXMiLCJoaWRlQXV0b0NvbXBsZXRlTmFtZXMiLCJhdXRvQ29tcGxldGVOYW1lRWxlbWVudHMiLCJhdXRvQ29tcGxldGVOYW1lRWxlbWVudCIsInNlYXJjaGJhckZvY3VzSW5FdmVudCIsImZvY3VzIiwic2VhcmNoYmFyRm9jdXNvdXRFdmVudCIsInNlYXJjaEJhcklucHV0RXZlbnQiLCJpbnB1dFZhbHVlIiwidmFsdWUiLCJhdXRvQ29tcGxldGVOYW1lIiwibmFtZSIsInNlYXJjaGJhcktleWRvd25FdmVudHMiLCJwcmV2ZW50RGVmYXVsdCIsImFjdGlvbiIsIkFycm93VXAiLCJBcnJvd0Rvd24iLCJmaWx0ZXIiLCJpc1Nob3dpbmciLCJ1bmRlZmluZWQiLCJnb1RvU3RhcnQiLCJjaGlsZHJlbiIsInNlYXJjaENvbnRhaW5lckNsYXNzTmFtZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJzZWFyY2hiYXJDbGlja0V2ZW50cyIsImNsaWNrQXV0b0NvbXBsZXRlTmFtZSIsImZpcnN0Q2hpbGQiLCJzZWFyY2hDb250YWluZXJMaXN0ZW5lcnMiLCJ2aXNpYmxpdHkiLCJyZWNyZWF0ZUNoYW1waW9uc1NlY3Rpb24iLCJjaGFtcGlvbnMiLCJmaWx0ZXJDaGFtcGlvbnMiLCJmaWx0ZXJlZENoYW1waW9uU3RhdHMiLCJmaWx0ZXJlZENoYW1waW9uc1NvcnRlZCIsInNvcnQiLCJhIiwiYiIsIndpblJhdGUiLCJwaWNrUmF0ZSIsImRhbWFnZVBlck1hdGNoIiwidG90YWxEYW1hZ2UiLCJmZXRjaENoYW1waW9uRGV0YWlscyIsImZldGNoIiwibW9kZSIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJnZXRDaGFtcGlvblBhc3NpdmVzIiwicGFzc2l2ZURhdGEiLCJwYXNzaXZlIiwicGFzc2l2ZU5hbWUiLCJwYXNzaXZlRGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsInBhc3NpdmVJZCIsImltYWdlIiwiZnVsbCIsInBhc3NpdmVJbWdVcmwiLCJnZXRDaGFtcGlvblNwZWxscyIsInNwZWxsc0RhdGEiLCJzcGVsbHMiLCJzcGVsbCIsInNwZWxsT2JqZWN0IiwiY29zdEJ1cm4iLCJjb3N0VHlwZSIsImNvb2xkb3duIiwiY29vbGRvd25CdXJuIiwiaW1nVXJsIiwiY2hhbXBpb25QYXNzaXZlIiwidGl0bGUiLCJyZXBsYWNlIiwidG9VcHBlckNhc2UiLCJwYXJ0eXBlIiwiYWxseXRpcHMiLCJsb3JlIiwicm9sZXMiLCJza2lucyIsInJlc291cmNlIiwidGlwcyIsImZldGNoQ2hhbXBpb25TdGF0cyIsImRldlVybCIsInRvRml4ZWQiLCJrZGEiLCJrZGFSYXRpbyIsIml0ZW1TZXRzIiwiaXRlbUNob2ljZXMiLCJiZXN0TWF0Y2hVcHMiLCJtYXRjaFVwcyIsIndvcnN0TWF0Y2hVcHMiLCJ2ZXJzaW9uc1Jlc3BvbnNlIiwidmVyc2lvbnMiLCJsYXRlc3RWZXJzaW9uIiwiY2hhbXBpb25zUmVzcG9uc2UiLCJmZXRjaEFsbEl0ZW1zIiwidmVyc2lvblJlc3BvbnNlIiwiYWxsSXRlbXMiLCJJdGVtSW5mbyIsIml0ZW1JZCIsImdldEl0ZW1EZXRhaWxzIiwiaXRlbUltYWdlSWQiLCJpbWFnZVVybCIsImNvbXBvbmVudEl0ZW1JZHMiLCJjb21wb25lbnRJdGVtRGV0YWlscyIsImNvc3QiLCJnb2xkIiwidG90YWwiLCJnZXRJdGVtSW1hZ2UiLCJjb21wb25lbnRJdGVtcyIsImdldENvbXBvbmVudEl0ZW1zIiwiRWxlbWVudENyZWF0aW9uIiwiY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzIiwidGFnIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiY3JlYXRlQ2hpbGRFbGVtZW50V2l0aElkIiwiY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzQW5kSWQiLCJjcmVhdGVDaGlsZEltYWdlRWxlbWVudFdpdGhDbGFzcyIsInNyYyIsImFsdCIsImltYWdlRWxlbWVudCIsInJlbmRlckhlYWRlckRldGFpbHMiLCJpbWFnZXMiLCJjaGFtcGlvbkRhdGEiLCJjaGFtcGlvblJvbGVOYW1lIiwiY2hhbXBpb25SZXNvdXJjZSIsImNoYW1waW9uUmVzb3VyY2VOYW1lIiwibG9yZUNvbnRhaW5lciIsImlubmVySFRNTCIsImFiaWxpdGllc0NvbnRhaW5lciIsImFiaWxpdHlJbWdzIiwicGFzc2l2ZUltZyIsImltZ0xhYmVsIiwic3BlbGxJbWciLCJpIiwiYWJpbGl0eUluZm8iLCJhYmlsaXR5TmFtZSIsImFiaWxpdHlEZXNjcmlwdGlvbiIsImFiaWxpdHlMYWJlbCIsImNoYW1waW9uVGlwc1NlY3Rpb24iLCJjaGFtcGlvblRpcCIsInNraW4iLCJudW0iLCJzaG93bkltYWdlQ29udGFpbmVyIiwic2hvd25JbWFnZVVybCIsImltYWdlQ29udGFpbmVyIiwicmVuZGVyU3RhdE92ZXJ2aWV3IiwicmVuZGVyRGFtYWdlU3RhdHMiLCJyZW5kZXJDaGFtcGlvbkxhbmUiLCJyZW5kZXJNYXRjaHVwc0luZm8iLCJzdGF0c092ZXJ2aWV3IiwidHJ1ZURhbWFnZUNpcmNsZVN0cm9rZSIsInBoeXNpY2FsRGFtYWdlQ2lyY2xlU3Ryb2tlIiwibWFnaWNEYW1hZ2VDaXJjbGVTdHJva2UiLCJ0cnVlRGFtYWdlUGVyY2VudCIsIk1hdGgiLCJyb3VuZCIsInRydWVEYW1hZ2UiLCJwZXJjZW50YWdlIiwicGh5c2ljYWxEYW1hZ2VQZXJjZW50IiwicGh5c2ljYWxEYW1hZ2UiLCJtYWdpY0RhbWFnZVBlcmNlbnQiLCJtYWdpY0RhbWFnZSIsInN0cm9rZURhc2hhcnJheSIsInRvdGFsRGFtYWdlVGV4dCIsInRydWVEYW1hZ2VWYWx1ZSIsInBoeXNpY2FsRGFtYWdlVmFsdWUiLCJtYWdpY0RhbWFnZVZhbHVlIiwiZ2V0QWxsSXRlbXMiLCJjaGFtcGlvbkl0ZW1CdWlsZHMiLCJpdGVtU2V0IiwiaXRlbVNldENvbnRhaW5lciIsIml0ZW0iLCJpdGVtSW5mbyIsImdldEl0ZW1JbmZvIiwibWFpbkNvbXBvbmVudENvbnRhaW5lciIsIm1haW5JdGVtIiwiaXRlbURldGFpbHNDb250YWluZXIiLCJuYW1lRWxlbWVudCIsImRlc2NyaXB0aW9uRWxlbWVudCIsIml0ZW1Db3N0IiwiY29zdExhYmVsIiwiY29zdEFtb3VudCIsImNvbXBvbmVudEl0ZW1zQ29udGFpbmVyIiwiY29tcG9uZW50SXRlbSIsImNvbXBvbmVudEl0ZW1FbGVtZW50IiwiY29tcG9uZW50SXRlbURldGFpbHNDb250YWluZXIiLCJjb21wb25lbnRJdGVtTmFtZSIsImNvbXBvbmVudEl0ZW1Db3N0IiwiY29tcG9uZW50SXRlbUNvc3RMYWJlbCIsImNvbXBvbmVudEl0ZW1BbW91bnQiLCJiZXN0TWF0Y2h1cHNTZWN0aW9uIiwiYmVzdE1hdGNodXBzRWxlbWVudCIsImJlc3RNYXRjaHVwc0RhdGEiLCJ3b3JzdE1hdGNodXBzU2VjdGlvbiIsIndvcnN0TWF0Y2h1cHNFbGVtZW50Iiwid29yc3RNYXRjaHVwc0RhdGEiLCJpbXBvcnRBbGwiLCJyIiwia2V5cyIsInJlcXVpcmUiLCJjb250ZXh0IiwibW9kYWxDb250YWluZXIiLCJjb250YWluZXIiLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZFNpemUiLCJyYXRlVGV4dCIsInJhdGVUeXBlIiwiY2hhbXBpb25SYXRlIiwibGFiZWwiLCJyYXRlVmFsdWUiLCJsb3dlckNhc2VUZXh0IiwiY2hhbXBpb25MYW5lSW5mbyIsImxhbmVUZXh0IiwibGFuZUljb24iLCJkYW1hZ2VUeXBlIiwiZGFtYWdlVmFsdWUiLCJkYW1hZ2VQZXJjZW50YWdlIiwiZGFtYWdlQ29udGFpbmVyIiwiZGFtYWdlU3RhdHMiLCJkYW1hZ2VWYWx1ZUVsZW1lbnQiLCJkYW1hZ2VQZXJjZW50YWdlRWxlbWVudCIsIm1hdGNodXBzRWxlbWVudCIsIm1hdGNodXBzRGF0YSIsIm1hdGNodXAiLCJtYXRjaHVwSW5mbyIsImVuZW15Q2hhbXBpb25OYW1lIiwiZW5lbXlDaGFtcGlvbklkIiwiZW5lbXlDaGFtcGlvbkltZ1VybCIsIm1hdGNodXBTdGF0cyIsImVuZW15Q2hhbXBpb25OYW1lRWxlbWVudCIsIndpbnJhdGVBZ2FpbnN0Iiwid2lucmF0ZUFnYWluc3RMYWJlbCIsImNvbG9yIiwid2lucmF0ZUFnYWluc3RQZXJjZW50YWdlIiwid2luUmF0ZUFnYWluc3QiLCJnYW1lc1BsYXllZEFnYWluc3QiLCJtYXRjaGVzIiwiY2hhbXBpb25Db250YWluZXIiLCJjaGFtcGlvbkltZ1VybCIsImNoYW1waW9uSW1nIiwidGFiSW5kZXgiLCJjaGFtcGlvbk5hbWVXcmFwcGVyIiwiYmFja2Ryb3BDaGFuZ2UiLCJjcmVhdGVTZWFyY2hEcm9wZG93biIsImFsbENoYW1waW9uc0FycmF5IiwiT2JqZWN0IiwidmFsdWVzIiwic2VhcmNoQ29udGFpbmVycyIsImF1dG9Db21wbGV0ZU5hbWVXcmFwcGVyIiwicmVuZGVyUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=