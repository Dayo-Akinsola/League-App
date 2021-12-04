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
    var devUrl, devUrl2, response, matchCount, sloganDisplay;
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
            sloganDisplay = document.querySelector('.slogan-display');
            sloganDisplay.textContent = "Providing info and stats from ".concat(Math.floor(matchCount), " League of Legends matches");

          case 17:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsZ0hBQStDOzs7Ozs7Ozs7Ozs7Ozs7O0FDQS9DLGlFQUFlLFlBQU07QUFDbkIsTUFBSUEsS0FBSyxHQUFHLENBQVo7QUFFQUMsRUFBQUEsV0FBVyxDQUFDLFlBQU07QUFDaEIsUUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGVBQTFCLENBQWxCO0FBQ0EsUUFBTUMsZUFBZSxHQUFHRixRQUFRLENBQUNHLGFBQVQsQ0FBdUIscUJBQXZCLENBQXhCO0FBQ0FOLElBQUFBLEtBQUssSUFBSUUsU0FBUyxDQUFDSyxNQUFuQjtBQUNBRixJQUFBQSxlQUFlLENBQUNHLFNBQWhCLEdBQTRCLHFCQUE1QjtBQUNBTixJQUFBQSxTQUFTLENBQUNGLEtBQUQsQ0FBVCxDQUFpQlEsU0FBakIsR0FBNkIsb0JBQTdCO0FBQ0FSLElBQUFBLEtBQUssSUFBSSxDQUFUO0FBQ0QsR0FQVSxFQU9SLElBUFEsQ0FBWDtBQVFELENBWEQ7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLElBQU1TLHVCQUF1QixHQUFJLFlBQU07QUFDckMsTUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDQyxnQkFBRCxFQUFzQjtBQUNoRCxRQUFNQyxhQUFhLEdBQUdULFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsWUFBMUIsQ0FBdEI7QUFDQSxRQUFNUyxZQUFZLEdBQUdWLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsZUFBMUIsQ0FBckI7QUFFQVEsSUFBQUEsYUFBYSxDQUFDRSxPQUFkLENBQXNCLFVBQUNDLEdBQUQsRUFBUztBQUM3QkEsTUFBQUEsR0FBRyxDQUFDQyxTQUFKLENBQWNDLE1BQWQsQ0FBcUIsU0FBckI7QUFDRCxLQUZEO0FBR0FKLElBQUFBLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixVQUFDSSxJQUFELEVBQVU7QUFDN0JBLE1BQUFBLElBQUksQ0FBQ0YsU0FBTCxDQUFlQyxNQUFmLENBQXNCLFFBQXRCO0FBQ0QsS0FGRDtBQUlBLFFBQU1FLFlBQVksR0FBR2hCLFFBQVEsQ0FBQ0csYUFBVCxZQUEyQkssZ0JBQTNCLFVBQXJCO0FBQ0FRLElBQUFBLFlBQVksQ0FBQ1gsU0FBYixHQUF5QixtQkFBekI7QUFFQSxRQUFNWSxhQUFhLEdBQUdqQixRQUFRLENBQUNHLGFBQVQsWUFBMkJLLGdCQUEzQixjQUF0QjtBQUNBUyxJQUFBQSxhQUFhLENBQUNaLFNBQWQsR0FBMEIscUJBQTFCO0FBQ0QsR0FoQkQ7O0FBa0JBLE1BQU1hLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsbUJBQUQsRUFBeUI7QUFDbkQsUUFBTUMsU0FBUyxHQUFHcEIsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixpQkFBMUIsQ0FBbEI7QUFDQW1CLElBQUFBLFNBQVMsQ0FBQ1QsT0FBVixDQUFrQixVQUFDVSxRQUFELEVBQWM7QUFDOUIsVUFBTUMsWUFBWSxHQUFHRCxRQUFRLENBQUNFLEVBQVQsQ0FBWUMsU0FBWixDQUFzQixDQUF0QixFQUF5QkgsUUFBUSxDQUFDRSxFQUFULENBQVlFLE9BQVosQ0FBb0IsR0FBcEIsQ0FBekIsQ0FBckI7O0FBQ0EsVUFBSUgsWUFBWSxLQUFLSCxtQkFBbUIsQ0FBQ0ksRUFBekMsRUFBNkM7QUFDM0MsWUFBTUcsY0FBYyxHQUFHTCxRQUF2QjtBQUNBSyxRQUFBQSxjQUFjLENBQUNDLEtBQWYsQ0FBcUJDLE9BQXJCLEdBQStCLE9BQS9CO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsWUFBTUMsY0FBYyxHQUFHUixRQUF2QjtBQUNBUSxRQUFBQSxjQUFjLENBQUNGLEtBQWYsQ0FBcUJDLE9BQXJCLEdBQStCLE1BQS9CO0FBQ0Q7QUFDRixLQVREO0FBVUQsR0FaRDs7QUFjQSxNQUFNRSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLGdCQUFELEVBQXNCO0FBQzlDLFFBQU1DLFdBQVcsR0FBR0QsZ0JBQWdCLENBQUNFLGtCQUFyQztBQUNBRCxJQUFBQSxXQUFXLENBQUNMLEtBQVosQ0FBa0JDLE9BQWxCLEdBQTRCLE1BQTVCO0FBQ0QsR0FIRDs7QUFLQSxNQUFNTSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLGtCQUFELEVBQXdCO0FBQzlDLFFBQU1ILFdBQVcsR0FBR0csa0JBQWtCLENBQUNGLGtCQUF2QztBQUNBRCxJQUFBQSxXQUFXLENBQUNMLEtBQVosQ0FBa0JDLE9BQWxCLEdBQTRCLE1BQTVCO0FBQ0QsR0FIRDs7QUFLQSxNQUFNUSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLGNBQUQsRUFBb0I7QUFDM0MsUUFBTUMsbUJBQW1CLEdBQUd0QyxRQUFRLENBQUNHLGFBQVQsQ0FBdUIsd0JBQXZCLENBQTVCO0FBQ0EsUUFBTW9DLGlCQUFpQixHQUFHdkMsUUFBUSxDQUFDRyxhQUFULENBQXVCLDZCQUF2QixDQUExQjtBQUNBLFFBQU1xQyxRQUFRLEdBQUd4QyxRQUFRLENBQUNHLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBakI7QUFFQW9DLElBQUFBLGlCQUFpQixDQUFDbEMsU0FBbEIsR0FBOEIsc0JBQTlCO0FBQ0EsUUFBTW9DLFVBQVUsR0FBR0gsbUJBQW1CLENBQUNJLGlCQUF2QztBQUNBLFFBQU1DLFNBQVMsR0FBR0wsbUJBQW1CLENBQUNNLGdCQUF0Qzs7QUFFQSxRQUFJSCxVQUFVLEtBQUtGLGlCQUFmLElBQW9DRixjQUFjLENBQUNRLFFBQWYsQ0FBd0IsWUFBeEIsQ0FBeEMsRUFBK0U7QUFDN0VGLE1BQUFBLFNBQVMsQ0FBQ3RDLFNBQVYsR0FBc0IsNEJBQXRCO0FBQ0FtQyxNQUFBQSxRQUFRLENBQUNNLFdBQVQsR0FBdUJILFNBQVMsQ0FBQ3BCLEVBQWpDO0FBQ0QsS0FIRCxNQUdPLElBQUlvQixTQUFTLEtBQUtKLGlCQUFkLElBQW1DRixjQUFjLENBQUNRLFFBQWYsQ0FBd0IsYUFBeEIsQ0FBdkMsRUFBK0U7QUFDcEZKLE1BQUFBLFVBQVUsQ0FBQ3BDLFNBQVgsR0FBdUIsNEJBQXZCO0FBQ0FtQyxNQUFBQSxRQUFRLENBQUNNLFdBQVQsR0FBdUJMLFVBQVUsQ0FBQ2xCLEVBQWxDO0FBQ0QsS0FITSxNQUdBLElBQUljLGNBQWMsQ0FBQ1EsUUFBZixDQUF3QixhQUF4QixDQUFKLEVBQTRDO0FBQ2pETixNQUFBQSxpQkFBaUIsQ0FBQ04sa0JBQWxCLENBQXFDNUIsU0FBckMsR0FBaUQsNEJBQWpEO0FBQ0FtQyxNQUFBQSxRQUFRLENBQUNNLFdBQVQsR0FBdUJQLGlCQUFpQixDQUFDTixrQkFBbEIsQ0FBcUNWLEVBQTVEO0FBQ0QsS0FITSxNQUdBO0FBQ0xnQixNQUFBQSxpQkFBaUIsQ0FBQ1Esc0JBQWxCLENBQXlDMUMsU0FBekMsR0FBcUQsNEJBQXJEO0FBQ0FtQyxNQUFBQSxRQUFRLENBQUNNLFdBQVQsR0FBdUJQLGlCQUFpQixDQUFDUSxzQkFBbEIsQ0FBeUN4QixFQUFoRTtBQUNEO0FBQ0YsR0F0QkQ7O0FBd0JBLE1BQU15QixjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0IsUUFBTUMsYUFBYSxHQUFHakQsUUFBUSxDQUFDRyxhQUFULENBQXVCLGlCQUF2QixDQUF0QjtBQUNBLFFBQU0rQyxZQUFZLEdBQUdELGFBQWEsQ0FBQzlDLGFBQWQsQ0FBNEIsZ0JBQTVCLENBQXJCO0FBQ0EsUUFBTWdELGFBQWEsR0FBR0YsYUFBYSxDQUFDOUMsYUFBZCxDQUE0QixpQkFBNUIsQ0FBdEI7QUFDQSxRQUFNaUQsYUFBYSxHQUFHSCxhQUFhLENBQUM5QyxhQUFkLENBQTRCLGlCQUE1QixDQUF0QjtBQUNBLFFBQU1rRCxZQUFZLEdBQUdKLGFBQWEsQ0FBQzlDLGFBQWQsQ0FBNEIsZ0JBQTVCLENBQXJCO0FBQ0EsUUFBTW1ELGNBQWMsR0FBR0wsYUFBYSxDQUFDOUMsYUFBZCxDQUE0QixrQkFBNUIsQ0FBdkI7QUFDQSxRQUFNb0QsWUFBWSxHQUFHTixhQUFhLENBQUM5QyxhQUFkLENBQTRCLGdCQUE1QixDQUFyQjtBQUVBLFFBQU1xRCxlQUFlLEdBQUcsQ0FBQ04sWUFBRCxFQUFlQyxhQUFmLEVBQThCQyxhQUE5QixDQUF4QjtBQUNBSSxJQUFBQSxlQUFlLENBQUM3QyxPQUFoQixDQUF3QixVQUFDOEMsT0FBRCxFQUFhO0FBQ25DLFVBQU1DLGNBQWMsR0FBR0QsT0FBdkI7QUFDQUMsTUFBQUEsY0FBYyxDQUFDWixXQUFmLEdBQTZCLEVBQTdCO0FBQ0QsS0FIRDtBQUtBTyxJQUFBQSxZQUFZLENBQUN2QyxNQUFiO0FBQ0F3QyxJQUFBQSxjQUFjLENBQUN4QyxNQUFmO0FBQ0F5QyxJQUFBQSxZQUFZLENBQUN6QyxNQUFiO0FBQ0QsR0FsQkQ7O0FBb0JBLE1BQU02QyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUIsUUFBTUMsY0FBYyxHQUFHNUQsUUFBUSxDQUFDRyxhQUFULENBQXVCLGtCQUF2QixDQUF2QjtBQUNBLFFBQU0rQyxZQUFZLEdBQUdVLGNBQWMsQ0FBQ3pELGFBQWYsQ0FBNkIsZ0JBQTdCLENBQXJCO0FBQ0EsUUFBTWdELGFBQWEsR0FBR1MsY0FBYyxDQUFDekQsYUFBZixDQUE2QixpQkFBN0IsQ0FBdEI7QUFDQSxRQUFNMEQscUJBQXFCLEdBQUdELGNBQWMsQ0FBQ3pELGFBQWYsQ0FBNkIsMEJBQTdCLENBQTlCO0FBQ0EsUUFBTTJELGNBQWMsR0FBR0YsY0FBYyxDQUFDM0QsZ0JBQWYsQ0FBZ0MsZUFBaEMsQ0FBdkI7QUFDQSxRQUFNOEQsaUJBQWlCLEdBQUdILGNBQWMsQ0FBQ3pELGFBQWYsQ0FBNkIsc0JBQTdCLENBQTFCO0FBQ0EsUUFBTTZELFlBQVksR0FBR0osY0FBYyxDQUFDekQsYUFBZixDQUE2QixnQkFBN0IsQ0FBckI7QUFDQSxRQUFNOEQsYUFBYSxHQUFHTCxjQUFjLENBQUN6RCxhQUFmLENBQTZCLGlCQUE3QixDQUF0QjtBQUVBLFFBQU0rRCxnQkFBZ0IsR0FBRyxDQUFDaEIsWUFBRCxFQUFlQyxhQUFmLEVBQThCVSxxQkFBOUIsQ0FBekI7QUFDQUssSUFBQUEsZ0JBQWdCLENBQUN2RCxPQUFqQixDQUF5QixVQUFDOEMsT0FBRCxFQUFhO0FBQ3BDLFVBQU1DLGNBQWMsR0FBR0QsT0FBdkI7QUFDQUMsTUFBQUEsY0FBYyxDQUFDWixXQUFmLEdBQTZCLEVBQTdCO0FBQ0QsS0FIRDtBQUlBZ0IsSUFBQUEsY0FBYyxDQUFDbkQsT0FBZixDQUF1QixVQUFDd0QsVUFBRCxFQUFnQjtBQUNyQyxVQUFNQyxpQkFBaUIsR0FBR0QsVUFBMUI7QUFDQUMsTUFBQUEsaUJBQWlCLENBQUN0RCxNQUFsQjtBQUNELEtBSEQ7QUFJQSxRQUFNdUQsaUJBQWlCLEdBQUcsQ0FBQ04saUJBQUQsRUFBb0JDLFlBQXBCLEVBQWtDQyxhQUFsQyxDQUExQjtBQUNBSSxJQUFBQSxpQkFBaUIsQ0FBQzFELE9BQWxCLENBQTBCLFVBQUMyRCxPQUFELEVBQWE7QUFDckMsVUFBTUMsY0FBYyxHQUFHRCxPQUF2QjtBQUNBQyxNQUFBQSxjQUFjLENBQUN6RCxNQUFmO0FBQ0QsS0FIRDtBQUlELEdBeEJEOztBQTBCQSxNQUFNMEQsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCLFFBQU1sQyxtQkFBbUIsR0FBR3RDLFFBQVEsQ0FBQ0csYUFBVCxDQUF1Qix3QkFBdkIsQ0FBNUI7QUFDQW1DLElBQUFBLG1CQUFtQixDQUFDeEIsTUFBcEI7QUFDRCxHQUhEOztBQUtBLE1BQU0yRCxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07QUFDL0IsUUFBTUMsS0FBSyxHQUFHMUUsUUFBUSxDQUFDRyxhQUFULENBQXVCLFFBQXZCLENBQWQ7QUFDQSxRQUFNOEMsYUFBYSxHQUFHakQsUUFBUSxDQUFDRyxhQUFULENBQXVCLGlCQUF2QixDQUF0QjtBQUNBLFFBQU15RCxjQUFjLEdBQUc1RCxRQUFRLENBQUNHLGFBQVQsQ0FBdUIsa0JBQXZCLENBQXZCO0FBQ0EsUUFBTXdFLGNBQWMsR0FBRzNFLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixrQkFBdkIsQ0FBdkI7QUFFQXVFLElBQUFBLEtBQUssQ0FBQy9DLEtBQU4sQ0FBWUMsT0FBWixHQUFzQixNQUF0QjtBQUNBcUIsSUFBQUEsYUFBYSxDQUFDdEIsS0FBZCxDQUFvQkMsT0FBcEIsR0FBOEIsT0FBOUI7QUFDQWdDLElBQUFBLGNBQWMsQ0FBQ2pDLEtBQWYsQ0FBcUJDLE9BQXJCLEdBQStCLE1BQS9CO0FBQ0ErQyxJQUFBQSxjQUFjLENBQUNoRCxLQUFmLENBQXFCQyxPQUFyQixHQUErQixNQUEvQjtBQUNELEdBVkQ7O0FBWUEsTUFBTWdELGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2xDLFFBQU1ILEtBQUssR0FBRzFFLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixRQUF2QixDQUFkOztBQUVBLFFBQUkwRSxLQUFLLENBQUNDLE1BQU4sQ0FBYXpFLFNBQWIsS0FBMkIsV0FBL0IsRUFBNEM7QUFDMUMsVUFBTTBFLFNBQVMsR0FBR0YsS0FBSyxDQUFDQyxNQUFOLENBQWF2RCxFQUFiLENBQWdCRSxPQUFoQixDQUF3QixHQUF4QixDQUFsQjtBQUNBLFVBQU11RCxTQUFTLEdBQUdILEtBQUssQ0FBQ0MsTUFBTixDQUFhdkQsRUFBYixDQUFnQjBELEtBQWhCLENBQXNCLENBQXRCLEVBQXlCRixTQUF6QixDQUFsQjtBQUNBeEUsTUFBQUEsbUJBQW1CLENBQUN5RSxTQUFELENBQW5CO0FBQ0Q7O0FBRUQsUUFBSUgsS0FBSyxDQUFDQyxNQUFOLENBQWF6RSxTQUFiLEtBQTJCLGdCQUEvQixFQUFpRDtBQUMvQ2EsTUFBQUEsbUJBQW1CLENBQUMyRCxLQUFLLENBQUNDLE1BQVAsQ0FBbkI7QUFDRDs7QUFFRCxRQUFJSSxLQUFLLENBQUNDLElBQU4sQ0FBV04sS0FBSyxDQUFDQyxNQUFOLENBQWFqRSxTQUF4QixFQUFtQ2dDLFFBQW5DLENBQTRDLGtCQUE1QyxDQUFKLEVBQXFFO0FBQ25FVCxNQUFBQSxnQkFBZ0IsQ0FBQzhDLEtBQUssQ0FBQ0MsSUFBTixDQUFXTixLQUFLLENBQUNDLE1BQU4sQ0FBYWpFLFNBQXhCLENBQUQsQ0FBaEI7QUFDRDs7QUFFRCxRQUFJZ0UsS0FBSyxDQUFDQyxNQUFOLENBQWF6RSxTQUFiLEtBQTJCLGlCQUEvQixFQUFrRDtBQUNoRHFFLE1BQUFBLEtBQUssQ0FBQ1UsbUJBQU4sQ0FBMEIsT0FBMUIsRUFBbUNSLGdCQUFuQztBQUNBSCxNQUFBQSxrQkFBa0I7QUFDbEJ6QixNQUFBQSxjQUFjO0FBQ2RXLE1BQUFBLGVBQWU7QUFDZmEsTUFBQUEsZUFBZTtBQUNoQjtBQUNGLEdBeEJEOztBQTBCQSxNQUFNYSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUNSLEtBQUQsRUFBVztBQUN0QyxRQUFJQSxLQUFLLENBQUNDLE1BQU4sQ0FBYXpFLFNBQWIsS0FBMkIsVUFBM0IsSUFDQ3dFLEtBQUssQ0FBQ0MsTUFBTixDQUFhekUsU0FBYixLQUEyQixvQkFEaEMsRUFDc0Q7QUFDcER5QixNQUFBQSxpQkFBaUIsQ0FBQytDLEtBQUssQ0FBQ0MsTUFBUCxDQUFqQjtBQUNEO0FBQ0YsR0FMRDs7QUFPQSxNQUFNUSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNULEtBQUQsRUFBVztBQUNyQyxRQUFJQSxLQUFLLENBQUNDLE1BQU4sQ0FBYXpFLFNBQWIsS0FBMkIsVUFBM0IsSUFDRHdFLEtBQUssQ0FBQ0MsTUFBTixDQUFhekUsU0FBYixLQUEyQixvQkFEOUIsRUFDb0Q7QUFDbEQsVUFBSSxDQUFDd0UsS0FBSyxDQUFDQyxNQUFYLEVBQW1CO0FBRW5CLFVBQU1TLGFBQU4sR0FBd0JWLEtBQXhCLENBQU1VLGFBQU47O0FBRUEsYUFBT0EsYUFBUCxFQUFzQjtBQUNwQixZQUFJQSxhQUFhLEtBQUtWLEtBQUssQ0FBQ0MsTUFBNUIsRUFBb0M7QUFDcENTLFFBQUFBLGFBQWEsR0FBR0EsYUFBYSxDQUFDQyxVQUE5QjtBQUNEOztBQUVEdEQsTUFBQUEsZUFBZSxDQUFDMkMsS0FBSyxDQUFDQyxNQUFQLENBQWY7QUFDRDtBQUNGLEdBZEQ7O0FBZ0JBLE1BQU1XLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ1osS0FBRCxFQUFXO0FBQ2xDLFFBQU1GLGNBQWMsR0FBRzNFLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixrQkFBdkIsQ0FBdkI7O0FBQ0EsUUFBSXdFLGNBQWMsQ0FBQ2hELEtBQWYsQ0FBcUJDLE9BQXJCLEtBQWlDLE9BQXJDLEVBQThDO0FBQzVDLFVBQUlpRCxLQUFLLENBQUNhLEdBQU4sS0FBYyxZQUFsQixFQUFnQztBQUM5QixZQUFNQyxVQUFVLEdBQUczRixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBbkI7QUFDQWlDLFFBQUFBLGdCQUFnQixDQUFDOEMsS0FBSyxDQUFDQyxJQUFOLENBQVdRLFVBQVUsQ0FBQzlFLFNBQXRCLENBQUQsQ0FBaEI7QUFDRDs7QUFFRCxVQUFJZ0UsS0FBSyxDQUFDYSxHQUFOLEtBQWMsV0FBbEIsRUFBK0I7QUFDN0IsWUFBTUUsU0FBUyxHQUFHNUYsUUFBUSxDQUFDRyxhQUFULENBQXVCLGFBQXZCLENBQWxCO0FBQ0FpQyxRQUFBQSxnQkFBZ0IsQ0FBQzhDLEtBQUssQ0FBQ0MsSUFBTixDQUFXUyxTQUFTLENBQUMvRSxTQUFyQixDQUFELENBQWhCO0FBQ0Q7QUFDRjtBQUNGLEdBYkQ7O0FBZUEsTUFBTWdGLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsR0FBTTtBQUNqQyxRQUFNbkIsS0FBSyxHQUFHMUUsUUFBUSxDQUFDRyxhQUFULENBQXVCLFFBQXZCLENBQWQ7QUFFQXVFLElBQUFBLEtBQUssQ0FBQ29CLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDbEIsZ0JBQWhDO0FBQ0FGLElBQUFBLEtBQUssQ0FBQ29CLGdCQUFOLENBQXVCLFdBQXZCLEVBQW9DVCxvQkFBcEM7QUFDQVgsSUFBQUEsS0FBSyxDQUFDb0IsZ0JBQU4sQ0FBdUIsVUFBdkIsRUFBbUNSLG1CQUFuQztBQUNBdEYsSUFBQUEsUUFBUSxDQUFDOEYsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUNMLGdCQUFyQztBQUNELEdBUEQ7O0FBU0EsU0FBTztBQUNMSSxJQUFBQSxvQkFBb0IsRUFBcEJBO0FBREssR0FBUDtBQUdELENBOU0rQixFQUFoQzs7QUFnTkEsaUVBQWV2Rix1QkFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaE5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1tRyx1QkFBdUIsR0FBSSxZQUFNO0FBQ3JDLE1BQU1DLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsQ0FBQ0MsZUFBRCxFQUFxQjtBQUNsRCxRQUFNQyxrQkFBa0IsR0FBRzVHLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsbUJBQTFCLENBQTNCO0FBQ0EyRyxJQUFBQSxrQkFBa0IsQ0FBQ2pHLE9BQW5CLENBQTJCLFVBQUNrRyxPQUFELEVBQWE7QUFDdEMsVUFBTUMsWUFBWSxHQUFHRCxPQUFPLENBQUNsRixLQUE3QjtBQUNBbUYsTUFBQUEsWUFBWSxDQUFDbEYsT0FBYixHQUF1QixNQUF2QjtBQUNELEtBSEQ7QUFLQSxRQUFNbUYsb0JBQW9CLEdBQUdKLGVBQWUsQ0FBQ2hGLEtBQTdDO0FBQ0FvRixJQUFBQSxvQkFBb0IsQ0FBQ25GLE9BQXJCLEdBQStCLE1BQS9CO0FBQ0QsR0FURDs7QUFXQSxNQUFNb0YsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDTCxlQUFELEVBQXFCO0FBQy9DLFFBQU1JLG9CQUFvQixHQUFHSixlQUFlLENBQUNoRixLQUE3QztBQUNBb0YsSUFBQUEsb0JBQW9CLENBQUNuRixPQUFyQixHQUErQixNQUEvQjtBQUNELEdBSEQ7O0FBS0EsTUFBTXFGLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQ0MsV0FBRCxFQUFpQjtBQUM3QyxRQUFNUCxlQUFlLEdBQUdPLFdBQVcsQ0FBQ0MsYUFBWixDQUEwQmhILGFBQTFCLENBQXdDLG1CQUF4QyxDQUF4Qjs7QUFDQSxRQUFJd0csZUFBZSxDQUFDaEYsS0FBaEIsQ0FBc0JDLE9BQXRCLEtBQWtDLE1BQXRDLEVBQThDO0FBQzVDOEUsTUFBQUEsc0JBQXNCLENBQUNDLGVBQUQsQ0FBdEI7QUFDRCxLQUZELE1BRU87QUFDTEssTUFBQUEsbUJBQW1CLENBQUNMLGVBQUQsQ0FBbkI7QUFDRDtBQUNGLEdBUEQ7O0FBU0EsTUFBTVMsb0JBQW9CO0FBQUEsd0xBQUcsaUJBQU9DLFVBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3JCM0MsY0FBQUEsS0FEcUIsR0FDYjFFLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixRQUF2QixDQURhO0FBQUE7QUFBQSxxQkFFQ3FHLDJFQUFnQixFQUZqQjs7QUFBQTtBQUVyQmMsY0FBQUEsYUFGcUI7QUFBQTtBQUFBLHFCQUdHdkIseUVBQWtCLENBQUNzQixVQUFELEVBQWFDLGFBQWIsQ0FIckI7O0FBQUE7QUFHckJDLGNBQUFBLGVBSHFCO0FBQUE7QUFBQSxxQkFLQ3ZCLHVFQUFnQixDQUFDcUIsVUFBRCxDQUxqQjs7QUFBQTtBQUtyQkcsY0FBQUEsYUFMcUI7QUFPckJsRixjQUFBQSxtQkFQcUIsR0FPQ3RDLFFBQVEsQ0FBQ0csYUFBVCxDQUF1Qix3QkFBdkIsQ0FQRDtBQVEzQjtBQUNKO0FBQ0E7QUFDQTs7QUFDSSxrQkFBSSxDQUFDbUMsbUJBQUwsRUFBMEI7QUFDeEIyRCxnQkFBQUEsMkVBQW9CLENBQUNzQixlQUFELENBQXBCO0FBQ0FyQixnQkFBQUEseUVBQWtCLENBQUNxQixlQUFELEVBQWtCQyxhQUFsQixFQUFpQ0YsYUFBakMsQ0FBbEI7QUFDQW5CLGdCQUFBQSx5RUFBa0IsQ0FBQ29CLGVBQUQsQ0FBbEI7QUFDRDs7QUFFRDdDLGNBQUFBLEtBQUssQ0FBQy9DLEtBQU4sQ0FBWUMsT0FBWixHQUFzQixPQUF0QjtBQUNBdEIsY0FBQUEscUZBQUE7O0FBbkIyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFwQjhHLG9CQUFvQjtBQUFBO0FBQUE7QUFBQSxLQUExQjs7QUFzQkEsTUFBTUssc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixDQUFDQyxpQkFBRCxFQUF1QjtBQUNwRCxRQUFNQyxnQkFBZ0IsR0FBRzNILFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixvQkFBdkIsQ0FBekI7QUFDQSxRQUFNeUgsZ0JBQWdCLEdBQUc1SCxRQUFRLENBQUNHLGFBQVQsQ0FBdUIsdUJBQXZCLENBQXpCOztBQUNBLFFBQUl1SCxpQkFBaUIsS0FBS0UsZ0JBQXRCLElBQTBDRCxnQkFBZ0IsQ0FBQ2hHLEtBQWpCLENBQXVCa0csVUFBdkIsS0FBc0MsUUFBcEYsRUFBOEY7QUFDNUYsYUFBTyxLQUFQO0FBQ0Q7O0FBQ0RELElBQUFBLGdCQUFnQixDQUFDL0csU0FBakIsQ0FBMkJDLE1BQTNCLENBQWtDLFFBQWxDO0FBQ0E0RyxJQUFBQSxpQkFBaUIsQ0FBQzdHLFNBQWxCLENBQTRCaUgsR0FBNUIsQ0FBZ0MsUUFBaEM7QUFFQSxXQUFPLElBQVA7QUFDRCxHQVZEOztBQVlBLE1BQU1DLHFCQUFxQjtBQUFBLHlMQUFHLGtCQUFPQyxnQkFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDdEJKLGNBQUFBLGdCQURzQixHQUNINUgsUUFBUSxDQUFDRyxhQUFULENBQXVCLHVCQUF2QixDQURHO0FBRXRCOEgsY0FBQUEsUUFGc0IsR0FFWEwsZ0JBQWdCLENBQUMvRyxTQUFqQixDQUEyQixDQUEzQixDQUZXO0FBQUE7QUFBQSxxQkFHdEJ1RixxRUFBQSxDQUE0QjZCLFFBQTVCLEVBQXNDRCxnQkFBdEMsQ0FIc0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBckJELHFCQUFxQjtBQUFBO0FBQUE7QUFBQSxLQUEzQjs7QUFNQSxNQUFNSSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNILGdCQUFELEVBQXNCO0FBQy9DLFFBQU1JLG1CQUFtQixHQUFHcEksUUFBUSxDQUFDRyxhQUFULENBQXVCLGNBQXZCLENBQTVCOztBQUNBLFFBQUlpSSxtQkFBbUIsS0FBSyxJQUE1QixFQUFrQztBQUNoQy9CLE1BQUFBLHlFQUFBLENBQWlDMkIsZ0JBQWpDO0FBQ0QsS0FGRCxNQUVPLElBQUk5QyxLQUFLLENBQUNDLElBQU4sQ0FBV2lELG1CQUFtQixDQUFDdkgsU0FBL0IsRUFBMENnQyxRQUExQyxDQUFtRCxTQUFuRCxDQUFKLEVBQW1FO0FBQ3hFd0QsTUFBQUEsNkVBQUEsQ0FBcUMyQixnQkFBckM7QUFDRCxLQUZNLE1BRUEsSUFBSTlDLEtBQUssQ0FBQ0MsSUFBTixDQUFXaUQsbUJBQW1CLENBQUN2SCxTQUEvQixFQUEwQ2dDLFFBQTFDLENBQW1ELFVBQW5ELENBQUosRUFBb0U7QUFDekV3RCxNQUFBQSw4RUFBQSxDQUFzQzJCLGdCQUF0QztBQUNELEtBRk0sTUFFQSxJQUFJOUMsS0FBSyxDQUFDQyxJQUFOLENBQVdpRCxtQkFBbUIsQ0FBQ3ZILFNBQS9CLEVBQTBDZ0MsUUFBMUMsQ0FBbUQsUUFBbkQsQ0FBSixFQUFrRTtBQUN2RXdELE1BQUFBLGdGQUFBLENBQXdDMkIsZ0JBQXhDO0FBQ0Q7QUFDRixHQVhEOztBQWFBLE1BQU1TLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsQ0FBQ0Msa0JBQUQsRUFBd0I7QUFDckQsUUFBTUMsaUJBQWlCLEdBQUczSSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGNBQTFCLENBQTFCOztBQUNBLFFBQUkwSSxpQkFBaUIsQ0FBQ3ZJLE1BQWxCLEtBQTZCLENBQWpDLEVBQW9DO0FBQ2xDLGFBQU8sS0FBUDtBQUNEOztBQUNELFFBQU13SSxXQUFXLEdBQUcxRCxLQUFLLENBQUNDLElBQU4sQ0FBV3dELGlCQUFYLEVBQThCRSxHQUE5QixDQUFrQyxVQUFDQyxnQkFBRCxFQUFzQjtBQUMxRSxVQUFNQyxVQUFVLEdBQUdELGdCQUFnQixDQUFDakksU0FBakIsQ0FBMkIsQ0FBM0IsQ0FBbkI7QUFDQSxhQUFPa0ksVUFBUDtBQUNELEtBSG1CLENBQXBCO0FBSUEzQyxJQUFBQSxxRUFBQSxDQUE0QndDLFdBQTVCLEVBQXlDRixrQkFBekM7QUFDQSxXQUFPLElBQVA7QUFDRCxHQVhEOztBQWFBLE1BQU1PLDRCQUE0QixHQUFHLFNBQS9CQSw0QkFBK0IsQ0FBQ1Asa0JBQUQsRUFBd0I7QUFDM0QsUUFBTVEsdUJBQXVCLEdBQUdsSixRQUFRLENBQUNDLGdCQUFULENBQTBCLG9CQUExQixDQUFoQzs7QUFDQSxRQUFJaUosdUJBQXVCLENBQUM5SSxNQUF4QixLQUFtQyxDQUF2QyxFQUEwQztBQUN4QyxhQUFPLEtBQVA7QUFDRDs7QUFDRCxRQUFNK0ksa0JBQWtCLEdBQUdqRSxLQUFLLENBQUNDLElBQU4sQ0FBVytELHVCQUFYLEVBQW9DTCxHQUFwQyxDQUF3QyxVQUFDTyxzQkFBRCxFQUE0QjtBQUM3RixVQUFNQyxnQkFBZ0IsR0FBR0Qsc0JBQXNCLENBQUN2SSxTQUF2QixDQUFpQyxDQUFqQyxDQUF6QjtBQUNBLGFBQU93SSxnQkFBUDtBQUNELEtBSDBCLENBQTNCO0FBSUFqRCxJQUFBQSwyRUFBQSxDQUFrQytDLGtCQUFsQyxFQUFzRFQsa0JBQXREO0FBQ0EsV0FBTyxJQUFQO0FBQ0QsR0FYRDs7QUFhQSxNQUFNYSx5QkFBeUIsR0FBRyxTQUE1QkEseUJBQTRCLENBQUNDLGNBQUQsRUFBb0I7QUFDcERBLElBQUFBLGNBQWMsQ0FBQzNJLFNBQWYsQ0FBeUJpSCxHQUF6QixDQUE2QixRQUE3QjtBQUNELEdBRkQ7O0FBSUEsTUFBTTJCLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsQ0FBQ0QsY0FBRCxFQUFvQjtBQUNqREEsSUFBQUEsY0FBYyxDQUFDM0ksU0FBZixDQUF5QkMsTUFBekIsQ0FBZ0MsUUFBaEM7QUFDRCxHQUZEOztBQUlBLE1BQU00SSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUNGLGNBQUQsRUFBb0I7QUFDL0MsUUFBSSxDQUFDdEUsS0FBSyxDQUFDQyxJQUFOLENBQVdxRSxjQUFjLENBQUMzSSxTQUExQixFQUFxQ2dDLFFBQXJDLENBQThDLFFBQTlDLENBQUwsRUFBOEQ7QUFDNUQwRyxNQUFBQSx5QkFBeUIsQ0FBQ0MsY0FBRCxDQUF6QjtBQUNELEtBRkQsTUFFTztBQUNMQyxNQUFBQSxzQkFBc0IsQ0FBQ0QsY0FBRCxDQUF0QjtBQUNEO0FBQ0YsR0FORDs7QUFRQSxNQUFNRywwQkFBMEIsR0FBRyxTQUE3QkEsMEJBQTZCLENBQUNILGNBQUQsRUFBb0I7QUFDckQsUUFBTUksb0JBQW9CLEdBQUc1SixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsdUJBQXZCLENBQTdCOztBQUNBLFFBQUl5SixvQkFBb0IsS0FBSyxJQUE3QixFQUFtQztBQUNqQ0osTUFBQUEsY0FBYyxDQUFDM0ksU0FBZixDQUF5QmlILEdBQXpCLENBQTZCLFFBQTdCO0FBQ0E7QUFDRDs7QUFDRCxRQUFJOEIsb0JBQW9CLEtBQUtKLGNBQTdCLEVBQTZDO0FBQzNDQyxNQUFBQSxzQkFBc0IsQ0FBQ0QsY0FBRCxDQUF0QjtBQUNBO0FBQ0Q7O0FBQ0RJLElBQUFBLG9CQUFvQixDQUFDL0ksU0FBckIsQ0FBK0JDLE1BQS9CLENBQXNDLFFBQXRDO0FBQ0EwSSxJQUFBQSxjQUFjLENBQUMzSSxTQUFmLENBQXlCaUgsR0FBekIsQ0FBNkIsUUFBN0I7QUFDRCxHQVpEOztBQWNBLE1BQU0rQixtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQU07QUFDaENDLElBQUFBLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUIsWUFBdkI7QUFDRCxHQUZEOztBQUlBLE1BQU1DLHdCQUF3QjtBQUFBLHlMQUFHLGtCQUFPcEYsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDL0I7QUFDTXFGLGNBQUFBLFlBRnlCO0FBQUEscU1BRVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FDWTNELG1GQUFtQixFQUQvQjs7QUFBQTtBQUNieUIsMEJBQUFBLGdCQURhO0FBQUE7QUFBQSxpQ0FFYzFCLHFGQUFxQixFQUZuQzs7QUFBQTtBQUVib0MsMEJBQUFBLGtCQUZhO0FBQUE7QUFBQSxpQ0FHYlgscUJBQXFCLENBQUNDLGdCQUFELENBSFI7O0FBQUE7QUFJbkJHLDBCQUFBQSxrQkFBa0IsQ0FBQ0gsZ0JBQUQsQ0FBbEI7QUFDQVMsMEJBQUFBLHNCQUFzQixDQUFDQyxrQkFBRCxDQUF0QjtBQUNBTywwQkFBQUEsNEJBQTRCLENBQUNQLGtCQUFELENBQTVCOztBQU5tQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGVTs7QUFBQSxnQ0FFekJ3QixZQUZ5QjtBQUFBO0FBQUE7QUFBQTs7QUFXekJDLGNBQUFBLG9CQVh5QixHQVdGLFNBQXZCQSxvQkFBdUIsR0FBTTtBQUNqQyxvQkFBTXhDLGdCQUFnQixHQUFHM0gsUUFBUSxDQUFDRyxhQUFULENBQXVCLG9CQUF2QixDQUF6QjtBQUNBd0gsZ0JBQUFBLGdCQUFnQixDQUFDaEcsS0FBakIsQ0FBdUJrRyxVQUF2QixHQUFvQyxRQUFwQztBQUNELGVBZDhCOztBQWdCekJ1QyxjQUFBQSxvQkFoQnlCLEdBZ0JGLFNBQXZCQSxvQkFBdUIsR0FBTTtBQUNqQyxvQkFBTXpDLGdCQUFnQixHQUFHM0gsUUFBUSxDQUFDRyxhQUFULENBQXVCLG9CQUF2QixDQUF6QjtBQUNBd0gsZ0JBQUFBLGdCQUFnQixDQUFDaEcsS0FBakIsQ0FBdUJrRyxVQUF2QixHQUFvQyxTQUFwQztBQUNELGVBbkI4Qjs7QUFxQnpCd0MsY0FBQUEsMkJBckJ5QixHQXFCSyxTQUE5QkEsMkJBQThCLEdBQU07QUFDeEMsb0JBQU1DLGFBQWEsR0FBR3RLLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixpQkFBdkIsQ0FBdEI7QUFDQW1LLGdCQUFBQSxhQUFhLENBQUNsRixtQkFBZCxDQUFrQyxPQUFsQyxFQUEyQzZFLHdCQUEzQztBQUNELGVBeEI4Qjs7QUEwQnpCTSxjQUFBQSx3QkExQnlCLEdBMEJFLFNBQTNCQSx3QkFBMkIsR0FBTTtBQUNyQyxvQkFBTUQsYUFBYSxHQUFHdEssUUFBUSxDQUFDRyxhQUFULENBQXVCLGlCQUF2QixDQUF0QjtBQUNBbUssZ0JBQUFBLGFBQWEsQ0FBQ3hFLGdCQUFkLENBQStCLE9BQS9CLEVBQXdDbUUsd0JBQXhDO0FBQ0QsZUE3QjhCOztBQStCekJPLGNBQUFBLFVBL0J5QixHQStCWixTQUFiQSxVQUFhLEdBQU07QUFDdkIsb0JBQU1DLE1BQU0sR0FBR3pLLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixTQUF2QixDQUFmO0FBQ0FzSyxnQkFBQUEsTUFBTSxDQUFDOUksS0FBUCxDQUFhQyxPQUFiLEdBQXVCLE9BQXZCO0FBQ0QsZUFsQzhCOztBQW9DekI4SSxjQUFBQSxVQXBDeUIsR0FvQ1osU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCLG9CQUFNRCxNQUFNLEdBQUd6SyxRQUFRLENBQUNHLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBZjtBQUNBc0ssZ0JBQUFBLE1BQU0sQ0FBQzlJLEtBQVAsQ0FBYUMsT0FBYixHQUF1QixNQUF2QjtBQUNELGVBdkM4Qjs7QUF5Q3pCK0ksY0FBQUEsNkJBekN5QjtBQUFBLHFNQXlDTyxrQkFBT0MsUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3BDVCwwQkFBQUEsb0JBQW9CO0FBQ3BCSywwQkFBQUEsVUFBVTtBQUNWSCwwQkFBQUEsMkJBQTJCO0FBSFM7QUFBQSxpQ0FJOUJILFlBQVksRUFKa0I7O0FBQUE7QUFLcENXLDBCQUFBQSxVQUFVLENBQUMsWUFBTTtBQUNmVCw0QkFBQUEsb0JBQW9CO0FBQ3BCTSw0QkFBQUEsVUFBVTtBQUNYLDJCQUhTLEVBR1BFLFFBSE8sQ0FBVjtBQUlBTCwwQkFBQUEsd0JBQXdCOztBQVRZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXpDUDs7QUFBQSxnQ0F5Q3pCSSw2QkF6Q3lCO0FBQUE7QUFBQTtBQUFBO0FBcUQvQjs7O0FBQ0Esa0JBQUl6RixLQUFLLENBQUNDLElBQU4sQ0FBV04sS0FBSyxDQUFDQyxNQUFOLENBQWFqRSxTQUF4QixFQUFtQ2dDLFFBQW5DLENBQTRDLGNBQTVDLENBQUosRUFBaUU7QUFDL0RvRSxnQkFBQUEscUJBQXFCLENBQUNwQyxLQUFLLENBQUNDLE1BQVAsQ0FBckI7QUFDRDs7QUFFRCxrQkFBSUQsS0FBSyxDQUFDQyxNQUFOLENBQWFxQyxhQUFiLENBQTJCOUcsU0FBM0IsS0FBeUMsMEJBQTdDLEVBQXlFO0FBQ3ZFK0csZ0JBQUFBLG9CQUFvQixDQUFDdkMsS0FBSyxDQUFDQyxNQUFOLENBQWFxQyxhQUFiLENBQTJCMkQsT0FBM0IsQ0FBbUN2SixFQUFwQyxDQUFwQjtBQUNEOztBQUVELGtCQUFJc0QsS0FBSyxDQUFDQyxNQUFOLENBQWFxQyxhQUFiLENBQTJCQSxhQUEzQixDQUF5QzlHLFNBQXpDLEtBQXVELDBCQUEzRCxFQUF1RjtBQUNyRitHLGdCQUFBQSxvQkFBb0IsQ0FBQ3ZDLEtBQUssQ0FBQ0MsTUFBTixDQUFhcUMsYUFBYixDQUEyQkEsYUFBM0IsQ0FBeUMyRCxPQUF6QyxDQUFpRHZKLEVBQWxELENBQXBCO0FBQ0Q7O0FBRUQsa0JBQUkyRCxLQUFLLENBQUNDLElBQU4sQ0FBV04sS0FBSyxDQUFDQyxNQUFOLENBQWFqRSxTQUF4QixFQUFtQ2dDLFFBQW5DLENBQTRDLGNBQTVDLENBQUosRUFBaUU7QUFDL0Q2RyxnQkFBQUEsb0JBQW9CLENBQUM3RSxLQUFLLENBQUNDLE1BQVAsQ0FBcEI7QUFDQTZGLGdCQUFBQSw2QkFBNkIsQ0FBQyxHQUFELENBQTdCO0FBQ0Q7O0FBRUQsa0JBQUl6RixLQUFLLENBQUNDLElBQU4sQ0FBV04sS0FBSyxDQUFDQyxNQUFOLENBQWFqRSxTQUF4QixFQUFtQ2dDLFFBQW5DLENBQTRDLGVBQTVDLENBQUosRUFBa0U7QUFDaEU4RyxnQkFBQUEsMEJBQTBCLENBQUM5RSxLQUFLLENBQUNDLE1BQVAsQ0FBMUI7QUFDQTZGLGdCQUFBQSw2QkFBNkIsQ0FBQyxJQUFELENBQTdCO0FBQ0Q7O0FBRUQsa0JBQUl6RixLQUFLLENBQUNDLElBQU4sQ0FBV04sS0FBSyxDQUFDQyxNQUFOLENBQWFqRSxTQUF4QixFQUFtQ2dDLFFBQW5DLENBQTRDLGVBQTVDLENBQUosRUFBa0U7QUFDaEU0RSxnQkFBQUEsc0JBQXNCLENBQUM1QyxLQUFLLENBQUNDLE1BQVAsQ0FBdEI7QUFDQTZGLGdCQUFBQSw2QkFBNkIsQ0FBQyxHQUFELENBQTdCO0FBQ0Q7O0FBRUQsa0JBQUk5RixLQUFLLENBQUNDLE1BQU4sQ0FBYXpFLFNBQWIsS0FBMkIsVUFBL0IsRUFBMkM7QUFDekN3SixnQkFBQUEsbUJBQW1CO0FBQ3BCOztBQW5GOEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBeEJJLHdCQUF3QjtBQUFBO0FBQUE7QUFBQSxLQUE5Qjs7QUFzRkEsTUFBTWMsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixDQUFDbEcsS0FBRCxFQUFXO0FBQ3hDLG9CQUEwQjdFLFFBQTFCO0FBQUEsUUFBUWdMLGFBQVIsYUFBUUEsYUFBUjs7QUFFQSxRQUFJbkcsS0FBSyxDQUFDYSxHQUFOLEtBQWMsT0FBbEIsRUFBMkI7QUFDekIsVUFBSXNGLGFBQWEsSUFBSUEsYUFBYSxDQUFDM0ssU0FBZCxLQUE0QiwwQkFBakQsRUFBNkU7QUFDM0UrRyxRQUFBQSxvQkFBb0IsQ0FBQzRELGFBQWEsQ0FBQ0YsT0FBZCxDQUFzQnZKLEVBQXZCLENBQXBCO0FBQ0Q7O0FBRUQsVUFBSXlKLGFBQWEsSUFBSUEsYUFBYSxDQUFDM0ssU0FBZCxLQUE0QixjQUFqRCxFQUFpRTtBQUMvRCtHLFFBQUFBLG9CQUFvQixDQUFDNEQsYUFBYSxDQUFDN0QsYUFBZCxDQUE0QjJELE9BQTVCLENBQW9DdkosRUFBckMsQ0FBcEI7QUFDRDtBQUNGO0FBQ0YsR0FaRDs7QUFjQSxNQUFNMEosc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixHQUFNO0FBQ25DLFFBQU1YLGFBQWEsR0FBR3RLLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixpQkFBdkIsQ0FBdEI7QUFDQW1LLElBQUFBLGFBQWEsQ0FBQ3hFLGdCQUFkLENBQStCLE9BQS9CLEVBQXdDbUUsd0JBQXhDO0FBQ0FLLElBQUFBLGFBQWEsQ0FBQ3hFLGdCQUFkLENBQStCLFNBQS9CLEVBQTBDaUYsc0JBQTFDO0FBQ0QsR0FKRDs7QUFNQSxTQUFPO0FBQ0xFLElBQUFBLHNCQUFzQixFQUF0QkEsc0JBREs7QUFFTDdELElBQUFBLG9CQUFvQixFQUFwQkE7QUFGSyxHQUFQO0FBSUQsQ0F6UCtCLEVBQWhDOztBQTJQQSxpRUFBZVgsdUJBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0UUE7QUFDQTs7QUFFQSxJQUFNTCxjQUFjLEdBQUksWUFBTTtBQUM1QixNQUFNK0Usa0JBQWtCO0FBQUEsd0xBQUcsaUJBQU9uRCxnQkFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbkJMLGNBQUFBLGdCQURtQixHQUNBM0gsUUFBUSxDQUFDRyxhQUFULENBQXVCLG9CQUF2QixDQURBO0FBRXpCNkgsY0FBQUEsZ0JBQWdCLENBQUNySCxPQUFqQixDQUF5QixVQUFDeUssUUFBRCxFQUFjO0FBQ3JDRixnQkFBQUEsaUZBQXVCLENBQUNFLFFBQUQsRUFBV3pELGdCQUFYLENBQXZCO0FBQ0QsZUFGRDtBQUZ5QiwrQ0FLbEJBLGdCQUxrQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFsQndELGtCQUFrQjtBQUFBO0FBQUE7QUFBQSxLQUF4Qjs7QUFRQSxNQUFNRSxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLEdBQU07QUFDbEMsUUFBTTFELGdCQUFnQixHQUFHM0gsUUFBUSxDQUFDRyxhQUFULENBQXVCLG9CQUF2QixDQUF6QjtBQUNBd0gsSUFBQUEsZ0JBQWdCLENBQUM3RSxXQUFqQixHQUErQixFQUEvQjtBQUNELEdBSEQ7O0FBS0EsTUFBTXdJLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNGLFFBQUQsRUFBYztBQUNqQ0EsSUFBQUEsUUFBUSxDQUFDdkssU0FBVCxDQUFtQmlILEdBQW5CLENBQXVCLE9BQXZCO0FBQ0FzRCxJQUFBQSxRQUFRLENBQUN2SyxTQUFULENBQW1CQyxNQUFuQixDQUEwQixRQUExQjtBQUNELEdBSEQ7O0FBS0EsTUFBTXlLLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNILFFBQUQsRUFBYztBQUNqQ0EsSUFBQUEsUUFBUSxDQUFDdkssU0FBVCxDQUFtQmlILEdBQW5CLENBQXVCLFFBQXZCO0FBQ0FzRCxJQUFBQSxRQUFRLENBQUN2SyxTQUFULENBQW1CQyxNQUFuQixDQUEwQixPQUExQjtBQUNELEdBSEQ7O0FBS0EsTUFBTW9ILFlBQVk7QUFBQSx5TEFBRyxrQkFBT3NELFdBQVAsRUFBb0J4RCxnQkFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25CcUQsY0FBQUEscUJBQXFCO0FBREY7QUFBQSxxQkFFWUYsa0JBQWtCLENBQUNuRCxnQkFBRCxDQUY5Qjs7QUFBQTtBQUViTCxjQUFBQSxnQkFGYTtBQUduQkEsY0FBQUEsZ0JBQWdCLENBQUNoRyxLQUFqQixDQUF1QmtHLFVBQXZCLEdBQW9DLFFBQXBDO0FBQ000RCxjQUFBQSxZQUphLEdBSUV6TCxRQUFRLENBQUNDLGdCQUFULENBQTBCLHFCQUExQixDQUpGOztBQUFBLG9CQUtmdUwsV0FBVyxLQUFLLEtBTEQ7QUFBQTtBQUFBO0FBQUE7O0FBTWpCQyxjQUFBQSxZQUFZLENBQUM5SyxPQUFiLENBQXFCLFVBQUN5SyxRQUFELEVBQWM7QUFDakNFLGdCQUFBQSxZQUFZLENBQUNGLFFBQUQsQ0FBWjtBQUNELGVBRkQ7QUFOaUI7QUFBQTs7QUFBQTtBQVVYTSxjQUFBQSxPQVZXLEdBVUQsRUFWQztBQVdqQkQsY0FBQUEsWUFBWSxDQUFDOUssT0FBYixDQUFxQixVQUFDeUssUUFBRCxFQUFjO0FBQ2pDLG9CQUFNL0QsVUFBVSxHQUFHK0QsUUFBUSxDQUFDTixPQUFULENBQWlCdkosRUFBcEM7QUFDQW1LLGdCQUFBQSxPQUFPLENBQUNDLElBQVIsQ0FBYTNGLHVFQUFnQixDQUFDcUIsVUFBRCxDQUE3QjtBQUNELGVBSEQ7QUFYaUI7QUFBQSxxQkFlV3VFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxPQUFaLENBZlg7O0FBQUE7QUFlWGxFLGNBQUFBLGFBZlc7QUFnQmpCQSxjQUFBQSxhQUFhLENBQUM3RyxPQUFkLENBQXNCLFVBQUN5SyxRQUFELEVBQWM7QUFDbEMsb0JBQU1VLFlBQVksR0FBR1YsUUFBUSxDQUFDVyxJQUE5QjtBQUNBLG9CQUFNQyxlQUFlLEdBQUdoTSxRQUFRLENBQUNHLGFBQVQsb0JBQW1DaUwsUUFBUSxDQUFDL0QsVUFBNUMsT0FBeEI7O0FBQ0Esb0JBQUl5RSxZQUFZLENBQUNHLFdBQWIsT0FBK0JULFdBQW5DLEVBQWdEO0FBQzlDRCxrQkFBQUEsWUFBWSxDQUFDUyxlQUFELENBQVo7QUFDRCxpQkFGRCxNQUVPO0FBQ0xWLGtCQUFBQSxZQUFZLENBQUNVLGVBQUQsQ0FBWjtBQUNEO0FBQ0YsZUFSRDs7QUFoQmlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVo5RCxZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWxCOztBQTRCQSxNQUFNYyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDSixXQUFELEVBQWNGLGtCQUFkLEVBQXFDO0FBQ3hELFFBQU13RCxnQkFBZ0IsR0FBR2xNLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIscUJBQTFCLENBQXpCO0FBRUFpTSxJQUFBQSxnQkFBZ0IsQ0FBQ3ZMLE9BQWpCLENBQXlCLFVBQUN5SyxRQUFELEVBQWM7QUFDckMsVUFBSWUsY0FBYyxHQUFHLEtBQXJCO0FBQ0F2RCxNQUFBQSxXQUFXLENBQUNqSSxPQUFaLENBQW9CLFVBQUN5TCxJQUFELEVBQVU7QUFDNUIsWUFBTWhKLGFBQWEsR0FBR3NGLGtCQUFrQixDQUFDMEMsUUFBUSxDQUFDTixPQUFULENBQWlCdkosRUFBbEIsQ0FBbEIsQ0FBd0M4SyxJQUE5RDtBQUNBakosUUFBQUEsYUFBYSxDQUFDekMsT0FBZCxDQUFzQixVQUFDMkwsWUFBRCxFQUFrQjtBQUN0QyxjQUFJQSxZQUFZLENBQUNMLFdBQWIsT0FBK0JHLElBQW5DLEVBQXlDO0FBQ3ZDRCxZQUFBQSxjQUFjLEdBQUcsSUFBakI7QUFDRDtBQUNGLFNBSkQ7QUFLRCxPQVBEOztBQVFBLFVBQUksQ0FBQ0EsY0FBTCxFQUFxQjtBQUNuQlosUUFBQUEsWUFBWSxDQUFDSCxRQUFELENBQVo7QUFDRDtBQUNGLEtBYkQ7QUFjRCxHQWpCRDs7QUFtQkEsTUFBTW1CLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsQ0FBQ0MsYUFBRCxFQUFtQjtBQUNqRCxRQUFJQSxhQUFhLElBQUksQ0FBckIsRUFBd0I7QUFDdEIsYUFBTyxLQUFQO0FBQ0Q7O0FBRUQsUUFBSUEsYUFBYSxJQUFJLENBQXJCLEVBQXdCO0FBQ3RCLGFBQU8sUUFBUDtBQUNEOztBQUVELFdBQU8sTUFBUDtBQUNELEdBVkQ7O0FBWUEsTUFBTWxELGtCQUFrQjtBQUFBLHlMQUFHLGtCQUFPSCxrQkFBUCxFQUEyQlQsa0JBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNuQndELGNBQUFBLGdCQURtQixHQUNBbE0sUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixxQkFBMUIsQ0FEQTtBQUd6QmlNLGNBQUFBLGdCQUFnQixDQUFDdkwsT0FBakIsQ0FBeUIsVUFBQ3lLLFFBQUQsRUFBYztBQUNyQyxvQkFBSXFCLG9CQUFvQixHQUFHLEtBQTNCO0FBQ0F0RCxnQkFBQUEsa0JBQWtCLENBQUN4SSxPQUFuQixDQUEyQixVQUFDK0wsVUFBRCxFQUFnQjtBQUN6QyxzQkFBTUMscUJBQXFCLEdBQUdqRSxrQkFBa0IsQ0FBQzBDLFFBQVEsQ0FBQ04sT0FBVCxDQUFpQnZKLEVBQWxCLENBQWxCLENBQXdDUixJQUF4QyxDQUE2QzJMLFVBQTNFO0FBQ0Esc0JBQU1FLGtCQUFrQixHQUFHTCx1QkFBdUIsQ0FBQ0kscUJBQUQsQ0FBbEQ7O0FBRUEsc0JBQUlELFVBQVUsQ0FBQ1QsV0FBWCxPQUE2Qlcsa0JBQWpDLEVBQXFEO0FBQ25ESCxvQkFBQUEsb0JBQW9CLEdBQUcsSUFBdkI7QUFDRDtBQUNGLGlCQVBEOztBQVFBLG9CQUFJLENBQUNBLG9CQUFMLEVBQTJCO0FBQ3pCbEIsa0JBQUFBLFlBQVksQ0FBQ0gsUUFBRCxDQUFaO0FBQ0Q7QUFDRixlQWJEOztBQUh5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFsQjlCLGtCQUFrQjtBQUFBO0FBQUE7QUFBQSxLQUF4Qjs7QUFtQkEsU0FBTztBQUNMcEIsSUFBQUEsWUFBWSxFQUFaQSxZQURLO0FBRUxjLElBQUFBLFlBQVksRUFBWkEsWUFGSztBQUdMTSxJQUFBQSxrQkFBa0IsRUFBbEJBO0FBSEssR0FBUDtBQUtELENBM0dzQixFQUF2Qjs7QUE2R0EsaUVBQWVsRCxjQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoSEE7O0FBRUEsSUFBTXlHLG1CQUFtQixHQUFJLFlBQU07QUFDakMsTUFBTUMscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFDQyxlQUFELEVBQXFCO0FBQ2pELFFBQU1DLGlCQUFpQixHQUFHRCxlQUFlLENBQUM1TSxhQUFoQixDQUE4QixzQkFBOUIsQ0FBMUI7QUFDQTZNLElBQUFBLGlCQUFpQixDQUFDckwsS0FBbEIsQ0FBd0JDLE9BQXhCLEdBQWtDLE9BQWxDO0FBQ0QsR0FIRDs7QUFLQSxNQUFNcUwscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixHQUFNO0FBQ2xDLFFBQU1DLHdCQUF3QixHQUFHbE4sUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixzQkFBMUIsQ0FBakM7QUFDQWlOLElBQUFBLHdCQUF3QixDQUFDdk0sT0FBekIsQ0FBaUMsVUFBQ3dNLHVCQUFELEVBQTZCO0FBQzVELFVBQU1ILGlCQUFpQixHQUFHRyx1QkFBMUI7QUFDQUgsTUFBQUEsaUJBQWlCLENBQUNyTCxLQUFsQixDQUF3QkMsT0FBeEIsR0FBa0MsTUFBbEM7QUFDRCxLQUhEO0FBSUQsR0FORDs7QUFRQSxNQUFNd0wscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFDdkksS0FBRCxFQUFXO0FBQ3ZDLFFBQUlBLEtBQUssQ0FBQ0MsTUFBTixDQUFhekUsU0FBYixLQUEyQixRQUEvQixFQUF5QztBQUN2QyxVQUFNME0sZUFBZSxHQUFHbEksS0FBSyxDQUFDQyxNQUFOLENBQWFxQyxhQUFyQztBQUNBMkYsTUFBQUEscUJBQXFCLENBQUNDLGVBQUQsQ0FBckI7QUFDQWxJLE1BQUFBLEtBQUssQ0FBQ0MsTUFBTixDQUFhdUksS0FBYjtBQUNEO0FBQ0YsR0FORDs7QUFRQSxNQUFNQyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQUN6SSxLQUFELEVBQVc7QUFDeEMsUUFBSSxDQUFDQSxLQUFLLENBQUNVLGFBQVAsSUFBeUJWLEtBQUssQ0FBQ1UsYUFBTixDQUFvQmxGLFNBQXBCLEtBQWtDLDRCQUFsQyxJQUFrRXdFLEtBQUssQ0FBQ1UsYUFBTixDQUFvQmxGLFNBQXBCLEtBQWtDLFFBQWpJLEVBQTRJO0FBQzFJNE0sTUFBQUEscUJBQXFCO0FBQ3RCO0FBQ0YsR0FKRDs7QUFNQSxNQUFNTSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUMxSSxLQUFELEVBQVc7QUFDckMsUUFBSUEsS0FBSyxDQUFDQyxNQUFOLENBQWF6RSxTQUFiLEtBQTJCLFFBQS9CLEVBQXlDO0FBQ3ZDLFVBQU1tTixVQUFVLEdBQUczSSxLQUFLLENBQUNDLE1BQU4sQ0FBYTJJLEtBQWhDO0FBQ0EsVUFBTVQsaUJBQWlCLEdBQUdoTixRQUFRLENBQUNDLGdCQUFULENBQTBCLHFCQUExQixDQUExQjtBQUNBK00sTUFBQUEsaUJBQWlCLENBQUNyTSxPQUFsQixDQUEwQixVQUFDK00sZ0JBQUQsRUFBc0I7QUFDOUMsWUFBTUMsSUFBSSxHQUFHRCxnQkFBYjs7QUFDQSxZQUFJQyxJQUFJLENBQUNwTSxFQUFMLENBQVEwSyxXQUFSLEdBQXNCcEosUUFBdEIsQ0FBK0IySyxVQUFVLENBQUN2QixXQUFYLEVBQS9CLENBQUosRUFBOEQ7QUFDNUQwQixVQUFBQSxJQUFJLENBQUN4RyxhQUFMLENBQW1CeEYsS0FBbkIsQ0FBeUJDLE9BQXpCLEdBQW1DLE9BQW5DO0FBQ0QsU0FGRCxNQUVPO0FBQ0wrTCxVQUFBQSxJQUFJLENBQUN4RyxhQUFMLENBQW1CeEYsS0FBbkIsQ0FBeUJDLE9BQXpCLEdBQW1DLE1BQW5DO0FBQ0Q7QUFDRixPQVBEO0FBUUQ7QUFDRixHQWJEOztBQWVBLE1BQU1nTSxzQkFBc0I7QUFBQSx3TEFBRyxpQkFBTy9JLEtBQVA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM3QixrQkFBSSxDQUFDQSxLQUFLLENBQUNhLEdBQU4sS0FBYyxXQUFkLElBQTZCYixLQUFLLENBQUNhLEdBQU4sS0FBYyxTQUE1QyxLQUEwRGIsS0FBSyxDQUFDQyxNQUFOLEtBQWlCOUUsUUFBUSxDQUFDRyxhQUFULENBQXVCLE1BQXZCLENBQS9FLEVBQStHO0FBQUEsNEJBQ3JGSCxRQURxRixFQUN2R2dMLGFBRHVHLGFBQ3ZHQSxhQUR1RztBQUU3R25HLGdCQUFBQSxLQUFLLENBQUNnSixjQUFOO0FBR01DLGdCQUFBQSxNQUx1RyxHQUs5RjtBQUNiQyxrQkFBQUEsT0FBTyxFQUFFLFVBREk7QUFDUUMsa0JBQUFBLFNBQVMsRUFBRTtBQURuQixpQkFMOEY7O0FBUzdHLG9CQUFJaEQsYUFBYSxDQUFDM0ssU0FBZCxLQUE0QixRQUE1QixJQUF3Q3dFLEtBQUssQ0FBQ2EsR0FBTixLQUFjLFdBQTFELEVBQXVFO0FBQ3JFc0Ysa0JBQUFBLGFBQWEsR0FBR0EsYUFBYSxDQUFDL0ksa0JBQWQsQ0FBaUNTLGlCQUFqRDtBQUNBOztBQUNBLHlCQUFPc0ksYUFBYSxDQUFDckosS0FBZCxDQUFvQkMsT0FBcEIsS0FBZ0MsTUFBdkMsRUFBK0M7QUFDN0NvSixvQkFBQUEsYUFBYSxHQUFHQSxhQUFhLENBQUMvSSxrQkFBOUI7QUFDRDs7QUFDRCtJLGtCQUFBQSxhQUFhLENBQUNxQyxLQUFkO0FBQ0QsaUJBUEQsTUFPTztBQUNMckMsa0JBQUFBLGFBQWEsR0FBR0EsYUFBYSxXQUFJOEMsTUFBTSxDQUFDakosS0FBSyxDQUFDYSxHQUFQLENBQVYsb0JBQTdCOztBQUNBLHlCQUFPc0YsYUFBYSxJQUFJQSxhQUFhLENBQUNySixLQUFkLENBQW9CQyxPQUFwQixLQUFnQyxNQUF4RCxFQUFnRTtBQUM5RG9KLG9CQUFBQSxhQUFhLEdBQUdBLGFBQWEsV0FBSThDLE1BQU0sQ0FBQ2pKLEtBQUssQ0FBQ2EsR0FBUCxDQUFWLG9CQUE3QjtBQUNEO0FBQ0Q7OztBQUNNd0gsa0JBQUFBLHdCQU5ELEdBTTRCbE4sUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixzQkFBMUIsQ0FONUI7QUFPQytNLGtCQUFBQSxpQkFQRCxHQU9xQjlILEtBQUssQ0FBQ0MsSUFBTixDQUFXK0gsd0JBQVgsRUFBcUNlLE1BQXJDLENBQ3hCLFVBQUNkLHVCQUFELEVBQTZCO0FBQzNCLHdCQUFNZSxTQUFTLEdBQUdmLHVCQUF1QixDQUFDeEwsS0FBeEIsQ0FBOEJDLE9BQTlCLEtBQTBDLE9BQTVEO0FBQ0EsMkJBQU9zTSxTQUFQO0FBQ0QsbUJBSnVCLENBUHJCOztBQWFMLHNCQUFJbEIsaUJBQWlCLENBQUMsQ0FBRCxDQUFqQixLQUF5Qm1CLFNBQXpCLElBQXNDLENBQUNuRCxhQUEzQyxFQUEwRDtBQUN4RDtBQUNBb0Qsb0JBQUFBLFNBQVMsR0FBR04sTUFBTSxDQUFDakosS0FBSyxDQUFDYSxHQUFQLENBQU4sS0FBc0IsTUFBdEIsSUFBZ0NiLEtBQUssQ0FBQ2EsR0FBTixLQUFjLE1BQTFEO0FBQ0FzRixvQkFBQUEsYUFBYSxHQUFHZ0MsaUJBQWlCLENBQUMsQ0FBRCxDQUFqQixDQUFxQnFCLFFBQXJCLENBQ2RELFNBQVMsR0FBRyxDQUFILEdBQU9wQixpQkFBaUIsQ0FBQyxDQUFELENBQWpCLENBQXFCcUIsUUFBckIsQ0FBOEJqTyxNQUE5QixHQUF1QyxDQUR6QyxDQUFoQjs7QUFHQSwyQkFBTzRLLGFBQWEsSUFBSUEsYUFBYSxDQUFDckosS0FBZCxDQUFvQkMsT0FBcEIsS0FBZ0MsTUFBeEQsRUFBZ0U7QUFDOURvSixzQkFBQUEsYUFBYSxHQUFHQSxhQUFhLFdBQUk4QyxNQUFNLENBQUNqSixLQUFLLENBQUNhLEdBQVAsQ0FBVixvQkFBN0I7QUFDRDtBQUNGOztBQUNELHNCQUFJc0YsYUFBSixFQUFtQjtBQUNqQkEsb0JBQUFBLGFBQWEsQ0FBQ3FDLEtBQWQ7QUFDRDtBQUNGO0FBQ0Y7O0FBNUM0QixvQkE4Q3pCeEksS0FBSyxDQUFDYSxHQUFOLEtBQWMsT0E5Q1c7QUFBQTtBQUFBO0FBQUE7O0FBQUEsMkJBK0NEMUYsUUEvQ0MsRUErQ25CZ0wsY0EvQ21CLGNBK0NuQkEsYUEvQ21COztBQUFBLG9CQWdEdkJBLGNBQWEsSUFBSUEsY0FBYSxDQUFDM0ssU0FBZCxLQUE0Qiw0QkFoRHRCO0FBQUE7QUFBQTtBQUFBOztBQWlEbkJpTyxjQUFBQSx3QkFqRG1CLEdBaURRdEQsY0FBYSxDQUFDN0QsYUFBZCxDQUE0QkEsYUFBNUIsQ0FBMEN0RyxTQUExQyxDQUFvRCxDQUFwRCxDQWpEUjtBQWtEbkI2TSxjQUFBQSxnQkFsRG1CLEdBa0RBMUMsY0FBYSxDQUFDdEksaUJBbERkO0FBb0R6Qjs7QUFwRHlCLG9CQXFEckI0TCx3QkFBd0IsS0FBSywwQkFBN0IsSUFDR0Esd0JBQXdCLEtBQUsseUJBdERYO0FBQUE7QUFBQTtBQUFBOztBQXVEdkJDLGNBQUFBLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixZQUFyQixFQUFtQ2QsZ0JBQWdCLENBQUM1QyxPQUFqQixDQUF5QnpELFVBQTVEO0FBQ0F5QyxjQUFBQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXVCLGdCQUF2QjtBQXhEdUI7QUFBQTs7QUFBQTtBQUFBO0FBQUEscUJBMERqQnZELHFGQUFBLENBQTZDaUgsZ0JBQWdCLENBQUM1QyxPQUFqQixDQUF5QnpELFVBQXRFLENBMURpQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUF0QnVHLHNCQUFzQjtBQUFBO0FBQUE7QUFBQSxLQUE1Qjs7QUFnRUEsTUFBTWEsb0JBQW9CO0FBQUEseUxBQUcsa0JBQU81SixLQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDckI2SixjQUFBQSxxQkFEcUI7QUFBQSxxTUFDRyxrQkFBT0osd0JBQVAsRUFBaUNaLGdCQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FDeEJZLHdCQUF3QixLQUFLLDBCQUE3QixJQUNEQSx3QkFBd0IsS0FBSyx5QkFGSjtBQUFBO0FBQUE7QUFBQTs7QUFHMUJDLDBCQUFBQSxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsWUFBckIsRUFBbUNkLGdCQUFnQixDQUFDNUMsT0FBakIsQ0FBeUJ6RCxVQUE1RDtBQUNBeUMsMEJBQUFBLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUIsZ0JBQXZCO0FBSjBCO0FBQUE7O0FBQUE7QUFBQTtBQUFBLGlDQU1wQnZELHFGQUFBLENBQTZDaUgsZ0JBQWdCLENBQUM1QyxPQUFqQixDQUF5QnpELFVBQXRFLENBTm9COztBQUFBO0FBT3BCNkYsMEJBQUFBLHdCQVBvQixHQU9PbE4sUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixzQkFBMUIsQ0FQUDtBQVExQmlOLDBCQUFBQSx3QkFBd0IsQ0FBQ3ZNLE9BQXpCLENBQWlDLFVBQUN3TSx1QkFBRCxFQUE2QjtBQUM1RCxnQ0FBTUgsaUJBQWlCLEdBQUdHLHVCQUExQjtBQUNBSCw0QkFBQUEsaUJBQWlCLENBQUNyTCxLQUFsQixDQUF3QkMsT0FBeEIsR0FBa0MsTUFBbEM7QUFDRCwyQkFIRDs7QUFSMEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREg7O0FBQUEsZ0NBQ3JCOE0scUJBRHFCO0FBQUE7QUFBQTtBQUFBOztBQWVyQjNCLGNBQUFBLGVBZnFCLEdBZUhsSSxLQUFLLENBQUNDLE1BQU4sQ0FBYXFDLGFBQWIsQ0FBMkJBLGFBZnhCOztBQWdCM0Isa0JBQUl0QyxLQUFLLENBQUNDLE1BQU4sQ0FBYXpFLFNBQWIsS0FBMkIsNEJBQS9CLEVBQTZEO0FBQ3JEaU8sZ0JBQUFBLHdCQURxRCxHQUMxQnZCLGVBQWUsQ0FBQ2xNLFNBQWhCLENBQTBCLENBQTFCLENBRDBCO0FBRXJENk0sZ0JBQUFBLGdCQUZxRCxHQUVsQzdJLEtBQUssQ0FBQ0MsTUFBTixDQUFhNkosVUFGcUI7QUFHM0RELGdCQUFBQSxxQkFBcUIsQ0FBQ0osd0JBQUQsRUFBMkJaLGdCQUEzQixDQUFyQjtBQUNEOztBQUVELGtCQUFJN0ksS0FBSyxDQUFDQyxNQUFOLENBQWF6RSxTQUFiLEtBQTJCLG9CQUEvQixFQUFxRDtBQUM3Q2lPLGdCQUFBQSx5QkFENkMsR0FDbEJ2QixlQUFlLENBQUM1RixhQUFoQixDQUE4QnRHLFNBQTlCLENBQXdDLENBQXhDLENBRGtCO0FBRTdDNk0sZ0JBQUFBLGlCQUY2QyxHQUUxQjdJLEtBQUssQ0FBQ0MsTUFGb0I7QUFHbkQ0SixnQkFBQUEscUJBQXFCLENBQUNKLHlCQUFELEVBQTJCWixpQkFBM0IsQ0FBckI7QUFDRDs7QUExQjBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQXBCZSxvQkFBb0I7QUFBQTtBQUFBO0FBQUEsS0FBMUI7O0FBNkJBLE1BQU1HLHdCQUF3QixHQUFHLFNBQTNCQSx3QkFBMkIsR0FBTTtBQUNyQztBQUNBNU8sSUFBQUEsUUFBUSxDQUFDOEYsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUNzSCxxQkFBckM7QUFDQXBOLElBQUFBLFFBQVEsQ0FBQzhGLGdCQUFULENBQTBCLFVBQTFCLEVBQXNDd0gsc0JBQXRDO0FBQ0F0TixJQUFBQSxRQUFRLENBQUM4RixnQkFBVCxDQUEwQixPQUExQixFQUFtQ3lILG1CQUFuQztBQUNBdk4sSUFBQUEsUUFBUSxDQUFDOEYsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUM4SCxzQkFBckM7QUFDQTVOLElBQUFBLFFBQVEsQ0FBQzhGLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DMkksb0JBQW5DO0FBQ0QsR0FQRDs7QUFTQSxTQUFPO0FBQ0xHLElBQUFBLHdCQUF3QixFQUF4QkE7QUFESyxHQUFQO0FBR0QsQ0FwSjJCLEVBQTVCOztBQXNKQSxpRUFBZS9CLG1CQUFmOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEpBO0FBQ0E7O0FBRUEsSUFBTXhHLGFBQWEsR0FBSSxZQUFNO0FBQzNCLE1BQU1nRixxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLEdBQU07QUFDbEMsUUFBTTFELGdCQUFnQixHQUFHM0gsUUFBUSxDQUFDRyxhQUFULENBQXVCLG9CQUF2QixDQUF6QjtBQUNBd0gsSUFBQUEsZ0JBQWdCLENBQUNoRyxLQUFqQixDQUF1QmtOLFNBQXZCLEdBQW1DLFFBQW5DO0FBQ0FsSCxJQUFBQSxnQkFBZ0IsQ0FBQzdFLFdBQWpCLEdBQStCLEVBQS9CO0FBQ0QsR0FKRDs7QUFNQSxNQUFNZ00sd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUEyQixDQUFDQyxTQUFELEVBQWU7QUFDOUMsUUFBTXBILGdCQUFnQixHQUFHM0gsUUFBUSxDQUFDRyxhQUFULENBQXVCLG9CQUF2QixDQUF6QjtBQUNBNE8sSUFBQUEsU0FBUyxDQUFDcE8sT0FBVixDQUFrQixVQUFDeUssUUFBRCxFQUFjO0FBQzlCRixNQUFBQSxpRkFBdUIsQ0FBQ0UsUUFBRCxFQUFXekQsZ0JBQVgsQ0FBdkI7QUFDRCxLQUZEO0FBR0QsR0FMRDs7QUFPQSxNQUFNcUgsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDaEgsZ0JBQUQsRUFBc0I7QUFDNUM7QUFDQSxRQUFNaUgscUJBQXFCLEdBQUdqSCxnQkFBZ0IsQ0FBQ2lHLE1BQWpCLENBQXdCLFVBQUN6RyxhQUFELEVBQW1CO0FBQ3ZFLFVBQU13RSxlQUFlLEdBQUdoTSxRQUFRLENBQUNHLGFBQVQsb0JBQW1DcUgsYUFBYSxDQUFDakcsRUFBakQsT0FBeEI7QUFDQSxhQUFPeUssZUFBZSxDQUFDM0wsU0FBaEIsS0FBOEIsMEJBQXJDO0FBQ0QsS0FINkIsQ0FBOUI7QUFLQSxXQUFPNE8scUJBQVA7QUFDRCxHQVJEOztBQVVBLE1BQU0zRyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQUNOLGdCQUFELEVBQXNCO0FBQ25ELFFBQU1pSCxxQkFBcUIsR0FBR0QsZUFBZSxDQUFDaEgsZ0JBQUQsQ0FBN0M7QUFDQSxRQUFNa0gsdUJBQXVCLEdBQUdELHFCQUFxQixDQUFDRSxJQUF0QixDQUEyQixVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxhQUFVQSxDQUFDLENBQUNDLE9BQUYsR0FBWUYsQ0FBQyxDQUFDRSxPQUF4QjtBQUFBLEtBQTNCLENBQWhDO0FBQ0FqRSxJQUFBQSxxQkFBcUI7QUFDckJ5RCxJQUFBQSx3QkFBd0IsQ0FBQ0ksdUJBQUQsQ0FBeEI7QUFDQSxXQUFPQSx1QkFBUDtBQUNELEdBTkQ7O0FBUUEsTUFBTTNHLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsQ0FBQ1AsZ0JBQUQsRUFBc0I7QUFDcEQsUUFBTWlILHFCQUFxQixHQUFHRCxlQUFlLENBQUNoSCxnQkFBRCxDQUE3QztBQUNBLFFBQU1rSCx1QkFBdUIsR0FBR0QscUJBQXFCLENBQUNFLElBQXRCLENBQTJCLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGFBQVVBLENBQUMsQ0FBQ0UsUUFBRixHQUFhSCxDQUFDLENBQUNHLFFBQXpCO0FBQUEsS0FBM0IsQ0FBaEM7QUFDQWxFLElBQUFBLHFCQUFxQjtBQUNyQnlELElBQUFBLHdCQUF3QixDQUFDSSx1QkFBRCxDQUF4QjtBQUNBLFdBQU9BLHVCQUFQO0FBQ0QsR0FORDs7QUFRQSxNQUFNMUcseUJBQXlCLEdBQUcsU0FBNUJBLHlCQUE0QixDQUFDUixnQkFBRCxFQUFzQjtBQUN0RCxRQUFNaUgscUJBQXFCLEdBQUdELGVBQWUsQ0FBQ2hILGdCQUFELENBQTdDO0FBRUEsUUFBTWtILHVCQUF1QixHQUFHRCxxQkFBcUIsQ0FBQ0UsSUFBdEIsQ0FDOUIsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsYUFBVUEsQ0FBQyxDQUFDRyxjQUFGLENBQWlCQyxXQUFqQixDQUE2QmhDLEtBQTdCLEdBQXFDMkIsQ0FBQyxDQUFDSSxjQUFGLENBQWlCQyxXQUFqQixDQUE2QmhDLEtBQTVFO0FBQUEsS0FEOEIsQ0FBaEM7QUFHQXBDLElBQUFBLHFCQUFxQjtBQUNyQnlELElBQUFBLHdCQUF3QixDQUFDSSx1QkFBRCxDQUF4QjtBQUNBLFdBQU9BLHVCQUFQO0FBQ0QsR0FURDs7QUFXQSxNQUFNN0csa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDTCxnQkFBRCxFQUFzQjtBQUMvQztBQUNBLFFBQU1pSCxxQkFBcUIsR0FBR2pILGdCQUFnQixDQUFDaUcsTUFBakIsQ0FBd0IsVUFBQ3pHLGFBQUQsRUFBbUI7QUFDdkUsVUFBTXdFLGVBQWUsR0FBR2hNLFFBQVEsQ0FBQ0csYUFBVCxvQkFBbUNxSCxhQUFhLENBQUNqRyxFQUFqRCxPQUF4Qjs7QUFDQSxVQUFJeUssZUFBZSxLQUFLLElBQXhCLEVBQThCO0FBQzVCLGVBQU8sS0FBUDtBQUNEOztBQUNELGFBQU9BLGVBQWUsQ0FBQzNMLFNBQWhCLEtBQThCLDBCQUFyQztBQUNELEtBTjZCLENBQTlCO0FBT0FnTCxJQUFBQSxxQkFBcUI7QUFDckJ5RCxJQUFBQSx3QkFBd0IsQ0FBQ0cscUJBQUQsQ0FBeEI7QUFDRCxHQVhEOztBQWFBLFNBQU87QUFDTDNHLElBQUFBLHNCQUFzQixFQUF0QkEsc0JBREs7QUFFTEMsSUFBQUEsdUJBQXVCLEVBQXZCQSx1QkFGSztBQUdMQyxJQUFBQSx5QkFBeUIsRUFBekJBLHlCQUhLO0FBSUxILElBQUFBLGtCQUFrQixFQUFsQkE7QUFKSyxHQUFQO0FBTUQsQ0F0RXFCLEVBQXRCOztBQXdFQSxpRUFBZWhDLGFBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNFQSxJQUFNcUosb0JBQW9CO0FBQUEsc0xBQUcsaUJBQU9ySSxVQUFQLEVBQW1CQyxhQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNKcUksS0FBSyxtREFBNENySSxhQUE1QyxrQ0FBaUZELFVBQWpGLFlBQW9HO0FBQUV1SSxjQUFBQSxJQUFJLEVBQUU7QUFBUixhQUFwRyxDQUREOztBQUFBO0FBQ3JCQyxZQUFBQSxRQURxQjtBQUFBO0FBQUEsbUJBRUhBLFFBQVEsQ0FBQ0MsSUFBVCxFQUZHOztBQUFBO0FBRXJCZixZQUFBQSxTQUZxQjtBQUdyQnhILFlBQUFBLGVBSHFCLEdBR0h3SCxTQUFTLENBQUNnQixJQUFWLENBQWUxSSxVQUFmLENBSEc7QUFBQSw2Q0FLcEJFLGVBTG9COztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQXBCbUksb0JBQW9CO0FBQUE7QUFBQTtBQUFBLEdBQTFCOztBQVFBLElBQU1NLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ3pJLGVBQUQsRUFBa0JELGFBQWxCLEVBQW9DO0FBQzlELE1BQU0ySSxXQUFXLEdBQUcxSSxlQUFlLENBQUMySSxPQUFwQztBQUNBLE1BQU1DLFdBQVcsR0FBR0YsV0FBVyxDQUFDdEMsSUFBaEM7QUFDQSxNQUFNeUMsa0JBQWtCLEdBQUdILFdBQVcsQ0FBQ0ksV0FBdkM7QUFDQSxNQUFNQyxTQUFTLEdBQUdMLFdBQVcsQ0FBQ00sS0FBWixDQUFrQkMsSUFBcEM7QUFDQSxNQUFNQyxhQUFhLHFEQUE4Q25KLGFBQTlDLDBCQUEyRWdKLFNBQTNFLENBQW5CO0FBRUEsU0FBTztBQUNMSCxJQUFBQSxXQUFXLEVBQVhBLFdBREs7QUFFTEMsSUFBQUEsa0JBQWtCLEVBQWxCQSxrQkFGSztBQUdMSyxJQUFBQSxhQUFhLEVBQWJBO0FBSEssR0FBUDtBQUtELENBWkQ7O0FBY0EsSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDbkosZUFBRCxFQUFrQkQsYUFBbEIsRUFBb0M7QUFDNUQsTUFBTXFKLFVBQVUsR0FBR3BKLGVBQWUsQ0FBQ3FKLE1BQW5DO0FBQ0EsTUFBTUEsTUFBTSxHQUFHLEVBQWY7QUFFQUQsRUFBQUEsVUFBVSxDQUFDaFEsT0FBWCxDQUFtQixVQUFDa1EsS0FBRCxFQUFXO0FBQzVCLFFBQU1DLFdBQVcsR0FBRztBQUNsQm5ELE1BQUFBLElBQUksRUFBRWtELEtBQUssQ0FBQ2xELElBRE07QUFFbEJwTSxNQUFBQSxFQUFFLEVBQUVzUCxLQUFLLENBQUN0UCxFQUZRO0FBR2xCOE8sTUFBQUEsV0FBVyxFQUFFUSxLQUFLLENBQUNSLFdBSEQ7QUFJbEJVLE1BQUFBLFFBQVEsRUFBRUYsS0FBSyxDQUFDRSxRQUpFO0FBS2xCQyxNQUFBQSxRQUFRLEVBQUVILEtBQUssQ0FBQ0csUUFMRTtBQU1sQkMsTUFBQUEsUUFBUSxFQUFFSixLQUFLLENBQUNLLFlBTkU7QUFPbEJDLE1BQUFBLE1BQU0sb0RBQTZDN0osYUFBN0Msd0JBQXdFdUosS0FBSyxDQUFDdFAsRUFBOUU7QUFQWSxLQUFwQjtBQVNBcVAsSUFBQUEsTUFBTSxDQUFDakYsSUFBUCxDQUFZbUYsV0FBWjtBQUNELEdBWEQ7QUFhQSxTQUFPRixNQUFQO0FBQ0QsQ0FsQkQ7O0FBb0JBLElBQU03SyxrQkFBa0I7QUFBQSx1TEFBRyxrQkFBT3NCLFVBQVAsRUFBbUJDLGFBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0tvSSxvQkFBb0IsQ0FBQ3JJLFVBQUQsRUFBYUMsYUFBYixDQUR6Qjs7QUFBQTtBQUNuQkMsWUFBQUEsZUFEbUI7QUFFbkI2SixZQUFBQSxlQUZtQixHQUVEcEIsbUJBQW1CLENBQUN6SSxlQUFELEVBQWtCRCxhQUFsQixDQUZsQjtBQUduQnNKLFlBQUFBLE1BSG1CLEdBR1ZGLGlCQUFpQixDQUFDbkosZUFBRCxFQUFrQkQsYUFBbEIsQ0FIUCxFQUt6Qjs7QUFDTW5FLFlBQUFBLGFBTm1CLEdBTUhvRSxlQUFlLENBQUM4SixLQUFoQixDQUFzQkMsT0FBdEIsQ0FDcEIvSixlQUFlLENBQUM4SixLQUFoQixDQUFzQixDQUF0QixDQURvQixFQUNNOUosZUFBZSxDQUFDOEosS0FBaEIsQ0FBc0IsQ0FBdEIsRUFBeUJFLFdBQXpCLEVBRE4sQ0FORzs7QUFVekIsZ0JBQUloSyxlQUFlLENBQUNpSyxPQUFoQixLQUE0QixNQUFoQyxFQUF3QztBQUN0Q2pLLGNBQUFBLGVBQWUsQ0FBQ2lLLE9BQWhCLEdBQTBCLFVBQTFCO0FBQ0Q7O0FBRUQsZ0JBQUlqSyxlQUFlLENBQUNoRyxFQUFoQixLQUF1QixRQUEzQixFQUFxQztBQUNuQ2dHLGNBQUFBLGVBQWUsQ0FBQ2tLLFFBQWhCLENBQXlCLENBQXpCLElBQThCLDBHQUE5QjtBQUNEOztBQUVELGdCQUFJbEssZUFBZSxDQUFDaEcsRUFBaEIsS0FBdUIsS0FBM0IsRUFBa0M7QUFDaENnRyxjQUFBQSxlQUFlLENBQUNrSyxRQUFoQixDQUF5QjlGLElBQXpCLENBQThCLDZGQUE5QjtBQUNEOztBQXBCd0IsOENBc0JsQjtBQUNMZ0MsY0FBQUEsSUFBSSxFQUFFcEcsZUFBZSxDQUFDb0csSUFEakI7QUFFTHBNLGNBQUFBLEVBQUUsRUFBRWdHLGVBQWUsQ0FBQ2hHLEVBRmY7QUFHTDhQLGNBQUFBLEtBQUssRUFBRWxPLGFBSEY7QUFJTHVPLGNBQUFBLElBQUksRUFBRW5LLGVBQWUsQ0FBQ21LLElBSmpCO0FBS0xDLGNBQUFBLEtBQUssRUFBRXBLLGVBQWUsQ0FBQzhFLElBTGxCO0FBTUx1RixjQUFBQSxLQUFLLEVBQUVySyxlQUFlLENBQUNxSyxLQU5sQjtBQU9MQyxjQUFBQSxRQUFRLEVBQUV0SyxlQUFlLENBQUNpSyxPQVByQjtBQVFMdEIsY0FBQUEsT0FBTyxFQUFFa0IsZUFSSjtBQVNMUixjQUFBQSxNQUFNLEVBQU5BLE1BVEs7QUFVTGtCLGNBQUFBLElBQUksRUFBRXZLLGVBQWUsQ0FBQ2tLO0FBVmpCLGFBdEJrQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFsQjFMLGtCQUFrQjtBQUFBO0FBQUE7QUFBQSxHQUF4Qjs7QUFvQ0EsaUVBQWVBLGtCQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RUEsSUFBTWdNLGtCQUFrQjtBQUFBLHNMQUFHLGlCQUFPMUssVUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDekI7QUFDTTJLLFlBQUFBLE1BRm1CLEdBRVYsb0RBRlU7O0FBQUEsa0JBR1JsSSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWhCLEtBQXlCZ0ksTUFIakI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkFJZnJDLEtBQUssaUNBQTBCdEksVUFBMUIsR0FBd0M7QUFBRXVJLGNBQUFBLElBQUksRUFBRTtBQUFSLGFBQXhDLENBSlU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLG1CQUtmRCxLQUFLLFdBQUl0SSxVQUFKLEdBQWtCO0FBQUV1SSxjQUFBQSxJQUFJLEVBQUU7QUFBUixhQUFsQixDQUxVOztBQUFBO0FBQUE7O0FBQUE7QUFHbkJDLFlBQUFBLFFBSG1CO0FBQUE7QUFBQSxtQkFNR0EsUUFBUSxDQUFDQyxJQUFULEVBTkg7O0FBQUE7QUFNbkJ0SSxZQUFBQSxhQU5tQjtBQUFBLDZDQVFsQkEsYUFSa0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBbEJ1SyxrQkFBa0I7QUFBQTtBQUFBO0FBQUEsR0FBeEI7O0FBV0EsSUFBTS9MLGdCQUFnQjtBQUFBLHVMQUFHLGtCQUFPcUIsVUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNLMEssa0JBQWtCLENBQUMxSyxVQUFELENBRHZCOztBQUFBO0FBQ2pCRyxZQUFBQSxhQURpQjtBQUVqQjhILFlBQUFBLE9BRmlCLEdBRVA5SCxhQUFhLENBQUM4SCxPQUFkLENBQXNCMkMsT0FBdEIsQ0FBOEIsQ0FBOUIsQ0FGTztBQUdqQjFDLFlBQUFBLFFBSGlCLEdBR04vSCxhQUFhLENBQUMrSCxRQUFkLENBQXVCMEMsT0FBdkIsQ0FBK0IsQ0FBL0IsQ0FITTtBQUlqQmxHLFlBQUFBLElBSmlCLEdBSVZ2RSxhQUFhLENBQUN1RSxJQUFkLENBQW1CLENBQW5CLElBQXdCdkUsYUFBYSxDQUFDdUUsSUFBZCxDQUFtQnZLLFNBQW5CLENBQTZCLENBQTdCLEVBQWdDeUssV0FBaEMsRUFKZDtBQUFBLDhDQU1oQjtBQUNMNUUsY0FBQUEsVUFBVSxFQUFWQSxVQURLO0FBRUw2SyxjQUFBQSxHQUFHLEVBQUUxSyxhQUFhLENBQUMySyxRQUZkO0FBR0wzQyxjQUFBQSxjQUFjLEVBQUVoSSxhQUFhLENBQUNnSSxjQUh6QjtBQUlMNEMsY0FBQUEsUUFBUSxFQUFFNUssYUFBYSxDQUFDNkssV0FBZCxDQUEwQnBOLEtBQTFCLENBQWdDLENBQWhDLENBSkw7QUFLTHFOLGNBQUFBLFlBQVksRUFBRTlLLGFBQWEsQ0FBQytLLFFBQWQsQ0FBdUJELFlBTGhDO0FBTUxFLGNBQUFBLGFBQWEsRUFBRWhMLGFBQWEsQ0FBQytLLFFBQWQsQ0FBdUJDLGFBTmpDO0FBT0xsRCxjQUFBQSxPQUFPLEVBQVBBLE9BUEs7QUFRTEMsY0FBQUEsUUFBUSxFQUFSQSxRQVJLO0FBU0x4RCxjQUFBQSxJQUFJLEVBQUpBO0FBVEssYUFOZ0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBaEIvRixnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsR0FBdEI7O0FBbUJBLGlFQUFlQSxnQkFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCQSxJQUFNTSxxQkFBcUI7QUFBQSxzTEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNHcUosS0FBSyxDQUFDLHVEQUFELENBRFI7O0FBQUE7QUFDdEI4QyxZQUFBQSxnQkFEc0I7QUFBQTtBQUFBLG1CQUVMQSxnQkFBZ0IsQ0FBQzNDLElBQWpCLEVBRks7O0FBQUE7QUFFdEI0QyxZQUFBQSxRQUZzQjtBQUd0QnBMLFlBQUFBLGFBSHNCLEdBR05vTCxRQUFRLENBQUMsQ0FBRCxDQUhGO0FBQUE7QUFBQSxtQkFJSS9DLEtBQUssbURBQTRDckksYUFBNUMsK0JBSlQ7O0FBQUE7QUFJdEJxTCxZQUFBQSxpQkFKc0I7QUFBQTtBQUFBLG1CQUtEQSxpQkFBaUIsQ0FBQzdDLElBQWxCLEVBTEM7O0FBQUE7QUFLdEJyRSxZQUFBQSxZQUxzQjtBQUFBLDZDQU9yQkEsWUFBWSxDQUFDc0UsSUFQUTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFyQnpKLHFCQUFxQjtBQUFBO0FBQUE7QUFBQSxHQUEzQjs7QUFVQSxJQUFNQyxtQkFBbUI7QUFBQSx1TEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDcEJ5TCxZQUFBQSxNQURvQixHQUNYLG9EQURXOztBQUFBLGtCQUVUbEksTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixLQUF5QmdJLE1BRmhCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBR2hCckMsS0FBSyxDQUFDLGlDQUFELEVBQW9DO0FBQUVDLGNBQUFBLElBQUksRUFBRTtBQUFSLGFBQXBDLENBSFc7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLG1CQUloQkQsS0FBSyxDQUFDLFdBQUQsRUFBYztBQUFFQyxjQUFBQSxJQUFJLEVBQUU7QUFBUixhQUFkLENBSlc7O0FBQUE7QUFBQTs7QUFBQTtBQUVwQkMsWUFBQUEsUUFGb0I7QUFBQTtBQUFBLG1CQUtLQSxRQUFRLENBQUNDLElBQVQsRUFMTDs7QUFBQTtBQUtwQjlILFlBQUFBLGdCQUxvQjtBQUFBLDhDQU9uQkEsZ0JBUG1COztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQW5CekIsbUJBQW1CO0FBQUE7QUFBQTtBQUFBLEdBQXpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0EsdVBBQWU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDaUJvSixLQUFLLENBQUMsdURBQUQsRUFBMEQ7QUFBRUMsWUFBQUEsSUFBSSxFQUFFO0FBQVIsV0FBMUQsQ0FEdEI7O0FBQUE7QUFDUGdELFVBQUFBLGVBRE87QUFBQTtBQUFBLGlCQUVVQSxlQUFlLENBQUM5QyxJQUFoQixFQUZWOztBQUFBO0FBRVA0QyxVQUFBQSxRQUZPO0FBR1BwTCxVQUFBQSxhQUhPLEdBR1NvTCxRQUFRLENBQUMsQ0FBRCxDQUhqQjtBQUFBLDJDQUlOcEwsYUFKTTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQSxJQUFNdUwsYUFBYTtBQUFBLHNMQUFHLGlCQUFPdkwsYUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNHcUksS0FBSyxtREFBNENySSxhQUE1QywyQkFEUjs7QUFBQTtBQUNkdUksWUFBQUEsUUFEYztBQUFBO0FBQUEsbUJBRUdBLFFBQVEsQ0FBQ0MsSUFBVCxFQUZIOztBQUFBO0FBRWRnRCxZQUFBQSxRQUZjO0FBQUEsNkNBSWJBLFFBQVEsQ0FBQy9DLElBSkk7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBYjhDLGFBQWE7QUFBQTtBQUFBO0FBQUEsR0FBbkI7O0lBT01FO0FBV0osb0JBQVlDLE1BQVosRUFBb0JGLFFBQXBCLEVBQThCeEwsYUFBOUIsRUFBNkM7QUFBQTs7QUFDM0MsU0FBSzBMLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtoUixXQUFMLEdBQW1CLEtBQUtpUixjQUFMLENBQW9CSCxRQUFwQixDQUFuQjtBQUNBLFNBQUt4TCxhQUFMLEdBQXFCQSxhQUFyQjtBQUNEOzs7O1dBVEQsd0JBQWV3TCxRQUFmLEVBQXlCO0FBQ3ZCLFVBQU05USxXQUFXLEdBQUc4USxRQUFRLENBQUMsS0FBS0UsTUFBTixDQUE1QjtBQUNBLGFBQU9oUixXQUFQO0FBQ0Q7OztXQVFELHdCQUFlO0FBQ2IsVUFBTWtSLFdBQVcsR0FBRyxLQUFLbFIsV0FBTCxDQUFpQnVPLEtBQWpCLENBQXVCQyxJQUEzQztBQUNBLFVBQU0yQyxRQUFRLHFEQUE4QyxLQUFLN0wsYUFBbkQsdUJBQTZFNEwsV0FBN0UsQ0FBZDtBQUNBLGFBQU9DLFFBQVA7QUFDRDtBQUVEOzs7Ozt3TUFDQSxrQkFBd0JMLFFBQXhCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNRTSxnQkFBQUEsZ0JBRFIsR0FDMkIsS0FBS3BSLFdBQUwsQ0FBaUJtRCxJQUQ1Qzs7QUFBQSxzQkFFTWlPLGdCQUFnQixLQUFLakYsU0FGM0I7QUFBQTtBQUFBO0FBQUE7O0FBQUEsa0RBR1csRUFIWDs7QUFBQTtBQUtRa0YsZ0JBQUFBLG9CQUxSLEdBSytCRCxnQkFBZ0IsQ0FBQ3ZLLEdBQWpCLENBQXFCLFVBQUNtSyxNQUFEO0FBQUEseUJBQWE7QUFDN0RyRixvQkFBQUEsSUFBSSxFQUFFbUYsUUFBUSxDQUFDRSxNQUFELENBQVIsQ0FBaUJyRixJQURzQztBQUU3RHdGLG9CQUFBQSxRQUFRLG9EQUE2QyxLQUFJLENBQUM3TCxhQUFsRCx1QkFBNEUwTCxNQUE1RSxTQUZxRDtBQUc3RE0sb0JBQUFBLElBQUksRUFBRVIsUUFBUSxDQUFDRSxNQUFELENBQVIsQ0FBaUJPLElBQWpCLENBQXNCQztBQUhpQyxtQkFBYjtBQUFBLGlCQUFyQixDQUwvQjtBQUFBLGtEQVVTSCxvQkFWVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztXQWFBLHFCQUFZUCxRQUFaLEVBQXNCO0FBQ3BCLFVBQUksS0FBSzlRLFdBQUwsS0FBcUJtTSxTQUF6QixFQUFvQztBQUNsQyxlQUFPLEtBQVA7QUFDRDs7QUFDRCxVQUFRUixJQUFSLEdBQWlCLEtBQUszTCxXQUF0QixDQUFRMkwsSUFBUjtBQUNBLFVBQVEwQyxXQUFSLEdBQXdCLEtBQUtyTyxXQUE3QixDQUFRcU8sV0FBUjtBQUNBLFVBQU1pRCxJQUFJLEdBQUcsS0FBS3RSLFdBQUwsQ0FBaUJ1UixJQUFqQixDQUFzQkMsS0FBbkM7QUFDQSxVQUFNTCxRQUFRLEdBQUcsS0FBS00sWUFBTCxDQUFrQlgsUUFBbEIsQ0FBakI7QUFDQSxVQUFNWSxjQUFjLEdBQUcsS0FBS0MsaUJBQUwsQ0FBdUJiLFFBQXZCLENBQXZCO0FBQ0EsVUFBUXpHLElBQVIsR0FBaUIsS0FBS3JLLFdBQXRCLENBQVFxSyxJQUFSO0FBRUEsYUFBTztBQUNMc0IsUUFBQUEsSUFBSSxFQUFKQSxJQURLO0FBRUwwQyxRQUFBQSxXQUFXLEVBQVhBLFdBRks7QUFHTGlELFFBQUFBLElBQUksRUFBSkEsSUFISztBQUlMSCxRQUFBQSxRQUFRLEVBQVJBLFFBSks7QUFLTE8sUUFBQUEsY0FBYyxFQUFkQSxjQUxLO0FBTUxySCxRQUFBQSxJQUFJLEVBQUpBO0FBTkssT0FBUDtBQVFEOzs7O2tNQXZERCxrQkFBeUIvRSxhQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUXdMLGdCQUFBQSxRQURSLEdBQ21CRCxhQUFhLENBQUN2TCxhQUFELENBRGhDO0FBQUEsa0RBRVN3TCxRQUZUOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FBMERGLGlFQUFlQyxRQUFmOzs7Ozs7Ozs7Ozs7Ozs7QUNuRUEsSUFBTWEsZUFBZSxHQUFJLFlBQU07QUFDN0IsTUFBTUMsMkJBQTJCLEdBQUcsU0FBOUJBLDJCQUE4QixDQUFDQyxHQUFELEVBQU16VCxTQUFOLEVBQWlCOEcsYUFBakIsRUFBbUM7QUFDckUsUUFBTTFELE9BQU8sR0FBR3pELFFBQVEsQ0FBQytULGFBQVQsQ0FBdUJELEdBQXZCLENBQWhCO0FBQ0FyUSxJQUFBQSxPQUFPLENBQUNwRCxTQUFSLEdBQW9CQSxTQUFwQjtBQUNBOEcsSUFBQUEsYUFBYSxDQUFDNk0sV0FBZCxDQUEwQnZRLE9BQTFCO0FBRUEsV0FBT0EsT0FBUDtBQUNELEdBTkQ7O0FBUUEsTUFBTXdRLHdCQUF3QixHQUFHLFNBQTNCQSx3QkFBMkIsQ0FBQ0gsR0FBRCxFQUFNdlMsRUFBTixFQUFVNEYsYUFBVixFQUE0QjtBQUMzRCxRQUFNMUQsT0FBTyxHQUFHekQsUUFBUSxDQUFDK1QsYUFBVCxDQUF1QkQsR0FBdkIsQ0FBaEI7QUFDQXJRLElBQUFBLE9BQU8sQ0FBQ2xDLEVBQVIsR0FBYUEsRUFBYjtBQUNBNEYsSUFBQUEsYUFBYSxDQUFDNk0sV0FBZCxDQUEwQnZRLE9BQTFCO0FBRUEsV0FBT0EsT0FBUDtBQUNELEdBTkQ7O0FBUUEsTUFBTXlRLGdDQUFnQyxHQUFHLFNBQW5DQSxnQ0FBbUMsQ0FBQ0osR0FBRCxFQUFNelQsU0FBTixFQUFpQmtCLEVBQWpCLEVBQXFCNEYsYUFBckIsRUFBdUM7QUFDOUUsUUFBTTFELE9BQU8sR0FBR3pELFFBQVEsQ0FBQytULGFBQVQsQ0FBdUJELEdBQXZCLENBQWhCO0FBQ0FyUSxJQUFBQSxPQUFPLENBQUNwRCxTQUFSLEdBQW9CQSxTQUFwQjtBQUNBb0QsSUFBQUEsT0FBTyxDQUFDbEMsRUFBUixHQUFhQSxFQUFiO0FBQ0E0RixJQUFBQSxhQUFhLENBQUM2TSxXQUFkLENBQTBCdlEsT0FBMUI7QUFFQSxXQUFPQSxPQUFQO0FBQ0QsR0FQRDs7QUFTQSxNQUFNMFEsZ0NBQWdDLEdBQUcsU0FBbkNBLGdDQUFtQyxDQUFDOVQsU0FBRCxFQUFZOEcsYUFBWixFQUEyQmlOLEdBQTNCLEVBQWdDQyxHQUFoQyxFQUF3QztBQUMvRSxRQUFNQyxZQUFZLEdBQUdULDJCQUEyQixDQUFDLEtBQUQsRUFBUXhULFNBQVIsRUFBbUI4RyxhQUFuQixDQUFoRDtBQUNBbU4sSUFBQUEsWUFBWSxDQUFDRixHQUFiLEdBQW1CQSxHQUFuQjtBQUNBRSxJQUFBQSxZQUFZLENBQUNELEdBQWIsR0FBbUJBLEdBQW5CO0FBRUEsV0FBT0MsWUFBUDtBQUNELEdBTkQ7O0FBUUEsU0FBTztBQUNMVCxJQUFBQSwyQkFBMkIsRUFBM0JBLDJCQURLO0FBRUxJLElBQUFBLHdCQUF3QixFQUF4QkEsd0JBRks7QUFHTEMsSUFBQUEsZ0NBQWdDLEVBQWhDQSxnQ0FISztBQUlMQyxJQUFBQSxnQ0FBZ0MsRUFBaENBO0FBSkssR0FBUDtBQU1ELENBeEN1QixFQUF4Qjs7QUEwQ0EsaUVBQWVQLGVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7QUFDQTs7QUFFQSxJQUFNM04sb0JBQW9CO0FBQUEsc0xBQUcsaUJBQU93TyxZQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDM0JGLFlBQUFBLG1FQUFtQixDQUFDRSxZQUFELEVBQWUsTUFBZixDQUFuQjtBQUVNclIsWUFBQUEsYUFIcUIsR0FHTHBELFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixpQkFBdkIsQ0FISztBQUluQndSLFlBQUFBLEtBSm1CLEdBSVQ4QyxZQUpTLENBSW5COUMsS0FKbUI7QUFLM0JBLFlBQUFBLEtBQUssQ0FBQ2hSLE9BQU4sQ0FBYyxVQUFDeUwsSUFBRCxFQUFVO0FBQ3RCLGtCQUFNRSxZQUFZLEdBQUdzSCw0RkFBQSxDQUE0QyxLQUE1QyxFQUFtRCxlQUFuRCxFQUFvRXhRLGFBQXBFLENBQXJCO0FBQ0Esa0JBQU1zUixnQkFBZ0IsR0FBR2QsNEZBQUEsQ0FBNEMsTUFBNUMsRUFBb0Qsb0JBQXBELEVBQTBFdEgsWUFBMUUsQ0FBekI7QUFDQW9JLGNBQUFBLGdCQUFnQixDQUFDNVIsV0FBakIsR0FBK0JzSixJQUEvQjtBQUNBd0gsY0FBQUEsaUdBQUEsQ0FBaUQscUJBQWpELEVBQXdFdEgsWUFBeEUsWUFBeUZrSSxrREFBTSxXQUFJcEksSUFBSixVQUEvRixHQUFrSEEsSUFBbEg7QUFDRCxhQUxEO0FBTUE7O0FBQ011SSxZQUFBQSxnQkFacUIsR0FZRmYsNEZBQUEsQ0FBNEMsS0FBNUMsRUFBbUQsbUJBQW5ELEVBQXdFeFEsYUFBeEUsQ0FaRTtBQWFuQnlPLFlBQUFBLFFBYm1CLEdBYU40QyxZQWJNLENBYW5CNUMsUUFibUI7QUFjckIrQyxZQUFBQSxvQkFkcUIsR0FjRWhCLDRGQUFBLENBQTRDLE1BQTVDLEVBQW9ELHdCQUFwRCxFQUE4RWUsZ0JBQTlFLENBZEY7QUFlM0JDLFlBQUFBLG9CQUFvQixDQUFDOVIsV0FBckIsR0FBbUMrTyxRQUFuQztBQUNBK0IsWUFBQUEsaUdBQUEsQ0FBaUQseUJBQWpELEVBQTRFZSxnQkFBNUUsWUFBaUdILGtEQUFNLFdBQUkzQyxRQUFKLFVBQXZHLEdBQThIQSxRQUE5SDtBQUVBOztBQUNNZ0QsWUFBQUEsYUFuQnFCLEdBbUJMN1UsUUFBUSxDQUFDRyxhQUFULENBQXVCLGlCQUF2QixDQW5CSztBQW9CckJrRCxZQUFBQSxZQXBCcUIsR0FvQk51USw0RkFBQSxDQUE0QyxNQUE1QyxFQUFvRCxlQUFwRCxFQUFxRWlCLGFBQXJFLENBcEJNO0FBcUIzQnhSLFlBQUFBLFlBQVksQ0FBQ3lSLFNBQWIsR0FBeUJMLFlBQVksQ0FBQy9DLElBQXRDO0FBRU1xRCxZQUFBQSxrQkF2QnFCLEdBdUJBL1UsUUFBUSxDQUFDRyxhQUFULENBQXVCLHNCQUF2QixDQXZCQTtBQXdCckJtRCxZQUFBQSxjQXhCcUIsR0F3QkpzUSw0RkFBQSxDQUE0QyxLQUE1QyxFQUFtRCxpQkFBbkQsRUFBc0VtQixrQkFBdEUsQ0F4Qkk7QUF5QnJCQyxZQUFBQSxXQXpCcUIsR0F5QlBwQiw0RkFBQSxDQUE0QyxLQUE1QyxFQUFtRCxjQUFuRCxFQUFtRXRRLGNBQW5FLENBekJPO0FBMEJyQjJSLFlBQUFBLFVBMUJxQixHQTBCUnJCLGlHQUFBLENBQ2pCLG1CQURpQixFQUNJb0IsV0FESixFQUNpQlAsWUFBWSxDQUFDdkUsT0FBYixDQUFxQk8sYUFEdEMsRUFDcURnRSxZQUFZLENBQUN2RSxPQUFiLENBQXFCQyxXQUQxRSxDQTFCUTtBQTZCM0I4RSxZQUFBQSxVQUFVLENBQUMxVCxFQUFYLEdBQWdCLGFBQWhCO0FBRU0yVCxZQUFBQSxRQS9CcUIsR0ErQlYsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsQ0EvQlU7QUFnQ3ZCclYsWUFBQUEsS0FoQ3VCLEdBZ0NmLENBaENlO0FBa0MzQjRVLFlBQUFBLFlBQVksQ0FBQzdELE1BQWIsQ0FBb0JqUSxPQUFwQixDQUE0QixVQUFDa1EsS0FBRCxFQUFXO0FBQ3JDLGtCQUFNc0UsUUFBUSxHQUFHdkIsaUdBQUEsQ0FDZixXQURlLEVBQ0ZvQixXQURFLEVBQ1duRSxLQUFLLENBQUNNLE1BRGpCLEVBQ3lCTixLQUFLLENBQUNsRCxJQUQvQixDQUFqQixDQURxQyxDQUlyQzs7QUFDQXdILGNBQUFBLFFBQVEsQ0FBQzVULEVBQVQsYUFBaUIyVCxRQUFRLENBQUNyVixLQUFELENBQXpCO0FBQ0FBLGNBQUFBLEtBQUssSUFBSSxDQUFUO0FBQ0QsYUFQRDtBQVNBOztBQUNBLGlCQUFTdVYsQ0FBVCxHQUFhLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxJQUFJLENBQTVCLEVBQStCO0FBQ3ZCQyxjQUFBQSxXQUR1QixHQUNUclYsUUFBUSxDQUFDK1QsYUFBVCxDQUF1QixLQUF2QixDQURTO0FBRXZCdUIsY0FBQUEsV0FGdUIsR0FFVDFCLDRGQUFBLENBQTRDLE1BQTVDLEVBQW9ELGNBQXBELEVBQW9FeUIsV0FBcEUsQ0FGUztBQUd2QkUsY0FBQUEsa0JBSHVCLEdBR0YzQiw0RkFBQSxDQUE0QyxNQUE1QyxFQUFvRCxxQkFBcEQsRUFBMkV5QixXQUEzRSxDQUhFO0FBSXZCRyxjQUFBQSxZQUp1QixHQUlSLENBQUMsU0FBRCxFQUFZLEdBQVosRUFBaUIsR0FBakIsRUFBc0IsR0FBdEIsRUFBMkIsR0FBM0IsQ0FKUTs7QUFNN0Isa0JBQUlKLENBQUMsS0FBSyxDQUFWLEVBQWE7QUFDWEMsZ0JBQUFBLFdBQVcsQ0FBQ2hWLFNBQVosR0FBd0IscUJBQXhCO0FBQ0FnVixnQkFBQUEsV0FBVyxDQUFDOVQsRUFBWixHQUFpQixpQkFBakI7QUFDQStULGdCQUFBQSxXQUFXLENBQUN4UyxXQUFaLGFBQTZCMlIsWUFBWSxDQUFDdkUsT0FBYixDQUFxQkMsV0FBbEQsZUFBa0VxRixZQUFZLENBQUNKLENBQUQsQ0FBOUU7QUFDQUcsZ0JBQUFBLGtCQUFrQixDQUFDVCxTQUFuQixHQUErQkwsWUFBWSxDQUFDdkUsT0FBYixDQUFxQkUsa0JBQXBEO0FBQ0QsZUFMRCxNQUtPO0FBQ0NhLGdCQUFBQSxRQURELEdBQ1lqUixRQUFRLENBQUMrVCxhQUFULENBQXVCLE1BQXZCLENBRFo7QUFFTDlDLGdCQUFBQSxRQUFRLENBQUM1USxTQUFULEdBQXFCLGtCQUFyQjtBQUNBNFEsZ0JBQUFBLFFBQVEsQ0FBQ25PLFdBQVQsdUJBQW9DMlIsWUFBWSxDQUFDN0QsTUFBYixDQUFvQndFLENBQUMsR0FBRyxDQUF4QixFQUEyQm5FLFFBQS9EO0FBQ0FvRSxnQkFBQUEsV0FBVyxDQUFDckIsV0FBWixDQUF3Qi9DLFFBQXhCO0FBRUFvRSxnQkFBQUEsV0FBVyxDQUFDaFYsU0FBWixHQUF3QixjQUF4QjtBQUNBZ1YsZ0JBQUFBLFdBQVcsQ0FBQzlULEVBQVosYUFBb0JpVSxZQUFZLENBQUNKLENBQUQsQ0FBaEM7QUFDQUUsZ0JBQUFBLFdBQVcsQ0FBQ3hTLFdBQVosYUFBNkIyUixZQUFZLENBQUM3RCxNQUFiLENBQW9Cd0UsQ0FBQyxHQUFHLENBQXhCLEVBQTJCekgsSUFBeEQsZUFBaUU2SCxZQUFZLENBQUNKLENBQUQsQ0FBN0U7QUFDQUcsZ0JBQUFBLGtCQUFrQixDQUFDVCxTQUFuQixHQUErQkwsWUFBWSxDQUFDN0QsTUFBYixDQUFvQndFLENBQUMsR0FBRyxDQUF4QixFQUEyQi9FLFdBQTFEO0FBQ0Q7O0FBRUQvTSxjQUFBQSxjQUFjLENBQUMwUSxXQUFmLENBQTJCcUIsV0FBM0I7QUFDRDs7QUFFS0ksWUFBQUEsbUJBdEVxQixHQXNFQ3pWLFFBQVEsQ0FBQ0csYUFBVCxDQUF1Qix3QkFBdkIsQ0F0RUQ7QUF1RXJCb0QsWUFBQUEsWUF2RXFCLEdBdUVOcVEsNEZBQUEsQ0FBNEMsS0FBNUMsRUFBbUQsZUFBbkQsRUFBb0U2QixtQkFBcEUsQ0F2RU07O0FBeUUzQixpQkFBU0wsRUFBVCxHQUFhLENBQWIsRUFBZ0JBLEVBQUMsR0FBRyxDQUFKLElBQVNBLEVBQUMsR0FBR1gsWUFBWSxDQUFDM0MsSUFBYixDQUFrQjFSLE1BQS9DLEVBQXVEZ1YsRUFBQyxJQUFJLENBQTVELEVBQStEO0FBQ3ZETSxjQUFBQSxXQUR1RCxHQUN6QzlCLDRGQUFBLENBQTRDLE1BQTVDLEVBQW9ELGNBQXBELEVBQW9FclEsWUFBcEUsQ0FEeUM7QUFFN0RtUyxjQUFBQSxXQUFXLENBQUM1UyxXQUFaLGFBQTZCMlIsWUFBWSxDQUFDM0MsSUFBYixDQUFrQnNELEVBQWxCLENBQTdCO0FBQ0Q7O0FBNUUwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFwQm5QLG9CQUFvQjtBQUFBO0FBQUE7QUFBQSxHQUExQjs7QUErRUEsaUVBQWVBLG9CQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7O0FBRUEsSUFBTUUsa0JBQWtCO0FBQUEsc0xBQUcsaUJBQU9vQixlQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNqQnFLLFlBQUFBLEtBRGlCLEdBQ1BySyxlQURPLENBQ2pCcUssS0FEaUI7QUFFbkJqTixZQUFBQSxjQUZtQixHQUVGM0UsUUFBUSxDQUFDRyxhQUFULENBQXVCLGtCQUF2QixDQUZFO0FBR25CcUMsWUFBQUEsUUFIbUIsR0FHUnhDLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixZQUF2QixDQUhRO0FBSW5CbUMsWUFBQUEsbUJBSm1CLEdBSUdzUiw0RkFBQSxDQUE0QyxLQUE1QyxFQUFtRCx1QkFBbkQsRUFBNEVqUCxjQUE1RSxDQUpIO0FBTXpCaU4sWUFBQUEsS0FBSyxDQUFDalIsT0FBTixDQUFjLFVBQUNnVixJQUFELEVBQVU7QUFDdEIsa0JBQUlBLElBQUksQ0FBQ0MsR0FBTCxLQUFhLENBQWpCLEVBQW9CO0FBQ2xCLG9CQUFNQyxtQkFBbUIsR0FBR2pDLGlHQUFBLENBQzFCLEtBRDBCLEVBQ25CLDRCQURtQixvQkFDc0JyTSxlQUFlLENBQUNvRyxJQUR0QyxHQUM4Q3JMLG1CQUQ5QyxDQUE1QjtBQUdBRSxnQkFBQUEsUUFBUSxDQUFDTSxXQUFULHFCQUFrQ3lFLGVBQWUsQ0FBQ29HLElBQWxEO0FBQ0Esb0JBQU1tSSxhQUFhLHlFQUFrRXZPLGVBQWUsQ0FBQ2hHLEVBQWxGLGNBQXdGb1UsSUFBSSxDQUFDQyxHQUE3RixTQUFuQjtBQUNBaEMsZ0JBQUFBLGlHQUFBLENBQWlELFlBQWpELEVBQStEaUMsbUJBQS9ELEVBQW9GQyxhQUFwRixFQUFtRyxjQUFuRztBQUNELGVBUEQsTUFPTztBQUNMLG9CQUFNQyxjQUFjLEdBQUduQyxpR0FBQSxDQUFpRCxLQUFqRCxFQUF3RCxzQkFBeEQsRUFBZ0YrQixJQUFJLENBQUNoSSxJQUFyRixFQUEyRnJMLG1CQUEzRixDQUF2QjtBQUNBLG9CQUFNNlEsUUFBUSx5RUFBa0U1TCxlQUFlLENBQUNoRyxFQUFsRixjQUF3Rm9VLElBQUksQ0FBQ0MsR0FBN0YsU0FBZDtBQUNBaEMsZ0JBQUFBLGlHQUFBLENBQWlELFlBQWpELEVBQStEbUMsY0FBL0QsRUFBK0U1QyxRQUEvRSxFQUF5RndDLElBQUksQ0FBQ2hJLElBQTlGO0FBQ0Q7QUFDRixhQWJEOztBQU55QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFsQnhILGtCQUFrQjtBQUFBO0FBQUE7QUFBQSxHQUF4Qjs7QUFzQkEsaUVBQWVBLGtCQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBT0E7O0FBRUEsSUFBTUQsa0JBQWtCO0FBQUEsc0xBQUcsaUJBQU91TyxZQUFQLEVBQXFCak4sYUFBckIsRUFBb0NGLGFBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN6QmlOLFlBQUFBLG1FQUFtQixDQUFDRSxZQUFELEVBQWUsT0FBZixDQUFuQjtBQUVNMkIsWUFBQUEsYUFIbUIsR0FHSHBXLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QiwwQkFBdkIsQ0FIRztBQUt6QjZWLFlBQUFBLGtFQUFrQixDQUFDSSxhQUFELEVBQWdCLFVBQWhCLEVBQTRCNU8sYUFBYSxDQUFDOEgsT0FBMUMsQ0FBbEI7QUFDQTBHLFlBQUFBLGtFQUFrQixDQUFDSSxhQUFELEVBQWdCLFdBQWhCLEVBQTZCNU8sYUFBYSxDQUFDK0gsUUFBM0MsQ0FBbEI7QUFDQTs7QUFDTXhELFlBQUFBLElBUm1CLGFBUVR2RSxhQUFhLENBQUN1RSxJQUFkLENBQW1CLENBQW5CLElBQXdCdkUsYUFBYSxDQUFDdUUsSUFBZCxDQUFtQnZLLFNBQW5CLENBQTZCLENBQTdCLEVBQWdDeUssV0FBaEMsRUFSZjtBQVN6QmlLLFlBQUFBLGtFQUFrQixDQUFDRSxhQUFELEVBQWdCckssSUFBaEIsQ0FBbEI7QUFFQTs7QUFFTXNLLFlBQUFBLHNCQWJtQixHQWFNclcsUUFBUSxDQUFDRyxhQUFULENBQXVCLHFCQUF2QixDQWJOO0FBY25CbVcsWUFBQUEsMEJBZG1CLEdBY1V0VyxRQUFRLENBQUNHLGFBQVQsQ0FBdUIseUJBQXZCLENBZFY7QUFlbkJvVyxZQUFBQSx1QkFmbUIsR0FlT3ZXLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixzQkFBdkIsQ0FmUDtBQWlCbkJxVyxZQUFBQSxpQkFqQm1CLEdBaUJDQyxJQUFJLENBQUNDLEtBQUwsQ0FBV2xQLGFBQWEsQ0FBQ2dJLGNBQWQsQ0FBNkJtSCxVQUE3QixDQUF3Q0MsVUFBbkQsQ0FqQkQ7QUFrQm5CQyxZQUFBQSxxQkFsQm1CLEdBa0JLSixJQUFJLENBQUNDLEtBQUwsQ0FBV2xQLGFBQWEsQ0FBQ2dJLGNBQWQsQ0FBNkJzSCxjQUE3QixDQUE0Q0YsVUFBdkQsQ0FsQkw7QUFtQm5CRyxZQUFBQSxrQkFuQm1CLEdBbUJFTixJQUFJLENBQUNDLEtBQUwsQ0FBV2xQLGFBQWEsQ0FBQ2dJLGNBQWQsQ0FBNkJ3SCxXQUE3QixDQUF5Q0osVUFBcEQsQ0FuQkY7QUFxQnpCUCxZQUFBQSxzQkFBc0IsQ0FBQzFVLEtBQXZCLENBQTZCc1YsZUFBN0IsYUFBa0RULGlCQUFsRDtBQUNBRixZQUFBQSwwQkFBMEIsQ0FBQzNVLEtBQTNCLENBQWlDc1YsZUFBakMsYUFBc0RKLHFCQUFxQixHQUFHTCxpQkFBOUU7QUFDQUQsWUFBQUEsdUJBQXVCLENBQUM1VSxLQUF4QixDQUE4QnNWLGVBQTlCLEdBQWdELFVBQWhEO0FBQ01DLFlBQUFBLGVBeEJtQixHQXdCRGxYLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixvQkFBdkIsQ0F4QkM7QUF5QnpCK1csWUFBQUEsZUFBZSxDQUFDcFUsV0FBaEIsR0FBOEIyVCxJQUFJLENBQUNDLEtBQUwsQ0FBV2xQLGFBQWEsQ0FBQ2dJLGNBQWQsQ0FBNkJDLFdBQTdCLENBQXlDaEMsS0FBcEQsQ0FBOUI7QUFFTTBKLFlBQUFBLGVBM0JtQixHQTJCRFYsSUFBSSxDQUFDQyxLQUFMLENBQVdsUCxhQUFhLENBQUNnSSxjQUFkLENBQTZCbUgsVUFBN0IsQ0FBd0NsSixLQUFuRCxDQTNCQztBQTRCbkIySixZQUFBQSxtQkE1Qm1CLEdBNEJHWCxJQUFJLENBQUNDLEtBQUwsQ0FBV2xQLGFBQWEsQ0FBQ2dJLGNBQWQsQ0FBNkJzSCxjQUE3QixDQUE0Q3JKLEtBQXZELENBNUJIO0FBNkJuQjRKLFlBQUFBLGdCQTdCbUIsR0E2QkFaLElBQUksQ0FBQ0MsS0FBTCxDQUFXbFAsYUFBYSxDQUFDZ0ksY0FBZCxDQUE2QndILFdBQTdCLENBQXlDdkosS0FBcEQsQ0E3QkE7QUErQnpCd0ksWUFBQUEsaUVBQWlCLENBQUMsVUFBRCxFQUFhbUIsbUJBQWIsRUFBa0NQLHFCQUFsQyxDQUFqQjtBQUNBWixZQUFBQSxpRUFBaUIsQ0FBQyxPQUFELEVBQVVvQixnQkFBVixFQUE0Qk4sa0JBQTVCLENBQWpCO0FBQ0FkLFlBQUFBLGlFQUFpQixDQUFDLE1BQUQsRUFBU2tCLGVBQVQsRUFBMEJYLGlCQUExQixDQUFqQjtBQUVBOztBQUNRcEUsWUFBQUEsUUFwQ2lCLEdBb0NKNUssYUFwQ0ksQ0FvQ2pCNEssUUFwQ2lCO0FBQUE7QUFBQSxtQkFxQ0ZXLDBFQUFBLENBQXFCekwsYUFBckIsQ0FyQ0U7O0FBQUE7QUFxQ25Cd0wsWUFBQUEsUUFyQ21CO0FBc0NuQnlFLFlBQUFBLGtCQXRDbUIsR0FzQ0V2WCxRQUFRLENBQUNHLGFBQVQsQ0FBdUIsdUJBQXZCLENBdENGO0FBdUNuQjRELFlBQUFBLGlCQXZDbUIsR0F1Q0M2UCw0RkFBQSxDQUE0QyxLQUE1QyxFQUFtRCxxQkFBbkQsRUFBMEUyRCxrQkFBMUUsQ0F2Q0Q7QUF5Q3pCbkYsWUFBQUEsUUFBUSxDQUFDelIsT0FBVCxDQUFpQixVQUFDNlcsT0FBRCxFQUFhO0FBQzVCLGtCQUFNQyxnQkFBZ0IsR0FBRzdELDRGQUFBLENBQTRDLEtBQTVDLEVBQW1ELG9CQUFuRCxFQUF5RTdQLGlCQUF6RSxDQUF6QjtBQUVBeVQsY0FBQUEsT0FBTyxDQUFDN1csT0FBUixDQUFnQixVQUFDcVMsTUFBRCxFQUFZO0FBQzFCLG9CQUFNMEUsSUFBSSxHQUFHLElBQUkzRSw4REFBSixDQUFhQyxNQUFiLEVBQXFCRixRQUFyQixFQUErQnhMLGFBQS9CLENBQWI7QUFDQSxvQkFBTXFRLFFBQVEsR0FBR0QsSUFBSSxDQUFDRSxXQUFMLENBQWlCOUUsUUFBakIsQ0FBakI7O0FBQ0Esb0JBQUk2RSxRQUFRLElBQUksQ0FBQ0EsUUFBUSxDQUFDdEwsSUFBVCxDQUFjeEosUUFBZCxDQUF1QixTQUF2QixDQUFiLElBQWtELENBQUM4VSxRQUFRLENBQUN0TCxJQUFULENBQWN4SixRQUFkLENBQXVCLFlBQXZCLENBQXZELEVBQTZGO0FBQzNGLHNCQUFNZ1Ysc0JBQXNCLEdBQUc3WCxRQUFRLENBQUMrVCxhQUFULENBQXVCLEtBQXZCLENBQS9CO0FBQ0E4RCxrQkFBQUEsc0JBQXNCLENBQUN4WCxTQUF2QixHQUFtQywwQkFBbkM7QUFDQW9YLGtCQUFBQSxnQkFBZ0IsQ0FBQ3pELFdBQWpCLENBQTZCNkQsc0JBQTdCO0FBRUEsc0JBQU1DLFFBQVEsR0FBR2xFLDRGQUFBLENBQTRDLEtBQTVDLEVBQW1ELFdBQW5ELEVBQWdFaUUsc0JBQWhFLENBQWpCO0FBRUFqRSxrQkFBQUEsaUdBQUEsQ0FBaUQsVUFBakQsRUFBNkRrRSxRQUE3RCxFQUF1RUgsUUFBUSxDQUFDeEUsUUFBaEYsWUFBNkZILE1BQTdGO0FBRUEsc0JBQU0rRSxvQkFBb0IsR0FBR25FLDRGQUFBLENBQTRDLEtBQTVDLEVBQW1ELHdCQUFuRCxFQUE2RWtFLFFBQTdFLENBQTdCO0FBRUEsc0JBQU1FLFdBQVcsR0FBR3BFLDRGQUFBLENBQTRDLE1BQTVDLEVBQW9ELFdBQXBELEVBQWlFbUUsb0JBQWpFLENBQXBCO0FBQ0FDLGtCQUFBQSxXQUFXLENBQUNsVixXQUFaLEdBQTBCNlUsUUFBUSxDQUFDaEssSUFBbkM7QUFDQSxzQkFBTXNLLGtCQUFrQixHQUFHckUsNEZBQUEsQ0FBNEMsTUFBNUMsRUFBb0Qsa0JBQXBELEVBQXdFbUUsb0JBQXhFLENBQTNCO0FBQ0FFLGtCQUFBQSxrQkFBa0IsQ0FBQ25ELFNBQW5CLEdBQStCNkMsUUFBUSxDQUFDdEgsV0FBeEM7QUFDQSxzQkFBTTZILFFBQVEsR0FBR3RFLDRGQUFBLENBQTRDLEtBQTVDLEVBQW1ELFdBQW5ELEVBQWdFbUUsb0JBQWhFLENBQWpCO0FBQ0Esc0JBQU1JLFNBQVMsR0FBR3ZFLDRGQUFBLENBQTRDLE1BQTVDLEVBQW9ELFlBQXBELEVBQWtFc0UsUUFBbEUsQ0FBbEI7QUFDQUMsa0JBQUFBLFNBQVMsQ0FBQ3JWLFdBQVYsR0FBd0IsUUFBeEI7QUFDQSxzQkFBTXNWLFVBQVUsR0FBR3hFLDRGQUFBLENBQTRDLE1BQTVDLEVBQW9ELGFBQXBELEVBQW1Fc0UsUUFBbkUsQ0FBbkI7QUFDQUUsa0JBQUFBLFVBQVUsQ0FBQ3RWLFdBQVgsR0FBeUI2VSxRQUFRLENBQUNyRSxJQUFsQztBQUVBOztBQUNBLHNCQUFRSSxjQUFSLEdBQTJCaUUsUUFBM0IsQ0FBUWpFLGNBQVI7QUFDQTlILGtCQUFBQSxPQUFPLENBQUN5TSxPQUFSLENBQWdCM0UsY0FBaEIsRUFDRzRFLElBREgsQ0FDUSxVQUFDQyxLQUFELEVBQVc7QUFDZix3QkFBTUMsdUJBQXVCLEdBQUc1RSw0RkFBQSxDQUE0QyxLQUE1QyxFQUFtRCwyQkFBbkQsRUFBZ0ZpRSxzQkFBaEYsQ0FBaEM7QUFDQVUsb0JBQUFBLEtBQUssQ0FBQzVYLE9BQU4sQ0FBYyxVQUFDOFgsYUFBRCxFQUFtQjtBQUMvQiwwQkFBTUMsb0JBQW9CLEdBQUc5RSw0RkFBQSxDQUE0QyxLQUE1QyxFQUFtRCxnQkFBbkQsRUFBcUU0RSx1QkFBckUsQ0FBN0I7QUFDQTVFLHNCQUFBQSxpR0FBQSxDQUNFLG9CQURGLEVBQ3dCOEUsb0JBRHhCLEVBQzhDRCxhQUFhLENBQUN0RixRQUQ1RCxZQUN5RXNGLGFBQWEsQ0FBQzlLLElBRHZGO0FBSUEsMEJBQU1nTCw2QkFBNkIsR0FBRy9FLDRGQUFBLENBQTRDLEtBQTVDLEVBQW1ELGtDQUFuRCxFQUF1RjhFLG9CQUF2RixDQUF0QztBQUVBLDBCQUFNRSxpQkFBaUIsR0FBR2hGLDRGQUFBLENBQTRDLE1BQTVDLEVBQW9ELHFCQUFwRCxFQUEyRStFLDZCQUEzRSxDQUExQjtBQUNBQyxzQkFBQUEsaUJBQWlCLENBQUM5VixXQUFsQixHQUFnQzJWLGFBQWEsQ0FBQzlLLElBQTlDO0FBQ0EsMEJBQU1rTCxpQkFBaUIsR0FBR2pGLDRGQUFBLENBQTRDLEtBQTVDLEVBQW1ELHFCQUFuRCxFQUEwRStFLDZCQUExRSxDQUExQjtBQUNBLDBCQUFNRyxzQkFBc0IsR0FBR2xGLDRGQUFBLENBQTRDLE1BQTVDLEVBQW9ELDJCQUFwRCxFQUFpRmlGLGlCQUFqRixDQUEvQjtBQUNBQyxzQkFBQUEsc0JBQXNCLENBQUNoVyxXQUF2QixHQUFxQyxRQUFyQztBQUNBLDBCQUFNaVcsbUJBQW1CLEdBQUduRiw0RkFBQSxDQUE0QyxNQUE1QyxFQUFvRCx1QkFBcEQsRUFBNkVpRixpQkFBN0UsQ0FBNUI7QUFDQUUsc0JBQUFBLG1CQUFtQixDQUFDalcsV0FBcEIsR0FBa0MyVixhQUFhLENBQUNuRixJQUFoRDtBQUNELHFCQWZEO0FBZ0JELG1CQW5CSDtBQW9CRDtBQUNGLGVBL0NEO0FBZ0RELGFBbkREO0FBb0RBOztBQUNNMEYsWUFBQUEsbUJBOUZtQixHQThGR2haLFFBQVEsQ0FBQ0csYUFBVCxDQUF1Qix3QkFBdkIsQ0E5Rkg7QUErRm5COFksWUFBQUEsbUJBL0ZtQixHQStGR3JGLDRGQUFBLENBQTRDLEtBQTVDLEVBQW1ELHdCQUFuRCxFQUE2RW9GLG1CQUE3RSxDQS9GSDtBQWdHbkJFLFlBQUFBLGdCQWhHbUIsR0FnR0ExUixhQUFhLENBQUM4SyxZQWhHZDtBQWlHekI2RCxZQUFBQSxrRUFBa0IsQ0FBQzhDLG1CQUFELEVBQXNCQyxnQkFBdEIsRUFBd0M1UixhQUF4QyxDQUFsQjtBQUVNNlIsWUFBQUEsb0JBbkdtQixHQW1HSW5aLFFBQVEsQ0FBQ0csYUFBVCxDQUF1Qix5QkFBdkIsQ0FuR0o7QUFvR25CaVosWUFBQUEsb0JBcEdtQixHQW9HSXhGLDRGQUFBLENBQTRDLEtBQTVDLEVBQW1ELHlCQUFuRCxFQUE4RXVGLG9CQUE5RSxDQXBHSjtBQXFHbkJFLFlBQUFBLGlCQXJHbUIsR0FxR0M3UixhQUFhLENBQUNnTCxhQXJHZjtBQXNHekIyRCxZQUFBQSxrRUFBa0IsQ0FBQ2lELG9CQUFELEVBQXVCQyxpQkFBdkIsRUFBMEMvUixhQUExQyxDQUFsQjs7QUF0R3lCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWxCcEIsa0JBQWtCO0FBQUE7QUFBQTtBQUFBLEdBQXhCOztBQXlHQSxpRUFBZUEsa0JBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuSEE7O0FBRUEsSUFBTW9ULFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLENBQUQsRUFBTztBQUN2QixNQUFNL0UsTUFBTSxHQUFHLEVBQWY7QUFDQStFLEVBQUFBLENBQUMsQ0FBQ0MsSUFBRixHQUFTN1ksT0FBVCxDQUFpQixVQUFDK1csSUFBRCxFQUFVO0FBQUVsRCxJQUFBQSxNQUFNLENBQUNrRCxJQUFJLENBQUNwRyxPQUFMLENBQWEsSUFBYixFQUFtQixFQUFuQixDQUFELENBQU4sR0FBaUNpSSxDQUFDLENBQUM3QixJQUFELENBQWxDO0FBQTJDLEdBQXhFO0FBQ0EsU0FBT2xELE1BQVA7QUFDRCxDQUpEOztBQU1BLElBQU1BLE1BQU0sR0FBRzhFLFNBQVMsQ0FBQ0csbUVBQUQsQ0FBeEI7O0FBRUEsSUFBTWxGLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0UsWUFBRCxFQUFla0YsY0FBZixFQUFrQztBQUM1RCxNQUFNQyxTQUFTLEdBQUc1WixRQUFRLENBQUNHLGFBQVQsWUFBMkJ3WixjQUEzQixnQkFBbEI7QUFDQUMsRUFBQUEsU0FBUyxDQUFDalksS0FBVixDQUFnQmtZLFVBQWhCLHVGQUEwR3BGLFlBQVksQ0FBQ2xULEVBQXZIO0FBQ0FxWSxFQUFBQSxTQUFTLENBQUNqWSxLQUFWLENBQWdCbVksY0FBaEIsR0FBaUMsT0FBakM7QUFFQSxNQUFNM1csYUFBYSxHQUFHeVcsU0FBUyxDQUFDelosYUFBVixDQUF3QixpQkFBeEIsQ0FBdEI7QUFDQWdELEVBQUFBLGFBQWEsQ0FBQ0wsV0FBZCxHQUE0QjJSLFlBQVksQ0FBQ3BELEtBQXpDO0FBRUEsTUFBTW5PLFlBQVksR0FBRzBXLFNBQVMsQ0FBQ3paLGFBQVYsQ0FBd0IsZ0JBQXhCLENBQXJCO0FBQ0ErQyxFQUFBQSxZQUFZLENBQUNKLFdBQWIsR0FBMkIyUixZQUFZLENBQUM5RyxJQUF4QztBQUNELENBVkQ7QUFZQTs7O0FBQ0EsSUFBTXFJLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0ksYUFBRCxFQUFnQjJELFFBQWhCLEVBQTBCQyxRQUExQixFQUF1QztBQUNoRSxNQUFNQyxZQUFZLEdBQUdqYSxRQUFRLENBQUMrVCxhQUFULENBQXVCLEtBQXZCLENBQXJCO0FBQ0EsTUFBTW1HLEtBQUssR0FBR2xhLFFBQVEsQ0FBQytULGFBQVQsQ0FBdUIsTUFBdkIsQ0FBZDtBQUNBLE1BQU1vRyxTQUFTLEdBQUduYSxRQUFRLENBQUMrVCxhQUFULENBQXVCLE1BQXZCLENBQWxCO0FBRUE7O0FBQ0EsTUFBTXFHLGFBQWEsR0FBR0wsUUFBUSxDQUFDekksT0FBVCxDQUFpQixHQUFqQixFQUFzQixHQUF0QixFQUEyQnJGLFdBQTNCLEVBQXRCO0FBRUFnTyxFQUFBQSxZQUFZLENBQUM1WixTQUFiLEdBQXlCK1osYUFBekI7QUFDQUYsRUFBQUEsS0FBSyxDQUFDM1ksRUFBTixhQUFjNlksYUFBZDtBQUNBRixFQUFBQSxLQUFLLENBQUM3WixTQUFOLEdBQWtCLE9BQWxCO0FBQ0E4WixFQUFBQSxTQUFTLENBQUM5WixTQUFWLGFBQXlCK1osYUFBekI7QUFDQUYsRUFBQUEsS0FBSyxDQUFDcFgsV0FBTixHQUFvQmlYLFFBQXBCO0FBQ0FJLEVBQUFBLFNBQVMsQ0FBQ3JYLFdBQVYsYUFBMkJrWCxRQUEzQjtBQUVBQyxFQUFBQSxZQUFZLENBQUNqRyxXQUFiLENBQXlCa0csS0FBekI7QUFBaUNELEVBQUFBLFlBQVksQ0FBQ2pHLFdBQWIsQ0FBeUJtRyxTQUF6QjtBQUNqQy9ELEVBQUFBLGFBQWEsQ0FBQ3BDLFdBQWQsQ0FBMEJpRyxZQUExQjtBQUNELENBakJEOztBQW1CQSxJQUFNL0Qsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDRSxhQUFELEVBQWdCckssSUFBaEIsRUFBeUI7QUFDbEQsTUFBTXNPLGdCQUFnQixHQUFHcmEsUUFBUSxDQUFDK1QsYUFBVCxDQUF1QixLQUF2QixDQUF6QjtBQUNBc0csRUFBQUEsZ0JBQWdCLENBQUNoYSxTQUFqQixHQUE2QixXQUE3QjtBQUNBLE1BQU1pYSxRQUFRLEdBQUd0YSxRQUFRLENBQUMrVCxhQUFULENBQXVCLE1BQXZCLENBQWpCO0FBQ0F1RyxFQUFBQSxRQUFRLENBQUNqYSxTQUFULEdBQXFCLGlCQUFyQjtBQUNBaWEsRUFBQUEsUUFBUSxDQUFDeFgsV0FBVCxHQUF1QmlKLElBQXZCO0FBQ0EsTUFBTXdPLFFBQVEsR0FBR3ZhLFFBQVEsQ0FBQytULGFBQVQsQ0FBdUIsS0FBdkIsQ0FBakI7QUFDQXdHLEVBQUFBLFFBQVEsQ0FBQ2xhLFNBQVQsR0FBcUIsK0JBQXJCO0FBQ0FrYSxFQUFBQSxRQUFRLENBQUNuRyxHQUFULGFBQWtCSSxNQUFNLFdBQUl6SSxJQUFKLFVBQXhCO0FBQ0F3TyxFQUFBQSxRQUFRLENBQUNsRyxHQUFULGFBQWtCdEksSUFBbEI7QUFDQXNPLEVBQUFBLGdCQUFnQixDQUFDckcsV0FBakIsQ0FBNkJzRyxRQUE3QjtBQUNBRCxFQUFBQSxnQkFBZ0IsQ0FBQ3JHLFdBQWpCLENBQTZCdUcsUUFBN0I7QUFDQW5FLEVBQUFBLGFBQWEsQ0FBQ3BDLFdBQWQsQ0FBMEJxRyxnQkFBMUI7QUFDRCxDQWJEOztBQWVBLElBQU1wRSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUN1RSxVQUFELEVBQWFDLFdBQWIsRUFBMEJDLGdCQUExQixFQUErQztBQUN2RSxNQUFNQyxlQUFlLEdBQUczYSxRQUFRLENBQUNHLGFBQVQsWUFBMkJxYSxVQUEzQix1QkFBeEI7QUFFQSxNQUFNSSxXQUFXLEdBQUdoSCw0RkFBQSxDQUE0QyxLQUE1QyxFQUFtRCxjQUFuRCxFQUFtRStHLGVBQW5FLENBQXBCO0FBRUEsTUFBTUUsa0JBQWtCLEdBQUdqSCx5RkFBQSxDQUF5QyxNQUF6QyxZQUFvRDRHLFVBQXBELGFBQXdFSSxXQUF4RSxDQUEzQjtBQUNBLE1BQU1FLHVCQUF1QixHQUFHbEgseUZBQUEsQ0FBeUMsTUFBekMsWUFBb0Q0RyxVQUFwRCxrQkFBNkVJLFdBQTdFLENBQWhDO0FBQ0FDLEVBQUFBLGtCQUFrQixDQUFDL1gsV0FBbkIsYUFBb0MyWCxXQUFwQztBQUNBSyxFQUFBQSx1QkFBdUIsQ0FBQ2hZLFdBQXhCLGFBQXlDNFgsZ0JBQXpDO0FBQ0QsQ0FURDs7QUFXQSxJQUFNdkUsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDNEUsZUFBRCxFQUFrQkMsWUFBbEIsRUFBZ0MxVCxhQUFoQyxFQUFrRDtBQUMzRTBULEVBQUFBLFlBQVksQ0FBQ3JhLE9BQWIsQ0FBcUIsVUFBQ3NhLE9BQUQsRUFBYTtBQUNoQyxRQUFNQyxXQUFXLEdBQUd0SCw0RkFBQSxDQUE0QyxLQUE1QyxFQUFtRCxjQUFuRCxFQUFtRW1ILGVBQW5FLENBQXBCO0FBQ0EsUUFBTUksaUJBQWlCLEdBQUdGLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV3ROLElBQXJDO0FBQ0EsUUFBTXlOLGVBQWUsR0FBR0gsT0FBTyxDQUFDLENBQUQsQ0FBL0I7QUFDQSxRQUFNSSxtQkFBbUIscURBQThDL1QsYUFBOUMsMkJBQTRFOFQsZUFBNUUsU0FBekI7QUFDQXhILElBQUFBLGlHQUFBLENBQ0Usb0JBREYsRUFDd0JzSCxXQUR4QixFQUNxQ0csbUJBRHJDLGtCQUNtRUQsZUFEbkU7QUFJQSxRQUFNRSxZQUFZLEdBQUcxSCw0RkFBQSxDQUE0QyxLQUE1QyxFQUFtRCxlQUFuRCxFQUFvRXNILFdBQXBFLENBQXJCO0FBQ0EsUUFBTUssd0JBQXdCLEdBQUczSCw0RkFBQSxDQUE0QyxNQUE1QyxFQUFvRCxxQkFBcEQsRUFBMkUwSCxZQUEzRSxDQUFqQztBQUNBQyxJQUFBQSx3QkFBd0IsQ0FBQ3pZLFdBQXpCLEdBQXVDcVksaUJBQXZDO0FBQ0EsUUFBTUssY0FBYyxHQUFHNUgsNEZBQUEsQ0FBNEMsS0FBNUMsRUFBbUQsaUJBQW5ELEVBQXNFMEgsWUFBdEUsQ0FBdkI7QUFDQSxRQUFNRyxtQkFBbUIsR0FBRzdILDRGQUFBLENBQTRDLE1BQTVDLEVBQW9ELHVCQUFwRCxFQUE2RTRILGNBQTdFLENBQTVCO0FBQ0FDLElBQUFBLG1CQUFtQixDQUFDM1ksV0FBcEIsR0FBa0MsV0FBbEM7QUFDQSxRQUFNNFksS0FBSyxHQUFHWCxlQUFlLENBQUMxYSxTQUFoQixLQUE4Qix3QkFBOUIsR0FBeUQsTUFBekQsR0FBa0UsS0FBaEY7QUFDQSxRQUFNc2Isd0JBQXdCLEdBQUcvSCw0RkFBQSxDQUE0QyxNQUE1Qyx1Q0FBa0Y4SCxLQUFsRixHQUEyRkYsY0FBM0YsQ0FBakM7QUFDQUcsSUFBQUEsd0JBQXdCLENBQUM3WSxXQUF6QixhQUEwQ21ZLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV1csY0FBWCxDQUEwQjNKLE9BQTFCLENBQWtDLENBQWxDLENBQTFDO0FBQ0EsUUFBTTRKLGtCQUFrQixHQUFHakksNEZBQUEsQ0FBNEMsTUFBNUMsRUFBb0Qsc0JBQXBELEVBQTRFMEgsWUFBNUUsQ0FBM0I7QUFDQU8sSUFBQUEsa0JBQWtCLENBQUMvWSxXQUFuQixvQkFBMkNtWSxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdhLE9BQXREO0FBQ0QsR0FwQkQ7QUFxQkQsQ0F0QkQ7O0FBd0JBLElBQU01USx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLENBQUNFLFFBQUQsRUFBV3pELGdCQUFYLEVBQWdDO0FBQzlELE1BQU1vVSxpQkFBaUIsR0FBR25JLDRGQUFBLENBQTRDLEtBQTVDLEVBQW1ELDBCQUFuRCxFQUErRWpNLGdCQUEvRSxDQUExQjtBQUNBLE1BQU1OLFVBQVUsR0FBRytELFFBQVEsQ0FBQzdKLEVBQVQsR0FBYzZKLFFBQVEsQ0FBQzdKLEVBQXZCLEdBQTRCNkosUUFBUSxDQUFDbEksWUFBeEQ7QUFDQTZZLEVBQUFBLGlCQUFpQixDQUFDalIsT0FBbEIsQ0FBMEJ2SixFQUExQixHQUErQjhGLFVBQS9CO0FBQ0EsTUFBTTJVLGNBQWMsMEVBQW1FM1UsVUFBbkUsV0FBcEI7QUFDQSxNQUFNNFUsV0FBVyxHQUFHckksaUdBQUEsQ0FDbEIsY0FEa0IsRUFDRm1JLGlCQURFLEVBQ2lCQyxjQURqQixFQUNpQyxFQURqQyxDQUFwQjtBQUdBQyxFQUFBQSxXQUFXLENBQUNDLFFBQVosR0FBdUIsQ0FBdkI7QUFDQUgsRUFBQUEsaUJBQWlCLENBQUNHLFFBQWxCLEdBQTZCLENBQTdCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUd2SSw0RkFBQSxDQUE0QyxLQUE1QyxFQUFtRCx1QkFBbkQsRUFBNEVtSSxpQkFBNUUsQ0FBNUI7QUFDQSxNQUFNN1ksWUFBWSxHQUFHMFEsNEZBQUEsQ0FBNEMsTUFBNUMsRUFBb0QsZUFBcEQsRUFBcUV1SSxtQkFBckUsQ0FBckI7QUFDQWpaLEVBQUFBLFlBQVksQ0FBQ0osV0FBYixHQUEyQnNJLFFBQVEsQ0FBQ3VDLElBQXBDO0FBQ0QsQ0FiRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUZBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSw2Q0FBNkMsY0FBYyxlQUFlLDJCQUEyQixHQUFHLFdBQVcsMkJBQTJCLHlDQUF5Qyx5QkFBeUIsMEJBQTBCLEdBQUcsaUJBQWlCLHlDQUF5QyxxQkFBcUIsdUJBQXVCLGdCQUFnQixnQkFBZ0Isd0NBQXdDLEdBQUcsbUNBQW1DLHVDQUF1QyxtQkFBbUIsaUNBQWlDLG9CQUFvQixHQUFHLHlCQUF5QixxQkFBcUIsb0JBQW9CLHdCQUF3QixHQUFHLHlDQUF5Qyw0QkFBNEIsNEJBQTRCLEdBQUcsNEJBQTRCLGtCQUFrQixrQ0FBa0MsaUJBQWlCLHlDQUF5QyxvQkFBb0IsbUJBQW1CLHdCQUF3QixtQ0FBbUMsNEJBQTRCLHdCQUF3QixHQUFHLDJDQUEyQyx1QkFBdUIsV0FBVyx3QkFBd0IsZ0NBQWdDLG1CQUFtQix3QkFBd0IsZ0JBQWdCLGlCQUFpQix1QkFBdUIscUJBQXFCLEdBQUcsaUNBQWlDLG1CQUFtQix1QkFBdUIsNkJBQTZCLEdBQUcsK0JBQStCLGlCQUFpQixxQkFBcUIsb0JBQW9CLEdBQUcsdUJBQXVCLG1CQUFtQixvQkFBb0Isd0JBQXdCLGtCQUFrQix1QkFBdUIsOEJBQThCLHFCQUFxQixzQkFBc0IsbUJBQW1CLEdBQUcsK0JBQStCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHVCQUF1Qix3QkFBd0IsR0FBRyw2QkFBNkIsb0JBQW9CLHFCQUFxQixrQ0FBa0MsZ0JBQWdCLGlCQUFpQixHQUFHLHlCQUF5QixnQkFBZ0IsdUJBQXVCLGdCQUFnQixHQUFHLGdDQUFnQyxrQkFBa0IsbUJBQW1CLHVCQUF1QixlQUFlLFdBQVcsZ0JBQWdCLGlCQUFpQixpQ0FBaUMsbW5EQUFtbkQsR0FBRyxnQ0FBZ0MsaUJBQWlCLHFDQUFxQyxHQUFHLGlDQUFpQyxlQUFlLG9CQUFvQixxQ0FBcUMsR0FBRyxvQ0FBb0MscUJBQXFCLEdBQUcsaUNBQWlDLGtCQUFrQiwyQkFBMkIsdUJBQXVCLGNBQWMsR0FBRyx5QkFBeUIsaUJBQWlCLHNCQUFzQixxQkFBcUIsOEJBQThCLHVCQUF1Qix3Q0FBd0MsR0FBRyx5QkFBeUIsaUJBQWlCLHNCQUFzQixxQkFBcUIsOEJBQThCLHVCQUF1Qix3Q0FBd0MsR0FBRyw4Q0FBOEMsa0JBQWtCLDJCQUEyQixrQ0FBa0MsdUJBQXVCLGdCQUFnQix3QkFBd0IsR0FBRywrQkFBK0IsaUJBQWlCLDRCQUE0QixtQkFBbUIsb0JBQW9CLHFCQUFxQixvQkFBb0IsdUJBQXVCLHVDQUF1QyxHQUFHLHFDQUFxQyx3Q0FBd0MsR0FBRyx3Q0FBd0MsdUJBQXVCLG1CQUFtQixvQkFBb0IsaUJBQWlCLEdBQUcsNkRBQTZELHNCQUFzQixHQUFHLHVDQUF1Qyx1QkFBdUIsdUJBQXVCLGtCQUFrQixnQkFBZ0IsR0FBRyw2QkFBNkIsd0JBQXdCLDhCQUE4QixxQ0FBcUMsdUNBQXVDLHFCQUFxQixrQ0FBa0MsMEJBQTBCLG1CQUFtQixHQUFHLG1DQUFtQyx3Q0FBd0MsR0FBRyxtQ0FBbUMsa0JBQWtCLDJCQUEyQix3QkFBd0IsR0FBRyx5Q0FBeUMsdUJBQXVCLGtCQUFrQixvQkFBb0IsR0FBRyxvQ0FBb0MsdUJBQXVCLDhCQUE4Qix3QkFBd0IscUJBQXFCLGVBQWUsY0FBYyxnQkFBZ0Isc0JBQXNCLG1CQUFtQiw0QkFBNEIsa0JBQWtCLEdBQUcsMkNBQTJDLGtCQUFrQixvQkFBb0IsMkJBQTJCLHFDQUFxQyw4QkFBOEIscUJBQXFCLGdCQUFnQixHQUFHLGlEQUFpRCx3Q0FBd0MsR0FBRyxpREFBaUQsd0NBQXdDLEdBQUcsdUJBQXVCLG1CQUFtQixvQkFBb0Isd0JBQXdCLGtCQUFrQix1QkFBdUIsOEJBQThCLHFCQUFxQixzQkFBc0IsbUJBQW1CLEdBQUcsa0NBQWtDLGlCQUFpQixxQkFBcUIsdUJBQXVCLGNBQWMsaUNBQWlDLHVCQUF1Qix1Q0FBdUMsZ0JBQWdCLHFCQUFxQixHQUFHLDZCQUE2QiwwQ0FBMEMsb0JBQW9CLEtBQUssMkNBQTJDLHFCQUFxQixLQUFLLEdBQUcsOEJBQThCLGdEQUFnRCxvQkFBb0IsS0FBSyx5Q0FBeUMscUJBQXFCLEtBQUssb0NBQW9DLHFCQUFxQix5QkFBeUIsS0FBSyxtQ0FBbUMsZ0JBQWdCLEtBQUssMkJBQTJCLHdCQUF3QixLQUFLLDJCQUEyQix3QkFBd0IsS0FBSyxHQUFHLDhCQUE4Qix5Q0FBeUMsZ0JBQWdCLEtBQUssR0FBRyxPQUFPLGlHQUFpRyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFlBQVksS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLE1BQU0sVUFBVSxVQUFVLFdBQVcsS0FBSyxNQUFNLFdBQVcsS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sNEJBQTRCLGNBQWMsZUFBZSwyQkFBMkIsS0FBSyxXQUFXLDJCQUEyQix5Q0FBeUMseUJBQXlCLDBCQUEwQixHQUFHLGlCQUFpQix5Q0FBeUMscUJBQXFCLHVCQUF1QixnQkFBZ0IsZ0JBQWdCLHdDQUF3QywyQkFBMkIseUNBQXlDLHFCQUFxQixtQ0FBbUMsc0JBQXNCLEtBQUssaUJBQWlCLHVCQUF1QixzQkFBc0IsMEJBQTBCLEtBQUssaUNBQWlDLDhCQUE4Qiw4QkFBOEIsS0FBSyxvQkFBb0Isb0JBQW9CLG9DQUFvQyxtQkFBbUIsMkNBQTJDLHNCQUFzQixxQkFBcUIsMEJBQTBCLHFDQUFxQyw4QkFBOEIsMEJBQTBCLEtBQUssbUNBQW1DLHlCQUF5QixhQUFhLDBCQUEwQixrQ0FBa0MscUJBQXFCLDBCQUEwQixrQkFBa0IsbUJBQW1CLHlCQUF5Qix1QkFBdUIsS0FBSyx5QkFBeUIscUJBQXFCLHlCQUF5QiwrQkFBK0IsS0FBSyx1QkFBdUIsbUJBQW1CLHVCQUF1QixzQkFBc0IsS0FBSyxlQUFlLHFCQUFxQixzQkFBc0IsMEJBQTBCLG9CQUFvQix5QkFBeUIsZ0NBQWdDLHVCQUF1Qix3QkFBd0IscUJBQXFCLE9BQU8sdUJBQXVCLG9CQUFvQiw2QkFBNkIsOEJBQThCLHlCQUF5QiwwQkFBMEIsS0FBSyxxQkFBcUIsc0JBQXNCLHVCQUF1QixvQ0FBb0Msa0JBQWtCLG1CQUFtQixLQUFLLGlCQUFpQixrQkFBa0IseUJBQXlCLGtCQUFrQixLQUFLLDBCQUEwQixvQkFBb0IscUJBQXFCLHlCQUF5QixpQkFBaUIsYUFBYSxrQkFBa0IsbUJBQW1CLG1DQUFtQyxnNkNBQWc2QyxLQUFLLHdCQUF3QixtQkFBbUIsdUNBQXVDLEtBQUsseUJBQXlCLGlCQUFpQixzQkFBc0IsdUNBQXVDLEtBQUssMkJBQTJCLHVCQUF1QixLQUFLLHlCQUF5QixvQkFBb0IsNkJBQTZCLHlCQUF5QixnQkFBZ0IsS0FBSyxpQkFBaUIsbUJBQW1CLHdCQUF3Qix1QkFBdUIsZ0NBQWdDLHlCQUF5QiwwQ0FBMEMsS0FBSyxpQkFBaUIsbUJBQW1CLHdCQUF3Qix1QkFBdUIsZ0NBQWdDLHlCQUF5QiwwQ0FBMEMsS0FBSyxzQ0FBc0Msb0JBQW9CLDZCQUE2QixvQ0FBb0MseUJBQXlCLGtCQUFrQiwwQkFBMEIsS0FBSyx1QkFBdUIsbUJBQW1CLDhCQUE4QixxQkFBcUIsc0JBQXNCLHVCQUF1QixzQkFBc0IseUJBQXlCLHlDQUF5QyxLQUFLLDZCQUE2QiwwQ0FBMEMsS0FBSyxnQ0FBZ0MseUJBQXlCLHFCQUFxQixzQkFBc0IsbUJBQW1CLDhCQUE4QiwwQkFBMEIsT0FBTyxLQUFLLCtCQUErQix5QkFBeUIseUJBQXlCLG9CQUFvQixrQkFBa0IsS0FBSyxxQkFBcUIsMEJBQTBCLGdDQUFnQyx1Q0FBdUMseUNBQXlDLHVCQUF1QixvQ0FBb0MsNEJBQTRCLHFCQUFxQixLQUFLLDJCQUEyQiw4Q0FBOEMsMkJBQTJCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLEtBQUssaUNBQWlDLHlCQUF5QixvQkFBb0Isc0JBQXNCLEtBQUssNEJBQTRCLHlCQUF5QixnQ0FBZ0MsMEJBQTBCLHVCQUF1QixpQkFBaUIsZ0JBQWdCLGtCQUFrQix3QkFBd0IscUJBQXFCLCtCQUErQixvQkFBb0IsS0FBSyxtQ0FBbUMsb0JBQW9CLHNCQUFzQiw4QkFBOEIsd0NBQXdDLGdDQUFnQyx1QkFBdUIsa0JBQWtCLEtBQUsseUNBQXlDLDBDQUEwQyxLQUFLLHlDQUF5QywwQ0FBMEMsS0FBSyxpQkFBaUIscUJBQXFCLHNCQUFzQiwwQkFBMEIsb0JBQW9CLHlCQUF5QixnQ0FBZ0MsdUJBQXVCLHdCQUF3QixxQkFBcUIsS0FBSywwQkFBMEIsbUJBQW1CLHVCQUF1Qix5QkFBeUIsZ0JBQWdCLG1DQUFtQyx5QkFBeUIseUNBQXlDLGtCQUFrQix1QkFBdUIsS0FBSyxpQ0FBaUMsZ0NBQWdDLHNCQUFzQixPQUFPLG1DQUFtQyx1QkFBdUIsT0FBTyxLQUFLLGtDQUFrQyxzQ0FBc0Msc0JBQXNCLE9BQU8saUNBQWlDLHVCQUF1QixPQUFPLDRCQUE0Qix1QkFBdUIsMkJBQTJCLE9BQU8sMkJBQTJCLGtCQUFrQixPQUFPLG1CQUFtQiwwQkFBMEIsT0FBTyxtQkFBbUIsMEJBQTBCLE9BQU8sS0FBSyxrQ0FBa0MsK0JBQStCLGtCQUFrQixPQUFPLEtBQUssR0FBRyxtQkFBbUI7QUFDNTFqQjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsNkNBQTZDLGNBQWMsR0FBRyxXQUFXLDJCQUEyQix5QkFBeUIsMEJBQTBCLEdBQUcsVUFBVSx5REFBeUQsR0FBRyxZQUFZLGtCQUFrQixvQkFBb0IsZUFBZSxvQkFBb0IsWUFBWSxXQUFXLGdCQUFnQixpQkFBaUIsbUJBQW1CLDRCQUE0Qix5Q0FBeUMsd0NBQXdDLEdBQUcsMEJBQTBCLHVCQUF1QixpQkFBaUIsZUFBZSxtQkFBbUIsc0JBQXNCLGtCQUFrQixtQ0FBbUMsaUZBQWlGLHVDQUF1QyxxQ0FBcUMsK0JBQStCLDZCQUE2QiwyQkFBMkIsbUJBQW1CLEdBQUcsZ0NBQWdDLDRCQUE0QixHQUFHLHdCQUF3QixnQ0FBZ0MsaUJBQWlCLHVCQUF1QixpQkFBaUIseUJBQXlCLHFCQUFxQixxQkFBcUIsbUJBQW1CLG1DQUFtQyx3QkFBd0IsZUFBZSxxQkFBcUIsa0JBQWtCLHdCQUF3QiwyQkFBMkIsZ0NBQWdDLEdBQUcsMEJBQTBCLGtCQUFrQix5Q0FBeUMsZ0JBQWdCLHdCQUF3QixHQUFHLG1DQUFtQyx1QkFBdUIsZ0JBQWdCLEdBQUcsMkJBQTJCLG9CQUFvQixxQkFBcUIscUJBQXFCLEdBQUcsaUNBQWlDLDZCQUE2QixHQUFHLDJCQUEyQixrQkFBa0Isa0NBQWtDLG9CQUFvQixnQkFBZ0IsR0FBRywwQkFBMEIsb0JBQW9CLHNCQUFzQix5QkFBeUIsR0FBRyxnQ0FBZ0MsNEJBQTRCLEdBQUcsNEJBQTRCLGlCQUFpQix1QkFBdUIsb0JBQW9CLGlCQUFpQixHQUFHLHlCQUF5QixpQkFBaUIsR0FBRywwQkFBMEIsNkJBQTZCLG9CQUFvQixzQkFBc0IseUJBQXlCLEdBQUcsMEJBQTBCLGtCQUFrQiw0QkFBNEIsR0FBRyx5QkFBeUIsa0JBQWtCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLHNCQUFzQix1QkFBdUIsR0FBRyw2QkFBNkIsa0JBQWtCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLHNCQUFzQix1QkFBdUIsR0FBRywrQkFBK0IsbUJBQW1CLGtCQUFrQixHQUFHLG1DQUFtQyxtQkFBbUIsa0JBQWtCLEdBQUcsOEJBQThCLHFCQUFxQixvQkFBb0IsR0FBRyxrQ0FBa0MscUJBQXFCLG9CQUFvQixHQUFHLDhCQUE4QixvQkFBb0IscUJBQXFCLGtCQUFrQiwyQkFBMkIsbUNBQW1DLEdBQUcsaUNBQWlDLFVBQVUsa0JBQWtCLGlCQUFpQixLQUFLLFFBQVEsYUFBYSxpQkFBaUIsS0FBSyxHQUFHLHlCQUF5QixVQUFVLGtCQUFrQixpQkFBaUIsS0FBSyxRQUFRLGFBQWEsaUJBQWlCLEtBQUssR0FBRywwQkFBMEIsZ0NBQWdDLGlCQUFpQix1QkFBdUIsaUJBQWlCLHlCQUF5QixxQkFBcUIscUJBQXFCLG1CQUFtQixtQ0FBbUMsd0JBQXdCLEdBQUcsc0JBQXNCLGlCQUFpQix5QkFBeUIsNkJBQTZCLHVCQUF1QixHQUFHLCtCQUErQixnQ0FBZ0MsaUJBQWlCLHVCQUF1QixpQkFBaUIseUJBQXlCLHFCQUFxQixxQkFBcUIsbUJBQW1CLG1DQUFtQyx3QkFBd0IsZ0JBQWdCLEdBQUcsNkJBQTZCLHVCQUF1QixHQUFHLHdCQUF3Qix1QkFBdUIsa0JBQWtCLGtDQUFrQyxHQUFHLCtCQUErQixzQkFBc0IseUJBQXlCLEdBQUcsNEJBQTRCLGtCQUFrQix3QkFBd0IsNEJBQTRCLHdCQUF3QixHQUFHLCtCQUErQixrQkFBa0IsMkJBQTJCLEdBQUcsd0JBQXdCLGtCQUFrQixHQUFHLCtCQUErQixrQkFBa0IsMkJBQTJCLEdBQUcscUJBQXFCLG9CQUFvQixxQkFBcUIsbUJBQW1CLGtCQUFrQixHQUFHLDZCQUE2Qix3QkFBd0IsbUNBQW1DLHNCQUFzQixHQUFHLGlDQUFpQyxnQ0FBZ0MsaUJBQWlCLHVCQUF1QixpQkFBaUIseUJBQXlCLHFCQUFxQixxQkFBcUIsbUJBQW1CLG1DQUFtQyx3QkFBd0Isd0JBQXdCLHFCQUFxQix1QkFBdUIsR0FBRyx5QkFBeUIsa0JBQWtCLDJCQUEyQixHQUFHLHdCQUF3Qix1QkFBdUIsR0FBRywyQkFBMkIsdUJBQXVCLGlCQUFpQixlQUFlLG1CQUFtQixzQkFBc0Isa0JBQWtCLG1DQUFtQyxpRkFBaUYsdUNBQXVDLHFDQUFxQywrQkFBK0IsNkJBQTZCLDJCQUEyQixrQkFBa0IsR0FBRyxrQ0FBa0MsNEJBQTRCLEdBQUcsbUNBQW1DLGtCQUFrQixrQ0FBa0Msc0JBQXNCLHlCQUF5QixxQkFBcUIscUJBQXFCLG9CQUFvQixHQUFHLG9CQUFvQixrQkFBa0IsMkJBQTJCLEdBQUcscUJBQXFCLGtCQUFrQiwyQkFBMkIsR0FBRyxxQkFBcUIsa0JBQWtCLDJCQUEyQix3QkFBd0IsR0FBRywyQkFBMkIsc0JBQXNCLDZCQUE2QixHQUFHLDBCQUEwQixzQkFBc0IsNkJBQTZCLEdBQUcsaUJBQWlCLG9CQUFvQixHQUFHLHFDQUFxQyxnQ0FBZ0MsaUJBQWlCLHVCQUF1QixpQkFBaUIseUJBQXlCLHFCQUFxQixxQkFBcUIsbUJBQW1CLG1DQUFtQyx3QkFBd0Isd0JBQXdCLG1CQUFtQixHQUFHLDBCQUEwQix1QkFBdUIsR0FBRywwQkFBMEIsbUJBQW1CLGlCQUFpQixlQUFlLHFCQUFxQixHQUFHLGtCQUFrQixlQUFlLHNCQUFzQiwwQkFBMEIsNkNBQTZDLEdBQUcsK0JBQStCLG9CQUFvQixHQUFHLGtDQUFrQyxvQkFBb0IsR0FBRyw4QkFBOEIsb0JBQW9CLEdBQUcsdUJBQXVCLFFBQVEsOEJBQThCLEtBQUssR0FBRyw2QkFBNkIsbUJBQW1CLHdCQUF3QixnQkFBZ0IsR0FBRyw4QkFBOEIsbUJBQW1CLHdCQUF3QiwyQkFBMkIsR0FBRywrQkFBK0Isa0JBQWtCLGtDQUFrQyxHQUFHLGdDQUFnQyxnQ0FBZ0MsaUJBQWlCLHVCQUF1QixpQkFBaUIseUJBQXlCLHFCQUFxQixxQkFBcUIsbUJBQW1CLG1DQUFtQyx3QkFBd0Isd0JBQXdCLEdBQUcsa0NBQWtDLGtCQUFrQiwyQkFBMkIsa0NBQWtDLHdCQUF3QixHQUFHLHVCQUF1QixrQkFBa0Isb0JBQW9CLGdCQUFnQixtQkFBbUIsR0FBRyxpQ0FBaUMsa0JBQWtCLDJCQUEyQixtQkFBbUIsR0FBRyx3QkFBd0IsdUJBQXVCLGtCQUFrQiwyQkFBMkIsa0NBQWtDLEdBQUcsaUNBQWlDLG1CQUFtQixHQUFHLDhCQUE4QixtQkFBbUIsR0FBRyw2QkFBNkIsbUJBQW1CLEdBQUcsa0NBQWtDLGdDQUFnQyxpQkFBaUIsdUJBQXVCLGlCQUFpQix5QkFBeUIscUJBQXFCLHFCQUFxQixtQkFBbUIsbUNBQW1DLHdCQUF3QixvQkFBb0Isa0JBQWtCLHVCQUF1Qiw4QkFBOEIsdUJBQXVCLDJCQUEyQixrQ0FBa0MsZUFBZSxnQkFBZ0IseUJBQXlCLHVCQUF1QixHQUFHLHFCQUFxQixxQkFBcUIsb0JBQW9CLEdBQUcscUJBQXFCLGtCQUFrQixtQ0FBbUMsR0FBRyxzQkFBc0IsNkJBQTZCLG9CQUFvQixHQUFHLHFDQUFxQyxrQkFBa0IsR0FBRywrQkFBK0Isb0JBQW9CLEdBQUcsdUJBQXVCLG9CQUFvQixHQUFHLHFDQUFxQyw2QkFBNkIsb0JBQW9CLEdBQUcsaUNBQWlDLG9CQUFvQixHQUFHLDRDQUE0QyxnQ0FBZ0MsaUJBQWlCLHVCQUF1QixpQkFBaUIseUJBQXlCLHFCQUFxQixxQkFBcUIsbUJBQW1CLG1DQUFtQyx3QkFBd0Isb0JBQW9CLGtCQUFrQix1QkFBdUIsOEJBQThCLDJCQUEyQixHQUFHLCtCQUErQixrQkFBa0IsMkJBQTJCLGtDQUFrQyx3QkFBd0Isb0JBQW9CLEdBQUcsOEJBQThCLGtCQUFrQiw0QkFBNEIsb0JBQW9CLHVCQUF1QixzQkFBc0IsbUJBQW1CLEdBQUcsb0NBQW9DLGdDQUFnQyxpQkFBaUIsdUJBQXVCLGlCQUFpQix5QkFBeUIscUJBQXFCLHFCQUFxQixtQkFBbUIsbUNBQW1DLHdCQUF3QixnQ0FBZ0MsdUJBQXVCLGlCQUFpQixnQkFBZ0IscUJBQXFCLG9CQUFvQix3QkFBd0IsZUFBZSxxQkFBcUIsa0JBQWtCLDJCQUEyQix3QkFBd0Isc0JBQXNCLEdBQUcsb0JBQW9CLHFCQUFxQixzQkFBc0IsdUJBQXVCLHNCQUFzQixHQUFHLDhCQUE4QixxQkFBcUIsc0JBQXNCLEdBQUcsNkJBQTZCLGdDQUFnQyxpQkFBaUIsdUJBQXVCLGlCQUFpQix5QkFBeUIscUJBQXFCLHFCQUFxQixtQkFBbUIsbUNBQW1DLHdCQUF3Qix3QkFBd0IscUJBQXFCLDJCQUEyQixrQkFBa0Isa0NBQWtDLEdBQUcsb0JBQW9CLGtCQUFrQixrQ0FBa0MscUJBQXFCLEdBQUcsd0JBQXdCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLDRCQUE0Qix1QkFBdUIsOEJBQThCLG1CQUFtQix1QkFBdUIsdUJBQXVCLEdBQUcsOEJBQThCLGdDQUFnQyxHQUFHLHlCQUF5QixrQkFBa0IsMkJBQTJCLG9CQUFvQiwyR0FBMkcsR0FBRyw4QkFBOEIsdUJBQXVCLG9CQUFvQixtQkFBbUIseUJBQXlCLEdBQUcsMkNBQTJDLG1CQUFtQixHQUFHLDBDQUEwQyxtQkFBbUIsR0FBRywyQkFBMkIsdUJBQXVCLGlCQUFpQixlQUFlLG1CQUFtQixzQkFBc0Isa0JBQWtCLG1DQUFtQyxpRkFBaUYsdUNBQXVDLHFDQUFxQywrQkFBK0IsNkJBQTZCLDJCQUEyQixrQkFBa0IsdUJBQXVCLGtCQUFrQixtQkFBbUIsbUJBQW1CLGVBQWUsR0FBRywyQ0FBMkMsOENBQThDLEdBQUcsa0NBQWtDLDRCQUE0QixHQUFHLHlDQUF5QyxxQkFBcUIsR0FBRyxnQ0FBZ0MsMkJBQTJCLG9CQUFvQixrQkFBa0IsR0FBRyxzQ0FBc0MsbUJBQW1CLEdBQUcsc0JBQXNCLFdBQVcsWUFBWSxnQkFBZ0IsR0FBRyxxQkFBcUIsbUJBQW1CLEdBQUcsNkNBQTZDLGtCQUFrQix5Q0FBeUMsa0NBQWtDLGdCQUFnQix3QkFBd0IsR0FBRyw0QkFBNEIsb0JBQW9CLHFCQUFxQixHQUFHLGtDQUFrQyw0QkFBNEIsR0FBRyw4QkFBOEIsZ0NBQWdDLG9CQUFvQixLQUFLLGlDQUFpQyxzQkFBc0IsS0FBSyxvQ0FBb0MscUJBQXFCLGtCQUFrQixLQUFLLEdBQUcsOEJBQThCLHNCQUFzQix5QkFBeUIsd0JBQXdCLEtBQUssOEJBQThCLHFDQUFxQyxLQUFLLGlDQUFpQyx5QkFBeUIsa0JBQWtCLHVCQUF1QixLQUFLLDRCQUE0Qix5QkFBeUIsS0FBSyw0QkFBNEIsb0JBQW9CLEtBQUssb0NBQW9DLHFCQUFxQixrQkFBa0IsS0FBSyxHQUFHLDZCQUE2QixpQ0FBaUMsMEJBQTBCLEtBQUssZ0NBQWdDLDZCQUE2QixLQUFLLHNCQUFzQiw2QkFBNkIsS0FBSywrQkFBK0IsMEJBQTBCLEtBQUssMEJBQTBCLHlCQUF5QixLQUFLLDRCQUE0QixzQkFBc0IsS0FBSyw2QkFBNkIsc0JBQXNCLHdCQUF3QixLQUFLLG9DQUFvQyxrQkFBa0IsS0FBSyxHQUFHLDZCQUE2Qix5QkFBeUIscUNBQXFDLHFDQUFxQyxzQkFBc0IsS0FBSyxrQ0FBa0Msb0JBQW9CLEtBQUssb0NBQW9DLDBCQUEwQixLQUFLLEdBQUcsNkJBQTZCLGlDQUFpQyw2QkFBNkIsS0FBSyxnQ0FBZ0MsMEJBQTBCLEtBQUssaUNBQWlDLDZCQUE2QixLQUFLLHVDQUF1QyxzQkFBc0IsMEJBQTBCLEtBQUssK0JBQStCLDZCQUE2QixLQUFLLHlCQUF5QiwwQkFBMEIsOEJBQThCLEtBQUssbUNBQW1DLHlCQUF5QixLQUFLLDRCQUE0Qix3QkFBd0IscUJBQXFCLEtBQUssb0NBQW9DLDZCQUE2QixLQUFLLDJCQUEyQix5QkFBeUIsMEJBQTBCLEtBQUssK0JBQStCLHlCQUF5QiwwQkFBMEIsS0FBSyw0QkFBNEIsc0JBQXNCLEtBQUssdUJBQXVCLG9CQUFvQixtQkFBbUIsbUJBQW1CLEtBQUssb0NBQW9DLGlCQUFpQixLQUFLLEdBQUcsNkJBQTZCLHFDQUFxQyxzQkFBc0IsdUJBQXVCLEtBQUssMkJBQTJCLHNCQUFzQixLQUFLLDZCQUE2QixzQkFBc0IsS0FBSyxxQ0FBcUMsa0JBQWtCLEtBQUssNkJBQTZCLHVCQUF1QixLQUFLLEdBQUcsOEJBQThCLDZCQUE2Qix5QkFBeUIscUJBQXFCLHVCQUF1QixLQUFLLEdBQUcsOEJBQThCLDZCQUE2QixxQkFBcUIsS0FBSyxHQUFHLE9BQU8sOEZBQThGLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxZQUFZLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxZQUFZLFVBQVUsTUFBTSxNQUFNLFlBQVksVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sWUFBWSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sWUFBWSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxZQUFZLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFlBQVksVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxZQUFZLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFlBQVksTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxZQUFZLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxZQUFZLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sYUFBYSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxXQUFXLFdBQVcsS0FBSyxNQUFNLGFBQWEsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsYUFBYSxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLFVBQVUsS0FBSyxNQUFNLGFBQWEsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sVUFBVSxLQUFLLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFVB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QUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsY0FBYztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsbUJBQW1CO0FBQ3BEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0Esa0JBQWtCOztBQUVsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0JBQWdCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7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QVQ2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUF0QkYsc0JBQXNCO0FBQUE7QUFBQTtBQUFBLEdBQTVCOztBQVlBLElBQU1LLFVBQVU7QUFBQSx1TEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDWEwsc0JBQXNCLEVBRFg7O0FBQUE7QUFBQTtBQUFBLG1CQUVYTixvQkFBb0IsRUFGVDs7QUFBQTtBQUdqQnhQLFlBQUFBLGdHQUFBOztBQUhpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFWbVEsVUFBVTtBQUFBO0FBQUE7QUFBQSxHQUFoQjs7QUFNQUEsVUFBVTtBQUNWWiw4RUFBYyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL2FwcENvbnRyb2wvYmFja2Ryb3BDaGFuZ2VJbnRlcnZhbC5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL2FwcENvbnRyb2wvY2hhbXBpb25Nb2RhbENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9hcHBDb250cm9sL2NoYW1waW9uc1BhZ2VDb250cm9sbGVyLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvYXBwQ29udHJvbC9maWx0ZXJDaGFtcGlvbnMuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9hcHBDb250cm9sL3NlYXJjaGJhckNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9hcHBDb250cm9sL3NvcnRDaGFtcGlvbnMuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9jaGFtcGlvbkRhdGEvY2hhbXBpb25EZXRhaWxzLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvY2hhbXBpb25EYXRhL2NoYW1waW9uU3RhdHMuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9jaGFtcGlvbkRhdGEvZ2V0QWxsQ2hhbXBpb25zLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvY2hhbXBpb25EYXRhL2dldExhdGVzdFZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9jaGFtcGlvbkRhdGEvaXRlbUluZm8uanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9oZWxwZXJzL2VsZW1lbnRDcmVhdGlvbi5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL3RlbXBsYXRlcy9jaGFtcGlvbkRldGFpbHNNb2RhbC5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL3RlbXBsYXRlcy9jaGFtcGlvblNraW5zTW9kYWwuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy90ZW1wbGF0ZXMvY2hhbXBpb25TdGF0c01vZGFsLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvdGVtcGxhdGVzL3JlbmRlckhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9zdHlsZXNoZWV0cy9mcm9udHBhZ2Uuc2NzcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL3N0eWxlc2hlZXRzL21vZGFscy5zY3NzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL3N0eWxlc2hlZXRzL2Zyb250cGFnZS5zY3NzPzQ3MjYiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9zdHlsZXNoZWV0cy9tb2RhbHMuc2Nzcz9jZjgzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8vaG9tZS9kYXlvL0Rlc2t0b3Avb2RpblByb2plY3QvTGVhZ3VlLUFwcC9mcm9udGVuZC9zcmMvYXNzZXRzL2ltYWdlc3xzeW5jfG5vbnJlY3Vyc2l2ZXwvXFwuKHBuZ3xqcGUiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xlYWd1ZS1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2xlYWd1ZS1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9sZWFndWUtYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGxldCBpbmRleCA9IDE7XG5cbiAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGNvbnN0IGJhY2tkcm9wcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iYWNrZHJvcC1pbWcnKTtcbiAgICBjb25zdCBjdXJyZW50QmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2Ryb3AtaW1nLnNob3duJyk7XG4gICAgaW5kZXggJT0gYmFja2Ryb3BzLmxlbmd0aDtcbiAgICBjdXJyZW50QmFja2Ryb3AuY2xhc3NOYW1lID0gJ2JhY2tkcm9wLWltZyBoaWRkZW4nO1xuICAgIGJhY2tkcm9wc1tpbmRleF0uY2xhc3NOYW1lID0gJ2JhY2tkcm9wLWltZyBzaG93bic7XG4gICAgaW5kZXggKz0gMTtcbiAgfSwgNzAwMCk7XG59O1xuIiwiY29uc3QgQ2hhbXBpb25Nb2RhbENvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBjb25zdCB0b2dnbGVBY3RpdmVBYmlsaXR5ID0gKGNsaWNrZWRBYmlsaXR5SWQpID0+IHtcbiAgICBjb25zdCBhYmlsaXR5SW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNwZWxsLWltZycpO1xuICAgIGNvbnN0IGFiaWxpdHlJbmZvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hYmlsaXR5LWluZm8nKTtcblxuICAgIGFiaWxpdHlJbWFnZXMuZm9yRWFjaCgoaW1nKSA9PiB7XG4gICAgICBpbWcuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZCcpO1xuICAgIH0pO1xuICAgIGFiaWxpdHlJbmZvcy5mb3JFYWNoKChpbmZvKSA9PiB7XG4gICAgICBpbmZvLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY2xpY2tlZEltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Y2xpY2tlZEFiaWxpdHlJZH0taW1nYCk7XG4gICAgY2xpY2tlZEltYWdlLmNsYXNzTmFtZSA9ICdzcGVsbC1pbWcgY2xpY2tlZCc7XG5cbiAgICBjb25zdCBhY3RpdmVBYmlsaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Y2xpY2tlZEFiaWxpdHlJZH0tYWJpbGl0eWApO1xuICAgIGFjdGl2ZUFiaWxpdHkuY2xhc3NOYW1lID0gJ2FiaWxpdHktaW5mbyBhY3RpdmUnO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZU1vZGFsVGVtcGxhdGUgPSAoY2xpY2tlZE1vZGFsTmF2TGluaykgPT4ge1xuICAgIGNvbnN0IHRlbXBsYXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC10ZW1wbGF0ZScpO1xuICAgIHRlbXBsYXRlcy5mb3JFYWNoKCh0ZW1wbGF0ZSkgPT4ge1xuICAgICAgY29uc3QgdGVtcGxhdGVOYW1lID0gdGVtcGxhdGUuaWQuc3Vic3RyaW5nKDAsIHRlbXBsYXRlLmlkLmluZGV4T2YoJy0nKSk7XG4gICAgICBpZiAodGVtcGxhdGVOYW1lID09PSBjbGlja2VkTW9kYWxOYXZMaW5rLmlkKSB7XG4gICAgICAgIGNvbnN0IGNob3NlblRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgICAgIGNob3NlblRlbXBsYXRlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgaGlkZGVuVGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICAgICAgaGlkZGVuVGVtcGxhdGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBkaXNwYXlJdGVtRGV0YWlscyA9IChob3ZlcmVkSXRlbUltYWdlKSA9PiB7XG4gICAgY29uc3QgaXRlbURldGFpbHMgPSBob3ZlcmVkSXRlbUltYWdlLm5leHRFbGVtZW50U2libGluZztcbiAgICBpdGVtRGV0YWlscy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICB9O1xuXG4gIGNvbnN0IGhpZGVJdGVtRGV0YWlscyA9ICh1bmhvdmVyZWRJdGVtSW1hZ2UpID0+IHtcbiAgICBjb25zdCBpdGVtRGV0YWlscyA9IHVuaG92ZXJlZEl0ZW1JbWFnZS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgaXRlbURldGFpbHMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfTtcblxuICBjb25zdCB0b2dnbGVTa2luSW1hZ2VzID0gKGFycm93Q2xhc3NMaXN0KSA9PiB7XG4gICAgY29uc3Qgc2tpbkltYWdlc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5za2luLWltYWdlcy1jb250YWluZXInKTtcbiAgICBjb25zdCBjdXJyZW50U2hvd25JbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5za2luLWltYWdlLWNvbnRhaW5lci5zaG93bicpO1xuICAgIGNvbnN0IHNraW5OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNraW4tbmFtZScpO1xuXG4gICAgY3VycmVudFNob3duSW1hZ2UuY2xhc3NOYW1lID0gJ3NraW4taW1hZ2UtY29udGFpbmVyJztcbiAgICBjb25zdCBmaXJzdEltYWdlID0gc2tpbkltYWdlc0NvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICBjb25zdCBsYXN0SW1hZ2UgPSBza2luSW1hZ2VzQ29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQ7XG5cbiAgICBpZiAoZmlyc3RJbWFnZSA9PT0gY3VycmVudFNob3duSW1hZ2UgJiYgYXJyb3dDbGFzc0xpc3QuaW5jbHVkZXMoJ2xlZnQtYXJyb3cnKSkge1xuICAgICAgbGFzdEltYWdlLmNsYXNzTmFtZSA9ICdza2luLWltYWdlLWNvbnRhaW5lciBzaG93bic7XG4gICAgICBza2luTmFtZS50ZXh0Q29udGVudCA9IGxhc3RJbWFnZS5pZDtcbiAgICB9IGVsc2UgaWYgKGxhc3RJbWFnZSA9PT0gY3VycmVudFNob3duSW1hZ2UgJiYgYXJyb3dDbGFzc0xpc3QuaW5jbHVkZXMoJ3JpZ2h0LWFycm93JykpIHtcbiAgICAgIGZpcnN0SW1hZ2UuY2xhc3NOYW1lID0gJ3NraW4taW1hZ2UtY29udGFpbmVyIHNob3duJztcbiAgICAgIHNraW5OYW1lLnRleHRDb250ZW50ID0gZmlyc3RJbWFnZS5pZDtcbiAgICB9IGVsc2UgaWYgKGFycm93Q2xhc3NMaXN0LmluY2x1ZGVzKCdyaWdodC1hcnJvdycpKSB7XG4gICAgICBjdXJyZW50U2hvd25JbWFnZS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NOYW1lID0gJ3NraW4taW1hZ2UtY29udGFpbmVyIHNob3duJztcbiAgICAgIHNraW5OYW1lLnRleHRDb250ZW50ID0gY3VycmVudFNob3duSW1hZ2UubmV4dEVsZW1lbnRTaWJsaW5nLmlkO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50U2hvd25JbWFnZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTmFtZSA9ICdza2luLWltYWdlLWNvbnRhaW5lciBzaG93bic7XG4gICAgICBza2luTmFtZS50ZXh0Q29udGVudCA9IGN1cnJlbnRTaG93bkltYWdlLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaWQ7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNsZWFyTWFpbk1vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1jb250YWluZXInKTtcbiAgICBjb25zdCBjaGFtcGlvbk5hbWUgPSBtYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbi1uYW1lJyk7XG4gICAgY29uc3QgY2hhbXBpb25UaXRsZSA9IG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLXRpdGxlJyk7XG4gICAgY29uc3QgY2hhbXBpb25Sb2xlcyA9IG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLXJvbGVzJyk7XG4gICAgY29uc3QgY2hhbXBpb25Mb3JlID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tbG9yZScpO1xuICAgIGNvbnN0IGFiaWxpdHlEZXRhaWxzID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuYWJpbGl0eS1kZXRhaWxzJyk7XG4gICAgY29uc3QgY2hhbXBpb25UaXBzID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tdGlwcycpO1xuXG4gICAgY29uc3QgbWFpbk1vZGFsSGVhZGVyID0gW2NoYW1waW9uTmFtZSwgY2hhbXBpb25UaXRsZSwgY2hhbXBpb25Sb2xlc107XG4gICAgbWFpbk1vZGFsSGVhZGVyLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gZWxlbWVudDtcbiAgICAgIGN1cnJlbnRFbGVtZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgfSk7XG5cbiAgICBjaGFtcGlvbkxvcmUucmVtb3ZlKCk7XG4gICAgYWJpbGl0eURldGFpbHMucmVtb3ZlKCk7XG4gICAgY2hhbXBpb25UaXBzLnJlbW92ZSgpO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyU3RhdHNNb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCBzdGF0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGF0cy1jb250YWluZXInKTtcbiAgICBjb25zdCBjaGFtcGlvbk5hbWUgPSBzdGF0c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tbmFtZScpO1xuICAgIGNvbnN0IGNoYW1waW9uVGl0bGUgPSBzdGF0c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tdGl0bGUnKTtcbiAgICBjb25zdCBjaGFtcGlvblN0YXRzT3ZlcnZpZXcgPSBzdGF0c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tc3RhdHMtb3ZlcnZpZXcnKTtcbiAgICBjb25zdCBhbGxkYW1hZ2VTdGF0cyA9IHN0YXRzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYW1hZ2Utc3RhdHMnKTtcbiAgICBjb25zdCBpdGVtU2V0c0NvbnRhaW5lciA9IHN0YXRzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLXNldHMtY29udGFpbmVyJyk7XG4gICAgY29uc3QgYmVzdE1hdGNodXBzID0gc3RhdHNDb250YWluZXIucXVlcnlTZWxlY3RvcignLmJlc3QtbWF0Y2h1cHMnKTtcbiAgICBjb25zdCB3b3JzdE1hdGNodXBzID0gc3RhdHNDb250YWluZXIucXVlcnlTZWxlY3RvcignLndvcnN0LW1hdGNodXBzJyk7XG5cbiAgICBjb25zdCBzdGF0c01vZGFsSGVhZGVyID0gW2NoYW1waW9uTmFtZSwgY2hhbXBpb25UaXRsZSwgY2hhbXBpb25TdGF0c092ZXJ2aWV3XTtcbiAgICBzdGF0c01vZGFsSGVhZGVyLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gZWxlbWVudDtcbiAgICAgIGN1cnJlbnRFbGVtZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgfSk7XG4gICAgYWxsZGFtYWdlU3RhdHMuZm9yRWFjaCgoZGFtYWdlU3RhdCkgPT4ge1xuICAgICAgY29uc3QgZGFtYWdlU3RhdEVsZW1lbnQgPSBkYW1hZ2VTdGF0O1xuICAgICAgZGFtYWdlU3RhdEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfSk7XG4gICAgY29uc3Qgc3RhdHNNb2RhbENvbnRlbnQgPSBbaXRlbVNldHNDb250YWluZXIsIGJlc3RNYXRjaHVwcywgd29yc3RNYXRjaHVwc107XG4gICAgc3RhdHNNb2RhbENvbnRlbnQuZm9yRWFjaCgoY29udGVudCkgPT4ge1xuICAgICAgY29uc3QgY29udGVudEVsZW1lbnQgPSBjb250ZW50O1xuICAgICAgY29udGVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgY2xlYXJTa2luc01vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IHNraW5JbWFnZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2tpbi1pbWFnZXMtY29udGFpbmVyJyk7XG4gICAgc2tpbkltYWdlc0NvbnRhaW5lci5yZW1vdmUoKTtcbiAgfTtcblxuICBjb25zdCBjbG9zZUNoYW1waW9uTW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tY29udGFpbmVyJyk7XG4gICAgY29uc3Qgc3RhdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhdHMtY29udGFpbmVyJyk7XG4gICAgY29uc3Qgc2tpbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2tpbnMtY29udGFpbmVyJyk7XG5cbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIG1haW5Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgc3RhdHNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBza2luc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9O1xuXG4gIGNvbnN0IG1vZGFsQ2xpY2tFdmVudHMgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuXG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdzcGVsbC1pbWcnKSB7XG4gICAgICBjb25zdCBkYXNoSW5kZXggPSBldmVudC50YXJnZXQuaWQuaW5kZXhPZignLScpO1xuICAgICAgY29uc3QgYWJpbGl0eUlkID0gZXZlbnQudGFyZ2V0LmlkLnNsaWNlKDAsIGRhc2hJbmRleCk7XG4gICAgICB0b2dnbGVBY3RpdmVBYmlsaXR5KGFiaWxpdHlJZCk7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdtb2RhbC1uYXYtbGluaycpIHtcbiAgICAgIGNoYW5nZU1vZGFsVGVtcGxhdGUoZXZlbnQudGFyZ2V0KTtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuZnJvbShldmVudC50YXJnZXQuY2xhc3NMaXN0KS5pbmNsdWRlcygnaW1nLXNjcm9sbC1hcnJvdycpKSB7XG4gICAgICB0b2dnbGVTa2luSW1hZ2VzKEFycmF5LmZyb20oZXZlbnQudGFyZ2V0LmNsYXNzTGlzdCkpO1xuICAgIH1cblxuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnY2xvc2UtbW9kYWwtYnRuJykge1xuICAgICAgbW9kYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtb2RhbENsaWNrRXZlbnRzKTtcbiAgICAgIGNsb3NlQ2hhbXBpb25Nb2RhbCgpO1xuICAgICAgY2xlYXJNYWluTW9kYWwoKTtcbiAgICAgIGNsZWFyU3RhdHNNb2RhbCgpO1xuICAgICAgY2xlYXJTa2luc01vZGFsKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG1vZGFsTW91c2VvdmVyRXZlbnRzID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdpdGVtLWltZydcbiAgICAgIHx8IGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdjb21wb25lbnQtaXRlbS1pbWcnKSB7XG4gICAgICBkaXNwYXlJdGVtRGV0YWlscyhldmVudC50YXJnZXQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBtb2RhbE1vdXNlb3V0RXZlbnRzID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdpdGVtLWltZydcbiAgICB8fCBldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnY29tcG9uZW50LWl0ZW0taW1nJykge1xuICAgICAgaWYgKCFldmVudC50YXJnZXQpIHJldHVybjtcblxuICAgICAgbGV0IHsgcmVsYXRlZFRhcmdldCB9ID0gZXZlbnQ7XG5cbiAgICAgIHdoaWxlIChyZWxhdGVkVGFyZ2V0KSB7XG4gICAgICAgIGlmIChyZWxhdGVkVGFyZ2V0ID09PSBldmVudC50YXJnZXQpIHJldHVybjtcbiAgICAgICAgcmVsYXRlZFRhcmdldCA9IHJlbGF0ZWRUYXJnZXQucGFyZW50Tm9kZTtcbiAgICAgIH1cblxuICAgICAgaGlkZUl0ZW1EZXRhaWxzKGV2ZW50LnRhcmdldCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG1vZGFsQXJyb3dFdmVudHMgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBza2luc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNza2lucy1jb250YWluZXInKTtcbiAgICBpZiAoc2tpbnNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJykge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93UmlnaHQnKSB7XG4gICAgICAgIGNvbnN0IHJpZ2h0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmlnaHQtYXJyb3cnKTtcbiAgICAgICAgdG9nZ2xlU2tpbkltYWdlcyhBcnJheS5mcm9tKHJpZ2h0QXJyb3cuY2xhc3NMaXN0KSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudC5rZXkgPT09ICdBcnJvd0xlZnQnKSB7XG4gICAgICAgIGNvbnN0IGxlZnRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0LWFycm93Jyk7XG4gICAgICAgIHRvZ2dsZVNraW5JbWFnZXMoQXJyYXkuZnJvbShsZWZ0QXJyb3cuY2xhc3NMaXN0KSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG1vZGFsQ2hhbmdlTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG5cbiAgICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1vZGFsQ2xpY2tFdmVudHMpO1xuICAgIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIG1vZGFsTW91c2VvdmVyRXZlbnRzKTtcbiAgICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIG1vZGFsTW91c2VvdXRFdmVudHMpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBtb2RhbEFycm93RXZlbnRzKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG1vZGFsQ2hhbmdlTGlzdGVuZXJzLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhbXBpb25Nb2RhbENvbnRyb2xsZXI7XG4iLCJpbXBvcnQgZ2V0Q2hhbXBpb25EZXRhaWxzIGZyb20gJy4uL2NoYW1waW9uRGF0YS9jaGFtcGlvbkRldGFpbHMnO1xuaW1wb3J0IGdldENoYW1waW9uU3RhdHMgZnJvbSAnLi4vY2hhbXBpb25EYXRhL2NoYW1waW9uU3RhdHMnO1xuaW1wb3J0IGNoYW1waW9uRGV0YWlsc01vZGFsIGZyb20gJy4uL3RlbXBsYXRlcy9jaGFtcGlvbkRldGFpbHNNb2RhbCc7XG5pbXBvcnQgY2hhbXBpb25TdGF0c01vZGFsIGZyb20gJy4uL3RlbXBsYXRlcy9jaGFtcGlvblN0YXRzTW9kYWwnO1xuaW1wb3J0IGNoYW1waW9uU2tpbnNNb2RhbCBmcm9tICcuLi90ZW1wbGF0ZXMvY2hhbXBpb25Ta2luc01vZGFsJztcbmltcG9ydCBDaGFtcGlvbk1vZGFsQ29udHJvbGxlciBmcm9tICcuL2NoYW1waW9uTW9kYWxDb250cm9sbGVyJztcbmltcG9ydCBDaGFtcGlvbkZpbHRlciBmcm9tICcuL2ZpbHRlckNoYW1waW9ucyc7XG5pbXBvcnQgU29ydENoYW1waW9ucyBmcm9tICcuL3NvcnRDaGFtcGlvbnMnO1xuaW1wb3J0IHsgZ2V0QWxsQ2hhbXBpb25EZXRhaWxzLCBnZXRBbGxDaGFtcGlvblN0YXRzIH0gZnJvbSAnLi4vY2hhbXBpb25EYXRhL2dldEFsbENoYW1waW9ucyc7XG5pbXBvcnQgZ2V0TGF0ZXN0VmVyc2lvbiBmcm9tICcuLi9jaGFtcGlvbkRhdGEvZ2V0TGF0ZXN0VmVyc2lvbic7XG5cbmNvbnN0IENoYW1waW9uc1BhZ2VDb250cm9sbGVyID0gKCgpID0+IHtcbiAgY29uc3QgZGlzcGxheURyb3Bkb3duT3B0aW9ucyA9IChkcm9wZG93bk9wdGlvbnMpID0+IHtcbiAgICBjb25zdCBhbGxEcm9wZG93bk9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd24tb3B0aW9ucycpO1xuICAgIGFsbERyb3Bkb3duT3B0aW9ucy5mb3JFYWNoKChvcHRpb25zKSA9PiB7XG4gICAgICBjb25zdCBvcHRpb25zU3R5bGUgPSBvcHRpb25zLnN0eWxlO1xuICAgICAgb3B0aW9uc1N0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7XG5cbiAgICBjb25zdCBkcm9wZG93bk9wdGlvbnNTdHlsZSA9IGRyb3Bkb3duT3B0aW9ucy5zdHlsZTtcbiAgICBkcm9wZG93bk9wdGlvbnNTdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICB9O1xuXG4gIGNvbnN0IGhpZGVEcm9wZG93bk9wdGlvbnMgPSAoZHJvcGRvd25PcHRpb25zKSA9PiB7XG4gICAgY29uc3QgZHJvcGRvd25PcHRpb25zU3R5bGUgPSBkcm9wZG93bk9wdGlvbnMuc3R5bGU7XG4gICAgZHJvcGRvd25PcHRpb25zU3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfTtcblxuICBjb25zdCBkcm9wZG93bk9wdGlvbnNUb2dnbGUgPSAoZHJvcGRvd25CdG4pID0+IHtcbiAgICBjb25zdCBkcm9wZG93bk9wdGlvbnMgPSBkcm9wZG93bkJ0bi5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bi1vcHRpb25zJyk7XG4gICAgaWYgKGRyb3Bkb3duT3B0aW9ucy5zdHlsZS5kaXNwbGF5ICE9PSAnZmxleCcpIHtcbiAgICAgIGRpc3BsYXlEcm9wZG93bk9wdGlvbnMoZHJvcGRvd25PcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGlkZURyb3Bkb3duT3B0aW9ucyhkcm9wZG93bk9wdGlvbnMpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkaXNwbGF5Q2hhbXBpb25Nb2RhbCA9IGFzeW5jIChjaGFtcGlvbklkKSA9PiB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgICBjb25zdCBsYXRlc3RWZXJzaW9uID0gYXdhaXQgZ2V0TGF0ZXN0VmVyc2lvbigpO1xuICAgIGNvbnN0IGNoYW1waW9uRGV0YWlscyA9IGF3YWl0IGdldENoYW1waW9uRGV0YWlscyhjaGFtcGlvbklkLCBsYXRlc3RWZXJzaW9uKTtcblxuICAgIGNvbnN0IGNoYW1waW9uU3RhdHMgPSBhd2FpdCBnZXRDaGFtcGlvblN0YXRzKGNoYW1waW9uSWQpO1xuXG4gICAgY29uc3Qgc2tpbkltYWdlc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5za2luLWltYWdlcy1jb250YWluZXInKTtcbiAgICAvKlxuICAgICAgcHVycG9zZSBvZiB0aGUgaWYgc3RhdGVtZW50IGlzIHRvIHByZXZlbnQgc3BhbSBjbGlja3MgZnJvbSByZW5kZXJpbmdcbiAgICAgIGR1cGxpY2F0ZSBjb250ZW50IG9udG8gdGhlIGNoYW1waW9uIG1vZGFsLlxuICAgICovXG4gICAgaWYgKCFza2luSW1hZ2VzQ29udGFpbmVyKSB7XG4gICAgICBjaGFtcGlvbkRldGFpbHNNb2RhbChjaGFtcGlvbkRldGFpbHMpO1xuICAgICAgY2hhbXBpb25TdGF0c01vZGFsKGNoYW1waW9uRGV0YWlscywgY2hhbXBpb25TdGF0cywgbGF0ZXN0VmVyc2lvbik7XG4gICAgICBjaGFtcGlvblNraW5zTW9kYWwoY2hhbXBpb25EZXRhaWxzKTtcbiAgICB9XG5cbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBDaGFtcGlvbk1vZGFsQ29udHJvbGxlci5tb2RhbENoYW5nZUxpc3RlbmVycygpO1xuICB9O1xuXG4gIGNvbnN0IHNlbGVjdExhbmVGaWx0ZXJPcHRpb24gPSAoY2xpY2tlZExhbmVPcHRpb24pID0+IHtcbiAgICBjb25zdCBjaGFtcGlvbnNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW1waW9ucy1zZWN0aW9uJyk7XG4gICAgY29uc3QgYWN0aXZlTGFuZU9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItb3B0aW9uLmFjdGl2ZScpO1xuICAgIGlmIChjbGlja2VkTGFuZU9wdGlvbiA9PT0gYWN0aXZlTGFuZU9wdGlvbiB8fCBjaGFtcGlvbnNTZWN0aW9uLnN0eWxlLnZpc2liaWxpdHkgPT09ICdoaWRkZW4nKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGFjdGl2ZUxhbmVPcHRpb24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgY2xpY2tlZExhbmVPcHRpb24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBjaGVja0xhbmVGaWx0ZXJPcHRpb24gPSBhc3luYyAoYWxsQ2hhbXBpb25TdGF0cykgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZUxhbmVPcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLW9wdGlvbi5hY3RpdmUnKTtcbiAgICBjb25zdCBsYW5lTmFtZSA9IGFjdGl2ZUxhbmVPcHRpb24uY2xhc3NMaXN0WzBdO1xuICAgIGF3YWl0IENoYW1waW9uRmlsdGVyLmZpbHRlckJ5TGFuZShsYW5lTmFtZSwgYWxsQ2hhbXBpb25TdGF0cyk7XG4gIH07XG5cbiAgY29uc3QgY2hlY2tTb3J0aW5nT3B0aW9uID0gKGFsbENoYW1waW9uU3RhdHMpID0+IHtcbiAgICBjb25zdCBhY3RpdmVTb3J0aW5nT3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNvcnQuYWN0aXZlJyk7XG4gICAgaWYgKGFjdGl2ZVNvcnRpbmdPcHRpb24gPT09IG51bGwpIHtcbiAgICAgIFNvcnRDaGFtcGlvbnMuc29ydEJ5RGVmYXVsdE9yZGVyKGFsbENoYW1waW9uU3RhdHMpO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuZnJvbShhY3RpdmVTb3J0aW5nT3B0aW9uLmNsYXNzTGlzdCkuaW5jbHVkZXMoJ3dpbnJhdGUnKSkge1xuICAgICAgU29ydENoYW1waW9ucy5zb3J0Q2hhbXBpb25zQnlXaW5yYXRlKGFsbENoYW1waW9uU3RhdHMpO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuZnJvbShhY3RpdmVTb3J0aW5nT3B0aW9uLmNsYXNzTGlzdCkuaW5jbHVkZXMoJ3BpY2tyYXRlJykpIHtcbiAgICAgIFNvcnRDaGFtcGlvbnMuc29ydENoYW1waW9uc0J5UGlja3JhdGUoYWxsQ2hhbXBpb25TdGF0cyk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5mcm9tKGFjdGl2ZVNvcnRpbmdPcHRpb24uY2xhc3NMaXN0KS5pbmNsdWRlcygnZGFtYWdlJykpIHtcbiAgICAgIFNvcnRDaGFtcGlvbnMuc29ydENoYW1waW9uc0J5RGFtYWdlRG9uZShhbGxDaGFtcGlvblN0YXRzKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2hlY2tBY3RpdmVSb2xlT3B0aW9ucyA9IChhbGxDaGFtcGlvbkRldGFpbHMpID0+IHtcbiAgICBjb25zdCBhY3RpdmVSb2xlT3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yb2xlLmFjdGl2ZScpO1xuICAgIGlmIChhY3RpdmVSb2xlT3B0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgYWN0aXZlUm9sZXMgPSBBcnJheS5mcm9tKGFjdGl2ZVJvbGVPcHRpb25zKS5tYXAoKGFjdGl2ZVJvbGVPcHRpb24pID0+IHtcbiAgICAgIGNvbnN0IGFjdGl2ZVJvbGUgPSBhY3RpdmVSb2xlT3B0aW9uLmNsYXNzTGlzdFswXTtcbiAgICAgIHJldHVybiBhY3RpdmVSb2xlO1xuICAgIH0pO1xuICAgIENoYW1waW9uRmlsdGVyLmZpbHRlckJ5Um9sZShhY3RpdmVSb2xlcywgYWxsQ2hhbXBpb25EZXRhaWxzKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBjaGVja0FjdGl2ZURpZmZpY3VsdHlPcHRpb25zID0gKGFsbENoYW1waW9uRGV0YWlscykgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZURpZmZpY3VsdHlPcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRpZmZpY3VsdHkuYWN0aXZlJyk7XG4gICAgaWYgKGFjdGl2ZURpZmZpY3VsdHlPcHRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBhY3RpdmVEaWZmaWN1bHRpZXMgPSBBcnJheS5mcm9tKGFjdGl2ZURpZmZpY3VsdHlPcHRpb25zKS5tYXAoKGFjdGl2ZURpZmZpY3VsdHlPcHRpb24pID0+IHtcbiAgICAgIGNvbnN0IGFjdGl2ZURpZmZpY3VsdHkgPSBhY3RpdmVEaWZmaWN1bHR5T3B0aW9uLmNsYXNzTGlzdFswXTtcbiAgICAgIHJldHVybiBhY3RpdmVEaWZmaWN1bHR5O1xuICAgIH0pO1xuICAgIENoYW1waW9uRmlsdGVyLmZpbHRlckJ5RGlmZmljdWx0eShhY3RpdmVEaWZmaWN1bHRpZXMsIGFsbENoYW1waW9uRGV0YWlscyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3Qgc2VsZWN0TXVsdGlEcm9wZG93bk9wdGlvbiA9IChkcm9wZG93bk9wdGlvbikgPT4ge1xuICAgIGRyb3Bkb3duT3B0aW9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9O1xuXG4gIGNvbnN0IGRlc2VsZWN0RHJvcGRvd25PcHRpb24gPSAoZHJvcGRvd25PcHRpb24pID0+IHtcbiAgICBkcm9wZG93bk9wdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVEcm9wZG93bk9wdGlvbiA9IChkcm9wZG93bk9wdGlvbikgPT4ge1xuICAgIGlmICghQXJyYXkuZnJvbShkcm9wZG93bk9wdGlvbi5jbGFzc0xpc3QpLmluY2x1ZGVzKCdhY3RpdmUnKSkge1xuICAgICAgc2VsZWN0TXVsdGlEcm9wZG93bk9wdGlvbihkcm9wZG93bk9wdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlc2VsZWN0RHJvcGRvd25PcHRpb24oZHJvcGRvd25PcHRpb24pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZWxlY3RTaW5nbGVEcm9wZG93bk9wdGlvbiA9IChkcm9wZG93bk9wdGlvbikgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZURyb3Bkb3duT3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpbmdsZS1zZWxlY3QuYWN0aXZlJyk7XG4gICAgaWYgKGFjdGl2ZURyb3Bkb3duT3B0aW9uID09PSBudWxsKSB7XG4gICAgICBkcm9wZG93bk9wdGlvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGFjdGl2ZURyb3Bkb3duT3B0aW9uID09PSBkcm9wZG93bk9wdGlvbikge1xuICAgICAgZGVzZWxlY3REcm9wZG93bk9wdGlvbihkcm9wZG93bk9wdGlvbik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGFjdGl2ZURyb3Bkb3duT3B0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIGRyb3Bkb3duT3B0aW9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9O1xuXG4gIGNvbnN0IHJlZGlyZWN0VG9Gcm9udFBhZ2UgPSAoKSA9PiB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnaW5kZXguaHRtbCc7XG4gIH07XG5cbiAgY29uc3QgY2hhbXBpb25zUGFnZUNsaWNrRXZlbnRzID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgLyogSGVscGVyIGZ1bmN0aW9ucyBmb3IgY2xpY2sgZXZlbnRzICovXG4gICAgY29uc3QgY2hlY2tPcHRpb25zID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgYWxsQ2hhbXBpb25TdGF0cyA9IGF3YWl0IGdldEFsbENoYW1waW9uU3RhdHMoKTtcbiAgICAgIGNvbnN0IGFsbENoYW1waW9uRGV0YWlscyA9IGF3YWl0IGdldEFsbENoYW1waW9uRGV0YWlscygpO1xuICAgICAgYXdhaXQgY2hlY2tMYW5lRmlsdGVyT3B0aW9uKGFsbENoYW1waW9uU3RhdHMpO1xuICAgICAgY2hlY2tTb3J0aW5nT3B0aW9uKGFsbENoYW1waW9uU3RhdHMpO1xuICAgICAgY2hlY2tBY3RpdmVSb2xlT3B0aW9ucyhhbGxDaGFtcGlvbkRldGFpbHMpO1xuICAgICAgY2hlY2tBY3RpdmVEaWZmaWN1bHR5T3B0aW9ucyhhbGxDaGFtcGlvbkRldGFpbHMpO1xuICAgIH07XG5cbiAgICBjb25zdCBoaWRlQ2hhbXBpb25zU2VjdGlvbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGNoYW1waW9uc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb25zLXNlY3Rpb24nKTtcbiAgICAgIGNoYW1waW9uc1NlY3Rpb24uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIH07XG5cbiAgICBjb25zdCBzaG93Q2hhbXBpb25zU2VjdGlvbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGNoYW1waW9uc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb25zLXNlY3Rpb24nKTtcbiAgICAgIGNoYW1waW9uc1NlY3Rpb24uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICB9O1xuXG4gICAgY29uc3QgcmVtb3ZlQ2hhbXBpb25zUGFnZUxpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgY29uc3QgY2hhbXBpb25zUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGFtcGlvbnMtcGFnZScpO1xuICAgICAgY2hhbXBpb25zUGFnZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW1waW9uc1BhZ2VDbGlja0V2ZW50cyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZENoYW1waW9uc1BhZ2VMaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGNoYW1waW9uc1BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hhbXBpb25zLXBhZ2UnKTtcbiAgICAgIGNoYW1waW9uc1BhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFtcGlvbnNQYWdlQ2xpY2tFdmVudHMpO1xuICAgIH07XG5cbiAgICBjb25zdCBzaG93TG9hZGVyID0gKCkgPT4ge1xuICAgICAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlcicpO1xuICAgICAgbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH07XG5cbiAgICBjb25zdCBoaWRlTG9hZGVyID0gKCkgPT4ge1xuICAgICAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlcicpO1xuICAgICAgbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfTtcblxuICAgIGNvbnN0IGZpbHRlckFuZFNvcnRDaGFtcGlvbnNTZWN0aW9uID0gYXN5bmMgKHdhaXRUaW1lKSA9PiB7XG4gICAgICBoaWRlQ2hhbXBpb25zU2VjdGlvbigpO1xuICAgICAgc2hvd0xvYWRlcigpO1xuICAgICAgcmVtb3ZlQ2hhbXBpb25zUGFnZUxpc3RlbmVyKCk7XG4gICAgICBhd2FpdCBjaGVja09wdGlvbnMoKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzaG93Q2hhbXBpb25zU2VjdGlvbigpO1xuICAgICAgICBoaWRlTG9hZGVyKCk7XG4gICAgICB9LCB3YWl0VGltZSk7XG4gICAgICBhZGRDaGFtcGlvbnNQYWdlTGlzdGVuZXIoKTtcbiAgICB9O1xuXG4gICAgLyogY2xpY2sgZXZlbnQgcmVzcG9uc2VzICovXG4gICAgaWYgKEFycmF5LmZyb20oZXZlbnQudGFyZ2V0LmNsYXNzTGlzdCkuaW5jbHVkZXMoJ2Ryb3Bkb3duLWJ0bicpKSB7XG4gICAgICBkcm9wZG93bk9wdGlvbnNUb2dnbGUoZXZlbnQudGFyZ2V0KTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lID09PSAnY2hhbXBpb24tY29udGFpbmVyIHNob3duJykge1xuICAgICAgZGlzcGxheUNoYW1waW9uTW9kYWwoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pZCk7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lID09PSAnY2hhbXBpb24tY29udGFpbmVyIHNob3duJykge1xuICAgICAgZGlzcGxheUNoYW1waW9uTW9kYWwoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5kYXRhc2V0LmlkKTtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuZnJvbShldmVudC50YXJnZXQuY2xhc3NMaXN0KS5pbmNsdWRlcygnbXVsdGktc2VsZWN0JykpIHtcbiAgICAgIHRvZ2dsZURyb3Bkb3duT3B0aW9uKGV2ZW50LnRhcmdldCk7XG4gICAgICBmaWx0ZXJBbmRTb3J0Q2hhbXBpb25zU2VjdGlvbig2MDApO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5mcm9tKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QpLmluY2x1ZGVzKCdzaW5nbGUtc2VsZWN0JykpIHtcbiAgICAgIHNlbGVjdFNpbmdsZURyb3Bkb3duT3B0aW9uKGV2ZW50LnRhcmdldCk7XG4gICAgICBmaWx0ZXJBbmRTb3J0Q2hhbXBpb25zU2VjdGlvbigxMDAwKTtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuZnJvbShldmVudC50YXJnZXQuY2xhc3NMaXN0KS5pbmNsdWRlcygnaGVhZGVyLW9wdGlvbicpKSB7XG4gICAgICBzZWxlY3RMYW5lRmlsdGVyT3B0aW9uKGV2ZW50LnRhcmdldCk7XG4gICAgICBmaWx0ZXJBbmRTb3J0Q2hhbXBpb25zU2VjdGlvbig2MDApO1xuICAgIH1cblxuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnYXBwLW5hbWUnKSB7XG4gICAgICByZWRpcmVjdFRvRnJvbnRQYWdlKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNoYW1waW9uc1BhZ2VLZXlFdmVudHMgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IGFjdGl2ZUVsZW1lbnQgfSA9IGRvY3VtZW50O1xuXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQgJiYgYWN0aXZlRWxlbWVudC5jbGFzc05hbWUgPT09ICdjaGFtcGlvbi1jb250YWluZXIgc2hvd24nKSB7XG4gICAgICAgIGRpc3BsYXlDaGFtcGlvbk1vZGFsKGFjdGl2ZUVsZW1lbnQuZGF0YXNldC5pZCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhY3RpdmVFbGVtZW50ICYmIGFjdGl2ZUVsZW1lbnQuY2xhc3NOYW1lID09PSAnY2hhbXBpb24taW1nJykge1xuICAgICAgICBkaXNwbGF5Q2hhbXBpb25Nb2RhbChhY3RpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pZCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNoYW1waW9uc1BhZ2VMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgY2hhbXBpb25zUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGFtcGlvbnMtcGFnZScpO1xuICAgIGNoYW1waW9uc1BhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFtcGlvbnNQYWdlQ2xpY2tFdmVudHMpO1xuICAgIGNoYW1waW9uc1BhZ2UuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGNoYW1waW9uc1BhZ2VLZXlFdmVudHMpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY2hhbXBpb25zUGFnZUxpc3RlbmVycyxcbiAgICBkaXNwbGF5Q2hhbXBpb25Nb2RhbCxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IENoYW1waW9uc1BhZ2VDb250cm9sbGVyO1xuIiwiaW1wb3J0IGdldENoYW1waW9uU3RhdHMgZnJvbSAnLi4vY2hhbXBpb25EYXRhL2NoYW1waW9uU3RhdHMnO1xuaW1wb3J0IHsgY3JlYXRlQ2hhbXBpb25Db250YWluZXIgfSBmcm9tICcuLi90ZW1wbGF0ZXMvcmVuZGVySGVscGVycyc7XG5cbmNvbnN0IENoYW1waW9uRmlsdGVyID0gKCgpID0+IHtcbiAgY29uc3QgcmVuZGVyQWxsQ2hhbXBpb25zID0gYXN5bmMgKGFsbENoYW1waW9uU3RhdHMpID0+IHtcbiAgICBjb25zdCBjaGFtcGlvbnNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW1waW9ucy1zZWN0aW9uJyk7XG4gICAgYWxsQ2hhbXBpb25TdGF0cy5mb3JFYWNoKChjaGFtcGlvbikgPT4ge1xuICAgICAgY3JlYXRlQ2hhbXBpb25Db250YWluZXIoY2hhbXBpb24sIGNoYW1waW9uc1NlY3Rpb24pO1xuICAgIH0pO1xuICAgIHJldHVybiBjaGFtcGlvbnNTZWN0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyQ2hhbXBpb25zU2VjdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBjaGFtcGlvbnNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW1waW9ucy1zZWN0aW9uJyk7XG4gICAgY2hhbXBpb25zU2VjdGlvbi50ZXh0Q29udGVudCA9ICcnO1xuICB9O1xuXG4gIGNvbnN0IHNob3dDaGFtcGlvbiA9IChjaGFtcGlvbikgPT4ge1xuICAgIGNoYW1waW9uLmNsYXNzTGlzdC5hZGQoJ3Nob3duJyk7XG4gICAgY2hhbXBpb24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIH07XG5cbiAgY29uc3QgaGlkZUNoYW1waW9uID0gKGNoYW1waW9uKSA9PiB7XG4gICAgY2hhbXBpb24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgY2hhbXBpb24uY2xhc3NMaXN0LnJlbW92ZSgnc2hvd24nKTtcbiAgfTtcblxuICBjb25zdCBmaWx0ZXJCeUxhbmUgPSBhc3luYyAoY2xpY2tlZExhbmUsIGFsbENoYW1waW9uU3RhdHMpID0+IHtcbiAgICBjbGVhckNoYW1waW9uc1NlY3Rpb24oKTtcbiAgICBjb25zdCBjaGFtcGlvbnNTZWN0aW9uID0gYXdhaXQgcmVuZGVyQWxsQ2hhbXBpb25zKGFsbENoYW1waW9uU3RhdHMpO1xuICAgIGNoYW1waW9uc1NlY3Rpb24uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIGNvbnN0IGFsbENoYW1waW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFtcGlvbi1jb250YWluZXInKTtcbiAgICBpZiAoY2xpY2tlZExhbmUgPT09ICdhbGwnKSB7XG4gICAgICBhbGxDaGFtcGlvbnMuZm9yRWFjaCgoY2hhbXBpb24pID0+IHtcbiAgICAgICAgc2hvd0NoYW1waW9uKGNoYW1waW9uKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZXN1bHRzID0gW107XG4gICAgICBhbGxDaGFtcGlvbnMuZm9yRWFjaCgoY2hhbXBpb24pID0+IHtcbiAgICAgICAgY29uc3QgY2hhbXBpb25JZCA9IGNoYW1waW9uLmRhdGFzZXQuaWQ7XG4gICAgICAgIHJlc3VsdHMucHVzaChnZXRDaGFtcGlvblN0YXRzKGNoYW1waW9uSWQpKTtcbiAgICAgIH0pO1xuICAgICAgY29uc3QgY2hhbXBpb25TdGF0cyA9IGF3YWl0IFByb21pc2UuYWxsKHJlc3VsdHMpO1xuICAgICAgY2hhbXBpb25TdGF0cy5mb3JFYWNoKChjaGFtcGlvbikgPT4ge1xuICAgICAgICBjb25zdCBjaGFtcGlvbkxhbmUgPSBjaGFtcGlvbi5sYW5lO1xuICAgICAgICBjb25zdCBjaGFtcGlvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD0ke2NoYW1waW9uLmNoYW1waW9uSWR9XWApO1xuICAgICAgICBpZiAoY2hhbXBpb25MYW5lLnRvTG93ZXJDYXNlKCkgIT09IGNsaWNrZWRMYW5lKSB7XG4gICAgICAgICAgaGlkZUNoYW1waW9uKGNoYW1waW9uRWxlbWVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2hvd0NoYW1waW9uKGNoYW1waW9uRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBmaWx0ZXJCeVJvbGUgPSAoYWN0aXZlUm9sZXMsIGFsbENoYW1waW9uRGV0YWlscykgPT4ge1xuICAgIGNvbnN0IGNoYW1waW9uRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhbXBpb24tY29udGFpbmVyJyk7XG5cbiAgICBjaGFtcGlvbkVsZW1lbnRzLmZvckVhY2goKGNoYW1waW9uKSA9PiB7XG4gICAgICBsZXQgcm9sZU1hdGNoRm91bmQgPSBmYWxzZTtcbiAgICAgIGFjdGl2ZVJvbGVzLmZvckVhY2goKHJvbGUpID0+IHtcbiAgICAgICAgY29uc3QgY2hhbXBpb25Sb2xlcyA9IGFsbENoYW1waW9uRGV0YWlsc1tjaGFtcGlvbi5kYXRhc2V0LmlkXS50YWdzO1xuICAgICAgICBjaGFtcGlvblJvbGVzLmZvckVhY2goKGNoYW1waW9uUm9sZSkgPT4ge1xuICAgICAgICAgIGlmIChjaGFtcGlvblJvbGUudG9Mb3dlckNhc2UoKSA9PT0gcm9sZSkge1xuICAgICAgICAgICAgcm9sZU1hdGNoRm91bmQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIGlmICghcm9sZU1hdGNoRm91bmQpIHtcbiAgICAgICAgaGlkZUNoYW1waW9uKGNoYW1waW9uKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBjYXRlZ29yaXNlRGlmZmljdWx0eU51bSA9IChkaWZmaWN1bHR5TnVtKSA9PiB7XG4gICAgaWYgKGRpZmZpY3VsdHlOdW0gPD0gMykge1xuICAgICAgcmV0dXJuICdsb3cnO1xuICAgIH1cblxuICAgIGlmIChkaWZmaWN1bHR5TnVtIDw9IDYpIHtcbiAgICAgIHJldHVybiAnbWVkaXVtJztcbiAgICB9XG5cbiAgICByZXR1cm4gJ2hpZ2gnO1xuICB9O1xuXG4gIGNvbnN0IGZpbHRlckJ5RGlmZmljdWx0eSA9IGFzeW5jIChhY3RpdmVEaWZmaWN1bHRpZXMsIGFsbENoYW1waW9uRGV0YWlscykgPT4ge1xuICAgIGNvbnN0IGNoYW1waW9uRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhbXBpb24tY29udGFpbmVyJyk7XG5cbiAgICBjaGFtcGlvbkVsZW1lbnRzLmZvckVhY2goKGNoYW1waW9uKSA9PiB7XG4gICAgICBsZXQgZGlmZmljdWx0eU1hdGNoRm91bmQgPSBmYWxzZTtcbiAgICAgIGFjdGl2ZURpZmZpY3VsdGllcy5mb3JFYWNoKChkaWZmaWN1bHR5KSA9PiB7XG4gICAgICAgIGNvbnN0IGNoYW1waW9uRGlmZmljdWx0eU51bSA9IGFsbENoYW1waW9uRGV0YWlsc1tjaGFtcGlvbi5kYXRhc2V0LmlkXS5pbmZvLmRpZmZpY3VsdHk7XG4gICAgICAgIGNvbnN0IGNoYW1waW9uRGlmZmljdWx0eSA9IGNhdGVnb3Jpc2VEaWZmaWN1bHR5TnVtKGNoYW1waW9uRGlmZmljdWx0eU51bSk7XG5cbiAgICAgICAgaWYgKGRpZmZpY3VsdHkudG9Mb3dlckNhc2UoKSA9PT0gY2hhbXBpb25EaWZmaWN1bHR5KSB7XG4gICAgICAgICAgZGlmZmljdWx0eU1hdGNoRm91bmQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmICghZGlmZmljdWx0eU1hdGNoRm91bmQpIHtcbiAgICAgICAgaGlkZUNoYW1waW9uKGNoYW1waW9uKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGZpbHRlckJ5TGFuZSxcbiAgICBmaWx0ZXJCeVJvbGUsXG4gICAgZmlsdGVyQnlEaWZmaWN1bHR5LFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhbXBpb25GaWx0ZXI7XG4iLCJpbXBvcnQgQ2hhbXBpb25zUGFnZUNvbnRyb2xsZXIgZnJvbSAnLi9jaGFtcGlvbnNQYWdlQ29udHJvbGxlcic7XG5cbmNvbnN0IFNlYXJjaGJhckNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBjb25zdCBzaG93QXV0b0NvbXBsZXRlTmFtZXMgPSAoc2VhcmNoQ29udGFpbmVyKSA9PiB7XG4gICAgY29uc3QgYXV0b0NvbXBsZXRlTmFtZXMgPSBzZWFyY2hDb250YWluZXIucXVlcnlTZWxlY3RvcignLmF1dG8tY29tcGxldGUtbmFtZXMnKTtcbiAgICBhdXRvQ29tcGxldGVOYW1lcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfTtcblxuICBjb25zdCBoaWRlQXV0b0NvbXBsZXRlTmFtZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgYXV0b0NvbXBsZXRlTmFtZUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmF1dG8tY29tcGxldGUtbmFtZXMnKTtcbiAgICBhdXRvQ29tcGxldGVOYW1lRWxlbWVudHMuZm9yRWFjaCgoYXV0b0NvbXBsZXRlTmFtZUVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGF1dG9Db21wbGV0ZU5hbWVzID0gYXV0b0NvbXBsZXRlTmFtZUVsZW1lbnQ7XG4gICAgICBhdXRvQ29tcGxldGVOYW1lcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHNlYXJjaGJhckZvY3VzSW5FdmVudCA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnc2VhcmNoJykge1xuICAgICAgY29uc3Qgc2VhcmNoQ29udGFpbmVyID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICBzaG93QXV0b0NvbXBsZXRlTmFtZXMoc2VhcmNoQ29udGFpbmVyKTtcbiAgICAgIGV2ZW50LnRhcmdldC5mb2N1cygpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZWFyY2hiYXJGb2N1c291dEV2ZW50ID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKCFldmVudC5yZWxhdGVkVGFyZ2V0IHx8IChldmVudC5yZWxhdGVkVGFyZ2V0LmNsYXNzTmFtZSAhPT0gJ2F1dG8tY29tcGxldGUtbmFtZS13cmFwcGVyJyAmJiBldmVudC5yZWxhdGVkVGFyZ2V0LmNsYXNzTmFtZSAhPT0gJ3NlYXJjaCcpKSB7XG4gICAgICBoaWRlQXV0b0NvbXBsZXRlTmFtZXMoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2VhcmNoQmFySW5wdXRFdmVudCA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnc2VhcmNoJykge1xuICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgIGNvbnN0IGF1dG9Db21wbGV0ZU5hbWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmF1dG8tY29tcGxldGUtbmFtZScpO1xuICAgICAgYXV0b0NvbXBsZXRlTmFtZXMuZm9yRWFjaCgoYXV0b0NvbXBsZXRlTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBuYW1lID0gYXV0b0NvbXBsZXRlTmFtZTtcbiAgICAgICAgaWYgKG5hbWUuaWQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgICAgbmFtZS5wYXJlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5hbWUucGFyZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2VhcmNoYmFyS2V5ZG93bkV2ZW50cyA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGlmICgoZXZlbnQua2V5ID09PSAnQXJyb3dEb3duJyB8fCBldmVudC5rZXkgPT09ICdBcnJvd1VwJykgJiYgZXZlbnQudGFyZ2V0ICE9PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykpIHtcbiAgICAgIGxldCB7IGFjdGl2ZUVsZW1lbnQgfSA9IGRvY3VtZW50O1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgbGV0IGdvVG9TdGFydDtcbiAgICAgIGNvbnN0IGFjdGlvbiA9IHtcbiAgICAgICAgQXJyb3dVcDogJ3ByZXZpb3VzJywgQXJyb3dEb3duOiAnbmV4dCcsXG4gICAgICB9O1xuXG4gICAgICBpZiAoYWN0aXZlRWxlbWVudC5jbGFzc05hbWUgPT09ICdzZWFyY2gnICYmIGV2ZW50LmtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgICAgYWN0aXZlRWxlbWVudCA9IGFjdGl2ZUVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICAvKiBTa2lwcyBhdXRvY29tcGxldGUgbmFtZXMgd2hpY2ggYXJlIGN1cnJlbnRseSBub3QgZGlzcGxheWVkICovXG4gICAgICAgIHdoaWxlIChhY3RpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgPSBhY3RpdmVFbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgfVxuICAgICAgICBhY3RpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY3RpdmVFbGVtZW50ID0gYWN0aXZlRWxlbWVudFtgJHthY3Rpb25bZXZlbnQua2V5XX1FbGVtZW50U2libGluZ2BdO1xuICAgICAgICB3aGlsZSAoYWN0aXZlRWxlbWVudCAmJiBhY3RpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgPSBhY3RpdmVFbGVtZW50W2Ake2FjdGlvbltldmVudC5rZXldfUVsZW1lbnRTaWJsaW5nYF07XG4gICAgICAgIH1cbiAgICAgICAgLyogQ2hlY2tzIHdoaWNoIHNlYXJjaCBiYXIgZHJvcGRvd24gaXMgY3VycmVudGx5IGRpc3BsYXllZCAqL1xuICAgICAgICBjb25zdCBhdXRvQ29tcGxldGVOYW1lRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXV0by1jb21wbGV0ZS1uYW1lcycpO1xuICAgICAgICBjb25zdCBhdXRvQ29tcGxldGVOYW1lcyA9IEFycmF5LmZyb20oYXV0b0NvbXBsZXRlTmFtZUVsZW1lbnRzKS5maWx0ZXIoXG4gICAgICAgICAgKGF1dG9Db21wbGV0ZU5hbWVFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc1Nob3dpbmcgPSBhdXRvQ29tcGxldGVOYW1lRWxlbWVudC5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snO1xuICAgICAgICAgICAgcmV0dXJuIGlzU2hvd2luZztcbiAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgICAgICBpZiAoYXV0b0NvbXBsZXRlTmFtZXNbMF0gIT09IHVuZGVmaW5lZCAmJiAhYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgIC8qIFJldHVybnMgdG8gdGhlIHN0YXJ0IG9yIHRoZSBlbmQgb2YgdGhlIGRyb3Bkb3duIHdoZW4gYW4gYXJyb3cga2V5IGlzIHByZXNzZWQgKi9cbiAgICAgICAgICBnb1RvU3RhcnQgPSBhY3Rpb25bZXZlbnQua2V5XSA9PT0gJ25leHQnIHx8IGV2ZW50LmtleSA9PT0gJ0hvbWUnO1xuICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgPSBhdXRvQ29tcGxldGVOYW1lc1swXS5jaGlsZHJlbltcbiAgICAgICAgICAgIGdvVG9TdGFydCA/IDAgOiBhdXRvQ29tcGxldGVOYW1lc1swXS5jaGlsZHJlbi5sZW5ndGggLSAxXG4gICAgICAgICAgXTtcbiAgICAgICAgICB3aGlsZSAoYWN0aXZlRWxlbWVudCAmJiBhY3RpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgICAgYWN0aXZlRWxlbWVudCA9IGFjdGl2ZUVsZW1lbnRbYCR7YWN0aW9uW2V2ZW50LmtleV19RWxlbWVudFNpYmxpbmdgXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICBhY3RpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBjb25zdCB7IGFjdGl2ZUVsZW1lbnQgfSA9IGRvY3VtZW50O1xuICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQgJiYgYWN0aXZlRWxlbWVudC5jbGFzc05hbWUgPT09ICdhdXRvLWNvbXBsZXRlLW5hbWUtd3JhcHBlcicpIHtcbiAgICAgICAgY29uc3Qgc2VhcmNoQ29udGFpbmVyQ2xhc3NOYW1lID0gYWN0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0WzFdO1xuICAgICAgICBjb25zdCBhdXRvQ29tcGxldGVOYW1lID0gYWN0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcblxuICAgICAgICAvKiBDaGVja3Mgd2hpY2ggcGFnZSB0aGUgc2VhcmNoIGJhciBpcyBvbiAqL1xuICAgICAgICBpZiAoc2VhcmNoQ29udGFpbmVyQ2xhc3NOYW1lID09PSAnZGVza3RvcC1zZWFyY2gtY29udGFpbmVyJ1xuICAgICAgICAgICAgfHwgc2VhcmNoQ29udGFpbmVyQ2xhc3NOYW1lID09PSAnbW9iaWxlLXNlYXJjaC1jb250YWluZXInKSB7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NoYW1waW9uSWQnLCBhdXRvQ29tcGxldGVOYW1lLmRhdGFzZXQuY2hhbXBpb25JZCk7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnY2hhbXBpb25zLmh0bWwnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGF3YWl0IENoYW1waW9uc1BhZ2VDb250cm9sbGVyLmRpc3BsYXlDaGFtcGlvbk1vZGFsKGF1dG9Db21wbGV0ZU5hbWUuZGF0YXNldC5jaGFtcGlvbklkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZWFyY2hiYXJDbGlja0V2ZW50cyA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGNvbnN0IGNsaWNrQXV0b0NvbXBsZXRlTmFtZSA9IGFzeW5jIChzZWFyY2hDb250YWluZXJDbGFzc05hbWUsIGF1dG9Db21wbGV0ZU5hbWUpID0+IHtcbiAgICAgIGlmIChzZWFyY2hDb250YWluZXJDbGFzc05hbWUgPT09ICdkZXNrdG9wLXNlYXJjaC1jb250YWluZXInXG4gICAgICB8fCBzZWFyY2hDb250YWluZXJDbGFzc05hbWUgPT09ICdtb2JpbGUtc2VhcmNoLWNvbnRhaW5lcicpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NoYW1waW9uSWQnLCBhdXRvQ29tcGxldGVOYW1lLmRhdGFzZXQuY2hhbXBpb25JZCk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ2NoYW1waW9ucy5odG1sJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF3YWl0IENoYW1waW9uc1BhZ2VDb250cm9sbGVyLmRpc3BsYXlDaGFtcGlvbk1vZGFsKGF1dG9Db21wbGV0ZU5hbWUuZGF0YXNldC5jaGFtcGlvbklkKTtcbiAgICAgICAgY29uc3QgYXV0b0NvbXBsZXRlTmFtZUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmF1dG8tY29tcGxldGUtbmFtZXMnKTtcbiAgICAgICAgYXV0b0NvbXBsZXRlTmFtZUVsZW1lbnRzLmZvckVhY2goKGF1dG9Db21wbGV0ZU5hbWVFbGVtZW50KSA9PiB7XG4gICAgICAgICAgY29uc3QgYXV0b0NvbXBsZXRlTmFtZXMgPSBhdXRvQ29tcGxldGVOYW1lRWxlbWVudDtcbiAgICAgICAgICBhdXRvQ29tcGxldGVOYW1lcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IHNlYXJjaENvbnRhaW5lciA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdhdXRvLWNvbXBsZXRlLW5hbWUtd3JhcHBlcicpIHtcbiAgICAgIGNvbnN0IHNlYXJjaENvbnRhaW5lckNsYXNzTmFtZSA9IHNlYXJjaENvbnRhaW5lci5jbGFzc0xpc3RbMV07XG4gICAgICBjb25zdCBhdXRvQ29tcGxldGVOYW1lID0gZXZlbnQudGFyZ2V0LmZpcnN0Q2hpbGQ7XG4gICAgICBjbGlja0F1dG9Db21wbGV0ZU5hbWUoc2VhcmNoQ29udGFpbmVyQ2xhc3NOYW1lLCBhdXRvQ29tcGxldGVOYW1lKTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2F1dG8tY29tcGxldGUtbmFtZScpIHtcbiAgICAgIGNvbnN0IHNlYXJjaENvbnRhaW5lckNsYXNzTmFtZSA9IHNlYXJjaENvbnRhaW5lci5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdFsxXTtcbiAgICAgIGNvbnN0IGF1dG9Db21wbGV0ZU5hbWUgPSBldmVudC50YXJnZXQ7XG4gICAgICBjbGlja0F1dG9Db21wbGV0ZU5hbWUoc2VhcmNoQ29udGFpbmVyQ2xhc3NOYW1lLCBhdXRvQ29tcGxldGVOYW1lKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2VhcmNoQ29udGFpbmVyTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIC8vIGNvbnN0IHNlYXJjaENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtY29udGFpbmVyJyk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIHNlYXJjaGJhckZvY3VzSW5FdmVudCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBzZWFyY2hiYXJGb2N1c291dEV2ZW50KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHNlYXJjaEJhcklucHV0RXZlbnQpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBzZWFyY2hiYXJLZXlkb3duRXZlbnRzKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlYXJjaGJhckNsaWNrRXZlbnRzKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHNlYXJjaENvbnRhaW5lckxpc3RlbmVycyxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaGJhckNvbnRyb2xsZXI7XG4iLCIvLyBpbXBvcnQgeyBnZXRBbGxDaGFtcGlvblN0YXRzIH0gZnJvbSAnLi4vY2hhbXBpb25EYXRhL2dldEFsbENoYW1waW9ucyc7XG5pbXBvcnQgeyBjcmVhdGVDaGFtcGlvbkNvbnRhaW5lciB9IGZyb20gJy4uL3RlbXBsYXRlcy9yZW5kZXJIZWxwZXJzJztcblxuY29uc3QgU29ydENoYW1waW9ucyA9ICgoKSA9PiB7XG4gIGNvbnN0IGNsZWFyQ2hhbXBpb25zU2VjdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBjaGFtcGlvbnNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW1waW9ucy1zZWN0aW9uJyk7XG4gICAgY2hhbXBpb25zU2VjdGlvbi5zdHlsZS52aXNpYmxpdHkgPSAnaGlkZGVuJztcbiAgICBjaGFtcGlvbnNTZWN0aW9uLnRleHRDb250ZW50ID0gJyc7XG4gIH07XG5cbiAgY29uc3QgcmVjcmVhdGVDaGFtcGlvbnNTZWN0aW9uID0gKGNoYW1waW9ucykgPT4ge1xuICAgIGNvbnN0IGNoYW1waW9uc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb25zLXNlY3Rpb24nKTtcbiAgICBjaGFtcGlvbnMuZm9yRWFjaCgoY2hhbXBpb24pID0+IHtcbiAgICAgIGNyZWF0ZUNoYW1waW9uQ29udGFpbmVyKGNoYW1waW9uLCBjaGFtcGlvbnNTZWN0aW9uKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBmaWx0ZXJDaGFtcGlvbnMgPSAoYWxsQ2hhbXBpb25TdGF0cykgPT4ge1xuICAgIC8vIGNvbnN0IGFsbENoYW1waW9uU3RhdHMgPSBhd2FpdCBnZXRBbGxDaGFtcGlvblN0YXRzKCk7XG4gICAgY29uc3QgZmlsdGVyZWRDaGFtcGlvblN0YXRzID0gYWxsQ2hhbXBpb25TdGF0cy5maWx0ZXIoKGNoYW1waW9uU3RhdHMpID0+IHtcbiAgICAgIGNvbnN0IGNoYW1waW9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPSR7Y2hhbXBpb25TdGF0cy5pZH1dYCk7XG4gICAgICByZXR1cm4gY2hhbXBpb25FbGVtZW50LmNsYXNzTmFtZSA9PT0gJ2NoYW1waW9uLWNvbnRhaW5lciBzaG93bic7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmlsdGVyZWRDaGFtcGlvblN0YXRzO1xuICB9O1xuXG4gIGNvbnN0IHNvcnRDaGFtcGlvbnNCeVdpbnJhdGUgPSAoYWxsQ2hhbXBpb25TdGF0cykgPT4ge1xuICAgIGNvbnN0IGZpbHRlcmVkQ2hhbXBpb25TdGF0cyA9IGZpbHRlckNoYW1waW9ucyhhbGxDaGFtcGlvblN0YXRzKTtcbiAgICBjb25zdCBmaWx0ZXJlZENoYW1waW9uc1NvcnRlZCA9IGZpbHRlcmVkQ2hhbXBpb25TdGF0cy5zb3J0KChhLCBiKSA9PiBiLndpblJhdGUgLSBhLndpblJhdGUpO1xuICAgIGNsZWFyQ2hhbXBpb25zU2VjdGlvbigpO1xuICAgIHJlY3JlYXRlQ2hhbXBpb25zU2VjdGlvbihmaWx0ZXJlZENoYW1waW9uc1NvcnRlZCk7XG4gICAgcmV0dXJuIGZpbHRlcmVkQ2hhbXBpb25zU29ydGVkO1xuICB9O1xuXG4gIGNvbnN0IHNvcnRDaGFtcGlvbnNCeVBpY2tyYXRlID0gKGFsbENoYW1waW9uU3RhdHMpID0+IHtcbiAgICBjb25zdCBmaWx0ZXJlZENoYW1waW9uU3RhdHMgPSBmaWx0ZXJDaGFtcGlvbnMoYWxsQ2hhbXBpb25TdGF0cyk7XG4gICAgY29uc3QgZmlsdGVyZWRDaGFtcGlvbnNTb3J0ZWQgPSBmaWx0ZXJlZENoYW1waW9uU3RhdHMuc29ydCgoYSwgYikgPT4gYi5waWNrUmF0ZSAtIGEucGlja1JhdGUpO1xuICAgIGNsZWFyQ2hhbXBpb25zU2VjdGlvbigpO1xuICAgIHJlY3JlYXRlQ2hhbXBpb25zU2VjdGlvbihmaWx0ZXJlZENoYW1waW9uc1NvcnRlZCk7XG4gICAgcmV0dXJuIGZpbHRlcmVkQ2hhbXBpb25zU29ydGVkO1xuICB9O1xuXG4gIGNvbnN0IHNvcnRDaGFtcGlvbnNCeURhbWFnZURvbmUgPSAoYWxsQ2hhbXBpb25TdGF0cykgPT4ge1xuICAgIGNvbnN0IGZpbHRlcmVkQ2hhbXBpb25TdGF0cyA9IGZpbHRlckNoYW1waW9ucyhhbGxDaGFtcGlvblN0YXRzKTtcblxuICAgIGNvbnN0IGZpbHRlcmVkQ2hhbXBpb25zU29ydGVkID0gZmlsdGVyZWRDaGFtcGlvblN0YXRzLnNvcnQoXG4gICAgICAoYSwgYikgPT4gYi5kYW1hZ2VQZXJNYXRjaC50b3RhbERhbWFnZS52YWx1ZSAtIGEuZGFtYWdlUGVyTWF0Y2gudG90YWxEYW1hZ2UudmFsdWUsXG4gICAgKTtcbiAgICBjbGVhckNoYW1waW9uc1NlY3Rpb24oKTtcbiAgICByZWNyZWF0ZUNoYW1waW9uc1NlY3Rpb24oZmlsdGVyZWRDaGFtcGlvbnNTb3J0ZWQpO1xuICAgIHJldHVybiBmaWx0ZXJlZENoYW1waW9uc1NvcnRlZDtcbiAgfTtcblxuICBjb25zdCBzb3J0QnlEZWZhdWx0T3JkZXIgPSAoYWxsQ2hhbXBpb25TdGF0cykgPT4ge1xuICAgIC8vIGNvbnN0IGFsbENoYW1waW9uU3RhdHMgPSBhd2FpdCBnZXRBbGxDaGFtcGlvblN0YXRzKCk7XG4gICAgY29uc3QgZmlsdGVyZWRDaGFtcGlvblN0YXRzID0gYWxsQ2hhbXBpb25TdGF0cy5maWx0ZXIoKGNoYW1waW9uU3RhdHMpID0+IHtcbiAgICAgIGNvbnN0IGNoYW1waW9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPSR7Y2hhbXBpb25TdGF0cy5pZH1dYCk7XG4gICAgICBpZiAoY2hhbXBpb25FbGVtZW50ID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjaGFtcGlvbkVsZW1lbnQuY2xhc3NOYW1lID09PSAnY2hhbXBpb24tY29udGFpbmVyIHNob3duJztcbiAgICB9KTtcbiAgICBjbGVhckNoYW1waW9uc1NlY3Rpb24oKTtcbiAgICByZWNyZWF0ZUNoYW1waW9uc1NlY3Rpb24oZmlsdGVyZWRDaGFtcGlvblN0YXRzKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHNvcnRDaGFtcGlvbnNCeVdpbnJhdGUsXG4gICAgc29ydENoYW1waW9uc0J5UGlja3JhdGUsXG4gICAgc29ydENoYW1waW9uc0J5RGFtYWdlRG9uZSxcbiAgICBzb3J0QnlEZWZhdWx0T3JkZXIsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBTb3J0Q2hhbXBpb25zO1xuIiwiY29uc3QgZmV0Y2hDaGFtcGlvbkRldGFpbHMgPSBhc3luYyAoY2hhbXBpb25JZCwgbGF0ZXN0VmVyc2lvbikgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vJHtsYXRlc3RWZXJzaW9ufS9kYXRhL2VuX1VTL2NoYW1waW9uLyR7Y2hhbXBpb25JZH0uanNvbmAsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICBjb25zdCBjaGFtcGlvbnMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IGNoYW1waW9uRGV0YWlscyA9IGNoYW1waW9ucy5kYXRhW2NoYW1waW9uSWRdO1xuXG4gIHJldHVybiBjaGFtcGlvbkRldGFpbHM7XG59O1xuXG5jb25zdCBnZXRDaGFtcGlvblBhc3NpdmVzID0gKGNoYW1waW9uRGV0YWlscywgbGF0ZXN0VmVyc2lvbikgPT4ge1xuICBjb25zdCBwYXNzaXZlRGF0YSA9IGNoYW1waW9uRGV0YWlscy5wYXNzaXZlO1xuICBjb25zdCBwYXNzaXZlTmFtZSA9IHBhc3NpdmVEYXRhLm5hbWU7XG4gIGNvbnN0IHBhc3NpdmVEZXNjcmlwdGlvbiA9IHBhc3NpdmVEYXRhLmRlc2NyaXB0aW9uO1xuICBjb25zdCBwYXNzaXZlSWQgPSBwYXNzaXZlRGF0YS5pbWFnZS5mdWxsO1xuICBjb25zdCBwYXNzaXZlSW1nVXJsID0gYGh0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi8ke2xhdGVzdFZlcnNpb259L2ltZy9wYXNzaXZlLyR7cGFzc2l2ZUlkfWA7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXNzaXZlTmFtZSxcbiAgICBwYXNzaXZlRGVzY3JpcHRpb24sXG4gICAgcGFzc2l2ZUltZ1VybCxcbiAgfTtcbn07XG5cbmNvbnN0IGdldENoYW1waW9uU3BlbGxzID0gKGNoYW1waW9uRGV0YWlscywgbGF0ZXN0VmVyc2lvbikgPT4ge1xuICBjb25zdCBzcGVsbHNEYXRhID0gY2hhbXBpb25EZXRhaWxzLnNwZWxscztcbiAgY29uc3Qgc3BlbGxzID0gW107XG5cbiAgc3BlbGxzRGF0YS5mb3JFYWNoKChzcGVsbCkgPT4ge1xuICAgIGNvbnN0IHNwZWxsT2JqZWN0ID0ge1xuICAgICAgbmFtZTogc3BlbGwubmFtZSxcbiAgICAgIGlkOiBzcGVsbC5pZCxcbiAgICAgIGRlc2NyaXB0aW9uOiBzcGVsbC5kZXNjcmlwdGlvbixcbiAgICAgIGNvc3RCdXJuOiBzcGVsbC5jb3N0QnVybixcbiAgICAgIGNvc3RUeXBlOiBzcGVsbC5jb3N0VHlwZSxcbiAgICAgIGNvb2xkb3duOiBzcGVsbC5jb29sZG93bkJ1cm4sXG4gICAgICBpbWdVcmw6IGBodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vJHtsYXRlc3RWZXJzaW9ufS9pbWcvc3BlbGwvJHtzcGVsbC5pZH0ucG5nYCxcbiAgICB9O1xuICAgIHNwZWxscy5wdXNoKHNwZWxsT2JqZWN0KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHNwZWxscztcbn07XG5cbmNvbnN0IGdldENoYW1waW9uRGV0YWlscyA9IGFzeW5jIChjaGFtcGlvbklkLCBsYXRlc3RWZXJzaW9uKSA9PiB7XG4gIGNvbnN0IGNoYW1waW9uRGV0YWlscyA9IGF3YWl0IGZldGNoQ2hhbXBpb25EZXRhaWxzKGNoYW1waW9uSWQsIGxhdGVzdFZlcnNpb24pO1xuICBjb25zdCBjaGFtcGlvblBhc3NpdmUgPSBnZXRDaGFtcGlvblBhc3NpdmVzKGNoYW1waW9uRGV0YWlscywgbGF0ZXN0VmVyc2lvbik7XG4gIGNvbnN0IHNwZWxscyA9IGdldENoYW1waW9uU3BlbGxzKGNoYW1waW9uRGV0YWlscywgbGF0ZXN0VmVyc2lvbik7XG5cbiAgLy8gTWFrZSBmaXJzdCBsZXR0ZXIgb2YgdGhlIGNoYW1waW9uIHRpdGxlIGEgY2FwaXRhbCBsZXR0ZXIuXG4gIGNvbnN0IGNoYW1waW9uVGl0bGUgPSBjaGFtcGlvbkRldGFpbHMudGl0bGUucmVwbGFjZShcbiAgICBjaGFtcGlvbkRldGFpbHMudGl0bGVbMF0sIGNoYW1waW9uRGV0YWlscy50aXRsZVswXS50b1VwcGVyQ2FzZSgpLFxuICApO1xuXG4gIGlmIChjaGFtcGlvbkRldGFpbHMucGFydHlwZSA9PT0gJ05vbmUnKSB7XG4gICAgY2hhbXBpb25EZXRhaWxzLnBhcnR5cGUgPSAnTWFuYWxlc3MnO1xuICB9XG5cbiAgaWYgKGNoYW1waW9uRGV0YWlscy5pZCA9PT0gJ0Frc2hhbicpIHtcbiAgICBjaGFtcGlvbkRldGFpbHMuYWxseXRpcHNbMF0gPSAnWW91IGNhbuKAmXQgdXNlIGNvbnN1bWFibGVzIGxpa2UgcG90aW9ucyBkdXJpbmcgeW91ciBDb21ldXBwYW5jZSwgbWFrZSBzdXJlIHRvIHVzZSB0aGVtIGJlZm9yZSBjaGFubmVsaW5nLic7XG4gIH1cblxuICBpZiAoY2hhbXBpb25EZXRhaWxzLmlkID09PSAnVmV4Jykge1xuICAgIGNoYW1waW9uRGV0YWlscy5hbGx5dGlwcy5wdXNoKCdWZXggaXMgZ3JlYXQgYXQgZGl2aW5nIGludG8gdGhlIGJhY2tsaW5lLCBidXQgaGVyIGVzY2FwZSBwb3RlbnRpYWwgaXMgbG93IHNvIHRpbWluZyBpcyBrZXkuJyk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5hbWU6IGNoYW1waW9uRGV0YWlscy5uYW1lLFxuICAgIGlkOiBjaGFtcGlvbkRldGFpbHMuaWQsXG4gICAgdGl0bGU6IGNoYW1waW9uVGl0bGUsXG4gICAgbG9yZTogY2hhbXBpb25EZXRhaWxzLmxvcmUsXG4gICAgcm9sZXM6IGNoYW1waW9uRGV0YWlscy50YWdzLFxuICAgIHNraW5zOiBjaGFtcGlvbkRldGFpbHMuc2tpbnMsXG4gICAgcmVzb3VyY2U6IGNoYW1waW9uRGV0YWlscy5wYXJ0eXBlLFxuICAgIHBhc3NpdmU6IGNoYW1waW9uUGFzc2l2ZSxcbiAgICBzcGVsbHMsXG4gICAgdGlwczogY2hhbXBpb25EZXRhaWxzLmFsbHl0aXBzLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0Q2hhbXBpb25EZXRhaWxzO1xuIiwiY29uc3QgZmV0Y2hDaGFtcGlvblN0YXRzID0gYXN5bmMgKGNoYW1waW9uSWQpID0+IHtcbiAgLyogUmVsYXRpdmUgdXJscyBhcmUgdXNlZCBmb3Igd2hlbiB0aGUgYXBwIGlzIGluIHByb2R1Y3Rpb24gYW5kIGxvY2FsaG9zdCB1cmwgZm9yIGRldmVsb3BtZW50ICovXG4gIGNvbnN0IGRldlVybCA9ICdodHRwOi8vMTI3LjAuMC4xOjU1MDAvZnJvbnRlbmQvZGlzdC9jaGFtcGlvbnMuaHRtbCc7XG4gIGNvbnN0IHJlc3BvbnNlID0gd2luZG93LmxvY2F0aW9uLmhyZWYgPT09IGRldlVybFxuICAgID8gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS8ke2NoYW1waW9uSWR9YCwgeyBtb2RlOiAnY29ycycgfSlcbiAgICA6IGF3YWl0IGZldGNoKGAke2NoYW1waW9uSWR9YCwgeyBtb2RlOiAnY29ycycgfSk7XG4gIGNvbnN0IGNoYW1waW9uU3RhdHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIGNoYW1waW9uU3RhdHM7XG59O1xuXG5jb25zdCBnZXRDaGFtcGlvblN0YXRzID0gYXN5bmMgKGNoYW1waW9uSWQpID0+IHtcbiAgY29uc3QgY2hhbXBpb25TdGF0cyA9IGF3YWl0IGZldGNoQ2hhbXBpb25TdGF0cyhjaGFtcGlvbklkKTtcbiAgY29uc3Qgd2luUmF0ZSA9IGNoYW1waW9uU3RhdHMud2luUmF0ZS50b0ZpeGVkKDIpO1xuICBjb25zdCBwaWNrUmF0ZSA9IGNoYW1waW9uU3RhdHMucGlja1JhdGUudG9GaXhlZCgyKTtcbiAgY29uc3QgbGFuZSA9IGNoYW1waW9uU3RhdHMubGFuZVswXSArIGNoYW1waW9uU3RhdHMubGFuZS5zdWJzdHJpbmcoMSkudG9Mb3dlckNhc2UoKTtcblxuICByZXR1cm4ge1xuICAgIGNoYW1waW9uSWQsXG4gICAga2RhOiBjaGFtcGlvblN0YXRzLmtkYVJhdGlvLFxuICAgIGRhbWFnZVBlck1hdGNoOiBjaGFtcGlvblN0YXRzLmRhbWFnZVBlck1hdGNoLFxuICAgIGl0ZW1TZXRzOiBjaGFtcGlvblN0YXRzLml0ZW1DaG9pY2VzLnNsaWNlKDEpLFxuICAgIGJlc3RNYXRjaFVwczogY2hhbXBpb25TdGF0cy5tYXRjaFVwcy5iZXN0TWF0Y2hVcHMsXG4gICAgd29yc3RNYXRjaFVwczogY2hhbXBpb25TdGF0cy5tYXRjaFVwcy53b3JzdE1hdGNoVXBzLFxuICAgIHdpblJhdGUsXG4gICAgcGlja1JhdGUsXG4gICAgbGFuZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldENoYW1waW9uU3RhdHM7XG4iLCJjb25zdCBnZXRBbGxDaGFtcGlvbkRldGFpbHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHZlcnNpb25zUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vYXBpL3ZlcnNpb25zLmpzb24nKTtcbiAgY29uc3QgdmVyc2lvbnMgPSBhd2FpdCB2ZXJzaW9uc1Jlc3BvbnNlLmpzb24oKTtcbiAgY29uc3QgbGF0ZXN0VmVyc2lvbiA9IHZlcnNpb25zWzBdO1xuICBjb25zdCBjaGFtcGlvbnNSZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vJHtsYXRlc3RWZXJzaW9ufS9kYXRhL2VuX1VTL2NoYW1waW9uLmpzb25gKTtcbiAgY29uc3QgYWxsQ2hhbXBpb25zID0gYXdhaXQgY2hhbXBpb25zUmVzcG9uc2UuanNvbigpO1xuXG4gIHJldHVybiBhbGxDaGFtcGlvbnMuZGF0YTtcbn07XG5cbmNvbnN0IGdldEFsbENoYW1waW9uU3RhdHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGRldlVybCA9ICdodHRwOi8vMTI3LjAuMC4xOjU1MDAvZnJvbnRlbmQvZGlzdC9jaGFtcGlvbnMuaHRtbCc7XG4gIGNvbnN0IHJlc3BvbnNlID0gd2luZG93LmxvY2F0aW9uLmhyZWYgPT09IGRldlVybFxuICAgID8gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9jaGFtcGlvbnMnLCB7IG1vZGU6ICdjb3JzJyB9KVxuICAgIDogYXdhaXQgZmV0Y2goJ2NoYW1waW9ucycsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICBjb25zdCBhbGxDaGFtcGlvblN0YXRzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIHJldHVybiBhbGxDaGFtcGlvblN0YXRzO1xufTtcblxuZXhwb3J0IHtcbiAgZ2V0QWxsQ2hhbXBpb25EZXRhaWxzLFxuICBnZXRBbGxDaGFtcGlvblN0YXRzLFxufTtcbiIsIi8qIFJldHJpdmVzIHRoZSBsYXRlc3Qgc3RhdGljIGRhdGEgYXZhbGlhYmxlIGZvciBjaGFtcGlvbnMgKi9cbmV4cG9ydCBkZWZhdWx0IGFzeW5jICgpID0+IHtcbiAgY29uc3QgdmVyc2lvblJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2FwaS92ZXJzaW9ucy5qc29uJywgeyBtb2RlOiAnY29ycycgfSk7XG4gIGNvbnN0IHZlcnNpb25zID0gYXdhaXQgdmVyc2lvblJlc3BvbnNlLmpzb24oKTtcbiAgY29uc3QgbGF0ZXN0VmVyc2lvbiA9IHZlcnNpb25zWzBdO1xuICByZXR1cm4gbGF0ZXN0VmVyc2lvbjtcbn07XG4iLCIvKiBGZXRjaGVzIGFsbCB0aGUgaXRlbXMgYSBjaGFtcGlvbiBjYW4gYnV5IGluIGEgbWF0Y2ggKi9cbmNvbnN0IGZldGNoQWxsSXRlbXMgPSBhc3luYyAobGF0ZXN0VmVyc2lvbikgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vJHtsYXRlc3RWZXJzaW9ufS9kYXRhL2VuX1VTL2l0ZW0uanNvbmApO1xuICBjb25zdCBhbGxJdGVtcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICByZXR1cm4gYWxsSXRlbXMuZGF0YTtcbn07XG5cbmNsYXNzIEl0ZW1JbmZvIHtcbiAgc3RhdGljIGFzeW5jIGdldEFsbEl0ZW1zKGxhdGVzdFZlcnNpb24pIHtcbiAgICBjb25zdCBhbGxJdGVtcyA9IGZldGNoQWxsSXRlbXMobGF0ZXN0VmVyc2lvbik7XG4gICAgcmV0dXJuIGFsbEl0ZW1zO1xuICB9XG5cbiAgZ2V0SXRlbURldGFpbHMoYWxsSXRlbXMpIHtcbiAgICBjb25zdCBpdGVtRGV0YWlscyA9IGFsbEl0ZW1zW3RoaXMuaXRlbUlkXTtcbiAgICByZXR1cm4gaXRlbURldGFpbHM7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihpdGVtSWQsIGFsbEl0ZW1zLCBsYXRlc3RWZXJzaW9uKSB7XG4gICAgdGhpcy5pdGVtSWQgPSBpdGVtSWQ7XG4gICAgdGhpcy5pdGVtRGV0YWlscyA9IHRoaXMuZ2V0SXRlbURldGFpbHMoYWxsSXRlbXMpO1xuICAgIHRoaXMubGF0ZXN0VmVyc2lvbiA9IGxhdGVzdFZlcnNpb247XG4gIH1cblxuICBnZXRJdGVtSW1hZ2UoKSB7XG4gICAgY29uc3QgaXRlbUltYWdlSWQgPSB0aGlzLml0ZW1EZXRhaWxzLmltYWdlLmZ1bGw7XG4gICAgY29uc3QgaW1hZ2VVcmwgPSBgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLyR7dGhpcy5sYXRlc3RWZXJzaW9ufS9pbWcvaXRlbS8ke2l0ZW1JbWFnZUlkfWA7XG4gICAgcmV0dXJuIGltYWdlVXJsO1xuICB9XG5cbiAgLyogZ2V0cyBpbmZvIG9uIHRoZSBpdGVtcyB1c2VkIHRvIGNyZWF0ZSB0aGUgaW5zdGFuY2UgaXRlbSAqL1xuICBhc3luYyBnZXRDb21wb25lbnRJdGVtcyhhbGxJdGVtcykge1xuICAgIGNvbnN0IGNvbXBvbmVudEl0ZW1JZHMgPSB0aGlzLml0ZW1EZXRhaWxzLmZyb207XG4gICAgaWYgKGNvbXBvbmVudEl0ZW1JZHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBjb25zdCBjb21wb25lbnRJdGVtRGV0YWlscyA9IGNvbXBvbmVudEl0ZW1JZHMubWFwKChpdGVtSWQpID0+ICh7XG4gICAgICBuYW1lOiBhbGxJdGVtc1tpdGVtSWRdLm5hbWUsXG4gICAgICBpbWFnZVVybDogYGh0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi8ke3RoaXMubGF0ZXN0VmVyc2lvbn0vaW1nL2l0ZW0vJHtpdGVtSWR9LnBuZ2AsXG4gICAgICBjb3N0OiBhbGxJdGVtc1tpdGVtSWRdLmdvbGQudG90YWwsXG4gICAgfSkpO1xuICAgIHJldHVybiBjb21wb25lbnRJdGVtRGV0YWlscztcbiAgfVxuXG4gIGdldEl0ZW1JbmZvKGFsbEl0ZW1zKSB7XG4gICAgaWYgKHRoaXMuaXRlbURldGFpbHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXMuaXRlbURldGFpbHM7XG4gICAgY29uc3QgeyBkZXNjcmlwdGlvbiB9ID0gdGhpcy5pdGVtRGV0YWlscztcbiAgICBjb25zdCBjb3N0ID0gdGhpcy5pdGVtRGV0YWlscy5nb2xkLnRvdGFsO1xuICAgIGNvbnN0IGltYWdlVXJsID0gdGhpcy5nZXRJdGVtSW1hZ2UoYWxsSXRlbXMpO1xuICAgIGNvbnN0IGNvbXBvbmVudEl0ZW1zID0gdGhpcy5nZXRDb21wb25lbnRJdGVtcyhhbGxJdGVtcyk7XG4gICAgY29uc3QgeyB0YWdzIH0gPSB0aGlzLml0ZW1EZXRhaWxzO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGNvc3QsXG4gICAgICBpbWFnZVVybCxcbiAgICAgIGNvbXBvbmVudEl0ZW1zLFxuICAgICAgdGFncyxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW1JbmZvO1xuIiwiY29uc3QgRWxlbWVudENyZWF0aW9uID0gKCgpID0+IHtcbiAgY29uc3QgY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzID0gKHRhZywgY2xhc3NOYW1lLCBwYXJlbnRFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlQ2hpbGRFbGVtZW50V2l0aElkID0gKHRhZywgaWQsIHBhcmVudEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGVsZW1lbnQuaWQgPSBpZDtcbiAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzQW5kSWQgPSAodGFnLCBjbGFzc05hbWUsIGlkLCBwYXJlbnRFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICBlbGVtZW50LmlkID0gaWQ7XG4gICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzID0gKGNsYXNzTmFtZSwgcGFyZW50RWxlbWVudCwgc3JjLCBhbHQpID0+IHtcbiAgICBjb25zdCBpbWFnZUVsZW1lbnQgPSBjcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2ltZycsIGNsYXNzTmFtZSwgcGFyZW50RWxlbWVudCk7XG4gICAgaW1hZ2VFbGVtZW50LnNyYyA9IHNyYztcbiAgICBpbWFnZUVsZW1lbnQuYWx0ID0gYWx0O1xuXG4gICAgcmV0dXJuIGltYWdlRWxlbWVudDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcyxcbiAgICBjcmVhdGVDaGlsZEVsZW1lbnRXaXRoSWQsXG4gICAgY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzQW5kSWQsXG4gICAgY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBFbGVtZW50Q3JlYXRpb247XG4iLCJpbXBvcnQgeyByZW5kZXJIZWFkZXJEZXRhaWxzLCBpbWFnZXMgfSBmcm9tICcuL3JlbmRlckhlbHBlcnMnO1xuaW1wb3J0IEVsZW1lbnRDcmVhdGlvbiBmcm9tICcuLi9oZWxwZXJzL2VsZW1lbnRDcmVhdGlvbic7XG5cbmNvbnN0IGNoYW1waW9uRGV0YWlsc01vZGFsID0gYXN5bmMgKGNoYW1waW9uRGF0YSkgPT4ge1xuICByZW5kZXJIZWFkZXJEZXRhaWxzKGNoYW1waW9uRGF0YSwgJ21haW4nKTtcblxuICBjb25zdCBjaGFtcGlvblJvbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLXJvbGVzJyk7XG4gIGNvbnN0IHsgcm9sZXMgfSA9IGNoYW1waW9uRGF0YTtcbiAgcm9sZXMuZm9yRWFjaCgocm9sZSkgPT4ge1xuICAgIGNvbnN0IGNoYW1waW9uUm9sZSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdjaGFtcGlvbi1yb2xlJywgY2hhbXBpb25Sb2xlcyk7XG4gICAgY29uc3QgY2hhbXBpb25Sb2xlTmFtZSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnY2hhbXBpb24tcm9sZS1uYW1lJywgY2hhbXBpb25Sb2xlKTtcbiAgICBjaGFtcGlvblJvbGVOYW1lLnRleHRDb250ZW50ID0gcm9sZTtcbiAgICBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MoJ2NoYW1waW9uLXJvbGUtaW1hZ2UnLCBjaGFtcGlvblJvbGUsIGAke2ltYWdlc1tgJHtyb2xlfS5wbmdgXX1gLCByb2xlKTtcbiAgfSk7XG4gIC8qIFRoZSB0eXBlIG9mIHJlc291cmNlIHRoYXQgYSBjaGFtcGlvbiB1c2VzIGUuZy4gbWFuYSwgZW5lcmd5IGV0YyAqL1xuICBjb25zdCBjaGFtcGlvblJlc291cmNlID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2NoYW1waW9uLXJlc291cmNlJywgY2hhbXBpb25Sb2xlcyk7XG4gIGNvbnN0IHsgcmVzb3VyY2UgfSA9IGNoYW1waW9uRGF0YTtcbiAgY29uc3QgY2hhbXBpb25SZXNvdXJjZU5hbWUgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2NoYW1waW9uLXJlc291cmNlLW5hbWUnLCBjaGFtcGlvblJlc291cmNlKTtcbiAgY2hhbXBpb25SZXNvdXJjZU5hbWUudGV4dENvbnRlbnQgPSByZXNvdXJjZTtcbiAgRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzKCdjaGFtcGlvbi1yZXNvdXJjZS1pbWFnZScsIGNoYW1waW9uUmVzb3VyY2UsIGAke2ltYWdlc1tgJHtyZXNvdXJjZX0ucG5nYF19YCwgcmVzb3VyY2UpO1xuXG4gIC8qIENyZWF0ZXMgdGhlIG1haW4gY29udGVudCBvZiB0aGUgbWFpbiBtb2RhbCAqL1xuICBjb25zdCBsb3JlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvcmUtY29udGFpbmVyJyk7XG4gIGNvbnN0IGNoYW1waW9uTG9yZSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnY2hhbXBpb24tbG9yZScsIGxvcmVDb250YWluZXIpO1xuICBjaGFtcGlvbkxvcmUuaW5uZXJIVE1MID0gY2hhbXBpb25EYXRhLmxvcmU7XG5cbiAgY29uc3QgYWJpbGl0aWVzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFiaWxpdGllcy1jb250YWluZXInKTtcbiAgY29uc3QgYWJpbGl0eURldGFpbHMgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnYWJpbGl0eS1kZXRhaWxzJywgYWJpbGl0aWVzQ29udGFpbmVyKTtcbiAgY29uc3QgYWJpbGl0eUltZ3MgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnYWJpbGl0eS1pbWdzJywgYWJpbGl0eURldGFpbHMpO1xuICBjb25zdCBwYXNzaXZlSW1nID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzKFxuICAgICdzcGVsbC1pbWcgY2xpY2tlZCcsIGFiaWxpdHlJbWdzLCBjaGFtcGlvbkRhdGEucGFzc2l2ZS5wYXNzaXZlSW1nVXJsLCBjaGFtcGlvbkRhdGEucGFzc2l2ZS5wYXNzaXZlTmFtZSxcbiAgKTtcbiAgcGFzc2l2ZUltZy5pZCA9ICdwYXNzaXZlLWltZyc7XG5cbiAgY29uc3QgaW1nTGFiZWwgPSBbJ1EnLCAnVycsICdFJywgJ1InXTtcbiAgbGV0IGluZGV4ID0gMDtcblxuICBjaGFtcGlvbkRhdGEuc3BlbGxzLmZvckVhY2goKHNwZWxsKSA9PiB7XG4gICAgY29uc3Qgc3BlbGxJbWcgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAnc3BlbGwtaW1nJywgYWJpbGl0eUltZ3MsIHNwZWxsLmltZ1VybCwgc3BlbGwubmFtZSxcbiAgICApO1xuICAgIC8vIEdyYWJzIGxldHRlciBRLCBXLCBFIG9yIFIgd2hpY2ggdW5pcXVlbHkgaWRlbnRpZmllcyBhIGNoYW1waW9ucyBhYmlsaXRpZXNcbiAgICBzcGVsbEltZy5pZCA9IGAke2ltZ0xhYmVsW2luZGV4XX0taW1nYDtcbiAgICBpbmRleCArPSAxO1xuICB9KTtcblxuICAvKiBsb29wcyB0aHJvdWdoIGNoYW1waW9uJ3MgcGFzc2l2ZSBhbmQgNCBhYmlsaXRpZXMgKi9cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpICs9IDEpIHtcbiAgICBjb25zdCBhYmlsaXR5SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGFiaWxpdHlOYW1lID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdhYmlsaXR5LW5hbWUnLCBhYmlsaXR5SW5mbyk7XG4gICAgY29uc3QgYWJpbGl0eURlc2NyaXB0aW9uID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdhYmlsaXR5LWRlc2NyaXB0aW9uJywgYWJpbGl0eUluZm8pO1xuICAgIGNvbnN0IGFiaWxpdHlMYWJlbCA9IFsnUGFzc2l2ZScsICdRJywgJ1cnLCAnRScsICdSJ107XG5cbiAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgYWJpbGl0eUluZm8uY2xhc3NOYW1lID0gJ2FiaWxpdHktaW5mbyBhY3RpdmUnO1xuICAgICAgYWJpbGl0eUluZm8uaWQgPSAncGFzc2l2ZS1hYmlsaXR5JztcbiAgICAgIGFiaWxpdHlOYW1lLnRleHRDb250ZW50ID0gYCR7Y2hhbXBpb25EYXRhLnBhc3NpdmUucGFzc2l2ZU5hbWV9ICgke2FiaWxpdHlMYWJlbFtpXX0pYDtcbiAgICAgIGFiaWxpdHlEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBjaGFtcGlvbkRhdGEucGFzc2l2ZS5wYXNzaXZlRGVzY3JpcHRpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvb2xkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgY29vbGRvd24uY2xhc3NOYW1lID0gJ2FiaWxpdHktY29vbGRvd24nO1xuICAgICAgY29vbGRvd24udGV4dENvbnRlbnQgPSBgQ29vbGRvd246ICR7Y2hhbXBpb25EYXRhLnNwZWxsc1tpIC0gMV0uY29vbGRvd259IHNlY29uZHNgO1xuICAgICAgYWJpbGl0eUluZm8uYXBwZW5kQ2hpbGQoY29vbGRvd24pO1xuXG4gICAgICBhYmlsaXR5SW5mby5jbGFzc05hbWUgPSAnYWJpbGl0eS1pbmZvJztcbiAgICAgIGFiaWxpdHlJbmZvLmlkID0gYCR7YWJpbGl0eUxhYmVsW2ldfS1hYmlsaXR5YDtcbiAgICAgIGFiaWxpdHlOYW1lLnRleHRDb250ZW50ID0gYCR7Y2hhbXBpb25EYXRhLnNwZWxsc1tpIC0gMV0ubmFtZX0gKCR7YWJpbGl0eUxhYmVsW2ldfSlgO1xuICAgICAgYWJpbGl0eURlc2NyaXB0aW9uLmlubmVySFRNTCA9IGNoYW1waW9uRGF0YS5zcGVsbHNbaSAtIDFdLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGFiaWxpdHlEZXRhaWxzLmFwcGVuZENoaWxkKGFiaWxpdHlJbmZvKTtcbiAgfVxuXG4gIGNvbnN0IGNoYW1waW9uVGlwc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tdGlwcy1zZWN0aW9uJyk7XG4gIGNvbnN0IGNoYW1waW9uVGlwcyA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdjaGFtcGlvbi10aXBzJywgY2hhbXBpb25UaXBzU2VjdGlvbik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAyICYmIGkgPCBjaGFtcGlvbkRhdGEudGlwcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGNoYW1waW9uVGlwID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdjaGFtcGlvbi10aXAnLCBjaGFtcGlvblRpcHMpO1xuICAgIGNoYW1waW9uVGlwLnRleHRDb250ZW50ID0gYCR7Y2hhbXBpb25EYXRhLnRpcHNbaV19YDtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2hhbXBpb25EZXRhaWxzTW9kYWw7XG4iLCJpbXBvcnQgRWxlbWVudENyZWF0aW9uIGZyb20gJy4uL2hlbHBlcnMvZWxlbWVudENyZWF0aW9uJztcblxuY29uc3QgY2hhbXBpb25Ta2luc01vZGFsID0gYXN5bmMgKGNoYW1waW9uRGV0YWlscykgPT4ge1xuICBjb25zdCB7IHNraW5zIH0gPSBjaGFtcGlvbkRldGFpbHM7XG4gIGNvbnN0IHNraW5zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NraW5zLWNvbnRhaW5lcicpO1xuICBjb25zdCBza2luTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5za2luLW5hbWUnKTtcbiAgY29uc3Qgc2tpbkltYWdlc0NvbnRhaW5lciA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdza2luLWltYWdlcy1jb250YWluZXInLCBza2luc0NvbnRhaW5lcik7XG5cbiAgc2tpbnMuZm9yRWFjaCgoc2tpbikgPT4ge1xuICAgIGlmIChza2luLm51bSA9PT0gMCkge1xuICAgICAgY29uc3Qgc2hvd25JbWFnZUNvbnRhaW5lciA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3NBbmRJZChcbiAgICAgICAgJ2RpdicsICdza2luLWltYWdlLWNvbnRhaW5lciBzaG93bicsIGBEZWZhdWx0ICR7Y2hhbXBpb25EZXRhaWxzLm5hbWV9YCwgc2tpbkltYWdlc0NvbnRhaW5lcixcbiAgICAgICk7XG4gICAgICBza2luTmFtZS50ZXh0Q29udGVudCA9IGBEZWZhdWx0ICR7Y2hhbXBpb25EZXRhaWxzLm5hbWV9YDtcbiAgICAgIGNvbnN0IHNob3duSW1hZ2VVcmwgPSBgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuL2ltZy9jaGFtcGlvbi9zcGxhc2gvJHtjaGFtcGlvbkRldGFpbHMuaWR9XyR7c2tpbi5udW19LmpwZ2A7XG4gICAgICBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MoJ3NraW4taW1hZ2UnLCBzaG93bkltYWdlQ29udGFpbmVyLCBzaG93bkltYWdlVXJsLCAnZGVmYXVsdCBza2luJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGltYWdlQ29udGFpbmVyID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCAnc2tpbi1pbWFnZS1jb250YWluZXInLCBza2luLm5hbWUsIHNraW5JbWFnZXNDb250YWluZXIpO1xuICAgICAgY29uc3QgaW1hZ2VVcmwgPSBgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuL2ltZy9jaGFtcGlvbi9zcGxhc2gvJHtjaGFtcGlvbkRldGFpbHMuaWR9XyR7c2tpbi5udW19LmpwZ2A7XG4gICAgICBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MoJ3NraW4taW1hZ2UnLCBpbWFnZUNvbnRhaW5lciwgaW1hZ2VVcmwsIHNraW4ubmFtZSk7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNoYW1waW9uU2tpbnNNb2RhbDtcbiIsImltcG9ydCBJdGVtSW5mbyBmcm9tICcuLi9jaGFtcGlvbkRhdGEvaXRlbUluZm8nO1xuaW1wb3J0IHtcbiAgcmVuZGVySGVhZGVyRGV0YWlscyxcbiAgcmVuZGVyU3RhdE92ZXJ2aWV3LFxuICByZW5kZXJEYW1hZ2VTdGF0cyxcbiAgcmVuZGVyQ2hhbXBpb25MYW5lLFxuICByZW5kZXJNYXRjaHVwc0luZm8sXG59IGZyb20gJy4vcmVuZGVySGVscGVycyc7XG5pbXBvcnQgRWxlbWVudENyZWF0aW9uIGZyb20gJy4uL2hlbHBlcnMvZWxlbWVudENyZWF0aW9uJztcblxuY29uc3QgY2hhbXBpb25TdGF0c01vZGFsID0gYXN5bmMgKGNoYW1waW9uRGF0YSwgY2hhbXBpb25TdGF0cywgbGF0ZXN0VmVyc2lvbikgPT4ge1xuICByZW5kZXJIZWFkZXJEZXRhaWxzKGNoYW1waW9uRGF0YSwgJ3N0YXRzJyk7XG5cbiAgY29uc3Qgc3RhdHNPdmVydmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbi1zdGF0cy1vdmVydmlldycpO1xuXG4gIHJlbmRlclN0YXRPdmVydmlldyhzdGF0c092ZXJ2aWV3LCAnV2luIFJhdGUnLCBjaGFtcGlvblN0YXRzLndpblJhdGUpO1xuICByZW5kZXJTdGF0T3ZlcnZpZXcoc3RhdHNPdmVydmlldywgJ1BpY2sgUmF0ZScsIGNoYW1waW9uU3RhdHMucGlja1JhdGUpO1xuICAvKiBNYWtlIGV2ZXJ5IGxldHRlciBleGNlcHQgdGhlIGZpcnN0IGxvd2VyIGNhc2UgKi9cbiAgY29uc3QgbGFuZSA9IGAke2NoYW1waW9uU3RhdHMubGFuZVswXSArIGNoYW1waW9uU3RhdHMubGFuZS5zdWJzdHJpbmcoMSkudG9Mb3dlckNhc2UoKX1gO1xuICByZW5kZXJDaGFtcGlvbkxhbmUoc3RhdHNPdmVydmlldywgbGFuZSk7XG5cbiAgLyogU2V0cyB0aGUgdmFsdWVzIGFuZCBwZXJjZW50YWdlcyBmb3IgdGhlIGF2ZXJhZ2UgZGFtYWdlIHNlY3Rpb24gb2YgdGhlIHN0YXRzIG1vZGFsICovXG5cbiAgY29uc3QgdHJ1ZURhbWFnZUNpcmNsZVN0cm9rZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cnVlLWRhbWFnZS1zdHJva2UnKTtcbiAgY29uc3QgcGh5c2ljYWxEYW1hZ2VDaXJjbGVTdHJva2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGh5c2ljYWwtZGFtYWdlLXN0cm9rZScpO1xuICBjb25zdCBtYWdpY0RhbWFnZUNpcmNsZVN0cm9rZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWdpYy1kYW1hZ2Utc3Ryb2tlJyk7XG5cbiAgY29uc3QgdHJ1ZURhbWFnZVBlcmNlbnQgPSBNYXRoLnJvdW5kKGNoYW1waW9uU3RhdHMuZGFtYWdlUGVyTWF0Y2gudHJ1ZURhbWFnZS5wZXJjZW50YWdlKTtcbiAgY29uc3QgcGh5c2ljYWxEYW1hZ2VQZXJjZW50ID0gTWF0aC5yb3VuZChjaGFtcGlvblN0YXRzLmRhbWFnZVBlck1hdGNoLnBoeXNpY2FsRGFtYWdlLnBlcmNlbnRhZ2UpO1xuICBjb25zdCBtYWdpY0RhbWFnZVBlcmNlbnQgPSBNYXRoLnJvdW5kKGNoYW1waW9uU3RhdHMuZGFtYWdlUGVyTWF0Y2gubWFnaWNEYW1hZ2UucGVyY2VudGFnZSk7XG5cbiAgdHJ1ZURhbWFnZUNpcmNsZVN0cm9rZS5zdHlsZS5zdHJva2VEYXNoYXJyYXkgPSBgJHt0cnVlRGFtYWdlUGVyY2VudH0gMTAwYDtcbiAgcGh5c2ljYWxEYW1hZ2VDaXJjbGVTdHJva2Uuc3R5bGUuc3Ryb2tlRGFzaGFycmF5ID0gYCR7cGh5c2ljYWxEYW1hZ2VQZXJjZW50ICsgdHJ1ZURhbWFnZVBlcmNlbnR9IDEwMGA7XG4gIG1hZ2ljRGFtYWdlQ2lyY2xlU3Ryb2tlLnN0eWxlLnN0cm9rZURhc2hhcnJheSA9ICcxMDAsIDEwMCc7XG4gIGNvbnN0IHRvdGFsRGFtYWdlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3RhbC1kYW1hZ2UtdGV4dCcpO1xuICB0b3RhbERhbWFnZVRleHQudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKGNoYW1waW9uU3RhdHMuZGFtYWdlUGVyTWF0Y2gudG90YWxEYW1hZ2UudmFsdWUpO1xuXG4gIGNvbnN0IHRydWVEYW1hZ2VWYWx1ZSA9IE1hdGgucm91bmQoY2hhbXBpb25TdGF0cy5kYW1hZ2VQZXJNYXRjaC50cnVlRGFtYWdlLnZhbHVlKTtcbiAgY29uc3QgcGh5c2ljYWxEYW1hZ2VWYWx1ZSA9IE1hdGgucm91bmQoY2hhbXBpb25TdGF0cy5kYW1hZ2VQZXJNYXRjaC5waHlzaWNhbERhbWFnZS52YWx1ZSk7XG4gIGNvbnN0IG1hZ2ljRGFtYWdlVmFsdWUgPSBNYXRoLnJvdW5kKGNoYW1waW9uU3RhdHMuZGFtYWdlUGVyTWF0Y2gubWFnaWNEYW1hZ2UudmFsdWUpO1xuXG4gIHJlbmRlckRhbWFnZVN0YXRzKCdwaHlzaWNhbCcsIHBoeXNpY2FsRGFtYWdlVmFsdWUsIHBoeXNpY2FsRGFtYWdlUGVyY2VudCk7XG4gIHJlbmRlckRhbWFnZVN0YXRzKCdtYWdpYycsIG1hZ2ljRGFtYWdlVmFsdWUsIG1hZ2ljRGFtYWdlUGVyY2VudCk7XG4gIHJlbmRlckRhbWFnZVN0YXRzKCd0cnVlJywgdHJ1ZURhbWFnZVZhbHVlLCB0cnVlRGFtYWdlUGVyY2VudCk7XG5cbiAgLyogUmVuZGVycyB0aGUgaXRlbSBidWlsZHMgc2VjdGlvbiBvZiB0aGUgc3RhdHMgbW9kYWwgKi9cbiAgY29uc3QgeyBpdGVtU2V0cyB9ID0gY2hhbXBpb25TdGF0cztcbiAgY29uc3QgYWxsSXRlbXMgPSBhd2FpdCBJdGVtSW5mby5nZXRBbGxJdGVtcyhsYXRlc3RWZXJzaW9uKTtcbiAgY29uc3QgY2hhbXBpb25JdGVtQnVpbGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLWl0ZW0tYnVpbGRzJyk7XG4gIGNvbnN0IGl0ZW1TZXRzQ29udGFpbmVyID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2l0ZW0tc2V0cy1jb250YWluZXInLCBjaGFtcGlvbkl0ZW1CdWlsZHMpO1xuXG4gIGl0ZW1TZXRzLmZvckVhY2goKGl0ZW1TZXQpID0+IHtcbiAgICBjb25zdCBpdGVtU2V0Q29udGFpbmVyID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2l0ZW0tc2V0LWNvbnRhaW5lcicsIGl0ZW1TZXRzQ29udGFpbmVyKTtcblxuICAgIGl0ZW1TZXQuZm9yRWFjaCgoaXRlbUlkKSA9PiB7XG4gICAgICBjb25zdCBpdGVtID0gbmV3IEl0ZW1JbmZvKGl0ZW1JZCwgYWxsSXRlbXMsIGxhdGVzdFZlcnNpb24pO1xuICAgICAgY29uc3QgaXRlbUluZm8gPSBpdGVtLmdldEl0ZW1JbmZvKGFsbEl0ZW1zKTtcbiAgICAgIGlmIChpdGVtSW5mbyAmJiAhaXRlbUluZm8udGFncy5pbmNsdWRlcygnVHJpbmtldCcpICYmICFpdGVtSW5mby50YWdzLmluY2x1ZGVzKCdDb25zdW1hYmxlJykpIHtcbiAgICAgICAgY29uc3QgbWFpbkNvbXBvbmVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtYWluQ29tcG9uZW50Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdtYWluLWNvbXBvbmVudC1jb250YWluZXInO1xuICAgICAgICBpdGVtU2V0Q29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5Db21wb25lbnRDb250YWluZXIpO1xuXG4gICAgICAgIGNvbnN0IG1haW5JdGVtID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ21haW4taXRlbScsIG1haW5Db21wb25lbnRDb250YWluZXIpO1xuXG4gICAgICAgIEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEltYWdlRWxlbWVudFdpdGhDbGFzcygnaXRlbS1pbWcnLCBtYWluSXRlbSwgaXRlbUluZm8uaW1hZ2VVcmwsIGAke2l0ZW1JZH0ucG5nYCk7XG5cbiAgICAgICAgY29uc3QgaXRlbURldGFpbHNDb250YWluZXIgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnaXRlbS1kZXRhaWxzLWNvbnRhaW5lcicsIG1haW5JdGVtKTtcblxuICAgICAgICBjb25zdCBuYW1lRWxlbWVudCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnaXRlbS1uYW1lJywgaXRlbURldGFpbHNDb250YWluZXIpO1xuICAgICAgICBuYW1lRWxlbWVudC50ZXh0Q29udGVudCA9IGl0ZW1JbmZvLm5hbWU7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uRWxlbWVudCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnaXRlbS1kZXNjcmlwdGlvbicsIGl0ZW1EZXRhaWxzQ29udGFpbmVyKTtcbiAgICAgICAgZGVzY3JpcHRpb25FbGVtZW50LmlubmVySFRNTCA9IGl0ZW1JbmZvLmRlc2NyaXB0aW9uO1xuICAgICAgICBjb25zdCBpdGVtQ29zdCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdpdGVtLWNvc3QnLCBpdGVtRGV0YWlsc0NvbnRhaW5lcik7XG4gICAgICAgIGNvbnN0IGNvc3RMYWJlbCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnY29zdC1sYWJlbCcsIGl0ZW1Db3N0KTtcbiAgICAgICAgY29zdExhYmVsLnRleHRDb250ZW50ID0gJ0dvbGQ6ICc7XG4gICAgICAgIGNvbnN0IGNvc3RBbW91bnQgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2Nvc3QtYW1vdW50JywgaXRlbUNvc3QpO1xuICAgICAgICBjb3N0QW1vdW50LnRleHRDb250ZW50ID0gaXRlbUluZm8uY29zdDtcblxuICAgICAgICAvKiBUaGUgY29tcG9uZW50IGl0ZW1zIGFyZSB0aGUgc21hbGxlciBpdGVtcyB0aGF0IGFwcGVhciBiZWxvdyB0aGUgbWFpbiBpdGVtICovXG4gICAgICAgIGNvbnN0IHsgY29tcG9uZW50SXRlbXMgfSA9IGl0ZW1JbmZvO1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoY29tcG9uZW50SXRlbXMpXG4gICAgICAgICAgLnRoZW4oKGl0ZW1zKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb21wb25lbnRJdGVtc0NvbnRhaW5lciA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdjb21wb25lbnQtaXRlbXMtY29udGFpbmVyJywgbWFpbkNvbXBvbmVudENvbnRhaW5lcik7XG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKChjb21wb25lbnRJdGVtKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudEl0ZW1FbGVtZW50ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2NvbXBvbmVudC1pdGVtJywgY29tcG9uZW50SXRlbXNDb250YWluZXIpO1xuICAgICAgICAgICAgICBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAgICAgICAgICAgJ2NvbXBvbmVudC1pdGVtLWltZycsIGNvbXBvbmVudEl0ZW1FbGVtZW50LCBjb21wb25lbnRJdGVtLmltYWdlVXJsLCBgJHtjb21wb25lbnRJdGVtLm5hbWV9YCxcbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRJdGVtRGV0YWlsc0NvbnRhaW5lciA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdjb21wb25lbnQtaXRlbS1kZXRhaWxzLWNvbnRhaW5lcicsIGNvbXBvbmVudEl0ZW1FbGVtZW50KTtcblxuICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRJdGVtTmFtZSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnY29tcG9uZW50LWl0ZW0tbmFtZScsIGNvbXBvbmVudEl0ZW1EZXRhaWxzQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgY29tcG9uZW50SXRlbU5hbWUudGV4dENvbnRlbnQgPSBjb21wb25lbnRJdGVtLm5hbWU7XG4gICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudEl0ZW1Db3N0ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2NvbXBvbmVudC1pdGVtLWNvc3QnLCBjb21wb25lbnRJdGVtRGV0YWlsc0NvbnRhaW5lcik7XG4gICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudEl0ZW1Db3N0TGFiZWwgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2NvbXBvbmVudC1pdGVtLWNvc3QtbGFiZWwnLCBjb21wb25lbnRJdGVtQ29zdCk7XG4gICAgICAgICAgICAgIGNvbXBvbmVudEl0ZW1Db3N0TGFiZWwudGV4dENvbnRlbnQgPSAnR29sZDogJztcbiAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50SXRlbUFtb3VudCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnY29tcG9uZW50LWl0ZW0tYW1vdW50JywgY29tcG9uZW50SXRlbUNvc3QpO1xuICAgICAgICAgICAgICBjb21wb25lbnRJdGVtQW1vdW50LnRleHRDb250ZW50ID0gY29tcG9uZW50SXRlbS5jb3N0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICAvKiBSZW5kZXJzIHRoZSBtYXRjaHVwcyBzZWN0aW9uIG9mIHRoZSBjaGFtcGlvbiBtb2RhbCBzdGF0cyBwYWdlICovXG4gIGNvbnN0IGJlc3RNYXRjaHVwc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmVzdC1tYXRjaHVwcy1zZWN0aW9uJyk7XG4gIGNvbnN0IGJlc3RNYXRjaHVwc0VsZW1lbnQgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnYmVzdC1tYXRjaHVwcyBtYXRjaHVwcycsIGJlc3RNYXRjaHVwc1NlY3Rpb24pO1xuICBjb25zdCBiZXN0TWF0Y2h1cHNEYXRhID0gY2hhbXBpb25TdGF0cy5iZXN0TWF0Y2hVcHM7XG4gIHJlbmRlck1hdGNodXBzSW5mbyhiZXN0TWF0Y2h1cHNFbGVtZW50LCBiZXN0TWF0Y2h1cHNEYXRhLCBsYXRlc3RWZXJzaW9uKTtcblxuICBjb25zdCB3b3JzdE1hdGNodXBzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53b3JzdC1tYXRjaHVwcy1zZWN0aW9uJyk7XG4gIGNvbnN0IHdvcnN0TWF0Y2h1cHNFbGVtZW50ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ3dvcnN0LW1hdGNodXBzIG1hdGNodXBzJywgd29yc3RNYXRjaHVwc1NlY3Rpb24pO1xuICBjb25zdCB3b3JzdE1hdGNodXBzRGF0YSA9IGNoYW1waW9uU3RhdHMud29yc3RNYXRjaFVwcztcbiAgcmVuZGVyTWF0Y2h1cHNJbmZvKHdvcnN0TWF0Y2h1cHNFbGVtZW50LCB3b3JzdE1hdGNodXBzRGF0YSwgbGF0ZXN0VmVyc2lvbik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjaGFtcGlvblN0YXRzTW9kYWw7XG4iLCJpbXBvcnQgRWxlbWVudENyZWF0aW9uIGZyb20gJy4uL2hlbHBlcnMvZWxlbWVudENyZWF0aW9uJztcblxuY29uc3QgaW1wb3J0QWxsID0gKHIpID0+IHtcbiAgY29uc3QgaW1hZ2VzID0ge307XG4gIHIua2V5cygpLmZvckVhY2goKGl0ZW0pID0+IHsgaW1hZ2VzW2l0ZW0ucmVwbGFjZSgnLi8nLCAnJyldID0gcihpdGVtKTsgfSk7XG4gIHJldHVybiBpbWFnZXM7XG59O1xuXG5jb25zdCBpbWFnZXMgPSBpbXBvcnRBbGwocmVxdWlyZS5jb250ZXh0KCcuLi9hc3NldHMvaW1hZ2VzJywgZmFsc2UsIC9cXC4ocG5nfGpwZT9nfHN2ZykkLykpO1xuXG5jb25zdCByZW5kZXJIZWFkZXJEZXRhaWxzID0gKGNoYW1waW9uRGF0YSwgbW9kYWxDb250YWluZXIpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7bW9kYWxDb250YWluZXJ9LWNvbnRhaW5lcmApO1xuICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZCA9IGBuby1yZXBlYXQgdXJsKGh0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi9pbWcvY2hhbXBpb24vc3BsYXNoLyR7Y2hhbXBpb25EYXRhLmlkfV8wLmpwZykgNzAlIDgwJWA7XG4gIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb3Zlcic7XG5cbiAgY29uc3QgY2hhbXBpb25UaXRsZSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tdGl0bGUnKTtcbiAgY2hhbXBpb25UaXRsZS50ZXh0Q29udGVudCA9IGNoYW1waW9uRGF0YS50aXRsZTtcblxuICBjb25zdCBjaGFtcGlvbk5hbWUgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLW5hbWUnKTtcbiAgY2hhbXBpb25OYW1lLnRleHRDb250ZW50ID0gY2hhbXBpb25EYXRhLm5hbWU7XG59O1xuXG4vKiBSZW5kZXJzIHdpbiBvciBwaWNrIHJhdGUgdG8gdGhlIERPTSAqL1xuY29uc3QgcmVuZGVyU3RhdE92ZXJ2aWV3ID0gKHN0YXRzT3ZlcnZpZXcsIHJhdGVUZXh0LCByYXRlVHlwZSkgPT4ge1xuICBjb25zdCBjaGFtcGlvblJhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNvbnN0IHJhdGVWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAvKiBUdXJucyAnV2luIFJhdGUnIGludG8gJ3dpbi1yYXRlJyAqL1xuICBjb25zdCBsb3dlckNhc2VUZXh0ID0gcmF0ZVRleHQucmVwbGFjZSgnICcsICctJykudG9Mb3dlckNhc2UoKTtcblxuICBjaGFtcGlvblJhdGUuY2xhc3NOYW1lID0gbG93ZXJDYXNlVGV4dDtcbiAgbGFiZWwuaWQgPSBgJHtsb3dlckNhc2VUZXh0fS1sYWJlbGA7XG4gIGxhYmVsLmNsYXNzTmFtZSA9ICdsYWJlbCc7XG4gIHJhdGVWYWx1ZS5jbGFzc05hbWUgPSBgJHtsb3dlckNhc2VUZXh0fS12YWx1ZWA7XG4gIGxhYmVsLnRleHRDb250ZW50ID0gcmF0ZVRleHQ7XG4gIHJhdGVWYWx1ZS50ZXh0Q29udGVudCA9IGAke3JhdGVUeXBlfSVgO1xuXG4gIGNoYW1waW9uUmF0ZS5hcHBlbmRDaGlsZChsYWJlbCk7IGNoYW1waW9uUmF0ZS5hcHBlbmRDaGlsZChyYXRlVmFsdWUpO1xuICBzdGF0c092ZXJ2aWV3LmFwcGVuZENoaWxkKGNoYW1waW9uUmF0ZSk7XG59O1xuXG5jb25zdCByZW5kZXJDaGFtcGlvbkxhbmUgPSAoc3RhdHNPdmVydmlldywgbGFuZSkgPT4ge1xuICBjb25zdCBjaGFtcGlvbkxhbmVJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNoYW1waW9uTGFuZUluZm8uY2xhc3NOYW1lID0gJ2xhbmUtaW5mbyc7XG4gIGNvbnN0IGxhbmVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBsYW5lVGV4dC5jbGFzc05hbWUgPSAnbGFuZS10ZXh0IGxhYmVsJztcbiAgbGFuZVRleHQudGV4dENvbnRlbnQgPSBsYW5lO1xuICBjb25zdCBsYW5lSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBsYW5lSWNvbi5jbGFzc05hbWUgPSAnbGFuZS1pY29uIGNoYW1waW9uLXJvbGUtaW1hZ2UnO1xuICBsYW5lSWNvbi5zcmMgPSBgJHtpbWFnZXNbYCR7bGFuZX0ucG5nYF19YDtcbiAgbGFuZUljb24uYWx0ID0gYCR7bGFuZX0ucG5nYDtcbiAgY2hhbXBpb25MYW5lSW5mby5hcHBlbmRDaGlsZChsYW5lVGV4dCk7XG4gIGNoYW1waW9uTGFuZUluZm8uYXBwZW5kQ2hpbGQobGFuZUljb24pO1xuICBzdGF0c092ZXJ2aWV3LmFwcGVuZENoaWxkKGNoYW1waW9uTGFuZUluZm8pO1xufTtcblxuY29uc3QgcmVuZGVyRGFtYWdlU3RhdHMgPSAoZGFtYWdlVHlwZSwgZGFtYWdlVmFsdWUsIGRhbWFnZVBlcmNlbnRhZ2UpID0+IHtcbiAgY29uc3QgZGFtYWdlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZGFtYWdlVHlwZX0tZGFtYWdlLWNvbnRhaW5lcmApO1xuXG4gIGNvbnN0IGRhbWFnZVN0YXRzID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2RhbWFnZS1zdGF0cycsIGRhbWFnZUNvbnRhaW5lcik7XG5cbiAgY29uc3QgZGFtYWdlVmFsdWVFbGVtZW50ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhJZCgnc3BhbicsIGAke2RhbWFnZVR5cGV9LXZhbHVlYCwgZGFtYWdlU3RhdHMpO1xuICBjb25zdCBkYW1hZ2VQZXJjZW50YWdlRWxlbWVudCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoSWQoJ3NwYW4nLCBgJHtkYW1hZ2VUeXBlfS1wZXJjZW50YWdlYCwgZGFtYWdlU3RhdHMpO1xuICBkYW1hZ2VWYWx1ZUVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtkYW1hZ2VWYWx1ZX1gO1xuICBkYW1hZ2VQZXJjZW50YWdlRWxlbWVudC50ZXh0Q29udGVudCA9IGAke2RhbWFnZVBlcmNlbnRhZ2V9JWA7XG59O1xuXG5jb25zdCByZW5kZXJNYXRjaHVwc0luZm8gPSAobWF0Y2h1cHNFbGVtZW50LCBtYXRjaHVwc0RhdGEsIGxhdGVzdFZlcnNpb24pID0+IHtcbiAgbWF0Y2h1cHNEYXRhLmZvckVhY2goKG1hdGNodXApID0+IHtcbiAgICBjb25zdCBtYXRjaHVwSW5mbyA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdtYXRjaHVwLWluZm8nLCBtYXRjaHVwc0VsZW1lbnQpO1xuICAgIGNvbnN0IGVuZW15Q2hhbXBpb25OYW1lID0gbWF0Y2h1cFsxXS5uYW1lO1xuICAgIGNvbnN0IGVuZW15Q2hhbXBpb25JZCA9IG1hdGNodXBbMF07XG4gICAgY29uc3QgZW5lbXlDaGFtcGlvbkltZ1VybCA9IGBodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vJHtsYXRlc3RWZXJzaW9ufS9pbWcvY2hhbXBpb24vJHtlbmVteUNoYW1waW9uSWR9LnBuZ2A7XG4gICAgRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzKFxuICAgICAgJ2VuZW15LWNoYW1waW9uLWltZycsIG1hdGNodXBJbmZvLCBlbmVteUNoYW1waW9uSW1nVXJsLCBgc21hbGwtJHtlbmVteUNoYW1waW9uSWR9YCxcbiAgICApO1xuXG4gICAgY29uc3QgbWF0Y2h1cFN0YXRzID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ21hdGNodXAtc3RhdHMnLCBtYXRjaHVwSW5mbyk7XG4gICAgY29uc3QgZW5lbXlDaGFtcGlvbk5hbWVFbGVtZW50ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdlbmVteS1jaGFtcGlvbi1uYW1lJywgbWF0Y2h1cFN0YXRzKTtcbiAgICBlbmVteUNoYW1waW9uTmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSBlbmVteUNoYW1waW9uTmFtZTtcbiAgICBjb25zdCB3aW5yYXRlQWdhaW5zdCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICd3aW5yYXRlLWFnYWluc3QnLCBtYXRjaHVwU3RhdHMpO1xuICAgIGNvbnN0IHdpbnJhdGVBZ2FpbnN0TGFiZWwgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ3dpbnJhdGUtYWdhaW5zdC1sYWJlbCcsIHdpbnJhdGVBZ2FpbnN0KTtcbiAgICB3aW5yYXRlQWdhaW5zdExhYmVsLnRleHRDb250ZW50ID0gJ1dpbnJhdGU6ICc7XG4gICAgY29uc3QgY29sb3IgPSBtYXRjaHVwc0VsZW1lbnQuY2xhc3NOYW1lID09PSAnYmVzdC1tYXRjaHVwcyBtYXRjaHVwcycgPyAnYmx1ZScgOiAncmVkJztcbiAgICBjb25zdCB3aW5yYXRlQWdhaW5zdFBlcmNlbnRhZ2UgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgYHdpbnJhdGUtYWdhaW5zdC1wZXJjZW50YWdlICR7Y29sb3J9YCwgd2lucmF0ZUFnYWluc3QpO1xuICAgIHdpbnJhdGVBZ2FpbnN0UGVyY2VudGFnZS50ZXh0Q29udGVudCA9IGAke21hdGNodXBbMV0ud2luUmF0ZUFnYWluc3QudG9GaXhlZCgwKX0lYDtcbiAgICBjb25zdCBnYW1lc1BsYXllZEFnYWluc3QgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2dhbWVzLXBsYXllZC1hZ2FpbnN0JywgbWF0Y2h1cFN0YXRzKTtcbiAgICBnYW1lc1BsYXllZEFnYWluc3QudGV4dENvbnRlbnQgPSBgR2FtZXM6ICR7bWF0Y2h1cFsxXS5tYXRjaGVzfWA7XG4gIH0pO1xufTtcblxuY29uc3QgY3JlYXRlQ2hhbXBpb25Db250YWluZXIgPSAoY2hhbXBpb24sIGNoYW1waW9uc1NlY3Rpb24pID0+IHtcbiAgY29uc3QgY2hhbXBpb25Db250YWluZXIgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnY2hhbXBpb24tY29udGFpbmVyIHNob3duJywgY2hhbXBpb25zU2VjdGlvbik7XG4gIGNvbnN0IGNoYW1waW9uSWQgPSBjaGFtcGlvbi5pZCA/IGNoYW1waW9uLmlkIDogY2hhbXBpb24uY2hhbXBpb25OYW1lO1xuICBjaGFtcGlvbkNvbnRhaW5lci5kYXRhc2V0LmlkID0gY2hhbXBpb25JZDtcbiAgY29uc3QgY2hhbXBpb25JbWdVcmwgPSBgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuL2ltZy9jaGFtcGlvbi9sb2FkaW5nLyR7Y2hhbXBpb25JZH1fMC5qcGdgO1xuICBjb25zdCBjaGFtcGlvbkltZyA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEltYWdlRWxlbWVudFdpdGhDbGFzcyhcbiAgICAnY2hhbXBpb24taW1nJywgY2hhbXBpb25Db250YWluZXIsIGNoYW1waW9uSW1nVXJsLCAnJyxcbiAgKTtcbiAgY2hhbXBpb25JbWcudGFiSW5kZXggPSAwO1xuICBjaGFtcGlvbkNvbnRhaW5lci50YWJJbmRleCA9IDA7XG4gIGNvbnN0IGNoYW1waW9uTmFtZVdyYXBwZXIgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnY2hhbXBpb24tbmFtZS13cmFwcGVyJywgY2hhbXBpb25Db250YWluZXIpO1xuICBjb25zdCBjaGFtcGlvbk5hbWUgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2NoYW1waW9uLW5hbWUnLCBjaGFtcGlvbk5hbWVXcmFwcGVyKTtcbiAgY2hhbXBpb25OYW1lLnRleHRDb250ZW50ID0gY2hhbXBpb24ubmFtZTtcbn07XG5cbmV4cG9ydCB7XG4gIHJlbmRlckhlYWRlckRldGFpbHMsXG4gIHJlbmRlclN0YXRPdmVydmlldyxcbiAgcmVuZGVyQ2hhbXBpb25MYW5lLFxuICByZW5kZXJEYW1hZ2VTdGF0cyxcbiAgaW1hZ2VzLFxuICByZW5kZXJNYXRjaHVwc0luZm8sXG4gIGNyZWF0ZUNoYW1waW9uQ29udGFpbmVyLFxufTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1yYXNpbi1ibGFjazogIzFkMWUyYztcXG4gIC0tdHJhbnNwYXJlbnQtcmFzaW4tYmxhY2s6ICMxZDFlMmM5MTtcXG4gIC0tZGFyay1nb2xkOiAjOTI3NTQzO1xcbiAgLS1saWdodC1nb2xkOiAjYzdhYjZlO1xcbn1cXG5cXG4jZnJvbnQtcGFnZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAtNDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmFybG93XFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuI2Zyb250LXBhZ2UgLmFwcC1uYW1lLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgcGFkZGluZzogMC4zZW07XFxuICBib3JkZXItcmFkaXVzOiA4cHggMHB4IDhweCAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jZnJvbnQtcGFnZSAuYXBwLW5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XFxufVxcbiNmcm9udC1wYWdlIC5hcHAtbmFtZS1jb250YWluZXI6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuI2Zyb250LXBhZ2UgLnBhZ2UtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFlbSAwO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci13aWR0aDogMCAwIDJweCAwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2Zyb250LXBhZ2UgLmFwcC1uYW1lLWRpc3BsYXktY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwYjM7XFxuICBwYWRkaW5nOiAwLjJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiA2ZW07XFxufVxcbiNmcm9udC1wYWdlIC5hcHAtbmFtZS1kaXNwbGF5IHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbn1cXG4jZnJvbnQtcGFnZSAuc2xvZ2FuLWRpc3BsYXkge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG4gIG1hcmdpbi10b3A6IDJlbTtcXG59XFxuI2Zyb250LXBhZ2UgLnNlYXJjaCB7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIG1pbi13aWR0aDogMThlbTtcXG4gIGJhY2tncm91bmQ6ICNlMmU0ZTk7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBtaW4taGVpZ2h0OiAyLjZlbTtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG4jZnJvbnQtcGFnZSAuc3BsYXNoLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNmcm9udC1wYWdlIC5iYWNrZHJvcC1pbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogNTB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6ICMyMjI7XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcbiNmcm9udC1wYWdlIC5iYWNrZHJvcCB7XFxuICB6LWluZGV4OiAtMjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4jZnJvbnQtcGFnZSAuYmFja2Ryb3A6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMTQxODFkLCByZ2JhKDIwLCAyNCwgMjksIDAuOTg1NTY1KSAwLjk3JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjk0NTEzMSkgMi4wNzgzMyUsIHJnYmEoMjAsIDI0LCAyOSwgMC44ODMwMDcpIDMuMjk2NjclLCByZ2JhKDIwLCAyNCwgMjksIDAuODAzNDk5KSA0LjYwMTY3JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjcxMDkxNSkgNS45NjY2NyUsIHJnYmEoMjAsIDI0LCAyOSwgMC42MDk1NjMpIDcuMzY1JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjUwMzc1KSA4Ljc3MTY3JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjM5Nzc4NCkgMTAuMTYlLCByZ2JhKDIwLCAyNCwgMjksIDAuMjk1OTczKSAxMS41MDUlLCByZ2JhKDIwLCAyNCwgMjksIDAuMjAyNjI0KSAxMi43OCUsIHJnYmEoMjAsIDI0LCAyOSwgMC4xMjIwNDQpIDEzLjk1ODMzJSwgcmdiYSgyMCwgMjQsIDI5LCAwLjA1ODU0MjMpIDE1LjAxNjY3JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjAxNjQyNDkpIDE1LjkyODMzJSwgcmdiYSgyMCwgMjQsIDI5LCAwKSAxNi42NjY2NyUsIHJnYmEoMjAsIDI0LCAyOSwgMCkgODMuMzMzMzMlLCByZ2JhKDIwLCAyNCwgMjksIDAuMDE2NDI0OSkgODQuMDcxNjclLCByZ2JhKDIwLCAyNCwgMjksIDAuMDU4NTQyMykgODQuOTgzMzMlLCByZ2JhKDIwLCAyNCwgMjksIDAuMTIyMDQ0KSA4Ni4wNDE2NyUsIHJnYmEoMjAsIDI0LCAyOSwgMC4yMDI2MjQpIDg3LjIyJSwgcmdiYSgyMCwgMjQsIDI5LCAwLjI5NTk3MykgODguNDk1JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjM5Nzc4NCkgODkuODQlLCByZ2JhKDIwLCAyNCwgMjksIDAuNTAzNzUpIDkxLjIyODMzJSwgcmdiYSgyMCwgMjQsIDI5LCAwLjYwOTU2MykgOTIuNjM1JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjcxMDkxNSkgOTQuMDMzMzMlLCByZ2JhKDIwLCAyNCwgMjksIDAuODAzNDk5KSA5NS4zOTgzMyUsIHJnYmEoMjAsIDI0LCAyOSwgMC44ODMwMDcpIDk2LjcwMzMzJSwgcmdiYSgyMCwgMjQsIDI5LCAwLjk0NTEzMSkgOTcuOTIxNjclLCByZ2JhKDIwLCAyNCwgMjksIDAuOTg1NTY1KSA5OS4wMyUsICMxNDE4MWQpLCBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzE0MTgxZCwgIzE0MTgxZCAyMS40ODE0OCUsIHJnYmEoMjAsIDI0LCAyOSwgMC45ODU1NjUpIDIzLjYzNzA0JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjk0NTEzMSkgMjYuMSUsIHJnYmEoMjAsIDI0LCAyOSwgMC44ODMwMDcpIDI4LjgwNzQxJSwgcmdiYSgyMCwgMjQsIDI5LCAwLjgwMzQ5OSkgMzEuNzA3NDElLCByZ2JhKDIwLCAyNCwgMjksIDAuNzEwOTE1KSAzNC43NDA3NCUsIHJnYmEoMjAsIDI0LCAyOSwgMC42MDk1NjMpIDM3Ljg0ODE1JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjUwMzc1KSA0MC45NzQwNyUsIHJnYmEoMjAsIDI0LCAyOSwgMC4zOTc3ODQpIDQ0LjA1OTI2JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjI5NTk3MykgNDcuMDQ4MTUlLCByZ2JhKDIwLCAyNCwgMjksIDAuMjAyNjI0KSA0OS44ODE0OCUsIHJnYmEoMjAsIDI0LCAyOSwgMC4xMjIwNDQpIDUyLjUlLCByZ2JhKDIwLCAyNCwgMjksIDAuMDU4NTQyMykgNTQuODUxODUlLCByZ2JhKDIwLCAyNCwgMjksIDAuMDE2NDI0OSkgNTYuODc3NzglLCByZ2JhKDIwLCAyNCwgMjksIDApIDU4LjUxODUyJSk7XFxufVxcbiNmcm9udC1wYWdlIC5iYWNrZHJvcCAuc2hvd24ge1xcbiAgb3BhY2l0eTogMC43O1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjZzIGVhc2UtaW47XFxufVxcbiNmcm9udC1wYWdlIC5iYWNrZHJvcCAuaGlkZGVuIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNnMgZWFzZS1pbjtcXG59XFxuI2Zyb250LXBhZ2UgI3RwYS1iYWNrZHJvcC5oaWRkZW4ge1xcbiAgdHJhbnNpdGlvbjogbm9uZTtcXG59XFxuI2Zyb250LXBhZ2UgLnNsb2dhbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDE2ZW07XFxufVxcbiNmcm9udC1wYWdlIC5zbG9nYW4tMSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCYXJsb3dcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG4jZnJvbnQtcGFnZSAuc2xvZ2FuLTIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmFybG93XFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuI2Zyb250LXBhZ2UgLm1vYmlsZS1kaXNjb3Zlci1idG4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBtYXJnaW4tYm90dG9tOiAyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctYm90dG9tOiAyZW07XFxufVxcbiNmcm9udC1wYWdlIC5mcm9udC1wYWdlLWJ0biB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxufVxcbiNmcm9udC1wYWdlIC5mcm9udC1wYWdlLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG59XFxuI2Zyb250LXBhZ2UgLm1vYmlsZS1zZWFyY2gtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG4jZnJvbnQtcGFnZSAubW9iaWxlLXNlYXJjaC1jb250YWluZXIgLmF1dG8tY29tcGxldGUtbmFtZXMge1xcbiAgbWF4LWhlaWdodDogMTByZW07XFxufVxcbiNmcm9udC1wYWdlIC5kaXNjb3Zlci1idG4tY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDNlbTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB0b3A6IDIxLjVlbTtcXG59XFxuI2Zyb250LXBhZ2UgLmRpc2NvdmVyLWJ0biB7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGZvbnQtc2l6ZTogMS40ZW07XFxuICBib3JkZXItcmFkaXVzOiA3NSUgMTAlLzAlIDc1JTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbn1cXG4jZnJvbnQtcGFnZSAuZGlzY292ZXItYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbn1cXG4jZnJvbnQtcGFnZSAubmF2aWdhdGlvbi1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2Zyb250LXBhZ2UgLmRlc2t0b3Atc2VhcmNoLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG4jZnJvbnQtcGFnZSAuYXV0by1jb21wbGV0ZS1uYW1lcyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDRkNGQ0O1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIGJvcmRlci10b3A6IG5vbmU7XFxuICB6LWluZGV4OiA0O1xcbiAgdG9wOiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxNHJlbTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4jZnJvbnQtcGFnZSAuYXV0by1jb21wbGV0ZS1uYW1lLXdyYXBwZXIge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q0ZDRkNDtcXG4gIGNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbiNmcm9udC1wYWdlIC5hdXRvLWNvbXBsZXRlLW5hbWUtd3JhcHBlcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG59XFxuI2Zyb250LXBhZ2UgLmF1dG8tY29tcGxldGUtbmFtZS13cmFwcGVyOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbn1cXG4jZnJvbnQtcGFnZSAuc2VhcmNoIHtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgbWluLXdpZHRoOiAxOGVtO1xcbiAgYmFja2dyb3VuZDogI2UyZTRlOTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIG1pbi1oZWlnaHQ6IDIuNmVtO1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcbiNmcm9udC1wYWdlIC5sZWdhbC1ib2lsZXJwbGF0ZSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDAuOGVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgcGFkZGluZzogMCAxLjNlbSAwLjZlbSAxLjNlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xcbiAgI2Zyb250LXBhZ2UgLm1vYmlsZS1zZWFyY2gtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gICNmcm9udC1wYWdlIC5kZXNrdG9wLXNlYXJjaC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgI2Zyb250LXBhZ2UgLm1vYmlsZS1kaXNjb3Zlci1idG4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gICNmcm9udC1wYWdlIC5kaXNjb3Zlci1idG4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuICAjZnJvbnQtcGFnZSAubGVnYWwtYm9pbGVycGxhdGUge1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgcGFkZGluZy10b3A6IDAuNmVtO1xcbiAgfVxcbiAgI2Zyb250LXBhZ2UgLnNsb2dhbi1jb250YWluZXIge1xcbiAgICB0b3A6IDMwZW07XFxuICB9XFxuICAjZnJvbnQtcGFnZSAuc2xvZ2FuLTEge1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gIH1cXG4gICNmcm9udC1wYWdlIC5zbG9nYW4tMiB7XFxuICAgIGZvbnQtc2l6ZTogMi4xcmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTQwMHB4KSB7XFxuICAjZnJvbnQtcGFnZSAuZGlzY292ZXItYnRuLWNvbnRhaW5lciB7XFxuICAgIHRvcDogMThlbTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlc2hlZXRzL2Zyb250cGFnZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUdBO0VBQ0Usc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUFBRjs7QUFHQTtFQUNFLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7QUFBRjtBQUVFO0VBQ0Usa0NBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0FBQUo7QUFHRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBREo7QUFJRTtFQUNFLHVCQUFBO0VBQ0EsdUJBQUE7QUFGSjtBQUtFO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUhKO0FBTUU7RUFD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Q0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBbENKO0FBcUNFO0VBQ0U7SUFDRSxhQUFBO0VBbkNKO0VBc0NFO0lBQ0UsY0FBQTtFQXBDSjtBQUNGO0FBdUNFO0VBQ0U7SUFDRSxhQUFBO0VBckNKO0VBd0NFO0lBQ0UsY0FBQTtFQXRDSjtFQXlDRTtJQUNFLGNBQUE7SUFDQSxrQkFBQTtFQXZDSjtFQTBDRTtJQUNFLFNBQUE7RUF4Q0o7RUEyQ0U7SUFDRSxpQkFBQTtFQXpDSjtFQTRDRTtJQUNFLGlCQUFBO0VBMUNKO0FBQ0Y7QUE2Q0U7RUFDRTtJQUNFLFNBQUE7RUEzQ0o7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbn1cXG5cXG46cm9vdCB7XFxuICAtLXJhc2luLWJsYWNrOiAjMWQxZTJjO1xcbiAgLS10cmFuc3BhcmVudC1yYXNpbi1ibGFjazogIzFkMWUyYzkxO1xcbiAgLS1kYXJrLWdvbGQ6ICM5Mjc1NDM7XFxuICAtLWxpZ2h0LWdvbGQ6ICNjN2FiNmU7XFxufVxcblxcbiNmcm9udC1wYWdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IC00O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCYXJsb3dcXFwiLCBzYW5zLXNlcmlmO1xcblxcbiAgLmFwcC1uYW1lLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICAgIHBhZGRpbmc6IDAuM2VtO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHggMHB4IDhweCAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuXFxuICAuYXBwLW5hbWUge1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XFxuICB9XFxuXFxuICAuYXBwLW5hbWUtY29udGFpbmVyOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgfVxcblxcbiAgLnBhZ2UtaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDFlbSAwO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICAgIGJvcmRlci13aWR0aDogMCAwIDJweCAwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmFwcC1uYW1lLWRpc3BsYXktY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBiMztcXG4gICAgcGFkZGluZzogMC4yZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDExcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDZlbTtcXG4gIH1cXG5cXG4gIC5hcHAtbmFtZS1kaXNwbGF5IHtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDZweDtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgfVxcblxcbiAgLnNsb2dhbi1kaXNwbGF5IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICBtYXJnaW4tdG9wOiAyZW07XFxuICB9XFxuXFxuICAuc2VhcmNoIHtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIG1pbi13aWR0aDogMThlbTtcXG4gICAgYmFja2dyb3VuZDogI2UyZTRlOTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBtaW4taGVpZ2h0OiAyLjZlbTtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuXFxuICB9XFxuXFxuICAuc3BsYXNoLXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmJhY2tkcm9wLWltZyB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogNTB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiAjMjIyO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxuICB9XFxuXFxuICAuYmFja2Ryb3Age1xcbiAgICB6LWluZGV4OiAtMjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIFxcbiAgLmJhY2tkcm9wOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywjMTQxODFkLHJnYmEoMjAsMjQsMjksLjk4NTU2NSkgLjk3JSxyZ2JhKDIwLDI0LDI5LC45NDUxMzEpIDIuMDc4MzMlLHJnYmEoMjAsMjQsMjksLjg4MzAwNykgMy4yOTY2NyUscmdiYSgyMCwyNCwyOSwuODAzNDk5KSA0LjYwMTY3JSxyZ2JhKDIwLDI0LDI5LC43MTA5MTUpIDUuOTY2NjclLHJnYmEoMjAsMjQsMjksLjYwOTU2MykgNy4zNjUlLHJnYmEoMjAsMjQsMjksLjUwMzc1KSA4Ljc3MTY3JSxyZ2JhKDIwLDI0LDI5LC4zOTc3ODQpIDEwLjE2JSxyZ2JhKDIwLDI0LDI5LC4yOTU5NzMpIDExLjUwNSUscmdiYSgyMCwyNCwyOSwuMjAyNjI0KSAxMi43OCUscmdiYSgyMCwyNCwyOSwuMTIyMDQ0KSAxMy45NTgzMyUscmdiYSgyMCwyNCwyOSwuMDU4NTQyMykgMTUuMDE2NjclLHJnYmEoMjAsMjQsMjksLjAxNjQyNDkpIDE1LjkyODMzJSxyZ2JhKDIwLDI0LDI5LDApIDE2LjY2NjY3JSxyZ2JhKDIwLDI0LDI5LDApIDgzLjMzMzMzJSxyZ2JhKDIwLDI0LDI5LC4wMTY0MjQ5KSA4NC4wNzE2NyUscmdiYSgyMCwyNCwyOSwuMDU4NTQyMykgODQuOTgzMzMlLHJnYmEoMjAsMjQsMjksLjEyMjA0NCkgODYuMDQxNjclLHJnYmEoMjAsMjQsMjksLjIwMjYyNCkgODcuMjIlLHJnYmEoMjAsMjQsMjksLjI5NTk3MykgODguNDk1JSxyZ2JhKDIwLDI0LDI5LC4zOTc3ODQpIDg5Ljg0JSxyZ2JhKDIwLDI0LDI5LC41MDM3NSkgOTEuMjI4MzMlLHJnYmEoMjAsMjQsMjksLjYwOTU2MykgOTIuNjM1JSxyZ2JhKDIwLDI0LDI5LC43MTA5MTUpIDk0LjAzMzMzJSxyZ2JhKDIwLDI0LDI5LC44MDM0OTkpIDk1LjM5ODMzJSxyZ2JhKDIwLDI0LDI5LC44ODMwMDcpIDk2LjcwMzMzJSxyZ2JhKDIwLDI0LDI5LC45NDUxMzEpIDk3LjkyMTY3JSxyZ2JhKDIwLDI0LDI5LC45ODU1NjUpIDk5LjAzJSwjMTQxODFkKSxsaW5lYXItZ3JhZGllbnQoMGRlZywjMTQxODFkLCMxNDE4MWQgMjEuNDgxNDglLHJnYmEoMjAsMjQsMjksLjk4NTU2NSkgMjMuNjM3MDQlLHJnYmEoMjAsMjQsMjksLjk0NTEzMSkgMjYuMSUscmdiYSgyMCwyNCwyOSwuODgzMDA3KSAyOC44MDc0MSUscmdiYSgyMCwyNCwyOSwuODAzNDk5KSAzMS43MDc0MSUscmdiYSgyMCwyNCwyOSwuNzEwOTE1KSAzNC43NDA3NCUscmdiYSgyMCwyNCwyOSwuNjA5NTYzKSAzNy44NDgxNSUscmdiYSgyMCwyNCwyOSwuNTAzNzUpIDQwLjk3NDA3JSxyZ2JhKDIwLDI0LDI5LC4zOTc3ODQpIDQ0LjA1OTI2JSxyZ2JhKDIwLDI0LDI5LC4yOTU5NzMpIDQ3LjA0ODE1JSxyZ2JhKDIwLDI0LDI5LC4yMDI2MjQpIDQ5Ljg4MTQ4JSxyZ2JhKDIwLDI0LDI5LC4xMjIwNDQpIDUyLjUlLHJnYmEoMjAsMjQsMjksLjA1ODU0MjMpIDU0Ljg1MTg1JSxyZ2JhKDIwLDI0LDI5LC4wMTY0MjQ5KSA1Ni44Nzc3OCUscmdiYSgyMCwyNCwyOSwwKSA1OC41MTg1MiUpO1xcbiAgfVxcblxcbiAgLmJhY2tkcm9wIC5zaG93biB7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjZzIGVhc2UtaW47XFxuICB9XFxuXFxuICAuYmFja2Ryb3AgLmhpZGRlbiB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjZzIGVhc2UtaW47XFxuICB9XFxuXFxuICAjdHBhLWJhY2tkcm9wLmhpZGRlbntcXG4gICAgdHJhbnNpdGlvbjogbm9uZTtcXG4gIH1cXG5cXG4gIC5zbG9nYW4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDE2ZW07XFxuICB9XFxuXFxuICAuc2xvZ2FuLTEge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnQmFybG93Jywgc2Fucy1zZXJpZjsgIFxcbiAgfVxcblxcbiAgLnNsb2dhbi0yIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ0JhcmxvdycsIHNhbnMtc2VyaWY7ICBcXG4gIH1cXG5cXG4gIC5tb2JpbGUtZGlzY292ZXItYnRuLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMmVtO1xcbiAgfVxcblxcbiAgLmZyb250LXBhZ2UtYnRuIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICB9XFxuXFxuICAuZnJvbnQtcGFnZS1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gIH1cXG5cXG4gIC5tb2JpbGUtc2VhcmNoLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcblxcbiAgICAuYXV0by1jb21wbGV0ZS1uYW1lcyB7XFxuICAgICAgbWF4LWhlaWdodDogMTByZW07XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5kaXNjb3Zlci1idG4tY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzZW07XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHRvcDogMjEuNWVtO1xcbiAgfVxcblxcbiAgLmRpc2NvdmVyLWJ0biB7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgICBmb250LXNpemU6IDEuNGVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA3NSUgMTAlLzAlIDc1JTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gIH1cXG5cXG4gIC5kaXNjb3Zlci1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1nb2xkKVxcbiAgfVxcblxcbiAgLm5hdmlnYXRpb24tc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuZGVza3RvcC1zZWFyY2gtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuYXV0by1jb21wbGV0ZS1uYW1lcyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZDRkNDtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgei1pbmRleDogNDtcXG4gICAgdG9wOiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMTRyZW07XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDsgXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAuYXV0by1jb21wbGV0ZS1uYW1lLXdyYXBwZXIge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IFxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q0ZDRkNDsgXFxuICAgIGNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLmF1dG8tY29tcGxldGUtbmFtZS13cmFwcGVyOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICB9XFxuXFxuICAuYXV0by1jb21wbGV0ZS1uYW1lLXdyYXBwZXI6Zm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gIH1cXG4gIFxcbiAgLnNlYXJjaCB7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBtaW4td2lkdGg6IDE4ZW07XFxuICAgIGJhY2tncm91bmQ6ICNlMmU0ZTk7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbWluLWhlaWdodDogMi42ZW07XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgfVxcblxcbiAgLmxlZ2FsLWJvaWxlcnBsYXRlIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDAuOGVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcGFkZGluZzogMCAxLjNlbSAwLjZlbSAxLjNlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIH1cXG5cXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xcbiAgICAubW9iaWxlLXNlYXJjaC1jb250YWluZXIge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLmRlc2t0b3Atc2VhcmNoLWNvbnRhaW5lciB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gICAgLm1vYmlsZS1kaXNjb3Zlci1idG4tY29udGFpbmVyIHtcXG4gICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5kaXNjb3Zlci1idG4tY29udGFpbmVyIHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcblxcbiAgICAubGVnYWwtYm9pbGVycGxhdGUge1xcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICAgIHBhZGRpbmctdG9wOiAwLjZlbTtcXG4gICAgfVxcblxcbiAgICAuc2xvZ2FuLWNvbnRhaW5lciB7XFxuICAgICAgdG9wOiAzMGVtO1xcbiAgICB9XFxuXFxuICAgIC5zbG9nYW4tMSB7XFxuICAgICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIH1cXG5cXG4gICAgLnNsb2dhbi0yIHtcXG4gICAgICBmb250LXNpemU6IDIuMXJlbTtcXG4gICAgfVxcbiAgfVxcblxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDE0MDBweCkge1xcbiAgICAuZGlzY292ZXItYnRuLWNvbnRhaW5lciB7XFxuICAgICAgdG9wOiAxOGVtO1xcbiAgICB9XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLXJhc2luLWJsYWNrOiAjMWQxZTJjO1xcbiAgLS1kYXJrLWdvbGQ6ICM5Mjc1NDM7XFxuICAtLWxpZ2h0LWdvbGQ6ICNjN2FiNmU7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIHBhZGRpbmc6IDJyZW0gMDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBmb250LWZhbWlseTogXFxcIkJhcmxvd1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcbi5tb2RhbCAjbWFpbi1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMDtcXG4gIG1heC13aWR0aDogNzUlO1xcbiAgbWluLWhlaWdodDogNDlyZW07XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4ubW9kYWwgI21haW4tY29udGFpbmVyICNtYWluIHtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbn1cXG4ubW9kYWwgLm1vZGFsLWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwZTA7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwYmY7XFxufVxcbi5tb2RhbCAubmF2aWdhdGlvbi1iYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1vZGFsIC5jbG9zZS1tb2RhbC1idG4td3JhcHBlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxLjJlbTtcXG59XFxuLm1vZGFsIC5jbG9zZS1tb2RhbC1idG4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGZvbnQtc2l6ZTogMS42ZW07XFxufVxcbi5tb2RhbCAuY2xvc2UtbW9kYWwtYnRuOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG59XFxuLm1vZGFsIC5tb2RhbC1uYXYtbGlua3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5tb2RhbCAubW9kYWwtbmF2LWxpbmsge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLXRvcDogMC41ZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG59XFxuLm1vZGFsIC5tb2RhbC1uYXYtbGluazpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1oZWFkaW5nIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1uYW1lIHtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi10aXRsZSB7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAwLjVlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXJvbGVzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1yb2xlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tcmVzb3VyY2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1yb2xlLWltYWdlIHtcXG4gIGhlaWdodDogMy41cmVtO1xcbiAgd2lkdGg6IDMuNXJlbTtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1yZXNvdXJjZS1pbWFnZSB7XFxuICBoZWlnaHQ6IDMuNXJlbTtcXG4gIHdpZHRoOiAzLjVyZW07XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tcm9sZS1uYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tcmVzb3VyY2UtbmFtZSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLW1haW4taW5mbyB7XFxuICBwYWRkaW5nOiAxLjhyZW07XFxuICBtYXgtd2lkdGg6IDM0cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxhc3QgYmFzZWxpbmU7XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRldG9wIHtcXG4gIGZyb20ge1xcbiAgICB0b3A6IC0zMDBweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdG9wOiAwO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xcbiAgZnJvbSB7XFxuICAgIHRvcDogLTMwMHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0b3A6IDA7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbi5tb2RhbCAubG9yZS1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMGUwO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC42ZW07XFxuICBsaW5lLWhlaWdodDogMS40O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG59XFxuLm1vZGFsIC5zdWJoZWFkaW5nIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDAuNGVtO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmFiaWxpdGllcy1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMGUwO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC42ZW07XFxuICBsaW5lLWhlaWdodDogMS40O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIHdpZHRoOiAyOGVtO1xcbn1cXG4ubW9kYWwgLmFiaWxpdGllcy1oZWFkaW5nIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1vZGFsIC5hYmlsaXR5LWltZ3Mge1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG4ubW9kYWwgLmFiaWxpdHktZGVzY3JpcHRpb24ge1xcbiAgbWFyZ2luLXRvcDogMC41ZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLWV4dHJhLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5tb2RhbCAuYWJpbGl0eS1pbmZvIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5tb2RhbCAuYWJpbGl0eS1pbmZvLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLm1vZGFsIC5zcGVsbC1pbWcge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAwIDAuNXJlbTtcXG4gIGhlaWdodDogMy4zcmVtO1xcbiAgd2lkdGg6IDMuM3JlbTtcXG59XFxuLm1vZGFsIC5zcGVsbC1pbWcuY2xpY2tlZCB7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgYm9yZGVyLXdpZHRoOiA0cHg7XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tdGlwcy1zZWN0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBlMDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcbiAgbWF4LXdpZHRoOiAzNHJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi10aXBzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXRpcCB7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcbi5tb2RhbCAjc3RhdHMtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXgtd2lkdGg6IDc1JTtcXG4gIG1pbi1oZWlnaHQ6IDQ5cmVtO1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubW9kYWwgI3N0YXRzLWNvbnRhaW5lciAjc3RhdHMge1xcbiAgY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tc3RhdHMtb3ZlcnZpZXcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgbWFyZ2luLXRvcDogMC41ZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG4gIG1heC13aWR0aDogMjVyZW07XFxuICBtaW4td2lkdGg6IDIwcmVtO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG4ubW9kYWwgLndpbi1yYXRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ubW9kYWwgLnBpY2stcmF0ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLm1vZGFsIC5sYW5lLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubW9kYWwgLnBpY2stcmF0ZS12YWx1ZSB7XFxuICBtYXJnaW4tdG9wOiAwLjRlbTtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG59XFxuLm1vZGFsIC53aW4tcmF0ZS12YWx1ZSB7XFxuICBtYXJnaW4tdG9wOiAwLjRlbTtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG59XFxuLm1vZGFsIC5sYWJlbCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tZGFtYWdlLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwZTA7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgbWF4LWhlaWdodDogMTcuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG4ubW9kYWwgLmRhbWFnZS1oZWFkaW5nIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1vZGFsIC5jaXJjdWxhci1jaGFydCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXgtaGVpZ2h0OiAxNGVtO1xcbn1cXG4ubW9kYWwgLmNpcmNsZSB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlLXdpZHRoOiAyLjI7XFxuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XFxuICBhbmltYXRpb246IHByb2dyZXNzIDFzIGVhc2Utb3V0IGZvcndhcmRzO1xcbn1cXG4ubW9kYWwgI21hZ2ljLWRhbWFnZS1zdHJva2Uge1xcbiAgc3Ryb2tlOiAjMzVhN2ZmO1xcbn1cXG4ubW9kYWwgI3BoeXNpY2FsLWRhbWFnZS1zdHJva2Uge1xcbiAgc3Ryb2tlOiAjZmY1OTY0O1xcbn1cXG4ubW9kYWwgI3RydWUtZGFtYWdlLXN0cm9rZSB7XFxuICBzdHJva2U6ICNmZmU3NGM7XFxufVxcbkBrZXlmcmFtZXMgcHJvZ3Jlc3Mge1xcbiAgMCUge1xcbiAgICBzdHJva2UtZGFzaGFycmF5OiAwIDEwMDtcXG4gIH1cXG59XFxuLm1vZGFsIC50b3RhbC1kYW1hZ2UtdGV4dCB7XFxuICBmb250LXNpemU6IDRweDtcXG4gIHRleHQtYW5jaG9yOiBtaWRkbGU7XFxuICBmaWxsOiB3aGl0ZTtcXG59XFxuLm1vZGFsIC50b3RhbC1kYW1hZ2UtbGFiZWwge1xcbiAgZm9udC1zaXplOiAzcHg7XFxuICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xcbiAgZmlsbDogdmFyKC0tZGFyay1nb2xkKTtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1tYWluLXN0YXRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1pdGVtLWJ1aWxkcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwZTA7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgbWF4LWhlaWdodDogMTcuNXJlbTtcXG59XFxuLm1vZGFsIC5kYW1hZ2Utc3RhdHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmRhbWFnZS1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXgtaGVpZ2h0OiA5MiU7XFxuICBoZWlnaHQ6IDkyJTtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG4ubW9kYWwgLmRhbWFnZS10eXBlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG4ubW9kYWwgLmRhbWFnZS1zdGF0cyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG4ubW9kYWwgI3BoeXNpY2FsLWRhbWFnZS1sYWJlbCB7XFxuICBjb2xvcjogI2ZmNTk2NDtcXG59XFxuLm1vZGFsICNtYWdpYy1kYW1hZ2UtbGFiZWwge1xcbiAgY29sb3I6ICMzNWE3ZmY7XFxufVxcbi5tb2RhbCAjdHJ1ZS1kYW1hZ2UtbGFiZWwge1xcbiAgY29sb3I6ICNmZmU3NGM7XFxufVxcbi5tb2RhbCAuaXRlbS1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwZTA7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjA7XFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB3aWR0aDogNDAlO1xcbiAgcmlnaHQ6IDEwZW07XFxuICBtYXJnaW4tYm90dG9tOiAzLjVlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1vZGFsIC5pdGVtLW5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLm1vZGFsIC5tYWluLWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG59XFxuLm1vZGFsIC5jb3N0LWxhYmVsIHtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLm1vZGFsIC5jb21wb25lbnQtaXRlbXMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5tb2RhbCAuY29tcG9uZW50LWl0ZW0tbmFtZSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5tb2RhbCAuY29zdC1hbW91bnQge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4ubW9kYWwgLmNvbXBvbmVudC1pdGVtLWNvc3QtbGFiZWwge1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4ubW9kYWwgLmNvbXBvbmVudC1pdGVtLWFtb3VudCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5tb2RhbCAuY29tcG9uZW50LWl0ZW0tZGV0YWlscy1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMGUwO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC42ZW07XFxuICBsaW5lLWhlaWdodDogMS40O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLm1vZGFsIC5pdGVtLXNldHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWF4LWhlaWdodDogOTAlO1xcbn1cXG4ubW9kYWwgLml0ZW0tc2V0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBib3JkZXItd2lkdGg6IDJweDtcXG4gIHBhZGRpbmc6IDAuNGVtO1xcbn1cXG4ubW9kYWwgLm1haW4tY29tcG9uZW50LWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwZTA7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2MDQwMDgzO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luOiAwZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxufVxcbi5tb2RhbCAuaXRlbS1pbWcge1xcbiAgbWF4LXdpZHRoOiAyLjdlbTtcXG4gIG1heC1oZWlnaHQ6IDIuN2VtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgcGFkZGluZy1ib3R0b206IDA7XFxufVxcbi5tb2RhbCAuY29tcG9uZW50LWl0ZW0taW1nIHtcXG4gIG1heC13aWR0aDogMS44ZW07XFxuICBtYXgtaGVpZ2h0OiAxLjhlbTtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1tYXRjaHVwcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwZTA7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgbWF4LWhlaWdodDogMjUuMnJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgMCAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG4ubW9kYWwgLm1hdGNodXBzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIG1heC13aWR0aDogMjRyZW07XFxufVxcbi5tb2RhbCAubWF0Y2h1cC1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTYxYTtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgbWFyZ2luOiBhdXRvIDAuNWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG4ubW9kYWwgLm1hdGNodXAtaW5mbzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNjFhYzk7XFxufVxcbi5tb2RhbCAubWF0Y2h1cC1zdGF0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIFxcXCJBcHBsZSBTRCBHb3RoaWMgTmVvXFxcIiwgQXBwbGVHb3RoaWMsIERvdHVtLCBBcmlhbCwgVGFob21hO1xcbn1cXG4ubW9kYWwgLmVuZW15LWNoYW1waW9uLWltZyB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBtYXgtaGVpZ2h0OiAzZW07XFxuICBtYXgtd2lkdGg6IDNlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG4ubW9kYWwgLndpbnJhdGUtYWdhaW5zdC1wZXJjZW50YWdlLmJsdWUge1xcbiAgY29sb3I6ICMzNWE3ZmY7XFxufVxcbi5tb2RhbCAud2lucmF0ZS1hZ2FpbnN0LXBlcmNlbnRhZ2UucmVkIHtcXG4gIGNvbG9yOiAjZmY1OTY0O1xcbn1cXG4ubW9kYWwgI3NraW5zLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nOiAwO1xcbiAgbWF4LXdpZHRoOiA3NSU7XFxuICBtaW4taGVpZ2h0OiA0OXJlbTtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG1pbi1oZWlnaHQ6IDA7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1heC13aWR0aDogOTklO1xcbiAgd2lkdGg6IDk5JTtcXG59XFxuLm1vZGFsICNza2lucy1jb250YWluZXIgLm5hdmlnYXRpb24tYmFyIHtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCB2YXIoLS1kYXJrLWdvbGQpO1xcbn1cXG4ubW9kYWwgI3NraW5zLWNvbnRhaW5lciAjc2tpbnMge1xcbiAgY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxufVxcbi5tb2RhbCAjc2tpbnMtY29udGFpbmVyIC5tb2RhbC1oZWFkZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuLm1vZGFsIC5za2luLWltYWdlLWNvbnRhaW5lciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLm1vZGFsIC5za2luLWltYWdlLWNvbnRhaW5lci5zaG93biB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLm1vZGFsIC5za2luLWltYWdlIHtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm1vZGFsIC5za2luLW5hbWUge1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcbi5tb2RhbCAjc2tpbnMtY29udGFpbmVyIC5jaGFtcGlvbi1oZWFkaW5nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1vZGFsIC5pbWctc2Nyb2xsLWFycm93IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcbi5tb2RhbCAuaW1nLXNjcm9sbC1hcnJvdzpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDExMjBweCkge1xcbiAgLm1vZGFsIC5jb21wb25lbnQtaXRlbS1pbWcge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLm1vZGFsIC5pdGVtLXNldHMtY29udGFpbmVyIHtcXG4gICAgbWluLWhlaWdodDogODAlO1xcbiAgfVxcbiAgLm1vZGFsIC5pdGVtLWRldGFpbHMtY29udGFpbmVyIHtcXG4gICAgbWluLXdpZHRoOiA3MCU7XFxuICAgIHJpZ2h0OiAtNmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTI1MHB4KSB7XFxuICAubW9kYWwgLml0ZW0taW1nIHtcXG4gICAgbWF4LWhlaWdodDogMi4ycmVtO1xcbiAgICBtYXgtd2lkdGg6IDIuMnJlbTtcXG4gIH1cXG4gIC5tb2RhbCAuY2hhbXBpb24tZGV0YWlscyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gIH1cXG4gIC5tb2RhbCAuYWJpbGl0aWVzLWNvbnRhaW5lciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIG1heC13aWR0aDogMzFyZW07XFxuICB9XFxuICAubW9kYWwgLmxvcmUtY29udGFpbmVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbiAgLm1vZGFsICNtYWluLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogNzZyZW07XFxuICB9XFxuICAubW9kYWwgLml0ZW0tZGV0YWlscy1jb250YWluZXIge1xcbiAgICBtaW4td2lkdGg6IDcwJTtcXG4gICAgcmlnaHQ6IC02ZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgLm1vZGFsIC5pdGVtLXNldHMtY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIH1cXG4gIC5tb2RhbCAuaXRlbS1zZXQtY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5tb2RhbCAubWF0Y2h1cHMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLm1vZGFsIC5jaGFtcGlvbi1tYXRjaHVwcyB7XFxuICAgIG1heC1oZWlnaHQ6IDI4LjJyZW07XFxuICB9XFxuICAubW9kYWwgLm1hdGNodXAtaW5mbyB7XFxuICAgIG1hcmdpbjogMC4yZW0gYXV0bztcXG4gIH1cXG4gIC5tb2RhbCAjbWFpbi1jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICB9XFxuICAubW9kYWwgI3N0YXRzLWNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogNjNyZW07XFxuICB9XFxuICAubW9kYWwgLml0ZW0tZGV0YWlscy1jb250YWluZXIge1xcbiAgICByaWdodDogLTFlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDg0MHB4KSB7XFxuICAubW9kYWwgLmRhbWFnZS1pbmZvIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gIH1cXG4gIC5tb2RhbCAuZ2FtZXMtcGxheWVkLWFnYWluc3Qge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLm1vZGFsIC5kYW1hZ2Utc3RhdHMtY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDU2MHB4KSB7XFxuICAubW9kYWwgLmNoYW1waW9uLW1haW4tc3RhdHMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLm1vZGFsIC5pdGVtLXNldC1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcbiAgLm1vZGFsIC5pdGVtLXNldHMtY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5tb2RhbCAuY2hhbXBpb24tZGFtYWdlLWNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIC5tb2RhbCAuZGFtYWdlLXN0YXRzLWluZm8ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLm1vZGFsIC5kYW1hZ2UtaW5mbyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgfVxcbiAgLm1vZGFsIC5kYW1hZ2UtdHlwZS1jb250YWluZXIge1xcbiAgICBtYXJnaW46IDAuMmVtIGF1dG87XFxuICB9XFxuICAubW9kYWwgLmNpcmN1bGFyLWNoYXJ0IHtcXG4gICAgbWF4LWhlaWdodDogMTk1cHg7XFxuICAgIG1heC13aWR0aDogODAlO1xcbiAgfVxcbiAgLm1vZGFsIC5kYW1hZ2Utc3RhdHMtY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5tb2RhbCAuY2hhbXBpb24tcm9sZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcXG4gIH1cXG4gIC5tb2RhbCAuY2hhbXBpb24tcmVzb3VyY2Uge1xcbiAgICBtYXJnaW4tbGVmdDogMC41ZW07XFxuICAgIG1hcmdpbi1yaWdodDogMC41ZW07XFxuICB9XFxuICAubW9kYWwgLmNoYW1waW9uLXJvbGVzIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgfVxcbiAgLm1vZGFsIC5zcGVsbC1pbWcge1xcbiAgICBoZWlnaHQ6IDIuOGVtO1xcbiAgICB3aWR0aDogMi44ZW07XFxuICAgIG1hcmdpbjogYXV0bztcXG4gIH1cXG4gIC5tb2RhbCAuaXRlbS1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgIHJpZ2h0OiAyZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA0MTRweCkge1xcbiAgLm1vZGFsIC5jaGFtcGlvbi1zdGF0cy1vdmVydmlldyB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbWluLXdpZHRoOiAxN3JlbTtcXG4gIH1cXG4gIC5tb2RhbCAuY2hhbXBpb24tbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gIH1cXG4gIC5tb2RhbCAubW9kYWwtbmF2LWxpbmtzIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgfVxcbiAgLm1vZGFsIC5jbG9zZS1tb2RhbC1idG4td3JhcHBlciB7XFxuICAgIGxlZnQ6IDAuN2VtO1xcbiAgfVxcbiAgLm1vZGFsIC5jbG9zZS1tb2RhbC1idG4ge1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTMwMHB4KSB7XFxuICAubW9kYWwgI3NraW5zLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWF4LXdpZHRoOiA3MCU7XFxuICAgIG1pbi1oZWlnaHQ6IGF1dG87XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxOTUwcHgpIHtcXG4gIC5tb2RhbCAjc2tpbnMtY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiA1MCU7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXNoZWV0cy9tb2RhbHMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQUNGOztBQThEQTtFQUNFLGtEQUFBO0FBM0RGOztBQThEQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQ0FBQTtBQTNERjtBQTZERTtFQWpDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsNEVBQUE7RUFDQSxrQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBdUJFLGNBQUE7QUEvQ0o7QUFpREk7RUFDRSx1QkFBQTtBQS9DTjtBQW1ERTtFQXRGQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Es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YUFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0VBOUNKO0VBaURFO0lBQ0UsVUFBQTtFQS9DSjtBQUNGO0FBa0RFO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUFoREo7RUFtREU7SUFDRSxlQUFBO0VBakRKO0VBb0RFO0lBQ0UsZUFBQTtFQWxESjtFQXFERTtJQUNFLFdBQUE7RUFuREo7RUFzREU7SUFDRSxnQkFBQTtFQXBESjtBQUNGO0FBdURFO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtFQXJESjtBQUNGO0FBd0RFO0VBQ0U7SUFDRSxjQUFBO0VBdERKO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbjpyb290IHtcXG4gIC0tcmFzaW4tYmxhY2s6ICMxZDFlMmM7XFxuICAtLWRhcmstZ29sZDogIzkyNzU0MztcXG4gIC0tbGlnaHQtZ29sZDogI2M3YWI2ZTtcXG59XFxuXFxuQG1peGluIGNvbnRhaW5lckJhY2tncm91bmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMGUwO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC42ZW07XFxuICBsaW5lLWhlaWdodDogMS40O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG59XFxuXFxuQG1peGluIHN1YkhlYWRpbmdTdHlsZSB7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAwLjRlbTtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuQG1peGluIGljb25TaXplIHtcXG4gIGhlaWdodDogMy41cmVtO1xcbiAgd2lkdGg6IDMuNXJlbTtcXG59XFxuXFxuQG1peGluIGljb25UZXh0IHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbkBtaXhpbiBpY29uQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxufVxcblxcbkBtaXhpbiBzbWFsbE1hcmdpbiB7XFxuICBtYXJnaW4tdG9wOiAwLjVlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG5cXG5AbWl4aW4gbW9kYWxDb250ZW50Q29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXgtd2lkdGg6IDc1JTtcXG4gIG1pbi1oZWlnaHQ6IDQ5cmVtO1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIHBhZGRpbmc6IDJyZW0gMDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNCk7XFxuICBmb250LWZhbWlseTogXFxcIkJhcmxvd1xcXCIsIHNhbnMtc2VyaWY7XFxuXFxuICAjbWFpbi1jb250YWluZXIge1xcbiAgICBAaW5jbHVkZSBtb2RhbENvbnRlbnRDb250YWluZXIoKTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuXFxuICAgICNtYWluIHtcXG4gICAgICBjb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLm1vZGFsLWhlYWRlciB7XFxuICAgIEBpbmNsdWRlIGNvbnRhaW5lckJhY2tncm91bmQoKTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMGJmO1xcbiAgfVxcblxcbiAgLm5hdmlnYXRpb24tYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5jbG9zZS1tb2RhbC1idG4td3JhcHBlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMS4yZW07XFxuICB9XFxuXFxuICAuY2xvc2UtbW9kYWwtYnRuIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBmb250LXNpemU6IDEuNmVtO1xcbiAgfSAgXFxuXFxuICAuY2xvc2UtbW9kYWwtYnRuOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgfVxcblxcbiAgLm1vZGFsLW5hdi1saW5rcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLm1vZGFsLW5hdi1saW5rIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBAaW5jbHVkZSBzbWFsbE1hcmdpbigpO1xcbiAgfVxcblxcbiAgLm1vZGFsLW5hdi1saW5rOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICB9XFxuXFxuICAuY2hhbXBpb24taGVhZGluZyB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1uYW1lIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXRpdGxlIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIEBpbmNsdWRlIHNtYWxsTWFyZ2luKCk7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tcm9sZXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1yb2xlIHtcXG4gICAgQGluY2x1ZGUgaWNvbkNvbnRhaW5lcigpO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXJlc291cmNlIHtcXG4gICAgQGluY2x1ZGUgaWNvbkNvbnRhaW5lcigpO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXJvbGUtaW1hZ2Uge1xcbiAgICBAaW5jbHVkZSBpY29uU2l6ZSgpO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXJlc291cmNlLWltYWdlIHtcXG4gICAgQGluY2x1ZGUgaWNvblNpemUoKTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1yb2xlLW5hbWUge1xcbiAgICBAaW5jbHVkZSBpY29uVGV4dCgpO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXJlc291cmNlLW5hbWUge1xcbiAgICBAaW5jbHVkZSBpY29uVGV4dCgpO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLW1haW4taW5mbyB7XFxuICAgIHBhZGRpbmc6IDEuOHJlbTtcXG4gICAgbWF4LXdpZHRoOiAzNHJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBsYXN0IGJhc2VsaW5lO1xcbiAgfVxcblxcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xcbiAgICBmcm9tIHtcXG4gICAgICB0b3A6IC0zMDBweDtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgfVxcblxcbiAgQGtleWZyYW1lcyBhbmltYXRldG9wIHtcXG4gICAgZnJvbSB7XFxuICAgICAgdG9wOiAtMzAwcHg7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5sb3JlLWNvbnRhaW5lciB7XFxuICAgIEBpbmNsdWRlIGNvbnRhaW5lckJhY2tncm91bmQoKTtcXG4gIH1cXG5cXG4gIC5zdWJoZWFkaW5nIHtcXG4gICAgQGluY2x1ZGUgc3ViSGVhZGluZ1N0eWxlKCk7XFxuICB9XFxuXFxuICAuYWJpbGl0aWVzLWNvbnRhaW5lciB7XFxuICAgIEBpbmNsdWRlIGNvbnRhaW5lckJhY2tncm91bmQoKTtcXG4gICAgd2lkdGg6IDI4ZW07XFxuICB9XFxuXFxuICAuYWJpbGl0aWVzLWhlYWRpbmcge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuYWJpbGl0eS1pbWdzIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIH1cXG5cXG4gIC5hYmlsaXR5LWRlc2NyaXB0aW9uIHtcXG4gICAgQGluY2x1ZGUgc21hbGxNYXJnaW4oKTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tZXh0cmEtaW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAuYWJpbGl0eS1pbmZvIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5hYmlsaXR5LWluZm8uYWN0aXZlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5zcGVsbC1pbWcge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbjogMCAwLjVyZW07XFxuICAgIGhlaWdodDogMy4zcmVtO1xcbiAgICB3aWR0aDogMy4zcmVtO1xcbiAgfVxcblxcbiAgLnNwZWxsLWltZy5jbGlja2VkIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgICBib3JkZXItd2lkdGg6IDRweDtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi10aXBzLXNlY3Rpb24ge1xcbiAgICBAaW5jbHVkZSBjb250YWluZXJCYWNrZ3JvdW5kKCk7XFxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XFxuICAgIG1heC13aWR0aDogMzRyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi10aXBzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi10aXAge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICB9XFxuXFxuICAjc3RhdHMtY29udGFpbmVyIHtcXG4gICAgQGluY2x1ZGUgbW9kYWxDb250ZW50Q29udGFpbmVyKCk7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuXFxuICAgICNzdGF0cyB7XFxuICAgICAgY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1zdGF0cy1vdmVydmlldyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBAaW5jbHVkZSBzbWFsbE1hcmdpbigpO1xcbiAgICBtYXgtd2lkdGg6IDI1cmVtO1xcbiAgICBtaW4td2lkdGg6IDIwcmVtO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICB9XFxuXFxuICAud2luLXJhdGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLnBpY2stcmF0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAubGFuZS1pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5waWNrLXJhdGUtdmFsdWUge1xcbiAgICBtYXJnaW4tdG9wOiAwLjRlbTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgfVxcblxcbiAgLndpbi1yYXRlLXZhbHVlIHtcXG4gICAgbWFyZ2luLXRvcDogMC40ZW07XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gIH1cXG5cXG4gIC5sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1kYW1hZ2UtY29udGFpbmVyIHtcXG4gICAgQGluY2x1ZGUgY29udGFpbmVyQmFja2dyb3VuZCgpO1xcbiAgICBtYXgtaGVpZ2h0OiAxNy41cmVtO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gIH1cXG5cXG4gIC5kYW1hZ2UtaGVhZGluZyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5jaXJjdWxhci1jaGFydCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1heC1oZWlnaHQ6IDE0ZW07XFxuICB9XFxuXFxuICAuY2lyY2xlIHtcXG4gICAgZmlsbDogbm9uZTtcXG4gICAgc3Ryb2tlLXdpZHRoOiAyLjI7XFxuICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcXG4gICAgYW5pbWF0aW9uOiBwcm9ncmVzcyAxcyBlYXNlLW91dCBmb3J3YXJkcztcXG4gIH1cXG5cXG4gICNtYWdpYy1kYW1hZ2Utc3Ryb2tlIHtcXG4gICAgc3Ryb2tlOiAjMzVhN2ZmO1xcbiAgfVxcblxcbiAgI3BoeXNpY2FsLWRhbWFnZS1zdHJva2Uge1xcbiAgICBzdHJva2U6ICNmZjU5NjQ7XFxuICB9XFxuXFxuICAjdHJ1ZS1kYW1hZ2Utc3Ryb2tlIHtcXG4gICAgc3Ryb2tlOiAjZmZlNzRjO1xcbiAgfVxcblxcbiAgQGtleWZyYW1lcyBwcm9ncmVzcyB7XFxuICAgIDAlIHtcXG4gICAgICBzdHJva2UtZGFzaGFycmF5OiAwIDEwMDtcXG4gICAgfVxcbiAgfVxcblxcbiAgLnRvdGFsLWRhbWFnZS10ZXh0IHtcXG4gICAgZm9udC1zaXplOiA0cHg7XFxuICAgIHRleHQtYW5jaG9yOiBtaWRkbGU7XFxuICAgIGZpbGw6IHdoaXRlO1xcbiAgfVxcblxcbiAgLnRvdGFsLWRhbWFnZS1sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogM3B4O1xcbiAgICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xcbiAgICBmaWxsOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLW1haW4tc3RhdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1pdGVtLWJ1aWxkcyB7XFxuICAgIEBpbmNsdWRlIGNvbnRhaW5lckJhY2tncm91bmQoKTtcXG4gICAgbWF4LWhlaWdodDogMTcuNXJlbTtcXG4gIH1cXG5cXG4gIC5kYW1hZ2Utc3RhdHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuZGFtYWdlLWluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXgtaGVpZ2h0OiA5MiU7XFxuICAgIGhlaWdodDogOTIlO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gIH1cXG5cXG4gIC5kYW1hZ2UtdHlwZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gIH1cXG5cXG4gIC5kYW1hZ2Utc3RhdHMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgfVxcblxcbiAgI3BoeXNpY2FsLWRhbWFnZS1sYWJlbCB7XFxuICAgIGNvbG9yOiAjZmY1OTY0O1xcbiAgfVxcblxcbiAgI21hZ2ljLWRhbWFnZS1sYWJlbCB7XFxuICAgIGNvbG9yOiAjMzVhN2ZmO1xcbiAgfVxcblxcbiAgI3RydWUtZGFtYWdlLWxhYmVsIHtcXG4gICAgY29sb3I6ICNmZmU3NGM7XFxuICB9XFxuXFxuICAuaXRlbS1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgIEBpbmNsdWRlIGNvbnRhaW5lckJhY2tncm91bmQoKTtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjA7XFxuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIHJpZ2h0OiAxMGVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzLjVlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLml0ZW0tbmFtZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gIH1cXG5cXG4gIC5tYWluLWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICB9XFxuXFxuICAuY29zdC1sYWJlbCB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgfVxcblxcbiAgLmNvbXBvbmVudC1pdGVtcy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcblxcbiAgLmNvbXBvbmVudC1pdGVtLW5hbWUge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICB9XFxuXFxuICAuY29zdC1hbW91bnQge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICB9XFxuXFxuICAuY29tcG9uZW50LWl0ZW0tY29zdC1sYWJlbCB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgfVxcblxcbiAgLmNvbXBvbmVudC1pdGVtLWFtb3VudCB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gIH1cXG5cXG4gIC5jb21wb25lbnQtaXRlbS1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgIEBpbmNsdWRlIGNvbnRhaW5lckJhY2tncm91bmQoKTtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjA7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAuaXRlbS1zZXRzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXgtaGVpZ2h0OiA5MCU7XFxuICB9XFxuXFxuICAuaXRlbS1zZXQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXG4gICAgcGFkZGluZzogMC40ZW07XFxuICB9XFxuXFxuICAubWFpbi1jb21wb25lbnQtY29udGFpbmVyIHtcXG4gICAgQGluY2x1ZGUgY29udGFpbmVyQmFja2dyb3VuZCgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYwNDAwODM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDBlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXG4gIH1cXG5cXG4gIC5pdGVtLWltZyB7XFxuICAgIG1heC13aWR0aDogMi43ZW07XFxuICAgIG1heC1oZWlnaHQ6IDIuN2VtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XFxuICAgIC8vcGFkZGluZzogMWVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcXG4gIH1cXG5cXG4gIC5jb21wb25lbnQtaXRlbS1pbWcge1xcbiAgICBtYXgtd2lkdGg6IDEuOGVtO1xcbiAgICBtYXgtaGVpZ2h0OiAxLjhlbTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1tYXRjaHVwcyB7XFxuICAgIEBpbmNsdWRlIGNvbnRhaW5lckJhY2tncm91bmQoKTtcXG4gICAgbWF4LWhlaWdodDogMjUuMnJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDAgMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB9XFxuXFxuICAubWF0Y2h1cHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgbWF4LXdpZHRoOiAyNHJlbTtcXG4gIH1cXG5cXG4gIC5tYXRjaHVwLWluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNjFhO1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgbWFyZ2luOiBhdXRvIDAuNWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XFxuICB9XFxuXFxuICAubWF0Y2h1cC1pbmZvOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTYxYWM5O1xcbiAgfVxcblxcbiAgLm1hdGNodXAtc3RhdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIFxcXCJBcHBsZSBTRCBHb3RoaWMgTmVvXFxcIiwgQXBwbGVHb3RoaWMsXFxuICAgICAgRG90dW0sIEFyaWFsLCBUYWhvbWE7XFxuICB9XFxuXFxuICAuZW5lbXktY2hhbXBpb24taW1nIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBtYXgtaGVpZ2h0OiAzZW07XFxuICAgIG1heC13aWR0aDogM2VtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG4gIH1cXG5cXG4gIC53aW5yYXRlLWFnYWluc3QtcGVyY2VudGFnZS5ibHVlIHtcXG4gICAgY29sb3I6ICMzNWE3ZmY7XFxuICB9XFxuXFxuICAud2lucmF0ZS1hZ2FpbnN0LXBlcmNlbnRhZ2UucmVkIHtcXG4gICAgY29sb3I6ICNmZjU5NjQ7XFxuICB9XFxuXFxuICAjc2tpbnMtY29udGFpbmVyIHtcXG4gICAgQGluY2x1ZGUgbW9kYWxDb250ZW50Q29udGFpbmVyKCk7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtaW4taGVpZ2h0OiAwO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgbWF4LXdpZHRoOiA5OSU7XFxuICAgIHdpZHRoOiA5OSU7XFxuXFxuICAgIC5uYXZpZ2F0aW9uLWJhciB7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IHZhcigtLWRhcmstZ29sZCk7XFxuICAgIH1cXG5cXG4gICAgI3NraW5zIHtcXG4gICAgICBjb2xvcjogdmFyKC0tZGFyay1nb2xkKVxcbiAgICB9XFxuICB9XFxuXFxuICAjc2tpbnMtY29udGFpbmVyIC5tb2RhbC1oZWFkZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgfVxcblxcbiAgLnNraW4taW1hZ2UtY29udGFpbmVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLnNraW4taW1hZ2UtY29udGFpbmVyLnNob3duIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAuc2tpbi1pbWFnZSB7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuc2tpbi1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICB9XFxuXFxuICAjc2tpbnMtY29udGFpbmVyIC5jaGFtcGlvbi1oZWFkaW5nIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuaW1nLXNjcm9sbC1hcnJvdyB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gIH1cXG5cXG4gIC5pbWctc2Nyb2xsLWFycm93OmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICB9XFxuXFxuICBAbWVkaWEgKG1heC13aWR0aDogMTEyMHB4KSB7XFxuICAgIC5jb21wb25lbnQtaXRlbS1pbWcge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLml0ZW0tc2V0cy1jb250YWluZXIge1xcbiAgICAgIG1pbi1oZWlnaHQ6IDgwJTtcXG4gICAgfVxcblxcbiAgICAuaXRlbS1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgICAgbWluLXdpZHRoOiA3MCU7XFxuICAgICAgcmlnaHQ6IC02ZW07XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjUwcHgpIHtcXG4gICAgLml0ZW0taW1nIHtcXG4gICAgICBtYXgtaGVpZ2h0OiAyLjJyZW07XFxuICAgICAgbWF4LXdpZHRoOiAyLjJyZW07XFxuICAgIH1cXG5cXG4gICAgLmNoYW1waW9uLWRldGFpbHMge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gICAgfVxcblxcbiAgICAuYWJpbGl0aWVzLWNvbnRhaW5lciB7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgIG1heC13aWR0aDogMzFyZW07XFxuICAgIH1cXG5cXG4gICAgLmxvcmUtY29udGFpbmVyIHtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgI21haW4tY29udGFpbmVyIHtcXG4gICAgICBoZWlnaHQ6IDc2cmVtO1xcbiAgICB9XFxuXFxuICAgIC5pdGVtLWRldGFpbHMtY29udGFpbmVyIHtcXG4gICAgICBtaW4td2lkdGg6IDcwJTtcXG4gICAgICByaWdodDogLTZlbTtcXG4gICAgfVxcbiAgfVxcblxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICAgIC5pdGVtLXNldHMtY29udGFpbmVyIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICB9XFxuXFxuICAgIC5pdGVtLXNldC1jb250YWluZXIge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgLm1hdGNodXBzIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5jaGFtcGlvbi1tYXRjaHVwcyB7XFxuICAgICAgbWF4LWhlaWdodDogMjguMnJlbTtcXG4gICAgfVxcblxcbiAgICAubWF0Y2h1cC1pbmZvIHtcXG4gICAgICBtYXJnaW46IDAuMmVtIGF1dG87XFxuICAgIH1cXG5cXG4gICAgI21haW4tY29udGFpbmVyIHtcXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgI3N0YXRzLWNvbnRhaW5lciB7XFxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICAgIG1pbi1oZWlnaHQ6IDYzcmVtO1xcbiAgICB9XFxuXFxuICAgIC5pdGVtLWRldGFpbHMtY29udGFpbmVyIHtcXG4gICAgICByaWdodDogLTFlbTtcXG4gICAgfVxcbiAgfVxcblxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDg0MHB4KSB7XFxuICAgIC5kYW1hZ2UtaW5mbyB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIH1cXG5cXG4gICAgLmdhbWVzLXBsYXllZC1hZ2FpbnN0IHtcXG4gICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5kYW1hZ2Utc3RhdHMtY29udGFpbmVyIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgKG1heC13aWR0aDogNTYwcHgpIHtcXG4gICAgLmNoYW1waW9uLW1haW4tc3RhdHMge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgLml0ZW0tc2V0LWNvbnRhaW5lciB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgfVxcblxcbiAgICAuaXRlbS1zZXRzLWNvbnRhaW5lciB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAuY2hhbXBpb24tZGFtYWdlLWNvbnRhaW5lciB7XFxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLmRhbWFnZS1zdGF0cy1pbmZvIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5kYW1hZ2UtaW5mbyB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgfVxcblxcbiAgICAuZGFtYWdlLXR5cGUtY29udGFpbmVyIHtcXG4gICAgICBtYXJnaW46IDAuMmVtIGF1dG87XFxuICAgIH1cXG5cXG4gICAgLmNpcmN1bGFyLWNoYXJ0IHtcXG4gICAgICBtYXgtaGVpZ2h0OiAxOTVweDtcXG4gICAgICBtYXgtd2lkdGg6IDgwJTtcXG4gICAgfVxcblxcbiAgICAuZGFtYWdlLXN0YXRzLWNvbnRhaW5lciB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAuY2hhbXBpb24tcm9sZSB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xcbiAgICAgIG1hcmdpbi1yaWdodDogMC41ZW07XFxuICAgIH1cXG5cXG4gICAgLmNoYW1waW9uLXJlc291cmNlIHtcXG4gICAgICBtYXJnaW4tbGVmdDogMC41ZW07XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcXG4gICAgfVxcblxcbiAgICAuY2hhbXBpb24tcm9sZXMge1xcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgfVxcblxcbiAgICAuc3BlbGwtaW1nIHtcXG4gICAgICBoZWlnaHQ6IDIuOGVtO1xcbiAgICAgIHdpZHRoOiAyLjhlbTtcXG4gICAgICBtYXJnaW46IGF1dG87XFxuICAgIH1cXG5cXG4gICAgLml0ZW0tZGV0YWlscy1jb250YWluZXIge1xcbiAgICAgIHJpZ2h0OiAyZW07XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0MTRweCkge1xcbiAgICAuY2hhbXBpb24tc3RhdHMtb3ZlcnZpZXcge1xcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICBtaW4td2lkdGg6IDE3cmVtO1xcbiAgICB9XFxuXFxuICAgIC5jaGFtcGlvbi1uYW1lIHtcXG4gICAgICBmb250LXNpemU6IDJyZW07XFxuICAgIH1cXG5cXG4gICAgLm1vZGFsLW5hdi1saW5rcyB7XFxuICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB9XFxuXFxuICAgIC5jbG9zZS1tb2RhbC1idG4td3JhcHBlciB7XFxuICAgICAgbGVmdDogMC43ZW07XFxuICAgIH1cXG5cXG4gICAgLmNsb3NlLW1vZGFsLWJ0biB7XFxuICAgICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgfVxcbiAgfVxcblxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEzMDBweCkge1xcbiAgICAjc2tpbnMtY29udGFpbmVyIHtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgbWF4LXdpZHRoOiA3MCU7XFxuICAgICAgbWluLWhlaWdodDogYXV0bztcXG4gICAgfVxcbiAgfVxcblxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDE5NTBweCkge1xcbiAgICAjc2tpbnMtY29udGFpbmVyIHtcXG4gICAgICBtYXgtd2lkdGg6IDUwJTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgZGVmaW5lKEl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBkZWZpbmUoR3AsIFwiY29uc3RydWN0b3JcIiwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICBkZWZpbmUoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIFwiY29uc3RydWN0b3JcIiwgR2VuZXJhdG9yRnVuY3Rpb24pO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIGRlZmluZShBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSwgYXN5bmNJdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIik7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBkZWZpbmUoR3AsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgZGVmaW5lKEdwLCBcInRvU3RyaW5nXCIsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9KTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCBpbiBtb2Rlcm4gZW5naW5lc1xuICAvLyB3ZSBjYW4gZXhwbGljaXRseSBhY2Nlc3MgZ2xvYmFsVGhpcy4gSW4gb2xkZXIgZW5naW5lcyB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09IFwib2JqZWN0XCIpIHtcbiAgICBnbG9iYWxUaGlzLnJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG4gIH0gZWxzZSB7XG4gICAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbiAgfVxufVxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mcm9udHBhZ2Uuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zyb250cGFnZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tb2RhbHMuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFscy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsInZhciBtYXAgPSB7XG5cdFwiLi9Bc3Nhc3Npbi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0Fzc2Fzc2luLnBuZ1wiLFxuXHRcIi4vQmxvb2QgV2VsbC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0Jsb29kIFdlbGwucG5nXCIsXG5cdFwiLi9Cb3R0b20ucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9Cb3R0b20ucG5nXCIsXG5cdFwiLi9Db250cm9sbGVyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvQ29udHJvbGxlci5wbmdcIixcblx0XCIuL0NvdXJhZ2UucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9Db3VyYWdlLnBuZ1wiLFxuXHRcIi4vQ3JpbXNvbiBSdXNoLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvQ3JpbXNvbiBSdXNoLnBuZ1wiLFxuXHRcIi4vRW5lcmd5LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvRW5lcmd5LnBuZ1wiLFxuXHRcIi4vRmlnaHRlci5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0ZpZ2h0ZXIucG5nXCIsXG5cdFwiLi9GbG93LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvRmxvdy5wbmdcIixcblx0XCIuL0Z1cnkucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9GdXJ5LnBuZ1wiLFxuXHRcIi4vR3JpdC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0dyaXQucG5nXCIsXG5cdFwiLi9IZWF0LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvSGVhdC5wbmdcIixcblx0XCIuL0p1bmdsZS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0p1bmdsZS5wbmdcIixcblx0XCIuL01hZ2UucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9NYWdlLnBuZ1wiLFxuXHRcIi4vTWFuYS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL01hbmEucG5nXCIsXG5cdFwiLi9NYW5hbGVzcy5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL01hbmFsZXNzLnBuZ1wiLFxuXHRcIi4vTWFya3NtYW4ucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9NYXJrc21hbi5wbmdcIixcblx0XCIuL01lbGVlLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvTWVsZWUucG5nXCIsXG5cdFwiLi9NaWRkbGUucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9NaWRkbGUucG5nXCIsXG5cdFwiLi9SYWdlLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvUmFnZS5wbmdcIixcblx0XCIuL1JhbmdlZC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL1JhbmdlZC5wbmdcIixcblx0XCIuL1NwZWNpYWxpc3QucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9TcGVjaWFsaXN0LnBuZ1wiLFxuXHRcIi4vU3VwcG9ydC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL1N1cHBvcnQucG5nXCIsXG5cdFwiLi9UYW5rLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvVGFuay5wbmdcIixcblx0XCIuL1RvcC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL1RvcC5wbmdcIixcblx0XCIuL1V0aWxpdHkucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9VdGlsaXR5LnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMvaW1hZ2VzIHN5bmMgXFxcXC4ocG5nfGpwZT9nfHN2ZykkXCI7IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn0iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGVzaGVldHMvZnJvbnRwYWdlLnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlc2hlZXRzL21vZGFscy5zY3NzJztcbmltcG9ydCBFbGVtZW50Q3JlYXRpb24gZnJvbSAnLi9oZWxwZXJzL2VsZW1lbnRDcmVhdGlvbic7XG5pbXBvcnQgeyBnZXRBbGxDaGFtcGlvbkRldGFpbHMgfSBmcm9tICcuL2NoYW1waW9uRGF0YS9nZXRBbGxDaGFtcGlvbnMnO1xuaW1wb3J0IFNlYXJjaGJhckNvbnRyb2xsZXIgZnJvbSAnLi9hcHBDb250cm9sL3NlYXJjaGJhckNvbnRyb2xsZXInO1xuaW1wb3J0IGJhY2tkcm9wQ2hhbmdlIGZyb20gJy4vYXBwQ29udHJvbC9iYWNrZHJvcENoYW5nZUludGVydmFsJztcblxuY29uc3QgY3JlYXRlU2VhcmNoRHJvcGRvd24gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGFsbENoYW1waW9ucyA9IGF3YWl0IGdldEFsbENoYW1waW9uRGV0YWlscygpO1xuICBjb25zdCBhbGxDaGFtcGlvbnNBcnJheSA9IE9iamVjdC52YWx1ZXMoYWxsQ2hhbXBpb25zKTtcblxuICBjb25zdCBzZWFyY2hDb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlYXJjaC1jb250YWluZXInKTtcbiAgc2VhcmNoQ29udGFpbmVycy5mb3JFYWNoKChzZWFyY2hDb250YWluZXIpID0+IHtcbiAgICBjb25zdCBhdXRvQ29tcGxldGVOYW1lcyA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAnZGl2JywgJ2F1dG8tY29tcGxldGUtbmFtZXMnLCBzZWFyY2hDb250YWluZXIsXG4gICAgKTtcbiAgICBhbGxDaGFtcGlvbnNBcnJheS5mb3JFYWNoKChjaGFtcGlvbikgPT4ge1xuICAgICAgY29uc3QgY2hhbXBpb25OYW1lID0gY2hhbXBpb24ubmFtZTtcbiAgICAgIGNvbnN0IGNoYW1waW9uSWQgPSBjaGFtcGlvbi5pZDtcbiAgICAgIGNvbnN0IGF1dG9Db21wbGV0ZU5hbWVXcmFwcGVyID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcyhcbiAgICAgICAgJ2RpdicsICdhdXRvLWNvbXBsZXRlLW5hbWUtd3JhcHBlcicsIGF1dG9Db21wbGV0ZU5hbWVzLFxuICAgICAgKTtcbiAgICAgIGF1dG9Db21wbGV0ZU5hbWVXcmFwcGVyLnRhYkluZGV4ID0gJy0xJztcbiAgICAgIGNvbnN0IGF1dG9Db21wbGV0ZU5hbWUgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKFxuICAgICAgICAnc3BhbicsICdhdXRvLWNvbXBsZXRlLW5hbWUnLCBhdXRvQ29tcGxldGVOYW1lV3JhcHBlcixcbiAgICAgICk7XG4gICAgICBhdXRvQ29tcGxldGVOYW1lLnRleHRDb250ZW50ID0gY2hhbXBpb25OYW1lO1xuICAgICAgYXV0b0NvbXBsZXRlTmFtZS5kYXRhc2V0LmNoYW1waW9uSWQgPSBjaGFtcGlvbklkO1xuICAgICAgYXV0b0NvbXBsZXRlTmFtZS5pZCA9IGNoYW1waW9uTmFtZTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBkaXNwbGF5TnVtYmVyT2ZNYXRjaGVzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBkZXZVcmwgPSAnaHR0cDovLzEyNy4wLjAuMTo1NTAwL2Zyb250ZW5kL2Rpc3QvJztcbiAgY29uc3QgZGV2VXJsMiA9ICdodHRwOi8vMTI3LjAuMC4xOjU1MDAvZnJvbnRlbmQvZGlzdC9pbmRleC5odG1sJztcbiAgY29uc3QgcmVzcG9uc2UgPSAod2luZG93LmxvY2F0aW9uLmhyZWYgPT09IGRldlVybCB8fCBkZXZVcmwyKVxuICAgID8gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9tYXRjaGVzJywgeyBtb2RlOiAnY29ycycgfSlcbiAgICA6IGF3YWl0IGZldGNoKCdtYXRjaGVzJywgeyBtb2RlOiAnY29ycycgfSk7XG5cbiAgY29uc3QgbWF0Y2hDb3VudCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgY29uc3Qgc2xvZ2FuRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbG9nYW4tZGlzcGxheScpO1xuICBzbG9nYW5EaXNwbGF5LnRleHRDb250ZW50ID0gYFByb3ZpZGluZyBpbmZvIGFuZCBzdGF0cyBmcm9tICR7TWF0aC5mbG9vcihtYXRjaENvdW50KX0gTGVhZ3VlIG9mIExlZ2VuZHMgbWF0Y2hlc2A7XG59O1xuXG5jb25zdCByZW5kZXJQYWdlID0gYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBkaXNwbGF5TnVtYmVyT2ZNYXRjaGVzKCk7XG4gIGF3YWl0IGNyZWF0ZVNlYXJjaERyb3Bkb3duKCk7XG4gIFNlYXJjaGJhckNvbnRyb2xsZXIuc2VhcmNoQ29udGFpbmVyTGlzdGVuZXJzKCk7XG59O1xuXG5yZW5kZXJQYWdlKCk7XG5iYWNrZHJvcENoYW5nZSgpO1xuIl0sIm5hbWVzIjpbImluZGV4Iiwic2V0SW50ZXJ2YWwiLCJiYWNrZHJvcHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjdXJyZW50QmFja2Ryb3AiLCJxdWVyeVNlbGVjdG9yIiwibGVuZ3RoIiwiY2xhc3NOYW1lIiwiQ2hhbXBpb25Nb2RhbENvbnRyb2xsZXIiLCJ0b2dnbGVBY3RpdmVBYmlsaXR5IiwiY2xpY2tlZEFiaWxpdHlJZCIsImFiaWxpdHlJbWFnZXMiLCJhYmlsaXR5SW5mb3MiLCJmb3JFYWNoIiwiaW1nIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiaW5mbyIsImNsaWNrZWRJbWFnZSIsImFjdGl2ZUFiaWxpdHkiLCJjaGFuZ2VNb2RhbFRlbXBsYXRlIiwiY2xpY2tlZE1vZGFsTmF2TGluayIsInRlbXBsYXRlcyIsInRlbXBsYXRlIiwidGVtcGxhdGVOYW1lIiwiaWQiLCJzdWJzdHJpbmciLCJpbmRleE9mIiwiY2hvc2VuVGVtcGxhdGUiLCJzdHlsZSIsImRpc3BsYXkiLCJoaWRkZW5UZW1wbGF0ZSIsImRpc3BheUl0ZW1EZXRhaWxzIiwiaG92ZXJlZEl0ZW1JbWFnZSIsIml0ZW1EZXRhaWxzIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiaGlkZUl0ZW1EZXRhaWxzIiwidW5ob3ZlcmVkSXRlbUltYWdlIiwidG9nZ2xlU2tpbkltYWdlcyIsImFycm93Q2xhc3NMaXN0Iiwic2tpbkltYWdlc0NvbnRhaW5lciIsImN1cnJlbnRTaG93bkltYWdlIiwic2tpbk5hbWUiLCJmaXJzdEltYWdlIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJsYXN0SW1hZ2UiLCJsYXN0RWxlbWVudENoaWxkIiwiaW5jbHVkZXMiLCJ0ZXh0Q29udGVudCIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJjbGVhck1haW5Nb2RhbCIsIm1haW5Db250YWluZXIiLCJjaGFtcGlvbk5hbWUiLCJjaGFtcGlvblRpdGxlIiwiY2hhbXBpb25Sb2xlcyIsImNoYW1waW9uTG9yZSIsImFiaWxpdHlEZXRhaWxzIiwiY2hhbXBpb25UaXBzIiwibWFpbk1vZGFsSGVhZGVyIiwiZWxlbWVudCIsImN1cnJlbnRFbGVtZW50IiwiY2xlYXJTdGF0c01vZGFsIiwic3RhdHNDb250YWluZXIiLCJjaGFtcGlvblN0YXRzT3ZlcnZpZXciLCJhbGxkYW1hZ2VTdGF0cyIsIml0ZW1TZXRzQ29udGFpbmVyIiwiYmVzdE1hdGNodXBzIiwid29yc3RNYXRjaHVwcyIsInN0YXRzTW9kYWxIZWFkZXIiLCJkYW1hZ2VTdGF0IiwiZGFtYWdlU3RhdEVsZW1lbnQiLCJzdGF0c01vZGFsQ29udGVudCIsImNvbnRlbnQiLCJjb250ZW50RWxlbWVudCIsImNsZWFyU2tpbnNNb2RhbCIsImNsb3NlQ2hhbXBpb25Nb2RhbCIsIm1vZGFsIiwic2tpbnNDb250YWluZXIiLCJtb2RhbENsaWNrRXZlbnRzIiwiZXZlbnQiLCJ0YXJnZXQiLCJkYXNoSW5kZXgiLCJhYmlsaXR5SWQiLCJzbGljZSIsIkFycmF5IiwiZnJvbSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtb2RhbE1vdXNlb3ZlckV2ZW50cyIsIm1vZGFsTW91c2VvdXRFdmVudHMiLCJyZWxhdGVkVGFyZ2V0IiwicGFyZW50Tm9kZSIsIm1vZGFsQXJyb3dFdmVudHMiLCJrZXkiLCJyaWdodEFycm93IiwibGVmdEFycm93IiwibW9kYWxDaGFuZ2VMaXN0ZW5lcnMiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2V0Q2hhbXBpb25EZXRhaWxzIiwiZ2V0Q2hhbXBpb25TdGF0cyIsImNoYW1waW9uRGV0YWlsc01vZGFsIiwiY2hhbXBpb25TdGF0c01vZGFsIiwiY2hhbXBpb25Ta2luc01vZGFsIiwiQ2hhbXBpb25GaWx0ZXIiLCJTb3J0Q2hhbXBpb25zIiwiZ2V0QWxsQ2hhbXBpb25EZXRhaWxzIiwiZ2V0QWxsQ2hhbXBpb25TdGF0cyIsImdldExhdGVzdFZlcnNpb24iLCJDaGFtcGlvbnNQYWdlQ29udHJvbGxlciIsImRpc3BsYXlEcm9wZG93bk9wdGlvbnMiLCJkcm9wZG93bk9wdGlvbnMiLCJhbGxEcm9wZG93bk9wdGlvbnMiLCJvcHRpb25zIiwib3B0aW9uc1N0eWxlIiwiZHJvcGRvd25PcHRpb25zU3R5bGUiLCJoaWRlRHJvcGRvd25PcHRpb25zIiwiZHJvcGRvd25PcHRpb25zVG9nZ2xlIiwiZHJvcGRvd25CdG4iLCJwYXJlbnRFbGVtZW50IiwiZGlzcGxheUNoYW1waW9uTW9kYWwiLCJjaGFtcGlvbklkIiwibGF0ZXN0VmVyc2lvbiIsImNoYW1waW9uRGV0YWlscyIsImNoYW1waW9uU3RhdHMiLCJzZWxlY3RMYW5lRmlsdGVyT3B0aW9uIiwiY2xpY2tlZExhbmVPcHRpb24iLCJjaGFtcGlvbnNTZWN0aW9uIiwiYWN0aXZlTGFuZU9wdGlvbiIsInZpc2liaWxpdHkiLCJhZGQiLCJjaGVja0xhbmVGaWx0ZXJPcHRpb24iLCJhbGxDaGFtcGlvblN0YXRzIiwibGFuZU5hbWUiLCJmaWx0ZXJCeUxhbmUiLCJjaGVja1NvcnRpbmdPcHRpb24iLCJhY3RpdmVTb3J0aW5nT3B0aW9uIiwic29ydEJ5RGVmYXVsdE9yZGVyIiwic29ydENoYW1waW9uc0J5V2lucmF0ZSIsInNvcnRDaGFtcGlvbnNCeVBpY2tyYXRlIiwic29ydENoYW1waW9uc0J5RGFtYWdlRG9uZSIsImNoZWNrQWN0aXZlUm9sZU9wdGlvbnMiLCJhbGxDaGFtcGlvbkRldGFpbHMiLCJhY3RpdmVSb2xlT3B0aW9ucyIsImFjdGl2ZVJvbGVzIiwibWFwIiwiYWN0aXZlUm9sZU9wdGlvbiIsImFjdGl2ZVJvbGUiLCJmaWx0ZXJCeVJvbGUiLCJjaGVja0FjdGl2ZURpZmZpY3VsdHlPcHRpb25zIiwiYWN0aXZlRGlmZmljdWx0eU9wdGlvbnMiLCJhY3RpdmVEaWZmaWN1bHRpZXMiLCJhY3RpdmVEaWZmaWN1bHR5T3B0aW9uIiwiYWN0aXZlRGlmZmljdWx0eSIsImZpbHRlckJ5RGlmZmljdWx0eSIsInNlbGVjdE11bHRpRHJvcGRvd25PcHRpb24iLCJkcm9wZG93bk9wdGlvbiIsImRlc2VsZWN0RHJvcGRvd25PcHRpb24iLCJ0b2dnbGVEcm9wZG93bk9wdGlvbiIsInNlbGVjdFNpbmdsZURyb3Bkb3duT3B0aW9uIiwiYWN0aXZlRHJvcGRvd25PcHRpb24iLCJyZWRpcmVjdFRvRnJvbnRQYWdlIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiY2hhbXBpb25zUGFnZUNsaWNrRXZlbnRzIiwiY2hlY2tPcHRpb25zIiwiaGlkZUNoYW1waW9uc1NlY3Rpb24iLCJzaG93Q2hhbXBpb25zU2VjdGlvbiIsInJlbW92ZUNoYW1waW9uc1BhZ2VMaXN0ZW5lciIsImNoYW1waW9uc1BhZ2UiLCJhZGRDaGFtcGlvbnNQYWdlTGlzdGVuZXIiLCJzaG93TG9hZGVyIiwibG9hZGVyIiwiaGlkZUxvYWRlciIsImZpbHRlckFuZFNvcnRDaGFtcGlvbnNTZWN0aW9uIiwid2FpdFRpbWUiLCJzZXRUaW1lb3V0IiwiZGF0YXNldCIsImNoYW1waW9uc1BhZ2VLZXlFdmVudHMiLCJhY3RpdmVFbGVtZW50IiwiY2hhbXBpb25zUGFnZUxpc3RlbmVycyIsImNyZWF0ZUNoYW1waW9uQ29udGFpbmVyIiwicmVuZGVyQWxsQ2hhbXBpb25zIiwiY2hhbXBpb24iLCJjbGVhckNoYW1waW9uc1NlY3Rpb24iLCJzaG93Q2hhbXBpb24iLCJoaWRlQ2hhbXBpb24iLCJjbGlja2VkTGFuZSIsImFsbENoYW1waW9ucyIsInJlc3VsdHMiLCJwdXNoIiwiUHJvbWlzZSIsImFsbCIsImNoYW1waW9uTGFuZSIsImxhbmUiLCJjaGFtcGlvbkVsZW1lbnQiLCJ0b0xvd2VyQ2FzZSIsImNoYW1waW9uRWxlbWVudHMiLCJyb2xlTWF0Y2hGb3VuZCIsInJvbGUiLCJ0YWdzIiwiY2hhbXBpb25Sb2xlIiwiY2F0ZWdvcmlzZURpZmZpY3VsdHlOdW0iLCJkaWZmaWN1bHR5TnVtIiwiZGlmZmljdWx0eU1hdGNoRm91bmQiLCJkaWZmaWN1bHR5IiwiY2hhbXBpb25EaWZmaWN1bHR5TnVtIiwiY2hhbXBpb25EaWZmaWN1bHR5IiwiU2VhcmNoYmFyQ29udHJvbGxlciIsInNob3dBdXRvQ29tcGxldGVOYW1lcyIsInNlYXJjaENvbnRhaW5lciIsImF1dG9Db21wbGV0ZU5hbWVzIiwiaGlkZUF1dG9Db21wbGV0ZU5hbWVzIiwiYXV0b0NvbXBsZXRlTmFtZUVsZW1lbnRzIiwiYXV0b0NvbXBsZXRlTmFtZUVsZW1lbnQiLCJzZWFyY2hiYXJGb2N1c0luRXZlbnQiLCJmb2N1cyIsInNlYXJjaGJhckZvY3Vzb3V0RXZlbnQiLCJzZWFyY2hCYXJJbnB1dEV2ZW50IiwiaW5wdXRWYWx1ZSIsInZhbHVlIiwiYXV0b0NvbXBsZXRlTmFtZSIsIm5hbWUiLCJzZWFyY2hiYXJLZXlkb3duRXZlbnRzIiwicHJldmVudERlZmF1bHQiLCJhY3Rpb24iLCJBcnJvd1VwIiwiQXJyb3dEb3duIiwiZmlsdGVyIiwiaXNTaG93aW5nIiwidW5kZWZpbmVkIiwiZ29Ub1N0YXJ0IiwiY2hpbGRyZW4iLCJzZWFyY2hDb250YWluZXJDbGFzc05hbWUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwic2VhcmNoYmFyQ2xpY2tFdmVudHMiLCJjbGlja0F1dG9Db21wbGV0ZU5hbWUiLCJmaXJzdENoaWxkIiwic2VhcmNoQ29udGFpbmVyTGlzdGVuZXJzIiwidmlzaWJsaXR5IiwicmVjcmVhdGVDaGFtcGlvbnNTZWN0aW9uIiwiY2hhbXBpb25zIiwiZmlsdGVyQ2hhbXBpb25zIiwiZmlsdGVyZWRDaGFtcGlvblN0YXRzIiwiZmlsdGVyZWRDaGFtcGlvbnNTb3J0ZWQiLCJzb3J0IiwiYSIsImIiLCJ3aW5SYXRlIiwicGlja1JhdGUiLCJkYW1hZ2VQZXJNYXRjaCIsInRvdGFsRGFtYWdlIiwiZmV0Y2hDaGFtcGlvbkRldGFpbHMiLCJmZXRjaCIsIm1vZGUiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZ2V0Q2hhbXBpb25QYXNzaXZlcyIsInBhc3NpdmVEYXRhIiwicGFzc2l2ZSIsInBhc3NpdmVOYW1lIiwicGFzc2l2ZURlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb24iLCJwYXNzaXZlSWQiLCJpbWFnZSIsImZ1bGwiLCJwYXNzaXZlSW1nVXJsIiwiZ2V0Q2hhbXBpb25TcGVsbHMiLCJzcGVsbHNEYXRhIiwic3BlbGxzIiwic3BlbGwiLCJzcGVsbE9iamVjdCIsImNvc3RCdXJuIiwiY29zdFR5cGUiLCJjb29sZG93biIsImNvb2xkb3duQnVybiIsImltZ1VybCIsImNoYW1waW9uUGFzc2l2ZSIsInRpdGxlIiwicmVwbGFjZSIsInRvVXBwZXJDYXNlIiwicGFydHlwZSIsImFsbHl0aXBzIiwibG9yZSIsInJvbGVzIiwic2tpbnMiLCJyZXNvdXJjZSIsInRpcHMiLCJmZXRjaENoYW1waW9uU3RhdHMiLCJkZXZVcmwiLCJ0b0ZpeGVkIiwia2RhIiwia2RhUmF0aW8iLCJpdGVtU2V0cyIsIml0ZW1DaG9pY2VzIiwiYmVzdE1hdGNoVXBzIiwibWF0Y2hVcHMiLCJ3b3JzdE1hdGNoVXBzIiwidmVyc2lvbnNSZXNwb25zZSIsInZlcnNpb25zIiwiY2hhbXBpb25zUmVzcG9uc2UiLCJ2ZXJzaW9uUmVzcG9uc2UiLCJmZXRjaEFsbEl0ZW1zIiwiYWxsSXRlbXMiLCJJdGVtSW5mbyIsIml0ZW1JZCIsImdldEl0ZW1EZXRhaWxzIiwiaXRlbUltYWdlSWQiLCJpbWFnZVVybCIsImNvbXBvbmVudEl0ZW1JZHMiLCJjb21wb25lbnRJdGVtRGV0YWlscyIsImNvc3QiLCJnb2xkIiwidG90YWwiLCJnZXRJdGVtSW1hZ2UiLCJjb21wb25lbnRJdGVtcyIsImdldENvbXBvbmVudEl0ZW1zIiwiRWxlbWVudENyZWF0aW9uIiwiY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzIiwidGFnIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiY3JlYXRlQ2hpbGRFbGVtZW50V2l0aElkIiwiY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzQW5kSWQiLCJjcmVhdGVDaGlsZEltYWdlRWxlbWVudFdpdGhDbGFzcyIsInNyYyIsImFsdCIsImltYWdlRWxlbWVudCIsInJlbmRlckhlYWRlckRldGFpbHMiLCJpbWFnZXMiLCJjaGFtcGlvbkRhdGEiLCJjaGFtcGlvblJvbGVOYW1lIiwiY2hhbXBpb25SZXNvdXJjZSIsImNoYW1waW9uUmVzb3VyY2VOYW1lIiwibG9yZUNvbnRhaW5lciIsImlubmVySFRNTCIsImFiaWxpdGllc0NvbnRhaW5lciIsImFiaWxpdHlJbWdzIiwicGFzc2l2ZUltZyIsImltZ0xhYmVsIiwic3BlbGxJbWciLCJpIiwiYWJpbGl0eUluZm8iLCJhYmlsaXR5TmFtZSIsImFiaWxpdHlEZXNjcmlwdGlvbiIsImFiaWxpdHlMYWJlbCIsImNoYW1waW9uVGlwc1NlY3Rpb24iLCJjaGFtcGlvblRpcCIsInNraW4iLCJudW0iLCJzaG93bkltYWdlQ29udGFpbmVyIiwic2hvd25JbWFnZVVybCIsImltYWdlQ29udGFpbmVyIiwicmVuZGVyU3RhdE92ZXJ2aWV3IiwicmVuZGVyRGFtYWdlU3RhdHMiLCJyZW5kZXJDaGFtcGlvbkxhbmUiLCJyZW5kZXJNYXRjaHVwc0luZm8iLCJzdGF0c092ZXJ2aWV3IiwidHJ1ZURhbWFnZUNpcmNsZVN0cm9rZSIsInBoeXNpY2FsRGFtYWdlQ2lyY2xlU3Ryb2tlIiwibWFnaWNEYW1hZ2VDaXJjbGVTdHJva2UiLCJ0cnVlRGFtYWdlUGVyY2VudCIsIk1hdGgiLCJyb3VuZCIsInRydWVEYW1hZ2UiLCJwZXJjZW50YWdlIiwicGh5c2ljYWxEYW1hZ2VQZXJjZW50IiwicGh5c2ljYWxEYW1hZ2UiLCJtYWdpY0RhbWFnZVBlcmNlbnQiLCJtYWdpY0RhbWFnZSIsInN0cm9rZURhc2hhcnJheSIsInRvdGFsRGFtYWdlVGV4dCIsInRydWVEYW1hZ2VWYWx1ZSIsInBoeXNpY2FsRGFtYWdlVmFsdWUiLCJtYWdpY0RhbWFnZVZhbHVlIiwiZ2V0QWxsSXRlbXMiLCJjaGFtcGlvbkl0ZW1CdWlsZHMiLCJpdGVtU2V0IiwiaXRlbVNldENvbnRhaW5lciIsIml0ZW0iLCJpdGVtSW5mbyIsImdldEl0ZW1JbmZvIiwibWFpbkNvbXBvbmVudENvbnRhaW5lciIsIm1haW5JdGVtIiwiaXRlbURldGFpbHNDb250YWluZXIiLCJuYW1lRWxlbWVudCIsImRlc2NyaXB0aW9uRWxlbWVudCIsIml0ZW1Db3N0IiwiY29zdExhYmVsIiwiY29zdEFtb3VudCIsInJlc29sdmUiLCJ0aGVuIiwiaXRlbXMiLCJjb21wb25lbnRJdGVtc0NvbnRhaW5lciIsImNvbXBvbmVudEl0ZW0iLCJjb21wb25lbnRJdGVtRWxlbWVudCIsImNvbXBvbmVudEl0ZW1EZXRhaWxzQ29udGFpbmVyIiwiY29tcG9uZW50SXRlbU5hbWUiLCJjb21wb25lbnRJdGVtQ29zdCIsImNvbXBvbmVudEl0ZW1Db3N0TGFiZWwiLCJjb21wb25lbnRJdGVtQW1vdW50IiwiYmVzdE1hdGNodXBzU2VjdGlvbiIsImJlc3RNYXRjaHVwc0VsZW1lbnQiLCJiZXN0TWF0Y2h1cHNEYXRhIiwid29yc3RNYXRjaHVwc1NlY3Rpb24iLCJ3b3JzdE1hdGNodXBzRWxlbWVudCIsIndvcnN0TWF0Y2h1cHNEYXRhIiwiaW1wb3J0QWxsIiwiciIsImtleXMiLCJyZXF1aXJlIiwiY29udGV4dCIsIm1vZGFsQ29udGFpbmVyIiwiY29udGFpbmVyIiwiYmFja2dyb3VuZCIsImJhY2tncm91bmRTaXplIiwicmF0ZVRleHQiLCJyYXRlVHlwZSIsImNoYW1waW9uUmF0ZSIsImxhYmVsIiwicmF0ZVZhbHVlIiwibG93ZXJDYXNlVGV4dCIsImNoYW1waW9uTGFuZUluZm8iLCJsYW5lVGV4dCIsImxhbmVJY29uIiwiZGFtYWdlVHlwZSIsImRhbWFnZVZhbHVlIiwiZGFtYWdlUGVyY2VudGFnZSIsImRhbWFnZUNvbnRhaW5lciIsImRhbWFnZVN0YXRzIiwiZGFtYWdlVmFsdWVFbGVtZW50IiwiZGFtYWdlUGVyY2VudGFnZUVsZW1lbnQiLCJtYXRjaHVwc0VsZW1lbnQiLCJtYXRjaHVwc0RhdGEiLCJtYXRjaHVwIiwibWF0Y2h1cEluZm8iLCJlbmVteUNoYW1waW9uTmFtZSIsImVuZW15Q2hhbXBpb25JZCIsImVuZW15Q2hhbXBpb25JbWdVcmwiLCJtYXRjaHVwU3RhdHMiLCJlbmVteUNoYW1waW9uTmFtZUVsZW1lbnQiLCJ3aW5yYXRlQWdhaW5zdCIsIndpbnJhdGVBZ2FpbnN0TGFiZWwiLCJjb2xvciIsIndpbnJhdGVBZ2FpbnN0UGVyY2VudGFnZSIsIndpblJhdGVBZ2FpbnN0IiwiZ2FtZXNQbGF5ZWRBZ2FpbnN0IiwibWF0Y2hlcyIsImNoYW1waW9uQ29udGFpbmVyIiwiY2hhbXBpb25JbWdVcmwiLCJjaGFtcGlvbkltZyIsInRhYkluZGV4IiwiY2hhbXBpb25OYW1lV3JhcHBlciIsImJhY2tkcm9wQ2hhbmdlIiwiY3JlYXRlU2VhcmNoRHJvcGRvd24iLCJhbGxDaGFtcGlvbnNBcnJheSIsIk9iamVjdCIsInZhbHVlcyIsInNlYXJjaENvbnRhaW5lcnMiLCJhdXRvQ29tcGxldGVOYW1lV3JhcHBlciIsImRpc3BsYXlOdW1iZXJPZk1hdGNoZXMiLCJkZXZVcmwyIiwibWF0Y2hDb3VudCIsInNsb2dhbkRpc3BsYXkiLCJmbG9vciIsInJlbmRlclBhZ2UiXSwic291cmNlUm9vdCI6IiJ9