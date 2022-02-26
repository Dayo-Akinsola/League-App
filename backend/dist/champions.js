/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


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

/***/ "./src/helpers/dropdownSection.js":
/*!****************************************!*\
  !*** ./src/helpers/dropdownSection.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DropdownSection)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _elementCreation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elementCreation */ "./src/helpers/elementCreation.js");




var DropdownSection = /*#__PURE__*/function () {
  function DropdownSection(dropdownName, optionsArray) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DropdownSection);

    this.dropdownName = dropdownName;
    this.optionsArray = optionsArray;
  }
  /* type takes a string used as a className to show if the dropdown is multi or single select */


  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DropdownSection, [{
    key: "renderDropdown",
    value: function renderDropdown(filterSortSection, type) {
      var _this = this;

      var dropdown = _elementCreation__WEBPACK_IMPORTED_MODULE_2__["default"].createChildElementWithClass('div', "".concat(this.dropdownName, "-dropdown dropdown"), filterSortSection);
      var dropdownBtn = _elementCreation__WEBPACK_IMPORTED_MODULE_2__["default"].createChildElementWithClass('button', "".concat(this.dropdownName, "-dropdown-btn dropdown-btn"), dropdown);
      dropdownBtn.textContent = "".concat(this.dropdownName[0].toUpperCase()).concat(this.dropdownName.slice(1));
      var dropdownOptions = _elementCreation__WEBPACK_IMPORTED_MODULE_2__["default"].createChildElementWithClass('div', "".concat(this.dropdownName, "-dropdown-options dropdown-options"), dropdown);
      this.optionsArray.forEach(function (option) {
        var dropdownOption = _elementCreation__WEBPACK_IMPORTED_MODULE_2__["default"].createChildElementWithClass('span', "".concat(option, " ").concat(_this.dropdownName, " ").concat(type, " dropdown-option"), dropdownOptions);
        dropdownOption.textContent = "".concat(option[0].toUpperCase()).concat(option.slice(1));
      });
    }
  }], [{
    key: "createSection",
    value: function createSection() {
      var championsPage = document.querySelector('#champions-page');
      var filterSortSection = document.createElement('div');
      filterSortSection.className = 'filter-sort-section';
      championsPage.insertBefore(filterSortSection, championsPage.lastChild);
      return filterSortSection;
    }
  }]);

  return DropdownSection;
}();



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

/***/ "./src/templates/championsPage.js":
/*!****************************************!*\
  !*** ./src/templates/championsPage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_dropdownSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/dropdownSection */ "./src/helpers/dropdownSection.js");
/* harmony import */ var _championData_getAllChampions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../championData/getAllChampions */ "./src/championData/getAllChampions.js");
/* harmony import */ var _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/elementCreation */ "./src/helpers/elementCreation.js");
/* harmony import */ var _renderHelpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renderHelpers */ "./src/templates/renderHelpers.js");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
  var filterSortSection, sortOptions, roleOptions, difficultyOptions, multiOptionArrays, sortDropdown, championsPage, championsSection, allChampions, allChampionsArray, searchContainer, autoCompleteNames;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          /* Creates the filter and sorting section below the header */
          filterSortSection = _helpers_dropdownSection__WEBPACK_IMPORTED_MODULE_2__["default"].createSection();
          sortOptions = {
            sort: ['winrate', 'pickrate', 'damage']
          };
          roleOptions = {
            role: ['tank', 'assassin', 'fighter', 'mage', 'marksman', 'support']
          };
          difficultyOptions = {
            difficulty: ['low', 'medium', 'high']
          };
          multiOptionArrays = [roleOptions, difficultyOptions];
          sortDropdown = new _helpers_dropdownSection__WEBPACK_IMPORTED_MODULE_2__["default"]('sort', sortOptions.sort);
          sortDropdown.renderDropdown(filterSortSection, 'single-select');
          multiOptionArrays.forEach(function (optionsObject) {
            var dropdownName = Object.keys(optionsObject)[0];
            var optionsArray = Object.values(optionsObject)[0];
            var dropdown = new _helpers_dropdownSection__WEBPACK_IMPORTED_MODULE_2__["default"](dropdownName, optionsArray);
            dropdown.renderDropdown(filterSortSection, 'multi-select');
          });
          /* Load all champions and render them to the champions page */

          championsPage = document.querySelector('#champions-page');
          _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_4__["default"].createChildElementWithClass('div', 'loader', championsPage);
          championsSection = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_4__["default"].createChildElementWithClass('div', 'champions-section', championsPage);
          _context.next = 13;
          return (0,_championData_getAllChampions__WEBPACK_IMPORTED_MODULE_3__.getAllChampionDetails)();

        case 13:
          allChampions = _context.sent;
          allChampionsArray = Object.values(allChampions);
          allChampionsArray.forEach(function (champion) {
            (0,_renderHelpers__WEBPACK_IMPORTED_MODULE_5__.createChampionContainer)(champion, championsSection);
          });
          /* Creates autocomplete div for the search bar */

          searchContainer = document.querySelector('.search-container');
          autoCompleteNames = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_4__["default"].createChildElementWithClass('div', 'auto-complete-names', searchContainer);
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

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));

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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stylesheets/champions.scss":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stylesheets/champions.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --rasin-black: #1d1e2c;\n  --transparent-rasin-black: #1d1e2cc7;\n  --dark-gold: #927543;\n  --light-gold: #c7ab6e;\n}\n\n#champions-page {\n  background-color: var(--rasin-black);\n  min-height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: -4;\n  font-family: \"Barlow\", sans-serif;\n}\n#champions-page .app-name-container {\n  background-color: var(--dark-gold);\n  padding: 0.3em;\n  border-radius: 8px 0px 8px 0;\n}\n#champions-page .app-name {\n  font-weight: 900;\n  font-size: 2rem;\n  letter-spacing: 3px;\n  cursor: pointer;\n}\n#champions-page .app-name-container:hover {\n  color: var(--dark-gold);\n  background-color: white;\n}\n#champions-page .page-header {\n  display: flex;\n  justify-content: space-evenly;\n  color: white;\n  background-color: var(--rasin-black);\n  max-width: 100%;\n  padding: 1em 0;\n  border-style: solid;\n  border-color: var(--dark-gold);\n  border-width: 0 0 2px 0;\n  align-items: center;\n}\n#champions-page .search-container {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  max-width: 100%;\n}\n#champions-page .auto-complete-names {\n  position: absolute;\n  border: 1px solid #d4d4d4;\n  border-bottom: none;\n  border-top: none;\n  z-index: 4;\n  top: 100%;\n  width: 100%;\n  max-height: 14rem;\n  overflow: auto;\n  scroll-behavior: smooth;\n  display: none;\n}\n#champions-page .auto-complete-name-wrapper {\n  padding: 10px;\n  cursor: pointer;\n  background-color: #fff;\n  border-bottom: 1px solid #d4d4d4;\n  color: var(--rasin-black);\n  font-weight: 600;\n  width: 100%;\n}\n#champions-page .auto-complete-name-wrapper:hover {\n  background-color: var(--light-gold);\n}\n#champions-page .auto-complete-name-wrapper:focus {\n  background-color: var(--light-gold);\n}\n#champions-page .search {\n  padding: 0.5em;\n  min-width: 18em;\n  background: #e2e4e9;\n  outline: none;\n  border-style: none;\n  color: var(--rasin-black);\n  font-weight: 600;\n  min-height: 2.6em;\n  font-size: 1em;\n}\n#champions-page .champions-section {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-auto-rows: auto;\n  grid-column-gap: 1em;\n  max-width: 80%;\n  margin: auto;\n  margin-top: 2em;\n  margin-bottom: 11em;\n}\n#champions-page .champion-container.shown {\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  cursor: pointer;\n  max-width: 9rem;\n  position: relative;\n  margin-top: 1.5em;\n  opacity: 0.8;\n  transition: all 0.2s ease-in-out;\n}\n#champions-page .champion-container.shown:hover {\n  transform: scale(1.05);\n  opacity: 1;\n}\n#champions-page .champion-container.shown:focus {\n  transform: scale(1.05);\n  opacity: 1;\n}\n#champions-page .champion-container.hidden {\n  display: none;\n}\n#champions-page .champion-img {\n  max-height: 100%;\n  max-width: 100%;\n  border-radius: 8%;\n}\n#champions-page .champion-img:focus .champion-container.shown {\n  transform: scale(1.05);\n  opacity: 1;\n}\n#champions-page .champion-name-wrapper {\n  position: relative;\n  margin: 0 auto;\n  text-align: center;\n  margin-top: -3.2em;\n  background-color: var(--transparent-rasin-black);\n  width: 100%;\n  height: 100%;\n  padding: 0.2em 0 0.2em;\n}\n#champions-page .champion-name {\n  color: white;\n  font-size: 1.2em;\n  font-weight: 600;\n  font-family: \"Barlow\", sans-serif;\n}\n#champions-page .filter-sort-section {\n  display: flex;\n  width: 57%;\n  margin: 1em auto 3em auto;\n}\n#champions-page .lane-filter-header {\n  display: flex;\n  justify-content: center;\n  font-size: 1.2em;\n  font-weight: 600;\n  flex: 1;\n  width: 76%;\n  margin: 1em auto;\n  justify-content: space-evenly;\n}\n#champions-page .header-option {\n  cursor: pointer;\n  color: #70757a;\n}\n#champions-page .header-option:hover {\n  color: white;\n  border-bottom: solid 3px var(--light-gold);\n}\n#champions-page .header-option.active {\n  color: white;\n  border-bottom: solid 3px var(--light-gold);\n}\n#champions-page .dropdown {\n  margin: 0 0.4em 0.4em 0.4em;\n  max-width: 100%;\n  position: relative;\n  flex: 1;\n}\n#champions-page .dropdown-btn {\n  display: flex;\n  border-style: none;\n  justify-content: space-between;\n  background-color: #dfdfe1;\n  color: #2f1d1d;\n  font-weight: 600;\n  padding: 0.5em;\n  font-size: 1em;\n  width: 100%;\n  border-bottom: 2px solid;\n}\n#champions-page .dropdown-btn::after {\n  content: \"➤\";\n  display: inline-block;\n  transform: rotate(90deg);\n}\n#champions-page .dropdown-options {\n  flex-direction: column;\n  display: none;\n  position: absolute;\n  width: 100%;\n  z-index: 2;\n}\n#champions-page .dropdown-option {\n  color: var(--rasin-black);\n  font-weight: 600;\n  background-color: #f8f8f8;\n  cursor: pointer;\n  padding: 0.5em;\n  color: white;\n  color: var(--rasin-black);\n  border-bottom: 2px solid #f8f8f8;\n}\n#champions-page .dropdown-option:hover {\n  background-color: #e1dede;\n}\n#champions-page .dropdown-option.active {\n  background-color: var(--light-gold);\n}\n#champions-page .loader {\n  font-size: 10px;\n  margin: 50px auto;\n  text-indent: -9999em;\n  width: 11em;\n  height: 11em;\n  border-radius: 50%;\n  background: #2e3436;\n  background: -moz-linear-gradient(left, #2e3436 10%, rgba(143, 89, 2, 0) 42%);\n  background: -webkit-linear-gradient(left, #2e3436 10%, rgba(143, 89, 2, 0) 42%);\n  background: -o-linear-gradient(left, #2e3436 10%, rgba(143, 89, 2, 0) 42%);\n  background: -ms-linear-gradient(left, #2e3436 10%, rgba(143, 89, 2, 0) 42%);\n  background: linear-gradient(to right, #2e3436 10%, rgba(143, 89, 2, 0) 42%);\n  position: relative;\n  -webkit-animation: load3 1.4s infinite linear;\n  animation: load3 1.4s infinite linear;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  display: none;\n  position: relative;\n  top: 17.3em;\n  z-index: 5;\n}\n#champions-page .loader:before {\n  width: 50%;\n  height: 50%;\n  background: var(--dark-gold);\n  border-radius: 100% 0 0 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: \"\";\n}\n#champions-page .loader:after {\n  background: var(--rasin-black);\n  width: 75%;\n  height: 75%;\n  border-radius: 50%;\n  content: \"\";\n  margin: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n@-webkit-keyframes load3 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@keyframes load3 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n#champions-page .footer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: white;\n  font-size: 0.8em;\n  position: absolute;\n  bottom: 0;\n  padding: 0 1.3em 0.6em 1.3em;\n  text-align: center;\n  background-color: var(--dark-gold);\n  width: 100%;\n  font-weight: 600;\n}\n#champions-page .footer-links {\n  display: flex;\n}\n#champions-page .github-link {\n  margin-bottom: 0.2em;\n  padding-top: 0.4em;\n  margin-right: 1em;\n}\n#champions-page .github-icon {\n  width: 2.5em;\n  transition: fill 0.2s ease-in-out;\n}\n#champions-page .github-link:hover .github-icon {\n  fill: var(--rasin-black);\n}\n#champions-page .linkedin-link {\n  margin-bottom: 0.2em;\n  padding-top: 0.4em;\n  margin-left: 1em;\n}\n#champions-page .linkedin-icon {\n  width: 2.5em;\n  transition: fill 0.2s ease-in-out;\n}\n#champions-page .linkedin-link:hover .linkedin-icon {\n  fill: var(--rasin-black);\n}\n@media (min-width: 850px) {\n  #champions-page .champions-section {\n    grid-template-columns: repeat(4, 1fr);\n  }\n  #champions-page .champion-container.shown {\n    max-width: 10rem;\n  }\n  #champions-page .lane-filter-header {\n    width: 54%;\n  }\n}\n@media (min-width: 1000px) {\n  #champions-page .dropdown {\n    grid-row-start: 2;\n  }\n  #champions-page .champions-section {\n    grid-column-gap: 0;\n  }\n  #champions-page .champion-name-wrapper {\n    margin-top: -3.6em;\n  }\n  #champions-page .champion-name {\n    font-size: 1.4em;\n  }\n}\n@media (min-width: 1200px) {\n  #champions-page .champions-section {\n    grid-template-columns: repeat(5, 1fr);\n  }\n}\n@media (min-width: 1500px) {\n  #champions-page .champions-section {\n    grid-template-columns: repeat(6, 1fr);\n  }\n  #champions-page .champion-container.shown {\n    max-width: 12rem;\n  }\n}\n@media (max-width: 700px) {\n  #champions-page .header-option {\n    margin-right: 0.5em;\n  }\n  #champions-page .filter-sort-section {\n    width: 94%;\n  }\n  #champions-page .search {\n    min-width: 16em;\n    min-height: 1.6em;\n    font-size: 0.95em;\n  }\n}\n@media (max-width: 500px) {\n  #champions-page .champions-section {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  #champions-page .page-header {\n    flex-direction: column;\n  }\n  #champions-page .app-name-container {\n    margin-bottom: 1em;\n  }\n}\n@media (max-width: 360px) {\n  #champions-page .lane-filter-header {\n    font-size: 1em;\n  }\n}", "",{"version":3,"sources":["webpack://./src/stylesheets/champions.scss"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --rasin-black: #1d1e2c;\n  --transparent-rasin-black: #1d1e2cc7;\n  --dark-gold: #927543;\n  --light-gold: #c7ab6e;\n}\n\n#champions-page {\n  background-color: var(--rasin-black);\n  min-height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: -4;\n  font-family: \"Barlow\", sans-serif;\n\n  .app-name-container {\n    background-color: var(--dark-gold);\n    padding: 0.3em;\n    border-radius: 8px 0px 8px 0;\n  }\n\n  .app-name {\n    font-weight: 900;\n    font-size: 2rem;\n    letter-spacing: 3px;\n    cursor: pointer;\n  }\n\n  .app-name-container:hover {\n    color: var(--dark-gold);\n    background-color: white;\n  }\n\n  .page-header {\n    display: flex;\n    justify-content: space-evenly;\n    color: white;\n    background-color: var(--rasin-black);\n    max-width: 100%;\n    padding: 1em 0;\n    border-style: solid;\n    border-color: var(--dark-gold);\n    border-width: 0 0 2px 0;\n    align-items: center;\n  }\n\n  .search-container {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    max-width: 100%;\n  }\n\n  .auto-complete-names {\n    position: absolute;\n    border: 1px solid #d4d4d4;\n    border-bottom: none;\n    border-top: none;\n    z-index: 4;\n    top: 100%;\n    width: 100%;\n    max-height: 14rem;\n    overflow: auto;\n    scroll-behavior: smooth;\n    display: none;\n  }\n\n  .auto-complete-name-wrapper {\n    padding: 10px;\n    cursor: pointer;\n    background-color: #fff;\n    border-bottom: 1px solid #d4d4d4;\n    color: var(--rasin-black);\n    font-weight: 600;\n    width: 100%;\n  }\n\n  .auto-complete-name-wrapper:hover {\n    background-color: var(--light-gold);\n  }\n\n  .auto-complete-name-wrapper:focus {\n    background-color: var(--light-gold);\n  }\n\n  .search {\n    padding: 0.5em;\n    min-width: 18em;\n    background: #e2e4e9;\n    outline: none;\n    border-style: none;\n    color: var(--rasin-black);\n    font-weight: 600;\n    min-height: 2.6em;\n    font-size: 1em;\n  }\n\n  .champions-section {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-auto-rows: auto;\n    grid-column-gap: 1em;\n    max-width: 80%;\n    margin: auto;\n    margin-top: 2em;\n    margin-bottom: 11em;\n  }\n\n  .champion-container.shown {\n    display: flex;\n    flex-direction: column;\n    margin: 0 auto;\n    cursor: pointer;\n    max-width: 9rem;\n    position: relative;\n    margin-top: 1.5em;\n    opacity: 0.8;\n    transition: all 0.2s ease-in-out;\n  }\n\n  .champion-container.shown:hover {\n    transform: scale(1.05);\n    opacity: 1;\n  }\n\n  .champion-container.shown:focus {\n    transform: scale(1.05);\n    opacity: 1;\n  }\n\n  .champion-container.hidden {\n    display: none;\n  }\n\n  .champion-img {\n    max-height: 100%;\n    max-width: 100%;\n    border-radius: 8%;\n  }\n\n  .champion-img:focus {\n    .champion-container.shown {\n      transform: scale(1.05);\n      opacity: 1;\n    }\n  }\n\n  .champion-name-wrapper {\n    position: relative;\n    margin: 0 auto;\n    text-align: center;\n    margin-top: -3.2em;\n    background-color: var(--transparent-rasin-black);\n    width: 100%;\n    height: 100%;\n    padding: 0.2em 0 0.2em;\n  }\n\n  .champion-name {\n    color: white;\n    font-size: 1.2em;\n    font-weight: 600;\n    font-family: \"Barlow\", sans-serif;\n  }\n\n  .filter-sort-section {\n    display: flex;\n    width: 57%;\n\n    margin: 1em auto 3em auto;\n  }\n\n  .lane-filter-header {\n    display: flex;\n    justify-content: center;\n    font-size: 1.2em;\n    font-weight: 600;\n    flex: 1;\n    width: 76%;\n    margin: 1em auto;\n    justify-content: space-evenly;\n  }\n\n  .header-option {\n    cursor: pointer;\n    color: #70757a;\n  }\n\n  .header-option:hover {\n    color: white;\n    border-bottom: solid 3px var(--light-gold);\n  }\n\n  .header-option.active {\n    color: white;\n    border-bottom: solid 3px var(--light-gold);\n  }\n\n  .dropdown {\n    margin: 0 0.4em 0.4em 0.4em;\n    max-width: 100%;\n    position: relative;\n    flex: 1;\n  }\n\n  .dropdown-btn {\n    display: flex;\n    border-style: none;\n    justify-content: space-between;\n    background-color: #dfdfe1;\n    color: #2f1d1d;\n    font-weight: 600;\n    padding: 0.5em;\n    font-size: 1em;\n    width: 100%;\n    border-bottom: 2px solid;\n  }\n\n  .dropdown-btn::after {\n    content: \"\\27A4\";\n    display: inline-block;\n    transform: rotate(90deg);\n  }\n\n  .dropdown-options {\n    flex-direction: column;\n    display: none;\n    position: absolute;\n    width: 100%;\n    z-index: 2;\n  }\n\n  .dropdown-option {\n    color: var(--rasin-black);\n    font-weight: 600;\n    background-color: #f8f8f8;\n    cursor: pointer;\n    padding: 0.5em;\n    color: white;\n    color: var(--rasin-black);\n    border-bottom: 2px solid #f8f8f8;\n  }\n\n  .dropdown-option:hover {\n    background-color: #e1dede;\n  }\n\n  .dropdown-option.active {\n    background-color: var(--light-gold);\n  }\n\n  .loader {\n    font-size: 10px;\n    margin: 50px auto;\n    text-indent: -9999em;\n    width: 11em;\n    height: 11em;\n    border-radius: 50%;\n    background: #2e3436;\n    background: -moz-linear-gradient(\n      left,\n      #2e3436 10%,\n      rgba(143, 89, 2, 0) 42%\n    );\n    background: -webkit-linear-gradient(\n      left,\n      #2e3436 10%,\n      rgba(143, 89, 2, 0) 42%\n    );\n    background: -o-linear-gradient(left, #2e3436 10%, rgba(143, 89, 2, 0) 42%);\n    background: -ms-linear-gradient(left, #2e3436 10%, rgba(143, 89, 2, 0) 42%);\n    background: linear-gradient(to right, #2e3436 10%, rgba(143, 89, 2, 0) 42%);\n    position: relative;\n    -webkit-animation: load3 1.4s infinite linear;\n    animation: load3 1.4s infinite linear;\n    -webkit-transform: translateZ(0);\n    -ms-transform: translateZ(0);\n    transform: translateZ(0);\n    display: none;\n    position: relative;\n    top: 17.3em;\n    z-index: 5;\n  }\n  .loader:before {\n    width: 50%;\n    height: 50%;\n    background: var(--dark-gold);\n    border-radius: 100% 0 0 0;\n    position: absolute;\n    top: 0;\n    left: 0;\n    content: \"\";\n  }\n  .loader:after {\n    background: var(--rasin-black);\n    width: 75%;\n    height: 75%;\n    border-radius: 50%;\n    content: \"\";\n    margin: auto;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n  }\n  @-webkit-keyframes load3 {\n    0% {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n  @keyframes load3 {\n    0% {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n\n  .footer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: white;\n    font-size: 0.8em;\n    position: absolute;\n    bottom: 0;\n    padding: 0 1.3em 0.6em 1.3em;\n    text-align: center;\n    background-color: var(--dark-gold);\n    width: 100%;\n    font-weight: 600;\n  }\n\n  .footer-links {\n    display: flex;\n  }\n\n  .github-link {\n    margin-bottom: 0.2em;\n    padding-top: 0.4em;\n    margin-right: 1em;\n  }\n\n  .github-icon {\n    width: 2.5em;\n    transition: fill 0.2s ease-in-out;\n  }\n\n  .github-link:hover {\n    .github-icon {\n      fill: var(--rasin-black);\n    }\n  }\n\n  .linkedin-link {\n    margin-bottom: 0.2em;\n    padding-top: 0.4em;\n    margin-left: 1em;\n  }\n\n  .linkedin-icon {\n    width: 2.5em;\n    transition: fill 0.2s ease-in-out;\n  }\n\n  .linkedin-link:hover {\n    .linkedin-icon {\n      fill: var(--rasin-black);\n    }\n  }\n\n  @media (min-width: 850px) {\n    .champions-section {\n      grid-template-columns: repeat(4, 1fr);\n    }\n\n    .champion-container.shown {\n      max-width: 10rem;\n    }\n\n    .lane-filter-header {\n      width: 54%;\n    }\n  }\n\n  @media (min-width: 1000px) {\n    .dropdown {\n      grid-row-start: 2;\n    }\n\n    .champions-section {\n      grid-column-gap: 0;\n    }\n\n    .champion-name-wrapper {\n      margin-top: -3.6em;\n    }\n\n    .champion-name {\n      font-size: 1.4em;\n    }\n  }\n\n  @media (min-width: 1200px) {\n    .champions-section {\n      grid-template-columns: repeat(5, 1fr);\n    }\n  }\n\n  @media (min-width: 1500px) {\n    .champions-section {\n      grid-template-columns: repeat(6, 1fr);\n    }\n\n    .champion-container.shown {\n      max-width: 12rem;\n    }\n  }\n\n  @media (max-width: 700px) {\n    .header-option {\n      margin-right: 0.5em;\n    }\n\n    .filter-sort-section {\n      width: 94%;\n    }\n\n    .search {\n      min-width: 16em;\n      min-height: 1.6em;\n      font-size: 0.95em;\n    }\n  }\n\n  @media (max-width: 500px) {\n    .champions-section {\n      grid-template-columns: repeat(2, 1fr);\n    }\n\n    .page-header {\n      flex-direction: column;\n    }\n\n    .app-name-container {\n      margin-bottom: 1em;\n    }\n  }\n\n  @media (max-width: 360px) {\n    .lane-filter-header {\n      font-size: 1em;\n    }\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/stylesheets/champions.scss":
/*!****************************************!*\
  !*** ./src/stylesheets/champions.scss ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_champions_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./champions.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stylesheets/champions.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_champions_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_champions_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_champions_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_champions_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/*!**************************!*\
  !*** ./src/champions.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stylesheets_modals_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stylesheets/modals.scss */ "./src/stylesheets/modals.scss");
/* harmony import */ var _stylesheets_champions_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stylesheets/champions.scss */ "./src/stylesheets/champions.scss");
/* harmony import */ var _templates_championsPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./templates/championsPage */ "./src/templates/championsPage.js");
/* harmony import */ var _appControl_championsPageController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./appControl/championsPageController */ "./src/appControl/championsPageController.js");
/* harmony import */ var _appControl_searchbarController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./appControl/searchbarController */ "./src/appControl/searchbarController.js");








var createChampionsPage = function createChampionsPage() {
  setTimeout( /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var championId;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,_templates_championsPage__WEBPACK_IMPORTED_MODULE_4__["default"])();

          case 2:
            _appControl_championsPageController__WEBPACK_IMPORTED_MODULE_5__["default"].championsPageListeners();
            _appControl_searchbarController__WEBPACK_IMPORTED_MODULE_6__["default"].searchContainerListeners();
            championId = localStorage.getItem('championId');

            if (championId) {
              _appControl_championsPageController__WEBPACK_IMPORTED_MODULE_5__["default"].displayChampionModal(championId);
              localStorage.clear();
            }

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), 500);
};

createChampionsPage();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbXBpb25zLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGdIQUErQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0EvQyxJQUFNQSx1QkFBdUIsR0FBSSxZQUFNO0FBQ3JDLE1BQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsZ0JBQUQsRUFBc0I7QUFDaEQsUUFBTUMsYUFBYSxHQUFHQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLFlBQTFCLENBQXRCO0FBQ0EsUUFBTUMsWUFBWSxHQUFHRixRQUFRLENBQUNDLGdCQUFULENBQTBCLGVBQTFCLENBQXJCO0FBRUFGLElBQUFBLGFBQWEsQ0FBQ0ksT0FBZCxDQUFzQixVQUFDQyxHQUFELEVBQVM7QUFDN0JBLE1BQUFBLEdBQUcsQ0FBQ0MsU0FBSixDQUFjQyxNQUFkLENBQXFCLFNBQXJCO0FBQ0QsS0FGRDtBQUdBSixJQUFBQSxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsVUFBQ0ksSUFBRCxFQUFVO0FBQzdCQSxNQUFBQSxJQUFJLENBQUNGLFNBQUwsQ0FBZUMsTUFBZixDQUFzQixRQUF0QjtBQUNELEtBRkQ7QUFJQSxRQUFNRSxZQUFZLEdBQUdSLFFBQVEsQ0FBQ1MsYUFBVCxZQUEyQlgsZ0JBQTNCLFVBQXJCO0FBQ0FVLElBQUFBLFlBQVksQ0FBQ0UsU0FBYixHQUF5QixtQkFBekI7QUFFQSxRQUFNQyxhQUFhLEdBQUdYLFFBQVEsQ0FBQ1MsYUFBVCxZQUEyQlgsZ0JBQTNCLGNBQXRCO0FBQ0FhLElBQUFBLGFBQWEsQ0FBQ0QsU0FBZCxHQUEwQixxQkFBMUI7QUFDRCxHQWhCRDs7QUFrQkEsTUFBTUUsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDQyxtQkFBRCxFQUF5QjtBQUNuRCxRQUFNQyxTQUFTLEdBQUdkLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsaUJBQTFCLENBQWxCO0FBQ0FhLElBQUFBLFNBQVMsQ0FBQ1gsT0FBVixDQUFrQixVQUFDWSxRQUFELEVBQWM7QUFDOUIsVUFBTUMsWUFBWSxHQUFHRCxRQUFRLENBQUNFLEVBQVQsQ0FBWUMsU0FBWixDQUFzQixDQUF0QixFQUF5QkgsUUFBUSxDQUFDRSxFQUFULENBQVlFLE9BQVosQ0FBb0IsR0FBcEIsQ0FBekIsQ0FBckI7O0FBQ0EsVUFBSUgsWUFBWSxLQUFLSCxtQkFBbUIsQ0FBQ0ksRUFBekMsRUFBNkM7QUFDM0MsWUFBTUcsY0FBYyxHQUFHTCxRQUF2QjtBQUNBSyxRQUFBQSxjQUFjLENBQUNDLEtBQWYsQ0FBcUJDLE9BQXJCLEdBQStCLE9BQS9CO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsWUFBTUMsY0FBYyxHQUFHUixRQUF2QjtBQUNBUSxRQUFBQSxjQUFjLENBQUNGLEtBQWYsQ0FBcUJDLE9BQXJCLEdBQStCLE1BQS9CO0FBQ0Q7QUFDRixLQVREO0FBVUQsR0FaRDs7QUFjQSxNQUFNRSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLGdCQUFELEVBQXNCO0FBQzlDLFFBQU1DLFdBQVcsR0FBR0QsZ0JBQWdCLENBQUNFLGtCQUFyQztBQUNBRCxJQUFBQSxXQUFXLENBQUNMLEtBQVosQ0FBa0JDLE9BQWxCLEdBQTRCLE1BQTVCO0FBQ0QsR0FIRDs7QUFLQSxNQUFNTSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLGtCQUFELEVBQXdCO0FBQzlDLFFBQU1ILFdBQVcsR0FBR0csa0JBQWtCLENBQUNGLGtCQUF2QztBQUNBRCxJQUFBQSxXQUFXLENBQUNMLEtBQVosQ0FBa0JDLE9BQWxCLEdBQTRCLE1BQTVCO0FBQ0QsR0FIRDs7QUFLQSxNQUFNUSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLGNBQUQsRUFBb0I7QUFDM0MsUUFBTUMsbUJBQW1CLEdBQUdoQyxRQUFRLENBQUNTLGFBQVQsQ0FBdUIsd0JBQXZCLENBQTVCO0FBQ0EsUUFBTXdCLGlCQUFpQixHQUFHakMsUUFBUSxDQUFDUyxhQUFULENBQXVCLDZCQUF2QixDQUExQjtBQUNBLFFBQU15QixRQUFRLEdBQUdsQyxRQUFRLENBQUNTLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBakI7QUFFQXdCLElBQUFBLGlCQUFpQixDQUFDdkIsU0FBbEIsR0FBOEIsc0JBQTlCO0FBQ0EsUUFBTXlCLFVBQVUsR0FBR0gsbUJBQW1CLENBQUNJLGlCQUF2QztBQUNBLFFBQU1DLFNBQVMsR0FBR0wsbUJBQW1CLENBQUNNLGdCQUF0Qzs7QUFFQSxRQUFJSCxVQUFVLEtBQUtGLGlCQUFmLElBQW9DRixjQUFjLENBQUNRLFFBQWYsQ0FBd0IsWUFBeEIsQ0FBeEMsRUFBK0U7QUFDN0VGLE1BQUFBLFNBQVMsQ0FBQzNCLFNBQVYsR0FBc0IsNEJBQXRCO0FBQ0F3QixNQUFBQSxRQUFRLENBQUNNLFdBQVQsR0FBdUJILFNBQVMsQ0FBQ3BCLEVBQWpDO0FBQ0QsS0FIRCxNQUdPLElBQUlvQixTQUFTLEtBQUtKLGlCQUFkLElBQW1DRixjQUFjLENBQUNRLFFBQWYsQ0FBd0IsYUFBeEIsQ0FBdkMsRUFBK0U7QUFDcEZKLE1BQUFBLFVBQVUsQ0FBQ3pCLFNBQVgsR0FBdUIsNEJBQXZCO0FBQ0F3QixNQUFBQSxRQUFRLENBQUNNLFdBQVQsR0FBdUJMLFVBQVUsQ0FBQ2xCLEVBQWxDO0FBQ0QsS0FITSxNQUdBLElBQUljLGNBQWMsQ0FBQ1EsUUFBZixDQUF3QixhQUF4QixDQUFKLEVBQTRDO0FBQ2pETixNQUFBQSxpQkFBaUIsQ0FBQ04sa0JBQWxCLENBQXFDakIsU0FBckMsR0FBaUQsNEJBQWpEO0FBQ0F3QixNQUFBQSxRQUFRLENBQUNNLFdBQVQsR0FBdUJQLGlCQUFpQixDQUFDTixrQkFBbEIsQ0FBcUNWLEVBQTVEO0FBQ0QsS0FITSxNQUdBO0FBQ0xnQixNQUFBQSxpQkFBaUIsQ0FBQ1Esc0JBQWxCLENBQXlDL0IsU0FBekMsR0FBcUQsNEJBQXJEO0FBQ0F3QixNQUFBQSxRQUFRLENBQUNNLFdBQVQsR0FBdUJQLGlCQUFpQixDQUFDUSxzQkFBbEIsQ0FBeUN4QixFQUFoRTtBQUNEO0FBQ0YsR0F0QkQ7O0FBd0JBLE1BQU15QixjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0IsUUFBTUMsYUFBYSxHQUFHM0MsUUFBUSxDQUFDUyxhQUFULENBQXVCLGlCQUF2QixDQUF0QjtBQUNBLFFBQU1tQyxZQUFZLEdBQUdELGFBQWEsQ0FBQ2xDLGFBQWQsQ0FBNEIsZ0JBQTVCLENBQXJCO0FBQ0EsUUFBTW9DLGFBQWEsR0FBR0YsYUFBYSxDQUFDbEMsYUFBZCxDQUE0QixpQkFBNUIsQ0FBdEI7QUFDQSxRQUFNcUMsYUFBYSxHQUFHSCxhQUFhLENBQUNsQyxhQUFkLENBQTRCLGlCQUE1QixDQUF0QjtBQUNBLFFBQU1zQyxZQUFZLEdBQUdKLGFBQWEsQ0FBQ2xDLGFBQWQsQ0FBNEIsZ0JBQTVCLENBQXJCO0FBQ0EsUUFBTXVDLGNBQWMsR0FBR0wsYUFBYSxDQUFDbEMsYUFBZCxDQUE0QixrQkFBNUIsQ0FBdkI7QUFDQSxRQUFNd0MsWUFBWSxHQUFHTixhQUFhLENBQUNsQyxhQUFkLENBQTRCLGdCQUE1QixDQUFyQjtBQUVBLFFBQU15QyxlQUFlLEdBQUcsQ0FBQ04sWUFBRCxFQUFlQyxhQUFmLEVBQThCQyxhQUE5QixDQUF4QjtBQUNBSSxJQUFBQSxlQUFlLENBQUMvQyxPQUFoQixDQUF3QixVQUFDZ0QsT0FBRCxFQUFhO0FBQ25DLFVBQU1DLGNBQWMsR0FBR0QsT0FBdkI7QUFDQUMsTUFBQUEsY0FBYyxDQUFDWixXQUFmLEdBQTZCLEVBQTdCO0FBQ0QsS0FIRDtBQUtBTyxJQUFBQSxZQUFZLENBQUN6QyxNQUFiO0FBQ0EwQyxJQUFBQSxjQUFjLENBQUMxQyxNQUFmO0FBQ0EyQyxJQUFBQSxZQUFZLENBQUMzQyxNQUFiO0FBQ0QsR0FsQkQ7O0FBb0JBLE1BQU0rQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUIsUUFBTUMsY0FBYyxHQUFHdEQsUUFBUSxDQUFDUyxhQUFULENBQXVCLGtCQUF2QixDQUF2QjtBQUNBLFFBQU1tQyxZQUFZLEdBQUdVLGNBQWMsQ0FBQzdDLGFBQWYsQ0FBNkIsZ0JBQTdCLENBQXJCO0FBQ0EsUUFBTW9DLGFBQWEsR0FBR1MsY0FBYyxDQUFDN0MsYUFBZixDQUE2QixpQkFBN0IsQ0FBdEI7QUFDQSxRQUFNOEMscUJBQXFCLEdBQUdELGNBQWMsQ0FBQzdDLGFBQWYsQ0FBNkIsMEJBQTdCLENBQTlCO0FBQ0EsUUFBTStDLGNBQWMsR0FBR0YsY0FBYyxDQUFDckQsZ0JBQWYsQ0FBZ0MsZUFBaEMsQ0FBdkI7QUFDQSxRQUFNd0QsaUJBQWlCLEdBQUdILGNBQWMsQ0FBQzdDLGFBQWYsQ0FBNkIsc0JBQTdCLENBQTFCO0FBQ0EsUUFBTWlELFlBQVksR0FBR0osY0FBYyxDQUFDN0MsYUFBZixDQUE2QixnQkFBN0IsQ0FBckI7QUFDQSxRQUFNa0QsYUFBYSxHQUFHTCxjQUFjLENBQUM3QyxhQUFmLENBQTZCLGlCQUE3QixDQUF0QjtBQUVBLFFBQU1tRCxnQkFBZ0IsR0FBRyxDQUFDaEIsWUFBRCxFQUFlQyxhQUFmLEVBQThCVSxxQkFBOUIsQ0FBekI7QUFDQUssSUFBQUEsZ0JBQWdCLENBQUN6RCxPQUFqQixDQUF5QixVQUFDZ0QsT0FBRCxFQUFhO0FBQ3BDLFVBQU1DLGNBQWMsR0FBR0QsT0FBdkI7QUFDQUMsTUFBQUEsY0FBYyxDQUFDWixXQUFmLEdBQTZCLEVBQTdCO0FBQ0QsS0FIRDtBQUlBZ0IsSUFBQUEsY0FBYyxDQUFDckQsT0FBZixDQUF1QixVQUFDMEQsVUFBRCxFQUFnQjtBQUNyQyxVQUFNQyxpQkFBaUIsR0FBR0QsVUFBMUI7QUFDQUMsTUFBQUEsaUJBQWlCLENBQUN4RCxNQUFsQjtBQUNELEtBSEQ7QUFJQSxRQUFNeUQsaUJBQWlCLEdBQUcsQ0FBQ04saUJBQUQsRUFBb0JDLFlBQXBCLEVBQWtDQyxhQUFsQyxDQUExQjtBQUNBSSxJQUFBQSxpQkFBaUIsQ0FBQzVELE9BQWxCLENBQTBCLFVBQUM2RCxPQUFELEVBQWE7QUFDckMsVUFBTUMsY0FBYyxHQUFHRCxPQUF2QjtBQUNBQyxNQUFBQSxjQUFjLENBQUMzRCxNQUFmO0FBQ0QsS0FIRDtBQUlELEdBeEJEOztBQTBCQSxNQUFNNEQsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCLFFBQU1sQyxtQkFBbUIsR0FBR2hDLFFBQVEsQ0FBQ1MsYUFBVCxDQUF1Qix3QkFBdkIsQ0FBNUI7QUFDQXVCLElBQUFBLG1CQUFtQixDQUFDMUIsTUFBcEI7QUFDRCxHQUhEOztBQUtBLE1BQU02RCxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07QUFDL0IsUUFBTUMsS0FBSyxHQUFHcEUsUUFBUSxDQUFDUyxhQUFULENBQXVCLFFBQXZCLENBQWQ7QUFDQSxRQUFNa0MsYUFBYSxHQUFHM0MsUUFBUSxDQUFDUyxhQUFULENBQXVCLGlCQUF2QixDQUF0QjtBQUNBLFFBQU02QyxjQUFjLEdBQUd0RCxRQUFRLENBQUNTLGFBQVQsQ0FBdUIsa0JBQXZCLENBQXZCO0FBQ0EsUUFBTTRELGNBQWMsR0FBR3JFLFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QixrQkFBdkIsQ0FBdkI7QUFFQTJELElBQUFBLEtBQUssQ0FBQy9DLEtBQU4sQ0FBWUMsT0FBWixHQUFzQixNQUF0QjtBQUNBcUIsSUFBQUEsYUFBYSxDQUFDdEIsS0FBZCxDQUFvQkMsT0FBcEIsR0FBOEIsT0FBOUI7QUFDQWdDLElBQUFBLGNBQWMsQ0FBQ2pDLEtBQWYsQ0FBcUJDLE9BQXJCLEdBQStCLE1BQS9CO0FBQ0ErQyxJQUFBQSxjQUFjLENBQUNoRCxLQUFmLENBQXFCQyxPQUFyQixHQUErQixNQUEvQjtBQUNELEdBVkQ7O0FBWUEsTUFBTWdELGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2xDLFFBQU1ILEtBQUssR0FBR3BFLFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QixRQUF2QixDQUFkOztBQUVBLFFBQUk4RCxLQUFLLENBQUNDLE1BQU4sQ0FBYTlELFNBQWIsS0FBMkIsV0FBL0IsRUFBNEM7QUFDMUMsVUFBTStELFNBQVMsR0FBR0YsS0FBSyxDQUFDQyxNQUFOLENBQWF2RCxFQUFiLENBQWdCRSxPQUFoQixDQUF3QixHQUF4QixDQUFsQjtBQUNBLFVBQU11RCxTQUFTLEdBQUdILEtBQUssQ0FBQ0MsTUFBTixDQUFhdkQsRUFBYixDQUFnQjBELEtBQWhCLENBQXNCLENBQXRCLEVBQXlCRixTQUF6QixDQUFsQjtBQUNBNUUsTUFBQUEsbUJBQW1CLENBQUM2RSxTQUFELENBQW5CO0FBQ0Q7O0FBRUQsUUFBSUgsS0FBSyxDQUFDQyxNQUFOLENBQWE5RCxTQUFiLEtBQTJCLGdCQUEvQixFQUFpRDtBQUMvQ0UsTUFBQUEsbUJBQW1CLENBQUMyRCxLQUFLLENBQUNDLE1BQVAsQ0FBbkI7QUFDRDs7QUFFRCxRQUFJSSxLQUFLLENBQUNDLElBQU4sQ0FBV04sS0FBSyxDQUFDQyxNQUFOLENBQWFuRSxTQUF4QixFQUFtQ2tDLFFBQW5DLENBQTRDLGtCQUE1QyxDQUFKLEVBQXFFO0FBQ25FVCxNQUFBQSxnQkFBZ0IsQ0FBQzhDLEtBQUssQ0FBQ0MsSUFBTixDQUFXTixLQUFLLENBQUNDLE1BQU4sQ0FBYW5FLFNBQXhCLENBQUQsQ0FBaEI7QUFDRDs7QUFFRCxRQUFJa0UsS0FBSyxDQUFDQyxNQUFOLENBQWE5RCxTQUFiLEtBQTJCLGlCQUEvQixFQUFrRDtBQUNoRDBELE1BQUFBLEtBQUssQ0FBQ1UsbUJBQU4sQ0FBMEIsT0FBMUIsRUFBbUNSLGdCQUFuQztBQUNBSCxNQUFBQSxrQkFBa0I7QUFDbEJ6QixNQUFBQSxjQUFjO0FBQ2RXLE1BQUFBLGVBQWU7QUFDZmEsTUFBQUEsZUFBZTtBQUNoQjtBQUNGLEdBeEJEOztBQTBCQSxNQUFNYSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUNSLEtBQUQsRUFBVztBQUN0QyxRQUFJQSxLQUFLLENBQUNDLE1BQU4sQ0FBYTlELFNBQWIsS0FBMkIsVUFBM0IsSUFDQzZELEtBQUssQ0FBQ0MsTUFBTixDQUFhOUQsU0FBYixLQUEyQixvQkFEaEMsRUFDc0Q7QUFDcERjLE1BQUFBLGlCQUFpQixDQUFDK0MsS0FBSyxDQUFDQyxNQUFQLENBQWpCO0FBQ0Q7QUFDRixHQUxEOztBQU9BLE1BQU1RLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ1QsS0FBRCxFQUFXO0FBQ3JDLFFBQUlBLEtBQUssQ0FBQ0MsTUFBTixDQUFhOUQsU0FBYixLQUEyQixVQUEzQixJQUNENkQsS0FBSyxDQUFDQyxNQUFOLENBQWE5RCxTQUFiLEtBQTJCLG9CQUQ5QixFQUNvRDtBQUNsRCxVQUFJLENBQUM2RCxLQUFLLENBQUNDLE1BQVgsRUFBbUI7QUFFbkIsVUFBTVMsYUFBTixHQUF3QlYsS0FBeEIsQ0FBTVUsYUFBTjs7QUFFQSxhQUFPQSxhQUFQLEVBQXNCO0FBQ3BCLFlBQUlBLGFBQWEsS0FBS1YsS0FBSyxDQUFDQyxNQUE1QixFQUFvQztBQUNwQ1MsUUFBQUEsYUFBYSxHQUFHQSxhQUFhLENBQUNDLFVBQTlCO0FBQ0Q7O0FBRUR0RCxNQUFBQSxlQUFlLENBQUMyQyxLQUFLLENBQUNDLE1BQVAsQ0FBZjtBQUNEO0FBQ0YsR0FkRDs7QUFnQkEsTUFBTVcsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDWixLQUFELEVBQVc7QUFDbEMsUUFBTUYsY0FBYyxHQUFHckUsUUFBUSxDQUFDUyxhQUFULENBQXVCLGtCQUF2QixDQUF2Qjs7QUFDQSxRQUFJNEQsY0FBYyxDQUFDaEQsS0FBZixDQUFxQkMsT0FBckIsS0FBaUMsT0FBckMsRUFBOEM7QUFDNUMsVUFBSWlELEtBQUssQ0FBQ2EsR0FBTixLQUFjLFlBQWxCLEVBQWdDO0FBQzlCLFlBQU1DLFVBQVUsR0FBR3JGLFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QixjQUF2QixDQUFuQjtBQUNBcUIsUUFBQUEsZ0JBQWdCLENBQUM4QyxLQUFLLENBQUNDLElBQU4sQ0FBV1EsVUFBVSxDQUFDaEYsU0FBdEIsQ0FBRCxDQUFoQjtBQUNEOztBQUVELFVBQUlrRSxLQUFLLENBQUNhLEdBQU4sS0FBYyxXQUFsQixFQUErQjtBQUM3QixZQUFNRSxTQUFTLEdBQUd0RixRQUFRLENBQUNTLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBbEI7QUFDQXFCLFFBQUFBLGdCQUFnQixDQUFDOEMsS0FBSyxDQUFDQyxJQUFOLENBQVdTLFNBQVMsQ0FBQ2pGLFNBQXJCLENBQUQsQ0FBaEI7QUFDRDtBQUNGO0FBQ0YsR0FiRDs7QUFlQSxNQUFNa0Ysb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixHQUFNO0FBQ2pDLFFBQU1uQixLQUFLLEdBQUdwRSxRQUFRLENBQUNTLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZDtBQUVBMkQsSUFBQUEsS0FBSyxDQUFDb0IsZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0NsQixnQkFBaEM7QUFDQUYsSUFBQUEsS0FBSyxDQUFDb0IsZ0JBQU4sQ0FBdUIsV0FBdkIsRUFBb0NULG9CQUFwQztBQUNBWCxJQUFBQSxLQUFLLENBQUNvQixnQkFBTixDQUF1QixVQUF2QixFQUFtQ1IsbUJBQW5DO0FBQ0FoRixJQUFBQSxRQUFRLENBQUN3RixnQkFBVCxDQUEwQixTQUExQixFQUFxQ0wsZ0JBQXJDO0FBQ0QsR0FQRDs7QUFTQSxTQUFPO0FBQ0xJLElBQUFBLG9CQUFvQixFQUFwQkE7QUFESyxHQUFQO0FBR0QsQ0E5TStCLEVBQWhDOztBQWdOQSxpRUFBZTNGLHVCQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTXVHLHVCQUF1QixHQUFJLFlBQU07QUFDckMsTUFBTUMsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixDQUFDQyxlQUFELEVBQXFCO0FBQ2xELFFBQU1DLGtCQUFrQixHQUFHdEcsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixtQkFBMUIsQ0FBM0I7QUFDQXFHLElBQUFBLGtCQUFrQixDQUFDbkcsT0FBbkIsQ0FBMkIsVUFBQ29HLE9BQUQsRUFBYTtBQUN0QyxVQUFNQyxZQUFZLEdBQUdELE9BQU8sQ0FBQ2xGLEtBQTdCO0FBQ0FtRixNQUFBQSxZQUFZLENBQUNsRixPQUFiLEdBQXVCLE1BQXZCO0FBQ0QsS0FIRDtBQUtBLFFBQU1tRixvQkFBb0IsR0FBR0osZUFBZSxDQUFDaEYsS0FBN0M7QUFDQW9GLElBQUFBLG9CQUFvQixDQUFDbkYsT0FBckIsR0FBK0IsTUFBL0I7QUFDRCxHQVREOztBQVdBLE1BQU1vRixtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNMLGVBQUQsRUFBcUI7QUFDL0MsUUFBTUksb0JBQW9CLEdBQUdKLGVBQWUsQ0FBQ2hGLEtBQTdDO0FBQ0FvRixJQUFBQSxvQkFBb0IsQ0FBQ25GLE9BQXJCLEdBQStCLE1BQS9CO0FBQ0QsR0FIRDs7QUFLQSxNQUFNcUYscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFDQyxXQUFELEVBQWlCO0FBQzdDLFFBQU1QLGVBQWUsR0FBR08sV0FBVyxDQUFDQyxhQUFaLENBQTBCcEcsYUFBMUIsQ0FBd0MsbUJBQXhDLENBQXhCOztBQUNBLFFBQUk0RixlQUFlLENBQUNoRixLQUFoQixDQUFzQkMsT0FBdEIsS0FBa0MsTUFBdEMsRUFBOEM7QUFDNUM4RSxNQUFBQSxzQkFBc0IsQ0FBQ0MsZUFBRCxDQUF0QjtBQUNELEtBRkQsTUFFTztBQUNMSyxNQUFBQSxtQkFBbUIsQ0FBQ0wsZUFBRCxDQUFuQjtBQUNEO0FBQ0YsR0FQRDs7QUFTQSxNQUFNUyxvQkFBb0I7QUFBQSx3TEFBRyxpQkFBT0MsVUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDckIzQyxjQUFBQSxLQURxQixHQUNicEUsUUFBUSxDQUFDUyxhQUFULENBQXVCLFFBQXZCLENBRGE7QUFBQTtBQUFBLHFCQUVDeUYsMkVBQWdCLEVBRmpCOztBQUFBO0FBRXJCYyxjQUFBQSxhQUZxQjtBQUFBO0FBQUEscUJBR0d2Qix5RUFBa0IsQ0FBQ3NCLFVBQUQsRUFBYUMsYUFBYixDQUhyQjs7QUFBQTtBQUdyQkMsY0FBQUEsZUFIcUI7QUFBQTtBQUFBLHFCQUtDdkIsdUVBQWdCLENBQUNxQixVQUFELENBTGpCOztBQUFBO0FBS3JCRyxjQUFBQSxhQUxxQjtBQU9yQmxGLGNBQUFBLG1CQVBxQixHQU9DaEMsUUFBUSxDQUFDUyxhQUFULENBQXVCLHdCQUF2QixDQVBEO0FBUTNCO0FBQ0o7QUFDQTtBQUNBOztBQUNJLGtCQUFJLENBQUN1QixtQkFBTCxFQUEwQjtBQUN4QjJELGdCQUFBQSwyRUFBb0IsQ0FBQ3NCLGVBQUQsQ0FBcEI7QUFDQXJCLGdCQUFBQSx5RUFBa0IsQ0FBQ3FCLGVBQUQsRUFBa0JDLGFBQWxCLEVBQWlDRixhQUFqQyxDQUFsQjtBQUNBbkIsZ0JBQUFBLHlFQUFrQixDQUFDb0IsZUFBRCxDQUFsQjtBQUNEOztBQUVEN0MsY0FBQUEsS0FBSyxDQUFDL0MsS0FBTixDQUFZQyxPQUFaLEdBQXNCLE9BQXRCO0FBQ0ExQixjQUFBQSxxRkFBQTs7QUFuQjJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQXBCa0gsb0JBQW9CO0FBQUE7QUFBQTtBQUFBLEtBQTFCOztBQXNCQSxNQUFNSyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQUNDLGlCQUFELEVBQXVCO0FBQ3BELFFBQU1DLGdCQUFnQixHQUFHckgsUUFBUSxDQUFDUyxhQUFULENBQXVCLG9CQUF2QixDQUF6QjtBQUNBLFFBQU02RyxnQkFBZ0IsR0FBR3RILFFBQVEsQ0FBQ1MsYUFBVCxDQUF1Qix1QkFBdkIsQ0FBekI7O0FBQ0EsUUFBSTJHLGlCQUFpQixLQUFLRSxnQkFBdEIsSUFBMENELGdCQUFnQixDQUFDaEcsS0FBakIsQ0FBdUJrRyxVQUF2QixLQUFzQyxRQUFwRixFQUE4RjtBQUM1RixhQUFPLEtBQVA7QUFDRDs7QUFDREQsSUFBQUEsZ0JBQWdCLENBQUNqSCxTQUFqQixDQUEyQkMsTUFBM0IsQ0FBa0MsUUFBbEM7QUFDQThHLElBQUFBLGlCQUFpQixDQUFDL0csU0FBbEIsQ0FBNEJtSCxHQUE1QixDQUFnQyxRQUFoQztBQUVBLFdBQU8sSUFBUDtBQUNELEdBVkQ7O0FBWUEsTUFBTUMscUJBQXFCO0FBQUEseUxBQUcsa0JBQU9DLGdCQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN0QkosY0FBQUEsZ0JBRHNCLEdBQ0h0SCxRQUFRLENBQUNTLGFBQVQsQ0FBdUIsdUJBQXZCLENBREc7QUFFdEJrSCxjQUFBQSxRQUZzQixHQUVYTCxnQkFBZ0IsQ0FBQ2pILFNBQWpCLENBQTJCLENBQTNCLENBRlc7QUFBQTtBQUFBLHFCQUd0QnlGLHFFQUFBLENBQTRCNkIsUUFBNUIsRUFBc0NELGdCQUF0QyxDQUhzQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFyQkQscUJBQXFCO0FBQUE7QUFBQTtBQUFBLEtBQTNCOztBQU1BLE1BQU1JLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0gsZ0JBQUQsRUFBc0I7QUFDL0MsUUFBTUksbUJBQW1CLEdBQUc5SCxRQUFRLENBQUNTLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBNUI7O0FBQ0EsUUFBSXFILG1CQUFtQixLQUFLLElBQTVCLEVBQWtDO0FBQ2hDL0IsTUFBQUEseUVBQUEsQ0FBaUMyQixnQkFBakM7QUFDRCxLQUZELE1BRU8sSUFBSTlDLEtBQUssQ0FBQ0MsSUFBTixDQUFXaUQsbUJBQW1CLENBQUN6SCxTQUEvQixFQUEwQ2tDLFFBQTFDLENBQW1ELFNBQW5ELENBQUosRUFBbUU7QUFDeEV3RCxNQUFBQSw2RUFBQSxDQUFxQzJCLGdCQUFyQztBQUNELEtBRk0sTUFFQSxJQUFJOUMsS0FBSyxDQUFDQyxJQUFOLENBQVdpRCxtQkFBbUIsQ0FBQ3pILFNBQS9CLEVBQTBDa0MsUUFBMUMsQ0FBbUQsVUFBbkQsQ0FBSixFQUFvRTtBQUN6RXdELE1BQUFBLDhFQUFBLENBQXNDMkIsZ0JBQXRDO0FBQ0QsS0FGTSxNQUVBLElBQUk5QyxLQUFLLENBQUNDLElBQU4sQ0FBV2lELG1CQUFtQixDQUFDekgsU0FBL0IsRUFBMENrQyxRQUExQyxDQUFtRCxRQUFuRCxDQUFKLEVBQWtFO0FBQ3ZFd0QsTUFBQUEsZ0ZBQUEsQ0FBd0MyQixnQkFBeEM7QUFDRDtBQUNGLEdBWEQ7O0FBYUEsTUFBTVMsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixDQUFDQyxrQkFBRCxFQUF3QjtBQUNyRCxRQUFNQyxpQkFBaUIsR0FBR3JJLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsY0FBMUIsQ0FBMUI7O0FBQ0EsUUFBSW9JLGlCQUFpQixDQUFDQyxNQUFsQixLQUE2QixDQUFqQyxFQUFvQztBQUNsQyxhQUFPLEtBQVA7QUFDRDs7QUFDRCxRQUFNQyxXQUFXLEdBQUczRCxLQUFLLENBQUNDLElBQU4sQ0FBV3dELGlCQUFYLEVBQThCRyxHQUE5QixDQUFrQyxVQUFDQyxnQkFBRCxFQUFzQjtBQUMxRSxVQUFNQyxVQUFVLEdBQUdELGdCQUFnQixDQUFDcEksU0FBakIsQ0FBMkIsQ0FBM0IsQ0FBbkI7QUFDQSxhQUFPcUksVUFBUDtBQUNELEtBSG1CLENBQXBCO0FBSUE1QyxJQUFBQSxxRUFBQSxDQUE0QnlDLFdBQTVCLEVBQXlDSCxrQkFBekM7QUFDQSxXQUFPLElBQVA7QUFDRCxHQVhEOztBQWFBLE1BQU1RLDRCQUE0QixHQUFHLFNBQS9CQSw0QkFBK0IsQ0FBQ1Isa0JBQUQsRUFBd0I7QUFDM0QsUUFBTVMsdUJBQXVCLEdBQUc3SSxRQUFRLENBQUNDLGdCQUFULENBQTBCLG9CQUExQixDQUFoQzs7QUFDQSxRQUFJNEksdUJBQXVCLENBQUNQLE1BQXhCLEtBQW1DLENBQXZDLEVBQTBDO0FBQ3hDLGFBQU8sS0FBUDtBQUNEOztBQUNELFFBQU1RLGtCQUFrQixHQUFHbEUsS0FBSyxDQUFDQyxJQUFOLENBQVdnRSx1QkFBWCxFQUFvQ0wsR0FBcEMsQ0FBd0MsVUFBQ08sc0JBQUQsRUFBNEI7QUFDN0YsVUFBTUMsZ0JBQWdCLEdBQUdELHNCQUFzQixDQUFDMUksU0FBdkIsQ0FBaUMsQ0FBakMsQ0FBekI7QUFDQSxhQUFPMkksZ0JBQVA7QUFDRCxLQUgwQixDQUEzQjtBQUlBbEQsSUFBQUEsMkVBQUEsQ0FBa0NnRCxrQkFBbEMsRUFBc0RWLGtCQUF0RDtBQUNBLFdBQU8sSUFBUDtBQUNELEdBWEQ7O0FBYUEsTUFBTWMseUJBQXlCLEdBQUcsU0FBNUJBLHlCQUE0QixDQUFDQyxjQUFELEVBQW9CO0FBQ3BEQSxJQUFBQSxjQUFjLENBQUM5SSxTQUFmLENBQXlCbUgsR0FBekIsQ0FBNkIsUUFBN0I7QUFDRCxHQUZEOztBQUlBLE1BQU00QixzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQUNELGNBQUQsRUFBb0I7QUFDakRBLElBQUFBLGNBQWMsQ0FBQzlJLFNBQWYsQ0FBeUJDLE1BQXpCLENBQWdDLFFBQWhDO0FBQ0QsR0FGRDs7QUFJQSxNQUFNK0ksb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDRixjQUFELEVBQW9CO0FBQy9DLFFBQUksQ0FBQ3ZFLEtBQUssQ0FBQ0MsSUFBTixDQUFXc0UsY0FBYyxDQUFDOUksU0FBMUIsRUFBcUNrQyxRQUFyQyxDQUE4QyxRQUE5QyxDQUFMLEVBQThEO0FBQzVEMkcsTUFBQUEseUJBQXlCLENBQUNDLGNBQUQsQ0FBekI7QUFDRCxLQUZELE1BRU87QUFDTEMsTUFBQUEsc0JBQXNCLENBQUNELGNBQUQsQ0FBdEI7QUFDRDtBQUNGLEdBTkQ7O0FBUUEsTUFBTUcsMEJBQTBCLEdBQUcsU0FBN0JBLDBCQUE2QixDQUFDSCxjQUFELEVBQW9CO0FBQ3JELFFBQU1JLG9CQUFvQixHQUFHdkosUUFBUSxDQUFDUyxhQUFULENBQXVCLHVCQUF2QixDQUE3Qjs7QUFDQSxRQUFJOEksb0JBQW9CLEtBQUssSUFBN0IsRUFBbUM7QUFDakNKLE1BQUFBLGNBQWMsQ0FBQzlJLFNBQWYsQ0FBeUJtSCxHQUF6QixDQUE2QixRQUE3QjtBQUNBO0FBQ0Q7O0FBQ0QsUUFBSStCLG9CQUFvQixLQUFLSixjQUE3QixFQUE2QztBQUMzQ0MsTUFBQUEsc0JBQXNCLENBQUNELGNBQUQsQ0FBdEI7QUFDQTtBQUNEOztBQUNESSxJQUFBQSxvQkFBb0IsQ0FBQ2xKLFNBQXJCLENBQStCQyxNQUEvQixDQUFzQyxRQUF0QztBQUNBNkksSUFBQUEsY0FBYyxDQUFDOUksU0FBZixDQUF5Qm1ILEdBQXpCLENBQTZCLFFBQTdCO0FBQ0QsR0FaRDs7QUFjQSxNQUFNZ0MsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0FBQ2hDQyxJQUFBQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXVCLFlBQXZCO0FBQ0QsR0FGRDs7QUFJQSxNQUFNQyx3QkFBd0I7QUFBQSx5TEFBRyxrQkFBT3JGLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQy9CO0FBQ01zRixjQUFBQSxZQUZ5QjtBQUFBLHFNQUVWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBQ1k1RCxtRkFBbUIsRUFEL0I7O0FBQUE7QUFDYnlCLDBCQUFBQSxnQkFEYTtBQUFBO0FBQUEsaUNBRWMxQixxRkFBcUIsRUFGbkM7O0FBQUE7QUFFYm9DLDBCQUFBQSxrQkFGYTtBQUFBO0FBQUEsaUNBR2JYLHFCQUFxQixDQUFDQyxnQkFBRCxDQUhSOztBQUFBO0FBSW5CRywwQkFBQUEsa0JBQWtCLENBQUNILGdCQUFELENBQWxCO0FBQ0FTLDBCQUFBQSxzQkFBc0IsQ0FBQ0Msa0JBQUQsQ0FBdEI7QUFDQVEsMEJBQUFBLDRCQUE0QixDQUFDUixrQkFBRCxDQUE1Qjs7QUFObUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRlU7O0FBQUEsZ0NBRXpCeUIsWUFGeUI7QUFBQTtBQUFBO0FBQUE7O0FBV3pCQyxjQUFBQSxvQkFYeUIsR0FXRixTQUF2QkEsb0JBQXVCLEdBQU07QUFDakMsb0JBQU16QyxnQkFBZ0IsR0FBR3JILFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QixvQkFBdkIsQ0FBekI7QUFDQTRHLGdCQUFBQSxnQkFBZ0IsQ0FBQ2hHLEtBQWpCLENBQXVCa0csVUFBdkIsR0FBb0MsUUFBcEM7QUFDRCxlQWQ4Qjs7QUFnQnpCd0MsY0FBQUEsb0JBaEJ5QixHQWdCRixTQUF2QkEsb0JBQXVCLEdBQU07QUFDakMsb0JBQU0xQyxnQkFBZ0IsR0FBR3JILFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QixvQkFBdkIsQ0FBekI7QUFDQTRHLGdCQUFBQSxnQkFBZ0IsQ0FBQ2hHLEtBQWpCLENBQXVCa0csVUFBdkIsR0FBb0MsU0FBcEM7QUFDRCxlQW5COEI7O0FBcUJ6QnlDLGNBQUFBLDJCQXJCeUIsR0FxQkssU0FBOUJBLDJCQUE4QixHQUFNO0FBQ3hDLG9CQUFNQyxhQUFhLEdBQUdqSyxRQUFRLENBQUNTLGFBQVQsQ0FBdUIsaUJBQXZCLENBQXRCO0FBQ0F3SixnQkFBQUEsYUFBYSxDQUFDbkYsbUJBQWQsQ0FBa0MsT0FBbEMsRUFBMkM4RSx3QkFBM0M7QUFDRCxlQXhCOEI7O0FBMEJ6Qk0sY0FBQUEsd0JBMUJ5QixHQTBCRSxTQUEzQkEsd0JBQTJCLEdBQU07QUFDckMsb0JBQU1ELGFBQWEsR0FBR2pLLFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QixpQkFBdkIsQ0FBdEI7QUFDQXdKLGdCQUFBQSxhQUFhLENBQUN6RSxnQkFBZCxDQUErQixPQUEvQixFQUF3Q29FLHdCQUF4QztBQUNELGVBN0I4Qjs7QUErQnpCTyxjQUFBQSxVQS9CeUIsR0ErQlosU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCLG9CQUFNQyxNQUFNLEdBQUdwSyxRQUFRLENBQUNTLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBZjtBQUNBMkosZ0JBQUFBLE1BQU0sQ0FBQy9JLEtBQVAsQ0FBYUMsT0FBYixHQUF1QixPQUF2QjtBQUNELGVBbEM4Qjs7QUFvQ3pCK0ksY0FBQUEsVUFwQ3lCLEdBb0NaLFNBQWJBLFVBQWEsR0FBTTtBQUN2QixvQkFBTUQsTUFBTSxHQUFHcEssUUFBUSxDQUFDUyxhQUFULENBQXVCLFNBQXZCLENBQWY7QUFDQTJKLGdCQUFBQSxNQUFNLENBQUMvSSxLQUFQLENBQWFDLE9BQWIsR0FBdUIsTUFBdkI7QUFDRCxlQXZDOEI7O0FBeUN6QmdKLGNBQUFBLDZCQXpDeUI7QUFBQSxxTUF5Q08sa0JBQU9DLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNwQ1QsMEJBQUFBLG9CQUFvQjtBQUNwQkssMEJBQUFBLFVBQVU7QUFDVkgsMEJBQUFBLDJCQUEyQjtBQUhTO0FBQUEsaUNBSTlCSCxZQUFZLEVBSmtCOztBQUFBO0FBS3BDVywwQkFBQUEsVUFBVSxDQUFDLFlBQU07QUFDZlQsNEJBQUFBLG9CQUFvQjtBQUNwQk0sNEJBQUFBLFVBQVU7QUFDWCwyQkFIUyxFQUdQRSxRQUhPLENBQVY7QUFJQUwsMEJBQUFBLHdCQUF3Qjs7QUFUWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF6Q1A7O0FBQUEsZ0NBeUN6QkksNkJBekN5QjtBQUFBO0FBQUE7QUFBQTtBQXFEL0I7OztBQUNBLGtCQUFJMUYsS0FBSyxDQUFDQyxJQUFOLENBQVdOLEtBQUssQ0FBQ0MsTUFBTixDQUFhbkUsU0FBeEIsRUFBbUNrQyxRQUFuQyxDQUE0QyxjQUE1QyxDQUFKLEVBQWlFO0FBQy9Eb0UsZ0JBQUFBLHFCQUFxQixDQUFDcEMsS0FBSyxDQUFDQyxNQUFQLENBQXJCO0FBQ0Q7O0FBRUQsa0JBQUlELEtBQUssQ0FBQ0MsTUFBTixDQUFhcUMsYUFBYixDQUEyQm5HLFNBQTNCLEtBQXlDLDBCQUE3QyxFQUF5RTtBQUN2RW9HLGdCQUFBQSxvQkFBb0IsQ0FBQ3ZDLEtBQUssQ0FBQ0MsTUFBTixDQUFhcUMsYUFBYixDQUEyQjRELE9BQTNCLENBQW1DeEosRUFBcEMsQ0FBcEI7QUFDRDs7QUFFRCxrQkFBSXNELEtBQUssQ0FBQ0MsTUFBTixDQUFhcUMsYUFBYixDQUEyQkEsYUFBM0IsQ0FBeUNuRyxTQUF6QyxLQUF1RCwwQkFBM0QsRUFBdUY7QUFDckZvRyxnQkFBQUEsb0JBQW9CLENBQUN2QyxLQUFLLENBQUNDLE1BQU4sQ0FBYXFDLGFBQWIsQ0FBMkJBLGFBQTNCLENBQXlDNEQsT0FBekMsQ0FBaUR4SixFQUFsRCxDQUFwQjtBQUNEOztBQUVELGtCQUFJMkQsS0FBSyxDQUFDQyxJQUFOLENBQVdOLEtBQUssQ0FBQ0MsTUFBTixDQUFhbkUsU0FBeEIsRUFBbUNrQyxRQUFuQyxDQUE0QyxjQUE1QyxDQUFKLEVBQWlFO0FBQy9EOEcsZ0JBQUFBLG9CQUFvQixDQUFDOUUsS0FBSyxDQUFDQyxNQUFQLENBQXBCO0FBQ0E4RixnQkFBQUEsNkJBQTZCLENBQUMsR0FBRCxDQUE3QjtBQUNEOztBQUVELGtCQUFJMUYsS0FBSyxDQUFDQyxJQUFOLENBQVdOLEtBQUssQ0FBQ0MsTUFBTixDQUFhbkUsU0FBeEIsRUFBbUNrQyxRQUFuQyxDQUE0QyxlQUE1QyxDQUFKLEVBQWtFO0FBQ2hFK0csZ0JBQUFBLDBCQUEwQixDQUFDL0UsS0FBSyxDQUFDQyxNQUFQLENBQTFCO0FBQ0E4RixnQkFBQUEsNkJBQTZCLENBQUMsSUFBRCxDQUE3QjtBQUNEOztBQUVELGtCQUFJMUYsS0FBSyxDQUFDQyxJQUFOLENBQVdOLEtBQUssQ0FBQ0MsTUFBTixDQUFhbkUsU0FBeEIsRUFBbUNrQyxRQUFuQyxDQUE0QyxlQUE1QyxDQUFKLEVBQWtFO0FBQ2hFNEUsZ0JBQUFBLHNCQUFzQixDQUFDNUMsS0FBSyxDQUFDQyxNQUFQLENBQXRCO0FBQ0E4RixnQkFBQUEsNkJBQTZCLENBQUMsR0FBRCxDQUE3QjtBQUNEOztBQUVELGtCQUFJL0YsS0FBSyxDQUFDQyxNQUFOLENBQWE5RCxTQUFiLEtBQTJCLFVBQS9CLEVBQTJDO0FBQ3pDOEksZ0JBQUFBLG1CQUFtQjtBQUNwQjs7QUFuRjhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQXhCSSx3QkFBd0I7QUFBQTtBQUFBO0FBQUEsS0FBOUI7O0FBc0ZBLE1BQU1jLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsQ0FBQ25HLEtBQUQsRUFBVztBQUN4QyxvQkFBMEJ2RSxRQUExQjtBQUFBLFFBQVEySyxhQUFSLGFBQVFBLGFBQVI7O0FBRUEsUUFBSXBHLEtBQUssQ0FBQ2EsR0FBTixLQUFjLE9BQWxCLEVBQTJCO0FBQ3pCLFVBQUl1RixhQUFhLElBQUlBLGFBQWEsQ0FBQ2pLLFNBQWQsS0FBNEIsMEJBQWpELEVBQTZFO0FBQzNFb0csUUFBQUEsb0JBQW9CLENBQUM2RCxhQUFhLENBQUNGLE9BQWQsQ0FBc0J4SixFQUF2QixDQUFwQjtBQUNEOztBQUVELFVBQUkwSixhQUFhLElBQUlBLGFBQWEsQ0FBQ2pLLFNBQWQsS0FBNEIsY0FBakQsRUFBaUU7QUFDL0RvRyxRQUFBQSxvQkFBb0IsQ0FBQzZELGFBQWEsQ0FBQzlELGFBQWQsQ0FBNEI0RCxPQUE1QixDQUFvQ3hKLEVBQXJDLENBQXBCO0FBQ0Q7QUFDRjtBQUNGLEdBWkQ7O0FBY0EsTUFBTTJKLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsR0FBTTtBQUNuQyxRQUFNWCxhQUFhLEdBQUdqSyxRQUFRLENBQUNTLGFBQVQsQ0FBdUIsaUJBQXZCLENBQXRCO0FBQ0F3SixJQUFBQSxhQUFhLENBQUN6RSxnQkFBZCxDQUErQixPQUEvQixFQUF3Q29FLHdCQUF4QztBQUNBSyxJQUFBQSxhQUFhLENBQUN6RSxnQkFBZCxDQUErQixTQUEvQixFQUEwQ2tGLHNCQUExQztBQUNELEdBSkQ7O0FBTUEsU0FBTztBQUNMRSxJQUFBQSxzQkFBc0IsRUFBdEJBLHNCQURLO0FBRUw5RCxJQUFBQSxvQkFBb0IsRUFBcEJBO0FBRkssR0FBUDtBQUlELENBelArQixFQUFoQzs7QUEyUEEsaUVBQWVYLHVCQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdFFBO0FBQ0E7O0FBRUEsSUFBTUwsY0FBYyxHQUFJLFlBQU07QUFDNUIsTUFBTWdGLGtCQUFrQjtBQUFBLHdMQUFHLGlCQUFPcEQsZ0JBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25CTCxjQUFBQSxnQkFEbUIsR0FDQXJILFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QixvQkFBdkIsQ0FEQTtBQUV6QmlILGNBQUFBLGdCQUFnQixDQUFDdkgsT0FBakIsQ0FBeUIsVUFBQzRLLFFBQUQsRUFBYztBQUNyQ0YsZ0JBQUFBLGlGQUF1QixDQUFDRSxRQUFELEVBQVcxRCxnQkFBWCxDQUF2QjtBQUNELGVBRkQ7QUFGeUIsK0NBS2xCQSxnQkFMa0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBbEJ5RCxrQkFBa0I7QUFBQTtBQUFBO0FBQUEsS0FBeEI7O0FBUUEsTUFBTUUscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixHQUFNO0FBQ2xDLFFBQU0zRCxnQkFBZ0IsR0FBR3JILFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QixvQkFBdkIsQ0FBekI7QUFDQTRHLElBQUFBLGdCQUFnQixDQUFDN0UsV0FBakIsR0FBK0IsRUFBL0I7QUFDRCxHQUhEOztBQUtBLE1BQU15SSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDRixRQUFELEVBQWM7QUFDakNBLElBQUFBLFFBQVEsQ0FBQzFLLFNBQVQsQ0FBbUJtSCxHQUFuQixDQUF1QixPQUF2QjtBQUNBdUQsSUFBQUEsUUFBUSxDQUFDMUssU0FBVCxDQUFtQkMsTUFBbkIsQ0FBMEIsUUFBMUI7QUFDRCxHQUhEOztBQUtBLE1BQU00SyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDSCxRQUFELEVBQWM7QUFDakNBLElBQUFBLFFBQVEsQ0FBQzFLLFNBQVQsQ0FBbUJtSCxHQUFuQixDQUF1QixRQUF2QjtBQUNBdUQsSUFBQUEsUUFBUSxDQUFDMUssU0FBVCxDQUFtQkMsTUFBbkIsQ0FBMEIsT0FBMUI7QUFDRCxHQUhEOztBQUtBLE1BQU1zSCxZQUFZO0FBQUEseUxBQUcsa0JBQU91RCxXQUFQLEVBQW9CekQsZ0JBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNuQnNELGNBQUFBLHFCQUFxQjtBQURGO0FBQUEscUJBRVlGLGtCQUFrQixDQUFDcEQsZ0JBQUQsQ0FGOUI7O0FBQUE7QUFFYkwsY0FBQUEsZ0JBRmE7QUFHbkJBLGNBQUFBLGdCQUFnQixDQUFDaEcsS0FBakIsQ0FBdUJrRyxVQUF2QixHQUFvQyxRQUFwQztBQUNNNkQsY0FBQUEsWUFKYSxHQUlFcEwsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixxQkFBMUIsQ0FKRjs7QUFBQSxvQkFLZmtMLFdBQVcsS0FBSyxLQUxEO0FBQUE7QUFBQTtBQUFBOztBQU1qQkMsY0FBQUEsWUFBWSxDQUFDakwsT0FBYixDQUFxQixVQUFDNEssUUFBRCxFQUFjO0FBQ2pDRSxnQkFBQUEsWUFBWSxDQUFDRixRQUFELENBQVo7QUFDRCxlQUZEO0FBTmlCO0FBQUE7O0FBQUE7QUFVWE0sY0FBQUEsT0FWVyxHQVVELEVBVkM7QUFXakJELGNBQUFBLFlBQVksQ0FBQ2pMLE9BQWIsQ0FBcUIsVUFBQzRLLFFBQUQsRUFBYztBQUNqQyxvQkFBTWhFLFVBQVUsR0FBR2dFLFFBQVEsQ0FBQ04sT0FBVCxDQUFpQnhKLEVBQXBDO0FBQ0FvSyxnQkFBQUEsT0FBTyxDQUFDQyxJQUFSLENBQWE1Rix1RUFBZ0IsQ0FBQ3FCLFVBQUQsQ0FBN0I7QUFDRCxlQUhEO0FBWGlCO0FBQUEscUJBZVd3RSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsT0FBWixDQWZYOztBQUFBO0FBZVhuRSxjQUFBQSxhQWZXO0FBZ0JqQkEsY0FBQUEsYUFBYSxDQUFDL0csT0FBZCxDQUFzQixVQUFDNEssUUFBRCxFQUFjO0FBQ2xDLG9CQUFNVSxZQUFZLEdBQUdWLFFBQVEsQ0FBQ1csSUFBOUI7QUFDQSxvQkFBTUMsZUFBZSxHQUFHM0wsUUFBUSxDQUFDUyxhQUFULG9CQUFtQ3NLLFFBQVEsQ0FBQ2hFLFVBQTVDLE9BQXhCOztBQUNBLG9CQUFJMEUsWUFBWSxDQUFDRyxXQUFiLE9BQStCVCxXQUFuQyxFQUFnRDtBQUM5Q0Qsa0JBQUFBLFlBQVksQ0FBQ1MsZUFBRCxDQUFaO0FBQ0QsaUJBRkQsTUFFTztBQUNMVixrQkFBQUEsWUFBWSxDQUFDVSxlQUFELENBQVo7QUFDRDtBQUNGLGVBUkQ7O0FBaEJpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFaL0QsWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUE0QkEsTUFBTWUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0osV0FBRCxFQUFjSCxrQkFBZCxFQUFxQztBQUN4RCxRQUFNeUQsZ0JBQWdCLEdBQUc3TCxRQUFRLENBQUNDLGdCQUFULENBQTBCLHFCQUExQixDQUF6QjtBQUVBNEwsSUFBQUEsZ0JBQWdCLENBQUMxTCxPQUFqQixDQUF5QixVQUFDNEssUUFBRCxFQUFjO0FBQ3JDLFVBQUllLGNBQWMsR0FBRyxLQUFyQjtBQUNBdkQsTUFBQUEsV0FBVyxDQUFDcEksT0FBWixDQUFvQixVQUFDNEwsSUFBRCxFQUFVO0FBQzVCLFlBQU1qSixhQUFhLEdBQUdzRixrQkFBa0IsQ0FBQzJDLFFBQVEsQ0FBQ04sT0FBVCxDQUFpQnhKLEVBQWxCLENBQWxCLENBQXdDK0ssSUFBOUQ7QUFDQWxKLFFBQUFBLGFBQWEsQ0FBQzNDLE9BQWQsQ0FBc0IsVUFBQzhMLFlBQUQsRUFBa0I7QUFDdEMsY0FBSUEsWUFBWSxDQUFDTCxXQUFiLE9BQStCRyxJQUFuQyxFQUF5QztBQUN2Q0QsWUFBQUEsY0FBYyxHQUFHLElBQWpCO0FBQ0Q7QUFDRixTQUpEO0FBS0QsT0FQRDs7QUFRQSxVQUFJLENBQUNBLGNBQUwsRUFBcUI7QUFDbkJaLFFBQUFBLFlBQVksQ0FBQ0gsUUFBRCxDQUFaO0FBQ0Q7QUFDRixLQWJEO0FBY0QsR0FqQkQ7O0FBbUJBLE1BQU1tQix1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLENBQUNDLGFBQUQsRUFBbUI7QUFDakQsUUFBSUEsYUFBYSxJQUFJLENBQXJCLEVBQXdCO0FBQ3RCLGFBQU8sS0FBUDtBQUNEOztBQUVELFFBQUlBLGFBQWEsSUFBSSxDQUFyQixFQUF3QjtBQUN0QixhQUFPLFFBQVA7QUFDRDs7QUFFRCxXQUFPLE1BQVA7QUFDRCxHQVZEOztBQVlBLE1BQU1sRCxrQkFBa0I7QUFBQSx5TEFBRyxrQkFBT0gsa0JBQVAsRUFBMkJWLGtCQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbkJ5RCxjQUFBQSxnQkFEbUIsR0FDQTdMLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIscUJBQTFCLENBREE7QUFHekI0TCxjQUFBQSxnQkFBZ0IsQ0FBQzFMLE9BQWpCLENBQXlCLFVBQUM0SyxRQUFELEVBQWM7QUFDckMsb0JBQUlxQixvQkFBb0IsR0FBRyxLQUEzQjtBQUNBdEQsZ0JBQUFBLGtCQUFrQixDQUFDM0ksT0FBbkIsQ0FBMkIsVUFBQ2tNLFVBQUQsRUFBZ0I7QUFDekMsc0JBQU1DLHFCQUFxQixHQUFHbEUsa0JBQWtCLENBQUMyQyxRQUFRLENBQUNOLE9BQVQsQ0FBaUJ4SixFQUFsQixDQUFsQixDQUF3Q1YsSUFBeEMsQ0FBNkM4TCxVQUEzRTtBQUNBLHNCQUFNRSxrQkFBa0IsR0FBR0wsdUJBQXVCLENBQUNJLHFCQUFELENBQWxEOztBQUVBLHNCQUFJRCxVQUFVLENBQUNULFdBQVgsT0FBNkJXLGtCQUFqQyxFQUFxRDtBQUNuREgsb0JBQUFBLG9CQUFvQixHQUFHLElBQXZCO0FBQ0Q7QUFDRixpQkFQRDs7QUFRQSxvQkFBSSxDQUFDQSxvQkFBTCxFQUEyQjtBQUN6QmxCLGtCQUFBQSxZQUFZLENBQUNILFFBQUQsQ0FBWjtBQUNEO0FBQ0YsZUFiRDs7QUFIeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBbEI5QixrQkFBa0I7QUFBQTtBQUFBO0FBQUEsS0FBeEI7O0FBbUJBLFNBQU87QUFDTHJCLElBQUFBLFlBQVksRUFBWkEsWUFESztBQUVMZSxJQUFBQSxZQUFZLEVBQVpBLFlBRks7QUFHTE0sSUFBQUEsa0JBQWtCLEVBQWxCQTtBQUhLLEdBQVA7QUFLRCxDQTNHc0IsRUFBdkI7O0FBNkdBLGlFQUFlbkQsY0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEhBOztBQUVBLElBQU0wRyxtQkFBbUIsR0FBSSxZQUFNO0FBQ2pDLE1BQU1DLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQ0MsZUFBRCxFQUFxQjtBQUNqRCxRQUFNQyxpQkFBaUIsR0FBR0QsZUFBZSxDQUFDak0sYUFBaEIsQ0FBOEIsc0JBQTlCLENBQTFCO0FBQ0FrTSxJQUFBQSxpQkFBaUIsQ0FBQ3RMLEtBQWxCLENBQXdCQyxPQUF4QixHQUFrQyxPQUFsQztBQUNELEdBSEQ7O0FBS0EsTUFBTXNMLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsR0FBTTtBQUNsQyxRQUFNQyx3QkFBd0IsR0FBRzdNLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsc0JBQTFCLENBQWpDO0FBQ0E0TSxJQUFBQSx3QkFBd0IsQ0FBQzFNLE9BQXpCLENBQWlDLFVBQUMyTSx1QkFBRCxFQUE2QjtBQUM1RCxVQUFNSCxpQkFBaUIsR0FBR0csdUJBQTFCO0FBQ0FILE1BQUFBLGlCQUFpQixDQUFDdEwsS0FBbEIsQ0FBd0JDLE9BQXhCLEdBQWtDLE1BQWxDO0FBQ0QsS0FIRDtBQUlELEdBTkQ7O0FBUUEsTUFBTXlMLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQ3hJLEtBQUQsRUFBVztBQUN2QyxRQUFJQSxLQUFLLENBQUNDLE1BQU4sQ0FBYTlELFNBQWIsS0FBMkIsUUFBL0IsRUFBeUM7QUFDdkMsVUFBTWdNLGVBQWUsR0FBR25JLEtBQUssQ0FBQ0MsTUFBTixDQUFhcUMsYUFBckM7QUFDQTRGLE1BQUFBLHFCQUFxQixDQUFDQyxlQUFELENBQXJCO0FBQ0FuSSxNQUFBQSxLQUFLLENBQUNDLE1BQU4sQ0FBYXdJLEtBQWI7QUFDRDtBQUNGLEdBTkQ7O0FBUUEsTUFBTUMsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixDQUFDMUksS0FBRCxFQUFXO0FBQ3hDLFFBQUksQ0FBQ0EsS0FBSyxDQUFDVSxhQUFQLElBQXlCVixLQUFLLENBQUNVLGFBQU4sQ0FBb0J2RSxTQUFwQixLQUFrQyw0QkFBbEMsSUFBa0U2RCxLQUFLLENBQUNVLGFBQU4sQ0FBb0J2RSxTQUFwQixLQUFrQyxRQUFqSSxFQUE0STtBQUMxSWtNLE1BQUFBLHFCQUFxQjtBQUN0QjtBQUNGLEdBSkQ7O0FBTUEsTUFBTU0sbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDM0ksS0FBRCxFQUFXO0FBQ3JDLFFBQUlBLEtBQUssQ0FBQ0MsTUFBTixDQUFhOUQsU0FBYixLQUEyQixRQUEvQixFQUF5QztBQUN2QyxVQUFNeU0sVUFBVSxHQUFHNUksS0FBSyxDQUFDQyxNQUFOLENBQWE0SSxLQUFoQztBQUNBLFVBQU1ULGlCQUFpQixHQUFHM00sUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixxQkFBMUIsQ0FBMUI7QUFDQTBNLE1BQUFBLGlCQUFpQixDQUFDeE0sT0FBbEIsQ0FBMEIsVUFBQ2tOLGdCQUFELEVBQXNCO0FBQzlDLFlBQU1DLElBQUksR0FBR0QsZ0JBQWI7O0FBQ0EsWUFBSUMsSUFBSSxDQUFDck0sRUFBTCxDQUFRMkssV0FBUixHQUFzQnJKLFFBQXRCLENBQStCNEssVUFBVSxDQUFDdkIsV0FBWCxFQUEvQixDQUFKLEVBQThEO0FBQzVEMEIsVUFBQUEsSUFBSSxDQUFDekcsYUFBTCxDQUFtQnhGLEtBQW5CLENBQXlCQyxPQUF6QixHQUFtQyxPQUFuQztBQUNELFNBRkQsTUFFTztBQUNMZ00sVUFBQUEsSUFBSSxDQUFDekcsYUFBTCxDQUFtQnhGLEtBQW5CLENBQXlCQyxPQUF6QixHQUFtQyxNQUFuQztBQUNEO0FBQ0YsT0FQRDtBQVFEO0FBQ0YsR0FiRDs7QUFlQSxNQUFNaU0sc0JBQXNCO0FBQUEsd0xBQUcsaUJBQU9oSixLQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDN0Isa0JBQUksQ0FBQ0EsS0FBSyxDQUFDYSxHQUFOLEtBQWMsV0FBZCxJQUE2QmIsS0FBSyxDQUFDYSxHQUFOLEtBQWMsU0FBNUMsS0FBMERiLEtBQUssQ0FBQ0MsTUFBTixLQUFpQnhFLFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QixNQUF2QixDQUEvRSxFQUErRztBQUFBLDRCQUNyRlQsUUFEcUYsRUFDdkcySyxhQUR1RyxhQUN2R0EsYUFEdUc7QUFFN0dwRyxnQkFBQUEsS0FBSyxDQUFDaUosY0FBTjtBQUdNQyxnQkFBQUEsTUFMdUcsR0FLOUY7QUFDYkMsa0JBQUFBLE9BQU8sRUFBRSxVQURJO0FBQ1FDLGtCQUFBQSxTQUFTLEVBQUU7QUFEbkIsaUJBTDhGOztBQVM3RyxvQkFBSWhELGFBQWEsQ0FBQ2pLLFNBQWQsS0FBNEIsUUFBNUIsSUFBd0M2RCxLQUFLLENBQUNhLEdBQU4sS0FBYyxXQUExRCxFQUF1RTtBQUNyRXVGLGtCQUFBQSxhQUFhLEdBQUdBLGFBQWEsQ0FBQ2hKLGtCQUFkLENBQWlDUyxpQkFBakQ7QUFDQTs7QUFDQSx5QkFBT3VJLGFBQWEsQ0FBQ3RKLEtBQWQsQ0FBb0JDLE9BQXBCLEtBQWdDLE1BQXZDLEVBQStDO0FBQzdDcUosb0JBQUFBLGFBQWEsR0FBR0EsYUFBYSxDQUFDaEosa0JBQTlCO0FBQ0Q7O0FBQ0RnSixrQkFBQUEsYUFBYSxDQUFDcUMsS0FBZDtBQUNELGlCQVBELE1BT087QUFDTHJDLGtCQUFBQSxhQUFhLEdBQUdBLGFBQWEsV0FBSThDLE1BQU0sQ0FBQ2xKLEtBQUssQ0FBQ2EsR0FBUCxDQUFWLG9CQUE3Qjs7QUFDQSx5QkFBT3VGLGFBQWEsSUFBSUEsYUFBYSxDQUFDdEosS0FBZCxDQUFvQkMsT0FBcEIsS0FBZ0MsTUFBeEQsRUFBZ0U7QUFDOURxSixvQkFBQUEsYUFBYSxHQUFHQSxhQUFhLFdBQUk4QyxNQUFNLENBQUNsSixLQUFLLENBQUNhLEdBQVAsQ0FBVixvQkFBN0I7QUFDRDtBQUNEOzs7QUFDTXlILGtCQUFBQSx3QkFORCxHQU00QjdNLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsc0JBQTFCLENBTjVCO0FBT0MwTSxrQkFBQUEsaUJBUEQsR0FPcUIvSCxLQUFLLENBQUNDLElBQU4sQ0FBV2dJLHdCQUFYLEVBQXFDZSxNQUFyQyxDQUN4QixVQUFDZCx1QkFBRCxFQUE2QjtBQUMzQix3QkFBTWUsU0FBUyxHQUFHZix1QkFBdUIsQ0FBQ3pMLEtBQXhCLENBQThCQyxPQUE5QixLQUEwQyxPQUE1RDtBQUNBLDJCQUFPdU0sU0FBUDtBQUNELG1CQUp1QixDQVByQjs7QUFhTCxzQkFBSWxCLGlCQUFpQixDQUFDLENBQUQsQ0FBakIsS0FBeUJtQixTQUF6QixJQUFzQyxDQUFDbkQsYUFBM0MsRUFBMEQ7QUFDeEQ7QUFDQW9ELG9CQUFBQSxTQUFTLEdBQUdOLE1BQU0sQ0FBQ2xKLEtBQUssQ0FBQ2EsR0FBUCxDQUFOLEtBQXNCLE1BQXRCLElBQWdDYixLQUFLLENBQUNhLEdBQU4sS0FBYyxNQUExRDtBQUNBdUYsb0JBQUFBLGFBQWEsR0FBR2dDLGlCQUFpQixDQUFDLENBQUQsQ0FBakIsQ0FBcUJxQixRQUFyQixDQUNkRCxTQUFTLEdBQUcsQ0FBSCxHQUFPcEIsaUJBQWlCLENBQUMsQ0FBRCxDQUFqQixDQUFxQnFCLFFBQXJCLENBQThCMUYsTUFBOUIsR0FBdUMsQ0FEekMsQ0FBaEI7O0FBR0EsMkJBQU9xQyxhQUFhLElBQUlBLGFBQWEsQ0FBQ3RKLEtBQWQsQ0FBb0JDLE9BQXBCLEtBQWdDLE1BQXhELEVBQWdFO0FBQzlEcUosc0JBQUFBLGFBQWEsR0FBR0EsYUFBYSxXQUFJOEMsTUFBTSxDQUFDbEosS0FBSyxDQUFDYSxHQUFQLENBQVYsb0JBQTdCO0FBQ0Q7QUFDRjs7QUFDRCxzQkFBSXVGLGFBQUosRUFBbUI7QUFDakJBLG9CQUFBQSxhQUFhLENBQUNxQyxLQUFkO0FBQ0Q7QUFDRjtBQUNGOztBQTVDNEIsb0JBOEN6QnpJLEtBQUssQ0FBQ2EsR0FBTixLQUFjLE9BOUNXO0FBQUE7QUFBQTtBQUFBOztBQUFBLDJCQStDRHBGLFFBL0NDLEVBK0NuQjJLLGNBL0NtQixjQStDbkJBLGFBL0NtQjs7QUFBQSxvQkFnRHZCQSxjQUFhLElBQUlBLGNBQWEsQ0FBQ2pLLFNBQWQsS0FBNEIsNEJBaER0QjtBQUFBO0FBQUE7QUFBQTs7QUFpRG5CdU4sY0FBQUEsd0JBakRtQixHQWlEUXRELGNBQWEsQ0FBQzlELGFBQWQsQ0FBNEJBLGFBQTVCLENBQTBDeEcsU0FBMUMsQ0FBb0QsQ0FBcEQsQ0FqRFI7QUFrRG5CZ04sY0FBQUEsZ0JBbERtQixHQWtEQTFDLGNBQWEsQ0FBQ3ZJLGlCQWxEZDtBQW9EekI7O0FBcER5QixvQkFxRHJCNkwsd0JBQXdCLEtBQUssMEJBQTdCLElBQ0dBLHdCQUF3QixLQUFLLHlCQXREWDtBQUFBO0FBQUE7QUFBQTs7QUF1RHZCQyxjQUFBQSxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsWUFBckIsRUFBbUNkLGdCQUFnQixDQUFDNUMsT0FBakIsQ0FBeUIxRCxVQUE1RDtBQUNBMEMsY0FBQUEsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixHQUF1QixnQkFBdkI7QUF4RHVCO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHFCQTBEakJ4RCxxRkFBQSxDQUE2Q2tILGdCQUFnQixDQUFDNUMsT0FBakIsQ0FBeUIxRCxVQUF0RSxDQTFEaUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBdEJ3RyxzQkFBc0I7QUFBQTtBQUFBO0FBQUEsS0FBNUI7O0FBZ0VBLE1BQU1hLG9CQUFvQjtBQUFBLHlMQUFHLGtCQUFPN0osS0FBUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3JCOEosY0FBQUEscUJBRHFCO0FBQUEscU1BQ0csa0JBQU9KLHdCQUFQLEVBQWlDWixnQkFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBQ3hCWSx3QkFBd0IsS0FBSywwQkFBN0IsSUFDREEsd0JBQXdCLEtBQUsseUJBRko7QUFBQTtBQUFBO0FBQUE7O0FBRzFCQywwQkFBQUEsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFlBQXJCLEVBQW1DZCxnQkFBZ0IsQ0FBQzVDLE9BQWpCLENBQXlCMUQsVUFBNUQ7QUFDQTBDLDBCQUFBQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXVCLGdCQUF2QjtBQUowQjtBQUFBOztBQUFBO0FBQUE7QUFBQSxpQ0FNcEJ4RCxxRkFBQSxDQUE2Q2tILGdCQUFnQixDQUFDNUMsT0FBakIsQ0FBeUIxRCxVQUF0RSxDQU5vQjs7QUFBQTtBQU9wQjhGLDBCQUFBQSx3QkFQb0IsR0FPTzdNLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsc0JBQTFCLENBUFA7QUFRMUI0TSwwQkFBQUEsd0JBQXdCLENBQUMxTSxPQUF6QixDQUFpQyxVQUFDMk0sdUJBQUQsRUFBNkI7QUFDNUQsZ0NBQU1ILGlCQUFpQixHQUFHRyx1QkFBMUI7QUFDQUgsNEJBQUFBLGlCQUFpQixDQUFDdEwsS0FBbEIsQ0FBd0JDLE9BQXhCLEdBQWtDLE1BQWxDO0FBQ0QsMkJBSEQ7O0FBUjBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURIOztBQUFBLGdDQUNyQitNLHFCQURxQjtBQUFBO0FBQUE7QUFBQTs7QUFlckIzQixjQUFBQSxlQWZxQixHQWVIbkksS0FBSyxDQUFDQyxNQUFOLENBQWFxQyxhQUFiLENBQTJCQSxhQWZ4Qjs7QUFnQjNCLGtCQUFJdEMsS0FBSyxDQUFDQyxNQUFOLENBQWE5RCxTQUFiLEtBQTJCLDRCQUEvQixFQUE2RDtBQUNyRHVOLGdCQUFBQSx3QkFEcUQsR0FDMUJ2QixlQUFlLENBQUNyTSxTQUFoQixDQUEwQixDQUExQixDQUQwQjtBQUVyRGdOLGdCQUFBQSxnQkFGcUQsR0FFbEM5SSxLQUFLLENBQUNDLE1BQU4sQ0FBYThKLFVBRnFCO0FBRzNERCxnQkFBQUEscUJBQXFCLENBQUNKLHdCQUFELEVBQTJCWixnQkFBM0IsQ0FBckI7QUFDRDs7QUFFRCxrQkFBSTlJLEtBQUssQ0FBQ0MsTUFBTixDQUFhOUQsU0FBYixLQUEyQixvQkFBL0IsRUFBcUQ7QUFDN0N1TixnQkFBQUEseUJBRDZDLEdBQ2xCdkIsZUFBZSxDQUFDN0YsYUFBaEIsQ0FBOEJ4RyxTQUE5QixDQUF3QyxDQUF4QyxDQURrQjtBQUU3Q2dOLGdCQUFBQSxpQkFGNkMsR0FFMUI5SSxLQUFLLENBQUNDLE1BRm9CO0FBR25ENkosZ0JBQUFBLHFCQUFxQixDQUFDSix5QkFBRCxFQUEyQlosaUJBQTNCLENBQXJCO0FBQ0Q7O0FBMUIwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFwQmUsb0JBQW9CO0FBQUE7QUFBQTtBQUFBLEtBQTFCOztBQTZCQSxNQUFNRyx3QkFBd0IsR0FBRyxTQUEzQkEsd0JBQTJCLEdBQU07QUFDckM7QUFDQXZPLElBQUFBLFFBQVEsQ0FBQ3dGLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDdUgscUJBQXJDO0FBQ0EvTSxJQUFBQSxRQUFRLENBQUN3RixnQkFBVCxDQUEwQixVQUExQixFQUFzQ3lILHNCQUF0QztBQUNBak4sSUFBQUEsUUFBUSxDQUFDd0YsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMwSCxtQkFBbkM7QUFDQWxOLElBQUFBLFFBQVEsQ0FBQ3dGLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDK0gsc0JBQXJDO0FBQ0F2TixJQUFBQSxRQUFRLENBQUN3RixnQkFBVCxDQUEwQixPQUExQixFQUFtQzRJLG9CQUFuQztBQUNELEdBUEQ7O0FBU0EsU0FBTztBQUNMRyxJQUFBQSx3QkFBd0IsRUFBeEJBO0FBREssR0FBUDtBQUdELENBcEoyQixFQUE1Qjs7QUFzSkEsaUVBQWUvQixtQkFBZjs7Ozs7Ozs7Ozs7Ozs7OztBQ3hKQTtBQUNBOztBQUVBLElBQU16RyxhQUFhLEdBQUksWUFBTTtBQUMzQixNQUFNaUYscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixHQUFNO0FBQ2xDLFFBQU0zRCxnQkFBZ0IsR0FBR3JILFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QixvQkFBdkIsQ0FBekI7QUFDQTRHLElBQUFBLGdCQUFnQixDQUFDaEcsS0FBakIsQ0FBdUJtTixTQUF2QixHQUFtQyxRQUFuQztBQUNBbkgsSUFBQUEsZ0JBQWdCLENBQUM3RSxXQUFqQixHQUErQixFQUEvQjtBQUNELEdBSkQ7O0FBTUEsTUFBTWlNLHdCQUF3QixHQUFHLFNBQTNCQSx3QkFBMkIsQ0FBQ0MsU0FBRCxFQUFlO0FBQzlDLFFBQU1ySCxnQkFBZ0IsR0FBR3JILFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QixvQkFBdkIsQ0FBekI7QUFDQWlPLElBQUFBLFNBQVMsQ0FBQ3ZPLE9BQVYsQ0FBa0IsVUFBQzRLLFFBQUQsRUFBYztBQUM5QkYsTUFBQUEsaUZBQXVCLENBQUNFLFFBQUQsRUFBVzFELGdCQUFYLENBQXZCO0FBQ0QsS0FGRDtBQUdELEdBTEQ7O0FBT0EsTUFBTXNILGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ2pILGdCQUFELEVBQXNCO0FBQzVDO0FBQ0EsUUFBTWtILHFCQUFxQixHQUFHbEgsZ0JBQWdCLENBQUNrRyxNQUFqQixDQUF3QixVQUFDMUcsYUFBRCxFQUFtQjtBQUN2RSxVQUFNeUUsZUFBZSxHQUFHM0wsUUFBUSxDQUFDUyxhQUFULG9CQUFtQ3lHLGFBQWEsQ0FBQ2pHLEVBQWpELE9BQXhCO0FBQ0EsYUFBTzBLLGVBQWUsQ0FBQ2pMLFNBQWhCLEtBQThCLDBCQUFyQztBQUNELEtBSDZCLENBQTlCO0FBS0EsV0FBT2tPLHFCQUFQO0FBQ0QsR0FSRDs7QUFVQSxNQUFNNUcsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixDQUFDTixnQkFBRCxFQUFzQjtBQUNuRCxRQUFNa0gscUJBQXFCLEdBQUdELGVBQWUsQ0FBQ2pILGdCQUFELENBQTdDO0FBQ0EsUUFBTW1ILHVCQUF1QixHQUFHRCxxQkFBcUIsQ0FBQ0UsSUFBdEIsQ0FBMkIsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsYUFBVUEsQ0FBQyxDQUFDQyxPQUFGLEdBQVlGLENBQUMsQ0FBQ0UsT0FBeEI7QUFBQSxLQUEzQixDQUFoQztBQUNBakUsSUFBQUEscUJBQXFCO0FBQ3JCeUQsSUFBQUEsd0JBQXdCLENBQUNJLHVCQUFELENBQXhCO0FBQ0EsV0FBT0EsdUJBQVA7QUFDRCxHQU5EOztBQVFBLE1BQU01Ryx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLENBQUNQLGdCQUFELEVBQXNCO0FBQ3BELFFBQU1rSCxxQkFBcUIsR0FBR0QsZUFBZSxDQUFDakgsZ0JBQUQsQ0FBN0M7QUFDQSxRQUFNbUgsdUJBQXVCLEdBQUdELHFCQUFxQixDQUFDRSxJQUF0QixDQUEyQixVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxhQUFVQSxDQUFDLENBQUNFLFFBQUYsR0FBYUgsQ0FBQyxDQUFDRyxRQUF6QjtBQUFBLEtBQTNCLENBQWhDO0FBQ0FsRSxJQUFBQSxxQkFBcUI7QUFDckJ5RCxJQUFBQSx3QkFBd0IsQ0FBQ0ksdUJBQUQsQ0FBeEI7QUFDQSxXQUFPQSx1QkFBUDtBQUNELEdBTkQ7O0FBUUEsTUFBTTNHLHlCQUF5QixHQUFHLFNBQTVCQSx5QkFBNEIsQ0FBQ1IsZ0JBQUQsRUFBc0I7QUFDdEQsUUFBTWtILHFCQUFxQixHQUFHRCxlQUFlLENBQUNqSCxnQkFBRCxDQUE3QztBQUVBLFFBQU1tSCx1QkFBdUIsR0FBR0QscUJBQXFCLENBQUNFLElBQXRCLENBQzlCLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGFBQVVBLENBQUMsQ0FBQ0csY0FBRixDQUFpQkMsV0FBakIsQ0FBNkJoQyxLQUE3QixHQUFxQzJCLENBQUMsQ0FBQ0ksY0FBRixDQUFpQkMsV0FBakIsQ0FBNkJoQyxLQUE1RTtBQUFBLEtBRDhCLENBQWhDO0FBR0FwQyxJQUFBQSxxQkFBcUI7QUFDckJ5RCxJQUFBQSx3QkFBd0IsQ0FBQ0ksdUJBQUQsQ0FBeEI7QUFDQSxXQUFPQSx1QkFBUDtBQUNELEdBVEQ7O0FBV0EsTUFBTTlHLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0wsZ0JBQUQsRUFBc0I7QUFDL0M7QUFDQSxRQUFNa0gscUJBQXFCLEdBQUdsSCxnQkFBZ0IsQ0FBQ2tHLE1BQWpCLENBQXdCLFVBQUMxRyxhQUFELEVBQW1CO0FBQ3ZFLFVBQU15RSxlQUFlLEdBQUczTCxRQUFRLENBQUNTLGFBQVQsb0JBQW1DeUcsYUFBYSxDQUFDakcsRUFBakQsT0FBeEI7O0FBQ0EsVUFBSTBLLGVBQWUsS0FBSyxJQUF4QixFQUE4QjtBQUM1QixlQUFPLEtBQVA7QUFDRDs7QUFDRCxhQUFPQSxlQUFlLENBQUNqTCxTQUFoQixLQUE4QiwwQkFBckM7QUFDRCxLQU42QixDQUE5QjtBQU9Bc0ssSUFBQUEscUJBQXFCO0FBQ3JCeUQsSUFBQUEsd0JBQXdCLENBQUNHLHFCQUFELENBQXhCO0FBQ0QsR0FYRDs7QUFhQSxTQUFPO0FBQ0w1RyxJQUFBQSxzQkFBc0IsRUFBdEJBLHNCQURLO0FBRUxDLElBQUFBLHVCQUF1QixFQUF2QkEsdUJBRks7QUFHTEMsSUFBQUEseUJBQXlCLEVBQXpCQSx5QkFISztBQUlMSCxJQUFBQSxrQkFBa0IsRUFBbEJBO0FBSkssR0FBUDtBQU1ELENBdEVxQixFQUF0Qjs7QUF3RUEsaUVBQWVoQyxhQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRUEsSUFBTXNKLG9CQUFvQjtBQUFBLHNMQUFHLGlCQUFPdEksVUFBUCxFQUFtQkMsYUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDSnNJLEtBQUssbURBQTRDdEksYUFBNUMsa0NBQWlGRCxVQUFqRixZQUFvRztBQUFFd0ksY0FBQUEsSUFBSSxFQUFFO0FBQVIsYUFBcEcsQ0FERDs7QUFBQTtBQUNyQkMsWUFBQUEsUUFEcUI7QUFBQTtBQUFBLG1CQUVIQSxRQUFRLENBQUNDLElBQVQsRUFGRzs7QUFBQTtBQUVyQmYsWUFBQUEsU0FGcUI7QUFHckJ6SCxZQUFBQSxlQUhxQixHQUdIeUgsU0FBUyxDQUFDZ0IsSUFBVixDQUFlM0ksVUFBZixDQUhHO0FBQUEsNkNBS3BCRSxlQUxvQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFwQm9JLG9CQUFvQjtBQUFBO0FBQUE7QUFBQSxHQUExQjs7QUFRQSxJQUFNTSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUMxSSxlQUFELEVBQWtCRCxhQUFsQixFQUFvQztBQUM5RCxNQUFNNEksV0FBVyxHQUFHM0ksZUFBZSxDQUFDNEksT0FBcEM7QUFDQSxNQUFNQyxXQUFXLEdBQUdGLFdBQVcsQ0FBQ3RDLElBQWhDO0FBQ0EsTUFBTXlDLGtCQUFrQixHQUFHSCxXQUFXLENBQUNJLFdBQXZDO0FBQ0EsTUFBTUMsU0FBUyxHQUFHTCxXQUFXLENBQUNNLEtBQVosQ0FBa0JDLElBQXBDO0FBQ0EsTUFBTUMsYUFBYSxxREFBOENwSixhQUE5QywwQkFBMkVpSixTQUEzRSxDQUFuQjtBQUVBLFNBQU87QUFDTEgsSUFBQUEsV0FBVyxFQUFYQSxXQURLO0FBRUxDLElBQUFBLGtCQUFrQixFQUFsQkEsa0JBRks7QUFHTEssSUFBQUEsYUFBYSxFQUFiQTtBQUhLLEdBQVA7QUFLRCxDQVpEOztBQWNBLElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ3BKLGVBQUQsRUFBa0JELGFBQWxCLEVBQW9DO0FBQzVELE1BQU1zSixVQUFVLEdBQUdySixlQUFlLENBQUNzSixNQUFuQztBQUNBLE1BQU1BLE1BQU0sR0FBRyxFQUFmO0FBRUFELEVBQUFBLFVBQVUsQ0FBQ25RLE9BQVgsQ0FBbUIsVUFBQ3FRLEtBQUQsRUFBVztBQUM1QixRQUFNQyxXQUFXLEdBQUc7QUFDbEJuRCxNQUFBQSxJQUFJLEVBQUVrRCxLQUFLLENBQUNsRCxJQURNO0FBRWxCck0sTUFBQUEsRUFBRSxFQUFFdVAsS0FBSyxDQUFDdlAsRUFGUTtBQUdsQitPLE1BQUFBLFdBQVcsRUFBRVEsS0FBSyxDQUFDUixXQUhEO0FBSWxCVSxNQUFBQSxRQUFRLEVBQUVGLEtBQUssQ0FBQ0UsUUFKRTtBQUtsQkMsTUFBQUEsUUFBUSxFQUFFSCxLQUFLLENBQUNHLFFBTEU7QUFNbEJDLE1BQUFBLFFBQVEsRUFBRUosS0FBSyxDQUFDSyxZQU5FO0FBT2xCQyxNQUFBQSxNQUFNLG9EQUE2QzlKLGFBQTdDLHdCQUF3RXdKLEtBQUssQ0FBQ3ZQLEVBQTlFO0FBUFksS0FBcEI7QUFTQXNQLElBQUFBLE1BQU0sQ0FBQ2pGLElBQVAsQ0FBWW1GLFdBQVo7QUFDRCxHQVhEO0FBYUEsU0FBT0YsTUFBUDtBQUNELENBbEJEOztBQW9CQSxJQUFNOUssa0JBQWtCO0FBQUEsdUxBQUcsa0JBQU9zQixVQUFQLEVBQW1CQyxhQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNLcUksb0JBQW9CLENBQUN0SSxVQUFELEVBQWFDLGFBQWIsQ0FEekI7O0FBQUE7QUFDbkJDLFlBQUFBLGVBRG1CO0FBRW5COEosWUFBQUEsZUFGbUIsR0FFRHBCLG1CQUFtQixDQUFDMUksZUFBRCxFQUFrQkQsYUFBbEIsQ0FGbEI7QUFHbkJ1SixZQUFBQSxNQUhtQixHQUdWRixpQkFBaUIsQ0FBQ3BKLGVBQUQsRUFBa0JELGFBQWxCLENBSFAsRUFLekI7O0FBQ01uRSxZQUFBQSxhQU5tQixHQU1Ib0UsZUFBZSxDQUFDK0osS0FBaEIsQ0FBc0JDLE9BQXRCLENBQ3BCaEssZUFBZSxDQUFDK0osS0FBaEIsQ0FBc0IsQ0FBdEIsQ0FEb0IsRUFDTS9KLGVBQWUsQ0FBQytKLEtBQWhCLENBQXNCLENBQXRCLEVBQXlCRSxXQUF6QixFQUROLENBTkc7O0FBVXpCLGdCQUFJakssZUFBZSxDQUFDa0ssT0FBaEIsS0FBNEIsTUFBaEMsRUFBd0M7QUFDdENsSyxjQUFBQSxlQUFlLENBQUNrSyxPQUFoQixHQUEwQixVQUExQjtBQUNEOztBQUVELGdCQUFJbEssZUFBZSxDQUFDaEcsRUFBaEIsS0FBdUIsUUFBM0IsRUFBcUM7QUFDbkNnRyxjQUFBQSxlQUFlLENBQUNtSyxRQUFoQixDQUF5QixDQUF6QixJQUE4QiwwR0FBOUI7QUFDRDs7QUFFRCxnQkFBSW5LLGVBQWUsQ0FBQ2hHLEVBQWhCLEtBQXVCLEtBQTNCLEVBQWtDO0FBQ2hDZ0csY0FBQUEsZUFBZSxDQUFDbUssUUFBaEIsQ0FBeUI5RixJQUF6QixDQUE4Qiw2RkFBOUI7QUFDRDs7QUFwQndCLDhDQXNCbEI7QUFDTGdDLGNBQUFBLElBQUksRUFBRXJHLGVBQWUsQ0FBQ3FHLElBRGpCO0FBRUxyTSxjQUFBQSxFQUFFLEVBQUVnRyxlQUFlLENBQUNoRyxFQUZmO0FBR0wrUCxjQUFBQSxLQUFLLEVBQUVuTyxhQUhGO0FBSUx3TyxjQUFBQSxJQUFJLEVBQUVwSyxlQUFlLENBQUNvSyxJQUpqQjtBQUtMQyxjQUFBQSxLQUFLLEVBQUVySyxlQUFlLENBQUMrRSxJQUxsQjtBQU1MdUYsY0FBQUEsS0FBSyxFQUFFdEssZUFBZSxDQUFDc0ssS0FObEI7QUFPTEMsY0FBQUEsUUFBUSxFQUFFdkssZUFBZSxDQUFDa0ssT0FQckI7QUFRTHRCLGNBQUFBLE9BQU8sRUFBRWtCLGVBUko7QUFTTFIsY0FBQUEsTUFBTSxFQUFOQSxNQVRLO0FBVUxrQixjQUFBQSxJQUFJLEVBQUV4SyxlQUFlLENBQUNtSztBQVZqQixhQXRCa0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBbEIzTCxrQkFBa0I7QUFBQTtBQUFBO0FBQUEsR0FBeEI7O0FBb0NBLGlFQUFlQSxrQkFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUVBLElBQU1pTSxrQkFBa0I7QUFBQSxzTEFBRyxpQkFBTzNLLFVBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3pCO0FBQ000SyxZQUFBQSxNQUZtQixHQUVWLG9EQUZVOztBQUFBLGtCQUdSbEksTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixLQUF5QmdJLE1BSGpCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBSWZyQyxLQUFLLGlDQUEwQnZJLFVBQTFCLEdBQXdDO0FBQUV3SSxjQUFBQSxJQUFJLEVBQUU7QUFBUixhQUF4QyxDQUpVOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxtQkFLZkQsS0FBSyxXQUFJdkksVUFBSixHQUFrQjtBQUFFd0ksY0FBQUEsSUFBSSxFQUFFO0FBQVIsYUFBbEIsQ0FMVTs7QUFBQTtBQUFBOztBQUFBO0FBR25CQyxZQUFBQSxRQUhtQjtBQUFBO0FBQUEsbUJBTUdBLFFBQVEsQ0FBQ0MsSUFBVCxFQU5IOztBQUFBO0FBTW5CdkksWUFBQUEsYUFObUI7QUFBQSw2Q0FRbEJBLGFBUmtCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWxCd0ssa0JBQWtCO0FBQUE7QUFBQTtBQUFBLEdBQXhCOztBQVdBLElBQU1oTSxnQkFBZ0I7QUFBQSx1TEFBRyxrQkFBT3FCLFVBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDSzJLLGtCQUFrQixDQUFDM0ssVUFBRCxDQUR2Qjs7QUFBQTtBQUNqQkcsWUFBQUEsYUFEaUI7QUFFakIrSCxZQUFBQSxPQUZpQixHQUVQL0gsYUFBYSxDQUFDK0gsT0FBZCxDQUFzQjJDLE9BQXRCLENBQThCLENBQTlCLENBRk87QUFHakIxQyxZQUFBQSxRQUhpQixHQUdOaEksYUFBYSxDQUFDZ0ksUUFBZCxDQUF1QjBDLE9BQXZCLENBQStCLENBQS9CLENBSE07QUFJakJsRyxZQUFBQSxJQUppQixHQUlWeEUsYUFBYSxDQUFDd0UsSUFBZCxDQUFtQixDQUFuQixJQUF3QnhFLGFBQWEsQ0FBQ3dFLElBQWQsQ0FBbUJ4SyxTQUFuQixDQUE2QixDQUE3QixFQUFnQzBLLFdBQWhDLEVBSmQ7QUFBQSw4Q0FNaEI7QUFDTDdFLGNBQUFBLFVBQVUsRUFBVkEsVUFESztBQUVMOEssY0FBQUEsR0FBRyxFQUFFM0ssYUFBYSxDQUFDNEssUUFGZDtBQUdMM0MsY0FBQUEsY0FBYyxFQUFFakksYUFBYSxDQUFDaUksY0FIekI7QUFJTDRDLGNBQUFBLFFBQVEsRUFBRTdLLGFBQWEsQ0FBQzhLLFdBQWQsQ0FBMEJyTixLQUExQixDQUFnQyxDQUFoQyxDQUpMO0FBS0xzTixjQUFBQSxZQUFZLEVBQUUvSyxhQUFhLENBQUNnTCxRQUFkLENBQXVCRCxZQUxoQztBQU1MRSxjQUFBQSxhQUFhLEVBQUVqTCxhQUFhLENBQUNnTCxRQUFkLENBQXVCQyxhQU5qQztBQU9MbEQsY0FBQUEsT0FBTyxFQUFQQSxPQVBLO0FBUUxDLGNBQUFBLFFBQVEsRUFBUkEsUUFSSztBQVNMeEQsY0FBQUEsSUFBSSxFQUFKQTtBQVRLLGFBTmdCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWhCaEcsZ0JBQWdCO0FBQUE7QUFBQTtBQUFBLEdBQXRCOztBQW1CQSxpRUFBZUEsZ0JBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkEsSUFBTU0scUJBQXFCO0FBQUEsc0xBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDR3NKLEtBQUssQ0FBQyx1REFBRCxDQURSOztBQUFBO0FBQ3RCOEMsWUFBQUEsZ0JBRHNCO0FBQUE7QUFBQSxtQkFFTEEsZ0JBQWdCLENBQUMzQyxJQUFqQixFQUZLOztBQUFBO0FBRXRCNEMsWUFBQUEsUUFGc0I7QUFHdEJyTCxZQUFBQSxhQUhzQixHQUdOcUwsUUFBUSxDQUFDLENBQUQsQ0FIRjtBQUFBO0FBQUEsbUJBSUkvQyxLQUFLLG1EQUE0Q3RJLGFBQTVDLCtCQUpUOztBQUFBO0FBSXRCc0wsWUFBQUEsaUJBSnNCO0FBQUE7QUFBQSxtQkFLREEsaUJBQWlCLENBQUM3QyxJQUFsQixFQUxDOztBQUFBO0FBS3RCckUsWUFBQUEsWUFMc0I7QUFBQSw2Q0FPckJBLFlBQVksQ0FBQ3NFLElBUFE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBckIxSixxQkFBcUI7QUFBQTtBQUFBO0FBQUEsR0FBM0I7O0FBVUEsSUFBTUMsbUJBQW1CO0FBQUEsdUxBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3BCMEwsWUFBQUEsTUFEb0IsR0FDWCxvREFEVzs7QUFBQSxrQkFFVGxJLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsS0FBeUJnSSxNQUZoQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1CQUdoQnJDLEtBQUssQ0FBQyxpQ0FBRCxFQUFvQztBQUFFQyxjQUFBQSxJQUFJLEVBQUU7QUFBUixhQUFwQyxDQUhXOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxtQkFJaEJELEtBQUssQ0FBQyxXQUFELEVBQWM7QUFBRUMsY0FBQUEsSUFBSSxFQUFFO0FBQVIsYUFBZCxDQUpXOztBQUFBO0FBQUE7O0FBQUE7QUFFcEJDLFlBQUFBLFFBRm9CO0FBQUE7QUFBQSxtQkFLS0EsUUFBUSxDQUFDQyxJQUFULEVBTEw7O0FBQUE7QUFLcEIvSCxZQUFBQSxnQkFMb0I7QUFBQSw4Q0FPbkJBLGdCQVBtQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFuQnpCLG1CQUFtQjtBQUFBO0FBQUE7QUFBQSxHQUF6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBLHVQQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ2lCcUosS0FBSyxDQUFDLHVEQUFELEVBQTBEO0FBQUVDLFlBQUFBLElBQUksRUFBRTtBQUFSLFdBQTFELENBRHRCOztBQUFBO0FBQ1BnRCxVQUFBQSxlQURPO0FBQUE7QUFBQSxpQkFFVUEsZUFBZSxDQUFDOUMsSUFBaEIsRUFGVjs7QUFBQTtBQUVQNEMsVUFBQUEsUUFGTztBQUdQckwsVUFBQUEsYUFITyxHQUdTcUwsUUFBUSxDQUFDLENBQUQsQ0FIakI7QUFBQSwyQ0FJTnJMLGFBSk07O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0EsSUFBTXdMLGFBQWE7QUFBQSxzTEFBRyxpQkFBT3hMLGFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDR3NJLEtBQUssbURBQTRDdEksYUFBNUMsMkJBRFI7O0FBQUE7QUFDZHdJLFlBQUFBLFFBRGM7QUFBQTtBQUFBLG1CQUVHQSxRQUFRLENBQUNDLElBQVQsRUFGSDs7QUFBQTtBQUVkZ0QsWUFBQUEsUUFGYztBQUFBLDZDQUliQSxRQUFRLENBQUMvQyxJQUpJOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWI4QyxhQUFhO0FBQUE7QUFBQTtBQUFBLEdBQW5COztJQU9NRTtBQVdKLG9CQUFZQyxNQUFaLEVBQW9CRixRQUFwQixFQUE4QnpMLGFBQTlCLEVBQTZDO0FBQUE7O0FBQzNDLFNBQUsyTCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLalIsV0FBTCxHQUFtQixLQUFLa1IsY0FBTCxDQUFvQkgsUUFBcEIsQ0FBbkI7QUFDQSxTQUFLekwsYUFBTCxHQUFxQkEsYUFBckI7QUFDRDs7OztXQVRELHdCQUFleUwsUUFBZixFQUF5QjtBQUN2QixVQUFNL1EsV0FBVyxHQUFHK1EsUUFBUSxDQUFDLEtBQUtFLE1BQU4sQ0FBNUI7QUFDQSxhQUFPalIsV0FBUDtBQUNEOzs7V0FRRCx3QkFBZTtBQUNiLFVBQU1tUixXQUFXLEdBQUcsS0FBS25SLFdBQUwsQ0FBaUJ3TyxLQUFqQixDQUF1QkMsSUFBM0M7QUFDQSxVQUFNMkMsUUFBUSxxREFBOEMsS0FBSzlMLGFBQW5ELHVCQUE2RTZMLFdBQTdFLENBQWQ7QUFDQSxhQUFPQyxRQUFQO0FBQ0Q7QUFFRDs7Ozs7d01BQ0Esa0JBQXdCTCxRQUF4QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUU0sZ0JBQUFBLGdCQURSLEdBQzJCLEtBQUtyUixXQUFMLENBQWlCbUQsSUFENUM7O0FBQUEsc0JBRU1rTyxnQkFBZ0IsS0FBS2pGLFNBRjNCO0FBQUE7QUFBQTtBQUFBOztBQUFBLGtEQUdXLEVBSFg7O0FBQUE7QUFLUWtGLGdCQUFBQSxvQkFMUixHQUsrQkQsZ0JBQWdCLENBQUN2SyxHQUFqQixDQUFxQixVQUFDbUssTUFBRDtBQUFBLHlCQUFhO0FBQzdEckYsb0JBQUFBLElBQUksRUFBRW1GLFFBQVEsQ0FBQ0UsTUFBRCxDQUFSLENBQWlCckYsSUFEc0M7QUFFN0R3RixvQkFBQUEsUUFBUSxvREFBNkMsS0FBSSxDQUFDOUwsYUFBbEQsdUJBQTRFMkwsTUFBNUUsU0FGcUQ7QUFHN0RNLG9CQUFBQSxJQUFJLEVBQUVSLFFBQVEsQ0FBQ0UsTUFBRCxDQUFSLENBQWlCTyxJQUFqQixDQUFzQkM7QUFIaUMsbUJBQWI7QUFBQSxpQkFBckIsQ0FML0I7QUFBQSxrREFVU0gsb0JBVlQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7V0FhQSxxQkFBWVAsUUFBWixFQUFzQjtBQUNwQixVQUFJLEtBQUsvUSxXQUFMLEtBQXFCb00sU0FBekIsRUFBb0M7QUFDbEMsZUFBTyxLQUFQO0FBQ0Q7O0FBQ0QsVUFBUVIsSUFBUixHQUFpQixLQUFLNUwsV0FBdEIsQ0FBUTRMLElBQVI7QUFDQSxVQUFRMEMsV0FBUixHQUF3QixLQUFLdE8sV0FBN0IsQ0FBUXNPLFdBQVI7QUFDQSxVQUFNaUQsSUFBSSxHQUFHLEtBQUt2UixXQUFMLENBQWlCd1IsSUFBakIsQ0FBc0JDLEtBQW5DO0FBQ0EsVUFBTUwsUUFBUSxHQUFHLEtBQUtNLFlBQUwsQ0FBa0JYLFFBQWxCLENBQWpCO0FBQ0EsVUFBTVksY0FBYyxHQUFHLEtBQUtDLGlCQUFMLENBQXVCYixRQUF2QixDQUF2QjtBQUNBLFVBQVF6RyxJQUFSLEdBQWlCLEtBQUt0SyxXQUF0QixDQUFRc0ssSUFBUjtBQUVBLGFBQU87QUFDTHNCLFFBQUFBLElBQUksRUFBSkEsSUFESztBQUVMMEMsUUFBQUEsV0FBVyxFQUFYQSxXQUZLO0FBR0xpRCxRQUFBQSxJQUFJLEVBQUpBLElBSEs7QUFJTEgsUUFBQUEsUUFBUSxFQUFSQSxRQUpLO0FBS0xPLFFBQUFBLGNBQWMsRUFBZEEsY0FMSztBQU1MckgsUUFBQUEsSUFBSSxFQUFKQTtBQU5LLE9BQVA7QUFRRDs7OztrTUF2REQsa0JBQXlCaEYsYUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1F5TCxnQkFBQUEsUUFEUixHQUNtQkQsYUFBYSxDQUFDeEwsYUFBRCxDQURoQztBQUFBLGtEQUVTeUwsUUFGVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQTBERixpRUFBZUMsUUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRUE7O0lBRXFCYztBQVduQiwyQkFBWUMsWUFBWixFQUEwQkMsWUFBMUIsRUFBd0M7QUFBQTs7QUFDdEMsU0FBS0QsWUFBTCxHQUFvQkEsWUFBcEI7QUFDQSxTQUFLQyxZQUFMLEdBQW9CQSxZQUFwQjtBQUNEO0FBRUQ7Ozs7O1dBQ0Esd0JBQWVDLGlCQUFmLEVBQWtDQyxJQUFsQyxFQUF3QztBQUFBOztBQUN0QyxVQUFNQyxRQUFRLEdBQUdOLG9GQUFBLENBQTRDLEtBQTVDLFlBQXNELEtBQUtFLFlBQTNELHlCQUE2RkUsaUJBQTdGLENBQWpCO0FBQ0EsVUFBTS9NLFdBQVcsR0FBRzJNLG9GQUFBLENBQTRDLFFBQTVDLFlBQXlELEtBQUtFLFlBQTlELGlDQUF3R0ksUUFBeEcsQ0FBcEI7QUFDQWpOLE1BQUFBLFdBQVcsQ0FBQ3BFLFdBQVosYUFBNkIsS0FBS2lSLFlBQUwsQ0FBa0IsQ0FBbEIsRUFBcUJ2QyxXQUFyQixFQUE3QixTQUFrRSxLQUFLdUMsWUFBTCxDQUFrQjlPLEtBQWxCLENBQXdCLENBQXhCLENBQWxFO0FBQ0EsVUFBTTBCLGVBQWUsR0FBR2tOLG9GQUFBLENBQTRDLEtBQTVDLFlBQXNELEtBQUtFLFlBQTNELHlDQUE2R0ksUUFBN0csQ0FBeEI7QUFFQSxXQUFLSCxZQUFMLENBQWtCdlQsT0FBbEIsQ0FBMEIsVUFBQzRULE1BQUQsRUFBWTtBQUNwQyxZQUFNNUssY0FBYyxHQUFHb0ssb0ZBQUEsQ0FBNEMsTUFBNUMsWUFBdURRLE1BQXZELGNBQWlFLEtBQUksQ0FBQ04sWUFBdEUsY0FBc0ZHLElBQXRGLHVCQUE4R3ZOLGVBQTlHLENBQXZCO0FBQ0E4QyxRQUFBQSxjQUFjLENBQUMzRyxXQUFmLGFBQWdDdVIsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVN0MsV0FBVixFQUFoQyxTQUEwRDZDLE1BQU0sQ0FBQ3BQLEtBQVAsQ0FBYSxDQUFiLENBQTFEO0FBQ0QsT0FIRDtBQUlEOzs7V0ExQkQseUJBQXVCO0FBQ3JCLFVBQU1zRixhQUFhLEdBQUdqSyxRQUFRLENBQUNTLGFBQVQsQ0FBdUIsaUJBQXZCLENBQXRCO0FBQ0EsVUFBTWtULGlCQUFpQixHQUFHM1QsUUFBUSxDQUFDZ1UsYUFBVCxDQUF1QixLQUF2QixDQUExQjtBQUNBTCxNQUFBQSxpQkFBaUIsQ0FBQ2pULFNBQWxCLEdBQThCLHFCQUE5QjtBQUNBdUosTUFBQUEsYUFBYSxDQUFDZ0ssWUFBZCxDQUNFTixpQkFERixFQUNxQjFKLGFBQWEsQ0FBQ2lLLFNBRG5DO0FBR0EsYUFBT1AsaUJBQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEgsSUFBTUosZUFBZSxHQUFJLFlBQU07QUFDN0IsTUFBTU8sMkJBQTJCLEdBQUcsU0FBOUJBLDJCQUE4QixDQUFDSyxHQUFELEVBQU16VCxTQUFOLEVBQWlCbUcsYUFBakIsRUFBbUM7QUFDckUsUUFBTTFELE9BQU8sR0FBR25ELFFBQVEsQ0FBQ2dVLGFBQVQsQ0FBdUJHLEdBQXZCLENBQWhCO0FBQ0FoUixJQUFBQSxPQUFPLENBQUN6QyxTQUFSLEdBQW9CQSxTQUFwQjtBQUNBbUcsSUFBQUEsYUFBYSxDQUFDdU4sV0FBZCxDQUEwQmpSLE9BQTFCO0FBRUEsV0FBT0EsT0FBUDtBQUNELEdBTkQ7O0FBUUEsTUFBTWtSLHdCQUF3QixHQUFHLFNBQTNCQSx3QkFBMkIsQ0FBQ0YsR0FBRCxFQUFNbFQsRUFBTixFQUFVNEYsYUFBVixFQUE0QjtBQUMzRCxRQUFNMUQsT0FBTyxHQUFHbkQsUUFBUSxDQUFDZ1UsYUFBVCxDQUF1QkcsR0FBdkIsQ0FBaEI7QUFDQWhSLElBQUFBLE9BQU8sQ0FBQ2xDLEVBQVIsR0FBYUEsRUFBYjtBQUNBNEYsSUFBQUEsYUFBYSxDQUFDdU4sV0FBZCxDQUEwQmpSLE9BQTFCO0FBRUEsV0FBT0EsT0FBUDtBQUNELEdBTkQ7O0FBUUEsTUFBTW1SLGdDQUFnQyxHQUFHLFNBQW5DQSxnQ0FBbUMsQ0FBQ0gsR0FBRCxFQUFNelQsU0FBTixFQUFpQk8sRUFBakIsRUFBcUI0RixhQUFyQixFQUF1QztBQUM5RSxRQUFNMUQsT0FBTyxHQUFHbkQsUUFBUSxDQUFDZ1UsYUFBVCxDQUF1QkcsR0FBdkIsQ0FBaEI7QUFDQWhSLElBQUFBLE9BQU8sQ0FBQ3pDLFNBQVIsR0FBb0JBLFNBQXBCO0FBQ0F5QyxJQUFBQSxPQUFPLENBQUNsQyxFQUFSLEdBQWFBLEVBQWI7QUFDQTRGLElBQUFBLGFBQWEsQ0FBQ3VOLFdBQWQsQ0FBMEJqUixPQUExQjtBQUVBLFdBQU9BLE9BQVA7QUFDRCxHQVBEOztBQVNBLE1BQU1vUixnQ0FBZ0MsR0FBRyxTQUFuQ0EsZ0NBQW1DLENBQUM3VCxTQUFELEVBQVltRyxhQUFaLEVBQTJCMk4sR0FBM0IsRUFBZ0NDLEdBQWhDLEVBQXdDO0FBQy9FLFFBQU1DLFlBQVksR0FBR1osMkJBQTJCLENBQUMsS0FBRCxFQUFRcFQsU0FBUixFQUFtQm1HLGFBQW5CLENBQWhEO0FBQ0E2TixJQUFBQSxZQUFZLENBQUNGLEdBQWIsR0FBbUJBLEdBQW5CO0FBQ0FFLElBQUFBLFlBQVksQ0FBQ0QsR0FBYixHQUFtQkEsR0FBbkI7QUFFQSxXQUFPQyxZQUFQO0FBQ0QsR0FORDs7QUFRQSxTQUFPO0FBQ0xaLElBQUFBLDJCQUEyQixFQUEzQkEsMkJBREs7QUFFTE8sSUFBQUEsd0JBQXdCLEVBQXhCQSx3QkFGSztBQUdMQyxJQUFBQSxnQ0FBZ0MsRUFBaENBLGdDQUhLO0FBSUxDLElBQUFBLGdDQUFnQyxFQUFoQ0E7QUFKSyxHQUFQO0FBTUQsQ0F4Q3VCLEVBQXhCOztBQTBDQSxpRUFBZWhCLGVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7QUFDQTs7QUFFQSxJQUFNNU4sb0JBQW9CO0FBQUEsc0xBQUcsaUJBQU9rUCxZQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDM0JGLFlBQUFBLG1FQUFtQixDQUFDRSxZQUFELEVBQWUsTUFBZixDQUFuQjtBQUVNL1IsWUFBQUEsYUFIcUIsR0FHTDlDLFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QixpQkFBdkIsQ0FISztBQUluQjZRLFlBQUFBLEtBSm1CLEdBSVR1RCxZQUpTLENBSW5CdkQsS0FKbUI7QUFLM0JBLFlBQUFBLEtBQUssQ0FBQ25SLE9BQU4sQ0FBYyxVQUFDNEwsSUFBRCxFQUFVO0FBQ3RCLGtCQUFNRSxZQUFZLEdBQUdzSCw0RkFBQSxDQUE0QyxLQUE1QyxFQUFtRCxlQUFuRCxFQUFvRXpRLGFBQXBFLENBQXJCO0FBQ0Esa0JBQU1nUyxnQkFBZ0IsR0FBR3ZCLDRGQUFBLENBQTRDLE1BQTVDLEVBQW9ELG9CQUFwRCxFQUEwRXRILFlBQTFFLENBQXpCO0FBQ0E2SSxjQUFBQSxnQkFBZ0IsQ0FBQ3RTLFdBQWpCLEdBQStCdUosSUFBL0I7QUFDQXdILGNBQUFBLGlHQUFBLENBQWlELHFCQUFqRCxFQUF3RXRILFlBQXhFLFlBQXlGMkksa0RBQU0sV0FBSTdJLElBQUosVUFBL0YsR0FBa0hBLElBQWxIO0FBQ0QsYUFMRDtBQU1BOztBQUNNZ0osWUFBQUEsZ0JBWnFCLEdBWUZ4Qiw0RkFBQSxDQUE0QyxLQUE1QyxFQUFtRCxtQkFBbkQsRUFBd0V6USxhQUF4RSxDQVpFO0FBYW5CME8sWUFBQUEsUUFibUIsR0FhTnFELFlBYk0sQ0FhbkJyRCxRQWJtQjtBQWNyQndELFlBQUFBLG9CQWRxQixHQWNFekIsNEZBQUEsQ0FBNEMsTUFBNUMsRUFBb0Qsd0JBQXBELEVBQThFd0IsZ0JBQTlFLENBZEY7QUFlM0JDLFlBQUFBLG9CQUFvQixDQUFDeFMsV0FBckIsR0FBbUNnUCxRQUFuQztBQUNBK0IsWUFBQUEsaUdBQUEsQ0FBaUQseUJBQWpELEVBQTRFd0IsZ0JBQTVFLFlBQWlHSCxrREFBTSxXQUFJcEQsUUFBSixVQUF2RyxHQUE4SEEsUUFBOUg7QUFFQTs7QUFDTXlELFlBQUFBLGFBbkJxQixHQW1CTGpWLFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QixpQkFBdkIsQ0FuQks7QUFvQnJCc0MsWUFBQUEsWUFwQnFCLEdBb0JOd1EsNEZBQUEsQ0FBNEMsTUFBNUMsRUFBb0QsZUFBcEQsRUFBcUUwQixhQUFyRSxDQXBCTTtBQXFCM0JsUyxZQUFBQSxZQUFZLENBQUNtUyxTQUFiLEdBQXlCTCxZQUFZLENBQUN4RCxJQUF0QztBQUVNOEQsWUFBQUEsa0JBdkJxQixHQXVCQW5WLFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QixzQkFBdkIsQ0F2QkE7QUF3QnJCdUMsWUFBQUEsY0F4QnFCLEdBd0JKdVEsNEZBQUEsQ0FBNEMsS0FBNUMsRUFBbUQsaUJBQW5ELEVBQXNFNEIsa0JBQXRFLENBeEJJO0FBeUJyQkMsWUFBQUEsV0F6QnFCLEdBeUJQN0IsNEZBQUEsQ0FBNEMsS0FBNUMsRUFBbUQsY0FBbkQsRUFBbUV2USxjQUFuRSxDQXpCTztBQTBCckJxUyxZQUFBQSxVQTFCcUIsR0EwQlI5QixpR0FBQSxDQUNqQixtQkFEaUIsRUFDSTZCLFdBREosRUFDaUJQLFlBQVksQ0FBQ2hGLE9BQWIsQ0FBcUJPLGFBRHRDLEVBQ3FEeUUsWUFBWSxDQUFDaEYsT0FBYixDQUFxQkMsV0FEMUUsQ0ExQlE7QUE2QjNCdUYsWUFBQUEsVUFBVSxDQUFDcFUsRUFBWCxHQUFnQixhQUFoQjtBQUVNcVUsWUFBQUEsUUEvQnFCLEdBK0JWLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLENBL0JVO0FBZ0N2QkMsWUFBQUEsS0FoQ3VCLEdBZ0NmLENBaENlO0FBa0MzQlYsWUFBQUEsWUFBWSxDQUFDdEUsTUFBYixDQUFvQnBRLE9BQXBCLENBQTRCLFVBQUNxUSxLQUFELEVBQVc7QUFDckMsa0JBQU1nRixRQUFRLEdBQUdqQyxpR0FBQSxDQUNmLFdBRGUsRUFDRjZCLFdBREUsRUFDVzVFLEtBQUssQ0FBQ00sTUFEakIsRUFDeUJOLEtBQUssQ0FBQ2xELElBRC9CLENBQWpCLENBRHFDLENBSXJDOztBQUNBa0ksY0FBQUEsUUFBUSxDQUFDdlUsRUFBVCxhQUFpQnFVLFFBQVEsQ0FBQ0MsS0FBRCxDQUF6QjtBQUNBQSxjQUFBQSxLQUFLLElBQUksQ0FBVDtBQUNELGFBUEQ7QUFTQTs7QUFDQSxpQkFBU0UsQ0FBVCxHQUFhLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxJQUFJLENBQTVCLEVBQStCO0FBQ3ZCQyxjQUFBQSxXQUR1QixHQUNUMVYsUUFBUSxDQUFDZ1UsYUFBVCxDQUF1QixLQUF2QixDQURTO0FBRXZCMkIsY0FBQUEsV0FGdUIsR0FFVHBDLDRGQUFBLENBQTRDLE1BQTVDLEVBQW9ELGNBQXBELEVBQW9FbUMsV0FBcEUsQ0FGUztBQUd2QkUsY0FBQUEsa0JBSHVCLEdBR0ZyQyw0RkFBQSxDQUE0QyxNQUE1QyxFQUFvRCxxQkFBcEQsRUFBMkVtQyxXQUEzRSxDQUhFO0FBSXZCRyxjQUFBQSxZQUp1QixHQUlSLENBQUMsU0FBRCxFQUFZLEdBQVosRUFBaUIsR0FBakIsRUFBc0IsR0FBdEIsRUFBMkIsR0FBM0IsQ0FKUTs7QUFNN0Isa0JBQUlKLENBQUMsS0FBSyxDQUFWLEVBQWE7QUFDWEMsZ0JBQUFBLFdBQVcsQ0FBQ2hWLFNBQVosR0FBd0IscUJBQXhCO0FBQ0FnVixnQkFBQUEsV0FBVyxDQUFDelUsRUFBWixHQUFpQixpQkFBakI7QUFDQTBVLGdCQUFBQSxXQUFXLENBQUNuVCxXQUFaLGFBQTZCcVMsWUFBWSxDQUFDaEYsT0FBYixDQUFxQkMsV0FBbEQsZUFBa0UrRixZQUFZLENBQUNKLENBQUQsQ0FBOUU7QUFDQUcsZ0JBQUFBLGtCQUFrQixDQUFDVixTQUFuQixHQUErQkwsWUFBWSxDQUFDaEYsT0FBYixDQUFxQkUsa0JBQXBEO0FBQ0QsZUFMRCxNQUtPO0FBQ0NhLGdCQUFBQSxRQURELEdBQ1k1USxRQUFRLENBQUNnVSxhQUFULENBQXVCLE1BQXZCLENBRFo7QUFFTHBELGdCQUFBQSxRQUFRLENBQUNsUSxTQUFULEdBQXFCLGtCQUFyQjtBQUNBa1EsZ0JBQUFBLFFBQVEsQ0FBQ3BPLFdBQVQsdUJBQW9DcVMsWUFBWSxDQUFDdEUsTUFBYixDQUFvQmtGLENBQUMsR0FBRyxDQUF4QixFQUEyQjdFLFFBQS9EO0FBQ0E4RSxnQkFBQUEsV0FBVyxDQUFDdEIsV0FBWixDQUF3QnhELFFBQXhCO0FBRUE4RSxnQkFBQUEsV0FBVyxDQUFDaFYsU0FBWixHQUF3QixjQUF4QjtBQUNBZ1YsZ0JBQUFBLFdBQVcsQ0FBQ3pVLEVBQVosYUFBb0I0VSxZQUFZLENBQUNKLENBQUQsQ0FBaEM7QUFDQUUsZ0JBQUFBLFdBQVcsQ0FBQ25ULFdBQVosYUFBNkJxUyxZQUFZLENBQUN0RSxNQUFiLENBQW9Ca0YsQ0FBQyxHQUFHLENBQXhCLEVBQTJCbkksSUFBeEQsZUFBaUV1SSxZQUFZLENBQUNKLENBQUQsQ0FBN0U7QUFDQUcsZ0JBQUFBLGtCQUFrQixDQUFDVixTQUFuQixHQUErQkwsWUFBWSxDQUFDdEUsTUFBYixDQUFvQmtGLENBQUMsR0FBRyxDQUF4QixFQUEyQnpGLFdBQTFEO0FBQ0Q7O0FBRURoTixjQUFBQSxjQUFjLENBQUNvUixXQUFmLENBQTJCc0IsV0FBM0I7QUFDRDs7QUFFS0ksWUFBQUEsbUJBdEVxQixHQXNFQzlWLFFBQVEsQ0FBQ1MsYUFBVCxDQUF1Qix3QkFBdkIsQ0F0RUQ7QUF1RXJCd0MsWUFBQUEsWUF2RXFCLEdBdUVOc1EsNEZBQUEsQ0FBNEMsS0FBNUMsRUFBbUQsZUFBbkQsRUFBb0V1QyxtQkFBcEUsQ0F2RU07O0FBeUUzQixpQkFBU0wsRUFBVCxHQUFhLENBQWIsRUFBZ0JBLEVBQUMsR0FBRyxDQUFKLElBQVNBLEVBQUMsR0FBR1osWUFBWSxDQUFDcEQsSUFBYixDQUFrQm5KLE1BQS9DLEVBQXVEbU4sRUFBQyxJQUFJLENBQTVELEVBQStEO0FBQ3ZETSxjQUFBQSxXQUR1RCxHQUN6Q3hDLDRGQUFBLENBQTRDLE1BQTVDLEVBQW9ELGNBQXBELEVBQW9FdFEsWUFBcEUsQ0FEeUM7QUFFN0Q4UyxjQUFBQSxXQUFXLENBQUN2VCxXQUFaLGFBQTZCcVMsWUFBWSxDQUFDcEQsSUFBYixDQUFrQmdFLEVBQWxCLENBQTdCO0FBQ0Q7O0FBNUUwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFwQjlQLG9CQUFvQjtBQUFBO0FBQUE7QUFBQSxHQUExQjs7QUErRUEsaUVBQWVBLG9CQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7O0FBRUEsSUFBTUUsa0JBQWtCO0FBQUEsc0xBQUcsaUJBQU9vQixlQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNqQnNLLFlBQUFBLEtBRGlCLEdBQ1B0SyxlQURPLENBQ2pCc0ssS0FEaUI7QUFFbkJsTixZQUFBQSxjQUZtQixHQUVGckUsUUFBUSxDQUFDUyxhQUFULENBQXVCLGtCQUF2QixDQUZFO0FBR25CeUIsWUFBQUEsUUFIbUIsR0FHUmxDLFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QixZQUF2QixDQUhRO0FBSW5CdUIsWUFBQUEsbUJBSm1CLEdBSUd1Uiw0RkFBQSxDQUE0QyxLQUE1QyxFQUFtRCx1QkFBbkQsRUFBNEVsUCxjQUE1RSxDQUpIO0FBTXpCa04sWUFBQUEsS0FBSyxDQUFDcFIsT0FBTixDQUFjLFVBQUM2VixJQUFELEVBQVU7QUFDdEIsa0JBQUlBLElBQUksQ0FBQ0MsR0FBTCxLQUFhLENBQWpCLEVBQW9CO0FBQ2xCLG9CQUFNQyxtQkFBbUIsR0FBRzNDLGlHQUFBLENBQzFCLEtBRDBCLEVBQ25CLDRCQURtQixvQkFDc0J0TSxlQUFlLENBQUNxRyxJQUR0QyxHQUM4Q3RMLG1CQUQ5QyxDQUE1QjtBQUdBRSxnQkFBQUEsUUFBUSxDQUFDTSxXQUFULHFCQUFrQ3lFLGVBQWUsQ0FBQ3FHLElBQWxEO0FBQ0Esb0JBQU02SSxhQUFhLHlFQUFrRWxQLGVBQWUsQ0FBQ2hHLEVBQWxGLGNBQXdGK1UsSUFBSSxDQUFDQyxHQUE3RixTQUFuQjtBQUNBMUMsZ0JBQUFBLGlHQUFBLENBQWlELFlBQWpELEVBQStEMkMsbUJBQS9ELEVBQW9GQyxhQUFwRixFQUFtRyxjQUFuRztBQUNELGVBUEQsTUFPTztBQUNMLG9CQUFNQyxjQUFjLEdBQUc3QyxpR0FBQSxDQUFpRCxLQUFqRCxFQUF3RCxzQkFBeEQsRUFBZ0Z5QyxJQUFJLENBQUMxSSxJQUFyRixFQUEyRnRMLG1CQUEzRixDQUF2QjtBQUNBLG9CQUFNOFEsUUFBUSx5RUFBa0U3TCxlQUFlLENBQUNoRyxFQUFsRixjQUF3RitVLElBQUksQ0FBQ0MsR0FBN0YsU0FBZDtBQUNBMUMsZ0JBQUFBLGlHQUFBLENBQWlELFlBQWpELEVBQStENkMsY0FBL0QsRUFBK0V0RCxRQUEvRSxFQUF5RmtELElBQUksQ0FBQzFJLElBQTlGO0FBQ0Q7QUFDRixhQWJEOztBQU55QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFsQnpILGtCQUFrQjtBQUFBO0FBQUE7QUFBQSxHQUF4Qjs7QUFzQkEsaUVBQWVBLGtCQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBT0E7O0FBRUEsSUFBTUQsa0JBQWtCO0FBQUEsc0xBQUcsaUJBQU9pUCxZQUFQLEVBQXFCM04sYUFBckIsRUFBb0NGLGFBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN6QjJOLFlBQUFBLG1FQUFtQixDQUFDRSxZQUFELEVBQWUsT0FBZixDQUFuQjtBQUVNNEIsWUFBQUEsYUFIbUIsR0FHSHpXLFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QiwwQkFBdkIsQ0FIRztBQUt6QjRWLFlBQUFBLGtFQUFrQixDQUFDSSxhQUFELEVBQWdCLFVBQWhCLEVBQTRCdlAsYUFBYSxDQUFDK0gsT0FBMUMsQ0FBbEI7QUFDQW9ILFlBQUFBLGtFQUFrQixDQUFDSSxhQUFELEVBQWdCLFdBQWhCLEVBQTZCdlAsYUFBYSxDQUFDZ0ksUUFBM0MsQ0FBbEI7QUFDQTs7QUFDTXhELFlBQUFBLElBUm1CLGFBUVR4RSxhQUFhLENBQUN3RSxJQUFkLENBQW1CLENBQW5CLElBQXdCeEUsYUFBYSxDQUFDd0UsSUFBZCxDQUFtQnhLLFNBQW5CLENBQTZCLENBQTdCLEVBQWdDMEssV0FBaEMsRUFSZjtBQVN6QjJLLFlBQUFBLGtFQUFrQixDQUFDRSxhQUFELEVBQWdCL0ssSUFBaEIsQ0FBbEI7QUFFQTs7QUFFTWdMLFlBQUFBLHNCQWJtQixHQWFNMVcsUUFBUSxDQUFDUyxhQUFULENBQXVCLHFCQUF2QixDQWJOO0FBY25Ca1csWUFBQUEsMEJBZG1CLEdBY1UzVyxRQUFRLENBQUNTLGFBQVQsQ0FBdUIseUJBQXZCLENBZFY7QUFlbkJtVyxZQUFBQSx1QkFmbUIsR0FlTzVXLFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QixzQkFBdkIsQ0FmUDtBQWlCbkJvVyxZQUFBQSxpQkFqQm1CLEdBaUJDQyxJQUFJLENBQUNDLEtBQUwsQ0FBVzdQLGFBQWEsQ0FBQ2lJLGNBQWQsQ0FBNkI2SCxVQUE3QixDQUF3Q0MsVUFBbkQsQ0FqQkQ7QUFrQm5CQyxZQUFBQSxxQkFsQm1CLEdBa0JLSixJQUFJLENBQUNDLEtBQUwsQ0FBVzdQLGFBQWEsQ0FBQ2lJLGNBQWQsQ0FBNkJnSSxjQUE3QixDQUE0Q0YsVUFBdkQsQ0FsQkw7QUFtQm5CRyxZQUFBQSxrQkFuQm1CLEdBbUJFTixJQUFJLENBQUNDLEtBQUwsQ0FBVzdQLGFBQWEsQ0FBQ2lJLGNBQWQsQ0FBNkJrSSxXQUE3QixDQUF5Q0osVUFBcEQsQ0FuQkY7QUFxQnpCUCxZQUFBQSxzQkFBc0IsQ0FBQ3JWLEtBQXZCLENBQTZCaVcsZUFBN0IsYUFBa0RULGlCQUFsRDtBQUNBRixZQUFBQSwwQkFBMEIsQ0FBQ3RWLEtBQTNCLENBQWlDaVcsZUFBakMsYUFBc0RKLHFCQUFxQixHQUFHTCxpQkFBOUU7QUFDQUQsWUFBQUEsdUJBQXVCLENBQUN2VixLQUF4QixDQUE4QmlXLGVBQTlCLEdBQWdELFVBQWhEO0FBQ01DLFlBQUFBLGVBeEJtQixHQXdCRHZYLFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QixvQkFBdkIsQ0F4QkM7QUF5QnpCOFcsWUFBQUEsZUFBZSxDQUFDL1UsV0FBaEIsR0FBOEJzVSxJQUFJLENBQUNDLEtBQUwsQ0FBVzdQLGFBQWEsQ0FBQ2lJLGNBQWQsQ0FBNkJDLFdBQTdCLENBQXlDaEMsS0FBcEQsQ0FBOUI7QUFFTW9LLFlBQUFBLGVBM0JtQixHQTJCRFYsSUFBSSxDQUFDQyxLQUFMLENBQVc3UCxhQUFhLENBQUNpSSxjQUFkLENBQTZCNkgsVUFBN0IsQ0FBd0M1SixLQUFuRCxDQTNCQztBQTRCbkJxSyxZQUFBQSxtQkE1Qm1CLEdBNEJHWCxJQUFJLENBQUNDLEtBQUwsQ0FBVzdQLGFBQWEsQ0FBQ2lJLGNBQWQsQ0FBNkJnSSxjQUE3QixDQUE0Qy9KLEtBQXZELENBNUJIO0FBNkJuQnNLLFlBQUFBLGdCQTdCbUIsR0E2QkFaLElBQUksQ0FBQ0MsS0FBTCxDQUFXN1AsYUFBYSxDQUFDaUksY0FBZCxDQUE2QmtJLFdBQTdCLENBQXlDakssS0FBcEQsQ0E3QkE7QUErQnpCa0osWUFBQUEsaUVBQWlCLENBQUMsVUFBRCxFQUFhbUIsbUJBQWIsRUFBa0NQLHFCQUFsQyxDQUFqQjtBQUNBWixZQUFBQSxpRUFBaUIsQ0FBQyxPQUFELEVBQVVvQixnQkFBVixFQUE0Qk4sa0JBQTVCLENBQWpCO0FBQ0FkLFlBQUFBLGlFQUFpQixDQUFDLE1BQUQsRUFBU2tCLGVBQVQsRUFBMEJYLGlCQUExQixDQUFqQjtBQUVBOztBQUNROUUsWUFBQUEsUUFwQ2lCLEdBb0NKN0ssYUFwQ0ksQ0FvQ2pCNkssUUFwQ2lCO0FBQUE7QUFBQSxtQkFxQ0ZXLDBFQUFBLENBQXFCMUwsYUFBckIsQ0FyQ0U7O0FBQUE7QUFxQ25CeUwsWUFBQUEsUUFyQ21CO0FBc0NuQm1GLFlBQUFBLGtCQXRDbUIsR0FzQ0U1WCxRQUFRLENBQUNTLGFBQVQsQ0FBdUIsdUJBQXZCLENBdENGO0FBdUNuQmdELFlBQUFBLGlCQXZDbUIsR0F1Q0M4UCw0RkFBQSxDQUE0QyxLQUE1QyxFQUFtRCxxQkFBbkQsRUFBMEVxRSxrQkFBMUUsQ0F2Q0Q7QUF5Q3pCN0YsWUFBQUEsUUFBUSxDQUFDNVIsT0FBVCxDQUFpQixVQUFDMFgsT0FBRCxFQUFhO0FBQzVCLGtCQUFNQyxnQkFBZ0IsR0FBR3ZFLDRGQUFBLENBQTRDLEtBQTVDLEVBQW1ELG9CQUFuRCxFQUF5RTlQLGlCQUF6RSxDQUF6QjtBQUVBb1UsY0FBQUEsT0FBTyxDQUFDMVgsT0FBUixDQUFnQixVQUFDd1MsTUFBRCxFQUFZO0FBQzFCLG9CQUFNb0YsSUFBSSxHQUFHLElBQUlyRiw4REFBSixDQUFhQyxNQUFiLEVBQXFCRixRQUFyQixFQUErQnpMLGFBQS9CLENBQWI7QUFDQSxvQkFBTWdSLFFBQVEsR0FBR0QsSUFBSSxDQUFDRSxXQUFMLENBQWlCeEYsUUFBakIsQ0FBakI7O0FBQ0Esb0JBQUl1RixRQUFRLElBQUksQ0FBQ0EsUUFBUSxDQUFDaE0sSUFBVCxDQUFjekosUUFBZCxDQUF1QixTQUF2QixDQUFiLElBQWtELENBQUN5VixRQUFRLENBQUNoTSxJQUFULENBQWN6SixRQUFkLENBQXVCLFlBQXZCLENBQXZELEVBQTZGO0FBQzNGLHNCQUFNMlYsc0JBQXNCLEdBQUdsWSxRQUFRLENBQUNnVSxhQUFULENBQXVCLEtBQXZCLENBQS9CO0FBQ0FrRSxrQkFBQUEsc0JBQXNCLENBQUN4WCxTQUF2QixHQUFtQywwQkFBbkM7QUFDQW9YLGtCQUFBQSxnQkFBZ0IsQ0FBQzFELFdBQWpCLENBQTZCOEQsc0JBQTdCO0FBRUEsc0JBQU1DLFFBQVEsR0FBRzVFLDRGQUFBLENBQTRDLEtBQTVDLEVBQW1ELFdBQW5ELEVBQWdFMkUsc0JBQWhFLENBQWpCO0FBRUEzRSxrQkFBQUEsaUdBQUEsQ0FBaUQsVUFBakQsRUFBNkQ0RSxRQUE3RCxFQUF1RUgsUUFBUSxDQUFDbEYsUUFBaEYsWUFBNkZILE1BQTdGO0FBRUEsc0JBQU15RixvQkFBb0IsR0FBRzdFLDRGQUFBLENBQTRDLEtBQTVDLEVBQW1ELHdCQUFuRCxFQUE2RTRFLFFBQTdFLENBQTdCO0FBRUEsc0JBQU1FLFdBQVcsR0FBRzlFLDRGQUFBLENBQTRDLE1BQTVDLEVBQW9ELFdBQXBELEVBQWlFNkUsb0JBQWpFLENBQXBCO0FBQ0FDLGtCQUFBQSxXQUFXLENBQUM3VixXQUFaLEdBQTBCd1YsUUFBUSxDQUFDMUssSUFBbkM7QUFDQSxzQkFBTWdMLGtCQUFrQixHQUFHL0UsNEZBQUEsQ0FBNEMsTUFBNUMsRUFBb0Qsa0JBQXBELEVBQXdFNkUsb0JBQXhFLENBQTNCO0FBQ0FFLGtCQUFBQSxrQkFBa0IsQ0FBQ3BELFNBQW5CLEdBQStCOEMsUUFBUSxDQUFDaEksV0FBeEM7QUFDQSxzQkFBTXVJLFFBQVEsR0FBR2hGLDRGQUFBLENBQTRDLEtBQTVDLEVBQW1ELFdBQW5ELEVBQWdFNkUsb0JBQWhFLENBQWpCO0FBQ0Esc0JBQU1JLFNBQVMsR0FBR2pGLDRGQUFBLENBQTRDLE1BQTVDLEVBQW9ELFlBQXBELEVBQWtFZ0YsUUFBbEUsQ0FBbEI7QUFDQUMsa0JBQUFBLFNBQVMsQ0FBQ2hXLFdBQVYsR0FBd0IsUUFBeEI7QUFDQSxzQkFBTWlXLFVBQVUsR0FBR2xGLDRGQUFBLENBQTRDLE1BQTVDLEVBQW9ELGFBQXBELEVBQW1FZ0YsUUFBbkUsQ0FBbkI7QUFDQUUsa0JBQUFBLFVBQVUsQ0FBQ2pXLFdBQVgsR0FBeUJ3VixRQUFRLENBQUMvRSxJQUFsQztBQUVBOztBQUNBLHNCQUFRSSxjQUFSLEdBQTJCMkUsUUFBM0IsQ0FBUTNFLGNBQVI7QUFDQTlILGtCQUFBQSxPQUFPLENBQUNtTixPQUFSLENBQWdCckYsY0FBaEIsRUFDR3NGLElBREgsQ0FDUSxVQUFDQyxLQUFELEVBQVc7QUFDZix3QkFBTUMsdUJBQXVCLEdBQUd0Riw0RkFBQSxDQUE0QyxLQUE1QyxFQUFtRCwyQkFBbkQsRUFBZ0YyRSxzQkFBaEYsQ0FBaEM7QUFDQVUsb0JBQUFBLEtBQUssQ0FBQ3pZLE9BQU4sQ0FBYyxVQUFDMlksYUFBRCxFQUFtQjtBQUMvQiwwQkFBTUMsb0JBQW9CLEdBQUd4Riw0RkFBQSxDQUE0QyxLQUE1QyxFQUFtRCxnQkFBbkQsRUFBcUVzRix1QkFBckUsQ0FBN0I7QUFDQXRGLHNCQUFBQSxpR0FBQSxDQUNFLG9CQURGLEVBQ3dCd0Ysb0JBRHhCLEVBQzhDRCxhQUFhLENBQUNoRyxRQUQ1RCxZQUN5RWdHLGFBQWEsQ0FBQ3hMLElBRHZGO0FBSUEsMEJBQU0wTCw2QkFBNkIsR0FBR3pGLDRGQUFBLENBQTRDLEtBQTVDLEVBQW1ELGtDQUFuRCxFQUF1RndGLG9CQUF2RixDQUF0QztBQUVBLDBCQUFNRSxpQkFBaUIsR0FBRzFGLDRGQUFBLENBQTRDLE1BQTVDLEVBQW9ELHFCQUFwRCxFQUEyRXlGLDZCQUEzRSxDQUExQjtBQUNBQyxzQkFBQUEsaUJBQWlCLENBQUN6VyxXQUFsQixHQUFnQ3NXLGFBQWEsQ0FBQ3hMLElBQTlDO0FBQ0EsMEJBQU00TCxpQkFBaUIsR0FBRzNGLDRGQUFBLENBQTRDLEtBQTVDLEVBQW1ELHFCQUFuRCxFQUEwRXlGLDZCQUExRSxDQUExQjtBQUNBLDBCQUFNRyxzQkFBc0IsR0FBRzVGLDRGQUFBLENBQTRDLE1BQTVDLEVBQW9ELDJCQUFwRCxFQUFpRjJGLGlCQUFqRixDQUEvQjtBQUNBQyxzQkFBQUEsc0JBQXNCLENBQUMzVyxXQUF2QixHQUFxQyxRQUFyQztBQUNBLDBCQUFNNFcsbUJBQW1CLEdBQUc3Riw0RkFBQSxDQUE0QyxNQUE1QyxFQUFvRCx1QkFBcEQsRUFBNkUyRixpQkFBN0UsQ0FBNUI7QUFDQUUsc0JBQUFBLG1CQUFtQixDQUFDNVcsV0FBcEIsR0FBa0NzVyxhQUFhLENBQUM3RixJQUFoRDtBQUNELHFCQWZEO0FBZ0JELG1CQW5CSDtBQW9CRDtBQUNGLGVBL0NEO0FBZ0RELGFBbkREO0FBb0RBOztBQUNNb0csWUFBQUEsbUJBOUZtQixHQThGR3JaLFFBQVEsQ0FBQ1MsYUFBVCxDQUF1Qix3QkFBdkIsQ0E5Rkg7QUErRm5CNlksWUFBQUEsbUJBL0ZtQixHQStGRy9GLDRGQUFBLENBQTRDLEtBQTVDLEVBQW1ELHdCQUFuRCxFQUE2RThGLG1CQUE3RSxDQS9GSDtBQWdHbkJFLFlBQUFBLGdCQWhHbUIsR0FnR0FyUyxhQUFhLENBQUMrSyxZQWhHZDtBQWlHekJ1RSxZQUFBQSxrRUFBa0IsQ0FBQzhDLG1CQUFELEVBQXNCQyxnQkFBdEIsRUFBd0N2UyxhQUF4QyxDQUFsQjtBQUVNd1MsWUFBQUEsb0JBbkdtQixHQW1HSXhaLFFBQVEsQ0FBQ1MsYUFBVCxDQUF1Qix5QkFBdkIsQ0FuR0o7QUFvR25CZ1osWUFBQUEsb0JBcEdtQixHQW9HSWxHLDRGQUFBLENBQTRDLEtBQTVDLEVBQW1ELHlCQUFuRCxFQUE4RWlHLG9CQUE5RSxDQXBHSjtBQXFHbkJFLFlBQUFBLGlCQXJHbUIsR0FxR0N4UyxhQUFhLENBQUNpTCxhQXJHZjtBQXNHekJxRSxZQUFBQSxrRUFBa0IsQ0FBQ2lELG9CQUFELEVBQXVCQyxpQkFBdkIsRUFBMEMxUyxhQUExQyxDQUFsQjs7QUF0R3lCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWxCcEIsa0JBQWtCO0FBQUE7QUFBQTtBQUFBLEdBQXhCOztBQXlHQSxpRUFBZUEsa0JBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25IQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLHVQQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNiO0FBQ00rTixVQUFBQSxpQkFGTyxHQUVhSCw4RUFBQSxFQUZiO0FBSVBvRyxVQUFBQSxXQUpPLEdBSU87QUFDbEI5SyxZQUFBQSxJQUFJLEVBQUUsQ0FBQyxTQUFELEVBQVksVUFBWixFQUF3QixRQUF4QjtBQURZLFdBSlA7QUFRUCtLLFVBQUFBLFdBUk8sR0FRTztBQUNsQjlOLFlBQUFBLElBQUksRUFBRSxDQUFDLE1BQUQsRUFBUyxVQUFULEVBQXFCLFNBQXJCLEVBQWdDLE1BQWhDLEVBQXdDLFVBQXhDLEVBQW9ELFNBQXBEO0FBRFksV0FSUDtBQVdQK04sVUFBQUEsaUJBWE8sR0FXYTtBQUN4QnpOLFlBQUFBLFVBQVUsRUFBRSxDQUFDLEtBQUQsRUFBUSxRQUFSLEVBQWtCLE1BQWxCO0FBRFksV0FYYjtBQWNQME4sVUFBQUEsaUJBZE8sR0FjYSxDQUFDRixXQUFELEVBQWNDLGlCQUFkLENBZGI7QUFnQlBFLFVBQUFBLFlBaEJPLEdBZ0JRLElBQUl4RyxnRUFBSixDQUFvQixNQUFwQixFQUE0Qm9HLFdBQVcsQ0FBQzlLLElBQXhDLENBaEJSO0FBaUJia0wsVUFBQUEsWUFBWSxDQUFDQyxjQUFiLENBQTRCdEcsaUJBQTVCLEVBQStDLGVBQS9DO0FBRUFvRyxVQUFBQSxpQkFBaUIsQ0FBQzVaLE9BQWxCLENBQTBCLFVBQUMrWixhQUFELEVBQW1CO0FBQzNDLGdCQUFNekcsWUFBWSxHQUFHMEcsTUFBTSxDQUFDQyxJQUFQLENBQVlGLGFBQVosRUFBMkIsQ0FBM0IsQ0FBckI7QUFDQSxnQkFBTXhHLFlBQVksR0FBR3lHLE1BQU0sQ0FBQ0UsTUFBUCxDQUFjSCxhQUFkLEVBQTZCLENBQTdCLENBQXJCO0FBQ0EsZ0JBQU1yRyxRQUFRLEdBQUcsSUFBSUwsZ0VBQUosQ0FBb0JDLFlBQXBCLEVBQWtDQyxZQUFsQyxDQUFqQjtBQUNBRyxZQUFBQSxRQUFRLENBQUNvRyxjQUFULENBQXdCdEcsaUJBQXhCLEVBQTJDLGNBQTNDO0FBQ0QsV0FMRDtBQU9BOztBQUNNMUosVUFBQUEsYUEzQk8sR0EyQlNqSyxRQUFRLENBQUNTLGFBQVQsQ0FBdUIsaUJBQXZCLENBM0JUO0FBNEJiOFMsVUFBQUEsNEZBQUEsQ0FBNEMsS0FBNUMsRUFBbUQsUUFBbkQsRUFBNkR0SixhQUE3RDtBQUNNNUMsVUFBQUEsZ0JBN0JPLEdBNkJZa00sNEZBQUEsQ0FBNEMsS0FBNUMsRUFBbUQsbUJBQW5ELEVBQXdFdEosYUFBeEUsQ0E3Qlo7QUFBQTtBQUFBLGlCQThCY2pFLG9GQUFxQixFQTlCbkM7O0FBQUE7QUE4QlBvRixVQUFBQSxZQTlCTztBQStCUGtQLFVBQUFBLGlCQS9CTyxHQStCYUgsTUFBTSxDQUFDRSxNQUFQLENBQWNqUCxZQUFkLENBL0JiO0FBZ0Nia1AsVUFBQUEsaUJBQWlCLENBQUNuYSxPQUFsQixDQUEwQixVQUFDNEssUUFBRCxFQUFjO0FBQ3RDRixZQUFBQSx1RUFBdUIsQ0FBQ0UsUUFBRCxFQUFXMUQsZ0JBQVgsQ0FBdkI7QUFDRCxXQUZEO0FBSUE7O0FBQ01xRixVQUFBQSxlQXJDTyxHQXFDVzFNLFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QixtQkFBdkIsQ0FyQ1g7QUFzQ1BrTSxVQUFBQSxpQkF0Q08sR0FzQ2E0Ryw0RkFBQSxDQUN4QixLQUR3QixFQUNqQixxQkFEaUIsRUFDTTdHLGVBRE4sQ0F0Q2I7QUF5Q2I0TixVQUFBQSxpQkFBaUIsQ0FBQ25hLE9BQWxCLENBQTBCLFVBQUM0SyxRQUFELEVBQWM7QUFDdEMsZ0JBQU1uSSxZQUFZLEdBQUdtSSxRQUFRLENBQUN1QyxJQUE5QjtBQUNBLGdCQUFNdkcsVUFBVSxHQUFHZ0UsUUFBUSxDQUFDOUosRUFBNUI7QUFDQSxnQkFBTXNaLHVCQUF1QixHQUFHaEgsNEZBQUEsQ0FDOUIsS0FEOEIsRUFDdkIsNEJBRHVCLEVBQ081RyxpQkFEUCxDQUFoQztBQUdBNE4sWUFBQUEsdUJBQXVCLENBQUNDLFFBQXhCLEdBQW1DLElBQW5DO0FBQ0EsZ0JBQU1uTixnQkFBZ0IsR0FBR2tHLDRGQUFBLENBQ3ZCLE1BRHVCLEVBQ2Ysb0JBRGUsRUFDT2dILHVCQURQLENBQXpCO0FBR0FsTixZQUFBQSxnQkFBZ0IsQ0FBQzdLLFdBQWpCLEdBQStCSSxZQUEvQjtBQUNBeUssWUFBQUEsZ0JBQWdCLENBQUM1QyxPQUFqQixDQUF5QjFELFVBQXpCLEdBQXNDQSxVQUF0QztBQUNBc0csWUFBQUEsZ0JBQWdCLENBQUNwTSxFQUFqQixHQUFzQjJCLFlBQXRCO0FBQ0QsV0FiRDs7QUF6Q2E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBOztBQUVBLElBQU02WCxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxDQUFELEVBQU87QUFDdkIsTUFBTTlGLE1BQU0sR0FBRyxFQUFmO0FBQ0E4RixFQUFBQSxDQUFDLENBQUNOLElBQUYsR0FBU2phLE9BQVQsQ0FBaUIsVUFBQzRYLElBQUQsRUFBVTtBQUFFbkQsSUFBQUEsTUFBTSxDQUFDbUQsSUFBSSxDQUFDOUcsT0FBTCxDQUFhLElBQWIsRUFBbUIsRUFBbkIsQ0FBRCxDQUFOLEdBQWlDeUosQ0FBQyxDQUFDM0MsSUFBRCxDQUFsQztBQUEyQyxHQUF4RTtBQUNBLFNBQU9uRCxNQUFQO0FBQ0QsQ0FKRDs7QUFNQSxJQUFNQSxNQUFNLEdBQUc2RixTQUFTLENBQUNFLG1FQUFELENBQXhCOztBQUVBLElBQU1oRyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNFLFlBQUQsRUFBZWdHLGNBQWYsRUFBa0M7QUFDNUQsTUFBTUMsU0FBUyxHQUFHOWEsUUFBUSxDQUFDUyxhQUFULFlBQTJCb2EsY0FBM0IsZ0JBQWxCO0FBQ0FDLEVBQUFBLFNBQVMsQ0FBQ3paLEtBQVYsQ0FBZ0IwWixVQUFoQix1RkFBMEdsRyxZQUFZLENBQUM1VCxFQUF2SDtBQUNBNlosRUFBQUEsU0FBUyxDQUFDelosS0FBVixDQUFnQjJaLGNBQWhCLEdBQWlDLE9BQWpDO0FBRUEsTUFBTW5ZLGFBQWEsR0FBR2lZLFNBQVMsQ0FBQ3JhLGFBQVYsQ0FBd0IsaUJBQXhCLENBQXRCO0FBQ0FvQyxFQUFBQSxhQUFhLENBQUNMLFdBQWQsR0FBNEJxUyxZQUFZLENBQUM3RCxLQUF6QztBQUVBLE1BQU1wTyxZQUFZLEdBQUdrWSxTQUFTLENBQUNyYSxhQUFWLENBQXdCLGdCQUF4QixDQUFyQjtBQUNBbUMsRUFBQUEsWUFBWSxDQUFDSixXQUFiLEdBQTJCcVMsWUFBWSxDQUFDdkgsSUFBeEM7QUFDRCxDQVZEO0FBWUE7OztBQUNBLElBQU0rSSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNJLGFBQUQsRUFBZ0J3RSxRQUFoQixFQUEwQkMsUUFBMUIsRUFBdUM7QUFDaEUsTUFBTUMsWUFBWSxHQUFHbmIsUUFBUSxDQUFDZ1UsYUFBVCxDQUF1QixLQUF2QixDQUFyQjtBQUNBLE1BQU1vSCxLQUFLLEdBQUdwYixRQUFRLENBQUNnVSxhQUFULENBQXVCLE1BQXZCLENBQWQ7QUFDQSxNQUFNcUgsU0FBUyxHQUFHcmIsUUFBUSxDQUFDZ1UsYUFBVCxDQUF1QixNQUF2QixDQUFsQjtBQUVBOztBQUNBLE1BQU1zSCxhQUFhLEdBQUdMLFFBQVEsQ0FBQ2hLLE9BQVQsQ0FBaUIsR0FBakIsRUFBc0IsR0FBdEIsRUFBMkJyRixXQUEzQixFQUF0QjtBQUVBdVAsRUFBQUEsWUFBWSxDQUFDemEsU0FBYixHQUF5QjRhLGFBQXpCO0FBQ0FGLEVBQUFBLEtBQUssQ0FBQ25hLEVBQU4sYUFBY3FhLGFBQWQ7QUFDQUYsRUFBQUEsS0FBSyxDQUFDMWEsU0FBTixHQUFrQixPQUFsQjtBQUNBMmEsRUFBQUEsU0FBUyxDQUFDM2EsU0FBVixhQUF5QjRhLGFBQXpCO0FBQ0FGLEVBQUFBLEtBQUssQ0FBQzVZLFdBQU4sR0FBb0J5WSxRQUFwQjtBQUNBSSxFQUFBQSxTQUFTLENBQUM3WSxXQUFWLGFBQTJCMFksUUFBM0I7QUFFQUMsRUFBQUEsWUFBWSxDQUFDL0csV0FBYixDQUF5QmdILEtBQXpCO0FBQWlDRCxFQUFBQSxZQUFZLENBQUMvRyxXQUFiLENBQXlCaUgsU0FBekI7QUFDakM1RSxFQUFBQSxhQUFhLENBQUNyQyxXQUFkLENBQTBCK0csWUFBMUI7QUFDRCxDQWpCRDs7QUFtQkEsSUFBTTVFLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0UsYUFBRCxFQUFnQi9LLElBQWhCLEVBQXlCO0FBQ2xELE1BQU02UCxnQkFBZ0IsR0FBR3ZiLFFBQVEsQ0FBQ2dVLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBekI7QUFDQXVILEVBQUFBLGdCQUFnQixDQUFDN2EsU0FBakIsR0FBNkIsV0FBN0I7QUFDQSxNQUFNOGEsUUFBUSxHQUFHeGIsUUFBUSxDQUFDZ1UsYUFBVCxDQUF1QixNQUF2QixDQUFqQjtBQUNBd0gsRUFBQUEsUUFBUSxDQUFDOWEsU0FBVCxHQUFxQixpQkFBckI7QUFDQThhLEVBQUFBLFFBQVEsQ0FBQ2haLFdBQVQsR0FBdUJrSixJQUF2QjtBQUNBLE1BQU0rUCxRQUFRLEdBQUd6YixRQUFRLENBQUNnVSxhQUFULENBQXVCLEtBQXZCLENBQWpCO0FBQ0F5SCxFQUFBQSxRQUFRLENBQUMvYSxTQUFULEdBQXFCLCtCQUFyQjtBQUNBK2EsRUFBQUEsUUFBUSxDQUFDakgsR0FBVCxhQUFrQkksTUFBTSxXQUFJbEosSUFBSixVQUF4QjtBQUNBK1AsRUFBQUEsUUFBUSxDQUFDaEgsR0FBVCxhQUFrQi9JLElBQWxCO0FBQ0E2UCxFQUFBQSxnQkFBZ0IsQ0FBQ25ILFdBQWpCLENBQTZCb0gsUUFBN0I7QUFDQUQsRUFBQUEsZ0JBQWdCLENBQUNuSCxXQUFqQixDQUE2QnFILFFBQTdCO0FBQ0FoRixFQUFBQSxhQUFhLENBQUNyQyxXQUFkLENBQTBCbUgsZ0JBQTFCO0FBQ0QsQ0FiRDs7QUFlQSxJQUFNakYsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDb0YsVUFBRCxFQUFhQyxXQUFiLEVBQTBCQyxnQkFBMUIsRUFBK0M7QUFDdkUsTUFBTUMsZUFBZSxHQUFHN2IsUUFBUSxDQUFDUyxhQUFULFlBQTJCaWIsVUFBM0IsdUJBQXhCO0FBRUEsTUFBTUksV0FBVyxHQUFHdkksNEZBQUEsQ0FBNEMsS0FBNUMsRUFBbUQsY0FBbkQsRUFBbUVzSSxlQUFuRSxDQUFwQjtBQUVBLE1BQU1FLGtCQUFrQixHQUFHeEkseUZBQUEsQ0FBeUMsTUFBekMsWUFBb0RtSSxVQUFwRCxhQUF3RUksV0FBeEUsQ0FBM0I7QUFDQSxNQUFNRSx1QkFBdUIsR0FBR3pJLHlGQUFBLENBQXlDLE1BQXpDLFlBQW9EbUksVUFBcEQsa0JBQTZFSSxXQUE3RSxDQUFoQztBQUNBQyxFQUFBQSxrQkFBa0IsQ0FBQ3ZaLFdBQW5CLGFBQW9DbVosV0FBcEM7QUFDQUssRUFBQUEsdUJBQXVCLENBQUN4WixXQUF4QixhQUF5Q29aLGdCQUF6QztBQUNELENBVEQ7O0FBV0EsSUFBTXBGLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ3lGLGVBQUQsRUFBa0JDLFlBQWxCLEVBQWdDbFYsYUFBaEMsRUFBa0Q7QUFDM0VrVixFQUFBQSxZQUFZLENBQUMvYixPQUFiLENBQXFCLFVBQUNnYyxPQUFELEVBQWE7QUFDaEMsUUFBTUMsV0FBVyxHQUFHN0ksNEZBQUEsQ0FBNEMsS0FBNUMsRUFBbUQsY0FBbkQsRUFBbUUwSSxlQUFuRSxDQUFwQjtBQUNBLFFBQU1JLGlCQUFpQixHQUFHRixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVc3TyxJQUFyQztBQUNBLFFBQU1nUCxlQUFlLEdBQUdILE9BQU8sQ0FBQyxDQUFELENBQS9CO0FBQ0EsUUFBTUksbUJBQW1CLHFEQUE4Q3ZWLGFBQTlDLDJCQUE0RXNWLGVBQTVFLFNBQXpCO0FBQ0EvSSxJQUFBQSxpR0FBQSxDQUNFLG9CQURGLEVBQ3dCNkksV0FEeEIsRUFDcUNHLG1CQURyQyxrQkFDbUVELGVBRG5FO0FBSUEsUUFBTUUsWUFBWSxHQUFHakosNEZBQUEsQ0FBNEMsS0FBNUMsRUFBbUQsZUFBbkQsRUFBb0U2SSxXQUFwRSxDQUFyQjtBQUNBLFFBQU1LLHdCQUF3QixHQUFHbEosNEZBQUEsQ0FBNEMsTUFBNUMsRUFBb0QscUJBQXBELEVBQTJFaUosWUFBM0UsQ0FBakM7QUFDQUMsSUFBQUEsd0JBQXdCLENBQUNqYSxXQUF6QixHQUF1QzZaLGlCQUF2QztBQUNBLFFBQU1LLGNBQWMsR0FBR25KLDRGQUFBLENBQTRDLEtBQTVDLEVBQW1ELGlCQUFuRCxFQUFzRWlKLFlBQXRFLENBQXZCO0FBQ0EsUUFBTUcsbUJBQW1CLEdBQUdwSiw0RkFBQSxDQUE0QyxNQUE1QyxFQUFvRCx1QkFBcEQsRUFBNkVtSixjQUE3RSxDQUE1QjtBQUNBQyxJQUFBQSxtQkFBbUIsQ0FBQ25hLFdBQXBCLEdBQWtDLFdBQWxDO0FBQ0EsUUFBTW9hLEtBQUssR0FBR1gsZUFBZSxDQUFDdmIsU0FBaEIsS0FBOEIsd0JBQTlCLEdBQXlELE1BQXpELEdBQWtFLEtBQWhGO0FBQ0EsUUFBTW1jLHdCQUF3QixHQUFHdEosNEZBQUEsQ0FBNEMsTUFBNUMsdUNBQWtGcUosS0FBbEYsR0FBMkZGLGNBQTNGLENBQWpDO0FBQ0FHLElBQUFBLHdCQUF3QixDQUFDcmEsV0FBekIsYUFBMEMyWixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdXLGNBQVgsQ0FBMEJsTCxPQUExQixDQUFrQyxDQUFsQyxDQUExQztBQUNBLFFBQU1tTCxrQkFBa0IsR0FBR3hKLDRGQUFBLENBQTRDLE1BQTVDLEVBQW9ELHNCQUFwRCxFQUE0RWlKLFlBQTVFLENBQTNCO0FBQ0FPLElBQUFBLGtCQUFrQixDQUFDdmEsV0FBbkIsb0JBQTJDMlosT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXYSxPQUF0RDtBQUNELEdBcEJEO0FBcUJELENBdEJEOztBQXdCQSxJQUFNblMsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixDQUFDRSxRQUFELEVBQVcxRCxnQkFBWCxFQUFnQztBQUM5RCxNQUFNNFYsaUJBQWlCLEdBQUcxSiw0RkFBQSxDQUE0QyxLQUE1QyxFQUFtRCwwQkFBbkQsRUFBK0VsTSxnQkFBL0UsQ0FBMUI7QUFDQSxNQUFNTixVQUFVLEdBQUdnRSxRQUFRLENBQUM5SixFQUFULEdBQWM4SixRQUFRLENBQUM5SixFQUF2QixHQUE0QjhKLFFBQVEsQ0FBQ25JLFlBQXhEO0FBQ0FxYSxFQUFBQSxpQkFBaUIsQ0FBQ3hTLE9BQWxCLENBQTBCeEosRUFBMUIsR0FBK0I4RixVQUEvQjtBQUNBLE1BQU1tVyxjQUFjLDBFQUFtRW5XLFVBQW5FLFdBQXBCO0FBQ0EsTUFBTW9XLFdBQVcsR0FBRzVKLGlHQUFBLENBQ2xCLGNBRGtCLEVBQ0YwSixpQkFERSxFQUNpQkMsY0FEakIsRUFDaUMsRUFEakMsQ0FBcEI7QUFHQUMsRUFBQUEsV0FBVyxDQUFDM0MsUUFBWixHQUF1QixDQUF2QjtBQUNBeUMsRUFBQUEsaUJBQWlCLENBQUN6QyxRQUFsQixHQUE2QixDQUE3QjtBQUNBLE1BQU00QyxtQkFBbUIsR0FBRzdKLDRGQUFBLENBQTRDLEtBQTVDLEVBQW1ELHVCQUFuRCxFQUE0RTBKLGlCQUE1RSxDQUE1QjtBQUNBLE1BQU1yYSxZQUFZLEdBQUcyUSw0RkFBQSxDQUE0QyxNQUE1QyxFQUFvRCxlQUFwRCxFQUFxRTZKLG1CQUFyRSxDQUFyQjtBQUNBeGEsRUFBQUEsWUFBWSxDQUFDSixXQUFiLEdBQTJCdUksUUFBUSxDQUFDdUMsSUFBcEM7QUFDRCxDQWJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RkE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLDZEQUE2RCxLQUFLLGNBQWMsZUFBZSwyQkFBMkIsR0FBRyxXQUFXLDJCQUEyQix5Q0FBeUMseUJBQXlCLDBCQUEwQixHQUFHLHFCQUFxQix5Q0FBeUMscUJBQXFCLHVCQUF1QixnQkFBZ0IsZ0JBQWdCLHdDQUF3QyxHQUFHLHVDQUF1Qyx1Q0FBdUMsbUJBQW1CLGlDQUFpQyxHQUFHLDZCQUE2QixxQkFBcUIsb0JBQW9CLHdCQUF3QixvQkFBb0IsR0FBRyw2Q0FBNkMsNEJBQTRCLDRCQUE0QixHQUFHLGdDQUFnQyxrQkFBa0Isa0NBQWtDLGlCQUFpQix5Q0FBeUMsb0JBQW9CLG1CQUFtQix3QkFBd0IsbUNBQW1DLDRCQUE0Qix3QkFBd0IsR0FBRyxxQ0FBcUMsdUJBQXVCLGtCQUFrQiwyQkFBMkIsb0JBQW9CLEdBQUcsd0NBQXdDLHVCQUF1Qiw4QkFBOEIsd0JBQXdCLHFCQUFxQixlQUFlLGNBQWMsZ0JBQWdCLHNCQUFzQixtQkFBbUIsNEJBQTRCLGtCQUFrQixHQUFHLCtDQUErQyxrQkFBa0Isb0JBQW9CLDJCQUEyQixxQ0FBcUMsOEJBQThCLHFCQUFxQixnQkFBZ0IsR0FBRyxxREFBcUQsd0NBQXdDLEdBQUcscURBQXFELHdDQUF3QyxHQUFHLDJCQUEyQixtQkFBbUIsb0JBQW9CLHdCQUF3QixrQkFBa0IsdUJBQXVCLDhCQUE4QixxQkFBcUIsc0JBQXNCLG1CQUFtQixHQUFHLHNDQUFzQyxrQkFBa0IsMENBQTBDLHlCQUF5Qix5QkFBeUIsbUJBQW1CLGlCQUFpQixvQkFBb0Isd0JBQXdCLEdBQUcsNkNBQTZDLGtCQUFrQiwyQkFBMkIsbUJBQW1CLG9CQUFvQixvQkFBb0IsdUJBQXVCLHNCQUFzQixpQkFBaUIscUNBQXFDLEdBQUcsbURBQW1ELDJCQUEyQixlQUFlLEdBQUcsbURBQW1ELDJCQUEyQixlQUFlLEdBQUcsOENBQThDLGtCQUFrQixHQUFHLGlDQUFpQyxxQkFBcUIsb0JBQW9CLHNCQUFzQixHQUFHLGlFQUFpRSwyQkFBMkIsZUFBZSxHQUFHLDBDQUEwQyx1QkFBdUIsbUJBQW1CLHVCQUF1Qix1QkFBdUIscURBQXFELGdCQUFnQixpQkFBaUIsMkJBQTJCLEdBQUcsa0NBQWtDLGlCQUFpQixxQkFBcUIscUJBQXFCLHdDQUF3QyxHQUFHLHdDQUF3QyxrQkFBa0IsZUFBZSw4QkFBOEIsR0FBRyx1Q0FBdUMsa0JBQWtCLDRCQUE0QixxQkFBcUIscUJBQXFCLFlBQVksZUFBZSxxQkFBcUIsa0NBQWtDLEdBQUcsa0NBQWtDLG9CQUFvQixtQkFBbUIsR0FBRyx3Q0FBd0MsaUJBQWlCLCtDQUErQyxHQUFHLHlDQUF5QyxpQkFBaUIsK0NBQStDLEdBQUcsNkJBQTZCLGdDQUFnQyxvQkFBb0IsdUJBQXVCLFlBQVksR0FBRyxpQ0FBaUMsa0JBQWtCLHVCQUF1QixtQ0FBbUMsOEJBQThCLG1CQUFtQixxQkFBcUIsbUJBQW1CLG1CQUFtQixnQkFBZ0IsNkJBQTZCLEdBQUcsd0NBQXdDLG1CQUFtQiwwQkFBMEIsNkJBQTZCLEdBQUcscUNBQXFDLDJCQUEyQixrQkFBa0IsdUJBQXVCLGdCQUFnQixlQUFlLEdBQUcsb0NBQW9DLDhCQUE4QixxQkFBcUIsOEJBQThCLG9CQUFvQixtQkFBbUIsaUJBQWlCLDhCQUE4QixxQ0FBcUMsR0FBRywwQ0FBMEMsOEJBQThCLEdBQUcsMkNBQTJDLHdDQUF3QyxHQUFHLDJCQUEyQixvQkFBb0Isc0JBQXNCLHlCQUF5QixnQkFBZ0IsaUJBQWlCLHVCQUF1Qix3QkFBd0IsaUZBQWlGLG9GQUFvRiwrRUFBK0UsZ0ZBQWdGLGdGQUFnRix1QkFBdUIsa0RBQWtELDBDQUEwQyxxQ0FBcUMsaUNBQWlDLDZCQUE2QixrQkFBa0IsdUJBQXVCLGdCQUFnQixlQUFlLEdBQUcsa0NBQWtDLGVBQWUsZ0JBQWdCLGlDQUFpQyw4QkFBOEIsdUJBQXVCLFdBQVcsWUFBWSxrQkFBa0IsR0FBRyxpQ0FBaUMsbUNBQW1DLGVBQWUsZ0JBQWdCLHVCQUF1QixrQkFBa0IsaUJBQWlCLHVCQUF1QixXQUFXLFlBQVksY0FBYyxhQUFhLEdBQUcsNEJBQTRCLFFBQVEsc0NBQXNDLDhCQUE4QixLQUFLLFVBQVUsd0NBQXdDLGdDQUFnQyxLQUFLLEdBQUcsb0JBQW9CLFFBQVEsc0NBQXNDLDhCQUE4QixLQUFLLFVBQVUsd0NBQXdDLGdDQUFnQyxLQUFLLEdBQUcsMkJBQTJCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLGlCQUFpQixxQkFBcUIsdUJBQXVCLGNBQWMsaUNBQWlDLHVCQUF1Qix1Q0FBdUMsZ0JBQWdCLHFCQUFxQixHQUFHLGlDQUFpQyxrQkFBa0IsR0FBRyxnQ0FBZ0MseUJBQXlCLHVCQUF1QixzQkFBc0IsR0FBRyxnQ0FBZ0MsaUJBQWlCLHNDQUFzQyxHQUFHLG1EQUFtRCw2QkFBNkIsR0FBRyxrQ0FBa0MseUJBQXlCLHVCQUF1QixxQkFBcUIsR0FBRyxrQ0FBa0MsaUJBQWlCLHNDQUFzQyxHQUFHLHVEQUF1RCw2QkFBNkIsR0FBRyw2QkFBNkIsd0NBQXdDLDRDQUE0QyxLQUFLLCtDQUErQyx1QkFBdUIsS0FBSyx5Q0FBeUMsaUJBQWlCLEtBQUssR0FBRyw4QkFBOEIsK0JBQStCLHdCQUF3QixLQUFLLHdDQUF3Qyx5QkFBeUIsS0FBSyw0Q0FBNEMseUJBQXlCLEtBQUssb0NBQW9DLHVCQUF1QixLQUFLLEdBQUcsOEJBQThCLHdDQUF3Qyw0Q0FBNEMsS0FBSyxHQUFHLDhCQUE4Qix3Q0FBd0MsNENBQTRDLEtBQUssK0NBQStDLHVCQUF1QixLQUFLLEdBQUcsNkJBQTZCLG9DQUFvQywwQkFBMEIsS0FBSywwQ0FBMEMsaUJBQWlCLEtBQUssNkJBQTZCLHNCQUFzQix3QkFBd0Isd0JBQXdCLEtBQUssR0FBRyw2QkFBNkIsd0NBQXdDLDRDQUE0QyxLQUFLLGtDQUFrQyw2QkFBNkIsS0FBSyx5Q0FBeUMseUJBQXlCLEtBQUssR0FBRyw2QkFBNkIseUNBQXlDLHFCQUFxQixLQUFLLEdBQUcsT0FBTyx3R0FBd0csTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxLQUFLLE1BQU0sV0FBVyxVQUFVLEtBQUssTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFN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TUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sWUFBWSxVQUFVLE1BQU0sTUFBTSxZQUFZLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLFlBQVksVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxZQUFZLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFlBQVksV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFlBQVksVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sWUFBWSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxZQUFZLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sWUFBWSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxZQUFZLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sWUFBWSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sWUFBWSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLGFBQWEsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sV0FBVyxXQUFXLEtBQUssTUFBTSxhQUFhLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLGFBQWEsV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxVQUFVLEtBQUssTUFBTSxhQUFhLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLFVBQVUsS0FBSyxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sNEJBQTRCLGNBQWMsR0FBRyxXQUFXLDJCQUEyQix5QkFBeUIsMEJBQTBCLEdBQUcsZ0NBQWdDLGdDQUFnQyxpQkFBaUIsdUJBQXVCLGlCQUFpQix5QkFBeUIscUJBQXFCLHFCQUFxQixtQkFBbUIsbUNBQW1DLHdCQUF3QixHQUFHLDRCQUE0QixpQkFBaUIseUJBQXlCLDZCQUE2Qix1QkFBdUIsR0FBRyxxQkFBcUIsbUJBQW1CLGtCQUFrQixHQUFHLHFCQUFxQixxQkFBcUIsb0JBQW9CLEdBQUcsMEJBQTBCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHdCQUF3QixzQkFBc0IsdUJBQXVCLEdBQUcsd0JBQXdCLHNCQUFzQix5QkFBeUIsR0FBRyxrQ0FBa0MsdUJBQXVCLGlCQUFpQixlQUFlLG1CQUFtQixzQkFBc0Isa0JBQWtCLG1DQUFtQyxpRkFBaUYsdUNBQXVDLHFDQUFxQywrQkFBK0IsNkJBQTZCLDJCQUEyQixHQUFHLFVBQVUseURBQXlELEdBQUcsWUFBWSxrQkFBa0Isb0JBQW9CLGVBQWUsb0JBQW9CLFlBQVksV0FBVyxnQkFBZ0IsaUJBQWlCLG1CQUFtQixtQ0FBbUMsd0NBQXdDLHdDQUF3Qyx1QkFBdUIsdUNBQXVDLHFCQUFxQixlQUFlLGdDQUFnQyxPQUFPLEtBQUsscUJBQXFCLHFDQUFxQyxpQkFBaUIsdUJBQXVCLG9CQUFvQiwwQkFBMEIsNkJBQTZCLGtDQUFrQyxLQUFLLHVCQUF1QixvQkFBb0IsMkNBQTJDLGtCQUFrQiwwQkFBMEIsS0FBSyxnQ0FBZ0MseUJBQXlCLGtCQUFrQixLQUFLLHdCQUF3QixzQkFBc0IsdUJBQXVCLHVCQUF1QixPQUFPLDhCQUE4QiwrQkFBK0IsS0FBSyx3QkFBd0Isb0JBQW9CLG9DQUFvQyxzQkFBc0Isa0JBQWtCLEtBQUssdUJBQXVCLHNCQUFzQiw2QkFBNkIsS0FBSyw2QkFBNkIsOEJBQThCLEtBQUsseUJBQXlCLG1CQUFtQix5QkFBeUIsc0JBQXNCLG1CQUFtQixLQUFLLHNCQUFzQixtQkFBbUIsS0FBSyx1QkFBdUIsK0JBQStCLHNCQUFzQiw2QkFBNkIsS0FBSyx1QkFBdUIsb0JBQW9CLDhCQUE4QixLQUFLLHNCQUFzQiwrQkFBK0IsS0FBSywwQkFBMEIsK0JBQStCLEtBQUssNEJBQTRCLDBCQUEwQixLQUFLLGdDQUFnQywwQkFBMEIsS0FBSywyQkFBMkIsMEJBQTBCLEtBQUssK0JBQStCLDBCQUEwQixLQUFLLDJCQUEyQixzQkFBc0IsdUJBQXVCLG9CQUFvQiw2QkFBNkIscUNBQXFDLEtBQUsscUNBQXFDLFlBQVksb0JBQW9CLG1CQUFtQixPQUFPLFVBQVUsZUFBZSxtQkFBbUIsT0FBTyxLQUFLLDZCQUE2QixZQUFZLG9CQUFvQixtQkFBbUIsT0FBTyxVQUFVLGVBQWUsbUJBQW1CLE9BQU8sS0FBSyx1QkFBdUIscUNBQXFDLEtBQUssbUJBQW1CLGlDQUFpQyxLQUFLLDRCQUE0QixxQ0FBcUMsa0JBQWtCLEtBQUssMEJBQTBCLHlCQUF5QixLQUFLLHFCQUFxQix5QkFBeUIsb0JBQW9CLG9DQUFvQyxLQUFLLDRCQUE0Qiw2QkFBNkIsS0FBSyx5QkFBeUIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsMEJBQTBCLEtBQUssNEJBQTRCLG9CQUFvQiw2QkFBNkIsS0FBSyxxQkFBcUIsb0JBQW9CLEtBQUssNEJBQTRCLG9CQUFvQiw2QkFBNkIsS0FBSyxrQkFBa0Isc0JBQXNCLHVCQUF1QixxQkFBcUIsb0JBQW9CLEtBQUssMEJBQTBCLDBCQUEwQixxQ0FBcUMsd0JBQXdCLEtBQUssOEJBQThCLHFDQUFxQywwQkFBMEIsdUJBQXVCLHlCQUF5QixLQUFLLHNCQUFzQixvQkFBb0IsNkJBQTZCLEtBQUsscUJBQXFCLHlCQUF5QixLQUFLLHdCQUF3Qix1Q0FBdUMsb0JBQW9CLGdCQUFnQixnQ0FBZ0MsT0FBTyxLQUFLLGdDQUFnQyxvQkFBb0Isb0NBQW9DLDZCQUE2Qix1QkFBdUIsdUJBQXVCLHNCQUFzQixLQUFLLGlCQUFpQixvQkFBb0IsNkJBQTZCLEtBQUssa0JBQWtCLG9CQUFvQiw2QkFBNkIsS0FBSyxrQkFBa0Isb0JBQW9CLDZCQUE2QiwwQkFBMEIsS0FBSyx3QkFBd0Isd0JBQXdCLCtCQUErQixLQUFLLHVCQUF1Qix3QkFBd0IsK0JBQStCLEtBQUssY0FBYyxzQkFBc0IsS0FBSyxrQ0FBa0MscUNBQXFDLDBCQUEwQixxQkFBcUIsS0FBSyx1QkFBdUIseUJBQXlCLEtBQUssdUJBQXVCLHFCQUFxQixtQkFBbUIsaUJBQWlCLHVCQUF1QixLQUFLLGVBQWUsaUJBQWlCLHdCQUF3Qiw0QkFBNEIsK0NBQStDLEtBQUssNEJBQTRCLHNCQUFzQixLQUFLLCtCQUErQixzQkFBc0IsS0FBSywyQkFBMkIsc0JBQXNCLEtBQUssMkJBQTJCLFVBQVUsZ0NBQWdDLE9BQU8sS0FBSywwQkFBMEIscUJBQXFCLDBCQUEwQixrQkFBa0IsS0FBSywyQkFBMkIscUJBQXFCLDBCQUEwQiw2QkFBNkIsS0FBSyw0QkFBNEIsb0JBQW9CLG9DQUFvQyxLQUFLLDZCQUE2QixxQ0FBcUMsMEJBQTBCLEtBQUssK0JBQStCLG9CQUFvQiw2QkFBNkIsb0NBQW9DLDBCQUEwQixLQUFLLG9CQUFvQixvQkFBb0Isc0JBQXNCLGtCQUFrQixxQkFBcUIsS0FBSyw4QkFBOEIsb0JBQW9CLDZCQUE2QixxQkFBcUIsS0FBSyxxQkFBcUIseUJBQXlCLG9CQUFvQiw2QkFBNkIsb0NBQW9DLEtBQUssOEJBQThCLHFCQUFxQixLQUFLLDJCQUEyQixxQkFBcUIsS0FBSywwQkFBMEIscUJBQXFCLEtBQUssK0JBQStCLHFDQUFxQyxzQkFBc0Isb0JBQW9CLHlCQUF5QixnQ0FBZ0MseUJBQXlCLDZCQUE2QixvQ0FBb0MsaUJBQWlCLGtCQUFrQiwyQkFBMkIseUJBQXlCLEtBQUssa0JBQWtCLHVCQUF1QixzQkFBc0IsS0FBSyxrQkFBa0Isb0JBQW9CLHFDQUFxQyxLQUFLLG1CQUFtQiwrQkFBK0Isc0JBQXNCLEtBQUssa0NBQWtDLG9CQUFvQixLQUFLLDRCQUE0QixzQkFBc0IsS0FBSyxvQkFBb0Isc0JBQXNCLEtBQUssa0NBQWtDLCtCQUErQixzQkFBc0IsS0FBSyw4QkFBOEIsc0JBQXNCLEtBQUsseUNBQXlDLHFDQUFxQyxzQkFBc0Isb0JBQW9CLHlCQUF5QixnQ0FBZ0MsNkJBQTZCLEtBQUssNEJBQTRCLG9CQUFvQiw2QkFBNkIsb0NBQW9DLDBCQUEwQixzQkFBc0IsS0FBSywyQkFBMkIsb0JBQW9CLDhCQUE4QixzQkFBc0IseUJBQXlCLHdCQUF3QixxQkFBcUIsS0FBSyxpQ0FBaUMscUNBQXFDLGtDQUFrQyx5QkFBeUIsbUJBQW1CLGtCQUFrQix1QkFBdUIsc0JBQXNCLDBCQUEwQixpQkFBaUIsdUJBQXVCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLHdCQUF3QixLQUFLLGlCQUFpQix1QkFBdUIsd0JBQXdCLHlCQUF5QixxQkFBcUIsd0JBQXdCLEtBQUssMkJBQTJCLHVCQUF1Qix3QkFBd0IsS0FBSywwQkFBMEIscUNBQXFDLDBCQUEwQix1QkFBdUIsNkJBQTZCLG9CQUFvQixvQ0FBb0MsS0FBSyxpQkFBaUIsb0JBQW9CLG9DQUFvQyx1QkFBdUIsS0FBSyxxQkFBcUIsb0JBQW9CLDZCQUE2QiwwQkFBMEIsOEJBQThCLHlCQUF5QixnQ0FBZ0MscUJBQXFCLHlCQUF5Qix5QkFBeUIsS0FBSywyQkFBMkIsa0NBQWtDLEtBQUssc0JBQXNCLG9CQUFvQiw2QkFBNkIsc0JBQXNCLG9IQUFvSCxLQUFLLDJCQUEyQix5QkFBeUIsc0JBQXNCLHFCQUFxQiwyQkFBMkIsS0FBSyx3Q0FBd0MscUJBQXFCLEtBQUssdUNBQXVDLHFCQUFxQixLQUFLLHdCQUF3Qix1Q0FBdUMsbUJBQW1CLHlCQUF5QixvQkFBb0IscUJBQXFCLHFCQUFxQixpQkFBaUIseUJBQXlCLGtEQUFrRCxPQUFPLGdCQUFnQixzQ0FBc0MsS0FBSyxzQ0FBc0MsdUJBQXVCLEtBQUssNkJBQTZCLDZCQUE2QixzQkFBc0Isb0JBQW9CLEtBQUssbUNBQW1DLHFCQUFxQixLQUFLLG1CQUFtQixhQUFhLGNBQWMsa0JBQWtCLEtBQUssa0JBQWtCLHFCQUFxQixLQUFLLDBDQUEwQyxvQkFBb0IsMkNBQTJDLG9DQUFvQyxrQkFBa0IsMEJBQTBCLEtBQUsseUJBQXlCLHNCQUFzQix1QkFBdUIsS0FBSywrQkFBK0IsOEJBQThCLEtBQUssa0NBQWtDLDJCQUEyQixzQkFBc0IsT0FBTyw4QkFBOEIsd0JBQXdCLE9BQU8saUNBQWlDLHVCQUF1QixvQkFBb0IsT0FBTyxLQUFLLGtDQUFrQyxpQkFBaUIsMkJBQTJCLDBCQUEwQixPQUFPLDJCQUEyQix1Q0FBdUMsT0FBTyw4QkFBOEIsMkJBQTJCLG9CQUFvQix5QkFBeUIsT0FBTyx5QkFBeUIsMkJBQTJCLE9BQU8seUJBQXlCLHNCQUFzQixPQUFPLGlDQUFpQyx1QkFBdUIsb0JBQW9CLE9BQU8sS0FBSyxpQ0FBaUMsNEJBQTRCLDRCQUE0QixPQUFPLDZCQUE2QiwrQkFBK0IsT0FBTyxtQkFBbUIsK0JBQStCLE9BQU8sNEJBQTRCLDRCQUE0QixPQUFPLHVCQUF1QiwyQkFBMkIsT0FBTyx5QkFBeUIsd0JBQXdCLE9BQU8sMEJBQTBCLHdCQUF3QiwwQkFBMEIsT0FBTyxpQ0FBaUMsb0JBQW9CLE9BQU8sS0FBSyxpQ0FBaUMsb0JBQW9CLHVDQUF1Qyx1Q0FBdUMsd0JBQXdCLE9BQU8sK0JBQStCLHNCQUFzQixPQUFPLGlDQUFpQyw0QkFBNEIsT0FBTyxLQUFLLGlDQUFpQyw0QkFBNEIsK0JBQStCLE9BQU8sNkJBQTZCLDRCQUE0QixPQUFPLDhCQUE4QiwrQkFBK0IsT0FBTyxvQ0FBb0Msd0JBQXdCLDRCQUE0QixPQUFPLDRCQUE0QiwrQkFBK0IsT0FBTyxzQkFBc0IsNEJBQTRCLGdDQUFnQyxPQUFPLGdDQUFnQywyQkFBMkIsT0FBTyx5QkFBeUIsMEJBQTBCLHVCQUF1QixPQUFPLGlDQUFpQywrQkFBK0IsT0FBTyx3QkFBd0IsMkJBQTJCLDRCQUE0QixPQUFPLDRCQUE0QiwyQkFBMkIsNEJBQTRCLE9BQU8seUJBQXlCLHdCQUF3QixPQUFPLG9CQUFvQixzQkFBc0IscUJBQXFCLHFCQUFxQixPQUFPLGlDQUFpQyxtQkFBbUIsT0FBTyxLQUFLLGlDQUFpQyxnQ0FBZ0Msd0JBQXdCLHlCQUF5QixPQUFPLHdCQUF3Qix3QkFBd0IsT0FBTywwQkFBMEIsd0JBQXdCLE9BQU8sa0NBQWtDLG9CQUFvQixPQUFPLDBCQUEwQix5QkFBeUIsT0FBTyxLQUFLLGtDQUFrQyx3QkFBd0IsMkJBQTJCLHVCQUF1Qix5QkFBeUIsT0FBTyxLQUFLLGtDQUFrQyx3QkFBd0IsdUJBQXVCLE9BQU8sS0FBSyxHQUFHLHFCQUFxQjtBQUNyaXNDO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixNQUFNO0FBQ04sZUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFVBQVU7QUFDVjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLGNBQWM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLG1CQUFtQjtBQUNwRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLGtCQUFrQjs7QUFFbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdCQUFnQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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Q0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbENlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0Esa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNkQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTStQLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBTTtBQUNoQzdTLEVBQUFBLFVBQVUsd0xBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDSFAsb0VBQWEsRUFEVjs7QUFBQTtBQUVUOUQsWUFBQUEsa0dBQUE7QUFDQXFHLFlBQUFBLGdHQUFBO0FBQ016RixZQUFBQSxVQUpHLEdBSVVtSCxZQUFZLENBQUNvUCxPQUFiLENBQXFCLFlBQXJCLENBSlY7O0FBS1QsZ0JBQUl2VyxVQUFKLEVBQWdCO0FBQ2RaLGNBQUFBLGdHQUFBLENBQTZDWSxVQUE3QztBQUNBbUgsY0FBQUEsWUFBWSxDQUFDcVAsS0FBYjtBQUNEOztBQVJRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFTUCxHQVRPLENBQVY7QUFVRCxDQVhEOztBQVlBRixtQkFBbUIsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9hcHBDb250cm9sL2NoYW1waW9uTW9kYWxDb250cm9sbGVyLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvYXBwQ29udHJvbC9jaGFtcGlvbnNQYWdlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL2FwcENvbnRyb2wvZmlsdGVyQ2hhbXBpb25zLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvYXBwQ29udHJvbC9zZWFyY2hiYXJDb250cm9sbGVyLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvYXBwQ29udHJvbC9zb3J0Q2hhbXBpb25zLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvY2hhbXBpb25EYXRhL2NoYW1waW9uRGV0YWlscy5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL2NoYW1waW9uRGF0YS9jaGFtcGlvblN0YXRzLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvY2hhbXBpb25EYXRhL2dldEFsbENoYW1waW9ucy5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL2NoYW1waW9uRGF0YS9nZXRMYXRlc3RWZXJzaW9uLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvY2hhbXBpb25EYXRhL2l0ZW1JbmZvLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvaGVscGVycy9kcm9wZG93blNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9oZWxwZXJzL2VsZW1lbnRDcmVhdGlvbi5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL3RlbXBsYXRlcy9jaGFtcGlvbkRldGFpbHNNb2RhbC5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL3RlbXBsYXRlcy9jaGFtcGlvblNraW5zTW9kYWwuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy90ZW1wbGF0ZXMvY2hhbXBpb25TdGF0c01vZGFsLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvdGVtcGxhdGVzL2NoYW1waW9uc1BhZ2UuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy90ZW1wbGF0ZXMvcmVuZGVySGVscGVycy5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL3N0eWxlc2hlZXRzL2NoYW1waW9ucy5zY3NzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvc3R5bGVzaGVldHMvbW9kYWxzLnNjc3MiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvc3R5bGVzaGVldHMvY2hhbXBpb25zLnNjc3M/NjhjNyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL3N0eWxlc2hlZXRzL21vZGFscy5zY3NzP2NmODMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy9ob21lL2Rhbml5by9Eb2N1bWVudHMvT2RpblByb2plY3QvTGVhZ3VlLUFwcC9mcm9udGVuZC9zcmMvYXNzZXRzL2ltYWdlc3xzeW5jfG5vbnJlY3Vyc2l2ZXwvXFwuKHBuZ3xqcGUiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xlYWd1ZS1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2xlYWd1ZS1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9sZWFndWUtYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL2NoYW1waW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiY29uc3QgQ2hhbXBpb25Nb2RhbENvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBjb25zdCB0b2dnbGVBY3RpdmVBYmlsaXR5ID0gKGNsaWNrZWRBYmlsaXR5SWQpID0+IHtcbiAgICBjb25zdCBhYmlsaXR5SW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNwZWxsLWltZycpO1xuICAgIGNvbnN0IGFiaWxpdHlJbmZvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hYmlsaXR5LWluZm8nKTtcblxuICAgIGFiaWxpdHlJbWFnZXMuZm9yRWFjaCgoaW1nKSA9PiB7XG4gICAgICBpbWcuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZCcpO1xuICAgIH0pO1xuICAgIGFiaWxpdHlJbmZvcy5mb3JFYWNoKChpbmZvKSA9PiB7XG4gICAgICBpbmZvLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY2xpY2tlZEltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Y2xpY2tlZEFiaWxpdHlJZH0taW1nYCk7XG4gICAgY2xpY2tlZEltYWdlLmNsYXNzTmFtZSA9ICdzcGVsbC1pbWcgY2xpY2tlZCc7XG5cbiAgICBjb25zdCBhY3RpdmVBYmlsaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Y2xpY2tlZEFiaWxpdHlJZH0tYWJpbGl0eWApO1xuICAgIGFjdGl2ZUFiaWxpdHkuY2xhc3NOYW1lID0gJ2FiaWxpdHktaW5mbyBhY3RpdmUnO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZU1vZGFsVGVtcGxhdGUgPSAoY2xpY2tlZE1vZGFsTmF2TGluaykgPT4ge1xuICAgIGNvbnN0IHRlbXBsYXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC10ZW1wbGF0ZScpO1xuICAgIHRlbXBsYXRlcy5mb3JFYWNoKCh0ZW1wbGF0ZSkgPT4ge1xuICAgICAgY29uc3QgdGVtcGxhdGVOYW1lID0gdGVtcGxhdGUuaWQuc3Vic3RyaW5nKDAsIHRlbXBsYXRlLmlkLmluZGV4T2YoJy0nKSk7XG4gICAgICBpZiAodGVtcGxhdGVOYW1lID09PSBjbGlja2VkTW9kYWxOYXZMaW5rLmlkKSB7XG4gICAgICAgIGNvbnN0IGNob3NlblRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgICAgIGNob3NlblRlbXBsYXRlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgaGlkZGVuVGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICAgICAgaGlkZGVuVGVtcGxhdGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBkaXNwYXlJdGVtRGV0YWlscyA9IChob3ZlcmVkSXRlbUltYWdlKSA9PiB7XG4gICAgY29uc3QgaXRlbURldGFpbHMgPSBob3ZlcmVkSXRlbUltYWdlLm5leHRFbGVtZW50U2libGluZztcbiAgICBpdGVtRGV0YWlscy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICB9O1xuXG4gIGNvbnN0IGhpZGVJdGVtRGV0YWlscyA9ICh1bmhvdmVyZWRJdGVtSW1hZ2UpID0+IHtcbiAgICBjb25zdCBpdGVtRGV0YWlscyA9IHVuaG92ZXJlZEl0ZW1JbWFnZS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgaXRlbURldGFpbHMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfTtcblxuICBjb25zdCB0b2dnbGVTa2luSW1hZ2VzID0gKGFycm93Q2xhc3NMaXN0KSA9PiB7XG4gICAgY29uc3Qgc2tpbkltYWdlc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5za2luLWltYWdlcy1jb250YWluZXInKTtcbiAgICBjb25zdCBjdXJyZW50U2hvd25JbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5za2luLWltYWdlLWNvbnRhaW5lci5zaG93bicpO1xuICAgIGNvbnN0IHNraW5OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNraW4tbmFtZScpO1xuXG4gICAgY3VycmVudFNob3duSW1hZ2UuY2xhc3NOYW1lID0gJ3NraW4taW1hZ2UtY29udGFpbmVyJztcbiAgICBjb25zdCBmaXJzdEltYWdlID0gc2tpbkltYWdlc0NvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICBjb25zdCBsYXN0SW1hZ2UgPSBza2luSW1hZ2VzQ29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQ7XG5cbiAgICBpZiAoZmlyc3RJbWFnZSA9PT0gY3VycmVudFNob3duSW1hZ2UgJiYgYXJyb3dDbGFzc0xpc3QuaW5jbHVkZXMoJ2xlZnQtYXJyb3cnKSkge1xuICAgICAgbGFzdEltYWdlLmNsYXNzTmFtZSA9ICdza2luLWltYWdlLWNvbnRhaW5lciBzaG93bic7XG4gICAgICBza2luTmFtZS50ZXh0Q29udGVudCA9IGxhc3RJbWFnZS5pZDtcbiAgICB9IGVsc2UgaWYgKGxhc3RJbWFnZSA9PT0gY3VycmVudFNob3duSW1hZ2UgJiYgYXJyb3dDbGFzc0xpc3QuaW5jbHVkZXMoJ3JpZ2h0LWFycm93JykpIHtcbiAgICAgIGZpcnN0SW1hZ2UuY2xhc3NOYW1lID0gJ3NraW4taW1hZ2UtY29udGFpbmVyIHNob3duJztcbiAgICAgIHNraW5OYW1lLnRleHRDb250ZW50ID0gZmlyc3RJbWFnZS5pZDtcbiAgICB9IGVsc2UgaWYgKGFycm93Q2xhc3NMaXN0LmluY2x1ZGVzKCdyaWdodC1hcnJvdycpKSB7XG4gICAgICBjdXJyZW50U2hvd25JbWFnZS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NOYW1lID0gJ3NraW4taW1hZ2UtY29udGFpbmVyIHNob3duJztcbiAgICAgIHNraW5OYW1lLnRleHRDb250ZW50ID0gY3VycmVudFNob3duSW1hZ2UubmV4dEVsZW1lbnRTaWJsaW5nLmlkO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50U2hvd25JbWFnZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTmFtZSA9ICdza2luLWltYWdlLWNvbnRhaW5lciBzaG93bic7XG4gICAgICBza2luTmFtZS50ZXh0Q29udGVudCA9IGN1cnJlbnRTaG93bkltYWdlLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaWQ7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNsZWFyTWFpbk1vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1jb250YWluZXInKTtcbiAgICBjb25zdCBjaGFtcGlvbk5hbWUgPSBtYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbi1uYW1lJyk7XG4gICAgY29uc3QgY2hhbXBpb25UaXRsZSA9IG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLXRpdGxlJyk7XG4gICAgY29uc3QgY2hhbXBpb25Sb2xlcyA9IG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLXJvbGVzJyk7XG4gICAgY29uc3QgY2hhbXBpb25Mb3JlID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tbG9yZScpO1xuICAgIGNvbnN0IGFiaWxpdHlEZXRhaWxzID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuYWJpbGl0eS1kZXRhaWxzJyk7XG4gICAgY29uc3QgY2hhbXBpb25UaXBzID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tdGlwcycpO1xuXG4gICAgY29uc3QgbWFpbk1vZGFsSGVhZGVyID0gW2NoYW1waW9uTmFtZSwgY2hhbXBpb25UaXRsZSwgY2hhbXBpb25Sb2xlc107XG4gICAgbWFpbk1vZGFsSGVhZGVyLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gZWxlbWVudDtcbiAgICAgIGN1cnJlbnRFbGVtZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgfSk7XG5cbiAgICBjaGFtcGlvbkxvcmUucmVtb3ZlKCk7XG4gICAgYWJpbGl0eURldGFpbHMucmVtb3ZlKCk7XG4gICAgY2hhbXBpb25UaXBzLnJlbW92ZSgpO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyU3RhdHNNb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCBzdGF0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGF0cy1jb250YWluZXInKTtcbiAgICBjb25zdCBjaGFtcGlvbk5hbWUgPSBzdGF0c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tbmFtZScpO1xuICAgIGNvbnN0IGNoYW1waW9uVGl0bGUgPSBzdGF0c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tdGl0bGUnKTtcbiAgICBjb25zdCBjaGFtcGlvblN0YXRzT3ZlcnZpZXcgPSBzdGF0c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tc3RhdHMtb3ZlcnZpZXcnKTtcbiAgICBjb25zdCBhbGxkYW1hZ2VTdGF0cyA9IHN0YXRzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYW1hZ2Utc3RhdHMnKTtcbiAgICBjb25zdCBpdGVtU2V0c0NvbnRhaW5lciA9IHN0YXRzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLXNldHMtY29udGFpbmVyJyk7XG4gICAgY29uc3QgYmVzdE1hdGNodXBzID0gc3RhdHNDb250YWluZXIucXVlcnlTZWxlY3RvcignLmJlc3QtbWF0Y2h1cHMnKTtcbiAgICBjb25zdCB3b3JzdE1hdGNodXBzID0gc3RhdHNDb250YWluZXIucXVlcnlTZWxlY3RvcignLndvcnN0LW1hdGNodXBzJyk7XG5cbiAgICBjb25zdCBzdGF0c01vZGFsSGVhZGVyID0gW2NoYW1waW9uTmFtZSwgY2hhbXBpb25UaXRsZSwgY2hhbXBpb25TdGF0c092ZXJ2aWV3XTtcbiAgICBzdGF0c01vZGFsSGVhZGVyLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gZWxlbWVudDtcbiAgICAgIGN1cnJlbnRFbGVtZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgfSk7XG4gICAgYWxsZGFtYWdlU3RhdHMuZm9yRWFjaCgoZGFtYWdlU3RhdCkgPT4ge1xuICAgICAgY29uc3QgZGFtYWdlU3RhdEVsZW1lbnQgPSBkYW1hZ2VTdGF0O1xuICAgICAgZGFtYWdlU3RhdEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfSk7XG4gICAgY29uc3Qgc3RhdHNNb2RhbENvbnRlbnQgPSBbaXRlbVNldHNDb250YWluZXIsIGJlc3RNYXRjaHVwcywgd29yc3RNYXRjaHVwc107XG4gICAgc3RhdHNNb2RhbENvbnRlbnQuZm9yRWFjaCgoY29udGVudCkgPT4ge1xuICAgICAgY29uc3QgY29udGVudEVsZW1lbnQgPSBjb250ZW50O1xuICAgICAgY29udGVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgY2xlYXJTa2luc01vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IHNraW5JbWFnZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2tpbi1pbWFnZXMtY29udGFpbmVyJyk7XG4gICAgc2tpbkltYWdlc0NvbnRhaW5lci5yZW1vdmUoKTtcbiAgfTtcblxuICBjb25zdCBjbG9zZUNoYW1waW9uTW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tY29udGFpbmVyJyk7XG4gICAgY29uc3Qgc3RhdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhdHMtY29udGFpbmVyJyk7XG4gICAgY29uc3Qgc2tpbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2tpbnMtY29udGFpbmVyJyk7XG5cbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIG1haW5Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgc3RhdHNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBza2luc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9O1xuXG4gIGNvbnN0IG1vZGFsQ2xpY2tFdmVudHMgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuXG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdzcGVsbC1pbWcnKSB7XG4gICAgICBjb25zdCBkYXNoSW5kZXggPSBldmVudC50YXJnZXQuaWQuaW5kZXhPZignLScpO1xuICAgICAgY29uc3QgYWJpbGl0eUlkID0gZXZlbnQudGFyZ2V0LmlkLnNsaWNlKDAsIGRhc2hJbmRleCk7XG4gICAgICB0b2dnbGVBY3RpdmVBYmlsaXR5KGFiaWxpdHlJZCk7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdtb2RhbC1uYXYtbGluaycpIHtcbiAgICAgIGNoYW5nZU1vZGFsVGVtcGxhdGUoZXZlbnQudGFyZ2V0KTtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuZnJvbShldmVudC50YXJnZXQuY2xhc3NMaXN0KS5pbmNsdWRlcygnaW1nLXNjcm9sbC1hcnJvdycpKSB7XG4gICAgICB0b2dnbGVTa2luSW1hZ2VzKEFycmF5LmZyb20oZXZlbnQudGFyZ2V0LmNsYXNzTGlzdCkpO1xuICAgIH1cblxuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnY2xvc2UtbW9kYWwtYnRuJykge1xuICAgICAgbW9kYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtb2RhbENsaWNrRXZlbnRzKTtcbiAgICAgIGNsb3NlQ2hhbXBpb25Nb2RhbCgpO1xuICAgICAgY2xlYXJNYWluTW9kYWwoKTtcbiAgICAgIGNsZWFyU3RhdHNNb2RhbCgpO1xuICAgICAgY2xlYXJTa2luc01vZGFsKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG1vZGFsTW91c2VvdmVyRXZlbnRzID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdpdGVtLWltZydcbiAgICAgIHx8IGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdjb21wb25lbnQtaXRlbS1pbWcnKSB7XG4gICAgICBkaXNwYXlJdGVtRGV0YWlscyhldmVudC50YXJnZXQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBtb2RhbE1vdXNlb3V0RXZlbnRzID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdpdGVtLWltZydcbiAgICB8fCBldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnY29tcG9uZW50LWl0ZW0taW1nJykge1xuICAgICAgaWYgKCFldmVudC50YXJnZXQpIHJldHVybjtcblxuICAgICAgbGV0IHsgcmVsYXRlZFRhcmdldCB9ID0gZXZlbnQ7XG5cbiAgICAgIHdoaWxlIChyZWxhdGVkVGFyZ2V0KSB7XG4gICAgICAgIGlmIChyZWxhdGVkVGFyZ2V0ID09PSBldmVudC50YXJnZXQpIHJldHVybjtcbiAgICAgICAgcmVsYXRlZFRhcmdldCA9IHJlbGF0ZWRUYXJnZXQucGFyZW50Tm9kZTtcbiAgICAgIH1cblxuICAgICAgaGlkZUl0ZW1EZXRhaWxzKGV2ZW50LnRhcmdldCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG1vZGFsQXJyb3dFdmVudHMgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBza2luc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNza2lucy1jb250YWluZXInKTtcbiAgICBpZiAoc2tpbnNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJykge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93UmlnaHQnKSB7XG4gICAgICAgIGNvbnN0IHJpZ2h0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmlnaHQtYXJyb3cnKTtcbiAgICAgICAgdG9nZ2xlU2tpbkltYWdlcyhBcnJheS5mcm9tKHJpZ2h0QXJyb3cuY2xhc3NMaXN0KSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudC5rZXkgPT09ICdBcnJvd0xlZnQnKSB7XG4gICAgICAgIGNvbnN0IGxlZnRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0LWFycm93Jyk7XG4gICAgICAgIHRvZ2dsZVNraW5JbWFnZXMoQXJyYXkuZnJvbShsZWZ0QXJyb3cuY2xhc3NMaXN0KSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG1vZGFsQ2hhbmdlTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG5cbiAgICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1vZGFsQ2xpY2tFdmVudHMpO1xuICAgIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIG1vZGFsTW91c2VvdmVyRXZlbnRzKTtcbiAgICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIG1vZGFsTW91c2VvdXRFdmVudHMpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBtb2RhbEFycm93RXZlbnRzKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG1vZGFsQ2hhbmdlTGlzdGVuZXJzLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhbXBpb25Nb2RhbENvbnRyb2xsZXI7XG4iLCJpbXBvcnQgZ2V0Q2hhbXBpb25EZXRhaWxzIGZyb20gJy4uL2NoYW1waW9uRGF0YS9jaGFtcGlvbkRldGFpbHMnO1xuaW1wb3J0IGdldENoYW1waW9uU3RhdHMgZnJvbSAnLi4vY2hhbXBpb25EYXRhL2NoYW1waW9uU3RhdHMnO1xuaW1wb3J0IGNoYW1waW9uRGV0YWlsc01vZGFsIGZyb20gJy4uL3RlbXBsYXRlcy9jaGFtcGlvbkRldGFpbHNNb2RhbCc7XG5pbXBvcnQgY2hhbXBpb25TdGF0c01vZGFsIGZyb20gJy4uL3RlbXBsYXRlcy9jaGFtcGlvblN0YXRzTW9kYWwnO1xuaW1wb3J0IGNoYW1waW9uU2tpbnNNb2RhbCBmcm9tICcuLi90ZW1wbGF0ZXMvY2hhbXBpb25Ta2luc01vZGFsJztcbmltcG9ydCBDaGFtcGlvbk1vZGFsQ29udHJvbGxlciBmcm9tICcuL2NoYW1waW9uTW9kYWxDb250cm9sbGVyJztcbmltcG9ydCBDaGFtcGlvbkZpbHRlciBmcm9tICcuL2ZpbHRlckNoYW1waW9ucyc7XG5pbXBvcnQgU29ydENoYW1waW9ucyBmcm9tICcuL3NvcnRDaGFtcGlvbnMnO1xuaW1wb3J0IHsgZ2V0QWxsQ2hhbXBpb25EZXRhaWxzLCBnZXRBbGxDaGFtcGlvblN0YXRzIH0gZnJvbSAnLi4vY2hhbXBpb25EYXRhL2dldEFsbENoYW1waW9ucyc7XG5pbXBvcnQgZ2V0TGF0ZXN0VmVyc2lvbiBmcm9tICcuLi9jaGFtcGlvbkRhdGEvZ2V0TGF0ZXN0VmVyc2lvbic7XG5cbmNvbnN0IENoYW1waW9uc1BhZ2VDb250cm9sbGVyID0gKCgpID0+IHtcbiAgY29uc3QgZGlzcGxheURyb3Bkb3duT3B0aW9ucyA9IChkcm9wZG93bk9wdGlvbnMpID0+IHtcbiAgICBjb25zdCBhbGxEcm9wZG93bk9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd24tb3B0aW9ucycpO1xuICAgIGFsbERyb3Bkb3duT3B0aW9ucy5mb3JFYWNoKChvcHRpb25zKSA9PiB7XG4gICAgICBjb25zdCBvcHRpb25zU3R5bGUgPSBvcHRpb25zLnN0eWxlO1xuICAgICAgb3B0aW9uc1N0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7XG5cbiAgICBjb25zdCBkcm9wZG93bk9wdGlvbnNTdHlsZSA9IGRyb3Bkb3duT3B0aW9ucy5zdHlsZTtcbiAgICBkcm9wZG93bk9wdGlvbnNTdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICB9O1xuXG4gIGNvbnN0IGhpZGVEcm9wZG93bk9wdGlvbnMgPSAoZHJvcGRvd25PcHRpb25zKSA9PiB7XG4gICAgY29uc3QgZHJvcGRvd25PcHRpb25zU3R5bGUgPSBkcm9wZG93bk9wdGlvbnMuc3R5bGU7XG4gICAgZHJvcGRvd25PcHRpb25zU3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfTtcblxuICBjb25zdCBkcm9wZG93bk9wdGlvbnNUb2dnbGUgPSAoZHJvcGRvd25CdG4pID0+IHtcbiAgICBjb25zdCBkcm9wZG93bk9wdGlvbnMgPSBkcm9wZG93bkJ0bi5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bi1vcHRpb25zJyk7XG4gICAgaWYgKGRyb3Bkb3duT3B0aW9ucy5zdHlsZS5kaXNwbGF5ICE9PSAnZmxleCcpIHtcbiAgICAgIGRpc3BsYXlEcm9wZG93bk9wdGlvbnMoZHJvcGRvd25PcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGlkZURyb3Bkb3duT3B0aW9ucyhkcm9wZG93bk9wdGlvbnMpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkaXNwbGF5Q2hhbXBpb25Nb2RhbCA9IGFzeW5jIChjaGFtcGlvbklkKSA9PiB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgICBjb25zdCBsYXRlc3RWZXJzaW9uID0gYXdhaXQgZ2V0TGF0ZXN0VmVyc2lvbigpO1xuICAgIGNvbnN0IGNoYW1waW9uRGV0YWlscyA9IGF3YWl0IGdldENoYW1waW9uRGV0YWlscyhjaGFtcGlvbklkLCBsYXRlc3RWZXJzaW9uKTtcblxuICAgIGNvbnN0IGNoYW1waW9uU3RhdHMgPSBhd2FpdCBnZXRDaGFtcGlvblN0YXRzKGNoYW1waW9uSWQpO1xuXG4gICAgY29uc3Qgc2tpbkltYWdlc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5za2luLWltYWdlcy1jb250YWluZXInKTtcbiAgICAvKlxuICAgICAgcHVycG9zZSBvZiB0aGUgaWYgc3RhdGVtZW50IGlzIHRvIHByZXZlbnQgc3BhbSBjbGlja3MgZnJvbSByZW5kZXJpbmdcbiAgICAgIGR1cGxpY2F0ZSBjb250ZW50IG9udG8gdGhlIGNoYW1waW9uIG1vZGFsLlxuICAgICovXG4gICAgaWYgKCFza2luSW1hZ2VzQ29udGFpbmVyKSB7XG4gICAgICBjaGFtcGlvbkRldGFpbHNNb2RhbChjaGFtcGlvbkRldGFpbHMpO1xuICAgICAgY2hhbXBpb25TdGF0c01vZGFsKGNoYW1waW9uRGV0YWlscywgY2hhbXBpb25TdGF0cywgbGF0ZXN0VmVyc2lvbik7XG4gICAgICBjaGFtcGlvblNraW5zTW9kYWwoY2hhbXBpb25EZXRhaWxzKTtcbiAgICB9XG5cbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBDaGFtcGlvbk1vZGFsQ29udHJvbGxlci5tb2RhbENoYW5nZUxpc3RlbmVycygpO1xuICB9O1xuXG4gIGNvbnN0IHNlbGVjdExhbmVGaWx0ZXJPcHRpb24gPSAoY2xpY2tlZExhbmVPcHRpb24pID0+IHtcbiAgICBjb25zdCBjaGFtcGlvbnNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW1waW9ucy1zZWN0aW9uJyk7XG4gICAgY29uc3QgYWN0aXZlTGFuZU9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItb3B0aW9uLmFjdGl2ZScpO1xuICAgIGlmIChjbGlja2VkTGFuZU9wdGlvbiA9PT0gYWN0aXZlTGFuZU9wdGlvbiB8fCBjaGFtcGlvbnNTZWN0aW9uLnN0eWxlLnZpc2liaWxpdHkgPT09ICdoaWRkZW4nKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGFjdGl2ZUxhbmVPcHRpb24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgY2xpY2tlZExhbmVPcHRpb24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBjaGVja0xhbmVGaWx0ZXJPcHRpb24gPSBhc3luYyAoYWxsQ2hhbXBpb25TdGF0cykgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZUxhbmVPcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLW9wdGlvbi5hY3RpdmUnKTtcbiAgICBjb25zdCBsYW5lTmFtZSA9IGFjdGl2ZUxhbmVPcHRpb24uY2xhc3NMaXN0WzBdO1xuICAgIGF3YWl0IENoYW1waW9uRmlsdGVyLmZpbHRlckJ5TGFuZShsYW5lTmFtZSwgYWxsQ2hhbXBpb25TdGF0cyk7XG4gIH07XG5cbiAgY29uc3QgY2hlY2tTb3J0aW5nT3B0aW9uID0gKGFsbENoYW1waW9uU3RhdHMpID0+IHtcbiAgICBjb25zdCBhY3RpdmVTb3J0aW5nT3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNvcnQuYWN0aXZlJyk7XG4gICAgaWYgKGFjdGl2ZVNvcnRpbmdPcHRpb24gPT09IG51bGwpIHtcbiAgICAgIFNvcnRDaGFtcGlvbnMuc29ydEJ5RGVmYXVsdE9yZGVyKGFsbENoYW1waW9uU3RhdHMpO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuZnJvbShhY3RpdmVTb3J0aW5nT3B0aW9uLmNsYXNzTGlzdCkuaW5jbHVkZXMoJ3dpbnJhdGUnKSkge1xuICAgICAgU29ydENoYW1waW9ucy5zb3J0Q2hhbXBpb25zQnlXaW5yYXRlKGFsbENoYW1waW9uU3RhdHMpO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuZnJvbShhY3RpdmVTb3J0aW5nT3B0aW9uLmNsYXNzTGlzdCkuaW5jbHVkZXMoJ3BpY2tyYXRlJykpIHtcbiAgICAgIFNvcnRDaGFtcGlvbnMuc29ydENoYW1waW9uc0J5UGlja3JhdGUoYWxsQ2hhbXBpb25TdGF0cyk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5mcm9tKGFjdGl2ZVNvcnRpbmdPcHRpb24uY2xhc3NMaXN0KS5pbmNsdWRlcygnZGFtYWdlJykpIHtcbiAgICAgIFNvcnRDaGFtcGlvbnMuc29ydENoYW1waW9uc0J5RGFtYWdlRG9uZShhbGxDaGFtcGlvblN0YXRzKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2hlY2tBY3RpdmVSb2xlT3B0aW9ucyA9IChhbGxDaGFtcGlvbkRldGFpbHMpID0+IHtcbiAgICBjb25zdCBhY3RpdmVSb2xlT3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yb2xlLmFjdGl2ZScpO1xuICAgIGlmIChhY3RpdmVSb2xlT3B0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgYWN0aXZlUm9sZXMgPSBBcnJheS5mcm9tKGFjdGl2ZVJvbGVPcHRpb25zKS5tYXAoKGFjdGl2ZVJvbGVPcHRpb24pID0+IHtcbiAgICAgIGNvbnN0IGFjdGl2ZVJvbGUgPSBhY3RpdmVSb2xlT3B0aW9uLmNsYXNzTGlzdFswXTtcbiAgICAgIHJldHVybiBhY3RpdmVSb2xlO1xuICAgIH0pO1xuICAgIENoYW1waW9uRmlsdGVyLmZpbHRlckJ5Um9sZShhY3RpdmVSb2xlcywgYWxsQ2hhbXBpb25EZXRhaWxzKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBjaGVja0FjdGl2ZURpZmZpY3VsdHlPcHRpb25zID0gKGFsbENoYW1waW9uRGV0YWlscykgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZURpZmZpY3VsdHlPcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRpZmZpY3VsdHkuYWN0aXZlJyk7XG4gICAgaWYgKGFjdGl2ZURpZmZpY3VsdHlPcHRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBhY3RpdmVEaWZmaWN1bHRpZXMgPSBBcnJheS5mcm9tKGFjdGl2ZURpZmZpY3VsdHlPcHRpb25zKS5tYXAoKGFjdGl2ZURpZmZpY3VsdHlPcHRpb24pID0+IHtcbiAgICAgIGNvbnN0IGFjdGl2ZURpZmZpY3VsdHkgPSBhY3RpdmVEaWZmaWN1bHR5T3B0aW9uLmNsYXNzTGlzdFswXTtcbiAgICAgIHJldHVybiBhY3RpdmVEaWZmaWN1bHR5O1xuICAgIH0pO1xuICAgIENoYW1waW9uRmlsdGVyLmZpbHRlckJ5RGlmZmljdWx0eShhY3RpdmVEaWZmaWN1bHRpZXMsIGFsbENoYW1waW9uRGV0YWlscyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3Qgc2VsZWN0TXVsdGlEcm9wZG93bk9wdGlvbiA9IChkcm9wZG93bk9wdGlvbikgPT4ge1xuICAgIGRyb3Bkb3duT3B0aW9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9O1xuXG4gIGNvbnN0IGRlc2VsZWN0RHJvcGRvd25PcHRpb24gPSAoZHJvcGRvd25PcHRpb24pID0+IHtcbiAgICBkcm9wZG93bk9wdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVEcm9wZG93bk9wdGlvbiA9IChkcm9wZG93bk9wdGlvbikgPT4ge1xuICAgIGlmICghQXJyYXkuZnJvbShkcm9wZG93bk9wdGlvbi5jbGFzc0xpc3QpLmluY2x1ZGVzKCdhY3RpdmUnKSkge1xuICAgICAgc2VsZWN0TXVsdGlEcm9wZG93bk9wdGlvbihkcm9wZG93bk9wdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlc2VsZWN0RHJvcGRvd25PcHRpb24oZHJvcGRvd25PcHRpb24pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZWxlY3RTaW5nbGVEcm9wZG93bk9wdGlvbiA9IChkcm9wZG93bk9wdGlvbikgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZURyb3Bkb3duT3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpbmdsZS1zZWxlY3QuYWN0aXZlJyk7XG4gICAgaWYgKGFjdGl2ZURyb3Bkb3duT3B0aW9uID09PSBudWxsKSB7XG4gICAgICBkcm9wZG93bk9wdGlvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGFjdGl2ZURyb3Bkb3duT3B0aW9uID09PSBkcm9wZG93bk9wdGlvbikge1xuICAgICAgZGVzZWxlY3REcm9wZG93bk9wdGlvbihkcm9wZG93bk9wdGlvbik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGFjdGl2ZURyb3Bkb3duT3B0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIGRyb3Bkb3duT3B0aW9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9O1xuXG4gIGNvbnN0IHJlZGlyZWN0VG9Gcm9udFBhZ2UgPSAoKSA9PiB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnaW5kZXguaHRtbCc7XG4gIH07XG5cbiAgY29uc3QgY2hhbXBpb25zUGFnZUNsaWNrRXZlbnRzID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgLyogSGVscGVyIGZ1bmN0aW9ucyBmb3IgY2xpY2sgZXZlbnRzICovXG4gICAgY29uc3QgY2hlY2tPcHRpb25zID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgYWxsQ2hhbXBpb25TdGF0cyA9IGF3YWl0IGdldEFsbENoYW1waW9uU3RhdHMoKTtcbiAgICAgIGNvbnN0IGFsbENoYW1waW9uRGV0YWlscyA9IGF3YWl0IGdldEFsbENoYW1waW9uRGV0YWlscygpO1xuICAgICAgYXdhaXQgY2hlY2tMYW5lRmlsdGVyT3B0aW9uKGFsbENoYW1waW9uU3RhdHMpO1xuICAgICAgY2hlY2tTb3J0aW5nT3B0aW9uKGFsbENoYW1waW9uU3RhdHMpO1xuICAgICAgY2hlY2tBY3RpdmVSb2xlT3B0aW9ucyhhbGxDaGFtcGlvbkRldGFpbHMpO1xuICAgICAgY2hlY2tBY3RpdmVEaWZmaWN1bHR5T3B0aW9ucyhhbGxDaGFtcGlvbkRldGFpbHMpO1xuICAgIH07XG5cbiAgICBjb25zdCBoaWRlQ2hhbXBpb25zU2VjdGlvbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGNoYW1waW9uc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb25zLXNlY3Rpb24nKTtcbiAgICAgIGNoYW1waW9uc1NlY3Rpb24uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIH07XG5cbiAgICBjb25zdCBzaG93Q2hhbXBpb25zU2VjdGlvbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGNoYW1waW9uc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb25zLXNlY3Rpb24nKTtcbiAgICAgIGNoYW1waW9uc1NlY3Rpb24uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICB9O1xuXG4gICAgY29uc3QgcmVtb3ZlQ2hhbXBpb25zUGFnZUxpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgY29uc3QgY2hhbXBpb25zUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGFtcGlvbnMtcGFnZScpO1xuICAgICAgY2hhbXBpb25zUGFnZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW1waW9uc1BhZ2VDbGlja0V2ZW50cyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZENoYW1waW9uc1BhZ2VMaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGNoYW1waW9uc1BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hhbXBpb25zLXBhZ2UnKTtcbiAgICAgIGNoYW1waW9uc1BhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFtcGlvbnNQYWdlQ2xpY2tFdmVudHMpO1xuICAgIH07XG5cbiAgICBjb25zdCBzaG93TG9hZGVyID0gKCkgPT4ge1xuICAgICAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlcicpO1xuICAgICAgbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH07XG5cbiAgICBjb25zdCBoaWRlTG9hZGVyID0gKCkgPT4ge1xuICAgICAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlcicpO1xuICAgICAgbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfTtcblxuICAgIGNvbnN0IGZpbHRlckFuZFNvcnRDaGFtcGlvbnNTZWN0aW9uID0gYXN5bmMgKHdhaXRUaW1lKSA9PiB7XG4gICAgICBoaWRlQ2hhbXBpb25zU2VjdGlvbigpO1xuICAgICAgc2hvd0xvYWRlcigpO1xuICAgICAgcmVtb3ZlQ2hhbXBpb25zUGFnZUxpc3RlbmVyKCk7XG4gICAgICBhd2FpdCBjaGVja09wdGlvbnMoKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzaG93Q2hhbXBpb25zU2VjdGlvbigpO1xuICAgICAgICBoaWRlTG9hZGVyKCk7XG4gICAgICB9LCB3YWl0VGltZSk7XG4gICAgICBhZGRDaGFtcGlvbnNQYWdlTGlzdGVuZXIoKTtcbiAgICB9O1xuXG4gICAgLyogY2xpY2sgZXZlbnQgcmVzcG9uc2VzICovXG4gICAgaWYgKEFycmF5LmZyb20oZXZlbnQudGFyZ2V0LmNsYXNzTGlzdCkuaW5jbHVkZXMoJ2Ryb3Bkb3duLWJ0bicpKSB7XG4gICAgICBkcm9wZG93bk9wdGlvbnNUb2dnbGUoZXZlbnQudGFyZ2V0KTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lID09PSAnY2hhbXBpb24tY29udGFpbmVyIHNob3duJykge1xuICAgICAgZGlzcGxheUNoYW1waW9uTW9kYWwoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pZCk7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lID09PSAnY2hhbXBpb24tY29udGFpbmVyIHNob3duJykge1xuICAgICAgZGlzcGxheUNoYW1waW9uTW9kYWwoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5kYXRhc2V0LmlkKTtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuZnJvbShldmVudC50YXJnZXQuY2xhc3NMaXN0KS5pbmNsdWRlcygnbXVsdGktc2VsZWN0JykpIHtcbiAgICAgIHRvZ2dsZURyb3Bkb3duT3B0aW9uKGV2ZW50LnRhcmdldCk7XG4gICAgICBmaWx0ZXJBbmRTb3J0Q2hhbXBpb25zU2VjdGlvbig2MDApO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5mcm9tKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QpLmluY2x1ZGVzKCdzaW5nbGUtc2VsZWN0JykpIHtcbiAgICAgIHNlbGVjdFNpbmdsZURyb3Bkb3duT3B0aW9uKGV2ZW50LnRhcmdldCk7XG4gICAgICBmaWx0ZXJBbmRTb3J0Q2hhbXBpb25zU2VjdGlvbigxMDAwKTtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuZnJvbShldmVudC50YXJnZXQuY2xhc3NMaXN0KS5pbmNsdWRlcygnaGVhZGVyLW9wdGlvbicpKSB7XG4gICAgICBzZWxlY3RMYW5lRmlsdGVyT3B0aW9uKGV2ZW50LnRhcmdldCk7XG4gICAgICBmaWx0ZXJBbmRTb3J0Q2hhbXBpb25zU2VjdGlvbig2MDApO1xuICAgIH1cblxuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnYXBwLW5hbWUnKSB7XG4gICAgICByZWRpcmVjdFRvRnJvbnRQYWdlKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNoYW1waW9uc1BhZ2VLZXlFdmVudHMgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IGFjdGl2ZUVsZW1lbnQgfSA9IGRvY3VtZW50O1xuXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQgJiYgYWN0aXZlRWxlbWVudC5jbGFzc05hbWUgPT09ICdjaGFtcGlvbi1jb250YWluZXIgc2hvd24nKSB7XG4gICAgICAgIGRpc3BsYXlDaGFtcGlvbk1vZGFsKGFjdGl2ZUVsZW1lbnQuZGF0YXNldC5pZCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhY3RpdmVFbGVtZW50ICYmIGFjdGl2ZUVsZW1lbnQuY2xhc3NOYW1lID09PSAnY2hhbXBpb24taW1nJykge1xuICAgICAgICBkaXNwbGF5Q2hhbXBpb25Nb2RhbChhY3RpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pZCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNoYW1waW9uc1BhZ2VMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgY2hhbXBpb25zUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGFtcGlvbnMtcGFnZScpO1xuICAgIGNoYW1waW9uc1BhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFtcGlvbnNQYWdlQ2xpY2tFdmVudHMpO1xuICAgIGNoYW1waW9uc1BhZ2UuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGNoYW1waW9uc1BhZ2VLZXlFdmVudHMpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY2hhbXBpb25zUGFnZUxpc3RlbmVycyxcbiAgICBkaXNwbGF5Q2hhbXBpb25Nb2RhbCxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IENoYW1waW9uc1BhZ2VDb250cm9sbGVyO1xuIiwiaW1wb3J0IGdldENoYW1waW9uU3RhdHMgZnJvbSAnLi4vY2hhbXBpb25EYXRhL2NoYW1waW9uU3RhdHMnO1xuaW1wb3J0IHsgY3JlYXRlQ2hhbXBpb25Db250YWluZXIgfSBmcm9tICcuLi90ZW1wbGF0ZXMvcmVuZGVySGVscGVycyc7XG5cbmNvbnN0IENoYW1waW9uRmlsdGVyID0gKCgpID0+IHtcbiAgY29uc3QgcmVuZGVyQWxsQ2hhbXBpb25zID0gYXN5bmMgKGFsbENoYW1waW9uU3RhdHMpID0+IHtcbiAgICBjb25zdCBjaGFtcGlvbnNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW1waW9ucy1zZWN0aW9uJyk7XG4gICAgYWxsQ2hhbXBpb25TdGF0cy5mb3JFYWNoKChjaGFtcGlvbikgPT4ge1xuICAgICAgY3JlYXRlQ2hhbXBpb25Db250YWluZXIoY2hhbXBpb24sIGNoYW1waW9uc1NlY3Rpb24pO1xuICAgIH0pO1xuICAgIHJldHVybiBjaGFtcGlvbnNTZWN0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyQ2hhbXBpb25zU2VjdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBjaGFtcGlvbnNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW1waW9ucy1zZWN0aW9uJyk7XG4gICAgY2hhbXBpb25zU2VjdGlvbi50ZXh0Q29udGVudCA9ICcnO1xuICB9O1xuXG4gIGNvbnN0IHNob3dDaGFtcGlvbiA9IChjaGFtcGlvbikgPT4ge1xuICAgIGNoYW1waW9uLmNsYXNzTGlzdC5hZGQoJ3Nob3duJyk7XG4gICAgY2hhbXBpb24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIH07XG5cbiAgY29uc3QgaGlkZUNoYW1waW9uID0gKGNoYW1waW9uKSA9PiB7XG4gICAgY2hhbXBpb24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgY2hhbXBpb24uY2xhc3NMaXN0LnJlbW92ZSgnc2hvd24nKTtcbiAgfTtcblxuICBjb25zdCBmaWx0ZXJCeUxhbmUgPSBhc3luYyAoY2xpY2tlZExhbmUsIGFsbENoYW1waW9uU3RhdHMpID0+IHtcbiAgICBjbGVhckNoYW1waW9uc1NlY3Rpb24oKTtcbiAgICBjb25zdCBjaGFtcGlvbnNTZWN0aW9uID0gYXdhaXQgcmVuZGVyQWxsQ2hhbXBpb25zKGFsbENoYW1waW9uU3RhdHMpO1xuICAgIGNoYW1waW9uc1NlY3Rpb24uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIGNvbnN0IGFsbENoYW1waW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFtcGlvbi1jb250YWluZXInKTtcbiAgICBpZiAoY2xpY2tlZExhbmUgPT09ICdhbGwnKSB7XG4gICAgICBhbGxDaGFtcGlvbnMuZm9yRWFjaCgoY2hhbXBpb24pID0+IHtcbiAgICAgICAgc2hvd0NoYW1waW9uKGNoYW1waW9uKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZXN1bHRzID0gW107XG4gICAgICBhbGxDaGFtcGlvbnMuZm9yRWFjaCgoY2hhbXBpb24pID0+IHtcbiAgICAgICAgY29uc3QgY2hhbXBpb25JZCA9IGNoYW1waW9uLmRhdGFzZXQuaWQ7XG4gICAgICAgIHJlc3VsdHMucHVzaChnZXRDaGFtcGlvblN0YXRzKGNoYW1waW9uSWQpKTtcbiAgICAgIH0pO1xuICAgICAgY29uc3QgY2hhbXBpb25TdGF0cyA9IGF3YWl0IFByb21pc2UuYWxsKHJlc3VsdHMpO1xuICAgICAgY2hhbXBpb25TdGF0cy5mb3JFYWNoKChjaGFtcGlvbikgPT4ge1xuICAgICAgICBjb25zdCBjaGFtcGlvbkxhbmUgPSBjaGFtcGlvbi5sYW5lO1xuICAgICAgICBjb25zdCBjaGFtcGlvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD0ke2NoYW1waW9uLmNoYW1waW9uSWR9XWApO1xuICAgICAgICBpZiAoY2hhbXBpb25MYW5lLnRvTG93ZXJDYXNlKCkgIT09IGNsaWNrZWRMYW5lKSB7XG4gICAgICAgICAgaGlkZUNoYW1waW9uKGNoYW1waW9uRWxlbWVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2hvd0NoYW1waW9uKGNoYW1waW9uRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBmaWx0ZXJCeVJvbGUgPSAoYWN0aXZlUm9sZXMsIGFsbENoYW1waW9uRGV0YWlscykgPT4ge1xuICAgIGNvbnN0IGNoYW1waW9uRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhbXBpb24tY29udGFpbmVyJyk7XG5cbiAgICBjaGFtcGlvbkVsZW1lbnRzLmZvckVhY2goKGNoYW1waW9uKSA9PiB7XG4gICAgICBsZXQgcm9sZU1hdGNoRm91bmQgPSBmYWxzZTtcbiAgICAgIGFjdGl2ZVJvbGVzLmZvckVhY2goKHJvbGUpID0+IHtcbiAgICAgICAgY29uc3QgY2hhbXBpb25Sb2xlcyA9IGFsbENoYW1waW9uRGV0YWlsc1tjaGFtcGlvbi5kYXRhc2V0LmlkXS50YWdzO1xuICAgICAgICBjaGFtcGlvblJvbGVzLmZvckVhY2goKGNoYW1waW9uUm9sZSkgPT4ge1xuICAgICAgICAgIGlmIChjaGFtcGlvblJvbGUudG9Mb3dlckNhc2UoKSA9PT0gcm9sZSkge1xuICAgICAgICAgICAgcm9sZU1hdGNoRm91bmQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIGlmICghcm9sZU1hdGNoRm91bmQpIHtcbiAgICAgICAgaGlkZUNoYW1waW9uKGNoYW1waW9uKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBjYXRlZ29yaXNlRGlmZmljdWx0eU51bSA9IChkaWZmaWN1bHR5TnVtKSA9PiB7XG4gICAgaWYgKGRpZmZpY3VsdHlOdW0gPD0gMykge1xuICAgICAgcmV0dXJuICdsb3cnO1xuICAgIH1cblxuICAgIGlmIChkaWZmaWN1bHR5TnVtIDw9IDYpIHtcbiAgICAgIHJldHVybiAnbWVkaXVtJztcbiAgICB9XG5cbiAgICByZXR1cm4gJ2hpZ2gnO1xuICB9O1xuXG4gIGNvbnN0IGZpbHRlckJ5RGlmZmljdWx0eSA9IGFzeW5jIChhY3RpdmVEaWZmaWN1bHRpZXMsIGFsbENoYW1waW9uRGV0YWlscykgPT4ge1xuICAgIGNvbnN0IGNoYW1waW9uRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhbXBpb24tY29udGFpbmVyJyk7XG5cbiAgICBjaGFtcGlvbkVsZW1lbnRzLmZvckVhY2goKGNoYW1waW9uKSA9PiB7XG4gICAgICBsZXQgZGlmZmljdWx0eU1hdGNoRm91bmQgPSBmYWxzZTtcbiAgICAgIGFjdGl2ZURpZmZpY3VsdGllcy5mb3JFYWNoKChkaWZmaWN1bHR5KSA9PiB7XG4gICAgICAgIGNvbnN0IGNoYW1waW9uRGlmZmljdWx0eU51bSA9IGFsbENoYW1waW9uRGV0YWlsc1tjaGFtcGlvbi5kYXRhc2V0LmlkXS5pbmZvLmRpZmZpY3VsdHk7XG4gICAgICAgIGNvbnN0IGNoYW1waW9uRGlmZmljdWx0eSA9IGNhdGVnb3Jpc2VEaWZmaWN1bHR5TnVtKGNoYW1waW9uRGlmZmljdWx0eU51bSk7XG5cbiAgICAgICAgaWYgKGRpZmZpY3VsdHkudG9Mb3dlckNhc2UoKSA9PT0gY2hhbXBpb25EaWZmaWN1bHR5KSB7XG4gICAgICAgICAgZGlmZmljdWx0eU1hdGNoRm91bmQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmICghZGlmZmljdWx0eU1hdGNoRm91bmQpIHtcbiAgICAgICAgaGlkZUNoYW1waW9uKGNoYW1waW9uKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGZpbHRlckJ5TGFuZSxcbiAgICBmaWx0ZXJCeVJvbGUsXG4gICAgZmlsdGVyQnlEaWZmaWN1bHR5LFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhbXBpb25GaWx0ZXI7XG4iLCJpbXBvcnQgQ2hhbXBpb25zUGFnZUNvbnRyb2xsZXIgZnJvbSAnLi9jaGFtcGlvbnNQYWdlQ29udHJvbGxlcic7XG5cbmNvbnN0IFNlYXJjaGJhckNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBjb25zdCBzaG93QXV0b0NvbXBsZXRlTmFtZXMgPSAoc2VhcmNoQ29udGFpbmVyKSA9PiB7XG4gICAgY29uc3QgYXV0b0NvbXBsZXRlTmFtZXMgPSBzZWFyY2hDb250YWluZXIucXVlcnlTZWxlY3RvcignLmF1dG8tY29tcGxldGUtbmFtZXMnKTtcbiAgICBhdXRvQ29tcGxldGVOYW1lcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfTtcblxuICBjb25zdCBoaWRlQXV0b0NvbXBsZXRlTmFtZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgYXV0b0NvbXBsZXRlTmFtZUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmF1dG8tY29tcGxldGUtbmFtZXMnKTtcbiAgICBhdXRvQ29tcGxldGVOYW1lRWxlbWVudHMuZm9yRWFjaCgoYXV0b0NvbXBsZXRlTmFtZUVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGF1dG9Db21wbGV0ZU5hbWVzID0gYXV0b0NvbXBsZXRlTmFtZUVsZW1lbnQ7XG4gICAgICBhdXRvQ29tcGxldGVOYW1lcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHNlYXJjaGJhckZvY3VzSW5FdmVudCA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnc2VhcmNoJykge1xuICAgICAgY29uc3Qgc2VhcmNoQ29udGFpbmVyID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICBzaG93QXV0b0NvbXBsZXRlTmFtZXMoc2VhcmNoQ29udGFpbmVyKTtcbiAgICAgIGV2ZW50LnRhcmdldC5mb2N1cygpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZWFyY2hiYXJGb2N1c291dEV2ZW50ID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKCFldmVudC5yZWxhdGVkVGFyZ2V0IHx8IChldmVudC5yZWxhdGVkVGFyZ2V0LmNsYXNzTmFtZSAhPT0gJ2F1dG8tY29tcGxldGUtbmFtZS13cmFwcGVyJyAmJiBldmVudC5yZWxhdGVkVGFyZ2V0LmNsYXNzTmFtZSAhPT0gJ3NlYXJjaCcpKSB7XG4gICAgICBoaWRlQXV0b0NvbXBsZXRlTmFtZXMoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2VhcmNoQmFySW5wdXRFdmVudCA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnc2VhcmNoJykge1xuICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgIGNvbnN0IGF1dG9Db21wbGV0ZU5hbWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmF1dG8tY29tcGxldGUtbmFtZScpO1xuICAgICAgYXV0b0NvbXBsZXRlTmFtZXMuZm9yRWFjaCgoYXV0b0NvbXBsZXRlTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBuYW1lID0gYXV0b0NvbXBsZXRlTmFtZTtcbiAgICAgICAgaWYgKG5hbWUuaWQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgICAgbmFtZS5wYXJlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5hbWUucGFyZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2VhcmNoYmFyS2V5ZG93bkV2ZW50cyA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGlmICgoZXZlbnQua2V5ID09PSAnQXJyb3dEb3duJyB8fCBldmVudC5rZXkgPT09ICdBcnJvd1VwJykgJiYgZXZlbnQudGFyZ2V0ICE9PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykpIHtcbiAgICAgIGxldCB7IGFjdGl2ZUVsZW1lbnQgfSA9IGRvY3VtZW50O1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgbGV0IGdvVG9TdGFydDtcbiAgICAgIGNvbnN0IGFjdGlvbiA9IHtcbiAgICAgICAgQXJyb3dVcDogJ3ByZXZpb3VzJywgQXJyb3dEb3duOiAnbmV4dCcsXG4gICAgICB9O1xuXG4gICAgICBpZiAoYWN0aXZlRWxlbWVudC5jbGFzc05hbWUgPT09ICdzZWFyY2gnICYmIGV2ZW50LmtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgICAgYWN0aXZlRWxlbWVudCA9IGFjdGl2ZUVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICAvKiBTa2lwcyBhdXRvY29tcGxldGUgbmFtZXMgd2hpY2ggYXJlIGN1cnJlbnRseSBub3QgZGlzcGxheWVkICovXG4gICAgICAgIHdoaWxlIChhY3RpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgPSBhY3RpdmVFbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgfVxuICAgICAgICBhY3RpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY3RpdmVFbGVtZW50ID0gYWN0aXZlRWxlbWVudFtgJHthY3Rpb25bZXZlbnQua2V5XX1FbGVtZW50U2libGluZ2BdO1xuICAgICAgICB3aGlsZSAoYWN0aXZlRWxlbWVudCAmJiBhY3RpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgPSBhY3RpdmVFbGVtZW50W2Ake2FjdGlvbltldmVudC5rZXldfUVsZW1lbnRTaWJsaW5nYF07XG4gICAgICAgIH1cbiAgICAgICAgLyogQ2hlY2tzIHdoaWNoIHNlYXJjaCBiYXIgZHJvcGRvd24gaXMgY3VycmVudGx5IGRpc3BsYXllZCAqL1xuICAgICAgICBjb25zdCBhdXRvQ29tcGxldGVOYW1lRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXV0by1jb21wbGV0ZS1uYW1lcycpO1xuICAgICAgICBjb25zdCBhdXRvQ29tcGxldGVOYW1lcyA9IEFycmF5LmZyb20oYXV0b0NvbXBsZXRlTmFtZUVsZW1lbnRzKS5maWx0ZXIoXG4gICAgICAgICAgKGF1dG9Db21wbGV0ZU5hbWVFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc1Nob3dpbmcgPSBhdXRvQ29tcGxldGVOYW1lRWxlbWVudC5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snO1xuICAgICAgICAgICAgcmV0dXJuIGlzU2hvd2luZztcbiAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgICAgICBpZiAoYXV0b0NvbXBsZXRlTmFtZXNbMF0gIT09IHVuZGVmaW5lZCAmJiAhYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgIC8qIFJldHVybnMgdG8gdGhlIHN0YXJ0IG9yIHRoZSBlbmQgb2YgdGhlIGRyb3Bkb3duIHdoZW4gYW4gYXJyb3cga2V5IGlzIHByZXNzZWQgKi9cbiAgICAgICAgICBnb1RvU3RhcnQgPSBhY3Rpb25bZXZlbnQua2V5XSA9PT0gJ25leHQnIHx8IGV2ZW50LmtleSA9PT0gJ0hvbWUnO1xuICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgPSBhdXRvQ29tcGxldGVOYW1lc1swXS5jaGlsZHJlbltcbiAgICAgICAgICAgIGdvVG9TdGFydCA/IDAgOiBhdXRvQ29tcGxldGVOYW1lc1swXS5jaGlsZHJlbi5sZW5ndGggLSAxXG4gICAgICAgICAgXTtcbiAgICAgICAgICB3aGlsZSAoYWN0aXZlRWxlbWVudCAmJiBhY3RpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgICAgYWN0aXZlRWxlbWVudCA9IGFjdGl2ZUVsZW1lbnRbYCR7YWN0aW9uW2V2ZW50LmtleV19RWxlbWVudFNpYmxpbmdgXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICBhY3RpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBjb25zdCB7IGFjdGl2ZUVsZW1lbnQgfSA9IGRvY3VtZW50O1xuICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQgJiYgYWN0aXZlRWxlbWVudC5jbGFzc05hbWUgPT09ICdhdXRvLWNvbXBsZXRlLW5hbWUtd3JhcHBlcicpIHtcbiAgICAgICAgY29uc3Qgc2VhcmNoQ29udGFpbmVyQ2xhc3NOYW1lID0gYWN0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0WzFdO1xuICAgICAgICBjb25zdCBhdXRvQ29tcGxldGVOYW1lID0gYWN0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcblxuICAgICAgICAvKiBDaGVja3Mgd2hpY2ggcGFnZSB0aGUgc2VhcmNoIGJhciBpcyBvbiAqL1xuICAgICAgICBpZiAoc2VhcmNoQ29udGFpbmVyQ2xhc3NOYW1lID09PSAnZGVza3RvcC1zZWFyY2gtY29udGFpbmVyJ1xuICAgICAgICAgICAgfHwgc2VhcmNoQ29udGFpbmVyQ2xhc3NOYW1lID09PSAnbW9iaWxlLXNlYXJjaC1jb250YWluZXInKSB7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NoYW1waW9uSWQnLCBhdXRvQ29tcGxldGVOYW1lLmRhdGFzZXQuY2hhbXBpb25JZCk7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnY2hhbXBpb25zLmh0bWwnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGF3YWl0IENoYW1waW9uc1BhZ2VDb250cm9sbGVyLmRpc3BsYXlDaGFtcGlvbk1vZGFsKGF1dG9Db21wbGV0ZU5hbWUuZGF0YXNldC5jaGFtcGlvbklkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZWFyY2hiYXJDbGlja0V2ZW50cyA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGNvbnN0IGNsaWNrQXV0b0NvbXBsZXRlTmFtZSA9IGFzeW5jIChzZWFyY2hDb250YWluZXJDbGFzc05hbWUsIGF1dG9Db21wbGV0ZU5hbWUpID0+IHtcbiAgICAgIGlmIChzZWFyY2hDb250YWluZXJDbGFzc05hbWUgPT09ICdkZXNrdG9wLXNlYXJjaC1jb250YWluZXInXG4gICAgICB8fCBzZWFyY2hDb250YWluZXJDbGFzc05hbWUgPT09ICdtb2JpbGUtc2VhcmNoLWNvbnRhaW5lcicpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NoYW1waW9uSWQnLCBhdXRvQ29tcGxldGVOYW1lLmRhdGFzZXQuY2hhbXBpb25JZCk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ2NoYW1waW9ucy5odG1sJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF3YWl0IENoYW1waW9uc1BhZ2VDb250cm9sbGVyLmRpc3BsYXlDaGFtcGlvbk1vZGFsKGF1dG9Db21wbGV0ZU5hbWUuZGF0YXNldC5jaGFtcGlvbklkKTtcbiAgICAgICAgY29uc3QgYXV0b0NvbXBsZXRlTmFtZUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmF1dG8tY29tcGxldGUtbmFtZXMnKTtcbiAgICAgICAgYXV0b0NvbXBsZXRlTmFtZUVsZW1lbnRzLmZvckVhY2goKGF1dG9Db21wbGV0ZU5hbWVFbGVtZW50KSA9PiB7XG4gICAgICAgICAgY29uc3QgYXV0b0NvbXBsZXRlTmFtZXMgPSBhdXRvQ29tcGxldGVOYW1lRWxlbWVudDtcbiAgICAgICAgICBhdXRvQ29tcGxldGVOYW1lcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IHNlYXJjaENvbnRhaW5lciA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdhdXRvLWNvbXBsZXRlLW5hbWUtd3JhcHBlcicpIHtcbiAgICAgIGNvbnN0IHNlYXJjaENvbnRhaW5lckNsYXNzTmFtZSA9IHNlYXJjaENvbnRhaW5lci5jbGFzc0xpc3RbMV07XG4gICAgICBjb25zdCBhdXRvQ29tcGxldGVOYW1lID0gZXZlbnQudGFyZ2V0LmZpcnN0Q2hpbGQ7XG4gICAgICBjbGlja0F1dG9Db21wbGV0ZU5hbWUoc2VhcmNoQ29udGFpbmVyQ2xhc3NOYW1lLCBhdXRvQ29tcGxldGVOYW1lKTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2F1dG8tY29tcGxldGUtbmFtZScpIHtcbiAgICAgIGNvbnN0IHNlYXJjaENvbnRhaW5lckNsYXNzTmFtZSA9IHNlYXJjaENvbnRhaW5lci5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdFsxXTtcbiAgICAgIGNvbnN0IGF1dG9Db21wbGV0ZU5hbWUgPSBldmVudC50YXJnZXQ7XG4gICAgICBjbGlja0F1dG9Db21wbGV0ZU5hbWUoc2VhcmNoQ29udGFpbmVyQ2xhc3NOYW1lLCBhdXRvQ29tcGxldGVOYW1lKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2VhcmNoQ29udGFpbmVyTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIC8vIGNvbnN0IHNlYXJjaENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtY29udGFpbmVyJyk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIHNlYXJjaGJhckZvY3VzSW5FdmVudCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBzZWFyY2hiYXJGb2N1c291dEV2ZW50KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHNlYXJjaEJhcklucHV0RXZlbnQpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBzZWFyY2hiYXJLZXlkb3duRXZlbnRzKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlYXJjaGJhckNsaWNrRXZlbnRzKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHNlYXJjaENvbnRhaW5lckxpc3RlbmVycyxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaGJhckNvbnRyb2xsZXI7XG4iLCIvLyBpbXBvcnQgeyBnZXRBbGxDaGFtcGlvblN0YXRzIH0gZnJvbSAnLi4vY2hhbXBpb25EYXRhL2dldEFsbENoYW1waW9ucyc7XG5pbXBvcnQgeyBjcmVhdGVDaGFtcGlvbkNvbnRhaW5lciB9IGZyb20gJy4uL3RlbXBsYXRlcy9yZW5kZXJIZWxwZXJzJztcblxuY29uc3QgU29ydENoYW1waW9ucyA9ICgoKSA9PiB7XG4gIGNvbnN0IGNsZWFyQ2hhbXBpb25zU2VjdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBjaGFtcGlvbnNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW1waW9ucy1zZWN0aW9uJyk7XG4gICAgY2hhbXBpb25zU2VjdGlvbi5zdHlsZS52aXNpYmxpdHkgPSAnaGlkZGVuJztcbiAgICBjaGFtcGlvbnNTZWN0aW9uLnRleHRDb250ZW50ID0gJyc7XG4gIH07XG5cbiAgY29uc3QgcmVjcmVhdGVDaGFtcGlvbnNTZWN0aW9uID0gKGNoYW1waW9ucykgPT4ge1xuICAgIGNvbnN0IGNoYW1waW9uc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb25zLXNlY3Rpb24nKTtcbiAgICBjaGFtcGlvbnMuZm9yRWFjaCgoY2hhbXBpb24pID0+IHtcbiAgICAgIGNyZWF0ZUNoYW1waW9uQ29udGFpbmVyKGNoYW1waW9uLCBjaGFtcGlvbnNTZWN0aW9uKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBmaWx0ZXJDaGFtcGlvbnMgPSAoYWxsQ2hhbXBpb25TdGF0cykgPT4ge1xuICAgIC8vIGNvbnN0IGFsbENoYW1waW9uU3RhdHMgPSBhd2FpdCBnZXRBbGxDaGFtcGlvblN0YXRzKCk7XG4gICAgY29uc3QgZmlsdGVyZWRDaGFtcGlvblN0YXRzID0gYWxsQ2hhbXBpb25TdGF0cy5maWx0ZXIoKGNoYW1waW9uU3RhdHMpID0+IHtcbiAgICAgIGNvbnN0IGNoYW1waW9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPSR7Y2hhbXBpb25TdGF0cy5pZH1dYCk7XG4gICAgICByZXR1cm4gY2hhbXBpb25FbGVtZW50LmNsYXNzTmFtZSA9PT0gJ2NoYW1waW9uLWNvbnRhaW5lciBzaG93bic7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmlsdGVyZWRDaGFtcGlvblN0YXRzO1xuICB9O1xuXG4gIGNvbnN0IHNvcnRDaGFtcGlvbnNCeVdpbnJhdGUgPSAoYWxsQ2hhbXBpb25TdGF0cykgPT4ge1xuICAgIGNvbnN0IGZpbHRlcmVkQ2hhbXBpb25TdGF0cyA9IGZpbHRlckNoYW1waW9ucyhhbGxDaGFtcGlvblN0YXRzKTtcbiAgICBjb25zdCBmaWx0ZXJlZENoYW1waW9uc1NvcnRlZCA9IGZpbHRlcmVkQ2hhbXBpb25TdGF0cy5zb3J0KChhLCBiKSA9PiBiLndpblJhdGUgLSBhLndpblJhdGUpO1xuICAgIGNsZWFyQ2hhbXBpb25zU2VjdGlvbigpO1xuICAgIHJlY3JlYXRlQ2hhbXBpb25zU2VjdGlvbihmaWx0ZXJlZENoYW1waW9uc1NvcnRlZCk7XG4gICAgcmV0dXJuIGZpbHRlcmVkQ2hhbXBpb25zU29ydGVkO1xuICB9O1xuXG4gIGNvbnN0IHNvcnRDaGFtcGlvbnNCeVBpY2tyYXRlID0gKGFsbENoYW1waW9uU3RhdHMpID0+IHtcbiAgICBjb25zdCBmaWx0ZXJlZENoYW1waW9uU3RhdHMgPSBmaWx0ZXJDaGFtcGlvbnMoYWxsQ2hhbXBpb25TdGF0cyk7XG4gICAgY29uc3QgZmlsdGVyZWRDaGFtcGlvbnNTb3J0ZWQgPSBmaWx0ZXJlZENoYW1waW9uU3RhdHMuc29ydCgoYSwgYikgPT4gYi5waWNrUmF0ZSAtIGEucGlja1JhdGUpO1xuICAgIGNsZWFyQ2hhbXBpb25zU2VjdGlvbigpO1xuICAgIHJlY3JlYXRlQ2hhbXBpb25zU2VjdGlvbihmaWx0ZXJlZENoYW1waW9uc1NvcnRlZCk7XG4gICAgcmV0dXJuIGZpbHRlcmVkQ2hhbXBpb25zU29ydGVkO1xuICB9O1xuXG4gIGNvbnN0IHNvcnRDaGFtcGlvbnNCeURhbWFnZURvbmUgPSAoYWxsQ2hhbXBpb25TdGF0cykgPT4ge1xuICAgIGNvbnN0IGZpbHRlcmVkQ2hhbXBpb25TdGF0cyA9IGZpbHRlckNoYW1waW9ucyhhbGxDaGFtcGlvblN0YXRzKTtcblxuICAgIGNvbnN0IGZpbHRlcmVkQ2hhbXBpb25zU29ydGVkID0gZmlsdGVyZWRDaGFtcGlvblN0YXRzLnNvcnQoXG4gICAgICAoYSwgYikgPT4gYi5kYW1hZ2VQZXJNYXRjaC50b3RhbERhbWFnZS52YWx1ZSAtIGEuZGFtYWdlUGVyTWF0Y2gudG90YWxEYW1hZ2UudmFsdWUsXG4gICAgKTtcbiAgICBjbGVhckNoYW1waW9uc1NlY3Rpb24oKTtcbiAgICByZWNyZWF0ZUNoYW1waW9uc1NlY3Rpb24oZmlsdGVyZWRDaGFtcGlvbnNTb3J0ZWQpO1xuICAgIHJldHVybiBmaWx0ZXJlZENoYW1waW9uc1NvcnRlZDtcbiAgfTtcblxuICBjb25zdCBzb3J0QnlEZWZhdWx0T3JkZXIgPSAoYWxsQ2hhbXBpb25TdGF0cykgPT4ge1xuICAgIC8vIGNvbnN0IGFsbENoYW1waW9uU3RhdHMgPSBhd2FpdCBnZXRBbGxDaGFtcGlvblN0YXRzKCk7XG4gICAgY29uc3QgZmlsdGVyZWRDaGFtcGlvblN0YXRzID0gYWxsQ2hhbXBpb25TdGF0cy5maWx0ZXIoKGNoYW1waW9uU3RhdHMpID0+IHtcbiAgICAgIGNvbnN0IGNoYW1waW9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPSR7Y2hhbXBpb25TdGF0cy5pZH1dYCk7XG4gICAgICBpZiAoY2hhbXBpb25FbGVtZW50ID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjaGFtcGlvbkVsZW1lbnQuY2xhc3NOYW1lID09PSAnY2hhbXBpb24tY29udGFpbmVyIHNob3duJztcbiAgICB9KTtcbiAgICBjbGVhckNoYW1waW9uc1NlY3Rpb24oKTtcbiAgICByZWNyZWF0ZUNoYW1waW9uc1NlY3Rpb24oZmlsdGVyZWRDaGFtcGlvblN0YXRzKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHNvcnRDaGFtcGlvbnNCeVdpbnJhdGUsXG4gICAgc29ydENoYW1waW9uc0J5UGlja3JhdGUsXG4gICAgc29ydENoYW1waW9uc0J5RGFtYWdlRG9uZSxcbiAgICBzb3J0QnlEZWZhdWx0T3JkZXIsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBTb3J0Q2hhbXBpb25zO1xuIiwiY29uc3QgZmV0Y2hDaGFtcGlvbkRldGFpbHMgPSBhc3luYyAoY2hhbXBpb25JZCwgbGF0ZXN0VmVyc2lvbikgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vJHtsYXRlc3RWZXJzaW9ufS9kYXRhL2VuX1VTL2NoYW1waW9uLyR7Y2hhbXBpb25JZH0uanNvbmAsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICBjb25zdCBjaGFtcGlvbnMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IGNoYW1waW9uRGV0YWlscyA9IGNoYW1waW9ucy5kYXRhW2NoYW1waW9uSWRdO1xuXG4gIHJldHVybiBjaGFtcGlvbkRldGFpbHM7XG59O1xuXG5jb25zdCBnZXRDaGFtcGlvblBhc3NpdmVzID0gKGNoYW1waW9uRGV0YWlscywgbGF0ZXN0VmVyc2lvbikgPT4ge1xuICBjb25zdCBwYXNzaXZlRGF0YSA9IGNoYW1waW9uRGV0YWlscy5wYXNzaXZlO1xuICBjb25zdCBwYXNzaXZlTmFtZSA9IHBhc3NpdmVEYXRhLm5hbWU7XG4gIGNvbnN0IHBhc3NpdmVEZXNjcmlwdGlvbiA9IHBhc3NpdmVEYXRhLmRlc2NyaXB0aW9uO1xuICBjb25zdCBwYXNzaXZlSWQgPSBwYXNzaXZlRGF0YS5pbWFnZS5mdWxsO1xuICBjb25zdCBwYXNzaXZlSW1nVXJsID0gYGh0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi8ke2xhdGVzdFZlcnNpb259L2ltZy9wYXNzaXZlLyR7cGFzc2l2ZUlkfWA7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXNzaXZlTmFtZSxcbiAgICBwYXNzaXZlRGVzY3JpcHRpb24sXG4gICAgcGFzc2l2ZUltZ1VybCxcbiAgfTtcbn07XG5cbmNvbnN0IGdldENoYW1waW9uU3BlbGxzID0gKGNoYW1waW9uRGV0YWlscywgbGF0ZXN0VmVyc2lvbikgPT4ge1xuICBjb25zdCBzcGVsbHNEYXRhID0gY2hhbXBpb25EZXRhaWxzLnNwZWxscztcbiAgY29uc3Qgc3BlbGxzID0gW107XG5cbiAgc3BlbGxzRGF0YS5mb3JFYWNoKChzcGVsbCkgPT4ge1xuICAgIGNvbnN0IHNwZWxsT2JqZWN0ID0ge1xuICAgICAgbmFtZTogc3BlbGwubmFtZSxcbiAgICAgIGlkOiBzcGVsbC5pZCxcbiAgICAgIGRlc2NyaXB0aW9uOiBzcGVsbC5kZXNjcmlwdGlvbixcbiAgICAgIGNvc3RCdXJuOiBzcGVsbC5jb3N0QnVybixcbiAgICAgIGNvc3RUeXBlOiBzcGVsbC5jb3N0VHlwZSxcbiAgICAgIGNvb2xkb3duOiBzcGVsbC5jb29sZG93bkJ1cm4sXG4gICAgICBpbWdVcmw6IGBodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vJHtsYXRlc3RWZXJzaW9ufS9pbWcvc3BlbGwvJHtzcGVsbC5pZH0ucG5nYCxcbiAgICB9O1xuICAgIHNwZWxscy5wdXNoKHNwZWxsT2JqZWN0KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHNwZWxscztcbn07XG5cbmNvbnN0IGdldENoYW1waW9uRGV0YWlscyA9IGFzeW5jIChjaGFtcGlvbklkLCBsYXRlc3RWZXJzaW9uKSA9PiB7XG4gIGNvbnN0IGNoYW1waW9uRGV0YWlscyA9IGF3YWl0IGZldGNoQ2hhbXBpb25EZXRhaWxzKGNoYW1waW9uSWQsIGxhdGVzdFZlcnNpb24pO1xuICBjb25zdCBjaGFtcGlvblBhc3NpdmUgPSBnZXRDaGFtcGlvblBhc3NpdmVzKGNoYW1waW9uRGV0YWlscywgbGF0ZXN0VmVyc2lvbik7XG4gIGNvbnN0IHNwZWxscyA9IGdldENoYW1waW9uU3BlbGxzKGNoYW1waW9uRGV0YWlscywgbGF0ZXN0VmVyc2lvbik7XG5cbiAgLy8gTWFrZSBmaXJzdCBsZXR0ZXIgb2YgdGhlIGNoYW1waW9uIHRpdGxlIGEgY2FwaXRhbCBsZXR0ZXIuXG4gIGNvbnN0IGNoYW1waW9uVGl0bGUgPSBjaGFtcGlvbkRldGFpbHMudGl0bGUucmVwbGFjZShcbiAgICBjaGFtcGlvbkRldGFpbHMudGl0bGVbMF0sIGNoYW1waW9uRGV0YWlscy50aXRsZVswXS50b1VwcGVyQ2FzZSgpLFxuICApO1xuXG4gIGlmIChjaGFtcGlvbkRldGFpbHMucGFydHlwZSA9PT0gJ05vbmUnKSB7XG4gICAgY2hhbXBpb25EZXRhaWxzLnBhcnR5cGUgPSAnTWFuYWxlc3MnO1xuICB9XG5cbiAgaWYgKGNoYW1waW9uRGV0YWlscy5pZCA9PT0gJ0Frc2hhbicpIHtcbiAgICBjaGFtcGlvbkRldGFpbHMuYWxseXRpcHNbMF0gPSAnWW91IGNhbuKAmXQgdXNlIGNvbnN1bWFibGVzIGxpa2UgcG90aW9ucyBkdXJpbmcgeW91ciBDb21ldXBwYW5jZSwgbWFrZSBzdXJlIHRvIHVzZSB0aGVtIGJlZm9yZSBjaGFubmVsaW5nLic7XG4gIH1cblxuICBpZiAoY2hhbXBpb25EZXRhaWxzLmlkID09PSAnVmV4Jykge1xuICAgIGNoYW1waW9uRGV0YWlscy5hbGx5dGlwcy5wdXNoKCdWZXggaXMgZ3JlYXQgYXQgZGl2aW5nIGludG8gdGhlIGJhY2tsaW5lLCBidXQgaGVyIGVzY2FwZSBwb3RlbnRpYWwgaXMgbG93IHNvIHRpbWluZyBpcyBrZXkuJyk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5hbWU6IGNoYW1waW9uRGV0YWlscy5uYW1lLFxuICAgIGlkOiBjaGFtcGlvbkRldGFpbHMuaWQsXG4gICAgdGl0bGU6IGNoYW1waW9uVGl0bGUsXG4gICAgbG9yZTogY2hhbXBpb25EZXRhaWxzLmxvcmUsXG4gICAgcm9sZXM6IGNoYW1waW9uRGV0YWlscy50YWdzLFxuICAgIHNraW5zOiBjaGFtcGlvbkRldGFpbHMuc2tpbnMsXG4gICAgcmVzb3VyY2U6IGNoYW1waW9uRGV0YWlscy5wYXJ0eXBlLFxuICAgIHBhc3NpdmU6IGNoYW1waW9uUGFzc2l2ZSxcbiAgICBzcGVsbHMsXG4gICAgdGlwczogY2hhbXBpb25EZXRhaWxzLmFsbHl0aXBzLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0Q2hhbXBpb25EZXRhaWxzO1xuIiwiY29uc3QgZmV0Y2hDaGFtcGlvblN0YXRzID0gYXN5bmMgKGNoYW1waW9uSWQpID0+IHtcbiAgLyogUmVsYXRpdmUgdXJscyBhcmUgdXNlZCBmb3Igd2hlbiB0aGUgYXBwIGlzIGluIHByb2R1Y3Rpb24gYW5kIGxvY2FsaG9zdCB1cmwgZm9yIGRldmVsb3BtZW50ICovXG4gIGNvbnN0IGRldlVybCA9ICdodHRwOi8vMTI3LjAuMC4xOjU1MDAvZnJvbnRlbmQvZGlzdC9jaGFtcGlvbnMuaHRtbCc7XG4gIGNvbnN0IHJlc3BvbnNlID0gd2luZG93LmxvY2F0aW9uLmhyZWYgPT09IGRldlVybFxuICAgID8gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS8ke2NoYW1waW9uSWR9YCwgeyBtb2RlOiAnY29ycycgfSlcbiAgICA6IGF3YWl0IGZldGNoKGAke2NoYW1waW9uSWR9YCwgeyBtb2RlOiAnY29ycycgfSk7XG4gIGNvbnN0IGNoYW1waW9uU3RhdHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIGNoYW1waW9uU3RhdHM7XG59O1xuXG5jb25zdCBnZXRDaGFtcGlvblN0YXRzID0gYXN5bmMgKGNoYW1waW9uSWQpID0+IHtcbiAgY29uc3QgY2hhbXBpb25TdGF0cyA9IGF3YWl0IGZldGNoQ2hhbXBpb25TdGF0cyhjaGFtcGlvbklkKTtcbiAgY29uc3Qgd2luUmF0ZSA9IGNoYW1waW9uU3RhdHMud2luUmF0ZS50b0ZpeGVkKDIpO1xuICBjb25zdCBwaWNrUmF0ZSA9IGNoYW1waW9uU3RhdHMucGlja1JhdGUudG9GaXhlZCgyKTtcbiAgY29uc3QgbGFuZSA9IGNoYW1waW9uU3RhdHMubGFuZVswXSArIGNoYW1waW9uU3RhdHMubGFuZS5zdWJzdHJpbmcoMSkudG9Mb3dlckNhc2UoKTtcblxuICByZXR1cm4ge1xuICAgIGNoYW1waW9uSWQsXG4gICAga2RhOiBjaGFtcGlvblN0YXRzLmtkYVJhdGlvLFxuICAgIGRhbWFnZVBlck1hdGNoOiBjaGFtcGlvblN0YXRzLmRhbWFnZVBlck1hdGNoLFxuICAgIGl0ZW1TZXRzOiBjaGFtcGlvblN0YXRzLml0ZW1DaG9pY2VzLnNsaWNlKDEpLFxuICAgIGJlc3RNYXRjaFVwczogY2hhbXBpb25TdGF0cy5tYXRjaFVwcy5iZXN0TWF0Y2hVcHMsXG4gICAgd29yc3RNYXRjaFVwczogY2hhbXBpb25TdGF0cy5tYXRjaFVwcy53b3JzdE1hdGNoVXBzLFxuICAgIHdpblJhdGUsXG4gICAgcGlja1JhdGUsXG4gICAgbGFuZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldENoYW1waW9uU3RhdHM7XG4iLCJjb25zdCBnZXRBbGxDaGFtcGlvbkRldGFpbHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHZlcnNpb25zUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vYXBpL3ZlcnNpb25zLmpzb24nKTtcbiAgY29uc3QgdmVyc2lvbnMgPSBhd2FpdCB2ZXJzaW9uc1Jlc3BvbnNlLmpzb24oKTtcbiAgY29uc3QgbGF0ZXN0VmVyc2lvbiA9IHZlcnNpb25zWzBdO1xuICBjb25zdCBjaGFtcGlvbnNSZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vJHtsYXRlc3RWZXJzaW9ufS9kYXRhL2VuX1VTL2NoYW1waW9uLmpzb25gKTtcbiAgY29uc3QgYWxsQ2hhbXBpb25zID0gYXdhaXQgY2hhbXBpb25zUmVzcG9uc2UuanNvbigpO1xuXG4gIHJldHVybiBhbGxDaGFtcGlvbnMuZGF0YTtcbn07XG5cbmNvbnN0IGdldEFsbENoYW1waW9uU3RhdHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGRldlVybCA9ICdodHRwOi8vMTI3LjAuMC4xOjU1MDAvZnJvbnRlbmQvZGlzdC9jaGFtcGlvbnMuaHRtbCc7XG4gIGNvbnN0IHJlc3BvbnNlID0gd2luZG93LmxvY2F0aW9uLmhyZWYgPT09IGRldlVybFxuICAgID8gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9jaGFtcGlvbnMnLCB7IG1vZGU6ICdjb3JzJyB9KVxuICAgIDogYXdhaXQgZmV0Y2goJ2NoYW1waW9ucycsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICBjb25zdCBhbGxDaGFtcGlvblN0YXRzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIHJldHVybiBhbGxDaGFtcGlvblN0YXRzO1xufTtcblxuZXhwb3J0IHtcbiAgZ2V0QWxsQ2hhbXBpb25EZXRhaWxzLFxuICBnZXRBbGxDaGFtcGlvblN0YXRzLFxufTtcbiIsIi8qIFJldHJpdmVzIHRoZSBsYXRlc3Qgc3RhdGljIGRhdGEgYXZhbGlhYmxlIGZvciBjaGFtcGlvbnMgKi9cbmV4cG9ydCBkZWZhdWx0IGFzeW5jICgpID0+IHtcbiAgY29uc3QgdmVyc2lvblJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2FwaS92ZXJzaW9ucy5qc29uJywgeyBtb2RlOiAnY29ycycgfSk7XG4gIGNvbnN0IHZlcnNpb25zID0gYXdhaXQgdmVyc2lvblJlc3BvbnNlLmpzb24oKTtcbiAgY29uc3QgbGF0ZXN0VmVyc2lvbiA9IHZlcnNpb25zWzBdO1xuICByZXR1cm4gbGF0ZXN0VmVyc2lvbjtcbn07XG4iLCIvKiBGZXRjaGVzIGFsbCB0aGUgaXRlbXMgYSBjaGFtcGlvbiBjYW4gYnV5IGluIGEgbWF0Y2ggKi9cbmNvbnN0IGZldGNoQWxsSXRlbXMgPSBhc3luYyAobGF0ZXN0VmVyc2lvbikgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vJHtsYXRlc3RWZXJzaW9ufS9kYXRhL2VuX1VTL2l0ZW0uanNvbmApO1xuICBjb25zdCBhbGxJdGVtcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICByZXR1cm4gYWxsSXRlbXMuZGF0YTtcbn07XG5cbmNsYXNzIEl0ZW1JbmZvIHtcbiAgc3RhdGljIGFzeW5jIGdldEFsbEl0ZW1zKGxhdGVzdFZlcnNpb24pIHtcbiAgICBjb25zdCBhbGxJdGVtcyA9IGZldGNoQWxsSXRlbXMobGF0ZXN0VmVyc2lvbik7XG4gICAgcmV0dXJuIGFsbEl0ZW1zO1xuICB9XG5cbiAgZ2V0SXRlbURldGFpbHMoYWxsSXRlbXMpIHtcbiAgICBjb25zdCBpdGVtRGV0YWlscyA9IGFsbEl0ZW1zW3RoaXMuaXRlbUlkXTtcbiAgICByZXR1cm4gaXRlbURldGFpbHM7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihpdGVtSWQsIGFsbEl0ZW1zLCBsYXRlc3RWZXJzaW9uKSB7XG4gICAgdGhpcy5pdGVtSWQgPSBpdGVtSWQ7XG4gICAgdGhpcy5pdGVtRGV0YWlscyA9IHRoaXMuZ2V0SXRlbURldGFpbHMoYWxsSXRlbXMpO1xuICAgIHRoaXMubGF0ZXN0VmVyc2lvbiA9IGxhdGVzdFZlcnNpb247XG4gIH1cblxuICBnZXRJdGVtSW1hZ2UoKSB7XG4gICAgY29uc3QgaXRlbUltYWdlSWQgPSB0aGlzLml0ZW1EZXRhaWxzLmltYWdlLmZ1bGw7XG4gICAgY29uc3QgaW1hZ2VVcmwgPSBgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLyR7dGhpcy5sYXRlc3RWZXJzaW9ufS9pbWcvaXRlbS8ke2l0ZW1JbWFnZUlkfWA7XG4gICAgcmV0dXJuIGltYWdlVXJsO1xuICB9XG5cbiAgLyogZ2V0cyBpbmZvIG9uIHRoZSBpdGVtcyB1c2VkIHRvIGNyZWF0ZSB0aGUgaW5zdGFuY2UgaXRlbSAqL1xuICBhc3luYyBnZXRDb21wb25lbnRJdGVtcyhhbGxJdGVtcykge1xuICAgIGNvbnN0IGNvbXBvbmVudEl0ZW1JZHMgPSB0aGlzLml0ZW1EZXRhaWxzLmZyb207XG4gICAgaWYgKGNvbXBvbmVudEl0ZW1JZHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBjb25zdCBjb21wb25lbnRJdGVtRGV0YWlscyA9IGNvbXBvbmVudEl0ZW1JZHMubWFwKChpdGVtSWQpID0+ICh7XG4gICAgICBuYW1lOiBhbGxJdGVtc1tpdGVtSWRdLm5hbWUsXG4gICAgICBpbWFnZVVybDogYGh0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi8ke3RoaXMubGF0ZXN0VmVyc2lvbn0vaW1nL2l0ZW0vJHtpdGVtSWR9LnBuZ2AsXG4gICAgICBjb3N0OiBhbGxJdGVtc1tpdGVtSWRdLmdvbGQudG90YWwsXG4gICAgfSkpO1xuICAgIHJldHVybiBjb21wb25lbnRJdGVtRGV0YWlscztcbiAgfVxuXG4gIGdldEl0ZW1JbmZvKGFsbEl0ZW1zKSB7XG4gICAgaWYgKHRoaXMuaXRlbURldGFpbHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXMuaXRlbURldGFpbHM7XG4gICAgY29uc3QgeyBkZXNjcmlwdGlvbiB9ID0gdGhpcy5pdGVtRGV0YWlscztcbiAgICBjb25zdCBjb3N0ID0gdGhpcy5pdGVtRGV0YWlscy5nb2xkLnRvdGFsO1xuICAgIGNvbnN0IGltYWdlVXJsID0gdGhpcy5nZXRJdGVtSW1hZ2UoYWxsSXRlbXMpO1xuICAgIGNvbnN0IGNvbXBvbmVudEl0ZW1zID0gdGhpcy5nZXRDb21wb25lbnRJdGVtcyhhbGxJdGVtcyk7XG4gICAgY29uc3QgeyB0YWdzIH0gPSB0aGlzLml0ZW1EZXRhaWxzO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGNvc3QsXG4gICAgICBpbWFnZVVybCxcbiAgICAgIGNvbXBvbmVudEl0ZW1zLFxuICAgICAgdGFncyxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW1JbmZvO1xuIiwiaW1wb3J0IEVsZW1lbnRDcmVhdGlvbiBmcm9tICcuL2VsZW1lbnRDcmVhdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyb3Bkb3duU2VjdGlvbiB7XG4gIHN0YXRpYyBjcmVhdGVTZWN0aW9uKCkge1xuICAgIGNvbnN0IGNoYW1waW9uc1BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hhbXBpb25zLXBhZ2UnKTtcbiAgICBjb25zdCBmaWx0ZXJTb3J0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZpbHRlclNvcnRTZWN0aW9uLmNsYXNzTmFtZSA9ICdmaWx0ZXItc29ydC1zZWN0aW9uJztcbiAgICBjaGFtcGlvbnNQYWdlLmluc2VydEJlZm9yZShcbiAgICAgIGZpbHRlclNvcnRTZWN0aW9uLCBjaGFtcGlvbnNQYWdlLmxhc3RDaGlsZCxcbiAgICApO1xuICAgIHJldHVybiBmaWx0ZXJTb3J0U2VjdGlvbjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGRyb3Bkb3duTmFtZSwgb3B0aW9uc0FycmF5KSB7XG4gICAgdGhpcy5kcm9wZG93bk5hbWUgPSBkcm9wZG93bk5hbWU7XG4gICAgdGhpcy5vcHRpb25zQXJyYXkgPSBvcHRpb25zQXJyYXk7XG4gIH1cblxuICAvKiB0eXBlIHRha2VzIGEgc3RyaW5nIHVzZWQgYXMgYSBjbGFzc05hbWUgdG8gc2hvdyBpZiB0aGUgZHJvcGRvd24gaXMgbXVsdGkgb3Igc2luZ2xlIHNlbGVjdCAqL1xuICByZW5kZXJEcm9wZG93bihmaWx0ZXJTb3J0U2VjdGlvbiwgdHlwZSkge1xuICAgIGNvbnN0IGRyb3Bkb3duID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgYCR7dGhpcy5kcm9wZG93bk5hbWV9LWRyb3Bkb3duIGRyb3Bkb3duYCwgZmlsdGVyU29ydFNlY3Rpb24pO1xuICAgIGNvbnN0IGRyb3Bkb3duQnRuID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnYnV0dG9uJywgYCR7dGhpcy5kcm9wZG93bk5hbWV9LWRyb3Bkb3duLWJ0biBkcm9wZG93bi1idG5gLCBkcm9wZG93bik7XG4gICAgZHJvcGRvd25CdG4udGV4dENvbnRlbnQgPSBgJHt0aGlzLmRyb3Bkb3duTmFtZVswXS50b1VwcGVyQ2FzZSgpfSR7dGhpcy5kcm9wZG93bk5hbWUuc2xpY2UoMSl9YDtcbiAgICBjb25zdCBkcm9wZG93bk9wdGlvbnMgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCBgJHt0aGlzLmRyb3Bkb3duTmFtZX0tZHJvcGRvd24tb3B0aW9ucyBkcm9wZG93bi1vcHRpb25zYCwgZHJvcGRvd24pO1xuXG4gICAgdGhpcy5vcHRpb25zQXJyYXkuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICBjb25zdCBkcm9wZG93bk9wdGlvbiA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCBgJHtvcHRpb259ICR7dGhpcy5kcm9wZG93bk5hbWV9ICR7dHlwZX0gZHJvcGRvd24tb3B0aW9uYCwgZHJvcGRvd25PcHRpb25zKTtcbiAgICAgIGRyb3Bkb3duT3B0aW9uLnRleHRDb250ZW50ID0gYCR7b3B0aW9uWzBdLnRvVXBwZXJDYXNlKCl9JHtvcHRpb24uc2xpY2UoMSl9YDtcbiAgICB9KTtcbiAgfVxufVxuIiwiY29uc3QgRWxlbWVudENyZWF0aW9uID0gKCgpID0+IHtcbiAgY29uc3QgY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzID0gKHRhZywgY2xhc3NOYW1lLCBwYXJlbnRFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlQ2hpbGRFbGVtZW50V2l0aElkID0gKHRhZywgaWQsIHBhcmVudEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGVsZW1lbnQuaWQgPSBpZDtcbiAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzQW5kSWQgPSAodGFnLCBjbGFzc05hbWUsIGlkLCBwYXJlbnRFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICBlbGVtZW50LmlkID0gaWQ7XG4gICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzID0gKGNsYXNzTmFtZSwgcGFyZW50RWxlbWVudCwgc3JjLCBhbHQpID0+IHtcbiAgICBjb25zdCBpbWFnZUVsZW1lbnQgPSBjcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2ltZycsIGNsYXNzTmFtZSwgcGFyZW50RWxlbWVudCk7XG4gICAgaW1hZ2VFbGVtZW50LnNyYyA9IHNyYztcbiAgICBpbWFnZUVsZW1lbnQuYWx0ID0gYWx0O1xuXG4gICAgcmV0dXJuIGltYWdlRWxlbWVudDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcyxcbiAgICBjcmVhdGVDaGlsZEVsZW1lbnRXaXRoSWQsXG4gICAgY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzQW5kSWQsXG4gICAgY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBFbGVtZW50Q3JlYXRpb247XG4iLCJpbXBvcnQgeyByZW5kZXJIZWFkZXJEZXRhaWxzLCBpbWFnZXMgfSBmcm9tICcuL3JlbmRlckhlbHBlcnMnO1xuaW1wb3J0IEVsZW1lbnRDcmVhdGlvbiBmcm9tICcuLi9oZWxwZXJzL2VsZW1lbnRDcmVhdGlvbic7XG5cbmNvbnN0IGNoYW1waW9uRGV0YWlsc01vZGFsID0gYXN5bmMgKGNoYW1waW9uRGF0YSkgPT4ge1xuICByZW5kZXJIZWFkZXJEZXRhaWxzKGNoYW1waW9uRGF0YSwgJ21haW4nKTtcblxuICBjb25zdCBjaGFtcGlvblJvbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLXJvbGVzJyk7XG4gIGNvbnN0IHsgcm9sZXMgfSA9IGNoYW1waW9uRGF0YTtcbiAgcm9sZXMuZm9yRWFjaCgocm9sZSkgPT4ge1xuICAgIGNvbnN0IGNoYW1waW9uUm9sZSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdjaGFtcGlvbi1yb2xlJywgY2hhbXBpb25Sb2xlcyk7XG4gICAgY29uc3QgY2hhbXBpb25Sb2xlTmFtZSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnY2hhbXBpb24tcm9sZS1uYW1lJywgY2hhbXBpb25Sb2xlKTtcbiAgICBjaGFtcGlvblJvbGVOYW1lLnRleHRDb250ZW50ID0gcm9sZTtcbiAgICBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MoJ2NoYW1waW9uLXJvbGUtaW1hZ2UnLCBjaGFtcGlvblJvbGUsIGAke2ltYWdlc1tgJHtyb2xlfS5wbmdgXX1gLCByb2xlKTtcbiAgfSk7XG4gIC8qIFRoZSB0eXBlIG9mIHJlc291cmNlIHRoYXQgYSBjaGFtcGlvbiB1c2VzIGUuZy4gbWFuYSwgZW5lcmd5IGV0YyAqL1xuICBjb25zdCBjaGFtcGlvblJlc291cmNlID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2NoYW1waW9uLXJlc291cmNlJywgY2hhbXBpb25Sb2xlcyk7XG4gIGNvbnN0IHsgcmVzb3VyY2UgfSA9IGNoYW1waW9uRGF0YTtcbiAgY29uc3QgY2hhbXBpb25SZXNvdXJjZU5hbWUgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2NoYW1waW9uLXJlc291cmNlLW5hbWUnLCBjaGFtcGlvblJlc291cmNlKTtcbiAgY2hhbXBpb25SZXNvdXJjZU5hbWUudGV4dENvbnRlbnQgPSByZXNvdXJjZTtcbiAgRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzKCdjaGFtcGlvbi1yZXNvdXJjZS1pbWFnZScsIGNoYW1waW9uUmVzb3VyY2UsIGAke2ltYWdlc1tgJHtyZXNvdXJjZX0ucG5nYF19YCwgcmVzb3VyY2UpO1xuXG4gIC8qIENyZWF0ZXMgdGhlIG1haW4gY29udGVudCBvZiB0aGUgbWFpbiBtb2RhbCAqL1xuICBjb25zdCBsb3JlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvcmUtY29udGFpbmVyJyk7XG4gIGNvbnN0IGNoYW1waW9uTG9yZSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnY2hhbXBpb24tbG9yZScsIGxvcmVDb250YWluZXIpO1xuICBjaGFtcGlvbkxvcmUuaW5uZXJIVE1MID0gY2hhbXBpb25EYXRhLmxvcmU7XG5cbiAgY29uc3QgYWJpbGl0aWVzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFiaWxpdGllcy1jb250YWluZXInKTtcbiAgY29uc3QgYWJpbGl0eURldGFpbHMgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnYWJpbGl0eS1kZXRhaWxzJywgYWJpbGl0aWVzQ29udGFpbmVyKTtcbiAgY29uc3QgYWJpbGl0eUltZ3MgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnYWJpbGl0eS1pbWdzJywgYWJpbGl0eURldGFpbHMpO1xuICBjb25zdCBwYXNzaXZlSW1nID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzKFxuICAgICdzcGVsbC1pbWcgY2xpY2tlZCcsIGFiaWxpdHlJbWdzLCBjaGFtcGlvbkRhdGEucGFzc2l2ZS5wYXNzaXZlSW1nVXJsLCBjaGFtcGlvbkRhdGEucGFzc2l2ZS5wYXNzaXZlTmFtZSxcbiAgKTtcbiAgcGFzc2l2ZUltZy5pZCA9ICdwYXNzaXZlLWltZyc7XG5cbiAgY29uc3QgaW1nTGFiZWwgPSBbJ1EnLCAnVycsICdFJywgJ1InXTtcbiAgbGV0IGluZGV4ID0gMDtcblxuICBjaGFtcGlvbkRhdGEuc3BlbGxzLmZvckVhY2goKHNwZWxsKSA9PiB7XG4gICAgY29uc3Qgc3BlbGxJbWcgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAnc3BlbGwtaW1nJywgYWJpbGl0eUltZ3MsIHNwZWxsLmltZ1VybCwgc3BlbGwubmFtZSxcbiAgICApO1xuICAgIC8vIEdyYWJzIGxldHRlciBRLCBXLCBFIG9yIFIgd2hpY2ggdW5pcXVlbHkgaWRlbnRpZmllcyBhIGNoYW1waW9ucyBhYmlsaXRpZXNcbiAgICBzcGVsbEltZy5pZCA9IGAke2ltZ0xhYmVsW2luZGV4XX0taW1nYDtcbiAgICBpbmRleCArPSAxO1xuICB9KTtcblxuICAvKiBsb29wcyB0aHJvdWdoIGNoYW1waW9uJ3MgcGFzc2l2ZSBhbmQgNCBhYmlsaXRpZXMgKi9cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpICs9IDEpIHtcbiAgICBjb25zdCBhYmlsaXR5SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGFiaWxpdHlOYW1lID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdhYmlsaXR5LW5hbWUnLCBhYmlsaXR5SW5mbyk7XG4gICAgY29uc3QgYWJpbGl0eURlc2NyaXB0aW9uID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdhYmlsaXR5LWRlc2NyaXB0aW9uJywgYWJpbGl0eUluZm8pO1xuICAgIGNvbnN0IGFiaWxpdHlMYWJlbCA9IFsnUGFzc2l2ZScsICdRJywgJ1cnLCAnRScsICdSJ107XG5cbiAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgYWJpbGl0eUluZm8uY2xhc3NOYW1lID0gJ2FiaWxpdHktaW5mbyBhY3RpdmUnO1xuICAgICAgYWJpbGl0eUluZm8uaWQgPSAncGFzc2l2ZS1hYmlsaXR5JztcbiAgICAgIGFiaWxpdHlOYW1lLnRleHRDb250ZW50ID0gYCR7Y2hhbXBpb25EYXRhLnBhc3NpdmUucGFzc2l2ZU5hbWV9ICgke2FiaWxpdHlMYWJlbFtpXX0pYDtcbiAgICAgIGFiaWxpdHlEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBjaGFtcGlvbkRhdGEucGFzc2l2ZS5wYXNzaXZlRGVzY3JpcHRpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvb2xkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgY29vbGRvd24uY2xhc3NOYW1lID0gJ2FiaWxpdHktY29vbGRvd24nO1xuICAgICAgY29vbGRvd24udGV4dENvbnRlbnQgPSBgQ29vbGRvd246ICR7Y2hhbXBpb25EYXRhLnNwZWxsc1tpIC0gMV0uY29vbGRvd259IHNlY29uZHNgO1xuICAgICAgYWJpbGl0eUluZm8uYXBwZW5kQ2hpbGQoY29vbGRvd24pO1xuXG4gICAgICBhYmlsaXR5SW5mby5jbGFzc05hbWUgPSAnYWJpbGl0eS1pbmZvJztcbiAgICAgIGFiaWxpdHlJbmZvLmlkID0gYCR7YWJpbGl0eUxhYmVsW2ldfS1hYmlsaXR5YDtcbiAgICAgIGFiaWxpdHlOYW1lLnRleHRDb250ZW50ID0gYCR7Y2hhbXBpb25EYXRhLnNwZWxsc1tpIC0gMV0ubmFtZX0gKCR7YWJpbGl0eUxhYmVsW2ldfSlgO1xuICAgICAgYWJpbGl0eURlc2NyaXB0aW9uLmlubmVySFRNTCA9IGNoYW1waW9uRGF0YS5zcGVsbHNbaSAtIDFdLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGFiaWxpdHlEZXRhaWxzLmFwcGVuZENoaWxkKGFiaWxpdHlJbmZvKTtcbiAgfVxuXG4gIGNvbnN0IGNoYW1waW9uVGlwc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tdGlwcy1zZWN0aW9uJyk7XG4gIGNvbnN0IGNoYW1waW9uVGlwcyA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdjaGFtcGlvbi10aXBzJywgY2hhbXBpb25UaXBzU2VjdGlvbik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAyICYmIGkgPCBjaGFtcGlvbkRhdGEudGlwcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGNoYW1waW9uVGlwID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdjaGFtcGlvbi10aXAnLCBjaGFtcGlvblRpcHMpO1xuICAgIGNoYW1waW9uVGlwLnRleHRDb250ZW50ID0gYCR7Y2hhbXBpb25EYXRhLnRpcHNbaV19YDtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2hhbXBpb25EZXRhaWxzTW9kYWw7XG4iLCJpbXBvcnQgRWxlbWVudENyZWF0aW9uIGZyb20gJy4uL2hlbHBlcnMvZWxlbWVudENyZWF0aW9uJztcblxuY29uc3QgY2hhbXBpb25Ta2luc01vZGFsID0gYXN5bmMgKGNoYW1waW9uRGV0YWlscykgPT4ge1xuICBjb25zdCB7IHNraW5zIH0gPSBjaGFtcGlvbkRldGFpbHM7XG4gIGNvbnN0IHNraW5zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NraW5zLWNvbnRhaW5lcicpO1xuICBjb25zdCBza2luTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5za2luLW5hbWUnKTtcbiAgY29uc3Qgc2tpbkltYWdlc0NvbnRhaW5lciA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdza2luLWltYWdlcy1jb250YWluZXInLCBza2luc0NvbnRhaW5lcik7XG5cbiAgc2tpbnMuZm9yRWFjaCgoc2tpbikgPT4ge1xuICAgIGlmIChza2luLm51bSA9PT0gMCkge1xuICAgICAgY29uc3Qgc2hvd25JbWFnZUNvbnRhaW5lciA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3NBbmRJZChcbiAgICAgICAgJ2RpdicsICdza2luLWltYWdlLWNvbnRhaW5lciBzaG93bicsIGBEZWZhdWx0ICR7Y2hhbXBpb25EZXRhaWxzLm5hbWV9YCwgc2tpbkltYWdlc0NvbnRhaW5lcixcbiAgICAgICk7XG4gICAgICBza2luTmFtZS50ZXh0Q29udGVudCA9IGBEZWZhdWx0ICR7Y2hhbXBpb25EZXRhaWxzLm5hbWV9YDtcbiAgICAgIGNvbnN0IHNob3duSW1hZ2VVcmwgPSBgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuL2ltZy9jaGFtcGlvbi9zcGxhc2gvJHtjaGFtcGlvbkRldGFpbHMuaWR9XyR7c2tpbi5udW19LmpwZ2A7XG4gICAgICBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MoJ3NraW4taW1hZ2UnLCBzaG93bkltYWdlQ29udGFpbmVyLCBzaG93bkltYWdlVXJsLCAnZGVmYXVsdCBza2luJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGltYWdlQ29udGFpbmVyID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCAnc2tpbi1pbWFnZS1jb250YWluZXInLCBza2luLm5hbWUsIHNraW5JbWFnZXNDb250YWluZXIpO1xuICAgICAgY29uc3QgaW1hZ2VVcmwgPSBgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuL2ltZy9jaGFtcGlvbi9zcGxhc2gvJHtjaGFtcGlvbkRldGFpbHMuaWR9XyR7c2tpbi5udW19LmpwZ2A7XG4gICAgICBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MoJ3NraW4taW1hZ2UnLCBpbWFnZUNvbnRhaW5lciwgaW1hZ2VVcmwsIHNraW4ubmFtZSk7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNoYW1waW9uU2tpbnNNb2RhbDtcbiIsImltcG9ydCBJdGVtSW5mbyBmcm9tICcuLi9jaGFtcGlvbkRhdGEvaXRlbUluZm8nO1xuaW1wb3J0IHtcbiAgcmVuZGVySGVhZGVyRGV0YWlscyxcbiAgcmVuZGVyU3RhdE92ZXJ2aWV3LFxuICByZW5kZXJEYW1hZ2VTdGF0cyxcbiAgcmVuZGVyQ2hhbXBpb25MYW5lLFxuICByZW5kZXJNYXRjaHVwc0luZm8sXG59IGZyb20gJy4vcmVuZGVySGVscGVycyc7XG5pbXBvcnQgRWxlbWVudENyZWF0aW9uIGZyb20gJy4uL2hlbHBlcnMvZWxlbWVudENyZWF0aW9uJztcblxuY29uc3QgY2hhbXBpb25TdGF0c01vZGFsID0gYXN5bmMgKGNoYW1waW9uRGF0YSwgY2hhbXBpb25TdGF0cywgbGF0ZXN0VmVyc2lvbikgPT4ge1xuICByZW5kZXJIZWFkZXJEZXRhaWxzKGNoYW1waW9uRGF0YSwgJ3N0YXRzJyk7XG5cbiAgY29uc3Qgc3RhdHNPdmVydmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbi1zdGF0cy1vdmVydmlldycpO1xuXG4gIHJlbmRlclN0YXRPdmVydmlldyhzdGF0c092ZXJ2aWV3LCAnV2luIFJhdGUnLCBjaGFtcGlvblN0YXRzLndpblJhdGUpO1xuICByZW5kZXJTdGF0T3ZlcnZpZXcoc3RhdHNPdmVydmlldywgJ1BpY2sgUmF0ZScsIGNoYW1waW9uU3RhdHMucGlja1JhdGUpO1xuICAvKiBNYWtlIGV2ZXJ5IGxldHRlciBleGNlcHQgdGhlIGZpcnN0IGxvd2VyIGNhc2UgKi9cbiAgY29uc3QgbGFuZSA9IGAke2NoYW1waW9uU3RhdHMubGFuZVswXSArIGNoYW1waW9uU3RhdHMubGFuZS5zdWJzdHJpbmcoMSkudG9Mb3dlckNhc2UoKX1gO1xuICByZW5kZXJDaGFtcGlvbkxhbmUoc3RhdHNPdmVydmlldywgbGFuZSk7XG5cbiAgLyogU2V0cyB0aGUgdmFsdWVzIGFuZCBwZXJjZW50YWdlcyBmb3IgdGhlIGF2ZXJhZ2UgZGFtYWdlIHNlY3Rpb24gb2YgdGhlIHN0YXRzIG1vZGFsICovXG5cbiAgY29uc3QgdHJ1ZURhbWFnZUNpcmNsZVN0cm9rZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cnVlLWRhbWFnZS1zdHJva2UnKTtcbiAgY29uc3QgcGh5c2ljYWxEYW1hZ2VDaXJjbGVTdHJva2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGh5c2ljYWwtZGFtYWdlLXN0cm9rZScpO1xuICBjb25zdCBtYWdpY0RhbWFnZUNpcmNsZVN0cm9rZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWdpYy1kYW1hZ2Utc3Ryb2tlJyk7XG5cbiAgY29uc3QgdHJ1ZURhbWFnZVBlcmNlbnQgPSBNYXRoLnJvdW5kKGNoYW1waW9uU3RhdHMuZGFtYWdlUGVyTWF0Y2gudHJ1ZURhbWFnZS5wZXJjZW50YWdlKTtcbiAgY29uc3QgcGh5c2ljYWxEYW1hZ2VQZXJjZW50ID0gTWF0aC5yb3VuZChjaGFtcGlvblN0YXRzLmRhbWFnZVBlck1hdGNoLnBoeXNpY2FsRGFtYWdlLnBlcmNlbnRhZ2UpO1xuICBjb25zdCBtYWdpY0RhbWFnZVBlcmNlbnQgPSBNYXRoLnJvdW5kKGNoYW1waW9uU3RhdHMuZGFtYWdlUGVyTWF0Y2gubWFnaWNEYW1hZ2UucGVyY2VudGFnZSk7XG5cbiAgdHJ1ZURhbWFnZUNpcmNsZVN0cm9rZS5zdHlsZS5zdHJva2VEYXNoYXJyYXkgPSBgJHt0cnVlRGFtYWdlUGVyY2VudH0gMTAwYDtcbiAgcGh5c2ljYWxEYW1hZ2VDaXJjbGVTdHJva2Uuc3R5bGUuc3Ryb2tlRGFzaGFycmF5ID0gYCR7cGh5c2ljYWxEYW1hZ2VQZXJjZW50ICsgdHJ1ZURhbWFnZVBlcmNlbnR9IDEwMGA7XG4gIG1hZ2ljRGFtYWdlQ2lyY2xlU3Ryb2tlLnN0eWxlLnN0cm9rZURhc2hhcnJheSA9ICcxMDAsIDEwMCc7XG4gIGNvbnN0IHRvdGFsRGFtYWdlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3RhbC1kYW1hZ2UtdGV4dCcpO1xuICB0b3RhbERhbWFnZVRleHQudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKGNoYW1waW9uU3RhdHMuZGFtYWdlUGVyTWF0Y2gudG90YWxEYW1hZ2UudmFsdWUpO1xuXG4gIGNvbnN0IHRydWVEYW1hZ2VWYWx1ZSA9IE1hdGgucm91bmQoY2hhbXBpb25TdGF0cy5kYW1hZ2VQZXJNYXRjaC50cnVlRGFtYWdlLnZhbHVlKTtcbiAgY29uc3QgcGh5c2ljYWxEYW1hZ2VWYWx1ZSA9IE1hdGgucm91bmQoY2hhbXBpb25TdGF0cy5kYW1hZ2VQZXJNYXRjaC5waHlzaWNhbERhbWFnZS52YWx1ZSk7XG4gIGNvbnN0IG1hZ2ljRGFtYWdlVmFsdWUgPSBNYXRoLnJvdW5kKGNoYW1waW9uU3RhdHMuZGFtYWdlUGVyTWF0Y2gubWFnaWNEYW1hZ2UudmFsdWUpO1xuXG4gIHJlbmRlckRhbWFnZVN0YXRzKCdwaHlzaWNhbCcsIHBoeXNpY2FsRGFtYWdlVmFsdWUsIHBoeXNpY2FsRGFtYWdlUGVyY2VudCk7XG4gIHJlbmRlckRhbWFnZVN0YXRzKCdtYWdpYycsIG1hZ2ljRGFtYWdlVmFsdWUsIG1hZ2ljRGFtYWdlUGVyY2VudCk7XG4gIHJlbmRlckRhbWFnZVN0YXRzKCd0cnVlJywgdHJ1ZURhbWFnZVZhbHVlLCB0cnVlRGFtYWdlUGVyY2VudCk7XG5cbiAgLyogUmVuZGVycyB0aGUgaXRlbSBidWlsZHMgc2VjdGlvbiBvZiB0aGUgc3RhdHMgbW9kYWwgKi9cbiAgY29uc3QgeyBpdGVtU2V0cyB9ID0gY2hhbXBpb25TdGF0cztcbiAgY29uc3QgYWxsSXRlbXMgPSBhd2FpdCBJdGVtSW5mby5nZXRBbGxJdGVtcyhsYXRlc3RWZXJzaW9uKTtcbiAgY29uc3QgY2hhbXBpb25JdGVtQnVpbGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLWl0ZW0tYnVpbGRzJyk7XG4gIGNvbnN0IGl0ZW1TZXRzQ29udGFpbmVyID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2l0ZW0tc2V0cy1jb250YWluZXInLCBjaGFtcGlvbkl0ZW1CdWlsZHMpO1xuXG4gIGl0ZW1TZXRzLmZvckVhY2goKGl0ZW1TZXQpID0+IHtcbiAgICBjb25zdCBpdGVtU2V0Q29udGFpbmVyID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2l0ZW0tc2V0LWNvbnRhaW5lcicsIGl0ZW1TZXRzQ29udGFpbmVyKTtcblxuICAgIGl0ZW1TZXQuZm9yRWFjaCgoaXRlbUlkKSA9PiB7XG4gICAgICBjb25zdCBpdGVtID0gbmV3IEl0ZW1JbmZvKGl0ZW1JZCwgYWxsSXRlbXMsIGxhdGVzdFZlcnNpb24pO1xuICAgICAgY29uc3QgaXRlbUluZm8gPSBpdGVtLmdldEl0ZW1JbmZvKGFsbEl0ZW1zKTtcbiAgICAgIGlmIChpdGVtSW5mbyAmJiAhaXRlbUluZm8udGFncy5pbmNsdWRlcygnVHJpbmtldCcpICYmICFpdGVtSW5mby50YWdzLmluY2x1ZGVzKCdDb25zdW1hYmxlJykpIHtcbiAgICAgICAgY29uc3QgbWFpbkNvbXBvbmVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtYWluQ29tcG9uZW50Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdtYWluLWNvbXBvbmVudC1jb250YWluZXInO1xuICAgICAgICBpdGVtU2V0Q29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5Db21wb25lbnRDb250YWluZXIpO1xuXG4gICAgICAgIGNvbnN0IG1haW5JdGVtID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ21haW4taXRlbScsIG1haW5Db21wb25lbnRDb250YWluZXIpO1xuXG4gICAgICAgIEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEltYWdlRWxlbWVudFdpdGhDbGFzcygnaXRlbS1pbWcnLCBtYWluSXRlbSwgaXRlbUluZm8uaW1hZ2VVcmwsIGAke2l0ZW1JZH0ucG5nYCk7XG5cbiAgICAgICAgY29uc3QgaXRlbURldGFpbHNDb250YWluZXIgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnaXRlbS1kZXRhaWxzLWNvbnRhaW5lcicsIG1haW5JdGVtKTtcblxuICAgICAgICBjb25zdCBuYW1lRWxlbWVudCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnaXRlbS1uYW1lJywgaXRlbURldGFpbHNDb250YWluZXIpO1xuICAgICAgICBuYW1lRWxlbWVudC50ZXh0Q29udGVudCA9IGl0ZW1JbmZvLm5hbWU7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uRWxlbWVudCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnaXRlbS1kZXNjcmlwdGlvbicsIGl0ZW1EZXRhaWxzQ29udGFpbmVyKTtcbiAgICAgICAgZGVzY3JpcHRpb25FbGVtZW50LmlubmVySFRNTCA9IGl0ZW1JbmZvLmRlc2NyaXB0aW9uO1xuICAgICAgICBjb25zdCBpdGVtQ29zdCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdpdGVtLWNvc3QnLCBpdGVtRGV0YWlsc0NvbnRhaW5lcik7XG4gICAgICAgIGNvbnN0IGNvc3RMYWJlbCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnY29zdC1sYWJlbCcsIGl0ZW1Db3N0KTtcbiAgICAgICAgY29zdExhYmVsLnRleHRDb250ZW50ID0gJ0dvbGQ6ICc7XG4gICAgICAgIGNvbnN0IGNvc3RBbW91bnQgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2Nvc3QtYW1vdW50JywgaXRlbUNvc3QpO1xuICAgICAgICBjb3N0QW1vdW50LnRleHRDb250ZW50ID0gaXRlbUluZm8uY29zdDtcblxuICAgICAgICAvKiBUaGUgY29tcG9uZW50IGl0ZW1zIGFyZSB0aGUgc21hbGxlciBpdGVtcyB0aGF0IGFwcGVhciBiZWxvdyB0aGUgbWFpbiBpdGVtICovXG4gICAgICAgIGNvbnN0IHsgY29tcG9uZW50SXRlbXMgfSA9IGl0ZW1JbmZvO1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoY29tcG9uZW50SXRlbXMpXG4gICAgICAgICAgLnRoZW4oKGl0ZW1zKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb21wb25lbnRJdGVtc0NvbnRhaW5lciA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdjb21wb25lbnQtaXRlbXMtY29udGFpbmVyJywgbWFpbkNvbXBvbmVudENvbnRhaW5lcik7XG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKChjb21wb25lbnRJdGVtKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudEl0ZW1FbGVtZW50ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2NvbXBvbmVudC1pdGVtJywgY29tcG9uZW50SXRlbXNDb250YWluZXIpO1xuICAgICAgICAgICAgICBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAgICAgICAgICAgJ2NvbXBvbmVudC1pdGVtLWltZycsIGNvbXBvbmVudEl0ZW1FbGVtZW50LCBjb21wb25lbnRJdGVtLmltYWdlVXJsLCBgJHtjb21wb25lbnRJdGVtLm5hbWV9YCxcbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRJdGVtRGV0YWlsc0NvbnRhaW5lciA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdjb21wb25lbnQtaXRlbS1kZXRhaWxzLWNvbnRhaW5lcicsIGNvbXBvbmVudEl0ZW1FbGVtZW50KTtcblxuICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRJdGVtTmFtZSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnY29tcG9uZW50LWl0ZW0tbmFtZScsIGNvbXBvbmVudEl0ZW1EZXRhaWxzQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgY29tcG9uZW50SXRlbU5hbWUudGV4dENvbnRlbnQgPSBjb21wb25lbnRJdGVtLm5hbWU7XG4gICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudEl0ZW1Db3N0ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2NvbXBvbmVudC1pdGVtLWNvc3QnLCBjb21wb25lbnRJdGVtRGV0YWlsc0NvbnRhaW5lcik7XG4gICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudEl0ZW1Db3N0TGFiZWwgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2NvbXBvbmVudC1pdGVtLWNvc3QtbGFiZWwnLCBjb21wb25lbnRJdGVtQ29zdCk7XG4gICAgICAgICAgICAgIGNvbXBvbmVudEl0ZW1Db3N0TGFiZWwudGV4dENvbnRlbnQgPSAnR29sZDogJztcbiAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50SXRlbUFtb3VudCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnY29tcG9uZW50LWl0ZW0tYW1vdW50JywgY29tcG9uZW50SXRlbUNvc3QpO1xuICAgICAgICAgICAgICBjb21wb25lbnRJdGVtQW1vdW50LnRleHRDb250ZW50ID0gY29tcG9uZW50SXRlbS5jb3N0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICAvKiBSZW5kZXJzIHRoZSBtYXRjaHVwcyBzZWN0aW9uIG9mIHRoZSBjaGFtcGlvbiBtb2RhbCBzdGF0cyBwYWdlICovXG4gIGNvbnN0IGJlc3RNYXRjaHVwc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmVzdC1tYXRjaHVwcy1zZWN0aW9uJyk7XG4gIGNvbnN0IGJlc3RNYXRjaHVwc0VsZW1lbnQgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnYmVzdC1tYXRjaHVwcyBtYXRjaHVwcycsIGJlc3RNYXRjaHVwc1NlY3Rpb24pO1xuICBjb25zdCBiZXN0TWF0Y2h1cHNEYXRhID0gY2hhbXBpb25TdGF0cy5iZXN0TWF0Y2hVcHM7XG4gIHJlbmRlck1hdGNodXBzSW5mbyhiZXN0TWF0Y2h1cHNFbGVtZW50LCBiZXN0TWF0Y2h1cHNEYXRhLCBsYXRlc3RWZXJzaW9uKTtcblxuICBjb25zdCB3b3JzdE1hdGNodXBzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53b3JzdC1tYXRjaHVwcy1zZWN0aW9uJyk7XG4gIGNvbnN0IHdvcnN0TWF0Y2h1cHNFbGVtZW50ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ3dvcnN0LW1hdGNodXBzIG1hdGNodXBzJywgd29yc3RNYXRjaHVwc1NlY3Rpb24pO1xuICBjb25zdCB3b3JzdE1hdGNodXBzRGF0YSA9IGNoYW1waW9uU3RhdHMud29yc3RNYXRjaFVwcztcbiAgcmVuZGVyTWF0Y2h1cHNJbmZvKHdvcnN0TWF0Y2h1cHNFbGVtZW50LCB3b3JzdE1hdGNodXBzRGF0YSwgbGF0ZXN0VmVyc2lvbik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjaGFtcGlvblN0YXRzTW9kYWw7XG4iLCJpbXBvcnQgRHJvcGRvd25TZWN0aW9uIGZyb20gJy4uL2hlbHBlcnMvZHJvcGRvd25TZWN0aW9uJztcbmltcG9ydCB7IGdldEFsbENoYW1waW9uRGV0YWlscyB9IGZyb20gJy4uL2NoYW1waW9uRGF0YS9nZXRBbGxDaGFtcGlvbnMnO1xuaW1wb3J0IEVsZW1lbnRDcmVhdGlvbiBmcm9tICcuLi9oZWxwZXJzL2VsZW1lbnRDcmVhdGlvbic7XG5pbXBvcnQgeyBjcmVhdGVDaGFtcGlvbkNvbnRhaW5lciB9IGZyb20gJy4vcmVuZGVySGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jICgpID0+IHtcbiAgLyogQ3JlYXRlcyB0aGUgZmlsdGVyIGFuZCBzb3J0aW5nIHNlY3Rpb24gYmVsb3cgdGhlIGhlYWRlciAqL1xuICBjb25zdCBmaWx0ZXJTb3J0U2VjdGlvbiA9IERyb3Bkb3duU2VjdGlvbi5jcmVhdGVTZWN0aW9uKCk7XG5cbiAgY29uc3Qgc29ydE9wdGlvbnMgPSB7XG4gICAgc29ydDogWyd3aW5yYXRlJywgJ3BpY2tyYXRlJywgJ2RhbWFnZSddLFxuICB9O1xuXG4gIGNvbnN0IHJvbGVPcHRpb25zID0ge1xuICAgIHJvbGU6IFsndGFuaycsICdhc3Nhc3NpbicsICdmaWdodGVyJywgJ21hZ2UnLCAnbWFya3NtYW4nLCAnc3VwcG9ydCddLFxuICB9O1xuICBjb25zdCBkaWZmaWN1bHR5T3B0aW9ucyA9IHtcbiAgICBkaWZmaWN1bHR5OiBbJ2xvdycsICdtZWRpdW0nLCAnaGlnaCddLFxuICB9O1xuICBjb25zdCBtdWx0aU9wdGlvbkFycmF5cyA9IFtyb2xlT3B0aW9ucywgZGlmZmljdWx0eU9wdGlvbnNdO1xuXG4gIGNvbnN0IHNvcnREcm9wZG93biA9IG5ldyBEcm9wZG93blNlY3Rpb24oJ3NvcnQnLCBzb3J0T3B0aW9ucy5zb3J0KTtcbiAgc29ydERyb3Bkb3duLnJlbmRlckRyb3Bkb3duKGZpbHRlclNvcnRTZWN0aW9uLCAnc2luZ2xlLXNlbGVjdCcpO1xuXG4gIG11bHRpT3B0aW9uQXJyYXlzLmZvckVhY2goKG9wdGlvbnNPYmplY3QpID0+IHtcbiAgICBjb25zdCBkcm9wZG93bk5hbWUgPSBPYmplY3Qua2V5cyhvcHRpb25zT2JqZWN0KVswXTtcbiAgICBjb25zdCBvcHRpb25zQXJyYXkgPSBPYmplY3QudmFsdWVzKG9wdGlvbnNPYmplY3QpWzBdO1xuICAgIGNvbnN0IGRyb3Bkb3duID0gbmV3IERyb3Bkb3duU2VjdGlvbihkcm9wZG93bk5hbWUsIG9wdGlvbnNBcnJheSk7XG4gICAgZHJvcGRvd24ucmVuZGVyRHJvcGRvd24oZmlsdGVyU29ydFNlY3Rpb24sICdtdWx0aS1zZWxlY3QnKTtcbiAgfSk7XG5cbiAgLyogTG9hZCBhbGwgY2hhbXBpb25zIGFuZCByZW5kZXIgdGhlbSB0byB0aGUgY2hhbXBpb25zIHBhZ2UgKi9cbiAgY29uc3QgY2hhbXBpb25zUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGFtcGlvbnMtcGFnZScpO1xuICBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnbG9hZGVyJywgY2hhbXBpb25zUGFnZSk7XG4gIGNvbnN0IGNoYW1waW9uc1NlY3Rpb24gPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnY2hhbXBpb25zLXNlY3Rpb24nLCBjaGFtcGlvbnNQYWdlKTtcbiAgY29uc3QgYWxsQ2hhbXBpb25zID0gYXdhaXQgZ2V0QWxsQ2hhbXBpb25EZXRhaWxzKCk7XG4gIGNvbnN0IGFsbENoYW1waW9uc0FycmF5ID0gT2JqZWN0LnZhbHVlcyhhbGxDaGFtcGlvbnMpO1xuICBhbGxDaGFtcGlvbnNBcnJheS5mb3JFYWNoKChjaGFtcGlvbikgPT4ge1xuICAgIGNyZWF0ZUNoYW1waW9uQ29udGFpbmVyKGNoYW1waW9uLCBjaGFtcGlvbnNTZWN0aW9uKTtcbiAgfSk7XG5cbiAgLyogQ3JlYXRlcyBhdXRvY29tcGxldGUgZGl2IGZvciB0aGUgc2VhcmNoIGJhciAqL1xuICBjb25zdCBzZWFyY2hDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWNvbnRhaW5lcicpO1xuICBjb25zdCBhdXRvQ29tcGxldGVOYW1lcyA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgJ2RpdicsICdhdXRvLWNvbXBsZXRlLW5hbWVzJywgc2VhcmNoQ29udGFpbmVyLFxuICApO1xuICBhbGxDaGFtcGlvbnNBcnJheS5mb3JFYWNoKChjaGFtcGlvbikgPT4ge1xuICAgIGNvbnN0IGNoYW1waW9uTmFtZSA9IGNoYW1waW9uLm5hbWU7XG4gICAgY29uc3QgY2hhbXBpb25JZCA9IGNoYW1waW9uLmlkO1xuICAgIGNvbnN0IGF1dG9Db21wbGV0ZU5hbWVXcmFwcGVyID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcyhcbiAgICAgICdkaXYnLCAnYXV0by1jb21wbGV0ZS1uYW1lLXdyYXBwZXInLCBhdXRvQ29tcGxldGVOYW1lcyxcbiAgICApO1xuICAgIGF1dG9Db21wbGV0ZU5hbWVXcmFwcGVyLnRhYkluZGV4ID0gJy0xJztcbiAgICBjb25zdCBhdXRvQ29tcGxldGVOYW1lID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcyhcbiAgICAgICdzcGFuJywgJ2F1dG8tY29tcGxldGUtbmFtZScsIGF1dG9Db21wbGV0ZU5hbWVXcmFwcGVyLFxuICAgICk7XG4gICAgYXV0b0NvbXBsZXRlTmFtZS50ZXh0Q29udGVudCA9IGNoYW1waW9uTmFtZTtcbiAgICBhdXRvQ29tcGxldGVOYW1lLmRhdGFzZXQuY2hhbXBpb25JZCA9IGNoYW1waW9uSWQ7XG4gICAgYXV0b0NvbXBsZXRlTmFtZS5pZCA9IGNoYW1waW9uTmFtZTtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IEVsZW1lbnRDcmVhdGlvbiBmcm9tICcuLi9oZWxwZXJzL2VsZW1lbnRDcmVhdGlvbic7XG5cbmNvbnN0IGltcG9ydEFsbCA9IChyKSA9PiB7XG4gIGNvbnN0IGltYWdlcyA9IHt9O1xuICByLmtleXMoKS5mb3JFYWNoKChpdGVtKSA9PiB7IGltYWdlc1tpdGVtLnJlcGxhY2UoJy4vJywgJycpXSA9IHIoaXRlbSk7IH0pO1xuICByZXR1cm4gaW1hZ2VzO1xufTtcblxuY29uc3QgaW1hZ2VzID0gaW1wb3J0QWxsKHJlcXVpcmUuY29udGV4dCgnLi4vYXNzZXRzL2ltYWdlcycsIGZhbHNlLCAvXFwuKHBuZ3xqcGU/Z3xzdmcpJC8pKTtcblxuY29uc3QgcmVuZGVySGVhZGVyRGV0YWlscyA9IChjaGFtcGlvbkRhdGEsIG1vZGFsQ29udGFpbmVyKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke21vZGFsQ29udGFpbmVyfS1jb250YWluZXJgKTtcbiAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmQgPSBgbm8tcmVwZWF0IHVybChodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vaW1nL2NoYW1waW9uL3NwbGFzaC8ke2NoYW1waW9uRGF0YS5pZH1fMC5qcGcpIDcwJSA4MCVgO1xuICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY292ZXInO1xuXG4gIGNvbnN0IGNoYW1waW9uVGl0bGUgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLXRpdGxlJyk7XG4gIGNoYW1waW9uVGl0bGUudGV4dENvbnRlbnQgPSBjaGFtcGlvbkRhdGEudGl0bGU7XG5cbiAgY29uc3QgY2hhbXBpb25OYW1lID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbi1uYW1lJyk7XG4gIGNoYW1waW9uTmFtZS50ZXh0Q29udGVudCA9IGNoYW1waW9uRGF0YS5uYW1lO1xufTtcblxuLyogUmVuZGVycyB3aW4gb3IgcGljayByYXRlIHRvIHRoZSBET00gKi9cbmNvbnN0IHJlbmRlclN0YXRPdmVydmlldyA9IChzdGF0c092ZXJ2aWV3LCByYXRlVGV4dCwgcmF0ZVR5cGUpID0+IHtcbiAgY29uc3QgY2hhbXBpb25SYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjb25zdCByYXRlVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgLyogVHVybnMgJ1dpbiBSYXRlJyBpbnRvICd3aW4tcmF0ZScgKi9cbiAgY29uc3QgbG93ZXJDYXNlVGV4dCA9IHJhdGVUZXh0LnJlcGxhY2UoJyAnLCAnLScpLnRvTG93ZXJDYXNlKCk7XG5cbiAgY2hhbXBpb25SYXRlLmNsYXNzTmFtZSA9IGxvd2VyQ2FzZVRleHQ7XG4gIGxhYmVsLmlkID0gYCR7bG93ZXJDYXNlVGV4dH0tbGFiZWxgO1xuICBsYWJlbC5jbGFzc05hbWUgPSAnbGFiZWwnO1xuICByYXRlVmFsdWUuY2xhc3NOYW1lID0gYCR7bG93ZXJDYXNlVGV4dH0tdmFsdWVgO1xuICBsYWJlbC50ZXh0Q29udGVudCA9IHJhdGVUZXh0O1xuICByYXRlVmFsdWUudGV4dENvbnRlbnQgPSBgJHtyYXRlVHlwZX0lYDtcblxuICBjaGFtcGlvblJhdGUuYXBwZW5kQ2hpbGQobGFiZWwpOyBjaGFtcGlvblJhdGUuYXBwZW5kQ2hpbGQocmF0ZVZhbHVlKTtcbiAgc3RhdHNPdmVydmlldy5hcHBlbmRDaGlsZChjaGFtcGlvblJhdGUpO1xufTtcblxuY29uc3QgcmVuZGVyQ2hhbXBpb25MYW5lID0gKHN0YXRzT3ZlcnZpZXcsIGxhbmUpID0+IHtcbiAgY29uc3QgY2hhbXBpb25MYW5lSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjaGFtcGlvbkxhbmVJbmZvLmNsYXNzTmFtZSA9ICdsYW5lLWluZm8nO1xuICBjb25zdCBsYW5lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgbGFuZVRleHQuY2xhc3NOYW1lID0gJ2xhbmUtdGV4dCBsYWJlbCc7XG4gIGxhbmVUZXh0LnRleHRDb250ZW50ID0gbGFuZTtcbiAgY29uc3QgbGFuZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgbGFuZUljb24uY2xhc3NOYW1lID0gJ2xhbmUtaWNvbiBjaGFtcGlvbi1yb2xlLWltYWdlJztcbiAgbGFuZUljb24uc3JjID0gYCR7aW1hZ2VzW2Ake2xhbmV9LnBuZ2BdfWA7XG4gIGxhbmVJY29uLmFsdCA9IGAke2xhbmV9LnBuZ2A7XG4gIGNoYW1waW9uTGFuZUluZm8uYXBwZW5kQ2hpbGQobGFuZVRleHQpO1xuICBjaGFtcGlvbkxhbmVJbmZvLmFwcGVuZENoaWxkKGxhbmVJY29uKTtcbiAgc3RhdHNPdmVydmlldy5hcHBlbmRDaGlsZChjaGFtcGlvbkxhbmVJbmZvKTtcbn07XG5cbmNvbnN0IHJlbmRlckRhbWFnZVN0YXRzID0gKGRhbWFnZVR5cGUsIGRhbWFnZVZhbHVlLCBkYW1hZ2VQZXJjZW50YWdlKSA9PiB7XG4gIGNvbnN0IGRhbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2RhbWFnZVR5cGV9LWRhbWFnZS1jb250YWluZXJgKTtcblxuICBjb25zdCBkYW1hZ2VTdGF0cyA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdkYW1hZ2Utc3RhdHMnLCBkYW1hZ2VDb250YWluZXIpO1xuXG4gIGNvbnN0IGRhbWFnZVZhbHVlRWxlbWVudCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoSWQoJ3NwYW4nLCBgJHtkYW1hZ2VUeXBlfS12YWx1ZWAsIGRhbWFnZVN0YXRzKTtcbiAgY29uc3QgZGFtYWdlUGVyY2VudGFnZUVsZW1lbnQgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aElkKCdzcGFuJywgYCR7ZGFtYWdlVHlwZX0tcGVyY2VudGFnZWAsIGRhbWFnZVN0YXRzKTtcbiAgZGFtYWdlVmFsdWVFbGVtZW50LnRleHRDb250ZW50ID0gYCR7ZGFtYWdlVmFsdWV9YDtcbiAgZGFtYWdlUGVyY2VudGFnZUVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtkYW1hZ2VQZXJjZW50YWdlfSVgO1xufTtcblxuY29uc3QgcmVuZGVyTWF0Y2h1cHNJbmZvID0gKG1hdGNodXBzRWxlbWVudCwgbWF0Y2h1cHNEYXRhLCBsYXRlc3RWZXJzaW9uKSA9PiB7XG4gIG1hdGNodXBzRGF0YS5mb3JFYWNoKChtYXRjaHVwKSA9PiB7XG4gICAgY29uc3QgbWF0Y2h1cEluZm8gPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnbWF0Y2h1cC1pbmZvJywgbWF0Y2h1cHNFbGVtZW50KTtcbiAgICBjb25zdCBlbmVteUNoYW1waW9uTmFtZSA9IG1hdGNodXBbMV0ubmFtZTtcbiAgICBjb25zdCBlbmVteUNoYW1waW9uSWQgPSBtYXRjaHVwWzBdO1xuICAgIGNvbnN0IGVuZW15Q2hhbXBpb25JbWdVcmwgPSBgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLyR7bGF0ZXN0VmVyc2lvbn0vaW1nL2NoYW1waW9uLyR7ZW5lbXlDaGFtcGlvbklkfS5wbmdgO1xuICAgIEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEltYWdlRWxlbWVudFdpdGhDbGFzcyhcbiAgICAgICdlbmVteS1jaGFtcGlvbi1pbWcnLCBtYXRjaHVwSW5mbywgZW5lbXlDaGFtcGlvbkltZ1VybCwgYHNtYWxsLSR7ZW5lbXlDaGFtcGlvbklkfWAsXG4gICAgKTtcblxuICAgIGNvbnN0IG1hdGNodXBTdGF0cyA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdtYXRjaHVwLXN0YXRzJywgbWF0Y2h1cEluZm8pO1xuICAgIGNvbnN0IGVuZW15Q2hhbXBpb25OYW1lRWxlbWVudCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnZW5lbXktY2hhbXBpb24tbmFtZScsIG1hdGNodXBTdGF0cyk7XG4gICAgZW5lbXlDaGFtcGlvbk5hbWVFbGVtZW50LnRleHRDb250ZW50ID0gZW5lbXlDaGFtcGlvbk5hbWU7XG4gICAgY29uc3Qgd2lucmF0ZUFnYWluc3QgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnd2lucmF0ZS1hZ2FpbnN0JywgbWF0Y2h1cFN0YXRzKTtcbiAgICBjb25zdCB3aW5yYXRlQWdhaW5zdExhYmVsID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICd3aW5yYXRlLWFnYWluc3QtbGFiZWwnLCB3aW5yYXRlQWdhaW5zdCk7XG4gICAgd2lucmF0ZUFnYWluc3RMYWJlbC50ZXh0Q29udGVudCA9ICdXaW5yYXRlOiAnO1xuICAgIGNvbnN0IGNvbG9yID0gbWF0Y2h1cHNFbGVtZW50LmNsYXNzTmFtZSA9PT0gJ2Jlc3QtbWF0Y2h1cHMgbWF0Y2h1cHMnID8gJ2JsdWUnIDogJ3JlZCc7XG4gICAgY29uc3Qgd2lucmF0ZUFnYWluc3RQZXJjZW50YWdlID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsIGB3aW5yYXRlLWFnYWluc3QtcGVyY2VudGFnZSAke2NvbG9yfWAsIHdpbnJhdGVBZ2FpbnN0KTtcbiAgICB3aW5yYXRlQWdhaW5zdFBlcmNlbnRhZ2UudGV4dENvbnRlbnQgPSBgJHttYXRjaHVwWzFdLndpblJhdGVBZ2FpbnN0LnRvRml4ZWQoMCl9JWA7XG4gICAgY29uc3QgZ2FtZXNQbGF5ZWRBZ2FpbnN0ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdnYW1lcy1wbGF5ZWQtYWdhaW5zdCcsIG1hdGNodXBTdGF0cyk7XG4gICAgZ2FtZXNQbGF5ZWRBZ2FpbnN0LnRleHRDb250ZW50ID0gYEdhbWVzOiAke21hdGNodXBbMV0ubWF0Y2hlc31gO1xuICB9KTtcbn07XG5cbmNvbnN0IGNyZWF0ZUNoYW1waW9uQ29udGFpbmVyID0gKGNoYW1waW9uLCBjaGFtcGlvbnNTZWN0aW9uKSA9PiB7XG4gIGNvbnN0IGNoYW1waW9uQ29udGFpbmVyID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2NoYW1waW9uLWNvbnRhaW5lciBzaG93bicsIGNoYW1waW9uc1NlY3Rpb24pO1xuICBjb25zdCBjaGFtcGlvbklkID0gY2hhbXBpb24uaWQgPyBjaGFtcGlvbi5pZCA6IGNoYW1waW9uLmNoYW1waW9uTmFtZTtcbiAgY2hhbXBpb25Db250YWluZXIuZGF0YXNldC5pZCA9IGNoYW1waW9uSWQ7XG4gIGNvbnN0IGNoYW1waW9uSW1nVXJsID0gYGh0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi9pbWcvY2hhbXBpb24vbG9hZGluZy8ke2NoYW1waW9uSWR9XzAuanBnYDtcbiAgY29uc3QgY2hhbXBpb25JbWcgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgJ2NoYW1waW9uLWltZycsIGNoYW1waW9uQ29udGFpbmVyLCBjaGFtcGlvbkltZ1VybCwgJycsXG4gICk7XG4gIGNoYW1waW9uSW1nLnRhYkluZGV4ID0gMDtcbiAgY2hhbXBpb25Db250YWluZXIudGFiSW5kZXggPSAwO1xuICBjb25zdCBjaGFtcGlvbk5hbWVXcmFwcGVyID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2NoYW1waW9uLW5hbWUtd3JhcHBlcicsIGNoYW1waW9uQ29udGFpbmVyKTtcbiAgY29uc3QgY2hhbXBpb25OYW1lID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdjaGFtcGlvbi1uYW1lJywgY2hhbXBpb25OYW1lV3JhcHBlcik7XG4gIGNoYW1waW9uTmFtZS50ZXh0Q29udGVudCA9IGNoYW1waW9uLm5hbWU7XG59O1xuXG5leHBvcnQge1xuICByZW5kZXJIZWFkZXJEZXRhaWxzLFxuICByZW5kZXJTdGF0T3ZlcnZpZXcsXG4gIHJlbmRlckNoYW1waW9uTGFuZSxcbiAgcmVuZGVyRGFtYWdlU3RhdHMsXG4gIGltYWdlcyxcbiAgcmVuZGVyTWF0Y2h1cHNJbmZvLFxuICBjcmVhdGVDaGFtcGlvbkNvbnRhaW5lcixcbn07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1yYXNpbi1ibGFjazogIzFkMWUyYztcXG4gIC0tdHJhbnNwYXJlbnQtcmFzaW4tYmxhY2s6ICMxZDFlMmNjNztcXG4gIC0tZGFyay1nb2xkOiAjOTI3NTQzO1xcbiAgLS1saWdodC1nb2xkOiAjYzdhYjZlO1xcbn1cXG5cXG4jY2hhbXBpb25zLXBhZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogLTQ7XFxuICBmb250LWZhbWlseTogXFxcIkJhcmxvd1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcbiNjaGFtcGlvbnMtcGFnZSAuYXBwLW5hbWUtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBwYWRkaW5nOiAwLjNlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweCAwcHggOHB4IDA7XFxufVxcbiNjaGFtcGlvbnMtcGFnZSAuYXBwLW5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNjaGFtcGlvbnMtcGFnZSAuYXBwLW5hbWUtY29udGFpbmVyOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbiNjaGFtcGlvbnMtcGFnZSAucGFnZS1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMWVtIDA7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgYm9yZGVyLXdpZHRoOiAwIDAgMnB4IDA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLnNlYXJjaC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcbiNjaGFtcGlvbnMtcGFnZSAuYXV0by1jb21wbGV0ZS1uYW1lcyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDRkNGQ0O1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIGJvcmRlci10b3A6IG5vbmU7XFxuICB6LWluZGV4OiA0O1xcbiAgdG9wOiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxNHJlbTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLmF1dG8tY29tcGxldGUtbmFtZS13cmFwcGVyIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNGQ0ZDQ7XFxuICBjb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLmF1dG8tY29tcGxldGUtbmFtZS13cmFwcGVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLmF1dG8tY29tcGxldGUtbmFtZS13cmFwcGVyOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLnNlYXJjaCB7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIG1pbi13aWR0aDogMThlbTtcXG4gIGJhY2tncm91bmQ6ICNlMmU0ZTk7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBtaW4taGVpZ2h0OiAyLjZlbTtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLmNoYW1waW9ucy1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XFxuICBncmlkLWNvbHVtbi1nYXA6IDFlbTtcXG4gIG1heC13aWR0aDogODAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogMmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMTFlbTtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5jaGFtcGlvbi1jb250YWluZXIuc2hvd24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1heC13aWR0aDogOXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi10b3A6IDEuNWVtO1xcbiAgb3BhY2l0eTogMC44O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcbiNjaGFtcGlvbnMtcGFnZSAuY2hhbXBpb24tY29udGFpbmVyLnNob3duOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLmNoYW1waW9uLWNvbnRhaW5lci5zaG93bjpmb2N1cyB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5jaGFtcGlvbi1jb250YWluZXIuaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbiNjaGFtcGlvbnMtcGFnZSAuY2hhbXBpb24taW1nIHtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiA4JTtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5jaGFtcGlvbi1pbWc6Zm9jdXMgLmNoYW1waW9uLWNvbnRhaW5lci5zaG93biB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5jaGFtcGlvbi1uYW1lLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAtMy4yZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudC1yYXNpbi1ibGFjayk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDAuMmVtIDAgMC4yZW07XFxufVxcbiNjaGFtcGlvbnMtcGFnZSAuY2hhbXBpb24tbmFtZSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmFybG93XFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5maWx0ZXItc29ydC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogNTclO1xcbiAgbWFyZ2luOiAxZW0gYXV0byAzZW0gYXV0bztcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5sYW5lLWZpbHRlci1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmbGV4OiAxO1xcbiAgd2lkdGg6IDc2JTtcXG4gIG1hcmdpbjogMWVtIGF1dG87XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5oZWFkZXItb3B0aW9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjNzA3NTdhO1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLmhlYWRlci1vcHRpb246aG92ZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IHZhcigtLWxpZ2h0LWdvbGQpO1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLmhlYWRlci1vcHRpb24uYWN0aXZlIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCB2YXIoLS1saWdodC1nb2xkKTtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5kcm9wZG93biB7XFxuICBtYXJnaW46IDAgMC40ZW0gMC40ZW0gMC40ZW07XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbGV4OiAxO1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLmRyb3Bkb3duLWJ0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZGZlMTtcXG4gIGNvbG9yOiAjMmYxZDFkO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5kcm9wZG93bi1idG46OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCLinqRcXFwiO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLmRyb3Bkb3duLW9wdGlvbnMge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDI7XFxufVxcbiNjaGFtcGlvbnMtcGFnZSAuZHJvcGRvd24tb3B0aW9uIHtcXG4gIGNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZjhmOGY4O1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLmRyb3Bkb3duLW9wdGlvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFkZWRlO1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLmRyb3Bkb3duLW9wdGlvbi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxufVxcbiNjaGFtcGlvbnMtcGFnZSAubG9hZGVyIHtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIG1hcmdpbjogNTBweCBhdXRvO1xcbiAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XFxuICB3aWR0aDogMTFlbTtcXG4gIGhlaWdodDogMTFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQ6ICMyZTM0MzY7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMmUzNDM2IDEwJSwgcmdiYSgxNDMsIDg5LCAyLCAwKSA0MiUpO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzJlMzQzNiAxMCUsIHJnYmEoMTQzLCA4OSwgMiwgMCkgNDIlKTtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMmUzNDM2IDEwJSwgcmdiYSgxNDMsIDg5LCAyLCAwKSA0MiUpO1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMmUzNDM2IDEwJSwgcmdiYSgxNDMsIDg5LCAyLCAwKSA0MiUpO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMmUzNDM2IDEwJSwgcmdiYSgxNDMsIDg5LCAyLCAwKSA0MiUpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGxvYWQzIDEuNHMgaW5maW5pdGUgbGluZWFyO1xcbiAgYW5pbWF0aW9uOiBsb2FkMyAxLjRzIGluZmluaXRlIGxpbmVhcjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDE3LjNlbTtcXG4gIHotaW5kZXg6IDU7XFxufVxcbiNjaGFtcGlvbnMtcGFnZSAubG9hZGVyOmJlZm9yZSB7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJSAwIDAgMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5sb2FkZXI6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgd2lkdGg6IDc1JTtcXG4gIGhlaWdodDogNzUlO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBtYXJnaW46IGF1dG87XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkMyB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBsb2FkMyB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuI2NoYW1waW9ucy1wYWdlIC5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHBhZGRpbmc6IDAgMS4zZW0gMC42ZW0gMS4zZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLmZvb3Rlci1saW5rcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLmdpdGh1Yi1saW5rIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuMmVtO1xcbiAgcGFkZGluZy10b3A6IDAuNGVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XFxufVxcbiNjaGFtcGlvbnMtcGFnZSAuZ2l0aHViLWljb24ge1xcbiAgd2lkdGg6IDIuNWVtO1xcbiAgdHJhbnNpdGlvbjogZmlsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLmdpdGh1Yi1saW5rOmhvdmVyIC5naXRodWItaWNvbiB7XFxuICBmaWxsOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxufVxcbiNjaGFtcGlvbnMtcGFnZSAubGlua2VkaW4tbGluayB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjJlbTtcXG4gIHBhZGRpbmctdG9wOiAwLjRlbTtcXG4gIG1hcmdpbi1sZWZ0OiAxZW07XFxufVxcbiNjaGFtcGlvbnMtcGFnZSAubGlua2VkaW4taWNvbiB7XFxuICB3aWR0aDogMi41ZW07XFxuICB0cmFuc2l0aW9uOiBmaWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcbiNjaGFtcGlvbnMtcGFnZSAubGlua2VkaW4tbGluazpob3ZlciAubGlua2VkaW4taWNvbiB7XFxuICBmaWxsOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA4NTBweCkge1xcbiAgI2NoYW1waW9ucy1wYWdlIC5jaGFtcGlvbnMtc2VjdGlvbiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICB9XFxuICAjY2hhbXBpb25zLXBhZ2UgLmNoYW1waW9uLWNvbnRhaW5lci5zaG93biB7XFxuICAgIG1heC13aWR0aDogMTByZW07XFxuICB9XFxuICAjY2hhbXBpb25zLXBhZ2UgLmxhbmUtZmlsdGVyLWhlYWRlciB7XFxuICAgIHdpZHRoOiA1NCU7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcXG4gICNjaGFtcGlvbnMtcGFnZSAuZHJvcGRvd24ge1xcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXG4gIH1cXG4gICNjaGFtcGlvbnMtcGFnZSAuY2hhbXBpb25zLXNlY3Rpb24ge1xcbiAgICBncmlkLWNvbHVtbi1nYXA6IDA7XFxuICB9XFxuICAjY2hhbXBpb25zLXBhZ2UgLmNoYW1waW9uLW5hbWUtd3JhcHBlciB7XFxuICAgIG1hcmdpbi10b3A6IC0zLjZlbTtcXG4gIH1cXG4gICNjaGFtcGlvbnMtcGFnZSAuY2hhbXBpb24tbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMS40ZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gICNjaGFtcGlvbnMtcGFnZSAuY2hhbXBpb25zLXNlY3Rpb24ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTUwMHB4KSB7XFxuICAjY2hhbXBpb25zLXBhZ2UgLmNoYW1waW9ucy1zZWN0aW9uIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXG4gIH1cXG4gICNjaGFtcGlvbnMtcGFnZSAuY2hhbXBpb24tY29udGFpbmVyLnNob3duIHtcXG4gICAgbWF4LXdpZHRoOiAxMnJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICAjY2hhbXBpb25zLXBhZ2UgLmhlYWRlci1vcHRpb24ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xcbiAgfVxcbiAgI2NoYW1waW9ucy1wYWdlIC5maWx0ZXItc29ydC1zZWN0aW9uIHtcXG4gICAgd2lkdGg6IDk0JTtcXG4gIH1cXG4gICNjaGFtcGlvbnMtcGFnZSAuc2VhcmNoIHtcXG4gICAgbWluLXdpZHRoOiAxNmVtO1xcbiAgICBtaW4taGVpZ2h0OiAxLjZlbTtcXG4gICAgZm9udC1zaXplOiAwLjk1ZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgI2NoYW1waW9ucy1wYWdlIC5jaGFtcGlvbnMtc2VjdGlvbiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICB9XFxuICAjY2hhbXBpb25zLXBhZ2UgLnBhZ2UtaGVhZGVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gICNjaGFtcGlvbnMtcGFnZSAuYXBwLW5hbWUtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMzYwcHgpIHtcXG4gICNjaGFtcGlvbnMtcGFnZSAubGFuZS1maWx0ZXItaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9z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Q0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQXpDSjtBQTRDRTtFQUNFLGFBQUE7QUExQ0o7QUE2Q0U7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUEzQ0o7QUE4Q0U7RUFDRSxZQUFBO0VBQ0EsaUNBQUE7QUE1Q0o7QUFnREk7RUFDRSx3QkFBQTtBQTlDTjtBQWtERTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQWhESjtBQW1ERTtFQUNFLFlBQUE7RUFDQSxpQ0FBQTtBQWpESjtBQXFESTtFQUNFLHdCQUFBO0FBbkROO0FBdURFO0VBQ0U7SUFDRSxxQ0FBQTtFQXJESjtFQXdERTtJQUNFLGdCQUFBO0VBdERKO0VBeURFO0lBQ0UsVUFBQTtFQXZESjtBQUNGO0FBMERFO0VBQ0U7SUFDRSxpQkFBQTtFQXhESjtFQTJERTtJQUNFLGtCQUFBO0VBekRKO0VBNERFO0lBQ0Usa0JBQUE7RUExREo7RUE2REU7SUFDRSxnQkFBQTtFQTNESjtBQUNGO0FBOERFO0VBQ0U7SUFDRSxxQ0FBQTtFQTVESjtBQUNGO0FBK0RFO0VBQ0U7SUFDRSxxQ0FBQTtFQTdESjtFQWdFRTtJQUNFLGdCQUFBO0VBOURKO0FBQ0Y7QUFpRUU7RUFDRTtJQUNFLG1CQUFBO0VBL0RKO0VBa0VFO0lBQ0UsVUFBQTtFQWhFSjtFQW1FRTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VBakVKO0FBQ0Y7QUFvRUU7RUFDRTtJQUNFLHFDQUFBO0VBbEVKO0VBcUVFO0lBQ0Usc0JBQUE7RUFuRUo7RUFzRUU7SUFDRSxrQkFBQTtFQXBFSjtBQUNGO0FBdUVFO0VBQ0U7SUFDRSxjQUFBO0VBckVKO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1yYXNpbi1ibGFjazogIzFkMWUyYztcXG4gIC0tdHJhbnNwYXJlbnQtcmFzaW4tYmxhY2s6ICMxZDFlMmNjNztcXG4gIC0tZGFyay1nb2xkOiAjOTI3NTQzO1xcbiAgLS1saWdodC1nb2xkOiAjYzdhYjZlO1xcbn1cXG5cXG4jY2hhbXBpb25zLXBhZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogLTQ7XFxuICBmb250LWZhbWlseTogXFxcIkJhcmxvd1xcXCIsIHNhbnMtc2VyaWY7XFxuXFxuICAuYXBwLW5hbWUtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gICAgcGFkZGluZzogMC4zZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweCAwcHggOHB4IDA7XFxuICB9XFxuXFxuICAuYXBwLW5hbWUge1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gIC5hcHAtbmFtZS1jb250YWluZXI6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB9XFxuXFxuICAucGFnZS1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMWVtIDA7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gICAgYm9yZGVyLXdpZHRoOiAwIDAgMnB4IDA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuc2VhcmNoLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLmF1dG8tY29tcGxldGUtbmFtZXMge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ0ZDQ7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIHotaW5kZXg6IDQ7XFxuICAgIHRvcDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDE0cmVtO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAuYXV0by1jb21wbGV0ZS1uYW1lLXdyYXBwZXIge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDRkNGQ0O1xcbiAgICBjb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5hdXRvLWNvbXBsZXRlLW5hbWUtd3JhcHBlcjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgfVxcblxcbiAgLmF1dG8tY29tcGxldGUtbmFtZS13cmFwcGVyOmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICB9XFxuXFxuICAuc2VhcmNoIHtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIG1pbi13aWR0aDogMThlbTtcXG4gICAgYmFja2dyb3VuZDogI2UyZTRlOTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBtaW4taGVpZ2h0OiAyLjZlbTtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICB9XFxuXFxuICAuY2hhbXBpb25zLXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBncmlkLWF1dG8tcm93czogYXV0bztcXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAxZW07XFxuICAgIG1heC13aWR0aDogODAlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTFlbTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1jb250YWluZXIuc2hvd24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXgtd2lkdGg6IDlyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luLXRvcDogMS41ZW07XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tY29udGFpbmVyLnNob3duOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1jb250YWluZXIuc2hvd246Zm9jdXMge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLWNvbnRhaW5lci5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLWltZyB7XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogOCU7XFxuICB9XFxuXFxuICAuY2hhbXBpb24taW1nOmZvY3VzIHtcXG4gICAgLmNoYW1waW9uLWNvbnRhaW5lci5zaG93biB7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuICB9XFxuXFxuICAuY2hhbXBpb24tbmFtZS13cmFwcGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAtMy4yZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50LXJhc2luLWJsYWNrKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMC4yZW0gMCAwLjJlbTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1uYW1lIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LWZhbWlseTogXFxcIkJhcmxvd1xcXCIsIHNhbnMtc2VyaWY7XFxuICB9XFxuXFxuICAuZmlsdGVyLXNvcnQtc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA1NyU7XFxuXFxuICAgIG1hcmdpbjogMWVtIGF1dG8gM2VtIGF1dG87XFxuICB9XFxuXFxuICAubGFuZS1maWx0ZXItaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZsZXg6IDE7XFxuICAgIHdpZHRoOiA3NiU7XFxuICAgIG1hcmdpbjogMWVtIGF1dG87XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgfVxcblxcbiAgLmhlYWRlci1vcHRpb24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiAjNzA3NTdhO1xcbiAgfVxcblxcbiAgLmhlYWRlci1vcHRpb246aG92ZXIge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCB2YXIoLS1saWdodC1nb2xkKTtcXG4gIH1cXG5cXG4gIC5oZWFkZXItb3B0aW9uLmFjdGl2ZSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgfVxcblxcbiAgLmRyb3Bkb3duIHtcXG4gICAgbWFyZ2luOiAwIDAuNGVtIDAuNGVtIDAuNGVtO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZmxleDogMTtcXG4gIH1cXG5cXG4gIC5kcm9wZG93bi1idG4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZGZlMTtcXG4gICAgY29sb3I6ICMyZjFkMWQ7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcXG4gIH1cXG5cXG4gIC5kcm9wZG93bi1idG46OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXFwyN0E0XFxcIjtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICB9XFxuXFxuICAuZHJvcGRvd24tb3B0aW9ucyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHotaW5kZXg6IDI7XFxuICB9XFxuXFxuICAuZHJvcGRvd24tb3B0aW9uIHtcXG4gICAgY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2Y4ZjhmODtcXG4gIH1cXG5cXG4gIC5kcm9wZG93bi1vcHRpb246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFkZWRlO1xcbiAgfVxcblxcbiAgLmRyb3Bkb3duLW9wdGlvbi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gIH1cXG5cXG4gIC5sb2FkZXIge1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xcbiAgICB0ZXh0LWluZGVudDogLTk5OTllbTtcXG4gICAgd2lkdGg6IDExZW07XFxuICAgIGhlaWdodDogMTFlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kOiAjMmUzNDM2O1xcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChcXG4gICAgICBsZWZ0LFxcbiAgICAgICMyZTM0MzYgMTAlLFxcbiAgICAgIHJnYmEoMTQzLCA4OSwgMiwgMCkgNDIlXFxuICAgICk7XFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxcbiAgICAgIGxlZnQsXFxuICAgICAgIzJlMzQzNiAxMCUsXFxuICAgICAgcmdiYSgxNDMsIDg5LCAyLCAwKSA0MiVcXG4gICAgKTtcXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsICMyZTM0MzYgMTAlLCByZ2JhKDE0MywgODksIDIsIDApIDQyJSk7XFxuICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQobGVmdCwgIzJlMzQzNiAxMCUsIHJnYmEoMTQzLCA4OSwgMiwgMCkgNDIlKTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMmUzNDM2IDEwJSwgcmdiYSgxNDMsIDg5LCAyLCAwKSA0MiUpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkMyAxLjRzIGluZmluaXRlIGxpbmVhcjtcXG4gICAgYW5pbWF0aW9uOiBsb2FkMyAxLjRzIGluZmluaXRlIGxpbmVhcjtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDE3LjNlbTtcXG4gICAgei1pbmRleDogNTtcXG4gIH1cXG4gIC5sb2FkZXI6YmVmb3JlIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWRhcmstZ29sZCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCUgMCAwIDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIH1cXG4gIC5sb2FkZXI6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGhlaWdodDogNzUlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgfVxcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGxvYWQzIHtcXG4gICAgMCUge1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIH1cXG4gIH1cXG4gIEBrZXlmcmFtZXMgbG9hZDMge1xcbiAgICAwJSB7XFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAwLjhlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIHBhZGRpbmc6IDAgMS4zZW0gMC42ZW0gMS4zZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICB9XFxuXFxuICAuZm9vdGVyLWxpbmtzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG5cXG4gIC5naXRodWItbGluayB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuMmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMC40ZW07XFxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xcbiAgfVxcblxcbiAgLmdpdGh1Yi1pY29uIHtcXG4gICAgd2lkdGg6IDIuNWVtO1xcbiAgICB0cmFuc2l0aW9uOiBmaWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICB9XFxuXFxuICAuZ2l0aHViLWxpbms6aG92ZXIge1xcbiAgICAuZ2l0aHViLWljb24ge1xcbiAgICAgIGZpbGw6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLmxpbmtlZGluLWxpbmsge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjJlbTtcXG4gICAgcGFkZGluZy10b3A6IDAuNGVtO1xcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xcbiAgfVxcblxcbiAgLmxpbmtlZGluLWljb24ge1xcbiAgICB3aWR0aDogMi41ZW07XFxuICAgIHRyYW5zaXRpb246IGZpbGwgMC4ycyBlYXNlLWluLW91dDtcXG4gIH1cXG5cXG4gIC5saW5rZWRpbi1saW5rOmhvdmVyIHtcXG4gICAgLmxpbmtlZGluLWljb24ge1xcbiAgICAgIGZpbGw6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gICAgfVxcbiAgfVxcblxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDg1MHB4KSB7XFxuICAgIC5jaGFtcGlvbnMtc2VjdGlvbiB7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gICAgfVxcblxcbiAgICAuY2hhbXBpb24tY29udGFpbmVyLnNob3duIHtcXG4gICAgICBtYXgtd2lkdGg6IDEwcmVtO1xcbiAgICB9XFxuXFxuICAgIC5sYW5lLWZpbHRlci1oZWFkZXIge1xcbiAgICAgIHdpZHRoOiA1NCU7XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcXG4gICAgLmRyb3Bkb3duIHtcXG4gICAgICBncmlkLXJvdy1zdGFydDogMjtcXG4gICAgfVxcblxcbiAgICAuY2hhbXBpb25zLXNlY3Rpb24ge1xcbiAgICAgIGdyaWQtY29sdW1uLWdhcDogMDtcXG4gICAgfVxcblxcbiAgICAuY2hhbXBpb24tbmFtZS13cmFwcGVyIHtcXG4gICAgICBtYXJnaW4tdG9wOiAtMy42ZW07XFxuICAgIH1cXG5cXG4gICAgLmNoYW1waW9uLW5hbWUge1xcbiAgICAgIGZvbnQtc2l6ZTogMS40ZW07XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gICAgLmNoYW1waW9ucy1zZWN0aW9uIHtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgKG1pbi13aWR0aDogMTUwMHB4KSB7XFxuICAgIC5jaGFtcGlvbnMtc2VjdGlvbiB7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXG4gICAgfVxcblxcbiAgICAuY2hhbXBpb24tY29udGFpbmVyLnNob3duIHtcXG4gICAgICBtYXgtd2lkdGg6IDEycmVtO1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gICAgLmhlYWRlci1vcHRpb24ge1xcbiAgICAgIG1hcmdpbi1yaWdodDogMC41ZW07XFxuICAgIH1cXG5cXG4gICAgLmZpbHRlci1zb3J0LXNlY3Rpb24ge1xcbiAgICAgIHdpZHRoOiA5NCU7XFxuICAgIH1cXG5cXG4gICAgLnNlYXJjaCB7XFxuICAgICAgbWluLXdpZHRoOiAxNmVtO1xcbiAgICAgIG1pbi1oZWlnaHQ6IDEuNmVtO1xcbiAgICAgIGZvbnQtc2l6ZTogMC45NWVtO1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gICAgLmNoYW1waW9ucy1zZWN0aW9uIHtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICB9XFxuXFxuICAgIC5wYWdlLWhlYWRlciB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAuYXBwLW5hbWUtY29udGFpbmVyIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAzNjBweCkge1xcbiAgICAubGFuZS1maWx0ZXItaGVhZGVyIHtcXG4gICAgICBmb250LXNpemU6IDFlbTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1yYXNpbi1ibGFjazogIzFkMWUyYztcXG4gIC0tZGFyay1nb2xkOiAjOTI3NTQzO1xcbiAgLS1saWdodC1nb2xkOiAjYzdhYjZlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICBwYWRkaW5nOiAycmVtIDA7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCYXJsb3dcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG4ubW9kYWwgI21haW4tY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXgtd2lkdGg6IDc1JTtcXG4gIG1pbi1oZWlnaHQ6IDQ5cmVtO1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLm1vZGFsICNtYWluLWNvbnRhaW5lciAjbWFpbiB7XFxuICBjb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG59XFxuLm1vZGFsIC5tb2RhbC1oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMGUwO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC42ZW07XFxuICBsaW5lLWhlaWdodDogMS40O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMGJmO1xcbn1cXG4ubW9kYWwgLm5hdmlnYXRpb24tYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5tb2RhbCAuY2xvc2UtbW9kYWwtYnRuLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMS4yZW07XFxufVxcbi5tb2RhbCAuY2xvc2UtbW9kYWwtYnRuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBmb250LXNpemU6IDEuNmVtO1xcbn1cXG4ubW9kYWwgLmNsb3NlLW1vZGFsLWJ0bjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxufVxcbi5tb2RhbCAubW9kYWwtbmF2LWxpbmtzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubW9kYWwgLm1vZGFsLW5hdi1saW5rIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcbi5tb2RhbCAubW9kYWwtbmF2LWxpbms6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxufVxcbi5tb2RhbCAuY2hhbXBpb24taGVhZGluZyB7XFxuICBtYXJnaW46IGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tbmFtZSB7XFxuICBtYXJnaW46IGF1dG87XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tdGl0bGUge1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbWFyZ2luLXRvcDogMC41ZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1yb2xlcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tcm9sZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXJlc291cmNlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tcm9sZS1pbWFnZSB7XFxuICBoZWlnaHQ6IDMuNXJlbTtcXG4gIHdpZHRoOiAzLjVyZW07XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tcmVzb3VyY2UtaW1hZ2Uge1xcbiAgaGVpZ2h0OiAzLjVyZW07XFxuICB3aWR0aDogMy41cmVtO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXJvbGUtbmFtZSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXJlc291cmNlLW5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1tYWluLWluZm8ge1xcbiAgcGFkZGluZzogMS44cmVtO1xcbiAgbWF4LXdpZHRoOiAzNHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBsYXN0IGJhc2VsaW5lO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XFxuICBmcm9tIHtcXG4gICAgdG9wOiAtMzAwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICB0byB7XFxuICAgIHRvcDogMDtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBhbmltYXRldG9wIHtcXG4gIGZyb20ge1xcbiAgICB0b3A6IC0zMDBweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdG9wOiAwO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG4ubW9kYWwgLmxvcmUtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBlMDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxufVxcbi5tb2RhbCAuc3ViaGVhZGluZyB7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAwLjRlbTtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1vZGFsIC5hYmlsaXRpZXMtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBlMDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICB3aWR0aDogMjhlbTtcXG59XFxuLm1vZGFsIC5hYmlsaXRpZXMtaGVhZGluZyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tb2RhbCAuYWJpbGl0eS1pbWdzIHtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuLm1vZGFsIC5hYmlsaXR5LWRlc2NyaXB0aW9uIHtcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tZGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1leHRyYS1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ubW9kYWwgLmFiaWxpdHktaW5mbyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubW9kYWwgLmFiaWxpdHktaW5mby5hY3RpdmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5tb2RhbCAuc3BlbGwtaW1nIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMCAwLjVyZW07XFxuICBoZWlnaHQ6IDMuM3JlbTtcXG4gIHdpZHRoOiAzLjNyZW07XFxufVxcbi5tb2RhbCAuc3BlbGwtaW1nLmNsaWNrZWQge1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci13aWR0aDogNHB4O1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXRpcHMtc2VjdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwZTA7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG4gIG1heC13aWR0aDogMzRyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tdGlwcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi10aXAge1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG4ubW9kYWwgI3N0YXRzLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nOiAwO1xcbiAgbWF4LXdpZHRoOiA3NSU7XFxuICBtaW4taGVpZ2h0OiA0OXJlbTtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLm1vZGFsICNzdGF0cy1jb250YWluZXIgI3N0YXRzIHtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXN0YXRzLW92ZXJ2aWV3IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxuICBtYXgtd2lkdGg6IDI1cmVtO1xcbiAgbWluLXdpZHRoOiAyMHJlbTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuLm1vZGFsIC53aW4tcmF0ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLm1vZGFsIC5waWNrLXJhdGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5tb2RhbCAubGFuZS1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1vZGFsIC5waWNrLXJhdGUtdmFsdWUge1xcbiAgbWFyZ2luLXRvcDogMC40ZW07XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxufVxcbi5tb2RhbCAud2luLXJhdGUtdmFsdWUge1xcbiAgbWFyZ2luLXRvcDogMC40ZW07XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxufVxcbi5tb2RhbCAubGFiZWwge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLWRhbWFnZS1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMGUwO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC42ZW07XFxuICBsaW5lLWhlaWdodDogMS40O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIG1heC1oZWlnaHQ6IDE3LjVyZW07XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuLm1vZGFsIC5kYW1hZ2UtaGVhZGluZyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tb2RhbCAuY2lyY3VsYXItY2hhcnQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogODAlO1xcbiAgbWF4LWhlaWdodDogMTRlbTtcXG59XFxuLm1vZGFsIC5jaXJjbGUge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZS13aWR0aDogMi4yO1xcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xcbiAgYW5pbWF0aW9uOiBwcm9ncmVzcyAxcyBlYXNlLW91dCBmb3J3YXJkcztcXG59XFxuLm1vZGFsICNtYWdpYy1kYW1hZ2Utc3Ryb2tlIHtcXG4gIHN0cm9rZTogIzM1YTdmZjtcXG59XFxuLm1vZGFsICNwaHlzaWNhbC1kYW1hZ2Utc3Ryb2tlIHtcXG4gIHN0cm9rZTogI2ZmNTk2NDtcXG59XFxuLm1vZGFsICN0cnVlLWRhbWFnZS1zdHJva2Uge1xcbiAgc3Ryb2tlOiAjZmZlNzRjO1xcbn1cXG5Aa2V5ZnJhbWVzIHByb2dyZXNzIHtcXG4gIDAlIHtcXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMCAxMDA7XFxuICB9XFxufVxcbi5tb2RhbCAudG90YWwtZGFtYWdlLXRleHQge1xcbiAgZm9udC1zaXplOiA0cHg7XFxuICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xcbiAgZmlsbDogd2hpdGU7XFxufVxcbi5tb2RhbCAudG90YWwtZGFtYWdlLWxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogM3B4O1xcbiAgdGV4dC1hbmNob3I6IG1pZGRsZTtcXG4gIGZpbGw6IHZhcigtLWRhcmstZ29sZCk7XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tbWFpbi1zdGF0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcbi5tb2RhbCAuY2hhbXBpb24taXRlbS1idWlsZHMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMGUwO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC42ZW07XFxuICBsaW5lLWhlaWdodDogMS40O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIG1heC1oZWlnaHQ6IDE3LjVyZW07XFxufVxcbi5tb2RhbCAuZGFtYWdlLXN0YXRzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1vZGFsIC5kYW1hZ2UtaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWF4LWhlaWdodDogOTIlO1xcbiAgaGVpZ2h0OiA5MiU7XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuLm1vZGFsIC5kYW1hZ2UtdHlwZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuLm1vZGFsIC5kYW1hZ2Utc3RhdHMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuLm1vZGFsICNwaHlzaWNhbC1kYW1hZ2UtbGFiZWwge1xcbiAgY29sb3I6ICNmZjU5NjQ7XFxufVxcbi5tb2RhbCAjbWFnaWMtZGFtYWdlLWxhYmVsIHtcXG4gIGNvbG9yOiAjMzVhN2ZmO1xcbn1cXG4ubW9kYWwgI3RydWUtZGFtYWdlLWxhYmVsIHtcXG4gIGNvbG9yOiAjZmZlNzRjO1xcbn1cXG4ubW9kYWwgLml0ZW0tZGV0YWlscy1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMGUwO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC42ZW07XFxuICBsaW5lLWhlaWdodDogMS40O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwO1xcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgd2lkdGg6IDQwJTtcXG4gIHJpZ2h0OiAxMGVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMy41ZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tb2RhbCAuaXRlbS1uYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5tb2RhbCAubWFpbi1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxufVxcbi5tb2RhbCAuY29zdC1sYWJlbCB7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5tb2RhbCAuY29tcG9uZW50LWl0ZW1zLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ubW9kYWwgLmNvbXBvbmVudC1pdGVtLW5hbWUge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4ubW9kYWwgLmNvc3QtYW1vdW50IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLm1vZGFsIC5jb21wb25lbnQtaXRlbS1jb3N0LWxhYmVsIHtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLm1vZGFsIC5jb21wb25lbnQtaXRlbS1hbW91bnQge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4ubW9kYWwgLmNvbXBvbmVudC1pdGVtLWRldGFpbHMtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBlMDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5tb2RhbCAuaXRlbS1zZXRzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1heC1oZWlnaHQ6IDkwJTtcXG59XFxuLm1vZGFsIC5pdGVtLXNldC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICBwYWRkaW5nOiAwLjRlbTtcXG59XFxuLm1vZGFsIC5tYWluLWNvbXBvbmVudC1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMGUwO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC42ZW07XFxuICBsaW5lLWhlaWdodDogMS40O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjA0MDA4MztcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogMGVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbn1cXG4ubW9kYWwgLml0ZW0taW1nIHtcXG4gIG1heC13aWR0aDogMi43ZW07XFxuICBtYXgtaGVpZ2h0OiAyLjdlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwO1xcbn1cXG4ubW9kYWwgLmNvbXBvbmVudC1pdGVtLWltZyB7XFxuICBtYXgtd2lkdGg6IDEuOGVtO1xcbiAgbWF4LWhlaWdodDogMS44ZW07XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tbWF0Y2h1cHMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMGUwO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC42ZW07XFxuICBsaW5lLWhlaWdodDogMS40O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIG1heC1oZWlnaHQ6IDI1LjJyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDAgMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuLm1vZGFsIC5tYXRjaHVwcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBtYXgtd2lkdGg6IDI0cmVtO1xcbn1cXG4ubW9kYWwgLm1hdGNodXAtaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE2MWE7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIG1hcmdpbjogYXV0byAwLjVlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG59XFxuLm1vZGFsIC5tYXRjaHVwLWluZm86aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTYxYWM5O1xcbn1cXG4ubW9kYWwgLm1hdGNodXAtc3RhdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBcXFwiQXBwbGUgU0QgR290aGljIE5lb1xcXCIsIEFwcGxlR290aGljLCBEb3R1bSwgQXJpYWwsIFRhaG9tYTtcXG59XFxuLm1vZGFsIC5lbmVteS1jaGFtcGlvbi1pbWcge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgbWF4LWhlaWdodDogM2VtO1xcbiAgbWF4LXdpZHRoOiAzZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG59XFxuLm1vZGFsIC53aW5yYXRlLWFnYWluc3QtcGVyY2VudGFnZS5ibHVlIHtcXG4gIGNvbG9yOiAjMzVhN2ZmO1xcbn1cXG4ubW9kYWwgLndpbnJhdGUtYWdhaW5zdC1wZXJjZW50YWdlLnJlZCB7XFxuICBjb2xvcjogI2ZmNTk2NDtcXG59XFxuLm1vZGFsICNza2lucy1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMDtcXG4gIG1heC13aWR0aDogNzUlO1xcbiAgbWluLWhlaWdodDogNDlyZW07XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtaW4taGVpZ2h0OiAwO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXgtd2lkdGg6IDk5JTtcXG4gIHdpZHRoOiA5OSU7XFxufVxcbi5tb2RhbCAjc2tpbnMtY29udGFpbmVyIC5uYXZpZ2F0aW9uLWJhciB7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggdmFyKC0tZGFyay1nb2xkKTtcXG59XFxuLm1vZGFsICNza2lucy1jb250YWluZXIgI3NraW5zIHtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbn1cXG4ubW9kYWwgI3NraW5zLWNvbnRhaW5lciAubW9kYWwtaGVhZGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi5tb2RhbCAuc2tpbi1pbWFnZS1jb250YWluZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5tb2RhbCAuc2tpbi1pbWFnZS1jb250YWluZXIuc2hvd24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5tb2RhbCAuc2tpbi1pbWFnZSB7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5tb2RhbCAuc2tpbi1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG4ubW9kYWwgI3NraW5zLWNvbnRhaW5lciAuY2hhbXBpb24taGVhZGluZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5tb2RhbCAuaW1nLXNjcm9sbC1hcnJvdyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG4ubW9kYWwgLmltZy1zY3JvbGwtYXJyb3c6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTIwcHgpIHtcXG4gIC5tb2RhbCAuY29tcG9uZW50LWl0ZW0taW1nIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5tb2RhbCAuaXRlbS1zZXRzLWNvbnRhaW5lciB7XFxuICAgIG1pbi1oZWlnaHQ6IDgwJTtcXG4gIH1cXG4gIC5tb2RhbCAuaXRlbS1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgIG1pbi13aWR0aDogNzAlO1xcbiAgICByaWdodDogLTZlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDEyNTBweCkge1xcbiAgLm1vZGFsIC5pdGVtLWltZyB7XFxuICAgIG1heC1oZWlnaHQ6IDIuMnJlbTtcXG4gICAgbWF4LXdpZHRoOiAyLjJyZW07XFxuICB9XFxuICAubW9kYWwgLmNoYW1waW9uLWRldGFpbHMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICB9XFxuICAubW9kYWwgLmFiaWxpdGllcy1jb250YWluZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDMxcmVtO1xcbiAgfVxcbiAgLm1vZGFsIC5sb3JlLWNvbnRhaW5lciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG4gIC5tb2RhbCAjbWFpbi1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDc2cmVtO1xcbiAgfVxcbiAgLm1vZGFsIC5pdGVtLWRldGFpbHMtY29udGFpbmVyIHtcXG4gICAgbWluLXdpZHRoOiA3MCU7XFxuICAgIHJpZ2h0OiAtNmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIC5tb2RhbCAuaXRlbS1zZXRzLWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB9XFxuICAubW9kYWwgLml0ZW0tc2V0LWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAubW9kYWwgLm1hdGNodXBzIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5tb2RhbCAuY2hhbXBpb24tbWF0Y2h1cHMge1xcbiAgICBtYXgtaGVpZ2h0OiAyOC4ycmVtO1xcbiAgfVxcbiAgLm1vZGFsIC5tYXRjaHVwLWluZm8ge1xcbiAgICBtYXJnaW46IDAuMmVtIGF1dG87XFxuICB9XFxuICAubW9kYWwgI21haW4tY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgLm1vZGFsICNzdGF0cy1jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDYzcmVtO1xcbiAgfVxcbiAgLm1vZGFsIC5pdGVtLWRldGFpbHMtY29udGFpbmVyIHtcXG4gICAgcmlnaHQ6IC0xZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA4NDBweCkge1xcbiAgLm1vZGFsIC5kYW1hZ2UtaW5mbyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICB9XFxuICAubW9kYWwgLmdhbWVzLXBsYXllZC1hZ2FpbnN0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5tb2RhbCAuZGFtYWdlLXN0YXRzLWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NjBweCkge1xcbiAgLm1vZGFsIC5jaGFtcGlvbi1tYWluLXN0YXRzIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5tb2RhbCAuaXRlbS1zZXQtY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIH1cXG4gIC5tb2RhbCAuaXRlbS1zZXRzLWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAubW9kYWwgLmNoYW1waW9uLWRhbWFnZS1jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAubW9kYWwgLmRhbWFnZS1zdGF0cy1pbmZvIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5tb2RhbCAuZGFtYWdlLWluZm8ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIH1cXG4gIC5tb2RhbCAuZGFtYWdlLXR5cGUtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAwLjJlbSBhdXRvO1xcbiAgfVxcbiAgLm1vZGFsIC5jaXJjdWxhci1jaGFydCB7XFxuICAgIG1heC1oZWlnaHQ6IDE5NXB4O1xcbiAgICBtYXgtd2lkdGg6IDgwJTtcXG4gIH1cXG4gIC5tb2RhbCAuZGFtYWdlLXN0YXRzLWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAubW9kYWwgLmNoYW1waW9uLXJvbGUge1xcbiAgICBtYXJnaW4tbGVmdDogMC41ZW07XFxuICAgIG1hcmdpbi1yaWdodDogMC41ZW07XFxuICB9XFxuICAubW9kYWwgLmNoYW1waW9uLXJlc291cmNlIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xcbiAgfVxcbiAgLm1vZGFsIC5jaGFtcGlvbi1yb2xlcyB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gIH1cXG4gIC5tb2RhbCAuc3BlbGwtaW1nIHtcXG4gICAgaGVpZ2h0OiAyLjhlbTtcXG4gICAgd2lkdGg6IDIuOGVtO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICB9XFxuICAubW9kYWwgLml0ZW0tZGV0YWlscy1jb250YWluZXIge1xcbiAgICByaWdodDogMmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNDE0cHgpIHtcXG4gIC5tb2RhbCAuY2hhbXBpb24tc3RhdHMtb3ZlcnZpZXcge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG1pbi13aWR0aDogMTdyZW07XFxuICB9XFxuICAubW9kYWwgLmNoYW1waW9uLW5hbWUge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxuICAubW9kYWwgLm1vZGFsLW5hdi1saW5rcyB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gIH1cXG4gIC5tb2RhbCAuY2xvc2UtbW9kYWwtYnRuLXdyYXBwZXIge1xcbiAgICBsZWZ0OiAwLjdlbTtcXG4gIH1cXG4gIC5tb2RhbCAuY2xvc2UtbW9kYWwtYnRuIHtcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEzMDBweCkge1xcbiAgLm1vZGFsICNza2lucy1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1heC13aWR0aDogNzAlO1xcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTk1MHB4KSB7XFxuICAubW9kYWwgI3NraW5zLWNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogNTAlO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzaGVldHMvbW9kYWxzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUE4REE7RUFDRSxrREFBQTtBQTNERjs7QUE4REE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFB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QW9DRTtFQUNFO0lBQ0Usc0JBQUE7RUFsQ0o7RUFxQ0U7SUFDRSxtQkFBQTtFQW5DSjtFQXNDRTtJQUNFLHNCQUFBO0VBcENKO0VBdUNFO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VBckNKO0VBd0NFO0lBQ0Usc0JBQUE7RUF0Q0o7RUF5Q0U7SUFDRSxtQkFBQTtJQUNBLHVCQUFBO0VBdkNKO0VBMENFO0lBQ0Usa0JBQUE7RUF4Q0o7RUEyQ0U7SUFDRSxpQkFBQTtJQUNBLGNBQUE7RUF6Q0o7RUE0Q0U7SUFDRSxzQkFBQTtFQTFDSjtFQTZDRTtJQUNFLGtCQUFBO0lBQ0EsbUJBQUE7RUEzQ0o7RUE4Q0U7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0VBNUNKO0VBK0NFO0lBQ0UsZUFBQTtFQTdDSjtFQWdERTtJQUNFLGFBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtFQTlDSjtFQWlERTtJQUNFLFVBQUE7RUEvQ0o7QUFDRjtBQWtERTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGdCQUFBO0VBaERKO0VBbURFO0lBQ0UsZUFBQTtFQWpESjtFQW9ERTtJQUNFLGVBQUE7RUFsREo7RUFxREU7SUFDRSxXQUFBO0VBbkRKO0VBc0RFO0lBQ0UsZ0JBQUE7RUFwREo7QUFDRjtBQXVERTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7RUFyREo7QUFDRjtBQXdERTtFQUNFO0lBQ0UsY0FBQTtFQXRESjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLXJhc2luLWJsYWNrOiAjMWQxZTJjO1xcbiAgLS1kYXJrLWdvbGQ6ICM5Mjc1NDM7XFxuICAtLWxpZ2h0LWdvbGQ6ICNjN2FiNmU7XFxufVxcblxcbkBtaXhpbiBjb250YWluZXJCYWNrZ3JvdW5kIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBlMDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxufVxcblxcbkBtaXhpbiBzdWJIZWFkaW5nU3R5bGUge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMC40ZW07XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbkBtaXhpbiBpY29uU2l6ZSB7XFxuICBoZWlnaHQ6IDMuNXJlbTtcXG4gIHdpZHRoOiAzLjVyZW07XFxufVxcblxcbkBtaXhpbiBpY29uVGV4dCB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG5AbWl4aW4gaWNvbkNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbn1cXG5cXG5AbWl4aW4gc21hbGxNYXJnaW4ge1xcbiAgbWFyZ2luLXRvcDogMC41ZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG59XFxuXFxuQG1peGluIG1vZGFsQ29udGVudENvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nOiAwO1xcbiAgbWF4LXdpZHRoOiA3NSU7XFxuICBtaW4taGVpZ2h0OiA0OXJlbTtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICBwYWRkaW5nOiAycmVtIDA7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjQpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCYXJsb3dcXFwiLCBzYW5zLXNlcmlmO1xcblxcbiAgI21haW4tY29udGFpbmVyIHtcXG4gICAgQGluY2x1ZGUgbW9kYWxDb250ZW50Q29udGFpbmVyKCk7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcblxcbiAgICAjbWFpbiB7XFxuICAgICAgY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5tb2RhbC1oZWFkZXIge1xcbiAgICBAaW5jbHVkZSBjb250YWluZXJCYWNrZ3JvdW5kKCk7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBiZjtcXG4gIH1cXG5cXG4gIC5uYXZpZ2F0aW9uLWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuY2xvc2UtbW9kYWwtYnRuLXdyYXBwZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDEuMmVtO1xcbiAgfVxcblxcbiAgLmNsb3NlLW1vZGFsLWJ0biB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZm9udC1zaXplOiAxLjZlbTtcXG4gIH0gIFxcblxcbiAgLmNsb3NlLW1vZGFsLWJ0bjpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gIH1cXG5cXG4gIC5tb2RhbC1uYXYtbGlua3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5tb2RhbC1uYXYtbGluayB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgQGluY2x1ZGUgc21hbGxNYXJnaW4oKTtcXG4gIH1cXG5cXG4gIC5tb2RhbC1uYXYtbGluazpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLWhlYWRpbmcge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tbmFtZSB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi10aXRsZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBAaW5jbHVkZSBzbWFsbE1hcmdpbigpO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXJvbGVzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tcm9sZSB7XFxuICAgIEBpbmNsdWRlIGljb25Db250YWluZXIoKTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1yZXNvdXJjZSB7XFxuICAgIEBpbmNsdWRlIGljb25Db250YWluZXIoKTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1yb2xlLWltYWdlIHtcXG4gICAgQGluY2x1ZGUgaWNvblNpemUoKTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1yZXNvdXJjZS1pbWFnZSB7XFxuICAgIEBpbmNsdWRlIGljb25TaXplKCk7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tcm9sZS1uYW1lIHtcXG4gICAgQGluY2x1ZGUgaWNvblRleHQoKTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1yZXNvdXJjZS1uYW1lIHtcXG4gICAgQGluY2x1ZGUgaWNvblRleHQoKTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1tYWluLWluZm8ge1xcbiAgICBwYWRkaW5nOiAxLjhyZW07XFxuICAgIG1heC13aWR0aDogMzRyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogbGFzdCBiYXNlbGluZTtcXG4gIH1cXG5cXG4gIEAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRldG9wIHtcXG4gICAgZnJvbSB7XFxuICAgICAgdG9wOiAtMzAwcHg7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBrZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XFxuICAgIGZyb20ge1xcbiAgICAgIHRvcDogLTMwMHB4O1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuICB9XFxuXFxuICAubG9yZS1jb250YWluZXIge1xcbiAgICBAaW5jbHVkZSBjb250YWluZXJCYWNrZ3JvdW5kKCk7XFxuICB9XFxuXFxuICAuc3ViaGVhZGluZyB7XFxuICAgIEBpbmNsdWRlIHN1YkhlYWRpbmdTdHlsZSgpO1xcbiAgfVxcblxcbiAgLmFiaWxpdGllcy1jb250YWluZXIge1xcbiAgICBAaW5jbHVkZSBjb250YWluZXJCYWNrZ3JvdW5kKCk7XFxuICAgIHdpZHRoOiAyOGVtO1xcbiAgfVxcblxcbiAgLmFiaWxpdGllcy1oZWFkaW5nIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmFiaWxpdHktaW1ncyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB9XFxuXFxuICAuYWJpbGl0eS1kZXNjcmlwdGlvbiB7XFxuICAgIEBpbmNsdWRlIHNtYWxsTWFyZ2luKCk7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tZGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLWV4dHJhLWluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmFiaWxpdHktaW5mbyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAuYWJpbGl0eS1pbmZvLmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAuc3BlbGwtaW1nIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW46IDAgMC41cmVtO1xcbiAgICBoZWlnaHQ6IDMuM3JlbTtcXG4gICAgd2lkdGg6IDMuM3JlbTtcXG4gIH1cXG5cXG4gIC5zcGVsbC1pbWcuY2xpY2tlZCB7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gICAgYm9yZGVyLXdpZHRoOiA0cHg7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tdGlwcy1zZWN0aW9uIHtcXG4gICAgQGluY2x1ZGUgY29udGFpbmVyQmFja2dyb3VuZCgpO1xcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDM0cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tdGlwcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAuY2hhbXBpb24tdGlwIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgfVxcblxcbiAgI3N0YXRzLWNvbnRhaW5lciB7XFxuICAgIEBpbmNsdWRlIG1vZGFsQ29udGVudENvbnRhaW5lcigpO1xcbiAgICBkaXNwbGF5OiBub25lO1xcblxcbiAgICAjc3RhdHMge1xcbiAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgICB9XFxuICB9XFxuXFxuICAuY2hhbXBpb24tc3RhdHMtb3ZlcnZpZXcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgQGluY2x1ZGUgc21hbGxNYXJnaW4oKTtcXG4gICAgbWF4LXdpZHRoOiAyNXJlbTtcXG4gICAgbWluLXdpZHRoOiAyMHJlbTtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgfVxcblxcbiAgLndpbi1yYXRlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5waWNrLXJhdGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmxhbmUtaW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAucGljay1yYXRlLXZhbHVlIHtcXG4gICAgbWFyZ2luLXRvcDogMC40ZW07XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gIH1cXG5cXG4gIC53aW4tcmF0ZS12YWx1ZSB7XFxuICAgIG1hcmdpbi10b3A6IDAuNGVtO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICB9XFxuXFxuICAubGFiZWwge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tZGFtYWdlLWNvbnRhaW5lciB7XFxuICAgIEBpbmNsdWRlIGNvbnRhaW5lckJhY2tncm91bmQoKTtcXG4gICAgbWF4LWhlaWdodDogMTcuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICB9XFxuXFxuICAuZGFtYWdlLWhlYWRpbmcge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuY2lyY3VsYXItY2hhcnQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXgtaGVpZ2h0OiAxNGVtO1xcbiAgfVxcblxcbiAgLmNpcmNsZSB7XFxuICAgIGZpbGw6IG5vbmU7XFxuICAgIHN0cm9rZS13aWR0aDogMi4yO1xcbiAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XFxuICAgIGFuaW1hdGlvbjogcHJvZ3Jlc3MgMXMgZWFzZS1vdXQgZm9yd2FyZHM7XFxuICB9XFxuXFxuICAjbWFnaWMtZGFtYWdlLXN0cm9rZSB7XFxuICAgIHN0cm9rZTogIzM1YTdmZjtcXG4gIH1cXG5cXG4gICNwaHlzaWNhbC1kYW1hZ2Utc3Ryb2tlIHtcXG4gICAgc3Ryb2tlOiAjZmY1OTY0O1xcbiAgfVxcblxcbiAgI3RydWUtZGFtYWdlLXN0cm9rZSB7XFxuICAgIHN0cm9rZTogI2ZmZTc0YztcXG4gIH1cXG5cXG4gIEBrZXlmcmFtZXMgcHJvZ3Jlc3Mge1xcbiAgICAwJSB7XFxuICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMCAxMDA7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC50b3RhbC1kYW1hZ2UtdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogNHB4O1xcbiAgICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xcbiAgICBmaWxsOiB3aGl0ZTtcXG4gIH1cXG5cXG4gIC50b3RhbC1kYW1hZ2UtbGFiZWwge1xcbiAgICBmb250LXNpemU6IDNweDtcXG4gICAgdGV4dC1hbmNob3I6IG1pZGRsZTtcXG4gICAgZmlsbDogdmFyKC0tZGFyay1nb2xkKTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1tYWluLXN0YXRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB9XFxuXFxuICAuY2hhbXBpb24taXRlbS1idWlsZHMge1xcbiAgICBAaW5jbHVkZSBjb250YWluZXJCYWNrZ3JvdW5kKCk7XFxuICAgIG1heC1oZWlnaHQ6IDE3LjVyZW07XFxuICB9XFxuXFxuICAuZGFtYWdlLXN0YXRzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmRhbWFnZS1pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWF4LWhlaWdodDogOTIlO1xcbiAgICBoZWlnaHQ6IDkyJTtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICB9XFxuXFxuICAuZGFtYWdlLXR5cGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICB9XFxuXFxuICAuZGFtYWdlLXN0YXRzIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIH1cXG5cXG4gICNwaHlzaWNhbC1kYW1hZ2UtbGFiZWwge1xcbiAgICBjb2xvcjogI2ZmNTk2NDtcXG4gIH1cXG5cXG4gICNtYWdpYy1kYW1hZ2UtbGFiZWwge1xcbiAgICBjb2xvcjogIzM1YTdmZjtcXG4gIH1cXG5cXG4gICN0cnVlLWRhbWFnZS1sYWJlbCB7XFxuICAgIGNvbG9yOiAjZmZlNzRjO1xcbiAgfVxcblxcbiAgLml0ZW0tZGV0YWlscy1jb250YWluZXIge1xcbiAgICBAaW5jbHVkZSBjb250YWluZXJCYWNrZ3JvdW5kKCk7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICByaWdodDogMTBlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMy41ZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5pdGVtLW5hbWUge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICB9XFxuXFxuICAubWFpbi1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgfVxcblxcbiAgLmNvc3QtbGFiZWwge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gIH1cXG5cXG4gIC5jb21wb25lbnQtaXRlbXMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG5cXG4gIC5jb21wb25lbnQtaXRlbS1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgfVxcblxcbiAgLmNvc3QtYW1vdW50IHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgfVxcblxcbiAgLmNvbXBvbmVudC1pdGVtLWNvc3QtbGFiZWwge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gIH1cXG5cXG4gIC5jb21wb25lbnQtaXRlbS1hbW91bnQge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICB9XFxuXFxuICAuY29tcG9uZW50LWl0ZW0tZGV0YWlscy1jb250YWluZXIge1xcbiAgICBAaW5jbHVkZSBjb250YWluZXJCYWNrZ3JvdW5kKCk7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLml0ZW0tc2V0cy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWF4LWhlaWdodDogOTAlO1xcbiAgfVxcblxcbiAgLml0ZW0tc2V0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICAgIHBhZGRpbmc6IDAuNGVtO1xcbiAgfVxcblxcbiAgLm1haW4tY29tcG9uZW50LWNvbnRhaW5lciB7XFxuICAgIEBpbmNsdWRlIGNvbnRhaW5lckJhY2tncm91bmQoKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2MDQwMDgzO1xcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiAwZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICB9XFxuXFxuICAuaXRlbS1pbWcge1xcbiAgICBtYXgtd2lkdGg6IDIuN2VtO1xcbiAgICBtYXgtaGVpZ2h0OiAyLjdlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgICAvL3BhZGRpbmc6IDFlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDA7XFxuICB9XFxuXFxuICAuY29tcG9uZW50LWl0ZW0taW1nIHtcXG4gICAgbWF4LXdpZHRoOiAxLjhlbTtcXG4gICAgbWF4LWhlaWdodDogMS44ZW07XFxuICB9XFxuXFxuICAuY2hhbXBpb24tbWF0Y2h1cHMge1xcbiAgICBAaW5jbHVkZSBjb250YWluZXJCYWNrZ3JvdW5kKCk7XFxuICAgIG1heC1oZWlnaHQ6IDI1LjJyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwIDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgfVxcblxcbiAgLm1hdGNodXBzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIG1heC13aWR0aDogMjRyZW07XFxuICB9XFxuXFxuICAubWF0Y2h1cC1pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTYxYTtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIG1hcmdpbjogYXV0byAwLjVlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgfVxcblxcbiAgLm1hdGNodXAtaW5mbzpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzE2MWFjOTtcXG4gIH1cXG5cXG4gIC5tYXRjaHVwLXN0YXRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBcXFwiQXBwbGUgU0QgR290aGljIE5lb1xcXCIsIEFwcGxlR290aGljLFxcbiAgICAgIERvdHVtLCBBcmlhbCwgVGFob21hO1xcbiAgfVxcblxcbiAgLmVuZW15LWNoYW1waW9uLWltZyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgbWF4LWhlaWdodDogM2VtO1xcbiAgICBtYXgtd2lkdGg6IDNlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxuICB9XFxuXFxuICAud2lucmF0ZS1hZ2FpbnN0LXBlcmNlbnRhZ2UuYmx1ZSB7XFxuICAgIGNvbG9yOiAjMzVhN2ZmO1xcbiAgfVxcblxcbiAgLndpbnJhdGUtYWdhaW5zdC1wZXJjZW50YWdlLnJlZCB7XFxuICAgIGNvbG9yOiAjZmY1OTY0O1xcbiAgfVxcblxcbiAgI3NraW5zLWNvbnRhaW5lciB7XFxuICAgIEBpbmNsdWRlIG1vZGFsQ29udGVudENvbnRhaW5lcigpO1xcbiAgICBkaXNwbGF5Om5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWluLWhlaWdodDogMDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIG1heC13aWR0aDogOTklO1xcbiAgICB3aWR0aDogOTklO1xcblxcbiAgICAubmF2aWdhdGlvbi1iYXIge1xcbiAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgICB9XFxuXFxuICAgICNza2lucyB7XFxuICAgICAgY29sb3I6IHZhcigtLWRhcmstZ29sZClcXG4gICAgfVxcbiAgfVxcblxcbiAgI3NraW5zLWNvbnRhaW5lciAubW9kYWwtaGVhZGVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIH1cXG5cXG4gIC5za2luLWltYWdlLWNvbnRhaW5lciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5za2luLWltYWdlLWNvbnRhaW5lci5zaG93biB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcblxcbiAgLnNraW4taW1hZ2Uge1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLnNraW4tbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgfVxcblxcbiAgI3NraW5zLWNvbnRhaW5lciAuY2hhbXBpb24taGVhZGluZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmltZy1zY3JvbGwtYXJyb3cge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICB9XFxuXFxuICAuaW1nLXNjcm9sbC1hcnJvdzpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgfVxcblxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDExMjBweCkge1xcbiAgICAuY29tcG9uZW50LWl0ZW0taW1nIHtcXG4gICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5pdGVtLXNldHMtY29udGFpbmVyIHtcXG4gICAgICBtaW4taGVpZ2h0OiA4MCU7XFxuICAgIH1cXG5cXG4gICAgLml0ZW0tZGV0YWlscy1jb250YWluZXIge1xcbiAgICAgIG1pbi13aWR0aDogNzAlO1xcbiAgICAgIHJpZ2h0OiAtNmVtO1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgKG1heC13aWR0aDogMTI1MHB4KSB7XFxuICAgIC5pdGVtLWltZyB7XFxuICAgICAgbWF4LWhlaWdodDogMi4ycmVtO1xcbiAgICAgIG1heC13aWR0aDogMi4ycmVtO1xcbiAgICB9XFxuXFxuICAgIC5jaGFtcGlvbi1kZXRhaWxzIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgIH1cXG5cXG4gICAgLmFiaWxpdGllcy1jb250YWluZXIge1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICB3aWR0aDogYXV0bztcXG4gICAgICBtYXgtd2lkdGg6IDMxcmVtO1xcbiAgICB9XFxuXFxuICAgIC5sb3JlLWNvbnRhaW5lciB7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICNtYWluLWNvbnRhaW5lciB7XFxuICAgICAgaGVpZ2h0OiA3NnJlbTtcXG4gICAgfVxcblxcbiAgICAuaXRlbS1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgICAgbWluLXdpZHRoOiA3MCU7XFxuICAgICAgcmlnaHQ6IC02ZW07XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgICAuaXRlbS1zZXRzLWNvbnRhaW5lciB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgfVxcblxcbiAgICAuaXRlbS1zZXQtY29udGFpbmVyIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5tYXRjaHVwcyB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAuY2hhbXBpb24tbWF0Y2h1cHMge1xcbiAgICAgIG1heC1oZWlnaHQ6IDI4LjJyZW07XFxuICAgIH1cXG5cXG4gICAgLm1hdGNodXAtaW5mbyB7XFxuICAgICAgbWFyZ2luOiAwLjJlbSBhdXRvO1xcbiAgICB9XFxuXFxuICAgICNtYWluLWNvbnRhaW5lciB7XFxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgICNzdGF0cy1jb250YWluZXIge1xcbiAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgICBtaW4taGVpZ2h0OiA2M3JlbTtcXG4gICAgfVxcblxcbiAgICAuaXRlbS1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgICAgcmlnaHQ6IC0xZW07XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4NDBweCkge1xcbiAgICAuZGFtYWdlLWluZm8ge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICB9XFxuXFxuICAgIC5nYW1lcy1wbGF5ZWQtYWdhaW5zdCB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAuZGFtYWdlLXN0YXRzLWNvbnRhaW5lciB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgfVxcbiAgfVxcblxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU2MHB4KSB7XFxuICAgIC5jaGFtcGlvbi1tYWluLXN0YXRzIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5pdGVtLXNldC1jb250YWluZXIge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIH1cXG5cXG4gICAgLml0ZW0tc2V0cy1jb250YWluZXIge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgLmNoYW1waW9uLWRhbWFnZS1jb250YWluZXIge1xcbiAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5kYW1hZ2Utc3RhdHMtaW5mbyB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAuZGFtYWdlLWluZm8ge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIH1cXG5cXG4gICAgLmRhbWFnZS10eXBlLWNvbnRhaW5lciB7XFxuICAgICAgbWFyZ2luOiAwLjJlbSBhdXRvO1xcbiAgICB9XFxuXFxuICAgIC5jaXJjdWxhci1jaGFydCB7XFxuICAgICAgbWF4LWhlaWdodDogMTk1cHg7XFxuICAgICAgbWF4LXdpZHRoOiA4MCU7XFxuICAgIH1cXG5cXG4gICAgLmRhbWFnZS1zdGF0cy1jb250YWluZXIge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgLmNoYW1waW9uLXJvbGUge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xcbiAgICB9XFxuXFxuICAgIC5jaGFtcGlvbi1yZXNvdXJjZSB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xcbiAgICAgIG1hcmdpbi1yaWdodDogMC41ZW07XFxuICAgIH1cXG5cXG4gICAgLmNoYW1waW9uLXJvbGVzIHtcXG4gICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIH1cXG5cXG4gICAgLnNwZWxsLWltZyB7XFxuICAgICAgaGVpZ2h0OiAyLjhlbTtcXG4gICAgICB3aWR0aDogMi44ZW07XFxuICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICB9XFxuXFxuICAgIC5pdGVtLWRldGFpbHMtY29udGFpbmVyIHtcXG4gICAgICByaWdodDogMmVtO1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgKG1heC13aWR0aDogNDE0cHgpIHtcXG4gICAgLmNoYW1waW9uLXN0YXRzLW92ZXJ2aWV3IHtcXG4gICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgbWluLXdpZHRoOiAxN3JlbTtcXG4gICAgfVxcblxcbiAgICAuY2hhbXBpb24tbmFtZSB7XFxuICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB9XFxuXFxuICAgIC5tb2RhbC1uYXYtbGlua3Mge1xcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgfVxcblxcbiAgICAuY2xvc2UtbW9kYWwtYnRuLXdyYXBwZXIge1xcbiAgICAgIGxlZnQ6IDAuN2VtO1xcbiAgICB9XFxuXFxuICAgIC5jbG9zZS1tb2RhbC1idG4ge1xcbiAgICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMzAwcHgpIHtcXG4gICAgI3NraW5zLWNvbnRhaW5lciB7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIG1heC13aWR0aDogNzAlO1xcbiAgICAgIG1pbi1oZWlnaHQ6IGF1dG87XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxOTUwcHgpIHtcXG4gICAgI3NraW5zLWNvbnRhaW5lciB7XFxuICAgICAgbWF4LXdpZHRoOiA1MCU7XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIGRlZmluZShJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgZGVmaW5lKEdwLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGFzeW5jSXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgZGVmaW5lKEdwLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIGRlZmluZShHcCwgXCJ0b1N0cmluZ1wiLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgaW4gbW9kZXJuIGVuZ2luZXNcbiAgLy8gd2UgY2FuIGV4cGxpY2l0bHkgYWNjZXNzIGdsb2JhbFRoaXMuIEluIG9sZGVyIGVuZ2luZXMgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xuICB9IGVsc2Uge1xuICAgIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG4gIH1cbn1cbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2hhbXBpb25zLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jaGFtcGlvbnMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9kYWxzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tb2RhbHMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vQXNzYXNzaW4ucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9Bc3Nhc3Npbi5wbmdcIixcblx0XCIuL0Jsb29kIFdlbGwucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9CbG9vZCBXZWxsLnBuZ1wiLFxuXHRcIi4vQm90dG9tLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvQm90dG9tLnBuZ1wiLFxuXHRcIi4vQ29udHJvbGxlci5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0NvbnRyb2xsZXIucG5nXCIsXG5cdFwiLi9Db3VyYWdlLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvQ291cmFnZS5wbmdcIixcblx0XCIuL0NyaW1zb24gUnVzaC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0NyaW1zb24gUnVzaC5wbmdcIixcblx0XCIuL0VuZXJneS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0VuZXJneS5wbmdcIixcblx0XCIuL0ZpZ2h0ZXIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9GaWdodGVyLnBuZ1wiLFxuXHRcIi4vRmxvdy5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0Zsb3cucG5nXCIsXG5cdFwiLi9GdXJ5LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvRnVyeS5wbmdcIixcblx0XCIuL0dyaXQucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9Hcml0LnBuZ1wiLFxuXHRcIi4vSGVhdC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0hlYXQucG5nXCIsXG5cdFwiLi9KdW5nbGUucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9KdW5nbGUucG5nXCIsXG5cdFwiLi9NYWdlLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvTWFnZS5wbmdcIixcblx0XCIuL01hbmEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9NYW5hLnBuZ1wiLFxuXHRcIi4vTWFuYWxlc3MucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9NYW5hbGVzcy5wbmdcIixcblx0XCIuL01hcmtzbWFuLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvTWFya3NtYW4ucG5nXCIsXG5cdFwiLi9NZWxlZS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL01lbGVlLnBuZ1wiLFxuXHRcIi4vTWlkZGxlLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvTWlkZGxlLnBuZ1wiLFxuXHRcIi4vUmFnZS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL1JhZ2UucG5nXCIsXG5cdFwiLi9SYW5nZWQucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9SYW5nZWQucG5nXCIsXG5cdFwiLi9TcGVjaWFsaXN0LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvU3BlY2lhbGlzdC5wbmdcIixcblx0XCIuL1N1cHBvcnQucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9TdXBwb3J0LnBuZ1wiLFxuXHRcIi4vVGFuay5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL1RhbmsucG5nXCIsXG5cdFwiLi9Ub3AucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9Ub3AucG5nXCIsXG5cdFwiLi9VdGlsaXR5LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvVXRpbGl0eS5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzL2ltYWdlcyBzeW5jIFxcXFwuKHBuZ3xqcGU/Z3xzdmcpJFwiOyIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL3N0eWxlc2hlZXRzL21vZGFscy5zY3NzJztcbmltcG9ydCAnLi9zdHlsZXNoZWV0cy9jaGFtcGlvbnMuc2Nzcyc7XG5pbXBvcnQgY2hhbXBpb25zUGFnZSBmcm9tICcuL3RlbXBsYXRlcy9jaGFtcGlvbnNQYWdlJztcbmltcG9ydCBDaGFtcGlvbnNQYWdlQ29udHJvbGxlciBmcm9tICcuL2FwcENvbnRyb2wvY2hhbXBpb25zUGFnZUNvbnRyb2xsZXInO1xuaW1wb3J0IFNlYXJjaGJhckNvbnRyb2xsZXIgZnJvbSAnLi9hcHBDb250cm9sL3NlYXJjaGJhckNvbnRyb2xsZXInO1xuXG5jb25zdCBjcmVhdGVDaGFtcGlvbnNQYWdlID0gKCkgPT4ge1xuICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBjaGFtcGlvbnNQYWdlKCk7XG4gICAgQ2hhbXBpb25zUGFnZUNvbnRyb2xsZXIuY2hhbXBpb25zUGFnZUxpc3RlbmVycygpO1xuICAgIFNlYXJjaGJhckNvbnRyb2xsZXIuc2VhcmNoQ29udGFpbmVyTGlzdGVuZXJzKCk7XG4gICAgY29uc3QgY2hhbXBpb25JZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjaGFtcGlvbklkJyk7XG4gICAgaWYgKGNoYW1waW9uSWQpIHtcbiAgICAgIENoYW1waW9uc1BhZ2VDb250cm9sbGVyLmRpc3BsYXlDaGFtcGlvbk1vZGFsKGNoYW1waW9uSWQpO1xuICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgfVxuICB9LCA1MDApO1xufTtcbmNyZWF0ZUNoYW1waW9uc1BhZ2UoKTtcbiJdLCJuYW1lcyI6WyJDaGFtcGlvbk1vZGFsQ29udHJvbGxlciIsInRvZ2dsZUFjdGl2ZUFiaWxpdHkiLCJjbGlja2VkQWJpbGl0eUlkIiwiYWJpbGl0eUltYWdlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImFiaWxpdHlJbmZvcyIsImZvckVhY2giLCJpbWciLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJpbmZvIiwiY2xpY2tlZEltYWdlIiwicXVlcnlTZWxlY3RvciIsImNsYXNzTmFtZSIsImFjdGl2ZUFiaWxpdHkiLCJjaGFuZ2VNb2RhbFRlbXBsYXRlIiwiY2xpY2tlZE1vZGFsTmF2TGluayIsInRlbXBsYXRlcyIsInRlbXBsYXRlIiwidGVtcGxhdGVOYW1lIiwiaWQiLCJzdWJzdHJpbmciLCJpbmRleE9mIiwiY2hvc2VuVGVtcGxhdGUiLCJzdHlsZSIsImRpc3BsYXkiLCJoaWRkZW5UZW1wbGF0ZSIsImRpc3BheUl0ZW1EZXRhaWxzIiwiaG92ZXJlZEl0ZW1JbWFnZSIsIml0ZW1EZXRhaWxzIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiaGlkZUl0ZW1EZXRhaWxzIiwidW5ob3ZlcmVkSXRlbUltYWdlIiwidG9nZ2xlU2tpbkltYWdlcyIsImFycm93Q2xhc3NMaXN0Iiwic2tpbkltYWdlc0NvbnRhaW5lciIsImN1cnJlbnRTaG93bkltYWdlIiwic2tpbk5hbWUiLCJmaXJzdEltYWdlIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJsYXN0SW1hZ2UiLCJsYXN0RWxlbWVudENoaWxkIiwiaW5jbHVkZXMiLCJ0ZXh0Q29udGVudCIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJjbGVhck1haW5Nb2RhbCIsIm1haW5Db250YWluZXIiLCJjaGFtcGlvbk5hbWUiLCJjaGFtcGlvblRpdGxlIiwiY2hhbXBpb25Sb2xlcyIsImNoYW1waW9uTG9yZSIsImFiaWxpdHlEZXRhaWxzIiwiY2hhbXBpb25UaXBzIiwibWFpbk1vZGFsSGVhZGVyIiwiZWxlbWVudCIsImN1cnJlbnRFbGVtZW50IiwiY2xlYXJTdGF0c01vZGFsIiwic3RhdHNDb250YWluZXIiLCJjaGFtcGlvblN0YXRzT3ZlcnZpZXciLCJhbGxkYW1hZ2VTdGF0cyIsIml0ZW1TZXRzQ29udGFpbmVyIiwiYmVzdE1hdGNodXBzIiwid29yc3RNYXRjaHVwcyIsInN0YXRzTW9kYWxIZWFkZXIiLCJkYW1hZ2VTdGF0IiwiZGFtYWdlU3RhdEVsZW1lbnQiLCJzdGF0c01vZGFsQ29udGVudCIsImNvbnRlbnQiLCJjb250ZW50RWxlbWVudCIsImNsZWFyU2tpbnNNb2RhbCIsImNsb3NlQ2hhbXBpb25Nb2RhbCIsIm1vZGFsIiwic2tpbnNDb250YWluZXIiLCJtb2RhbENsaWNrRXZlbnRzIiwiZXZlbnQiLCJ0YXJnZXQiLCJkYXNoSW5kZXgiLCJhYmlsaXR5SWQiLCJzbGljZSIsIkFycmF5IiwiZnJvbSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtb2RhbE1vdXNlb3ZlckV2ZW50cyIsIm1vZGFsTW91c2VvdXRFdmVudHMiLCJyZWxhdGVkVGFyZ2V0IiwicGFyZW50Tm9kZSIsIm1vZGFsQXJyb3dFdmVudHMiLCJrZXkiLCJyaWdodEFycm93IiwibGVmdEFycm93IiwibW9kYWxDaGFuZ2VMaXN0ZW5lcnMiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2V0Q2hhbXBpb25EZXRhaWxzIiwiZ2V0Q2hhbXBpb25TdGF0cyIsImNoYW1waW9uRGV0YWlsc01vZGFsIiwiY2hhbXBpb25TdGF0c01vZGFsIiwiY2hhbXBpb25Ta2luc01vZGFsIiwiQ2hhbXBpb25GaWx0ZXIiLCJTb3J0Q2hhbXBpb25zIiwiZ2V0QWxsQ2hhbXBpb25EZXRhaWxzIiwiZ2V0QWxsQ2hhbXBpb25TdGF0cyIsImdldExhdGVzdFZlcnNpb24iLCJDaGFtcGlvbnNQYWdlQ29udHJvbGxlciIsImRpc3BsYXlEcm9wZG93bk9wdGlvbnMiLCJkcm9wZG93bk9wdGlvbnMiLCJhbGxEcm9wZG93bk9wdGlvbnMiLCJvcHRpb25zIiwib3B0aW9uc1N0eWxlIiwiZHJvcGRvd25PcHRpb25zU3R5bGUiLCJoaWRlRHJvcGRvd25PcHRpb25zIiwiZHJvcGRvd25PcHRpb25zVG9nZ2xlIiwiZHJvcGRvd25CdG4iLCJwYXJlbnRFbGVtZW50IiwiZGlzcGxheUNoYW1waW9uTW9kYWwiLCJjaGFtcGlvbklkIiwibGF0ZXN0VmVyc2lvbiIsImNoYW1waW9uRGV0YWlscyIsImNoYW1waW9uU3RhdHMiLCJzZWxlY3RMYW5lRmlsdGVyT3B0aW9uIiwiY2xpY2tlZExhbmVPcHRpb24iLCJjaGFtcGlvbnNTZWN0aW9uIiwiYWN0aXZlTGFuZU9wdGlvbiIsInZpc2liaWxpdHkiLCJhZGQiLCJjaGVja0xhbmVGaWx0ZXJPcHRpb24iLCJhbGxDaGFtcGlvblN0YXRzIiwibGFuZU5hbWUiLCJmaWx0ZXJCeUxhbmUiLCJjaGVja1NvcnRpbmdPcHRpb24iLCJhY3RpdmVTb3J0aW5nT3B0aW9uIiwic29ydEJ5RGVmYXVsdE9yZGVyIiwic29ydENoYW1waW9uc0J5V2lucmF0ZSIsInNvcnRDaGFtcGlvbnNCeVBpY2tyYXRlIiwic29ydENoYW1waW9uc0J5RGFtYWdlRG9uZSIsImNoZWNrQWN0aXZlUm9sZU9wdGlvbnMiLCJhbGxDaGFtcGlvbkRldGFpbHMiLCJhY3RpdmVSb2xlT3B0aW9ucyIsImxlbmd0aCIsImFjdGl2ZVJvbGVzIiwibWFwIiwiYWN0aXZlUm9sZU9wdGlvbiIsImFjdGl2ZVJvbGUiLCJmaWx0ZXJCeVJvbGUiLCJjaGVja0FjdGl2ZURpZmZpY3VsdHlPcHRpb25zIiwiYWN0aXZlRGlmZmljdWx0eU9wdGlvbnMiLCJhY3RpdmVEaWZmaWN1bHRpZXMiLCJhY3RpdmVEaWZmaWN1bHR5T3B0aW9uIiwiYWN0aXZlRGlmZmljdWx0eSIsImZpbHRlckJ5RGlmZmljdWx0eSIsInNlbGVjdE11bHRpRHJvcGRvd25PcHRpb24iLCJkcm9wZG93bk9wdGlvbiIsImRlc2VsZWN0RHJvcGRvd25PcHRpb24iLCJ0b2dnbGVEcm9wZG93bk9wdGlvbiIsInNlbGVjdFNpbmdsZURyb3Bkb3duT3B0aW9uIiwiYWN0aXZlRHJvcGRvd25PcHRpb24iLCJyZWRpcmVjdFRvRnJvbnRQYWdlIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiY2hhbXBpb25zUGFnZUNsaWNrRXZlbnRzIiwiY2hlY2tPcHRpb25zIiwiaGlkZUNoYW1waW9uc1NlY3Rpb24iLCJzaG93Q2hhbXBpb25zU2VjdGlvbiIsInJlbW92ZUNoYW1waW9uc1BhZ2VMaXN0ZW5lciIsImNoYW1waW9uc1BhZ2UiLCJhZGRDaGFtcGlvbnNQYWdlTGlzdGVuZXIiLCJzaG93TG9hZGVyIiwibG9hZGVyIiwiaGlkZUxvYWRlciIsImZpbHRlckFuZFNvcnRDaGFtcGlvbnNTZWN0aW9uIiwid2FpdFRpbWUiLCJzZXRUaW1lb3V0IiwiZGF0YXNldCIsImNoYW1waW9uc1BhZ2VLZXlFdmVudHMiLCJhY3RpdmVFbGVtZW50IiwiY2hhbXBpb25zUGFnZUxpc3RlbmVycyIsImNyZWF0ZUNoYW1waW9uQ29udGFpbmVyIiwicmVuZGVyQWxsQ2hhbXBpb25zIiwiY2hhbXBpb24iLCJjbGVhckNoYW1waW9uc1NlY3Rpb24iLCJzaG93Q2hhbXBpb24iLCJoaWRlQ2hhbXBpb24iLCJjbGlja2VkTGFuZSIsImFsbENoYW1waW9ucyIsInJlc3VsdHMiLCJwdXNoIiwiUHJvbWlzZSIsImFsbCIsImNoYW1waW9uTGFuZSIsImxhbmUiLCJjaGFtcGlvbkVsZW1lbnQiLCJ0b0xvd2VyQ2FzZSIsImNoYW1waW9uRWxlbWVudHMiLCJyb2xlTWF0Y2hGb3VuZCIsInJvbGUiLCJ0YWdzIiwiY2hhbXBpb25Sb2xlIiwiY2F0ZWdvcmlzZURpZmZpY3VsdHlOdW0iLCJkaWZmaWN1bHR5TnVtIiwiZGlmZmljdWx0eU1hdGNoRm91bmQiLCJkaWZmaWN1bHR5IiwiY2hhbXBpb25EaWZmaWN1bHR5TnVtIiwiY2hhbXBpb25EaWZmaWN1bHR5IiwiU2VhcmNoYmFyQ29udHJvbGxlciIsInNob3dBdXRvQ29tcGxldGVOYW1lcyIsInNlYXJjaENvbnRhaW5lciIsImF1dG9Db21wbGV0ZU5hbWVzIiwiaGlkZUF1dG9Db21wbGV0ZU5hbWVzIiwiYXV0b0NvbXBsZXRlTmFtZUVsZW1lbnRzIiwiYXV0b0NvbXBsZXRlTmFtZUVsZW1lbnQiLCJzZWFyY2hiYXJGb2N1c0luRXZlbnQiLCJmb2N1cyIsInNlYXJjaGJhckZvY3Vzb3V0RXZlbnQiLCJzZWFyY2hCYXJJbnB1dEV2ZW50IiwiaW5wdXRWYWx1ZSIsInZhbHVlIiwiYXV0b0NvbXBsZXRlTmFtZSIsIm5hbWUiLCJzZWFyY2hiYXJLZXlkb3duRXZlbnRzIiwicHJldmVudERlZmF1bHQiLCJhY3Rpb24iLCJBcnJvd1VwIiwiQXJyb3dEb3duIiwiZmlsdGVyIiwiaXNTaG93aW5nIiwidW5kZWZpbmVkIiwiZ29Ub1N0YXJ0IiwiY2hpbGRyZW4iLCJzZWFyY2hDb250YWluZXJDbGFzc05hbWUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwic2VhcmNoYmFyQ2xpY2tFdmVudHMiLCJjbGlja0F1dG9Db21wbGV0ZU5hbWUiLCJmaXJzdENoaWxkIiwic2VhcmNoQ29udGFpbmVyTGlzdGVuZXJzIiwidmlzaWJsaXR5IiwicmVjcmVhdGVDaGFtcGlvbnNTZWN0aW9uIiwiY2hhbXBpb25zIiwiZmlsdGVyQ2hhbXBpb25zIiwiZmlsdGVyZWRDaGFtcGlvblN0YXRzIiwiZmlsdGVyZWRDaGFtcGlvbnNTb3J0ZWQiLCJzb3J0IiwiYSIsImIiLCJ3aW5SYXRlIiwicGlja1JhdGUiLCJkYW1hZ2VQZXJNYXRjaCIsInRvdGFsRGFtYWdlIiwiZmV0Y2hDaGFtcGlvbkRldGFpbHMiLCJmZXRjaCIsIm1vZGUiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZ2V0Q2hhbXBpb25QYXNzaXZlcyIsInBhc3NpdmVEYXRhIiwicGFzc2l2ZSIsInBhc3NpdmVOYW1lIiwicGFzc2l2ZURlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb24iLCJwYXNzaXZlSWQiLCJpbWFnZSIsImZ1bGwiLCJwYXNzaXZlSW1nVXJsIiwiZ2V0Q2hhbXBpb25TcGVsbHMiLCJzcGVsbHNEYXRhIiwic3BlbGxzIiwic3BlbGwiLCJzcGVsbE9iamVjdCIsImNvc3RCdXJuIiwiY29zdFR5cGUiLCJjb29sZG93biIsImNvb2xkb3duQnVybiIsImltZ1VybCIsImNoYW1waW9uUGFzc2l2ZSIsInRpdGxlIiwicmVwbGFjZSIsInRvVXBwZXJDYXNlIiwicGFydHlwZSIsImFsbHl0aXBzIiwibG9yZSIsInJvbGVzIiwic2tpbnMiLCJyZXNvdXJjZSIsInRpcHMiLCJmZXRjaENoYW1waW9uU3RhdHMiLCJkZXZVcmwiLCJ0b0ZpeGVkIiwia2RhIiwia2RhUmF0aW8iLCJpdGVtU2V0cyIsIml0ZW1DaG9pY2VzIiwiYmVzdE1hdGNoVXBzIiwibWF0Y2hVcHMiLCJ3b3JzdE1hdGNoVXBzIiwidmVyc2lvbnNSZXNwb25zZSIsInZlcnNpb25zIiwiY2hhbXBpb25zUmVzcG9uc2UiLCJ2ZXJzaW9uUmVzcG9uc2UiLCJmZXRjaEFsbEl0ZW1zIiwiYWxsSXRlbXMiLCJJdGVtSW5mbyIsIml0ZW1JZCIsImdldEl0ZW1EZXRhaWxzIiwiaXRlbUltYWdlSWQiLCJpbWFnZVVybCIsImNvbXBvbmVudEl0ZW1JZHMiLCJjb21wb25lbnRJdGVtRGV0YWlscyIsImNvc3QiLCJnb2xkIiwidG90YWwiLCJnZXRJdGVtSW1hZ2UiLCJjb21wb25lbnRJdGVtcyIsImdldENvbXBvbmVudEl0ZW1zIiwiRWxlbWVudENyZWF0aW9uIiwiRHJvcGRvd25TZWN0aW9uIiwiZHJvcGRvd25OYW1lIiwib3B0aW9uc0FycmF5IiwiZmlsdGVyU29ydFNlY3Rpb24iLCJ0eXBlIiwiZHJvcGRvd24iLCJjcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MiLCJvcHRpb24iLCJjcmVhdGVFbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwibGFzdENoaWxkIiwidGFnIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVDaGlsZEVsZW1lbnRXaXRoSWQiLCJjcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3NBbmRJZCIsImNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzIiwic3JjIiwiYWx0IiwiaW1hZ2VFbGVtZW50IiwicmVuZGVySGVhZGVyRGV0YWlscyIsImltYWdlcyIsImNoYW1waW9uRGF0YSIsImNoYW1waW9uUm9sZU5hbWUiLCJjaGFtcGlvblJlc291cmNlIiwiY2hhbXBpb25SZXNvdXJjZU5hbWUiLCJsb3JlQ29udGFpbmVyIiwiaW5uZXJIVE1MIiwiYWJpbGl0aWVzQ29udGFpbmVyIiwiYWJpbGl0eUltZ3MiLCJwYXNzaXZlSW1nIiwiaW1nTGFiZWwiLCJpbmRleCIsInNwZWxsSW1nIiwiaSIsImFiaWxpdHlJbmZvIiwiYWJpbGl0eU5hbWUiLCJhYmlsaXR5RGVzY3JpcHRpb24iLCJhYmlsaXR5TGFiZWwiLCJjaGFtcGlvblRpcHNTZWN0aW9uIiwiY2hhbXBpb25UaXAiLCJza2luIiwibnVtIiwic2hvd25JbWFnZUNvbnRhaW5lciIsInNob3duSW1hZ2VVcmwiLCJpbWFnZUNvbnRhaW5lciIsInJlbmRlclN0YXRPdmVydmlldyIsInJlbmRlckRhbWFnZVN0YXRzIiwicmVuZGVyQ2hhbXBpb25MYW5lIiwicmVuZGVyTWF0Y2h1cHNJbmZvIiwic3RhdHNPdmVydmlldyIsInRydWVEYW1hZ2VDaXJjbGVTdHJva2UiLCJwaHlzaWNhbERhbWFnZUNpcmNsZVN0cm9rZSIsIm1hZ2ljRGFtYWdlQ2lyY2xlU3Ryb2tlIiwidHJ1ZURhbWFnZVBlcmNlbnQiLCJNYXRoIiwicm91bmQiLCJ0cnVlRGFtYWdlIiwicGVyY2VudGFnZSIsInBoeXNpY2FsRGFtYWdlUGVyY2VudCIsInBoeXNpY2FsRGFtYWdlIiwibWFnaWNEYW1hZ2VQZXJjZW50IiwibWFnaWNEYW1hZ2UiLCJzdHJva2VEYXNoYXJyYXkiLCJ0b3RhbERhbWFnZVRleHQiLCJ0cnVlRGFtYWdlVmFsdWUiLCJwaHlzaWNhbERhbWFnZVZhbHVlIiwibWFnaWNEYW1hZ2VWYWx1ZSIsImdldEFsbEl0ZW1zIiwiY2hhbXBpb25JdGVtQnVpbGRzIiwiaXRlbVNldCIsIml0ZW1TZXRDb250YWluZXIiLCJpdGVtIiwiaXRlbUluZm8iLCJnZXRJdGVtSW5mbyIsIm1haW5Db21wb25lbnRDb250YWluZXIiLCJtYWluSXRlbSIsIml0ZW1EZXRhaWxzQ29udGFpbmVyIiwibmFtZUVsZW1lbnQiLCJkZXNjcmlwdGlvbkVsZW1lbnQiLCJpdGVtQ29zdCIsImNvc3RMYWJlbCIsImNvc3RBbW91bnQiLCJyZXNvbHZlIiwidGhlbiIsIml0ZW1zIiwiY29tcG9uZW50SXRlbXNDb250YWluZXIiLCJjb21wb25lbnRJdGVtIiwiY29tcG9uZW50SXRlbUVsZW1lbnQiLCJjb21wb25lbnRJdGVtRGV0YWlsc0NvbnRhaW5lciIsImNvbXBvbmVudEl0ZW1OYW1lIiwiY29tcG9uZW50SXRlbUNvc3QiLCJjb21wb25lbnRJdGVtQ29zdExhYmVsIiwiY29tcG9uZW50SXRlbUFtb3VudCIsImJlc3RNYXRjaHVwc1NlY3Rpb24iLCJiZXN0TWF0Y2h1cHNFbGVtZW50IiwiYmVzdE1hdGNodXBzRGF0YSIsIndvcnN0TWF0Y2h1cHNTZWN0aW9uIiwid29yc3RNYXRjaHVwc0VsZW1lbnQiLCJ3b3JzdE1hdGNodXBzRGF0YSIsImNyZWF0ZVNlY3Rpb24iLCJzb3J0T3B0aW9ucyIsInJvbGVPcHRpb25zIiwiZGlmZmljdWx0eU9wdGlvbnMiLCJtdWx0aU9wdGlvbkFycmF5cyIsInNvcnREcm9wZG93biIsInJlbmRlckRyb3Bkb3duIiwib3B0aW9uc09iamVjdCIsIk9iamVjdCIsImtleXMiLCJ2YWx1ZXMiLCJhbGxDaGFtcGlvbnNBcnJheSIsImF1dG9Db21wbGV0ZU5hbWVXcmFwcGVyIiwidGFiSW5kZXgiLCJpbXBvcnRBbGwiLCJyIiwicmVxdWlyZSIsImNvbnRleHQiLCJtb2RhbENvbnRhaW5lciIsImNvbnRhaW5lciIsImJhY2tncm91bmQiLCJiYWNrZ3JvdW5kU2l6ZSIsInJhdGVUZXh0IiwicmF0ZVR5cGUiLCJjaGFtcGlvblJhdGUiLCJsYWJlbCIsInJhdGVWYWx1ZSIsImxvd2VyQ2FzZVRleHQiLCJjaGFtcGlvbkxhbmVJbmZvIiwibGFuZVRleHQiLCJsYW5lSWNvbiIsImRhbWFnZVR5cGUiLCJkYW1hZ2VWYWx1ZSIsImRhbWFnZVBlcmNlbnRhZ2UiLCJkYW1hZ2VDb250YWluZXIiLCJkYW1hZ2VTdGF0cyIsImRhbWFnZVZhbHVlRWxlbWVudCIsImRhbWFnZVBlcmNlbnRhZ2VFbGVtZW50IiwibWF0Y2h1cHNFbGVtZW50IiwibWF0Y2h1cHNEYXRhIiwibWF0Y2h1cCIsIm1hdGNodXBJbmZvIiwiZW5lbXlDaGFtcGlvbk5hbWUiLCJlbmVteUNoYW1waW9uSWQiLCJlbmVteUNoYW1waW9uSW1nVXJsIiwibWF0Y2h1cFN0YXRzIiwiZW5lbXlDaGFtcGlvbk5hbWVFbGVtZW50Iiwid2lucmF0ZUFnYWluc3QiLCJ3aW5yYXRlQWdhaW5zdExhYmVsIiwiY29sb3IiLCJ3aW5yYXRlQWdhaW5zdFBlcmNlbnRhZ2UiLCJ3aW5SYXRlQWdhaW5zdCIsImdhbWVzUGxheWVkQWdhaW5zdCIsIm1hdGNoZXMiLCJjaGFtcGlvbkNvbnRhaW5lciIsImNoYW1waW9uSW1nVXJsIiwiY2hhbXBpb25JbWciLCJjaGFtcGlvbk5hbWVXcmFwcGVyIiwiY3JlYXRlQ2hhbXBpb25zUGFnZSIsImdldEl0ZW0iLCJjbGVhciJdLCJzb3VyY2VSb290IjoiIn0=