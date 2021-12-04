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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --rasin-black: #1d1e2c;\n  --transparent-rasin-black: #1d1e2cc7;\n  --dark-gold: #927543;\n  --light-gold: #c7ab6e;\n}\n\n#champions-page {\n  background-color: var(--rasin-black);\n  min-height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: -4;\n  font-family: \"Barlow\", sans-serif;\n}\n#champions-page .app-name-container {\n  background-color: var(--dark-gold);\n  padding: 0.3em;\n  border-radius: 8px 0px 8px 0;\n}\n#champions-page .app-name {\n  font-weight: 900;\n  font-size: 2rem;\n  letter-spacing: 3px;\n  cursor: pointer;\n}\n#champions-page .app-name-container:hover {\n  color: var(--dark-gold);\n  background-color: white;\n}\n#champions-page .page-header {\n  display: flex;\n  justify-content: space-evenly;\n  color: white;\n  background-color: var(--rasin-black);\n  max-width: 100%;\n  padding: 1em 0;\n  border-style: solid;\n  border-color: var(--dark-gold);\n  border-width: 0 0 2px 0;\n  align-items: center;\n}\n#champions-page .search-container {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  max-width: 100%;\n}\n#champions-page .auto-complete-names {\n  position: absolute;\n  border: 1px solid #d4d4d4;\n  border-bottom: none;\n  border-top: none;\n  z-index: 4;\n  top: 100%;\n  width: 100%;\n  max-height: 14rem;\n  overflow: auto;\n  scroll-behavior: smooth;\n  display: none;\n}\n#champions-page .auto-complete-name-wrapper {\n  padding: 10px;\n  cursor: pointer;\n  background-color: #fff;\n  border-bottom: 1px solid #d4d4d4;\n  color: var(--rasin-black);\n  font-weight: 600;\n  width: 100%;\n}\n#champions-page .auto-complete-name-wrapper:hover {\n  background-color: var(--light-gold);\n}\n#champions-page .auto-complete-name-wrapper:focus {\n  background-color: var(--light-gold);\n}\n#champions-page .search {\n  padding: 0.5em;\n  min-width: 18em;\n  background: #e2e4e9;\n  outline: none;\n  border-style: none;\n  color: var(--rasin-black);\n  font-weight: 600;\n  min-height: 2.6em;\n  font-size: 1em;\n}\n#champions-page .champions-section {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-auto-rows: auto;\n  grid-column-gap: 1em;\n  max-width: 80%;\n  margin: auto;\n  margin-top: 2em;\n}\n#champions-page .champion-container.shown {\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  cursor: pointer;\n  max-width: 9rem;\n  position: relative;\n  margin-top: 1.5em;\n  opacity: 0.8;\n  transition: all 0.2s ease-in-out;\n}\n#champions-page .champion-container.shown:hover {\n  transform: scale(1.05);\n  opacity: 1;\n}\n#champions-page .champion-container.shown:focus {\n  transform: scale(1.05);\n  opacity: 1;\n}\n#champions-page .champion-container.hidden {\n  display: none;\n}\n#champions-page .champion-img {\n  max-height: 100%;\n  max-width: 100%;\n  border-radius: 8%;\n}\n#champions-page .champion-img:focus .champion-container.shown {\n  transform: scale(1.05);\n  opacity: 1;\n}\n#champions-page .champion-name-wrapper {\n  position: relative;\n  margin: 0 auto;\n  text-align: center;\n  margin-top: -3.2em;\n  background-color: var(--transparent-rasin-black);\n  width: 100%;\n  height: 100%;\n  padding: 0.2em 0 0.2em;\n}\n#champions-page .champion-name {\n  color: white;\n  font-size: 1.2em;\n  font-weight: 600;\n  font-family: \"Barlow\", sans-serif;\n}\n#champions-page .filter-sort-section {\n  display: flex;\n  width: 57%;\n  margin: 1em auto 3em auto;\n}\n#champions-page .lane-filter-header {\n  display: flex;\n  justify-content: center;\n  font-size: 1.2em;\n  font-weight: 600;\n  flex: 1;\n  width: 76%;\n  margin: 1em auto;\n  justify-content: space-evenly;\n}\n#champions-page .header-option {\n  cursor: pointer;\n  color: #70757a;\n}\n#champions-page .header-option:hover {\n  color: white;\n  border-bottom: solid 3px var(--light-gold);\n}\n#champions-page .header-option.active {\n  color: white;\n  border-bottom: solid 3px var(--light-gold);\n}\n#champions-page .dropdown {\n  margin: 0 0.4em 0.4em 0.4em;\n  max-width: 100%;\n  position: relative;\n  flex: 1;\n}\n#champions-page .dropdown-btn {\n  display: flex;\n  border-style: none;\n  justify-content: space-between;\n  background-color: #dfdfe1;\n  color: #2f1d1d;\n  font-weight: 600;\n  padding: 0.5em;\n  font-size: 1em;\n  width: 100%;\n  border-bottom: 2px solid;\n}\n#champions-page .dropdown-btn::after {\n  content: \"➤\";\n  display: inline-block;\n  transform: rotate(90deg);\n}\n#champions-page .dropdown-options {\n  flex-direction: column;\n  display: none;\n  position: absolute;\n  width: 100%;\n  z-index: 2;\n}\n#champions-page .dropdown-option {\n  color: var(--rasin-black);\n  font-weight: 600;\n  background-color: #f8f8f8;\n  cursor: pointer;\n  padding: 0.5em;\n  color: white;\n  color: var(--rasin-black);\n  border-bottom: 2px solid #f8f8f8;\n}\n#champions-page .dropdown-option:hover {\n  background-color: #e1dede;\n}\n#champions-page .dropdown-option.active {\n  background-color: var(--light-gold);\n}\n#champions-page .loader {\n  font-size: 10px;\n  margin: 50px auto;\n  text-indent: -9999em;\n  width: 11em;\n  height: 11em;\n  border-radius: 50%;\n  background: #2e3436;\n  background: -moz-linear-gradient(left, #2e3436 10%, rgba(143, 89, 2, 0) 42%);\n  background: -webkit-linear-gradient(left, #2e3436 10%, rgba(143, 89, 2, 0) 42%);\n  background: -o-linear-gradient(left, #2e3436 10%, rgba(143, 89, 2, 0) 42%);\n  background: -ms-linear-gradient(left, #2e3436 10%, rgba(143, 89, 2, 0) 42%);\n  background: linear-gradient(to right, #2e3436 10%, rgba(143, 89, 2, 0) 42%);\n  position: relative;\n  -webkit-animation: load3 1.4s infinite linear;\n  animation: load3 1.4s infinite linear;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  display: none;\n  position: relative;\n  top: 17.3em;\n  z-index: 5;\n}\n#champions-page .loader:before {\n  width: 50%;\n  height: 50%;\n  background: var(--dark-gold);\n  border-radius: 100% 0 0 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: \"\";\n}\n#champions-page .loader:after {\n  background: var(--rasin-black);\n  width: 75%;\n  height: 75%;\n  border-radius: 50%;\n  content: \"\";\n  margin: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n@-webkit-keyframes load3 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@keyframes load3 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@media (min-width: 850px) {\n  #champions-page .champions-section {\n    grid-template-columns: repeat(4, 1fr);\n  }\n  #champions-page .champion-container.shown {\n    max-width: 10rem;\n  }\n  #champions-page .lane-filter-header {\n    width: 54%;\n  }\n}\n@media (min-width: 1000px) {\n  #champions-page .dropdown {\n    grid-row-start: 2;\n  }\n  #champions-page .champions-section {\n    grid-column-gap: 0;\n  }\n  #champions-page .champion-name-wrapper {\n    margin-top: -3.6em;\n  }\n  #champions-page .champion-name {\n    font-size: 1.4em;\n  }\n}\n@media (min-width: 1200px) {\n  #champions-page .champions-section {\n    grid-template-columns: repeat(5, 1fr);\n  }\n}\n@media (min-width: 1500px) {\n  #champions-page .champions-section {\n    grid-template-columns: repeat(6, 1fr);\n  }\n  #champions-page .champion-container.shown {\n    max-width: 12rem;\n  }\n}\n@media (max-width: 700px) {\n  #champions-page .header-option {\n    margin-right: 0.5em;\n  }\n  #champions-page .filter-sort-section {\n    width: 94%;\n  }\n  #champions-page .search {\n    min-width: 16em;\n    min-height: 1.6em;\n    font-size: 0.95em;\n  }\n}\n@media (max-width: 500px) {\n  #champions-page .champions-section {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  #champions-page .page-header {\n    flex-direction: column;\n  }\n  #champions-page .app-name-container {\n    margin-bottom: 1em;\n  }\n}\n@media (max-width: 360px) {\n  #champions-page .lane-filter-header {\n    font-size: 1em;\n  }\n}", "",{"version":3,"sources":["webpack://./src/stylesheets/champions.scss"],"names":[],"mappings":"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","sourcesContent":["* {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n}\n\n:root {\n  --rasin-black: #1d1e2c;\n  --transparent-rasin-black: #1d1e2cc7;\n  --dark-gold: #927543;\n  --light-gold: #c7ab6e;\n}\n\n#champions-page {\n  background-color: var(--rasin-black);\n  min-height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: -4;\n  font-family: \"Barlow\", sans-serif;\n  \n  .app-name-container {\n    background-color: var(--dark-gold);\n    padding: 0.3em;\n    border-radius: 8px 0px 8px 0;\n  }\n\n  .app-name {\n    font-weight: 900;\n    font-size: 2rem;\n    letter-spacing: 3px;\n    cursor: pointer;\n  }\n\n  .app-name-container:hover {\n    color: var(--dark-gold);\n    background-color: white;\n  }\n\n  .page-header {\n    display: flex;\n    justify-content: space-evenly;\n    color: white;\n    background-color: var(--rasin-black);\n    max-width: 100%;\n    padding: 1em 0;\n    border-style: solid;\n    border-color: var(--dark-gold);\n    border-width: 0 0 2px 0;\n    align-items: center;\n  }\n\n  .search-container {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    max-width: 100%;\n  }\n\n  .auto-complete-names {\n    position: absolute;\n    border: 1px solid #d4d4d4;\n    border-bottom: none;\n    border-top: none;\n    z-index: 4;\n    top: 100%;\n    width: 100%;\n    max-height: 14rem;\n    overflow: auto;\n    scroll-behavior: smooth; \n    display: none;\n  }\n\n  .auto-complete-name-wrapper {\n    padding: 10px;\n    cursor: pointer;\n    background-color: #fff; \n    border-bottom: 1px solid #d4d4d4; \n    color: var(--rasin-black);\n    font-weight: 600;\n    width: 100%;\n  }\n\n  .auto-complete-name-wrapper:hover {\n    background-color: var(--light-gold);\n  }\n\n  .auto-complete-name-wrapper:focus {\n    background-color: var(--light-gold);\n  }\n  \n  .search {\n    padding: 0.5em;\n    min-width: 18em;\n    background: #e2e4e9;\n    outline: none;\n    border-style: none;\n    color: var(--rasin-black);\n    font-weight: 600;\n    min-height: 2.6em;\n    font-size: 1em;\n  }\n\n  .champions-section {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-auto-rows: auto;\n    grid-column-gap: 1em;\n    max-width: 80%;\n    margin: auto;\n    margin-top: 2em;\n  }\n\n  .champion-container.shown {\n    display: flex;\n    flex-direction: column;\n    margin: 0 auto;\n    cursor: pointer;\n    max-width: 9rem;\n    position: relative;\n    margin-top: 1.5em;\n    opacity: 0.8;\n    transition: all 0.2s ease-in-out;\n  }\n\n  .champion-container.shown:hover {\n    transform: scale(1.05);\n    opacity: 1;\n  }\n\n  .champion-container.shown:focus {\n    transform: scale(1.05);\n    opacity: 1;\n  }\n\n  .champion-container.hidden {\n    display: none;\n  }\n\n  .champion-img {\n    max-height: 100%;\n    max-width: 100%;\n    border-radius: 8%;\n  }\n\n  .champion-img:focus {\n    .champion-container.shown{\n      transform: scale(1.05);\n      opacity: 1;\n    }\n  }\n\n  .champion-name-wrapper {\n    position: relative;\n    margin: 0 auto;\n    text-align: center;\n    margin-top: -3.2em;\n    background-color: var(--transparent-rasin-black);\n    width: 100%;\n    height: 100%;\n    padding: 0.2em 0 0.2em;\n  }\n\n  .champion-name {\n    color: white;\n    font-size: 1.2em;\n    font-weight: 600;\n    font-family: \"Barlow\", sans-serif;\n  }\n  \n  .filter-sort-section {\n    display: flex;\n    width: 57%;\n  \n    margin: 1em auto 3em auto;\n  }\n  \n  .lane-filter-header {\n    display: flex;\n    justify-content: center;\n    font-size: 1.2em;\n    font-weight: 600;\n    flex: 1;\n    width: 76%;\n    margin: 1em auto;\n    justify-content: space-evenly;\n  }\n\n  .header-option {\n    cursor: pointer;\n    color: #70757a;\n  }\n\n  .header-option:hover {\n    color: white;\n    border-bottom: solid 3px var(--light-gold);\n  }\n\n  .header-option.active {\n    color: white;\n    border-bottom: solid 3px var(--light-gold);\n  }\n\n  .dropdown {\n    margin: 0 0.4em 0.4em 0.4em;\n    max-width: 100%;\n    position: relative;\n    flex: 1;\n  }\n\n  .dropdown-btn {\n    display: flex;\n    border-style: none;\n    justify-content: space-between;\n    background-color: #dfdfe1;\n    color: #2f1d1d;\n    font-weight: 600;\n    padding: 0.5em;\n    font-size: 1em;\n    width: 100%;\n    border-bottom: 2px solid;\n  }\n\n  .dropdown-btn::after {\n    content: \"\\27A4\";\n    display: inline-block;\n    transform: rotate(90deg);\n  }\n\n  .dropdown-options {\n    flex-direction: column;\n    display: none; \n    position: absolute;\n    width: 100%;\n    z-index: 2;\n  }\n  \n  .dropdown-option {\n    color: var(--rasin-black); \n    font-weight: 600;\n    background-color: #f8f8f8;\n    cursor: pointer;\n    padding: 0.5em;\n    color: white;\n    color: var(--rasin-black);\n    border-bottom: 2px solid #f8f8f8;\n  }\n\n  .dropdown-option:hover {\n    background-color: #e1dede;\n  }\n\n  .dropdown-option.active {\n    background-color: var(--light-gold);\n  }\n\n  .loader {\n    font-size: 10px;\n    margin: 50px auto;\n    text-indent: -9999em;\n    width: 11em;\n    height: 11em;\n    border-radius: 50%;\n    background: #2e3436;\n    background: -moz-linear-gradient(left, #2e3436 10%, rgba(143,89,2, 0) 42%);\n    background: -webkit-linear-gradient(left, #2e3436 10%, rgba(143,89,2, 0) 42%);\n    background: -o-linear-gradient(left, #2e3436 10%, rgba(143,89,2, 0) 42%);\n    background: -ms-linear-gradient(left, #2e3436 10%, rgba(143,89,2, 0) 42%);\n    background: linear-gradient(to right, #2e3436 10%, rgba(143,89,2, 0) 42%);\n    position: relative;\n    -webkit-animation: load3 1.4s infinite linear;\n    animation: load3 1.4s infinite linear;\n    -webkit-transform: translateZ(0);\n    -ms-transform: translateZ(0);\n    transform: translateZ(0);\n    display: none;\n    position: relative;\n    top: 17.3em;\n    z-index: 5;\n  }\n  .loader:before {\n    width: 50%;\n    height: 50%;\n    background: var(--dark-gold);\n    border-radius: 100% 0 0 0;\n    position: absolute;\n    top: 0;\n    left: 0;\n    content: '';\n  }\n  .loader:after {\n    background: var(--rasin-black);\n    width: 75%;\n    height: 75%;\n    border-radius: 50%;\n    content: '';\n    margin: auto;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n  }\n  @-webkit-keyframes load3 {\n    0% {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n  @keyframes load3 {\n    0% {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n  \n\n  @media (min-width: 850px) {\n    .champions-section {\n      grid-template-columns: repeat(4, 1fr);\n    }\n\n    .champion-container.shown {\n      max-width: 10rem;\n    }\n\n    .lane-filter-header {\n      width: 54%;\n    }\n  }\n\n  @media (min-width: 1000px) {\n\n    .dropdown {\n      grid-row-start: 2;\n    }\n\n    .champions-section {\n      grid-column-gap: 0;\n    }\n\n    .champion-name-wrapper {\n      margin-top: -3.6em;\n    }\n\n    .champion-name {\n      font-size: 1.4em;\n    }\n  }\n\n  @media (min-width: 1200px) {\n    .champions-section {\n      grid-template-columns: repeat(5, 1fr);\n    }\n  }\n\n  @media (min-width: 1500px) {\n    .champions-section {\n      grid-template-columns: repeat(6, 1fr);\n    }\n\n    .champion-container.shown {\n      max-width: 12rem;\n    }\n  }\n\n  @media (max-width: 700px) {\n    .header-option {\n      margin-right: 0.5em;\n    }\n\n    .filter-sort-section {\n      width: 94%;\n    }\n\n    .search {\n      min-width: 16em;\n      min-height: 1.6em;\n      font-size: 0.95em;\n    }\n  }\n\n  @media (max-width: 500px) {\n    .champions-section {\n      grid-template-columns: repeat(2, 1fr);\n    }\n\n    .page-header {\n      flex-direction: column;\n    }\n\n    .app-name-container {\n      margin-bottom: 1em;\n    }\n  }\n\n  @media (max-width: 360px) {\n    .lane-filter-header {\n      font-size: 1em;\n    }\n  }\n }\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsS0FBSyxNQUFNLFdBQVcsVUFBVSxLQUFLLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLDRCQUE0QixjQUFjLGVBQWUsMkJBQTJCLEdBQUcsV0FBVywyQkFBMkIseUNBQXlDLHlCQUF5QiwwQkFBMEIsR0FBRyxxQkFBcUIseUNBQXlDLHFCQUFxQix1QkFBdUIsZ0JBQWdCLGdCQUFnQix3Q0FBd0MsNkJBQTZCLHlD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LFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxZQUFZLFVBQVUsTUFBTSxNQUFNLFlBQVksVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sWUFBWSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sWUFBWSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxZQUFZLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFlBQVksVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxZQUFZLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFlBQVksTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxZQUFZLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxZQUFZLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sYUFBYSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxXQUFXLFdBQVcsS0FBSyxNQUFNLGFBQWEsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsYUFBYSxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLFVBQVUsS0FBSyxNQUFNLGFBQWEsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sVUFBVSxLQUFLLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSw0QkFBNEIsY0FBYyxHQUFHLFdBQVcsMkJBQTJCLHlCQUF5QiwwQkFBMEIsR0FBRyxn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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsY0FBYztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVB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Q0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNK1AsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0FBQ2hDN1MsRUFBQUEsVUFBVSx3TEFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNIUCxvRUFBYSxFQURWOztBQUFBO0FBRVQ5RCxZQUFBQSxrR0FBQTtBQUNBcUcsWUFBQUEsZ0dBQUE7QUFDTXpGLFlBQUFBLFVBSkcsR0FJVW1ILFlBQVksQ0FBQ29QLE9BQWIsQ0FBcUIsWUFBckIsQ0FKVjs7QUFLVCxnQkFBSXZXLFVBQUosRUFBZ0I7QUFDZFosY0FBQUEsZ0dBQUEsQ0FBNkNZLFVBQTdDO0FBQ0FtSCxjQUFBQSxZQUFZLENBQUNxUCxLQUFiO0FBQ0Q7O0FBUlE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRCxJQVNQLEdBVE8sQ0FBVjtBQVVELENBWEQ7O0FBWUFGLG1CQUFtQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL2FwcENvbnRyb2wvY2hhbXBpb25Nb2RhbENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9hcHBDb250cm9sL2NoYW1waW9uc1BhZ2VDb250cm9sbGVyLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvYXBwQ29udHJvbC9maWx0ZXJDaGFtcGlvbnMuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9hcHBDb250cm9sL3NlYXJjaGJhckNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9hcHBDb250cm9sL3NvcnRDaGFtcGlvbnMuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9jaGFtcGlvbkRhdGEvY2hhbXBpb25EZXRhaWxzLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvY2hhbXBpb25EYXRhL2NoYW1waW9uU3RhdHMuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9jaGFtcGlvbkRhdGEvZ2V0QWxsQ2hhbXBpb25zLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvY2hhbXBpb25EYXRhL2dldExhdGVzdFZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9jaGFtcGlvbkRhdGEvaXRlbUluZm8uanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9oZWxwZXJzL2Ryb3Bkb3duU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL2hlbHBlcnMvZWxlbWVudENyZWF0aW9uLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvdGVtcGxhdGVzL2NoYW1waW9uRGV0YWlsc01vZGFsLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvdGVtcGxhdGVzL2NoYW1waW9uU2tpbnNNb2RhbC5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL3RlbXBsYXRlcy9jaGFtcGlvblN0YXRzTW9kYWwuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy90ZW1wbGF0ZXMvY2hhbXBpb25zUGFnZS5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL3RlbXBsYXRlcy9yZW5kZXJIZWxwZXJzLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvc3R5bGVzaGVldHMvY2hhbXBpb25zLnNjc3MiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9zdHlsZXNoZWV0cy9tb2RhbHMuc2NzcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9zdHlsZXNoZWV0cy9jaGFtcGlvbnMuc2Nzcz82OGM3Iiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvc3R5bGVzaGVldHMvbW9kYWxzLnNjc3M/Y2Y4MyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvL2hvbWUvZGF5by9EZXNrdG9wL29kaW5Qcm9qZWN0L0xlYWd1ZS1BcHAvZnJvbnRlbmQvc3JjL2Fzc2V0cy9pbWFnZXN8c3luY3xub25yZWN1cnNpdmV8L1xcLihwbmd8anBlIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9sZWFndWUtYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2xlYWd1ZS1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9sZWFndWUtYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2xlYWd1ZS1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9jaGFtcGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsImNvbnN0IENoYW1waW9uTW9kYWxDb250cm9sbGVyID0gKCgpID0+IHtcbiAgY29uc3QgdG9nZ2xlQWN0aXZlQWJpbGl0eSA9IChjbGlja2VkQWJpbGl0eUlkKSA9PiB7XG4gICAgY29uc3QgYWJpbGl0eUltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zcGVsbC1pbWcnKTtcbiAgICBjb25zdCBhYmlsaXR5SW5mb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWJpbGl0eS1pbmZvJyk7XG5cbiAgICBhYmlsaXR5SW1hZ2VzLmZvckVhY2goKGltZykgPT4ge1xuICAgICAgaW1nLmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrZWQnKTtcbiAgICB9KTtcbiAgICBhYmlsaXR5SW5mb3MuZm9yRWFjaCgoaW5mbykgPT4ge1xuICAgICAgaW5mby5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNsaWNrZWRJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2NsaWNrZWRBYmlsaXR5SWR9LWltZ2ApO1xuICAgIGNsaWNrZWRJbWFnZS5jbGFzc05hbWUgPSAnc3BlbGwtaW1nIGNsaWNrZWQnO1xuXG4gICAgY29uc3QgYWN0aXZlQWJpbGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2NsaWNrZWRBYmlsaXR5SWR9LWFiaWxpdHlgKTtcbiAgICBhY3RpdmVBYmlsaXR5LmNsYXNzTmFtZSA9ICdhYmlsaXR5LWluZm8gYWN0aXZlJztcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VNb2RhbFRlbXBsYXRlID0gKGNsaWNrZWRNb2RhbE5hdkxpbmspID0+IHtcbiAgICBjb25zdCB0ZW1wbGF0ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwtdGVtcGxhdGUnKTtcbiAgICB0ZW1wbGF0ZXMuZm9yRWFjaCgodGVtcGxhdGUpID0+IHtcbiAgICAgIGNvbnN0IHRlbXBsYXRlTmFtZSA9IHRlbXBsYXRlLmlkLnN1YnN0cmluZygwLCB0ZW1wbGF0ZS5pZC5pbmRleE9mKCctJykpO1xuICAgICAgaWYgKHRlbXBsYXRlTmFtZSA9PT0gY2xpY2tlZE1vZGFsTmF2TGluay5pZCkge1xuICAgICAgICBjb25zdCBjaG9zZW5UZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgICAgICBjaG9zZW5UZW1wbGF0ZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGhpZGRlblRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgICAgIGhpZGRlblRlbXBsYXRlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZGlzcGF5SXRlbURldGFpbHMgPSAoaG92ZXJlZEl0ZW1JbWFnZSkgPT4ge1xuICAgIGNvbnN0IGl0ZW1EZXRhaWxzID0gaG92ZXJlZEl0ZW1JbWFnZS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgaXRlbURldGFpbHMuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgfTtcblxuICBjb25zdCBoaWRlSXRlbURldGFpbHMgPSAodW5ob3ZlcmVkSXRlbUltYWdlKSA9PiB7XG4gICAgY29uc3QgaXRlbURldGFpbHMgPSB1bmhvdmVyZWRJdGVtSW1hZ2UubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGl0ZW1EZXRhaWxzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlU2tpbkltYWdlcyA9IChhcnJvd0NsYXNzTGlzdCkgPT4ge1xuICAgIGNvbnN0IHNraW5JbWFnZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2tpbi1pbWFnZXMtY29udGFpbmVyJyk7XG4gICAgY29uc3QgY3VycmVudFNob3duSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2tpbi1pbWFnZS1jb250YWluZXIuc2hvd24nKTtcbiAgICBjb25zdCBza2luTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5za2luLW5hbWUnKTtcblxuICAgIGN1cnJlbnRTaG93bkltYWdlLmNsYXNzTmFtZSA9ICdza2luLWltYWdlLWNvbnRhaW5lcic7XG4gICAgY29uc3QgZmlyc3RJbWFnZSA9IHNraW5JbWFnZXNDb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgY29uc3QgbGFzdEltYWdlID0gc2tpbkltYWdlc0NvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkO1xuXG4gICAgaWYgKGZpcnN0SW1hZ2UgPT09IGN1cnJlbnRTaG93bkltYWdlICYmIGFycm93Q2xhc3NMaXN0LmluY2x1ZGVzKCdsZWZ0LWFycm93JykpIHtcbiAgICAgIGxhc3RJbWFnZS5jbGFzc05hbWUgPSAnc2tpbi1pbWFnZS1jb250YWluZXIgc2hvd24nO1xuICAgICAgc2tpbk5hbWUudGV4dENvbnRlbnQgPSBsYXN0SW1hZ2UuaWQ7XG4gICAgfSBlbHNlIGlmIChsYXN0SW1hZ2UgPT09IGN1cnJlbnRTaG93bkltYWdlICYmIGFycm93Q2xhc3NMaXN0LmluY2x1ZGVzKCdyaWdodC1hcnJvdycpKSB7XG4gICAgICBmaXJzdEltYWdlLmNsYXNzTmFtZSA9ICdza2luLWltYWdlLWNvbnRhaW5lciBzaG93bic7XG4gICAgICBza2luTmFtZS50ZXh0Q29udGVudCA9IGZpcnN0SW1hZ2UuaWQ7XG4gICAgfSBlbHNlIGlmIChhcnJvd0NsYXNzTGlzdC5pbmNsdWRlcygncmlnaHQtYXJyb3cnKSkge1xuICAgICAgY3VycmVudFNob3duSW1hZ2UubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTmFtZSA9ICdza2luLWltYWdlLWNvbnRhaW5lciBzaG93bic7XG4gICAgICBza2luTmFtZS50ZXh0Q29udGVudCA9IGN1cnJlbnRTaG93bkltYWdlLm5leHRFbGVtZW50U2libGluZy5pZDtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudFNob3duSW1hZ2UucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc05hbWUgPSAnc2tpbi1pbWFnZS1jb250YWluZXIgc2hvd24nO1xuICAgICAgc2tpbk5hbWUudGV4dENvbnRlbnQgPSBjdXJyZW50U2hvd25JbWFnZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmlkO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjbGVhck1haW5Nb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tY29udGFpbmVyJyk7XG4gICAgY29uc3QgY2hhbXBpb25OYW1lID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tbmFtZScpO1xuICAgIGNvbnN0IGNoYW1waW9uVGl0bGUgPSBtYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbi10aXRsZScpO1xuICAgIGNvbnN0IGNoYW1waW9uUm9sZXMgPSBtYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbi1yb2xlcycpO1xuICAgIGNvbnN0IGNoYW1waW9uTG9yZSA9IG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLWxvcmUnKTtcbiAgICBjb25zdCBhYmlsaXR5RGV0YWlscyA9IG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvcignLmFiaWxpdHktZGV0YWlscycpO1xuICAgIGNvbnN0IGNoYW1waW9uVGlwcyA9IG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLXRpcHMnKTtcblxuICAgIGNvbnN0IG1haW5Nb2RhbEhlYWRlciA9IFtjaGFtcGlvbk5hbWUsIGNoYW1waW9uVGl0bGUsIGNoYW1waW9uUm9sZXNdO1xuICAgIG1haW5Nb2RhbEhlYWRlci5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICBjdXJyZW50RWxlbWVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgIH0pO1xuXG4gICAgY2hhbXBpb25Mb3JlLnJlbW92ZSgpO1xuICAgIGFiaWxpdHlEZXRhaWxzLnJlbW92ZSgpO1xuICAgIGNoYW1waW9uVGlwcy5yZW1vdmUoKTtcbiAgfTtcblxuICBjb25zdCBjbGVhclN0YXRzTW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3RhdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhdHMtY29udGFpbmVyJyk7XG4gICAgY29uc3QgY2hhbXBpb25OYW1lID0gc3RhdHNDb250YWluZXIucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLW5hbWUnKTtcbiAgICBjb25zdCBjaGFtcGlvblRpdGxlID0gc3RhdHNDb250YWluZXIucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLXRpdGxlJyk7XG4gICAgY29uc3QgY2hhbXBpb25TdGF0c092ZXJ2aWV3ID0gc3RhdHNDb250YWluZXIucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLXN0YXRzLW92ZXJ2aWV3Jyk7XG4gICAgY29uc3QgYWxsZGFtYWdlU3RhdHMgPSBzdGF0c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuZGFtYWdlLXN0YXRzJyk7XG4gICAgY29uc3QgaXRlbVNldHNDb250YWluZXIgPSBzdGF0c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuaXRlbS1zZXRzLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGJlc3RNYXRjaHVwcyA9IHN0YXRzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5iZXN0LW1hdGNodXBzJyk7XG4gICAgY29uc3Qgd29yc3RNYXRjaHVwcyA9IHN0YXRzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy53b3JzdC1tYXRjaHVwcycpO1xuXG4gICAgY29uc3Qgc3RhdHNNb2RhbEhlYWRlciA9IFtjaGFtcGlvbk5hbWUsIGNoYW1waW9uVGl0bGUsIGNoYW1waW9uU3RhdHNPdmVydmlld107XG4gICAgc3RhdHNNb2RhbEhlYWRlci5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICBjdXJyZW50RWxlbWVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgIH0pO1xuICAgIGFsbGRhbWFnZVN0YXRzLmZvckVhY2goKGRhbWFnZVN0YXQpID0+IHtcbiAgICAgIGNvbnN0IGRhbWFnZVN0YXRFbGVtZW50ID0gZGFtYWdlU3RhdDtcbiAgICAgIGRhbWFnZVN0YXRFbGVtZW50LnJlbW92ZSgpO1xuICAgIH0pO1xuICAgIGNvbnN0IHN0YXRzTW9kYWxDb250ZW50ID0gW2l0ZW1TZXRzQ29udGFpbmVyLCBiZXN0TWF0Y2h1cHMsIHdvcnN0TWF0Y2h1cHNdO1xuICAgIHN0YXRzTW9kYWxDb250ZW50LmZvckVhY2goKGNvbnRlbnQpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnRFbGVtZW50ID0gY29udGVudDtcbiAgICAgIGNvbnRlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyU2tpbnNNb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCBza2luSW1hZ2VzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNraW4taW1hZ2VzLWNvbnRhaW5lcicpO1xuICAgIHNraW5JbWFnZXNDb250YWluZXIucmVtb3ZlKCk7XG4gIH07XG5cbiAgY29uc3QgY2xvc2VDaGFtcGlvbk1vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHN0YXRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YXRzLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHNraW5zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NraW5zLWNvbnRhaW5lcicpO1xuXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBtYWluQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHN0YXRzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgc2tpbnNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfTtcblxuICBjb25zdCBtb2RhbENsaWNrRXZlbnRzID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcblxuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnc3BlbGwtaW1nJykge1xuICAgICAgY29uc3QgZGFzaEluZGV4ID0gZXZlbnQudGFyZ2V0LmlkLmluZGV4T2YoJy0nKTtcbiAgICAgIGNvbnN0IGFiaWxpdHlJZCA9IGV2ZW50LnRhcmdldC5pZC5zbGljZSgwLCBkYXNoSW5kZXgpO1xuICAgICAgdG9nZ2xlQWN0aXZlQWJpbGl0eShhYmlsaXR5SWQpO1xuICAgIH1cblxuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnbW9kYWwtbmF2LWxpbmsnKSB7XG4gICAgICBjaGFuZ2VNb2RhbFRlbXBsYXRlKGV2ZW50LnRhcmdldCk7XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmZyb20oZXZlbnQudGFyZ2V0LmNsYXNzTGlzdCkuaW5jbHVkZXMoJ2ltZy1zY3JvbGwtYXJyb3cnKSkge1xuICAgICAgdG9nZ2xlU2tpbkltYWdlcyhBcnJheS5mcm9tKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QpKTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2Nsb3NlLW1vZGFsLWJ0bicpIHtcbiAgICAgIG1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbW9kYWxDbGlja0V2ZW50cyk7XG4gICAgICBjbG9zZUNoYW1waW9uTW9kYWwoKTtcbiAgICAgIGNsZWFyTWFpbk1vZGFsKCk7XG4gICAgICBjbGVhclN0YXRzTW9kYWwoKTtcbiAgICAgIGNsZWFyU2tpbnNNb2RhbCgpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBtb2RhbE1vdXNlb3ZlckV2ZW50cyA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnaXRlbS1pbWcnXG4gICAgICB8fCBldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnY29tcG9uZW50LWl0ZW0taW1nJykge1xuICAgICAgZGlzcGF5SXRlbURldGFpbHMoZXZlbnQudGFyZ2V0KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbW9kYWxNb3VzZW91dEV2ZW50cyA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnaXRlbS1pbWcnXG4gICAgfHwgZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2NvbXBvbmVudC1pdGVtLWltZycpIHtcbiAgICAgIGlmICghZXZlbnQudGFyZ2V0KSByZXR1cm47XG5cbiAgICAgIGxldCB7IHJlbGF0ZWRUYXJnZXQgfSA9IGV2ZW50O1xuXG4gICAgICB3aGlsZSAocmVsYXRlZFRhcmdldCkge1xuICAgICAgICBpZiAocmVsYXRlZFRhcmdldCA9PT0gZXZlbnQudGFyZ2V0KSByZXR1cm47XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQgPSByZWxhdGVkVGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICB9XG5cbiAgICAgIGhpZGVJdGVtRGV0YWlscyhldmVudC50YXJnZXQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBtb2RhbEFycm93RXZlbnRzID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3Qgc2tpbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2tpbnMtY29udGFpbmVyJyk7XG4gICAgaWYgKHNraW5zQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycpIHtcbiAgICAgIGlmIChldmVudC5rZXkgPT09ICdBcnJvd1JpZ2h0Jykge1xuICAgICAgICBjb25zdCByaWdodEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJpZ2h0LWFycm93Jyk7XG4gICAgICAgIHRvZ2dsZVNraW5JbWFnZXMoQXJyYXkuZnJvbShyaWdodEFycm93LmNsYXNzTGlzdCkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dMZWZ0Jykge1xuICAgICAgICBjb25zdCBsZWZ0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGVmdC1hcnJvdycpO1xuICAgICAgICB0b2dnbGVTa2luSW1hZ2VzKEFycmF5LmZyb20obGVmdEFycm93LmNsYXNzTGlzdCkpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBtb2RhbENoYW5nZUxpc3RlbmVycyA9ICgpID0+IHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuXG4gICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtb2RhbENsaWNrRXZlbnRzKTtcbiAgICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBtb2RhbE1vdXNlb3ZlckV2ZW50cyk7XG4gICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBtb2RhbE1vdXNlb3V0RXZlbnRzKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgbW9kYWxBcnJvd0V2ZW50cyk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBtb2RhbENoYW5nZUxpc3RlbmVycyxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IENoYW1waW9uTW9kYWxDb250cm9sbGVyO1xuIiwiaW1wb3J0IGdldENoYW1waW9uRGV0YWlscyBmcm9tICcuLi9jaGFtcGlvbkRhdGEvY2hhbXBpb25EZXRhaWxzJztcbmltcG9ydCBnZXRDaGFtcGlvblN0YXRzIGZyb20gJy4uL2NoYW1waW9uRGF0YS9jaGFtcGlvblN0YXRzJztcbmltcG9ydCBjaGFtcGlvbkRldGFpbHNNb2RhbCBmcm9tICcuLi90ZW1wbGF0ZXMvY2hhbXBpb25EZXRhaWxzTW9kYWwnO1xuaW1wb3J0IGNoYW1waW9uU3RhdHNNb2RhbCBmcm9tICcuLi90ZW1wbGF0ZXMvY2hhbXBpb25TdGF0c01vZGFsJztcbmltcG9ydCBjaGFtcGlvblNraW5zTW9kYWwgZnJvbSAnLi4vdGVtcGxhdGVzL2NoYW1waW9uU2tpbnNNb2RhbCc7XG5pbXBvcnQgQ2hhbXBpb25Nb2RhbENvbnRyb2xsZXIgZnJvbSAnLi9jaGFtcGlvbk1vZGFsQ29udHJvbGxlcic7XG5pbXBvcnQgQ2hhbXBpb25GaWx0ZXIgZnJvbSAnLi9maWx0ZXJDaGFtcGlvbnMnO1xuaW1wb3J0IFNvcnRDaGFtcGlvbnMgZnJvbSAnLi9zb3J0Q2hhbXBpb25zJztcbmltcG9ydCB7IGdldEFsbENoYW1waW9uRGV0YWlscywgZ2V0QWxsQ2hhbXBpb25TdGF0cyB9IGZyb20gJy4uL2NoYW1waW9uRGF0YS9nZXRBbGxDaGFtcGlvbnMnO1xuaW1wb3J0IGdldExhdGVzdFZlcnNpb24gZnJvbSAnLi4vY2hhbXBpb25EYXRhL2dldExhdGVzdFZlcnNpb24nO1xuXG5jb25zdCBDaGFtcGlvbnNQYWdlQ29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGNvbnN0IGRpc3BsYXlEcm9wZG93bk9wdGlvbnMgPSAoZHJvcGRvd25PcHRpb25zKSA9PiB7XG4gICAgY29uc3QgYWxsRHJvcGRvd25PcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duLW9wdGlvbnMnKTtcbiAgICBhbGxEcm9wZG93bk9wdGlvbnMuZm9yRWFjaCgob3B0aW9ucykgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uc1N0eWxlID0gb3B0aW9ucy5zdHlsZTtcbiAgICAgIG9wdGlvbnNTdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZHJvcGRvd25PcHRpb25zU3R5bGUgPSBkcm9wZG93bk9wdGlvbnMuc3R5bGU7XG4gICAgZHJvcGRvd25PcHRpb25zU3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgfTtcblxuICBjb25zdCBoaWRlRHJvcGRvd25PcHRpb25zID0gKGRyb3Bkb3duT3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IGRyb3Bkb3duT3B0aW9uc1N0eWxlID0gZHJvcGRvd25PcHRpb25zLnN0eWxlO1xuICAgIGRyb3Bkb3duT3B0aW9uc1N0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH07XG5cbiAgY29uc3QgZHJvcGRvd25PcHRpb25zVG9nZ2xlID0gKGRyb3Bkb3duQnRuKSA9PiB7XG4gICAgY29uc3QgZHJvcGRvd25PcHRpb25zID0gZHJvcGRvd25CdG4ucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24tb3B0aW9ucycpO1xuICAgIGlmIChkcm9wZG93bk9wdGlvbnMuc3R5bGUuZGlzcGxheSAhPT0gJ2ZsZXgnKSB7XG4gICAgICBkaXNwbGF5RHJvcGRvd25PcHRpb25zKGRyb3Bkb3duT3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhpZGVEcm9wZG93bk9wdGlvbnMoZHJvcGRvd25PcHRpb25zKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheUNoYW1waW9uTW9kYWwgPSBhc3luYyAoY2hhbXBpb25JZCkgPT4ge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG4gICAgY29uc3QgbGF0ZXN0VmVyc2lvbiA9IGF3YWl0IGdldExhdGVzdFZlcnNpb24oKTtcbiAgICBjb25zdCBjaGFtcGlvbkRldGFpbHMgPSBhd2FpdCBnZXRDaGFtcGlvbkRldGFpbHMoY2hhbXBpb25JZCwgbGF0ZXN0VmVyc2lvbik7XG5cbiAgICBjb25zdCBjaGFtcGlvblN0YXRzID0gYXdhaXQgZ2V0Q2hhbXBpb25TdGF0cyhjaGFtcGlvbklkKTtcblxuICAgIGNvbnN0IHNraW5JbWFnZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2tpbi1pbWFnZXMtY29udGFpbmVyJyk7XG4gICAgLypcbiAgICAgIHB1cnBvc2Ugb2YgdGhlIGlmIHN0YXRlbWVudCBpcyB0byBwcmV2ZW50IHNwYW0gY2xpY2tzIGZyb20gcmVuZGVyaW5nXG4gICAgICBkdXBsaWNhdGUgY29udGVudCBvbnRvIHRoZSBjaGFtcGlvbiBtb2RhbC5cbiAgICAqL1xuICAgIGlmICghc2tpbkltYWdlc0NvbnRhaW5lcikge1xuICAgICAgY2hhbXBpb25EZXRhaWxzTW9kYWwoY2hhbXBpb25EZXRhaWxzKTtcbiAgICAgIGNoYW1waW9uU3RhdHNNb2RhbChjaGFtcGlvbkRldGFpbHMsIGNoYW1waW9uU3RhdHMsIGxhdGVzdFZlcnNpb24pO1xuICAgICAgY2hhbXBpb25Ta2luc01vZGFsKGNoYW1waW9uRGV0YWlscyk7XG4gICAgfVxuXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgQ2hhbXBpb25Nb2RhbENvbnRyb2xsZXIubW9kYWxDaGFuZ2VMaXN0ZW5lcnMoKTtcbiAgfTtcblxuICBjb25zdCBzZWxlY3RMYW5lRmlsdGVyT3B0aW9uID0gKGNsaWNrZWRMYW5lT3B0aW9uKSA9PiB7XG4gICAgY29uc3QgY2hhbXBpb25zU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbnMtc2VjdGlvbicpO1xuICAgIGNvbnN0IGFjdGl2ZUxhbmVPcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLW9wdGlvbi5hY3RpdmUnKTtcbiAgICBpZiAoY2xpY2tlZExhbmVPcHRpb24gPT09IGFjdGl2ZUxhbmVPcHRpb24gfHwgY2hhbXBpb25zU2VjdGlvbi5zdHlsZS52aXNpYmlsaXR5ID09PSAnaGlkZGVuJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBhY3RpdmVMYW5lT3B0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIGNsaWNrZWRMYW5lT3B0aW9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgY2hlY2tMYW5lRmlsdGVyT3B0aW9uID0gYXN5bmMgKGFsbENoYW1waW9uU3RhdHMpID0+IHtcbiAgICBjb25zdCBhY3RpdmVMYW5lT3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1vcHRpb24uYWN0aXZlJyk7XG4gICAgY29uc3QgbGFuZU5hbWUgPSBhY3RpdmVMYW5lT3B0aW9uLmNsYXNzTGlzdFswXTtcbiAgICBhd2FpdCBDaGFtcGlvbkZpbHRlci5maWx0ZXJCeUxhbmUobGFuZU5hbWUsIGFsbENoYW1waW9uU3RhdHMpO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrU29ydGluZ09wdGlvbiA9IChhbGxDaGFtcGlvblN0YXRzKSA9PiB7XG4gICAgY29uc3QgYWN0aXZlU29ydGluZ09wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zb3J0LmFjdGl2ZScpO1xuICAgIGlmIChhY3RpdmVTb3J0aW5nT3B0aW9uID09PSBudWxsKSB7XG4gICAgICBTb3J0Q2hhbXBpb25zLnNvcnRCeURlZmF1bHRPcmRlcihhbGxDaGFtcGlvblN0YXRzKTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmZyb20oYWN0aXZlU29ydGluZ09wdGlvbi5jbGFzc0xpc3QpLmluY2x1ZGVzKCd3aW5yYXRlJykpIHtcbiAgICAgIFNvcnRDaGFtcGlvbnMuc29ydENoYW1waW9uc0J5V2lucmF0ZShhbGxDaGFtcGlvblN0YXRzKTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmZyb20oYWN0aXZlU29ydGluZ09wdGlvbi5jbGFzc0xpc3QpLmluY2x1ZGVzKCdwaWNrcmF0ZScpKSB7XG4gICAgICBTb3J0Q2hhbXBpb25zLnNvcnRDaGFtcGlvbnNCeVBpY2tyYXRlKGFsbENoYW1waW9uU3RhdHMpO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuZnJvbShhY3RpdmVTb3J0aW5nT3B0aW9uLmNsYXNzTGlzdCkuaW5jbHVkZXMoJ2RhbWFnZScpKSB7XG4gICAgICBTb3J0Q2hhbXBpb25zLnNvcnRDaGFtcGlvbnNCeURhbWFnZURvbmUoYWxsQ2hhbXBpb25TdGF0cyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNoZWNrQWN0aXZlUm9sZU9wdGlvbnMgPSAoYWxsQ2hhbXBpb25EZXRhaWxzKSA9PiB7XG4gICAgY29uc3QgYWN0aXZlUm9sZU9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucm9sZS5hY3RpdmUnKTtcbiAgICBpZiAoYWN0aXZlUm9sZU9wdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGFjdGl2ZVJvbGVzID0gQXJyYXkuZnJvbShhY3RpdmVSb2xlT3B0aW9ucykubWFwKChhY3RpdmVSb2xlT3B0aW9uKSA9PiB7XG4gICAgICBjb25zdCBhY3RpdmVSb2xlID0gYWN0aXZlUm9sZU9wdGlvbi5jbGFzc0xpc3RbMF07XG4gICAgICByZXR1cm4gYWN0aXZlUm9sZTtcbiAgICB9KTtcbiAgICBDaGFtcGlvbkZpbHRlci5maWx0ZXJCeVJvbGUoYWN0aXZlUm9sZXMsIGFsbENoYW1waW9uRGV0YWlscyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgY2hlY2tBY3RpdmVEaWZmaWN1bHR5T3B0aW9ucyA9IChhbGxDaGFtcGlvbkRldGFpbHMpID0+IHtcbiAgICBjb25zdCBhY3RpdmVEaWZmaWN1bHR5T3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kaWZmaWN1bHR5LmFjdGl2ZScpO1xuICAgIGlmIChhY3RpdmVEaWZmaWN1bHR5T3B0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgYWN0aXZlRGlmZmljdWx0aWVzID0gQXJyYXkuZnJvbShhY3RpdmVEaWZmaWN1bHR5T3B0aW9ucykubWFwKChhY3RpdmVEaWZmaWN1bHR5T3B0aW9uKSA9PiB7XG4gICAgICBjb25zdCBhY3RpdmVEaWZmaWN1bHR5ID0gYWN0aXZlRGlmZmljdWx0eU9wdGlvbi5jbGFzc0xpc3RbMF07XG4gICAgICByZXR1cm4gYWN0aXZlRGlmZmljdWx0eTtcbiAgICB9KTtcbiAgICBDaGFtcGlvbkZpbHRlci5maWx0ZXJCeURpZmZpY3VsdHkoYWN0aXZlRGlmZmljdWx0aWVzLCBhbGxDaGFtcGlvbkRldGFpbHMpO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IHNlbGVjdE11bHRpRHJvcGRvd25PcHRpb24gPSAoZHJvcGRvd25PcHRpb24pID0+IHtcbiAgICBkcm9wZG93bk9wdGlvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgfTtcblxuICBjb25zdCBkZXNlbGVjdERyb3Bkb3duT3B0aW9uID0gKGRyb3Bkb3duT3B0aW9uKSA9PiB7XG4gICAgZHJvcGRvd25PcHRpb24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlRHJvcGRvd25PcHRpb24gPSAoZHJvcGRvd25PcHRpb24pID0+IHtcbiAgICBpZiAoIUFycmF5LmZyb20oZHJvcGRvd25PcHRpb24uY2xhc3NMaXN0KS5pbmNsdWRlcygnYWN0aXZlJykpIHtcbiAgICAgIHNlbGVjdE11bHRpRHJvcGRvd25PcHRpb24oZHJvcGRvd25PcHRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZXNlbGVjdERyb3Bkb3duT3B0aW9uKGRyb3Bkb3duT3B0aW9uKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2VsZWN0U2luZ2xlRHJvcGRvd25PcHRpb24gPSAoZHJvcGRvd25PcHRpb24pID0+IHtcbiAgICBjb25zdCBhY3RpdmVEcm9wZG93bk9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaW5nbGUtc2VsZWN0LmFjdGl2ZScpO1xuICAgIGlmIChhY3RpdmVEcm9wZG93bk9wdGlvbiA9PT0gbnVsbCkge1xuICAgICAgZHJvcGRvd25PcHRpb24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChhY3RpdmVEcm9wZG93bk9wdGlvbiA9PT0gZHJvcGRvd25PcHRpb24pIHtcbiAgICAgIGRlc2VsZWN0RHJvcGRvd25PcHRpb24oZHJvcGRvd25PcHRpb24pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhY3RpdmVEcm9wZG93bk9wdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBkcm9wZG93bk9wdGlvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgfTtcblxuICBjb25zdCByZWRpcmVjdFRvRnJvbnRQYWdlID0gKCkgPT4ge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ2luZGV4Lmh0bWwnO1xuICB9O1xuXG4gIGNvbnN0IGNoYW1waW9uc1BhZ2VDbGlja0V2ZW50cyA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIC8qIEhlbHBlciBmdW5jdGlvbnMgZm9yIGNsaWNrIGV2ZW50cyAqL1xuICAgIGNvbnN0IGNoZWNrT3B0aW9ucyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGFsbENoYW1waW9uU3RhdHMgPSBhd2FpdCBnZXRBbGxDaGFtcGlvblN0YXRzKCk7XG4gICAgICBjb25zdCBhbGxDaGFtcGlvbkRldGFpbHMgPSBhd2FpdCBnZXRBbGxDaGFtcGlvbkRldGFpbHMoKTtcbiAgICAgIGF3YWl0IGNoZWNrTGFuZUZpbHRlck9wdGlvbihhbGxDaGFtcGlvblN0YXRzKTtcbiAgICAgIGNoZWNrU29ydGluZ09wdGlvbihhbGxDaGFtcGlvblN0YXRzKTtcbiAgICAgIGNoZWNrQWN0aXZlUm9sZU9wdGlvbnMoYWxsQ2hhbXBpb25EZXRhaWxzKTtcbiAgICAgIGNoZWNrQWN0aXZlRGlmZmljdWx0eU9wdGlvbnMoYWxsQ2hhbXBpb25EZXRhaWxzKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGlkZUNoYW1waW9uc1NlY3Rpb24gPSAoKSA9PiB7XG4gICAgICBjb25zdCBjaGFtcGlvbnNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW1waW9ucy1zZWN0aW9uJyk7XG4gICAgICBjaGFtcGlvbnNTZWN0aW9uLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICB9O1xuXG4gICAgY29uc3Qgc2hvd0NoYW1waW9uc1NlY3Rpb24gPSAoKSA9PiB7XG4gICAgICBjb25zdCBjaGFtcGlvbnNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW1waW9ucy1zZWN0aW9uJyk7XG4gICAgICBjaGFtcGlvbnNTZWN0aW9uLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbW92ZUNoYW1waW9uc1BhZ2VMaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGNoYW1waW9uc1BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hhbXBpb25zLXBhZ2UnKTtcbiAgICAgIGNoYW1waW9uc1BhZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFtcGlvbnNQYWdlQ2xpY2tFdmVudHMpO1xuICAgIH07XG5cbiAgICBjb25zdCBhZGRDaGFtcGlvbnNQYWdlTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICBjb25zdCBjaGFtcGlvbnNQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoYW1waW9ucy1wYWdlJyk7XG4gICAgICBjaGFtcGlvbnNQYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbXBpb25zUGFnZUNsaWNrRXZlbnRzKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2hvd0xvYWRlciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkZXInKTtcbiAgICAgIGxvYWRlci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9O1xuXG4gICAgY29uc3QgaGlkZUxvYWRlciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkZXInKTtcbiAgICAgIGxvYWRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH07XG5cbiAgICBjb25zdCBmaWx0ZXJBbmRTb3J0Q2hhbXBpb25zU2VjdGlvbiA9IGFzeW5jICh3YWl0VGltZSkgPT4ge1xuICAgICAgaGlkZUNoYW1waW9uc1NlY3Rpb24oKTtcbiAgICAgIHNob3dMb2FkZXIoKTtcbiAgICAgIHJlbW92ZUNoYW1waW9uc1BhZ2VMaXN0ZW5lcigpO1xuICAgICAgYXdhaXQgY2hlY2tPcHRpb25zKCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2hvd0NoYW1waW9uc1NlY3Rpb24oKTtcbiAgICAgICAgaGlkZUxvYWRlcigpO1xuICAgICAgfSwgd2FpdFRpbWUpO1xuICAgICAgYWRkQ2hhbXBpb25zUGFnZUxpc3RlbmVyKCk7XG4gICAgfTtcblxuICAgIC8qIGNsaWNrIGV2ZW50IHJlc3BvbnNlcyAqL1xuICAgIGlmIChBcnJheS5mcm9tKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QpLmluY2x1ZGVzKCdkcm9wZG93bi1idG4nKSkge1xuICAgICAgZHJvcGRvd25PcHRpb25zVG9nZ2xlKGV2ZW50LnRhcmdldCk7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZSA9PT0gJ2NoYW1waW9uLWNvbnRhaW5lciBzaG93bicpIHtcbiAgICAgIGRpc3BsYXlDaGFtcGlvbk1vZGFsKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQuaWQpO1xuICAgIH1cblxuICAgIGlmIChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZSA9PT0gJ2NoYW1waW9uLWNvbnRhaW5lciBzaG93bicpIHtcbiAgICAgIGRpc3BsYXlDaGFtcGlvbk1vZGFsKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pZCk7XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmZyb20oZXZlbnQudGFyZ2V0LmNsYXNzTGlzdCkuaW5jbHVkZXMoJ211bHRpLXNlbGVjdCcpKSB7XG4gICAgICB0b2dnbGVEcm9wZG93bk9wdGlvbihldmVudC50YXJnZXQpO1xuICAgICAgZmlsdGVyQW5kU29ydENoYW1waW9uc1NlY3Rpb24oNjAwKTtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuZnJvbShldmVudC50YXJnZXQuY2xhc3NMaXN0KS5pbmNsdWRlcygnc2luZ2xlLXNlbGVjdCcpKSB7XG4gICAgICBzZWxlY3RTaW5nbGVEcm9wZG93bk9wdGlvbihldmVudC50YXJnZXQpO1xuICAgICAgZmlsdGVyQW5kU29ydENoYW1waW9uc1NlY3Rpb24oMTAwMCk7XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmZyb20oZXZlbnQudGFyZ2V0LmNsYXNzTGlzdCkuaW5jbHVkZXMoJ2hlYWRlci1vcHRpb24nKSkge1xuICAgICAgc2VsZWN0TGFuZUZpbHRlck9wdGlvbihldmVudC50YXJnZXQpO1xuICAgICAgZmlsdGVyQW5kU29ydENoYW1waW9uc1NlY3Rpb24oNjAwKTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2FwcC1uYW1lJykge1xuICAgICAgcmVkaXJlY3RUb0Zyb250UGFnZSgpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjaGFtcGlvbnNQYWdlS2V5RXZlbnRzID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBhY3RpdmVFbGVtZW50IH0gPSBkb2N1bWVudDtcblxuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIGlmIChhY3RpdmVFbGVtZW50ICYmIGFjdGl2ZUVsZW1lbnQuY2xhc3NOYW1lID09PSAnY2hhbXBpb24tY29udGFpbmVyIHNob3duJykge1xuICAgICAgICBkaXNwbGF5Q2hhbXBpb25Nb2RhbChhY3RpdmVFbGVtZW50LmRhdGFzZXQuaWQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aXZlRWxlbWVudCAmJiBhY3RpdmVFbGVtZW50LmNsYXNzTmFtZSA9PT0gJ2NoYW1waW9uLWltZycpIHtcbiAgICAgICAgZGlzcGxheUNoYW1waW9uTW9kYWwoYWN0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LmRhdGFzZXQuaWQpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBjaGFtcGlvbnNQYWdlTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IGNoYW1waW9uc1BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hhbXBpb25zLXBhZ2UnKTtcbiAgICBjaGFtcGlvbnNQYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbXBpb25zUGFnZUNsaWNrRXZlbnRzKTtcbiAgICBjaGFtcGlvbnNQYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBjaGFtcGlvbnNQYWdlS2V5RXZlbnRzKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNoYW1waW9uc1BhZ2VMaXN0ZW5lcnMsXG4gICAgZGlzcGxheUNoYW1waW9uTW9kYWwsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBDaGFtcGlvbnNQYWdlQ29udHJvbGxlcjtcbiIsImltcG9ydCBnZXRDaGFtcGlvblN0YXRzIGZyb20gJy4uL2NoYW1waW9uRGF0YS9jaGFtcGlvblN0YXRzJztcbmltcG9ydCB7IGNyZWF0ZUNoYW1waW9uQ29udGFpbmVyIH0gZnJvbSAnLi4vdGVtcGxhdGVzL3JlbmRlckhlbHBlcnMnO1xuXG5jb25zdCBDaGFtcGlvbkZpbHRlciA9ICgoKSA9PiB7XG4gIGNvbnN0IHJlbmRlckFsbENoYW1waW9ucyA9IGFzeW5jIChhbGxDaGFtcGlvblN0YXRzKSA9PiB7XG4gICAgY29uc3QgY2hhbXBpb25zU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbnMtc2VjdGlvbicpO1xuICAgIGFsbENoYW1waW9uU3RhdHMuZm9yRWFjaCgoY2hhbXBpb24pID0+IHtcbiAgICAgIGNyZWF0ZUNoYW1waW9uQ29udGFpbmVyKGNoYW1waW9uLCBjaGFtcGlvbnNTZWN0aW9uKTtcbiAgICB9KTtcbiAgICByZXR1cm4gY2hhbXBpb25zU2VjdGlvbjtcbiAgfTtcblxuICBjb25zdCBjbGVhckNoYW1waW9uc1NlY3Rpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgY2hhbXBpb25zU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbnMtc2VjdGlvbicpO1xuICAgIGNoYW1waW9uc1NlY3Rpb24udGV4dENvbnRlbnQgPSAnJztcbiAgfTtcblxuICBjb25zdCBzaG93Q2hhbXBpb24gPSAoY2hhbXBpb24pID0+IHtcbiAgICBjaGFtcGlvbi5jbGFzc0xpc3QuYWRkKCdzaG93bicpO1xuICAgIGNoYW1waW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICB9O1xuXG4gIGNvbnN0IGhpZGVDaGFtcGlvbiA9IChjaGFtcGlvbikgPT4ge1xuICAgIGNoYW1waW9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIGNoYW1waW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3duJyk7XG4gIH07XG5cbiAgY29uc3QgZmlsdGVyQnlMYW5lID0gYXN5bmMgKGNsaWNrZWRMYW5lLCBhbGxDaGFtcGlvblN0YXRzKSA9PiB7XG4gICAgY2xlYXJDaGFtcGlvbnNTZWN0aW9uKCk7XG4gICAgY29uc3QgY2hhbXBpb25zU2VjdGlvbiA9IGF3YWl0IHJlbmRlckFsbENoYW1waW9ucyhhbGxDaGFtcGlvblN0YXRzKTtcbiAgICBjaGFtcGlvbnNTZWN0aW9uLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICBjb25zdCBhbGxDaGFtcGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhbXBpb24tY29udGFpbmVyJyk7XG4gICAgaWYgKGNsaWNrZWRMYW5lID09PSAnYWxsJykge1xuICAgICAgYWxsQ2hhbXBpb25zLmZvckVhY2goKGNoYW1waW9uKSA9PiB7XG4gICAgICAgIHNob3dDaGFtcGlvbihjaGFtcGlvbik7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICAgICAgYWxsQ2hhbXBpb25zLmZvckVhY2goKGNoYW1waW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoYW1waW9uSWQgPSBjaGFtcGlvbi5kYXRhc2V0LmlkO1xuICAgICAgICByZXN1bHRzLnB1c2goZ2V0Q2hhbXBpb25TdGF0cyhjaGFtcGlvbklkKSk7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGNoYW1waW9uU3RhdHMgPSBhd2FpdCBQcm9taXNlLmFsbChyZXN1bHRzKTtcbiAgICAgIGNoYW1waW9uU3RhdHMuZm9yRWFjaCgoY2hhbXBpb24pID0+IHtcbiAgICAgICAgY29uc3QgY2hhbXBpb25MYW5lID0gY2hhbXBpb24ubGFuZTtcbiAgICAgICAgY29uc3QgY2hhbXBpb25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9JHtjaGFtcGlvbi5jaGFtcGlvbklkfV1gKTtcbiAgICAgICAgaWYgKGNoYW1waW9uTGFuZS50b0xvd2VyQ2FzZSgpICE9PSBjbGlja2VkTGFuZSkge1xuICAgICAgICAgIGhpZGVDaGFtcGlvbihjaGFtcGlvbkVsZW1lbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNob3dDaGFtcGlvbihjaGFtcGlvbkVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZmlsdGVyQnlSb2xlID0gKGFjdGl2ZVJvbGVzLCBhbGxDaGFtcGlvbkRldGFpbHMpID0+IHtcbiAgICBjb25zdCBjaGFtcGlvbkVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYW1waW9uLWNvbnRhaW5lcicpO1xuXG4gICAgY2hhbXBpb25FbGVtZW50cy5mb3JFYWNoKChjaGFtcGlvbikgPT4ge1xuICAgICAgbGV0IHJvbGVNYXRjaEZvdW5kID0gZmFsc2U7XG4gICAgICBhY3RpdmVSb2xlcy5mb3JFYWNoKChyb2xlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoYW1waW9uUm9sZXMgPSBhbGxDaGFtcGlvbkRldGFpbHNbY2hhbXBpb24uZGF0YXNldC5pZF0udGFncztcbiAgICAgICAgY2hhbXBpb25Sb2xlcy5mb3JFYWNoKChjaGFtcGlvblJvbGUpID0+IHtcbiAgICAgICAgICBpZiAoY2hhbXBpb25Sb2xlLnRvTG93ZXJDYXNlKCkgPT09IHJvbGUpIHtcbiAgICAgICAgICAgIHJvbGVNYXRjaEZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBpZiAoIXJvbGVNYXRjaEZvdW5kKSB7XG4gICAgICAgIGhpZGVDaGFtcGlvbihjaGFtcGlvbik7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgY2F0ZWdvcmlzZURpZmZpY3VsdHlOdW0gPSAoZGlmZmljdWx0eU51bSkgPT4ge1xuICAgIGlmIChkaWZmaWN1bHR5TnVtIDw9IDMpIHtcbiAgICAgIHJldHVybiAnbG93JztcbiAgICB9XG5cbiAgICBpZiAoZGlmZmljdWx0eU51bSA8PSA2KSB7XG4gICAgICByZXR1cm4gJ21lZGl1bSc7XG4gICAgfVxuXG4gICAgcmV0dXJuICdoaWdoJztcbiAgfTtcblxuICBjb25zdCBmaWx0ZXJCeURpZmZpY3VsdHkgPSBhc3luYyAoYWN0aXZlRGlmZmljdWx0aWVzLCBhbGxDaGFtcGlvbkRldGFpbHMpID0+IHtcbiAgICBjb25zdCBjaGFtcGlvbkVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYW1waW9uLWNvbnRhaW5lcicpO1xuXG4gICAgY2hhbXBpb25FbGVtZW50cy5mb3JFYWNoKChjaGFtcGlvbikgPT4ge1xuICAgICAgbGV0IGRpZmZpY3VsdHlNYXRjaEZvdW5kID0gZmFsc2U7XG4gICAgICBhY3RpdmVEaWZmaWN1bHRpZXMuZm9yRWFjaCgoZGlmZmljdWx0eSkgPT4ge1xuICAgICAgICBjb25zdCBjaGFtcGlvbkRpZmZpY3VsdHlOdW0gPSBhbGxDaGFtcGlvbkRldGFpbHNbY2hhbXBpb24uZGF0YXNldC5pZF0uaW5mby5kaWZmaWN1bHR5O1xuICAgICAgICBjb25zdCBjaGFtcGlvbkRpZmZpY3VsdHkgPSBjYXRlZ29yaXNlRGlmZmljdWx0eU51bShjaGFtcGlvbkRpZmZpY3VsdHlOdW0pO1xuXG4gICAgICAgIGlmIChkaWZmaWN1bHR5LnRvTG93ZXJDYXNlKCkgPT09IGNoYW1waW9uRGlmZmljdWx0eSkge1xuICAgICAgICAgIGRpZmZpY3VsdHlNYXRjaEZvdW5kID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAoIWRpZmZpY3VsdHlNYXRjaEZvdW5kKSB7XG4gICAgICAgIGhpZGVDaGFtcGlvbihjaGFtcGlvbik7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBmaWx0ZXJCeUxhbmUsXG4gICAgZmlsdGVyQnlSb2xlLFxuICAgIGZpbHRlckJ5RGlmZmljdWx0eSxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IENoYW1waW9uRmlsdGVyO1xuIiwiaW1wb3J0IENoYW1waW9uc1BhZ2VDb250cm9sbGVyIGZyb20gJy4vY2hhbXBpb25zUGFnZUNvbnRyb2xsZXInO1xuXG5jb25zdCBTZWFyY2hiYXJDb250cm9sbGVyID0gKCgpID0+IHtcbiAgY29uc3Qgc2hvd0F1dG9Db21wbGV0ZU5hbWVzID0gKHNlYXJjaENvbnRhaW5lcikgPT4ge1xuICAgIGNvbnN0IGF1dG9Db21wbGV0ZU5hbWVzID0gc2VhcmNoQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5hdXRvLWNvbXBsZXRlLW5hbWVzJyk7XG4gICAgYXV0b0NvbXBsZXRlTmFtZXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH07XG5cbiAgY29uc3QgaGlkZUF1dG9Db21wbGV0ZU5hbWVzID0gKCkgPT4ge1xuICAgIGNvbnN0IGF1dG9Db21wbGV0ZU5hbWVFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hdXRvLWNvbXBsZXRlLW5hbWVzJyk7XG4gICAgYXV0b0NvbXBsZXRlTmFtZUVsZW1lbnRzLmZvckVhY2goKGF1dG9Db21wbGV0ZU5hbWVFbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBhdXRvQ29tcGxldGVOYW1lcyA9IGF1dG9Db21wbGV0ZU5hbWVFbGVtZW50O1xuICAgICAgYXV0b0NvbXBsZXRlTmFtZXMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBzZWFyY2hiYXJGb2N1c0luRXZlbnQgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ3NlYXJjaCcpIHtcbiAgICAgIGNvbnN0IHNlYXJjaENvbnRhaW5lciA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgc2hvd0F1dG9Db21wbGV0ZU5hbWVzKHNlYXJjaENvbnRhaW5lcik7XG4gICAgICBldmVudC50YXJnZXQuZm9jdXMoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2VhcmNoYmFyRm9jdXNvdXRFdmVudCA9IChldmVudCkgPT4ge1xuICAgIGlmICghZXZlbnQucmVsYXRlZFRhcmdldCB8fCAoZXZlbnQucmVsYXRlZFRhcmdldC5jbGFzc05hbWUgIT09ICdhdXRvLWNvbXBsZXRlLW5hbWUtd3JhcHBlcicgJiYgZXZlbnQucmVsYXRlZFRhcmdldC5jbGFzc05hbWUgIT09ICdzZWFyY2gnKSkge1xuICAgICAgaGlkZUF1dG9Db21wbGV0ZU5hbWVzKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNlYXJjaEJhcklucHV0RXZlbnQgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ3NlYXJjaCcpIHtcbiAgICAgIGNvbnN0IGlucHV0VmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICBjb25zdCBhdXRvQ29tcGxldGVOYW1lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hdXRvLWNvbXBsZXRlLW5hbWUnKTtcbiAgICAgIGF1dG9Db21wbGV0ZU5hbWVzLmZvckVhY2goKGF1dG9Db21wbGV0ZU5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGF1dG9Db21wbGV0ZU5hbWU7XG4gICAgICAgIGlmIChuYW1lLmlkLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgIG5hbWUucGFyZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuYW1lLnBhcmVudEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNlYXJjaGJhcktleWRvd25FdmVudHMgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBpZiAoKGV2ZW50LmtleSA9PT0gJ0Fycm93RG93bicgfHwgZXZlbnQua2V5ID09PSAnQXJyb3dVcCcpICYmIGV2ZW50LnRhcmdldCAhPT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpKSB7XG4gICAgICBsZXQgeyBhY3RpdmVFbGVtZW50IH0gPSBkb2N1bWVudDtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGxldCBnb1RvU3RhcnQ7XG4gICAgICBjb25zdCBhY3Rpb24gPSB7XG4gICAgICAgIEFycm93VXA6ICdwcmV2aW91cycsIEFycm93RG93bjogJ25leHQnLFxuICAgICAgfTtcblxuICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQuY2xhc3NOYW1lID09PSAnc2VhcmNoJyAmJiBldmVudC5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICAgIGFjdGl2ZUVsZW1lbnQgPSBhY3RpdmVFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgLyogU2tpcHMgYXV0b2NvbXBsZXRlIG5hbWVzIHdoaWNoIGFyZSBjdXJyZW50bHkgbm90IGRpc3BsYXllZCAqL1xuICAgICAgICB3aGlsZSAoYWN0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgICBhY3RpdmVFbGVtZW50ID0gYWN0aXZlRWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIH1cbiAgICAgICAgYWN0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWN0aXZlRWxlbWVudCA9IGFjdGl2ZUVsZW1lbnRbYCR7YWN0aW9uW2V2ZW50LmtleV19RWxlbWVudFNpYmxpbmdgXTtcbiAgICAgICAgd2hpbGUgKGFjdGl2ZUVsZW1lbnQgJiYgYWN0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgICBhY3RpdmVFbGVtZW50ID0gYWN0aXZlRWxlbWVudFtgJHthY3Rpb25bZXZlbnQua2V5XX1FbGVtZW50U2libGluZ2BdO1xuICAgICAgICB9XG4gICAgICAgIC8qIENoZWNrcyB3aGljaCBzZWFyY2ggYmFyIGRyb3Bkb3duIGlzIGN1cnJlbnRseSBkaXNwbGF5ZWQgKi9cbiAgICAgICAgY29uc3QgYXV0b0NvbXBsZXRlTmFtZUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmF1dG8tY29tcGxldGUtbmFtZXMnKTtcbiAgICAgICAgY29uc3QgYXV0b0NvbXBsZXRlTmFtZXMgPSBBcnJheS5mcm9tKGF1dG9Db21wbGV0ZU5hbWVFbGVtZW50cykuZmlsdGVyKFxuICAgICAgICAgIChhdXRvQ29tcGxldGVOYW1lRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNTaG93aW5nID0gYXV0b0NvbXBsZXRlTmFtZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJztcbiAgICAgICAgICAgIHJldHVybiBpc1Nob3dpbmc7XG4gICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGF1dG9Db21wbGV0ZU5hbWVzWzBdICE9PSB1bmRlZmluZWQgJiYgIWFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAvKiBSZXR1cm5zIHRvIHRoZSBzdGFydCBvciB0aGUgZW5kIG9mIHRoZSBkcm9wZG93biB3aGVuIGFuIGFycm93IGtleSBpcyBwcmVzc2VkICovXG4gICAgICAgICAgZ29Ub1N0YXJ0ID0gYWN0aW9uW2V2ZW50LmtleV0gPT09ICduZXh0JyB8fCBldmVudC5rZXkgPT09ICdIb21lJztcbiAgICAgICAgICBhY3RpdmVFbGVtZW50ID0gYXV0b0NvbXBsZXRlTmFtZXNbMF0uY2hpbGRyZW5bXG4gICAgICAgICAgICBnb1RvU3RhcnQgPyAwIDogYXV0b0NvbXBsZXRlTmFtZXNbMF0uY2hpbGRyZW4ubGVuZ3RoIC0gMVxuICAgICAgICAgIF07XG4gICAgICAgICAgd2hpbGUgKGFjdGl2ZUVsZW1lbnQgJiYgYWN0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgPSBhY3RpdmVFbGVtZW50W2Ake2FjdGlvbltldmVudC5rZXldfUVsZW1lbnRTaWJsaW5nYF07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChhY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgYWN0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgY29uc3QgeyBhY3RpdmVFbGVtZW50IH0gPSBkb2N1bWVudDtcbiAgICAgIGlmIChhY3RpdmVFbGVtZW50ICYmIGFjdGl2ZUVsZW1lbnQuY2xhc3NOYW1lID09PSAnYXV0by1jb21wbGV0ZS1uYW1lLXdyYXBwZXInKSB7XG4gICAgICAgIGNvbnN0IHNlYXJjaENvbnRhaW5lckNsYXNzTmFtZSA9IGFjdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdFsxXTtcbiAgICAgICAgY29uc3QgYXV0b0NvbXBsZXRlTmFtZSA9IGFjdGl2ZUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG5cbiAgICAgICAgLyogQ2hlY2tzIHdoaWNoIHBhZ2UgdGhlIHNlYXJjaCBiYXIgaXMgb24gKi9cbiAgICAgICAgaWYgKHNlYXJjaENvbnRhaW5lckNsYXNzTmFtZSA9PT0gJ2Rlc2t0b3Atc2VhcmNoLWNvbnRhaW5lcidcbiAgICAgICAgICAgIHx8IHNlYXJjaENvbnRhaW5lckNsYXNzTmFtZSA9PT0gJ21vYmlsZS1zZWFyY2gtY29udGFpbmVyJykge1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjaGFtcGlvbklkJywgYXV0b0NvbXBsZXRlTmFtZS5kYXRhc2V0LmNoYW1waW9uSWQpO1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ2NoYW1waW9ucy5odG1sJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhd2FpdCBDaGFtcGlvbnNQYWdlQ29udHJvbGxlci5kaXNwbGF5Q2hhbXBpb25Nb2RhbChhdXRvQ29tcGxldGVOYW1lLmRhdGFzZXQuY2hhbXBpb25JZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2VhcmNoYmFyQ2xpY2tFdmVudHMgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBjbGlja0F1dG9Db21wbGV0ZU5hbWUgPSBhc3luYyAoc2VhcmNoQ29udGFpbmVyQ2xhc3NOYW1lLCBhdXRvQ29tcGxldGVOYW1lKSA9PiB7XG4gICAgICBpZiAoc2VhcmNoQ29udGFpbmVyQ2xhc3NOYW1lID09PSAnZGVza3RvcC1zZWFyY2gtY29udGFpbmVyJ1xuICAgICAgfHwgc2VhcmNoQ29udGFpbmVyQ2xhc3NOYW1lID09PSAnbW9iaWxlLXNlYXJjaC1jb250YWluZXInKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjaGFtcGlvbklkJywgYXV0b0NvbXBsZXRlTmFtZS5kYXRhc2V0LmNoYW1waW9uSWQpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICdjaGFtcGlvbnMuaHRtbCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhd2FpdCBDaGFtcGlvbnNQYWdlQ29udHJvbGxlci5kaXNwbGF5Q2hhbXBpb25Nb2RhbChhdXRvQ29tcGxldGVOYW1lLmRhdGFzZXQuY2hhbXBpb25JZCk7XG4gICAgICAgIGNvbnN0IGF1dG9Db21wbGV0ZU5hbWVFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hdXRvLWNvbXBsZXRlLW5hbWVzJyk7XG4gICAgICAgIGF1dG9Db21wbGV0ZU5hbWVFbGVtZW50cy5mb3JFYWNoKChhdXRvQ29tcGxldGVOYW1lRWxlbWVudCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGF1dG9Db21wbGV0ZU5hbWVzID0gYXV0b0NvbXBsZXRlTmFtZUVsZW1lbnQ7XG4gICAgICAgICAgYXV0b0NvbXBsZXRlTmFtZXMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBzZWFyY2hDb250YWluZXIgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnYXV0by1jb21wbGV0ZS1uYW1lLXdyYXBwZXInKSB7XG4gICAgICBjb25zdCBzZWFyY2hDb250YWluZXJDbGFzc05hbWUgPSBzZWFyY2hDb250YWluZXIuY2xhc3NMaXN0WzFdO1xuICAgICAgY29uc3QgYXV0b0NvbXBsZXRlTmFtZSA9IGV2ZW50LnRhcmdldC5maXJzdENoaWxkO1xuICAgICAgY2xpY2tBdXRvQ29tcGxldGVOYW1lKHNlYXJjaENvbnRhaW5lckNsYXNzTmFtZSwgYXV0b0NvbXBsZXRlTmFtZSk7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdhdXRvLWNvbXBsZXRlLW5hbWUnKSB7XG4gICAgICBjb25zdCBzZWFyY2hDb250YWluZXJDbGFzc05hbWUgPSBzZWFyY2hDb250YWluZXIucGFyZW50RWxlbWVudC5jbGFzc0xpc3RbMV07XG4gICAgICBjb25zdCBhdXRvQ29tcGxldGVOYW1lID0gZXZlbnQudGFyZ2V0O1xuICAgICAgY2xpY2tBdXRvQ29tcGxldGVOYW1lKHNlYXJjaENvbnRhaW5lckNsYXNzTmFtZSwgYXV0b0NvbXBsZXRlTmFtZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNlYXJjaENvbnRhaW5lckxpc3RlbmVycyA9ICgpID0+IHtcbiAgICAvLyBjb25zdCBzZWFyY2hDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWNvbnRhaW5lcicpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCBzZWFyY2hiYXJGb2N1c0luRXZlbnQpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0Jywgc2VhcmNoYmFyRm9jdXNvdXRFdmVudCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBzZWFyY2hCYXJJbnB1dEV2ZW50KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgc2VhcmNoYmFyS2V5ZG93bkV2ZW50cyk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWFyY2hiYXJDbGlja0V2ZW50cyk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBzZWFyY2hDb250YWluZXJMaXN0ZW5lcnMsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hiYXJDb250cm9sbGVyO1xuIiwiLy8gaW1wb3J0IHsgZ2V0QWxsQ2hhbXBpb25TdGF0cyB9IGZyb20gJy4uL2NoYW1waW9uRGF0YS9nZXRBbGxDaGFtcGlvbnMnO1xuaW1wb3J0IHsgY3JlYXRlQ2hhbXBpb25Db250YWluZXIgfSBmcm9tICcuLi90ZW1wbGF0ZXMvcmVuZGVySGVscGVycyc7XG5cbmNvbnN0IFNvcnRDaGFtcGlvbnMgPSAoKCkgPT4ge1xuICBjb25zdCBjbGVhckNoYW1waW9uc1NlY3Rpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgY2hhbXBpb25zU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbnMtc2VjdGlvbicpO1xuICAgIGNoYW1waW9uc1NlY3Rpb24uc3R5bGUudmlzaWJsaXR5ID0gJ2hpZGRlbic7XG4gICAgY2hhbXBpb25zU2VjdGlvbi50ZXh0Q29udGVudCA9ICcnO1xuICB9O1xuXG4gIGNvbnN0IHJlY3JlYXRlQ2hhbXBpb25zU2VjdGlvbiA9IChjaGFtcGlvbnMpID0+IHtcbiAgICBjb25zdCBjaGFtcGlvbnNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW1waW9ucy1zZWN0aW9uJyk7XG4gICAgY2hhbXBpb25zLmZvckVhY2goKGNoYW1waW9uKSA9PiB7XG4gICAgICBjcmVhdGVDaGFtcGlvbkNvbnRhaW5lcihjaGFtcGlvbiwgY2hhbXBpb25zU2VjdGlvbik7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZmlsdGVyQ2hhbXBpb25zID0gKGFsbENoYW1waW9uU3RhdHMpID0+IHtcbiAgICAvLyBjb25zdCBhbGxDaGFtcGlvblN0YXRzID0gYXdhaXQgZ2V0QWxsQ2hhbXBpb25TdGF0cygpO1xuICAgIGNvbnN0IGZpbHRlcmVkQ2hhbXBpb25TdGF0cyA9IGFsbENoYW1waW9uU3RhdHMuZmlsdGVyKChjaGFtcGlvblN0YXRzKSA9PiB7XG4gICAgICBjb25zdCBjaGFtcGlvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD0ke2NoYW1waW9uU3RhdHMuaWR9XWApO1xuICAgICAgcmV0dXJuIGNoYW1waW9uRWxlbWVudC5jbGFzc05hbWUgPT09ICdjaGFtcGlvbi1jb250YWluZXIgc2hvd24nO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpbHRlcmVkQ2hhbXBpb25TdGF0cztcbiAgfTtcblxuICBjb25zdCBzb3J0Q2hhbXBpb25zQnlXaW5yYXRlID0gKGFsbENoYW1waW9uU3RhdHMpID0+IHtcbiAgICBjb25zdCBmaWx0ZXJlZENoYW1waW9uU3RhdHMgPSBmaWx0ZXJDaGFtcGlvbnMoYWxsQ2hhbXBpb25TdGF0cyk7XG4gICAgY29uc3QgZmlsdGVyZWRDaGFtcGlvbnNTb3J0ZWQgPSBmaWx0ZXJlZENoYW1waW9uU3RhdHMuc29ydCgoYSwgYikgPT4gYi53aW5SYXRlIC0gYS53aW5SYXRlKTtcbiAgICBjbGVhckNoYW1waW9uc1NlY3Rpb24oKTtcbiAgICByZWNyZWF0ZUNoYW1waW9uc1NlY3Rpb24oZmlsdGVyZWRDaGFtcGlvbnNTb3J0ZWQpO1xuICAgIHJldHVybiBmaWx0ZXJlZENoYW1waW9uc1NvcnRlZDtcbiAgfTtcblxuICBjb25zdCBzb3J0Q2hhbXBpb25zQnlQaWNrcmF0ZSA9IChhbGxDaGFtcGlvblN0YXRzKSA9PiB7XG4gICAgY29uc3QgZmlsdGVyZWRDaGFtcGlvblN0YXRzID0gZmlsdGVyQ2hhbXBpb25zKGFsbENoYW1waW9uU3RhdHMpO1xuICAgIGNvbnN0IGZpbHRlcmVkQ2hhbXBpb25zU29ydGVkID0gZmlsdGVyZWRDaGFtcGlvblN0YXRzLnNvcnQoKGEsIGIpID0+IGIucGlja1JhdGUgLSBhLnBpY2tSYXRlKTtcbiAgICBjbGVhckNoYW1waW9uc1NlY3Rpb24oKTtcbiAgICByZWNyZWF0ZUNoYW1waW9uc1NlY3Rpb24oZmlsdGVyZWRDaGFtcGlvbnNTb3J0ZWQpO1xuICAgIHJldHVybiBmaWx0ZXJlZENoYW1waW9uc1NvcnRlZDtcbiAgfTtcblxuICBjb25zdCBzb3J0Q2hhbXBpb25zQnlEYW1hZ2VEb25lID0gKGFsbENoYW1waW9uU3RhdHMpID0+IHtcbiAgICBjb25zdCBmaWx0ZXJlZENoYW1waW9uU3RhdHMgPSBmaWx0ZXJDaGFtcGlvbnMoYWxsQ2hhbXBpb25TdGF0cyk7XG5cbiAgICBjb25zdCBmaWx0ZXJlZENoYW1waW9uc1NvcnRlZCA9IGZpbHRlcmVkQ2hhbXBpb25TdGF0cy5zb3J0KFxuICAgICAgKGEsIGIpID0+IGIuZGFtYWdlUGVyTWF0Y2gudG90YWxEYW1hZ2UudmFsdWUgLSBhLmRhbWFnZVBlck1hdGNoLnRvdGFsRGFtYWdlLnZhbHVlLFxuICAgICk7XG4gICAgY2xlYXJDaGFtcGlvbnNTZWN0aW9uKCk7XG4gICAgcmVjcmVhdGVDaGFtcGlvbnNTZWN0aW9uKGZpbHRlcmVkQ2hhbXBpb25zU29ydGVkKTtcbiAgICByZXR1cm4gZmlsdGVyZWRDaGFtcGlvbnNTb3J0ZWQ7XG4gIH07XG5cbiAgY29uc3Qgc29ydEJ5RGVmYXVsdE9yZGVyID0gKGFsbENoYW1waW9uU3RhdHMpID0+IHtcbiAgICAvLyBjb25zdCBhbGxDaGFtcGlvblN0YXRzID0gYXdhaXQgZ2V0QWxsQ2hhbXBpb25TdGF0cygpO1xuICAgIGNvbnN0IGZpbHRlcmVkQ2hhbXBpb25TdGF0cyA9IGFsbENoYW1waW9uU3RhdHMuZmlsdGVyKChjaGFtcGlvblN0YXRzKSA9PiB7XG4gICAgICBjb25zdCBjaGFtcGlvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD0ke2NoYW1waW9uU3RhdHMuaWR9XWApO1xuICAgICAgaWYgKGNoYW1waW9uRWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gY2hhbXBpb25FbGVtZW50LmNsYXNzTmFtZSA9PT0gJ2NoYW1waW9uLWNvbnRhaW5lciBzaG93bic7XG4gICAgfSk7XG4gICAgY2xlYXJDaGFtcGlvbnNTZWN0aW9uKCk7XG4gICAgcmVjcmVhdGVDaGFtcGlvbnNTZWN0aW9uKGZpbHRlcmVkQ2hhbXBpb25TdGF0cyk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBzb3J0Q2hhbXBpb25zQnlXaW5yYXRlLFxuICAgIHNvcnRDaGFtcGlvbnNCeVBpY2tyYXRlLFxuICAgIHNvcnRDaGFtcGlvbnNCeURhbWFnZURvbmUsXG4gICAgc29ydEJ5RGVmYXVsdE9yZGVyLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgU29ydENoYW1waW9ucztcbiIsImNvbnN0IGZldGNoQ2hhbXBpb25EZXRhaWxzID0gYXN5bmMgKGNoYW1waW9uSWQsIGxhdGVzdFZlcnNpb24pID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLyR7bGF0ZXN0VmVyc2lvbn0vZGF0YS9lbl9VUy9jaGFtcGlvbi8ke2NoYW1waW9uSWR9Lmpzb25gLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgY29uc3QgY2hhbXBpb25zID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBjb25zdCBjaGFtcGlvbkRldGFpbHMgPSBjaGFtcGlvbnMuZGF0YVtjaGFtcGlvbklkXTtcblxuICByZXR1cm4gY2hhbXBpb25EZXRhaWxzO1xufTtcblxuY29uc3QgZ2V0Q2hhbXBpb25QYXNzaXZlcyA9IChjaGFtcGlvbkRldGFpbHMsIGxhdGVzdFZlcnNpb24pID0+IHtcbiAgY29uc3QgcGFzc2l2ZURhdGEgPSBjaGFtcGlvbkRldGFpbHMucGFzc2l2ZTtcbiAgY29uc3QgcGFzc2l2ZU5hbWUgPSBwYXNzaXZlRGF0YS5uYW1lO1xuICBjb25zdCBwYXNzaXZlRGVzY3JpcHRpb24gPSBwYXNzaXZlRGF0YS5kZXNjcmlwdGlvbjtcbiAgY29uc3QgcGFzc2l2ZUlkID0gcGFzc2l2ZURhdGEuaW1hZ2UuZnVsbDtcbiAgY29uc3QgcGFzc2l2ZUltZ1VybCA9IGBodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vJHtsYXRlc3RWZXJzaW9ufS9pbWcvcGFzc2l2ZS8ke3Bhc3NpdmVJZH1gO1xuXG4gIHJldHVybiB7XG4gICAgcGFzc2l2ZU5hbWUsXG4gICAgcGFzc2l2ZURlc2NyaXB0aW9uLFxuICAgIHBhc3NpdmVJbWdVcmwsXG4gIH07XG59O1xuXG5jb25zdCBnZXRDaGFtcGlvblNwZWxscyA9IChjaGFtcGlvbkRldGFpbHMsIGxhdGVzdFZlcnNpb24pID0+IHtcbiAgY29uc3Qgc3BlbGxzRGF0YSA9IGNoYW1waW9uRGV0YWlscy5zcGVsbHM7XG4gIGNvbnN0IHNwZWxscyA9IFtdO1xuXG4gIHNwZWxsc0RhdGEuZm9yRWFjaCgoc3BlbGwpID0+IHtcbiAgICBjb25zdCBzcGVsbE9iamVjdCA9IHtcbiAgICAgIG5hbWU6IHNwZWxsLm5hbWUsXG4gICAgICBpZDogc3BlbGwuaWQsXG4gICAgICBkZXNjcmlwdGlvbjogc3BlbGwuZGVzY3JpcHRpb24sXG4gICAgICBjb3N0QnVybjogc3BlbGwuY29zdEJ1cm4sXG4gICAgICBjb3N0VHlwZTogc3BlbGwuY29zdFR5cGUsXG4gICAgICBjb29sZG93bjogc3BlbGwuY29vbGRvd25CdXJuLFxuICAgICAgaW1nVXJsOiBgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLyR7bGF0ZXN0VmVyc2lvbn0vaW1nL3NwZWxsLyR7c3BlbGwuaWR9LnBuZ2AsXG4gICAgfTtcbiAgICBzcGVsbHMucHVzaChzcGVsbE9iamVjdCk7XG4gIH0pO1xuXG4gIHJldHVybiBzcGVsbHM7XG59O1xuXG5jb25zdCBnZXRDaGFtcGlvbkRldGFpbHMgPSBhc3luYyAoY2hhbXBpb25JZCwgbGF0ZXN0VmVyc2lvbikgPT4ge1xuICBjb25zdCBjaGFtcGlvbkRldGFpbHMgPSBhd2FpdCBmZXRjaENoYW1waW9uRGV0YWlscyhjaGFtcGlvbklkLCBsYXRlc3RWZXJzaW9uKTtcbiAgY29uc3QgY2hhbXBpb25QYXNzaXZlID0gZ2V0Q2hhbXBpb25QYXNzaXZlcyhjaGFtcGlvbkRldGFpbHMsIGxhdGVzdFZlcnNpb24pO1xuICBjb25zdCBzcGVsbHMgPSBnZXRDaGFtcGlvblNwZWxscyhjaGFtcGlvbkRldGFpbHMsIGxhdGVzdFZlcnNpb24pO1xuXG4gIC8vIE1ha2UgZmlyc3QgbGV0dGVyIG9mIHRoZSBjaGFtcGlvbiB0aXRsZSBhIGNhcGl0YWwgbGV0dGVyLlxuICBjb25zdCBjaGFtcGlvblRpdGxlID0gY2hhbXBpb25EZXRhaWxzLnRpdGxlLnJlcGxhY2UoXG4gICAgY2hhbXBpb25EZXRhaWxzLnRpdGxlWzBdLCBjaGFtcGlvbkRldGFpbHMudGl0bGVbMF0udG9VcHBlckNhc2UoKSxcbiAgKTtcblxuICBpZiAoY2hhbXBpb25EZXRhaWxzLnBhcnR5cGUgPT09ICdOb25lJykge1xuICAgIGNoYW1waW9uRGV0YWlscy5wYXJ0eXBlID0gJ01hbmFsZXNzJztcbiAgfVxuXG4gIGlmIChjaGFtcGlvbkRldGFpbHMuaWQgPT09ICdBa3NoYW4nKSB7XG4gICAgY2hhbXBpb25EZXRhaWxzLmFsbHl0aXBzWzBdID0gJ1lvdSBjYW7igJl0IHVzZSBjb25zdW1hYmxlcyBsaWtlIHBvdGlvbnMgZHVyaW5nIHlvdXIgQ29tZXVwcGFuY2UsIG1ha2Ugc3VyZSB0byB1c2UgdGhlbSBiZWZvcmUgY2hhbm5lbGluZy4nO1xuICB9XG5cbiAgaWYgKGNoYW1waW9uRGV0YWlscy5pZCA9PT0gJ1ZleCcpIHtcbiAgICBjaGFtcGlvbkRldGFpbHMuYWxseXRpcHMucHVzaCgnVmV4IGlzIGdyZWF0IGF0IGRpdmluZyBpbnRvIHRoZSBiYWNrbGluZSwgYnV0IGhlciBlc2NhcGUgcG90ZW50aWFsIGlzIGxvdyBzbyB0aW1pbmcgaXMga2V5LicpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBjaGFtcGlvbkRldGFpbHMubmFtZSxcbiAgICBpZDogY2hhbXBpb25EZXRhaWxzLmlkLFxuICAgIHRpdGxlOiBjaGFtcGlvblRpdGxlLFxuICAgIGxvcmU6IGNoYW1waW9uRGV0YWlscy5sb3JlLFxuICAgIHJvbGVzOiBjaGFtcGlvbkRldGFpbHMudGFncyxcbiAgICBza2luczogY2hhbXBpb25EZXRhaWxzLnNraW5zLFxuICAgIHJlc291cmNlOiBjaGFtcGlvbkRldGFpbHMucGFydHlwZSxcbiAgICBwYXNzaXZlOiBjaGFtcGlvblBhc3NpdmUsXG4gICAgc3BlbGxzLFxuICAgIHRpcHM6IGNoYW1waW9uRGV0YWlscy5hbGx5dGlwcyxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldENoYW1waW9uRGV0YWlscztcbiIsImNvbnN0IGZldGNoQ2hhbXBpb25TdGF0cyA9IGFzeW5jIChjaGFtcGlvbklkKSA9PiB7XG4gIC8qIFJlbGF0aXZlIHVybHMgYXJlIHVzZWQgZm9yIHdoZW4gdGhlIGFwcCBpcyBpbiBwcm9kdWN0aW9uIGFuZCBsb2NhbGhvc3QgdXJsIGZvciBkZXZlbG9wbWVudCAqL1xuICBjb25zdCBkZXZVcmwgPSAnaHR0cDovLzEyNy4wLjAuMTo1NTAwL2Zyb250ZW5kL2Rpc3QvY2hhbXBpb25zLmh0bWwnO1xuICBjb25zdCByZXNwb25zZSA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmID09PSBkZXZVcmxcbiAgICA/IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvJHtjaGFtcGlvbklkfWAsIHsgbW9kZTogJ2NvcnMnIH0pXG4gICAgOiBhd2FpdCBmZXRjaChgJHtjaGFtcGlvbklkfWAsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICBjb25zdCBjaGFtcGlvblN0YXRzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIHJldHVybiBjaGFtcGlvblN0YXRzO1xufTtcblxuY29uc3QgZ2V0Q2hhbXBpb25TdGF0cyA9IGFzeW5jIChjaGFtcGlvbklkKSA9PiB7XG4gIGNvbnN0IGNoYW1waW9uU3RhdHMgPSBhd2FpdCBmZXRjaENoYW1waW9uU3RhdHMoY2hhbXBpb25JZCk7XG4gIGNvbnN0IHdpblJhdGUgPSBjaGFtcGlvblN0YXRzLndpblJhdGUudG9GaXhlZCgyKTtcbiAgY29uc3QgcGlja1JhdGUgPSBjaGFtcGlvblN0YXRzLnBpY2tSYXRlLnRvRml4ZWQoMik7XG4gIGNvbnN0IGxhbmUgPSBjaGFtcGlvblN0YXRzLmxhbmVbMF0gKyBjaGFtcGlvblN0YXRzLmxhbmUuc3Vic3RyaW5nKDEpLnRvTG93ZXJDYXNlKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBjaGFtcGlvbklkLFxuICAgIGtkYTogY2hhbXBpb25TdGF0cy5rZGFSYXRpbyxcbiAgICBkYW1hZ2VQZXJNYXRjaDogY2hhbXBpb25TdGF0cy5kYW1hZ2VQZXJNYXRjaCxcbiAgICBpdGVtU2V0czogY2hhbXBpb25TdGF0cy5pdGVtQ2hvaWNlcy5zbGljZSgxKSxcbiAgICBiZXN0TWF0Y2hVcHM6IGNoYW1waW9uU3RhdHMubWF0Y2hVcHMuYmVzdE1hdGNoVXBzLFxuICAgIHdvcnN0TWF0Y2hVcHM6IGNoYW1waW9uU3RhdHMubWF0Y2hVcHMud29yc3RNYXRjaFVwcyxcbiAgICB3aW5SYXRlLFxuICAgIHBpY2tSYXRlLFxuICAgIGxhbmUsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRDaGFtcGlvblN0YXRzO1xuIiwiY29uc3QgZ2V0QWxsQ2hhbXBpb25EZXRhaWxzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB2ZXJzaW9uc1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2FwaS92ZXJzaW9ucy5qc29uJyk7XG4gIGNvbnN0IHZlcnNpb25zID0gYXdhaXQgdmVyc2lvbnNSZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IGxhdGVzdFZlcnNpb24gPSB2ZXJzaW9uc1swXTtcbiAgY29uc3QgY2hhbXBpb25zUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLyR7bGF0ZXN0VmVyc2lvbn0vZGF0YS9lbl9VUy9jaGFtcGlvbi5qc29uYCk7XG4gIGNvbnN0IGFsbENoYW1waW9ucyA9IGF3YWl0IGNoYW1waW9uc1Jlc3BvbnNlLmpzb24oKTtcblxuICByZXR1cm4gYWxsQ2hhbXBpb25zLmRhdGE7XG59O1xuXG5jb25zdCBnZXRBbGxDaGFtcGlvblN0YXRzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBkZXZVcmwgPSAnaHR0cDovLzEyNy4wLjAuMTo1NTAwL2Zyb250ZW5kL2Rpc3QvY2hhbXBpb25zLmh0bWwnO1xuICBjb25zdCByZXNwb25zZSA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmID09PSBkZXZVcmxcbiAgICA/IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvY2hhbXBpb25zJywgeyBtb2RlOiAnY29ycycgfSlcbiAgICA6IGF3YWl0IGZldGNoKCdjaGFtcGlvbnMnLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgY29uc3QgYWxsQ2hhbXBpb25TdGF0cyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICByZXR1cm4gYWxsQ2hhbXBpb25TdGF0cztcbn07XG5cbmV4cG9ydCB7XG4gIGdldEFsbENoYW1waW9uRGV0YWlscyxcbiAgZ2V0QWxsQ2hhbXBpb25TdGF0cyxcbn07XG4iLCIvKiBSZXRyaXZlcyB0aGUgbGF0ZXN0IHN0YXRpYyBkYXRhIGF2YWxpYWJsZSBmb3IgY2hhbXBpb25zICovXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHZlcnNpb25SZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9hcGkvdmVyc2lvbnMuanNvbicsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICBjb25zdCB2ZXJzaW9ucyA9IGF3YWl0IHZlcnNpb25SZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IGxhdGVzdFZlcnNpb24gPSB2ZXJzaW9uc1swXTtcbiAgcmV0dXJuIGxhdGVzdFZlcnNpb247XG59O1xuIiwiLyogRmV0Y2hlcyBhbGwgdGhlIGl0ZW1zIGEgY2hhbXBpb24gY2FuIGJ1eSBpbiBhIG1hdGNoICovXG5jb25zdCBmZXRjaEFsbEl0ZW1zID0gYXN5bmMgKGxhdGVzdFZlcnNpb24pID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLyR7bGF0ZXN0VmVyc2lvbn0vZGF0YS9lbl9VUy9pdGVtLmpzb25gKTtcbiAgY29uc3QgYWxsSXRlbXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIGFsbEl0ZW1zLmRhdGE7XG59O1xuXG5jbGFzcyBJdGVtSW5mbyB7XG4gIHN0YXRpYyBhc3luYyBnZXRBbGxJdGVtcyhsYXRlc3RWZXJzaW9uKSB7XG4gICAgY29uc3QgYWxsSXRlbXMgPSBmZXRjaEFsbEl0ZW1zKGxhdGVzdFZlcnNpb24pO1xuICAgIHJldHVybiBhbGxJdGVtcztcbiAgfVxuXG4gIGdldEl0ZW1EZXRhaWxzKGFsbEl0ZW1zKSB7XG4gICAgY29uc3QgaXRlbURldGFpbHMgPSBhbGxJdGVtc1t0aGlzLml0ZW1JZF07XG4gICAgcmV0dXJuIGl0ZW1EZXRhaWxzO1xuICB9XG5cbiAgY29uc3RydWN0b3IoaXRlbUlkLCBhbGxJdGVtcywgbGF0ZXN0VmVyc2lvbikge1xuICAgIHRoaXMuaXRlbUlkID0gaXRlbUlkO1xuICAgIHRoaXMuaXRlbURldGFpbHMgPSB0aGlzLmdldEl0ZW1EZXRhaWxzKGFsbEl0ZW1zKTtcbiAgICB0aGlzLmxhdGVzdFZlcnNpb24gPSBsYXRlc3RWZXJzaW9uO1xuICB9XG5cbiAgZ2V0SXRlbUltYWdlKCkge1xuICAgIGNvbnN0IGl0ZW1JbWFnZUlkID0gdGhpcy5pdGVtRGV0YWlscy5pbWFnZS5mdWxsO1xuICAgIGNvbnN0IGltYWdlVXJsID0gYGh0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi8ke3RoaXMubGF0ZXN0VmVyc2lvbn0vaW1nL2l0ZW0vJHtpdGVtSW1hZ2VJZH1gO1xuICAgIHJldHVybiBpbWFnZVVybDtcbiAgfVxuXG4gIC8qIGdldHMgaW5mbyBvbiB0aGUgaXRlbXMgdXNlZCB0byBjcmVhdGUgdGhlIGluc3RhbmNlIGl0ZW0gKi9cbiAgYXN5bmMgZ2V0Q29tcG9uZW50SXRlbXMoYWxsSXRlbXMpIHtcbiAgICBjb25zdCBjb21wb25lbnRJdGVtSWRzID0gdGhpcy5pdGVtRGV0YWlscy5mcm9tO1xuICAgIGlmIChjb21wb25lbnRJdGVtSWRzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3QgY29tcG9uZW50SXRlbURldGFpbHMgPSBjb21wb25lbnRJdGVtSWRzLm1hcCgoaXRlbUlkKSA9PiAoe1xuICAgICAgbmFtZTogYWxsSXRlbXNbaXRlbUlkXS5uYW1lLFxuICAgICAgaW1hZ2VVcmw6IGBodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vJHt0aGlzLmxhdGVzdFZlcnNpb259L2ltZy9pdGVtLyR7aXRlbUlkfS5wbmdgLFxuICAgICAgY29zdDogYWxsSXRlbXNbaXRlbUlkXS5nb2xkLnRvdGFsLFxuICAgIH0pKTtcbiAgICByZXR1cm4gY29tcG9uZW50SXRlbURldGFpbHM7XG4gIH1cblxuICBnZXRJdGVtSW5mbyhhbGxJdGVtcykge1xuICAgIGlmICh0aGlzLml0ZW1EZXRhaWxzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgeyBuYW1lIH0gPSB0aGlzLml0ZW1EZXRhaWxzO1xuICAgIGNvbnN0IHsgZGVzY3JpcHRpb24gfSA9IHRoaXMuaXRlbURldGFpbHM7XG4gICAgY29uc3QgY29zdCA9IHRoaXMuaXRlbURldGFpbHMuZ29sZC50b3RhbDtcbiAgICBjb25zdCBpbWFnZVVybCA9IHRoaXMuZ2V0SXRlbUltYWdlKGFsbEl0ZW1zKTtcbiAgICBjb25zdCBjb21wb25lbnRJdGVtcyA9IHRoaXMuZ2V0Q29tcG9uZW50SXRlbXMoYWxsSXRlbXMpO1xuICAgIGNvbnN0IHsgdGFncyB9ID0gdGhpcy5pdGVtRGV0YWlscztcblxuICAgIHJldHVybiB7XG4gICAgICBuYW1lLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBjb3N0LFxuICAgICAgaW1hZ2VVcmwsXG4gICAgICBjb21wb25lbnRJdGVtcyxcbiAgICAgIHRhZ3MsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJdGVtSW5mbztcbiIsImltcG9ydCBFbGVtZW50Q3JlYXRpb24gZnJvbSAnLi9lbGVtZW50Q3JlYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcm9wZG93blNlY3Rpb24ge1xuICBzdGF0aWMgY3JlYXRlU2VjdGlvbigpIHtcbiAgICBjb25zdCBjaGFtcGlvbnNQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoYW1waW9ucy1wYWdlJyk7XG4gICAgY29uc3QgZmlsdGVyU29ydFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmaWx0ZXJTb3J0U2VjdGlvbi5jbGFzc05hbWUgPSAnZmlsdGVyLXNvcnQtc2VjdGlvbic7XG4gICAgY2hhbXBpb25zUGFnZS5pbnNlcnRCZWZvcmUoXG4gICAgICBmaWx0ZXJTb3J0U2VjdGlvbiwgY2hhbXBpb25zUGFnZS5sYXN0Q2hpbGQsXG4gICAgKTtcbiAgICByZXR1cm4gZmlsdGVyU29ydFNlY3Rpb247XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihkcm9wZG93bk5hbWUsIG9wdGlvbnNBcnJheSkge1xuICAgIHRoaXMuZHJvcGRvd25OYW1lID0gZHJvcGRvd25OYW1lO1xuICAgIHRoaXMub3B0aW9uc0FycmF5ID0gb3B0aW9uc0FycmF5O1xuICB9XG5cbiAgLyogdHlwZSB0YWtlcyBhIHN0cmluZyB1c2VkIGFzIGEgY2xhc3NOYW1lIHRvIHNob3cgaWYgdGhlIGRyb3Bkb3duIGlzIG11bHRpIG9yIHNpbmdsZSBzZWxlY3QgKi9cbiAgcmVuZGVyRHJvcGRvd24oZmlsdGVyU29ydFNlY3Rpb24sIHR5cGUpIHtcbiAgICBjb25zdCBkcm9wZG93biA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsIGAke3RoaXMuZHJvcGRvd25OYW1lfS1kcm9wZG93biBkcm9wZG93bmAsIGZpbHRlclNvcnRTZWN0aW9uKTtcbiAgICBjb25zdCBkcm9wZG93bkJ0biA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2J1dHRvbicsIGAke3RoaXMuZHJvcGRvd25OYW1lfS1kcm9wZG93bi1idG4gZHJvcGRvd24tYnRuYCwgZHJvcGRvd24pO1xuICAgIGRyb3Bkb3duQnRuLnRleHRDb250ZW50ID0gYCR7dGhpcy5kcm9wZG93bk5hbWVbMF0udG9VcHBlckNhc2UoKX0ke3RoaXMuZHJvcGRvd25OYW1lLnNsaWNlKDEpfWA7XG4gICAgY29uc3QgZHJvcGRvd25PcHRpb25zID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgYCR7dGhpcy5kcm9wZG93bk5hbWV9LWRyb3Bkb3duLW9wdGlvbnMgZHJvcGRvd24tb3B0aW9uc2AsIGRyb3Bkb3duKTtcblxuICAgIHRoaXMub3B0aW9uc0FycmF5LmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgY29uc3QgZHJvcGRvd25PcHRpb24gPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgYCR7b3B0aW9ufSAke3RoaXMuZHJvcGRvd25OYW1lfSAke3R5cGV9IGRyb3Bkb3duLW9wdGlvbmAsIGRyb3Bkb3duT3B0aW9ucyk7XG4gICAgICBkcm9wZG93bk9wdGlvbi50ZXh0Q29udGVudCA9IGAke29wdGlvblswXS50b1VwcGVyQ2FzZSgpfSR7b3B0aW9uLnNsaWNlKDEpfWA7XG4gICAgfSk7XG4gIH1cbn1cbiIsImNvbnN0IEVsZW1lbnRDcmVhdGlvbiA9ICgoKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcyA9ICh0YWcsIGNsYXNzTmFtZSwgcGFyZW50RWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUNoaWxkRWxlbWVudFdpdGhJZCA9ICh0YWcsIGlkLCBwYXJlbnRFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBlbGVtZW50LmlkID0gaWQ7XG4gICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzc0FuZElkID0gKHRhZywgY2xhc3NOYW1lLCBpZCwgcGFyZW50RWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgZWxlbWVudC5pZCA9IGlkO1xuICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVDaGlsZEltYWdlRWxlbWVudFdpdGhDbGFzcyA9IChjbGFzc05hbWUsIHBhcmVudEVsZW1lbnQsIHNyYywgYWx0KSA9PiB7XG4gICAgY29uc3QgaW1hZ2VFbGVtZW50ID0gY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdpbWcnLCBjbGFzc05hbWUsIHBhcmVudEVsZW1lbnQpO1xuICAgIGltYWdlRWxlbWVudC5zcmMgPSBzcmM7XG4gICAgaW1hZ2VFbGVtZW50LmFsdCA9IGFsdDtcblxuICAgIHJldHVybiBpbWFnZUVsZW1lbnQ7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MsXG4gICAgY3JlYXRlQ2hpbGRFbGVtZW50V2l0aElkLFxuICAgIGNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzc0FuZElkLFxuICAgIGNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgRWxlbWVudENyZWF0aW9uO1xuIiwiaW1wb3J0IHsgcmVuZGVySGVhZGVyRGV0YWlscywgaW1hZ2VzIH0gZnJvbSAnLi9yZW5kZXJIZWxwZXJzJztcbmltcG9ydCBFbGVtZW50Q3JlYXRpb24gZnJvbSAnLi4vaGVscGVycy9lbGVtZW50Q3JlYXRpb24nO1xuXG5jb25zdCBjaGFtcGlvbkRldGFpbHNNb2RhbCA9IGFzeW5jIChjaGFtcGlvbkRhdGEpID0+IHtcbiAgcmVuZGVySGVhZGVyRGV0YWlscyhjaGFtcGlvbkRhdGEsICdtYWluJyk7XG5cbiAgY29uc3QgY2hhbXBpb25Sb2xlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbi1yb2xlcycpO1xuICBjb25zdCB7IHJvbGVzIH0gPSBjaGFtcGlvbkRhdGE7XG4gIHJvbGVzLmZvckVhY2goKHJvbGUpID0+IHtcbiAgICBjb25zdCBjaGFtcGlvblJvbGUgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnY2hhbXBpb24tcm9sZScsIGNoYW1waW9uUm9sZXMpO1xuICAgIGNvbnN0IGNoYW1waW9uUm9sZU5hbWUgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2NoYW1waW9uLXJvbGUtbmFtZScsIGNoYW1waW9uUm9sZSk7XG4gICAgY2hhbXBpb25Sb2xlTmFtZS50ZXh0Q29udGVudCA9IHJvbGU7XG4gICAgRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzKCdjaGFtcGlvbi1yb2xlLWltYWdlJywgY2hhbXBpb25Sb2xlLCBgJHtpbWFnZXNbYCR7cm9sZX0ucG5nYF19YCwgcm9sZSk7XG4gIH0pO1xuICAvKiBUaGUgdHlwZSBvZiByZXNvdXJjZSB0aGF0IGEgY2hhbXBpb24gdXNlcyBlLmcuIG1hbmEsIGVuZXJneSBldGMgKi9cbiAgY29uc3QgY2hhbXBpb25SZXNvdXJjZSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdjaGFtcGlvbi1yZXNvdXJjZScsIGNoYW1waW9uUm9sZXMpO1xuICBjb25zdCB7IHJlc291cmNlIH0gPSBjaGFtcGlvbkRhdGE7XG4gIGNvbnN0IGNoYW1waW9uUmVzb3VyY2VOYW1lID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdjaGFtcGlvbi1yZXNvdXJjZS1uYW1lJywgY2hhbXBpb25SZXNvdXJjZSk7XG4gIGNoYW1waW9uUmVzb3VyY2VOYW1lLnRleHRDb250ZW50ID0gcmVzb3VyY2U7XG4gIEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEltYWdlRWxlbWVudFdpdGhDbGFzcygnY2hhbXBpb24tcmVzb3VyY2UtaW1hZ2UnLCBjaGFtcGlvblJlc291cmNlLCBgJHtpbWFnZXNbYCR7cmVzb3VyY2V9LnBuZ2BdfWAsIHJlc291cmNlKTtcblxuICAvKiBDcmVhdGVzIHRoZSBtYWluIGNvbnRlbnQgb2YgdGhlIG1haW4gbW9kYWwgKi9cbiAgY29uc3QgbG9yZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb3JlLWNvbnRhaW5lcicpO1xuICBjb25zdCBjaGFtcGlvbkxvcmUgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2NoYW1waW9uLWxvcmUnLCBsb3JlQ29udGFpbmVyKTtcbiAgY2hhbXBpb25Mb3JlLmlubmVySFRNTCA9IGNoYW1waW9uRGF0YS5sb3JlO1xuXG4gIGNvbnN0IGFiaWxpdGllc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYmlsaXRpZXMtY29udGFpbmVyJyk7XG4gIGNvbnN0IGFiaWxpdHlEZXRhaWxzID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2FiaWxpdHktZGV0YWlscycsIGFiaWxpdGllc0NvbnRhaW5lcik7XG4gIGNvbnN0IGFiaWxpdHlJbWdzID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2FiaWxpdHktaW1ncycsIGFiaWxpdHlEZXRhaWxzKTtcbiAgY29uc3QgcGFzc2l2ZUltZyA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEltYWdlRWxlbWVudFdpdGhDbGFzcyhcbiAgICAnc3BlbGwtaW1nIGNsaWNrZWQnLCBhYmlsaXR5SW1ncywgY2hhbXBpb25EYXRhLnBhc3NpdmUucGFzc2l2ZUltZ1VybCwgY2hhbXBpb25EYXRhLnBhc3NpdmUucGFzc2l2ZU5hbWUsXG4gICk7XG4gIHBhc3NpdmVJbWcuaWQgPSAncGFzc2l2ZS1pbWcnO1xuXG4gIGNvbnN0IGltZ0xhYmVsID0gWydRJywgJ1cnLCAnRScsICdSJ107XG4gIGxldCBpbmRleCA9IDA7XG5cbiAgY2hhbXBpb25EYXRhLnNwZWxscy5mb3JFYWNoKChzcGVsbCkgPT4ge1xuICAgIGNvbnN0IHNwZWxsSW1nID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzKFxuICAgICAgJ3NwZWxsLWltZycsIGFiaWxpdHlJbWdzLCBzcGVsbC5pbWdVcmwsIHNwZWxsLm5hbWUsXG4gICAgKTtcbiAgICAvLyBHcmFicyBsZXR0ZXIgUSwgVywgRSBvciBSIHdoaWNoIHVuaXF1ZWx5IGlkZW50aWZpZXMgYSBjaGFtcGlvbnMgYWJpbGl0aWVzXG4gICAgc3BlbGxJbWcuaWQgPSBgJHtpbWdMYWJlbFtpbmRleF19LWltZ2A7XG4gICAgaW5kZXggKz0gMTtcbiAgfSk7XG5cbiAgLyogbG9vcHMgdGhyb3VnaCBjaGFtcGlvbidzIHBhc3NpdmUgYW5kIDQgYWJpbGl0aWVzICovXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSArPSAxKSB7XG4gICAgY29uc3QgYWJpbGl0eUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBhYmlsaXR5TmFtZSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnYWJpbGl0eS1uYW1lJywgYWJpbGl0eUluZm8pO1xuICAgIGNvbnN0IGFiaWxpdHlEZXNjcmlwdGlvbiA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnYWJpbGl0eS1kZXNjcmlwdGlvbicsIGFiaWxpdHlJbmZvKTtcbiAgICBjb25zdCBhYmlsaXR5TGFiZWwgPSBbJ1Bhc3NpdmUnLCAnUScsICdXJywgJ0UnLCAnUiddO1xuXG4gICAgaWYgKGkgPT09IDApIHtcbiAgICAgIGFiaWxpdHlJbmZvLmNsYXNzTmFtZSA9ICdhYmlsaXR5LWluZm8gYWN0aXZlJztcbiAgICAgIGFiaWxpdHlJbmZvLmlkID0gJ3Bhc3NpdmUtYWJpbGl0eSc7XG4gICAgICBhYmlsaXR5TmFtZS50ZXh0Q29udGVudCA9IGAke2NoYW1waW9uRGF0YS5wYXNzaXZlLnBhc3NpdmVOYW1lfSAoJHthYmlsaXR5TGFiZWxbaV19KWA7XG4gICAgICBhYmlsaXR5RGVzY3JpcHRpb24uaW5uZXJIVE1MID0gY2hhbXBpb25EYXRhLnBhc3NpdmUucGFzc2l2ZURlc2NyaXB0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb29sZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIGNvb2xkb3duLmNsYXNzTmFtZSA9ICdhYmlsaXR5LWNvb2xkb3duJztcbiAgICAgIGNvb2xkb3duLnRleHRDb250ZW50ID0gYENvb2xkb3duOiAke2NoYW1waW9uRGF0YS5zcGVsbHNbaSAtIDFdLmNvb2xkb3dufSBzZWNvbmRzYDtcbiAgICAgIGFiaWxpdHlJbmZvLmFwcGVuZENoaWxkKGNvb2xkb3duKTtcblxuICAgICAgYWJpbGl0eUluZm8uY2xhc3NOYW1lID0gJ2FiaWxpdHktaW5mbyc7XG4gICAgICBhYmlsaXR5SW5mby5pZCA9IGAke2FiaWxpdHlMYWJlbFtpXX0tYWJpbGl0eWA7XG4gICAgICBhYmlsaXR5TmFtZS50ZXh0Q29udGVudCA9IGAke2NoYW1waW9uRGF0YS5zcGVsbHNbaSAtIDFdLm5hbWV9ICgke2FiaWxpdHlMYWJlbFtpXX0pYDtcbiAgICAgIGFiaWxpdHlEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBjaGFtcGlvbkRhdGEuc3BlbGxzW2kgLSAxXS5kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBhYmlsaXR5RGV0YWlscy5hcHBlbmRDaGlsZChhYmlsaXR5SW5mbyk7XG4gIH1cblxuICBjb25zdCBjaGFtcGlvblRpcHNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLXRpcHMtc2VjdGlvbicpO1xuICBjb25zdCBjaGFtcGlvblRpcHMgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnY2hhbXBpb24tdGlwcycsIGNoYW1waW9uVGlwc1NlY3Rpb24pO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMiAmJiBpIDwgY2hhbXBpb25EYXRhLnRpcHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBjaGFtcGlvblRpcCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnY2hhbXBpb24tdGlwJywgY2hhbXBpb25UaXBzKTtcbiAgICBjaGFtcGlvblRpcC50ZXh0Q29udGVudCA9IGAke2NoYW1waW9uRGF0YS50aXBzW2ldfWA7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNoYW1waW9uRGV0YWlsc01vZGFsO1xuIiwiaW1wb3J0IEVsZW1lbnRDcmVhdGlvbiBmcm9tICcuLi9oZWxwZXJzL2VsZW1lbnRDcmVhdGlvbic7XG5cbmNvbnN0IGNoYW1waW9uU2tpbnNNb2RhbCA9IGFzeW5jIChjaGFtcGlvbkRldGFpbHMpID0+IHtcbiAgY29uc3QgeyBza2lucyB9ID0gY2hhbXBpb25EZXRhaWxzO1xuICBjb25zdCBza2luc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNza2lucy1jb250YWluZXInKTtcbiAgY29uc3Qgc2tpbk5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2tpbi1uYW1lJyk7XG4gIGNvbnN0IHNraW5JbWFnZXNDb250YWluZXIgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnc2tpbi1pbWFnZXMtY29udGFpbmVyJywgc2tpbnNDb250YWluZXIpO1xuXG4gIHNraW5zLmZvckVhY2goKHNraW4pID0+IHtcbiAgICBpZiAoc2tpbi5udW0gPT09IDApIHtcbiAgICAgIGNvbnN0IHNob3duSW1hZ2VDb250YWluZXIgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzQW5kSWQoXG4gICAgICAgICdkaXYnLCAnc2tpbi1pbWFnZS1jb250YWluZXIgc2hvd24nLCBgRGVmYXVsdCAke2NoYW1waW9uRGV0YWlscy5uYW1lfWAsIHNraW5JbWFnZXNDb250YWluZXIsXG4gICAgICApO1xuICAgICAgc2tpbk5hbWUudGV4dENvbnRlbnQgPSBgRGVmYXVsdCAke2NoYW1waW9uRGV0YWlscy5uYW1lfWA7XG4gICAgICBjb25zdCBzaG93bkltYWdlVXJsID0gYGh0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi9pbWcvY2hhbXBpb24vc3BsYXNoLyR7Y2hhbXBpb25EZXRhaWxzLmlkfV8ke3NraW4ubnVtfS5qcGdgO1xuICAgICAgRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzKCdza2luLWltYWdlJywgc2hvd25JbWFnZUNvbnRhaW5lciwgc2hvd25JbWFnZVVybCwgJ2RlZmF1bHQgc2tpbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbWFnZUNvbnRhaW5lciA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ3NraW4taW1hZ2UtY29udGFpbmVyJywgc2tpbi5uYW1lLCBza2luSW1hZ2VzQ29udGFpbmVyKTtcbiAgICAgIGNvbnN0IGltYWdlVXJsID0gYGh0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi9pbWcvY2hhbXBpb24vc3BsYXNoLyR7Y2hhbXBpb25EZXRhaWxzLmlkfV8ke3NraW4ubnVtfS5qcGdgO1xuICAgICAgRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzKCdza2luLWltYWdlJywgaW1hZ2VDb250YWluZXIsIGltYWdlVXJsLCBza2luLm5hbWUpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjaGFtcGlvblNraW5zTW9kYWw7XG4iLCJpbXBvcnQgSXRlbUluZm8gZnJvbSAnLi4vY2hhbXBpb25EYXRhL2l0ZW1JbmZvJztcbmltcG9ydCB7XG4gIHJlbmRlckhlYWRlckRldGFpbHMsXG4gIHJlbmRlclN0YXRPdmVydmlldyxcbiAgcmVuZGVyRGFtYWdlU3RhdHMsXG4gIHJlbmRlckNoYW1waW9uTGFuZSxcbiAgcmVuZGVyTWF0Y2h1cHNJbmZvLFxufSBmcm9tICcuL3JlbmRlckhlbHBlcnMnO1xuaW1wb3J0IEVsZW1lbnRDcmVhdGlvbiBmcm9tICcuLi9oZWxwZXJzL2VsZW1lbnRDcmVhdGlvbic7XG5cbmNvbnN0IGNoYW1waW9uU3RhdHNNb2RhbCA9IGFzeW5jIChjaGFtcGlvbkRhdGEsIGNoYW1waW9uU3RhdHMsIGxhdGVzdFZlcnNpb24pID0+IHtcbiAgcmVuZGVySGVhZGVyRGV0YWlscyhjaGFtcGlvbkRhdGEsICdzdGF0cycpO1xuXG4gIGNvbnN0IHN0YXRzT3ZlcnZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tc3RhdHMtb3ZlcnZpZXcnKTtcblxuICByZW5kZXJTdGF0T3ZlcnZpZXcoc3RhdHNPdmVydmlldywgJ1dpbiBSYXRlJywgY2hhbXBpb25TdGF0cy53aW5SYXRlKTtcbiAgcmVuZGVyU3RhdE92ZXJ2aWV3KHN0YXRzT3ZlcnZpZXcsICdQaWNrIFJhdGUnLCBjaGFtcGlvblN0YXRzLnBpY2tSYXRlKTtcbiAgLyogTWFrZSBldmVyeSBsZXR0ZXIgZXhjZXB0IHRoZSBmaXJzdCBsb3dlciBjYXNlICovXG4gIGNvbnN0IGxhbmUgPSBgJHtjaGFtcGlvblN0YXRzLmxhbmVbMF0gKyBjaGFtcGlvblN0YXRzLmxhbmUuc3Vic3RyaW5nKDEpLnRvTG93ZXJDYXNlKCl9YDtcbiAgcmVuZGVyQ2hhbXBpb25MYW5lKHN0YXRzT3ZlcnZpZXcsIGxhbmUpO1xuXG4gIC8qIFNldHMgdGhlIHZhbHVlcyBhbmQgcGVyY2VudGFnZXMgZm9yIHRoZSBhdmVyYWdlIGRhbWFnZSBzZWN0aW9uIG9mIHRoZSBzdGF0cyBtb2RhbCAqL1xuXG4gIGNvbnN0IHRydWVEYW1hZ2VDaXJjbGVTdHJva2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHJ1ZS1kYW1hZ2Utc3Ryb2tlJyk7XG4gIGNvbnN0IHBoeXNpY2FsRGFtYWdlQ2lyY2xlU3Ryb2tlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BoeXNpY2FsLWRhbWFnZS1zdHJva2UnKTtcbiAgY29uc3QgbWFnaWNEYW1hZ2VDaXJjbGVTdHJva2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFnaWMtZGFtYWdlLXN0cm9rZScpO1xuXG4gIGNvbnN0IHRydWVEYW1hZ2VQZXJjZW50ID0gTWF0aC5yb3VuZChjaGFtcGlvblN0YXRzLmRhbWFnZVBlck1hdGNoLnRydWVEYW1hZ2UucGVyY2VudGFnZSk7XG4gIGNvbnN0IHBoeXNpY2FsRGFtYWdlUGVyY2VudCA9IE1hdGgucm91bmQoY2hhbXBpb25TdGF0cy5kYW1hZ2VQZXJNYXRjaC5waHlzaWNhbERhbWFnZS5wZXJjZW50YWdlKTtcbiAgY29uc3QgbWFnaWNEYW1hZ2VQZXJjZW50ID0gTWF0aC5yb3VuZChjaGFtcGlvblN0YXRzLmRhbWFnZVBlck1hdGNoLm1hZ2ljRGFtYWdlLnBlcmNlbnRhZ2UpO1xuXG4gIHRydWVEYW1hZ2VDaXJjbGVTdHJva2Uuc3R5bGUuc3Ryb2tlRGFzaGFycmF5ID0gYCR7dHJ1ZURhbWFnZVBlcmNlbnR9IDEwMGA7XG4gIHBoeXNpY2FsRGFtYWdlQ2lyY2xlU3Ryb2tlLnN0eWxlLnN0cm9rZURhc2hhcnJheSA9IGAke3BoeXNpY2FsRGFtYWdlUGVyY2VudCArIHRydWVEYW1hZ2VQZXJjZW50fSAxMDBgO1xuICBtYWdpY0RhbWFnZUNpcmNsZVN0cm9rZS5zdHlsZS5zdHJva2VEYXNoYXJyYXkgPSAnMTAwLCAxMDAnO1xuICBjb25zdCB0b3RhbERhbWFnZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG90YWwtZGFtYWdlLXRleHQnKTtcbiAgdG90YWxEYW1hZ2VUZXh0LnRleHRDb250ZW50ID0gTWF0aC5yb3VuZChjaGFtcGlvblN0YXRzLmRhbWFnZVBlck1hdGNoLnRvdGFsRGFtYWdlLnZhbHVlKTtcblxuICBjb25zdCB0cnVlRGFtYWdlVmFsdWUgPSBNYXRoLnJvdW5kKGNoYW1waW9uU3RhdHMuZGFtYWdlUGVyTWF0Y2gudHJ1ZURhbWFnZS52YWx1ZSk7XG4gIGNvbnN0IHBoeXNpY2FsRGFtYWdlVmFsdWUgPSBNYXRoLnJvdW5kKGNoYW1waW9uU3RhdHMuZGFtYWdlUGVyTWF0Y2gucGh5c2ljYWxEYW1hZ2UudmFsdWUpO1xuICBjb25zdCBtYWdpY0RhbWFnZVZhbHVlID0gTWF0aC5yb3VuZChjaGFtcGlvblN0YXRzLmRhbWFnZVBlck1hdGNoLm1hZ2ljRGFtYWdlLnZhbHVlKTtcblxuICByZW5kZXJEYW1hZ2VTdGF0cygncGh5c2ljYWwnLCBwaHlzaWNhbERhbWFnZVZhbHVlLCBwaHlzaWNhbERhbWFnZVBlcmNlbnQpO1xuICByZW5kZXJEYW1hZ2VTdGF0cygnbWFnaWMnLCBtYWdpY0RhbWFnZVZhbHVlLCBtYWdpY0RhbWFnZVBlcmNlbnQpO1xuICByZW5kZXJEYW1hZ2VTdGF0cygndHJ1ZScsIHRydWVEYW1hZ2VWYWx1ZSwgdHJ1ZURhbWFnZVBlcmNlbnQpO1xuXG4gIC8qIFJlbmRlcnMgdGhlIGl0ZW0gYnVpbGRzIHNlY3Rpb24gb2YgdGhlIHN0YXRzIG1vZGFsICovXG4gIGNvbnN0IHsgaXRlbVNldHMgfSA9IGNoYW1waW9uU3RhdHM7XG4gIGNvbnN0IGFsbEl0ZW1zID0gYXdhaXQgSXRlbUluZm8uZ2V0QWxsSXRlbXMobGF0ZXN0VmVyc2lvbik7XG4gIGNvbnN0IGNoYW1waW9uSXRlbUJ1aWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbi1pdGVtLWJ1aWxkcycpO1xuICBjb25zdCBpdGVtU2V0c0NvbnRhaW5lciA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdpdGVtLXNldHMtY29udGFpbmVyJywgY2hhbXBpb25JdGVtQnVpbGRzKTtcblxuICBpdGVtU2V0cy5mb3JFYWNoKChpdGVtU2V0KSA9PiB7XG4gICAgY29uc3QgaXRlbVNldENvbnRhaW5lciA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdpdGVtLXNldC1jb250YWluZXInLCBpdGVtU2V0c0NvbnRhaW5lcik7XG5cbiAgICBpdGVtU2V0LmZvckVhY2goKGl0ZW1JZCkgPT4ge1xuICAgICAgY29uc3QgaXRlbSA9IG5ldyBJdGVtSW5mbyhpdGVtSWQsIGFsbEl0ZW1zLCBsYXRlc3RWZXJzaW9uKTtcbiAgICAgIGNvbnN0IGl0ZW1JbmZvID0gaXRlbS5nZXRJdGVtSW5mbyhhbGxJdGVtcyk7XG4gICAgICBpZiAoaXRlbUluZm8gJiYgIWl0ZW1JbmZvLnRhZ3MuaW5jbHVkZXMoJ1RyaW5rZXQnKSAmJiAhaXRlbUluZm8udGFncy5pbmNsdWRlcygnQ29uc3VtYWJsZScpKSB7XG4gICAgICAgIGNvbnN0IG1haW5Db21wb25lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWFpbkNvbXBvbmVudENvbnRhaW5lci5jbGFzc05hbWUgPSAnbWFpbi1jb21wb25lbnQtY29udGFpbmVyJztcbiAgICAgICAgaXRlbVNldENvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluQ29tcG9uZW50Q29udGFpbmVyKTtcblxuICAgICAgICBjb25zdCBtYWluSXRlbSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdtYWluLWl0ZW0nLCBtYWluQ29tcG9uZW50Q29udGFpbmVyKTtcblxuICAgICAgICBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MoJ2l0ZW0taW1nJywgbWFpbkl0ZW0sIGl0ZW1JbmZvLmltYWdlVXJsLCBgJHtpdGVtSWR9LnBuZ2ApO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1EZXRhaWxzQ29udGFpbmVyID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2l0ZW0tZGV0YWlscy1jb250YWluZXInLCBtYWluSXRlbSk7XG5cbiAgICAgICAgY29uc3QgbmFtZUVsZW1lbnQgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2l0ZW0tbmFtZScsIGl0ZW1EZXRhaWxzQ29udGFpbmVyKTtcbiAgICAgICAgbmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSBpdGVtSW5mby5uYW1lO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkVsZW1lbnQgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2l0ZW0tZGVzY3JpcHRpb24nLCBpdGVtRGV0YWlsc0NvbnRhaW5lcik7XG4gICAgICAgIGRlc2NyaXB0aW9uRWxlbWVudC5pbm5lckhUTUwgPSBpdGVtSW5mby5kZXNjcmlwdGlvbjtcbiAgICAgICAgY29uc3QgaXRlbUNvc3QgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnaXRlbS1jb3N0JywgaXRlbURldGFpbHNDb250YWluZXIpO1xuICAgICAgICBjb25zdCBjb3N0TGFiZWwgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2Nvc3QtbGFiZWwnLCBpdGVtQ29zdCk7XG4gICAgICAgIGNvc3RMYWJlbC50ZXh0Q29udGVudCA9ICdHb2xkOiAnO1xuICAgICAgICBjb25zdCBjb3N0QW1vdW50ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdjb3N0LWFtb3VudCcsIGl0ZW1Db3N0KTtcbiAgICAgICAgY29zdEFtb3VudC50ZXh0Q29udGVudCA9IGl0ZW1JbmZvLmNvc3Q7XG5cbiAgICAgICAgLyogVGhlIGNvbXBvbmVudCBpdGVtcyBhcmUgdGhlIHNtYWxsZXIgaXRlbXMgdGhhdCBhcHBlYXIgYmVsb3cgdGhlIG1haW4gaXRlbSAqL1xuICAgICAgICBjb25zdCB7IGNvbXBvbmVudEl0ZW1zIH0gPSBpdGVtSW5mbztcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKGNvbXBvbmVudEl0ZW1zKVxuICAgICAgICAgIC50aGVuKChpdGVtcykgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50SXRlbXNDb250YWluZXIgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnY29tcG9uZW50LWl0ZW1zLWNvbnRhaW5lcicsIG1haW5Db21wb25lbnRDb250YWluZXIpO1xuICAgICAgICAgICAgaXRlbXMuZm9yRWFjaCgoY29tcG9uZW50SXRlbSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRJdGVtRWxlbWVudCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdjb21wb25lbnQtaXRlbScsIGNvbXBvbmVudEl0ZW1zQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzKFxuICAgICAgICAgICAgICAgICdjb21wb25lbnQtaXRlbS1pbWcnLCBjb21wb25lbnRJdGVtRWxlbWVudCwgY29tcG9uZW50SXRlbS5pbWFnZVVybCwgYCR7Y29tcG9uZW50SXRlbS5uYW1lfWAsXG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50SXRlbURldGFpbHNDb250YWluZXIgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnY29tcG9uZW50LWl0ZW0tZGV0YWlscy1jb250YWluZXInLCBjb21wb25lbnRJdGVtRWxlbWVudCk7XG5cbiAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50SXRlbU5hbWUgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2NvbXBvbmVudC1pdGVtLW5hbWUnLCBjb21wb25lbnRJdGVtRGV0YWlsc0NvbnRhaW5lcik7XG4gICAgICAgICAgICAgIGNvbXBvbmVudEl0ZW1OYW1lLnRleHRDb250ZW50ID0gY29tcG9uZW50SXRlbS5uYW1lO1xuICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRJdGVtQ29zdCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdjb21wb25lbnQtaXRlbS1jb3N0JywgY29tcG9uZW50SXRlbURldGFpbHNDb250YWluZXIpO1xuICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRJdGVtQ29zdExhYmVsID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdjb21wb25lbnQtaXRlbS1jb3N0LWxhYmVsJywgY29tcG9uZW50SXRlbUNvc3QpO1xuICAgICAgICAgICAgICBjb21wb25lbnRJdGVtQ29zdExhYmVsLnRleHRDb250ZW50ID0gJ0dvbGQ6ICc7XG4gICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudEl0ZW1BbW91bnQgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2NvbXBvbmVudC1pdGVtLWFtb3VudCcsIGNvbXBvbmVudEl0ZW1Db3N0KTtcbiAgICAgICAgICAgICAgY29tcG9uZW50SXRlbUFtb3VudC50ZXh0Q29udGVudCA9IGNvbXBvbmVudEl0ZW0uY29zdDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgLyogUmVuZGVycyB0aGUgbWF0Y2h1cHMgc2VjdGlvbiBvZiB0aGUgY2hhbXBpb24gbW9kYWwgc3RhdHMgcGFnZSAqL1xuICBjb25zdCBiZXN0TWF0Y2h1cHNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJlc3QtbWF0Y2h1cHMtc2VjdGlvbicpO1xuICBjb25zdCBiZXN0TWF0Y2h1cHNFbGVtZW50ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2Jlc3QtbWF0Y2h1cHMgbWF0Y2h1cHMnLCBiZXN0TWF0Y2h1cHNTZWN0aW9uKTtcbiAgY29uc3QgYmVzdE1hdGNodXBzRGF0YSA9IGNoYW1waW9uU3RhdHMuYmVzdE1hdGNoVXBzO1xuICByZW5kZXJNYXRjaHVwc0luZm8oYmVzdE1hdGNodXBzRWxlbWVudCwgYmVzdE1hdGNodXBzRGF0YSwgbGF0ZXN0VmVyc2lvbik7XG5cbiAgY29uc3Qgd29yc3RNYXRjaHVwc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29yc3QtbWF0Y2h1cHMtc2VjdGlvbicpO1xuICBjb25zdCB3b3JzdE1hdGNodXBzRWxlbWVudCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICd3b3JzdC1tYXRjaHVwcyBtYXRjaHVwcycsIHdvcnN0TWF0Y2h1cHNTZWN0aW9uKTtcbiAgY29uc3Qgd29yc3RNYXRjaHVwc0RhdGEgPSBjaGFtcGlvblN0YXRzLndvcnN0TWF0Y2hVcHM7XG4gIHJlbmRlck1hdGNodXBzSW5mbyh3b3JzdE1hdGNodXBzRWxlbWVudCwgd29yc3RNYXRjaHVwc0RhdGEsIGxhdGVzdFZlcnNpb24pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2hhbXBpb25TdGF0c01vZGFsO1xuIiwiaW1wb3J0IERyb3Bkb3duU2VjdGlvbiBmcm9tICcuLi9oZWxwZXJzL2Ryb3Bkb3duU2VjdGlvbic7XG5pbXBvcnQgeyBnZXRBbGxDaGFtcGlvbkRldGFpbHMgfSBmcm9tICcuLi9jaGFtcGlvbkRhdGEvZ2V0QWxsQ2hhbXBpb25zJztcbmltcG9ydCBFbGVtZW50Q3JlYXRpb24gZnJvbSAnLi4vaGVscGVycy9lbGVtZW50Q3JlYXRpb24nO1xuaW1wb3J0IHsgY3JlYXRlQ2hhbXBpb25Db250YWluZXIgfSBmcm9tICcuL3JlbmRlckhlbHBlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoKSA9PiB7XG4gIC8qIENyZWF0ZXMgdGhlIGZpbHRlciBhbmQgc29ydGluZyBzZWN0aW9uIGJlbG93IHRoZSBoZWFkZXIgKi9cbiAgY29uc3QgZmlsdGVyU29ydFNlY3Rpb24gPSBEcm9wZG93blNlY3Rpb24uY3JlYXRlU2VjdGlvbigpO1xuXG4gIGNvbnN0IHNvcnRPcHRpb25zID0ge1xuICAgIHNvcnQ6IFsnd2lucmF0ZScsICdwaWNrcmF0ZScsICdkYW1hZ2UnXSxcbiAgfTtcblxuICBjb25zdCByb2xlT3B0aW9ucyA9IHtcbiAgICByb2xlOiBbJ3RhbmsnLCAnYXNzYXNzaW4nLCAnZmlnaHRlcicsICdtYWdlJywgJ21hcmtzbWFuJywgJ3N1cHBvcnQnXSxcbiAgfTtcbiAgY29uc3QgZGlmZmljdWx0eU9wdGlvbnMgPSB7XG4gICAgZGlmZmljdWx0eTogWydsb3cnLCAnbWVkaXVtJywgJ2hpZ2gnXSxcbiAgfTtcbiAgY29uc3QgbXVsdGlPcHRpb25BcnJheXMgPSBbcm9sZU9wdGlvbnMsIGRpZmZpY3VsdHlPcHRpb25zXTtcblxuICBjb25zdCBzb3J0RHJvcGRvd24gPSBuZXcgRHJvcGRvd25TZWN0aW9uKCdzb3J0Jywgc29ydE9wdGlvbnMuc29ydCk7XG4gIHNvcnREcm9wZG93bi5yZW5kZXJEcm9wZG93bihmaWx0ZXJTb3J0U2VjdGlvbiwgJ3NpbmdsZS1zZWxlY3QnKTtcblxuICBtdWx0aU9wdGlvbkFycmF5cy5mb3JFYWNoKChvcHRpb25zT2JqZWN0KSA9PiB7XG4gICAgY29uc3QgZHJvcGRvd25OYW1lID0gT2JqZWN0LmtleXMob3B0aW9uc09iamVjdClbMF07XG4gICAgY29uc3Qgb3B0aW9uc0FycmF5ID0gT2JqZWN0LnZhbHVlcyhvcHRpb25zT2JqZWN0KVswXTtcbiAgICBjb25zdCBkcm9wZG93biA9IG5ldyBEcm9wZG93blNlY3Rpb24oZHJvcGRvd25OYW1lLCBvcHRpb25zQXJyYXkpO1xuICAgIGRyb3Bkb3duLnJlbmRlckRyb3Bkb3duKGZpbHRlclNvcnRTZWN0aW9uLCAnbXVsdGktc2VsZWN0Jyk7XG4gIH0pO1xuXG4gIC8qIExvYWQgYWxsIGNoYW1waW9ucyBhbmQgcmVuZGVyIHRoZW0gdG8gdGhlIGNoYW1waW9ucyBwYWdlICovXG4gIGNvbnN0IGNoYW1waW9uc1BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hhbXBpb25zLXBhZ2UnKTtcbiAgRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2xvYWRlcicsIGNoYW1waW9uc1BhZ2UpO1xuICBjb25zdCBjaGFtcGlvbnNTZWN0aW9uID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2NoYW1waW9ucy1zZWN0aW9uJywgY2hhbXBpb25zUGFnZSk7XG4gIGNvbnN0IGFsbENoYW1waW9ucyA9IGF3YWl0IGdldEFsbENoYW1waW9uRGV0YWlscygpO1xuICBjb25zdCBhbGxDaGFtcGlvbnNBcnJheSA9IE9iamVjdC52YWx1ZXMoYWxsQ2hhbXBpb25zKTtcbiAgYWxsQ2hhbXBpb25zQXJyYXkuZm9yRWFjaCgoY2hhbXBpb24pID0+IHtcbiAgICBjcmVhdGVDaGFtcGlvbkNvbnRhaW5lcihjaGFtcGlvbiwgY2hhbXBpb25zU2VjdGlvbik7XG4gIH0pO1xuXG4gIC8qIENyZWF0ZXMgYXV0b2NvbXBsZXRlIGRpdiBmb3IgdGhlIHNlYXJjaCBiYXIgKi9cbiAgY29uc3Qgc2VhcmNoQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1jb250YWluZXInKTtcbiAgY29uc3QgYXV0b0NvbXBsZXRlTmFtZXMgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKFxuICAgICdkaXYnLCAnYXV0by1jb21wbGV0ZS1uYW1lcycsIHNlYXJjaENvbnRhaW5lcixcbiAgKTtcbiAgYWxsQ2hhbXBpb25zQXJyYXkuZm9yRWFjaCgoY2hhbXBpb24pID0+IHtcbiAgICBjb25zdCBjaGFtcGlvbk5hbWUgPSBjaGFtcGlvbi5uYW1lO1xuICAgIGNvbnN0IGNoYW1waW9uSWQgPSBjaGFtcGlvbi5pZDtcbiAgICBjb25zdCBhdXRvQ29tcGxldGVOYW1lV3JhcHBlciA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAnZGl2JywgJ2F1dG8tY29tcGxldGUtbmFtZS13cmFwcGVyJywgYXV0b0NvbXBsZXRlTmFtZXMsXG4gICAgKTtcbiAgICBhdXRvQ29tcGxldGVOYW1lV3JhcHBlci50YWJJbmRleCA9ICctMSc7XG4gICAgY29uc3QgYXV0b0NvbXBsZXRlTmFtZSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAnc3BhbicsICdhdXRvLWNvbXBsZXRlLW5hbWUnLCBhdXRvQ29tcGxldGVOYW1lV3JhcHBlcixcbiAgICApO1xuICAgIGF1dG9Db21wbGV0ZU5hbWUudGV4dENvbnRlbnQgPSBjaGFtcGlvbk5hbWU7XG4gICAgYXV0b0NvbXBsZXRlTmFtZS5kYXRhc2V0LmNoYW1waW9uSWQgPSBjaGFtcGlvbklkO1xuICAgIGF1dG9Db21wbGV0ZU5hbWUuaWQgPSBjaGFtcGlvbk5hbWU7XG4gIH0pO1xufTtcbiIsImltcG9ydCBFbGVtZW50Q3JlYXRpb24gZnJvbSAnLi4vaGVscGVycy9lbGVtZW50Q3JlYXRpb24nO1xuXG5jb25zdCBpbXBvcnRBbGwgPSAocikgPT4ge1xuICBjb25zdCBpbWFnZXMgPSB7fTtcbiAgci5rZXlzKCkuZm9yRWFjaCgoaXRlbSkgPT4geyBpbWFnZXNbaXRlbS5yZXBsYWNlKCcuLycsICcnKV0gPSByKGl0ZW0pOyB9KTtcbiAgcmV0dXJuIGltYWdlcztcbn07XG5cbmNvbnN0IGltYWdlcyA9IGltcG9ydEFsbChyZXF1aXJlLmNvbnRleHQoJy4uL2Fzc2V0cy9pbWFnZXMnLCBmYWxzZSwgL1xcLihwbmd8anBlP2d8c3ZnKSQvKSk7XG5cbmNvbnN0IHJlbmRlckhlYWRlckRldGFpbHMgPSAoY2hhbXBpb25EYXRhLCBtb2RhbENvbnRhaW5lcikgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHttb2RhbENvbnRhaW5lcn0tY29udGFpbmVyYCk7XG4gIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kID0gYG5vLXJlcGVhdCB1cmwoaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuL2ltZy9jaGFtcGlvbi9zcGxhc2gvJHtjaGFtcGlvbkRhdGEuaWR9XzAuanBnKSA3MCUgODAlYDtcbiAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvdmVyJztcblxuICBjb25zdCBjaGFtcGlvblRpdGxlID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbi10aXRsZScpO1xuICBjaGFtcGlvblRpdGxlLnRleHRDb250ZW50ID0gY2hhbXBpb25EYXRhLnRpdGxlO1xuXG4gIGNvbnN0IGNoYW1waW9uTmFtZSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tbmFtZScpO1xuICBjaGFtcGlvbk5hbWUudGV4dENvbnRlbnQgPSBjaGFtcGlvbkRhdGEubmFtZTtcbn07XG5cbi8qIFJlbmRlcnMgd2luIG9yIHBpY2sgcmF0ZSB0byB0aGUgRE9NICovXG5jb25zdCByZW5kZXJTdGF0T3ZlcnZpZXcgPSAoc3RhdHNPdmVydmlldywgcmF0ZVRleHQsIHJhdGVUeXBlKSA9PiB7XG4gIGNvbnN0IGNoYW1waW9uUmF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgY29uc3QgcmF0ZVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gIC8qIFR1cm5zICdXaW4gUmF0ZScgaW50byAnd2luLXJhdGUnICovXG4gIGNvbnN0IGxvd2VyQ2FzZVRleHQgPSByYXRlVGV4dC5yZXBsYWNlKCcgJywgJy0nKS50b0xvd2VyQ2FzZSgpO1xuXG4gIGNoYW1waW9uUmF0ZS5jbGFzc05hbWUgPSBsb3dlckNhc2VUZXh0O1xuICBsYWJlbC5pZCA9IGAke2xvd2VyQ2FzZVRleHR9LWxhYmVsYDtcbiAgbGFiZWwuY2xhc3NOYW1lID0gJ2xhYmVsJztcbiAgcmF0ZVZhbHVlLmNsYXNzTmFtZSA9IGAke2xvd2VyQ2FzZVRleHR9LXZhbHVlYDtcbiAgbGFiZWwudGV4dENvbnRlbnQgPSByYXRlVGV4dDtcbiAgcmF0ZVZhbHVlLnRleHRDb250ZW50ID0gYCR7cmF0ZVR5cGV9JWA7XG5cbiAgY2hhbXBpb25SYXRlLmFwcGVuZENoaWxkKGxhYmVsKTsgY2hhbXBpb25SYXRlLmFwcGVuZENoaWxkKHJhdGVWYWx1ZSk7XG4gIHN0YXRzT3ZlcnZpZXcuYXBwZW5kQ2hpbGQoY2hhbXBpb25SYXRlKTtcbn07XG5cbmNvbnN0IHJlbmRlckNoYW1waW9uTGFuZSA9IChzdGF0c092ZXJ2aWV3LCBsYW5lKSA9PiB7XG4gIGNvbnN0IGNoYW1waW9uTGFuZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2hhbXBpb25MYW5lSW5mby5jbGFzc05hbWUgPSAnbGFuZS1pbmZvJztcbiAgY29uc3QgbGFuZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGxhbmVUZXh0LmNsYXNzTmFtZSA9ICdsYW5lLXRleHQgbGFiZWwnO1xuICBsYW5lVGV4dC50ZXh0Q29udGVudCA9IGxhbmU7XG4gIGNvbnN0IGxhbmVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGxhbmVJY29uLmNsYXNzTmFtZSA9ICdsYW5lLWljb24gY2hhbXBpb24tcm9sZS1pbWFnZSc7XG4gIGxhbmVJY29uLnNyYyA9IGAke2ltYWdlc1tgJHtsYW5lfS5wbmdgXX1gO1xuICBsYW5lSWNvbi5hbHQgPSBgJHtsYW5lfS5wbmdgO1xuICBjaGFtcGlvbkxhbmVJbmZvLmFwcGVuZENoaWxkKGxhbmVUZXh0KTtcbiAgY2hhbXBpb25MYW5lSW5mby5hcHBlbmRDaGlsZChsYW5lSWNvbik7XG4gIHN0YXRzT3ZlcnZpZXcuYXBwZW5kQ2hpbGQoY2hhbXBpb25MYW5lSW5mbyk7XG59O1xuXG5jb25zdCByZW5kZXJEYW1hZ2VTdGF0cyA9IChkYW1hZ2VUeXBlLCBkYW1hZ2VWYWx1ZSwgZGFtYWdlUGVyY2VudGFnZSkgPT4ge1xuICBjb25zdCBkYW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtkYW1hZ2VUeXBlfS1kYW1hZ2UtY29udGFpbmVyYCk7XG5cbiAgY29uc3QgZGFtYWdlU3RhdHMgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnZGFtYWdlLXN0YXRzJywgZGFtYWdlQ29udGFpbmVyKTtcblxuICBjb25zdCBkYW1hZ2VWYWx1ZUVsZW1lbnQgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aElkKCdzcGFuJywgYCR7ZGFtYWdlVHlwZX0tdmFsdWVgLCBkYW1hZ2VTdGF0cyk7XG4gIGNvbnN0IGRhbWFnZVBlcmNlbnRhZ2VFbGVtZW50ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhJZCgnc3BhbicsIGAke2RhbWFnZVR5cGV9LXBlcmNlbnRhZ2VgLCBkYW1hZ2VTdGF0cyk7XG4gIGRhbWFnZVZhbHVlRWxlbWVudC50ZXh0Q29udGVudCA9IGAke2RhbWFnZVZhbHVlfWA7XG4gIGRhbWFnZVBlcmNlbnRhZ2VFbGVtZW50LnRleHRDb250ZW50ID0gYCR7ZGFtYWdlUGVyY2VudGFnZX0lYDtcbn07XG5cbmNvbnN0IHJlbmRlck1hdGNodXBzSW5mbyA9IChtYXRjaHVwc0VsZW1lbnQsIG1hdGNodXBzRGF0YSwgbGF0ZXN0VmVyc2lvbikgPT4ge1xuICBtYXRjaHVwc0RhdGEuZm9yRWFjaCgobWF0Y2h1cCkgPT4ge1xuICAgIGNvbnN0IG1hdGNodXBJbmZvID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ21hdGNodXAtaW5mbycsIG1hdGNodXBzRWxlbWVudCk7XG4gICAgY29uc3QgZW5lbXlDaGFtcGlvbk5hbWUgPSBtYXRjaHVwWzFdLm5hbWU7XG4gICAgY29uc3QgZW5lbXlDaGFtcGlvbklkID0gbWF0Y2h1cFswXTtcbiAgICBjb25zdCBlbmVteUNoYW1waW9uSW1nVXJsID0gYGh0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi8ke2xhdGVzdFZlcnNpb259L2ltZy9jaGFtcGlvbi8ke2VuZW15Q2hhbXBpb25JZH0ucG5nYDtcbiAgICBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAnZW5lbXktY2hhbXBpb24taW1nJywgbWF0Y2h1cEluZm8sIGVuZW15Q2hhbXBpb25JbWdVcmwsIGBzbWFsbC0ke2VuZW15Q2hhbXBpb25JZH1gLFxuICAgICk7XG5cbiAgICBjb25zdCBtYXRjaHVwU3RhdHMgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnbWF0Y2h1cC1zdGF0cycsIG1hdGNodXBJbmZvKTtcbiAgICBjb25zdCBlbmVteUNoYW1waW9uTmFtZUVsZW1lbnQgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2VuZW15LWNoYW1waW9uLW5hbWUnLCBtYXRjaHVwU3RhdHMpO1xuICAgIGVuZW15Q2hhbXBpb25OYW1lRWxlbWVudC50ZXh0Q29udGVudCA9IGVuZW15Q2hhbXBpb25OYW1lO1xuICAgIGNvbnN0IHdpbnJhdGVBZ2FpbnN0ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ3dpbnJhdGUtYWdhaW5zdCcsIG1hdGNodXBTdGF0cyk7XG4gICAgY29uc3Qgd2lucmF0ZUFnYWluc3RMYWJlbCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnd2lucmF0ZS1hZ2FpbnN0LWxhYmVsJywgd2lucmF0ZUFnYWluc3QpO1xuICAgIHdpbnJhdGVBZ2FpbnN0TGFiZWwudGV4dENvbnRlbnQgPSAnV2lucmF0ZTogJztcbiAgICBjb25zdCBjb2xvciA9IG1hdGNodXBzRWxlbWVudC5jbGFzc05hbWUgPT09ICdiZXN0LW1hdGNodXBzIG1hdGNodXBzJyA/ICdibHVlJyA6ICdyZWQnO1xuICAgIGNvbnN0IHdpbnJhdGVBZ2FpbnN0UGVyY2VudGFnZSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCBgd2lucmF0ZS1hZ2FpbnN0LXBlcmNlbnRhZ2UgJHtjb2xvcn1gLCB3aW5yYXRlQWdhaW5zdCk7XG4gICAgd2lucmF0ZUFnYWluc3RQZXJjZW50YWdlLnRleHRDb250ZW50ID0gYCR7bWF0Y2h1cFsxXS53aW5SYXRlQWdhaW5zdC50b0ZpeGVkKDApfSVgO1xuICAgIGNvbnN0IGdhbWVzUGxheWVkQWdhaW5zdCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnZ2FtZXMtcGxheWVkLWFnYWluc3QnLCBtYXRjaHVwU3RhdHMpO1xuICAgIGdhbWVzUGxheWVkQWdhaW5zdC50ZXh0Q29udGVudCA9IGBHYW1lczogJHttYXRjaHVwWzFdLm1hdGNoZXN9YDtcbiAgfSk7XG59O1xuXG5jb25zdCBjcmVhdGVDaGFtcGlvbkNvbnRhaW5lciA9IChjaGFtcGlvbiwgY2hhbXBpb25zU2VjdGlvbikgPT4ge1xuICBjb25zdCBjaGFtcGlvbkNvbnRhaW5lciA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdjaGFtcGlvbi1jb250YWluZXIgc2hvd24nLCBjaGFtcGlvbnNTZWN0aW9uKTtcbiAgY29uc3QgY2hhbXBpb25JZCA9IGNoYW1waW9uLmlkID8gY2hhbXBpb24uaWQgOiBjaGFtcGlvbi5jaGFtcGlvbk5hbWU7XG4gIGNoYW1waW9uQ29udGFpbmVyLmRhdGFzZXQuaWQgPSBjaGFtcGlvbklkO1xuICBjb25zdCBjaGFtcGlvbkltZ1VybCA9IGBodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vaW1nL2NoYW1waW9uL2xvYWRpbmcvJHtjaGFtcGlvbklkfV8wLmpwZ2A7XG4gIGNvbnN0IGNoYW1waW9uSW1nID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzKFxuICAgICdjaGFtcGlvbi1pbWcnLCBjaGFtcGlvbkNvbnRhaW5lciwgY2hhbXBpb25JbWdVcmwsICcnLFxuICApO1xuICBjaGFtcGlvbkltZy50YWJJbmRleCA9IDA7XG4gIGNoYW1waW9uQ29udGFpbmVyLnRhYkluZGV4ID0gMDtcbiAgY29uc3QgY2hhbXBpb25OYW1lV3JhcHBlciA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdjaGFtcGlvbi1uYW1lLXdyYXBwZXInLCBjaGFtcGlvbkNvbnRhaW5lcik7XG4gIGNvbnN0IGNoYW1waW9uTmFtZSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnY2hhbXBpb24tbmFtZScsIGNoYW1waW9uTmFtZVdyYXBwZXIpO1xuICBjaGFtcGlvbk5hbWUudGV4dENvbnRlbnQgPSBjaGFtcGlvbi5uYW1lO1xufTtcblxuZXhwb3J0IHtcbiAgcmVuZGVySGVhZGVyRGV0YWlscyxcbiAgcmVuZGVyU3RhdE92ZXJ2aWV3LFxuICByZW5kZXJDaGFtcGlvbkxhbmUsXG4gIHJlbmRlckRhbWFnZVN0YXRzLFxuICBpbWFnZXMsXG4gIHJlbmRlck1hdGNodXBzSW5mbyxcbiAgY3JlYXRlQ2hhbXBpb25Db250YWluZXIsXG59O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIC0tcmFzaW4tYmxhY2s6ICMxZDFlMmM7XFxuICAtLXRyYW5zcGFyZW50LXJhc2luLWJsYWNrOiAjMWQxZTJjYzc7XFxuICAtLWRhcmstZ29sZDogIzkyNzU0MztcXG4gIC0tbGlnaHQtZ29sZDogI2M3YWI2ZTtcXG59XFxuXFxuI2NoYW1waW9ucy1wYWdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IC00O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCYXJsb3dcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLmFwcC1uYW1lLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgcGFkZGluZzogMC4zZW07XFxuICBib3JkZXItcmFkaXVzOiA4cHggMHB4IDhweCAwO1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLmFwcC1uYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBsZXR0ZXItc3BhY2luZzogM3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLmFwcC1uYW1lLWNvbnRhaW5lcjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLnBhZ2UtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFlbSAwO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci13aWR0aDogMCAwIDJweCAwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5zZWFyY2gtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLmF1dG8tY29tcGxldGUtbmFtZXMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZDRkNDtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICBib3JkZXItdG9wOiBub25lO1xcbiAgei1pbmRleDogNDtcXG4gIHRvcDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTRyZW07XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5hdXRvLWNvbXBsZXRlLW5hbWUtd3JhcHBlciB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDRkNGQ0O1xcbiAgY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5hdXRvLWNvbXBsZXRlLW5hbWUtd3JhcHBlcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5hdXRvLWNvbXBsZXRlLW5hbWUtd3JhcHBlcjpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5zZWFyY2gge1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBtaW4td2lkdGg6IDE4ZW07XFxuICBiYWNrZ3JvdW5kOiAjZTJlNGU5O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbWluLWhlaWdodDogMi42ZW07XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5jaGFtcGlvbnMtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAxZW07XFxuICBtYXgtd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi10b3A6IDJlbTtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5jaGFtcGlvbi1jb250YWluZXIuc2hvd24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1heC13aWR0aDogOXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi10b3A6IDEuNWVtO1xcbiAgb3BhY2l0eTogMC44O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcbiNjaGFtcGlvbnMtcGFnZSAuY2hhbXBpb24tY29udGFpbmVyLnNob3duOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLmNoYW1waW9uLWNvbnRhaW5lci5zaG93bjpmb2N1cyB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5jaGFtcGlvbi1jb250YWluZXIuaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbiNjaGFtcGlvbnMtcGFnZSAuY2hhbXBpb24taW1nIHtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiA4JTtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5jaGFtcGlvbi1pbWc6Zm9jdXMgLmNoYW1waW9uLWNvbnRhaW5lci5zaG93biB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5jaGFtcGlvbi1uYW1lLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAtMy4yZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudC1yYXNpbi1ibGFjayk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDAuMmVtIDAgMC4yZW07XFxufVxcbiNjaGFtcGlvbnMtcGFnZSAuY2hhbXBpb24tbmFtZSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmFybG93XFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5maWx0ZXItc29ydC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogNTclO1xcbiAgbWFyZ2luOiAxZW0gYXV0byAzZW0gYXV0bztcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5sYW5lLWZpbHRlci1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmbGV4OiAxO1xcbiAgd2lkdGg6IDc2JTtcXG4gIG1hcmdpbjogMWVtIGF1dG87XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5oZWFkZXItb3B0aW9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjNzA3NTdhO1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLmhlYWRlci1vcHRpb246aG92ZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IHZhcigtLWxpZ2h0LWdvbGQpO1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLmhlYWRlci1vcHRpb24uYWN0aXZlIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCB2YXIoLS1saWdodC1nb2xkKTtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5kcm9wZG93biB7XFxuICBtYXJnaW46IDAgMC40ZW0gMC40ZW0gMC40ZW07XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbGV4OiAxO1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLmRyb3Bkb3duLWJ0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZGZlMTtcXG4gIGNvbG9yOiAjMmYxZDFkO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5kcm9wZG93bi1idG46OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCLinqRcXFwiO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLmRyb3Bkb3duLW9wdGlvbnMge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDI7XFxufVxcbiNjaGFtcGlvbnMtcGFnZSAuZHJvcGRvd24tb3B0aW9uIHtcXG4gIGNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZjhmOGY4O1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLmRyb3Bkb3duLW9wdGlvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFkZWRlO1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLmRyb3Bkb3duLW9wdGlvbi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxufVxcbiNjaGFtcGlvbnMtcGFnZSAubG9hZGVyIHtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIG1hcmdpbjogNTBweCBhdXRvO1xcbiAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XFxuICB3aWR0aDogMTFlbTtcXG4gIGhlaWdodDogMTFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQ6ICMyZTM0MzY7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMmUzNDM2IDEwJSwgcmdiYSgxNDMsIDg5LCAyLCAwKSA0MiUpO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzJlMzQzNiAxMCUsIHJnYmEoMTQzLCA4OSwgMiwgMCkgNDIlKTtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMmUzNDM2IDEwJSwgcmdiYSgxNDMsIDg5LCAyLCAwKSA0MiUpO1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMmUzNDM2IDEwJSwgcmdiYSgxNDMsIDg5LCAyLCAwKSA0MiUpO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMmUzNDM2IDEwJSwgcmdiYSgxNDMsIDg5LCAyLCAwKSA0MiUpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGxvYWQzIDEuNHMgaW5maW5pdGUgbGluZWFyO1xcbiAgYW5pbWF0aW9uOiBsb2FkMyAxLjRzIGluZmluaXRlIGxpbmVhcjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDE3LjNlbTtcXG4gIHotaW5kZXg6IDU7XFxufVxcbiNjaGFtcGlvbnMtcGFnZSAubG9hZGVyOmJlZm9yZSB7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJSAwIDAgMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5sb2FkZXI6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgd2lkdGg6IDc1JTtcXG4gIGhlaWdodDogNzUlO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBtYXJnaW46IGF1dG87XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkMyB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBsb2FkMyB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDg1MHB4KSB7XFxuICAjY2hhbXBpb25zLXBhZ2UgLmNoYW1waW9ucy1zZWN0aW9uIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gIH1cXG4gICNjaGFtcGlvbnMtcGFnZSAuY2hhbXBpb24tY29udGFpbmVyLnNob3duIHtcXG4gICAgbWF4LXdpZHRoOiAxMHJlbTtcXG4gIH1cXG4gICNjaGFtcGlvbnMtcGFnZSAubGFuZS1maWx0ZXItaGVhZGVyIHtcXG4gICAgd2lkdGg6IDU0JTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge1xcbiAgI2NoYW1waW9ucy1wYWdlIC5kcm9wZG93biB7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgfVxcbiAgI2NoYW1waW9ucy1wYWdlIC5jaGFtcGlvbnMtc2VjdGlvbiB7XFxuICAgIGdyaWQtY29sdW1uLWdhcDogMDtcXG4gIH1cXG4gICNjaGFtcGlvbnMtcGFnZSAuY2hhbXBpb24tbmFtZS13cmFwcGVyIHtcXG4gICAgbWFyZ2luLXRvcDogLTMuNmVtO1xcbiAgfVxcbiAgI2NoYW1waW9ucy1wYWdlIC5jaGFtcGlvbi1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAxLjRlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgI2NoYW1waW9ucy1wYWdlIC5jaGFtcGlvbnMtc2VjdGlvbiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxNTAwcHgpIHtcXG4gICNjaGFtcGlvbnMtcGFnZSAuY2hhbXBpb25zLXNlY3Rpb24ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xcbiAgfVxcbiAgI2NoYW1waW9ucy1wYWdlIC5jaGFtcGlvbi1jb250YWluZXIuc2hvd24ge1xcbiAgICBtYXgtd2lkdGg6IDEycmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gICNjaGFtcGlvbnMtcGFnZSAuaGVhZGVyLW9wdGlvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMC41ZW07XFxuICB9XFxuICAjY2hhbXBpb25zLXBhZ2UgLmZpbHRlci1zb3J0LXNlY3Rpb24ge1xcbiAgICB3aWR0aDogOTQlO1xcbiAgfVxcbiAgI2NoYW1waW9ucy1wYWdlIC5zZWFyY2gge1xcbiAgICBtaW4td2lkdGg6IDE2ZW07XFxuICAgIG1pbi1oZWlnaHQ6IDEuNmVtO1xcbiAgICBmb250LXNpemU6IDAuOTVlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAjY2hhbXBpb25zLXBhZ2UgLmNoYW1waW9ucy1zZWN0aW9uIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIH1cXG4gICNjaGFtcGlvbnMtcGFnZSAucGFnZS1oZWFkZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgI2NoYW1waW9ucy1wYWdlIC5hcHAtbmFtZS1jb250YWluZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAzNjBweCkge1xcbiAgI2NoYW1waW9ucy1wYWdlIC5sYW5lLWZpbHRlci1oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlc2hlZXRzL2NoYW1waW9ucy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQUFoQjtFQUNDLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUFFRDs7QUFDQTtFQUNFLHNCQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBRUY7O0FBQ0E7RUFDRSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0FBRUY7QUFBRTtFQUNFLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0FBRUo7QUFDRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNKO0FBRUU7RUFDRSx1QkFBQTtFQUNBLHVCQUFBO0FBQUo7QUFHRTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFESjtBQUlFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBRko7QUFLRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBSEo7QUFNRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBSko7QUFPRTtFQUNFLG1DQUFBO0FBTEo7QUFRRTtFQUNFLG1DQUFBO0FBTko7QUFTRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7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RUFDRTtJQUNFLHFDQUFBO0VBbENKO0VBcUNFO0lBQ0UsZ0JBQUE7RUFuQ0o7RUFzQ0U7SUFDRSxVQUFBO0VBcENKO0FBQ0Y7QUF1Q0U7RUFFRTtJQUNFLGlCQUFBO0VBdENKO0VBeUNFO0lBQ0Usa0JBQUE7RUF2Q0o7RUEwQ0U7SUFDRSxrQkFBQTtFQXhDSjtFQTJDRTtJQUNFLGdCQUFBO0VBekNKO0FBQ0Y7QUE0Q0U7RUFDRTtJQUNFLHFDQUFBO0VBMUNKO0FBQ0Y7QUE2Q0U7RUFDRTtJQUNFLHFDQUFBO0VBM0NKO0VBOENFO0lBQ0UsZ0JBQUE7RUE1Q0o7QUFDRjtBQStDRTtFQUNFO0lBQ0UsbUJBQUE7RUE3Q0o7RUFnREU7SUFDRSxVQUFBO0VBOUNKO0VBaURFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7RUEvQ0o7QUFDRjtBQWtERTtFQUNFO0lBQ0UscUNBQUE7RUFoREo7RUFtREU7SUFDRSxzQkFBQTtFQWpESjtFQW9ERTtJQUNFLGtCQUFBO0VBbERKO0FBQ0Y7QUFxREU7RUFDRTtJQUNFLGNBQUE7RUFuREo7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLXJhc2luLWJsYWNrOiAjMWQxZTJjO1xcbiAgLS10cmFuc3BhcmVudC1yYXNpbi1ibGFjazogIzFkMWUyY2M3O1xcbiAgLS1kYXJrLWdvbGQ6ICM5Mjc1NDM7XFxuICAtLWxpZ2h0LWdvbGQ6ICNjN2FiNmU7XFxufVxcblxcbiNjaGFtcGlvbnMtcGFnZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAtNDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmFybG93XFxcIiwgc2Fucy1zZXJpZjtcXG4gIFxcbiAgLmFwcC1uYW1lLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICAgIHBhZGRpbmc6IDAuM2VtO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHggMHB4IDhweCAwO1xcbiAgfVxcblxcbiAgLmFwcC1uYW1lIHtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuXFxuICAuYXBwLW5hbWUtY29udGFpbmVyOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgfVxcblxcbiAgLnBhZ2UtaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDFlbSAwO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICAgIGJvcmRlci13aWR0aDogMCAwIDJweCAwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLnNlYXJjaC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5hdXRvLWNvbXBsZXRlLW5hbWVzIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDRkNGQ0O1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICB6LWluZGV4OiA0O1xcbiAgICB0b3A6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAxNHJlbTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoOyBcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5hdXRvLWNvbXBsZXRlLW5hbWUtd3JhcHBlciB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDRkNGQ0OyBcXG4gICAgY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuYXV0by1jb21wbGV0ZS1uYW1lLXdyYXBwZXI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gIH1cXG5cXG4gIC5hdXRvLWNvbXBsZXRlLW5hbWUtd3JhcHBlcjpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgfVxcbiAgXFxuICAuc2VhcmNoIHtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIG1pbi13aWR0aDogMThlbTtcXG4gICAgYmFja2dyb3VuZDogI2UyZTRlOTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBtaW4taGVpZ2h0OiAyLjZlbTtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICB9XFxuXFxuICAuY2hhbXBpb25zLXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBncmlkLWF1dG8tcm93czogYXV0bztcXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAxZW07XFxuICAgIG1heC13aWR0aDogODAlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDJlbTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1jb250YWluZXIuc2hvd24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXgtd2lkdGg6IDlyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luLXRvcDogMS41ZW07XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tY29udGFpbmVyLnNob3duOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1jb250YWluZXIuc2hvd246Zm9jdXMge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLWNvbnRhaW5lci5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLWltZyB7XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogOCU7XFxuICB9XFxuXFxuICAuY2hhbXBpb24taW1nOmZvY3VzIHtcXG4gICAgLmNoYW1waW9uLWNvbnRhaW5lci5zaG93bntcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1uYW1lLXdyYXBwZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IC0zLjJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQtcmFzaW4tYmxhY2spO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwLjJlbSAwIDAuMmVtO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLW5hbWUge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQmFybG93XFxcIiwgc2Fucy1zZXJpZjtcXG4gIH1cXG4gIFxcbiAgLmZpbHRlci1zb3J0LXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogNTclO1xcbiAgXFxuICAgIG1hcmdpbjogMWVtIGF1dG8gM2VtIGF1dG87XFxuICB9XFxuICBcXG4gIC5sYW5lLWZpbHRlci1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZmxleDogMTtcXG4gICAgd2lkdGg6IDc2JTtcXG4gICAgbWFyZ2luOiAxZW0gYXV0bztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB9XFxuXFxuICAuaGVhZGVyLW9wdGlvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6ICM3MDc1N2E7XFxuICB9XFxuXFxuICAuaGVhZGVyLW9wdGlvbjpob3ZlciB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgfVxcblxcbiAgLmhlYWRlci1vcHRpb24uYWN0aXZlIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggdmFyKC0tbGlnaHQtZ29sZCk7XFxuICB9XFxuXFxuICAuZHJvcGRvd24ge1xcbiAgICBtYXJnaW46IDAgMC40ZW0gMC40ZW0gMC40ZW07XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmbGV4OiAxO1xcbiAgfVxcblxcbiAgLmRyb3Bkb3duLWJ0biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZkZmUxO1xcbiAgICBjb2xvcjogIzJmMWQxZDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkO1xcbiAgfVxcblxcbiAgLmRyb3Bkb3duLWJ0bjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXDI3QTRcXFwiO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gIH1cXG5cXG4gIC5kcm9wZG93bi1vcHRpb25zIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZGlzcGxheTogbm9uZTsgXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHotaW5kZXg6IDI7XFxuICB9XFxuICBcXG4gIC5kcm9wZG93bi1vcHRpb24ge1xcbiAgICBjb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spOyBcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2Y4ZjhmODtcXG4gIH1cXG5cXG4gIC5kcm9wZG93bi1vcHRpb246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFkZWRlO1xcbiAgfVxcblxcbiAgLmRyb3Bkb3duLW9wdGlvbi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gIH1cXG5cXG4gIC5sb2FkZXIge1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xcbiAgICB0ZXh0LWluZGVudDogLTk5OTllbTtcXG4gICAgd2lkdGg6IDExZW07XFxuICAgIGhlaWdodDogMTFlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kOiAjMmUzNDM2O1xcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMmUzNDM2IDEwJSwgcmdiYSgxNDMsODksMiwgMCkgNDIlKTtcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzJlMzQzNiAxMCUsIHJnYmEoMTQzLDg5LDIsIDApIDQyJSk7XFxuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMmUzNDM2IDEwJSwgcmdiYSgxNDMsODksMiwgMCkgNDIlKTtcXG4gICAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMmUzNDM2IDEwJSwgcmdiYSgxNDMsODksMiwgMCkgNDIlKTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMmUzNDM2IDEwJSwgcmdiYSgxNDMsODksMiwgMCkgNDIlKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZDMgMS40cyBpbmZpbml0ZSBsaW5lYXI7XFxuICAgIGFuaW1hdGlvbjogbG9hZDMgMS40cyBpbmZpbml0ZSBsaW5lYXI7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAxNy4zZW07XFxuICAgIHotaW5kZXg6IDU7XFxuICB9XFxuICAubG9hZGVyOmJlZm9yZSB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlIDAgMCAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgY29udGVudDogJyc7XFxuICB9XFxuICAubG9hZGVyOmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBoZWlnaHQ6IDc1JTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogMDtcXG4gIH1cXG4gIEAtd2Via2l0LWtleWZyYW1lcyBsb2FkMyB7XFxuICAgIDAlIHtcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICB9XFxuICB9XFxuICBAa2V5ZnJhbWVzIGxvYWQzIHtcXG4gICAgMCUge1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIH1cXG4gIH1cXG4gIFxcblxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDg1MHB4KSB7XFxuICAgIC5jaGFtcGlvbnMtc2VjdGlvbiB7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gICAgfVxcblxcbiAgICAuY2hhbXBpb24tY29udGFpbmVyLnNob3duIHtcXG4gICAgICBtYXgtd2lkdGg6IDEwcmVtO1xcbiAgICB9XFxuXFxuICAgIC5sYW5lLWZpbHRlci1oZWFkZXIge1xcbiAgICAgIHdpZHRoOiA1NCU7XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcXG5cXG4gICAgLmRyb3Bkb3duIHtcXG4gICAgICBncmlkLXJvdy1zdGFydDogMjtcXG4gICAgfVxcblxcbiAgICAuY2hhbXBpb25zLXNlY3Rpb24ge1xcbiAgICAgIGdyaWQtY29sdW1uLWdhcDogMDtcXG4gICAgfVxcblxcbiAgICAuY2hhbXBpb24tbmFtZS13cmFwcGVyIHtcXG4gICAgICBtYXJnaW4tdG9wOiAtMy42ZW07XFxuICAgIH1cXG5cXG4gICAgLmNoYW1waW9uLW5hbWUge1xcbiAgICAgIGZvbnQtc2l6ZTogMS40ZW07XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gICAgLmNoYW1waW9ucy1zZWN0aW9uIHtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgKG1pbi13aWR0aDogMTUwMHB4KSB7XFxuICAgIC5jaGFtcGlvbnMtc2VjdGlvbiB7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXG4gICAgfVxcblxcbiAgICAuY2hhbXBpb24tY29udGFpbmVyLnNob3duIHtcXG4gICAgICBtYXgtd2lkdGg6IDEycmVtO1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gICAgLmhlYWRlci1vcHRpb24ge1xcbiAgICAgIG1hcmdpbi1yaWdodDogMC41ZW07XFxuICAgIH1cXG5cXG4gICAgLmZpbHRlci1zb3J0LXNlY3Rpb24ge1xcbiAgICAgIHdpZHRoOiA5NCU7XFxuICAgIH1cXG5cXG4gICAgLnNlYXJjaCB7XFxuICAgICAgbWluLXdpZHRoOiAxNmVtO1xcbiAgICAgIG1pbi1oZWlnaHQ6IDEuNmVtO1xcbiAgICAgIGZvbnQtc2l6ZTogMC45NWVtO1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gICAgLmNoYW1waW9ucy1zZWN0aW9uIHtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICB9XFxuXFxuICAgIC5wYWdlLWhlYWRlciB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAuYXBwLW5hbWUtY29udGFpbmVyIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAzNjBweCkge1xcbiAgICAubGFuZS1maWx0ZXItaGVhZGVyIHtcXG4gICAgICBmb250LXNpemU6IDFlbTtcXG4gICAgfVxcbiAgfVxcbiB9XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbjpyb290IHtcXG4gIC0tcmFzaW4tYmxhY2s6ICMxZDFlMmM7XFxuICAtLWRhcmstZ29sZDogIzkyNzU0MztcXG4gIC0tbGlnaHQtZ29sZDogI2M3YWI2ZTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgcGFkZGluZzogMnJlbSAwO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmFybG93XFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuLm1vZGFsICNtYWluLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nOiAwO1xcbiAgbWF4LXdpZHRoOiA3NSU7XFxuICBtaW4taGVpZ2h0OiA0OXJlbTtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5tb2RhbCAjbWFpbi1jb250YWluZXIgI21haW4ge1xcbiAgY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxufVxcbi5tb2RhbCAubW9kYWwtaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBlMDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBiZjtcXG59XFxuLm1vZGFsIC5uYXZpZ2F0aW9uLWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmNsb3NlLW1vZGFsLWJ0bi13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDEuMmVtO1xcbn1cXG4ubW9kYWwgLmNsb3NlLW1vZGFsLWJ0biB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1zaXplOiAxLjZlbTtcXG59XFxuLm1vZGFsIC5jbG9zZS1tb2RhbC1idG46aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbn1cXG4ubW9kYWwgLm1vZGFsLW5hdi1saW5rcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBmb250LXNpemU6IDIycHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm1vZGFsIC5tb2RhbC1uYXYtbGluayB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tdG9wOiAwLjVlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG4ubW9kYWwgLm1vZGFsLW5hdi1saW5rOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLWhlYWRpbmcge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLW5hbWUge1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXRpdGxlIHtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tcm9sZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXJvbGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1yZXNvdXJjZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXJvbGUtaW1hZ2Uge1xcbiAgaGVpZ2h0OiAzLjVyZW07XFxuICB3aWR0aDogMy41cmVtO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXJlc291cmNlLWltYWdlIHtcXG4gIGhlaWdodDogMy41cmVtO1xcbiAgd2lkdGg6IDMuNXJlbTtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1yb2xlLW5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1yZXNvdXJjZS1uYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tbWFpbi1pbmZvIHtcXG4gIHBhZGRpbmc6IDEuOHJlbTtcXG4gIG1heC13aWR0aDogMzRyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogbGFzdCBiYXNlbGluZTtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xcbiAgZnJvbSB7XFxuICAgIHRvcDogLTMwMHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0b3A6IDA7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XFxuICBmcm9tIHtcXG4gICAgdG9wOiAtMzAwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICB0byB7XFxuICAgIHRvcDogMDtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuLm1vZGFsIC5sb3JlLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwZTA7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbn1cXG4ubW9kYWwgLnN1YmhlYWRpbmcge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMC40ZW07XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tb2RhbCAuYWJpbGl0aWVzLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwZTA7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgd2lkdGg6IDI4ZW07XFxufVxcbi5tb2RhbCAuYWJpbGl0aWVzLWhlYWRpbmcge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmFiaWxpdHktaW1ncyB7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcbi5tb2RhbCAuYWJpbGl0eS1kZXNjcmlwdGlvbiB7XFxuICBtYXJnaW4tdG9wOiAwLjVlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLWRldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tZXh0cmEtaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLm1vZGFsIC5hYmlsaXR5LWluZm8ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLm1vZGFsIC5hYmlsaXR5LWluZm8uYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ubW9kYWwgLnNwZWxsLWltZyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDAgMC41cmVtO1xcbiAgaGVpZ2h0OiAzLjNyZW07XFxuICB3aWR0aDogMy4zcmVtO1xcbn1cXG4ubW9kYWwgLnNwZWxsLWltZy5jbGlja2VkIHtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBib3JkZXItd2lkdGg6IDRweDtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi10aXBzLXNlY3Rpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMGUwO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC42ZW07XFxuICBsaW5lLWhlaWdodDogMS40O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XFxuICBtYXgtd2lkdGg6IDM0cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXRpcHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tdGlwIHtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuLm1vZGFsICNzdGF0cy1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMDtcXG4gIG1heC13aWR0aDogNzUlO1xcbiAgbWluLWhlaWdodDogNDlyZW07XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5tb2RhbCAjc3RhdHMtY29udGFpbmVyICNzdGF0cyB7XFxuICBjb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1zdGF0cy1vdmVydmlldyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBtYXJnaW4tdG9wOiAwLjVlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbiAgbWF4LXdpZHRoOiAyNXJlbTtcXG4gIG1pbi13aWR0aDogMjByZW07XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcbi5tb2RhbCAud2luLXJhdGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5tb2RhbCAucGljay1yYXRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ubW9kYWwgLmxhbmUtaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5tb2RhbCAucGljay1yYXRlLXZhbHVlIHtcXG4gIG1hcmdpbi10b3A6IDAuNGVtO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbn1cXG4ubW9kYWwgLndpbi1yYXRlLXZhbHVlIHtcXG4gIG1hcmdpbi10b3A6IDAuNGVtO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbn1cXG4ubW9kYWwgLmxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1kYW1hZ2UtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBlMDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBtYXgtaGVpZ2h0OiAxNy41cmVtO1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcbi5tb2RhbCAuZGFtYWdlLWhlYWRpbmcge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmNpcmN1bGFyLWNoYXJ0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1heC1oZWlnaHQ6IDE0ZW07XFxufVxcbi5tb2RhbCAuY2lyY2xlIHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2Utd2lkdGg6IDIuMjtcXG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcXG4gIGFuaW1hdGlvbjogcHJvZ3Jlc3MgMXMgZWFzZS1vdXQgZm9yd2FyZHM7XFxufVxcbi5tb2RhbCAjbWFnaWMtZGFtYWdlLXN0cm9rZSB7XFxuICBzdHJva2U6ICMzNWE3ZmY7XFxufVxcbi5tb2RhbCAjcGh5c2ljYWwtZGFtYWdlLXN0cm9rZSB7XFxuICBzdHJva2U6ICNmZjU5NjQ7XFxufVxcbi5tb2RhbCAjdHJ1ZS1kYW1hZ2Utc3Ryb2tlIHtcXG4gIHN0cm9rZTogI2ZmZTc0YztcXG59XFxuQGtleWZyYW1lcyBwcm9ncmVzcyB7XFxuICAwJSB7XFxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDAgMTAwO1xcbiAgfVxcbn1cXG4ubW9kYWwgLnRvdGFsLWRhbWFnZS10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogNHB4O1xcbiAgdGV4dC1hbmNob3I6IG1pZGRsZTtcXG4gIGZpbGw6IHdoaXRlO1xcbn1cXG4ubW9kYWwgLnRvdGFsLWRhbWFnZS1sYWJlbCB7XFxuICBmb250LXNpemU6IDNweDtcXG4gIHRleHQtYW5jaG9yOiBtaWRkbGU7XFxuICBmaWxsOiB2YXIoLS1kYXJrLWdvbGQpO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLW1haW4tc3RhdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLWl0ZW0tYnVpbGRzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBlMDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBtYXgtaGVpZ2h0OiAxNy41cmVtO1xcbn1cXG4ubW9kYWwgLmRhbWFnZS1zdGF0cy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5tb2RhbCAuZGFtYWdlLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1heC1oZWlnaHQ6IDkyJTtcXG4gIGhlaWdodDogOTIlO1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcbi5tb2RhbCAuZGFtYWdlLXR5cGUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcbi5tb2RhbCAuZGFtYWdlLXN0YXRzIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcbi5tb2RhbCAjcGh5c2ljYWwtZGFtYWdlLWxhYmVsIHtcXG4gIGNvbG9yOiAjZmY1OTY0O1xcbn1cXG4ubW9kYWwgI21hZ2ljLWRhbWFnZS1sYWJlbCB7XFxuICBjb2xvcjogIzM1YTdmZjtcXG59XFxuLm1vZGFsICN0cnVlLWRhbWFnZS1sYWJlbCB7XFxuICBjb2xvcjogI2ZmZTc0YztcXG59XFxuLm1vZGFsIC5pdGVtLWRldGFpbHMtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBlMDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMDtcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHdpZHRoOiA0MCU7XFxuICByaWdodDogMTBlbTtcXG4gIG1hcmdpbi1ib3R0b206IDMuNWVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubW9kYWwgLml0ZW0tbmFtZSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4ubW9kYWwgLm1haW4taXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbn1cXG4ubW9kYWwgLmNvc3QtbGFiZWwge1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4ubW9kYWwgLmNvbXBvbmVudC1pdGVtcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLm1vZGFsIC5jb21wb25lbnQtaXRlbS1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLm1vZGFsIC5jb3N0LWFtb3VudCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5tb2RhbCAuY29tcG9uZW50LWl0ZW0tY29zdC1sYWJlbCB7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5tb2RhbCAuY29tcG9uZW50LWl0ZW0tYW1vdW50IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLm1vZGFsIC5jb21wb25lbnQtaXRlbS1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwZTA7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjA7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ubW9kYWwgLml0ZW0tc2V0cy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXgtaGVpZ2h0OiA5MCU7XFxufVxcbi5tb2RhbCAuaXRlbS1zZXQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGJvcmRlci13aWR0aDogMnB4O1xcbiAgcGFkZGluZzogMC40ZW07XFxufVxcbi5tb2RhbCAubWFpbi1jb21wb25lbnQtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBlMDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYwNDAwODM7XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDBlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG59XFxuLm1vZGFsIC5pdGVtLWltZyB7XFxuICBtYXgtd2lkdGg6IDIuN2VtO1xcbiAgbWF4LWhlaWdodDogMi43ZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG59XFxuLm1vZGFsIC5jb21wb25lbnQtaXRlbS1pbWcge1xcbiAgbWF4LXdpZHRoOiAxLjhlbTtcXG4gIG1heC1oZWlnaHQ6IDEuOGVtO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLW1hdGNodXBzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBlMDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBtYXgtaGVpZ2h0OiAyNS4ycmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwIDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcbi5tb2RhbCAubWF0Y2h1cHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgbWF4LXdpZHRoOiAyNHJlbTtcXG59XFxuLm1vZGFsIC5tYXRjaHVwLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNjFhO1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBtYXJnaW46IGF1dG8gMC41ZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxufVxcbi5tb2RhbCAubWF0Y2h1cC1pbmZvOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE2MWFjOTtcXG59XFxuLm1vZGFsIC5tYXRjaHVwLXN0YXRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgXFxcIkFwcGxlIFNEIEdvdGhpYyBOZW9cXFwiLCBBcHBsZUdvdGhpYywgRG90dW0sIEFyaWFsLCBUYWhvbWE7XFxufVxcbi5tb2RhbCAuZW5lbXktY2hhbXBpb24taW1nIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG1heC1oZWlnaHQ6IDNlbTtcXG4gIG1heC13aWR0aDogM2VtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcbi5tb2RhbCAud2lucmF0ZS1hZ2FpbnN0LXBlcmNlbnRhZ2UuYmx1ZSB7XFxuICBjb2xvcjogIzM1YTdmZjtcXG59XFxuLm1vZGFsIC53aW5yYXRlLWFnYWluc3QtcGVyY2VudGFnZS5yZWQge1xcbiAgY29sb3I6ICNmZjU5NjQ7XFxufVxcbi5tb2RhbCAjc2tpbnMtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXgtd2lkdGg6IDc1JTtcXG4gIG1pbi1oZWlnaHQ6IDQ5cmVtO1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWluLWhlaWdodDogMDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWF4LXdpZHRoOiA5OSU7XFxuICB3aWR0aDogOTklO1xcbn1cXG4ubW9kYWwgI3NraW5zLWNvbnRhaW5lciAubmF2aWdhdGlvbi1iYXIge1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IHZhcigtLWRhcmstZ29sZCk7XFxufVxcbi5tb2RhbCAjc2tpbnMtY29udGFpbmVyICNza2lucyB7XFxuICBjb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG59XFxuLm1vZGFsICNza2lucy1jb250YWluZXIgLm1vZGFsLWhlYWRlciB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4ubW9kYWwgLnNraW4taW1hZ2UtY29udGFpbmVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubW9kYWwgLnNraW4taW1hZ2UtY29udGFpbmVyLnNob3duIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4ubW9kYWwgLnNraW4taW1hZ2Uge1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubW9kYWwgLnNraW4tbmFtZSB7XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuLm1vZGFsICNza2lucy1jb250YWluZXIgLmNoYW1waW9uLWhlYWRpbmcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmltZy1zY3JvbGwtYXJyb3cge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuLm1vZGFsIC5pbWctc2Nyb2xsLWFycm93OmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTEyMHB4KSB7XFxuICAubW9kYWwgLmNvbXBvbmVudC1pdGVtLWltZyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAubW9kYWwgLml0ZW0tc2V0cy1jb250YWluZXIge1xcbiAgICBtaW4taGVpZ2h0OiA4MCU7XFxuICB9XFxuICAubW9kYWwgLml0ZW0tZGV0YWlscy1jb250YWluZXIge1xcbiAgICBtaW4td2lkdGg6IDcwJTtcXG4gICAgcmlnaHQ6IC02ZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjUwcHgpIHtcXG4gIC5tb2RhbCAuaXRlbS1pbWcge1xcbiAgICBtYXgtaGVpZ2h0OiAyLjJyZW07XFxuICAgIG1heC13aWR0aDogMi4ycmVtO1xcbiAgfVxcbiAgLm1vZGFsIC5jaGFtcGlvbi1kZXRhaWxzIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgfVxcbiAgLm1vZGFsIC5hYmlsaXRpZXMtY29udGFpbmVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgbWF4LXdpZHRoOiAzMXJlbTtcXG4gIH1cXG4gIC5tb2RhbCAubG9yZS1jb250YWluZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuICAubW9kYWwgI21haW4tY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiA3NnJlbTtcXG4gIH1cXG4gIC5tb2RhbCAuaXRlbS1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgIG1pbi13aWR0aDogNzAlO1xcbiAgICByaWdodDogLTZlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICAubW9kYWwgLml0ZW0tc2V0cy1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcbiAgLm1vZGFsIC5pdGVtLXNldC1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLm1vZGFsIC5tYXRjaHVwcyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAubW9kYWwgLmNoYW1waW9uLW1hdGNodXBzIHtcXG4gICAgbWF4LWhlaWdodDogMjguMnJlbTtcXG4gIH1cXG4gIC5tb2RhbCAubWF0Y2h1cC1pbmZvIHtcXG4gICAgbWFyZ2luOiAwLjJlbSBhdXRvO1xcbiAgfVxcbiAgLm1vZGFsICNtYWluLWNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG4gIC5tb2RhbCAjc3RhdHMtY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiA2M3JlbTtcXG4gIH1cXG4gIC5tb2RhbCAuaXRlbS1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgIHJpZ2h0OiAtMWVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogODQwcHgpIHtcXG4gIC5tb2RhbCAuZGFtYWdlLWluZm8ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgfVxcbiAgLm1vZGFsIC5nYW1lcy1wbGF5ZWQtYWdhaW5zdCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAubW9kYWwgLmRhbWFnZS1zdGF0cy1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTYwcHgpIHtcXG4gIC5tb2RhbCAuY2hhbXBpb24tbWFpbi1zdGF0cyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAubW9kYWwgLml0ZW0tc2V0LWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB9XFxuICAubW9kYWwgLml0ZW0tc2V0cy1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLm1vZGFsIC5jaGFtcGlvbi1kYW1hZ2UtY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgLm1vZGFsIC5kYW1hZ2Utc3RhdHMtaW5mbyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAubW9kYWwgLmRhbWFnZS1pbmZvIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICB9XFxuICAubW9kYWwgLmRhbWFnZS10eXBlLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMC4yZW0gYXV0bztcXG4gIH1cXG4gIC5tb2RhbCAuY2lyY3VsYXItY2hhcnQge1xcbiAgICBtYXgtaGVpZ2h0OiAxOTVweDtcXG4gICAgbWF4LXdpZHRoOiA4MCU7XFxuICB9XFxuICAubW9kYWwgLmRhbWFnZS1zdGF0cy1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLm1vZGFsIC5jaGFtcGlvbi1yb2xlIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xcbiAgfVxcbiAgLm1vZGFsIC5jaGFtcGlvbi1yZXNvdXJjZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcXG4gIH1cXG4gIC5tb2RhbCAuY2hhbXBpb24tcm9sZXMge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICB9XFxuICAubW9kYWwgLnNwZWxsLWltZyB7XFxuICAgIGhlaWdodDogMi44ZW07XFxuICAgIHdpZHRoOiAyLjhlbTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgfVxcbiAgLm1vZGFsIC5pdGVtLWRldGFpbHMtY29udGFpbmVyIHtcXG4gICAgcmlnaHQ6IDJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDQxNHB4KSB7XFxuICAubW9kYWwgLmNoYW1waW9uLXN0YXRzLW92ZXJ2aWV3IHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBtaW4td2lkdGg6IDE3cmVtO1xcbiAgfVxcbiAgLm1vZGFsIC5jaGFtcGlvbi1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcbiAgLm1vZGFsIC5tb2RhbC1uYXYtbGlua3Mge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICB9XFxuICAubW9kYWwgLmNsb3NlLW1vZGFsLWJ0bi13cmFwcGVyIHtcXG4gICAgbGVmdDogMC43ZW07XFxuICB9XFxuICAubW9kYWwgLmNsb3NlLW1vZGFsLWJ0biB7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMzAwcHgpIHtcXG4gIC5tb2RhbCAjc2tpbnMtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXgtd2lkdGg6IDcwJTtcXG4gICAgbWluLWhlaWdodDogYXV0bztcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDE5NTBweCkge1xcbiAgLm1vZGFsICNza2lucy1jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDUwJTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlc2hlZXRzL21vZGFscy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBOERBO0VBQ0Usa0RBQUE7QUEzREY7O0FBOERBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGlDQUFBO0FBM0RGO0FBNkRFO0VBakNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSw0RUFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUF1QkUsY0FBQTtBQS9DSjtBQWlESTtFQUNFLHVCQUFBO0FBL0NOO0FBbURFO0VBdEZBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBK0VFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUF4Q0o7QUEyQ0U7RUFDRSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUF6Q0o7QUE0Q0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUEx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LGdCQUFBO0VBcERKO0FBQ0Y7QUF1REU7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0VBckRKO0FBQ0Y7QUF3REU7RUFDRTtJQUNFLGNBQUE7RUF0REo7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1yYXNpbi1ibGFjazogIzFkMWUyYztcXG4gIC0tZGFyay1nb2xkOiAjOTI3NTQzO1xcbiAgLS1saWdodC1nb2xkOiAjYzdhYjZlO1xcbn1cXG5cXG5AbWl4aW4gY29udGFpbmVyQmFja2dyb3VuZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwZTA7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbn1cXG5cXG5AbWl4aW4gc3ViSGVhZGluZ1N0eWxlIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDAuNGVtO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5AbWl4aW4gaWNvblNpemUge1xcbiAgaGVpZ2h0OiAzLjVyZW07XFxuICB3aWR0aDogMy41cmVtO1xcbn1cXG5cXG5AbWl4aW4gaWNvblRleHQge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuQG1peGluIGljb25Db250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXG59XFxuXFxuQG1peGluIHNtYWxsTWFyZ2luIHtcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcblxcbkBtaXhpbiBtb2RhbENvbnRlbnRDb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMDtcXG4gIG1heC13aWR0aDogNzUlO1xcbiAgbWluLWhlaWdodDogNDlyZW07XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgcGFkZGluZzogMnJlbSAwO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC40KTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmFybG93XFxcIiwgc2Fucy1zZXJpZjtcXG5cXG4gICNtYWluLWNvbnRhaW5lciB7XFxuICAgIEBpbmNsdWRlIG1vZGFsQ29udGVudENvbnRhaW5lcigpO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG5cXG4gICAgI21haW4ge1xcbiAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgICB9XFxuICB9XFxuXFxuICAubW9kYWwtaGVhZGVyIHtcXG4gICAgQGluY2x1ZGUgY29udGFpbmVyQmFja2dyb3VuZCgpO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwYmY7XFxuICB9XFxuXFxuICAubmF2aWdhdGlvbi1iYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmNsb3NlLW1vZGFsLWJ0bi13cmFwcGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAxLjJlbTtcXG4gIH1cXG5cXG4gIC5jbG9zZS1tb2RhbC1idG4ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGZvbnQtc2l6ZTogMS42ZW07XFxuICB9ICBcXG5cXG4gIC5jbG9zZS1tb2RhbC1idG46aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICB9XFxuXFxuICAubW9kYWwtbmF2LWxpbmtzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAubW9kYWwtbmF2LWxpbmsge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIEBpbmNsdWRlIHNtYWxsTWFyZ2luKCk7XFxuICB9XFxuXFxuICAubW9kYWwtbmF2LWxpbms6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1oZWFkaW5nIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLW5hbWUge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICB9XFxuXFxuICAuY2hhbXBpb24tdGl0bGUge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgQGluY2x1ZGUgc21hbGxNYXJnaW4oKTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1yb2xlcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXJvbGUge1xcbiAgICBAaW5jbHVkZSBpY29uQ29udGFpbmVyKCk7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tcmVzb3VyY2Uge1xcbiAgICBAaW5jbHVkZSBpY29uQ29udGFpbmVyKCk7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tcm9sZS1pbWFnZSB7XFxuICAgIEBpbmNsdWRlIGljb25TaXplKCk7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tcmVzb3VyY2UtaW1hZ2Uge1xcbiAgICBAaW5jbHVkZSBpY29uU2l6ZSgpO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXJvbGUtbmFtZSB7XFxuICAgIEBpbmNsdWRlIGljb25UZXh0KCk7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tcmVzb3VyY2UtbmFtZSB7XFxuICAgIEBpbmNsdWRlIGljb25UZXh0KCk7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tbWFpbi1pbmZvIHtcXG4gICAgcGFkZGluZzogMS44cmVtO1xcbiAgICBtYXgtd2lkdGg6IDM0cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxhc3QgYmFzZWxpbmU7XFxuICB9XFxuXFxuICBALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XFxuICAgIGZyb20ge1xcbiAgICAgIHRvcDogLTMwMHB4O1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xcbiAgICBmcm9tIHtcXG4gICAgICB0b3A6IC0zMDBweDtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLmxvcmUtY29udGFpbmVyIHtcXG4gICAgQGluY2x1ZGUgY29udGFpbmVyQmFja2dyb3VuZCgpO1xcbiAgfVxcblxcbiAgLnN1YmhlYWRpbmcge1xcbiAgICBAaW5jbHVkZSBzdWJIZWFkaW5nU3R5bGUoKTtcXG4gIH1cXG5cXG4gIC5hYmlsaXRpZXMtY29udGFpbmVyIHtcXG4gICAgQGluY2x1ZGUgY29udGFpbmVyQmFja2dyb3VuZCgpO1xcbiAgICB3aWR0aDogMjhlbTtcXG4gIH1cXG5cXG4gIC5hYmlsaXRpZXMtaGVhZGluZyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5hYmlsaXR5LWltZ3Mge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgfVxcblxcbiAgLmFiaWxpdHktZGVzY3JpcHRpb24ge1xcbiAgICBAaW5jbHVkZSBzbWFsbE1hcmdpbigpO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLWRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1leHRyYS1pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5hYmlsaXR5LWluZm8ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmFiaWxpdHktaW5mby5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLnNwZWxsLWltZyB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luOiAwIDAuNXJlbTtcXG4gICAgaGVpZ2h0OiAzLjNyZW07XFxuICAgIHdpZHRoOiAzLjNyZW07XFxuICB9XFxuXFxuICAuc3BlbGwtaW1nLmNsaWNrZWQge1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICAgIGJvcmRlci13aWR0aDogNHB4O1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXRpcHMtc2VjdGlvbiB7XFxuICAgIEBpbmNsdWRlIGNvbnRhaW5lckJhY2tncm91bmQoKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG4gICAgbWF4LXdpZHRoOiAzNHJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXRpcHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXRpcCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gIH1cXG5cXG4gICNzdGF0cy1jb250YWluZXIge1xcbiAgICBAaW5jbHVkZSBtb2RhbENvbnRlbnRDb250YWluZXIoKTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG5cXG4gICAgI3N0YXRzIHtcXG4gICAgICBjb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLmNoYW1waW9uLXN0YXRzLW92ZXJ2aWV3IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIEBpbmNsdWRlIHNtYWxsTWFyZ2luKCk7XFxuICAgIG1heC13aWR0aDogMjVyZW07XFxuICAgIG1pbi13aWR0aDogMjByZW07XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gIH1cXG5cXG4gIC53aW4tcmF0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAucGljay1yYXRlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5sYW5lLWluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLnBpY2stcmF0ZS12YWx1ZSB7XFxuICAgIG1hcmdpbi10b3A6IDAuNGVtO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICB9XFxuXFxuICAud2luLXJhdGUtdmFsdWUge1xcbiAgICBtYXJnaW4tdG9wOiAwLjRlbTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgfVxcblxcbiAgLmxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLWRhbWFnZS1jb250YWluZXIge1xcbiAgICBAaW5jbHVkZSBjb250YWluZXJCYWNrZ3JvdW5kKCk7XFxuICAgIG1heC1oZWlnaHQ6IDE3LjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgfVxcblxcbiAgLmRhbWFnZS1oZWFkaW5nIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmNpcmN1bGFyLWNoYXJ0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWF4LWhlaWdodDogMTRlbTtcXG4gIH1cXG5cXG4gIC5jaXJjbGUge1xcbiAgICBmaWxsOiBub25lO1xcbiAgICBzdHJva2Utd2lkdGg6IDIuMjtcXG4gICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xcbiAgICBhbmltYXRpb246IHByb2dyZXNzIDFzIGVhc2Utb3V0IGZvcndhcmRzO1xcbiAgfVxcblxcbiAgI21hZ2ljLWRhbWFnZS1zdHJva2Uge1xcbiAgICBzdHJva2U6ICMzNWE3ZmY7XFxuICB9XFxuXFxuICAjcGh5c2ljYWwtZGFtYWdlLXN0cm9rZSB7XFxuICAgIHN0cm9rZTogI2ZmNTk2NDtcXG4gIH1cXG5cXG4gICN0cnVlLWRhbWFnZS1zdHJva2Uge1xcbiAgICBzdHJva2U6ICNmZmU3NGM7XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIHByb2dyZXNzIHtcXG4gICAgMCUge1xcbiAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDAgMTAwO1xcbiAgICB9XFxuICB9XFxuXFxuICAudG90YWwtZGFtYWdlLXRleHQge1xcbiAgICBmb250LXNpemU6IDRweDtcXG4gICAgdGV4dC1hbmNob3I6IG1pZGRsZTtcXG4gICAgZmlsbDogd2hpdGU7XFxuICB9XFxuXFxuICAudG90YWwtZGFtYWdlLWxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAzcHg7XFxuICAgIHRleHQtYW5jaG9yOiBtaWRkbGU7XFxuICAgIGZpbGw6IHZhcigtLWRhcmstZ29sZCk7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tbWFpbi1zdGF0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLWl0ZW0tYnVpbGRzIHtcXG4gICAgQGluY2x1ZGUgY29udGFpbmVyQmFja2dyb3VuZCgpO1xcbiAgICBtYXgtaGVpZ2h0OiAxNy41cmVtO1xcbiAgfVxcblxcbiAgLmRhbWFnZS1zdGF0cy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5kYW1hZ2UtaW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1heC1oZWlnaHQ6IDkyJTtcXG4gICAgaGVpZ2h0OiA5MiU7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgfVxcblxcbiAgLmRhbWFnZS10eXBlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgfVxcblxcbiAgLmRhbWFnZS1zdGF0cyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB9XFxuXFxuICAjcGh5c2ljYWwtZGFtYWdlLWxhYmVsIHtcXG4gICAgY29sb3I6ICNmZjU5NjQ7XFxuICB9XFxuXFxuICAjbWFnaWMtZGFtYWdlLWxhYmVsIHtcXG4gICAgY29sb3I6ICMzNWE3ZmY7XFxuICB9XFxuXFxuICAjdHJ1ZS1kYW1hZ2UtbGFiZWwge1xcbiAgICBjb2xvcjogI2ZmZTc0YztcXG4gIH1cXG5cXG4gIC5pdGVtLWRldGFpbHMtY29udGFpbmVyIHtcXG4gICAgQGluY2x1ZGUgY29udGFpbmVyQmFja2dyb3VuZCgpO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgcmlnaHQ6IDEwZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDMuNWVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuaXRlbS1uYW1lIHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgfVxcblxcbiAgLm1haW4taXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gIH1cXG5cXG4gIC5jb3N0LWxhYmVsIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICB9XFxuXFxuICAuY29tcG9uZW50LWl0ZW1zLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxuXFxuICAuY29tcG9uZW50LWl0ZW0tbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gIH1cXG5cXG4gIC5jb3N0LWFtb3VudCB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gIH1cXG5cXG4gIC5jb21wb25lbnQtaXRlbS1jb3N0LWxhYmVsIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICB9XFxuXFxuICAuY29tcG9uZW50LWl0ZW0tYW1vdW50IHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgfVxcblxcbiAgLmNvbXBvbmVudC1pdGVtLWRldGFpbHMtY29udGFpbmVyIHtcXG4gICAgQGluY2x1ZGUgY29udGFpbmVyQmFja2dyb3VuZCgpO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5pdGVtLXNldHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1heC1oZWlnaHQ6IDkwJTtcXG4gIH1cXG5cXG4gIC5pdGVtLXNldC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcbiAgICBwYWRkaW5nOiAwLjRlbTtcXG4gIH1cXG5cXG4gIC5tYWluLWNvbXBvbmVudC1jb250YWluZXIge1xcbiAgICBAaW5jbHVkZSBjb250YWluZXJCYWNrZ3JvdW5kKCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjA0MDA4MztcXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogMGVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgfVxcblxcbiAgLml0ZW0taW1nIHtcXG4gICAgbWF4LXdpZHRoOiAyLjdlbTtcXG4gICAgbWF4LWhlaWdodDogMi43ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gICAgLy9wYWRkaW5nOiAxZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xcbiAgfVxcblxcbiAgLmNvbXBvbmVudC1pdGVtLWltZyB7XFxuICAgIG1heC13aWR0aDogMS44ZW07XFxuICAgIG1heC1oZWlnaHQ6IDEuOGVtO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLW1hdGNodXBzIHtcXG4gICAgQGluY2x1ZGUgY29udGFpbmVyQmFja2dyb3VuZCgpO1xcbiAgICBtYXgtaGVpZ2h0OiAyNS4ycmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMCAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIH1cXG5cXG4gIC5tYXRjaHVwcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBtYXgtd2lkdGg6IDI0cmVtO1xcbiAgfVxcblxcbiAgLm1hdGNodXAtaW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzE2MWE7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBtYXJnaW46IGF1dG8gMC41ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIH1cXG5cXG4gIC5tYXRjaHVwLWluZm86aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNjFhYzk7XFxuICB9XFxuXFxuICAubWF0Y2h1cC1zdGF0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgXFxcIkFwcGxlIFNEIEdvdGhpYyBOZW9cXFwiLCBBcHBsZUdvdGhpYyxcXG4gICAgICBEb3R1bSwgQXJpYWwsIFRhaG9tYTtcXG4gIH1cXG5cXG4gIC5lbmVteS1jaGFtcGlvbi1pbWcge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG1heC1oZWlnaHQ6IDNlbTtcXG4gICAgbWF4LXdpZHRoOiAzZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbiAgfVxcblxcbiAgLndpbnJhdGUtYWdhaW5zdC1wZXJjZW50YWdlLmJsdWUge1xcbiAgICBjb2xvcjogIzM1YTdmZjtcXG4gIH1cXG5cXG4gIC53aW5yYXRlLWFnYWluc3QtcGVyY2VudGFnZS5yZWQge1xcbiAgICBjb2xvcjogI2ZmNTk2NDtcXG4gIH1cXG5cXG4gICNza2lucy1jb250YWluZXIge1xcbiAgICBAaW5jbHVkZSBtb2RhbENvbnRlbnRDb250YWluZXIoKTtcXG4gICAgZGlzcGxheTpub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1pbi1oZWlnaHQ6IDA7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDk5JTtcXG4gICAgd2lkdGg6IDk5JTtcXG5cXG4gICAgLm5hdmlnYXRpb24tYmFyIHtcXG4gICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggdmFyKC0tZGFyay1nb2xkKTtcXG4gICAgfVxcblxcbiAgICAjc2tpbnMge1xcbiAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpXFxuICAgIH1cXG4gIH1cXG5cXG4gICNza2lucy1jb250YWluZXIgLm1vZGFsLWhlYWRlciB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICB9XFxuXFxuICAuc2tpbi1pbWFnZS1jb250YWluZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAuc2tpbi1pbWFnZS1jb250YWluZXIuc2hvd24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG4gIC5za2luLWltYWdlIHtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5za2luLW5hbWUge1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gIH1cXG5cXG4gICNza2lucy1jb250YWluZXIgLmNoYW1waW9uLWhlYWRpbmcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5pbWctc2Nyb2xsLWFycm93IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgfVxcblxcbiAgLmltZy1zY3JvbGwtYXJyb3c6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIH1cXG5cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMTIwcHgpIHtcXG4gICAgLmNvbXBvbmVudC1pdGVtLWltZyB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAuaXRlbS1zZXRzLWNvbnRhaW5lciB7XFxuICAgICAgbWluLWhlaWdodDogODAlO1xcbiAgICB9XFxuXFxuICAgIC5pdGVtLWRldGFpbHMtY29udGFpbmVyIHtcXG4gICAgICBtaW4td2lkdGg6IDcwJTtcXG4gICAgICByaWdodDogLTZlbTtcXG4gICAgfVxcbiAgfVxcblxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyNTBweCkge1xcbiAgICAuaXRlbS1pbWcge1xcbiAgICAgIG1heC1oZWlnaHQ6IDIuMnJlbTtcXG4gICAgICBtYXgtd2lkdGg6IDIuMnJlbTtcXG4gICAgfVxcblxcbiAgICAuY2hhbXBpb24tZGV0YWlscyB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgICB9XFxuXFxuICAgIC5hYmlsaXRpZXMtY29udGFpbmVyIHtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgd2lkdGg6IGF1dG87XFxuICAgICAgbWF4LXdpZHRoOiAzMXJlbTtcXG4gICAgfVxcblxcbiAgICAubG9yZS1jb250YWluZXIge1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAjbWFpbi1jb250YWluZXIge1xcbiAgICAgIGhlaWdodDogNzZyZW07XFxuICAgIH1cXG5cXG4gICAgLml0ZW0tZGV0YWlscy1jb250YWluZXIge1xcbiAgICAgIG1pbi13aWR0aDogNzAlO1xcbiAgICAgIHJpZ2h0OiAtNmVtO1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gICAgLml0ZW0tc2V0cy1jb250YWluZXIge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIH1cXG5cXG4gICAgLml0ZW0tc2V0LWNvbnRhaW5lciB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAubWF0Y2h1cHMge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgLmNoYW1waW9uLW1hdGNodXBzIHtcXG4gICAgICBtYXgtaGVpZ2h0OiAyOC4ycmVtO1xcbiAgICB9XFxuXFxuICAgIC5tYXRjaHVwLWluZm8ge1xcbiAgICAgIG1hcmdpbjogMC4yZW0gYXV0bztcXG4gICAgfVxcblxcbiAgICAjbWFpbi1jb250YWluZXIge1xcbiAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAjc3RhdHMtY29udGFpbmVyIHtcXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgICAgbWluLWhlaWdodDogNjNyZW07XFxuICAgIH1cXG5cXG4gICAgLml0ZW0tZGV0YWlscy1jb250YWluZXIge1xcbiAgICAgIHJpZ2h0OiAtMWVtO1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgKG1heC13aWR0aDogODQwcHgpIHtcXG4gICAgLmRhbWFnZS1pbmZvIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgfVxcblxcbiAgICAuZ2FtZXMtcGxheWVkLWFnYWluc3Qge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLmRhbWFnZS1zdGF0cy1jb250YWluZXIge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NjBweCkge1xcbiAgICAuY2hhbXBpb24tbWFpbi1zdGF0cyB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAuaXRlbS1zZXQtY29udGFpbmVyIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICB9XFxuXFxuICAgIC5pdGVtLXNldHMtY29udGFpbmVyIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5jaGFtcGlvbi1kYW1hZ2UtY29udGFpbmVyIHtcXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAuZGFtYWdlLXN0YXRzLWluZm8ge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgLmRhbWFnZS1pbmZvIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICB9XFxuXFxuICAgIC5kYW1hZ2UtdHlwZS1jb250YWluZXIge1xcbiAgICAgIG1hcmdpbjogMC4yZW0gYXV0bztcXG4gICAgfVxcblxcbiAgICAuY2lyY3VsYXItY2hhcnQge1xcbiAgICAgIG1heC1oZWlnaHQ6IDE5NXB4O1xcbiAgICAgIG1heC13aWR0aDogODAlO1xcbiAgICB9XFxuXFxuICAgIC5kYW1hZ2Utc3RhdHMtY29udGFpbmVyIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5jaGFtcGlvbi1yb2xlIHtcXG4gICAgICBtYXJnaW4tbGVmdDogMC41ZW07XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcXG4gICAgfVxcblxcbiAgICAuY2hhbXBpb24tcmVzb3VyY2Uge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xcbiAgICB9XFxuXFxuICAgIC5jaGFtcGlvbi1yb2xlcyB7XFxuICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB9XFxuXFxuICAgIC5zcGVsbC1pbWcge1xcbiAgICAgIGhlaWdodDogMi44ZW07XFxuICAgICAgd2lkdGg6IDIuOGVtO1xcbiAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgfVxcblxcbiAgICAuaXRlbS1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgICAgcmlnaHQ6IDJlbTtcXG4gICAgfVxcbiAgfVxcblxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQxNHB4KSB7XFxuICAgIC5jaGFtcGlvbi1zdGF0cy1vdmVydmlldyB7XFxuICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgIG1pbi13aWR0aDogMTdyZW07XFxuICAgIH1cXG5cXG4gICAgLmNoYW1waW9uLW5hbWUge1xcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgfVxcblxcbiAgICAubW9kYWwtbmF2LWxpbmtzIHtcXG4gICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIH1cXG5cXG4gICAgLmNsb3NlLW1vZGFsLWJ0bi13cmFwcGVyIHtcXG4gICAgICBsZWZ0OiAwLjdlbTtcXG4gICAgfVxcblxcbiAgICAuY2xvc2UtbW9kYWwtYnRuIHtcXG4gICAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgKG1pbi13aWR0aDogMTMwMHB4KSB7XFxuICAgICNza2lucy1jb250YWluZXIge1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICBtYXgtd2lkdGg6IDcwJTtcXG4gICAgICBtaW4taGVpZ2h0OiBhdXRvO1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgKG1pbi13aWR0aDogMTk1MHB4KSB7XFxuICAgICNza2lucy1jb250YWluZXIge1xcbiAgICAgIG1heC13aWR0aDogNTAlO1xcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBkZWZpbmUoSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIGRlZmluZShHcCwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gIGRlZmluZShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvbik7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgZGVmaW5lKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlLCBhc3luY0l0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIGRlZmluZShHcCwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcblxuICBkZWZpbmUoR3AsIFwidG9TdHJpbmdcIiwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIGluIG1vZGVybiBlbmdpbmVzXG4gIC8vIHdlIGNhbiBleHBsaWNpdGx5IGFjY2VzcyBnbG9iYWxUaGlzLiBJbiBvbGRlciBlbmdpbmVzIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gXCJvYmplY3RcIikge1xuICAgIGdsb2JhbFRoaXMucmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbiAgfSBlbHNlIHtcbiAgICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xuICB9XG59XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NoYW1waW9ucy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2hhbXBpb25zLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFscy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9kYWxzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwidmFyIG1hcCA9IHtcblx0XCIuL0Fzc2Fzc2luLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvQXNzYXNzaW4ucG5nXCIsXG5cdFwiLi9CbG9vZCBXZWxsLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvQmxvb2QgV2VsbC5wbmdcIixcblx0XCIuL0JvdHRvbS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0JvdHRvbS5wbmdcIixcblx0XCIuL0NvbnRyb2xsZXIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9Db250cm9sbGVyLnBuZ1wiLFxuXHRcIi4vQ291cmFnZS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0NvdXJhZ2UucG5nXCIsXG5cdFwiLi9Dcmltc29uIFJ1c2gucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9Dcmltc29uIFJ1c2gucG5nXCIsXG5cdFwiLi9FbmVyZ3kucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9FbmVyZ3kucG5nXCIsXG5cdFwiLi9GaWdodGVyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvRmlnaHRlci5wbmdcIixcblx0XCIuL0Zsb3cucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9GbG93LnBuZ1wiLFxuXHRcIi4vRnVyeS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0Z1cnkucG5nXCIsXG5cdFwiLi9Hcml0LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvR3JpdC5wbmdcIixcblx0XCIuL0hlYXQucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9IZWF0LnBuZ1wiLFxuXHRcIi4vSnVuZ2xlLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvSnVuZ2xlLnBuZ1wiLFxuXHRcIi4vTWFnZS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL01hZ2UucG5nXCIsXG5cdFwiLi9NYW5hLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvTWFuYS5wbmdcIixcblx0XCIuL01hbmFsZXNzLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvTWFuYWxlc3MucG5nXCIsXG5cdFwiLi9NYXJrc21hbi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL01hcmtzbWFuLnBuZ1wiLFxuXHRcIi4vTWVsZWUucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9NZWxlZS5wbmdcIixcblx0XCIuL01pZGRsZS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL01pZGRsZS5wbmdcIixcblx0XCIuL1JhZ2UucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9SYWdlLnBuZ1wiLFxuXHRcIi4vUmFuZ2VkLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvUmFuZ2VkLnBuZ1wiLFxuXHRcIi4vU3BlY2lhbGlzdC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL1NwZWNpYWxpc3QucG5nXCIsXG5cdFwiLi9TdXBwb3J0LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvU3VwcG9ydC5wbmdcIixcblx0XCIuL1RhbmsucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9UYW5rLnBuZ1wiLFxuXHRcIi4vVG9wLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvVG9wLnBuZ1wiLFxuXHRcIi4vVXRpbGl0eS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL1V0aWxpdHkucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMgc3luYyBcXFxcLihwbmd8anBlP2d8c3ZnKSRcIjsiLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9zdHlsZXNoZWV0cy9tb2RhbHMuc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGVzaGVldHMvY2hhbXBpb25zLnNjc3MnO1xuaW1wb3J0IGNoYW1waW9uc1BhZ2UgZnJvbSAnLi90ZW1wbGF0ZXMvY2hhbXBpb25zUGFnZSc7XG5pbXBvcnQgQ2hhbXBpb25zUGFnZUNvbnRyb2xsZXIgZnJvbSAnLi9hcHBDb250cm9sL2NoYW1waW9uc1BhZ2VDb250cm9sbGVyJztcbmltcG9ydCBTZWFyY2hiYXJDb250cm9sbGVyIGZyb20gJy4vYXBwQ29udHJvbC9zZWFyY2hiYXJDb250cm9sbGVyJztcblxuY29uc3QgY3JlYXRlQ2hhbXBpb25zUGFnZSA9ICgpID0+IHtcbiAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgY2hhbXBpb25zUGFnZSgpO1xuICAgIENoYW1waW9uc1BhZ2VDb250cm9sbGVyLmNoYW1waW9uc1BhZ2VMaXN0ZW5lcnMoKTtcbiAgICBTZWFyY2hiYXJDb250cm9sbGVyLnNlYXJjaENvbnRhaW5lckxpc3RlbmVycygpO1xuICAgIGNvbnN0IGNoYW1waW9uSWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2hhbXBpb25JZCcpO1xuICAgIGlmIChjaGFtcGlvbklkKSB7XG4gICAgICBDaGFtcGlvbnNQYWdlQ29udHJvbGxlci5kaXNwbGF5Q2hhbXBpb25Nb2RhbChjaGFtcGlvbklkKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgIH1cbiAgfSwgNTAwKTtcbn07XG5jcmVhdGVDaGFtcGlvbnNQYWdlKCk7XG4iXSwibmFtZXMiOlsiQ2hhbXBpb25Nb2RhbENvbnRyb2xsZXIiLCJ0b2dnbGVBY3RpdmVBYmlsaXR5IiwiY2xpY2tlZEFiaWxpdHlJZCIsImFiaWxpdHlJbWFnZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhYmlsaXR5SW5mb3MiLCJmb3JFYWNoIiwiaW1nIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiaW5mbyIsImNsaWNrZWRJbWFnZSIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc05hbWUiLCJhY3RpdmVBYmlsaXR5IiwiY2hhbmdlTW9kYWxUZW1wbGF0ZSIsImNsaWNrZWRNb2RhbE5hdkxpbmsiLCJ0ZW1wbGF0ZXMiLCJ0ZW1wbGF0ZSIsInRlbXBsYXRlTmFtZSIsImlkIiwic3Vic3RyaW5nIiwiaW5kZXhPZiIsImNob3NlblRlbXBsYXRlIiwic3R5bGUiLCJkaXNwbGF5IiwiaGlkZGVuVGVtcGxhdGUiLCJkaXNwYXlJdGVtRGV0YWlscyIsImhvdmVyZWRJdGVtSW1hZ2UiLCJpdGVtRGV0YWlscyIsIm5leHRFbGVtZW50U2libGluZyIsImhpZGVJdGVtRGV0YWlscyIsInVuaG92ZXJlZEl0ZW1JbWFnZSIsInRvZ2dsZVNraW5JbWFnZXMiLCJhcnJvd0NsYXNzTGlzdCIsInNraW5JbWFnZXNDb250YWluZXIiLCJjdXJyZW50U2hvd25JbWFnZSIsInNraW5OYW1lIiwiZmlyc3RJbWFnZSIsImZpcnN0RWxlbWVudENoaWxkIiwibGFzdEltYWdlIiwibGFzdEVsZW1lbnRDaGlsZCIsImluY2x1ZGVzIiwidGV4dENvbnRlbnQiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwiY2xlYXJNYWluTW9kYWwiLCJtYWluQ29udGFpbmVyIiwiY2hhbXBpb25OYW1lIiwiY2hhbXBpb25UaXRsZSIsImNoYW1waW9uUm9sZXMiLCJjaGFtcGlvbkxvcmUiLCJhYmlsaXR5RGV0YWlscyIsImNoYW1waW9uVGlwcyIsIm1haW5Nb2RhbEhlYWRlciIsImVsZW1lbnQiLCJjdXJyZW50RWxlbWVudCIsImNsZWFyU3RhdHNNb2RhbCIsInN0YXRzQ29udGFpbmVyIiwiY2hhbXBpb25TdGF0c092ZXJ2aWV3IiwiYWxsZGFtYWdlU3RhdHMiLCJpdGVtU2V0c0NvbnRhaW5lciIsImJlc3RNYXRjaHVwcyIsIndvcnN0TWF0Y2h1cHMiLCJzdGF0c01vZGFsSGVhZGVyIiwiZGFtYWdlU3RhdCIsImRhbWFnZVN0YXRFbGVtZW50Iiwic3RhdHNNb2RhbENvbnRlbnQiLCJjb250ZW50IiwiY29udGVudEVsZW1lbnQiLCJjbGVhclNraW5zTW9kYWwiLCJjbG9zZUNoYW1waW9uTW9kYWwiLCJtb2RhbCIsInNraW5zQ29udGFpbmVyIiwibW9kYWxDbGlja0V2ZW50cyIsImV2ZW50IiwidGFyZ2V0IiwiZGFzaEluZGV4IiwiYWJpbGl0eUlkIiwic2xpY2UiLCJBcnJheSIsImZyb20iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibW9kYWxNb3VzZW92ZXJFdmVudHMiLCJtb2RhbE1vdXNlb3V0RXZlbnRzIiwicmVsYXRlZFRhcmdldCIsInBhcmVudE5vZGUiLCJtb2RhbEFycm93RXZlbnRzIiwia2V5IiwicmlnaHRBcnJvdyIsImxlZnRBcnJvdyIsIm1vZGFsQ2hhbmdlTGlzdGVuZXJzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImdldENoYW1waW9uRGV0YWlscyIsImdldENoYW1waW9uU3RhdHMiLCJjaGFtcGlvbkRldGFpbHNNb2RhbCIsImNoYW1waW9uU3RhdHNNb2RhbCIsImNoYW1waW9uU2tpbnNNb2RhbCIsIkNoYW1waW9uRmlsdGVyIiwiU29ydENoYW1waW9ucyIsImdldEFsbENoYW1waW9uRGV0YWlscyIsImdldEFsbENoYW1waW9uU3RhdHMiLCJnZXRMYXRlc3RWZXJzaW9uIiwiQ2hhbXBpb25zUGFnZUNvbnRyb2xsZXIiLCJkaXNwbGF5RHJvcGRvd25PcHRpb25zIiwiZHJvcGRvd25PcHRpb25zIiwiYWxsRHJvcGRvd25PcHRpb25zIiwib3B0aW9ucyIsIm9wdGlvbnNTdHlsZSIsImRyb3Bkb3duT3B0aW9uc1N0eWxlIiwiaGlkZURyb3Bkb3duT3B0aW9ucyIsImRyb3Bkb3duT3B0aW9uc1RvZ2dsZSIsImRyb3Bkb3duQnRuIiwicGFyZW50RWxlbWVudCIsImRpc3BsYXlDaGFtcGlvbk1vZGFsIiwiY2hhbXBpb25JZCIsImxhdGVzdFZlcnNpb24iLCJjaGFtcGlvbkRldGFpbHMiLCJjaGFtcGlvblN0YXRzIiwic2VsZWN0TGFuZUZpbHRlck9wdGlvbiIsImNsaWNrZWRMYW5lT3B0aW9uIiwiY2hhbXBpb25zU2VjdGlvbiIsImFjdGl2ZUxhbmVPcHRpb24iLCJ2aXNpYmlsaXR5IiwiYWRkIiwiY2hlY2tMYW5lRmlsdGVyT3B0aW9uIiwiYWxsQ2hhbXBpb25TdGF0cyIsImxhbmVOYW1lIiwiZmlsdGVyQnlMYW5lIiwiY2hlY2tTb3J0aW5nT3B0aW9uIiwiYWN0aXZlU29ydGluZ09wdGlvbiIsInNvcnRCeURlZmF1bHRPcmRlciIsInNvcnRDaGFtcGlvbnNCeVdpbnJhdGUiLCJzb3J0Q2hhbXBpb25zQnlQaWNrcmF0ZSIsInNvcnRDaGFtcGlvbnNCeURhbWFnZURvbmUiLCJjaGVja0FjdGl2ZVJvbGVPcHRpb25zIiwiYWxsQ2hhbXBpb25EZXRhaWxzIiwiYWN0aXZlUm9sZU9wdGlvbnMiLCJsZW5ndGgiLCJhY3RpdmVSb2xlcyIsIm1hcCIsImFjdGl2ZVJvbGVPcHRpb24iLCJhY3RpdmVSb2xlIiwiZmlsdGVyQnlSb2xlIiwiY2hlY2tBY3RpdmVEaWZmaWN1bHR5T3B0aW9ucyIsImFjdGl2ZURpZmZpY3VsdHlPcHRpb25zIiwiYWN0aXZlRGlmZmljdWx0aWVzIiwiYWN0aXZlRGlmZmljdWx0eU9wdGlvbiIsImFjdGl2ZURpZmZpY3VsdHkiLCJmaWx0ZXJCeURpZmZpY3VsdHkiLCJzZWxlY3RNdWx0aURyb3Bkb3duT3B0aW9uIiwiZHJvcGRvd25PcHRpb24iLCJkZXNlbGVjdERyb3Bkb3duT3B0aW9uIiwidG9nZ2xlRHJvcGRvd25PcHRpb24iLCJzZWxlY3RTaW5nbGVEcm9wZG93bk9wdGlvbiIsImFjdGl2ZURyb3Bkb3duT3B0aW9uIiwicmVkaXJlY3RUb0Zyb250UGFnZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImNoYW1waW9uc1BhZ2VDbGlja0V2ZW50cyIsImNoZWNrT3B0aW9ucyIsImhpZGVDaGFtcGlvbnNTZWN0aW9uIiwic2hvd0NoYW1waW9uc1NlY3Rpb24iLCJyZW1vdmVDaGFtcGlvbnNQYWdlTGlzdGVuZXIiLCJjaGFtcGlvbnNQYWdlIiwiYWRkQ2hhbXBpb25zUGFnZUxpc3RlbmVyIiwic2hvd0xvYWRlciIsImxvYWRlciIsImhpZGVMb2FkZXIiLCJmaWx0ZXJBbmRTb3J0Q2hhbXBpb25zU2VjdGlvbiIsIndhaXRUaW1lIiwic2V0VGltZW91dCIsImRhdGFzZXQiLCJjaGFtcGlvbnNQYWdlS2V5RXZlbnRzIiwiYWN0aXZlRWxlbWVudCIsImNoYW1waW9uc1BhZ2VMaXN0ZW5lcnMiLCJjcmVhdGVDaGFtcGlvbkNvbnRhaW5lciIsInJlbmRlckFsbENoYW1waW9ucyIsImNoYW1waW9uIiwiY2xlYXJDaGFtcGlvbnNTZWN0aW9uIiwic2hvd0NoYW1waW9uIiwiaGlkZUNoYW1waW9uIiwiY2xpY2tlZExhbmUiLCJhbGxDaGFtcGlvbnMiLCJyZXN1bHRzIiwicHVzaCIsIlByb21pc2UiLCJhbGwiLCJjaGFtcGlvbkxhbmUiLCJsYW5lIiwiY2hhbXBpb25FbGVtZW50IiwidG9Mb3dlckNhc2UiLCJjaGFtcGlvbkVsZW1lbnRzIiwicm9sZU1hdGNoRm91bmQiLCJyb2xlIiwidGFncyIsImNoYW1waW9uUm9sZSIsImNhdGVnb3Jpc2VEaWZmaWN1bHR5TnVtIiwiZGlmZmljdWx0eU51bSIsImRpZmZpY3VsdHlNYXRjaEZvdW5kIiwiZGlmZmljdWx0eSIsImNoYW1waW9uRGlmZmljdWx0eU51bSIsImNoYW1waW9uRGlmZmljdWx0eSIsIlNlYXJjaGJhckNvbnRyb2xsZXIiLCJzaG93QXV0b0NvbXBsZXRlTmFtZXMiLCJzZWFyY2hDb250YWluZXIiLCJhdXRvQ29tcGxldGVOYW1lcyIsImhpZGVBdXRvQ29tcGxldGVOYW1lcyIsImF1dG9Db21wbGV0ZU5hbWVFbGVtZW50cyIsImF1dG9Db21wbGV0ZU5hbWVFbGVtZW50Iiwic2VhcmNoYmFyRm9jdXNJbkV2ZW50IiwiZm9jdXMiLCJzZWFyY2hiYXJGb2N1c291dEV2ZW50Iiwic2VhcmNoQmFySW5wdXRFdmVudCIsImlucHV0VmFsdWUiLCJ2YWx1ZSIsImF1dG9Db21wbGV0ZU5hbWUiLCJuYW1lIiwic2VhcmNoYmFyS2V5ZG93bkV2ZW50cyIsInByZXZlbnREZWZhdWx0IiwiYWN0aW9uIiwiQXJyb3dVcCIsIkFycm93RG93biIsImZpbHRlciIsImlzU2hvd2luZyIsInVuZGVmaW5lZCIsImdvVG9TdGFydCIsImNoaWxkcmVuIiwic2VhcmNoQ29udGFpbmVyQ2xhc3NOYW1lIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInNlYXJjaGJhckNsaWNrRXZlbnRzIiwiY2xpY2tBdXRvQ29tcGxldGVOYW1lIiwiZmlyc3RDaGlsZCIsInNlYXJjaENvbnRhaW5lckxpc3RlbmVycyIsInZpc2libGl0eSIsInJlY3JlYXRlQ2hhbXBpb25zU2VjdGlvbiIsImNoYW1waW9ucyIsImZpbHRlckNoYW1waW9ucyIsImZpbHRlcmVkQ2hhbXBpb25TdGF0cyIsImZpbHRlcmVkQ2hhbXBpb25zU29ydGVkIiwic29ydCIsImEiLCJiIiwid2luUmF0ZSIsInBpY2tSYXRlIiwiZGFtYWdlUGVyTWF0Y2giLCJ0b3RhbERhbWFnZSIsImZldGNoQ2hhbXBpb25EZXRhaWxzIiwiZmV0Y2giLCJtb2RlIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImdldENoYW1waW9uUGFzc2l2ZXMiLCJwYXNzaXZlRGF0YSIsInBhc3NpdmUiLCJwYXNzaXZlTmFtZSIsInBhc3NpdmVEZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uIiwicGFzc2l2ZUlkIiwiaW1hZ2UiLCJmdWxsIiwicGFzc2l2ZUltZ1VybCIsImdldENoYW1waW9uU3BlbGxzIiwic3BlbGxzRGF0YSIsInNwZWxscyIsInNwZWxsIiwic3BlbGxPYmplY3QiLCJjb3N0QnVybiIsImNvc3RUeXBlIiwiY29vbGRvd24iLCJjb29sZG93bkJ1cm4iLCJpbWdVcmwiLCJjaGFtcGlvblBhc3NpdmUiLCJ0aXRsZSIsInJlcGxhY2UiLCJ0b1VwcGVyQ2FzZSIsInBhcnR5cGUiLCJhbGx5dGlwcyIsImxvcmUiLCJyb2xlcyIsInNraW5zIiwicmVzb3VyY2UiLCJ0aXBzIiwiZmV0Y2hDaGFtcGlvblN0YXRzIiwiZGV2VXJsIiwidG9GaXhlZCIsImtkYSIsImtkYVJhdGlvIiwiaXRlbVNldHMiLCJpdGVtQ2hvaWNlcyIsImJlc3RNYXRjaFVwcyIsIm1hdGNoVXBzIiwid29yc3RNYXRjaFVwcyIsInZlcnNpb25zUmVzcG9uc2UiLCJ2ZXJzaW9ucyIsImNoYW1waW9uc1Jlc3BvbnNlIiwidmVyc2lvblJlc3BvbnNlIiwiZmV0Y2hBbGxJdGVtcyIsImFsbEl0ZW1zIiwiSXRlbUluZm8iLCJpdGVtSWQiLCJnZXRJdGVtRGV0YWlscyIsIml0ZW1JbWFnZUlkIiwiaW1hZ2VVcmwiLCJjb21wb25lbnRJdGVtSWRzIiwiY29tcG9uZW50SXRlbURldGFpbHMiLCJjb3N0IiwiZ29sZCIsInRvdGFsIiwiZ2V0SXRlbUltYWdlIiwiY29tcG9uZW50SXRlbXMiLCJnZXRDb21wb25lbnRJdGVtcyIsIkVsZW1lbnRDcmVhdGlvbiIsIkRyb3Bkb3duU2VjdGlvbiIsImRyb3Bkb3duTmFtZSIsIm9wdGlvbnNBcnJheSIsImZpbHRlclNvcnRTZWN0aW9uIiwidHlwZSIsImRyb3Bkb3duIiwiY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzIiwib3B0aW9uIiwiY3JlYXRlRWxlbWVudCIsImluc2VydEJlZm9yZSIsImxhc3RDaGlsZCIsInRhZyIsImFwcGVuZENoaWxkIiwiY3JlYXRlQ2hpbGRFbGVtZW50V2l0aElkIiwiY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzQW5kSWQiLCJjcmVhdGVDaGlsZEltYWdlRWxlbWVudFdpdGhDbGFzcyIsInNyYyIsImFsdCIsImltYWdlRWxlbWVudCIsInJlbmRlckhlYWRlckRldGFpbHMiLCJpbWFnZXMiLCJjaGFtcGlvbkRhdGEiLCJjaGFtcGlvblJvbGVOYW1lIiwiY2hhbXBpb25SZXNvdXJjZSIsImNoYW1waW9uUmVzb3VyY2VOYW1lIiwibG9yZUNvbnRhaW5lciIsImlubmVySFRNTCIsImFiaWxpdGllc0NvbnRhaW5lciIsImFiaWxpdHlJbWdzIiwicGFzc2l2ZUltZyIsImltZ0xhYmVsIiwiaW5kZXgiLCJzcGVsbEltZyIsImkiLCJhYmlsaXR5SW5mbyIsImFiaWxpdHlOYW1lIiwiYWJpbGl0eURlc2NyaXB0aW9uIiwiYWJpbGl0eUxhYmVsIiwiY2hhbXBpb25UaXBzU2VjdGlvbiIsImNoYW1waW9uVGlwIiwic2tpbiIsIm51bSIsInNob3duSW1hZ2VDb250YWluZXIiLCJzaG93bkltYWdlVXJsIiwiaW1hZ2VDb250YWluZXIiLCJyZW5kZXJTdGF0T3ZlcnZpZXciLCJyZW5kZXJEYW1hZ2VTdGF0cyIsInJlbmRlckNoYW1waW9uTGFuZSIsInJlbmRlck1hdGNodXBzSW5mbyIsInN0YXRzT3ZlcnZpZXciLCJ0cnVlRGFtYWdlQ2lyY2xlU3Ryb2tlIiwicGh5c2ljYWxEYW1hZ2VDaXJjbGVTdHJva2UiLCJtYWdpY0RhbWFnZUNpcmNsZVN0cm9rZSIsInRydWVEYW1hZ2VQZXJjZW50IiwiTWF0aCIsInJvdW5kIiwidHJ1ZURhbWFnZSIsInBlcmNlbnRhZ2UiLCJwaHlzaWNhbERhbWFnZVBlcmNlbnQiLCJwaHlzaWNhbERhbWFnZSIsIm1hZ2ljRGFtYWdlUGVyY2VudCIsIm1hZ2ljRGFtYWdlIiwic3Ryb2tlRGFzaGFycmF5IiwidG90YWxEYW1hZ2VUZXh0IiwidHJ1ZURhbWFnZVZhbHVlIiwicGh5c2ljYWxEYW1hZ2VWYWx1ZSIsIm1hZ2ljRGFtYWdlVmFsdWUiLCJnZXRBbGxJdGVtcyIsImNoYW1waW9uSXRlbUJ1aWxkcyIsIml0ZW1TZXQiLCJpdGVtU2V0Q29udGFpbmVyIiwiaXRlbSIsIml0ZW1JbmZvIiwiZ2V0SXRlbUluZm8iLCJtYWluQ29tcG9uZW50Q29udGFpbmVyIiwibWFpbkl0ZW0iLCJpdGVtRGV0YWlsc0NvbnRhaW5lciIsIm5hbWVFbGVtZW50IiwiZGVzY3JpcHRpb25FbGVtZW50IiwiaXRlbUNvc3QiLCJjb3N0TGFiZWwiLCJjb3N0QW1vdW50IiwicmVzb2x2ZSIsInRoZW4iLCJpdGVtcyIsImNvbXBvbmVudEl0ZW1zQ29udGFpbmVyIiwiY29tcG9uZW50SXRlbSIsImNvbXBvbmVudEl0ZW1FbGVtZW50IiwiY29tcG9uZW50SXRlbURldGFpbHNDb250YWluZXIiLCJjb21wb25lbnRJdGVtTmFtZSIsImNvbXBvbmVudEl0ZW1Db3N0IiwiY29tcG9uZW50SXRlbUNvc3RMYWJlbCIsImNvbXBvbmVudEl0ZW1BbW91bnQiLCJiZXN0TWF0Y2h1cHNTZWN0aW9uIiwiYmVzdE1hdGNodXBzRWxlbWVudCIsImJlc3RNYXRjaHVwc0RhdGEiLCJ3b3JzdE1hdGNodXBzU2VjdGlvbiIsIndvcnN0TWF0Y2h1cHNFbGVtZW50Iiwid29yc3RNYXRjaHVwc0RhdGEiLCJjcmVhdGVTZWN0aW9uIiwic29ydE9wdGlvbnMiLCJyb2xlT3B0aW9ucyIsImRpZmZpY3VsdHlPcHRpb25zIiwibXVsdGlPcHRpb25BcnJheXMiLCJzb3J0RHJvcGRvd24iLCJyZW5kZXJEcm9wZG93biIsIm9wdGlvbnNPYmplY3QiLCJPYmplY3QiLCJrZXlzIiwidmFsdWVzIiwiYWxsQ2hhbXBpb25zQXJyYXkiLCJhdXRvQ29tcGxldGVOYW1lV3JhcHBlciIsInRhYkluZGV4IiwiaW1wb3J0QWxsIiwiciIsInJlcXVpcmUiLCJjb250ZXh0IiwibW9kYWxDb250YWluZXIiLCJjb250YWluZXIiLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZFNpemUiLCJyYXRlVGV4dCIsInJhdGVUeXBlIiwiY2hhbXBpb25SYXRlIiwibGFiZWwiLCJyYXRlVmFsdWUiLCJsb3dlckNhc2VUZXh0IiwiY2hhbXBpb25MYW5lSW5mbyIsImxhbmVUZXh0IiwibGFuZUljb24iLCJkYW1hZ2VUeXBlIiwiZGFtYWdlVmFsdWUiLCJkYW1hZ2VQZXJjZW50YWdlIiwiZGFtYWdlQ29udGFpbmVyIiwiZGFtYWdlU3RhdHMiLCJkYW1hZ2VWYWx1ZUVsZW1lbnQiLCJkYW1hZ2VQZXJjZW50YWdlRWxlbWVudCIsIm1hdGNodXBzRWxlbWVudCIsIm1hdGNodXBzRGF0YSIsIm1hdGNodXAiLCJtYXRjaHVwSW5mbyIsImVuZW15Q2hhbXBpb25OYW1lIiwiZW5lbXlDaGFtcGlvbklkIiwiZW5lbXlDaGFtcGlvbkltZ1VybCIsIm1hdGNodXBTdGF0cyIsImVuZW15Q2hhbXBpb25OYW1lRWxlbWVudCIsIndpbnJhdGVBZ2FpbnN0Iiwid2lucmF0ZUFnYWluc3RMYWJlbCIsImNvbG9yIiwid2lucmF0ZUFnYWluc3RQZXJjZW50YWdlIiwid2luUmF0ZUFnYWluc3QiLCJnYW1lc1BsYXllZEFnYWluc3QiLCJtYXRjaGVzIiwiY2hhbXBpb25Db250YWluZXIiLCJjaGFtcGlvbkltZ1VybCIsImNoYW1waW9uSW1nIiwiY2hhbXBpb25OYW1lV3JhcHBlciIsImNyZWF0ZUNoYW1waW9uc1BhZ2UiLCJnZXRJdGVtIiwiY2xlYXIiXSwic291cmNlUm9vdCI6IiJ9