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
/* harmony export */   "ChampionModalController": () => (/* binding */ ChampionModalController)
/* harmony export */ });
var ChampionModalController = function ChampionModalController() {
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

  var modalChangeListeners = function modalChangeListeners() {
    var modal = document.querySelector('.modal');
    modal.addEventListener('click', function (event) {
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
    });
    var currElement = null;
    modal.addEventListener('mouseover', function (event) {
      if (event.target.className === 'item-img' || event.target.className === 'component-item-img') {
        if (currElement) return;
        currElement = event.target;
        dispayItemDetails(currElement);
      }
    });
    modal.addEventListener('mouseout', function (event) {
      if (event.target.className === 'item-img' || event.target.className === 'component-item-img') {
        if (!currElement) return;
        var relatedTarget = event.relatedTarget;

        while (relatedTarget) {
          if (relatedTarget === currElement) return;
          console.log(relatedTarget);
          relatedTarget = relatedTarget.parentNode;
        } // console.log('out');


        hideItemDetails(currElement);
        currElement = null;
      }
    });
  };

  return {
    modalChangeListeners: modalChangeListeners
  };
}; // eslint-disable-next-line import/prefer-default-export




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
/* harmony export */   "championDetailsModal": () => (/* binding */ championDetailsModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _renderHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderHelpers */ "./src/templates/renderHelpers.js");




var championDetailsModal = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(championData) {
    var championRoles, roles, championResource, resource, championResourceName, championResourceImage, championLore, abilityPictures, passiveImg, imgLabel, index, abilitiesContainer, i, abilityInfo, abilityName, abilityDescription, abilityLabel, cooldown, championTips, _i, championTip;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            (0,_renderHelpers__WEBPACK_IMPORTED_MODULE_2__.renderHeaderDetails)(championData, 'main');
            championRoles = document.querySelector('.champion-roles');
            roles = championData.roles;
            roles.forEach(function (role) {
              var championRole = document.createElement('div');
              var championRoleName = document.createElement('span');
              var championRoleImage = document.createElement('img');
              championRole.className = 'champion-role';
              championRoleName.className = 'champion-role-name';
              championRoleImage.className = 'champion-role-image';
              championRoleName.textContent = role;
              championRoleImage.src = "".concat(_renderHelpers__WEBPACK_IMPORTED_MODULE_2__.images["".concat(role, ".png")]);
              championRoleImage.alt = "".concat(role, ".png");
              championRole.appendChild(championRoleName);
              championRole.appendChild(championRoleImage);
              championRoles.appendChild(championRole);
            }); // The type of resource that a champion uses e.g. mana, energy etc

            championResource = document.createElement('div');
            resource = championData.resource;
            championResource.className = 'champion-resource';
            championResourceName = document.createElement('span');
            championResourceImage = document.createElement('img');
            championResourceName.className = 'champion-resource-name';
            championResourceImage.className = 'champion-resource-image';
            championResourceName.textContent = resource;
            championResourceImage.src = "".concat(_renderHelpers__WEBPACK_IMPORTED_MODULE_2__.images["".concat(resource, ".png")]);
            championResourceImage.alt = "".concat(resource, ".png");
            championResource.appendChild(championResourceName);
            championResource.appendChild(championResourceImage);
            championRoles.appendChild(championResource);
            championLore = document.querySelector('.champion-lore');
            championLore.textContent = championData.lore;
            abilityPictures = document.querySelector('.ability-pictures');
            passiveImg = document.createElement('img');
            passiveImg.className = 'spell-img clicked';
            passiveImg.id = 'passive-img';
            passiveImg.src = championData.passive.passiveImgUrl;
            passiveImg.alt = "".concat(championData.passive.passiveName, ".png");
            abilityPictures.appendChild(passiveImg);
            imgLabel = ['Q', 'W', 'E', 'R'];
            index = 0;
            championData.spells.forEach(function (spell) {
              var spellImg = document.createElement('img');
              spellImg.className = 'spell-img'; // Grabs letter Q, W, E or R which uniquely identifies a champions abilities

              spellImg.id = "".concat(imgLabel[index], "-img");
              spellImg.src = spell.imgUrl;
              spellImg.alt = "".concat(spell.name, ".png");
              abilityPictures.appendChild(spellImg);
              index += 1;
            });
            abilitiesContainer = document.querySelector('.abilities-container'); // loops through champion's passive and 4 abilities

            for (i = 0; i < 5; i += 1) {
              abilityInfo = document.createElement('div');
              abilityName = document.createElement('span');
              abilityDescription = document.createElement('span');
              abilityName.className = 'ability-name';
              abilityDescription.className = 'ability-description';
              abilityInfo.appendChild(abilityName);
              abilityInfo.appendChild(abilityDescription);
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

              abilitiesContainer.appendChild(abilityInfo);
            }

            championTips = document.querySelector('.champion-tips');

            for (_i = 0; _i < 2 && _i < championData.tips.length; _i += 1) {
              championTip = document.createElement('span');
              championTip.className = 'champion-tip';
              championTip.textContent = "".concat(championData.tips[_i]);
              championTips.appendChild(championTip);
            }

          case 33:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function championDetailsModal(_x) {
    return _ref.apply(this, arguments);
  };
}(); // eslint-disable-next-line import/prefer-default-export




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
            itemSetsContainer = document.createElement('div');
            itemSetsContainer.className = 'item-sets-container';
            championItemBuilds.appendChild(itemSetsContainer);
            itemSets.forEach(function (itemSet) {
              var itemSetContainer = document.createElement('div');
              itemSetContainer.className = 'item-set-container';
              itemSetsContainer.appendChild(itemSetContainer);
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

          case 40:
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
  var damageStats = document.createElement('div');
  damageStats.className = 'damage-stats';
  var damageValueElement = document.createElement('span');
  var damagePercentageElement = document.createElement('span');
  damageValueElement.id = "".concat(damageType, "-value");
  damagePercentageElement.id = "".concat(damageType, "-percentage");
  damageValueElement.textContent = "".concat(damageValue);
  damagePercentageElement.textContent = "".concat(damagePercentage, "%");
  damageStats.appendChild(damageValueElement);
  damageStats.appendChild(damagePercentageElement);
  damageContainer.appendChild(damageStats);
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --rasin-black: #1d1e2c;\n  --transparent-rasin-black: #1d1e2c91;\n  --dark-gold: #927543;\n  --light-gold: #c7ab6e;\n}\n\n#front-page {\n  background-color: var(--rasin-black);\n  min-height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: -4;\n}\n#front-page .front-page-header {\n  display: flex;\n  justify-content: space-evenly;\n  color: white;\n  background-color: var(--rasin-black);\n  max-width: 100%;\n  padding: 1em 0;\n  border-style: solid;\n  border-color: var(--dark-gold);\n  border-width: 0 0 2px 0;\n  align-items: center;\n}\n#front-page .search-container {\n  display: none;\n}\n#front-page .search {\n  padding: 0.5em;\n  min-width: 18em;\n  background: #e2e4e9;\n  outline: none;\n  border-style: none;\n  color: var(--rasin-black);\n  font-weight: 600;\n  border-radius: 0.5em 0.5em;\n  min-height: 2.6em;\n  font-size: 1em;\n}\n#front-page .splash-section {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: relative;\n  align-items: center;\n}\n#front-page .backdrop-img {\n  max-width: 100%;\n  min-height: 50vh;\n  background-color: transparent;\n  color: #222;\n  opacity: 0.7;\n}\n#front-page .backdrop {\n  z-index: -2;\n  position: relative;\n  width: 100%;\n}\n#front-page .backdrop::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  z-index: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-image: linear-gradient(90deg, #14181d, rgba(20, 24, 29, 0.985565) 0.97%, rgba(20, 24, 29, 0.945131) 2.07833%, rgba(20, 24, 29, 0.883007) 3.29667%, rgba(20, 24, 29, 0.803499) 4.60167%, rgba(20, 24, 29, 0.710915) 5.96667%, rgba(20, 24, 29, 0.609563) 7.365%, rgba(20, 24, 29, 0.50375) 8.77167%, rgba(20, 24, 29, 0.397784) 10.16%, rgba(20, 24, 29, 0.295973) 11.505%, rgba(20, 24, 29, 0.202624) 12.78%, rgba(20, 24, 29, 0.122044) 13.95833%, rgba(20, 24, 29, 0.0585423) 15.01667%, rgba(20, 24, 29, 0.0164249) 15.92833%, rgba(20, 24, 29, 0) 16.66667%, rgba(20, 24, 29, 0) 83.33333%, rgba(20, 24, 29, 0.0164249) 84.07167%, rgba(20, 24, 29, 0.0585423) 84.98333%, rgba(20, 24, 29, 0.122044) 86.04167%, rgba(20, 24, 29, 0.202624) 87.22%, rgba(20, 24, 29, 0.295973) 88.495%, rgba(20, 24, 29, 0.397784) 89.84%, rgba(20, 24, 29, 0.50375) 91.22833%, rgba(20, 24, 29, 0.609563) 92.635%, rgba(20, 24, 29, 0.710915) 94.03333%, rgba(20, 24, 29, 0.803499) 95.39833%, rgba(20, 24, 29, 0.883007) 96.70333%, rgba(20, 24, 29, 0.945131) 97.92167%, rgba(20, 24, 29, 0.985565) 99.03%, #14181d), linear-gradient(0deg, #14181d, #14181d 21.48148%, rgba(20, 24, 29, 0.985565) 23.63704%, rgba(20, 24, 29, 0.945131) 26.1%, rgba(20, 24, 29, 0.883007) 28.80741%, rgba(20, 24, 29, 0.803499) 31.70741%, rgba(20, 24, 29, 0.710915) 34.74074%, rgba(20, 24, 29, 0.609563) 37.84815%, rgba(20, 24, 29, 0.50375) 40.97407%, rgba(20, 24, 29, 0.397784) 44.05926%, rgba(20, 24, 29, 0.295973) 47.04815%, rgba(20, 24, 29, 0.202624) 49.88148%, rgba(20, 24, 29, 0.122044) 52.5%, rgba(20, 24, 29, 0.0585423) 54.85185%, rgba(20, 24, 29, 0.0164249) 56.87778%, rgba(20, 24, 29, 0) 58.51852%);\n}\n#front-page .slogan-container {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  margin-top: 17em;\n}\n#front-page .slogan-1 {\n  color: white;\n  font-size: 1.7rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  text-align: center;\n  font-family: \"Barlow\", sans-serif;\n}\n#front-page .slogan-2 {\n  color: white;\n  font-size: 2.1rem;\n  font-weight: 900;\n  text-transform: uppercase;\n  text-align: center;\n  font-family: \"Barlow\", sans-serif;\n}\n#front-page .mobile-discover-btn-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  margin-bottom: 2em;\n  width: 100%;\n}\n#front-page .front-page-btn {\n  color: white;\n  background: transparent;\n  padding: 0.5em;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  border-style: none;\n  background-color: var(--dark-gold);\n}\n#front-page .front-page-btn:hover {\n  background-color: var(--light-gold);\n}\n#front-page .mobile-search-container {\n  margin-bottom: 3em;\n}\n#front-page .mobile-search {\n  padding: 0.5em;\n  min-width: 18em;\n  background: #e2e4e9;\n  outline: none;\n  border-style: none;\n  color: var(--rasin-black);\n  font-weight: 600;\n  border-radius: 0.5em 0.5em;\n  min-height: 2.6em;\n  font-size: 1em;\n}\n#front-page .discover-btn-container {\n  position: absolute;\n  margin-bottom: 3em;\n  display: none;\n}\n#front-page .discover-btn {\n  border-style: solid;\n  color: var(--rasin-black);\n  border-color: var(--rasin-black);\n  background-color: var(--dark-gold);\n  font-size: 1.2em;\n  border-radius: 75% 10%/0% 75%;\n}\n#front-page .discover-btn:hover {\n  background-color: var(--light-gold);\n}\n#front-page .navigation-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n#front-page .legal-boilerplate {\n  color: white;\n  font-size: 0.8em;\n  position: absolute;\n  bottom: 0;\n  padding: 0 1.3em 0.6em 1.3em;\n  text-align: center;\n  background-color: var(--dark-gold);\n  width: 100%;\n  font-weight: 600;\n}\n@media (min-width: 950px) {\n  #front-page .mobile-search-container {\n    display: none;\n  }\n  #front-page .search-container {\n    display: flex;\n  }\n}\n@media (min-width: 1200px) {\n  #front-page .mobile-discover-btn-container {\n    display: none;\n  }\n  #front-page .discover-btn-container {\n    display: block;\n  }\n  #front-page .legal-boilerplate {\n    font-size: 1em;\n    padding-top: 0.6em;\n  }\n}", "",{"version":3,"sources":["webpack://./src/stylesheets/frontpage.scss"],"names":[],"mappings":"AAAA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;AACF;;AAGA;EACE,sBAAA;EACA,oCAAA;EACA,oBAAA;EACA,qBAAA;AAAF;;AAGA;EACE,oCAAA;EACA,gBAAA;EACA,kBAAA;EACA,WAAA;EACA,WAAA;AAAF;AAEE;EACE,aAAA;EACA,6BAAA;EACA,YAAA;EACA,oCAAA;EACA,eAAA;EACA,cAAA;EACA,mBAAA;EACA,8BAAA;EACA,uBAAA;EACA,mBAAA;AAAJ;AAGE;EACE,aAAA;AADJ;AAIE;EACE,cAAA;EACA,eAAA;EACA,mBAAA;EACA,aAAA;EACA,kBAAA;EACA,yBAAA;EACA,gBAAA;EACA,0BAAA;EACA,iBAAA;EACA,cAAA;AAFJ;AAME;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,kBAAA;EACA,mBAAA;AAJJ;AAOE;EACE,eAAA;EACA,gBAAA;EACA,6BAAA;EACA,WAAA;EACA,YAAA;AALJ;AAQE;EACE,WAAA;EACA,kBAAA;EACA,WAAA;AANJ;AASE;EACE,WAAA;EACA,cAAA;EACA,kBAAA;EACA,UAAA;EACA,MAAA;EACA,WAAA;EACA,YAAA;EACA,4BAAA;EACA,8mDAAA;AAPJ;AAUE;EACE,aAAA;EACA,sBAAA;EACA,kBAAA;EACA,gBAAA;AARJ;AAWE;EACE,YAAA;EACA,iBAAA;EACA,gBAAA;EACA,yBAAA;EACA,kBAAA;EACA,iCAAA;AATJ;AAYE;EACE,YAAA;EACA,iBAAA;EACA,gBAAA;EACA,yBAAA;EACA,kBAAA;EACA,iCAAA;AAVJ;AAaE;EACE,aAAA;EACA,sBAAA;EACA,6BAAA;EACA,kBAAA;EACA,WAAA;AAXJ;AAcE;EACE,YAAA;EACA,uBAAA;EACA,cAAA;EACA,eAAA;EACA,gBAAA;EACA,eAAA;EACA,kBAAA;EACA,kCAAA;AAZJ;AAcE;EACE,mCAAA;AAZJ;AAeE;EACE,kBAAA;AAbJ;AAgBE;EACE,cAAA;EACA,eAAA;EACA,mBAAA;EACA,aAAA;EACA,kBAAA;EACA,yBAAA;EACA,gBAAA;EACA,0BAAA;EACA,iBAAA;EACA,cAAA;AAdJ;AAiBE;EACE,kBAAA;EACA,kBAAA;EACA,aAAA;AAfJ;AAkBE;EACE,mBAAA;EACA,yBAAA;EACA,gCAAA;EACA,kCAAA;EACA,gBAAA;EACA,6BAAA;AAhBJ;AAmBE;EACE,mCAAA;AAjBJ;AAoBE;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;AAlBJ;AAqBE;EACE,YAAA;EACA,gBAAA;EACA,kBAAA;EACA,SAAA;EACA,4BAAA;EACA,kBAAA;EACA,kCAAA;EACA,WAAA;EACA,gBAAA;AAnBJ;AAsBE;EACE;IACE,aAAA;EApBJ;EAuBE;IACE,aAAA;EArBJ;AACF;AAwBE;EACE;IACE,aAAA;EAtBJ;EAyBE;IACE,cAAA;EAvBJ;EA0BE;IACE,cAAA;IACA,kBAAA;EAxBJ;AACF","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n\n}\n\n:root {\n  --rasin-black: #1d1e2c;\n  --transparent-rasin-black: #1d1e2c91;\n  --dark-gold: #927543;\n  --light-gold: #c7ab6e;\n}\n\n#front-page {\n  background-color: var(--rasin-black);\n  min-height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: -4;\n\n  .front-page-header {\n    display: flex;\n    justify-content: space-evenly;\n    color: white;\n    background-color: var(--rasin-black);\n    max-width: 100%;\n    padding: 1em 0;\n    border-style: solid;\n    border-color: var(--dark-gold);\n    border-width: 0 0 2px 0;\n    align-items: center;\n  }\n\n  .search-container {\n    display: none;\n  }\n\n  .search {\n    padding: 0.5em;\n    min-width: 18em;\n    background: #e2e4e9;\n    outline: none;\n    border-style: none;\n    color: var(--rasin-black);\n    font-weight: 600;\n    border-radius: 0.5em 0.5em;\n    min-height: 2.6em;\n    font-size: 1em;\n\n  }\n\n  .splash-section {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    position: relative;\n    align-items: center;\n  }\n\n  .backdrop-img {\n    max-width: 100%;\n    min-height: 50vh;\n    background-color: transparent;\n    color: #222;\n    opacity: 0.7;\n  }\n\n  .backdrop {\n    z-index: -2;\n    position: relative;\n    width: 100%;\n  }\n  \n  .backdrop::after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    z-index: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-repeat: no-repeat;\n    background-image: linear-gradient(90deg,#14181d,rgba(20,24,29,.985565) .97%,rgba(20,24,29,.945131) 2.07833%,rgba(20,24,29,.883007) 3.29667%,rgba(20,24,29,.803499) 4.60167%,rgba(20,24,29,.710915) 5.96667%,rgba(20,24,29,.609563) 7.365%,rgba(20,24,29,.50375) 8.77167%,rgba(20,24,29,.397784) 10.16%,rgba(20,24,29,.295973) 11.505%,rgba(20,24,29,.202624) 12.78%,rgba(20,24,29,.122044) 13.95833%,rgba(20,24,29,.0585423) 15.01667%,rgba(20,24,29,.0164249) 15.92833%,rgba(20,24,29,0) 16.66667%,rgba(20,24,29,0) 83.33333%,rgba(20,24,29,.0164249) 84.07167%,rgba(20,24,29,.0585423) 84.98333%,rgba(20,24,29,.122044) 86.04167%,rgba(20,24,29,.202624) 87.22%,rgba(20,24,29,.295973) 88.495%,rgba(20,24,29,.397784) 89.84%,rgba(20,24,29,.50375) 91.22833%,rgba(20,24,29,.609563) 92.635%,rgba(20,24,29,.710915) 94.03333%,rgba(20,24,29,.803499) 95.39833%,rgba(20,24,29,.883007) 96.70333%,rgba(20,24,29,.945131) 97.92167%,rgba(20,24,29,.985565) 99.03%,#14181d),linear-gradient(0deg,#14181d,#14181d 21.48148%,rgba(20,24,29,.985565) 23.63704%,rgba(20,24,29,.945131) 26.1%,rgba(20,24,29,.883007) 28.80741%,rgba(20,24,29,.803499) 31.70741%,rgba(20,24,29,.710915) 34.74074%,rgba(20,24,29,.609563) 37.84815%,rgba(20,24,29,.50375) 40.97407%,rgba(20,24,29,.397784) 44.05926%,rgba(20,24,29,.295973) 47.04815%,rgba(20,24,29,.202624) 49.88148%,rgba(20,24,29,.122044) 52.5%,rgba(20,24,29,.0585423) 54.85185%,rgba(20,24,29,.0164249) 56.87778%,rgba(20,24,29,0) 58.51852%);\n  }\n\n  .slogan-container {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    margin-top: 17em;\n  }\n\n  .slogan-1 {\n    color: white;\n    font-size: 1.7rem;\n    font-weight: 600;\n    text-transform: uppercase;\n    text-align: center;\n    font-family: 'Barlow', sans-serif;  \n  }\n\n  .slogan-2 {\n    color: white;\n    font-size: 2.1rem;\n    font-weight: 900;\n    text-transform: uppercase;\n    text-align: center;\n    font-family: 'Barlow', sans-serif;  \n  }\n\n  .mobile-discover-btn-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    margin-bottom: 2em;\n    width: 100%;\n  }\n\n  .front-page-btn {\n    color: white;\n    background: transparent;\n    padding: 0.5em;\n    font-size: 1rem;\n    font-weight: 600;\n    cursor: pointer;\n    border-style: none;\n    background-color: var(--dark-gold);\n  }\n  .front-page-btn:hover {\n    background-color: var(--light-gold);\n  }\n\n  .mobile-search-container {\n    margin-bottom: 3em;\n  }\n\n  .mobile-search {\n    padding: 0.5em;\n    min-width: 18em;\n    background: #e2e4e9;\n    outline: none;\n    border-style: none;\n    color: var(--rasin-black);\n    font-weight: 600;\n    border-radius: 0.5em 0.5em;\n    min-height: 2.6em;\n    font-size: 1em;\n  }\n\n  .discover-btn-container {\n    position: absolute;\n    margin-bottom: 3em;\n    display: none;\n  }\n\n  .discover-btn {\n    border-style: solid;\n    color: var(--rasin-black);\n    border-color: var(--rasin-black);\n    background-color: var(--dark-gold);\n    font-size: 1.2em;\n    border-radius: 75% 10% / 0% 75%;\n  }\n\n  .discover-btn:hover {\n    background-color: var(--light-gold)\n  }\n\n  .navigation-section {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .legal-boilerplate {\n    color: white;\n    font-size: 0.8em;\n    position: absolute;\n    bottom: 0;\n    padding: 0 1.3em 0.6em 1.3em;\n    text-align: center;\n    background-color: var(--dark-gold);\n    width: 100%;\n    font-weight: 600;\n  }\n\n  @media (min-width: 950px) {\n    .mobile-search-container {\n      display: none;\n    }\n\n    .search-container {\n      display: flex;\n    }\n  }\n\n  @media (min-width: 1200px) {\n    .mobile-discover-btn-container {\n      display: none;\n    }\n\n    .discover-btn-container {\n      display: block;\n    }\n\n    .legal-boilerplate {\n      font-size: 1em;\n      padding-top: 0.6em;\n    }\n  }\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n}\n\n:root {\n  --dark-gold: #927543;\n  --light-gold: #c7ab6e;\n}\n\nbody {\n  font-family: \"Inter\", Arial, Helvetica, sans-serif;\n}\n\n.modal {\n  display: none;\n  position: absolute;\n  z-index: 1;\n  padding: 2rem 0;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.modal #main-container {\n  position: relative;\n  margin: auto;\n  padding: 0;\n  max-width: 75%;\n  min-height: 49rem;\n  margin-top: 0;\n  background: rgba(0, 0, 0, 0.1);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -webkit-animation-name: animatetop;\n  -webkit-animation-duration: 0.4s;\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  border: 1px solid #888;\n  display: block;\n}\n.modal .modal-header {\n  background-color: #181a20bf;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 16px;\n  border-color: var(--dark-gold);\n  border-style: solid;\n  padding: 0;\n  border-radius: 0;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n.modal .modal-nav-links {\n  display: flex;\n  justify-content: space-evenly;\n  width: 100%;\n  font-size: 22px;\n  background-color: black;\n}\n.modal .modal-nav-link {\n  cursor: pointer;\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n}\n.modal .modal-nav-link:hover {\n  color: var(--dark-gold);\n}\n.modal .champion-heading {\n  margin: auto;\n  text-align: center;\n  font-size: 20px;\n  color: white;\n}\n.modal .champion-name {\n  margin: auto;\n}\n.modal .champion-title {\n  color: var(--light-gold);\n  font-size: 20px;\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n}\n.modal .champion-roles {\n  display: flex;\n  justify-content: center;\n}\n.modal .champion-role {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-left: 2rem;\n  margin-right: 2rem;\n}\n.modal .champion-resource {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-left: 2rem;\n  margin-right: 2rem;\n}\n.modal .champion-role-image {\n  height: 3.5rem;\n  width: 3.5rem;\n}\n.modal .champion-resource-image {\n  height: 3.5rem;\n  width: 3.5rem;\n}\n.modal .champion-role-name {\n  font-weight: 600;\n  font-size: 20px;\n}\n.modal .champion-resource-name {\n  font-weight: 600;\n  font-size: 20px;\n}\n.modal .champion-main-info {\n  padding: 1.8rem;\n  max-width: 34rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: last baseline;\n}\n@-webkit-keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n.modal .lore-container {\n  background-color: #181a20bf;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 16px;\n  border-color: var(--dark-gold);\n  border-style: solid;\n}\n.modal .subheading {\n  margin: auto;\n  margin-bottom: 0.4em;\n  color: var(--light-gold);\n  text-align: center;\n}\n.modal .abilities-container {\n  background-color: #181a20bf;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 16px;\n  border-color: var(--dark-gold);\n  border-style: solid;\n  width: 20em;\n}\n.modal .abilities-heading {\n  text-align: center;\n}\n.modal .ability-pictures {\n  margin-bottom: 1em;\n  display: flex;\n  justify-content: space-evenly;\n}\n.modal .ability-description {\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n}\n.modal .champion-details {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.modal .champion-extra-info {\n  display: flex;\n  flex-direction: column;\n}\n.modal .ability-info {\n  display: none;\n}\n.modal .ability-info.active {\n  display: flex;\n  flex-direction: column;\n}\n.modal .spell-img {\n  cursor: pointer;\n  margin: 0 0.5rem;\n  height: 3.3rem;\n  width: 3.3rem;\n}\n.modal .spell-img.clicked {\n  border-style: solid;\n  border-color: var(--dark-gold);\n  border-width: 4px;\n}\n.modal .champion-tips {\n  background-color: #181a20bf;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 16px;\n  border-color: var(--dark-gold);\n  border-style: solid;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: auto;\n  max-width: 34rem;\n  text-align: center;\n}\n.modal .champion-tip {\n  margin-bottom: 1em;\n}\n.modal #stats-container {\n  position: relative;\n  margin: auto;\n  padding: 0;\n  max-width: 75%;\n  min-height: 49rem;\n  margin-top: 0;\n  background: rgba(0, 0, 0, 0.1);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -webkit-animation-name: animatetop;\n  -webkit-animation-duration: 0.4s;\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  border: 1px solid #888;\n  display: none;\n}\n.modal .champion-stats-overview {\n  display: flex;\n  justify-content: space-evenly;\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n  max-width: 25rem;\n  min-width: 20rem;\n  font-size: 24px;\n}\n.modal .win-rate {\n  display: flex;\n  flex-direction: column;\n}\n.modal .pick-rate {\n  display: flex;\n  flex-direction: column;\n}\n.modal .lane-info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.modal .pick-rate-value {\n  margin-top: 0.4em;\n  color: var(--light-gold);\n}\n.modal .win-rate-value {\n  margin-top: 0.4em;\n  color: var(--light-gold);\n}\n.modal .label {\n  font-size: 20px;\n}\n.modal .champion-damage-container {\n  background-color: #181a20bf;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 16px;\n  border-color: var(--dark-gold);\n  border-style: solid;\n  max-height: 17.5rem;\n}\n.modal .damage-heading {\n  text-align: center;\n}\n.modal .circular-chart {\n  display: block;\n  margin: auto;\n  max-width: 80%;\n  max-height: 250px;\n}\n.modal .circle {\n  fill: none;\n  stroke-width: 2.2;\n  stroke-linecap: round;\n  animation: progress 1s ease-out forwards;\n}\n.modal #magic-damage-stroke {\n  stroke: #35a7ff;\n}\n.modal #physical-damage-stroke {\n  stroke: #ff5964;\n}\n.modal #true-damage-stroke {\n  stroke: #ffe74c;\n}\n@keyframes progress {\n  0% {\n    stroke-dasharray: 0 100;\n  }\n}\n.modal .total-damage-text {\n  font-size: 4px;\n  text-anchor: middle;\n  fill: white;\n}\n.modal .total-damage-label {\n  font-size: 3px;\n  text-anchor: middle;\n  fill: var(--dark-gold);\n}\n.modal .champion-main-stats {\n  display: flex;\n  justify-content: space-evenly;\n}\n.modal .champion-item-builds {\n  background-color: #181a20bf;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 16px;\n  border-color: var(--dark-gold);\n  border-style: solid;\n  max-height: 17.5rem;\n}\n.modal .damage-stats-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n}\n.modal .damage-info {\n  display: flex;\n  max-height: 92%;\n  height: 92%;\n}\n.modal .damage-type-container {\n  display: flex;\n  flex-direction: column;\n  font-size: 1em;\n}\n.modal .damage-stats {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n.modal #physical-damage-label {\n  color: #ff5964;\n}\n.modal #magic-damage-label {\n  color: #35a7ff;\n}\n.modal #true-damage-label {\n  color: #ffe74c;\n}\n.modal .item-details-container {\n  background-color: #181a20bf;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 16px;\n  border-color: var(--dark-gold);\n  border-style: solid;\n  font-size: 14px;\n  display: none;\n  position: absolute;\n  background-color: #181a20;\n  margin-right: 2rem;\n  flex-direction: column;\n  justify-content: space-evenly;\n  width: 40%;\n  right: 1em;\n  margin-bottom: 3.5em;\n}\n.modal .item-name {\n  font-weight: 600;\n  font-size: 16px;\n}\n.modal .main-item {\n  display: flex;\n  flex-direction: column-reverse;\n}\n.modal .cost-label {\n  color: var(--light-gold);\n  font-size: 16px;\n}\n.modal .component-items-container {\n  display: flex;\n}\n.modal .component-item-name {\n  font-size: 16px;\n}\n.modal .cost-amount {\n  font-size: 16px;\n}\n.modal .component-item-cost-label {\n  color: var(--light-gold);\n  font-size: 16px;\n}\n.modal .component-item-amount {\n  font-size: 16px;\n}\n.modal .component-item-details-container {\n  background-color: #181a20bf;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 16px;\n  border-color: var(--dark-gold);\n  border-style: solid;\n  font-size: 14px;\n  display: none;\n  position: absolute;\n  background-color: #181a20;\n  flex-direction: column;\n}\n.modal .item-sets-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  max-height: 90%;\n}\n.modal .item-set-container {\n  display: flex;\n  justify-content: center;\n  max-width: 100%;\n  border-style: none;\n  border-width: 2px;\n  padding: 0.4em;\n}\n.modal .main-component-container {\n  background-color: #181a20bf;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 16px;\n  border-color: var(--dark-gold);\n  border-style: solid;\n  background-color: #06040083;\n  border-radius: 1em;\n  color: white;\n  margin: 0em;\n  font-weight: 600;\n  font-size: 16px;\n  border-style: solid;\n  padding: 0;\n  border-radius: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-width: 1px;\n}\n.modal .item-img {\n  max-width: 2.7em;\n  max-height: 2.7em;\n  border-radius: 1em;\n  padding-bottom: 0;\n}\n.modal .component-item-img {\n  max-width: 1.8em;\n  max-height: 1.8em;\n}\n.modal .champion-matchups {\n  background-color: #181a20bf;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 16px;\n  border-color: var(--dark-gold);\n  border-style: solid;\n  max-height: 25.2rem;\n  margin-bottom: 0;\n  border-radius: 0 0 0 0;\n  display: flex;\n  justify-content: space-evenly;\n}\n.modal .matchups {\n  display: flex;\n  justify-content: space-around;\n  max-width: 24rem;\n}\n.modal .matchup-info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  background-color: #17161a;\n  padding: 0.5em;\n  margin: auto 0.5em;\n  border-radius: 1em;\n}\n.modal .matchup-info:hover {\n  background-color: #17161ac9;\n}\n.modal .matchup-stats {\n  display: flex;\n  flex-direction: column;\n  font-size: 14px;\n  font-family: \"Helvetica Neue\", Helvetica, \"Apple SD Gothic Neo\", AppleGothic, Dotum, Arial, Tahoma;\n}\n.modal .enemy-champion-img {\n  border-radius: 50%;\n  max-height: 3em;\n  max-width: 3em;\n  margin-bottom: 0.5em;\n}\n.modal .winrate-against-percentage.blue {\n  color: #35a7ff;\n}\n.modal .winrate-against-percentage.red {\n  color: #ff5964;\n}\n.modal #skins-container {\n  position: relative;\n  margin: auto;\n  padding: 0;\n  max-width: 75%;\n  min-height: 49rem;\n  margin-top: 0;\n  background: rgba(0, 0, 0, 0.1);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -webkit-animation-name: animatetop;\n  -webkit-animation-duration: 0.4s;\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  border: 1px solid #888;\n  display: none;\n  position: absolute;\n  min-height: 0;\n  margin: 0 auto;\n  max-width: 99%;\n  width: 99%;\n}\n.modal #skins-container .modal-header {\n  margin-bottom: 0;\n}\n.modal .skin-image-container {\n  box-sizing: border-box;\n  max-width: 100%;\n  display: none;\n}\n.modal .skin-image-container.shown {\n  display: block;\n}\n.modal .skin-image {\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n.modal .skin-name {\n  font-size: 1em;\n}\n.modal #skins-container .champion-heading {\n  display: flex;\n  justify-content: space-evenly;\n  width: 40%;\n  align-items: center;\n}\n.modal .img-scroll-arrow {\n  cursor: pointer;\n  font-size: 1.5em;\n}\n.modal .img-scroll-arrow:hover {\n  color: var(--dark-gold);\n}\n@media (max-width: 1120px) {\n  .modal .component-item-img {\n    display: none;\n  }\n  .modal .item-sets-container {\n    min-height: 80%;\n  }\n  .modal .item-details-container {\n    min-width: 70%;\n  }\n}\n@media (max-width: 867px) {\n  .modal .item-img {\n    max-height: 2.2rem;\n    max-width: 2.2rem;\n  }\n  .modal .champion-details {\n    flex-direction: column-reverse;\n  }\n  .modal .abilities-container {\n    text-align: center;\n    width: auto;\n    max-width: 20rem;\n  }\n  .modal .lore-container {\n    text-align: center;\n  }\n}\n@media (max-width: 700px) {\n  .modal .item-sets-container {\n    flex-direction: row;\n  }\n  .modal .item-set-container {\n    flex-direction: column;\n  }\n  .modal .matchups {\n    flex-direction: column;\n  }\n  .modal .matchup-info {\n    margin: 0.5em auto;\n  }\n  .modal #main-container {\n    max-width: 100%;\n  }\n  .modal #stats-container {\n    max-width: 100%;\n  }\n}\n@media (max-width: 840px) {\n  .modal .damage-info {\n    flex-direction: column-reverse;\n    justify-content: space-between;\n    font-size: 15px;\n  }\n  .modal .games-played-against {\n    display: none;\n  }\n  .modal .damage-stats-container {\n    flex-direction: row;\n  }\n}\n@media (max-width: 560px) {\n  .modal .champion-main-stats {\n    flex-direction: column;\n  }\n  .modal .item-set-container {\n    flex-direction: row;\n  }\n  .modal .item-sets-container {\n    flex-direction: column;\n  }\n  .modal .champion-damage-container {\n    max-width: 100%;\n    align-items: center;\n  }\n  .modal .damage-stats-info {\n    flex-direction: column;\n  }\n  .modal .damage-info {\n    flex-direction: row;\n    align-items: flex-start;\n  }\n  .modal .damage-type-container {\n    margin: 0.2em auto;\n  }\n  .modal .circular-chart {\n    max-height: 195px;\n    max-width: 80%;\n  }\n  .modal .damage-stats-container {\n    flex-direction: column;\n  }\n  .modal .champion-role {\n    margin-left: 0.5em;\n    margin-right: 0.5em;\n  }\n  .modal .champion-resource {\n    margin-left: 0.5em;\n    margin-right: 0.5em;\n  }\n  .modal .champion-roles {\n    font-size: 20px;\n  }\n  .modal .spell-img {\n    height: 2.8em;\n    width: 2.8em;\n    margin: auto;\n  }\n}\n@media (max-width: 414px) {\n  .modal .champion-stats-overview {\n    font-size: 20px;\n    min-width: 17rem;\n  }\n  .modal .champion-name {\n    font-size: 2rem;\n  }\n}\n@media (min-width: 1300px) {\n  .modal #skins-container {\n    position: relative;\n    max-width: 70%;\n    min-height: auto;\n  }\n}\n@media (min-width: 1950px) {\n  .modal #skins-container {\n    max-width: 50%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/stylesheets/modals.scss"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n}\n\n:root {\n  --dark-gold: #927543;\n  --light-gold: #c7ab6e;\n}\n\n@mixin containerBackground {\n  background-color: #181a20bf;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 16px;\n  border-color: var(--dark-gold);\n  border-style: solid;\n}\n\n@mixin subHeadingStyle {\n  margin: auto;\n  margin-bottom: 0.4em;\n  color: var(--light-gold);\n  text-align: center;\n}\n\n@mixin iconSize {\n  height: 3.5rem;\n  width: 3.5rem;\n}\n\n@mixin iconText {\n  font-weight: 600;\n  font-size: 20px;\n}\n\n@mixin iconContainer {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-left: 2rem;\n  margin-right: 2rem;\n}\n\n@mixin smallMargin {\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n}\n\n@mixin modalContentContainer {\n  position: relative;\n  margin: auto;\n  padding: 0;\n  max-width: 75%;\n  min-height: 49rem;\n  margin-top: 0;\n  background: rgba(0, 0, 0, 0.1);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -webkit-animation-name: animatetop;\n  -webkit-animation-duration: 0.4s;\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  border: 1px solid #888;\n}\n\nbody {\n  font-family: \"Inter\", Arial, Helvetica, sans-serif;\n}\n\n.modal {\n  display: none;\n  position: absolute;\n  z-index: 1;\n  padding: 2rem 0;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgb(0, 0, 0, 0.1);\n\n  #main-container {\n    @include modalContentContainer();\n    display: block;\n  }\n\n  .modal-header {\n    @include containerBackground();\n    padding: 0;\n    border-radius: 0;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n  }\n\n  .modal-nav-links {\n    display: flex;\n    justify-content: space-evenly;\n    width: 100%;\n    font-size: 22px;\n    background-color: black;\n  }\n\n  .modal-nav-link {\n    cursor: pointer;\n    @include smallMargin();\n  }\n\n  .modal-nav-link:hover {\n    color: var(--dark-gold);\n  }\n\n  .champion-heading {\n    margin: auto;\n    text-align: center;\n    font-size: 20px;\n    color: white;\n  }\n\n  .champion-name {\n    margin: auto;\n  }\n\n  .champion-title {\n    color: var(--light-gold);\n    font-size: 20px;\n    @include smallMargin();\n  }\n\n  .champion-roles {\n    display: flex;\n    justify-content: center;\n  }\n\n  .champion-role {\n    @include iconContainer();\n  }\n\n  .champion-resource {\n    @include iconContainer();\n  }\n\n  .champion-role-image {\n    @include iconSize();\n  }\n\n  .champion-resource-image {\n    @include iconSize();\n  }\n\n  .champion-role-name {\n    @include iconText();\n  }\n\n  .champion-resource-name {\n    @include iconText();\n  }\n\n  .champion-main-info {\n    padding: 1.8rem;\n    max-width: 34rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: last baseline;\n  }\n\n  @-webkit-keyframes animatetop {\n    from {\n      top: -300px;\n      opacity: 0;\n    }\n    to {\n      top: 0;\n      opacity: 1;\n    }\n  }\n\n  @keyframes animatetop {\n    from {\n      top: -300px;\n      opacity: 0;\n    }\n    to {\n      top: 0;\n      opacity: 1;\n    }\n  }\n\n  .lore-container {\n    @include containerBackground();\n  }\n\n  .subheading {\n    @include subHeadingStyle();\n  }\n\n  .abilities-container {\n    @include containerBackground();\n    width: 20em;\n  }\n\n  .abilities-heading {\n    text-align: center;\n  }\n\n  .ability-pictures {\n    margin-bottom: 1em;\n    display: flex;\n    justify-content: space-evenly;\n  }\n\n  .ability-description {\n    @include smallMargin();\n  }\n\n  .champion-details {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .champion-extra-info {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .ability-info {\n    display: none;\n  }\n\n  .ability-info.active {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .spell-img {\n    cursor: pointer;\n    margin: 0 0.5rem;\n    height: 3.3rem;\n    width: 3.3rem;\n  }\n\n  .spell-img.clicked {\n    border-style: solid;\n    border-color: var(--dark-gold);\n    border-width: 4px;\n  }\n\n  .champion-tips {\n    @include containerBackground();\n    display: flex;\n    flex-direction: column;\n    margin-bottom: auto;\n    max-width: 34rem;\n    text-align: center;\n  }\n\n  .champion-tip {\n    margin-bottom: 1em;\n  }\n\n  #stats-container {\n    @include modalContentContainer();\n    display: none;\n  }\n\n  .champion-stats-overview {\n    display: flex;\n    justify-content: space-evenly;\n    @include smallMargin();\n    max-width: 25rem;\n    min-width: 20rem;\n    font-size: 24px;\n  }\n\n  .win-rate {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .pick-rate {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .lane-info {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .pick-rate-value {\n    margin-top: 0.4em;\n    color: var(--light-gold);\n  }\n\n  .win-rate-value {\n    margin-top: 0.4em;\n    color: var(--light-gold);\n  }\n\n  .label {\n    font-size: 20px;\n  }\n\n  .champion-damage-container {\n    @include containerBackground();\n    max-height: 17.5rem;\n  }\n\n  .damage-heading {\n    text-align: center;\n  }\n\n  .circular-chart {\n    display: block;\n    margin: auto;\n    max-width: 80%;\n    max-height: 250px;\n  }\n\n  .circle {\n    fill: none;\n    stroke-width: 2.2;\n    stroke-linecap: round;\n    animation: progress 1s ease-out forwards;\n  }\n\n  #magic-damage-stroke {\n    stroke: #35a7ff;\n  }\n\n  #physical-damage-stroke {\n    stroke: #ff5964;\n  }\n\n  #true-damage-stroke {\n    stroke: #ffe74c;\n  }\n\n  @keyframes progress {\n    0% {\n      stroke-dasharray: 0 100;\n    }\n  }\n\n  .total-damage-text {\n    font-size: 4px;\n    text-anchor: middle;\n    fill: white;\n  }\n\n  .total-damage-label {\n    font-size: 3px;\n    text-anchor: middle;\n    fill: var(--dark-gold);\n  }\n\n  .champion-main-stats {\n    display: flex;\n    justify-content: space-evenly;\n  }\n\n  .champion-item-builds {\n    @include containerBackground();\n    max-height: 17.5rem;\n  }\n\n  .damage-stats-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n  }\n\n  .damage-info {\n    display: flex;\n    max-height: 92%;\n    height: 92%;\n  }\n\n  .damage-type-container {\n    display: flex;\n    flex-direction: column;\n    font-size: 1em;\n  }\n\n  .damage-stats {\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n  }\n\n  #physical-damage-label {\n    color: #ff5964;\n  }\n\n  #magic-damage-label {\n    color: #35a7ff;\n  }\n\n  #true-damage-label {\n    color: #ffe74c;\n  }\n\n  .item-details-container {\n    @include containerBackground();\n    font-size: 14px;\n    display: none;\n    position: absolute;\n    background-color: #181a20;\n    margin-right: 2rem;\n    flex-direction: column;\n    justify-content: space-evenly;\n    width: 40%;\n    right: 1em;\n    margin-bottom: 3.5em;\n  }\n\n  .item-name {\n    font-weight: 600;\n    font-size: 16px;\n  }\n\n  .main-item {\n    display: flex;\n    flex-direction: column-reverse;\n  }\n\n  .cost-label {\n    color: var(--light-gold);\n    font-size: 16px;\n  }\n\n  .component-items-container {\n    display: flex;\n  }\n\n  .component-item-name {\n    font-size: 16px;\n  }\n\n  .cost-amount {\n    font-size: 16px;\n  }\n\n  .component-item-cost-label {\n    color: var(--light-gold);\n    font-size: 16px;\n  }\n\n  .component-item-amount {\n    font-size: 16px;\n  }\n\n  .component-item-details-container {\n    @include containerBackground();\n    font-size: 14px;\n    display: none;\n    position: absolute;\n    background-color: #181a20;\n    flex-direction: column;\n  }\n\n  .item-sets-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    max-height: 90%;\n  }\n\n  .item-set-container {\n    display: flex;\n    justify-content: center;\n    max-width: 100%;\n    border-style: none;\n    border-width: 2px;\n    padding: 0.4em;\n  }\n\n  .main-component-container {\n    @include containerBackground();\n    background-color: #06040083;\n    border-radius: 1em;\n    color: white;\n    margin: 0em;\n    font-weight: 600;\n    font-size: 16px;\n    border-style: solid;\n    padding: 0;\n    border-radius: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border-width: 1px;\n  }\n\n  .item-img {\n    max-width: 2.7em;\n    max-height: 2.7em;\n    border-radius: 1em;\n    //padding: 1em;\n    padding-bottom: 0;\n  }\n\n  .component-item-img {\n    max-width: 1.8em;\n    max-height: 1.8em;\n  }\n\n  .champion-matchups {\n    @include containerBackground();\n    max-height: 25.2rem;\n    margin-bottom: 0;\n    border-radius: 0 0 0 0;\n    display: flex;\n    justify-content: space-evenly;\n  }\n\n  .matchups {\n    display: flex;\n    justify-content: space-around;\n    max-width: 24rem;\n  }\n\n  .matchup-info {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    background-color: #17161a;\n    padding: 0.5em;\n    margin: auto 0.5em;\n    border-radius: 1em;\n  }\n\n  .matchup-info:hover {\n    background-color: #17161ac9;\n  }\n\n  .matchup-stats {\n    display: flex;\n    flex-direction: column;\n    font-size: 14px;\n    font-family: \"Helvetica Neue\", Helvetica, \"Apple SD Gothic Neo\", AppleGothic,\n      Dotum, Arial, Tahoma;\n  }\n\n  .enemy-champion-img {\n    border-radius: 50%;\n    max-height: 3em;\n    max-width: 3em;\n    margin-bottom: 0.5em;\n  }\n\n  .winrate-against-percentage.blue {\n    color: #35a7ff;\n  }\n\n  .winrate-against-percentage.red {\n    color: #ff5964;\n  }\n\n  #skins-container {\n    @include modalContentContainer();\n    display:none;\n    position: absolute;\n    min-height: 0;\n    margin: 0 auto;\n    max-width: 99%;\n    width: 99%;\n  }\n\n  #skins-container .modal-header {\n    margin-bottom: 0;\n  }\n\n  .skin-image-container {\n    box-sizing: border-box;\n    max-width: 100%;\n    display: none;\n  }\n\n  .skin-image-container.shown {\n    display: block;\n  }\n\n  .skin-image {\n    top: 0;\n    left: 0;\n    width: 100%;\n  }\n\n  .skin-name {\n    font-size: 1em;\n  }\n\n  #skins-container .champion-heading {\n    display: flex;\n    justify-content: space-evenly;\n    width: 40%;\n    align-items: center;\n  }\n\n  .img-scroll-arrow {\n    cursor: pointer;\n    font-size: 1.5em;\n  }\n\n  .img-scroll-arrow:hover {\n    color: var(--dark-gold);\n  }\n\n  @media (max-width: 1120px) {\n    .component-item-img {\n      display: none;\n    }\n\n    .item-sets-container {\n      min-height: 80%;\n    }\n\n    .item-details-container {\n      min-width: 70%;\n    }\n  }\n\n  @media (max-width: 867px) {\n    .item-img {\n      max-height: 2.2rem;\n      max-width: 2.2rem;\n    }\n\n    .champion-details {\n      flex-direction: column-reverse;\n    }\n\n    .abilities-container {\n      text-align: center;\n      width: auto;\n      max-width: 20rem;\n    }\n\n    .lore-container {\n      text-align: center;\n    }\n  }\n\n  @media (max-width: 700px) {\n    .item-sets-container {\n      flex-direction: row;\n    }\n\n    .item-set-container {\n      flex-direction: column;\n    }\n\n    .matchups {\n      flex-direction: column;\n    }\n\n    .matchup-info {\n      margin: 0.5em auto;\n    }\n\n    #main-container {\n      max-width: 100%;\n    }\n\n    #stats-container {\n      max-width: 100%;\n    }\n  }\n\n  @media (max-width: 840px) {\n    .damage-info {\n      flex-direction: column-reverse;\n      justify-content: space-between;\n      font-size: 15px;\n    }\n\n    .games-played-against {\n      display: none;\n    }\n\n    .damage-stats-container {\n      flex-direction: row;\n    }\n  }\n\n  @media (max-width: 560px) {\n    .champion-main-stats {\n      flex-direction: column;\n    }\n\n    .item-set-container {\n      flex-direction: row;\n    }\n\n    .item-sets-container {\n      flex-direction: column;\n    }\n\n    .champion-damage-container {\n      max-width: 100%;\n      align-items: center;\n    }\n\n    .damage-stats-info {\n      flex-direction: column;\n    }\n\n    .damage-info {\n      flex-direction: row;\n      align-items: flex-start;\n    }\n\n    .damage-type-container {\n      margin: 0.2em auto;\n    }\n\n    .circular-chart {\n      max-height: 195px;\n      max-width: 80%;\n    }\n\n    .damage-stats-container {\n      flex-direction: column;\n    }\n\n    .champion-role {\n      margin-left: 0.5em;\n      margin-right: 0.5em;\n    }\n\n    .champion-resource {\n      margin-left: 0.5em;\n      margin-right: 0.5em;\n    }\n\n    .champion-roles {\n      font-size: 20px;\n    }\n\n    .spell-img {\n      height: 2.8em;\n      width: 2.8em;\n      margin: auto;\n    }\n  }\n\n  @media (max-width: 414px) {\n    .champion-stats-overview {\n      font-size: 20px;\n      min-width: 17rem;\n    }\n\n    .champion-name {\n      font-size: 2rem;\n    }\n  }\n\n  @media (min-width: 1300px) {\n    #skins-container {\n      position: relative;\n      max-width: 70%;\n      min-height: auto;\n    }\n  }\n\n  @media (min-width: 1950px) {\n    #skins-container {\n      max-width: 50%;\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
	"./1617779123_original.jpg": "./src/images/1617779123_original.jpg",
	"./Assassin.png": "./src/images/Assassin.png",
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stylesheets_modals_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stylesheets/modals.scss */ "./src/stylesheets/modals.scss");
/* harmony import */ var _stylesheets_frontpage_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stylesheets/frontpage.scss */ "./src/stylesheets/frontpage.scss");
/* harmony import */ var _templates_championDetailsModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./templates/championDetailsModal */ "./src/templates/championDetailsModal.js");
/* harmony import */ var _templates_championStatsModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./templates/championStatsModal */ "./src/templates/championStatsModal.js");
/* harmony import */ var _appControl_championModalController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./appControl/championModalController */ "./src/appControl/championModalController.js");
/* harmony import */ var _championData_itemInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./championData/itemInfo */ "./src/championData/itemInfo.js");
/* harmony import */ var _championData_championDetails__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./championData/championDetails */ "./src/championData/championDetails.js");
/* harmony import */ var _templates_championSkinsModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./templates/championSkinsModal */ "./src/templates/championSkinsModal.js");
/* harmony import */ var _championData_championStats__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./championData/championStats */ "./src/championData/championStats.js");












