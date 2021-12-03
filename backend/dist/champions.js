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
  })), 300);
};

createChampionsPage();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF5QyxxQkFBcUIsS0FBSyxHQUFHLE9BQU8sd0dBQXdHLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLEtBQUssTUFBTSxXQUFXLFVBQVUsS0FBSyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSw0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TUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sWUFBWSxVQUFVLE1BQU0sTUFBTSxZQUFZLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLFlBQVksVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxZQUFZLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFlBQVksV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFlBQVksVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sWUFBWSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxZQUFZLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sWUFBWSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxZQUFZLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sWUFBWSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sWUFBWSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLGFBQWEsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sV0FBVyxXQUFXLEtBQUssTUFBTSxhQUFhLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLGFBQWEsV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxVQUFVLEtBQUssTUFBTSxhQUFhLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLFVBQVUsS0FBSyxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0s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V0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFVBQVU7QUFDVjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLGNBQWM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLG1CQUFtQjtBQUNwRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLGtCQUFrQjs7QUFFbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdCQUFnQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENB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O0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbENlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0Esa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNkQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTTZQLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBTTtBQUNoQzNTLEVBQUFBLFVBQVUsd0xBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDSFAsb0VBQWEsRUFEVjs7QUFBQTtBQUVUN0QsWUFBQUEsa0dBQUE7QUFDQW9HLFlBQUFBLGdHQUFBO0FBQ014RixZQUFBQSxVQUpHLEdBSVVrSCxZQUFZLENBQUNrUCxPQUFiLENBQXFCLFlBQXJCLENBSlY7O0FBS1QsZ0JBQUlwVyxVQUFKLEVBQWdCO0FBQ2RaLGNBQUFBLGdHQUFBLENBQTZDWSxVQUE3QztBQUNBa0gsY0FBQUEsWUFBWSxDQUFDbVAsS0FBYjtBQUNEOztBQVJRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFTUCxHQVRPLENBQVY7QUFVRCxDQVhEOztBQVlBRixtQkFBbUIsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9hcHBDb250cm9sL2NoYW1waW9uTW9kYWxDb250cm9sbGVyLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvYXBwQ29udHJvbC9jaGFtcGlvbnNQYWdlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL2FwcENvbnRyb2wvZmlsdGVyQ2hhbXBpb25zLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvYXBwQ29udHJvbC9zZWFyY2hiYXJDb250cm9sbGVyLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvYXBwQ29udHJvbC9zb3J0Q2hhbXBpb25zLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvY2hhbXBpb25EYXRhL2NoYW1waW9uRGV0YWlscy5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL2NoYW1waW9uRGF0YS9jaGFtcGlvblN0YXRzLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvY2hhbXBpb25EYXRhL2dldEFsbENoYW1waW9ucy5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL2NoYW1waW9uRGF0YS9pdGVtSW5mby5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL2hlbHBlcnMvZHJvcGRvd25TZWN0aW9uLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvaGVscGVycy9lbGVtZW50Q3JlYXRpb24uanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy90ZW1wbGF0ZXMvY2hhbXBpb25EZXRhaWxzTW9kYWwuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy90ZW1wbGF0ZXMvY2hhbXBpb25Ta2luc01vZGFsLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvdGVtcGxhdGVzL2NoYW1waW9uU3RhdHNNb2RhbC5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL3RlbXBsYXRlcy9jaGFtcGlvbnNQYWdlLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvdGVtcGxhdGVzL3JlbmRlckhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9zdHlsZXNoZWV0cy9jaGFtcGlvbnMuc2NzcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL3N0eWxlc2hlZXRzL21vZGFscy5zY3NzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL3N0eWxlc2hlZXRzL2NoYW1waW9ucy5zY3NzPzY4YzciLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9zdHlsZXNoZWV0cy9tb2RhbHMuc2Nzcz9jZjgzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8vaG9tZS9kYXlvL0Rlc2t0b3Avb2RpblByb2plY3QvTGVhZ3VlLUFwcC9mcm9udGVuZC9zcmMvaW1hZ2VzfHN5bmN8bm9ucmVjdXJzaXZlfC9cXC4ocG5nfGpwZSIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9sZWFndWUtYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xlYWd1ZS1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9sZWFndWUtYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvY2hhbXBpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCJjb25zdCBDaGFtcGlvbk1vZGFsQ29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGNvbnN0IHRvZ2dsZUFjdGl2ZUFiaWxpdHkgPSAoY2xpY2tlZEFiaWxpdHlJZCkgPT4ge1xuICAgIGNvbnN0IGFiaWxpdHlJbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3BlbGwtaW1nJyk7XG4gICAgY29uc3QgYWJpbGl0eUluZm9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFiaWxpdHktaW5mbycpO1xuXG4gICAgYWJpbGl0eUltYWdlcy5mb3JFYWNoKChpbWcpID0+IHtcbiAgICAgIGltZy5jbGFzc0xpc3QucmVtb3ZlKCdjbGlja2VkJyk7XG4gICAgfSk7XG4gICAgYWJpbGl0eUluZm9zLmZvckVhY2goKGluZm8pID0+IHtcbiAgICAgIGluZm8uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjbGlja2VkSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtjbGlja2VkQWJpbGl0eUlkfS1pbWdgKTtcbiAgICBjbGlja2VkSW1hZ2UuY2xhc3NOYW1lID0gJ3NwZWxsLWltZyBjbGlja2VkJztcblxuICAgIGNvbnN0IGFjdGl2ZUFiaWxpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtjbGlja2VkQWJpbGl0eUlkfS1hYmlsaXR5YCk7XG4gICAgYWN0aXZlQWJpbGl0eS5jbGFzc05hbWUgPSAnYWJpbGl0eS1pbmZvIGFjdGl2ZSc7XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlTW9kYWxUZW1wbGF0ZSA9IChjbGlja2VkTW9kYWxOYXZMaW5rKSA9PiB7XG4gICAgY29uc3QgdGVtcGxhdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsLXRlbXBsYXRlJyk7XG4gICAgdGVtcGxhdGVzLmZvckVhY2goKHRlbXBsYXRlKSA9PiB7XG4gICAgICBjb25zdCB0ZW1wbGF0ZU5hbWUgPSB0ZW1wbGF0ZS5pZC5zdWJzdHJpbmcoMCwgdGVtcGxhdGUuaWQuaW5kZXhPZignLScpKTtcbiAgICAgIGlmICh0ZW1wbGF0ZU5hbWUgPT09IGNsaWNrZWRNb2RhbE5hdkxpbmsuaWQpIHtcbiAgICAgICAgY29uc3QgY2hvc2VuVGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICAgICAgY2hvc2VuVGVtcGxhdGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBoaWRkZW5UZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgICAgICBoaWRkZW5UZW1wbGF0ZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BheUl0ZW1EZXRhaWxzID0gKGhvdmVyZWRJdGVtSW1hZ2UpID0+IHtcbiAgICBjb25zdCBpdGVtRGV0YWlscyA9IGhvdmVyZWRJdGVtSW1hZ2UubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGl0ZW1EZXRhaWxzLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gIH07XG5cbiAgY29uc3QgaGlkZUl0ZW1EZXRhaWxzID0gKHVuaG92ZXJlZEl0ZW1JbWFnZSkgPT4ge1xuICAgIGNvbnN0IGl0ZW1EZXRhaWxzID0gdW5ob3ZlcmVkSXRlbUltYWdlLm5leHRFbGVtZW50U2libGluZztcbiAgICBpdGVtRGV0YWlscy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZVNraW5JbWFnZXMgPSAoYXJyb3dDbGFzc0xpc3QpID0+IHtcbiAgICBjb25zdCBza2luSW1hZ2VzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNraW4taW1hZ2VzLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGN1cnJlbnRTaG93bkltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNraW4taW1hZ2UtY29udGFpbmVyLnNob3duJyk7XG4gICAgY29uc3Qgc2tpbk5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2tpbi1uYW1lJyk7XG5cbiAgICBjdXJyZW50U2hvd25JbWFnZS5jbGFzc05hbWUgPSAnc2tpbi1pbWFnZS1jb250YWluZXInO1xuICAgIGNvbnN0IGZpcnN0SW1hZ2UgPSBza2luSW1hZ2VzQ29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkO1xuICAgIGNvbnN0IGxhc3RJbWFnZSA9IHNraW5JbWFnZXNDb250YWluZXIubGFzdEVsZW1lbnRDaGlsZDtcblxuICAgIGlmIChmaXJzdEltYWdlID09PSBjdXJyZW50U2hvd25JbWFnZSAmJiBhcnJvd0NsYXNzTGlzdC5pbmNsdWRlcygnbGVmdC1hcnJvdycpKSB7XG4gICAgICBsYXN0SW1hZ2UuY2xhc3NOYW1lID0gJ3NraW4taW1hZ2UtY29udGFpbmVyIHNob3duJztcbiAgICAgIHNraW5OYW1lLnRleHRDb250ZW50ID0gbGFzdEltYWdlLmlkO1xuICAgIH0gZWxzZSBpZiAobGFzdEltYWdlID09PSBjdXJyZW50U2hvd25JbWFnZSAmJiBhcnJvd0NsYXNzTGlzdC5pbmNsdWRlcygncmlnaHQtYXJyb3cnKSkge1xuICAgICAgZmlyc3RJbWFnZS5jbGFzc05hbWUgPSAnc2tpbi1pbWFnZS1jb250YWluZXIgc2hvd24nO1xuICAgICAgc2tpbk5hbWUudGV4dENvbnRlbnQgPSBmaXJzdEltYWdlLmlkO1xuICAgIH0gZWxzZSBpZiAoYXJyb3dDbGFzc0xpc3QuaW5jbHVkZXMoJ3JpZ2h0LWFycm93JykpIHtcbiAgICAgIGN1cnJlbnRTaG93bkltYWdlLm5leHRFbGVtZW50U2libGluZy5jbGFzc05hbWUgPSAnc2tpbi1pbWFnZS1jb250YWluZXIgc2hvd24nO1xuICAgICAgc2tpbk5hbWUudGV4dENvbnRlbnQgPSBjdXJyZW50U2hvd25JbWFnZS5uZXh0RWxlbWVudFNpYmxpbmcuaWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnRTaG93bkltYWdlLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NOYW1lID0gJ3NraW4taW1hZ2UtY29udGFpbmVyIHNob3duJztcbiAgICAgIHNraW5OYW1lLnRleHRDb250ZW50ID0gY3VycmVudFNob3duSW1hZ2UucHJldmlvdXNFbGVtZW50U2libGluZy5pZDtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2xlYXJNYWluTW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGNoYW1waW9uTmFtZSA9IG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLW5hbWUnKTtcbiAgICBjb25zdCBjaGFtcGlvblRpdGxlID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tdGl0bGUnKTtcbiAgICBjb25zdCBjaGFtcGlvblJvbGVzID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tcm9sZXMnKTtcbiAgICBjb25zdCBjaGFtcGlvbkxvcmUgPSBtYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbi1sb3JlJyk7XG4gICAgY29uc3QgYWJpbGl0eURldGFpbHMgPSBtYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5hYmlsaXR5LWRldGFpbHMnKTtcbiAgICBjb25zdCBjaGFtcGlvblRpcHMgPSBtYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbi10aXBzJyk7XG5cbiAgICBjb25zdCBtYWluTW9kYWxIZWFkZXIgPSBbY2hhbXBpb25OYW1lLCBjaGFtcGlvblRpdGxlLCBjaGFtcGlvblJvbGVzXTtcbiAgICBtYWluTW9kYWxIZWFkZXIuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgY3VycmVudEVsZW1lbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICB9KTtcblxuICAgIGNoYW1waW9uTG9yZS5yZW1vdmUoKTtcbiAgICBhYmlsaXR5RGV0YWlscy5yZW1vdmUoKTtcbiAgICBjaGFtcGlvblRpcHMucmVtb3ZlKCk7XG4gIH07XG5cbiAgY29uc3QgY2xlYXJTdGF0c01vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0YXRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YXRzLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGNoYW1waW9uTmFtZSA9IHN0YXRzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbi1uYW1lJyk7XG4gICAgY29uc3QgY2hhbXBpb25UaXRsZSA9IHN0YXRzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbi10aXRsZScpO1xuICAgIGNvbnN0IGNoYW1waW9uU3RhdHNPdmVydmlldyA9IHN0YXRzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbi1zdGF0cy1vdmVydmlldycpO1xuICAgIGNvbnN0IGFsbGRhbWFnZVN0YXRzID0gc3RhdHNDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmRhbWFnZS1zdGF0cycpO1xuICAgIGNvbnN0IGl0ZW1TZXRzQ29udGFpbmVyID0gc3RhdHNDb250YWluZXIucXVlcnlTZWxlY3RvcignLml0ZW0tc2V0cy1jb250YWluZXInKTtcbiAgICBjb25zdCBiZXN0TWF0Y2h1cHMgPSBzdGF0c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuYmVzdC1tYXRjaHVwcycpO1xuICAgIGNvbnN0IHdvcnN0TWF0Y2h1cHMgPSBzdGF0c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcud29yc3QtbWF0Y2h1cHMnKTtcblxuICAgIGNvbnN0IHN0YXRzTW9kYWxIZWFkZXIgPSBbY2hhbXBpb25OYW1lLCBjaGFtcGlvblRpdGxlLCBjaGFtcGlvblN0YXRzT3ZlcnZpZXddO1xuICAgIHN0YXRzTW9kYWxIZWFkZXIuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgY3VycmVudEVsZW1lbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICB9KTtcbiAgICBhbGxkYW1hZ2VTdGF0cy5mb3JFYWNoKChkYW1hZ2VTdGF0KSA9PiB7XG4gICAgICBjb25zdCBkYW1hZ2VTdGF0RWxlbWVudCA9IGRhbWFnZVN0YXQ7XG4gICAgICBkYW1hZ2VTdGF0RWxlbWVudC5yZW1vdmUoKTtcbiAgICB9KTtcbiAgICBjb25zdCBzdGF0c01vZGFsQ29udGVudCA9IFtpdGVtU2V0c0NvbnRhaW5lciwgYmVzdE1hdGNodXBzLCB3b3JzdE1hdGNodXBzXTtcbiAgICBzdGF0c01vZGFsQ29udGVudC5mb3JFYWNoKChjb250ZW50KSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50RWxlbWVudCA9IGNvbnRlbnQ7XG4gICAgICBjb250ZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBjbGVhclNraW5zTW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2tpbkltYWdlc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5za2luLWltYWdlcy1jb250YWluZXInKTtcbiAgICBza2luSW1hZ2VzQ29udGFpbmVyLnJlbW92ZSgpO1xuICB9O1xuXG4gIGNvbnN0IGNsb3NlQ2hhbXBpb25Nb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1jb250YWluZXInKTtcbiAgICBjb25zdCBzdGF0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGF0cy1jb250YWluZXInKTtcbiAgICBjb25zdCBza2luc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNza2lucy1jb250YWluZXInKTtcblxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgbWFpbkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBzdGF0c0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHNraW5zQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH07XG5cbiAgY29uc3QgbW9kYWxDbGlja0V2ZW50cyA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ3NwZWxsLWltZycpIHtcbiAgICAgIGNvbnN0IGRhc2hJbmRleCA9IGV2ZW50LnRhcmdldC5pZC5pbmRleE9mKCctJyk7XG4gICAgICBjb25zdCBhYmlsaXR5SWQgPSBldmVudC50YXJnZXQuaWQuc2xpY2UoMCwgZGFzaEluZGV4KTtcbiAgICAgIHRvZ2dsZUFjdGl2ZUFiaWxpdHkoYWJpbGl0eUlkKTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ21vZGFsLW5hdi1saW5rJykge1xuICAgICAgY2hhbmdlTW9kYWxUZW1wbGF0ZShldmVudC50YXJnZXQpO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5mcm9tKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QpLmluY2x1ZGVzKCdpbWctc2Nyb2xsLWFycm93JykpIHtcbiAgICAgIHRvZ2dsZVNraW5JbWFnZXMoQXJyYXkuZnJvbShldmVudC50YXJnZXQuY2xhc3NMaXN0KSk7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdjbG9zZS1tb2RhbC1idG4nKSB7XG4gICAgICBtb2RhbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG1vZGFsQ2xpY2tFdmVudHMpO1xuICAgICAgY2xvc2VDaGFtcGlvbk1vZGFsKCk7XG4gICAgICBjbGVhck1haW5Nb2RhbCgpO1xuICAgICAgY2xlYXJTdGF0c01vZGFsKCk7XG4gICAgICBjbGVhclNraW5zTW9kYWwoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbW9kYWxNb3VzZW92ZXJFdmVudHMgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2l0ZW0taW1nJ1xuICAgICAgfHwgZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2NvbXBvbmVudC1pdGVtLWltZycpIHtcbiAgICAgIGRpc3BheUl0ZW1EZXRhaWxzKGV2ZW50LnRhcmdldCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG1vZGFsTW91c2VvdXRFdmVudHMgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2l0ZW0taW1nJ1xuICAgIHx8IGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdjb21wb25lbnQtaXRlbS1pbWcnKSB7XG4gICAgICBpZiAoIWV2ZW50LnRhcmdldCkgcmV0dXJuO1xuXG4gICAgICBsZXQgeyByZWxhdGVkVGFyZ2V0IH0gPSBldmVudDtcblxuICAgICAgd2hpbGUgKHJlbGF0ZWRUYXJnZXQpIHtcbiAgICAgICAgaWYgKHJlbGF0ZWRUYXJnZXQgPT09IGV2ZW50LnRhcmdldCkgcmV0dXJuO1xuICAgICAgICByZWxhdGVkVGFyZ2V0ID0gcmVsYXRlZFRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgfVxuXG4gICAgICBoaWRlSXRlbURldGFpbHMoZXZlbnQudGFyZ2V0KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbW9kYWxBcnJvd0V2ZW50cyA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHNraW5zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NraW5zLWNvbnRhaW5lcicpO1xuICAgIGlmIChza2luc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snKSB7XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dSaWdodCcpIHtcbiAgICAgICAgY29uc3QgcmlnaHRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaWdodC1hcnJvdycpO1xuICAgICAgICB0b2dnbGVTa2luSW1hZ2VzKEFycmF5LmZyb20ocmlnaHRBcnJvdy5jbGFzc0xpc3QpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93TGVmdCcpIHtcbiAgICAgICAgY29uc3QgbGVmdEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQtYXJyb3cnKTtcbiAgICAgICAgdG9nZ2xlU2tpbkltYWdlcyhBcnJheS5mcm9tKGxlZnRBcnJvdy5jbGFzc0xpc3QpKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbW9kYWxDaGFuZ2VMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcblxuICAgIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbW9kYWxDbGlja0V2ZW50cyk7XG4gICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgbW9kYWxNb3VzZW92ZXJFdmVudHMpO1xuICAgIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgbW9kYWxNb3VzZW91dEV2ZW50cyk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG1vZGFsQXJyb3dFdmVudHMpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbW9kYWxDaGFuZ2VMaXN0ZW5lcnMsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBDaGFtcGlvbk1vZGFsQ29udHJvbGxlcjtcbiIsImltcG9ydCBnZXRDaGFtcGlvbkRldGFpbHMgZnJvbSAnLi4vY2hhbXBpb25EYXRhL2NoYW1waW9uRGV0YWlscyc7XG5pbXBvcnQgZ2V0Q2hhbXBpb25TdGF0cyBmcm9tICcuLi9jaGFtcGlvbkRhdGEvY2hhbXBpb25TdGF0cyc7XG5pbXBvcnQgY2hhbXBpb25EZXRhaWxzTW9kYWwgZnJvbSAnLi4vdGVtcGxhdGVzL2NoYW1waW9uRGV0YWlsc01vZGFsJztcbmltcG9ydCBjaGFtcGlvblN0YXRzTW9kYWwgZnJvbSAnLi4vdGVtcGxhdGVzL2NoYW1waW9uU3RhdHNNb2RhbCc7XG5pbXBvcnQgY2hhbXBpb25Ta2luc01vZGFsIGZyb20gJy4uL3RlbXBsYXRlcy9jaGFtcGlvblNraW5zTW9kYWwnO1xuaW1wb3J0IENoYW1waW9uTW9kYWxDb250cm9sbGVyIGZyb20gJy4vY2hhbXBpb25Nb2RhbENvbnRyb2xsZXInO1xuaW1wb3J0IENoYW1waW9uRmlsdGVyIGZyb20gJy4vZmlsdGVyQ2hhbXBpb25zJztcbmltcG9ydCBTb3J0Q2hhbXBpb25zIGZyb20gJy4vc29ydENoYW1waW9ucyc7XG5pbXBvcnQgeyBnZXRBbGxDaGFtcGlvbkRldGFpbHMsIGdldEFsbENoYW1waW9uU3RhdHMgfSBmcm9tICcuLi9jaGFtcGlvbkRhdGEvZ2V0QWxsQ2hhbXBpb25zJztcblxuY29uc3QgQ2hhbXBpb25zUGFnZUNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBjb25zdCBkaXNwbGF5RHJvcGRvd25PcHRpb25zID0gKGRyb3Bkb3duT3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IGFsbERyb3Bkb3duT3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bi1vcHRpb25zJyk7XG4gICAgYWxsRHJvcGRvd25PcHRpb25zLmZvckVhY2goKG9wdGlvbnMpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbnNTdHlsZSA9IG9wdGlvbnMuc3R5bGU7XG4gICAgICBvcHRpb25zU3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KTtcblxuICAgIGNvbnN0IGRyb3Bkb3duT3B0aW9uc1N0eWxlID0gZHJvcGRvd25PcHRpb25zLnN0eWxlO1xuICAgIGRyb3Bkb3duT3B0aW9uc1N0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gIH07XG5cbiAgY29uc3QgaGlkZURyb3Bkb3duT3B0aW9ucyA9IChkcm9wZG93bk9wdGlvbnMpID0+IHtcbiAgICBjb25zdCBkcm9wZG93bk9wdGlvbnNTdHlsZSA9IGRyb3Bkb3duT3B0aW9ucy5zdHlsZTtcbiAgICBkcm9wZG93bk9wdGlvbnNTdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9O1xuXG4gIGNvbnN0IGRyb3Bkb3duT3B0aW9uc1RvZ2dsZSA9IChkcm9wZG93bkJ0bikgPT4ge1xuICAgIGNvbnN0IGRyb3Bkb3duT3B0aW9ucyA9IGRyb3Bkb3duQnRuLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duLW9wdGlvbnMnKTtcbiAgICBpZiAoZHJvcGRvd25PcHRpb25zLnN0eWxlLmRpc3BsYXkgIT09ICdmbGV4Jykge1xuICAgICAgZGlzcGxheURyb3Bkb3duT3B0aW9ucyhkcm9wZG93bk9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoaWRlRHJvcGRvd25PcHRpb25zKGRyb3Bkb3duT3B0aW9ucyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlDaGFtcGlvbk1vZGFsID0gYXN5bmMgKGNoYW1waW9uSWQpID0+IHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICAgIGNvbnN0IGNoYW1waW9uRGV0YWlscyA9IGF3YWl0IGdldENoYW1waW9uRGV0YWlscyhjaGFtcGlvbklkKTtcblxuICAgIGNvbnN0IGNoYW1waW9uU3RhdHMgPSBhd2FpdCBnZXRDaGFtcGlvblN0YXRzKGNoYW1waW9uSWQpO1xuXG4gICAgY29uc3Qgc2tpbkltYWdlc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5za2luLWltYWdlcy1jb250YWluZXInKTtcbiAgICAvKlxuICAgICAgcHVycG9zZSBvZiB0aGUgaWYgc3RhdGVtZW50IGlzIHRvIHByZXZlbnQgc3BhbSBjbGlja3MgZnJvbSByZW5kZXJpbmdcbiAgICAgIGR1cGxpY2F0ZSBjb250ZW50IG9udG8gdGhlIGNoYW1waW9uIG1vZGFsLlxuICAgICovXG4gICAgaWYgKCFza2luSW1hZ2VzQ29udGFpbmVyKSB7XG4gICAgICBjaGFtcGlvbkRldGFpbHNNb2RhbChjaGFtcGlvbkRldGFpbHMpO1xuICAgICAgY2hhbXBpb25TdGF0c01vZGFsKGNoYW1waW9uRGV0YWlscywgY2hhbXBpb25TdGF0cyk7XG4gICAgICBjaGFtcGlvblNraW5zTW9kYWwoY2hhbXBpb25EZXRhaWxzKTtcbiAgICB9XG5cbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBDaGFtcGlvbk1vZGFsQ29udHJvbGxlci5tb2RhbENoYW5nZUxpc3RlbmVycygpO1xuICB9O1xuXG4gIGNvbnN0IHNlbGVjdExhbmVGaWx0ZXJPcHRpb24gPSAoY2xpY2tlZExhbmVPcHRpb24pID0+IHtcbiAgICBjb25zdCBjaGFtcGlvbnNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW1waW9ucy1zZWN0aW9uJyk7XG4gICAgY29uc3QgYWN0aXZlTGFuZU9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItb3B0aW9uLmFjdGl2ZScpO1xuICAgIGlmIChjbGlja2VkTGFuZU9wdGlvbiA9PT0gYWN0aXZlTGFuZU9wdGlvbiB8fCBjaGFtcGlvbnNTZWN0aW9uLnN0eWxlLnZpc2liaWxpdHkgPT09ICdoaWRkZW4nKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGFjdGl2ZUxhbmVPcHRpb24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgY2xpY2tlZExhbmVPcHRpb24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBjaGVja0xhbmVGaWx0ZXJPcHRpb24gPSBhc3luYyAoYWxsQ2hhbXBpb25TdGF0cykgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZUxhbmVPcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLW9wdGlvbi5hY3RpdmUnKTtcbiAgICBjb25zdCBsYW5lTmFtZSA9IGFjdGl2ZUxhbmVPcHRpb24uY2xhc3NMaXN0WzBdO1xuICAgIGF3YWl0IENoYW1waW9uRmlsdGVyLmZpbHRlckJ5TGFuZShsYW5lTmFtZSwgYWxsQ2hhbXBpb25TdGF0cyk7XG4gIH07XG5cbiAgY29uc3QgY2hlY2tTb3J0aW5nT3B0aW9uID0gKGFsbENoYW1waW9uU3RhdHMpID0+IHtcbiAgICBjb25zdCBhY3RpdmVTb3J0aW5nT3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNvcnQuYWN0aXZlJyk7XG4gICAgaWYgKGFjdGl2ZVNvcnRpbmdPcHRpb24gPT09IG51bGwpIHtcbiAgICAgIFNvcnRDaGFtcGlvbnMuc29ydEJ5RGVmYXVsdE9yZGVyKGFsbENoYW1waW9uU3RhdHMpO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuZnJvbShhY3RpdmVTb3J0aW5nT3B0aW9uLmNsYXNzTGlzdCkuaW5jbHVkZXMoJ3dpbnJhdGUnKSkge1xuICAgICAgU29ydENoYW1waW9ucy5zb3J0Q2hhbXBpb25zQnlXaW5yYXRlKGFsbENoYW1waW9uU3RhdHMpO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuZnJvbShhY3RpdmVTb3J0aW5nT3B0aW9uLmNsYXNzTGlzdCkuaW5jbHVkZXMoJ3BpY2tyYXRlJykpIHtcbiAgICAgIFNvcnRDaGFtcGlvbnMuc29ydENoYW1waW9uc0J5UGlja3JhdGUoYWxsQ2hhbXBpb25TdGF0cyk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5mcm9tKGFjdGl2ZVNvcnRpbmdPcHRpb24uY2xhc3NMaXN0KS5pbmNsdWRlcygnZGFtYWdlJykpIHtcbiAgICAgIFNvcnRDaGFtcGlvbnMuc29ydENoYW1waW9uc0J5RGFtYWdlRG9uZShhbGxDaGFtcGlvblN0YXRzKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2hlY2tBY3RpdmVSb2xlT3B0aW9ucyA9IChhbGxDaGFtcGlvbkRldGFpbHMpID0+IHtcbiAgICBjb25zdCBhY3RpdmVSb2xlT3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yb2xlLmFjdGl2ZScpO1xuICAgIGlmIChhY3RpdmVSb2xlT3B0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgYWN0aXZlUm9sZXMgPSBBcnJheS5mcm9tKGFjdGl2ZVJvbGVPcHRpb25zKS5tYXAoKGFjdGl2ZVJvbGVPcHRpb24pID0+IHtcbiAgICAgIGNvbnN0IGFjdGl2ZVJvbGUgPSBhY3RpdmVSb2xlT3B0aW9uLmNsYXNzTGlzdFswXTtcbiAgICAgIHJldHVybiBhY3RpdmVSb2xlO1xuICAgIH0pO1xuICAgIENoYW1waW9uRmlsdGVyLmZpbHRlckJ5Um9sZShhY3RpdmVSb2xlcywgYWxsQ2hhbXBpb25EZXRhaWxzKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBjaGVja0FjdGl2ZURpZmZpY3VsdHlPcHRpb25zID0gKGFsbENoYW1waW9uRGV0YWlscykgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZURpZmZpY3VsdHlPcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRpZmZpY3VsdHkuYWN0aXZlJyk7XG4gICAgaWYgKGFjdGl2ZURpZmZpY3VsdHlPcHRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBhY3RpdmVEaWZmaWN1bHRpZXMgPSBBcnJheS5mcm9tKGFjdGl2ZURpZmZpY3VsdHlPcHRpb25zKS5tYXAoKGFjdGl2ZURpZmZpY3VsdHlPcHRpb24pID0+IHtcbiAgICAgIGNvbnN0IGFjdGl2ZURpZmZpY3VsdHkgPSBhY3RpdmVEaWZmaWN1bHR5T3B0aW9uLmNsYXNzTGlzdFswXTtcbiAgICAgIHJldHVybiBhY3RpdmVEaWZmaWN1bHR5O1xuICAgIH0pO1xuICAgIENoYW1waW9uRmlsdGVyLmZpbHRlckJ5RGlmZmljdWx0eShhY3RpdmVEaWZmaWN1bHRpZXMsIGFsbENoYW1waW9uRGV0YWlscyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3Qgc2VsZWN0TXVsdGlEcm9wZG93bk9wdGlvbiA9IChkcm9wZG93bk9wdGlvbikgPT4ge1xuICAgIGRyb3Bkb3duT3B0aW9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9O1xuXG4gIGNvbnN0IGRlc2VsZWN0RHJvcGRvd25PcHRpb24gPSAoZHJvcGRvd25PcHRpb24pID0+IHtcbiAgICBkcm9wZG93bk9wdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVEcm9wZG93bk9wdGlvbiA9IChkcm9wZG93bk9wdGlvbikgPT4ge1xuICAgIGlmICghQXJyYXkuZnJvbShkcm9wZG93bk9wdGlvbi5jbGFzc0xpc3QpLmluY2x1ZGVzKCdhY3RpdmUnKSkge1xuICAgICAgc2VsZWN0TXVsdGlEcm9wZG93bk9wdGlvbihkcm9wZG93bk9wdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlc2VsZWN0RHJvcGRvd25PcHRpb24oZHJvcGRvd25PcHRpb24pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZWxlY3RTaW5nbGVEcm9wZG93bk9wdGlvbiA9IChkcm9wZG93bk9wdGlvbikgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZURyb3Bkb3duT3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpbmdsZS1zZWxlY3QuYWN0aXZlJyk7XG4gICAgaWYgKGFjdGl2ZURyb3Bkb3duT3B0aW9uID09PSBudWxsKSB7XG4gICAgICBkcm9wZG93bk9wdGlvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGFjdGl2ZURyb3Bkb3duT3B0aW9uID09PSBkcm9wZG93bk9wdGlvbikge1xuICAgICAgZGVzZWxlY3REcm9wZG93bk9wdGlvbihkcm9wZG93bk9wdGlvbik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGFjdGl2ZURyb3Bkb3duT3B0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIGRyb3Bkb3duT3B0aW9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9O1xuXG4gIGNvbnN0IHJlZGlyZWN0VG9Gcm9udFBhZ2UgPSAoKSA9PiB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnaW5kZXguaHRtbCc7XG4gIH07XG5cbiAgY29uc3QgY2hhbXBpb25zUGFnZUNsaWNrRXZlbnRzID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgLyogSGVscGVyIGZ1bmN0aW9ucyBmb3IgY2xpY2sgZXZlbnRzICovXG4gICAgY29uc3QgY2hlY2tPcHRpb25zID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgYWxsQ2hhbXBpb25TdGF0cyA9IGF3YWl0IGdldEFsbENoYW1waW9uU3RhdHMoKTtcbiAgICAgIGNvbnN0IGFsbENoYW1waW9uRGV0YWlscyA9IGF3YWl0IGdldEFsbENoYW1waW9uRGV0YWlscygpO1xuICAgICAgYXdhaXQgY2hlY2tMYW5lRmlsdGVyT3B0aW9uKGFsbENoYW1waW9uU3RhdHMpO1xuICAgICAgY2hlY2tTb3J0aW5nT3B0aW9uKGFsbENoYW1waW9uU3RhdHMpO1xuICAgICAgY2hlY2tBY3RpdmVSb2xlT3B0aW9ucyhhbGxDaGFtcGlvbkRldGFpbHMpO1xuICAgICAgY2hlY2tBY3RpdmVEaWZmaWN1bHR5T3B0aW9ucyhhbGxDaGFtcGlvbkRldGFpbHMpO1xuICAgIH07XG5cbiAgICBjb25zdCBoaWRlQ2hhbXBpb25zU2VjdGlvbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGNoYW1waW9uc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb25zLXNlY3Rpb24nKTtcbiAgICAgIGNoYW1waW9uc1NlY3Rpb24uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIH07XG5cbiAgICBjb25zdCBzaG93Q2hhbXBpb25zU2VjdGlvbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGNoYW1waW9uc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb25zLXNlY3Rpb24nKTtcbiAgICAgIGNoYW1waW9uc1NlY3Rpb24uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICB9O1xuXG4gICAgY29uc3QgcmVtb3ZlQ2hhbXBpb25zUGFnZUxpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgY29uc3QgY2hhbXBpb25zUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGFtcGlvbnMtcGFnZScpO1xuICAgICAgY2hhbXBpb25zUGFnZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW1waW9uc1BhZ2VDbGlja0V2ZW50cyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZENoYW1waW9uc1BhZ2VMaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGNoYW1waW9uc1BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hhbXBpb25zLXBhZ2UnKTtcbiAgICAgIGNoYW1waW9uc1BhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFtcGlvbnNQYWdlQ2xpY2tFdmVudHMpO1xuICAgIH07XG5cbiAgICBjb25zdCBzaG93TG9hZGVyID0gKCkgPT4ge1xuICAgICAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlcicpO1xuICAgICAgbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH07XG5cbiAgICBjb25zdCBoaWRlTG9hZGVyID0gKCkgPT4ge1xuICAgICAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlcicpO1xuICAgICAgbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfTtcblxuICAgIGNvbnN0IGZpbHRlckFuZFNvcnRDaGFtcGlvbnNTZWN0aW9uID0gYXN5bmMgKHdhaXRUaW1lKSA9PiB7XG4gICAgICBoaWRlQ2hhbXBpb25zU2VjdGlvbigpO1xuICAgICAgc2hvd0xvYWRlcigpO1xuICAgICAgcmVtb3ZlQ2hhbXBpb25zUGFnZUxpc3RlbmVyKCk7XG4gICAgICBhd2FpdCBjaGVja09wdGlvbnMoKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzaG93Q2hhbXBpb25zU2VjdGlvbigpO1xuICAgICAgICBoaWRlTG9hZGVyKCk7XG4gICAgICB9LCB3YWl0VGltZSk7XG4gICAgICBhZGRDaGFtcGlvbnNQYWdlTGlzdGVuZXIoKTtcbiAgICB9O1xuXG4gICAgLyogY2xpY2sgZXZlbnQgcmVzcG9uc2VzICovXG4gICAgaWYgKEFycmF5LmZyb20oZXZlbnQudGFyZ2V0LmNsYXNzTGlzdCkuaW5jbHVkZXMoJ2Ryb3Bkb3duLWJ0bicpKSB7XG4gICAgICBkcm9wZG93bk9wdGlvbnNUb2dnbGUoZXZlbnQudGFyZ2V0KTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lID09PSAnY2hhbXBpb24tY29udGFpbmVyIHNob3duJykge1xuICAgICAgZGlzcGxheUNoYW1waW9uTW9kYWwoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pZCk7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lID09PSAnY2hhbXBpb24tY29udGFpbmVyIHNob3duJykge1xuICAgICAgZGlzcGxheUNoYW1waW9uTW9kYWwoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5kYXRhc2V0LmlkKTtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuZnJvbShldmVudC50YXJnZXQuY2xhc3NMaXN0KS5pbmNsdWRlcygnbXVsdGktc2VsZWN0JykpIHtcbiAgICAgIHRvZ2dsZURyb3Bkb3duT3B0aW9uKGV2ZW50LnRhcmdldCk7XG4gICAgICBmaWx0ZXJBbmRTb3J0Q2hhbXBpb25zU2VjdGlvbig2MDApO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5mcm9tKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QpLmluY2x1ZGVzKCdzaW5nbGUtc2VsZWN0JykpIHtcbiAgICAgIHNlbGVjdFNpbmdsZURyb3Bkb3duT3B0aW9uKGV2ZW50LnRhcmdldCk7XG4gICAgICBmaWx0ZXJBbmRTb3J0Q2hhbXBpb25zU2VjdGlvbigxMDAwKTtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuZnJvbShldmVudC50YXJnZXQuY2xhc3NMaXN0KS5pbmNsdWRlcygnaGVhZGVyLW9wdGlvbicpKSB7XG4gICAgICBzZWxlY3RMYW5lRmlsdGVyT3B0aW9uKGV2ZW50LnRhcmdldCk7XG4gICAgICBmaWx0ZXJBbmRTb3J0Q2hhbXBpb25zU2VjdGlvbig2MDApO1xuICAgIH1cblxuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnYXBwLW5hbWUnKSB7XG4gICAgICByZWRpcmVjdFRvRnJvbnRQYWdlKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNoYW1waW9uc1BhZ2VLZXlFdmVudHMgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IGFjdGl2ZUVsZW1lbnQgfSA9IGRvY3VtZW50O1xuXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQgJiYgYWN0aXZlRWxlbWVudC5jbGFzc05hbWUgPT09ICdjaGFtcGlvbi1jb250YWluZXIgc2hvd24nKSB7XG4gICAgICAgIGRpc3BsYXlDaGFtcGlvbk1vZGFsKGFjdGl2ZUVsZW1lbnQuZGF0YXNldC5pZCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhY3RpdmVFbGVtZW50ICYmIGFjdGl2ZUVsZW1lbnQuY2xhc3NOYW1lID09PSAnY2hhbXBpb24taW1nJykge1xuICAgICAgICBkaXNwbGF5Q2hhbXBpb25Nb2RhbChhY3RpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pZCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNoYW1waW9uc1BhZ2VMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgY2hhbXBpb25zUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGFtcGlvbnMtcGFnZScpO1xuICAgIGNoYW1waW9uc1BhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFtcGlvbnNQYWdlQ2xpY2tFdmVudHMpO1xuICAgIGNoYW1waW9uc1BhZ2UuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGNoYW1waW9uc1BhZ2VLZXlFdmVudHMpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY2hhbXBpb25zUGFnZUxpc3RlbmVycyxcbiAgICBkaXNwbGF5Q2hhbXBpb25Nb2RhbCxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IENoYW1waW9uc1BhZ2VDb250cm9sbGVyO1xuIiwiaW1wb3J0IGdldENoYW1waW9uU3RhdHMgZnJvbSAnLi4vY2hhbXBpb25EYXRhL2NoYW1waW9uU3RhdHMnO1xuaW1wb3J0IHsgY3JlYXRlQ2hhbXBpb25Db250YWluZXIgfSBmcm9tICcuLi90ZW1wbGF0ZXMvcmVuZGVySGVscGVycyc7XG5cbmNvbnN0IENoYW1waW9uRmlsdGVyID0gKCgpID0+IHtcbiAgY29uc3QgcmVuZGVyQWxsQ2hhbXBpb25zID0gYXN5bmMgKGFsbENoYW1waW9uU3RhdHMpID0+IHtcbiAgICBjb25zdCBjaGFtcGlvbnNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW1waW9ucy1zZWN0aW9uJyk7XG4gICAgYWxsQ2hhbXBpb25TdGF0cy5mb3JFYWNoKChjaGFtcGlvbikgPT4ge1xuICAgICAgY3JlYXRlQ2hhbXBpb25Db250YWluZXIoY2hhbXBpb24sIGNoYW1waW9uc1NlY3Rpb24pO1xuICAgIH0pO1xuICAgIHJldHVybiBjaGFtcGlvbnNTZWN0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyQ2hhbXBpb25zU2VjdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBjaGFtcGlvbnNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW1waW9ucy1zZWN0aW9uJyk7XG4gICAgY2hhbXBpb25zU2VjdGlvbi50ZXh0Q29udGVudCA9ICcnO1xuICB9O1xuXG4gIGNvbnN0IHNob3dDaGFtcGlvbiA9IChjaGFtcGlvbikgPT4ge1xuICAgIGNoYW1waW9uLmNsYXNzTGlzdC5hZGQoJ3Nob3duJyk7XG4gICAgY2hhbXBpb24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIH07XG5cbiAgY29uc3QgaGlkZUNoYW1waW9uID0gKGNoYW1waW9uKSA9PiB7XG4gICAgY2hhbXBpb24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgY2hhbXBpb24uY2xhc3NMaXN0LnJlbW92ZSgnc2hvd24nKTtcbiAgfTtcblxuICBjb25zdCBmaWx0ZXJCeUxhbmUgPSBhc3luYyAoY2xpY2tlZExhbmUsIGFsbENoYW1waW9uU3RhdHMpID0+IHtcbiAgICBjbGVhckNoYW1waW9uc1NlY3Rpb24oKTtcbiAgICBjb25zdCBjaGFtcGlvbnNTZWN0aW9uID0gYXdhaXQgcmVuZGVyQWxsQ2hhbXBpb25zKGFsbENoYW1waW9uU3RhdHMpO1xuICAgIGNoYW1waW9uc1NlY3Rpb24uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIGNvbnN0IGFsbENoYW1waW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFtcGlvbi1jb250YWluZXInKTtcbiAgICBpZiAoY2xpY2tlZExhbmUgPT09ICdhbGwnKSB7XG4gICAgICBhbGxDaGFtcGlvbnMuZm9yRWFjaCgoY2hhbXBpb24pID0+IHtcbiAgICAgICAgc2hvd0NoYW1waW9uKGNoYW1waW9uKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZXN1bHRzID0gW107XG4gICAgICBhbGxDaGFtcGlvbnMuZm9yRWFjaCgoY2hhbXBpb24pID0+IHtcbiAgICAgICAgY29uc3QgY2hhbXBpb25JZCA9IGNoYW1waW9uLmRhdGFzZXQuaWQ7XG4gICAgICAgIHJlc3VsdHMucHVzaChnZXRDaGFtcGlvblN0YXRzKGNoYW1waW9uSWQpKTtcbiAgICAgIH0pO1xuICAgICAgY29uc3QgY2hhbXBpb25TdGF0cyA9IGF3YWl0IFByb21pc2UuYWxsKHJlc3VsdHMpO1xuICAgICAgY2hhbXBpb25TdGF0cy5mb3JFYWNoKChjaGFtcGlvbikgPT4ge1xuICAgICAgICBjb25zdCBjaGFtcGlvbkxhbmUgPSBjaGFtcGlvbi5sYW5lO1xuICAgICAgICBjb25zdCBjaGFtcGlvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD0ke2NoYW1waW9uLmNoYW1waW9uSWR9XWApO1xuICAgICAgICBpZiAoY2hhbXBpb25MYW5lLnRvTG93ZXJDYXNlKCkgIT09IGNsaWNrZWRMYW5lKSB7XG4gICAgICAgICAgaGlkZUNoYW1waW9uKGNoYW1waW9uRWxlbWVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2hvd0NoYW1waW9uKGNoYW1waW9uRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBmaWx0ZXJCeVJvbGUgPSAoYWN0aXZlUm9sZXMsIGFsbENoYW1waW9uRGV0YWlscykgPT4ge1xuICAgIGNvbnN0IGNoYW1waW9uRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhbXBpb24tY29udGFpbmVyJyk7XG5cbiAgICBjaGFtcGlvbkVsZW1lbnRzLmZvckVhY2goKGNoYW1waW9uKSA9PiB7XG4gICAgICBsZXQgcm9sZU1hdGNoRm91bmQgPSBmYWxzZTtcbiAgICAgIGFjdGl2ZVJvbGVzLmZvckVhY2goKHJvbGUpID0+IHtcbiAgICAgICAgY29uc3QgY2hhbXBpb25Sb2xlcyA9IGFsbENoYW1waW9uRGV0YWlsc1tjaGFtcGlvbi5kYXRhc2V0LmlkXS50YWdzO1xuICAgICAgICBjaGFtcGlvblJvbGVzLmZvckVhY2goKGNoYW1waW9uUm9sZSkgPT4ge1xuICAgICAgICAgIGlmIChjaGFtcGlvblJvbGUudG9Mb3dlckNhc2UoKSA9PT0gcm9sZSkge1xuICAgICAgICAgICAgcm9sZU1hdGNoRm91bmQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIGlmICghcm9sZU1hdGNoRm91bmQpIHtcbiAgICAgICAgaGlkZUNoYW1waW9uKGNoYW1waW9uKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBjYXRlZ29yaXNlRGlmZmljdWx0eU51bSA9IChkaWZmaWN1bHR5TnVtKSA9PiB7XG4gICAgaWYgKGRpZmZpY3VsdHlOdW0gPD0gMykge1xuICAgICAgcmV0dXJuICdsb3cnO1xuICAgIH1cblxuICAgIGlmIChkaWZmaWN1bHR5TnVtIDw9IDYpIHtcbiAgICAgIHJldHVybiAnbWVkaXVtJztcbiAgICB9XG5cbiAgICByZXR1cm4gJ2hpZ2gnO1xuICB9O1xuXG4gIGNvbnN0IGZpbHRlckJ5RGlmZmljdWx0eSA9IGFzeW5jIChhY3RpdmVEaWZmaWN1bHRpZXMsIGFsbENoYW1waW9uRGV0YWlscykgPT4ge1xuICAgIGNvbnN0IGNoYW1waW9uRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhbXBpb24tY29udGFpbmVyJyk7XG5cbiAgICBjaGFtcGlvbkVsZW1lbnRzLmZvckVhY2goKGNoYW1waW9uKSA9PiB7XG4gICAgICBsZXQgZGlmZmljdWx0eU1hdGNoRm91bmQgPSBmYWxzZTtcbiAgICAgIGFjdGl2ZURpZmZpY3VsdGllcy5mb3JFYWNoKChkaWZmaWN1bHR5KSA9PiB7XG4gICAgICAgIGNvbnN0IGNoYW1waW9uRGlmZmljdWx0eU51bSA9IGFsbENoYW1waW9uRGV0YWlsc1tjaGFtcGlvbi5kYXRhc2V0LmlkXS5pbmZvLmRpZmZpY3VsdHk7XG4gICAgICAgIGNvbnN0IGNoYW1waW9uRGlmZmljdWx0eSA9IGNhdGVnb3Jpc2VEaWZmaWN1bHR5TnVtKGNoYW1waW9uRGlmZmljdWx0eU51bSk7XG5cbiAgICAgICAgaWYgKGRpZmZpY3VsdHkudG9Mb3dlckNhc2UoKSA9PT0gY2hhbXBpb25EaWZmaWN1bHR5KSB7XG4gICAgICAgICAgZGlmZmljdWx0eU1hdGNoRm91bmQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmICghZGlmZmljdWx0eU1hdGNoRm91bmQpIHtcbiAgICAgICAgaGlkZUNoYW1waW9uKGNoYW1waW9uKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGZpbHRlckJ5TGFuZSxcbiAgICBmaWx0ZXJCeVJvbGUsXG4gICAgZmlsdGVyQnlEaWZmaWN1bHR5LFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhbXBpb25GaWx0ZXI7XG4iLCJpbXBvcnQgQ2hhbXBpb25zUGFnZUNvbnRyb2xsZXIgZnJvbSAnLi9jaGFtcGlvbnNQYWdlQ29udHJvbGxlcic7XG5cbmNvbnN0IFNlYXJjaGJhckNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBjb25zdCBzaG93QXV0b0NvbXBsZXRlTmFtZXMgPSAoc2VhcmNoQ29udGFpbmVyKSA9PiB7XG4gICAgY29uc3QgYXV0b0NvbXBsZXRlTmFtZXMgPSBzZWFyY2hDb250YWluZXIucXVlcnlTZWxlY3RvcignLmF1dG8tY29tcGxldGUtbmFtZXMnKTtcbiAgICBhdXRvQ29tcGxldGVOYW1lcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfTtcblxuICBjb25zdCBoaWRlQXV0b0NvbXBsZXRlTmFtZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgYXV0b0NvbXBsZXRlTmFtZUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmF1dG8tY29tcGxldGUtbmFtZXMnKTtcbiAgICBhdXRvQ29tcGxldGVOYW1lRWxlbWVudHMuZm9yRWFjaCgoYXV0b0NvbXBsZXRlTmFtZUVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGF1dG9Db21wbGV0ZU5hbWVzID0gYXV0b0NvbXBsZXRlTmFtZUVsZW1lbnQ7XG4gICAgICBhdXRvQ29tcGxldGVOYW1lcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHNlYXJjaGJhckZvY3VzSW5FdmVudCA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnc2VhcmNoJykge1xuICAgICAgY29uc3Qgc2VhcmNoQ29udGFpbmVyID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICBzaG93QXV0b0NvbXBsZXRlTmFtZXMoc2VhcmNoQ29udGFpbmVyKTtcbiAgICAgIGV2ZW50LnRhcmdldC5mb2N1cygpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZWFyY2hiYXJGb2N1c291dEV2ZW50ID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKCFldmVudC5yZWxhdGVkVGFyZ2V0IHx8IChldmVudC5yZWxhdGVkVGFyZ2V0LmNsYXNzTmFtZSAhPT0gJ2F1dG8tY29tcGxldGUtbmFtZS13cmFwcGVyJyAmJiBldmVudC5yZWxhdGVkVGFyZ2V0LmNsYXNzTmFtZSAhPT0gJ3NlYXJjaCcpKSB7XG4gICAgICBoaWRlQXV0b0NvbXBsZXRlTmFtZXMoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2VhcmNoQmFySW5wdXRFdmVudCA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnc2VhcmNoJykge1xuICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgIGNvbnN0IGF1dG9Db21wbGV0ZU5hbWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmF1dG8tY29tcGxldGUtbmFtZScpO1xuICAgICAgYXV0b0NvbXBsZXRlTmFtZXMuZm9yRWFjaCgoYXV0b0NvbXBsZXRlTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBuYW1lID0gYXV0b0NvbXBsZXRlTmFtZTtcbiAgICAgICAgaWYgKG5hbWUuaWQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgICAgbmFtZS5wYXJlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5hbWUucGFyZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2VhcmNoYmFyS2V5ZG93bkV2ZW50cyA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGlmICgoZXZlbnQua2V5ID09PSAnQXJyb3dEb3duJyB8fCBldmVudC5rZXkgPT09ICdBcnJvd1VwJykgJiYgZXZlbnQudGFyZ2V0ICE9PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykpIHtcbiAgICAgIGxldCB7IGFjdGl2ZUVsZW1lbnQgfSA9IGRvY3VtZW50O1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgbGV0IGdvVG9TdGFydDtcbiAgICAgIGNvbnN0IGFjdGlvbiA9IHtcbiAgICAgICAgQXJyb3dVcDogJ3ByZXZpb3VzJywgQXJyb3dEb3duOiAnbmV4dCcsXG4gICAgICB9O1xuXG4gICAgICBpZiAoYWN0aXZlRWxlbWVudC5jbGFzc05hbWUgPT09ICdzZWFyY2gnICYmIGV2ZW50LmtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgICAgYWN0aXZlRWxlbWVudCA9IGFjdGl2ZUVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICAvKiBTa2lwcyBhdXRvY29tcGxldGUgbmFtZXMgd2hpY2ggYXJlIGN1cnJlbnRseSBub3QgZGlzcGxheWVkICovXG4gICAgICAgIHdoaWxlIChhY3RpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgPSBhY3RpdmVFbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgfVxuICAgICAgICBhY3RpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY3RpdmVFbGVtZW50ID0gYWN0aXZlRWxlbWVudFtgJHthY3Rpb25bZXZlbnQua2V5XX1FbGVtZW50U2libGluZ2BdO1xuICAgICAgICB3aGlsZSAoYWN0aXZlRWxlbWVudCAmJiBhY3RpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgPSBhY3RpdmVFbGVtZW50W2Ake2FjdGlvbltldmVudC5rZXldfUVsZW1lbnRTaWJsaW5nYF07XG4gICAgICAgIH1cbiAgICAgICAgLyogQ2hlY2tzIHdoaWNoIHNlYXJjaCBiYXIgZHJvcGRvd24gaXMgY3VycmVudGx5IGRpc3BsYXllZCAqL1xuICAgICAgICBjb25zdCBhdXRvQ29tcGxldGVOYW1lRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXV0by1jb21wbGV0ZS1uYW1lcycpO1xuICAgICAgICBjb25zdCBhdXRvQ29tcGxldGVOYW1lcyA9IEFycmF5LmZyb20oYXV0b0NvbXBsZXRlTmFtZUVsZW1lbnRzKS5maWx0ZXIoXG4gICAgICAgICAgKGF1dG9Db21wbGV0ZU5hbWVFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc1Nob3dpbmcgPSBhdXRvQ29tcGxldGVOYW1lRWxlbWVudC5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snO1xuICAgICAgICAgICAgcmV0dXJuIGlzU2hvd2luZztcbiAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgICAgICBpZiAoYXV0b0NvbXBsZXRlTmFtZXNbMF0gIT09IHVuZGVmaW5lZCAmJiAhYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgIC8qIFJldHVybnMgdG8gdGhlIHN0YXJ0IG9yIHRoZSBlbmQgb2YgdGhlIGRyb3Bkb3duIHdoZW4gYW4gYXJyb3cga2V5IGlzIHByZXNzZWQgKi9cbiAgICAgICAgICBnb1RvU3RhcnQgPSBhY3Rpb25bZXZlbnQua2V5XSA9PT0gJ25leHQnIHx8IGV2ZW50LmtleSA9PT0gJ0hvbWUnO1xuICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgPSBhdXRvQ29tcGxldGVOYW1lc1swXS5jaGlsZHJlbltcbiAgICAgICAgICAgIGdvVG9TdGFydCA/IDAgOiBhdXRvQ29tcGxldGVOYW1lc1swXS5jaGlsZHJlbi5sZW5ndGggLSAxXG4gICAgICAgICAgXTtcbiAgICAgICAgICB3aGlsZSAoYWN0aXZlRWxlbWVudCAmJiBhY3RpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgICAgYWN0aXZlRWxlbWVudCA9IGFjdGl2ZUVsZW1lbnRbYCR7YWN0aW9uW2V2ZW50LmtleV19RWxlbWVudFNpYmxpbmdgXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICBhY3RpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBjb25zdCB7IGFjdGl2ZUVsZW1lbnQgfSA9IGRvY3VtZW50O1xuICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQgJiYgYWN0aXZlRWxlbWVudC5jbGFzc05hbWUgPT09ICdhdXRvLWNvbXBsZXRlLW5hbWUtd3JhcHBlcicpIHtcbiAgICAgICAgY29uc3Qgc2VhcmNoQ29udGFpbmVyQ2xhc3NOYW1lID0gYWN0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0WzFdO1xuICAgICAgICBjb25zdCBhdXRvQ29tcGxldGVOYW1lID0gYWN0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcblxuICAgICAgICAvKiBDaGVja3Mgd2hpY2ggcGFnZSB0aGUgc2VhcmNoIGJhciBpcyBvbiAqL1xuICAgICAgICBpZiAoc2VhcmNoQ29udGFpbmVyQ2xhc3NOYW1lID09PSAnZGVza3RvcC1zZWFyY2gtY29udGFpbmVyJ1xuICAgICAgICAgICAgfHwgc2VhcmNoQ29udGFpbmVyQ2xhc3NOYW1lID09PSAnbW9iaWxlLXNlYXJjaC1jb250YWluZXInKSB7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NoYW1waW9uSWQnLCBhdXRvQ29tcGxldGVOYW1lLmRhdGFzZXQuY2hhbXBpb25JZCk7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnY2hhbXBpb25zLmh0bWwnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGF3YWl0IENoYW1waW9uc1BhZ2VDb250cm9sbGVyLmRpc3BsYXlDaGFtcGlvbk1vZGFsKGF1dG9Db21wbGV0ZU5hbWUuZGF0YXNldC5jaGFtcGlvbklkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZWFyY2hiYXJDbGlja0V2ZW50cyA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGNvbnN0IGNsaWNrQXV0b0NvbXBsZXRlTmFtZSA9IGFzeW5jIChzZWFyY2hDb250YWluZXJDbGFzc05hbWUsIGF1dG9Db21wbGV0ZU5hbWUpID0+IHtcbiAgICAgIGlmIChzZWFyY2hDb250YWluZXJDbGFzc05hbWUgPT09ICdkZXNrdG9wLXNlYXJjaC1jb250YWluZXInXG4gICAgICB8fCBzZWFyY2hDb250YWluZXJDbGFzc05hbWUgPT09ICdtb2JpbGUtc2VhcmNoLWNvbnRhaW5lcicpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NoYW1waW9uSWQnLCBhdXRvQ29tcGxldGVOYW1lLmRhdGFzZXQuY2hhbXBpb25JZCk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ2NoYW1waW9ucy5odG1sJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF3YWl0IENoYW1waW9uc1BhZ2VDb250cm9sbGVyLmRpc3BsYXlDaGFtcGlvbk1vZGFsKGF1dG9Db21wbGV0ZU5hbWUuZGF0YXNldC5jaGFtcGlvbklkKTtcbiAgICAgICAgY29uc3QgYXV0b0NvbXBsZXRlTmFtZUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmF1dG8tY29tcGxldGUtbmFtZXMnKTtcbiAgICAgICAgYXV0b0NvbXBsZXRlTmFtZUVsZW1lbnRzLmZvckVhY2goKGF1dG9Db21wbGV0ZU5hbWVFbGVtZW50KSA9PiB7XG4gICAgICAgICAgY29uc3QgYXV0b0NvbXBsZXRlTmFtZXMgPSBhdXRvQ29tcGxldGVOYW1lRWxlbWVudDtcbiAgICAgICAgICBhdXRvQ29tcGxldGVOYW1lcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IHNlYXJjaENvbnRhaW5lciA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdhdXRvLWNvbXBsZXRlLW5hbWUtd3JhcHBlcicpIHtcbiAgICAgIGNvbnN0IHNlYXJjaENvbnRhaW5lckNsYXNzTmFtZSA9IHNlYXJjaENvbnRhaW5lci5jbGFzc0xpc3RbMV07XG4gICAgICBjb25zdCBhdXRvQ29tcGxldGVOYW1lID0gZXZlbnQudGFyZ2V0LmZpcnN0Q2hpbGQ7XG4gICAgICBjbGlja0F1dG9Db21wbGV0ZU5hbWUoc2VhcmNoQ29udGFpbmVyQ2xhc3NOYW1lLCBhdXRvQ29tcGxldGVOYW1lKTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2F1dG8tY29tcGxldGUtbmFtZScpIHtcbiAgICAgIGNvbnN0IHNlYXJjaENvbnRhaW5lckNsYXNzTmFtZSA9IHNlYXJjaENvbnRhaW5lci5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdFsxXTtcbiAgICAgIGNvbnN0IGF1dG9Db21wbGV0ZU5hbWUgPSBldmVudC50YXJnZXQ7XG4gICAgICBjbGlja0F1dG9Db21wbGV0ZU5hbWUoc2VhcmNoQ29udGFpbmVyQ2xhc3NOYW1lLCBhdXRvQ29tcGxldGVOYW1lKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2VhcmNoQ29udGFpbmVyTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIC8vIGNvbnN0IHNlYXJjaENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtY29udGFpbmVyJyk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIHNlYXJjaGJhckZvY3VzSW5FdmVudCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBzZWFyY2hiYXJGb2N1c291dEV2ZW50KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHNlYXJjaEJhcklucHV0RXZlbnQpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBzZWFyY2hiYXJLZXlkb3duRXZlbnRzKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlYXJjaGJhckNsaWNrRXZlbnRzKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHNlYXJjaENvbnRhaW5lckxpc3RlbmVycyxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaGJhckNvbnRyb2xsZXI7XG4iLCIvLyBpbXBvcnQgeyBnZXRBbGxDaGFtcGlvblN0YXRzIH0gZnJvbSAnLi4vY2hhbXBpb25EYXRhL2dldEFsbENoYW1waW9ucyc7XG5pbXBvcnQgeyBjcmVhdGVDaGFtcGlvbkNvbnRhaW5lciB9IGZyb20gJy4uL3RlbXBsYXRlcy9yZW5kZXJIZWxwZXJzJztcblxuY29uc3QgU29ydENoYW1waW9ucyA9ICgoKSA9PiB7XG4gIGNvbnN0IGNsZWFyQ2hhbXBpb25zU2VjdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBjaGFtcGlvbnNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW1waW9ucy1zZWN0aW9uJyk7XG4gICAgY2hhbXBpb25zU2VjdGlvbi5zdHlsZS52aXNpYmxpdHkgPSAnaGlkZGVuJztcbiAgICBjaGFtcGlvbnNTZWN0aW9uLnRleHRDb250ZW50ID0gJyc7XG4gIH07XG5cbiAgY29uc3QgcmVjcmVhdGVDaGFtcGlvbnNTZWN0aW9uID0gKGNoYW1waW9ucykgPT4ge1xuICAgIGNvbnN0IGNoYW1waW9uc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb25zLXNlY3Rpb24nKTtcbiAgICBjaGFtcGlvbnMuZm9yRWFjaCgoY2hhbXBpb24pID0+IHtcbiAgICAgIGNyZWF0ZUNoYW1waW9uQ29udGFpbmVyKGNoYW1waW9uLCBjaGFtcGlvbnNTZWN0aW9uKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBmaWx0ZXJDaGFtcGlvbnMgPSAoYWxsQ2hhbXBpb25TdGF0cykgPT4ge1xuICAgIC8vIGNvbnN0IGFsbENoYW1waW9uU3RhdHMgPSBhd2FpdCBnZXRBbGxDaGFtcGlvblN0YXRzKCk7XG4gICAgY29uc3QgZmlsdGVyZWRDaGFtcGlvblN0YXRzID0gYWxsQ2hhbXBpb25TdGF0cy5maWx0ZXIoKGNoYW1waW9uU3RhdHMpID0+IHtcbiAgICAgIGNvbnN0IGNoYW1waW9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPSR7Y2hhbXBpb25TdGF0cy5pZH1dYCk7XG4gICAgICByZXR1cm4gY2hhbXBpb25FbGVtZW50LmNsYXNzTmFtZSA9PT0gJ2NoYW1waW9uLWNvbnRhaW5lciBzaG93bic7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmlsdGVyZWRDaGFtcGlvblN0YXRzO1xuICB9O1xuXG4gIGNvbnN0IHNvcnRDaGFtcGlvbnNCeVdpbnJhdGUgPSAoYWxsQ2hhbXBpb25TdGF0cykgPT4ge1xuICAgIGNvbnN0IGZpbHRlcmVkQ2hhbXBpb25TdGF0cyA9IGZpbHRlckNoYW1waW9ucyhhbGxDaGFtcGlvblN0YXRzKTtcbiAgICBjb25zdCBmaWx0ZXJlZENoYW1waW9uc1NvcnRlZCA9IGZpbHRlcmVkQ2hhbXBpb25TdGF0cy5zb3J0KChhLCBiKSA9PiBiLndpblJhdGUgLSBhLndpblJhdGUpO1xuICAgIGNsZWFyQ2hhbXBpb25zU2VjdGlvbigpO1xuICAgIHJlY3JlYXRlQ2hhbXBpb25zU2VjdGlvbihmaWx0ZXJlZENoYW1waW9uc1NvcnRlZCk7XG4gICAgcmV0dXJuIGZpbHRlcmVkQ2hhbXBpb25zU29ydGVkO1xuICB9O1xuXG4gIGNvbnN0IHNvcnRDaGFtcGlvbnNCeVBpY2tyYXRlID0gKGFsbENoYW1waW9uU3RhdHMpID0+IHtcbiAgICBjb25zdCBmaWx0ZXJlZENoYW1waW9uU3RhdHMgPSBmaWx0ZXJDaGFtcGlvbnMoYWxsQ2hhbXBpb25TdGF0cyk7XG4gICAgY29uc3QgZmlsdGVyZWRDaGFtcGlvbnNTb3J0ZWQgPSBmaWx0ZXJlZENoYW1waW9uU3RhdHMuc29ydCgoYSwgYikgPT4gYi5waWNrUmF0ZSAtIGEucGlja1JhdGUpO1xuICAgIGNsZWFyQ2hhbXBpb25zU2VjdGlvbigpO1xuICAgIHJlY3JlYXRlQ2hhbXBpb25zU2VjdGlvbihmaWx0ZXJlZENoYW1waW9uc1NvcnRlZCk7XG4gICAgcmV0dXJuIGZpbHRlcmVkQ2hhbXBpb25zU29ydGVkO1xuICB9O1xuXG4gIGNvbnN0IHNvcnRDaGFtcGlvbnNCeURhbWFnZURvbmUgPSAoYWxsQ2hhbXBpb25TdGF0cykgPT4ge1xuICAgIGNvbnN0IGZpbHRlcmVkQ2hhbXBpb25TdGF0cyA9IGZpbHRlckNoYW1waW9ucyhhbGxDaGFtcGlvblN0YXRzKTtcblxuICAgIGNvbnN0IGZpbHRlcmVkQ2hhbXBpb25zU29ydGVkID0gZmlsdGVyZWRDaGFtcGlvblN0YXRzLnNvcnQoXG4gICAgICAoYSwgYikgPT4gYi5kYW1hZ2VQZXJNYXRjaC50b3RhbERhbWFnZS52YWx1ZSAtIGEuZGFtYWdlUGVyTWF0Y2gudG90YWxEYW1hZ2UudmFsdWUsXG4gICAgKTtcbiAgICBjbGVhckNoYW1waW9uc1NlY3Rpb24oKTtcbiAgICByZWNyZWF0ZUNoYW1waW9uc1NlY3Rpb24oZmlsdGVyZWRDaGFtcGlvbnNTb3J0ZWQpO1xuICAgIHJldHVybiBmaWx0ZXJlZENoYW1waW9uc1NvcnRlZDtcbiAgfTtcblxuICBjb25zdCBzb3J0QnlEZWZhdWx0T3JkZXIgPSAoYWxsQ2hhbXBpb25TdGF0cykgPT4ge1xuICAgIC8vIGNvbnN0IGFsbENoYW1waW9uU3RhdHMgPSBhd2FpdCBnZXRBbGxDaGFtcGlvblN0YXRzKCk7XG4gICAgY29uc3QgZmlsdGVyZWRDaGFtcGlvblN0YXRzID0gYWxsQ2hhbXBpb25TdGF0cy5maWx0ZXIoKGNoYW1waW9uU3RhdHMpID0+IHtcbiAgICAgIGNvbnN0IGNoYW1waW9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPSR7Y2hhbXBpb25TdGF0cy5pZH1dYCk7XG4gICAgICBpZiAoY2hhbXBpb25FbGVtZW50ID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjaGFtcGlvbkVsZW1lbnQuY2xhc3NOYW1lID09PSAnY2hhbXBpb24tY29udGFpbmVyIHNob3duJztcbiAgICB9KTtcbiAgICBjbGVhckNoYW1waW9uc1NlY3Rpb24oKTtcbiAgICByZWNyZWF0ZUNoYW1waW9uc1NlY3Rpb24oZmlsdGVyZWRDaGFtcGlvblN0YXRzKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHNvcnRDaGFtcGlvbnNCeVdpbnJhdGUsXG4gICAgc29ydENoYW1waW9uc0J5UGlja3JhdGUsXG4gICAgc29ydENoYW1waW9uc0J5RGFtYWdlRG9uZSxcbiAgICBzb3J0QnlEZWZhdWx0T3JkZXIsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBTb3J0Q2hhbXBpb25zO1xuIiwiY29uc3QgZmV0Y2hDaGFtcGlvbkRldGFpbHMgPSBhc3luYyAoY2hhbXBpb25JZCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vMTEuMjAuMS9kYXRhL2VuX1VTL2NoYW1waW9uLyR7Y2hhbXBpb25JZH0uanNvbmAsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICBjb25zdCBjaGFtcGlvbnMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IGNoYW1waW9uRGV0YWlscyA9IGNoYW1waW9ucy5kYXRhW2NoYW1waW9uSWRdO1xuXG4gIHJldHVybiBjaGFtcGlvbkRldGFpbHM7XG59O1xuXG5jb25zdCBnZXRDaGFtcGlvblBhc3NpdmVzID0gKGNoYW1waW9uRGV0YWlscykgPT4ge1xuICBjb25zdCBwYXNzaXZlRGF0YSA9IGNoYW1waW9uRGV0YWlscy5wYXNzaXZlO1xuICBjb25zdCBwYXNzaXZlTmFtZSA9IHBhc3NpdmVEYXRhLm5hbWU7XG4gIGNvbnN0IHBhc3NpdmVEZXNjcmlwdGlvbiA9IHBhc3NpdmVEYXRhLmRlc2NyaXB0aW9uO1xuICBjb25zdCBwYXNzaXZlSWQgPSBwYXNzaXZlRGF0YS5pbWFnZS5mdWxsO1xuICBjb25zdCBwYXNzaXZlSW1nVXJsID0gYGh0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi8xMS4yMS4xL2ltZy9wYXNzaXZlLyR7cGFzc2l2ZUlkfWA7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXNzaXZlTmFtZSxcbiAgICBwYXNzaXZlRGVzY3JpcHRpb24sXG4gICAgcGFzc2l2ZUltZ1VybCxcbiAgfTtcbn07XG5cbmNvbnN0IGdldENoYW1waW9uU3BlbGxzID0gKGNoYW1waW9uRGV0YWlscykgPT4ge1xuICBjb25zdCBzcGVsbHNEYXRhID0gY2hhbXBpb25EZXRhaWxzLnNwZWxscztcbiAgY29uc3Qgc3BlbGxzID0gW107XG5cbiAgc3BlbGxzRGF0YS5mb3JFYWNoKChzcGVsbCkgPT4ge1xuICAgIGNvbnN0IHNwZWxsT2JqZWN0ID0ge1xuICAgICAgbmFtZTogc3BlbGwubmFtZSxcbiAgICAgIGlkOiBzcGVsbC5pZCxcbiAgICAgIGRlc2NyaXB0aW9uOiBzcGVsbC5kZXNjcmlwdGlvbixcbiAgICAgIGNvc3RCdXJuOiBzcGVsbC5jb3N0QnVybixcbiAgICAgIGNvc3RUeXBlOiBzcGVsbC5jb3N0VHlwZSxcbiAgICAgIGNvb2xkb3duOiBzcGVsbC5jb29sZG93bkJ1cm4sXG4gICAgICBpbWdVcmw6IGBodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vMTEuMjEuMS9pbWcvc3BlbGwvJHtzcGVsbC5pZH0ucG5nYCxcbiAgICB9O1xuICAgIHNwZWxscy5wdXNoKHNwZWxsT2JqZWN0KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHNwZWxscztcbn07XG5cbmNvbnN0IGdldENoYW1waW9uRGV0YWlscyA9IGFzeW5jIChjaGFtcGlvbklkKSA9PiB7XG4gIGNvbnN0IGNoYW1waW9uRGV0YWlscyA9IGF3YWl0IGZldGNoQ2hhbXBpb25EZXRhaWxzKGNoYW1waW9uSWQpO1xuICBjb25zdCBjaGFtcGlvblBhc3NpdmUgPSBnZXRDaGFtcGlvblBhc3NpdmVzKGNoYW1waW9uRGV0YWlscyk7XG4gIGNvbnN0IHNwZWxscyA9IGdldENoYW1waW9uU3BlbGxzKGNoYW1waW9uRGV0YWlscyk7XG5cbiAgLy8gTWFrZSBmaXJzdCBsZXR0ZXIgb2YgdGhlIGNoYW1waW9uIHRpdGxlIGEgY2FwaXRhbCBsZXR0ZXIuXG4gIGNvbnN0IGNoYW1waW9uVGl0bGUgPSBjaGFtcGlvbkRldGFpbHMudGl0bGUucmVwbGFjZShcbiAgICBjaGFtcGlvbkRldGFpbHMudGl0bGVbMF0sIGNoYW1waW9uRGV0YWlscy50aXRsZVswXS50b1VwcGVyQ2FzZSgpLFxuICApO1xuXG4gIGlmIChjaGFtcGlvbkRldGFpbHMucGFydHlwZSA9PT0gJ05vbmUnKSB7XG4gICAgY2hhbXBpb25EZXRhaWxzLnBhcnR5cGUgPSAnTWFuYWxlc3MnO1xuICB9XG5cbiAgaWYgKGNoYW1waW9uRGV0YWlscy5pZCA9PT0gJ0Frc2hhbicpIHtcbiAgICBjaGFtcGlvbkRldGFpbHMuYWxseXRpcHNbMF0gPSAnWW91IGNhbuKAmXQgdXNlIGNvbnN1bWFibGVzIGxpa2UgcG90aW9ucyBkdXJpbmcgeW91ciBDb21ldXBwYW5jZSwgbWFrZSBzdXJlIHRvIHVzZSB0aGVtIGJlZm9yZSBjaGFubmVsaW5nLic7XG4gIH1cblxuICBpZiAoY2hhbXBpb25EZXRhaWxzLmlkID09PSAnVmV4Jykge1xuICAgIGNoYW1waW9uRGV0YWlscy5hbGx5dGlwcy5wdXNoKCdWZXggaXMgZ3JlYXQgYXQgZGl2aW5nIGludG8gdGhlIGJhY2tsaW5lLCBidXQgaGVyIGVzY2FwZSBwb3RlbnRpYWwgaXMgbG93IHNvIHRpbWluZyBpcyBrZXkuJyk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5hbWU6IGNoYW1waW9uRGV0YWlscy5uYW1lLFxuICAgIGlkOiBjaGFtcGlvbkRldGFpbHMuaWQsXG4gICAgdGl0bGU6IGNoYW1waW9uVGl0bGUsXG4gICAgbG9yZTogY2hhbXBpb25EZXRhaWxzLmxvcmUsXG4gICAgcm9sZXM6IGNoYW1waW9uRGV0YWlscy50YWdzLFxuICAgIHNraW5zOiBjaGFtcGlvbkRldGFpbHMuc2tpbnMsXG4gICAgcmVzb3VyY2U6IGNoYW1waW9uRGV0YWlscy5wYXJ0eXBlLFxuICAgIHBhc3NpdmU6IGNoYW1waW9uUGFzc2l2ZSxcbiAgICBzcGVsbHMsXG4gICAgdGlwczogY2hhbXBpb25EZXRhaWxzLmFsbHl0aXBzLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0Q2hhbXBpb25EZXRhaWxzO1xuIiwiY29uc3QgZmV0Y2hDaGFtcGlvblN0YXRzID0gYXN5bmMgKGNoYW1waW9uSWQpID0+IHtcbiAgLyogUmVsYXRpdmUgdXJscyBhcmUgdXNlZCBmb3Igd2hlbiB0aGUgYXBwIGlzIGluIHByb2R1Y3Rpb24gYW5kIGxvY2FsaG9zdCB1cmwgZm9yIGRldmVsb3BtZW50ICovXG4gIGNvbnN0IGRldlVybCA9ICdodHRwOi8vMTI3LjAuMC4xOjU1MDAvZnJvbnRlbmQvZGlzdC9jaGFtcGlvbnMuaHRtbCc7XG4gIGNvbnN0IHJlc3BvbnNlID0gd2luZG93LmxvY2F0aW9uLmhyZWYgPT09IGRldlVybFxuICAgID8gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS8ke2NoYW1waW9uSWR9YCwgeyBtb2RlOiAnY29ycycgfSlcbiAgICA6IGF3YWl0IGZldGNoKGAke2NoYW1waW9uSWR9YCwgeyBtb2RlOiAnY29ycycgfSk7XG4gIGNvbnN0IGNoYW1waW9uU3RhdHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIGNoYW1waW9uU3RhdHM7XG59O1xuXG5jb25zdCBnZXRDaGFtcGlvblN0YXRzID0gYXN5bmMgKGNoYW1waW9uSWQpID0+IHtcbiAgY29uc3QgY2hhbXBpb25TdGF0cyA9IGF3YWl0IGZldGNoQ2hhbXBpb25TdGF0cyhjaGFtcGlvbklkKTtcblxuICBjb25zdCB3aW5SYXRlID0gY2hhbXBpb25TdGF0cy53aW5SYXRlLnRvRml4ZWQoMik7XG4gIGNvbnN0IHBpY2tSYXRlID0gY2hhbXBpb25TdGF0cy5waWNrUmF0ZS50b0ZpeGVkKDIpO1xuICBjb25zdCBsYW5lID0gY2hhbXBpb25TdGF0cy5sYW5lWzBdICsgY2hhbXBpb25TdGF0cy5sYW5lLnN1YnN0cmluZygxKS50b0xvd2VyQ2FzZSgpO1xuXG4gIHJldHVybiB7XG4gICAgY2hhbXBpb25JZCxcbiAgICBrZGE6IGNoYW1waW9uU3RhdHMua2RhUmF0aW8sXG4gICAgZGFtYWdlUGVyTWF0Y2g6IGNoYW1waW9uU3RhdHMuZGFtYWdlUGVyTWF0Y2gsXG4gICAgaXRlbVNldHM6IGNoYW1waW9uU3RhdHMuaXRlbUNob2ljZXMuc2xpY2UoMSksXG4gICAgYmVzdE1hdGNoVXBzOiBjaGFtcGlvblN0YXRzLm1hdGNoVXBzLmJlc3RNYXRjaFVwcyxcbiAgICB3b3JzdE1hdGNoVXBzOiBjaGFtcGlvblN0YXRzLm1hdGNoVXBzLndvcnN0TWF0Y2hVcHMsXG4gICAgd2luUmF0ZSxcbiAgICBwaWNrUmF0ZSxcbiAgICBsYW5lLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0Q2hhbXBpb25TdGF0cztcbiIsImNvbnN0IGdldEFsbENoYW1waW9uRGV0YWlscyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgdmVyc2lvbnNSZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9hcGkvdmVyc2lvbnMuanNvbicpO1xuICBjb25zdCB2ZXJzaW9ucyA9IGF3YWl0IHZlcnNpb25zUmVzcG9uc2UuanNvbigpO1xuICBjb25zdCBsYXRlc3RWZXJzaW9uID0gdmVyc2lvbnNbMF07XG4gIGNvbnN0IGNoYW1waW9uc1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi8ke2xhdGVzdFZlcnNpb259L2RhdGEvZW5fVVMvY2hhbXBpb24uanNvbmApO1xuICBjb25zdCBhbGxDaGFtcGlvbnMgPSBhd2FpdCBjaGFtcGlvbnNSZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIGFsbENoYW1waW9ucy5kYXRhO1xufTtcblxuY29uc3QgZ2V0QWxsQ2hhbXBpb25TdGF0cyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZGV2VXJsID0gJ2h0dHA6Ly8xMjcuMC4wLjE6NTUwMC9mcm9udGVuZC9kaXN0L2NoYW1waW9ucy5odG1sJztcbiAgY29uc3QgcmVzcG9uc2UgPSB3aW5kb3cubG9jYXRpb24uaHJlZiA9PT0gZGV2VXJsXG4gICAgPyBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2NoYW1waW9ucycsIHsgbW9kZTogJ2NvcnMnIH0pXG4gICAgOiBhd2FpdCBmZXRjaCgnY2hhbXBpb25zJywgeyBtb2RlOiAnY29ycycgfSk7XG4gIGNvbnN0IGFsbENoYW1waW9uU3RhdHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIGFsbENoYW1waW9uU3RhdHM7XG59O1xuXG5leHBvcnQge1xuICBnZXRBbGxDaGFtcGlvbkRldGFpbHMsXG4gIGdldEFsbENoYW1waW9uU3RhdHMsXG59O1xuIiwiLy8gRmV0Y2hlcyBhbGwgdGhlIGl0ZW1zIGEgY2hhbXBpb24gY2FuIGJ1eSBpbiBhIG1hdGNoXG5jb25zdCBmZXRjaEFsbEl0ZW1zID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB2ZXJzaW9uUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vYXBpL3ZlcnNpb25zLmpzb24nLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgY29uc3QgdmVyc2lvbnMgPSBhd2FpdCB2ZXJzaW9uUmVzcG9uc2UuanNvbigpO1xuICBjb25zdCBsYXRlc3RWZXJzaW9uID0gdmVyc2lvbnNbMF07XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi8ke2xhdGVzdFZlcnNpb259L2RhdGEvZW5fVVMvaXRlbS5qc29uYCk7XG4gIGNvbnN0IGFsbEl0ZW1zID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIHJldHVybiBhbGxJdGVtcy5kYXRhO1xufTtcblxuY2xhc3MgSXRlbUluZm8ge1xuICBjb25zdHJ1Y3RvcihpdGVtSWQpIHtcbiAgICB0aGlzLml0ZW1JZCA9IGl0ZW1JZDtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBnZXRBbGxJdGVtcygpIHtcbiAgICBjb25zdCBhbGxJdGVtcyA9IGZldGNoQWxsSXRlbXMoKTtcbiAgICByZXR1cm4gYWxsSXRlbXM7XG4gIH1cblxuICBnZXRJdGVtRGV0YWlscyhhbGxJdGVtcykge1xuICAgIGNvbnN0IGl0ZW1EZXRhaWxzID0gYWxsSXRlbXNbdGhpcy5pdGVtSWRdO1xuICAgIHJldHVybiBpdGVtRGV0YWlscztcbiAgfVxuXG4gIGdldEl0ZW1JbWFnZShhbGxJdGVtcykge1xuICAgIGNvbnN0IGl0ZW1EZXRhaWxzID0gdGhpcy5nZXRJdGVtRGV0YWlscyhhbGxJdGVtcyk7XG4gICAgY29uc3QgaXRlbUltYWdlSWQgPSBpdGVtRGV0YWlscy5pbWFnZS5mdWxsO1xuICAgIGNvbnN0IGltYWdlVXJsID0gYGh0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi8xMS4yMi4xL2ltZy9pdGVtLyR7aXRlbUltYWdlSWR9YDtcbiAgICByZXR1cm4gaW1hZ2VVcmw7XG4gIH1cblxuICAvLyBnZXRzIGluZm8gb24gdGhlIGl0ZW1zIHVzZWQgdG8gY3JlYXRlIHRoZSBpbnN0YW5jZSBpdGVtXG4gIGdldENvbXBvbmVudEl0ZW1zKGFsbEl0ZW1zKSB7XG4gICAgY29uc3QgaXRlbURldGFpbHMgPSB0aGlzLmdldEl0ZW1EZXRhaWxzKGFsbEl0ZW1zKTtcbiAgICBjb25zdCBjb21wb25lbnRJdGVtSWRzID0gaXRlbURldGFpbHMuZnJvbTtcbiAgICBpZiAoY29tcG9uZW50SXRlbUlkcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnN0IGNvbXBvbmVudEl0ZW1EZXRhaWxzID0gY29tcG9uZW50SXRlbUlkcy5tYXAoKGl0ZW1JZCkgPT4gKHtcbiAgICAgIG5hbWU6IGFsbEl0ZW1zW2l0ZW1JZF0ubmFtZSxcbiAgICAgIGltYWdlVXJsOiBgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLzExLjIyLjEvaW1nL2l0ZW0vJHtpdGVtSWR9LnBuZ2AsXG4gICAgICBjb3N0OiBhbGxJdGVtc1tpdGVtSWRdLmdvbGQudG90YWwsXG4gICAgfSkpO1xuICAgIHJldHVybiBjb21wb25lbnRJdGVtRGV0YWlscztcbiAgfVxuXG4gIGdldEl0ZW1JbmZvKGFsbEl0ZW1zKSB7XG4gICAgY29uc3QgaXRlbURldGFpbHMgPSB0aGlzLmdldEl0ZW1EZXRhaWxzKGFsbEl0ZW1zKTtcbiAgICBjb25zdCB7IG5hbWUgfSA9IGl0ZW1EZXRhaWxzO1xuICAgIGNvbnN0IHsgZGVzY3JpcHRpb24gfSA9IGl0ZW1EZXRhaWxzO1xuICAgIGNvbnN0IGNvc3QgPSBpdGVtRGV0YWlscy5nb2xkLnRvdGFsO1xuICAgIGNvbnN0IGltYWdlVXJsID0gdGhpcy5nZXRJdGVtSW1hZ2UoYWxsSXRlbXMpO1xuICAgIGNvbnN0IGNvbXBvbmVudEl0ZW1zID0gdGhpcy5nZXRDb21wb25lbnRJdGVtcyhhbGxJdGVtcyk7XG4gICAgY29uc3QgeyB0YWdzIH0gPSBpdGVtRGV0YWlscztcblxuICAgIHJldHVybiB7XG4gICAgICBuYW1lLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBjb3N0LFxuICAgICAgaW1hZ2VVcmwsXG4gICAgICBjb21wb25lbnRJdGVtcyxcbiAgICAgIHRhZ3MsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJdGVtSW5mbztcbiIsImltcG9ydCBFbGVtZW50Q3JlYXRpb24gZnJvbSAnLi9lbGVtZW50Q3JlYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcm9wZG93blNlY3Rpb24ge1xuICBzdGF0aWMgY3JlYXRlU2VjdGlvbigpIHtcbiAgICBjb25zdCBjaGFtcGlvbnNQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoYW1waW9ucy1wYWdlJyk7XG4gICAgY29uc3QgZmlsdGVyU29ydFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmaWx0ZXJTb3J0U2VjdGlvbi5jbGFzc05hbWUgPSAnZmlsdGVyLXNvcnQtc2VjdGlvbic7XG4gICAgY2hhbXBpb25zUGFnZS5pbnNlcnRCZWZvcmUoXG4gICAgICBmaWx0ZXJTb3J0U2VjdGlvbiwgY2hhbXBpb25zUGFnZS5sYXN0Q2hpbGQsXG4gICAgKTtcbiAgICByZXR1cm4gZmlsdGVyU29ydFNlY3Rpb247XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihkcm9wZG93bk5hbWUsIG9wdGlvbnNBcnJheSkge1xuICAgIHRoaXMuZHJvcGRvd25OYW1lID0gZHJvcGRvd25OYW1lO1xuICAgIHRoaXMub3B0aW9uc0FycmF5ID0gb3B0aW9uc0FycmF5O1xuICB9XG5cbiAgLyogdHlwZSB0YWtlcyBhIHN0cmluZyB1c2VkIGFzIGEgY2xhc3NOYW1lIHRvIHNob3cgaWYgdGhlIGRyb3Bkb3duIGlzIG11bHRpIG9yIHNpbmdsZSBzZWxlY3QgKi9cbiAgcmVuZGVyRHJvcGRvd24oZmlsdGVyU29ydFNlY3Rpb24sIHR5cGUpIHtcbiAgICBjb25zdCBkcm9wZG93biA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsIGAke3RoaXMuZHJvcGRvd25OYW1lfS1kcm9wZG93biBkcm9wZG93bmAsIGZpbHRlclNvcnRTZWN0aW9uKTtcbiAgICBjb25zdCBkcm9wZG93bkJ0biA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2J1dHRvbicsIGAke3RoaXMuZHJvcGRvd25OYW1lfS1kcm9wZG93bi1idG4gZHJvcGRvd24tYnRuYCwgZHJvcGRvd24pO1xuICAgIGRyb3Bkb3duQnRuLnRleHRDb250ZW50ID0gYCR7dGhpcy5kcm9wZG93bk5hbWVbMF0udG9VcHBlckNhc2UoKX0ke3RoaXMuZHJvcGRvd25OYW1lLnNsaWNlKDEpfWA7XG4gICAgY29uc3QgZHJvcGRvd25PcHRpb25zID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgYCR7dGhpcy5kcm9wZG93bk5hbWV9LWRyb3Bkb3duLW9wdGlvbnMgZHJvcGRvd24tb3B0aW9uc2AsIGRyb3Bkb3duKTtcblxuICAgIHRoaXMub3B0aW9uc0FycmF5LmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgY29uc3QgZHJvcGRvd25PcHRpb24gPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgYCR7b3B0aW9ufSAke3RoaXMuZHJvcGRvd25OYW1lfSAke3R5cGV9IGRyb3Bkb3duLW9wdGlvbmAsIGRyb3Bkb3duT3B0aW9ucyk7XG4gICAgICBkcm9wZG93bk9wdGlvbi50ZXh0Q29udGVudCA9IGAke29wdGlvblswXS50b1VwcGVyQ2FzZSgpfSR7b3B0aW9uLnNsaWNlKDEpfWA7XG4gICAgfSk7XG4gIH1cbn1cbiIsImNvbnN0IEVsZW1lbnRDcmVhdGlvbiA9ICgoKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcyA9ICh0YWcsIGNsYXNzTmFtZSwgcGFyZW50RWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUNoaWxkRWxlbWVudFdpdGhJZCA9ICh0YWcsIGlkLCBwYXJlbnRFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBlbGVtZW50LmlkID0gaWQ7XG4gICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzc0FuZElkID0gKHRhZywgY2xhc3NOYW1lLCBpZCwgcGFyZW50RWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgZWxlbWVudC5pZCA9IGlkO1xuICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVDaGlsZEltYWdlRWxlbWVudFdpdGhDbGFzcyA9IChjbGFzc05hbWUsIHBhcmVudEVsZW1lbnQsIHNyYywgYWx0KSA9PiB7XG4gICAgY29uc3QgaW1hZ2VFbGVtZW50ID0gY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdpbWcnLCBjbGFzc05hbWUsIHBhcmVudEVsZW1lbnQpO1xuICAgIGltYWdlRWxlbWVudC5zcmMgPSBzcmM7XG4gICAgaW1hZ2VFbGVtZW50LmFsdCA9IGFsdDtcblxuICAgIHJldHVybiBpbWFnZUVsZW1lbnQ7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MsXG4gICAgY3JlYXRlQ2hpbGRFbGVtZW50V2l0aElkLFxuICAgIGNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzc0FuZElkLFxuICAgIGNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgRWxlbWVudENyZWF0aW9uO1xuIiwiaW1wb3J0IHsgcmVuZGVySGVhZGVyRGV0YWlscywgaW1hZ2VzIH0gZnJvbSAnLi9yZW5kZXJIZWxwZXJzJztcbmltcG9ydCBFbGVtZW50Q3JlYXRpb24gZnJvbSAnLi4vaGVscGVycy9lbGVtZW50Q3JlYXRpb24nO1xuXG5jb25zdCBjaGFtcGlvbkRldGFpbHNNb2RhbCA9IGFzeW5jIChjaGFtcGlvbkRhdGEpID0+IHtcbiAgcmVuZGVySGVhZGVyRGV0YWlscyhjaGFtcGlvbkRhdGEsICdtYWluJyk7XG5cbiAgY29uc3QgY2hhbXBpb25Sb2xlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbi1yb2xlcycpO1xuICBjb25zdCB7IHJvbGVzIH0gPSBjaGFtcGlvbkRhdGE7XG4gIHJvbGVzLmZvckVhY2goKHJvbGUpID0+IHtcbiAgICBjb25zdCBjaGFtcGlvblJvbGUgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnY2hhbXBpb24tcm9sZScsIGNoYW1waW9uUm9sZXMpO1xuICAgIGNvbnN0IGNoYW1waW9uUm9sZU5hbWUgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2NoYW1waW9uLXJvbGUtbmFtZScsIGNoYW1waW9uUm9sZSk7XG4gICAgY2hhbXBpb25Sb2xlTmFtZS50ZXh0Q29udGVudCA9IHJvbGU7XG4gICAgRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzKCdjaGFtcGlvbi1yb2xlLWltYWdlJywgY2hhbXBpb25Sb2xlLCBgJHtpbWFnZXNbYCR7cm9sZX0ucG5nYF19YCwgcm9sZSk7XG4gIH0pO1xuICAvKiBUaGUgdHlwZSBvZiByZXNvdXJjZSB0aGF0IGEgY2hhbXBpb24gdXNlcyBlLmcuIG1hbmEsIGVuZXJneSBldGMgKi9cbiAgY29uc3QgY2hhbXBpb25SZXNvdXJjZSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdjaGFtcGlvbi1yZXNvdXJjZScsIGNoYW1waW9uUm9sZXMpO1xuICBjb25zdCB7IHJlc291cmNlIH0gPSBjaGFtcGlvbkRhdGE7XG4gIGNvbnN0IGNoYW1waW9uUmVzb3VyY2VOYW1lID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdjaGFtcGlvbi1yZXNvdXJjZS1uYW1lJywgY2hhbXBpb25SZXNvdXJjZSk7XG4gIGNoYW1waW9uUmVzb3VyY2VOYW1lLnRleHRDb250ZW50ID0gcmVzb3VyY2U7XG4gIEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEltYWdlRWxlbWVudFdpdGhDbGFzcygnY2hhbXBpb24tcmVzb3VyY2UtaW1hZ2UnLCBjaGFtcGlvblJlc291cmNlLCBgJHtpbWFnZXNbYCR7cmVzb3VyY2V9LnBuZ2BdfWAsIHJlc291cmNlKTtcblxuICAvKiBDcmVhdGVzIHRoZSBtYWluIGNvbnRlbnQgb2YgdGhlIG1haW4gbW9kYWwgKi9cbiAgY29uc3QgbG9yZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb3JlLWNvbnRhaW5lcicpO1xuICBjb25zdCBjaGFtcGlvbkxvcmUgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2NoYW1waW9uLWxvcmUnLCBsb3JlQ29udGFpbmVyKTtcbiAgY2hhbXBpb25Mb3JlLmlubmVySFRNTCA9IGNoYW1waW9uRGF0YS5sb3JlO1xuXG4gIGNvbnN0IGFiaWxpdGllc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYmlsaXRpZXMtY29udGFpbmVyJyk7XG4gIGNvbnN0IGFiaWxpdHlEZXRhaWxzID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2FiaWxpdHktZGV0YWlscycsIGFiaWxpdGllc0NvbnRhaW5lcik7XG4gIGNvbnN0IGFiaWxpdHlJbWdzID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2FiaWxpdHktaW1ncycsIGFiaWxpdHlEZXRhaWxzKTtcbiAgY29uc3QgcGFzc2l2ZUltZyA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEltYWdlRWxlbWVudFdpdGhDbGFzcyhcbiAgICAnc3BlbGwtaW1nIGNsaWNrZWQnLCBhYmlsaXR5SW1ncywgY2hhbXBpb25EYXRhLnBhc3NpdmUucGFzc2l2ZUltZ1VybCwgY2hhbXBpb25EYXRhLnBhc3NpdmUucGFzc2l2ZU5hbWUsXG4gICk7XG4gIHBhc3NpdmVJbWcuaWQgPSAncGFzc2l2ZS1pbWcnO1xuXG4gIGNvbnN0IGltZ0xhYmVsID0gWydRJywgJ1cnLCAnRScsICdSJ107XG4gIGxldCBpbmRleCA9IDA7XG5cbiAgY2hhbXBpb25EYXRhLnNwZWxscy5mb3JFYWNoKChzcGVsbCkgPT4ge1xuICAgIGNvbnN0IHNwZWxsSW1nID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzKFxuICAgICAgJ3NwZWxsLWltZycsIGFiaWxpdHlJbWdzLCBzcGVsbC5pbWdVcmwsIHNwZWxsLm5hbWUsXG4gICAgKTtcbiAgICAvLyBHcmFicyBsZXR0ZXIgUSwgVywgRSBvciBSIHdoaWNoIHVuaXF1ZWx5IGlkZW50aWZpZXMgYSBjaGFtcGlvbnMgYWJpbGl0aWVzXG4gICAgc3BlbGxJbWcuaWQgPSBgJHtpbWdMYWJlbFtpbmRleF19LWltZ2A7XG4gICAgaW5kZXggKz0gMTtcbiAgfSk7XG5cbiAgLyogbG9vcHMgdGhyb3VnaCBjaGFtcGlvbidzIHBhc3NpdmUgYW5kIDQgYWJpbGl0aWVzICovXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSArPSAxKSB7XG4gICAgY29uc3QgYWJpbGl0eUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBhYmlsaXR5TmFtZSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnYWJpbGl0eS1uYW1lJywgYWJpbGl0eUluZm8pO1xuICAgIGNvbnN0IGFiaWxpdHlEZXNjcmlwdGlvbiA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnYWJpbGl0eS1kZXNjcmlwdGlvbicsIGFiaWxpdHlJbmZvKTtcbiAgICBjb25zdCBhYmlsaXR5TGFiZWwgPSBbJ1Bhc3NpdmUnLCAnUScsICdXJywgJ0UnLCAnUiddO1xuXG4gICAgaWYgKGkgPT09IDApIHtcbiAgICAgIGFiaWxpdHlJbmZvLmNsYXNzTmFtZSA9ICdhYmlsaXR5LWluZm8gYWN0aXZlJztcbiAgICAgIGFiaWxpdHlJbmZvLmlkID0gJ3Bhc3NpdmUtYWJpbGl0eSc7XG4gICAgICBhYmlsaXR5TmFtZS50ZXh0Q29udGVudCA9IGAke2NoYW1waW9uRGF0YS5wYXNzaXZlLnBhc3NpdmVOYW1lfSAoJHthYmlsaXR5TGFiZWxbaV19KWA7XG4gICAgICBhYmlsaXR5RGVzY3JpcHRpb24uaW5uZXJIVE1MID0gY2hhbXBpb25EYXRhLnBhc3NpdmUucGFzc2l2ZURlc2NyaXB0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb29sZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIGNvb2xkb3duLmNsYXNzTmFtZSA9ICdhYmlsaXR5LWNvb2xkb3duJztcbiAgICAgIGNvb2xkb3duLnRleHRDb250ZW50ID0gYENvb2xkb3duOiAke2NoYW1waW9uRGF0YS5zcGVsbHNbaSAtIDFdLmNvb2xkb3dufSBzZWNvbmRzYDtcbiAgICAgIGFiaWxpdHlJbmZvLmFwcGVuZENoaWxkKGNvb2xkb3duKTtcblxuICAgICAgYWJpbGl0eUluZm8uY2xhc3NOYW1lID0gJ2FiaWxpdHktaW5mbyc7XG4gICAgICBhYmlsaXR5SW5mby5pZCA9IGAke2FiaWxpdHlMYWJlbFtpXX0tYWJpbGl0eWA7XG4gICAgICBhYmlsaXR5TmFtZS50ZXh0Q29udGVudCA9IGAke2NoYW1waW9uRGF0YS5zcGVsbHNbaSAtIDFdLm5hbWV9ICgke2FiaWxpdHlMYWJlbFtpXX0pYDtcbiAgICAgIGFiaWxpdHlEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBjaGFtcGlvbkRhdGEuc3BlbGxzW2kgLSAxXS5kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBhYmlsaXR5RGV0YWlscy5hcHBlbmRDaGlsZChhYmlsaXR5SW5mbyk7XG4gIH1cblxuICBjb25zdCBjaGFtcGlvblRpcHNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLXRpcHMtc2VjdGlvbicpO1xuICBjb25zdCBjaGFtcGlvblRpcHMgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnY2hhbXBpb24tdGlwcycsIGNoYW1waW9uVGlwc1NlY3Rpb24pO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMiAmJiBpIDwgY2hhbXBpb25EYXRhLnRpcHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBjaGFtcGlvblRpcCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnY2hhbXBpb24tdGlwJywgY2hhbXBpb25UaXBzKTtcbiAgICBjaGFtcGlvblRpcC50ZXh0Q29udGVudCA9IGAke2NoYW1waW9uRGF0YS50aXBzW2ldfWA7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNoYW1waW9uRGV0YWlsc01vZGFsO1xuIiwiaW1wb3J0IEVsZW1lbnRDcmVhdGlvbiBmcm9tICcuLi9oZWxwZXJzL2VsZW1lbnRDcmVhdGlvbic7XG5cbmNvbnN0IGNoYW1waW9uU2tpbnNNb2RhbCA9IGFzeW5jIChjaGFtcGlvbkRldGFpbHMpID0+IHtcbiAgY29uc3QgeyBza2lucyB9ID0gY2hhbXBpb25EZXRhaWxzO1xuICBjb25zdCBza2luc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNza2lucy1jb250YWluZXInKTtcbiAgY29uc3Qgc2tpbk5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2tpbi1uYW1lJyk7XG4gIGNvbnN0IHNraW5JbWFnZXNDb250YWluZXIgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnc2tpbi1pbWFnZXMtY29udGFpbmVyJywgc2tpbnNDb250YWluZXIpO1xuXG4gIHNraW5zLmZvckVhY2goKHNraW4pID0+IHtcbiAgICBpZiAoc2tpbi5udW0gPT09IDApIHtcbiAgICAgIGNvbnN0IHNob3duSW1hZ2VDb250YWluZXIgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzQW5kSWQoXG4gICAgICAgICdkaXYnLCAnc2tpbi1pbWFnZS1jb250YWluZXIgc2hvd24nLCBgRGVmYXVsdCAke2NoYW1waW9uRGV0YWlscy5uYW1lfWAsIHNraW5JbWFnZXNDb250YWluZXIsXG4gICAgICApO1xuICAgICAgc2tpbk5hbWUudGV4dENvbnRlbnQgPSBgRGVmYXVsdCAke2NoYW1waW9uRGV0YWlscy5uYW1lfWA7XG4gICAgICBjb25zdCBzaG93bkltYWdlVXJsID0gYGh0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi9pbWcvY2hhbXBpb24vc3BsYXNoLyR7Y2hhbXBpb25EZXRhaWxzLmlkfV8ke3NraW4ubnVtfS5qcGdgO1xuICAgICAgRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzKCdza2luLWltYWdlJywgc2hvd25JbWFnZUNvbnRhaW5lciwgc2hvd25JbWFnZVVybCwgJ2RlZmF1bHQgc2tpbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbWFnZUNvbnRhaW5lciA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ3NraW4taW1hZ2UtY29udGFpbmVyJywgc2tpbi5uYW1lLCBza2luSW1hZ2VzQ29udGFpbmVyKTtcbiAgICAgIGNvbnN0IGltYWdlVXJsID0gYGh0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi9pbWcvY2hhbXBpb24vc3BsYXNoLyR7Y2hhbXBpb25EZXRhaWxzLmlkfV8ke3NraW4ubnVtfS5qcGdgO1xuICAgICAgRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzKCdza2luLWltYWdlJywgaW1hZ2VDb250YWluZXIsIGltYWdlVXJsLCBza2luLm5hbWUpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjaGFtcGlvblNraW5zTW9kYWw7XG4iLCJpbXBvcnQgSXRlbUluZm8gZnJvbSAnLi4vY2hhbXBpb25EYXRhL2l0ZW1JbmZvJztcbmltcG9ydCB7XG4gIHJlbmRlckhlYWRlckRldGFpbHMsXG4gIHJlbmRlclN0YXRPdmVydmlldyxcbiAgcmVuZGVyRGFtYWdlU3RhdHMsXG4gIHJlbmRlckNoYW1waW9uTGFuZSxcbiAgcmVuZGVyTWF0Y2h1cHNJbmZvLFxufSBmcm9tICcuL3JlbmRlckhlbHBlcnMnO1xuaW1wb3J0IEVsZW1lbnRDcmVhdGlvbiBmcm9tICcuLi9oZWxwZXJzL2VsZW1lbnRDcmVhdGlvbic7XG5cbmNvbnN0IGNoYW1waW9uU3RhdHNNb2RhbCA9IGFzeW5jIChjaGFtcGlvbkRhdGEsIGNoYW1waW9uU3RhdHMpID0+IHtcbiAgcmVuZGVySGVhZGVyRGV0YWlscyhjaGFtcGlvbkRhdGEsICdzdGF0cycpO1xuXG4gIGNvbnN0IHN0YXRzT3ZlcnZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tc3RhdHMtb3ZlcnZpZXcnKTtcblxuICByZW5kZXJTdGF0T3ZlcnZpZXcoc3RhdHNPdmVydmlldywgJ1dpbiBSYXRlJywgY2hhbXBpb25TdGF0cy53aW5SYXRlKTtcbiAgcmVuZGVyU3RhdE92ZXJ2aWV3KHN0YXRzT3ZlcnZpZXcsICdQaWNrIFJhdGUnLCBjaGFtcGlvblN0YXRzLnBpY2tSYXRlKTtcbiAgLyogTWFrZSBldmVyeSBsZXR0ZXIgZXhjZXB0IHRoZSBmaXJzdCBsb3dlciBjYXNlICovXG4gIGNvbnN0IGxhbmUgPSBgJHtjaGFtcGlvblN0YXRzLmxhbmVbMF0gKyBjaGFtcGlvblN0YXRzLmxhbmUuc3Vic3RyaW5nKDEpLnRvTG93ZXJDYXNlKCl9YDtcbiAgcmVuZGVyQ2hhbXBpb25MYW5lKHN0YXRzT3ZlcnZpZXcsIGxhbmUpO1xuXG4gIC8qIFNldHMgdGhlIHZhbHVlcyBhbmQgcGVyY2VudGFnZXMgZm9yIHRoZSBhdmVyYWdlIGRhbWFnZSBzZWN0aW9uIG9mIHRoZSBzdGF0cyBtb2RhbCAqL1xuXG4gIGNvbnN0IHRydWVEYW1hZ2VDaXJjbGVTdHJva2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHJ1ZS1kYW1hZ2Utc3Ryb2tlJyk7XG4gIGNvbnN0IHBoeXNpY2FsRGFtYWdlQ2lyY2xlU3Ryb2tlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BoeXNpY2FsLWRhbWFnZS1zdHJva2UnKTtcbiAgY29uc3QgbWFnaWNEYW1hZ2VDaXJjbGVTdHJva2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFnaWMtZGFtYWdlLXN0cm9rZScpO1xuXG4gIGNvbnN0IHRydWVEYW1hZ2VQZXJjZW50ID0gTWF0aC5yb3VuZChjaGFtcGlvblN0YXRzLmRhbWFnZVBlck1hdGNoLnRydWVEYW1hZ2UucGVyY2VudGFnZSk7XG4gIGNvbnN0IHBoeXNpY2FsRGFtYWdlUGVyY2VudCA9IE1hdGgucm91bmQoY2hhbXBpb25TdGF0cy5kYW1hZ2VQZXJNYXRjaC5waHlzaWNhbERhbWFnZS5wZXJjZW50YWdlKTtcbiAgY29uc3QgbWFnaWNEYW1hZ2VQZXJjZW50ID0gTWF0aC5yb3VuZChjaGFtcGlvblN0YXRzLmRhbWFnZVBlck1hdGNoLm1hZ2ljRGFtYWdlLnBlcmNlbnRhZ2UpO1xuXG4gIHRydWVEYW1hZ2VDaXJjbGVTdHJva2Uuc3R5bGUuc3Ryb2tlRGFzaGFycmF5ID0gYCR7dHJ1ZURhbWFnZVBlcmNlbnR9IDEwMGA7XG4gIHBoeXNpY2FsRGFtYWdlQ2lyY2xlU3Ryb2tlLnN0eWxlLnN0cm9rZURhc2hhcnJheSA9IGAke3BoeXNpY2FsRGFtYWdlUGVyY2VudCArIHRydWVEYW1hZ2VQZXJjZW50fSAxMDBgO1xuICBtYWdpY0RhbWFnZUNpcmNsZVN0cm9rZS5zdHlsZS5zdHJva2VEYXNoYXJyYXkgPSAnMTAwLCAxMDAnO1xuICBjb25zdCB0b3RhbERhbWFnZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG90YWwtZGFtYWdlLXRleHQnKTtcbiAgdG90YWxEYW1hZ2VUZXh0LnRleHRDb250ZW50ID0gTWF0aC5yb3VuZChjaGFtcGlvblN0YXRzLmRhbWFnZVBlck1hdGNoLnRvdGFsRGFtYWdlLnZhbHVlKTtcblxuICBjb25zdCB0cnVlRGFtYWdlVmFsdWUgPSBNYXRoLnJvdW5kKGNoYW1waW9uU3RhdHMuZGFtYWdlUGVyTWF0Y2gudHJ1ZURhbWFnZS52YWx1ZSk7XG4gIGNvbnN0IHBoeXNpY2FsRGFtYWdlVmFsdWUgPSBNYXRoLnJvdW5kKGNoYW1waW9uU3RhdHMuZGFtYWdlUGVyTWF0Y2gucGh5c2ljYWxEYW1hZ2UudmFsdWUpO1xuICBjb25zdCBtYWdpY0RhbWFnZVZhbHVlID0gTWF0aC5yb3VuZChjaGFtcGlvblN0YXRzLmRhbWFnZVBlck1hdGNoLm1hZ2ljRGFtYWdlLnZhbHVlKTtcblxuICByZW5kZXJEYW1hZ2VTdGF0cygncGh5c2ljYWwnLCBwaHlzaWNhbERhbWFnZVZhbHVlLCBwaHlzaWNhbERhbWFnZVBlcmNlbnQpO1xuICByZW5kZXJEYW1hZ2VTdGF0cygnbWFnaWMnLCBtYWdpY0RhbWFnZVZhbHVlLCBtYWdpY0RhbWFnZVBlcmNlbnQpO1xuICByZW5kZXJEYW1hZ2VTdGF0cygndHJ1ZScsIHRydWVEYW1hZ2VWYWx1ZSwgdHJ1ZURhbWFnZVBlcmNlbnQpO1xuXG4gIC8qIFJlbmRlcnMgdGhlIGl0ZW0gYnVpbGRzIHNlY3Rpb24gb2YgdGhlIHN0YXRzIG1vZGFsICovXG4gIGNvbnN0IHsgaXRlbVNldHMgfSA9IGNoYW1waW9uU3RhdHM7XG4gIGNvbnN0IGFsbEl0ZW1zID0gYXdhaXQgSXRlbUluZm8uZ2V0QWxsSXRlbXMoKTtcbiAgY29uc3QgY2hhbXBpb25JdGVtQnVpbGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLWl0ZW0tYnVpbGRzJyk7XG4gIGNvbnN0IGl0ZW1TZXRzQ29udGFpbmVyID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2l0ZW0tc2V0cy1jb250YWluZXInLCBjaGFtcGlvbkl0ZW1CdWlsZHMpO1xuXG4gIGl0ZW1TZXRzLmZvckVhY2goKGl0ZW1TZXQpID0+IHtcbiAgICBjb25zdCBpdGVtU2V0Q29udGFpbmVyID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2l0ZW0tc2V0LWNvbnRhaW5lcicsIGl0ZW1TZXRzQ29udGFpbmVyKTtcblxuICAgIGl0ZW1TZXQuZm9yRWFjaCgoaXRlbUlkKSA9PiB7XG4gICAgICBjb25zdCBpdGVtID0gbmV3IEl0ZW1JbmZvKGl0ZW1JZCk7XG4gICAgICBjb25zdCBpdGVtSW5mbyA9IGl0ZW0uZ2V0SXRlbUluZm8oYWxsSXRlbXMpO1xuICAgICAgaWYgKCFpdGVtSW5mby50YWdzLmluY2x1ZGVzKCdUcmlua2V0JykgJiYgIWl0ZW1JbmZvLnRhZ3MuaW5jbHVkZXMoJ0NvbnN1bWFibGUnKSkge1xuICAgICAgICBjb25zdCBtYWluQ29tcG9uZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1haW5Db21wb25lbnRDb250YWluZXIuY2xhc3NOYW1lID0gJ21haW4tY29tcG9uZW50LWNvbnRhaW5lcic7XG4gICAgICAgIGl0ZW1TZXRDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbkNvbXBvbmVudENvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3QgbWFpbkl0ZW0gPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnbWFpbi1pdGVtJywgbWFpbkNvbXBvbmVudENvbnRhaW5lcik7XG5cbiAgICAgICAgRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzKCdpdGVtLWltZycsIG1haW5JdGVtLCBpdGVtSW5mby5pbWFnZVVybCwgYCR7aXRlbUlkfS5wbmdgKTtcblxuICAgICAgICBjb25zdCBpdGVtRGV0YWlsc0NvbnRhaW5lciA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdpdGVtLWRldGFpbHMtY29udGFpbmVyJywgbWFpbkl0ZW0pO1xuXG4gICAgICAgIGNvbnN0IG5hbWVFbGVtZW50ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdpdGVtLW5hbWUnLCBpdGVtRGV0YWlsc0NvbnRhaW5lcik7XG4gICAgICAgIG5hbWVFbGVtZW50LnRleHRDb250ZW50ID0gaXRlbUluZm8ubmFtZTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25FbGVtZW50ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdpdGVtLWRlc2NyaXB0aW9uJywgaXRlbURldGFpbHNDb250YWluZXIpO1xuICAgICAgICBkZXNjcmlwdGlvbkVsZW1lbnQuaW5uZXJIVE1MID0gaXRlbUluZm8uZGVzY3JpcHRpb247XG4gICAgICAgIGNvbnN0IGl0ZW1Db3N0ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2l0ZW0tY29zdCcsIGl0ZW1EZXRhaWxzQ29udGFpbmVyKTtcbiAgICAgICAgY29uc3QgY29zdExhYmVsID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdjb3N0LWxhYmVsJywgaXRlbUNvc3QpO1xuICAgICAgICBjb3N0TGFiZWwudGV4dENvbnRlbnQgPSAnR29sZDogJztcbiAgICAgICAgY29uc3QgY29zdEFtb3VudCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnY29zdC1hbW91bnQnLCBpdGVtQ29zdCk7XG4gICAgICAgIGNvc3RBbW91bnQudGV4dENvbnRlbnQgPSBpdGVtSW5mby5jb3N0O1xuXG4gICAgICAgIC8qIFRoZSBjb21wb25lbnQgaXRlbXMgYXJlIHRoZSBzbWFsbGVyIGl0ZW1zIHRoYXQgYXBwZWFyIGJlbG93IHRoZSBtYWluIGl0ZW0gKi9cbiAgICAgICAgY29uc3QgeyBjb21wb25lbnRJdGVtcyB9ID0gaXRlbUluZm87XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudEl0ZW1zQ29udGFpbmVyID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2NvbXBvbmVudC1pdGVtcy1jb250YWluZXInLCBtYWluQ29tcG9uZW50Q29udGFpbmVyKTtcblxuICAgICAgICBjb21wb25lbnRJdGVtcy5mb3JFYWNoKChjb21wb25lbnRJdGVtKSA9PiB7XG4gICAgICAgICAgY29uc3QgY29tcG9uZW50SXRlbUVsZW1lbnQgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnY29tcG9uZW50LWl0ZW0nLCBjb21wb25lbnRJdGVtc0NvbnRhaW5lcik7XG4gICAgICAgICAgRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzKFxuICAgICAgICAgICAgJ2NvbXBvbmVudC1pdGVtLWltZycsIGNvbXBvbmVudEl0ZW1FbGVtZW50LCBjb21wb25lbnRJdGVtLmltYWdlVXJsLCBgJHtjb21wb25lbnRJdGVtLm5hbWV9YCxcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgY29uc3QgY29tcG9uZW50SXRlbURldGFpbHNDb250YWluZXIgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnY29tcG9uZW50LWl0ZW0tZGV0YWlscy1jb250YWluZXInLCBjb21wb25lbnRJdGVtRWxlbWVudCk7XG5cbiAgICAgICAgICBjb25zdCBjb21wb25lbnRJdGVtTmFtZSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnY29tcG9uZW50LWl0ZW0tbmFtZScsIGNvbXBvbmVudEl0ZW1EZXRhaWxzQ29udGFpbmVyKTtcbiAgICAgICAgICBjb21wb25lbnRJdGVtTmFtZS50ZXh0Q29udGVudCA9IGNvbXBvbmVudEl0ZW0ubmFtZTtcbiAgICAgICAgICBjb25zdCBjb21wb25lbnRJdGVtQ29zdCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdjb21wb25lbnQtaXRlbS1jb3N0JywgY29tcG9uZW50SXRlbURldGFpbHNDb250YWluZXIpO1xuICAgICAgICAgIGNvbnN0IGNvbXBvbmVudEl0ZW1Db3N0TGFiZWwgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2NvbXBvbmVudC1pdGVtLWNvc3QtbGFiZWwnLCBjb21wb25lbnRJdGVtQ29zdCk7XG4gICAgICAgICAgY29tcG9uZW50SXRlbUNvc3RMYWJlbC50ZXh0Q29udGVudCA9ICdHb2xkOiAnO1xuICAgICAgICAgIGNvbnN0IGNvbXBvbmVudEl0ZW1BbW91bnQgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2NvbXBvbmVudC1pdGVtLWFtb3VudCcsIGNvbXBvbmVudEl0ZW1Db3N0KTtcbiAgICAgICAgICBjb21wb25lbnRJdGVtQW1vdW50LnRleHRDb250ZW50ID0gY29tcG9uZW50SXRlbS5jb3N0O1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIC8qIFJlbmRlcnMgdGhlIG1hdGNodXBzIHNlY3Rpb24gb2YgdGhlIGNoYW1waW9uIG1vZGFsIHN0YXRzIHBhZ2UgKi9cbiAgY29uc3QgYmVzdE1hdGNodXBzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iZXN0LW1hdGNodXBzLXNlY3Rpb24nKTtcbiAgY29uc3QgYmVzdE1hdGNodXBzRWxlbWVudCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdiZXN0LW1hdGNodXBzIG1hdGNodXBzJywgYmVzdE1hdGNodXBzU2VjdGlvbik7XG4gIGNvbnN0IGJlc3RNYXRjaHVwc0RhdGEgPSBjaGFtcGlvblN0YXRzLmJlc3RNYXRjaFVwcztcbiAgcmVuZGVyTWF0Y2h1cHNJbmZvKGJlc3RNYXRjaHVwc0VsZW1lbnQsIGJlc3RNYXRjaHVwc0RhdGEpO1xuXG4gIGNvbnN0IHdvcnN0TWF0Y2h1cHNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcnN0LW1hdGNodXBzLXNlY3Rpb24nKTtcbiAgY29uc3Qgd29yc3RNYXRjaHVwc0VsZW1lbnQgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnd29yc3QtbWF0Y2h1cHMgbWF0Y2h1cHMnLCB3b3JzdE1hdGNodXBzU2VjdGlvbik7XG4gIGNvbnN0IHdvcnN0TWF0Y2h1cHNEYXRhID0gY2hhbXBpb25TdGF0cy53b3JzdE1hdGNoVXBzO1xuICByZW5kZXJNYXRjaHVwc0luZm8od29yc3RNYXRjaHVwc0VsZW1lbnQsIHdvcnN0TWF0Y2h1cHNEYXRhKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNoYW1waW9uU3RhdHNNb2RhbDtcbiIsImltcG9ydCBEcm9wZG93blNlY3Rpb24gZnJvbSAnLi4vaGVscGVycy9kcm9wZG93blNlY3Rpb24nO1xuaW1wb3J0IHsgZ2V0QWxsQ2hhbXBpb25EZXRhaWxzIH0gZnJvbSAnLi4vY2hhbXBpb25EYXRhL2dldEFsbENoYW1waW9ucyc7XG5pbXBvcnQgRWxlbWVudENyZWF0aW9uIGZyb20gJy4uL2hlbHBlcnMvZWxlbWVudENyZWF0aW9uJztcbmltcG9ydCB7IGNyZWF0ZUNoYW1waW9uQ29udGFpbmVyIH0gZnJvbSAnLi9yZW5kZXJIZWxwZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKCkgPT4ge1xuICAvKiBDcmVhdGVzIHRoZSBmaWx0ZXIgYW5kIHNvcnRpbmcgc2VjdGlvbiBiZWxvdyB0aGUgaGVhZGVyICovXG4gIGNvbnN0IGZpbHRlclNvcnRTZWN0aW9uID0gRHJvcGRvd25TZWN0aW9uLmNyZWF0ZVNlY3Rpb24oKTtcblxuICBjb25zdCBzb3J0T3B0aW9ucyA9IHtcbiAgICBzb3J0OiBbJ3dpbnJhdGUnLCAncGlja3JhdGUnLCAnZGFtYWdlJ10sXG4gIH07XG5cbiAgY29uc3Qgcm9sZU9wdGlvbnMgPSB7XG4gICAgcm9sZTogWyd0YW5rJywgJ2Fzc2Fzc2luJywgJ2ZpZ2h0ZXInLCAnbWFnZScsICdtYXJrc21hbicsICdzdXBwb3J0J10sXG4gIH07XG4gIGNvbnN0IGRpZmZpY3VsdHlPcHRpb25zID0ge1xuICAgIGRpZmZpY3VsdHk6IFsnbG93JywgJ21lZGl1bScsICdoaWdoJ10sXG4gIH07XG4gIGNvbnN0IG11bHRpT3B0aW9uQXJyYXlzID0gW3JvbGVPcHRpb25zLCBkaWZmaWN1bHR5T3B0aW9uc107XG5cbiAgY29uc3Qgc29ydERyb3Bkb3duID0gbmV3IERyb3Bkb3duU2VjdGlvbignc29ydCcsIHNvcnRPcHRpb25zLnNvcnQpO1xuICBzb3J0RHJvcGRvd24ucmVuZGVyRHJvcGRvd24oZmlsdGVyU29ydFNlY3Rpb24sICdzaW5nbGUtc2VsZWN0Jyk7XG5cbiAgbXVsdGlPcHRpb25BcnJheXMuZm9yRWFjaCgob3B0aW9uc09iamVjdCkgPT4ge1xuICAgIGNvbnN0IGRyb3Bkb3duTmFtZSA9IE9iamVjdC5rZXlzKG9wdGlvbnNPYmplY3QpWzBdO1xuICAgIGNvbnN0IG9wdGlvbnNBcnJheSA9IE9iamVjdC52YWx1ZXMob3B0aW9uc09iamVjdClbMF07XG4gICAgY29uc3QgZHJvcGRvd24gPSBuZXcgRHJvcGRvd25TZWN0aW9uKGRyb3Bkb3duTmFtZSwgb3B0aW9uc0FycmF5KTtcbiAgICBkcm9wZG93bi5yZW5kZXJEcm9wZG93bihmaWx0ZXJTb3J0U2VjdGlvbiwgJ211bHRpLXNlbGVjdCcpO1xuICB9KTtcblxuICAvKiBMb2FkIGFsbCBjaGFtcGlvbnMgYW5kIHJlbmRlciB0aGVtIHRvIHRoZSBjaGFtcGlvbnMgcGFnZSAqL1xuICBjb25zdCBjaGFtcGlvbnNQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoYW1waW9ucy1wYWdlJyk7XG4gIEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdsb2FkZXInLCBjaGFtcGlvbnNQYWdlKTtcbiAgY29uc3QgY2hhbXBpb25zU2VjdGlvbiA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdjaGFtcGlvbnMtc2VjdGlvbicsIGNoYW1waW9uc1BhZ2UpO1xuICBjb25zdCBhbGxDaGFtcGlvbnMgPSBhd2FpdCBnZXRBbGxDaGFtcGlvbkRldGFpbHMoKTtcbiAgY29uc3QgYWxsQ2hhbXBpb25zQXJyYXkgPSBPYmplY3QudmFsdWVzKGFsbENoYW1waW9ucyk7XG4gIGFsbENoYW1waW9uc0FycmF5LmZvckVhY2goKGNoYW1waW9uKSA9PiB7XG4gICAgY3JlYXRlQ2hhbXBpb25Db250YWluZXIoY2hhbXBpb24sIGNoYW1waW9uc1NlY3Rpb24pO1xuICB9KTtcblxuICAvKiBDcmVhdGVzIGF1dG9jb21wbGV0ZSBkaXYgZm9yIHRoZSBzZWFyY2ggYmFyICovXG4gIGNvbnN0IHNlYXJjaENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtY29udGFpbmVyJyk7XG4gIGNvbnN0IGF1dG9Db21wbGV0ZU5hbWVzID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcyhcbiAgICAnZGl2JywgJ2F1dG8tY29tcGxldGUtbmFtZXMnLCBzZWFyY2hDb250YWluZXIsXG4gICk7XG4gIGFsbENoYW1waW9uc0FycmF5LmZvckVhY2goKGNoYW1waW9uKSA9PiB7XG4gICAgY29uc3QgY2hhbXBpb25OYW1lID0gY2hhbXBpb24ubmFtZTtcbiAgICBjb25zdCBjaGFtcGlvbklkID0gY2hhbXBpb24uaWQ7XG4gICAgY29uc3QgYXV0b0NvbXBsZXRlTmFtZVdyYXBwZXIgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKFxuICAgICAgJ2RpdicsICdhdXRvLWNvbXBsZXRlLW5hbWUtd3JhcHBlcicsIGF1dG9Db21wbGV0ZU5hbWVzLFxuICAgICk7XG4gICAgYXV0b0NvbXBsZXRlTmFtZVdyYXBwZXIudGFiSW5kZXggPSAnLTEnO1xuICAgIGNvbnN0IGF1dG9Db21wbGV0ZU5hbWUgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKFxuICAgICAgJ3NwYW4nLCAnYXV0by1jb21wbGV0ZS1uYW1lJywgYXV0b0NvbXBsZXRlTmFtZVdyYXBwZXIsXG4gICAgKTtcbiAgICBhdXRvQ29tcGxldGVOYW1lLnRleHRDb250ZW50ID0gY2hhbXBpb25OYW1lO1xuICAgIGF1dG9Db21wbGV0ZU5hbWUuZGF0YXNldC5jaGFtcGlvbklkID0gY2hhbXBpb25JZDtcbiAgICBhdXRvQ29tcGxldGVOYW1lLmlkID0gY2hhbXBpb25OYW1lO1xuICB9KTtcbn07XG4iLCJpbXBvcnQgRWxlbWVudENyZWF0aW9uIGZyb20gJy4uL2hlbHBlcnMvZWxlbWVudENyZWF0aW9uJztcblxuY29uc3QgaW1wb3J0QWxsID0gKHIpID0+IHtcbiAgY29uc3QgaW1hZ2VzID0ge307XG4gIHIua2V5cygpLmZvckVhY2goKGl0ZW0pID0+IHsgaW1hZ2VzW2l0ZW0ucmVwbGFjZSgnLi8nLCAnJyldID0gcihpdGVtKTsgfSk7XG4gIHJldHVybiBpbWFnZXM7XG59O1xuXG5jb25zdCBpbWFnZXMgPSBpbXBvcnRBbGwocmVxdWlyZS5jb250ZXh0KCcuLi9pbWFnZXMnLCBmYWxzZSwgL1xcLihwbmd8anBlP2d8c3ZnKSQvKSk7XG5cbmNvbnN0IHJlbmRlckhlYWRlckRldGFpbHMgPSAoY2hhbXBpb25EYXRhLCBtb2RhbENvbnRhaW5lcikgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHttb2RhbENvbnRhaW5lcn0tY29udGFpbmVyYCk7XG4gIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kID0gYG5vLXJlcGVhdCB1cmwoaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuL2ltZy9jaGFtcGlvbi9zcGxhc2gvJHtjaGFtcGlvbkRhdGEuaWR9XzAuanBnKSA3MCUgODAlYDtcbiAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvdmVyJztcblxuICBjb25zdCBjaGFtcGlvblRpdGxlID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbi10aXRsZScpO1xuICBjaGFtcGlvblRpdGxlLnRleHRDb250ZW50ID0gY2hhbXBpb25EYXRhLnRpdGxlO1xuXG4gIGNvbnN0IGNoYW1waW9uTmFtZSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tbmFtZScpO1xuICBjaGFtcGlvbk5hbWUudGV4dENvbnRlbnQgPSBjaGFtcGlvbkRhdGEubmFtZTtcbn07XG5cbi8qIFJlbmRlcnMgd2luIG9yIHBpY2sgcmF0ZSB0byB0aGUgRE9NICovXG5jb25zdCByZW5kZXJTdGF0T3ZlcnZpZXcgPSAoc3RhdHNPdmVydmlldywgcmF0ZVRleHQsIHJhdGVUeXBlKSA9PiB7XG4gIGNvbnN0IGNoYW1waW9uUmF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgY29uc3QgcmF0ZVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gIC8qIFR1cm5zICdXaW4gUmF0ZScgaW50byAnd2luLXJhdGUnICovXG4gIGNvbnN0IGxvd2VyQ2FzZVRleHQgPSByYXRlVGV4dC5yZXBsYWNlKCcgJywgJy0nKS50b0xvd2VyQ2FzZSgpO1xuXG4gIGNoYW1waW9uUmF0ZS5jbGFzc05hbWUgPSBsb3dlckNhc2VUZXh0O1xuICBsYWJlbC5pZCA9IGAke2xvd2VyQ2FzZVRleHR9LWxhYmVsYDtcbiAgbGFiZWwuY2xhc3NOYW1lID0gJ2xhYmVsJztcbiAgcmF0ZVZhbHVlLmNsYXNzTmFtZSA9IGAke2xvd2VyQ2FzZVRleHR9LXZhbHVlYDtcbiAgbGFiZWwudGV4dENvbnRlbnQgPSByYXRlVGV4dDtcbiAgcmF0ZVZhbHVlLnRleHRDb250ZW50ID0gYCR7cmF0ZVR5cGV9JWA7XG5cbiAgY2hhbXBpb25SYXRlLmFwcGVuZENoaWxkKGxhYmVsKTsgY2hhbXBpb25SYXRlLmFwcGVuZENoaWxkKHJhdGVWYWx1ZSk7XG4gIHN0YXRzT3ZlcnZpZXcuYXBwZW5kQ2hpbGQoY2hhbXBpb25SYXRlKTtcbn07XG5cbmNvbnN0IHJlbmRlckNoYW1waW9uTGFuZSA9IChzdGF0c092ZXJ2aWV3LCBsYW5lKSA9PiB7XG4gIGNvbnN0IGNoYW1waW9uTGFuZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2hhbXBpb25MYW5lSW5mby5jbGFzc05hbWUgPSAnbGFuZS1pbmZvJztcbiAgY29uc3QgbGFuZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGxhbmVUZXh0LmNsYXNzTmFtZSA9ICdsYW5lLXRleHQgbGFiZWwnO1xuICBsYW5lVGV4dC50ZXh0Q29udGVudCA9IGxhbmU7XG4gIGNvbnN0IGxhbmVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGxhbmVJY29uLmNsYXNzTmFtZSA9ICdsYW5lLWljb24gY2hhbXBpb24tcm9sZS1pbWFnZSc7XG4gIGxhbmVJY29uLnNyYyA9IGAke2ltYWdlc1tgJHtsYW5lfS5wbmdgXX1gO1xuICBsYW5lSWNvbi5hbHQgPSBgJHtsYW5lfS5wbmdgO1xuICBjaGFtcGlvbkxhbmVJbmZvLmFwcGVuZENoaWxkKGxhbmVUZXh0KTtcbiAgY2hhbXBpb25MYW5lSW5mby5hcHBlbmRDaGlsZChsYW5lSWNvbik7XG4gIHN0YXRzT3ZlcnZpZXcuYXBwZW5kQ2hpbGQoY2hhbXBpb25MYW5lSW5mbyk7XG59O1xuXG5jb25zdCByZW5kZXJEYW1hZ2VTdGF0cyA9IChkYW1hZ2VUeXBlLCBkYW1hZ2VWYWx1ZSwgZGFtYWdlUGVyY2VudGFnZSkgPT4ge1xuICBjb25zdCBkYW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtkYW1hZ2VUeXBlfS1kYW1hZ2UtY29udGFpbmVyYCk7XG5cbiAgY29uc3QgZGFtYWdlU3RhdHMgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnZGFtYWdlLXN0YXRzJywgZGFtYWdlQ29udGFpbmVyKTtcblxuICBjb25zdCBkYW1hZ2VWYWx1ZUVsZW1lbnQgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aElkKCdzcGFuJywgYCR7ZGFtYWdlVHlwZX0tdmFsdWVgLCBkYW1hZ2VTdGF0cyk7XG4gIGNvbnN0IGRhbWFnZVBlcmNlbnRhZ2VFbGVtZW50ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhJZCgnc3BhbicsIGAke2RhbWFnZVR5cGV9LXBlcmNlbnRhZ2VgLCBkYW1hZ2VTdGF0cyk7XG4gIGRhbWFnZVZhbHVlRWxlbWVudC50ZXh0Q29udGVudCA9IGAke2RhbWFnZVZhbHVlfWA7XG4gIGRhbWFnZVBlcmNlbnRhZ2VFbGVtZW50LnRleHRDb250ZW50ID0gYCR7ZGFtYWdlUGVyY2VudGFnZX0lYDtcbn07XG5cbmNvbnN0IHJlbmRlck1hdGNodXBzSW5mbyA9IChtYXRjaHVwc0VsZW1lbnQsIG1hdGNodXBzRGF0YSkgPT4ge1xuICBtYXRjaHVwc0RhdGEuZm9yRWFjaCgobWF0Y2h1cCkgPT4ge1xuICAgIGNvbnN0IG1hdGNodXBJbmZvID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ21hdGNodXAtaW5mbycsIG1hdGNodXBzRWxlbWVudCk7XG4gICAgY29uc3QgZW5lbXlDaGFtcGlvbk5hbWUgPSBtYXRjaHVwWzFdLm5hbWU7XG4gICAgY29uc3QgZW5lbXlDaGFtcGlvbklkID0gbWF0Y2h1cFswXTtcbiAgICBjb25zdCBlbmVteUNoYW1waW9uSW1nVXJsID0gYGh0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi8xMS4yMi4xL2ltZy9jaGFtcGlvbi8ke2VuZW15Q2hhbXBpb25JZH0ucG5nYDtcbiAgICBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAnZW5lbXktY2hhbXBpb24taW1nJywgbWF0Y2h1cEluZm8sIGVuZW15Q2hhbXBpb25JbWdVcmwsIGBzbWFsbC0ke2VuZW15Q2hhbXBpb25JZH1gLFxuICAgICk7XG5cbiAgICBjb25zdCBtYXRjaHVwU3RhdHMgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnbWF0Y2h1cC1zdGF0cycsIG1hdGNodXBJbmZvKTtcbiAgICBjb25zdCBlbmVteUNoYW1waW9uTmFtZUVsZW1lbnQgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2VuZW15LWNoYW1waW9uLW5hbWUnLCBtYXRjaHVwU3RhdHMpO1xuICAgIGVuZW15Q2hhbXBpb25OYW1lRWxlbWVudC50ZXh0Q29udGVudCA9IGVuZW15Q2hhbXBpb25OYW1lO1xuICAgIGNvbnN0IHdpbnJhdGVBZ2FpbnN0ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ3dpbnJhdGUtYWdhaW5zdCcsIG1hdGNodXBTdGF0cyk7XG4gICAgY29uc3Qgd2lucmF0ZUFnYWluc3RMYWJlbCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnd2lucmF0ZS1hZ2FpbnN0LWxhYmVsJywgd2lucmF0ZUFnYWluc3QpO1xuICAgIHdpbnJhdGVBZ2FpbnN0TGFiZWwudGV4dENvbnRlbnQgPSAnV2lucmF0ZTogJztcbiAgICBjb25zdCBjb2xvciA9IG1hdGNodXBzRWxlbWVudC5jbGFzc05hbWUgPT09ICdiZXN0LW1hdGNodXBzIG1hdGNodXBzJyA/ICdibHVlJyA6ICdyZWQnO1xuICAgIGNvbnN0IHdpbnJhdGVBZ2FpbnN0UGVyY2VudGFnZSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCBgd2lucmF0ZS1hZ2FpbnN0LXBlcmNlbnRhZ2UgJHtjb2xvcn1gLCB3aW5yYXRlQWdhaW5zdCk7XG4gICAgd2lucmF0ZUFnYWluc3RQZXJjZW50YWdlLnRleHRDb250ZW50ID0gYCR7bWF0Y2h1cFsxXS53aW5SYXRlQWdhaW5zdC50b0ZpeGVkKDApfSVgO1xuICAgIGNvbnN0IGdhbWVzUGxheWVkQWdhaW5zdCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnZ2FtZXMtcGxheWVkLWFnYWluc3QnLCBtYXRjaHVwU3RhdHMpO1xuICAgIGdhbWVzUGxheWVkQWdhaW5zdC50ZXh0Q29udGVudCA9IGBHYW1lczogJHttYXRjaHVwWzFdLm1hdGNoZXN9YDtcbiAgfSk7XG59O1xuXG5jb25zdCBjcmVhdGVDaGFtcGlvbkNvbnRhaW5lciA9IChjaGFtcGlvbiwgY2hhbXBpb25zU2VjdGlvbikgPT4ge1xuICBjb25zdCBjaGFtcGlvbkNvbnRhaW5lciA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdjaGFtcGlvbi1jb250YWluZXIgc2hvd24nLCBjaGFtcGlvbnNTZWN0aW9uKTtcbiAgY29uc3QgY2hhbXBpb25JZCA9IGNoYW1waW9uLmlkID8gY2hhbXBpb24uaWQgOiBjaGFtcGlvbi5jaGFtcGlvbk5hbWU7XG4gIGNoYW1waW9uQ29udGFpbmVyLmRhdGFzZXQuaWQgPSBjaGFtcGlvbklkO1xuICBjb25zdCBjaGFtcGlvbkltZ1VybCA9IGBodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vaW1nL2NoYW1waW9uL2xvYWRpbmcvJHtjaGFtcGlvbklkfV8wLmpwZ2A7XG4gIGNvbnN0IGNoYW1waW9uSW1nID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzKFxuICAgICdjaGFtcGlvbi1pbWcnLCBjaGFtcGlvbkNvbnRhaW5lciwgY2hhbXBpb25JbWdVcmwsICcnLFxuICApO1xuICBjaGFtcGlvbkltZy50YWJJbmRleCA9IDA7XG4gIGNoYW1waW9uQ29udGFpbmVyLnRhYkluZGV4ID0gMDtcbiAgY29uc3QgY2hhbXBpb25OYW1lV3JhcHBlciA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdjaGFtcGlvbi1uYW1lLXdyYXBwZXInLCBjaGFtcGlvbkNvbnRhaW5lcik7XG4gIGNvbnN0IGNoYW1waW9uTmFtZSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnY2hhbXBpb24tbmFtZScsIGNoYW1waW9uTmFtZVdyYXBwZXIpO1xuICBjaGFtcGlvbk5hbWUudGV4dENvbnRlbnQgPSBjaGFtcGlvbi5uYW1lO1xufTtcblxuZXhwb3J0IHtcbiAgcmVuZGVySGVhZGVyRGV0YWlscyxcbiAgcmVuZGVyU3RhdE92ZXJ2aWV3LFxuICByZW5kZXJDaGFtcGlvbkxhbmUsXG4gIHJlbmRlckRhbWFnZVN0YXRzLFxuICBpbWFnZXMsXG4gIHJlbmRlck1hdGNodXBzSW5mbyxcbiAgY3JlYXRlQ2hhbXBpb25Db250YWluZXIsXG59O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIC0tcmFzaW4tYmxhY2s6ICMxZDFlMmM7XFxuICAtLXRyYW5zcGFyZW50LXJhc2luLWJsYWNrOiAjMWQxZTJjYzc7XFxuICAtLWRhcmstZ29sZDogIzkyNzU0MztcXG4gIC0tbGlnaHQtZ29sZDogI2M3YWI2ZTtcXG59XFxuXFxuI2NoYW1waW9ucy1wYWdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IC00O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCYXJsb3dcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLmFwcC1uYW1lLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgcGFkZGluZzogMC4zZW07XFxuICBib3JkZXItcmFkaXVzOiA4cHggMHB4IDhweCAwO1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLmFwcC1uYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBsZXR0ZXItc3BhY2luZzogM3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLmFwcC1uYW1lLWNvbnRhaW5lcjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLnBhZ2UtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFlbSAwO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci13aWR0aDogMCAwIDJweCAwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5zZWFyY2gtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLmF1dG8tY29tcGxldGUtbmFtZXMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZDRkNDtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICBib3JkZXItdG9wOiBub25lO1xcbiAgei1pbmRleDogNDtcXG4gIHRvcDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTRyZW07XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5hdXRvLWNvbXBsZXRlLW5hbWUtd3JhcHBlciB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDRkNGQ0O1xcbiAgY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5hdXRvLWNvbXBsZXRlLW5hbWUtd3JhcHBlcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5hdXRvLWNvbXBsZXRlLW5hbWUtd3JhcHBlcjpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5zZWFyY2gge1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBtaW4td2lkdGg6IDE4ZW07XFxuICBiYWNrZ3JvdW5kOiAjZTJlNGU5O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbWluLWhlaWdodDogMi42ZW07XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5jaGFtcGlvbnMtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAxZW07XFxuICBtYXgtd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi10b3A6IDJlbTtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5jaGFtcGlvbi1jb250YWluZXIuc2hvd24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1heC13aWR0aDogOXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi10b3A6IDEuNWVtO1xcbiAgb3BhY2l0eTogMC44O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcbiNjaGFtcGlvbnMtcGFnZSAuY2hhbXBpb24tY29udGFpbmVyLnNob3duOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLmNoYW1waW9uLWNvbnRhaW5lci5zaG93bjpmb2N1cyB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5jaGFtcGlvbi1jb250YWluZXIuaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbiNjaGFtcGlvbnMtcGFnZSAuY2hhbXBpb24taW1nIHtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiA4JTtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5jaGFtcGlvbi1pbWc6Zm9jdXMgLmNoYW1waW9uLWNvbnRhaW5lci5zaG93biB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5jaGFtcGlvbi1uYW1lLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAtMy4yZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudC1yYXNpbi1ibGFjayk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDAuMmVtIDAgMC4yZW07XFxufVxcbiNjaGFtcGlvbnMtcGFnZSAuY2hhbXBpb24tbmFtZSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmFybG93XFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5maWx0ZXItc29ydC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogNTclO1xcbiAgbWFyZ2luOiAxZW0gYXV0byAzZW0gYXV0bztcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5sYW5lLWZpbHRlci1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmbGV4OiAxO1xcbiAgd2lkdGg6IDc2JTtcXG4gIG1hcmdpbjogMWVtIGF1dG87XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5oZWFkZXItb3B0aW9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjNzA3NTdhO1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLmhlYWRlci1vcHRpb246aG92ZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IHZhcigtLWxpZ2h0LWdvbGQpO1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLmhlYWRlci1vcHRpb24uYWN0aXZlIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCB2YXIoLS1saWdodC1nb2xkKTtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5kcm9wZG93biB7XFxuICBtYXJnaW46IDAgMC40ZW0gMC40ZW0gMC40ZW07XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbGV4OiAxO1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLmRyb3Bkb3duLWJ0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZGZlMTtcXG4gIGNvbG9yOiAjMmYxZDFkO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5kcm9wZG93bi1idG46OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCLinqRcXFwiO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLmRyb3Bkb3duLW9wdGlvbnMge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDI7XFxufVxcbiNjaGFtcGlvbnMtcGFnZSAuZHJvcGRvd24tb3B0aW9uIHtcXG4gIGNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZjhmOGY4O1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLmRyb3Bkb3duLW9wdGlvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFkZWRlO1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLmRyb3Bkb3duLW9wdGlvbi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxufVxcbiNjaGFtcGlvbnMtcGFnZSAubG9hZGVyIHtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIG1hcmdpbjogNTBweCBhdXRvO1xcbiAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XFxuICB3aWR0aDogMTFlbTtcXG4gIGhlaWdodDogMTFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQ6ICMyZTM0MzY7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMmUzNDM2IDEwJSwgcmdiYSgxNDMsIDg5LCAyLCAwKSA0MiUpO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzJlMzQzNiAxMCUsIHJnYmEoMTQzLCA4OSwgMiwgMCkgNDIlKTtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMmUzNDM2IDEwJSwgcmdiYSgxNDMsIDg5LCAyLCAwKSA0MiUpO1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMmUzNDM2IDEwJSwgcmdiYSgxNDMsIDg5LCAyLCAwKSA0MiUpO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMmUzNDM2IDEwJSwgcmdiYSgxNDMsIDg5LCAyLCAwKSA0MiUpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGxvYWQzIDEuNHMgaW5maW5pdGUgbGluZWFyO1xcbiAgYW5pbWF0aW9uOiBsb2FkMyAxLjRzIGluZmluaXRlIGxpbmVhcjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDE3LjNlbTtcXG4gIHotaW5kZXg6IDU7XFxufVxcbiNjaGFtcGlvbnMtcGFnZSAubG9hZGVyOmJlZm9yZSB7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJSAwIDAgMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5sb2FkZXI6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgd2lkdGg6IDc1JTtcXG4gIGhlaWdodDogNzUlO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBtYXJnaW46IGF1dG87XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkMyB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBsb2FkMyB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDg1MHB4KSB7XFxuICAjY2hhbXBpb25zLXBhZ2UgLmNoYW1waW9ucy1zZWN0aW9uIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gIH1cXG4gICNjaGFtcGlvbnMtcGFnZSAuY2hhbXBpb24tY29udGFpbmVyLnNob3duIHtcXG4gICAgbWF4LXdpZHRoOiAxMHJlbTtcXG4gIH1cXG4gICNjaGFtcGlvbnMtcGFnZSAubGFuZS1maWx0ZXItaGVhZGVyIHtcXG4gICAgd2lkdGg6IDU0JTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge1xcbiAgI2NoYW1waW9ucy1wYWdlIC5kcm9wZG93biB7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgfVxcbiAgI2NoYW1waW9ucy1wYWdlIC5jaGFtcGlvbnMtc2VjdGlvbiB7XFxuICAgIGdyaWQtY29sdW1uLWdhcDogMDtcXG4gIH1cXG4gICNjaGFtcGlvbnMtcGFnZSAuY2hhbXBpb24tbmFtZS13cmFwcGVyIHtcXG4gICAgbWFyZ2luLXRvcDogLTMuNmVtO1xcbiAgfVxcbiAgI2NoYW1waW9ucy1wYWdlIC5jaGFtcGlvbi1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAxLjRlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgI2NoYW1waW9ucy1wYWdlIC5jaGFtcGlvbnMtc2VjdGlvbiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxNTAwcHgpIHtcXG4gICNjaGFtcGlvbnMtcGFnZSAuY2hhbXBpb25zLXNlY3Rpb24ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xcbiAgfVxcbiAgI2NoYW1waW9ucy1wYWdlIC5jaGFtcGlvbi1jb250YWluZXIuc2hvd24ge1xcbiAgICBtYXgtd2lkdGg6IDEycmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gICNjaGFtcGlvbnMtcGFnZSAuaGVhZGVyLW9wdGlvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMC41ZW07XFxuICB9XFxuICAjY2hhbXBpb25zLXBhZ2UgLmZpbHRlci1zb3J0LXNlY3Rpb24ge1xcbiAgICB3aWR0aDogOTQlO1xcbiAgfVxcbiAgI2NoYW1waW9ucy1wYWdlIC5zZWFyY2gge1xcbiAgICBtaW4td2lkdGg6IDE2ZW07XFxuICAgIG1pbi1oZWlnaHQ6IDEuNmVtO1xcbiAgICBmb250LXNpemU6IDAuOTVlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAjY2hhbXBpb25zLXBhZ2UgLmNoYW1waW9ucy1zZWN0aW9uIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIH1cXG4gICNjaGFtcGlvbnMtcGFnZSAucGFnZS1oZWFkZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgI2NoYW1waW9ucy1wYWdlIC5hcHAtbmFtZS1jb250YWluZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAzNjBweCkge1xcbiAgI2NoYW1waW9ucy1wYWdlIC5sYW5lLWZpbHRlci1oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlc2hlZXRzL2NoYW1waW9ucy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQUFoQjtFQUNDLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUFFRDs7QUFDQTtFQUNFLHNCQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBRUY7O0FBQ0E7RUFDRSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0FBRUY7QUFBRTtFQUNFLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0FBRUo7QUFDRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNKO0FBRUU7RUFDRSx1QkFBQTtFQUNBLHVCQUFBO0FBQUo7QUFHRTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFESjtBQUlFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBRko7QUFLRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBSEo7QUFNRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBSko7QUFPRTtFQUNFLG1DQUFBO0FBTEo7QUFRRTtFQUNFLG1DQUFBO0FBTko7QUFTRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBUEo7QUFVRTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFSSjtBQVdFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtBQVRKO0FBWUU7RUFDRSxzQkFBQTtFQUNBLFVBQUE7QUFWSjtBQWFFO0VBQ0Usc0JBQUE7RUFDQSxVQUFBO0FBWEo7QUFjRTtFQUNFLGFBQUE7QUFaSjtBQWVFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFiSjtBQWlCSTtFQUNFLHNCQUFBO0VBQ0EsVUFBQTtBQWZOO0FBbUJFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdEQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQWpCSjtBQW9CRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7QUFsQko7QUFxQkU7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUVBLHlCQUFBO0FBcEJKO0FBdUJFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQXJCSjtBQXdCRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBdEJKO0FBeUJFO0VBQ0UsWUFBQTtFQUNBLDBDQUFBO0FBdkJKO0FBMEJFO0VBQ0UsWUFBQTtFQUNBLDBDQUFBO0FBeEJKO0FBMkJFO0VBQ0UsMkJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0FBekJKO0FBNEJFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0FBMUJKO0FBNkJFO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7QUEzQko7QUE4QkU7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBNUJKO0FBK0JFO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtBQTdCSjtBQWdDRTtFQUNFLHlCQUFBO0FBOUJKO0FBaUNFO0VBQ0UsbUNBQUE7QUEvQko7QUFrQ0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRFQUFBO0VBQ0EsK0VBQUE7RUFDQSwwRUFBQTtFQUNBLDJFQUFBO0VBQ0EsMkVBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0VBQ0EscUNBQUE7RUFDQSxnQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQWhDSjtBQWtDRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FBaENKO0FBa0NFO0VBQ0UsOEJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUFoQ0o7QUFrQ0U7RUFDRTtJQUNFLCtCQUFBO0lBQ0EsdUJBQUE7RUFoQ0o7RUFrQ0U7SUFDRSxpQ0FBQTtJQUNBLHlCQUFBO0VBaENKO0FBQ0Y7QUFrQ0U7RUFDRTtJQUNFLCtCQUFBO0lBQ0EsdUJBQUE7RUFoQ0o7RUFrQ0U7SUFDRSxpQ0FBQTtJQUNBLHlCQUFBO0VBaENKO0FBQ0Y7QUFvQ0U7RUFDRTtJQUNFLHFDQUFBO0VBbENKO0VBcUNFO0lBQ0UsZ0JBQUE7RUFuQ0o7RUFzQ0U7SUFDRSxVQUFBO0VBcENKO0FBQ0Y7QUF1Q0U7RUFFRTtJQUNFLGlCQUFBO0VBdENKO0VBeUNFO0lBQ0Usa0JBQUE7RUF2Q0o7RUEwQ0U7SUFDRSxrQkFBQTtFQXhDSjtFQTJDRTtJQUNFLGdCQUFBO0VBekNKO0FBQ0Y7QUE0Q0U7RUFDRTtJQUNFLHFDQUFBO0VBMUNKO0FBQ0Y7QUE2Q0U7RUFDRTtJQUNFLHFDQUFBO0VBM0NKO0VBOENFO0lBQ0UsZ0JBQUE7RUE1Q0o7QUFDRjtBQStDRTtFQUNFO0lBQ0UsbUJBQUE7RUE3Q0o7RUFnREU7SUFDRSxVQUFBO0VBOUNKO0VBaURFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7RUEvQ0o7QUFDRjtBQWtERTtFQUNFO0lBQ0UscUNBQUE7RUFoREo7RUFtREU7SUFDRSxzQkFBQTtFQWpESjtFQW9ERTtJQUNFLGtCQUFBO0VBbERKO0FBQ0Y7QUFxREU7RUFDRTtJQUNFLGNBQUE7RUFuREo7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLXJhc2luLWJsYWNrOiAjMWQxZTJjO1xcbiAgLS10cmFuc3BhcmVudC1yYXNpbi1ibGFjazogIzFkMWUyY2M3O1xcbiAgLS1kYXJrLWdvbGQ6ICM5Mjc1NDM7XFxuICAtLWxpZ2h0LWdvbGQ6ICNjN2FiNmU7XFxufVxcblxcbiNjaGFtcGlvbnMtcGFnZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAtNDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmFybG93XFxcIiwgc2Fucy1zZXJpZjtcXG4gIFxcbiAgLmFwcC1uYW1lLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICAgIHBhZGRpbmc6IDAuM2VtO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHggMHB4IDhweCAwO1xcbiAgfVxcblxcbiAgLmFwcC1uYW1lIHtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuXFxuICAuYXBwLW5hbWUtY29udGFpbmVyOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgfVxcblxcbiAgLnBhZ2UtaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDFlbSAwO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICAgIGJvcmRlci13aWR0aDogMCAwIDJweCAwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLnNlYXJjaC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5hdXRvLWNvbXBsZXRlLW5hbWVzIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDRkNGQ0O1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICB6LWluZGV4OiA0O1xcbiAgICB0b3A6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAxNHJlbTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoOyBcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5hdXRvLWNvbXBsZXRlLW5hbWUtd3JhcHBlciB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDRkNGQ0OyBcXG4gICAgY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuYXV0by1jb21wbGV0ZS1uYW1lLXdyYXBwZXI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gIH1cXG5cXG4gIC5hdXRvLWNvbXBsZXRlLW5hbWUtd3JhcHBlcjpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgfVxcbiAgXFxuICAuc2VhcmNoIHtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIG1pbi13aWR0aDogMThlbTtcXG4gICAgYmFja2dyb3VuZDogI2UyZTRlOTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBtaW4taGVpZ2h0OiAyLjZlbTtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICB9XFxuXFxuICAuY2hhbXBpb25zLXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBncmlkLWF1dG8tcm93czogYXV0bztcXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAxZW07XFxuICAgIG1heC13aWR0aDogODAlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDJlbTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1jb250YWluZXIuc2hvd24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXgtd2lkdGg6IDlyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luLXRvcDogMS41ZW07XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tY29udGFpbmVyLnNob3duOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1jb250YWluZXIuc2hvd246Zm9jdXMge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLWNvbnRhaW5lci5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLWltZyB7XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogOCU7XFxuICB9XFxuXFxuICAuY2hhbXBpb24taW1nOmZvY3VzIHtcXG4gICAgLmNoYW1waW9uLWNvbnRhaW5lci5zaG93bntcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1uYW1lLXdyYXBwZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IC0zLjJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQtcmFzaW4tYmxhY2spO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwLjJlbSAwIDAuMmVtO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLW5hbWUge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQmFybG93XFxcIiwgc2Fucy1zZXJpZjtcXG4gIH1cXG4gIFxcbiAgLmZpbHRlci1zb3J0LXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogNTclO1xcbiAgXFxuICAgIG1hcmdpbjogMWVtIGF1dG8gM2VtIGF1dG87XFxuICB9XFxuICBcXG4gIC5sYW5lLWZpbHRlci1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZmxleDogMTtcXG4gICAgd2lkdGg6IDc2JTtcXG4gICAgbWFyZ2luOiAxZW0gYXV0bztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB9XFxuXFxuICAuaGVhZGVyLW9wdGlvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6ICM3MDc1N2E7XFxuICB9XFxuXFxuICAuaGVhZGVyLW9wdGlvbjpob3ZlciB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgfVxcblxcbiAgLmhlYWRlci1vcHRpb24uYWN0aXZlIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggdmFyKC0tbGlnaHQtZ29sZCk7XFxuICB9XFxuXFxuICAuZHJvcGRvd24ge1xcbiAgICBtYXJnaW46IDAgMC40ZW0gMC40ZW0gMC40ZW07XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmbGV4OiAxO1xcbiAgfVxcblxcbiAgLmRyb3Bkb3duLWJ0biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZkZmUxO1xcbiAgICBjb2xvcjogIzJmMWQxZDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkO1xcbiAgfVxcblxcbiAgLmRyb3Bkb3duLWJ0bjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXDI3QTRcXFwiO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gIH1cXG5cXG4gIC5kcm9wZG93bi1vcHRpb25zIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZGlzcGxheTogbm9uZTsgXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHotaW5kZXg6IDI7XFxuICB9XFxuICBcXG4gIC5kcm9wZG93bi1vcHRpb24ge1xcbiAgICBjb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spOyBcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2Y4ZjhmODtcXG4gIH1cXG5cXG4gIC5kcm9wZG93bi1vcHRpb246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFkZWRlO1xcbiAgfVxcblxcbiAgLmRyb3Bkb3duLW9wdGlvbi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gIH1cXG5cXG4gIC5sb2FkZXIge1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xcbiAgICB0ZXh0LWluZGVudDogLTk5OTllbTtcXG4gICAgd2lkdGg6IDExZW07XFxuICAgIGhlaWdodDogMTFlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kOiAjMmUzNDM2O1xcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMmUzNDM2IDEwJSwgcmdiYSgxNDMsODksMiwgMCkgNDIlKTtcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzJlMzQzNiAxMCUsIHJnYmEoMTQzLDg5LDIsIDApIDQyJSk7XFxuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMmUzNDM2IDEwJSwgcmdiYSgxNDMsODksMiwgMCkgNDIlKTtcXG4gICAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMmUzNDM2IDEwJSwgcmdiYSgxNDMsODksMiwgMCkgNDIlKTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMmUzNDM2IDEwJSwgcmdiYSgxNDMsODksMiwgMCkgNDIlKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZDMgMS40cyBpbmZpbml0ZSBsaW5lYXI7XFxuICAgIGFuaW1hdGlvbjogbG9hZDMgMS40cyBpbmZpbml0ZSBsaW5lYXI7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAxNy4zZW07XFxuICAgIHotaW5kZXg6IDU7XFxuICB9XFxuICAubG9hZGVyOmJlZm9yZSB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlIDAgMCAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgY29udGVudDogJyc7XFxuICB9XFxuICAubG9hZGVyOmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBoZWlnaHQ6IDc1JTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogMDtcXG4gIH1cXG4gIEAtd2Via2l0LWtleWZyYW1lcyBsb2FkMyB7XFxuICAgIDAlIHtcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICB9XFxuICB9XFxuICBAa2V5ZnJhbWVzIGxvYWQzIHtcXG4gICAgMCUge1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIH1cXG4gIH1cXG4gIFxcblxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDg1MHB4KSB7XFxuICAgIC5jaGFtcGlvbnMtc2VjdGlvbiB7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gICAgfVxcblxcbiAgICAuY2hhbXBpb24tY29udGFpbmVyLnNob3duIHtcXG4gICAgICBtYXgtd2lkdGg6IDEwcmVtO1xcbiAgICB9XFxuXFxuICAgIC5sYW5lLWZpbHRlci1oZWFkZXIge1xcbiAgICAgIHdpZHRoOiA1NCU7XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcXG5cXG4gICAgLmRyb3Bkb3duIHtcXG4gICAgICBncmlkLXJvdy1zdGFydDogMjtcXG4gICAgfVxcblxcbiAgICAuY2hhbXBpb25zLXNlY3Rpb24ge1xcbiAgICAgIGdyaWQtY29sdW1uLWdhcDogMDtcXG4gICAgfVxcblxcbiAgICAuY2hhbXBpb24tbmFtZS13cmFwcGVyIHtcXG4gICAgICBtYXJnaW4tdG9wOiAtMy42ZW07XFxuICAgIH1cXG5cXG4gICAgLmNoYW1waW9uLW5hbWUge1xcbiAgICAgIGZvbnQtc2l6ZTogMS40ZW07XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gICAgLmNoYW1waW9ucy1zZWN0aW9uIHtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgKG1pbi13aWR0aDogMTUwMHB4KSB7XFxuICAgIC5jaGFtcGlvbnMtc2VjdGlvbiB7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXG4gICAgfVxcblxcbiAgICAuY2hhbXBpb24tY29udGFpbmVyLnNob3duIHtcXG4gICAgICBtYXgtd2lkdGg6IDEycmVtO1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gICAgLmhlYWRlci1vcHRpb24ge1xcbiAgICAgIG1hcmdpbi1yaWdodDogMC41ZW07XFxuICAgIH1cXG5cXG4gICAgLmZpbHRlci1zb3J0LXNlY3Rpb24ge1xcbiAgICAgIHdpZHRoOiA5NCU7XFxuICAgIH1cXG5cXG4gICAgLnNlYXJjaCB7XFxuICAgICAgbWluLXdpZHRoOiAxNmVtO1xcbiAgICAgIG1pbi1oZWlnaHQ6IDEuNmVtO1xcbiAgICAgIGZvbnQtc2l6ZTogMC45NWVtO1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gICAgLmNoYW1waW9ucy1zZWN0aW9uIHtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICB9XFxuXFxuICAgIC5wYWdlLWhlYWRlciB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAuYXBwLW5hbWUtY29udGFpbmVyIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAzNjBweCkge1xcbiAgICAubGFuZS1maWx0ZXItaGVhZGVyIHtcXG4gICAgICBmb250LXNpemU6IDFlbTtcXG4gICAgfVxcbiAgfVxcbiB9XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbjpyb290IHtcXG4gIC0tcmFzaW4tYmxhY2s6ICMxZDFlMmM7XFxuICAtLWRhcmstZ29sZDogIzkyNzU0MztcXG4gIC0tbGlnaHQtZ29sZDogI2M3YWI2ZTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgcGFkZGluZzogMnJlbSAwO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmFybG93XFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuLm1vZGFsICNtYWluLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nOiAwO1xcbiAgbWF4LXdpZHRoOiA3NSU7XFxuICBtaW4taGVpZ2h0OiA0OXJlbTtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5tb2RhbCAjbWFpbi1jb250YWluZXIgI21haW4ge1xcbiAgY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxufVxcbi5tb2RhbCAubW9kYWwtaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBlMDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBiZjtcXG59XFxuLm1vZGFsIC5uYXZpZ2F0aW9uLWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmNsb3NlLW1vZGFsLWJ0bi13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDEuMmVtO1xcbn1cXG4ubW9kYWwgLmNsb3NlLW1vZGFsLWJ0biB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1zaXplOiAxLjZlbTtcXG59XFxuLm1vZGFsIC5jbG9zZS1tb2RhbC1idG46aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbn1cXG4ubW9kYWwgLm1vZGFsLW5hdi1saW5rcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBmb250LXNpemU6IDIycHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm1vZGFsIC5tb2RhbC1uYXYtbGluayB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tdG9wOiAwLjVlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG4ubW9kYWwgLm1vZGFsLW5hdi1saW5rOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLWhlYWRpbmcge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLW5hbWUge1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXRpdGxlIHtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tcm9sZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXJvbGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1yZXNvdXJjZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXJvbGUtaW1hZ2Uge1xcbiAgaGVpZ2h0OiAzLjVyZW07XFxuICB3aWR0aDogMy41cmVtO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXJlc291cmNlLWltYWdlIHtcXG4gIGhlaWdodDogMy41cmVtO1xcbiAgd2lkdGg6IDMuNXJlbTtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1yb2xlLW5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1yZXNvdXJjZS1uYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tbWFpbi1pbmZvIHtcXG4gIHBhZGRpbmc6IDEuOHJlbTtcXG4gIG1heC13aWR0aDogMzRyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogbGFzdCBiYXNlbGluZTtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xcbiAgZnJvbSB7XFxuICAgIHRvcDogLTMwMHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0b3A6IDA7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XFxuICBmcm9tIHtcXG4gICAgdG9wOiAtMzAwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICB0byB7XFxuICAgIHRvcDogMDtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuLm1vZGFsIC5sb3JlLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwZTA7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbn1cXG4ubW9kYWwgLnN1YmhlYWRpbmcge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMC40ZW07XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tb2RhbCAuYWJpbGl0aWVzLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwZTA7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgd2lkdGg6IDI4ZW07XFxufVxcbi5tb2RhbCAuYWJpbGl0aWVzLWhlYWRpbmcge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmFiaWxpdHktaW1ncyB7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcbi5tb2RhbCAuYWJpbGl0eS1kZXNjcmlwdGlvbiB7XFxuICBtYXJnaW4tdG9wOiAwLjVlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLWRldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tZXh0cmEtaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLm1vZGFsIC5hYmlsaXR5LWluZm8ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLm1vZGFsIC5hYmlsaXR5LWluZm8uYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ubW9kYWwgLnNwZWxsLWltZyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDAgMC41cmVtO1xcbiAgaGVpZ2h0OiAzLjNyZW07XFxuICB3aWR0aDogMy4zcmVtO1xcbn1cXG4ubW9kYWwgLnNwZWxsLWltZy5jbGlja2VkIHtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBib3JkZXItd2lkdGg6IDRweDtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi10aXBzLXNlY3Rpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMGUwO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC42ZW07XFxuICBsaW5lLWhlaWdodDogMS40O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XFxuICBtYXgtd2lkdGg6IDM0cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXRpcHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tdGlwIHtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuLm1vZGFsICNzdGF0cy1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMDtcXG4gIG1heC13aWR0aDogNzUlO1xcbiAgbWluLWhlaWdodDogNDlyZW07XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5tb2RhbCAjc3RhdHMtY29udGFpbmVyICNzdGF0cyB7XFxuICBjb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1zdGF0cy1vdmVydmlldyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBtYXJnaW4tdG9wOiAwLjVlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbiAgbWF4LXdpZHRoOiAyNXJlbTtcXG4gIG1pbi13aWR0aDogMjByZW07XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcbi5tb2RhbCAud2luLXJhdGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5tb2RhbCAucGljay1yYXRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ubW9kYWwgLmxhbmUtaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5tb2RhbCAucGljay1yYXRlLXZhbHVlIHtcXG4gIG1hcmdpbi10b3A6IDAuNGVtO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbn1cXG4ubW9kYWwgLndpbi1yYXRlLXZhbHVlIHtcXG4gIG1hcmdpbi10b3A6IDAuNGVtO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbn1cXG4ubW9kYWwgLmxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1kYW1hZ2UtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBlMDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBtYXgtaGVpZ2h0OiAxNy41cmVtO1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcbi5tb2RhbCAuZGFtYWdlLWhlYWRpbmcge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmNpcmN1bGFyLWNoYXJ0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1heC1oZWlnaHQ6IDE0ZW07XFxufVxcbi5tb2RhbCAuY2lyY2xlIHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2Utd2lkdGg6IDIuMjtcXG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcXG4gIGFuaW1hdGlvbjogcHJvZ3Jlc3MgMXMgZWFzZS1vdXQgZm9yd2FyZHM7XFxufVxcbi5tb2RhbCAjbWFnaWMtZGFtYWdlLXN0cm9rZSB7XFxuICBzdHJva2U6ICMzNWE3ZmY7XFxufVxcbi5tb2RhbCAjcGh5c2ljYWwtZGFtYWdlLXN0cm9rZSB7XFxuICBzdHJva2U6ICNmZjU5NjQ7XFxufVxcbi5tb2RhbCAjdHJ1ZS1kYW1hZ2Utc3Ryb2tlIHtcXG4gIHN0cm9rZTogI2ZmZTc0YztcXG59XFxuQGtleWZyYW1lcyBwcm9ncmVzcyB7XFxuICAwJSB7XFxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDAgMTAwO1xcbiAgfVxcbn1cXG4ubW9kYWwgLnRvdGFsLWRhbWFnZS10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogNHB4O1xcbiAgdGV4dC1hbmNob3I6IG1pZGRsZTtcXG4gIGZpbGw6IHdoaXRlO1xcbn1cXG4ubW9kYWwgLnRvdGFsLWRhbWFnZS1sYWJlbCB7XFxuICBmb250LXNpemU6IDNweDtcXG4gIHRleHQtYW5jaG9yOiBtaWRkbGU7XFxuICBmaWxsOiB2YXIoLS1kYXJrLWdvbGQpO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLW1haW4tc3RhdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLWl0ZW0tYnVpbGRzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBlMDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBtYXgtaGVpZ2h0OiAxNy41cmVtO1xcbn1cXG4ubW9kYWwgLmRhbWFnZS1zdGF0cy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5tb2RhbCAuZGFtYWdlLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1heC1oZWlnaHQ6IDkyJTtcXG4gIGhlaWdodDogOTIlO1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcbi5tb2RhbCAuZGFtYWdlLXR5cGUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcbi5tb2RhbCAuZGFtYWdlLXN0YXRzIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcbi5tb2RhbCAjcGh5c2ljYWwtZGFtYWdlLWxhYmVsIHtcXG4gIGNvbG9yOiAjZmY1OTY0O1xcbn1cXG4ubW9kYWwgI21hZ2ljLWRhbWFnZS1sYWJlbCB7XFxuICBjb2xvcjogIzM1YTdmZjtcXG59XFxuLm1vZGFsICN0cnVlLWRhbWFnZS1sYWJlbCB7XFxuICBjb2xvcjogI2ZmZTc0YztcXG59XFxuLm1vZGFsIC5pdGVtLWRldGFpbHMtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBlMDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMDtcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHdpZHRoOiA0MCU7XFxuICByaWdodDogMTBlbTtcXG4gIG1hcmdpbi1ib3R0b206IDMuNWVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubW9kYWwgLml0ZW0tbmFtZSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4ubW9kYWwgLm1haW4taXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbn1cXG4ubW9kYWwgLmNvc3QtbGFiZWwge1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4ubW9kYWwgLmNvbXBvbmVudC1pdGVtcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLm1vZGFsIC5jb21wb25lbnQtaXRlbS1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLm1vZGFsIC5jb3N0LWFtb3VudCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5tb2RhbCAuY29tcG9uZW50LWl0ZW0tY29zdC1sYWJlbCB7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5tb2RhbCAuY29tcG9uZW50LWl0ZW0tYW1vdW50IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLm1vZGFsIC5jb21wb25lbnQtaXRlbS1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwZTA7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjA7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ubW9kYWwgLml0ZW0tc2V0cy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXgtaGVpZ2h0OiA5MCU7XFxufVxcbi5tb2RhbCAuaXRlbS1zZXQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGJvcmRlci13aWR0aDogMnB4O1xcbiAgcGFkZGluZzogMC40ZW07XFxufVxcbi5tb2RhbCAubWFpbi1jb21wb25lbnQtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBlMDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYwNDAwODM7XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDBlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG59XFxuLm1vZGFsIC5pdGVtLWltZyB7XFxuICBtYXgtd2lkdGg6IDIuN2VtO1xcbiAgbWF4LWhlaWdodDogMi43ZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG59XFxuLm1vZGFsIC5jb21wb25lbnQtaXRlbS1pbWcge1xcbiAgbWF4LXdpZHRoOiAxLjhlbTtcXG4gIG1heC1oZWlnaHQ6IDEuOGVtO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLW1hdGNodXBzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBlMDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBtYXgtaGVpZ2h0OiAyNS4ycmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwIDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcbi5tb2RhbCAubWF0Y2h1cHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgbWF4LXdpZHRoOiAyNHJlbTtcXG59XFxuLm1vZGFsIC5tYXRjaHVwLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNjFhO1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBtYXJnaW46IGF1dG8gMC41ZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxufVxcbi5tb2RhbCAubWF0Y2h1cC1pbmZvOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE2MWFjOTtcXG59XFxuLm1vZGFsIC5tYXRjaHVwLXN0YXRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgXFxcIkFwcGxlIFNEIEdvdGhpYyBOZW9cXFwiLCBBcHBsZUdvdGhpYywgRG90dW0sIEFyaWFsLCBUYWhvbWE7XFxufVxcbi5tb2RhbCAuZW5lbXktY2hhbXBpb24taW1nIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG1heC1oZWlnaHQ6IDNlbTtcXG4gIG1heC13aWR0aDogM2VtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcbi5tb2RhbCAud2lucmF0ZS1hZ2FpbnN0LXBlcmNlbnRhZ2UuYmx1ZSB7XFxuICBjb2xvcjogIzM1YTdmZjtcXG59XFxuLm1vZGFsIC53aW5yYXRlLWFnYWluc3QtcGVyY2VudGFnZS5yZWQge1xcbiAgY29sb3I6ICNmZjU5NjQ7XFxufVxcbi5tb2RhbCAjc2tpbnMtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXgtd2lkdGg6IDc1JTtcXG4gIG1pbi1oZWlnaHQ6IDQ5cmVtO1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWluLWhlaWdodDogMDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWF4LXdpZHRoOiA5OSU7XFxuICB3aWR0aDogOTklO1xcbn1cXG4ubW9kYWwgI3NraW5zLWNvbnRhaW5lciAubmF2aWdhdGlvbi1iYXIge1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IHZhcigtLWRhcmstZ29sZCk7XFxufVxcbi5tb2RhbCAjc2tpbnMtY29udGFpbmVyICNza2lucyB7XFxuICBjb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG59XFxuLm1vZGFsICNza2lucy1jb250YWluZXIgLm1vZGFsLWhlYWRlciB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4ubW9kYWwgLnNraW4taW1hZ2UtY29udGFpbmVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubW9kYWwgLnNraW4taW1hZ2UtY29udGFpbmVyLnNob3duIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4ubW9kYWwgLnNraW4taW1hZ2Uge1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubW9kYWwgLnNraW4tbmFtZSB7XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuLm1vZGFsICNza2lucy1jb250YWluZXIgLmNoYW1waW9uLWhlYWRpbmcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmltZy1zY3JvbGwtYXJyb3cge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuLm1vZGFsIC5pbWctc2Nyb2xsLWFycm93OmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTEyMHB4KSB7XFxuICAubW9kYWwgLmNvbXBvbmVudC1pdGVtLWltZyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAubW9kYWwgLml0ZW0tc2V0cy1jb250YWluZXIge1xcbiAgICBtaW4taGVpZ2h0OiA4MCU7XFxuICB9XFxuICAubW9kYWwgLml0ZW0tZGV0YWlscy1jb250YWluZXIge1xcbiAgICBtaW4td2lkdGg6IDcwJTtcXG4gICAgcmlnaHQ6IC02ZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjUwcHgpIHtcXG4gIC5tb2RhbCAuaXRlbS1pbWcge1xcbiAgICBtYXgtaGVpZ2h0OiAyLjJyZW07XFxuICAgIG1heC13aWR0aDogMi4ycmVtO1xcbiAgfVxcbiAgLm1vZGFsIC5jaGFtcGlvbi1kZXRhaWxzIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgfVxcbiAgLm1vZGFsIC5hYmlsaXRpZXMtY29udGFpbmVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgbWF4LXdpZHRoOiAzMXJlbTtcXG4gIH1cXG4gIC5tb2RhbCAubG9yZS1jb250YWluZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuICAubW9kYWwgI21haW4tY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiA3NnJlbTtcXG4gIH1cXG4gIC5tb2RhbCAuaXRlbS1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgIG1pbi13aWR0aDogNzAlO1xcbiAgICByaWdodDogLTZlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICAubW9kYWwgLml0ZW0tc2V0cy1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcbiAgLm1vZGFsIC5pdGVtLXNldC1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLm1vZGFsIC5tYXRjaHVwcyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAubW9kYWwgLmNoYW1waW9uLW1hdGNodXBzIHtcXG4gICAgbWF4LWhlaWdodDogMjguMnJlbTtcXG4gIH1cXG4gIC5tb2RhbCAubWF0Y2h1cC1pbmZvIHtcXG4gICAgbWFyZ2luOiAwLjJlbSBhdXRvO1xcbiAgfVxcbiAgLm1vZGFsICNtYWluLWNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG4gIC5tb2RhbCAjc3RhdHMtY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiA2M3JlbTtcXG4gIH1cXG4gIC5tb2RhbCAuaXRlbS1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgIHJpZ2h0OiAtMWVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogODQwcHgpIHtcXG4gIC5tb2RhbCAuZGFtYWdlLWluZm8ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgfVxcbiAgLm1vZGFsIC5nYW1lcy1wbGF5ZWQtYWdhaW5zdCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAubW9kYWwgLmRhbWFnZS1zdGF0cy1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTYwcHgpIHtcXG4gIC5tb2RhbCAuY2hhbXBpb24tbWFpbi1zdGF0cyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAubW9kYWwgLml0ZW0tc2V0LWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB9XFxuICAubW9kYWwgLml0ZW0tc2V0cy1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLm1vZGFsIC5jaGFtcGlvbi1kYW1hZ2UtY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgLm1vZGFsIC5kYW1hZ2Utc3RhdHMtaW5mbyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAubW9kYWwgLmRhbWFnZS1pbmZvIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICB9XFxuICAubW9kYWwgLmRhbWFnZS10eXBlLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMC4yZW0gYXV0bztcXG4gIH1cXG4gIC5tb2RhbCAuY2lyY3VsYXItY2hhcnQge1xcbiAgICBtYXgtaGVpZ2h0OiAxOTVweDtcXG4gICAgbWF4LXdpZHRoOiA4MCU7XFxuICB9XFxuICAubW9kYWwgLmRhbWFnZS1zdGF0cy1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLm1vZGFsIC5jaGFtcGlvbi1yb2xlIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xcbiAgfVxcbiAgLm1vZGFsIC5jaGFtcGlvbi1yZXNvdXJjZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcXG4gIH1cXG4gIC5tb2RhbCAuY2hhbXBpb24tcm9sZXMge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICB9XFxuICAubW9kYWwgLnNwZWxsLWltZyB7XFxuICAgIGhlaWdodDogMi44ZW07XFxuICAgIHdpZHRoOiAyLjhlbTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgfVxcbiAgLm1vZGFsIC5pdGVtLWRldGFpbHMtY29udGFpbmVyIHtcXG4gICAgcmlnaHQ6IDJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDQxNHB4KSB7XFxuICAubW9kYWwgLmNoYW1waW9uLXN0YXRzLW92ZXJ2aWV3IHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBtaW4td2lkdGg6IDE3cmVtO1xcbiAgfVxcbiAgLm1vZGFsIC5jaGFtcGlvbi1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcbiAgLm1vZGFsIC5tb2RhbC1uYXYtbGlua3Mge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICB9XFxuICAubW9kYWwgLmNsb3NlLW1vZGFsLWJ0bi13cmFwcGVyIHtcXG4gICAgbGVmdDogMC43ZW07XFxuICB9XFxuICAubW9kYWwgLmNsb3NlLW1vZGFsLWJ0biB7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMzAwcHgpIHtcXG4gIC5tb2RhbCAjc2tpbnMtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXgtd2lkdGg6IDcwJTtcXG4gICAgbWluLWhlaWdodDogYXV0bztcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDE5NTBweCkge1xcbiAgLm1vZGFsICNza2lucy1jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDUwJTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlc2hlZXRzL21vZGFscy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBOERBO0VBQ0Usa0RBQUE7QUEzREY7O0FBOERBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGlDQUFBO0FBM0RGO0FBNkRFO0VBakNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSw0RUFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUF1QkUsY0FBQTtBQS9DSjtBQWlESTtFQUNFLHVCQUFBO0FBL0NOO0FBbURFO0VBdEZBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtF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Q0EsWUFBQTtJQUNBLFlBQUE7RUE5Q0o7RUFpREU7SUFDRSxVQUFBO0VBL0NKO0FBQ0Y7QUFrREU7RUFDRTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQWhESjtFQW1ERTtJQUNFLGVBQUE7RUFqREo7RUFvREU7SUFDRSxlQUFBO0VBbERKO0VBcURFO0lBQ0UsV0FBQTtFQW5ESjtFQXNERTtJQUNFLGdCQUFBO0VBcERKO0FBQ0Y7QUF1REU7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0VBckRKO0FBQ0Y7QUF3REU7RUFDRTtJQUNFLGNBQUE7RUF0REo7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1yYXNpbi1ibGFjazogIzFkMWUyYztcXG4gIC0tZGFyay1nb2xkOiAjOTI3NTQzO1xcbiAgLS1saWdodC1nb2xkOiAjYzdhYjZlO1xcbn1cXG5cXG5AbWl4aW4gY29udGFpbmVyQmFja2dyb3VuZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwZTA7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbn1cXG5cXG5AbWl4aW4gc3ViSGVhZGluZ1N0eWxlIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDAuNGVtO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5AbWl4aW4gaWNvblNpemUge1xcbiAgaGVpZ2h0OiAzLjVyZW07XFxuICB3aWR0aDogMy41cmVtO1xcbn1cXG5cXG5AbWl4aW4gaWNvblRleHQge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuQG1peGluIGljb25Db250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXG59XFxuXFxuQG1peGluIHNtYWxsTWFyZ2luIHtcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcblxcbkBtaXhpbiBtb2RhbENvbnRlbnRDb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMDtcXG4gIG1heC13aWR0aDogNzUlO1xcbiAgbWluLWhlaWdodDogNDlyZW07XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgcGFkZGluZzogMnJlbSAwO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC40KTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmFybG93XFxcIiwgc2Fucy1zZXJpZjtcXG5cXG4gICNtYWluLWNvbnRhaW5lciB7XFxuICAgIEBpbmNsdWRlIG1vZGFsQ29udGVudENvbnRhaW5lcigpO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG5cXG4gICAgI21haW4ge1xcbiAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgICB9XFxuICB9XFxuXFxuICAubW9kYWwtaGVhZGVyIHtcXG4gICAgQGluY2x1ZGUgY29udGFpbmVyQmFja2dyb3VuZCgpO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwYmY7XFxuICB9XFxuXFxuICAubmF2aWdhdGlvbi1iYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmNsb3NlLW1vZGFsLWJ0bi13cmFwcGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAxLjJlbTtcXG4gIH1cXG5cXG4gIC5jbG9zZS1tb2RhbC1idG4ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGZvbnQtc2l6ZTogMS42ZW07XFxuICB9ICBcXG5cXG4gIC5jbG9zZS1tb2RhbC1idG46aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICB9XFxuXFxuICAubW9kYWwtbmF2LWxpbmtzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAubW9kYWwtbmF2LWxpbmsge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIEBpbmNsdWRlIHNtYWxsTWFyZ2luKCk7XFxuICB9XFxuXFxuICAubW9kYWwtbmF2LWxpbms6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1oZWFkaW5nIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLW5hbWUge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICB9XFxuXFxuICAuY2hhbXBpb24tdGl0bGUge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgQGluY2x1ZGUgc21hbGxNYXJnaW4oKTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1yb2xlcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXJvbGUge1xcbiAgICBAaW5jbHVkZSBpY29uQ29udGFpbmVyKCk7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tcmVzb3VyY2Uge1xcbiAgICBAaW5jbHVkZSBpY29uQ29udGFpbmVyKCk7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tcm9sZS1pbWFnZSB7XFxuICAgIEBpbmNsdWRlIGljb25TaXplKCk7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tcmVzb3VyY2UtaW1hZ2Uge1xcbiAgICBAaW5jbHVkZSBpY29uU2l6ZSgpO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXJvbGUtbmFtZSB7XFxuICAgIEBpbmNsdWRlIGljb25UZXh0KCk7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tcmVzb3VyY2UtbmFtZSB7XFxuICAgIEBpbmNsdWRlIGljb25UZXh0KCk7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tbWFpbi1pbmZvIHtcXG4gICAgcGFkZGluZzogMS44cmVtO1xcbiAgICBtYXgtd2lkdGg6IDM0cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxhc3QgYmFzZWxpbmU7XFxuICB9XFxuXFxuICBALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XFxuICAgIGZyb20ge1xcbiAgICAgIHRvcDogLTMwMHB4O1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xcbiAgICBmcm9tIHtcXG4gICAgICB0b3A6IC0zMDBweDtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLmxvcmUtY29udGFpbmVyIHtcXG4gICAgQGluY2x1ZGUgY29udGFpbmVyQmFja2dyb3VuZCgpO1xcbiAgfVxcblxcbiAgLnN1YmhlYWRpbmcge1xcbiAgICBAaW5jbHVkZSBzdWJIZWFkaW5nU3R5bGUoKTtcXG4gIH1cXG5cXG4gIC5hYmlsaXRpZXMtY29udGFpbmVyIHtcXG4gICAgQGluY2x1ZGUgY29udGFpbmVyQmFja2dyb3VuZCgpO1xcbiAgICB3aWR0aDogMjhlbTtcXG4gIH1cXG5cXG4gIC5hYmlsaXRpZXMtaGVhZGluZyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5hYmlsaXR5LWltZ3Mge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgfVxcblxcbiAgLmFiaWxpdHktZGVzY3JpcHRpb24ge1xcbiAgICBAaW5jbHVkZSBzbWFsbE1hcmdpbigpO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLWRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1leHRyYS1pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5hYmlsaXR5LWluZm8ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmFiaWxpdHktaW5mby5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLnNwZWxsLWltZyB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luOiAwIDAuNXJlbTtcXG4gICAgaGVpZ2h0OiAzLjNyZW07XFxuICAgIHdpZHRoOiAzLjNyZW07XFxuICB9XFxuXFxuICAuc3BlbGwtaW1nLmNsaWNrZWQge1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICAgIGJvcmRlci13aWR0aDogNHB4O1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXRpcHMtc2VjdGlvbiB7XFxuICAgIEBpbmNsdWRlIGNvbnRhaW5lckJhY2tncm91bmQoKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG4gICAgbWF4LXdpZHRoOiAzNHJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXRpcHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXRpcCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gIH1cXG5cXG4gICNzdGF0cy1jb250YWluZXIge1xcbiAgICBAaW5jbHVkZSBtb2RhbENvbnRlbnRDb250YWluZXIoKTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG5cXG4gICAgI3N0YXRzIHtcXG4gICAgICBjb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLmNoYW1waW9uLXN0YXRzLW92ZXJ2aWV3IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIEBpbmNsdWRlIHNtYWxsTWFyZ2luKCk7XFxuICAgIG1heC13aWR0aDogMjVyZW07XFxuICAgIG1pbi13aWR0aDogMjByZW07XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gIH1cXG5cXG4gIC53aW4tcmF0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAucGljay1yYXRlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5sYW5lLWluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLnBpY2stcmF0ZS12YWx1ZSB7XFxuICAgIG1hcmdpbi10b3A6IDAuNGVtO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICB9XFxuXFxuICAud2luLXJhdGUtdmFsdWUge1xcbiAgICBtYXJnaW4tdG9wOiAwLjRlbTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgfVxcblxcbiAgLmxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLWRhbWFnZS1jb250YWluZXIge1xcbiAgICBAaW5jbHVkZSBjb250YWluZXJCYWNrZ3JvdW5kKCk7XFxuICAgIG1heC1oZWlnaHQ6IDE3LjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgfVxcblxcbiAgLmRhbWFnZS1oZWFkaW5nIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmNpcmN1bGFyLWNoYXJ0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWF4LWhlaWdodDogMTRlbTtcXG4gIH1cXG5cXG4gIC5jaXJjbGUge1xcbiAgICBmaWxsOiBub25lO1xcbiAgICBzdHJva2Utd2lkdGg6IDIuMjtcXG4gICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xcbiAgICBhbmltYXRpb246IHByb2dyZXNzIDFzIGVhc2Utb3V0IGZvcndhcmRzO1xcbiAgfVxcblxcbiAgI21hZ2ljLWRhbWFnZS1zdHJva2Uge1xcbiAgICBzdHJva2U6ICMzNWE3ZmY7XFxuICB9XFxuXFxuICAjcGh5c2ljYWwtZGFtYWdlLXN0cm9rZSB7XFxuICAgIHN0cm9rZTogI2ZmNTk2NDtcXG4gIH1cXG5cXG4gICN0cnVlLWRhbWFnZS1zdHJva2Uge1xcbiAgICBzdHJva2U6ICNmZmU3NGM7XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIHByb2dyZXNzIHtcXG4gICAgMCUge1xcbiAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDAgMTAwO1xcbiAgICB9XFxuICB9XFxuXFxuICAudG90YWwtZGFtYWdlLXRleHQge1xcbiAgICBmb250LXNpemU6IDRweDtcXG4gICAgdGV4dC1hbmNob3I6IG1pZGRsZTtcXG4gICAgZmlsbDogd2hpdGU7XFxuICB9XFxuXFxuICAudG90YWwtZGFtYWdlLWxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAzcHg7XFxuICAgIHRleHQtYW5jaG9yOiBtaWRkbGU7XFxuICAgIGZpbGw6IHZhcigtLWRhcmstZ29sZCk7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tbWFpbi1zdGF0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLWl0ZW0tYnVpbGRzIHtcXG4gICAgQGluY2x1ZGUgY29udGFpbmVyQmFja2dyb3VuZCgpO1xcbiAgICBtYXgtaGVpZ2h0OiAxNy41cmVtO1xcbiAgfVxcblxcbiAgLmRhbWFnZS1zdGF0cy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5kYW1hZ2UtaW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1heC1oZWlnaHQ6IDkyJTtcXG4gICAgaGVpZ2h0OiA5MiU7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgfVxcblxcbiAgLmRhbWFnZS10eXBlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgfVxcblxcbiAgLmRhbWFnZS1zdGF0cyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB9XFxuXFxuICAjcGh5c2ljYWwtZGFtYWdlLWxhYmVsIHtcXG4gICAgY29sb3I6ICNmZjU5NjQ7XFxuICB9XFxuXFxuICAjbWFnaWMtZGFtYWdlLWxhYmVsIHtcXG4gICAgY29sb3I6ICMzNWE3ZmY7XFxuICB9XFxuXFxuICAjdHJ1ZS1kYW1hZ2UtbGFiZWwge1xcbiAgICBjb2xvcjogI2ZmZTc0YztcXG4gIH1cXG5cXG4gIC5pdGVtLWRldGFpbHMtY29udGFpbmVyIHtcXG4gICAgQGluY2x1ZGUgY29udGFpbmVyQmFja2dyb3VuZCgpO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgcmlnaHQ6IDEwZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDMuNWVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuaXRlbS1uYW1lIHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgfVxcblxcbiAgLm1haW4taXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gIH1cXG5cXG4gIC5jb3N0LWxhYmVsIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICB9XFxuXFxuICAuY29tcG9uZW50LWl0ZW1zLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxuXFxuICAuY29tcG9uZW50LWl0ZW0tbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gIH1cXG5cXG4gIC5jb3N0LWFtb3VudCB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gIH1cXG5cXG4gIC5jb21wb25lbnQtaXRlbS1jb3N0LWxhYmVsIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICB9XFxuXFxuICAuY29tcG9uZW50LWl0ZW0tYW1vdW50IHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgfVxcblxcbiAgLmNvbXBvbmVudC1pdGVtLWRldGFpbHMtY29udGFpbmVyIHtcXG4gICAgQGluY2x1ZGUgY29udGFpbmVyQmFja2dyb3VuZCgpO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5pdGVtLXNldHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1heC1oZWlnaHQ6IDkwJTtcXG4gIH1cXG5cXG4gIC5pdGVtLXNldC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcbiAgICBwYWRkaW5nOiAwLjRlbTtcXG4gIH1cXG5cXG4gIC5tYWluLWNvbXBvbmVudC1jb250YWluZXIge1xcbiAgICBAaW5jbHVkZSBjb250YWluZXJCYWNrZ3JvdW5kKCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjA0MDA4MztcXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogMGVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgfVxcblxcbiAgLml0ZW0taW1nIHtcXG4gICAgbWF4LXdpZHRoOiAyLjdlbTtcXG4gICAgbWF4LWhlaWdodDogMi43ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gICAgLy9wYWRkaW5nOiAxZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xcbiAgfVxcblxcbiAgLmNvbXBvbmVudC1pdGVtLWltZyB7XFxuICAgIG1heC13aWR0aDogMS44ZW07XFxuICAgIG1heC1oZWlnaHQ6IDEuOGVtO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLW1hdGNodXBzIHtcXG4gICAgQGluY2x1ZGUgY29udGFpbmVyQmFja2dyb3VuZCgpO1xcbiAgICBtYXgtaGVpZ2h0OiAyNS4ycmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMCAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIH1cXG5cXG4gIC5tYXRjaHVwcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBtYXgtd2lkdGg6IDI0cmVtO1xcbiAgfVxcblxcbiAgLm1hdGNodXAtaW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzE2MWE7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBtYXJnaW46IGF1dG8gMC41ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIH1cXG5cXG4gIC5tYXRjaHVwLWluZm86aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNjFhYzk7XFxuICB9XFxuXFxuICAubWF0Y2h1cC1zdGF0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgXFxcIkFwcGxlIFNEIEdvdGhpYyBOZW9cXFwiLCBBcHBsZUdvdGhpYyxcXG4gICAgICBEb3R1bSwgQXJpYWwsIFRhaG9tYTtcXG4gIH1cXG5cXG4gIC5lbmVteS1jaGFtcGlvbi1pbWcge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG1heC1oZWlnaHQ6IDNlbTtcXG4gICAgbWF4LXdpZHRoOiAzZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbiAgfVxcblxcbiAgLndpbnJhdGUtYWdhaW5zdC1wZXJjZW50YWdlLmJsdWUge1xcbiAgICBjb2xvcjogIzM1YTdmZjtcXG4gIH1cXG5cXG4gIC53aW5yYXRlLWFnYWluc3QtcGVyY2VudGFnZS5yZWQge1xcbiAgICBjb2xvcjogI2ZmNTk2NDtcXG4gIH1cXG5cXG4gICNza2lucy1jb250YWluZXIge1xcbiAgICBAaW5jbHVkZSBtb2RhbENvbnRlbnRDb250YWluZXIoKTtcXG4gICAgZGlzcGxheTpub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1pbi1oZWlnaHQ6IDA7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDk5JTtcXG4gICAgd2lkdGg6IDk5JTtcXG5cXG4gICAgLm5hdmlnYXRpb24tYmFyIHtcXG4gICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggdmFyKC0tZGFyay1nb2xkKTtcXG4gICAgfVxcblxcbiAgICAjc2tpbnMge1xcbiAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpXFxuICAgIH1cXG4gIH1cXG5cXG4gICNza2lucy1jb250YWluZXIgLm1vZGFsLWhlYWRlciB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICB9XFxuXFxuICAuc2tpbi1pbWFnZS1jb250YWluZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAuc2tpbi1pbWFnZS1jb250YWluZXIuc2hvd24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG4gIC5za2luLWltYWdlIHtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5za2luLW5hbWUge1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gIH1cXG5cXG4gICNza2lucy1jb250YWluZXIgLmNoYW1waW9uLWhlYWRpbmcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5pbWctc2Nyb2xsLWFycm93IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgfVxcblxcbiAgLmltZy1zY3JvbGwtYXJyb3c6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIH1cXG5cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMTIwcHgpIHtcXG4gICAgLmNvbXBvbmVudC1pdGVtLWltZyB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAuaXRlbS1zZXRzLWNvbnRhaW5lciB7XFxuICAgICAgbWluLWhlaWdodDogODAlO1xcbiAgICB9XFxuXFxuICAgIC5pdGVtLWRldGFpbHMtY29udGFpbmVyIHtcXG4gICAgICBtaW4td2lkdGg6IDcwJTtcXG4gICAgICByaWdodDogLTZlbTtcXG4gICAgfVxcbiAgfVxcblxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyNTBweCkge1xcbiAgICAuaXRlbS1pbWcge1xcbiAgICAgIG1heC1oZWlnaHQ6IDIuMnJlbTtcXG4gICAgICBtYXgtd2lkdGg6IDIuMnJlbTtcXG4gICAgfVxcblxcbiAgICAuY2hhbXBpb24tZGV0YWlscyB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgICB9XFxuXFxuICAgIC5hYmlsaXRpZXMtY29udGFpbmVyIHtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgd2lkdGg6IGF1dG87XFxuICAgICAgbWF4LXdpZHRoOiAzMXJlbTtcXG4gICAgfVxcblxcbiAgICAubG9yZS1jb250YWluZXIge1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAjbWFpbi1jb250YWluZXIge1xcbiAgICAgIGhlaWdodDogNzZyZW07XFxuICAgIH1cXG5cXG4gICAgLml0ZW0tZGV0YWlscy1jb250YWluZXIge1xcbiAgICAgIG1pbi13aWR0aDogNzAlO1xcbiAgICAgIHJpZ2h0OiAtNmVtO1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gICAgLml0ZW0tc2V0cy1jb250YWluZXIge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIH1cXG5cXG4gICAgLml0ZW0tc2V0LWNvbnRhaW5lciB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAubWF0Y2h1cHMge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgLmNoYW1waW9uLW1hdGNodXBzIHtcXG4gICAgICBtYXgtaGVpZ2h0OiAyOC4ycmVtO1xcbiAgICB9XFxuXFxuICAgIC5tYXRjaHVwLWluZm8ge1xcbiAgICAgIG1hcmdpbjogMC4yZW0gYXV0bztcXG4gICAgfVxcblxcbiAgICAjbWFpbi1jb250YWluZXIge1xcbiAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAjc3RhdHMtY29udGFpbmVyIHtcXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgICAgbWluLWhlaWdodDogNjNyZW07XFxuICAgIH1cXG5cXG4gICAgLml0ZW0tZGV0YWlscy1jb250YWluZXIge1xcbiAgICAgIHJpZ2h0OiAtMWVtO1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgKG1heC13aWR0aDogODQwcHgpIHtcXG4gICAgLmRhbWFnZS1pbmZvIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgfVxcblxcbiAgICAuZ2FtZXMtcGxheWVkLWFnYWluc3Qge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLmRhbWFnZS1zdGF0cy1jb250YWluZXIge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NjBweCkge1xcbiAgICAuY2hhbXBpb24tbWFpbi1zdGF0cyB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAuaXRlbS1zZXQtY29udGFpbmVyIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICB9XFxuXFxuICAgIC5pdGVtLXNldHMtY29udGFpbmVyIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5jaGFtcGlvbi1kYW1hZ2UtY29udGFpbmVyIHtcXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAuZGFtYWdlLXN0YXRzLWluZm8ge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgLmRhbWFnZS1pbmZvIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICB9XFxuXFxuICAgIC5kYW1hZ2UtdHlwZS1jb250YWluZXIge1xcbiAgICAgIG1hcmdpbjogMC4yZW0gYXV0bztcXG4gICAgfVxcblxcbiAgICAuY2lyY3VsYXItY2hhcnQge1xcbiAgICAgIG1heC1oZWlnaHQ6IDE5NXB4O1xcbiAgICAgIG1heC13aWR0aDogODAlO1xcbiAgICB9XFxuXFxuICAgIC5kYW1hZ2Utc3RhdHMtY29udGFpbmVyIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5jaGFtcGlvbi1yb2xlIHtcXG4gICAgICBtYXJnaW4tbGVmdDogMC41ZW07XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcXG4gICAgfVxcblxcbiAgICAuY2hhbXBpb24tcmVzb3VyY2Uge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xcbiAgICB9XFxuXFxuICAgIC5jaGFtcGlvbi1yb2xlcyB7XFxuICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB9XFxuXFxuICAgIC5zcGVsbC1pbWcge1xcbiAgICAgIGhlaWdodDogMi44ZW07XFxuICAgICAgd2lkdGg6IDIuOGVtO1xcbiAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgfVxcblxcbiAgICAuaXRlbS1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgICAgcmlnaHQ6IDJlbTtcXG4gICAgfVxcbiAgfVxcblxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQxNHB4KSB7XFxuICAgIC5jaGFtcGlvbi1zdGF0cy1vdmVydmlldyB7XFxuICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgIG1pbi13aWR0aDogMTdyZW07XFxuICAgIH1cXG5cXG4gICAgLmNoYW1waW9uLW5hbWUge1xcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgfVxcblxcbiAgICAubW9kYWwtbmF2LWxpbmtzIHtcXG4gICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIH1cXG5cXG4gICAgLmNsb3NlLW1vZGFsLWJ0bi13cmFwcGVyIHtcXG4gICAgICBsZWZ0OiAwLjdlbTtcXG4gICAgfVxcblxcbiAgICAuY2xvc2UtbW9kYWwtYnRuIHtcXG4gICAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgKG1pbi13aWR0aDogMTMwMHB4KSB7XFxuICAgICNza2lucy1jb250YWluZXIge1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICBtYXgtd2lkdGg6IDcwJTtcXG4gICAgICBtaW4taGVpZ2h0OiBhdXRvO1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgKG1pbi13aWR0aDogMTk1MHB4KSB7XFxuICAgICNza2lucy1jb250YWluZXIge1xcbiAgICAgIG1heC13aWR0aDogNTAlO1xcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBkZWZpbmUoSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIGRlZmluZShHcCwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gIGRlZmluZShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvbik7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgZGVmaW5lKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlLCBhc3luY0l0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIGRlZmluZShHcCwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcblxuICBkZWZpbmUoR3AsIFwidG9TdHJpbmdcIiwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIGluIG1vZGVybiBlbmdpbmVzXG4gIC8vIHdlIGNhbiBleHBsaWNpdGx5IGFjY2VzcyBnbG9iYWxUaGlzLiBJbiBvbGRlciBlbmdpbmVzIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gXCJvYmplY3RcIikge1xuICAgIGdsb2JhbFRoaXMucmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbiAgfSBlbHNlIHtcbiAgICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xuICB9XG59XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NoYW1waW9ucy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2hhbXBpb25zLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFscy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9kYWxzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwidmFyIG1hcCA9IHtcblx0XCIuL0Fzc2Fzc2luLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9Bc3Nhc3Npbi5wbmdcIixcblx0XCIuL0Jsb29kIFdlbGwucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL0Jsb29kIFdlbGwucG5nXCIsXG5cdFwiLi9Cb3R0b20ucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL0JvdHRvbS5wbmdcIixcblx0XCIuL0NvbnRyb2xsZXIucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL0NvbnRyb2xsZXIucG5nXCIsXG5cdFwiLi9Db3VyYWdlLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9Db3VyYWdlLnBuZ1wiLFxuXHRcIi4vQ3JpbXNvbiBSdXNoLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9Dcmltc29uIFJ1c2gucG5nXCIsXG5cdFwiLi9FbmVyZ3kucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL0VuZXJneS5wbmdcIixcblx0XCIuL0ZpZ2h0ZXIucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL0ZpZ2h0ZXIucG5nXCIsXG5cdFwiLi9GbG93LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9GbG93LnBuZ1wiLFxuXHRcIi4vRnVyeS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvRnVyeS5wbmdcIixcblx0XCIuL0dyaXQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL0dyaXQucG5nXCIsXG5cdFwiLi9IZWF0LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9IZWF0LnBuZ1wiLFxuXHRcIi4vSnVuZ2xlLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9KdW5nbGUucG5nXCIsXG5cdFwiLi9NYWdlLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9NYWdlLnBuZ1wiLFxuXHRcIi4vTWFuYS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvTWFuYS5wbmdcIixcblx0XCIuL01hbmFsZXNzLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9NYW5hbGVzcy5wbmdcIixcblx0XCIuL01hcmtzbWFuLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9NYXJrc21hbi5wbmdcIixcblx0XCIuL01lbGVlLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9NZWxlZS5wbmdcIixcblx0XCIuL01pZGRsZS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvTWlkZGxlLnBuZ1wiLFxuXHRcIi4vUmFnZS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvUmFnZS5wbmdcIixcblx0XCIuL1JhbmdlZC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvUmFuZ2VkLnBuZ1wiLFxuXHRcIi4vU3BlY2lhbGlzdC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvU3BlY2lhbGlzdC5wbmdcIixcblx0XCIuL1N1cHBvcnQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL1N1cHBvcnQucG5nXCIsXG5cdFwiLi9UYW5rLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9UYW5rLnBuZ1wiLFxuXHRcIi4vVG9wLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9Ub3AucG5nXCIsXG5cdFwiLi9VdGlsaXR5LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9VdGlsaXR5LnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9pbWFnZXMgc3luYyBcXFxcLihwbmd8anBlP2d8c3ZnKSRcIjsiLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9zdHlsZXNoZWV0cy9tb2RhbHMuc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGVzaGVldHMvY2hhbXBpb25zLnNjc3MnO1xuaW1wb3J0IGNoYW1waW9uc1BhZ2UgZnJvbSAnLi90ZW1wbGF0ZXMvY2hhbXBpb25zUGFnZSc7XG5pbXBvcnQgQ2hhbXBpb25zUGFnZUNvbnRyb2xsZXIgZnJvbSAnLi9hcHBDb250cm9sL2NoYW1waW9uc1BhZ2VDb250cm9sbGVyJztcbmltcG9ydCBTZWFyY2hiYXJDb250cm9sbGVyIGZyb20gJy4vYXBwQ29udHJvbC9zZWFyY2hiYXJDb250cm9sbGVyJztcblxuY29uc3QgY3JlYXRlQ2hhbXBpb25zUGFnZSA9ICgpID0+IHtcbiAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgY2hhbXBpb25zUGFnZSgpO1xuICAgIENoYW1waW9uc1BhZ2VDb250cm9sbGVyLmNoYW1waW9uc1BhZ2VMaXN0ZW5lcnMoKTtcbiAgICBTZWFyY2hiYXJDb250cm9sbGVyLnNlYXJjaENvbnRhaW5lckxpc3RlbmVycygpO1xuICAgIGNvbnN0IGNoYW1waW9uSWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2hhbXBpb25JZCcpO1xuICAgIGlmIChjaGFtcGlvbklkKSB7XG4gICAgICBDaGFtcGlvbnNQYWdlQ29udHJvbGxlci5kaXNwbGF5Q2hhbXBpb25Nb2RhbChjaGFtcGlvbklkKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgIH1cbiAgfSwgMzAwKTtcbn07XG5jcmVhdGVDaGFtcGlvbnNQYWdlKCk7XG4iXSwibmFtZXMiOlsiQ2hhbXBpb25Nb2RhbENvbnRyb2xsZXIiLCJ0b2dnbGVBY3RpdmVBYmlsaXR5IiwiY2xpY2tlZEFiaWxpdHlJZCIsImFiaWxpdHlJbWFnZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhYmlsaXR5SW5mb3MiLCJmb3JFYWNoIiwiaW1nIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiaW5mbyIsImNsaWNrZWRJbWFnZSIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc05hbWUiLCJhY3RpdmVBYmlsaXR5IiwiY2hhbmdlTW9kYWxUZW1wbGF0ZSIsImNsaWNrZWRNb2RhbE5hdkxpbmsiLCJ0ZW1wbGF0ZXMiLCJ0ZW1wbGF0ZSIsInRlbXBsYXRlTmFtZSIsImlkIiwic3Vic3RyaW5nIiwiaW5kZXhPZiIsImNob3NlblRlbXBsYXRlIiwic3R5bGUiLCJkaXNwbGF5IiwiaGlkZGVuVGVtcGxhdGUiLCJkaXNwYXlJdGVtRGV0YWlscyIsImhvdmVyZWRJdGVtSW1hZ2UiLCJpdGVtRGV0YWlscyIsIm5leHRFbGVtZW50U2libGluZyIsImhpZGVJdGVtRGV0YWlscyIsInVuaG92ZXJlZEl0ZW1JbWFnZSIsInRvZ2dsZVNraW5JbWFnZXMiLCJhcnJvd0NsYXNzTGlzdCIsInNraW5JbWFnZXNDb250YWluZXIiLCJjdXJyZW50U2hvd25JbWFnZSIsInNraW5OYW1lIiwiZmlyc3RJbWFnZSIsImZpcnN0RWxlbWVudENoaWxkIiwibGFzdEltYWdlIiwibGFzdEVsZW1lbnRDaGlsZCIsImluY2x1ZGVzIiwidGV4dENvbnRlbnQiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwiY2xlYXJNYWluTW9kYWwiLCJtYWluQ29udGFpbmVyIiwiY2hhbXBpb25OYW1lIiwiY2hhbXBpb25UaXRsZSIsImNoYW1waW9uUm9sZXMiLCJjaGFtcGlvbkxvcmUiLCJhYmlsaXR5RGV0YWlscyIsImNoYW1waW9uVGlwcyIsIm1haW5Nb2RhbEhlYWRlciIsImVsZW1lbnQiLCJjdXJyZW50RWxlbWVudCIsImNsZWFyU3RhdHNNb2RhbCIsInN0YXRzQ29udGFpbmVyIiwiY2hhbXBpb25TdGF0c092ZXJ2aWV3IiwiYWxsZGFtYWdlU3RhdHMiLCJpdGVtU2V0c0NvbnRhaW5lciIsImJlc3RNYXRjaHVwcyIsIndvcnN0TWF0Y2h1cHMiLCJzdGF0c01vZGFsSGVhZGVyIiwiZGFtYWdlU3RhdCIsImRhbWFnZVN0YXRFbGVtZW50Iiwic3RhdHNNb2RhbENvbnRlbnQiLCJjb250ZW50IiwiY29udGVudEVsZW1lbnQiLCJjbGVhclNraW5zTW9kYWwiLCJjbG9zZUNoYW1waW9uTW9kYWwiLCJtb2RhbCIsInNraW5zQ29udGFpbmVyIiwibW9kYWxDbGlja0V2ZW50cyIsImV2ZW50IiwidGFyZ2V0IiwiZGFzaEluZGV4IiwiYWJpbGl0eUlkIiwic2xpY2UiLCJBcnJheSIsImZyb20iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibW9kYWxNb3VzZW92ZXJFdmVudHMiLCJtb2RhbE1vdXNlb3V0RXZlbnRzIiwicmVsYXRlZFRhcmdldCIsInBhcmVudE5vZGUiLCJtb2RhbEFycm93RXZlbnRzIiwia2V5IiwicmlnaHRBcnJvdyIsImxlZnRBcnJvdyIsIm1vZGFsQ2hhbmdlTGlzdGVuZXJzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImdldENoYW1waW9uRGV0YWlscyIsImdldENoYW1waW9uU3RhdHMiLCJjaGFtcGlvbkRldGFpbHNNb2RhbCIsImNoYW1waW9uU3RhdHNNb2RhbCIsImNoYW1waW9uU2tpbnNNb2RhbCIsIkNoYW1waW9uRmlsdGVyIiwiU29ydENoYW1waW9ucyIsImdldEFsbENoYW1waW9uRGV0YWlscyIsImdldEFsbENoYW1waW9uU3RhdHMiLCJDaGFtcGlvbnNQYWdlQ29udHJvbGxlciIsImRpc3BsYXlEcm9wZG93bk9wdGlvbnMiLCJkcm9wZG93bk9wdGlvbnMiLCJhbGxEcm9wZG93bk9wdGlvbnMiLCJvcHRpb25zIiwib3B0aW9uc1N0eWxlIiwiZHJvcGRvd25PcHRpb25zU3R5bGUiLCJoaWRlRHJvcGRvd25PcHRpb25zIiwiZHJvcGRvd25PcHRpb25zVG9nZ2xlIiwiZHJvcGRvd25CdG4iLCJwYXJlbnRFbGVtZW50IiwiZGlzcGxheUNoYW1waW9uTW9kYWwiLCJjaGFtcGlvbklkIiwiY2hhbXBpb25EZXRhaWxzIiwiY2hhbXBpb25TdGF0cyIsInNlbGVjdExhbmVGaWx0ZXJPcHRpb24iLCJjbGlja2VkTGFuZU9wdGlvbiIsImNoYW1waW9uc1NlY3Rpb24iLCJhY3RpdmVMYW5lT3B0aW9uIiwidmlzaWJpbGl0eSIsImFkZCIsImNoZWNrTGFuZUZpbHRlck9wdGlvbiIsImFsbENoYW1waW9uU3RhdHMiLCJsYW5lTmFtZSIsImZpbHRlckJ5TGFuZSIsImNoZWNrU29ydGluZ09wdGlvbiIsImFjdGl2ZVNvcnRpbmdPcHRpb24iLCJzb3J0QnlEZWZhdWx0T3JkZXIiLCJzb3J0Q2hhbXBpb25zQnlXaW5yYXRlIiwic29ydENoYW1waW9uc0J5UGlja3JhdGUiLCJzb3J0Q2hhbXBpb25zQnlEYW1hZ2VEb25lIiwiY2hlY2tBY3RpdmVSb2xlT3B0aW9ucyIsImFsbENoYW1waW9uRGV0YWlscyIsImFjdGl2ZVJvbGVPcHRpb25zIiwibGVuZ3RoIiwiYWN0aXZlUm9sZXMiLCJtYXAiLCJhY3RpdmVSb2xlT3B0aW9uIiwiYWN0aXZlUm9sZSIsImZpbHRlckJ5Um9sZSIsImNoZWNrQWN0aXZlRGlmZmljdWx0eU9wdGlvbnMiLCJhY3RpdmVEaWZmaWN1bHR5T3B0aW9ucyIsImFjdGl2ZURpZmZpY3VsdGllcyIsImFjdGl2ZURpZmZpY3VsdHlPcHRpb24iLCJhY3RpdmVEaWZmaWN1bHR5IiwiZmlsdGVyQnlEaWZmaWN1bHR5Iiwic2VsZWN0TXVsdGlEcm9wZG93bk9wdGlvbiIsImRyb3Bkb3duT3B0aW9uIiwiZGVzZWxlY3REcm9wZG93bk9wdGlvbiIsInRvZ2dsZURyb3Bkb3duT3B0aW9uIiwic2VsZWN0U2luZ2xlRHJvcGRvd25PcHRpb24iLCJhY3RpdmVEcm9wZG93bk9wdGlvbiIsInJlZGlyZWN0VG9Gcm9udFBhZ2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJjaGFtcGlvbnNQYWdlQ2xpY2tFdmVudHMiLCJjaGVja09wdGlvbnMiLCJoaWRlQ2hhbXBpb25zU2VjdGlvbiIsInNob3dDaGFtcGlvbnNTZWN0aW9uIiwicmVtb3ZlQ2hhbXBpb25zUGFnZUxpc3RlbmVyIiwiY2hhbXBpb25zUGFnZSIsImFkZENoYW1waW9uc1BhZ2VMaXN0ZW5lciIsInNob3dMb2FkZXIiLCJsb2FkZXIiLCJoaWRlTG9hZGVyIiwiZmlsdGVyQW5kU29ydENoYW1waW9uc1NlY3Rpb24iLCJ3YWl0VGltZSIsInNldFRpbWVvdXQiLCJkYXRhc2V0IiwiY2hhbXBpb25zUGFnZUtleUV2ZW50cyIsImFjdGl2ZUVsZW1lbnQiLCJjaGFtcGlvbnNQYWdlTGlzdGVuZXJzIiwiY3JlYXRlQ2hhbXBpb25Db250YWluZXIiLCJyZW5kZXJBbGxDaGFtcGlvbnMiLCJjaGFtcGlvbiIsImNsZWFyQ2hhbXBpb25zU2VjdGlvbiIsInNob3dDaGFtcGlvbiIsImhpZGVDaGFtcGlvbiIsImNsaWNrZWRMYW5lIiwiYWxsQ2hhbXBpb25zIiwicmVzdWx0cyIsInB1c2giLCJQcm9taXNlIiwiYWxsIiwiY2hhbXBpb25MYW5lIiwibGFuZSIsImNoYW1waW9uRWxlbWVudCIsInRvTG93ZXJDYXNlIiwiY2hhbXBpb25FbGVtZW50cyIsInJvbGVNYXRjaEZvdW5kIiwicm9sZSIsInRhZ3MiLCJjaGFtcGlvblJvbGUiLCJjYXRlZ29yaXNlRGlmZmljdWx0eU51bSIsImRpZmZpY3VsdHlOdW0iLCJkaWZmaWN1bHR5TWF0Y2hGb3VuZCIsImRpZmZpY3VsdHkiLCJjaGFtcGlvbkRpZmZpY3VsdHlOdW0iLCJjaGFtcGlvbkRpZmZpY3VsdHkiLCJTZWFyY2hiYXJDb250cm9sbGVyIiwic2hvd0F1dG9Db21wbGV0ZU5hbWVzIiwic2VhcmNoQ29udGFpbmVyIiwiYXV0b0NvbXBsZXRlTmFtZXMiLCJoaWRlQXV0b0NvbXBsZXRlTmFtZXMiLCJhdXRvQ29tcGxldGVOYW1lRWxlbWVudHMiLCJhdXRvQ29tcGxldGVOYW1lRWxlbWVudCIsInNlYXJjaGJhckZvY3VzSW5FdmVudCIsImZvY3VzIiwic2VhcmNoYmFyRm9jdXNvdXRFdmVudCIsInNlYXJjaEJhcklucHV0RXZlbnQiLCJpbnB1dFZhbHVlIiwidmFsdWUiLCJhdXRvQ29tcGxldGVOYW1lIiwibmFtZSIsInNlYXJjaGJhcktleWRvd25FdmVudHMiLCJwcmV2ZW50RGVmYXVsdCIsImFjdGlvbiIsIkFycm93VXAiLCJBcnJvd0Rvd24iLCJmaWx0ZXIiLCJpc1Nob3dpbmciLCJ1bmRlZmluZWQiLCJnb1RvU3RhcnQiLCJjaGlsZHJlbiIsInNlYXJjaENvbnRhaW5lckNsYXNzTmFtZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJzZWFyY2hiYXJDbGlja0V2ZW50cyIsImNsaWNrQXV0b0NvbXBsZXRlTmFtZSIsImZpcnN0Q2hpbGQiLCJzZWFyY2hDb250YWluZXJMaXN0ZW5lcnMiLCJ2aXNpYmxpdHkiLCJyZWNyZWF0ZUNoYW1waW9uc1NlY3Rpb24iLCJjaGFtcGlvbnMiLCJmaWx0ZXJDaGFtcGlvbnMiLCJmaWx0ZXJlZENoYW1waW9uU3RhdHMiLCJmaWx0ZXJlZENoYW1waW9uc1NvcnRlZCIsInNvcnQiLCJhIiwiYiIsIndpblJhdGUiLCJwaWNrUmF0ZSIsImRhbWFnZVBlck1hdGNoIiwidG90YWxEYW1hZ2UiLCJmZXRjaENoYW1waW9uRGV0YWlscyIsImZldGNoIiwibW9kZSIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJnZXRDaGFtcGlvblBhc3NpdmVzIiwicGFzc2l2ZURhdGEiLCJwYXNzaXZlIiwicGFzc2l2ZU5hbWUiLCJwYXNzaXZlRGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsInBhc3NpdmVJZCIsImltYWdlIiwiZnVsbCIsInBhc3NpdmVJbWdVcmwiLCJnZXRDaGFtcGlvblNwZWxscyIsInNwZWxsc0RhdGEiLCJzcGVsbHMiLCJzcGVsbCIsInNwZWxsT2JqZWN0IiwiY29zdEJ1cm4iLCJjb3N0VHlwZSIsImNvb2xkb3duIiwiY29vbGRvd25CdXJuIiwiaW1nVXJsIiwiY2hhbXBpb25QYXNzaXZlIiwidGl0bGUiLCJyZXBsYWNlIiwidG9VcHBlckNhc2UiLCJwYXJ0eXBlIiwiYWxseXRpcHMiLCJsb3JlIiwicm9sZXMiLCJza2lucyIsInJlc291cmNlIiwidGlwcyIsImZldGNoQ2hhbXBpb25TdGF0cyIsImRldlVybCIsInRvRml4ZWQiLCJrZGEiLCJrZGFSYXRpbyIsIml0ZW1TZXRzIiwiaXRlbUNob2ljZXMiLCJiZXN0TWF0Y2hVcHMiLCJtYXRjaFVwcyIsIndvcnN0TWF0Y2hVcHMiLCJ2ZXJzaW9uc1Jlc3BvbnNlIiwidmVyc2lvbnMiLCJsYXRlc3RWZXJzaW9uIiwiY2hhbXBpb25zUmVzcG9uc2UiLCJmZXRjaEFsbEl0ZW1zIiwidmVyc2lvblJlc3BvbnNlIiwiYWxsSXRlbXMiLCJJdGVtSW5mbyIsIml0ZW1JZCIsImdldEl0ZW1EZXRhaWxzIiwiaXRlbUltYWdlSWQiLCJpbWFnZVVybCIsImNvbXBvbmVudEl0ZW1JZHMiLCJjb21wb25lbnRJdGVtRGV0YWlscyIsImNvc3QiLCJnb2xkIiwidG90YWwiLCJnZXRJdGVtSW1hZ2UiLCJjb21wb25lbnRJdGVtcyIsImdldENvbXBvbmVudEl0ZW1zIiwiRWxlbWVudENyZWF0aW9uIiwiRHJvcGRvd25TZWN0aW9uIiwiZHJvcGRvd25OYW1lIiwib3B0aW9uc0FycmF5IiwiZmlsdGVyU29ydFNlY3Rpb24iLCJ0eXBlIiwiZHJvcGRvd24iLCJjcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MiLCJvcHRpb24iLCJjcmVhdGVFbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwibGFzdENoaWxkIiwidGFnIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVDaGlsZEVsZW1lbnRXaXRoSWQiLCJjcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3NBbmRJZCIsImNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzIiwic3JjIiwiYWx0IiwiaW1hZ2VFbGVtZW50IiwicmVuZGVySGVhZGVyRGV0YWlscyIsImltYWdlcyIsImNoYW1waW9uRGF0YSIsImNoYW1waW9uUm9sZU5hbWUiLCJjaGFtcGlvblJlc291cmNlIiwiY2hhbXBpb25SZXNvdXJjZU5hbWUiLCJsb3JlQ29udGFpbmVyIiwiaW5uZXJIVE1MIiwiYWJpbGl0aWVzQ29udGFpbmVyIiwiYWJpbGl0eUltZ3MiLCJwYXNzaXZlSW1nIiwiaW1nTGFiZWwiLCJpbmRleCIsInNwZWxsSW1nIiwiaSIsImFiaWxpdHlJbmZvIiwiYWJpbGl0eU5hbWUiLCJhYmlsaXR5RGVzY3JpcHRpb24iLCJhYmlsaXR5TGFiZWwiLCJjaGFtcGlvblRpcHNTZWN0aW9uIiwiY2hhbXBpb25UaXAiLCJza2luIiwibnVtIiwic2hvd25JbWFnZUNvbnRhaW5lciIsInNob3duSW1hZ2VVcmwiLCJpbWFnZUNvbnRhaW5lciIsInJlbmRlclN0YXRPdmVydmlldyIsInJlbmRlckRhbWFnZVN0YXRzIiwicmVuZGVyQ2hhbXBpb25MYW5lIiwicmVuZGVyTWF0Y2h1cHNJbmZvIiwic3RhdHNPdmVydmlldyIsInRydWVEYW1hZ2VDaXJjbGVTdHJva2UiLCJwaHlzaWNhbERhbWFnZUNpcmNsZVN0cm9rZSIsIm1hZ2ljRGFtYWdlQ2lyY2xlU3Ryb2tlIiwidHJ1ZURhbWFnZVBlcmNlbnQiLCJNYXRoIiwicm91bmQiLCJ0cnVlRGFtYWdlIiwicGVyY2VudGFnZSIsInBoeXNpY2FsRGFtYWdlUGVyY2VudCIsInBoeXNpY2FsRGFtYWdlIiwibWFnaWNEYW1hZ2VQZXJjZW50IiwibWFnaWNEYW1hZ2UiLCJzdHJva2VEYXNoYXJyYXkiLCJ0b3RhbERhbWFnZVRleHQiLCJ0cnVlRGFtYWdlVmFsdWUiLCJwaHlzaWNhbERhbWFnZVZhbHVlIiwibWFnaWNEYW1hZ2VWYWx1ZSIsImdldEFsbEl0ZW1zIiwiY2hhbXBpb25JdGVtQnVpbGRzIiwiaXRlbVNldCIsIml0ZW1TZXRDb250YWluZXIiLCJpdGVtIiwiaXRlbUluZm8iLCJnZXRJdGVtSW5mbyIsIm1haW5Db21wb25lbnRDb250YWluZXIiLCJtYWluSXRlbSIsIml0ZW1EZXRhaWxzQ29udGFpbmVyIiwibmFtZUVsZW1lbnQiLCJkZXNjcmlwdGlvbkVsZW1lbnQiLCJpdGVtQ29zdCIsImNvc3RMYWJlbCIsImNvc3RBbW91bnQiLCJjb21wb25lbnRJdGVtc0NvbnRhaW5lciIsImNvbXBvbmVudEl0ZW0iLCJjb21wb25lbnRJdGVtRWxlbWVudCIsImNvbXBvbmVudEl0ZW1EZXRhaWxzQ29udGFpbmVyIiwiY29tcG9uZW50SXRlbU5hbWUiLCJjb21wb25lbnRJdGVtQ29zdCIsImNvbXBvbmVudEl0ZW1Db3N0TGFiZWwiLCJjb21wb25lbnRJdGVtQW1vdW50IiwiYmVzdE1hdGNodXBzU2VjdGlvbiIsImJlc3RNYXRjaHVwc0VsZW1lbnQiLCJiZXN0TWF0Y2h1cHNEYXRhIiwid29yc3RNYXRjaHVwc1NlY3Rpb24iLCJ3b3JzdE1hdGNodXBzRWxlbWVudCIsIndvcnN0TWF0Y2h1cHNEYXRhIiwiY3JlYXRlU2VjdGlvbiIsInNvcnRPcHRpb25zIiwicm9sZU9wdGlvbnMiLCJkaWZmaWN1bHR5T3B0aW9ucyIsIm11bHRpT3B0aW9uQXJyYXlzIiwic29ydERyb3Bkb3duIiwicmVuZGVyRHJvcGRvd24iLCJvcHRpb25zT2JqZWN0IiwiT2JqZWN0Iiwia2V5cyIsInZhbHVlcyIsImFsbENoYW1waW9uc0FycmF5IiwiYXV0b0NvbXBsZXRlTmFtZVdyYXBwZXIiLCJ0YWJJbmRleCIsImltcG9ydEFsbCIsInIiLCJyZXF1aXJlIiwiY29udGV4dCIsIm1vZGFsQ29udGFpbmVyIiwiY29udGFpbmVyIiwiYmFja2dyb3VuZCIsImJhY2tncm91bmRTaXplIiwicmF0ZVRleHQiLCJyYXRlVHlwZSIsImNoYW1waW9uUmF0ZSIsImxhYmVsIiwicmF0ZVZhbHVlIiwibG93ZXJDYXNlVGV4dCIsImNoYW1waW9uTGFuZUluZm8iLCJsYW5lVGV4dCIsImxhbmVJY29uIiwiZGFtYWdlVHlwZSIsImRhbWFnZVZhbHVlIiwiZGFtYWdlUGVyY2VudGFnZSIsImRhbWFnZUNvbnRhaW5lciIsImRhbWFnZVN0YXRzIiwiZGFtYWdlVmFsdWVFbGVtZW50IiwiZGFtYWdlUGVyY2VudGFnZUVsZW1lbnQiLCJtYXRjaHVwc0VsZW1lbnQiLCJtYXRjaHVwc0RhdGEiLCJtYXRjaHVwIiwibWF0Y2h1cEluZm8iLCJlbmVteUNoYW1waW9uTmFtZSIsImVuZW15Q2hhbXBpb25JZCIsImVuZW15Q2hhbXBpb25JbWdVcmwiLCJtYXRjaHVwU3RhdHMiLCJlbmVteUNoYW1waW9uTmFtZUVsZW1lbnQiLCJ3aW5yYXRlQWdhaW5zdCIsIndpbnJhdGVBZ2FpbnN0TGFiZWwiLCJjb2xvciIsIndpbnJhdGVBZ2FpbnN0UGVyY2VudGFnZSIsIndpblJhdGVBZ2FpbnN0IiwiZ2FtZXNQbGF5ZWRBZ2FpbnN0IiwibWF0Y2hlcyIsImNoYW1waW9uQ29udGFpbmVyIiwiY2hhbXBpb25JbWdVcmwiLCJjaGFtcGlvbkltZyIsImNoYW1waW9uTmFtZVdyYXBwZXIiLCJjcmVhdGVDaGFtcGlvbnNQYWdlIiwiZ2V0SXRlbSIsImNsZWFyIl0sInNvdXJjZVJvb3QiOiIifQ==