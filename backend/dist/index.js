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
/* harmony import */ var _championData_getLatestVersion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../championData/getLatestVersion */ "./src/championData/getLatestVersion.js");













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
      var modal, latestVersion, championDetails, championStats, skinImagesContainer;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              modal = document.querySelector('.modal');
              _context.next = 3;
              return (0,_championData_getLatestVersion__WEBPACK_IMPORTED_MODULE_11__["default"])();

            case 3:
              latestVersion = _context.sent;
              _context.next = 6;
              return (0,_championData_championDetails__WEBPACK_IMPORTED_MODULE_2__["default"])(championId, latestVersion);

            case 6:
              championDetails = _context.sent;
              _context.next = 9;
              return (0,_championData_championStats__WEBPACK_IMPORTED_MODULE_3__["default"])(championId);

            case 9:
              championStats = _context.sent;
              skinImagesContainer = document.querySelector('.skin-images-container');
              /*
                purpose of the if statement is to prevent spam clicks from rendering
                duplicate content onto the champion modal.
              */

              if (!skinImagesContainer) {
                (0,_templates_championDetailsModal__WEBPACK_IMPORTED_MODULE_4__["default"])(championDetails);
                (0,_templates_championStatsModal__WEBPACK_IMPORTED_MODULE_5__["default"])(championDetails, championStats, latestVersion);
                (0,_templates_championSkinsModal__WEBPACK_IMPORTED_MODULE_6__["default"])(championDetails);
              }

              modal.style.display = 'block';
              _championModalController__WEBPACK_IMPORTED_MODULE_7__["default"].modalChangeListeners();

            case 14:
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
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(championId, latestVersion) {
    var response, champions, championDetails;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("https://ddragon.leagueoflegends.com/cdn/".concat(latestVersion, "/data/en_US/champion/").concat(championId, ".json"), {
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

  return function fetchChampionDetails(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var getChampionPassives = function getChampionPassives(championDetails, latestVersion) {
  var passiveData = championDetails.passive;
  var passiveName = passiveData.name;
  var passiveDescription = passiveData.description;
  var passiveId = passiveData.image.full;
  var passiveImgUrl = "https://ddragon.leagueoflegends.com/cdn/".concat(latestVersion, "/img/passive/").concat(passiveId);
  return {
    passiveName: passiveName,
    passiveDescription: passiveDescription,
    passiveImgUrl: passiveImgUrl
  };
};

var getChampionSpells = function getChampionSpells(championDetails, latestVersion) {
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
      imgUrl: "https://ddragon.leagueoflegends.com/cdn/".concat(latestVersion, "/img/spell/").concat(spell.id, ".png")
    };
    spells.push(spellObject);
  });
  return spells;
};

var getChampionDetails = /*#__PURE__*/function () {
  var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(championId, latestVersion) {
    var championDetails, championPassive, spells, championTitle;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetchChampionDetails(championId, latestVersion);

          case 2:
            championDetails = _context2.sent;
            championPassive = getChampionPassives(championDetails, latestVersion);
            spells = getChampionSpells(championDetails, latestVersion); // Make first letter of the champion title a capital letter.

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

  return function getChampionDetails(_x3, _x4) {
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

/***/ "./src/championData/getLatestVersion.js":
/*!**********************************************!*\
  !*** ./src/championData/getLatestVersion.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);



/* Retrives the latest static data avaliable for champions */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
  var versionResponse, versions, latestVersion;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
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
          return _context.abrupt("return", latestVersion);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));

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





/* Fetches all the items a champion can buy in a match */
var fetchAllItems = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(latestVersion) {
    var response, allItems;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("https://ddragon.leagueoflegends.com/cdn/".concat(latestVersion, "/data/en_US/item.json"));

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            allItems = _context.sent;
            return _context.abrupt("return", allItems.data);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchAllItems(_x) {
    return _ref.apply(this, arguments);
  };
}();

var ItemInfo = /*#__PURE__*/function () {
  function ItemInfo(itemId, allItems, latestVersion) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ItemInfo);

    this.itemId = itemId;
    this.itemDetails = this.getItemDetails(allItems);
    this.latestVersion = latestVersion;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ItemInfo, [{
    key: "getItemDetails",
    value: function getItemDetails(allItems) {
      var itemDetails = allItems[this.itemId];
      return itemDetails;
    }
  }, {
    key: "getItemImage",
    value: function getItemImage() {
      var itemImageId = this.itemDetails.image.full;
      var imageUrl = "https://ddragon.leagueoflegends.com/cdn/".concat(this.latestVersion, "/img/item/").concat(itemImageId);
      return imageUrl;
    }
    /* gets info on the items used to create the instance item */

  }, {
    key: "getComponentItems",
    value: function () {
      var _getComponentItems = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(allItems) {
        var _this = this;

        var componentItemIds, componentItemDetails;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                componentItemIds = this.itemDetails.from;

                if (!(componentItemIds === undefined)) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt("return", []);

              case 3:
                componentItemDetails = componentItemIds.map(function (itemId) {
                  return {
                    name: allItems[itemId].name,
                    imageUrl: "https://ddragon.leagueoflegends.com/cdn/".concat(_this.latestVersion, "/img/item/").concat(itemId, ".png"),
                    cost: allItems[itemId].gold.total
                  };
                });
                return _context2.abrupt("return", componentItemDetails);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getComponentItems(_x2) {
        return _getComponentItems.apply(this, arguments);
      }

      return getComponentItems;
    }()
  }, {
    key: "getItemInfo",
    value: function getItemInfo(allItems) {
      if (this.itemDetails === undefined) {
        return false;
      }

      var name = this.itemDetails.name;
      var description = this.itemDetails.description;
      var cost = this.itemDetails.gold.total;
      var imageUrl = this.getItemImage(allItems);
      var componentItems = this.getComponentItems(allItems);
      var tags = this.itemDetails.tags;
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
      var _getAllItems = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee3(latestVersion) {
        var allItems;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                allItems = fetchAllItems(latestVersion);
                return _context3.abrupt("return", allItems);

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getAllItems(_x3) {
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
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(championData, championStats, latestVersion) {
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
            return _championData_itemInfo__WEBPACK_IMPORTED_MODULE_2__["default"].getAllItems(latestVersion);

          case 26:
            allItems = _context.sent;
            championItemBuilds = document.querySelector('.champion-item-builds');
            itemSetsContainer = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_4__["default"].createChildElementWithClass('div', 'item-sets-container', championItemBuilds);
            itemSets.forEach(function (itemSet) {
              var itemSetContainer = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_4__["default"].createChildElementWithClass('div', 'item-set-container', itemSetsContainer);
              itemSet.forEach(function (itemId) {
                var item = new _championData_itemInfo__WEBPACK_IMPORTED_MODULE_2__["default"](itemId, allItems, latestVersion);
                var itemInfo = item.getItemInfo(allItems);

                if (itemInfo && !itemInfo.tags.includes('Trinket') && !itemInfo.tags.includes('Consumable')) {
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
                  Promise.resolve(componentItems).then(function (items) {
                    var componentItemsContainer = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_4__["default"].createChildElementWithClass('div', 'component-items-container', mainComponentContainer);
                    items.forEach(function (componentItem) {
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
                  });
                }
              });
            });
            /* Renders the matchups section of the champion modal stats page */

            bestMatchupsSection = document.querySelector('.best-matchups-section');
            bestMatchupsElement = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_4__["default"].createChildElementWithClass('div', 'best-matchups matchups', bestMatchupsSection);
            bestMatchupsData = championStats.bestMatchUps;
            (0,_renderHelpers__WEBPACK_IMPORTED_MODULE_3__.renderMatchupsInfo)(bestMatchupsElement, bestMatchupsData, latestVersion);
            worstMatchupsSection = document.querySelector('.worst-matchups-section');
            worstMatchupsElement = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_4__["default"].createChildElementWithClass('div', 'worst-matchups matchups', worstMatchupsSection);
            worstMatchupsData = championStats.worstMatchUps;
            (0,_renderHelpers__WEBPACK_IMPORTED_MODULE_3__.renderMatchupsInfo)(worstMatchupsElement, worstMatchupsData, latestVersion);

          case 38:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function championStatsModal(_x, _x2, _x3) {
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

var images = importAll(__webpack_require__("./src/assets/images sync \\.(png|jpe?g|svg)$"));

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

var renderMatchupsInfo = function renderMatchupsInfo(matchupsElement, matchupsData, latestVersion) {
  matchupsData.forEach(function (matchup) {
    var matchupInfo = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_0__["default"].createChildElementWithClass('div', 'matchup-info', matchupsElement);
    var enemyChampionName = matchup[1].name;
    var enemyChampionId = matchup[0];
    var enemyChampionImgUrl = "https://ddragon.leagueoflegends.com/cdn/".concat(latestVersion, "/img/champion/").concat(enemyChampionId, ".png");
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --rasin-black: #1d1e2c;\n  --transparent-rasin-black: #1d1e2c91;\n  --dark-gold: #927543;\n  --light-gold: #c7ab6e;\n}\n\n#front-page {\n  background-color: var(--rasin-black);\n  min-height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: -4;\n  font-family: \"Barlow\", sans-serif;\n}\n#front-page .app-name-container {\n  background-color: var(--dark-gold);\n  padding: 0.3em;\n  border-radius: 8px 0px 8px 0;\n  cursor: pointer;\n}\n#front-page .app-name {\n  font-weight: 900;\n  font-size: 2rem;\n  letter-spacing: 3px;\n}\n#front-page .app-name-container:hover {\n  color: var(--dark-gold);\n  background-color: white;\n}\n#front-page .page-header {\n  display: flex;\n  justify-content: space-evenly;\n  color: white;\n  background-color: var(--rasin-black);\n  max-width: 100%;\n  padding: 1em 0;\n  border-style: solid;\n  border-color: var(--dark-gold);\n  border-width: 0 0 2px 0;\n  align-items: center;\n}\n#front-page .app-name-display-container {\n  position: absolute;\n  top: 0;\n  letter-spacing: 3px;\n  background-color: #181a20b3;\n  padding: 0.2em;\n  border-radius: 11px;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  padding-top: 6em;\n}\n@media (max-width: 550px) {\n  #front-page .app-name-display-container {\n    padding-top: 2em;\n  }\n}\n#front-page .app-name-display {\n  font-size: 2em;\n  margin-bottom: 6px;\n  color: var(--light-gold);\n}\n#front-page .tagline-container {\n  color: white;\n  font-size: 1.2em;\n  margin-top: 2em;\n}\n#front-page .tagline-match-count {\n  font-weight: 600;\n  font-size: 1.3em;\n}\n#front-page .search {\n  padding: 0.5em;\n  min-width: 18em;\n  background: #e2e4e9;\n  outline: none;\n  border-style: none;\n  color: var(--rasin-black);\n  font-weight: 600;\n  min-height: 2.6em;\n  font-size: 1em;\n}\n#front-page .splash-section {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: relative;\n  align-items: center;\n}\n#front-page .backdrop-img {\n  max-width: 100%;\n  min-height: 50vh;\n  background-color: transparent;\n  color: #222;\n  opacity: 0.7;\n}\n#front-page .backdrop {\n  z-index: -2;\n  position: relative;\n  width: 100%;\n  min-height: 32em;\n}\n#front-page .backdrop::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  z-index: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-image: linear-gradient(90deg, #14181d, rgba(20, 24, 29, 0.985565) 0.97%, rgba(20, 24, 29, 0.945131) 2.07833%, rgba(20, 24, 29, 0.883007) 3.29667%, rgba(20, 24, 29, 0.803499) 4.60167%, rgba(20, 24, 29, 0.710915) 5.96667%, rgba(20, 24, 29, 0.609563) 7.365%, rgba(20, 24, 29, 0.50375) 8.77167%, rgba(20, 24, 29, 0.397784) 10.16%, rgba(20, 24, 29, 0.295973) 11.505%, rgba(20, 24, 29, 0.202624) 12.78%, rgba(20, 24, 29, 0.122044) 13.95833%, rgba(20, 24, 29, 0.0585423) 15.01667%, rgba(20, 24, 29, 0.0164249) 15.92833%, rgba(20, 24, 29, 0) 16.66667%, rgba(20, 24, 29, 0) 83.33333%, rgba(20, 24, 29, 0.0164249) 84.07167%, rgba(20, 24, 29, 0.0585423) 84.98333%, rgba(20, 24, 29, 0.122044) 86.04167%, rgba(20, 24, 29, 0.202624) 87.22%, rgba(20, 24, 29, 0.295973) 88.495%, rgba(20, 24, 29, 0.397784) 89.84%, rgba(20, 24, 29, 0.50375) 91.22833%, rgba(20, 24, 29, 0.609563) 92.635%, rgba(20, 24, 29, 0.710915) 94.03333%, rgba(20, 24, 29, 0.803499) 95.39833%, rgba(20, 24, 29, 0.883007) 96.70333%, rgba(20, 24, 29, 0.945131) 97.92167%, rgba(20, 24, 29, 0.985565) 99.03%, #14181d), linear-gradient(0deg, #14181d, #14181d 21.48148%, rgba(20, 24, 29, 0.985565) 23.63704%, rgba(20, 24, 29, 0.945131) 26.1%, rgba(20, 24, 29, 0.883007) 28.80741%, rgba(20, 24, 29, 0.803499) 31.70741%, rgba(20, 24, 29, 0.710915) 34.74074%, rgba(20, 24, 29, 0.609563) 37.84815%, rgba(20, 24, 29, 0.50375) 40.97407%, rgba(20, 24, 29, 0.397784) 44.05926%, rgba(20, 24, 29, 0.295973) 47.04815%, rgba(20, 24, 29, 0.202624) 49.88148%, rgba(20, 24, 29, 0.122044) 52.5%, rgba(20, 24, 29, 0.0585423) 54.85185%, rgba(20, 24, 29, 0.0164249) 56.87778%, rgba(20, 24, 29, 0) 58.51852%);\n}\n#front-page .backdrop .shown {\n  opacity: 0.7;\n  transition: opacity 0.6s ease-in;\n}\n#front-page .backdrop .hidden {\n  opacity: 0;\n  position: fixed;\n  transition: opacity 0.6s ease-in;\n}\n#front-page #tpa-backdrop.hidden {\n  transition: none;\n}\n#front-page .slogan-container {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 16em;\n}\n#front-page .slogan-container .slogan-1 {\n  color: white;\n  font-size: 1.3rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  text-align: center;\n  font-family: \"Barlow\", sans-serif;\n}\n#front-page .slogan-container .slogan-2 {\n  color: white;\n  font-size: 1.8rem;\n  font-weight: 900;\n  text-transform: uppercase;\n  text-align: center;\n  font-family: \"Barlow\", sans-serif;\n}\n@media (max-width: 550px) {\n  #front-page .slogan-container {\n    top: 12em;\n  }\n}\n#front-page .mobile-discover-btn-container {\n  border-style: solid;\n  color: var(--rasin-black);\n  border-color: var(--rasin-black);\n  background-color: var(--dark-gold);\n  border-radius: 75% 10%/0% 75%;\n  text-decoration: none;\n  position: relative;\n  bottom: 10em;\n}\n@media (max-width: 550px) {\n  #front-page .mobile-discover-btn-container {\n    margin-bottom: 1em;\n    bottom: 5em;\n  }\n}\n#front-page .mobile-discover-btn-container:hover {\n  background-color: var(--light-gold);\n}\n#front-page .front-page-btn {\n  color: white;\n  background: transparent;\n  padding: 0.5em;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  border-style: none;\n  background-color: var(--dark-gold);\n}\n#front-page .front-page-btn:hover {\n  background-color: var(--light-gold);\n}\n#front-page .discover-btn-container {\n  position: absolute;\n  margin-bottom: 3em;\n  display: none;\n  top: 21.5em;\n}\n#front-page .discover-btn {\n  border: solid;\n  color: var(--rasin-black);\n  border-color: var(--rasin-black);\n  background-color: var(--dark-gold);\n  font-size: 1.2em;\n  border-radius: 75% 10%/0% 75%;\n  text-decoration: none;\n  padding: 0.5em;\n}\n#front-page .discover-btn:hover {\n  background-color: var(--light-gold);\n}\n#front-page .navigation-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n#front-page .desktop-search-container {\n  position: relative;\n  display: none;\n  max-width: 100%;\n}\n#front-page .auto-complete-names {\n  position: absolute;\n  border: 1px solid #d4d4d4;\n  border-bottom: none;\n  border-top: none;\n  z-index: 4;\n  top: 100%;\n  width: 100%;\n  max-height: 14rem;\n  overflow: auto;\n  scroll-behavior: smooth;\n  display: none;\n}\n#front-page .auto-complete-name-wrapper {\n  padding: 10px;\n  cursor: pointer;\n  background-color: #fff;\n  border-bottom: 1px solid #d4d4d4;\n  color: var(--rasin-black);\n  font-weight: 600;\n  width: 100%;\n}\n#front-page .auto-complete-name-wrapper:hover {\n  background-color: var(--light-gold);\n}\n#front-page .auto-complete-name-wrapper:focus {\n  background-color: var(--light-gold);\n}\n#front-page .search {\n  padding: 0.5em;\n  min-width: 18em;\n  background: #e2e4e9;\n  outline: none;\n  border-style: none;\n  color: var(--rasin-black);\n  font-weight: 600;\n  min-height: 2.6em;\n  font-size: 1em;\n}\n#front-page .footer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: white;\n  font-size: 0.8em;\n  position: absolute;\n  bottom: 0;\n  padding: 0 1.3em 0.6em 1.3em;\n  text-align: center;\n  background-color: var(--dark-gold);\n  width: 100%;\n  font-weight: 600;\n}\n#front-page .footer-links {\n  display: flex;\n}\n#front-page .github-link {\n  margin-bottom: 0.2em;\n  padding-top: 0.4em;\n  margin-right: 1em;\n}\n#front-page .github-icon {\n  width: 2.5em;\n  transition: fill 0.2s ease-in-out;\n}\n#front-page .github-link:hover .github-icon {\n  fill: var(--rasin-black);\n}\n#front-page .linkedin-link {\n  margin-bottom: 0.2em;\n  padding-top: 0.4em;\n  margin-left: 1em;\n}\n#front-page .linkedin-icon {\n  width: 2.5em;\n  transition: fill 0.2s ease-in-out;\n}\n#front-page .linkedin-link:hover .linkedin-icon {\n  fill: var(--rasin-black);\n}\n@media (min-width: 700px) {\n  #front-page .desktop-search-container {\n    display: block;\n  }\n}\n@media (min-width: 1200px) {\n  #front-page .mobile-discover-btn-container {\n    display: none;\n  }\n  #front-page .discover-btn-container {\n    display: block;\n  }\n  #front-page .legal-boilerplate {\n    font-size: 1em;\n    padding-top: 0.6em;\n  }\n  #front-page .slogan-container {\n    top: 30em;\n  }\n  #front-page .slogan-1 {\n    font-size: 1.8rem;\n  }\n  #front-page .slogan-2 {\n    font-size: 2.1rem;\n  }\n}\n@media (max-width: 1400px) {\n  #front-page .discover-btn-container {\n    top: 18em;\n  }\n}\n@media (max-width: 1000px) {\n  #front-page .app-name-display-container {\n    padding-top: 4em;\n  }\n  #front-page .slogan-container {\n    top: 13em;\n  }\n  #front-page .mobile-discover-btn-container {\n    position: absolute;\n    bottom: 10em;\n  }\n}", "",{"version":3,"sources":["webpack://./src/stylesheets/frontpage.scss"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --rasin-black: #1d1e2c;\n  --transparent-rasin-black: #1d1e2c91;\n  --dark-gold: #927543;\n  --light-gold: #c7ab6e;\n}\n\n#front-page {\n  background-color: var(--rasin-black);\n  min-height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: -4;\n  font-family: \"Barlow\", sans-serif;\n\n  .app-name-container {\n    background-color: var(--dark-gold);\n    padding: 0.3em;\n    border-radius: 8px 0px 8px 0;\n    cursor: pointer;\n  }\n\n  .app-name {\n    font-weight: 900;\n    font-size: 2rem;\n    letter-spacing: 3px;\n  }\n\n  .app-name-container:hover {\n    color: var(--dark-gold);\n    background-color: white;\n  }\n\n  .page-header {\n    display: flex;\n    justify-content: space-evenly;\n    color: white;\n    background-color: var(--rasin-black);\n    max-width: 100%;\n    padding: 1em 0;\n    border-style: solid;\n    border-color: var(--dark-gold);\n    border-width: 0 0 2px 0;\n    align-items: center;\n  }\n\n  .app-name-display-container {\n    position: absolute;\n    top: 0;\n    letter-spacing: 3px;\n    background-color: #181a20b3;\n    padding: 0.2em;\n    border-radius: 11px;\n    width: 100%;\n    height: 100%;\n    text-align: center;\n    padding-top: 6em;\n\n    @media (max-width: 550px) {\n      padding-top: 2em;\n    }\n  }\n\n  .app-name-display {\n    font-size: 2em;\n    margin-bottom: 6px;\n    color: var(--light-gold);\n  }\n\n  .tagline-container {\n    color: white;\n    font-size: 1.2em;\n    margin-top: 2em;\n  }\n\n  .tagline-match-count {\n    font-weight: 600;\n    font-size: 1.3em;\n  }\n\n  .search {\n    padding: 0.5em;\n    min-width: 18em;\n    background: #e2e4e9;\n    outline: none;\n    border-style: none;\n    color: var(--rasin-black);\n    font-weight: 600;\n    min-height: 2.6em;\n    font-size: 1em;\n  }\n\n  .splash-section {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    position: relative;\n    align-items: center;\n  }\n\n  .backdrop-img {\n    max-width: 100%;\n    min-height: 50vh;\n    background-color: transparent;\n    color: #222;\n    opacity: 0.7;\n  }\n\n  .backdrop {\n    z-index: -2;\n    position: relative;\n    width: 100%;\n    min-height: 32em;\n  }\n\n  .backdrop::after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    z-index: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-repeat: no-repeat;\n    background-image: linear-gradient(\n        90deg,\n        #14181d,\n        rgba(20, 24, 29, 0.985565) 0.97%,\n        rgba(20, 24, 29, 0.945131) 2.07833%,\n        rgba(20, 24, 29, 0.883007) 3.29667%,\n        rgba(20, 24, 29, 0.803499) 4.60167%,\n        rgba(20, 24, 29, 0.710915) 5.96667%,\n        rgba(20, 24, 29, 0.609563) 7.365%,\n        rgba(20, 24, 29, 0.50375) 8.77167%,\n        rgba(20, 24, 29, 0.397784) 10.16%,\n        rgba(20, 24, 29, 0.295973) 11.505%,\n        rgba(20, 24, 29, 0.202624) 12.78%,\n        rgba(20, 24, 29, 0.122044) 13.95833%,\n        rgba(20, 24, 29, 0.0585423) 15.01667%,\n        rgba(20, 24, 29, 0.0164249) 15.92833%,\n        rgba(20, 24, 29, 0) 16.66667%,\n        rgba(20, 24, 29, 0) 83.33333%,\n        rgba(20, 24, 29, 0.0164249) 84.07167%,\n        rgba(20, 24, 29, 0.0585423) 84.98333%,\n        rgba(20, 24, 29, 0.122044) 86.04167%,\n        rgba(20, 24, 29, 0.202624) 87.22%,\n        rgba(20, 24, 29, 0.295973) 88.495%,\n        rgba(20, 24, 29, 0.397784) 89.84%,\n        rgba(20, 24, 29, 0.50375) 91.22833%,\n        rgba(20, 24, 29, 0.609563) 92.635%,\n        rgba(20, 24, 29, 0.710915) 94.03333%,\n        rgba(20, 24, 29, 0.803499) 95.39833%,\n        rgba(20, 24, 29, 0.883007) 96.70333%,\n        rgba(20, 24, 29, 0.945131) 97.92167%,\n        rgba(20, 24, 29, 0.985565) 99.03%,\n        #14181d\n      ),\n      linear-gradient(\n        0deg,\n        #14181d,\n        #14181d 21.48148%,\n        rgba(20, 24, 29, 0.985565) 23.63704%,\n        rgba(20, 24, 29, 0.945131) 26.1%,\n        rgba(20, 24, 29, 0.883007) 28.80741%,\n        rgba(20, 24, 29, 0.803499) 31.70741%,\n        rgba(20, 24, 29, 0.710915) 34.74074%,\n        rgba(20, 24, 29, 0.609563) 37.84815%,\n        rgba(20, 24, 29, 0.50375) 40.97407%,\n        rgba(20, 24, 29, 0.397784) 44.05926%,\n        rgba(20, 24, 29, 0.295973) 47.04815%,\n        rgba(20, 24, 29, 0.202624) 49.88148%,\n        rgba(20, 24, 29, 0.122044) 52.5%,\n        rgba(20, 24, 29, 0.0585423) 54.85185%,\n        rgba(20, 24, 29, 0.0164249) 56.87778%,\n        rgba(20, 24, 29, 0) 58.51852%\n      );\n  }\n\n  .backdrop .shown {\n    opacity: 0.7;\n    transition: opacity 0.6s ease-in;\n  }\n\n  .backdrop .hidden {\n    opacity: 0;\n    position: fixed;\n    transition: opacity 0.6s ease-in;\n  }\n\n  #tpa-backdrop.hidden {\n    transition: none;\n  }\n\n  .slogan-container {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    top: 16em;\n\n    .slogan-1 {\n      color: white;\n      font-size: 1.3rem;\n      font-weight: 600;\n      text-transform: uppercase;\n      text-align: center;\n      font-family: \"Barlow\", sans-serif;\n    }\n\n    .slogan-2 {\n      color: white;\n      font-size: 1.8rem;\n      font-weight: 900;\n      text-transform: uppercase;\n      text-align: center;\n      font-family: \"Barlow\", sans-serif;\n    }\n\n    @media (max-width: 550px) {\n      top: 12em;\n    }\n  }\n\n  .mobile-discover-btn-container {\n    border-style: solid;\n    color: var(--rasin-black);\n    border-color: var(--rasin-black);\n    background-color: var(--dark-gold);\n    border-radius: 75% 10%/0% 75%;\n    text-decoration: none;\n    position: relative;\n    bottom: 10em;\n\n    @media (max-width: 550px) {\n      margin-bottom: 1em;\n      bottom: 5em;\n    }\n  }\n\n  .mobile-discover-btn-container:hover {\n    background-color: var(--light-gold);\n  }\n\n  .front-page-btn {\n    color: white;\n    background: transparent;\n    padding: 0.5em;\n    font-size: 1rem;\n    font-weight: 600;\n    cursor: pointer;\n    border-style: none;\n    background-color: var(--dark-gold);\n  }\n\n  .front-page-btn:hover {\n    background-color: var(--light-gold);\n  }\n\n  .discover-btn-container {\n    position: absolute;\n    margin-bottom: 3em;\n    display: none;\n    top: 21.5em;\n  }\n\n  .discover-btn {\n    border: solid;\n    color: var(--rasin-black);\n    border-color: var(--rasin-black);\n    background-color: var(--dark-gold);\n    font-size: 1.2em;\n    border-radius: 75% 10%/0% 75%;\n    text-decoration: none;\n    padding: 0.5em;\n  }\n\n  .discover-btn:hover {\n    background-color: var(--light-gold);\n  }\n\n  .navigation-section {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .desktop-search-container {\n    position: relative;\n    display: none;\n    max-width: 100%;\n  }\n\n  .auto-complete-names {\n    position: absolute;\n    border: 1px solid #d4d4d4;\n    border-bottom: none;\n    border-top: none;\n    z-index: 4;\n    top: 100%;\n    width: 100%;\n    max-height: 14rem;\n    overflow: auto;\n    scroll-behavior: smooth;\n    display: none;\n  }\n\n  .auto-complete-name-wrapper {\n    padding: 10px;\n    cursor: pointer;\n    background-color: #fff;\n    border-bottom: 1px solid #d4d4d4;\n    color: var(--rasin-black);\n    font-weight: 600;\n    width: 100%;\n  }\n\n  .auto-complete-name-wrapper:hover {\n    background-color: var(--light-gold);\n  }\n\n  .auto-complete-name-wrapper:focus {\n    background-color: var(--light-gold);\n  }\n\n  .search {\n    padding: 0.5em;\n    min-width: 18em;\n    background: #e2e4e9;\n    outline: none;\n    border-style: none;\n    color: var(--rasin-black);\n    font-weight: 600;\n    min-height: 2.6em;\n    font-size: 1em;\n  }\n\n  .footer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: white;\n    font-size: 0.8em;\n    position: absolute;\n    bottom: 0;\n    padding: 0 1.3em 0.6em 1.3em;\n    text-align: center;\n    background-color: var(--dark-gold);\n    width: 100%;\n    font-weight: 600;\n  }\n\n  .footer-links {\n    display: flex;\n  }\n\n  .github-link {\n    margin-bottom: 0.2em;\n    padding-top: 0.4em;\n    margin-right: 1em;\n  }\n\n  .github-icon {\n    width: 2.5em;\n    transition: fill 0.2s ease-in-out;\n  }\n\n  .github-link:hover {\n    .github-icon {\n      fill: var(--rasin-black);\n    }\n  }\n\n  .linkedin-link {\n    margin-bottom: 0.2em;\n    padding-top: 0.4em;\n    margin-left: 1em;\n  }\n\n  .linkedin-icon {\n    width: 2.5em;\n    transition: fill 0.2s ease-in-out;\n  }\n\n  .linkedin-link:hover {\n    .linkedin-icon {\n      fill: var(--rasin-black);\n    }\n  }\n\n  @media (min-width: 700px) {\n    .desktop-search-container {\n      display: block;\n    }\n  }\n\n  @media (min-width: 1200px) {\n    .mobile-discover-btn-container {\n      display: none;\n    }\n\n    .discover-btn-container {\n      display: block;\n    }\n\n    .legal-boilerplate {\n      font-size: 1em;\n      padding-top: 0.6em;\n    }\n\n    .slogan-container {\n      top: 30em;\n    }\n\n    .slogan-1 {\n      font-size: 1.8rem;\n    }\n\n    .slogan-2 {\n      font-size: 2.1rem;\n    }\n  }\n\n  @media (max-width: 1400px) {\n    .discover-btn-container {\n      top: 18em;\n    }\n  }\n\n  @media (max-width: 1000px) {\n    .app-name-display-container {\n      padding-top: 4em;\n    }\n\n    .slogan-container {\n      top: 13em;\n    }\n\n    .mobile-discover-btn-container {\n      position: absolute;\n      bottom: 10em;\n    }\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/assets/images sync \\.(png|jpe?g|svg)$":
/*!*****************************************************************!*\
  !*** ./src/assets/images/ sync nonrecursive \.(png|jpe?g|svg)$ ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Assassin.png": "./src/assets/images/Assassin.png",
	"./Blood Well.png": "./src/assets/images/Blood Well.png",
	"./Bottom.png": "./src/assets/images/Bottom.png",
	"./Controller.png": "./src/assets/images/Controller.png",
	"./Courage.png": "./src/assets/images/Courage.png",
	"./Crimson Rush.png": "./src/assets/images/Crimson Rush.png",
	"./Energy.png": "./src/assets/images/Energy.png",
	"./Fighter.png": "./src/assets/images/Fighter.png",
	"./Flow.png": "./src/assets/images/Flow.png",
	"./Fury.png": "./src/assets/images/Fury.png",
	"./Grit.png": "./src/assets/images/Grit.png",
	"./Heat.png": "./src/assets/images/Heat.png",
	"./Jungle.png": "./src/assets/images/Jungle.png",
	"./Mage.png": "./src/assets/images/Mage.png",
	"./Mana.png": "./src/assets/images/Mana.png",
	"./Manaless.png": "./src/assets/images/Manaless.png",
	"./Marksman.png": "./src/assets/images/Marksman.png",
	"./Melee.png": "./src/assets/images/Melee.png",
	"./Middle.png": "./src/assets/images/Middle.png",
	"./Rage.png": "./src/assets/images/Rage.png",
	"./Ranged.png": "./src/assets/images/Ranged.png",
	"./Specialist.png": "./src/assets/images/Specialist.png",
	"./Support.png": "./src/assets/images/Support.png",
	"./Tank.png": "./src/assets/images/Tank.png",
	"./Top.png": "./src/assets/images/Top.png",
	"./Utility.png": "./src/assets/images/Utility.png"
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
webpackContext.id = "./src/assets/images sync \\.(png|jpe?g|svg)$";

/***/ }),

/***/ "./src/assets/images/Assassin.png":
/*!****************************************!*\
  !*** ./src/assets/images/Assassin.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d45be1c2c0bd51f741c2.png";

/***/ }),

/***/ "./src/assets/images/Blood Well.png":
/*!******************************************!*\
  !*** ./src/assets/images/Blood Well.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ffde57f49c47ff0535f2.png";

/***/ }),

/***/ "./src/assets/images/Bottom.png":
/*!**************************************!*\
  !*** ./src/assets/images/Bottom.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "acb28d23af4db3f6fe89.png";

/***/ }),

/***/ "./src/assets/images/Controller.png":
/*!******************************************!*\
  !*** ./src/assets/images/Controller.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fcb308589bac446b07c4.png";

/***/ }),

/***/ "./src/assets/images/Courage.png":
/*!***************************************!*\
  !*** ./src/assets/images/Courage.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "02f6ab0cf6c865d1bb56.png";

/***/ }),

/***/ "./src/assets/images/Crimson Rush.png":
/*!********************************************!*\
  !*** ./src/assets/images/Crimson Rush.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "02f6ab0cf6c865d1bb56.png";

/***/ }),

/***/ "./src/assets/images/Energy.png":
/*!**************************************!*\
  !*** ./src/assets/images/Energy.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bfd7274a1c59fc0d3291.png";

/***/ }),

/***/ "./src/assets/images/Fighter.png":
/*!***************************************!*\
  !*** ./src/assets/images/Fighter.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5c44855b8e453f3abf57.png";

/***/ }),

/***/ "./src/assets/images/Flow.png":
/*!************************************!*\
  !*** ./src/assets/images/Flow.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b75badb6e215a0f54b52.png";

/***/ }),

/***/ "./src/assets/images/Fury.png":
/*!************************************!*\
  !*** ./src/assets/images/Fury.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5c7db58ac2040f00b573.png";

/***/ }),

/***/ "./src/assets/images/Grit.png":
/*!************************************!*\
  !*** ./src/assets/images/Grit.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "02f6ab0cf6c865d1bb56.png";

/***/ }),

/***/ "./src/assets/images/Heat.png":
/*!************************************!*\
  !*** ./src/assets/images/Heat.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c7dbf351ddd8665de67f.png";

/***/ }),

/***/ "./src/assets/images/Jungle.png":
/*!**************************************!*\
  !*** ./src/assets/images/Jungle.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "03954a4511367107d603.png";

/***/ }),

/***/ "./src/assets/images/Mage.png":
/*!************************************!*\
  !*** ./src/assets/images/Mage.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "eda18b5db894127afd6e.png";

/***/ }),

/***/ "./src/assets/images/Mana.png":
/*!************************************!*\
  !*** ./src/assets/images/Mana.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "270c95e7e93eb8587e13.png";

/***/ }),

/***/ "./src/assets/images/Manaless.png":
/*!****************************************!*\
  !*** ./src/assets/images/Manaless.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7d69ed5b1eabc94aa359.png";

/***/ }),

/***/ "./src/assets/images/Marksman.png":
/*!****************************************!*\
  !*** ./src/assets/images/Marksman.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2c8f1044ec139ab8d1a1.png";

/***/ }),

