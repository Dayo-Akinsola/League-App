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
      var checkOptions, hideChampionsSection, showChampionsSection, removeChampionsPageListener, addChampionsPageListener, showLoader, hideLoader, showNoChampionMessage, hideNoChampionMessage, filterAndSortChampionsSection;
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

              showNoChampionMessage = function showNoChampionMessage() {
                var noChampionMatchesMessage = document.querySelector('.no-champions-match-message');
                noChampionMatchesMessage.style.display = 'block';
              };

              hideNoChampionMessage = function hideNoChampionMessage() {
                var noChampionMatchesMessage = document.querySelector('.no-champions-match-message');
                noChampionMatchesMessage.style.display = 'none';
              };

              filterAndSortChampionsSection = /*#__PURE__*/function () {
                var _ref5 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4(waitTime) {
                  var championContainers, championContainersHidden;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          hideNoChampionMessage();
                          hideChampionsSection();
                          showLoader();
                          removeChampionsPageListener();
                          _context4.next = 6;
                          return checkOptions();

                        case 6:
                          setTimeout(function () {
                            showChampionsSection();
                            hideLoader();
                          }, waitTime);
                          addChampionsPageListener();
                          championContainers = document.querySelectorAll('.champion-container');
                          championContainersHidden = Array.from(championContainers).every(function (championContainer) {
                            return championContainer.classList[1] === 'hidden';
                          });

                          if (championContainersHidden) {
                            showNoChampionMessage();
                          }

                        case 11:
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

            case 17:
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
              championDetails.allytips[0] = 'You cannot use consumables like potions during your Comeuppance, make sure to use them before channeling.';
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
            devUrl = 'http://127.0.0.1:5500/dist/champions.html';

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
            devUrl = 'http://127.0.0.1:5500/dist/champions.html';

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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --rasin-black: #1d1e2c;\n  --transparent-rasin-black: #1d1e2c91;\n  --dark-gold: #927543;\n  --light-gold: #c7ab6e;\n}\n\n#front-page {\n  background-color: var(--rasin-black);\n  min-height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: -4;\n  font-family: \"Barlow\", sans-serif;\n}\n#front-page .app-name-container {\n  background-color: var(--dark-gold);\n  padding: 0.3em;\n  border-radius: 8px 0px 8px 0;\n  cursor: pointer;\n}\n#front-page .app-name {\n  font-weight: 900;\n  font-size: 2rem;\n  letter-spacing: 3px;\n}\n#front-page .app-name-container:hover {\n  color: var(--dark-gold);\n  background-color: white;\n}\n#front-page .page-header {\n  display: flex;\n  justify-content: space-evenly;\n  color: white;\n  background-color: var(--rasin-black);\n  max-width: 100%;\n  padding: 1em 0;\n  border-style: solid;\n  border-color: var(--dark-gold);\n  border-width: 0 0 2px 0;\n  align-items: center;\n}\n#front-page .app-name-display-container {\n  position: absolute;\n  top: 0;\n  letter-spacing: 3px;\n  background-color: #181a20b3;\n  padding: 0.2em;\n  border-radius: 11px;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  padding-top: 6em;\n}\n@media (max-width: 550px) {\n  #front-page .app-name-display-container {\n    padding-top: 2em;\n  }\n}\n#front-page .app-name-display {\n  font-size: 2em;\n  margin-bottom: 6px;\n  color: var(--light-gold);\n}\n#front-page .tagline-container {\n  color: white;\n  font-size: 1.2em;\n  margin-top: 2em;\n}\n#front-page .tagline-match-count {\n  font-weight: 600;\n  font-size: 1.3em;\n}\n#front-page .search {\n  padding: 0.5em;\n  min-width: 18em;\n  background: #e2e4e9;\n  outline: none;\n  border-style: none;\n  color: var(--rasin-black);\n  font-weight: 600;\n  min-height: 2.6em;\n  font-size: 1em;\n}\n#front-page .splash-section {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: relative;\n  align-items: center;\n}\n#front-page .backdrop-img {\n  max-width: 100%;\n  min-height: 50vh;\n  background-color: transparent;\n  color: #222;\n  opacity: 0.7;\n}\n#front-page .backdrop {\n  z-index: -2;\n  position: relative;\n  width: 100%;\n  min-height: 32em;\n}\n#front-page .backdrop::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  z-index: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-image: linear-gradient(90deg, #14181d, rgba(20, 24, 29, 0.985565) 0.97%, rgba(20, 24, 29, 0.945131) 2.07833%, rgba(20, 24, 29, 0.883007) 3.29667%, rgba(20, 24, 29, 0.803499) 4.60167%, rgba(20, 24, 29, 0.710915) 5.96667%, rgba(20, 24, 29, 0.609563) 7.365%, rgba(20, 24, 29, 0.50375) 8.77167%, rgba(20, 24, 29, 0.397784) 10.16%, rgba(20, 24, 29, 0.295973) 11.505%, rgba(20, 24, 29, 0.202624) 12.78%, rgba(20, 24, 29, 0.122044) 13.95833%, rgba(20, 24, 29, 0.0585423) 15.01667%, rgba(20, 24, 29, 0.0164249) 15.92833%, rgba(20, 24, 29, 0) 16.66667%, rgba(20, 24, 29, 0) 83.33333%, rgba(20, 24, 29, 0.0164249) 84.07167%, rgba(20, 24, 29, 0.0585423) 84.98333%, rgba(20, 24, 29, 0.122044) 86.04167%, rgba(20, 24, 29, 0.202624) 87.22%, rgba(20, 24, 29, 0.295973) 88.495%, rgba(20, 24, 29, 0.397784) 89.84%, rgba(20, 24, 29, 0.50375) 91.22833%, rgba(20, 24, 29, 0.609563) 92.635%, rgba(20, 24, 29, 0.710915) 94.03333%, rgba(20, 24, 29, 0.803499) 95.39833%, rgba(20, 24, 29, 0.883007) 96.70333%, rgba(20, 24, 29, 0.945131) 97.92167%, rgba(20, 24, 29, 0.985565) 99.03%, #14181d), linear-gradient(0deg, #14181d, #14181d 21.48148%, rgba(20, 24, 29, 0.985565) 23.63704%, rgba(20, 24, 29, 0.945131) 26.1%, rgba(20, 24, 29, 0.883007) 28.80741%, rgba(20, 24, 29, 0.803499) 31.70741%, rgba(20, 24, 29, 0.710915) 34.74074%, rgba(20, 24, 29, 0.609563) 37.84815%, rgba(20, 24, 29, 0.50375) 40.97407%, rgba(20, 24, 29, 0.397784) 44.05926%, rgba(20, 24, 29, 0.295973) 47.04815%, rgba(20, 24, 29, 0.202624) 49.88148%, rgba(20, 24, 29, 0.122044) 52.5%, rgba(20, 24, 29, 0.0585423) 54.85185%, rgba(20, 24, 29, 0.0164249) 56.87778%, rgba(20, 24, 29, 0) 58.51852%);\n}\n#front-page .backdrop .shown {\n  opacity: 0.7;\n  transition: opacity 0.6s ease-in;\n}\n#front-page .backdrop .hidden {\n  opacity: 0;\n  position: fixed;\n  transition: opacity 0.6s ease-in;\n}\n#front-page #tpa-backdrop.hidden {\n  transition: none;\n}\n#front-page .slogan-container {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 16em;\n}\n#front-page .slogan-container .slogan-1 {\n  color: white;\n  font-size: 1.3rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  text-align: center;\n  font-family: \"Barlow\", sans-serif;\n}\n#front-page .slogan-container .slogan-2 {\n  color: white;\n  font-size: 1.8rem;\n  font-weight: 900;\n  text-transform: uppercase;\n  text-align: center;\n  font-family: \"Barlow\", sans-serif;\n}\n@media (max-width: 550px) {\n  #front-page .slogan-container {\n    top: 12em;\n    display: none;\n  }\n}\n#front-page .mobile-discover-btn-container {\n  border-style: solid;\n  color: var(--rasin-black);\n  border-color: var(--rasin-black);\n  background-color: var(--dark-gold);\n  border-radius: 75% 10%/0% 75%;\n  text-decoration: none;\n  position: relative;\n  bottom: 10em;\n}\n@media (max-width: 550px) {\n  #front-page .mobile-discover-btn-container {\n    margin-bottom: 1em;\n    bottom: 5em;\n  }\n}\n#front-page .mobile-discover-btn-container:hover {\n  background-color: var(--light-gold);\n}\n#front-page .front-page-btn {\n  color: white;\n  background: transparent;\n  padding: 0.5em;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  border-style: none;\n  background-color: var(--dark-gold);\n}\n#front-page .front-page-btn:hover {\n  background-color: var(--light-gold);\n}\n#front-page .discover-btn-container {\n  position: absolute;\n  margin-bottom: 3em;\n  display: none;\n  top: 21.5em;\n}\n#front-page .discover-btn {\n  border: solid;\n  color: var(--rasin-black);\n  border-color: var(--rasin-black);\n  background-color: var(--dark-gold);\n  font-size: 1.2em;\n  border-radius: 75% 10%/0% 75%;\n  text-decoration: none;\n  padding: 0.5em;\n}\n#front-page .discover-btn:hover {\n  background-color: var(--light-gold);\n}\n#front-page .navigation-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n#front-page .desktop-search-container {\n  position: relative;\n  display: none;\n  max-width: 100%;\n}\n#front-page .auto-complete-names {\n  position: absolute;\n  border: 1px solid #d4d4d4;\n  border-bottom: none;\n  border-top: none;\n  z-index: 4;\n  top: 100%;\n  width: 100%;\n  max-height: 14rem;\n  overflow: auto;\n  scroll-behavior: smooth;\n  display: none;\n}\n#front-page .auto-complete-name-wrapper {\n  padding: 10px;\n  cursor: pointer;\n  background-color: #fff;\n  border-bottom: 1px solid #d4d4d4;\n  color: var(--rasin-black);\n  font-weight: 600;\n  width: 100%;\n}\n#front-page .auto-complete-name-wrapper:hover {\n  background-color: var(--light-gold);\n}\n#front-page .auto-complete-name-wrapper:focus {\n  background-color: var(--light-gold);\n}\n#front-page .search {\n  padding: 0.5em;\n  min-width: 18em;\n  background: #e2e4e9;\n  outline: none;\n  border-style: none;\n  color: var(--rasin-black);\n  font-weight: 600;\n  min-height: 2.6em;\n  font-size: 1em;\n}\n#front-page .footer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: white;\n  font-size: 0.8em;\n  position: absolute;\n  bottom: 0;\n  padding: 0 1.3em 0.6em 1.3em;\n  text-align: center;\n  background-color: var(--dark-gold);\n  width: 100%;\n  font-weight: 600;\n}\n#front-page .footer-links {\n  display: flex;\n}\n#front-page .github-link {\n  margin-bottom: 0.2em;\n  padding-top: 0.4em;\n  margin-right: 1em;\n}\n#front-page .github-icon {\n  width: 2.5em;\n  transition: fill 0.2s ease-in-out;\n}\n#front-page .github-link:hover .github-icon {\n  fill: var(--rasin-black);\n}\n#front-page .linkedin-link {\n  margin-bottom: 0.2em;\n  padding-top: 0.4em;\n  margin-left: 1em;\n}\n#front-page .linkedin-icon {\n  width: 2.5em;\n  transition: fill 0.2s ease-in-out;\n}\n#front-page .linkedin-link:hover .linkedin-icon {\n  fill: var(--rasin-black);\n}\n@media (min-width: 700px) {\n  #front-page .desktop-search-container {\n    display: block;\n  }\n}\n@media (min-width: 1200px) {\n  #front-page .mobile-discover-btn-container {\n    display: none;\n  }\n  #front-page .discover-btn-container {\n    display: block;\n  }\n  #front-page .legal-boilerplate {\n    font-size: 1em;\n    padding-top: 0.6em;\n  }\n  #front-page .slogan-container {\n    top: 30em;\n  }\n  #front-page .slogan-1 {\n    font-size: 1.8rem;\n  }\n  #front-page .slogan-2 {\n    font-size: 2.1rem;\n  }\n}\n@media (max-width: 1400px) {\n  #front-page .discover-btn-container {\n    top: 18em;\n  }\n}\n@media (max-width: 1000px) {\n  #front-page .app-name-display-container {\n    padding-top: 4em;\n  }\n  #front-page .slogan-container {\n    top: 13em;\n  }\n  #front-page .mobile-discover-btn-container {\n    position: absolute;\n    bottom: 10em;\n  }\n}", "",{"version":3,"sources":["webpack://./src/stylesheets/frontpage.scss"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --rasin-black: #1d1e2c;\n  --transparent-rasin-black: #1d1e2c91;\n  --dark-gold: #927543;\n  --light-gold: #c7ab6e;\n}\n\n#front-page {\n  background-color: var(--rasin-black);\n  min-height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: -4;\n  font-family: \"Barlow\", sans-serif;\n\n  .app-name-container {\n    background-color: var(--dark-gold);\n    padding: 0.3em;\n    border-radius: 8px 0px 8px 0;\n    cursor: pointer;\n  }\n\n  .app-name {\n    font-weight: 900;\n    font-size: 2rem;\n    letter-spacing: 3px;\n  }\n\n  .app-name-container:hover {\n    color: var(--dark-gold);\n    background-color: white;\n  }\n\n  .page-header {\n    display: flex;\n    justify-content: space-evenly;\n    color: white;\n    background-color: var(--rasin-black);\n    max-width: 100%;\n    padding: 1em 0;\n    border-style: solid;\n    border-color: var(--dark-gold);\n    border-width: 0 0 2px 0;\n    align-items: center;\n  }\n\n  .app-name-display-container {\n    position: absolute;\n    top: 0;\n    letter-spacing: 3px;\n    background-color: #181a20b3;\n    padding: 0.2em;\n    border-radius: 11px;\n    width: 100%;\n    height: 100%;\n    text-align: center;\n    padding-top: 6em;\n\n    @media (max-width: 550px) {\n      padding-top: 2em;\n    }\n  }\n\n  .app-name-display {\n    font-size: 2em;\n    margin-bottom: 6px;\n    color: var(--light-gold);\n  }\n\n  .tagline-container {\n    color: white;\n    font-size: 1.2em;\n    margin-top: 2em;\n  }\n\n  .tagline-match-count {\n    font-weight: 600;\n    font-size: 1.3em;\n  }\n\n  .search {\n    padding: 0.5em;\n    min-width: 18em;\n    background: #e2e4e9;\n    outline: none;\n    border-style: none;\n    color: var(--rasin-black);\n    font-weight: 600;\n    min-height: 2.6em;\n    font-size: 1em;\n  }\n\n  .splash-section {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    position: relative;\n    align-items: center;\n  }\n\n  .backdrop-img {\n    max-width: 100%;\n    min-height: 50vh;\n    background-color: transparent;\n    color: #222;\n    opacity: 0.7;\n  }\n\n  .backdrop {\n    z-index: -2;\n    position: relative;\n    width: 100%;\n    min-height: 32em;\n  }\n\n  .backdrop::after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    z-index: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-repeat: no-repeat;\n    background-image: linear-gradient(\n        90deg,\n        #14181d,\n        rgba(20, 24, 29, 0.985565) 0.97%,\n        rgba(20, 24, 29, 0.945131) 2.07833%,\n        rgba(20, 24, 29, 0.883007) 3.29667%,\n        rgba(20, 24, 29, 0.803499) 4.60167%,\n        rgba(20, 24, 29, 0.710915) 5.96667%,\n        rgba(20, 24, 29, 0.609563) 7.365%,\n        rgba(20, 24, 29, 0.50375) 8.77167%,\n        rgba(20, 24, 29, 0.397784) 10.16%,\n        rgba(20, 24, 29, 0.295973) 11.505%,\n        rgba(20, 24, 29, 0.202624) 12.78%,\n        rgba(20, 24, 29, 0.122044) 13.95833%,\n        rgba(20, 24, 29, 0.0585423) 15.01667%,\n        rgba(20, 24, 29, 0.0164249) 15.92833%,\n        rgba(20, 24, 29, 0) 16.66667%,\n        rgba(20, 24, 29, 0) 83.33333%,\n        rgba(20, 24, 29, 0.0164249) 84.07167%,\n        rgba(20, 24, 29, 0.0585423) 84.98333%,\n        rgba(20, 24, 29, 0.122044) 86.04167%,\n        rgba(20, 24, 29, 0.202624) 87.22%,\n        rgba(20, 24, 29, 0.295973) 88.495%,\n        rgba(20, 24, 29, 0.397784) 89.84%,\n        rgba(20, 24, 29, 0.50375) 91.22833%,\n        rgba(20, 24, 29, 0.609563) 92.635%,\n        rgba(20, 24, 29, 0.710915) 94.03333%,\n        rgba(20, 24, 29, 0.803499) 95.39833%,\n        rgba(20, 24, 29, 0.883007) 96.70333%,\n        rgba(20, 24, 29, 0.945131) 97.92167%,\n        rgba(20, 24, 29, 0.985565) 99.03%,\n        #14181d\n      ),\n      linear-gradient(\n        0deg,\n        #14181d,\n        #14181d 21.48148%,\n        rgba(20, 24, 29, 0.985565) 23.63704%,\n        rgba(20, 24, 29, 0.945131) 26.1%,\n        rgba(20, 24, 29, 0.883007) 28.80741%,\n        rgba(20, 24, 29, 0.803499) 31.70741%,\n        rgba(20, 24, 29, 0.710915) 34.74074%,\n        rgba(20, 24, 29, 0.609563) 37.84815%,\n        rgba(20, 24, 29, 0.50375) 40.97407%,\n        rgba(20, 24, 29, 0.397784) 44.05926%,\n        rgba(20, 24, 29, 0.295973) 47.04815%,\n        rgba(20, 24, 29, 0.202624) 49.88148%,\n        rgba(20, 24, 29, 0.122044) 52.5%,\n        rgba(20, 24, 29, 0.0585423) 54.85185%,\n        rgba(20, 24, 29, 0.0164249) 56.87778%,\n        rgba(20, 24, 29, 0) 58.51852%\n      );\n  }\n\n  .backdrop .shown {\n    opacity: 0.7;\n    transition: opacity 0.6s ease-in;\n  }\n\n  .backdrop .hidden {\n    opacity: 0;\n    position: fixed;\n    transition: opacity 0.6s ease-in;\n  }\n\n  #tpa-backdrop.hidden {\n    transition: none;\n  }\n\n  .slogan-container {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    top: 16em;\n\n    .slogan-1 {\n      color: white;\n      font-size: 1.3rem;\n      font-weight: 600;\n      text-transform: uppercase;\n      text-align: center;\n      font-family: \"Barlow\", sans-serif;\n    }\n\n    .slogan-2 {\n      color: white;\n      font-size: 1.8rem;\n      font-weight: 900;\n      text-transform: uppercase;\n      text-align: center;\n      font-family: \"Barlow\", sans-serif;\n    }\n\n    @media (max-width: 550px) {\n      top: 12em;\n      display: none;\n    }\n  }\n\n  .mobile-discover-btn-container {\n    border-style: solid;\n    color: var(--rasin-black);\n    border-color: var(--rasin-black);\n    background-color: var(--dark-gold);\n    border-radius: 75% 10%/0% 75%;\n    text-decoration: none;\n    position: relative;\n    bottom: 10em;\n\n    @media (max-width: 550px) {\n      margin-bottom: 1em;\n      bottom: 5em;\n    }\n  }\n\n  .mobile-discover-btn-container:hover {\n    background-color: var(--light-gold);\n  }\n\n  .front-page-btn {\n    color: white;\n    background: transparent;\n    padding: 0.5em;\n    font-size: 1rem;\n    font-weight: 600;\n    cursor: pointer;\n    border-style: none;\n    background-color: var(--dark-gold);\n  }\n\n  .front-page-btn:hover {\n    background-color: var(--light-gold);\n  }\n\n  .discover-btn-container {\n    position: absolute;\n    margin-bottom: 3em;\n    display: none;\n    top: 21.5em;\n  }\n\n  .discover-btn {\n    border: solid;\n    color: var(--rasin-black);\n    border-color: var(--rasin-black);\n    background-color: var(--dark-gold);\n    font-size: 1.2em;\n    border-radius: 75% 10%/0% 75%;\n    text-decoration: none;\n    padding: 0.5em;\n  }\n\n  .discover-btn:hover {\n    background-color: var(--light-gold);\n  }\n\n  .navigation-section {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .desktop-search-container {\n    position: relative;\n    display: none;\n    max-width: 100%;\n  }\n\n  .auto-complete-names {\n    position: absolute;\n    border: 1px solid #d4d4d4;\n    border-bottom: none;\n    border-top: none;\n    z-index: 4;\n    top: 100%;\n    width: 100%;\n    max-height: 14rem;\n    overflow: auto;\n    scroll-behavior: smooth;\n    display: none;\n  }\n\n  .auto-complete-name-wrapper {\n    padding: 10px;\n    cursor: pointer;\n    background-color: #fff;\n    border-bottom: 1px solid #d4d4d4;\n    color: var(--rasin-black);\n    font-weight: 600;\n    width: 100%;\n  }\n\n  .auto-complete-name-wrapper:hover {\n    background-color: var(--light-gold);\n  }\n\n  .auto-complete-name-wrapper:focus {\n    background-color: var(--light-gold);\n  }\n\n  .search {\n    padding: 0.5em;\n    min-width: 18em;\n    background: #e2e4e9;\n    outline: none;\n    border-style: none;\n    color: var(--rasin-black);\n    font-weight: 600;\n    min-height: 2.6em;\n    font-size: 1em;\n  }\n\n  .footer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: white;\n    font-size: 0.8em;\n    position: absolute;\n    bottom: 0;\n    padding: 0 1.3em 0.6em 1.3em;\n    text-align: center;\n    background-color: var(--dark-gold);\n    width: 100%;\n    font-weight: 600;\n  }\n\n  .footer-links {\n    display: flex;\n  }\n\n  .github-link {\n    margin-bottom: 0.2em;\n    padding-top: 0.4em;\n    margin-right: 1em;\n  }\n\n  .github-icon {\n    width: 2.5em;\n    transition: fill 0.2s ease-in-out;\n  }\n\n  .github-link:hover {\n    .github-icon {\n      fill: var(--rasin-black);\n    }\n  }\n\n  .linkedin-link {\n    margin-bottom: 0.2em;\n    padding-top: 0.4em;\n    margin-left: 1em;\n  }\n\n  .linkedin-icon {\n    width: 2.5em;\n    transition: fill 0.2s ease-in-out;\n  }\n\n  .linkedin-link:hover {\n    .linkedin-icon {\n      fill: var(--rasin-black);\n    }\n  }\n\n  @media (min-width: 700px) {\n    .desktop-search-container {\n      display: block;\n    }\n  }\n\n  @media (min-width: 1200px) {\n    .mobile-discover-btn-container {\n      display: none;\n    }\n\n    .discover-btn-container {\n      display: block;\n    }\n\n    .legal-boilerplate {\n      font-size: 1em;\n      padding-top: 0.6em;\n    }\n\n    .slogan-container {\n      top: 30em;\n    }\n\n    .slogan-1 {\n      font-size: 1.8rem;\n    }\n\n    .slogan-2 {\n      font-size: 2.1rem;\n    }\n  }\n\n  @media (max-width: 1400px) {\n    .discover-btn-container {\n      top: 18em;\n    }\n  }\n\n  @media (max-width: 1000px) {\n    .app-name-display-container {\n      padding-top: 4em;\n    }\n\n    .slogan-container {\n      top: 13em;\n    }\n\n    .mobile-discover-btn-container {\n      position: absolute;\n      bottom: 10em;\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
            devUrl = 'http://127.0.0.1:5500/dist/';
            devUrl2 = 'http://127.0.0.1:5500/dist/index.html';

            if (!(window.location.href === devUrl || window.location.href === devUrl2)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFlBQVksS0FBSyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFX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LE1BQU0sWUFBWSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxZQUFZLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxZQUFZLFVBQVUsTUFBTSxNQUFNLFlBQVksVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sWUFBWSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sWUFBWSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxZQUFZLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFlBQVksVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxZQUFZLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFlBQVksTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxZQUFZLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxZQUFZLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sYUFBYSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxXQUFXLFdBQVcsS0FBSyxNQUFNLGFBQWEsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsYUFBYSxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLFVBQVUsS0FBSyxNQUFNLGFBQWEsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sVUFBVSxLQUFLLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFN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TztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsY0FBYztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsbUJBQW1CO0FBQ3BEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0Esa0JBQWtCOztBQUVsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0JBQWdCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxLQUEwQixvQkFBb0IsQ0FBRTtBQUNsRDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2h2QkEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBc0o7QUFDdEo7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxnSUFBTzs7OztBQUlnRztBQUN4SCxPQUFPLGlFQUFlLGdJQUFPLElBQUksdUlBQWMsR0FBRyx1SUFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBbUo7QUFDbko7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyw2SEFBTzs7OztBQUk2RjtBQUNySCxPQUFPLGlFQUFlLDZIQUFPLElBQUksb0lBQWMsR0FBRyxvSUFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNeU8sb0JBQW9CO0FBQUEsc0xBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDQXJXLG9GQUFxQixFQURyQjs7QUFBQTtBQUNyQjBGLFlBQUFBLFlBRHFCO0FBRXJCNFEsWUFBQUEsaUJBRnFCLEdBRURDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjOVEsWUFBZCxDQUZDO0FBSXJCK1EsWUFBQUEsZ0JBSnFCLEdBSUYvYyxRQUFRLENBQUNDLGdCQUFULENBQTBCLG1CQUExQixDQUpFO0FBSzNCOGMsWUFBQUEsZ0JBQWdCLENBQUNwYyxPQUFqQixDQUF5QixVQUFDMk0sZUFBRCxFQUFxQjtBQUM1QyxrQkFBTUMsaUJBQWlCLEdBQUc0Ryw0RkFBQSxDQUN4QixLQUR3QixFQUNqQixxQkFEaUIsRUFDTTdHLGVBRE4sQ0FBMUI7QUFHQXNQLGNBQUFBLGlCQUFpQixDQUFDamMsT0FBbEIsQ0FBMEIsVUFBQ2dMLFFBQUQsRUFBYztBQUN0QyxvQkFBTXpJLFlBQVksR0FBR3lJLFFBQVEsQ0FBQ3VDLElBQTlCO0FBQ0Esb0JBQU03RyxVQUFVLEdBQUdzRSxRQUFRLENBQUNwSyxFQUE1QjtBQUNBLG9CQUFNeWIsdUJBQXVCLEdBQUc3SSw0RkFBQSxDQUM5QixLQUQ4QixFQUN2Qiw0QkFEdUIsRUFDTzVHLGlCQURQLENBQWhDO0FBR0F5UCxnQkFBQUEsdUJBQXVCLENBQUNSLFFBQXhCLEdBQW1DLElBQW5DO0FBQ0Esb0JBQU12TyxnQkFBZ0IsR0FBR2tHLDRGQUFBLENBQ3ZCLE1BRHVCLEVBQ2Ysb0JBRGUsRUFDTzZJLHVCQURQLENBQXpCO0FBR0EvTyxnQkFBQUEsZ0JBQWdCLENBQUNuTCxXQUFqQixHQUErQkksWUFBL0I7QUFDQStLLGdCQUFBQSxnQkFBZ0IsQ0FBQzVDLE9BQWpCLENBQXlCaEUsVUFBekIsR0FBc0NBLFVBQXRDO0FBQ0E0RyxnQkFBQUEsZ0JBQWdCLENBQUMxTSxFQUFqQixHQUFzQjJCLFlBQXRCO0FBQ0QsZUFiRDtBQWNELGFBbEJEOztBQUwyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFwQnlaLG9CQUFvQjtBQUFBO0FBQUE7QUFBQSxHQUExQjs7QUF5QkEsSUFBTU0sc0JBQXNCO0FBQUEsdUxBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3ZCMUssWUFBQUEsTUFEdUIsR0FDZCw2QkFEYztBQUV2QjJLLFlBQUFBLE9BRnVCLEdBRWIsdUNBRmE7O0FBQUEsa0JBR1hwVCxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWhCLEtBQXlCdUksTUFBekIsSUFBbUN6SSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWhCLEtBQXlCa1QsT0FIakQ7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkFJbkJoTixLQUFLLENBQUMsK0JBQUQsRUFBa0M7QUFBRUMsY0FBQUEsSUFBSSxFQUFFO0FBQVIsYUFBbEMsQ0FKYzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsbUJBS25CRCxLQUFLLENBQUMsU0FBRCxFQUFZO0FBQUVDLGNBQUFBLElBQUksRUFBRTtBQUFSLGFBQVosQ0FMYzs7QUFBQTtBQUFBOztBQUFBO0FBR3ZCQyxZQUFBQSxRQUh1QjtBQUFBO0FBQUEsbUJBTUpBLFFBQVEsQ0FBQ0MsSUFBVCxFQU5JOztBQUFBO0FBTXZCOE0sWUFBQUEsVUFOdUI7QUFPdkJDLFlBQUFBLGdCQVB1QixHQU9KcGQsUUFBUSxDQUFDRyxhQUFULENBQXVCLDZCQUF2QixDQVBJO0FBUXZCa2QsWUFBQUEsZ0JBUnVCLEdBUUpsSiw0RkFBQSxDQUE0QyxLQUE1QyxFQUFtRCxtQkFBbkQsRUFBd0VpSixnQkFBeEUsQ0FSSTtBQVN2QkUsWUFBQUEsWUFUdUIsR0FTUm5KLDRGQUFBLENBQTRDLE1BQTVDLEVBQW9ELGVBQXBELEVBQXFFa0osZ0JBQXJFLENBVFE7QUFVN0JDLFlBQUFBLFlBQVksQ0FBQ3hhLFdBQWIsR0FBMkIsZ0NBQTNCO0FBQ015YSxZQUFBQSxpQkFYdUIsR0FXSHBKLDRGQUFBLENBQTRDLE1BQTVDLEVBQW9ELHFCQUFwRCxFQUEyRWtKLGdCQUEzRSxDQVhHO0FBWTdCRSxZQUFBQSxpQkFBaUIsQ0FBQ3phLFdBQWxCLGFBQW1Da1UsSUFBSSxDQUFDd0csS0FBTCxDQUFXTCxVQUFYLENBQW5DO0FBQ01NLFlBQUFBLFVBYnVCLEdBYVZ0Siw0RkFBQSxDQUE0QyxNQUE1QyxFQUFvRCxhQUFwRCxFQUFtRWtKLGdCQUFuRSxDQWJVO0FBYzdCSSxZQUFBQSxVQUFVLENBQUMzYSxXQUFYLEdBQXlCLDRCQUF6Qjs7QUFkNkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBdEJtYSxzQkFBc0I7QUFBQTtBQUFBO0FBQUEsR0FBNUI7O0FBaUJBLElBQU1TLFVBQVU7QUFBQSx1TEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDWFQsc0JBQXNCLEVBRFg7O0FBQUE7QUFBQTtBQUFBLG1CQUVYTixvQkFBb0IsRUFGVDs7QUFBQTtBQUdqQnZQLFlBQUFBLGdHQUFBOztBQUhpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFWc1EsVUFBVTtBQUFBO0FBQUE7QUFBQSxHQUFoQjs7QUFNQUEsVUFBVTtBQUNWaEIsOEVBQWMsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9hcHBDb250cm9sL2JhY2tkcm9wQ2hhbmdlSW50ZXJ2YWwuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9hcHBDb250cm9sL2NoYW1waW9uTW9kYWxDb250cm9sbGVyLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvYXBwQ29udHJvbC9jaGFtcGlvbnNQYWdlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL2FwcENvbnRyb2wvZmlsdGVyQ2hhbXBpb25zLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvYXBwQ29udHJvbC9zZWFyY2hiYXJDb250cm9sbGVyLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvYXBwQ29udHJvbC9zb3J0Q2hhbXBpb25zLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvY2hhbXBpb25EYXRhL2NoYW1waW9uRGV0YWlscy5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL2NoYW1waW9uRGF0YS9jaGFtcGlvblN0YXRzLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvY2hhbXBpb25EYXRhL2dldEFsbENoYW1waW9ucy5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL2NoYW1waW9uRGF0YS9nZXRMYXRlc3RWZXJzaW9uLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvY2hhbXBpb25EYXRhL2l0ZW1JbmZvLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvaGVscGVycy9lbGVtZW50Q3JlYXRpb24uanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy90ZW1wbGF0ZXMvY2hhbXBpb25EZXRhaWxzTW9kYWwuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy90ZW1wbGF0ZXMvY2hhbXBpb25Ta2luc01vZGFsLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvdGVtcGxhdGVzL2NoYW1waW9uU3RhdHNNb2RhbC5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL3RlbXBsYXRlcy9yZW5kZXJIZWxwZXJzLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvc3R5bGVzaGVldHMvZnJvbnRwYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9zdHlsZXNoZWV0cy9tb2RhbHMuc2NzcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9zdHlsZXNoZWV0cy9mcm9udHBhZ2Uuc2Nzcz80NzI2Iiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvc3R5bGVzaGVldHMvbW9kYWxzLnNjc3M/Y2Y4MyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvL2hvbWUvZGFuaXlvL0RvY3VtZW50cy9PZGluUHJvamVjdC9MZWFndWUtQXBwL2Zyb250ZW5kL3NyYy9hc3NldHMvaW1hZ2VzfHN5bmN8bm9ucmVjdXJzaXZlfC9cXC4ocG5nfGpwZSIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9sZWFndWUtYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xlYWd1ZS1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9sZWFndWUtYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgbGV0IGluZGV4ID0gMTtcblxuICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgY29uc3QgYmFja2Ryb3BzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJhY2tkcm9wLWltZycpO1xuICAgIGNvbnN0IGN1cnJlbnRCYWNrZHJvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrZHJvcC1pbWcuc2hvd24nKTtcbiAgICBpbmRleCAlPSBiYWNrZHJvcHMubGVuZ3RoO1xuICAgIGN1cnJlbnRCYWNrZHJvcC5jbGFzc05hbWUgPSAnYmFja2Ryb3AtaW1nIGhpZGRlbic7XG4gICAgYmFja2Ryb3BzW2luZGV4XS5jbGFzc05hbWUgPSAnYmFja2Ryb3AtaW1nIHNob3duJztcbiAgICBpbmRleCArPSAxO1xuICB9LCA3MDAwKTtcbn07XG4iLCJjb25zdCBDaGFtcGlvbk1vZGFsQ29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGNvbnN0IHRvZ2dsZUFjdGl2ZUFiaWxpdHkgPSAoY2xpY2tlZEFiaWxpdHlJZCkgPT4ge1xuICAgIGNvbnN0IGFiaWxpdHlJbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3BlbGwtaW1nJyk7XG4gICAgY29uc3QgYWJpbGl0eUluZm9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFiaWxpdHktaW5mbycpO1xuXG4gICAgYWJpbGl0eUltYWdlcy5mb3JFYWNoKChpbWcpID0+IHtcbiAgICAgIGltZy5jbGFzc0xpc3QucmVtb3ZlKCdjbGlja2VkJyk7XG4gICAgfSk7XG4gICAgYWJpbGl0eUluZm9zLmZvckVhY2goKGluZm8pID0+IHtcbiAgICAgIGluZm8uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjbGlja2VkSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtjbGlja2VkQWJpbGl0eUlkfS1pbWdgKTtcbiAgICBjbGlja2VkSW1hZ2UuY2xhc3NOYW1lID0gJ3NwZWxsLWltZyBjbGlja2VkJztcblxuICAgIGNvbnN0IGFjdGl2ZUFiaWxpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtjbGlja2VkQWJpbGl0eUlkfS1hYmlsaXR5YCk7XG4gICAgYWN0aXZlQWJpbGl0eS5jbGFzc05hbWUgPSAnYWJpbGl0eS1pbmZvIGFjdGl2ZSc7XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlTW9kYWxUZW1wbGF0ZSA9IChjbGlja2VkTW9kYWxOYXZMaW5rKSA9PiB7XG4gICAgY29uc3QgdGVtcGxhdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsLXRlbXBsYXRlJyk7XG4gICAgdGVtcGxhdGVzLmZvckVhY2goKHRlbXBsYXRlKSA9PiB7XG4gICAgICBjb25zdCB0ZW1wbGF0ZU5hbWUgPSB0ZW1wbGF0ZS5pZC5zdWJzdHJpbmcoMCwgdGVtcGxhdGUuaWQuaW5kZXhPZignLScpKTtcbiAgICAgIGlmICh0ZW1wbGF0ZU5hbWUgPT09IGNsaWNrZWRNb2RhbE5hdkxpbmsuaWQpIHtcbiAgICAgICAgY29uc3QgY2hvc2VuVGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICAgICAgY2hvc2VuVGVtcGxhdGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBoaWRkZW5UZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgICAgICBoaWRkZW5UZW1wbGF0ZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BheUl0ZW1EZXRhaWxzID0gKGhvdmVyZWRJdGVtSW1hZ2UpID0+IHtcbiAgICBjb25zdCBpdGVtRGV0YWlscyA9IGhvdmVyZWRJdGVtSW1hZ2UubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGl0ZW1EZXRhaWxzLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gIH07XG5cbiAgY29uc3QgaGlkZUl0ZW1EZXRhaWxzID0gKHVuaG92ZXJlZEl0ZW1JbWFnZSkgPT4ge1xuICAgIGNvbnN0IGl0ZW1EZXRhaWxzID0gdW5ob3ZlcmVkSXRlbUltYWdlLm5leHRFbGVtZW50U2libGluZztcbiAgICBpdGVtRGV0YWlscy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZVNraW5JbWFnZXMgPSAoYXJyb3dDbGFzc0xpc3QpID0+IHtcbiAgICBjb25zdCBza2luSW1hZ2VzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNraW4taW1hZ2VzLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGN1cnJlbnRTaG93bkltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNraW4taW1hZ2UtY29udGFpbmVyLnNob3duJyk7XG4gICAgY29uc3Qgc2tpbk5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2tpbi1uYW1lJyk7XG5cbiAgICBjdXJyZW50U2hvd25JbWFnZS5jbGFzc05hbWUgPSAnc2tpbi1pbWFnZS1jb250YWluZXInO1xuICAgIGNvbnN0IGZpcnN0SW1hZ2UgPSBza2luSW1hZ2VzQ29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkO1xuICAgIGNvbnN0IGxhc3RJbWFnZSA9IHNraW5JbWFnZXNDb250YWluZXIubGFzdEVsZW1lbnRDaGlsZDtcblxuICAgIGlmIChmaXJzdEltYWdlID09PSBjdXJyZW50U2hvd25JbWFnZSAmJiBhcnJvd0NsYXNzTGlzdC5pbmNsdWRlcygnbGVmdC1hcnJvdycpKSB7XG4gICAgICBsYXN0SW1hZ2UuY2xhc3NOYW1lID0gJ3NraW4taW1hZ2UtY29udGFpbmVyIHNob3duJztcbiAgICAgIHNraW5OYW1lLnRleHRDb250ZW50ID0gbGFzdEltYWdlLmlkO1xuICAgIH0gZWxzZSBpZiAobGFzdEltYWdlID09PSBjdXJyZW50U2hvd25JbWFnZSAmJiBhcnJvd0NsYXNzTGlzdC5pbmNsdWRlcygncmlnaHQtYXJyb3cnKSkge1xuICAgICAgZmlyc3RJbWFnZS5jbGFzc05hbWUgPSAnc2tpbi1pbWFnZS1jb250YWluZXIgc2hvd24nO1xuICAgICAgc2tpbk5hbWUudGV4dENvbnRlbnQgPSBmaXJzdEltYWdlLmlkO1xuICAgIH0gZWxzZSBpZiAoYXJyb3dDbGFzc0xpc3QuaW5jbHVkZXMoJ3JpZ2h0LWFycm93JykpIHtcbiAgICAgIGN1cnJlbnRTaG93bkltYWdlLm5leHRFbGVtZW50U2libGluZy5jbGFzc05hbWUgPSAnc2tpbi1pbWFnZS1jb250YWluZXIgc2hvd24nO1xuICAgICAgc2tpbk5hbWUudGV4dENvbnRlbnQgPSBjdXJyZW50U2hvd25JbWFnZS5uZXh0RWxlbWVudFNpYmxpbmcuaWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnRTaG93bkltYWdlLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NOYW1lID0gJ3NraW4taW1hZ2UtY29udGFpbmVyIHNob3duJztcbiAgICAgIHNraW5OYW1lLnRleHRDb250ZW50ID0gY3VycmVudFNob3duSW1hZ2UucHJldmlvdXNFbGVtZW50U2libGluZy5pZDtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2xlYXJNYWluTW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGNoYW1waW9uTmFtZSA9IG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLW5hbWUnKTtcbiAgICBjb25zdCBjaGFtcGlvblRpdGxlID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tdGl0bGUnKTtcbiAgICBjb25zdCBjaGFtcGlvblJvbGVzID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tcm9sZXMnKTtcbiAgICBjb25zdCBjaGFtcGlvbkxvcmUgPSBtYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbi1sb3JlJyk7XG4gICAgY29uc3QgYWJpbGl0eURldGFpbHMgPSBtYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5hYmlsaXR5LWRldGFpbHMnKTtcbiAgICBjb25zdCBjaGFtcGlvblRpcHMgPSBtYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbi10aXBzJyk7XG5cbiAgICBjb25zdCBtYWluTW9kYWxIZWFkZXIgPSBbY2hhbXBpb25OYW1lLCBjaGFtcGlvblRpdGxlLCBjaGFtcGlvblJvbGVzXTtcbiAgICBtYWluTW9kYWxIZWFkZXIuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgY3VycmVudEVsZW1lbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICB9KTtcblxuICAgIGNoYW1waW9uTG9yZS5yZW1vdmUoKTtcbiAgICBhYmlsaXR5RGV0YWlscy5yZW1vdmUoKTtcbiAgICBjaGFtcGlvblRpcHMucmVtb3ZlKCk7XG4gIH07XG5cbiAgY29uc3QgY2xlYXJTdGF0c01vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0YXRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YXRzLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGNoYW1waW9uTmFtZSA9IHN0YXRzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbi1uYW1lJyk7XG4gICAgY29uc3QgY2hhbXBpb25UaXRsZSA9IHN0YXRzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbi10aXRsZScpO1xuICAgIGNvbnN0IGNoYW1waW9uU3RhdHNPdmVydmlldyA9IHN0YXRzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbi1zdGF0cy1vdmVydmlldycpO1xuICAgIGNvbnN0IGFsbGRhbWFnZVN0YXRzID0gc3RhdHNDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmRhbWFnZS1zdGF0cycpO1xuICAgIGNvbnN0IGl0ZW1TZXRzQ29udGFpbmVyID0gc3RhdHNDb250YWluZXIucXVlcnlTZWxlY3RvcignLml0ZW0tc2V0cy1jb250YWluZXInKTtcbiAgICBjb25zdCBiZXN0TWF0Y2h1cHMgPSBzdGF0c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuYmVzdC1tYXRjaHVwcycpO1xuICAgIGNvbnN0IHdvcnN0TWF0Y2h1cHMgPSBzdGF0c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcud29yc3QtbWF0Y2h1cHMnKTtcblxuICAgIGNvbnN0IHN0YXRzTW9kYWxIZWFkZXIgPSBbY2hhbXBpb25OYW1lLCBjaGFtcGlvblRpdGxlLCBjaGFtcGlvblN0YXRzT3ZlcnZpZXddO1xuICAgIHN0YXRzTW9kYWxIZWFkZXIuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgY3VycmVudEVsZW1lbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICB9KTtcbiAgICBhbGxkYW1hZ2VTdGF0cy5mb3JFYWNoKChkYW1hZ2VTdGF0KSA9PiB7XG4gICAgICBjb25zdCBkYW1hZ2VTdGF0RWxlbWVudCA9IGRhbWFnZVN0YXQ7XG4gICAgICBkYW1hZ2VTdGF0RWxlbWVudC5yZW1vdmUoKTtcbiAgICB9KTtcbiAgICBjb25zdCBzdGF0c01vZGFsQ29udGVudCA9IFtpdGVtU2V0c0NvbnRhaW5lciwgYmVzdE1hdGNodXBzLCB3b3JzdE1hdGNodXBzXTtcbiAgICBzdGF0c01vZGFsQ29udGVudC5mb3JFYWNoKChjb250ZW50KSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50RWxlbWVudCA9IGNvbnRlbnQ7XG4gICAgICBjb250ZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBjbGVhclNraW5zTW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2tpbkltYWdlc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5za2luLWltYWdlcy1jb250YWluZXInKTtcbiAgICBza2luSW1hZ2VzQ29udGFpbmVyLnJlbW92ZSgpO1xuICB9O1xuXG4gIGNvbnN0IGNsb3NlQ2hhbXBpb25Nb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1jb250YWluZXInKTtcbiAgICBjb25zdCBzdGF0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGF0cy1jb250YWluZXInKTtcbiAgICBjb25zdCBza2luc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNza2lucy1jb250YWluZXInKTtcblxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgbWFpbkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBzdGF0c0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHNraW5zQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH07XG5cbiAgY29uc3QgbW9kYWxDbGlja0V2ZW50cyA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ3NwZWxsLWltZycpIHtcbiAgICAgIGNvbnN0IGRhc2hJbmRleCA9IGV2ZW50LnRhcmdldC5pZC5pbmRleE9mKCctJyk7XG4gICAgICBjb25zdCBhYmlsaXR5SWQgPSBldmVudC50YXJnZXQuaWQuc2xpY2UoMCwgZGFzaEluZGV4KTtcbiAgICAgIHRvZ2dsZUFjdGl2ZUFiaWxpdHkoYWJpbGl0eUlkKTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ21vZGFsLW5hdi1saW5rJykge1xuICAgICAgY2hhbmdlTW9kYWxUZW1wbGF0ZShldmVudC50YXJnZXQpO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5mcm9tKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QpLmluY2x1ZGVzKCdpbWctc2Nyb2xsLWFycm93JykpIHtcbiAgICAgIHRvZ2dsZVNraW5JbWFnZXMoQXJyYXkuZnJvbShldmVudC50YXJnZXQuY2xhc3NMaXN0KSk7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdjbG9zZS1tb2RhbC1idG4nKSB7XG4gICAgICBtb2RhbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG1vZGFsQ2xpY2tFdmVudHMpO1xuICAgICAgY2xvc2VDaGFtcGlvbk1vZGFsKCk7XG4gICAgICBjbGVhck1haW5Nb2RhbCgpO1xuICAgICAgY2xlYXJTdGF0c01vZGFsKCk7XG4gICAgICBjbGVhclNraW5zTW9kYWwoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbW9kYWxNb3VzZW92ZXJFdmVudHMgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2l0ZW0taW1nJ1xuICAgICAgfHwgZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2NvbXBvbmVudC1pdGVtLWltZycpIHtcbiAgICAgIGRpc3BheUl0ZW1EZXRhaWxzKGV2ZW50LnRhcmdldCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG1vZGFsTW91c2VvdXRFdmVudHMgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2l0ZW0taW1nJ1xuICAgIHx8IGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdjb21wb25lbnQtaXRlbS1pbWcnKSB7XG4gICAgICBpZiAoIWV2ZW50LnRhcmdldCkgcmV0dXJuO1xuXG4gICAgICBsZXQgeyByZWxhdGVkVGFyZ2V0IH0gPSBldmVudDtcblxuICAgICAgd2hpbGUgKHJlbGF0ZWRUYXJnZXQpIHtcbiAgICAgICAgaWYgKHJlbGF0ZWRUYXJnZXQgPT09IGV2ZW50LnRhcmdldCkgcmV0dXJuO1xuICAgICAgICByZWxhdGVkVGFyZ2V0ID0gcmVsYXRlZFRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgfVxuXG4gICAgICBoaWRlSXRlbURldGFpbHMoZXZlbnQudGFyZ2V0KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbW9kYWxBcnJvd0V2ZW50cyA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHNraW5zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NraW5zLWNvbnRhaW5lcicpO1xuICAgIGlmIChza2luc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snKSB7XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dSaWdodCcpIHtcbiAgICAgICAgY29uc3QgcmlnaHRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaWdodC1hcnJvdycpO1xuICAgICAgICB0b2dnbGVTa2luSW1hZ2VzKEFycmF5LmZyb20ocmlnaHRBcnJvdy5jbGFzc0xpc3QpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93TGVmdCcpIHtcbiAgICAgICAgY29uc3QgbGVmdEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQtYXJyb3cnKTtcbiAgICAgICAgdG9nZ2xlU2tpbkltYWdlcyhBcnJheS5mcm9tKGxlZnRBcnJvdy5jbGFzc0xpc3QpKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbW9kYWxDaGFuZ2VMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcblxuICAgIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbW9kYWxDbGlja0V2ZW50cyk7XG4gICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgbW9kYWxNb3VzZW92ZXJFdmVudHMpO1xuICAgIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgbW9kYWxNb3VzZW91dEV2ZW50cyk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG1vZGFsQXJyb3dFdmVudHMpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbW9kYWxDaGFuZ2VMaXN0ZW5lcnMsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBDaGFtcGlvbk1vZGFsQ29udHJvbGxlcjtcbiIsImltcG9ydCBnZXRDaGFtcGlvbkRldGFpbHMgZnJvbSAnLi4vY2hhbXBpb25EYXRhL2NoYW1waW9uRGV0YWlscyc7XG5pbXBvcnQgZ2V0Q2hhbXBpb25TdGF0cyBmcm9tICcuLi9jaGFtcGlvbkRhdGEvY2hhbXBpb25TdGF0cyc7XG5pbXBvcnQgY2hhbXBpb25EZXRhaWxzTW9kYWwgZnJvbSAnLi4vdGVtcGxhdGVzL2NoYW1waW9uRGV0YWlsc01vZGFsJztcbmltcG9ydCBjaGFtcGlvblN0YXRzTW9kYWwgZnJvbSAnLi4vdGVtcGxhdGVzL2NoYW1waW9uU3RhdHNNb2RhbCc7XG5pbXBvcnQgY2hhbXBpb25Ta2luc01vZGFsIGZyb20gJy4uL3RlbXBsYXRlcy9jaGFtcGlvblNraW5zTW9kYWwnO1xuaW1wb3J0IENoYW1waW9uTW9kYWxDb250cm9sbGVyIGZyb20gJy4vY2hhbXBpb25Nb2RhbENvbnRyb2xsZXInO1xuaW1wb3J0IENoYW1waW9uRmlsdGVyIGZyb20gJy4vZmlsdGVyQ2hhbXBpb25zJztcbmltcG9ydCBTb3J0Q2hhbXBpb25zIGZyb20gJy4vc29ydENoYW1waW9ucyc7XG5pbXBvcnQgeyBnZXRBbGxDaGFtcGlvbkRldGFpbHMsIGdldEFsbENoYW1waW9uU3RhdHMgfSBmcm9tICcuLi9jaGFtcGlvbkRhdGEvZ2V0QWxsQ2hhbXBpb25zJztcbmltcG9ydCBnZXRMYXRlc3RWZXJzaW9uIGZyb20gJy4uL2NoYW1waW9uRGF0YS9nZXRMYXRlc3RWZXJzaW9uJztcblxuY29uc3QgQ2hhbXBpb25zUGFnZUNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBjb25zdCBkaXNwbGF5RHJvcGRvd25PcHRpb25zID0gKGRyb3Bkb3duT3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IGFsbERyb3Bkb3duT3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bi1vcHRpb25zJyk7XG4gICAgYWxsRHJvcGRvd25PcHRpb25zLmZvckVhY2goKG9wdGlvbnMpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbnNTdHlsZSA9IG9wdGlvbnMuc3R5bGU7XG4gICAgICBvcHRpb25zU3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KTtcblxuICAgIGNvbnN0IGRyb3Bkb3duT3B0aW9uc1N0eWxlID0gZHJvcGRvd25PcHRpb25zLnN0eWxlO1xuICAgIGRyb3Bkb3duT3B0aW9uc1N0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gIH07XG5cbiAgY29uc3QgaGlkZURyb3Bkb3duT3B0aW9ucyA9IChkcm9wZG93bk9wdGlvbnMpID0+IHtcbiAgICBjb25zdCBkcm9wZG93bk9wdGlvbnNTdHlsZSA9IGRyb3Bkb3duT3B0aW9ucy5zdHlsZTtcbiAgICBkcm9wZG93bk9wdGlvbnNTdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9O1xuXG4gIGNvbnN0IGRyb3Bkb3duT3B0aW9uc1RvZ2dsZSA9IChkcm9wZG93bkJ0bikgPT4ge1xuICAgIGNvbnN0IGRyb3Bkb3duT3B0aW9ucyA9IGRyb3Bkb3duQnRuLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duLW9wdGlvbnMnKTtcbiAgICBpZiAoZHJvcGRvd25PcHRpb25zLnN0eWxlLmRpc3BsYXkgIT09ICdmbGV4Jykge1xuICAgICAgZGlzcGxheURyb3Bkb3duT3B0aW9ucyhkcm9wZG93bk9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoaWRlRHJvcGRvd25PcHRpb25zKGRyb3Bkb3duT3B0aW9ucyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlDaGFtcGlvbk1vZGFsID0gYXN5bmMgKGNoYW1waW9uSWQpID0+IHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICAgIGNvbnN0IGxhdGVzdFZlcnNpb24gPSBhd2FpdCBnZXRMYXRlc3RWZXJzaW9uKCk7XG4gICAgY29uc3QgY2hhbXBpb25EZXRhaWxzID0gYXdhaXQgZ2V0Q2hhbXBpb25EZXRhaWxzKGNoYW1waW9uSWQsIGxhdGVzdFZlcnNpb24pO1xuXG4gICAgY29uc3QgY2hhbXBpb25TdGF0cyA9IGF3YWl0IGdldENoYW1waW9uU3RhdHMoY2hhbXBpb25JZCk7XG5cbiAgICBjb25zdCBza2luSW1hZ2VzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNraW4taW1hZ2VzLWNvbnRhaW5lcicpO1xuICAgIC8qXG4gICAgICBwdXJwb3NlIG9mIHRoZSBpZiBzdGF0ZW1lbnQgaXMgdG8gcHJldmVudCBzcGFtIGNsaWNrcyBmcm9tIHJlbmRlcmluZ1xuICAgICAgZHVwbGljYXRlIGNvbnRlbnQgb250byB0aGUgY2hhbXBpb24gbW9kYWwuXG4gICAgKi9cbiAgICBpZiAoIXNraW5JbWFnZXNDb250YWluZXIpIHtcbiAgICAgIGNoYW1waW9uRGV0YWlsc01vZGFsKGNoYW1waW9uRGV0YWlscyk7XG4gICAgICBjaGFtcGlvblN0YXRzTW9kYWwoY2hhbXBpb25EZXRhaWxzLCBjaGFtcGlvblN0YXRzLCBsYXRlc3RWZXJzaW9uKTtcbiAgICAgIGNoYW1waW9uU2tpbnNNb2RhbChjaGFtcGlvbkRldGFpbHMpO1xuICAgIH1cblxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIENoYW1waW9uTW9kYWxDb250cm9sbGVyLm1vZGFsQ2hhbmdlTGlzdGVuZXJzKCk7XG4gIH07XG5cbiAgY29uc3Qgc2VsZWN0TGFuZUZpbHRlck9wdGlvbiA9IChjbGlja2VkTGFuZU9wdGlvbikgPT4ge1xuICAgIGNvbnN0IGNoYW1waW9uc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb25zLXNlY3Rpb24nKTtcbiAgICBjb25zdCBhY3RpdmVMYW5lT3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1vcHRpb24uYWN0aXZlJyk7XG4gICAgaWYgKGNsaWNrZWRMYW5lT3B0aW9uID09PSBhY3RpdmVMYW5lT3B0aW9uIHx8IGNoYW1waW9uc1NlY3Rpb24uc3R5bGUudmlzaWJpbGl0eSA9PT0gJ2hpZGRlbicpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgYWN0aXZlTGFuZU9wdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBjbGlja2VkTGFuZU9wdGlvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrTGFuZUZpbHRlck9wdGlvbiA9IGFzeW5jIChhbGxDaGFtcGlvblN0YXRzKSA9PiB7XG4gICAgY29uc3QgYWN0aXZlTGFuZU9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItb3B0aW9uLmFjdGl2ZScpO1xuICAgIGNvbnN0IGxhbmVOYW1lID0gYWN0aXZlTGFuZU9wdGlvbi5jbGFzc0xpc3RbMF07XG4gICAgYXdhaXQgQ2hhbXBpb25GaWx0ZXIuZmlsdGVyQnlMYW5lKGxhbmVOYW1lLCBhbGxDaGFtcGlvblN0YXRzKTtcbiAgfTtcblxuICBjb25zdCBjaGVja1NvcnRpbmdPcHRpb24gPSAoYWxsQ2hhbXBpb25TdGF0cykgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZVNvcnRpbmdPcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc29ydC5hY3RpdmUnKTtcbiAgICBpZiAoYWN0aXZlU29ydGluZ09wdGlvbiA9PT0gbnVsbCkge1xuICAgICAgU29ydENoYW1waW9ucy5zb3J0QnlEZWZhdWx0T3JkZXIoYWxsQ2hhbXBpb25TdGF0cyk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5mcm9tKGFjdGl2ZVNvcnRpbmdPcHRpb24uY2xhc3NMaXN0KS5pbmNsdWRlcygnd2lucmF0ZScpKSB7XG4gICAgICBTb3J0Q2hhbXBpb25zLnNvcnRDaGFtcGlvbnNCeVdpbnJhdGUoYWxsQ2hhbXBpb25TdGF0cyk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5mcm9tKGFjdGl2ZVNvcnRpbmdPcHRpb24uY2xhc3NMaXN0KS5pbmNsdWRlcygncGlja3JhdGUnKSkge1xuICAgICAgU29ydENoYW1waW9ucy5zb3J0Q2hhbXBpb25zQnlQaWNrcmF0ZShhbGxDaGFtcGlvblN0YXRzKTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmZyb20oYWN0aXZlU29ydGluZ09wdGlvbi5jbGFzc0xpc3QpLmluY2x1ZGVzKCdkYW1hZ2UnKSkge1xuICAgICAgU29ydENoYW1waW9ucy5zb3J0Q2hhbXBpb25zQnlEYW1hZ2VEb25lKGFsbENoYW1waW9uU3RhdHMpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjaGVja0FjdGl2ZVJvbGVPcHRpb25zID0gKGFsbENoYW1waW9uRGV0YWlscykgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZVJvbGVPcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJvbGUuYWN0aXZlJyk7XG4gICAgaWYgKGFjdGl2ZVJvbGVPcHRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBhY3RpdmVSb2xlcyA9IEFycmF5LmZyb20oYWN0aXZlUm9sZU9wdGlvbnMpLm1hcCgoYWN0aXZlUm9sZU9wdGlvbikgPT4ge1xuICAgICAgY29uc3QgYWN0aXZlUm9sZSA9IGFjdGl2ZVJvbGVPcHRpb24uY2xhc3NMaXN0WzBdO1xuICAgICAgcmV0dXJuIGFjdGl2ZVJvbGU7XG4gICAgfSk7XG4gICAgQ2hhbXBpb25GaWx0ZXIuZmlsdGVyQnlSb2xlKGFjdGl2ZVJvbGVzLCBhbGxDaGFtcGlvbkRldGFpbHMpO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrQWN0aXZlRGlmZmljdWx0eU9wdGlvbnMgPSAoYWxsQ2hhbXBpb25EZXRhaWxzKSA9PiB7XG4gICAgY29uc3QgYWN0aXZlRGlmZmljdWx0eU9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGlmZmljdWx0eS5hY3RpdmUnKTtcbiAgICBpZiAoYWN0aXZlRGlmZmljdWx0eU9wdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGFjdGl2ZURpZmZpY3VsdGllcyA9IEFycmF5LmZyb20oYWN0aXZlRGlmZmljdWx0eU9wdGlvbnMpLm1hcCgoYWN0aXZlRGlmZmljdWx0eU9wdGlvbikgPT4ge1xuICAgICAgY29uc3QgYWN0aXZlRGlmZmljdWx0eSA9IGFjdGl2ZURpZmZpY3VsdHlPcHRpb24uY2xhc3NMaXN0WzBdO1xuICAgICAgcmV0dXJuIGFjdGl2ZURpZmZpY3VsdHk7XG4gICAgfSk7XG4gICAgQ2hhbXBpb25GaWx0ZXIuZmlsdGVyQnlEaWZmaWN1bHR5KGFjdGl2ZURpZmZpY3VsdGllcywgYWxsQ2hhbXBpb25EZXRhaWxzKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBzZWxlY3RNdWx0aURyb3Bkb3duT3B0aW9uID0gKGRyb3Bkb3duT3B0aW9uKSA9PiB7XG4gICAgZHJvcGRvd25PcHRpb24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIH07XG5cbiAgY29uc3QgZGVzZWxlY3REcm9wZG93bk9wdGlvbiA9IChkcm9wZG93bk9wdGlvbikgPT4ge1xuICAgIGRyb3Bkb3duT3B0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZURyb3Bkb3duT3B0aW9uID0gKGRyb3Bkb3duT3B0aW9uKSA9PiB7XG4gICAgaWYgKCFBcnJheS5mcm9tKGRyb3Bkb3duT3B0aW9uLmNsYXNzTGlzdCkuaW5jbHVkZXMoJ2FjdGl2ZScpKSB7XG4gICAgICBzZWxlY3RNdWx0aURyb3Bkb3duT3B0aW9uKGRyb3Bkb3duT3B0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVzZWxlY3REcm9wZG93bk9wdGlvbihkcm9wZG93bk9wdGlvbik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNlbGVjdFNpbmdsZURyb3Bkb3duT3B0aW9uID0gKGRyb3Bkb3duT3B0aW9uKSA9PiB7XG4gICAgY29uc3QgYWN0aXZlRHJvcGRvd25PcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2luZ2xlLXNlbGVjdC5hY3RpdmUnKTtcbiAgICBpZiAoYWN0aXZlRHJvcGRvd25PcHRpb24gPT09IG51bGwpIHtcbiAgICAgIGRyb3Bkb3duT3B0aW9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoYWN0aXZlRHJvcGRvd25PcHRpb24gPT09IGRyb3Bkb3duT3B0aW9uKSB7XG4gICAgICBkZXNlbGVjdERyb3Bkb3duT3B0aW9uKGRyb3Bkb3duT3B0aW9uKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYWN0aXZlRHJvcGRvd25PcHRpb24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgZHJvcGRvd25PcHRpb24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIH07XG5cbiAgY29uc3QgcmVkaXJlY3RUb0Zyb250UGFnZSA9ICgpID0+IHtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICdpbmRleC5odG1sJztcbiAgfTtcblxuICBjb25zdCBjaGFtcGlvbnNQYWdlQ2xpY2tFdmVudHMgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAvKiBIZWxwZXIgZnVuY3Rpb25zIGZvciBjbGljayBldmVudHMgKi9cbiAgICBjb25zdCBjaGVja09wdGlvbnMgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBhbGxDaGFtcGlvblN0YXRzID0gYXdhaXQgZ2V0QWxsQ2hhbXBpb25TdGF0cygpO1xuICAgICAgY29uc3QgYWxsQ2hhbXBpb25EZXRhaWxzID0gYXdhaXQgZ2V0QWxsQ2hhbXBpb25EZXRhaWxzKCk7XG4gICAgICBhd2FpdCBjaGVja0xhbmVGaWx0ZXJPcHRpb24oYWxsQ2hhbXBpb25TdGF0cyk7XG4gICAgICBjaGVja1NvcnRpbmdPcHRpb24oYWxsQ2hhbXBpb25TdGF0cyk7XG4gICAgICBjaGVja0FjdGl2ZVJvbGVPcHRpb25zKGFsbENoYW1waW9uRGV0YWlscyk7XG4gICAgICBjaGVja0FjdGl2ZURpZmZpY3VsdHlPcHRpb25zKGFsbENoYW1waW9uRGV0YWlscyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhpZGVDaGFtcGlvbnNTZWN0aW9uID0gKCkgPT4ge1xuICAgICAgY29uc3QgY2hhbXBpb25zU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbnMtc2VjdGlvbicpO1xuICAgICAgY2hhbXBpb25zU2VjdGlvbi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgfTtcblxuICAgIGNvbnN0IHNob3dDaGFtcGlvbnNTZWN0aW9uID0gKCkgPT4ge1xuICAgICAgY29uc3QgY2hhbXBpb25zU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbnMtc2VjdGlvbicpO1xuICAgICAgY2hhbXBpb25zU2VjdGlvbi5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgIH07XG5cbiAgICBjb25zdCByZW1vdmVDaGFtcGlvbnNQYWdlTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICBjb25zdCBjaGFtcGlvbnNQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoYW1waW9ucy1wYWdlJyk7XG4gICAgICBjaGFtcGlvbnNQYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbXBpb25zUGFnZUNsaWNrRXZlbnRzKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkQ2hhbXBpb25zUGFnZUxpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgY29uc3QgY2hhbXBpb25zUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGFtcGlvbnMtcGFnZScpO1xuICAgICAgY2hhbXBpb25zUGFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW1waW9uc1BhZ2VDbGlja0V2ZW50cyk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNob3dMb2FkZXIgPSAoKSA9PiB7XG4gICAgICBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGVyJyk7XG4gICAgICBsb2FkZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfTtcblxuICAgIGNvbnN0IGhpZGVMb2FkZXIgPSAoKSA9PiB7XG4gICAgICBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGVyJyk7XG4gICAgICBsb2FkZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9O1xuXG4gICAgY29uc3Qgc2hvd05vQ2hhbXBpb25NZXNzYWdlID0gKCkgPT4ge1xuICAgICAgY29uc3Qgbm9DaGFtcGlvbk1hdGNoZXNNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vLWNoYW1waW9ucy1tYXRjaC1tZXNzYWdlJyk7XG4gICAgICBub0NoYW1waW9uTWF0Y2hlc01lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfTtcblxuICAgIGNvbnN0IGhpZGVOb0NoYW1waW9uTWVzc2FnZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IG5vQ2hhbXBpb25NYXRjaGVzTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uby1jaGFtcGlvbnMtbWF0Y2gtbWVzc2FnZScpO1xuICAgICAgbm9DaGFtcGlvbk1hdGNoZXNNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfTtcblxuICAgIGNvbnN0IGZpbHRlckFuZFNvcnRDaGFtcGlvbnNTZWN0aW9uID0gYXN5bmMgKHdhaXRUaW1lKSA9PiB7XG4gICAgICBoaWRlTm9DaGFtcGlvbk1lc3NhZ2UoKTtcbiAgICAgIGhpZGVDaGFtcGlvbnNTZWN0aW9uKCk7XG4gICAgICBzaG93TG9hZGVyKCk7XG4gICAgICByZW1vdmVDaGFtcGlvbnNQYWdlTGlzdGVuZXIoKTtcbiAgICAgIGF3YWl0IGNoZWNrT3B0aW9ucygpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNob3dDaGFtcGlvbnNTZWN0aW9uKCk7XG4gICAgICAgIGhpZGVMb2FkZXIoKTtcbiAgICAgIH0sIHdhaXRUaW1lKTtcbiAgICAgIGFkZENoYW1waW9uc1BhZ2VMaXN0ZW5lcigpO1xuICAgICAgY29uc3QgY2hhbXBpb25Db250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYW1waW9uLWNvbnRhaW5lcicpO1xuICAgICAgY29uc3QgY2hhbXBpb25Db250YWluZXJzSGlkZGVuID0gQXJyYXkuZnJvbShjaGFtcGlvbkNvbnRhaW5lcnMpLmV2ZXJ5KChjaGFtcGlvbkNvbnRhaW5lcikgPT4gY2hhbXBpb25Db250YWluZXIuY2xhc3NMaXN0WzFdID09PSAnaGlkZGVuJyk7XG4gICAgICBpZiAoY2hhbXBpb25Db250YWluZXJzSGlkZGVuKSB7XG4gICAgICAgIHNob3dOb0NoYW1waW9uTWVzc2FnZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvKiBjbGljayBldmVudCByZXNwb25zZXMgKi9cbiAgICBpZiAoQXJyYXkuZnJvbShldmVudC50YXJnZXQuY2xhc3NMaXN0KS5pbmNsdWRlcygnZHJvcGRvd24tYnRuJykpIHtcbiAgICAgIGRyb3Bkb3duT3B0aW9uc1RvZ2dsZShldmVudC50YXJnZXQpO1xuICAgIH1cblxuICAgIGlmIChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc05hbWUgPT09ICdjaGFtcGlvbi1jb250YWluZXIgc2hvd24nKSB7XG4gICAgICBkaXNwbGF5Q2hhbXBpb25Nb2RhbChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LmlkKTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc05hbWUgPT09ICdjaGFtcGlvbi1jb250YWluZXIgc2hvd24nKSB7XG4gICAgICBkaXNwbGF5Q2hhbXBpb25Nb2RhbChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmRhdGFzZXQuaWQpO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5mcm9tKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QpLmluY2x1ZGVzKCdtdWx0aS1zZWxlY3QnKSkge1xuICAgICAgdG9nZ2xlRHJvcGRvd25PcHRpb24oZXZlbnQudGFyZ2V0KTtcbiAgICAgIGZpbHRlckFuZFNvcnRDaGFtcGlvbnNTZWN0aW9uKDYwMCk7XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmZyb20oZXZlbnQudGFyZ2V0LmNsYXNzTGlzdCkuaW5jbHVkZXMoJ3NpbmdsZS1zZWxlY3QnKSkge1xuICAgICAgc2VsZWN0U2luZ2xlRHJvcGRvd25PcHRpb24oZXZlbnQudGFyZ2V0KTtcbiAgICAgIGZpbHRlckFuZFNvcnRDaGFtcGlvbnNTZWN0aW9uKDEwMDApO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5mcm9tKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QpLmluY2x1ZGVzKCdoZWFkZXItb3B0aW9uJykpIHtcbiAgICAgIHNlbGVjdExhbmVGaWx0ZXJPcHRpb24oZXZlbnQudGFyZ2V0KTtcbiAgICAgIGZpbHRlckFuZFNvcnRDaGFtcGlvbnNTZWN0aW9uKDYwMCk7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdhcHAtbmFtZScpIHtcbiAgICAgIHJlZGlyZWN0VG9Gcm9udFBhZ2UoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2hhbXBpb25zUGFnZUtleUV2ZW50cyA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgYWN0aXZlRWxlbWVudCB9ID0gZG9jdW1lbnQ7XG5cbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBpZiAoYWN0aXZlRWxlbWVudCAmJiBhY3RpdmVFbGVtZW50LmNsYXNzTmFtZSA9PT0gJ2NoYW1waW9uLWNvbnRhaW5lciBzaG93bicpIHtcbiAgICAgICAgZGlzcGxheUNoYW1waW9uTW9kYWwoYWN0aXZlRWxlbWVudC5kYXRhc2V0LmlkKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQgJiYgYWN0aXZlRWxlbWVudC5jbGFzc05hbWUgPT09ICdjaGFtcGlvbi1pbWcnKSB7XG4gICAgICAgIGRpc3BsYXlDaGFtcGlvbk1vZGFsKGFjdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5kYXRhc2V0LmlkKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2hhbXBpb25zUGFnZUxpc3RlbmVycyA9ICgpID0+IHtcbiAgICBjb25zdCBjaGFtcGlvbnNQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoYW1waW9ucy1wYWdlJyk7XG4gICAgY2hhbXBpb25zUGFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW1waW9uc1BhZ2VDbGlja0V2ZW50cyk7XG4gICAgY2hhbXBpb25zUGFnZS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgY2hhbXBpb25zUGFnZUtleUV2ZW50cyk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjaGFtcGlvbnNQYWdlTGlzdGVuZXJzLFxuICAgIGRpc3BsYXlDaGFtcGlvbk1vZGFsLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhbXBpb25zUGFnZUNvbnRyb2xsZXI7XG4iLCJpbXBvcnQgZ2V0Q2hhbXBpb25TdGF0cyBmcm9tICcuLi9jaGFtcGlvbkRhdGEvY2hhbXBpb25TdGF0cyc7XG5pbXBvcnQgeyBjcmVhdGVDaGFtcGlvbkNvbnRhaW5lciB9IGZyb20gJy4uL3RlbXBsYXRlcy9yZW5kZXJIZWxwZXJzJztcblxuY29uc3QgQ2hhbXBpb25GaWx0ZXIgPSAoKCkgPT4ge1xuICBjb25zdCByZW5kZXJBbGxDaGFtcGlvbnMgPSBhc3luYyAoYWxsQ2hhbXBpb25TdGF0cykgPT4ge1xuICAgIGNvbnN0IGNoYW1waW9uc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb25zLXNlY3Rpb24nKTtcbiAgICBhbGxDaGFtcGlvblN0YXRzLmZvckVhY2goKGNoYW1waW9uKSA9PiB7XG4gICAgICBjcmVhdGVDaGFtcGlvbkNvbnRhaW5lcihjaGFtcGlvbiwgY2hhbXBpb25zU2VjdGlvbik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNoYW1waW9uc1NlY3Rpb247XG4gIH07XG5cbiAgY29uc3QgY2xlYXJDaGFtcGlvbnNTZWN0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGNoYW1waW9uc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb25zLXNlY3Rpb24nKTtcbiAgICBjaGFtcGlvbnNTZWN0aW9uLnRleHRDb250ZW50ID0gJyc7XG4gIH07XG5cbiAgY29uc3Qgc2hvd0NoYW1waW9uID0gKGNoYW1waW9uKSA9PiB7XG4gICAgY2hhbXBpb24uY2xhc3NMaXN0LmFkZCgnc2hvd24nKTtcbiAgICBjaGFtcGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgfTtcblxuICBjb25zdCBoaWRlQ2hhbXBpb24gPSAoY2hhbXBpb24pID0+IHtcbiAgICBjaGFtcGlvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBjaGFtcGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdzaG93bicpO1xuICB9O1xuXG4gIGNvbnN0IGZpbHRlckJ5TGFuZSA9IGFzeW5jIChjbGlja2VkTGFuZSwgYWxsQ2hhbXBpb25TdGF0cykgPT4ge1xuICAgIGNsZWFyQ2hhbXBpb25zU2VjdGlvbigpO1xuICAgIGNvbnN0IGNoYW1waW9uc1NlY3Rpb24gPSBhd2FpdCByZW5kZXJBbGxDaGFtcGlvbnMoYWxsQ2hhbXBpb25TdGF0cyk7XG4gICAgY2hhbXBpb25zU2VjdGlvbi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgY29uc3QgYWxsQ2hhbXBpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYW1waW9uLWNvbnRhaW5lcicpO1xuICAgIGlmIChjbGlja2VkTGFuZSA9PT0gJ2FsbCcpIHtcbiAgICAgIGFsbENoYW1waW9ucy5mb3JFYWNoKChjaGFtcGlvbikgPT4ge1xuICAgICAgICBzaG93Q2hhbXBpb24oY2hhbXBpb24pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgICAgIGFsbENoYW1waW9ucy5mb3JFYWNoKChjaGFtcGlvbikgPT4ge1xuICAgICAgICBjb25zdCBjaGFtcGlvbklkID0gY2hhbXBpb24uZGF0YXNldC5pZDtcbiAgICAgICAgcmVzdWx0cy5wdXNoKGdldENoYW1waW9uU3RhdHMoY2hhbXBpb25JZCkpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBjaGFtcGlvblN0YXRzID0gYXdhaXQgUHJvbWlzZS5hbGwocmVzdWx0cyk7XG4gICAgICBjaGFtcGlvblN0YXRzLmZvckVhY2goKGNoYW1waW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoYW1waW9uTGFuZSA9IGNoYW1waW9uLmxhbmU7XG4gICAgICAgIGNvbnN0IGNoYW1waW9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPSR7Y2hhbXBpb24uY2hhbXBpb25JZH1dYCk7XG4gICAgICAgIGlmIChjaGFtcGlvbkxhbmUudG9Mb3dlckNhc2UoKSAhPT0gY2xpY2tlZExhbmUpIHtcbiAgICAgICAgICBoaWRlQ2hhbXBpb24oY2hhbXBpb25FbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaG93Q2hhbXBpb24oY2hhbXBpb25FbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGZpbHRlckJ5Um9sZSA9IChhY3RpdmVSb2xlcywgYWxsQ2hhbXBpb25EZXRhaWxzKSA9PiB7XG4gICAgY29uc3QgY2hhbXBpb25FbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFtcGlvbi1jb250YWluZXInKTtcblxuICAgIGNoYW1waW9uRWxlbWVudHMuZm9yRWFjaCgoY2hhbXBpb24pID0+IHtcbiAgICAgIGxldCByb2xlTWF0Y2hGb3VuZCA9IGZhbHNlO1xuICAgICAgYWN0aXZlUm9sZXMuZm9yRWFjaCgocm9sZSkgPT4ge1xuICAgICAgICBjb25zdCBjaGFtcGlvblJvbGVzID0gYWxsQ2hhbXBpb25EZXRhaWxzW2NoYW1waW9uLmRhdGFzZXQuaWRdLnRhZ3M7XG4gICAgICAgIGNoYW1waW9uUm9sZXMuZm9yRWFjaCgoY2hhbXBpb25Sb2xlKSA9PiB7XG4gICAgICAgICAgaWYgKGNoYW1waW9uUm9sZS50b0xvd2VyQ2FzZSgpID09PSByb2xlKSB7XG4gICAgICAgICAgICByb2xlTWF0Y2hGb3VuZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgaWYgKCFyb2xlTWF0Y2hGb3VuZCkge1xuICAgICAgICBoaWRlQ2hhbXBpb24oY2hhbXBpb24pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGNhdGVnb3Jpc2VEaWZmaWN1bHR5TnVtID0gKGRpZmZpY3VsdHlOdW0pID0+IHtcbiAgICBpZiAoZGlmZmljdWx0eU51bSA8PSAzKSB7XG4gICAgICByZXR1cm4gJ2xvdyc7XG4gICAgfVxuXG4gICAgaWYgKGRpZmZpY3VsdHlOdW0gPD0gNikge1xuICAgICAgcmV0dXJuICdtZWRpdW0nO1xuICAgIH1cblxuICAgIHJldHVybiAnaGlnaCc7XG4gIH07XG5cbiAgY29uc3QgZmlsdGVyQnlEaWZmaWN1bHR5ID0gYXN5bmMgKGFjdGl2ZURpZmZpY3VsdGllcywgYWxsQ2hhbXBpb25EZXRhaWxzKSA9PiB7XG4gICAgY29uc3QgY2hhbXBpb25FbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFtcGlvbi1jb250YWluZXInKTtcblxuICAgIGNoYW1waW9uRWxlbWVudHMuZm9yRWFjaCgoY2hhbXBpb24pID0+IHtcbiAgICAgIGxldCBkaWZmaWN1bHR5TWF0Y2hGb3VuZCA9IGZhbHNlO1xuICAgICAgYWN0aXZlRGlmZmljdWx0aWVzLmZvckVhY2goKGRpZmZpY3VsdHkpID0+IHtcbiAgICAgICAgY29uc3QgY2hhbXBpb25EaWZmaWN1bHR5TnVtID0gYWxsQ2hhbXBpb25EZXRhaWxzW2NoYW1waW9uLmRhdGFzZXQuaWRdLmluZm8uZGlmZmljdWx0eTtcbiAgICAgICAgY29uc3QgY2hhbXBpb25EaWZmaWN1bHR5ID0gY2F0ZWdvcmlzZURpZmZpY3VsdHlOdW0oY2hhbXBpb25EaWZmaWN1bHR5TnVtKTtcblxuICAgICAgICBpZiAoZGlmZmljdWx0eS50b0xvd2VyQ2FzZSgpID09PSBjaGFtcGlvbkRpZmZpY3VsdHkpIHtcbiAgICAgICAgICBkaWZmaWN1bHR5TWF0Y2hGb3VuZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKCFkaWZmaWN1bHR5TWF0Y2hGb3VuZCkge1xuICAgICAgICBoaWRlQ2hhbXBpb24oY2hhbXBpb24pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZmlsdGVyQnlMYW5lLFxuICAgIGZpbHRlckJ5Um9sZSxcbiAgICBmaWx0ZXJCeURpZmZpY3VsdHksXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBDaGFtcGlvbkZpbHRlcjtcbiIsImltcG9ydCBDaGFtcGlvbnNQYWdlQ29udHJvbGxlciBmcm9tICcuL2NoYW1waW9uc1BhZ2VDb250cm9sbGVyJztcblxuY29uc3QgU2VhcmNoYmFyQ29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGNvbnN0IHNob3dBdXRvQ29tcGxldGVOYW1lcyA9IChzZWFyY2hDb250YWluZXIpID0+IHtcbiAgICBjb25zdCBhdXRvQ29tcGxldGVOYW1lcyA9IHNlYXJjaENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuYXV0by1jb21wbGV0ZS1uYW1lcycpO1xuICAgIGF1dG9Db21wbGV0ZU5hbWVzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9O1xuXG4gIGNvbnN0IGhpZGVBdXRvQ29tcGxldGVOYW1lcyA9ICgpID0+IHtcbiAgICBjb25zdCBhdXRvQ29tcGxldGVOYW1lRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXV0by1jb21wbGV0ZS1uYW1lcycpO1xuICAgIGF1dG9Db21wbGV0ZU5hbWVFbGVtZW50cy5mb3JFYWNoKChhdXRvQ29tcGxldGVOYW1lRWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgYXV0b0NvbXBsZXRlTmFtZXMgPSBhdXRvQ29tcGxldGVOYW1lRWxlbWVudDtcbiAgICAgIGF1dG9Db21wbGV0ZU5hbWVzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgc2VhcmNoYmFyRm9jdXNJbkV2ZW50ID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdzZWFyY2gnKSB7XG4gICAgICBjb25zdCBzZWFyY2hDb250YWluZXIgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgIHNob3dBdXRvQ29tcGxldGVOYW1lcyhzZWFyY2hDb250YWluZXIpO1xuICAgICAgZXZlbnQudGFyZ2V0LmZvY3VzKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNlYXJjaGJhckZvY3Vzb3V0RXZlbnQgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoIWV2ZW50LnJlbGF0ZWRUYXJnZXQgfHwgKGV2ZW50LnJlbGF0ZWRUYXJnZXQuY2xhc3NOYW1lICE9PSAnYXV0by1jb21wbGV0ZS1uYW1lLXdyYXBwZXInICYmIGV2ZW50LnJlbGF0ZWRUYXJnZXQuY2xhc3NOYW1lICE9PSAnc2VhcmNoJykpIHtcbiAgICAgIGhpZGVBdXRvQ29tcGxldGVOYW1lcygpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZWFyY2hCYXJJbnB1dEV2ZW50ID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdzZWFyY2gnKSB7XG4gICAgICBjb25zdCBpbnB1dFZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgY29uc3QgYXV0b0NvbXBsZXRlTmFtZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXV0by1jb21wbGV0ZS1uYW1lJyk7XG4gICAgICBhdXRvQ29tcGxldGVOYW1lcy5mb3JFYWNoKChhdXRvQ29tcGxldGVOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBhdXRvQ29tcGxldGVOYW1lO1xuICAgICAgICBpZiAobmFtZS5pZC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICBuYW1lLnBhcmVudEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmFtZS5wYXJlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZWFyY2hiYXJLZXlkb3duRXZlbnRzID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgaWYgKChldmVudC5rZXkgPT09ICdBcnJvd0Rvd24nIHx8IGV2ZW50LmtleSA9PT0gJ0Fycm93VXAnKSAmJiBldmVudC50YXJnZXQgIT09IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSkge1xuICAgICAgbGV0IHsgYWN0aXZlRWxlbWVudCB9ID0gZG9jdW1lbnQ7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBsZXQgZ29Ub1N0YXJ0O1xuICAgICAgY29uc3QgYWN0aW9uID0ge1xuICAgICAgICBBcnJvd1VwOiAncHJldmlvdXMnLCBBcnJvd0Rvd246ICduZXh0JyxcbiAgICAgIH07XG5cbiAgICAgIGlmIChhY3RpdmVFbGVtZW50LmNsYXNzTmFtZSA9PT0gJ3NlYXJjaCcgJiYgZXZlbnQua2V5ID09PSAnQXJyb3dEb3duJykge1xuICAgICAgICBhY3RpdmVFbGVtZW50ID0gYWN0aXZlRWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIC8qIFNraXBzIGF1dG9jb21wbGV0ZSBuYW1lcyB3aGljaCBhcmUgY3VycmVudGx5IG5vdCBkaXNwbGF5ZWQgKi9cbiAgICAgICAgd2hpbGUgKGFjdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgYWN0aXZlRWxlbWVudCA9IGFjdGl2ZUVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICB9XG4gICAgICAgIGFjdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFjdGl2ZUVsZW1lbnQgPSBhY3RpdmVFbGVtZW50W2Ake2FjdGlvbltldmVudC5rZXldfUVsZW1lbnRTaWJsaW5nYF07XG4gICAgICAgIHdoaWxlIChhY3RpdmVFbGVtZW50ICYmIGFjdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgYWN0aXZlRWxlbWVudCA9IGFjdGl2ZUVsZW1lbnRbYCR7YWN0aW9uW2V2ZW50LmtleV19RWxlbWVudFNpYmxpbmdgXTtcbiAgICAgICAgfVxuICAgICAgICAvKiBDaGVja3Mgd2hpY2ggc2VhcmNoIGJhciBkcm9wZG93biBpcyBjdXJyZW50bHkgZGlzcGxheWVkICovXG4gICAgICAgIGNvbnN0IGF1dG9Db21wbGV0ZU5hbWVFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hdXRvLWNvbXBsZXRlLW5hbWVzJyk7XG4gICAgICAgIGNvbnN0IGF1dG9Db21wbGV0ZU5hbWVzID0gQXJyYXkuZnJvbShhdXRvQ29tcGxldGVOYW1lRWxlbWVudHMpLmZpbHRlcihcbiAgICAgICAgICAoYXV0b0NvbXBsZXRlTmFtZUVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzU2hvd2luZyA9IGF1dG9Db21wbGV0ZU5hbWVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09ICdibG9jayc7XG4gICAgICAgICAgICByZXR1cm4gaXNTaG93aW5nO1xuICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgICAgIGlmIChhdXRvQ29tcGxldGVOYW1lc1swXSAhPT0gdW5kZWZpbmVkICYmICFhY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgLyogUmV0dXJucyB0byB0aGUgc3RhcnQgb3IgdGhlIGVuZCBvZiB0aGUgZHJvcGRvd24gd2hlbiBhbiBhcnJvdyBrZXkgaXMgcHJlc3NlZCAqL1xuICAgICAgICAgIGdvVG9TdGFydCA9IGFjdGlvbltldmVudC5rZXldID09PSAnbmV4dCcgfHwgZXZlbnQua2V5ID09PSAnSG9tZSc7XG4gICAgICAgICAgYWN0aXZlRWxlbWVudCA9IGF1dG9Db21wbGV0ZU5hbWVzWzBdLmNoaWxkcmVuW1xuICAgICAgICAgICAgZ29Ub1N0YXJ0ID8gMCA6IGF1dG9Db21wbGV0ZU5hbWVzWzBdLmNoaWxkcmVuLmxlbmd0aCAtIDFcbiAgICAgICAgICBdO1xuICAgICAgICAgIHdoaWxlIChhY3RpdmVFbGVtZW50ICYmIGFjdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICBhY3RpdmVFbGVtZW50ID0gYWN0aXZlRWxlbWVudFtgJHthY3Rpb25bZXZlbnQua2V5XX1FbGVtZW50U2libGluZ2BdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgIGFjdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIGNvbnN0IHsgYWN0aXZlRWxlbWVudCB9ID0gZG9jdW1lbnQ7XG4gICAgICBpZiAoYWN0aXZlRWxlbWVudCAmJiBhY3RpdmVFbGVtZW50LmNsYXNzTmFtZSA9PT0gJ2F1dG8tY29tcGxldGUtbmFtZS13cmFwcGVyJykge1xuICAgICAgICBjb25zdCBzZWFyY2hDb250YWluZXJDbGFzc05hbWUgPSBhY3RpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3RbMV07XG4gICAgICAgIGNvbnN0IGF1dG9Db21wbGV0ZU5hbWUgPSBhY3RpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkO1xuXG4gICAgICAgIC8qIENoZWNrcyB3aGljaCBwYWdlIHRoZSBzZWFyY2ggYmFyIGlzIG9uICovXG4gICAgICAgIGlmIChzZWFyY2hDb250YWluZXJDbGFzc05hbWUgPT09ICdkZXNrdG9wLXNlYXJjaC1jb250YWluZXInXG4gICAgICAgICAgICB8fCBzZWFyY2hDb250YWluZXJDbGFzc05hbWUgPT09ICdtb2JpbGUtc2VhcmNoLWNvbnRhaW5lcicpIHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2hhbXBpb25JZCcsIGF1dG9Db21wbGV0ZU5hbWUuZGF0YXNldC5jaGFtcGlvbklkKTtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICdjaGFtcGlvbnMuaHRtbCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXdhaXQgQ2hhbXBpb25zUGFnZUNvbnRyb2xsZXIuZGlzcGxheUNoYW1waW9uTW9kYWwoYXV0b0NvbXBsZXRlTmFtZS5kYXRhc2V0LmNoYW1waW9uSWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNlYXJjaGJhckNsaWNrRXZlbnRzID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgY2xpY2tBdXRvQ29tcGxldGVOYW1lID0gYXN5bmMgKHNlYXJjaENvbnRhaW5lckNsYXNzTmFtZSwgYXV0b0NvbXBsZXRlTmFtZSkgPT4ge1xuICAgICAgaWYgKHNlYXJjaENvbnRhaW5lckNsYXNzTmFtZSA9PT0gJ2Rlc2t0b3Atc2VhcmNoLWNvbnRhaW5lcidcbiAgICAgIHx8IHNlYXJjaENvbnRhaW5lckNsYXNzTmFtZSA9PT0gJ21vYmlsZS1zZWFyY2gtY29udGFpbmVyJykge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2hhbXBpb25JZCcsIGF1dG9Db21wbGV0ZU5hbWUuZGF0YXNldC5jaGFtcGlvbklkKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnY2hhbXBpb25zLmh0bWwnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXdhaXQgQ2hhbXBpb25zUGFnZUNvbnRyb2xsZXIuZGlzcGxheUNoYW1waW9uTW9kYWwoYXV0b0NvbXBsZXRlTmFtZS5kYXRhc2V0LmNoYW1waW9uSWQpO1xuICAgICAgICBjb25zdCBhdXRvQ29tcGxldGVOYW1lRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXV0by1jb21wbGV0ZS1uYW1lcycpO1xuICAgICAgICBhdXRvQ29tcGxldGVOYW1lRWxlbWVudHMuZm9yRWFjaCgoYXV0b0NvbXBsZXRlTmFtZUVsZW1lbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBhdXRvQ29tcGxldGVOYW1lcyA9IGF1dG9Db21wbGV0ZU5hbWVFbGVtZW50O1xuICAgICAgICAgIGF1dG9Db21wbGV0ZU5hbWVzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3Qgc2VhcmNoQ29udGFpbmVyID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2F1dG8tY29tcGxldGUtbmFtZS13cmFwcGVyJykge1xuICAgICAgY29uc3Qgc2VhcmNoQ29udGFpbmVyQ2xhc3NOYW1lID0gc2VhcmNoQ29udGFpbmVyLmNsYXNzTGlzdFsxXTtcbiAgICAgIGNvbnN0IGF1dG9Db21wbGV0ZU5hbWUgPSBldmVudC50YXJnZXQuZmlyc3RDaGlsZDtcbiAgICAgIGNsaWNrQXV0b0NvbXBsZXRlTmFtZShzZWFyY2hDb250YWluZXJDbGFzc05hbWUsIGF1dG9Db21wbGV0ZU5hbWUpO1xuICAgIH1cblxuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnYXV0by1jb21wbGV0ZS1uYW1lJykge1xuICAgICAgY29uc3Qgc2VhcmNoQ29udGFpbmVyQ2xhc3NOYW1lID0gc2VhcmNoQ29udGFpbmVyLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0WzFdO1xuICAgICAgY29uc3QgYXV0b0NvbXBsZXRlTmFtZSA9IGV2ZW50LnRhcmdldDtcbiAgICAgIGNsaWNrQXV0b0NvbXBsZXRlTmFtZShzZWFyY2hDb250YWluZXJDbGFzc05hbWUsIGF1dG9Db21wbGV0ZU5hbWUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZWFyY2hDb250YWluZXJMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgLy8gY29uc3Qgc2VhcmNoQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1jb250YWluZXInKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgc2VhcmNoYmFyRm9jdXNJbkV2ZW50KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIHNlYXJjaGJhckZvY3Vzb3V0RXZlbnQpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgc2VhcmNoQmFySW5wdXRFdmVudCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHNlYXJjaGJhcktleWRvd25FdmVudHMpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VhcmNoYmFyQ2xpY2tFdmVudHMpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc2VhcmNoQ29udGFpbmVyTGlzdGVuZXJzLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoYmFyQ29udHJvbGxlcjtcbiIsImltcG9ydCB7IGNyZWF0ZUNoYW1waW9uQ29udGFpbmVyIH0gZnJvbSAnLi4vdGVtcGxhdGVzL3JlbmRlckhlbHBlcnMnO1xuXG5jb25zdCBTb3J0Q2hhbXBpb25zID0gKCgpID0+IHtcbiAgY29uc3QgY2xlYXJDaGFtcGlvbnNTZWN0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGNoYW1waW9uc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb25zLXNlY3Rpb24nKTtcbiAgICBjaGFtcGlvbnNTZWN0aW9uLnN0eWxlLnZpc2libGl0eSA9ICdoaWRkZW4nO1xuICAgIGNoYW1waW9uc1NlY3Rpb24udGV4dENvbnRlbnQgPSAnJztcbiAgfTtcblxuICBjb25zdCByZWNyZWF0ZUNoYW1waW9uc1NlY3Rpb24gPSAoY2hhbXBpb25zKSA9PiB7XG4gICAgY29uc3QgY2hhbXBpb25zU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbnMtc2VjdGlvbicpO1xuICAgIGNoYW1waW9ucy5mb3JFYWNoKChjaGFtcGlvbikgPT4ge1xuICAgICAgY3JlYXRlQ2hhbXBpb25Db250YWluZXIoY2hhbXBpb24sIGNoYW1waW9uc1NlY3Rpb24pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGZpbHRlckNoYW1waW9ucyA9IChhbGxDaGFtcGlvblN0YXRzKSA9PiB7XG4gICAgY29uc3QgZmlsdGVyZWRDaGFtcGlvblN0YXRzID0gYWxsQ2hhbXBpb25TdGF0cy5maWx0ZXIoKGNoYW1waW9uU3RhdHMpID0+IHtcbiAgICAgIGNvbnN0IGNoYW1waW9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPSR7Y2hhbXBpb25TdGF0cy5pZH1dYCk7XG4gICAgICByZXR1cm4gY2hhbXBpb25FbGVtZW50LmNsYXNzTmFtZSA9PT0gJ2NoYW1waW9uLWNvbnRhaW5lciBzaG93bic7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmlsdGVyZWRDaGFtcGlvblN0YXRzO1xuICB9O1xuXG4gIGNvbnN0IHNvcnRDaGFtcGlvbnNCeVdpbnJhdGUgPSAoYWxsQ2hhbXBpb25TdGF0cykgPT4ge1xuICAgIGNvbnN0IGZpbHRlcmVkQ2hhbXBpb25TdGF0cyA9IGZpbHRlckNoYW1waW9ucyhhbGxDaGFtcGlvblN0YXRzKTtcbiAgICBjb25zdCBmaWx0ZXJlZENoYW1waW9uc1NvcnRlZCA9IGZpbHRlcmVkQ2hhbXBpb25TdGF0cy5zb3J0KChhLCBiKSA9PiBiLndpblJhdGUgLSBhLndpblJhdGUpO1xuICAgIGNsZWFyQ2hhbXBpb25zU2VjdGlvbigpO1xuICAgIHJlY3JlYXRlQ2hhbXBpb25zU2VjdGlvbihmaWx0ZXJlZENoYW1waW9uc1NvcnRlZCk7XG4gICAgcmV0dXJuIGZpbHRlcmVkQ2hhbXBpb25zU29ydGVkO1xuICB9O1xuXG4gIGNvbnN0IHNvcnRDaGFtcGlvbnNCeVBpY2tyYXRlID0gKGFsbENoYW1waW9uU3RhdHMpID0+IHtcbiAgICBjb25zdCBmaWx0ZXJlZENoYW1waW9uU3RhdHMgPSBmaWx0ZXJDaGFtcGlvbnMoYWxsQ2hhbXBpb25TdGF0cyk7XG4gICAgY29uc3QgZmlsdGVyZWRDaGFtcGlvbnNTb3J0ZWQgPSBmaWx0ZXJlZENoYW1waW9uU3RhdHMuc29ydCgoYSwgYikgPT4gYi5waWNrUmF0ZSAtIGEucGlja1JhdGUpO1xuICAgIGNsZWFyQ2hhbXBpb25zU2VjdGlvbigpO1xuICAgIHJlY3JlYXRlQ2hhbXBpb25zU2VjdGlvbihmaWx0ZXJlZENoYW1waW9uc1NvcnRlZCk7XG4gICAgcmV0dXJuIGZpbHRlcmVkQ2hhbXBpb25zU29ydGVkO1xuICB9O1xuXG4gIGNvbnN0IHNvcnRDaGFtcGlvbnNCeURhbWFnZURvbmUgPSAoYWxsQ2hhbXBpb25TdGF0cykgPT4ge1xuICAgIGNvbnN0IGZpbHRlcmVkQ2hhbXBpb25TdGF0cyA9IGZpbHRlckNoYW1waW9ucyhhbGxDaGFtcGlvblN0YXRzKTtcblxuICAgIGNvbnN0IGZpbHRlcmVkQ2hhbXBpb25zU29ydGVkID0gZmlsdGVyZWRDaGFtcGlvblN0YXRzLnNvcnQoXG4gICAgICAoYSwgYikgPT4gYi5kYW1hZ2VQZXJNYXRjaC50b3RhbERhbWFnZS52YWx1ZSAtIGEuZGFtYWdlUGVyTWF0Y2gudG90YWxEYW1hZ2UudmFsdWUsXG4gICAgKTtcbiAgICBjbGVhckNoYW1waW9uc1NlY3Rpb24oKTtcbiAgICByZWNyZWF0ZUNoYW1waW9uc1NlY3Rpb24oZmlsdGVyZWRDaGFtcGlvbnNTb3J0ZWQpO1xuICAgIHJldHVybiBmaWx0ZXJlZENoYW1waW9uc1NvcnRlZDtcbiAgfTtcblxuICBjb25zdCBzb3J0QnlEZWZhdWx0T3JkZXIgPSAoYWxsQ2hhbXBpb25TdGF0cykgPT4ge1xuICAgIGNvbnN0IGZpbHRlcmVkQ2hhbXBpb25TdGF0cyA9IGFsbENoYW1waW9uU3RhdHMuZmlsdGVyKChjaGFtcGlvblN0YXRzKSA9PiB7XG4gICAgICBjb25zdCBjaGFtcGlvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD0ke2NoYW1waW9uU3RhdHMuaWR9XWApO1xuICAgICAgaWYgKGNoYW1waW9uRWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gY2hhbXBpb25FbGVtZW50LmNsYXNzTmFtZSA9PT0gJ2NoYW1waW9uLWNvbnRhaW5lciBzaG93bic7XG4gICAgfSk7XG4gICAgY2xlYXJDaGFtcGlvbnNTZWN0aW9uKCk7XG4gICAgcmVjcmVhdGVDaGFtcGlvbnNTZWN0aW9uKGZpbHRlcmVkQ2hhbXBpb25TdGF0cyk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBzb3J0Q2hhbXBpb25zQnlXaW5yYXRlLFxuICAgIHNvcnRDaGFtcGlvbnNCeVBpY2tyYXRlLFxuICAgIHNvcnRDaGFtcGlvbnNCeURhbWFnZURvbmUsXG4gICAgc29ydEJ5RGVmYXVsdE9yZGVyLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgU29ydENoYW1waW9ucztcbiIsImNvbnN0IGZldGNoQ2hhbXBpb25EZXRhaWxzID0gYXN5bmMgKGNoYW1waW9uSWQsIGxhdGVzdFZlcnNpb24pID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLyR7bGF0ZXN0VmVyc2lvbn0vZGF0YS9lbl9VUy9jaGFtcGlvbi8ke2NoYW1waW9uSWR9Lmpzb25gLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgY29uc3QgY2hhbXBpb25zID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBjb25zdCBjaGFtcGlvbkRldGFpbHMgPSBjaGFtcGlvbnMuZGF0YVtjaGFtcGlvbklkXTtcblxuICByZXR1cm4gY2hhbXBpb25EZXRhaWxzO1xufTtcblxuY29uc3QgZ2V0Q2hhbXBpb25QYXNzaXZlcyA9IChjaGFtcGlvbkRldGFpbHMsIGxhdGVzdFZlcnNpb24pID0+IHtcbiAgY29uc3QgcGFzc2l2ZURhdGEgPSBjaGFtcGlvbkRldGFpbHMucGFzc2l2ZTtcbiAgY29uc3QgcGFzc2l2ZU5hbWUgPSBwYXNzaXZlRGF0YS5uYW1lO1xuICBjb25zdCBwYXNzaXZlRGVzY3JpcHRpb24gPSBwYXNzaXZlRGF0YS5kZXNjcmlwdGlvbjtcbiAgY29uc3QgcGFzc2l2ZUlkID0gcGFzc2l2ZURhdGEuaW1hZ2UuZnVsbDtcbiAgY29uc3QgcGFzc2l2ZUltZ1VybCA9IGBodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vJHtsYXRlc3RWZXJzaW9ufS9pbWcvcGFzc2l2ZS8ke3Bhc3NpdmVJZH1gO1xuXG4gIHJldHVybiB7XG4gICAgcGFzc2l2ZU5hbWUsXG4gICAgcGFzc2l2ZURlc2NyaXB0aW9uLFxuICAgIHBhc3NpdmVJbWdVcmwsXG4gIH07XG59O1xuXG5jb25zdCBnZXRDaGFtcGlvblNwZWxscyA9IChjaGFtcGlvbkRldGFpbHMsIGxhdGVzdFZlcnNpb24pID0+IHtcbiAgY29uc3Qgc3BlbGxzRGF0YSA9IGNoYW1waW9uRGV0YWlscy5zcGVsbHM7XG4gIGNvbnN0IHNwZWxscyA9IFtdO1xuXG4gIHNwZWxsc0RhdGEuZm9yRWFjaCgoc3BlbGwpID0+IHtcbiAgICBjb25zdCBzcGVsbE9iamVjdCA9IHtcbiAgICAgIG5hbWU6IHNwZWxsLm5hbWUsXG4gICAgICBpZDogc3BlbGwuaWQsXG4gICAgICBkZXNjcmlwdGlvbjogc3BlbGwuZGVzY3JpcHRpb24sXG4gICAgICBjb3N0QnVybjogc3BlbGwuY29zdEJ1cm4sXG4gICAgICBjb3N0VHlwZTogc3BlbGwuY29zdFR5cGUsXG4gICAgICBjb29sZG93bjogc3BlbGwuY29vbGRvd25CdXJuLFxuICAgICAgaW1nVXJsOiBgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLyR7bGF0ZXN0VmVyc2lvbn0vaW1nL3NwZWxsLyR7c3BlbGwuaWR9LnBuZ2AsXG4gICAgfTtcbiAgICBzcGVsbHMucHVzaChzcGVsbE9iamVjdCk7XG4gIH0pO1xuXG4gIHJldHVybiBzcGVsbHM7XG59O1xuXG5jb25zdCBnZXRDaGFtcGlvbkRldGFpbHMgPSBhc3luYyAoY2hhbXBpb25JZCwgbGF0ZXN0VmVyc2lvbikgPT4ge1xuICBjb25zdCBjaGFtcGlvbkRldGFpbHMgPSBhd2FpdCBmZXRjaENoYW1waW9uRGV0YWlscyhjaGFtcGlvbklkLCBsYXRlc3RWZXJzaW9uKTtcbiAgY29uc3QgY2hhbXBpb25QYXNzaXZlID0gZ2V0Q2hhbXBpb25QYXNzaXZlcyhjaGFtcGlvbkRldGFpbHMsIGxhdGVzdFZlcnNpb24pO1xuICBjb25zdCBzcGVsbHMgPSBnZXRDaGFtcGlvblNwZWxscyhjaGFtcGlvbkRldGFpbHMsIGxhdGVzdFZlcnNpb24pO1xuXG4gIC8vIE1ha2UgZmlyc3QgbGV0dGVyIG9mIHRoZSBjaGFtcGlvbiB0aXRsZSBhIGNhcGl0YWwgbGV0dGVyLlxuICBjb25zdCBjaGFtcGlvblRpdGxlID0gY2hhbXBpb25EZXRhaWxzLnRpdGxlLnJlcGxhY2UoXG4gICAgY2hhbXBpb25EZXRhaWxzLnRpdGxlWzBdLCBjaGFtcGlvbkRldGFpbHMudGl0bGVbMF0udG9VcHBlckNhc2UoKSxcbiAgKTtcblxuICBpZiAoY2hhbXBpb25EZXRhaWxzLnBhcnR5cGUgPT09ICdOb25lJykge1xuICAgIGNoYW1waW9uRGV0YWlscy5wYXJ0eXBlID0gJ01hbmFsZXNzJztcbiAgfVxuXG4gIGlmIChjaGFtcGlvbkRldGFpbHMuaWQgPT09ICdBa3NoYW4nKSB7XG4gICAgY2hhbXBpb25EZXRhaWxzLmFsbHl0aXBzWzBdID0gJ1lvdSBjYW5ub3QgdXNlIGNvbnN1bWFibGVzIGxpa2UgcG90aW9ucyBkdXJpbmcgeW91ciBDb21ldXBwYW5jZSwgbWFrZSBzdXJlIHRvIHVzZSB0aGVtIGJlZm9yZSBjaGFubmVsaW5nLic7XG4gIH1cblxuICBpZiAoY2hhbXBpb25EZXRhaWxzLmlkID09PSAnVmV4Jykge1xuICAgIGNoYW1waW9uRGV0YWlscy5hbGx5dGlwcy5wdXNoKCdWZXggaXMgZ3JlYXQgYXQgZGl2aW5nIGludG8gdGhlIGJhY2tsaW5lLCBidXQgaGVyIGVzY2FwZSBwb3RlbnRpYWwgaXMgbG93IHNvIHRpbWluZyBpcyBrZXkuJyk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5hbWU6IGNoYW1waW9uRGV0YWlscy5uYW1lLFxuICAgIGlkOiBjaGFtcGlvbkRldGFpbHMuaWQsXG4gICAgdGl0bGU6IGNoYW1waW9uVGl0bGUsXG4gICAgbG9yZTogY2hhbXBpb25EZXRhaWxzLmxvcmUsXG4gICAgcm9sZXM6IGNoYW1waW9uRGV0YWlscy50YWdzLFxuICAgIHNraW5zOiBjaGFtcGlvbkRldGFpbHMuc2tpbnMsXG4gICAgcmVzb3VyY2U6IGNoYW1waW9uRGV0YWlscy5wYXJ0eXBlLFxuICAgIHBhc3NpdmU6IGNoYW1waW9uUGFzc2l2ZSxcbiAgICBzcGVsbHMsXG4gICAgdGlwczogY2hhbXBpb25EZXRhaWxzLmFsbHl0aXBzLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0Q2hhbXBpb25EZXRhaWxzO1xuIiwiY29uc3QgZmV0Y2hDaGFtcGlvblN0YXRzID0gYXN5bmMgKGNoYW1waW9uSWQpID0+IHtcbiAgLyogUmVsYXRpdmUgdXJscyBhcmUgdXNlZCBmb3Igd2hlbiB0aGUgYXBwIGlzIGluIHByb2R1Y3Rpb24gYW5kIGxvY2FsaG9zdCB1cmwgZm9yIGRldmVsb3BtZW50ICovXG4gIGNvbnN0IGRldlVybCA9ICdodHRwOi8vMTI3LjAuMC4xOjU1MDAvZGlzdC9jaGFtcGlvbnMuaHRtbCc7XG4gIGNvbnN0IHJlc3BvbnNlID0gd2luZG93LmxvY2F0aW9uLmhyZWYgPT09IGRldlVybFxuICAgID8gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS8ke2NoYW1waW9uSWR9YCwgeyBtb2RlOiAnY29ycycgfSlcbiAgICA6IGF3YWl0IGZldGNoKGAke2NoYW1waW9uSWR9YCwgeyBtb2RlOiAnY29ycycgfSk7XG4gIGNvbnN0IGNoYW1waW9uU3RhdHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIGNoYW1waW9uU3RhdHM7XG59O1xuXG5jb25zdCBnZXRDaGFtcGlvblN0YXRzID0gYXN5bmMgKGNoYW1waW9uSWQpID0+IHtcbiAgY29uc3QgY2hhbXBpb25TdGF0cyA9IGF3YWl0IGZldGNoQ2hhbXBpb25TdGF0cyhjaGFtcGlvbklkKTtcbiAgY29uc3Qgd2luUmF0ZSA9IGNoYW1waW9uU3RhdHMud2luUmF0ZS50b0ZpeGVkKDIpO1xuICBjb25zdCBwaWNrUmF0ZSA9IGNoYW1waW9uU3RhdHMucGlja1JhdGUudG9GaXhlZCgyKTtcbiAgY29uc3QgbGFuZSA9IGNoYW1waW9uU3RhdHMubGFuZVswXSArIGNoYW1waW9uU3RhdHMubGFuZS5zdWJzdHJpbmcoMSkudG9Mb3dlckNhc2UoKTtcblxuICByZXR1cm4ge1xuICAgIGNoYW1waW9uSWQsXG4gICAga2RhOiBjaGFtcGlvblN0YXRzLmtkYVJhdGlvLFxuICAgIGRhbWFnZVBlck1hdGNoOiBjaGFtcGlvblN0YXRzLmRhbWFnZVBlck1hdGNoLFxuICAgIGl0ZW1TZXRzOiBjaGFtcGlvblN0YXRzLml0ZW1DaG9pY2VzLnNsaWNlKDEpLFxuICAgIGJlc3RNYXRjaFVwczogY2hhbXBpb25TdGF0cy5tYXRjaFVwcy5iZXN0TWF0Y2hVcHMsXG4gICAgd29yc3RNYXRjaFVwczogY2hhbXBpb25TdGF0cy5tYXRjaFVwcy53b3JzdE1hdGNoVXBzLFxuICAgIHdpblJhdGUsXG4gICAgcGlja1JhdGUsXG4gICAgbGFuZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldENoYW1waW9uU3RhdHM7XG4iLCJjb25zdCBnZXRBbGxDaGFtcGlvbkRldGFpbHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHZlcnNpb25zUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vYXBpL3ZlcnNpb25zLmpzb24nKTtcbiAgY29uc3QgdmVyc2lvbnMgPSBhd2FpdCB2ZXJzaW9uc1Jlc3BvbnNlLmpzb24oKTtcbiAgY29uc3QgbGF0ZXN0VmVyc2lvbiA9IHZlcnNpb25zWzBdO1xuICBjb25zdCBjaGFtcGlvbnNSZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vJHtsYXRlc3RWZXJzaW9ufS9kYXRhL2VuX1VTL2NoYW1waW9uLmpzb25gKTtcbiAgY29uc3QgYWxsQ2hhbXBpb25zID0gYXdhaXQgY2hhbXBpb25zUmVzcG9uc2UuanNvbigpO1xuXG4gIHJldHVybiBhbGxDaGFtcGlvbnMuZGF0YTtcbn07XG5cbmNvbnN0IGdldEFsbENoYW1waW9uU3RhdHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGRldlVybCA9ICdodHRwOi8vMTI3LjAuMC4xOjU1MDAvZGlzdC9jaGFtcGlvbnMuaHRtbCc7XG4gIGNvbnN0IHJlc3BvbnNlID0gd2luZG93LmxvY2F0aW9uLmhyZWYgPT09IGRldlVybFxuICAgID8gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9jaGFtcGlvbnMnLCB7IG1vZGU6ICdjb3JzJyB9KVxuICAgIDogYXdhaXQgZmV0Y2goJ2NoYW1waW9ucycsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICBjb25zdCBhbGxDaGFtcGlvblN0YXRzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIHJldHVybiBhbGxDaGFtcGlvblN0YXRzO1xufTtcblxuZXhwb3J0IHtcbiAgZ2V0QWxsQ2hhbXBpb25EZXRhaWxzLFxuICBnZXRBbGxDaGFtcGlvblN0YXRzLFxufTtcbiIsIi8qIFJldHJpdmVzIHRoZSBsYXRlc3Qgc3RhdGljIGRhdGEgYXZhbGlhYmxlIGZvciBjaGFtcGlvbnMgKi9cbmV4cG9ydCBkZWZhdWx0IGFzeW5jICgpID0+IHtcbiAgY29uc3QgdmVyc2lvblJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2FwaS92ZXJzaW9ucy5qc29uJywgeyBtb2RlOiAnY29ycycgfSk7XG4gIGNvbnN0IHZlcnNpb25zID0gYXdhaXQgdmVyc2lvblJlc3BvbnNlLmpzb24oKTtcbiAgY29uc3QgbGF0ZXN0VmVyc2lvbiA9IHZlcnNpb25zWzBdO1xuICByZXR1cm4gbGF0ZXN0VmVyc2lvbjtcbn07XG4iLCIvKiBGZXRjaGVzIGFsbCB0aGUgaXRlbXMgYSBjaGFtcGlvbiBjYW4gYnV5IGluIGEgbWF0Y2ggKi9cbmNvbnN0IGZldGNoQWxsSXRlbXMgPSBhc3luYyAobGF0ZXN0VmVyc2lvbikgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vJHtsYXRlc3RWZXJzaW9ufS9kYXRhL2VuX1VTL2l0ZW0uanNvbmApO1xuICBjb25zdCBhbGxJdGVtcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICByZXR1cm4gYWxsSXRlbXMuZGF0YTtcbn07XG5cbmNsYXNzIEl0ZW1JbmZvIHtcbiAgc3RhdGljIGFzeW5jIGdldEFsbEl0ZW1zKGxhdGVzdFZlcnNpb24pIHtcbiAgICBjb25zdCBhbGxJdGVtcyA9IGZldGNoQWxsSXRlbXMobGF0ZXN0VmVyc2lvbik7XG4gICAgcmV0dXJuIGFsbEl0ZW1zO1xuICB9XG5cbiAgZ2V0SXRlbURldGFpbHMoYWxsSXRlbXMpIHtcbiAgICBjb25zdCBpdGVtRGV0YWlscyA9IGFsbEl0ZW1zW3RoaXMuaXRlbUlkXTtcbiAgICByZXR1cm4gaXRlbURldGFpbHM7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihpdGVtSWQsIGFsbEl0ZW1zLCBsYXRlc3RWZXJzaW9uKSB7XG4gICAgdGhpcy5pdGVtSWQgPSBpdGVtSWQ7XG4gICAgdGhpcy5pdGVtRGV0YWlscyA9IHRoaXMuZ2V0SXRlbURldGFpbHMoYWxsSXRlbXMpO1xuICAgIHRoaXMubGF0ZXN0VmVyc2lvbiA9IGxhdGVzdFZlcnNpb247XG4gIH1cblxuICBnZXRJdGVtSW1hZ2UoKSB7XG4gICAgY29uc3QgaXRlbUltYWdlSWQgPSB0aGlzLml0ZW1EZXRhaWxzLmltYWdlLmZ1bGw7XG4gICAgY29uc3QgaW1hZ2VVcmwgPSBgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLyR7dGhpcy5sYXRlc3RWZXJzaW9ufS9pbWcvaXRlbS8ke2l0ZW1JbWFnZUlkfWA7XG4gICAgcmV0dXJuIGltYWdlVXJsO1xuICB9XG5cbiAgLyogZ2V0cyBpbmZvIG9uIHRoZSBpdGVtcyB1c2VkIHRvIGNyZWF0ZSB0aGUgaW5zdGFuY2UgaXRlbSAqL1xuICBhc3luYyBnZXRDb21wb25lbnRJdGVtcyhhbGxJdGVtcykge1xuICAgIGNvbnN0IGNvbXBvbmVudEl0ZW1JZHMgPSB0aGlzLml0ZW1EZXRhaWxzLmZyb207XG4gICAgaWYgKGNvbXBvbmVudEl0ZW1JZHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBjb25zdCBjb21wb25lbnRJdGVtRGV0YWlscyA9IGNvbXBvbmVudEl0ZW1JZHMubWFwKChpdGVtSWQpID0+ICh7XG4gICAgICBuYW1lOiBhbGxJdGVtc1tpdGVtSWRdLm5hbWUsXG4gICAgICBpbWFnZVVybDogYGh0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi8ke3RoaXMubGF0ZXN0VmVyc2lvbn0vaW1nL2l0ZW0vJHtpdGVtSWR9LnBuZ2AsXG4gICAgICBjb3N0OiBhbGxJdGVtc1tpdGVtSWRdLmdvbGQudG90YWwsXG4gICAgfSkpO1xuICAgIHJldHVybiBjb21wb25lbnRJdGVtRGV0YWlscztcbiAgfVxuXG4gIGdldEl0ZW1JbmZvKGFsbEl0ZW1zKSB7XG4gICAgaWYgKHRoaXMuaXRlbURldGFpbHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXMuaXRlbURldGFpbHM7XG4gICAgY29uc3QgeyBkZXNjcmlwdGlvbiB9ID0gdGhpcy5pdGVtRGV0YWlscztcbiAgICBjb25zdCBjb3N0ID0gdGhpcy5pdGVtRGV0YWlscy5nb2xkLnRvdGFsO1xuICAgIGNvbnN0IGltYWdlVXJsID0gdGhpcy5nZXRJdGVtSW1hZ2UoYWxsSXRlbXMpO1xuICAgIGNvbnN0IGNvbXBvbmVudEl0ZW1zID0gdGhpcy5nZXRDb21wb25lbnRJdGVtcyhhbGxJdGVtcyk7XG4gICAgY29uc3QgeyB0YWdzIH0gPSB0aGlzLml0ZW1EZXRhaWxzO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGNvc3QsXG4gICAgICBpbWFnZVVybCxcbiAgICAgIGNvbXBvbmVudEl0ZW1zLFxuICAgICAgdGFncyxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW1JbmZvO1xuIiwiY29uc3QgRWxlbWVudENyZWF0aW9uID0gKCgpID0+IHtcbiAgY29uc3QgY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzID0gKHRhZywgY2xhc3NOYW1lLCBwYXJlbnRFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlQ2hpbGRFbGVtZW50V2l0aElkID0gKHRhZywgaWQsIHBhcmVudEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGVsZW1lbnQuaWQgPSBpZDtcbiAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzQW5kSWQgPSAodGFnLCBjbGFzc05hbWUsIGlkLCBwYXJlbnRFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICBlbGVtZW50LmlkID0gaWQ7XG4gICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzID0gKGNsYXNzTmFtZSwgcGFyZW50RWxlbWVudCwgc3JjLCBhbHQpID0+IHtcbiAgICBjb25zdCBpbWFnZUVsZW1lbnQgPSBjcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2ltZycsIGNsYXNzTmFtZSwgcGFyZW50RWxlbWVudCk7XG4gICAgaW1hZ2VFbGVtZW50LnNyYyA9IHNyYztcbiAgICBpbWFnZUVsZW1lbnQuYWx0ID0gYWx0O1xuXG4gICAgcmV0dXJuIGltYWdlRWxlbWVudDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcyxcbiAgICBjcmVhdGVDaGlsZEVsZW1lbnRXaXRoSWQsXG4gICAgY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzQW5kSWQsXG4gICAgY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBFbGVtZW50Q3JlYXRpb247XG4iLCJpbXBvcnQgeyByZW5kZXJIZWFkZXJEZXRhaWxzLCBpbWFnZXMgfSBmcm9tICcuL3JlbmRlckhlbHBlcnMnO1xuaW1wb3J0IEVsZW1lbnRDcmVhdGlvbiBmcm9tICcuLi9oZWxwZXJzL2VsZW1lbnRDcmVhdGlvbic7XG5cbmNvbnN0IGNoYW1waW9uRGV0YWlsc01vZGFsID0gYXN5bmMgKGNoYW1waW9uRGF0YSkgPT4ge1xuICByZW5kZXJIZWFkZXJEZXRhaWxzKGNoYW1waW9uRGF0YSwgJ21haW4nKTtcblxuICBjb25zdCBjaGFtcGlvblJvbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLXJvbGVzJyk7XG4gIGNvbnN0IHsgcm9sZXMgfSA9IGNoYW1waW9uRGF0YTtcbiAgcm9sZXMuZm9yRWFjaCgocm9sZSkgPT4ge1xuICAgIGNvbnN0IGNoYW1waW9uUm9sZSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdjaGFtcGlvbi1yb2xlJywgY2hhbXBpb25Sb2xlcyk7XG4gICAgY29uc3QgY2hhbXBpb25Sb2xlTmFtZSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnY2hhbXBpb24tcm9sZS1uYW1lJywgY2hhbXBpb25Sb2xlKTtcbiAgICBjaGFtcGlvblJvbGVOYW1lLnRleHRDb250ZW50ID0gcm9sZTtcbiAgICBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MoJ2NoYW1waW9uLXJvbGUtaW1hZ2UnLCBjaGFtcGlvblJvbGUsIGAke2ltYWdlc1tgJHtyb2xlfS5wbmdgXX1gLCByb2xlKTtcbiAgfSk7XG4gIC8qIFRoZSB0eXBlIG9mIHJlc291cmNlIHRoYXQgYSBjaGFtcGlvbiB1c2VzIGUuZy4gbWFuYSwgZW5lcmd5IGV0YyAqL1xuICBjb25zdCBjaGFtcGlvblJlc291cmNlID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2NoYW1waW9uLXJlc291cmNlJywgY2hhbXBpb25Sb2xlcyk7XG4gIGNvbnN0IHsgcmVzb3VyY2UgfSA9IGNoYW1waW9uRGF0YTtcbiAgY29uc3QgY2hhbXBpb25SZXNvdXJjZU5hbWUgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2NoYW1waW9uLXJlc291cmNlLW5hbWUnLCBjaGFtcGlvblJlc291cmNlKTtcbiAgY2hhbXBpb25SZXNvdXJjZU5hbWUudGV4dENvbnRlbnQgPSByZXNvdXJjZTtcbiAgRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzKCdjaGFtcGlvbi1yZXNvdXJjZS1pbWFnZScsIGNoYW1waW9uUmVzb3VyY2UsIGAke2ltYWdlc1tgJHtyZXNvdXJjZX0ucG5nYF19YCwgcmVzb3VyY2UpO1xuXG4gIC8qIENyZWF0ZXMgdGhlIG1haW4gY29udGVudCBvZiB0aGUgbWFpbiBtb2RhbCAqL1xuICBjb25zdCBsb3JlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvcmUtY29udGFpbmVyJyk7XG4gIGNvbnN0IGNoYW1waW9uTG9yZSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnY2hhbXBpb24tbG9yZScsIGxvcmVDb250YWluZXIpO1xuICBjaGFtcGlvbkxvcmUuaW5uZXJIVE1MID0gY2hhbXBpb25EYXRhLmxvcmU7XG5cbiAgY29uc3QgYWJpbGl0aWVzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFiaWxpdGllcy1jb250YWluZXInKTtcbiAgY29uc3QgYWJpbGl0eURldGFpbHMgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnYWJpbGl0eS1kZXRhaWxzJywgYWJpbGl0aWVzQ29udGFpbmVyKTtcbiAgY29uc3QgYWJpbGl0eUltZ3MgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnYWJpbGl0eS1pbWdzJywgYWJpbGl0eURldGFpbHMpO1xuICBjb25zdCBwYXNzaXZlSW1nID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzKFxuICAgICdzcGVsbC1pbWcgY2xpY2tlZCcsIGFiaWxpdHlJbWdzLCBjaGFtcGlvbkRhdGEucGFzc2l2ZS5wYXNzaXZlSW1nVXJsLCBjaGFtcGlvbkRhdGEucGFzc2l2ZS5wYXNzaXZlTmFtZSxcbiAgKTtcbiAgcGFzc2l2ZUltZy5pZCA9ICdwYXNzaXZlLWltZyc7XG5cbiAgY29uc3QgaW1nTGFiZWwgPSBbJ1EnLCAnVycsICdFJywgJ1InXTtcbiAgbGV0IGluZGV4ID0gMDtcblxuICBjaGFtcGlvbkRhdGEuc3BlbGxzLmZvckVhY2goKHNwZWxsKSA9PiB7XG4gICAgY29uc3Qgc3BlbGxJbWcgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAnc3BlbGwtaW1nJywgYWJpbGl0eUltZ3MsIHNwZWxsLmltZ1VybCwgc3BlbGwubmFtZSxcbiAgICApO1xuICAgIC8vIEdyYWJzIGxldHRlciBRLCBXLCBFIG9yIFIgd2hpY2ggdW5pcXVlbHkgaWRlbnRpZmllcyBhIGNoYW1waW9ucyBhYmlsaXRpZXNcbiAgICBzcGVsbEltZy5pZCA9IGAke2ltZ0xhYmVsW2luZGV4XX0taW1nYDtcbiAgICBpbmRleCArPSAxO1xuICB9KTtcblxuICAvKiBsb29wcyB0aHJvdWdoIGNoYW1waW9uJ3MgcGFzc2l2ZSBhbmQgNCBhYmlsaXRpZXMgKi9cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpICs9IDEpIHtcbiAgICBjb25zdCBhYmlsaXR5SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGFiaWxpdHlOYW1lID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdhYmlsaXR5LW5hbWUnLCBhYmlsaXR5SW5mbyk7XG4gICAgY29uc3QgYWJpbGl0eURlc2NyaXB0aW9uID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdhYmlsaXR5LWRlc2NyaXB0aW9uJywgYWJpbGl0eUluZm8pO1xuICAgIGNvbnN0IGFiaWxpdHlMYWJlbCA9IFsnUGFzc2l2ZScsICdRJywgJ1cnLCAnRScsICdSJ107XG5cbiAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgYWJpbGl0eUluZm8uY2xhc3NOYW1lID0gJ2FiaWxpdHktaW5mbyBhY3RpdmUnO1xuICAgICAgYWJpbGl0eUluZm8uaWQgPSAncGFzc2l2ZS1hYmlsaXR5JztcbiAgICAgIGFiaWxpdHlOYW1lLnRleHRDb250ZW50ID0gYCR7Y2hhbXBpb25EYXRhLnBhc3NpdmUucGFzc2l2ZU5hbWV9ICgke2FiaWxpdHlMYWJlbFtpXX0pYDtcbiAgICAgIGFiaWxpdHlEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBjaGFtcGlvbkRhdGEucGFzc2l2ZS5wYXNzaXZlRGVzY3JpcHRpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvb2xkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgY29vbGRvd24uY2xhc3NOYW1lID0gJ2FiaWxpdHktY29vbGRvd24nO1xuICAgICAgY29vbGRvd24udGV4dENvbnRlbnQgPSBgQ29vbGRvd246ICR7Y2hhbXBpb25EYXRhLnNwZWxsc1tpIC0gMV0uY29vbGRvd259IHNlY29uZHNgO1xuICAgICAgYWJpbGl0eUluZm8uYXBwZW5kQ2hpbGQoY29vbGRvd24pO1xuXG4gICAgICBhYmlsaXR5SW5mby5jbGFzc05hbWUgPSAnYWJpbGl0eS1pbmZvJztcbiAgICAgIGFiaWxpdHlJbmZvLmlkID0gYCR7YWJpbGl0eUxhYmVsW2ldfS1hYmlsaXR5YDtcbiAgICAgIGFiaWxpdHlOYW1lLnRleHRDb250ZW50ID0gYCR7Y2hhbXBpb25EYXRhLnNwZWxsc1tpIC0gMV0ubmFtZX0gKCR7YWJpbGl0eUxhYmVsW2ldfSlgO1xuICAgICAgYWJpbGl0eURlc2NyaXB0aW9uLmlubmVySFRNTCA9IGNoYW1waW9uRGF0YS5zcGVsbHNbaSAtIDFdLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGFiaWxpdHlEZXRhaWxzLmFwcGVuZENoaWxkKGFiaWxpdHlJbmZvKTtcbiAgfVxuXG4gIGNvbnN0IGNoYW1waW9uVGlwc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tdGlwcy1zZWN0aW9uJyk7XG4gIGNvbnN0IGNoYW1waW9uVGlwcyA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdjaGFtcGlvbi10aXBzJywgY2hhbXBpb25UaXBzU2VjdGlvbik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAyICYmIGkgPCBjaGFtcGlvbkRhdGEudGlwcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGNoYW1waW9uVGlwID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdjaGFtcGlvbi10aXAnLCBjaGFtcGlvblRpcHMpO1xuICAgIGNoYW1waW9uVGlwLnRleHRDb250ZW50ID0gYCR7Y2hhbXBpb25EYXRhLnRpcHNbaV19YDtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2hhbXBpb25EZXRhaWxzTW9kYWw7XG4iLCJpbXBvcnQgRWxlbWVudENyZWF0aW9uIGZyb20gJy4uL2hlbHBlcnMvZWxlbWVudENyZWF0aW9uJztcblxuY29uc3QgY2hhbXBpb25Ta2luc01vZGFsID0gYXN5bmMgKGNoYW1waW9uRGV0YWlscykgPT4ge1xuICBjb25zdCB7IHNraW5zIH0gPSBjaGFtcGlvbkRldGFpbHM7XG4gIGNvbnN0IHNraW5zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NraW5zLWNvbnRhaW5lcicpO1xuICBjb25zdCBza2luTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5za2luLW5hbWUnKTtcbiAgY29uc3Qgc2tpbkltYWdlc0NvbnRhaW5lciA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdza2luLWltYWdlcy1jb250YWluZXInLCBza2luc0NvbnRhaW5lcik7XG5cbiAgc2tpbnMuZm9yRWFjaCgoc2tpbikgPT4ge1xuICAgIGlmIChza2luLm51bSA9PT0gMCkge1xuICAgICAgY29uc3Qgc2hvd25JbWFnZUNvbnRhaW5lciA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3NBbmRJZChcbiAgICAgICAgJ2RpdicsICdza2luLWltYWdlLWNvbnRhaW5lciBzaG93bicsIGBEZWZhdWx0ICR7Y2hhbXBpb25EZXRhaWxzLm5hbWV9YCwgc2tpbkltYWdlc0NvbnRhaW5lcixcbiAgICAgICk7XG4gICAgICBza2luTmFtZS50ZXh0Q29udGVudCA9IGBEZWZhdWx0ICR7Y2hhbXBpb25EZXRhaWxzLm5hbWV9YDtcbiAgICAgIGNvbnN0IHNob3duSW1hZ2VVcmwgPSBgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuL2ltZy9jaGFtcGlvbi9zcGxhc2gvJHtjaGFtcGlvbkRldGFpbHMuaWR9XyR7c2tpbi5udW19LmpwZ2A7XG4gICAgICBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MoJ3NraW4taW1hZ2UnLCBzaG93bkltYWdlQ29udGFpbmVyLCBzaG93bkltYWdlVXJsLCAnZGVmYXVsdCBza2luJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGltYWdlQ29udGFpbmVyID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCAnc2tpbi1pbWFnZS1jb250YWluZXInLCBza2luLm5hbWUsIHNraW5JbWFnZXNDb250YWluZXIpO1xuICAgICAgY29uc3QgaW1hZ2VVcmwgPSBgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuL2ltZy9jaGFtcGlvbi9zcGxhc2gvJHtjaGFtcGlvbkRldGFpbHMuaWR9XyR7c2tpbi5udW19LmpwZ2A7XG4gICAgICBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MoJ3NraW4taW1hZ2UnLCBpbWFnZUNvbnRhaW5lciwgaW1hZ2VVcmwsIHNraW4ubmFtZSk7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNoYW1waW9uU2tpbnNNb2RhbDtcbiIsImltcG9ydCBJdGVtSW5mbyBmcm9tICcuLi9jaGFtcGlvbkRhdGEvaXRlbUluZm8nO1xuaW1wb3J0IHtcbiAgcmVuZGVySGVhZGVyRGV0YWlscyxcbiAgcmVuZGVyU3RhdE92ZXJ2aWV3LFxuICByZW5kZXJEYW1hZ2VTdGF0cyxcbiAgcmVuZGVyQ2hhbXBpb25MYW5lLFxuICByZW5kZXJNYXRjaHVwc0luZm8sXG59IGZyb20gJy4vcmVuZGVySGVscGVycyc7XG5pbXBvcnQgRWxlbWVudENyZWF0aW9uIGZyb20gJy4uL2hlbHBlcnMvZWxlbWVudENyZWF0aW9uJztcblxuY29uc3QgY2hhbXBpb25TdGF0c01vZGFsID0gYXN5bmMgKGNoYW1waW9uRGF0YSwgY2hhbXBpb25TdGF0cywgbGF0ZXN0VmVyc2lvbikgPT4ge1xuICByZW5kZXJIZWFkZXJEZXRhaWxzKGNoYW1waW9uRGF0YSwgJ3N0YXRzJyk7XG5cbiAgY29uc3Qgc3RhdHNPdmVydmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbi1zdGF0cy1vdmVydmlldycpO1xuXG4gIHJlbmRlclN0YXRPdmVydmlldyhzdGF0c092ZXJ2aWV3LCAnV2luIFJhdGUnLCBjaGFtcGlvblN0YXRzLndpblJhdGUpO1xuICByZW5kZXJTdGF0T3ZlcnZpZXcoc3RhdHNPdmVydmlldywgJ1BpY2sgUmF0ZScsIGNoYW1waW9uU3RhdHMucGlja1JhdGUpO1xuICAvKiBNYWtlIGV2ZXJ5IGxldHRlciBleGNlcHQgdGhlIGZpcnN0IGxvd2VyIGNhc2UgKi9cbiAgY29uc3QgbGFuZSA9IGAke2NoYW1waW9uU3RhdHMubGFuZVswXSArIGNoYW1waW9uU3RhdHMubGFuZS5zdWJzdHJpbmcoMSkudG9Mb3dlckNhc2UoKX1gO1xuICByZW5kZXJDaGFtcGlvbkxhbmUoc3RhdHNPdmVydmlldywgbGFuZSk7XG5cbiAgLyogU2V0cyB0aGUgdmFsdWVzIGFuZCBwZXJjZW50YWdlcyBmb3IgdGhlIGF2ZXJhZ2UgZGFtYWdlIHNlY3Rpb24gb2YgdGhlIHN0YXRzIG1vZGFsICovXG5cbiAgY29uc3QgdHJ1ZURhbWFnZUNpcmNsZVN0cm9rZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cnVlLWRhbWFnZS1zdHJva2UnKTtcbiAgY29uc3QgcGh5c2ljYWxEYW1hZ2VDaXJjbGVTdHJva2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGh5c2ljYWwtZGFtYWdlLXN0cm9rZScpO1xuICBjb25zdCBtYWdpY0RhbWFnZUNpcmNsZVN0cm9rZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWdpYy1kYW1hZ2Utc3Ryb2tlJyk7XG5cbiAgY29uc3QgdHJ1ZURhbWFnZVBlcmNlbnQgPSBNYXRoLnJvdW5kKGNoYW1waW9uU3RhdHMuZGFtYWdlUGVyTWF0Y2gudHJ1ZURhbWFnZS5wZXJjZW50YWdlKTtcbiAgY29uc3QgcGh5c2ljYWxEYW1hZ2VQZXJjZW50ID0gTWF0aC5yb3VuZChjaGFtcGlvblN0YXRzLmRhbWFnZVBlck1hdGNoLnBoeXNpY2FsRGFtYWdlLnBlcmNlbnRhZ2UpO1xuICBjb25zdCBtYWdpY0RhbWFnZVBlcmNlbnQgPSBNYXRoLnJvdW5kKGNoYW1waW9uU3RhdHMuZGFtYWdlUGVyTWF0Y2gubWFnaWNEYW1hZ2UucGVyY2VudGFnZSk7XG5cbiAgdHJ1ZURhbWFnZUNpcmNsZVN0cm9rZS5zdHlsZS5zdHJva2VEYXNoYXJyYXkgPSBgJHt0cnVlRGFtYWdlUGVyY2VudH0gMTAwYDtcbiAgcGh5c2ljYWxEYW1hZ2VDaXJjbGVTdHJva2Uuc3R5bGUuc3Ryb2tlRGFzaGFycmF5ID0gYCR7cGh5c2ljYWxEYW1hZ2VQZXJjZW50ICsgdHJ1ZURhbWFnZVBlcmNlbnR9IDEwMGA7XG4gIG1hZ2ljRGFtYWdlQ2lyY2xlU3Ryb2tlLnN0eWxlLnN0cm9rZURhc2hhcnJheSA9ICcxMDAsIDEwMCc7XG4gIGNvbnN0IHRvdGFsRGFtYWdlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3RhbC1kYW1hZ2UtdGV4dCcpO1xuICB0b3RhbERhbWFnZVRleHQudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKGNoYW1waW9uU3RhdHMuZGFtYWdlUGVyTWF0Y2gudG90YWxEYW1hZ2UudmFsdWUpO1xuXG4gIGNvbnN0IHRydWVEYW1hZ2VWYWx1ZSA9IE1hdGgucm91bmQoY2hhbXBpb25TdGF0cy5kYW1hZ2VQZXJNYXRjaC50cnVlRGFtYWdlLnZhbHVlKTtcbiAgY29uc3QgcGh5c2ljYWxEYW1hZ2VWYWx1ZSA9IE1hdGgucm91bmQoY2hhbXBpb25TdGF0cy5kYW1hZ2VQZXJNYXRjaC5waHlzaWNhbERhbWFnZS52YWx1ZSk7XG4gIGNvbnN0IG1hZ2ljRGFtYWdlVmFsdWUgPSBNYXRoLnJvdW5kKGNoYW1waW9uU3RhdHMuZGFtYWdlUGVyTWF0Y2gubWFnaWNEYW1hZ2UudmFsdWUpO1xuXG4gIHJlbmRlckRhbWFnZVN0YXRzKCdwaHlzaWNhbCcsIHBoeXNpY2FsRGFtYWdlVmFsdWUsIHBoeXNpY2FsRGFtYWdlUGVyY2VudCk7XG4gIHJlbmRlckRhbWFnZVN0YXRzKCdtYWdpYycsIG1hZ2ljRGFtYWdlVmFsdWUsIG1hZ2ljRGFtYWdlUGVyY2VudCk7XG4gIHJlbmRlckRhbWFnZVN0YXRzKCd0cnVlJywgdHJ1ZURhbWFnZVZhbHVlLCB0cnVlRGFtYWdlUGVyY2VudCk7XG5cbiAgLyogUmVuZGVycyB0aGUgaXRlbSBidWlsZHMgc2VjdGlvbiBvZiB0aGUgc3RhdHMgbW9kYWwgKi9cbiAgY29uc3QgeyBpdGVtU2V0cyB9ID0gY2hhbXBpb25TdGF0cztcbiAgY29uc3QgYWxsSXRlbXMgPSBhd2FpdCBJdGVtSW5mby5nZXRBbGxJdGVtcyhsYXRlc3RWZXJzaW9uKTtcbiAgY29uc3QgY2hhbXBpb25JdGVtQnVpbGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLWl0ZW0tYnVpbGRzJyk7XG4gIGNvbnN0IGl0ZW1TZXRzQ29udGFpbmVyID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2l0ZW0tc2V0cy1jb250YWluZXInLCBjaGFtcGlvbkl0ZW1CdWlsZHMpO1xuXG4gIGl0ZW1TZXRzLmZvckVhY2goKGl0ZW1TZXQpID0+IHtcbiAgICBjb25zdCBpdGVtU2V0Q29udGFpbmVyID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2l0ZW0tc2V0LWNvbnRhaW5lcicsIGl0ZW1TZXRzQ29udGFpbmVyKTtcblxuICAgIGl0ZW1TZXQuZm9yRWFjaCgoaXRlbUlkKSA9PiB7XG4gICAgICBjb25zdCBpdGVtID0gbmV3IEl0ZW1JbmZvKGl0ZW1JZCwgYWxsSXRlbXMsIGxhdGVzdFZlcnNpb24pO1xuICAgICAgY29uc3QgaXRlbUluZm8gPSBpdGVtLmdldEl0ZW1JbmZvKGFsbEl0ZW1zKTtcbiAgICAgIGlmIChpdGVtSW5mbyAmJiAhaXRlbUluZm8udGFncy5pbmNsdWRlcygnVHJpbmtldCcpICYmICFpdGVtSW5mby50YWdzLmluY2x1ZGVzKCdDb25zdW1hYmxlJykpIHtcbiAgICAgICAgY29uc3QgbWFpbkNvbXBvbmVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtYWluQ29tcG9uZW50Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdtYWluLWNvbXBvbmVudC1jb250YWluZXInO1xuICAgICAgICBpdGVtU2V0Q29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5Db21wb25lbnRDb250YWluZXIpO1xuXG4gICAgICAgIGNvbnN0IG1haW5JdGVtID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ21haW4taXRlbScsIG1haW5Db21wb25lbnRDb250YWluZXIpO1xuXG4gICAgICAgIEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEltYWdlRWxlbWVudFdpdGhDbGFzcygnaXRlbS1pbWcnLCBtYWluSXRlbSwgaXRlbUluZm8uaW1hZ2VVcmwsIGAke2l0ZW1JZH0ucG5nYCk7XG5cbiAgICAgICAgY29uc3QgaXRlbURldGFpbHNDb250YWluZXIgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnaXRlbS1kZXRhaWxzLWNvbnRhaW5lcicsIG1haW5JdGVtKTtcblxuICAgICAgICBjb25zdCBuYW1lRWxlbWVudCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnaXRlbS1uYW1lJywgaXRlbURldGFpbHNDb250YWluZXIpO1xuICAgICAgICBuYW1lRWxlbWVudC50ZXh0Q29udGVudCA9IGl0ZW1JbmZvLm5hbWU7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uRWxlbWVudCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnaXRlbS1kZXNjcmlwdGlvbicsIGl0ZW1EZXRhaWxzQ29udGFpbmVyKTtcbiAgICAgICAgZGVzY3JpcHRpb25FbGVtZW50LmlubmVySFRNTCA9IGl0ZW1JbmZvLmRlc2NyaXB0aW9uO1xuICAgICAgICBjb25zdCBpdGVtQ29zdCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdpdGVtLWNvc3QnLCBpdGVtRGV0YWlsc0NvbnRhaW5lcik7XG4gICAgICAgIGNvbnN0IGNvc3RMYWJlbCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnY29zdC1sYWJlbCcsIGl0ZW1Db3N0KTtcbiAgICAgICAgY29zdExhYmVsLnRleHRDb250ZW50ID0gJ0dvbGQ6ICc7XG4gICAgICAgIGNvbnN0IGNvc3RBbW91bnQgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2Nvc3QtYW1vdW50JywgaXRlbUNvc3QpO1xuICAgICAgICBjb3N0QW1vdW50LnRleHRDb250ZW50ID0gaXRlbUluZm8uY29zdDtcblxuICAgICAgICAvKiBUaGUgY29tcG9uZW50IGl0ZW1zIGFyZSB0aGUgc21hbGxlciBpdGVtcyB0aGF0IGFwcGVhciBiZWxvdyB0aGUgbWFpbiBpdGVtICovXG4gICAgICAgIGNvbnN0IHsgY29tcG9uZW50SXRlbXMgfSA9IGl0ZW1JbmZvO1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoY29tcG9uZW50SXRlbXMpXG4gICAgICAgICAgLnRoZW4oKGl0ZW1zKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb21wb25lbnRJdGVtc0NvbnRhaW5lciA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdjb21wb25lbnQtaXRlbXMtY29udGFpbmVyJywgbWFpbkNvbXBvbmVudENvbnRhaW5lcik7XG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKChjb21wb25lbnRJdGVtKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudEl0ZW1FbGVtZW50ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2NvbXBvbmVudC1pdGVtJywgY29tcG9uZW50SXRlbXNDb250YWluZXIpO1xuICAgICAgICAgICAgICBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAgICAgICAgICAgJ2NvbXBvbmVudC1pdGVtLWltZycsIGNvbXBvbmVudEl0ZW1FbGVtZW50LCBjb21wb25lbnRJdGVtLmltYWdlVXJsLCBgJHtjb21wb25lbnRJdGVtLm5hbWV9YCxcbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRJdGVtRGV0YWlsc0NvbnRhaW5lciA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdjb21wb25lbnQtaXRlbS1kZXRhaWxzLWNvbnRhaW5lcicsIGNvbXBvbmVudEl0ZW1FbGVtZW50KTtcblxuICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRJdGVtTmFtZSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnY29tcG9uZW50LWl0ZW0tbmFtZScsIGNvbXBvbmVudEl0ZW1EZXRhaWxzQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgY29tcG9uZW50SXRlbU5hbWUudGV4dENvbnRlbnQgPSBjb21wb25lbnRJdGVtLm5hbWU7XG4gICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudEl0ZW1Db3N0ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2NvbXBvbmVudC1pdGVtLWNvc3QnLCBjb21wb25lbnRJdGVtRGV0YWlsc0NvbnRhaW5lcik7XG4gICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudEl0ZW1Db3N0TGFiZWwgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2NvbXBvbmVudC1pdGVtLWNvc3QtbGFiZWwnLCBjb21wb25lbnRJdGVtQ29zdCk7XG4gICAgICAgICAgICAgIGNvbXBvbmVudEl0ZW1Db3N0TGFiZWwudGV4dENvbnRlbnQgPSAnR29sZDogJztcbiAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50SXRlbUFtb3VudCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnY29tcG9uZW50LWl0ZW0tYW1vdW50JywgY29tcG9uZW50SXRlbUNvc3QpO1xuICAgICAgICAgICAgICBjb21wb25lbnRJdGVtQW1vdW50LnRleHRDb250ZW50ID0gY29tcG9uZW50SXRlbS5jb3N0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICAvKiBSZW5kZXJzIHRoZSBtYXRjaHVwcyBzZWN0aW9uIG9mIHRoZSBjaGFtcGlvbiBtb2RhbCBzdGF0cyBwYWdlICovXG4gIGNvbnN0IGJlc3RNYXRjaHVwc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmVzdC1tYXRjaHVwcy1zZWN0aW9uJyk7XG4gIGNvbnN0IGJlc3RNYXRjaHVwc0VsZW1lbnQgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnYmVzdC1tYXRjaHVwcyBtYXRjaHVwcycsIGJlc3RNYXRjaHVwc1NlY3Rpb24pO1xuICBjb25zdCBiZXN0TWF0Y2h1cHNEYXRhID0gY2hhbXBpb25TdGF0cy5iZXN0TWF0Y2hVcHM7XG4gIHJlbmRlck1hdGNodXBzSW5mbyhiZXN0TWF0Y2h1cHNFbGVtZW50LCBiZXN0TWF0Y2h1cHNEYXRhLCBsYXRlc3RWZXJzaW9uKTtcblxuICBjb25zdCB3b3JzdE1hdGNodXBzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53b3JzdC1tYXRjaHVwcy1zZWN0aW9uJyk7XG4gIGNvbnN0IHdvcnN0TWF0Y2h1cHNFbGVtZW50ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ3dvcnN0LW1hdGNodXBzIG1hdGNodXBzJywgd29yc3RNYXRjaHVwc1NlY3Rpb24pO1xuICBjb25zdCB3b3JzdE1hdGNodXBzRGF0YSA9IGNoYW1waW9uU3RhdHMud29yc3RNYXRjaFVwcztcbiAgcmVuZGVyTWF0Y2h1cHNJbmZvKHdvcnN0TWF0Y2h1cHNFbGVtZW50LCB3b3JzdE1hdGNodXBzRGF0YSwgbGF0ZXN0VmVyc2lvbik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjaGFtcGlvblN0YXRzTW9kYWw7XG4iLCJpbXBvcnQgRWxlbWVudENyZWF0aW9uIGZyb20gJy4uL2hlbHBlcnMvZWxlbWVudENyZWF0aW9uJztcblxuY29uc3QgaW1wb3J0QWxsID0gKHIpID0+IHtcbiAgY29uc3QgaW1hZ2VzID0ge307XG4gIHIua2V5cygpLmZvckVhY2goKGl0ZW0pID0+IHsgaW1hZ2VzW2l0ZW0ucmVwbGFjZSgnLi8nLCAnJyldID0gcihpdGVtKTsgfSk7XG4gIHJldHVybiBpbWFnZXM7XG59O1xuXG5jb25zdCBpbWFnZXMgPSBpbXBvcnRBbGwocmVxdWlyZS5jb250ZXh0KCcuLi9hc3NldHMvaW1hZ2VzJywgZmFsc2UsIC9cXC4ocG5nfGpwZT9nfHN2ZykkLykpO1xuXG5jb25zdCByZW5kZXJIZWFkZXJEZXRhaWxzID0gKGNoYW1waW9uRGF0YSwgbW9kYWxDb250YWluZXIpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7bW9kYWxDb250YWluZXJ9LWNvbnRhaW5lcmApO1xuICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZCA9IGBuby1yZXBlYXQgdXJsKGh0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi9pbWcvY2hhbXBpb24vc3BsYXNoLyR7Y2hhbXBpb25EYXRhLmlkfV8wLmpwZykgNzAlIDgwJWA7XG4gIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb3Zlcic7XG5cbiAgY29uc3QgY2hhbXBpb25UaXRsZSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tdGl0bGUnKTtcbiAgY2hhbXBpb25UaXRsZS50ZXh0Q29udGVudCA9IGNoYW1waW9uRGF0YS50aXRsZTtcblxuICBjb25zdCBjaGFtcGlvbk5hbWUgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLW5hbWUnKTtcbiAgY2hhbXBpb25OYW1lLnRleHRDb250ZW50ID0gY2hhbXBpb25EYXRhLm5hbWU7XG59O1xuXG4vKiBSZW5kZXJzIHdpbiBvciBwaWNrIHJhdGUgdG8gdGhlIERPTSAqL1xuY29uc3QgcmVuZGVyU3RhdE92ZXJ2aWV3ID0gKHN0YXRzT3ZlcnZpZXcsIHJhdGVUZXh0LCByYXRlVHlwZSkgPT4ge1xuICBjb25zdCBjaGFtcGlvblJhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNvbnN0IHJhdGVWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAvKiBUdXJucyAnV2luIFJhdGUnIGludG8gJ3dpbi1yYXRlJyAqL1xuICBjb25zdCBsb3dlckNhc2VUZXh0ID0gcmF0ZVRleHQucmVwbGFjZSgnICcsICctJykudG9Mb3dlckNhc2UoKTtcblxuICBjaGFtcGlvblJhdGUuY2xhc3NOYW1lID0gbG93ZXJDYXNlVGV4dDtcbiAgbGFiZWwuaWQgPSBgJHtsb3dlckNhc2VUZXh0fS1sYWJlbGA7XG4gIGxhYmVsLmNsYXNzTmFtZSA9ICdsYWJlbCc7XG4gIHJhdGVWYWx1ZS5jbGFzc05hbWUgPSBgJHtsb3dlckNhc2VUZXh0fS12YWx1ZWA7XG4gIGxhYmVsLnRleHRDb250ZW50ID0gcmF0ZVRleHQ7XG4gIHJhdGVWYWx1ZS50ZXh0Q29udGVudCA9IGAke3JhdGVUeXBlfSVgO1xuXG4gIGNoYW1waW9uUmF0ZS5hcHBlbmRDaGlsZChsYWJlbCk7IGNoYW1waW9uUmF0ZS5hcHBlbmRDaGlsZChyYXRlVmFsdWUpO1xuICBzdGF0c092ZXJ2aWV3LmFwcGVuZENoaWxkKGNoYW1waW9uUmF0ZSk7XG59O1xuXG5jb25zdCByZW5kZXJDaGFtcGlvbkxhbmUgPSAoc3RhdHNPdmVydmlldywgbGFuZSkgPT4ge1xuICBjb25zdCBjaGFtcGlvbkxhbmVJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNoYW1waW9uTGFuZUluZm8uY2xhc3NOYW1lID0gJ2xhbmUtaW5mbyc7XG4gIGNvbnN0IGxhbmVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBsYW5lVGV4dC5jbGFzc05hbWUgPSAnbGFuZS10ZXh0IGxhYmVsJztcbiAgbGFuZVRleHQudGV4dENvbnRlbnQgPSBsYW5lO1xuICBjb25zdCBsYW5lSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBsYW5lSWNvbi5jbGFzc05hbWUgPSAnbGFuZS1pY29uIGNoYW1waW9uLXJvbGUtaW1hZ2UnO1xuICBsYW5lSWNvbi5zcmMgPSBgJHtpbWFnZXNbYCR7bGFuZX0ucG5nYF19YDtcbiAgbGFuZUljb24uYWx0ID0gYCR7bGFuZX0ucG5nYDtcbiAgY2hhbXBpb25MYW5lSW5mby5hcHBlbmRDaGlsZChsYW5lVGV4dCk7XG4gIGNoYW1waW9uTGFuZUluZm8uYXBwZW5kQ2hpbGQobGFuZUljb24pO1xuICBzdGF0c092ZXJ2aWV3LmFwcGVuZENoaWxkKGNoYW1waW9uTGFuZUluZm8pO1xufTtcblxuY29uc3QgcmVuZGVyRGFtYWdlU3RhdHMgPSAoZGFtYWdlVHlwZSwgZGFtYWdlVmFsdWUsIGRhbWFnZVBlcmNlbnRhZ2UpID0+IHtcbiAgY29uc3QgZGFtYWdlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZGFtYWdlVHlwZX0tZGFtYWdlLWNvbnRhaW5lcmApO1xuXG4gIGNvbnN0IGRhbWFnZVN0YXRzID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2RhbWFnZS1zdGF0cycsIGRhbWFnZUNvbnRhaW5lcik7XG5cbiAgY29uc3QgZGFtYWdlVmFsdWVFbGVtZW50ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhJZCgnc3BhbicsIGAke2RhbWFnZVR5cGV9LXZhbHVlYCwgZGFtYWdlU3RhdHMpO1xuICBjb25zdCBkYW1hZ2VQZXJjZW50YWdlRWxlbWVudCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoSWQoJ3NwYW4nLCBgJHtkYW1hZ2VUeXBlfS1wZXJjZW50YWdlYCwgZGFtYWdlU3RhdHMpO1xuICBkYW1hZ2VWYWx1ZUVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtkYW1hZ2VWYWx1ZX1gO1xuICBkYW1hZ2VQZXJjZW50YWdlRWxlbWVudC50ZXh0Q29udGVudCA9IGAke2RhbWFnZVBlcmNlbnRhZ2V9JWA7XG59O1xuXG5jb25zdCByZW5kZXJNYXRjaHVwc0luZm8gPSAobWF0Y2h1cHNFbGVtZW50LCBtYXRjaHVwc0RhdGEsIGxhdGVzdFZlcnNpb24pID0+IHtcbiAgbWF0Y2h1cHNEYXRhLmZvckVhY2goKG1hdGNodXApID0+IHtcbiAgICBjb25zdCBtYXRjaHVwSW5mbyA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdtYXRjaHVwLWluZm8nLCBtYXRjaHVwc0VsZW1lbnQpO1xuICAgIGNvbnN0IGVuZW15Q2hhbXBpb25OYW1lID0gbWF0Y2h1cFsxXS5uYW1lO1xuICAgIGNvbnN0IGVuZW15Q2hhbXBpb25JZCA9IG1hdGNodXBbMF07XG4gICAgY29uc3QgZW5lbXlDaGFtcGlvbkltZ1VybCA9IGBodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vJHtsYXRlc3RWZXJzaW9ufS9pbWcvY2hhbXBpb24vJHtlbmVteUNoYW1waW9uSWR9LnBuZ2A7XG4gICAgRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzKFxuICAgICAgJ2VuZW15LWNoYW1waW9uLWltZycsIG1hdGNodXBJbmZvLCBlbmVteUNoYW1waW9uSW1nVXJsLCBgc21hbGwtJHtlbmVteUNoYW1waW9uSWR9YCxcbiAgICApO1xuXG4gICAgY29uc3QgbWF0Y2h1cFN0YXRzID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ21hdGNodXAtc3RhdHMnLCBtYXRjaHVwSW5mbyk7XG4gICAgY29uc3QgZW5lbXlDaGFtcGlvbk5hbWVFbGVtZW50ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdlbmVteS1jaGFtcGlvbi1uYW1lJywgbWF0Y2h1cFN0YXRzKTtcbiAgICBlbmVteUNoYW1waW9uTmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSBlbmVteUNoYW1waW9uTmFtZTtcbiAgICBjb25zdCB3aW5yYXRlQWdhaW5zdCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICd3aW5yYXRlLWFnYWluc3QnLCBtYXRjaHVwU3RhdHMpO1xuICAgIGNvbnN0IHdpbnJhdGVBZ2FpbnN0TGFiZWwgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ3dpbnJhdGUtYWdhaW5zdC1sYWJlbCcsIHdpbnJhdGVBZ2FpbnN0KTtcbiAgICB3aW5yYXRlQWdhaW5zdExhYmVsLnRleHRDb250ZW50ID0gJ1dpbnJhdGU6ICc7XG4gICAgY29uc3QgY29sb3IgPSBtYXRjaHVwc0VsZW1lbnQuY2xhc3NOYW1lID09PSAnYmVzdC1tYXRjaHVwcyBtYXRjaHVwcycgPyAnYmx1ZScgOiAncmVkJztcbiAgICBjb25zdCB3aW5yYXRlQWdhaW5zdFBlcmNlbnRhZ2UgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgYHdpbnJhdGUtYWdhaW5zdC1wZXJjZW50YWdlICR7Y29sb3J9YCwgd2lucmF0ZUFnYWluc3QpO1xuICAgIHdpbnJhdGVBZ2FpbnN0UGVyY2VudGFnZS50ZXh0Q29udGVudCA9IGAke21hdGNodXBbMV0ud2luUmF0ZUFnYWluc3QudG9GaXhlZCgwKX0lYDtcbiAgICBjb25zdCBnYW1lc1BsYXllZEFnYWluc3QgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2dhbWVzLXBsYXllZC1hZ2FpbnN0JywgbWF0Y2h1cFN0YXRzKTtcbiAgICBnYW1lc1BsYXllZEFnYWluc3QudGV4dENvbnRlbnQgPSBgR2FtZXM6ICR7bWF0Y2h1cFsxXS5tYXRjaGVzfWA7XG4gIH0pO1xufTtcblxuY29uc3QgY3JlYXRlQ2hhbXBpb25Db250YWluZXIgPSAoY2hhbXBpb24sIGNoYW1waW9uc1NlY3Rpb24pID0+IHtcbiAgY29uc3QgY2hhbXBpb25Db250YWluZXIgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnY2hhbXBpb24tY29udGFpbmVyIHNob3duJywgY2hhbXBpb25zU2VjdGlvbik7XG4gIGNvbnN0IGNoYW1waW9uSWQgPSBjaGFtcGlvbi5pZCA/IGNoYW1waW9uLmlkIDogY2hhbXBpb24uY2hhbXBpb25OYW1lO1xuICBjaGFtcGlvbkNvbnRhaW5lci5kYXRhc2V0LmlkID0gY2hhbXBpb25JZDtcbiAgY29uc3QgY2hhbXBpb25JbWdVcmwgPSBgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuL2ltZy9jaGFtcGlvbi9sb2FkaW5nLyR7Y2hhbXBpb25JZH1fMC5qcGdgO1xuICBjb25zdCBjaGFtcGlvbkltZyA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEltYWdlRWxlbWVudFdpdGhDbGFzcyhcbiAgICAnY2hhbXBpb24taW1nJywgY2hhbXBpb25Db250YWluZXIsIGNoYW1waW9uSW1nVXJsLCAnJyxcbiAgKTtcbiAgY2hhbXBpb25JbWcudGFiSW5kZXggPSAwO1xuICBjaGFtcGlvbkNvbnRhaW5lci50YWJJbmRleCA9IDA7XG4gIGNvbnN0IGNoYW1waW9uTmFtZVdyYXBwZXIgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnY2hhbXBpb24tbmFtZS13cmFwcGVyJywgY2hhbXBpb25Db250YWluZXIpO1xuICBjb25zdCBjaGFtcGlvbk5hbWUgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2NoYW1waW9uLW5hbWUnLCBjaGFtcGlvbk5hbWVXcmFwcGVyKTtcbiAgY2hhbXBpb25OYW1lLnRleHRDb250ZW50ID0gY2hhbXBpb24ubmFtZTtcbn07XG5cbmV4cG9ydCB7XG4gIHJlbmRlckhlYWRlckRldGFpbHMsXG4gIHJlbmRlclN0YXRPdmVydmlldyxcbiAgcmVuZGVyQ2hhbXBpb25MYW5lLFxuICByZW5kZXJEYW1hZ2VTdGF0cyxcbiAgaW1hZ2VzLFxuICByZW5kZXJNYXRjaHVwc0luZm8sXG4gIGNyZWF0ZUNoYW1waW9uQ29udGFpbmVyLFxufTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1yYXNpbi1ibGFjazogIzFkMWUyYztcXG4gIC0tdHJhbnNwYXJlbnQtcmFzaW4tYmxhY2s6ICMxZDFlMmM5MTtcXG4gIC0tZGFyay1nb2xkOiAjOTI3NTQzO1xcbiAgLS1saWdodC1nb2xkOiAjYzdhYjZlO1xcbn1cXG5cXG4jZnJvbnQtcGFnZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAtNDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmFybG93XFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuI2Zyb250LXBhZ2UgLmFwcC1uYW1lLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgcGFkZGluZzogMC4zZW07XFxuICBib3JkZXItcmFkaXVzOiA4cHggMHB4IDhweCAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jZnJvbnQtcGFnZSAuYXBwLW5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XFxufVxcbiNmcm9udC1wYWdlIC5hcHAtbmFtZS1jb250YWluZXI6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuI2Zyb250LXBhZ2UgLnBhZ2UtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFlbSAwO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci13aWR0aDogMCAwIDJweCAwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2Zyb250LXBhZ2UgLmFwcC1uYW1lLWRpc3BsYXktY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwYjM7XFxuICBwYWRkaW5nOiAwLjJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiA2ZW07XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xcbiAgI2Zyb250LXBhZ2UgLmFwcC1uYW1lLWRpc3BsYXktY29udGFpbmVyIHtcXG4gICAgcGFkZGluZy10b3A6IDJlbTtcXG4gIH1cXG59XFxuI2Zyb250LXBhZ2UgLmFwcC1uYW1lLWRpc3BsYXkge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW4tYm90dG9tOiA2cHg7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxufVxcbiNmcm9udC1wYWdlIC50YWdsaW5lLWNvbnRhaW5lciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgbWFyZ2luLXRvcDogMmVtO1xcbn1cXG4jZnJvbnQtcGFnZSAudGFnbGluZS1tYXRjaC1jb3VudCB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxLjNlbTtcXG59XFxuI2Zyb250LXBhZ2UgLnNlYXJjaCB7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIG1pbi13aWR0aDogMThlbTtcXG4gIGJhY2tncm91bmQ6ICNlMmU0ZTk7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBtaW4taGVpZ2h0OiAyLjZlbTtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG4jZnJvbnQtcGFnZSAuc3BsYXNoLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNmcm9udC1wYWdlIC5iYWNrZHJvcC1pbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogNTB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6ICMyMjI7XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcbiNmcm9udC1wYWdlIC5iYWNrZHJvcCB7XFxuICB6LWluZGV4OiAtMjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogMzJlbTtcXG59XFxuI2Zyb250LXBhZ2UgLmJhY2tkcm9wOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzE0MTgxZCwgcmdiYSgyMCwgMjQsIDI5LCAwLjk4NTU2NSkgMC45NyUsIHJnYmEoMjAsIDI0LCAyOSwgMC45NDUxMzEpIDIuMDc4MzMlLCByZ2JhKDIwLCAyNCwgMjksIDAuODgzMDA3KSAzLjI5NjY3JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjgwMzQ5OSkgNC42MDE2NyUsIHJnYmEoMjAsIDI0LCAyOSwgMC43MTA5MTUpIDUuOTY2NjclLCByZ2JhKDIwLCAyNCwgMjksIDAuNjA5NTYzKSA3LjM2NSUsIHJnYmEoMjAsIDI0LCAyOSwgMC41MDM3NSkgOC43NzE2NyUsIHJnYmEoMjAsIDI0LCAyOSwgMC4zOTc3ODQpIDEwLjE2JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjI5NTk3MykgMTEuNTA1JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjIwMjYyNCkgMTIuNzglLCByZ2JhKDIwLCAyNCwgMjksIDAuMTIyMDQ0KSAxMy45NTgzMyUsIHJnYmEoMjAsIDI0LCAyOSwgMC4wNTg1NDIzKSAxNS4wMTY2NyUsIHJnYmEoMjAsIDI0LCAyOSwgMC4wMTY0MjQ5KSAxNS45MjgzMyUsIHJnYmEoMjAsIDI0LCAyOSwgMCkgMTYuNjY2NjclLCByZ2JhKDIwLCAyNCwgMjksIDApIDgzLjMzMzMzJSwgcmdiYSgyMCwgMjQsIDI5LCAwLjAxNjQyNDkpIDg0LjA3MTY3JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjA1ODU0MjMpIDg0Ljk4MzMzJSwgcmdiYSgyMCwgMjQsIDI5LCAwLjEyMjA0NCkgODYuMDQxNjclLCByZ2JhKDIwLCAyNCwgMjksIDAuMjAyNjI0KSA4Ny4yMiUsIHJnYmEoMjAsIDI0LCAyOSwgMC4yOTU5NzMpIDg4LjQ5NSUsIHJnYmEoMjAsIDI0LCAyOSwgMC4zOTc3ODQpIDg5Ljg0JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjUwMzc1KSA5MS4yMjgzMyUsIHJnYmEoMjAsIDI0LCAyOSwgMC42MDk1NjMpIDkyLjYzNSUsIHJnYmEoMjAsIDI0LCAyOSwgMC43MTA5MTUpIDk0LjAzMzMzJSwgcmdiYSgyMCwgMjQsIDI5LCAwLjgwMzQ5OSkgOTUuMzk4MzMlLCByZ2JhKDIwLCAyNCwgMjksIDAuODgzMDA3KSA5Ni43MDMzMyUsIHJnYmEoMjAsIDI0LCAyOSwgMC45NDUxMzEpIDk3LjkyMTY3JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjk4NTU2NSkgOTkuMDMlLCAjMTQxODFkKSwgbGluZWFyLWdyYWRpZW50KDBkZWcsICMxNDE4MWQsICMxNDE4MWQgMjEuNDgxNDglLCByZ2JhKDIwLCAyNCwgMjksIDAuOTg1NTY1KSAyMy42MzcwNCUsIHJnYmEoMjAsIDI0LCAyOSwgMC45NDUxMzEpIDI2LjElLCByZ2JhKDIwLCAyNCwgMjksIDAuODgzMDA3KSAyOC44MDc0MSUsIHJnYmEoMjAsIDI0LCAyOSwgMC44MDM0OTkpIDMxLjcwNzQxJSwgcmdiYSgyMCwgMjQsIDI5LCAwLjcxMDkxNSkgMzQuNzQwNzQlLCByZ2JhKDIwLCAyNCwgMjksIDAuNjA5NTYzKSAzNy44NDgxNSUsIHJnYmEoMjAsIDI0LCAyOSwgMC41MDM3NSkgNDAuOTc0MDclLCByZ2JhKDIwLCAyNCwgMjksIDAuMzk3Nzg0KSA0NC4wNTkyNiUsIHJnYmEoMjAsIDI0LCAyOSwgMC4yOTU5NzMpIDQ3LjA0ODE1JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjIwMjYyNCkgNDkuODgxNDglLCByZ2JhKDIwLCAyNCwgMjksIDAuMTIyMDQ0KSA1Mi41JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjA1ODU0MjMpIDU0Ljg1MTg1JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjAxNjQyNDkpIDU2Ljg3Nzc4JSwgcmdiYSgyMCwgMjQsIDI5LCAwKSA1OC41MTg1MiUpO1xcbn1cXG4jZnJvbnQtcGFnZSAuYmFja2Ryb3AgLnNob3duIHtcXG4gIG9wYWNpdHk6IDAuNztcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC42cyBlYXNlLWluO1xcbn1cXG4jZnJvbnQtcGFnZSAuYmFja2Ryb3AgLmhpZGRlbiB7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjZzIGVhc2UtaW47XFxufVxcbiNmcm9udC1wYWdlICN0cGEtYmFja2Ryb3AuaGlkZGVuIHtcXG4gIHRyYW5zaXRpb246IG5vbmU7XFxufVxcbiNmcm9udC1wYWdlIC5zbG9nYW4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxNmVtO1xcbn1cXG4jZnJvbnQtcGFnZSAuc2xvZ2FuLWNvbnRhaW5lciAuc2xvZ2FuLTEge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmFybG93XFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuI2Zyb250LXBhZ2UgLnNsb2dhbi1jb250YWluZXIgLnNsb2dhbi0yIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIkJhcmxvd1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xcbiAgI2Zyb250LXBhZ2UgLnNsb2dhbi1jb250YWluZXIge1xcbiAgICB0b3A6IDEyZW07XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcbiNmcm9udC1wYWdlIC5tb2JpbGUtZGlzY292ZXItYnRuLWNvbnRhaW5lciB7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci1yYWRpdXM6IDc1JSAxMCUvMCUgNzUlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm90dG9tOiAxMGVtO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcXG4gICNmcm9udC1wYWdlIC5tb2JpbGUtZGlzY292ZXItYnRuLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gICAgYm90dG9tOiA1ZW07XFxuICB9XFxufVxcbiNmcm9udC1wYWdlIC5tb2JpbGUtZGlzY292ZXItYnRuLWNvbnRhaW5lcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG59XFxuI2Zyb250LXBhZ2UgLmZyb250LXBhZ2UtYnRuIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG59XFxuI2Zyb250LXBhZ2UgLmZyb250LXBhZ2UtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbn1cXG4jZnJvbnQtcGFnZSAuZGlzY292ZXItYnRuLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtYXJnaW4tYm90dG9tOiAzZW07XFxuICBkaXNwbGF5OiBub25lO1xcbiAgdG9wOiAyMS41ZW07XFxufVxcbiNmcm9udC1wYWdlIC5kaXNjb3Zlci1idG4ge1xcbiAgYm9yZGVyOiBzb2xpZDtcXG4gIGNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNzUlIDEwJS8wJSA3NSU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG59XFxuI2Zyb250LXBhZ2UgLmRpc2NvdmVyLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG59XFxuI2Zyb250LXBhZ2UgLm5hdmlnYXRpb24tc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNmcm9udC1wYWdlIC5kZXNrdG9wLXNlYXJjaC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuI2Zyb250LXBhZ2UgLmF1dG8tY29tcGxldGUtbmFtZXMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZDRkNDtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICBib3JkZXItdG9wOiBub25lO1xcbiAgei1pbmRleDogNDtcXG4gIHRvcDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTRyZW07XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuI2Zyb250LXBhZ2UgLmF1dG8tY29tcGxldGUtbmFtZS13cmFwcGVyIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNGQ0ZDQ7XFxuICBjb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4jZnJvbnQtcGFnZSAuYXV0by1jb21wbGV0ZS1uYW1lLXdyYXBwZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxufVxcbiNmcm9udC1wYWdlIC5hdXRvLWNvbXBsZXRlLW5hbWUtd3JhcHBlcjpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG59XFxuI2Zyb250LXBhZ2UgLnNlYXJjaCB7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIG1pbi13aWR0aDogMThlbTtcXG4gIGJhY2tncm91bmQ6ICNlMmU0ZTk7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBtaW4taGVpZ2h0OiAyLjZlbTtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG4jZnJvbnQtcGFnZSAuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBwYWRkaW5nOiAwIDEuM2VtIDAuNmVtIDEuM2VtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuI2Zyb250LXBhZ2UgLmZvb3Rlci1saW5rcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4jZnJvbnQtcGFnZSAuZ2l0aHViLWxpbmsge1xcbiAgbWFyZ2luLWJvdHRvbTogMC4yZW07XFxuICBwYWRkaW5nLXRvcDogMC40ZW07XFxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG59XFxuI2Zyb250LXBhZ2UgLmdpdGh1Yi1pY29uIHtcXG4gIHdpZHRoOiAyLjVlbTtcXG4gIHRyYW5zaXRpb246IGZpbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuI2Zyb250LXBhZ2UgLmdpdGh1Yi1saW5rOmhvdmVyIC5naXRodWItaWNvbiB7XFxuICBmaWxsOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxufVxcbiNmcm9udC1wYWdlIC5saW5rZWRpbi1saW5rIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuMmVtO1xcbiAgcGFkZGluZy10b3A6IDAuNGVtO1xcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcXG59XFxuI2Zyb250LXBhZ2UgLmxpbmtlZGluLWljb24ge1xcbiAgd2lkdGg6IDIuNWVtO1xcbiAgdHJhbnNpdGlvbjogZmlsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG4jZnJvbnQtcGFnZSAubGlua2VkaW4tbGluazpob3ZlciAubGlua2VkaW4taWNvbiB7XFxuICBmaWxsOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xcbiAgI2Zyb250LXBhZ2UgLmRlc2t0b3Atc2VhcmNoLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxuICAjZnJvbnQtcGFnZSAubW9iaWxlLWRpc2NvdmVyLWJ0bi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgI2Zyb250LXBhZ2UgLmRpc2NvdmVyLWJ0bi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG4gICNmcm9udC1wYWdlIC5sZWdhbC1ib2lsZXJwbGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBwYWRkaW5nLXRvcDogMC42ZW07XFxuICB9XFxuICAjZnJvbnQtcGFnZSAuc2xvZ2FuLWNvbnRhaW5lciB7XFxuICAgIHRvcDogMzBlbTtcXG4gIH1cXG4gICNmcm9udC1wYWdlIC5zbG9nYW4tMSB7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgfVxcbiAgI2Zyb250LXBhZ2UgLnNsb2dhbi0yIHtcXG4gICAgZm9udC1zaXplOiAyLjFyZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxNDAwcHgpIHtcXG4gICNmcm9udC1wYWdlIC5kaXNjb3Zlci1idG4tY29udGFpbmVyIHtcXG4gICAgdG9wOiAxOGVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuICAjZnJvbnQtcGFnZSAuYXBwLW5hbWUtZGlzcGxheS1jb250YWluZXIge1xcbiAgICBwYWRkaW5nLXRvcDogNGVtO1xcbiAgfVxcbiAgI2Zyb250LXBhZ2UgLnNsb2dhbi1jb250YWluZXIge1xcbiAgICB0b3A6IDEzZW07XFxuICB9XFxuICAjZnJvbnQtcGFnZSAubW9iaWxlLWRpc2NvdmVyLWJ0bi1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMTBlbTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlc2hlZXRzL2Zyb250cGFnZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxz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RTtJQUNFLGFBQUE7RUE3Rko7RUFnR0U7SUFDRSxjQUFBO0VBOUZKO0VBaUdFO0lBQ0UsY0FBQTtJQUNBLGtCQUFBO0VBL0ZKO0VBa0dFO0lBQ0UsU0FBQTtFQWhHSjtFQW1HRTtJQUNFLGlCQUFBO0VBakdKO0VBb0dFO0lBQ0UsaUJBQUE7RUFsR0o7QUFDRjtBQXFHRTtFQUNFO0lBQ0UsU0FBQTtFQW5HSjtBQUNGO0FBc0dFO0VBQ0U7SUFDRSxnQkFBQTtFQXBHSjtFQXVHRTtJQUNFLFNBQUE7RUFyR0o7RUF3R0U7SUFDRSxrQkFBQTtJQUNBLFlBQUE7RUF0R0o7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLXJhc2luLWJsYWNrOiAjMWQxZTJjO1xcbiAgLS10cmFuc3BhcmVudC1yYXNpbi1ibGFjazogIzFkMWUyYzkxO1xcbiAgLS1kYXJrLWdvbGQ6ICM5Mjc1NDM7XFxuICAtLWxpZ2h0LWdvbGQ6ICNjN2FiNmU7XFxufVxcblxcbiNmcm9udC1wYWdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IC00O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCYXJsb3dcXFwiLCBzYW5zLXNlcmlmO1xcblxcbiAgLmFwcC1uYW1lLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICAgIHBhZGRpbmc6IDAuM2VtO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHggMHB4IDhweCAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuXFxuICAuYXBwLW5hbWUge1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XFxuICB9XFxuXFxuICAuYXBwLW5hbWUtY29udGFpbmVyOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgfVxcblxcbiAgLnBhZ2UtaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDFlbSAwO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICAgIGJvcmRlci13aWR0aDogMCAwIDJweCAwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmFwcC1uYW1lLWRpc3BsYXktY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBiMztcXG4gICAgcGFkZGluZzogMC4yZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDExcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDZlbTtcXG5cXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxuICAgICAgcGFkZGluZy10b3A6IDJlbTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLmFwcC1uYW1lLWRpc3BsYXkge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICB9XFxuXFxuICAudGFnbGluZS1jb250YWluZXIge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgIG1hcmdpbi10b3A6IDJlbTtcXG4gIH1cXG5cXG4gIC50YWdsaW5lLW1hdGNoLWNvdW50IHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAxLjNlbTtcXG4gIH1cXG5cXG4gIC5zZWFyY2gge1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgbWluLXdpZHRoOiAxOGVtO1xcbiAgICBiYWNrZ3JvdW5kOiAjZTJlNGU5O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIG1pbi1oZWlnaHQ6IDIuNmVtO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gIH1cXG5cXG4gIC5zcGxhc2gtc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuYmFja2Ryb3AtaW1nIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiA1MHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6ICMyMjI7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gIH1cXG5cXG4gIC5iYWNrZHJvcCB7XFxuICAgIHotaW5kZXg6IC0yO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiAzMmVtO1xcbiAgfVxcblxcbiAgLmJhY2tkcm9wOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICAgIDkwZGVnLFxcbiAgICAgICAgIzE0MTgxZCxcXG4gICAgICAgIHJnYmEoMjAsIDI0LCAyOSwgMC45ODU1NjUpIDAuOTclLFxcbiAgICAgICAgcmdiYSgyMCwgMjQsIDI5LCAwLjk0NTEzMSkgMi4wNzgzMyUsXFxuICAgICAgICByZ2JhKDIwLCAyNCwgMjksIDAuODgzMDA3KSAzLjI5NjY3JSxcXG4gICAgICAgIHJnYmEoMjAsIDI0LCAyOSwgMC44MDM0OTkpIDQuNjAxNjclLFxcbiAgICAgICAgcmdiYSgyMCwgMjQsIDI5LCAwLjcxMDkxNSkgNS45NjY2NyUsXFxuICAgICAgICByZ2JhKDIwLCAyNCwgMjksIDAuNjA5NTYzKSA3LjM2NSUsXFxuICAgICAgICByZ2JhKDIwLCAyNCwgMjksIDAuNTAzNzUpIDguNzcxNjclLFxcbiAgICAgICAgcmdiYSgyMCwgMjQsIDI5LCAwLjM5Nzc4NCkgMTAuMTYlLFxcbiAgICAgICAgcmdiYSgyMCwgMjQsIDI5LCAwLjI5NTk3MykgMTEuNTA1JSxcXG4gICAgICAgIHJnYmEoMjAsIDI0LCAyOSwgMC4yMDI2MjQpIDEyLjc4JSxcXG4gICAgICAgIHJnYmEoMjAsIDI0LCAyOSwgMC4xMjIwNDQpIDEzLjk1ODMzJSxcXG4gICAgICAgIHJnYmEoMjAsIDI0LCAyOSwgMC4wNTg1NDIzKSAxNS4wMTY2NyUsXFxuICAgICAgICByZ2JhKDIwLCAyNCwgMjksIDAuMDE2NDI0OSkgMTUuOTI4MzMlLFxcbiAgICAgICAgcmdiYSgyMCwgMjQsIDI5LCAwKSAxNi42NjY2NyUsXFxuICAgICAgICByZ2JhKDIwLCAyNCwgMjksIDApIDgzLjMzMzMzJSxcXG4gICAgICAgIHJnYmEoMjAsIDI0LCAyOSwgMC4wMTY0MjQ5KSA4NC4wNzE2NyUsXFxuICAgICAgICByZ2JhKDIwLCAyNCwgMjksIDAuMDU4NTQyMykgODQuOTgzMzMlLFxcbiAgICAgICAgcmdiYSgyMCwgMjQsIDI5LCAwLjEyMjA0NCkgODYuMDQxNjclLFxcbiAgICAgICAgcmdiYSgyMCwgMjQsIDI5LCAwLjIwMjYyNCkgODcuMjIlLFxcbiAgICAgICAgcmdiYSgyMCwgMjQsIDI5LCAwLjI5NTk3MykgODguNDk1JSxcXG4gICAgICAgIHJnYmEoMjAsIDI0LCAyOSwgMC4zOTc3ODQpIDg5Ljg0JSxcXG4gICAgICAgIHJnYmEoMjAsIDI0LCAyOSwgMC41MDM3NSkgOTEuMjI4MzMlLFxcbiAgICAgICAgcmdiYSgyMCwgMjQsIDI5LCAwLjYwOTU2MykgOTIuNjM1JSxcXG4gICAgICAgIHJnYmEoMjAsIDI0LCAyOSwgMC43MTA5MTUpIDk0LjAzMzMzJSxcXG4gICAgICAgIHJnYmEoMjAsIDI0LCAyOSwgMC44MDM0OTkpIDk1LjM5ODMzJSxcXG4gICAgICAgIHJnYmEoMjAsIDI0LCAyOSwgMC44ODMwMDcpIDk2LjcwMzMzJSxcXG4gICAgICAgIHJnYmEoMjAsIDI0LCAyOSwgMC45NDUxMzEpIDk3LjkyMTY3JSxcXG4gICAgICAgIHJnYmEoMjAsIDI0LCAyOSwgMC45ODU1NjUpIDk5LjAzJSxcXG4gICAgICAgICMxNDE4MWRcXG4gICAgICApLFxcbiAgICAgIGxpbmVhci1ncmFkaWVudChcXG4gICAgICAgIDBkZWcsXFxuICAgICAgICAjMTQxODFkLFxcbiAgICAgICAgIzE0MTgxZCAyMS40ODE0OCUsXFxuICAgICAgICByZ2JhKDIwLCAyNCwgMjksIDAuOTg1NTY1KSAyMy42MzcwNCUsXFxuICAgICAgICByZ2JhKDIwLCAyNCwgMjksIDAuOTQ1MTMxKSAyNi4xJSxcXG4gICAgICAgIHJnYmEoMjAsIDI0LCAyOSwgMC44ODMwMDcpIDI4LjgwNzQxJSxcXG4gICAgICAgIHJnYmEoMjAsIDI0LCAyOSwgMC44MDM0OTkpIDMxLjcwNzQxJSxcXG4gICAgICAgIHJnYmEoMjAsIDI0LCAyOSwgMC43MTA5MTUpIDM0Ljc0MDc0JSxcXG4gICAgICAgIHJnYmEoMjAsIDI0LCAyOSwgMC42MDk1NjMpIDM3Ljg0ODE1JSxcXG4gICAgICAgIHJnYmEoMjAsIDI0LCAyOSwgMC41MDM3NSkgNDAuOTc0MDclLFxcbiAgICAgICAgcmdiYSgyMCwgMjQsIDI5LCAwLjM5Nzc4NCkgNDQuMDU5MjYlLFxcbiAgICAgICAgcmdiYSgyMCwgMjQsIDI5LCAwLjI5NTk3MykgNDcuMDQ4MTUlLFxcbiAgICAgICAgcmdiYSgyMCwgMjQsIDI5LCAwLjIwMjYyNCkgNDkuODgxNDglLFxcbiAgICAgICAgcmdiYSgyMCwgMjQsIDI5LCAwLjEyMjA0NCkgNTIuNSUsXFxuICAgICAgICByZ2JhKDIwLCAyNCwgMjksIDAuMDU4NTQyMykgNTQuODUxODUlLFxcbiAgICAgICAgcmdiYSgyMCwgMjQsIDI5LCAwLjAxNjQyNDkpIDU2Ljg3Nzc4JSxcXG4gICAgICAgIHJnYmEoMjAsIDI0LCAyOSwgMCkgNTguNTE4NTIlXFxuICAgICAgKTtcXG4gIH1cXG5cXG4gIC5iYWNrZHJvcCAuc2hvd24ge1xcbiAgICBvcGFjaXR5OiAwLjc7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC42cyBlYXNlLWluO1xcbiAgfVxcblxcbiAgLmJhY2tkcm9wIC5oaWRkZW4ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC42cyBlYXNlLWluO1xcbiAgfVxcblxcbiAgI3RwYS1iYWNrZHJvcC5oaWRkZW4ge1xcbiAgICB0cmFuc2l0aW9uOiBub25lO1xcbiAgfVxcblxcbiAgLnNsb2dhbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTZlbTtcXG5cXG4gICAgLnNsb2dhbi0xIHtcXG4gICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBmb250LWZhbWlseTogXFxcIkJhcmxvd1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIH1cXG5cXG4gICAgLnNsb2dhbi0yIHtcXG4gICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBmb250LWZhbWlseTogXFxcIkJhcmxvd1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIH1cXG5cXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxuICAgICAgdG9wOiAxMmVtO1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5tb2JpbGUtZGlzY292ZXItYnRuLWNvbnRhaW5lciB7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgICBib3JkZXItcmFkaXVzOiA3NSUgMTAlLzAlIDc1JTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogMTBlbTtcXG5cXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgICAgIGJvdHRvbTogNWVtO1xcbiAgICB9XFxuICB9XFxuXFxuICAubW9iaWxlLWRpc2NvdmVyLWJ0bi1jb250YWluZXI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gIH1cXG5cXG4gIC5mcm9udC1wYWdlLWJ0biB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgfVxcblxcbiAgLmZyb250LXBhZ2UtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICB9XFxuXFxuICAuZGlzY292ZXItYnRuLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogM2VtO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB0b3A6IDIxLjVlbTtcXG4gIH1cXG5cXG4gIC5kaXNjb3Zlci1idG4ge1xcbiAgICBib3JkZXI6IHNvbGlkO1xcbiAgICBjb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNzUlIDEwJS8wJSA3NSU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICB9XFxuXFxuICAuZGlzY292ZXItYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICB9XFxuXFxuICAubmF2aWdhdGlvbi1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5kZXNrdG9wLXNlYXJjaC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5hdXRvLWNvbXBsZXRlLW5hbWVzIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDRkNGQ0O1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICB6LWluZGV4OiA0O1xcbiAgICB0b3A6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAxNHJlbTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmF1dG8tY29tcGxldGUtbmFtZS13cmFwcGVyIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q0ZDRkNDtcXG4gICAgY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuYXV0by1jb21wbGV0ZS1uYW1lLXdyYXBwZXI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gIH1cXG5cXG4gIC5hdXRvLWNvbXBsZXRlLW5hbWUtd3JhcHBlcjpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgfVxcblxcbiAgLnNlYXJjaCB7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBtaW4td2lkdGg6IDE4ZW07XFxuICAgIGJhY2tncm91bmQ6ICNlMmU0ZTk7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbWluLWhlaWdodDogMi42ZW07XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgfVxcblxcbiAgLmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAwLjhlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIHBhZGRpbmc6IDAgMS4zZW0gMC42ZW0gMS4zZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICB9XFxuXFxuICAuZm9vdGVyLWxpbmtzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG5cXG4gIC5naXRodWItbGluayB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuMmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMC40ZW07XFxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xcbiAgfVxcblxcbiAgLmdpdGh1Yi1pY29uIHtcXG4gICAgd2lkdGg6IDIuNWVtO1xcbiAgICB0cmFuc2l0aW9uOiBmaWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICB9XFxuXFxuICAuZ2l0aHViLWxpbms6aG92ZXIge1xcbiAgICAuZ2l0aHViLWljb24ge1xcbiAgICAgIGZpbGw6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLmxpbmtlZGluLWxpbmsge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjJlbTtcXG4gICAgcGFkZGluZy10b3A6IDAuNGVtO1xcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xcbiAgfVxcblxcbiAgLmxpbmtlZGluLWljb24ge1xcbiAgICB3aWR0aDogMi41ZW07XFxuICAgIHRyYW5zaXRpb246IGZpbGwgMC4ycyBlYXNlLWluLW91dDtcXG4gIH1cXG5cXG4gIC5saW5rZWRpbi1saW5rOmhvdmVyIHtcXG4gICAgLmxpbmtlZGluLWljb24ge1xcbiAgICAgIGZpbGw6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gICAgfVxcbiAgfVxcblxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuICAgIC5kZXNrdG9wLXNlYXJjaC1jb250YWluZXIge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxuICAgIC5tb2JpbGUtZGlzY292ZXItYnRuLWNvbnRhaW5lciB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAuZGlzY292ZXItYnRuLWNvbnRhaW5lciB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG5cXG4gICAgLmxlZ2FsLWJvaWxlcnBsYXRlIHtcXG4gICAgICBmb250LXNpemU6IDFlbTtcXG4gICAgICBwYWRkaW5nLXRvcDogMC42ZW07XFxuICAgIH1cXG5cXG4gICAgLnNsb2dhbi1jb250YWluZXIge1xcbiAgICAgIHRvcDogMzBlbTtcXG4gICAgfVxcblxcbiAgICAuc2xvZ2FuLTEge1xcbiAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICB9XFxuXFxuICAgIC5zbG9nYW4tMiB7XFxuICAgICAgZm9udC1zaXplOiAyLjFyZW07XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxNDAwcHgpIHtcXG4gICAgLmRpc2NvdmVyLWJ0bi1jb250YWluZXIge1xcbiAgICAgIHRvcDogMThlbTtcXG4gICAgfVxcbiAgfVxcblxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgICAuYXBwLW5hbWUtZGlzcGxheS1jb250YWluZXIge1xcbiAgICAgIHBhZGRpbmctdG9wOiA0ZW07XFxuICAgIH1cXG5cXG4gICAgLnNsb2dhbi1jb250YWluZXIge1xcbiAgICAgIHRvcDogMTNlbTtcXG4gICAgfVxcblxcbiAgICAubW9iaWxlLWRpc2NvdmVyLWJ0bi1jb250YWluZXIge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBib3R0b206IDEwZW07XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbjpyb290IHtcXG4gIC0tcmFzaW4tYmxhY2s6ICMxZDFlMmM7XFxuICAtLWRhcmstZ29sZDogIzkyNzU0MztcXG4gIC0tbGlnaHQtZ29sZDogI2M3YWI2ZTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgcGFkZGluZzogMnJlbSAwO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmFybG93XFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuLm1vZGFsICNtYWluLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nOiAwO1xcbiAgbWF4LXdpZHRoOiA3NSU7XFxuICBtaW4taGVpZ2h0OiA0OXJlbTtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5tb2RhbCAjbWFpbi1jb250YWluZXIgI21haW4ge1xcbiAgY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxufVxcbi5tb2RhbCAubW9kYWwtaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBlMDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBiZjtcXG59XFxuLm1vZGFsIC5uYXZpZ2F0aW9uLWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmNsb3NlLW1vZGFsLWJ0bi13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDEuMmVtO1xcbn1cXG4ubW9kYWwgLmNsb3NlLW1vZGFsLWJ0biB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1zaXplOiAxLjZlbTtcXG59XFxuLm1vZGFsIC5jbG9zZS1tb2RhbC1idG46aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbn1cXG4ubW9kYWwgLm1vZGFsLW5hdi1saW5rcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBmb250LXNpemU6IDIycHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm1vZGFsIC5tb2RhbC1uYXYtbGluayB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tdG9wOiAwLjVlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG4ubW9kYWwgLm1vZGFsLW5hdi1saW5rOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLWhlYWRpbmcge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLW5hbWUge1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXRpdGxlIHtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tcm9sZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXJvbGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1yZXNvdXJjZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXJvbGUtaW1hZ2Uge1xcbiAgaGVpZ2h0OiAzLjVyZW07XFxuICB3aWR0aDogMy41cmVtO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXJlc291cmNlLWltYWdlIHtcXG4gIGhlaWdodDogMy41cmVtO1xcbiAgd2lkdGg6IDMuNXJlbTtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1yb2xlLW5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1yZXNvdXJjZS1uYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tbWFpbi1pbmZvIHtcXG4gIHBhZGRpbmc6IDEuOHJlbTtcXG4gIG1heC13aWR0aDogMzRyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogbGFzdCBiYXNlbGluZTtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xcbiAgZnJvbSB7XFxuICAgIHRvcDogLTMwMHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0b3A6IDA7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XFxuICBmcm9tIHtcXG4gICAgdG9wOiAtMzAwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICB0byB7XFxuICAgIHRvcDogMDtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuLm1vZGFsIC5sb3JlLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwZTA7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbn1cXG4ubW9kYWwgLnN1YmhlYWRpbmcge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMC40ZW07XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tb2RhbCAuYWJpbGl0aWVzLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwZTA7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgd2lkdGg6IDI4ZW07XFxufVxcbi5tb2RhbCAuYWJpbGl0aWVzLWhlYWRpbmcge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmFiaWxpdHktaW1ncyB7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcbi5tb2RhbCAuYWJpbGl0eS1kZXNjcmlwdGlvbiB7XFxuICBtYXJnaW4tdG9wOiAwLjVlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLWRldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tZXh0cmEtaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLm1vZGFsIC5hYmlsaXR5LWluZm8ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLm1vZGFsIC5hYmlsaXR5LWluZm8uYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ubW9kYWwgLnNwZWxsLWltZyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDAgMC41cmVtO1xcbiAgaGVpZ2h0OiAzLjNyZW07XFxuICB3aWR0aDogMy4zcmVtO1xcbn1cXG4ubW9kYWwgLnNwZWxsLWltZy5jbGlja2VkIHtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBib3JkZXItd2lkdGg6IDRweDtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi10aXBzLXNlY3Rpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMGUwO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC42ZW07XFxuICBsaW5lLWhlaWdodDogMS40O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XFxuICBtYXgtd2lkdGg6IDM0cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXRpcHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tdGlwIHtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuLm1vZGFsICNzdGF0cy1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMDtcXG4gIG1heC13aWR0aDogNzUlO1xcbiAgbWluLWhlaWdodDogNDlyZW07XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5tb2RhbCAjc3RhdHMtY29udGFpbmVyICNzdGF0cyB7XFxuICBjb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1zdGF0cy1vdmVydmlldyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBtYXJnaW4tdG9wOiAwLjVlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbiAgbWF4LXdpZHRoOiAyNXJlbTtcXG4gIG1pbi13aWR0aDogMjByZW07XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcbi5tb2RhbCAud2luLXJhdGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5tb2RhbCAucGljay1yYXRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ubW9kYWwgLmxhbmUtaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5tb2RhbCAucGljay1yYXRlLXZhbHVlIHtcXG4gIG1hcmdpbi10b3A6IDAuNGVtO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbn1cXG4ubW9kYWwgLndpbi1yYXRlLXZhbHVlIHtcXG4gIG1hcmdpbi10b3A6IDAuNGVtO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbn1cXG4ubW9kYWwgLmxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1kYW1hZ2UtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBlMDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBtYXgtaGVpZ2h0OiAxNy41cmVtO1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcbi5tb2RhbCAuZGFtYWdlLWhlYWRpbmcge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmNpcmN1bGFyLWNoYXJ0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1heC1oZWlnaHQ6IDE0ZW07XFxufVxcbi5tb2RhbCAuY2lyY2xlIHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2Utd2lkdGg6IDIuMjtcXG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcXG4gIGFuaW1hdGlvbjogcHJvZ3Jlc3MgMXMgZWFzZS1vdXQgZm9yd2FyZHM7XFxufVxcbi5tb2RhbCAjbWFnaWMtZGFtYWdlLXN0cm9rZSB7XFxuICBzdHJva2U6ICMzNWE3ZmY7XFxufVxcbi5tb2RhbCAjcGh5c2ljYWwtZGFtYWdlLXN0cm9rZSB7XFxuICBzdHJva2U6ICNmZjU5NjQ7XFxufVxcbi5tb2RhbCAjdHJ1ZS1kYW1hZ2Utc3Ryb2tlIHtcXG4gIHN0cm9rZTogI2ZmZTc0YztcXG59XFxuQGtleWZyYW1lcyBwcm9ncmVzcyB7XFxuICAwJSB7XFxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDAgMTAwO1xcbiAgfVxcbn1cXG4ubW9kYWwgLnRvdGFsLWRhbWFnZS10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogNHB4O1xcbiAgdGV4dC1hbmNob3I6IG1pZGRsZTtcXG4gIGZpbGw6IHdoaXRlO1xcbn1cXG4ubW9kYWwgLnRvdGFsLWRhbWFnZS1sYWJlbCB7XFxuICBmb250LXNpemU6IDNweDtcXG4gIHRleHQtYW5jaG9yOiBtaWRkbGU7XFxuICBmaWxsOiB2YXIoLS1kYXJrLWdvbGQpO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLW1haW4tc3RhdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLWl0ZW0tYnVpbGRzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBlMDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBtYXgtaGVpZ2h0OiAxNy41cmVtO1xcbn1cXG4ubW9kYWwgLmRhbWFnZS1zdGF0cy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5tb2RhbCAuZGFtYWdlLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1heC1oZWlnaHQ6IDkyJTtcXG4gIGhlaWdodDogOTIlO1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcbi5tb2RhbCAuZGFtYWdlLXR5cGUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcbi5tb2RhbCAuZGFtYWdlLXN0YXRzIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcbi5tb2RhbCAjcGh5c2ljYWwtZGFtYWdlLWxhYmVsIHtcXG4gIGNvbG9yOiAjZmY1OTY0O1xcbn1cXG4ubW9kYWwgI21hZ2ljLWRhbWFnZS1sYWJlbCB7XFxuICBjb2xvcjogIzM1YTdmZjtcXG59XFxuLm1vZGFsICN0cnVlLWRhbWFnZS1sYWJlbCB7XFxuICBjb2xvcjogI2ZmZTc0YztcXG59XFxuLm1vZGFsIC5pdGVtLWRldGFpbHMtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBlMDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMDtcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHdpZHRoOiA0MCU7XFxuICByaWdodDogMTBlbTtcXG4gIG1hcmdpbi1ib3R0b206IDMuNWVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubW9kYWwgLml0ZW0tbmFtZSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4ubW9kYWwgLm1haW4taXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbn1cXG4ubW9kYWwgLmNvc3QtbGFiZWwge1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4ubW9kYWwgLmNvbXBvbmVudC1pdGVtcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLm1vZGFsIC5jb21wb25lbnQtaXRlbS1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLm1vZGFsIC5jb3N0LWFtb3VudCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5tb2RhbCAuY29tcG9uZW50LWl0ZW0tY29zdC1sYWJlbCB7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5tb2RhbCAuY29tcG9uZW50LWl0ZW0tYW1vdW50IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLm1vZGFsIC5jb21wb25lbnQtaXRlbS1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwZTA7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjA7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ubW9kYWwgLml0ZW0tc2V0cy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXgtaGVpZ2h0OiA5MCU7XFxufVxcbi5tb2RhbCAuaXRlbS1zZXQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGJvcmRlci13aWR0aDogMnB4O1xcbiAgcGFkZGluZzogMC40ZW07XFxufVxcbi5tb2RhbCAubWFpbi1jb21wb25lbnQtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBlMDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYwNDAwODM7XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDBlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG59XFxuLm1vZGFsIC5pdGVtLWltZyB7XFxuICBtYXgtd2lkdGg6IDIuN2VtO1xcbiAgbWF4LWhlaWdodDogMi43ZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG59XFxuLm1vZGFsIC5jb21wb25lbnQtaXRlbS1pbWcge1xcbiAgbWF4LXdpZHRoOiAxLjhlbTtcXG4gIG1heC1oZWlnaHQ6IDEuOGVtO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLW1hdGNodXBzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBlMDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBtYXgtaGVpZ2h0OiAyNS4ycmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwIDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcbi5tb2RhbCAubWF0Y2h1cHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgbWF4LXdpZHRoOiAyNHJlbTtcXG59XFxuLm1vZGFsIC5tYXRjaHVwLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNjFhO1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBtYXJnaW46IGF1dG8gMC41ZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxufVxcbi5tb2RhbCAubWF0Y2h1cC1pbmZvOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE2MWFjOTtcXG59XFxuLm1vZGFsIC5tYXRjaHVwLXN0YXRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgXFxcIkFwcGxlIFNEIEdvdGhpYyBOZW9cXFwiLCBBcHBsZUdvdGhpYywgRG90dW0sIEFyaWFsLCBUYWhvbWE7XFxufVxcbi5tb2RhbCAuZW5lbXktY2hhbXBpb24taW1nIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG1heC1oZWlnaHQ6IDNlbTtcXG4gIG1heC13aWR0aDogM2VtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcbi5tb2RhbCAud2lucmF0ZS1hZ2FpbnN0LXBlcmNlbnRhZ2UuYmx1ZSB7XFxuICBjb2xvcjogIzM1YTdmZjtcXG59XFxuLm1vZGFsIC53aW5yYXRlLWFnYWluc3QtcGVyY2VudGFnZS5yZWQge1xcbiAgY29sb3I6ICNmZjU5NjQ7XFxufVxcbi5tb2RhbCAjc2tpbnMtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXgtd2lkdGg6IDc1JTtcXG4gIG1pbi1oZWlnaHQ6IDQ5cmVtO1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWluLWhlaWdodDogMDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWF4LXdpZHRoOiA5OSU7XFxuICB3aWR0aDogOTklO1xcbn1cXG4ubW9kYWwgI3NraW5zLWNvbnRhaW5lciAubmF2aWdhdGlvbi1iYXIge1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IHZhcigtLWRhcmstZ29sZCk7XFxufVxcbi5tb2RhbCAjc2tpbnMtY29udGFpbmVyICNza2lucyB7XFxuICBjb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG59XFxuLm1vZGFsICNza2lucy1jb250YWluZXIgLm1vZGFsLWhlYWRlciB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4ubW9kYWwgLnNraW4taW1hZ2UtY29udGFpbmVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubW9kYWwgLnNraW4taW1hZ2UtY29udGFpbmVyLnNob3duIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4ubW9kYWwgLnNraW4taW1hZ2Uge1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubW9kYWwgLnNraW4tbmFtZSB7XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuLm1vZGFsICNza2lucy1jb250YWluZXIgLmNoYW1waW9uLWhlYWRpbmcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmltZy1zY3JvbGwtYXJyb3cge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuLm1vZGFsIC5pbWctc2Nyb2xsLWFycm93OmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTEyMHB4KSB7XFxuICAubW9kYWwgLmNvbXBvbmVudC1pdGVtLWltZyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAubW9kYWwgLml0ZW0tc2V0cy1jb250YWluZXIge1xcbiAgICBtaW4taGVpZ2h0OiA4MCU7XFxuICB9XFxuICAubW9kYWwgLml0ZW0tZGV0YWlscy1jb250YWluZXIge1xcbiAgICBtaW4td2lkdGg6IDcwJTtcXG4gICAgcmlnaHQ6IC02ZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjUwcHgpIHtcXG4gIC5tb2RhbCAuaXRlbS1pbWcge1xcbiAgICBtYXgtaGVpZ2h0OiAyLjJyZW07XFxuICAgIG1heC13aWR0aDogMi4ycmVtO1xcbiAgfVxcbiAgLm1vZGFsIC5jaGFtcGlvbi1kZXRhaWxzIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgfVxcbiAgLm1vZGFsIC5hYmlsaXRpZXMtY29udGFpbmVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgbWF4LXdpZHRoOiAzMXJlbTtcXG4gIH1cXG4gIC5tb2RhbCAubG9yZS1jb250YWluZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuICAubW9kYWwgI21haW4tY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiA3NnJlbTtcXG4gIH1cXG4gIC5tb2RhbCAuaXRlbS1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgIG1pbi13aWR0aDogNzAlO1xcbiAgICByaWdodDogLTZlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICAubW9kYWwgLml0ZW0tc2V0cy1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcbiAgLm1vZGFsIC5pdGVtLXNldC1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLm1vZGFsIC5tYXRjaHVwcyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAubW9kYWwgLmNoYW1waW9uLW1hdGNodXBzIHtcXG4gICAgbWF4LWhlaWdodDogMjguMnJlbTtcXG4gIH1cXG4gIC5tb2RhbCAubWF0Y2h1cC1pbmZvIHtcXG4gICAgbWFyZ2luOiAwLjJlbSBhdXRvO1xcbiAgfVxcbiAgLm1vZGFsICNtYWluLWNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG4gIC5tb2RhbCAjc3RhdHMtY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiA2M3JlbTtcXG4gIH1cXG4gIC5tb2RhbCAuaXRlbS1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgIHJpZ2h0OiAtMWVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogODQwcHgpIHtcXG4gIC5tb2RhbCAuZGFtYWdlLWluZm8ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgfVxcbiAgLm1vZGFsIC5nYW1lcy1wbGF5ZWQtYWdhaW5zdCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAubW9kYWwgLmRhbWFnZS1zdGF0cy1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTYwcHgpIHtcXG4gIC5tb2RhbCAuY2hhbXBpb24tbWFpbi1zdGF0cyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAubW9kYWwgLml0ZW0tc2V0LWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB9XFxuICAubW9kYWwgLml0ZW0tc2V0cy1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLm1vZGFsIC5jaGFtcGlvbi1kYW1hZ2UtY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgLm1vZGFsIC5kYW1hZ2Utc3RhdHMtaW5mbyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAubW9kYWwgLmRhbWFnZS1pbmZvIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICB9XFxuICAubW9kYWwgLmRhbWFnZS10eXBlLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMC4yZW0gYXV0bztcXG4gIH1cXG4gIC5tb2RhbCAuY2lyY3VsYXItY2hhcnQge1xcbiAgICBtYXgtaGVpZ2h0OiAxOTVweDtcXG4gICAgbWF4LXdpZHRoOiA4MCU7XFxuICB9XFxuICAubW9kYWwgLmRhbWFnZS1zdGF0cy1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLm1vZGFsIC5jaGFtcGlvbi1yb2xlIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xcbiAgfVxcbiAgLm1vZGFsIC5jaGFtcGlvbi1yZXNvdXJjZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcXG4gIH1cXG4gIC5tb2RhbCAuY2hhbXBpb24tcm9sZXMge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICB9XFxuICAubW9kYWwgLnNwZWxsLWltZyB7XFxuICAgIGhlaWdodDogMi44ZW07XFxuICAgIHdpZHRoOiAyLjhlbTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgfVxcbiAgLm1vZGFsIC5pdGVtLWRldGFpbHMtY29udGFpbmVyIHtcXG4gICAgcmlnaHQ6IDJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDQxNHB4KSB7XFxuICAubW9kYWwgLmNoYW1waW9uLXN0YXRzLW92ZXJ2aWV3IHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBtaW4td2lkdGg6IDE3cmVtO1xcbiAgfVxcbiAgLm1vZGFsIC5jaGFtcGlvbi1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcbiAgLm1vZGFsIC5tb2RhbC1uYXYtbGlua3Mge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICB9XFxuICAubW9kYWwgLmNsb3NlLW1vZGFsLWJ0bi13cmFwcGVyIHtcXG4gICAgbGVmdDogMC43ZW07XFxuICB9XFxuICAubW9kYWwgLmNsb3NlLW1vZGFsLWJ0biB7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMzAwcHgpIHtcXG4gIC5tb2RhbCAjc2tpbnMtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXgtd2lkdGg6IDcwJTtcXG4gICAgbWluLWhlaWdodDogYXV0bztcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDE5NTBweCkge1xcbiAgLm1vZGFsICNza2lucy1jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDUwJTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlc2hlZXRzL21vZGFscy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBOERBO0VBQ0Usa0RBQUE7QUEzREY7O0FBOERBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGlDQUFBO0FBM0RGO0FBNkRFO0VBakNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSw0RUFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwwQkFBQTtF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O0VBMkNFO0lBQ0UsaUJBQUE7SUFDQSxjQUFBO0VBekNKO0VBNENFO0lBQ0Usc0JBQUE7RUExQ0o7RUE2Q0U7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0VBM0NKO0VBOENFO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtFQTVDSjtFQStDRTtJQUNFLGVBQUE7RUE3Q0o7RUFnREU7SUFDRSxhQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7RUE5Q0o7RUFpREU7SUFDRSxVQUFBO0VBL0NKO0FBQ0Y7QUFrREU7RUFDRTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQWhESjtFQW1ERTtJQUNFLGVBQUE7RUFqREo7RUFvREU7SUFDRSxlQUFBO0VBbERKO0VBcURFO0lBQ0UsV0FBQTtFQW5ESjtFQXNERTtJQUNFLGdCQUFBO0VBcERKO0FBQ0Y7QUF1REU7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0VBckRKO0FBQ0Y7QUF3REU7RUFDRTtJQUNFLGNBQUE7RUF0REo7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1yYXNpbi1ibGFjazogIzFkMWUyYztcXG4gIC0tZGFyay1nb2xkOiAjOTI3NTQzO1xcbiAgLS1saWdodC1nb2xkOiAjYzdhYjZlO1xcbn1cXG5cXG5AbWl4aW4gY29udGFpbmVyQmFja2dyb3VuZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwZTA7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbn1cXG5cXG5AbWl4aW4gc3ViSGVhZGluZ1N0eWxlIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDAuNGVtO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5AbWl4aW4gaWNvblNpemUge1xcbiAgaGVpZ2h0OiAzLjVyZW07XFxuICB3aWR0aDogMy41cmVtO1xcbn1cXG5cXG5AbWl4aW4gaWNvblRleHQge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuQG1peGluIGljb25Db250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXG59XFxuXFxuQG1peGluIHNtYWxsTWFyZ2luIHtcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcblxcbkBtaXhpbiBtb2RhbENvbnRlbnRDb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMDtcXG4gIG1heC13aWR0aDogNzUlO1xcbiAgbWluLWhlaWdodDogNDlyZW07XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgcGFkZGluZzogMnJlbSAwO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC40KTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmFybG93XFxcIiwgc2Fucy1zZXJpZjtcXG5cXG4gICNtYWluLWNvbnRhaW5lciB7XFxuICAgIEBpbmNsdWRlIG1vZGFsQ29udGVudENvbnRhaW5lcigpO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG5cXG4gICAgI21haW4ge1xcbiAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgICB9XFxuICB9XFxuXFxuICAubW9kYWwtaGVhZGVyIHtcXG4gICAgQGluY2x1ZGUgY29udGFpbmVyQmFja2dyb3VuZCgpO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwYmY7XFxuICB9XFxuXFxuICAubmF2aWdhdGlvbi1iYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmNsb3NlLW1vZGFsLWJ0bi13cmFwcGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAxLjJlbTtcXG4gIH1cXG5cXG4gIC5jbG9zZS1tb2RhbC1idG4ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGZvbnQtc2l6ZTogMS42ZW07XFxuICB9ICBcXG5cXG4gIC5jbG9zZS1tb2RhbC1idG46aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICB9XFxuXFxuICAubW9kYWwtbmF2LWxpbmtzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAubW9kYWwtbmF2LWxpbmsge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIEBpbmNsdWRlIHNtYWxsTWFyZ2luKCk7XFxuICB9XFxuXFxuICAubW9kYWwtbmF2LWxpbms6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1oZWFkaW5nIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLW5hbWUge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICB9XFxuXFxuICAuY2hhbXBpb24tdGl0bGUge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgQGluY2x1ZGUgc21hbGxNYXJnaW4oKTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1yb2xlcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXJvbGUge1xcbiAgICBAaW5jbHVkZSBpY29uQ29udGFpbmVyKCk7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tcmVzb3VyY2Uge1xcbiAgICBAaW5jbHVkZSBpY29uQ29udGFpbmVyKCk7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tcm9sZS1pbWFnZSB7XFxuICAgIEBpbmNsdWRlIGljb25TaXplKCk7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tcmVzb3VyY2UtaW1hZ2Uge1xcbiAgICBAaW5jbHVkZSBpY29uU2l6ZSgpO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXJvbGUtbmFtZSB7XFxuICAgIEBpbmNsdWRlIGljb25UZXh0KCk7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tcmVzb3VyY2UtbmFtZSB7XFxuICAgIEBpbmNsdWRlIGljb25UZXh0KCk7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tbWFpbi1pbmZvIHtcXG4gICAgcGFkZGluZzogMS44cmVtO1xcbiAgICBtYXgtd2lkdGg6IDM0cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxhc3QgYmFzZWxpbmU7XFxuICB9XFxuXFxuICBALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XFxuICAgIGZyb20ge1xcbiAgICAgIHRvcDogLTMwMHB4O1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xcbiAgICBmcm9tIHtcXG4gICAgICB0b3A6IC0zMDBweDtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLmxvcmUtY29udGFpbmVyIHtcXG4gICAgQGluY2x1ZGUgY29udGFpbmVyQmFja2dyb3VuZCgpO1xcbiAgfVxcblxcbiAgLnN1YmhlYWRpbmcge1xcbiAgICBAaW5jbHVkZSBzdWJIZWFkaW5nU3R5bGUoKTtcXG4gIH1cXG5cXG4gIC5hYmlsaXRpZXMtY29udGFpbmVyIHtcXG4gICAgQGluY2x1ZGUgY29udGFpbmVyQmFja2dyb3VuZCgpO1xcbiAgICB3aWR0aDogMjhlbTtcXG4gIH1cXG5cXG4gIC5hYmlsaXRpZXMtaGVhZGluZyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5hYmlsaXR5LWltZ3Mge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgfVxcblxcbiAgLmFiaWxpdHktZGVzY3JpcHRpb24ge1xcbiAgICBAaW5jbHVkZSBzbWFsbE1hcmdpbigpO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLWRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1leHRyYS1pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5hYmlsaXR5LWluZm8ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmFiaWxpdHktaW5mby5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLnNwZWxsLWltZyB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luOiAwIDAuNXJlbTtcXG4gICAgaGVpZ2h0OiAzLjNyZW07XFxuICAgIHdpZHRoOiAzLjNyZW07XFxuICB9XFxuXFxuICAuc3BlbGwtaW1nLmNsaWNrZWQge1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICAgIGJvcmRlci13aWR0aDogNHB4O1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXRpcHMtc2VjdGlvbiB7XFxuICAgIEBpbmNsdWRlIGNvbnRhaW5lckJhY2tncm91bmQoKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG4gICAgbWF4LXdpZHRoOiAzNHJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXRpcHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXRpcCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gIH1cXG5cXG4gICNzdGF0cy1jb250YWluZXIge1xcbiAgICBAaW5jbHVkZSBtb2RhbENvbnRlbnRDb250YWluZXIoKTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG5cXG4gICAgI3N0YXRzIHtcXG4gICAgICBjb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLmNoYW1waW9uLXN0YXRzLW92ZXJ2aWV3IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIEBpbmNsdWRlIHNtYWxsTWFyZ2luKCk7XFxuICAgIG1heC13aWR0aDogMjVyZW07XFxuICAgIG1pbi13aWR0aDogMjByZW07XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gIH1cXG5cXG4gIC53aW4tcmF0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAucGljay1yYXRlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5sYW5lLWluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLnBpY2stcmF0ZS12YWx1ZSB7XFxuICAgIG1hcmdpbi10b3A6IDAuNGVtO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICB9XFxuXFxuICAud2luLXJhdGUtdmFsdWUge1xcbiAgICBtYXJnaW4tdG9wOiAwLjRlbTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgfVxcblxcbiAgLmxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLWRhbWFnZS1jb250YWluZXIge1xcbiAgICBAaW5jbHVkZSBjb250YWluZXJCYWNrZ3JvdW5kKCk7XFxuICAgIG1heC1oZWlnaHQ6IDE3LjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgfVxcblxcbiAgLmRhbWFnZS1oZWFkaW5nIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmNpcmN1bGFyLWNoYXJ0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWF4LWhlaWdodDogMTRlbTtcXG4gIH1cXG5cXG4gIC5jaXJjbGUge1xcbiAgICBmaWxsOiBub25lO1xcbiAgICBzdHJva2Utd2lkdGg6IDIuMjtcXG4gICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xcbiAgICBhbmltYXRpb246IHByb2dyZXNzIDFzIGVhc2Utb3V0IGZvcndhcmRzO1xcbiAgfVxcblxcbiAgI21hZ2ljLWRhbWFnZS1zdHJva2Uge1xcbiAgICBzdHJva2U6ICMzNWE3ZmY7XFxuICB9XFxuXFxuICAjcGh5c2ljYWwtZGFtYWdlLXN0cm9rZSB7XFxuICAgIHN0cm9rZTogI2ZmNTk2NDtcXG4gIH1cXG5cXG4gICN0cnVlLWRhbWFnZS1zdHJva2Uge1xcbiAgICBzdHJva2U6ICNmZmU3NGM7XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIHByb2dyZXNzIHtcXG4gICAgMCUge1xcbiAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDAgMTAwO1xcbiAgICB9XFxuICB9XFxuXFxuICAudG90YWwtZGFtYWdlLXRleHQge1xcbiAgICBmb250LXNpemU6IDRweDtcXG4gICAgdGV4dC1hbmNob3I6IG1pZGRsZTtcXG4gICAgZmlsbDogd2hpdGU7XFxuICB9XFxuXFxuICAudG90YWwtZGFtYWdlLWxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAzcHg7XFxuICAgIHRleHQtYW5jaG9yOiBtaWRkbGU7XFxuICAgIGZpbGw6IHZhcigtLWRhcmstZ29sZCk7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tbWFpbi1zdGF0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLWl0ZW0tYnVpbGRzIHtcXG4gICAgQGluY2x1ZGUgY29udGFpbmVyQmFja2dyb3VuZCgpO1xcbiAgICBtYXgtaGVpZ2h0OiAxNy41cmVtO1xcbiAgfVxcblxcbiAgLmRhbWFnZS1zdGF0cy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5kYW1hZ2UtaW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1heC1oZWlnaHQ6IDkyJTtcXG4gICAgaGVpZ2h0OiA5MiU7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgfVxcblxcbiAgLmRhbWFnZS10eXBlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgfVxcblxcbiAgLmRhbWFnZS1zdGF0cyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB9XFxuXFxuICAjcGh5c2ljYWwtZGFtYWdlLWxhYmVsIHtcXG4gICAgY29sb3I6ICNmZjU5NjQ7XFxuICB9XFxuXFxuICAjbWFnaWMtZGFtYWdlLWxhYmVsIHtcXG4gICAgY29sb3I6ICMzNWE3ZmY7XFxuICB9XFxuXFxuICAjdHJ1ZS1kYW1hZ2UtbGFiZWwge1xcbiAgICBjb2xvcjogI2ZmZTc0YztcXG4gIH1cXG5cXG4gIC5pdGVtLWRldGFpbHMtY29udGFpbmVyIHtcXG4gICAgQGluY2x1ZGUgY29udGFpbmVyQmFja2dyb3VuZCgpO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgcmlnaHQ6IDEwZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDMuNWVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuaXRlbS1uYW1lIHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgfVxcblxcbiAgLm1haW4taXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gIH1cXG5cXG4gIC5jb3N0LWxhYmVsIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICB9XFxuXFxuICAuY29tcG9uZW50LWl0ZW1zLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxuXFxuICAuY29tcG9uZW50LWl0ZW0tbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gIH1cXG5cXG4gIC5jb3N0LWFtb3VudCB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gIH1cXG5cXG4gIC5jb21wb25lbnQtaXRlbS1jb3N0LWxhYmVsIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICB9XFxuXFxuICAuY29tcG9uZW50LWl0ZW0tYW1vdW50IHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgfVxcblxcbiAgLmNvbXBvbmVudC1pdGVtLWRldGFpbHMtY29udGFpbmVyIHtcXG4gICAgQGluY2x1ZGUgY29udGFpbmVyQmFja2dyb3VuZCgpO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5pdGVtLXNldHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1heC1oZWlnaHQ6IDkwJTtcXG4gIH1cXG5cXG4gIC5pdGVtLXNldC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcbiAgICBwYWRkaW5nOiAwLjRlbTtcXG4gIH1cXG5cXG4gIC5tYWluLWNvbXBvbmVudC1jb250YWluZXIge1xcbiAgICBAaW5jbHVkZSBjb250YWluZXJCYWNrZ3JvdW5kKCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjA0MDA4MztcXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogMGVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgfVxcblxcbiAgLml0ZW0taW1nIHtcXG4gICAgbWF4LXdpZHRoOiAyLjdlbTtcXG4gICAgbWF4LWhlaWdodDogMi43ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gICAgLy9wYWRkaW5nOiAxZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xcbiAgfVxcblxcbiAgLmNvbXBvbmVudC1pdGVtLWltZyB7XFxuICAgIG1heC13aWR0aDogMS44ZW07XFxuICAgIG1heC1oZWlnaHQ6IDEuOGVtO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLW1hdGNodXBzIHtcXG4gICAgQGluY2x1ZGUgY29udGFpbmVyQmFja2dyb3VuZCgpO1xcbiAgICBtYXgtaGVpZ2h0OiAyNS4ycmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMCAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIH1cXG5cXG4gIC5tYXRjaHVwcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBtYXgtd2lkdGg6IDI0cmVtO1xcbiAgfVxcblxcbiAgLm1hdGNodXAtaW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzE2MWE7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBtYXJnaW46IGF1dG8gMC41ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIH1cXG5cXG4gIC5tYXRjaHVwLWluZm86aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNjFhYzk7XFxuICB9XFxuXFxuICAubWF0Y2h1cC1zdGF0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgXFxcIkFwcGxlIFNEIEdvdGhpYyBOZW9cXFwiLCBBcHBsZUdvdGhpYyxcXG4gICAgICBEb3R1bSwgQXJpYWwsIFRhaG9tYTtcXG4gIH1cXG5cXG4gIC5lbmVteS1jaGFtcGlvbi1pbWcge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG1heC1oZWlnaHQ6IDNlbTtcXG4gICAgbWF4LXdpZHRoOiAzZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbiAgfVxcblxcbiAgLndpbnJhdGUtYWdhaW5zdC1wZXJjZW50YWdlLmJsdWUge1xcbiAgICBjb2xvcjogIzM1YTdmZjtcXG4gIH1cXG5cXG4gIC53aW5yYXRlLWFnYWluc3QtcGVyY2VudGFnZS5yZWQge1xcbiAgICBjb2xvcjogI2ZmNTk2NDtcXG4gIH1cXG5cXG4gICNza2lucy1jb250YWluZXIge1xcbiAgICBAaW5jbHVkZSBtb2RhbENvbnRlbnRDb250YWluZXIoKTtcXG4gICAgZGlzcGxheTpub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1pbi1oZWlnaHQ6IDA7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDk5JTtcXG4gICAgd2lkdGg6IDk5JTtcXG5cXG4gICAgLm5hdmlnYXRpb24tYmFyIHtcXG4gICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggdmFyKC0tZGFyay1nb2xkKTtcXG4gICAgfVxcblxcbiAgICAjc2tpbnMge1xcbiAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpXFxuICAgIH1cXG4gIH1cXG5cXG4gICNza2lucy1jb250YWluZXIgLm1vZGFsLWhlYWRlciB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICB9XFxuXFxuICAuc2tpbi1pbWFnZS1jb250YWluZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAuc2tpbi1pbWFnZS1jb250YWluZXIuc2hvd24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG4gIC5za2luLWltYWdlIHtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5za2luLW5hbWUge1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gIH1cXG5cXG4gICNza2lucy1jb250YWluZXIgLmNoYW1waW9uLWhlYWRpbmcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5pbWctc2Nyb2xsLWFycm93IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgfVxcblxcbiAgLmltZy1zY3JvbGwtYXJyb3c6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIH1cXG5cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMTIwcHgpIHtcXG4gICAgLmNvbXBvbmVudC1pdGVtLWltZyB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAuaXRlbS1zZXRzLWNvbnRhaW5lciB7XFxuICAgICAgbWluLWhlaWdodDogODAlO1xcbiAgICB9XFxuXFxuICAgIC5pdGVtLWRldGFpbHMtY29udGFpbmVyIHtcXG4gICAgICBtaW4td2lkdGg6IDcwJTtcXG4gICAgICByaWdodDogLTZlbTtcXG4gICAgfVxcbiAgfVxcblxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyNTBweCkge1xcbiAgICAuaXRlbS1pbWcge1xcbiAgICAgIG1heC1oZWlnaHQ6IDIuMnJlbTtcXG4gICAgICBtYXgtd2lkdGg6IDIuMnJlbTtcXG4gICAgfVxcblxcbiAgICAuY2hhbXBpb24tZGV0YWlscyB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgICB9XFxuXFxuICAgIC5hYmlsaXRpZXMtY29udGFpbmVyIHtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgd2lkdGg6IGF1dG87XFxuICAgICAgbWF4LXdpZHRoOiAzMXJlbTtcXG4gICAgfVxcblxcbiAgICAubG9yZS1jb250YWluZXIge1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAjbWFpbi1jb250YWluZXIge1xcbiAgICAgIGhlaWdodDogNzZyZW07XFxuICAgIH1cXG5cXG4gICAgLml0ZW0tZGV0YWlscy1jb250YWluZXIge1xcbiAgICAgIG1pbi13aWR0aDogNzAlO1xcbiAgICAgIHJpZ2h0OiAtNmVtO1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gICAgLml0ZW0tc2V0cy1jb250YWluZXIge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIH1cXG5cXG4gICAgLml0ZW0tc2V0LWNvbnRhaW5lciB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAubWF0Y2h1cHMge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgLmNoYW1waW9uLW1hdGNodXBzIHtcXG4gICAgICBtYXgtaGVpZ2h0OiAyOC4ycmVtO1xcbiAgICB9XFxuXFxuICAgIC5tYXRjaHVwLWluZm8ge1xcbiAgICAgIG1hcmdpbjogMC4yZW0gYXV0bztcXG4gICAgfVxcblxcbiAgICAjbWFpbi1jb250YWluZXIge1xcbiAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAjc3RhdHMtY29udGFpbmVyIHtcXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgICAgbWluLWhlaWdodDogNjNyZW07XFxuICAgIH1cXG5cXG4gICAgLml0ZW0tZGV0YWlscy1jb250YWluZXIge1xcbiAgICAgIHJpZ2h0OiAtMWVtO1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgKG1heC13aWR0aDogODQwcHgpIHtcXG4gICAgLmRhbWFnZS1pbmZvIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgfVxcblxcbiAgICAuZ2FtZXMtcGxheWVkLWFnYWluc3Qge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLmRhbWFnZS1zdGF0cy1jb250YWluZXIge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NjBweCkge1xcbiAgICAuY2hhbXBpb24tbWFpbi1zdGF0cyB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAuaXRlbS1zZXQtY29udGFpbmVyIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICB9XFxuXFxuICAgIC5pdGVtLXNldHMtY29udGFpbmVyIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5jaGFtcGlvbi1kYW1hZ2UtY29udGFpbmVyIHtcXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAuZGFtYWdlLXN0YXRzLWluZm8ge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgLmRhbWFnZS1pbmZvIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICB9XFxuXFxuICAgIC5kYW1hZ2UtdHlwZS1jb250YWluZXIge1xcbiAgICAgIG1hcmdpbjogMC4yZW0gYXV0bztcXG4gICAgfVxcblxcbiAgICAuY2lyY3VsYXItY2hhcnQge1xcbiAgICAgIG1heC1oZWlnaHQ6IDE5NXB4O1xcbiAgICAgIG1heC13aWR0aDogODAlO1xcbiAgICB9XFxuXFxuICAgIC5kYW1hZ2Utc3RhdHMtY29udGFpbmVyIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5jaGFtcGlvbi1yb2xlIHtcXG4gICAgICBtYXJnaW4tbGVmdDogMC41ZW07XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcXG4gICAgfVxcblxcbiAgICAuY2hhbXBpb24tcmVzb3VyY2Uge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xcbiAgICB9XFxuXFxuICAgIC5jaGFtcGlvbi1yb2xlcyB7XFxuICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB9XFxuXFxuICAgIC5zcGVsbC1pbWcge1xcbiAgICAgIGhlaWdodDogMi44ZW07XFxuICAgICAgd2lkdGg6IDIuOGVtO1xcbiAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgfVxcblxcbiAgICAuaXRlbS1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgICAgcmlnaHQ6IDJlbTtcXG4gICAgfVxcbiAgfVxcblxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQxNHB4KSB7XFxuICAgIC5jaGFtcGlvbi1zdGF0cy1vdmVydmlldyB7XFxuICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgIG1pbi13aWR0aDogMTdyZW07XFxuICAgIH1cXG5cXG4gICAgLmNoYW1waW9uLW5hbWUge1xcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgfVxcblxcbiAgICAubW9kYWwtbmF2LWxpbmtzIHtcXG4gICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIH1cXG5cXG4gICAgLmNsb3NlLW1vZGFsLWJ0bi13cmFwcGVyIHtcXG4gICAgICBsZWZ0OiAwLjdlbTtcXG4gICAgfVxcblxcbiAgICAuY2xvc2UtbW9kYWwtYnRuIHtcXG4gICAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgKG1pbi13aWR0aDogMTMwMHB4KSB7XFxuICAgICNza2lucy1jb250YWluZXIge1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICBtYXgtd2lkdGg6IDcwJTtcXG4gICAgICBtaW4taGVpZ2h0OiBhdXRvO1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgKG1pbi13aWR0aDogMTk1MHB4KSB7XFxuICAgICNza2lucy1jb250YWluZXIge1xcbiAgICAgIG1heC13aWR0aDogNTAlO1xcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBkZWZpbmUoSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIGRlZmluZShHcCwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gIGRlZmluZShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvbik7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgZGVmaW5lKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlLCBhc3luY0l0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIGRlZmluZShHcCwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcblxuICBkZWZpbmUoR3AsIFwidG9TdHJpbmdcIiwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIGluIG1vZGVybiBlbmdpbmVzXG4gIC8vIHdlIGNhbiBleHBsaWNpdGx5IGFjY2VzcyBnbG9iYWxUaGlzLiBJbiBvbGRlciBlbmdpbmVzIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gXCJvYmplY3RcIikge1xuICAgIGdsb2JhbFRoaXMucmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbiAgfSBlbHNlIHtcbiAgICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xuICB9XG59XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zyb250cGFnZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZnJvbnRwYWdlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFscy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9kYWxzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwidmFyIG1hcCA9IHtcblx0XCIuL0Fzc2Fzc2luLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvQXNzYXNzaW4ucG5nXCIsXG5cdFwiLi9CbG9vZCBXZWxsLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvQmxvb2QgV2VsbC5wbmdcIixcblx0XCIuL0JvdHRvbS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0JvdHRvbS5wbmdcIixcblx0XCIuL0NvbnRyb2xsZXIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9Db250cm9sbGVyLnBuZ1wiLFxuXHRcIi4vQ291cmFnZS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0NvdXJhZ2UucG5nXCIsXG5cdFwiLi9Dcmltc29uIFJ1c2gucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9Dcmltc29uIFJ1c2gucG5nXCIsXG5cdFwiLi9FbmVyZ3kucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9FbmVyZ3kucG5nXCIsXG5cdFwiLi9GaWdodGVyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvRmlnaHRlci5wbmdcIixcblx0XCIuL0Zsb3cucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9GbG93LnBuZ1wiLFxuXHRcIi4vRnVyeS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0Z1cnkucG5nXCIsXG5cdFwiLi9Hcml0LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvR3JpdC5wbmdcIixcblx0XCIuL0hlYXQucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9IZWF0LnBuZ1wiLFxuXHRcIi4vSnVuZ2xlLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvSnVuZ2xlLnBuZ1wiLFxuXHRcIi4vTWFnZS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL01hZ2UucG5nXCIsXG5cdFwiLi9NYW5hLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvTWFuYS5wbmdcIixcblx0XCIuL01hbmFsZXNzLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvTWFuYWxlc3MucG5nXCIsXG5cdFwiLi9NYXJrc21hbi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL01hcmtzbWFuLnBuZ1wiLFxuXHRcIi4vTWVsZWUucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9NZWxlZS5wbmdcIixcblx0XCIuL01pZGRsZS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL01pZGRsZS5wbmdcIixcblx0XCIuL1JhZ2UucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9SYWdlLnBuZ1wiLFxuXHRcIi4vUmFuZ2VkLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvUmFuZ2VkLnBuZ1wiLFxuXHRcIi4vU3BlY2lhbGlzdC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL1NwZWNpYWxpc3QucG5nXCIsXG5cdFwiLi9TdXBwb3J0LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvU3VwcG9ydC5wbmdcIixcblx0XCIuL1RhbmsucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9UYW5rLnBuZ1wiLFxuXHRcIi4vVG9wLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvVG9wLnBuZ1wiLFxuXHRcIi4vVXRpbGl0eS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL1V0aWxpdHkucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMgc3luYyBcXFxcLihwbmd8anBlP2d8c3ZnKSRcIjsiLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9zdHlsZXNoZWV0cy9mcm9udHBhZ2Uuc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGVzaGVldHMvbW9kYWxzLnNjc3MnO1xuaW1wb3J0IEVsZW1lbnRDcmVhdGlvbiBmcm9tICcuL2hlbHBlcnMvZWxlbWVudENyZWF0aW9uJztcbmltcG9ydCB7IGdldEFsbENoYW1waW9uRGV0YWlscyB9IGZyb20gJy4vY2hhbXBpb25EYXRhL2dldEFsbENoYW1waW9ucyc7XG5pbXBvcnQgU2VhcmNoYmFyQ29udHJvbGxlciBmcm9tICcuL2FwcENvbnRyb2wvc2VhcmNoYmFyQ29udHJvbGxlcic7XG5pbXBvcnQgYmFja2Ryb3BDaGFuZ2UgZnJvbSAnLi9hcHBDb250cm9sL2JhY2tkcm9wQ2hhbmdlSW50ZXJ2YWwnO1xuXG5jb25zdCBjcmVhdGVTZWFyY2hEcm9wZG93biA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgYWxsQ2hhbXBpb25zID0gYXdhaXQgZ2V0QWxsQ2hhbXBpb25EZXRhaWxzKCk7XG4gIGNvbnN0IGFsbENoYW1waW9uc0FycmF5ID0gT2JqZWN0LnZhbHVlcyhhbGxDaGFtcGlvbnMpO1xuXG4gIGNvbnN0IHNlYXJjaENvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VhcmNoLWNvbnRhaW5lcicpO1xuICBzZWFyY2hDb250YWluZXJzLmZvckVhY2goKHNlYXJjaENvbnRhaW5lcikgPT4ge1xuICAgIGNvbnN0IGF1dG9Db21wbGV0ZU5hbWVzID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcyhcbiAgICAgICdkaXYnLCAnYXV0by1jb21wbGV0ZS1uYW1lcycsIHNlYXJjaENvbnRhaW5lcixcbiAgICApO1xuICAgIGFsbENoYW1waW9uc0FycmF5LmZvckVhY2goKGNoYW1waW9uKSA9PiB7XG4gICAgICBjb25zdCBjaGFtcGlvbk5hbWUgPSBjaGFtcGlvbi5uYW1lO1xuICAgICAgY29uc3QgY2hhbXBpb25JZCA9IGNoYW1waW9uLmlkO1xuICAgICAgY29uc3QgYXV0b0NvbXBsZXRlTmFtZVdyYXBwZXIgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKFxuICAgICAgICAnZGl2JywgJ2F1dG8tY29tcGxldGUtbmFtZS13cmFwcGVyJywgYXV0b0NvbXBsZXRlTmFtZXMsXG4gICAgICApO1xuICAgICAgYXV0b0NvbXBsZXRlTmFtZVdyYXBwZXIudGFiSW5kZXggPSAnLTEnO1xuICAgICAgY29uc3QgYXV0b0NvbXBsZXRlTmFtZSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAgICdzcGFuJywgJ2F1dG8tY29tcGxldGUtbmFtZScsIGF1dG9Db21wbGV0ZU5hbWVXcmFwcGVyLFxuICAgICAgKTtcbiAgICAgIGF1dG9Db21wbGV0ZU5hbWUudGV4dENvbnRlbnQgPSBjaGFtcGlvbk5hbWU7XG4gICAgICBhdXRvQ29tcGxldGVOYW1lLmRhdGFzZXQuY2hhbXBpb25JZCA9IGNoYW1waW9uSWQ7XG4gICAgICBhdXRvQ29tcGxldGVOYW1lLmlkID0gY2hhbXBpb25OYW1lO1xuICAgIH0pO1xuICB9KTtcbn07XG5jb25zdCBkaXNwbGF5TnVtYmVyT2ZNYXRjaGVzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBkZXZVcmwgPSAnaHR0cDovLzEyNy4wLjAuMTo1NTAwL2Rpc3QvJztcbiAgY29uc3QgZGV2VXJsMiA9ICdodHRwOi8vMTI3LjAuMC4xOjU1MDAvZGlzdC9pbmRleC5odG1sJztcbiAgY29uc3QgcmVzcG9uc2UgPSAod2luZG93LmxvY2F0aW9uLmhyZWYgPT09IGRldlVybCB8fCB3aW5kb3cubG9jYXRpb24uaHJlZiA9PT0gZGV2VXJsMilcbiAgICA/IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvbWF0Y2hlcycsIHsgbW9kZTogJ2NvcnMnIH0pXG4gICAgOiBhd2FpdCBmZXRjaCgnbWF0Y2hlcycsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICBjb25zdCBtYXRjaENvdW50ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBjb25zdCBhcHBOYW1lQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwcC1uYW1lLWRpc3BsYXktY29udGFpbmVyJyk7XG4gIGNvbnN0IHRhZ2xpbmVDb250YWluZXIgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAndGFnbGluZS1jb250YWluZXInLCBhcHBOYW1lQ29udGFpbmVyKTtcbiAgY29uc3QgdGFnbGluZVN0YXJ0ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICd0YWdsaW5lLXN0YXJ0JywgdGFnbGluZUNvbnRhaW5lcik7XG4gIHRhZ2xpbmVTdGFydC50ZXh0Q29udGVudCA9ICdQcm92aWRpbmcgaW5mbyBhbmQgc3RhdHMgZnJvbSAnO1xuICBjb25zdCB0YWdsaW5lTWF0Y2hDb3VudCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAndGFnbGluZS1tYXRjaC1jb3VudCcsIHRhZ2xpbmVDb250YWluZXIpO1xuICB0YWdsaW5lTWF0Y2hDb3VudC50ZXh0Q29udGVudCA9IGAke01hdGguZmxvb3IobWF0Y2hDb3VudCl9YDtcbiAgY29uc3QgdGFnbGluZUVuZCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAndGFnbGluZS1lbmQnLCB0YWdsaW5lQ29udGFpbmVyKTtcbiAgdGFnbGluZUVuZC50ZXh0Q29udGVudCA9ICcgTGVhZ3VlIG9mIExlZ2VuZHMgbWF0Y2hlcyc7XG59O1xuXG5jb25zdCByZW5kZXJQYWdlID0gYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBkaXNwbGF5TnVtYmVyT2ZNYXRjaGVzKCk7XG4gIGF3YWl0IGNyZWF0ZVNlYXJjaERyb3Bkb3duKCk7XG4gIFNlYXJjaGJhckNvbnRyb2xsZXIuc2VhcmNoQ29udGFpbmVyTGlzdGVuZXJzKCk7XG59O1xuXG5yZW5kZXJQYWdlKCk7XG5iYWNrZHJvcENoYW5nZSgpO1xuIl0sIm5hbWVzIjpbImluZGV4Iiwic2V0SW50ZXJ2YWwiLCJiYWNrZHJvcHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjdXJyZW50QmFja2Ryb3AiLCJxdWVyeVNlbGVjdG9yIiwibGVuZ3RoIiwiY2xhc3NOYW1lIiwiQ2hhbXBpb25Nb2RhbENvbnRyb2xsZXIiLCJ0b2dnbGVBY3RpdmVBYmlsaXR5IiwiY2xpY2tlZEFiaWxpdHlJZCIsImFiaWxpdHlJbWFnZXMiLCJhYmlsaXR5SW5mb3MiLCJmb3JFYWNoIiwiaW1nIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiaW5mbyIsImNsaWNrZWRJbWFnZSIsImFjdGl2ZUFiaWxpdHkiLCJjaGFuZ2VNb2RhbFRlbXBsYXRlIiwiY2xpY2tlZE1vZGFsTmF2TGluayIsInRlbXBsYXRlcyIsInRlbXBsYXRlIiwidGVtcGxhdGVOYW1lIiwiaWQiLCJzdWJzdHJpbmciLCJpbmRleE9mIiwiY2hvc2VuVGVtcGxhdGUiLCJzdHlsZSIsImRpc3BsYXkiLCJoaWRkZW5UZW1wbGF0ZSIsImRpc3BheUl0ZW1EZXRhaWxzIiwiaG92ZXJlZEl0ZW1JbWFnZSIsIml0ZW1EZXRhaWxzIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiaGlkZUl0ZW1EZXRhaWxzIiwidW5ob3ZlcmVkSXRlbUltYWdlIiwidG9nZ2xlU2tpbkltYWdlcyIsImFycm93Q2xhc3NMaXN0Iiwic2tpbkltYWdlc0NvbnRhaW5lciIsImN1cnJlbnRTaG93bkltYWdlIiwic2tpbk5hbWUiLCJmaXJzdEltYWdlIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJsYXN0SW1hZ2UiLCJsYXN0RWxlbWVudENoaWxkIiwiaW5jbHVkZXMiLCJ0ZXh0Q29udGVudCIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJjbGVhck1haW5Nb2RhbCIsIm1haW5Db250YWluZXIiLCJjaGFtcGlvbk5hbWUiLCJjaGFtcGlvblRpdGxlIiwiY2hhbXBpb25Sb2xlcyIsImNoYW1waW9uTG9yZSIsImFiaWxpdHlEZXRhaWxzIiwiY2hhbXBpb25UaXBzIiwibWFpbk1vZGFsSGVhZGVyIiwiZWxlbWVudCIsImN1cnJlbnRFbGVtZW50IiwiY2xlYXJTdGF0c01vZGFsIiwic3RhdHNDb250YWluZXIiLCJjaGFtcGlvblN0YXRzT3ZlcnZpZXciLCJhbGxkYW1hZ2VTdGF0cyIsIml0ZW1TZXRzQ29udGFpbmVyIiwiYmVzdE1hdGNodXBzIiwid29yc3RNYXRjaHVwcyIsInN0YXRzTW9kYWxIZWFkZXIiLCJkYW1hZ2VTdGF0IiwiZGFtYWdlU3RhdEVsZW1lbnQiLCJzdGF0c01vZGFsQ29udGVudCIsImNvbnRlbnQiLCJjb250ZW50RWxlbWVudCIsImNsZWFyU2tpbnNNb2RhbCIsImNsb3NlQ2hhbXBpb25Nb2RhbCIsIm1vZGFsIiwic2tpbnNDb250YWluZXIiLCJtb2RhbENsaWNrRXZlbnRzIiwiZXZlbnQiLCJ0YXJnZXQiLCJkYXNoSW5kZXgiLCJhYmlsaXR5SWQiLCJzbGljZSIsIkFycmF5IiwiZnJvbSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtb2RhbE1vdXNlb3ZlckV2ZW50cyIsIm1vZGFsTW91c2VvdXRFdmVudHMiLCJyZWxhdGVkVGFyZ2V0IiwicGFyZW50Tm9kZSIsIm1vZGFsQXJyb3dFdmVudHMiLCJrZXkiLCJyaWdodEFycm93IiwibGVmdEFycm93IiwibW9kYWxDaGFuZ2VMaXN0ZW5lcnMiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2V0Q2hhbXBpb25EZXRhaWxzIiwiZ2V0Q2hhbXBpb25TdGF0cyIsImNoYW1waW9uRGV0YWlsc01vZGFsIiwiY2hhbXBpb25TdGF0c01vZGFsIiwiY2hhbXBpb25Ta2luc01vZGFsIiwiQ2hhbXBpb25GaWx0ZXIiLCJTb3J0Q2hhbXBpb25zIiwiZ2V0QWxsQ2hhbXBpb25EZXRhaWxzIiwiZ2V0QWxsQ2hhbXBpb25TdGF0cyIsImdldExhdGVzdFZlcnNpb24iLCJDaGFtcGlvbnNQYWdlQ29udHJvbGxlciIsImRpc3BsYXlEcm9wZG93bk9wdGlvbnMiLCJkcm9wZG93bk9wdGlvbnMiLCJhbGxEcm9wZG93bk9wdGlvbnMiLCJvcHRpb25zIiwib3B0aW9uc1N0eWxlIiwiZHJvcGRvd25PcHRpb25zU3R5bGUiLCJoaWRlRHJvcGRvd25PcHRpb25zIiwiZHJvcGRvd25PcHRpb25zVG9nZ2xlIiwiZHJvcGRvd25CdG4iLCJwYXJlbnRFbGVtZW50IiwiZGlzcGxheUNoYW1waW9uTW9kYWwiLCJjaGFtcGlvbklkIiwibGF0ZXN0VmVyc2lvbiIsImNoYW1waW9uRGV0YWlscyIsImNoYW1waW9uU3RhdHMiLCJzZWxlY3RMYW5lRmlsdGVyT3B0aW9uIiwiY2xpY2tlZExhbmVPcHRpb24iLCJjaGFtcGlvbnNTZWN0aW9uIiwiYWN0aXZlTGFuZU9wdGlvbiIsInZpc2liaWxpdHkiLCJhZGQiLCJjaGVja0xhbmVGaWx0ZXJPcHRpb24iLCJhbGxDaGFtcGlvblN0YXRzIiwibGFuZU5hbWUiLCJmaWx0ZXJCeUxhbmUiLCJjaGVja1NvcnRpbmdPcHRpb24iLCJhY3RpdmVTb3J0aW5nT3B0aW9uIiwic29ydEJ5RGVmYXVsdE9yZGVyIiwic29ydENoYW1waW9uc0J5V2lucmF0ZSIsInNvcnRDaGFtcGlvbnNCeVBpY2tyYXRlIiwic29ydENoYW1waW9uc0J5RGFtYWdlRG9uZSIsImNoZWNrQWN0aXZlUm9sZU9wdGlvbnMiLCJhbGxDaGFtcGlvbkRldGFpbHMiLCJhY3RpdmVSb2xlT3B0aW9ucyIsImFjdGl2ZVJvbGVzIiwibWFwIiwiYWN0aXZlUm9sZU9wdGlvbiIsImFjdGl2ZVJvbGUiLCJmaWx0ZXJCeVJvbGUiLCJjaGVja0FjdGl2ZURpZmZpY3VsdHlPcHRpb25zIiwiYWN0aXZlRGlmZmljdWx0eU9wdGlvbnMiLCJhY3RpdmVEaWZmaWN1bHRpZXMiLCJhY3RpdmVEaWZmaWN1bHR5T3B0aW9uIiwiYWN0aXZlRGlmZmljdWx0eSIsImZpbHRlckJ5RGlmZmljdWx0eSIsInNlbGVjdE11bHRpRHJvcGRvd25PcHRpb24iLCJkcm9wZG93bk9wdGlvbiIsImRlc2VsZWN0RHJvcGRvd25PcHRpb24iLCJ0b2dnbGVEcm9wZG93bk9wdGlvbiIsInNlbGVjdFNpbmdsZURyb3Bkb3duT3B0aW9uIiwiYWN0aXZlRHJvcGRvd25PcHRpb24iLCJyZWRpcmVjdFRvRnJvbnRQYWdlIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiY2hhbXBpb25zUGFnZUNsaWNrRXZlbnRzIiwiY2hlY2tPcHRpb25zIiwiaGlkZUNoYW1waW9uc1NlY3Rpb24iLCJzaG93Q2hhbXBpb25zU2VjdGlvbiIsInJlbW92ZUNoYW1waW9uc1BhZ2VMaXN0ZW5lciIsImNoYW1waW9uc1BhZ2UiLCJhZGRDaGFtcGlvbnNQYWdlTGlzdGVuZXIiLCJzaG93TG9hZGVyIiwibG9hZGVyIiwiaGlkZUxvYWRlciIsInNob3dOb0NoYW1waW9uTWVzc2FnZSIsIm5vQ2hhbXBpb25NYXRjaGVzTWVzc2FnZSIsImhpZGVOb0NoYW1waW9uTWVzc2FnZSIsImZpbHRlckFuZFNvcnRDaGFtcGlvbnNTZWN0aW9uIiwid2FpdFRpbWUiLCJzZXRUaW1lb3V0IiwiY2hhbXBpb25Db250YWluZXJzIiwiY2hhbXBpb25Db250YWluZXJzSGlkZGVuIiwiZXZlcnkiLCJjaGFtcGlvbkNvbnRhaW5lciIsImRhdGFzZXQiLCJjaGFtcGlvbnNQYWdlS2V5RXZlbnRzIiwiYWN0aXZlRWxlbWVudCIsImNoYW1waW9uc1BhZ2VMaXN0ZW5lcnMiLCJjcmVhdGVDaGFtcGlvbkNvbnRhaW5lciIsInJlbmRlckFsbENoYW1waW9ucyIsImNoYW1waW9uIiwiY2xlYXJDaGFtcGlvbnNTZWN0aW9uIiwic2hvd0NoYW1waW9uIiwiaGlkZUNoYW1waW9uIiwiY2xpY2tlZExhbmUiLCJhbGxDaGFtcGlvbnMiLCJyZXN1bHRzIiwicHVzaCIsIlByb21pc2UiLCJhbGwiLCJjaGFtcGlvbkxhbmUiLCJsYW5lIiwiY2hhbXBpb25FbGVtZW50IiwidG9Mb3dlckNhc2UiLCJjaGFtcGlvbkVsZW1lbnRzIiwicm9sZU1hdGNoRm91bmQiLCJyb2xlIiwidGFncyIsImNoYW1waW9uUm9sZSIsImNhdGVnb3Jpc2VEaWZmaWN1bHR5TnVtIiwiZGlmZmljdWx0eU51bSIsImRpZmZpY3VsdHlNYXRjaEZvdW5kIiwiZGlmZmljdWx0eSIsImNoYW1waW9uRGlmZmljdWx0eU51bSIsImNoYW1waW9uRGlmZmljdWx0eSIsIlNlYXJjaGJhckNvbnRyb2xsZXIiLCJzaG93QXV0b0NvbXBsZXRlTmFtZXMiLCJzZWFyY2hDb250YWluZXIiLCJhdXRvQ29tcGxldGVOYW1lcyIsImhpZGVBdXRvQ29tcGxldGVOYW1lcyIsImF1dG9Db21wbGV0ZU5hbWVFbGVtZW50cyIsImF1dG9Db21wbGV0ZU5hbWVFbGVtZW50Iiwic2VhcmNoYmFyRm9jdXNJbkV2ZW50IiwiZm9jdXMiLCJzZWFyY2hiYXJGb2N1c291dEV2ZW50Iiwic2VhcmNoQmFySW5wdXRFdmVudCIsImlucHV0VmFsdWUiLCJ2YWx1ZSIsImF1dG9Db21wbGV0ZU5hbWUiLCJuYW1lIiwic2VhcmNoYmFyS2V5ZG93bkV2ZW50cyIsInByZXZlbnREZWZhdWx0IiwiYWN0aW9uIiwiQXJyb3dVcCIsIkFycm93RG93biIsImZpbHRlciIsImlzU2hvd2luZyIsInVuZGVmaW5lZCIsImdvVG9TdGFydCIsImNoaWxkcmVuIiwic2VhcmNoQ29udGFpbmVyQ2xhc3NOYW1lIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInNlYXJjaGJhckNsaWNrRXZlbnRzIiwiY2xpY2tBdXRvQ29tcGxldGVOYW1lIiwiZmlyc3RDaGlsZCIsInNlYXJjaENvbnRhaW5lckxpc3RlbmVycyIsInZpc2libGl0eSIsInJlY3JlYXRlQ2hhbXBpb25zU2VjdGlvbiIsImNoYW1waW9ucyIsImZpbHRlckNoYW1waW9ucyIsImZpbHRlcmVkQ2hhbXBpb25TdGF0cyIsImZpbHRlcmVkQ2hhbXBpb25zU29ydGVkIiwic29ydCIsImEiLCJiIiwid2luUmF0ZSIsInBpY2tSYXRlIiwiZGFtYWdlUGVyTWF0Y2giLCJ0b3RhbERhbWFnZSIsImZldGNoQ2hhbXBpb25EZXRhaWxzIiwiZmV0Y2giLCJtb2RlIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImdldENoYW1waW9uUGFzc2l2ZXMiLCJwYXNzaXZlRGF0YSIsInBhc3NpdmUiLCJwYXNzaXZlTmFtZSIsInBhc3NpdmVEZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uIiwicGFzc2l2ZUlkIiwiaW1hZ2UiLCJmdWxsIiwicGFzc2l2ZUltZ1VybCIsImdldENoYW1waW9uU3BlbGxzIiwic3BlbGxzRGF0YSIsInNwZWxscyIsInNwZWxsIiwic3BlbGxPYmplY3QiLCJjb3N0QnVybiIsImNvc3RUeXBlIiwiY29vbGRvd24iLCJjb29sZG93bkJ1cm4iLCJpbWdVcmwiLCJjaGFtcGlvblBhc3NpdmUiLCJ0aXRsZSIsInJlcGxhY2UiLCJ0b1VwcGVyQ2FzZSIsInBhcnR5cGUiLCJhbGx5dGlwcyIsImxvcmUiLCJyb2xlcyIsInNraW5zIiwicmVzb3VyY2UiLCJ0aXBzIiwiZmV0Y2hDaGFtcGlvblN0YXRzIiwiZGV2VXJsIiwidG9GaXhlZCIsImtkYSIsImtkYVJhdGlvIiwiaXRlbVNldHMiLCJpdGVtQ2hvaWNlcyIsImJlc3RNYXRjaFVwcyIsIm1hdGNoVXBzIiwid29yc3RNYXRjaFVwcyIsInZlcnNpb25zUmVzcG9uc2UiLCJ2ZXJzaW9ucyIsImNoYW1waW9uc1Jlc3BvbnNlIiwidmVyc2lvblJlc3BvbnNlIiwiZmV0Y2hBbGxJdGVtcyIsImFsbEl0ZW1zIiwiSXRlbUluZm8iLCJpdGVtSWQiLCJnZXRJdGVtRGV0YWlscyIsIml0ZW1JbWFnZUlkIiwiaW1hZ2VVcmwiLCJjb21wb25lbnRJdGVtSWRzIiwiY29tcG9uZW50SXRlbURldGFpbHMiLCJjb3N0IiwiZ29sZCIsInRvdGFsIiwiZ2V0SXRlbUltYWdlIiwiY29tcG9uZW50SXRlbXMiLCJnZXRDb21wb25lbnRJdGVtcyIsIkVsZW1lbnRDcmVhdGlvbiIsImNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcyIsInRhZyIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZUNoaWxkRWxlbWVudFdpdGhJZCIsImNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzc0FuZElkIiwiY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MiLCJzcmMiLCJhbHQiLCJpbWFnZUVsZW1lbnQiLCJyZW5kZXJIZWFkZXJEZXRhaWxzIiwiaW1hZ2VzIiwiY2hhbXBpb25EYXRhIiwiY2hhbXBpb25Sb2xlTmFtZSIsImNoYW1waW9uUmVzb3VyY2UiLCJjaGFtcGlvblJlc291cmNlTmFtZSIsImxvcmVDb250YWluZXIiLCJpbm5lckhUTUwiLCJhYmlsaXRpZXNDb250YWluZXIiLCJhYmlsaXR5SW1ncyIsInBhc3NpdmVJbWciLCJpbWdMYWJlbCIsInNwZWxsSW1nIiwiaSIsImFiaWxpdHlJbmZvIiwiYWJpbGl0eU5hbWUiLCJhYmlsaXR5RGVzY3JpcHRpb24iLCJhYmlsaXR5TGFiZWwiLCJjaGFtcGlvblRpcHNTZWN0aW9uIiwiY2hhbXBpb25UaXAiLCJza2luIiwibnVtIiwic2hvd25JbWFnZUNvbnRhaW5lciIsInNob3duSW1hZ2VVcmwiLCJpbWFnZUNvbnRhaW5lciIsInJlbmRlclN0YXRPdmVydmlldyIsInJlbmRlckRhbWFnZVN0YXRzIiwicmVuZGVyQ2hhbXBpb25MYW5lIiwicmVuZGVyTWF0Y2h1cHNJbmZvIiwic3RhdHNPdmVydmlldyIsInRydWVEYW1hZ2VDaXJjbGVTdHJva2UiLCJwaHlzaWNhbERhbWFnZUNpcmNsZVN0cm9rZSIsIm1hZ2ljRGFtYWdlQ2lyY2xlU3Ryb2tlIiwidHJ1ZURhbWFnZVBlcmNlbnQiLCJNYXRoIiwicm91bmQiLCJ0cnVlRGFtYWdlIiwicGVyY2VudGFnZSIsInBoeXNpY2FsRGFtYWdlUGVyY2VudCIsInBoeXNpY2FsRGFtYWdlIiwibWFnaWNEYW1hZ2VQZXJjZW50IiwibWFnaWNEYW1hZ2UiLCJzdHJva2VEYXNoYXJyYXkiLCJ0b3RhbERhbWFnZVRleHQiLCJ0cnVlRGFtYWdlVmFsdWUiLCJwaHlzaWNhbERhbWFnZVZhbHVlIiwibWFnaWNEYW1hZ2VWYWx1ZSIsImdldEFsbEl0ZW1zIiwiY2hhbXBpb25JdGVtQnVpbGRzIiwiaXRlbVNldCIsIml0ZW1TZXRDb250YWluZXIiLCJpdGVtIiwiaXRlbUluZm8iLCJnZXRJdGVtSW5mbyIsIm1haW5Db21wb25lbnRDb250YWluZXIiLCJtYWluSXRlbSIsIml0ZW1EZXRhaWxzQ29udGFpbmVyIiwibmFtZUVsZW1lbnQiLCJkZXNjcmlwdGlvbkVsZW1lbnQiLCJpdGVtQ29zdCIsImNvc3RMYWJlbCIsImNvc3RBbW91bnQiLCJyZXNvbHZlIiwidGhlbiIsIml0ZW1zIiwiY29tcG9uZW50SXRlbXNDb250YWluZXIiLCJjb21wb25lbnRJdGVtIiwiY29tcG9uZW50SXRlbUVsZW1lbnQiLCJjb21wb25lbnRJdGVtRGV0YWlsc0NvbnRhaW5lciIsImNvbXBvbmVudEl0ZW1OYW1lIiwiY29tcG9uZW50SXRlbUNvc3QiLCJjb21wb25lbnRJdGVtQ29zdExhYmVsIiwiY29tcG9uZW50SXRlbUFtb3VudCIsImJlc3RNYXRjaHVwc1NlY3Rpb24iLCJiZXN0TWF0Y2h1cHNFbGVtZW50IiwiYmVzdE1hdGNodXBzRGF0YSIsIndvcnN0TWF0Y2h1cHNTZWN0aW9uIiwid29yc3RNYXRjaHVwc0VsZW1lbnQiLCJ3b3JzdE1hdGNodXBzRGF0YSIsImltcG9ydEFsbCIsInIiLCJrZXlzIiwicmVxdWlyZSIsImNvbnRleHQiLCJtb2RhbENvbnRhaW5lciIsImNvbnRhaW5lciIsImJhY2tncm91bmQiLCJiYWNrZ3JvdW5kU2l6ZSIsInJhdGVUZXh0IiwicmF0ZVR5cGUiLCJjaGFtcGlvblJhdGUiLCJsYWJlbCIsInJhdGVWYWx1ZSIsImxvd2VyQ2FzZVRleHQiLCJjaGFtcGlvbkxhbmVJbmZvIiwibGFuZVRleHQiLCJsYW5lSWNvbiIsImRhbWFnZVR5cGUiLCJkYW1hZ2VWYWx1ZSIsImRhbWFnZVBlcmNlbnRhZ2UiLCJkYW1hZ2VDb250YWluZXIiLCJkYW1hZ2VTdGF0cyIsImRhbWFnZVZhbHVlRWxlbWVudCIsImRhbWFnZVBlcmNlbnRhZ2VFbGVtZW50IiwibWF0Y2h1cHNFbGVtZW50IiwibWF0Y2h1cHNEYXRhIiwibWF0Y2h1cCIsIm1hdGNodXBJbmZvIiwiZW5lbXlDaGFtcGlvbk5hbWUiLCJlbmVteUNoYW1waW9uSWQiLCJlbmVteUNoYW1waW9uSW1nVXJsIiwibWF0Y2h1cFN0YXRzIiwiZW5lbXlDaGFtcGlvbk5hbWVFbGVtZW50Iiwid2lucmF0ZUFnYWluc3QiLCJ3aW5yYXRlQWdhaW5zdExhYmVsIiwiY29sb3IiLCJ3aW5yYXRlQWdhaW5zdFBlcmNlbnRhZ2UiLCJ3aW5SYXRlQWdhaW5zdCIsImdhbWVzUGxheWVkQWdhaW5zdCIsIm1hdGNoZXMiLCJjaGFtcGlvbkltZ1VybCIsImNoYW1waW9uSW1nIiwidGFiSW5kZXgiLCJjaGFtcGlvbk5hbWVXcmFwcGVyIiwiYmFja2Ryb3BDaGFuZ2UiLCJjcmVhdGVTZWFyY2hEcm9wZG93biIsImFsbENoYW1waW9uc0FycmF5IiwiT2JqZWN0IiwidmFsdWVzIiwic2VhcmNoQ29udGFpbmVycyIsImF1dG9Db21wbGV0ZU5hbWVXcmFwcGVyIiwiZGlzcGxheU51bWJlck9mTWF0Y2hlcyIsImRldlVybDIiLCJtYXRjaENvdW50IiwiYXBwTmFtZUNvbnRhaW5lciIsInRhZ2xpbmVDb250YWluZXIiLCJ0YWdsaW5lU3RhcnQiLCJ0YWdsaW5lTWF0Y2hDb3VudCIsImZsb29yIiwidGFnbGluZUVuZCIsInJlbmRlclBhZ2UiXSwic291cmNlUm9vdCI6IiJ9