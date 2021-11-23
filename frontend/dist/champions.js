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
      if (template.id.substring(0, template.id.indexOf('-')) === clickedModalNavLink.id) {
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

  var modalChangeListeners = function modalChangeListeners() {
    var modal = document.querySelector('.modal');
    modal.addEventListener('click', modalClickEvents);
    modal.addEventListener('mouseover', modalMouseoverEvents);
    modal.addEventListener('mouseout', modalMouseoutEvents);
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

  var championsPageClickEvents = /*#__PURE__*/function () {
    var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee5(event) {
      var checkOptions, hideChampionsSection, showChampionsSection, removeChampionsPageListener, addChampionsPageListener, showLoader, hideLoader, filterAndSortChampionsSection, autoCompleteName, autoCompleteNames, _autoCompleteNames;

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

              if (event.target.className === 'auto-complete-name-wrapper') {
                autoCompleteName = event.target.firstChild;
                displayChampionModal(autoCompleteName.dataset.championId);
                autoCompleteNames = document.querySelector('.auto-complete-names');
                autoCompleteNames.style.display = 'none';
              }

              if (event.target.className === 'auto-complete-name') {
                displayChampionModal(event.target.dataset.championId);
                _autoCompleteNames = document.querySelector('.auto-complete-names');
                _autoCompleteNames.style.display = 'none';
              }

            case 16:
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

  var championsPageListeners = function championsPageListeners() {
    var championsPage = document.querySelector('#champions-page');
    championsPage.addEventListener('click', championsPageClickEvents);
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
/* harmony import */ var _championsPageController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./championsPageController */ "./src/appControl/championsPageController.js");


var SearchbarController = function () {
  var showAutoCompleteNames = function showAutoCompleteNames() {
    var autoCompleteNames = document.querySelector('.auto-complete-names');
    autoCompleteNames.style.display = 'block';
  };

  var hideAutoCompleteNames = function hideAutoCompleteNames() {
    var autoCompleteNames = document.querySelector('.auto-complete-names');
    autoCompleteNames.style.display = 'none';
  };

  var searchbarFocusInEvent = function searchbarFocusInEvent(event) {
    if (event.target.className === 'search') {
      showAutoCompleteNames();
      event.target.focus(); // const autoCompleteNames = document.querySelector('.auto-complete-names');
      // autoCompleteNames.firstElementChild.focus();
    }
  };

  var searchbarFocusoutEvent = function searchbarFocusoutEvent(event) {
    if (!event.relatedTarget || event.relatedTarget.className !== 'auto-complete-name-wrapper' && event.relatedTarget.className !== 'search') {
      console.log(event.target);
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

  var searchbarKeydownEvents = function searchbarKeydownEvents(event) {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      var _document = document,
          activeElement = _document.activeElement;
      var goToStart;
      var action = {
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

        if (!activeElement) {
          goToStart = action[event.key] === 'next' || event.key === 'Home';
          var autoCompleteNames = document.querySelector('.auto-complete-names');
          activeElement = autoCompleteNames.children[goToStart ? 0 : autoCompleteNames.children.length - 1];

          while (activeElement && activeElement.style.display === 'none') {
            activeElement = activeElement["".concat(action[event.key], "ElementSibling")];
          }
        }

        activeElement.focus();
      }
    }

    if (event.key === 'Enter') {
      var _document2 = document,
          _activeElement = _document2.activeElement;

      if (_activeElement && _activeElement.className === 'auto-complete-name-wrapper') {
        var autoCompleteName = _activeElement.firstElementChild;
        _championsPageController__WEBPACK_IMPORTED_MODULE_0__["default"].displayChampionModal(autoCompleteName.dataset.championId);
      }
    }
  };

  var searchContainerListeners = function searchContainerListeners() {
    var searchContainer = document.querySelector('.search-container');
    searchContainer.addEventListener('focusin', searchbarFocusInEvent);
    document.addEventListener('focusout', searchbarFocusoutEvent);
    searchContainer.addEventListener('input', searchBarInputEvent);
    searchContainer.addEventListener('keydown', searchbarKeydownEvents);
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
    var response, championStats;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("http://localhost:3001/".concat(championId), {
              mode: 'cors'
            });

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            championStats = _context.sent;
            return _context.abrupt("return", championStats);

          case 7:
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
    var response, allChampionStats;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch('http://localhost:3001/champions', {
              mode: 'cors'
            });

          case 2:
            response = _context2.sent;
            _context2.next = 5;
            return response.json();

          case 5:
            allChampionStats = _context2.sent;
            return _context2.abrupt("return", allChampionStats);

          case 7:
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
// Renders DOM elements that are repeated across templates


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
}; // Renders win or pick rate to the DOM


var renderStatOverview = function renderStatOverview(statsOverview, rateText, rateType) {
  var championRate = document.createElement('div');
  var label = document.createElement('span');
  var rateValue = document.createElement('span'); // Turns 'Win Rate' into 'win-rate'

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
    var enemyChampionName = matchup[0];
    var enemyChampionImgUrl = "https://ddragon.leagueoflegends.com/cdn/11.22.1/img/champion/".concat(enemyChampionName, ".png");
    _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_0__["default"].createChildImageElementWithClass('enemy-champion-img', matchupInfo, enemyChampionImgUrl, "small-".concat(enemyChampionName, ".png"));
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
  _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_0__["default"].createChildImageElementWithClass('champion-img', championContainer, championImgUrl, championId);
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --rasin-black: #1d1e2c;\n  --transparent-rasin-black: #1d1e2cc7;\n  --dark-gold: #927543;\n  --light-gold: #c7ab6e;\n}\n\n#champions-page {\n  background-color: var(--rasin-black);\n  min-height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: -4;\n}\n#champions-page .page-header {\n  display: flex;\n  justify-content: space-evenly;\n  color: white;\n  background-color: var(--rasin-black);\n  max-width: 100%;\n  padding: 1em 0;\n  border-style: solid;\n  border-color: var(--dark-gold);\n  border-width: 0 0 2px 0;\n  align-items: center;\n}\n#champions-page .search-container {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  max-width: 100%;\n}\n#champions-page .auto-complete-names {\n  position: absolute;\n  border: 1px solid #d4d4d4;\n  border-bottom: none;\n  border-top: none;\n  z-index: 4;\n  top: 100%;\n  width: 100%;\n  max-height: 14rem;\n  overflow: auto;\n  scroll-behavior: smooth;\n  display: none;\n}\n#champions-page .auto-complete-name-wrapper {\n  padding: 10px;\n  cursor: pointer;\n  background-color: #fff;\n  border-bottom: 1px solid #d4d4d4;\n  color: var(--rasin-black);\n  font-weight: 600;\n  width: 100%;\n}\n#champions-page .auto-complete-name-wrapper:hover {\n  background-color: var(--light-gold);\n}\n#champions-page .auto-complete-name-wrapper:focus {\n  background-color: var(--light-gold);\n}\n#champions-page .search {\n  padding: 0.5em;\n  min-width: 18em;\n  background: #e2e4e9;\n  outline: none;\n  border-style: none;\n  color: var(--rasin-black);\n  font-weight: 600;\n  min-height: 2.6em;\n  font-size: 1em;\n}\n#champions-page .champions-section {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-auto-rows: auto;\n  grid-column-gap: 1em;\n  max-width: 80%;\n  margin: auto;\n  margin-top: 2em;\n}\n#champions-page .champion-container.shown {\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  cursor: pointer;\n  max-width: 9rem;\n  position: relative;\n  margin-top: 1.5em;\n}\n#champions-page .champion-container.hidden {\n  display: none;\n}\n#champions-page .champion-img {\n  max-height: 100%;\n  max-width: 100%;\n  border-radius: 8%;\n}\n#champions-page .champion-name-wrapper {\n  position: relative;\n  margin: 0 auto;\n  text-align: center;\n  margin-top: -3.2em;\n  background-color: var(--transparent-rasin-black);\n  width: 100%;\n  height: 100%;\n  padding: 0.2em 0 0.2em;\n}\n#champions-page .champion-name {\n  color: white;\n  font-size: 1.2em;\n  font-weight: 600;\n}\n#champions-page .filter-sort-section {\n  display: flex;\n  width: 57%;\n  margin: 1em auto 3em auto;\n}\n#champions-page .lane-filter-header {\n  display: flex;\n  justify-content: center;\n  font-size: 1.2em;\n  font-weight: 600;\n  flex: 1;\n  width: 76%;\n  margin: 1em auto;\n  justify-content: space-evenly;\n}\n#champions-page .header-option {\n  cursor: pointer;\n  color: #70757a;\n}\n#champions-page .header-option:hover {\n  color: white;\n  border-bottom: solid 3px var(--light-gold);\n}\n#champions-page .header-option.active {\n  color: white;\n  border-bottom: solid 3px var(--light-gold);\n}\n#champions-page .dropdown {\n  margin: 0 0.4em 0.4em 0.4em;\n  max-width: 100%;\n  position: relative;\n  flex: 1;\n}\n#champions-page .dropdown-btn {\n  display: flex;\n  border-style: none;\n  justify-content: space-between;\n  background-color: #dfdfe1;\n  color: #2f1d1d;\n  font-weight: 600;\n  padding: 0.5em;\n  font-size: 1em;\n  width: 100%;\n  border-bottom: 2px solid;\n}\n#champions-page .dropdown-btn::after {\n  content: \"➤\";\n  display: inline-block;\n  transform: rotate(90deg);\n}\n#champions-page .dropdown-options {\n  flex-direction: column;\n  display: none;\n  position: absolute;\n  width: 100%;\n  z-index: 2;\n}\n#champions-page .dropdown-option {\n  color: var(--rasin-black);\n  font-weight: 600;\n  background-color: #f8f8f8;\n  cursor: pointer;\n  padding: 0.5em;\n  color: white;\n  color: var(--rasin-black);\n  border-bottom: 2px solid #f8f8f8;\n}\n#champions-page .dropdown-option:hover {\n  background-color: #e1dede;\n}\n#champions-page .dropdown-option.active {\n  background-color: var(--light-gold);\n}\n#champions-page .loader {\n  font-size: 10px;\n  margin: 50px auto;\n  text-indent: -9999em;\n  width: 11em;\n  height: 11em;\n  border-radius: 50%;\n  background: #2e3436;\n  background: -moz-linear-gradient(left, #2e3436 10%, rgba(143, 89, 2, 0) 42%);\n  background: -webkit-linear-gradient(left, #2e3436 10%, rgba(143, 89, 2, 0) 42%);\n  background: -o-linear-gradient(left, #2e3436 10%, rgba(143, 89, 2, 0) 42%);\n  background: -ms-linear-gradient(left, #2e3436 10%, rgba(143, 89, 2, 0) 42%);\n  background: linear-gradient(to right, #2e3436 10%, rgba(143, 89, 2, 0) 42%);\n  position: relative;\n  -webkit-animation: load3 1.4s infinite linear;\n  animation: load3 1.4s infinite linear;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  display: none;\n  position: relative;\n  top: 17.3em;\n  z-index: 5;\n}\n#champions-page .loader:before {\n  width: 50%;\n  height: 50%;\n  background: var(--dark-gold);\n  border-radius: 100% 0 0 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: \"\";\n}\n#champions-page .loader:after {\n  background: var(--rasin-black);\n  width: 75%;\n  height: 75%;\n  border-radius: 50%;\n  content: \"\";\n  margin: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n@-webkit-keyframes load3 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@keyframes load3 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@media (min-width: 850px) {\n  #champions-page .champions-section {\n    grid-template-columns: repeat(4, 1fr);\n  }\n  #champions-page .champion-container.shown {\n    max-width: 10rem;\n  }\n  #champions-page .lane-filter-header {\n    width: 54%;\n  }\n}\n@media (min-width: 1000px) {\n  #champions-page .dropdown {\n    grid-row-start: 2;\n  }\n  #champions-page .champions-section {\n    grid-column-gap: 0;\n  }\n  #champions-page .champion-name-wrapper {\n    margin-top: -3.6em;\n  }\n  #champions-page .champion-name {\n    font-size: 1.4em;\n  }\n}\n@media (min-width: 1200px) {\n  #champions-page .champions-section {\n    grid-template-columns: repeat(5, 1fr);\n  }\n}\n@media (min-width: 1500px) {\n  #champions-page .champions-section {\n    grid-template-columns: repeat(6, 1fr);\n  }\n  #champions-page .champion-container.shown {\n    max-width: 12rem;\n  }\n}\n@media (max-width: 700px) {\n  #champions-page .header-option {\n    margin-right: 0.5em;\n  }\n}\n@media (max-width: 500px) {\n  #champions-page .champions-section {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 360px) {\n  #champions-page .lane-filter-header {\n    font-size: 1em;\n  }\n}", "",{"version":3,"sources":["webpack://./src/stylesheets/champions.scss"],"names":[],"mappings":"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","sourcesContent":["* {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n}\n\n:root {\n  --rasin-black: #1d1e2c;\n  --transparent-rasin-black: #1d1e2cc7;\n  --dark-gold: #927543;\n  --light-gold: #c7ab6e;\n}\n\n#champions-page {\n  background-color: var(--rasin-black);\n  min-height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: -4;\n\n  .page-header {\n    display: flex;\n    justify-content: space-evenly;\n    color: white;\n    background-color: var(--rasin-black);\n    max-width: 100%;\n    padding: 1em 0;\n    border-style: solid;\n    border-color: var(--dark-gold);\n    border-width: 0 0 2px 0;\n    align-items: center;\n  }\n\n  .search-container {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    max-width: 100%;\n  }\n\n  .auto-complete-names {\n    position: absolute;\n    border: 1px solid #d4d4d4;\n    border-bottom: none;\n    border-top: none;\n    z-index: 4;\n    top: 100%;\n    width: 100%;\n    max-height: 14rem;\n    overflow: auto;\n    scroll-behavior: smooth; \n    display: none;\n  }\n\n  .auto-complete-name-wrapper {\n    padding: 10px;\n    cursor: pointer;\n    background-color: #fff; \n    border-bottom: 1px solid #d4d4d4; \n    color: var(--rasin-black);\n    font-weight: 600;\n    width: 100%;\n  }\n\n  .auto-complete-name-wrapper:hover {\n    background-color: var(--light-gold);\n  }\n\n  .auto-complete-name-wrapper:focus {\n    background-color: var(--light-gold);\n  }\n  \n  .search {\n    padding: 0.5em;\n    min-width: 18em;\n    background: #e2e4e9;\n    outline: none;\n    border-style: none;\n    color: var(--rasin-black);\n    font-weight: 600;\n    min-height: 2.6em;\n    font-size: 1em;\n  }\n\n  .champions-section {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-auto-rows: auto;\n    grid-column-gap: 1em;\n    max-width: 80%;\n    margin: auto;\n    margin-top: 2em;\n  }\n\n  .champion-container.shown {\n    display: flex;\n    flex-direction: column;\n    margin: 0 auto;\n    cursor: pointer;\n    max-width: 9rem;\n    position: relative;\n    margin-top: 1.5em\n  }\n\n  .champion-container.hidden {\n    display: none;\n  }\n\n  .champion-img {\n    max-height: 100%;\n    max-width: 100%;\n    border-radius: 8%;\n  }\n\n  .champion-name-wrapper {\n    position: relative;\n    margin: 0 auto;\n    text-align: center;\n    margin-top: -3.2em;\n    background-color: var(--transparent-rasin-black);\n    width: 100%;\n    height: 100%;\n    padding: 0.2em 0 0.2em;\n  }\n\n  .champion-name {\n    color: white;\n    font-size: 1.2em;\n    font-weight: 600;\n  }\n  \n  .filter-sort-section {\n    display: flex;\n    width: 57%;\n  \n    margin: 1em auto 3em auto;\n  }\n  \n  .lane-filter-header {\n    display: flex;\n    justify-content: center;\n    font-size: 1.2em;\n    font-weight: 600;\n    flex: 1;\n    width: 76%;\n    margin: 1em auto;\n    justify-content: space-evenly;\n  }\n\n  .header-option {\n    cursor: pointer;\n    color: #70757a;\n  }\n\n  .header-option:hover {\n    color: white;\n    border-bottom: solid 3px var(--light-gold);\n  }\n\n  .header-option.active {\n    color: white;\n    border-bottom: solid 3px var(--light-gold);\n  }\n\n  .dropdown {\n    margin: 0 0.4em 0.4em 0.4em;\n    max-width: 100%;\n    position: relative;\n    flex: 1;\n  }\n\n  .dropdown-btn {\n    display: flex;\n    border-style: none;\n    justify-content: space-between;\n    background-color: #dfdfe1;\n    color: #2f1d1d;\n    font-weight: 600;\n    padding: 0.5em;\n    font-size: 1em;\n    width: 100%;\n    border-bottom: 2px solid;\n  }\n\n  .dropdown-btn::after {\n    content: \"\\27A4\";\n    display: inline-block;\n    transform: rotate(90deg);\n  }\n\n  .dropdown-options {\n    flex-direction: column;\n    display: none; \n    position: absolute;\n    width: 100%;\n    z-index: 2;\n  }\n  \n  .dropdown-option {\n    color: var(--rasin-black); \n    font-weight: 600;\n    background-color: #f8f8f8;\n    cursor: pointer;\n    padding: 0.5em;\n    color: white;\n    color: var(--rasin-black);\n    border-bottom: 2px solid #f8f8f8;\n  }\n\n  .dropdown-option:hover {\n    background-color: #e1dede;\n  }\n\n  .dropdown-option.active {\n    background-color: var(--light-gold);\n  }\n\n  .loader {\n    font-size: 10px;\n    margin: 50px auto;\n    text-indent: -9999em;\n    width: 11em;\n    height: 11em;\n    border-radius: 50%;\n    background: #2e3436;\n    background: -moz-linear-gradient(left, #2e3436 10%, rgba(143,89,2, 0) 42%);\n    background: -webkit-linear-gradient(left, #2e3436 10%, rgba(143,89,2, 0) 42%);\n    background: -o-linear-gradient(left, #2e3436 10%, rgba(143,89,2, 0) 42%);\n    background: -ms-linear-gradient(left, #2e3436 10%, rgba(143,89,2, 0) 42%);\n    background: linear-gradient(to right, #2e3436 10%, rgba(143,89,2, 0) 42%);\n    position: relative;\n    -webkit-animation: load3 1.4s infinite linear;\n    animation: load3 1.4s infinite linear;\n    -webkit-transform: translateZ(0);\n    -ms-transform: translateZ(0);\n    transform: translateZ(0);\n    display: none;\n    position: relative;\n    top: 17.3em;\n    z-index: 5;\n  }\n  .loader:before {\n    width: 50%;\n    height: 50%;\n    background: var(--dark-gold);\n    border-radius: 100% 0 0 0;\n    position: absolute;\n    top: 0;\n    left: 0;\n    content: '';\n  }\n  .loader:after {\n    background: var(--rasin-black);\n    width: 75%;\n    height: 75%;\n    border-radius: 50%;\n    content: '';\n    margin: auto;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n  }\n  @-webkit-keyframes load3 {\n    0% {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n  @keyframes load3 {\n    0% {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n  \n\n  @media (min-width: 850px) {\n    .champions-section {\n      grid-template-columns: repeat(4, 1fr);\n    }\n\n    .champion-container.shown {\n      max-width: 10rem;\n    }\n\n    .lane-filter-header {\n      width: 54%;\n    }\n  }\n\n  @media (min-width: 1000px) {\n\n    .dropdown {\n      grid-row-start: 2;\n    }\n\n    .champions-section {\n      grid-column-gap: 0;\n    }\n\n    .champion-name-wrapper {\n      margin-top: -3.6em;\n    }\n\n    .champion-name {\n      font-size: 1.4em;\n    }\n  }\n\n  @media (min-width: 1200px) {\n    .champions-section {\n      grid-template-columns: repeat(5, 1fr);\n    }\n  }\n\n  @media (min-width: 1500px) {\n    .champions-section {\n      grid-template-columns: repeat(6, 1fr);\n    }\n\n    .champion-container.shown {\n      max-width: 12rem;\n    }\n  }\n\n  @media (max-width: 700px) {\n    .header-option {\n      margin-right: 0.5em;\n    }\n  }\n\n  @media (max-width: 500px) {\n    .champions-section {\n      grid-template-columns: repeat(2, 1fr);\n    }\n  }\n\n  @media (max-width: 360px) {\n    .lane-filter-header {\n      font-size: 1em;\n    }\n  }\n }\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n}\n\n:root {\n  --rasin-black: #1d1e2c;\n  --dark-gold: #927543;\n  --light-gold: #c7ab6e;\n}\n\nbody {\n  font-family: \"Inter\", Arial, Helvetica, sans-serif;\n}\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  padding: 2rem 0;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.modal #main-container {\n  position: relative;\n  margin: auto;\n  padding: 0;\n  max-width: 75%;\n  min-height: 49rem;\n  margin-top: 0;\n  background: rgba(0, 0, 0, 0.1);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -webkit-animation-name: animatetop;\n  -webkit-animation-duration: 0.4s;\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  border: 1px solid #888;\n  display: block;\n}\n.modal .modal-header {\n  background-color: #181a20bf;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 16px;\n  border-color: var(--dark-gold);\n  border-style: solid;\n  padding: 0;\n  border-radius: 0;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n.modal .navigation-bar {\n  display: flex;\n  background-color: var(--rasin-black);\n  width: 100%;\n  align-items: center;\n}\n.modal .close-modal-btn-wrapper {\n  position: absolute;\n  left: 1.2em;\n}\n.modal .close-modal-btn {\n  cursor: pointer;\n  font-weight: 900;\n  font-size: 1.6em;\n}\n.modal .close-modal-btn:hover {\n  color: var(--light-gold);\n}\n.modal .modal-nav-links {\n  display: flex;\n  justify-content: space-evenly;\n  font-size: 22px;\n  width: 100%;\n}\n.modal .modal-nav-link {\n  cursor: pointer;\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n}\n.modal .modal-nav-link:hover {\n  color: var(--dark-gold);\n}\n.modal .champion-heading {\n  margin: auto;\n  text-align: center;\n  font-size: 20px;\n  color: white;\n}\n.modal .champion-name {\n  margin: auto;\n}\n.modal .champion-title {\n  color: var(--light-gold);\n  font-size: 20px;\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n}\n.modal .champion-roles {\n  display: flex;\n  justify-content: center;\n}\n.modal .champion-role {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-left: 2rem;\n  margin-right: 2rem;\n}\n.modal .champion-resource {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-left: 2rem;\n  margin-right: 2rem;\n}\n.modal .champion-role-image {\n  height: 3.5rem;\n  width: 3.5rem;\n}\n.modal .champion-resource-image {\n  height: 3.5rem;\n  width: 3.5rem;\n}\n.modal .champion-role-name {\n  font-weight: 600;\n  font-size: 20px;\n}\n.modal .champion-resource-name {\n  font-weight: 600;\n  font-size: 20px;\n}\n.modal .champion-main-info {\n  padding: 1.8rem;\n  max-width: 34rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: last baseline;\n}\n@-webkit-keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n.modal .lore-container {\n  background-color: #181a20bf;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 16px;\n  border-color: var(--dark-gold);\n  border-style: solid;\n}\n.modal .subheading {\n  margin: auto;\n  margin-bottom: 0.4em;\n  color: var(--light-gold);\n  text-align: center;\n}\n.modal .abilities-container {\n  background-color: #181a20bf;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 16px;\n  border-color: var(--dark-gold);\n  border-style: solid;\n  width: 28em;\n}\n.modal .abilities-heading {\n  text-align: center;\n}\n.modal .ability-imgs {\n  margin-bottom: 1em;\n  display: flex;\n  justify-content: space-evenly;\n}\n.modal .ability-description {\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n}\n.modal .champion-details {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.modal .champion-extra-info {\n  display: flex;\n  flex-direction: column;\n}\n.modal .ability-info {\n  display: none;\n}\n.modal .ability-info.active {\n  display: flex;\n  flex-direction: column;\n}\n.modal .spell-img {\n  cursor: pointer;\n  margin: 0 0.5rem;\n  height: 3.3rem;\n  width: 3.3rem;\n}\n.modal .spell-img.clicked {\n  border-style: solid;\n  border-color: var(--dark-gold);\n  border-width: 4px;\n}\n.modal .champion-tips-section {\n  background-color: #181a20bf;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 16px;\n  border-color: var(--dark-gold);\n  border-style: solid;\n  margin-bottom: auto;\n  max-width: 34rem;\n  text-align: center;\n}\n.modal .champion-tips {\n  display: flex;\n  flex-direction: column;\n}\n.modal .champion-tip {\n  margin-bottom: 1em;\n}\n.modal #stats-container {\n  position: relative;\n  margin: auto;\n  padding: 0;\n  max-width: 75%;\n  min-height: 49rem;\n  margin-top: 0;\n  background: rgba(0, 0, 0, 0.1);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -webkit-animation-name: animatetop;\n  -webkit-animation-duration: 0.4s;\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  border: 1px solid #888;\n  display: none;\n}\n.modal .champion-stats-overview {\n  display: flex;\n  justify-content: space-evenly;\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n  max-width: 25rem;\n  min-width: 20rem;\n  font-size: 24px;\n}\n.modal .win-rate {\n  display: flex;\n  flex-direction: column;\n}\n.modal .pick-rate {\n  display: flex;\n  flex-direction: column;\n}\n.modal .lane-info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.modal .pick-rate-value {\n  margin-top: 0.4em;\n  color: var(--light-gold);\n}\n.modal .win-rate-value {\n  margin-top: 0.4em;\n  color: var(--light-gold);\n}\n.modal .label {\n  font-size: 20px;\n}\n.modal .champion-damage-container {\n  background-color: #181a20bf;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 16px;\n  border-color: var(--dark-gold);\n  border-style: solid;\n  max-height: 17.5rem;\n}\n.modal .damage-heading {\n  text-align: center;\n}\n.modal .circular-chart {\n  display: block;\n  margin: auto;\n  max-width: 80%;\n  max-height: 14em;\n}\n.modal .circle {\n  fill: none;\n  stroke-width: 2.2;\n  stroke-linecap: round;\n  animation: progress 1s ease-out forwards;\n}\n.modal #magic-damage-stroke {\n  stroke: #35a7ff;\n}\n.modal #physical-damage-stroke {\n  stroke: #ff5964;\n}\n.modal #true-damage-stroke {\n  stroke: #ffe74c;\n}\n@keyframes progress {\n  0% {\n    stroke-dasharray: 0 100;\n  }\n}\n.modal .total-damage-text {\n  font-size: 4px;\n  text-anchor: middle;\n  fill: white;\n}\n.modal .total-damage-label {\n  font-size: 3px;\n  text-anchor: middle;\n  fill: var(--dark-gold);\n}\n.modal .champion-main-stats {\n  display: flex;\n  justify-content: space-evenly;\n}\n.modal .champion-item-builds {\n  background-color: #181a20bf;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 16px;\n  border-color: var(--dark-gold);\n  border-style: solid;\n  max-height: 17.5rem;\n}\n.modal .damage-stats-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n}\n.modal .damage-info {\n  display: flex;\n  max-height: 92%;\n  height: 92%;\n}\n.modal .damage-type-container {\n  display: flex;\n  flex-direction: column;\n  font-size: 1em;\n}\n.modal .damage-stats {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n.modal #physical-damage-label {\n  color: #ff5964;\n}\n.modal #magic-damage-label {\n  color: #35a7ff;\n}\n.modal #true-damage-label {\n  color: #ffe74c;\n}\n.modal .item-details-container {\n  background-color: #181a20bf;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 16px;\n  border-color: var(--dark-gold);\n  border-style: solid;\n  font-size: 14px;\n  display: none;\n  position: absolute;\n  background-color: #181a20;\n  margin-right: 2rem;\n  flex-direction: column;\n  justify-content: space-evenly;\n  width: 40%;\n  right: 1em;\n  margin-bottom: 3.5em;\n}\n.modal .item-name {\n  font-weight: 600;\n  font-size: 16px;\n}\n.modal .main-item {\n  display: flex;\n  flex-direction: column-reverse;\n}\n.modal .cost-label {\n  color: var(--light-gold);\n  font-size: 16px;\n}\n.modal .component-items-container {\n  display: flex;\n}\n.modal .component-item-name {\n  font-size: 16px;\n}\n.modal .cost-amount {\n  font-size: 16px;\n}\n.modal .component-item-cost-label {\n  color: var(--light-gold);\n  font-size: 16px;\n}\n.modal .component-item-amount {\n  font-size: 16px;\n}\n.modal .component-item-details-container {\n  background-color: #181a20bf;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 16px;\n  border-color: var(--dark-gold);\n  border-style: solid;\n  font-size: 14px;\n  display: none;\n  position: absolute;\n  background-color: #181a20;\n  flex-direction: column;\n}\n.modal .item-sets-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  max-height: 90%;\n}\n.modal .item-set-container {\n  display: flex;\n  justify-content: center;\n  max-width: 100%;\n  border-style: none;\n  border-width: 2px;\n  padding: 0.4em;\n}\n.modal .main-component-container {\n  background-color: #181a20bf;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 16px;\n  border-color: var(--dark-gold);\n  border-style: solid;\n  background-color: #06040083;\n  border-radius: 1em;\n  color: white;\n  margin: 0em;\n  font-weight: 600;\n  font-size: 16px;\n  border-style: solid;\n  padding: 0;\n  border-radius: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-width: 1px;\n}\n.modal .item-img {\n  max-width: 2.7em;\n  max-height: 2.7em;\n  border-radius: 1em;\n  padding-bottom: 0;\n}\n.modal .component-item-img {\n  max-width: 1.8em;\n  max-height: 1.8em;\n}\n.modal .champion-matchups {\n  background-color: #181a20bf;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 16px;\n  border-color: var(--dark-gold);\n  border-style: solid;\n  max-height: 25.2rem;\n  margin-bottom: 0;\n  border-radius: 0 0 0 0;\n  display: flex;\n  justify-content: space-evenly;\n}\n.modal .matchups {\n  display: flex;\n  justify-content: space-around;\n  max-width: 24rem;\n}\n.modal .matchup-info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  background-color: #17161a;\n  padding: 0.5em;\n  margin: auto 0.5em;\n  border-radius: 1em;\n}\n.modal .matchup-info:hover {\n  background-color: #17161ac9;\n}\n.modal .matchup-stats {\n  display: flex;\n  flex-direction: column;\n  font-size: 14px;\n  font-family: \"Helvetica Neue\", Helvetica, \"Apple SD Gothic Neo\", AppleGothic, Dotum, Arial, Tahoma;\n}\n.modal .enemy-champion-img {\n  border-radius: 50%;\n  max-height: 3em;\n  max-width: 3em;\n  margin-bottom: 0.5em;\n}\n.modal .winrate-against-percentage.blue {\n  color: #35a7ff;\n}\n.modal .winrate-against-percentage.red {\n  color: #ff5964;\n}\n.modal #skins-container {\n  position: relative;\n  margin: auto;\n  padding: 0;\n  max-width: 75%;\n  min-height: 49rem;\n  margin-top: 0;\n  background: rgba(0, 0, 0, 0.1);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -webkit-animation-name: animatetop;\n  -webkit-animation-duration: 0.4s;\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  border: 1px solid #888;\n  display: none;\n  position: absolute;\n  min-height: 0;\n  margin: 0 auto;\n  max-width: 99%;\n  width: 99%;\n}\n.modal #skins-container .navigation-bar {\n  border-bottom: solid 3px var(--dark-gold);\n}\n.modal #skins-container .modal-header {\n  margin-bottom: 0;\n}\n.modal .skin-image-container {\n  box-sizing: border-box;\n  max-width: 100%;\n  display: none;\n}\n.modal .skin-image-container.shown {\n  display: block;\n}\n.modal .skin-image {\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n.modal .skin-name {\n  font-size: 1em;\n}\n.modal #skins-container .champion-heading {\n  display: flex;\n  background-color: var(--rasin-black);\n  justify-content: space-evenly;\n  width: 100%;\n  align-items: center;\n}\n.modal .img-scroll-arrow {\n  cursor: pointer;\n  font-size: 1.5em;\n}\n.modal .img-scroll-arrow:hover {\n  color: var(--dark-gold);\n}\n@media (max-width: 1120px) {\n  .modal .component-item-img {\n    display: none;\n  }\n  .modal .item-sets-container {\n    min-height: 80%;\n  }\n  .modal .item-details-container {\n    min-width: 70%;\n  }\n}\n@media (max-width: 1250px) {\n  .modal .item-img {\n    max-height: 2.2rem;\n    max-width: 2.2rem;\n  }\n  .modal .champion-details {\n    flex-direction: column-reverse;\n  }\n  .modal .abilities-container {\n    text-align: center;\n    width: auto;\n    max-width: 31rem;\n  }\n  .modal .lore-container {\n    text-align: center;\n  }\n  .modal #main-container {\n    height: 76rem;\n  }\n}\n@media (max-width: 700px) {\n  .modal .item-sets-container {\n    flex-direction: row;\n  }\n  .modal .item-set-container {\n    flex-direction: column;\n  }\n  .modal .matchups {\n    flex-direction: column;\n  }\n  .modal .champion-matchups {\n    max-height: 28.2rem;\n  }\n  .modal .matchup-info {\n    margin: 0.5em auto;\n  }\n  .modal #main-container {\n    max-width: 100%;\n  }\n  .modal #stats-container {\n    max-width: 100%;\n    min-height: 63rem;\n  }\n}\n@media (max-width: 840px) {\n  .modal .damage-info {\n    flex-direction: column-reverse;\n    justify-content: space-between;\n    font-size: 15px;\n  }\n  .modal .games-played-against {\n    display: none;\n  }\n  .modal .damage-stats-container {\n    flex-direction: row;\n  }\n}\n@media (max-width: 560px) {\n  .modal .champion-main-stats {\n    flex-direction: column;\n  }\n  .modal .item-set-container {\n    flex-direction: row;\n  }\n  .modal .item-sets-container {\n    flex-direction: column;\n  }\n  .modal .champion-damage-container {\n    max-width: 100%;\n    align-items: center;\n  }\n  .modal .damage-stats-info {\n    flex-direction: column;\n  }\n  .modal .damage-info {\n    flex-direction: row;\n    align-items: flex-start;\n  }\n  .modal .damage-type-container {\n    margin: 0.2em auto;\n  }\n  .modal .circular-chart {\n    max-height: 195px;\n    max-width: 80%;\n  }\n  .modal .damage-stats-container {\n    flex-direction: column;\n  }\n  .modal .champion-role {\n    margin-left: 0.5em;\n    margin-right: 0.5em;\n  }\n  .modal .champion-resource {\n    margin-left: 0.5em;\n    margin-right: 0.5em;\n  }\n  .modal .champion-roles {\n    font-size: 20px;\n  }\n  .modal .spell-img {\n    height: 2.8em;\n    width: 2.8em;\n    margin: auto;\n  }\n}\n@media (max-width: 414px) {\n  .modal .champion-stats-overview {\n    font-size: 20px;\n    min-width: 17rem;\n  }\n  .modal .champion-name {\n    font-size: 2rem;\n  }\n  .modal .modal-nav-links {\n    font-size: 18px;\n  }\n  .modal .close-modal-btn-wrapper {\n    left: 0.7em;\n  }\n  .modal .close-modal-btn {\n    font-size: 1.2em;\n  }\n}\n@media (min-width: 1300px) {\n  .modal #skins-container {\n    position: relative;\n    max-width: 70%;\n    min-height: auto;\n  }\n}\n@media (min-width: 1950px) {\n  .modal #skins-container {\n    max-width: 50%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/stylesheets/modals.scss"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n}\n\n:root {\n  --rasin-black: #1d1e2c;\n  --dark-gold: #927543;\n  --light-gold: #c7ab6e;\n}\n\n@mixin containerBackground {\n  background-color: #181a20bf;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 16px;\n  border-color: var(--dark-gold);\n  border-style: solid;\n}\n\n@mixin subHeadingStyle {\n  margin: auto;\n  margin-bottom: 0.4em;\n  color: var(--light-gold);\n  text-align: center;\n}\n\n@mixin iconSize {\n  height: 3.5rem;\n  width: 3.5rem;\n}\n\n@mixin iconText {\n  font-weight: 600;\n  font-size: 20px;\n}\n\n@mixin iconContainer {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-left: 2rem;\n  margin-right: 2rem;\n}\n\n@mixin smallMargin {\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n}\n\n@mixin modalContentContainer {\n  position: relative;\n  margin: auto;\n  padding: 0;\n  max-width: 75%;\n  min-height: 49rem;\n  margin-top: 0;\n  background: rgba(0, 0, 0, 0.1);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -webkit-animation-name: animatetop;\n  -webkit-animation-duration: 0.4s;\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  border: 1px solid #888;\n}\n\nbody {\n  font-family: \"Inter\", Arial, Helvetica, sans-serif;\n}\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  padding: 2rem 0;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgb(0, 0, 0, 0.4);\n\n  #main-container {\n    @include modalContentContainer();\n    display: block;\n  }\n\n  .modal-header {\n    @include containerBackground();\n    padding: 0;\n    border-radius: 0;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n  }\n\n  .navigation-bar {\n    display: flex;\n    background-color: var(--rasin-black);\n    width: 100%;\n    align-items: center;\n  }\n\n  .close-modal-btn-wrapper {\n    position: absolute;\n    left: 1.2em;\n  }\n\n  .close-modal-btn {\n    cursor: pointer;\n    font-weight: 900;\n    font-size: 1.6em;\n  }  \n\n  .close-modal-btn:hover {\n    color: var(--light-gold);\n  }\n\n  .modal-nav-links {\n    display: flex;\n    justify-content: space-evenly;\n    font-size: 22px;\n    width: 100%;\n  }\n\n  .modal-nav-link {\n    cursor: pointer;\n    @include smallMargin();\n  }\n\n  .modal-nav-link:hover {\n    color: var(--dark-gold);\n  }\n\n  .champion-heading {\n    margin: auto;\n    text-align: center;\n    font-size: 20px;\n    color: white;\n  }\n\n  .champion-name {\n    margin: auto;\n  }\n\n  .champion-title {\n    color: var(--light-gold);\n    font-size: 20px;\n    @include smallMargin();\n  }\n\n  .champion-roles {\n    display: flex;\n    justify-content: center;\n  }\n\n  .champion-role {\n    @include iconContainer();\n  }\n\n  .champion-resource {\n    @include iconContainer();\n  }\n\n  .champion-role-image {\n    @include iconSize();\n  }\n\n  .champion-resource-image {\n    @include iconSize();\n  }\n\n  .champion-role-name {\n    @include iconText();\n  }\n\n  .champion-resource-name {\n    @include iconText();\n  }\n\n  .champion-main-info {\n    padding: 1.8rem;\n    max-width: 34rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: last baseline;\n  }\n\n  @-webkit-keyframes animatetop {\n    from {\n      top: -300px;\n      opacity: 0;\n    }\n    to {\n      top: 0;\n      opacity: 1;\n    }\n  }\n\n  @keyframes animatetop {\n    from {\n      top: -300px;\n      opacity: 0;\n    }\n    to {\n      top: 0;\n      opacity: 1;\n    }\n  }\n\n  .lore-container {\n    @include containerBackground();\n  }\n\n  .subheading {\n    @include subHeadingStyle();\n  }\n\n  .abilities-container {\n    @include containerBackground();\n    width: 28em;\n  }\n\n  .abilities-heading {\n    text-align: center;\n  }\n\n  .ability-imgs {\n    margin-bottom: 1em;\n    display: flex;\n    justify-content: space-evenly;\n  }\n\n  .ability-description {\n    @include smallMargin();\n  }\n\n  .champion-details {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .champion-extra-info {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .ability-info {\n    display: none;\n  }\n\n  .ability-info.active {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .spell-img {\n    cursor: pointer;\n    margin: 0 0.5rem;\n    height: 3.3rem;\n    width: 3.3rem;\n  }\n\n  .spell-img.clicked {\n    border-style: solid;\n    border-color: var(--dark-gold);\n    border-width: 4px;\n  }\n\n  .champion-tips-section {\n    @include containerBackground();\n    margin-bottom: auto;\n    max-width: 34rem;\n    text-align: center;\n  }\n\n  .champion-tips {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .champion-tip {\n    margin-bottom: 1em;\n  }\n\n  #stats-container {\n    @include modalContentContainer();\n    display: none;\n  }\n\n  .champion-stats-overview {\n    display: flex;\n    justify-content: space-evenly;\n    @include smallMargin();\n    max-width: 25rem;\n    min-width: 20rem;\n    font-size: 24px;\n  }\n\n  .win-rate {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .pick-rate {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .lane-info {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .pick-rate-value {\n    margin-top: 0.4em;\n    color: var(--light-gold);\n  }\n\n  .win-rate-value {\n    margin-top: 0.4em;\n    color: var(--light-gold);\n  }\n\n  .label {\n    font-size: 20px;\n  }\n\n  .champion-damage-container {\n    @include containerBackground();\n    max-height: 17.5rem;\n  }\n\n  .damage-heading {\n    text-align: center;\n  }\n\n  .circular-chart {\n    display: block;\n    margin: auto;\n    max-width: 80%;\n    max-height: 14em;\n  }\n\n  .circle {\n    fill: none;\n    stroke-width: 2.2;\n    stroke-linecap: round;\n    animation: progress 1s ease-out forwards;\n  }\n\n  #magic-damage-stroke {\n    stroke: #35a7ff;\n  }\n\n  #physical-damage-stroke {\n    stroke: #ff5964;\n  }\n\n  #true-damage-stroke {\n    stroke: #ffe74c;\n  }\n\n  @keyframes progress {\n    0% {\n      stroke-dasharray: 0 100;\n    }\n  }\n\n  .total-damage-text {\n    font-size: 4px;\n    text-anchor: middle;\n    fill: white;\n  }\n\n  .total-damage-label {\n    font-size: 3px;\n    text-anchor: middle;\n    fill: var(--dark-gold);\n  }\n\n  .champion-main-stats {\n    display: flex;\n    justify-content: space-evenly;\n  }\n\n  .champion-item-builds {\n    @include containerBackground();\n    max-height: 17.5rem;\n  }\n\n  .damage-stats-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n  }\n\n  .damage-info {\n    display: flex;\n    max-height: 92%;\n    height: 92%;\n  }\n\n  .damage-type-container {\n    display: flex;\n    flex-direction: column;\n    font-size: 1em;\n  }\n\n  .damage-stats {\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n  }\n\n  #physical-damage-label {\n    color: #ff5964;\n  }\n\n  #magic-damage-label {\n    color: #35a7ff;\n  }\n\n  #true-damage-label {\n    color: #ffe74c;\n  }\n\n  .item-details-container {\n    @include containerBackground();\n    font-size: 14px;\n    display: none;\n    position: absolute;\n    background-color: #181a20;\n    margin-right: 2rem;\n    flex-direction: column;\n    justify-content: space-evenly;\n    width: 40%;\n    right: 1em;\n    margin-bottom: 3.5em;\n  }\n\n  .item-name {\n    font-weight: 600;\n    font-size: 16px;\n  }\n\n  .main-item {\n    display: flex;\n    flex-direction: column-reverse;\n  }\n\n  .cost-label {\n    color: var(--light-gold);\n    font-size: 16px;\n  }\n\n  .component-items-container {\n    display: flex;\n  }\n\n  .component-item-name {\n    font-size: 16px;\n  }\n\n  .cost-amount {\n    font-size: 16px;\n  }\n\n  .component-item-cost-label {\n    color: var(--light-gold);\n    font-size: 16px;\n  }\n\n  .component-item-amount {\n    font-size: 16px;\n  }\n\n  .component-item-details-container {\n    @include containerBackground();\n    font-size: 14px;\n    display: none;\n    position: absolute;\n    background-color: #181a20;\n    flex-direction: column;\n  }\n\n  .item-sets-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    max-height: 90%;\n  }\n\n  .item-set-container {\n    display: flex;\n    justify-content: center;\n    max-width: 100%;\n    border-style: none;\n    border-width: 2px;\n    padding: 0.4em;\n  }\n\n  .main-component-container {\n    @include containerBackground();\n    background-color: #06040083;\n    border-radius: 1em;\n    color: white;\n    margin: 0em;\n    font-weight: 600;\n    font-size: 16px;\n    border-style: solid;\n    padding: 0;\n    border-radius: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border-width: 1px;\n  }\n\n  .item-img {\n    max-width: 2.7em;\n    max-height: 2.7em;\n    border-radius: 1em;\n    //padding: 1em;\n    padding-bottom: 0;\n  }\n\n  .component-item-img {\n    max-width: 1.8em;\n    max-height: 1.8em;\n  }\n\n  .champion-matchups {\n    @include containerBackground();\n    max-height: 25.2rem;\n    margin-bottom: 0;\n    border-radius: 0 0 0 0;\n    display: flex;\n    justify-content: space-evenly;\n  }\n\n  .matchups {\n    display: flex;\n    justify-content: space-around;\n    max-width: 24rem;\n  }\n\n  .matchup-info {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    background-color: #17161a;\n    padding: 0.5em;\n    margin: auto 0.5em;\n    border-radius: 1em;\n  }\n\n  .matchup-info:hover {\n    background-color: #17161ac9;\n  }\n\n  .matchup-stats {\n    display: flex;\n    flex-direction: column;\n    font-size: 14px;\n    font-family: \"Helvetica Neue\", Helvetica, \"Apple SD Gothic Neo\", AppleGothic,\n      Dotum, Arial, Tahoma;\n  }\n\n  .enemy-champion-img {\n    border-radius: 50%;\n    max-height: 3em;\n    max-width: 3em;\n    margin-bottom: 0.5em;\n  }\n\n  .winrate-against-percentage.blue {\n    color: #35a7ff;\n  }\n\n  .winrate-against-percentage.red {\n    color: #ff5964;\n  }\n\n  #skins-container {\n    @include modalContentContainer();\n    display:none;\n    position: absolute;\n    min-height: 0;\n    margin: 0 auto;\n    max-width: 99%;\n    width: 99%;\n\n    .navigation-bar {\n      border-bottom: solid 3px var(--dark-gold);\n    }\n  }\n\n  #skins-container .modal-header {\n    margin-bottom: 0;\n  }\n\n  .skin-image-container {\n    box-sizing: border-box;\n    max-width: 100%;\n    display: none;\n  }\n\n  .skin-image-container.shown {\n    display: block;\n  }\n\n  .skin-image {\n    top: 0;\n    left: 0;\n    width: 100%;\n  }\n\n  .skin-name {\n    font-size: 1em;\n  }\n\n  #skins-container .champion-heading {\n    display: flex;\n    background-color: var(--rasin-black);\n    justify-content: space-evenly;\n    width: 100%;\n    align-items: center;\n  }\n\n  .img-scroll-arrow {\n    cursor: pointer;\n    font-size: 1.5em;\n  }\n\n  .img-scroll-arrow:hover {\n    color: var(--dark-gold);\n  }\n\n  @media (max-width: 1120px) {\n    .component-item-img {\n      display: none;\n    }\n\n    .item-sets-container {\n      min-height: 80%;\n    }\n\n    .item-details-container {\n      min-width: 70%;\n    }\n  }\n\n  @media (max-width: 1250px) {\n    .item-img {\n      max-height: 2.2rem;\n      max-width: 2.2rem;\n    }\n\n    .champion-details {\n      flex-direction: column-reverse;\n    }\n\n    .abilities-container {\n      text-align: center;\n      width: auto;\n      max-width: 31rem;\n    }\n\n    .lore-container {\n      text-align: center;\n    }\n\n    #main-container {\n      height: 76rem;\n    }\n  }\n\n  @media (max-width: 700px) {\n    .item-sets-container {\n      flex-direction: row;\n    }\n\n    .item-set-container {\n      flex-direction: column;\n    }\n\n    .matchups {\n      flex-direction: column;\n    }\n\n    .champion-matchups {\n      max-height: 28.2rem;\n    }\n\n    .matchup-info {\n      margin: 0.5em auto;\n    }\n\n    #main-container {\n      max-width: 100%;\n    }\n\n    #stats-container {\n      max-width: 100%;\n      min-height: 63rem;\n    }\n  }\n\n  @media (max-width: 840px) {\n    .damage-info {\n      flex-direction: column-reverse;\n      justify-content: space-between;\n      font-size: 15px;\n    }\n\n    .games-played-against {\n      display: none;\n    }\n\n    .damage-stats-container {\n      flex-direction: row;\n    }\n  }\n\n  @media (max-width: 560px) {\n    .champion-main-stats {\n      flex-direction: column;\n    }\n\n    .item-set-container {\n      flex-direction: row;\n    }\n\n    .item-sets-container {\n      flex-direction: column;\n    }\n\n    .champion-damage-container {\n      max-width: 100%;\n      align-items: center;\n    }\n\n    .damage-stats-info {\n      flex-direction: column;\n    }\n\n    .damage-info {\n      flex-direction: row;\n      align-items: flex-start;\n    }\n\n    .damage-type-container {\n      margin: 0.2em auto;\n    }\n\n    .circular-chart {\n      max-height: 195px;\n      max-width: 80%;\n    }\n\n    .damage-stats-container {\n      flex-direction: column;\n    }\n\n    .champion-role {\n      margin-left: 0.5em;\n      margin-right: 0.5em;\n    }\n\n    .champion-resource {\n      margin-left: 0.5em;\n      margin-right: 0.5em;\n    }\n\n    .champion-roles {\n      font-size: 20px;\n    }\n\n    .spell-img {\n      height: 2.8em;\n      width: 2.8em;\n      margin: auto;\n    }\n  }\n\n  @media (max-width: 414px) {\n    .champion-stats-overview {\n      font-size: 20px;\n      min-width: 17rem;\n    }\n\n    .champion-name {\n      font-size: 2rem;\n    }\n\n    .modal-nav-links {\n      font-size: 18px;\n    }\n\n    .close-modal-btn-wrapper {\n      left: 0.7em;\n    }\n\n    .close-modal-btn {\n      font-size: 1.2em;\n    }\n  }\n\n  @media (min-width: 1300px) {\n    #skins-container {\n      position: relative;\n      max-width: 70%;\n      min-height: auto;\n    }\n  }\n\n  @media (min-width: 1950px) {\n    #skins-container {\n      max-width: 50%;\n    }\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/images sync \\.(png|jpe?g|svg)$":
/*!**********************************************************!*\
  !*** ./src/images/ sync nonrecursive \.(png|jpe?g|svg)$ ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./1617779123_original.jpg": "./src/images/1617779123_original.jpg",
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
	"./Utility.png": "./src/images/Utility.png",
	"./fireBackground.jpg": "./src/images/fireBackground.jpg",
	"./jinxBackground.jpeg": "./src/images/jinxBackground.jpeg",
	"./tpaSkins.jpg": "./src/images/tpaSkins.jpg",
	"./tutorial_module_1_background.png": "./src/images/tutorial_module_1_background.png",
	"./twitchBackground.jpg": "./src/images/twitchBackground.jpg"
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

/***/ "./src/images/1617779123_original.jpg":
/*!********************************************!*\
  !*** ./src/images/1617779123_original.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c088f6e8023d2cd7a19d.jpg";

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

/***/ "./src/images/fireBackground.jpg":
/*!***************************************!*\
  !*** ./src/images/fireBackground.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6ece3e1d37ef95cd429c.jpg";

/***/ }),

/***/ "./src/images/jinxBackground.jpeg":
/*!****************************************!*\
  !*** ./src/images/jinxBackground.jpeg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a1f95a7d4360be819ce3.jpeg";

/***/ }),

/***/ "./src/images/tpaSkins.jpg":
/*!*********************************!*\
  !*** ./src/images/tpaSkins.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "019a8012d7d0195a531a.jpg";

/***/ }),

/***/ "./src/images/tutorial_module_1_background.png":
/*!*****************************************************!*\
  !*** ./src/images/tutorial_module_1_background.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ffd0a972428172137314.png";

/***/ }),

