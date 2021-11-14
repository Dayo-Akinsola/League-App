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
      var modal, championDetails, championStats;
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
              (0,_templates_championDetailsModal__WEBPACK_IMPORTED_MODULE_4__["default"])(championDetails);
              (0,_templates_championStatsModal__WEBPACK_IMPORTED_MODULE_5__["default"])(championDetails, championStats);
              (0,_templates_championSkinsModal__WEBPACK_IMPORTED_MODULE_6__["default"])(championDetails);
              modal.style.display = 'block';
              _championModalController__WEBPACK_IMPORTED_MODULE_7__["default"].modalChangeListeners();

            case 12:
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

  var championsPageListeners = function championsPageListeners() {
    var championsPage = document.querySelector('#champions-page');
    championsPage.addEventListener('click', function (event) {
      if (Array.from(event.target.classList).includes('dropdown-btn')) {
        dropdownOptionsToggle(event.target);
      }

      if (event.target.parentElement.className === 'champion-container') {
        displayChampionModal(event.target.parentElement.dataset.id);
      }

      if (event.target.parentElement.parentElement.className === 'champion-container') {
        displayChampionModal(event.target.parentElement.parentElement.dataset.id);
      }
    });
  };

  return {
    championsPageListeners: championsPageListeners
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChampionsPageController);

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
            return fetch("http://ddragon.leagueoflegends.com/cdn/11.20.1/data/en_US/champion/".concat(championId, ".json"), {
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
            // eslint-disable-next-line max-len

            championTitle = championDetails.title.replace(championDetails.title[0], championDetails.title[0].toUpperCase());

            if (championDetails.partype === 'None') {
              championDetails.partype = 'Manaless';
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
              tips: championDetails.allytips,
              difficulty: championDetails.info.difficulty
            });

          case 8:
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
            console.log(response);
            _context.next = 6;
            return response.json();

          case 6:
            championStats = _context.sent;
            return _context.abrupt("return", championStats);

          case 8:
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);