var test = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(championId) {
    var championDetails, championStats, controller, allItems, item1;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,_championData_championDetails__WEBPACK_IMPORTED_MODULE_8__["default"])(championId);

          case 2:
            championDetails = _context.sent;
            _context.next = 5;
            return (0,_championData_championStats__WEBPACK_IMPORTED_MODULE_10__["default"])(championId);

          case 5:
            championStats = _context.sent;
            (0,_templates_championDetailsModal__WEBPACK_IMPORTED_MODULE_4__.championDetailsModal)(championDetails);
            _context.next = 9;
            return (0,_templates_championStatsModal__WEBPACK_IMPORTED_MODULE_5__["default"])(championDetails, championStats);

          case 9:
            (0,_templates_championSkinsModal__WEBPACK_IMPORTED_MODULE_9__["default"])(championDetails);
            controller = (0,_appControl_championModalController__WEBPACK_IMPORTED_MODULE_6__.ChampionModalController)();
            controller.modalChangeListeners();
            _context.next = 14;
            return _championData_itemInfo__WEBPACK_IMPORTED_MODULE_7__["default"].getAllItems();

          case 14:
            allItems = _context.sent;
            item1 = new _championData_itemInfo__WEBPACK_IMPORTED_MODULE_7__["default"]('6333');
            console.log(item1.getItemInfo(allItems));

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function test(_x) {
    return _ref.apply(this, arguments);
  };
}();