/***/ "./src/images/twitchBackground.jpg":
/*!*****************************************!*\
  !*** ./src/images/twitchBackground.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5699a41e5c94b35bbf7c.jpg";

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



 // import { championDetailsModal } from './templates/championDetailsModal';
// import championStatsModal from './templates/championStatsModal';
// import ItemInfo from './championData/itemInfo';
// import getChampionDetails from './championData/championDetails';
// import championSkinsModal from './templates/championSkinsModal';
// import getChampionStats from './championData/championStats';





var test = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var response, allChampions;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('https://ddragon.leagueoflegends.com/cdn/11.22.1/data/en_US/champion.json');

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            allChampions = _context.sent;
            _context.next = 8;
            return (0,_templates_championsPage__WEBPACK_IMPORTED_MODULE_4__["default"])();

          case 8:
            _appControl_championsPageController__WEBPACK_IMPORTED_MODULE_5__["default"].championsPageListeners();
            _appControl_searchbarController__WEBPACK_IMPORTED_MODULE_6__["default"].searchContainerListeners(); // window.history.pushState('champions', '', '/champions');

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function test() {
    return _ref.apply(this, arguments);
  };
}();

test();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssTUFBTSxVQUFVLFVBQVUsS0FBSyxNQUFNLFVBQVUsV0FBVyxLQUFLLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxX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V0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxZQUFZLFVBQVUsTUFBTSxNQUFNLFlBQVksVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sWUFBWSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sWUFBWSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxZQUFZLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFlBQVksS0FBSyxNQUFNLFdBQVcsS0FBSyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sWUFBWSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxZQUFZLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFlBQVksVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxLQUFLLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxZQUFZLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sWUFBWSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLGFBQWEsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsYUFBYSxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLGFBQWEsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxLQUFLLE1BQU0sV0FBVyxLQUFLLE1BQU0s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QUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQyxjQUFjO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxtQkFBbUI7QUFDcEQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixnQkFBZ0I7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLEtBQTBCLG9CQUFvQixDQUFFO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaHZCQSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUFzSjtBQUN0SjtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLGdJQUFPOzs7O0FBSWdHO0FBQ3hILE9BQU8saUVBQWUsZ0lBQU8sSUFBSSx1SUFBYyxHQUFHLHVJQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUFtSjtBQUNuSjtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDZIQUFPOzs7O0FBSTZGO0FBQ3JILE9BQU8saUVBQWUsNkhBQU8sSUFBSSxvSUFBYyxHQUFHLG9JQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBLGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDZEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTXNQLElBQUk7QUFBQSxzTEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNZM04sS0FBSyxDQUFDLDBFQUFELENBRGpCOztBQUFBO0FBQ0xFLFlBQUFBLFFBREs7QUFBQTtBQUFBLG1CQUVnQkEsUUFBUSxDQUFDQyxJQUFULEVBRmhCOztBQUFBO0FBRUw3RCxZQUFBQSxZQUZLO0FBQUE7QUFBQSxtQkFNTHBCLG9FQUFhLEVBTlI7O0FBQUE7QUFPWHpELFlBQUFBLGtHQUFBO0FBQ0FpRyxZQUFBQSxnR0FBQSxHQVJXLENBU1g7O0FBVFc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBSmlRLElBQUk7QUFBQTtBQUFBO0FBQUEsR0FBVjs7QUFXQUEsSUFBSSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL2FwcENvbnRyb2wvY2hhbXBpb25Nb2RhbENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9hcHBDb250cm9sL2NoYW1waW9uc1BhZ2VDb250cm9sbGVyLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvYXBwQ29udHJvbC9maWx0ZXJDaGFtcGlvbnMuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9hcHBDb250cm9sL3NlYXJjaGJhckNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9hcHBDb250cm9sL3NvcnRDaGFtcGlvbnMuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9jaGFtcGlvbkRhdGEvY2hhbXBpb25EZXRhaWxzLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvY2hhbXBpb25EYXRhL2NoYW1waW9uU3RhdHMuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9jaGFtcGlvbkRhdGEvZ2V0QWxsQ2hhbXBpb25zLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvY2hhbXBpb25EYXRhL2l0ZW1JbmZvLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvaGVscGVycy9kcm9wZG93blNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9oZWxwZXJzL2VsZW1lbnRDcmVhdGlvbi5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL3RlbXBsYXRlcy9jaGFtcGlvbkRldGFpbHNNb2RhbC5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL3RlbXBsYXRlcy9jaGFtcGlvblNraW5zTW9kYWwuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy90ZW1wbGF0ZXMvY2hhbXBpb25TdGF0c01vZGFsLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvdGVtcGxhdGVzL2NoYW1waW9uc1BhZ2UuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy90ZW1wbGF0ZXMvcmVuZGVySGVscGVycy5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL3N0eWxlc2hlZXRzL2NoYW1waW9ucy5zY3NzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvc3R5bGVzaGVldHMvbW9kYWxzLnNjc3MiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvc3R5bGVzaGVldHMvY2hhbXBpb25zLnNjc3M/NjhjNyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL3N0eWxlc2hlZXRzL21vZGFscy5zY3NzP2NmODMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy9ob21lL2RheW8vRGVza3RvcC9vZGluUHJvamVjdC9MZWFndWUtQXBwL2Zyb250ZW5kL3NyYy9pbWFnZXN8c3luY3xub25yZWN1cnNpdmV8L1xcLihwbmd8anBlIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9sZWFndWUtYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2xlYWd1ZS1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9sZWFndWUtYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2xlYWd1ZS1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9jaGFtcGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsImNvbnN0IENoYW1waW9uTW9kYWxDb250cm9sbGVyID0gKCgpID0+IHtcbiAgY29uc3QgdG9nZ2xlQWN0aXZlQWJpbGl0eSA9IChjbGlja2VkQWJpbGl0eUlkKSA9PiB7XG4gICAgY29uc3QgYWJpbGl0eUltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zcGVsbC1pbWcnKTtcbiAgICBjb25zdCBhYmlsaXR5SW5mb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWJpbGl0eS1pbmZvJyk7XG5cbiAgICBhYmlsaXR5SW1hZ2VzLmZvckVhY2goKGltZykgPT4ge1xuICAgICAgaW1nLmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrZWQnKTtcbiAgICB9KTtcbiAgICBhYmlsaXR5SW5mb3MuZm9yRWFjaCgoaW5mbykgPT4ge1xuICAgICAgaW5mby5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNsaWNrZWRJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2NsaWNrZWRBYmlsaXR5SWR9LWltZ2ApO1xuICAgIGNsaWNrZWRJbWFnZS5jbGFzc05hbWUgPSAnc3BlbGwtaW1nIGNsaWNrZWQnO1xuXG4gICAgY29uc3QgYWN0aXZlQWJpbGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2NsaWNrZWRBYmlsaXR5SWR9LWFiaWxpdHlgKTtcbiAgICBhY3RpdmVBYmlsaXR5LmNsYXNzTmFtZSA9ICdhYmlsaXR5LWluZm8gYWN0aXZlJztcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VNb2RhbFRlbXBsYXRlID0gKGNsaWNrZWRNb2RhbE5hdkxpbmspID0+IHtcbiAgICBjb25zdCB0ZW1wbGF0ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwtdGVtcGxhdGUnKTtcbiAgICB0ZW1wbGF0ZXMuZm9yRWFjaCgodGVtcGxhdGUpID0+IHtcbiAgICAgIGlmICh0ZW1wbGF0ZS5pZC5zdWJzdHJpbmcoMCwgdGVtcGxhdGUuaWQuaW5kZXhPZignLScpKSA9PT0gY2xpY2tlZE1vZGFsTmF2TGluay5pZCkge1xuICAgICAgICBjb25zdCBjaG9zZW5UZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgICAgICBjaG9zZW5UZW1wbGF0ZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGhpZGRlblRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgICAgIGhpZGRlblRlbXBsYXRlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZGlzcGF5SXRlbURldGFpbHMgPSAoaG92ZXJlZEl0ZW1JbWFnZSkgPT4ge1xuICAgIGNvbnN0IGl0ZW1EZXRhaWxzID0gaG92ZXJlZEl0ZW1JbWFnZS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgaXRlbURldGFpbHMuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgfTtcblxuICBjb25zdCBoaWRlSXRlbURldGFpbHMgPSAodW5ob3ZlcmVkSXRlbUltYWdlKSA9PiB7XG4gICAgY29uc3QgaXRlbURldGFpbHMgPSB1bmhvdmVyZWRJdGVtSW1hZ2UubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGl0ZW1EZXRhaWxzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlU2tpbkltYWdlcyA9IChhcnJvd0NsYXNzTGlzdCkgPT4ge1xuICAgIGNvbnN0IHNraW5JbWFnZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2tpbi1pbWFnZXMtY29udGFpbmVyJyk7XG4gICAgY29uc3QgY3VycmVudFNob3duSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2tpbi1pbWFnZS1jb250YWluZXIuc2hvd24nKTtcbiAgICBjb25zdCBza2luTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5za2luLW5hbWUnKTtcblxuICAgIGN1cnJlbnRTaG93bkltYWdlLmNsYXNzTmFtZSA9ICdza2luLWltYWdlLWNvbnRhaW5lcic7XG4gICAgY29uc3QgZmlyc3RJbWFnZSA9IHNraW5JbWFnZXNDb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgY29uc3QgbGFzdEltYWdlID0gc2tpbkltYWdlc0NvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkO1xuXG4gICAgaWYgKGZpcnN0SW1hZ2UgPT09IGN1cnJlbnRTaG93bkltYWdlICYmIGFycm93Q2xhc3NMaXN0LmluY2x1ZGVzKCdsZWZ0LWFycm93JykpIHtcbiAgICAgIGxhc3RJbWFnZS5jbGFzc05hbWUgPSAnc2tpbi1pbWFnZS1jb250YWluZXIgc2hvd24nO1xuICAgICAgc2tpbk5hbWUudGV4dENvbnRlbnQgPSBsYXN0SW1hZ2UuaWQ7XG4gICAgfSBlbHNlIGlmIChsYXN0SW1hZ2UgPT09IGN1cnJlbnRTaG93bkltYWdlICYmIGFycm93Q2xhc3NMaXN0LmluY2x1ZGVzKCdyaWdodC1hcnJvdycpKSB7XG4gICAgICBmaXJzdEltYWdlLmNsYXNzTmFtZSA9ICdza2luLWltYWdlLWNvbnRhaW5lciBzaG93bic7XG4gICAgICBza2luTmFtZS50ZXh0Q29udGVudCA9IGZpcnN0SW1hZ2UuaWQ7XG4gICAgfSBlbHNlIGlmIChhcnJvd0NsYXNzTGlzdC5pbmNsdWRlcygncmlnaHQtYXJyb3cnKSkge1xuICAgICAgY3VycmVudFNob3duSW1hZ2UubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTmFtZSA9ICdza2luLWltYWdlLWNvbnRhaW5lciBzaG93bic7XG4gICAgICBza2luTmFtZS50ZXh0Q29udGVudCA9IGN1cnJlbnRTaG93bkltYWdlLm5leHRFbGVtZW50U2libGluZy5pZDtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudFNob3duSW1hZ2UucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc05hbWUgPSAnc2tpbi1pbWFnZS1jb250YWluZXIgc2hvd24nO1xuICAgICAgc2tpbk5hbWUudGV4dENvbnRlbnQgPSBjdXJyZW50U2hvd25JbWFnZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmlkO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjbGVhck1haW5Nb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tY29udGFpbmVyJyk7XG4gICAgY29uc3QgY2hhbXBpb25OYW1lID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tbmFtZScpO1xuICAgIGNvbnN0IGNoYW1waW9uVGl0bGUgPSBtYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbi10aXRsZScpO1xuICAgIGNvbnN0IGNoYW1waW9uUm9sZXMgPSBtYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbi1yb2xlcycpO1xuICAgIGNvbnN0IGNoYW1waW9uTG9yZSA9IG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLWxvcmUnKTtcbiAgICBjb25zdCBhYmlsaXR5RGV0YWlscyA9IG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvcignLmFiaWxpdHktZGV0YWlscycpO1xuICAgIGNvbnN0IGNoYW1waW9uVGlwcyA9IG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLXRpcHMnKTtcblxuICAgIGNvbnN0IG1haW5Nb2RhbEhlYWRlciA9IFtjaGFtcGlvbk5hbWUsIGNoYW1waW9uVGl0bGUsIGNoYW1waW9uUm9sZXNdO1xuICAgIG1haW5Nb2RhbEhlYWRlci5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICBjdXJyZW50RWxlbWVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgIH0pO1xuXG4gICAgY2hhbXBpb25Mb3JlLnJlbW92ZSgpO1xuICAgIGFiaWxpdHlEZXRhaWxzLnJlbW92ZSgpO1xuICAgIGNoYW1waW9uVGlwcy5yZW1vdmUoKTtcbiAgfTtcblxuICBjb25zdCBjbGVhclN0YXRzTW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3RhdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhdHMtY29udGFpbmVyJyk7XG4gICAgY29uc3QgY2hhbXBpb25OYW1lID0gc3RhdHNDb250YWluZXIucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLW5hbWUnKTtcbiAgICBjb25zdCBjaGFtcGlvblRpdGxlID0gc3RhdHNDb250YWluZXIucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLXRpdGxlJyk7XG4gICAgY29uc3QgY2hhbXBpb25TdGF0c092ZXJ2aWV3ID0gc3RhdHNDb250YWluZXIucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLXN0YXRzLW92ZXJ2aWV3Jyk7XG4gICAgY29uc3QgYWxsZGFtYWdlU3RhdHMgPSBzdGF0c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuZGFtYWdlLXN0YXRzJyk7XG4gICAgY29uc3QgaXRlbVNldHNDb250YWluZXIgPSBzdGF0c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuaXRlbS1zZXRzLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGJlc3RNYXRjaHVwcyA9IHN0YXRzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5iZXN0LW1hdGNodXBzJyk7XG4gICAgY29uc3Qgd29yc3RNYXRjaHVwcyA9IHN0YXRzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy53b3JzdC1tYXRjaHVwcycpO1xuXG4gICAgY29uc3Qgc3RhdHNNb2RhbEhlYWRlciA9IFtjaGFtcGlvbk5hbWUsIGNoYW1waW9uVGl0bGUsIGNoYW1waW9uU3RhdHNPdmVydmlld107XG4gICAgc3RhdHNNb2RhbEhlYWRlci5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICBjdXJyZW50RWxlbWVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgIH0pO1xuICAgIGFsbGRhbWFnZVN0YXRzLmZvckVhY2goKGRhbWFnZVN0YXQpID0+IHtcbiAgICAgIGNvbnN0IGRhbWFnZVN0YXRFbGVtZW50ID0gZGFtYWdlU3RhdDtcbiAgICAgIGRhbWFnZVN0YXRFbGVtZW50LnJlbW92ZSgpO1xuICAgIH0pO1xuICAgIGNvbnN0IHN0YXRzTW9kYWxDb250ZW50ID0gW2l0ZW1TZXRzQ29udGFpbmVyLCBiZXN0TWF0Y2h1cHMsIHdvcnN0TWF0Y2h1cHNdO1xuICAgIHN0YXRzTW9kYWxDb250ZW50LmZvckVhY2goKGNvbnRlbnQpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnRFbGVtZW50ID0gY29udGVudDtcbiAgICAgIGNvbnRlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyU2tpbnNNb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCBza2luSW1hZ2VzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNraW4taW1hZ2VzLWNvbnRhaW5lcicpO1xuICAgIHNraW5JbWFnZXNDb250YWluZXIucmVtb3ZlKCk7XG4gIH07XG5cbiAgY29uc3QgY2xvc2VDaGFtcGlvbk1vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHN0YXRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YXRzLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHNraW5zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NraW5zLWNvbnRhaW5lcicpO1xuXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBtYWluQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHN0YXRzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgc2tpbnNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfTtcblxuICBjb25zdCBtb2RhbENsaWNrRXZlbnRzID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcblxuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnc3BlbGwtaW1nJykge1xuICAgICAgY29uc3QgZGFzaEluZGV4ID0gZXZlbnQudGFyZ2V0LmlkLmluZGV4T2YoJy0nKTtcbiAgICAgIGNvbnN0IGFiaWxpdHlJZCA9IGV2ZW50LnRhcmdldC5pZC5zbGljZSgwLCBkYXNoSW5kZXgpO1xuICAgICAgdG9nZ2xlQWN0aXZlQWJpbGl0eShhYmlsaXR5SWQpO1xuICAgIH1cblxuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnbW9kYWwtbmF2LWxpbmsnKSB7XG4gICAgICBjaGFuZ2VNb2RhbFRlbXBsYXRlKGV2ZW50LnRhcmdldCk7XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmZyb20oZXZlbnQudGFyZ2V0LmNsYXNzTGlzdCkuaW5jbHVkZXMoJ2ltZy1zY3JvbGwtYXJyb3cnKSkge1xuICAgICAgdG9nZ2xlU2tpbkltYWdlcyhBcnJheS5mcm9tKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QpKTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2Nsb3NlLW1vZGFsLWJ0bicpIHtcbiAgICAgIG1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbW9kYWxDbGlja0V2ZW50cyk7XG4gICAgICBjbG9zZUNoYW1waW9uTW9kYWwoKTtcbiAgICAgIGNsZWFyTWFpbk1vZGFsKCk7XG4gICAgICBjbGVhclN0YXRzTW9kYWwoKTtcbiAgICAgIGNsZWFyU2tpbnNNb2RhbCgpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBtb2RhbE1vdXNlb3ZlckV2ZW50cyA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnaXRlbS1pbWcnXG4gICAgICB8fCBldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnY29tcG9uZW50LWl0ZW0taW1nJykge1xuICAgICAgZGlzcGF5SXRlbURldGFpbHMoZXZlbnQudGFyZ2V0KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbW9kYWxNb3VzZW91dEV2ZW50cyA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnaXRlbS1pbWcnXG4gICAgfHwgZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2NvbXBvbmVudC1pdGVtLWltZycpIHtcbiAgICAgIGlmICghZXZlbnQudGFyZ2V0KSByZXR1cm47XG5cbiAgICAgIGxldCB7IHJlbGF0ZWRUYXJnZXQgfSA9IGV2ZW50O1xuXG4gICAgICB3aGlsZSAocmVsYXRlZFRhcmdldCkge1xuICAgICAgICBpZiAocmVsYXRlZFRhcmdldCA9PT0gZXZlbnQudGFyZ2V0KSByZXR1cm47XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQgPSByZWxhdGVkVGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICB9XG5cbiAgICAgIGhpZGVJdGVtRGV0YWlscyhldmVudC50YXJnZXQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBtb2RhbENoYW5nZUxpc3RlbmVycyA9ICgpID0+IHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuXG4gICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtb2RhbENsaWNrRXZlbnRzKTtcblxuICAgIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIG1vZGFsTW91c2VvdmVyRXZlbnRzKTtcblxuICAgIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgbW9kYWxNb3VzZW91dEV2ZW50cyk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBtb2RhbENoYW5nZUxpc3RlbmVycyxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IENoYW1waW9uTW9kYWxDb250cm9sbGVyO1xuIiwiaW1wb3J0IGdldENoYW1waW9uRGV0YWlscyBmcm9tICcuLi9jaGFtcGlvbkRhdGEvY2hhbXBpb25EZXRhaWxzJztcbmltcG9ydCBnZXRDaGFtcGlvblN0YXRzIGZyb20gJy4uL2NoYW1waW9uRGF0YS9jaGFtcGlvblN0YXRzJztcbmltcG9ydCBjaGFtcGlvbkRldGFpbHNNb2RhbCBmcm9tICcuLi90ZW1wbGF0ZXMvY2hhbXBpb25EZXRhaWxzTW9kYWwnO1xuaW1wb3J0IGNoYW1waW9uU3RhdHNNb2RhbCBmcm9tICcuLi90ZW1wbGF0ZXMvY2hhbXBpb25TdGF0c01vZGFsJztcbmltcG9ydCBjaGFtcGlvblNraW5zTW9kYWwgZnJvbSAnLi4vdGVtcGxhdGVzL2NoYW1waW9uU2tpbnNNb2RhbCc7XG5pbXBvcnQgQ2hhbXBpb25Nb2RhbENvbnRyb2xsZXIgZnJvbSAnLi9jaGFtcGlvbk1vZGFsQ29udHJvbGxlcic7XG5pbXBvcnQgQ2hhbXBpb25GaWx0ZXIgZnJvbSAnLi9maWx0ZXJDaGFtcGlvbnMnO1xuaW1wb3J0IFNvcnRDaGFtcGlvbnMgZnJvbSAnLi9zb3J0Q2hhbXBpb25zJztcbmltcG9ydCB7IGdldEFsbENoYW1waW9uRGV0YWlscywgZ2V0QWxsQ2hhbXBpb25TdGF0cyB9IGZyb20gJy4uL2NoYW1waW9uRGF0YS9nZXRBbGxDaGFtcGlvbnMnO1xuXG5jb25zdCBDaGFtcGlvbnNQYWdlQ29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGNvbnN0IGRpc3BsYXlEcm9wZG93bk9wdGlvbnMgPSAoZHJvcGRvd25PcHRpb25zKSA9PiB7XG4gICAgY29uc3QgYWxsRHJvcGRvd25PcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duLW9wdGlvbnMnKTtcbiAgICBhbGxEcm9wZG93bk9wdGlvbnMuZm9yRWFjaCgob3B0aW9ucykgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uc1N0eWxlID0gb3B0aW9ucy5zdHlsZTtcbiAgICAgIG9wdGlvbnNTdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZHJvcGRvd25PcHRpb25zU3R5bGUgPSBkcm9wZG93bk9wdGlvbnMuc3R5bGU7XG4gICAgZHJvcGRvd25PcHRpb25zU3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgfTtcblxuICBjb25zdCBoaWRlRHJvcGRvd25PcHRpb25zID0gKGRyb3Bkb3duT3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IGRyb3Bkb3duT3B0aW9uc1N0eWxlID0gZHJvcGRvd25PcHRpb25zLnN0eWxlO1xuICAgIGRyb3Bkb3duT3B0aW9uc1N0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH07XG5cbiAgY29uc3QgZHJvcGRvd25PcHRpb25zVG9nZ2xlID0gKGRyb3Bkb3duQnRuKSA9PiB7XG4gICAgY29uc3QgZHJvcGRvd25PcHRpb25zID0gZHJvcGRvd25CdG4ucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24tb3B0aW9ucycpO1xuICAgIGlmIChkcm9wZG93bk9wdGlvbnMuc3R5bGUuZGlzcGxheSAhPT0gJ2ZsZXgnKSB7XG4gICAgICBkaXNwbGF5RHJvcGRvd25PcHRpb25zKGRyb3Bkb3duT3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhpZGVEcm9wZG93bk9wdGlvbnMoZHJvcGRvd25PcHRpb25zKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheUNoYW1waW9uTW9kYWwgPSBhc3luYyAoY2hhbXBpb25JZCkgPT4ge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG4gICAgY29uc3QgY2hhbXBpb25EZXRhaWxzID0gYXdhaXQgZ2V0Q2hhbXBpb25EZXRhaWxzKGNoYW1waW9uSWQpO1xuXG4gICAgY29uc3QgY2hhbXBpb25TdGF0cyA9IGF3YWl0IGdldENoYW1waW9uU3RhdHMoY2hhbXBpb25JZCk7XG5cbiAgICBjb25zdCBza2luSW1hZ2VzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNraW4taW1hZ2VzLWNvbnRhaW5lcicpO1xuICAgIC8qXG4gICAgICBwdXJwb3NlIG9mIHRoZSBpZiBzdGF0ZW1lbnQgaXMgdG8gcHJldmVudCBzcGFtIGNsaWNrcyBmcm9tIHJlbmRlcmluZ1xuICAgICAgZHVwbGljYXRlIGNvbnRlbnQgb250byB0aGUgY2hhbXBpb24gbW9kYWwuXG4gICAgKi9cbiAgICBpZiAoIXNraW5JbWFnZXNDb250YWluZXIpIHtcbiAgICAgIGNoYW1waW9uRGV0YWlsc01vZGFsKGNoYW1waW9uRGV0YWlscyk7XG4gICAgICBjaGFtcGlvblN0YXRzTW9kYWwoY2hhbXBpb25EZXRhaWxzLCBjaGFtcGlvblN0YXRzKTtcbiAgICAgIGNoYW1waW9uU2tpbnNNb2RhbChjaGFtcGlvbkRldGFpbHMpO1xuICAgIH1cblxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIENoYW1waW9uTW9kYWxDb250cm9sbGVyLm1vZGFsQ2hhbmdlTGlzdGVuZXJzKCk7XG4gIH07XG5cbiAgY29uc3Qgc2VsZWN0TGFuZUZpbHRlck9wdGlvbiA9IChjbGlja2VkTGFuZU9wdGlvbikgPT4ge1xuICAgIGNvbnN0IGNoYW1waW9uc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb25zLXNlY3Rpb24nKTtcbiAgICBjb25zdCBhY3RpdmVMYW5lT3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1vcHRpb24uYWN0aXZlJyk7XG4gICAgaWYgKGNsaWNrZWRMYW5lT3B0aW9uID09PSBhY3RpdmVMYW5lT3B0aW9uIHx8IGNoYW1waW9uc1NlY3Rpb24uc3R5bGUudmlzaWJpbGl0eSA9PT0gJ2hpZGRlbicpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgYWN0aXZlTGFuZU9wdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBjbGlja2VkTGFuZU9wdGlvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrTGFuZUZpbHRlck9wdGlvbiA9IGFzeW5jIChhbGxDaGFtcGlvblN0YXRzKSA9PiB7XG4gICAgY29uc3QgYWN0aXZlTGFuZU9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItb3B0aW9uLmFjdGl2ZScpO1xuICAgIGNvbnN0IGxhbmVOYW1lID0gYWN0aXZlTGFuZU9wdGlvbi5jbGFzc0xpc3RbMF07XG4gICAgYXdhaXQgQ2hhbXBpb25GaWx0ZXIuZmlsdGVyQnlMYW5lKGxhbmVOYW1lLCBhbGxDaGFtcGlvblN0YXRzKTtcbiAgfTtcblxuICBjb25zdCBjaGVja1NvcnRpbmdPcHRpb24gPSAoYWxsQ2hhbXBpb25TdGF0cykgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZVNvcnRpbmdPcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc29ydC5hY3RpdmUnKTtcbiAgICBpZiAoYWN0aXZlU29ydGluZ09wdGlvbiA9PT0gbnVsbCkge1xuICAgICAgU29ydENoYW1waW9ucy5zb3J0QnlEZWZhdWx0T3JkZXIoYWxsQ2hhbXBpb25TdGF0cyk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5mcm9tKGFjdGl2ZVNvcnRpbmdPcHRpb24uY2xhc3NMaXN0KS5pbmNsdWRlcygnd2lucmF0ZScpKSB7XG4gICAgICBTb3J0Q2hhbXBpb25zLnNvcnRDaGFtcGlvbnNCeVdpbnJhdGUoYWxsQ2hhbXBpb25TdGF0cyk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5mcm9tKGFjdGl2ZVNvcnRpbmdPcHRpb24uY2xhc3NMaXN0KS5pbmNsdWRlcygncGlja3JhdGUnKSkge1xuICAgICAgU29ydENoYW1waW9ucy5zb3J0Q2hhbXBpb25zQnlQaWNrcmF0ZShhbGxDaGFtcGlvblN0YXRzKTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmZyb20oYWN0aXZlU29ydGluZ09wdGlvbi5jbGFzc0xpc3QpLmluY2x1ZGVzKCdkYW1hZ2UnKSkge1xuICAgICAgU29ydENoYW1waW9ucy5zb3J0Q2hhbXBpb25zQnlEYW1hZ2VEb25lKGFsbENoYW1waW9uU3RhdHMpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjaGVja0FjdGl2ZVJvbGVPcHRpb25zID0gKGFsbENoYW1waW9uRGV0YWlscykgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZVJvbGVPcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJvbGUuYWN0aXZlJyk7XG4gICAgaWYgKGFjdGl2ZVJvbGVPcHRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBhY3RpdmVSb2xlcyA9IEFycmF5LmZyb20oYWN0aXZlUm9sZU9wdGlvbnMpLm1hcCgoYWN0aXZlUm9sZU9wdGlvbikgPT4ge1xuICAgICAgY29uc3QgYWN0aXZlUm9sZSA9IGFjdGl2ZVJvbGVPcHRpb24uY2xhc3NMaXN0WzBdO1xuICAgICAgcmV0dXJuIGFjdGl2ZVJvbGU7XG4gICAgfSk7XG4gICAgQ2hhbXBpb25GaWx0ZXIuZmlsdGVyQnlSb2xlKGFjdGl2ZVJvbGVzLCBhbGxDaGFtcGlvbkRldGFpbHMpO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrQWN0aXZlRGlmZmljdWx0eU9wdGlvbnMgPSAoYWxsQ2hhbXBpb25EZXRhaWxzKSA9PiB7XG4gICAgY29uc3QgYWN0aXZlRGlmZmljdWx0eU9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGlmZmljdWx0eS5hY3RpdmUnKTtcbiAgICBpZiAoYWN0aXZlRGlmZmljdWx0eU9wdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGFjdGl2ZURpZmZpY3VsdGllcyA9IEFycmF5LmZyb20oYWN0aXZlRGlmZmljdWx0eU9wdGlvbnMpLm1hcCgoYWN0aXZlRGlmZmljdWx0eU9wdGlvbikgPT4ge1xuICAgICAgY29uc3QgYWN0aXZlRGlmZmljdWx0eSA9IGFjdGl2ZURpZmZpY3VsdHlPcHRpb24uY2xhc3NMaXN0WzBdO1xuICAgICAgcmV0dXJuIGFjdGl2ZURpZmZpY3VsdHk7XG4gICAgfSk7XG4gICAgQ2hhbXBpb25GaWx0ZXIuZmlsdGVyQnlEaWZmaWN1bHR5KGFjdGl2ZURpZmZpY3VsdGllcywgYWxsQ2hhbXBpb25EZXRhaWxzKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBzZWxlY3RNdWx0aURyb3Bkb3duT3B0aW9uID0gKGRyb3Bkb3duT3B0aW9uKSA9PiB7XG4gICAgZHJvcGRvd25PcHRpb24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIH07XG5cbiAgY29uc3QgZGVzZWxlY3REcm9wZG93bk9wdGlvbiA9IChkcm9wZG93bk9wdGlvbikgPT4ge1xuICAgIGRyb3Bkb3duT3B0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZURyb3Bkb3duT3B0aW9uID0gKGRyb3Bkb3duT3B0aW9uKSA9PiB7XG4gICAgaWYgKCFBcnJheS5mcm9tKGRyb3Bkb3duT3B0aW9uLmNsYXNzTGlzdCkuaW5jbHVkZXMoJ2FjdGl2ZScpKSB7XG4gICAgICBzZWxlY3RNdWx0aURyb3Bkb3duT3B0aW9uKGRyb3Bkb3duT3B0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVzZWxlY3REcm9wZG93bk9wdGlvbihkcm9wZG93bk9wdGlvbik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNlbGVjdFNpbmdsZURyb3Bkb3duT3B0aW9uID0gKGRyb3Bkb3duT3B0aW9uKSA9PiB7XG4gICAgY29uc3QgYWN0aXZlRHJvcGRvd25PcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2luZ2xlLXNlbGVjdC5hY3RpdmUnKTtcbiAgICBpZiAoYWN0aXZlRHJvcGRvd25PcHRpb24gPT09IG51bGwpIHtcbiAgICAgIGRyb3Bkb3duT3B0aW9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoYWN0aXZlRHJvcGRvd25PcHRpb24gPT09IGRyb3Bkb3duT3B0aW9uKSB7XG4gICAgICBkZXNlbGVjdERyb3Bkb3duT3B0aW9uKGRyb3Bkb3duT3B0aW9uKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYWN0aXZlRHJvcGRvd25PcHRpb24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgZHJvcGRvd25PcHRpb24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIH07XG5cbiAgY29uc3QgY2hhbXBpb25zUGFnZUNsaWNrRXZlbnRzID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgLyogSGVscGVyIGZ1bmN0aW9ucyBmb3IgY2xpY2sgZXZlbnRzICovXG4gICAgY29uc3QgY2hlY2tPcHRpb25zID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgYWxsQ2hhbXBpb25TdGF0cyA9IGF3YWl0IGdldEFsbENoYW1waW9uU3RhdHMoKTtcbiAgICAgIGNvbnN0IGFsbENoYW1waW9uRGV0YWlscyA9IGF3YWl0IGdldEFsbENoYW1waW9uRGV0YWlscygpO1xuICAgICAgYXdhaXQgY2hlY2tMYW5lRmlsdGVyT3B0aW9uKGFsbENoYW1waW9uU3RhdHMpO1xuICAgICAgY2hlY2tTb3J0aW5nT3B0aW9uKGFsbENoYW1waW9uU3RhdHMpO1xuICAgICAgY2hlY2tBY3RpdmVSb2xlT3B0aW9ucyhhbGxDaGFtcGlvbkRldGFpbHMpO1xuICAgICAgY2hlY2tBY3RpdmVEaWZmaWN1bHR5T3B0aW9ucyhhbGxDaGFtcGlvbkRldGFpbHMpO1xuICAgIH07XG5cbiAgICBjb25zdCBoaWRlQ2hhbXBpb25zU2VjdGlvbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGNoYW1waW9uc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb25zLXNlY3Rpb24nKTtcbiAgICAgIGNoYW1waW9uc1NlY3Rpb24uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIH07XG5cbiAgICBjb25zdCBzaG93Q2hhbXBpb25zU2VjdGlvbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGNoYW1waW9uc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb25zLXNlY3Rpb24nKTtcbiAgICAgIGNoYW1waW9uc1NlY3Rpb24uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICB9O1xuXG4gICAgY29uc3QgcmVtb3ZlQ2hhbXBpb25zUGFnZUxpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgY29uc3QgY2hhbXBpb25zUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGFtcGlvbnMtcGFnZScpO1xuICAgICAgY2hhbXBpb25zUGFnZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW1waW9uc1BhZ2VDbGlja0V2ZW50cyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZENoYW1waW9uc1BhZ2VMaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGNoYW1waW9uc1BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hhbXBpb25zLXBhZ2UnKTtcbiAgICAgIGNoYW1waW9uc1BhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFtcGlvbnNQYWdlQ2xpY2tFdmVudHMpO1xuICAgIH07XG5cbiAgICBjb25zdCBzaG93TG9hZGVyID0gKCkgPT4ge1xuICAgICAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlcicpO1xuICAgICAgbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH07XG5cbiAgICBjb25zdCBoaWRlTG9hZGVyID0gKCkgPT4ge1xuICAgICAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlcicpO1xuICAgICAgbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfTtcblxuICAgIGNvbnN0IGZpbHRlckFuZFNvcnRDaGFtcGlvbnNTZWN0aW9uID0gYXN5bmMgKHdhaXRUaW1lKSA9PiB7XG4gICAgICBoaWRlQ2hhbXBpb25zU2VjdGlvbigpO1xuICAgICAgc2hvd0xvYWRlcigpO1xuICAgICAgcmVtb3ZlQ2hhbXBpb25zUGFnZUxpc3RlbmVyKCk7XG4gICAgICBhd2FpdCBjaGVja09wdGlvbnMoKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzaG93Q2hhbXBpb25zU2VjdGlvbigpO1xuICAgICAgICBoaWRlTG9hZGVyKCk7XG4gICAgICB9LCB3YWl0VGltZSk7XG4gICAgICBhZGRDaGFtcGlvbnNQYWdlTGlzdGVuZXIoKTtcbiAgICB9O1xuXG4gICAgLyogY2xpY2sgZXZlbnQgcmVzcG9uc2VzICovXG4gICAgaWYgKEFycmF5LmZyb20oZXZlbnQudGFyZ2V0LmNsYXNzTGlzdCkuaW5jbHVkZXMoJ2Ryb3Bkb3duLWJ0bicpKSB7XG4gICAgICBkcm9wZG93bk9wdGlvbnNUb2dnbGUoZXZlbnQudGFyZ2V0KTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lID09PSAnY2hhbXBpb24tY29udGFpbmVyIHNob3duJykge1xuICAgICAgZGlzcGxheUNoYW1waW9uTW9kYWwoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pZCk7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lID09PSAnY2hhbXBpb24tY29udGFpbmVyIHNob3duJykge1xuICAgICAgZGlzcGxheUNoYW1waW9uTW9kYWwoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5kYXRhc2V0LmlkKTtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuZnJvbShldmVudC50YXJnZXQuY2xhc3NMaXN0KS5pbmNsdWRlcygnbXVsdGktc2VsZWN0JykpIHtcbiAgICAgIHRvZ2dsZURyb3Bkb3duT3B0aW9uKGV2ZW50LnRhcmdldCk7XG4gICAgICBmaWx0ZXJBbmRTb3J0Q2hhbXBpb25zU2VjdGlvbig2MDApO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5mcm9tKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QpLmluY2x1ZGVzKCdzaW5nbGUtc2VsZWN0JykpIHtcbiAgICAgIHNlbGVjdFNpbmdsZURyb3Bkb3duT3B0aW9uKGV2ZW50LnRhcmdldCk7XG4gICAgICBmaWx0ZXJBbmRTb3J0Q2hhbXBpb25zU2VjdGlvbigxMDAwKTtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuZnJvbShldmVudC50YXJnZXQuY2xhc3NMaXN0KS5pbmNsdWRlcygnaGVhZGVyLW9wdGlvbicpKSB7XG4gICAgICBzZWxlY3RMYW5lRmlsdGVyT3B0aW9uKGV2ZW50LnRhcmdldCk7XG4gICAgICBmaWx0ZXJBbmRTb3J0Q2hhbXBpb25zU2VjdGlvbig2MDApO1xuICAgIH1cblxuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnYXV0by1jb21wbGV0ZS1uYW1lLXdyYXBwZXInKSB7XG4gICAgICBjb25zdCBhdXRvQ29tcGxldGVOYW1lID0gZXZlbnQudGFyZ2V0LmZpcnN0Q2hpbGQ7XG4gICAgICBkaXNwbGF5Q2hhbXBpb25Nb2RhbChhdXRvQ29tcGxldGVOYW1lLmRhdGFzZXQuY2hhbXBpb25JZCk7XG4gICAgICBjb25zdCBhdXRvQ29tcGxldGVOYW1lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdXRvLWNvbXBsZXRlLW5hbWVzJyk7XG4gICAgICBhdXRvQ29tcGxldGVOYW1lcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cblxuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnYXV0by1jb21wbGV0ZS1uYW1lJykge1xuICAgICAgZGlzcGxheUNoYW1waW9uTW9kYWwoZXZlbnQudGFyZ2V0LmRhdGFzZXQuY2hhbXBpb25JZCk7XG4gICAgICBjb25zdCBhdXRvQ29tcGxldGVOYW1lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdXRvLWNvbXBsZXRlLW5hbWVzJyk7XG4gICAgICBhdXRvQ29tcGxldGVOYW1lcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjaGFtcGlvbnNQYWdlTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IGNoYW1waW9uc1BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hhbXBpb25zLXBhZ2UnKTtcbiAgICBjaGFtcGlvbnNQYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbXBpb25zUGFnZUNsaWNrRXZlbnRzKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNoYW1waW9uc1BhZ2VMaXN0ZW5lcnMsXG4gICAgZGlzcGxheUNoYW1waW9uTW9kYWwsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBDaGFtcGlvbnNQYWdlQ29udHJvbGxlcjtcbiIsImltcG9ydCBnZXRDaGFtcGlvblN0YXRzIGZyb20gJy4uL2NoYW1waW9uRGF0YS9jaGFtcGlvblN0YXRzJztcbmltcG9ydCB7IGNyZWF0ZUNoYW1waW9uQ29udGFpbmVyIH0gZnJvbSAnLi4vdGVtcGxhdGVzL3JlbmRlckhlbHBlcnMnO1xuXG5jb25zdCBDaGFtcGlvbkZpbHRlciA9ICgoKSA9PiB7XG4gIGNvbnN0IHJlbmRlckFsbENoYW1waW9ucyA9IGFzeW5jIChhbGxDaGFtcGlvblN0YXRzKSA9PiB7XG4gICAgY29uc3QgY2hhbXBpb25zU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbnMtc2VjdGlvbicpO1xuICAgIGFsbENoYW1waW9uU3RhdHMuZm9yRWFjaCgoY2hhbXBpb24pID0+IHtcbiAgICAgIGNyZWF0ZUNoYW1waW9uQ29udGFpbmVyKGNoYW1waW9uLCBjaGFtcGlvbnNTZWN0aW9uKTtcbiAgICB9KTtcbiAgICByZXR1cm4gY2hhbXBpb25zU2VjdGlvbjtcbiAgfTtcblxuICBjb25zdCBjbGVhckNoYW1waW9uc1NlY3Rpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgY2hhbXBpb25zU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbnMtc2VjdGlvbicpO1xuICAgIGNoYW1waW9uc1NlY3Rpb24udGV4dENvbnRlbnQgPSAnJztcbiAgfTtcblxuICBjb25zdCBzaG93Q2hhbXBpb24gPSAoY2hhbXBpb24pID0+IHtcbiAgICBjaGFtcGlvbi5jbGFzc0xpc3QuYWRkKCdzaG93bicpO1xuICAgIGNoYW1waW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICB9O1xuXG4gIGNvbnN0IGhpZGVDaGFtcGlvbiA9IChjaGFtcGlvbikgPT4ge1xuICAgIGNoYW1waW9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIGNoYW1waW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3duJyk7XG4gIH07XG5cbiAgY29uc3QgZmlsdGVyQnlMYW5lID0gYXN5bmMgKGNsaWNrZWRMYW5lLCBhbGxDaGFtcGlvblN0YXRzKSA9PiB7XG4gICAgY2xlYXJDaGFtcGlvbnNTZWN0aW9uKCk7XG4gICAgY29uc3QgY2hhbXBpb25zU2VjdGlvbiA9IGF3YWl0IHJlbmRlckFsbENoYW1waW9ucyhhbGxDaGFtcGlvblN0YXRzKTtcbiAgICBjaGFtcGlvbnNTZWN0aW9uLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICBjb25zdCBhbGxDaGFtcGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhbXBpb24tY29udGFpbmVyJyk7XG4gICAgaWYgKGNsaWNrZWRMYW5lID09PSAnYWxsJykge1xuICAgICAgYWxsQ2hhbXBpb25zLmZvckVhY2goKGNoYW1waW9uKSA9PiB7XG4gICAgICAgIHNob3dDaGFtcGlvbihjaGFtcGlvbik7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICAgICAgYWxsQ2hhbXBpb25zLmZvckVhY2goKGNoYW1waW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoYW1waW9uSWQgPSBjaGFtcGlvbi5kYXRhc2V0LmlkO1xuICAgICAgICByZXN1bHRzLnB1c2goZ2V0Q2hhbXBpb25TdGF0cyhjaGFtcGlvbklkKSk7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGNoYW1waW9uU3RhdHMgPSBhd2FpdCBQcm9taXNlLmFsbChyZXN1bHRzKTtcbiAgICAgIGNoYW1waW9uU3RhdHMuZm9yRWFjaCgoY2hhbXBpb24pID0+IHtcbiAgICAgICAgY29uc3QgY2hhbXBpb25MYW5lID0gY2hhbXBpb24ubGFuZTtcbiAgICAgICAgY29uc3QgY2hhbXBpb25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9JHtjaGFtcGlvbi5jaGFtcGlvbklkfV1gKTtcbiAgICAgICAgaWYgKGNoYW1waW9uTGFuZS50b0xvd2VyQ2FzZSgpICE9PSBjbGlja2VkTGFuZSkge1xuICAgICAgICAgIGhpZGVDaGFtcGlvbihjaGFtcGlvbkVsZW1lbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNob3dDaGFtcGlvbihjaGFtcGlvbkVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZmlsdGVyQnlSb2xlID0gKGFjdGl2ZVJvbGVzLCBhbGxDaGFtcGlvbkRldGFpbHMpID0+IHtcbiAgICBjb25zdCBjaGFtcGlvbkVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYW1waW9uLWNvbnRhaW5lcicpO1xuXG4gICAgY2hhbXBpb25FbGVtZW50cy5mb3JFYWNoKChjaGFtcGlvbikgPT4ge1xuICAgICAgbGV0IHJvbGVNYXRjaEZvdW5kID0gZmFsc2U7XG4gICAgICBhY3RpdmVSb2xlcy5mb3JFYWNoKChyb2xlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoYW1waW9uUm9sZXMgPSBhbGxDaGFtcGlvbkRldGFpbHNbY2hhbXBpb24uZGF0YXNldC5pZF0udGFncztcbiAgICAgICAgY2hhbXBpb25Sb2xlcy5mb3JFYWNoKChjaGFtcGlvblJvbGUpID0+IHtcbiAgICAgICAgICBpZiAoY2hhbXBpb25Sb2xlLnRvTG93ZXJDYXNlKCkgPT09IHJvbGUpIHtcbiAgICAgICAgICAgIHJvbGVNYXRjaEZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBpZiAoIXJvbGVNYXRjaEZvdW5kKSB7XG4gICAgICAgIGhpZGVDaGFtcGlvbihjaGFtcGlvbik7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgY2F0ZWdvcmlzZURpZmZpY3VsdHlOdW0gPSAoZGlmZmljdWx0eU51bSkgPT4ge1xuICAgIGlmIChkaWZmaWN1bHR5TnVtIDw9IDMpIHtcbiAgICAgIHJldHVybiAnbG93JztcbiAgICB9XG5cbiAgICBpZiAoZGlmZmljdWx0eU51bSA8PSA2KSB7XG4gICAgICByZXR1cm4gJ21lZGl1bSc7XG4gICAgfVxuXG4gICAgcmV0dXJuICdoaWdoJztcbiAgfTtcblxuICBjb25zdCBmaWx0ZXJCeURpZmZpY3VsdHkgPSBhc3luYyAoYWN0aXZlRGlmZmljdWx0aWVzLCBhbGxDaGFtcGlvbkRldGFpbHMpID0+IHtcbiAgICBjb25zdCBjaGFtcGlvbkVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYW1waW9uLWNvbnRhaW5lcicpO1xuXG4gICAgY2hhbXBpb25FbGVtZW50cy5mb3JFYWNoKChjaGFtcGlvbikgPT4ge1xuICAgICAgbGV0IGRpZmZpY3VsdHlNYXRjaEZvdW5kID0gZmFsc2U7XG4gICAgICBhY3RpdmVEaWZmaWN1bHRpZXMuZm9yRWFjaCgoZGlmZmljdWx0eSkgPT4ge1xuICAgICAgICBjb25zdCBjaGFtcGlvbkRpZmZpY3VsdHlOdW0gPSBhbGxDaGFtcGlvbkRldGFpbHNbY2hhbXBpb24uZGF0YXNldC5pZF0uaW5mby5kaWZmaWN1bHR5O1xuICAgICAgICBjb25zdCBjaGFtcGlvbkRpZmZpY3VsdHkgPSBjYXRlZ29yaXNlRGlmZmljdWx0eU51bShjaGFtcGlvbkRpZmZpY3VsdHlOdW0pO1xuXG4gICAgICAgIGlmIChkaWZmaWN1bHR5LnRvTG93ZXJDYXNlKCkgPT09IGNoYW1waW9uRGlmZmljdWx0eSkge1xuICAgICAgICAgIGRpZmZpY3VsdHlNYXRjaEZvdW5kID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAoIWRpZmZpY3VsdHlNYXRjaEZvdW5kKSB7XG4gICAgICAgIGhpZGVDaGFtcGlvbihjaGFtcGlvbik7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBmaWx0ZXJCeUxhbmUsXG4gICAgZmlsdGVyQnlSb2xlLFxuICAgIGZpbHRlckJ5RGlmZmljdWx0eSxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IENoYW1waW9uRmlsdGVyO1xuIiwiaW1wb3J0IENoYW1waW9uc1BhZ2VDb250cm9sbGVyIGZyb20gJy4vY2hhbXBpb25zUGFnZUNvbnRyb2xsZXInO1xuXG5jb25zdCBTZWFyY2hiYXJDb250cm9sbGVyID0gKCgpID0+IHtcbiAgY29uc3Qgc2hvd0F1dG9Db21wbGV0ZU5hbWVzID0gKCkgPT4ge1xuICAgIGNvbnN0IGF1dG9Db21wbGV0ZU5hbWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF1dG8tY29tcGxldGUtbmFtZXMnKTtcbiAgICBhdXRvQ29tcGxldGVOYW1lcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfTtcblxuICBjb25zdCBoaWRlQXV0b0NvbXBsZXRlTmFtZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgYXV0b0NvbXBsZXRlTmFtZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXV0by1jb21wbGV0ZS1uYW1lcycpO1xuICAgIGF1dG9Db21wbGV0ZU5hbWVzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH07XG5cbiAgY29uc3Qgc2VhcmNoYmFyRm9jdXNJbkV2ZW50ID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdzZWFyY2gnKSB7XG4gICAgICBzaG93QXV0b0NvbXBsZXRlTmFtZXMoKTtcbiAgICAgIGV2ZW50LnRhcmdldC5mb2N1cygpO1xuICAgICAgLy8gY29uc3QgYXV0b0NvbXBsZXRlTmFtZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXV0by1jb21wbGV0ZS1uYW1lcycpO1xuICAgICAgLy8gYXV0b0NvbXBsZXRlTmFtZXMuZmlyc3RFbGVtZW50Q2hpbGQuZm9jdXMoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2VhcmNoYmFyRm9jdXNvdXRFdmVudCA9IChldmVudCkgPT4ge1xuICAgIGlmICghZXZlbnQucmVsYXRlZFRhcmdldCB8fCAoZXZlbnQucmVsYXRlZFRhcmdldC5jbGFzc05hbWUgIT09ICdhdXRvLWNvbXBsZXRlLW5hbWUtd3JhcHBlcicgJiYgZXZlbnQucmVsYXRlZFRhcmdldC5jbGFzc05hbWUgIT09ICdzZWFyY2gnKSkge1xuICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0KTtcbiAgICAgIGhpZGVBdXRvQ29tcGxldGVOYW1lcygpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZWFyY2hCYXJJbnB1dEV2ZW50ID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdzZWFyY2gnKSB7XG4gICAgICBjb25zdCBpbnB1dFZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgY29uc3QgYXV0b0NvbXBsZXRlTmFtZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXV0by1jb21wbGV0ZS1uYW1lJyk7XG4gICAgICBhdXRvQ29tcGxldGVOYW1lcy5mb3JFYWNoKChhdXRvQ29tcGxldGVOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBhdXRvQ29tcGxldGVOYW1lO1xuICAgICAgICBpZiAobmFtZS5pZC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICBuYW1lLnBhcmVudEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmFtZS5wYXJlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZWFyY2hiYXJLZXlkb3duRXZlbnRzID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93RG93bicgfHwgZXZlbnQua2V5ID09PSAnQXJyb3dVcCcpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBsZXQgeyBhY3RpdmVFbGVtZW50IH0gPSBkb2N1bWVudDtcbiAgICAgIGxldCBnb1RvU3RhcnQ7XG4gICAgICBjb25zdCBhY3Rpb24gPSB7XG4gICAgICAgIEFycm93VXA6ICdwcmV2aW91cycsIEFycm93RG93bjogJ25leHQnLFxuICAgICAgfTtcblxuICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQuY2xhc3NOYW1lID09PSAnc2VhcmNoJyAmJiBldmVudC5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICAgIGFjdGl2ZUVsZW1lbnQgPSBhY3RpdmVFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgLyogU2tpcHMgYXV0b2NvbXBsZXRlIG5hbWVzIHdoaWNoIGFyZSBjdXJyZW50bHkgbm90IGRpc3BsYXllZCAqL1xuICAgICAgICB3aGlsZSAoYWN0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgICBhY3RpdmVFbGVtZW50ID0gYWN0aXZlRWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIH1cbiAgICAgICAgYWN0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWN0aXZlRWxlbWVudCA9IGFjdGl2ZUVsZW1lbnRbYCR7YWN0aW9uW2V2ZW50LmtleV19RWxlbWVudFNpYmxpbmdgXTtcbiAgICAgICAgd2hpbGUgKGFjdGl2ZUVsZW1lbnQgJiYgYWN0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgICBhY3RpdmVFbGVtZW50ID0gYWN0aXZlRWxlbWVudFtgJHthY3Rpb25bZXZlbnQua2V5XX1FbGVtZW50U2libGluZ2BdO1xuICAgICAgICB9XG4gICAgICAgIGlmICghYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgIGdvVG9TdGFydCA9IGFjdGlvbltldmVudC5rZXldID09PSAnbmV4dCcgfHwgZXZlbnQua2V5ID09PSAnSG9tZSc7XG4gICAgICAgICAgY29uc3QgYXV0b0NvbXBsZXRlTmFtZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXV0by1jb21wbGV0ZS1uYW1lcycpO1xuICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgPSBhdXRvQ29tcGxldGVOYW1lcy5jaGlsZHJlbltcbiAgICAgICAgICAgIGdvVG9TdGFydCA/IDAgOiBhdXRvQ29tcGxldGVOYW1lcy5jaGlsZHJlbi5sZW5ndGggLSAxXG4gICAgICAgICAgXTtcbiAgICAgICAgICB3aGlsZSAoYWN0aXZlRWxlbWVudCAmJiBhY3RpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgICAgYWN0aXZlRWxlbWVudCA9IGFjdGl2ZUVsZW1lbnRbYCR7YWN0aW9uW2V2ZW50LmtleV19RWxlbWVudFNpYmxpbmdgXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYWN0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIGNvbnN0IHsgYWN0aXZlRWxlbWVudCB9ID0gZG9jdW1lbnQ7XG4gICAgICBpZiAoYWN0aXZlRWxlbWVudCAmJiBhY3RpdmVFbGVtZW50LmNsYXNzTmFtZSA9PT0gJ2F1dG8tY29tcGxldGUtbmFtZS13cmFwcGVyJykge1xuICAgICAgICBjb25zdCBhdXRvQ29tcGxldGVOYW1lID0gYWN0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgQ2hhbXBpb25zUGFnZUNvbnRyb2xsZXIuZGlzcGxheUNoYW1waW9uTW9kYWwoYXV0b0NvbXBsZXRlTmFtZS5kYXRhc2V0LmNoYW1waW9uSWQpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZWFyY2hDb250YWluZXJMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2VhcmNoQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1jb250YWluZXInKTtcbiAgICBzZWFyY2hDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIHNlYXJjaGJhckZvY3VzSW5FdmVudCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBzZWFyY2hiYXJGb2N1c291dEV2ZW50KTtcbiAgICBzZWFyY2hDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBzZWFyY2hCYXJJbnB1dEV2ZW50KTtcbiAgICBzZWFyY2hDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHNlYXJjaGJhcktleWRvd25FdmVudHMpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc2VhcmNoQ29udGFpbmVyTGlzdGVuZXJzLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoYmFyQ29udHJvbGxlcjtcbiIsIi8vIGltcG9ydCB7IGdldEFsbENoYW1waW9uU3RhdHMgfSBmcm9tICcuLi9jaGFtcGlvbkRhdGEvZ2V0QWxsQ2hhbXBpb25zJztcbmltcG9ydCB7IGNyZWF0ZUNoYW1waW9uQ29udGFpbmVyIH0gZnJvbSAnLi4vdGVtcGxhdGVzL3JlbmRlckhlbHBlcnMnO1xuXG5jb25zdCBTb3J0Q2hhbXBpb25zID0gKCgpID0+IHtcbiAgY29uc3QgY2xlYXJDaGFtcGlvbnNTZWN0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGNoYW1waW9uc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb25zLXNlY3Rpb24nKTtcbiAgICBjaGFtcGlvbnNTZWN0aW9uLnN0eWxlLnZpc2libGl0eSA9ICdoaWRkZW4nO1xuICAgIGNoYW1waW9uc1NlY3Rpb24udGV4dENvbnRlbnQgPSAnJztcbiAgfTtcblxuICBjb25zdCByZWNyZWF0ZUNoYW1waW9uc1NlY3Rpb24gPSAoY2hhbXBpb25zKSA9PiB7XG4gICAgY29uc3QgY2hhbXBpb25zU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbnMtc2VjdGlvbicpO1xuICAgIGNoYW1waW9ucy5mb3JFYWNoKChjaGFtcGlvbikgPT4ge1xuICAgICAgY3JlYXRlQ2hhbXBpb25Db250YWluZXIoY2hhbXBpb24sIGNoYW1waW9uc1NlY3Rpb24pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGZpbHRlckNoYW1waW9ucyA9IChhbGxDaGFtcGlvblN0YXRzKSA9PiB7XG4gICAgLy8gY29uc3QgYWxsQ2hhbXBpb25TdGF0cyA9IGF3YWl0IGdldEFsbENoYW1waW9uU3RhdHMoKTtcbiAgICBjb25zdCBmaWx0ZXJlZENoYW1waW9uU3RhdHMgPSBhbGxDaGFtcGlvblN0YXRzLmZpbHRlcigoY2hhbXBpb25TdGF0cykgPT4ge1xuICAgICAgY29uc3QgY2hhbXBpb25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9JHtjaGFtcGlvblN0YXRzLmlkfV1gKTtcbiAgICAgIHJldHVybiBjaGFtcGlvbkVsZW1lbnQuY2xhc3NOYW1lID09PSAnY2hhbXBpb24tY29udGFpbmVyIHNob3duJztcbiAgICB9KTtcblxuICAgIHJldHVybiBmaWx0ZXJlZENoYW1waW9uU3RhdHM7XG4gIH07XG5cbiAgY29uc3Qgc29ydENoYW1waW9uc0J5V2lucmF0ZSA9IChhbGxDaGFtcGlvblN0YXRzKSA9PiB7XG4gICAgY29uc3QgZmlsdGVyZWRDaGFtcGlvblN0YXRzID0gZmlsdGVyQ2hhbXBpb25zKGFsbENoYW1waW9uU3RhdHMpO1xuICAgIGNvbnN0IGZpbHRlcmVkQ2hhbXBpb25zU29ydGVkID0gZmlsdGVyZWRDaGFtcGlvblN0YXRzLnNvcnQoKGEsIGIpID0+IGIud2luUmF0ZSAtIGEud2luUmF0ZSk7XG4gICAgY2xlYXJDaGFtcGlvbnNTZWN0aW9uKCk7XG4gICAgcmVjcmVhdGVDaGFtcGlvbnNTZWN0aW9uKGZpbHRlcmVkQ2hhbXBpb25zU29ydGVkKTtcbiAgICByZXR1cm4gZmlsdGVyZWRDaGFtcGlvbnNTb3J0ZWQ7XG4gIH07XG5cbiAgY29uc3Qgc29ydENoYW1waW9uc0J5UGlja3JhdGUgPSAoYWxsQ2hhbXBpb25TdGF0cykgPT4ge1xuICAgIGNvbnN0IGZpbHRlcmVkQ2hhbXBpb25TdGF0cyA9IGZpbHRlckNoYW1waW9ucyhhbGxDaGFtcGlvblN0YXRzKTtcbiAgICBjb25zdCBmaWx0ZXJlZENoYW1waW9uc1NvcnRlZCA9IGZpbHRlcmVkQ2hhbXBpb25TdGF0cy5zb3J0KChhLCBiKSA9PiBiLnBpY2tSYXRlIC0gYS5waWNrUmF0ZSk7XG4gICAgY2xlYXJDaGFtcGlvbnNTZWN0aW9uKCk7XG4gICAgcmVjcmVhdGVDaGFtcGlvbnNTZWN0aW9uKGZpbHRlcmVkQ2hhbXBpb25zU29ydGVkKTtcbiAgICByZXR1cm4gZmlsdGVyZWRDaGFtcGlvbnNTb3J0ZWQ7XG4gIH07XG5cbiAgY29uc3Qgc29ydENoYW1waW9uc0J5RGFtYWdlRG9uZSA9IChhbGxDaGFtcGlvblN0YXRzKSA9PiB7XG4gICAgY29uc3QgZmlsdGVyZWRDaGFtcGlvblN0YXRzID0gZmlsdGVyQ2hhbXBpb25zKGFsbENoYW1waW9uU3RhdHMpO1xuXG4gICAgY29uc3QgZmlsdGVyZWRDaGFtcGlvbnNTb3J0ZWQgPSBmaWx0ZXJlZENoYW1waW9uU3RhdHMuc29ydChcbiAgICAgIChhLCBiKSA9PiBiLmRhbWFnZVBlck1hdGNoLnRvdGFsRGFtYWdlLnZhbHVlIC0gYS5kYW1hZ2VQZXJNYXRjaC50b3RhbERhbWFnZS52YWx1ZSxcbiAgICApO1xuICAgIGNsZWFyQ2hhbXBpb25zU2VjdGlvbigpO1xuICAgIHJlY3JlYXRlQ2hhbXBpb25zU2VjdGlvbihmaWx0ZXJlZENoYW1waW9uc1NvcnRlZCk7XG4gICAgcmV0dXJuIGZpbHRlcmVkQ2hhbXBpb25zU29ydGVkO1xuICB9O1xuXG4gIGNvbnN0IHNvcnRCeURlZmF1bHRPcmRlciA9IChhbGxDaGFtcGlvblN0YXRzKSA9PiB7XG4gICAgLy8gY29uc3QgYWxsQ2hhbXBpb25TdGF0cyA9IGF3YWl0IGdldEFsbENoYW1waW9uU3RhdHMoKTtcbiAgICBjb25zdCBmaWx0ZXJlZENoYW1waW9uU3RhdHMgPSBhbGxDaGFtcGlvblN0YXRzLmZpbHRlcigoY2hhbXBpb25TdGF0cykgPT4ge1xuICAgICAgY29uc3QgY2hhbXBpb25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9JHtjaGFtcGlvblN0YXRzLmlkfV1gKTtcbiAgICAgIGlmIChjaGFtcGlvbkVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNoYW1waW9uRWxlbWVudC5jbGFzc05hbWUgPT09ICdjaGFtcGlvbi1jb250YWluZXIgc2hvd24nO1xuICAgIH0pO1xuICAgIGNsZWFyQ2hhbXBpb25zU2VjdGlvbigpO1xuICAgIHJlY3JlYXRlQ2hhbXBpb25zU2VjdGlvbihmaWx0ZXJlZENoYW1waW9uU3RhdHMpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc29ydENoYW1waW9uc0J5V2lucmF0ZSxcbiAgICBzb3J0Q2hhbXBpb25zQnlQaWNrcmF0ZSxcbiAgICBzb3J0Q2hhbXBpb25zQnlEYW1hZ2VEb25lLFxuICAgIHNvcnRCeURlZmF1bHRPcmRlcixcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFNvcnRDaGFtcGlvbnM7XG4iLCJjb25zdCBmZXRjaENoYW1waW9uRGV0YWlscyA9IGFzeW5jIChjaGFtcGlvbklkKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi8xMS4yMC4xL2RhdGEvZW5fVVMvY2hhbXBpb24vJHtjaGFtcGlvbklkfS5qc29uYCwgeyBtb2RlOiAnY29ycycgfSk7XG4gIGNvbnN0IGNoYW1waW9ucyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgY29uc3QgY2hhbXBpb25EZXRhaWxzID0gY2hhbXBpb25zLmRhdGFbY2hhbXBpb25JZF07XG5cbiAgcmV0dXJuIGNoYW1waW9uRGV0YWlscztcbn07XG5cbmNvbnN0IGdldENoYW1waW9uUGFzc2l2ZXMgPSAoY2hhbXBpb25EZXRhaWxzKSA9PiB7XG4gIGNvbnN0IHBhc3NpdmVEYXRhID0gY2hhbXBpb25EZXRhaWxzLnBhc3NpdmU7XG4gIGNvbnN0IHBhc3NpdmVOYW1lID0gcGFzc2l2ZURhdGEubmFtZTtcbiAgY29uc3QgcGFzc2l2ZURlc2NyaXB0aW9uID0gcGFzc2l2ZURhdGEuZGVzY3JpcHRpb247XG4gIGNvbnN0IHBhc3NpdmVJZCA9IHBhc3NpdmVEYXRhLmltYWdlLmZ1bGw7XG4gIGNvbnN0IHBhc3NpdmVJbWdVcmwgPSBgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLzExLjIxLjEvaW1nL3Bhc3NpdmUvJHtwYXNzaXZlSWR9YDtcblxuICByZXR1cm4ge1xuICAgIHBhc3NpdmVOYW1lLFxuICAgIHBhc3NpdmVEZXNjcmlwdGlvbixcbiAgICBwYXNzaXZlSW1nVXJsLFxuICB9O1xufTtcblxuY29uc3QgZ2V0Q2hhbXBpb25TcGVsbHMgPSAoY2hhbXBpb25EZXRhaWxzKSA9PiB7XG4gIGNvbnN0IHNwZWxsc0RhdGEgPSBjaGFtcGlvbkRldGFpbHMuc3BlbGxzO1xuICBjb25zdCBzcGVsbHMgPSBbXTtcblxuICBzcGVsbHNEYXRhLmZvckVhY2goKHNwZWxsKSA9PiB7XG4gICAgY29uc3Qgc3BlbGxPYmplY3QgPSB7XG4gICAgICBuYW1lOiBzcGVsbC5uYW1lLFxuICAgICAgaWQ6IHNwZWxsLmlkLFxuICAgICAgZGVzY3JpcHRpb246IHNwZWxsLmRlc2NyaXB0aW9uLFxuICAgICAgY29zdEJ1cm46IHNwZWxsLmNvc3RCdXJuLFxuICAgICAgY29zdFR5cGU6IHNwZWxsLmNvc3RUeXBlLFxuICAgICAgY29vbGRvd246IHNwZWxsLmNvb2xkb3duQnVybixcbiAgICAgIGltZ1VybDogYGh0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi8xMS4yMS4xL2ltZy9zcGVsbC8ke3NwZWxsLmlkfS5wbmdgLFxuICAgIH07XG4gICAgc3BlbGxzLnB1c2goc3BlbGxPYmplY3QpO1xuICB9KTtcblxuICByZXR1cm4gc3BlbGxzO1xufTtcblxuY29uc3QgZ2V0Q2hhbXBpb25EZXRhaWxzID0gYXN5bmMgKGNoYW1waW9uSWQpID0+IHtcbiAgY29uc3QgY2hhbXBpb25EZXRhaWxzID0gYXdhaXQgZmV0Y2hDaGFtcGlvbkRldGFpbHMoY2hhbXBpb25JZCk7XG4gIGNvbnN0IGNoYW1waW9uUGFzc2l2ZSA9IGdldENoYW1waW9uUGFzc2l2ZXMoY2hhbXBpb25EZXRhaWxzKTtcbiAgY29uc3Qgc3BlbGxzID0gZ2V0Q2hhbXBpb25TcGVsbHMoY2hhbXBpb25EZXRhaWxzKTtcblxuICAvLyBNYWtlIGZpcnN0IGxldHRlciBvZiB0aGUgY2hhbXBpb24gdGl0bGUgYSBjYXBpdGFsIGxldHRlci5cbiAgY29uc3QgY2hhbXBpb25UaXRsZSA9IGNoYW1waW9uRGV0YWlscy50aXRsZS5yZXBsYWNlKFxuICAgIGNoYW1waW9uRGV0YWlscy50aXRsZVswXSwgY2hhbXBpb25EZXRhaWxzLnRpdGxlWzBdLnRvVXBwZXJDYXNlKCksXG4gICk7XG5cbiAgaWYgKGNoYW1waW9uRGV0YWlscy5wYXJ0eXBlID09PSAnTm9uZScpIHtcbiAgICBjaGFtcGlvbkRldGFpbHMucGFydHlwZSA9ICdNYW5hbGVzcyc7XG4gIH1cblxuICBpZiAoY2hhbXBpb25EZXRhaWxzLmlkID09PSAnQWtzaGFuJykge1xuICAgIGNoYW1waW9uRGV0YWlscy5hbGx5dGlwc1swXSA9ICdZb3UgY2Fu4oCZdCB1c2UgY29uc3VtYWJsZXMgbGlrZSBwb3Rpb25zIGR1cmluZyB5b3VyIENvbWV1cHBhbmNlLCBtYWtlIHN1cmUgdG8gdXNlIHRoZW0gYmVmb3JlIGNoYW5uZWxpbmcuJztcbiAgfVxuXG4gIGlmIChjaGFtcGlvbkRldGFpbHMuaWQgPT09ICdWZXgnKSB7XG4gICAgY2hhbXBpb25EZXRhaWxzLmFsbHl0aXBzLnB1c2goJ1ZleCBpcyBncmVhdCBhdCBkaXZpbmcgaW50byB0aGUgYmFja2xpbmUsIGJ1dCBoZXIgZXNjYXBlIHBvdGVudGlhbCBpcyBsb3cgc28gdGltaW5nIGlzIGtleS4nKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmFtZTogY2hhbXBpb25EZXRhaWxzLm5hbWUsXG4gICAgaWQ6IGNoYW1waW9uRGV0YWlscy5pZCxcbiAgICB0aXRsZTogY2hhbXBpb25UaXRsZSxcbiAgICBsb3JlOiBjaGFtcGlvbkRldGFpbHMubG9yZSxcbiAgICByb2xlczogY2hhbXBpb25EZXRhaWxzLnRhZ3MsXG4gICAgc2tpbnM6IGNoYW1waW9uRGV0YWlscy5za2lucyxcbiAgICByZXNvdXJjZTogY2hhbXBpb25EZXRhaWxzLnBhcnR5cGUsXG4gICAgcGFzc2l2ZTogY2hhbXBpb25QYXNzaXZlLFxuICAgIHNwZWxscyxcbiAgICB0aXBzOiBjaGFtcGlvbkRldGFpbHMuYWxseXRpcHMsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRDaGFtcGlvbkRldGFpbHM7XG4iLCJjb25zdCBmZXRjaENoYW1waW9uU3RhdHMgPSBhc3luYyAoY2hhbXBpb25JZCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvJHtjaGFtcGlvbklkfWAsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICBjb25zdCBjaGFtcGlvblN0YXRzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIHJldHVybiBjaGFtcGlvblN0YXRzO1xufTtcblxuY29uc3QgZ2V0Q2hhbXBpb25TdGF0cyA9IGFzeW5jIChjaGFtcGlvbklkKSA9PiB7XG4gIGNvbnN0IGNoYW1waW9uU3RhdHMgPSBhd2FpdCBmZXRjaENoYW1waW9uU3RhdHMoY2hhbXBpb25JZCk7XG5cbiAgY29uc3Qgd2luUmF0ZSA9IGNoYW1waW9uU3RhdHMud2luUmF0ZS50b0ZpeGVkKDIpO1xuICBjb25zdCBwaWNrUmF0ZSA9IGNoYW1waW9uU3RhdHMucGlja1JhdGUudG9GaXhlZCgyKTtcbiAgY29uc3QgbGFuZSA9IGNoYW1waW9uU3RhdHMubGFuZVswXSArIGNoYW1waW9uU3RhdHMubGFuZS5zdWJzdHJpbmcoMSkudG9Mb3dlckNhc2UoKTtcblxuICByZXR1cm4ge1xuICAgIGNoYW1waW9uSWQsXG4gICAga2RhOiBjaGFtcGlvblN0YXRzLmtkYVJhdGlvLFxuICAgIGRhbWFnZVBlck1hdGNoOiBjaGFtcGlvblN0YXRzLmRhbWFnZVBlck1hdGNoLFxuICAgIGl0ZW1TZXRzOiBjaGFtcGlvblN0YXRzLml0ZW1DaG9pY2VzLnNsaWNlKDEpLFxuICAgIGJlc3RNYXRjaFVwczogY2hhbXBpb25TdGF0cy5tYXRjaFVwcy5iZXN0TWF0Y2hVcHMsXG4gICAgd29yc3RNYXRjaFVwczogY2hhbXBpb25TdGF0cy5tYXRjaFVwcy53b3JzdE1hdGNoVXBzLFxuICAgIHdpblJhdGUsXG4gICAgcGlja1JhdGUsXG4gICAgbGFuZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldENoYW1waW9uU3RhdHM7XG4iLCJjb25zdCBnZXRBbGxDaGFtcGlvbkRldGFpbHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHZlcnNpb25zUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vYXBpL3ZlcnNpb25zLmpzb24nKTtcbiAgY29uc3QgdmVyc2lvbnMgPSBhd2FpdCB2ZXJzaW9uc1Jlc3BvbnNlLmpzb24oKTtcbiAgY29uc3QgbGF0ZXN0VmVyc2lvbiA9IHZlcnNpb25zWzBdO1xuICBjb25zdCBjaGFtcGlvbnNSZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vJHtsYXRlc3RWZXJzaW9ufS9kYXRhL2VuX1VTL2NoYW1waW9uLmpzb25gKTtcbiAgY29uc3QgYWxsQ2hhbXBpb25zID0gYXdhaXQgY2hhbXBpb25zUmVzcG9uc2UuanNvbigpO1xuXG4gIHJldHVybiBhbGxDaGFtcGlvbnMuZGF0YTtcbn07XG5cbmNvbnN0IGdldEFsbENoYW1waW9uU3RhdHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9jaGFtcGlvbnMnLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgY29uc3QgYWxsQ2hhbXBpb25TdGF0cyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICByZXR1cm4gYWxsQ2hhbXBpb25TdGF0cztcbn07XG5cbmV4cG9ydCB7XG4gIGdldEFsbENoYW1waW9uRGV0YWlscyxcbiAgZ2V0QWxsQ2hhbXBpb25TdGF0cyxcbn07XG4iLCIvLyBGZXRjaGVzIGFsbCB0aGUgaXRlbXMgYSBjaGFtcGlvbiBjYW4gYnV5IGluIGEgbWF0Y2hcbmNvbnN0IGZldGNoQWxsSXRlbXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHZlcnNpb25SZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9hcGkvdmVyc2lvbnMuanNvbicsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICBjb25zdCB2ZXJzaW9ucyA9IGF3YWl0IHZlcnNpb25SZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IGxhdGVzdFZlcnNpb24gPSB2ZXJzaW9uc1swXTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLyR7bGF0ZXN0VmVyc2lvbn0vZGF0YS9lbl9VUy9pdGVtLmpzb25gKTtcbiAgY29uc3QgYWxsSXRlbXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIGFsbEl0ZW1zLmRhdGE7XG59O1xuXG5jbGFzcyBJdGVtSW5mbyB7XG4gIGNvbnN0cnVjdG9yKGl0ZW1JZCkge1xuICAgIHRoaXMuaXRlbUlkID0gaXRlbUlkO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldEFsbEl0ZW1zKCkge1xuICAgIGNvbnN0IGFsbEl0ZW1zID0gZmV0Y2hBbGxJdGVtcygpO1xuICAgIHJldHVybiBhbGxJdGVtcztcbiAgfVxuXG4gIGdldEl0ZW1EZXRhaWxzKGFsbEl0ZW1zKSB7XG4gICAgY29uc3QgaXRlbURldGFpbHMgPSBhbGxJdGVtc1t0aGlzLml0ZW1JZF07XG4gICAgcmV0dXJuIGl0ZW1EZXRhaWxzO1xuICB9XG5cbiAgZ2V0SXRlbUltYWdlKGFsbEl0ZW1zKSB7XG4gICAgY29uc3QgaXRlbURldGFpbHMgPSB0aGlzLmdldEl0ZW1EZXRhaWxzKGFsbEl0ZW1zKTtcbiAgICBjb25zdCBpdGVtSW1hZ2VJZCA9IGl0ZW1EZXRhaWxzLmltYWdlLmZ1bGw7XG4gICAgY29uc3QgaW1hZ2VVcmwgPSBgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLzExLjIyLjEvaW1nL2l0ZW0vJHtpdGVtSW1hZ2VJZH1gO1xuICAgIHJldHVybiBpbWFnZVVybDtcbiAgfVxuXG4gIC8vIGdldHMgaW5mbyBvbiB0aGUgaXRlbXMgdXNlZCB0byBjcmVhdGUgdGhlIGluc3RhbmNlIGl0ZW1cbiAgZ2V0Q29tcG9uZW50SXRlbXMoYWxsSXRlbXMpIHtcbiAgICBjb25zdCBpdGVtRGV0YWlscyA9IHRoaXMuZ2V0SXRlbURldGFpbHMoYWxsSXRlbXMpO1xuICAgIGNvbnN0IGNvbXBvbmVudEl0ZW1JZHMgPSBpdGVtRGV0YWlscy5mcm9tO1xuICAgIGlmIChjb21wb25lbnRJdGVtSWRzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3QgY29tcG9uZW50SXRlbURldGFpbHMgPSBjb21wb25lbnRJdGVtSWRzLm1hcCgoaXRlbUlkKSA9PiAoe1xuICAgICAgbmFtZTogYWxsSXRlbXNbaXRlbUlkXS5uYW1lLFxuICAgICAgaW1hZ2VVcmw6IGBodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vMTEuMjIuMS9pbWcvaXRlbS8ke2l0ZW1JZH0ucG5nYCxcbiAgICAgIGNvc3Q6IGFsbEl0ZW1zW2l0ZW1JZF0uZ29sZC50b3RhbCxcbiAgICB9KSk7XG4gICAgcmV0dXJuIGNvbXBvbmVudEl0ZW1EZXRhaWxzO1xuICB9XG5cbiAgZ2V0SXRlbUluZm8oYWxsSXRlbXMpIHtcbiAgICBjb25zdCBpdGVtRGV0YWlscyA9IHRoaXMuZ2V0SXRlbURldGFpbHMoYWxsSXRlbXMpO1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gaXRlbURldGFpbHM7XG4gICAgY29uc3QgeyBkZXNjcmlwdGlvbiB9ID0gaXRlbURldGFpbHM7XG4gICAgY29uc3QgY29zdCA9IGl0ZW1EZXRhaWxzLmdvbGQudG90YWw7XG4gICAgY29uc3QgaW1hZ2VVcmwgPSB0aGlzLmdldEl0ZW1JbWFnZShhbGxJdGVtcyk7XG4gICAgY29uc3QgY29tcG9uZW50SXRlbXMgPSB0aGlzLmdldENvbXBvbmVudEl0ZW1zKGFsbEl0ZW1zKTtcbiAgICBjb25zdCB7IHRhZ3MgfSA9IGl0ZW1EZXRhaWxzO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGNvc3QsXG4gICAgICBpbWFnZVVybCxcbiAgICAgIGNvbXBvbmVudEl0ZW1zLFxuICAgICAgdGFncyxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW1JbmZvO1xuIiwiaW1wb3J0IEVsZW1lbnRDcmVhdGlvbiBmcm9tICcuL2VsZW1lbnRDcmVhdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyb3Bkb3duU2VjdGlvbiB7XG4gIHN0YXRpYyBjcmVhdGVTZWN0aW9uKCkge1xuICAgIGNvbnN0IGNoYW1waW9uc1BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hhbXBpb25zLXBhZ2UnKTtcbiAgICBjb25zdCBmaWx0ZXJTb3J0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZpbHRlclNvcnRTZWN0aW9uLmNsYXNzTmFtZSA9ICdmaWx0ZXItc29ydC1zZWN0aW9uJztcbiAgICBjaGFtcGlvbnNQYWdlLmluc2VydEJlZm9yZShcbiAgICAgIGZpbHRlclNvcnRTZWN0aW9uLCBjaGFtcGlvbnNQYWdlLmxhc3RDaGlsZCxcbiAgICApO1xuICAgIHJldHVybiBmaWx0ZXJTb3J0U2VjdGlvbjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGRyb3Bkb3duTmFtZSwgb3B0aW9uc0FycmF5KSB7XG4gICAgdGhpcy5kcm9wZG93bk5hbWUgPSBkcm9wZG93bk5hbWU7XG4gICAgdGhpcy5vcHRpb25zQXJyYXkgPSBvcHRpb25zQXJyYXk7XG4gIH1cblxuICAvKiB0eXBlIHRha2VzIGEgc3RyaW5nIHVzZWQgYXMgYSBjbGFzc05hbWUgdG8gc2hvdyBpZiB0aGUgZHJvcGRvd24gaXMgbXVsdGkgb3Igc2luZ2xlIHNlbGVjdCAqL1xuICByZW5kZXJEcm9wZG93bihmaWx0ZXJTb3J0U2VjdGlvbiwgdHlwZSkge1xuICAgIGNvbnN0IGRyb3Bkb3duID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgYCR7dGhpcy5kcm9wZG93bk5hbWV9LWRyb3Bkb3duIGRyb3Bkb3duYCwgZmlsdGVyU29ydFNlY3Rpb24pO1xuICAgIGNvbnN0IGRyb3Bkb3duQnRuID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnYnV0dG9uJywgYCR7dGhpcy5kcm9wZG93bk5hbWV9LWRyb3Bkb3duLWJ0biBkcm9wZG93bi1idG5gLCBkcm9wZG93bik7XG4gICAgZHJvcGRvd25CdG4udGV4dENvbnRlbnQgPSBgJHt0aGlzLmRyb3Bkb3duTmFtZVswXS50b1VwcGVyQ2FzZSgpfSR7dGhpcy5kcm9wZG93bk5hbWUuc2xpY2UoMSl9YDtcbiAgICBjb25zdCBkcm9wZG93bk9wdGlvbnMgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCBgJHt0aGlzLmRyb3Bkb3duTmFtZX0tZHJvcGRvd24tb3B0aW9ucyBkcm9wZG93bi1vcHRpb25zYCwgZHJvcGRvd24pO1xuXG4gICAgdGhpcy5vcHRpb25zQXJyYXkuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICBjb25zdCBkcm9wZG93bk9wdGlvbiA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCBgJHtvcHRpb259ICR7dGhpcy5kcm9wZG93bk5hbWV9ICR7dHlwZX0gZHJvcGRvd24tb3B0aW9uYCwgZHJvcGRvd25PcHRpb25zKTtcbiAgICAgIGRyb3Bkb3duT3B0aW9uLnRleHRDb250ZW50ID0gYCR7b3B0aW9uWzBdLnRvVXBwZXJDYXNlKCl9JHtvcHRpb24uc2xpY2UoMSl9YDtcbiAgICB9KTtcbiAgfVxufVxuIiwiY29uc3QgRWxlbWVudENyZWF0aW9uID0gKCgpID0+IHtcbiAgY29uc3QgY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzID0gKHRhZywgY2xhc3NOYW1lLCBwYXJlbnRFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlQ2hpbGRFbGVtZW50V2l0aElkID0gKHRhZywgaWQsIHBhcmVudEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGVsZW1lbnQuaWQgPSBpZDtcbiAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzQW5kSWQgPSAodGFnLCBjbGFzc05hbWUsIGlkLCBwYXJlbnRFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICBlbGVtZW50LmlkID0gaWQ7XG4gICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzID0gKGNsYXNzTmFtZSwgcGFyZW50RWxlbWVudCwgc3JjLCBhbHQpID0+IHtcbiAgICBjb25zdCBpbWFnZUVsZW1lbnQgPSBjcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2ltZycsIGNsYXNzTmFtZSwgcGFyZW50RWxlbWVudCk7XG4gICAgaW1hZ2VFbGVtZW50LnNyYyA9IHNyYztcbiAgICBpbWFnZUVsZW1lbnQuYWx0ID0gYWx0O1xuXG4gICAgcmV0dXJuIGltYWdlRWxlbWVudDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcyxcbiAgICBjcmVhdGVDaGlsZEVsZW1lbnRXaXRoSWQsXG4gICAgY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzQW5kSWQsXG4gICAgY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBFbGVtZW50Q3JlYXRpb247XG4iLCJpbXBvcnQgeyByZW5kZXJIZWFkZXJEZXRhaWxzLCBpbWFnZXMgfSBmcm9tICcuL3JlbmRlckhlbHBlcnMnO1xuaW1wb3J0IEVsZW1lbnRDcmVhdGlvbiBmcm9tICcuLi9oZWxwZXJzL2VsZW1lbnRDcmVhdGlvbic7XG5cbmNvbnN0IGNoYW1waW9uRGV0YWlsc01vZGFsID0gYXN5bmMgKGNoYW1waW9uRGF0YSkgPT4ge1xuICByZW5kZXJIZWFkZXJEZXRhaWxzKGNoYW1waW9uRGF0YSwgJ21haW4nKTtcblxuICBjb25zdCBjaGFtcGlvblJvbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLXJvbGVzJyk7XG4gIGNvbnN0IHsgcm9sZXMgfSA9IGNoYW1waW9uRGF0YTtcbiAgcm9sZXMuZm9yRWFjaCgocm9sZSkgPT4ge1xuICAgIGNvbnN0IGNoYW1waW9uUm9sZSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdjaGFtcGlvbi1yb2xlJywgY2hhbXBpb25Sb2xlcyk7XG4gICAgY29uc3QgY2hhbXBpb25Sb2xlTmFtZSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnY2hhbXBpb24tcm9sZS1uYW1lJywgY2hhbXBpb25Sb2xlKTtcbiAgICBjaGFtcGlvblJvbGVOYW1lLnRleHRDb250ZW50ID0gcm9sZTtcbiAgICBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MoJ2NoYW1waW9uLXJvbGUtaW1hZ2UnLCBjaGFtcGlvblJvbGUsIGAke2ltYWdlc1tgJHtyb2xlfS5wbmdgXX1gLCByb2xlKTtcbiAgfSk7XG4gIC8qIFRoZSB0eXBlIG9mIHJlc291cmNlIHRoYXQgYSBjaGFtcGlvbiB1c2VzIGUuZy4gbWFuYSwgZW5lcmd5IGV0YyAqL1xuICBjb25zdCBjaGFtcGlvblJlc291cmNlID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2NoYW1waW9uLXJlc291cmNlJywgY2hhbXBpb25Sb2xlcyk7XG4gIGNvbnN0IHsgcmVzb3VyY2UgfSA9IGNoYW1waW9uRGF0YTtcbiAgY29uc3QgY2hhbXBpb25SZXNvdXJjZU5hbWUgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2NoYW1waW9uLXJlc291cmNlLW5hbWUnLCBjaGFtcGlvblJlc291cmNlKTtcbiAgY2hhbXBpb25SZXNvdXJjZU5hbWUudGV4dENvbnRlbnQgPSByZXNvdXJjZTtcbiAgRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzKCdjaGFtcGlvbi1yZXNvdXJjZS1pbWFnZScsIGNoYW1waW9uUmVzb3VyY2UsIGAke2ltYWdlc1tgJHtyZXNvdXJjZX0ucG5nYF19YCwgcmVzb3VyY2UpO1xuXG4gIC8qIENyZWF0ZXMgdGhlIG1haW4gY29udGVudCBvZiB0aGUgbWFpbiBtb2RhbCAqL1xuICBjb25zdCBsb3JlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvcmUtY29udGFpbmVyJyk7XG4gIGNvbnN0IGNoYW1waW9uTG9yZSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnY2hhbXBpb24tbG9yZScsIGxvcmVDb250YWluZXIpO1xuICBjaGFtcGlvbkxvcmUuaW5uZXJIVE1MID0gY2hhbXBpb25EYXRhLmxvcmU7XG5cbiAgY29uc3QgYWJpbGl0aWVzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFiaWxpdGllcy1jb250YWluZXInKTtcbiAgY29uc3QgYWJpbGl0eURldGFpbHMgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnYWJpbGl0eS1kZXRhaWxzJywgYWJpbGl0aWVzQ29udGFpbmVyKTtcbiAgY29uc3QgYWJpbGl0eUltZ3MgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnYWJpbGl0eS1pbWdzJywgYWJpbGl0eURldGFpbHMpO1xuICBjb25zdCBwYXNzaXZlSW1nID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzKFxuICAgICdzcGVsbC1pbWcgY2xpY2tlZCcsIGFiaWxpdHlJbWdzLCBjaGFtcGlvbkRhdGEucGFzc2l2ZS5wYXNzaXZlSW1nVXJsLCBjaGFtcGlvbkRhdGEucGFzc2l2ZS5wYXNzaXZlTmFtZSxcbiAgKTtcbiAgcGFzc2l2ZUltZy5pZCA9ICdwYXNzaXZlLWltZyc7XG5cbiAgY29uc3QgaW1nTGFiZWwgPSBbJ1EnLCAnVycsICdFJywgJ1InXTtcbiAgbGV0IGluZGV4ID0gMDtcblxuICBjaGFtcGlvbkRhdGEuc3BlbGxzLmZvckVhY2goKHNwZWxsKSA9PiB7XG4gICAgY29uc3Qgc3BlbGxJbWcgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAnc3BlbGwtaW1nJywgYWJpbGl0eUltZ3MsIHNwZWxsLmltZ1VybCwgc3BlbGwubmFtZSxcbiAgICApO1xuICAgIC8vIEdyYWJzIGxldHRlciBRLCBXLCBFIG9yIFIgd2hpY2ggdW5pcXVlbHkgaWRlbnRpZmllcyBhIGNoYW1waW9ucyBhYmlsaXRpZXNcbiAgICBzcGVsbEltZy5pZCA9IGAke2ltZ0xhYmVsW2luZGV4XX0taW1nYDtcbiAgICBpbmRleCArPSAxO1xuICB9KTtcblxuICAvKiBsb29wcyB0aHJvdWdoIGNoYW1waW9uJ3MgcGFzc2l2ZSBhbmQgNCBhYmlsaXRpZXMgKi9cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpICs9IDEpIHtcbiAgICBjb25zdCBhYmlsaXR5SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGFiaWxpdHlOYW1lID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdhYmlsaXR5LW5hbWUnLCBhYmlsaXR5SW5mbyk7XG4gICAgY29uc3QgYWJpbGl0eURlc2NyaXB0aW9uID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdhYmlsaXR5LWRlc2NyaXB0aW9uJywgYWJpbGl0eUluZm8pO1xuICAgIGNvbnN0IGFiaWxpdHlMYWJlbCA9IFsnUGFzc2l2ZScsICdRJywgJ1cnLCAnRScsICdSJ107XG5cbiAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgYWJpbGl0eUluZm8uY2xhc3NOYW1lID0gJ2FiaWxpdHktaW5mbyBhY3RpdmUnO1xuICAgICAgYWJpbGl0eUluZm8uaWQgPSAncGFzc2l2ZS1hYmlsaXR5JztcbiAgICAgIGFiaWxpdHlOYW1lLnRleHRDb250ZW50ID0gYCR7Y2hhbXBpb25EYXRhLnBhc3NpdmUucGFzc2l2ZU5hbWV9ICgke2FiaWxpdHlMYWJlbFtpXX0pYDtcbiAgICAgIGFiaWxpdHlEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBjaGFtcGlvbkRhdGEucGFzc2l2ZS5wYXNzaXZlRGVzY3JpcHRpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvb2xkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgY29vbGRvd24uY2xhc3NOYW1lID0gJ2FiaWxpdHktY29vbGRvd24nO1xuICAgICAgY29vbGRvd24udGV4dENvbnRlbnQgPSBgQ29vbGRvd246ICR7Y2hhbXBpb25EYXRhLnNwZWxsc1tpIC0gMV0uY29vbGRvd259IHNlY29uZHNgO1xuICAgICAgYWJpbGl0eUluZm8uYXBwZW5kQ2hpbGQoY29vbGRvd24pO1xuXG4gICAgICBhYmlsaXR5SW5mby5jbGFzc05hbWUgPSAnYWJpbGl0eS1pbmZvJztcbiAgICAgIGFiaWxpdHlJbmZvLmlkID0gYCR7YWJpbGl0eUxhYmVsW2ldfS1hYmlsaXR5YDtcbiAgICAgIGFiaWxpdHlOYW1lLnRleHRDb250ZW50ID0gYCR7Y2hhbXBpb25EYXRhLnNwZWxsc1tpIC0gMV0ubmFtZX0gKCR7YWJpbGl0eUxhYmVsW2ldfSlgO1xuICAgICAgYWJpbGl0eURlc2NyaXB0aW9uLmlubmVySFRNTCA9IGNoYW1waW9uRGF0YS5zcGVsbHNbaSAtIDFdLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGFiaWxpdHlEZXRhaWxzLmFwcGVuZENoaWxkKGFiaWxpdHlJbmZvKTtcbiAgfVxuXG4gIGNvbnN0IGNoYW1waW9uVGlwc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tdGlwcy1zZWN0aW9uJyk7XG4gIGNvbnN0IGNoYW1waW9uVGlwcyA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdjaGFtcGlvbi10aXBzJywgY2hhbXBpb25UaXBzU2VjdGlvbik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAyICYmIGkgPCBjaGFtcGlvbkRhdGEudGlwcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGNoYW1waW9uVGlwID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdjaGFtcGlvbi10aXAnLCBjaGFtcGlvblRpcHMpO1xuICAgIGNoYW1waW9uVGlwLnRleHRDb250ZW50ID0gYCR7Y2hhbXBpb25EYXRhLnRpcHNbaV19YDtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2hhbXBpb25EZXRhaWxzTW9kYWw7XG4iLCJpbXBvcnQgRWxlbWVudENyZWF0aW9uIGZyb20gJy4uL2hlbHBlcnMvZWxlbWVudENyZWF0aW9uJztcblxuY29uc3QgY2hhbXBpb25Ta2luc01vZGFsID0gYXN5bmMgKGNoYW1waW9uRGV0YWlscykgPT4ge1xuICBjb25zdCB7IHNraW5zIH0gPSBjaGFtcGlvbkRldGFpbHM7XG4gIGNvbnN0IHNraW5zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NraW5zLWNvbnRhaW5lcicpO1xuICBjb25zdCBza2luTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5za2luLW5hbWUnKTtcbiAgY29uc3Qgc2tpbkltYWdlc0NvbnRhaW5lciA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdza2luLWltYWdlcy1jb250YWluZXInLCBza2luc0NvbnRhaW5lcik7XG5cbiAgc2tpbnMuZm9yRWFjaCgoc2tpbikgPT4ge1xuICAgIGlmIChza2luLm51bSA9PT0gMCkge1xuICAgICAgY29uc3Qgc2hvd25JbWFnZUNvbnRhaW5lciA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3NBbmRJZChcbiAgICAgICAgJ2RpdicsICdza2luLWltYWdlLWNvbnRhaW5lciBzaG93bicsIGBEZWZhdWx0ICR7Y2hhbXBpb25EZXRhaWxzLm5hbWV9YCwgc2tpbkltYWdlc0NvbnRhaW5lcixcbiAgICAgICk7XG4gICAgICBza2luTmFtZS50ZXh0Q29udGVudCA9IGBEZWZhdWx0ICR7Y2hhbXBpb25EZXRhaWxzLm5hbWV9YDtcbiAgICAgIGNvbnN0IHNob3duSW1hZ2VVcmwgPSBgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuL2ltZy9jaGFtcGlvbi9zcGxhc2gvJHtjaGFtcGlvbkRldGFpbHMuaWR9XyR7c2tpbi5udW19LmpwZ2A7XG4gICAgICBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MoJ3NraW4taW1hZ2UnLCBzaG93bkltYWdlQ29udGFpbmVyLCBzaG93bkltYWdlVXJsLCAnZGVmYXVsdCBza2luJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGltYWdlQ29udGFpbmVyID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCAnc2tpbi1pbWFnZS1jb250YWluZXInLCBza2luLm5hbWUsIHNraW5JbWFnZXNDb250YWluZXIpO1xuICAgICAgY29uc3QgaW1hZ2VVcmwgPSBgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuL2ltZy9jaGFtcGlvbi9zcGxhc2gvJHtjaGFtcGlvbkRldGFpbHMuaWR9XyR7c2tpbi5udW19LmpwZ2A7XG4gICAgICBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MoJ3NraW4taW1hZ2UnLCBpbWFnZUNvbnRhaW5lciwgaW1hZ2VVcmwsIHNraW4ubmFtZSk7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNoYW1waW9uU2tpbnNNb2RhbDtcbiIsImltcG9ydCBJdGVtSW5mbyBmcm9tICcuLi9jaGFtcGlvbkRhdGEvaXRlbUluZm8nO1xuaW1wb3J0IHtcbiAgcmVuZGVySGVhZGVyRGV0YWlscyxcbiAgcmVuZGVyU3RhdE92ZXJ2aWV3LFxuICByZW5kZXJEYW1hZ2VTdGF0cyxcbiAgcmVuZGVyQ2hhbXBpb25MYW5lLFxuICByZW5kZXJNYXRjaHVwc0luZm8sXG59IGZyb20gJy4vcmVuZGVySGVscGVycyc7XG5pbXBvcnQgRWxlbWVudENyZWF0aW9uIGZyb20gJy4uL2hlbHBlcnMvZWxlbWVudENyZWF0aW9uJztcblxuY29uc3QgY2hhbXBpb25TdGF0c01vZGFsID0gYXN5bmMgKGNoYW1waW9uRGF0YSwgY2hhbXBpb25TdGF0cykgPT4ge1xuICByZW5kZXJIZWFkZXJEZXRhaWxzKGNoYW1waW9uRGF0YSwgJ3N0YXRzJyk7XG5cbiAgY29uc3Qgc3RhdHNPdmVydmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbi1zdGF0cy1vdmVydmlldycpO1xuXG4gIHJlbmRlclN0YXRPdmVydmlldyhzdGF0c092ZXJ2aWV3LCAnV2luIFJhdGUnLCBjaGFtcGlvblN0YXRzLndpblJhdGUpO1xuICByZW5kZXJTdGF0T3ZlcnZpZXcoc3RhdHNPdmVydmlldywgJ1BpY2sgUmF0ZScsIGNoYW1waW9uU3RhdHMucGlja1JhdGUpO1xuICAvKiBNYWtlIGV2ZXJ5IGxldHRlciBleGNlcHQgdGhlIGZpcnN0IGxvd2VyIGNhc2UgKi9cbiAgY29uc3QgbGFuZSA9IGAke2NoYW1waW9uU3RhdHMubGFuZVswXSArIGNoYW1waW9uU3RhdHMubGFuZS5zdWJzdHJpbmcoMSkudG9Mb3dlckNhc2UoKX1gO1xuICByZW5kZXJDaGFtcGlvbkxhbmUoc3RhdHNPdmVydmlldywgbGFuZSk7XG5cbiAgLyogU2V0cyB0aGUgdmFsdWVzIGFuZCBwZXJjZW50YWdlcyBmb3IgdGhlIGF2ZXJhZ2UgZGFtYWdlIHNlY3Rpb24gb2YgdGhlIHN0YXRzIG1vZGFsICovXG5cbiAgY29uc3QgdHJ1ZURhbWFnZUNpcmNsZVN0cm9rZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cnVlLWRhbWFnZS1zdHJva2UnKTtcbiAgY29uc3QgcGh5c2ljYWxEYW1hZ2VDaXJjbGVTdHJva2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGh5c2ljYWwtZGFtYWdlLXN0cm9rZScpO1xuICBjb25zdCBtYWdpY0RhbWFnZUNpcmNsZVN0cm9rZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWdpYy1kYW1hZ2Utc3Ryb2tlJyk7XG5cbiAgY29uc3QgdHJ1ZURhbWFnZVBlcmNlbnQgPSBNYXRoLnJvdW5kKGNoYW1waW9uU3RhdHMuZGFtYWdlUGVyTWF0Y2gudHJ1ZURhbWFnZS5wZXJjZW50YWdlKTtcbiAgY29uc3QgcGh5c2ljYWxEYW1hZ2VQZXJjZW50ID0gTWF0aC5yb3VuZChjaGFtcGlvblN0YXRzLmRhbWFnZVBlck1hdGNoLnBoeXNpY2FsRGFtYWdlLnBlcmNlbnRhZ2UpO1xuICBjb25zdCBtYWdpY0RhbWFnZVBlcmNlbnQgPSBNYXRoLnJvdW5kKGNoYW1waW9uU3RhdHMuZGFtYWdlUGVyTWF0Y2gubWFnaWNEYW1hZ2UucGVyY2VudGFnZSk7XG5cbiAgdHJ1ZURhbWFnZUNpcmNsZVN0cm9rZS5zdHlsZS5zdHJva2VEYXNoYXJyYXkgPSBgJHt0cnVlRGFtYWdlUGVyY2VudH0gMTAwYDtcbiAgcGh5c2ljYWxEYW1hZ2VDaXJjbGVTdHJva2Uuc3R5bGUuc3Ryb2tlRGFzaGFycmF5ID0gYCR7cGh5c2ljYWxEYW1hZ2VQZXJjZW50ICsgdHJ1ZURhbWFnZVBlcmNlbnR9IDEwMGA7XG4gIG1hZ2ljRGFtYWdlQ2lyY2xlU3Ryb2tlLnN0eWxlLnN0cm9rZURhc2hhcnJheSA9ICcxMDAsIDEwMCc7XG4gIGNvbnN0IHRvdGFsRGFtYWdlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3RhbC1kYW1hZ2UtdGV4dCcpO1xuICB0b3RhbERhbWFnZVRleHQudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKGNoYW1waW9uU3RhdHMuZGFtYWdlUGVyTWF0Y2gudG90YWxEYW1hZ2UudmFsdWUpO1xuXG4gIGNvbnN0IHRydWVEYW1hZ2VWYWx1ZSA9IE1hdGgucm91bmQoY2hhbXBpb25TdGF0cy5kYW1hZ2VQZXJNYXRjaC50cnVlRGFtYWdlLnZhbHVlKTtcbiAgY29uc3QgcGh5c2ljYWxEYW1hZ2VWYWx1ZSA9IE1hdGgucm91bmQoY2hhbXBpb25TdGF0cy5kYW1hZ2VQZXJNYXRjaC5waHlzaWNhbERhbWFnZS52YWx1ZSk7XG4gIGNvbnN0IG1hZ2ljRGFtYWdlVmFsdWUgPSBNYXRoLnJvdW5kKGNoYW1waW9uU3RhdHMuZGFtYWdlUGVyTWF0Y2gubWFnaWNEYW1hZ2UudmFsdWUpO1xuXG4gIHJlbmRlckRhbWFnZVN0YXRzKCdwaHlzaWNhbCcsIHBoeXNpY2FsRGFtYWdlVmFsdWUsIHBoeXNpY2FsRGFtYWdlUGVyY2VudCk7XG4gIHJlbmRlckRhbWFnZVN0YXRzKCdtYWdpYycsIG1hZ2ljRGFtYWdlVmFsdWUsIG1hZ2ljRGFtYWdlUGVyY2VudCk7XG4gIHJlbmRlckRhbWFnZVN0YXRzKCd0cnVlJywgdHJ1ZURhbWFnZVZhbHVlLCB0cnVlRGFtYWdlUGVyY2VudCk7XG5cbiAgLyogUmVuZGVycyB0aGUgaXRlbSBidWlsZHMgc2VjdGlvbiBvZiB0aGUgc3RhdHMgbW9kYWwgKi9cbiAgY29uc3QgeyBpdGVtU2V0cyB9ID0gY2hhbXBpb25TdGF0cztcbiAgY29uc3QgYWxsSXRlbXMgPSBhd2FpdCBJdGVtSW5mby5nZXRBbGxJdGVtcygpO1xuICBjb25zdCBjaGFtcGlvbkl0ZW1CdWlsZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24taXRlbS1idWlsZHMnKTtcbiAgY29uc3QgaXRlbVNldHNDb250YWluZXIgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnaXRlbS1zZXRzLWNvbnRhaW5lcicsIGNoYW1waW9uSXRlbUJ1aWxkcyk7XG5cbiAgaXRlbVNldHMuZm9yRWFjaCgoaXRlbVNldCkgPT4ge1xuICAgIGNvbnN0IGl0ZW1TZXRDb250YWluZXIgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnaXRlbS1zZXQtY29udGFpbmVyJywgaXRlbVNldHNDb250YWluZXIpO1xuXG4gICAgaXRlbVNldC5mb3JFYWNoKChpdGVtSWQpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBuZXcgSXRlbUluZm8oaXRlbUlkKTtcbiAgICAgIGNvbnN0IGl0ZW1JbmZvID0gaXRlbS5nZXRJdGVtSW5mbyhhbGxJdGVtcyk7XG4gICAgICBpZiAoIWl0ZW1JbmZvLnRhZ3MuaW5jbHVkZXMoJ1RyaW5rZXQnKSAmJiAhaXRlbUluZm8udGFncy5pbmNsdWRlcygnQ29uc3VtYWJsZScpKSB7XG4gICAgICAgIGNvbnN0IG1haW5Db21wb25lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWFpbkNvbXBvbmVudENvbnRhaW5lci5jbGFzc05hbWUgPSAnbWFpbi1jb21wb25lbnQtY29udGFpbmVyJztcbiAgICAgICAgaXRlbVNldENvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluQ29tcG9uZW50Q29udGFpbmVyKTtcblxuICAgICAgICBjb25zdCBtYWluSXRlbSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdtYWluLWl0ZW0nLCBtYWluQ29tcG9uZW50Q29udGFpbmVyKTtcblxuICAgICAgICBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MoJ2l0ZW0taW1nJywgbWFpbkl0ZW0sIGl0ZW1JbmZvLmltYWdlVXJsLCBgJHtpdGVtSWR9LnBuZ2ApO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1EZXRhaWxzQ29udGFpbmVyID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2l0ZW0tZGV0YWlscy1jb250YWluZXInLCBtYWluSXRlbSk7XG5cbiAgICAgICAgY29uc3QgbmFtZUVsZW1lbnQgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2l0ZW0tbmFtZScsIGl0ZW1EZXRhaWxzQ29udGFpbmVyKTtcbiAgICAgICAgbmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSBpdGVtSW5mby5uYW1lO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkVsZW1lbnQgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2l0ZW0tZGVzY3JpcHRpb24nLCBpdGVtRGV0YWlsc0NvbnRhaW5lcik7XG4gICAgICAgIGRlc2NyaXB0aW9uRWxlbWVudC5pbm5lckhUTUwgPSBpdGVtSW5mby5kZXNjcmlwdGlvbjtcbiAgICAgICAgY29uc3QgaXRlbUNvc3QgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnaXRlbS1jb3N0JywgaXRlbURldGFpbHNDb250YWluZXIpO1xuICAgICAgICBjb25zdCBjb3N0TGFiZWwgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2Nvc3QtbGFiZWwnLCBpdGVtQ29zdCk7XG4gICAgICAgIGNvc3RMYWJlbC50ZXh0Q29udGVudCA9ICdHb2xkOiAnO1xuICAgICAgICBjb25zdCBjb3N0QW1vdW50ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdjb3N0LWFtb3VudCcsIGl0ZW1Db3N0KTtcbiAgICAgICAgY29zdEFtb3VudC50ZXh0Q29udGVudCA9IGl0ZW1JbmZvLmNvc3Q7XG5cbiAgICAgICAgLyogVGhlIGNvbXBvbmVudCBpdGVtcyBhcmUgdGhlIHNtYWxsZXIgaXRlbXMgdGhhdCBhcHBlYXIgYmVsb3cgdGhlIG1haW4gaXRlbSAqL1xuICAgICAgICBjb25zdCB7IGNvbXBvbmVudEl0ZW1zIH0gPSBpdGVtSW5mbztcbiAgICAgICAgY29uc3QgY29tcG9uZW50SXRlbXNDb250YWluZXIgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnY29tcG9uZW50LWl0ZW1zLWNvbnRhaW5lcicsIG1haW5Db21wb25lbnRDb250YWluZXIpO1xuXG4gICAgICAgIGNvbXBvbmVudEl0ZW1zLmZvckVhY2goKGNvbXBvbmVudEl0ZW0pID0+IHtcbiAgICAgICAgICBjb25zdCBjb21wb25lbnRJdGVtRWxlbWVudCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdjb21wb25lbnQtaXRlbScsIGNvbXBvbmVudEl0ZW1zQ29udGFpbmVyKTtcbiAgICAgICAgICBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAgICAgICAnY29tcG9uZW50LWl0ZW0taW1nJywgY29tcG9uZW50SXRlbUVsZW1lbnQsIGNvbXBvbmVudEl0ZW0uaW1hZ2VVcmwsIGAke2NvbXBvbmVudEl0ZW0ubmFtZX1gLFxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBjb25zdCBjb21wb25lbnRJdGVtRGV0YWlsc0NvbnRhaW5lciA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdjb21wb25lbnQtaXRlbS1kZXRhaWxzLWNvbnRhaW5lcicsIGNvbXBvbmVudEl0ZW1FbGVtZW50KTtcblxuICAgICAgICAgIGNvbnN0IGNvbXBvbmVudEl0ZW1OYW1lID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdjb21wb25lbnQtaXRlbS1uYW1lJywgY29tcG9uZW50SXRlbURldGFpbHNDb250YWluZXIpO1xuICAgICAgICAgIGNvbXBvbmVudEl0ZW1OYW1lLnRleHRDb250ZW50ID0gY29tcG9uZW50SXRlbS5uYW1lO1xuICAgICAgICAgIGNvbnN0IGNvbXBvbmVudEl0ZW1Db3N0ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2NvbXBvbmVudC1pdGVtLWNvc3QnLCBjb21wb25lbnRJdGVtRGV0YWlsc0NvbnRhaW5lcik7XG4gICAgICAgICAgY29uc3QgY29tcG9uZW50SXRlbUNvc3RMYWJlbCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnY29tcG9uZW50LWl0ZW0tY29zdC1sYWJlbCcsIGNvbXBvbmVudEl0ZW1Db3N0KTtcbiAgICAgICAgICBjb21wb25lbnRJdGVtQ29zdExhYmVsLnRleHRDb250ZW50ID0gJ0dvbGQ6ICc7XG4gICAgICAgICAgY29uc3QgY29tcG9uZW50SXRlbUFtb3VudCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnY29tcG9uZW50LWl0ZW0tYW1vdW50JywgY29tcG9uZW50SXRlbUNvc3QpO1xuICAgICAgICAgIGNvbXBvbmVudEl0ZW1BbW91bnQudGV4dENvbnRlbnQgPSBjb21wb25lbnRJdGVtLmNvc3Q7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgLyogUmVuZGVycyB0aGUgbWF0Y2h1cHMgc2VjdGlvbiBvZiB0aGUgY2hhbXBpb24gbW9kYWwgc3RhdHMgcGFnZSAqL1xuICBjb25zdCBiZXN0TWF0Y2h1cHNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJlc3QtbWF0Y2h1cHMtc2VjdGlvbicpO1xuICBjb25zdCBiZXN0TWF0Y2h1cHNFbGVtZW50ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2Jlc3QtbWF0Y2h1cHMgbWF0Y2h1cHMnLCBiZXN0TWF0Y2h1cHNTZWN0aW9uKTtcbiAgY29uc3QgYmVzdE1hdGNodXBzRGF0YSA9IGNoYW1waW9uU3RhdHMuYmVzdE1hdGNoVXBzO1xuICByZW5kZXJNYXRjaHVwc0luZm8oYmVzdE1hdGNodXBzRWxlbWVudCwgYmVzdE1hdGNodXBzRGF0YSk7XG5cbiAgY29uc3Qgd29yc3RNYXRjaHVwc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29yc3QtbWF0Y2h1cHMtc2VjdGlvbicpO1xuICBjb25zdCB3b3JzdE1hdGNodXBzRWxlbWVudCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICd3b3JzdC1tYXRjaHVwcyBtYXRjaHVwcycsIHdvcnN0TWF0Y2h1cHNTZWN0aW9uKTtcbiAgY29uc3Qgd29yc3RNYXRjaHVwc0RhdGEgPSBjaGFtcGlvblN0YXRzLndvcnN0TWF0Y2hVcHM7XG4gIHJlbmRlck1hdGNodXBzSW5mbyh3b3JzdE1hdGNodXBzRWxlbWVudCwgd29yc3RNYXRjaHVwc0RhdGEpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2hhbXBpb25TdGF0c01vZGFsO1xuIiwiaW1wb3J0IERyb3Bkb3duU2VjdGlvbiBmcm9tICcuLi9oZWxwZXJzL2Ryb3Bkb3duU2VjdGlvbic7XG5pbXBvcnQgeyBnZXRBbGxDaGFtcGlvbkRldGFpbHMgfSBmcm9tICcuLi9jaGFtcGlvbkRhdGEvZ2V0QWxsQ2hhbXBpb25zJztcbmltcG9ydCBFbGVtZW50Q3JlYXRpb24gZnJvbSAnLi4vaGVscGVycy9lbGVtZW50Q3JlYXRpb24nO1xuaW1wb3J0IHsgY3JlYXRlQ2hhbXBpb25Db250YWluZXIgfSBmcm9tICcuL3JlbmRlckhlbHBlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoKSA9PiB7XG4gIC8qIENyZWF0ZXMgdGhlIGZpbHRlciBhbmQgc29ydGluZyBzZWN0aW9uIGJlbG93IHRoZSBoZWFkZXIgKi9cbiAgY29uc3QgZmlsdGVyU29ydFNlY3Rpb24gPSBEcm9wZG93blNlY3Rpb24uY3JlYXRlU2VjdGlvbigpO1xuXG4gIGNvbnN0IHNvcnRPcHRpb25zID0ge1xuICAgIHNvcnQ6IFsnd2lucmF0ZScsICdwaWNrcmF0ZScsICdkYW1hZ2UnXSxcbiAgfTtcblxuICBjb25zdCByb2xlT3B0aW9ucyA9IHtcbiAgICByb2xlOiBbJ3RhbmsnLCAnYXNzYXNzaW4nLCAnZmlnaHRlcicsICdtYWdlJywgJ21hcmtzbWFuJywgJ3N1cHBvcnQnXSxcbiAgfTtcbiAgY29uc3QgZGlmZmljdWx0eU9wdGlvbnMgPSB7XG4gICAgZGlmZmljdWx0eTogWydsb3cnLCAnbWVkaXVtJywgJ2hpZ2gnXSxcbiAgfTtcbiAgY29uc3QgbXVsdGlPcHRpb25BcnJheXMgPSBbcm9sZU9wdGlvbnMsIGRpZmZpY3VsdHlPcHRpb25zXTtcblxuICBjb25zdCBzb3J0RHJvcGRvd24gPSBuZXcgRHJvcGRvd25TZWN0aW9uKCdzb3J0Jywgc29ydE9wdGlvbnMuc29ydCk7XG4gIHNvcnREcm9wZG93bi5yZW5kZXJEcm9wZG93bihmaWx0ZXJTb3J0U2VjdGlvbiwgJ3NpbmdsZS1zZWxlY3QnKTtcblxuICBtdWx0aU9wdGlvbkFycmF5cy5mb3JFYWNoKChvcHRpb25zT2JqZWN0KSA9PiB7XG4gICAgY29uc3QgZHJvcGRvd25OYW1lID0gT2JqZWN0LmtleXMob3B0aW9uc09iamVjdClbMF07XG4gICAgY29uc3Qgb3B0aW9uc0FycmF5ID0gT2JqZWN0LnZhbHVlcyhvcHRpb25zT2JqZWN0KVswXTtcbiAgICBjb25zdCBkcm9wZG93biA9IG5ldyBEcm9wZG93blNlY3Rpb24oZHJvcGRvd25OYW1lLCBvcHRpb25zQXJyYXkpO1xuICAgIGRyb3Bkb3duLnJlbmRlckRyb3Bkb3duKGZpbHRlclNvcnRTZWN0aW9uLCAnbXVsdGktc2VsZWN0Jyk7XG4gIH0pO1xuXG4gIC8qIExvYWQgYWxsIGNoYW1waW9ucyBhbmQgcmVuZGVyIHRoZW0gdG8gdGhlIGNoYW1waW9ucyBwYWdlICovXG4gIGNvbnN0IGNoYW1waW9uc1BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hhbXBpb25zLXBhZ2UnKTtcbiAgRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2xvYWRlcicsIGNoYW1waW9uc1BhZ2UpO1xuICBjb25zdCBjaGFtcGlvbnNTZWN0aW9uID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2NoYW1waW9ucy1zZWN0aW9uJywgY2hhbXBpb25zUGFnZSk7XG4gIGNvbnN0IGFsbENoYW1waW9ucyA9IGF3YWl0IGdldEFsbENoYW1waW9uRGV0YWlscygpO1xuICBjb25zdCBhbGxDaGFtcGlvbnNBcnJheSA9IE9iamVjdC52YWx1ZXMoYWxsQ2hhbXBpb25zKTtcbiAgYWxsQ2hhbXBpb25zQXJyYXkuZm9yRWFjaCgoY2hhbXBpb24pID0+IHtcbiAgICBjcmVhdGVDaGFtcGlvbkNvbnRhaW5lcihjaGFtcGlvbiwgY2hhbXBpb25zU2VjdGlvbik7XG4gIH0pO1xuXG4gIC8qIENyZWF0ZXMgYXV0b2NvbXBsZXRlIGRpdiBmb3IgdGhlIHNlYXJjaCBiYXIgKi9cbiAgY29uc3Qgc2VhcmNoQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1jb250YWluZXInKTtcbiAgY29uc3QgYXV0b0NvbXBsZXRlTmFtZXMgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKFxuICAgICdkaXYnLCAnYXV0by1jb21wbGV0ZS1uYW1lcycsIHNlYXJjaENvbnRhaW5lcixcbiAgKTtcbiAgYWxsQ2hhbXBpb25zQXJyYXkuZm9yRWFjaCgoY2hhbXBpb24pID0+IHtcbiAgICBjb25zdCBjaGFtcGlvbk5hbWUgPSBjaGFtcGlvbi5uYW1lO1xuICAgIGNvbnN0IGNoYW1waW9uSWQgPSBjaGFtcGlvbi5pZDtcbiAgICBjb25zdCBhdXRvQ29tcGxldGVOYW1lV3JhcHBlciA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAnZGl2JywgJ2F1dG8tY29tcGxldGUtbmFtZS13cmFwcGVyJywgYXV0b0NvbXBsZXRlTmFtZXMsXG4gICAgKTtcbiAgICBhdXRvQ29tcGxldGVOYW1lV3JhcHBlci50YWJJbmRleCA9ICctMSc7XG4gICAgY29uc3QgYXV0b0NvbXBsZXRlTmFtZSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAnc3BhbicsICdhdXRvLWNvbXBsZXRlLW5hbWUnLCBhdXRvQ29tcGxldGVOYW1lV3JhcHBlcixcbiAgICApO1xuICAgIGF1dG9Db21wbGV0ZU5hbWUudGV4dENvbnRlbnQgPSBjaGFtcGlvbk5hbWU7XG4gICAgYXV0b0NvbXBsZXRlTmFtZS5kYXRhc2V0LmNoYW1waW9uSWQgPSBjaGFtcGlvbklkO1xuICAgIGF1dG9Db21wbGV0ZU5hbWUuaWQgPSBjaGFtcGlvbk5hbWU7XG4gIH0pO1xufTtcbiIsIi8vIFJlbmRlcnMgRE9NIGVsZW1lbnRzIHRoYXQgYXJlIHJlcGVhdGVkIGFjcm9zcyB0ZW1wbGF0ZXNcblxuaW1wb3J0IEVsZW1lbnRDcmVhdGlvbiBmcm9tICcuLi9oZWxwZXJzL2VsZW1lbnRDcmVhdGlvbic7XG5cbmNvbnN0IGltcG9ydEFsbCA9IChyKSA9PiB7XG4gIGNvbnN0IGltYWdlcyA9IHt9O1xuICByLmtleXMoKS5mb3JFYWNoKChpdGVtKSA9PiB7IGltYWdlc1tpdGVtLnJlcGxhY2UoJy4vJywgJycpXSA9IHIoaXRlbSk7IH0pO1xuICByZXR1cm4gaW1hZ2VzO1xufTtcblxuY29uc3QgaW1hZ2VzID0gaW1wb3J0QWxsKHJlcXVpcmUuY29udGV4dCgnLi4vaW1hZ2VzJywgZmFsc2UsIC9cXC4ocG5nfGpwZT9nfHN2ZykkLykpO1xuXG5jb25zdCByZW5kZXJIZWFkZXJEZXRhaWxzID0gKGNoYW1waW9uRGF0YSwgbW9kYWxDb250YWluZXIpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7bW9kYWxDb250YWluZXJ9LWNvbnRhaW5lcmApO1xuICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZCA9IGBuby1yZXBlYXQgdXJsKGh0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi9pbWcvY2hhbXBpb24vc3BsYXNoLyR7Y2hhbXBpb25EYXRhLmlkfV8wLmpwZykgNzAlIDgwJWA7XG4gIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb3Zlcic7XG5cbiAgY29uc3QgY2hhbXBpb25UaXRsZSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tdGl0bGUnKTtcbiAgY2hhbXBpb25UaXRsZS50ZXh0Q29udGVudCA9IGNoYW1waW9uRGF0YS50aXRsZTtcblxuICBjb25zdCBjaGFtcGlvbk5hbWUgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLW5hbWUnKTtcbiAgY2hhbXBpb25OYW1lLnRleHRDb250ZW50ID0gY2hhbXBpb25EYXRhLm5hbWU7XG59O1xuXG4vLyBSZW5kZXJzIHdpbiBvciBwaWNrIHJhdGUgdG8gdGhlIERPTVxuY29uc3QgcmVuZGVyU3RhdE92ZXJ2aWV3ID0gKHN0YXRzT3ZlcnZpZXcsIHJhdGVUZXh0LCByYXRlVHlwZSkgPT4ge1xuICBjb25zdCBjaGFtcGlvblJhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNvbnN0IHJhdGVWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAvLyBUdXJucyAnV2luIFJhdGUnIGludG8gJ3dpbi1yYXRlJ1xuICBjb25zdCBsb3dlckNhc2VUZXh0ID0gcmF0ZVRleHQucmVwbGFjZSgnICcsICctJykudG9Mb3dlckNhc2UoKTtcblxuICBjaGFtcGlvblJhdGUuY2xhc3NOYW1lID0gbG93ZXJDYXNlVGV4dDtcbiAgbGFiZWwuaWQgPSBgJHtsb3dlckNhc2VUZXh0fS1sYWJlbGA7XG4gIGxhYmVsLmNsYXNzTmFtZSA9ICdsYWJlbCc7XG4gIHJhdGVWYWx1ZS5jbGFzc05hbWUgPSBgJHtsb3dlckNhc2VUZXh0fS12YWx1ZWA7XG4gIGxhYmVsLnRleHRDb250ZW50ID0gcmF0ZVRleHQ7XG4gIHJhdGVWYWx1ZS50ZXh0Q29udGVudCA9IGAke3JhdGVUeXBlfSVgO1xuXG4gIGNoYW1waW9uUmF0ZS5hcHBlbmRDaGlsZChsYWJlbCk7IGNoYW1waW9uUmF0ZS5hcHBlbmRDaGlsZChyYXRlVmFsdWUpO1xuICBzdGF0c092ZXJ2aWV3LmFwcGVuZENoaWxkKGNoYW1waW9uUmF0ZSk7XG59O1xuXG5jb25zdCByZW5kZXJDaGFtcGlvbkxhbmUgPSAoc3RhdHNPdmVydmlldywgbGFuZSkgPT4ge1xuICBjb25zdCBjaGFtcGlvbkxhbmVJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNoYW1waW9uTGFuZUluZm8uY2xhc3NOYW1lID0gJ2xhbmUtaW5mbyc7XG4gIGNvbnN0IGxhbmVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBsYW5lVGV4dC5jbGFzc05hbWUgPSAnbGFuZS10ZXh0IGxhYmVsJztcbiAgbGFuZVRleHQudGV4dENvbnRlbnQgPSBsYW5lO1xuICBjb25zdCBsYW5lSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBsYW5lSWNvbi5jbGFzc05hbWUgPSAnbGFuZS1pY29uIGNoYW1waW9uLXJvbGUtaW1hZ2UnO1xuICBsYW5lSWNvbi5zcmMgPSBgJHtpbWFnZXNbYCR7bGFuZX0ucG5nYF19YDtcbiAgbGFuZUljb24uYWx0ID0gYCR7bGFuZX0ucG5nYDtcbiAgY2hhbXBpb25MYW5lSW5mby5hcHBlbmRDaGlsZChsYW5lVGV4dCk7XG4gIGNoYW1waW9uTGFuZUluZm8uYXBwZW5kQ2hpbGQobGFuZUljb24pO1xuICBzdGF0c092ZXJ2aWV3LmFwcGVuZENoaWxkKGNoYW1waW9uTGFuZUluZm8pO1xufTtcblxuY29uc3QgcmVuZGVyRGFtYWdlU3RhdHMgPSAoZGFtYWdlVHlwZSwgZGFtYWdlVmFsdWUsIGRhbWFnZVBlcmNlbnRhZ2UpID0+IHtcbiAgY29uc3QgZGFtYWdlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZGFtYWdlVHlwZX0tZGFtYWdlLWNvbnRhaW5lcmApO1xuXG4gIGNvbnN0IGRhbWFnZVN0YXRzID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2RhbWFnZS1zdGF0cycsIGRhbWFnZUNvbnRhaW5lcik7XG5cbiAgY29uc3QgZGFtYWdlVmFsdWVFbGVtZW50ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhJZCgnc3BhbicsIGAke2RhbWFnZVR5cGV9LXZhbHVlYCwgZGFtYWdlU3RhdHMpO1xuICBjb25zdCBkYW1hZ2VQZXJjZW50YWdlRWxlbWVudCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoSWQoJ3NwYW4nLCBgJHtkYW1hZ2VUeXBlfS1wZXJjZW50YWdlYCwgZGFtYWdlU3RhdHMpO1xuICBkYW1hZ2VWYWx1ZUVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtkYW1hZ2VWYWx1ZX1gO1xuICBkYW1hZ2VQZXJjZW50YWdlRWxlbWVudC50ZXh0Q29udGVudCA9IGAke2RhbWFnZVBlcmNlbnRhZ2V9JWA7XG59O1xuXG5jb25zdCByZW5kZXJNYXRjaHVwc0luZm8gPSAobWF0Y2h1cHNFbGVtZW50LCBtYXRjaHVwc0RhdGEpID0+IHtcbiAgbWF0Y2h1cHNEYXRhLmZvckVhY2goKG1hdGNodXApID0+IHtcbiAgICBjb25zdCBtYXRjaHVwSW5mbyA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdtYXRjaHVwLWluZm8nLCBtYXRjaHVwc0VsZW1lbnQpO1xuICAgIGNvbnN0IGVuZW15Q2hhbXBpb25OYW1lID0gbWF0Y2h1cFswXTtcbiAgICBjb25zdCBlbmVteUNoYW1waW9uSW1nVXJsID0gYGh0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi8xMS4yMi4xL2ltZy9jaGFtcGlvbi8ke2VuZW15Q2hhbXBpb25OYW1lfS5wbmdgO1xuICAgIEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEltYWdlRWxlbWVudFdpdGhDbGFzcyhcbiAgICAgICdlbmVteS1jaGFtcGlvbi1pbWcnLCBtYXRjaHVwSW5mbywgZW5lbXlDaGFtcGlvbkltZ1VybCwgYHNtYWxsLSR7ZW5lbXlDaGFtcGlvbk5hbWV9LnBuZ2AsXG4gICAgKTtcblxuICAgIGNvbnN0IG1hdGNodXBTdGF0cyA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdtYXRjaHVwLXN0YXRzJywgbWF0Y2h1cEluZm8pO1xuICAgIGNvbnN0IGVuZW15Q2hhbXBpb25OYW1lRWxlbWVudCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnZW5lbXktY2hhbXBpb24tbmFtZScsIG1hdGNodXBTdGF0cyk7XG4gICAgZW5lbXlDaGFtcGlvbk5hbWVFbGVtZW50LnRleHRDb250ZW50ID0gZW5lbXlDaGFtcGlvbk5hbWU7XG4gICAgY29uc3Qgd2lucmF0ZUFnYWluc3QgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnd2lucmF0ZS1hZ2FpbnN0JywgbWF0Y2h1cFN0YXRzKTtcbiAgICBjb25zdCB3aW5yYXRlQWdhaW5zdExhYmVsID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICd3aW5yYXRlLWFnYWluc3QtbGFiZWwnLCB3aW5yYXRlQWdhaW5zdCk7XG4gICAgd2lucmF0ZUFnYWluc3RMYWJlbC50ZXh0Q29udGVudCA9ICdXaW5yYXRlOiAnO1xuICAgIGNvbnN0IGNvbG9yID0gbWF0Y2h1cHNFbGVtZW50LmNsYXNzTmFtZSA9PT0gJ2Jlc3QtbWF0Y2h1cHMgbWF0Y2h1cHMnID8gJ2JsdWUnIDogJ3JlZCc7XG4gICAgY29uc3Qgd2lucmF0ZUFnYWluc3RQZXJjZW50YWdlID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsIGB3aW5yYXRlLWFnYWluc3QtcGVyY2VudGFnZSAke2NvbG9yfWAsIHdpbnJhdGVBZ2FpbnN0KTtcbiAgICB3aW5yYXRlQWdhaW5zdFBlcmNlbnRhZ2UudGV4dENvbnRlbnQgPSBgJHttYXRjaHVwWzFdLndpblJhdGVBZ2FpbnN0LnRvRml4ZWQoMCl9JWA7XG4gICAgY29uc3QgZ2FtZXNQbGF5ZWRBZ2FpbnN0ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdnYW1lcy1wbGF5ZWQtYWdhaW5zdCcsIG1hdGNodXBTdGF0cyk7XG4gICAgZ2FtZXNQbGF5ZWRBZ2FpbnN0LnRleHRDb250ZW50ID0gYEdhbWVzOiAke21hdGNodXBbMV0ubWF0Y2hlc31gO1xuICB9KTtcbn07XG5cbmNvbnN0IGNyZWF0ZUNoYW1waW9uQ29udGFpbmVyID0gKGNoYW1waW9uLCBjaGFtcGlvbnNTZWN0aW9uKSA9PiB7XG4gIGNvbnN0IGNoYW1waW9uQ29udGFpbmVyID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2NoYW1waW9uLWNvbnRhaW5lciBzaG93bicsIGNoYW1waW9uc1NlY3Rpb24pO1xuICBjb25zdCBjaGFtcGlvbklkID0gY2hhbXBpb24uaWQgPyBjaGFtcGlvbi5pZCA6IGNoYW1waW9uLmNoYW1waW9uTmFtZTtcbiAgY2hhbXBpb25Db250YWluZXIuZGF0YXNldC5pZCA9IGNoYW1waW9uSWQ7XG4gIGNvbnN0IGNoYW1waW9uSW1nVXJsID0gYGh0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi9pbWcvY2hhbXBpb24vbG9hZGluZy8ke2NoYW1waW9uSWR9XzAuanBnYDtcbiAgRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzKFxuICAgICdjaGFtcGlvbi1pbWcnLCBjaGFtcGlvbkNvbnRhaW5lciwgY2hhbXBpb25JbWdVcmwsIGNoYW1waW9uSWQsXG4gICk7XG5cbiAgY29uc3QgY2hhbXBpb25OYW1lV3JhcHBlciA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdjaGFtcGlvbi1uYW1lLXdyYXBwZXInLCBjaGFtcGlvbkNvbnRhaW5lcik7XG4gIGNvbnN0IGNoYW1waW9uTmFtZSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnY2hhbXBpb24tbmFtZScsIGNoYW1waW9uTmFtZVdyYXBwZXIpO1xuICBjaGFtcGlvbk5hbWUudGV4dENvbnRlbnQgPSBjaGFtcGlvbi5uYW1lO1xufTtcblxuZXhwb3J0IHtcbiAgcmVuZGVySGVhZGVyRGV0YWlscyxcbiAgcmVuZGVyU3RhdE92ZXJ2aWV3LFxuICByZW5kZXJDaGFtcGlvbkxhbmUsXG4gIHJlbmRlckRhbWFnZVN0YXRzLFxuICBpbWFnZXMsXG4gIHJlbmRlck1hdGNodXBzSW5mbyxcbiAgY3JlYXRlQ2hhbXBpb25Db250YWluZXIsXG59O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIC0tcmFzaW4tYmxhY2s6ICMxZDFlMmM7XFxuICAtLXRyYW5zcGFyZW50LXJhc2luLWJsYWNrOiAjMWQxZTJjYzc7XFxuICAtLWRhcmstZ29sZDogIzkyNzU0MztcXG4gIC0tbGlnaHQtZ29sZDogI2M3YWI2ZTtcXG59XFxuXFxuI2NoYW1waW9ucy1wYWdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IC00O1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLnBhZ2UtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFlbSAwO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci13aWR0aDogMCAwIDJweCAwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5zZWFyY2gtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLmF1dG8tY29tcGxldGUtbmFtZXMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZDRkNDtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICBib3JkZXItdG9wOiBub25lO1xcbiAgei1pbmRleDogNDtcXG4gIHRvcDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTRyZW07XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5hdXRvLWNvbXBsZXRlLW5hbWUtd3JhcHBlciB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDRkNGQ0O1xcbiAgY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5hdXRvLWNvbXBsZXRlLW5hbWUtd3JhcHBlcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5hdXRvLWNvbXBsZXRlLW5hbWUtd3JhcHBlcjpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5zZWFyY2gge1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBtaW4td2lkdGg6IDE4ZW07XFxuICBiYWNrZ3JvdW5kOiAjZTJlNGU5O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbWluLWhlaWdodDogMi42ZW07XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5jaGFtcGlvbnMtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAxZW07XFxuICBtYXgtd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi10b3A6IDJlbTtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5jaGFtcGlvbi1jb250YWluZXIuc2hvd24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1heC13aWR0aDogOXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi10b3A6IDEuNWVtO1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLmNoYW1waW9uLWNvbnRhaW5lci5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5jaGFtcGlvbi1pbWcge1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDglO1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLmNoYW1waW9uLW5hbWUtd3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IC0zLjJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50LXJhc2luLWJsYWNrKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMC4yZW0gMCAwLjJlbTtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5jaGFtcGlvbi1uYW1lIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLmZpbHRlci1zb3J0LXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiA1NyU7XFxuICBtYXJnaW46IDFlbSBhdXRvIDNlbSBhdXRvO1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLmxhbmUtZmlsdGVyLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZsZXg6IDE7XFxuICB3aWR0aDogNzYlO1xcbiAgbWFyZ2luOiAxZW0gYXV0bztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLmhlYWRlci1vcHRpb24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICM3MDc1N2E7XFxufVxcbiNjaGFtcGlvbnMtcGFnZSAuaGVhZGVyLW9wdGlvbjpob3ZlciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggdmFyKC0tbGlnaHQtZ29sZCk7XFxufVxcbiNjaGFtcGlvbnMtcGFnZSAuaGVhZGVyLW9wdGlvbi5hY3RpdmUge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IHZhcigtLWxpZ2h0LWdvbGQpO1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLmRyb3Bkb3duIHtcXG4gIG1hcmdpbjogMCAwLjRlbSAwLjRlbSAwLjRlbTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZsZXg6IDE7XFxufVxcbiNjaGFtcGlvbnMtcGFnZSAuZHJvcGRvd24tYnRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZkZmUxO1xcbiAgY29sb3I6ICMyZjFkMWQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBmb250LXNpemU6IDFlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkO1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLmRyb3Bkb3duLWJ0bjo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIuKepFxcXCI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcbiNjaGFtcGlvbnMtcGFnZSAuZHJvcGRvd24tb3B0aW9ucyB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMjtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5kcm9wZG93bi1vcHRpb24ge1xcbiAgY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBjb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmOGY4Zjg7XFxufVxcbiNjaGFtcGlvbnMtcGFnZSAuZHJvcGRvd24tb3B0aW9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWRlZGU7XFxufVxcbiNjaGFtcGlvbnMtcGFnZSAuZHJvcGRvd24tb3B0aW9uLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5sb2FkZXIge1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgbWFyZ2luOiA1MHB4IGF1dG87XFxuICB0ZXh0LWluZGVudDogLTk5OTllbTtcXG4gIHdpZHRoOiAxMWVtO1xcbiAgaGVpZ2h0OiAxMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZDogIzJlMzQzNjtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsICMyZTM0MzYgMTAlLCByZ2JhKDE0MywgODksIDIsIDApIDQyJSk7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMmUzNDM2IDEwJSwgcmdiYSgxNDMsIDg5LCAyLCAwKSA0MiUpO1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsICMyZTM0MzYgMTAlLCByZ2JhKDE0MywgODksIDIsIDApIDQyJSk7XFxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KGxlZnQsICMyZTM0MzYgMTAlLCByZ2JhKDE0MywgODksIDIsIDApIDQyJSk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyZTM0MzYgMTAlLCByZ2JhKDE0MywgODksIDIsIDApIDQyJSk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZDMgMS40cyBpbmZpbml0ZSBsaW5lYXI7XFxuICBhbmltYXRpb246IGxvYWQzIDEuNHMgaW5maW5pdGUgbGluZWFyO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMTcuM2VtO1xcbiAgei1pbmRleDogNTtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5sb2FkZXI6YmVmb3JlIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmstZ29sZCk7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlIDAgMCAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLmxvYWRlcjphZnRlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICB3aWR0aDogNzUlO1xcbiAgaGVpZ2h0OiA3NSU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWQzIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGxvYWQzIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogODUwcHgpIHtcXG4gICNjaGFtcGlvbnMtcGFnZSAuY2hhbXBpb25zLXNlY3Rpb24ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgfVxcbiAgI2NoYW1waW9ucy1wYWdlIC5jaGFtcGlvbi1jb250YWluZXIuc2hvd24ge1xcbiAgICBtYXgtd2lkdGg6IDEwcmVtO1xcbiAgfVxcbiAgI2NoYW1waW9ucy1wYWdlIC5sYW5lLWZpbHRlci1oZWFkZXIge1xcbiAgICB3aWR0aDogNTQlO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XFxuICAjY2hhbXBpb25zLXBhZ2UgLmRyb3Bkb3duIHtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICB9XFxuICAjY2hhbXBpb25zLXBhZ2UgLmNoYW1waW9ucy1zZWN0aW9uIHtcXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAwO1xcbiAgfVxcbiAgI2NoYW1waW9ucy1wYWdlIC5jaGFtcGlvbi1uYW1lLXdyYXBwZXIge1xcbiAgICBtYXJnaW4tdG9wOiAtMy42ZW07XFxuICB9XFxuICAjY2hhbXBpb25zLXBhZ2UgLmNoYW1waW9uLW5hbWUge1xcbiAgICBmb250LXNpemU6IDEuNGVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxuICAjY2hhbXBpb25zLXBhZ2UgLmNoYW1waW9ucy1zZWN0aW9uIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDE1MDBweCkge1xcbiAgI2NoYW1waW9ucy1wYWdlIC5jaGFtcGlvbnMtc2VjdGlvbiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XFxuICB9XFxuICAjY2hhbXBpb25zLXBhZ2UgLmNoYW1waW9uLWNvbnRhaW5lci5zaG93biB7XFxuICAgIG1heC13aWR0aDogMTJyZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgI2NoYW1waW9ucy1wYWdlIC5oZWFkZXItb3B0aW9uIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAjY2hhbXBpb25zLXBhZ2UgLmNoYW1waW9ucy1zZWN0aW9uIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDM2MHB4KSB7XFxuICAjY2hhbXBpb25zLXBhZ2UgLmxhbmUtZmlsdGVyLWhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzaGVldHMvY2hhbXBpb25zLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0MsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQUVEOztBQUNBO0VBQ0Usc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUFFRjs7QUFDQTtFQUNFLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBRUY7QUFBRTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFSjtBQUNFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBQ0o7QUFFRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBQUo7QUFHRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBREo7QUFJRTtFQUNFLG1DQUFBO0FBRko7QUFLRTtFQUNFLG1DQUFBO0FBSEo7QUFNRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7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QUFBO0VBaENKO0VBbUNFO0lBQ0UsZ0JBQUE7RUFqQ0o7QUFDRjtBQW9DRTtFQUNFO0lBQ0UscUNBQUE7RUFsQ0o7QUFDRjtBQXFDRTtFQUNFO0lBQ0UscUNBQUE7RUFuQ0o7RUFzQ0U7SUFDRSxnQkFBQTtFQXBDSjtBQUNGO0FBdUNFO0VBQ0U7SUFDRSxtQkFBQTtFQXJDSjtBQUNGO0FBd0NFO0VBQ0U7SUFDRSxxQ0FBQTtFQXRDSjtBQUNGO0FBeUNFO0VBQ0U7SUFDRSxjQUFBO0VBdkNKO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1yYXNpbi1ibGFjazogIzFkMWUyYztcXG4gIC0tdHJhbnNwYXJlbnQtcmFzaW4tYmxhY2s6ICMxZDFlMmNjNztcXG4gIC0tZGFyay1nb2xkOiAjOTI3NTQzO1xcbiAgLS1saWdodC1nb2xkOiAjYzdhYjZlO1xcbn1cXG5cXG4jY2hhbXBpb25zLXBhZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogLTQ7XFxuXFxuICAucGFnZS1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMWVtIDA7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gICAgYm9yZGVyLXdpZHRoOiAwIDAgMnB4IDA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuc2VhcmNoLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLmF1dG8tY29tcGxldGUtbmFtZXMge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ0ZDQ7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIHotaW5kZXg6IDQ7XFxuICAgIHRvcDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDE0cmVtO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7IFxcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmF1dG8tY29tcGxldGUtbmFtZS13cmFwcGVyIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyBcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNGQ0ZDQ7IFxcbiAgICBjb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5hdXRvLWNvbXBsZXRlLW5hbWUtd3JhcHBlcjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgfVxcblxcbiAgLmF1dG8tY29tcGxldGUtbmFtZS13cmFwcGVyOmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICB9XFxuICBcXG4gIC5zZWFyY2gge1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgbWluLXdpZHRoOiAxOGVtO1xcbiAgICBiYWNrZ3JvdW5kOiAjZTJlNGU5O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIG1pbi1oZWlnaHQ6IDIuNmVtO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbnMtc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xcbiAgICBncmlkLWNvbHVtbi1nYXA6IDFlbTtcXG4gICAgbWF4LXdpZHRoOiA4MCU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogMmVtO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLWNvbnRhaW5lci5zaG93biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1heC13aWR0aDogOXJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW4tdG9wOiAxLjVlbVxcbiAgfVxcblxcbiAgLmNoYW1waW9uLWNvbnRhaW5lci5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLWltZyB7XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogOCU7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tbmFtZS13cmFwcGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAtMy4yZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50LXJhc2luLWJsYWNrKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMC4yZW0gMCAwLjJlbTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1uYW1lIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgfVxcbiAgXFxuICAuZmlsdGVyLXNvcnQtc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA1NyU7XFxuICBcXG4gICAgbWFyZ2luOiAxZW0gYXV0byAzZW0gYXV0bztcXG4gIH1cXG4gIFxcbiAgLmxhbmUtZmlsdGVyLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmbGV4OiAxO1xcbiAgICB3aWR0aDogNzYlO1xcbiAgICBtYXJnaW46IDFlbSBhdXRvO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIH1cXG5cXG4gIC5oZWFkZXItb3B0aW9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogIzcwNzU3YTtcXG4gIH1cXG5cXG4gIC5oZWFkZXItb3B0aW9uOmhvdmVyIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggdmFyKC0tbGlnaHQtZ29sZCk7XFxuICB9XFxuXFxuICAuaGVhZGVyLW9wdGlvbi5hY3RpdmUge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCB2YXIoLS1saWdodC1nb2xkKTtcXG4gIH1cXG5cXG4gIC5kcm9wZG93biB7XFxuICAgIG1hcmdpbjogMCAwLjRlbSAwLjRlbSAwLjRlbTtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZsZXg6IDE7XFxuICB9XFxuXFxuICAuZHJvcGRvd24tYnRuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmRmZTE7XFxuICAgIGNvbG9yOiAjMmYxZDFkO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XFxuICB9XFxuXFxuICAuZHJvcGRvd24tYnRuOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcMjdBNFxcXCI7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgfVxcblxcbiAgLmRyb3Bkb3duLW9wdGlvbnMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBkaXNwbGF5OiBub25lOyBcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgei1pbmRleDogMjtcXG4gIH1cXG4gIFxcbiAgLmRyb3Bkb3duLW9wdGlvbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7IFxcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZjhmOGY4O1xcbiAgfVxcblxcbiAgLmRyb3Bkb3duLW9wdGlvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMWRlZGU7XFxuICB9XFxuXFxuICAuZHJvcGRvd24tb3B0aW9uLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgfVxcblxcbiAgLmxvYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XFxuICAgIHRleHQtaW5kZW50OiAtOTk5OWVtO1xcbiAgICB3aWR0aDogMTFlbTtcXG4gICAgaGVpZ2h0OiAxMWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQ6ICMyZTM0MzY7XFxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsICMyZTM0MzYgMTAlLCByZ2JhKDE0Myw4OSwyLCAwKSA0MiUpO1xcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMmUzNDM2IDEwJSwgcmdiYSgxNDMsODksMiwgMCkgNDIlKTtcXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsICMyZTM0MzYgMTAlLCByZ2JhKDE0Myw4OSwyLCAwKSA0MiUpO1xcbiAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KGxlZnQsICMyZTM0MzYgMTAlLCByZ2JhKDE0Myw4OSwyLCAwKSA0MiUpO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyZTM0MzYgMTAlLCByZ2JhKDE0Myw4OSwyLCAwKSA0MiUpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkMyAxLjRzIGluZmluaXRlIGxpbmVhcjtcXG4gICAgYW5pbWF0aW9uOiBsb2FkMyAxLjRzIGluZmluaXRlIGxpbmVhcjtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDE3LjNlbTtcXG4gICAgei1pbmRleDogNTtcXG4gIH1cXG4gIC5sb2FkZXI6YmVmb3JlIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWRhcmstZ29sZCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCUgMCAwIDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBjb250ZW50OiAnJztcXG4gIH1cXG4gIC5sb2FkZXI6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGhlaWdodDogNzUlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgfVxcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGxvYWQzIHtcXG4gICAgMCUge1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIH1cXG4gIH1cXG4gIEBrZXlmcmFtZXMgbG9hZDMge1xcbiAgICAwJSB7XFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgfVxcbiAgfVxcbiAgXFxuXFxuICBAbWVkaWEgKG1pbi13aWR0aDogODUwcHgpIHtcXG4gICAgLmNoYW1waW9ucy1zZWN0aW9uIHtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgICB9XFxuXFxuICAgIC5jaGFtcGlvbi1jb250YWluZXIuc2hvd24ge1xcbiAgICAgIG1heC13aWR0aDogMTByZW07XFxuICAgIH1cXG5cXG4gICAgLmxhbmUtZmlsdGVyLWhlYWRlciB7XFxuICAgICAgd2lkdGg6IDU0JTtcXG4gICAgfVxcbiAgfVxcblxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge1xcblxcbiAgICAuZHJvcGRvd24ge1xcbiAgICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgICB9XFxuXFxuICAgIC5jaGFtcGlvbnMtc2VjdGlvbiB7XFxuICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAwO1xcbiAgICB9XFxuXFxuICAgIC5jaGFtcGlvbi1uYW1lLXdyYXBwZXIge1xcbiAgICAgIG1hcmdpbi10b3A6IC0zLjZlbTtcXG4gICAgfVxcblxcbiAgICAuY2hhbXBpb24tbmFtZSB7XFxuICAgICAgZm9udC1zaXplOiAxLjRlbTtcXG4gICAgfVxcbiAgfVxcblxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgICAuY2hhbXBpb25zLXNlY3Rpb24ge1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxNTAwcHgpIHtcXG4gICAgLmNoYW1waW9ucy1zZWN0aW9uIHtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xcbiAgICB9XFxuXFxuICAgIC5jaGFtcGlvbi1jb250YWluZXIuc2hvd24ge1xcbiAgICAgIG1heC13aWR0aDogMTJyZW07XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgICAuaGVhZGVyLW9wdGlvbiB7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcXG4gICAgfVxcbiAgfVxcblxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAgIC5jaGFtcGlvbnMtc2VjdGlvbiB7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgfVxcbiAgfVxcblxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDM2MHB4KSB7XFxuICAgIC5sYW5lLWZpbHRlci1oZWFkZXIge1xcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICB9XFxuICB9XFxuIH1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1yYXNpbi1ibGFjazogIzFkMWUyYztcXG4gIC0tZGFyay1nb2xkOiAjOTI3NTQzO1xcbiAgLS1saWdodC1nb2xkOiAjYzdhYjZlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICBwYWRkaW5nOiAycmVtIDA7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG4ubW9kYWwgI21haW4tY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXgtd2lkdGg6IDc1JTtcXG4gIG1pbi1oZWlnaHQ6IDQ5cmVtO1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLm1vZGFsIC5tb2RhbC1oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMGJmO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC42ZW07XFxuICBsaW5lLWhlaWdodDogMS40O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLm1vZGFsIC5uYXZpZ2F0aW9uLWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmNsb3NlLW1vZGFsLWJ0bi13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDEuMmVtO1xcbn1cXG4ubW9kYWwgLmNsb3NlLW1vZGFsLWJ0biB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1zaXplOiAxLjZlbTtcXG59XFxuLm1vZGFsIC5jbG9zZS1tb2RhbC1idG46aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbn1cXG4ubW9kYWwgLm1vZGFsLW5hdi1saW5rcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBmb250LXNpemU6IDIycHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm1vZGFsIC5tb2RhbC1uYXYtbGluayB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tdG9wOiAwLjVlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG4ubW9kYWwgLm1vZGFsLW5hdi1saW5rOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLWhlYWRpbmcge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLW5hbWUge1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXRpdGxlIHtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tcm9sZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXJvbGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1yZXNvdXJjZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXJvbGUtaW1hZ2Uge1xcbiAgaGVpZ2h0OiAzLjVyZW07XFxuICB3aWR0aDogMy41cmVtO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXJlc291cmNlLWltYWdlIHtcXG4gIGhlaWdodDogMy41cmVtO1xcbiAgd2lkdGg6IDMuNXJlbTtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1yb2xlLW5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1yZXNvdXJjZS1uYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tbWFpbi1pbmZvIHtcXG4gIHBhZGRpbmc6IDEuOHJlbTtcXG4gIG1heC13aWR0aDogMzRyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogbGFzdCBiYXNlbGluZTtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xcbiAgZnJvbSB7XFxuICAgIHRvcDogLTMwMHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0b3A6IDA7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XFxuICBmcm9tIHtcXG4gICAgdG9wOiAtMzAwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICB0byB7XFxuICAgIHRvcDogMDtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuLm1vZGFsIC5sb3JlLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwYmY7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG59XFxuLm1vZGFsIC5zdWJoZWFkaW5nIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDAuNGVtO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmFiaWxpdGllcy1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMGJmO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC42ZW07XFxuICBsaW5lLWhlaWdodDogMS40O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICB3aWR0aDogMjhlbTtcXG59XFxuLm1vZGFsIC5hYmlsaXRpZXMtaGVhZGluZyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tb2RhbCAuYWJpbGl0eS1pbWdzIHtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuLm1vZGFsIC5hYmlsaXR5LWRlc2NyaXB0aW9uIHtcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tZGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1leHRyYS1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ubW9kYWwgLmFiaWxpdHktaW5mbyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubW9kYWwgLmFiaWxpdHktaW5mby5hY3RpdmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5tb2RhbCAuc3BlbGwtaW1nIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMCAwLjVyZW07XFxuICBoZWlnaHQ6IDMuM3JlbTtcXG4gIHdpZHRoOiAzLjNyZW07XFxufVxcbi5tb2RhbCAuc3BlbGwtaW1nLmNsaWNrZWQge1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci13aWR0aDogNHB4O1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXRpcHMtc2VjdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwYmY7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XFxuICBtYXgtd2lkdGg6IDM0cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXRpcHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tdGlwIHtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuLm1vZGFsICNzdGF0cy1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMDtcXG4gIG1heC13aWR0aDogNzUlO1xcbiAgbWluLWhlaWdodDogNDlyZW07XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tc3RhdHMtb3ZlcnZpZXcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgbWFyZ2luLXRvcDogMC41ZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG4gIG1heC13aWR0aDogMjVyZW07XFxuICBtaW4td2lkdGg6IDIwcmVtO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG4ubW9kYWwgLndpbi1yYXRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ubW9kYWwgLnBpY2stcmF0ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLm1vZGFsIC5sYW5lLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubW9kYWwgLnBpY2stcmF0ZS12YWx1ZSB7XFxuICBtYXJnaW4tdG9wOiAwLjRlbTtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG59XFxuLm1vZGFsIC53aW4tcmF0ZS12YWx1ZSB7XFxuICBtYXJnaW4tdG9wOiAwLjRlbTtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG59XFxuLm1vZGFsIC5sYWJlbCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tZGFtYWdlLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwYmY7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIG1heC1oZWlnaHQ6IDE3LjVyZW07XFxufVxcbi5tb2RhbCAuZGFtYWdlLWhlYWRpbmcge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmNpcmN1bGFyLWNoYXJ0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWF4LXdpZHRoOiA4MCU7XFxuICBtYXgtaGVpZ2h0OiAxNGVtO1xcbn1cXG4ubW9kYWwgLmNpcmNsZSB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlLXdpZHRoOiAyLjI7XFxuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XFxuICBhbmltYXRpb246IHByb2dyZXNzIDFzIGVhc2Utb3V0IGZvcndhcmRzO1xcbn1cXG4ubW9kYWwgI21hZ2ljLWRhbWFnZS1zdHJva2Uge1xcbiAgc3Ryb2tlOiAjMzVhN2ZmO1xcbn1cXG4ubW9kYWwgI3BoeXNpY2FsLWRhbWFnZS1zdHJva2Uge1xcbiAgc3Ryb2tlOiAjZmY1OTY0O1xcbn1cXG4ubW9kYWwgI3RydWUtZGFtYWdlLXN0cm9rZSB7XFxuICBzdHJva2U6ICNmZmU3NGM7XFxufVxcbkBrZXlmcmFtZXMgcHJvZ3Jlc3Mge1xcbiAgMCUge1xcbiAgICBzdHJva2UtZGFzaGFycmF5OiAwIDEwMDtcXG4gIH1cXG59XFxuLm1vZGFsIC50b3RhbC1kYW1hZ2UtdGV4dCB7XFxuICBmb250LXNpemU6IDRweDtcXG4gIHRleHQtYW5jaG9yOiBtaWRkbGU7XFxuICBmaWxsOiB3aGl0ZTtcXG59XFxuLm1vZGFsIC50b3RhbC1kYW1hZ2UtbGFiZWwge1xcbiAgZm9udC1zaXplOiAzcHg7XFxuICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xcbiAgZmlsbDogdmFyKC0tZGFyay1nb2xkKTtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1tYWluLXN0YXRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1pdGVtLWJ1aWxkcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwYmY7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIG1heC1oZWlnaHQ6IDE3LjVyZW07XFxufVxcbi5tb2RhbCAuZGFtYWdlLXN0YXRzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1vZGFsIC5kYW1hZ2UtaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWF4LWhlaWdodDogOTIlO1xcbiAgaGVpZ2h0OiA5MiU7XFxufVxcbi5tb2RhbCAuZGFtYWdlLXR5cGUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcbi5tb2RhbCAuZGFtYWdlLXN0YXRzIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcbi5tb2RhbCAjcGh5c2ljYWwtZGFtYWdlLWxhYmVsIHtcXG4gIGNvbG9yOiAjZmY1OTY0O1xcbn1cXG4ubW9kYWwgI21hZ2ljLWRhbWFnZS1sYWJlbCB7XFxuICBjb2xvcjogIzM1YTdmZjtcXG59XFxuLm1vZGFsICN0cnVlLWRhbWFnZS1sYWJlbCB7XFxuICBjb2xvcjogI2ZmZTc0YztcXG59XFxuLm1vZGFsIC5pdGVtLWRldGFpbHMtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBiZjtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjA7XFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB3aWR0aDogNDAlO1xcbiAgcmlnaHQ6IDFlbTtcXG4gIG1hcmdpbi1ib3R0b206IDMuNWVtO1xcbn1cXG4ubW9kYWwgLml0ZW0tbmFtZSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4ubW9kYWwgLm1haW4taXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbn1cXG4ubW9kYWwgLmNvc3QtbGFiZWwge1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4ubW9kYWwgLmNvbXBvbmVudC1pdGVtcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLm1vZGFsIC5jb21wb25lbnQtaXRlbS1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLm1vZGFsIC5jb3N0LWFtb3VudCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5tb2RhbCAuY29tcG9uZW50LWl0ZW0tY29zdC1sYWJlbCB7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5tb2RhbCAuY29tcG9uZW50LWl0ZW0tYW1vdW50IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLm1vZGFsIC5jb21wb25lbnQtaXRlbS1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwYmY7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLm1vZGFsIC5pdGVtLXNldHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWF4LWhlaWdodDogOTAlO1xcbn1cXG4ubW9kYWwgLml0ZW0tc2V0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBib3JkZXItd2lkdGg6IDJweDtcXG4gIHBhZGRpbmc6IDAuNGVtO1xcbn1cXG4ubW9kYWwgLm1haW4tY29tcG9uZW50LWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwYmY7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjA0MDA4MztcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogMGVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbn1cXG4ubW9kYWwgLml0ZW0taW1nIHtcXG4gIG1heC13aWR0aDogMi43ZW07XFxuICBtYXgtaGVpZ2h0OiAyLjdlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwO1xcbn1cXG4ubW9kYWwgLmNvbXBvbmVudC1pdGVtLWltZyB7XFxuICBtYXgtd2lkdGg6IDEuOGVtO1xcbiAgbWF4LWhlaWdodDogMS44ZW07XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tbWF0Y2h1cHMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMGJmO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC42ZW07XFxuICBsaW5lLWhlaWdodDogMS40O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBtYXgtaGVpZ2h0OiAyNS4ycmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwIDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcbi5tb2RhbCAubWF0Y2h1cHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgbWF4LXdpZHRoOiAyNHJlbTtcXG59XFxuLm1vZGFsIC5tYXRjaHVwLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNjFhO1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBtYXJnaW46IGF1dG8gMC41ZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxufVxcbi5tb2RhbCAubWF0Y2h1cC1pbmZvOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE2MWFjOTtcXG59XFxuLm1vZGFsIC5tYXRjaHVwLXN0YXRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgXFxcIkFwcGxlIFNEIEdvdGhpYyBOZW9cXFwiLCBBcHBsZUdvdGhpYywgRG90dW0sIEFyaWFsLCBUYWhvbWE7XFxufVxcbi5tb2RhbCAuZW5lbXktY2hhbXBpb24taW1nIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG1heC1oZWlnaHQ6IDNlbTtcXG4gIG1heC13aWR0aDogM2VtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcbi5tb2RhbCAud2lucmF0ZS1hZ2FpbnN0LXBlcmNlbnRhZ2UuYmx1ZSB7XFxuICBjb2xvcjogIzM1YTdmZjtcXG59XFxuLm1vZGFsIC53aW5yYXRlLWFnYWluc3QtcGVyY2VudGFnZS5yZWQge1xcbiAgY29sb3I6ICNmZjU5NjQ7XFxufVxcbi5tb2RhbCAjc2tpbnMtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXgtd2lkdGg6IDc1JTtcXG4gIG1pbi1oZWlnaHQ6IDQ5cmVtO1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWluLWhlaWdodDogMDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWF4LXdpZHRoOiA5OSU7XFxuICB3aWR0aDogOTklO1xcbn1cXG4ubW9kYWwgI3NraW5zLWNvbnRhaW5lciAubmF2aWdhdGlvbi1iYXIge1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IHZhcigtLWRhcmstZ29sZCk7XFxufVxcbi5tb2RhbCAjc2tpbnMtY29udGFpbmVyIC5tb2RhbC1oZWFkZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuLm1vZGFsIC5za2luLWltYWdlLWNvbnRhaW5lciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLm1vZGFsIC5za2luLWltYWdlLWNvbnRhaW5lci5zaG93biB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLm1vZGFsIC5za2luLWltYWdlIHtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm1vZGFsIC5za2luLW5hbWUge1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcbi5tb2RhbCAjc2tpbnMtY29udGFpbmVyIC5jaGFtcGlvbi1oZWFkaW5nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1vZGFsIC5pbWctc2Nyb2xsLWFycm93IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcbi5tb2RhbCAuaW1nLXNjcm9sbC1hcnJvdzpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDExMjBweCkge1xcbiAgLm1vZGFsIC5jb21wb25lbnQtaXRlbS1pbWcge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLm1vZGFsIC5pdGVtLXNldHMtY29udGFpbmVyIHtcXG4gICAgbWluLWhlaWdodDogODAlO1xcbiAgfVxcbiAgLm1vZGFsIC5pdGVtLWRldGFpbHMtY29udGFpbmVyIHtcXG4gICAgbWluLXdpZHRoOiA3MCU7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjUwcHgpIHtcXG4gIC5tb2RhbCAuaXRlbS1pbWcge1xcbiAgICBtYXgtaGVpZ2h0OiAyLjJyZW07XFxuICAgIG1heC13aWR0aDogMi4ycmVtO1xcbiAgfVxcbiAgLm1vZGFsIC5jaGFtcGlvbi1kZXRhaWxzIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgfVxcbiAgLm1vZGFsIC5hYmlsaXRpZXMtY29udGFpbmVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgbWF4LXdpZHRoOiAzMXJlbTtcXG4gIH1cXG4gIC5tb2RhbCAubG9yZS1jb250YWluZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuICAubW9kYWwgI21haW4tY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiA3NnJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICAubW9kYWwgLml0ZW0tc2V0cy1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcbiAgLm1vZGFsIC5pdGVtLXNldC1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLm1vZGFsIC5tYXRjaHVwcyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAubW9kYWwgLmNoYW1waW9uLW1hdGNodXBzIHtcXG4gICAgbWF4LWhlaWdodDogMjguMnJlbTtcXG4gIH1cXG4gIC5tb2RhbCAubWF0Y2h1cC1pbmZvIHtcXG4gICAgbWFyZ2luOiAwLjVlbSBhdXRvO1xcbiAgfVxcbiAgLm1vZGFsICNtYWluLWNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG4gIC5tb2RhbCAjc3RhdHMtY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiA2M3JlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDg0MHB4KSB7XFxuICAubW9kYWwgLmRhbWFnZS1pbmZvIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gIH1cXG4gIC5tb2RhbCAuZ2FtZXMtcGxheWVkLWFnYWluc3Qge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLm1vZGFsIC5kYW1hZ2Utc3RhdHMtY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDU2MHB4KSB7XFxuICAubW9kYWwgLmNoYW1waW9uLW1haW4tc3RhdHMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLm1vZGFsIC5pdGVtLXNldC1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcbiAgLm1vZGFsIC5pdGVtLXNldHMtY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5tb2RhbCAuY2hhbXBpb24tZGFtYWdlLWNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIC5tb2RhbCAuZGFtYWdlLXN0YXRzLWluZm8ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLm1vZGFsIC5kYW1hZ2UtaW5mbyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgfVxcbiAgLm1vZGFsIC5kYW1hZ2UtdHlwZS1jb250YWluZXIge1xcbiAgICBtYXJnaW46IDAuMmVtIGF1dG87XFxuICB9XFxuICAubW9kYWwgLmNpcmN1bGFyLWNoYXJ0IHtcXG4gICAgbWF4LWhlaWdodDogMTk1cHg7XFxuICAgIG1heC13aWR0aDogODAlO1xcbiAgfVxcbiAgLm1vZGFsIC5kYW1hZ2Utc3RhdHMtY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5tb2RhbCAuY2hhbXBpb24tcm9sZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcXG4gIH1cXG4gIC5tb2RhbCAuY2hhbXBpb24tcmVzb3VyY2Uge1xcbiAgICBtYXJnaW4tbGVmdDogMC41ZW07XFxuICAgIG1hcmdpbi1yaWdodDogMC41ZW07XFxuICB9XFxuICAubW9kYWwgLmNoYW1waW9uLXJvbGVzIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgfVxcbiAgLm1vZGFsIC5zcGVsbC1pbWcge1xcbiAgICBoZWlnaHQ6IDIuOGVtO1xcbiAgICB3aWR0aDogMi44ZW07XFxuICAgIG1hcmdpbjogYXV0bztcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDQxNHB4KSB7XFxuICAubW9kYWwgLmNoYW1waW9uLXN0YXRzLW92ZXJ2aWV3IHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBtaW4td2lkdGg6IDE3cmVtO1xcbiAgfVxcbiAgLm1vZGFsIC5jaGFtcGlvbi1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcbiAgLm1vZGFsIC5tb2RhbC1uYXYtbGlua3Mge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICB9XFxuICAubW9kYWwgLmNsb3NlLW1vZGFsLWJ0bi13cmFwcGVyIHtcXG4gICAgbGVmdDogMC43ZW07XFxuICB9XFxuICAubW9kYWwgLmNsb3NlLW1vZGFsLWJ0biB7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMzAwcHgpIHtcXG4gIC5tb2RhbCAjc2tpbnMtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXgtd2lkdGg6IDcwJTtcXG4gICAgbWluLWhlaWdodDogYXV0bztcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDE5NTBweCkge1xcbiAgLm1vZGFsICNza2lucy1jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDUwJTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlc2hlZXRzL21vZGFscy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBOERBO0VBQ0Usa0RBQUE7QUEzREY7O0FBOERBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQ0FBQTtBQTNERjtBQTZERTtFQWhDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsNEVBQUE7RUFDQSxrQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBc0JFLGNBQUE7QUEvQ0o7QUFrREU7RUFqRkEsMkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUEwRUUsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUF2Q0o7QUEwQ0U7RUFDRSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUF4Q0o7QUEyQ0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUF6Q0o7QUE0Q0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQTFDSjtBQTZDRTtFQUNFLHdCQUFBO0FBM0NKO0FBOENFO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUE1Q0o7QUErQ0U7RUFDRSxlQUFBO0VBakZGLGlCQUFBO0VBQ0Esb0JBQUE7QUFxQ0Y7QUErQ0U7RUFDRSx1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RUE2QkU7SUFDRSxhQUFBO0VBM0JKO0VBOEJFO0lBQ0UsbUJBQUE7RUE1Qko7QUFDRjtBQStCRTtFQUNFO0lBQ0Usc0JBQUE7RUE3Qko7RUFnQ0U7SUFDRSxtQkFBQTtFQTlCSjtFQWlDRTtJQUNFLHNCQUFBO0VBL0JKO0VBa0NFO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VBaENKO0VBbUNFO0lBQ0Usc0JBQUE7RUFqQ0o7RUFvQ0U7SUFDRSxtQkFBQTtJQUNBLHVCQUFBO0VBbENKO0VBcUNFO0lBQ0Usa0JBQUE7RUFuQ0o7RUFzQ0U7SUFDRSxpQkFBQTtJQUNBLGNBQUE7RUFwQ0o7RUF1Q0U7SUFDRSxzQkFBQTtFQXJDSjtFQXdDRTtJQUNFLGtCQUFBO0lBQ0EsbUJBQUE7RUF0Q0o7RUF5Q0U7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0VBdkNKO0VBMENFO0lBQ0UsZUFBQTtFQXhDSjtFQTJDRTtJQUNFLGFBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtFQXpDSjtBQUNGO0FBNENFO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUExQ0o7RUE2Q0U7SUFDRSxlQUFBO0VBM0NKO0VBOENFO0lBQ0UsZUFBQTtFQTVDSjtFQStDRTtJQUNFLFdBQUE7RUE3Q0o7RUFnREU7SUFDRSxnQkFBQTtFQTlDSjtBQUNGO0FBaURFO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtFQS9DSjtBQUNGO0FBa0RFO0VBQ0U7SUFDRSxjQUFBO0VBaERKO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbjpyb290IHtcXG4gIC0tcmFzaW4tYmxhY2s6ICMxZDFlMmM7XFxuICAtLWRhcmstZ29sZDogIzkyNzU0MztcXG4gIC0tbGlnaHQtZ29sZDogI2M3YWI2ZTtcXG59XFxuXFxuQG1peGluIGNvbnRhaW5lckJhY2tncm91bmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMGJmO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC42ZW07XFxuICBsaW5lLWhlaWdodDogMS40O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxufVxcblxcbkBtaXhpbiBzdWJIZWFkaW5nU3R5bGUge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMC40ZW07XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbkBtaXhpbiBpY29uU2l6ZSB7XFxuICBoZWlnaHQ6IDMuNXJlbTtcXG4gIHdpZHRoOiAzLjVyZW07XFxufVxcblxcbkBtaXhpbiBpY29uVGV4dCB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG5AbWl4aW4gaWNvbkNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbn1cXG5cXG5AbWl4aW4gc21hbGxNYXJnaW4ge1xcbiAgbWFyZ2luLXRvcDogMC41ZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG59XFxuXFxuQG1peGluIG1vZGFsQ29udGVudENvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nOiAwO1xcbiAgbWF4LXdpZHRoOiA3NSU7XFxuICBtaW4taGVpZ2h0OiA0OXJlbTtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICBwYWRkaW5nOiAycmVtIDA7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjQpO1xcblxcbiAgI21haW4tY29udGFpbmVyIHtcXG4gICAgQGluY2x1ZGUgbW9kYWxDb250ZW50Q29udGFpbmVyKCk7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcblxcbiAgLm1vZGFsLWhlYWRlciB7XFxuICAgIEBpbmNsdWRlIGNvbnRhaW5lckJhY2tncm91bmQoKTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5uYXZpZ2F0aW9uLWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuY2xvc2UtbW9kYWwtYnRuLXdyYXBwZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDEuMmVtO1xcbiAgfVxcblxcbiAgLmNsb3NlLW1vZGFsLWJ0biB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZm9udC1zaXplOiAxLjZlbTtcXG4gIH0gIFxcblxcbiAgLmNsb3NlLW1vZGFsLWJ0bjpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gIH1cXG5cXG4gIC5tb2RhbC1uYXYtbGlua3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5tb2RhbC1uYXYtbGluayB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgQGluY2x1ZGUgc21hbGxNYXJnaW4oKTtcXG4gIH1cXG5cXG4gIC5tb2RhbC1uYXYtbGluazpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLWhlYWRpbmcge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tbmFtZSB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi10aXRsZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBAaW5jbHVkZSBzbWFsbE1hcmdpbigpO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXJvbGVzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tcm9sZSB7XFxuICAgIEBpbmNsdWRlIGljb25Db250YWluZXIoKTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1yZXNvdXJjZSB7XFxuICAgIEBpbmNsdWRlIGljb25Db250YWluZXIoKTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1yb2xlLWltYWdlIHtcXG4gICAgQGluY2x1ZGUgaWNvblNpemUoKTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1yZXNvdXJjZS1pbWFnZSB7XFxuICAgIEBpbmNsdWRlIGljb25TaXplKCk7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tcm9sZS1uYW1lIHtcXG4gICAgQGluY2x1ZGUgaWNvblRleHQoKTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1yZXNvdXJjZS1uYW1lIHtcXG4gICAgQGluY2x1ZGUgaWNvblRleHQoKTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1tYWluLWluZm8ge1xcbiAgICBwYWRkaW5nOiAxLjhyZW07XFxuICAgIG1heC13aWR0aDogMzRyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogbGFzdCBiYXNlbGluZTtcXG4gIH1cXG5cXG4gIEAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRldG9wIHtcXG4gICAgZnJvbSB7XFxuICAgICAgdG9wOiAtMzAwcHg7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBrZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XFxuICAgIGZyb20ge1xcbiAgICAgIHRvcDogLTMwMHB4O1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuICB9XFxuXFxuICAubG9yZS1jb250YWluZXIge1xcbiAgICBAaW5jbHVkZSBjb250YWluZXJCYWNrZ3JvdW5kKCk7XFxuICB9XFxuXFxuICAuc3ViaGVhZGluZyB7XFxuICAgIEBpbmNsdWRlIHN1YkhlYWRpbmdTdHlsZSgpO1xcbiAgfVxcblxcbiAgLmFiaWxpdGllcy1jb250YWluZXIge1xcbiAgICBAaW5jbHVkZSBjb250YWluZXJCYWNrZ3JvdW5kKCk7XFxuICAgIHdpZHRoOiAyOGVtO1xcbiAgfVxcblxcbiAgLmFiaWxpdGllcy1oZWFkaW5nIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmFiaWxpdHktaW1ncyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB9XFxuXFxuICAuYWJpbGl0eS1kZXNjcmlwdGlvbiB7XFxuICAgIEBpbmNsdWRlIHNtYWxsTWFyZ2luKCk7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tZGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLWV4dHJhLWluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmFiaWxpdHktaW5mbyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAuYWJpbGl0eS1pbmZvLmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAuc3BlbGwtaW1nIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW46IDAgMC41cmVtO1xcbiAgICBoZWlnaHQ6IDMuM3JlbTtcXG4gICAgd2lkdGg6IDMuM3JlbTtcXG4gIH1cXG5cXG4gIC5zcGVsbC1pbWcuY2xpY2tlZCB7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gICAgYm9yZGVyLXdpZHRoOiA0cHg7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tdGlwcy1zZWN0aW9uIHtcXG4gICAgQGluY2x1ZGUgY29udGFpbmVyQmFja2dyb3VuZCgpO1xcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDM0cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tdGlwcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAuY2hhbXBpb24tdGlwIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgfVxcblxcbiAgI3N0YXRzLWNvbnRhaW5lciB7XFxuICAgIEBpbmNsdWRlIG1vZGFsQ29udGVudENvbnRhaW5lcigpO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXN0YXRzLW92ZXJ2aWV3IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIEBpbmNsdWRlIHNtYWxsTWFyZ2luKCk7XFxuICAgIG1heC13aWR0aDogMjVyZW07XFxuICAgIG1pbi13aWR0aDogMjByZW07XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gIH1cXG5cXG4gIC53aW4tcmF0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAucGljay1yYXRlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5sYW5lLWluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLnBpY2stcmF0ZS12YWx1ZSB7XFxuICAgIG1hcmdpbi10b3A6IDAuNGVtO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICB9XFxuXFxuICAud2luLXJhdGUtdmFsdWUge1xcbiAgICBtYXJnaW4tdG9wOiAwLjRlbTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgfVxcblxcbiAgLmxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLWRhbWFnZS1jb250YWluZXIge1xcbiAgICBAaW5jbHVkZSBjb250YWluZXJCYWNrZ3JvdW5kKCk7XFxuICAgIG1heC1oZWlnaHQ6IDE3LjVyZW07XFxuICB9XFxuXFxuICAuZGFtYWdlLWhlYWRpbmcge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuY2lyY3VsYXItY2hhcnQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDgwJTtcXG4gICAgbWF4LWhlaWdodDogMTRlbTtcXG4gIH1cXG5cXG4gIC5jaXJjbGUge1xcbiAgICBmaWxsOiBub25lO1xcbiAgICBzdHJva2Utd2lkdGg6IDIuMjtcXG4gICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xcbiAgICBhbmltYXRpb246IHByb2dyZXNzIDFzIGVhc2Utb3V0IGZvcndhcmRzO1xcbiAgfVxcblxcbiAgI21hZ2ljLWRhbWFnZS1zdHJva2Uge1xcbiAgICBzdHJva2U6ICMzNWE3ZmY7XFxuICB9XFxuXFxuICAjcGh5c2ljYWwtZGFtYWdlLXN0cm9rZSB7XFxuICAgIHN0cm9rZTogI2ZmNTk2NDtcXG4gIH1cXG5cXG4gICN0cnVlLWRhbWFnZS1zdHJva2Uge1xcbiAgICBzdHJva2U6ICNmZmU3NGM7XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIHByb2dyZXNzIHtcXG4gICAgMCUge1xcbiAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDAgMTAwO1xcbiAgICB9XFxuICB9XFxuXFxuICAudG90YWwtZGFtYWdlLXRleHQge1xcbiAgICBmb250LXNpemU6IDRweDtcXG4gICAgdGV4dC1hbmNob3I6IG1pZGRsZTtcXG4gICAgZmlsbDogd2hpdGU7XFxuICB9XFxuXFxuICAudG90YWwtZGFtYWdlLWxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAzcHg7XFxuICAgIHRleHQtYW5jaG9yOiBtaWRkbGU7XFxuICAgIGZpbGw6IHZhcigtLWRhcmstZ29sZCk7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tbWFpbi1zdGF0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLWl0ZW0tYnVpbGRzIHtcXG4gICAgQGluY2x1ZGUgY29udGFpbmVyQmFja2dyb3VuZCgpO1xcbiAgICBtYXgtaGVpZ2h0OiAxNy41cmVtO1xcbiAgfVxcblxcbiAgLmRhbWFnZS1zdGF0cy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5kYW1hZ2UtaW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1heC1oZWlnaHQ6IDkyJTtcXG4gICAgaGVpZ2h0OiA5MiU7XFxuICB9XFxuXFxuICAuZGFtYWdlLXR5cGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICB9XFxuXFxuICAuZGFtYWdlLXN0YXRzIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIH1cXG5cXG4gICNwaHlzaWNhbC1kYW1hZ2UtbGFiZWwge1xcbiAgICBjb2xvcjogI2ZmNTk2NDtcXG4gIH1cXG5cXG4gICNtYWdpYy1kYW1hZ2UtbGFiZWwge1xcbiAgICBjb2xvcjogIzM1YTdmZjtcXG4gIH1cXG5cXG4gICN0cnVlLWRhbWFnZS1sYWJlbCB7XFxuICAgIGNvbG9yOiAjZmZlNzRjO1xcbiAgfVxcblxcbiAgLml0ZW0tZGV0YWlscy1jb250YWluZXIge1xcbiAgICBAaW5jbHVkZSBjb250YWluZXJCYWNrZ3JvdW5kKCk7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICByaWdodDogMWVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzLjVlbTtcXG4gIH1cXG5cXG4gIC5pdGVtLW5hbWUge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICB9XFxuXFxuICAubWFpbi1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgfVxcblxcbiAgLmNvc3QtbGFiZWwge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gIH1cXG5cXG4gIC5jb21wb25lbnQtaXRlbXMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG5cXG4gIC5jb21wb25lbnQtaXRlbS1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgfVxcblxcbiAgLmNvc3QtYW1vdW50IHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgfVxcblxcbiAgLmNvbXBvbmVudC1pdGVtLWNvc3QtbGFiZWwge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gIH1cXG5cXG4gIC5jb21wb25lbnQtaXRlbS1hbW91bnQge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICB9XFxuXFxuICAuY29tcG9uZW50LWl0ZW0tZGV0YWlscy1jb250YWluZXIge1xcbiAgICBAaW5jbHVkZSBjb250YWluZXJCYWNrZ3JvdW5kKCk7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLml0ZW0tc2V0cy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWF4LWhlaWdodDogOTAlO1xcbiAgfVxcblxcbiAgLml0ZW0tc2V0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICAgIHBhZGRpbmc6IDAuNGVtO1xcbiAgfVxcblxcbiAgLm1haW4tY29tcG9uZW50LWNvbnRhaW5lciB7XFxuICAgIEBpbmNsdWRlIGNvbnRhaW5lckJhY2tncm91bmQoKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2MDQwMDgzO1xcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiAwZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICB9XFxuXFxuICAuaXRlbS1pbWcge1xcbiAgICBtYXgtd2lkdGg6IDIuN2VtO1xcbiAgICBtYXgtaGVpZ2h0OiAyLjdlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgICAvL3BhZGRpbmc6IDFlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDA7XFxuICB9XFxuXFxuICAuY29tcG9uZW50LWl0ZW0taW1nIHtcXG4gICAgbWF4LXdpZHRoOiAxLjhlbTtcXG4gICAgbWF4LWhlaWdodDogMS44ZW07XFxuICB9XFxuXFxuICAuY2hhbXBpb24tbWF0Y2h1cHMge1xcbiAgICBAaW5jbHVkZSBjb250YWluZXJCYWNrZ3JvdW5kKCk7XFxuICAgIG1heC1oZWlnaHQ6IDI1LjJyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwIDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgfVxcblxcbiAgLm1hdGNodXBzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIG1heC13aWR0aDogMjRyZW07XFxuICB9XFxuXFxuICAubWF0Y2h1cC1pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTYxYTtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIG1hcmdpbjogYXV0byAwLjVlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgfVxcblxcbiAgLm1hdGNodXAtaW5mbzpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzE2MWFjOTtcXG4gIH1cXG5cXG4gIC5tYXRjaHVwLXN0YXRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBcXFwiQXBwbGUgU0QgR290aGljIE5lb1xcXCIsIEFwcGxlR290aGljLFxcbiAgICAgIERvdHVtLCBBcmlhbCwgVGFob21hO1xcbiAgfVxcblxcbiAgLmVuZW15LWNoYW1waW9uLWltZyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgbWF4LWhlaWdodDogM2VtO1xcbiAgICBtYXgtd2lkdGg6IDNlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxuICB9XFxuXFxuICAud2lucmF0ZS1hZ2FpbnN0LXBlcmNlbnRhZ2UuYmx1ZSB7XFxuICAgIGNvbG9yOiAjMzVhN2ZmO1xcbiAgfVxcblxcbiAgLndpbnJhdGUtYWdhaW5zdC1wZXJjZW50YWdlLnJlZCB7XFxuICAgIGNvbG9yOiAjZmY1OTY0O1xcbiAgfVxcblxcbiAgI3NraW5zLWNvbnRhaW5lciB7XFxuICAgIEBpbmNsdWRlIG1vZGFsQ29udGVudENvbnRhaW5lcigpO1xcbiAgICBkaXNwbGF5Om5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWluLWhlaWdodDogMDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIG1heC13aWR0aDogOTklO1xcbiAgICB3aWR0aDogOTklO1xcblxcbiAgICAubmF2aWdhdGlvbi1iYXIge1xcbiAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgICB9XFxuICB9XFxuXFxuICAjc2tpbnMtY29udGFpbmVyIC5tb2RhbC1oZWFkZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgfVxcblxcbiAgLnNraW4taW1hZ2UtY29udGFpbmVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLnNraW4taW1hZ2UtY29udGFpbmVyLnNob3duIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAuc2tpbi1pbWFnZSB7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuc2tpbi1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICB9XFxuXFxuICAjc2tpbnMtY29udGFpbmVyIC5jaGFtcGlvbi1oZWFkaW5nIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuaW1nLXNjcm9sbC1hcnJvdyB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gIH1cXG5cXG4gIC5pbWctc2Nyb2xsLWFycm93OmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICB9XFxuXFxuICBAbWVkaWEgKG1heC13aWR0aDogMTEyMHB4KSB7XFxuICAgIC5jb21wb25lbnQtaXRlbS1pbWcge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLml0ZW0tc2V0cy1jb250YWluZXIge1xcbiAgICAgIG1pbi1oZWlnaHQ6IDgwJTtcXG4gICAgfVxcblxcbiAgICAuaXRlbS1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgICAgbWluLXdpZHRoOiA3MCU7XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjUwcHgpIHtcXG4gICAgLml0ZW0taW1nIHtcXG4gICAgICBtYXgtaGVpZ2h0OiAyLjJyZW07XFxuICAgICAgbWF4LXdpZHRoOiAyLjJyZW07XFxuICAgIH1cXG5cXG4gICAgLmNoYW1waW9uLWRldGFpbHMge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gICAgfVxcblxcbiAgICAuYWJpbGl0aWVzLWNvbnRhaW5lciB7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgIG1heC13aWR0aDogMzFyZW07XFxuICAgIH1cXG5cXG4gICAgLmxvcmUtY29udGFpbmVyIHtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgI21haW4tY29udGFpbmVyIHtcXG4gICAgICBoZWlnaHQ6IDc2cmVtO1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gICAgLml0ZW0tc2V0cy1jb250YWluZXIge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIH1cXG5cXG4gICAgLml0ZW0tc2V0LWNvbnRhaW5lciB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAubWF0Y2h1cHMge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgLmNoYW1waW9uLW1hdGNodXBzIHtcXG4gICAgICBtYXgtaGVpZ2h0OiAyOC4ycmVtO1xcbiAgICB9XFxuXFxuICAgIC5tYXRjaHVwLWluZm8ge1xcbiAgICAgIG1hcmdpbjogMC41ZW0gYXV0bztcXG4gICAgfVxcblxcbiAgICAjbWFpbi1jb250YWluZXIge1xcbiAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAjc3RhdHMtY29udGFpbmVyIHtcXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgICAgbWluLWhlaWdodDogNjNyZW07XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4NDBweCkge1xcbiAgICAuZGFtYWdlLWluZm8ge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICB9XFxuXFxuICAgIC5nYW1lcy1wbGF5ZWQtYWdhaW5zdCB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAuZGFtYWdlLXN0YXRzLWNvbnRhaW5lciB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgfVxcbiAgfVxcblxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU2MHB4KSB7XFxuICAgIC5jaGFtcGlvbi1tYWluLXN0YXRzIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5pdGVtLXNldC1jb250YWluZXIge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIH1cXG5cXG4gICAgLml0ZW0tc2V0cy1jb250YWluZXIge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgLmNoYW1waW9uLWRhbWFnZS1jb250YWluZXIge1xcbiAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5kYW1hZ2Utc3RhdHMtaW5mbyB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAuZGFtYWdlLWluZm8ge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIH1cXG5cXG4gICAgLmRhbWFnZS10eXBlLWNvbnRhaW5lciB7XFxuICAgICAgbWFyZ2luOiAwLjJlbSBhdXRvO1xcbiAgICB9XFxuXFxuICAgIC5jaXJjdWxhci1jaGFydCB7XFxuICAgICAgbWF4LWhlaWdodDogMTk1cHg7XFxuICAgICAgbWF4LXdpZHRoOiA4MCU7XFxuICAgIH1cXG5cXG4gICAgLmRhbWFnZS1zdGF0cy1jb250YWluZXIge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgLmNoYW1waW9uLXJvbGUge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xcbiAgICB9XFxuXFxuICAgIC5jaGFtcGlvbi1yZXNvdXJjZSB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xcbiAgICAgIG1hcmdpbi1yaWdodDogMC41ZW07XFxuICAgIH1cXG5cXG4gICAgLmNoYW1waW9uLXJvbGVzIHtcXG4gICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIH1cXG5cXG4gICAgLnNwZWxsLWltZyB7XFxuICAgICAgaGVpZ2h0OiAyLjhlbTtcXG4gICAgICB3aWR0aDogMi44ZW07XFxuICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgKG1heC13aWR0aDogNDE0cHgpIHtcXG4gICAgLmNoYW1waW9uLXN0YXRzLW92ZXJ2aWV3IHtcXG4gICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgbWluLXdpZHRoOiAxN3JlbTtcXG4gICAgfVxcblxcbiAgICAuY2hhbXBpb24tbmFtZSB7XFxuICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB9XFxuXFxuICAgIC5tb2RhbC1uYXYtbGlua3Mge1xcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgfVxcblxcbiAgICAuY2xvc2UtbW9kYWwtYnRuLXdyYXBwZXIge1xcbiAgICAgIGxlZnQ6IDAuN2VtO1xcbiAgICB9XFxuXFxuICAgIC5jbG9zZS1tb2RhbC1idG4ge1xcbiAgICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMzAwcHgpIHtcXG4gICAgI3NraW5zLWNvbnRhaW5lciB7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIG1heC13aWR0aDogNzAlO1xcbiAgICAgIG1pbi1oZWlnaHQ6IGF1dG87XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxOTUwcHgpIHtcXG4gICAgI3NraW5zLWNvbnRhaW5lciB7XFxuICAgICAgbWF4LXdpZHRoOiA1MCU7XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIGRlZmluZShJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgZGVmaW5lKEdwLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGFzeW5jSXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgZGVmaW5lKEdwLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIGRlZmluZShHcCwgXCJ0b1N0cmluZ1wiLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgaW4gbW9kZXJuIGVuZ2luZXNcbiAgLy8gd2UgY2FuIGV4cGxpY2l0bHkgYWNjZXNzIGdsb2JhbFRoaXMuIEluIG9sZGVyIGVuZ2luZXMgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xuICB9IGVsc2Uge1xuICAgIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG4gIH1cbn1cbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2hhbXBpb25zLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jaGFtcGlvbnMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9kYWxzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tb2RhbHMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vMTYxNzc3OTEyM19vcmlnaW5hbC5qcGdcIjogXCIuL3NyYy9pbWFnZXMvMTYxNzc3OTEyM19vcmlnaW5hbC5qcGdcIixcblx0XCIuL0Fzc2Fzc2luLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9Bc3Nhc3Npbi5wbmdcIixcblx0XCIuL0Jsb29kIFdlbGwucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL0Jsb29kIFdlbGwucG5nXCIsXG5cdFwiLi9Cb3R0b20ucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL0JvdHRvbS5wbmdcIixcblx0XCIuL0NvbnRyb2xsZXIucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL0NvbnRyb2xsZXIucG5nXCIsXG5cdFwiLi9Db3VyYWdlLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9Db3VyYWdlLnBuZ1wiLFxuXHRcIi4vQ3JpbXNvbiBSdXNoLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9Dcmltc29uIFJ1c2gucG5nXCIsXG5cdFwiLi9FbmVyZ3kucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL0VuZXJneS5wbmdcIixcblx0XCIuL0ZpZ2h0ZXIucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL0ZpZ2h0ZXIucG5nXCIsXG5cdFwiLi9GbG93LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9GbG93LnBuZ1wiLFxuXHRcIi4vRnVyeS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvRnVyeS5wbmdcIixcblx0XCIuL0dyaXQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL0dyaXQucG5nXCIsXG5cdFwiLi9IZWF0LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9IZWF0LnBuZ1wiLFxuXHRcIi4vSnVuZ2xlLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9KdW5nbGUucG5nXCIsXG5cdFwiLi9NYWdlLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9NYWdlLnBuZ1wiLFxuXHRcIi4vTWFuYS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvTWFuYS5wbmdcIixcblx0XCIuL01hbmFsZXNzLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9NYW5hbGVzcy5wbmdcIixcblx0XCIuL01hcmtzbWFuLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9NYXJrc21hbi5wbmdcIixcblx0XCIuL01lbGVlLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9NZWxlZS5wbmdcIixcblx0XCIuL01pZGRsZS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvTWlkZGxlLnBuZ1wiLFxuXHRcIi4vUmFnZS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvUmFnZS5wbmdcIixcblx0XCIuL1JhbmdlZC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvUmFuZ2VkLnBuZ1wiLFxuXHRcIi4vU3BlY2lhbGlzdC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvU3BlY2lhbGlzdC5wbmdcIixcblx0XCIuL1N1cHBvcnQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL1N1cHBvcnQucG5nXCIsXG5cdFwiLi9UYW5rLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9UYW5rLnBuZ1wiLFxuXHRcIi4vVG9wLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9Ub3AucG5nXCIsXG5cdFwiLi9VdGlsaXR5LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9VdGlsaXR5LnBuZ1wiLFxuXHRcIi4vZmlyZUJhY2tncm91bmQuanBnXCI6IFwiLi9zcmMvaW1hZ2VzL2ZpcmVCYWNrZ3JvdW5kLmpwZ1wiLFxuXHRcIi4vamlueEJhY2tncm91bmQuanBlZ1wiOiBcIi4vc3JjL2ltYWdlcy9qaW54QmFja2dyb3VuZC5qcGVnXCIsXG5cdFwiLi90cGFTa2lucy5qcGdcIjogXCIuL3NyYy9pbWFnZXMvdHBhU2tpbnMuanBnXCIsXG5cdFwiLi90dXRvcmlhbF9tb2R1bGVfMV9iYWNrZ3JvdW5kLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy90dXRvcmlhbF9tb2R1bGVfMV9iYWNrZ3JvdW5kLnBuZ1wiLFxuXHRcIi4vdHdpdGNoQmFja2dyb3VuZC5qcGdcIjogXCIuL3NyYy9pbWFnZXMvdHdpdGNoQmFja2dyb3VuZC5qcGdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1hZ2VzIHN5bmMgXFxcXC4ocG5nfGpwZT9nfHN2ZykkXCI7IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn0iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGVzaGVldHMvbW9kYWxzLnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlc2hlZXRzL2NoYW1waW9ucy5zY3NzJztcbi8vIGltcG9ydCB7IGNoYW1waW9uRGV0YWlsc01vZGFsIH0gZnJvbSAnLi90ZW1wbGF0ZXMvY2hhbXBpb25EZXRhaWxzTW9kYWwnO1xuLy8gaW1wb3J0IGNoYW1waW9uU3RhdHNNb2RhbCBmcm9tICcuL3RlbXBsYXRlcy9jaGFtcGlvblN0YXRzTW9kYWwnO1xuLy8gaW1wb3J0IEl0ZW1JbmZvIGZyb20gJy4vY2hhbXBpb25EYXRhL2l0ZW1JbmZvJztcbi8vIGltcG9ydCBnZXRDaGFtcGlvbkRldGFpbHMgZnJvbSAnLi9jaGFtcGlvbkRhdGEvY2hhbXBpb25EZXRhaWxzJztcbi8vIGltcG9ydCBjaGFtcGlvblNraW5zTW9kYWwgZnJvbSAnLi90ZW1wbGF0ZXMvY2hhbXBpb25Ta2luc01vZGFsJztcbi8vIGltcG9ydCBnZXRDaGFtcGlvblN0YXRzIGZyb20gJy4vY2hhbXBpb25EYXRhL2NoYW1waW9uU3RhdHMnO1xuaW1wb3J0IGNoYW1waW9uc1BhZ2UgZnJvbSAnLi90ZW1wbGF0ZXMvY2hhbXBpb25zUGFnZSc7XG5pbXBvcnQgQ2hhbXBpb25zUGFnZUNvbnRyb2xsZXIgZnJvbSAnLi9hcHBDb250cm9sL2NoYW1waW9uc1BhZ2VDb250cm9sbGVyJztcbmltcG9ydCBTZWFyY2hiYXJDb250cm9sbGVyIGZyb20gJy4vYXBwQ29udHJvbC9zZWFyY2hiYXJDb250cm9sbGVyJztcblxuY29uc3QgdGVzdCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLzExLjIyLjEvZGF0YS9lbl9VUy9jaGFtcGlvbi5qc29uJyk7XG4gIGNvbnN0IGFsbENoYW1waW9ucyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAvLyBjb25zdCB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKGFsbENoYW1waW9ucy5kYXRhKTtcbiAgLy8gdmFsdWVzLmZvckVhY2goKHZhbHVlKSA9PiBjb25zb2xlLmxvZyh2YWx1ZS5pbmZvLmRpZmZpY3VsdHkpKTtcbiAgYXdhaXQgY2hhbXBpb25zUGFnZSgpO1xuICBDaGFtcGlvbnNQYWdlQ29udHJvbGxlci5jaGFtcGlvbnNQYWdlTGlzdGVuZXJzKCk7XG4gIFNlYXJjaGJhckNvbnRyb2xsZXIuc2VhcmNoQ29udGFpbmVyTGlzdGVuZXJzKCk7XG4gIC8vIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSgnY2hhbXBpb25zJywgJycsICcvY2hhbXBpb25zJyk7XG59O1xudGVzdCgpO1xuIl0sIm5hbWVzIjpbIkNoYW1waW9uTW9kYWxDb250cm9sbGVyIiwidG9nZ2xlQWN0aXZlQWJpbGl0eSIsImNsaWNrZWRBYmlsaXR5SWQiLCJhYmlsaXR5SW1hZ2VzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWJpbGl0eUluZm9zIiwiZm9yRWFjaCIsImltZyIsImNsYXNzTGlzdCIsInJlbW92ZSIsImluZm8iLCJjbGlja2VkSW1hZ2UiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NOYW1lIiwiYWN0aXZlQWJpbGl0eSIsImNoYW5nZU1vZGFsVGVtcGxhdGUiLCJjbGlja2VkTW9kYWxOYXZMaW5rIiwidGVtcGxhdGVzIiwidGVtcGxhdGUiLCJpZCIsInN1YnN0cmluZyIsImluZGV4T2YiLCJjaG9zZW5UZW1wbGF0ZSIsInN0eWxlIiwiZGlzcGxheSIsImhpZGRlblRlbXBsYXRlIiwiZGlzcGF5SXRlbURldGFpbHMiLCJob3ZlcmVkSXRlbUltYWdlIiwiaXRlbURldGFpbHMiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJoaWRlSXRlbURldGFpbHMiLCJ1bmhvdmVyZWRJdGVtSW1hZ2UiLCJ0b2dnbGVTa2luSW1hZ2VzIiwiYXJyb3dDbGFzc0xpc3QiLCJza2luSW1hZ2VzQ29udGFpbmVyIiwiY3VycmVudFNob3duSW1hZ2UiLCJza2luTmFtZSIsImZpcnN0SW1hZ2UiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImxhc3RJbWFnZSIsImxhc3RFbGVtZW50Q2hpbGQiLCJpbmNsdWRlcyIsInRleHRDb250ZW50IiwicHJldmlvdXNFbGVtZW50U2libGluZyIsImNsZWFyTWFpbk1vZGFsIiwibWFpbkNvbnRhaW5lciIsImNoYW1waW9uTmFtZSIsImNoYW1waW9uVGl0bGUiLCJjaGFtcGlvblJvbGVzIiwiY2hhbXBpb25Mb3JlIiwiYWJpbGl0eURldGFpbHMiLCJjaGFtcGlvblRpcHMiLCJtYWluTW9kYWxIZWFkZXIiLCJlbGVtZW50IiwiY3VycmVudEVsZW1lbnQiLCJjbGVhclN0YXRzTW9kYWwiLCJzdGF0c0NvbnRhaW5lciIsImNoYW1waW9uU3RhdHNPdmVydmlldyIsImFsbGRhbWFnZVN0YXRzIiwiaXRlbVNldHNDb250YWluZXIiLCJiZXN0TWF0Y2h1cHMiLCJ3b3JzdE1hdGNodXBzIiwic3RhdHNNb2RhbEhlYWRlciIsImRhbWFnZVN0YXQiLCJkYW1hZ2VTdGF0RWxlbWVudCIsInN0YXRzTW9kYWxDb250ZW50IiwiY29udGVudCIsImNvbnRlbnRFbGVtZW50IiwiY2xlYXJTa2luc01vZGFsIiwiY2xvc2VDaGFtcGlvbk1vZGFsIiwibW9kYWwiLCJza2luc0NvbnRhaW5lciIsIm1vZGFsQ2xpY2tFdmVudHMiLCJldmVudCIsInRhcmdldCIsImRhc2hJbmRleCIsImFiaWxpdHlJZCIsInNsaWNlIiwiQXJyYXkiLCJmcm9tIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1vZGFsTW91c2VvdmVyRXZlbnRzIiwibW9kYWxNb3VzZW91dEV2ZW50cyIsInJlbGF0ZWRUYXJnZXQiLCJwYXJlbnROb2RlIiwibW9kYWxDaGFuZ2VMaXN0ZW5lcnMiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2V0Q2hhbXBpb25EZXRhaWxzIiwiZ2V0Q2hhbXBpb25TdGF0cyIsImNoYW1waW9uRGV0YWlsc01vZGFsIiwiY2hhbXBpb25TdGF0c01vZGFsIiwiY2hhbXBpb25Ta2luc01vZGFsIiwiQ2hhbXBpb25GaWx0ZXIiLCJTb3J0Q2hhbXBpb25zIiwiZ2V0QWxsQ2hhbXBpb25EZXRhaWxzIiwiZ2V0QWxsQ2hhbXBpb25TdGF0cyIsIkNoYW1waW9uc1BhZ2VDb250cm9sbGVyIiwiZGlzcGxheURyb3Bkb3duT3B0aW9ucyIsImRyb3Bkb3duT3B0aW9ucyIsImFsbERyb3Bkb3duT3B0aW9ucyIsIm9wdGlvbnMiLCJvcHRpb25zU3R5bGUiLCJkcm9wZG93bk9wdGlvbnNTdHlsZSIsImhpZGVEcm9wZG93bk9wdGlvbnMiLCJkcm9wZG93bk9wdGlvbnNUb2dnbGUiLCJkcm9wZG93bkJ0biIsInBhcmVudEVsZW1lbnQiLCJkaXNwbGF5Q2hhbXBpb25Nb2RhbCIsImNoYW1waW9uSWQiLCJjaGFtcGlvbkRldGFpbHMiLCJjaGFtcGlvblN0YXRzIiwic2VsZWN0TGFuZUZpbHRlck9wdGlvbiIsImNsaWNrZWRMYW5lT3B0aW9uIiwiY2hhbXBpb25zU2VjdGlvbiIsImFjdGl2ZUxhbmVPcHRpb24iLCJ2aXNpYmlsaXR5IiwiYWRkIiwiY2hlY2tMYW5lRmlsdGVyT3B0aW9uIiwiYWxsQ2hhbXBpb25TdGF0cyIsImxhbmVOYW1lIiwiZmlsdGVyQnlMYW5lIiwiY2hlY2tTb3J0aW5nT3B0aW9uIiwiYWN0aXZlU29ydGluZ09wdGlvbiIsInNvcnRCeURlZmF1bHRPcmRlciIsInNvcnRDaGFtcGlvbnNCeVdpbnJhdGUiLCJzb3J0Q2hhbXBpb25zQnlQaWNrcmF0ZSIsInNvcnRDaGFtcGlvbnNCeURhbWFnZURvbmUiLCJjaGVja0FjdGl2ZVJvbGVPcHRpb25zIiwiYWxsQ2hhbXBpb25EZXRhaWxzIiwiYWN0aXZlUm9sZU9wdGlvbnMiLCJsZW5ndGgiLCJhY3RpdmVSb2xlcyIsIm1hcCIsImFjdGl2ZVJvbGVPcHRpb24iLCJhY3RpdmVSb2xlIiwiZmlsdGVyQnlSb2xlIiwiY2hlY2tBY3RpdmVEaWZmaWN1bHR5T3B0aW9ucyIsImFjdGl2ZURpZmZpY3VsdHlPcHRpb25zIiwiYWN0aXZlRGlmZmljdWx0aWVzIiwiYWN0aXZlRGlmZmljdWx0eU9wdGlvbiIsImFjdGl2ZURpZmZpY3VsdHkiLCJmaWx0ZXJCeURpZmZpY3VsdHkiLCJzZWxlY3RNdWx0aURyb3Bkb3duT3B0aW9uIiwiZHJvcGRvd25PcHRpb24iLCJkZXNlbGVjdERyb3Bkb3duT3B0aW9uIiwidG9nZ2xlRHJvcGRvd25PcHRpb24iLCJzZWxlY3RTaW5nbGVEcm9wZG93bk9wdGlvbiIsImFjdGl2ZURyb3Bkb3duT3B0aW9uIiwiY2hhbXBpb25zUGFnZUNsaWNrRXZlbnRzIiwiY2hlY2tPcHRpb25zIiwiaGlkZUNoYW1waW9uc1NlY3Rpb24iLCJzaG93Q2hhbXBpb25zU2VjdGlvbiIsInJlbW92ZUNoYW1waW9uc1BhZ2VMaXN0ZW5lciIsImNoYW1waW9uc1BhZ2UiLCJhZGRDaGFtcGlvbnNQYWdlTGlzdGVuZXIiLCJzaG93TG9hZGVyIiwibG9hZGVyIiwiaGlkZUxvYWRlciIsImZpbHRlckFuZFNvcnRDaGFtcGlvbnNTZWN0aW9uIiwid2FpdFRpbWUiLCJzZXRUaW1lb3V0IiwiZGF0YXNldCIsImF1dG9Db21wbGV0ZU5hbWUiLCJmaXJzdENoaWxkIiwiYXV0b0NvbXBsZXRlTmFtZXMiLCJjaGFtcGlvbnNQYWdlTGlzdGVuZXJzIiwiY3JlYXRlQ2hhbXBpb25Db250YWluZXIiLCJyZW5kZXJBbGxDaGFtcGlvbnMiLCJjaGFtcGlvbiIsImNsZWFyQ2hhbXBpb25zU2VjdGlvbiIsInNob3dDaGFtcGlvbiIsImhpZGVDaGFtcGlvbiIsImNsaWNrZWRMYW5lIiwiYWxsQ2hhbXBpb25zIiwicmVzdWx0cyIsInB1c2giLCJQcm9taXNlIiwiYWxsIiwiY2hhbXBpb25MYW5lIiwibGFuZSIsImNoYW1waW9uRWxlbWVudCIsInRvTG93ZXJDYXNlIiwiY2hhbXBpb25FbGVtZW50cyIsInJvbGVNYXRjaEZvdW5kIiwicm9sZSIsInRhZ3MiLCJjaGFtcGlvblJvbGUiLCJjYXRlZ29yaXNlRGlmZmljdWx0eU51bSIsImRpZmZpY3VsdHlOdW0iLCJkaWZmaWN1bHR5TWF0Y2hGb3VuZCIsImRpZmZpY3VsdHkiLCJjaGFtcGlvbkRpZmZpY3VsdHlOdW0iLCJjaGFtcGlvbkRpZmZpY3VsdHkiLCJTZWFyY2hiYXJDb250cm9sbGVyIiwic2hvd0F1dG9Db21wbGV0ZU5hbWVzIiwiaGlkZUF1dG9Db21wbGV0ZU5hbWVzIiwic2VhcmNoYmFyRm9jdXNJbkV2ZW50IiwiZm9jdXMiLCJzZWFyY2hiYXJGb2N1c291dEV2ZW50IiwiY29uc29sZSIsImxvZyIsInNlYXJjaEJhcklucHV0RXZlbnQiLCJpbnB1dFZhbHVlIiwidmFsdWUiLCJuYW1lIiwic2VhcmNoYmFyS2V5ZG93bkV2ZW50cyIsImtleSIsInByZXZlbnREZWZhdWx0IiwiYWN0aXZlRWxlbWVudCIsImdvVG9TdGFydCIsImFjdGlvbiIsIkFycm93VXAiLCJBcnJvd0Rvd24iLCJjaGlsZHJlbiIsInNlYXJjaENvbnRhaW5lckxpc3RlbmVycyIsInNlYXJjaENvbnRhaW5lciIsInZpc2libGl0eSIsInJlY3JlYXRlQ2hhbXBpb25zU2VjdGlvbiIsImNoYW1waW9ucyIsImZpbHRlckNoYW1waW9ucyIsImZpbHRlcmVkQ2hhbXBpb25TdGF0cyIsImZpbHRlciIsImZpbHRlcmVkQ2hhbXBpb25zU29ydGVkIiwic29ydCIsImEiLCJiIiwid2luUmF0ZSIsInBpY2tSYXRlIiwiZGFtYWdlUGVyTWF0Y2giLCJ0b3RhbERhbWFnZSIsImZldGNoQ2hhbXBpb25EZXRhaWxzIiwiZmV0Y2giLCJtb2RlIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImdldENoYW1waW9uUGFzc2l2ZXMiLCJwYXNzaXZlRGF0YSIsInBhc3NpdmUiLCJwYXNzaXZlTmFtZSIsInBhc3NpdmVEZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uIiwicGFzc2l2ZUlkIiwiaW1hZ2UiLCJmdWxsIiwicGFzc2l2ZUltZ1VybCIsImdldENoYW1waW9uU3BlbGxzIiwic3BlbGxzRGF0YSIsInNwZWxscyIsInNwZWxsIiwic3BlbGxPYmplY3QiLCJjb3N0QnVybiIsImNvc3RUeXBlIiwiY29vbGRvd24iLCJjb29sZG93bkJ1cm4iLCJpbWdVcmwiLCJjaGFtcGlvblBhc3NpdmUiLCJ0aXRsZSIsInJlcGxhY2UiLCJ0b1VwcGVyQ2FzZSIsInBhcnR5cGUiLCJhbGx5dGlwcyIsImxvcmUiLCJyb2xlcyIsInNraW5zIiwicmVzb3VyY2UiLCJ0aXBzIiwiZmV0Y2hDaGFtcGlvblN0YXRzIiwidG9GaXhlZCIsImtkYSIsImtkYVJhdGlvIiwiaXRlbVNldHMiLCJpdGVtQ2hvaWNlcyIsImJlc3RNYXRjaFVwcyIsIm1hdGNoVXBzIiwid29yc3RNYXRjaFVwcyIsInZlcnNpb25zUmVzcG9uc2UiLCJ2ZXJzaW9ucyIsImxhdGVzdFZlcnNpb24iLCJjaGFtcGlvbnNSZXNwb25zZSIsImZldGNoQWxsSXRlbXMiLCJ2ZXJzaW9uUmVzcG9uc2UiLCJhbGxJdGVtcyIsIkl0ZW1JbmZvIiwiaXRlbUlkIiwiZ2V0SXRlbURldGFpbHMiLCJpdGVtSW1hZ2VJZCIsImltYWdlVXJsIiwiY29tcG9uZW50SXRlbUlkcyIsInVuZGVmaW5lZCIsImNvbXBvbmVudEl0ZW1EZXRhaWxzIiwiY29zdCIsImdvbGQiLCJ0b3RhbCIsImdldEl0ZW1JbWFnZSIsImNvbXBvbmVudEl0ZW1zIiwiZ2V0Q29tcG9uZW50SXRlbXMiLCJFbGVtZW50Q3JlYXRpb24iLCJEcm9wZG93blNlY3Rpb24iLCJkcm9wZG93bk5hbWUiLCJvcHRpb25zQXJyYXkiLCJmaWx0ZXJTb3J0U2VjdGlvbiIsInR5cGUiLCJkcm9wZG93biIsImNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcyIsIm9wdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJsYXN0Q2hpbGQiLCJ0YWciLCJhcHBlbmRDaGlsZCIsImNyZWF0ZUNoaWxkRWxlbWVudFdpdGhJZCIsImNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzc0FuZElkIiwiY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MiLCJzcmMiLCJhbHQiLCJpbWFnZUVsZW1lbnQiLCJyZW5kZXJIZWFkZXJEZXRhaWxzIiwiaW1hZ2VzIiwiY2hhbXBpb25EYXRhIiwiY2hhbXBpb25Sb2xlTmFtZSIsImNoYW1waW9uUmVzb3VyY2UiLCJjaGFtcGlvblJlc291cmNlTmFtZSIsImxvcmVDb250YWluZXIiLCJpbm5lckhUTUwiLCJhYmlsaXRpZXNDb250YWluZXIiLCJhYmlsaXR5SW1ncyIsInBhc3NpdmVJbWciLCJpbWdMYWJlbCIsImluZGV4Iiwic3BlbGxJbWciLCJpIiwiYWJpbGl0eUluZm8iLCJhYmlsaXR5TmFtZSIsImFiaWxpdHlEZXNjcmlwdGlvbiIsImFiaWxpdHlMYWJlbCIsImNoYW1waW9uVGlwc1NlY3Rpb24iLCJjaGFtcGlvblRpcCIsInNraW4iLCJudW0iLCJzaG93bkltYWdlQ29udGFpbmVyIiwic2hvd25JbWFnZVVybCIsImltYWdlQ29udGFpbmVyIiwicmVuZGVyU3RhdE92ZXJ2aWV3IiwicmVuZGVyRGFtYWdlU3RhdHMiLCJyZW5kZXJDaGFtcGlvbkxhbmUiLCJyZW5kZXJNYXRjaHVwc0luZm8iLCJzdGF0c092ZXJ2aWV3IiwidHJ1ZURhbWFnZUNpcmNsZVN0cm9rZSIsInBoeXNpY2FsRGFtYWdlQ2lyY2xlU3Ryb2tlIiwibWFnaWNEYW1hZ2VDaXJjbGVTdHJva2UiLCJ0cnVlRGFtYWdlUGVyY2VudCIsIk1hdGgiLCJyb3VuZCIsInRydWVEYW1hZ2UiLCJwZXJjZW50YWdlIiwicGh5c2ljYWxEYW1hZ2VQZXJjZW50IiwicGh5c2ljYWxEYW1hZ2UiLCJtYWdpY0RhbWFnZVBlcmNlbnQiLCJtYWdpY0RhbWFnZSIsInN0cm9rZURhc2hhcnJheSIsInRvdGFsRGFtYWdlVGV4dCIsInRydWVEYW1hZ2VWYWx1ZSIsInBoeXNpY2FsRGFtYWdlVmFsdWUiLCJtYWdpY0RhbWFnZVZhbHVlIiwiZ2V0QWxsSXRlbXMiLCJjaGFtcGlvbkl0ZW1CdWlsZHMiLCJpdGVtU2V0IiwiaXRlbVNldENvbnRhaW5lciIsIml0ZW0iLCJpdGVtSW5mbyIsImdldEl0ZW1JbmZvIiwibWFpbkNvbXBvbmVudENvbnRhaW5lciIsIm1haW5JdGVtIiwiaXRlbURldGFpbHNDb250YWluZXIiLCJuYW1lRWxlbWVudCIsImRlc2NyaXB0aW9uRWxlbWVudCIsIml0ZW1Db3N0IiwiY29zdExhYmVsIiwiY29zdEFtb3VudCIsImNvbXBvbmVudEl0ZW1zQ29udGFpbmVyIiwiY29tcG9uZW50SXRlbSIsImNvbXBvbmVudEl0ZW1FbGVtZW50IiwiY29tcG9uZW50SXRlbURldGFpbHNDb250YWluZXIiLCJjb21wb25lbnRJdGVtTmFtZSIsImNvbXBvbmVudEl0ZW1Db3N0IiwiY29tcG9uZW50SXRlbUNvc3RMYWJlbCIsImNvbXBvbmVudEl0ZW1BbW91bnQiLCJiZXN0TWF0Y2h1cHNTZWN0aW9uIiwiYmVzdE1hdGNodXBzRWxlbWVudCIsImJlc3RNYXRjaHVwc0RhdGEiLCJ3b3JzdE1hdGNodXBzU2VjdGlvbiIsIndvcnN0TWF0Y2h1cHNFbGVtZW50Iiwid29yc3RNYXRjaHVwc0RhdGEiLCJjcmVhdGVTZWN0aW9uIiwic29ydE9wdGlvbnMiLCJyb2xlT3B0aW9ucyIsImRpZmZpY3VsdHlPcHRpb25zIiwibXVsdGlPcHRpb25BcnJheXMiLCJzb3J0RHJvcGRvd24iLCJyZW5kZXJEcm9wZG93biIsIm9wdGlvbnNPYmplY3QiLCJPYmplY3QiLCJrZXlzIiwidmFsdWVzIiwiYWxsQ2hhbXBpb25zQXJyYXkiLCJhdXRvQ29tcGxldGVOYW1lV3JhcHBlciIsInRhYkluZGV4IiwiaW1wb3J0QWxsIiwiciIsInJlcXVpcmUiLCJjb250ZXh0IiwibW9kYWxDb250YWluZXIiLCJjb250YWluZXIiLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZFNpemUiLCJyYXRlVGV4dCIsInJhdGVUeXBlIiwiY2hhbXBpb25SYXRlIiwibGFiZWwiLCJyYXRlVmFsdWUiLCJsb3dlckNhc2VUZXh0IiwiY2hhbXBpb25MYW5lSW5mbyIsImxhbmVUZXh0IiwibGFuZUljb24iLCJkYW1hZ2VUeXBlIiwiZGFtYWdlVmFsdWUiLCJkYW1hZ2VQZXJjZW50YWdlIiwiZGFtYWdlQ29udGFpbmVyIiwiZGFtYWdlU3RhdHMiLCJkYW1hZ2VWYWx1ZUVsZW1lbnQiLCJkYW1hZ2VQZXJjZW50YWdlRWxlbWVudCIsIm1hdGNodXBzRWxlbWVudCIsIm1hdGNodXBzRGF0YSIsIm1hdGNodXAiLCJtYXRjaHVwSW5mbyIsImVuZW15Q2hhbXBpb25OYW1lIiwiZW5lbXlDaGFtcGlvbkltZ1VybCIsIm1hdGNodXBTdGF0cyIsImVuZW15Q2hhbXBpb25OYW1lRWxlbWVudCIsIndpbnJhdGVBZ2FpbnN0Iiwid2lucmF0ZUFnYWluc3RMYWJlbCIsImNvbG9yIiwid2lucmF0ZUFnYWluc3RQZXJjZW50YWdlIiwid2luUmF0ZUFnYWluc3QiLCJnYW1lc1BsYXllZEFnYWluc3QiLCJtYXRjaGVzIiwiY2hhbXBpb25Db250YWluZXIiLCJjaGFtcGlvbkltZ1VybCIsImNoYW1waW9uTmFtZVdyYXBwZXIiLCJ0ZXN0Il0sInNvdXJjZVJvb3QiOiIifQ==