/***/ "./src/assets/images/Melee.png":
/*!*************************************!*\
  !*** ./src/assets/images/Melee.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ee3b33b01a15556c7b23.png";

/***/ }),

/***/ "./src/assets/images/Middle.png":
/*!**************************************!*\
  !*** ./src/assets/images/Middle.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "28648caf7edfd10e085f.png";

/***/ }),

/***/ "./src/assets/images/Rage.png":
/*!************************************!*\
  !*** ./src/assets/images/Rage.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "02f6ab0cf6c865d1bb56.png";

/***/ }),

/***/ "./src/assets/images/Ranged.png":
/*!**************************************!*\
  !*** ./src/assets/images/Ranged.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cb995914f616e25bae5e.png";

/***/ }),

/***/ "./src/assets/images/Specialist.png":
/*!******************************************!*\
  !*** ./src/assets/images/Specialist.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "83de1f61524c911aa1cc.png";

/***/ }),

/***/ "./src/assets/images/Support.png":
/*!***************************************!*\
  !*** ./src/assets/images/Support.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "00d8123f9faf16163309.png";

/***/ }),

/***/ "./src/assets/images/Tank.png":
/*!************************************!*\
  !*** ./src/assets/images/Tank.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "916f968d25b960fd73e2.png";

/***/ }),

/***/ "./src/assets/images/Top.png":
/*!***********************************!*\
  !*** ./src/assets/images/Top.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "95abe670bbf23ed4b5c9.png";

/***/ }),

/***/ "./src/assets/images/Utility.png":
/*!***************************************!*\
  !*** ./src/assets/images/Utility.png ***!
  \***************************************/
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

var displayNumberOfMatches = /*#__PURE__*/function () {
  var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
    var devUrl, devUrl2, response, matchCount, appNameContainer, taglineContainer, taglineStart, taglineMatchCount, taglineEnd;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            devUrl = 'http://127.0.0.1:5500/frontend/dist/';
            devUrl2 = 'http://127.0.0.1:5500/frontend/dist/index.html';

            if (!(window.location.href === devUrl || devUrl2)) {
              _context2.next = 8;
              break;
            }

            _context2.next = 5;
            return fetch('http://localhost:3001/matches', {
              mode: 'cors'
            });

          case 5:
            _context2.t0 = _context2.sent;
            _context2.next = 11;
            break;

          case 8:
            _context2.next = 10;
            return fetch('matches', {
              mode: 'cors'
            });

          case 10:
            _context2.t0 = _context2.sent;

          case 11:
            response = _context2.t0;
            _context2.next = 14;
            return response.json();

          case 14:
            matchCount = _context2.sent;
            appNameContainer = document.querySelector('.app-name-display-container');
            taglineContainer = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_4__["default"].createChildElementWithClass('div', 'tagline-container', appNameContainer);
            taglineStart = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_4__["default"].createChildElementWithClass('span', 'tagline-start', taglineContainer);
            taglineStart.textContent = 'Providing info and stats from ';
            taglineMatchCount = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_4__["default"].createChildElementWithClass('span', 'tagline-match-count', taglineContainer);
            taglineMatchCount.textContent = "".concat(Math.floor(matchCount));
            taglineEnd = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_4__["default"].createChildElementWithClass('span', 'tagline-end', taglineContainer);
            taglineEnd.textContent = ' League of Legends matches';

          case 23:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function displayNumberOfMatches() {
    return _ref2.apply(this, arguments);
  };
}();

var renderPage = /*#__PURE__*/function () {
  var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return displayNumberOfMatches();

          case 2:
            _context3.next = 4;
            return createSearchDropdown();

          case 4:
            _appControl_searchbarController__WEBPACK_IMPORTED_MODULE_6__["default"].searchContainerListeners();

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function renderPage() {
    return _ref3.apply(this, arguments);
  };
}();