var fetchAllChampions = /*#__PURE__*/function () {
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
            return fetch("http://ddragon.leagueoflegends.com/cdn/".concat(latestVersion, "/data/en_US/champion.json"));

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

  return function fetchAllChampions() {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchAllChampions);

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
            return fetch("http://ddragon.leagueoflegends.com/cdn/".concat(latestVersion, "/data/en_US/item.json"));

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
      var imageUrl = "http://ddragon.leagueoflegends.com/cdn/11.22.1/img/item/".concat(itemImageId);
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
          imageUrl: "http://ddragon.leagueoflegends.com/cdn/11.22.1/img/item/".concat(itemId, ".png"),
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

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DropdownSection, [{
    key: "renderDropdown",
    value: function renderDropdown(filterSortSection) {
      var _this = this;

      var dropdown = _elementCreation__WEBPACK_IMPORTED_MODULE_2__["default"].createChildElementWithClass('div', "".concat(this.dropdownName, "-dropdown dropdown"), filterSortSection);
      var dropdownBtn = _elementCreation__WEBPACK_IMPORTED_MODULE_2__["default"].createChildElementWithClass('button', "".concat(this.dropdownName, "-dropdown-btn dropdown-btn"), dropdown);
      dropdownBtn.textContent = "".concat(this.dropdownName[0].toUpperCase()).concat(this.dropdownName.slice(1));
      var dropdownOptions = _elementCreation__WEBPACK_IMPORTED_MODULE_2__["default"].createChildElementWithClass('div', "".concat(this.dropdownName, "-dropdown-options dropdown-options"), dropdown);
      this.optionsArray.forEach(function (option) {
        var dropdownOption = _elementCreation__WEBPACK_IMPORTED_MODULE_2__["default"].createChildElementWithClass('span', "".concat(option, "-").concat(_this.dropdownName, " dropdown-option"), dropdownOptions);
        dropdownOption.textContent = "".concat(option[0].toUpperCase()).concat(option.slice(1));
      });
    }
  }], [{
    key: "createSection",
    value: function createSection() {
      var championsPage = document.querySelector('#champions-page');
      var filterSortSection = document.createElement('div');
      filterSortSection.className = 'filter-sort-section';
      championsPage.insertBefore(filterSortSection, championsPage.firstElementChild.nextSibling);
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
            championLore.textContent = championData.lore;
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
                var shownImageUrl = "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/".concat(championDetails.id, "_").concat(skin.num, ".jpg");
                _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_2__["default"].createChildImageElementWithClass('skin-image', shownImageContainer, shownImageUrl, 'default skin');
              } else {
                var imageContainer = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_2__["default"].createChildElementWithClassAndId('div', 'skin-image-container', skin.name, skinImagesContainer);
                var imageUrl = "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/".concat(championDetails.id, "_").concat(skin.num, ".jpg");
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





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
  var filterSortSection, sortOptions, laneOptions, roleOptions, resourceOptions, allOptionArrays, championsPage, championsSection, allChampions, allChampionsArray;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          /* Creates the filter and sorting section below the header */
          filterSortSection = _helpers_dropdownSection__WEBPACK_IMPORTED_MODULE_2__["default"].createSection();
          sortOptions = {
            sort: ['winrate', 'pickrate', 'damage']
          };
          laneOptions = {
            lane: ['top', 'bottom', 'middle', 'utility', 'jungle']
          };
          roleOptions = {
            role: ['tank', 'assassin', 'fighter', 'mage', 'marksman', 'support']
          };
          resourceOptions = {
            resource: ['mana', 'energy', 'rage', 'none', 'courage', 'shield', 'fury', 'ferocity', 'grit']
          };
          allOptionArrays = [sortOptions, laneOptions, roleOptions, resourceOptions];
          allOptionArrays.forEach(function (optionsObject) {
            var dropdownName = Object.keys(optionsObject)[0];
            var optionsArray = Object.values(optionsObject)[0];
            var dropdown = new _helpers_dropdownSection__WEBPACK_IMPORTED_MODULE_2__["default"](dropdownName, optionsArray);
            dropdown.renderDropdown(filterSortSection);
          });
          /* Load all champions and render them to the champions page */

          championsPage = document.querySelector('#champions-page');
          championsSection = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_4__["default"].createChildElementWithClass('div', 'champions-section', championsPage);
          _context.next = 11;
          return (0,_championData_getAllChampions__WEBPACK_IMPORTED_MODULE_3__["default"])();

        case 11:
          allChampions = _context.sent;
          allChampionsArray = Object.values(allChampions);
          allChampionsArray.forEach(function (champion) {
            var championContainer = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_4__["default"].createChildElementWithClass('div', 'champion-container', championsSection);
            championContainer.dataset.id = champion.id;
            var championImgUrl = "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/".concat(champion.id, "_0.jpg");
            _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_4__["default"].createChildImageElementWithClass('champion-img', championContainer, championImgUrl, champion.id);
            var championNameWrapper = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_4__["default"].createChildElementWithClass('div', 'champion-name-wrapper', championContainer);
            var championName = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_4__["default"].createChildElementWithClass('span', 'champion-name', championNameWrapper);
            championName.textContent = champion.name;
          });

        case 14:
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
/* harmony export */   "renderMatchupsInfo": () => (/* binding */ renderMatchupsInfo)
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
    var enemyChampionImgUrl = "http://ddragon.leagueoflegends.com/cdn/11.22.1/img/champion/".concat(enemyChampionName, ".png");
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --rasin-black: #1d1e2c;\n  --transparent-rasin-black: #1d1e2cc7;\n  --dark-gold: #927543;\n  --light-gold: #c7ab6e;\n}\n\n#champions-page {\n  background-color: var(--rasin-black);\n  min-height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: -4;\n}\n#champions-page .page-header {\n  display: flex;\n  justify-content: space-evenly;\n  color: white;\n  background-color: var(--rasin-black);\n  max-width: 100%;\n  padding: 1em 0;\n  border-style: solid;\n  border-color: var(--dark-gold);\n  border-width: 0 0 2px 0;\n  align-items: center;\n}\n#champions-page .search-container {\n  display: flex;\n}\n#champions-page .search {\n  padding: 0.5em;\n  min-width: 18em;\n  background: #e2e4e9;\n  outline: none;\n  border-style: none;\n  color: var(--rasin-black);\n  font-weight: 600;\n  border-radius: 0.5em 0.5em;\n  min-height: 2.6em;\n  font-size: 1em;\n}\n#champions-page .champions-section {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-auto-rows: auto;\n  grid-column-gap: 1em;\n  max-width: 80%;\n  margin: auto;\n  margin-top: 2em;\n}\n#champions-page .champion-container {\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  cursor: pointer;\n  max-width: 9rem;\n  position: relative;\n  margin-top: 1.5em;\n}\n#champions-page .champion-img {\n  max-height: 100%;\n  max-width: 100%;\n  border-radius: 8%;\n}\n#champions-page .champion-name-wrapper {\n  position: relative;\n  margin: 0 auto;\n  text-align: center;\n  margin-top: -3.2em;\n  background-color: var(--transparent-rasin-black);\n  width: 100%;\n  height: 100%;\n  padding: 0.2em 0 0.2em;\n}\n#champions-page .champion-name {\n  color: white;\n  font-size: 1.2em;\n  font-weight: 600;\n}\n#champions-page .filter-sort-section {\n  display: grid;\n  width: 96%;\n  flex-direction: column;\n  grid-template-columns: repeat(2, 1fr);\n  grid-column-gap: 0.5em;\n  margin-right: 0.4em;\n  grid-row-gap: 0.4em;\n  margin-top: 1em;\n  margin-bottom: 3em;\n}\n#champions-page .dropdown {\n  margin: 0 0.4em 0.4em 0.4em;\n  max-width: 100%;\n  position: relative;\n}\n#champions-page .dropdown-btn {\n  display: flex;\n  border-style: none;\n  justify-content: space-between;\n  background-color: #dfdfe1;\n  color: #2f1d1d;\n  font-weight: 600;\n  padding: 0.5em;\n  font-size: 1em;\n  width: 100%;\n  border-bottom: 2px solid;\n}\n#champions-page .dropdown-btn::after {\n  content: \"➤\";\n  display: inline-block;\n  transform: rotate(90deg);\n}\n#champions-page .dropdown-options {\n  flex-direction: column;\n  display: none;\n  position: absolute;\n  width: 100%;\n  z-index: 2;\n}\n#champions-page .dropdown-option {\n  color: var(--rasin-black);\n  font-weight: 600;\n  background-color: #f8f8f8;\n  cursor: pointer;\n  padding: 0.5em;\n  color: white;\n  color: var(--rasin-black);\n  border-bottom: 2px solid #f8f8f8;\n}\n#champions-page .dropdown-option:hover {\n  background-color: var(--light-gold);\n}\n@media (min-width: 850px) {\n  #champions-page .champions-section {\n    grid-template-columns: repeat(4, 1fr);\n  }\n  #champions-page .champion-container {\n    max-width: 10rem;\n  }\n}\n@media (min-width: 1000px) {\n  #champions-page .filter-sort-section {\n    grid-template-columns: repeat(4, 1fr);\n  }\n  #champions-page .champions-section {\n    grid-column-gap: 0;\n  }\n  #champions-page .champion-name-wrapper {\n    margin-top: -3.6em;\n  }\n  #champions-page .champion-name {\n    font-size: 1.4em;\n  }\n}\n@media (min-width: 1200px) {\n  #champions-page .champions-section {\n    grid-template-columns: repeat(5, 1fr);\n  }\n}\n@media (min-width: 1500px) {\n  #champions-page .champions-section {\n    grid-template-columns: repeat(6, 1fr);\n  }\n  #champions-page .champion-container {\n    max-width: 12rem;\n  }\n}\n@media (max-width: 500px) {\n  #champions-page .champions-section {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}", "",{"version":3,"sources":["webpack://./src/stylesheets/champions.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAAhB;EACC,SAAA;EACA,UAAA;EACA,sBAAA;AAED;;AACA;EACE,sBAAA;EACA,oCAAA;EACA,oBAAA;EACA,qBAAA;AAEF;;AACA;EACE,oCAAA;EACA,gBAAA;EACA,kBAAA;EACA,WAAA;EACA,WAAA;AAEF;AAAE;EACE,aAAA;EACA,6BAAA;EACA,YAAA;EACA,oCAAA;EACA,eAAA;EACA,cAAA;EACA,mBAAA;EACA,8BAAA;EACA,uBAAA;EACA,mBAAA;AAEJ;AACE;EACE,aAAA;AACJ;AAEE;EACE,cAAA;EACA,eAAA;EACA,mBAAA;EACA,aAAA;EACA,kBAAA;EACA,yBAAA;EACA,gBAAA;EACA,0BAAA;EACA,iBAAA;EACA,cAAA;AAAJ;AAGE;EACE,aAAA;EACA,qCAAA;EACA,oBAAA;EACA,oBAAA;EACA,cAAA;EACA,YAAA;EACA,eAAA;AADJ;AAIE;EACE,aAAA;EACA,sBAAA;EACA,cAAA;EACA,eAAA;EACA,eAAA;EACA,kBAAA;EACA,iBAAA;AAFJ;AAKE;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;AAHJ;AAME;EACE,kBAAA;EACA,cAAA;EACA,kBAAA;EACA,kBAAA;EACA,gDAAA;EACA,WAAA;EACA,YAAA;EACA,sBAAA;AAJJ;AAOE;EACE,YAAA;EACA,gBAAA;EACA,gBAAA;AALJ;AAQE;EACE,aAAA;EACA,UAAA;EACA,sBAAA;EACA,qCAAA;EACA,sBAAA;EACA,mBAAA;EACA,mBAAA;EACA,eAAA;EACA,kBAAA;AANJ;AASE;EACC,2BAAA;EACA,eAAA;EACA,kBAAA;AAPH;AAWE;EACE,aAAA;EACA,kBAAA;EACA,8BAAA;EACA,yBAAA;EACA,cAAA;EACA,gBAAA;EACA,cAAA;EACA,cAAA;EACA,WAAA;EACA,wBAAA;AATJ;AAYE;EACE,YAAA;EACA,qBAAA;EACA,wBAAA;AAVJ;AAaE;EACE,sBAAA;EACA,aAAA;EACA,kBAAA;EACA,WAAA;EACA,UAAA;AAXJ;AAcE;EACE,yBAAA;EACA,gBAAA;EACA,yBAAA;EACA,eAAA;EACA,cAAA;EACA,YAAA;EACA,yBAAA;EACA,gCAAA;AAZJ;AAeE;EACE,mCAAA;AAbJ;AAgBE;EACE;IACE,qCAAA;EAdJ;EAiBE;IACE,gBAAA;EAfJ;AACF;AAkBE;EACE;IACE,qCAAA;EAhBJ;EAmBE;IACE,kBAAA;EAjBJ;EAoBE;IACE,kBAAA;EAlBJ;EAqBE;IACE,gBAAA;EAnBJ;AACF;AAsBE;EACE;IACE,qCAAA;EApBJ;AACF;AAuBE;EACE;IACE,qCAAA;EArBJ;EAwBE;IACE,gBAAA;EAtBJ;AACF;AAyBE;EACE;IACE,qCAAA;EAvBJ;AACF","sourcesContent":["* {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n}\n\n:root {\n  --rasin-black: #1d1e2c;\n  --transparent-rasin-black: #1d1e2cc7;\n  --dark-gold: #927543;\n  --light-gold: #c7ab6e;\n}\n\n#champions-page {\n  background-color: var(--rasin-black);\n  min-height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: -4;\n\n  .page-header {\n    display: flex;\n    justify-content: space-evenly;\n    color: white;\n    background-color: var(--rasin-black);\n    max-width: 100%;\n    padding: 1em 0;\n    border-style: solid;\n    border-color: var(--dark-gold);\n    border-width: 0 0 2px 0;\n    align-items: center;\n  }\n\n  .search-container {\n    display: flex;\n  }\n  \n  .search {\n    padding: 0.5em;\n    min-width: 18em;\n    background: #e2e4e9;\n    outline: none;\n    border-style: none;\n    color: var(--rasin-black);\n    font-weight: 600;\n    border-radius: 0.5em 0.5em;\n    min-height: 2.6em;\n    font-size: 1em;\n  }\n\n  .champions-section {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-auto-rows: auto;\n    grid-column-gap: 1em;\n    max-width: 80%;\n    margin: auto;\n    margin-top: 2em;\n  }\n\n  .champion-container {\n    display: flex;\n    flex-direction: column;\n    margin: 0 auto;\n    cursor: pointer;\n    max-width: 9rem;\n    position: relative;\n    margin-top: 1.5em\n  }\n\n  .champion-img {\n    max-height: 100%;\n    max-width: 100%;\n    border-radius: 8%;\n  }\n\n  .champion-name-wrapper {\n    position: relative;\n    margin: 0 auto;\n    text-align: center;\n    margin-top: -3.2em;\n    background-color: var(--transparent-rasin-black);\n    width: 100%;\n    height: 100%;\n    padding: 0.2em 0 0.2em;\n  }\n\n  .champion-name {\n    color: white;\n    font-size: 1.2em;\n    font-weight: 600;\n  }\n  \n  .filter-sort-section {\n    display: grid;\n    width: 96%;\n    flex-direction: column;\n    grid-template-columns: repeat(2, 1fr);\n    grid-column-gap: 0.5em;\n    margin-right: 0.4em;\n    grid-row-gap: 0.4em;\n    margin-top: 1em;\n    margin-bottom: 3em;\n  }\n\n  .dropdown {\n   margin: 0 0.4em 0.4em 0.4em;\n   max-width: 100%;\n   position: relative;\n\n  }\n\n  .dropdown-btn {\n    display: flex;\n    border-style: none;\n    justify-content: space-between;\n    background-color: #dfdfe1;\n    color: #2f1d1d;\n    font-weight: 600;\n    padding: 0.5em;\n    font-size: 1em;\n    width: 100%;\n    border-bottom: 2px solid;\n  }\n\n  .dropdown-btn::after {\n    content: \"\\27A4\";\n    display: inline-block;\n    transform: rotate(90deg);\n  }\n\n  .dropdown-options {\n    flex-direction: column;\n    display: none; \n    position: absolute;\n    width: 100%;\n    z-index: 2;\n  }\n  \n  .dropdown-option {\n    color: var(--rasin-black); \n    font-weight: 600;\n    background-color: #f8f8f8;\n    cursor: pointer;\n    padding: 0.5em;\n    color: white;\n    color: var(--rasin-black);\n    border-bottom: 2px solid #f8f8f8;\n  }\n\n  .dropdown-option:hover {\n    background-color: var(--light-gold);\n  }\n\n  @media (min-width: 850px) {\n    .champions-section {\n      grid-template-columns: repeat(4, 1fr);\n    }\n\n    .champion-container {\n      max-width: 10rem;\n    }\n  }\n\n  @media (min-width: 1000px) {\n    .filter-sort-section {\n      grid-template-columns: repeat(4, 1fr);\n    }\n\n    .champions-section {\n      grid-column-gap: 0;\n    }\n\n    .champion-name-wrapper {\n      margin-top: -3.6em;\n    }\n\n    .champion-name {\n      font-size: 1.4em;\n    }\n  }\n\n  @media (min-width: 1200px) {\n    .champions-section {\n      grid-template-columns: repeat(5, 1fr);\n    }\n  }\n\n  @media (min-width: 1500px) {\n    .champions-section {\n      grid-template-columns: repeat(6, 1fr);\n    }\n\n    .champion-container {\n      max-width: 12rem;\n    }\n  }\n\n  @media (max-width: 500px) {\n    .champions-section {\n      grid-template-columns: repeat(2, 1fr);\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n}\n\n:root {\n  --rasin-black: #1d1e2c;\n  --dark-gold: #927543;\n  --light-gold: #c7ab6e;\n}\n\nbody {\n  font-family: \"Inter\", Arial, Helvetica, sans-serif;\n}\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  padding: 2rem 0;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.modal #main-container {\n  position: relative;\n  margin: auto;\n  padding: 0;\n  max-width: 75%;\n  min-height: 49rem;\n  margin-top: 0;\n  background: rgba(0, 0, 0, 0.1);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -webkit-animation-name: animatetop;\n  -webkit-animation-duration: 0.4s;\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  border: 1px solid #888;\n  display: block;\n}\n.modal .modal-header {\n  background-color: #181a20bf;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 16px;\n  border-color: var(--dark-gold);\n  border-style: solid;\n  padding: 0;\n  border-radius: 0;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n.modal .navigation-bar {\n  display: flex;\n  background-color: var(--rasin-black);\n  width: 100%;\n  align-items: center;\n}\n.modal .close-modal-btn-wrapper {\n  position: absolute;\n  left: 1.2em;\n}\n.modal .close-modal-btn {\n  cursor: pointer;\n  font-weight: 900;\n  font-size: 1.6em;\n}\n.modal .close-modal-btn:hover {\n  color: var(--light-gold);\n}\n.modal .modal-nav-links {\n  display: flex;\n  justify-content: space-evenly;\n  font-size: 22px;\n  width: 100%;\n}\n.modal .modal-nav-link {\n  cursor: pointer;\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n}\n.modal .modal-nav-link:hover {\n  color: var(--dark-gold);\n}\n.modal .champion-heading {\n  margin: auto;\n  text-align: center;\n  font-size: 20px;\n  color: white;\n}\n.modal .champion-name {\n  margin: auto;\n}\n.modal .champion-title {\n  color: var(--light-gold);\n  font-size: 20px;\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n}\n.modal .champion-roles {\n  display: flex;\n  justify-content: center;\n}\n.modal .champion-role {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-left: 2rem;\n  margin-right: 2rem;\n}\n.modal .champion-resource {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-left: 2rem;\n  margin-right: 2rem;\n}\n.modal .champion-role-image {\n  height: 3.5rem;\n  width: 3.5rem;\n}\n.modal .champion-resource-image {\n  height: 3.5rem;\n  width: 3.5rem;\n}\n.modal .champion-role-name {\n  font-weight: 600;\n  font-size: 20px;\n}\n.modal .champion-resource-name {\n  font-weight: 600;\n  font-size: 20px;\n}\n.modal .champion-main-info {\n  padding: 1.8rem;\n  max-width: 34rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: last baseline;\n}\n@-webkit-keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n.modal .lore-container {\n  background-color: #181a20bf;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 16px;\n  border-color: var(--dark-gold);\n  border-style: solid;\n}\n.modal .subheading {\n  margin: auto;\n  margin-bottom: 0.4em;\n  color: var(--light-gold);\n  text-align: center;\n}\n.modal .abilities-container {\n  background-color: #181a20bf;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 16px;\n  border-color: var(--dark-gold);\n  border-style: solid;\n  width: 20em;\n}\n.modal .abilities-heading {\n  text-align: center;\n}\n.modal .ability-imgs {\n  margin-bottom: 1em;\n  display: flex;\n  justify-content: space-evenly;\n}\n.modal .ability-description {\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n}\n.modal .champion-details {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.modal .champion-extra-info {\n  display: flex;\n  flex-direction: column;\n}\n.modal .ability-info {\n  display: none;\n}\n.modal .ability-info.active {\n  display: flex;\n  flex-direction: column;\n}\n.modal .spell-img {\n  cursor: pointer;\n  margin: 0 0.5rem;\n  height: 3.3rem;\n  width: 3.3rem;\n}\n.modal .spell-img.clicked {\n  border-style: solid;\n  border-color: var(--dark-gold);\n  border-width: 4px;\n}\n.modal .champion-tips-section {\n  background-color: #181a20bf;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 16px;\n  border-color: var(--dark-gold);\n  border-style: solid;\n  margin-bottom: auto;\n  max-width: 34rem;\n  text-align: center;\n}\n.modal .champion-tips {\n  display: flex;\n  flex-direction: column;\n}\n.modal .champion-tip {\n  margin-bottom: 1em;\n}\n.modal #stats-container {\n  position: relative;\n  margin: auto;\n  padding: 0;\n  max-width: 75%;\n  min-height: 49rem;\n  margin-top: 0;\n  background: rgba(0, 0, 0, 0.1);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -webkit-animation-name: animatetop;\n  -webkit-animation-duration: 0.4s;\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  border: 1px solid #888;\n  display: none;\n}\n.modal .champion-stats-overview {\n  display: flex;\n  justify-content: space-evenly;\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n  max-width: 25rem;\n  min-width: 20rem;\n  font-size: 24px;\n}\n.modal .win-rate {\n  display: flex;\n  flex-direction: column;\n}\n.modal .pick-rate {\n  display: flex;\n  flex-direction: column;\n}\n.modal .lane-info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.modal .pick-rate-value {\n  margin-top: 0.4em;\n  color: var(--light-gold);\n}\n.modal .win-rate-value {\n  margin-top: 0.4em;\n  color: var(--light-gold);\n}\n.modal .label {\n  font-size: 20px;\n}\n.modal .champion-damage-container {\n  background-color: #181a20bf;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 16px;\n  border-color: var(--dark-gold);\n  border-style: solid;\n  max-height: 17.5rem;\n}\n.modal .damage-heading {\n  text-align: center;\n}\n.modal .circular-chart {\n  display: block;\n  margin: auto;\n  max-width: 80%;\n  max-height: 250px;\n}\n.modal .circle {\n  fill: none;\n  stroke-width: 2.2;\n  stroke-linecap: round;\n  animation: progress 1s ease-out forwards;\n}\n.modal #magic-damage-stroke {\n  stroke: #35a7ff;\n}\n.modal #physical-damage-stroke {\n  stroke: #ff5964;\n}\n.modal #true-damage-stroke {\n  stroke: #ffe74c;\n}\n@keyframes progress {\n  0% {\n    stroke-dasharray: 0 100;\n  }\n}\n.modal .total-damage-text {\n  font-size: 4px;\n  text-anchor: middle;\n  fill: white;\n}\n.modal .total-damage-label {\n  font-size: 3px;\n  text-anchor: middle;\n  fill: var(--dark-gold);\n}\n.modal .champion-main-stats {\n  display: flex;\n  justify-content: space-evenly;\n}\n.modal .champion-item-builds {\n  background-color: #181a20bf;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 16px;\n  border-color: var(--dark-gold);\n  border-style: solid;\n  max-height: 17.5rem;\n}\n.modal .damage-stats-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n}\n.modal .damage-info {\n  display: flex;\n  max-height: 92%;\n  height: 92%;\n}\n.modal .damage-type-container {\n  display: flex;\n  flex-direction: column;\n  font-size: 1em;\n}\n.modal .damage-stats {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n.modal #physical-damage-label {\n  color: #ff5964;\n}\n.modal #magic-damage-label {\n  color: #35a7ff;\n}\n.modal #true-damage-label {\n  color: #ffe74c;\n}\n.modal .item-details-container {\n  background-color: #181a20bf;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 16px;\n  border-color: var(--dark-gold);\n  border-style: solid;\n  font-size: 14px;\n  display: none;\n  position: absolute;\n  background-color: #181a20;\n  margin-right: 2rem;\n  flex-direction: column;\n  justify-content: space-evenly;\n  width: 40%;\n  right: 1em;\n  margin-bottom: 3.5em;\n}\n.modal .item-name {\n  font-weight: 600;\n  font-size: 16px;\n}\n.modal .main-item {\n  display: flex;\n  flex-direction: column-reverse;\n}\n.modal .cost-label {\n  color: var(--light-gold);\n  font-size: 16px;\n}\n.modal .component-items-container {\n  display: flex;\n}\n.modal .component-item-name {\n  font-size: 16px;\n}\n.modal .cost-amount {\n  font-size: 16px;\n}\n.modal .component-item-cost-label {\n  color: var(--light-gold);\n  font-size: 16px;\n}\n.modal .component-item-amount {\n  font-size: 16px;\n}\n.modal .component-item-details-container {\n  background-color: #181a20bf;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 16px;\n  border-color: var(--dark-gold);\n  border-style: solid;\n  font-size: 14px;\n  display: none;\n  position: absolute;\n  background-color: #181a20;\n  flex-direction: column;\n}\n.modal .item-sets-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  max-height: 90%;\n}\n.modal .item-set-container {\n  display: flex;\n  justify-content: center;\n  max-width: 100%;\n  border-style: none;\n  border-width: 2px;\n  padding: 0.4em;\n}\n.modal .main-component-container {\n  background-color: #181a20bf;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 16px;\n  border-color: var(--dark-gold);\n  border-style: solid;\n  background-color: #06040083;\n  border-radius: 1em;\n  color: white;\n  margin: 0em;\n  font-weight: 600;\n  font-size: 16px;\n  border-style: solid;\n  padding: 0;\n  border-radius: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-width: 1px;\n}\n.modal .item-img {\n  max-width: 2.7em;\n  max-height: 2.7em;\n  border-radius: 1em;\n  padding-bottom: 0;\n}\n.modal .component-item-img {\n  max-width: 1.8em;\n  max-height: 1.8em;\n}\n.modal .champion-matchups {\n  background-color: #181a20bf;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 16px;\n  border-color: var(--dark-gold);\n  border-style: solid;\n  max-height: 25.2rem;\n  margin-bottom: 0;\n  border-radius: 0 0 0 0;\n  display: flex;\n  justify-content: space-evenly;\n}\n.modal .matchups {\n  display: flex;\n  justify-content: space-around;\n  max-width: 24rem;\n}\n.modal .matchup-info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  background-color: #17161a;\n  padding: 0.5em;\n  margin: auto 0.5em;\n  border-radius: 1em;\n}\n.modal .matchup-info:hover {\n  background-color: #17161ac9;\n}\n.modal .matchup-stats {\n  display: flex;\n  flex-direction: column;\n  font-size: 14px;\n  font-family: \"Helvetica Neue\", Helvetica, \"Apple SD Gothic Neo\", AppleGothic, Dotum, Arial, Tahoma;\n}\n.modal .enemy-champion-img {\n  border-radius: 50%;\n  max-height: 3em;\n  max-width: 3em;\n  margin-bottom: 0.5em;\n}\n.modal .winrate-against-percentage.blue {\n  color: #35a7ff;\n}\n.modal .winrate-against-percentage.red {\n  color: #ff5964;\n}\n.modal #skins-container {\n  position: relative;\n  margin: auto;\n  padding: 0;\n  max-width: 75%;\n  min-height: 49rem;\n  margin-top: 0;\n  background: rgba(0, 0, 0, 0.1);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -webkit-animation-name: animatetop;\n  -webkit-animation-duration: 0.4s;\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  border: 1px solid #888;\n  display: none;\n  position: absolute;\n  min-height: 0;\n  margin: 0 auto;\n  max-width: 99%;\n  width: 99%;\n}\n.modal #skins-container .navigation-bar {\n  border-bottom: solid 3px var(--dark-gold);\n}\n.modal #skins-container .modal-header {\n  margin-bottom: 0;\n}\n.modal .skin-image-container {\n  box-sizing: border-box;\n  max-width: 100%;\n  display: none;\n}\n.modal .skin-image-container.shown {\n  display: block;\n}\n.modal .skin-image {\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n.modal .skin-name {\n  font-size: 1em;\n}\n.modal #skins-container .champion-heading {\n  display: flex;\n  background-color: var(--rasin-black);\n  justify-content: space-evenly;\n  width: 100%;\n  align-items: center;\n}\n.modal .img-scroll-arrow {\n  cursor: pointer;\n  font-size: 1.5em;\n}\n.modal .img-scroll-arrow:hover {\n  color: var(--dark-gold);\n}\n@media (max-width: 1120px) {\n  .modal .component-item-img {\n    display: none;\n  }\n  .modal .item-sets-container {\n    min-height: 80%;\n  }\n  .modal .item-details-container {\n    min-width: 70%;\n  }\n}\n@media (max-width: 867px) {\n  .modal .item-img {\n    max-height: 2.2rem;\n    max-width: 2.2rem;\n  }\n  .modal .champion-details {\n    flex-direction: column-reverse;\n  }\n  .modal .abilities-container {\n    text-align: center;\n    width: auto;\n    max-width: 20rem;\n  }\n  .modal .lore-container {\n    text-align: center;\n  }\n}\n@media (max-width: 700px) {\n  .modal .item-sets-container {\n    flex-direction: row;\n  }\n  .modal .item-set-container {\n    flex-direction: column;\n  }\n  .modal .matchups {\n    flex-direction: column;\n  }\n  .modal .matchup-info {\n    margin: 0.5em auto;\n  }\n  .modal #main-container {\n    max-width: 100%;\n  }\n  .modal #stats-container {\n    max-width: 100%;\n  }\n}\n@media (max-width: 840px) {\n  .modal .damage-info {\n    flex-direction: column-reverse;\n    justify-content: space-between;\n    font-size: 15px;\n  }\n  .modal .games-played-against {\n    display: none;\n  }\n  .modal .damage-stats-container {\n    flex-direction: row;\n  }\n}\n@media (max-width: 560px) {\n  .modal .champion-main-stats {\n    flex-direction: column;\n  }\n  .modal .item-set-container {\n    flex-direction: row;\n  }\n  .modal .item-sets-container {\n    flex-direction: column;\n  }\n  .modal .champion-damage-container {\n    max-width: 100%;\n    align-items: center;\n  }\n  .modal .damage-stats-info {\n    flex-direction: column;\n  }\n  .modal .damage-info {\n    flex-direction: row;\n    align-items: flex-start;\n  }\n  .modal .damage-type-container {\n    margin: 0.2em auto;\n  }\n  .modal .circular-chart {\n    max-height: 195px;\n    max-width: 80%;\n  }\n  .modal .damage-stats-container {\n    flex-direction: column;\n  }\n  .modal .champion-role {\n    margin-left: 0.5em;\n    margin-right: 0.5em;\n  }\n  .modal .champion-resource {\n    margin-left: 0.5em;\n    margin-right: 0.5em;\n  }\n  .modal .champion-roles {\n    font-size: 20px;\n  }\n  .modal .spell-img {\n    height: 2.8em;\n    width: 2.8em;\n    margin: auto;\n  }\n}\n@media (max-width: 414px) {\n  .modal .champion-stats-overview {\n    font-size: 20px;\n    min-width: 17rem;\n  }\n  .modal .champion-name {\n    font-size: 2rem;\n  }\n  .modal .modal-nav-links {\n    font-size: 18px;\n  }\n  .modal .close-modal-btn-wrapper {\n    left: 0.7em;\n  }\n  .modal .close-modal-btn {\n    font-size: 1.2em;\n  }\n}\n@media (min-width: 1300px) {\n  .modal #skins-container {\n    position: relative;\n    max-width: 70%;\n    min-height: auto;\n  }\n}\n@media (min-width: 1950px) {\n  .modal #skins-container {\n    max-width: 50%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/stylesheets/modals.scss"],"names":[],"mappings":"AAAA;EACE,SAAA;AACF;;AAEA;EACE,sBAAA;EACA,oBAAA;EACA,qBAAA;AACF;;AA8DA;EACE,kDAAA;AA3DF;;AA8DA;EACE,aAAA;EACA,eAAA;EACA,UAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA;EACA,YAAA;EACA,cAAA;EACA,uBAAA;EACA,oCAAA;AA3DF;AA6DE;EAhCA,kBAAA;EACA,YAAA;EACA,UAAA;EACA,cAAA;EACA,iBAAA;EACA,aAAA;EACA,8BAAA;EACA,4EAAA;EACA,kCAAA;EACA,gCAAA;EACA,0BAAA;EACA,wBAAA;EACA,sBAAA;EAsBE,cAAA;AA/CJ;AAkDE;EAjFA,2BAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,oBAAA;EACA,gBAAA;EACA,gBAAA;EACA,eAAA;EACA,8BAAA;EACA,mBAAA;EA0EE,UAAA;EACA,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,sBAAA;AAvCJ;AA0CE;EACE,aAAA;EACA,oCAAA;EACA,WAAA;EACA,mBAAA;AAxCJ;AA2CE;EACE,kBAAA;EACA,WAAA;AAzCJ;AA4CE;EACE,eAAA;EACA,gBAAA;EACA,gBAAA;AA1CJ;AA6CE;EACE,wBAAA;AA3CJ;AA8CE;EACE,aAAA;EACA,6BAAA;EACA,eAAA;EACA,WAAA;AA5CJ;AA+CE;EACE,eAAA;EAjFF,iBAAA;EACA,oBAAA;AAqCF;AA+CE;EACE,uBAAA;AA7CJ;AAgDE;EACE,YAAA;EACA,kBAAA;EACA,eAAA;EACA,YAAA;AA9CJ;AAiDE;EACE,YAAA;AA/CJ;AAkDE;EACE,wBAAA;EACA,eAAA;EAtGF,iBAAA;EACA,oBAAA;AAuDF;AAkDE;EACE,aAAA;EACA,uBAAA;AAhDJ;AAmDE;EAxHA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,iBAAA;EACA,kBAAA;AAwEF;AA+CE;EA5HA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,iBAAA;EACA,kBAAA;AAgFF;AA2CE;EA1IA,cAAA;EACA,aAAA;AAkGF;AA2CE;EA9IA,cAAA;EACA,aAAA;AAsGF;AA2CE;EA7IA,gBAAA;EACA,eAAA;AAqGF;AA2CE;EAjJA,gBAAA;EACA,eAAA;AAyGF;AA2CE;EACE,eAAA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;AAzCJ;AA4CE;EACE;IACE,WAAA;IACA,UAAA;EA1CJ;EA4CE;IACE,MAAA;IACA,UAAA;EA1CJ;AACF;AA6CE;EACE;IACE,WAAA;IACA,UAAA;EA3CJ;EA6CE;IACE,MAAA;IACA,UAAA;EA3CJ;AACF;AA8CE;EA5MA,2BAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,oBAAA;EACA,gBAAA;EACA,gBAAA;EACA,eAAA;EACA,8BAAA;EACA,mBAAA;AAiKF;AAsCE;EAnMA,YAAA;EACA,oBAAA;EACA,wBAAA;EACA,kBAAA;AAgKF;AAoCE;EApNA,2BAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,oBAAA;EACA,gBAAA;EACA,gBAAA;EACA,eAAA;EACA,8BAAA;EACA,mBAAA;EA6ME,WAAA;AAzBJ;AA4BE;EACE,kBAAA;AA1BJ;AA6BE;EACE,kBAAA;EACA,aAAA;EACA,6BAAA;AA3BJ;AA8BE;EA5LA,iBAAA;EACA,oBAAA;AAiKF;AA8BE;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;AA5BJ;AA+BE;EACE,aAAA;EACA,sBAAA;AA7BJ;AAgCE;EACE,aAAA;AA9BJ;AAiCE;EACE,aAAA;EACA,sBAAA;AA/BJ;AAkCE;EACE,eAAA;EACA,gBAAA;EACA,cAAA;EACA,aAAA;AAhCJ;AAmCE;EACE,mBAAA;EACA,8BAAA;EACA,iBAAA;AAjCJ;AAoCE;EAzQA,2BAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,oBAAA;EACA,gBAAA;EACA,gBAAA;EACA,eAAA;EACA,8BAAA;EACA,mBAAA;EAkQE,mBAAA;EACA,gBAAA;EACA,kBAAA;AAzBJ;AA4BE;EACE,aAAA;EACA,sBAAA;AA1BJ;AA6BE;EACE,kBAAA;AA3BJ;AA8BE;EA7OA,kBAAA;EACA,YAAA;EACA,UAAA;EACA,cAAA;EACA,iBAAA;EACA,aAAA;EACA,8BAAA;EACA,4EAAA;EACA,kCAAA;EACA,gCAAA;EACA,0BAAA;EACA,wBAAA;EACA,sBAAA;EAmOE,aAAA;AAhBJ;AAmBE;EACE,aAAA;EACA,6BAAA;EAzPF,iBAAA;EACA,oBAAA;EA0PE,gBAAA;EACA,gBAAA;EACA,eAAA;AAhBJ;AAmBE;EACE,aAAA;EACA,sBAAA;AAjBJ;AAoBE;EACE,aAAA;EACA,sBAAA;AAlBJ;AAqBE;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;AAnBJ;AAsBE;EACE,iBAAA;EACA,wBAAA;AApBJ;AAuBE;EACE,iBAAA;EACA,wBAAA;AArBJ;AAwBE;EACE,eAAA;AAtBJ;AAyBE;EArUA,2BAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,oBAAA;EACA,gBAAA;EACA,gBAAA;EACA,eAAA;EACA,8BAAA;EACA,mBAAA;EA8TE,mBAAA;AAdJ;AAiBE;EACE,kBAAA;AAfJ;AAkBE;EACE,cAAA;EACA,YAAA;EACA,cAAA;EACA,iBAAA;AAhBJ;AAmBE;EACE,UAAA;EACA,iBAAA;EACA,qBAAA;EACA,wCAAA;AAjBJ;AAoBE;EACE,eAAA;AAlBJ;AAqBE;EACE,eAAA;AAnBJ;AAsBE;EACE,eAAA;AApBJ;AAuBE;EACE;IACE,uBAAA;EArBJ;AACF;AAwBE;EACE,cAAA;EACA,mBAAA;EACA,WAAA;AAtBJ;AAyBE;EACE,cAAA;EACA,mBAAA;EACA,sBAAA;AAvBJ;AA0BE;EACE,aAAA;EACA,6BAAA;AAxBJ;AA2BE;EA/XA,2BAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,oBAAA;EACA,gBAAA;EACA,gBAAA;EACA,eAAA;EACA,8BAAA;EACA,mBAAA;EAwXE,mBAAA;AAhBJ;AAmBE;EACE,aAAA;EACA,sBAAA;EACA,6BAAA;EACA,mBAAA;AAjBJ;AAoBE;EACE,aAAA;EACA,eAAA;EACA,WAAA;AAlBJ;AAqBE;EACE,aAAA;EACA,sBAAA;EACA,cAAA;AAnBJ;AAsBE;EACE,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,6BAAA;AApBJ;AAuBE;EACE,cAAA;AArBJ;AAwBE;EACE,cAAA;AAtBJ;AAyBE;EACE,cAAA;AAvBJ;AA0BE;EA1aA,2BAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,oBAAA;EACA,gBAAA;EACA,gBAAA;EACA,eAAA;EACA,8BAAA;EACA,mBAAA;EAmaE,eAAA;EACA,aAAA;EACA,kBAAA;EACA,yBAAA;EACA,kBAAA;EACA,sBAAA;EACA,6BAAA;EACA,UAAA;EACA,UAAA;EACA,oBAAA;AAfJ;AAkBE;EACE,gBAAA;EACA,eAAA;AAhBJ;AAmBE;EACE,aAAA;EACA,8BAAA;AAjBJ;AAoBE;EACE,wBAAA;EACA,eAAA;AAlBJ;AAqBE;EACE,aAAA;AAnBJ;AAsBE;EACE,eAAA;AApBJ;AAuBE;EACE,eAAA;AArBJ;AAwBE;EACE,wBAAA;EACA,eAAA;AAtBJ;AAyBE;EACE,eAAA;AAvBJ;AA0BE;EA5dA,2BAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,oBAAA;EACA,gBAAA;EACA,gBAAA;EACA,eAAA;EACA,8BAAA;EACA,mBAAA;EAqdE,eAAA;EACA,aAAA;EACA,kBAAA;EACA,yBAAA;EACA,sBAAA;AAfJ;AAkBE;EACE,aAAA;EACA,sBAAA;EACA,6BAAA;EACA,mBAAA;EACA,eAAA;AAhBJ;AAmBE;EACE,aAAA;EACA,uBAAA;EACA,eAAA;EACA,kBAAA;EACA,iBAAA;EACA,cAAA;AAjBJ;AAoBE;EAtfA,2BAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,oBAAA;EACA,gBAAA;EACA,gBAAA;EACA,eAAA;EACA,8BAAA;EACA,mBAAA;EA+eE,2BAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,gBAAA;EACA,eAAA;EACA,mBAAA;EACA,UAAA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,iBAAA;AATJ;AAYE;EACE,gBAAA;EACA,iBAAA;EACA,kBAAA;EAEA,iBAAA;AAXJ;AAcE;EACE,gBAAA;EACA,iBAAA;AAZJ;AAeE;EAphBA,2BAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,oBAAA;EACA,gBAAA;EACA,gBAAA;EACA,eAAA;EACA,8BAAA;EACA,mBAAA;EA6gBE,mBAAA;EACA,gBAAA;EACA,sBAAA;EACA,aAAA;EACA,6BAAA;AAJJ;AAOE;EACE,aAAA;EACA,6BAAA;EACA,gBAAA;AALJ;AAQE;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,yBAAA;EACA,cAAA;EACA,kBAAA;EACA,kBAAA;AANJ;AASE;EACE,2BAAA;AAPJ;AAUE;EACE,aAAA;EACA,sBAAA;EACA,eAAA;EACA,kGAAA;AARJ;AAYE;EACE,kBAAA;EACA,eAAA;EACA,cAAA;EACA,oBAAA;AAVJ;AAaE;EACE,cAAA;AAXJ;AAcE;EACE,cAAA;AAZJ;AAeE;EA9hBA,kBAAA;EACA,YAAA;EACA,UAAA;EACA,cAAA;EACA,iBAAA;EACA,aAAA;EACA,8BAAA;EACA,4EAAA;EACA,kCAAA;EACA,gCAAA;EACA,0BAAA;EACA,wBAAA;EACA,sBAAA;EAohBE,aAAA;EACA,kBAAA;EACA,aAAA;EACA,cAAA;EACA,cAAA;EACA,UAAA;AADJ;AAGI;EACE,yCAAA;AADN;AAKE;EACE,gBAAA;AAHJ;AAME;EACE,sBAAA;EACA,eAAA;EACA,aAAA;AAJJ;AAOE;EACE,cAAA;AALJ;AAQE;EACE,MAAA;EACA,OAAA;EACA,WAAA;AANJ;AASE;EACE,cAAA;AAPJ;AAUE;EACE,aAAA;EACA,oCAAA;EACA,6BAAA;EACA,WAAA;EACA,mBAAA;AARJ;AAWE;EACE,eAAA;EACA,gBAAA;AATJ;AAYE;EACE,uBAAA;AAVJ;AAaE;EACE;IACE,aAAA;EAXJ;EAcE;IACE,eAAA;EAZJ;EAeE;IACE,cAAA;EAbJ;AACF;AAgBE;EACE;IACE,kBAAA;IACA,iBAAA;EAdJ;EAiBE;IACE,8BAAA;EAfJ;EAkBE;IACE,kBAAA;IACA,WAAA;IACA,gBAAA;EAhBJ;EAmBE;IACE,kBAAA;EAjBJ;AACF;AAoBE;EACE;IACE,mBAAA;EAlBJ;EAqBE;IACE,sBAAA;EAnBJ;EAsBE;IACE,sBAAA;EApBJ;EAuBE;IACE,kBAAA;EArBJ;EAwBE;IACE,eAAA;EAtBJ;EAyBE;IACE,eAAA;EAvBJ;AACF;AA0BE;EACE;IACE,8BAAA;IACA,8BAAA;IACA,eAAA;EAxBJ;EA2BE;IACE,aAAA;EAzBJ;EA4BE;IACE,mBAAA;EA1BJ;AACF;AA6BE;EACE;IACE,sBAAA;EA3BJ;EA8BE;IACE,mBAAA;EA5BJ;EA+BE;IACE,sBAAA;EA7BJ;EAgCE;IACE,eAAA;IACA,mBAAA;EA9BJ;EAiCE;IACE,sBAAA;EA/BJ;EAkCE;IACE,mBAAA;IACA,uBAAA;EAhCJ;EAmCE;IACE,kBAAA;EAjCJ;EAoCE;IACE,iBAAA;IACA,cAAA;EAlCJ;EAqCE;IACE,sBAAA;EAnCJ;EAsCE;IACE,kBAAA;IACA,mBAAA;EApCJ;EAuCE;IACE,kBAAA;IACA,mBAAA;EArCJ;EAwCE;IACE,eAAA;EAtCJ;EAyCE;IACE,aAAA;IACA,YAAA;IACA,YAAA;EAvCJ;AACF;AA0CE;EACE;IACE,eAAA;IACA,gBAAA;EAxCJ;EA2CE;IACE,eAAA;EAzCJ;EA4CE;IACE,eAAA;EA1CJ;EA6CE;IACE,WAAA;EA3CJ;EA8CE;IACE,gBAAA;EA5CJ;AACF;AA+CE;EACE;IACE,kBAAA;IACA,cAAA;IACA,gBAAA;EA7CJ;AACF;AAgDE;EACE;IACE,cAAA;EA9CJ;AACF","sourcesContent":["* {\n  margin: 0;\n}\n\n:root {\n  --rasin-black: #1d1e2c;\n  --dark-gold: #927543;\n  --light-gold: #c7ab6e;\n}\n\n@mixin containerBackground {\n  background-color: #181a20bf;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 16px;\n  border-color: var(--dark-gold);\n  border-style: solid;\n}\n\n@mixin subHeadingStyle {\n  margin: auto;\n  margin-bottom: 0.4em;\n  color: var(--light-gold);\n  text-align: center;\n}\n\n@mixin iconSize {\n  height: 3.5rem;\n  width: 3.5rem;\n}\n\n@mixin iconText {\n  font-weight: 600;\n  font-size: 20px;\n}\n\n@mixin iconContainer {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-left: 2rem;\n  margin-right: 2rem;\n}\n\n@mixin smallMargin {\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n}\n\n@mixin modalContentContainer {\n  position: relative;\n  margin: auto;\n  padding: 0;\n  max-width: 75%;\n  min-height: 49rem;\n  margin-top: 0;\n  background: rgba(0, 0, 0, 0.1);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -webkit-animation-name: animatetop;\n  -webkit-animation-duration: 0.4s;\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  border: 1px solid #888;\n}\n\nbody {\n  font-family: \"Inter\", Arial, Helvetica, sans-serif;\n}\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  padding: 2rem 0;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgb(0, 0, 0, 0.4);\n\n  #main-container {\n    @include modalContentContainer();\n    display: block;\n  }\n\n  .modal-header {\n    @include containerBackground();\n    padding: 0;\n    border-radius: 0;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n  }\n\n  .navigation-bar {\n    display: flex;\n    background-color: var(--rasin-black);\n    width: 100%;\n    align-items: center;\n  }\n\n  .close-modal-btn-wrapper {\n    position: absolute;\n    left: 1.2em;\n  }\n\n  .close-modal-btn {\n    cursor: pointer;\n    font-weight: 900;\n    font-size: 1.6em;\n  }  \n\n  .close-modal-btn:hover {\n    color: var(--light-gold);\n  }\n\n  .modal-nav-links {\n    display: flex;\n    justify-content: space-evenly;\n    font-size: 22px;\n    width: 100%;\n  }\n\n  .modal-nav-link {\n    cursor: pointer;\n    @include smallMargin();\n  }\n\n  .modal-nav-link:hover {\n    color: var(--dark-gold);\n  }\n\n  .champion-heading {\n    margin: auto;\n    text-align: center;\n    font-size: 20px;\n    color: white;\n  }\n\n  .champion-name {\n    margin: auto;\n  }\n\n  .champion-title {\n    color: var(--light-gold);\n    font-size: 20px;\n    @include smallMargin();\n  }\n\n  .champion-roles {\n    display: flex;\n    justify-content: center;\n  }\n\n  .champion-role {\n    @include iconContainer();\n  }\n\n  .champion-resource {\n    @include iconContainer();\n  }\n\n  .champion-role-image {\n    @include iconSize();\n  }\n\n  .champion-resource-image {\n    @include iconSize();\n  }\n\n  .champion-role-name {\n    @include iconText();\n  }\n\n  .champion-resource-name {\n    @include iconText();\n  }\n\n  .champion-main-info {\n    padding: 1.8rem;\n    max-width: 34rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: last baseline;\n  }\n\n  @-webkit-keyframes animatetop {\n    from {\n      top: -300px;\n      opacity: 0;\n    }\n    to {\n      top: 0;\n      opacity: 1;\n    }\n  }\n\n  @keyframes animatetop {\n    from {\n      top: -300px;\n      opacity: 0;\n    }\n    to {\n      top: 0;\n      opacity: 1;\n    }\n  }\n\n  .lore-container {\n    @include containerBackground();\n  }\n\n  .subheading {\n    @include subHeadingStyle();\n  }\n\n  .abilities-container {\n    @include containerBackground();\n    width: 20em;\n  }\n\n  .abilities-heading {\n    text-align: center;\n  }\n\n  .ability-imgs {\n    margin-bottom: 1em;\n    display: flex;\n    justify-content: space-evenly;\n  }\n\n  .ability-description {\n    @include smallMargin();\n  }\n\n  .champion-details {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .champion-extra-info {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .ability-info {\n    display: none;\n  }\n\n  .ability-info.active {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .spell-img {\n    cursor: pointer;\n    margin: 0 0.5rem;\n    height: 3.3rem;\n    width: 3.3rem;\n  }\n\n  .spell-img.clicked {\n    border-style: solid;\n    border-color: var(--dark-gold);\n    border-width: 4px;\n  }\n\n  .champion-tips-section {\n    @include containerBackground();\n    margin-bottom: auto;\n    max-width: 34rem;\n    text-align: center;\n  }\n\n  .champion-tips {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .champion-tip {\n    margin-bottom: 1em;\n  }\n\n  #stats-container {\n    @include modalContentContainer();\n    display: none;\n  }\n\n  .champion-stats-overview {\n    display: flex;\n    justify-content: space-evenly;\n    @include smallMargin();\n    max-width: 25rem;\n    min-width: 20rem;\n    font-size: 24px;\n  }\n\n  .win-rate {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .pick-rate {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .lane-info {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .pick-rate-value {\n    margin-top: 0.4em;\n    color: var(--light-gold);\n  }\n\n  .win-rate-value {\n    margin-top: 0.4em;\n    color: var(--light-gold);\n  }\n\n  .label {\n    font-size: 20px;\n  }\n\n  .champion-damage-container {\n    @include containerBackground();\n    max-height: 17.5rem;\n  }\n\n  .damage-heading {\n    text-align: center;\n  }\n\n  .circular-chart {\n    display: block;\n    margin: auto;\n    max-width: 80%;\n    max-height: 250px;\n  }\n\n  .circle {\n    fill: none;\n    stroke-width: 2.2;\n    stroke-linecap: round;\n    animation: progress 1s ease-out forwards;\n  }\n\n  #magic-damage-stroke {\n    stroke: #35a7ff;\n  }\n\n  #physical-damage-stroke {\n    stroke: #ff5964;\n  }\n\n  #true-damage-stroke {\n    stroke: #ffe74c;\n  }\n\n  @keyframes progress {\n    0% {\n      stroke-dasharray: 0 100;\n    }\n  }\n\n  .total-damage-text {\n    font-size: 4px;\n    text-anchor: middle;\n    fill: white;\n  }\n\n  .total-damage-label {\n    font-size: 3px;\n    text-anchor: middle;\n    fill: var(--dark-gold);\n  }\n\n  .champion-main-stats {\n    display: flex;\n    justify-content: space-evenly;\n  }\n\n  .champion-item-builds {\n    @include containerBackground();\n    max-height: 17.5rem;\n  }\n\n  .damage-stats-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n  }\n\n  .damage-info {\n    display: flex;\n    max-height: 92%;\n    height: 92%;\n  }\n\n  .damage-type-container {\n    display: flex;\n    flex-direction: column;\n    font-size: 1em;\n  }\n\n  .damage-stats {\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n  }\n\n  #physical-damage-label {\n    color: #ff5964;\n  }\n\n  #magic-damage-label {\n    color: #35a7ff;\n  }\n\n  #true-damage-label {\n    color: #ffe74c;\n  }\n\n  .item-details-container {\n    @include containerBackground();\n    font-size: 14px;\n    display: none;\n    position: absolute;\n    background-color: #181a20;\n    margin-right: 2rem;\n    flex-direction: column;\n    justify-content: space-evenly;\n    width: 40%;\n    right: 1em;\n    margin-bottom: 3.5em;\n  }\n\n  .item-name {\n    font-weight: 600;\n    font-size: 16px;\n  }\n\n  .main-item {\n    display: flex;\n    flex-direction: column-reverse;\n  }\n\n  .cost-label {\n    color: var(--light-gold);\n    font-size: 16px;\n  }\n\n  .component-items-container {\n    display: flex;\n  }\n\n  .component-item-name {\n    font-size: 16px;\n  }\n\n  .cost-amount {\n    font-size: 16px;\n  }\n\n  .component-item-cost-label {\n    color: var(--light-gold);\n    font-size: 16px;\n  }\n\n  .component-item-amount {\n    font-size: 16px;\n  }\n\n  .component-item-details-container {\n    @include containerBackground();\n    font-size: 14px;\n    display: none;\n    position: absolute;\n    background-color: #181a20;\n    flex-direction: column;\n  }\n\n  .item-sets-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    max-height: 90%;\n  }\n\n  .item-set-container {\n    display: flex;\n    justify-content: center;\n    max-width: 100%;\n    border-style: none;\n    border-width: 2px;\n    padding: 0.4em;\n  }\n\n  .main-component-container {\n    @include containerBackground();\n    background-color: #06040083;\n    border-radius: 1em;\n    color: white;\n    margin: 0em;\n    font-weight: 600;\n    font-size: 16px;\n    border-style: solid;\n    padding: 0;\n    border-radius: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border-width: 1px;\n  }\n\n  .item-img {\n    max-width: 2.7em;\n    max-height: 2.7em;\n    border-radius: 1em;\n    //padding: 1em;\n    padding-bottom: 0;\n  }\n\n  .component-item-img {\n    max-width: 1.8em;\n    max-height: 1.8em;\n  }\n\n  .champion-matchups {\n    @include containerBackground();\n    max-height: 25.2rem;\n    margin-bottom: 0;\n    border-radius: 0 0 0 0;\n    display: flex;\n    justify-content: space-evenly;\n  }\n\n  .matchups {\n    display: flex;\n    justify-content: space-around;\n    max-width: 24rem;\n  }\n\n  .matchup-info {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    background-color: #17161a;\n    padding: 0.5em;\n    margin: auto 0.5em;\n    border-radius: 1em;\n  }\n\n  .matchup-info:hover {\n    background-color: #17161ac9;\n  }\n\n  .matchup-stats {\n    display: flex;\n    flex-direction: column;\n    font-size: 14px;\n    font-family: \"Helvetica Neue\", Helvetica, \"Apple SD Gothic Neo\", AppleGothic,\n      Dotum, Arial, Tahoma;\n  }\n\n  .enemy-champion-img {\n    border-radius: 50%;\n    max-height: 3em;\n    max-width: 3em;\n    margin-bottom: 0.5em;\n  }\n\n  .winrate-against-percentage.blue {\n    color: #35a7ff;\n  }\n\n  .winrate-against-percentage.red {\n    color: #ff5964;\n  }\n\n  #skins-container {\n    @include modalContentContainer();\n    display:none;\n    position: absolute;\n    min-height: 0;\n    margin: 0 auto;\n    max-width: 99%;\n    width: 99%;\n\n    .navigation-bar {\n      border-bottom: solid 3px var(--dark-gold);\n    }\n  }\n\n  #skins-container .modal-header {\n    margin-bottom: 0;\n  }\n\n  .skin-image-container {\n    box-sizing: border-box;\n    max-width: 100%;\n    display: none;\n  }\n\n  .skin-image-container.shown {\n    display: block;\n  }\n\n  .skin-image {\n    top: 0;\n    left: 0;\n    width: 100%;\n  }\n\n  .skin-name {\n    font-size: 1em;\n  }\n\n  #skins-container .champion-heading {\n    display: flex;\n    background-color: var(--rasin-black);\n    justify-content: space-evenly;\n    width: 100%;\n    align-items: center;\n  }\n\n  .img-scroll-arrow {\n    cursor: pointer;\n    font-size: 1.5em;\n  }\n\n  .img-scroll-arrow:hover {\n    color: var(--dark-gold);\n  }\n\n  @media (max-width: 1120px) {\n    .component-item-img {\n      display: none;\n    }\n\n    .item-sets-container {\n      min-height: 80%;\n    }\n\n    .item-details-container {\n      min-width: 70%;\n    }\n  }\n\n  @media (max-width: 867px) {\n    .item-img {\n      max-height: 2.2rem;\n      max-width: 2.2rem;\n    }\n\n    .champion-details {\n      flex-direction: column-reverse;\n    }\n\n    .abilities-container {\n      text-align: center;\n      width: auto;\n      max-width: 20rem;\n    }\n\n    .lore-container {\n      text-align: center;\n    }\n  }\n\n  @media (max-width: 700px) {\n    .item-sets-container {\n      flex-direction: row;\n    }\n\n    .item-set-container {\n      flex-direction: column;\n    }\n\n    .matchups {\n      flex-direction: column;\n    }\n\n    .matchup-info {\n      margin: 0.5em auto;\n    }\n\n    #main-container {\n      max-width: 100%;\n    }\n\n    #stats-container {\n      max-width: 100%;\n    }\n  }\n\n  @media (max-width: 840px) {\n    .damage-info {\n      flex-direction: column-reverse;\n      justify-content: space-between;\n      font-size: 15px;\n    }\n\n    .games-played-against {\n      display: none;\n    }\n\n    .damage-stats-container {\n      flex-direction: row;\n    }\n  }\n\n  @media (max-width: 560px) {\n    .champion-main-stats {\n      flex-direction: column;\n    }\n\n    .item-set-container {\n      flex-direction: row;\n    }\n\n    .item-sets-container {\n      flex-direction: column;\n    }\n\n    .champion-damage-container {\n      max-width: 100%;\n      align-items: center;\n    }\n\n    .damage-stats-info {\n      flex-direction: column;\n    }\n\n    .damage-info {\n      flex-direction: row;\n      align-items: flex-start;\n    }\n\n    .damage-type-container {\n      margin: 0.2em auto;\n    }\n\n    .circular-chart {\n      max-height: 195px;\n      max-width: 80%;\n    }\n\n    .damage-stats-container {\n      flex-direction: column;\n    }\n\n    .champion-role {\n      margin-left: 0.5em;\n      margin-right: 0.5em;\n    }\n\n    .champion-resource {\n      margin-left: 0.5em;\n      margin-right: 0.5em;\n    }\n\n    .champion-roles {\n      font-size: 20px;\n    }\n\n    .spell-img {\n      height: 2.8em;\n      width: 2.8em;\n      margin: auto;\n    }\n  }\n\n  @media (max-width: 414px) {\n    .champion-stats-overview {\n      font-size: 20px;\n      min-width: 17rem;\n    }\n\n    .champion-name {\n      font-size: 2rem;\n    }\n\n    .modal-nav-links {\n      font-size: 18px;\n    }\n\n    .close-modal-btn-wrapper {\n      left: 0.7em;\n    }\n\n    .close-modal-btn {\n      font-size: 1.2em;\n    }\n  }\n\n  @media (min-width: 1300px) {\n    #skins-container {\n      position: relative;\n      max-width: 70%;\n      min-height: auto;\n    }\n  }\n\n  @media (min-width: 1950px) {\n    #skins-container {\n      max-width: 50%;\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
            return fetch('http://ddragon.leagueoflegends.com/cdn/11.22.1/data/en_US/champion.json');

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            allChampions = _context.sent;
            // const values = Object.values(allChampions.data);
            // values.forEach((value) => console.log(value.info.difficulty));
            (0,_templates_championsPage__WEBPACK_IMPORTED_MODULE_4__["default"])();
            _appControl_championsPageController__WEBPACK_IMPORTED_MODULE_5__["default"].championsPageListeners();

          case 8:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF3Qyw0Q0FBNEMsS0FBSyx5Q0FBeUMsdUJBQXVCLEtBQUssR0FBRyw2QkFBNkIsd0NBQXdDLDRDQUE0QyxLQUFLLEdBQUcsT0FBTyx3R0FBd0csTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxLQUFLLE1BQU0sV0FBVyxLQUFLLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxN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LGtCQUFrQixLQUFLLDZCQUE2Qix1QkFBdUIsS0FBSyxHQUFHLDhCQUE4Qiw2QkFBNkIseUJBQXlCLHFCQUFxQix1QkFBdUIsS0FBSyxHQUFHLDhCQUE4Qiw2QkFBNkIscUJBQXFCLEtBQUssR0FBRyxPQUFPLDhGQUE4RixVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxZQUFZLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxZQUFZLFVBQVUsTUFBTSxNQUFNLFlBQVksVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sWUFBWSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sWUFBWSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxZQUFZLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFlBQVksS0FBSyxNQUFNLFdBQVcsS0FBSyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sWUFBWSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxZQUFZLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFlBQVksVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxLQUFLLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxZQUFZLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sWUFBWSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLGFBQWEsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsYUFBYSxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLGFBQWEsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxLQUFLLE1BQU0sV0FBVyxLQUFLLE1BQU0sV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcs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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsY0FBYztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsbUJBQW1CO0FBQ3BEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0Esa0JBQWtCOztBQUVsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0JBQWdCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxLQUEwQixvQkFBb0IsQ0FBRTtBQUNsRDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2h2QkEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBc0o7QUFDdEo7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxnSUFBTzs7OztBQUlnRztBQUN4SCxPQUFPLGlFQUFlLGdJQUFPLElBQUksdUlBQWMsR0FBRyx1SUFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBbUo7QUFDbko7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyw2SEFBTzs7OztBQUk2RjtBQUNySCxPQUFPLGlFQUFlLDZIQUFPLElBQUksb0lBQWMsR0FBRyxvSUFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUVBLElBQU1DLElBQUk7QUFBQSxzTEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNZaFAsS0FBSyxDQUFDLHlFQUFELENBRGpCOztBQUFBO0FBQ0xFLFlBQUFBLFFBREs7QUFBQTtBQUFBLG1CQUVnQkEsUUFBUSxDQUFDQyxJQUFULEVBRmhCOztBQUFBO0FBRUwyRCxZQUFBQSxZQUZLO0FBR1g7QUFDQTtBQUNBakUsWUFBQUEsb0VBQWE7QUFDYmhCLFlBQUFBLGtHQUFBOztBQU5XO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQUptUSxJQUFJO0FBQUE7QUFBQTtBQUFBLEdBQVY7O0FBUUFBLElBQUksRyIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9hcHBDb250cm9sL2NoYW1waW9uTW9kYWxDb250cm9sbGVyLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvYXBwQ29udHJvbC9jaGFtcGlvbnNQYWdlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL2NoYW1waW9uRGF0YS9jaGFtcGlvbkRldGFpbHMuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9jaGFtcGlvbkRhdGEvY2hhbXBpb25TdGF0cy5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL2NoYW1waW9uRGF0YS9nZXRBbGxDaGFtcGlvbnMuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9jaGFtcGlvbkRhdGEvaXRlbUluZm8uanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9oZWxwZXJzL2Ryb3Bkb3duU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL2hlbHBlcnMvZWxlbWVudENyZWF0aW9uLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvdGVtcGxhdGVzL2NoYW1waW9uRGV0YWlsc01vZGFsLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvdGVtcGxhdGVzL2NoYW1waW9uU2tpbnNNb2RhbC5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL3RlbXBsYXRlcy9jaGFtcGlvblN0YXRzTW9kYWwuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy90ZW1wbGF0ZXMvY2hhbXBpb25zUGFnZS5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL3RlbXBsYXRlcy9yZW5kZXJIZWxwZXJzLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvc3R5bGVzaGVldHMvY2hhbXBpb25zLnNjc3MiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9zdHlsZXNoZWV0cy9tb2RhbHMuc2NzcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9zdHlsZXNoZWV0cy9jaGFtcGlvbnMuc2Nzcz82OGM3Iiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvc3R5bGVzaGVldHMvbW9kYWxzLnNjc3M/Y2Y4MyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvL2hvbWUvZGF5by9EZXNrdG9wL29kaW5Qcm9qZWN0L0xlYWd1ZS1BcHAvZnJvbnRlbmQvc3JjL2ltYWdlc3xzeW5jfG5vbnJlY3Vyc2l2ZXwvXFwuKHBuZ3xqcGUiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xlYWd1ZS1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2xlYWd1ZS1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9sZWFndWUtYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL2NoYW1waW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiY29uc3QgQ2hhbXBpb25Nb2RhbENvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBjb25zdCB0b2dnbGVBY3RpdmVBYmlsaXR5ID0gKGNsaWNrZWRBYmlsaXR5SWQpID0+IHtcbiAgICBjb25zdCBhYmlsaXR5SW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNwZWxsLWltZycpO1xuICAgIGNvbnN0IGFiaWxpdHlJbmZvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hYmlsaXR5LWluZm8nKTtcblxuICAgIGFiaWxpdHlJbWFnZXMuZm9yRWFjaCgoaW1nKSA9PiB7XG4gICAgICBpbWcuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZCcpO1xuICAgIH0pO1xuICAgIGFiaWxpdHlJbmZvcy5mb3JFYWNoKChpbmZvKSA9PiB7XG4gICAgICBpbmZvLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY2xpY2tlZEltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Y2xpY2tlZEFiaWxpdHlJZH0taW1nYCk7XG4gICAgY2xpY2tlZEltYWdlLmNsYXNzTmFtZSA9ICdzcGVsbC1pbWcgY2xpY2tlZCc7XG5cbiAgICBjb25zdCBhY3RpdmVBYmlsaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Y2xpY2tlZEFiaWxpdHlJZH0tYWJpbGl0eWApO1xuICAgIGFjdGl2ZUFiaWxpdHkuY2xhc3NOYW1lID0gJ2FiaWxpdHktaW5mbyBhY3RpdmUnO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZU1vZGFsVGVtcGxhdGUgPSAoY2xpY2tlZE1vZGFsTmF2TGluaykgPT4ge1xuICAgIGNvbnN0IHRlbXBsYXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC10ZW1wbGF0ZScpO1xuICAgIHRlbXBsYXRlcy5mb3JFYWNoKCh0ZW1wbGF0ZSkgPT4ge1xuICAgICAgaWYgKHRlbXBsYXRlLmlkLnN1YnN0cmluZygwLCB0ZW1wbGF0ZS5pZC5pbmRleE9mKCctJykpID09PSBjbGlja2VkTW9kYWxOYXZMaW5rLmlkKSB7XG4gICAgICAgIGNvbnN0IGNob3NlblRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgICAgIGNob3NlblRlbXBsYXRlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgaGlkZGVuVGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICAgICAgaGlkZGVuVGVtcGxhdGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBkaXNwYXlJdGVtRGV0YWlscyA9IChob3ZlcmVkSXRlbUltYWdlKSA9PiB7XG4gICAgY29uc3QgaXRlbURldGFpbHMgPSBob3ZlcmVkSXRlbUltYWdlLm5leHRFbGVtZW50U2libGluZztcbiAgICBpdGVtRGV0YWlscy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICB9O1xuXG4gIGNvbnN0IGhpZGVJdGVtRGV0YWlscyA9ICh1bmhvdmVyZWRJdGVtSW1hZ2UpID0+IHtcbiAgICBjb25zdCBpdGVtRGV0YWlscyA9IHVuaG92ZXJlZEl0ZW1JbWFnZS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgaXRlbURldGFpbHMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfTtcblxuICBjb25zdCB0b2dnbGVTa2luSW1hZ2VzID0gKGFycm93Q2xhc3NMaXN0KSA9PiB7XG4gICAgY29uc3Qgc2tpbkltYWdlc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5za2luLWltYWdlcy1jb250YWluZXInKTtcbiAgICBjb25zdCBjdXJyZW50U2hvd25JbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5za2luLWltYWdlLWNvbnRhaW5lci5zaG93bicpO1xuICAgIGNvbnN0IHNraW5OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNraW4tbmFtZScpO1xuXG4gICAgY3VycmVudFNob3duSW1hZ2UuY2xhc3NOYW1lID0gJ3NraW4taW1hZ2UtY29udGFpbmVyJztcbiAgICBjb25zdCBmaXJzdEltYWdlID0gc2tpbkltYWdlc0NvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICBjb25zdCBsYXN0SW1hZ2UgPSBza2luSW1hZ2VzQ29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQ7XG5cbiAgICBpZiAoZmlyc3RJbWFnZSA9PT0gY3VycmVudFNob3duSW1hZ2UgJiYgYXJyb3dDbGFzc0xpc3QuaW5jbHVkZXMoJ2xlZnQtYXJyb3cnKSkge1xuICAgICAgbGFzdEltYWdlLmNsYXNzTmFtZSA9ICdza2luLWltYWdlLWNvbnRhaW5lciBzaG93bic7XG4gICAgICBza2luTmFtZS50ZXh0Q29udGVudCA9IGxhc3RJbWFnZS5pZDtcbiAgICB9IGVsc2UgaWYgKGxhc3RJbWFnZSA9PT0gY3VycmVudFNob3duSW1hZ2UgJiYgYXJyb3dDbGFzc0xpc3QuaW5jbHVkZXMoJ3JpZ2h0LWFycm93JykpIHtcbiAgICAgIGZpcnN0SW1hZ2UuY2xhc3NOYW1lID0gJ3NraW4taW1hZ2UtY29udGFpbmVyIHNob3duJztcbiAgICAgIHNraW5OYW1lLnRleHRDb250ZW50ID0gZmlyc3RJbWFnZS5pZDtcbiAgICB9IGVsc2UgaWYgKGFycm93Q2xhc3NMaXN0LmluY2x1ZGVzKCdyaWdodC1hcnJvdycpKSB7XG4gICAgICBjdXJyZW50U2hvd25JbWFnZS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NOYW1lID0gJ3NraW4taW1hZ2UtY29udGFpbmVyIHNob3duJztcbiAgICAgIHNraW5OYW1lLnRleHRDb250ZW50ID0gY3VycmVudFNob3duSW1hZ2UubmV4dEVsZW1lbnRTaWJsaW5nLmlkO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50U2hvd25JbWFnZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTmFtZSA9ICdza2luLWltYWdlLWNvbnRhaW5lciBzaG93bic7XG4gICAgICBza2luTmFtZS50ZXh0Q29udGVudCA9IGN1cnJlbnRTaG93bkltYWdlLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaWQ7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNsZWFyTWFpbk1vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1jb250YWluZXInKTtcbiAgICBjb25zdCBjaGFtcGlvbk5hbWUgPSBtYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbi1uYW1lJyk7XG4gICAgY29uc3QgY2hhbXBpb25UaXRsZSA9IG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLXRpdGxlJyk7XG4gICAgY29uc3QgY2hhbXBpb25Sb2xlcyA9IG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLXJvbGVzJyk7XG4gICAgY29uc3QgY2hhbXBpb25Mb3JlID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tbG9yZScpO1xuICAgIGNvbnN0IGFiaWxpdHlEZXRhaWxzID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuYWJpbGl0eS1kZXRhaWxzJyk7XG4gICAgY29uc3QgY2hhbXBpb25UaXBzID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tdGlwcycpO1xuXG4gICAgY29uc3QgbWFpbk1vZGFsSGVhZGVyID0gW2NoYW1waW9uTmFtZSwgY2hhbXBpb25UaXRsZSwgY2hhbXBpb25Sb2xlc107XG4gICAgbWFpbk1vZGFsSGVhZGVyLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gZWxlbWVudDtcbiAgICAgIGN1cnJlbnRFbGVtZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgfSk7XG5cbiAgICBjaGFtcGlvbkxvcmUucmVtb3ZlKCk7XG4gICAgYWJpbGl0eURldGFpbHMucmVtb3ZlKCk7XG4gICAgY2hhbXBpb25UaXBzLnJlbW92ZSgpO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyU3RhdHNNb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCBzdGF0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGF0cy1jb250YWluZXInKTtcbiAgICBjb25zdCBjaGFtcGlvbk5hbWUgPSBzdGF0c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tbmFtZScpO1xuICAgIGNvbnN0IGNoYW1waW9uVGl0bGUgPSBzdGF0c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tdGl0bGUnKTtcbiAgICBjb25zdCBjaGFtcGlvblN0YXRzT3ZlcnZpZXcgPSBzdGF0c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tc3RhdHMtb3ZlcnZpZXcnKTtcbiAgICBjb25zdCBhbGxkYW1hZ2VTdGF0cyA9IHN0YXRzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYW1hZ2Utc3RhdHMnKTtcbiAgICBjb25zdCBpdGVtU2V0c0NvbnRhaW5lciA9IHN0YXRzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLXNldHMtY29udGFpbmVyJyk7XG4gICAgY29uc3QgYmVzdE1hdGNodXBzID0gc3RhdHNDb250YWluZXIucXVlcnlTZWxlY3RvcignLmJlc3QtbWF0Y2h1cHMnKTtcbiAgICBjb25zdCB3b3JzdE1hdGNodXBzID0gc3RhdHNDb250YWluZXIucXVlcnlTZWxlY3RvcignLndvcnN0LW1hdGNodXBzJyk7XG5cbiAgICBjb25zdCBzdGF0c01vZGFsSGVhZGVyID0gW2NoYW1waW9uTmFtZSwgY2hhbXBpb25UaXRsZSwgY2hhbXBpb25TdGF0c092ZXJ2aWV3XTtcbiAgICBzdGF0c01vZGFsSGVhZGVyLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gZWxlbWVudDtcbiAgICAgIGN1cnJlbnRFbGVtZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgfSk7XG4gICAgYWxsZGFtYWdlU3RhdHMuZm9yRWFjaCgoZGFtYWdlU3RhdCkgPT4ge1xuICAgICAgY29uc3QgZGFtYWdlU3RhdEVsZW1lbnQgPSBkYW1hZ2VTdGF0O1xuICAgICAgZGFtYWdlU3RhdEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfSk7XG4gICAgY29uc3Qgc3RhdHNNb2RhbENvbnRlbnQgPSBbaXRlbVNldHNDb250YWluZXIsIGJlc3RNYXRjaHVwcywgd29yc3RNYXRjaHVwc107XG4gICAgc3RhdHNNb2RhbENvbnRlbnQuZm9yRWFjaCgoY29udGVudCkgPT4ge1xuICAgICAgY29uc3QgY29udGVudEVsZW1lbnQgPSBjb250ZW50O1xuICAgICAgY29udGVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgY2xlYXJTa2luc01vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IHNraW5JbWFnZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2tpbi1pbWFnZXMtY29udGFpbmVyJyk7XG4gICAgc2tpbkltYWdlc0NvbnRhaW5lci5yZW1vdmUoKTtcbiAgfTtcblxuICBjb25zdCBjbG9zZUNoYW1waW9uTW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tY29udGFpbmVyJyk7XG4gICAgY29uc3Qgc3RhdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhdHMtY29udGFpbmVyJyk7XG4gICAgY29uc3Qgc2tpbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2tpbnMtY29udGFpbmVyJyk7XG5cbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIG1haW5Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgc3RhdHNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBza2luc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9O1xuXG4gIGNvbnN0IG1vZGFsQ2xpY2tFdmVudHMgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuXG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdzcGVsbC1pbWcnKSB7XG4gICAgICBjb25zdCBkYXNoSW5kZXggPSBldmVudC50YXJnZXQuaWQuaW5kZXhPZignLScpO1xuICAgICAgY29uc3QgYWJpbGl0eUlkID0gZXZlbnQudGFyZ2V0LmlkLnNsaWNlKDAsIGRhc2hJbmRleCk7XG4gICAgICB0b2dnbGVBY3RpdmVBYmlsaXR5KGFiaWxpdHlJZCk7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdtb2RhbC1uYXYtbGluaycpIHtcbiAgICAgIGNoYW5nZU1vZGFsVGVtcGxhdGUoZXZlbnQudGFyZ2V0KTtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuZnJvbShldmVudC50YXJnZXQuY2xhc3NMaXN0KS5pbmNsdWRlcygnaW1nLXNjcm9sbC1hcnJvdycpKSB7XG4gICAgICB0b2dnbGVTa2luSW1hZ2VzKEFycmF5LmZyb20oZXZlbnQudGFyZ2V0LmNsYXNzTGlzdCkpO1xuICAgIH1cblxuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnY2xvc2UtbW9kYWwtYnRuJykge1xuICAgICAgbW9kYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtb2RhbENsaWNrRXZlbnRzKTtcbiAgICAgIGNsb3NlQ2hhbXBpb25Nb2RhbCgpO1xuICAgICAgY2xlYXJNYWluTW9kYWwoKTtcbiAgICAgIGNsZWFyU3RhdHNNb2RhbCgpO1xuICAgICAgY2xlYXJTa2luc01vZGFsKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG1vZGFsTW91c2VvdmVyRXZlbnRzID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdpdGVtLWltZydcbiAgICAgIHx8IGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdjb21wb25lbnQtaXRlbS1pbWcnKSB7XG4gICAgICBkaXNwYXlJdGVtRGV0YWlscyhldmVudC50YXJnZXQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBtb2RhbE1vdXNlb3V0RXZlbnRzID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdpdGVtLWltZydcbiAgICB8fCBldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnY29tcG9uZW50LWl0ZW0taW1nJykge1xuICAgICAgaWYgKCFldmVudC50YXJnZXQpIHJldHVybjtcblxuICAgICAgbGV0IHsgcmVsYXRlZFRhcmdldCB9ID0gZXZlbnQ7XG5cbiAgICAgIHdoaWxlIChyZWxhdGVkVGFyZ2V0KSB7XG4gICAgICAgIGlmIChyZWxhdGVkVGFyZ2V0ID09PSBldmVudC50YXJnZXQpIHJldHVybjtcbiAgICAgICAgcmVsYXRlZFRhcmdldCA9IHJlbGF0ZWRUYXJnZXQucGFyZW50Tm9kZTtcbiAgICAgIH1cblxuICAgICAgaGlkZUl0ZW1EZXRhaWxzKGV2ZW50LnRhcmdldCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG1vZGFsQ2hhbmdlTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG5cbiAgICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1vZGFsQ2xpY2tFdmVudHMpO1xuXG4gICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgbW9kYWxNb3VzZW92ZXJFdmVudHMpO1xuXG4gICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBtb2RhbE1vdXNlb3V0RXZlbnRzKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG1vZGFsQ2hhbmdlTGlzdGVuZXJzLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhbXBpb25Nb2RhbENvbnRyb2xsZXI7XG4iLCJpbXBvcnQgZ2V0Q2hhbXBpb25EZXRhaWxzIGZyb20gJy4uL2NoYW1waW9uRGF0YS9jaGFtcGlvbkRldGFpbHMnO1xuaW1wb3J0IGdldENoYW1waW9uU3RhdHMgZnJvbSAnLi4vY2hhbXBpb25EYXRhL2NoYW1waW9uU3RhdHMnO1xuaW1wb3J0IGNoYW1waW9uRGV0YWlsc01vZGFsIGZyb20gJy4uL3RlbXBsYXRlcy9jaGFtcGlvbkRldGFpbHNNb2RhbCc7XG5pbXBvcnQgY2hhbXBpb25TdGF0c01vZGFsIGZyb20gJy4uL3RlbXBsYXRlcy9jaGFtcGlvblN0YXRzTW9kYWwnO1xuaW1wb3J0IGNoYW1waW9uU2tpbnNNb2RhbCBmcm9tICcuLi90ZW1wbGF0ZXMvY2hhbXBpb25Ta2luc01vZGFsJztcbmltcG9ydCBDaGFtcGlvbk1vZGFsQ29udHJvbGxlciBmcm9tICcuL2NoYW1waW9uTW9kYWxDb250cm9sbGVyJztcblxuY29uc3QgQ2hhbXBpb25zUGFnZUNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBjb25zdCBkaXNwbGF5RHJvcGRvd25PcHRpb25zID0gKGRyb3Bkb3duT3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IGFsbERyb3Bkb3duT3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bi1vcHRpb25zJyk7XG4gICAgYWxsRHJvcGRvd25PcHRpb25zLmZvckVhY2goKG9wdGlvbnMpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbnNTdHlsZSA9IG9wdGlvbnMuc3R5bGU7XG4gICAgICBvcHRpb25zU3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KTtcblxuICAgIGNvbnN0IGRyb3Bkb3duT3B0aW9uc1N0eWxlID0gZHJvcGRvd25PcHRpb25zLnN0eWxlO1xuICAgIGRyb3Bkb3duT3B0aW9uc1N0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gIH07XG5cbiAgY29uc3QgaGlkZURyb3Bkb3duT3B0aW9ucyA9IChkcm9wZG93bk9wdGlvbnMpID0+IHtcbiAgICBjb25zdCBkcm9wZG93bk9wdGlvbnNTdHlsZSA9IGRyb3Bkb3duT3B0aW9ucy5zdHlsZTtcbiAgICBkcm9wZG93bk9wdGlvbnNTdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9O1xuXG4gIGNvbnN0IGRyb3Bkb3duT3B0aW9uc1RvZ2dsZSA9IChkcm9wZG93bkJ0bikgPT4ge1xuICAgIGNvbnN0IGRyb3Bkb3duT3B0aW9ucyA9IGRyb3Bkb3duQnRuLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duLW9wdGlvbnMnKTtcbiAgICBpZiAoZHJvcGRvd25PcHRpb25zLnN0eWxlLmRpc3BsYXkgIT09ICdmbGV4Jykge1xuICAgICAgZGlzcGxheURyb3Bkb3duT3B0aW9ucyhkcm9wZG93bk9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoaWRlRHJvcGRvd25PcHRpb25zKGRyb3Bkb3duT3B0aW9ucyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlDaGFtcGlvbk1vZGFsID0gYXN5bmMgKGNoYW1waW9uSWQpID0+IHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICAgIGNvbnN0IGNoYW1waW9uRGV0YWlscyA9IGF3YWl0IGdldENoYW1waW9uRGV0YWlscyhjaGFtcGlvbklkKTtcbiAgICBjb25zdCBjaGFtcGlvblN0YXRzID0gYXdhaXQgZ2V0Q2hhbXBpb25TdGF0cyhjaGFtcGlvbklkKTtcbiAgICBjaGFtcGlvbkRldGFpbHNNb2RhbChjaGFtcGlvbkRldGFpbHMpO1xuICAgIGNoYW1waW9uU3RhdHNNb2RhbChjaGFtcGlvbkRldGFpbHMsIGNoYW1waW9uU3RhdHMpO1xuICAgIGNoYW1waW9uU2tpbnNNb2RhbChjaGFtcGlvbkRldGFpbHMpO1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIENoYW1waW9uTW9kYWxDb250cm9sbGVyLm1vZGFsQ2hhbmdlTGlzdGVuZXJzKCk7XG4gIH07XG5cbiAgY29uc3QgY2hhbXBpb25zUGFnZUxpc3RlbmVycyA9ICgpID0+IHtcbiAgICBjb25zdCBjaGFtcGlvbnNQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoYW1waW9ucy1wYWdlJyk7XG5cbiAgICBjaGFtcGlvbnNQYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoQXJyYXkuZnJvbShldmVudC50YXJnZXQuY2xhc3NMaXN0KS5pbmNsdWRlcygnZHJvcGRvd24tYnRuJykpIHtcbiAgICAgICAgZHJvcGRvd25PcHRpb25zVG9nZ2xlKGV2ZW50LnRhcmdldCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc05hbWUgPT09ICdjaGFtcGlvbi1jb250YWluZXInKSB7XG4gICAgICAgIGRpc3BsYXlDaGFtcGlvbk1vZGFsKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQuaWQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc05hbWUgPT09ICdjaGFtcGlvbi1jb250YWluZXInKSB7XG4gICAgICAgIGRpc3BsYXlDaGFtcGlvbk1vZGFsKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pZCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjaGFtcGlvbnNQYWdlTGlzdGVuZXJzLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhbXBpb25zUGFnZUNvbnRyb2xsZXI7XG4iLCJjb25zdCBmZXRjaENoYW1waW9uRGV0YWlscyA9IGFzeW5jIChjaGFtcGlvbklkKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLzExLjIwLjEvZGF0YS9lbl9VUy9jaGFtcGlvbi8ke2NoYW1waW9uSWR9Lmpzb25gLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgY29uc3QgY2hhbXBpb25zID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBjb25zdCBjaGFtcGlvbkRldGFpbHMgPSBjaGFtcGlvbnMuZGF0YVtjaGFtcGlvbklkXTtcblxuICByZXR1cm4gY2hhbXBpb25EZXRhaWxzO1xufTtcblxuY29uc3QgZ2V0Q2hhbXBpb25QYXNzaXZlcyA9IChjaGFtcGlvbkRldGFpbHMpID0+IHtcbiAgY29uc3QgcGFzc2l2ZURhdGEgPSBjaGFtcGlvbkRldGFpbHMucGFzc2l2ZTtcbiAgY29uc3QgcGFzc2l2ZU5hbWUgPSBwYXNzaXZlRGF0YS5uYW1lO1xuICBjb25zdCBwYXNzaXZlRGVzY3JpcHRpb24gPSBwYXNzaXZlRGF0YS5kZXNjcmlwdGlvbjtcbiAgY29uc3QgcGFzc2l2ZUlkID0gcGFzc2l2ZURhdGEuaW1hZ2UuZnVsbDtcbiAgY29uc3QgcGFzc2l2ZUltZ1VybCA9IGBodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vMTEuMjEuMS9pbWcvcGFzc2l2ZS8ke3Bhc3NpdmVJZH1gO1xuXG4gIHJldHVybiB7XG4gICAgcGFzc2l2ZU5hbWUsXG4gICAgcGFzc2l2ZURlc2NyaXB0aW9uLFxuICAgIHBhc3NpdmVJbWdVcmwsXG4gIH07XG59O1xuXG5jb25zdCBnZXRDaGFtcGlvblNwZWxscyA9IChjaGFtcGlvbkRldGFpbHMpID0+IHtcbiAgY29uc3Qgc3BlbGxzRGF0YSA9IGNoYW1waW9uRGV0YWlscy5zcGVsbHM7XG4gIGNvbnN0IHNwZWxscyA9IFtdO1xuXG4gIHNwZWxsc0RhdGEuZm9yRWFjaCgoc3BlbGwpID0+IHtcbiAgICBjb25zdCBzcGVsbE9iamVjdCA9IHtcbiAgICAgIG5hbWU6IHNwZWxsLm5hbWUsXG4gICAgICBpZDogc3BlbGwuaWQsXG4gICAgICBkZXNjcmlwdGlvbjogc3BlbGwuZGVzY3JpcHRpb24sXG4gICAgICBjb3N0QnVybjogc3BlbGwuY29zdEJ1cm4sXG4gICAgICBjb3N0VHlwZTogc3BlbGwuY29zdFR5cGUsXG4gICAgICBjb29sZG93bjogc3BlbGwuY29vbGRvd25CdXJuLFxuICAgICAgaW1nVXJsOiBgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLzExLjIxLjEvaW1nL3NwZWxsLyR7c3BlbGwuaWR9LnBuZ2AsXG4gICAgfTtcbiAgICBzcGVsbHMucHVzaChzcGVsbE9iamVjdCk7XG4gIH0pO1xuXG4gIHJldHVybiBzcGVsbHM7XG59O1xuXG5jb25zdCBnZXRDaGFtcGlvbkRldGFpbHMgPSBhc3luYyAoY2hhbXBpb25JZCkgPT4ge1xuICBjb25zdCBjaGFtcGlvbkRldGFpbHMgPSBhd2FpdCBmZXRjaENoYW1waW9uRGV0YWlscyhjaGFtcGlvbklkKTtcbiAgY29uc3QgY2hhbXBpb25QYXNzaXZlID0gZ2V0Q2hhbXBpb25QYXNzaXZlcyhjaGFtcGlvbkRldGFpbHMpO1xuICBjb25zdCBzcGVsbHMgPSBnZXRDaGFtcGlvblNwZWxscyhjaGFtcGlvbkRldGFpbHMpO1xuXG4gIC8vIE1ha2UgZmlyc3QgbGV0dGVyIG9mIHRoZSBjaGFtcGlvbiB0aXRsZSBhIGNhcGl0YWwgbGV0dGVyLlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICBjb25zdCBjaGFtcGlvblRpdGxlID0gY2hhbXBpb25EZXRhaWxzLnRpdGxlLnJlcGxhY2UoY2hhbXBpb25EZXRhaWxzLnRpdGxlWzBdLCBjaGFtcGlvbkRldGFpbHMudGl0bGVbMF0udG9VcHBlckNhc2UoKSk7XG5cbiAgaWYgKGNoYW1waW9uRGV0YWlscy5wYXJ0eXBlID09PSAnTm9uZScpIHtcbiAgICBjaGFtcGlvbkRldGFpbHMucGFydHlwZSA9ICdNYW5hbGVzcyc7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5hbWU6IGNoYW1waW9uRGV0YWlscy5uYW1lLFxuICAgIGlkOiBjaGFtcGlvbkRldGFpbHMuaWQsXG4gICAgdGl0bGU6IGNoYW1waW9uVGl0bGUsXG4gICAgbG9yZTogY2hhbXBpb25EZXRhaWxzLmxvcmUsXG4gICAgcm9sZXM6IGNoYW1waW9uRGV0YWlscy50YWdzLFxuICAgIHNraW5zOiBjaGFtcGlvbkRldGFpbHMuc2tpbnMsXG4gICAgcmVzb3VyY2U6IGNoYW1waW9uRGV0YWlscy5wYXJ0eXBlLFxuICAgIHBhc3NpdmU6IGNoYW1waW9uUGFzc2l2ZSxcbiAgICBzcGVsbHMsXG4gICAgdGlwczogY2hhbXBpb25EZXRhaWxzLmFsbHl0aXBzLFxuICAgIGRpZmZpY3VsdHk6IGNoYW1waW9uRGV0YWlscy5pbmZvLmRpZmZpY3VsdHksXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRDaGFtcGlvbkRldGFpbHM7XG4iLCJjb25zdCBmZXRjaENoYW1waW9uU3RhdHMgPSBhc3luYyAoY2hhbXBpb25JZCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvJHtjaGFtcGlvbklkfWAsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gIGNvbnN0IGNoYW1waW9uU3RhdHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIGNoYW1waW9uU3RhdHM7XG59O1xuXG5jb25zdCBnZXRDaGFtcGlvblN0YXRzID0gYXN5bmMgKGNoYW1waW9uSWQpID0+IHtcbiAgY29uc3QgY2hhbXBpb25TdGF0cyA9IGF3YWl0IGZldGNoQ2hhbXBpb25TdGF0cyhjaGFtcGlvbklkKTtcblxuICBjb25zdCB3aW5SYXRlID0gY2hhbXBpb25TdGF0cy53aW5SYXRlLnRvRml4ZWQoMik7XG4gIGNvbnN0IHBpY2tSYXRlID0gY2hhbXBpb25TdGF0cy5waWNrUmF0ZS50b0ZpeGVkKDIpO1xuICBjb25zdCBsYW5lID0gY2hhbXBpb25TdGF0cy5sYW5lWzBdICsgY2hhbXBpb25TdGF0cy5sYW5lLnN1YnN0cmluZygxKS50b0xvd2VyQ2FzZSgpO1xuXG4gIHJldHVybiB7XG4gICAgY2hhbXBpb25JZCxcbiAgICBrZGE6IGNoYW1waW9uU3RhdHMua2RhUmF0aW8sXG4gICAgZGFtYWdlUGVyTWF0Y2g6IGNoYW1waW9uU3RhdHMuZGFtYWdlUGVyTWF0Y2gsXG4gICAgaXRlbVNldHM6IGNoYW1waW9uU3RhdHMuaXRlbUNob2ljZXMuc2xpY2UoMSksXG4gICAgYmVzdE1hdGNoVXBzOiBjaGFtcGlvblN0YXRzLm1hdGNoVXBzLmJlc3RNYXRjaFVwcyxcbiAgICB3b3JzdE1hdGNoVXBzOiBjaGFtcGlvblN0YXRzLm1hdGNoVXBzLndvcnN0TWF0Y2hVcHMsXG4gICAgd2luUmF0ZSxcbiAgICBwaWNrUmF0ZSxcbiAgICBsYW5lLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0Q2hhbXBpb25TdGF0cztcbiIsImNvbnN0IGZldGNoQWxsQ2hhbXBpb25zID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB2ZXJzaW9uc1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2FwaS92ZXJzaW9ucy5qc29uJyk7XG4gIGNvbnN0IHZlcnNpb25zID0gYXdhaXQgdmVyc2lvbnNSZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IGxhdGVzdFZlcnNpb24gPSB2ZXJzaW9uc1swXTtcbiAgY29uc3QgY2hhbXBpb25zUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vJHtsYXRlc3RWZXJzaW9ufS9kYXRhL2VuX1VTL2NoYW1waW9uLmpzb25gKTtcbiAgY29uc3QgYWxsQ2hhbXBpb25zID0gYXdhaXQgY2hhbXBpb25zUmVzcG9uc2UuanNvbigpO1xuXG4gIHJldHVybiBhbGxDaGFtcGlvbnMuZGF0YTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZldGNoQWxsQ2hhbXBpb25zO1xuIiwiLy8gRmV0Y2hlcyBhbGwgdGhlIGl0ZW1zIGEgY2hhbXBpb24gY2FuIGJ1eSBpbiBhIG1hdGNoXG5jb25zdCBmZXRjaEFsbEl0ZW1zID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB2ZXJzaW9uUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vYXBpL3ZlcnNpb25zLmpzb24nLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgY29uc3QgdmVyc2lvbnMgPSBhd2FpdCB2ZXJzaW9uUmVzcG9uc2UuanNvbigpO1xuICBjb25zdCBsYXRlc3RWZXJzaW9uID0gdmVyc2lvbnNbMF07XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLyR7bGF0ZXN0VmVyc2lvbn0vZGF0YS9lbl9VUy9pdGVtLmpzb25gKTtcbiAgY29uc3QgYWxsSXRlbXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIGFsbEl0ZW1zLmRhdGE7XG59O1xuXG5jbGFzcyBJdGVtSW5mbyB7XG4gIGNvbnN0cnVjdG9yKGl0ZW1JZCkge1xuICAgIHRoaXMuaXRlbUlkID0gaXRlbUlkO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldEFsbEl0ZW1zKCkge1xuICAgIGNvbnN0IGFsbEl0ZW1zID0gZmV0Y2hBbGxJdGVtcygpO1xuICAgIHJldHVybiBhbGxJdGVtcztcbiAgfVxuXG4gIGdldEl0ZW1EZXRhaWxzKGFsbEl0ZW1zKSB7XG4gICAgY29uc3QgaXRlbURldGFpbHMgPSBhbGxJdGVtc1t0aGlzLml0ZW1JZF07XG4gICAgcmV0dXJuIGl0ZW1EZXRhaWxzO1xuICB9XG5cbiAgZ2V0SXRlbUltYWdlKGFsbEl0ZW1zKSB7XG4gICAgY29uc3QgaXRlbURldGFpbHMgPSB0aGlzLmdldEl0ZW1EZXRhaWxzKGFsbEl0ZW1zKTtcbiAgICBjb25zdCBpdGVtSW1hZ2VJZCA9IGl0ZW1EZXRhaWxzLmltYWdlLmZ1bGw7XG4gICAgY29uc3QgaW1hZ2VVcmwgPSBgaHR0cDovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vMTEuMjIuMS9pbWcvaXRlbS8ke2l0ZW1JbWFnZUlkfWA7XG4gICAgcmV0dXJuIGltYWdlVXJsO1xuICB9XG5cbiAgLy8gZ2V0cyBpbmZvIG9uIHRoZSBpdGVtcyB1c2VkIHRvIGNyZWF0ZSB0aGUgaW5zdGFuY2UgaXRlbVxuICBnZXRDb21wb25lbnRJdGVtcyhhbGxJdGVtcykge1xuICAgIGNvbnN0IGl0ZW1EZXRhaWxzID0gdGhpcy5nZXRJdGVtRGV0YWlscyhhbGxJdGVtcyk7XG4gICAgY29uc3QgY29tcG9uZW50SXRlbUlkcyA9IGl0ZW1EZXRhaWxzLmZyb207XG4gICAgaWYgKGNvbXBvbmVudEl0ZW1JZHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBjb25zdCBjb21wb25lbnRJdGVtRGV0YWlscyA9IGNvbXBvbmVudEl0ZW1JZHMubWFwKChpdGVtSWQpID0+ICh7XG4gICAgICBuYW1lOiBhbGxJdGVtc1tpdGVtSWRdLm5hbWUsXG4gICAgICBpbWFnZVVybDogYGh0dHA6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLzExLjIyLjEvaW1nL2l0ZW0vJHtpdGVtSWR9LnBuZ2AsXG4gICAgICBjb3N0OiBhbGxJdGVtc1tpdGVtSWRdLmdvbGQudG90YWwsXG4gICAgfSkpO1xuICAgIHJldHVybiBjb21wb25lbnRJdGVtRGV0YWlscztcbiAgfVxuXG4gIGdldEl0ZW1JbmZvKGFsbEl0ZW1zKSB7XG4gICAgY29uc3QgaXRlbURldGFpbHMgPSB0aGlzLmdldEl0ZW1EZXRhaWxzKGFsbEl0ZW1zKTtcbiAgICBjb25zdCB7IG5hbWUgfSA9IGl0ZW1EZXRhaWxzO1xuICAgIGNvbnN0IHsgZGVzY3JpcHRpb24gfSA9IGl0ZW1EZXRhaWxzO1xuICAgIGNvbnN0IGNvc3QgPSBpdGVtRGV0YWlscy5nb2xkLnRvdGFsO1xuICAgIGNvbnN0IGltYWdlVXJsID0gdGhpcy5nZXRJdGVtSW1hZ2UoYWxsSXRlbXMpO1xuICAgIGNvbnN0IGNvbXBvbmVudEl0ZW1zID0gdGhpcy5nZXRDb21wb25lbnRJdGVtcyhhbGxJdGVtcyk7XG4gICAgY29uc3QgeyB0YWdzIH0gPSBpdGVtRGV0YWlscztcblxuICAgIHJldHVybiB7XG4gICAgICBuYW1lLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBjb3N0LFxuICAgICAgaW1hZ2VVcmwsXG4gICAgICBjb21wb25lbnRJdGVtcyxcbiAgICAgIHRhZ3MsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJdGVtSW5mbztcbiIsImltcG9ydCBFbGVtZW50Q3JlYXRpb24gZnJvbSAnLi9lbGVtZW50Q3JlYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcm9wZG93blNlY3Rpb24ge1xuICBzdGF0aWMgY3JlYXRlU2VjdGlvbigpIHtcbiAgICBjb25zdCBjaGFtcGlvbnNQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoYW1waW9ucy1wYWdlJyk7XG4gICAgY29uc3QgZmlsdGVyU29ydFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmaWx0ZXJTb3J0U2VjdGlvbi5jbGFzc05hbWUgPSAnZmlsdGVyLXNvcnQtc2VjdGlvbic7XG4gICAgY2hhbXBpb25zUGFnZS5pbnNlcnRCZWZvcmUoZmlsdGVyU29ydFNlY3Rpb24sIGNoYW1waW9uc1BhZ2UuZmlyc3RFbGVtZW50Q2hpbGQubmV4dFNpYmxpbmcpO1xuICAgIHJldHVybiBmaWx0ZXJTb3J0U2VjdGlvbjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGRyb3Bkb3duTmFtZSwgb3B0aW9uc0FycmF5KSB7XG4gICAgdGhpcy5kcm9wZG93bk5hbWUgPSBkcm9wZG93bk5hbWU7XG4gICAgdGhpcy5vcHRpb25zQXJyYXkgPSBvcHRpb25zQXJyYXk7XG4gIH1cblxuICByZW5kZXJEcm9wZG93bihmaWx0ZXJTb3J0U2VjdGlvbikge1xuICAgIGNvbnN0IGRyb3Bkb3duID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgYCR7dGhpcy5kcm9wZG93bk5hbWV9LWRyb3Bkb3duIGRyb3Bkb3duYCwgZmlsdGVyU29ydFNlY3Rpb24pO1xuICAgIGNvbnN0IGRyb3Bkb3duQnRuID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnYnV0dG9uJywgYCR7dGhpcy5kcm9wZG93bk5hbWV9LWRyb3Bkb3duLWJ0biBkcm9wZG93bi1idG5gLCBkcm9wZG93bik7XG4gICAgZHJvcGRvd25CdG4udGV4dENvbnRlbnQgPSBgJHt0aGlzLmRyb3Bkb3duTmFtZVswXS50b1VwcGVyQ2FzZSgpfSR7dGhpcy5kcm9wZG93bk5hbWUuc2xpY2UoMSl9YDtcbiAgICBjb25zdCBkcm9wZG93bk9wdGlvbnMgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCBgJHt0aGlzLmRyb3Bkb3duTmFtZX0tZHJvcGRvd24tb3B0aW9ucyBkcm9wZG93bi1vcHRpb25zYCwgZHJvcGRvd24pO1xuXG4gICAgdGhpcy5vcHRpb25zQXJyYXkuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICBjb25zdCBkcm9wZG93bk9wdGlvbiA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCBgJHtvcHRpb259LSR7dGhpcy5kcm9wZG93bk5hbWV9IGRyb3Bkb3duLW9wdGlvbmAsIGRyb3Bkb3duT3B0aW9ucyk7XG4gICAgICBkcm9wZG93bk9wdGlvbi50ZXh0Q29udGVudCA9IGAke29wdGlvblswXS50b1VwcGVyQ2FzZSgpfSR7b3B0aW9uLnNsaWNlKDEpfWA7XG4gICAgfSk7XG4gIH1cbn1cbiIsImNvbnN0IEVsZW1lbnRDcmVhdGlvbiA9ICgoKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcyA9ICh0YWcsIGNsYXNzTmFtZSwgcGFyZW50RWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUNoaWxkRWxlbWVudFdpdGhJZCA9ICh0YWcsIGlkLCBwYXJlbnRFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBlbGVtZW50LmlkID0gaWQ7XG4gICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzc0FuZElkID0gKHRhZywgY2xhc3NOYW1lLCBpZCwgcGFyZW50RWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgZWxlbWVudC5pZCA9IGlkO1xuICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVDaGlsZEltYWdlRWxlbWVudFdpdGhDbGFzcyA9IChjbGFzc05hbWUsIHBhcmVudEVsZW1lbnQsIHNyYywgYWx0KSA9PiB7XG4gICAgY29uc3QgaW1hZ2VFbGVtZW50ID0gY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdpbWcnLCBjbGFzc05hbWUsIHBhcmVudEVsZW1lbnQpO1xuICAgIGltYWdlRWxlbWVudC5zcmMgPSBzcmM7XG4gICAgaW1hZ2VFbGVtZW50LmFsdCA9IGFsdDtcblxuICAgIHJldHVybiBpbWFnZUVsZW1lbnQ7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MsXG4gICAgY3JlYXRlQ2hpbGRFbGVtZW50V2l0aElkLFxuICAgIGNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzc0FuZElkLFxuICAgIGNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgRWxlbWVudENyZWF0aW9uO1xuIiwiaW1wb3J0IHsgcmVuZGVySGVhZGVyRGV0YWlscywgaW1hZ2VzIH0gZnJvbSAnLi9yZW5kZXJIZWxwZXJzJztcbmltcG9ydCBFbGVtZW50Q3JlYXRpb24gZnJvbSAnLi4vaGVscGVycy9lbGVtZW50Q3JlYXRpb24nO1xuXG5jb25zdCBjaGFtcGlvbkRldGFpbHNNb2RhbCA9IGFzeW5jIChjaGFtcGlvbkRhdGEpID0+IHtcbiAgcmVuZGVySGVhZGVyRGV0YWlscyhjaGFtcGlvbkRhdGEsICdtYWluJyk7XG5cbiAgY29uc3QgY2hhbXBpb25Sb2xlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbi1yb2xlcycpO1xuICBjb25zdCB7IHJvbGVzIH0gPSBjaGFtcGlvbkRhdGE7XG4gIHJvbGVzLmZvckVhY2goKHJvbGUpID0+IHtcbiAgICBjb25zdCBjaGFtcGlvblJvbGUgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnY2hhbXBpb24tcm9sZScsIGNoYW1waW9uUm9sZXMpO1xuICAgIGNvbnN0IGNoYW1waW9uUm9sZU5hbWUgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2NoYW1waW9uLXJvbGUtbmFtZScsIGNoYW1waW9uUm9sZSk7XG4gICAgY2hhbXBpb25Sb2xlTmFtZS50ZXh0Q29udGVudCA9IHJvbGU7XG4gICAgRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzKCdjaGFtcGlvbi1yb2xlLWltYWdlJywgY2hhbXBpb25Sb2xlLCBgJHtpbWFnZXNbYCR7cm9sZX0ucG5nYF19YCwgcm9sZSk7XG4gIH0pO1xuICAvKiBUaGUgdHlwZSBvZiByZXNvdXJjZSB0aGF0IGEgY2hhbXBpb24gdXNlcyBlLmcuIG1hbmEsIGVuZXJneSBldGMgKi9cbiAgY29uc3QgY2hhbXBpb25SZXNvdXJjZSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdjaGFtcGlvbi1yZXNvdXJjZScsIGNoYW1waW9uUm9sZXMpO1xuICBjb25zdCB7IHJlc291cmNlIH0gPSBjaGFtcGlvbkRhdGE7XG4gIGNvbnN0IGNoYW1waW9uUmVzb3VyY2VOYW1lID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdjaGFtcGlvbi1yZXNvdXJjZS1uYW1lJywgY2hhbXBpb25SZXNvdXJjZSk7XG4gIGNoYW1waW9uUmVzb3VyY2VOYW1lLnRleHRDb250ZW50ID0gcmVzb3VyY2U7XG4gIEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEltYWdlRWxlbWVudFdpdGhDbGFzcygnY2hhbXBpb24tcmVzb3VyY2UtaW1hZ2UnLCBjaGFtcGlvblJlc291cmNlLCBgJHtpbWFnZXNbYCR7cmVzb3VyY2V9LnBuZ2BdfWAsIHJlc291cmNlKTtcblxuICAvKiBDcmVhdGVzIHRoZSBtYWluIGNvbnRlbnQgb2YgdGhlIG1haW4gbW9kYWwgKi9cbiAgY29uc3QgbG9yZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb3JlLWNvbnRhaW5lcicpO1xuICBjb25zdCBjaGFtcGlvbkxvcmUgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2NoYW1waW9uLWxvcmUnLCBsb3JlQ29udGFpbmVyKTtcbiAgY2hhbXBpb25Mb3JlLnRleHRDb250ZW50ID0gY2hhbXBpb25EYXRhLmxvcmU7XG5cbiAgY29uc3QgYWJpbGl0aWVzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFiaWxpdGllcy1jb250YWluZXInKTtcbiAgY29uc3QgYWJpbGl0eURldGFpbHMgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnYWJpbGl0eS1kZXRhaWxzJywgYWJpbGl0aWVzQ29udGFpbmVyKTtcbiAgY29uc3QgYWJpbGl0eUltZ3MgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnYWJpbGl0eS1pbWdzJywgYWJpbGl0eURldGFpbHMpO1xuICBjb25zdCBwYXNzaXZlSW1nID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzKFxuICAgICdzcGVsbC1pbWcgY2xpY2tlZCcsIGFiaWxpdHlJbWdzLCBjaGFtcGlvbkRhdGEucGFzc2l2ZS5wYXNzaXZlSW1nVXJsLCBjaGFtcGlvbkRhdGEucGFzc2l2ZS5wYXNzaXZlTmFtZSxcbiAgKTtcbiAgcGFzc2l2ZUltZy5pZCA9ICdwYXNzaXZlLWltZyc7XG5cbiAgY29uc3QgaW1nTGFiZWwgPSBbJ1EnLCAnVycsICdFJywgJ1InXTtcbiAgbGV0IGluZGV4ID0gMDtcblxuICBjaGFtcGlvbkRhdGEuc3BlbGxzLmZvckVhY2goKHNwZWxsKSA9PiB7XG4gICAgY29uc3Qgc3BlbGxJbWcgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAnc3BlbGwtaW1nJywgYWJpbGl0eUltZ3MsIHNwZWxsLmltZ1VybCwgc3BlbGwubmFtZSxcbiAgICApO1xuICAgIC8vIEdyYWJzIGxldHRlciBRLCBXLCBFIG9yIFIgd2hpY2ggdW5pcXVlbHkgaWRlbnRpZmllcyBhIGNoYW1waW9ucyBhYmlsaXRpZXNcbiAgICBzcGVsbEltZy5pZCA9IGAke2ltZ0xhYmVsW2luZGV4XX0taW1nYDtcbiAgICBpbmRleCArPSAxO1xuICB9KTtcblxuICAvKiBsb29wcyB0aHJvdWdoIGNoYW1waW9uJ3MgcGFzc2l2ZSBhbmQgNCBhYmlsaXRpZXMgKi9cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpICs9IDEpIHtcbiAgICBjb25zdCBhYmlsaXR5SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGFiaWxpdHlOYW1lID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdhYmlsaXR5LW5hbWUnLCBhYmlsaXR5SW5mbyk7XG4gICAgY29uc3QgYWJpbGl0eURlc2NyaXB0aW9uID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdhYmlsaXR5LWRlc2NyaXB0aW9uJywgYWJpbGl0eUluZm8pO1xuICAgIGNvbnN0IGFiaWxpdHlMYWJlbCA9IFsnUGFzc2l2ZScsICdRJywgJ1cnLCAnRScsICdSJ107XG5cbiAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgYWJpbGl0eUluZm8uY2xhc3NOYW1lID0gJ2FiaWxpdHktaW5mbyBhY3RpdmUnO1xuICAgICAgYWJpbGl0eUluZm8uaWQgPSAncGFzc2l2ZS1hYmlsaXR5JztcbiAgICAgIGFiaWxpdHlOYW1lLnRleHRDb250ZW50ID0gYCR7Y2hhbXBpb25EYXRhLnBhc3NpdmUucGFzc2l2ZU5hbWV9ICgke2FiaWxpdHlMYWJlbFtpXX0pYDtcbiAgICAgIGFiaWxpdHlEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBjaGFtcGlvbkRhdGEucGFzc2l2ZS5wYXNzaXZlRGVzY3JpcHRpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvb2xkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgY29vbGRvd24uY2xhc3NOYW1lID0gJ2FiaWxpdHktY29vbGRvd24nO1xuICAgICAgY29vbGRvd24udGV4dENvbnRlbnQgPSBgQ29vbGRvd246ICR7Y2hhbXBpb25EYXRhLnNwZWxsc1tpIC0gMV0uY29vbGRvd259IHNlY29uZHNgO1xuICAgICAgYWJpbGl0eUluZm8uYXBwZW5kQ2hpbGQoY29vbGRvd24pO1xuXG4gICAgICBhYmlsaXR5SW5mby5jbGFzc05hbWUgPSAnYWJpbGl0eS1pbmZvJztcbiAgICAgIGFiaWxpdHlJbmZvLmlkID0gYCR7YWJpbGl0eUxhYmVsW2ldfS1hYmlsaXR5YDtcbiAgICAgIGFiaWxpdHlOYW1lLnRleHRDb250ZW50ID0gYCR7Y2hhbXBpb25EYXRhLnNwZWxsc1tpIC0gMV0ubmFtZX0gKCR7YWJpbGl0eUxhYmVsW2ldfSlgO1xuICAgICAgYWJpbGl0eURlc2NyaXB0aW9uLmlubmVySFRNTCA9IGNoYW1waW9uRGF0YS5zcGVsbHNbaSAtIDFdLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGFiaWxpdHlEZXRhaWxzLmFwcGVuZENoaWxkKGFiaWxpdHlJbmZvKTtcbiAgfVxuXG4gIGNvbnN0IGNoYW1waW9uVGlwc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tdGlwcy1zZWN0aW9uJyk7XG4gIGNvbnN0IGNoYW1waW9uVGlwcyA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdjaGFtcGlvbi10aXBzJywgY2hhbXBpb25UaXBzU2VjdGlvbik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAyICYmIGkgPCBjaGFtcGlvbkRhdGEudGlwcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGNoYW1waW9uVGlwID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdjaGFtcGlvbi10aXAnLCBjaGFtcGlvblRpcHMpO1xuICAgIGNoYW1waW9uVGlwLnRleHRDb250ZW50ID0gYCR7Y2hhbXBpb25EYXRhLnRpcHNbaV19YDtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2hhbXBpb25EZXRhaWxzTW9kYWw7XG4iLCJpbXBvcnQgRWxlbWVudENyZWF0aW9uIGZyb20gJy4uL2hlbHBlcnMvZWxlbWVudENyZWF0aW9uJztcblxuY29uc3QgY2hhbXBpb25Ta2luc01vZGFsID0gYXN5bmMgKGNoYW1waW9uRGV0YWlscykgPT4ge1xuICBjb25zdCB7IHNraW5zIH0gPSBjaGFtcGlvbkRldGFpbHM7XG4gIGNvbnN0IHNraW5zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NraW5zLWNvbnRhaW5lcicpO1xuICBjb25zdCBza2luTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5za2luLW5hbWUnKTtcbiAgY29uc3Qgc2tpbkltYWdlc0NvbnRhaW5lciA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdza2luLWltYWdlcy1jb250YWluZXInLCBza2luc0NvbnRhaW5lcik7XG5cbiAgc2tpbnMuZm9yRWFjaCgoc2tpbikgPT4ge1xuICAgIGlmIChza2luLm51bSA9PT0gMCkge1xuICAgICAgY29uc3Qgc2hvd25JbWFnZUNvbnRhaW5lciA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3NBbmRJZChcbiAgICAgICAgJ2RpdicsICdza2luLWltYWdlLWNvbnRhaW5lciBzaG93bicsIGBEZWZhdWx0ICR7Y2hhbXBpb25EZXRhaWxzLm5hbWV9YCwgc2tpbkltYWdlc0NvbnRhaW5lcixcbiAgICAgICk7XG4gICAgICBza2luTmFtZS50ZXh0Q29udGVudCA9IGBEZWZhdWx0ICR7Y2hhbXBpb25EZXRhaWxzLm5hbWV9YDtcbiAgICAgIGNvbnN0IHNob3duSW1hZ2VVcmwgPSBgaHR0cDovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vaW1nL2NoYW1waW9uL3NwbGFzaC8ke2NoYW1waW9uRGV0YWlscy5pZH1fJHtza2luLm51bX0uanBnYDtcbiAgICAgIEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEltYWdlRWxlbWVudFdpdGhDbGFzcygnc2tpbi1pbWFnZScsIHNob3duSW1hZ2VDb250YWluZXIsIHNob3duSW1hZ2VVcmwsICdkZWZhdWx0IHNraW4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW1hZ2VDb250YWluZXIgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2RpdicsICdza2luLWltYWdlLWNvbnRhaW5lcicsIHNraW4ubmFtZSwgc2tpbkltYWdlc0NvbnRhaW5lcik7XG4gICAgICBjb25zdCBpbWFnZVVybCA9IGBodHRwOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi9pbWcvY2hhbXBpb24vc3BsYXNoLyR7Y2hhbXBpb25EZXRhaWxzLmlkfV8ke3NraW4ubnVtfS5qcGdgO1xuICAgICAgRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzKCdza2luLWltYWdlJywgaW1hZ2VDb250YWluZXIsIGltYWdlVXJsLCBza2luLm5hbWUpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjaGFtcGlvblNraW5zTW9kYWw7XG4iLCJpbXBvcnQgSXRlbUluZm8gZnJvbSAnLi4vY2hhbXBpb25EYXRhL2l0ZW1JbmZvJztcbmltcG9ydCB7XG4gIHJlbmRlckhlYWRlckRldGFpbHMsXG4gIHJlbmRlclN0YXRPdmVydmlldyxcbiAgcmVuZGVyRGFtYWdlU3RhdHMsXG4gIHJlbmRlckNoYW1waW9uTGFuZSxcbiAgcmVuZGVyTWF0Y2h1cHNJbmZvLFxufSBmcm9tICcuL3JlbmRlckhlbHBlcnMnO1xuaW1wb3J0IEVsZW1lbnRDcmVhdGlvbiBmcm9tICcuLi9oZWxwZXJzL2VsZW1lbnRDcmVhdGlvbic7XG5cbmNvbnN0IGNoYW1waW9uU3RhdHNNb2RhbCA9IGFzeW5jIChjaGFtcGlvbkRhdGEsIGNoYW1waW9uU3RhdHMpID0+IHtcbiAgcmVuZGVySGVhZGVyRGV0YWlscyhjaGFtcGlvbkRhdGEsICdzdGF0cycpO1xuXG4gIGNvbnN0IHN0YXRzT3ZlcnZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tc3RhdHMtb3ZlcnZpZXcnKTtcblxuICByZW5kZXJTdGF0T3ZlcnZpZXcoc3RhdHNPdmVydmlldywgJ1dpbiBSYXRlJywgY2hhbXBpb25TdGF0cy53aW5SYXRlKTtcbiAgcmVuZGVyU3RhdE92ZXJ2aWV3KHN0YXRzT3ZlcnZpZXcsICdQaWNrIFJhdGUnLCBjaGFtcGlvblN0YXRzLnBpY2tSYXRlKTtcbiAgLyogTWFrZSBldmVyeSBsZXR0ZXIgZXhjZXB0IHRoZSBmaXJzdCBsb3dlciBjYXNlICovXG4gIGNvbnN0IGxhbmUgPSBgJHtjaGFtcGlvblN0YXRzLmxhbmVbMF0gKyBjaGFtcGlvblN0YXRzLmxhbmUuc3Vic3RyaW5nKDEpLnRvTG93ZXJDYXNlKCl9YDtcbiAgcmVuZGVyQ2hhbXBpb25MYW5lKHN0YXRzT3ZlcnZpZXcsIGxhbmUpO1xuXG4gIC8qIFNldHMgdGhlIHZhbHVlcyBhbmQgcGVyY2VudGFnZXMgZm9yIHRoZSBhdmVyYWdlIGRhbWFnZSBzZWN0aW9uIG9mIHRoZSBzdGF0cyBtb2RhbCAqL1xuXG4gIGNvbnN0IHRydWVEYW1hZ2VDaXJjbGVTdHJva2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHJ1ZS1kYW1hZ2Utc3Ryb2tlJyk7XG4gIGNvbnN0IHBoeXNpY2FsRGFtYWdlQ2lyY2xlU3Ryb2tlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BoeXNpY2FsLWRhbWFnZS1zdHJva2UnKTtcbiAgY29uc3QgbWFnaWNEYW1hZ2VDaXJjbGVTdHJva2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFnaWMtZGFtYWdlLXN0cm9rZScpO1xuXG4gIGNvbnN0IHRydWVEYW1hZ2VQZXJjZW50ID0gTWF0aC5yb3VuZChjaGFtcGlvblN0YXRzLmRhbWFnZVBlck1hdGNoLnRydWVEYW1hZ2UucGVyY2VudGFnZSk7XG4gIGNvbnN0IHBoeXNpY2FsRGFtYWdlUGVyY2VudCA9IE1hdGgucm91bmQoY2hhbXBpb25TdGF0cy5kYW1hZ2VQZXJNYXRjaC5waHlzaWNhbERhbWFnZS5wZXJjZW50YWdlKTtcbiAgY29uc3QgbWFnaWNEYW1hZ2VQZXJjZW50ID0gTWF0aC5yb3VuZChjaGFtcGlvblN0YXRzLmRhbWFnZVBlck1hdGNoLm1hZ2ljRGFtYWdlLnBlcmNlbnRhZ2UpO1xuXG4gIHRydWVEYW1hZ2VDaXJjbGVTdHJva2Uuc3R5bGUuc3Ryb2tlRGFzaGFycmF5ID0gYCR7dHJ1ZURhbWFnZVBlcmNlbnR9IDEwMGA7XG4gIHBoeXNpY2FsRGFtYWdlQ2lyY2xlU3Ryb2tlLnN0eWxlLnN0cm9rZURhc2hhcnJheSA9IGAke3BoeXNpY2FsRGFtYWdlUGVyY2VudCArIHRydWVEYW1hZ2VQZXJjZW50fSAxMDBgO1xuICBtYWdpY0RhbWFnZUNpcmNsZVN0cm9rZS5zdHlsZS5zdHJva2VEYXNoYXJyYXkgPSAnMTAwLCAxMDAnO1xuICBjb25zdCB0b3RhbERhbWFnZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG90YWwtZGFtYWdlLXRleHQnKTtcbiAgdG90YWxEYW1hZ2VUZXh0LnRleHRDb250ZW50ID0gTWF0aC5yb3VuZChjaGFtcGlvblN0YXRzLmRhbWFnZVBlck1hdGNoLnRvdGFsRGFtYWdlLnZhbHVlKTtcblxuICBjb25zdCB0cnVlRGFtYWdlVmFsdWUgPSBNYXRoLnJvdW5kKGNoYW1waW9uU3RhdHMuZGFtYWdlUGVyTWF0Y2gudHJ1ZURhbWFnZS52YWx1ZSk7XG4gIGNvbnN0IHBoeXNpY2FsRGFtYWdlVmFsdWUgPSBNYXRoLnJvdW5kKGNoYW1waW9uU3RhdHMuZGFtYWdlUGVyTWF0Y2gucGh5c2ljYWxEYW1hZ2UudmFsdWUpO1xuICBjb25zdCBtYWdpY0RhbWFnZVZhbHVlID0gTWF0aC5yb3VuZChjaGFtcGlvblN0YXRzLmRhbWFnZVBlck1hdGNoLm1hZ2ljRGFtYWdlLnZhbHVlKTtcblxuICByZW5kZXJEYW1hZ2VTdGF0cygncGh5c2ljYWwnLCBwaHlzaWNhbERhbWFnZVZhbHVlLCBwaHlzaWNhbERhbWFnZVBlcmNlbnQpO1xuICByZW5kZXJEYW1hZ2VTdGF0cygnbWFnaWMnLCBtYWdpY0RhbWFnZVZhbHVlLCBtYWdpY0RhbWFnZVBlcmNlbnQpO1xuICByZW5kZXJEYW1hZ2VTdGF0cygndHJ1ZScsIHRydWVEYW1hZ2VWYWx1ZSwgdHJ1ZURhbWFnZVBlcmNlbnQpO1xuXG4gIC8qIFJlbmRlcnMgdGhlIGl0ZW0gYnVpbGRzIHNlY3Rpb24gb2YgdGhlIHN0YXRzIG1vZGFsICovXG4gIGNvbnN0IHsgaXRlbVNldHMgfSA9IGNoYW1waW9uU3RhdHM7XG4gIGNvbnN0IGFsbEl0ZW1zID0gYXdhaXQgSXRlbUluZm8uZ2V0QWxsSXRlbXMoKTtcbiAgY29uc3QgY2hhbXBpb25JdGVtQnVpbGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLWl0ZW0tYnVpbGRzJyk7XG4gIGNvbnN0IGl0ZW1TZXRzQ29udGFpbmVyID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2l0ZW0tc2V0cy1jb250YWluZXInLCBjaGFtcGlvbkl0ZW1CdWlsZHMpO1xuXG4gIGl0ZW1TZXRzLmZvckVhY2goKGl0ZW1TZXQpID0+IHtcbiAgICBjb25zdCBpdGVtU2V0Q29udGFpbmVyID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2l0ZW0tc2V0LWNvbnRhaW5lcicsIGl0ZW1TZXRzQ29udGFpbmVyKTtcblxuICAgIGl0ZW1TZXQuZm9yRWFjaCgoaXRlbUlkKSA9PiB7XG4gICAgICBjb25zdCBpdGVtID0gbmV3IEl0ZW1JbmZvKGl0ZW1JZCk7XG4gICAgICBjb25zdCBpdGVtSW5mbyA9IGl0ZW0uZ2V0SXRlbUluZm8oYWxsSXRlbXMpO1xuICAgICAgaWYgKCFpdGVtSW5mby50YWdzLmluY2x1ZGVzKCdUcmlua2V0JykgJiYgIWl0ZW1JbmZvLnRhZ3MuaW5jbHVkZXMoJ0NvbnN1bWFibGUnKSkge1xuICAgICAgICBjb25zdCBtYWluQ29tcG9uZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1haW5Db21wb25lbnRDb250YWluZXIuY2xhc3NOYW1lID0gJ21haW4tY29tcG9uZW50LWNvbnRhaW5lcic7XG4gICAgICAgIGl0ZW1TZXRDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbkNvbXBvbmVudENvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3QgbWFpbkl0ZW0gPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnbWFpbi1pdGVtJywgbWFpbkNvbXBvbmVudENvbnRhaW5lcik7XG5cbiAgICAgICAgRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzKCdpdGVtLWltZycsIG1haW5JdGVtLCBpdGVtSW5mby5pbWFnZVVybCwgYCR7aXRlbUlkfS5wbmdgKTtcblxuICAgICAgICBjb25zdCBpdGVtRGV0YWlsc0NvbnRhaW5lciA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdpdGVtLWRldGFpbHMtY29udGFpbmVyJywgbWFpbkl0ZW0pO1xuXG4gICAgICAgIGNvbnN0IG5hbWVFbGVtZW50ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdpdGVtLW5hbWUnLCBpdGVtRGV0YWlsc0NvbnRhaW5lcik7XG4gICAgICAgIG5hbWVFbGVtZW50LnRleHRDb250ZW50ID0gaXRlbUluZm8ubmFtZTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25FbGVtZW50ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdpdGVtLWRlc2NyaXB0aW9uJywgaXRlbURldGFpbHNDb250YWluZXIpO1xuICAgICAgICBkZXNjcmlwdGlvbkVsZW1lbnQuaW5uZXJIVE1MID0gaXRlbUluZm8uZGVzY3JpcHRpb247XG4gICAgICAgIGNvbnN0IGl0ZW1Db3N0ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2l0ZW0tY29zdCcsIGl0ZW1EZXRhaWxzQ29udGFpbmVyKTtcbiAgICAgICAgY29uc3QgY29zdExhYmVsID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdjb3N0LWxhYmVsJywgaXRlbUNvc3QpO1xuICAgICAgICBjb3N0TGFiZWwudGV4dENvbnRlbnQgPSAnR29sZDogJztcbiAgICAgICAgY29uc3QgY29zdEFtb3VudCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnY29zdC1hbW91bnQnLCBpdGVtQ29zdCk7XG4gICAgICAgIGNvc3RBbW91bnQudGV4dENvbnRlbnQgPSBpdGVtSW5mby5jb3N0O1xuXG4gICAgICAgIC8qIFRoZSBjb21wb25lbnQgaXRlbXMgYXJlIHRoZSBzbWFsbGVyIGl0ZW1zIHRoYXQgYXBwZWFyIGJlbG93IHRoZSBtYWluIGl0ZW0gKi9cbiAgICAgICAgY29uc3QgeyBjb21wb25lbnRJdGVtcyB9ID0gaXRlbUluZm87XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudEl0ZW1zQ29udGFpbmVyID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2NvbXBvbmVudC1pdGVtcy1jb250YWluZXInLCBtYWluQ29tcG9uZW50Q29udGFpbmVyKTtcblxuICAgICAgICBjb21wb25lbnRJdGVtcy5mb3JFYWNoKChjb21wb25lbnRJdGVtKSA9PiB7XG4gICAgICAgICAgY29uc3QgY29tcG9uZW50SXRlbUVsZW1lbnQgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnY29tcG9uZW50LWl0ZW0nLCBjb21wb25lbnRJdGVtc0NvbnRhaW5lcik7XG4gICAgICAgICAgRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzKFxuICAgICAgICAgICAgJ2NvbXBvbmVudC1pdGVtLWltZycsIGNvbXBvbmVudEl0ZW1FbGVtZW50LCBjb21wb25lbnRJdGVtLmltYWdlVXJsLCBgJHtjb21wb25lbnRJdGVtLm5hbWV9YCxcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgY29uc3QgY29tcG9uZW50SXRlbURldGFpbHNDb250YWluZXIgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnY29tcG9uZW50LWl0ZW0tZGV0YWlscy1jb250YWluZXInLCBjb21wb25lbnRJdGVtRWxlbWVudCk7XG5cbiAgICAgICAgICBjb25zdCBjb21wb25lbnRJdGVtTmFtZSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnY29tcG9uZW50LWl0ZW0tbmFtZScsIGNvbXBvbmVudEl0ZW1EZXRhaWxzQ29udGFpbmVyKTtcbiAgICAgICAgICBjb21wb25lbnRJdGVtTmFtZS50ZXh0Q29udGVudCA9IGNvbXBvbmVudEl0ZW0ubmFtZTtcbiAgICAgICAgICBjb25zdCBjb21wb25lbnRJdGVtQ29zdCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdjb21wb25lbnQtaXRlbS1jb3N0JywgY29tcG9uZW50SXRlbURldGFpbHNDb250YWluZXIpO1xuICAgICAgICAgIGNvbnN0IGNvbXBvbmVudEl0ZW1Db3N0TGFiZWwgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2NvbXBvbmVudC1pdGVtLWNvc3QtbGFiZWwnLCBjb21wb25lbnRJdGVtQ29zdCk7XG4gICAgICAgICAgY29tcG9uZW50SXRlbUNvc3RMYWJlbC50ZXh0Q29udGVudCA9ICdHb2xkOiAnO1xuICAgICAgICAgIGNvbnN0IGNvbXBvbmVudEl0ZW1BbW91bnQgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2NvbXBvbmVudC1pdGVtLWFtb3VudCcsIGNvbXBvbmVudEl0ZW1Db3N0KTtcbiAgICAgICAgICBjb21wb25lbnRJdGVtQW1vdW50LnRleHRDb250ZW50ID0gY29tcG9uZW50SXRlbS5jb3N0O1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIC8qIFJlbmRlcnMgdGhlIG1hdGNodXBzIHNlY3Rpb24gb2YgdGhlIGNoYW1waW9uIG1vZGFsIHN0YXRzIHBhZ2UgKi9cbiAgY29uc3QgYmVzdE1hdGNodXBzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iZXN0LW1hdGNodXBzLXNlY3Rpb24nKTtcbiAgY29uc3QgYmVzdE1hdGNodXBzRWxlbWVudCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdiZXN0LW1hdGNodXBzIG1hdGNodXBzJywgYmVzdE1hdGNodXBzU2VjdGlvbik7XG4gIGNvbnN0IGJlc3RNYXRjaHVwc0RhdGEgPSBjaGFtcGlvblN0YXRzLmJlc3RNYXRjaFVwcztcbiAgcmVuZGVyTWF0Y2h1cHNJbmZvKGJlc3RNYXRjaHVwc0VsZW1lbnQsIGJlc3RNYXRjaHVwc0RhdGEpO1xuXG4gIGNvbnN0IHdvcnN0TWF0Y2h1cHNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcnN0LW1hdGNodXBzLXNlY3Rpb24nKTtcbiAgY29uc3Qgd29yc3RNYXRjaHVwc0VsZW1lbnQgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnd29yc3QtbWF0Y2h1cHMgbWF0Y2h1cHMnLCB3b3JzdE1hdGNodXBzU2VjdGlvbik7XG4gIGNvbnN0IHdvcnN0TWF0Y2h1cHNEYXRhID0gY2hhbXBpb25TdGF0cy53b3JzdE1hdGNoVXBzO1xuICByZW5kZXJNYXRjaHVwc0luZm8od29yc3RNYXRjaHVwc0VsZW1lbnQsIHdvcnN0TWF0Y2h1cHNEYXRhKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNoYW1waW9uU3RhdHNNb2RhbDtcbiIsImltcG9ydCBEcm9wZG93blNlY3Rpb24gZnJvbSAnLi4vaGVscGVycy9kcm9wZG93blNlY3Rpb24nO1xuaW1wb3J0IGZldGNoQWxsQ2hhbXBpb25zIGZyb20gJy4uL2NoYW1waW9uRGF0YS9nZXRBbGxDaGFtcGlvbnMnO1xuaW1wb3J0IEVsZW1lbnRDcmVhdGlvbiBmcm9tICcuLi9oZWxwZXJzL2VsZW1lbnRDcmVhdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jICgpID0+IHtcbiAgLyogQ3JlYXRlcyB0aGUgZmlsdGVyIGFuZCBzb3J0aW5nIHNlY3Rpb24gYmVsb3cgdGhlIGhlYWRlciAqL1xuICBjb25zdCBmaWx0ZXJTb3J0U2VjdGlvbiA9IERyb3Bkb3duU2VjdGlvbi5jcmVhdGVTZWN0aW9uKCk7XG4gIGNvbnN0IHNvcnRPcHRpb25zID0ge1xuICAgIHNvcnQ6IFsnd2lucmF0ZScsICdwaWNrcmF0ZScsICdkYW1hZ2UnXSxcbiAgfTtcbiAgY29uc3QgbGFuZU9wdGlvbnMgPSB7XG4gICAgbGFuZTogWyd0b3AnLCAnYm90dG9tJywgJ21pZGRsZScsICd1dGlsaXR5JywgJ2p1bmdsZSddLFxuICB9O1xuICBjb25zdCByb2xlT3B0aW9ucyA9IHtcbiAgICByb2xlOiBbJ3RhbmsnLCAnYXNzYXNzaW4nLCAnZmlnaHRlcicsICdtYWdlJywgJ21hcmtzbWFuJywgJ3N1cHBvcnQnXSxcbiAgfTtcbiAgY29uc3QgcmVzb3VyY2VPcHRpb25zID0ge1xuICAgIHJlc291cmNlOiBbJ21hbmEnLCAnZW5lcmd5JywgJ3JhZ2UnLCAnbm9uZScsICdjb3VyYWdlJywgJ3NoaWVsZCcsICdmdXJ5JywgJ2Zlcm9jaXR5JywgJ2dyaXQnXSxcbiAgfTtcbiAgY29uc3QgYWxsT3B0aW9uQXJyYXlzID0gW3NvcnRPcHRpb25zLCBsYW5lT3B0aW9ucywgcm9sZU9wdGlvbnMsIHJlc291cmNlT3B0aW9uc107XG5cbiAgYWxsT3B0aW9uQXJyYXlzLmZvckVhY2goKG9wdGlvbnNPYmplY3QpID0+IHtcbiAgICBjb25zdCBkcm9wZG93bk5hbWUgPSBPYmplY3Qua2V5cyhvcHRpb25zT2JqZWN0KVswXTtcbiAgICBjb25zdCBvcHRpb25zQXJyYXkgPSBPYmplY3QudmFsdWVzKG9wdGlvbnNPYmplY3QpWzBdO1xuICAgIGNvbnN0IGRyb3Bkb3duID0gbmV3IERyb3Bkb3duU2VjdGlvbihkcm9wZG93bk5hbWUsIG9wdGlvbnNBcnJheSk7XG4gICAgZHJvcGRvd24ucmVuZGVyRHJvcGRvd24oZmlsdGVyU29ydFNlY3Rpb24pO1xuICB9KTtcblxuICAvKiBMb2FkIGFsbCBjaGFtcGlvbnMgYW5kIHJlbmRlciB0aGVtIHRvIHRoZSBjaGFtcGlvbnMgcGFnZSAqL1xuICBjb25zdCBjaGFtcGlvbnNQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoYW1waW9ucy1wYWdlJyk7XG4gIGNvbnN0IGNoYW1waW9uc1NlY3Rpb24gPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnY2hhbXBpb25zLXNlY3Rpb24nLCBjaGFtcGlvbnNQYWdlKTtcbiAgY29uc3QgYWxsQ2hhbXBpb25zID0gYXdhaXQgZmV0Y2hBbGxDaGFtcGlvbnMoKTtcbiAgY29uc3QgYWxsQ2hhbXBpb25zQXJyYXkgPSBPYmplY3QudmFsdWVzKGFsbENoYW1waW9ucyk7XG4gIGFsbENoYW1waW9uc0FycmF5LmZvckVhY2goKGNoYW1waW9uKSA9PiB7XG4gICAgY29uc3QgY2hhbXBpb25Db250YWluZXIgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnY2hhbXBpb24tY29udGFpbmVyJywgY2hhbXBpb25zU2VjdGlvbik7XG4gICAgY2hhbXBpb25Db250YWluZXIuZGF0YXNldC5pZCA9IGNoYW1waW9uLmlkO1xuICAgIGNvbnN0IGNoYW1waW9uSW1nVXJsID0gYGh0dHA6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuL2ltZy9jaGFtcGlvbi9sb2FkaW5nLyR7Y2hhbXBpb24uaWR9XzAuanBnYDtcbiAgICBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAnY2hhbXBpb24taW1nJywgY2hhbXBpb25Db250YWluZXIsIGNoYW1waW9uSW1nVXJsLCBjaGFtcGlvbi5pZCxcbiAgICApO1xuXG4gICAgY29uc3QgY2hhbXBpb25OYW1lV3JhcHBlciA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdjaGFtcGlvbi1uYW1lLXdyYXBwZXInLCBjaGFtcGlvbkNvbnRhaW5lcik7XG4gICAgY29uc3QgY2hhbXBpb25OYW1lID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdjaGFtcGlvbi1uYW1lJywgY2hhbXBpb25OYW1lV3JhcHBlcik7XG4gICAgY2hhbXBpb25OYW1lLnRleHRDb250ZW50ID0gY2hhbXBpb24ubmFtZTtcbiAgfSk7XG59O1xuIiwiLy8gUmVuZGVycyBET00gZWxlbWVudHMgdGhhdCBhcmUgcmVwZWF0ZWQgYWNyb3NzIHRlbXBsYXRlc1xuXG5pbXBvcnQgRWxlbWVudENyZWF0aW9uIGZyb20gJy4uL2hlbHBlcnMvZWxlbWVudENyZWF0aW9uJztcblxuY29uc3QgaW1wb3J0QWxsID0gKHIpID0+IHtcbiAgY29uc3QgaW1hZ2VzID0ge307XG4gIHIua2V5cygpLmZvckVhY2goKGl0ZW0pID0+IHsgaW1hZ2VzW2l0ZW0ucmVwbGFjZSgnLi8nLCAnJyldID0gcihpdGVtKTsgfSk7XG4gIHJldHVybiBpbWFnZXM7XG59O1xuXG5jb25zdCBpbWFnZXMgPSBpbXBvcnRBbGwocmVxdWlyZS5jb250ZXh0KCcuLi9pbWFnZXMnLCBmYWxzZSwgL1xcLihwbmd8anBlP2d8c3ZnKSQvKSk7XG5cbmNvbnN0IHJlbmRlckhlYWRlckRldGFpbHMgPSAoY2hhbXBpb25EYXRhLCBtb2RhbENvbnRhaW5lcikgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHttb2RhbENvbnRhaW5lcn0tY29udGFpbmVyYCk7XG4gIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kID0gYG5vLXJlcGVhdCB1cmwoaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuL2ltZy9jaGFtcGlvbi9zcGxhc2gvJHtjaGFtcGlvbkRhdGEuaWR9XzAuanBnKSA3MCUgODAlYDtcbiAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvdmVyJztcblxuICBjb25zdCBjaGFtcGlvblRpdGxlID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbi10aXRsZScpO1xuICBjaGFtcGlvblRpdGxlLnRleHRDb250ZW50ID0gY2hhbXBpb25EYXRhLnRpdGxlO1xuXG4gIGNvbnN0IGNoYW1waW9uTmFtZSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tbmFtZScpO1xuICBjaGFtcGlvbk5hbWUudGV4dENvbnRlbnQgPSBjaGFtcGlvbkRhdGEubmFtZTtcbn07XG5cbi8vIFJlbmRlcnMgd2luIG9yIHBpY2sgcmF0ZSB0byB0aGUgRE9NXG5jb25zdCByZW5kZXJTdGF0T3ZlcnZpZXcgPSAoc3RhdHNPdmVydmlldywgcmF0ZVRleHQsIHJhdGVUeXBlKSA9PiB7XG4gIGNvbnN0IGNoYW1waW9uUmF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgY29uc3QgcmF0ZVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gIC8vIFR1cm5zICdXaW4gUmF0ZScgaW50byAnd2luLXJhdGUnXG4gIGNvbnN0IGxvd2VyQ2FzZVRleHQgPSByYXRlVGV4dC5yZXBsYWNlKCcgJywgJy0nKS50b0xvd2VyQ2FzZSgpO1xuXG4gIGNoYW1waW9uUmF0ZS5jbGFzc05hbWUgPSBsb3dlckNhc2VUZXh0O1xuICBsYWJlbC5pZCA9IGAke2xvd2VyQ2FzZVRleHR9LWxhYmVsYDtcbiAgbGFiZWwuY2xhc3NOYW1lID0gJ2xhYmVsJztcbiAgcmF0ZVZhbHVlLmNsYXNzTmFtZSA9IGAke2xvd2VyQ2FzZVRleHR9LXZhbHVlYDtcbiAgbGFiZWwudGV4dENvbnRlbnQgPSByYXRlVGV4dDtcbiAgcmF0ZVZhbHVlLnRleHRDb250ZW50ID0gYCR7cmF0ZVR5cGV9JWA7XG5cbiAgY2hhbXBpb25SYXRlLmFwcGVuZENoaWxkKGxhYmVsKTsgY2hhbXBpb25SYXRlLmFwcGVuZENoaWxkKHJhdGVWYWx1ZSk7XG4gIHN0YXRzT3ZlcnZpZXcuYXBwZW5kQ2hpbGQoY2hhbXBpb25SYXRlKTtcbn07XG5cbmNvbnN0IHJlbmRlckNoYW1waW9uTGFuZSA9IChzdGF0c092ZXJ2aWV3LCBsYW5lKSA9PiB7XG4gIGNvbnN0IGNoYW1waW9uTGFuZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2hhbXBpb25MYW5lSW5mby5jbGFzc05hbWUgPSAnbGFuZS1pbmZvJztcbiAgY29uc3QgbGFuZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGxhbmVUZXh0LmNsYXNzTmFtZSA9ICdsYW5lLXRleHQgbGFiZWwnO1xuICBsYW5lVGV4dC50ZXh0Q29udGVudCA9IGxhbmU7XG4gIGNvbnN0IGxhbmVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGxhbmVJY29uLmNsYXNzTmFtZSA9ICdsYW5lLWljb24gY2hhbXBpb24tcm9sZS1pbWFnZSc7XG4gIGxhbmVJY29uLnNyYyA9IGAke2ltYWdlc1tgJHtsYW5lfS5wbmdgXX1gO1xuICBsYW5lSWNvbi5hbHQgPSBgJHtsYW5lfS5wbmdgO1xuICBjaGFtcGlvbkxhbmVJbmZvLmFwcGVuZENoaWxkKGxhbmVUZXh0KTtcbiAgY2hhbXBpb25MYW5lSW5mby5hcHBlbmRDaGlsZChsYW5lSWNvbik7XG4gIHN0YXRzT3ZlcnZpZXcuYXBwZW5kQ2hpbGQoY2hhbXBpb25MYW5lSW5mbyk7XG59O1xuXG5jb25zdCByZW5kZXJEYW1hZ2VTdGF0cyA9IChkYW1hZ2VUeXBlLCBkYW1hZ2VWYWx1ZSwgZGFtYWdlUGVyY2VudGFnZSkgPT4ge1xuICBjb25zdCBkYW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtkYW1hZ2VUeXBlfS1kYW1hZ2UtY29udGFpbmVyYCk7XG5cbiAgY29uc3QgZGFtYWdlU3RhdHMgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnZGFtYWdlLXN0YXRzJywgZGFtYWdlQ29udGFpbmVyKTtcblxuICBjb25zdCBkYW1hZ2VWYWx1ZUVsZW1lbnQgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aElkKCdzcGFuJywgYCR7ZGFtYWdlVHlwZX0tdmFsdWVgLCBkYW1hZ2VTdGF0cyk7XG4gIGNvbnN0IGRhbWFnZVBlcmNlbnRhZ2VFbGVtZW50ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhJZCgnc3BhbicsIGAke2RhbWFnZVR5cGV9LXBlcmNlbnRhZ2VgLCBkYW1hZ2VTdGF0cyk7XG4gIGRhbWFnZVZhbHVlRWxlbWVudC50ZXh0Q29udGVudCA9IGAke2RhbWFnZVZhbHVlfWA7XG4gIGRhbWFnZVBlcmNlbnRhZ2VFbGVtZW50LnRleHRDb250ZW50ID0gYCR7ZGFtYWdlUGVyY2VudGFnZX0lYDtcbn07XG5cbmNvbnN0IHJlbmRlck1hdGNodXBzSW5mbyA9IChtYXRjaHVwc0VsZW1lbnQsIG1hdGNodXBzRGF0YSkgPT4ge1xuICBtYXRjaHVwc0RhdGEuZm9yRWFjaCgobWF0Y2h1cCkgPT4ge1xuICAgIGNvbnN0IG1hdGNodXBJbmZvID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ21hdGNodXAtaW5mbycsIG1hdGNodXBzRWxlbWVudCk7XG4gICAgY29uc3QgZW5lbXlDaGFtcGlvbk5hbWUgPSBtYXRjaHVwWzBdO1xuICAgIGNvbnN0IGVuZW15Q2hhbXBpb25JbWdVcmwgPSBgaHR0cDovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vMTEuMjIuMS9pbWcvY2hhbXBpb24vJHtlbmVteUNoYW1waW9uTmFtZX0ucG5nYDtcbiAgICBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAnZW5lbXktY2hhbXBpb24taW1nJywgbWF0Y2h1cEluZm8sIGVuZW15Q2hhbXBpb25JbWdVcmwsIGBzbWFsbC0ke2VuZW15Q2hhbXBpb25OYW1lfS5wbmdgLFxuICAgICk7XG5cbiAgICBjb25zdCBtYXRjaHVwU3RhdHMgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnbWF0Y2h1cC1zdGF0cycsIG1hdGNodXBJbmZvKTtcbiAgICBjb25zdCBlbmVteUNoYW1waW9uTmFtZUVsZW1lbnQgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2VuZW15LWNoYW1waW9uLW5hbWUnLCBtYXRjaHVwU3RhdHMpO1xuICAgIGVuZW15Q2hhbXBpb25OYW1lRWxlbWVudC50ZXh0Q29udGVudCA9IGVuZW15Q2hhbXBpb25OYW1lO1xuICAgIGNvbnN0IHdpbnJhdGVBZ2FpbnN0ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ3dpbnJhdGUtYWdhaW5zdCcsIG1hdGNodXBTdGF0cyk7XG4gICAgY29uc3Qgd2lucmF0ZUFnYWluc3RMYWJlbCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnd2lucmF0ZS1hZ2FpbnN0LWxhYmVsJywgd2lucmF0ZUFnYWluc3QpO1xuICAgIHdpbnJhdGVBZ2FpbnN0TGFiZWwudGV4dENvbnRlbnQgPSAnV2lucmF0ZTogJztcbiAgICBjb25zdCBjb2xvciA9IG1hdGNodXBzRWxlbWVudC5jbGFzc05hbWUgPT09ICdiZXN0LW1hdGNodXBzIG1hdGNodXBzJyA/ICdibHVlJyA6ICdyZWQnO1xuICAgIGNvbnN0IHdpbnJhdGVBZ2FpbnN0UGVyY2VudGFnZSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCBgd2lucmF0ZS1hZ2FpbnN0LXBlcmNlbnRhZ2UgJHtjb2xvcn1gLCB3aW5yYXRlQWdhaW5zdCk7XG4gICAgd2lucmF0ZUFnYWluc3RQZXJjZW50YWdlLnRleHRDb250ZW50ID0gYCR7bWF0Y2h1cFsxXS53aW5SYXRlQWdhaW5zdC50b0ZpeGVkKDApfSVgO1xuICAgIGNvbnN0IGdhbWVzUGxheWVkQWdhaW5zdCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnZ2FtZXMtcGxheWVkLWFnYWluc3QnLCBtYXRjaHVwU3RhdHMpO1xuICAgIGdhbWVzUGxheWVkQWdhaW5zdC50ZXh0Q29udGVudCA9IGBHYW1lczogJHttYXRjaHVwWzFdLm1hdGNoZXN9YDtcbiAgfSk7XG59O1xuXG5leHBvcnQge1xuICByZW5kZXJIZWFkZXJEZXRhaWxzLFxuICByZW5kZXJTdGF0T3ZlcnZpZXcsXG4gIHJlbmRlckNoYW1waW9uTGFuZSxcbiAgcmVuZGVyRGFtYWdlU3RhdHMsXG4gIGltYWdlcyxcbiAgcmVuZGVyTWF0Y2h1cHNJbmZvLFxufTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLXJhc2luLWJsYWNrOiAjMWQxZTJjO1xcbiAgLS10cmFuc3BhcmVudC1yYXNpbi1ibGFjazogIzFkMWUyY2M3O1xcbiAgLS1kYXJrLWdvbGQ6ICM5Mjc1NDM7XFxuICAtLWxpZ2h0LWdvbGQ6ICNjN2FiNmU7XFxufVxcblxcbiNjaGFtcGlvbnMtcGFnZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAtNDtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5wYWdlLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxZW0gMDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBib3JkZXItd2lkdGg6IDAgMCAycHggMDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNjaGFtcGlvbnMtcGFnZSAuc2VhcmNoLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLnNlYXJjaCB7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIG1pbi13aWR0aDogMThlbTtcXG4gIGJhY2tncm91bmQ6ICNlMmU0ZTk7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBib3JkZXItcmFkaXVzOiAwLjVlbSAwLjVlbTtcXG4gIG1pbi1oZWlnaHQ6IDIuNmVtO1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcbiNjaGFtcGlvbnMtcGFnZSAuY2hhbXBpb25zLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBncmlkLWF1dG8tcm93czogYXV0bztcXG4gIGdyaWQtY29sdW1uLWdhcDogMWVtO1xcbiAgbWF4LXdpZHRoOiA4MCU7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW4tdG9wOiAyZW07XFxufVxcbiNjaGFtcGlvbnMtcGFnZSAuY2hhbXBpb24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXgtd2lkdGg6IDlyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW4tdG9wOiAxLjVlbTtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5jaGFtcGlvbi1pbWcge1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDglO1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLmNoYW1waW9uLW5hbWUtd3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IC0zLjJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50LXJhc2luLWJsYWNrKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMC4yZW0gMCAwLjJlbTtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5jaGFtcGlvbi1uYW1lIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLmZpbHRlci1zb3J0LXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHdpZHRoOiA5NiU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIGdyaWQtY29sdW1uLWdhcDogMC41ZW07XFxuICBtYXJnaW4tcmlnaHQ6IDAuNGVtO1xcbiAgZ3JpZC1yb3ctZ2FwOiAwLjRlbTtcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG4gIG1hcmdpbi1ib3R0b206IDNlbTtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5kcm9wZG93biB7XFxuICBtYXJnaW46IDAgMC40ZW0gMC40ZW0gMC40ZW07XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbiNjaGFtcGlvbnMtcGFnZSAuZHJvcGRvd24tYnRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZkZmUxO1xcbiAgY29sb3I6ICMyZjFkMWQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBmb250LXNpemU6IDFlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkO1xcbn1cXG4jY2hhbXBpb25zLXBhZ2UgLmRyb3Bkb3duLWJ0bjo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIuKepFxcXCI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcbiNjaGFtcGlvbnMtcGFnZSAuZHJvcGRvd24tb3B0aW9ucyB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMjtcXG59XFxuI2NoYW1waW9ucy1wYWdlIC5kcm9wZG93bi1vcHRpb24ge1xcbiAgY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBjb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmOGY4Zjg7XFxufVxcbiNjaGFtcGlvbnMtcGFnZSAuZHJvcGRvd24tb3B0aW9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogODUwcHgpIHtcXG4gICNjaGFtcGlvbnMtcGFnZSAuY2hhbXBpb25zLXNlY3Rpb24ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgfVxcbiAgI2NoYW1waW9ucy1wYWdlIC5jaGFtcGlvbi1jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDEwcmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XFxuICAjY2hhbXBpb25zLXBhZ2UgLmZpbHRlci1zb3J0LXNlY3Rpb24ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgfVxcbiAgI2NoYW1waW9ucy1wYWdlIC5jaGFtcGlvbnMtc2VjdGlvbiB7XFxuICAgIGdyaWQtY29sdW1uLWdhcDogMDtcXG4gIH1cXG4gICNjaGFtcGlvbnMtcGFnZSAuY2hhbXBpb24tbmFtZS13cmFwcGVyIHtcXG4gICAgbWFyZ2luLXRvcDogLTMuNmVtO1xcbiAgfVxcbiAgI2NoYW1waW9ucy1wYWdlIC5jaGFtcGlvbi1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAxLjRlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgI2NoYW1waW9ucy1wYWdlIC5jaGFtcGlvbnMtc2VjdGlvbiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxNTAwcHgpIHtcXG4gICNjaGFtcGlvbnMtcGFnZSAuY2hhbXBpb25zLXNlY3Rpb24ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xcbiAgfVxcbiAgI2NoYW1waW9ucy1wYWdlIC5jaGFtcGlvbi1jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDEycmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gICNjaGFtcGlvbnMtcGFnZSAuY2hhbXBpb25zLXNlY3Rpb24ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzaGVldHMvY2hhbXBpb25zLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0MsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQUVEOztBQUNBO0VBQ0Usc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUFFRjs7QUFDQTtFQUNFLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBRUY7QUFBRTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFSjtBQUNFO0VBQ0UsYUFBQTtBQUNKO0FBRUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQUo7QUFHRTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFESjtBQUlFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUZKO0FBS0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUhKO0FBTUU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBSko7QUFPRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBTEo7QUFRRTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQU5KO0FBU0U7RUFDQywyQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQVBIO0FBV0U7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7QUFUSjtBQVlFO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7QUFWSjtBQWFFO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQVhKO0FBY0U7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0FBWko7QUFlRTtFQUNFLG1DQUFBO0FBYko7QUFnQkU7RUFDRTtJQUNFLHFDQUFBO0VBZEo7RUFpQkU7SUFDRSxnQkFBQTtFQWZKO0FBQ0Y7QUFrQkU7RUFDRTtJQUNFLHFDQUFBO0VBaEJKO0VBbUJFO0lBQ0Usa0JBQUE7RUFqQko7RUFvQkU7SUFDRSxrQkFBQTtFQWxCSjtFQXFCRTtJQUNFLGdCQUFBO0VBbkJKO0FBQ0Y7QUFzQkU7RUFDRTtJQUNFLHFDQUFBO0VBcEJKO0FBQ0Y7QUF1QkU7RUFDRTtJQUNFLHFDQUFBO0VBckJKO0VBd0JFO0lBQ0UsZ0JBQUE7RUF0Qko7QUFDRjtBQXlCRTtFQUNFO0lBQ0UscUNBQUE7RUF2Qko7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLXJhc2luLWJsYWNrOiAjMWQxZTJjO1xcbiAgLS10cmFuc3BhcmVudC1yYXNpbi1ibGFjazogIzFkMWUyY2M3O1xcbiAgLS1kYXJrLWdvbGQ6ICM5Mjc1NDM7XFxuICAtLWxpZ2h0LWdvbGQ6ICNjN2FiNmU7XFxufVxcblxcbiNjaGFtcGlvbnMtcGFnZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAtNDtcXG5cXG4gIC5wYWdlLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxZW0gMDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgICBib3JkZXItd2lkdGg6IDAgMCAycHggMDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5zZWFyY2gtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG4gIFxcbiAgLnNlYXJjaCB7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBtaW4td2lkdGg6IDE4ZW07XFxuICAgIGJhY2tncm91bmQ6ICNlMmU0ZTk7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW0gMC41ZW07XFxuICAgIG1pbi1oZWlnaHQ6IDIuNmVtO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbnMtc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xcbiAgICBncmlkLWNvbHVtbi1nYXA6IDFlbTtcXG4gICAgbWF4LXdpZHRoOiA4MCU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogMmVtO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1heC13aWR0aDogOXJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW4tdG9wOiAxLjVlbVxcbiAgfVxcblxcbiAgLmNoYW1waW9uLWltZyB7XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogOCU7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tbmFtZS13cmFwcGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAtMy4yZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50LXJhc2luLWJsYWNrKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMC4yZW0gMCAwLjJlbTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1uYW1lIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgfVxcbiAgXFxuICAuZmlsdGVyLXNvcnQtc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiA5NiU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdyaWQtY29sdW1uLWdhcDogMC41ZW07XFxuICAgIG1hcmdpbi1yaWdodDogMC40ZW07XFxuICAgIGdyaWQtcm93LWdhcDogMC40ZW07XFxuICAgIG1hcmdpbi10b3A6IDFlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogM2VtO1xcbiAgfVxcblxcbiAgLmRyb3Bkb3duIHtcXG4gICBtYXJnaW46IDAgMC40ZW0gMC40ZW0gMC40ZW07XFxuICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIH1cXG5cXG4gIC5kcm9wZG93bi1idG4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZGZlMTtcXG4gICAgY29sb3I6ICMyZjFkMWQ7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcXG4gIH1cXG5cXG4gIC5kcm9wZG93bi1idG46OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXFwyN0E0XFxcIjtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICB9XFxuXFxuICAuZHJvcGRvd24tb3B0aW9ucyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGRpc3BsYXk6IG5vbmU7IFxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgfVxcbiAgXFxuICAuZHJvcGRvd24tb3B0aW9uIHtcXG4gICAgY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTsgXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmOGY4Zjg7XFxuICB9XFxuXFxuICAuZHJvcGRvd24tb3B0aW9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICB9XFxuXFxuICBAbWVkaWEgKG1pbi13aWR0aDogODUwcHgpIHtcXG4gICAgLmNoYW1waW9ucy1zZWN0aW9uIHtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgICB9XFxuXFxuICAgIC5jaGFtcGlvbi1jb250YWluZXIge1xcbiAgICAgIG1heC13aWR0aDogMTByZW07XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcXG4gICAgLmZpbHRlci1zb3J0LXNlY3Rpb24ge1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICAgIH1cXG5cXG4gICAgLmNoYW1waW9ucy1zZWN0aW9uIHtcXG4gICAgICBncmlkLWNvbHVtbi1nYXA6IDA7XFxuICAgIH1cXG5cXG4gICAgLmNoYW1waW9uLW5hbWUtd3JhcHBlciB7XFxuICAgICAgbWFyZ2luLXRvcDogLTMuNmVtO1xcbiAgICB9XFxuXFxuICAgIC5jaGFtcGlvbi1uYW1lIHtcXG4gICAgICBmb250LXNpemU6IDEuNGVtO1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxuICAgIC5jaGFtcGlvbnMtc2VjdGlvbiB7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgfVxcbiAgfVxcblxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDE1MDBweCkge1xcbiAgICAuY2hhbXBpb25zLXNlY3Rpb24ge1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XFxuICAgIH1cXG5cXG4gICAgLmNoYW1waW9uLWNvbnRhaW5lciB7XFxuICAgICAgbWF4LXdpZHRoOiAxMnJlbTtcXG4gICAgfVxcbiAgfVxcblxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAgIC5jaGFtcGlvbnMtc2VjdGlvbiB7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1yYXNpbi1ibGFjazogIzFkMWUyYztcXG4gIC0tZGFyay1nb2xkOiAjOTI3NTQzO1xcbiAgLS1saWdodC1nb2xkOiAjYzdhYjZlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICBwYWRkaW5nOiAycmVtIDA7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG4ubW9kYWwgI21haW4tY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXgtd2lkdGg6IDc1JTtcXG4gIG1pbi1oZWlnaHQ6IDQ5cmVtO1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLm1vZGFsIC5tb2RhbC1oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMGJmO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC42ZW07XFxuICBsaW5lLWhlaWdodDogMS40O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLm1vZGFsIC5uYXZpZ2F0aW9uLWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmNsb3NlLW1vZGFsLWJ0bi13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDEuMmVtO1xcbn1cXG4ubW9kYWwgLmNsb3NlLW1vZGFsLWJ0biB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1zaXplOiAxLjZlbTtcXG59XFxuLm1vZGFsIC5jbG9zZS1tb2RhbC1idG46aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbn1cXG4ubW9kYWwgLm1vZGFsLW5hdi1saW5rcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBmb250LXNpemU6IDIycHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm1vZGFsIC5tb2RhbC1uYXYtbGluayB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tdG9wOiAwLjVlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG4ubW9kYWwgLm1vZGFsLW5hdi1saW5rOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLWhlYWRpbmcge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLW5hbWUge1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXRpdGxlIHtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tcm9sZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXJvbGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1yZXNvdXJjZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXJvbGUtaW1hZ2Uge1xcbiAgaGVpZ2h0OiAzLjVyZW07XFxuICB3aWR0aDogMy41cmVtO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXJlc291cmNlLWltYWdlIHtcXG4gIGhlaWdodDogMy41cmVtO1xcbiAgd2lkdGg6IDMuNXJlbTtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1yb2xlLW5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1yZXNvdXJjZS1uYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tbWFpbi1pbmZvIHtcXG4gIHBhZGRpbmc6IDEuOHJlbTtcXG4gIG1heC13aWR0aDogMzRyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogbGFzdCBiYXNlbGluZTtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xcbiAgZnJvbSB7XFxuICAgIHRvcDogLTMwMHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0b3A6IDA7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XFxuICBmcm9tIHtcXG4gICAgdG9wOiAtMzAwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICB0byB7XFxuICAgIHRvcDogMDtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuLm1vZGFsIC5sb3JlLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwYmY7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG59XFxuLm1vZGFsIC5zdWJoZWFkaW5nIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDAuNGVtO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmFiaWxpdGllcy1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMGJmO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC42ZW07XFxuICBsaW5lLWhlaWdodDogMS40O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICB3aWR0aDogMjBlbTtcXG59XFxuLm1vZGFsIC5hYmlsaXRpZXMtaGVhZGluZyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tb2RhbCAuYWJpbGl0eS1pbWdzIHtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuLm1vZGFsIC5hYmlsaXR5LWRlc2NyaXB0aW9uIHtcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tZGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1leHRyYS1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ubW9kYWwgLmFiaWxpdHktaW5mbyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubW9kYWwgLmFiaWxpdHktaW5mby5hY3RpdmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5tb2RhbCAuc3BlbGwtaW1nIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMCAwLjVyZW07XFxuICBoZWlnaHQ6IDMuM3JlbTtcXG4gIHdpZHRoOiAzLjNyZW07XFxufVxcbi5tb2RhbCAuc3BlbGwtaW1nLmNsaWNrZWQge1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci13aWR0aDogNHB4O1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXRpcHMtc2VjdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwYmY7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XFxuICBtYXgtd2lkdGg6IDM0cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXRpcHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tdGlwIHtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuLm1vZGFsICNzdGF0cy1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMDtcXG4gIG1heC13aWR0aDogNzUlO1xcbiAgbWluLWhlaWdodDogNDlyZW07XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tc3RhdHMtb3ZlcnZpZXcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgbWFyZ2luLXRvcDogMC41ZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG4gIG1heC13aWR0aDogMjVyZW07XFxuICBtaW4td2lkdGg6IDIwcmVtO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG4ubW9kYWwgLndpbi1yYXRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ubW9kYWwgLnBpY2stcmF0ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLm1vZGFsIC5sYW5lLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubW9kYWwgLnBpY2stcmF0ZS12YWx1ZSB7XFxuICBtYXJnaW4tdG9wOiAwLjRlbTtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG59XFxuLm1vZGFsIC53aW4tcmF0ZS12YWx1ZSB7XFxuICBtYXJnaW4tdG9wOiAwLjRlbTtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG59XFxuLm1vZGFsIC5sYWJlbCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tZGFtYWdlLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwYmY7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIG1heC1oZWlnaHQ6IDE3LjVyZW07XFxufVxcbi5tb2RhbCAuZGFtYWdlLWhlYWRpbmcge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmNpcmN1bGFyLWNoYXJ0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWF4LXdpZHRoOiA4MCU7XFxuICBtYXgtaGVpZ2h0OiAyNTBweDtcXG59XFxuLm1vZGFsIC5jaXJjbGUge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZS13aWR0aDogMi4yO1xcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xcbiAgYW5pbWF0aW9uOiBwcm9ncmVzcyAxcyBlYXNlLW91dCBmb3J3YXJkcztcXG59XFxuLm1vZGFsICNtYWdpYy1kYW1hZ2Utc3Ryb2tlIHtcXG4gIHN0cm9rZTogIzM1YTdmZjtcXG59XFxuLm1vZGFsICNwaHlzaWNhbC1kYW1hZ2Utc3Ryb2tlIHtcXG4gIHN0cm9rZTogI2ZmNTk2NDtcXG59XFxuLm1vZGFsICN0cnVlLWRhbWFnZS1zdHJva2Uge1xcbiAgc3Ryb2tlOiAjZmZlNzRjO1xcbn1cXG5Aa2V5ZnJhbWVzIHByb2dyZXNzIHtcXG4gIDAlIHtcXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMCAxMDA7XFxuICB9XFxufVxcbi5tb2RhbCAudG90YWwtZGFtYWdlLXRleHQge1xcbiAgZm9udC1zaXplOiA0cHg7XFxuICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xcbiAgZmlsbDogd2hpdGU7XFxufVxcbi5tb2RhbCAudG90YWwtZGFtYWdlLWxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogM3B4O1xcbiAgdGV4dC1hbmNob3I6IG1pZGRsZTtcXG4gIGZpbGw6IHZhcigtLWRhcmstZ29sZCk7XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tbWFpbi1zdGF0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcbi5tb2RhbCAuY2hhbXBpb24taXRlbS1idWlsZHMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMGJmO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC42ZW07XFxuICBsaW5lLWhlaWdodDogMS40O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBtYXgtaGVpZ2h0OiAxNy41cmVtO1xcbn1cXG4ubW9kYWwgLmRhbWFnZS1zdGF0cy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5tb2RhbCAuZGFtYWdlLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1heC1oZWlnaHQ6IDkyJTtcXG4gIGhlaWdodDogOTIlO1xcbn1cXG4ubW9kYWwgLmRhbWFnZS10eXBlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG4ubW9kYWwgLmRhbWFnZS1zdGF0cyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG4ubW9kYWwgI3BoeXNpY2FsLWRhbWFnZS1sYWJlbCB7XFxuICBjb2xvcjogI2ZmNTk2NDtcXG59XFxuLm1vZGFsICNtYWdpYy1kYW1hZ2UtbGFiZWwge1xcbiAgY29sb3I6ICMzNWE3ZmY7XFxufVxcbi5tb2RhbCAjdHJ1ZS1kYW1hZ2UtbGFiZWwge1xcbiAgY29sb3I6ICNmZmU3NGM7XFxufVxcbi5tb2RhbCAuaXRlbS1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwYmY7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwO1xcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgd2lkdGg6IDQwJTtcXG4gIHJpZ2h0OiAxZW07XFxuICBtYXJnaW4tYm90dG9tOiAzLjVlbTtcXG59XFxuLm1vZGFsIC5pdGVtLW5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLm1vZGFsIC5tYWluLWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG59XFxuLm1vZGFsIC5jb3N0LWxhYmVsIHtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLm1vZGFsIC5jb21wb25lbnQtaXRlbXMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5tb2RhbCAuY29tcG9uZW50LWl0ZW0tbmFtZSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5tb2RhbCAuY29zdC1hbW91bnQge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4ubW9kYWwgLmNvbXBvbmVudC1pdGVtLWNvc3QtbGFiZWwge1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4ubW9kYWwgLmNvbXBvbmVudC1pdGVtLWFtb3VudCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5tb2RhbCAuY29tcG9uZW50LWl0ZW0tZGV0YWlscy1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMGJmO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC42ZW07XFxuICBsaW5lLWhlaWdodDogMS40O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5tb2RhbCAuaXRlbS1zZXRzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1heC1oZWlnaHQ6IDkwJTtcXG59XFxuLm1vZGFsIC5pdGVtLXNldC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICBwYWRkaW5nOiAwLjRlbTtcXG59XFxuLm1vZGFsIC5tYWluLWNvbXBvbmVudC1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMGJmO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC42ZW07XFxuICBsaW5lLWhlaWdodDogMS40O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYwNDAwODM7XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDBlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG59XFxuLm1vZGFsIC5pdGVtLWltZyB7XFxuICBtYXgtd2lkdGg6IDIuN2VtO1xcbiAgbWF4LWhlaWdodDogMi43ZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG59XFxuLm1vZGFsIC5jb21wb25lbnQtaXRlbS1pbWcge1xcbiAgbWF4LXdpZHRoOiAxLjhlbTtcXG4gIG1heC1oZWlnaHQ6IDEuOGVtO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLW1hdGNodXBzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBiZjtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgbWF4LWhlaWdodDogMjUuMnJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgMCAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG4ubW9kYWwgLm1hdGNodXBzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIG1heC13aWR0aDogMjRyZW07XFxufVxcbi5tb2RhbCAubWF0Y2h1cC1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTYxYTtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgbWFyZ2luOiBhdXRvIDAuNWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG4ubW9kYWwgLm1hdGNodXAtaW5mbzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNjFhYzk7XFxufVxcbi5tb2RhbCAubWF0Y2h1cC1zdGF0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIFxcXCJBcHBsZSBTRCBHb3RoaWMgTmVvXFxcIiwgQXBwbGVHb3RoaWMsIERvdHVtLCBBcmlhbCwgVGFob21hO1xcbn1cXG4ubW9kYWwgLmVuZW15LWNoYW1waW9uLWltZyB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBtYXgtaGVpZ2h0OiAzZW07XFxuICBtYXgtd2lkdGg6IDNlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG4ubW9kYWwgLndpbnJhdGUtYWdhaW5zdC1wZXJjZW50YWdlLmJsdWUge1xcbiAgY29sb3I6ICMzNWE3ZmY7XFxufVxcbi5tb2RhbCAud2lucmF0ZS1hZ2FpbnN0LXBlcmNlbnRhZ2UucmVkIHtcXG4gIGNvbG9yOiAjZmY1OTY0O1xcbn1cXG4ubW9kYWwgI3NraW5zLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nOiAwO1xcbiAgbWF4LXdpZHRoOiA3NSU7XFxuICBtaW4taGVpZ2h0OiA0OXJlbTtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG1pbi1oZWlnaHQ6IDA7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1heC13aWR0aDogOTklO1xcbiAgd2lkdGg6IDk5JTtcXG59XFxuLm1vZGFsICNza2lucy1jb250YWluZXIgLm5hdmlnYXRpb24tYmFyIHtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCB2YXIoLS1kYXJrLWdvbGQpO1xcbn1cXG4ubW9kYWwgI3NraW5zLWNvbnRhaW5lciAubW9kYWwtaGVhZGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi5tb2RhbCAuc2tpbi1pbWFnZS1jb250YWluZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5tb2RhbCAuc2tpbi1pbWFnZS1jb250YWluZXIuc2hvd24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5tb2RhbCAuc2tpbi1pbWFnZSB7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5tb2RhbCAuc2tpbi1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG4ubW9kYWwgI3NraW5zLWNvbnRhaW5lciAuY2hhbXBpb24taGVhZGluZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5tb2RhbCAuaW1nLXNjcm9sbC1hcnJvdyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG4ubW9kYWwgLmltZy1zY3JvbGwtYXJyb3c6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTIwcHgpIHtcXG4gIC5tb2RhbCAuY29tcG9uZW50LWl0ZW0taW1nIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5tb2RhbCAuaXRlbS1zZXRzLWNvbnRhaW5lciB7XFxuICAgIG1pbi1oZWlnaHQ6IDgwJTtcXG4gIH1cXG4gIC5tb2RhbCAuaXRlbS1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgIG1pbi13aWR0aDogNzAlO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogODY3cHgpIHtcXG4gIC5tb2RhbCAuaXRlbS1pbWcge1xcbiAgICBtYXgtaGVpZ2h0OiAyLjJyZW07XFxuICAgIG1heC13aWR0aDogMi4ycmVtO1xcbiAgfVxcbiAgLm1vZGFsIC5jaGFtcGlvbi1kZXRhaWxzIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgfVxcbiAgLm1vZGFsIC5hYmlsaXRpZXMtY29udGFpbmVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgbWF4LXdpZHRoOiAyMHJlbTtcXG4gIH1cXG4gIC5tb2RhbCAubG9yZS1jb250YWluZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgLm1vZGFsIC5pdGVtLXNldHMtY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIH1cXG4gIC5tb2RhbCAuaXRlbS1zZXQtY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5tb2RhbCAubWF0Y2h1cHMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLm1vZGFsIC5tYXRjaHVwLWluZm8ge1xcbiAgICBtYXJnaW46IDAuNWVtIGF1dG87XFxuICB9XFxuICAubW9kYWwgI21haW4tY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgLm1vZGFsICNzdGF0cy1jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA4NDBweCkge1xcbiAgLm1vZGFsIC5kYW1hZ2UtaW5mbyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICB9XFxuICAubW9kYWwgLmdhbWVzLXBsYXllZC1hZ2FpbnN0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5tb2RhbCAuZGFtYWdlLXN0YXRzLWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NjBweCkge1xcbiAgLm1vZGFsIC5jaGFtcGlvbi1tYWluLXN0YXRzIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5tb2RhbCAuaXRlbS1zZXQtY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIH1cXG4gIC5tb2RhbCAuaXRlbS1zZXRzLWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAubW9kYWwgLmNoYW1waW9uLWRhbWFnZS1jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAubW9kYWwgLmRhbWFnZS1zdGF0cy1pbmZvIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5tb2RhbCAuZGFtYWdlLWluZm8ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIH1cXG4gIC5tb2RhbCAuZGFtYWdlLXR5cGUtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAwLjJlbSBhdXRvO1xcbiAgfVxcbiAgLm1vZGFsIC5jaXJjdWxhci1jaGFydCB7XFxuICAgIG1heC1oZWlnaHQ6IDE5NXB4O1xcbiAgICBtYXgtd2lkdGg6IDgwJTtcXG4gIH1cXG4gIC5tb2RhbCAuZGFtYWdlLXN0YXRzLWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAubW9kYWwgLmNoYW1waW9uLXJvbGUge1xcbiAgICBtYXJnaW4tbGVmdDogMC41ZW07XFxuICAgIG1hcmdpbi1yaWdodDogMC41ZW07XFxuICB9XFxuICAubW9kYWwgLmNoYW1waW9uLXJlc291cmNlIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xcbiAgfVxcbiAgLm1vZGFsIC5jaGFtcGlvbi1yb2xlcyB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gIH1cXG4gIC5tb2RhbCAuc3BlbGwtaW1nIHtcXG4gICAgaGVpZ2h0OiAyLjhlbTtcXG4gICAgd2lkdGg6IDIuOGVtO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA0MTRweCkge1xcbiAgLm1vZGFsIC5jaGFtcGlvbi1zdGF0cy1vdmVydmlldyB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbWluLXdpZHRoOiAxN3JlbTtcXG4gIH1cXG4gIC5tb2RhbCAuY2hhbXBpb24tbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gIH1cXG4gIC5tb2RhbCAubW9kYWwtbmF2LWxpbmtzIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgfVxcbiAgLm1vZGFsIC5jbG9zZS1tb2RhbC1idG4td3JhcHBlciB7XFxuICAgIGxlZnQ6IDAuN2VtO1xcbiAgfVxcbiAgLm1vZGFsIC5jbG9zZS1tb2RhbC1idG4ge1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTMwMHB4KSB7XFxuICAubW9kYWwgI3NraW5zLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWF4LXdpZHRoOiA3MCU7XFxuICAgIG1pbi1oZWlnaHQ6IGF1dG87XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxOTUwcHgpIHtcXG4gIC5tb2RhbCAjc2tpbnMtY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiA1MCU7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXNoZWV0cy9tb2RhbHMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQUNGOztBQThEQTtFQUNFLGtEQUFBO0FBM0RGOztBQThEQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0Esb0NBQUE7QUEzREY7QUE2REU7RUFoQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDRFQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQ0FBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQXNCRSxjQUFBO0FBL0NKO0FBa0RFO0VBakZBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBMEVFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBdkNKO0FBMENFO0VBQ0UsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FB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RUFsQko7RUFxQkU7SUFDRSxzQkFBQTtFQW5CSjtFQXNCRTtJQUNFLHNCQUFBO0VBcEJKO0VBdUJFO0lBQ0Usa0JBQUE7RUFyQko7RUF3QkU7SUFDRSxlQUFBO0VBdEJKO0VBeUJFO0lBQ0UsZUFBQTtFQXZCSjtBQUNGO0FBMEJFO0VBQ0U7SUFDRSw4QkFBQTtJQUNBLDhCQUFBO0lBQ0EsZUFBQTtFQXhCSjtFQTJCRTtJQUNFLGFBQUE7RUF6Qko7RUE0QkU7SUFDRSxtQkFBQTtFQTFCSjtBQUNGO0FBNkJFO0VBQ0U7SUFDRSxzQkFBQTtFQTNCSjtFQThCRTtJQUNFLG1CQUFBO0VBNUJKO0VBK0JFO0lBQ0Usc0JBQUE7RUE3Qko7RUFnQ0U7SUFDRSxlQUFBO0lBQ0EsbUJBQUE7RUE5Qko7RUFpQ0U7SUFDRSxzQkFBQTtFQS9CSjtFQWtDRTtJQUNFLG1CQUFBO0lBQ0EsdUJBQUE7RUFoQ0o7RUFtQ0U7SUFDRSxrQkFBQTtFQWpDSjtFQW9DRTtJQUNFLGlCQUFBO0lBQ0EsY0FBQTtFQWxDSjtFQXFDRTtJQUNFLHNCQUFBO0VBbkNKO0VBc0NFO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtFQXBDSjtFQXVDRTtJQUNFLGtCQUFBO0lBQ0EsbUJBQUE7RUFyQ0o7RUF3Q0U7SUFDRSxlQUFBO0VBdENKO0VBeUNFO0lBQ0UsYUFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0VBdkNKO0FBQ0Y7QUEwQ0U7RUFDRTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQXhDSjtFQTJDRTtJQUNFLGVBQUE7RUF6Q0o7RUE0Q0U7SUFDRSxlQUFBO0VBMUNKO0VBNkNFO0lBQ0UsV0FBQTtFQTNDSjtFQThDRTtJQUNFLGdCQUFBO0VBNUNKO0FBQ0Y7QUErQ0U7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0VBN0NKO0FBQ0Y7QUFnREU7RUFDRTtJQUNFLGNBQUE7RUE5Q0o7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1yYXNpbi1ibGFjazogIzFkMWUyYztcXG4gIC0tZGFyay1nb2xkOiAjOTI3NTQzO1xcbiAgLS1saWdodC1nb2xkOiAjYzdhYjZlO1xcbn1cXG5cXG5AbWl4aW4gY29udGFpbmVyQmFja2dyb3VuZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwYmY7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG59XFxuXFxuQG1peGluIHN1YkhlYWRpbmdTdHlsZSB7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAwLjRlbTtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuQG1peGluIGljb25TaXplIHtcXG4gIGhlaWdodDogMy41cmVtO1xcbiAgd2lkdGg6IDMuNXJlbTtcXG59XFxuXFxuQG1peGluIGljb25UZXh0IHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbkBtaXhpbiBpY29uQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxufVxcblxcbkBtaXhpbiBzbWFsbE1hcmdpbiB7XFxuICBtYXJnaW4tdG9wOiAwLjVlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG5cXG5AbWl4aW4gbW9kYWxDb250ZW50Q29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXgtd2lkdGg6IDc1JTtcXG4gIG1pbi1oZWlnaHQ6IDQ5cmVtO1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIHBhZGRpbmc6IDJyZW0gMDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNCk7XFxuXFxuICAjbWFpbi1jb250YWluZXIge1xcbiAgICBAaW5jbHVkZSBtb2RhbENvbnRlbnRDb250YWluZXIoKTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAubW9kYWwtaGVhZGVyIHtcXG4gICAgQGluY2x1ZGUgY29udGFpbmVyQmFja2dyb3VuZCgpO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLm5hdmlnYXRpb24tYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5jbG9zZS1tb2RhbC1idG4td3JhcHBlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMS4yZW07XFxuICB9XFxuXFxuICAuY2xvc2UtbW9kYWwtYnRuIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBmb250LXNpemU6IDEuNmVtO1xcbiAgfSAgXFxuXFxuICAuY2xvc2UtbW9kYWwtYnRuOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgfVxcblxcbiAgLm1vZGFsLW5hdi1saW5rcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLm1vZGFsLW5hdi1saW5rIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBAaW5jbHVkZSBzbWFsbE1hcmdpbigpO1xcbiAgfVxcblxcbiAgLm1vZGFsLW5hdi1saW5rOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICB9XFxuXFxuICAuY2hhbXBpb24taGVhZGluZyB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1uYW1lIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXRpdGxlIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIEBpbmNsdWRlIHNtYWxsTWFyZ2luKCk7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tcm9sZXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1yb2xlIHtcXG4gICAgQGluY2x1ZGUgaWNvbkNvbnRhaW5lcigpO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXJlc291cmNlIHtcXG4gICAgQGluY2x1ZGUgaWNvbkNvbnRhaW5lcigpO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXJvbGUtaW1hZ2Uge1xcbiAgICBAaW5jbHVkZSBpY29uU2l6ZSgpO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXJlc291cmNlLWltYWdlIHtcXG4gICAgQGluY2x1ZGUgaWNvblNpemUoKTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1yb2xlLW5hbWUge1xcbiAgICBAaW5jbHVkZSBpY29uVGV4dCgpO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXJlc291cmNlLW5hbWUge1xcbiAgICBAaW5jbHVkZSBpY29uVGV4dCgpO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLW1haW4taW5mbyB7XFxuICAgIHBhZGRpbmc6IDEuOHJlbTtcXG4gICAgbWF4LXdpZHRoOiAzNHJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBsYXN0IGJhc2VsaW5lO1xcbiAgfVxcblxcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xcbiAgICBmcm9tIHtcXG4gICAgICB0b3A6IC0zMDBweDtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgfVxcblxcbiAgQGtleWZyYW1lcyBhbmltYXRldG9wIHtcXG4gICAgZnJvbSB7XFxuICAgICAgdG9wOiAtMzAwcHg7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5sb3JlLWNvbnRhaW5lciB7XFxuICAgIEBpbmNsdWRlIGNvbnRhaW5lckJhY2tncm91bmQoKTtcXG4gIH1cXG5cXG4gIC5zdWJoZWFkaW5nIHtcXG4gICAgQGluY2x1ZGUgc3ViSGVhZGluZ1N0eWxlKCk7XFxuICB9XFxuXFxuICAuYWJpbGl0aWVzLWNvbnRhaW5lciB7XFxuICAgIEBpbmNsdWRlIGNvbnRhaW5lckJhY2tncm91bmQoKTtcXG4gICAgd2lkdGg6IDIwZW07XFxuICB9XFxuXFxuICAuYWJpbGl0aWVzLWhlYWRpbmcge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuYWJpbGl0eS1pbWdzIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIH1cXG5cXG4gIC5hYmlsaXR5LWRlc2NyaXB0aW9uIHtcXG4gICAgQGluY2x1ZGUgc21hbGxNYXJnaW4oKTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tZXh0cmEtaW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAuYWJpbGl0eS1pbmZvIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5hYmlsaXR5LWluZm8uYWN0aXZlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5zcGVsbC1pbWcge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbjogMCAwLjVyZW07XFxuICAgIGhlaWdodDogMy4zcmVtO1xcbiAgICB3aWR0aDogMy4zcmVtO1xcbiAgfVxcblxcbiAgLnNwZWxsLWltZy5jbGlja2VkIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgICBib3JkZXItd2lkdGg6IDRweDtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi10aXBzLXNlY3Rpb24ge1xcbiAgICBAaW5jbHVkZSBjb250YWluZXJCYWNrZ3JvdW5kKCk7XFxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XFxuICAgIG1heC13aWR0aDogMzRyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi10aXBzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi10aXAge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICB9XFxuXFxuICAjc3RhdHMtY29udGFpbmVyIHtcXG4gICAgQGluY2x1ZGUgbW9kYWxDb250ZW50Q29udGFpbmVyKCk7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tc3RhdHMtb3ZlcnZpZXcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgQGluY2x1ZGUgc21hbGxNYXJnaW4oKTtcXG4gICAgbWF4LXdpZHRoOiAyNXJlbTtcXG4gICAgbWluLXdpZHRoOiAyMHJlbTtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgfVxcblxcbiAgLndpbi1yYXRlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5waWNrLXJhdGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmxhbmUtaW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAucGljay1yYXRlLXZhbHVlIHtcXG4gICAgbWFyZ2luLXRvcDogMC40ZW07XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gIH1cXG5cXG4gIC53aW4tcmF0ZS12YWx1ZSB7XFxuICAgIG1hcmdpbi10b3A6IDAuNGVtO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICB9XFxuXFxuICAubGFiZWwge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tZGFtYWdlLWNvbnRhaW5lciB7XFxuICAgIEBpbmNsdWRlIGNvbnRhaW5lckJhY2tncm91bmQoKTtcXG4gICAgbWF4LWhlaWdodDogMTcuNXJlbTtcXG4gIH1cXG5cXG4gIC5kYW1hZ2UtaGVhZGluZyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5jaXJjdWxhci1jaGFydCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1heC13aWR0aDogODAlO1xcbiAgICBtYXgtaGVpZ2h0OiAyNTBweDtcXG4gIH1cXG5cXG4gIC5jaXJjbGUge1xcbiAgICBmaWxsOiBub25lO1xcbiAgICBzdHJva2Utd2lkdGg6IDIuMjtcXG4gICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xcbiAgICBhbmltYXRpb246IHByb2dyZXNzIDFzIGVhc2Utb3V0IGZvcndhcmRzO1xcbiAgfVxcblxcbiAgI21hZ2ljLWRhbWFnZS1zdHJva2Uge1xcbiAgICBzdHJva2U6ICMzNWE3ZmY7XFxuICB9XFxuXFxuICAjcGh5c2ljYWwtZGFtYWdlLXN0cm9rZSB7XFxuICAgIHN0cm9rZTogI2ZmNTk2NDtcXG4gIH1cXG5cXG4gICN0cnVlLWRhbWFnZS1zdHJva2Uge1xcbiAgICBzdHJva2U6ICNmZmU3NGM7XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIHByb2dyZXNzIHtcXG4gICAgMCUge1xcbiAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDAgMTAwO1xcbiAgICB9XFxuICB9XFxuXFxuICAudG90YWwtZGFtYWdlLXRleHQge1xcbiAgICBmb250LXNpemU6IDRweDtcXG4gICAgdGV4dC1hbmNob3I6IG1pZGRsZTtcXG4gICAgZmlsbDogd2hpdGU7XFxuICB9XFxuXFxuICAudG90YWwtZGFtYWdlLWxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAzcHg7XFxuICAgIHRleHQtYW5jaG9yOiBtaWRkbGU7XFxuICAgIGZpbGw6IHZhcigtLWRhcmstZ29sZCk7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tbWFpbi1zdGF0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLWl0ZW0tYnVpbGRzIHtcXG4gICAgQGluY2x1ZGUgY29udGFpbmVyQmFja2dyb3VuZCgpO1xcbiAgICBtYXgtaGVpZ2h0OiAxNy41cmVtO1xcbiAgfVxcblxcbiAgLmRhbWFnZS1zdGF0cy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5kYW1hZ2UtaW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1heC1oZWlnaHQ6IDkyJTtcXG4gICAgaGVpZ2h0OiA5MiU7XFxuICB9XFxuXFxuICAuZGFtYWdlLXR5cGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICB9XFxuXFxuICAuZGFtYWdlLXN0YXRzIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIH1cXG5cXG4gICNwaHlzaWNhbC1kYW1hZ2UtbGFiZWwge1xcbiAgICBjb2xvcjogI2ZmNTk2NDtcXG4gIH1cXG5cXG4gICNtYWdpYy1kYW1hZ2UtbGFiZWwge1xcbiAgICBjb2xvcjogIzM1YTdmZjtcXG4gIH1cXG5cXG4gICN0cnVlLWRhbWFnZS1sYWJlbCB7XFxuICAgIGNvbG9yOiAjZmZlNzRjO1xcbiAgfVxcblxcbiAgLml0ZW0tZGV0YWlscy1jb250YWluZXIge1xcbiAgICBAaW5jbHVkZSBjb250YWluZXJCYWNrZ3JvdW5kKCk7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICByaWdodDogMWVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzLjVlbTtcXG4gIH1cXG5cXG4gIC5pdGVtLW5hbWUge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICB9XFxuXFxuICAubWFpbi1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgfVxcblxcbiAgLmNvc3QtbGFiZWwge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gIH1cXG5cXG4gIC5jb21wb25lbnQtaXRlbXMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG5cXG4gIC5jb21wb25lbnQtaXRlbS1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgfVxcblxcbiAgLmNvc3QtYW1vdW50IHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgfVxcblxcbiAgLmNvbXBvbmVudC1pdGVtLWNvc3QtbGFiZWwge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gIH1cXG5cXG4gIC5jb21wb25lbnQtaXRlbS1hbW91bnQge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICB9XFxuXFxuICAuY29tcG9uZW50LWl0ZW0tZGV0YWlscy1jb250YWluZXIge1xcbiAgICBAaW5jbHVkZSBjb250YWluZXJCYWNrZ3JvdW5kKCk7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLml0ZW0tc2V0cy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWF4LWhlaWdodDogOTAlO1xcbiAgfVxcblxcbiAgLml0ZW0tc2V0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICAgIHBhZGRpbmc6IDAuNGVtO1xcbiAgfVxcblxcbiAgLm1haW4tY29tcG9uZW50LWNvbnRhaW5lciB7XFxuICAgIEBpbmNsdWRlIGNvbnRhaW5lckJhY2tncm91bmQoKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2MDQwMDgzO1xcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiAwZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICB9XFxuXFxuICAuaXRlbS1pbWcge1xcbiAgICBtYXgtd2lkdGg6IDIuN2VtO1xcbiAgICBtYXgtaGVpZ2h0OiAyLjdlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgICAvL3BhZGRpbmc6IDFlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDA7XFxuICB9XFxuXFxuICAuY29tcG9uZW50LWl0ZW0taW1nIHtcXG4gICAgbWF4LXdpZHRoOiAxLjhlbTtcXG4gICAgbWF4LWhlaWdodDogMS44ZW07XFxuICB9XFxuXFxuICAuY2hhbXBpb24tbWF0Y2h1cHMge1xcbiAgICBAaW5jbHVkZSBjb250YWluZXJCYWNrZ3JvdW5kKCk7XFxuICAgIG1heC1oZWlnaHQ6IDI1LjJyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwIDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgfVxcblxcbiAgLm1hdGNodXBzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIG1heC13aWR0aDogMjRyZW07XFxuICB9XFxuXFxuICAubWF0Y2h1cC1pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTYxYTtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIG1hcmdpbjogYXV0byAwLjVlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgfVxcblxcbiAgLm1hdGNodXAtaW5mbzpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzE2MWFjOTtcXG4gIH1cXG5cXG4gIC5tYXRjaHVwLXN0YXRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBcXFwiQXBwbGUgU0QgR290aGljIE5lb1xcXCIsIEFwcGxlR290aGljLFxcbiAgICAgIERvdHVtLCBBcmlhbCwgVGFob21hO1xcbiAgfVxcblxcbiAgLmVuZW15LWNoYW1waW9uLWltZyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgbWF4LWhlaWdodDogM2VtO1xcbiAgICBtYXgtd2lkdGg6IDNlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxuICB9XFxuXFxuICAud2lucmF0ZS1hZ2FpbnN0LXBlcmNlbnRhZ2UuYmx1ZSB7XFxuICAgIGNvbG9yOiAjMzVhN2ZmO1xcbiAgfVxcblxcbiAgLndpbnJhdGUtYWdhaW5zdC1wZXJjZW50YWdlLnJlZCB7XFxuICAgIGNvbG9yOiAjZmY1OTY0O1xcbiAgfVxcblxcbiAgI3NraW5zLWNvbnRhaW5lciB7XFxuICAgIEBpbmNsdWRlIG1vZGFsQ29udGVudENvbnRhaW5lcigpO1xcbiAgICBkaXNwbGF5Om5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWluLWhlaWdodDogMDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIG1heC13aWR0aDogOTklO1xcbiAgICB3aWR0aDogOTklO1xcblxcbiAgICAubmF2aWdhdGlvbi1iYXIge1xcbiAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgICB9XFxuICB9XFxuXFxuICAjc2tpbnMtY29udGFpbmVyIC5tb2RhbC1oZWFkZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgfVxcblxcbiAgLnNraW4taW1hZ2UtY29udGFpbmVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLnNraW4taW1hZ2UtY29udGFpbmVyLnNob3duIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAuc2tpbi1pbWFnZSB7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuc2tpbi1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICB9XFxuXFxuICAjc2tpbnMtY29udGFpbmVyIC5jaGFtcGlvbi1oZWFkaW5nIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuaW1nLXNjcm9sbC1hcnJvdyB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gIH1cXG5cXG4gIC5pbWctc2Nyb2xsLWFycm93OmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICB9XFxuXFxuICBAbWVkaWEgKG1heC13aWR0aDogMTEyMHB4KSB7XFxuICAgIC5jb21wb25lbnQtaXRlbS1pbWcge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLml0ZW0tc2V0cy1jb250YWluZXIge1xcbiAgICAgIG1pbi1oZWlnaHQ6IDgwJTtcXG4gICAgfVxcblxcbiAgICAuaXRlbS1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgICAgbWluLXdpZHRoOiA3MCU7XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4NjdweCkge1xcbiAgICAuaXRlbS1pbWcge1xcbiAgICAgIG1heC1oZWlnaHQ6IDIuMnJlbTtcXG4gICAgICBtYXgtd2lkdGg6IDIuMnJlbTtcXG4gICAgfVxcblxcbiAgICAuY2hhbXBpb24tZGV0YWlscyB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgICB9XFxuXFxuICAgIC5hYmlsaXRpZXMtY29udGFpbmVyIHtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgd2lkdGg6IGF1dG87XFxuICAgICAgbWF4LXdpZHRoOiAyMHJlbTtcXG4gICAgfVxcblxcbiAgICAubG9yZS1jb250YWluZXIge1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgfVxcblxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICAgIC5pdGVtLXNldHMtY29udGFpbmVyIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICB9XFxuXFxuICAgIC5pdGVtLXNldC1jb250YWluZXIge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgLm1hdGNodXBzIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5tYXRjaHVwLWluZm8ge1xcbiAgICAgIG1hcmdpbjogMC41ZW0gYXV0bztcXG4gICAgfVxcblxcbiAgICAjbWFpbi1jb250YWluZXIge1xcbiAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAjc3RhdHMtY29udGFpbmVyIHtcXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4NDBweCkge1xcbiAgICAuZGFtYWdlLWluZm8ge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICB9XFxuXFxuICAgIC5nYW1lcy1wbGF5ZWQtYWdhaW5zdCB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAuZGFtYWdlLXN0YXRzLWNvbnRhaW5lciB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgfVxcbiAgfVxcblxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU2MHB4KSB7XFxuICAgIC5jaGFtcGlvbi1tYWluLXN0YXRzIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5pdGVtLXNldC1jb250YWluZXIge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIH1cXG5cXG4gICAgLml0ZW0tc2V0cy1jb250YWluZXIge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgLmNoYW1waW9uLWRhbWFnZS1jb250YWluZXIge1xcbiAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5kYW1hZ2Utc3RhdHMtaW5mbyB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAuZGFtYWdlLWluZm8ge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIH1cXG5cXG4gICAgLmRhbWFnZS10eXBlLWNvbnRhaW5lciB7XFxuICAgICAgbWFyZ2luOiAwLjJlbSBhdXRvO1xcbiAgICB9XFxuXFxuICAgIC5jaXJjdWxhci1jaGFydCB7XFxuICAgICAgbWF4LWhlaWdodDogMTk1cHg7XFxuICAgICAgbWF4LXdpZHRoOiA4MCU7XFxuICAgIH1cXG5cXG4gICAgLmRhbWFnZS1zdGF0cy1jb250YWluZXIge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgLmNoYW1waW9uLXJvbGUge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xcbiAgICB9XFxuXFxuICAgIC5jaGFtcGlvbi1yZXNvdXJjZSB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xcbiAgICAgIG1hcmdpbi1yaWdodDogMC41ZW07XFxuICAgIH1cXG5cXG4gICAgLmNoYW1waW9uLXJvbGVzIHtcXG4gICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIH1cXG5cXG4gICAgLnNwZWxsLWltZyB7XFxuICAgICAgaGVpZ2h0OiAyLjhlbTtcXG4gICAgICB3aWR0aDogMi44ZW07XFxuICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgKG1heC13aWR0aDogNDE0cHgpIHtcXG4gICAgLmNoYW1waW9uLXN0YXRzLW92ZXJ2aWV3IHtcXG4gICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgbWluLXdpZHRoOiAxN3JlbTtcXG4gICAgfVxcblxcbiAgICAuY2hhbXBpb24tbmFtZSB7XFxuICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB9XFxuXFxuICAgIC5tb2RhbC1uYXYtbGlua3Mge1xcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgfVxcblxcbiAgICAuY2xvc2UtbW9kYWwtYnRuLXdyYXBwZXIge1xcbiAgICAgIGxlZnQ6IDAuN2VtO1xcbiAgICB9XFxuXFxuICAgIC5jbG9zZS1tb2RhbC1idG4ge1xcbiAgICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMzAwcHgpIHtcXG4gICAgI3NraW5zLWNvbnRhaW5lciB7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIG1heC13aWR0aDogNzAlO1xcbiAgICAgIG1pbi1oZWlnaHQ6IGF1dG87XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxOTUwcHgpIHtcXG4gICAgI3NraW5zLWNvbnRhaW5lciB7XFxuICAgICAgbWF4LXdpZHRoOiA1MCU7XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIGRlZmluZShJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgZGVmaW5lKEdwLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGFzeW5jSXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgZGVmaW5lKEdwLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIGRlZmluZShHcCwgXCJ0b1N0cmluZ1wiLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgaW4gbW9kZXJuIGVuZ2luZXNcbiAgLy8gd2UgY2FuIGV4cGxpY2l0bHkgYWNjZXNzIGdsb2JhbFRoaXMuIEluIG9sZGVyIGVuZ2luZXMgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xuICB9IGVsc2Uge1xuICAgIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG4gIH1cbn1cbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2hhbXBpb25zLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jaGFtcGlvbnMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9kYWxzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tb2RhbHMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vMTYxNzc3OTEyM19vcmlnaW5hbC5qcGdcIjogXCIuL3NyYy9pbWFnZXMvMTYxNzc3OTEyM19vcmlnaW5hbC5qcGdcIixcblx0XCIuL0Fzc2Fzc2luLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9Bc3Nhc3Npbi5wbmdcIixcblx0XCIuL0Jsb29kIFdlbGwucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL0Jsb29kIFdlbGwucG5nXCIsXG5cdFwiLi9Cb3R0b20ucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL0JvdHRvbS5wbmdcIixcblx0XCIuL0NvbnRyb2xsZXIucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL0NvbnRyb2xsZXIucG5nXCIsXG5cdFwiLi9Db3VyYWdlLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9Db3VyYWdlLnBuZ1wiLFxuXHRcIi4vQ3JpbXNvbiBSdXNoLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9Dcmltc29uIFJ1c2gucG5nXCIsXG5cdFwiLi9FbmVyZ3kucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL0VuZXJneS5wbmdcIixcblx0XCIuL0ZpZ2h0ZXIucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL0ZpZ2h0ZXIucG5nXCIsXG5cdFwiLi9GbG93LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9GbG93LnBuZ1wiLFxuXHRcIi4vRnVyeS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvRnVyeS5wbmdcIixcblx0XCIuL0dyaXQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL0dyaXQucG5nXCIsXG5cdFwiLi9IZWF0LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9IZWF0LnBuZ1wiLFxuXHRcIi4vSnVuZ2xlLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9KdW5nbGUucG5nXCIsXG5cdFwiLi9NYWdlLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9NYWdlLnBuZ1wiLFxuXHRcIi4vTWFuYS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvTWFuYS5wbmdcIixcblx0XCIuL01hbmFsZXNzLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9NYW5hbGVzcy5wbmdcIixcblx0XCIuL01hcmtzbWFuLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9NYXJrc21hbi5wbmdcIixcblx0XCIuL01lbGVlLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9NZWxlZS5wbmdcIixcblx0XCIuL01pZGRsZS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvTWlkZGxlLnBuZ1wiLFxuXHRcIi4vUmFnZS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvUmFnZS5wbmdcIixcblx0XCIuL1JhbmdlZC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvUmFuZ2VkLnBuZ1wiLFxuXHRcIi4vU3BlY2lhbGlzdC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvU3BlY2lhbGlzdC5wbmdcIixcblx0XCIuL1N1cHBvcnQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL1N1cHBvcnQucG5nXCIsXG5cdFwiLi9UYW5rLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9UYW5rLnBuZ1wiLFxuXHRcIi4vVG9wLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9Ub3AucG5nXCIsXG5cdFwiLi9VdGlsaXR5LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9VdGlsaXR5LnBuZ1wiLFxuXHRcIi4vZmlyZUJhY2tncm91bmQuanBnXCI6IFwiLi9zcmMvaW1hZ2VzL2ZpcmVCYWNrZ3JvdW5kLmpwZ1wiLFxuXHRcIi4vamlueEJhY2tncm91bmQuanBlZ1wiOiBcIi4vc3JjL2ltYWdlcy9qaW54QmFja2dyb3VuZC5qcGVnXCIsXG5cdFwiLi90cGFTa2lucy5qcGdcIjogXCIuL3NyYy9pbWFnZXMvdHBhU2tpbnMuanBnXCIsXG5cdFwiLi90dXRvcmlhbF9tb2R1bGVfMV9iYWNrZ3JvdW5kLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy90dXRvcmlhbF9tb2R1bGVfMV9iYWNrZ3JvdW5kLnBuZ1wiLFxuXHRcIi4vdHdpdGNoQmFja2dyb3VuZC5qcGdcIjogXCIuL3NyYy9pbWFnZXMvdHdpdGNoQmFja2dyb3VuZC5qcGdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1hZ2VzIHN5bmMgXFxcXC4ocG5nfGpwZT9nfHN2ZykkXCI7IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn0iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGVzaGVldHMvbW9kYWxzLnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlc2hlZXRzL2NoYW1waW9ucy5zY3NzJztcbi8vIGltcG9ydCB7IGNoYW1waW9uRGV0YWlsc01vZGFsIH0gZnJvbSAnLi90ZW1wbGF0ZXMvY2hhbXBpb25EZXRhaWxzTW9kYWwnO1xuLy8gaW1wb3J0IGNoYW1waW9uU3RhdHNNb2RhbCBmcm9tICcuL3RlbXBsYXRlcy9jaGFtcGlvblN0YXRzTW9kYWwnO1xuLy8gaW1wb3J0IEl0ZW1JbmZvIGZyb20gJy4vY2hhbXBpb25EYXRhL2l0ZW1JbmZvJztcbi8vIGltcG9ydCBnZXRDaGFtcGlvbkRldGFpbHMgZnJvbSAnLi9jaGFtcGlvbkRhdGEvY2hhbXBpb25EZXRhaWxzJztcbi8vIGltcG9ydCBjaGFtcGlvblNraW5zTW9kYWwgZnJvbSAnLi90ZW1wbGF0ZXMvY2hhbXBpb25Ta2luc01vZGFsJztcbi8vIGltcG9ydCBnZXRDaGFtcGlvblN0YXRzIGZyb20gJy4vY2hhbXBpb25EYXRhL2NoYW1waW9uU3RhdHMnO1xuaW1wb3J0IGNoYW1waW9uc1BhZ2UgZnJvbSAnLi90ZW1wbGF0ZXMvY2hhbXBpb25zUGFnZSc7XG5pbXBvcnQgQ2hhbXBpb25zUGFnZUNvbnRyb2xsZXIgZnJvbSAnLi9hcHBDb250cm9sL2NoYW1waW9uc1BhZ2VDb250cm9sbGVyJztcblxuY29uc3QgdGVzdCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vMTEuMjIuMS9kYXRhL2VuX1VTL2NoYW1waW9uLmpzb24nKTtcbiAgY29uc3QgYWxsQ2hhbXBpb25zID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAvLyBjb25zdCB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKGFsbENoYW1waW9ucy5kYXRhKTtcbiAgLy8gdmFsdWVzLmZvckVhY2goKHZhbHVlKSA9PiBjb25zb2xlLmxvZyh2YWx1ZS5pbmZvLmRpZmZpY3VsdHkpKTtcbiAgY2hhbXBpb25zUGFnZSgpO1xuICBDaGFtcGlvbnNQYWdlQ29udHJvbGxlci5jaGFtcGlvbnNQYWdlTGlzdGVuZXJzKCk7XG59O1xudGVzdCgpO1xuIl0sIm5hbWVzIjpbIkNoYW1waW9uTW9kYWxDb250cm9sbGVyIiwidG9nZ2xlQWN0aXZlQWJpbGl0eSIsImNsaWNrZWRBYmlsaXR5SWQiLCJhYmlsaXR5SW1hZ2VzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWJpbGl0eUluZm9zIiwiZm9yRWFjaCIsImltZyIsImNsYXNzTGlzdCIsInJlbW92ZSIsImluZm8iLCJjbGlja2VkSW1hZ2UiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NOYW1lIiwiYWN0aXZlQWJpbGl0eSIsImNoYW5nZU1vZGFsVGVtcGxhdGUiLCJjbGlja2VkTW9kYWxOYXZMaW5rIiwidGVtcGxhdGVzIiwidGVtcGxhdGUiLCJpZCIsInN1YnN0cmluZyIsImluZGV4T2YiLCJjaG9zZW5UZW1wbGF0ZSIsInN0eWxlIiwiZGlzcGxheSIsImhpZGRlblRlbXBsYXRlIiwiZGlzcGF5SXRlbURldGFpbHMiLCJob3ZlcmVkSXRlbUltYWdlIiwiaXRlbURldGFpbHMiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJoaWRlSXRlbURldGFpbHMiLCJ1bmhvdmVyZWRJdGVtSW1hZ2UiLCJ0b2dnbGVTa2luSW1hZ2VzIiwiYXJyb3dDbGFzc0xpc3QiLCJza2luSW1hZ2VzQ29udGFpbmVyIiwiY3VycmVudFNob3duSW1hZ2UiLCJza2luTmFtZSIsImZpcnN0SW1hZ2UiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImxhc3RJbWFnZSIsImxhc3RFbGVtZW50Q2hpbGQiLCJpbmNsdWRlcyIsInRleHRDb250ZW50IiwicHJldmlvdXNFbGVtZW50U2libGluZyIsImNsZWFyTWFpbk1vZGFsIiwibWFpbkNvbnRhaW5lciIsImNoYW1waW9uTmFtZSIsImNoYW1waW9uVGl0bGUiLCJjaGFtcGlvblJvbGVzIiwiY2hhbXBpb25Mb3JlIiwiYWJpbGl0eURldGFpbHMiLCJjaGFtcGlvblRpcHMiLCJtYWluTW9kYWxIZWFkZXIiLCJlbGVtZW50IiwiY3VycmVudEVsZW1lbnQiLCJjbGVhclN0YXRzTW9kYWwiLCJzdGF0c0NvbnRhaW5lciIsImNoYW1waW9uU3RhdHNPdmVydmlldyIsImFsbGRhbWFnZVN0YXRzIiwiaXRlbVNldHNDb250YWluZXIiLCJiZXN0TWF0Y2h1cHMiLCJ3b3JzdE1hdGNodXBzIiwic3RhdHNNb2RhbEhlYWRlciIsImRhbWFnZVN0YXQiLCJkYW1hZ2VTdGF0RWxlbWVudCIsInN0YXRzTW9kYWxDb250ZW50IiwiY29udGVudCIsImNvbnRlbnRFbGVtZW50IiwiY2xlYXJTa2luc01vZGFsIiwiY2xvc2VDaGFtcGlvbk1vZGFsIiwibW9kYWwiLCJza2luc0NvbnRhaW5lciIsIm1vZGFsQ2xpY2tFdmVudHMiLCJldmVudCIsInRhcmdldCIsImRhc2hJbmRleCIsImFiaWxpdHlJZCIsInNsaWNlIiwiQXJyYXkiLCJmcm9tIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1vZGFsTW91c2VvdmVyRXZlbnRzIiwibW9kYWxNb3VzZW91dEV2ZW50cyIsInJlbGF0ZWRUYXJnZXQiLCJwYXJlbnROb2RlIiwibW9kYWxDaGFuZ2VMaXN0ZW5lcnMiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2V0Q2hhbXBpb25EZXRhaWxzIiwiZ2V0Q2hhbXBpb25TdGF0cyIsImNoYW1waW9uRGV0YWlsc01vZGFsIiwiY2hhbXBpb25TdGF0c01vZGFsIiwiY2hhbXBpb25Ta2luc01vZGFsIiwiQ2hhbXBpb25zUGFnZUNvbnRyb2xsZXIiLCJkaXNwbGF5RHJvcGRvd25PcHRpb25zIiwiZHJvcGRvd25PcHRpb25zIiwiYWxsRHJvcGRvd25PcHRpb25zIiwib3B0aW9ucyIsIm9wdGlvbnNTdHlsZSIsImRyb3Bkb3duT3B0aW9uc1N0eWxlIiwiaGlkZURyb3Bkb3duT3B0aW9ucyIsImRyb3Bkb3duT3B0aW9uc1RvZ2dsZSIsImRyb3Bkb3duQnRuIiwicGFyZW50RWxlbWVudCIsImRpc3BsYXlDaGFtcGlvbk1vZGFsIiwiY2hhbXBpb25JZCIsImNoYW1waW9uRGV0YWlscyIsImNoYW1waW9uU3RhdHMiLCJjaGFtcGlvbnNQYWdlTGlzdGVuZXJzIiwiY2hhbXBpb25zUGFnZSIsImRhdGFzZXQiLCJmZXRjaENoYW1waW9uRGV0YWlscyIsImZldGNoIiwibW9kZSIsInJlc3BvbnNlIiwianNvbiIsImNoYW1waW9ucyIsImRhdGEiLCJnZXRDaGFtcGlvblBhc3NpdmVzIiwicGFzc2l2ZURhdGEiLCJwYXNzaXZlIiwicGFzc2l2ZU5hbWUiLCJuYW1lIiwicGFzc2l2ZURlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb24iLCJwYXNzaXZlSWQiLCJpbWFnZSIsImZ1bGwiLCJwYXNzaXZlSW1nVXJsIiwiZ2V0Q2hhbXBpb25TcGVsbHMiLCJzcGVsbHNEYXRhIiwic3BlbGxzIiwic3BlbGwiLCJzcGVsbE9iamVjdCIsImNvc3RCdXJuIiwiY29zdFR5cGUiLCJjb29sZG93biIsImNvb2xkb3duQnVybiIsImltZ1VybCIsInB1c2giLCJjaGFtcGlvblBhc3NpdmUiLCJ0aXRsZSIsInJlcGxhY2UiLCJ0b1VwcGVyQ2FzZSIsInBhcnR5cGUiLCJsb3JlIiwicm9sZXMiLCJ0YWdzIiwic2tpbnMiLCJyZXNvdXJjZSIsInRpcHMiLCJhbGx5dGlwcyIsImRpZmZpY3VsdHkiLCJmZXRjaENoYW1waW9uU3RhdHMiLCJjb25zb2xlIiwibG9nIiwid2luUmF0ZSIsInRvRml4ZWQiLCJwaWNrUmF0ZSIsImxhbmUiLCJ0b0xvd2VyQ2FzZSIsImtkYSIsImtkYVJhdGlvIiwiZGFtYWdlUGVyTWF0Y2giLCJpdGVtU2V0cyIsIml0ZW1DaG9pY2VzIiwiYmVzdE1hdGNoVXBzIiwibWF0Y2hVcHMiLCJ3b3JzdE1hdGNoVXBzIiwiZmV0Y2hBbGxDaGFtcGlvbnMiLCJ2ZXJzaW9uc1Jlc3BvbnNlIiwidmVyc2lvbnMiLCJsYXRlc3RWZXJzaW9uIiwiY2hhbXBpb25zUmVzcG9uc2UiLCJhbGxDaGFtcGlvbnMiLCJmZXRjaEFsbEl0ZW1zIiwidmVyc2lvblJlc3BvbnNlIiwiYWxsSXRlbXMiLCJJdGVtSW5mbyIsIml0ZW1JZCIsImdldEl0ZW1EZXRhaWxzIiwiaXRlbUltYWdlSWQiLCJpbWFnZVVybCIsImNvbXBvbmVudEl0ZW1JZHMiLCJ1bmRlZmluZWQiLCJjb21wb25lbnRJdGVtRGV0YWlscyIsIm1hcCIsImNvc3QiLCJnb2xkIiwidG90YWwiLCJnZXRJdGVtSW1hZ2UiLCJjb21wb25lbnRJdGVtcyIsImdldENvbXBvbmVudEl0ZW1zIiwiRWxlbWVudENyZWF0aW9uIiwiRHJvcGRvd25TZWN0aW9uIiwiZHJvcGRvd25OYW1lIiwib3B0aW9uc0FycmF5IiwiZmlsdGVyU29ydFNlY3Rpb24iLCJkcm9wZG93biIsImNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcyIsIm9wdGlvbiIsImRyb3Bkb3duT3B0aW9uIiwiY3JlYXRlRWxlbWVudCIsImluc2VydEJlZm9yZSIsIm5leHRTaWJsaW5nIiwidGFnIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVDaGlsZEVsZW1lbnRXaXRoSWQiLCJjcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3NBbmRJZCIsImNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzIiwic3JjIiwiYWx0IiwiaW1hZ2VFbGVtZW50IiwicmVuZGVySGVhZGVyRGV0YWlscyIsImltYWdlcyIsImNoYW1waW9uRGF0YSIsInJvbGUiLCJjaGFtcGlvblJvbGUiLCJjaGFtcGlvblJvbGVOYW1lIiwiY2hhbXBpb25SZXNvdXJjZSIsImNoYW1waW9uUmVzb3VyY2VOYW1lIiwibG9yZUNvbnRhaW5lciIsImFiaWxpdGllc0NvbnRhaW5lciIsImFiaWxpdHlJbWdzIiwicGFzc2l2ZUltZyIsImltZ0xhYmVsIiwiaW5kZXgiLCJzcGVsbEltZyIsImkiLCJhYmlsaXR5SW5mbyIsImFiaWxpdHlOYW1lIiwiYWJpbGl0eURlc2NyaXB0aW9uIiwiYWJpbGl0eUxhYmVsIiwiaW5uZXJIVE1MIiwiY2hhbXBpb25UaXBzU2VjdGlvbiIsImxlbmd0aCIsImNoYW1waW9uVGlwIiwic2tpbiIsIm51bSIsInNob3duSW1hZ2VDb250YWluZXIiLCJzaG93bkltYWdlVXJsIiwiaW1hZ2VDb250YWluZXIiLCJyZW5kZXJTdGF0T3ZlcnZpZXciLCJyZW5kZXJEYW1hZ2VTdGF0cyIsInJlbmRlckNoYW1waW9uTGFuZSIsInJlbmRlck1hdGNodXBzSW5mbyIsInN0YXRzT3ZlcnZpZXciLCJ0cnVlRGFtYWdlQ2lyY2xlU3Ryb2tlIiwicGh5c2ljYWxEYW1hZ2VDaXJjbGVTdHJva2UiLCJtYWdpY0RhbWFnZUNpcmNsZVN0cm9rZSIsInRydWVEYW1hZ2VQZXJjZW50IiwiTWF0aCIsInJvdW5kIiwidHJ1ZURhbWFnZSIsInBlcmNlbnRhZ2UiLCJwaHlzaWNhbERhbWFnZVBlcmNlbnQiLCJwaHlzaWNhbERhbWFnZSIsIm1hZ2ljRGFtYWdlUGVyY2VudCIsIm1hZ2ljRGFtYWdlIiwic3Ryb2tlRGFzaGFycmF5IiwidG90YWxEYW1hZ2VUZXh0IiwidG90YWxEYW1hZ2UiLCJ2YWx1ZSIsInRydWVEYW1hZ2VWYWx1ZSIsInBoeXNpY2FsRGFtYWdlVmFsdWUiLCJtYWdpY0RhbWFnZVZhbHVlIiwiZ2V0QWxsSXRlbXMiLCJjaGFtcGlvbkl0ZW1CdWlsZHMiLCJpdGVtU2V0IiwiaXRlbVNldENvbnRhaW5lciIsIml0ZW0iLCJpdGVtSW5mbyIsImdldEl0ZW1JbmZvIiwibWFpbkNvbXBvbmVudENvbnRhaW5lciIsIm1haW5JdGVtIiwiaXRlbURldGFpbHNDb250YWluZXIiLCJuYW1lRWxlbWVudCIsImRlc2NyaXB0aW9uRWxlbWVudCIsIml0ZW1Db3N0IiwiY29zdExhYmVsIiwiY29zdEFtb3VudCIsImNvbXBvbmVudEl0ZW1zQ29udGFpbmVyIiwiY29tcG9uZW50SXRlbSIsImNvbXBvbmVudEl0ZW1FbGVtZW50IiwiY29tcG9uZW50SXRlbURldGFpbHNDb250YWluZXIiLCJjb21wb25lbnRJdGVtTmFtZSIsImNvbXBvbmVudEl0ZW1Db3N0IiwiY29tcG9uZW50SXRlbUNvc3RMYWJlbCIsImNvbXBvbmVudEl0ZW1BbW91bnQiLCJiZXN0TWF0Y2h1cHNTZWN0aW9uIiwiYmVzdE1hdGNodXBzRWxlbWVudCIsImJlc3RNYXRjaHVwc0RhdGEiLCJ3b3JzdE1hdGNodXBzU2VjdGlvbiIsIndvcnN0TWF0Y2h1cHNFbGVtZW50Iiwid29yc3RNYXRjaHVwc0RhdGEiLCJjcmVhdGVTZWN0aW9uIiwic29ydE9wdGlvbnMiLCJzb3J0IiwibGFuZU9wdGlvbnMiLCJyb2xlT3B0aW9ucyIsInJlc291cmNlT3B0aW9ucyIsImFsbE9wdGlvbkFycmF5cyIsIm9wdGlvbnNPYmplY3QiLCJPYmplY3QiLCJrZXlzIiwidmFsdWVzIiwicmVuZGVyRHJvcGRvd24iLCJjaGFtcGlvbnNTZWN0aW9uIiwiYWxsQ2hhbXBpb25zQXJyYXkiLCJjaGFtcGlvbiIsImNoYW1waW9uQ29udGFpbmVyIiwiY2hhbXBpb25JbWdVcmwiLCJjaGFtcGlvbk5hbWVXcmFwcGVyIiwiaW1wb3J0QWxsIiwiciIsInJlcXVpcmUiLCJjb250ZXh0IiwibW9kYWxDb250YWluZXIiLCJjb250YWluZXIiLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZFNpemUiLCJyYXRlVGV4dCIsInJhdGVUeXBlIiwiY2hhbXBpb25SYXRlIiwibGFiZWwiLCJyYXRlVmFsdWUiLCJsb3dlckNhc2VUZXh0IiwiY2hhbXBpb25MYW5lSW5mbyIsImxhbmVUZXh0IiwibGFuZUljb24iLCJkYW1hZ2VUeXBlIiwiZGFtYWdlVmFsdWUiLCJkYW1hZ2VQZXJjZW50YWdlIiwiZGFtYWdlQ29udGFpbmVyIiwiZGFtYWdlU3RhdHMiLCJkYW1hZ2VWYWx1ZUVsZW1lbnQiLCJkYW1hZ2VQZXJjZW50YWdlRWxlbWVudCIsIm1hdGNodXBzRWxlbWVudCIsIm1hdGNodXBzRGF0YSIsIm1hdGNodXAiLCJtYXRjaHVwSW5mbyIsImVuZW15Q2hhbXBpb25OYW1lIiwiZW5lbXlDaGFtcGlvbkltZ1VybCIsIm1hdGNodXBTdGF0cyIsImVuZW15Q2hhbXBpb25OYW1lRWxlbWVudCIsIndpbnJhdGVBZ2FpbnN0Iiwid2lucmF0ZUFnYWluc3RMYWJlbCIsImNvbG9yIiwid2lucmF0ZUFnYWluc3RQZXJjZW50YWdlIiwid2luUmF0ZUFnYWluc3QiLCJnYW1lc1BsYXllZEFnYWluc3QiLCJtYXRjaGVzIiwidGVzdCJdLCJzb3VyY2VSb290IjoiIn0=