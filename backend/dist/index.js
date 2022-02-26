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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsWUFBWSxLQUFLLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxX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QkFBOEIsNkJBQTZCLHlCQUF5QixxQkFBcUIsdUJBQXVCLEtBQUssR0FBRyw4QkFBOEIsNkJBQTZCLHFCQUFxQixLQUFLLEdBQUcsT0FBTyw4RkFBOEYsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxZQUFZLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFlBQVksVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksVUFBVSxNQUFNLE1BQU0sWUFBWSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxZQUFZLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxZQUFZLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxZQUFZLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFlBQVksVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsWUFBWSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFlBQVksVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsWUFBWSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFlBQVksVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFlBQVksVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxhQUFhLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLFdBQVcsV0FBVyxLQUFLLE1BQU0sYUFBYSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxhQUFhLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sVUFBVSxLQUFLLE1BQU0sYUFBYSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxVQUFVLEtBQUssTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQyxjQUFjO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxtQkFBbUI7QUFDcEQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixnQkFBZ0I7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QVF2QjRjLFlBQUFBLGdCQVJ1QixHQVFKbkosNEZBQUEsQ0FBNEMsS0FBNUMsRUFBbUQsbUJBQW5ELEVBQXdFa0osZ0JBQXhFLENBUkk7QUFTdkJFLFlBQUFBLFlBVHVCLEdBU1JwSiw0RkFBQSxDQUE0QyxNQUE1QyxFQUFvRCxlQUFwRCxFQUFxRW1KLGdCQUFyRSxDQVRRO0FBVTdCQyxZQUFBQSxZQUFZLENBQUNsYSxXQUFiLEdBQTJCLGdDQUEzQjtBQUNNbWEsWUFBQUEsaUJBWHVCLEdBV0hySiw0RkFBQSxDQUE0QyxNQUE1QyxFQUFvRCxxQkFBcEQsRUFBMkVtSixnQkFBM0UsQ0FYRztBQVk3QkUsWUFBQUEsaUJBQWlCLENBQUNuYSxXQUFsQixhQUFtQzJULElBQUksQ0FBQ3lHLEtBQUwsQ0FBV0wsVUFBWCxDQUFuQztBQUNNTSxZQUFBQSxVQWJ1QixHQWFWdkosNEZBQUEsQ0FBNEMsTUFBNUMsRUFBb0QsYUFBcEQsRUFBbUVtSixnQkFBbkUsQ0FiVTtBQWM3QkksWUFBQUEsVUFBVSxDQUFDcmEsV0FBWCxHQUF5Qiw0QkFBekI7O0FBZDZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQXRCNlosc0JBQXNCO0FBQUE7QUFBQTtBQUFBLEdBQTVCOztBQWlCQSxJQUFNUyxVQUFVO0FBQUEsdUxBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ1hULHNCQUFzQixFQURYOztBQUFBO0FBQUE7QUFBQSxtQkFFWE4sb0JBQW9CLEVBRlQ7O0FBQUE7QUFHakJ4UCxZQUFBQSxnR0FBQTs7QUFIaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBVnVRLFVBQVU7QUFBQTtBQUFBO0FBQUEsR0FBaEI7O0FBTUFBLFVBQVU7QUFDVmhCLDhFQUFjLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvYXBwQ29udHJvbC9iYWNrZHJvcENoYW5nZUludGVydmFsLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvYXBwQ29udHJvbC9jaGFtcGlvbk1vZGFsQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL2FwcENvbnRyb2wvY2hhbXBpb25zUGFnZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9hcHBDb250cm9sL2ZpbHRlckNoYW1waW9ucy5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL2FwcENvbnRyb2wvc2VhcmNoYmFyQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL2FwcENvbnRyb2wvc29ydENoYW1waW9ucy5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL2NoYW1waW9uRGF0YS9jaGFtcGlvbkRldGFpbHMuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9jaGFtcGlvbkRhdGEvY2hhbXBpb25TdGF0cy5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL2NoYW1waW9uRGF0YS9nZXRBbGxDaGFtcGlvbnMuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9jaGFtcGlvbkRhdGEvZ2V0TGF0ZXN0VmVyc2lvbi5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL2NoYW1waW9uRGF0YS9pdGVtSW5mby5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL2hlbHBlcnMvZWxlbWVudENyZWF0aW9uLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvdGVtcGxhdGVzL2NoYW1waW9uRGV0YWlsc01vZGFsLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvdGVtcGxhdGVzL2NoYW1waW9uU2tpbnNNb2RhbC5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL3RlbXBsYXRlcy9jaGFtcGlvblN0YXRzTW9kYWwuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy90ZW1wbGF0ZXMvcmVuZGVySGVscGVycy5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL3N0eWxlc2hlZXRzL2Zyb250cGFnZS5zY3NzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvc3R5bGVzaGVldHMvbW9kYWxzLnNjc3MiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvc3R5bGVzaGVldHMvZnJvbnRwYWdlLnNjc3M/NDcyNiIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL3N0eWxlc2hlZXRzL21vZGFscy5zY3NzP2NmODMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy9ob21lL2Rhbml5by9Eb2N1bWVudHMvT2RpblByb2plY3QvTGVhZ3VlLUFwcC9mcm9udGVuZC9zcmMvYXNzZXRzL2ltYWdlc3xzeW5jfG5vbnJlY3Vyc2l2ZXwvXFwuKHBuZ3xqcGUiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xlYWd1ZS1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2xlYWd1ZS1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9sZWFndWUtYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGxldCBpbmRleCA9IDE7XG5cbiAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGNvbnN0IGJhY2tkcm9wcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iYWNrZHJvcC1pbWcnKTtcbiAgICBjb25zdCBjdXJyZW50QmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2Ryb3AtaW1nLnNob3duJyk7XG4gICAgaW5kZXggJT0gYmFja2Ryb3BzLmxlbmd0aDtcbiAgICBjdXJyZW50QmFja2Ryb3AuY2xhc3NOYW1lID0gJ2JhY2tkcm9wLWltZyBoaWRkZW4nO1xuICAgIGJhY2tkcm9wc1tpbmRleF0uY2xhc3NOYW1lID0gJ2JhY2tkcm9wLWltZyBzaG93bic7XG4gICAgaW5kZXggKz0gMTtcbiAgfSwgNzAwMCk7XG59O1xuIiwiY29uc3QgQ2hhbXBpb25Nb2RhbENvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBjb25zdCB0b2dnbGVBY3RpdmVBYmlsaXR5ID0gKGNsaWNrZWRBYmlsaXR5SWQpID0+IHtcbiAgICBjb25zdCBhYmlsaXR5SW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNwZWxsLWltZycpO1xuICAgIGNvbnN0IGFiaWxpdHlJbmZvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hYmlsaXR5LWluZm8nKTtcblxuICAgIGFiaWxpdHlJbWFnZXMuZm9yRWFjaCgoaW1nKSA9PiB7XG4gICAgICBpbWcuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZCcpO1xuICAgIH0pO1xuICAgIGFiaWxpdHlJbmZvcy5mb3JFYWNoKChpbmZvKSA9PiB7XG4gICAgICBpbmZvLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY2xpY2tlZEltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Y2xpY2tlZEFiaWxpdHlJZH0taW1nYCk7XG4gICAgY2xpY2tlZEltYWdlLmNsYXNzTmFtZSA9ICdzcGVsbC1pbWcgY2xpY2tlZCc7XG5cbiAgICBjb25zdCBhY3RpdmVBYmlsaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Y2xpY2tlZEFiaWxpdHlJZH0tYWJpbGl0eWApO1xuICAgIGFjdGl2ZUFiaWxpdHkuY2xhc3NOYW1lID0gJ2FiaWxpdHktaW5mbyBhY3RpdmUnO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZU1vZGFsVGVtcGxhdGUgPSAoY2xpY2tlZE1vZGFsTmF2TGluaykgPT4ge1xuICAgIGNvbnN0IHRlbXBsYXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC10ZW1wbGF0ZScpO1xuICAgIHRlbXBsYXRlcy5mb3JFYWNoKCh0ZW1wbGF0ZSkgPT4ge1xuICAgICAgY29uc3QgdGVtcGxhdGVOYW1lID0gdGVtcGxhdGUuaWQuc3Vic3RyaW5nKDAsIHRlbXBsYXRlLmlkLmluZGV4T2YoJy0nKSk7XG4gICAgICBpZiAodGVtcGxhdGVOYW1lID09PSBjbGlja2VkTW9kYWxOYXZMaW5rLmlkKSB7XG4gICAgICAgIGNvbnN0IGNob3NlblRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgICAgIGNob3NlblRlbXBsYXRlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgaGlkZGVuVGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICAgICAgaGlkZGVuVGVtcGxhdGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBkaXNwYXlJdGVtRGV0YWlscyA9IChob3ZlcmVkSXRlbUltYWdlKSA9PiB7XG4gICAgY29uc3QgaXRlbURldGFpbHMgPSBob3ZlcmVkSXRlbUltYWdlLm5leHRFbGVtZW50U2libGluZztcbiAgICBpdGVtRGV0YWlscy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICB9O1xuXG4gIGNvbnN0IGhpZGVJdGVtRGV0YWlscyA9ICh1bmhvdmVyZWRJdGVtSW1hZ2UpID0+IHtcbiAgICBjb25zdCBpdGVtRGV0YWlscyA9IHVuaG92ZXJlZEl0ZW1JbWFnZS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgaXRlbURldGFpbHMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfTtcblxuICBjb25zdCB0b2dnbGVTa2luSW1hZ2VzID0gKGFycm93Q2xhc3NMaXN0KSA9PiB7XG4gICAgY29uc3Qgc2tpbkltYWdlc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5za2luLWltYWdlcy1jb250YWluZXInKTtcbiAgICBjb25zdCBjdXJyZW50U2hvd25JbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5za2luLWltYWdlLWNvbnRhaW5lci5zaG93bicpO1xuICAgIGNvbnN0IHNraW5OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNraW4tbmFtZScpO1xuXG4gICAgY3VycmVudFNob3duSW1hZ2UuY2xhc3NOYW1lID0gJ3NraW4taW1hZ2UtY29udGFpbmVyJztcbiAgICBjb25zdCBmaXJzdEltYWdlID0gc2tpbkltYWdlc0NvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICBjb25zdCBsYXN0SW1hZ2UgPSBza2luSW1hZ2VzQ29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQ7XG5cbiAgICBpZiAoZmlyc3RJbWFnZSA9PT0gY3VycmVudFNob3duSW1hZ2UgJiYgYXJyb3dDbGFzc0xpc3QuaW5jbHVkZXMoJ2xlZnQtYXJyb3cnKSkge1xuICAgICAgbGFzdEltYWdlLmNsYXNzTmFtZSA9ICdza2luLWltYWdlLWNvbnRhaW5lciBzaG93bic7XG4gICAgICBza2luTmFtZS50ZXh0Q29udGVudCA9IGxhc3RJbWFnZS5pZDtcbiAgICB9IGVsc2UgaWYgKGxhc3RJbWFnZSA9PT0gY3VycmVudFNob3duSW1hZ2UgJiYgYXJyb3dDbGFzc0xpc3QuaW5jbHVkZXMoJ3JpZ2h0LWFycm93JykpIHtcbiAgICAgIGZpcnN0SW1hZ2UuY2xhc3NOYW1lID0gJ3NraW4taW1hZ2UtY29udGFpbmVyIHNob3duJztcbiAgICAgIHNraW5OYW1lLnRleHRDb250ZW50ID0gZmlyc3RJbWFnZS5pZDtcbiAgICB9IGVsc2UgaWYgKGFycm93Q2xhc3NMaXN0LmluY2x1ZGVzKCdyaWdodC1hcnJvdycpKSB7XG4gICAgICBjdXJyZW50U2hvd25JbWFnZS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NOYW1lID0gJ3NraW4taW1hZ2UtY29udGFpbmVyIHNob3duJztcbiAgICAgIHNraW5OYW1lLnRleHRDb250ZW50ID0gY3VycmVudFNob3duSW1hZ2UubmV4dEVsZW1lbnRTaWJsaW5nLmlkO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50U2hvd25JbWFnZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTmFtZSA9ICdza2luLWltYWdlLWNvbnRhaW5lciBzaG93bic7XG4gICAgICBza2luTmFtZS50ZXh0Q29udGVudCA9IGN1cnJlbnRTaG93bkltYWdlLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaWQ7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNsZWFyTWFpbk1vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1jb250YWluZXInKTtcbiAgICBjb25zdCBjaGFtcGlvbk5hbWUgPSBtYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbi1uYW1lJyk7XG4gICAgY29uc3QgY2hhbXBpb25UaXRsZSA9IG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLXRpdGxlJyk7XG4gICAgY29uc3QgY2hhbXBpb25Sb2xlcyA9IG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLXJvbGVzJyk7XG4gICAgY29uc3QgY2hhbXBpb25Mb3JlID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tbG9yZScpO1xuICAgIGNvbnN0IGFiaWxpdHlEZXRhaWxzID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuYWJpbGl0eS1kZXRhaWxzJyk7XG4gICAgY29uc3QgY2hhbXBpb25UaXBzID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tdGlwcycpO1xuXG4gICAgY29uc3QgbWFpbk1vZGFsSGVhZGVyID0gW2NoYW1waW9uTmFtZSwgY2hhbXBpb25UaXRsZSwgY2hhbXBpb25Sb2xlc107XG4gICAgbWFpbk1vZGFsSGVhZGVyLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gZWxlbWVudDtcbiAgICAgIGN1cnJlbnRFbGVtZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgfSk7XG5cbiAgICBjaGFtcGlvbkxvcmUucmVtb3ZlKCk7XG4gICAgYWJpbGl0eURldGFpbHMucmVtb3ZlKCk7XG4gICAgY2hhbXBpb25UaXBzLnJlbW92ZSgpO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyU3RhdHNNb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCBzdGF0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGF0cy1jb250YWluZXInKTtcbiAgICBjb25zdCBjaGFtcGlvbk5hbWUgPSBzdGF0c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tbmFtZScpO1xuICAgIGNvbnN0IGNoYW1waW9uVGl0bGUgPSBzdGF0c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tdGl0bGUnKTtcbiAgICBjb25zdCBjaGFtcGlvblN0YXRzT3ZlcnZpZXcgPSBzdGF0c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tc3RhdHMtb3ZlcnZpZXcnKTtcbiAgICBjb25zdCBhbGxkYW1hZ2VTdGF0cyA9IHN0YXRzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYW1hZ2Utc3RhdHMnKTtcbiAgICBjb25zdCBpdGVtU2V0c0NvbnRhaW5lciA9IHN0YXRzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLXNldHMtY29udGFpbmVyJyk7XG4gICAgY29uc3QgYmVzdE1hdGNodXBzID0gc3RhdHNDb250YWluZXIucXVlcnlTZWxlY3RvcignLmJlc3QtbWF0Y2h1cHMnKTtcbiAgICBjb25zdCB3b3JzdE1hdGNodXBzID0gc3RhdHNDb250YWluZXIucXVlcnlTZWxlY3RvcignLndvcnN0LW1hdGNodXBzJyk7XG5cbiAgICBjb25zdCBzdGF0c01vZGFsSGVhZGVyID0gW2NoYW1waW9uTmFtZSwgY2hhbXBpb25UaXRsZSwgY2hhbXBpb25TdGF0c092ZXJ2aWV3XTtcbiAgICBzdGF0c01vZGFsSGVhZGVyLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gZWxlbWVudDtcbiAgICAgIGN1cnJlbnRFbGVtZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgfSk7XG4gICAgYWxsZGFtYWdlU3RhdHMuZm9yRWFjaCgoZGFtYWdlU3RhdCkgPT4ge1xuICAgICAgY29uc3QgZGFtYWdlU3RhdEVsZW1lbnQgPSBkYW1hZ2VTdGF0O1xuICAgICAgZGFtYWdlU3RhdEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfSk7XG4gICAgY29uc3Qgc3RhdHNNb2RhbENvbnRlbnQgPSBbaXRlbVNldHNDb250YWluZXIsIGJlc3RNYXRjaHVwcywgd29yc3RNYXRjaHVwc107XG4gICAgc3RhdHNNb2RhbENvbnRlbnQuZm9yRWFjaCgoY29udGVudCkgPT4ge1xuICAgICAgY29uc3QgY29udGVudEVsZW1lbnQgPSBjb250ZW50O1xuICAgICAgY29udGVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgY2xlYXJTa2luc01vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IHNraW5JbWFnZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2tpbi1pbWFnZXMtY29udGFpbmVyJyk7XG4gICAgc2tpbkltYWdlc0NvbnRhaW5lci5yZW1vdmUoKTtcbiAgfTtcblxuICBjb25zdCBjbG9zZUNoYW1waW9uTW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tY29udGFpbmVyJyk7XG4gICAgY29uc3Qgc3RhdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhdHMtY29udGFpbmVyJyk7XG4gICAgY29uc3Qgc2tpbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2tpbnMtY29udGFpbmVyJyk7XG5cbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIG1haW5Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgc3RhdHNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBza2luc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9O1xuXG4gIGNvbnN0IG1vZGFsQ2xpY2tFdmVudHMgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuXG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdzcGVsbC1pbWcnKSB7XG4gICAgICBjb25zdCBkYXNoSW5kZXggPSBldmVudC50YXJnZXQuaWQuaW5kZXhPZignLScpO1xuICAgICAgY29uc3QgYWJpbGl0eUlkID0gZXZlbnQudGFyZ2V0LmlkLnNsaWNlKDAsIGRhc2hJbmRleCk7XG4gICAgICB0b2dnbGVBY3RpdmVBYmlsaXR5KGFiaWxpdHlJZCk7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdtb2RhbC1uYXYtbGluaycpIHtcbiAgICAgIGNoYW5nZU1vZGFsVGVtcGxhdGUoZXZlbnQudGFyZ2V0KTtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuZnJvbShldmVudC50YXJnZXQuY2xhc3NMaXN0KS5pbmNsdWRlcygnaW1nLXNjcm9sbC1hcnJvdycpKSB7XG4gICAgICB0b2dnbGVTa2luSW1hZ2VzKEFycmF5LmZyb20oZXZlbnQudGFyZ2V0LmNsYXNzTGlzdCkpO1xuICAgIH1cblxuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnY2xvc2UtbW9kYWwtYnRuJykge1xuICAgICAgbW9kYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtb2RhbENsaWNrRXZlbnRzKTtcbiAgICAgIGNsb3NlQ2hhbXBpb25Nb2RhbCgpO1xuICAgICAgY2xlYXJNYWluTW9kYWwoKTtcbiAgICAgIGNsZWFyU3RhdHNNb2RhbCgpO1xuICAgICAgY2xlYXJTa2luc01vZGFsKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG1vZGFsTW91c2VvdmVyRXZlbnRzID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdpdGVtLWltZydcbiAgICAgIHx8IGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdjb21wb25lbnQtaXRlbS1pbWcnKSB7XG4gICAgICBkaXNwYXlJdGVtRGV0YWlscyhldmVudC50YXJnZXQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBtb2RhbE1vdXNlb3V0RXZlbnRzID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdpdGVtLWltZydcbiAgICB8fCBldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnY29tcG9uZW50LWl0ZW0taW1nJykge1xuICAgICAgaWYgKCFldmVudC50YXJnZXQpIHJldHVybjtcblxuICAgICAgbGV0IHsgcmVsYXRlZFRhcmdldCB9ID0gZXZlbnQ7XG5cbiAgICAgIHdoaWxlIChyZWxhdGVkVGFyZ2V0KSB7XG4gICAgICAgIGlmIChyZWxhdGVkVGFyZ2V0ID09PSBldmVudC50YXJnZXQpIHJldHVybjtcbiAgICAgICAgcmVsYXRlZFRhcmdldCA9IHJlbGF0ZWRUYXJnZXQucGFyZW50Tm9kZTtcbiAgICAgIH1cblxuICAgICAgaGlkZUl0ZW1EZXRhaWxzKGV2ZW50LnRhcmdldCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG1vZGFsQXJyb3dFdmVudHMgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBza2luc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNza2lucy1jb250YWluZXInKTtcbiAgICBpZiAoc2tpbnNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJykge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93UmlnaHQnKSB7XG4gICAgICAgIGNvbnN0IHJpZ2h0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmlnaHQtYXJyb3cnKTtcbiAgICAgICAgdG9nZ2xlU2tpbkltYWdlcyhBcnJheS5mcm9tKHJpZ2h0QXJyb3cuY2xhc3NMaXN0KSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudC5rZXkgPT09ICdBcnJvd0xlZnQnKSB7XG4gICAgICAgIGNvbnN0IGxlZnRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0LWFycm93Jyk7XG4gICAgICAgIHRvZ2dsZVNraW5JbWFnZXMoQXJyYXkuZnJvbShsZWZ0QXJyb3cuY2xhc3NMaXN0KSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG1vZGFsQ2hhbmdlTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG5cbiAgICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1vZGFsQ2xpY2tFdmVudHMpO1xuICAgIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIG1vZGFsTW91c2VvdmVyRXZlbnRzKTtcbiAgICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIG1vZGFsTW91c2VvdXRFdmVudHMpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBtb2RhbEFycm93RXZlbnRzKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG1vZGFsQ2hhbmdlTGlzdGVuZXJzLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhbXBpb25Nb2RhbENvbnRyb2xsZXI7XG4iLCJpbXBvcnQgZ2V0Q2hhbXBpb25EZXRhaWxzIGZyb20gJy4uL2NoYW1waW9uRGF0YS9jaGFtcGlvbkRldGFpbHMnO1xuaW1wb3J0IGdldENoYW1waW9uU3RhdHMgZnJvbSAnLi4vY2hhbXBpb25EYXRhL2NoYW1waW9uU3RhdHMnO1xuaW1wb3J0IGNoYW1waW9uRGV0YWlsc01vZGFsIGZyb20gJy4uL3RlbXBsYXRlcy9jaGFtcGlvbkRldGFpbHNNb2RhbCc7XG5pbXBvcnQgY2hhbXBpb25TdGF0c01vZGFsIGZyb20gJy4uL3RlbXBsYXRlcy9jaGFtcGlvblN0YXRzTW9kYWwnO1xuaW1wb3J0IGNoYW1waW9uU2tpbnNNb2RhbCBmcm9tICcuLi90ZW1wbGF0ZXMvY2hhbXBpb25Ta2luc01vZGFsJztcbmltcG9ydCBDaGFtcGlvbk1vZGFsQ29udHJvbGxlciBmcm9tICcuL2NoYW1waW9uTW9kYWxDb250cm9sbGVyJztcbmltcG9ydCBDaGFtcGlvbkZpbHRlciBmcm9tICcuL2ZpbHRlckNoYW1waW9ucyc7XG5pbXBvcnQgU29ydENoYW1waW9ucyBmcm9tICcuL3NvcnRDaGFtcGlvbnMnO1xuaW1wb3J0IHsgZ2V0QWxsQ2hhbXBpb25EZXRhaWxzLCBnZXRBbGxDaGFtcGlvblN0YXRzIH0gZnJvbSAnLi4vY2hhbXBpb25EYXRhL2dldEFsbENoYW1waW9ucyc7XG5pbXBvcnQgZ2V0TGF0ZXN0VmVyc2lvbiBmcm9tICcuLi9jaGFtcGlvbkRhdGEvZ2V0TGF0ZXN0VmVyc2lvbic7XG5cbmNvbnN0IENoYW1waW9uc1BhZ2VDb250cm9sbGVyID0gKCgpID0+IHtcbiAgY29uc3QgZGlzcGxheURyb3Bkb3duT3B0aW9ucyA9IChkcm9wZG93bk9wdGlvbnMpID0+IHtcbiAgICBjb25zdCBhbGxEcm9wZG93bk9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd24tb3B0aW9ucycpO1xuICAgIGFsbERyb3Bkb3duT3B0aW9ucy5mb3JFYWNoKChvcHRpb25zKSA9PiB7XG4gICAgICBjb25zdCBvcHRpb25zU3R5bGUgPSBvcHRpb25zLnN0eWxlO1xuICAgICAgb3B0aW9uc1N0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7XG5cbiAgICBjb25zdCBkcm9wZG93bk9wdGlvbnNTdHlsZSA9IGRyb3Bkb3duT3B0aW9ucy5zdHlsZTtcbiAgICBkcm9wZG93bk9wdGlvbnNTdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICB9O1xuXG4gIGNvbnN0IGhpZGVEcm9wZG93bk9wdGlvbnMgPSAoZHJvcGRvd25PcHRpb25zKSA9PiB7XG4gICAgY29uc3QgZHJvcGRvd25PcHRpb25zU3R5bGUgPSBkcm9wZG93bk9wdGlvbnMuc3R5bGU7XG4gICAgZHJvcGRvd25PcHRpb25zU3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfTtcblxuICBjb25zdCBkcm9wZG93bk9wdGlvbnNUb2dnbGUgPSAoZHJvcGRvd25CdG4pID0+IHtcbiAgICBjb25zdCBkcm9wZG93bk9wdGlvbnMgPSBkcm9wZG93bkJ0bi5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bi1vcHRpb25zJyk7XG4gICAgaWYgKGRyb3Bkb3duT3B0aW9ucy5zdHlsZS5kaXNwbGF5ICE9PSAnZmxleCcpIHtcbiAgICAgIGRpc3BsYXlEcm9wZG93bk9wdGlvbnMoZHJvcGRvd25PcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGlkZURyb3Bkb3duT3B0aW9ucyhkcm9wZG93bk9wdGlvbnMpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkaXNwbGF5Q2hhbXBpb25Nb2RhbCA9IGFzeW5jIChjaGFtcGlvbklkKSA9PiB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgICBjb25zdCBsYXRlc3RWZXJzaW9uID0gYXdhaXQgZ2V0TGF0ZXN0VmVyc2lvbigpO1xuICAgIGNvbnN0IGNoYW1waW9uRGV0YWlscyA9IGF3YWl0IGdldENoYW1waW9uRGV0YWlscyhjaGFtcGlvbklkLCBsYXRlc3RWZXJzaW9uKTtcblxuICAgIGNvbnN0IGNoYW1waW9uU3RhdHMgPSBhd2FpdCBnZXRDaGFtcGlvblN0YXRzKGNoYW1waW9uSWQpO1xuXG4gICAgY29uc3Qgc2tpbkltYWdlc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5za2luLWltYWdlcy1jb250YWluZXInKTtcbiAgICAvKlxuICAgICAgcHVycG9zZSBvZiB0aGUgaWYgc3RhdGVtZW50IGlzIHRvIHByZXZlbnQgc3BhbSBjbGlja3MgZnJvbSByZW5kZXJpbmdcbiAgICAgIGR1cGxpY2F0ZSBjb250ZW50IG9udG8gdGhlIGNoYW1waW9uIG1vZGFsLlxuICAgICovXG4gICAgaWYgKCFza2luSW1hZ2VzQ29udGFpbmVyKSB7XG4gICAgICBjaGFtcGlvbkRldGFpbHNNb2RhbChjaGFtcGlvbkRldGFpbHMpO1xuICAgICAgY2hhbXBpb25TdGF0c01vZGFsKGNoYW1waW9uRGV0YWlscywgY2hhbXBpb25TdGF0cywgbGF0ZXN0VmVyc2lvbik7XG4gICAgICBjaGFtcGlvblNraW5zTW9kYWwoY2hhbXBpb25EZXRhaWxzKTtcbiAgICB9XG5cbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBDaGFtcGlvbk1vZGFsQ29udHJvbGxlci5tb2RhbENoYW5nZUxpc3RlbmVycygpO1xuICB9O1xuXG4gIGNvbnN0IHNlbGVjdExhbmVGaWx0ZXJPcHRpb24gPSAoY2xpY2tlZExhbmVPcHRpb24pID0+IHtcbiAgICBjb25zdCBjaGFtcGlvbnNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW1waW9ucy1zZWN0aW9uJyk7XG4gICAgY29uc3QgYWN0aXZlTGFuZU9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItb3B0aW9uLmFjdGl2ZScpO1xuICAgIGlmIChjbGlja2VkTGFuZU9wdGlvbiA9PT0gYWN0aXZlTGFuZU9wdGlvbiB8fCBjaGFtcGlvbnNTZWN0aW9uLnN0eWxlLnZpc2liaWxpdHkgPT09ICdoaWRkZW4nKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGFjdGl2ZUxhbmVPcHRpb24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgY2xpY2tlZExhbmVPcHRpb24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBjaGVja0xhbmVGaWx0ZXJPcHRpb24gPSBhc3luYyAoYWxsQ2hhbXBpb25TdGF0cykgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZUxhbmVPcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLW9wdGlvbi5hY3RpdmUnKTtcbiAgICBjb25zdCBsYW5lTmFtZSA9IGFjdGl2ZUxhbmVPcHRpb24uY2xhc3NMaXN0WzBdO1xuICAgIGF3YWl0IENoYW1waW9uRmlsdGVyLmZpbHRlckJ5TGFuZShsYW5lTmFtZSwgYWxsQ2hhbXBpb25TdGF0cyk7XG4gIH07XG5cbiAgY29uc3QgY2hlY2tTb3J0aW5nT3B0aW9uID0gKGFsbENoYW1waW9uU3RhdHMpID0+IHtcbiAgICBjb25zdCBhY3RpdmVTb3J0aW5nT3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNvcnQuYWN0aXZlJyk7XG4gICAgaWYgKGFjdGl2ZVNvcnRpbmdPcHRpb24gPT09IG51bGwpIHtcbiAgICAgIFNvcnRDaGFtcGlvbnMuc29ydEJ5RGVmYXVsdE9yZGVyKGFsbENoYW1waW9uU3RhdHMpO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuZnJvbShhY3RpdmVTb3J0aW5nT3B0aW9uLmNsYXNzTGlzdCkuaW5jbHVkZXMoJ3dpbnJhdGUnKSkge1xuICAgICAgU29ydENoYW1waW9ucy5zb3J0Q2hhbXBpb25zQnlXaW5yYXRlKGFsbENoYW1waW9uU3RhdHMpO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuZnJvbShhY3RpdmVTb3J0aW5nT3B0aW9uLmNsYXNzTGlzdCkuaW5jbHVkZXMoJ3BpY2tyYXRlJykpIHtcbiAgICAgIFNvcnRDaGFtcGlvbnMuc29ydENoYW1waW9uc0J5UGlja3JhdGUoYWxsQ2hhbXBpb25TdGF0cyk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5mcm9tKGFjdGl2ZVNvcnRpbmdPcHRpb24uY2xhc3NMaXN0KS5pbmNsdWRlcygnZGFtYWdlJykpIHtcbiAgICAgIFNvcnRDaGFtcGlvbnMuc29ydENoYW1waW9uc0J5RGFtYWdlRG9uZShhbGxDaGFtcGlvblN0YXRzKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2hlY2tBY3RpdmVSb2xlT3B0aW9ucyA9IChhbGxDaGFtcGlvbkRldGFpbHMpID0+IHtcbiAgICBjb25zdCBhY3RpdmVSb2xlT3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yb2xlLmFjdGl2ZScpO1xuICAgIGlmIChhY3RpdmVSb2xlT3B0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgYWN0aXZlUm9sZXMgPSBBcnJheS5mcm9tKGFjdGl2ZVJvbGVPcHRpb25zKS5tYXAoKGFjdGl2ZVJvbGVPcHRpb24pID0+IHtcbiAgICAgIGNvbnN0IGFjdGl2ZVJvbGUgPSBhY3RpdmVSb2xlT3B0aW9uLmNsYXNzTGlzdFswXTtcbiAgICAgIHJldHVybiBhY3RpdmVSb2xlO1xuICAgIH0pO1xuICAgIENoYW1waW9uRmlsdGVyLmZpbHRlckJ5Um9sZShhY3RpdmVSb2xlcywgYWxsQ2hhbXBpb25EZXRhaWxzKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBjaGVja0FjdGl2ZURpZmZpY3VsdHlPcHRpb25zID0gKGFsbENoYW1waW9uRGV0YWlscykgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZURpZmZpY3VsdHlPcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRpZmZpY3VsdHkuYWN0aXZlJyk7XG4gICAgaWYgKGFjdGl2ZURpZmZpY3VsdHlPcHRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBhY3RpdmVEaWZmaWN1bHRpZXMgPSBBcnJheS5mcm9tKGFjdGl2ZURpZmZpY3VsdHlPcHRpb25zKS5tYXAoKGFjdGl2ZURpZmZpY3VsdHlPcHRpb24pID0+IHtcbiAgICAgIGNvbnN0IGFjdGl2ZURpZmZpY3VsdHkgPSBhY3RpdmVEaWZmaWN1bHR5T3B0aW9uLmNsYXNzTGlzdFswXTtcbiAgICAgIHJldHVybiBhY3RpdmVEaWZmaWN1bHR5O1xuICAgIH0pO1xuICAgIENoYW1waW9uRmlsdGVyLmZpbHRlckJ5RGlmZmljdWx0eShhY3RpdmVEaWZmaWN1bHRpZXMsIGFsbENoYW1waW9uRGV0YWlscyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3Qgc2VsZWN0TXVsdGlEcm9wZG93bk9wdGlvbiA9IChkcm9wZG93bk9wdGlvbikgPT4ge1xuICAgIGRyb3Bkb3duT3B0aW9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9O1xuXG4gIGNvbnN0IGRlc2VsZWN0RHJvcGRvd25PcHRpb24gPSAoZHJvcGRvd25PcHRpb24pID0+IHtcbiAgICBkcm9wZG93bk9wdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVEcm9wZG93bk9wdGlvbiA9IChkcm9wZG93bk9wdGlvbikgPT4ge1xuICAgIGlmICghQXJyYXkuZnJvbShkcm9wZG93bk9wdGlvbi5jbGFzc0xpc3QpLmluY2x1ZGVzKCdhY3RpdmUnKSkge1xuICAgICAgc2VsZWN0TXVsdGlEcm9wZG93bk9wdGlvbihkcm9wZG93bk9wdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlc2VsZWN0RHJvcGRvd25PcHRpb24oZHJvcGRvd25PcHRpb24pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZWxlY3RTaW5nbGVEcm9wZG93bk9wdGlvbiA9IChkcm9wZG93bk9wdGlvbikgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZURyb3Bkb3duT3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpbmdsZS1zZWxlY3QuYWN0aXZlJyk7XG4gICAgaWYgKGFjdGl2ZURyb3Bkb3duT3B0aW9uID09PSBudWxsKSB7XG4gICAgICBkcm9wZG93bk9wdGlvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGFjdGl2ZURyb3Bkb3duT3B0aW9uID09PSBkcm9wZG93bk9wdGlvbikge1xuICAgICAgZGVzZWxlY3REcm9wZG93bk9wdGlvbihkcm9wZG93bk9wdGlvbik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGFjdGl2ZURyb3Bkb3duT3B0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIGRyb3Bkb3duT3B0aW9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9O1xuXG4gIGNvbnN0IHJlZGlyZWN0VG9Gcm9udFBhZ2UgPSAoKSA9PiB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnaW5kZXguaHRtbCc7XG4gIH07XG5cbiAgY29uc3QgY2hhbXBpb25zUGFnZUNsaWNrRXZlbnRzID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgLyogSGVscGVyIGZ1bmN0aW9ucyBmb3IgY2xpY2sgZXZlbnRzICovXG4gICAgY29uc3QgY2hlY2tPcHRpb25zID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgYWxsQ2hhbXBpb25TdGF0cyA9IGF3YWl0IGdldEFsbENoYW1waW9uU3RhdHMoKTtcbiAgICAgIGNvbnN0IGFsbENoYW1waW9uRGV0YWlscyA9IGF3YWl0IGdldEFsbENoYW1waW9uRGV0YWlscygpO1xuICAgICAgYXdhaXQgY2hlY2tMYW5lRmlsdGVyT3B0aW9uKGFsbENoYW1waW9uU3RhdHMpO1xuICAgICAgY2hlY2tTb3J0aW5nT3B0aW9uKGFsbENoYW1waW9uU3RhdHMpO1xuICAgICAgY2hlY2tBY3RpdmVSb2xlT3B0aW9ucyhhbGxDaGFtcGlvbkRldGFpbHMpO1xuICAgICAgY2hlY2tBY3RpdmVEaWZmaWN1bHR5T3B0aW9ucyhhbGxDaGFtcGlvbkRldGFpbHMpO1xuICAgIH07XG5cbiAgICBjb25zdCBoaWRlQ2hhbXBpb25zU2VjdGlvbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGNoYW1waW9uc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb25zLXNlY3Rpb24nKTtcbiAgICAgIGNoYW1waW9uc1NlY3Rpb24uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIH07XG5cbiAgICBjb25zdCBzaG93Q2hhbXBpb25zU2VjdGlvbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGNoYW1waW9uc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb25zLXNlY3Rpb24nKTtcbiAgICAgIGNoYW1waW9uc1NlY3Rpb24uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICB9O1xuXG4gICAgY29uc3QgcmVtb3ZlQ2hhbXBpb25zUGFnZUxpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgY29uc3QgY2hhbXBpb25zUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGFtcGlvbnMtcGFnZScpO1xuICAgICAgY2hhbXBpb25zUGFnZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW1waW9uc1BhZ2VDbGlja0V2ZW50cyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZENoYW1waW9uc1BhZ2VMaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGNoYW1waW9uc1BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hhbXBpb25zLXBhZ2UnKTtcbiAgICAgIGNoYW1waW9uc1BhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFtcGlvbnNQYWdlQ2xpY2tFdmVudHMpO1xuICAgIH07XG5cbiAgICBjb25zdCBzaG93TG9hZGVyID0gKCkgPT4ge1xuICAgICAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlcicpO1xuICAgICAgbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH07XG5cbiAgICBjb25zdCBoaWRlTG9hZGVyID0gKCkgPT4ge1xuICAgICAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlcicpO1xuICAgICAgbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfTtcblxuICAgIGNvbnN0IGZpbHRlckFuZFNvcnRDaGFtcGlvbnNTZWN0aW9uID0gYXN5bmMgKHdhaXRUaW1lKSA9PiB7XG4gICAgICBoaWRlQ2hhbXBpb25zU2VjdGlvbigpO1xuICAgICAgc2hvd0xvYWRlcigpO1xuICAgICAgcmVtb3ZlQ2hhbXBpb25zUGFnZUxpc3RlbmVyKCk7XG4gICAgICBhd2FpdCBjaGVja09wdGlvbnMoKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzaG93Q2hhbXBpb25zU2VjdGlvbigpO1xuICAgICAgICBoaWRlTG9hZGVyKCk7XG4gICAgICB9LCB3YWl0VGltZSk7XG4gICAgICBhZGRDaGFtcGlvbnNQYWdlTGlzdGVuZXIoKTtcbiAgICB9O1xuXG4gICAgLyogY2xpY2sgZXZlbnQgcmVzcG9uc2VzICovXG4gICAgaWYgKEFycmF5LmZyb20oZXZlbnQudGFyZ2V0LmNsYXNzTGlzdCkuaW5jbHVkZXMoJ2Ryb3Bkb3duLWJ0bicpKSB7XG4gICAgICBkcm9wZG93bk9wdGlvbnNUb2dnbGUoZXZlbnQudGFyZ2V0KTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lID09PSAnY2hhbXBpb24tY29udGFpbmVyIHNob3duJykge1xuICAgICAgZGlzcGxheUNoYW1waW9uTW9kYWwoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pZCk7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lID09PSAnY2hhbXBpb24tY29udGFpbmVyIHNob3duJykge1xuICAgICAgZGlzcGxheUNoYW1waW9uTW9kYWwoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5kYXRhc2V0LmlkKTtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuZnJvbShldmVudC50YXJnZXQuY2xhc3NMaXN0KS5pbmNsdWRlcygnbXVsdGktc2VsZWN0JykpIHtcbiAgICAgIHRvZ2dsZURyb3Bkb3duT3B0aW9uKGV2ZW50LnRhcmdldCk7XG4gICAgICBmaWx0ZXJBbmRTb3J0Q2hhbXBpb25zU2VjdGlvbig2MDApO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5mcm9tKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QpLmluY2x1ZGVzKCdzaW5nbGUtc2VsZWN0JykpIHtcbiAgICAgIHNlbGVjdFNpbmdsZURyb3Bkb3duT3B0aW9uKGV2ZW50LnRhcmdldCk7XG4gICAgICBmaWx0ZXJBbmRTb3J0Q2hhbXBpb25zU2VjdGlvbigxMDAwKTtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuZnJvbShldmVudC50YXJnZXQuY2xhc3NMaXN0KS5pbmNsdWRlcygnaGVhZGVyLW9wdGlvbicpKSB7XG4gICAgICBzZWxlY3RMYW5lRmlsdGVyT3B0aW9uKGV2ZW50LnRhcmdldCk7XG4gICAgICBmaWx0ZXJBbmRTb3J0Q2hhbXBpb25zU2VjdGlvbig2MDApO1xuICAgIH1cblxuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnYXBwLW5hbWUnKSB7XG4gICAgICByZWRpcmVjdFRvRnJvbnRQYWdlKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNoYW1waW9uc1BhZ2VLZXlFdmVudHMgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IGFjdGl2ZUVsZW1lbnQgfSA9IGRvY3VtZW50O1xuXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQgJiYgYWN0aXZlRWxlbWVudC5jbGFzc05hbWUgPT09ICdjaGFtcGlvbi1jb250YWluZXIgc2hvd24nKSB7XG4gICAgICAgIGRpc3BsYXlDaGFtcGlvbk1vZGFsKGFjdGl2ZUVsZW1lbnQuZGF0YXNldC5pZCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhY3RpdmVFbGVtZW50ICYmIGFjdGl2ZUVsZW1lbnQuY2xhc3NOYW1lID09PSAnY2hhbXBpb24taW1nJykge1xuICAgICAgICBkaXNwbGF5Q2hhbXBpb25Nb2RhbChhY3RpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pZCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNoYW1waW9uc1BhZ2VMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgY2hhbXBpb25zUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGFtcGlvbnMtcGFnZScpO1xuICAgIGNoYW1waW9uc1BhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFtcGlvbnNQYWdlQ2xpY2tFdmVudHMpO1xuICAgIGNoYW1waW9uc1BhZ2UuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGNoYW1waW9uc1BhZ2VLZXlFdmVudHMpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY2hhbXBpb25zUGFnZUxpc3RlbmVycyxcbiAgICBkaXNwbGF5Q2hhbXBpb25Nb2RhbCxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IENoYW1waW9uc1BhZ2VDb250cm9sbGVyO1xuIiwiaW1wb3J0IGdldENoYW1waW9uU3RhdHMgZnJvbSAnLi4vY2hhbXBpb25EYXRhL2NoYW1waW9uU3RhdHMnO1xuaW1wb3J0IHsgY3JlYXRlQ2hhbXBpb25Db250YWluZXIgfSBmcm9tICcuLi90ZW1wbGF0ZXMvcmVuZGVySGVscGVycyc7XG5cbmNvbnN0IENoYW1waW9uRmlsdGVyID0gKCgpID0+IHtcbiAgY29uc3QgcmVuZGVyQWxsQ2hhbXBpb25zID0gYXN5bmMgKGFsbENoYW1waW9uU3RhdHMpID0+IHtcbiAgICBjb25zdCBjaGFtcGlvbnNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW1waW9ucy1zZWN0aW9uJyk7XG4gICAgYWxsQ2hhbXBpb25TdGF0cy5mb3JFYWNoKChjaGFtcGlvbikgPT4ge1xuICAgICAgY3JlYXRlQ2hhbXBpb25Db250YWluZXIoY2hhbXBpb24sIGNoYW1waW9uc1NlY3Rpb24pO1xuICAgIH0pO1xuICAgIHJldHVybiBjaGFtcGlvbnNTZWN0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyQ2hhbXBpb25zU2VjdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBjaGFtcGlvbnNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW1waW9ucy1zZWN0aW9uJyk7XG4gICAgY2hhbXBpb25zU2VjdGlvbi50ZXh0Q29udGVudCA9ICcnO1xuICB9O1xuXG4gIGNvbnN0IHNob3dDaGFtcGlvbiA9IChjaGFtcGlvbikgPT4ge1xuICAgIGNoYW1waW9uLmNsYXNzTGlzdC5hZGQoJ3Nob3duJyk7XG4gICAgY2hhbXBpb24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIH07XG5cbiAgY29uc3QgaGlkZUNoYW1waW9uID0gKGNoYW1waW9uKSA9PiB7XG4gICAgY2hhbXBpb24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgY2hhbXBpb24uY2xhc3NMaXN0LnJlbW92ZSgnc2hvd24nKTtcbiAgfTtcblxuICBjb25zdCBmaWx0ZXJCeUxhbmUgPSBhc3luYyAoY2xpY2tlZExhbmUsIGFsbENoYW1waW9uU3RhdHMpID0+IHtcbiAgICBjbGVhckNoYW1waW9uc1NlY3Rpb24oKTtcbiAgICBjb25zdCBjaGFtcGlvbnNTZWN0aW9uID0gYXdhaXQgcmVuZGVyQWxsQ2hhbXBpb25zKGFsbENoYW1waW9uU3RhdHMpO1xuICAgIGNoYW1waW9uc1NlY3Rpb24uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIGNvbnN0IGFsbENoYW1waW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFtcGlvbi1jb250YWluZXInKTtcbiAgICBpZiAoY2xpY2tlZExhbmUgPT09ICdhbGwnKSB7XG4gICAgICBhbGxDaGFtcGlvbnMuZm9yRWFjaCgoY2hhbXBpb24pID0+IHtcbiAgICAgICAgc2hvd0NoYW1waW9uKGNoYW1waW9uKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZXN1bHRzID0gW107XG4gICAgICBhbGxDaGFtcGlvbnMuZm9yRWFjaCgoY2hhbXBpb24pID0+IHtcbiAgICAgICAgY29uc3QgY2hhbXBpb25JZCA9IGNoYW1waW9uLmRhdGFzZXQuaWQ7XG4gICAgICAgIHJlc3VsdHMucHVzaChnZXRDaGFtcGlvblN0YXRzKGNoYW1waW9uSWQpKTtcbiAgICAgIH0pO1xuICAgICAgY29uc3QgY2hhbXBpb25TdGF0cyA9IGF3YWl0IFByb21pc2UuYWxsKHJlc3VsdHMpO1xuICAgICAgY2hhbXBpb25TdGF0cy5mb3JFYWNoKChjaGFtcGlvbikgPT4ge1xuICAgICAgICBjb25zdCBjaGFtcGlvbkxhbmUgPSBjaGFtcGlvbi5sYW5lO1xuICAgICAgICBjb25zdCBjaGFtcGlvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD0ke2NoYW1waW9uLmNoYW1waW9uSWR9XWApO1xuICAgICAgICBpZiAoY2hhbXBpb25MYW5lLnRvTG93ZXJDYXNlKCkgIT09IGNsaWNrZWRMYW5lKSB7XG4gICAgICAgICAgaGlkZUNoYW1waW9uKGNoYW1waW9uRWxlbWVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2hvd0NoYW1waW9uKGNoYW1waW9uRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBmaWx0ZXJCeVJvbGUgPSAoYWN0aXZlUm9sZXMsIGFsbENoYW1waW9uRGV0YWlscykgPT4ge1xuICAgIGNvbnN0IGNoYW1waW9uRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhbXBpb24tY29udGFpbmVyJyk7XG5cbiAgICBjaGFtcGlvbkVsZW1lbnRzLmZvckVhY2goKGNoYW1waW9uKSA9PiB7XG4gICAgICBsZXQgcm9sZU1hdGNoRm91bmQgPSBmYWxzZTtcbiAgICAgIGFjdGl2ZVJvbGVzLmZvckVhY2goKHJvbGUpID0+IHtcbiAgICAgICAgY29uc3QgY2hhbXBpb25Sb2xlcyA9IGFsbENoYW1waW9uRGV0YWlsc1tjaGFtcGlvbi5kYXRhc2V0LmlkXS50YWdzO1xuICAgICAgICBjaGFtcGlvblJvbGVzLmZvckVhY2goKGNoYW1waW9uUm9sZSkgPT4ge1xuICAgICAgICAgIGlmIChjaGFtcGlvblJvbGUudG9Mb3dlckNhc2UoKSA9PT0gcm9sZSkge1xuICAgICAgICAgICAgcm9sZU1hdGNoRm91bmQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIGlmICghcm9sZU1hdGNoRm91bmQpIHtcbiAgICAgICAgaGlkZUNoYW1waW9uKGNoYW1waW9uKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBjYXRlZ29yaXNlRGlmZmljdWx0eU51bSA9IChkaWZmaWN1bHR5TnVtKSA9PiB7XG4gICAgaWYgKGRpZmZpY3VsdHlOdW0gPD0gMykge1xuICAgICAgcmV0dXJuICdsb3cnO1xuICAgIH1cblxuICAgIGlmIChkaWZmaWN1bHR5TnVtIDw9IDYpIHtcbiAgICAgIHJldHVybiAnbWVkaXVtJztcbiAgICB9XG5cbiAgICByZXR1cm4gJ2hpZ2gnO1xuICB9O1xuXG4gIGNvbnN0IGZpbHRlckJ5RGlmZmljdWx0eSA9IGFzeW5jIChhY3RpdmVEaWZmaWN1bHRpZXMsIGFsbENoYW1waW9uRGV0YWlscykgPT4ge1xuICAgIGNvbnN0IGNoYW1waW9uRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhbXBpb24tY29udGFpbmVyJyk7XG5cbiAgICBjaGFtcGlvbkVsZW1lbnRzLmZvckVhY2goKGNoYW1waW9uKSA9PiB7XG4gICAgICBsZXQgZGlmZmljdWx0eU1hdGNoRm91bmQgPSBmYWxzZTtcbiAgICAgIGFjdGl2ZURpZmZpY3VsdGllcy5mb3JFYWNoKChkaWZmaWN1bHR5KSA9PiB7XG4gICAgICAgIGNvbnN0IGNoYW1waW9uRGlmZmljdWx0eU51bSA9IGFsbENoYW1waW9uRGV0YWlsc1tjaGFtcGlvbi5kYXRhc2V0LmlkXS5pbmZvLmRpZmZpY3VsdHk7XG4gICAgICAgIGNvbnN0IGNoYW1waW9uRGlmZmljdWx0eSA9IGNhdGVnb3Jpc2VEaWZmaWN1bHR5TnVtKGNoYW1waW9uRGlmZmljdWx0eU51bSk7XG5cbiAgICAgICAgaWYgKGRpZmZpY3VsdHkudG9Mb3dlckNhc2UoKSA9PT0gY2hhbXBpb25EaWZmaWN1bHR5KSB7XG4gICAgICAgICAgZGlmZmljdWx0eU1hdGNoRm91bmQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmICghZGlmZmljdWx0eU1hdGNoRm91bmQpIHtcbiAgICAgICAgaGlkZUNoYW1waW9uKGNoYW1waW9uKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGZpbHRlckJ5TGFuZSxcbiAgICBmaWx0ZXJCeVJvbGUsXG4gICAgZmlsdGVyQnlEaWZmaWN1bHR5LFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhbXBpb25GaWx0ZXI7XG4iLCJpbXBvcnQgQ2hhbXBpb25zUGFnZUNvbnRyb2xsZXIgZnJvbSAnLi9jaGFtcGlvbnNQYWdlQ29udHJvbGxlcic7XG5cbmNvbnN0IFNlYXJjaGJhckNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBjb25zdCBzaG93QXV0b0NvbXBsZXRlTmFtZXMgPSAoc2VhcmNoQ29udGFpbmVyKSA9PiB7XG4gICAgY29uc3QgYXV0b0NvbXBsZXRlTmFtZXMgPSBzZWFyY2hDb250YWluZXIucXVlcnlTZWxlY3RvcignLmF1dG8tY29tcGxldGUtbmFtZXMnKTtcbiAgICBhdXRvQ29tcGxldGVOYW1lcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfTtcblxuICBjb25zdCBoaWRlQXV0b0NvbXBsZXRlTmFtZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgYXV0b0NvbXBsZXRlTmFtZUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmF1dG8tY29tcGxldGUtbmFtZXMnKTtcbiAgICBhdXRvQ29tcGxldGVOYW1lRWxlbWVudHMuZm9yRWFjaCgoYXV0b0NvbXBsZXRlTmFtZUVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGF1dG9Db21wbGV0ZU5hbWVzID0gYXV0b0NvbXBsZXRlTmFtZUVsZW1lbnQ7XG4gICAgICBhdXRvQ29tcGxldGVOYW1lcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHNlYXJjaGJhckZvY3VzSW5FdmVudCA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnc2VhcmNoJykge1xuICAgICAgY29uc3Qgc2VhcmNoQ29udGFpbmVyID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICBzaG93QXV0b0NvbXBsZXRlTmFtZXMoc2VhcmNoQ29udGFpbmVyKTtcbiAgICAgIGV2ZW50LnRhcmdldC5mb2N1cygpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZWFyY2hiYXJGb2N1c291dEV2ZW50ID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKCFldmVudC5yZWxhdGVkVGFyZ2V0IHx8IChldmVudC5yZWxhdGVkVGFyZ2V0LmNsYXNzTmFtZSAhPT0gJ2F1dG8tY29tcGxldGUtbmFtZS13cmFwcGVyJyAmJiBldmVudC5yZWxhdGVkVGFyZ2V0LmNsYXNzTmFtZSAhPT0gJ3NlYXJjaCcpKSB7XG4gICAgICBoaWRlQXV0b0NvbXBsZXRlTmFtZXMoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2VhcmNoQmFySW5wdXRFdmVudCA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnc2VhcmNoJykge1xuICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgIGNvbnN0IGF1dG9Db21wbGV0ZU5hbWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmF1dG8tY29tcGxldGUtbmFtZScpO1xuICAgICAgYXV0b0NvbXBsZXRlTmFtZXMuZm9yRWFjaCgoYXV0b0NvbXBsZXRlTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBuYW1lID0gYXV0b0NvbXBsZXRlTmFtZTtcbiAgICAgICAgaWYgKG5hbWUuaWQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgICAgbmFtZS5wYXJlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5hbWUucGFyZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2VhcmNoYmFyS2V5ZG93bkV2ZW50cyA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGlmICgoZXZlbnQua2V5ID09PSAnQXJyb3dEb3duJyB8fCBldmVudC5rZXkgPT09ICdBcnJvd1VwJykgJiYgZXZlbnQudGFyZ2V0ICE9PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykpIHtcbiAgICAgIGxldCB7IGFjdGl2ZUVsZW1lbnQgfSA9IGRvY3VtZW50O1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgbGV0IGdvVG9TdGFydDtcbiAgICAgIGNvbnN0IGFjdGlvbiA9IHtcbiAgICAgICAgQXJyb3dVcDogJ3ByZXZpb3VzJywgQXJyb3dEb3duOiAnbmV4dCcsXG4gICAgICB9O1xuXG4gICAgICBpZiAoYWN0aXZlRWxlbWVudC5jbGFzc05hbWUgPT09ICdzZWFyY2gnICYmIGV2ZW50LmtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgICAgYWN0aXZlRWxlbWVudCA9IGFjdGl2ZUVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICAvKiBTa2lwcyBhdXRvY29tcGxldGUgbmFtZXMgd2hpY2ggYXJlIGN1cnJlbnRseSBub3QgZGlzcGxheWVkICovXG4gICAgICAgIHdoaWxlIChhY3RpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgPSBhY3RpdmVFbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgfVxuICAgICAgICBhY3RpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY3RpdmVFbGVtZW50ID0gYWN0aXZlRWxlbWVudFtgJHthY3Rpb25bZXZlbnQua2V5XX1FbGVtZW50U2libGluZ2BdO1xuICAgICAgICB3aGlsZSAoYWN0aXZlRWxlbWVudCAmJiBhY3RpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgPSBhY3RpdmVFbGVtZW50W2Ake2FjdGlvbltldmVudC5rZXldfUVsZW1lbnRTaWJsaW5nYF07XG4gICAgICAgIH1cbiAgICAgICAgLyogQ2hlY2tzIHdoaWNoIHNlYXJjaCBiYXIgZHJvcGRvd24gaXMgY3VycmVudGx5IGRpc3BsYXllZCAqL1xuICAgICAgICBjb25zdCBhdXRvQ29tcGxldGVOYW1lRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXV0by1jb21wbGV0ZS1uYW1lcycpO1xuICAgICAgICBjb25zdCBhdXRvQ29tcGxldGVOYW1lcyA9IEFycmF5LmZyb20oYXV0b0NvbXBsZXRlTmFtZUVsZW1lbnRzKS5maWx0ZXIoXG4gICAgICAgICAgKGF1dG9Db21wbGV0ZU5hbWVFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc1Nob3dpbmcgPSBhdXRvQ29tcGxldGVOYW1lRWxlbWVudC5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snO1xuICAgICAgICAgICAgcmV0dXJuIGlzU2hvd2luZztcbiAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgICAgICBpZiAoYXV0b0NvbXBsZXRlTmFtZXNbMF0gIT09IHVuZGVmaW5lZCAmJiAhYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgIC8qIFJldHVybnMgdG8gdGhlIHN0YXJ0IG9yIHRoZSBlbmQgb2YgdGhlIGRyb3Bkb3duIHdoZW4gYW4gYXJyb3cga2V5IGlzIHByZXNzZWQgKi9cbiAgICAgICAgICBnb1RvU3RhcnQgPSBhY3Rpb25bZXZlbnQua2V5XSA9PT0gJ25leHQnIHx8IGV2ZW50LmtleSA9PT0gJ0hvbWUnO1xuICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgPSBhdXRvQ29tcGxldGVOYW1lc1swXS5jaGlsZHJlbltcbiAgICAgICAgICAgIGdvVG9TdGFydCA/IDAgOiBhdXRvQ29tcGxldGVOYW1lc1swXS5jaGlsZHJlbi5sZW5ndGggLSAxXG4gICAgICAgICAgXTtcbiAgICAgICAgICB3aGlsZSAoYWN0aXZlRWxlbWVudCAmJiBhY3RpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgICAgYWN0aXZlRWxlbWVudCA9IGFjdGl2ZUVsZW1lbnRbYCR7YWN0aW9uW2V2ZW50LmtleV19RWxlbWVudFNpYmxpbmdgXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICBhY3RpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBjb25zdCB7IGFjdGl2ZUVsZW1lbnQgfSA9IGRvY3VtZW50O1xuICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQgJiYgYWN0aXZlRWxlbWVudC5jbGFzc05hbWUgPT09ICdhdXRvLWNvbXBsZXRlLW5hbWUtd3JhcHBlcicpIHtcbiAgICAgICAgY29uc3Qgc2VhcmNoQ29udGFpbmVyQ2xhc3NOYW1lID0gYWN0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0WzFdO1xuICAgICAgICBjb25zdCBhdXRvQ29tcGxldGVOYW1lID0gYWN0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcblxuICAgICAgICAvKiBDaGVja3Mgd2hpY2ggcGFnZSB0aGUgc2VhcmNoIGJhciBpcyBvbiAqL1xuICAgICAgICBpZiAoc2VhcmNoQ29udGFpbmVyQ2xhc3NOYW1lID09PSAnZGVza3RvcC1zZWFyY2gtY29udGFpbmVyJ1xuICAgICAgICAgICAgfHwgc2VhcmNoQ29udGFpbmVyQ2xhc3NOYW1lID09PSAnbW9iaWxlLXNlYXJjaC1jb250YWluZXInKSB7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NoYW1waW9uSWQnLCBhdXRvQ29tcGxldGVOYW1lLmRhdGFzZXQuY2hhbXBpb25JZCk7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnY2hhbXBpb25zLmh0bWwnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGF3YWl0IENoYW1waW9uc1BhZ2VDb250cm9sbGVyLmRpc3BsYXlDaGFtcGlvbk1vZGFsKGF1dG9Db21wbGV0ZU5hbWUuZGF0YXNldC5jaGFtcGlvbklkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZWFyY2hiYXJDbGlja0V2ZW50cyA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGNvbnN0IGNsaWNrQXV0b0NvbXBsZXRlTmFtZSA9IGFzeW5jIChzZWFyY2hDb250YWluZXJDbGFzc05hbWUsIGF1dG9Db21wbGV0ZU5hbWUpID0+IHtcbiAgICAgIGlmIChzZWFyY2hDb250YWluZXJDbGFzc05hbWUgPT09ICdkZXNrdG9wLXNlYXJjaC1jb250YWluZXInXG4gICAgICB8fCBzZWFyY2hDb250YWluZXJDbGFzc05hbWUgPT09ICdtb2JpbGUtc2VhcmNoLWNvbnRhaW5lcicpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NoYW1waW9uSWQnLCBhdXRvQ29tcGxldGVOYW1lLmRhdGFzZXQuY2hhbXBpb25JZCk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ2NoYW1waW9ucy5odG1sJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF3YWl0IENoYW1waW9uc1BhZ2VDb250cm9sbGVyLmRpc3BsYXlDaGFtcGlvbk1vZGFsKGF1dG9Db21wbGV0ZU5hbWUuZGF0YXNldC5jaGFtcGlvbklkKTtcbiAgICAgICAgY29uc3QgYXV0b0NvbXBsZXRlTmFtZUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmF1dG8tY29tcGxldGUtbmFtZXMnKTtcbiAgICAgICAgYXV0b0NvbXBsZXRlTmFtZUVsZW1lbnRzLmZvckVhY2goKGF1dG9Db21wbGV0ZU5hbWVFbGVtZW50KSA9PiB7XG4gICAgICAgICAgY29uc3QgYXV0b0NvbXBsZXRlTmFtZXMgPSBhdXRvQ29tcGxldGVOYW1lRWxlbWVudDtcbiAgICAgICAgICBhdXRvQ29tcGxldGVOYW1lcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IHNlYXJjaENvbnRhaW5lciA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdhdXRvLWNvbXBsZXRlLW5hbWUtd3JhcHBlcicpIHtcbiAgICAgIGNvbnN0IHNlYXJjaENvbnRhaW5lckNsYXNzTmFtZSA9IHNlYXJjaENvbnRhaW5lci5jbGFzc0xpc3RbMV07XG4gICAgICBjb25zdCBhdXRvQ29tcGxldGVOYW1lID0gZXZlbnQudGFyZ2V0LmZpcnN0Q2hpbGQ7XG4gICAgICBjbGlja0F1dG9Db21wbGV0ZU5hbWUoc2VhcmNoQ29udGFpbmVyQ2xhc3NOYW1lLCBhdXRvQ29tcGxldGVOYW1lKTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2F1dG8tY29tcGxldGUtbmFtZScpIHtcbiAgICAgIGNvbnN0IHNlYXJjaENvbnRhaW5lckNsYXNzTmFtZSA9IHNlYXJjaENvbnRhaW5lci5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdFsxXTtcbiAgICAgIGNvbnN0IGF1dG9Db21wbGV0ZU5hbWUgPSBldmVudC50YXJnZXQ7XG4gICAgICBjbGlja0F1dG9Db21wbGV0ZU5hbWUoc2VhcmNoQ29udGFpbmVyQ2xhc3NOYW1lLCBhdXRvQ29tcGxldGVOYW1lKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2VhcmNoQ29udGFpbmVyTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIC8vIGNvbnN0IHNlYXJjaENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtY29udGFpbmVyJyk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIHNlYXJjaGJhckZvY3VzSW5FdmVudCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBzZWFyY2hiYXJGb2N1c291dEV2ZW50KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHNlYXJjaEJhcklucHV0RXZlbnQpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBzZWFyY2hiYXJLZXlkb3duRXZlbnRzKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlYXJjaGJhckNsaWNrRXZlbnRzKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHNlYXJjaENvbnRhaW5lckxpc3RlbmVycyxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaGJhckNvbnRyb2xsZXI7XG4iLCJpbXBvcnQgeyBjcmVhdGVDaGFtcGlvbkNvbnRhaW5lciB9IGZyb20gJy4uL3RlbXBsYXRlcy9yZW5kZXJIZWxwZXJzJztcblxuY29uc3QgU29ydENoYW1waW9ucyA9ICgoKSA9PiB7XG4gIGNvbnN0IGNsZWFyQ2hhbXBpb25zU2VjdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBjaGFtcGlvbnNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW1waW9ucy1zZWN0aW9uJyk7XG4gICAgY2hhbXBpb25zU2VjdGlvbi5zdHlsZS52aXNpYmxpdHkgPSAnaGlkZGVuJztcbiAgICBjaGFtcGlvbnNTZWN0aW9uLnRleHRDb250ZW50ID0gJyc7XG4gIH07XG5cbiAgY29uc3QgcmVjcmVhdGVDaGFtcGlvbnNTZWN0aW9uID0gKGNoYW1waW9ucykgPT4ge1xuICAgIGNvbnN0IGNoYW1waW9uc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb25zLXNlY3Rpb24nKTtcbiAgICBjaGFtcGlvbnMuZm9yRWFjaCgoY2hhbXBpb24pID0+IHtcbiAgICAgIGNyZWF0ZUNoYW1waW9uQ29udGFpbmVyKGNoYW1waW9uLCBjaGFtcGlvbnNTZWN0aW9uKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBmaWx0ZXJDaGFtcGlvbnMgPSAoYWxsQ2hhbXBpb25TdGF0cykgPT4ge1xuICAgIGNvbnN0IGZpbHRlcmVkQ2hhbXBpb25TdGF0cyA9IGFsbENoYW1waW9uU3RhdHMuZmlsdGVyKChjaGFtcGlvblN0YXRzKSA9PiB7XG4gICAgICBjb25zdCBjaGFtcGlvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD0ke2NoYW1waW9uU3RhdHMuaWR9XWApO1xuICAgICAgcmV0dXJuIGNoYW1waW9uRWxlbWVudC5jbGFzc05hbWUgPT09ICdjaGFtcGlvbi1jb250YWluZXIgc2hvd24nO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpbHRlcmVkQ2hhbXBpb25TdGF0cztcbiAgfTtcblxuICBjb25zdCBzb3J0Q2hhbXBpb25zQnlXaW5yYXRlID0gKGFsbENoYW1waW9uU3RhdHMpID0+IHtcbiAgICBjb25zdCBmaWx0ZXJlZENoYW1waW9uU3RhdHMgPSBmaWx0ZXJDaGFtcGlvbnMoYWxsQ2hhbXBpb25TdGF0cyk7XG4gICAgY29uc3QgZmlsdGVyZWRDaGFtcGlvbnNTb3J0ZWQgPSBmaWx0ZXJlZENoYW1waW9uU3RhdHMuc29ydCgoYSwgYikgPT4gYi53aW5SYXRlIC0gYS53aW5SYXRlKTtcbiAgICBjbGVhckNoYW1waW9uc1NlY3Rpb24oKTtcbiAgICByZWNyZWF0ZUNoYW1waW9uc1NlY3Rpb24oZmlsdGVyZWRDaGFtcGlvbnNTb3J0ZWQpO1xuICAgIHJldHVybiBmaWx0ZXJlZENoYW1waW9uc1NvcnRlZDtcbiAgfTtcblxuICBjb25zdCBzb3J0Q2hhbXBpb25zQnlQaWNrcmF0ZSA9IChhbGxDaGFtcGlvblN0YXRzKSA9PiB7XG4gICAgY29uc3QgZmlsdGVyZWRDaGFtcGlvblN0YXRzID0gZmlsdGVyQ2hhbXBpb25zKGFsbENoYW1waW9uU3RhdHMpO1xuICAgIGNvbnN0IGZpbHRlcmVkQ2hhbXBpb25zU29ydGVkID0gZmlsdGVyZWRDaGFtcGlvblN0YXRzLnNvcnQoKGEsIGIpID0+IGIucGlja1JhdGUgLSBhLnBpY2tSYXRlKTtcbiAgICBjbGVhckNoYW1waW9uc1NlY3Rpb24oKTtcbiAgICByZWNyZWF0ZUNoYW1waW9uc1NlY3Rpb24oZmlsdGVyZWRDaGFtcGlvbnNTb3J0ZWQpO1xuICAgIHJldHVybiBmaWx0ZXJlZENoYW1waW9uc1NvcnRlZDtcbiAgfTtcblxuICBjb25zdCBzb3J0Q2hhbXBpb25zQnlEYW1hZ2VEb25lID0gKGFsbENoYW1waW9uU3RhdHMpID0+IHtcbiAgICBjb25zdCBmaWx0ZXJlZENoYW1waW9uU3RhdHMgPSBmaWx0ZXJDaGFtcGlvbnMoYWxsQ2hhbXBpb25TdGF0cyk7XG5cbiAgICBjb25zdCBmaWx0ZXJlZENoYW1waW9uc1NvcnRlZCA9IGZpbHRlcmVkQ2hhbXBpb25TdGF0cy5zb3J0KFxuICAgICAgKGEsIGIpID0+IGIuZGFtYWdlUGVyTWF0Y2gudG90YWxEYW1hZ2UudmFsdWUgLSBhLmRhbWFnZVBlck1hdGNoLnRvdGFsRGFtYWdlLnZhbHVlLFxuICAgICk7XG4gICAgY2xlYXJDaGFtcGlvbnNTZWN0aW9uKCk7XG4gICAgcmVjcmVhdGVDaGFtcGlvbnNTZWN0aW9uKGZpbHRlcmVkQ2hhbXBpb25zU29ydGVkKTtcbiAgICByZXR1cm4gZmlsdGVyZWRDaGFtcGlvbnNTb3J0ZWQ7XG4gIH07XG5cbiAgY29uc3Qgc29ydEJ5RGVmYXVsdE9yZGVyID0gKGFsbENoYW1waW9uU3RhdHMpID0+IHtcbiAgICBjb25zdCBmaWx0ZXJlZENoYW1waW9uU3RhdHMgPSBhbGxDaGFtcGlvblN0YXRzLmZpbHRlcigoY2hhbXBpb25TdGF0cykgPT4ge1xuICAgICAgY29uc3QgY2hhbXBpb25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9JHtjaGFtcGlvblN0YXRzLmlkfV1gKTtcbiAgICAgIGlmIChjaGFtcGlvbkVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNoYW1waW9uRWxlbWVudC5jbGFzc05hbWUgPT09ICdjaGFtcGlvbi1jb250YWluZXIgc2hvd24nO1xuICAgIH0pO1xuICAgIGNsZWFyQ2hhbXBpb25zU2VjdGlvbigpO1xuICAgIHJlY3JlYXRlQ2hhbXBpb25zU2VjdGlvbihmaWx0ZXJlZENoYW1waW9uU3RhdHMpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc29ydENoYW1waW9uc0J5V2lucmF0ZSxcbiAgICBzb3J0Q2hhbXBpb25zQnlQaWNrcmF0ZSxcbiAgICBzb3J0Q2hhbXBpb25zQnlEYW1hZ2VEb25lLFxuICAgIHNvcnRCeURlZmF1bHRPcmRlcixcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFNvcnRDaGFtcGlvbnM7XG4iLCJjb25zdCBmZXRjaENoYW1waW9uRGV0YWlscyA9IGFzeW5jIChjaGFtcGlvbklkLCBsYXRlc3RWZXJzaW9uKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi8ke2xhdGVzdFZlcnNpb259L2RhdGEvZW5fVVMvY2hhbXBpb24vJHtjaGFtcGlvbklkfS5qc29uYCwgeyBtb2RlOiAnY29ycycgfSk7XG4gIGNvbnN0IGNoYW1waW9ucyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgY29uc3QgY2hhbXBpb25EZXRhaWxzID0gY2hhbXBpb25zLmRhdGFbY2hhbXBpb25JZF07XG5cbiAgcmV0dXJuIGNoYW1waW9uRGV0YWlscztcbn07XG5cbmNvbnN0IGdldENoYW1waW9uUGFzc2l2ZXMgPSAoY2hhbXBpb25EZXRhaWxzLCBsYXRlc3RWZXJzaW9uKSA9PiB7XG4gIGNvbnN0IHBhc3NpdmVEYXRhID0gY2hhbXBpb25EZXRhaWxzLnBhc3NpdmU7XG4gIGNvbnN0IHBhc3NpdmVOYW1lID0gcGFzc2l2ZURhdGEubmFtZTtcbiAgY29uc3QgcGFzc2l2ZURlc2NyaXB0aW9uID0gcGFzc2l2ZURhdGEuZGVzY3JpcHRpb247XG4gIGNvbnN0IHBhc3NpdmVJZCA9IHBhc3NpdmVEYXRhLmltYWdlLmZ1bGw7XG4gIGNvbnN0IHBhc3NpdmVJbWdVcmwgPSBgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLyR7bGF0ZXN0VmVyc2lvbn0vaW1nL3Bhc3NpdmUvJHtwYXNzaXZlSWR9YDtcblxuICByZXR1cm4ge1xuICAgIHBhc3NpdmVOYW1lLFxuICAgIHBhc3NpdmVEZXNjcmlwdGlvbixcbiAgICBwYXNzaXZlSW1nVXJsLFxuICB9O1xufTtcblxuY29uc3QgZ2V0Q2hhbXBpb25TcGVsbHMgPSAoY2hhbXBpb25EZXRhaWxzLCBsYXRlc3RWZXJzaW9uKSA9PiB7XG4gIGNvbnN0IHNwZWxsc0RhdGEgPSBjaGFtcGlvbkRldGFpbHMuc3BlbGxzO1xuICBjb25zdCBzcGVsbHMgPSBbXTtcblxuICBzcGVsbHNEYXRhLmZvckVhY2goKHNwZWxsKSA9PiB7XG4gICAgY29uc3Qgc3BlbGxPYmplY3QgPSB7XG4gICAgICBuYW1lOiBzcGVsbC5uYW1lLFxuICAgICAgaWQ6IHNwZWxsLmlkLFxuICAgICAgZGVzY3JpcHRpb246IHNwZWxsLmRlc2NyaXB0aW9uLFxuICAgICAgY29zdEJ1cm46IHNwZWxsLmNvc3RCdXJuLFxuICAgICAgY29zdFR5cGU6IHNwZWxsLmNvc3RUeXBlLFxuICAgICAgY29vbGRvd246IHNwZWxsLmNvb2xkb3duQnVybixcbiAgICAgIGltZ1VybDogYGh0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi8ke2xhdGVzdFZlcnNpb259L2ltZy9zcGVsbC8ke3NwZWxsLmlkfS5wbmdgLFxuICAgIH07XG4gICAgc3BlbGxzLnB1c2goc3BlbGxPYmplY3QpO1xuICB9KTtcblxuICByZXR1cm4gc3BlbGxzO1xufTtcblxuY29uc3QgZ2V0Q2hhbXBpb25EZXRhaWxzID0gYXN5bmMgKGNoYW1waW9uSWQsIGxhdGVzdFZlcnNpb24pID0+IHtcbiAgY29uc3QgY2hhbXBpb25EZXRhaWxzID0gYXdhaXQgZmV0Y2hDaGFtcGlvbkRldGFpbHMoY2hhbXBpb25JZCwgbGF0ZXN0VmVyc2lvbik7XG4gIGNvbnN0IGNoYW1waW9uUGFzc2l2ZSA9IGdldENoYW1waW9uUGFzc2l2ZXMoY2hhbXBpb25EZXRhaWxzLCBsYXRlc3RWZXJzaW9uKTtcbiAgY29uc3Qgc3BlbGxzID0gZ2V0Q2hhbXBpb25TcGVsbHMoY2hhbXBpb25EZXRhaWxzLCBsYXRlc3RWZXJzaW9uKTtcblxuICAvLyBNYWtlIGZpcnN0IGxldHRlciBvZiB0aGUgY2hhbXBpb24gdGl0bGUgYSBjYXBpdGFsIGxldHRlci5cbiAgY29uc3QgY2hhbXBpb25UaXRsZSA9IGNoYW1waW9uRGV0YWlscy50aXRsZS5yZXBsYWNlKFxuICAgIGNoYW1waW9uRGV0YWlscy50aXRsZVswXSwgY2hhbXBpb25EZXRhaWxzLnRpdGxlWzBdLnRvVXBwZXJDYXNlKCksXG4gICk7XG5cbiAgaWYgKGNoYW1waW9uRGV0YWlscy5wYXJ0eXBlID09PSAnTm9uZScpIHtcbiAgICBjaGFtcGlvbkRldGFpbHMucGFydHlwZSA9ICdNYW5hbGVzcyc7XG4gIH1cblxuICBpZiAoY2hhbXBpb25EZXRhaWxzLmlkID09PSAnQWtzaGFuJykge1xuICAgIGNoYW1waW9uRGV0YWlscy5hbGx5dGlwc1swXSA9ICdZb3UgY2Fu4oCZdCB1c2UgY29uc3VtYWJsZXMgbGlrZSBwb3Rpb25zIGR1cmluZyB5b3VyIENvbWV1cHBhbmNlLCBtYWtlIHN1cmUgdG8gdXNlIHRoZW0gYmVmb3JlIGNoYW5uZWxpbmcuJztcbiAgfVxuXG4gIGlmIChjaGFtcGlvbkRldGFpbHMuaWQgPT09ICdWZXgnKSB7XG4gICAgY2hhbXBpb25EZXRhaWxzLmFsbHl0aXBzLnB1c2goJ1ZleCBpcyBncmVhdCBhdCBkaXZpbmcgaW50byB0aGUgYmFja2xpbmUsIGJ1dCBoZXIgZXNjYXBlIHBvdGVudGlhbCBpcyBsb3cgc28gdGltaW5nIGlzIGtleS4nKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmFtZTogY2hhbXBpb25EZXRhaWxzLm5hbWUsXG4gICAgaWQ6IGNoYW1waW9uRGV0YWlscy5pZCxcbiAgICB0aXRsZTogY2hhbXBpb25UaXRsZSxcbiAgICBsb3JlOiBjaGFtcGlvbkRldGFpbHMubG9yZSxcbiAgICByb2xlczogY2hhbXBpb25EZXRhaWxzLnRhZ3MsXG4gICAgc2tpbnM6IGNoYW1waW9uRGV0YWlscy5za2lucyxcbiAgICByZXNvdXJjZTogY2hhbXBpb25EZXRhaWxzLnBhcnR5cGUsXG4gICAgcGFzc2l2ZTogY2hhbXBpb25QYXNzaXZlLFxuICAgIHNwZWxscyxcbiAgICB0aXBzOiBjaGFtcGlvbkRldGFpbHMuYWxseXRpcHMsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRDaGFtcGlvbkRldGFpbHM7XG4iLCJjb25zdCBmZXRjaENoYW1waW9uU3RhdHMgPSBhc3luYyAoY2hhbXBpb25JZCkgPT4ge1xuICAvKiBSZWxhdGl2ZSB1cmxzIGFyZSB1c2VkIGZvciB3aGVuIHRoZSBhcHAgaXMgaW4gcHJvZHVjdGlvbiBhbmQgbG9jYWxob3N0IHVybCBmb3IgZGV2ZWxvcG1lbnQgKi9cbiAgY29uc3QgZGV2VXJsID0gJ2h0dHA6Ly8xMjcuMC4wLjE6NTUwMC9mcm9udGVuZC9kaXN0L2NoYW1waW9ucy5odG1sJztcbiAgY29uc3QgcmVzcG9uc2UgPSB3aW5kb3cubG9jYXRpb24uaHJlZiA9PT0gZGV2VXJsXG4gICAgPyBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxLyR7Y2hhbXBpb25JZH1gLCB7IG1vZGU6ICdjb3JzJyB9KVxuICAgIDogYXdhaXQgZmV0Y2goYCR7Y2hhbXBpb25JZH1gLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgY29uc3QgY2hhbXBpb25TdGF0cyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICByZXR1cm4gY2hhbXBpb25TdGF0cztcbn07XG5cbmNvbnN0IGdldENoYW1waW9uU3RhdHMgPSBhc3luYyAoY2hhbXBpb25JZCkgPT4ge1xuICBjb25zdCBjaGFtcGlvblN0YXRzID0gYXdhaXQgZmV0Y2hDaGFtcGlvblN0YXRzKGNoYW1waW9uSWQpO1xuICBjb25zdCB3aW5SYXRlID0gY2hhbXBpb25TdGF0cy53aW5SYXRlLnRvRml4ZWQoMik7XG4gIGNvbnN0IHBpY2tSYXRlID0gY2hhbXBpb25TdGF0cy5waWNrUmF0ZS50b0ZpeGVkKDIpO1xuICBjb25zdCBsYW5lID0gY2hhbXBpb25TdGF0cy5sYW5lWzBdICsgY2hhbXBpb25TdGF0cy5sYW5lLnN1YnN0cmluZygxKS50b0xvd2VyQ2FzZSgpO1xuXG4gIHJldHVybiB7XG4gICAgY2hhbXBpb25JZCxcbiAgICBrZGE6IGNoYW1waW9uU3RhdHMua2RhUmF0aW8sXG4gICAgZGFtYWdlUGVyTWF0Y2g6IGNoYW1waW9uU3RhdHMuZGFtYWdlUGVyTWF0Y2gsXG4gICAgaXRlbVNldHM6IGNoYW1waW9uU3RhdHMuaXRlbUNob2ljZXMuc2xpY2UoMSksXG4gICAgYmVzdE1hdGNoVXBzOiBjaGFtcGlvblN0YXRzLm1hdGNoVXBzLmJlc3RNYXRjaFVwcyxcbiAgICB3b3JzdE1hdGNoVXBzOiBjaGFtcGlvblN0YXRzLm1hdGNoVXBzLndvcnN0TWF0Y2hVcHMsXG4gICAgd2luUmF0ZSxcbiAgICBwaWNrUmF0ZSxcbiAgICBsYW5lLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0Q2hhbXBpb25TdGF0cztcbiIsImNvbnN0IGdldEFsbENoYW1waW9uRGV0YWlscyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgdmVyc2lvbnNSZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9hcGkvdmVyc2lvbnMuanNvbicpO1xuICBjb25zdCB2ZXJzaW9ucyA9IGF3YWl0IHZlcnNpb25zUmVzcG9uc2UuanNvbigpO1xuICBjb25zdCBsYXRlc3RWZXJzaW9uID0gdmVyc2lvbnNbMF07XG4gIGNvbnN0IGNoYW1waW9uc1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi8ke2xhdGVzdFZlcnNpb259L2RhdGEvZW5fVVMvY2hhbXBpb24uanNvbmApO1xuICBjb25zdCBhbGxDaGFtcGlvbnMgPSBhd2FpdCBjaGFtcGlvbnNSZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIGFsbENoYW1waW9ucy5kYXRhO1xufTtcblxuY29uc3QgZ2V0QWxsQ2hhbXBpb25TdGF0cyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZGV2VXJsID0gJ2h0dHA6Ly8xMjcuMC4wLjE6NTUwMC9mcm9udGVuZC9kaXN0L2NoYW1waW9ucy5odG1sJztcbiAgY29uc3QgcmVzcG9uc2UgPSB3aW5kb3cubG9jYXRpb24uaHJlZiA9PT0gZGV2VXJsXG4gICAgPyBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2NoYW1waW9ucycsIHsgbW9kZTogJ2NvcnMnIH0pXG4gICAgOiBhd2FpdCBmZXRjaCgnY2hhbXBpb25zJywgeyBtb2RlOiAnY29ycycgfSk7XG4gIGNvbnN0IGFsbENoYW1waW9uU3RhdHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIGFsbENoYW1waW9uU3RhdHM7XG59O1xuXG5leHBvcnQge1xuICBnZXRBbGxDaGFtcGlvbkRldGFpbHMsXG4gIGdldEFsbENoYW1waW9uU3RhdHMsXG59O1xuIiwiLyogUmV0cml2ZXMgdGhlIGxhdGVzdCBzdGF0aWMgZGF0YSBhdmFsaWFibGUgZm9yIGNoYW1waW9ucyAqL1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKCkgPT4ge1xuICBjb25zdCB2ZXJzaW9uUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vYXBpL3ZlcnNpb25zLmpzb24nLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgY29uc3QgdmVyc2lvbnMgPSBhd2FpdCB2ZXJzaW9uUmVzcG9uc2UuanNvbigpO1xuICBjb25zdCBsYXRlc3RWZXJzaW9uID0gdmVyc2lvbnNbMF07XG4gIHJldHVybiBsYXRlc3RWZXJzaW9uO1xufTtcbiIsIi8qIEZldGNoZXMgYWxsIHRoZSBpdGVtcyBhIGNoYW1waW9uIGNhbiBidXkgaW4gYSBtYXRjaCAqL1xuY29uc3QgZmV0Y2hBbGxJdGVtcyA9IGFzeW5jIChsYXRlc3RWZXJzaW9uKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi8ke2xhdGVzdFZlcnNpb259L2RhdGEvZW5fVVMvaXRlbS5qc29uYCk7XG4gIGNvbnN0IGFsbEl0ZW1zID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIHJldHVybiBhbGxJdGVtcy5kYXRhO1xufTtcblxuY2xhc3MgSXRlbUluZm8ge1xuICBzdGF0aWMgYXN5bmMgZ2V0QWxsSXRlbXMobGF0ZXN0VmVyc2lvbikge1xuICAgIGNvbnN0IGFsbEl0ZW1zID0gZmV0Y2hBbGxJdGVtcyhsYXRlc3RWZXJzaW9uKTtcbiAgICByZXR1cm4gYWxsSXRlbXM7XG4gIH1cblxuICBnZXRJdGVtRGV0YWlscyhhbGxJdGVtcykge1xuICAgIGNvbnN0IGl0ZW1EZXRhaWxzID0gYWxsSXRlbXNbdGhpcy5pdGVtSWRdO1xuICAgIHJldHVybiBpdGVtRGV0YWlscztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGl0ZW1JZCwgYWxsSXRlbXMsIGxhdGVzdFZlcnNpb24pIHtcbiAgICB0aGlzLml0ZW1JZCA9IGl0ZW1JZDtcbiAgICB0aGlzLml0ZW1EZXRhaWxzID0gdGhpcy5nZXRJdGVtRGV0YWlscyhhbGxJdGVtcyk7XG4gICAgdGhpcy5sYXRlc3RWZXJzaW9uID0gbGF0ZXN0VmVyc2lvbjtcbiAgfVxuXG4gIGdldEl0ZW1JbWFnZSgpIHtcbiAgICBjb25zdCBpdGVtSW1hZ2VJZCA9IHRoaXMuaXRlbURldGFpbHMuaW1hZ2UuZnVsbDtcbiAgICBjb25zdCBpbWFnZVVybCA9IGBodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vJHt0aGlzLmxhdGVzdFZlcnNpb259L2ltZy9pdGVtLyR7aXRlbUltYWdlSWR9YDtcbiAgICByZXR1cm4gaW1hZ2VVcmw7XG4gIH1cblxuICAvKiBnZXRzIGluZm8gb24gdGhlIGl0ZW1zIHVzZWQgdG8gY3JlYXRlIHRoZSBpbnN0YW5jZSBpdGVtICovXG4gIGFzeW5jIGdldENvbXBvbmVudEl0ZW1zKGFsbEl0ZW1zKSB7XG4gICAgY29uc3QgY29tcG9uZW50SXRlbUlkcyA9IHRoaXMuaXRlbURldGFpbHMuZnJvbTtcbiAgICBpZiAoY29tcG9uZW50SXRlbUlkcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnN0IGNvbXBvbmVudEl0ZW1EZXRhaWxzID0gY29tcG9uZW50SXRlbUlkcy5tYXAoKGl0ZW1JZCkgPT4gKHtcbiAgICAgIG5hbWU6IGFsbEl0ZW1zW2l0ZW1JZF0ubmFtZSxcbiAgICAgIGltYWdlVXJsOiBgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLyR7dGhpcy5sYXRlc3RWZXJzaW9ufS9pbWcvaXRlbS8ke2l0ZW1JZH0ucG5nYCxcbiAgICAgIGNvc3Q6IGFsbEl0ZW1zW2l0ZW1JZF0uZ29sZC50b3RhbCxcbiAgICB9KSk7XG4gICAgcmV0dXJuIGNvbXBvbmVudEl0ZW1EZXRhaWxzO1xuICB9XG5cbiAgZ2V0SXRlbUluZm8oYWxsSXRlbXMpIHtcbiAgICBpZiAodGhpcy5pdGVtRGV0YWlscyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5pdGVtRGV0YWlscztcbiAgICBjb25zdCB7IGRlc2NyaXB0aW9uIH0gPSB0aGlzLml0ZW1EZXRhaWxzO1xuICAgIGNvbnN0IGNvc3QgPSB0aGlzLml0ZW1EZXRhaWxzLmdvbGQudG90YWw7XG4gICAgY29uc3QgaW1hZ2VVcmwgPSB0aGlzLmdldEl0ZW1JbWFnZShhbGxJdGVtcyk7XG4gICAgY29uc3QgY29tcG9uZW50SXRlbXMgPSB0aGlzLmdldENvbXBvbmVudEl0ZW1zKGFsbEl0ZW1zKTtcbiAgICBjb25zdCB7IHRhZ3MgfSA9IHRoaXMuaXRlbURldGFpbHM7XG5cbiAgICByZXR1cm4ge1xuICAgICAgbmFtZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgY29zdCxcbiAgICAgIGltYWdlVXJsLFxuICAgICAgY29tcG9uZW50SXRlbXMsXG4gICAgICB0YWdzLFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSXRlbUluZm87XG4iLCJjb25zdCBFbGVtZW50Q3JlYXRpb24gPSAoKCkgPT4ge1xuICBjb25zdCBjcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MgPSAodGFnLCBjbGFzc05hbWUsIHBhcmVudEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVDaGlsZEVsZW1lbnRXaXRoSWQgPSAodGFnLCBpZCwgcGFyZW50RWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgZWxlbWVudC5pZCA9IGlkO1xuICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3NBbmRJZCA9ICh0YWcsIGNsYXNzTmFtZSwgaWQsIHBhcmVudEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIGVsZW1lbnQuaWQgPSBpZDtcbiAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MgPSAoY2xhc3NOYW1lLCBwYXJlbnRFbGVtZW50LCBzcmMsIGFsdCkgPT4ge1xuICAgIGNvbnN0IGltYWdlRWxlbWVudCA9IGNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnaW1nJywgY2xhc3NOYW1lLCBwYXJlbnRFbGVtZW50KTtcbiAgICBpbWFnZUVsZW1lbnQuc3JjID0gc3JjO1xuICAgIGltYWdlRWxlbWVudC5hbHQgPSBhbHQ7XG5cbiAgICByZXR1cm4gaW1hZ2VFbGVtZW50O1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzLFxuICAgIGNyZWF0ZUNoaWxkRWxlbWVudFdpdGhJZCxcbiAgICBjcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3NBbmRJZCxcbiAgICBjcmVhdGVDaGlsZEltYWdlRWxlbWVudFdpdGhDbGFzcyxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEVsZW1lbnRDcmVhdGlvbjtcbiIsImltcG9ydCB7IHJlbmRlckhlYWRlckRldGFpbHMsIGltYWdlcyB9IGZyb20gJy4vcmVuZGVySGVscGVycyc7XG5pbXBvcnQgRWxlbWVudENyZWF0aW9uIGZyb20gJy4uL2hlbHBlcnMvZWxlbWVudENyZWF0aW9uJztcblxuY29uc3QgY2hhbXBpb25EZXRhaWxzTW9kYWwgPSBhc3luYyAoY2hhbXBpb25EYXRhKSA9PiB7XG4gIHJlbmRlckhlYWRlckRldGFpbHMoY2hhbXBpb25EYXRhLCAnbWFpbicpO1xuXG4gIGNvbnN0IGNoYW1waW9uUm9sZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tcm9sZXMnKTtcbiAgY29uc3QgeyByb2xlcyB9ID0gY2hhbXBpb25EYXRhO1xuICByb2xlcy5mb3JFYWNoKChyb2xlKSA9PiB7XG4gICAgY29uc3QgY2hhbXBpb25Sb2xlID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2NoYW1waW9uLXJvbGUnLCBjaGFtcGlvblJvbGVzKTtcbiAgICBjb25zdCBjaGFtcGlvblJvbGVOYW1lID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdjaGFtcGlvbi1yb2xlLW5hbWUnLCBjaGFtcGlvblJvbGUpO1xuICAgIGNoYW1waW9uUm9sZU5hbWUudGV4dENvbnRlbnQgPSByb2xlO1xuICAgIEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEltYWdlRWxlbWVudFdpdGhDbGFzcygnY2hhbXBpb24tcm9sZS1pbWFnZScsIGNoYW1waW9uUm9sZSwgYCR7aW1hZ2VzW2Ake3JvbGV9LnBuZ2BdfWAsIHJvbGUpO1xuICB9KTtcbiAgLyogVGhlIHR5cGUgb2YgcmVzb3VyY2UgdGhhdCBhIGNoYW1waW9uIHVzZXMgZS5nLiBtYW5hLCBlbmVyZ3kgZXRjICovXG4gIGNvbnN0IGNoYW1waW9uUmVzb3VyY2UgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnY2hhbXBpb24tcmVzb3VyY2UnLCBjaGFtcGlvblJvbGVzKTtcbiAgY29uc3QgeyByZXNvdXJjZSB9ID0gY2hhbXBpb25EYXRhO1xuICBjb25zdCBjaGFtcGlvblJlc291cmNlTmFtZSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnY2hhbXBpb24tcmVzb3VyY2UtbmFtZScsIGNoYW1waW9uUmVzb3VyY2UpO1xuICBjaGFtcGlvblJlc291cmNlTmFtZS50ZXh0Q29udGVudCA9IHJlc291cmNlO1xuICBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MoJ2NoYW1waW9uLXJlc291cmNlLWltYWdlJywgY2hhbXBpb25SZXNvdXJjZSwgYCR7aW1hZ2VzW2Ake3Jlc291cmNlfS5wbmdgXX1gLCByZXNvdXJjZSk7XG5cbiAgLyogQ3JlYXRlcyB0aGUgbWFpbiBjb250ZW50IG9mIHRoZSBtYWluIG1vZGFsICovXG4gIGNvbnN0IGxvcmVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9yZS1jb250YWluZXInKTtcbiAgY29uc3QgY2hhbXBpb25Mb3JlID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdjaGFtcGlvbi1sb3JlJywgbG9yZUNvbnRhaW5lcik7XG4gIGNoYW1waW9uTG9yZS5pbm5lckhUTUwgPSBjaGFtcGlvbkRhdGEubG9yZTtcblxuICBjb25zdCBhYmlsaXRpZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJpbGl0aWVzLWNvbnRhaW5lcicpO1xuICBjb25zdCBhYmlsaXR5RGV0YWlscyA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdhYmlsaXR5LWRldGFpbHMnLCBhYmlsaXRpZXNDb250YWluZXIpO1xuICBjb25zdCBhYmlsaXR5SW1ncyA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdhYmlsaXR5LWltZ3MnLCBhYmlsaXR5RGV0YWlscyk7XG4gIGNvbnN0IHBhc3NpdmVJbWcgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgJ3NwZWxsLWltZyBjbGlja2VkJywgYWJpbGl0eUltZ3MsIGNoYW1waW9uRGF0YS5wYXNzaXZlLnBhc3NpdmVJbWdVcmwsIGNoYW1waW9uRGF0YS5wYXNzaXZlLnBhc3NpdmVOYW1lLFxuICApO1xuICBwYXNzaXZlSW1nLmlkID0gJ3Bhc3NpdmUtaW1nJztcblxuICBjb25zdCBpbWdMYWJlbCA9IFsnUScsICdXJywgJ0UnLCAnUiddO1xuICBsZXQgaW5kZXggPSAwO1xuXG4gIGNoYW1waW9uRGF0YS5zcGVsbHMuZm9yRWFjaCgoc3BlbGwpID0+IHtcbiAgICBjb25zdCBzcGVsbEltZyA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEltYWdlRWxlbWVudFdpdGhDbGFzcyhcbiAgICAgICdzcGVsbC1pbWcnLCBhYmlsaXR5SW1ncywgc3BlbGwuaW1nVXJsLCBzcGVsbC5uYW1lLFxuICAgICk7XG4gICAgLy8gR3JhYnMgbGV0dGVyIFEsIFcsIEUgb3IgUiB3aGljaCB1bmlxdWVseSBpZGVudGlmaWVzIGEgY2hhbXBpb25zIGFiaWxpdGllc1xuICAgIHNwZWxsSW1nLmlkID0gYCR7aW1nTGFiZWxbaW5kZXhdfS1pbWdgO1xuICAgIGluZGV4ICs9IDE7XG4gIH0pO1xuXG4gIC8qIGxvb3BzIHRocm91Z2ggY2hhbXBpb24ncyBwYXNzaXZlIGFuZCA0IGFiaWxpdGllcyAqL1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkgKz0gMSkge1xuICAgIGNvbnN0IGFiaWxpdHlJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYWJpbGl0eU5hbWUgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2FiaWxpdHktbmFtZScsIGFiaWxpdHlJbmZvKTtcbiAgICBjb25zdCBhYmlsaXR5RGVzY3JpcHRpb24gPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2FiaWxpdHktZGVzY3JpcHRpb24nLCBhYmlsaXR5SW5mbyk7XG4gICAgY29uc3QgYWJpbGl0eUxhYmVsID0gWydQYXNzaXZlJywgJ1EnLCAnVycsICdFJywgJ1InXTtcblxuICAgIGlmIChpID09PSAwKSB7XG4gICAgICBhYmlsaXR5SW5mby5jbGFzc05hbWUgPSAnYWJpbGl0eS1pbmZvIGFjdGl2ZSc7XG4gICAgICBhYmlsaXR5SW5mby5pZCA9ICdwYXNzaXZlLWFiaWxpdHknO1xuICAgICAgYWJpbGl0eU5hbWUudGV4dENvbnRlbnQgPSBgJHtjaGFtcGlvbkRhdGEucGFzc2l2ZS5wYXNzaXZlTmFtZX0gKCR7YWJpbGl0eUxhYmVsW2ldfSlgO1xuICAgICAgYWJpbGl0eURlc2NyaXB0aW9uLmlubmVySFRNTCA9IGNoYW1waW9uRGF0YS5wYXNzaXZlLnBhc3NpdmVEZXNjcmlwdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY29vbGRvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBjb29sZG93bi5jbGFzc05hbWUgPSAnYWJpbGl0eS1jb29sZG93bic7XG4gICAgICBjb29sZG93bi50ZXh0Q29udGVudCA9IGBDb29sZG93bjogJHtjaGFtcGlvbkRhdGEuc3BlbGxzW2kgLSAxXS5jb29sZG93bn0gc2Vjb25kc2A7XG4gICAgICBhYmlsaXR5SW5mby5hcHBlbmRDaGlsZChjb29sZG93bik7XG5cbiAgICAgIGFiaWxpdHlJbmZvLmNsYXNzTmFtZSA9ICdhYmlsaXR5LWluZm8nO1xuICAgICAgYWJpbGl0eUluZm8uaWQgPSBgJHthYmlsaXR5TGFiZWxbaV19LWFiaWxpdHlgO1xuICAgICAgYWJpbGl0eU5hbWUudGV4dENvbnRlbnQgPSBgJHtjaGFtcGlvbkRhdGEuc3BlbGxzW2kgLSAxXS5uYW1lfSAoJHthYmlsaXR5TGFiZWxbaV19KWA7XG4gICAgICBhYmlsaXR5RGVzY3JpcHRpb24uaW5uZXJIVE1MID0gY2hhbXBpb25EYXRhLnNwZWxsc1tpIC0gMV0uZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgYWJpbGl0eURldGFpbHMuYXBwZW5kQ2hpbGQoYWJpbGl0eUluZm8pO1xuICB9XG5cbiAgY29uc3QgY2hhbXBpb25UaXBzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbi10aXBzLXNlY3Rpb24nKTtcbiAgY29uc3QgY2hhbXBpb25UaXBzID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2NoYW1waW9uLXRpcHMnLCBjaGFtcGlvblRpcHNTZWN0aW9uKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDIgJiYgaSA8IGNoYW1waW9uRGF0YS50aXBzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgY2hhbXBpb25UaXAgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2NoYW1waW9uLXRpcCcsIGNoYW1waW9uVGlwcyk7XG4gICAgY2hhbXBpb25UaXAudGV4dENvbnRlbnQgPSBgJHtjaGFtcGlvbkRhdGEudGlwc1tpXX1gO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjaGFtcGlvbkRldGFpbHNNb2RhbDtcbiIsImltcG9ydCBFbGVtZW50Q3JlYXRpb24gZnJvbSAnLi4vaGVscGVycy9lbGVtZW50Q3JlYXRpb24nO1xuXG5jb25zdCBjaGFtcGlvblNraW5zTW9kYWwgPSBhc3luYyAoY2hhbXBpb25EZXRhaWxzKSA9PiB7XG4gIGNvbnN0IHsgc2tpbnMgfSA9IGNoYW1waW9uRGV0YWlscztcbiAgY29uc3Qgc2tpbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2tpbnMtY29udGFpbmVyJyk7XG4gIGNvbnN0IHNraW5OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNraW4tbmFtZScpO1xuICBjb25zdCBza2luSW1hZ2VzQ29udGFpbmVyID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ3NraW4taW1hZ2VzLWNvbnRhaW5lcicsIHNraW5zQ29udGFpbmVyKTtcblxuICBza2lucy5mb3JFYWNoKChza2luKSA9PiB7XG4gICAgaWYgKHNraW4ubnVtID09PSAwKSB7XG4gICAgICBjb25zdCBzaG93bkltYWdlQ29udGFpbmVyID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzc0FuZElkKFxuICAgICAgICAnZGl2JywgJ3NraW4taW1hZ2UtY29udGFpbmVyIHNob3duJywgYERlZmF1bHQgJHtjaGFtcGlvbkRldGFpbHMubmFtZX1gLCBza2luSW1hZ2VzQ29udGFpbmVyLFxuICAgICAgKTtcbiAgICAgIHNraW5OYW1lLnRleHRDb250ZW50ID0gYERlZmF1bHQgJHtjaGFtcGlvbkRldGFpbHMubmFtZX1gO1xuICAgICAgY29uc3Qgc2hvd25JbWFnZVVybCA9IGBodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vaW1nL2NoYW1waW9uL3NwbGFzaC8ke2NoYW1waW9uRGV0YWlscy5pZH1fJHtza2luLm51bX0uanBnYDtcbiAgICAgIEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEltYWdlRWxlbWVudFdpdGhDbGFzcygnc2tpbi1pbWFnZScsIHNob3duSW1hZ2VDb250YWluZXIsIHNob3duSW1hZ2VVcmwsICdkZWZhdWx0IHNraW4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW1hZ2VDb250YWluZXIgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2RpdicsICdza2luLWltYWdlLWNvbnRhaW5lcicsIHNraW4ubmFtZSwgc2tpbkltYWdlc0NvbnRhaW5lcik7XG4gICAgICBjb25zdCBpbWFnZVVybCA9IGBodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vaW1nL2NoYW1waW9uL3NwbGFzaC8ke2NoYW1waW9uRGV0YWlscy5pZH1fJHtza2luLm51bX0uanBnYDtcbiAgICAgIEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEltYWdlRWxlbWVudFdpdGhDbGFzcygnc2tpbi1pbWFnZScsIGltYWdlQ29udGFpbmVyLCBpbWFnZVVybCwgc2tpbi5uYW1lKTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2hhbXBpb25Ta2luc01vZGFsO1xuIiwiaW1wb3J0IEl0ZW1JbmZvIGZyb20gJy4uL2NoYW1waW9uRGF0YS9pdGVtSW5mbyc7XG5pbXBvcnQge1xuICByZW5kZXJIZWFkZXJEZXRhaWxzLFxuICByZW5kZXJTdGF0T3ZlcnZpZXcsXG4gIHJlbmRlckRhbWFnZVN0YXRzLFxuICByZW5kZXJDaGFtcGlvbkxhbmUsXG4gIHJlbmRlck1hdGNodXBzSW5mbyxcbn0gZnJvbSAnLi9yZW5kZXJIZWxwZXJzJztcbmltcG9ydCBFbGVtZW50Q3JlYXRpb24gZnJvbSAnLi4vaGVscGVycy9lbGVtZW50Q3JlYXRpb24nO1xuXG5jb25zdCBjaGFtcGlvblN0YXRzTW9kYWwgPSBhc3luYyAoY2hhbXBpb25EYXRhLCBjaGFtcGlvblN0YXRzLCBsYXRlc3RWZXJzaW9uKSA9PiB7XG4gIHJlbmRlckhlYWRlckRldGFpbHMoY2hhbXBpb25EYXRhLCAnc3RhdHMnKTtcblxuICBjb25zdCBzdGF0c092ZXJ2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLXN0YXRzLW92ZXJ2aWV3Jyk7XG5cbiAgcmVuZGVyU3RhdE92ZXJ2aWV3KHN0YXRzT3ZlcnZpZXcsICdXaW4gUmF0ZScsIGNoYW1waW9uU3RhdHMud2luUmF0ZSk7XG4gIHJlbmRlclN0YXRPdmVydmlldyhzdGF0c092ZXJ2aWV3LCAnUGljayBSYXRlJywgY2hhbXBpb25TdGF0cy5waWNrUmF0ZSk7XG4gIC8qIE1ha2UgZXZlcnkgbGV0dGVyIGV4Y2VwdCB0aGUgZmlyc3QgbG93ZXIgY2FzZSAqL1xuICBjb25zdCBsYW5lID0gYCR7Y2hhbXBpb25TdGF0cy5sYW5lWzBdICsgY2hhbXBpb25TdGF0cy5sYW5lLnN1YnN0cmluZygxKS50b0xvd2VyQ2FzZSgpfWA7XG4gIHJlbmRlckNoYW1waW9uTGFuZShzdGF0c092ZXJ2aWV3LCBsYW5lKTtcblxuICAvKiBTZXRzIHRoZSB2YWx1ZXMgYW5kIHBlcmNlbnRhZ2VzIGZvciB0aGUgYXZlcmFnZSBkYW1hZ2Ugc2VjdGlvbiBvZiB0aGUgc3RhdHMgbW9kYWwgKi9cblxuICBjb25zdCB0cnVlRGFtYWdlQ2lyY2xlU3Ryb2tlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RydWUtZGFtYWdlLXN0cm9rZScpO1xuICBjb25zdCBwaHlzaWNhbERhbWFnZUNpcmNsZVN0cm9rZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwaHlzaWNhbC1kYW1hZ2Utc3Ryb2tlJyk7XG4gIGNvbnN0IG1hZ2ljRGFtYWdlQ2lyY2xlU3Ryb2tlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hZ2ljLWRhbWFnZS1zdHJva2UnKTtcblxuICBjb25zdCB0cnVlRGFtYWdlUGVyY2VudCA9IE1hdGgucm91bmQoY2hhbXBpb25TdGF0cy5kYW1hZ2VQZXJNYXRjaC50cnVlRGFtYWdlLnBlcmNlbnRhZ2UpO1xuICBjb25zdCBwaHlzaWNhbERhbWFnZVBlcmNlbnQgPSBNYXRoLnJvdW5kKGNoYW1waW9uU3RhdHMuZGFtYWdlUGVyTWF0Y2gucGh5c2ljYWxEYW1hZ2UucGVyY2VudGFnZSk7XG4gIGNvbnN0IG1hZ2ljRGFtYWdlUGVyY2VudCA9IE1hdGgucm91bmQoY2hhbXBpb25TdGF0cy5kYW1hZ2VQZXJNYXRjaC5tYWdpY0RhbWFnZS5wZXJjZW50YWdlKTtcblxuICB0cnVlRGFtYWdlQ2lyY2xlU3Ryb2tlLnN0eWxlLnN0cm9rZURhc2hhcnJheSA9IGAke3RydWVEYW1hZ2VQZXJjZW50fSAxMDBgO1xuICBwaHlzaWNhbERhbWFnZUNpcmNsZVN0cm9rZS5zdHlsZS5zdHJva2VEYXNoYXJyYXkgPSBgJHtwaHlzaWNhbERhbWFnZVBlcmNlbnQgKyB0cnVlRGFtYWdlUGVyY2VudH0gMTAwYDtcbiAgbWFnaWNEYW1hZ2VDaXJjbGVTdHJva2Uuc3R5bGUuc3Ryb2tlRGFzaGFycmF5ID0gJzEwMCwgMTAwJztcbiAgY29uc3QgdG90YWxEYW1hZ2VUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvdGFsLWRhbWFnZS10ZXh0Jyk7XG4gIHRvdGFsRGFtYWdlVGV4dC50ZXh0Q29udGVudCA9IE1hdGgucm91bmQoY2hhbXBpb25TdGF0cy5kYW1hZ2VQZXJNYXRjaC50b3RhbERhbWFnZS52YWx1ZSk7XG5cbiAgY29uc3QgdHJ1ZURhbWFnZVZhbHVlID0gTWF0aC5yb3VuZChjaGFtcGlvblN0YXRzLmRhbWFnZVBlck1hdGNoLnRydWVEYW1hZ2UudmFsdWUpO1xuICBjb25zdCBwaHlzaWNhbERhbWFnZVZhbHVlID0gTWF0aC5yb3VuZChjaGFtcGlvblN0YXRzLmRhbWFnZVBlck1hdGNoLnBoeXNpY2FsRGFtYWdlLnZhbHVlKTtcbiAgY29uc3QgbWFnaWNEYW1hZ2VWYWx1ZSA9IE1hdGgucm91bmQoY2hhbXBpb25TdGF0cy5kYW1hZ2VQZXJNYXRjaC5tYWdpY0RhbWFnZS52YWx1ZSk7XG5cbiAgcmVuZGVyRGFtYWdlU3RhdHMoJ3BoeXNpY2FsJywgcGh5c2ljYWxEYW1hZ2VWYWx1ZSwgcGh5c2ljYWxEYW1hZ2VQZXJjZW50KTtcbiAgcmVuZGVyRGFtYWdlU3RhdHMoJ21hZ2ljJywgbWFnaWNEYW1hZ2VWYWx1ZSwgbWFnaWNEYW1hZ2VQZXJjZW50KTtcbiAgcmVuZGVyRGFtYWdlU3RhdHMoJ3RydWUnLCB0cnVlRGFtYWdlVmFsdWUsIHRydWVEYW1hZ2VQZXJjZW50KTtcblxuICAvKiBSZW5kZXJzIHRoZSBpdGVtIGJ1aWxkcyBzZWN0aW9uIG9mIHRoZSBzdGF0cyBtb2RhbCAqL1xuICBjb25zdCB7IGl0ZW1TZXRzIH0gPSBjaGFtcGlvblN0YXRzO1xuICBjb25zdCBhbGxJdGVtcyA9IGF3YWl0IEl0ZW1JbmZvLmdldEFsbEl0ZW1zKGxhdGVzdFZlcnNpb24pO1xuICBjb25zdCBjaGFtcGlvbkl0ZW1CdWlsZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24taXRlbS1idWlsZHMnKTtcbiAgY29uc3QgaXRlbVNldHNDb250YWluZXIgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnaXRlbS1zZXRzLWNvbnRhaW5lcicsIGNoYW1waW9uSXRlbUJ1aWxkcyk7XG5cbiAgaXRlbVNldHMuZm9yRWFjaCgoaXRlbVNldCkgPT4ge1xuICAgIGNvbnN0IGl0ZW1TZXRDb250YWluZXIgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnaXRlbS1zZXQtY29udGFpbmVyJywgaXRlbVNldHNDb250YWluZXIpO1xuXG4gICAgaXRlbVNldC5mb3JFYWNoKChpdGVtSWQpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBuZXcgSXRlbUluZm8oaXRlbUlkLCBhbGxJdGVtcywgbGF0ZXN0VmVyc2lvbik7XG4gICAgICBjb25zdCBpdGVtSW5mbyA9IGl0ZW0uZ2V0SXRlbUluZm8oYWxsSXRlbXMpO1xuICAgICAgaWYgKGl0ZW1JbmZvICYmICFpdGVtSW5mby50YWdzLmluY2x1ZGVzKCdUcmlua2V0JykgJiYgIWl0ZW1JbmZvLnRhZ3MuaW5jbHVkZXMoJ0NvbnN1bWFibGUnKSkge1xuICAgICAgICBjb25zdCBtYWluQ29tcG9uZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1haW5Db21wb25lbnRDb250YWluZXIuY2xhc3NOYW1lID0gJ21haW4tY29tcG9uZW50LWNvbnRhaW5lcic7XG4gICAgICAgIGl0ZW1TZXRDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbkNvbXBvbmVudENvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3QgbWFpbkl0ZW0gPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnbWFpbi1pdGVtJywgbWFpbkNvbXBvbmVudENvbnRhaW5lcik7XG5cbiAgICAgICAgRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzKCdpdGVtLWltZycsIG1haW5JdGVtLCBpdGVtSW5mby5pbWFnZVVybCwgYCR7aXRlbUlkfS5wbmdgKTtcblxuICAgICAgICBjb25zdCBpdGVtRGV0YWlsc0NvbnRhaW5lciA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdpdGVtLWRldGFpbHMtY29udGFpbmVyJywgbWFpbkl0ZW0pO1xuXG4gICAgICAgIGNvbnN0IG5hbWVFbGVtZW50ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdpdGVtLW5hbWUnLCBpdGVtRGV0YWlsc0NvbnRhaW5lcik7XG4gICAgICAgIG5hbWVFbGVtZW50LnRleHRDb250ZW50ID0gaXRlbUluZm8ubmFtZTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25FbGVtZW50ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdpdGVtLWRlc2NyaXB0aW9uJywgaXRlbURldGFpbHNDb250YWluZXIpO1xuICAgICAgICBkZXNjcmlwdGlvbkVsZW1lbnQuaW5uZXJIVE1MID0gaXRlbUluZm8uZGVzY3JpcHRpb247XG4gICAgICAgIGNvbnN0IGl0ZW1Db3N0ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2l0ZW0tY29zdCcsIGl0ZW1EZXRhaWxzQ29udGFpbmVyKTtcbiAgICAgICAgY29uc3QgY29zdExhYmVsID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdjb3N0LWxhYmVsJywgaXRlbUNvc3QpO1xuICAgICAgICBjb3N0TGFiZWwudGV4dENvbnRlbnQgPSAnR29sZDogJztcbiAgICAgICAgY29uc3QgY29zdEFtb3VudCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnY29zdC1hbW91bnQnLCBpdGVtQ29zdCk7XG4gICAgICAgIGNvc3RBbW91bnQudGV4dENvbnRlbnQgPSBpdGVtSW5mby5jb3N0O1xuXG4gICAgICAgIC8qIFRoZSBjb21wb25lbnQgaXRlbXMgYXJlIHRoZSBzbWFsbGVyIGl0ZW1zIHRoYXQgYXBwZWFyIGJlbG93IHRoZSBtYWluIGl0ZW0gKi9cbiAgICAgICAgY29uc3QgeyBjb21wb25lbnRJdGVtcyB9ID0gaXRlbUluZm87XG4gICAgICAgIFByb21pc2UucmVzb2x2ZShjb21wb25lbnRJdGVtcylcbiAgICAgICAgICAudGhlbigoaXRlbXMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudEl0ZW1zQ29udGFpbmVyID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2NvbXBvbmVudC1pdGVtcy1jb250YWluZXInLCBtYWluQ29tcG9uZW50Q29udGFpbmVyKTtcbiAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goKGNvbXBvbmVudEl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50SXRlbUVsZW1lbnQgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnY29tcG9uZW50LWl0ZW0nLCBjb21wb25lbnRJdGVtc0NvbnRhaW5lcik7XG4gICAgICAgICAgICAgIEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEltYWdlRWxlbWVudFdpdGhDbGFzcyhcbiAgICAgICAgICAgICAgICAnY29tcG9uZW50LWl0ZW0taW1nJywgY29tcG9uZW50SXRlbUVsZW1lbnQsIGNvbXBvbmVudEl0ZW0uaW1hZ2VVcmwsIGAke2NvbXBvbmVudEl0ZW0ubmFtZX1gLFxuICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudEl0ZW1EZXRhaWxzQ29udGFpbmVyID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2NvbXBvbmVudC1pdGVtLWRldGFpbHMtY29udGFpbmVyJywgY29tcG9uZW50SXRlbUVsZW1lbnQpO1xuXG4gICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudEl0ZW1OYW1lID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdjb21wb25lbnQtaXRlbS1uYW1lJywgY29tcG9uZW50SXRlbURldGFpbHNDb250YWluZXIpO1xuICAgICAgICAgICAgICBjb21wb25lbnRJdGVtTmFtZS50ZXh0Q29udGVudCA9IGNvbXBvbmVudEl0ZW0ubmFtZTtcbiAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50SXRlbUNvc3QgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnY29tcG9uZW50LWl0ZW0tY29zdCcsIGNvbXBvbmVudEl0ZW1EZXRhaWxzQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50SXRlbUNvc3RMYWJlbCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnY29tcG9uZW50LWl0ZW0tY29zdC1sYWJlbCcsIGNvbXBvbmVudEl0ZW1Db3N0KTtcbiAgICAgICAgICAgICAgY29tcG9uZW50SXRlbUNvc3RMYWJlbC50ZXh0Q29udGVudCA9ICdHb2xkOiAnO1xuICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRJdGVtQW1vdW50ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdjb21wb25lbnQtaXRlbS1hbW91bnQnLCBjb21wb25lbnRJdGVtQ29zdCk7XG4gICAgICAgICAgICAgIGNvbXBvbmVudEl0ZW1BbW91bnQudGV4dENvbnRlbnQgPSBjb21wb25lbnRJdGVtLmNvc3Q7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIC8qIFJlbmRlcnMgdGhlIG1hdGNodXBzIHNlY3Rpb24gb2YgdGhlIGNoYW1waW9uIG1vZGFsIHN0YXRzIHBhZ2UgKi9cbiAgY29uc3QgYmVzdE1hdGNodXBzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iZXN0LW1hdGNodXBzLXNlY3Rpb24nKTtcbiAgY29uc3QgYmVzdE1hdGNodXBzRWxlbWVudCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdiZXN0LW1hdGNodXBzIG1hdGNodXBzJywgYmVzdE1hdGNodXBzU2VjdGlvbik7XG4gIGNvbnN0IGJlc3RNYXRjaHVwc0RhdGEgPSBjaGFtcGlvblN0YXRzLmJlc3RNYXRjaFVwcztcbiAgcmVuZGVyTWF0Y2h1cHNJbmZvKGJlc3RNYXRjaHVwc0VsZW1lbnQsIGJlc3RNYXRjaHVwc0RhdGEsIGxhdGVzdFZlcnNpb24pO1xuXG4gIGNvbnN0IHdvcnN0TWF0Y2h1cHNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcnN0LW1hdGNodXBzLXNlY3Rpb24nKTtcbiAgY29uc3Qgd29yc3RNYXRjaHVwc0VsZW1lbnQgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnd29yc3QtbWF0Y2h1cHMgbWF0Y2h1cHMnLCB3b3JzdE1hdGNodXBzU2VjdGlvbik7XG4gIGNvbnN0IHdvcnN0TWF0Y2h1cHNEYXRhID0gY2hhbXBpb25TdGF0cy53b3JzdE1hdGNoVXBzO1xuICByZW5kZXJNYXRjaHVwc0luZm8od29yc3RNYXRjaHVwc0VsZW1lbnQsIHdvcnN0TWF0Y2h1cHNEYXRhLCBsYXRlc3RWZXJzaW9uKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNoYW1waW9uU3RhdHNNb2RhbDtcbiIsImltcG9ydCBFbGVtZW50Q3JlYXRpb24gZnJvbSAnLi4vaGVscGVycy9lbGVtZW50Q3JlYXRpb24nO1xuXG5jb25zdCBpbXBvcnRBbGwgPSAocikgPT4ge1xuICBjb25zdCBpbWFnZXMgPSB7fTtcbiAgci5rZXlzKCkuZm9yRWFjaCgoaXRlbSkgPT4geyBpbWFnZXNbaXRlbS5yZXBsYWNlKCcuLycsICcnKV0gPSByKGl0ZW0pOyB9KTtcbiAgcmV0dXJuIGltYWdlcztcbn07XG5cbmNvbnN0IGltYWdlcyA9IGltcG9ydEFsbChyZXF1aXJlLmNvbnRleHQoJy4uL2Fzc2V0cy9pbWFnZXMnLCBmYWxzZSwgL1xcLihwbmd8anBlP2d8c3ZnKSQvKSk7XG5cbmNvbnN0IHJlbmRlckhlYWRlckRldGFpbHMgPSAoY2hhbXBpb25EYXRhLCBtb2RhbENvbnRhaW5lcikgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHttb2RhbENvbnRhaW5lcn0tY29udGFpbmVyYCk7XG4gIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kID0gYG5vLXJlcGVhdCB1cmwoaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuL2ltZy9jaGFtcGlvbi9zcGxhc2gvJHtjaGFtcGlvbkRhdGEuaWR9XzAuanBnKSA3MCUgODAlYDtcbiAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvdmVyJztcblxuICBjb25zdCBjaGFtcGlvblRpdGxlID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbi10aXRsZScpO1xuICBjaGFtcGlvblRpdGxlLnRleHRDb250ZW50ID0gY2hhbXBpb25EYXRhLnRpdGxlO1xuXG4gIGNvbnN0IGNoYW1waW9uTmFtZSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tbmFtZScpO1xuICBjaGFtcGlvbk5hbWUudGV4dENvbnRlbnQgPSBjaGFtcGlvbkRhdGEubmFtZTtcbn07XG5cbi8qIFJlbmRlcnMgd2luIG9yIHBpY2sgcmF0ZSB0byB0aGUgRE9NICovXG5jb25zdCByZW5kZXJTdGF0T3ZlcnZpZXcgPSAoc3RhdHNPdmVydmlldywgcmF0ZVRleHQsIHJhdGVUeXBlKSA9PiB7XG4gIGNvbnN0IGNoYW1waW9uUmF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgY29uc3QgcmF0ZVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gIC8qIFR1cm5zICdXaW4gUmF0ZScgaW50byAnd2luLXJhdGUnICovXG4gIGNvbnN0IGxvd2VyQ2FzZVRleHQgPSByYXRlVGV4dC5yZXBsYWNlKCcgJywgJy0nKS50b0xvd2VyQ2FzZSgpO1xuXG4gIGNoYW1waW9uUmF0ZS5jbGFzc05hbWUgPSBsb3dlckNhc2VUZXh0O1xuICBsYWJlbC5pZCA9IGAke2xvd2VyQ2FzZVRleHR9LWxhYmVsYDtcbiAgbGFiZWwuY2xhc3NOYW1lID0gJ2xhYmVsJztcbiAgcmF0ZVZhbHVlLmNsYXNzTmFtZSA9IGAke2xvd2VyQ2FzZVRleHR9LXZhbHVlYDtcbiAgbGFiZWwudGV4dENvbnRlbnQgPSByYXRlVGV4dDtcbiAgcmF0ZVZhbHVlLnRleHRDb250ZW50ID0gYCR7cmF0ZVR5cGV9JWA7XG5cbiAgY2hhbXBpb25SYXRlLmFwcGVuZENoaWxkKGxhYmVsKTsgY2hhbXBpb25SYXRlLmFwcGVuZENoaWxkKHJhdGVWYWx1ZSk7XG4gIHN0YXRzT3ZlcnZpZXcuYXBwZW5kQ2hpbGQoY2hhbXBpb25SYXRlKTtcbn07XG5cbmNvbnN0IHJlbmRlckNoYW1waW9uTGFuZSA9IChzdGF0c092ZXJ2aWV3LCBsYW5lKSA9PiB7XG4gIGNvbnN0IGNoYW1waW9uTGFuZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2hhbXBpb25MYW5lSW5mby5jbGFzc05hbWUgPSAnbGFuZS1pbmZvJztcbiAgY29uc3QgbGFuZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGxhbmVUZXh0LmNsYXNzTmFtZSA9ICdsYW5lLXRleHQgbGFiZWwnO1xuICBsYW5lVGV4dC50ZXh0Q29udGVudCA9IGxhbmU7XG4gIGNvbnN0IGxhbmVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGxhbmVJY29uLmNsYXNzTmFtZSA9ICdsYW5lLWljb24gY2hhbXBpb24tcm9sZS1pbWFnZSc7XG4gIGxhbmVJY29uLnNyYyA9IGAke2ltYWdlc1tgJHtsYW5lfS5wbmdgXX1gO1xuICBsYW5lSWNvbi5hbHQgPSBgJHtsYW5lfS5wbmdgO1xuICBjaGFtcGlvbkxhbmVJbmZvLmFwcGVuZENoaWxkKGxhbmVUZXh0KTtcbiAgY2hhbXBpb25MYW5lSW5mby5hcHBlbmRDaGlsZChsYW5lSWNvbik7XG4gIHN0YXRzT3ZlcnZpZXcuYXBwZW5kQ2hpbGQoY2hhbXBpb25MYW5lSW5mbyk7XG59O1xuXG5jb25zdCByZW5kZXJEYW1hZ2VTdGF0cyA9IChkYW1hZ2VUeXBlLCBkYW1hZ2VWYWx1ZSwgZGFtYWdlUGVyY2VudGFnZSkgPT4ge1xuICBjb25zdCBkYW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtkYW1hZ2VUeXBlfS1kYW1hZ2UtY29udGFpbmVyYCk7XG5cbiAgY29uc3QgZGFtYWdlU3RhdHMgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnZGFtYWdlLXN0YXRzJywgZGFtYWdlQ29udGFpbmVyKTtcblxuICBjb25zdCBkYW1hZ2VWYWx1ZUVsZW1lbnQgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aElkKCdzcGFuJywgYCR7ZGFtYWdlVHlwZX0tdmFsdWVgLCBkYW1hZ2VTdGF0cyk7XG4gIGNvbnN0IGRhbWFnZVBlcmNlbnRhZ2VFbGVtZW50ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhJZCgnc3BhbicsIGAke2RhbWFnZVR5cGV9LXBlcmNlbnRhZ2VgLCBkYW1hZ2VTdGF0cyk7XG4gIGRhbWFnZVZhbHVlRWxlbWVudC50ZXh0Q29udGVudCA9IGAke2RhbWFnZVZhbHVlfWA7XG4gIGRhbWFnZVBlcmNlbnRhZ2VFbGVtZW50LnRleHRDb250ZW50ID0gYCR7ZGFtYWdlUGVyY2VudGFnZX0lYDtcbn07XG5cbmNvbnN0IHJlbmRlck1hdGNodXBzSW5mbyA9IChtYXRjaHVwc0VsZW1lbnQsIG1hdGNodXBzRGF0YSwgbGF0ZXN0VmVyc2lvbikgPT4ge1xuICBtYXRjaHVwc0RhdGEuZm9yRWFjaCgobWF0Y2h1cCkgPT4ge1xuICAgIGNvbnN0IG1hdGNodXBJbmZvID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ21hdGNodXAtaW5mbycsIG1hdGNodXBzRWxlbWVudCk7XG4gICAgY29uc3QgZW5lbXlDaGFtcGlvbk5hbWUgPSBtYXRjaHVwWzFdLm5hbWU7XG4gICAgY29uc3QgZW5lbXlDaGFtcGlvbklkID0gbWF0Y2h1cFswXTtcbiAgICBjb25zdCBlbmVteUNoYW1waW9uSW1nVXJsID0gYGh0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi8ke2xhdGVzdFZlcnNpb259L2ltZy9jaGFtcGlvbi8ke2VuZW15Q2hhbXBpb25JZH0ucG5nYDtcbiAgICBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAnZW5lbXktY2hhbXBpb24taW1nJywgbWF0Y2h1cEluZm8sIGVuZW15Q2hhbXBpb25JbWdVcmwsIGBzbWFsbC0ke2VuZW15Q2hhbXBpb25JZH1gLFxuICAgICk7XG5cbiAgICBjb25zdCBtYXRjaHVwU3RhdHMgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnbWF0Y2h1cC1zdGF0cycsIG1hdGNodXBJbmZvKTtcbiAgICBjb25zdCBlbmVteUNoYW1waW9uTmFtZUVsZW1lbnQgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2VuZW15LWNoYW1waW9uLW5hbWUnLCBtYXRjaHVwU3RhdHMpO1xuICAgIGVuZW15Q2hhbXBpb25OYW1lRWxlbWVudC50ZXh0Q29udGVudCA9IGVuZW15Q2hhbXBpb25OYW1lO1xuICAgIGNvbnN0IHdpbnJhdGVBZ2FpbnN0ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ3dpbnJhdGUtYWdhaW5zdCcsIG1hdGNodXBTdGF0cyk7XG4gICAgY29uc3Qgd2lucmF0ZUFnYWluc3RMYWJlbCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnd2lucmF0ZS1hZ2FpbnN0LWxhYmVsJywgd2lucmF0ZUFnYWluc3QpO1xuICAgIHdpbnJhdGVBZ2FpbnN0TGFiZWwudGV4dENvbnRlbnQgPSAnV2lucmF0ZTogJztcbiAgICBjb25zdCBjb2xvciA9IG1hdGNodXBzRWxlbWVudC5jbGFzc05hbWUgPT09ICdiZXN0LW1hdGNodXBzIG1hdGNodXBzJyA/ICdibHVlJyA6ICdyZWQnO1xuICAgIGNvbnN0IHdpbnJhdGVBZ2FpbnN0UGVyY2VudGFnZSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCBgd2lucmF0ZS1hZ2FpbnN0LXBlcmNlbnRhZ2UgJHtjb2xvcn1gLCB3aW5yYXRlQWdhaW5zdCk7XG4gICAgd2lucmF0ZUFnYWluc3RQZXJjZW50YWdlLnRleHRDb250ZW50ID0gYCR7bWF0Y2h1cFsxXS53aW5SYXRlQWdhaW5zdC50b0ZpeGVkKDApfSVgO1xuICAgIGNvbnN0IGdhbWVzUGxheWVkQWdhaW5zdCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnZ2FtZXMtcGxheWVkLWFnYWluc3QnLCBtYXRjaHVwU3RhdHMpO1xuICAgIGdhbWVzUGxheWVkQWdhaW5zdC50ZXh0Q29udGVudCA9IGBHYW1lczogJHttYXRjaHVwWzFdLm1hdGNoZXN9YDtcbiAgfSk7XG59O1xuXG5jb25zdCBjcmVhdGVDaGFtcGlvbkNvbnRhaW5lciA9IChjaGFtcGlvbiwgY2hhbXBpb25zU2VjdGlvbikgPT4ge1xuICBjb25zdCBjaGFtcGlvbkNvbnRhaW5lciA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdjaGFtcGlvbi1jb250YWluZXIgc2hvd24nLCBjaGFtcGlvbnNTZWN0aW9uKTtcbiAgY29uc3QgY2hhbXBpb25JZCA9IGNoYW1waW9uLmlkID8gY2hhbXBpb24uaWQgOiBjaGFtcGlvbi5jaGFtcGlvbk5hbWU7XG4gIGNoYW1waW9uQ29udGFpbmVyLmRhdGFzZXQuaWQgPSBjaGFtcGlvbklkO1xuICBjb25zdCBjaGFtcGlvbkltZ1VybCA9IGBodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vaW1nL2NoYW1waW9uL2xvYWRpbmcvJHtjaGFtcGlvbklkfV8wLmpwZ2A7XG4gIGNvbnN0IGNoYW1waW9uSW1nID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzKFxuICAgICdjaGFtcGlvbi1pbWcnLCBjaGFtcGlvbkNvbnRhaW5lciwgY2hhbXBpb25JbWdVcmwsICcnLFxuICApO1xuICBjaGFtcGlvbkltZy50YWJJbmRleCA9IDA7XG4gIGNoYW1waW9uQ29udGFpbmVyLnRhYkluZGV4ID0gMDtcbiAgY29uc3QgY2hhbXBpb25OYW1lV3JhcHBlciA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdjaGFtcGlvbi1uYW1lLXdyYXBwZXInLCBjaGFtcGlvbkNvbnRhaW5lcik7XG4gIGNvbnN0IGNoYW1waW9uTmFtZSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnY2hhbXBpb24tbmFtZScsIGNoYW1waW9uTmFtZVdyYXBwZXIpO1xuICBjaGFtcGlvbk5hbWUudGV4dENvbnRlbnQgPSBjaGFtcGlvbi5uYW1lO1xufTtcblxuZXhwb3J0IHtcbiAgcmVuZGVySGVhZGVyRGV0YWlscyxcbiAgcmVuZGVyU3RhdE92ZXJ2aWV3LFxuICByZW5kZXJDaGFtcGlvbkxhbmUsXG4gIHJlbmRlckRhbWFnZVN0YXRzLFxuICBpbWFnZXMsXG4gIHJlbmRlck1hdGNodXBzSW5mbyxcbiAgY3JlYXRlQ2hhbXBpb25Db250YWluZXIsXG59O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLXJhc2luLWJsYWNrOiAjMWQxZTJjO1xcbiAgLS10cmFuc3BhcmVudC1yYXNpbi1ibGFjazogIzFkMWUyYzkxO1xcbiAgLS1kYXJrLWdvbGQ6ICM5Mjc1NDM7XFxuICAtLWxpZ2h0LWdvbGQ6ICNjN2FiNmU7XFxufVxcblxcbiNmcm9udC1wYWdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IC00O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCYXJsb3dcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG4jZnJvbnQtcGFnZSAuYXBwLW5hbWUtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBwYWRkaW5nOiAwLjNlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweCAwcHggOHB4IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNmcm9udC1wYWdlIC5hcHAtbmFtZSB7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXG59XFxuI2Zyb250LXBhZ2UgLmFwcC1uYW1lLWNvbnRhaW5lcjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4jZnJvbnQtcGFnZSAucGFnZS1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMWVtIDA7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgYm9yZGVyLXdpZHRoOiAwIDAgMnB4IDA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jZnJvbnQtcGFnZSAuYXBwLW5hbWUtZGlzcGxheS1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBiMztcXG4gIHBhZGRpbmc6IDAuMmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDZlbTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxuICAjZnJvbnQtcGFnZSAuYXBwLW5hbWUtZGlzcGxheS1jb250YWluZXIge1xcbiAgICBwYWRkaW5nLXRvcDogMmVtO1xcbiAgfVxcbn1cXG4jZnJvbnQtcGFnZSAuYXBwLW5hbWUtZGlzcGxheSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDZweDtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG59XFxuI2Zyb250LXBhZ2UgLnRhZ2xpbmUtY29udGFpbmVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxuICBtYXJnaW4tdG9wOiAyZW07XFxufVxcbiNmcm9udC1wYWdlIC50YWdsaW5lLW1hdGNoLWNvdW50IHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDEuM2VtO1xcbn1cXG4jZnJvbnQtcGFnZSAuc2VhcmNoIHtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgbWluLXdpZHRoOiAxOGVtO1xcbiAgYmFja2dyb3VuZDogI2UyZTRlOTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIG1pbi1oZWlnaHQ6IDIuNmVtO1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcbiNmcm9udC1wYWdlIC5zcGxhc2gtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2Zyb250LXBhZ2UgLmJhY2tkcm9wLWltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiA1MHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogIzIyMjtcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuI2Zyb250LXBhZ2UgLmJhY2tkcm9wIHtcXG4gIHotaW5kZXg6IC0yO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAzMmVtO1xcbn1cXG4jZnJvbnQtcGFnZSAuYmFja2Ryb3A6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMTQxODFkLCByZ2JhKDIwLCAyNCwgMjksIDAuOTg1NTY1KSAwLjk3JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjk0NTEzMSkgMi4wNzgzMyUsIHJnYmEoMjAsIDI0LCAyOSwgMC44ODMwMDcpIDMuMjk2NjclLCByZ2JhKDIwLCAyNCwgMjksIDAuODAzNDk5KSA0LjYwMTY3JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjcxMDkxNSkgNS45NjY2NyUsIHJnYmEoMjAsIDI0LCAyOSwgMC42MDk1NjMpIDcuMzY1JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjUwMzc1KSA4Ljc3MTY3JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjM5Nzc4NCkgMTAuMTYlLCByZ2JhKDIwLCAyNCwgMjksIDAuMjk1OTczKSAxMS41MDUlLCByZ2JhKDIwLCAyNCwgMjksIDAuMjAyNjI0KSAxMi43OCUsIHJnYmEoMjAsIDI0LCAyOSwgMC4xMjIwNDQpIDEzLjk1ODMzJSwgcmdiYSgyMCwgMjQsIDI5LCAwLjA1ODU0MjMpIDE1LjAxNjY3JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjAxNjQyNDkpIDE1LjkyODMzJSwgcmdiYSgyMCwgMjQsIDI5LCAwKSAxNi42NjY2NyUsIHJnYmEoMjAsIDI0LCAyOSwgMCkgODMuMzMzMzMlLCByZ2JhKDIwLCAyNCwgMjksIDAuMDE2NDI0OSkgODQuMDcxNjclLCByZ2JhKDIwLCAyNCwgMjksIDAuMDU4NTQyMykgODQuOTgzMzMlLCByZ2JhKDIwLCAyNCwgMjksIDAuMTIyMDQ0KSA4Ni4wNDE2NyUsIHJnYmEoMjAsIDI0LCAyOSwgMC4yMDI2MjQpIDg3LjIyJSwgcmdiYSgyMCwgMjQsIDI5LCAwLjI5NTk3MykgODguNDk1JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjM5Nzc4NCkgODkuODQlLCByZ2JhKDIwLCAyNCwgMjksIDAuNTAzNzUpIDkxLjIyODMzJSwgcmdiYSgyMCwgMjQsIDI5LCAwLjYwOTU2MykgOTIuNjM1JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjcxMDkxNSkgOTQuMDMzMzMlLCByZ2JhKDIwLCAyNCwgMjksIDAuODAzNDk5KSA5NS4zOTgzMyUsIHJnYmEoMjAsIDI0LCAyOSwgMC44ODMwMDcpIDk2LjcwMzMzJSwgcmdiYSgyMCwgMjQsIDI5LCAwLjk0NTEzMSkgOTcuOTIxNjclLCByZ2JhKDIwLCAyNCwgMjksIDAuOTg1NTY1KSA5OS4wMyUsICMxNDE4MWQpLCBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzE0MTgxZCwgIzE0MTgxZCAyMS40ODE0OCUsIHJnYmEoMjAsIDI0LCAyOSwgMC45ODU1NjUpIDIzLjYzNzA0JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjk0NTEzMSkgMjYuMSUsIHJnYmEoMjAsIDI0LCAyOSwgMC44ODMwMDcpIDI4LjgwNzQxJSwgcmdiYSgyMCwgMjQsIDI5LCAwLjgwMzQ5OSkgMzEuNzA3NDElLCByZ2JhKDIwLCAyNCwgMjksIDAuNzEwOTE1KSAzNC43NDA3NCUsIHJnYmEoMjAsIDI0LCAyOSwgMC42MDk1NjMpIDM3Ljg0ODE1JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjUwMzc1KSA0MC45NzQwNyUsIHJnYmEoMjAsIDI0LCAyOSwgMC4zOTc3ODQpIDQ0LjA1OTI2JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjI5NTk3MykgNDcuMDQ4MTUlLCByZ2JhKDIwLCAyNCwgMjksIDAuMjAyNjI0KSA0OS44ODE0OCUsIHJnYmEoMjAsIDI0LCAyOSwgMC4xMjIwNDQpIDUyLjUlLCByZ2JhKDIwLCAyNCwgMjksIDAuMDU4NTQyMykgNTQuODUxODUlLCByZ2JhKDIwLCAyNCwgMjksIDAuMDE2NDI0OSkgNTYuODc3NzglLCByZ2JhKDIwLCAyNCwgMjksIDApIDU4LjUxODUyJSk7XFxufVxcbiNmcm9udC1wYWdlIC5iYWNrZHJvcCAuc2hvd24ge1xcbiAgb3BhY2l0eTogMC43O1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjZzIGVhc2UtaW47XFxufVxcbiNmcm9udC1wYWdlIC5iYWNrZHJvcCAuaGlkZGVuIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNnMgZWFzZS1pbjtcXG59XFxuI2Zyb250LXBhZ2UgI3RwYS1iYWNrZHJvcC5oaWRkZW4ge1xcbiAgdHJhbnNpdGlvbjogbm9uZTtcXG59XFxuI2Zyb250LXBhZ2UgLnNsb2dhbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDE2ZW07XFxufVxcbiNmcm9udC1wYWdlIC5zbG9nYW4tY29udGFpbmVyIC5zbG9nYW4tMSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCYXJsb3dcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG4jZnJvbnQtcGFnZSAuc2xvZ2FuLWNvbnRhaW5lciAuc2xvZ2FuLTIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmFybG93XFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxuICAjZnJvbnQtcGFnZSAuc2xvZ2FuLWNvbnRhaW5lciB7XFxuICAgIHRvcDogMTJlbTtcXG4gIH1cXG59XFxuI2Zyb250LXBhZ2UgLm1vYmlsZS1kaXNjb3Zlci1idG4tY29udGFpbmVyIHtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBjb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgYm9yZGVyLXJhZGl1czogNzUlIDEwJS8wJSA3NSU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3R0b206IDEwZW07XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xcbiAgI2Zyb250LXBhZ2UgLm1vYmlsZS1kaXNjb3Zlci1idG4tY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgICBib3R0b206IDVlbTtcXG4gIH1cXG59XFxuI2Zyb250LXBhZ2UgLm1vYmlsZS1kaXNjb3Zlci1idG4tY29udGFpbmVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbn1cXG4jZnJvbnQtcGFnZSAuZnJvbnQtcGFnZS1idG4ge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbn1cXG4jZnJvbnQtcGFnZSAuZnJvbnQtcGFnZS1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxufVxcbiNmcm9udC1wYWdlIC5kaXNjb3Zlci1idG4tY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDNlbTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB0b3A6IDIxLjVlbTtcXG59XFxuI2Zyb250LXBhZ2UgLmRpc2NvdmVyLWJ0biB7XFxuICBib3JkZXI6IHNvbGlkO1xcbiAgY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxuICBib3JkZXItcmFkaXVzOiA3NSUgMTAlLzAlIDc1JTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbn1cXG4jZnJvbnQtcGFnZSAuZGlzY292ZXItYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbn1cXG4jZnJvbnQtcGFnZSAubmF2aWdhdGlvbi1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2Zyb250LXBhZ2UgLmRlc2t0b3Atc2VhcmNoLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG4jZnJvbnQtcGFnZSAuYXV0by1jb21wbGV0ZS1uYW1lcyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDRkNGQ0O1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIGJvcmRlci10b3A6IG5vbmU7XFxuICB6LWluZGV4OiA0O1xcbiAgdG9wOiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxNHJlbTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4jZnJvbnQtcGFnZSAuYXV0by1jb21wbGV0ZS1uYW1lLXdyYXBwZXIge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q0ZDRkNDtcXG4gIGNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbiNmcm9udC1wYWdlIC5hdXRvLWNvbXBsZXRlLW5hbWUtd3JhcHBlcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG59XFxuI2Zyb250LXBhZ2UgLmF1dG8tY29tcGxldGUtbmFtZS13cmFwcGVyOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbn1cXG4jZnJvbnQtcGFnZSAuc2VhcmNoIHtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgbWluLXdpZHRoOiAxOGVtO1xcbiAgYmFja2dyb3VuZDogI2UyZTRlOTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIG1pbi1oZWlnaHQ6IDIuNmVtO1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcbiNmcm9udC1wYWdlIC5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHBhZGRpbmc6IDAgMS4zZW0gMC42ZW0gMS4zZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4jZnJvbnQtcGFnZSAuZm9vdGVyLWxpbmtzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbiNmcm9udC1wYWdlIC5naXRodWItbGluayB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjJlbTtcXG4gIHBhZGRpbmctdG9wOiAwLjRlbTtcXG4gIG1hcmdpbi1yaWdodDogMWVtO1xcbn1cXG4jZnJvbnQtcGFnZSAuZ2l0aHViLWljb24ge1xcbiAgd2lkdGg6IDIuNWVtO1xcbiAgdHJhbnNpdGlvbjogZmlsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG4jZnJvbnQtcGFnZSAuZ2l0aHViLWxpbms6aG92ZXIgLmdpdGh1Yi1pY29uIHtcXG4gIGZpbGw6IHZhcigtLXJhc2luLWJsYWNrKTtcXG59XFxuI2Zyb250LXBhZ2UgLmxpbmtlZGluLWxpbmsge1xcbiAgbWFyZ2luLWJvdHRvbTogMC4yZW07XFxuICBwYWRkaW5nLXRvcDogMC40ZW07XFxuICBtYXJnaW4tbGVmdDogMWVtO1xcbn1cXG4jZnJvbnQtcGFnZSAubGlua2VkaW4taWNvbiB7XFxuICB3aWR0aDogMi41ZW07XFxuICB0cmFuc2l0aW9uOiBmaWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcbiNmcm9udC1wYWdlIC5saW5rZWRpbi1saW5rOmhvdmVyIC5saW5rZWRpbi1pY29uIHtcXG4gIGZpbGw6IHZhcigtLXJhc2luLWJsYWNrKTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuICAjZnJvbnQtcGFnZSAuZGVza3RvcC1zZWFyY2gtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gICNmcm9udC1wYWdlIC5tb2JpbGUtZGlzY292ZXItYnRuLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAjZnJvbnQtcGFnZSAuZGlzY292ZXItYnRuLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbiAgI2Zyb250LXBhZ2UgLmxlZ2FsLWJvaWxlcnBsYXRlIHtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIHBhZGRpbmctdG9wOiAwLjZlbTtcXG4gIH1cXG4gICNmcm9udC1wYWdlIC5zbG9nYW4tY29udGFpbmVyIHtcXG4gICAgdG9wOiAzMGVtO1xcbiAgfVxcbiAgI2Zyb250LXBhZ2UgLnNsb2dhbi0xIHtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICB9XFxuICAjZnJvbnQtcGFnZSAuc2xvZ2FuLTIge1xcbiAgICBmb250LXNpemU6IDIuMXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDE0MDBweCkge1xcbiAgI2Zyb250LXBhZ2UgLmRpc2NvdmVyLWJ0bi1jb250YWluZXIge1xcbiAgICB0b3A6IDE4ZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gICNmcm9udC1wYWdlIC5hcHAtbmFtZS1kaXNwbGF5LWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmctdG9wOiA0ZW07XFxuICB9XFxuICAjZnJvbnQtcGFnZSAuc2xvZ2FuLWNvbnRhaW5lciB7XFxuICAgIHRvcDogMTNlbTtcXG4gIH1cXG4gICNmcm9udC1wYWdlIC5tb2JpbGUtZGlzY292ZXItYnRuLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAxMGVtO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzaGVldHMvZnJvbnRwYWdlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLG9DQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0Usb0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtBQUNGO0FBQ0U7RUFDRSxrQ0FBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7QUFDSjtBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUdFO0VBQ0UsdUJBQUE7RUFDQSx1QkFBQTtBQURKO0FBSUU7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRko7QUFLRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFISjtBQUtJO0VBWkY7SUFhSSxnQkFBQTtFQUZKO0FBQ0Y7QUFLRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FBSEo7QUFNRTtFQUNFLFlBQUE7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O0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFoRko7QUFtRkU7RUFDRSxhQUFBO0FBakZKO0FBb0ZFO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBbEZKO0FBcUZFO0VBQ0UsWUFBQTtFQUNBLGlDQUFBO0FBbkZKO0FBdUZJO0VBQ0Usd0JBQUE7QUFyRk47QUF5RkU7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUF2Rko7QUEwRkU7RUFDRSxZQUFBO0VBQ0EsaUNBQUE7QUF4Rko7QUE0Rkk7RUFDRSx3QkFBQTtBQTFGTjtBQThGRTtFQUNFO0lBQ0UsY0FBQTtFQTVGSjtBQUNGO0FBK0ZFO0VBQ0U7SUFDRSxhQUFBO0VBN0ZKO0VBZ0dFO0lBQ0UsY0FBQTtFQTlGSjtFQWlHRTtJQUNFLGNBQUE7SUFDQSxrQkFBQTtFQS9GSjtFQWtHRTtJQUNFLFNBQUE7RUFoR0o7RUFtR0U7SUFDRSxpQkFBQTtFQWpHSjtFQW9HRTtJQUNFLGlCQUFBO0VBbEdKO0FBQ0Y7QUFxR0U7RUFDRTtJQUNFLFNBQUE7RUFuR0o7QUFDRjtBQXNHRTtFQUNFO0lBQ0UsZ0JBQUE7RUFwR0o7RUF1R0U7SUFDRSxTQUFBO0VBckdKO0VBd0dFO0lBQ0Usa0JBQUE7SUFDQSxZQUFBO0VBdEdKO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1yYXNpbi1ibGFjazogIzFkMWUyYztcXG4gIC0tdHJhbnNwYXJlbnQtcmFzaW4tYmxhY2s6ICMxZDFlMmM5MTtcXG4gIC0tZGFyay1nb2xkOiAjOTI3NTQzO1xcbiAgLS1saWdodC1nb2xkOiAjYzdhYjZlO1xcbn1cXG5cXG4jZnJvbnQtcGFnZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAtNDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmFybG93XFxcIiwgc2Fucy1zZXJpZjtcXG5cXG4gIC5hcHAtbmFtZS1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgICBwYWRkaW5nOiAwLjNlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4IDBweCA4cHggMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAgLmFwcC1uYW1lIHtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xcbiAgfVxcblxcbiAgLmFwcC1uYW1lLWNvbnRhaW5lcjpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIH1cXG5cXG4gIC5wYWdlLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxZW0gMDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgICBib3JkZXItd2lkdGg6IDAgMCAycHggMDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5hcHAtbmFtZS1kaXNwbGF5LWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwYjM7XFxuICAgIHBhZGRpbmc6IDAuMmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOiA2ZW07XFxuXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xcbiAgICAgIHBhZGRpbmctdG9wOiAyZW07XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5hcHAtbmFtZS1kaXNwbGF5IHtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDZweDtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgfVxcblxcbiAgLnRhZ2xpbmUtY29udGFpbmVyIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICBtYXJnaW4tdG9wOiAyZW07XFxuICB9XFxuXFxuICAudGFnbGluZS1tYXRjaC1jb3VudCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMS4zZW07XFxuICB9XFxuXFxuICAuc2VhcmNoIHtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIG1pbi13aWR0aDogMThlbTtcXG4gICAgYmFja2dyb3VuZDogI2UyZTRlOTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBtaW4taGVpZ2h0OiAyLjZlbTtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICB9XFxuXFxuICAuc3BsYXNoLXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmJhY2tkcm9wLWltZyB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogNTB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiAjMjIyO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxuICB9XFxuXFxuICAuYmFja2Ryb3Age1xcbiAgICB6LWluZGV4OiAtMjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogMzJlbTtcXG4gIH1cXG5cXG4gIC5iYWNrZHJvcDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgICA5MGRlZyxcXG4gICAgICAgICMxNDE4MWQsXFxuICAgICAgICByZ2JhKDIwLCAyNCwgMjksIDAuOTg1NTY1KSAwLjk3JSxcXG4gICAgICAgIHJnYmEoMjAsIDI0LCAyOSwgMC45NDUxMzEpIDIuMDc4MzMlLFxcbiAgICAgICAgcmdiYSgyMCwgMjQsIDI5LCAwLjg4MzAwNykgMy4yOTY2NyUsXFxuICAgICAgICByZ2JhKDIwLCAyNCwgMjksIDAuODAzNDk5KSA0LjYwMTY3JSxcXG4gICAgICAgIHJnYmEoMjAsIDI0LCAyOSwgMC43MTA5MTUpIDUuOTY2NjclLFxcbiAgICAgICAgcmdiYSgyMCwgMjQsIDI5LCAwLjYwOTU2MykgNy4zNjUlLFxcbiAgICAgICAgcmdiYSgyMCwgMjQsIDI5LCAwLjUwMzc1KSA4Ljc3MTY3JSxcXG4gICAgICAgIHJnYmEoMjAsIDI0LCAyOSwgMC4zOTc3ODQpIDEwLjE2JSxcXG4gICAgICAgIHJnYmEoMjAsIDI0LCAyOSwgMC4yOTU5NzMpIDExLjUwNSUsXFxuICAgICAgICByZ2JhKDIwLCAyNCwgMjksIDAuMjAyNjI0KSAxMi43OCUsXFxuICAgICAgICByZ2JhKDIwLCAyNCwgMjksIDAuMTIyMDQ0KSAxMy45NTgzMyUsXFxuICAgICAgICByZ2JhKDIwLCAyNCwgMjksIDAuMDU4NTQyMykgMTUuMDE2NjclLFxcbiAgICAgICAgcmdiYSgyMCwgMjQsIDI5LCAwLjAxNjQyNDkpIDE1LjkyODMzJSxcXG4gICAgICAgIHJnYmEoMjAsIDI0LCAyOSwgMCkgMTYuNjY2NjclLFxcbiAgICAgICAgcmdiYSgyMCwgMjQsIDI5LCAwKSA4My4zMzMzMyUsXFxuICAgICAgICByZ2JhKDIwLCAyNCwgMjksIDAuMDE2NDI0OSkgODQuMDcxNjclLFxcbiAgICAgICAgcmdiYSgyMCwgMjQsIDI5LCAwLjA1ODU0MjMpIDg0Ljk4MzMzJSxcXG4gICAgICAgIHJnYmEoMjAsIDI0LCAyOSwgMC4xMjIwNDQpIDg2LjA0MTY3JSxcXG4gICAgICAgIHJnYmEoMjAsIDI0LCAyOSwgMC4yMDI2MjQpIDg3LjIyJSxcXG4gICAgICAgIHJnYmEoMjAsIDI0LCAyOSwgMC4yOTU5NzMpIDg4LjQ5NSUsXFxuICAgICAgICByZ2JhKDIwLCAyNCwgMjksIDAuMzk3Nzg0KSA4OS44NCUsXFxuICAgICAgICByZ2JhKDIwLCAyNCwgMjksIDAuNTAzNzUpIDkxLjIyODMzJSxcXG4gICAgICAgIHJnYmEoMjAsIDI0LCAyOSwgMC42MDk1NjMpIDkyLjYzNSUsXFxuICAgICAgICByZ2JhKDIwLCAyNCwgMjksIDAuNzEwOTE1KSA5NC4wMzMzMyUsXFxuICAgICAgICByZ2JhKDIwLCAyNCwgMjksIDAuODAzNDk5KSA5NS4zOTgzMyUsXFxuICAgICAgICByZ2JhKDIwLCAyNCwgMjksIDAuODgzMDA3KSA5Ni43MDMzMyUsXFxuICAgICAgICByZ2JhKDIwLCAyNCwgMjksIDAuOTQ1MTMxKSA5Ny45MjE2NyUsXFxuICAgICAgICByZ2JhKDIwLCAyNCwgMjksIDAuOTg1NTY1KSA5OS4wMyUsXFxuICAgICAgICAjMTQxODFkXFxuICAgICAgKSxcXG4gICAgICBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgICAwZGVnLFxcbiAgICAgICAgIzE0MTgxZCxcXG4gICAgICAgICMxNDE4MWQgMjEuNDgxNDglLFxcbiAgICAgICAgcmdiYSgyMCwgMjQsIDI5LCAwLjk4NTU2NSkgMjMuNjM3MDQlLFxcbiAgICAgICAgcmdiYSgyMCwgMjQsIDI5LCAwLjk0NTEzMSkgMjYuMSUsXFxuICAgICAgICByZ2JhKDIwLCAyNCwgMjksIDAuODgzMDA3KSAyOC44MDc0MSUsXFxuICAgICAgICByZ2JhKDIwLCAyNCwgMjksIDAuODAzNDk5KSAzMS43MDc0MSUsXFxuICAgICAgICByZ2JhKDIwLCAyNCwgMjksIDAuNzEwOTE1KSAzNC43NDA3NCUsXFxuICAgICAgICByZ2JhKDIwLCAyNCwgMjksIDAuNjA5NTYzKSAzNy44NDgxNSUsXFxuICAgICAgICByZ2JhKDIwLCAyNCwgMjksIDAuNTAzNzUpIDQwLjk3NDA3JSxcXG4gICAgICAgIHJnYmEoMjAsIDI0LCAyOSwgMC4zOTc3ODQpIDQ0LjA1OTI2JSxcXG4gICAgICAgIHJnYmEoMjAsIDI0LCAyOSwgMC4yOTU5NzMpIDQ3LjA0ODE1JSxcXG4gICAgICAgIHJnYmEoMjAsIDI0LCAyOSwgMC4yMDI2MjQpIDQ5Ljg4MTQ4JSxcXG4gICAgICAgIHJnYmEoMjAsIDI0LCAyOSwgMC4xMjIwNDQpIDUyLjUlLFxcbiAgICAgICAgcmdiYSgyMCwgMjQsIDI5LCAwLjA1ODU0MjMpIDU0Ljg1MTg1JSxcXG4gICAgICAgIHJnYmEoMjAsIDI0LCAyOSwgMC4wMTY0MjQ5KSA1Ni44Nzc3OCUsXFxuICAgICAgICByZ2JhKDIwLCAyNCwgMjksIDApIDU4LjUxODUyJVxcbiAgICAgICk7XFxuICB9XFxuXFxuICAuYmFja2Ryb3AgLnNob3duIHtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNnMgZWFzZS1pbjtcXG4gIH1cXG5cXG4gIC5iYWNrZHJvcCAuaGlkZGVuIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNnMgZWFzZS1pbjtcXG4gIH1cXG5cXG4gICN0cGEtYmFja2Ryb3AuaGlkZGVuIHtcXG4gICAgdHJhbnNpdGlvbjogbm9uZTtcXG4gIH1cXG5cXG4gIC5zbG9nYW4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDE2ZW07XFxuXFxuICAgIC5zbG9nYW4tMSB7XFxuICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgZm9udC1mYW1pbHk6IFxcXCJCYXJsb3dcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICB9XFxuXFxuICAgIC5zbG9nYW4tMiB7XFxuICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgZm9udC1mYW1pbHk6IFxcXCJCYXJsb3dcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICB9XFxuXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xcbiAgICAgIHRvcDogMTJlbTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLm1vYmlsZS1kaXNjb3Zlci1idG4tY29udGFpbmVyIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDc1JSAxMCUvMCUgNzUlO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiAxMGVtO1xcblxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICAgICAgYm90dG9tOiA1ZW07XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5tb2JpbGUtZGlzY292ZXItYnRuLWNvbnRhaW5lcjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgfVxcblxcbiAgLmZyb250LXBhZ2UtYnRuIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICB9XFxuXFxuICAuZnJvbnQtcGFnZS1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gIH1cXG5cXG4gIC5kaXNjb3Zlci1idG4tY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzZW07XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHRvcDogMjEuNWVtO1xcbiAgfVxcblxcbiAgLmRpc2NvdmVyLWJ0biB7XFxuICAgIGJvcmRlcjogc29saWQ7XFxuICAgIGNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA3NSUgMTAlLzAlIDc1JTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gIH1cXG5cXG4gIC5kaXNjb3Zlci1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gIH1cXG5cXG4gIC5uYXZpZ2F0aW9uLXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmRlc2t0b3Atc2VhcmNoLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLmF1dG8tY29tcGxldGUtbmFtZXMge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ0ZDQ7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIHotaW5kZXg6IDQ7XFxuICAgIHRvcDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDE0cmVtO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAuYXV0by1jb21wbGV0ZS1uYW1lLXdyYXBwZXIge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDRkNGQ0O1xcbiAgICBjb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5hdXRvLWNvbXBsZXRlLW5hbWUtd3JhcHBlcjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgfVxcblxcbiAgLmF1dG8tY29tcGxldGUtbmFtZS13cmFwcGVyOmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICB9XFxuXFxuICAuc2VhcmNoIHtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIG1pbi13aWR0aDogMThlbTtcXG4gICAgYmFja2dyb3VuZDogI2UyZTRlOTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBtaW4taGVpZ2h0OiAyLjZlbTtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICB9XFxuXFxuICAuZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDAuOGVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcGFkZGluZzogMCAxLjNlbSAwLjZlbSAxLjNlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIH1cXG5cXG4gIC5mb290ZXItbGlua3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcblxcbiAgLmdpdGh1Yi1saW5rIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4yZW07XFxuICAgIHBhZGRpbmctdG9wOiAwLjRlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XFxuICB9XFxuXFxuICAuZ2l0aHViLWljb24ge1xcbiAgICB3aWR0aDogMi41ZW07XFxuICAgIHRyYW5zaXRpb246IGZpbGwgMC4ycyBlYXNlLWluLW91dDtcXG4gIH1cXG5cXG4gIC5naXRodWItbGluazpob3ZlciB7XFxuICAgIC5naXRodWItaWNvbiB7XFxuICAgICAgZmlsbDogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgICB9XFxuICB9XFxuXFxuICAubGlua2VkaW4tbGluayB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuMmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMC40ZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XFxuICB9XFxuXFxuICAubGlua2VkaW4taWNvbiB7XFxuICAgIHdpZHRoOiAyLjVlbTtcXG4gICAgdHJhbnNpdGlvbjogZmlsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgfVxcblxcbiAgLmxpbmtlZGluLWxpbms6aG92ZXIge1xcbiAgICAubGlua2VkaW4taWNvbiB7XFxuICAgICAgZmlsbDogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcXG4gICAgLmRlc2t0b3Atc2VhcmNoLWNvbnRhaW5lciB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gICAgLm1vYmlsZS1kaXNjb3Zlci1idG4tY29udGFpbmVyIHtcXG4gICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5kaXNjb3Zlci1idG4tY29udGFpbmVyIHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcblxcbiAgICAubGVnYWwtYm9pbGVycGxhdGUge1xcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICAgIHBhZGRpbmctdG9wOiAwLjZlbTtcXG4gICAgfVxcblxcbiAgICAuc2xvZ2FuLWNvbnRhaW5lciB7XFxuICAgICAgdG9wOiAzMGVtO1xcbiAgICB9XFxuXFxuICAgIC5zbG9nYW4tMSB7XFxuICAgICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIH1cXG5cXG4gICAgLnNsb2dhbi0yIHtcXG4gICAgICBmb250LXNpemU6IDIuMXJlbTtcXG4gICAgfVxcbiAgfVxcblxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDE0MDBweCkge1xcbiAgICAuZGlzY292ZXItYnRuLWNvbnRhaW5lciB7XFxuICAgICAgdG9wOiAxOGVtO1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuICAgIC5hcHAtbmFtZS1kaXNwbGF5LWNvbnRhaW5lciB7XFxuICAgICAgcGFkZGluZy10b3A6IDRlbTtcXG4gICAgfVxcblxcbiAgICAuc2xvZ2FuLWNvbnRhaW5lciB7XFxuICAgICAgdG9wOiAxM2VtO1xcbiAgICB9XFxuXFxuICAgIC5tb2JpbGUtZGlzY292ZXItYnRuLWNvbnRhaW5lciB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGJvdHRvbTogMTBlbTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1yYXNpbi1ibGFjazogIzFkMWUyYztcXG4gIC0tZGFyay1nb2xkOiAjOTI3NTQzO1xcbiAgLS1saWdodC1nb2xkOiAjYzdhYjZlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICBwYWRkaW5nOiAycmVtIDA7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCYXJsb3dcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG4ubW9kYWwgI21haW4tY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXgtd2lkdGg6IDc1JTtcXG4gIG1pbi1oZWlnaHQ6IDQ5cmVtO1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLm1vZGFsICNtYWluLWNvbnRhaW5lciAjbWFpbiB7XFxuICBjb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG59XFxuLm1vZGFsIC5tb2RhbC1oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMGUwO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC42ZW07XFxuICBsaW5lLWhlaWdodDogMS40O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMGJmO1xcbn1cXG4ubW9kYWwgLm5hdmlnYXRpb24tYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5tb2RhbCAuY2xvc2UtbW9kYWwtYnRuLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMS4yZW07XFxufVxcbi5tb2RhbCAuY2xvc2UtbW9kYWwtYnRuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBmb250LXNpemU6IDEuNmVtO1xcbn1cXG4ubW9kYWwgLmNsb3NlLW1vZGFsLWJ0bjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxufVxcbi5tb2RhbCAubW9kYWwtbmF2LWxpbmtzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubW9kYWwgLm1vZGFsLW5hdi1saW5rIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcbi5tb2RhbCAubW9kYWwtbmF2LWxpbms6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxufVxcbi5tb2RhbCAuY2hhbXBpb24taGVhZGluZyB7XFxuICBtYXJnaW46IGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tbmFtZSB7XFxuICBtYXJnaW46IGF1dG87XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tdGl0bGUge1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbWFyZ2luLXRvcDogMC41ZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1yb2xlcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tcm9sZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXJlc291cmNlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tcm9sZS1pbWFnZSB7XFxuICBoZWlnaHQ6IDMuNXJlbTtcXG4gIHdpZHRoOiAzLjVyZW07XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tcmVzb3VyY2UtaW1hZ2Uge1xcbiAgaGVpZ2h0OiAzLjVyZW07XFxuICB3aWR0aDogMy41cmVtO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXJvbGUtbmFtZSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXJlc291cmNlLW5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1tYWluLWluZm8ge1xcbiAgcGFkZGluZzogMS44cmVtO1xcbiAgbWF4LXdpZHRoOiAzNHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBsYXN0IGJhc2VsaW5lO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XFxuICBmcm9tIHtcXG4gICAgdG9wOiAtMzAwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICB0byB7XFxuICAgIHRvcDogMDtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBhbmltYXRldG9wIHtcXG4gIGZyb20ge1xcbiAgICB0b3A6IC0zMDBweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdG9wOiAwO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG4ubW9kYWwgLmxvcmUtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBlMDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxufVxcbi5tb2RhbCAuc3ViaGVhZGluZyB7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAwLjRlbTtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1vZGFsIC5hYmlsaXRpZXMtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBlMDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICB3aWR0aDogMjhlbTtcXG59XFxuLm1vZGFsIC5hYmlsaXRpZXMtaGVhZGluZyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tb2RhbCAuYWJpbGl0eS1pbWdzIHtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuLm1vZGFsIC5hYmlsaXR5LWRlc2NyaXB0aW9uIHtcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tZGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1leHRyYS1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ubW9kYWwgLmFiaWxpdHktaW5mbyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubW9kYWwgLmFiaWxpdHktaW5mby5hY3RpdmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5tb2RhbCAuc3BlbGwtaW1nIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMCAwLjVyZW07XFxuICBoZWlnaHQ6IDMuM3JlbTtcXG4gIHdpZHRoOiAzLjNyZW07XFxufVxcbi5tb2RhbCAuc3BlbGwtaW1nLmNsaWNrZWQge1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci13aWR0aDogNHB4O1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXRpcHMtc2VjdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwZTA7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG4gIG1heC13aWR0aDogMzRyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tdGlwcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi10aXAge1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG4ubW9kYWwgI3N0YXRzLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nOiAwO1xcbiAgbWF4LXdpZHRoOiA3NSU7XFxuICBtaW4taGVpZ2h0OiA0OXJlbTtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLm1vZGFsICNzdGF0cy1jb250YWluZXIgI3N0YXRzIHtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXN0YXRzLW92ZXJ2aWV3IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxuICBtYXgtd2lkdGg6IDI1cmVtO1xcbiAgbWluLXdpZHRoOiAyMHJlbTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuLm1vZGFsIC53aW4tcmF0ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLm1vZGFsIC5waWNrLXJhdGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5tb2RhbCAubGFuZS1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1vZGFsIC5waWNrLXJhdGUtdmFsdWUge1xcbiAgbWFyZ2luLXRvcDogMC40ZW07XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxufVxcbi5tb2RhbCAud2luLXJhdGUtdmFsdWUge1xcbiAgbWFyZ2luLXRvcDogMC40ZW07XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxufVxcbi5tb2RhbCAubGFiZWwge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLWRhbWFnZS1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMGUwO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC42ZW07XFxuICBsaW5lLWhlaWdodDogMS40O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIG1heC1oZWlnaHQ6IDE3LjVyZW07XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuLm1vZGFsIC5kYW1hZ2UtaGVhZGluZyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tb2RhbCAuY2lyY3VsYXItY2hhcnQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogODAlO1xcbiAgbWF4LWhlaWdodDogMTRlbTtcXG59XFxuLm1vZGFsIC5jaXJjbGUge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZS13aWR0aDogMi4yO1xcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xcbiAgYW5pbWF0aW9uOiBwcm9ncmVzcyAxcyBlYXNlLW91dCBmb3J3YXJkcztcXG59XFxuLm1vZGFsICNtYWdpYy1kYW1hZ2Utc3Ryb2tlIHtcXG4gIHN0cm9rZTogIzM1YTdmZjtcXG59XFxuLm1vZGFsICNwaHlzaWNhbC1kYW1hZ2Utc3Ryb2tlIHtcXG4gIHN0cm9rZTogI2ZmNTk2NDtcXG59XFxuLm1vZGFsICN0cnVlLWRhbWFnZS1zdHJva2Uge1xcbiAgc3Ryb2tlOiAjZmZlNzRjO1xcbn1cXG5Aa2V5ZnJhbWVzIHByb2dyZXNzIHtcXG4gIDAlIHtcXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMCAxMDA7XFxuICB9XFxufVxcbi5tb2RhbCAudG90YWwtZGFtYWdlLXRleHQge1xcbiAgZm9udC1zaXplOiA0cHg7XFxuICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xcbiAgZmlsbDogd2hpdGU7XFxufVxcbi5tb2RhbCAudG90YWwtZGFtYWdlLWxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogM3B4O1xcbiAgdGV4dC1hbmNob3I6IG1pZGRsZTtcXG4gIGZpbGw6IHZhcigtLWRhcmstZ29sZCk7XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tbWFpbi1zdGF0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcbi5tb2RhbCAuY2hhbXBpb24taXRlbS1idWlsZHMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMGUwO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC42ZW07XFxuICBsaW5lLWhlaWdodDogMS40O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIG1heC1oZWlnaHQ6IDE3LjVyZW07XFxufVxcbi5tb2RhbCAuZGFtYWdlLXN0YXRzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1vZGFsIC5kYW1hZ2UtaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWF4LWhlaWdodDogOTIlO1xcbiAgaGVpZ2h0OiA5MiU7XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuLm1vZGFsIC5kYW1hZ2UtdHlwZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuLm1vZGFsIC5kYW1hZ2Utc3RhdHMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuLm1vZGFsICNwaHlzaWNhbC1kYW1hZ2UtbGFiZWwge1xcbiAgY29sb3I6ICNmZjU5NjQ7XFxufVxcbi5tb2RhbCAjbWFnaWMtZGFtYWdlLWxhYmVsIHtcXG4gIGNvbG9yOiAjMzVhN2ZmO1xcbn1cXG4ubW9kYWwgI3RydWUtZGFtYWdlLWxhYmVsIHtcXG4gIGNvbG9yOiAjZmZlNzRjO1xcbn1cXG4ubW9kYWwgLml0ZW0tZGV0YWlscy1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMGUwO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC42ZW07XFxuICBsaW5lLWhlaWdodDogMS40O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwO1xcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgd2lkdGg6IDQwJTtcXG4gIHJpZ2h0OiAxMGVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMy41ZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tb2RhbCAuaXRlbS1uYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5tb2RhbCAubWFpbi1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxufVxcbi5tb2RhbCAuY29zdC1sYWJlbCB7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5tb2RhbCAuY29tcG9uZW50LWl0ZW1zLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ubW9kYWwgLmNvbXBvbmVudC1pdGVtLW5hbWUge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4ubW9kYWwgLmNvc3QtYW1vdW50IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLm1vZGFsIC5jb21wb25lbnQtaXRlbS1jb3N0LWxhYmVsIHtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLm1vZGFsIC5jb21wb25lbnQtaXRlbS1hbW91bnQge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4ubW9kYWwgLmNvbXBvbmVudC1pdGVtLWRldGFpbHMtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBlMDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5tb2RhbCAuaXRlbS1zZXRzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1heC1oZWlnaHQ6IDkwJTtcXG59XFxuLm1vZGFsIC5pdGVtLXNldC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICBwYWRkaW5nOiAwLjRlbTtcXG59XFxuLm1vZGFsIC5tYWluLWNvbXBvbmVudC1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMGUwO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC42ZW07XFxuICBsaW5lLWhlaWdodDogMS40O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjA0MDA4MztcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogMGVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbn1cXG4ubW9kYWwgLml0ZW0taW1nIHtcXG4gIG1heC13aWR0aDogMi43ZW07XFxuICBtYXgtaGVpZ2h0OiAyLjdlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwO1xcbn1cXG4ubW9kYWwgLmNvbXBvbmVudC1pdGVtLWltZyB7XFxuICBtYXgtd2lkdGg6IDEuOGVtO1xcbiAgbWF4LWhlaWdodDogMS44ZW07XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tbWF0Y2h1cHMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMGUwO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC42ZW07XFxuICBsaW5lLWhlaWdodDogMS40O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIG1heC1oZWlnaHQ6IDI1LjJyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDAgMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuLm1vZGFsIC5tYXRjaHVwcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBtYXgtd2lkdGg6IDI0cmVtO1xcbn1cXG4ubW9kYWwgLm1hdGNodXAtaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE2MWE7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIG1hcmdpbjogYXV0byAwLjVlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG59XFxuLm1vZGFsIC5tYXRjaHVwLWluZm86aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTYxYWM5O1xcbn1cXG4ubW9kYWwgLm1hdGNodXAtc3RhdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBcXFwiQXBwbGUgU0QgR290aGljIE5lb1xcXCIsIEFwcGxlR290aGljLCBEb3R1bSwgQXJpYWwsIFRhaG9tYTtcXG59XFxuLm1vZGFsIC5lbmVteS1jaGFtcGlvbi1pbWcge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgbWF4LWhlaWdodDogM2VtO1xcbiAgbWF4LXdpZHRoOiAzZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG59XFxuLm1vZGFsIC53aW5yYXRlLWFnYWluc3QtcGVyY2VudGFnZS5ibHVlIHtcXG4gIGNvbG9yOiAjMzVhN2ZmO1xcbn1cXG4ubW9kYWwgLndpbnJhdGUtYWdhaW5zdC1wZXJjZW50YWdlLnJlZCB7XFxuICBjb2xvcjogI2ZmNTk2NDtcXG59XFxuLm1vZGFsICNza2lucy1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMDtcXG4gIG1heC13aWR0aDogNzUlO1xcbiAgbWluLWhlaWdodDogNDlyZW07XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtaW4taGVpZ2h0OiAwO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXgtd2lkdGg6IDk5JTtcXG4gIHdpZHRoOiA5OSU7XFxufVxcbi5tb2RhbCAjc2tpbnMtY29udGFpbmVyIC5uYXZpZ2F0aW9uLWJhciB7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggdmFyKC0tZGFyay1nb2xkKTtcXG59XFxuLm1vZGFsICNza2lucy1jb250YWluZXIgI3NraW5zIHtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbn1cXG4ubW9kYWwgI3NraW5zLWNvbnRhaW5lciAubW9kYWwtaGVhZGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi5tb2RhbCAuc2tpbi1pbWFnZS1jb250YWluZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5tb2RhbCAuc2tpbi1pbWFnZS1jb250YWluZXIuc2hvd24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5tb2RhbCAuc2tpbi1pbWFnZSB7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5tb2RhbCAuc2tpbi1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG4ubW9kYWwgI3NraW5zLWNvbnRhaW5lciAuY2hhbXBpb24taGVhZGluZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5tb2RhbCAuaW1nLXNjcm9sbC1hcnJvdyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG4ubW9kYWwgLmltZy1zY3JvbGwtYXJyb3c6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTIwcHgpIHtcXG4gIC5tb2RhbCAuY29tcG9uZW50LWl0ZW0taW1nIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5tb2RhbCAuaXRlbS1zZXRzLWNvbnRhaW5lciB7XFxuICAgIG1pbi1oZWlnaHQ6IDgwJTtcXG4gIH1cXG4gIC5tb2RhbCAuaXRlbS1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgIG1pbi13aWR0aDogNzAlO1xcbiAgICByaWdodDogLTZlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDEyNTBweCkge1xcbiAgLm1vZGFsIC5pdGVtLWltZyB7XFxuICAgIG1heC1oZWlnaHQ6IDIuMnJlbTtcXG4gICAgbWF4LXdpZHRoOiAyLjJyZW07XFxuICB9XFxuICAubW9kYWwgLmNoYW1waW9uLWRldGFpbHMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICB9XFxuICAubW9kYWwgLmFiaWxpdGllcy1jb250YWluZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDMxcmVtO1xcbiAgfVxcbiAgLm1vZGFsIC5sb3JlLWNvbnRhaW5lciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG4gIC5tb2RhbCAjbWFpbi1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDc2cmVtO1xcbiAgfVxcbiAgLm1vZGFsIC5pdGVtLWRldGFpbHMtY29udGFpbmVyIHtcXG4gICAgbWluLXdpZHRoOiA3MCU7XFxuICAgIHJpZ2h0OiAtNmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIC5tb2RhbCAuaXRlbS1zZXRzLWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB9XFxuICAubW9kYWwgLml0ZW0tc2V0LWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAubW9kYWwgLm1hdGNodXBzIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5tb2RhbCAuY2hhbXBpb24tbWF0Y2h1cHMge1xcbiAgICBtYXgtaGVpZ2h0OiAyOC4ycmVtO1xcbiAgfVxcbiAgLm1vZGFsIC5tYXRjaHVwLWluZm8ge1xcbiAgICBtYXJnaW46IDAuMmVtIGF1dG87XFxuICB9XFxuICAubW9kYWwgI21haW4tY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgLm1vZGFsICNzdGF0cy1jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDYzcmVtO1xcbiAgfVxcbiAgLm1vZGFsIC5pdGVtLWRldGFpbHMtY29udGFpbmVyIHtcXG4gICAgcmlnaHQ6IC0xZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA4NDBweCkge1xcbiAgLm1vZGFsIC5kYW1hZ2UtaW5mbyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICB9XFxuICAubW9kYWwgLmdhbWVzLXBsYXllZC1hZ2FpbnN0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5tb2RhbCAuZGFtYWdlLXN0YXRzLWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NjBweCkge1xcbiAgLm1vZGFsIC5jaGFtcGlvbi1tYWluLXN0YXRzIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5tb2RhbCAuaXRlbS1zZXQtY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIH1cXG4gIC5tb2RhbCAuaXRlbS1zZXRzLWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAubW9kYWwgLmNoYW1waW9uLWRhbWFnZS1jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAubW9kYWwgLmRhbWFnZS1zdGF0cy1pbmZvIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5tb2RhbCAuZGFtYWdlLWluZm8ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIH1cXG4gIC5tb2RhbCAuZGFtYWdlLXR5cGUtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAwLjJlbSBhdXRvO1xcbiAgfVxcbiAgLm1vZGFsIC5jaXJjdWxhci1jaGFydCB7XFxuICAgIG1heC1oZWlnaHQ6IDE5NXB4O1xcbiAgICBtYXgtd2lkdGg6IDgwJTtcXG4gIH1cXG4gIC5tb2RhbCAuZGFtYWdlLXN0YXRzLWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAubW9kYWwgLmNoYW1waW9uLXJvbGUge1xcbiAgICBtYXJnaW4tbGVmdDogMC41ZW07XFxuICAgIG1hcmdpbi1yaWdodDogMC41ZW07XFxuICB9XFxuICAubW9kYWwgLmNoYW1waW9uLXJlc291cmNlIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xcbiAgfVxcbiAgLm1vZGFsIC5jaGFtcGlvbi1yb2xlcyB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gIH1cXG4gIC5tb2RhbCAuc3BlbGwtaW1nIHtcXG4gICAgaGVpZ2h0OiAyLjhlbTtcXG4gICAgd2lkdGg6IDIuOGVtO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICB9XFxuICAubW9kYWwgLml0ZW0tZGV0YWlscy1jb250YWluZXIge1xcbiAgICByaWdodDogMmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNDE0cHgpIHtcXG4gIC5tb2RhbCAuY2hhbXBpb24tc3RhdHMtb3ZlcnZpZXcge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG1pbi13aWR0aDogMTdyZW07XFxuICB9XFxuICAubW9kYWwgLmNoYW1waW9uLW5hbWUge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxuICAubW9kYWwgLm1vZGFsLW5hdi1saW5rcyB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gIH1cXG4gIC5tb2RhbCAuY2xvc2UtbW9kYWwtYnRuLXdyYXBwZXIge1xcbiAgICBsZWZ0OiAwLjdlbTtcXG4gIH1cXG4gIC5tb2RhbCAuY2xvc2UtbW9kYWwtYnRuIHtcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEzMDBweCkge1xcbiAgLm1vZGFsICNza2lucy1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1heC13aWR0aDogNzAlO1xcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTk1MHB4KSB7XFxuICAubW9kYWwgI3NraW5zLWNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogNTAlO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzaGVldHMvbW9kYWxzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUE4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RTtFQUNFO0lBQ0UsOEJBQUE7SUFDQSw4QkFBQTtJQUNBLGVBQUE7RUEvQko7RUFrQ0U7SUFDRSxhQUFBO0VBaENKO0VBbUNFO0lBQ0UsbUJBQUE7RUFqQ0o7QUFDRjtBQW9DRTtFQUNFO0lBQ0Usc0JBQUE7RUFsQ0o7RUFxQ0U7SUFDRSxtQkFBQTtFQW5DSjtFQXNDRTtJQUNFLHNCQUFBO0VBcENKO0VBdUNFO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VBckNKO0VBd0NFO0lBQ0Usc0JBQUE7RUF0Q0o7RUF5Q0U7SUFDRSxtQkFBQTtJQUNBLHVCQUFBO0VBdkNKO0VBMENFO0lBQ0Usa0JBQUE7RUF4Q0o7RUEyQ0U7SUFDRSxpQkFBQTtJQUNBLGNBQUE7RUF6Q0o7RUE0Q0U7SUFDRSxzQkFBQTtFQTFDSjtFQTZDRTtJQUNFLGtCQUFBO0lBQ0EsbUJBQUE7RUEzQ0o7RUE4Q0U7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0VBNUNKO0VBK0NFO0lBQ0UsZUFBQTtFQTdDSjtFQWdERTtJQUNFLGFBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtFQTlDSjtFQWlERTtJQUNFLFVBQUE7RUEvQ0o7QUFDRjtBQWtERTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGdCQUFBO0VBaERKO0VBbURFO0lBQ0UsZUFBQTtFQWpESjtFQW9ERTtJQUNFLGVBQUE7RUFsREo7RUFxREU7SUFDRSxXQUFBO0VBbkRKO0VBc0RFO0lBQ0UsZ0JBQUE7RUFwREo7QUFDRjtBQXVERTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7RUFyREo7QUFDRjtBQXdERTtFQUNFO0lBQ0UsY0FBQTtFQXRESjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLXJhc2luLWJsYWNrOiAjMWQxZTJjO1xcbiAgLS1kYXJrLWdvbGQ6ICM5Mjc1NDM7XFxuICAtLWxpZ2h0LWdvbGQ6ICNjN2FiNmU7XFxufVxcblxcbkBtaXhpbiBjb250YWluZXJCYWNrZ3JvdW5kIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBlMDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxufVxcblxcbkBtaXhpbiBzdWJIZWFkaW5nU3R5bGUge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMC40ZW07XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbkBtaXhpbiBpY29uU2l6ZSB7XFxuICBoZWlnaHQ6IDMuNXJlbTtcXG4gIHdpZHRoOiAzLjVyZW07XFxufVxcblxcbkBtaXhpbiBpY29uVGV4dCB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG5AbWl4aW4gaWNvbkNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbn1cXG5cXG5AbWl4aW4gc21hbGxNYXJnaW4ge1xcbiAgbWFyZ2luLXRvcDogMC41ZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG59XFxuXFxuQG1peGluIG1vZGFsQ29udGVudENvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nOiAwO1xcbiAgbWF4LXdpZHRoOiA3NSU7XFxuICBtaW4taGVpZ2h0OiA0OXJlbTtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICBwYWRkaW5nOiAycmVtIDA7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjQpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCYXJsb3dcXFwiLCBzYW5zLXNlcmlmO1xcblxcbiAgI21haW4tY29udGFpbmVyIHtcXG4gICAgQGluY2x1ZGUgbW9kYWxDb250ZW50Q29udGFpbmVyKCk7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcblxcbiAgICAjbWFpbiB7XFxuICAgICAgY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5tb2RhbC1oZWFkZXIge1xcbiAgICBAaW5jbHVkZSBjb250YWluZXJCYWNrZ3JvdW5kKCk7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBiZjtcXG4gIH1cXG5cXG4gIC5uYXZpZ2F0aW9uLWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuY2xvc2UtbW9kYWwtYnRuLXdyYXBwZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDEuMmVtO1xcbiAgfVxcblxcbiAgLmNsb3NlLW1vZGFsLWJ0biB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZm9udC1zaXplOiAxLjZlbTtcXG4gIH0gIFxcblxcbiAgLmNsb3NlLW1vZGFsLWJ0bjpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gIH1cXG5cXG4gIC5tb2RhbC1uYXYtbGlua3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5tb2RhbC1uYXYtbGluayB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgQGluY2x1ZGUgc21hbGxNYXJnaW4oKTtcXG4gIH1cXG5cXG4gIC5tb2RhbC1uYXYtbGluazpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLWhlYWRpbmcge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tbmFtZSB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi10aXRsZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBAaW5jbHVkZSBzbWFsbE1hcmdpbigpO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXJvbGVzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tcm9sZSB7XFxuICAgIEBpbmNsdWRlIGljb25Db250YWluZXIoKTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1yZXNvdXJjZSB7XFxuICAgIEBpbmNsdWRlIGljb25Db250YWluZXIoKTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1yb2xlLWltYWdlIHtcXG4gICAgQGluY2x1ZGUgaWNvblNpemUoKTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1yZXNvdXJjZS1pbWFnZSB7XFxuICAgIEBpbmNsdWRlIGljb25TaXplKCk7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tcm9sZS1uYW1lIHtcXG4gICAgQGluY2x1ZGUgaWNvblRleHQoKTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1yZXNvdXJjZS1uYW1lIHtcXG4gICAgQGluY2x1ZGUgaWNvblRleHQoKTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1tYWluLWluZm8ge1xcbiAgICBwYWRkaW5nOiAxLjhyZW07XFxuICAgIG1heC13aWR0aDogMzRyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogbGFzdCBiYXNlbGluZTtcXG4gIH1cXG5cXG4gIEAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRldG9wIHtcXG4gICAgZnJvbSB7XFxuICAgICAgdG9wOiAtMzAwcHg7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBrZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XFxuICAgIGZyb20ge1xcbiAgICAgIHRvcDogLTMwMHB4O1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuICB9XFxuXFxuICAubG9yZS1jb250YWluZXIge1xcbiAgICBAaW5jbHVkZSBjb250YWluZXJCYWNrZ3JvdW5kKCk7XFxuICB9XFxuXFxuICAuc3ViaGVhZGluZyB7XFxuICAgIEBpbmNsdWRlIHN1YkhlYWRpbmdTdHlsZSgpO1xcbiAgfVxcblxcbiAgLmFiaWxpdGllcy1jb250YWluZXIge1xcbiAgICBAaW5jbHVkZSBjb250YWluZXJCYWNrZ3JvdW5kKCk7XFxuICAgIHdpZHRoOiAyOGVtO1xcbiAgfVxcblxcbiAgLmFiaWxpdGllcy1oZWFkaW5nIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmFiaWxpdHktaW1ncyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB9XFxuXFxuICAuYWJpbGl0eS1kZXNjcmlwdGlvbiB7XFxuICAgIEBpbmNsdWRlIHNtYWxsTWFyZ2luKCk7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tZGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLWV4dHJhLWluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmFiaWxpdHktaW5mbyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAuYWJpbGl0eS1pbmZvLmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAuc3BlbGwtaW1nIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW46IDAgMC41cmVtO1xcbiAgICBoZWlnaHQ6IDMuM3JlbTtcXG4gICAgd2lkdGg6IDMuM3JlbTtcXG4gIH1cXG5cXG4gIC5zcGVsbC1pbWcuY2xpY2tlZCB7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gICAgYm9yZGVyLXdpZHRoOiA0cHg7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tdGlwcy1zZWN0aW9uIHtcXG4gICAgQGluY2x1ZGUgY29udGFpbmVyQmFja2dyb3VuZCgpO1xcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDM0cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tdGlwcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAuY2hhbXBpb24tdGlwIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgfVxcblxcbiAgI3N0YXRzLWNvbnRhaW5lciB7XFxuICAgIEBpbmNsdWRlIG1vZGFsQ29udGVudENvbnRhaW5lcigpO1xcbiAgICBkaXNwbGF5OiBub25lO1xcblxcbiAgICAjc3RhdHMge1xcbiAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgICB9XFxuICB9XFxuXFxuICAuY2hhbXBpb24tc3RhdHMtb3ZlcnZpZXcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgQGluY2x1ZGUgc21hbGxNYXJnaW4oKTtcXG4gICAgbWF4LXdpZHRoOiAyNXJlbTtcXG4gICAgbWluLXdpZHRoOiAyMHJlbTtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgfVxcblxcbiAgLndpbi1yYXRlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5waWNrLXJhdGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmxhbmUtaW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAucGljay1yYXRlLXZhbHVlIHtcXG4gICAgbWFyZ2luLXRvcDogMC40ZW07XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gIH1cXG5cXG4gIC53aW4tcmF0ZS12YWx1ZSB7XFxuICAgIG1hcmdpbi10b3A6IDAuNGVtO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICB9XFxuXFxuICAubGFiZWwge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tZGFtYWdlLWNvbnRhaW5lciB7XFxuICAgIEBpbmNsdWRlIGNvbnRhaW5lckJhY2tncm91bmQoKTtcXG4gICAgbWF4LWhlaWdodDogMTcuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICB9XFxuXFxuICAuZGFtYWdlLWhlYWRpbmcge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuY2lyY3VsYXItY2hhcnQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXgtaGVpZ2h0OiAxNGVtO1xcbiAgfVxcblxcbiAgLmNpcmNsZSB7XFxuICAgIGZpbGw6IG5vbmU7XFxuICAgIHN0cm9rZS13aWR0aDogMi4yO1xcbiAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XFxuICAgIGFuaW1hdGlvbjogcHJvZ3Jlc3MgMXMgZWFzZS1vdXQgZm9yd2FyZHM7XFxuICB9XFxuXFxuICAjbWFnaWMtZGFtYWdlLXN0cm9rZSB7XFxuICAgIHN0cm9rZTogIzM1YTdmZjtcXG4gIH1cXG5cXG4gICNwaHlzaWNhbC1kYW1hZ2Utc3Ryb2tlIHtcXG4gICAgc3Ryb2tlOiAjZmY1OTY0O1xcbiAgfVxcblxcbiAgI3RydWUtZGFtYWdlLXN0cm9rZSB7XFxuICAgIHN0cm9rZTogI2ZmZTc0YztcXG4gIH1cXG5cXG4gIEBrZXlmcmFtZXMgcHJvZ3Jlc3Mge1xcbiAgICAwJSB7XFxuICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMCAxMDA7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC50b3RhbC1kYW1hZ2UtdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogNHB4O1xcbiAgICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xcbiAgICBmaWxsOiB3aGl0ZTtcXG4gIH1cXG5cXG4gIC50b3RhbC1kYW1hZ2UtbGFiZWwge1xcbiAgICBmb250LXNpemU6IDNweDtcXG4gICAgdGV4dC1hbmNob3I6IG1pZGRsZTtcXG4gICAgZmlsbDogdmFyKC0tZGFyay1nb2xkKTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1tYWluLXN0YXRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB9XFxuXFxuICAuY2hhbXBpb24taXRlbS1idWlsZHMge1xcbiAgICBAaW5jbHVkZSBjb250YWluZXJCYWNrZ3JvdW5kKCk7XFxuICAgIG1heC1oZWlnaHQ6IDE3LjVyZW07XFxuICB9XFxuXFxuICAuZGFtYWdlLXN0YXRzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmRhbWFnZS1pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWF4LWhlaWdodDogOTIlO1xcbiAgICBoZWlnaHQ6IDkyJTtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICB9XFxuXFxuICAuZGFtYWdlLXR5cGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICB9XFxuXFxuICAuZGFtYWdlLXN0YXRzIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIH1cXG5cXG4gICNwaHlzaWNhbC1kYW1hZ2UtbGFiZWwge1xcbiAgICBjb2xvcjogI2ZmNTk2NDtcXG4gIH1cXG5cXG4gICNtYWdpYy1kYW1hZ2UtbGFiZWwge1xcbiAgICBjb2xvcjogIzM1YTdmZjtcXG4gIH1cXG5cXG4gICN0cnVlLWRhbWFnZS1sYWJlbCB7XFxuICAgIGNvbG9yOiAjZmZlNzRjO1xcbiAgfVxcblxcbiAgLml0ZW0tZGV0YWlscy1jb250YWluZXIge1xcbiAgICBAaW5jbHVkZSBjb250YWluZXJCYWNrZ3JvdW5kKCk7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICByaWdodDogMTBlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMy41ZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5pdGVtLW5hbWUge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICB9XFxuXFxuICAubWFpbi1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgfVxcblxcbiAgLmNvc3QtbGFiZWwge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gIH1cXG5cXG4gIC5jb21wb25lbnQtaXRlbXMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG5cXG4gIC5jb21wb25lbnQtaXRlbS1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgfVxcblxcbiAgLmNvc3QtYW1vdW50IHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgfVxcblxcbiAgLmNvbXBvbmVudC1pdGVtLWNvc3QtbGFiZWwge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gIH1cXG5cXG4gIC5jb21wb25lbnQtaXRlbS1hbW91bnQge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICB9XFxuXFxuICAuY29tcG9uZW50LWl0ZW0tZGV0YWlscy1jb250YWluZXIge1xcbiAgICBAaW5jbHVkZSBjb250YWluZXJCYWNrZ3JvdW5kKCk7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLml0ZW0tc2V0cy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWF4LWhlaWdodDogOTAlO1xcbiAgfVxcblxcbiAgLml0ZW0tc2V0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICAgIHBhZGRpbmc6IDAuNGVtO1xcbiAgfVxcblxcbiAgLm1haW4tY29tcG9uZW50LWNvbnRhaW5lciB7XFxuICAgIEBpbmNsdWRlIGNvbnRhaW5lckJhY2tncm91bmQoKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2MDQwMDgzO1xcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiAwZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICB9XFxuXFxuICAuaXRlbS1pbWcge1xcbiAgICBtYXgtd2lkdGg6IDIuN2VtO1xcbiAgICBtYXgtaGVpZ2h0OiAyLjdlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgICAvL3BhZGRpbmc6IDFlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDA7XFxuICB9XFxuXFxuICAuY29tcG9uZW50LWl0ZW0taW1nIHtcXG4gICAgbWF4LXdpZHRoOiAxLjhlbTtcXG4gICAgbWF4LWhlaWdodDogMS44ZW07XFxuICB9XFxuXFxuICAuY2hhbXBpb24tbWF0Y2h1cHMge1xcbiAgICBAaW5jbHVkZSBjb250YWluZXJCYWNrZ3JvdW5kKCk7XFxuICAgIG1heC1oZWlnaHQ6IDI1LjJyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwIDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgfVxcblxcbiAgLm1hdGNodXBzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIG1heC13aWR0aDogMjRyZW07XFxuICB9XFxuXFxuICAubWF0Y2h1cC1pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTYxYTtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIG1hcmdpbjogYXV0byAwLjVlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgfVxcblxcbiAgLm1hdGNodXAtaW5mbzpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzE2MWFjOTtcXG4gIH1cXG5cXG4gIC5tYXRjaHVwLXN0YXRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBcXFwiQXBwbGUgU0QgR290aGljIE5lb1xcXCIsIEFwcGxlR290aGljLFxcbiAgICAgIERvdHVtLCBBcmlhbCwgVGFob21hO1xcbiAgfVxcblxcbiAgLmVuZW15LWNoYW1waW9uLWltZyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgbWF4LWhlaWdodDogM2VtO1xcbiAgICBtYXgtd2lkdGg6IDNlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxuICB9XFxuXFxuICAud2lucmF0ZS1hZ2FpbnN0LXBlcmNlbnRhZ2UuYmx1ZSB7XFxuICAgIGNvbG9yOiAjMzVhN2ZmO1xcbiAgfVxcblxcbiAgLndpbnJhdGUtYWdhaW5zdC1wZXJjZW50YWdlLnJlZCB7XFxuICAgIGNvbG9yOiAjZmY1OTY0O1xcbiAgfVxcblxcbiAgI3NraW5zLWNvbnRhaW5lciB7XFxuICAgIEBpbmNsdWRlIG1vZGFsQ29udGVudENvbnRhaW5lcigpO1xcbiAgICBkaXNwbGF5Om5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWluLWhlaWdodDogMDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIG1heC13aWR0aDogOTklO1xcbiAgICB3aWR0aDogOTklO1xcblxcbiAgICAubmF2aWdhdGlvbi1iYXIge1xcbiAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgICB9XFxuXFxuICAgICNza2lucyB7XFxuICAgICAgY29sb3I6IHZhcigtLWRhcmstZ29sZClcXG4gICAgfVxcbiAgfVxcblxcbiAgI3NraW5zLWNvbnRhaW5lciAubW9kYWwtaGVhZGVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIH1cXG5cXG4gIC5za2luLWltYWdlLWNvbnRhaW5lciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5za2luLWltYWdlLWNvbnRhaW5lci5zaG93biB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcblxcbiAgLnNraW4taW1hZ2Uge1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLnNraW4tbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgfVxcblxcbiAgI3NraW5zLWNvbnRhaW5lciAuY2hhbXBpb24taGVhZGluZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmltZy1zY3JvbGwtYXJyb3cge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICB9XFxuXFxuICAuaW1nLXNjcm9sbC1hcnJvdzpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgfVxcblxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDExMjBweCkge1xcbiAgICAuY29tcG9uZW50LWl0ZW0taW1nIHtcXG4gICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5pdGVtLXNldHMtY29udGFpbmVyIHtcXG4gICAgICBtaW4taGVpZ2h0OiA4MCU7XFxuICAgIH1cXG5cXG4gICAgLml0ZW0tZGV0YWlscy1jb250YWluZXIge1xcbiAgICAgIG1pbi13aWR0aDogNzAlO1xcbiAgICAgIHJpZ2h0OiAtNmVtO1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgKG1heC13aWR0aDogMTI1MHB4KSB7XFxuICAgIC5pdGVtLWltZyB7XFxuICAgICAgbWF4LWhlaWdodDogMi4ycmVtO1xcbiAgICAgIG1heC13aWR0aDogMi4ycmVtO1xcbiAgICB9XFxuXFxuICAgIC5jaGFtcGlvbi1kZXRhaWxzIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgIH1cXG5cXG4gICAgLmFiaWxpdGllcy1jb250YWluZXIge1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICB3aWR0aDogYXV0bztcXG4gICAgICBtYXgtd2lkdGg6IDMxcmVtO1xcbiAgICB9XFxuXFxuICAgIC5sb3JlLWNvbnRhaW5lciB7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICNtYWluLWNvbnRhaW5lciB7XFxuICAgICAgaGVpZ2h0OiA3NnJlbTtcXG4gICAgfVxcblxcbiAgICAuaXRlbS1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgICAgbWluLXdpZHRoOiA3MCU7XFxuICAgICAgcmlnaHQ6IC02ZW07XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgICAuaXRlbS1zZXRzLWNvbnRhaW5lciB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgfVxcblxcbiAgICAuaXRlbS1zZXQtY29udGFpbmVyIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5tYXRjaHVwcyB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAuY2hhbXBpb24tbWF0Y2h1cHMge1xcbiAgICAgIG1heC1oZWlnaHQ6IDI4LjJyZW07XFxuICAgIH1cXG5cXG4gICAgLm1hdGNodXAtaW5mbyB7XFxuICAgICAgbWFyZ2luOiAwLjJlbSBhdXRvO1xcbiAgICB9XFxuXFxuICAgICNtYWluLWNvbnRhaW5lciB7XFxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgICNzdGF0cy1jb250YWluZXIge1xcbiAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgICBtaW4taGVpZ2h0OiA2M3JlbTtcXG4gICAgfVxcblxcbiAgICAuaXRlbS1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgICAgcmlnaHQ6IC0xZW07XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4NDBweCkge1xcbiAgICAuZGFtYWdlLWluZm8ge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICB9XFxuXFxuICAgIC5nYW1lcy1wbGF5ZWQtYWdhaW5zdCB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAuZGFtYWdlLXN0YXRzLWNvbnRhaW5lciB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgfVxcbiAgfVxcblxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU2MHB4KSB7XFxuICAgIC5jaGFtcGlvbi1tYWluLXN0YXRzIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5pdGVtLXNldC1jb250YWluZXIge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIH1cXG5cXG4gICAgLml0ZW0tc2V0cy1jb250YWluZXIge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgLmNoYW1waW9uLWRhbWFnZS1jb250YWluZXIge1xcbiAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5kYW1hZ2Utc3RhdHMtaW5mbyB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAuZGFtYWdlLWluZm8ge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIH1cXG5cXG4gICAgLmRhbWFnZS10eXBlLWNvbnRhaW5lciB7XFxuICAgICAgbWFyZ2luOiAwLjJlbSBhdXRvO1xcbiAgICB9XFxuXFxuICAgIC5jaXJjdWxhci1jaGFydCB7XFxuICAgICAgbWF4LWhlaWdodDogMTk1cHg7XFxuICAgICAgbWF4LXdpZHRoOiA4MCU7XFxuICAgIH1cXG5cXG4gICAgLmRhbWFnZS1zdGF0cy1jb250YWluZXIge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgLmNoYW1waW9uLXJvbGUge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xcbiAgICB9XFxuXFxuICAgIC5jaGFtcGlvbi1yZXNvdXJjZSB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xcbiAgICAgIG1hcmdpbi1yaWdodDogMC41ZW07XFxuICAgIH1cXG5cXG4gICAgLmNoYW1waW9uLXJvbGVzIHtcXG4gICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIH1cXG5cXG4gICAgLnNwZWxsLWltZyB7XFxuICAgICAgaGVpZ2h0OiAyLjhlbTtcXG4gICAgICB3aWR0aDogMi44ZW07XFxuICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICB9XFxuXFxuICAgIC5pdGVtLWRldGFpbHMtY29udGFpbmVyIHtcXG4gICAgICByaWdodDogMmVtO1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgKG1heC13aWR0aDogNDE0cHgpIHtcXG4gICAgLmNoYW1waW9uLXN0YXRzLW92ZXJ2aWV3IHtcXG4gICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgbWluLXdpZHRoOiAxN3JlbTtcXG4gICAgfVxcblxcbiAgICAuY2hhbXBpb24tbmFtZSB7XFxuICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB9XFxuXFxuICAgIC5tb2RhbC1uYXYtbGlua3Mge1xcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgfVxcblxcbiAgICAuY2xvc2UtbW9kYWwtYnRuLXdyYXBwZXIge1xcbiAgICAgIGxlZnQ6IDAuN2VtO1xcbiAgICB9XFxuXFxuICAgIC5jbG9zZS1tb2RhbC1idG4ge1xcbiAgICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMzAwcHgpIHtcXG4gICAgI3NraW5zLWNvbnRhaW5lciB7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIG1heC13aWR0aDogNzAlO1xcbiAgICAgIG1pbi1oZWlnaHQ6IGF1dG87XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxOTUwcHgpIHtcXG4gICAgI3NraW5zLWNvbnRhaW5lciB7XFxuICAgICAgbWF4LXdpZHRoOiA1MCU7XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIGRlZmluZShJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgZGVmaW5lKEdwLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGFzeW5jSXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgZGVmaW5lKEdwLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIGRlZmluZShHcCwgXCJ0b1N0cmluZ1wiLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgaW4gbW9kZXJuIGVuZ2luZXNcbiAgLy8gd2UgY2FuIGV4cGxpY2l0bHkgYWNjZXNzIGdsb2JhbFRoaXMuIEluIG9sZGVyIGVuZ2luZXMgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xuICB9IGVsc2Uge1xuICAgIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG4gIH1cbn1cbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZnJvbnRwYWdlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mcm9udHBhZ2Uuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9kYWxzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tb2RhbHMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vQXNzYXNzaW4ucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9Bc3Nhc3Npbi5wbmdcIixcblx0XCIuL0Jsb29kIFdlbGwucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9CbG9vZCBXZWxsLnBuZ1wiLFxuXHRcIi4vQm90dG9tLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvQm90dG9tLnBuZ1wiLFxuXHRcIi4vQ29udHJvbGxlci5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0NvbnRyb2xsZXIucG5nXCIsXG5cdFwiLi9Db3VyYWdlLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvQ291cmFnZS5wbmdcIixcblx0XCIuL0NyaW1zb24gUnVzaC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0NyaW1zb24gUnVzaC5wbmdcIixcblx0XCIuL0VuZXJneS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0VuZXJneS5wbmdcIixcblx0XCIuL0ZpZ2h0ZXIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9GaWdodGVyLnBuZ1wiLFxuXHRcIi4vRmxvdy5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0Zsb3cucG5nXCIsXG5cdFwiLi9GdXJ5LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvRnVyeS5wbmdcIixcblx0XCIuL0dyaXQucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9Hcml0LnBuZ1wiLFxuXHRcIi4vSGVhdC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0hlYXQucG5nXCIsXG5cdFwiLi9KdW5nbGUucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9KdW5nbGUucG5nXCIsXG5cdFwiLi9NYWdlLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvTWFnZS5wbmdcIixcblx0XCIuL01hbmEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9NYW5hLnBuZ1wiLFxuXHRcIi4vTWFuYWxlc3MucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9NYW5hbGVzcy5wbmdcIixcblx0XCIuL01hcmtzbWFuLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvTWFya3NtYW4ucG5nXCIsXG5cdFwiLi9NZWxlZS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL01lbGVlLnBuZ1wiLFxuXHRcIi4vTWlkZGxlLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvTWlkZGxlLnBuZ1wiLFxuXHRcIi4vUmFnZS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL1JhZ2UucG5nXCIsXG5cdFwiLi9SYW5nZWQucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9SYW5nZWQucG5nXCIsXG5cdFwiLi9TcGVjaWFsaXN0LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvU3BlY2lhbGlzdC5wbmdcIixcblx0XCIuL1N1cHBvcnQucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9TdXBwb3J0LnBuZ1wiLFxuXHRcIi4vVGFuay5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL1RhbmsucG5nXCIsXG5cdFwiLi9Ub3AucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9Ub3AucG5nXCIsXG5cdFwiLi9VdGlsaXR5LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvVXRpbGl0eS5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzL2ltYWdlcyBzeW5jIFxcXFwuKHBuZ3xqcGU/Z3xzdmcpJFwiOyIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL3N0eWxlc2hlZXRzL2Zyb250cGFnZS5zY3NzJztcbmltcG9ydCAnLi9zdHlsZXNoZWV0cy9tb2RhbHMuc2Nzcyc7XG5pbXBvcnQgRWxlbWVudENyZWF0aW9uIGZyb20gJy4vaGVscGVycy9lbGVtZW50Q3JlYXRpb24nO1xuaW1wb3J0IHsgZ2V0QWxsQ2hhbXBpb25EZXRhaWxzIH0gZnJvbSAnLi9jaGFtcGlvbkRhdGEvZ2V0QWxsQ2hhbXBpb25zJztcbmltcG9ydCBTZWFyY2hiYXJDb250cm9sbGVyIGZyb20gJy4vYXBwQ29udHJvbC9zZWFyY2hiYXJDb250cm9sbGVyJztcbmltcG9ydCBiYWNrZHJvcENoYW5nZSBmcm9tICcuL2FwcENvbnRyb2wvYmFja2Ryb3BDaGFuZ2VJbnRlcnZhbCc7XG5cbmNvbnN0IGNyZWF0ZVNlYXJjaERyb3Bkb3duID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBhbGxDaGFtcGlvbnMgPSBhd2FpdCBnZXRBbGxDaGFtcGlvbkRldGFpbHMoKTtcbiAgY29uc3QgYWxsQ2hhbXBpb25zQXJyYXkgPSBPYmplY3QudmFsdWVzKGFsbENoYW1waW9ucyk7XG5cbiAgY29uc3Qgc2VhcmNoQ29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWFyY2gtY29udGFpbmVyJyk7XG4gIHNlYXJjaENvbnRhaW5lcnMuZm9yRWFjaCgoc2VhcmNoQ29udGFpbmVyKSA9PiB7XG4gICAgY29uc3QgYXV0b0NvbXBsZXRlTmFtZXMgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKFxuICAgICAgJ2RpdicsICdhdXRvLWNvbXBsZXRlLW5hbWVzJywgc2VhcmNoQ29udGFpbmVyLFxuICAgICk7XG4gICAgYWxsQ2hhbXBpb25zQXJyYXkuZm9yRWFjaCgoY2hhbXBpb24pID0+IHtcbiAgICAgIGNvbnN0IGNoYW1waW9uTmFtZSA9IGNoYW1waW9uLm5hbWU7XG4gICAgICBjb25zdCBjaGFtcGlvbklkID0gY2hhbXBpb24uaWQ7XG4gICAgICBjb25zdCBhdXRvQ29tcGxldGVOYW1lV3JhcHBlciA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAgICdkaXYnLCAnYXV0by1jb21wbGV0ZS1uYW1lLXdyYXBwZXInLCBhdXRvQ29tcGxldGVOYW1lcyxcbiAgICAgICk7XG4gICAgICBhdXRvQ29tcGxldGVOYW1lV3JhcHBlci50YWJJbmRleCA9ICctMSc7XG4gICAgICBjb25zdCBhdXRvQ29tcGxldGVOYW1lID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcyhcbiAgICAgICAgJ3NwYW4nLCAnYXV0by1jb21wbGV0ZS1uYW1lJywgYXV0b0NvbXBsZXRlTmFtZVdyYXBwZXIsXG4gICAgICApO1xuICAgICAgYXV0b0NvbXBsZXRlTmFtZS50ZXh0Q29udGVudCA9IGNoYW1waW9uTmFtZTtcbiAgICAgIGF1dG9Db21wbGV0ZU5hbWUuZGF0YXNldC5jaGFtcGlvbklkID0gY2hhbXBpb25JZDtcbiAgICAgIGF1dG9Db21wbGV0ZU5hbWUuaWQgPSBjaGFtcGlvbk5hbWU7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgZGlzcGxheU51bWJlck9mTWF0Y2hlcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZGV2VXJsID0gJ2h0dHA6Ly8xMjcuMC4wLjE6NTUwMC9mcm9udGVuZC9kaXN0Lyc7XG4gIGNvbnN0IGRldlVybDIgPSAnaHR0cDovLzEyNy4wLjAuMTo1NTAwL2Zyb250ZW5kL2Rpc3QvaW5kZXguaHRtbCc7XG4gIGNvbnN0IHJlc3BvbnNlID0gKHdpbmRvdy5sb2NhdGlvbi5ocmVmID09PSBkZXZVcmwgfHwgZGV2VXJsMilcbiAgICA/IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvbWF0Y2hlcycsIHsgbW9kZTogJ2NvcnMnIH0pXG4gICAgOiBhd2FpdCBmZXRjaCgnbWF0Y2hlcycsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICBjb25zdCBtYXRjaENvdW50ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBjb25zdCBhcHBOYW1lQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwcC1uYW1lLWRpc3BsYXktY29udGFpbmVyJyk7XG4gIGNvbnN0IHRhZ2xpbmVDb250YWluZXIgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAndGFnbGluZS1jb250YWluZXInLCBhcHBOYW1lQ29udGFpbmVyKTtcbiAgY29uc3QgdGFnbGluZVN0YXJ0ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICd0YWdsaW5lLXN0YXJ0JywgdGFnbGluZUNvbnRhaW5lcik7XG4gIHRhZ2xpbmVTdGFydC50ZXh0Q29udGVudCA9ICdQcm92aWRpbmcgaW5mbyBhbmQgc3RhdHMgZnJvbSAnO1xuICBjb25zdCB0YWdsaW5lTWF0Y2hDb3VudCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAndGFnbGluZS1tYXRjaC1jb3VudCcsIHRhZ2xpbmVDb250YWluZXIpO1xuICB0YWdsaW5lTWF0Y2hDb3VudC50ZXh0Q29udGVudCA9IGAke01hdGguZmxvb3IobWF0Y2hDb3VudCl9YDtcbiAgY29uc3QgdGFnbGluZUVuZCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAndGFnbGluZS1lbmQnLCB0YWdsaW5lQ29udGFpbmVyKTtcbiAgdGFnbGluZUVuZC50ZXh0Q29udGVudCA9ICcgTGVhZ3VlIG9mIExlZ2VuZHMgbWF0Y2hlcyc7XG59O1xuXG5jb25zdCByZW5kZXJQYWdlID0gYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBkaXNwbGF5TnVtYmVyT2ZNYXRjaGVzKCk7XG4gIGF3YWl0IGNyZWF0ZVNlYXJjaERyb3Bkb3duKCk7XG4gIFNlYXJjaGJhckNvbnRyb2xsZXIuc2VhcmNoQ29udGFpbmVyTGlzdGVuZXJzKCk7XG59O1xuXG5yZW5kZXJQYWdlKCk7XG5iYWNrZHJvcENoYW5nZSgpO1xuIl0sIm5hbWVzIjpbImluZGV4Iiwic2V0SW50ZXJ2YWwiLCJiYWNrZHJvcHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjdXJyZW50QmFja2Ryb3AiLCJxdWVyeVNlbGVjdG9yIiwibGVuZ3RoIiwiY2xhc3NOYW1lIiwiQ2hhbXBpb25Nb2RhbENvbnRyb2xsZXIiLCJ0b2dnbGVBY3RpdmVBYmlsaXR5IiwiY2xpY2tlZEFiaWxpdHlJZCIsImFiaWxpdHlJbWFnZXMiLCJhYmlsaXR5SW5mb3MiLCJmb3JFYWNoIiwiaW1nIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiaW5mbyIsImNsaWNrZWRJbWFnZSIsImFjdGl2ZUFiaWxpdHkiLCJjaGFuZ2VNb2RhbFRlbXBsYXRlIiwiY2xpY2tlZE1vZGFsTmF2TGluayIsInRlbXBsYXRlcyIsInRlbXBsYXRlIiwidGVtcGxhdGVOYW1lIiwiaWQiLCJzdWJzdHJpbmciLCJpbmRleE9mIiwiY2hvc2VuVGVtcGxhdGUiLCJzdHlsZSIsImRpc3BsYXkiLCJoaWRkZW5UZW1wbGF0ZSIsImRpc3BheUl0ZW1EZXRhaWxzIiwiaG92ZXJlZEl0ZW1JbWFnZSIsIml0ZW1EZXRhaWxzIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiaGlkZUl0ZW1EZXRhaWxzIiwidW5ob3ZlcmVkSXRlbUltYWdlIiwidG9nZ2xlU2tpbkltYWdlcyIsImFycm93Q2xhc3NMaXN0Iiwic2tpbkltYWdlc0NvbnRhaW5lciIsImN1cnJlbnRTaG93bkltYWdlIiwic2tpbk5hbWUiLCJmaXJzdEltYWdlIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJsYXN0SW1hZ2UiLCJsYXN0RWxlbWVudENoaWxkIiwiaW5jbHVkZXMiLCJ0ZXh0Q29udGVudCIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJjbGVhck1haW5Nb2RhbCIsIm1haW5Db250YWluZXIiLCJjaGFtcGlvbk5hbWUiLCJjaGFtcGlvblRpdGxlIiwiY2hhbXBpb25Sb2xlcyIsImNoYW1waW9uTG9yZSIsImFiaWxpdHlEZXRhaWxzIiwiY2hhbXBpb25UaXBzIiwibWFpbk1vZGFsSGVhZGVyIiwiZWxlbWVudCIsImN1cnJlbnRFbGVtZW50IiwiY2xlYXJTdGF0c01vZGFsIiwic3RhdHNDb250YWluZXIiLCJjaGFtcGlvblN0YXRzT3ZlcnZpZXciLCJhbGxkYW1hZ2VTdGF0cyIsIml0ZW1TZXRzQ29udGFpbmVyIiwiYmVzdE1hdGNodXBzIiwid29yc3RNYXRjaHVwcyIsInN0YXRzTW9kYWxIZWFkZXIiLCJkYW1hZ2VTdGF0IiwiZGFtYWdlU3RhdEVsZW1lbnQiLCJzdGF0c01vZGFsQ29udGVudCIsImNvbnRlbnQiLCJjb250ZW50RWxlbWVudCIsImNsZWFyU2tpbnNNb2RhbCIsImNsb3NlQ2hhbXBpb25Nb2RhbCIsIm1vZGFsIiwic2tpbnNDb250YWluZXIiLCJtb2RhbENsaWNrRXZlbnRzIiwiZXZlbnQiLCJ0YXJnZXQiLCJkYXNoSW5kZXgiLCJhYmlsaXR5SWQiLCJzbGljZSIsIkFycmF5IiwiZnJvbSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtb2RhbE1vdXNlb3ZlckV2ZW50cyIsIm1vZGFsTW91c2VvdXRFdmVudHMiLCJyZWxhdGVkVGFyZ2V0IiwicGFyZW50Tm9kZSIsIm1vZGFsQXJyb3dFdmVudHMiLCJrZXkiLCJyaWdodEFycm93IiwibGVmdEFycm93IiwibW9kYWxDaGFuZ2VMaXN0ZW5lcnMiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2V0Q2hhbXBpb25EZXRhaWxzIiwiZ2V0Q2hhbXBpb25TdGF0cyIsImNoYW1waW9uRGV0YWlsc01vZGFsIiwiY2hhbXBpb25TdGF0c01vZGFsIiwiY2hhbXBpb25Ta2luc01vZGFsIiwiQ2hhbXBpb25GaWx0ZXIiLCJTb3J0Q2hhbXBpb25zIiwiZ2V0QWxsQ2hhbXBpb25EZXRhaWxzIiwiZ2V0QWxsQ2hhbXBpb25TdGF0cyIsImdldExhdGVzdFZlcnNpb24iLCJDaGFtcGlvbnNQYWdlQ29udHJvbGxlciIsImRpc3BsYXlEcm9wZG93bk9wdGlvbnMiLCJkcm9wZG93bk9wdGlvbnMiLCJhbGxEcm9wZG93bk9wdGlvbnMiLCJvcHRpb25zIiwib3B0aW9uc1N0eWxlIiwiZHJvcGRvd25PcHRpb25zU3R5bGUiLCJoaWRlRHJvcGRvd25PcHRpb25zIiwiZHJvcGRvd25PcHRpb25zVG9nZ2xlIiwiZHJvcGRvd25CdG4iLCJwYXJlbnRFbGVtZW50IiwiZGlzcGxheUNoYW1waW9uTW9kYWwiLCJjaGFtcGlvbklkIiwibGF0ZXN0VmVyc2lvbiIsImNoYW1waW9uRGV0YWlscyIsImNoYW1waW9uU3RhdHMiLCJzZWxlY3RMYW5lRmlsdGVyT3B0aW9uIiwiY2xpY2tlZExhbmVPcHRpb24iLCJjaGFtcGlvbnNTZWN0aW9uIiwiYWN0aXZlTGFuZU9wdGlvbiIsInZpc2liaWxpdHkiLCJhZGQiLCJjaGVja0xhbmVGaWx0ZXJPcHRpb24iLCJhbGxDaGFtcGlvblN0YXRzIiwibGFuZU5hbWUiLCJmaWx0ZXJCeUxhbmUiLCJjaGVja1NvcnRpbmdPcHRpb24iLCJhY3RpdmVTb3J0aW5nT3B0aW9uIiwic29ydEJ5RGVmYXVsdE9yZGVyIiwic29ydENoYW1waW9uc0J5V2lucmF0ZSIsInNvcnRDaGFtcGlvbnNCeVBpY2tyYXRlIiwic29ydENoYW1waW9uc0J5RGFtYWdlRG9uZSIsImNoZWNrQWN0aXZlUm9sZU9wdGlvbnMiLCJhbGxDaGFtcGlvbkRldGFpbHMiLCJhY3RpdmVSb2xlT3B0aW9ucyIsImFjdGl2ZVJvbGVzIiwibWFwIiwiYWN0aXZlUm9sZU9wdGlvbiIsImFjdGl2ZVJvbGUiLCJmaWx0ZXJCeVJvbGUiLCJjaGVja0FjdGl2ZURpZmZpY3VsdHlPcHRpb25zIiwiYWN0aXZlRGlmZmljdWx0eU9wdGlvbnMiLCJhY3RpdmVEaWZmaWN1bHRpZXMiLCJhY3RpdmVEaWZmaWN1bHR5T3B0aW9uIiwiYWN0aXZlRGlmZmljdWx0eSIsImZpbHRlckJ5RGlmZmljdWx0eSIsInNlbGVjdE11bHRpRHJvcGRvd25PcHRpb24iLCJkcm9wZG93bk9wdGlvbiIsImRlc2VsZWN0RHJvcGRvd25PcHRpb24iLCJ0b2dnbGVEcm9wZG93bk9wdGlvbiIsInNlbGVjdFNpbmdsZURyb3Bkb3duT3B0aW9uIiwiYWN0aXZlRHJvcGRvd25PcHRpb24iLCJyZWRpcmVjdFRvRnJvbnRQYWdlIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiY2hhbXBpb25zUGFnZUNsaWNrRXZlbnRzIiwiY2hlY2tPcHRpb25zIiwiaGlkZUNoYW1waW9uc1NlY3Rpb24iLCJzaG93Q2hhbXBpb25zU2VjdGlvbiIsInJlbW92ZUNoYW1waW9uc1BhZ2VMaXN0ZW5lciIsImNoYW1waW9uc1BhZ2UiLCJhZGRDaGFtcGlvbnNQYWdlTGlzdGVuZXIiLCJzaG93TG9hZGVyIiwibG9hZGVyIiwiaGlkZUxvYWRlciIsImZpbHRlckFuZFNvcnRDaGFtcGlvbnNTZWN0aW9uIiwid2FpdFRpbWUiLCJzZXRUaW1lb3V0IiwiZGF0YXNldCIsImNoYW1waW9uc1BhZ2VLZXlFdmVudHMiLCJhY3RpdmVFbGVtZW50IiwiY2hhbXBpb25zUGFnZUxpc3RlbmVycyIsImNyZWF0ZUNoYW1waW9uQ29udGFpbmVyIiwicmVuZGVyQWxsQ2hhbXBpb25zIiwiY2hhbXBpb24iLCJjbGVhckNoYW1waW9uc1NlY3Rpb24iLCJzaG93Q2hhbXBpb24iLCJoaWRlQ2hhbXBpb24iLCJjbGlja2VkTGFuZSIsImFsbENoYW1waW9ucyIsInJlc3VsdHMiLCJwdXNoIiwiUHJvbWlzZSIsImFsbCIsImNoYW1waW9uTGFuZSIsImxhbmUiLCJjaGFtcGlvbkVsZW1lbnQiLCJ0b0xvd2VyQ2FzZSIsImNoYW1waW9uRWxlbWVudHMiLCJyb2xlTWF0Y2hGb3VuZCIsInJvbGUiLCJ0YWdzIiwiY2hhbXBpb25Sb2xlIiwiY2F0ZWdvcmlzZURpZmZpY3VsdHlOdW0iLCJkaWZmaWN1bHR5TnVtIiwiZGlmZmljdWx0eU1hdGNoRm91bmQiLCJkaWZmaWN1bHR5IiwiY2hhbXBpb25EaWZmaWN1bHR5TnVtIiwiY2hhbXBpb25EaWZmaWN1bHR5IiwiU2VhcmNoYmFyQ29udHJvbGxlciIsInNob3dBdXRvQ29tcGxldGVOYW1lcyIsInNlYXJjaENvbnRhaW5lciIsImF1dG9Db21wbGV0ZU5hbWVzIiwiaGlkZUF1dG9Db21wbGV0ZU5hbWVzIiwiYXV0b0NvbXBsZXRlTmFtZUVsZW1lbnRzIiwiYXV0b0NvbXBsZXRlTmFtZUVsZW1lbnQiLCJzZWFyY2hiYXJGb2N1c0luRXZlbnQiLCJmb2N1cyIsInNlYXJjaGJhckZvY3Vzb3V0RXZlbnQiLCJzZWFyY2hCYXJJbnB1dEV2ZW50IiwiaW5wdXRWYWx1ZSIsInZhbHVlIiwiYXV0b0NvbXBsZXRlTmFtZSIsIm5hbWUiLCJzZWFyY2hiYXJLZXlkb3duRXZlbnRzIiwicHJldmVudERlZmF1bHQiLCJhY3Rpb24iLCJBcnJvd1VwIiwiQXJyb3dEb3duIiwiZmlsdGVyIiwiaXNTaG93aW5nIiwidW5kZWZpbmVkIiwiZ29Ub1N0YXJ0IiwiY2hpbGRyZW4iLCJzZWFyY2hDb250YWluZXJDbGFzc05hbWUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwic2VhcmNoYmFyQ2xpY2tFdmVudHMiLCJjbGlja0F1dG9Db21wbGV0ZU5hbWUiLCJmaXJzdENoaWxkIiwic2VhcmNoQ29udGFpbmVyTGlzdGVuZXJzIiwidmlzaWJsaXR5IiwicmVjcmVhdGVDaGFtcGlvbnNTZWN0aW9uIiwiY2hhbXBpb25zIiwiZmlsdGVyQ2hhbXBpb25zIiwiZmlsdGVyZWRDaGFtcGlvblN0YXRzIiwiZmlsdGVyZWRDaGFtcGlvbnNTb3J0ZWQiLCJzb3J0IiwiYSIsImIiLCJ3aW5SYXRlIiwicGlja1JhdGUiLCJkYW1hZ2VQZXJNYXRjaCIsInRvdGFsRGFtYWdlIiwiZmV0Y2hDaGFtcGlvbkRldGFpbHMiLCJmZXRjaCIsIm1vZGUiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZ2V0Q2hhbXBpb25QYXNzaXZlcyIsInBhc3NpdmVEYXRhIiwicGFzc2l2ZSIsInBhc3NpdmVOYW1lIiwicGFzc2l2ZURlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb24iLCJwYXNzaXZlSWQiLCJpbWFnZSIsImZ1bGwiLCJwYXNzaXZlSW1nVXJsIiwiZ2V0Q2hhbXBpb25TcGVsbHMiLCJzcGVsbHNEYXRhIiwic3BlbGxzIiwic3BlbGwiLCJzcGVsbE9iamVjdCIsImNvc3RCdXJuIiwiY29zdFR5cGUiLCJjb29sZG93biIsImNvb2xkb3duQnVybiIsImltZ1VybCIsImNoYW1waW9uUGFzc2l2ZSIsInRpdGxlIiwicmVwbGFjZSIsInRvVXBwZXJDYXNlIiwicGFydHlwZSIsImFsbHl0aXBzIiwibG9yZSIsInJvbGVzIiwic2tpbnMiLCJyZXNvdXJjZSIsInRpcHMiLCJmZXRjaENoYW1waW9uU3RhdHMiLCJkZXZVcmwiLCJ0b0ZpeGVkIiwia2RhIiwia2RhUmF0aW8iLCJpdGVtU2V0cyIsIml0ZW1DaG9pY2VzIiwiYmVzdE1hdGNoVXBzIiwibWF0Y2hVcHMiLCJ3b3JzdE1hdGNoVXBzIiwidmVyc2lvbnNSZXNwb25zZSIsInZlcnNpb25zIiwiY2hhbXBpb25zUmVzcG9uc2UiLCJ2ZXJzaW9uUmVzcG9uc2UiLCJmZXRjaEFsbEl0ZW1zIiwiYWxsSXRlbXMiLCJJdGVtSW5mbyIsIml0ZW1JZCIsImdldEl0ZW1EZXRhaWxzIiwiaXRlbUltYWdlSWQiLCJpbWFnZVVybCIsImNvbXBvbmVudEl0ZW1JZHMiLCJjb21wb25lbnRJdGVtRGV0YWlscyIsImNvc3QiLCJnb2xkIiwidG90YWwiLCJnZXRJdGVtSW1hZ2UiLCJjb21wb25lbnRJdGVtcyIsImdldENvbXBvbmVudEl0ZW1zIiwiRWxlbWVudENyZWF0aW9uIiwiY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzIiwidGFnIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiY3JlYXRlQ2hpbGRFbGVtZW50V2l0aElkIiwiY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzQW5kSWQiLCJjcmVhdGVDaGlsZEltYWdlRWxlbWVudFdpdGhDbGFzcyIsInNyYyIsImFsdCIsImltYWdlRWxlbWVudCIsInJlbmRlckhlYWRlckRldGFpbHMiLCJpbWFnZXMiLCJjaGFtcGlvbkRhdGEiLCJjaGFtcGlvblJvbGVOYW1lIiwiY2hhbXBpb25SZXNvdXJjZSIsImNoYW1waW9uUmVzb3VyY2VOYW1lIiwibG9yZUNvbnRhaW5lciIsImlubmVySFRNTCIsImFiaWxpdGllc0NvbnRhaW5lciIsImFiaWxpdHlJbWdzIiwicGFzc2l2ZUltZyIsImltZ0xhYmVsIiwic3BlbGxJbWciLCJpIiwiYWJpbGl0eUluZm8iLCJhYmlsaXR5TmFtZSIsImFiaWxpdHlEZXNjcmlwdGlvbiIsImFiaWxpdHlMYWJlbCIsImNoYW1waW9uVGlwc1NlY3Rpb24iLCJjaGFtcGlvblRpcCIsInNraW4iLCJudW0iLCJzaG93bkltYWdlQ29udGFpbmVyIiwic2hvd25JbWFnZVVybCIsImltYWdlQ29udGFpbmVyIiwicmVuZGVyU3RhdE92ZXJ2aWV3IiwicmVuZGVyRGFtYWdlU3RhdHMiLCJyZW5kZXJDaGFtcGlvbkxhbmUiLCJyZW5kZXJNYXRjaHVwc0luZm8iLCJzdGF0c092ZXJ2aWV3IiwidHJ1ZURhbWFnZUNpcmNsZVN0cm9rZSIsInBoeXNpY2FsRGFtYWdlQ2lyY2xlU3Ryb2tlIiwibWFnaWNEYW1hZ2VDaXJjbGVTdHJva2UiLCJ0cnVlRGFtYWdlUGVyY2VudCIsIk1hdGgiLCJyb3VuZCIsInRydWVEYW1hZ2UiLCJwZXJjZW50YWdlIiwicGh5c2ljYWxEYW1hZ2VQZXJjZW50IiwicGh5c2ljYWxEYW1hZ2UiLCJtYWdpY0RhbWFnZVBlcmNlbnQiLCJtYWdpY0RhbWFnZSIsInN0cm9rZURhc2hhcnJheSIsInRvdGFsRGFtYWdlVGV4dCIsInRydWVEYW1hZ2VWYWx1ZSIsInBoeXNpY2FsRGFtYWdlVmFsdWUiLCJtYWdpY0RhbWFnZVZhbHVlIiwiZ2V0QWxsSXRlbXMiLCJjaGFtcGlvbkl0ZW1CdWlsZHMiLCJpdGVtU2V0IiwiaXRlbVNldENvbnRhaW5lciIsIml0ZW0iLCJpdGVtSW5mbyIsImdldEl0ZW1JbmZvIiwibWFpbkNvbXBvbmVudENvbnRhaW5lciIsIm1haW5JdGVtIiwiaXRlbURldGFpbHNDb250YWluZXIiLCJuYW1lRWxlbWVudCIsImRlc2NyaXB0aW9uRWxlbWVudCIsIml0ZW1Db3N0IiwiY29zdExhYmVsIiwiY29zdEFtb3VudCIsInJlc29sdmUiLCJ0aGVuIiwiaXRlbXMiLCJjb21wb25lbnRJdGVtc0NvbnRhaW5lciIsImNvbXBvbmVudEl0ZW0iLCJjb21wb25lbnRJdGVtRWxlbWVudCIsImNvbXBvbmVudEl0ZW1EZXRhaWxzQ29udGFpbmVyIiwiY29tcG9uZW50SXRlbU5hbWUiLCJjb21wb25lbnRJdGVtQ29zdCIsImNvbXBvbmVudEl0ZW1Db3N0TGFiZWwiLCJjb21wb25lbnRJdGVtQW1vdW50IiwiYmVzdE1hdGNodXBzU2VjdGlvbiIsImJlc3RNYXRjaHVwc0VsZW1lbnQiLCJiZXN0TWF0Y2h1cHNEYXRhIiwid29yc3RNYXRjaHVwc1NlY3Rpb24iLCJ3b3JzdE1hdGNodXBzRWxlbWVudCIsIndvcnN0TWF0Y2h1cHNEYXRhIiwiaW1wb3J0QWxsIiwiciIsImtleXMiLCJyZXF1aXJlIiwiY29udGV4dCIsIm1vZGFsQ29udGFpbmVyIiwiY29udGFpbmVyIiwiYmFja2dyb3VuZCIsImJhY2tncm91bmRTaXplIiwicmF0ZVRleHQiLCJyYXRlVHlwZSIsImNoYW1waW9uUmF0ZSIsImxhYmVsIiwicmF0ZVZhbHVlIiwibG93ZXJDYXNlVGV4dCIsImNoYW1waW9uTGFuZUluZm8iLCJsYW5lVGV4dCIsImxhbmVJY29uIiwiZGFtYWdlVHlwZSIsImRhbWFnZVZhbHVlIiwiZGFtYWdlUGVyY2VudGFnZSIsImRhbWFnZUNvbnRhaW5lciIsImRhbWFnZVN0YXRzIiwiZGFtYWdlVmFsdWVFbGVtZW50IiwiZGFtYWdlUGVyY2VudGFnZUVsZW1lbnQiLCJtYXRjaHVwc0VsZW1lbnQiLCJtYXRjaHVwc0RhdGEiLCJtYXRjaHVwIiwibWF0Y2h1cEluZm8iLCJlbmVteUNoYW1waW9uTmFtZSIsImVuZW15Q2hhbXBpb25JZCIsImVuZW15Q2hhbXBpb25JbWdVcmwiLCJtYXRjaHVwU3RhdHMiLCJlbmVteUNoYW1waW9uTmFtZUVsZW1lbnQiLCJ3aW5yYXRlQWdhaW5zdCIsIndpbnJhdGVBZ2FpbnN0TGFiZWwiLCJjb2xvciIsIndpbnJhdGVBZ2FpbnN0UGVyY2VudGFnZSIsIndpblJhdGVBZ2FpbnN0IiwiZ2FtZXNQbGF5ZWRBZ2FpbnN0IiwibWF0Y2hlcyIsImNoYW1waW9uQ29udGFpbmVyIiwiY2hhbXBpb25JbWdVcmwiLCJjaGFtcGlvbkltZyIsInRhYkluZGV4IiwiY2hhbXBpb25OYW1lV3JhcHBlciIsImJhY2tkcm9wQ2hhbmdlIiwiY3JlYXRlU2VhcmNoRHJvcGRvd24iLCJhbGxDaGFtcGlvbnNBcnJheSIsIk9iamVjdCIsInZhbHVlcyIsInNlYXJjaENvbnRhaW5lcnMiLCJhdXRvQ29tcGxldGVOYW1lV3JhcHBlciIsImRpc3BsYXlOdW1iZXJPZk1hdGNoZXMiLCJkZXZVcmwyIiwibWF0Y2hDb3VudCIsImFwcE5hbWVDb250YWluZXIiLCJ0YWdsaW5lQ29udGFpbmVyIiwidGFnbGluZVN0YXJ0IiwidGFnbGluZU1hdGNoQ291bnQiLCJmbG9vciIsInRhZ2xpbmVFbmQiLCJyZW5kZXJQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==