renderPage();
(0,_appControl_backdropChangeInterval__WEBPACK_IMPORTED_MODULE_7__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsWUFBWSxLQUFLLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxN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QXVCLEtBQUssR0FBRyw4QkFBOEIsNkJBQTZCLHlCQUF5QixxQkFBcUIsdUJBQXVCLEtBQUssR0FBRyw4QkFBOEIsNkJBQTZCLHFCQUFxQixLQUFLLEdBQUcsT0FBTyw4RkFBOEYsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxZQUFZLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFlBQVksVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksVUFBVSxNQUFNLE1BQU0sWUFBWSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxZQUFZLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxZQUFZLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxZQUFZLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFlBQVksVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsWUFBWSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFlBQVksVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsWUFBWSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFlBQVksVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFlBQVksVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxhQUFhLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLFdBQVcsV0FBVyxLQUFLLE1BQU0sYUFBYSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxhQUFhLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sVUFBVSxLQUFLLE1BQU0sYUFBYSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxVQUFVLEtBQUssTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFB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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQyxjQUFjO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxtQkFBbUI7QUFDcEQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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Qiw2QkFBdkIsQ0FQSTtBQVF2QjRjLFlBQUFBLGdCQVJ1QixHQVFKbkosNEZBQUEsQ0FBNEMsS0FBNUMsRUFBbUQsbUJBQW5ELEVBQXdFa0osZ0JBQXhFLENBUkk7QUFTdkJFLFlBQUFBLFlBVHVCLEdBU1JwSiw0RkFBQSxDQUE0QyxNQUE1QyxFQUFvRCxlQUFwRCxFQUFxRW1KLGdCQUFyRSxDQVRRO0FBVTdCQyxZQUFBQSxZQUFZLENBQUNsYSxXQUFiLEdBQTJCLGdDQUEzQjtBQUNNbWEsWUFBQUEsaUJBWHVCLEdBV0hySiw0RkFBQSxDQUE0QyxNQUE1QyxFQUFvRCxxQkFBcEQsRUFBMkVtSixnQkFBM0UsQ0FYRztBQVk3QkUsWUFBQUEsaUJBQWlCLENBQUNuYSxXQUFsQixhQUFtQzJULElBQUksQ0FBQ3lHLEtBQUwsQ0FBV0wsVUFBWCxDQUFuQztBQUNNTSxZQUFBQSxVQWJ1QixHQWFWdkosNEZBQUEsQ0FBNEMsTUFBNUMsRUFBb0QsYUFBcEQsRUFBbUVtSixnQkFBbkUsQ0FiVTtBQWM3QkksWUFBQUEsVUFBVSxDQUFDcmEsV0FBWCxHQUF5Qiw0QkFBekI7O0FBZDZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQXRCNlosc0JBQXNCO0FBQUE7QUFBQTtBQUFBLEdBQTVCOztBQWlCQSxJQUFNUyxVQUFVO0FBQUEsdUxBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ1hULHNCQUFzQixFQURYOztBQUFBO0FBQUE7QUFBQSxtQkFFWE4sb0JBQW9CLEVBRlQ7O0FBQUE7QUFHakJ4UCxZQUFBQSxnR0FBQTs7QUFIaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBVnVRLFVBQVU7QUFBQTtBQUFBO0FBQUEsR0FBaEI7O0FBTUFBLFVBQVU7QUFDVmhCLDhFQUFjLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvYXBwQ29udHJvbC9iYWNrZHJvcENoYW5nZUludGVydmFsLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvYXBwQ29udHJvbC9jaGFtcGlvbk1vZGFsQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL2FwcENvbnRyb2wvY2hhbXBpb25zUGFnZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9hcHBDb250cm9sL2ZpbHRlckNoYW1waW9ucy5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL2FwcENvbnRyb2wvc2VhcmNoYmFyQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL2FwcENvbnRyb2wvc29ydENoYW1waW9ucy5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL2NoYW1waW9uRGF0YS9jaGFtcGlvbkRldGFpbHMuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9jaGFtcGlvbkRhdGEvY2hhbXBpb25TdGF0cy5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL2NoYW1waW9uRGF0YS9nZXRBbGxDaGFtcGlvbnMuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9jaGFtcGlvbkRhdGEvZ2V0TGF0ZXN0VmVyc2lvbi5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL2NoYW1waW9uRGF0YS9pdGVtSW5mby5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL2hlbHBlcnMvZWxlbWVudENyZWF0aW9uLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvdGVtcGxhdGVzL2NoYW1waW9uRGV0YWlsc01vZGFsLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvdGVtcGxhdGVzL2NoYW1waW9uU2tpbnNNb2RhbC5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL3RlbXBsYXRlcy9jaGFtcGlvblN0YXRzTW9kYWwuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy90ZW1wbGF0ZXMvcmVuZGVySGVscGVycy5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL3N0eWxlc2hlZXRzL2Zyb250cGFnZS5zY3NzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvc3R5bGVzaGVldHMvbW9kYWxzLnNjc3MiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvc3R5bGVzaGVldHMvZnJvbnRwYWdlLnNjc3M/NDcyNiIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL3N0eWxlc2hlZXRzL21vZGFscy5zY3NzP2NmODMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy9ob21lL2Rhbml5by9Eb2N1bWVudHMvT2RpblByb2plY3QvTGVhZ3VlLUFwcC9mcm9udGVuZC9zcmMvYXNzZXRzL2ltYWdlc3xzeW5jfG5vbnJlY3Vyc2l2ZXwvXFwuKHBuZ3xqcGUiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xlYWd1ZS1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2xlYWd1ZS1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9sZWFndWUtYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGxldCBpbmRleCA9IDE7XG5cbiAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGNvbnN0IGJhY2tkcm9wcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iYWNrZHJvcC1pbWcnKTtcbiAgICBjb25zdCBjdXJyZW50QmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2Ryb3AtaW1nLnNob3duJyk7XG4gICAgaW5kZXggJT0gYmFja2Ryb3BzLmxlbmd0aDtcbiAgICBjdXJyZW50QmFja2Ryb3AuY2xhc3NOYW1lID0gJ2JhY2tkcm9wLWltZyBoaWRkZW4nO1xuICAgIGJhY2tkcm9wc1tpbmRleF0uY2xhc3NOYW1lID0gJ2JhY2tkcm9wLWltZyBzaG93bic7XG4gICAgaW5kZXggKz0gMTtcbiAgfSwgNzAwMCk7XG59O1xuIiwiY29uc3QgQ2hhbXBpb25Nb2RhbENvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBjb25zdCB0b2dnbGVBY3RpdmVBYmlsaXR5ID0gKGNsaWNrZWRBYmlsaXR5SWQpID0+IHtcbiAgICBjb25zdCBhYmlsaXR5SW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNwZWxsLWltZycpO1xuICAgIGNvbnN0IGFiaWxpdHlJbmZvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hYmlsaXR5LWluZm8nKTtcblxuICAgIGFiaWxpdHlJbWFnZXMuZm9yRWFjaCgoaW1nKSA9PiB7XG4gICAgICBpbWcuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZCcpO1xuICAgIH0pO1xuICAgIGFiaWxpdHlJbmZvcy5mb3JFYWNoKChpbmZvKSA9PiB7XG4gICAgICBpbmZvLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY2xpY2tlZEltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Y2xpY2tlZEFiaWxpdHlJZH0taW1nYCk7XG4gICAgY2xpY2tlZEltYWdlLmNsYXNzTmFtZSA9ICdzcGVsbC1pbWcgY2xpY2tlZCc7XG5cbiAgICBjb25zdCBhY3RpdmVBYmlsaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Y2xpY2tlZEFiaWxpdHlJZH0tYWJpbGl0eWApO1xuICAgIGFjdGl2ZUFiaWxpdHkuY2xhc3NOYW1lID0gJ2FiaWxpdHktaW5mbyBhY3RpdmUnO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZU1vZGFsVGVtcGxhdGUgPSAoY2xpY2tlZE1vZGFsTmF2TGluaykgPT4ge1xuICAgIGNvbnN0IHRlbXBsYXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC10ZW1wbGF0ZScpO1xuICAgIHRlbXBsYXRlcy5mb3JFYWNoKCh0ZW1wbGF0ZSkgPT4ge1xuICAgICAgY29uc3QgdGVtcGxhdGVOYW1lID0gdGVtcGxhdGUuaWQuc3Vic3RyaW5nKDAsIHRlbXBsYXRlLmlkLmluZGV4T2YoJy0nKSk7XG4gICAgICBpZiAodGVtcGxhdGVOYW1lID09PSBjbGlja2VkTW9kYWxOYXZMaW5rLmlkKSB7XG4gICAgICAgIGNvbnN0IGNob3NlblRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgICAgIGNob3NlblRlbXBsYXRlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgaGlkZGVuVGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICAgICAgaGlkZGVuVGVtcGxhdGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBkaXNwYXlJdGVtRGV0YWlscyA9IChob3ZlcmVkSXRlbUltYWdlKSA9PiB7XG4gICAgY29uc3QgaXRlbURldGFpbHMgPSBob3ZlcmVkSXRlbUltYWdlLm5leHRFbGVtZW50U2libGluZztcbiAgICBpdGVtRGV0YWlscy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICB9O1xuXG4gIGNvbnN0IGhpZGVJdGVtRGV0YWlscyA9ICh1bmhvdmVyZWRJdGVtSW1hZ2UpID0+IHtcbiAgICBjb25zdCBpdGVtRGV0YWlscyA9IHVuaG92ZXJlZEl0ZW1JbWFnZS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgaXRlbURldGFpbHMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfTtcblxuICBjb25zdCB0b2dnbGVTa2luSW1hZ2VzID0gKGFycm93Q2xhc3NMaXN0KSA9PiB7XG4gICAgY29uc3Qgc2tpbkltYWdlc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5za2luLWltYWdlcy1jb250YWluZXInKTtcbiAgICBjb25zdCBjdXJyZW50U2hvd25JbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5za2luLWltYWdlLWNvbnRhaW5lci5zaG93bicpO1xuICAgIGNvbnN0IHNraW5OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNraW4tbmFtZScpO1xuXG4gICAgY3VycmVudFNob3duSW1hZ2UuY2xhc3NOYW1lID0gJ3NraW4taW1hZ2UtY29udGFpbmVyJztcbiAgICBjb25zdCBmaXJzdEltYWdlID0gc2tpbkltYWdlc0NvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICBjb25zdCBsYXN0SW1hZ2UgPSBza2luSW1hZ2VzQ29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQ7XG5cbiAgICBpZiAoZmlyc3RJbWFnZSA9PT0gY3VycmVudFNob3duSW1hZ2UgJiYgYXJyb3dDbGFzc0xpc3QuaW5jbHVkZXMoJ2xlZnQtYXJyb3cnKSkge1xuICAgICAgbGFzdEltYWdlLmNsYXNzTmFtZSA9ICdza2luLWltYWdlLWNvbnRhaW5lciBzaG93bic7XG4gICAgICBza2luTmFtZS50ZXh0Q29udGVudCA9IGxhc3RJbWFnZS5pZDtcbiAgICB9IGVsc2UgaWYgKGxhc3RJbWFnZSA9PT0gY3VycmVudFNob3duSW1hZ2UgJiYgYXJyb3dDbGFzc0xpc3QuaW5jbHVkZXMoJ3JpZ2h0LWFycm93JykpIHtcbiAgICAgIGZpcnN0SW1hZ2UuY2xhc3NOYW1lID0gJ3NraW4taW1hZ2UtY29udGFpbmVyIHNob3duJztcbiAgICAgIHNraW5OYW1lLnRleHRDb250ZW50ID0gZmlyc3RJbWFnZS5pZDtcbiAgICB9IGVsc2UgaWYgKGFycm93Q2xhc3NMaXN0LmluY2x1ZGVzKCdyaWdodC1hcnJvdycpKSB7XG4gICAgICBjdXJyZW50U2hvd25JbWFnZS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NOYW1lID0gJ3NraW4taW1hZ2UtY29udGFpbmVyIHNob3duJztcbiAgICAgIHNraW5OYW1lLnRleHRDb250ZW50ID0gY3VycmVudFNob3duSW1hZ2UubmV4dEVsZW1lbnRTaWJsaW5nLmlkO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50U2hvd25JbWFnZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTmFtZSA9ICdza2luLWltYWdlLWNvbnRhaW5lciBzaG93bic7XG4gICAgICBza2luTmFtZS50ZXh0Q29udGVudCA9IGN1cnJlbnRTaG93bkltYWdlLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaWQ7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNsZWFyTWFpbk1vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1jb250YWluZXInKTtcbiAgICBjb25zdCBjaGFtcGlvbk5hbWUgPSBtYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbi1uYW1lJyk7XG4gICAgY29uc3QgY2hhbXBpb25UaXRsZSA9IG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLXRpdGxlJyk7XG4gICAgY29uc3QgY2hhbXBpb25Sb2xlcyA9IG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLXJvbGVzJyk7XG4gICAgY29uc3QgY2hhbXBpb25Mb3JlID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tbG9yZScpO1xuICAgIGNvbnN0IGFiaWxpdHlEZXRhaWxzID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuYWJpbGl0eS1kZXRhaWxzJyk7XG4gICAgY29uc3QgY2hhbXBpb25UaXBzID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tdGlwcycpO1xuXG4gICAgY29uc3QgbWFpbk1vZGFsSGVhZGVyID0gW2NoYW1waW9uTmFtZSwgY2hhbXBpb25UaXRsZSwgY2hhbXBpb25Sb2xlc107XG4gICAgbWFpbk1vZGFsSGVhZGVyLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gZWxlbWVudDtcbiAgICAgIGN1cnJlbnRFbGVtZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgfSk7XG5cbiAgICBjaGFtcGlvbkxvcmUucmVtb3ZlKCk7XG4gICAgYWJpbGl0eURldGFpbHMucmVtb3ZlKCk7XG4gICAgY2hhbXBpb25UaXBzLnJlbW92ZSgpO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyU3RhdHNNb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCBzdGF0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGF0cy1jb250YWluZXInKTtcbiAgICBjb25zdCBjaGFtcGlvbk5hbWUgPSBzdGF0c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tbmFtZScpO1xuICAgIGNvbnN0IGNoYW1waW9uVGl0bGUgPSBzdGF0c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tdGl0bGUnKTtcbiAgICBjb25zdCBjaGFtcGlvblN0YXRzT3ZlcnZpZXcgPSBzdGF0c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tc3RhdHMtb3ZlcnZpZXcnKTtcbiAgICBjb25zdCBhbGxkYW1hZ2VTdGF0cyA9IHN0YXRzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYW1hZ2Utc3RhdHMnKTtcbiAgICBjb25zdCBpdGVtU2V0c0NvbnRhaW5lciA9IHN0YXRzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLXNldHMtY29udGFpbmVyJyk7XG4gICAgY29uc3QgYmVzdE1hdGNodXBzID0gc3RhdHNDb250YWluZXIucXVlcnlTZWxlY3RvcignLmJlc3QtbWF0Y2h1cHMnKTtcbiAgICBjb25zdCB3b3JzdE1hdGNodXBzID0gc3RhdHNDb250YWluZXIucXVlcnlTZWxlY3RvcignLndvcnN0LW1hdGNodXBzJyk7XG5cbiAgICBjb25zdCBzdGF0c01vZGFsSGVhZGVyID0gW2NoYW1waW9uTmFtZSwgY2hhbXBpb25UaXRsZSwgY2hhbXBpb25TdGF0c092ZXJ2aWV3XTtcbiAgICBzdGF0c01vZGFsSGVhZGVyLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gZWxlbWVudDtcbiAgICAgIGN1cnJlbnRFbGVtZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgfSk7XG4gICAgYWxsZGFtYWdlU3RhdHMuZm9yRWFjaCgoZGFtYWdlU3RhdCkgPT4ge1xuICAgICAgY29uc3QgZGFtYWdlU3RhdEVsZW1lbnQgPSBkYW1hZ2VTdGF0O1xuICAgICAgZGFtYWdlU3RhdEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfSk7XG4gICAgY29uc3Qgc3RhdHNNb2RhbENvbnRlbnQgPSBbaXRlbVNldHNDb250YWluZXIsIGJlc3RNYXRjaHVwcywgd29yc3RNYXRjaHVwc107XG4gICAgc3RhdHNNb2RhbENvbnRlbnQuZm9yRWFjaCgoY29udGVudCkgPT4ge1xuICAgICAgY29uc3QgY29udGVudEVsZW1lbnQgPSBjb250ZW50O1xuICAgICAgY29udGVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgY2xlYXJTa2luc01vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IHNraW5JbWFnZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2tpbi1pbWFnZXMtY29udGFpbmVyJyk7XG4gICAgc2tpbkltYWdlc0NvbnRhaW5lci5yZW1vdmUoKTtcbiAgfTtcblxuICBjb25zdCBjbG9zZUNoYW1waW9uTW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tY29udGFpbmVyJyk7XG4gICAgY29uc3Qgc3RhdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhdHMtY29udGFpbmVyJyk7XG4gICAgY29uc3Qgc2tpbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2tpbnMtY29udGFpbmVyJyk7XG5cbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIG1haW5Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgc3RhdHNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBza2luc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9O1xuXG4gIGNvbnN0IG1vZGFsQ2xpY2tFdmVudHMgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuXG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdzcGVsbC1pbWcnKSB7XG4gICAgICBjb25zdCBkYXNoSW5kZXggPSBldmVudC50YXJnZXQuaWQuaW5kZXhPZignLScpO1xuICAgICAgY29uc3QgYWJpbGl0eUlkID0gZXZlbnQudGFyZ2V0LmlkLnNsaWNlKDAsIGRhc2hJbmRleCk7XG4gICAgICB0b2dnbGVBY3RpdmVBYmlsaXR5KGFiaWxpdHlJZCk7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdtb2RhbC1uYXYtbGluaycpIHtcbiAgICAgIGNoYW5nZU1vZGFsVGVtcGxhdGUoZXZlbnQudGFyZ2V0KTtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuZnJvbShldmVudC50YXJnZXQuY2xhc3NMaXN0KS5pbmNsdWRlcygnaW1nLXNjcm9sbC1hcnJvdycpKSB7XG4gICAgICB0b2dnbGVTa2luSW1hZ2VzKEFycmF5LmZyb20oZXZlbnQudGFyZ2V0LmNsYXNzTGlzdCkpO1xuICAgIH1cblxuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnY2xvc2UtbW9kYWwtYnRuJykge1xuICAgICAgbW9kYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtb2RhbENsaWNrRXZlbnRzKTtcbiAgICAgIGNsb3NlQ2hhbXBpb25Nb2RhbCgpO1xuICAgICAgY2xlYXJNYWluTW9kYWwoKTtcbiAgICAgIGNsZWFyU3RhdHNNb2RhbCgpO1xuICAgICAgY2xlYXJTa2luc01vZGFsKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG1vZGFsTW91c2VvdmVyRXZlbnRzID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdpdGVtLWltZydcbiAgICAgIHx8IGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdjb21wb25lbnQtaXRlbS1pbWcnKSB7XG4gICAgICBkaXNwYXlJdGVtRGV0YWlscyhldmVudC50YXJnZXQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBtb2RhbE1vdXNlb3V0RXZlbnRzID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdpdGVtLWltZydcbiAgICB8fCBldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnY29tcG9uZW50LWl0ZW0taW1nJykge1xuICAgICAgaWYgKCFldmVudC50YXJnZXQpIHJldHVybjtcblxuICAgICAgbGV0IHsgcmVsYXRlZFRhcmdldCB9ID0gZXZlbnQ7XG5cbiAgICAgIHdoaWxlIChyZWxhdGVkVGFyZ2V0KSB7XG4gICAgICAgIGlmIChyZWxhdGVkVGFyZ2V0ID09PSBldmVudC50YXJnZXQpIHJldHVybjtcbiAgICAgICAgcmVsYXRlZFRhcmdldCA9IHJlbGF0ZWRUYXJnZXQucGFyZW50Tm9kZTtcbiAgICAgIH1cblxuICAgICAgaGlkZUl0ZW1EZXRhaWxzKGV2ZW50LnRhcmdldCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG1vZGFsQXJyb3dFdmVudHMgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBza2luc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNza2lucy1jb250YWluZXInKTtcbiAgICBpZiAoc2tpbnNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJykge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93UmlnaHQnKSB7XG4gICAgICAgIGNvbnN0IHJpZ2h0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmlnaHQtYXJyb3cnKTtcbiAgICAgICAgdG9nZ2xlU2tpbkltYWdlcyhBcnJheS5mcm9tKHJpZ2h0QXJyb3cuY2xhc3NMaXN0KSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudC5rZXkgPT09ICdBcnJvd0xlZnQnKSB7XG4gICAgICAgIGNvbnN0IGxlZnRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0LWFycm93Jyk7XG4gICAgICAgIHRvZ2dsZVNraW5JbWFnZXMoQXJyYXkuZnJvbShsZWZ0QXJyb3cuY2xhc3NMaXN0KSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG1vZGFsQ2hhbmdlTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG5cbiAgICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1vZGFsQ2xpY2tFdmVudHMpO1xuICAgIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIG1vZGFsTW91c2VvdmVyRXZlbnRzKTtcbiAgICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIG1vZGFsTW91c2VvdXRFdmVudHMpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBtb2RhbEFycm93RXZlbnRzKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG1vZGFsQ2hhbmdlTGlzdGVuZXJzLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhbXBpb25Nb2RhbENvbnRyb2xsZXI7XG4iLCJpbXBvcnQgZ2V0Q2hhbXBpb25EZXRhaWxzIGZyb20gJy4uL2NoYW1waW9uRGF0YS9jaGFtcGlvbkRldGFpbHMnO1xuaW1wb3J0IGdldENoYW1waW9uU3RhdHMgZnJvbSAnLi4vY2hhbXBpb25EYXRhL2NoYW1waW9uU3RhdHMnO1xuaW1wb3J0IGNoYW1waW9uRGV0YWlsc01vZGFsIGZyb20gJy4uL3RlbXBsYXRlcy9jaGFtcGlvbkRldGFpbHNNb2RhbCc7XG5pbXBvcnQgY2hhbXBpb25TdGF0c01vZGFsIGZyb20gJy4uL3RlbXBsYXRlcy9jaGFtcGlvblN0YXRzTW9kYWwnO1xuaW1wb3J0IGNoYW1waW9uU2tpbnNNb2RhbCBmcm9tICcuLi90ZW1wbGF0ZXMvY2hhbXBpb25Ta2luc01vZGFsJztcbmltcG9ydCBDaGFtcGlvbk1vZGFsQ29udHJvbGxlciBmcm9tICcuL2NoYW1waW9uTW9kYWxDb250cm9sbGVyJztcbmltcG9ydCBDaGFtcGlvbkZpbHRlciBmcm9tICcuL2ZpbHRlckNoYW1waW9ucyc7XG5pbXBvcnQgU29ydENoYW1waW9ucyBmcm9tICcuL3NvcnRDaGFtcGlvbnMnO1xuaW1wb3J0IHsgZ2V0QWxsQ2hhbXBpb25EZXRhaWxzLCBnZXRBbGxDaGFtcGlvblN0YXRzIH0gZnJvbSAnLi4vY2hhbXBpb25EYXRhL2dldEFsbENoYW1waW9ucyc7XG5pbXBvcnQgZ2V0TGF0ZXN0VmVyc2lvbiBmcm9tICcuLi9jaGFtcGlvbkRhdGEvZ2V0TGF0ZXN0VmVyc2lvbic7XG5cbmNvbnN0IENoYW1waW9uc1BhZ2VDb250cm9sbGVyID0gKCgpID0+IHtcbiAgY29uc3QgZGlzcGxheURyb3Bkb3duT3B0aW9ucyA9IChkcm9wZG93bk9wdGlvbnMpID0+IHtcbiAgICBjb25zdCBhbGxEcm9wZG93bk9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd24tb3B0aW9ucycpO1xuICAgIGFsbERyb3Bkb3duT3B0aW9ucy5mb3JFYWNoKChvcHRpb25zKSA9PiB7XG4gICAgICBjb25zdCBvcHRpb25zU3R5bGUgPSBvcHRpb25zLnN0eWxlO1xuICAgICAgb3B0aW9uc1N0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7XG5cbiAgICBjb25zdCBkcm9wZG93bk9wdGlvbnNTdHlsZSA9IGRyb3Bkb3duT3B0aW9ucy5zdHlsZTtcbiAgICBkcm9wZG93bk9wdGlvbnNTdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICB9O1xuXG4gIGNvbnN0IGhpZGVEcm9wZG93bk9wdGlvbnMgPSAoZHJvcGRvd25PcHRpb25zKSA9PiB7XG4gICAgY29uc3QgZHJvcGRvd25PcHRpb25zU3R5bGUgPSBkcm9wZG93bk9wdGlvbnMuc3R5bGU7XG4gICAgZHJvcGRvd25PcHRpb25zU3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfTtcblxuICBjb25zdCBkcm9wZG93bk9wdGlvbnNUb2dnbGUgPSAoZHJvcGRvd25CdG4pID0+IHtcbiAgICBjb25zdCBkcm9wZG93bk9wdGlvbnMgPSBkcm9wZG93bkJ0bi5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bi1vcHRpb25zJyk7XG4gICAgaWYgKGRyb3Bkb3duT3B0aW9ucy5zdHlsZS5kaXNwbGF5ICE9PSAnZmxleCcpIHtcbiAgICAgIGRpc3BsYXlEcm9wZG93bk9wdGlvbnMoZHJvcGRvd25PcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGlkZURyb3Bkb3duT3B0aW9ucyhkcm9wZG93bk9wdGlvbnMpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkaXNwbGF5Q2hhbXBpb25Nb2RhbCA9IGFzeW5jIChjaGFtcGlvbklkKSA9PiB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgICBjb25zdCBsYXRlc3RWZXJzaW9uID0gYXdhaXQgZ2V0TGF0ZXN0VmVyc2lvbigpO1xuICAgIGNvbnN0IGNoYW1waW9uRGV0YWlscyA9IGF3YWl0IGdldENoYW1waW9uRGV0YWlscyhjaGFtcGlvbklkLCBsYXRlc3RWZXJzaW9uKTtcblxuICAgIGNvbnN0IGNoYW1waW9uU3RhdHMgPSBhd2FpdCBnZXRDaGFtcGlvblN0YXRzKGNoYW1waW9uSWQpO1xuXG4gICAgY29uc3Qgc2tpbkltYWdlc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5za2luLWltYWdlcy1jb250YWluZXInKTtcbiAgICAvKlxuICAgICAgcHVycG9zZSBvZiB0aGUgaWYgc3RhdGVtZW50IGlzIHRvIHByZXZlbnQgc3BhbSBjbGlja3MgZnJvbSByZW5kZXJpbmdcbiAgICAgIGR1cGxpY2F0ZSBjb250ZW50IG9udG8gdGhlIGNoYW1waW9uIG1vZGFsLlxuICAgICovXG4gICAgaWYgKCFza2luSW1hZ2VzQ29udGFpbmVyKSB7XG4gICAgICBjaGFtcGlvbkRldGFpbHNNb2RhbChjaGFtcGlvbkRldGFpbHMpO1xuICAgICAgY2hhbXBpb25TdGF0c01vZGFsKGNoYW1waW9uRGV0YWlscywgY2hhbXBpb25TdGF0cywgbGF0ZXN0VmVyc2lvbik7XG4gICAgICBjaGFtcGlvblNraW5zTW9kYWwoY2hhbXBpb25EZXRhaWxzKTtcbiAgICB9XG5cbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBDaGFtcGlvbk1vZGFsQ29udHJvbGxlci5tb2RhbENoYW5nZUxpc3RlbmVycygpO1xuICB9O1xuXG4gIGNvbnN0IHNlbGVjdExhbmVGaWx0ZXJPcHRpb24gPSAoY2xpY2tlZExhbmVPcHRpb24pID0+IHtcbiAgICBjb25zdCBjaGFtcGlvbnNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW1waW9ucy1zZWN0aW9uJyk7XG4gICAgY29uc3QgYWN0aXZlTGFuZU9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItb3B0aW9uLmFjdGl2ZScpO1xuICAgIGlmIChjbGlja2VkTGFuZU9wdGlvbiA9PT0gYWN0aXZlTGFuZU9wdGlvbiB8fCBjaGFtcGlvbnNTZWN0aW9uLnN0eWxlLnZpc2liaWxpdHkgPT09ICdoaWRkZW4nKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGFjdGl2ZUxhbmVPcHRpb24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgY2xpY2tlZExhbmVPcHRpb24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBjaGVja0xhbmVGaWx0ZXJPcHRpb24gPSBhc3luYyAoYWxsQ2hhbXBpb25TdGF0cykgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZUxhbmVPcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLW9wdGlvbi5hY3RpdmUnKTtcbiAgICBjb25zdCBsYW5lTmFtZSA9IGFjdGl2ZUxhbmVPcHRpb24uY2xhc3NMaXN0WzBdO1xuICAgIGF3YWl0IENoYW1waW9uRmlsdGVyLmZpbHRlckJ5TGFuZShsYW5lTmFtZSwgYWxsQ2hhbXBpb25TdGF0cyk7XG4gIH07XG5cbiAgY29uc3QgY2hlY2tTb3J0aW5nT3B0aW9uID0gKGFsbENoYW1waW9uU3RhdHMpID0+IHtcbiAgICBjb25zdCBhY3RpdmVTb3J0aW5nT3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNvcnQuYWN0aXZlJyk7XG4gICAgaWYgKGFjdGl2ZVNvcnRpbmdPcHRpb24gPT09IG51bGwpIHtcbiAgICAgIFNvcnRDaGFtcGlvbnMuc29ydEJ5RGVmYXVsdE9yZGVyKGFsbENoYW1waW9uU3RhdHMpO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuZnJvbShhY3RpdmVTb3J0aW5nT3B0aW9uLmNsYXNzTGlzdCkuaW5jbHVkZXMoJ3dpbnJhdGUnKSkge1xuICAgICAgU29ydENoYW1waW9ucy5zb3J0Q2hhbXBpb25zQnlXaW5yYXRlKGFsbENoYW1waW9uU3RhdHMpO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuZnJvbShhY3RpdmVTb3J0aW5nT3B0aW9uLmNsYXNzTGlzdCkuaW5jbHVkZXMoJ3BpY2tyYXRlJykpIHtcbiAgICAgIFNvcnRDaGFtcGlvbnMuc29ydENoYW1waW9uc0J5UGlja3JhdGUoYWxsQ2hhbXBpb25TdGF0cyk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5mcm9tKGFjdGl2ZVNvcnRpbmdPcHRpb24uY2xhc3NMaXN0KS5pbmNsdWRlcygnZGFtYWdlJykpIHtcbiAgICAgIFNvcnRDaGFtcGlvbnMuc29ydENoYW1waW9uc0J5RGFtYWdlRG9uZShhbGxDaGFtcGlvblN0YXRzKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2hlY2tBY3RpdmVSb2xlT3B0aW9ucyA9IChhbGxDaGFtcGlvbkRldGFpbHMpID0+IHtcbiAgICBjb25zdCBhY3RpdmVSb2xlT3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yb2xlLmFjdGl2ZScpO1xuICAgIGlmIChhY3RpdmVSb2xlT3B0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgYWN0aXZlUm9sZXMgPSBBcnJheS5mcm9tKGFjdGl2ZVJvbGVPcHRpb25zKS5tYXAoKGFjdGl2ZVJvbGVPcHRpb24pID0+IHtcbiAgICAgIGNvbnN0IGFjdGl2ZVJvbGUgPSBhY3RpdmVSb2xlT3B0aW9uLmNsYXNzTGlzdFswXTtcbiAgICAgIHJldHVybiBhY3RpdmVSb2xlO1xuICAgIH0pO1xuICAgIENoYW1waW9uRmlsdGVyLmZpbHRlckJ5Um9sZShhY3RpdmVSb2xlcywgYWxsQ2hhbXBpb25EZXRhaWxzKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBjaGVja0FjdGl2ZURpZmZpY3VsdHlPcHRpb25zID0gKGFsbENoYW1waW9uRGV0YWlscykgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZURpZmZpY3VsdHlPcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRpZmZpY3VsdHkuYWN0aXZlJyk7XG4gICAgaWYgKGFjdGl2ZURpZmZpY3VsdHlPcHRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBhY3RpdmVEaWZmaWN1bHRpZXMgPSBBcnJheS5mcm9tKGFjdGl2ZURpZmZpY3VsdHlPcHRpb25zKS5tYXAoKGFjdGl2ZURpZmZpY3VsdHlPcHRpb24pID0+IHtcbiAgICAgIGNvbnN0IGFjdGl2ZURpZmZpY3VsdHkgPSBhY3RpdmVEaWZmaWN1bHR5T3B0aW9uLmNsYXNzTGlzdFswXTtcbiAgICAgIHJldHVybiBhY3RpdmVEaWZmaWN1bHR5O1xuICAgIH0pO1xuICAgIENoYW1waW9uRmlsdGVyLmZpbHRlckJ5RGlmZmljdWx0eShhY3RpdmVEaWZmaWN1bHRpZXMsIGFsbENoYW1waW9uRGV0YWlscyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3Qgc2VsZWN0TXVsdGlEcm9wZG93bk9wdGlvbiA9IChkcm9wZG93bk9wdGlvbikgPT4ge1xuICAgIGRyb3Bkb3duT3B0aW9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9O1xuXG4gIGNvbnN0IGRlc2VsZWN0RHJvcGRvd25PcHRpb24gPSAoZHJvcGRvd25PcHRpb24pID0+IHtcbiAgICBkcm9wZG93bk9wdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVEcm9wZG93bk9wdGlvbiA9IChkcm9wZG93bk9wdGlvbikgPT4ge1xuICAgIGlmICghQXJyYXkuZnJvbShkcm9wZG93bk9wdGlvbi5jbGFzc0xpc3QpLmluY2x1ZGVzKCdhY3RpdmUnKSkge1xuICAgICAgc2VsZWN0TXVsdGlEcm9wZG93bk9wdGlvbihkcm9wZG93bk9wdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlc2VsZWN0RHJvcGRvd25PcHRpb24oZHJvcGRvd25PcHRpb24pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZWxlY3RTaW5nbGVEcm9wZG93bk9wdGlvbiA9IChkcm9wZG93bk9wdGlvbikgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZURyb3Bkb3duT3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpbmdsZS1zZWxlY3QuYWN0aXZlJyk7XG4gICAgaWYgKGFjdGl2ZURyb3Bkb3duT3B0aW9uID09PSBudWxsKSB7XG4gICAgICBkcm9wZG93bk9wdGlvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGFjdGl2ZURyb3Bkb3duT3B0aW9uID09PSBkcm9wZG93bk9wdGlvbikge1xuICAgICAgZGVzZWxlY3REcm9wZG93bk9wdGlvbihkcm9wZG93bk9wdGlvbik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGFjdGl2ZURyb3Bkb3duT3B0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIGRyb3Bkb3duT3B0aW9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9O1xuXG4gIGNvbnN0IHJlZGlyZWN0VG9Gcm9udFBhZ2UgPSAoKSA9PiB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnaW5kZXguaHRtbCc7XG4gIH07XG5cbiAgY29uc3QgY2hhbXBpb25zUGFnZUNsaWNrRXZlbnRzID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgLyogSGVscGVyIGZ1bmN0aW9ucyBmb3IgY2xpY2sgZXZlbnRzICovXG4gICAgY29uc3QgY2hlY2tPcHRpb25zID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgYWxsQ2hhbXBpb25TdGF0cyA9IGF3YWl0IGdldEFsbENoYW1waW9uU3RhdHMoKTtcbiAgICAgIGNvbnN0IGFsbENoYW1waW9uRGV0YWlscyA9IGF3YWl0IGdldEFsbENoYW1waW9uRGV0YWlscygpO1xuICAgICAgYXdhaXQgY2hlY2tMYW5lRmlsdGVyT3B0aW9uKGFsbENoYW1waW9uU3RhdHMpO1xuICAgICAgY2hlY2tTb3J0aW5nT3B0aW9uKGFsbENoYW1waW9uU3RhdHMpO1xuICAgICAgY2hlY2tBY3RpdmVSb2xlT3B0aW9ucyhhbGxDaGFtcGlvbkRldGFpbHMpO1xuICAgICAgY2hlY2tBY3RpdmVEaWZmaWN1bHR5T3B0aW9ucyhhbGxDaGFtcGlvbkRldGFpbHMpO1xuICAgIH07XG5cbiAgICBjb25zdCBoaWRlQ2hhbXBpb25zU2VjdGlvbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGNoYW1waW9uc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb25zLXNlY3Rpb24nKTtcbiAgICAgIGNoYW1waW9uc1NlY3Rpb24uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIH07XG5cbiAgICBjb25zdCBzaG93Q2hhbXBpb25zU2VjdGlvbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGNoYW1waW9uc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb25zLXNlY3Rpb24nKTtcbiAgICAgIGNoYW1waW9uc1NlY3Rpb24uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICB9O1xuXG4gICAgY29uc3QgcmVtb3ZlQ2hhbXBpb25zUGFnZUxpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgY29uc3QgY2hhbXBpb25zUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGFtcGlvbnMtcGFnZScpO1xuICAgICAgY2hhbXBpb25zUGFnZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW1waW9uc1BhZ2VDbGlja0V2ZW50cyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZENoYW1waW9uc1BhZ2VMaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGNoYW1waW9uc1BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hhbXBpb25zLXBhZ2UnKTtcbiAgICAgIGNoYW1waW9uc1BhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFtcGlvbnNQYWdlQ2xpY2tFdmVudHMpO1xuICAgIH07XG5cbiAgICBjb25zdCBzaG93TG9hZGVyID0gKCkgPT4ge1xuICAgICAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlcicpO1xuICAgICAgbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH07XG5cbiAgICBjb25zdCBoaWRlTG9hZGVyID0gKCkgPT4ge1xuICAgICAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlcicpO1xuICAgICAgbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfTtcblxuICAgIGNvbnN0IGZpbHRlckFuZFNvcnRDaGFtcGlvbnNTZWN0aW9uID0gYXN5bmMgKHdhaXRUaW1lKSA9PiB7XG4gICAgICBoaWRlQ2hhbXBpb25zU2VjdGlvbigpO1xuICAgICAgc2hvd0xvYWRlcigpO1xuICAgICAgcmVtb3ZlQ2hhbXBpb25zUGFnZUxpc3RlbmVyKCk7XG4gICAgICBhd2FpdCBjaGVja09wdGlvbnMoKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzaG93Q2hhbXBpb25zU2VjdGlvbigpO1xuICAgICAgICBoaWRlTG9hZGVyKCk7XG4gICAgICB9LCB3YWl0VGltZSk7XG4gICAgICBhZGRDaGFtcGlvbnNQYWdlTGlzdGVuZXIoKTtcbiAgICB9O1xuXG4gICAgLyogY2xpY2sgZXZlbnQgcmVzcG9uc2VzICovXG4gICAgaWYgKEFycmF5LmZyb20oZXZlbnQudGFyZ2V0LmNsYXNzTGlzdCkuaW5jbHVkZXMoJ2Ryb3Bkb3duLWJ0bicpKSB7XG4gICAgICBkcm9wZG93bk9wdGlvbnNUb2dnbGUoZXZlbnQudGFyZ2V0KTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lID09PSAnY2hhbXBpb24tY29udGFpbmVyIHNob3duJykge1xuICAgICAgZGlzcGxheUNoYW1waW9uTW9kYWwoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pZCk7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lID09PSAnY2hhbXBpb24tY29udGFpbmVyIHNob3duJykge1xuICAgICAgZGlzcGxheUNoYW1waW9uTW9kYWwoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5kYXRhc2V0LmlkKTtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuZnJvbShldmVudC50YXJnZXQuY2xhc3NMaXN0KS5pbmNsdWRlcygnbXVsdGktc2VsZWN0JykpIHtcbiAgICAgIHRvZ2dsZURyb3Bkb3duT3B0aW9uKGV2ZW50LnRhcmdldCk7XG4gICAgICBmaWx0ZXJBbmRTb3J0Q2hhbXBpb25zU2VjdGlvbig2MDApO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5mcm9tKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QpLmluY2x1ZGVzKCdzaW5nbGUtc2VsZWN0JykpIHtcbiAgICAgIHNlbGVjdFNpbmdsZURyb3Bkb3duT3B0aW9uKGV2ZW50LnRhcmdldCk7XG4gICAgICBmaWx0ZXJBbmRTb3J0Q2hhbXBpb25zU2VjdGlvbigxMDAwKTtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuZnJvbShldmVudC50YXJnZXQuY2xhc3NMaXN0KS5pbmNsdWRlcygnaGVhZGVyLW9wdGlvbicpKSB7XG4gICAgICBzZWxlY3RMYW5lRmlsdGVyT3B0aW9uKGV2ZW50LnRhcmdldCk7XG4gICAgICBmaWx0ZXJBbmRTb3J0Q2hhbXBpb25zU2VjdGlvbig2MDApO1xuICAgIH1cblxuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnYXBwLW5hbWUnKSB7XG4gICAgICByZWRpcmVjdFRvRnJvbnRQYWdlKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNoYW1waW9uc1BhZ2VLZXlFdmVudHMgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IGFjdGl2ZUVsZW1lbnQgfSA9IGRvY3VtZW50O1xuXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQgJiYgYWN0aXZlRWxlbWVudC5jbGFzc05hbWUgPT09ICdjaGFtcGlvbi1jb250YWluZXIgc2hvd24nKSB7XG4gICAgICAgIGRpc3BsYXlDaGFtcGlvbk1vZGFsKGFjdGl2ZUVsZW1lbnQuZGF0YXNldC5pZCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhY3RpdmVFbGVtZW50ICYmIGFjdGl2ZUVsZW1lbnQuY2xhc3NOYW1lID09PSAnY2hhbXBpb24taW1nJykge1xuICAgICAgICBkaXNwbGF5Q2hhbXBpb25Nb2RhbChhY3RpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pZCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNoYW1waW9uc1BhZ2VMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgY2hhbXBpb25zUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGFtcGlvbnMtcGFnZScpO1xuICAgIGNoYW1waW9uc1BhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFtcGlvbnNQYWdlQ2xpY2tFdmVudHMpO1xuICAgIGNoYW1waW9uc1BhZ2UuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGNoYW1waW9uc1BhZ2VLZXlFdmVudHMpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY2hhbXBpb25zUGFnZUxpc3RlbmVycyxcbiAgICBkaXNwbGF5Q2hhbXBpb25Nb2RhbCxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IENoYW1waW9uc1BhZ2VDb250cm9sbGVyO1xuIiwiaW1wb3J0IGdldENoYW1waW9uU3RhdHMgZnJvbSAnLi4vY2hhbXBpb25EYXRhL2NoYW1waW9uU3RhdHMnO1xuaW1wb3J0IHsgY3JlYXRlQ2hhbXBpb25Db250YWluZXIgfSBmcm9tICcuLi90ZW1wbGF0ZXMvcmVuZGVySGVscGVycyc7XG5cbmNvbnN0IENoYW1waW9uRmlsdGVyID0gKCgpID0+IHtcbiAgY29uc3QgcmVuZGVyQWxsQ2hhbXBpb25zID0gYXN5bmMgKGFsbENoYW1waW9uU3RhdHMpID0+IHtcbiAgICBjb25zdCBjaGFtcGlvbnNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW1waW9ucy1zZWN0aW9uJyk7XG4gICAgYWxsQ2hhbXBpb25TdGF0cy5mb3JFYWNoKChjaGFtcGlvbikgPT4ge1xuICAgICAgY3JlYXRlQ2hhbXBpb25Db250YWluZXIoY2hhbXBpb24sIGNoYW1waW9uc1NlY3Rpb24pO1xuICAgIH0pO1xuICAgIHJldHVybiBjaGFtcGlvbnNTZWN0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyQ2hhbXBpb25zU2VjdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBjaGFtcGlvbnNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW1waW9ucy1zZWN0aW9uJyk7XG4gICAgY2hhbXBpb25zU2VjdGlvbi50ZXh0Q29udGVudCA9ICcnO1xuICB9O1xuXG4gIGNvbnN0IHNob3dDaGFtcGlvbiA9IChjaGFtcGlvbikgPT4ge1xuICAgIGNoYW1waW9uLmNsYXNzTGlzdC5hZGQoJ3Nob3duJyk7XG4gICAgY2hhbXBpb24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIH07XG5cbiAgY29uc3QgaGlkZUNoYW1waW9uID0gKGNoYW1waW9uKSA9PiB7XG4gICAgY2hhbXBpb24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgY2hhbXBpb24uY2xhc3NMaXN0LnJlbW92ZSgnc2hvd24nKTtcbiAgfTtcblxuICBjb25zdCBmaWx0ZXJCeUxhbmUgPSBhc3luYyAoY2xpY2tlZExhbmUsIGFsbENoYW1waW9uU3RhdHMpID0+IHtcbiAgICBjbGVhckNoYW1waW9uc1NlY3Rpb24oKTtcbiAgICBjb25zdCBjaGFtcGlvbnNTZWN0aW9uID0gYXdhaXQgcmVuZGVyQWxsQ2hhbXBpb25zKGFsbENoYW1waW9uU3RhdHMpO1xuICAgIGNoYW1waW9uc1NlY3Rpb24uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIGNvbnN0IGFsbENoYW1waW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFtcGlvbi1jb250YWluZXInKTtcbiAgICBpZiAoY2xpY2tlZExhbmUgPT09ICdhbGwnKSB7XG4gICAgICBhbGxDaGFtcGlvbnMuZm9yRWFjaCgoY2hhbXBpb24pID0+IHtcbiAgICAgICAgc2hvd0NoYW1waW9uKGNoYW1waW9uKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZXN1bHRzID0gW107XG4gICAgICBhbGxDaGFtcGlvbnMuZm9yRWFjaCgoY2hhbXBpb24pID0+IHtcbiAgICAgICAgY29uc3QgY2hhbXBpb25JZCA9IGNoYW1waW9uLmRhdGFzZXQuaWQ7XG4gICAgICAgIHJlc3VsdHMucHVzaChnZXRDaGFtcGlvblN0YXRzKGNoYW1waW9uSWQpKTtcbiAgICAgIH0pO1xuICAgICAgY29uc3QgY2hhbXBpb25TdGF0cyA9IGF3YWl0IFByb21pc2UuYWxsKHJlc3VsdHMpO1xuICAgICAgY2hhbXBpb25TdGF0cy5mb3JFYWNoKChjaGFtcGlvbikgPT4ge1xuICAgICAgICBjb25zdCBjaGFtcGlvbkxhbmUgPSBjaGFtcGlvbi5sYW5lO1xuICAgICAgICBjb25zdCBjaGFtcGlvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD0ke2NoYW1waW9uLmNoYW1waW9uSWR9XWApO1xuICAgICAgICBpZiAoY2hhbXBpb25MYW5lLnRvTG93ZXJDYXNlKCkgIT09IGNsaWNrZWRMYW5lKSB7XG4gICAgICAgICAgaGlkZUNoYW1waW9uKGNoYW1waW9uRWxlbWVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2hvd0NoYW1waW9uKGNoYW1waW9uRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBmaWx0ZXJCeVJvbGUgPSAoYWN0aXZlUm9sZXMsIGFsbENoYW1waW9uRGV0YWlscykgPT4ge1xuICAgIGNvbnN0IGNoYW1waW9uRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhbXBpb24tY29udGFpbmVyJyk7XG5cbiAgICBjaGFtcGlvbkVsZW1lbnRzLmZvckVhY2goKGNoYW1waW9uKSA9PiB7XG4gICAgICBsZXQgcm9sZU1hdGNoRm91bmQgPSBmYWxzZTtcbiAgICAgIGFjdGl2ZVJvbGVzLmZvckVhY2goKHJvbGUpID0+IHtcbiAgICAgICAgY29uc3QgY2hhbXBpb25Sb2xlcyA9IGFsbENoYW1waW9uRGV0YWlsc1tjaGFtcGlvbi5kYXRhc2V0LmlkXS50YWdzO1xuICAgICAgICBjaGFtcGlvblJvbGVzLmZvckVhY2goKGNoYW1waW9uUm9sZSkgPT4ge1xuICAgICAgICAgIGlmIChjaGFtcGlvblJvbGUudG9Mb3dlckNhc2UoKSA9PT0gcm9sZSkge1xuICAgICAgICAgICAgcm9sZU1hdGNoRm91bmQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIGlmICghcm9sZU1hdGNoRm91bmQpIHtcbiAgICAgICAgaGlkZUNoYW1waW9uKGNoYW1waW9uKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBjYXRlZ29yaXNlRGlmZmljdWx0eU51bSA9IChkaWZmaWN1bHR5TnVtKSA9PiB7XG4gICAgaWYgKGRpZmZpY3VsdHlOdW0gPD0gMykge1xuICAgICAgcmV0dXJuICdsb3cnO1xuICAgIH1cblxuICAgIGlmIChkaWZmaWN1bHR5TnVtIDw9IDYpIHtcbiAgICAgIHJldHVybiAnbWVkaXVtJztcbiAgICB9XG5cbiAgICByZXR1cm4gJ2hpZ2gnO1xuICB9O1xuXG4gIGNvbnN0IGZpbHRlckJ5RGlmZmljdWx0eSA9IGFzeW5jIChhY3RpdmVEaWZmaWN1bHRpZXMsIGFsbENoYW1waW9uRGV0YWlscykgPT4ge1xuICAgIGNvbnN0IGNoYW1waW9uRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhbXBpb24tY29udGFpbmVyJyk7XG5cbiAgICBjaGFtcGlvbkVsZW1lbnRzLmZvckVhY2goKGNoYW1waW9uKSA9PiB7XG4gICAgICBsZXQgZGlmZmljdWx0eU1hdGNoRm91bmQgPSBmYWxzZTtcbiAgICAgIGFjdGl2ZURpZmZpY3VsdGllcy5mb3JFYWNoKChkaWZmaWN1bHR5KSA9PiB7XG4gICAgICAgIGNvbnN0IGNoYW1waW9uRGlmZmljdWx0eU51bSA9IGFsbENoYW1waW9uRGV0YWlsc1tjaGFtcGlvbi5kYXRhc2V0LmlkXS5pbmZvLmRpZmZpY3VsdHk7XG4gICAgICAgIGNvbnN0IGNoYW1waW9uRGlmZmljdWx0eSA9IGNhdGVnb3Jpc2VEaWZmaWN1bHR5TnVtKGNoYW1waW9uRGlmZmljdWx0eU51bSk7XG5cbiAgICAgICAgaWYgKGRpZmZpY3VsdHkudG9Mb3dlckNhc2UoKSA9PT0gY2hhbXBpb25EaWZmaWN1bHR5KSB7XG4gICAgICAgICAgZGlmZmljdWx0eU1hdGNoRm91bmQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmICghZGlmZmljdWx0eU1hdGNoRm91bmQpIHtcbiAgICAgICAgaGlkZUNoYW1waW9uKGNoYW1waW9uKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGZpbHRlckJ5TGFuZSxcbiAgICBmaWx0ZXJCeVJvbGUsXG4gICAgZmlsdGVyQnlEaWZmaWN1bHR5LFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhbXBpb25GaWx0ZXI7XG4iLCJpbXBvcnQgQ2hhbXBpb25zUGFnZUNvbnRyb2xsZXIgZnJvbSAnLi9jaGFtcGlvbnNQYWdlQ29udHJvbGxlcic7XG5cbmNvbnN0IFNlYXJjaGJhckNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBjb25zdCBzaG93QXV0b0NvbXBsZXRlTmFtZXMgPSAoc2VhcmNoQ29udGFpbmVyKSA9PiB7XG4gICAgY29uc3QgYXV0b0NvbXBsZXRlTmFtZXMgPSBzZWFyY2hDb250YWluZXIucXVlcnlTZWxlY3RvcignLmF1dG8tY29tcGxldGUtbmFtZXMnKTtcbiAgICBhdXRvQ29tcGxldGVOYW1lcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfTtcblxuICBjb25zdCBoaWRlQXV0b0NvbXBsZXRlTmFtZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgYXV0b0NvbXBsZXRlTmFtZUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmF1dG8tY29tcGxldGUtbmFtZXMnKTtcbiAgICBhdXRvQ29tcGxldGVOYW1lRWxlbWVudHMuZm9yRWFjaCgoYXV0b0NvbXBsZXRlTmFtZUVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGF1dG9Db21wbGV0ZU5hbWVzID0gYXV0b0NvbXBsZXRlTmFtZUVsZW1lbnQ7XG4gICAgICBhdXRvQ29tcGxldGVOYW1lcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHNlYXJjaGJhckZvY3VzSW5FdmVudCA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnc2VhcmNoJykge1xuICAgICAgY29uc3Qgc2VhcmNoQ29udGFpbmVyID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICBzaG93QXV0b0NvbXBsZXRlTmFtZXMoc2VhcmNoQ29udGFpbmVyKTtcbiAgICAgIGV2ZW50LnRhcmdldC5mb2N1cygpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZWFyY2hiYXJGb2N1c291dEV2ZW50ID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKCFldmVudC5yZWxhdGVkVGFyZ2V0IHx8IChldmVudC5yZWxhdGVkVGFyZ2V0LmNsYXNzTmFtZSAhPT0gJ2F1dG8tY29tcGxldGUtbmFtZS13cmFwcGVyJyAmJiBldmVudC5yZWxhdGVkVGFyZ2V0LmNsYXNzTmFtZSAhPT0gJ3NlYXJjaCcpKSB7XG4gICAgICBoaWRlQXV0b0NvbXBsZXRlTmFtZXMoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2VhcmNoQmFySW5wdXRFdmVudCA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnc2VhcmNoJykge1xuICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgIGNvbnN0IGF1dG9Db21wbGV0ZU5hbWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmF1dG8tY29tcGxldGUtbmFtZScpO1xuICAgICAgYXV0b0NvbXBsZXRlTmFtZXMuZm9yRWFjaCgoYXV0b0NvbXBsZXRlTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBuYW1lID0gYXV0b0NvbXBsZXRlTmFtZTtcbiAgICAgICAgaWYgKG5hbWUuaWQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgICAgbmFtZS5wYXJlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5hbWUucGFyZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2VhcmNoYmFyS2V5ZG93bkV2ZW50cyA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGlmICgoZXZlbnQua2V5ID09PSAnQXJyb3dEb3duJyB8fCBldmVudC5rZXkgPT09ICdBcnJvd1VwJykgJiYgZXZlbnQudGFyZ2V0ICE9PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykpIHtcbiAgICAgIGxldCB7IGFjdGl2ZUVsZW1lbnQgfSA9IGRvY3VtZW50O1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgbGV0IGdvVG9TdGFydDtcbiAgICAgIGNvbnN0IGFjdGlvbiA9IHtcbiAgICAgICAgQXJyb3dVcDogJ3ByZXZpb3VzJywgQXJyb3dEb3duOiAnbmV4dCcsXG4gICAgICB9O1xuXG4gICAgICBpZiAoYWN0aXZlRWxlbWVudC5jbGFzc05hbWUgPT09ICdzZWFyY2gnICYmIGV2ZW50LmtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgICAgYWN0aXZlRWxlbWVudCA9IGFjdGl2ZUVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICAvKiBTa2lwcyBhdXRvY29tcGxldGUgbmFtZXMgd2hpY2ggYXJlIGN1cnJlbnRseSBub3QgZGlzcGxheWVkICovXG4gICAgICAgIHdoaWxlIChhY3RpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgPSBhY3RpdmVFbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgfVxuICAgICAgICBhY3RpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY3RpdmVFbGVtZW50ID0gYWN0aXZlRWxlbWVudFtgJHthY3Rpb25bZXZlbnQua2V5XX1FbGVtZW50U2libGluZ2BdO1xuICAgICAgICB3aGlsZSAoYWN0aXZlRWxlbWVudCAmJiBhY3RpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgPSBhY3RpdmVFbGVtZW50W2Ake2FjdGlvbltldmVudC5rZXldfUVsZW1lbnRTaWJsaW5nYF07XG4gICAgICAgIH1cbiAgICAgICAgLyogQ2hlY2tzIHdoaWNoIHNlYXJjaCBiYXIgZHJvcGRvd24gaXMgY3VycmVudGx5IGRpc3BsYXllZCAqL1xuICAgICAgICBjb25zdCBhdXRvQ29tcGxldGVOYW1lRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXV0by1jb21wbGV0ZS1uYW1lcycpO1xuICAgICAgICBjb25zdCBhdXRvQ29tcGxldGVOYW1lcyA9IEFycmF5LmZyb20oYXV0b0NvbXBsZXRlTmFtZUVsZW1lbnRzKS5maWx0ZXIoXG4gICAgICAgICAgKGF1dG9Db21wbGV0ZU5hbWVFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc1Nob3dpbmcgPSBhdXRvQ29tcGxldGVOYW1lRWxlbWVudC5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snO1xuICAgICAgICAgICAgcmV0dXJuIGlzU2hvd2luZztcbiAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgICAgICBpZiAoYXV0b0NvbXBsZXRlTmFtZXNbMF0gIT09IHVuZGVmaW5lZCAmJiAhYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgIC8qIFJldHVybnMgdG8gdGhlIHN0YXJ0IG9yIHRoZSBlbmQgb2YgdGhlIGRyb3Bkb3duIHdoZW4gYW4gYXJyb3cga2V5IGlzIHByZXNzZWQgKi9cbiAgICAgICAgICBnb1RvU3RhcnQgPSBhY3Rpb25bZXZlbnQua2V5XSA9PT0gJ25leHQnIHx8IGV2ZW50LmtleSA9PT0gJ0hvbWUnO1xuICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgPSBhdXRvQ29tcGxldGVOYW1lc1swXS5jaGlsZHJlbltcbiAgICAgICAgICAgIGdvVG9TdGFydCA/IDAgOiBhdXRvQ29tcGxldGVOYW1lc1swXS5jaGlsZHJlbi5sZW5ndGggLSAxXG4gICAgICAgICAgXTtcbiAgICAgICAgICB3aGlsZSAoYWN0aXZlRWxlbWVudCAmJiBhY3RpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgICAgYWN0aXZlRWxlbWVudCA9IGFjdGl2ZUVsZW1lbnRbYCR7YWN0aW9uW2V2ZW50LmtleV19RWxlbWVudFNpYmxpbmdgXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICBhY3RpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBjb25zdCB7IGFjdGl2ZUVsZW1lbnQgfSA9IGRvY3VtZW50O1xuICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQgJiYgYWN0aXZlRWxlbWVudC5jbGFzc05hbWUgPT09ICdhdXRvLWNvbXBsZXRlLW5hbWUtd3JhcHBlcicpIHtcbiAgICAgICAgY29uc3Qgc2VhcmNoQ29udGFpbmVyQ2xhc3NOYW1lID0gYWN0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0WzFdO1xuICAgICAgICBjb25zdCBhdXRvQ29tcGxldGVOYW1lID0gYWN0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcblxuICAgICAgICAvKiBDaGVja3Mgd2hpY2ggcGFnZSB0aGUgc2VhcmNoIGJhciBpcyBvbiAqL1xuICAgICAgICBpZiAoc2VhcmNoQ29udGFpbmVyQ2xhc3NOYW1lID09PSAnZGVza3RvcC1zZWFyY2gtY29udGFpbmVyJ1xuICAgICAgICAgICAgfHwgc2VhcmNoQ29udGFpbmVyQ2xhc3NOYW1lID09PSAnbW9iaWxlLXNlYXJjaC1jb250YWluZXInKSB7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NoYW1waW9uSWQnLCBhdXRvQ29tcGxldGVOYW1lLmRhdGFzZXQuY2hhbXBpb25JZCk7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnY2hhbXBpb25zLmh0bWwnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGF3YWl0IENoYW1waW9uc1BhZ2VDb250cm9sbGVyLmRpc3BsYXlDaGFtcGlvbk1vZGFsKGF1dG9Db21wbGV0ZU5hbWUuZGF0YXNldC5jaGFtcGlvbklkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZWFyY2hiYXJDbGlja0V2ZW50cyA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGNvbnN0IGNsaWNrQXV0b0NvbXBsZXRlTmFtZSA9IGFzeW5jIChzZWFyY2hDb250YWluZXJDbGFzc05hbWUsIGF1dG9Db21wbGV0ZU5hbWUpID0+IHtcbiAgICAgIGlmIChzZWFyY2hDb250YWluZXJDbGFzc05hbWUgPT09ICdkZXNrdG9wLXNlYXJjaC1jb250YWluZXInXG4gICAgICB8fCBzZWFyY2hDb250YWluZXJDbGFzc05hbWUgPT09ICdtb2JpbGUtc2VhcmNoLWNvbnRhaW5lcicpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NoYW1waW9uSWQnLCBhdXRvQ29tcGxldGVOYW1lLmRhdGFzZXQuY2hhbXBpb25JZCk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ2NoYW1waW9ucy5odG1sJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF3YWl0IENoYW1waW9uc1BhZ2VDb250cm9sbGVyLmRpc3BsYXlDaGFtcGlvbk1vZGFsKGF1dG9Db21wbGV0ZU5hbWUuZGF0YXNldC5jaGFtcGlvbklkKTtcbiAgICAgICAgY29uc3QgYXV0b0NvbXBsZXRlTmFtZUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmF1dG8tY29tcGxldGUtbmFtZXMnKTtcbiAgICAgICAgYXV0b0NvbXBsZXRlTmFtZUVsZW1lbnRzLmZvckVhY2goKGF1dG9Db21wbGV0ZU5hbWVFbGVtZW50KSA9PiB7XG4gICAgICAgICAgY29uc3QgYXV0b0NvbXBsZXRlTmFtZXMgPSBhdXRvQ29tcGxldGVOYW1lRWxlbWVudDtcbiAgICAgICAgICBhdXRvQ29tcGxldGVOYW1lcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IHNlYXJjaENvbnRhaW5lciA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdhdXRvLWNvbXBsZXRlLW5hbWUtd3JhcHBlcicpIHtcbiAgICAgIGNvbnN0IHNlYXJjaENvbnRhaW5lckNsYXNzTmFtZSA9IHNlYXJjaENvbnRhaW5lci5jbGFzc0xpc3RbMV07XG4gICAgICBjb25zdCBhdXRvQ29tcGxldGVOYW1lID0gZXZlbnQudGFyZ2V0LmZpcnN0Q2hpbGQ7XG4gICAgICBjbGlja0F1dG9Db21wbGV0ZU5hbWUoc2VhcmNoQ29udGFpbmVyQ2xhc3NOYW1lLCBhdXRvQ29tcGxldGVOYW1lKTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2F1dG8tY29tcGxldGUtbmFtZScpIHtcbiAgICAgIGNvbnN0IHNlYXJjaENvbnRhaW5lckNsYXNzTmFtZSA9IHNlYXJjaENvbnRhaW5lci5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdFsxXTtcbiAgICAgIGNvbnN0IGF1dG9Db21wbGV0ZU5hbWUgPSBldmVudC50YXJnZXQ7XG4gICAgICBjbGlja0F1dG9Db21wbGV0ZU5hbWUoc2VhcmNoQ29udGFpbmVyQ2xhc3NOYW1lLCBhdXRvQ29tcGxldGVOYW1lKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2VhcmNoQ29udGFpbmVyTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIC8vIGNvbnN0IHNlYXJjaENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtY29udGFpbmVyJyk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIHNlYXJjaGJhckZvY3VzSW5FdmVudCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBzZWFyY2hiYXJGb2N1c291dEV2ZW50KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHNlYXJjaEJhcklucHV0RXZlbnQpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBzZWFyY2hiYXJLZXlkb3duRXZlbnRzKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlYXJjaGJhckNsaWNrRXZlbnRzKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHNlYXJjaENvbnRhaW5lckxpc3RlbmVycyxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaGJhckNvbnRyb2xsZXI7XG4iLCIvLyBpbXBvcnQgeyBnZXRBbGxDaGFtcGlvblN0YXRzIH0gZnJvbSAnLi4vY2hhbXBpb25EYXRhL2dldEFsbENoYW1waW9ucyc7XG5pbXBvcnQgeyBjcmVhdGVDaGFtcGlvbkNvbnRhaW5lciB9IGZyb20gJy4uL3RlbXBsYXRlcy9yZW5kZXJIZWxwZXJzJztcblxuY29uc3QgU29ydENoYW1waW9ucyA9ICgoKSA9PiB7XG4gIGNvbnN0IGNsZWFyQ2hhbXBpb25zU2VjdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBjaGFtcGlvbnNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW1waW9ucy1zZWN0aW9uJyk7XG4gICAgY2hhbXBpb25zU2VjdGlvbi5zdHlsZS52aXNpYmxpdHkgPSAnaGlkZGVuJztcbiAgICBjaGFtcGlvbnNTZWN0aW9uLnRleHRDb250ZW50ID0gJyc7XG4gIH07XG5cbiAgY29uc3QgcmVjcmVhdGVDaGFtcGlvbnNTZWN0aW9uID0gKGNoYW1waW9ucykgPT4ge1xuICAgIGNvbnN0IGNoYW1waW9uc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb25zLXNlY3Rpb24nKTtcbiAgICBjaGFtcGlvbnMuZm9yRWFjaCgoY2hhbXBpb24pID0+IHtcbiAgICAgIGNyZWF0ZUNoYW1waW9uQ29udGFpbmVyKGNoYW1waW9uLCBjaGFtcGlvbnNTZWN0aW9uKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBmaWx0ZXJDaGFtcGlvbnMgPSAoYWxsQ2hhbXBpb25TdGF0cykgPT4ge1xuICAgIC8vIGNvbnN0IGFsbENoYW1waW9uU3RhdHMgPSBhd2FpdCBnZXRBbGxDaGFtcGlvblN0YXRzKCk7XG4gICAgY29uc3QgZmlsdGVyZWRDaGFtcGlvblN0YXRzID0gYWxsQ2hhbXBpb25TdGF0cy5maWx0ZXIoKGNoYW1waW9uU3RhdHMpID0+IHtcbiAgICAgIGNvbnN0IGNoYW1waW9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPSR7Y2hhbXBpb25TdGF0cy5pZH1dYCk7XG4gICAgICByZXR1cm4gY2hhbXBpb25FbGVtZW50LmNsYXNzTmFtZSA9PT0gJ2NoYW1waW9uLWNvbnRhaW5lciBzaG93bic7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmlsdGVyZWRDaGFtcGlvblN0YXRzO1xuICB9O1xuXG4gIGNvbnN0IHNvcnRDaGFtcGlvbnNCeVdpbnJhdGUgPSAoYWxsQ2hhbXBpb25TdGF0cykgPT4ge1xuICAgIGNvbnN0IGZpbHRlcmVkQ2hhbXBpb25TdGF0cyA9IGZpbHRlckNoYW1waW9ucyhhbGxDaGFtcGlvblN0YXRzKTtcbiAgICBjb25zdCBmaWx0ZXJlZENoYW1waW9uc1NvcnRlZCA9IGZpbHRlcmVkQ2hhbXBpb25TdGF0cy5zb3J0KChhLCBiKSA9PiBiLndpblJhdGUgLSBhLndpblJhdGUpO1xuICAgIGNsZWFyQ2hhbXBpb25zU2VjdGlvbigpO1xuICAgIHJlY3JlYXRlQ2hhbXBpb25zU2VjdGlvbihmaWx0ZXJlZENoYW1waW9uc1NvcnRlZCk7XG4gICAgcmV0dXJuIGZpbHRlcmVkQ2hhbXBpb25zU29ydGVkO1xuICB9O1xuXG4gIGNvbnN0IHNvcnRDaGFtcGlvbnNCeVBpY2tyYXRlID0gKGFsbENoYW1waW9uU3RhdHMpID0+IHtcbiAgICBjb25zdCBmaWx0ZXJlZENoYW1waW9uU3RhdHMgPSBmaWx0ZXJDaGFtcGlvbnMoYWxsQ2hhbXBpb25TdGF0cyk7XG4gICAgY29uc3QgZmlsdGVyZWRDaGFtcGlvbnNTb3J0ZWQgPSBmaWx0ZXJlZENoYW1waW9uU3RhdHMuc29ydCgoYSwgYikgPT4gYi5waWNrUmF0ZSAtIGEucGlja1JhdGUpO1xuICAgIGNsZWFyQ2hhbXBpb25zU2VjdGlvbigpO1xuICAgIHJlY3JlYXRlQ2hhbXBpb25zU2VjdGlvbihmaWx0ZXJlZENoYW1waW9uc1NvcnRlZCk7XG4gICAgcmV0dXJuIGZpbHRlcmVkQ2hhbXBpb25zU29ydGVkO1xuICB9O1xuXG4gIGNvbnN0IHNvcnRDaGFtcGlvbnNCeURhbWFnZURvbmUgPSAoYWxsQ2hhbXBpb25TdGF0cykgPT4ge1xuICAgIGNvbnN0IGZpbHRlcmVkQ2hhbXBpb25TdGF0cyA9IGZpbHRlckNoYW1waW9ucyhhbGxDaGFtcGlvblN0YXRzKTtcblxuICAgIGNvbnN0IGZpbHRlcmVkQ2hhbXBpb25zU29ydGVkID0gZmlsdGVyZWRDaGFtcGlvblN0YXRzLnNvcnQoXG4gICAgICAoYSwgYikgPT4gYi5kYW1hZ2VQZXJNYXRjaC50b3RhbERhbWFnZS52YWx1ZSAtIGEuZGFtYWdlUGVyTWF0Y2gudG90YWxEYW1hZ2UudmFsdWUsXG4gICAgKTtcbiAgICBjbGVhckNoYW1waW9uc1NlY3Rpb24oKTtcbiAgICByZWNyZWF0ZUNoYW1waW9uc1NlY3Rpb24oZmlsdGVyZWRDaGFtcGlvbnNTb3J0ZWQpO1xuICAgIHJldHVybiBmaWx0ZXJlZENoYW1waW9uc1NvcnRlZDtcbiAgfTtcblxuICBjb25zdCBzb3J0QnlEZWZhdWx0T3JkZXIgPSAoYWxsQ2hhbXBpb25TdGF0cykgPT4ge1xuICAgIC8vIGNvbnN0IGFsbENoYW1waW9uU3RhdHMgPSBhd2FpdCBnZXRBbGxDaGFtcGlvblN0YXRzKCk7XG4gICAgY29uc3QgZmlsdGVyZWRDaGFtcGlvblN0YXRzID0gYWxsQ2hhbXBpb25TdGF0cy5maWx0ZXIoKGNoYW1waW9uU3RhdHMpID0+IHtcbiAgICAgIGNvbnN0IGNoYW1waW9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPSR7Y2hhbXBpb25TdGF0cy5pZH1dYCk7XG4gICAgICBpZiAoY2hhbXBpb25FbGVtZW50ID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjaGFtcGlvbkVsZW1lbnQuY2xhc3NOYW1lID09PSAnY2hhbXBpb24tY29udGFpbmVyIHNob3duJztcbiAgICB9KTtcbiAgICBjbGVhckNoYW1waW9uc1NlY3Rpb24oKTtcbiAgICByZWNyZWF0ZUNoYW1waW9uc1NlY3Rpb24oZmlsdGVyZWRDaGFtcGlvblN0YXRzKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHNvcnRDaGFtcGlvbnNCeVdpbnJhdGUsXG4gICAgc29ydENoYW1waW9uc0J5UGlja3JhdGUsXG4gICAgc29ydENoYW1waW9uc0J5RGFtYWdlRG9uZSxcbiAgICBzb3J0QnlEZWZhdWx0T3JkZXIsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBTb3J0Q2hhbXBpb25zO1xuIiwiY29uc3QgZmV0Y2hDaGFtcGlvbkRldGFpbHMgPSBhc3luYyAoY2hhbXBpb25JZCwgbGF0ZXN0VmVyc2lvbikgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vJHtsYXRlc3RWZXJzaW9ufS9kYXRhL2VuX1VTL2NoYW1waW9uLyR7Y2hhbXBpb25JZH0uanNvbmAsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICBjb25zdCBjaGFtcGlvbnMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IGNoYW1waW9uRGV0YWlscyA9IGNoYW1waW9ucy5kYXRhW2NoYW1waW9uSWRdO1xuXG4gIHJldHVybiBjaGFtcGlvbkRldGFpbHM7XG59O1xuXG5jb25zdCBnZXRDaGFtcGlvblBhc3NpdmVzID0gKGNoYW1waW9uRGV0YWlscywgbGF0ZXN0VmVyc2lvbikgPT4ge1xuICBjb25zdCBwYXNzaXZlRGF0YSA9IGNoYW1waW9uRGV0YWlscy5wYXNzaXZlO1xuICBjb25zdCBwYXNzaXZlTmFtZSA9IHBhc3NpdmVEYXRhLm5hbWU7XG4gIGNvbnN0IHBhc3NpdmVEZXNjcmlwdGlvbiA9IHBhc3NpdmVEYXRhLmRlc2NyaXB0aW9uO1xuICBjb25zdCBwYXNzaXZlSWQgPSBwYXNzaXZlRGF0YS5pbWFnZS5mdWxsO1xuICBjb25zdCBwYXNzaXZlSW1nVXJsID0gYGh0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi8ke2xhdGVzdFZlcnNpb259L2ltZy9wYXNzaXZlLyR7cGFzc2l2ZUlkfWA7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXNzaXZlTmFtZSxcbiAgICBwYXNzaXZlRGVzY3JpcHRpb24sXG4gICAgcGFzc2l2ZUltZ1VybCxcbiAgfTtcbn07XG5cbmNvbnN0IGdldENoYW1waW9uU3BlbGxzID0gKGNoYW1waW9uRGV0YWlscywgbGF0ZXN0VmVyc2lvbikgPT4ge1xuICBjb25zdCBzcGVsbHNEYXRhID0gY2hhbXBpb25EZXRhaWxzLnNwZWxscztcbiAgY29uc3Qgc3BlbGxzID0gW107XG5cbiAgc3BlbGxzRGF0YS5mb3JFYWNoKChzcGVsbCkgPT4ge1xuICAgIGNvbnN0IHNwZWxsT2JqZWN0ID0ge1xuICAgICAgbmFtZTogc3BlbGwubmFtZSxcbiAgICAgIGlkOiBzcGVsbC5pZCxcbiAgICAgIGRlc2NyaXB0aW9uOiBzcGVsbC5kZXNjcmlwdGlvbixcbiAgICAgIGNvc3RCdXJuOiBzcGVsbC5jb3N0QnVybixcbiAgICAgIGNvc3RUeXBlOiBzcGVsbC5jb3N0VHlwZSxcbiAgICAgIGNvb2xkb3duOiBzcGVsbC5jb29sZG93bkJ1cm4sXG4gICAgICBpbWdVcmw6IGBodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vJHtsYXRlc3RWZXJzaW9ufS9pbWcvc3BlbGwvJHtzcGVsbC5pZH0ucG5nYCxcbiAgICB9O1xuICAgIHNwZWxscy5wdXNoKHNwZWxsT2JqZWN0KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHNwZWxscztcbn07XG5cbmNvbnN0IGdldENoYW1waW9uRGV0YWlscyA9IGFzeW5jIChjaGFtcGlvbklkLCBsYXRlc3RWZXJzaW9uKSA9PiB7XG4gIGNvbnN0IGNoYW1waW9uRGV0YWlscyA9IGF3YWl0IGZldGNoQ2hhbXBpb25EZXRhaWxzKGNoYW1waW9uSWQsIGxhdGVzdFZlcnNpb24pO1xuICBjb25zdCBjaGFtcGlvblBhc3NpdmUgPSBnZXRDaGFtcGlvblBhc3NpdmVzKGNoYW1waW9uRGV0YWlscywgbGF0ZXN0VmVyc2lvbik7XG4gIGNvbnN0IHNwZWxscyA9IGdldENoYW1waW9uU3BlbGxzKGNoYW1waW9uRGV0YWlscywgbGF0ZXN0VmVyc2lvbik7XG5cbiAgLy8gTWFrZSBmaXJzdCBsZXR0ZXIgb2YgdGhlIGNoYW1waW9uIHRpdGxlIGEgY2FwaXRhbCBsZXR0ZXIuXG4gIGNvbnN0IGNoYW1waW9uVGl0bGUgPSBjaGFtcGlvbkRldGFpbHMudGl0bGUucmVwbGFjZShcbiAgICBjaGFtcGlvbkRldGFpbHMudGl0bGVbMF0sIGNoYW1waW9uRGV0YWlscy50aXRsZVswXS50b1VwcGVyQ2FzZSgpLFxuICApO1xuXG4gIGlmIChjaGFtcGlvbkRldGFpbHMucGFydHlwZSA9PT0gJ05vbmUnKSB7XG4gICAgY2hhbXBpb25EZXRhaWxzLnBhcnR5cGUgPSAnTWFuYWxlc3MnO1xuICB9XG5cbiAgaWYgKGNoYW1waW9uRGV0YWlscy5pZCA9PT0gJ0Frc2hhbicpIHtcbiAgICBjaGFtcGlvbkRldGFpbHMuYWxseXRpcHNbMF0gPSAnWW91IGNhbuKAmXQgdXNlIGNvbnN1bWFibGVzIGxpa2UgcG90aW9ucyBkdXJpbmcgeW91ciBDb21ldXBwYW5jZSwgbWFrZSBzdXJlIHRvIHVzZSB0aGVtIGJlZm9yZSBjaGFubmVsaW5nLic7XG4gIH1cblxuICBpZiAoY2hhbXBpb25EZXRhaWxzLmlkID09PSAnVmV4Jykge1xuICAgIGNoYW1waW9uRGV0YWlscy5hbGx5dGlwcy5wdXNoKCdWZXggaXMgZ3JlYXQgYXQgZGl2aW5nIGludG8gdGhlIGJhY2tsaW5lLCBidXQgaGVyIGVzY2FwZSBwb3RlbnRpYWwgaXMgbG93IHNvIHRpbWluZyBpcyBrZXkuJyk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5hbWU6IGNoYW1waW9uRGV0YWlscy5uYW1lLFxuICAgIGlkOiBjaGFtcGlvbkRldGFpbHMuaWQsXG4gICAgdGl0bGU6IGNoYW1waW9uVGl0bGUsXG4gICAgbG9yZTogY2hhbXBpb25EZXRhaWxzLmxvcmUsXG4gICAgcm9sZXM6IGNoYW1waW9uRGV0YWlscy50YWdzLFxuICAgIHNraW5zOiBjaGFtcGlvbkRldGFpbHMuc2tpbnMsXG4gICAgcmVzb3VyY2U6IGNoYW1waW9uRGV0YWlscy5wYXJ0eXBlLFxuICAgIHBhc3NpdmU6IGNoYW1waW9uUGFzc2l2ZSxcbiAgICBzcGVsbHMsXG4gICAgdGlwczogY2hhbXBpb25EZXRhaWxzLmFsbHl0aXBzLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0Q2hhbXBpb25EZXRhaWxzO1xuIiwiY29uc3QgZmV0Y2hDaGFtcGlvblN0YXRzID0gYXN5bmMgKGNoYW1waW9uSWQpID0+IHtcbiAgLyogUmVsYXRpdmUgdXJscyBhcmUgdXNlZCBmb3Igd2hlbiB0aGUgYXBwIGlzIGluIHByb2R1Y3Rpb24gYW5kIGxvY2FsaG9zdCB1cmwgZm9yIGRldmVsb3BtZW50ICovXG4gIGNvbnN0IGRldlVybCA9ICdodHRwOi8vMTI3LjAuMC4xOjU1MDAvZnJvbnRlbmQvZGlzdC9jaGFtcGlvbnMuaHRtbCc7XG4gIGNvbnN0IHJlc3BvbnNlID0gd2luZG93LmxvY2F0aW9uLmhyZWYgPT09IGRldlVybFxuICAgID8gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS8ke2NoYW1waW9uSWR9YCwgeyBtb2RlOiAnY29ycycgfSlcbiAgICA6IGF3YWl0IGZldGNoKGAke2NoYW1waW9uSWR9YCwgeyBtb2RlOiAnY29ycycgfSk7XG4gIGNvbnN0IGNoYW1waW9uU3RhdHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIGNoYW1waW9uU3RhdHM7XG59O1xuXG5jb25zdCBnZXRDaGFtcGlvblN0YXRzID0gYXN5bmMgKGNoYW1waW9uSWQpID0+IHtcbiAgY29uc3QgY2hhbXBpb25TdGF0cyA9IGF3YWl0IGZldGNoQ2hhbXBpb25TdGF0cyhjaGFtcGlvbklkKTtcbiAgY29uc3Qgd2luUmF0ZSA9IGNoYW1waW9uU3RhdHMud2luUmF0ZS50b0ZpeGVkKDIpO1xuICBjb25zdCBwaWNrUmF0ZSA9IGNoYW1waW9uU3RhdHMucGlja1JhdGUudG9GaXhlZCgyKTtcbiAgY29uc3QgbGFuZSA9IGNoYW1waW9uU3RhdHMubGFuZVswXSArIGNoYW1waW9uU3RhdHMubGFuZS5zdWJzdHJpbmcoMSkudG9Mb3dlckNhc2UoKTtcblxuICByZXR1cm4ge1xuICAgIGNoYW1waW9uSWQsXG4gICAga2RhOiBjaGFtcGlvblN0YXRzLmtkYVJhdGlvLFxuICAgIGRhbWFnZVBlck1hdGNoOiBjaGFtcGlvblN0YXRzLmRhbWFnZVBlck1hdGNoLFxuICAgIGl0ZW1TZXRzOiBjaGFtcGlvblN0YXRzLml0ZW1DaG9pY2VzLnNsaWNlKDEpLFxuICAgIGJlc3RNYXRjaFVwczogY2hhbXBpb25TdGF0cy5tYXRjaFVwcy5iZXN0TWF0Y2hVcHMsXG4gICAgd29yc3RNYXRjaFVwczogY2hhbXBpb25TdGF0cy5tYXRjaFVwcy53b3JzdE1hdGNoVXBzLFxuICAgIHdpblJhdGUsXG4gICAgcGlja1JhdGUsXG4gICAgbGFuZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldENoYW1waW9uU3RhdHM7XG4iLCJjb25zdCBnZXRBbGxDaGFtcGlvbkRldGFpbHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHZlcnNpb25zUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vYXBpL3ZlcnNpb25zLmpzb24nKTtcbiAgY29uc3QgdmVyc2lvbnMgPSBhd2FpdCB2ZXJzaW9uc1Jlc3BvbnNlLmpzb24oKTtcbiAgY29uc3QgbGF0ZXN0VmVyc2lvbiA9IHZlcnNpb25zWzBdO1xuICBjb25zdCBjaGFtcGlvbnNSZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vJHtsYXRlc3RWZXJzaW9ufS9kYXRhL2VuX1VTL2NoYW1waW9uLmpzb25gKTtcbiAgY29uc3QgYWxsQ2hhbXBpb25zID0gYXdhaXQgY2hhbXBpb25zUmVzcG9uc2UuanNvbigpO1xuXG4gIHJldHVybiBhbGxDaGFtcGlvbnMuZGF0YTtcbn07XG5cbmNvbnN0IGdldEFsbENoYW1waW9uU3RhdHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGRldlVybCA9ICdodHRwOi8vMTI3LjAuMC4xOjU1MDAvZnJvbnRlbmQvZGlzdC9jaGFtcGlvbnMuaHRtbCc7XG4gIGNvbnN0IHJlc3BvbnNlID0gd2luZG93LmxvY2F0aW9uLmhyZWYgPT09IGRldlVybFxuICAgID8gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9jaGFtcGlvbnMnLCB7IG1vZGU6ICdjb3JzJyB9KVxuICAgIDogYXdhaXQgZmV0Y2goJ2NoYW1waW9ucycsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICBjb25zdCBhbGxDaGFtcGlvblN0YXRzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIHJldHVybiBhbGxDaGFtcGlvblN0YXRzO1xufTtcblxuZXhwb3J0IHtcbiAgZ2V0QWxsQ2hhbXBpb25EZXRhaWxzLFxuICBnZXRBbGxDaGFtcGlvblN0YXRzLFxufTtcbiIsIi8qIFJldHJpdmVzIHRoZSBsYXRlc3Qgc3RhdGljIGRhdGEgYXZhbGlhYmxlIGZvciBjaGFtcGlvbnMgKi9cbmV4cG9ydCBkZWZhdWx0IGFzeW5jICgpID0+IHtcbiAgY29uc3QgdmVyc2lvblJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2FwaS92ZXJzaW9ucy5qc29uJywgeyBtb2RlOiAnY29ycycgfSk7XG4gIGNvbnN0IHZlcnNpb25zID0gYXdhaXQgdmVyc2lvblJlc3BvbnNlLmpzb24oKTtcbiAgY29uc3QgbGF0ZXN0VmVyc2lvbiA9IHZlcnNpb25zWzBdO1xuICByZXR1cm4gbGF0ZXN0VmVyc2lvbjtcbn07XG4iLCIvKiBGZXRjaGVzIGFsbCB0aGUgaXRlbXMgYSBjaGFtcGlvbiBjYW4gYnV5IGluIGEgbWF0Y2ggKi9cbmNvbnN0IGZldGNoQWxsSXRlbXMgPSBhc3luYyAobGF0ZXN0VmVyc2lvbikgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vJHtsYXRlc3RWZXJzaW9ufS9kYXRhL2VuX1VTL2l0ZW0uanNvbmApO1xuICBjb25zdCBhbGxJdGVtcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICByZXR1cm4gYWxsSXRlbXMuZGF0YTtcbn07XG5cbmNsYXNzIEl0ZW1JbmZvIHtcbiAgc3RhdGljIGFzeW5jIGdldEFsbEl0ZW1zKGxhdGVzdFZlcnNpb24pIHtcbiAgICBjb25zdCBhbGxJdGVtcyA9IGZldGNoQWxsSXRlbXMobGF0ZXN0VmVyc2lvbik7XG4gICAgcmV0dXJuIGFsbEl0ZW1zO1xuICB9XG5cbiAgZ2V0SXRlbURldGFpbHMoYWxsSXRlbXMpIHtcbiAgICBjb25zdCBpdGVtRGV0YWlscyA9IGFsbEl0ZW1zW3RoaXMuaXRlbUlkXTtcbiAgICByZXR1cm4gaXRlbURldGFpbHM7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihpdGVtSWQsIGFsbEl0ZW1zLCBsYXRlc3RWZXJzaW9uKSB7XG4gICAgdGhpcy5pdGVtSWQgPSBpdGVtSWQ7XG4gICAgdGhpcy5pdGVtRGV0YWlscyA9IHRoaXMuZ2V0SXRlbURldGFpbHMoYWxsSXRlbXMpO1xuICAgIHRoaXMubGF0ZXN0VmVyc2lvbiA9IGxhdGVzdFZlcnNpb247XG4gIH1cblxuICBnZXRJdGVtSW1hZ2UoKSB7XG4gICAgY29uc3QgaXRlbUltYWdlSWQgPSB0aGlzLml0ZW1EZXRhaWxzLmltYWdlLmZ1bGw7XG4gICAgY29uc3QgaW1hZ2VVcmwgPSBgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLyR7dGhpcy5sYXRlc3RWZXJzaW9ufS9pbWcvaXRlbS8ke2l0ZW1JbWFnZUlkfWA7XG4gICAgcmV0dXJuIGltYWdlVXJsO1xuICB9XG5cbiAgLyogZ2V0cyBpbmZvIG9uIHRoZSBpdGVtcyB1c2VkIHRvIGNyZWF0ZSB0aGUgaW5zdGFuY2UgaXRlbSAqL1xuICBhc3luYyBnZXRDb21wb25lbnRJdGVtcyhhbGxJdGVtcykge1xuICAgIGNvbnN0IGNvbXBvbmVudEl0ZW1JZHMgPSB0aGlzLml0ZW1EZXRhaWxzLmZyb207XG4gICAgaWYgKGNvbXBvbmVudEl0ZW1JZHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBjb25zdCBjb21wb25lbnRJdGVtRGV0YWlscyA9IGNvbXBvbmVudEl0ZW1JZHMubWFwKChpdGVtSWQpID0+ICh7XG4gICAgICBuYW1lOiBhbGxJdGVtc1tpdGVtSWRdLm5hbWUsXG4gICAgICBpbWFnZVVybDogYGh0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi8ke3RoaXMubGF0ZXN0VmVyc2lvbn0vaW1nL2l0ZW0vJHtpdGVtSWR9LnBuZ2AsXG4gICAgICBjb3N0OiBhbGxJdGVtc1tpdGVtSWRdLmdvbGQudG90YWwsXG4gICAgfSkpO1xuICAgIHJldHVybiBjb21wb25lbnRJdGVtRGV0YWlscztcbiAgfVxuXG4gIGdldEl0ZW1JbmZvKGFsbEl0ZW1zKSB7XG4gICAgaWYgKHRoaXMuaXRlbURldGFpbHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXMuaXRlbURldGFpbHM7XG4gICAgY29uc3QgeyBkZXNjcmlwdGlvbiB9ID0gdGhpcy5pdGVtRGV0YWlscztcbiAgICBjb25zdCBjb3N0ID0gdGhpcy5pdGVtRGV0YWlscy5nb2xkLnRvdGFsO1xuICAgIGNvbnN0IGltYWdlVXJsID0gdGhpcy5nZXRJdGVtSW1hZ2UoYWxsSXRlbXMpO1xuICAgIGNvbnN0IGNvbXBvbmVudEl0ZW1zID0gdGhpcy5nZXRDb21wb25lbnRJdGVtcyhhbGxJdGVtcyk7XG4gICAgY29uc3QgeyB0YWdzIH0gPSB0aGlzLml0ZW1EZXRhaWxzO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGNvc3QsXG4gICAgICBpbWFnZVVybCxcbiAgICAgIGNvbXBvbmVudEl0ZW1zLFxuICAgICAgdGFncyxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW1JbmZvO1xuIiwiY29uc3QgRWxlbWVudENyZWF0aW9uID0gKCgpID0+IHtcbiAgY29uc3QgY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzID0gKHRhZywgY2xhc3NOYW1lLCBwYXJlbnRFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlQ2hpbGRFbGVtZW50V2l0aElkID0gKHRhZywgaWQsIHBhcmVudEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGVsZW1lbnQuaWQgPSBpZDtcbiAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzQW5kSWQgPSAodGFnLCBjbGFzc05hbWUsIGlkLCBwYXJlbnRFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICBlbGVtZW50LmlkID0gaWQ7XG4gICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzID0gKGNsYXNzTmFtZSwgcGFyZW50RWxlbWVudCwgc3JjLCBhbHQpID0+IHtcbiAgICBjb25zdCBpbWFnZUVsZW1lbnQgPSBjcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2ltZycsIGNsYXNzTmFtZSwgcGFyZW50RWxlbWVudCk7XG4gICAgaW1hZ2VFbGVtZW50LnNyYyA9IHNyYztcbiAgICBpbWFnZUVsZW1lbnQuYWx0ID0gYWx0O1xuXG4gICAgcmV0dXJuIGltYWdlRWxlbWVudDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcyxcbiAgICBjcmVhdGVDaGlsZEVsZW1lbnRXaXRoSWQsXG4gICAgY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzQW5kSWQsXG4gICAgY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBFbGVtZW50Q3JlYXRpb247XG4iLCJpbXBvcnQgeyByZW5kZXJIZWFkZXJEZXRhaWxzLCBpbWFnZXMgfSBmcm9tICcuL3JlbmRlckhlbHBlcnMnO1xuaW1wb3J0IEVsZW1lbnRDcmVhdGlvbiBmcm9tICcuLi9oZWxwZXJzL2VsZW1lbnRDcmVhdGlvbic7XG5cbmNvbnN0IGNoYW1waW9uRGV0YWlsc01vZGFsID0gYXN5bmMgKGNoYW1waW9uRGF0YSkgPT4ge1xuICByZW5kZXJIZWFkZXJEZXRhaWxzKGNoYW1waW9uRGF0YSwgJ21haW4nKTtcblxuICBjb25zdCBjaGFtcGlvblJvbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLXJvbGVzJyk7XG4gIGNvbnN0IHsgcm9sZXMgfSA9IGNoYW1waW9uRGF0YTtcbiAgcm9sZXMuZm9yRWFjaCgocm9sZSkgPT4ge1xuICAgIGNvbnN0IGNoYW1waW9uUm9sZSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdjaGFtcGlvbi1yb2xlJywgY2hhbXBpb25Sb2xlcyk7XG4gICAgY29uc3QgY2hhbXBpb25Sb2xlTmFtZSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnY2hhbXBpb24tcm9sZS1uYW1lJywgY2hhbXBpb25Sb2xlKTtcbiAgICBjaGFtcGlvblJvbGVOYW1lLnRleHRDb250ZW50ID0gcm9sZTtcbiAgICBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MoJ2NoYW1waW9uLXJvbGUtaW1hZ2UnLCBjaGFtcGlvblJvbGUsIGAke2ltYWdlc1tgJHtyb2xlfS5wbmdgXX1gLCByb2xlKTtcbiAgfSk7XG4gIC8qIFRoZSB0eXBlIG9mIHJlc291cmNlIHRoYXQgYSBjaGFtcGlvbiB1c2VzIGUuZy4gbWFuYSwgZW5lcmd5IGV0YyAqL1xuICBjb25zdCBjaGFtcGlvblJlc291cmNlID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2NoYW1waW9uLXJlc291cmNlJywgY2hhbXBpb25Sb2xlcyk7XG4gIGNvbnN0IHsgcmVzb3VyY2UgfSA9IGNoYW1waW9uRGF0YTtcbiAgY29uc3QgY2hhbXBpb25SZXNvdXJjZU5hbWUgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2NoYW1waW9uLXJlc291cmNlLW5hbWUnLCBjaGFtcGlvblJlc291cmNlKTtcbiAgY2hhbXBpb25SZXNvdXJjZU5hbWUudGV4dENvbnRlbnQgPSByZXNvdXJjZTtcbiAgRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzKCdjaGFtcGlvbi1yZXNvdXJjZS1pbWFnZScsIGNoYW1waW9uUmVzb3VyY2UsIGAke2ltYWdlc1tgJHtyZXNvdXJjZX0ucG5nYF19YCwgcmVzb3VyY2UpO1xuXG4gIC8qIENyZWF0ZXMgdGhlIG1haW4gY29udGVudCBvZiB0aGUgbWFpbiBtb2RhbCAqL1xuICBjb25zdCBsb3JlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvcmUtY29udGFpbmVyJyk7XG4gIGNvbnN0IGNoYW1waW9uTG9yZSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnY2hhbXBpb24tbG9yZScsIGxvcmVDb250YWluZXIpO1xuICBjaGFtcGlvbkxvcmUuaW5uZXJIVE1MID0gY2hhbXBpb25EYXRhLmxvcmU7XG5cbiAgY29uc3QgYWJpbGl0aWVzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFiaWxpdGllcy1jb250YWluZXInKTtcbiAgY29uc3QgYWJpbGl0eURldGFpbHMgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnYWJpbGl0eS1kZXRhaWxzJywgYWJpbGl0aWVzQ29udGFpbmVyKTtcbiAgY29uc3QgYWJpbGl0eUltZ3MgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnYWJpbGl0eS1pbWdzJywgYWJpbGl0eURldGFpbHMpO1xuICBjb25zdCBwYXNzaXZlSW1nID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzKFxuICAgICdzcGVsbC1pbWcgY2xpY2tlZCcsIGFiaWxpdHlJbWdzLCBjaGFtcGlvbkRhdGEucGFzc2l2ZS5wYXNzaXZlSW1nVXJsLCBjaGFtcGlvbkRhdGEucGFzc2l2ZS5wYXNzaXZlTmFtZSxcbiAgKTtcbiAgcGFzc2l2ZUltZy5pZCA9ICdwYXNzaXZlLWltZyc7XG5cbiAgY29uc3QgaW1nTGFiZWwgPSBbJ1EnLCAnVycsICdFJywgJ1InXTtcbiAgbGV0IGluZGV4ID0gMDtcblxuICBjaGFtcGlvbkRhdGEuc3BlbGxzLmZvckVhY2goKHNwZWxsKSA9PiB7XG4gICAgY29uc3Qgc3BlbGxJbWcgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAnc3BlbGwtaW1nJywgYWJpbGl0eUltZ3MsIHNwZWxsLmltZ1VybCwgc3BlbGwubmFtZSxcbiAgICApO1xuICAgIC8vIEdyYWJzIGxldHRlciBRLCBXLCBFIG9yIFIgd2hpY2ggdW5pcXVlbHkgaWRlbnRpZmllcyBhIGNoYW1waW9ucyBhYmlsaXRpZXNcbiAgICBzcGVsbEltZy5pZCA9IGAke2ltZ0xhYmVsW2luZGV4XX0taW1nYDtcbiAgICBpbmRleCArPSAxO1xuICB9KTtcblxuICAvKiBsb29wcyB0aHJvdWdoIGNoYW1waW9uJ3MgcGFzc2l2ZSBhbmQgNCBhYmlsaXRpZXMgKi9cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpICs9IDEpIHtcbiAgICBjb25zdCBhYmlsaXR5SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGFiaWxpdHlOYW1lID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdhYmlsaXR5LW5hbWUnLCBhYmlsaXR5SW5mbyk7XG4gICAgY29uc3QgYWJpbGl0eURlc2NyaXB0aW9uID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdhYmlsaXR5LWRlc2NyaXB0aW9uJywgYWJpbGl0eUluZm8pO1xuICAgIGNvbnN0IGFiaWxpdHlMYWJlbCA9IFsnUGFzc2l2ZScsICdRJywgJ1cnLCAnRScsICdSJ107XG5cbiAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgYWJpbGl0eUluZm8uY2xhc3NOYW1lID0gJ2FiaWxpdHktaW5mbyBhY3RpdmUnO1xuICAgICAgYWJpbGl0eUluZm8uaWQgPSAncGFzc2l2ZS1hYmlsaXR5JztcbiAgICAgIGFiaWxpdHlOYW1lLnRleHRDb250ZW50ID0gYCR7Y2hhbXBpb25EYXRhLnBhc3NpdmUucGFzc2l2ZU5hbWV9ICgke2FiaWxpdHlMYWJlbFtpXX0pYDtcbiAgICAgIGFiaWxpdHlEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBjaGFtcGlvbkRhdGEucGFzc2l2ZS5wYXNzaXZlRGVzY3JpcHRpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvb2xkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgY29vbGRvd24uY2xhc3NOYW1lID0gJ2FiaWxpdHktY29vbGRvd24nO1xuICAgICAgY29vbGRvd24udGV4dENvbnRlbnQgPSBgQ29vbGRvd246ICR7Y2hhbXBpb25EYXRhLnNwZWxsc1tpIC0gMV0uY29vbGRvd259IHNlY29uZHNgO1xuICAgICAgYWJpbGl0eUluZm8uYXBwZW5kQ2hpbGQoY29vbGRvd24pO1xuXG4gICAgICBhYmlsaXR5SW5mby5jbGFzc05hbWUgPSAnYWJpbGl0eS1pbmZvJztcbiAgICAgIGFiaWxpdHlJbmZvLmlkID0gYCR7YWJpbGl0eUxhYmVsW2ldfS1hYmlsaXR5YDtcbiAgICAgIGFiaWxpdHlOYW1lLnRleHRDb250ZW50ID0gYCR7Y2hhbXBpb25EYXRhLnNwZWxsc1tpIC0gMV0ubmFtZX0gKCR7YWJpbGl0eUxhYmVsW2ldfSlgO1xuICAgICAgYWJpbGl0eURlc2NyaXB0aW9uLmlubmVySFRNTCA9IGNoYW1waW9uRGF0YS5zcGVsbHNbaSAtIDFdLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGFiaWxpdHlEZXRhaWxzLmFwcGVuZENoaWxkKGFiaWxpdHlJbmZvKTtcbiAgfVxuXG4gIGNvbnN0IGNoYW1waW9uVGlwc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tdGlwcy1zZWN0aW9uJyk7XG4gIGNvbnN0IGNoYW1waW9uVGlwcyA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdjaGFtcGlvbi10aXBzJywgY2hhbXBpb25UaXBzU2VjdGlvbik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAyICYmIGkgPCBjaGFtcGlvbkRhdGEudGlwcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGNoYW1waW9uVGlwID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdjaGFtcGlvbi10aXAnLCBjaGFtcGlvblRpcHMpO1xuICAgIGNoYW1waW9uVGlwLnRleHRDb250ZW50ID0gYCR7Y2hhbXBpb25EYXRhLnRpcHNbaV19YDtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2hhbXBpb25EZXRhaWxzTW9kYWw7XG4iLCJpbXBvcnQgRWxlbWVudENyZWF0aW9uIGZyb20gJy4uL2hlbHBlcnMvZWxlbWVudENyZWF0aW9uJztcblxuY29uc3QgY2hhbXBpb25Ta2luc01vZGFsID0gYXN5bmMgKGNoYW1waW9uRGV0YWlscykgPT4ge1xuICBjb25zdCB7IHNraW5zIH0gPSBjaGFtcGlvbkRldGFpbHM7XG4gIGNvbnN0IHNraW5zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NraW5zLWNvbnRhaW5lcicpO1xuICBjb25zdCBza2luTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5za2luLW5hbWUnKTtcbiAgY29uc3Qgc2tpbkltYWdlc0NvbnRhaW5lciA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdza2luLWltYWdlcy1jb250YWluZXInLCBza2luc0NvbnRhaW5lcik7XG5cbiAgc2tpbnMuZm9yRWFjaCgoc2tpbikgPT4ge1xuICAgIGlmIChza2luLm51bSA9PT0gMCkge1xuICAgICAgY29uc3Qgc2hvd25JbWFnZUNvbnRhaW5lciA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3NBbmRJZChcbiAgICAgICAgJ2RpdicsICdza2luLWltYWdlLWNvbnRhaW5lciBzaG93bicsIGBEZWZhdWx0ICR7Y2hhbXBpb25EZXRhaWxzLm5hbWV9YCwgc2tpbkltYWdlc0NvbnRhaW5lcixcbiAgICAgICk7XG4gICAgICBza2luTmFtZS50ZXh0Q29udGVudCA9IGBEZWZhdWx0ICR7Y2hhbXBpb25EZXRhaWxzLm5hbWV9YDtcbiAgICAgIGNvbnN0IHNob3duSW1hZ2VVcmwgPSBgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuL2ltZy9jaGFtcGlvbi9zcGxhc2gvJHtjaGFtcGlvbkRldGFpbHMuaWR9XyR7c2tpbi5udW19LmpwZ2A7XG4gICAgICBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MoJ3NraW4taW1hZ2UnLCBzaG93bkltYWdlQ29udGFpbmVyLCBzaG93bkltYWdlVXJsLCAnZGVmYXVsdCBza2luJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGltYWdlQ29udGFpbmVyID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCAnc2tpbi1pbWFnZS1jb250YWluZXInLCBza2luLm5hbWUsIHNraW5JbWFnZXNDb250YWluZXIpO1xuICAgICAgY29uc3QgaW1hZ2VVcmwgPSBgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuL2ltZy9jaGFtcGlvbi9zcGxhc2gvJHtjaGFtcGlvbkRldGFpbHMuaWR9XyR7c2tpbi5udW19LmpwZ2A7XG4gICAgICBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MoJ3NraW4taW1hZ2UnLCBpbWFnZUNvbnRhaW5lciwgaW1hZ2VVcmwsIHNraW4ubmFtZSk7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNoYW1waW9uU2tpbnNNb2RhbDtcbiIsImltcG9ydCBJdGVtSW5mbyBmcm9tICcuLi9jaGFtcGlvbkRhdGEvaXRlbUluZm8nO1xuaW1wb3J0IHtcbiAgcmVuZGVySGVhZGVyRGV0YWlscyxcbiAgcmVuZGVyU3RhdE92ZXJ2aWV3LFxuICByZW5kZXJEYW1hZ2VTdGF0cyxcbiAgcmVuZGVyQ2hhbXBpb25MYW5lLFxuICByZW5kZXJNYXRjaHVwc0luZm8sXG59IGZyb20gJy4vcmVuZGVySGVscGVycyc7XG5pbXBvcnQgRWxlbWVudENyZWF0aW9uIGZyb20gJy4uL2hlbHBlcnMvZWxlbWVudENyZWF0aW9uJztcblxuY29uc3QgY2hhbXBpb25TdGF0c01vZGFsID0gYXN5bmMgKGNoYW1waW9uRGF0YSwgY2hhbXBpb25TdGF0cywgbGF0ZXN0VmVyc2lvbikgPT4ge1xuICByZW5kZXJIZWFkZXJEZXRhaWxzKGNoYW1waW9uRGF0YSwgJ3N0YXRzJyk7XG5cbiAgY29uc3Qgc3RhdHNPdmVydmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbi1zdGF0cy1vdmVydmlldycpO1xuXG4gIHJlbmRlclN0YXRPdmVydmlldyhzdGF0c092ZXJ2aWV3LCAnV2luIFJhdGUnLCBjaGFtcGlvblN0YXRzLndpblJhdGUpO1xuICByZW5kZXJTdGF0T3ZlcnZpZXcoc3RhdHNPdmVydmlldywgJ1BpY2sgUmF0ZScsIGNoYW1waW9uU3RhdHMucGlja1JhdGUpO1xuICAvKiBNYWtlIGV2ZXJ5IGxldHRlciBleGNlcHQgdGhlIGZpcnN0IGxvd2VyIGNhc2UgKi9cbiAgY29uc3QgbGFuZSA9IGAke2NoYW1waW9uU3RhdHMubGFuZVswXSArIGNoYW1waW9uU3RhdHMubGFuZS5zdWJzdHJpbmcoMSkudG9Mb3dlckNhc2UoKX1gO1xuICByZW5kZXJDaGFtcGlvbkxhbmUoc3RhdHNPdmVydmlldywgbGFuZSk7XG5cbiAgLyogU2V0cyB0aGUgdmFsdWVzIGFuZCBwZXJjZW50YWdlcyBmb3IgdGhlIGF2ZXJhZ2UgZGFtYWdlIHNlY3Rpb24gb2YgdGhlIHN0YXRzIG1vZGFsICovXG5cbiAgY29uc3QgdHJ1ZURhbWFnZUNpcmNsZVN0cm9rZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cnVlLWRhbWFnZS1zdHJva2UnKTtcbiAgY29uc3QgcGh5c2ljYWxEYW1hZ2VDaXJjbGVTdHJva2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGh5c2ljYWwtZGFtYWdlLXN0cm9rZScpO1xuICBjb25zdCBtYWdpY0RhbWFnZUNpcmNsZVN0cm9rZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWdpYy1kYW1hZ2Utc3Ryb2tlJyk7XG5cbiAgY29uc3QgdHJ1ZURhbWFnZVBlcmNlbnQgPSBNYXRoLnJvdW5kKGNoYW1waW9uU3RhdHMuZGFtYWdlUGVyTWF0Y2gudHJ1ZURhbWFnZS5wZXJjZW50YWdlKTtcbiAgY29uc3QgcGh5c2ljYWxEYW1hZ2VQZXJjZW50ID0gTWF0aC5yb3VuZChjaGFtcGlvblN0YXRzLmRhbWFnZVBlck1hdGNoLnBoeXNpY2FsRGFtYWdlLnBlcmNlbnRhZ2UpO1xuICBjb25zdCBtYWdpY0RhbWFnZVBlcmNlbnQgPSBNYXRoLnJvdW5kKGNoYW1waW9uU3RhdHMuZGFtYWdlUGVyTWF0Y2gubWFnaWNEYW1hZ2UucGVyY2VudGFnZSk7XG5cbiAgdHJ1ZURhbWFnZUNpcmNsZVN0cm9rZS5zdHlsZS5zdHJva2VEYXNoYXJyYXkgPSBgJHt0cnVlRGFtYWdlUGVyY2VudH0gMTAwYDtcbiAgcGh5c2ljYWxEYW1hZ2VDaXJjbGVTdHJva2Uuc3R5bGUuc3Ryb2tlRGFzaGFycmF5ID0gYCR7cGh5c2ljYWxEYW1hZ2VQZXJjZW50ICsgdHJ1ZURhbWFnZVBlcmNlbnR9IDEwMGA7XG4gIG1hZ2ljRGFtYWdlQ2lyY2xlU3Ryb2tlLnN0eWxlLnN0cm9rZURhc2hhcnJheSA9ICcxMDAsIDEwMCc7XG4gIGNvbnN0IHRvdGFsRGFtYWdlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3RhbC1kYW1hZ2UtdGV4dCcpO1xuICB0b3RhbERhbWFnZVRleHQudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKGNoYW1waW9uU3RhdHMuZGFtYWdlUGVyTWF0Y2gudG90YWxEYW1hZ2UudmFsdWUpO1xuXG4gIGNvbnN0IHRydWVEYW1hZ2VWYWx1ZSA9IE1hdGgucm91bmQoY2hhbXBpb25TdGF0cy5kYW1hZ2VQZXJNYXRjaC50cnVlRGFtYWdlLnZhbHVlKTtcbiAgY29uc3QgcGh5c2ljYWxEYW1hZ2VWYWx1ZSA9IE1hdGgucm91bmQoY2hhbXBpb25TdGF0cy5kYW1hZ2VQZXJNYXRjaC5waHlzaWNhbERhbWFnZS52YWx1ZSk7XG4gIGNvbnN0IG1hZ2ljRGFtYWdlVmFsdWUgPSBNYXRoLnJvdW5kKGNoYW1waW9uU3RhdHMuZGFtYWdlUGVyTWF0Y2gubWFnaWNEYW1hZ2UudmFsdWUpO1xuXG4gIHJlbmRlckRhbWFnZVN0YXRzKCdwaHlzaWNhbCcsIHBoeXNpY2FsRGFtYWdlVmFsdWUsIHBoeXNpY2FsRGFtYWdlUGVyY2VudCk7XG4gIHJlbmRlckRhbWFnZVN0YXRzKCdtYWdpYycsIG1hZ2ljRGFtYWdlVmFsdWUsIG1hZ2ljRGFtYWdlUGVyY2VudCk7XG4gIHJlbmRlckRhbWFnZVN0YXRzKCd0cnVlJywgdHJ1ZURhbWFnZVZhbHVlLCB0cnVlRGFtYWdlUGVyY2VudCk7XG5cbiAgLyogUmVuZGVycyB0aGUgaXRlbSBidWlsZHMgc2VjdGlvbiBvZiB0aGUgc3RhdHMgbW9kYWwgKi9cbiAgY29uc3QgeyBpdGVtU2V0cyB9ID0gY2hhbXBpb25TdGF0cztcbiAgY29uc3QgYWxsSXRlbXMgPSBhd2FpdCBJdGVtSW5mby5nZXRBbGxJdGVtcyhsYXRlc3RWZXJzaW9uKTtcbiAgY29uc3QgY2hhbXBpb25JdGVtQnVpbGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLWl0ZW0tYnVpbGRzJyk7XG4gIGNvbnN0IGl0ZW1TZXRzQ29udGFpbmVyID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2l0ZW0tc2V0cy1jb250YWluZXInLCBjaGFtcGlvbkl0ZW1CdWlsZHMpO1xuXG4gIGl0ZW1TZXRzLmZvckVhY2goKGl0ZW1TZXQpID0+IHtcbiAgICBjb25zdCBpdGVtU2V0Q29udGFpbmVyID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2l0ZW0tc2V0LWNvbnRhaW5lcicsIGl0ZW1TZXRzQ29udGFpbmVyKTtcblxuICAgIGl0ZW1TZXQuZm9yRWFjaCgoaXRlbUlkKSA9PiB7XG4gICAgICBjb25zdCBpdGVtID0gbmV3IEl0ZW1JbmZvKGl0ZW1JZCwgYWxsSXRlbXMsIGxhdGVzdFZlcnNpb24pO1xuICAgICAgY29uc3QgaXRlbUluZm8gPSBpdGVtLmdldEl0ZW1JbmZvKGFsbEl0ZW1zKTtcbiAgICAgIGlmIChpdGVtSW5mbyAmJiAhaXRlbUluZm8udGFncy5pbmNsdWRlcygnVHJpbmtldCcpICYmICFpdGVtSW5mby50YWdzLmluY2x1ZGVzKCdDb25zdW1hYmxlJykpIHtcbiAgICAgICAgY29uc3QgbWFpbkNvbXBvbmVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtYWluQ29tcG9uZW50Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdtYWluLWNvbXBvbmVudC1jb250YWluZXInO1xuICAgICAgICBpdGVtU2V0Q29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5Db21wb25lbnRDb250YWluZXIpO1xuXG4gICAgICAgIGNvbnN0IG1haW5JdGVtID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ21haW4taXRlbScsIG1haW5Db21wb25lbnRDb250YWluZXIpO1xuXG4gICAgICAgIEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEltYWdlRWxlbWVudFdpdGhDbGFzcygnaXRlbS1pbWcnLCBtYWluSXRlbSwgaXRlbUluZm8uaW1hZ2VVcmwsIGAke2l0ZW1JZH0ucG5nYCk7XG5cbiAgICAgICAgY29uc3QgaXRlbURldGFpbHNDb250YWluZXIgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnaXRlbS1kZXRhaWxzLWNvbnRhaW5lcicsIG1haW5JdGVtKTtcblxuICAgICAgICBjb25zdCBuYW1lRWxlbWVudCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnaXRlbS1uYW1lJywgaXRlbURldGFpbHNDb250YWluZXIpO1xuICAgICAgICBuYW1lRWxlbWVudC50ZXh0Q29udGVudCA9IGl0ZW1JbmZvLm5hbWU7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uRWxlbWVudCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnaXRlbS1kZXNjcmlwdGlvbicsIGl0ZW1EZXRhaWxzQ29udGFpbmVyKTtcbiAgICAgICAgZGVzY3JpcHRpb25FbGVtZW50LmlubmVySFRNTCA9IGl0ZW1JbmZvLmRlc2NyaXB0aW9uO1xuICAgICAgICBjb25zdCBpdGVtQ29zdCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdpdGVtLWNvc3QnLCBpdGVtRGV0YWlsc0NvbnRhaW5lcik7XG4gICAgICAgIGNvbnN0IGNvc3RMYWJlbCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnY29zdC1sYWJlbCcsIGl0ZW1Db3N0KTtcbiAgICAgICAgY29zdExhYmVsLnRleHRDb250ZW50ID0gJ0dvbGQ6ICc7XG4gICAgICAgIGNvbnN0IGNvc3RBbW91bnQgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2Nvc3QtYW1vdW50JywgaXRlbUNvc3QpO1xuICAgICAgICBjb3N0QW1vdW50LnRleHRDb250ZW50ID0gaXRlbUluZm8uY29zdDtcblxuICAgICAgICAvKiBUaGUgY29tcG9uZW50IGl0ZW1zIGFyZSB0aGUgc21hbGxlciBpdGVtcyB0aGF0IGFwcGVhciBiZWxvdyB0aGUgbWFpbiBpdGVtICovXG4gICAgICAgIGNvbnN0IHsgY29tcG9uZW50SXRlbXMgfSA9IGl0ZW1JbmZvO1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoY29tcG9uZW50SXRlbXMpXG4gICAgICAgICAgLnRoZW4oKGl0ZW1zKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb21wb25lbnRJdGVtc0NvbnRhaW5lciA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdjb21wb25lbnQtaXRlbXMtY29udGFpbmVyJywgbWFpbkNvbXBvbmVudENvbnRhaW5lcik7XG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKChjb21wb25lbnRJdGVtKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudEl0ZW1FbGVtZW50ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2NvbXBvbmVudC1pdGVtJywgY29tcG9uZW50SXRlbXNDb250YWluZXIpO1xuICAgICAgICAgICAgICBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAgICAgICAgICAgJ2NvbXBvbmVudC1pdGVtLWltZycsIGNvbXBvbmVudEl0ZW1FbGVtZW50LCBjb21wb25lbnRJdGVtLmltYWdlVXJsLCBgJHtjb21wb25lbnRJdGVtLm5hbWV9YCxcbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRJdGVtRGV0YWlsc0NvbnRhaW5lciA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdjb21wb25lbnQtaXRlbS1kZXRhaWxzLWNvbnRhaW5lcicsIGNvbXBvbmVudEl0ZW1FbGVtZW50KTtcblxuICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRJdGVtTmFtZSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnY29tcG9uZW50LWl0ZW0tbmFtZScsIGNvbXBvbmVudEl0ZW1EZXRhaWxzQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgY29tcG9uZW50SXRlbU5hbWUudGV4dENvbnRlbnQgPSBjb21wb25lbnRJdGVtLm5hbWU7XG4gICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudEl0ZW1Db3N0ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2NvbXBvbmVudC1pdGVtLWNvc3QnLCBjb21wb25lbnRJdGVtRGV0YWlsc0NvbnRhaW5lcik7XG4gICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudEl0ZW1Db3N0TGFiZWwgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2NvbXBvbmVudC1pdGVtLWNvc3QtbGFiZWwnLCBjb21wb25lbnRJdGVtQ29zdCk7XG4gICAgICAgICAgICAgIGNvbXBvbmVudEl0ZW1Db3N0TGFiZWwudGV4dENvbnRlbnQgPSAnR29sZDogJztcbiAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50SXRlbUFtb3VudCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnY29tcG9uZW50LWl0ZW0tYW1vdW50JywgY29tcG9uZW50SXRlbUNvc3QpO1xuICAgICAgICAgICAgICBjb21wb25lbnRJdGVtQW1vdW50LnRleHRDb250ZW50ID0gY29tcG9uZW50SXRlbS5jb3N0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICAvKiBSZW5kZXJzIHRoZSBtYXRjaHVwcyBzZWN0aW9uIG9mIHRoZSBjaGFtcGlvbiBtb2RhbCBzdGF0cyBwYWdlICovXG4gIGNvbnN0IGJlc3RNYXRjaHVwc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmVzdC1tYXRjaHVwcy1zZWN0aW9uJyk7XG4gIGNvbnN0IGJlc3RNYXRjaHVwc0VsZW1lbnQgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnYmVzdC1tYXRjaHVwcyBtYXRjaHVwcycsIGJlc3RNYXRjaHVwc1NlY3Rpb24pO1xuICBjb25zdCBiZXN0TWF0Y2h1cHNEYXRhID0gY2hhbXBpb25TdGF0cy5iZXN0TWF0Y2hVcHM7XG4gIHJlbmRlck1hdGNodXBzSW5mbyhiZXN0TWF0Y2h1cHNFbGVtZW50LCBiZXN0TWF0Y2h1cHNEYXRhLCBsYXRlc3RWZXJzaW9uKTtcblxuICBjb25zdCB3b3JzdE1hdGNodXBzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53b3JzdC1tYXRjaHVwcy1zZWN0aW9uJyk7XG4gIGNvbnN0IHdvcnN0TWF0Y2h1cHNFbGVtZW50ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ3dvcnN0LW1hdGNodXBzIG1hdGNodXBzJywgd29yc3RNYXRjaHVwc1NlY3Rpb24pO1xuICBjb25zdCB3b3JzdE1hdGNodXBzRGF0YSA9IGNoYW1waW9uU3RhdHMud29yc3RNYXRjaFVwcztcbiAgcmVuZGVyTWF0Y2h1cHNJbmZvKHdvcnN0TWF0Y2h1cHNFbGVtZW50LCB3b3JzdE1hdGNodXBzRGF0YSwgbGF0ZXN0VmVyc2lvbik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjaGFtcGlvblN0YXRzTW9kYWw7XG4iLCJpbXBvcnQgRWxlbWVudENyZWF0aW9uIGZyb20gJy4uL2hlbHBlcnMvZWxlbWVudENyZWF0aW9uJztcblxuY29uc3QgaW1wb3J0QWxsID0gKHIpID0+IHtcbiAgY29uc3QgaW1hZ2VzID0ge307XG4gIHIua2V5cygpLmZvckVhY2goKGl0ZW0pID0+IHsgaW1hZ2VzW2l0ZW0ucmVwbGFjZSgnLi8nLCAnJyldID0gcihpdGVtKTsgfSk7XG4gIHJldHVybiBpbWFnZXM7XG59O1xuXG5jb25zdCBpbWFnZXMgPSBpbXBvcnRBbGwocmVxdWlyZS5jb250ZXh0KCcuLi9hc3NldHMvaW1hZ2VzJywgZmFsc2UsIC9cXC4ocG5nfGpwZT9nfHN2ZykkLykpO1xuXG5jb25zdCByZW5kZXJIZWFkZXJEZXRhaWxzID0gKGNoYW1waW9uRGF0YSwgbW9kYWxDb250YWluZXIpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7bW9kYWxDb250YWluZXJ9LWNvbnRhaW5lcmApO1xuICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZCA9IGBuby1yZXBlYXQgdXJsKGh0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi9pbWcvY2hhbXBpb24vc3BsYXNoLyR7Y2hhbXBpb25EYXRhLmlkfV8wLmpwZykgNzAlIDgwJWA7XG4gIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb3Zlcic7XG5cbiAgY29uc3QgY2hhbXBpb25UaXRsZSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tdGl0bGUnKTtcbiAgY2hhbXBpb25UaXRsZS50ZXh0Q29udGVudCA9IGNoYW1waW9uRGF0YS50aXRsZTtcblxuICBjb25zdCBjaGFtcGlvbk5hbWUgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLW5hbWUnKTtcbiAgY2hhbXBpb25OYW1lLnRleHRDb250ZW50ID0gY2hhbXBpb25EYXRhLm5hbWU7XG59O1xuXG4vKiBSZW5kZXJzIHdpbiBvciBwaWNrIHJhdGUgdG8gdGhlIERPTSAqL1xuY29uc3QgcmVuZGVyU3RhdE92ZXJ2aWV3ID0gKHN0YXRzT3ZlcnZpZXcsIHJhdGVUZXh0LCByYXRlVHlwZSkgPT4ge1xuICBjb25zdCBjaGFtcGlvblJhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNvbnN0IHJhdGVWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAvKiBUdXJucyAnV2luIFJhdGUnIGludG8gJ3dpbi1yYXRlJyAqL1xuICBjb25zdCBsb3dlckNhc2VUZXh0ID0gcmF0ZVRleHQucmVwbGFjZSgnICcsICctJykudG9Mb3dlckNhc2UoKTtcblxuICBjaGFtcGlvblJhdGUuY2xhc3NOYW1lID0gbG93ZXJDYXNlVGV4dDtcbiAgbGFiZWwuaWQgPSBgJHtsb3dlckNhc2VUZXh0fS1sYWJlbGA7XG4gIGxhYmVsLmNsYXNzTmFtZSA9ICdsYWJlbCc7XG4gIHJhdGVWYWx1ZS5jbGFzc05hbWUgPSBgJHtsb3dlckNhc2VUZXh0fS12YWx1ZWA7XG4gIGxhYmVsLnRleHRDb250ZW50ID0gcmF0ZVRleHQ7XG4gIHJhdGVWYWx1ZS50ZXh0Q29udGVudCA9IGAke3JhdGVUeXBlfSVgO1xuXG4gIGNoYW1waW9uUmF0ZS5hcHBlbmRDaGlsZChsYWJlbCk7IGNoYW1waW9uUmF0ZS5hcHBlbmRDaGlsZChyYXRlVmFsdWUpO1xuICBzdGF0c092ZXJ2aWV3LmFwcGVuZENoaWxkKGNoYW1waW9uUmF0ZSk7XG59O1xuXG5jb25zdCByZW5kZXJDaGFtcGlvbkxhbmUgPSAoc3RhdHNPdmVydmlldywgbGFuZSkgPT4ge1xuICBjb25zdCBjaGFtcGlvbkxhbmVJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNoYW1waW9uTGFuZUluZm8uY2xhc3NOYW1lID0gJ2xhbmUtaW5mbyc7XG4gIGNvbnN0IGxhbmVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBsYW5lVGV4dC5jbGFzc05hbWUgPSAnbGFuZS10ZXh0IGxhYmVsJztcbiAgbGFuZVRleHQudGV4dENvbnRlbnQgPSBsYW5lO1xuICBjb25zdCBsYW5lSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBsYW5lSWNvbi5jbGFzc05hbWUgPSAnbGFuZS1pY29uIGNoYW1waW9uLXJvbGUtaW1hZ2UnO1xuICBsYW5lSWNvbi5zcmMgPSBgJHtpbWFnZXNbYCR7bGFuZX0ucG5nYF19YDtcbiAgbGFuZUljb24uYWx0ID0gYCR7bGFuZX0ucG5nYDtcbiAgY2hhbXBpb25MYW5lSW5mby5hcHBlbmRDaGlsZChsYW5lVGV4dCk7XG4gIGNoYW1waW9uTGFuZUluZm8uYXBwZW5kQ2hpbGQobGFuZUljb24pO1xuICBzdGF0c092ZXJ2aWV3LmFwcGVuZENoaWxkKGNoYW1waW9uTGFuZUluZm8pO1xufTtcblxuY29uc3QgcmVuZGVyRGFtYWdlU3RhdHMgPSAoZGFtYWdlVHlwZSwgZGFtYWdlVmFsdWUsIGRhbWFnZVBlcmNlbnRhZ2UpID0+IHtcbiAgY29uc3QgZGFtYWdlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZGFtYWdlVHlwZX0tZGFtYWdlLWNvbnRhaW5lcmApO1xuXG4gIGNvbnN0IGRhbWFnZVN0YXRzID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2RhbWFnZS1zdGF0cycsIGRhbWFnZUNvbnRhaW5lcik7XG5cbiAgY29uc3QgZGFtYWdlVmFsdWVFbGVtZW50ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhJZCgnc3BhbicsIGAke2RhbWFnZVR5cGV9LXZhbHVlYCwgZGFtYWdlU3RhdHMpO1xuICBjb25zdCBkYW1hZ2VQZXJjZW50YWdlRWxlbWVudCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoSWQoJ3NwYW4nLCBgJHtkYW1hZ2VUeXBlfS1wZXJjZW50YWdlYCwgZGFtYWdlU3RhdHMpO1xuICBkYW1hZ2VWYWx1ZUVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtkYW1hZ2VWYWx1ZX1gO1xuICBkYW1hZ2VQZXJjZW50YWdlRWxlbWVudC50ZXh0Q29udGVudCA9IGAke2RhbWFnZVBlcmNlbnRhZ2V9JWA7XG59O1xuXG5jb25zdCByZW5kZXJNYXRjaHVwc0luZm8gPSAobWF0Y2h1cHNFbGVtZW50LCBtYXRjaHVwc0RhdGEsIGxhdGVzdFZlcnNpb24pID0+IHtcbiAgbWF0Y2h1cHNEYXRhLmZvckVhY2goKG1hdGNodXApID0+IHtcbiAgICBjb25zdCBtYXRjaHVwSW5mbyA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdtYXRjaHVwLWluZm8nLCBtYXRjaHVwc0VsZW1lbnQpO1xuICAgIGNvbnN0IGVuZW15Q2hhbXBpb25OYW1lID0gbWF0Y2h1cFsxXS5uYW1lO1xuICAgIGNvbnN0IGVuZW15Q2hhbXBpb25JZCA9IG1hdGNodXBbMF07XG4gICAgY29uc3QgZW5lbXlDaGFtcGlvbkltZ1VybCA9IGBodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vJHtsYXRlc3RWZXJzaW9ufS9pbWcvY2hhbXBpb24vJHtlbmVteUNoYW1waW9uSWR9LnBuZ2A7XG4gICAgRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzKFxuICAgICAgJ2VuZW15LWNoYW1waW9uLWltZycsIG1hdGNodXBJbmZvLCBlbmVteUNoYW1waW9uSW1nVXJsLCBgc21hbGwtJHtlbmVteUNoYW1waW9uSWR9YCxcbiAgICApO1xuXG4gICAgY29uc3QgbWF0Y2h1cFN0YXRzID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ21hdGNodXAtc3RhdHMnLCBtYXRjaHVwSW5mbyk7XG4gICAgY29uc3QgZW5lbXlDaGFtcGlvbk5hbWVFbGVtZW50ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdlbmVteS1jaGFtcGlvbi1uYW1lJywgbWF0Y2h1cFN0YXRzKTtcbiAgICBlbmVteUNoYW1waW9uTmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSBlbmVteUNoYW1waW9uTmFtZTtcbiAgICBjb25zdCB3aW5yYXRlQWdhaW5zdCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICd3aW5yYXRlLWFnYWluc3QnLCBtYXRjaHVwU3RhdHMpO1xuICAgIGNvbnN0IHdpbnJhdGVBZ2FpbnN0TGFiZWwgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ3dpbnJhdGUtYWdhaW5zdC1sYWJlbCcsIHdpbnJhdGVBZ2FpbnN0KTtcbiAgICB3aW5yYXRlQWdhaW5zdExhYmVsLnRleHRDb250ZW50ID0gJ1dpbnJhdGU6ICc7XG4gICAgY29uc3QgY29sb3IgPSBtYXRjaHVwc0VsZW1lbnQuY2xhc3NOYW1lID09PSAnYmVzdC1tYXRjaHVwcyBtYXRjaHVwcycgPyAnYmx1ZScgOiAncmVkJztcbiAgICBjb25zdCB3aW5yYXRlQWdhaW5zdFBlcmNlbnRhZ2UgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgYHdpbnJhdGUtYWdhaW5zdC1wZXJjZW50YWdlICR7Y29sb3J9YCwgd2lucmF0ZUFnYWluc3QpO1xuICAgIHdpbnJhdGVBZ2FpbnN0UGVyY2VudGFnZS50ZXh0Q29udGVudCA9IGAke21hdGNodXBbMV0ud2luUmF0ZUFnYWluc3QudG9GaXhlZCgwKX0lYDtcbiAgICBjb25zdCBnYW1lc1BsYXllZEFnYWluc3QgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2dhbWVzLXBsYXllZC1hZ2FpbnN0JywgbWF0Y2h1cFN0YXRzKTtcbiAgICBnYW1lc1BsYXllZEFnYWluc3QudGV4dENvbnRlbnQgPSBgR2FtZXM6ICR7bWF0Y2h1cFsxXS5tYXRjaGVzfWA7XG4gIH0pO1xufTtcblxuY29uc3QgY3JlYXRlQ2hhbXBpb25Db250YWluZXIgPSAoY2hhbXBpb24sIGNoYW1waW9uc1NlY3Rpb24pID0+IHtcbiAgY29uc3QgY2hhbXBpb25Db250YWluZXIgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnY2hhbXBpb24tY29udGFpbmVyIHNob3duJywgY2hhbXBpb25zU2VjdGlvbik7XG4gIGNvbnN0IGNoYW1waW9uSWQgPSBjaGFtcGlvbi5pZCA/IGNoYW1waW9uLmlkIDogY2hhbXBpb24uY2hhbXBpb25OYW1lO1xuICBjaGFtcGlvbkNvbnRhaW5lci5kYXRhc2V0LmlkID0gY2hhbXBpb25JZDtcbiAgY29uc3QgY2hhbXBpb25JbWdVcmwgPSBgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuL2ltZy9jaGFtcGlvbi9sb2FkaW5nLyR7Y2hhbXBpb25JZH1fMC5qcGdgO1xuICBjb25zdCBjaGFtcGlvbkltZyA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEltYWdlRWxlbWVudFdpdGhDbGFzcyhcbiAgICAnY2hhbXBpb24taW1nJywgY2hhbXBpb25Db250YWluZXIsIGNoYW1waW9uSW1nVXJsLCAnJyxcbiAgKTtcbiAgY2hhbXBpb25JbWcudGFiSW5kZXggPSAwO1xuICBjaGFtcGlvbkNvbnRhaW5lci50YWJJbmRleCA9IDA7XG4gIGNvbnN0IGNoYW1waW9uTmFtZVdyYXBwZXIgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnY2hhbXBpb24tbmFtZS13cmFwcGVyJywgY2hhbXBpb25Db250YWluZXIpO1xuICBjb25zdCBjaGFtcGlvbk5hbWUgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2NoYW1waW9uLW5hbWUnLCBjaGFtcGlvbk5hbWVXcmFwcGVyKTtcbiAgY2hhbXBpb25OYW1lLnRleHRDb250ZW50ID0gY2hhbXBpb24ubmFtZTtcbn07XG5cbmV4cG9ydCB7XG4gIHJlbmRlckhlYWRlckRldGFpbHMsXG4gIHJlbmRlclN0YXRPdmVydmlldyxcbiAgcmVuZGVyQ2hhbXBpb25MYW5lLFxuICByZW5kZXJEYW1hZ2VTdGF0cyxcbiAgaW1hZ2VzLFxuICByZW5kZXJNYXRjaHVwc0luZm8sXG4gIGNyZWF0ZUNoYW1waW9uQ29udGFpbmVyLFxufTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1yYXNpbi1ibGFjazogIzFkMWUyYztcXG4gIC0tdHJhbnNwYXJlbnQtcmFzaW4tYmxhY2s6ICMxZDFlMmM5MTtcXG4gIC0tZGFyay1nb2xkOiAjOTI3NTQzO1xcbiAgLS1saWdodC1nb2xkOiAjYzdhYjZlO1xcbn1cXG5cXG4jZnJvbnQtcGFnZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAtNDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmFybG93XFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuI2Zyb250LXBhZ2UgLmFwcC1uYW1lLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgcGFkZGluZzogMC4zZW07XFxuICBib3JkZXItcmFkaXVzOiA4cHggMHB4IDhweCAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jZnJvbnQtcGFnZSAuYXBwLW5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XFxufVxcbiNmcm9udC1wYWdlIC5hcHAtbmFtZS1jb250YWluZXI6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuI2Zyb250LXBhZ2UgLnBhZ2UtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFlbSAwO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci13aWR0aDogMCAwIDJweCAwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2Zyb250LXBhZ2UgLmFwcC1uYW1lLWRpc3BsYXktY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwYjM7XFxuICBwYWRkaW5nOiAwLjJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiA2ZW07XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xcbiAgI2Zyb250LXBhZ2UgLmFwcC1uYW1lLWRpc3BsYXktY29udGFpbmVyIHtcXG4gICAgcGFkZGluZy10b3A6IDJlbTtcXG4gIH1cXG59XFxuI2Zyb250LXBhZ2UgLmFwcC1uYW1lLWRpc3BsYXkge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW4tYm90dG9tOiA2cHg7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxufVxcbiNmcm9udC1wYWdlIC50YWdsaW5lLWNvbnRhaW5lciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgbWFyZ2luLXRvcDogMmVtO1xcbn1cXG4jZnJvbnQtcGFnZSAudGFnbGluZS1tYXRjaC1jb3VudCB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxLjNlbTtcXG59XFxuI2Zyb250LXBhZ2UgLnNlYXJjaCB7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIG1pbi13aWR0aDogMThlbTtcXG4gIGJhY2tncm91bmQ6ICNlMmU0ZTk7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBtaW4taGVpZ2h0OiAyLjZlbTtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG4jZnJvbnQtcGFnZSAuc3BsYXNoLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNmcm9udC1wYWdlIC5iYWNrZHJvcC1pbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogNTB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6ICMyMjI7XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcbiNmcm9udC1wYWdlIC5iYWNrZHJvcCB7XFxuICB6LWluZGV4OiAtMjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogMzJlbTtcXG59XFxuI2Zyb250LXBhZ2UgLmJhY2tkcm9wOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzE0MTgxZCwgcmdiYSgyMCwgMjQsIDI5LCAwLjk4NTU2NSkgMC45NyUsIHJnYmEoMjAsIDI0LCAyOSwgMC45NDUxMzEpIDIuMDc4MzMlLCByZ2JhKDIwLCAyNCwgMjksIDAuODgzMDA3KSAzLjI5NjY3JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjgwMzQ5OSkgNC42MDE2NyUsIHJnYmEoMjAsIDI0LCAyOSwgMC43MTA5MTUpIDUuOTY2NjclLCByZ2JhKDIwLCAyNCwgMjksIDAuNjA5NTYzKSA3LjM2NSUsIHJnYmEoMjAsIDI0LCAyOSwgMC41MDM3NSkgOC43NzE2NyUsIHJnYmEoMjAsIDI0LCAyOSwgMC4zOTc3ODQpIDEwLjE2JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjI5NTk3MykgMTEuNTA1JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjIwMjYyNCkgMTIuNzglLCByZ2JhKDIwLCAyNCwgMjksIDAuMTIyMDQ0KSAxMy45NTgzMyUsIHJnYmEoMjAsIDI0LCAyOSwgMC4wNTg1NDIzKSAxNS4wMTY2NyUsIHJnYmEoMjAsIDI0LCAyOSwgMC4wMTY0MjQ5KSAxNS45MjgzMyUsIHJnYmEoMjAsIDI0LCAyOSwgMCkgMTYuNjY2NjclLCByZ2JhKDIwLCAyNCwgMjksIDApIDgzLjMzMzMzJSwgcmdiYSgyMCwgMjQsIDI5LCAwLjAxNjQyNDkpIDg0LjA3MTY3JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjA1ODU0MjMpIDg0Ljk4MzMzJSwgcmdiYSgyMCwgMjQsIDI5LCAwLjEyMjA0NCkgODYuMDQxNjclLCByZ2JhKDIwLCAyNCwgMjksIDAuMjAyNjI0KSA4Ny4yMiUsIHJnYmEoMjAsIDI0LCAyOSwgMC4yOTU5NzMpIDg4LjQ5NSUsIHJnYmEoMjAsIDI0LCAyOSwgMC4zOTc3ODQpIDg5Ljg0JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjUwMzc1KSA5MS4yMjgzMyUsIHJnYmEoMjAsIDI0LCAyOSwgMC42MDk1NjMpIDkyLjYzNSUsIHJnYmEoMjAsIDI0LCAyOSwgMC43MTA5MTUpIDk0LjAzMzMzJSwgcmdiYSgyMCwgMjQsIDI5LCAwLjgwMzQ5OSkgOTUuMzk4MzMlLCByZ2JhKDIwLCAyNCwgMjksIDAuODgzMDA3KSA5Ni43MDMzMyUsIHJnYmEoMjAsIDI0LCAyOSwgMC45NDUxMzEpIDk3LjkyMTY3JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjk4NTU2NSkgOTkuMDMlLCAjMTQxODFkKSwgbGluZWFyLWdyYWRpZW50KDBkZWcsICMxNDE4MWQsICMxNDE4MWQgMjEuNDgxNDglLCByZ2JhKDIwLCAyNCwgMjksIDAuOTg1NTY1KSAyMy42MzcwNCUsIHJnYmEoMjAsIDI0LCAyOSwgMC45NDUxMzEpIDI2LjElLCByZ2JhKDIwLCAyNCwgMjksIDAuODgzMDA3KSAyOC44MDc0MSUsIHJnYmEoMjAsIDI0LCAyOSwgMC44MDM0OTkpIDMxLjcwNzQxJSwgcmdiYSgyMCwgMjQsIDI5LCAwLjcxMDkxNSkgMzQuNzQwNzQlLCByZ2JhKDIwLCAyNCwgMjksIDAuNjA5NTYzKSAzNy44NDgxNSUsIHJnYmEoMjAsIDI0LCAyOSwgMC41MDM3NSkgNDAuOTc0MDclLCByZ2JhKDIwLCAyNCwgMjksIDAuMzk3Nzg0KSA0NC4wNTkyNiUsIHJnYmEoMjAsIDI0LCAyOSwgMC4yOTU5NzMpIDQ3LjA0ODE1JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjIwMjYyNCkgNDkuODgxNDglLCByZ2JhKDIwLCAyNCwgMjksIDAuMTIyMDQ0KSA1Mi41JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjA1ODU0MjMpIDU0Ljg1MTg1JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjAxNjQyNDkpIDU2Ljg3Nzc4JSwgcmdiYSgyMCwgMjQsIDI5LCAwKSA1OC41MTg1MiUpO1xcbn1cXG4jZnJvbnQtcGFnZSAuYmFja2Ryb3AgLnNob3duIHtcXG4gIG9wYWNpdHk6IDAuNztcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC42cyBlYXNlLWluO1xcbn1cXG4jZnJvbnQtcGFnZSAuYmFja2Ryb3AgLmhpZGRlbiB7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjZzIGVhc2UtaW47XFxufVxcbiNmcm9udC1wYWdlICN0cGEtYmFja2Ryb3AuaGlkZGVuIHtcXG4gIHRyYW5zaXRpb246IG5vbmU7XFxufVxcbiNmcm9udC1wYWdlIC5zbG9nYW4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxNmVtO1xcbn1cXG4jZnJvbnQtcGFnZSAuc2xvZ2FuLWNvbnRhaW5lciAuc2xvZ2FuLTEge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmFybG93XFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuI2Zyb250LXBhZ2UgLnNsb2dhbi1jb250YWluZXIgLnNsb2dhbi0yIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIkJhcmxvd1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xcbiAgI2Zyb250LXBhZ2UgLnNsb2dhbi1jb250YWluZXIge1xcbiAgICB0b3A6IDEyZW07XFxuICB9XFxufVxcbiNmcm9udC1wYWdlIC5tb2JpbGUtZGlzY292ZXItYnRuLWNvbnRhaW5lciB7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci1yYWRpdXM6IDc1JSAxMCUvMCUgNzUlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm90dG9tOiAxMGVtO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcXG4gICNmcm9udC1wYWdlIC5tb2JpbGUtZGlzY292ZXItYnRuLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gICAgYm90dG9tOiA1ZW07XFxuICB9XFxufVxcbiNmcm9udC1wYWdlIC5tb2JpbGUtZGlzY292ZXItYnRuLWNvbnRhaW5lcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG59XFxuI2Zyb250LXBhZ2UgLmZyb250LXBhZ2UtYnRuIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG59XFxuI2Zyb250LXBhZ2UgLmZyb250LXBhZ2UtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbn1cXG4jZnJvbnQtcGFnZSAuZGlzY292ZXItYnRuLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtYXJnaW4tYm90dG9tOiAzZW07XFxuICBkaXNwbGF5OiBub25lO1xcbiAgdG9wOiAyMS41ZW07XFxufVxcbiNmcm9udC1wYWdlIC5kaXNjb3Zlci1idG4ge1xcbiAgYm9yZGVyOiBzb2xpZDtcXG4gIGNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNzUlIDEwJS8wJSA3NSU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG59XFxuI2Zyb250LXBhZ2UgLmRpc2NvdmVyLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG59XFxuI2Zyb250LXBhZ2UgLm5hdmlnYXRpb24tc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNmcm9udC1wYWdlIC5kZXNrdG9wLXNlYXJjaC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuI2Zyb250LXBhZ2UgLmF1dG8tY29tcGxldGUtbmFtZXMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZDRkNDtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICBib3JkZXItdG9wOiBub25lO1xcbiAgei1pbmRleDogNDtcXG4gIHRvcDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTRyZW07XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuI2Zyb250LXBhZ2UgLmF1dG8tY29tcGxldGUtbmFtZS13cmFwcGVyIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNGQ0ZDQ7XFxuICBjb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4jZnJvbnQtcGFnZSAuYXV0by1jb21wbGV0ZS1uYW1lLXdyYXBwZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxufVxcbiNmcm9udC1wYWdlIC5hdXRvLWNvbXBsZXRlLW5hbWUtd3JhcHBlcjpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG59XFxuI2Zyb250LXBhZ2UgLnNlYXJjaCB7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIG1pbi13aWR0aDogMThlbTtcXG4gIGJhY2tncm91bmQ6ICNlMmU0ZTk7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBtaW4taGVpZ2h0OiAyLjZlbTtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG4jZnJvbnQtcGFnZSAuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBwYWRkaW5nOiAwIDEuM2VtIDAuNmVtIDEuM2VtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuI2Zyb250LXBhZ2UgLmZvb3Rlci1saW5rcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4jZnJvbnQtcGFnZSAuZ2l0aHViLWxpbmsge1xcbiAgbWFyZ2luLWJvdHRvbTogMC4yZW07XFxuICBwYWRkaW5nLXRvcDogMC40ZW07XFxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG59XFxuI2Zyb250LXBhZ2UgLmdpdGh1Yi1pY29uIHtcXG4gIHdpZHRoOiAyLjVlbTtcXG4gIHRyYW5zaXRpb246IGZpbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuI2Zyb250LXBhZ2UgLmdpdGh1Yi1saW5rOmhvdmVyIC5naXRodWItaWNvbiB7XFxuICBmaWxsOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxufVxcbiNmcm9udC1wYWdlIC5saW5rZWRpbi1saW5rIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuMmVtO1xcbiAgcGFkZGluZy10b3A6IDAuNGVtO1xcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcXG59XFxuI2Zyb250LXBhZ2UgLmxpbmtlZGluLWljb24ge1xcbiAgd2lkdGg6IDIuNWVtO1xcbiAgdHJhbnNpdGlvbjogZmlsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG4jZnJvbnQtcGFnZSAubGlua2VkaW4tbGluazpob3ZlciAubGlua2VkaW4taWNvbiB7XFxuICBmaWxsOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xcbiAgI2Zyb250LXBhZ2UgLmRlc2t0b3Atc2VhcmNoLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxuICAjZnJvbnQtcGFnZSAubW9iaWxlLWRpc2NvdmVyLWJ0bi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgI2Zyb250LXBhZ2UgLmRpc2NvdmVyLWJ0bi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG4gICNmcm9udC1wYWdlIC5sZWdhbC1ib2lsZXJwbGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBwYWRkaW5nLXRvcDogMC42ZW07XFxuICB9XFxuICAjZnJvbnQtcGFnZSAuc2xvZ2FuLWNvbnRhaW5lciB7XFxuICAgIHRvcDogMzBlbTtcXG4gIH1cXG4gICNmcm9udC1wYWdlIC5zbG9nYW4tMSB7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgfVxcbiAgI2Zyb250LXBhZ2UgLnNsb2dhbi0yIHtcXG4gICAgZm9udC1zaXplOiAyLjFyZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxNDAwcHgpIHtcXG4gICNmcm9udC1wYWdlIC5kaXNjb3Zlci1idG4tY29udGFpbmVyIHtcXG4gICAgdG9wOiAxOGVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuICAjZnJvbnQtcGFnZSAuYXBwLW5hbWUtZGlzcGxheS1jb250YWluZXIge1xcbiAgICBwYWRkaW5nLXRvcDogNGVtO1xcbiAgfVxcbiAgI2Zyb250LXBhZ2UgLnNsb2dhbi1jb250YWluZXIge1xcbiAgICB0b3A6IDEzZW07XFxuICB9XFxuICAjZnJvbnQtcGFnZSAubW9iaWxlLWRpc2NvdmVyLWJ0bi1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMTBlbTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlc2hlZXRzL2Zyb250cGFnZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7QUFDRjtBQUNFO0VBQ0Usa0NBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0FBQ0o7QUFFRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBQUo7QUFHRTtFQUNFLHVCQUFBO0VBQ0EsdUJBQUE7QUFESjtBQUlFO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxt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QUE5RUo7QUFpRkU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQS9FSjtBQWtGRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBaEZKO0FBbUZFO0VBQ0UsYUFBQTtBQWpGSjtBQW9GRTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQWxGSjtBQXFGRTtFQUNFLFlBQUE7RUFDQSxpQ0FBQTtBQW5GSjtBQXVGSTtFQUNFLHdCQUFBO0FBckZOO0FBeUZFO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBdkZKO0FBMEZFO0VBQ0UsWUFBQTtFQUNBLGlDQUFBO0FBeEZKO0FBNEZJO0VBQ0Usd0JBQUE7QUExRk47QUE4RkU7RUFDRTtJQUNFLGNBQUE7RUE1Rko7QUFDRjtBQStGRTtFQUNFO0lBQ0UsYUFBQTtFQTdGSjtFQWdHRTtJQUNFLGNBQUE7RUE5Rko7RUFpR0U7SUFDRSxjQUFBO0lBQ0Esa0JBQUE7RUEvRko7RUFrR0U7SUFDRSxTQUFBO0VBaEdKO0VBbUdFO0lBQ0UsaUJBQUE7RUFqR0o7RUFvR0U7SUFDRSxpQkFBQTtFQWxHSjtBQUNGO0FBcUdFO0VBQ0U7SUFDRSxTQUFBO0VBbkdKO0FBQ0Y7QUFzR0U7RUFDRTtJQUNFLGdCQUFBO0VBcEdKO0VBdUdFO0lBQ0UsU0FBQTtFQXJHSjtFQXdHRTtJQUNFLGtCQUFBO0lBQ0EsWUFBQTtFQXRHSjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIC0tcmFzaW4tYmxhY2s6ICMxZDFlMmM7XFxuICAtLXRyYW5zcGFyZW50LXJhc2luLWJsYWNrOiAjMWQxZTJjOTE7XFxuICAtLWRhcmstZ29sZDogIzkyNzU0MztcXG4gIC0tbGlnaHQtZ29sZDogI2M3YWI2ZTtcXG59XFxuXFxuI2Zyb250LXBhZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogLTQ7XFxuICBmb250LWZhbWlseTogXFxcIkJhcmxvd1xcXCIsIHNhbnMtc2VyaWY7XFxuXFxuICAuYXBwLW5hbWUtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gICAgcGFkZGluZzogMC4zZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweCAwcHggOHB4IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gIC5hcHAtbmFtZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXG4gIH1cXG5cXG4gIC5hcHAtbmFtZS1jb250YWluZXI6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB9XFxuXFxuICAucGFnZS1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMWVtIDA7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gICAgYm9yZGVyLXdpZHRoOiAwIDAgMnB4IDA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuYXBwLW5hbWUtZGlzcGxheS1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMGIzO1xcbiAgICBwYWRkaW5nOiAwLjJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTFweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogNmVtO1xcblxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcXG4gICAgICBwYWRkaW5nLXRvcDogMmVtO1xcbiAgICB9XFxuICB9XFxuXFxuICAuYXBwLW5hbWUtZGlzcGxheSB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gIH1cXG5cXG4gIC50YWdsaW5lLWNvbnRhaW5lciB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgbWFyZ2luLXRvcDogMmVtO1xcbiAgfVxcblxcbiAgLnRhZ2xpbmUtbWF0Y2gtY291bnQge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDEuM2VtO1xcbiAgfVxcblxcbiAgLnNlYXJjaCB7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBtaW4td2lkdGg6IDE4ZW07XFxuICAgIGJhY2tncm91bmQ6ICNlMmU0ZTk7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbWluLWhlaWdodDogMi42ZW07XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgfVxcblxcbiAgLnNwbGFzaC1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5iYWNrZHJvcC1pbWcge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDUwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogIzIyMjtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgfVxcblxcbiAgLmJhY2tkcm9wIHtcXG4gICAgei1pbmRleDogLTI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDMyZW07XFxuICB9XFxuXFxuICAuYmFja2Ryb3A6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICAgICAgOTBkZWcsXFxuICAgICAgICAjMTQxODFkLFxcbiAgICAgICAgcmdiYSgyMCwgMjQsIDI5LCAwLjk4NTU2NSkgMC45NyUsXFxuICAgICAgICByZ2JhKDIwLCAyNCwgMjksIDAuOTQ1MTMxKSAyLjA3ODMzJSxcXG4gICAgICAgIHJnYmEoMjAsIDI0LCAyOSwgMC44ODMwMDcpIDMuMjk2NjclLFxcbiAgICAgICAgcmdiYSgyMCwgMjQsIDI5LCAwLjgwMzQ5OSkgNC42MDE2NyUsXFxuICAgICAgICByZ2JhKDIwLCAyNCwgMjksIDAuNzEwOTE1KSA1Ljk2NjY3JSxcXG4gICAgICAgIHJnYmEoMjAsIDI0LCAyOSwgMC42MDk1NjMpIDcuMzY1JSxcXG4gICAgICAgIHJnYmEoMjAsIDI0LCAyOSwgMC41MDM3NSkgOC43NzE2NyUsXFxuICAgICAgICByZ2JhKDIwLCAyNCwgMjksIDAuMzk3Nzg0KSAxMC4xNiUsXFxuICAgICAgICByZ2JhKDIwLCAyNCwgMjksIDAuMjk1OTczKSAxMS41MDUlLFxcbiAgICAgICAgcmdiYSgyMCwgMjQsIDI5LCAwLjIwMjYyNCkgMTIuNzglLFxcbiAgICAgICAgcmdiYSgyMCwgMjQsIDI5LCAwLjEyMjA0NCkgMTMuOTU4MzMlLFxcbiAgICAgICAgcmdiYSgyMCwgMjQsIDI5LCAwLjA1ODU0MjMpIDE1LjAxNjY3JSxcXG4gICAgICAgIHJnYmEoMjAsIDI0LCAyOSwgMC4wMTY0MjQ5KSAxNS45MjgzMyUsXFxuICAgICAgICByZ2JhKDIwLCAyNCwgMjksIDApIDE2LjY2NjY3JSxcXG4gICAgICAgIHJnYmEoMjAsIDI0LCAyOSwgMCkgODMuMzMzMzMlLFxcbiAgICAgICAgcmdiYSgyMCwgMjQsIDI5LCAwLjAxNjQyNDkpIDg0LjA3MTY3JSxcXG4gICAgICAgIHJnYmEoMjAsIDI0LCAyOSwgMC4wNTg1NDIzKSA4NC45ODMzMyUsXFxuICAgICAgICByZ2JhKDIwLCAyNCwgMjksIDAuMTIyMDQ0KSA4Ni4wNDE2NyUsXFxuICAgICAgICByZ2JhKDIwLCAyNCwgMjksIDAuMjAyNjI0KSA4Ny4yMiUsXFxuICAgICAgICByZ2JhKDIwLCAyNCwgMjksIDAuMjk1OTczKSA4OC40OTUlLFxcbiAgICAgICAgcmdiYSgyMCwgMjQsIDI5LCAwLjM5Nzc4NCkgODkuODQlLFxcbiAgICAgICAgcmdiYSgyMCwgMjQsIDI5LCAwLjUwMzc1KSA5MS4yMjgzMyUsXFxuICAgICAgICByZ2JhKDIwLCAyNCwgMjksIDAuNjA5NTYzKSA5Mi42MzUlLFxcbiAgICAgICAgcmdiYSgyMCwgMjQsIDI5LCAwLjcxMDkxNSkgOTQuMDMzMzMlLFxcbiAgICAgICAgcmdiYSgyMCwgMjQsIDI5LCAwLjgwMzQ5OSkgOTUuMzk4MzMlLFxcbiAgICAgICAgcmdiYSgyMCwgMjQsIDI5LCAwLjg4MzAwNykgOTYuNzAzMzMlLFxcbiAgICAgICAgcmdiYSgyMCwgMjQsIDI5LCAwLjk0NTEzMSkgOTcuOTIxNjclLFxcbiAgICAgICAgcmdiYSgyMCwgMjQsIDI5LCAwLjk4NTU2NSkgOTkuMDMlLFxcbiAgICAgICAgIzE0MTgxZFxcbiAgICAgICksXFxuICAgICAgbGluZWFyLWdyYWRpZW50KFxcbiAgICAgICAgMGRlZyxcXG4gICAgICAgICMxNDE4MWQsXFxuICAgICAgICAjMTQxODFkIDIxLjQ4MTQ4JSxcXG4gICAgICAgIHJnYmEoMjAsIDI0LCAyOSwgMC45ODU1NjUpIDIzLjYzNzA0JSxcXG4gICAgICAgIHJnYmEoMjAsIDI0LCAyOSwgMC45NDUxMzEpIDI2LjElLFxcbiAgICAgICAgcmdiYSgyMCwgMjQsIDI5LCAwLjg4MzAwNykgMjguODA3NDElLFxcbiAgICAgICAgcmdiYSgyMCwgMjQsIDI5LCAwLjgwMzQ5OSkgMzEuNzA3NDElLFxcbiAgICAgICAgcmdiYSgyMCwgMjQsIDI5LCAwLjcxMDkxNSkgMzQuNzQwNzQlLFxcbiAgICAgICAgcmdiYSgyMCwgMjQsIDI5LCAwLjYwOTU2MykgMzcuODQ4MTUlLFxcbiAgICAgICAgcmdiYSgyMCwgMjQsIDI5LCAwLjUwMzc1KSA0MC45NzQwNyUsXFxuICAgICAgICByZ2JhKDIwLCAyNCwgMjksIDAuMzk3Nzg0KSA0NC4wNTkyNiUsXFxuICAgICAgICByZ2JhKDIwLCAyNCwgMjksIDAuMjk1OTczKSA0Ny4wNDgxNSUsXFxuICAgICAgICByZ2JhKDIwLCAyNCwgMjksIDAuMjAyNjI0KSA0OS44ODE0OCUsXFxuICAgICAgICByZ2JhKDIwLCAyNCwgMjksIDAuMTIyMDQ0KSA1Mi41JSxcXG4gICAgICAgIHJnYmEoMjAsIDI0LCAyOSwgMC4wNTg1NDIzKSA1NC44NTE4NSUsXFxuICAgICAgICByZ2JhKDIwLCAyNCwgMjksIDAuMDE2NDI0OSkgNTYuODc3NzglLFxcbiAgICAgICAgcmdiYSgyMCwgMjQsIDI5LCAwKSA1OC41MTg1MiVcXG4gICAgICApO1xcbiAgfVxcblxcbiAgLmJhY2tkcm9wIC5zaG93biB7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjZzIGVhc2UtaW47XFxuICB9XFxuXFxuICAuYmFja2Ryb3AgLmhpZGRlbiB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjZzIGVhc2UtaW47XFxuICB9XFxuXFxuICAjdHBhLWJhY2tkcm9wLmhpZGRlbiB7XFxuICAgIHRyYW5zaXRpb246IG5vbmU7XFxuICB9XFxuXFxuICAuc2xvZ2FuLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxNmVtO1xcblxcbiAgICAuc2xvZ2FuLTEge1xcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIGZvbnQtZmFtaWx5OiBcXFwiQmFybG93XFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgfVxcblxcbiAgICAuc2xvZ2FuLTIge1xcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIGZvbnQtZmFtaWx5OiBcXFwiQmFybG93XFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgfVxcblxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcXG4gICAgICB0b3A6IDEyZW07XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5tb2JpbGUtZGlzY292ZXItYnRuLWNvbnRhaW5lciB7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgICBib3JkZXItcmFkaXVzOiA3NSUgMTAlLzAlIDc1JTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogMTBlbTtcXG5cXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgICAgIGJvdHRvbTogNWVtO1xcbiAgICB9XFxuICB9XFxuXFxuICAubW9iaWxlLWRpc2NvdmVyLWJ0bi1jb250YWluZXI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gIH1cXG5cXG4gIC5mcm9udC1wYWdlLWJ0biB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgfVxcblxcbiAgLmZyb250LXBhZ2UtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICB9XFxuXFxuICAuZGlzY292ZXItYnRuLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogM2VtO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB0b3A6IDIxLjVlbTtcXG4gIH1cXG5cXG4gIC5kaXNjb3Zlci1idG4ge1xcbiAgICBib3JkZXI6IHNvbGlkO1xcbiAgICBjb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNzUlIDEwJS8wJSA3NSU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICB9XFxuXFxuICAuZGlzY292ZXItYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICB9XFxuXFxuICAubmF2aWdhdGlvbi1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5kZXNrdG9wLXNlYXJjaC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5hdXRvLWNvbXBsZXRlLW5hbWVzIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDRkNGQ0O1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICB6LWluZGV4OiA0O1xcbiAgICB0b3A6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAxNHJlbTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmF1dG8tY29tcGxldGUtbmFtZS13cmFwcGVyIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q0ZDRkNDtcXG4gICAgY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuYXV0by1jb21wbGV0ZS1uYW1lLXdyYXBwZXI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gIH1cXG5cXG4gIC5hdXRvLWNvbXBsZXRlLW5hbWUtd3JhcHBlcjpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgfVxcblxcbiAgLnNlYXJjaCB7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBtaW4td2lkdGg6IDE4ZW07XFxuICAgIGJhY2tncm91bmQ6ICNlMmU0ZTk7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbWluLWhlaWdodDogMi42ZW07XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgfVxcblxcbiAgLmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAwLjhlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIHBhZGRpbmc6IDAgMS4zZW0gMC42ZW0gMS4zZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICB9XFxuXFxuICAuZm9vdGVyLWxpbmtzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG5cXG4gIC5naXRodWItbGluayB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuMmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMC40ZW07XFxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xcbiAgfVxcblxcbiAgLmdpdGh1Yi1pY29uIHtcXG4gICAgd2lkdGg6IDIuNWVtO1xcbiAgICB0cmFuc2l0aW9uOiBmaWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICB9XFxuXFxuICAuZ2l0aHViLWxpbms6aG92ZXIge1xcbiAgICAuZ2l0aHViLWljb24ge1xcbiAgICAgIGZpbGw6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLmxpbmtlZGluLWxpbmsge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjJlbTtcXG4gICAgcGFkZGluZy10b3A6IDAuNGVtO1xcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xcbiAgfVxcblxcbiAgLmxpbmtlZGluLWljb24ge1xcbiAgICB3aWR0aDogMi41ZW07XFxuICAgIHRyYW5zaXRpb246IGZpbGwgMC4ycyBlYXNlLWluLW91dDtcXG4gIH1cXG5cXG4gIC5saW5rZWRpbi1saW5rOmhvdmVyIHtcXG4gICAgLmxpbmtlZGluLWljb24ge1xcbiAgICAgIGZpbGw6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gICAgfVxcbiAgfVxcblxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuICAgIC5kZXNrdG9wLXNlYXJjaC1jb250YWluZXIge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxuICAgIC5tb2JpbGUtZGlzY292ZXItYnRuLWNvbnRhaW5lciB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAuZGlzY292ZXItYnRuLWNvbnRhaW5lciB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG5cXG4gICAgLmxlZ2FsLWJvaWxlcnBsYXRlIHtcXG4gICAgICBmb250LXNpemU6IDFlbTtcXG4gICAgICBwYWRkaW5nLXRvcDogMC42ZW07XFxuICAgIH1cXG5cXG4gICAgLnNsb2dhbi1jb250YWluZXIge1xcbiAgICAgIHRvcDogMzBlbTtcXG4gICAgfVxcblxcbiAgICAuc2xvZ2FuLTEge1xcbiAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICB9XFxuXFxuICAgIC5zbG9nYW4tMiB7XFxuICAgICAgZm9udC1zaXplOiAyLjFyZW07XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxNDAwcHgpIHtcXG4gICAgLmRpc2NvdmVyLWJ0bi1jb250YWluZXIge1xcbiAgICAgIHRvcDogMThlbTtcXG4gICAgfVxcbiAgfVxcblxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgICAuYXBwLW5hbWUtZGlzcGxheS1jb250YWluZXIge1xcbiAgICAgIHBhZGRpbmctdG9wOiA0ZW07XFxuICAgIH1cXG5cXG4gICAgLnNsb2dhbi1jb250YWluZXIge1xcbiAgICAgIHRvcDogMTNlbTtcXG4gICAgfVxcblxcbiAgICAubW9iaWxlLWRpc2NvdmVyLWJ0bi1jb250YWluZXIge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBib3R0b206IDEwZW07XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbjpyb290IHtcXG4gIC0tcmFzaW4tYmxhY2s6ICMxZDFlMmM7XFxuICAtLWRhcmstZ29sZDogIzkyNzU0MztcXG4gIC0tbGlnaHQtZ29sZDogI2M3YWI2ZTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgcGFkZGluZzogMnJlbSAwO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmFybG93XFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuLm1vZGFsICNtYWluLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nOiAwO1xcbiAgbWF4LXdpZHRoOiA3NSU7XFxuICBtaW4taGVpZ2h0OiA0OXJlbTtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5tb2RhbCAjbWFpbi1jb250YWluZXIgI21haW4ge1xcbiAgY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxufVxcbi5tb2RhbCAubW9kYWwtaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBlMDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBiZjtcXG59XFxuLm1vZGFsIC5uYXZpZ2F0aW9uLWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmNsb3NlLW1vZGFsLWJ0bi13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDEuMmVtO1xcbn1cXG4ubW9kYWwgLmNsb3NlLW1vZGFsLWJ0biB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1zaXplOiAxLjZlbTtcXG59XFxuLm1vZGFsIC5jbG9zZS1tb2RhbC1idG46aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbn1cXG4ubW9kYWwgLm1vZGFsLW5hdi1saW5rcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBmb250LXNpemU6IDIycHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm1vZGFsIC5tb2RhbC1uYXYtbGluayB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tdG9wOiAwLjVlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG4ubW9kYWwgLm1vZGFsLW5hdi1saW5rOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLWhlYWRpbmcge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLW5hbWUge1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXRpdGxlIHtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tcm9sZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXJvbGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1yZXNvdXJjZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXJvbGUtaW1hZ2Uge1xcbiAgaGVpZ2h0OiAzLjVyZW07XFxuICB3aWR0aDogMy41cmVtO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXJlc291cmNlLWltYWdlIHtcXG4gIGhlaWdodDogMy41cmVtO1xcbiAgd2lkdGg6IDMuNXJlbTtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1yb2xlLW5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1yZXNvdXJjZS1uYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tbWFpbi1pbmZvIHtcXG4gIHBhZGRpbmc6IDEuOHJlbTtcXG4gIG1heC13aWR0aDogMzRyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogbGFzdCBiYXNlbGluZTtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xcbiAgZnJvbSB7XFxuICAgIHRvcDogLTMwMHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0b3A6IDA7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XFxuICBmcm9tIHtcXG4gICAgdG9wOiAtMzAwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICB0byB7XFxuICAgIHRvcDogMDtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuLm1vZGFsIC5sb3JlLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwZTA7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbn1cXG4ubW9kYWwgLnN1YmhlYWRpbmcge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMC40ZW07XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tb2RhbCAuYWJpbGl0aWVzLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwZTA7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgd2lkdGg6IDI4ZW07XFxufVxcbi5tb2RhbCAuYWJpbGl0aWVzLWhlYWRpbmcge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmFiaWxpdHktaW1ncyB7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcbi5tb2RhbCAuYWJpbGl0eS1kZXNjcmlwdGlvbiB7XFxuICBtYXJnaW4tdG9wOiAwLjVlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLWRldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tZXh0cmEtaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLm1vZGFsIC5hYmlsaXR5LWluZm8ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLm1vZGFsIC5hYmlsaXR5LWluZm8uYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ubW9kYWwgLnNwZWxsLWltZyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDAgMC41cmVtO1xcbiAgaGVpZ2h0OiAzLjNyZW07XFxuICB3aWR0aDogMy4zcmVtO1xcbn1cXG4ubW9kYWwgLnNwZWxsLWltZy5jbGlja2VkIHtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBib3JkZXItd2lkdGg6IDRweDtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi10aXBzLXNlY3Rpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMGUwO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC42ZW07XFxuICBsaW5lLWhlaWdodDogMS40O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XFxuICBtYXgtd2lkdGg6IDM0cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXRpcHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tdGlwIHtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuLm1vZGFsICNzdGF0cy1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMDtcXG4gIG1heC13aWR0aDogNzUlO1xcbiAgbWluLWhlaWdodDogNDlyZW07XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5tb2RhbCAjc3RhdHMtY29udGFpbmVyICNzdGF0cyB7XFxuICBjb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1zdGF0cy1vdmVydmlldyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBtYXJnaW4tdG9wOiAwLjVlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbiAgbWF4LXdpZHRoOiAyNXJlbTtcXG4gIG1pbi13aWR0aDogMjByZW07XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcbi5tb2RhbCAud2luLXJhdGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5tb2RhbCAucGljay1yYXRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ubW9kYWwgLmxhbmUtaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5tb2RhbCAucGljay1yYXRlLXZhbHVlIHtcXG4gIG1hcmdpbi10b3A6IDAuNGVtO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbn1cXG4ubW9kYWwgLndpbi1yYXRlLXZhbHVlIHtcXG4gIG1hcmdpbi10b3A6IDAuNGVtO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbn1cXG4ubW9kYWwgLmxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1kYW1hZ2UtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBlMDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBtYXgtaGVpZ2h0OiAxNy41cmVtO1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcbi5tb2RhbCAuZGFtYWdlLWhlYWRpbmcge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmNpcmN1bGFyLWNoYXJ0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1heC1oZWlnaHQ6IDE0ZW07XFxufVxcbi5tb2RhbCAuY2lyY2xlIHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2Utd2lkdGg6IDIuMjtcXG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcXG4gIGFuaW1hdGlvbjogcHJvZ3Jlc3MgMXMgZWFzZS1vdXQgZm9yd2FyZHM7XFxufVxcbi5tb2RhbCAjbWFnaWMtZGFtYWdlLXN0cm9rZSB7XFxuICBzdHJva2U6ICMzNWE3ZmY7XFxufVxcbi5tb2RhbCAjcGh5c2ljYWwtZGFtYWdlLXN0cm9rZSB7XFxuICBzdHJva2U6ICNmZjU5NjQ7XFxufVxcbi5tb2RhbCAjdHJ1ZS1kYW1hZ2Utc3Ryb2tlIHtcXG4gIHN0cm9rZTogI2ZmZTc0YztcXG59XFxuQGtleWZyYW1lcyBwcm9ncmVzcyB7XFxuICAwJSB7XFxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDAgMTAwO1xcbiAgfVxcbn1cXG4ubW9kYWwgLnRvdGFsLWRhbWFnZS10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogNHB4O1xcbiAgdGV4dC1hbmNob3I6IG1pZGRsZTtcXG4gIGZpbGw6IHdoaXRlO1xcbn1cXG4ubW9kYWwgLnRvdGFsLWRhbWFnZS1sYWJlbCB7XFxuICBmb250LXNpemU6IDNweDtcXG4gIHRleHQtYW5jaG9yOiBtaWRkbGU7XFxuICBmaWxsOiB2YXIoLS1kYXJrLWdvbGQpO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLW1haW4tc3RhdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLWl0ZW0tYnVpbGRzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBlMDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBtYXgtaGVpZ2h0OiAxNy41cmVtO1xcbn1cXG4ubW9kYWwgLmRhbWFnZS1zdGF0cy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5tb2RhbCAuZGFtYWdlLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1heC1oZWlnaHQ6IDkyJTtcXG4gIGhlaWdodDogOTIlO1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcbi5tb2RhbCAuZGFtYWdlLXR5cGUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcbi5tb2RhbCAuZGFtYWdlLXN0YXRzIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcbi5tb2RhbCAjcGh5c2ljYWwtZGFtYWdlLWxhYmVsIHtcXG4gIGNvbG9yOiAjZmY1OTY0O1xcbn1cXG4ubW9kYWwgI21hZ2ljLWRhbWFnZS1sYWJlbCB7XFxuICBjb2xvcjogIzM1YTdmZjtcXG59XFxuLm1vZGFsICN0cnVlLWRhbWFnZS1sYWJlbCB7XFxuICBjb2xvcjogI2ZmZTc0YztcXG59XFxuLm1vZGFsIC5pdGVtLWRldGFpbHMtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBlMDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMDtcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHdpZHRoOiA0MCU7XFxuICByaWdodDogMTBlbTtcXG4gIG1hcmdpbi1ib3R0b206IDMuNWVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubW9kYWwgLml0ZW0tbmFtZSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4ubW9kYWwgLm1haW4taXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbn1cXG4ubW9kYWwgLmNvc3QtbGFiZWwge1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4ubW9kYWwgLmNvbXBvbmVudC1pdGVtcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLm1vZGFsIC5jb21wb25lbnQtaXRlbS1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLm1vZGFsIC5jb3N0LWFtb3VudCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5tb2RhbCAuY29tcG9uZW50LWl0ZW0tY29zdC1sYWJlbCB7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5tb2RhbCAuY29tcG9uZW50LWl0ZW0tYW1vdW50IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLm1vZGFsIC5jb21wb25lbnQtaXRlbS1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwZTA7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjA7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ubW9kYWwgLml0ZW0tc2V0cy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXgtaGVpZ2h0OiA5MCU7XFxufVxcbi5tb2RhbCAuaXRlbS1zZXQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGJvcmRlci13aWR0aDogMnB4O1xcbiAgcGFkZGluZzogMC40ZW07XFxufVxcbi5tb2RhbCAubWFpbi1jb21wb25lbnQtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBlMDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYwNDAwODM7XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDBlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG59XFxuLm1vZGFsIC5pdGVtLWltZyB7XFxuICBtYXgtd2lkdGg6IDIuN2VtO1xcbiAgbWF4LWhlaWdodDogMi43ZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG59XFxuLm1vZGFsIC5jb21wb25lbnQtaXRlbS1pbWcge1xcbiAgbWF4LXdpZHRoOiAxLjhlbTtcXG4gIG1heC1oZWlnaHQ6IDEuOGVtO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLW1hdGNodXBzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBlMDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBtYXgtaGVpZ2h0OiAyNS4ycmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwIDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcbi5tb2RhbCAubWF0Y2h1cHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgbWF4LXdpZHRoOiAyNHJlbTtcXG59XFxuLm1vZGFsIC5tYXRjaHVwLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNjFhO1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBtYXJnaW46IGF1dG8gMC41ZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxufVxcbi5tb2RhbCAubWF0Y2h1cC1pbmZvOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE2MWFjOTtcXG59XFxuLm1vZGFsIC5tYXRjaHVwLXN0YXRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgXFxcIkFwcGxlIFNEIEdvdGhpYyBOZW9cXFwiLCBBcHBsZUdvdGhpYywgRG90dW0sIEFyaWFsLCBUYWhvbWE7XFxufVxcbi5tb2RhbCAuZW5lbXktY2hhbXBpb24taW1nIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG1heC1oZWlnaHQ6IDNlbTtcXG4gIG1heC13aWR0aDogM2VtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcbi5tb2RhbCAud2lucmF0ZS1hZ2FpbnN0LXBlcmNlbnRhZ2UuYmx1ZSB7XFxuICBjb2xvcjogIzM1YTdmZjtcXG59XFxuLm1vZGFsIC53aW5yYXRlLWFnYWluc3QtcGVyY2VudGFnZS5yZWQge1xcbiAgY29sb3I6ICNmZjU5NjQ7XFxufVxcbi5tb2RhbCAjc2tpbnMtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXgtd2lkdGg6IDc1JTtcXG4gIG1pbi1oZWlnaHQ6IDQ5cmVtO1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWluLWhlaWdodDogMDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWF4LXdpZHRoOiA5OSU7XFxuICB3aWR0aDogOTklO1xcbn1cXG4ubW9kYWwgI3NraW5zLWNvbnRhaW5lciAubmF2aWdhdGlvbi1iYXIge1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IHZhcigtLWRhcmstZ29sZCk7XFxufVxcbi5tb2RhbCAjc2tpbnMtY29udGFpbmVyICNza2lucyB7XFxuICBjb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG59XFxuLm1vZGFsICNza2lucy1jb250YWluZXIgLm1vZGFsLWhlYWRlciB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4ubW9kYWwgLnNraW4taW1hZ2UtY29udGFpbmVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubW9kYWwgLnNraW4taW1hZ2UtY29udGFpbmVyLnNob3duIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4ubW9kYWwgLnNraW4taW1hZ2Uge1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubW9kYWwgLnNraW4tbmFtZSB7XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuLm1vZGFsICNza2lucy1jb250YWluZXIgLmNoYW1waW9uLWhlYWRpbmcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmltZy1zY3JvbGwtYXJyb3cge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuLm1vZGFsIC5pbWctc2Nyb2xsLWFycm93OmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTEyMHB4KSB7XFxuICAubW9kYWwgLmNvbXBvbmVudC1pdGVtLWltZyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAubW9kYWwgLml0ZW0tc2V0cy1jb250YWluZXIge1xcbiAgICBtaW4taGVpZ2h0OiA4MCU7XFxuICB9XFxuICAubW9kYWwgLml0ZW0tZGV0YWlscy1jb250YWluZXIge1xcbiAgICBtaW4td2lkdGg6IDcwJTtcXG4gICAgcmlnaHQ6IC02ZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjUwcHgpIHtcXG4gIC5tb2RhbCAuaXRlbS1pbWcge1xcbiAgICBtYXgtaGVpZ2h0OiAyLjJyZW07XFxuICAgIG1heC13aWR0aDogMi4ycmVtO1xcbiAgfVxcbiAgLm1vZGFsIC5jaGFtcGlvbi1kZXRhaWxzIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgfVxcbiAgLm1vZGFsIC5hYmlsaXRpZXMtY29udGFpbmVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgbWF4LXdpZHRoOiAzMXJlbTtcXG4gIH1cXG4gIC5tb2RhbCAubG9yZS1jb250YWluZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuICAubW9kYWwgI21haW4tY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiA3NnJlbTtcXG4gIH1cXG4gIC5tb2RhbCAuaXRlbS1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgIG1pbi13aWR0aDogNzAlO1xcbiAgICByaWdodDogLTZlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICAubW9kYWwgLml0ZW0tc2V0cy1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcbiAgLm1vZGFsIC5pdGVtLXNldC1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLm1vZGFsIC5tYXRjaHVwcyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAubW9kYWwgLmNoYW1waW9uLW1hdGNodXBzIHtcXG4gICAgbWF4LWhlaWdodDogMjguMnJlbTtcXG4gIH1cXG4gIC5tb2RhbCAubWF0Y2h1cC1pbmZvIHtcXG4gICAgbWFyZ2luOiAwLjJlbSBhdXRvO1xcbiAgfVxcbiAgLm1vZGFsICNtYWluLWNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG4gIC5tb2RhbCAjc3RhdHMtY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiA2M3JlbTtcXG4gIH1cXG4gIC5tb2RhbCAuaXRlbS1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgIHJpZ2h0OiAtMWVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogODQwcHgpIHtcXG4gIC5tb2RhbCAuZGFtYWdlLWluZm8ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgfVxcbiAgLm1vZGFsIC5nYW1lcy1wbGF5ZWQtYWdhaW5zdCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAubW9kYWwgLmRhbWFnZS1zdGF0cy1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTYwcHgpIHtcXG4gIC5tb2RhbCAuY2hhbXBpb24tbWFpbi1zdGF0cyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAubW9kYWwgLml0ZW0tc2V0LWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB9XFxuICAubW9kYWwgLml0ZW0tc2V0cy1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLm1vZGFsIC5jaGFtcGlvbi1kYW1hZ2UtY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgLm1vZGFsIC5kYW1hZ2Utc3RhdHMtaW5mbyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAubW9kYWwgLmRhbWFnZS1pbmZvIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICB9XFxuICAubW9kYWwgLmRhbWFnZS10eXBlLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMC4yZW0gYXV0bztcXG4gIH1cXG4gIC5tb2RhbCAuY2lyY3VsYXItY2hhcnQge1xcbiAgICBtYXgtaGVpZ2h0OiAxOTVweDtcXG4gICAgbWF4LXdpZHRoOiA4MCU7XFxuICB9XFxuICAubW9kYWwgLmRhbWFnZS1zdGF0cy1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLm1vZGFsIC5jaGFtcGlvbi1yb2xlIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xcbiAgfVxcbiAgLm1vZGFsIC5jaGFtcGlvbi1yZXNvdXJjZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcXG4gIH1cXG4gIC5tb2RhbCAuY2hhbXBpb24tcm9sZXMge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICB9XFxuICAubW9kYWwgLnNwZWxsLWltZyB7XFxuICAgIGhlaWdodDogMi44ZW07XFxuICAgIHdpZHRoOiAyLjhlbTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgfVxcbiAgLm1vZGFsIC5pdGVtLWRldGFpbHMtY29udGFpbmVyIHtcXG4gICAgcmlnaHQ6IDJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDQxNHB4KSB7XFxuICAubW9kYWwgLmNoYW1waW9uLXN0YXRzLW92ZXJ2aWV3IHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBtaW4td2lkdGg6IDE3cmVtO1xcbiAgfVxcbiAgLm1vZGFsIC5jaGFtcGlvbi1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcbiAgLm1vZGFsIC5tb2RhbC1uYXYtbGlua3Mge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICB9XFxuICAubW9kYWwgLmNsb3NlLW1vZGFsLWJ0bi13cmFwcGVyIHtcXG4gICAgbGVmdDogMC43ZW07XFxuICB9XFxuICAubW9kYWwgLmNsb3NlLW1vZGFsLWJ0biB7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMzAwcHgpIHtcXG4gIC5tb2RhbCAjc2tpbnMtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXgtd2lkdGg6IDcwJTtcXG4gICAgbWluLWhlaWdodDogYXV0bztcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDE5NTBweCkge1xcbiAgLm1vZGFsICNza2lucy1jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDUwJTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlc2hlZXRzL21vZGFscy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBOERBO0VBQ0Usa0RBQUE7QUEzREY7O0FBOERBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGlDQUFBO0FBM0RGO0FBNkRFO0VBakNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSw0RUFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUF1QkUsY0FBQTtBQS9DSjtBQWlESTtFQUNFLHVCQUFBO0FBL0NOO0FBbURFO0VBdEZBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBK0VFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUF4Q0o7QUEyQ0U7RUFDRSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUF6Q0o7QUE0Q0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUExQ0o7QUE2Q0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQTNDSjtBQThDRTtFQUNFLHdCQUFBO0FBNUNKO0FBK0NFO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUE3Q0o7QUFnREU7RUFDRSxlQUFBO0VBdkZGLGlCQUFBO0VBQ0Esb0JBQUE7QUEwQ0Y7QUFnREU7RUFDRSx1QkFBQTtBQTlDSjtBQWlERTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBL0NKO0FBa0RFO0VBQ0UsWUFBQTtBQWhESjtBQW1ERTtFQUNFLHdCQUFBO0VBQ0EsZUFBQTtFQTVHRixpQkFBQTtFQUNBLG9CQUFBO0FBNERGO0FBbURFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBakRKO0FBb0RFO0VBOUhBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBNkVGO0FBZ0RFO0VBbElBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBcUZGO0FBNENFO0VBaEpBLGNBQUE7RUFDQSxhQUFBO0FBdUdGO0FBNENFO0VBcEpBLGNBQUE7RUFDQSxhQUFBO0FBMkdGO0FBNENFO0VBbkpBLGdCQUFBO0VBQ0EsZUFBQTtBQTBHRjtBQTRDRTtFQXZKQSxnQkFBQTtFQUNBLGVBQUE7QUE4R0Y7QUE0Q0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQTFDSjtBQTZDRTtFQUNFO0lBQ0UsV0FBQTtJQUNBLFVBQUE7RUEzQ0o7RUE2Q0U7SUFDRSxNQUFBO0lBQ0EsVUFBQTtFQTNDSjtBQUNGO0FBOENFO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsVUFBQTtFQTVDSjtFQThDRTtJQUNFLE1BQUE7SUFDQSxVQUFBO0VBNUNKO0FBQ0Y7QUErQ0U7RUFsTkEsMkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFzS0Y7QUF1Q0U7RUF6TUEsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtBQXFLRjtBQXFDRTtFQTFOQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQW1ORSxXQUFBO0FBMUJKO0FBNkJFO0VBQ0Usa0JBQUE7QUEzQko7QUE4QkU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtBQTVCSjtBQStCRTtFQWxNQSxpQkFBQTtFQUNBLG9CQUFBO0FBc0tGO0FBK0JFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQTdCSjtBQWdDRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQTlCSjtBQWlDRTtFQUNFLGFBQUE7QUEvQko7QUFrQ0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFoQ0o7QUFtQ0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQWpDSjtBQW9DRTtFQUNFLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtBQWxDSjtBQXFDRTtFQS9RQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQXdRRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUExQko7QUE2QkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUEzQko7QUE4QkU7RUFDRSxrQkFBQTtBQTVCSjtBQStCRTtFQW5QQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsNEVBQUE7RUFDQSxrQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBeU9FLGFBQUE7QUFqQko7QUFtQkk7RUFDRSx1QkFBQTtBQWpCTjtBQXFCRTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQW5RRixpQkFBQTtFQUNBLG9CQUFBO0VBb1FFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBbEJKO0FBcUJFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBbkJKO0FBc0JFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBcEJKO0FBdUJFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFyQko7QUF3QkU7RUFDRSxpQkFBQTtFQUNBLHdCQUFBO0FBdEJKO0FBeUJFO0VBQ0UsaUJBQUE7RUFDQSx3QkFBQTtBQXZCSjtBQTBCRTtFQUNFLGVBQUE7QUF4Qko7QUEyQkU7RUEvVUEsMkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUF3VUUsbUJBQUE7RUFDQSxjQUFBO0FBaEJKO0FBbUJFO0VBQ0Usa0JBQUE7QUFqQko7QUFvQkU7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQWxCSjtBQXFCRTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0NBQUE7QUFuQko7QUFzQkU7RUFDRSxlQUFBO0FBcEJKO0FBdUJFO0VBQ0UsZUFBQTtBQXJCSjtBQXdCRTtFQUNFLGVBQUE7QUF0Qko7QUF5QkU7RUFDRTtJQUNFLHVCQUFBO0VBdkJKO0FBQ0Y7QUEwQkU7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBeEJKO0FBMkJFO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUF6Qko7QUE0QkU7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUExQko7QUE2QkU7RUExWUEsMkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFtWUUsbUJBQUE7QUFsQko7QUFxQkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBbkJKO0FBc0JFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQXBCSjtBQXVCRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFyQko7QUF3QkU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FBdEJKO0FBeUJFO0VBQ0UsY0FBQTtBQXZCSjtBQTBCRTtFQUNFLGNBQUE7QUF4Qko7QUEyQkU7RUFDRSxjQUFBO0FBekJKO0FBNEJFO0VBdGJBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBK2FFLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQWpCSjtBQW9CRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQWxCSjtBQXFCRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQW5CSjtBQXNCRTtFQUNFLHdCQUFBO0VBQ0EsZUFBQTtBQXBCSjtBQXVCRTtFQUNFLGFBQUE7QUFyQko7QUF3QkU7RUFDRSxlQUFBO0FBdEJKO0FBeUJFO0VBQ0UsZUFBQTtBQXZCSjtBQTBCRTtFQUNFLHdCQUFBO0VBQ0EsZUFBQTtBQXhCSjtBQTJCRTtFQUNFLGVBQUE7QUF6Qko7QUE0QkU7RUF6ZUEsMkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFrZUUsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUFqQko7QUFvQkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQWxCSjtBQXFCRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQW5CSjtBQXNCRTtFQW5nQkEsMkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUE0ZkUsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBWEo7QUFjRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLGlCQUFBO0FBYko7QUFnQkU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBZEo7QUFpQkU7RUFqaUJBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBMGhCRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUFOSjtBQVNFO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUFQSjtBQVVFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQVJKO0FBV0U7RUFDRSwyQkFBQTtBQVRKO0FBWUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0dBQUE7QUFWSjtBQWNFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBWko7QUFlRTtFQUNFLGNBQUE7QUFiSjtBQWdCRTtFQUNFLGNBQUE7QUFkSjtBQWlCRTtFQTNpQkEsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDRFQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQ0FBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQWlpQkUsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQUhKO0FBS0k7RUFDRSx5Q0FBQTtBQUhOO0FBTUk7RUFDRSx1QkFBQTtBQUpOO0FBUUU7RUFDRSxnQkFBQTtBQU5KO0FBU0U7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBUEo7QUFVRTtFQUNFLGNBQUE7QUFSSjtBQVdFO0VBQ0UsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FBVEo7QUFZRTtFQUNFLGNBQUE7QUFWSjtBQWFFO0VBQ0UsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFYSjtBQWNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBWko7QUFlRTtFQUNFLHVCQUFBO0FBYko7QUFnQkU7RUFDRTtJQUNFLGFBQUE7RUFkSjtFQWlCRTtJQUNFLGVBQUE7RUFmSjtFQWtCRTtJQUNFLGNBQUE7SUFDQSxXQUFBO0VBaEJKO0FBQ0Y7QUFtQkU7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsaUJBQUE7RUFqQko7RUFvQkU7SUFDRSw4QkFBQTtFQWxCSjtFQXFCRTtJQUNFLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0VBbkJKO0VBc0JFO0lBQ0Usa0JBQUE7RUFwQko7RUF1QkU7SUFDRSxhQUFBO0VBckJKO0VBd0JFO0lBQ0UsY0FBQTtJQUNBLFdBQUE7RUF0Qko7QUFDRjtBQXlCRTtFQUNFO0lBQ0UsbUJBQUE7RUF2Qko7RUEwQkU7SUFDRSxzQkFBQTtFQXhCSjtFQTJCRTtJQUNFLHNCQUFBO0VBekJKO0VBNEJFO0lBQ0UsbUJBQUE7RUExQko7RUE2QkU7SUFDRSxrQkFBQTtFQTNCSjtFQThCRTtJQUNFLGVBQUE7RUE1Qko7RUErQkU7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUE3Qko7RUFnQ0U7SUFDRSxXQUFBO0VBOUJKO0FBQ0Y7QUFpQ0U7RUFDRTtJQUNFLDhCQUFBO0lBQ0EsOEJBQUE7SUFDQSxlQUFBO0VBL0JKO0VBa0NFO0lBQ0UsYUFBQTtFQWhDSjtFQW1DRTtJQUNFLG1CQUFBO0VBakNKO0FBQ0Y7QUFvQ0U7RUFDRTtJQUNFLHNCQUFBO0VBbENKO0VBcUNFO0lBQ0UsbUJBQUE7RUFuQ0o7RUFzQ0U7SUFDRSxzQkFBQTtFQXBDSjtFQXVDRTtJQUNFLGVBQUE7SUFDQSxtQkFBQTtFQXJDSjtFQXdDRTtJQUNFLHNCQUFBO0VBdENKO0VBeUNFO0lBQ0UsbUJBQUE7SUFDQSx1QkFBQTtFQXZDSjtFQTBDRTtJQUNFLGtCQUFBO0VBeENKO0VBMkNFO0lBQ0UsaUJBQUE7SUFDQSxjQUFBO0VBekNKO0VBNENFO0lBQ0Usc0JBQUE7RUExQ0o7RUE2Q0U7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0VBM0NKO0VBOENFO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtFQTVDSjtFQStDRTtJQUNFLGVBQUE7RUE3Q0o7RUFnREU7SUFDRSxhQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7RUE5Q0o7RUFpREU7SUFDRSxVQUFBO0VBL0NKO0FBQ0Y7QUFrREU7RUFDRTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQWhESjtFQW1ERTtJQUNFLGVBQUE7RUFqREo7RUFvREU7SUFDRSxlQUFBO0VBbERKO0VBcURFO0lBQ0UsV0FBQTtFQW5ESjtFQXNERTtJQUNFLGdCQUFBO0VBcERKO0FBQ0Y7QUF1REU7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0VBckRKO0FBQ0Y7QUF3REU7RUFDRTtJQUNFLGNBQUE7RUF0REo7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1yYXNpbi1ibGFjazogIzFkMWUyYztcXG4gIC0tZGFyay1nb2xkOiAjOTI3NTQzO1xcbiAgLS1saWdodC1nb2xkOiAjYzdhYjZlO1xcbn1cXG5cXG5AbWl4aW4gY29udGFpbmVyQmFja2dyb3VuZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwZTA7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbn1cXG5cXG5AbWl4aW4gc3ViSGVhZGluZ1N0eWxlIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDAuNGVtO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5AbWl4aW4gaWNvblNpemUge1xcbiAgaGVpZ2h0OiAzLjVyZW07XFxuICB3aWR0aDogMy41cmVtO1xcbn1cXG5cXG5AbWl4aW4gaWNvblRleHQge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuQG1peGluIGljb25Db250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXG59XFxuXFxuQG1peGluIHNtYWxsTWFyZ2luIHtcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcblxcbkBtaXhpbiBtb2RhbENvbnRlbnRDb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMDtcXG4gIG1heC13aWR0aDogNzUlO1xcbiAgbWluLWhlaWdodDogNDlyZW07XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgcGFkZGluZzogMnJlbSAwO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC40KTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmFybG93XFxcIiwgc2Fucy1zZXJpZjtcXG5cXG4gICNtYWluLWNvbnRhaW5lciB7XFxuICAgIEBpbmNsdWRlIG1vZGFsQ29udGVudENvbnRhaW5lcigpO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG5cXG4gICAgI21haW4ge1xcbiAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgICB9XFxuICB9XFxuXFxuICAubW9kYWwtaGVhZGVyIHtcXG4gICAgQGluY2x1ZGUgY29udGFpbmVyQmFja2dyb3VuZCgpO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwYmY7XFxuICB9XFxuXFxuICAubmF2aWdhdGlvbi1iYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmNsb3NlLW1vZGFsLWJ0bi13cmFwcGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAxLjJlbTtcXG4gIH1cXG5cXG4gIC5jbG9zZS1tb2RhbC1idG4ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGZvbnQtc2l6ZTogMS42ZW07XFxuICB9ICBcXG5cXG4gIC5jbG9zZS1tb2RhbC1idG46aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICB9XFxuXFxuICAubW9kYWwtbmF2LWxpbmtzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAubW9kYWwtbmF2LWxpbmsge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIEBpbmNsdWRlIHNtYWxsTWFyZ2luKCk7XFxuICB9XFxuXFxuICAubW9kYWwtbmF2LWxpbms6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1oZWFkaW5nIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLW5hbWUge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICB9XFxuXFxuICAuY2hhbXBpb24tdGl0bGUge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgQGluY2x1ZGUgc21hbGxNYXJnaW4oKTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1yb2xlcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXJvbGUge1xcbiAgICBAaW5jbHVkZSBpY29uQ29udGFpbmVyKCk7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tcmVzb3VyY2Uge1xcbiAgICBAaW5jbHVkZSBpY29uQ29udGFpbmVyKCk7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tcm9sZS1pbWFnZSB7XFxuICAgIEBpbmNsdWRlIGljb25TaXplKCk7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tcmVzb3VyY2UtaW1hZ2Uge1xcbiAgICBAaW5jbHVkZSBpY29uU2l6ZSgpO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXJvbGUtbmFtZSB7XFxuICAgIEBpbmNsdWRlIGljb25UZXh0KCk7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tcmVzb3VyY2UtbmFtZSB7XFxuICAgIEBpbmNsdWRlIGljb25UZXh0KCk7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tbWFpbi1pbmZvIHtcXG4gICAgcGFkZGluZzogMS44cmVtO1xcbiAgICBtYXgtd2lkdGg6IDM0cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxhc3QgYmFzZWxpbmU7XFxuICB9XFxuXFxuICBALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XFxuICAgIGZyb20ge1xcbiAgICAgIHRvcDogLTMwMHB4O1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xcbiAgICBmcm9tIHtcXG4gICAgICB0b3A6IC0zMDBweDtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLmxvcmUtY29udGFpbmVyIHtcXG4gICAgQGluY2x1ZGUgY29udGFpbmVyQmFja2dyb3VuZCgpO1xcbiAgfVxcblxcbiAgLnN1YmhlYWRpbmcge1xcbiAgICBAaW5jbHVkZSBzdWJIZWFkaW5nU3R5bGUoKTtcXG4gIH1cXG5cXG4gIC5hYmlsaXRpZXMtY29udGFpbmVyIHtcXG4gICAgQGluY2x1ZGUgY29udGFpbmVyQmFja2dyb3VuZCgpO1xcbiAgICB3aWR0aDogMjhlbTtcXG4gIH1cXG5cXG4gIC5hYmlsaXRpZXMtaGVhZGluZyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5hYmlsaXR5LWltZ3Mge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgfVxcblxcbiAgLmFiaWxpdHktZGVzY3JpcHRpb24ge1xcbiAgICBAaW5jbHVkZSBzbWFsbE1hcmdpbigpO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLWRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1leHRyYS1pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5hYmlsaXR5LWluZm8ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmFiaWxpdHktaW5mby5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLnNwZWxsLWltZyB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luOiAwIDAuNXJlbTtcXG4gICAgaGVpZ2h0OiAzLjNyZW07XFxuICAgIHdpZHRoOiAzLjNyZW07XFxuICB9XFxuXFxuICAuc3BlbGwtaW1nLmNsaWNrZWQge1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICAgIGJvcmRlci13aWR0aDogNHB4O1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXRpcHMtc2VjdGlvbiB7XFxuICAgIEBpbmNsdWRlIGNvbnRhaW5lckJhY2tncm91bmQoKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG4gICAgbWF4LXdpZHRoOiAzNHJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXRpcHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXRpcCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gIH1cXG5cXG4gICNzdGF0cy1jb250YWluZXIge1xcbiAgICBAaW5jbHVkZSBtb2RhbENvbnRlbnRDb250YWluZXIoKTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG5cXG4gICAgI3N0YXRzIHtcXG4gICAgICBjb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLmNoYW1waW9uLXN0YXRzLW92ZXJ2aWV3IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIEBpbmNsdWRlIHNtYWxsTWFyZ2luKCk7XFxuICAgIG1heC13aWR0aDogMjVyZW07XFxuICAgIG1pbi13aWR0aDogMjByZW07XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gIH1cXG5cXG4gIC53aW4tcmF0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAucGljay1yYXRlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5sYW5lLWluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLnBpY2stcmF0ZS12YWx1ZSB7XFxuICAgIG1hcmdpbi10b3A6IDAuNGVtO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICB9XFxuXFxuICAud2luLXJhdGUtdmFsdWUge1xcbiAgICBtYXJnaW4tdG9wOiAwLjRlbTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgfVxcblxcbiAgLmxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLWRhbWFnZS1jb250YWluZXIge1xcbiAgICBAaW5jbHVkZSBjb250YWluZXJCYWNrZ3JvdW5kKCk7XFxuICAgIG1heC1oZWlnaHQ6IDE3LjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgfVxcblxcbiAgLmRhbWFnZS1oZWFkaW5nIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmNpcmN1bGFyLWNoYXJ0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWF4LWhlaWdodDogMTRlbTtcXG4gIH1cXG5cXG4gIC5jaXJjbGUge1xcbiAgICBmaWxsOiBub25lO1xcbiAgICBzdHJva2Utd2lkdGg6IDIuMjtcXG4gICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xcbiAgICBhbmltYXRpb246IHByb2dyZXNzIDFzIGVhc2Utb3V0IGZvcndhcmRzO1xcbiAgfVxcblxcbiAgI21hZ2ljLWRhbWFnZS1zdHJva2Uge1xcbiAgICBzdHJva2U6ICMzNWE3ZmY7XFxuICB9XFxuXFxuICAjcGh5c2ljYWwtZGFtYWdlLXN0cm9rZSB7XFxuICAgIHN0cm9rZTogI2ZmNTk2NDtcXG4gIH1cXG5cXG4gICN0cnVlLWRhbWFnZS1zdHJva2Uge1xcbiAgICBzdHJva2U6ICNmZmU3NGM7XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIHByb2dyZXNzIHtcXG4gICAgMCUge1xcbiAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDAgMTAwO1xcbiAgICB9XFxuICB9XFxuXFxuICAudG90YWwtZGFtYWdlLXRleHQge1xcbiAgICBmb250LXNpemU6IDRweDtcXG4gICAgdGV4dC1hbmNob3I6IG1pZGRsZTtcXG4gICAgZmlsbDogd2hpdGU7XFxuICB9XFxuXFxuICAudG90YWwtZGFtYWdlLWxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAzcHg7XFxuICAgIHRleHQtYW5jaG9yOiBtaWRkbGU7XFxuICAgIGZpbGw6IHZhcigtLWRhcmstZ29sZCk7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tbWFpbi1zdGF0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLWl0ZW0tYnVpbGRzIHtcXG4gICAgQGluY2x1ZGUgY29udGFpbmVyQmFja2dyb3VuZCgpO1xcbiAgICBtYXgtaGVpZ2h0OiAxNy41cmVtO1xcbiAgfVxcblxcbiAgLmRhbWFnZS1zdGF0cy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5kYW1hZ2UtaW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1heC1oZWlnaHQ6IDkyJTtcXG4gICAgaGVpZ2h0OiA5MiU7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgfVxcblxcbiAgLmRhbWFnZS10eXBlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgfVxcblxcbiAgLmRhbWFnZS1zdGF0cyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB9XFxuXFxuICAjcGh5c2ljYWwtZGFtYWdlLWxhYmVsIHtcXG4gICAgY29sb3I6ICNmZjU5NjQ7XFxuICB9XFxuXFxuICAjbWFnaWMtZGFtYWdlLWxhYmVsIHtcXG4gICAgY29sb3I6ICMzNWE3ZmY7XFxuICB9XFxuXFxuICAjdHJ1ZS1kYW1hZ2UtbGFiZWwge1xcbiAgICBjb2xvcjogI2ZmZTc0YztcXG4gIH1cXG5cXG4gIC5pdGVtLWRldGFpbHMtY29udGFpbmVyIHtcXG4gICAgQGluY2x1ZGUgY29udGFpbmVyQmFja2dyb3VuZCgpO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgcmlnaHQ6IDEwZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDMuNWVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuaXRlbS1uYW1lIHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgfVxcblxcbiAgLm1haW4taXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gIH1cXG5cXG4gIC5jb3N0LWxhYmVsIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICB9XFxuXFxuICAuY29tcG9uZW50LWl0ZW1zLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxuXFxuICAuY29tcG9uZW50LWl0ZW0tbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gIH1cXG5cXG4gIC5jb3N0LWFtb3VudCB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gIH1cXG5cXG4gIC5jb21wb25lbnQtaXRlbS1jb3N0LWxhYmVsIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICB9XFxuXFxuICAuY29tcG9uZW50LWl0ZW0tYW1vdW50IHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgfVxcblxcbiAgLmNvbXBvbmVudC1pdGVtLWRldGFpbHMtY29udGFpbmVyIHtcXG4gICAgQGluY2x1ZGUgY29udGFpbmVyQmFja2dyb3VuZCgpO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5pdGVtLXNldHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1heC1oZWlnaHQ6IDkwJTtcXG4gIH1cXG5cXG4gIC5pdGVtLXNldC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcbiAgICBwYWRkaW5nOiAwLjRlbTtcXG4gIH1cXG5cXG4gIC5tYWluLWNvbXBvbmVudC1jb250YWluZXIge1xcbiAgICBAaW5jbHVkZSBjb250YWluZXJCYWNrZ3JvdW5kKCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjA0MDA4MztcXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogMGVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgfVxcblxcbiAgLml0ZW0taW1nIHtcXG4gICAgbWF4LXdpZHRoOiAyLjdlbTtcXG4gICAgbWF4LWhlaWdodDogMi43ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gICAgLy9wYWRkaW5nOiAxZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xcbiAgfVxcblxcbiAgLmNvbXBvbmVudC1pdGVtLWltZyB7XFxuICAgIG1heC13aWR0aDogMS44ZW07XFxuICAgIG1heC1oZWlnaHQ6IDEuOGVtO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLW1hdGNodXBzIHtcXG4gICAgQGluY2x1ZGUgY29udGFpbmVyQmFja2dyb3VuZCgpO1xcbiAgICBtYXgtaGVpZ2h0OiAyNS4ycmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMCAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIH1cXG5cXG4gIC5tYXRjaHVwcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBtYXgtd2lkdGg6IDI0cmVtO1xcbiAgfVxcblxcbiAgLm1hdGNodXAtaW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzE2MWE7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBtYXJnaW46IGF1dG8gMC41ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIH1cXG5cXG4gIC5tYXRjaHVwLWluZm86aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNjFhYzk7XFxuICB9XFxuXFxuICAubWF0Y2h1cC1zdGF0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgXFxcIkFwcGxlIFNEIEdvdGhpYyBOZW9cXFwiLCBBcHBsZUdvdGhpYyxcXG4gICAgICBEb3R1bSwgQXJpYWwsIFRhaG9tYTtcXG4gIH1cXG5cXG4gIC5lbmVteS1jaGFtcGlvbi1pbWcge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG1heC1oZWlnaHQ6IDNlbTtcXG4gICAgbWF4LXdpZHRoOiAzZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbiAgfVxcblxcbiAgLndpbnJhdGUtYWdhaW5zdC1wZXJjZW50YWdlLmJsdWUge1xcbiAgICBjb2xvcjogIzM1YTdmZjtcXG4gIH1cXG5cXG4gIC53aW5yYXRlLWFnYWluc3QtcGVyY2VudGFnZS5yZWQge1xcbiAgICBjb2xvcjogI2ZmNTk2NDtcXG4gIH1cXG5cXG4gICNza2lucy1jb250YWluZXIge1xcbiAgICBAaW5jbHVkZSBtb2RhbENvbnRlbnRDb250YWluZXIoKTtcXG4gICAgZGlzcGxheTpub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1pbi1oZWlnaHQ6IDA7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDk5JTtcXG4gICAgd2lkdGg6IDk5JTtcXG5cXG4gICAgLm5hdmlnYXRpb24tYmFyIHtcXG4gICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggdmFyKC0tZGFyay1nb2xkKTtcXG4gICAgfVxcblxcbiAgICAjc2tpbnMge1xcbiAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpXFxuICAgIH1cXG4gIH1cXG5cXG4gICNza2lucy1jb250YWluZXIgLm1vZGFsLWhlYWRlciB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICB9XFxuXFxuICAuc2tpbi1pbWFnZS1jb250YWluZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAuc2tpbi1pbWFnZS1jb250YWluZXIuc2hvd24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG4gIC5za2luLWltYWdlIHtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5za2luLW5hbWUge1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gIH1cXG5cXG4gICNza2lucy1jb250YWluZXIgLmNoYW1waW9uLWhlYWRpbmcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5pbWctc2Nyb2xsLWFycm93IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgfVxcblxcbiAgLmltZy1zY3JvbGwtYXJyb3c6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIH1cXG5cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMTIwcHgpIHtcXG4gICAgLmNvbXBvbmVudC1pdGVtLWltZyB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAuaXRlbS1zZXRzLWNvbnRhaW5lciB7XFxuICAgICAgbWluLWhlaWdodDogODAlO1xcbiAgICB9XFxuXFxuICAgIC5pdGVtLWRldGFpbHMtY29udGFpbmVyIHtcXG4gICAgICBtaW4td2lkdGg6IDcwJTtcXG4gICAgICByaWdodDogLTZlbTtcXG4gICAgfVxcbiAgfVxcblxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyNTBweCkge1xcbiAgICAuaXRlbS1pbWcge1xcbiAgICAgIG1heC1oZWlnaHQ6IDIuMnJlbTtcXG4gICAgICBtYXgtd2lkdGg6IDIuMnJlbTtcXG4gICAgfVxcblxcbiAgICAuY2hhbXBpb24tZGV0YWlscyB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgICB9XFxuXFxuICAgIC5hYmlsaXRpZXMtY29udGFpbmVyIHtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgd2lkdGg6IGF1dG87XFxuICAgICAgbWF4LXdpZHRoOiAzMXJlbTtcXG4gICAgfVxcblxcbiAgICAubG9yZS1jb250YWluZXIge1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAjbWFpbi1jb250YWluZXIge1xcbiAgICAgIGhlaWdodDogNzZyZW07XFxuICAgIH1cXG5cXG4gICAgLml0ZW0tZGV0YWlscy1jb250YWluZXIge1xcbiAgICAgIG1pbi13aWR0aDogNzAlO1xcbiAgICAgIHJpZ2h0OiAtNmVtO1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gICAgLml0ZW0tc2V0cy1jb250YWluZXIge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIH1cXG5cXG4gICAgLml0ZW0tc2V0LWNvbnRhaW5lciB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAubWF0Y2h1cHMge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgLmNoYW1waW9uLW1hdGNodXBzIHtcXG4gICAgICBtYXgtaGVpZ2h0OiAyOC4ycmVtO1xcbiAgICB9XFxuXFxuICAgIC5tYXRjaHVwLWluZm8ge1xcbiAgICAgIG1hcmdpbjogMC4yZW0gYXV0bztcXG4gICAgfVxcblxcbiAgICAjbWFpbi1jb250YWluZXIge1xcbiAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAjc3RhdHMtY29udGFpbmVyIHtcXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgICAgbWluLWhlaWdodDogNjNyZW07XFxuICAgIH1cXG5cXG4gICAgLml0ZW0tZGV0YWlscy1jb250YWluZXIge1xcbiAgICAgIHJpZ2h0OiAtMWVtO1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgKG1heC13aWR0aDogODQwcHgpIHtcXG4gICAgLmRhbWFnZS1pbmZvIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgfVxcblxcbiAgICAuZ2FtZXMtcGxheWVkLWFnYWluc3Qge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLmRhbWFnZS1zdGF0cy1jb250YWluZXIge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NjBweCkge1xcbiAgICAuY2hhbXBpb24tbWFpbi1zdGF0cyB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAuaXRlbS1zZXQtY29udGFpbmVyIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICB9XFxuXFxuICAgIC5pdGVtLXNldHMtY29udGFpbmVyIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5jaGFtcGlvbi1kYW1hZ2UtY29udGFpbmVyIHtcXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAuZGFtYWdlLXN0YXRzLWluZm8ge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgLmRhbWFnZS1pbmZvIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICB9XFxuXFxuICAgIC5kYW1hZ2UtdHlwZS1jb250YWluZXIge1xcbiAgICAgIG1hcmdpbjogMC4yZW0gYXV0bztcXG4gICAgfVxcblxcbiAgICAuY2lyY3VsYXItY2hhcnQge1xcbiAgICAgIG1heC1oZWlnaHQ6IDE5NXB4O1xcbiAgICAgIG1heC13aWR0aDogODAlO1xcbiAgICB9XFxuXFxuICAgIC5kYW1hZ2Utc3RhdHMtY29udGFpbmVyIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5jaGFtcGlvbi1yb2xlIHtcXG4gICAgICBtYXJnaW4tbGVmdDogMC41ZW07XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcXG4gICAgfVxcblxcbiAgICAuY2hhbXBpb24tcmVzb3VyY2Uge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xcbiAgICB9XFxuXFxuICAgIC5jaGFtcGlvbi1yb2xlcyB7XFxuICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB9XFxuXFxuICAgIC5zcGVsbC1pbWcge1xcbiAgICAgIGhlaWdodDogMi44ZW07XFxuICAgICAgd2lkdGg6IDIuOGVtO1xcbiAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgfVxcblxcbiAgICAuaXRlbS1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgICAgcmlnaHQ6IDJlbTtcXG4gICAgfVxcbiAgfVxcblxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQxNHB4KSB7XFxuICAgIC5jaGFtcGlvbi1zdGF0cy1vdmVydmlldyB7XFxuICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgIG1pbi13aWR0aDogMTdyZW07XFxuICAgIH1cXG5cXG4gICAgLmNoYW1waW9uLW5hbWUge1xcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgfVxcblxcbiAgICAubW9kYWwtbmF2LWxpbmtzIHtcXG4gICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIH1cXG5cXG4gICAgLmNsb3NlLW1vZGFsLWJ0bi13cmFwcGVyIHtcXG4gICAgICBsZWZ0OiAwLjdlbTtcXG4gICAgfVxcblxcbiAgICAuY2xvc2UtbW9kYWwtYnRuIHtcXG4gICAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgKG1pbi13aWR0aDogMTMwMHB4KSB7XFxuICAgICNza2lucy1jb250YWluZXIge1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICBtYXgtd2lkdGg6IDcwJTtcXG4gICAgICBtaW4taGVpZ2h0OiBhdXRvO1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgKG1pbi13aWR0aDogMTk1MHB4KSB7XFxuICAgICNza2lucy1jb250YWluZXIge1xcbiAgICAgIG1heC13aWR0aDogNTAlO1xcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBkZWZpbmUoSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIGRlZmluZShHcCwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gIGRlZmluZShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvbik7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgZGVmaW5lKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlLCBhc3luY0l0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIGRlZmluZShHcCwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcblxuICBkZWZpbmUoR3AsIFwidG9TdHJpbmdcIiwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIGluIG1vZGVybiBlbmdpbmVzXG4gIC8vIHdlIGNhbiBleHBsaWNpdGx5IGFjY2VzcyBnbG9iYWxUaGlzLiBJbiBvbGRlciBlbmdpbmVzIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gXCJvYmplY3RcIikge1xuICAgIGdsb2JhbFRoaXMucmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbiAgfSBlbHNlIHtcbiAgICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xuICB9XG59XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zyb250cGFnZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZnJvbnRwYWdlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFscy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9kYWxzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwidmFyIG1hcCA9IHtcblx0XCIuL0Fzc2Fzc2luLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvQXNzYXNzaW4ucG5nXCIsXG5cdFwiLi9CbG9vZCBXZWxsLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvQmxvb2QgV2VsbC5wbmdcIixcblx0XCIuL0JvdHRvbS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0JvdHRvbS5wbmdcIixcblx0XCIuL0NvbnRyb2xsZXIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9Db250cm9sbGVyLnBuZ1wiLFxuXHRcIi4vQ291cmFnZS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0NvdXJhZ2UucG5nXCIsXG5cdFwiLi9Dcmltc29uIFJ1c2gucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9Dcmltc29uIFJ1c2gucG5nXCIsXG5cdFwiLi9FbmVyZ3kucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9FbmVyZ3kucG5nXCIsXG5cdFwiLi9GaWdodGVyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvRmlnaHRlci5wbmdcIixcblx0XCIuL0Zsb3cucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9GbG93LnBuZ1wiLFxuXHRcIi4vRnVyeS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0Z1cnkucG5nXCIsXG5cdFwiLi9Hcml0LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvR3JpdC5wbmdcIixcblx0XCIuL0hlYXQucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9IZWF0LnBuZ1wiLFxuXHRcIi4vSnVuZ2xlLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvSnVuZ2xlLnBuZ1wiLFxuXHRcIi4vTWFnZS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL01hZ2UucG5nXCIsXG5cdFwiLi9NYW5hLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvTWFuYS5wbmdcIixcblx0XCIuL01hbmFsZXNzLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvTWFuYWxlc3MucG5nXCIsXG5cdFwiLi9NYXJrc21hbi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL01hcmtzbWFuLnBuZ1wiLFxuXHRcIi4vTWVsZWUucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9NZWxlZS5wbmdcIixcblx0XCIuL01pZGRsZS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL01pZGRsZS5wbmdcIixcblx0XCIuL1JhZ2UucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9SYWdlLnBuZ1wiLFxuXHRcIi4vUmFuZ2VkLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvUmFuZ2VkLnBuZ1wiLFxuXHRcIi4vU3BlY2lhbGlzdC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL1NwZWNpYWxpc3QucG5nXCIsXG5cdFwiLi9TdXBwb3J0LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvU3VwcG9ydC5wbmdcIixcblx0XCIuL1RhbmsucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9UYW5rLnBuZ1wiLFxuXHRcIi4vVG9wLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvVG9wLnBuZ1wiLFxuXHRcIi4vVXRpbGl0eS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL1V0aWxpdHkucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMgc3luYyBcXFxcLihwbmd8anBlP2d8c3ZnKSRcIjsiLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9zdHlsZXNoZWV0cy9mcm9udHBhZ2Uuc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGVzaGVldHMvbW9kYWxzLnNjc3MnO1xuaW1wb3J0IEVsZW1lbnRDcmVhdGlvbiBmcm9tICcuL2hlbHBlcnMvZWxlbWVudENyZWF0aW9uJztcbmltcG9ydCB7IGdldEFsbENoYW1waW9uRGV0YWlscyB9IGZyb20gJy4vY2hhbXBpb25EYXRhL2dldEFsbENoYW1waW9ucyc7XG5pbXBvcnQgU2VhcmNoYmFyQ29udHJvbGxlciBmcm9tICcuL2FwcENvbnRyb2wvc2VhcmNoYmFyQ29udHJvbGxlcic7XG5pbXBvcnQgYmFja2Ryb3BDaGFuZ2UgZnJvbSAnLi9hcHBDb250cm9sL2JhY2tkcm9wQ2hhbmdlSW50ZXJ2YWwnO1xuXG5jb25zdCBjcmVhdGVTZWFyY2hEcm9wZG93biA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgYWxsQ2hhbXBpb25zID0gYXdhaXQgZ2V0QWxsQ2hhbXBpb25EZXRhaWxzKCk7XG4gIGNvbnN0IGFsbENoYW1waW9uc0FycmF5ID0gT2JqZWN0LnZhbHVlcyhhbGxDaGFtcGlvbnMpO1xuXG4gIGNvbnN0IHNlYXJjaENvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VhcmNoLWNvbnRhaW5lcicpO1xuICBzZWFyY2hDb250YWluZXJzLmZvckVhY2goKHNlYXJjaENvbnRhaW5lcikgPT4ge1xuICAgIGNvbnN0IGF1dG9Db21wbGV0ZU5hbWVzID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcyhcbiAgICAgICdkaXYnLCAnYXV0by1jb21wbGV0ZS1uYW1lcycsIHNlYXJjaENvbnRhaW5lcixcbiAgICApO1xuICAgIGFsbENoYW1waW9uc0FycmF5LmZvckVhY2goKGNoYW1waW9uKSA9PiB7XG4gICAgICBjb25zdCBjaGFtcGlvbk5hbWUgPSBjaGFtcGlvbi5uYW1lO1xuICAgICAgY29uc3QgY2hhbXBpb25JZCA9IGNoYW1waW9uLmlkO1xuICAgICAgY29uc3QgYXV0b0NvbXBsZXRlTmFtZVdyYXBwZXIgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKFxuICAgICAgICAnZGl2JywgJ2F1dG8tY29tcGxldGUtbmFtZS13cmFwcGVyJywgYXV0b0NvbXBsZXRlTmFtZXMsXG4gICAgICApO1xuICAgICAgYXV0b0NvbXBsZXRlTmFtZVdyYXBwZXIudGFiSW5kZXggPSAnLTEnO1xuICAgICAgY29uc3QgYXV0b0NvbXBsZXRlTmFtZSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAgICdzcGFuJywgJ2F1dG8tY29tcGxldGUtbmFtZScsIGF1dG9Db21wbGV0ZU5hbWVXcmFwcGVyLFxuICAgICAgKTtcbiAgICAgIGF1dG9Db21wbGV0ZU5hbWUudGV4dENvbnRlbnQgPSBjaGFtcGlvbk5hbWU7XG4gICAgICBhdXRvQ29tcGxldGVOYW1lLmRhdGFzZXQuY2hhbXBpb25JZCA9IGNoYW1waW9uSWQ7XG4gICAgICBhdXRvQ29tcGxldGVOYW1lLmlkID0gY2hhbXBpb25OYW1lO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGRpc3BsYXlOdW1iZXJPZk1hdGNoZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGRldlVybCA9ICdodHRwOi8vMTI3LjAuMC4xOjU1MDAvZnJvbnRlbmQvZGlzdC8nO1xuICBjb25zdCBkZXZVcmwyID0gJ2h0dHA6Ly8xMjcuMC4wLjE6NTUwMC9mcm9udGVuZC9kaXN0L2luZGV4Lmh0bWwnO1xuICBjb25zdCByZXNwb25zZSA9ICh3aW5kb3cubG9jYXRpb24uaHJlZiA9PT0gZGV2VXJsIHx8IGRldlVybDIpXG4gICAgPyBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL21hdGNoZXMnLCB7IG1vZGU6ICdjb3JzJyB9KVxuICAgIDogYXdhaXQgZmV0Y2goJ21hdGNoZXMnLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgY29uc3QgbWF0Y2hDb3VudCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgY29uc3QgYXBwTmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcHAtbmFtZS1kaXNwbGF5LWNvbnRhaW5lcicpO1xuICBjb25zdCB0YWdsaW5lQ29udGFpbmVyID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ3RhZ2xpbmUtY29udGFpbmVyJywgYXBwTmFtZUNvbnRhaW5lcik7XG4gIGNvbnN0IHRhZ2xpbmVTdGFydCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAndGFnbGluZS1zdGFydCcsIHRhZ2xpbmVDb250YWluZXIpO1xuICB0YWdsaW5lU3RhcnQudGV4dENvbnRlbnQgPSAnUHJvdmlkaW5nIGluZm8gYW5kIHN0YXRzIGZyb20gJztcbiAgY29uc3QgdGFnbGluZU1hdGNoQ291bnQgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ3RhZ2xpbmUtbWF0Y2gtY291bnQnLCB0YWdsaW5lQ29udGFpbmVyKTtcbiAgdGFnbGluZU1hdGNoQ291bnQudGV4dENvbnRlbnQgPSBgJHtNYXRoLmZsb29yKG1hdGNoQ291bnQpfWA7XG4gIGNvbnN0IHRhZ2xpbmVFbmQgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ3RhZ2xpbmUtZW5kJywgdGFnbGluZUNvbnRhaW5lcik7XG4gIHRhZ2xpbmVFbmQudGV4dENvbnRlbnQgPSAnIExlYWd1ZSBvZiBMZWdlbmRzIG1hdGNoZXMnO1xufTtcblxuY29uc3QgcmVuZGVyUGFnZSA9IGFzeW5jICgpID0+IHtcbiAgYXdhaXQgZGlzcGxheU51bWJlck9mTWF0Y2hlcygpO1xuICBhd2FpdCBjcmVhdGVTZWFyY2hEcm9wZG93bigpO1xuICBTZWFyY2hiYXJDb250cm9sbGVyLnNlYXJjaENvbnRhaW5lckxpc3RlbmVycygpO1xufTtcblxucmVuZGVyUGFnZSgpO1xuYmFja2Ryb3BDaGFuZ2UoKTtcbiJdLCJuYW1lcyI6WyJpbmRleCIsInNldEludGVydmFsIiwiYmFja2Ryb3BzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY3VycmVudEJhY2tkcm9wIiwicXVlcnlTZWxlY3RvciIsImxlbmd0aCIsImNsYXNzTmFtZSIsIkNoYW1waW9uTW9kYWxDb250cm9sbGVyIiwidG9nZ2xlQWN0aXZlQWJpbGl0eSIsImNsaWNrZWRBYmlsaXR5SWQiLCJhYmlsaXR5SW1hZ2VzIiwiYWJpbGl0eUluZm9zIiwiZm9yRWFjaCIsImltZyIsImNsYXNzTGlzdCIsInJlbW92ZSIsImluZm8iLCJjbGlja2VkSW1hZ2UiLCJhY3RpdmVBYmlsaXR5IiwiY2hhbmdlTW9kYWxUZW1wbGF0ZSIsImNsaWNrZWRNb2RhbE5hdkxpbmsiLCJ0ZW1wbGF0ZXMiLCJ0ZW1wbGF0ZSIsInRlbXBsYXRlTmFtZSIsImlkIiwic3Vic3RyaW5nIiwiaW5kZXhPZiIsImNob3NlblRlbXBsYXRlIiwic3R5bGUiLCJkaXNwbGF5IiwiaGlkZGVuVGVtcGxhdGUiLCJkaXNwYXlJdGVtRGV0YWlscyIsImhvdmVyZWRJdGVtSW1hZ2UiLCJpdGVtRGV0YWlscyIsIm5leHRFbGVtZW50U2libGluZyIsImhpZGVJdGVtRGV0YWlscyIsInVuaG92ZXJlZEl0ZW1JbWFnZSIsInRvZ2dsZVNraW5JbWFnZXMiLCJhcnJvd0NsYXNzTGlzdCIsInNraW5JbWFnZXNDb250YWluZXIiLCJjdXJyZW50U2hvd25JbWFnZSIsInNraW5OYW1lIiwiZmlyc3RJbWFnZSIsImZpcnN0RWxlbWVudENoaWxkIiwibGFzdEltYWdlIiwibGFzdEVsZW1lbnRDaGlsZCIsImluY2x1ZGVzIiwidGV4dENvbnRlbnQiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwiY2xlYXJNYWluTW9kYWwiLCJtYWluQ29udGFpbmVyIiwiY2hhbXBpb25OYW1lIiwiY2hhbXBpb25UaXRsZSIsImNoYW1waW9uUm9sZXMiLCJjaGFtcGlvbkxvcmUiLCJhYmlsaXR5RGV0YWlscyIsImNoYW1waW9uVGlwcyIsIm1haW5Nb2RhbEhlYWRlciIsImVsZW1lbnQiLCJjdXJyZW50RWxlbWVudCIsImNsZWFyU3RhdHNNb2RhbCIsInN0YXRzQ29udGFpbmVyIiwiY2hhbXBpb25TdGF0c092ZXJ2aWV3IiwiYWxsZGFtYWdlU3RhdHMiLCJpdGVtU2V0c0NvbnRhaW5lciIsImJlc3RNYXRjaHVwcyIsIndvcnN0TWF0Y2h1cHMiLCJzdGF0c01vZGFsSGVhZGVyIiwiZGFtYWdlU3RhdCIsImRhbWFnZVN0YXRFbGVtZW50Iiwic3RhdHNNb2RhbENvbnRlbnQiLCJjb250ZW50IiwiY29udGVudEVsZW1lbnQiLCJjbGVhclNraW5zTW9kYWwiLCJjbG9zZUNoYW1waW9uTW9kYWwiLCJtb2RhbCIsInNraW5zQ29udGFpbmVyIiwibW9kYWxDbGlja0V2ZW50cyIsImV2ZW50IiwidGFyZ2V0IiwiZGFzaEluZGV4IiwiYWJpbGl0eUlkIiwic2xpY2UiLCJBcnJheSIsImZyb20iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibW9kYWxNb3VzZW92ZXJFdmVudHMiLCJtb2RhbE1vdXNlb3V0RXZlbnRzIiwicmVsYXRlZFRhcmdldCIsInBhcmVudE5vZGUiLCJtb2RhbEFycm93RXZlbnRzIiwia2V5IiwicmlnaHRBcnJvdyIsImxlZnRBcnJvdyIsIm1vZGFsQ2hhbmdlTGlzdGVuZXJzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImdldENoYW1waW9uRGV0YWlscyIsImdldENoYW1waW9uU3RhdHMiLCJjaGFtcGlvbkRldGFpbHNNb2RhbCIsImNoYW1waW9uU3RhdHNNb2RhbCIsImNoYW1waW9uU2tpbnNNb2RhbCIsIkNoYW1waW9uRmlsdGVyIiwiU29ydENoYW1waW9ucyIsImdldEFsbENoYW1waW9uRGV0YWlscyIsImdldEFsbENoYW1waW9uU3RhdHMiLCJnZXRMYXRlc3RWZXJzaW9uIiwiQ2hhbXBpb25zUGFnZUNvbnRyb2xsZXIiLCJkaXNwbGF5RHJvcGRvd25PcHRpb25zIiwiZHJvcGRvd25PcHRpb25zIiwiYWxsRHJvcGRvd25PcHRpb25zIiwib3B0aW9ucyIsIm9wdGlvbnNTdHlsZSIsImRyb3Bkb3duT3B0aW9uc1N0eWxlIiwiaGlkZURyb3Bkb3duT3B0aW9ucyIsImRyb3Bkb3duT3B0aW9uc1RvZ2dsZSIsImRyb3Bkb3duQnRuIiwicGFyZW50RWxlbWVudCIsImRpc3BsYXlDaGFtcGlvbk1vZGFsIiwiY2hhbXBpb25JZCIsImxhdGVzdFZlcnNpb24iLCJjaGFtcGlvbkRldGFpbHMiLCJjaGFtcGlvblN0YXRzIiwic2VsZWN0TGFuZUZpbHRlck9wdGlvbiIsImNsaWNrZWRMYW5lT3B0aW9uIiwiY2hhbXBpb25zU2VjdGlvbiIsImFjdGl2ZUxhbmVPcHRpb24iLCJ2aXNpYmlsaXR5IiwiYWRkIiwiY2hlY2tMYW5lRmlsdGVyT3B0aW9uIiwiYWxsQ2hhbXBpb25TdGF0cyIsImxhbmVOYW1lIiwiZmlsdGVyQnlMYW5lIiwiY2hlY2tTb3J0aW5nT3B0aW9uIiwiYWN0aXZlU29ydGluZ09wdGlvbiIsInNvcnRCeURlZmF1bHRPcmRlciIsInNvcnRDaGFtcGlvbnNCeVdpbnJhdGUiLCJzb3J0Q2hhbXBpb25zQnlQaWNrcmF0ZSIsInNvcnRDaGFtcGlvbnNCeURhbWFnZURvbmUiLCJjaGVja0FjdGl2ZVJvbGVPcHRpb25zIiwiYWxsQ2hhbXBpb25EZXRhaWxzIiwiYWN0aXZlUm9sZU9wdGlvbnMiLCJhY3RpdmVSb2xlcyIsIm1hcCIsImFjdGl2ZVJvbGVPcHRpb24iLCJhY3RpdmVSb2xlIiwiZmlsdGVyQnlSb2xlIiwiY2hlY2tBY3RpdmVEaWZmaWN1bHR5T3B0aW9ucyIsImFjdGl2ZURpZmZpY3VsdHlPcHRpb25zIiwiYWN0aXZlRGlmZmljdWx0aWVzIiwiYWN0aXZlRGlmZmljdWx0eU9wdGlvbiIsImFjdGl2ZURpZmZpY3VsdHkiLCJmaWx0ZXJCeURpZmZpY3VsdHkiLCJzZWxlY3RNdWx0aURyb3Bkb3duT3B0aW9uIiwiZHJvcGRvd25PcHRpb24iLCJkZXNlbGVjdERyb3Bkb3duT3B0aW9uIiwidG9nZ2xlRHJvcGRvd25PcHRpb24iLCJzZWxlY3RTaW5nbGVEcm9wZG93bk9wdGlvbiIsImFjdGl2ZURyb3Bkb3duT3B0aW9uIiwicmVkaXJlY3RUb0Zyb250UGFnZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImNoYW1waW9uc1BhZ2VDbGlja0V2ZW50cyIsImNoZWNrT3B0aW9ucyIsImhpZGVDaGFtcGlvbnNTZWN0aW9uIiwic2hvd0NoYW1waW9uc1NlY3Rpb24iLCJyZW1vdmVDaGFtcGlvbnNQYWdlTGlzdGVuZXIiLCJjaGFtcGlvbnNQYWdlIiwiYWRkQ2hhbXBpb25zUGFnZUxpc3RlbmVyIiwic2hvd0xvYWRlciIsImxvYWRlciIsImhpZGVMb2FkZXIiLCJmaWx0ZXJBbmRTb3J0Q2hhbXBpb25zU2VjdGlvbiIsIndhaXRUaW1lIiwic2V0VGltZW91dCIsImRhdGFzZXQiLCJjaGFtcGlvbnNQYWdlS2V5RXZlbnRzIiwiYWN0aXZlRWxlbWVudCIsImNoYW1waW9uc1BhZ2VMaXN0ZW5lcnMiLCJjcmVhdGVDaGFtcGlvbkNvbnRhaW5lciIsInJlbmRlckFsbENoYW1waW9ucyIsImNoYW1waW9uIiwiY2xlYXJDaGFtcGlvbnNTZWN0aW9uIiwic2hvd0NoYW1waW9uIiwiaGlkZUNoYW1waW9uIiwiY2xpY2tlZExhbmUiLCJhbGxDaGFtcGlvbnMiLCJyZXN1bHRzIiwicHVzaCIsIlByb21pc2UiLCJhbGwiLCJjaGFtcGlvbkxhbmUiLCJsYW5lIiwiY2hhbXBpb25FbGVtZW50IiwidG9Mb3dlckNhc2UiLCJjaGFtcGlvbkVsZW1lbnRzIiwicm9sZU1hdGNoRm91bmQiLCJyb2xlIiwidGFncyIsImNoYW1waW9uUm9sZSIsImNhdGVnb3Jpc2VEaWZmaWN1bHR5TnVtIiwiZGlmZmljdWx0eU51bSIsImRpZmZpY3VsdHlNYXRjaEZvdW5kIiwiZGlmZmljdWx0eSIsImNoYW1waW9uRGlmZmljdWx0eU51bSIsImNoYW1waW9uRGlmZmljdWx0eSIsIlNlYXJjaGJhckNvbnRyb2xsZXIiLCJzaG93QXV0b0NvbXBsZXRlTmFtZXMiLCJzZWFyY2hDb250YWluZXIiLCJhdXRvQ29tcGxldGVOYW1lcyIsImhpZGVBdXRvQ29tcGxldGVOYW1lcyIsImF1dG9Db21wbGV0ZU5hbWVFbGVtZW50cyIsImF1dG9Db21wbGV0ZU5hbWVFbGVtZW50Iiwic2VhcmNoYmFyRm9jdXNJbkV2ZW50IiwiZm9jdXMiLCJzZWFyY2hiYXJGb2N1c291dEV2ZW50Iiwic2VhcmNoQmFySW5wdXRFdmVudCIsImlucHV0VmFsdWUiLCJ2YWx1ZSIsImF1dG9Db21wbGV0ZU5hbWUiLCJuYW1lIiwic2VhcmNoYmFyS2V5ZG93bkV2ZW50cyIsInByZXZlbnREZWZhdWx0IiwiYWN0aW9uIiwiQXJyb3dVcCIsIkFycm93RG93biIsImZpbHRlciIsImlzU2hvd2luZyIsInVuZGVmaW5lZCIsImdvVG9TdGFydCIsImNoaWxkcmVuIiwic2VhcmNoQ29udGFpbmVyQ2xhc3NOYW1lIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInNlYXJjaGJhckNsaWNrRXZlbnRzIiwiY2xpY2tBdXRvQ29tcGxldGVOYW1lIiwiZmlyc3RDaGlsZCIsInNlYXJjaENvbnRhaW5lckxpc3RlbmVycyIsInZpc2libGl0eSIsInJlY3JlYXRlQ2hhbXBpb25zU2VjdGlvbiIsImNoYW1waW9ucyIsImZpbHRlckNoYW1waW9ucyIsImZpbHRlcmVkQ2hhbXBpb25TdGF0cyIsImZpbHRlcmVkQ2hhbXBpb25zU29ydGVkIiwic29ydCIsImEiLCJiIiwid2luUmF0ZSIsInBpY2tSYXRlIiwiZGFtYWdlUGVyTWF0Y2giLCJ0b3RhbERhbWFnZSIsImZldGNoQ2hhbXBpb25EZXRhaWxzIiwiZmV0Y2giLCJtb2RlIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImdldENoYW1waW9uUGFzc2l2ZXMiLCJwYXNzaXZlRGF0YSIsInBhc3NpdmUiLCJwYXNzaXZlTmFtZSIsInBhc3NpdmVEZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uIiwicGFzc2l2ZUlkIiwiaW1hZ2UiLCJmdWxsIiwicGFzc2l2ZUltZ1VybCIsImdldENoYW1waW9uU3BlbGxzIiwic3BlbGxzRGF0YSIsInNwZWxscyIsInNwZWxsIiwic3BlbGxPYmplY3QiLCJjb3N0QnVybiIsImNvc3RUeXBlIiwiY29vbGRvd24iLCJjb29sZG93bkJ1cm4iLCJpbWdVcmwiLCJjaGFtcGlvblBhc3NpdmUiLCJ0aXRsZSIsInJlcGxhY2UiLCJ0b1VwcGVyQ2FzZSIsInBhcnR5cGUiLCJhbGx5dGlwcyIsImxvcmUiLCJyb2xlcyIsInNraW5zIiwicmVzb3VyY2UiLCJ0aXBzIiwiZmV0Y2hDaGFtcGlvblN0YXRzIiwiZGV2VXJsIiwidG9GaXhlZCIsImtkYSIsImtkYVJhdGlvIiwiaXRlbVNldHMiLCJpdGVtQ2hvaWNlcyIsImJlc3RNYXRjaFVwcyIsIm1hdGNoVXBzIiwid29yc3RNYXRjaFVwcyIsInZlcnNpb25zUmVzcG9uc2UiLCJ2ZXJzaW9ucyIsImNoYW1waW9uc1Jlc3BvbnNlIiwidmVyc2lvblJlc3BvbnNlIiwiZmV0Y2hBbGxJdGVtcyIsImFsbEl0ZW1zIiwiSXRlbUluZm8iLCJpdGVtSWQiLCJnZXRJdGVtRGV0YWlscyIsIml0ZW1JbWFnZUlkIiwiaW1hZ2VVcmwiLCJjb21wb25lbnRJdGVtSWRzIiwiY29tcG9uZW50SXRlbURldGFpbHMiLCJjb3N0IiwiZ29sZCIsInRvdGFsIiwiZ2V0SXRlbUltYWdlIiwiY29tcG9uZW50SXRlbXMiLCJnZXRDb21wb25lbnRJdGVtcyIsIkVsZW1lbnRDcmVhdGlvbiIsImNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcyIsInRhZyIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZUNoaWxkRWxlbWVudFdpdGhJZCIsImNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzc0FuZElkIiwiY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MiLCJzcmMiLCJhbHQiLCJpbWFnZUVsZW1lbnQiLCJyZW5kZXJIZWFkZXJEZXRhaWxzIiwiaW1hZ2VzIiwiY2hhbXBpb25EYXRhIiwiY2hhbXBpb25Sb2xlTmFtZSIsImNoYW1waW9uUmVzb3VyY2UiLCJjaGFtcGlvblJlc291cmNlTmFtZSIsImxvcmVDb250YWluZXIiLCJpbm5lckhUTUwiLCJhYmlsaXRpZXNDb250YWluZXIiLCJhYmlsaXR5SW1ncyIsInBhc3NpdmVJbWciLCJpbWdMYWJlbCIsInNwZWxsSW1nIiwiaSIsImFiaWxpdHlJbmZvIiwiYWJpbGl0eU5hbWUiLCJhYmlsaXR5RGVzY3JpcHRpb24iLCJhYmlsaXR5TGFiZWwiLCJjaGFtcGlvblRpcHNTZWN0aW9uIiwiY2hhbXBpb25UaXAiLCJza2luIiwibnVtIiwic2hvd25JbWFnZUNvbnRhaW5lciIsInNob3duSW1hZ2VVcmwiLCJpbWFnZUNvbnRhaW5lciIsInJlbmRlclN0YXRPdmVydmlldyIsInJlbmRlckRhbWFnZVN0YXRzIiwicmVuZGVyQ2hhbXBpb25MYW5lIiwicmVuZGVyTWF0Y2h1cHNJbmZvIiwic3RhdHNPdmVydmlldyIsInRydWVEYW1hZ2VDaXJjbGVTdHJva2UiLCJwaHlzaWNhbERhbWFnZUNpcmNsZVN0cm9rZSIsIm1hZ2ljRGFtYWdlQ2lyY2xlU3Ryb2tlIiwidHJ1ZURhbWFnZVBlcmNlbnQiLCJNYXRoIiwicm91bmQiLCJ0cnVlRGFtYWdlIiwicGVyY2VudGFnZSIsInBoeXNpY2FsRGFtYWdlUGVyY2VudCIsInBoeXNpY2FsRGFtYWdlIiwibWFnaWNEYW1hZ2VQZXJjZW50IiwibWFnaWNEYW1hZ2UiLCJzdHJva2VEYXNoYXJyYXkiLCJ0b3RhbERhbWFnZVRleHQiLCJ0cnVlRGFtYWdlVmFsdWUiLCJwaHlzaWNhbERhbWFnZVZhbHVlIiwibWFnaWNEYW1hZ2VWYWx1ZSIsImdldEFsbEl0ZW1zIiwiY2hhbXBpb25JdGVtQnVpbGRzIiwiaXRlbVNldCIsIml0ZW1TZXRDb250YWluZXIiLCJpdGVtIiwiaXRlbUluZm8iLCJnZXRJdGVtSW5mbyIsIm1haW5Db21wb25lbnRDb250YWluZXIiLCJtYWluSXRlbSIsIml0ZW1EZXRhaWxzQ29udGFpbmVyIiwibmFtZUVsZW1lbnQiLCJkZXNjcmlwdGlvbkVsZW1lbnQiLCJpdGVtQ29zdCIsImNvc3RMYWJlbCIsImNvc3RBbW91bnQiLCJyZXNvbHZlIiwidGhlbiIsIml0ZW1zIiwiY29tcG9uZW50SXRlbXNDb250YWluZXIiLCJjb21wb25lbnRJdGVtIiwiY29tcG9uZW50SXRlbUVsZW1lbnQiLCJjb21wb25lbnRJdGVtRGV0YWlsc0NvbnRhaW5lciIsImNvbXBvbmVudEl0ZW1OYW1lIiwiY29tcG9uZW50SXRlbUNvc3QiLCJjb21wb25lbnRJdGVtQ29zdExhYmVsIiwiY29tcG9uZW50SXRlbUFtb3VudCIsImJlc3RNYXRjaHVwc1NlY3Rpb24iLCJiZXN0TWF0Y2h1cHNFbGVtZW50IiwiYmVzdE1hdGNodXBzRGF0YSIsIndvcnN0TWF0Y2h1cHNTZWN0aW9uIiwid29yc3RNYXRjaHVwc0VsZW1lbnQiLCJ3b3JzdE1hdGNodXBzRGF0YSIsImltcG9ydEFsbCIsInIiLCJrZXlzIiwicmVxdWlyZSIsImNvbnRleHQiLCJtb2RhbENvbnRhaW5lciIsImNvbnRhaW5lciIsImJhY2tncm91bmQiLCJiYWNrZ3JvdW5kU2l6ZSIsInJhdGVUZXh0IiwicmF0ZVR5cGUiLCJjaGFtcGlvblJhdGUiLCJsYWJlbCIsInJhdGVWYWx1ZSIsImxvd2VyQ2FzZVRleHQiLCJjaGFtcGlvbkxhbmVJbmZvIiwibGFuZVRleHQiLCJsYW5lSWNvbiIsImRhbWFnZVR5cGUiLCJkYW1hZ2VWYWx1ZSIsImRhbWFnZVBlcmNlbnRhZ2UiLCJkYW1hZ2VDb250YWluZXIiLCJkYW1hZ2VTdGF0cyIsImRhbWFnZVZhbHVlRWxlbWVudCIsImRhbWFnZVBlcmNlbnRhZ2VFbGVtZW50IiwibWF0Y2h1cHNFbGVtZW50IiwibWF0Y2h1cHNEYXRhIiwibWF0Y2h1cCIsIm1hdGNodXBJbmZvIiwiZW5lbXlDaGFtcGlvbk5hbWUiLCJlbmVteUNoYW1waW9uSWQiLCJlbmVteUNoYW1waW9uSW1nVXJsIiwibWF0Y2h1cFN0YXRzIiwiZW5lbXlDaGFtcGlvbk5hbWVFbGVtZW50Iiwid2lucmF0ZUFnYWluc3QiLCJ3aW5yYXRlQWdhaW5zdExhYmVsIiwiY29sb3IiLCJ3aW5yYXRlQWdhaW5zdFBlcmNlbnRhZ2UiLCJ3aW5SYXRlQWdhaW5zdCIsImdhbWVzUGxheWVkQWdhaW5zdCIsIm1hdGNoZXMiLCJjaGFtcGlvbkNvbnRhaW5lciIsImNoYW1waW9uSW1nVXJsIiwiY2hhbXBpb25JbWciLCJ0YWJJbmRleCIsImNoYW1waW9uTmFtZVdyYXBwZXIiLCJiYWNrZHJvcENoYW5nZSIsImNyZWF0ZVNlYXJjaERyb3Bkb3duIiwiYWxsQ2hhbXBpb25zQXJyYXkiLCJPYmplY3QiLCJ2YWx1ZXMiLCJzZWFyY2hDb250YWluZXJzIiwiYXV0b0NvbXBsZXRlTmFtZVdyYXBwZXIiLCJkaXNwbGF5TnVtYmVyT2ZNYXRjaGVzIiwiZGV2VXJsMiIsIm1hdGNoQ291bnQiLCJhcHBOYW1lQ29udGFpbmVyIiwidGFnbGluZUNvbnRhaW5lciIsInRhZ2xpbmVTdGFydCIsInRhZ2xpbmVNYXRjaENvdW50IiwiZmxvb3IiLCJ0YWdsaW5lRW5kIiwicmVuZGVyUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=