test('Poppy');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxnSEFBK0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBL0MsSUFBTUEsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixHQUFNO0FBQ3BDLE1BQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsZ0JBQUQsRUFBc0I7QUFDaEQsUUFBTUMsYUFBYSxHQUFHQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLFlBQTFCLENBQXRCO0FBQ0EsUUFBTUMsWUFBWSxHQUFHRixRQUFRLENBQUNDLGdCQUFULENBQTBCLGVBQTFCLENBQXJCO0FBRUFGLElBQUFBLGFBQWEsQ0FBQ0ksT0FBZCxDQUFzQixVQUFDQyxHQUFELEVBQVM7QUFDN0JBLE1BQUFBLEdBQUcsQ0FBQ0MsU0FBSixDQUFjQyxNQUFkLENBQXFCLFNBQXJCO0FBQ0QsS0FGRDtBQUdBSixJQUFBQSxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsVUFBQ0ksSUFBRCxFQUFVO0FBQzdCQSxNQUFBQSxJQUFJLENBQUNGLFNBQUwsQ0FBZUMsTUFBZixDQUFzQixRQUF0QjtBQUNELEtBRkQ7QUFJQSxRQUFNRSxZQUFZLEdBQUdSLFFBQVEsQ0FBQ1MsYUFBVCxZQUEyQlgsZ0JBQTNCLFVBQXJCO0FBQ0FVLElBQUFBLFlBQVksQ0FBQ0UsU0FBYixHQUF5QixtQkFBekI7QUFFQSxRQUFNQyxhQUFhLEdBQUdYLFFBQVEsQ0FBQ1MsYUFBVCxZQUEyQlgsZ0JBQTNCLGNBQXRCO0FBQ0FhLElBQUFBLGFBQWEsQ0FBQ0QsU0FBZCxHQUEwQixxQkFBMUI7QUFDRCxHQWhCRDs7QUFrQkEsTUFBTUUsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDQyxtQkFBRCxFQUF5QjtBQUNuRCxRQUFNQyxTQUFTLEdBQUdkLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsaUJBQTFCLENBQWxCO0FBQ0FhLElBQUFBLFNBQVMsQ0FBQ1gsT0FBVixDQUFrQixVQUFDWSxRQUFELEVBQWM7QUFDOUIsVUFBSUEsUUFBUSxDQUFDQyxFQUFULENBQVlDLFNBQVosQ0FBc0IsQ0FBdEIsRUFBeUJGLFFBQVEsQ0FBQ0MsRUFBVCxDQUFZRSxPQUFaLENBQW9CLEdBQXBCLENBQXpCLE1BQXVETCxtQkFBbUIsQ0FBQ0csRUFBL0UsRUFBbUY7QUFDakYsWUFBTUcsY0FBYyxHQUFHSixRQUF2QjtBQUNBSSxRQUFBQSxjQUFjLENBQUNDLEtBQWYsQ0FBcUJDLE9BQXJCLEdBQStCLE9BQS9CO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsWUFBTUMsY0FBYyxHQUFHUCxRQUF2QjtBQUNBTyxRQUFBQSxjQUFjLENBQUNGLEtBQWYsQ0FBcUJDLE9BQXJCLEdBQStCLE1BQS9CO0FBQ0Q7QUFDRixLQVJEO0FBU0QsR0FYRDs7QUFhQSxNQUFNRSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLGdCQUFELEVBQXNCO0FBQzlDLFFBQU1DLFdBQVcsR0FBR0QsZ0JBQWdCLENBQUNFLGtCQUFyQztBQUNBRCxJQUFBQSxXQUFXLENBQUNMLEtBQVosQ0FBa0JDLE9BQWxCLEdBQTRCLE1BQTVCO0FBQ0QsR0FIRDs7QUFLQSxNQUFNTSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLGtCQUFELEVBQXdCO0FBQzlDLFFBQU1ILFdBQVcsR0FBR0csa0JBQWtCLENBQUNGLGtCQUF2QztBQUNBRCxJQUFBQSxXQUFXLENBQUNMLEtBQVosQ0FBa0JDLE9BQWxCLEdBQTRCLE1BQTVCO0FBQ0QsR0FIRDs7QUFLQSxNQUFNUSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLGNBQUQsRUFBb0I7QUFDM0MsUUFBTUMsbUJBQW1CLEdBQUcvQixRQUFRLENBQUNTLGFBQVQsQ0FBdUIsd0JBQXZCLENBQTVCO0FBQ0EsUUFBTXVCLGlCQUFpQixHQUFHaEMsUUFBUSxDQUFDUyxhQUFULENBQXVCLDZCQUF2QixDQUExQjtBQUNBLFFBQU13QixRQUFRLEdBQUdqQyxRQUFRLENBQUNTLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBakI7QUFFQXVCLElBQUFBLGlCQUFpQixDQUFDdEIsU0FBbEIsR0FBOEIsc0JBQTlCO0FBQ0EsUUFBTXdCLFVBQVUsR0FBR0gsbUJBQW1CLENBQUNJLGlCQUF2QztBQUNBLFFBQU1DLFNBQVMsR0FBR0wsbUJBQW1CLENBQUNNLGdCQUF0Qzs7QUFFQSxRQUFJSCxVQUFVLEtBQUtGLGlCQUFmLElBQW9DRixjQUFjLENBQUNRLFFBQWYsQ0FBd0IsWUFBeEIsQ0FBeEMsRUFBK0U7QUFDN0VGLE1BQUFBLFNBQVMsQ0FBQzFCLFNBQVYsR0FBc0IsNEJBQXRCO0FBQ0F1QixNQUFBQSxRQUFRLENBQUNNLFdBQVQsR0FBdUJILFNBQVMsQ0FBQ3BCLEVBQWpDO0FBQ0QsS0FIRCxNQUdPLElBQUlvQixTQUFTLEtBQUtKLGlCQUFkLElBQW1DRixjQUFjLENBQUNRLFFBQWYsQ0FBd0IsYUFBeEIsQ0FBdkMsRUFBK0U7QUFDcEZKLE1BQUFBLFVBQVUsQ0FBQ3hCLFNBQVgsR0FBdUIsNEJBQXZCO0FBQ0F1QixNQUFBQSxRQUFRLENBQUNNLFdBQVQsR0FBdUJMLFVBQVUsQ0FBQ2xCLEVBQWxDO0FBQ0QsS0FITSxNQUdBLElBQUljLGNBQWMsQ0FBQ1EsUUFBZixDQUF3QixhQUF4QixDQUFKLEVBQTRDO0FBQ2pETixNQUFBQSxpQkFBaUIsQ0FBQ04sa0JBQWxCLENBQXFDaEIsU0FBckMsR0FBaUQsNEJBQWpEO0FBQ0F1QixNQUFBQSxRQUFRLENBQUNNLFdBQVQsR0FBdUJQLGlCQUFpQixDQUFDTixrQkFBbEIsQ0FBcUNWLEVBQTVEO0FBQ0QsS0FITSxNQUdBO0FBQ0xnQixNQUFBQSxpQkFBaUIsQ0FBQ1Esc0JBQWxCLENBQXlDOUIsU0FBekMsR0FBcUQsNEJBQXJEO0FBQ0F1QixNQUFBQSxRQUFRLENBQUNNLFdBQVQsR0FBdUJQLGlCQUFpQixDQUFDUSxzQkFBbEIsQ0FBeUN4QixFQUFoRTtBQUNEO0FBQ0YsR0F0QkQ7O0FBd0JBLE1BQU15QixvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLEdBQU07QUFDakMsUUFBTUMsS0FBSyxHQUFHMUMsUUFBUSxDQUFDUyxhQUFULENBQXVCLFFBQXZCLENBQWQ7QUFFQWlDLElBQUFBLEtBQUssQ0FBQ0MsZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0MsVUFBQ0MsS0FBRCxFQUFXO0FBQ3pDLFVBQUlBLEtBQUssQ0FBQ0MsTUFBTixDQUFhbkMsU0FBYixLQUEyQixXQUEvQixFQUE0QztBQUMxQyxZQUFNb0MsU0FBUyxHQUFHRixLQUFLLENBQUNDLE1BQU4sQ0FBYTdCLEVBQWIsQ0FBZ0JFLE9BQWhCLENBQXdCLEdBQXhCLENBQWxCO0FBQ0EsWUFBTTZCLFNBQVMsR0FBR0gsS0FBSyxDQUFDQyxNQUFOLENBQWE3QixFQUFiLENBQWdCZ0MsS0FBaEIsQ0FBc0IsQ0FBdEIsRUFBeUJGLFNBQXpCLENBQWxCO0FBQ0FqRCxRQUFBQSxtQkFBbUIsQ0FBQ2tELFNBQUQsQ0FBbkI7QUFDRDs7QUFFRCxVQUFJSCxLQUFLLENBQUNDLE1BQU4sQ0FBYW5DLFNBQWIsS0FBMkIsZ0JBQS9CLEVBQWlEO0FBQy9DRSxRQUFBQSxtQkFBbUIsQ0FBQ2dDLEtBQUssQ0FBQ0MsTUFBUCxDQUFuQjtBQUNEOztBQUVELFVBQUlJLEtBQUssQ0FBQ0MsSUFBTixDQUFXTixLQUFLLENBQUNDLE1BQU4sQ0FBYXhDLFNBQXhCLEVBQW1DaUMsUUFBbkMsQ0FBNEMsa0JBQTVDLENBQUosRUFBcUU7QUFDbkVULFFBQUFBLGdCQUFnQixDQUFDb0IsS0FBSyxDQUFDQyxJQUFOLENBQVdOLEtBQUssQ0FBQ0MsTUFBTixDQUFheEMsU0FBeEIsQ0FBRCxDQUFoQjtBQUNEO0FBQ0YsS0FkRDtBQWdCQSxRQUFJOEMsV0FBVyxHQUFHLElBQWxCO0FBQ0FULElBQUFBLEtBQUssQ0FBQ0MsZ0JBQU4sQ0FBdUIsV0FBdkIsRUFBb0MsVUFBQ0MsS0FBRCxFQUFXO0FBQzdDLFVBQUlBLEtBQUssQ0FBQ0MsTUFBTixDQUFhbkMsU0FBYixLQUEyQixVQUEzQixJQUNEa0MsS0FBSyxDQUFDQyxNQUFOLENBQWFuQyxTQUFiLEtBQTJCLG9CQUQ5QixFQUNvRDtBQUNsRCxZQUFJeUMsV0FBSixFQUFpQjtBQUNqQkEsUUFBQUEsV0FBVyxHQUFHUCxLQUFLLENBQUNDLE1BQXBCO0FBQ0F0QixRQUFBQSxpQkFBaUIsQ0FBQzRCLFdBQUQsQ0FBakI7QUFDRDtBQUNGLEtBUEQ7QUFTQVQsSUFBQUEsS0FBSyxDQUFDQyxnQkFBTixDQUF1QixVQUF2QixFQUFtQyxVQUFDQyxLQUFELEVBQVc7QUFDNUMsVUFBSUEsS0FBSyxDQUFDQyxNQUFOLENBQWFuQyxTQUFiLEtBQTJCLFVBQTNCLElBQ0RrQyxLQUFLLENBQUNDLE1BQU4sQ0FBYW5DLFNBQWIsS0FBMkIsb0JBRDlCLEVBQ29EO0FBQ2xELFlBQUksQ0FBQ3lDLFdBQUwsRUFBa0I7QUFFbEIsWUFBTUMsYUFBTixHQUF3QlIsS0FBeEIsQ0FBTVEsYUFBTjs7QUFFQSxlQUFPQSxhQUFQLEVBQXNCO0FBQ3BCLGNBQUlBLGFBQWEsS0FBS0QsV0FBdEIsRUFBbUM7QUFDbkNFLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixhQUFaO0FBQ0FBLFVBQUFBLGFBQWEsR0FBR0EsYUFBYSxDQUFDRyxVQUE5QjtBQUNELFNBVGlELENBVWxEOzs7QUFFQTVCLFFBQUFBLGVBQWUsQ0FBQ3dCLFdBQUQsQ0FBZjtBQUNBQSxRQUFBQSxXQUFXLEdBQUcsSUFBZDtBQUNEO0FBQ0YsS0FqQkQ7QUFrQkQsR0EvQ0Q7O0FBaURBLFNBQU87QUFDTFYsSUFBQUEsb0JBQW9CLEVBQXBCQTtBQURLLEdBQVA7QUFHRCxDQXRIRCxFQXdIQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEhBLElBQU1lLG9CQUFvQjtBQUFBLHNMQUFHLGlCQUFPQyxVQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0pDLEtBQUssOEVBQXVFRCxVQUF2RSxZQUEwRjtBQUFFRSxjQUFBQSxJQUFJLEVBQUU7QUFBUixhQUExRixDQUREOztBQUFBO0FBQ3JCQyxZQUFBQSxRQURxQjtBQUFBO0FBQUEsbUJBRUhBLFFBQVEsQ0FBQ0MsSUFBVCxFQUZHOztBQUFBO0FBRXJCQyxZQUFBQSxTQUZxQjtBQUdyQkMsWUFBQUEsZUFIcUIsR0FHSEQsU0FBUyxDQUFDRSxJQUFWLENBQWVQLFVBQWYsQ0FIRztBQUFBLDZDQUtwQk0sZUFMb0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBcEJQLG9CQUFvQjtBQUFBO0FBQUE7QUFBQSxHQUExQjs7QUFRQSxJQUFNUyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNGLGVBQUQsRUFBcUI7QUFDL0MsTUFBTUcsV0FBVyxHQUFHSCxlQUFlLENBQUNJLE9BQXBDO0FBQ0EsTUFBTUMsV0FBVyxHQUFHRixXQUFXLENBQUNHLElBQWhDO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUdKLFdBQVcsQ0FBQ0ssV0FBdkM7QUFDQSxNQUFNQyxTQUFTLEdBQUdOLFdBQVcsQ0FBQ08sS0FBWixDQUFrQkMsSUFBcEM7QUFDQSxNQUFNQyxhQUFhLHlFQUFrRUgsU0FBbEUsQ0FBbkI7QUFFQSxTQUFPO0FBQ0xKLElBQUFBLFdBQVcsRUFBWEEsV0FESztBQUVMRSxJQUFBQSxrQkFBa0IsRUFBbEJBLGtCQUZLO0FBR0xLLElBQUFBLGFBQWEsRUFBYkE7QUFISyxHQUFQO0FBS0QsQ0FaRDs7QUFjQSxJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNiLGVBQUQsRUFBcUI7QUFDN0MsTUFBTWMsVUFBVSxHQUFHZCxlQUFlLENBQUNlLE1BQW5DO0FBQ0EsTUFBTUEsTUFBTSxHQUFHLEVBQWY7QUFFQUQsRUFBQUEsVUFBVSxDQUFDMUUsT0FBWCxDQUFtQixVQUFDNEUsS0FBRCxFQUFXO0FBQzVCLFFBQU1DLFdBQVcsR0FBRztBQUNsQlgsTUFBQUEsSUFBSSxFQUFFVSxLQUFLLENBQUNWLElBRE07QUFFbEJyRCxNQUFBQSxFQUFFLEVBQUUrRCxLQUFLLENBQUMvRCxFQUZRO0FBR2xCdUQsTUFBQUEsV0FBVyxFQUFFUSxLQUFLLENBQUNSLFdBSEQ7QUFJbEJVLE1BQUFBLFFBQVEsRUFBRUYsS0FBSyxDQUFDRSxRQUpFO0FBS2xCQyxNQUFBQSxRQUFRLEVBQUVILEtBQUssQ0FBQ0csUUFMRTtBQU1sQkMsTUFBQUEsUUFBUSxFQUFFSixLQUFLLENBQUNLLFlBTkU7QUFPbEJDLE1BQUFBLE1BQU0sc0VBQStETixLQUFLLENBQUMvRCxFQUFyRTtBQVBZLEtBQXBCO0FBU0E4RCxJQUFBQSxNQUFNLENBQUNRLElBQVAsQ0FBWU4sV0FBWjtBQUNELEdBWEQ7QUFhQSxTQUFPRixNQUFQO0FBQ0QsQ0FsQkQ7O0FBb0JBLElBQU1TLGtCQUFrQjtBQUFBLHVMQUFHLGtCQUFPOUIsVUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNLRCxvQkFBb0IsQ0FBQ0MsVUFBRCxDQUR6Qjs7QUFBQTtBQUNuQk0sWUFBQUEsZUFEbUI7QUFFbkJ5QixZQUFBQSxlQUZtQixHQUVEdkIsbUJBQW1CLENBQUNGLGVBQUQsQ0FGbEI7QUFHbkJlLFlBQUFBLE1BSG1CLEdBR1ZGLGlCQUFpQixDQUFDYixlQUFELENBSFAsRUFLekI7QUFDQTs7QUFDTTBCLFlBQUFBLGFBUG1CLEdBT0gxQixlQUFlLENBQUMyQixLQUFoQixDQUFzQkMsT0FBdEIsQ0FBOEI1QixlQUFlLENBQUMyQixLQUFoQixDQUFzQixDQUF0QixDQUE5QixFQUF3RDNCLGVBQWUsQ0FBQzJCLEtBQWhCLENBQXNCLENBQXRCLEVBQXlCRSxXQUF6QixFQUF4RCxDQVBHOztBQVN6QixnQkFBSTdCLGVBQWUsQ0FBQzhCLE9BQWhCLEtBQTRCLE1BQWhDLEVBQXdDO0FBQ3RDOUIsY0FBQUEsZUFBZSxDQUFDOEIsT0FBaEIsR0FBMEIsVUFBMUI7QUFDRDs7QUFYd0IsOENBYWxCO0FBQ0x4QixjQUFBQSxJQUFJLEVBQUVOLGVBQWUsQ0FBQ00sSUFEakI7QUFFTHJELGNBQUFBLEVBQUUsRUFBRStDLGVBQWUsQ0FBQy9DLEVBRmY7QUFHTDBFLGNBQUFBLEtBQUssRUFBRUQsYUFIRjtBQUlMSyxjQUFBQSxJQUFJLEVBQUUvQixlQUFlLENBQUMrQixJQUpqQjtBQUtMQyxjQUFBQSxLQUFLLEVBQUVoQyxlQUFlLENBQUNpQyxJQUxsQjtBQU1MQyxjQUFBQSxLQUFLLEVBQUVsQyxlQUFlLENBQUNrQyxLQU5sQjtBQU9MQyxjQUFBQSxRQUFRLEVBQUVuQyxlQUFlLENBQUM4QixPQVByQjtBQVFMMUIsY0FBQUEsT0FBTyxFQUFFcUIsZUFSSjtBQVNMVixjQUFBQSxNQUFNLEVBQU5BLE1BVEs7QUFVTHFCLGNBQUFBLElBQUksRUFBRXBDLGVBQWUsQ0FBQ3FDLFFBVmpCO0FBV0xDLGNBQUFBLFVBQVUsRUFBRXRDLGVBQWUsQ0FBQ3hELElBQWhCLENBQXFCOEY7QUFYNUIsYUFia0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBbEJkLGtCQUFrQjtBQUFBO0FBQUE7QUFBQSxHQUF4Qjs7QUE0QkEsaUVBQWVBLGtCQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RUEsSUFBTWUsa0JBQWtCO0FBQUEsc0xBQUcsaUJBQU83QyxVQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0ZDLEtBQUssaUNBQTBCRCxVQUExQixHQUF3QztBQUFFRSxjQUFBQSxJQUFJLEVBQUU7QUFBUixhQUF4QyxDQURIOztBQUFBO0FBQ25CQyxZQUFBQSxRQURtQjtBQUFBO0FBQUEsbUJBRUdBLFFBQVEsQ0FBQ0MsSUFBVCxFQUZIOztBQUFBO0FBRW5CMEMsWUFBQUEsYUFGbUI7QUFBQSw2Q0FJbEJBLGFBSmtCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWxCRCxrQkFBa0I7QUFBQTtBQUFBO0FBQUEsR0FBeEI7O0FBT0EsSUFBTUUsZ0JBQWdCO0FBQUEsdUxBQUcsa0JBQU8vQyxVQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0s2QyxrQkFBa0IsQ0FBQzdDLFVBQUQsQ0FEdkI7O0FBQUE7QUFDakI4QyxZQUFBQSxhQURpQjtBQUdqQkUsWUFBQUEsT0FIaUIsR0FHUEYsYUFBYSxDQUFDRSxPQUFkLENBQXNCQyxPQUF0QixDQUE4QixDQUE5QixDQUhPO0FBSWpCQyxZQUFBQSxRQUppQixHQUlOSixhQUFhLENBQUNJLFFBQWQsQ0FBdUJELE9BQXZCLENBQStCLENBQS9CLENBSk07QUFLakJFLFlBQUFBLElBTGlCLEdBS1ZMLGFBQWEsQ0FBQ0ssSUFBZCxDQUFtQixDQUFuQixJQUF3QkwsYUFBYSxDQUFDSyxJQUFkLENBQW1CM0YsU0FBbkIsQ0FBNkIsQ0FBN0IsRUFBZ0M0RixXQUFoQyxFQUxkO0FBQUEsOENBT2hCO0FBQ0xwRCxjQUFBQSxVQUFVLEVBQVZBLFVBREs7QUFFTHFELGNBQUFBLEdBQUcsRUFBRVAsYUFBYSxDQUFDUSxRQUZkO0FBR0xDLGNBQUFBLGNBQWMsRUFBRVQsYUFBYSxDQUFDUyxjQUh6QjtBQUlMQyxjQUFBQSxRQUFRLEVBQUVWLGFBQWEsQ0FBQ1csV0FBZCxDQUEwQmxFLEtBQTFCLENBQWdDLENBQWhDLENBSkw7QUFLTG1FLGNBQUFBLFlBQVksRUFBRVosYUFBYSxDQUFDYSxRQUFkLENBQXVCRCxZQUxoQztBQU1MRSxjQUFBQSxhQUFhLEVBQUVkLGFBQWEsQ0FBQ2EsUUFBZCxDQUF1QkMsYUFOakM7QUFPTFosY0FBQUEsT0FBTyxFQUFQQSxPQVBLO0FBUUxFLGNBQUFBLFFBQVEsRUFBUkEsUUFSSztBQVNMQyxjQUFBQSxJQUFJLEVBQUpBO0FBVEssYUFQZ0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBaEJKLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxHQUF0Qjs7QUFvQkEsaUVBQWVBLGdCQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0EsSUFBTWMsYUFBYTtBQUFBLHNMQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ1U1RCxLQUFLLENBQUMsdURBQUQsRUFBMEQ7QUFBRUMsY0FBQUEsSUFBSSxFQUFFO0FBQVIsYUFBMUQsQ0FEZjs7QUFBQTtBQUNkNEQsWUFBQUEsZUFEYztBQUFBO0FBQUEsbUJBRUdBLGVBQWUsQ0FBQzFELElBQWhCLEVBRkg7O0FBQUE7QUFFZDJELFlBQUFBLFFBRmM7QUFHZEMsWUFBQUEsYUFIYyxHQUdFRCxRQUFRLENBQUMsQ0FBRCxDQUhWO0FBQUE7QUFBQSxtQkFJRzlELEtBQUssa0RBQTJDK0QsYUFBM0MsMkJBSlI7O0FBQUE7QUFJZDdELFlBQUFBLFFBSmM7QUFBQTtBQUFBLG1CQUtHQSxRQUFRLENBQUNDLElBQVQsRUFMSDs7QUFBQTtBQUtkNkQsWUFBQUEsUUFMYztBQUFBLDZDQU9iQSxRQUFRLENBQUMxRCxJQVBJOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWJzRCxhQUFhO0FBQUE7QUFBQTtBQUFBLEdBQW5COztJQVVNSztBQUNKLG9CQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQ2xCLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7O1dBT0Qsd0JBQWVGLFFBQWYsRUFBeUI7QUFDdkIsVUFBTWpHLFdBQVcsR0FBR2lHLFFBQVEsQ0FBQyxLQUFLRSxNQUFOLENBQTVCO0FBQ0EsYUFBT25HLFdBQVA7QUFDRDs7O1dBRUQsc0JBQWFpRyxRQUFiLEVBQXVCO0FBQ3JCLFVBQU1qRyxXQUFXLEdBQUcsS0FBS29HLGNBQUwsQ0FBb0JILFFBQXBCLENBQXBCO0FBQ0EsVUFBTUksV0FBVyxHQUFHckcsV0FBVyxDQUFDZ0QsS0FBWixDQUFrQkMsSUFBdEM7QUFDQSxVQUFNcUQsUUFBUSxxRUFBOERELFdBQTlELENBQWQ7QUFDQSxhQUFPQyxRQUFQO0FBQ0QsTUFFRDs7OztXQUNBLDJCQUFrQkwsUUFBbEIsRUFBNEI7QUFDMUIsVUFBTWpHLFdBQVcsR0FBRyxLQUFLb0csY0FBTCxDQUFvQkgsUUFBcEIsQ0FBcEI7QUFDQSxVQUFNTSxnQkFBZ0IsR0FBR3ZHLFdBQVcsQ0FBQ3lCLElBQXJDOztBQUNBLFVBQUk4RSxnQkFBZ0IsS0FBS0MsU0FBekIsRUFBb0M7QUFDbEMsZUFBTyxFQUFQO0FBQ0Q7O0FBQ0QsVUFBTUMsb0JBQW9CLEdBQUdGLGdCQUFnQixDQUFDRyxHQUFqQixDQUFxQixVQUFDUCxNQUFEO0FBQUEsZUFBYTtBQUM3RHZELFVBQUFBLElBQUksRUFBRXFELFFBQVEsQ0FBQ0UsTUFBRCxDQUFSLENBQWlCdkQsSUFEc0M7QUFFN0QwRCxVQUFBQSxRQUFRLG9FQUE2REgsTUFBN0QsU0FGcUQ7QUFHN0RRLFVBQUFBLElBQUksRUFBRVYsUUFBUSxDQUFDRSxNQUFELENBQVIsQ0FBaUJTLElBQWpCLENBQXNCQztBQUhpQyxTQUFiO0FBQUEsT0FBckIsQ0FBN0I7QUFLQSxhQUFPSixvQkFBUDtBQUNEOzs7V0FFRCxxQkFBWVIsUUFBWixFQUFzQjtBQUNwQixVQUFNakcsV0FBVyxHQUFHLEtBQUtvRyxjQUFMLENBQW9CSCxRQUFwQixDQUFwQjtBQUNBLFVBQVFyRCxJQUFSLEdBQWlCNUMsV0FBakIsQ0FBUTRDLElBQVI7QUFDQSxVQUFRRSxXQUFSLEdBQXdCOUMsV0FBeEIsQ0FBUThDLFdBQVI7QUFDQSxVQUFNNkQsSUFBSSxHQUFHM0csV0FBVyxDQUFDNEcsSUFBWixDQUFpQkMsS0FBOUI7QUFDQSxVQUFNUCxRQUFRLEdBQUcsS0FBS1EsWUFBTCxDQUFrQmIsUUFBbEIsQ0FBakI7QUFDQSxVQUFNYyxjQUFjLEdBQUcsS0FBS0MsaUJBQUwsQ0FBdUJmLFFBQXZCLENBQXZCO0FBQ0EsVUFBUTFCLElBQVIsR0FBaUJ2RSxXQUFqQixDQUFRdUUsSUFBUjtBQUVBLGFBQU87QUFDTDNCLFFBQUFBLElBQUksRUFBSkEsSUFESztBQUVMRSxRQUFBQSxXQUFXLEVBQVhBLFdBRks7QUFHTDZELFFBQUFBLElBQUksRUFBSkEsSUFISztBQUlMTCxRQUFBQSxRQUFRLEVBQVJBLFFBSks7QUFLTFMsUUFBQUEsY0FBYyxFQUFkQSxjQUxLO0FBTUx4QyxRQUFBQSxJQUFJLEVBQUpBO0FBTkssT0FBUDtBQVFEOzs7O2tNQWpERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUTBCLGdCQUFBQSxRQURSLEdBQ21CSixhQUFhLEVBRGhDO0FBQUEsa0RBRVNJLFFBRlQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUFvREYsaUVBQWVDLFFBQWY7Ozs7Ozs7Ozs7Ozs7OztBQ3BFQSxJQUFNZSxlQUFlLEdBQUksWUFBTTtBQUM3QixNQUFNQywyQkFBMkIsR0FBRyxTQUE5QkEsMkJBQThCLENBQUNDLEdBQUQsRUFBTWxJLFNBQU4sRUFBaUJtSSxhQUFqQixFQUFtQztBQUNyRSxRQUFNQyxPQUFPLEdBQUc5SSxRQUFRLENBQUMrSSxhQUFULENBQXVCSCxHQUF2QixDQUFoQjtBQUNBRSxJQUFBQSxPQUFPLENBQUNwSSxTQUFSLEdBQW9CQSxTQUFwQjtBQUNBbUksSUFBQUEsYUFBYSxDQUFDRyxXQUFkLENBQTBCRixPQUExQjtBQUVBLFdBQU9BLE9BQVA7QUFDRCxHQU5EOztBQVFBLE1BQU1HLHdCQUF3QixHQUFHLFNBQTNCQSx3QkFBMkIsQ0FBQ0wsR0FBRCxFQUFNNUgsRUFBTixFQUFVNkgsYUFBVixFQUE0QjtBQUMzRCxRQUFNQyxPQUFPLEdBQUc5SSxRQUFRLENBQUMrSSxhQUFULENBQXVCSCxHQUF2QixDQUFoQjtBQUNBRSxJQUFBQSxPQUFPLENBQUM5SCxFQUFSLEdBQWFBLEVBQWI7QUFDQTZILElBQUFBLGFBQWEsQ0FBQ0csV0FBZCxDQUEwQkYsT0FBMUI7QUFFQSxXQUFPQSxPQUFQO0FBQ0QsR0FORDs7QUFRQSxNQUFNSSxnQ0FBZ0MsR0FBRyxTQUFuQ0EsZ0NBQW1DLENBQUNOLEdBQUQsRUFBTWxJLFNBQU4sRUFBaUJNLEVBQWpCLEVBQXFCNkgsYUFBckIsRUFBdUM7QUFDOUUsUUFBTUMsT0FBTyxHQUFHOUksUUFBUSxDQUFDK0ksYUFBVCxDQUF1QkgsR0FBdkIsQ0FBaEI7QUFDQUUsSUFBQUEsT0FBTyxDQUFDcEksU0FBUixHQUFvQkEsU0FBcEI7QUFDQW9JLElBQUFBLE9BQU8sQ0FBQzlILEVBQVIsR0FBYUEsRUFBYjtBQUNBNkgsSUFBQUEsYUFBYSxDQUFDRyxXQUFkLENBQTBCRixPQUExQjtBQUVBLFdBQU9BLE9BQVA7QUFDRCxHQVBEOztBQVNBLE1BQU1LLGdDQUFnQyxHQUFHLFNBQW5DQSxnQ0FBbUMsQ0FBQ3pJLFNBQUQsRUFBWW1JLGFBQVosRUFBMkJPLEdBQTNCLEVBQWdDQyxHQUFoQyxFQUF3QztBQUMvRSxRQUFNQyxZQUFZLEdBQUdYLDJCQUEyQixDQUFDLEtBQUQsRUFBUWpJLFNBQVIsRUFBbUJtSSxhQUFuQixDQUFoRDtBQUNBUyxJQUFBQSxZQUFZLENBQUNGLEdBQWIsR0FBbUJBLEdBQW5CO0FBQ0FFLElBQUFBLFlBQVksQ0FBQ0QsR0FBYixHQUFtQkEsR0FBbkI7QUFDRCxHQUpEOztBQU1BLFNBQU87QUFDTFYsSUFBQUEsMkJBQTJCLEVBQTNCQSwyQkFESztBQUVMTSxJQUFBQSx3QkFBd0IsRUFBeEJBLHdCQUZLO0FBR0xDLElBQUFBLGdDQUFnQyxFQUFoQ0EsZ0NBSEs7QUFJTEMsSUFBQUEsZ0NBQWdDLEVBQWhDQTtBQUpLLEdBQVA7QUFNRCxDQXRDdUIsRUFBeEI7O0FBd0NBLGlFQUFlVCxlQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7O0FBRUEsSUFBTWUsb0JBQW9CO0FBQUEsc0xBQUcsaUJBQU9DLFlBQVA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMzQkgsWUFBQUEsbUVBQW1CLENBQUNHLFlBQUQsRUFBZSxNQUFmLENBQW5CO0FBRU1DLFlBQUFBLGFBSHFCLEdBR0wzSixRQUFRLENBQUNTLGFBQVQsQ0FBdUIsaUJBQXZCLENBSEs7QUFJbkJzRixZQUFBQSxLQUptQixHQUlUMkQsWUFKUyxDQUluQjNELEtBSm1CO0FBSzNCQSxZQUFBQSxLQUFLLENBQUM1RixPQUFOLENBQWMsVUFBQ3lKLElBQUQsRUFBVTtBQUN0QixrQkFBTUMsWUFBWSxHQUFHN0osUUFBUSxDQUFDK0ksYUFBVCxDQUF1QixLQUF2QixDQUFyQjtBQUNBLGtCQUFNZSxnQkFBZ0IsR0FBRzlKLFFBQVEsQ0FBQytJLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBekI7QUFDQSxrQkFBTWdCLGlCQUFpQixHQUFHL0osUUFBUSxDQUFDK0ksYUFBVCxDQUF1QixLQUF2QixDQUExQjtBQUVBYyxjQUFBQSxZQUFZLENBQUNuSixTQUFiLEdBQXlCLGVBQXpCO0FBQ0FvSixjQUFBQSxnQkFBZ0IsQ0FBQ3BKLFNBQWpCLEdBQTZCLG9CQUE3QjtBQUNBcUosY0FBQUEsaUJBQWlCLENBQUNySixTQUFsQixHQUE4QixxQkFBOUI7QUFFQW9KLGNBQUFBLGdCQUFnQixDQUFDdkgsV0FBakIsR0FBK0JxSCxJQUEvQjtBQUNBRyxjQUFBQSxpQkFBaUIsQ0FBQ1gsR0FBbEIsYUFBMkJJLGtEQUFNLFdBQUlJLElBQUosVUFBakM7QUFDQUcsY0FBQUEsaUJBQWlCLENBQUNWLEdBQWxCLGFBQTJCTyxJQUEzQjtBQUVBQyxjQUFBQSxZQUFZLENBQUNiLFdBQWIsQ0FBeUJjLGdCQUF6QjtBQUE0Q0QsY0FBQUEsWUFBWSxDQUFDYixXQUFiLENBQXlCZSxpQkFBekI7QUFDNUNKLGNBQUFBLGFBQWEsQ0FBQ1gsV0FBZCxDQUEwQmEsWUFBMUI7QUFDRCxhQWZELEVBTDJCLENBcUIzQjs7QUFDTUcsWUFBQUEsZ0JBdEJxQixHQXNCRmhLLFFBQVEsQ0FBQytJLGFBQVQsQ0FBdUIsS0FBdkIsQ0F0QkU7QUF1Qm5CN0MsWUFBQUEsUUF2Qm1CLEdBdUJOd0QsWUF2Qk0sQ0F1Qm5CeEQsUUF2Qm1CO0FBd0IzQjhELFlBQUFBLGdCQUFnQixDQUFDdEosU0FBakIsR0FBNkIsbUJBQTdCO0FBQ011SixZQUFBQSxvQkF6QnFCLEdBeUJFakssUUFBUSxDQUFDK0ksYUFBVCxDQUF1QixNQUF2QixDQXpCRjtBQTBCckJtQixZQUFBQSxxQkExQnFCLEdBMEJHbEssUUFBUSxDQUFDK0ksYUFBVCxDQUF1QixLQUF2QixDQTFCSDtBQTJCM0JrQixZQUFBQSxvQkFBb0IsQ0FBQ3ZKLFNBQXJCLEdBQWlDLHdCQUFqQztBQUNBd0osWUFBQUEscUJBQXFCLENBQUN4SixTQUF0QixHQUFrQyx5QkFBbEM7QUFDQXVKLFlBQUFBLG9CQUFvQixDQUFDMUgsV0FBckIsR0FBbUMyRCxRQUFuQztBQUNBZ0UsWUFBQUEscUJBQXFCLENBQUNkLEdBQXRCLGFBQStCSSxrREFBTSxXQUFJdEQsUUFBSixVQUFyQztBQUE0RGdFLFlBQUFBLHFCQUFxQixDQUFDYixHQUF0QixhQUErQm5ELFFBQS9CO0FBRTVEOEQsWUFBQUEsZ0JBQWdCLENBQUNoQixXQUFqQixDQUE2QmlCLG9CQUE3QjtBQUNBRCxZQUFBQSxnQkFBZ0IsQ0FBQ2hCLFdBQWpCLENBQTZCa0IscUJBQTdCO0FBQ0FQLFlBQUFBLGFBQWEsQ0FBQ1gsV0FBZCxDQUEwQmdCLGdCQUExQjtBQUVNRyxZQUFBQSxZQXBDcUIsR0FvQ05uSyxRQUFRLENBQUNTLGFBQVQsQ0FBdUIsZ0JBQXZCLENBcENNO0FBcUMzQjBKLFlBQUFBLFlBQVksQ0FBQzVILFdBQWIsR0FBMkJtSCxZQUFZLENBQUM1RCxJQUF4QztBQUVNc0UsWUFBQUEsZUF2Q3FCLEdBdUNIcEssUUFBUSxDQUFDUyxhQUFULENBQXVCLG1CQUF2QixDQXZDRztBQXlDckI0SixZQUFBQSxVQXpDcUIsR0F5Q1JySyxRQUFRLENBQUMrSSxhQUFULENBQXVCLEtBQXZCLENBekNRO0FBMEMzQnNCLFlBQUFBLFVBQVUsQ0FBQzNKLFNBQVgsR0FBdUIsbUJBQXZCO0FBQ0EySixZQUFBQSxVQUFVLENBQUNySixFQUFYLEdBQWdCLGFBQWhCO0FBQ0FxSixZQUFBQSxVQUFVLENBQUNqQixHQUFYLEdBQWlCTSxZQUFZLENBQUN2RixPQUFiLENBQXFCUSxhQUF0QztBQUNBMEYsWUFBQUEsVUFBVSxDQUFDaEIsR0FBWCxhQUFvQkssWUFBWSxDQUFDdkYsT0FBYixDQUFxQkMsV0FBekM7QUFDQWdHLFlBQUFBLGVBQWUsQ0FBQ3BCLFdBQWhCLENBQTRCcUIsVUFBNUI7QUFFTUMsWUFBQUEsUUFoRHFCLEdBZ0RWLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLENBaERVO0FBaUR2QkMsWUFBQUEsS0FqRHVCLEdBaURmLENBakRlO0FBbUQzQmIsWUFBQUEsWUFBWSxDQUFDNUUsTUFBYixDQUFvQjNFLE9BQXBCLENBQTRCLFVBQUM0RSxLQUFELEVBQVc7QUFDckMsa0JBQU15RixRQUFRLEdBQUd4SyxRQUFRLENBQUMrSSxhQUFULENBQXVCLEtBQXZCLENBQWpCO0FBQ0F5QixjQUFBQSxRQUFRLENBQUM5SixTQUFULEdBQXFCLFdBQXJCLENBRnFDLENBR3JDOztBQUNBOEosY0FBQUEsUUFBUSxDQUFDeEosRUFBVCxhQUFpQnNKLFFBQVEsQ0FBQ0MsS0FBRCxDQUF6QjtBQUNBQyxjQUFBQSxRQUFRLENBQUNwQixHQUFULEdBQWVyRSxLQUFLLENBQUNNLE1BQXJCO0FBQ0FtRixjQUFBQSxRQUFRLENBQUNuQixHQUFULGFBQWtCdEUsS0FBSyxDQUFDVixJQUF4QjtBQUNBK0YsY0FBQUEsZUFBZSxDQUFDcEIsV0FBaEIsQ0FBNEJ3QixRQUE1QjtBQUNBRCxjQUFBQSxLQUFLLElBQUksQ0FBVDtBQUNELGFBVEQ7QUFXTUUsWUFBQUEsa0JBOURxQixHQThEQXpLLFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QixzQkFBdkIsQ0E5REEsRUErRDNCOztBQUNBLGlCQUFTaUssQ0FBVCxHQUFhLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxJQUFJLENBQTVCLEVBQStCO0FBQ3ZCQyxjQUFBQSxXQUR1QixHQUNUM0ssUUFBUSxDQUFDK0ksYUFBVCxDQUF1QixLQUF2QixDQURTO0FBRXZCNkIsY0FBQUEsV0FGdUIsR0FFVDVLLFFBQVEsQ0FBQytJLGFBQVQsQ0FBdUIsTUFBdkIsQ0FGUztBQUd2QjhCLGNBQUFBLGtCQUh1QixHQUdGN0ssUUFBUSxDQUFDK0ksYUFBVCxDQUF1QixNQUF2QixDQUhFO0FBSTdCNkIsY0FBQUEsV0FBVyxDQUFDbEssU0FBWixHQUF3QixjQUF4QjtBQUF3Q21LLGNBQUFBLGtCQUFrQixDQUFDbkssU0FBbkIsR0FBK0IscUJBQS9CO0FBQ3hDaUssY0FBQUEsV0FBVyxDQUFDM0IsV0FBWixDQUF3QjRCLFdBQXhCO0FBQXNDRCxjQUFBQSxXQUFXLENBQUMzQixXQUFaLENBQXdCNkIsa0JBQXhCO0FBQ2hDQyxjQUFBQSxZQU51QixHQU1SLENBQUMsU0FBRCxFQUFZLEdBQVosRUFBaUIsR0FBakIsRUFBc0IsR0FBdEIsRUFBMkIsR0FBM0IsQ0FOUTs7QUFRN0Isa0JBQUlKLENBQUMsS0FBSyxDQUFWLEVBQWE7QUFDWEMsZ0JBQUFBLFdBQVcsQ0FBQ2pLLFNBQVosR0FBd0IscUJBQXhCO0FBQ0FpSyxnQkFBQUEsV0FBVyxDQUFDM0osRUFBWixHQUFpQixpQkFBakI7QUFDQTRKLGdCQUFBQSxXQUFXLENBQUNySSxXQUFaLGFBQTZCbUgsWUFBWSxDQUFDdkYsT0FBYixDQUFxQkMsV0FBbEQsZUFBa0UwRyxZQUFZLENBQUNKLENBQUQsQ0FBOUU7QUFDQUcsZ0JBQUFBLGtCQUFrQixDQUFDRSxTQUFuQixHQUErQnJCLFlBQVksQ0FBQ3ZGLE9BQWIsQ0FBcUJHLGtCQUFwRDtBQUNELGVBTEQsTUFLTztBQUNDYSxnQkFBQUEsUUFERCxHQUNZbkYsUUFBUSxDQUFDK0ksYUFBVCxDQUF1QixNQUF2QixDQURaO0FBRUw1RCxnQkFBQUEsUUFBUSxDQUFDekUsU0FBVCxHQUFxQixrQkFBckI7QUFDQXlFLGdCQUFBQSxRQUFRLENBQUM1QyxXQUFULHVCQUFvQ21ILFlBQVksQ0FBQzVFLE1BQWIsQ0FBb0I0RixDQUFDLEdBQUcsQ0FBeEIsRUFBMkJ2RixRQUEvRDtBQUNBd0YsZ0JBQUFBLFdBQVcsQ0FBQzNCLFdBQVosQ0FBd0I3RCxRQUF4QjtBQUVBd0YsZ0JBQUFBLFdBQVcsQ0FBQ2pLLFNBQVosR0FBd0IsY0FBeEI7QUFDQWlLLGdCQUFBQSxXQUFXLENBQUMzSixFQUFaLGFBQW9COEosWUFBWSxDQUFDSixDQUFELENBQWhDO0FBQ0FFLGdCQUFBQSxXQUFXLENBQUNySSxXQUFaLGFBQTZCbUgsWUFBWSxDQUFDNUUsTUFBYixDQUFvQjRGLENBQUMsR0FBRyxDQUF4QixFQUEyQnJHLElBQXhELGVBQWlFeUcsWUFBWSxDQUFDSixDQUFELENBQTdFO0FBQ0FHLGdCQUFBQSxrQkFBa0IsQ0FBQ0UsU0FBbkIsR0FBK0JyQixZQUFZLENBQUM1RSxNQUFiLENBQW9CNEYsQ0FBQyxHQUFHLENBQXhCLEVBQTJCbkcsV0FBMUQ7QUFDRDs7QUFFRGtHLGNBQUFBLGtCQUFrQixDQUFDekIsV0FBbkIsQ0FBK0IyQixXQUEvQjtBQUNEOztBQUVLSyxZQUFBQSxZQTVGcUIsR0E0Rk5oTCxRQUFRLENBQUNTLGFBQVQsQ0FBdUIsZ0JBQXZCLENBNUZNOztBQThGM0IsaUJBQVNpSyxFQUFULEdBQWEsQ0FBYixFQUFnQkEsRUFBQyxHQUFHLENBQUosSUFBU0EsRUFBQyxHQUFHaEIsWUFBWSxDQUFDdkQsSUFBYixDQUFrQjhFLE1BQS9DLEVBQXVEUCxFQUFDLElBQUksQ0FBNUQsRUFBK0Q7QUFDdkRRLGNBQUFBLFdBRHVELEdBQ3pDbEwsUUFBUSxDQUFDK0ksYUFBVCxDQUF1QixNQUF2QixDQUR5QztBQUU3RG1DLGNBQUFBLFdBQVcsQ0FBQ3hLLFNBQVosR0FBd0IsY0FBeEI7QUFDQXdLLGNBQUFBLFdBQVcsQ0FBQzNJLFdBQVosYUFBNkJtSCxZQUFZLENBQUN2RCxJQUFiLENBQWtCdUUsRUFBbEIsQ0FBN0I7QUFDQU0sY0FBQUEsWUFBWSxDQUFDaEMsV0FBYixDQUF5QmtDLFdBQXpCO0FBQ0Q7O0FBbkcwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFwQnpCLG9CQUFvQjtBQUFBO0FBQUE7QUFBQSxHQUExQixFQXNHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEdBOztBQUVBLElBQU0wQixrQkFBa0I7QUFBQSxzTEFBRyxpQkFBT3BILGVBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2pCa0MsWUFBQUEsS0FEaUIsR0FDUGxDLGVBRE8sQ0FDakJrQyxLQURpQjtBQUVuQm1GLFlBQUFBLGNBRm1CLEdBRUZwTCxRQUFRLENBQUNTLGFBQVQsQ0FBdUIsa0JBQXZCLENBRkU7QUFHbkJ3QixZQUFBQSxRQUhtQixHQUdSakMsUUFBUSxDQUFDUyxhQUFULENBQXVCLFlBQXZCLENBSFE7QUFJbkJzQixZQUFBQSxtQkFKbUIsR0FJRzJHLDRGQUFBLENBQTRDLEtBQTVDLEVBQW1ELHVCQUFuRCxFQUE0RTBDLGNBQTVFLENBSkg7QUFNekJuRixZQUFBQSxLQUFLLENBQUM5RixPQUFOLENBQWMsVUFBQ2tMLElBQUQsRUFBVTtBQUN0QixrQkFBSUEsSUFBSSxDQUFDQyxHQUFMLEtBQWEsQ0FBakIsRUFBb0I7QUFDbEIsb0JBQU1DLG1CQUFtQixHQUFHN0MsaUdBQUEsQ0FDMUIsS0FEMEIsRUFDbkIsNEJBRG1CLG9CQUNzQjNFLGVBQWUsQ0FBQ00sSUFEdEMsR0FDOEN0QyxtQkFEOUMsQ0FBNUI7QUFHQUUsZ0JBQUFBLFFBQVEsQ0FBQ00sV0FBVCxxQkFBa0N3QixlQUFlLENBQUNNLElBQWxEO0FBQ0Esb0JBQU1tSCxhQUFhLHdFQUFpRXpILGVBQWUsQ0FBQy9DLEVBQWpGLGNBQXVGcUssSUFBSSxDQUFDQyxHQUE1RixTQUFuQjtBQUNBNUMsZ0JBQUFBLGlHQUFBLENBQWlELFlBQWpELEVBQStENkMsbUJBQS9ELEVBQW9GQyxhQUFwRixFQUFtRyxjQUFuRztBQUNELGVBUEQsTUFPTztBQUNMLG9CQUFNQyxjQUFjLEdBQUcvQyxpR0FBQSxDQUFpRCxLQUFqRCxFQUF3RCxzQkFBeEQsRUFBZ0YyQyxJQUFJLENBQUNoSCxJQUFyRixFQUEyRnRDLG1CQUEzRixDQUF2QjtBQUNBLG9CQUFNZ0csUUFBUSx3RUFBaUVoRSxlQUFlLENBQUMvQyxFQUFqRixjQUF1RnFLLElBQUksQ0FBQ0MsR0FBNUYsU0FBZDtBQUNBNUMsZ0JBQUFBLGlHQUFBLENBQWlELFlBQWpELEVBQStEK0MsY0FBL0QsRUFBK0UxRCxRQUEvRSxFQUF5RnNELElBQUksQ0FBQ2hILElBQTlGO0FBQ0Q7QUFDRixhQWJEOztBQU55QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFsQjhHLGtCQUFrQjtBQUFBO0FBQUE7QUFBQSxHQUF4Qjs7QUFzQkEsaUVBQWVBLGtCQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBT0E7O0FBRUEsSUFBTVcsa0JBQWtCO0FBQUEsc0xBQUcsaUJBQU9wQyxZQUFQLEVBQXFCbkQsYUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3pCZ0QsWUFBQUEsbUVBQW1CLENBQUNHLFlBQUQsRUFBZSxPQUFmLENBQW5CO0FBRU1xQyxZQUFBQSxhQUhtQixHQUdIL0wsUUFBUSxDQUFDUyxhQUFULENBQXVCLDBCQUF2QixDQUhHO0FBS3pCaUwsWUFBQUEsa0VBQWtCLENBQUNLLGFBQUQsRUFBZ0IsVUFBaEIsRUFBNEJ4RixhQUFhLENBQUNFLE9BQTFDLENBQWxCO0FBQ0FpRixZQUFBQSxrRUFBa0IsQ0FBQ0ssYUFBRCxFQUFnQixXQUFoQixFQUE2QnhGLGFBQWEsQ0FBQ0ksUUFBM0MsQ0FBbEI7QUFDQTs7QUFDTUMsWUFBQUEsSUFSbUIsYUFRVEwsYUFBYSxDQUFDSyxJQUFkLENBQW1CLENBQW5CLElBQXdCTCxhQUFhLENBQUNLLElBQWQsQ0FBbUIzRixTQUFuQixDQUE2QixDQUE3QixFQUFnQzRGLFdBQWhDLEVBUmY7QUFTekIrRSxZQUFBQSxrRUFBa0IsQ0FBQ0csYUFBRCxFQUFnQm5GLElBQWhCLENBQWxCO0FBRUE7O0FBRU1vRixZQUFBQSxzQkFibUIsR0FhTWhNLFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QixxQkFBdkIsQ0FiTjtBQWNuQndMLFlBQUFBLDBCQWRtQixHQWNVak0sUUFBUSxDQUFDUyxhQUFULENBQXVCLHlCQUF2QixDQWRWO0FBZW5CeUwsWUFBQUEsdUJBZm1CLEdBZU9sTSxRQUFRLENBQUNTLGFBQVQsQ0FBdUIsc0JBQXZCLENBZlA7QUFpQm5CMEwsWUFBQUEsaUJBakJtQixHQWlCQ0MsSUFBSSxDQUFDQyxLQUFMLENBQVc5RixhQUFhLENBQUNTLGNBQWQsQ0FBNkJzRixVQUE3QixDQUF3Q0MsVUFBbkQsQ0FqQkQ7QUFrQm5CQyxZQUFBQSxxQkFsQm1CLEdBa0JLSixJQUFJLENBQUNDLEtBQUwsQ0FBVzlGLGFBQWEsQ0FBQ1MsY0FBZCxDQUE2QnlGLGNBQTdCLENBQTRDRixVQUF2RCxDQWxCTDtBQW1CbkJHLFlBQUFBLGtCQW5CbUIsR0FtQkVOLElBQUksQ0FBQ0MsS0FBTCxDQUFXOUYsYUFBYSxDQUFDUyxjQUFkLENBQTZCMkYsV0FBN0IsQ0FBeUNKLFVBQXBELENBbkJGO0FBcUJ6QlAsWUFBQUEsc0JBQXNCLENBQUM1SyxLQUF2QixDQUE2QndMLGVBQTdCLGFBQWtEVCxpQkFBbEQ7QUFDQUYsWUFBQUEsMEJBQTBCLENBQUM3SyxLQUEzQixDQUFpQ3dMLGVBQWpDLGFBQXNESixxQkFBcUIsR0FBR0wsaUJBQTlFO0FBQ0FELFlBQUFBLHVCQUF1QixDQUFDOUssS0FBeEIsQ0FBOEJ3TCxlQUE5QixHQUFnRCxVQUFoRDtBQUNNQyxZQUFBQSxlQXhCbUIsR0F3QkQ3TSxRQUFRLENBQUNTLGFBQVQsQ0FBdUIsb0JBQXZCLENBeEJDO0FBeUJ6Qm9NLFlBQUFBLGVBQWUsQ0FBQ3RLLFdBQWhCLEdBQThCNkosSUFBSSxDQUFDQyxLQUFMLENBQVc5RixhQUFhLENBQUNTLGNBQWQsQ0FBNkI4RixXQUE3QixDQUF5Q0MsS0FBcEQsQ0FBOUI7QUFFTUMsWUFBQUEsZUEzQm1CLEdBMkJEWixJQUFJLENBQUNDLEtBQUwsQ0FBVzlGLGFBQWEsQ0FBQ1MsY0FBZCxDQUE2QnNGLFVBQTdCLENBQXdDUyxLQUFuRCxDQTNCQztBQTRCbkJFLFlBQUFBLG1CQTVCbUIsR0E0QkdiLElBQUksQ0FBQ0MsS0FBTCxDQUFXOUYsYUFBYSxDQUFDUyxjQUFkLENBQTZCeUYsY0FBN0IsQ0FBNENNLEtBQXZELENBNUJIO0FBNkJuQkcsWUFBQUEsZ0JBN0JtQixHQTZCQWQsSUFBSSxDQUFDQyxLQUFMLENBQVc5RixhQUFhLENBQUNTLGNBQWQsQ0FBNkIyRixXQUE3QixDQUF5Q0ksS0FBcEQsQ0E3QkE7QUErQnpCcEIsWUFBQUEsaUVBQWlCLENBQUMsVUFBRCxFQUFhc0IsbUJBQWIsRUFBa0NULHFCQUFsQyxDQUFqQjtBQUNBYixZQUFBQSxpRUFBaUIsQ0FBQyxPQUFELEVBQVV1QixnQkFBVixFQUE0QlIsa0JBQTVCLENBQWpCO0FBQ0FmLFlBQUFBLGlFQUFpQixDQUFDLE1BQUQsRUFBU3FCLGVBQVQsRUFBMEJiLGlCQUExQixDQUFqQjtBQUVBOztBQUNRbEYsWUFBQUEsUUFwQ2lCLEdBb0NKVixhQXBDSSxDQW9DakJVLFFBcENpQjtBQUFBO0FBQUEsbUJBcUNGVSwwRUFBQSxFQXJDRTs7QUFBQTtBQXFDbkJELFlBQUFBLFFBckNtQjtBQXNDbkIwRixZQUFBQSxrQkF0Q21CLEdBc0NFcE4sUUFBUSxDQUFDUyxhQUFULENBQXVCLHVCQUF2QixDQXRDRjtBQXVDbkI0TSxZQUFBQSxpQkF2Q21CLEdBdUNDck4sUUFBUSxDQUFDK0ksYUFBVCxDQUF1QixLQUF2QixDQXZDRDtBQXdDekJzRSxZQUFBQSxpQkFBaUIsQ0FBQzNNLFNBQWxCLEdBQThCLHFCQUE5QjtBQUNBME0sWUFBQUEsa0JBQWtCLENBQUNwRSxXQUFuQixDQUErQnFFLGlCQUEvQjtBQUVBcEcsWUFBQUEsUUFBUSxDQUFDOUcsT0FBVCxDQUFpQixVQUFDbU4sT0FBRCxFQUFhO0FBQzVCLGtCQUFNQyxnQkFBZ0IsR0FBR3ZOLFFBQVEsQ0FBQytJLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBekI7QUFDQXdFLGNBQUFBLGdCQUFnQixDQUFDN00sU0FBakIsR0FBNkIsb0JBQTdCO0FBQ0EyTSxjQUFBQSxpQkFBaUIsQ0FBQ3JFLFdBQWxCLENBQThCdUUsZ0JBQTlCO0FBRUFELGNBQUFBLE9BQU8sQ0FBQ25OLE9BQVIsQ0FBZ0IsVUFBQ3lILE1BQUQsRUFBWTtBQUMxQixvQkFBTTRGLElBQUksR0FBRyxJQUFJN0YsOERBQUosQ0FBYUMsTUFBYixDQUFiO0FBQ0Esb0JBQU02RixRQUFRLEdBQUdELElBQUksQ0FBQ0UsV0FBTCxDQUFpQmhHLFFBQWpCLENBQWpCOztBQUNBLG9CQUFJLENBQUMrRixRQUFRLENBQUN6SCxJQUFULENBQWMxRCxRQUFkLENBQXVCLFNBQXZCLENBQUQsSUFBc0MsQ0FBQ21MLFFBQVEsQ0FBQ3pILElBQVQsQ0FBYzFELFFBQWQsQ0FBdUIsWUFBdkIsQ0FBM0MsRUFBaUY7QUFDL0Usc0JBQU1xTCxzQkFBc0IsR0FBRzNOLFFBQVEsQ0FBQytJLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBL0I7QUFDQTRFLGtCQUFBQSxzQkFBc0IsQ0FBQ2pOLFNBQXZCLEdBQW1DLDBCQUFuQztBQUNBNk0sa0JBQUFBLGdCQUFnQixDQUFDdkUsV0FBakIsQ0FBNkIyRSxzQkFBN0I7QUFFQSxzQkFBTUMsUUFBUSxHQUFHbEYsNEZBQUEsQ0FBNEMsS0FBNUMsRUFBbUQsV0FBbkQsRUFBZ0VpRixzQkFBaEUsQ0FBakI7QUFFQWpGLGtCQUFBQSxpR0FBQSxDQUFpRCxVQUFqRCxFQUE2RGtGLFFBQTdELEVBQXVFSCxRQUFRLENBQUMxRixRQUFoRixZQUE2RkgsTUFBN0Y7QUFFQSxzQkFBTWlHLG9CQUFvQixHQUFHbkYsNEZBQUEsQ0FBNEMsS0FBNUMsRUFBbUQsd0JBQW5ELEVBQTZFa0YsUUFBN0UsQ0FBN0I7QUFFQSxzQkFBTUUsV0FBVyxHQUFHcEYsNEZBQUEsQ0FBNEMsTUFBNUMsRUFBb0QsV0FBcEQsRUFBaUVtRixvQkFBakUsQ0FBcEI7QUFDQUMsa0JBQUFBLFdBQVcsQ0FBQ3ZMLFdBQVosR0FBMEJrTCxRQUFRLENBQUNwSixJQUFuQztBQUNBLHNCQUFNMEosa0JBQWtCLEdBQUdyRiw0RkFBQSxDQUE0QyxNQUE1QyxFQUFvRCxrQkFBcEQsRUFBd0VtRixvQkFBeEUsQ0FBM0I7QUFDQUUsa0JBQUFBLGtCQUFrQixDQUFDaEQsU0FBbkIsR0FBK0IwQyxRQUFRLENBQUNsSixXQUF4QztBQUNBLHNCQUFNeUosUUFBUSxHQUFHdEYsNEZBQUEsQ0FBNEMsS0FBNUMsRUFBbUQsV0FBbkQsRUFBZ0VtRixvQkFBaEUsQ0FBakI7QUFDQSxzQkFBTUksU0FBUyxHQUFHdkYsNEZBQUEsQ0FBNEMsTUFBNUMsRUFBb0QsWUFBcEQsRUFBa0VzRixRQUFsRSxDQUFsQjtBQUNBQyxrQkFBQUEsU0FBUyxDQUFDMUwsV0FBVixHQUF3QixRQUF4QjtBQUNBLHNCQUFNMkwsVUFBVSxHQUFHeEYsNEZBQUEsQ0FBNEMsTUFBNUMsRUFBb0QsYUFBcEQsRUFBbUVzRixRQUFuRSxDQUFuQjtBQUNBRSxrQkFBQUEsVUFBVSxDQUFDM0wsV0FBWCxHQUF5QmtMLFFBQVEsQ0FBQ3JGLElBQWxDO0FBRUE7O0FBQ0Esc0JBQVFJLGNBQVIsR0FBMkJpRixRQUEzQixDQUFRakYsY0FBUjtBQUNBLHNCQUFNMkYsdUJBQXVCLEdBQUd6Riw0RkFBQSxDQUE0QyxLQUE1QyxFQUFtRCwyQkFBbkQsRUFBZ0ZpRixzQkFBaEYsQ0FBaEM7QUFFQW5GLGtCQUFBQSxjQUFjLENBQUNySSxPQUFmLENBQXVCLFVBQUNpTyxhQUFELEVBQW1CO0FBQ3hDLHdCQUFNQyxvQkFBb0IsR0FBRzNGLDRGQUFBLENBQTRDLEtBQTVDLEVBQW1ELGdCQUFuRCxFQUFxRXlGLHVCQUFyRSxDQUE3QjtBQUNBekYsb0JBQUFBLGlHQUFBLENBQWlELG9CQUFqRCxFQUNFMkYsb0JBREYsRUFDd0JELGFBQWEsQ0FBQ3JHLFFBRHRDLFlBQ21EcUcsYUFBYSxDQUFDL0osSUFEakU7QUFHQSx3QkFBTWlLLDZCQUE2QixHQUFHNUYsNEZBQUEsQ0FBNEMsS0FBNUMsRUFBbUQsa0NBQW5ELEVBQXVGMkYsb0JBQXZGLENBQXRDO0FBRUEsd0JBQU1FLGlCQUFpQixHQUFHN0YsNEZBQUEsQ0FBNEMsTUFBNUMsRUFBb0QscUJBQXBELEVBQTJFNEYsNkJBQTNFLENBQTFCO0FBQ0FDLG9CQUFBQSxpQkFBaUIsQ0FBQ2hNLFdBQWxCLEdBQWdDNkwsYUFBYSxDQUFDL0osSUFBOUM7QUFDQSx3QkFBTW1LLGlCQUFpQixHQUFHOUYsNEZBQUEsQ0FBNEMsS0FBNUMsRUFBbUQscUJBQW5ELEVBQTBFNEYsNkJBQTFFLENBQTFCO0FBQ0Esd0JBQU1HLHNCQUFzQixHQUFHL0YsNEZBQUEsQ0FBNEMsTUFBNUMsRUFBb0QsMkJBQXBELEVBQWlGOEYsaUJBQWpGLENBQS9CO0FBQ0FDLG9CQUFBQSxzQkFBc0IsQ0FBQ2xNLFdBQXZCLEdBQXFDLFFBQXJDO0FBQ0Esd0JBQU1tTSxtQkFBbUIsR0FBR2hHLDRGQUFBLENBQTRDLE1BQTVDLEVBQW9ELHVCQUFwRCxFQUE2RThGLGlCQUE3RSxDQUE1QjtBQUNBRSxvQkFBQUEsbUJBQW1CLENBQUNuTSxXQUFwQixHQUFrQzZMLGFBQWEsQ0FBQ2hHLElBQWhEO0FBQ0QsbUJBZEQ7QUFlRDtBQUNGLGVBNUNEO0FBNkNELGFBbEREO0FBbURBOztBQUNNdUcsWUFBQUEsbUJBL0ZtQixHQStGRzNPLFFBQVEsQ0FBQ1MsYUFBVCxDQUF1Qix3QkFBdkIsQ0EvRkg7QUFnR25CbU8sWUFBQUEsbUJBaEdtQixHQWdHR2xHLDRGQUFBLENBQTRDLEtBQTVDLEVBQW1ELHdCQUFuRCxFQUE2RWlHLG1CQUE3RSxDQWhHSDtBQWlHbkJFLFlBQUFBLGdCQWpHbUIsR0FpR0F0SSxhQUFhLENBQUNZLFlBakdkO0FBa0d6QjBFLFlBQUFBLGtFQUFrQixDQUFDK0MsbUJBQUQsRUFBc0JDLGdCQUF0QixDQUFsQjtBQUVNQyxZQUFBQSxvQkFwR21CLEdBb0dJOU8sUUFBUSxDQUFDUyxhQUFULENBQXVCLHlCQUF2QixDQXBHSjtBQXFHbkJzTyxZQUFBQSxvQkFyR21CLEdBcUdJckcsNEZBQUEsQ0FBNEMsS0FBNUMsRUFBbUQseUJBQW5ELEVBQThFb0csb0JBQTlFLENBckdKO0FBc0duQkUsWUFBQUEsaUJBdEdtQixHQXNHQ3pJLGFBQWEsQ0FBQ2MsYUF0R2Y7QUF1R3pCd0UsWUFBQUEsa0VBQWtCLENBQUNrRCxvQkFBRCxFQUF1QkMsaUJBQXZCLENBQWxCOztBQXZHeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBbEJsRCxrQkFBa0I7QUFBQTtBQUFBO0FBQUEsR0FBeEI7O0FBMEdBLGlFQUFlQSxrQkFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEhBO0FBRUE7O0FBRUEsSUFBTW1ELFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLENBQUQsRUFBTztBQUN2QixNQUFNMUYsTUFBTSxHQUFHLEVBQWY7QUFDQTBGLEVBQUFBLENBQUMsQ0FBQ0MsSUFBRixHQUFTaFAsT0FBVCxDQUFpQixVQUFDcU4sSUFBRCxFQUFVO0FBQUVoRSxJQUFBQSxNQUFNLENBQUNnRSxJQUFJLENBQUM3SCxPQUFMLENBQWEsSUFBYixFQUFtQixFQUFuQixDQUFELENBQU4sR0FBaUN1SixDQUFDLENBQUMxQixJQUFELENBQWxDO0FBQTJDLEdBQXhFO0FBQ0EsU0FBT2hFLE1BQVA7QUFDRCxDQUpEOztBQU1BLElBQU1BLE1BQU0sR0FBR3lGLFNBQVMsQ0FBQ0csNERBQUQsQ0FBeEI7O0FBRUEsSUFBTTdGLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0csWUFBRCxFQUFlNEYsY0FBZixFQUFrQztBQUM1RCxNQUFNQyxTQUFTLEdBQUd2UCxRQUFRLENBQUNTLGFBQVQsWUFBMkI2TyxjQUEzQixnQkFBbEI7QUFDQUMsRUFBQUEsU0FBUyxDQUFDbk8sS0FBVixDQUFnQm9PLFVBQWhCLHVGQUEwRzlGLFlBQVksQ0FBQzFJLEVBQXZIO0FBQ0F1TyxFQUFBQSxTQUFTLENBQUNuTyxLQUFWLENBQWdCcU8sY0FBaEIsR0FBaUMsT0FBakM7QUFFQSxNQUFNaEssYUFBYSxHQUFHOEosU0FBUyxDQUFDOU8sYUFBVixDQUF3QixpQkFBeEIsQ0FBdEI7QUFDQWdGLEVBQUFBLGFBQWEsQ0FBQ2xELFdBQWQsR0FBNEJtSCxZQUFZLENBQUNoRSxLQUF6QztBQUVBLE1BQU1nSyxZQUFZLEdBQUdILFNBQVMsQ0FBQzlPLGFBQVYsQ0FBd0IsZ0JBQXhCLENBQXJCO0FBQ0FpUCxFQUFBQSxZQUFZLENBQUNuTixXQUFiLEdBQTJCbUgsWUFBWSxDQUFDckYsSUFBeEM7QUFDRCxDQVZELEVBWUE7OztBQUNBLElBQU1xSCxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNLLGFBQUQsRUFBZ0I0RCxRQUFoQixFQUEwQkMsUUFBMUIsRUFBdUM7QUFDaEUsTUFBTUMsWUFBWSxHQUFHN1AsUUFBUSxDQUFDK0ksYUFBVCxDQUF1QixLQUF2QixDQUFyQjtBQUNBLE1BQU0rRyxLQUFLLEdBQUc5UCxRQUFRLENBQUMrSSxhQUFULENBQXVCLE1BQXZCLENBQWQ7QUFDQSxNQUFNZ0gsU0FBUyxHQUFHL1AsUUFBUSxDQUFDK0ksYUFBVCxDQUF1QixNQUF2QixDQUFsQixDQUhnRSxDQUtoRTs7QUFDQSxNQUFNaUgsYUFBYSxHQUFHTCxRQUFRLENBQUNoSyxPQUFULENBQWlCLEdBQWpCLEVBQXNCLEdBQXRCLEVBQTJCa0IsV0FBM0IsRUFBdEI7QUFFQWdKLEVBQUFBLFlBQVksQ0FBQ25QLFNBQWIsR0FBeUJzUCxhQUF6QjtBQUNBRixFQUFBQSxLQUFLLENBQUM5TyxFQUFOLGFBQWNnUCxhQUFkO0FBQ0FGLEVBQUFBLEtBQUssQ0FBQ3BQLFNBQU4sR0FBa0IsT0FBbEI7QUFDQXFQLEVBQUFBLFNBQVMsQ0FBQ3JQLFNBQVYsYUFBeUJzUCxhQUF6QjtBQUNBRixFQUFBQSxLQUFLLENBQUN2TixXQUFOLEdBQW9Cb04sUUFBcEI7QUFDQUksRUFBQUEsU0FBUyxDQUFDeE4sV0FBVixhQUEyQnFOLFFBQTNCO0FBRUFDLEVBQUFBLFlBQVksQ0FBQzdHLFdBQWIsQ0FBeUI4RyxLQUF6QjtBQUFpQ0QsRUFBQUEsWUFBWSxDQUFDN0csV0FBYixDQUF5QitHLFNBQXpCO0FBQ2pDaEUsRUFBQUEsYUFBYSxDQUFDL0MsV0FBZCxDQUEwQjZHLFlBQTFCO0FBQ0QsQ0FqQkQ7O0FBbUJBLElBQU1qRSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNHLGFBQUQsRUFBZ0JuRixJQUFoQixFQUF5QjtBQUNsRCxNQUFNcUosZ0JBQWdCLEdBQUdqUSxRQUFRLENBQUMrSSxhQUFULENBQXVCLEtBQXZCLENBQXpCO0FBQ0FrSCxFQUFBQSxnQkFBZ0IsQ0FBQ3ZQLFNBQWpCLEdBQTZCLFdBQTdCO0FBQ0EsTUFBTXdQLFFBQVEsR0FBR2xRLFFBQVEsQ0FBQytJLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBakI7QUFDQW1ILEVBQUFBLFFBQVEsQ0FBQ3hQLFNBQVQsR0FBcUIsaUJBQXJCO0FBQ0F3UCxFQUFBQSxRQUFRLENBQUMzTixXQUFULEdBQXVCcUUsSUFBdkI7QUFDQSxNQUFNdUosUUFBUSxHQUFHblEsUUFBUSxDQUFDK0ksYUFBVCxDQUF1QixLQUF2QixDQUFqQjtBQUNBb0gsRUFBQUEsUUFBUSxDQUFDelAsU0FBVCxHQUFxQiwrQkFBckI7QUFDQXlQLEVBQUFBLFFBQVEsQ0FBQy9HLEdBQVQsYUFBa0JJLE1BQU0sV0FBSTVDLElBQUosVUFBeEI7QUFDQXVKLEVBQUFBLFFBQVEsQ0FBQzlHLEdBQVQsYUFBa0J6QyxJQUFsQjtBQUNBcUosRUFBQUEsZ0JBQWdCLENBQUNqSCxXQUFqQixDQUE2QmtILFFBQTdCO0FBQ0FELEVBQUFBLGdCQUFnQixDQUFDakgsV0FBakIsQ0FBNkJtSCxRQUE3QjtBQUNBcEUsRUFBQUEsYUFBYSxDQUFDL0MsV0FBZCxDQUEwQmlILGdCQUExQjtBQUNELENBYkQ7O0FBZUEsSUFBTXRFLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ3lFLFVBQUQsRUFBYUMsV0FBYixFQUEwQkMsZ0JBQTFCLEVBQStDO0FBQ3ZFLE1BQU1DLGVBQWUsR0FBR3ZRLFFBQVEsQ0FBQ1MsYUFBVCxZQUEyQjJQLFVBQTNCLHVCQUF4QjtBQUVBLE1BQU1JLFdBQVcsR0FBR3hRLFFBQVEsQ0FBQytJLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBcEI7QUFDQXlILEVBQUFBLFdBQVcsQ0FBQzlQLFNBQVosR0FBd0IsY0FBeEI7QUFFQSxNQUFNK1Asa0JBQWtCLEdBQUd6USxRQUFRLENBQUMrSSxhQUFULENBQXVCLE1BQXZCLENBQTNCO0FBQ0EsTUFBTTJILHVCQUF1QixHQUFHMVEsUUFBUSxDQUFDK0ksYUFBVCxDQUF1QixNQUF2QixDQUFoQztBQUNBMEgsRUFBQUEsa0JBQWtCLENBQUN6UCxFQUFuQixhQUEyQm9QLFVBQTNCO0FBQStDTSxFQUFBQSx1QkFBdUIsQ0FBQzFQLEVBQXhCLGFBQWdDb1AsVUFBaEM7QUFDL0NLLEVBQUFBLGtCQUFrQixDQUFDbE8sV0FBbkIsYUFBb0M4TixXQUFwQztBQUNBSyxFQUFBQSx1QkFBdUIsQ0FBQ25PLFdBQXhCLGFBQXlDK04sZ0JBQXpDO0FBRUFFLEVBQUFBLFdBQVcsQ0FBQ3hILFdBQVosQ0FBd0J5SCxrQkFBeEI7QUFBNkNELEVBQUFBLFdBQVcsQ0FBQ3hILFdBQVosQ0FBd0IwSCx1QkFBeEI7QUFDN0NILEVBQUFBLGVBQWUsQ0FBQ3ZILFdBQWhCLENBQTRCd0gsV0FBNUI7QUFDRCxDQWREOztBQWdCQSxJQUFNM0Usa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDOEUsZUFBRCxFQUFrQkMsWUFBbEIsRUFBbUM7QUFDNURBLEVBQUFBLFlBQVksQ0FBQ3pRLE9BQWIsQ0FBcUIsVUFBQzBRLE9BQUQsRUFBYTtBQUNoQyxRQUFNQyxXQUFXLEdBQUdwSSw0RkFBQSxDQUE0QyxLQUE1QyxFQUFtRCxjQUFuRCxFQUFtRWlJLGVBQW5FLENBQXBCO0FBQ0EsUUFBTUksaUJBQWlCLEdBQUdGLE9BQU8sQ0FBQyxDQUFELENBQWpDO0FBQ0EsUUFBTUcsbUJBQW1CLHlFQUFrRUQsaUJBQWxFLFNBQXpCO0FBQ0FySSxJQUFBQSxpR0FBQSxDQUNFLG9CQURGLEVBQ3dCb0ksV0FEeEIsRUFDcUNFLG1CQURyQyxrQkFDbUVELGlCQURuRTtBQUlBLFFBQU1FLFlBQVksR0FBR3ZJLDRGQUFBLENBQTRDLEtBQTVDLEVBQW1ELGVBQW5ELEVBQW9Fb0ksV0FBcEUsQ0FBckI7QUFDQSxRQUFNSSx3QkFBd0IsR0FBR3hJLDRGQUFBLENBQTRDLE1BQTVDLEVBQW9ELHFCQUFwRCxFQUEyRXVJLFlBQTNFLENBQWpDO0FBQ0FDLElBQUFBLHdCQUF3QixDQUFDM08sV0FBekIsR0FBdUN3TyxpQkFBdkM7QUFDQSxRQUFNSSxjQUFjLEdBQUd6SSw0RkFBQSxDQUE0QyxLQUE1QyxFQUFtRCxpQkFBbkQsRUFBc0V1SSxZQUF0RSxDQUF2QjtBQUNBLFFBQU1HLG1CQUFtQixHQUFHMUksNEZBQUEsQ0FBNEMsTUFBNUMsRUFBb0QsdUJBQXBELEVBQTZFeUksY0FBN0UsQ0FBNUI7QUFDQUMsSUFBQUEsbUJBQW1CLENBQUM3TyxXQUFwQixHQUFrQyxXQUFsQztBQUNBLFFBQU04TyxLQUFLLEdBQUdWLGVBQWUsQ0FBQ2pRLFNBQWhCLEtBQThCLHdCQUE5QixHQUF5RCxNQUF6RCxHQUFrRSxLQUFoRjtBQUNBLFFBQU00USx3QkFBd0IsR0FBRzVJLDRGQUFBLENBQTRDLE1BQTVDLHVDQUFrRjJJLEtBQWxGLEdBQTJGRixjQUEzRixDQUFqQztBQUNBRyxJQUFBQSx3QkFBd0IsQ0FBQy9PLFdBQXpCLGFBQTBDc08sT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXVSxjQUFYLENBQTBCN0ssT0FBMUIsQ0FBa0MsQ0FBbEMsQ0FBMUM7QUFDQSxRQUFNOEssa0JBQWtCLEdBQUc5SSw0RkFBQSxDQUE0QyxNQUE1QyxFQUFvRCxzQkFBcEQsRUFBNEV1SSxZQUE1RSxDQUEzQjtBQUNBTyxJQUFBQSxrQkFBa0IsQ0FBQ2pQLFdBQW5CLG9CQUEyQ3NPLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV1ksT0FBdEQ7QUFDRCxHQW5CRDtBQW9CRCxDQXJCRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0VBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSw2Q0FBNkMsY0FBYyxlQUFlLDJCQUEyQixHQUFHLFdBQVcsMkJBQTJCLHlDQUF5Qyx5QkFBeUIsMEJBQTBCLEdBQUcsaUJBQWlCLHlDQUF5QyxxQkFBcUIsdUJBQXVCLGdCQUFnQixnQkFBZ0IsR0FBRyxrQ0FBa0Msa0JBQWtCLGtDQUFrQyxpQkFBaUIseUNBQXlDLG9CQUFvQixtQkFBbUIsd0JBQXdCLG1DQUFtQyw0QkFBNEIsd0JBQXdCLEdBQUcsaUNBQWlDLGtCQUFrQixHQUFHLHVCQUF1QixtQkFBbUIsb0JBQW9CLHdCQUF3QixrQkFBa0IsdUJBQXVCLDhCQUE4QixxQkFBcUIsK0JBQStCLHNCQUFzQixtQkFBbUIsR0FBRywrQkFBK0Isa0JBQWtCLDJCQUEyQiw0QkFBNEIsdUJBQXVCLHdCQUF3QixHQUFHLDZCQUE2QixvQkFBb0IscUJBQXFCLGtDQUFrQyxnQkFBZ0IsaUJBQWlCLEdBQUcseUJBQXlCLGdCQUFnQix1QkFBdUIsZ0JBQWdCLEdBQUcsZ0NBQWdDLGtCQUFrQixtQkFBbUIsdUJBQXVCLGVBQWUsV0FBVyxnQkFBZ0IsaUJBQWlCLGlDQUFpQyxtbkRBQW1uRCxHQUFHLGlDQUFpQyxrQkFBa0IsMkJBQTJCLHVCQUF1QixxQkFBcUIsR0FBRyx5QkFBeUIsaUJBQWlCLHNCQUFzQixxQkFBcUIsOEJBQThCLHVCQUF1Qix3Q0FBd0MsR0FBRyx5QkFBeUIsaUJBQWlCLHNCQUFzQixxQkFBcUIsOEJBQThCLHVCQUF1Qix3Q0FBd0MsR0FBRyw4Q0FBOEMsa0JBQWtCLDJCQUEyQixrQ0FBa0MsdUJBQXVCLGdCQUFnQixHQUFHLCtCQUErQixpQkFBaUIsNEJBQTRCLG1CQUFtQixvQkFBb0IscUJBQXFCLG9CQUFvQix1QkFBdUIsdUNBQXVDLEdBQUcscUNBQXFDLHdDQUF3QyxHQUFHLHdDQUF3Qyx1QkFBdUIsR0FBRyw4QkFBOEIsbUJBQW1CLG9CQUFvQix3QkFBd0Isa0JBQWtCLHVCQUF1Qiw4QkFBOEIscUJBQXFCLCtCQUErQixzQkFBc0IsbUJBQW1CLEdBQUcsdUNBQXVDLHVCQUF1Qix1QkFBdUIsa0JBQWtCLEdBQUcsNkJBQTZCLHdCQUF3Qiw4QkFBOEIscUNBQXFDLHVDQUF1QyxxQkFBcUIsa0NBQWtDLEdBQUcsbUNBQW1DLHdDQUF3QyxHQUFHLG1DQUFtQyxrQkFBa0IsMkJBQTJCLHdCQUF3QixHQUFHLGtDQUFrQyxpQkFBaUIscUJBQXFCLHVCQUF1QixjQUFjLGlDQUFpQyx1QkFBdUIsdUNBQXVDLGdCQUFnQixxQkFBcUIsR0FBRyw2QkFBNkIsMENBQTBDLG9CQUFvQixLQUFLLG1DQUFtQyxvQkFBb0IsS0FBSyxHQUFHLDhCQUE4QixnREFBZ0Qsb0JBQW9CLEtBQUsseUNBQXlDLHFCQUFxQixLQUFLLG9DQUFvQyxxQkFBcUIseUJBQXlCLEtBQUssR0FBRyxPQUFPLGlHQUFpRyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxZQUFZLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLEtBQUssTUFBTSxXQUFXLFdBQVcsVUFBVSxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0s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LFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxZQUFZLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksVUFBVSxNQUFNLE1BQU0sWUFBWSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxZQUFZLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxZQUFZLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFlBQVksVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLEtBQUssTUFBTSxXQUFXLFdBQVcsS0FBSyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sWUFBWSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxZQUFZLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxVQUFVLEtBQUssTUFBTSxVQUFVLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFlBQVksVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsWUFBWSxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxNQUFNLFVBQVUsV0FBVyxVQUFVLEtBQUssTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxZQUFZLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsS0FBSyxNQUFNLFVBQVUsS0FBSyxNQUFNLFVBQVUsS0FBSyxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sWUFBWSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxZQUFZLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFlBQVksV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxhQUFhLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxNQUFNLFdBQVcsS0FBSyxNQUFNLFdBQVcsS0FBSyxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFL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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQyxjQUFjO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxtQkFBbUI7QUFDcEQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbENlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0Esa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNkQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUMsSUFBSTtBQUFBLHNMQUFHLGlCQUFPak8sVUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNtQjhCLHlFQUFrQixDQUFDOUIsVUFBRCxDQURyQzs7QUFBQTtBQUNMTSxZQUFBQSxlQURLO0FBQUE7QUFBQSxtQkFFaUJ5Qyx3RUFBZ0IsQ0FBQy9DLFVBQUQsQ0FGakM7O0FBQUE7QUFFTDhDLFlBQUFBLGFBRks7QUFHWGtELFlBQUFBLHFGQUFvQixDQUFDMUYsZUFBRCxDQUFwQjtBQUhXO0FBQUEsbUJBSUwrSCx5RUFBa0IsQ0FBQy9ILGVBQUQsRUFBa0J3QyxhQUFsQixDQUpiOztBQUFBO0FBS1g0RSxZQUFBQSx5RUFBa0IsQ0FBQ3BILGVBQUQsQ0FBbEI7QUFDTTROLFlBQUFBLFVBTkssR0FNUS9SLDRGQUF1QixFQU4vQjtBQU9YK1IsWUFBQUEsVUFBVSxDQUFDbFAsb0JBQVg7QUFQVztBQUFBLG1CQVNZa0YsMEVBQUEsRUFUWjs7QUFBQTtBQVNMRCxZQUFBQSxRQVRLO0FBVUxrSyxZQUFBQSxLQVZLLEdBVUcsSUFBSWpLLDhEQUFKLENBQWEsTUFBYixDQVZIO0FBV1h0RSxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWXNPLEtBQUssQ0FBQ2xFLFdBQU4sQ0FBa0JoRyxRQUFsQixDQUFaOztBQVhXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQUpnSyxJQUFJO0FBQUE7QUFBQTtBQUFBLEdBQVY7O0FBY0FBLElBQUksQ0FBQyxPQUFELENBQUosQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9hcHBDb250cm9sL2NoYW1waW9uTW9kYWxDb250cm9sbGVyLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvY2hhbXBpb25EYXRhL2NoYW1waW9uRGV0YWlscy5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL2NoYW1waW9uRGF0YS9jaGFtcGlvblN0YXRzLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvY2hhbXBpb25EYXRhL2l0ZW1JbmZvLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvaGVscGVycy9lbGVtZW50Q3JlYXRpb24uanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy90ZW1wbGF0ZXMvY2hhbXBpb25EZXRhaWxzTW9kYWwuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy90ZW1wbGF0ZXMvY2hhbXBpb25Ta2luc01vZGFsLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvdGVtcGxhdGVzL2NoYW1waW9uU3RhdHNNb2RhbC5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL3RlbXBsYXRlcy9yZW5kZXJIZWxwZXJzLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvc3R5bGVzaGVldHMvZnJvbnRwYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9zdHlsZXNoZWV0cy9tb2RhbHMuc2NzcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9zdHlsZXNoZWV0cy9mcm9udHBhZ2Uuc2Nzcz80NzI2Iiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvc3R5bGVzaGVldHMvbW9kYWxzLnNjc3M/Y2Y4MyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvL2hvbWUvZGF5by9EZXNrdG9wL29kaW5Qcm9qZWN0L0xlYWd1ZS1BcHAvZnJvbnRlbmQvc3JjL2ltYWdlc3xzeW5jfG5vbnJlY3Vyc2l2ZXwvXFwuKHBuZ3xqcGUiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xlYWd1ZS1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2xlYWd1ZS1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9sZWFndWUtYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCJjb25zdCBDaGFtcGlvbk1vZGFsQ29udHJvbGxlciA9ICgpID0+IHtcbiAgY29uc3QgdG9nZ2xlQWN0aXZlQWJpbGl0eSA9IChjbGlja2VkQWJpbGl0eUlkKSA9PiB7XG4gICAgY29uc3QgYWJpbGl0eUltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zcGVsbC1pbWcnKTtcbiAgICBjb25zdCBhYmlsaXR5SW5mb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWJpbGl0eS1pbmZvJyk7XG5cbiAgICBhYmlsaXR5SW1hZ2VzLmZvckVhY2goKGltZykgPT4ge1xuICAgICAgaW1nLmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrZWQnKTtcbiAgICB9KTtcbiAgICBhYmlsaXR5SW5mb3MuZm9yRWFjaCgoaW5mbykgPT4ge1xuICAgICAgaW5mby5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNsaWNrZWRJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2NsaWNrZWRBYmlsaXR5SWR9LWltZ2ApO1xuICAgIGNsaWNrZWRJbWFnZS5jbGFzc05hbWUgPSAnc3BlbGwtaW1nIGNsaWNrZWQnO1xuXG4gICAgY29uc3QgYWN0aXZlQWJpbGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2NsaWNrZWRBYmlsaXR5SWR9LWFiaWxpdHlgKTtcbiAgICBhY3RpdmVBYmlsaXR5LmNsYXNzTmFtZSA9ICdhYmlsaXR5LWluZm8gYWN0aXZlJztcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VNb2RhbFRlbXBsYXRlID0gKGNsaWNrZWRNb2RhbE5hdkxpbmspID0+IHtcbiAgICBjb25zdCB0ZW1wbGF0ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwtdGVtcGxhdGUnKTtcbiAgICB0ZW1wbGF0ZXMuZm9yRWFjaCgodGVtcGxhdGUpID0+IHtcbiAgICAgIGlmICh0ZW1wbGF0ZS5pZC5zdWJzdHJpbmcoMCwgdGVtcGxhdGUuaWQuaW5kZXhPZignLScpKSA9PT0gY2xpY2tlZE1vZGFsTmF2TGluay5pZCkge1xuICAgICAgICBjb25zdCBjaG9zZW5UZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgICAgICBjaG9zZW5UZW1wbGF0ZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGhpZGRlblRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgICAgIGhpZGRlblRlbXBsYXRlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZGlzcGF5SXRlbURldGFpbHMgPSAoaG92ZXJlZEl0ZW1JbWFnZSkgPT4ge1xuICAgIGNvbnN0IGl0ZW1EZXRhaWxzID0gaG92ZXJlZEl0ZW1JbWFnZS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgaXRlbURldGFpbHMuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgfTtcblxuICBjb25zdCBoaWRlSXRlbURldGFpbHMgPSAodW5ob3ZlcmVkSXRlbUltYWdlKSA9PiB7XG4gICAgY29uc3QgaXRlbURldGFpbHMgPSB1bmhvdmVyZWRJdGVtSW1hZ2UubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGl0ZW1EZXRhaWxzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlU2tpbkltYWdlcyA9IChhcnJvd0NsYXNzTGlzdCkgPT4ge1xuICAgIGNvbnN0IHNraW5JbWFnZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2tpbi1pbWFnZXMtY29udGFpbmVyJyk7XG4gICAgY29uc3QgY3VycmVudFNob3duSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2tpbi1pbWFnZS1jb250YWluZXIuc2hvd24nKTtcbiAgICBjb25zdCBza2luTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5za2luLW5hbWUnKTtcblxuICAgIGN1cnJlbnRTaG93bkltYWdlLmNsYXNzTmFtZSA9ICdza2luLWltYWdlLWNvbnRhaW5lcic7XG4gICAgY29uc3QgZmlyc3RJbWFnZSA9IHNraW5JbWFnZXNDb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgY29uc3QgbGFzdEltYWdlID0gc2tpbkltYWdlc0NvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkO1xuXG4gICAgaWYgKGZpcnN0SW1hZ2UgPT09IGN1cnJlbnRTaG93bkltYWdlICYmIGFycm93Q2xhc3NMaXN0LmluY2x1ZGVzKCdsZWZ0LWFycm93JykpIHtcbiAgICAgIGxhc3RJbWFnZS5jbGFzc05hbWUgPSAnc2tpbi1pbWFnZS1jb250YWluZXIgc2hvd24nO1xuICAgICAgc2tpbk5hbWUudGV4dENvbnRlbnQgPSBsYXN0SW1hZ2UuaWQ7XG4gICAgfSBlbHNlIGlmIChsYXN0SW1hZ2UgPT09IGN1cnJlbnRTaG93bkltYWdlICYmIGFycm93Q2xhc3NMaXN0LmluY2x1ZGVzKCdyaWdodC1hcnJvdycpKSB7XG4gICAgICBmaXJzdEltYWdlLmNsYXNzTmFtZSA9ICdza2luLWltYWdlLWNvbnRhaW5lciBzaG93bic7XG4gICAgICBza2luTmFtZS50ZXh0Q29udGVudCA9IGZpcnN0SW1hZ2UuaWQ7XG4gICAgfSBlbHNlIGlmIChhcnJvd0NsYXNzTGlzdC5pbmNsdWRlcygncmlnaHQtYXJyb3cnKSkge1xuICAgICAgY3VycmVudFNob3duSW1hZ2UubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTmFtZSA9ICdza2luLWltYWdlLWNvbnRhaW5lciBzaG93bic7XG4gICAgICBza2luTmFtZS50ZXh0Q29udGVudCA9IGN1cnJlbnRTaG93bkltYWdlLm5leHRFbGVtZW50U2libGluZy5pZDtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudFNob3duSW1hZ2UucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc05hbWUgPSAnc2tpbi1pbWFnZS1jb250YWluZXIgc2hvd24nO1xuICAgICAgc2tpbk5hbWUudGV4dENvbnRlbnQgPSBjdXJyZW50U2hvd25JbWFnZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmlkO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBtb2RhbENoYW5nZUxpc3RlbmVycyA9ICgpID0+IHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuXG4gICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnc3BlbGwtaW1nJykge1xuICAgICAgICBjb25zdCBkYXNoSW5kZXggPSBldmVudC50YXJnZXQuaWQuaW5kZXhPZignLScpO1xuICAgICAgICBjb25zdCBhYmlsaXR5SWQgPSBldmVudC50YXJnZXQuaWQuc2xpY2UoMCwgZGFzaEluZGV4KTtcbiAgICAgICAgdG9nZ2xlQWN0aXZlQWJpbGl0eShhYmlsaXR5SWQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ21vZGFsLW5hdi1saW5rJykge1xuICAgICAgICBjaGFuZ2VNb2RhbFRlbXBsYXRlKGV2ZW50LnRhcmdldCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChBcnJheS5mcm9tKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QpLmluY2x1ZGVzKCdpbWctc2Nyb2xsLWFycm93JykpIHtcbiAgICAgICAgdG9nZ2xlU2tpbkltYWdlcyhBcnJheS5mcm9tKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QpKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGxldCBjdXJyRWxlbWVudCA9IG51bGw7XG4gICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2l0ZW0taW1nJ1xuICAgICAgfHwgZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2NvbXBvbmVudC1pdGVtLWltZycpIHtcbiAgICAgICAgaWYgKGN1cnJFbGVtZW50KSByZXR1cm47XG4gICAgICAgIGN1cnJFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBkaXNwYXlJdGVtRGV0YWlscyhjdXJyRWxlbWVudCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdpdGVtLWltZydcbiAgICAgIHx8IGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdjb21wb25lbnQtaXRlbS1pbWcnKSB7XG4gICAgICAgIGlmICghY3VyckVsZW1lbnQpIHJldHVybjtcblxuICAgICAgICBsZXQgeyByZWxhdGVkVGFyZ2V0IH0gPSBldmVudDtcblxuICAgICAgICB3aGlsZSAocmVsYXRlZFRhcmdldCkge1xuICAgICAgICAgIGlmIChyZWxhdGVkVGFyZ2V0ID09PSBjdXJyRWxlbWVudCkgcmV0dXJuO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlbGF0ZWRUYXJnZXQpO1xuICAgICAgICAgIHJlbGF0ZWRUYXJnZXQgPSByZWxhdGVkVGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ291dCcpO1xuXG4gICAgICAgIGhpZGVJdGVtRGV0YWlscyhjdXJyRWxlbWVudCk7XG4gICAgICAgIGN1cnJFbGVtZW50ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG1vZGFsQ2hhbmdlTGlzdGVuZXJzLFxuICB9O1xufTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcbmV4cG9ydCB7IENoYW1waW9uTW9kYWxDb250cm9sbGVyIH07XG4iLCJjb25zdCBmZXRjaENoYW1waW9uRGV0YWlscyA9IGFzeW5jIChjaGFtcGlvbklkKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLzExLjIwLjEvZGF0YS9lbl9VUy9jaGFtcGlvbi8ke2NoYW1waW9uSWR9Lmpzb25gLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgY29uc3QgY2hhbXBpb25zID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBjb25zdCBjaGFtcGlvbkRldGFpbHMgPSBjaGFtcGlvbnMuZGF0YVtjaGFtcGlvbklkXTtcblxuICByZXR1cm4gY2hhbXBpb25EZXRhaWxzO1xufTtcblxuY29uc3QgZ2V0Q2hhbXBpb25QYXNzaXZlcyA9IChjaGFtcGlvbkRldGFpbHMpID0+IHtcbiAgY29uc3QgcGFzc2l2ZURhdGEgPSBjaGFtcGlvbkRldGFpbHMucGFzc2l2ZTtcbiAgY29uc3QgcGFzc2l2ZU5hbWUgPSBwYXNzaXZlRGF0YS5uYW1lO1xuICBjb25zdCBwYXNzaXZlRGVzY3JpcHRpb24gPSBwYXNzaXZlRGF0YS5kZXNjcmlwdGlvbjtcbiAgY29uc3QgcGFzc2l2ZUlkID0gcGFzc2l2ZURhdGEuaW1hZ2UuZnVsbDtcbiAgY29uc3QgcGFzc2l2ZUltZ1VybCA9IGBodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vMTEuMjEuMS9pbWcvcGFzc2l2ZS8ke3Bhc3NpdmVJZH1gO1xuXG4gIHJldHVybiB7XG4gICAgcGFzc2l2ZU5hbWUsXG4gICAgcGFzc2l2ZURlc2NyaXB0aW9uLFxuICAgIHBhc3NpdmVJbWdVcmwsXG4gIH07XG59O1xuXG5jb25zdCBnZXRDaGFtcGlvblNwZWxscyA9IChjaGFtcGlvbkRldGFpbHMpID0+IHtcbiAgY29uc3Qgc3BlbGxzRGF0YSA9IGNoYW1waW9uRGV0YWlscy5zcGVsbHM7XG4gIGNvbnN0IHNwZWxscyA9IFtdO1xuXG4gIHNwZWxsc0RhdGEuZm9yRWFjaCgoc3BlbGwpID0+IHtcbiAgICBjb25zdCBzcGVsbE9iamVjdCA9IHtcbiAgICAgIG5hbWU6IHNwZWxsLm5hbWUsXG4gICAgICBpZDogc3BlbGwuaWQsXG4gICAgICBkZXNjcmlwdGlvbjogc3BlbGwuZGVzY3JpcHRpb24sXG4gICAgICBjb3N0QnVybjogc3BlbGwuY29zdEJ1cm4sXG4gICAgICBjb3N0VHlwZTogc3BlbGwuY29zdFR5cGUsXG4gICAgICBjb29sZG93bjogc3BlbGwuY29vbGRvd25CdXJuLFxuICAgICAgaW1nVXJsOiBgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLzExLjIxLjEvaW1nL3NwZWxsLyR7c3BlbGwuaWR9LnBuZ2AsXG4gICAgfTtcbiAgICBzcGVsbHMucHVzaChzcGVsbE9iamVjdCk7XG4gIH0pO1xuXG4gIHJldHVybiBzcGVsbHM7XG59O1xuXG5jb25zdCBnZXRDaGFtcGlvbkRldGFpbHMgPSBhc3luYyAoY2hhbXBpb25JZCkgPT4ge1xuICBjb25zdCBjaGFtcGlvbkRldGFpbHMgPSBhd2FpdCBmZXRjaENoYW1waW9uRGV0YWlscyhjaGFtcGlvbklkKTtcbiAgY29uc3QgY2hhbXBpb25QYXNzaXZlID0gZ2V0Q2hhbXBpb25QYXNzaXZlcyhjaGFtcGlvbkRldGFpbHMpO1xuICBjb25zdCBzcGVsbHMgPSBnZXRDaGFtcGlvblNwZWxscyhjaGFtcGlvbkRldGFpbHMpO1xuXG4gIC8vIE1ha2UgZmlyc3QgbGV0dGVyIG9mIHRoZSBjaGFtcGlvbiB0aXRsZSBhIGNhcGl0YWwgbGV0dGVyLlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICBjb25zdCBjaGFtcGlvblRpdGxlID0gY2hhbXBpb25EZXRhaWxzLnRpdGxlLnJlcGxhY2UoY2hhbXBpb25EZXRhaWxzLnRpdGxlWzBdLCBjaGFtcGlvbkRldGFpbHMudGl0bGVbMF0udG9VcHBlckNhc2UoKSk7XG5cbiAgaWYgKGNoYW1waW9uRGV0YWlscy5wYXJ0eXBlID09PSAnTm9uZScpIHtcbiAgICBjaGFtcGlvbkRldGFpbHMucGFydHlwZSA9ICdNYW5hbGVzcyc7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5hbWU6IGNoYW1waW9uRGV0YWlscy5uYW1lLFxuICAgIGlkOiBjaGFtcGlvbkRldGFpbHMuaWQsXG4gICAgdGl0bGU6IGNoYW1waW9uVGl0bGUsXG4gICAgbG9yZTogY2hhbXBpb25EZXRhaWxzLmxvcmUsXG4gICAgcm9sZXM6IGNoYW1waW9uRGV0YWlscy50YWdzLFxuICAgIHNraW5zOiBjaGFtcGlvbkRldGFpbHMuc2tpbnMsXG4gICAgcmVzb3VyY2U6IGNoYW1waW9uRGV0YWlscy5wYXJ0eXBlLFxuICAgIHBhc3NpdmU6IGNoYW1waW9uUGFzc2l2ZSxcbiAgICBzcGVsbHMsXG4gICAgdGlwczogY2hhbXBpb25EZXRhaWxzLmFsbHl0aXBzLFxuICAgIGRpZmZpY3VsdHk6IGNoYW1waW9uRGV0YWlscy5pbmZvLmRpZmZpY3VsdHksXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRDaGFtcGlvbkRldGFpbHM7XG4iLCJjb25zdCBmZXRjaENoYW1waW9uU3RhdHMgPSBhc3luYyAoY2hhbXBpb25JZCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvJHtjaGFtcGlvbklkfWAsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICBjb25zdCBjaGFtcGlvblN0YXRzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIHJldHVybiBjaGFtcGlvblN0YXRzO1xufTtcblxuY29uc3QgZ2V0Q2hhbXBpb25TdGF0cyA9IGFzeW5jIChjaGFtcGlvbklkKSA9PiB7XG4gIGNvbnN0IGNoYW1waW9uU3RhdHMgPSBhd2FpdCBmZXRjaENoYW1waW9uU3RhdHMoY2hhbXBpb25JZCk7XG5cbiAgY29uc3Qgd2luUmF0ZSA9IGNoYW1waW9uU3RhdHMud2luUmF0ZS50b0ZpeGVkKDIpO1xuICBjb25zdCBwaWNrUmF0ZSA9IGNoYW1waW9uU3RhdHMucGlja1JhdGUudG9GaXhlZCgyKTtcbiAgY29uc3QgbGFuZSA9IGNoYW1waW9uU3RhdHMubGFuZVswXSArIGNoYW1waW9uU3RhdHMubGFuZS5zdWJzdHJpbmcoMSkudG9Mb3dlckNhc2UoKTtcblxuICByZXR1cm4ge1xuICAgIGNoYW1waW9uSWQsXG4gICAga2RhOiBjaGFtcGlvblN0YXRzLmtkYVJhdGlvLFxuICAgIGRhbWFnZVBlck1hdGNoOiBjaGFtcGlvblN0YXRzLmRhbWFnZVBlck1hdGNoLFxuICAgIGl0ZW1TZXRzOiBjaGFtcGlvblN0YXRzLml0ZW1DaG9pY2VzLnNsaWNlKDEpLFxuICAgIGJlc3RNYXRjaFVwczogY2hhbXBpb25TdGF0cy5tYXRjaFVwcy5iZXN0TWF0Y2hVcHMsXG4gICAgd29yc3RNYXRjaFVwczogY2hhbXBpb25TdGF0cy5tYXRjaFVwcy53b3JzdE1hdGNoVXBzLFxuICAgIHdpblJhdGUsXG4gICAgcGlja1JhdGUsXG4gICAgbGFuZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldENoYW1waW9uU3RhdHM7XG4iLCIvLyBGZXRjaGVzIGFsbCB0aGUgaXRlbXMgYSBjaGFtcGlvbiBjYW4gYnV5IGluIGEgbWF0Y2hcbmNvbnN0IGZldGNoQWxsSXRlbXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHZlcnNpb25SZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9hcGkvdmVyc2lvbnMuanNvbicsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICBjb25zdCB2ZXJzaW9ucyA9IGF3YWl0IHZlcnNpb25SZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IGxhdGVzdFZlcnNpb24gPSB2ZXJzaW9uc1swXTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vJHtsYXRlc3RWZXJzaW9ufS9kYXRhL2VuX1VTL2l0ZW0uanNvbmApO1xuICBjb25zdCBhbGxJdGVtcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICByZXR1cm4gYWxsSXRlbXMuZGF0YTtcbn07XG5cbmNsYXNzIEl0ZW1JbmZvIHtcbiAgY29uc3RydWN0b3IoaXRlbUlkKSB7XG4gICAgdGhpcy5pdGVtSWQgPSBpdGVtSWQ7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZ2V0QWxsSXRlbXMoKSB7XG4gICAgY29uc3QgYWxsSXRlbXMgPSBmZXRjaEFsbEl0ZW1zKCk7XG4gICAgcmV0dXJuIGFsbEl0ZW1zO1xuICB9XG5cbiAgZ2V0SXRlbURldGFpbHMoYWxsSXRlbXMpIHtcbiAgICBjb25zdCBpdGVtRGV0YWlscyA9IGFsbEl0ZW1zW3RoaXMuaXRlbUlkXTtcbiAgICByZXR1cm4gaXRlbURldGFpbHM7XG4gIH1cblxuICBnZXRJdGVtSW1hZ2UoYWxsSXRlbXMpIHtcbiAgICBjb25zdCBpdGVtRGV0YWlscyA9IHRoaXMuZ2V0SXRlbURldGFpbHMoYWxsSXRlbXMpO1xuICAgIGNvbnN0IGl0ZW1JbWFnZUlkID0gaXRlbURldGFpbHMuaW1hZ2UuZnVsbDtcbiAgICBjb25zdCBpbWFnZVVybCA9IGBodHRwOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi8xMS4yMi4xL2ltZy9pdGVtLyR7aXRlbUltYWdlSWR9YDtcbiAgICByZXR1cm4gaW1hZ2VVcmw7XG4gIH1cblxuICAvLyBnZXRzIGluZm8gb24gdGhlIGl0ZW1zIHVzZWQgdG8gY3JlYXRlIHRoZSBpbnN0YW5jZSBpdGVtXG4gIGdldENvbXBvbmVudEl0ZW1zKGFsbEl0ZW1zKSB7XG4gICAgY29uc3QgaXRlbURldGFpbHMgPSB0aGlzLmdldEl0ZW1EZXRhaWxzKGFsbEl0ZW1zKTtcbiAgICBjb25zdCBjb21wb25lbnRJdGVtSWRzID0gaXRlbURldGFpbHMuZnJvbTtcbiAgICBpZiAoY29tcG9uZW50SXRlbUlkcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnN0IGNvbXBvbmVudEl0ZW1EZXRhaWxzID0gY29tcG9uZW50SXRlbUlkcy5tYXAoKGl0ZW1JZCkgPT4gKHtcbiAgICAgIG5hbWU6IGFsbEl0ZW1zW2l0ZW1JZF0ubmFtZSxcbiAgICAgIGltYWdlVXJsOiBgaHR0cDovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vMTEuMjIuMS9pbWcvaXRlbS8ke2l0ZW1JZH0ucG5nYCxcbiAgICAgIGNvc3Q6IGFsbEl0ZW1zW2l0ZW1JZF0uZ29sZC50b3RhbCxcbiAgICB9KSk7XG4gICAgcmV0dXJuIGNvbXBvbmVudEl0ZW1EZXRhaWxzO1xuICB9XG5cbiAgZ2V0SXRlbUluZm8oYWxsSXRlbXMpIHtcbiAgICBjb25zdCBpdGVtRGV0YWlscyA9IHRoaXMuZ2V0SXRlbURldGFpbHMoYWxsSXRlbXMpO1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gaXRlbURldGFpbHM7XG4gICAgY29uc3QgeyBkZXNjcmlwdGlvbiB9ID0gaXRlbURldGFpbHM7XG4gICAgY29uc3QgY29zdCA9IGl0ZW1EZXRhaWxzLmdvbGQudG90YWw7XG4gICAgY29uc3QgaW1hZ2VVcmwgPSB0aGlzLmdldEl0ZW1JbWFnZShhbGxJdGVtcyk7XG4gICAgY29uc3QgY29tcG9uZW50SXRlbXMgPSB0aGlzLmdldENvbXBvbmVudEl0ZW1zKGFsbEl0ZW1zKTtcbiAgICBjb25zdCB7IHRhZ3MgfSA9IGl0ZW1EZXRhaWxzO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGNvc3QsXG4gICAgICBpbWFnZVVybCxcbiAgICAgIGNvbXBvbmVudEl0ZW1zLFxuICAgICAgdGFncyxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW1JbmZvO1xuIiwiY29uc3QgRWxlbWVudENyZWF0aW9uID0gKCgpID0+IHtcbiAgY29uc3QgY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzID0gKHRhZywgY2xhc3NOYW1lLCBwYXJlbnRFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlQ2hpbGRFbGVtZW50V2l0aElkID0gKHRhZywgaWQsIHBhcmVudEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGVsZW1lbnQuaWQgPSBpZDtcbiAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzQW5kSWQgPSAodGFnLCBjbGFzc05hbWUsIGlkLCBwYXJlbnRFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICBlbGVtZW50LmlkID0gaWQ7XG4gICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzID0gKGNsYXNzTmFtZSwgcGFyZW50RWxlbWVudCwgc3JjLCBhbHQpID0+IHtcbiAgICBjb25zdCBpbWFnZUVsZW1lbnQgPSBjcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2ltZycsIGNsYXNzTmFtZSwgcGFyZW50RWxlbWVudCk7XG4gICAgaW1hZ2VFbGVtZW50LnNyYyA9IHNyYztcbiAgICBpbWFnZUVsZW1lbnQuYWx0ID0gYWx0O1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzLFxuICAgIGNyZWF0ZUNoaWxkRWxlbWVudFdpdGhJZCxcbiAgICBjcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3NBbmRJZCxcbiAgICBjcmVhdGVDaGlsZEltYWdlRWxlbWVudFdpdGhDbGFzcyxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEVsZW1lbnRDcmVhdGlvbjtcbiIsImltcG9ydCB7IHJlbmRlckhlYWRlckRldGFpbHMsIGltYWdlcyB9IGZyb20gJy4vcmVuZGVySGVscGVycyc7XG5cbmNvbnN0IGNoYW1waW9uRGV0YWlsc01vZGFsID0gYXN5bmMgKGNoYW1waW9uRGF0YSkgPT4ge1xuICByZW5kZXJIZWFkZXJEZXRhaWxzKGNoYW1waW9uRGF0YSwgJ21haW4nKTtcblxuICBjb25zdCBjaGFtcGlvblJvbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLXJvbGVzJyk7XG4gIGNvbnN0IHsgcm9sZXMgfSA9IGNoYW1waW9uRGF0YTtcbiAgcm9sZXMuZm9yRWFjaCgocm9sZSkgPT4ge1xuICAgIGNvbnN0IGNoYW1waW9uUm9sZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNoYW1waW9uUm9sZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgY2hhbXBpb25Sb2xlSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgIGNoYW1waW9uUm9sZS5jbGFzc05hbWUgPSAnY2hhbXBpb24tcm9sZSc7XG4gICAgY2hhbXBpb25Sb2xlTmFtZS5jbGFzc05hbWUgPSAnY2hhbXBpb24tcm9sZS1uYW1lJztcbiAgICBjaGFtcGlvblJvbGVJbWFnZS5jbGFzc05hbWUgPSAnY2hhbXBpb24tcm9sZS1pbWFnZSc7XG5cbiAgICBjaGFtcGlvblJvbGVOYW1lLnRleHRDb250ZW50ID0gcm9sZTtcbiAgICBjaGFtcGlvblJvbGVJbWFnZS5zcmMgPSBgJHtpbWFnZXNbYCR7cm9sZX0ucG5nYF19YDtcbiAgICBjaGFtcGlvblJvbGVJbWFnZS5hbHQgPSBgJHtyb2xlfS5wbmdgO1xuXG4gICAgY2hhbXBpb25Sb2xlLmFwcGVuZENoaWxkKGNoYW1waW9uUm9sZU5hbWUpOyBjaGFtcGlvblJvbGUuYXBwZW5kQ2hpbGQoY2hhbXBpb25Sb2xlSW1hZ2UpO1xuICAgIGNoYW1waW9uUm9sZXMuYXBwZW5kQ2hpbGQoY2hhbXBpb25Sb2xlKTtcbiAgfSk7XG4gIC8vIFRoZSB0eXBlIG9mIHJlc291cmNlIHRoYXQgYSBjaGFtcGlvbiB1c2VzIGUuZy4gbWFuYSwgZW5lcmd5IGV0Y1xuICBjb25zdCBjaGFtcGlvblJlc291cmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHsgcmVzb3VyY2UgfSA9IGNoYW1waW9uRGF0YTtcbiAgY2hhbXBpb25SZXNvdXJjZS5jbGFzc05hbWUgPSAnY2hhbXBpb24tcmVzb3VyY2UnO1xuICBjb25zdCBjaGFtcGlvblJlc291cmNlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgY29uc3QgY2hhbXBpb25SZXNvdXJjZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNoYW1waW9uUmVzb3VyY2VOYW1lLmNsYXNzTmFtZSA9ICdjaGFtcGlvbi1yZXNvdXJjZS1uYW1lJztcbiAgY2hhbXBpb25SZXNvdXJjZUltYWdlLmNsYXNzTmFtZSA9ICdjaGFtcGlvbi1yZXNvdXJjZS1pbWFnZSc7XG4gIGNoYW1waW9uUmVzb3VyY2VOYW1lLnRleHRDb250ZW50ID0gcmVzb3VyY2U7XG4gIGNoYW1waW9uUmVzb3VyY2VJbWFnZS5zcmMgPSBgJHtpbWFnZXNbYCR7cmVzb3VyY2V9LnBuZ2BdfWA7IGNoYW1waW9uUmVzb3VyY2VJbWFnZS5hbHQgPSBgJHtyZXNvdXJjZX0ucG5nYDtcblxuICBjaGFtcGlvblJlc291cmNlLmFwcGVuZENoaWxkKGNoYW1waW9uUmVzb3VyY2VOYW1lKTtcbiAgY2hhbXBpb25SZXNvdXJjZS5hcHBlbmRDaGlsZChjaGFtcGlvblJlc291cmNlSW1hZ2UpO1xuICBjaGFtcGlvblJvbGVzLmFwcGVuZENoaWxkKGNoYW1waW9uUmVzb3VyY2UpO1xuXG4gIGNvbnN0IGNoYW1waW9uTG9yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbi1sb3JlJyk7XG4gIGNoYW1waW9uTG9yZS50ZXh0Q29udGVudCA9IGNoYW1waW9uRGF0YS5sb3JlO1xuXG4gIGNvbnN0IGFiaWxpdHlQaWN0dXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYmlsaXR5LXBpY3R1cmVzJyk7XG5cbiAgY29uc3QgcGFzc2l2ZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBwYXNzaXZlSW1nLmNsYXNzTmFtZSA9ICdzcGVsbC1pbWcgY2xpY2tlZCc7XG4gIHBhc3NpdmVJbWcuaWQgPSAncGFzc2l2ZS1pbWcnO1xuICBwYXNzaXZlSW1nLnNyYyA9IGNoYW1waW9uRGF0YS5wYXNzaXZlLnBhc3NpdmVJbWdVcmw7XG4gIHBhc3NpdmVJbWcuYWx0ID0gYCR7Y2hhbXBpb25EYXRhLnBhc3NpdmUucGFzc2l2ZU5hbWV9LnBuZ2A7XG4gIGFiaWxpdHlQaWN0dXJlcy5hcHBlbmRDaGlsZChwYXNzaXZlSW1nKTtcblxuICBjb25zdCBpbWdMYWJlbCA9IFsnUScsICdXJywgJ0UnLCAnUiddO1xuICBsZXQgaW5kZXggPSAwO1xuXG4gIGNoYW1waW9uRGF0YS5zcGVsbHMuZm9yRWFjaCgoc3BlbGwpID0+IHtcbiAgICBjb25zdCBzcGVsbEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHNwZWxsSW1nLmNsYXNzTmFtZSA9ICdzcGVsbC1pbWcnO1xuICAgIC8vIEdyYWJzIGxldHRlciBRLCBXLCBFIG9yIFIgd2hpY2ggdW5pcXVlbHkgaWRlbnRpZmllcyBhIGNoYW1waW9ucyBhYmlsaXRpZXNcbiAgICBzcGVsbEltZy5pZCA9IGAke2ltZ0xhYmVsW2luZGV4XX0taW1nYDtcbiAgICBzcGVsbEltZy5zcmMgPSBzcGVsbC5pbWdVcmw7XG4gICAgc3BlbGxJbWcuYWx0ID0gYCR7c3BlbGwubmFtZX0ucG5nYDtcbiAgICBhYmlsaXR5UGljdHVyZXMuYXBwZW5kQ2hpbGQoc3BlbGxJbWcpO1xuICAgIGluZGV4ICs9IDE7XG4gIH0pO1xuXG4gIGNvbnN0IGFiaWxpdGllc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYmlsaXRpZXMtY29udGFpbmVyJyk7XG4gIC8vIGxvb3BzIHRocm91Z2ggY2hhbXBpb24ncyBwYXNzaXZlIGFuZCA0IGFiaWxpdGllc1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkgKz0gMSkge1xuICAgIGNvbnN0IGFiaWxpdHlJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYWJpbGl0eU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgYWJpbGl0eURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGFiaWxpdHlOYW1lLmNsYXNzTmFtZSA9ICdhYmlsaXR5LW5hbWUnOyBhYmlsaXR5RGVzY3JpcHRpb24uY2xhc3NOYW1lID0gJ2FiaWxpdHktZGVzY3JpcHRpb24nO1xuICAgIGFiaWxpdHlJbmZvLmFwcGVuZENoaWxkKGFiaWxpdHlOYW1lKTsgYWJpbGl0eUluZm8uYXBwZW5kQ2hpbGQoYWJpbGl0eURlc2NyaXB0aW9uKTtcbiAgICBjb25zdCBhYmlsaXR5TGFiZWwgPSBbJ1Bhc3NpdmUnLCAnUScsICdXJywgJ0UnLCAnUiddO1xuXG4gICAgaWYgKGkgPT09IDApIHtcbiAgICAgIGFiaWxpdHlJbmZvLmNsYXNzTmFtZSA9ICdhYmlsaXR5LWluZm8gYWN0aXZlJztcbiAgICAgIGFiaWxpdHlJbmZvLmlkID0gJ3Bhc3NpdmUtYWJpbGl0eSc7XG4gICAgICBhYmlsaXR5TmFtZS50ZXh0Q29udGVudCA9IGAke2NoYW1waW9uRGF0YS5wYXNzaXZlLnBhc3NpdmVOYW1lfSAoJHthYmlsaXR5TGFiZWxbaV19KWA7XG4gICAgICBhYmlsaXR5RGVzY3JpcHRpb24uaW5uZXJIVE1MID0gY2hhbXBpb25EYXRhLnBhc3NpdmUucGFzc2l2ZURlc2NyaXB0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb29sZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIGNvb2xkb3duLmNsYXNzTmFtZSA9ICdhYmlsaXR5LWNvb2xkb3duJztcbiAgICAgIGNvb2xkb3duLnRleHRDb250ZW50ID0gYENvb2xkb3duOiAke2NoYW1waW9uRGF0YS5zcGVsbHNbaSAtIDFdLmNvb2xkb3dufSBzZWNvbmRzYDtcbiAgICAgIGFiaWxpdHlJbmZvLmFwcGVuZENoaWxkKGNvb2xkb3duKTtcblxuICAgICAgYWJpbGl0eUluZm8uY2xhc3NOYW1lID0gJ2FiaWxpdHktaW5mbyc7XG4gICAgICBhYmlsaXR5SW5mby5pZCA9IGAke2FiaWxpdHlMYWJlbFtpXX0tYWJpbGl0eWA7XG4gICAgICBhYmlsaXR5TmFtZS50ZXh0Q29udGVudCA9IGAke2NoYW1waW9uRGF0YS5zcGVsbHNbaSAtIDFdLm5hbWV9ICgke2FiaWxpdHlMYWJlbFtpXX0pYDtcbiAgICAgIGFiaWxpdHlEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBjaGFtcGlvbkRhdGEuc3BlbGxzW2kgLSAxXS5kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBhYmlsaXRpZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJpbGl0eUluZm8pO1xuICB9XG5cbiAgY29uc3QgY2hhbXBpb25UaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLXRpcHMnKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDIgJiYgaSA8IGNoYW1waW9uRGF0YS50aXBzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgY2hhbXBpb25UaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY2hhbXBpb25UaXAuY2xhc3NOYW1lID0gJ2NoYW1waW9uLXRpcCc7XG4gICAgY2hhbXBpb25UaXAudGV4dENvbnRlbnQgPSBgJHtjaGFtcGlvbkRhdGEudGlwc1tpXX1gO1xuICAgIGNoYW1waW9uVGlwcy5hcHBlbmRDaGlsZChjaGFtcGlvblRpcCk7XG4gIH1cbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgeyBjaGFtcGlvbkRldGFpbHNNb2RhbCB9O1xuIiwiaW1wb3J0IEVsZW1lbnRDcmVhdGlvbiBmcm9tICcuLi9oZWxwZXJzL2VsZW1lbnRDcmVhdGlvbic7XG5cbmNvbnN0IGNoYW1waW9uU2tpbnNNb2RhbCA9IGFzeW5jIChjaGFtcGlvbkRldGFpbHMpID0+IHtcbiAgY29uc3QgeyBza2lucyB9ID0gY2hhbXBpb25EZXRhaWxzO1xuICBjb25zdCBza2luc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNza2lucy1jb250YWluZXInKTtcbiAgY29uc3Qgc2tpbk5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2tpbi1uYW1lJyk7XG4gIGNvbnN0IHNraW5JbWFnZXNDb250YWluZXIgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnc2tpbi1pbWFnZXMtY29udGFpbmVyJywgc2tpbnNDb250YWluZXIpO1xuXG4gIHNraW5zLmZvckVhY2goKHNraW4pID0+IHtcbiAgICBpZiAoc2tpbi5udW0gPT09IDApIHtcbiAgICAgIGNvbnN0IHNob3duSW1hZ2VDb250YWluZXIgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzQW5kSWQoXG4gICAgICAgICdkaXYnLCAnc2tpbi1pbWFnZS1jb250YWluZXIgc2hvd24nLCBgRGVmYXVsdCAke2NoYW1waW9uRGV0YWlscy5uYW1lfWAsIHNraW5JbWFnZXNDb250YWluZXIsXG4gICAgICApO1xuICAgICAgc2tpbk5hbWUudGV4dENvbnRlbnQgPSBgRGVmYXVsdCAke2NoYW1waW9uRGV0YWlscy5uYW1lfWA7XG4gICAgICBjb25zdCBzaG93bkltYWdlVXJsID0gYGh0dHA6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuL2ltZy9jaGFtcGlvbi9zcGxhc2gvJHtjaGFtcGlvbkRldGFpbHMuaWR9XyR7c2tpbi5udW19LmpwZ2A7XG4gICAgICBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MoJ3NraW4taW1hZ2UnLCBzaG93bkltYWdlQ29udGFpbmVyLCBzaG93bkltYWdlVXJsLCAnZGVmYXVsdCBza2luJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGltYWdlQ29udGFpbmVyID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCAnc2tpbi1pbWFnZS1jb250YWluZXInLCBza2luLm5hbWUsIHNraW5JbWFnZXNDb250YWluZXIpO1xuICAgICAgY29uc3QgaW1hZ2VVcmwgPSBgaHR0cDovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vaW1nL2NoYW1waW9uL3NwbGFzaC8ke2NoYW1waW9uRGV0YWlscy5pZH1fJHtza2luLm51bX0uanBnYDtcbiAgICAgIEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEltYWdlRWxlbWVudFdpdGhDbGFzcygnc2tpbi1pbWFnZScsIGltYWdlQ29udGFpbmVyLCBpbWFnZVVybCwgc2tpbi5uYW1lKTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2hhbXBpb25Ta2luc01vZGFsO1xuIiwiaW1wb3J0IEl0ZW1JbmZvIGZyb20gJy4uL2NoYW1waW9uRGF0YS9pdGVtSW5mbyc7XG5pbXBvcnQge1xuICByZW5kZXJIZWFkZXJEZXRhaWxzLFxuICByZW5kZXJTdGF0T3ZlcnZpZXcsXG4gIHJlbmRlckRhbWFnZVN0YXRzLFxuICByZW5kZXJDaGFtcGlvbkxhbmUsXG4gIHJlbmRlck1hdGNodXBzSW5mbyxcbn0gZnJvbSAnLi9yZW5kZXJIZWxwZXJzJztcbmltcG9ydCBFbGVtZW50Q3JlYXRpb24gZnJvbSAnLi4vaGVscGVycy9lbGVtZW50Q3JlYXRpb24nO1xuXG5jb25zdCBjaGFtcGlvblN0YXRzTW9kYWwgPSBhc3luYyAoY2hhbXBpb25EYXRhLCBjaGFtcGlvblN0YXRzKSA9PiB7XG4gIHJlbmRlckhlYWRlckRldGFpbHMoY2hhbXBpb25EYXRhLCAnc3RhdHMnKTtcblxuICBjb25zdCBzdGF0c092ZXJ2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLXN0YXRzLW92ZXJ2aWV3Jyk7XG5cbiAgcmVuZGVyU3RhdE92ZXJ2aWV3KHN0YXRzT3ZlcnZpZXcsICdXaW4gUmF0ZScsIGNoYW1waW9uU3RhdHMud2luUmF0ZSk7XG4gIHJlbmRlclN0YXRPdmVydmlldyhzdGF0c092ZXJ2aWV3LCAnUGljayBSYXRlJywgY2hhbXBpb25TdGF0cy5waWNrUmF0ZSk7XG4gIC8qIE1ha2UgZXZlcnkgbGV0dGVyIGV4Y2VwdCB0aGUgZmlyc3QgbG93ZXIgY2FzZSAqL1xuICBjb25zdCBsYW5lID0gYCR7Y2hhbXBpb25TdGF0cy5sYW5lWzBdICsgY2hhbXBpb25TdGF0cy5sYW5lLnN1YnN0cmluZygxKS50b0xvd2VyQ2FzZSgpfWA7XG4gIHJlbmRlckNoYW1waW9uTGFuZShzdGF0c092ZXJ2aWV3LCBsYW5lKTtcblxuICAvKiBTZXRzIHRoZSB2YWx1ZXMgYW5kIHBlcmNlbnRhZ2VzIGZvciB0aGUgYXZlcmFnZSBkYW1hZ2Ugc2VjdGlvbiBvZiB0aGUgc3RhdHMgbW9kYWwgKi9cblxuICBjb25zdCB0cnVlRGFtYWdlQ2lyY2xlU3Ryb2tlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RydWUtZGFtYWdlLXN0cm9rZScpO1xuICBjb25zdCBwaHlzaWNhbERhbWFnZUNpcmNsZVN0cm9rZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwaHlzaWNhbC1kYW1hZ2Utc3Ryb2tlJyk7XG4gIGNvbnN0IG1hZ2ljRGFtYWdlQ2lyY2xlU3Ryb2tlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hZ2ljLWRhbWFnZS1zdHJva2UnKTtcblxuICBjb25zdCB0cnVlRGFtYWdlUGVyY2VudCA9IE1hdGgucm91bmQoY2hhbXBpb25TdGF0cy5kYW1hZ2VQZXJNYXRjaC50cnVlRGFtYWdlLnBlcmNlbnRhZ2UpO1xuICBjb25zdCBwaHlzaWNhbERhbWFnZVBlcmNlbnQgPSBNYXRoLnJvdW5kKGNoYW1waW9uU3RhdHMuZGFtYWdlUGVyTWF0Y2gucGh5c2ljYWxEYW1hZ2UucGVyY2VudGFnZSk7XG4gIGNvbnN0IG1hZ2ljRGFtYWdlUGVyY2VudCA9IE1hdGgucm91bmQoY2hhbXBpb25TdGF0cy5kYW1hZ2VQZXJNYXRjaC5tYWdpY0RhbWFnZS5wZXJjZW50YWdlKTtcblxuICB0cnVlRGFtYWdlQ2lyY2xlU3Ryb2tlLnN0eWxlLnN0cm9rZURhc2hhcnJheSA9IGAke3RydWVEYW1hZ2VQZXJjZW50fSAxMDBgO1xuICBwaHlzaWNhbERhbWFnZUNpcmNsZVN0cm9rZS5zdHlsZS5zdHJva2VEYXNoYXJyYXkgPSBgJHtwaHlzaWNhbERhbWFnZVBlcmNlbnQgKyB0cnVlRGFtYWdlUGVyY2VudH0gMTAwYDtcbiAgbWFnaWNEYW1hZ2VDaXJjbGVTdHJva2Uuc3R5bGUuc3Ryb2tlRGFzaGFycmF5ID0gJzEwMCwgMTAwJztcbiAgY29uc3QgdG90YWxEYW1hZ2VUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvdGFsLWRhbWFnZS10ZXh0Jyk7XG4gIHRvdGFsRGFtYWdlVGV4dC50ZXh0Q29udGVudCA9IE1hdGgucm91bmQoY2hhbXBpb25TdGF0cy5kYW1hZ2VQZXJNYXRjaC50b3RhbERhbWFnZS52YWx1ZSk7XG5cbiAgY29uc3QgdHJ1ZURhbWFnZVZhbHVlID0gTWF0aC5yb3VuZChjaGFtcGlvblN0YXRzLmRhbWFnZVBlck1hdGNoLnRydWVEYW1hZ2UudmFsdWUpO1xuICBjb25zdCBwaHlzaWNhbERhbWFnZVZhbHVlID0gTWF0aC5yb3VuZChjaGFtcGlvblN0YXRzLmRhbWFnZVBlck1hdGNoLnBoeXNpY2FsRGFtYWdlLnZhbHVlKTtcbiAgY29uc3QgbWFnaWNEYW1hZ2VWYWx1ZSA9IE1hdGgucm91bmQoY2hhbXBpb25TdGF0cy5kYW1hZ2VQZXJNYXRjaC5tYWdpY0RhbWFnZS52YWx1ZSk7XG5cbiAgcmVuZGVyRGFtYWdlU3RhdHMoJ3BoeXNpY2FsJywgcGh5c2ljYWxEYW1hZ2VWYWx1ZSwgcGh5c2ljYWxEYW1hZ2VQZXJjZW50KTtcbiAgcmVuZGVyRGFtYWdlU3RhdHMoJ21hZ2ljJywgbWFnaWNEYW1hZ2VWYWx1ZSwgbWFnaWNEYW1hZ2VQZXJjZW50KTtcbiAgcmVuZGVyRGFtYWdlU3RhdHMoJ3RydWUnLCB0cnVlRGFtYWdlVmFsdWUsIHRydWVEYW1hZ2VQZXJjZW50KTtcblxuICAvKiBSZW5kZXJzIHRoZSBpdGVtIGJ1aWxkcyBzZWN0aW9uIG9mIHRoZSBzdGF0cyBtb2RhbCAqL1xuICBjb25zdCB7IGl0ZW1TZXRzIH0gPSBjaGFtcGlvblN0YXRzO1xuICBjb25zdCBhbGxJdGVtcyA9IGF3YWl0IEl0ZW1JbmZvLmdldEFsbEl0ZW1zKCk7XG4gIGNvbnN0IGNoYW1waW9uSXRlbUJ1aWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbi1pdGVtLWJ1aWxkcycpO1xuICBjb25zdCBpdGVtU2V0c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpdGVtU2V0c0NvbnRhaW5lci5jbGFzc05hbWUgPSAnaXRlbS1zZXRzLWNvbnRhaW5lcic7XG4gIGNoYW1waW9uSXRlbUJ1aWxkcy5hcHBlbmRDaGlsZChpdGVtU2V0c0NvbnRhaW5lcik7XG5cbiAgaXRlbVNldHMuZm9yRWFjaCgoaXRlbVNldCkgPT4ge1xuICAgIGNvbnN0IGl0ZW1TZXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtU2V0Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdpdGVtLXNldC1jb250YWluZXInO1xuICAgIGl0ZW1TZXRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1TZXRDb250YWluZXIpO1xuXG4gICAgaXRlbVNldC5mb3JFYWNoKChpdGVtSWQpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBuZXcgSXRlbUluZm8oaXRlbUlkKTtcbiAgICAgIGNvbnN0IGl0ZW1JbmZvID0gaXRlbS5nZXRJdGVtSW5mbyhhbGxJdGVtcyk7XG4gICAgICBpZiAoIWl0ZW1JbmZvLnRhZ3MuaW5jbHVkZXMoJ1RyaW5rZXQnKSAmJiAhaXRlbUluZm8udGFncy5pbmNsdWRlcygnQ29uc3VtYWJsZScpKSB7XG4gICAgICAgIGNvbnN0IG1haW5Db21wb25lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWFpbkNvbXBvbmVudENvbnRhaW5lci5jbGFzc05hbWUgPSAnbWFpbi1jb21wb25lbnQtY29udGFpbmVyJztcbiAgICAgICAgaXRlbVNldENvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluQ29tcG9uZW50Q29udGFpbmVyKTtcblxuICAgICAgICBjb25zdCBtYWluSXRlbSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdtYWluLWl0ZW0nLCBtYWluQ29tcG9uZW50Q29udGFpbmVyKTtcblxuICAgICAgICBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MoJ2l0ZW0taW1nJywgbWFpbkl0ZW0sIGl0ZW1JbmZvLmltYWdlVXJsLCBgJHtpdGVtSWR9LnBuZ2ApO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1EZXRhaWxzQ29udGFpbmVyID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2l0ZW0tZGV0YWlscy1jb250YWluZXInLCBtYWluSXRlbSk7XG5cbiAgICAgICAgY29uc3QgbmFtZUVsZW1lbnQgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2l0ZW0tbmFtZScsIGl0ZW1EZXRhaWxzQ29udGFpbmVyKTtcbiAgICAgICAgbmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSBpdGVtSW5mby5uYW1lO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkVsZW1lbnQgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2l0ZW0tZGVzY3JpcHRpb24nLCBpdGVtRGV0YWlsc0NvbnRhaW5lcik7XG4gICAgICAgIGRlc2NyaXB0aW9uRWxlbWVudC5pbm5lckhUTUwgPSBpdGVtSW5mby5kZXNjcmlwdGlvbjtcbiAgICAgICAgY29uc3QgaXRlbUNvc3QgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnaXRlbS1jb3N0JywgaXRlbURldGFpbHNDb250YWluZXIpO1xuICAgICAgICBjb25zdCBjb3N0TGFiZWwgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2Nvc3QtbGFiZWwnLCBpdGVtQ29zdCk7XG4gICAgICAgIGNvc3RMYWJlbC50ZXh0Q29udGVudCA9ICdHb2xkOiAnO1xuICAgICAgICBjb25zdCBjb3N0QW1vdW50ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdjb3N0LWFtb3VudCcsIGl0ZW1Db3N0KTtcbiAgICAgICAgY29zdEFtb3VudC50ZXh0Q29udGVudCA9IGl0ZW1JbmZvLmNvc3Q7XG5cbiAgICAgICAgLyogVGhlIGNvbXBvbmVudCBpdGVtcyBhcmUgdGhlIHNtYWxsZXIgaXRlbXMgdGhhdCBhcHBlYXIgYmVsb3cgdGhlIG1haW4gaXRlbSAqL1xuICAgICAgICBjb25zdCB7IGNvbXBvbmVudEl0ZW1zIH0gPSBpdGVtSW5mbztcbiAgICAgICAgY29uc3QgY29tcG9uZW50SXRlbXNDb250YWluZXIgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnY29tcG9uZW50LWl0ZW1zLWNvbnRhaW5lcicsIG1haW5Db21wb25lbnRDb250YWluZXIpO1xuXG4gICAgICAgIGNvbXBvbmVudEl0ZW1zLmZvckVhY2goKGNvbXBvbmVudEl0ZW0pID0+IHtcbiAgICAgICAgICBjb25zdCBjb21wb25lbnRJdGVtRWxlbWVudCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdjb21wb25lbnQtaXRlbScsIGNvbXBvbmVudEl0ZW1zQ29udGFpbmVyKTtcbiAgICAgICAgICBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MoJ2NvbXBvbmVudC1pdGVtLWltZycsXG4gICAgICAgICAgICBjb21wb25lbnRJdGVtRWxlbWVudCwgY29tcG9uZW50SXRlbS5pbWFnZVVybCwgYCR7Y29tcG9uZW50SXRlbS5uYW1lfWApO1xuXG4gICAgICAgICAgY29uc3QgY29tcG9uZW50SXRlbURldGFpbHNDb250YWluZXIgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnY29tcG9uZW50LWl0ZW0tZGV0YWlscy1jb250YWluZXInLCBjb21wb25lbnRJdGVtRWxlbWVudCk7XG5cbiAgICAgICAgICBjb25zdCBjb21wb25lbnRJdGVtTmFtZSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnY29tcG9uZW50LWl0ZW0tbmFtZScsIGNvbXBvbmVudEl0ZW1EZXRhaWxzQ29udGFpbmVyKTtcbiAgICAgICAgICBjb21wb25lbnRJdGVtTmFtZS50ZXh0Q29udGVudCA9IGNvbXBvbmVudEl0ZW0ubmFtZTtcbiAgICAgICAgICBjb25zdCBjb21wb25lbnRJdGVtQ29zdCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdjb21wb25lbnQtaXRlbS1jb3N0JywgY29tcG9uZW50SXRlbURldGFpbHNDb250YWluZXIpO1xuICAgICAgICAgIGNvbnN0IGNvbXBvbmVudEl0ZW1Db3N0TGFiZWwgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2NvbXBvbmVudC1pdGVtLWNvc3QtbGFiZWwnLCBjb21wb25lbnRJdGVtQ29zdCk7XG4gICAgICAgICAgY29tcG9uZW50SXRlbUNvc3RMYWJlbC50ZXh0Q29udGVudCA9ICdHb2xkOiAnO1xuICAgICAgICAgIGNvbnN0IGNvbXBvbmVudEl0ZW1BbW91bnQgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2NvbXBvbmVudC1pdGVtLWFtb3VudCcsIGNvbXBvbmVudEl0ZW1Db3N0KTtcbiAgICAgICAgICBjb21wb25lbnRJdGVtQW1vdW50LnRleHRDb250ZW50ID0gY29tcG9uZW50SXRlbS5jb3N0O1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIC8qIFJlbmRlcnMgdGhlIG1hdGNodXBzIHNlY3Rpb24gb2YgdGhlIGNoYW1waW9uIG1vZGFsIHN0YXRzIHBhZ2UgKi9cbiAgY29uc3QgYmVzdE1hdGNodXBzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iZXN0LW1hdGNodXBzLXNlY3Rpb24nKTtcbiAgY29uc3QgYmVzdE1hdGNodXBzRWxlbWVudCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdiZXN0LW1hdGNodXBzIG1hdGNodXBzJywgYmVzdE1hdGNodXBzU2VjdGlvbik7XG4gIGNvbnN0IGJlc3RNYXRjaHVwc0RhdGEgPSBjaGFtcGlvblN0YXRzLmJlc3RNYXRjaFVwcztcbiAgcmVuZGVyTWF0Y2h1cHNJbmZvKGJlc3RNYXRjaHVwc0VsZW1lbnQsIGJlc3RNYXRjaHVwc0RhdGEpO1xuXG4gIGNvbnN0IHdvcnN0TWF0Y2h1cHNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcnN0LW1hdGNodXBzLXNlY3Rpb24nKTtcbiAgY29uc3Qgd29yc3RNYXRjaHVwc0VsZW1lbnQgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnd29yc3QtbWF0Y2h1cHMgbWF0Y2h1cHMnLCB3b3JzdE1hdGNodXBzU2VjdGlvbik7XG4gIGNvbnN0IHdvcnN0TWF0Y2h1cHNEYXRhID0gY2hhbXBpb25TdGF0cy53b3JzdE1hdGNoVXBzO1xuICByZW5kZXJNYXRjaHVwc0luZm8od29yc3RNYXRjaHVwc0VsZW1lbnQsIHdvcnN0TWF0Y2h1cHNEYXRhKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNoYW1waW9uU3RhdHNNb2RhbDtcbiIsIi8vIFJlbmRlcnMgRE9NIGVsZW1lbnRzIHRoYXQgYXJlIHJlcGVhdGVkIGFjcm9zcyB0ZW1wbGF0ZXNcblxuaW1wb3J0IEVsZW1lbnRDcmVhdGlvbiBmcm9tICcuLi9oZWxwZXJzL2VsZW1lbnRDcmVhdGlvbic7XG5cbmNvbnN0IGltcG9ydEFsbCA9IChyKSA9PiB7XG4gIGNvbnN0IGltYWdlcyA9IHt9O1xuICByLmtleXMoKS5mb3JFYWNoKChpdGVtKSA9PiB7IGltYWdlc1tpdGVtLnJlcGxhY2UoJy4vJywgJycpXSA9IHIoaXRlbSk7IH0pO1xuICByZXR1cm4gaW1hZ2VzO1xufTtcblxuY29uc3QgaW1hZ2VzID0gaW1wb3J0QWxsKHJlcXVpcmUuY29udGV4dCgnLi4vaW1hZ2VzJywgZmFsc2UsIC9cXC4ocG5nfGpwZT9nfHN2ZykkLykpO1xuXG5jb25zdCByZW5kZXJIZWFkZXJEZXRhaWxzID0gKGNoYW1waW9uRGF0YSwgbW9kYWxDb250YWluZXIpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7bW9kYWxDb250YWluZXJ9LWNvbnRhaW5lcmApO1xuICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZCA9IGBuby1yZXBlYXQgdXJsKGh0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi9pbWcvY2hhbXBpb24vc3BsYXNoLyR7Y2hhbXBpb25EYXRhLmlkfV8wLmpwZykgNzAlIDgwJWA7XG4gIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb3Zlcic7XG5cbiAgY29uc3QgY2hhbXBpb25UaXRsZSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tdGl0bGUnKTtcbiAgY2hhbXBpb25UaXRsZS50ZXh0Q29udGVudCA9IGNoYW1waW9uRGF0YS50aXRsZTtcblxuICBjb25zdCBjaGFtcGlvbk5hbWUgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLW5hbWUnKTtcbiAgY2hhbXBpb25OYW1lLnRleHRDb250ZW50ID0gY2hhbXBpb25EYXRhLm5hbWU7XG59O1xuXG4vLyBSZW5kZXJzIHdpbiBvciBwaWNrIHJhdGUgdG8gdGhlIERPTVxuY29uc3QgcmVuZGVyU3RhdE92ZXJ2aWV3ID0gKHN0YXRzT3ZlcnZpZXcsIHJhdGVUZXh0LCByYXRlVHlwZSkgPT4ge1xuICBjb25zdCBjaGFtcGlvblJhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNvbnN0IHJhdGVWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAvLyBUdXJucyAnV2luIFJhdGUnIGludG8gJ3dpbi1yYXRlJ1xuICBjb25zdCBsb3dlckNhc2VUZXh0ID0gcmF0ZVRleHQucmVwbGFjZSgnICcsICctJykudG9Mb3dlckNhc2UoKTtcblxuICBjaGFtcGlvblJhdGUuY2xhc3NOYW1lID0gbG93ZXJDYXNlVGV4dDtcbiAgbGFiZWwuaWQgPSBgJHtsb3dlckNhc2VUZXh0fS1sYWJlbGA7XG4gIGxhYmVsLmNsYXNzTmFtZSA9ICdsYWJlbCc7XG4gIHJhdGVWYWx1ZS5jbGFzc05hbWUgPSBgJHtsb3dlckNhc2VUZXh0fS12YWx1ZWA7XG4gIGxhYmVsLnRleHRDb250ZW50ID0gcmF0ZVRleHQ7XG4gIHJhdGVWYWx1ZS50ZXh0Q29udGVudCA9IGAke3JhdGVUeXBlfSVgO1xuXG4gIGNoYW1waW9uUmF0ZS5hcHBlbmRDaGlsZChsYWJlbCk7IGNoYW1waW9uUmF0ZS5hcHBlbmRDaGlsZChyYXRlVmFsdWUpO1xuICBzdGF0c092ZXJ2aWV3LmFwcGVuZENoaWxkKGNoYW1waW9uUmF0ZSk7XG59O1xuXG5jb25zdCByZW5kZXJDaGFtcGlvbkxhbmUgPSAoc3RhdHNPdmVydmlldywgbGFuZSkgPT4ge1xuICBjb25zdCBjaGFtcGlvbkxhbmVJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNoYW1waW9uTGFuZUluZm8uY2xhc3NOYW1lID0gJ2xhbmUtaW5mbyc7XG4gIGNvbnN0IGxhbmVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBsYW5lVGV4dC5jbGFzc05hbWUgPSAnbGFuZS10ZXh0IGxhYmVsJztcbiAgbGFuZVRleHQudGV4dENvbnRlbnQgPSBsYW5lO1xuICBjb25zdCBsYW5lSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBsYW5lSWNvbi5jbGFzc05hbWUgPSAnbGFuZS1pY29uIGNoYW1waW9uLXJvbGUtaW1hZ2UnO1xuICBsYW5lSWNvbi5zcmMgPSBgJHtpbWFnZXNbYCR7bGFuZX0ucG5nYF19YDtcbiAgbGFuZUljb24uYWx0ID0gYCR7bGFuZX0ucG5nYDtcbiAgY2hhbXBpb25MYW5lSW5mby5hcHBlbmRDaGlsZChsYW5lVGV4dCk7XG4gIGNoYW1waW9uTGFuZUluZm8uYXBwZW5kQ2hpbGQobGFuZUljb24pO1xuICBzdGF0c092ZXJ2aWV3LmFwcGVuZENoaWxkKGNoYW1waW9uTGFuZUluZm8pO1xufTtcblxuY29uc3QgcmVuZGVyRGFtYWdlU3RhdHMgPSAoZGFtYWdlVHlwZSwgZGFtYWdlVmFsdWUsIGRhbWFnZVBlcmNlbnRhZ2UpID0+IHtcbiAgY29uc3QgZGFtYWdlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZGFtYWdlVHlwZX0tZGFtYWdlLWNvbnRhaW5lcmApO1xuXG4gIGNvbnN0IGRhbWFnZVN0YXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRhbWFnZVN0YXRzLmNsYXNzTmFtZSA9ICdkYW1hZ2Utc3RhdHMnO1xuXG4gIGNvbnN0IGRhbWFnZVZhbHVlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgY29uc3QgZGFtYWdlUGVyY2VudGFnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGRhbWFnZVZhbHVlRWxlbWVudC5pZCA9IGAke2RhbWFnZVR5cGV9LXZhbHVlYDsgZGFtYWdlUGVyY2VudGFnZUVsZW1lbnQuaWQgPSBgJHtkYW1hZ2VUeXBlfS1wZXJjZW50YWdlYDtcbiAgZGFtYWdlVmFsdWVFbGVtZW50LnRleHRDb250ZW50ID0gYCR7ZGFtYWdlVmFsdWV9YDtcbiAgZGFtYWdlUGVyY2VudGFnZUVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtkYW1hZ2VQZXJjZW50YWdlfSVgO1xuXG4gIGRhbWFnZVN0YXRzLmFwcGVuZENoaWxkKGRhbWFnZVZhbHVlRWxlbWVudCk7IGRhbWFnZVN0YXRzLmFwcGVuZENoaWxkKGRhbWFnZVBlcmNlbnRhZ2VFbGVtZW50KTtcbiAgZGFtYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhbWFnZVN0YXRzKTtcbn07XG5cbmNvbnN0IHJlbmRlck1hdGNodXBzSW5mbyA9IChtYXRjaHVwc0VsZW1lbnQsIG1hdGNodXBzRGF0YSkgPT4ge1xuICBtYXRjaHVwc0RhdGEuZm9yRWFjaCgobWF0Y2h1cCkgPT4ge1xuICAgIGNvbnN0IG1hdGNodXBJbmZvID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ21hdGNodXAtaW5mbycsIG1hdGNodXBzRWxlbWVudCk7XG4gICAgY29uc3QgZW5lbXlDaGFtcGlvbk5hbWUgPSBtYXRjaHVwWzBdO1xuICAgIGNvbnN0IGVuZW15Q2hhbXBpb25JbWdVcmwgPSBgaHR0cDovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vMTEuMjIuMS9pbWcvY2hhbXBpb24vJHtlbmVteUNoYW1waW9uTmFtZX0ucG5nYDtcbiAgICBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAnZW5lbXktY2hhbXBpb24taW1nJywgbWF0Y2h1cEluZm8sIGVuZW15Q2hhbXBpb25JbWdVcmwsIGBzbWFsbC0ke2VuZW15Q2hhbXBpb25OYW1lfS5wbmdgLFxuICAgICk7XG5cbiAgICBjb25zdCBtYXRjaHVwU3RhdHMgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnbWF0Y2h1cC1zdGF0cycsIG1hdGNodXBJbmZvKTtcbiAgICBjb25zdCBlbmVteUNoYW1waW9uTmFtZUVsZW1lbnQgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2VuZW15LWNoYW1waW9uLW5hbWUnLCBtYXRjaHVwU3RhdHMpO1xuICAgIGVuZW15Q2hhbXBpb25OYW1lRWxlbWVudC50ZXh0Q29udGVudCA9IGVuZW15Q2hhbXBpb25OYW1lO1xuICAgIGNvbnN0IHdpbnJhdGVBZ2FpbnN0ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ3dpbnJhdGUtYWdhaW5zdCcsIG1hdGNodXBTdGF0cyk7XG4gICAgY29uc3Qgd2lucmF0ZUFnYWluc3RMYWJlbCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnd2lucmF0ZS1hZ2FpbnN0LWxhYmVsJywgd2lucmF0ZUFnYWluc3QpO1xuICAgIHdpbnJhdGVBZ2FpbnN0TGFiZWwudGV4dENvbnRlbnQgPSAnV2lucmF0ZTogJztcbiAgICBjb25zdCBjb2xvciA9IG1hdGNodXBzRWxlbWVudC5jbGFzc05hbWUgPT09ICdiZXN0LW1hdGNodXBzIG1hdGNodXBzJyA/ICdibHVlJyA6ICdyZWQnO1xuICAgIGNvbnN0IHdpbnJhdGVBZ2FpbnN0UGVyY2VudGFnZSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCBgd2lucmF0ZS1hZ2FpbnN0LXBlcmNlbnRhZ2UgJHtjb2xvcn1gLCB3aW5yYXRlQWdhaW5zdCk7XG4gICAgd2lucmF0ZUFnYWluc3RQZXJjZW50YWdlLnRleHRDb250ZW50ID0gYCR7bWF0Y2h1cFsxXS53aW5SYXRlQWdhaW5zdC50b0ZpeGVkKDApfSVgO1xuICAgIGNvbnN0IGdhbWVzUGxheWVkQWdhaW5zdCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnZ2FtZXMtcGxheWVkLWFnYWluc3QnLCBtYXRjaHVwU3RhdHMpO1xuICAgIGdhbWVzUGxheWVkQWdhaW5zdC50ZXh0Q29udGVudCA9IGBHYW1lczogJHttYXRjaHVwWzFdLm1hdGNoZXN9YDtcbiAgfSk7XG59O1xuXG5leHBvcnQge1xuICByZW5kZXJIZWFkZXJEZXRhaWxzLFxuICByZW5kZXJTdGF0T3ZlcnZpZXcsXG4gIHJlbmRlckNoYW1waW9uTGFuZSxcbiAgcmVuZGVyRGFtYWdlU3RhdHMsXG4gIGltYWdlcyxcbiAgcmVuZGVyTWF0Y2h1cHNJbmZvLFxufTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1yYXNpbi1ibGFjazogIzFkMWUyYztcXG4gIC0tdHJhbnNwYXJlbnQtcmFzaW4tYmxhY2s6ICMxZDFlMmM5MTtcXG4gIC0tZGFyay1nb2xkOiAjOTI3NTQzO1xcbiAgLS1saWdodC1nb2xkOiAjYzdhYjZlO1xcbn1cXG5cXG4jZnJvbnQtcGFnZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAtNDtcXG59XFxuI2Zyb250LXBhZ2UgLmZyb250LXBhZ2UtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFlbSAwO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci13aWR0aDogMCAwIDJweCAwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2Zyb250LXBhZ2UgLnNlYXJjaC1jb250YWluZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuI2Zyb250LXBhZ2UgLnNlYXJjaCB7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIG1pbi13aWR0aDogMThlbTtcXG4gIGJhY2tncm91bmQ6ICNlMmU0ZTk7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBib3JkZXItcmFkaXVzOiAwLjVlbSAwLjVlbTtcXG4gIG1pbi1oZWlnaHQ6IDIuNmVtO1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcbiNmcm9udC1wYWdlIC5zcGxhc2gtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2Zyb250LXBhZ2UgLmJhY2tkcm9wLWltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiA1MHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogIzIyMjtcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuI2Zyb250LXBhZ2UgLmJhY2tkcm9wIHtcXG4gIHotaW5kZXg6IC0yO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbiNmcm9udC1wYWdlIC5iYWNrZHJvcDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMxNDE4MWQsIHJnYmEoMjAsIDI0LCAyOSwgMC45ODU1NjUpIDAuOTclLCByZ2JhKDIwLCAyNCwgMjksIDAuOTQ1MTMxKSAyLjA3ODMzJSwgcmdiYSgyMCwgMjQsIDI5LCAwLjg4MzAwNykgMy4yOTY2NyUsIHJnYmEoMjAsIDI0LCAyOSwgMC44MDM0OTkpIDQuNjAxNjclLCByZ2JhKDIwLCAyNCwgMjksIDAuNzEwOTE1KSA1Ljk2NjY3JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjYwOTU2MykgNy4zNjUlLCByZ2JhKDIwLCAyNCwgMjksIDAuNTAzNzUpIDguNzcxNjclLCByZ2JhKDIwLCAyNCwgMjksIDAuMzk3Nzg0KSAxMC4xNiUsIHJnYmEoMjAsIDI0LCAyOSwgMC4yOTU5NzMpIDExLjUwNSUsIHJnYmEoMjAsIDI0LCAyOSwgMC4yMDI2MjQpIDEyLjc4JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjEyMjA0NCkgMTMuOTU4MzMlLCByZ2JhKDIwLCAyNCwgMjksIDAuMDU4NTQyMykgMTUuMDE2NjclLCByZ2JhKDIwLCAyNCwgMjksIDAuMDE2NDI0OSkgMTUuOTI4MzMlLCByZ2JhKDIwLCAyNCwgMjksIDApIDE2LjY2NjY3JSwgcmdiYSgyMCwgMjQsIDI5LCAwKSA4My4zMzMzMyUsIHJnYmEoMjAsIDI0LCAyOSwgMC4wMTY0MjQ5KSA4NC4wNzE2NyUsIHJnYmEoMjAsIDI0LCAyOSwgMC4wNTg1NDIzKSA4NC45ODMzMyUsIHJnYmEoMjAsIDI0LCAyOSwgMC4xMjIwNDQpIDg2LjA0MTY3JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjIwMjYyNCkgODcuMjIlLCByZ2JhKDIwLCAyNCwgMjksIDAuMjk1OTczKSA4OC40OTUlLCByZ2JhKDIwLCAyNCwgMjksIDAuMzk3Nzg0KSA4OS44NCUsIHJnYmEoMjAsIDI0LCAyOSwgMC41MDM3NSkgOTEuMjI4MzMlLCByZ2JhKDIwLCAyNCwgMjksIDAuNjA5NTYzKSA5Mi42MzUlLCByZ2JhKDIwLCAyNCwgMjksIDAuNzEwOTE1KSA5NC4wMzMzMyUsIHJnYmEoMjAsIDI0LCAyOSwgMC44MDM0OTkpIDk1LjM5ODMzJSwgcmdiYSgyMCwgMjQsIDI5LCAwLjg4MzAwNykgOTYuNzAzMzMlLCByZ2JhKDIwLCAyNCwgMjksIDAuOTQ1MTMxKSA5Ny45MjE2NyUsIHJnYmEoMjAsIDI0LCAyOSwgMC45ODU1NjUpIDk5LjAzJSwgIzE0MTgxZCksIGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMTQxODFkLCAjMTQxODFkIDIxLjQ4MTQ4JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjk4NTU2NSkgMjMuNjM3MDQlLCByZ2JhKDIwLCAyNCwgMjksIDAuOTQ1MTMxKSAyNi4xJSwgcmdiYSgyMCwgMjQsIDI5LCAwLjg4MzAwNykgMjguODA3NDElLCByZ2JhKDIwLCAyNCwgMjksIDAuODAzNDk5KSAzMS43MDc0MSUsIHJnYmEoMjAsIDI0LCAyOSwgMC43MTA5MTUpIDM0Ljc0MDc0JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjYwOTU2MykgMzcuODQ4MTUlLCByZ2JhKDIwLCAyNCwgMjksIDAuNTAzNzUpIDQwLjk3NDA3JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjM5Nzc4NCkgNDQuMDU5MjYlLCByZ2JhKDIwLCAyNCwgMjksIDAuMjk1OTczKSA0Ny4wNDgxNSUsIHJnYmEoMjAsIDI0LCAyOSwgMC4yMDI2MjQpIDQ5Ljg4MTQ4JSwgcmdiYSgyMCwgMjQsIDI5LCAwLjEyMjA0NCkgNTIuNSUsIHJnYmEoMjAsIDI0LCAyOSwgMC4wNTg1NDIzKSA1NC44NTE4NSUsIHJnYmEoMjAsIDI0LCAyOSwgMC4wMTY0MjQ5KSA1Ni44Nzc3OCUsIHJnYmEoMjAsIDI0LCAyOSwgMCkgNTguNTE4NTIlKTtcXG59XFxuI2Zyb250LXBhZ2UgLnNsb2dhbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtYXJnaW4tdG9wOiAxN2VtO1xcbn1cXG4jZnJvbnQtcGFnZSAuc2xvZ2FuLTEge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmFybG93XFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuI2Zyb250LXBhZ2UgLnNsb2dhbi0yIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMi4xcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIkJhcmxvd1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcbiNmcm9udC1wYWdlIC5tb2JpbGUtZGlzY292ZXItYnRuLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbiNmcm9udC1wYWdlIC5mcm9udC1wYWdlLWJ0biB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxufVxcbiNmcm9udC1wYWdlIC5mcm9udC1wYWdlLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG59XFxuI2Zyb250LXBhZ2UgLm1vYmlsZS1zZWFyY2gtY29udGFpbmVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDNlbTtcXG59XFxuI2Zyb250LXBhZ2UgLm1vYmlsZS1zZWFyY2gge1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBtaW4td2lkdGg6IDE4ZW07XFxuICBiYWNrZ3JvdW5kOiAjZTJlNGU5O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgYm9yZGVyLXJhZGl1czogMC41ZW0gMC41ZW07XFxuICBtaW4taGVpZ2h0OiAyLjZlbTtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG4jZnJvbnQtcGFnZSAuZGlzY292ZXItYnRuLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtYXJnaW4tYm90dG9tOiAzZW07XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4jZnJvbnQtcGFnZSAuZGlzY292ZXItYnRuIHtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBjb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDc1JSAxMCUvMCUgNzUlO1xcbn1cXG4jZnJvbnQtcGFnZSAuZGlzY292ZXItYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbn1cXG4jZnJvbnQtcGFnZSAubmF2aWdhdGlvbi1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2Zyb250LXBhZ2UgLmxlZ2FsLWJvaWxlcnBsYXRlIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBwYWRkaW5nOiAwIDEuM2VtIDAuNmVtIDEuM2VtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDk1MHB4KSB7XFxuICAjZnJvbnQtcGFnZSAubW9iaWxlLXNlYXJjaC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgI2Zyb250LXBhZ2UgLnNlYXJjaC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxuICAjZnJvbnQtcGFnZSAubW9iaWxlLWRpc2NvdmVyLWJ0bi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgI2Zyb250LXBhZ2UgLmRpc2NvdmVyLWJ0bi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG4gICNmcm9udC1wYWdlIC5sZWdhbC1ib2lsZXJwbGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBwYWRkaW5nLXRvcDogMC42ZW07XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXNoZWV0cy9mcm9udHBhZ2Uuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFHQTtFQUNFLHNCQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBQUY7O0FBR0E7RUFDRSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUFGO0FBRUU7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQUo7QUFHRTtFQUNFLGFBQUE7QUFESjtBQUlFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUZKO0FBTUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFKSjtBQU9FO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUxKO0FBUUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBTko7QUFTRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSw4bURBQUE7QUFQSjtBQVVFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVJKO0FBV0U7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQVRKO0FBWUU7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQVZKO0FBYUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQVhKO0FBY0U7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7QUFaSjtBQWNFO0VBQ0UsbUNBQUE7QUFaSjtBQWVFO0VBQ0Usa0JBQUE7QUFiSjtBQWdCRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFkSjtBQWlCRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBZko7QUFrQkU7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUFoQko7QUFtQkU7RUFDRSxtQ0FBQTtBQWpCSjtBQW9CRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBbEJKO0FBcUJFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBbkJKO0FBc0JFO0VBQ0U7SUFDRSxhQUFBO0VBcEJKO0VBdUJFO0lBQ0UsYUFBQTtFQXJCSjtBQUNGO0FBd0JFO0VBQ0U7SUFDRSxhQUFBO0VBdEJKO0VBeUJFO0lBQ0UsY0FBQTtFQXZCSjtFQTBCRTtJQUNFLGNBQUE7SUFDQSxrQkFBQTtFQXhCSjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFxufVxcblxcbjpyb290IHtcXG4gIC0tcmFzaW4tYmxhY2s6ICMxZDFlMmM7XFxuICAtLXRyYW5zcGFyZW50LXJhc2luLWJsYWNrOiAjMWQxZTJjOTE7XFxuICAtLWRhcmstZ29sZDogIzkyNzU0MztcXG4gIC0tbGlnaHQtZ29sZDogI2M3YWI2ZTtcXG59XFxuXFxuI2Zyb250LXBhZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogLTQ7XFxuXFxuICAuZnJvbnQtcGFnZS1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMWVtIDA7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gICAgYm9yZGVyLXdpZHRoOiAwIDAgMnB4IDA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuc2VhcmNoLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAuc2VhcmNoIHtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIG1pbi13aWR0aDogMThlbTtcXG4gICAgYmFja2dyb3VuZDogI2UyZTRlOTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tcmFzaW4tYmxhY2spO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbSAwLjVlbTtcXG4gICAgbWluLWhlaWdodDogMi42ZW07XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcblxcbiAgfVxcblxcbiAgLnNwbGFzaC1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5iYWNrZHJvcC1pbWcge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDUwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogIzIyMjtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgfVxcblxcbiAgLmJhY2tkcm9wIHtcXG4gICAgei1pbmRleDogLTI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICBcXG4gIC5iYWNrZHJvcDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIzE0MTgxZCxyZ2JhKDIwLDI0LDI5LC45ODU1NjUpIC45NyUscmdiYSgyMCwyNCwyOSwuOTQ1MTMxKSAyLjA3ODMzJSxyZ2JhKDIwLDI0LDI5LC44ODMwMDcpIDMuMjk2NjclLHJnYmEoMjAsMjQsMjksLjgwMzQ5OSkgNC42MDE2NyUscmdiYSgyMCwyNCwyOSwuNzEwOTE1KSA1Ljk2NjY3JSxyZ2JhKDIwLDI0LDI5LC42MDk1NjMpIDcuMzY1JSxyZ2JhKDIwLDI0LDI5LC41MDM3NSkgOC43NzE2NyUscmdiYSgyMCwyNCwyOSwuMzk3Nzg0KSAxMC4xNiUscmdiYSgyMCwyNCwyOSwuMjk1OTczKSAxMS41MDUlLHJnYmEoMjAsMjQsMjksLjIwMjYyNCkgMTIuNzglLHJnYmEoMjAsMjQsMjksLjEyMjA0NCkgMTMuOTU4MzMlLHJnYmEoMjAsMjQsMjksLjA1ODU0MjMpIDE1LjAxNjY3JSxyZ2JhKDIwLDI0LDI5LC4wMTY0MjQ5KSAxNS45MjgzMyUscmdiYSgyMCwyNCwyOSwwKSAxNi42NjY2NyUscmdiYSgyMCwyNCwyOSwwKSA4My4zMzMzMyUscmdiYSgyMCwyNCwyOSwuMDE2NDI0OSkgODQuMDcxNjclLHJnYmEoMjAsMjQsMjksLjA1ODU0MjMpIDg0Ljk4MzMzJSxyZ2JhKDIwLDI0LDI5LC4xMjIwNDQpIDg2LjA0MTY3JSxyZ2JhKDIwLDI0LDI5LC4yMDI2MjQpIDg3LjIyJSxyZ2JhKDIwLDI0LDI5LC4yOTU5NzMpIDg4LjQ5NSUscmdiYSgyMCwyNCwyOSwuMzk3Nzg0KSA4OS44NCUscmdiYSgyMCwyNCwyOSwuNTAzNzUpIDkxLjIyODMzJSxyZ2JhKDIwLDI0LDI5LC42MDk1NjMpIDkyLjYzNSUscmdiYSgyMCwyNCwyOSwuNzEwOTE1KSA5NC4wMzMzMyUscmdiYSgyMCwyNCwyOSwuODAzNDk5KSA5NS4zOTgzMyUscmdiYSgyMCwyNCwyOSwuODgzMDA3KSA5Ni43MDMzMyUscmdiYSgyMCwyNCwyOSwuOTQ1MTMxKSA5Ny45MjE2NyUscmdiYSgyMCwyNCwyOSwuOTg1NTY1KSA5OS4wMyUsIzE0MTgxZCksbGluZWFyLWdyYWRpZW50KDBkZWcsIzE0MTgxZCwjMTQxODFkIDIxLjQ4MTQ4JSxyZ2JhKDIwLDI0LDI5LC45ODU1NjUpIDIzLjYzNzA0JSxyZ2JhKDIwLDI0LDI5LC45NDUxMzEpIDI2LjElLHJnYmEoMjAsMjQsMjksLjg4MzAwNykgMjguODA3NDElLHJnYmEoMjAsMjQsMjksLjgwMzQ5OSkgMzEuNzA3NDElLHJnYmEoMjAsMjQsMjksLjcxMDkxNSkgMzQuNzQwNzQlLHJnYmEoMjAsMjQsMjksLjYwOTU2MykgMzcuODQ4MTUlLHJnYmEoMjAsMjQsMjksLjUwMzc1KSA0MC45NzQwNyUscmdiYSgyMCwyNCwyOSwuMzk3Nzg0KSA0NC4wNTkyNiUscmdiYSgyMCwyNCwyOSwuMjk1OTczKSA0Ny4wNDgxNSUscmdiYSgyMCwyNCwyOSwuMjAyNjI0KSA0OS44ODE0OCUscmdiYSgyMCwyNCwyOSwuMTIyMDQ0KSA1Mi41JSxyZ2JhKDIwLDI0LDI5LC4wNTg1NDIzKSA1NC44NTE4NSUscmdiYSgyMCwyNCwyOSwuMDE2NDI0OSkgNTYuODc3NzglLHJnYmEoMjAsMjQsMjksMCkgNTguNTE4NTIlKTtcXG4gIH1cXG5cXG4gIC5zbG9nYW4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW4tdG9wOiAxN2VtO1xcbiAgfVxcblxcbiAgLnNsb2dhbi0xIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ0JhcmxvdycsIHNhbnMtc2VyaWY7ICBcXG4gIH1cXG5cXG4gIC5zbG9nYW4tMiB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAyLjFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdCYXJsb3cnLCBzYW5zLXNlcmlmOyAgXFxuICB9XFxuXFxuICAubW9iaWxlLWRpc2NvdmVyLWJ0bi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5mcm9udC1wYWdlLWJ0biB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgfVxcbiAgLmZyb250LXBhZ2UtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICB9XFxuXFxuICAubW9iaWxlLXNlYXJjaC1jb250YWluZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAzZW07XFxuICB9XFxuXFxuICAubW9iaWxlLXNlYXJjaCB7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBtaW4td2lkdGg6IDE4ZW07XFxuICAgIGJhY2tncm91bmQ6ICNlMmU0ZTk7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW0gMC41ZW07XFxuICAgIG1pbi1oZWlnaHQ6IDIuNmVtO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gIH1cXG5cXG4gIC5kaXNjb3Zlci1idG4tY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzZW07XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAuZGlzY292ZXItYnRuIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgY29sb3I6IHZhcigtLXJhc2luLWJsYWNrKTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1yYXNpbi1ibGFjayk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDc1JSAxMCUgLyAwJSA3NSU7XFxuICB9XFxuXFxuICAuZGlzY292ZXItYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ29sZClcXG4gIH1cXG5cXG4gIC5uYXZpZ2F0aW9uLXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmxlZ2FsLWJvaWxlcnBsYXRlIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDAuOGVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcGFkZGluZzogMCAxLjNlbSAwLjZlbSAxLjNlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIH1cXG5cXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5NTBweCkge1xcbiAgICAubW9iaWxlLXNlYXJjaC1jb250YWluZXIge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLnNlYXJjaC1jb250YWluZXIge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gICAgLm1vYmlsZS1kaXNjb3Zlci1idG4tY29udGFpbmVyIHtcXG4gICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5kaXNjb3Zlci1idG4tY29udGFpbmVyIHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcblxcbiAgICAubGVnYWwtYm9pbGVycGxhdGUge1xcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICAgIHBhZGRpbmctdG9wOiAwLjZlbTtcXG4gICAgfVxcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1kYXJrLWdvbGQ6ICM5Mjc1NDM7XFxuICAtLWxpZ2h0LWdvbGQ6ICNjN2FiNmU7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTtcXG4gIHBhZGRpbmc6IDJyZW0gMDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcbi5tb2RhbCAjbWFpbi1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMDtcXG4gIG1heC13aWR0aDogNzUlO1xcbiAgbWluLWhlaWdodDogNDlyZW07XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4ubW9kYWwgLm1vZGFsLWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwYmY7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ubW9kYWwgLm1vZGFsLW5hdi1saW5rcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG4ubW9kYWwgLm1vZGFsLW5hdi1saW5rIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcbi5tb2RhbCAubW9kYWwtbmF2LWxpbms6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxufVxcbi5tb2RhbCAuY2hhbXBpb24taGVhZGluZyB7XFxuICBtYXJnaW46IGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tbmFtZSB7XFxuICBtYXJnaW46IGF1dG87XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tdGl0bGUge1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbWFyZ2luLXRvcDogMC41ZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1yb2xlcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tcm9sZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXJlc291cmNlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tcm9sZS1pbWFnZSB7XFxuICBoZWlnaHQ6IDMuNXJlbTtcXG4gIHdpZHRoOiAzLjVyZW07XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tcmVzb3VyY2UtaW1hZ2Uge1xcbiAgaGVpZ2h0OiAzLjVyZW07XFxuICB3aWR0aDogMy41cmVtO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXJvbGUtbmFtZSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXJlc291cmNlLW5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1tYWluLWluZm8ge1xcbiAgcGFkZGluZzogMS44cmVtO1xcbiAgbWF4LXdpZHRoOiAzNHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBsYXN0IGJhc2VsaW5lO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XFxuICBmcm9tIHtcXG4gICAgdG9wOiAtMzAwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICB0byB7XFxuICAgIHRvcDogMDtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBhbmltYXRldG9wIHtcXG4gIGZyb20ge1xcbiAgICB0b3A6IC0zMDBweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdG9wOiAwO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG4ubW9kYWwgLmxvcmUtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBiZjtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbn1cXG4ubW9kYWwgLnN1YmhlYWRpbmcge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMC40ZW07XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tb2RhbCAuYWJpbGl0aWVzLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwYmY7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIHdpZHRoOiAyMGVtO1xcbn1cXG4ubW9kYWwgLmFiaWxpdGllcy1oZWFkaW5nIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1vZGFsIC5hYmlsaXR5LXBpY3R1cmVzIHtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuLm1vZGFsIC5hYmlsaXR5LWRlc2NyaXB0aW9uIHtcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tZGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1leHRyYS1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ubW9kYWwgLmFiaWxpdHktaW5mbyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubW9kYWwgLmFiaWxpdHktaW5mby5hY3RpdmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5tb2RhbCAuc3BlbGwtaW1nIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMCAwLjVyZW07XFxuICBoZWlnaHQ6IDMuM3JlbTtcXG4gIHdpZHRoOiAzLjNyZW07XFxufVxcbi5tb2RhbCAuc3BlbGwtaW1nLmNsaWNrZWQge1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci13aWR0aDogNHB4O1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXRpcHMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMGJmO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC42ZW07XFxuICBsaW5lLWhlaWdodDogMS40O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XFxuICBtYXgtd2lkdGg6IDM0cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXRpcCB7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcbi5tb2RhbCAjc3RhdHMtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXgtd2lkdGg6IDc1JTtcXG4gIG1pbi1oZWlnaHQ6IDQ5cmVtO1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXN0YXRzLW92ZXJ2aWV3IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxuICBtYXgtd2lkdGg6IDI1cmVtO1xcbiAgbWluLXdpZHRoOiAyMHJlbTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuLm1vZGFsIC53aW4tcmF0ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLm1vZGFsIC5waWNrLXJhdGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5tb2RhbCAubGFuZS1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1vZGFsIC5waWNrLXJhdGUtdmFsdWUge1xcbiAgbWFyZ2luLXRvcDogMC40ZW07XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxufVxcbi5tb2RhbCAud2luLXJhdGUtdmFsdWUge1xcbiAgbWFyZ2luLXRvcDogMC40ZW07XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxufVxcbi5tb2RhbCAubGFiZWwge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLWRhbWFnZS1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMGJmO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC42ZW07XFxuICBsaW5lLWhlaWdodDogMS40O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBtYXgtaGVpZ2h0OiAxNy41cmVtO1xcbn1cXG4ubW9kYWwgLmRhbWFnZS1oZWFkaW5nIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1vZGFsIC5jaXJjdWxhci1jaGFydCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1heC13aWR0aDogODAlO1xcbiAgbWF4LWhlaWdodDogMjUwcHg7XFxufVxcbi5tb2RhbCAuY2lyY2xlIHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2Utd2lkdGg6IDIuMjtcXG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcXG4gIGFuaW1hdGlvbjogcHJvZ3Jlc3MgMXMgZWFzZS1vdXQgZm9yd2FyZHM7XFxufVxcbi5tb2RhbCAjbWFnaWMtZGFtYWdlLXN0cm9rZSB7XFxuICBzdHJva2U6ICMzNWE3ZmY7XFxufVxcbi5tb2RhbCAjcGh5c2ljYWwtZGFtYWdlLXN0cm9rZSB7XFxuICBzdHJva2U6ICNmZjU5NjQ7XFxufVxcbi5tb2RhbCAjdHJ1ZS1kYW1hZ2Utc3Ryb2tlIHtcXG4gIHN0cm9rZTogI2ZmZTc0YztcXG59XFxuQGtleWZyYW1lcyBwcm9ncmVzcyB7XFxuICAwJSB7XFxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDAgMTAwO1xcbiAgfVxcbn1cXG4ubW9kYWwgLnRvdGFsLWRhbWFnZS10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogNHB4O1xcbiAgdGV4dC1hbmNob3I6IG1pZGRsZTtcXG4gIGZpbGw6IHdoaXRlO1xcbn1cXG4ubW9kYWwgLnRvdGFsLWRhbWFnZS1sYWJlbCB7XFxuICBmb250LXNpemU6IDNweDtcXG4gIHRleHQtYW5jaG9yOiBtaWRkbGU7XFxuICBmaWxsOiB2YXIoLS1kYXJrLWdvbGQpO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLW1haW4tc3RhdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLWl0ZW0tYnVpbGRzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBiZjtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgbWF4LWhlaWdodDogMTcuNXJlbTtcXG59XFxuLm1vZGFsIC5kYW1hZ2Utc3RhdHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmRhbWFnZS1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXgtaGVpZ2h0OiA5MiU7XFxuICBoZWlnaHQ6IDkyJTtcXG59XFxuLm1vZGFsIC5kYW1hZ2UtdHlwZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuLm1vZGFsIC5kYW1hZ2Utc3RhdHMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuLm1vZGFsICNwaHlzaWNhbC1kYW1hZ2UtbGFiZWwge1xcbiAgY29sb3I6ICNmZjU5NjQ7XFxufVxcbi5tb2RhbCAjbWFnaWMtZGFtYWdlLWxhYmVsIHtcXG4gIGNvbG9yOiAjMzVhN2ZmO1xcbn1cXG4ubW9kYWwgI3RydWUtZGFtYWdlLWxhYmVsIHtcXG4gIGNvbG9yOiAjZmZlNzRjO1xcbn1cXG4ubW9kYWwgLml0ZW0tZGV0YWlscy1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMGJmO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC42ZW07XFxuICBsaW5lLWhlaWdodDogMS40O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMDtcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHdpZHRoOiA0MCU7XFxuICByaWdodDogMWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMy41ZW07XFxufVxcbi5tb2RhbCAuaXRlbS1uYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5tb2RhbCAubWFpbi1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxufVxcbi5tb2RhbCAuY29zdC1sYWJlbCB7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ29sZCk7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5tb2RhbCAuY29tcG9uZW50LWl0ZW1zLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ubW9kYWwgLmNvbXBvbmVudC1pdGVtLW5hbWUge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4ubW9kYWwgLmNvc3QtYW1vdW50IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLm1vZGFsIC5jb21wb25lbnQtaXRlbS1jb3N0LWxhYmVsIHtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLm1vZGFsIC5jb21wb25lbnQtaXRlbS1hbW91bnQge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4ubW9kYWwgLmNvbXBvbmVudC1pdGVtLWRldGFpbHMtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBiZjtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjA7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ubW9kYWwgLml0ZW0tc2V0cy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXgtaGVpZ2h0OiA5MCU7XFxufVxcbi5tb2RhbCAuaXRlbS1zZXQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGJvcmRlci13aWR0aDogMnB4O1xcbiAgcGFkZGluZzogMC40ZW07XFxufVxcbi5tb2RhbCAubWFpbi1jb21wb25lbnQtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBiZjtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2MDQwMDgzO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luOiAwZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxufVxcbi5tb2RhbCAuaXRlbS1pbWcge1xcbiAgbWF4LXdpZHRoOiAyLjdlbTtcXG4gIG1heC1oZWlnaHQ6IDIuN2VtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgcGFkZGluZy1ib3R0b206IDA7XFxufVxcbi5tb2RhbCAuY29tcG9uZW50LWl0ZW0taW1nIHtcXG4gIG1heC13aWR0aDogMS44ZW07XFxuICBtYXgtaGVpZ2h0OiAxLjhlbTtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1tYXRjaHVwcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwYmY7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIG1heC1oZWlnaHQ6IDI1LjJyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDAgMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuLm1vZGFsIC5tYXRjaHVwcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBtYXgtd2lkdGg6IDI0cmVtO1xcbn1cXG4ubW9kYWwgLm1hdGNodXAtaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE2MWE7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIG1hcmdpbjogYXV0byAwLjVlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG59XFxuLm1vZGFsIC5tYXRjaHVwLWluZm86aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTYxYWM5O1xcbn1cXG4ubW9kYWwgLm1hdGNodXAtc3RhdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBcXFwiQXBwbGUgU0QgR290aGljIE5lb1xcXCIsIEFwcGxlR290aGljLCBEb3R1bSwgQXJpYWwsIFRhaG9tYTtcXG59XFxuLm1vZGFsIC5lbmVteS1jaGFtcGlvbi1pbWcge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgbWF4LWhlaWdodDogM2VtO1xcbiAgbWF4LXdpZHRoOiAzZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG59XFxuLm1vZGFsIC53aW5yYXRlLWFnYWluc3QtcGVyY2VudGFnZS5ibHVlIHtcXG4gIGNvbG9yOiAjMzVhN2ZmO1xcbn1cXG4ubW9kYWwgLndpbnJhdGUtYWdhaW5zdC1wZXJjZW50YWdlLnJlZCB7XFxuICBjb2xvcjogI2ZmNTk2NDtcXG59XFxuLm1vZGFsICNza2lucy1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMDtcXG4gIG1heC13aWR0aDogNzUlO1xcbiAgbWluLWhlaWdodDogNDlyZW07XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtaW4taGVpZ2h0OiAwO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXgtd2lkdGg6IDk5JTtcXG4gIHdpZHRoOiA5OSU7XFxufVxcbi5tb2RhbCAjc2tpbnMtY29udGFpbmVyIC5tb2RhbC1oZWFkZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuLm1vZGFsIC5za2luLWltYWdlLWNvbnRhaW5lciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLm1vZGFsIC5za2luLWltYWdlLWNvbnRhaW5lci5zaG93biB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLm1vZGFsIC5za2luLWltYWdlIHtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm1vZGFsIC5za2luLW5hbWUge1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcbi5tb2RhbCAjc2tpbnMtY29udGFpbmVyIC5jaGFtcGlvbi1oZWFkaW5nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHdpZHRoOiA0MCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmltZy1zY3JvbGwtYXJyb3cge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuLm1vZGFsIC5pbWctc2Nyb2xsLWFycm93OmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdvbGQpO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTEyMHB4KSB7XFxuICAubW9kYWwgLmNvbXBvbmVudC1pdGVtLWltZyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAubW9kYWwgLml0ZW0tc2V0cy1jb250YWluZXIge1xcbiAgICBtaW4taGVpZ2h0OiA4MCU7XFxuICB9XFxuICAubW9kYWwgLml0ZW0tZGV0YWlscy1jb250YWluZXIge1xcbiAgICBtaW4td2lkdGg6IDcwJTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDg2N3B4KSB7XFxuICAubW9kYWwgLml0ZW0taW1nIHtcXG4gICAgbWF4LWhlaWdodDogMi4ycmVtO1xcbiAgICBtYXgtd2lkdGg6IDIuMnJlbTtcXG4gIH1cXG4gIC5tb2RhbCAuY2hhbXBpb24tZGV0YWlscyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gIH1cXG4gIC5tb2RhbCAuYWJpbGl0aWVzLWNvbnRhaW5lciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIG1heC13aWR0aDogMjByZW07XFxuICB9XFxuICAubW9kYWwgLmxvcmUtY29udGFpbmVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIC5tb2RhbCAuaXRlbS1zZXRzLWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB9XFxuICAubW9kYWwgLml0ZW0tc2V0LWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAubW9kYWwgLm1hdGNodXBzIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5tb2RhbCAubWF0Y2h1cC1pbmZvIHtcXG4gICAgbWFyZ2luOiAwLjVlbSBhdXRvO1xcbiAgfVxcbiAgLm1vZGFsICNtYWluLWNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG4gIC5tb2RhbCAjc3RhdHMtY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogODQwcHgpIHtcXG4gIC5tb2RhbCAuZGFtYWdlLWluZm8ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgfVxcbiAgLm1vZGFsIC5nYW1lcy1wbGF5ZWQtYWdhaW5zdCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAubW9kYWwgLmRhbWFnZS1zdGF0cy1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTYwcHgpIHtcXG4gIC5tb2RhbCAuY2hhbXBpb24tbWFpbi1zdGF0cyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAubW9kYWwgLml0ZW0tc2V0LWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB9XFxuICAubW9kYWwgLml0ZW0tc2V0cy1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLm1vZGFsIC5jaGFtcGlvbi1kYW1hZ2UtY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgLm1vZGFsIC5kYW1hZ2Utc3RhdHMtaW5mbyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAubW9kYWwgLmRhbWFnZS1pbmZvIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICB9XFxuICAubW9kYWwgLmRhbWFnZS10eXBlLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMC4yZW0gYXV0bztcXG4gIH1cXG4gIC5tb2RhbCAuY2lyY3VsYXItY2hhcnQge1xcbiAgICBtYXgtaGVpZ2h0OiAxOTVweDtcXG4gICAgbWF4LXdpZHRoOiA4MCU7XFxuICB9XFxuICAubW9kYWwgLmRhbWFnZS1zdGF0cy1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLm1vZGFsIC5jaGFtcGlvbi1yb2xlIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xcbiAgfVxcbiAgLm1vZGFsIC5jaGFtcGlvbi1yZXNvdXJjZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcXG4gIH1cXG4gIC5tb2RhbCAuY2hhbXBpb24tcm9sZXMge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICB9XFxuICAubW9kYWwgLnNwZWxsLWltZyB7XFxuICAgIGhlaWdodDogMi44ZW07XFxuICAgIHdpZHRoOiAyLjhlbTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNDE0cHgpIHtcXG4gIC5tb2RhbCAuY2hhbXBpb24tc3RhdHMtb3ZlcnZpZXcge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG1pbi13aWR0aDogMTdyZW07XFxuICB9XFxuICAubW9kYWwgLmNoYW1waW9uLW5hbWUge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMzAwcHgpIHtcXG4gIC5tb2RhbCAjc2tpbnMtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXgtd2lkdGg6IDcwJTtcXG4gICAgbWluLWhlaWdodDogYXV0bztcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDE5NTBweCkge1xcbiAgLm1vZGFsICNza2lucy1jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDUwJTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlc2hlZXRzL21vZGFscy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtBQUNGOztBQThEQTtFQUNFLGtEQUFBO0FBM0RGOztBQThEQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLG9DQUFBO0FBM0RGO0FBNkRFO0VBaENBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSw0RUFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFzQkUsY0FBQTtBQS9DSjtBQWtERTtFQWpGQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQTBFRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQXZDSjtBQTBDRTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUF4Q0o7QUEyQ0U7RUFDRSxlQUFBO0VBNURGLGlCQUFBO0VBQ0Esb0JBQUE7QUFvQkY7QUEyQ0U7RUFDRSx1QkFBQTtBQXpDSjtBQTRDRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBMUNKO0FBNkNFO0VBQ0UsWUFBQTtBQTNDSjtBQThDRTtFQUNFLHdCQUFBO0VBQ0EsZUFBQTtFQWpGRixpQkFBQTtFQUNBLG9CQUFBO0FBc0NGO0FBOENFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBNUNKO0FBK0NFO0VBbkdBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBdURGO0FBMkNFO0VBdkdBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBK0RGO0FBdUNFO0VBckhBLGNBQUE7RUFDQSxhQUFBO0FBaUZGO0FBdUNFO0VBekhBLGNBQUE7RUFDQSxhQUFBO0FBcUZGO0FBdUNFO0VBeEhBLGdCQUFBO0VBQ0EsZUFBQTtBQW9GRjtBQXVDRTtFQTVIQSxnQkFBQTtFQUNBLGVBQUE7QUF3RkY7QUF1Q0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQXJDSjtBQXdDRTtFQUNFO0lBQ0UsV0FBQTtJQUNBLFVBQUE7RUF0Q0o7RUF3Q0U7SUFDRSxNQUFBO0lBQ0EsVUFBQTtFQXRDSjtBQUNGO0FBeUNFO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsVUFBQTtFQXZDSjtFQXlDRTtJQUNFLE1BQUE7SUFDQSxVQUFBO0VBdkNKO0FBQ0Y7QUEwQ0U7RUF2TEEsMkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFnSkY7QUFrQ0U7RUE5S0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtBQStJRjtBQWdDRTtFQS9MQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQXdMRSxXQUFBO0FBckJKO0FBd0JFO0VBQ0Usa0JBQUE7QUF0Qko7QUF5QkU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtBQXZCSjtBQTBCRTtFQXZLQSxpQkFBQTtFQUNBLG9CQUFBO0FBZ0pGO0FBMEJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQXhCSjtBQTJCRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQXpCSjtBQTRCRTtFQUNFLGFBQUE7QUExQko7QUE2QkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUEzQko7QUE4QkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQTVCSjtBQStCRTtFQUNFLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtBQTdCSjtBQWdDRTtFQXBQQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQTZPRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFyQko7QUF3QkU7RUFDRSxrQkFBQTtBQXRCSjtBQXlCRTtFQXJOQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsNEVBQUE7RUFDQSxrQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBMk1FLGFBQUE7QUFYSjtBQWNFO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBak9GLGlCQUFBO0VBQ0Esb0JBQUE7RUFrT0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFYSjtBQWNFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBWko7QUFlRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQWJKO0FBZ0JFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFkSjtBQWlCRTtFQUNFLGlCQUFBO0VBQ0Esd0JBQUE7QUFmSjtBQWtCRTtFQUNFLGlCQUFBO0VBQ0Esd0JBQUE7QUFoQko7QUFtQkU7RUFDRSxlQUFBO0FBakJKO0FBb0JFO0VBN1NBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBc1NFLG1CQUFBO0FBVEo7QUFZRTtFQUNFLGtCQUFBO0FBVko7QUFhRTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBWEo7QUFjRTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0NBQUE7QUFaSjtBQWVFO0VBQ0UsZUFBQTtBQWJKO0FBZ0JFO0VBQ0UsZUFBQTtBQWRKO0FBaUJFO0VBQ0UsZUFBQTtBQWZKO0FBa0JFO0VBQ0U7SUFDRSx1QkFBQTtFQWhCSjtBQUNGO0FBbUJFO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQWpCSjtBQW9CRTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBbEJKO0FBcUJFO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0FBbkJKO0FBc0JFO0VBdldBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBZ1dFLG1CQUFBO0FBWEo7QUFjRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFaSjtBQWVFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBYko7QUFnQkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBZEo7QUFpQkU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FBZko7QUFrQkU7RUFDRSxjQUFBO0FBaEJKO0FBbUJFO0VBQ0UsY0FBQTtBQWpCSjtBQW9CRTtFQUNFLGNBQUE7QUFsQko7QUFxQkU7RUFsWkEsMkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUEyWUUsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQVZKO0FBYUU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFYSjtBQWNFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBWko7QUFlRTtFQUNFLHdCQUFBO0VBQ0EsZUFBQTtBQWJKO0FBZ0JFO0VBQ0UsYUFBQTtBQWRKO0FBaUJFO0VBQ0UsZUFBQTtBQWZKO0FBa0JFO0VBQ0UsZUFBQTtBQWhCSjtBQW1CRTtFQUNFLHdCQUFBO0VBQ0EsZUFBQTtBQWpCSjtBQW9CRTtFQUNFLGVBQUE7QUFsQko7QUFxQkU7RUFwY0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUE2YkUsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUFWSjtBQWFFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFYSjtBQWNFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBWko7QUFlRTtFQTlkQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQXVkRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFKSjtBQU9FO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsaUJBQUE7QUFOSjtBQVNFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQVBKO0FBVUU7RUE1ZkEsMkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFxZkUsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FBQ0o7QUFFRTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FBQUo7QUFHRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFESjtBQUlFO0VBQ0UsMkJBQUE7QUFGSjtBQUtFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtHQUFBO0FBSEo7QUFPRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQUxKO0FBUUU7RUFDRSxjQUFBO0FBTko7QUFTRTtFQUNFLGNBQUE7QUFQSjtBQVVFO0VBdGdCQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsNEVBQUE7RUFDQSxrQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBNGZFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUFJSjtBQURFO0VBQ0UsZ0JBQUE7QUFHSjtBQUFFO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQUVKO0FBQ0U7RUFDRSxjQUFBO0FBQ0o7QUFFRTtFQUNFLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQUFKO0FBR0U7RUFDRSxjQUFBO0FBREo7QUFJRTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQUZKO0FBS0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFISjtBQU1FO0VBQ0UsdUJBQUE7QUFKSjtBQU9FO0VBQ0U7SUFDRSxhQUFBO0VBTEo7RUFRRTtJQUNFLGVBQUE7RUFOSjtFQVNFO0lBQ0UsY0FBQTtFQVBKO0FBQ0Y7QUFVRTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxpQkFBQTtFQVJKO0VBV0U7SUFDRSw4QkFBQTtFQVRKO0VBWUU7SUFDRSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtFQVZKO0VBYUU7SUFDRSxrQkFBQTtFQVhKO0FBQ0Y7QUFjRTtFQUNFO0lBQ0UsbUJBQUE7RUFaSjtFQWVFO0lBQ0Usc0JBQUE7RUFiSjtFQWdCRTtJQUNFLHNCQUFBO0VBZEo7RUFpQkU7SUFDRSxrQkFBQTtFQWZKO0VBa0JFO0lBQ0UsZUFBQTtFQWhCSjtFQW1CRTtJQUNFLGVBQUE7RUFqQko7QUFDRjtBQW9CRTtFQUNFO0lBQ0UsOEJBQUE7SUFDQSw4QkFBQTtJQUNBLGVBQUE7RUFsQko7RUFxQkU7SUFDRSxhQUFBO0VBbkJKO0VBc0JFO0lBQ0UsbUJBQUE7RUFwQko7QUFDRjtBQXVCRTtFQUNFO0lBQ0Usc0JBQUE7RUFyQko7RUF3QkU7SUFDRSxtQkFBQTtFQXRCSjtFQXlCRTtJQUNFLHNCQUFBO0VBdkJKO0VBMEJFO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VBeEJKO0VBMkJFO0lBQ0Usc0JBQUE7RUF6Qko7RUE0QkU7SUFDRSxtQkFBQTtJQUNBLHVCQUFBO0VBMUJKO0VBNkJFO0lBQ0Usa0JBQUE7RUEzQko7RUE4QkU7SUFDRSxpQkFBQTtJQUNBLGNBQUE7RUE1Qko7RUErQkU7SUFDRSxzQkFBQTtFQTdCSjtFQWdDRTtJQUNFLGtCQUFBO0lBQ0EsbUJBQUE7RUE5Qko7RUFpQ0U7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0VBL0JKO0VBa0NFO0lBQ0UsZUFBQTtFQWhDSjtFQW1DRTtJQUNFLGFBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtFQWpDSjtBQUNGO0FBb0NFO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUFsQ0o7RUFxQ0U7SUFDRSxlQUFBO0VBbkNKO0FBQ0Y7QUFzQ0U7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0VBcENKO0FBQ0Y7QUF1Q0U7RUFDRTtJQUNFLGNBQUE7RUFyQ0o7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1kYXJrLWdvbGQ6ICM5Mjc1NDM7XFxuICAtLWxpZ2h0LWdvbGQ6ICNjN2FiNmU7XFxufVxcblxcbkBtaXhpbiBjb250YWluZXJCYWNrZ3JvdW5kIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBiZjtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbn1cXG5cXG5AbWl4aW4gc3ViSGVhZGluZ1N0eWxlIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDAuNGVtO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5AbWl4aW4gaWNvblNpemUge1xcbiAgaGVpZ2h0OiAzLjVyZW07XFxuICB3aWR0aDogMy41cmVtO1xcbn1cXG5cXG5AbWl4aW4gaWNvblRleHQge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuQG1peGluIGljb25Db250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXG59XFxuXFxuQG1peGluIHNtYWxsTWFyZ2luIHtcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcblxcbkBtaXhpbiBtb2RhbENvbnRlbnRDb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMDtcXG4gIG1heC13aWR0aDogNzUlO1xcbiAgbWluLWhlaWdodDogNDlyZW07XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbiAgcGFkZGluZzogMnJlbSAwO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC4xKTtcXG5cXG4gICNtYWluLWNvbnRhaW5lciB7XFxuICAgIEBpbmNsdWRlIG1vZGFsQ29udGVudENvbnRhaW5lcigpO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG4gIC5tb2RhbC1oZWFkZXIge1xcbiAgICBAaW5jbHVkZSBjb250YWluZXJCYWNrZ3JvdW5kKCk7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAubW9kYWwtbmF2LWxpbmtzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgfVxcblxcbiAgLm1vZGFsLW5hdi1saW5rIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBAaW5jbHVkZSBzbWFsbE1hcmdpbigpO1xcbiAgfVxcblxcbiAgLm1vZGFsLW5hdi1saW5rOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICB9XFxuXFxuICAuY2hhbXBpb24taGVhZGluZyB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1uYW1lIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXRpdGxlIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIEBpbmNsdWRlIHNtYWxsTWFyZ2luKCk7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tcm9sZXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1yb2xlIHtcXG4gICAgQGluY2x1ZGUgaWNvbkNvbnRhaW5lcigpO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXJlc291cmNlIHtcXG4gICAgQGluY2x1ZGUgaWNvbkNvbnRhaW5lcigpO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXJvbGUtaW1hZ2Uge1xcbiAgICBAaW5jbHVkZSBpY29uU2l6ZSgpO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXJlc291cmNlLWltYWdlIHtcXG4gICAgQGluY2x1ZGUgaWNvblNpemUoKTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1yb2xlLW5hbWUge1xcbiAgICBAaW5jbHVkZSBpY29uVGV4dCgpO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXJlc291cmNlLW5hbWUge1xcbiAgICBAaW5jbHVkZSBpY29uVGV4dCgpO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLW1haW4taW5mbyB7XFxuICAgIHBhZGRpbmc6IDEuOHJlbTtcXG4gICAgbWF4LXdpZHRoOiAzNHJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBsYXN0IGJhc2VsaW5lO1xcbiAgfVxcblxcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xcbiAgICBmcm9tIHtcXG4gICAgICB0b3A6IC0zMDBweDtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgfVxcblxcbiAgQGtleWZyYW1lcyBhbmltYXRldG9wIHtcXG4gICAgZnJvbSB7XFxuICAgICAgdG9wOiAtMzAwcHg7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5sb3JlLWNvbnRhaW5lciB7XFxuICAgIEBpbmNsdWRlIGNvbnRhaW5lckJhY2tncm91bmQoKTtcXG4gIH1cXG5cXG4gIC5zdWJoZWFkaW5nIHtcXG4gICAgQGluY2x1ZGUgc3ViSGVhZGluZ1N0eWxlKCk7XFxuICB9XFxuXFxuICAuYWJpbGl0aWVzLWNvbnRhaW5lciB7XFxuICAgIEBpbmNsdWRlIGNvbnRhaW5lckJhY2tncm91bmQoKTtcXG4gICAgd2lkdGg6IDIwZW07XFxuICB9XFxuXFxuICAuYWJpbGl0aWVzLWhlYWRpbmcge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuYWJpbGl0eS1waWN0dXJlcyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB9XFxuXFxuICAuYWJpbGl0eS1kZXNjcmlwdGlvbiB7XFxuICAgIEBpbmNsdWRlIHNtYWxsTWFyZ2luKCk7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tZGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLWV4dHJhLWluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmFiaWxpdHktaW5mbyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAuYWJpbGl0eS1pbmZvLmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAuc3BlbGwtaW1nIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW46IDAgMC41cmVtO1xcbiAgICBoZWlnaHQ6IDMuM3JlbTtcXG4gICAgd2lkdGg6IDMuM3JlbTtcXG4gIH1cXG5cXG4gIC5zcGVsbC1pbWcuY2xpY2tlZCB7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1nb2xkKTtcXG4gICAgYm9yZGVyLXdpZHRoOiA0cHg7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tdGlwcyB7XFxuICAgIEBpbmNsdWRlIGNvbnRhaW5lckJhY2tncm91bmQoKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG4gICAgbWF4LXdpZHRoOiAzNHJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXRpcCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gIH1cXG5cXG4gICNzdGF0cy1jb250YWluZXIge1xcbiAgICBAaW5jbHVkZSBtb2RhbENvbnRlbnRDb250YWluZXIoKTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1zdGF0cy1vdmVydmlldyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBAaW5jbHVkZSBzbWFsbE1hcmdpbigpO1xcbiAgICBtYXgtd2lkdGg6IDI1cmVtO1xcbiAgICBtaW4td2lkdGg6IDIwcmVtO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICB9XFxuXFxuICAud2luLXJhdGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLnBpY2stcmF0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAubGFuZS1pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5waWNrLXJhdGUtdmFsdWUge1xcbiAgICBtYXJnaW4tdG9wOiAwLjRlbTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWdvbGQpO1xcbiAgfVxcblxcbiAgLndpbi1yYXRlLXZhbHVlIHtcXG4gICAgbWFyZ2luLXRvcDogMC40ZW07XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gIH1cXG5cXG4gIC5sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1kYW1hZ2UtY29udGFpbmVyIHtcXG4gICAgQGluY2x1ZGUgY29udGFpbmVyQmFja2dyb3VuZCgpO1xcbiAgICBtYXgtaGVpZ2h0OiAxNy41cmVtO1xcbiAgfVxcblxcbiAgLmRhbWFnZS1oZWFkaW5nIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmNpcmN1bGFyLWNoYXJ0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbWF4LXdpZHRoOiA4MCU7XFxuICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xcbiAgfVxcblxcbiAgLmNpcmNsZSB7XFxuICAgIGZpbGw6IG5vbmU7XFxuICAgIHN0cm9rZS13aWR0aDogMi4yO1xcbiAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XFxuICAgIGFuaW1hdGlvbjogcHJvZ3Jlc3MgMXMgZWFzZS1vdXQgZm9yd2FyZHM7XFxuICB9XFxuXFxuICAjbWFnaWMtZGFtYWdlLXN0cm9rZSB7XFxuICAgIHN0cm9rZTogIzM1YTdmZjtcXG4gIH1cXG5cXG4gICNwaHlzaWNhbC1kYW1hZ2Utc3Ryb2tlIHtcXG4gICAgc3Ryb2tlOiAjZmY1OTY0O1xcbiAgfVxcblxcbiAgI3RydWUtZGFtYWdlLXN0cm9rZSB7XFxuICAgIHN0cm9rZTogI2ZmZTc0YztcXG4gIH1cXG5cXG4gIEBrZXlmcmFtZXMgcHJvZ3Jlc3Mge1xcbiAgICAwJSB7XFxuICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMCAxMDA7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC50b3RhbC1kYW1hZ2UtdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogNHB4O1xcbiAgICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xcbiAgICBmaWxsOiB3aGl0ZTtcXG4gIH1cXG5cXG4gIC50b3RhbC1kYW1hZ2UtbGFiZWwge1xcbiAgICBmb250LXNpemU6IDNweDtcXG4gICAgdGV4dC1hbmNob3I6IG1pZGRsZTtcXG4gICAgZmlsbDogdmFyKC0tZGFyay1nb2xkKTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1tYWluLXN0YXRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB9XFxuXFxuICAuY2hhbXBpb24taXRlbS1idWlsZHMge1xcbiAgICBAaW5jbHVkZSBjb250YWluZXJCYWNrZ3JvdW5kKCk7XFxuICAgIG1heC1oZWlnaHQ6IDE3LjVyZW07XFxuICB9XFxuXFxuICAuZGFtYWdlLXN0YXRzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmRhbWFnZS1pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWF4LWhlaWdodDogOTIlO1xcbiAgICBoZWlnaHQ6IDkyJTtcXG4gIH1cXG5cXG4gIC5kYW1hZ2UtdHlwZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gIH1cXG5cXG4gIC5kYW1hZ2Utc3RhdHMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgfVxcblxcbiAgI3BoeXNpY2FsLWRhbWFnZS1sYWJlbCB7XFxuICAgIGNvbG9yOiAjZmY1OTY0O1xcbiAgfVxcblxcbiAgI21hZ2ljLWRhbWFnZS1sYWJlbCB7XFxuICAgIGNvbG9yOiAjMzVhN2ZmO1xcbiAgfVxcblxcbiAgI3RydWUtZGFtYWdlLWxhYmVsIHtcXG4gICAgY29sb3I6ICNmZmU3NGM7XFxuICB9XFxuXFxuICAuaXRlbS1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgIEBpbmNsdWRlIGNvbnRhaW5lckJhY2tncm91bmQoKTtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjA7XFxuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIHJpZ2h0OiAxZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDMuNWVtO1xcbiAgfVxcblxcbiAgLml0ZW0tbmFtZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gIH1cXG5cXG4gIC5tYWluLWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICB9XFxuXFxuICAuY29zdC1sYWJlbCB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgfVxcblxcbiAgLmNvbXBvbmVudC1pdGVtcy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcblxcbiAgLmNvbXBvbmVudC1pdGVtLW5hbWUge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICB9XFxuXFxuICAuY29zdC1hbW91bnQge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICB9XFxuXFxuICAuY29tcG9uZW50LWl0ZW0tY29zdC1sYWJlbCB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1nb2xkKTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgfVxcblxcbiAgLmNvbXBvbmVudC1pdGVtLWFtb3VudCB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gIH1cXG5cXG4gIC5jb21wb25lbnQtaXRlbS1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgIEBpbmNsdWRlIGNvbnRhaW5lckJhY2tncm91bmQoKTtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjA7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAuaXRlbS1zZXRzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXgtaGVpZ2h0OiA5MCU7XFxuICB9XFxuXFxuICAuaXRlbS1zZXQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXG4gICAgcGFkZGluZzogMC40ZW07XFxuICB9XFxuXFxuICAubWFpbi1jb21wb25lbnQtY29udGFpbmVyIHtcXG4gICAgQGluY2x1ZGUgY29udGFpbmVyQmFja2dyb3VuZCgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYwNDAwODM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDBlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXG4gIH1cXG5cXG4gIC5pdGVtLWltZyB7XFxuICAgIG1heC13aWR0aDogMi43ZW07XFxuICAgIG1heC1oZWlnaHQ6IDIuN2VtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XFxuICAgIC8vcGFkZGluZzogMWVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcXG4gIH1cXG5cXG4gIC5jb21wb25lbnQtaXRlbS1pbWcge1xcbiAgICBtYXgtd2lkdGg6IDEuOGVtO1xcbiAgICBtYXgtaGVpZ2h0OiAxLjhlbTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1tYXRjaHVwcyB7XFxuICAgIEBpbmNsdWRlIGNvbnRhaW5lckJhY2tncm91bmQoKTtcXG4gICAgbWF4LWhlaWdodDogMjUuMnJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDAgMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB9XFxuXFxuICAubWF0Y2h1cHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgbWF4LXdpZHRoOiAyNHJlbTtcXG4gIH1cXG5cXG4gIC5tYXRjaHVwLWluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNjFhO1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgbWFyZ2luOiBhdXRvIDAuNWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XFxuICB9XFxuXFxuICAubWF0Y2h1cC1pbmZvOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTYxYWM5O1xcbiAgfVxcblxcbiAgLm1hdGNodXAtc3RhdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIFxcXCJBcHBsZSBTRCBHb3RoaWMgTmVvXFxcIiwgQXBwbGVHb3RoaWMsXFxuICAgICAgRG90dW0sIEFyaWFsLCBUYWhvbWE7XFxuICB9XFxuXFxuICAuZW5lbXktY2hhbXBpb24taW1nIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBtYXgtaGVpZ2h0OiAzZW07XFxuICAgIG1heC13aWR0aDogM2VtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG4gIH1cXG5cXG4gIC53aW5yYXRlLWFnYWluc3QtcGVyY2VudGFnZS5ibHVlIHtcXG4gICAgY29sb3I6ICMzNWE3ZmY7XFxuICB9XFxuXFxuICAud2lucmF0ZS1hZ2FpbnN0LXBlcmNlbnRhZ2UucmVkIHtcXG4gICAgY29sb3I6ICNmZjU5NjQ7XFxuICB9XFxuXFxuICAjc2tpbnMtY29udGFpbmVyIHtcXG4gICAgQGluY2x1ZGUgbW9kYWxDb250ZW50Q29udGFpbmVyKCk7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtaW4taGVpZ2h0OiAwO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgbWF4LXdpZHRoOiA5OSU7XFxuICAgIHdpZHRoOiA5OSU7XFxuICB9XFxuXFxuICAjc2tpbnMtY29udGFpbmVyIC5tb2RhbC1oZWFkZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgfVxcblxcbiAgLnNraW4taW1hZ2UtY29udGFpbmVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLnNraW4taW1hZ2UtY29udGFpbmVyLnNob3duIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAuc2tpbi1pbWFnZSB7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuc2tpbi1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICB9XFxuXFxuICAjc2tpbnMtY29udGFpbmVyIC5jaGFtcGlvbi1oZWFkaW5nIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuaW1nLXNjcm9sbC1hcnJvdyB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gIH1cXG5cXG4gIC5pbWctc2Nyb2xsLWFycm93OmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstZ29sZCk7XFxuICB9XFxuXFxuICBAbWVkaWEgKG1heC13aWR0aDogMTEyMHB4KSB7XFxuICAgIC5jb21wb25lbnQtaXRlbS1pbWcge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLml0ZW0tc2V0cy1jb250YWluZXIge1xcbiAgICAgIG1pbi1oZWlnaHQ6IDgwJTtcXG4gICAgfVxcblxcbiAgICAuaXRlbS1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgICAgbWluLXdpZHRoOiA3MCU7XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4NjdweCkge1xcbiAgICAuaXRlbS1pbWcge1xcbiAgICAgIG1heC1oZWlnaHQ6IDIuMnJlbTtcXG4gICAgICBtYXgtd2lkdGg6IDIuMnJlbTtcXG4gICAgfVxcblxcbiAgICAuY2hhbXBpb24tZGV0YWlscyB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgICB9XFxuXFxuICAgIC5hYmlsaXRpZXMtY29udGFpbmVyIHtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgd2lkdGg6IGF1dG87XFxuICAgICAgbWF4LXdpZHRoOiAyMHJlbTtcXG4gICAgfVxcblxcbiAgICAubG9yZS1jb250YWluZXIge1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgfVxcblxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICAgIC5pdGVtLXNldHMtY29udGFpbmVyIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICB9XFxuXFxuICAgIC5pdGVtLXNldC1jb250YWluZXIge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgLm1hdGNodXBzIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5tYXRjaHVwLWluZm8ge1xcbiAgICAgIG1hcmdpbjogMC41ZW0gYXV0bztcXG4gICAgfVxcblxcbiAgICAjbWFpbi1jb250YWluZXIge1xcbiAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAjc3RhdHMtY29udGFpbmVyIHtcXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4NDBweCkge1xcbiAgICAuZGFtYWdlLWluZm8ge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICB9XFxuXFxuICAgIC5nYW1lcy1wbGF5ZWQtYWdhaW5zdCB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAuZGFtYWdlLXN0YXRzLWNvbnRhaW5lciB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgfVxcbiAgfVxcblxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU2MHB4KSB7XFxuICAgIC5jaGFtcGlvbi1tYWluLXN0YXRzIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5pdGVtLXNldC1jb250YWluZXIge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIH1cXG5cXG4gICAgLml0ZW0tc2V0cy1jb250YWluZXIge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgLmNoYW1waW9uLWRhbWFnZS1jb250YWluZXIge1xcbiAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5kYW1hZ2Utc3RhdHMtaW5mbyB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAuZGFtYWdlLWluZm8ge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIH1cXG5cXG4gICAgLmRhbWFnZS10eXBlLWNvbnRhaW5lciB7XFxuICAgICAgbWFyZ2luOiAwLjJlbSBhdXRvO1xcbiAgICB9XFxuXFxuICAgIC5jaXJjdWxhci1jaGFydCB7XFxuICAgICAgbWF4LWhlaWdodDogMTk1cHg7XFxuICAgICAgbWF4LXdpZHRoOiA4MCU7XFxuICAgIH1cXG5cXG4gICAgLmRhbWFnZS1zdGF0cy1jb250YWluZXIge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgLmNoYW1waW9uLXJvbGUge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xcbiAgICB9XFxuXFxuICAgIC5jaGFtcGlvbi1yZXNvdXJjZSB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xcbiAgICAgIG1hcmdpbi1yaWdodDogMC41ZW07XFxuICAgIH1cXG5cXG4gICAgLmNoYW1waW9uLXJvbGVzIHtcXG4gICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIH1cXG5cXG4gICAgLnNwZWxsLWltZyB7XFxuICAgICAgaGVpZ2h0OiAyLjhlbTtcXG4gICAgICB3aWR0aDogMi44ZW07XFxuICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgKG1heC13aWR0aDogNDE0cHgpIHtcXG4gICAgLmNoYW1waW9uLXN0YXRzLW92ZXJ2aWV3IHtcXG4gICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgbWluLXdpZHRoOiAxN3JlbTtcXG4gICAgfVxcblxcbiAgICAuY2hhbXBpb24tbmFtZSB7XFxuICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgKG1pbi13aWR0aDogMTMwMHB4KSB7XFxuICAgICNza2lucy1jb250YWluZXIge1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICBtYXgtd2lkdGg6IDcwJTtcXG4gICAgICBtaW4taGVpZ2h0OiBhdXRvO1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgKG1pbi13aWR0aDogMTk1MHB4KSB7XFxuICAgICNza2lucy1jb250YWluZXIge1xcbiAgICAgIG1heC13aWR0aDogNTAlO1xcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBkZWZpbmUoSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIGRlZmluZShHcCwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gIGRlZmluZShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvbik7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgZGVmaW5lKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlLCBhc3luY0l0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIGRlZmluZShHcCwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcblxuICBkZWZpbmUoR3AsIFwidG9TdHJpbmdcIiwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIGluIG1vZGVybiBlbmdpbmVzXG4gIC8vIHdlIGNhbiBleHBsaWNpdGx5IGFjY2VzcyBnbG9iYWxUaGlzLiBJbiBvbGRlciBlbmdpbmVzIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gXCJvYmplY3RcIikge1xuICAgIGdsb2JhbFRoaXMucmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbiAgfSBlbHNlIHtcbiAgICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xuICB9XG59XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zyb250cGFnZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZnJvbnRwYWdlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFscy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9kYWxzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwidmFyIG1hcCA9IHtcblx0XCIuLzE2MTc3NzkxMjNfb3JpZ2luYWwuanBnXCI6IFwiLi9zcmMvaW1hZ2VzLzE2MTc3NzkxMjNfb3JpZ2luYWwuanBnXCIsXG5cdFwiLi9Bc3Nhc3Npbi5wbmdcIjogXCIuL3NyYy9pbWFnZXMvQXNzYXNzaW4ucG5nXCIsXG5cdFwiLi9Cb3R0b20ucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL0JvdHRvbS5wbmdcIixcblx0XCIuL0NvbnRyb2xsZXIucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL0NvbnRyb2xsZXIucG5nXCIsXG5cdFwiLi9Db3VyYWdlLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9Db3VyYWdlLnBuZ1wiLFxuXHRcIi4vQ3JpbXNvbiBSdXNoLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9Dcmltc29uIFJ1c2gucG5nXCIsXG5cdFwiLi9FbmVyZ3kucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL0VuZXJneS5wbmdcIixcblx0XCIuL0ZpZ2h0ZXIucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL0ZpZ2h0ZXIucG5nXCIsXG5cdFwiLi9GbG93LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9GbG93LnBuZ1wiLFxuXHRcIi4vRnVyeS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvRnVyeS5wbmdcIixcblx0XCIuL0dyaXQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL0dyaXQucG5nXCIsXG5cdFwiLi9IZWF0LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9IZWF0LnBuZ1wiLFxuXHRcIi4vSnVuZ2xlLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9KdW5nbGUucG5nXCIsXG5cdFwiLi9NYWdlLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9NYWdlLnBuZ1wiLFxuXHRcIi4vTWFuYS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvTWFuYS5wbmdcIixcblx0XCIuL01hbmFsZXNzLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9NYW5hbGVzcy5wbmdcIixcblx0XCIuL01hcmtzbWFuLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9NYXJrc21hbi5wbmdcIixcblx0XCIuL01lbGVlLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9NZWxlZS5wbmdcIixcblx0XCIuL01pZGRsZS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvTWlkZGxlLnBuZ1wiLFxuXHRcIi4vUmFnZS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvUmFnZS5wbmdcIixcblx0XCIuL1JhbmdlZC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvUmFuZ2VkLnBuZ1wiLFxuXHRcIi4vU3BlY2lhbGlzdC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvU3BlY2lhbGlzdC5wbmdcIixcblx0XCIuL1N1cHBvcnQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL1N1cHBvcnQucG5nXCIsXG5cdFwiLi9UYW5rLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9UYW5rLnBuZ1wiLFxuXHRcIi4vVG9wLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9Ub3AucG5nXCIsXG5cdFwiLi9VdGlsaXR5LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9VdGlsaXR5LnBuZ1wiLFxuXHRcIi4vZmlyZUJhY2tncm91bmQuanBnXCI6IFwiLi9zcmMvaW1hZ2VzL2ZpcmVCYWNrZ3JvdW5kLmpwZ1wiLFxuXHRcIi4vamlueEJhY2tncm91bmQuanBlZ1wiOiBcIi4vc3JjL2ltYWdlcy9qaW54QmFja2dyb3VuZC5qcGVnXCIsXG5cdFwiLi90cGFTa2lucy5qcGdcIjogXCIuL3NyYy9pbWFnZXMvdHBhU2tpbnMuanBnXCIsXG5cdFwiLi90dXRvcmlhbF9tb2R1bGVfMV9iYWNrZ3JvdW5kLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy90dXRvcmlhbF9tb2R1bGVfMV9iYWNrZ3JvdW5kLnBuZ1wiLFxuXHRcIi4vdHdpdGNoQmFja2dyb3VuZC5qcGdcIjogXCIuL3NyYy9pbWFnZXMvdHdpdGNoQmFja2dyb3VuZC5qcGdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1hZ2VzIHN5bmMgXFxcXC4ocG5nfGpwZT9nfHN2ZykkXCI7IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn0iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGVzaGVldHMvbW9kYWxzLnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlc2hlZXRzL2Zyb250cGFnZS5zY3NzJztcbmltcG9ydCB7IGNoYW1waW9uRGV0YWlsc01vZGFsIH0gZnJvbSAnLi90ZW1wbGF0ZXMvY2hhbXBpb25EZXRhaWxzTW9kYWwnO1xuaW1wb3J0IGNoYW1waW9uU3RhdHNNb2RhbCBmcm9tICcuL3RlbXBsYXRlcy9jaGFtcGlvblN0YXRzTW9kYWwnO1xuaW1wb3J0IHsgQ2hhbXBpb25Nb2RhbENvbnRyb2xsZXIgfSBmcm9tICcuL2FwcENvbnRyb2wvY2hhbXBpb25Nb2RhbENvbnRyb2xsZXInO1xuaW1wb3J0IEl0ZW1JbmZvIGZyb20gJy4vY2hhbXBpb25EYXRhL2l0ZW1JbmZvJztcbmltcG9ydCBnZXRDaGFtcGlvbkRldGFpbHMgZnJvbSAnLi9jaGFtcGlvbkRhdGEvY2hhbXBpb25EZXRhaWxzJztcbmltcG9ydCBjaGFtcGlvblNraW5zTW9kYWwgZnJvbSAnLi90ZW1wbGF0ZXMvY2hhbXBpb25Ta2luc01vZGFsJztcbmltcG9ydCBnZXRDaGFtcGlvblN0YXRzIGZyb20gJy4vY2hhbXBpb25EYXRhL2NoYW1waW9uU3RhdHMnO1xuXG5jb25zdCB0ZXN0ID0gYXN5bmMgKGNoYW1waW9uSWQpID0+IHtcbiAgY29uc3QgY2hhbXBpb25EZXRhaWxzID0gYXdhaXQgZ2V0Q2hhbXBpb25EZXRhaWxzKGNoYW1waW9uSWQpO1xuICBjb25zdCBjaGFtcGlvblN0YXRzID0gYXdhaXQgZ2V0Q2hhbXBpb25TdGF0cyhjaGFtcGlvbklkKTtcbiAgY2hhbXBpb25EZXRhaWxzTW9kYWwoY2hhbXBpb25EZXRhaWxzKTtcbiAgYXdhaXQgY2hhbXBpb25TdGF0c01vZGFsKGNoYW1waW9uRGV0YWlscywgY2hhbXBpb25TdGF0cyk7XG4gIGNoYW1waW9uU2tpbnNNb2RhbChjaGFtcGlvbkRldGFpbHMpO1xuICBjb25zdCBjb250cm9sbGVyID0gQ2hhbXBpb25Nb2RhbENvbnRyb2xsZXIoKTtcbiAgY29udHJvbGxlci5tb2RhbENoYW5nZUxpc3RlbmVycygpO1xuXG4gIGNvbnN0IGFsbEl0ZW1zID0gYXdhaXQgSXRlbUluZm8uZ2V0QWxsSXRlbXMoKTtcbiAgY29uc3QgaXRlbTEgPSBuZXcgSXRlbUluZm8oJzYzMzMnKTtcbiAgY29uc29sZS5sb2coaXRlbTEuZ2V0SXRlbUluZm8oYWxsSXRlbXMpKTtcbn07XG5cbnRlc3QoJ1BvcHB5Jyk7XG4iXSwibmFtZXMiOlsiQ2hhbXBpb25Nb2RhbENvbnRyb2xsZXIiLCJ0b2dnbGVBY3RpdmVBYmlsaXR5IiwiY2xpY2tlZEFiaWxpdHlJZCIsImFiaWxpdHlJbWFnZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhYmlsaXR5SW5mb3MiLCJmb3JFYWNoIiwiaW1nIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiaW5mbyIsImNsaWNrZWRJbWFnZSIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc05hbWUiLCJhY3RpdmVBYmlsaXR5IiwiY2hhbmdlTW9kYWxUZW1wbGF0ZSIsImNsaWNrZWRNb2RhbE5hdkxpbmsiLCJ0ZW1wbGF0ZXMiLCJ0ZW1wbGF0ZSIsImlkIiwic3Vic3RyaW5nIiwiaW5kZXhPZiIsImNob3NlblRlbXBsYXRlIiwic3R5bGUiLCJkaXNwbGF5IiwiaGlkZGVuVGVtcGxhdGUiLCJkaXNwYXlJdGVtRGV0YWlscyIsImhvdmVyZWRJdGVtSW1hZ2UiLCJpdGVtRGV0YWlscyIsIm5leHRFbGVtZW50U2libGluZyIsImhpZGVJdGVtRGV0YWlscyIsInVuaG92ZXJlZEl0ZW1JbWFnZSIsInRvZ2dsZVNraW5JbWFnZXMiLCJhcnJvd0NsYXNzTGlzdCIsInNraW5JbWFnZXNDb250YWluZXIiLCJjdXJyZW50U2hvd25JbWFnZSIsInNraW5OYW1lIiwiZmlyc3RJbWFnZSIsImZpcnN0RWxlbWVudENoaWxkIiwibGFzdEltYWdlIiwibGFzdEVsZW1lbnRDaGlsZCIsImluY2x1ZGVzIiwidGV4dENvbnRlbnQiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwibW9kYWxDaGFuZ2VMaXN0ZW5lcnMiLCJtb2RhbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInRhcmdldCIsImRhc2hJbmRleCIsImFiaWxpdHlJZCIsInNsaWNlIiwiQXJyYXkiLCJmcm9tIiwiY3VyckVsZW1lbnQiLCJyZWxhdGVkVGFyZ2V0IiwiY29uc29sZSIsImxvZyIsInBhcmVudE5vZGUiLCJmZXRjaENoYW1waW9uRGV0YWlscyIsImNoYW1waW9uSWQiLCJmZXRjaCIsIm1vZGUiLCJyZXNwb25zZSIsImpzb24iLCJjaGFtcGlvbnMiLCJjaGFtcGlvbkRldGFpbHMiLCJkYXRhIiwiZ2V0Q2hhbXBpb25QYXNzaXZlcyIsInBhc3NpdmVEYXRhIiwicGFzc2l2ZSIsInBhc3NpdmVOYW1lIiwibmFtZSIsInBhc3NpdmVEZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uIiwicGFzc2l2ZUlkIiwiaW1hZ2UiLCJmdWxsIiwicGFzc2l2ZUltZ1VybCIsImdldENoYW1waW9uU3BlbGxzIiwic3BlbGxzRGF0YSIsInNwZWxscyIsInNwZWxsIiwic3BlbGxPYmplY3QiLCJjb3N0QnVybiIsImNvc3RUeXBlIiwiY29vbGRvd24iLCJjb29sZG93bkJ1cm4iLCJpbWdVcmwiLCJwdXNoIiwiZ2V0Q2hhbXBpb25EZXRhaWxzIiwiY2hhbXBpb25QYXNzaXZlIiwiY2hhbXBpb25UaXRsZSIsInRpdGxlIiwicmVwbGFjZSIsInRvVXBwZXJDYXNlIiwicGFydHlwZSIsImxvcmUiLCJyb2xlcyIsInRhZ3MiLCJza2lucyIsInJlc291cmNlIiwidGlwcyIsImFsbHl0aXBzIiwiZGlmZmljdWx0eSIsImZldGNoQ2hhbXBpb25TdGF0cyIsImNoYW1waW9uU3RhdHMiLCJnZXRDaGFtcGlvblN0YXRzIiwid2luUmF0ZSIsInRvRml4ZWQiLCJwaWNrUmF0ZSIsImxhbmUiLCJ0b0xvd2VyQ2FzZSIsImtkYSIsImtkYVJhdGlvIiwiZGFtYWdlUGVyTWF0Y2giLCJpdGVtU2V0cyIsIml0ZW1DaG9pY2VzIiwiYmVzdE1hdGNoVXBzIiwibWF0Y2hVcHMiLCJ3b3JzdE1hdGNoVXBzIiwiZmV0Y2hBbGxJdGVtcyIsInZlcnNpb25SZXNwb25zZSIsInZlcnNpb25zIiwibGF0ZXN0VmVyc2lvbiIsImFsbEl0ZW1zIiwiSXRlbUluZm8iLCJpdGVtSWQiLCJnZXRJdGVtRGV0YWlscyIsIml0ZW1JbWFnZUlkIiwiaW1hZ2VVcmwiLCJjb21wb25lbnRJdGVtSWRzIiwidW5kZWZpbmVkIiwiY29tcG9uZW50SXRlbURldGFpbHMiLCJtYXAiLCJjb3N0IiwiZ29sZCIsInRvdGFsIiwiZ2V0SXRlbUltYWdlIiwiY29tcG9uZW50SXRlbXMiLCJnZXRDb21wb25lbnRJdGVtcyIsIkVsZW1lbnRDcmVhdGlvbiIsImNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcyIsInRhZyIsInBhcmVudEVsZW1lbnQiLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiY3JlYXRlQ2hpbGRFbGVtZW50V2l0aElkIiwiY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzQW5kSWQiLCJjcmVhdGVDaGlsZEltYWdlRWxlbWVudFdpdGhDbGFzcyIsInNyYyIsImFsdCIsImltYWdlRWxlbWVudCIsInJlbmRlckhlYWRlckRldGFpbHMiLCJpbWFnZXMiLCJjaGFtcGlvbkRldGFpbHNNb2RhbCIsImNoYW1waW9uRGF0YSIsImNoYW1waW9uUm9sZXMiLCJyb2xlIiwiY2hhbXBpb25Sb2xlIiwiY2hhbXBpb25Sb2xlTmFtZSIsImNoYW1waW9uUm9sZUltYWdlIiwiY2hhbXBpb25SZXNvdXJjZSIsImNoYW1waW9uUmVzb3VyY2VOYW1lIiwiY2hhbXBpb25SZXNvdXJjZUltYWdlIiwiY2hhbXBpb25Mb3JlIiwiYWJpbGl0eVBpY3R1cmVzIiwicGFzc2l2ZUltZyIsImltZ0xhYmVsIiwiaW5kZXgiLCJzcGVsbEltZyIsImFiaWxpdGllc0NvbnRhaW5lciIsImkiLCJhYmlsaXR5SW5mbyIsImFiaWxpdHlOYW1lIiwiYWJpbGl0eURlc2NyaXB0aW9uIiwiYWJpbGl0eUxhYmVsIiwiaW5uZXJIVE1MIiwiY2hhbXBpb25UaXBzIiwibGVuZ3RoIiwiY2hhbXBpb25UaXAiLCJjaGFtcGlvblNraW5zTW9kYWwiLCJza2luc0NvbnRhaW5lciIsInNraW4iLCJudW0iLCJzaG93bkltYWdlQ29udGFpbmVyIiwic2hvd25JbWFnZVVybCIsImltYWdlQ29udGFpbmVyIiwicmVuZGVyU3RhdE92ZXJ2aWV3IiwicmVuZGVyRGFtYWdlU3RhdHMiLCJyZW5kZXJDaGFtcGlvbkxhbmUiLCJyZW5kZXJNYXRjaHVwc0luZm8iLCJjaGFtcGlvblN0YXRzTW9kYWwiLCJzdGF0c092ZXJ2aWV3IiwidHJ1ZURhbWFnZUNpcmNsZVN0cm9rZSIsInBoeXNpY2FsRGFtYWdlQ2lyY2xlU3Ryb2tlIiwibWFnaWNEYW1hZ2VDaXJjbGVTdHJva2UiLCJ0cnVlRGFtYWdlUGVyY2VudCIsIk1hdGgiLCJyb3VuZCIsInRydWVEYW1hZ2UiLCJwZXJjZW50YWdlIiwicGh5c2ljYWxEYW1hZ2VQZXJjZW50IiwicGh5c2ljYWxEYW1hZ2UiLCJtYWdpY0RhbWFnZVBlcmNlbnQiLCJtYWdpY0RhbWFnZSIsInN0cm9rZURhc2hhcnJheSIsInRvdGFsRGFtYWdlVGV4dCIsInRvdGFsRGFtYWdlIiwidmFsdWUiLCJ0cnVlRGFtYWdlVmFsdWUiLCJwaHlzaWNhbERhbWFnZVZhbHVlIiwibWFnaWNEYW1hZ2VWYWx1ZSIsImdldEFsbEl0ZW1zIiwiY2hhbXBpb25JdGVtQnVpbGRzIiwiaXRlbVNldHNDb250YWluZXIiLCJpdGVtU2V0IiwiaXRlbVNldENvbnRhaW5lciIsIml0ZW0iLCJpdGVtSW5mbyIsImdldEl0ZW1JbmZvIiwibWFpbkNvbXBvbmVudENvbnRhaW5lciIsIm1haW5JdGVtIiwiaXRlbURldGFpbHNDb250YWluZXIiLCJuYW1lRWxlbWVudCIsImRlc2NyaXB0aW9uRWxlbWVudCIsIml0ZW1Db3N0IiwiY29zdExhYmVsIiwiY29zdEFtb3VudCIsImNvbXBvbmVudEl0ZW1zQ29udGFpbmVyIiwiY29tcG9uZW50SXRlbSIsImNvbXBvbmVudEl0ZW1FbGVtZW50IiwiY29tcG9uZW50SXRlbURldGFpbHNDb250YWluZXIiLCJjb21wb25lbnRJdGVtTmFtZSIsImNvbXBvbmVudEl0ZW1Db3N0IiwiY29tcG9uZW50SXRlbUNvc3RMYWJlbCIsImNvbXBvbmVudEl0ZW1BbW91bnQiLCJiZXN0TWF0Y2h1cHNTZWN0aW9uIiwiYmVzdE1hdGNodXBzRWxlbWVudCIsImJlc3RNYXRjaHVwc0RhdGEiLCJ3b3JzdE1hdGNodXBzU2VjdGlvbiIsIndvcnN0TWF0Y2h1cHNFbGVtZW50Iiwid29yc3RNYXRjaHVwc0RhdGEiLCJpbXBvcnRBbGwiLCJyIiwia2V5cyIsInJlcXVpcmUiLCJjb250ZXh0IiwibW9kYWxDb250YWluZXIiLCJjb250YWluZXIiLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZFNpemUiLCJjaGFtcGlvbk5hbWUiLCJyYXRlVGV4dCIsInJhdGVUeXBlIiwiY2hhbXBpb25SYXRlIiwibGFiZWwiLCJyYXRlVmFsdWUiLCJsb3dlckNhc2VUZXh0IiwiY2hhbXBpb25MYW5lSW5mbyIsImxhbmVUZXh0IiwibGFuZUljb24iLCJkYW1hZ2VUeXBlIiwiZGFtYWdlVmFsdWUiLCJkYW1hZ2VQZXJjZW50YWdlIiwiZGFtYWdlQ29udGFpbmVyIiwiZGFtYWdlU3RhdHMiLCJkYW1hZ2VWYWx1ZUVsZW1lbnQiLCJkYW1hZ2VQZXJjZW50YWdlRWxlbWVudCIsIm1hdGNodXBzRWxlbWVudCIsIm1hdGNodXBzRGF0YSIsIm1hdGNodXAiLCJtYXRjaHVwSW5mbyIsImVuZW15Q2hhbXBpb25OYW1lIiwiZW5lbXlDaGFtcGlvbkltZ1VybCIsIm1hdGNodXBTdGF0cyIsImVuZW15Q2hhbXBpb25OYW1lRWxlbWVudCIsIndpbnJhdGVBZ2FpbnN0Iiwid2lucmF0ZUFnYWluc3RMYWJlbCIsImNvbG9yIiwid2lucmF0ZUFnYWluc3RQZXJjZW50YWdlIiwid2luUmF0ZUFnYWluc3QiLCJnYW1lc1BsYXllZEFnYWluc3QiLCJtYXRjaGVzIiwidGVzdCIsImNvbnRyb2xsZXIiLCJpdGVtMSJdLCJzb3VyY2VSb290IjoiIn0=