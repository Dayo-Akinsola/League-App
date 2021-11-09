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
    });
    var currElement = null;
    modal.addEventListener('mouseover', function (event) {
      if (event.target.className === 'item-img' || event.target.className === 'component-item-img') {
        if (currElement) return; // console.log('in');

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
/* harmony export */   "getChampionDetails": () => (/* binding */ getChampionDetails)
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

var getChampionImages = function getChampionImages(championDetails) {
  var profileImgNumber = championDetails.skins[0].num;
  var profileImgUrl = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/".concat(championDetails.id, "_").concat(profileImgNumber, ".jpg");
  var smallImgUrl = "http://ddragon.leagueoflegends.com/cdn/11.22.1/img/champion/".concat(championDetails.id, ".png");
  var skinImgs = championDetails.skins.slice(1);
  var skinImgUrls = [];
  skinImgs.forEach(function (img) {
    skinImgUrls.push("https://ddragon.leagueoflegends.com/cdn/img/champion/splash/".concat(championDetails.id, "_").concat(img.num, ".jpg"));
  });
  return {
    profileImgUrl: profileImgUrl,
    skinImgUrls: skinImgUrls,
    smallImgUrl: smallImgUrl
  };
};

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
    var championDetails, championImages, championPassive, spells, championTitle;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetchChampionDetails(championId);

          case 2:
            championDetails = _context2.sent;
            championImages = getChampionImages(championDetails);
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
              resource: championDetails.partype,
              passive: championPassive,
              profileImg: championImages.profileImgUrl,
              skinImgs: championImages.skinImgUrls,
              smallImg: championImages.smallImgUrl,
              spells: spells,
              tips: championDetails.allytips,
              difficulty: championDetails.info.difficulty
            });

          case 9:
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
/* harmony import */ var _championData_championDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../championData/championDetails */ "./src/championData/championDetails.js");
/* harmony import */ var _renderHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderHelpers */ "./src/templates/renderHelpers.js");





var championDetailsModal = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(championId) {
    var championData, championRoles, roles, championResource, resource, championResourceName, championResourceImage, championLore, abilityPictures, passiveImg, imgLabel, index, abilitiesContainer, i, abilityInfo, abilityName, abilityDescription, abilityLabel, cooldown, championTips, _i, championTip;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,_championData_championDetails__WEBPACK_IMPORTED_MODULE_2__.getChampionDetails)(championId);

          case 2:
            championData = _context.sent;
            (0,_renderHelpers__WEBPACK_IMPORTED_MODULE_3__.renderHeaderDetails)(championData, 'main');
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
              championRoleImage.src = "".concat(_renderHelpers__WEBPACK_IMPORTED_MODULE_3__.images["".concat(role, ".png")]);
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
            championResourceImage.src = "".concat(_renderHelpers__WEBPACK_IMPORTED_MODULE_3__.images["".concat(resource, ".png")]);
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

          case 36:
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
/* harmony import */ var _championData_championDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../championData/championDetails */ "./src/championData/championDetails.js");
/* harmony import */ var _championData_championStats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../championData/championStats */ "./src/championData/championStats.js");
/* harmony import */ var _championData_itemInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../championData/itemInfo */ "./src/championData/itemInfo.js");
/* harmony import */ var _renderHelpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renderHelpers */ "./src/templates/renderHelpers.js");
/* harmony import */ var _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/elementCreation */ "./src/helpers/elementCreation.js");








var championStatsModal = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(championId) {
    var championData, championStats, statsOverview, lane, trueDamageCircleStroke, physicalDamageCircleStroke, magicDamageCircleStroke, trueDamagePercent, physicalDamagePercent, magicDamagePercent, totalDamageText, trueDamageValue, physicalDamageValue, magicDamageValue, itemSets, allItems, championItemBuilds, itemSetsContainer, bestMatchupsSection, bestMatchupsElement, bestMatchupsData, worstMatchupsSection, worstMatchupsElement, worstMatchupsData;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,_championData_championDetails__WEBPACK_IMPORTED_MODULE_2__.getChampionDetails)(championId);

          case 2:
            championData = _context.sent;
            _context.next = 5;
            return (0,_championData_championStats__WEBPACK_IMPORTED_MODULE_3__["default"])(championId);

          case 5:
            championStats = _context.sent;
            (0,_renderHelpers__WEBPACK_IMPORTED_MODULE_5__.renderHeaderDetails)(championData, 'stats');
            statsOverview = document.querySelector('.champion-stats-overview');
            (0,_renderHelpers__WEBPACK_IMPORTED_MODULE_5__.renderStatOverview)(statsOverview, 'Win Rate', championStats.winRate);
            (0,_renderHelpers__WEBPACK_IMPORTED_MODULE_5__.renderStatOverview)(statsOverview, 'Pick Rate', championStats.pickRate);
            /* Make every letter except the first lower case */

            lane = "".concat(championStats.lane[0] + championStats.lane.substring(1).toLowerCase());
            (0,_renderHelpers__WEBPACK_IMPORTED_MODULE_5__.renderChampionLane)(statsOverview, lane);
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
            (0,_renderHelpers__WEBPACK_IMPORTED_MODULE_5__.renderDamageStats)('physical', physicalDamageValue, physicalDamagePercent);
            (0,_renderHelpers__WEBPACK_IMPORTED_MODULE_5__.renderDamageStats)('magic', magicDamageValue, magicDamagePercent);
            (0,_renderHelpers__WEBPACK_IMPORTED_MODULE_5__.renderDamageStats)('true', trueDamageValue, trueDamagePercent);
            /* Renders the item builds section of the stats modal */

            itemSets = championStats.itemSets;
            _context.next = 32;
            return _championData_itemInfo__WEBPACK_IMPORTED_MODULE_4__["default"].getAllItems();

          case 32:
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
                var item = new _championData_itemInfo__WEBPACK_IMPORTED_MODULE_4__["default"](itemId);
                var itemInfo = item.getItemInfo(allItems);

                if (!itemInfo.tags.includes('Trinket') && !itemInfo.tags.includes('Consumable')) {
                  var mainComponentContainer = document.createElement('div');
                  mainComponentContainer.className = 'main-component-container';
                  itemSetContainer.appendChild(mainComponentContainer);
                  var mainItem = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_6__["default"].createChildElementWithClass('div', 'main-item', mainComponentContainer);
                  _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_6__["default"].createChildImageElementWithClass('item-img', mainItem, itemInfo.imageUrl, "".concat(itemId, ".png"));
                  var itemDetailsContainer = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_6__["default"].createChildElementWithClass('div', 'item-details-container', mainItem);
                  var nameElement = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_6__["default"].createChildElementWithClass('span', 'item-name', itemDetailsContainer);
                  nameElement.textContent = itemInfo.name;
                  var descriptionElement = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_6__["default"].createChildElementWithClass('span', 'item-description', itemDetailsContainer);
                  descriptionElement.innerHTML = itemInfo.description;
                  var itemCost = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_6__["default"].createChildElementWithClass('div', 'item-cost', itemDetailsContainer);
                  var costLabel = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_6__["default"].createChildElementWithClass('span', 'cost-label', itemCost);
                  costLabel.textContent = 'Gold: ';
                  var costAmount = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_6__["default"].createChildElementWithClass('span', 'cost-amount', itemCost);
                  costAmount.textContent = itemInfo.cost;
                  /* The component items are the smaller items that appear below the main item */

                  var componentItems = itemInfo.componentItems;
                  var componentItemsContainer = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_6__["default"].createChildElementWithClass('div', 'component-items-container', mainComponentContainer);
                  componentItems.forEach(function (componentItem) {
                    var componentItemElement = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_6__["default"].createChildElementWithClass('div', 'component-item', componentItemsContainer);
                    _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_6__["default"].createChildImageElementWithClass('component-item-img', componentItemElement, componentItem.imageUrl, "".concat(componentItem.name));
                    var componentItemDetailsContainer = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_6__["default"].createChildElementWithClass('div', 'component-item-details-container', componentItemElement);
                    var componentItemName = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_6__["default"].createChildElementWithClass('span', 'component-item-name', componentItemDetailsContainer);
                    componentItemName.textContent = componentItem.name;
                    var componentItemCost = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_6__["default"].createChildElementWithClass('div', 'component-item-cost', componentItemDetailsContainer);
                    var componentItemCostLabel = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_6__["default"].createChildElementWithClass('span', 'component-item-cost-label', componentItemCost);
                    componentItemCostLabel.textContent = 'Gold: ';
                    var componentItemAmount = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_6__["default"].createChildElementWithClass('span', 'component-item-amount', componentItemCost);
                    componentItemAmount.textContent = componentItem.cost;
                  });
                }
              });
            });
            /* Renders the matchups section of the champion modal stats page */

            bestMatchupsSection = document.querySelector('.best-matchups-section');
            bestMatchupsElement = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_6__["default"].createChildElementWithClass('div', 'best-matchups matchups', bestMatchupsSection);
            bestMatchupsData = championStats.bestMatchUps;
            (0,_renderHelpers__WEBPACK_IMPORTED_MODULE_5__.renderMatchupsInfo)(bestMatchupsElement, bestMatchupsData);
            worstMatchupsSection = document.querySelector('.worst-matchups-section');
            worstMatchupsElement = _helpers_elementCreation__WEBPACK_IMPORTED_MODULE_6__["default"].createChildElementWithClass('div', 'worst-matchups matchups', worstMatchupsSection);
            worstMatchupsData = championStats.worstMatchUps;
            (0,_renderHelpers__WEBPACK_IMPORTED_MODULE_5__.renderMatchupsInfo)(worstMatchupsElement, worstMatchupsData);

          case 46:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function championStatsModal(_x) {
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n}\n\nbody {\n  font-family: \"Inter\", Arial, Helvetica, sans-serif;\n}\n\n.modal {\n  display: block;\n  position: absolute;\n  z-index: 1;\n  padding: 4rem;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.modal #main-container {\n  position: relative;\n  margin: auto;\n  padding: 0;\n  max-width: 75%;\n  min-height: 49rem;\n  margin-top: 0;\n  background: rgba(0, 0, 0, 0.1);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -webkit-animation-name: animatetop;\n  -webkit-animation-duration: 0.4s;\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  border: 1px solid #888;\n  display: block;\n}\n.modal .modal-header {\n  background-color: #181a20bf;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 16px;\n  border-color: #927543;\n  border-style: solid;\n  padding: 0;\n  border-radius: 0;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n.modal .modal-nav-links {\n  display: flex;\n  justify-content: space-evenly;\n  width: 100%;\n  font-size: 22px;\n  background-color: black;\n}\n.modal .modal-nav-link {\n  cursor: pointer;\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n}\n.modal .modal-nav-link:hover {\n  color: #927543;\n}\n.modal .champion-heading {\n  margin: auto;\n  text-align: center;\n  font-size: 20px;\n  color: white;\n}\n.modal .champion-name {\n  margin: auto;\n}\n.modal .champion-title {\n  color: #c7ab6e;\n  font-size: 20px;\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n}\n.modal .champion-roles {\n  display: flex;\n  justify-content: center;\n}\n.modal .champion-role {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-left: 2rem;\n  margin-right: 2rem;\n}\n.modal .champion-resource {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-left: 2rem;\n  margin-right: 2rem;\n}\n.modal .champion-role-image {\n  height: 3.5rem;\n  width: 3.5rem;\n}\n.modal .champion-resource-image {\n  height: 3.5rem;\n  width: 3.5rem;\n}\n.modal .champion-role-name {\n  font-weight: 600;\n  font-size: 20px;\n}\n.modal .champion-resource-name {\n  font-weight: 600;\n  font-size: 20px;\n}\n.modal .champion-main-info {\n  padding: 1.8rem;\n  max-width: 34rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: last baseline;\n}\n@-webkit-keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n.modal .lore-container {\n  background-color: #181a20bf;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 16px;\n  border-color: #927543;\n  border-style: solid;\n}\n.modal .subheading {\n  margin: auto;\n  margin-bottom: 0.4em;\n  color: #c7ab6e;\n  text-align: center;\n}\n.modal .abilities-container {\n  background-color: #181a20bf;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 16px;\n  border-color: #927543;\n  border-style: solid;\n  width: 20em;\n}\n.modal .abilities-heading {\n  text-align: center;\n}\n.modal .ability-pictures {\n  margin-bottom: 1em;\n  display: flex;\n  justify-content: space-evenly;\n}\n.modal .ability-description {\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n}\n.modal .champion-details {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.modal .champion-extra-info {\n  display: flex;\n  flex-direction: column;\n}\n.modal .ability-info {\n  display: none;\n}\n.modal .ability-info.active {\n  display: flex;\n  flex-direction: column;\n}\n.modal .spell-img {\n  cursor: pointer;\n  margin: 0 0.5rem;\n  height: 3.3rem;\n  width: 3.3rem;\n}\n.modal .spell-img.clicked {\n  border-style: solid;\n  border-color: #927543;\n  border-width: 4px;\n}\n.modal .champion-tips {\n  background-color: #181a20bf;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 16px;\n  border-color: #927543;\n  border-style: solid;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: auto;\n  max-width: 34rem;\n  text-align: center;\n}\n.modal .champion-tip {\n  margin-bottom: 1em;\n}\n.modal #stats-container {\n  position: relative;\n  margin: auto;\n  padding: 0;\n  max-width: 75%;\n  min-height: 49rem;\n  margin-top: 0;\n  background: rgba(0, 0, 0, 0.1);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -webkit-animation-name: animatetop;\n  -webkit-animation-duration: 0.4s;\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  border: 1px solid #888;\n  display: none;\n}\n.modal .champion-stats-overview {\n  display: flex;\n  justify-content: space-evenly;\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n  max-width: 25rem;\n  min-width: 20rem;\n  font-size: 24px;\n}\n.modal .win-rate {\n  display: flex;\n  flex-direction: column;\n}\n.modal .pick-rate {\n  display: flex;\n  flex-direction: column;\n}\n.modal .lane-info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.modal .pick-rate-value {\n  margin-top: 0.4em;\n  color: #c7ab6e;\n}\n.modal .win-rate-value {\n  margin-top: 0.4em;\n  color: #c7ab6e;\n}\n.modal .label {\n  font-size: 20px;\n}\n.modal .champion-damage-container {\n  background-color: #181a20bf;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 16px;\n  border-color: #927543;\n  border-style: solid;\n  max-height: 17.5rem;\n}\n.modal .damage-heading {\n  text-align: center;\n}\n.modal .circular-chart {\n  display: block;\n  margin: auto;\n  max-width: 80%;\n  max-height: 250px;\n}\n.modal .circle {\n  fill: none;\n  stroke-width: 2.2;\n  stroke-linecap: round;\n  animation: progress 1s ease-out forwards;\n}\n.modal #magic-damage-stroke {\n  stroke: #35A7FF;\n}\n.modal #physical-damage-stroke {\n  stroke: #ff5964;\n}\n.modal #true-damage-stroke {\n  stroke: #FFE74C;\n}\n@keyframes progress {\n  0% {\n    stroke-dasharray: 0 100;\n  }\n}\n.modal .total-damage-text {\n  font-size: 4px;\n  text-anchor: middle;\n  fill: white;\n}\n.modal .total-damage-label {\n  font-size: 3px;\n  text-anchor: middle;\n  fill: #927543;\n}\n.modal .champion-main-stats {\n  display: flex;\n  justify-content: space-evenly;\n}\n.modal .champion-item-builds {\n  background-color: #181a20bf;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 16px;\n  border-color: #927543;\n  border-style: solid;\n  max-height: 17.5rem;\n}\n.modal .damage-stats-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n}\n.modal .damage-info {\n  display: flex;\n  max-height: 92%;\n  height: 92%;\n}\n.modal .damage-type-container {\n  display: flex;\n  flex-direction: column;\n  font-size: 1em;\n}\n.modal .damage-stats {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n.modal #physical-damage-label {\n  color: #ff5964;\n}\n.modal #magic-damage-label {\n  color: #35A7FF;\n}\n.modal #true-damage-label {\n  color: #FFE74C;\n}\n.modal .item-details-container {\n  background-color: #181a20bf;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 16px;\n  border-color: #927543;\n  border-style: solid;\n  font-size: 14px;\n  display: none;\n  position: absolute;\n  background-color: #181a20;\n  margin-right: 2rem;\n  flex-direction: column;\n  justify-content: space-evenly;\n  width: 40%;\n  right: 1em;\n  margin-bottom: 3.5em;\n}\n.modal .item-name {\n  font-weight: 600;\n  font-size: 16px;\n}\n.modal .main-item {\n  display: flex;\n  flex-direction: column-reverse;\n}\n.modal .cost-label {\n  color: #c7ab6e;\n  font-size: 16px;\n}\n.modal .component-items-container {\n  display: flex;\n}\n.modal .component-item-name {\n  font-size: 16px;\n}\n.modal .cost-amount {\n  font-size: 16px;\n}\n.modal .component-item-cost-label {\n  color: #c7ab6e;\n  font-size: 16px;\n}\n.modal .component-item-amount {\n  font-size: 16px;\n}\n.modal .component-item-details-container {\n  background-color: #181a20bf;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 16px;\n  border-color: #927543;\n  border-style: solid;\n  font-size: 14px;\n  display: none;\n  position: absolute;\n  background-color: #181a20;\n  flex-direction: column;\n}\n.modal .item-sets-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  max-height: 90%;\n}\n.modal .item-set-container {\n  display: flex;\n  justify-content: center;\n  max-width: 100%;\n  border-style: none;\n  border-width: 2px;\n  padding: 0.4em;\n}\n.modal .main-component-container {\n  background-color: #181a20bf;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 16px;\n  border-color: #927543;\n  border-style: solid;\n  background-color: #06040083;\n  border-radius: 1em;\n  color: white;\n  margin: 0em;\n  font-weight: 600;\n  font-size: 16px;\n  border-style: solid;\n  padding: 0;\n  border-radius: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-width: 1px;\n}\n.modal .item-img {\n  max-width: 2.7em;\n  max-height: 2.7em;\n  border-radius: 1em;\n  padding-bottom: 0;\n}\n.modal .component-item-img {\n  max-width: 1.8em;\n  max-height: 1.8em;\n}\n.modal .champion-matchups {\n  background-color: #181a20bf;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 16px;\n  border-color: #927543;\n  border-style: solid;\n  max-height: 25.2rem;\n  margin-bottom: 0;\n  border-radius: 0 0 0 0;\n  display: flex;\n  justify-content: space-evenly;\n}\n.modal .matchups {\n  display: flex;\n  justify-content: space-around;\n  max-width: 24rem;\n}\n.modal .matchup-info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  background-color: #17161a;\n  padding: 0.5em;\n  margin: auto 0.5em;\n  border-radius: 1em;\n}\n.modal .matchup-info:hover {\n  background-color: #17161ac9;\n}\n.modal .matchup-stats {\n  display: flex;\n  flex-direction: column;\n  font-size: 14px;\n  font-family: \"Helvetica Neue\", Helvetica, \"Apple SD Gothic Neo\", AppleGothic, Dotum, Arial, Tahoma;\n}\n.modal .enemy-champion-img {\n  border-radius: 50%;\n  max-height: 3em;\n  max-width: 3em;\n  margin-bottom: 0.5em;\n}\n.modal .winrate-against-percentage.blue {\n  color: #35A7FF;\n}\n.modal .winrate-against-percentage.red {\n  color: #ff5964;\n}\n@media (max-width: 1120px) {\n  .modal .component-item-img {\n    display: none;\n  }\n  .modal .item-sets-container {\n    min-height: 80%;\n  }\n  .modal .item-details-container {\n    min-width: 70%;\n  }\n}\n@media (max-width: 867px) {\n  .modal .item-img {\n    max-height: 2.2rem;\n    max-width: 2.2rem;\n  }\n  .modal .champion-details {\n    flex-direction: column-reverse;\n  }\n  .modal .abilities-container {\n    text-align: center;\n    width: auto;\n    max-width: 20rem;\n  }\n  .modal .lore-container {\n    text-align: center;\n  }\n}\n@media (max-width: 700px) {\n  .modal .item-sets-container {\n    flex-direction: row;\n  }\n  .modal .item-set-container {\n    flex-direction: column;\n  }\n  .modal .matchups {\n    flex-direction: column;\n  }\n  .modal .matchup-info {\n    margin: 0.5em auto;\n  }\n  .modal #main-container {\n    max-width: 100%;\n  }\n  .modal #stats-container {\n    max-width: 100%;\n  }\n}\n@media (max-width: 840px) {\n  .modal .damage-info {\n    flex-direction: column-reverse;\n    justify-content: space-between;\n    font-size: 15px;\n  }\n  .modal .games-played-against {\n    display: none;\n  }\n  .modal .damage-stats-container {\n    flex-direction: row;\n  }\n}\n@media (max-width: 560px) {\n  .modal .champion-main-stats {\n    flex-direction: column;\n  }\n  .modal .item-set-container {\n    flex-direction: row;\n  }\n  .modal .item-sets-container {\n    flex-direction: column;\n  }\n  .modal .champion-damage-container {\n    max-width: 100%;\n    align-items: center;\n  }\n  .modal .damage-stats-info {\n    flex-direction: column;\n  }\n  .modal .damage-info {\n    flex-direction: row;\n    align-items: flex-start;\n  }\n  .modal .damage-type-container {\n    margin: 0.2em auto;\n  }\n  .modal .circular-chart {\n    max-height: 195px;\n    max-width: 80%;\n  }\n  .modal .damage-stats-container {\n    flex-direction: column;\n  }\n  .modal .champion-role {\n    margin-left: 0.5em;\n    margin-right: 0.5em;\n  }\n  .modal .champion-resource {\n    margin-left: 0.5em;\n    margin-right: 0.5em;\n  }\n  .modal .champion-roles {\n    font-size: 20px;\n  }\n  .modal .spell-img {\n    height: 2.8em;\n    width: 2.8em;\n    margin: auto;\n  }\n}\n@media (max-width: 414px) {\n  .modal .champion-stats-overview {\n    font-size: 20px;\n    min-width: 17rem;\n  }\n  .modal .champion-name {\n    font-size: 2rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n}\n\n@mixin containerBackground {\n  background-color: #181a20bf;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 16px;\n  border-color: #927543;\n  border-style: solid;\n}\n\n@mixin subHeadingStyle {\n  margin: auto;\n  margin-bottom: 0.4em;\n  // font-size: 24px;\n  color: #c7ab6e;\n  text-align: center;\n} \n\n@mixin iconSize {\n  height: 3.5rem;\n  width: 3.5rem;\n}\n\n@mixin iconText {\n  font-weight: 600;\n  font-size: 20px;\n}\n\n@mixin iconContainer {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-left: 2rem;\n  margin-right: 2rem;\n}\n\n@mixin smallMargin {\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n}\n\n@mixin modalContentContainer {\n  position: relative;\n  margin: auto;\n  padding: 0;\n  max-width: 75%;\n  min-height: 49rem;\n  margin-top: 0;\n  background: rgba(0, 0, 0, 0.1);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -webkit-animation-name: animatetop;\n  -webkit-animation-duration: 0.4s;\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  border: 1px solid #888;\n  \n}\n\nbody {\n  font-family: \"Inter\", Arial, Helvetica, sans-serif;\n}\n\n.modal {\n  display: block;\n  position: absolute;\n  z-index: 1;\n  padding: 4rem;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgb(0, 0, 0, 0.1);\n  \n  #main-container {\n    @include modalContentContainer();\n    display: block;\n  }\n\n  .modal-header {\n    @include containerBackground();\n    padding: 0;\n    border-radius: 0;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n  }\n\n  .modal-nav-links {\n    display: flex;\n    justify-content: space-evenly;\n    width: 100%;\n    font-size: 22px;\n    background-color: black;   \n  }\n\n  .modal-nav-link {\n    cursor: pointer;\n    @include smallMargin();\n  }\n\n  .modal-nav-link:hover {\n    color: #927543;\n  }\n\n  .champion-heading {\n    margin: auto;\n    text-align: center;\n    font-size: 20px;\n    color: white;\n  }\n\n  .champion-name {\n    margin: auto;\n  }\n\n  .champion-title {\n    color: #c7ab6e;\n    font-size: 20px;\n    @include smallMargin();\n  }\n\n  .champion-roles {\n    display: flex;\n    justify-content: center;\n  }\n\n  .champion-role {\n    @include iconContainer();\n  }\n\n  .champion-resource {\n    @include iconContainer();\n  }\n\n  .champion-role-image {\n    @include iconSize();\n  }\n\n  .champion-resource-image {\n    @include iconSize();\n  }\n\n  .champion-role-name {\n    @include iconText();\n  }\n\n  .champion-resource-name {\n    @include iconText();\n  }\n\n  .champion-main-info {\n    padding: 1.8rem;\n    max-width: 34rem;\n    display: flex;\n    flex-direction: column;\n    justify-content:last baseline;    \n  }\n\n  @-webkit-keyframes animatetop {\n    from {top: -300px; opacity:0}\n    to {top:0; opacity: 1;}\n  }\n\n  @keyframes animatetop {\n    from {top: -300px; opacity:0}\n    to {top:0; opacity: 1;}\n  }\n\n  .lore-container {\n   @include containerBackground();\n  }\n\n  .subheading {\n    @include subHeadingStyle();\n  }\n\n  .abilities-container {\n    @include containerBackground();\n    width: 20em;\n  }\n\n  .abilities-heading {\n    text-align: center;\n  }\n\n  .ability-pictures {\n    margin-bottom: 1em;\n    display: flex;\n    justify-content: space-evenly;\n  }\n\n  .ability-description {\n    @include smallMargin();\n  }\n\n  .champion-details {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .champion-extra-info {\n    display: flex;\n    flex-direction: column;\n  }\n  \n  .ability-info {\n    display: none;\n  }\n\n  .ability-info.active {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .spell-img {\n    cursor: pointer;\n    margin: 0 0.5rem;\n    height: 3.3rem;\n    width: 3.3rem;\n  }\n\n  .spell-img.clicked {\n    border-style: solid;\n    border-color: #927543;\n    border-width: 4px;\n  }\n\n  .champion-tips {\n    @include containerBackground();\n    display: flex;\n    flex-direction: column;\n    margin-bottom: auto;\n    max-width: 34rem;\n    text-align: center;\n  }\n\n  .champion-tip {\n    margin-bottom: 1em;\n  }\n\n  #stats-container {\n    @include modalContentContainer();\n    display: none;\n  }\n\n  .champion-stats-overview {\n    display: flex;\n    justify-content: space-evenly;\n    @include smallMargin();\n    max-width: 25rem;\n    min-width: 20rem;\n    font-size: 24px;\n  }\n\n  .win-rate {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .pick-rate {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .lane-info {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .pick-rate-value {\n    margin-top: 0.4em;\n    color: #c7ab6e;\n  }\n\n  .win-rate-value {\n    margin-top: 0.4em;\n    color: #c7ab6e;\n  }\n\n  .label {\n    font-size: 20px;\n  }\n\n  .champion-damage-container {\n    @include containerBackground();\n    max-height: 17.5rem;\n  }\n\n  .damage-heading {\n    text-align: center;\n  }\n\n  .circular-chart {\n    display: block;\n    margin: auto;\n    max-width: 80%;\n    max-height: 250px;\n  }\n\n  .circle {\n    fill: none;\n    stroke-width: 2.2;\n    stroke-linecap: round;\n    animation: progress 1s ease-out forwards;\n  }\n\n  #magic-damage-stroke {\n    stroke: #35A7FF;\n  }\n\n  #physical-damage-stroke {\n    stroke: #ff5964\n  }\n\n  #true-damage-stroke {\n    stroke: #FFE74C\n  }\n\n  @keyframes progress {\n    0% {\n      stroke-dasharray: 0 100;\n    }\n  }\n\n  .total-damage-text {\n    font-size: 4px;\n    text-anchor: middle;\n    fill: white;\n  }\n\n  .total-damage-label {\n    font-size: 3px;\n    text-anchor: middle;\n    fill: #927543;\n  }\n\n  .champion-main-stats {\n    display: flex;\n    justify-content: space-evenly;\n  }\n\n  .champion-item-builds {\n    @include containerBackground();\n    max-height: 17.5rem;\n  }\n\n  .damage-stats-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n  }\n\n  .damage-info {\n    display: flex;\n    max-height: 92%;\n    height: 92%;\n  }\n\n  .damage-type-container {\n    display: flex;\n    flex-direction: column;\n    font-size: 1em;\n  }\n\n  .damage-stats {\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n  }\n\n  #physical-damage-label {\n    color: #ff5964;\n  }\n\n  #magic-damage-label {\n    color: #35A7FF\n  }\n\n  #true-damage-label {\n    color: #FFE74C\n  }\n\n  .item-details-container {\n    @include containerBackground();\n    font-size: 14px;\n    display: none;\n    position: absolute;\n    background-color:#181a20;\n    margin-right: 2rem;\n    flex-direction: column;\n    justify-content: space-evenly;\n    width: 40%;\n    right: 1em;\n    margin-bottom: 3.5em;\n  }\n\n  .item-name {\n    font-weight: 600;\n    font-size: 16px;\n  }\n\n  .main-item {\n    display: flex;\n    flex-direction: column-reverse;\n  }\n\n  .cost-label {\n    color: #c7ab6e;\n    font-size: 16px;\n  }\n\n  .component-items-container {\n    display: flex;\n  }\n\n  .component-item-name {\n    font-size: 16px;\n  }\n\n  .cost-amount {\n    font-size: 16px;\n  }\n\n  .component-item-cost-label {\n    color: #c7ab6e;\n    font-size: 16px;\n  }\n\n  .component-item-amount {\n    font-size: 16px;\n  }\n\n  .component-item-details-container {\n    @include containerBackground();\n    font-size: 14px;\n    display: none;\n    position: absolute;\n    background-color:#181a20;\n    flex-direction: column;\n  }\n\n  .item-sets-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    max-height: 90%;\n  }\n\n  .item-set-container {\n    display: flex;\n    justify-content: center;\n    max-width: 100%;\n    border-style: none;\n    border-width: 2px;\n    padding: 0.4em;\n  }  \n\n  .main-component-container {\n    @include containerBackground();\n    background-color: #06040083;\n    border-radius: 1em;\n    color: white;\n    margin: 0em;\n    font-weight: 600;\n    font-size: 16px;\n    border-style: solid;\n    padding: 0;\n    border-radius: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border-width: 1px;\n \n  }\n\n  .item-img {\n    max-width: 2.7em;\n    max-height: 2.7em;\n    border-radius: 1em;\n    //padding: 1em;\n    padding-bottom: 0;\n  }\n\n  .component-item-img {\n    max-width: 1.8em;\n    max-height: 1.8em;\n  }\n\n  .champion-matchups {\n    @include containerBackground();\n    max-height: 25.2rem;\n    margin-bottom: 0;\n    border-radius: 0 0 0 0;\n    display: flex;\n    justify-content: space-evenly;\n  }\n\n  .matchups {\n    display: flex;\n    justify-content: space-around;\n    max-width: 24rem;\n  }\n\n  .matchup-info {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    background-color: #17161a;\n    padding: 0.5em;\n    margin: auto 0.5em;\n    border-radius: 1em;\n  }\n\n  .matchup-info:hover {\n    background-color: #17161ac9;\n  }\n\n  .matchup-stats {\n    display: flex;\n    flex-direction: column;\n    font-size: 14px;\n    font-family: \"Helvetica Neue\",Helvetica,\"Apple SD Gothic Neo\",AppleGothic,Dotum,Arial,Tahoma;\n  }\n\n  .enemy-champion-img {\n    border-radius: 50%;\n    max-height: 3em;\n    max-width: 3em;\n    margin-bottom: 0.5em;\n  }\n\n  .winrate-against-percentage.blue {\n    color: #35A7FF;\n  }\n\n  .winrate-against-percentage.red {\n    color: #ff5964;\n  }\n\n  @media (max-width: 1120px) {\n    .component-item-img {\n      display: none;\n    }\n\n    .item-sets-container {\n      min-height: 80%;\n    }\n\n    .item-details-container {\n      min-width: 70%;\n    }\n  }\n\n  @media (max-width: 867px) {\n    .item-img {\n      max-height: 2.2rem;\n      max-width: 2.2rem;\n    }\n\n    .champion-details {\n      flex-direction: column-reverse;\n    }\n\n    .abilities-container {\n      text-align: center;\n      width: auto;\n      max-width: 20rem;\n    }\n\n    .lore-container {\n      text-align: center;\n    }\n  }\n\n  @media (max-width: 700px) {\n    .item-sets-container {\n      flex-direction: row;\n    }\n\n    .item-set-container {\n      flex-direction: column;\n    }\n\n    .matchups {\n      flex-direction: column;\n    }\n\n    .matchup-info {\n      margin: 0.5em auto;\n    }\n\n    #main-container {\n      max-width: 100%;\n    }\n\n    #stats-container {\n      max-width: 100%;\n    }\n  }\n\n  @media (max-width: 840px) {\n    .damage-info {\n      flex-direction: column-reverse;\n      justify-content: space-between;\n      font-size: 15px;\n    }\n\n    .games-played-against {\n      display: none;\n    }\n\n    .damage-stats-container {\n      flex-direction: row;\n    }\n  }\n\n  @media (max-width: 560px) {\n    .champion-main-stats {\n      flex-direction: column;\n    }\n\n    .item-set-container {\n      flex-direction: row;\n    }\n\n    .item-sets-container {\n      flex-direction: column;\n    }\n\n    .champion-damage-container {\n      max-width: 100%;\n      align-items: center;\n    }\n\n    .damage-stats-info {\n      flex-direction: column;\n    }\n\n    .damage-info {\n      flex-direction: row;\n      align-items: flex-start;\n    }\n\n    .damage-type-container {\n      margin: 0.2em auto;\n    }\n\n    .circular-chart {\n      max-height: 195px;\n      max-width: 80%;\n    }\n\n    .damage-stats-container {\n      flex-direction: column;\n    }\n\n    .champion-role {\n      margin-left: 0.5em;\n      margin-right: 0.5em;\n    }\n\n    .champion-resource {\n      margin-left: 0.5em;\n      margin-right: 0.5em;\n    }\n\n    .champion-roles {\n      font-size: 20px;\n    }\n\n    .spell-img {\n      height: 2.8em;\n      width: 2.8em;\n      margin: auto;\n    }\n  }\n\n  @media (max-width: 414px) {\n    .champion-stats-overview {\n      font-size: 20px;\n      min-width: 17rem;\n    }\n\n    .champion-name {\n      font-size: 2rem;\n    }\n  }\n}"],"sourceRoot":""}]);
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

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _templates_championDetailsModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/championDetailsModal */ "./src/templates/championDetailsModal.js");
/* harmony import */ var _templates_championStatsModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./templates/championStatsModal */ "./src/templates/championStatsModal.js");
/* harmony import */ var _appControl_championModalController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./appControl/championModalController */ "./src/appControl/championModalController.js");
/* harmony import */ var _championData_itemInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./championData/itemInfo */ "./src/championData/itemInfo.js");








var test = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(championId) {
    var controller, allItems, item1;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,_templates_championDetailsModal__WEBPACK_IMPORTED_MODULE_3__.championDetailsModal)(championId);

          case 2:
            _context.next = 4;
            return (0,_templates_championStatsModal__WEBPACK_IMPORTED_MODULE_4__["default"])(championId);

          case 4:
            controller = (0,_appControl_championModalController__WEBPACK_IMPORTED_MODULE_5__.ChampionModalController)();
            controller.modalChangeListeners();
            _context.next = 8;
            return _championData_itemInfo__WEBPACK_IMPORTED_MODULE_6__["default"].getAllItems();

          case 8:
            allItems = _context.sent;
            item1 = new _championData_itemInfo__WEBPACK_IMPORTED_MODULE_6__["default"]('6333');
            console.log(item1.getItemInfo(allItems));

          case 11:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxZQUFZLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxZQUFZLFVBQVUsTUFBTSxNQUFNLFlBQVksVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sWUFBWSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sWUFBWSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxLQUFLLE1BQU0sWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxVQUFVLFdBQVcsS0FBSyxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxZQUFZLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsWUFBWSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxZQUFZLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFlBQVksS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssWUFBWSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtB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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLE1BQU07QUFDTixlQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsY0FBYztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsbUJBQW1CO0FBQ3BEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxH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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1DLElBQUk7QUFBQSxzTEFBRyxpQkFBT3ZPLFVBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDTDJHLHFGQUFvQixDQUFDM0csVUFBRCxDQURmOztBQUFBO0FBQUE7QUFBQSxtQkFFTDBJLHlFQUFrQixDQUFDMUksVUFBRCxDQUZiOztBQUFBO0FBR0x3TyxZQUFBQSxVQUhLLEdBR1F2Uiw0RkFBdUIsRUFIL0I7QUFJWHVSLFlBQUFBLFVBQVUsQ0FBQ3RQLG9CQUFYO0FBSlc7QUFBQSxtQkFNWTBGLDBFQUFBLEVBTlo7O0FBQUE7QUFNTEQsWUFBQUEsUUFOSztBQU9MOEosWUFBQUEsS0FQSyxHQU9HLElBQUk3Siw4REFBSixDQUFhLE1BQWIsQ0FQSDtBQVFYaEYsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVk0TyxLQUFLLENBQUNuRSxXQUFOLENBQWtCM0YsUUFBbEIsQ0FBWjs7QUFSVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFKNEosSUFBSTtBQUFBO0FBQUE7QUFBQSxHQUFWOztBQVdBQSxJQUFJLENBQUMsT0FBRCxDQUFKLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvYXBwQ29udHJvbC9jaGFtcGlvbk1vZGFsQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL2NoYW1waW9uRGF0YS9jaGFtcGlvbkRldGFpbHMuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9jaGFtcGlvbkRhdGEvY2hhbXBpb25TdGF0cy5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL2NoYW1waW9uRGF0YS9pdGVtSW5mby5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL2hlbHBlcnMvZWxlbWVudENyZWF0aW9uLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvdGVtcGxhdGVzL2NoYW1waW9uRGV0YWlsc01vZGFsLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvdGVtcGxhdGVzL2NoYW1waW9uU3RhdHNNb2RhbC5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL3RlbXBsYXRlcy9yZW5kZXJIZWxwZXJzLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy9ob21lL2RheW8vRGVza3RvcC9vZGluUHJvamVjdC9MZWFndWUtQXBwL2Zyb250ZW5kL3NyYy9pbWFnZXN8c3luY3xub25yZWN1cnNpdmV8L1xcLihwbmd8anBlIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9sZWFndWUtYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2xlYWd1ZS1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9sZWFndWUtYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2xlYWd1ZS1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiY29uc3QgQ2hhbXBpb25Nb2RhbENvbnRyb2xsZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHRvZ2dsZUFjdGl2ZUFiaWxpdHkgPSAoY2xpY2tlZEFiaWxpdHlJZCkgPT4ge1xuICAgIGNvbnN0IGFiaWxpdHlJbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3BlbGwtaW1nJyk7XG4gICAgY29uc3QgYWJpbGl0eUluZm9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFiaWxpdHktaW5mbycpO1xuXG4gICAgYWJpbGl0eUltYWdlcy5mb3JFYWNoKChpbWcpID0+IHtcbiAgICAgIGltZy5jbGFzc0xpc3QucmVtb3ZlKCdjbGlja2VkJyk7XG4gICAgfSk7XG4gICAgYWJpbGl0eUluZm9zLmZvckVhY2goKGluZm8pID0+IHtcbiAgICAgIGluZm8uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjbGlja2VkSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtjbGlja2VkQWJpbGl0eUlkfS1pbWdgKTtcbiAgICBjbGlja2VkSW1hZ2UuY2xhc3NOYW1lID0gJ3NwZWxsLWltZyBjbGlja2VkJztcblxuICAgIGNvbnN0IGFjdGl2ZUFiaWxpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtjbGlja2VkQWJpbGl0eUlkfS1hYmlsaXR5YCk7XG4gICAgYWN0aXZlQWJpbGl0eS5jbGFzc05hbWUgPSAnYWJpbGl0eS1pbmZvIGFjdGl2ZSc7XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlTW9kYWxUZW1wbGF0ZSA9IChjbGlja2VkTW9kYWxOYXZMaW5rKSA9PiB7XG4gICAgY29uc3QgdGVtcGxhdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsLXRlbXBsYXRlJyk7XG4gICAgdGVtcGxhdGVzLmZvckVhY2goKHRlbXBsYXRlKSA9PiB7XG4gICAgICBpZiAodGVtcGxhdGUuaWQuc3Vic3RyaW5nKDAsIHRlbXBsYXRlLmlkLmluZGV4T2YoJy0nKSkgPT09IGNsaWNrZWRNb2RhbE5hdkxpbmsuaWQpIHtcbiAgICAgICAgY29uc3QgY2hvc2VuVGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICAgICAgY2hvc2VuVGVtcGxhdGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBoaWRkZW5UZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgICAgICBoaWRkZW5UZW1wbGF0ZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BheUl0ZW1EZXRhaWxzID0gKGhvdmVyZWRJdGVtSW1hZ2UpID0+IHtcbiAgICBjb25zdCBpdGVtRGV0YWlscyA9IGhvdmVyZWRJdGVtSW1hZ2UubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGl0ZW1EZXRhaWxzLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gIH07XG5cbiAgY29uc3QgaGlkZUl0ZW1EZXRhaWxzID0gKHVuaG92ZXJlZEl0ZW1JbWFnZSkgPT4ge1xuICAgIGNvbnN0IGl0ZW1EZXRhaWxzID0gdW5ob3ZlcmVkSXRlbUltYWdlLm5leHRFbGVtZW50U2libGluZztcbiAgICBpdGVtRGV0YWlscy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9O1xuXG4gIGNvbnN0IG1vZGFsQ2hhbmdlTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG5cbiAgICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdzcGVsbC1pbWcnKSB7XG4gICAgICAgIGNvbnN0IGRhc2hJbmRleCA9IGV2ZW50LnRhcmdldC5pZC5pbmRleE9mKCctJyk7XG4gICAgICAgIGNvbnN0IGFiaWxpdHlJZCA9IGV2ZW50LnRhcmdldC5pZC5zbGljZSgwLCBkYXNoSW5kZXgpO1xuICAgICAgICB0b2dnbGVBY3RpdmVBYmlsaXR5KGFiaWxpdHlJZCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnbW9kYWwtbmF2LWxpbmsnKSB7XG4gICAgICAgIGNoYW5nZU1vZGFsVGVtcGxhdGUoZXZlbnQudGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGxldCBjdXJyRWxlbWVudCA9IG51bGw7XG4gICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2l0ZW0taW1nJ1xuICAgICAgfHwgZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2NvbXBvbmVudC1pdGVtLWltZycpIHtcbiAgICAgICAgaWYgKGN1cnJFbGVtZW50KSByZXR1cm47XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdpbicpO1xuICAgICAgICBjdXJyRWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgZGlzcGF5SXRlbURldGFpbHMoY3VyckVsZW1lbnQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnaXRlbS1pbWcnXG4gICAgICB8fCBldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnY29tcG9uZW50LWl0ZW0taW1nJykge1xuICAgICAgICBpZiAoIWN1cnJFbGVtZW50KSByZXR1cm47XG5cbiAgICAgICAgbGV0IHsgcmVsYXRlZFRhcmdldCB9ID0gZXZlbnQ7XG5cbiAgICAgICAgd2hpbGUgKHJlbGF0ZWRUYXJnZXQpIHtcbiAgICAgICAgICBpZiAocmVsYXRlZFRhcmdldCA9PT0gY3VyckVsZW1lbnQpIHJldHVybjtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZWxhdGVkVGFyZ2V0KTtcbiAgICAgICAgICByZWxhdGVkVGFyZ2V0ID0gcmVsYXRlZFRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdvdXQnKTtcblxuICAgICAgICBoaWRlSXRlbURldGFpbHMoY3VyckVsZW1lbnQpO1xuICAgICAgICBjdXJyRWxlbWVudCA9IG51bGw7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBtb2RhbENoYW5nZUxpc3RlbmVycyxcbiAgfTtcbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgeyBDaGFtcGlvbk1vZGFsQ29udHJvbGxlciB9O1xuIiwiY29uc3QgZmV0Y2hDaGFtcGlvbkRldGFpbHMgPSBhc3luYyAoY2hhbXBpb25JZCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi8xMS4yMC4xL2RhdGEvZW5fVVMvY2hhbXBpb24vJHtjaGFtcGlvbklkfS5qc29uYCwgeyBtb2RlOiAnY29ycycgfSk7XG4gIGNvbnN0IGNoYW1waW9ucyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgY29uc3QgY2hhbXBpb25EZXRhaWxzID0gY2hhbXBpb25zLmRhdGFbY2hhbXBpb25JZF07XG5cbiAgcmV0dXJuIGNoYW1waW9uRGV0YWlscztcbn07XG5cbmNvbnN0IGdldENoYW1waW9uSW1hZ2VzID0gKGNoYW1waW9uRGV0YWlscykgPT4ge1xuICBjb25zdCBwcm9maWxlSW1nTnVtYmVyID0gY2hhbXBpb25EZXRhaWxzLnNraW5zWzBdLm51bTtcbiAgY29uc3QgcHJvZmlsZUltZ1VybCA9IChgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuL2ltZy9jaGFtcGlvbi9zcGxhc2gvJHtjaGFtcGlvbkRldGFpbHMuaWR9XyR7cHJvZmlsZUltZ051bWJlcn0uanBnYCk7XG4gIGNvbnN0IHNtYWxsSW1nVXJsID0gYGh0dHA6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLzExLjIyLjEvaW1nL2NoYW1waW9uLyR7Y2hhbXBpb25EZXRhaWxzLmlkfS5wbmdgO1xuICBjb25zdCBza2luSW1ncyA9IGNoYW1waW9uRGV0YWlscy5za2lucy5zbGljZSgxKTtcbiAgY29uc3Qgc2tpbkltZ1VybHMgPSBbXTtcbiAgc2tpbkltZ3MuZm9yRWFjaCgoaW1nKSA9PiB7XG4gICAgc2tpbkltZ1VybHMucHVzaChgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuL2ltZy9jaGFtcGlvbi9zcGxhc2gvJHtjaGFtcGlvbkRldGFpbHMuaWR9XyR7aW1nLm51bX0uanBnYCk7XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgcHJvZmlsZUltZ1VybCxcbiAgICBza2luSW1nVXJscyxcbiAgICBzbWFsbEltZ1VybCxcbiAgfTtcbn07XG5cbmNvbnN0IGdldENoYW1waW9uUGFzc2l2ZXMgPSAoY2hhbXBpb25EZXRhaWxzKSA9PiB7XG4gIGNvbnN0IHBhc3NpdmVEYXRhID0gY2hhbXBpb25EZXRhaWxzLnBhc3NpdmU7XG4gIGNvbnN0IHBhc3NpdmVOYW1lID0gcGFzc2l2ZURhdGEubmFtZTtcbiAgY29uc3QgcGFzc2l2ZURlc2NyaXB0aW9uID0gcGFzc2l2ZURhdGEuZGVzY3JpcHRpb247XG4gIGNvbnN0IHBhc3NpdmVJZCA9IHBhc3NpdmVEYXRhLmltYWdlLmZ1bGw7XG4gIGNvbnN0IHBhc3NpdmVJbWdVcmwgPSBgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLzExLjIxLjEvaW1nL3Bhc3NpdmUvJHtwYXNzaXZlSWR9YDtcblxuICByZXR1cm4ge1xuICAgIHBhc3NpdmVOYW1lLFxuICAgIHBhc3NpdmVEZXNjcmlwdGlvbixcbiAgICBwYXNzaXZlSW1nVXJsLFxuICB9O1xufTtcblxuY29uc3QgZ2V0Q2hhbXBpb25TcGVsbHMgPSAoY2hhbXBpb25EZXRhaWxzKSA9PiB7XG4gIGNvbnN0IHNwZWxsc0RhdGEgPSBjaGFtcGlvbkRldGFpbHMuc3BlbGxzO1xuICBjb25zdCBzcGVsbHMgPSBbXTtcblxuICBzcGVsbHNEYXRhLmZvckVhY2goKHNwZWxsKSA9PiB7XG4gICAgY29uc3Qgc3BlbGxPYmplY3QgPSB7XG4gICAgICBuYW1lOiBzcGVsbC5uYW1lLFxuICAgICAgaWQ6IHNwZWxsLmlkLFxuICAgICAgZGVzY3JpcHRpb246IHNwZWxsLmRlc2NyaXB0aW9uLFxuICAgICAgY29zdEJ1cm46IHNwZWxsLmNvc3RCdXJuLFxuICAgICAgY29zdFR5cGU6IHNwZWxsLmNvc3RUeXBlLFxuICAgICAgY29vbGRvd246IHNwZWxsLmNvb2xkb3duQnVybixcbiAgICAgIGltZ1VybDogYGh0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi8xMS4yMS4xL2ltZy9zcGVsbC8ke3NwZWxsLmlkfS5wbmdgLFxuICAgIH07XG4gICAgc3BlbGxzLnB1c2goc3BlbGxPYmplY3QpO1xuICB9KTtcblxuICByZXR1cm4gc3BlbGxzO1xufTtcblxuY29uc3QgZ2V0Q2hhbXBpb25EZXRhaWxzID0gYXN5bmMgKGNoYW1waW9uSWQpID0+IHtcbiAgY29uc3QgY2hhbXBpb25EZXRhaWxzID0gYXdhaXQgZmV0Y2hDaGFtcGlvbkRldGFpbHMoY2hhbXBpb25JZCk7XG4gIGNvbnN0IGNoYW1waW9uSW1hZ2VzID0gZ2V0Q2hhbXBpb25JbWFnZXMoY2hhbXBpb25EZXRhaWxzKTtcbiAgY29uc3QgY2hhbXBpb25QYXNzaXZlID0gZ2V0Q2hhbXBpb25QYXNzaXZlcyhjaGFtcGlvbkRldGFpbHMpO1xuICBjb25zdCBzcGVsbHMgPSBnZXRDaGFtcGlvblNwZWxscyhjaGFtcGlvbkRldGFpbHMpO1xuXG4gIC8vIE1ha2UgZmlyc3QgbGV0dGVyIG9mIHRoZSBjaGFtcGlvbiB0aXRsZSBhIGNhcGl0YWwgbGV0dGVyLlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICBjb25zdCBjaGFtcGlvblRpdGxlID0gY2hhbXBpb25EZXRhaWxzLnRpdGxlLnJlcGxhY2UoY2hhbXBpb25EZXRhaWxzLnRpdGxlWzBdLCBjaGFtcGlvbkRldGFpbHMudGl0bGVbMF0udG9VcHBlckNhc2UoKSk7XG5cbiAgaWYgKGNoYW1waW9uRGV0YWlscy5wYXJ0eXBlID09PSAnTm9uZScpIHtcbiAgICBjaGFtcGlvbkRldGFpbHMucGFydHlwZSA9ICdNYW5hbGVzcyc7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5hbWU6IGNoYW1waW9uRGV0YWlscy5uYW1lLFxuICAgIGlkOiBjaGFtcGlvbkRldGFpbHMuaWQsXG4gICAgdGl0bGU6IGNoYW1waW9uVGl0bGUsXG4gICAgbG9yZTogY2hhbXBpb25EZXRhaWxzLmxvcmUsXG4gICAgcm9sZXM6IGNoYW1waW9uRGV0YWlscy50YWdzLFxuICAgIHJlc291cmNlOiBjaGFtcGlvbkRldGFpbHMucGFydHlwZSxcbiAgICBwYXNzaXZlOiBjaGFtcGlvblBhc3NpdmUsXG4gICAgcHJvZmlsZUltZzogY2hhbXBpb25JbWFnZXMucHJvZmlsZUltZ1VybCxcbiAgICBza2luSW1nczogY2hhbXBpb25JbWFnZXMuc2tpbkltZ1VybHMsXG4gICAgc21hbGxJbWc6IGNoYW1waW9uSW1hZ2VzLnNtYWxsSW1nVXJsLFxuICAgIHNwZWxscyxcbiAgICB0aXBzOiBjaGFtcGlvbkRldGFpbHMuYWxseXRpcHMsXG4gICAgZGlmZmljdWx0eTogY2hhbXBpb25EZXRhaWxzLmluZm8uZGlmZmljdWx0eSxcbiAgfTtcbn07XG5cbmV4cG9ydCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG4gIGdldENoYW1waW9uRGV0YWlscyxcbn07XG4iLCJjb25zdCBmZXRjaENoYW1waW9uU3RhdHMgPSBhc3luYyAoY2hhbXBpb25JZCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvJHtjaGFtcGlvbklkfWAsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICBjb25zdCBjaGFtcGlvblN0YXRzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIHJldHVybiBjaGFtcGlvblN0YXRzO1xufTtcblxuY29uc3QgZ2V0Q2hhbXBpb25TdGF0cyA9IGFzeW5jIChjaGFtcGlvbklkKSA9PiB7XG4gIGNvbnN0IGNoYW1waW9uU3RhdHMgPSBhd2FpdCBmZXRjaENoYW1waW9uU3RhdHMoY2hhbXBpb25JZCk7XG5cbiAgY29uc3Qgd2luUmF0ZSA9IGNoYW1waW9uU3RhdHMud2luUmF0ZS50b0ZpeGVkKDIpO1xuICBjb25zdCBwaWNrUmF0ZSA9IGNoYW1waW9uU3RhdHMucGlja1JhdGUudG9GaXhlZCgyKTtcbiAgY29uc3QgbGFuZSA9IGNoYW1waW9uU3RhdHMubGFuZVswXSArIGNoYW1waW9uU3RhdHMubGFuZS5zdWJzdHJpbmcoMSkudG9Mb3dlckNhc2UoKTtcblxuICByZXR1cm4ge1xuICAgIGNoYW1waW9uSWQsXG4gICAga2RhOiBjaGFtcGlvblN0YXRzLmtkYVJhdGlvLFxuICAgIGRhbWFnZVBlck1hdGNoOiBjaGFtcGlvblN0YXRzLmRhbWFnZVBlck1hdGNoLFxuICAgIGl0ZW1TZXRzOiBjaGFtcGlvblN0YXRzLml0ZW1DaG9pY2VzLnNsaWNlKDEpLFxuICAgIGJlc3RNYXRjaFVwczogY2hhbXBpb25TdGF0cy5tYXRjaFVwcy5iZXN0TWF0Y2hVcHMsXG4gICAgd29yc3RNYXRjaFVwczogY2hhbXBpb25TdGF0cy5tYXRjaFVwcy53b3JzdE1hdGNoVXBzLFxuICAgIHdpblJhdGUsXG4gICAgcGlja1JhdGUsXG4gICAgbGFuZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldENoYW1waW9uU3RhdHM7XG4iLCIvLyBGZXRjaGVzIGFsbCB0aGUgaXRlbXMgYSBjaGFtcGlvbiBjYW4gYnV5IGluIGEgbWF0Y2hcbmNvbnN0IGZldGNoQWxsSXRlbXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHZlcnNpb25SZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9hcGkvdmVyc2lvbnMuanNvbicsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICBjb25zdCB2ZXJzaW9ucyA9IGF3YWl0IHZlcnNpb25SZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IGxhdGVzdFZlcnNpb24gPSB2ZXJzaW9uc1swXTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vJHtsYXRlc3RWZXJzaW9ufS9kYXRhL2VuX1VTL2l0ZW0uanNvbmApO1xuICBjb25zdCBhbGxJdGVtcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICByZXR1cm4gYWxsSXRlbXMuZGF0YTtcbn07XG5cbmNsYXNzIEl0ZW1JbmZvIHtcbiAgY29uc3RydWN0b3IoaXRlbUlkKSB7XG4gICAgdGhpcy5pdGVtSWQgPSBpdGVtSWQ7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZ2V0QWxsSXRlbXMoKSB7XG4gICAgY29uc3QgYWxsSXRlbXMgPSBmZXRjaEFsbEl0ZW1zKCk7XG4gICAgcmV0dXJuIGFsbEl0ZW1zO1xuICB9XG5cbiAgZ2V0SXRlbURldGFpbHMoYWxsSXRlbXMpIHtcbiAgICBjb25zdCBpdGVtRGV0YWlscyA9IGFsbEl0ZW1zW3RoaXMuaXRlbUlkXTtcbiAgICByZXR1cm4gaXRlbURldGFpbHM7XG4gIH1cblxuICBnZXRJdGVtSW1hZ2UoYWxsSXRlbXMpIHtcbiAgICBjb25zdCBpdGVtRGV0YWlscyA9IHRoaXMuZ2V0SXRlbURldGFpbHMoYWxsSXRlbXMpO1xuICAgIGNvbnN0IGl0ZW1JbWFnZUlkID0gaXRlbURldGFpbHMuaW1hZ2UuZnVsbDtcbiAgICBjb25zdCBpbWFnZVVybCA9IGBodHRwOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi8xMS4yMi4xL2ltZy9pdGVtLyR7aXRlbUltYWdlSWR9YDtcbiAgICByZXR1cm4gaW1hZ2VVcmw7XG4gIH1cblxuICAvLyBnZXRzIGluZm8gb24gdGhlIGl0ZW1zIHVzZWQgdG8gY3JlYXRlIHRoZSBpbnN0YW5jZSBpdGVtXG4gIGdldENvbXBvbmVudEl0ZW1zKGFsbEl0ZW1zKSB7XG4gICAgY29uc3QgaXRlbURldGFpbHMgPSB0aGlzLmdldEl0ZW1EZXRhaWxzKGFsbEl0ZW1zKTtcbiAgICBjb25zdCBjb21wb25lbnRJdGVtSWRzID0gaXRlbURldGFpbHMuZnJvbTtcbiAgICBpZiAoY29tcG9uZW50SXRlbUlkcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnN0IGNvbXBvbmVudEl0ZW1EZXRhaWxzID0gY29tcG9uZW50SXRlbUlkcy5tYXAoKGl0ZW1JZCkgPT4gKHtcbiAgICAgIG5hbWU6IGFsbEl0ZW1zW2l0ZW1JZF0ubmFtZSxcbiAgICAgIGltYWdlVXJsOiBgaHR0cDovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vMTEuMjIuMS9pbWcvaXRlbS8ke2l0ZW1JZH0ucG5nYCxcbiAgICAgIGNvc3Q6IGFsbEl0ZW1zW2l0ZW1JZF0uZ29sZC50b3RhbCxcbiAgICB9KSk7XG4gICAgcmV0dXJuIGNvbXBvbmVudEl0ZW1EZXRhaWxzO1xuICB9XG5cbiAgZ2V0SXRlbUluZm8oYWxsSXRlbXMpIHtcbiAgICBjb25zdCBpdGVtRGV0YWlscyA9IHRoaXMuZ2V0SXRlbURldGFpbHMoYWxsSXRlbXMpO1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gaXRlbURldGFpbHM7XG4gICAgY29uc3QgeyBkZXNjcmlwdGlvbiB9ID0gaXRlbURldGFpbHM7XG4gICAgY29uc3QgY29zdCA9IGl0ZW1EZXRhaWxzLmdvbGQudG90YWw7XG4gICAgY29uc3QgaW1hZ2VVcmwgPSB0aGlzLmdldEl0ZW1JbWFnZShhbGxJdGVtcyk7XG4gICAgY29uc3QgY29tcG9uZW50SXRlbXMgPSB0aGlzLmdldENvbXBvbmVudEl0ZW1zKGFsbEl0ZW1zKTtcbiAgICBjb25zdCB7IHRhZ3MgfSA9IGl0ZW1EZXRhaWxzO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGNvc3QsXG4gICAgICBpbWFnZVVybCxcbiAgICAgIGNvbXBvbmVudEl0ZW1zLFxuICAgICAgdGFncyxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW1JbmZvO1xuIiwiY29uc3QgRWxlbWVudENyZWF0aW9uID0gKCgpID0+IHtcbiAgY29uc3QgY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzID0gKHRhZywgY2xhc3NOYW1lLCBwYXJlbnRFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlQ2hpbGRFbGVtZW50V2l0aElkID0gKHRhZywgaWQsIHBhcmVudEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGVsZW1lbnQuaWQgPSBpZDtcbiAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzQW5kSWQgPSAodGFnLCBjbGFzc05hbWUsIGlkLCBwYXJlbnRFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICBlbGVtZW50LmlkID0gaWQ7XG4gICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUNoaWxkSW1hZ2VFbGVtZW50V2l0aENsYXNzID0gKGNsYXNzTmFtZSwgcGFyZW50RWxlbWVudCwgc3JjLCBhbHQpID0+IHtcbiAgICBjb25zdCBpbWFnZUVsZW1lbnQgPSBjcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2ltZycsIGNsYXNzTmFtZSwgcGFyZW50RWxlbWVudCk7XG4gICAgaW1hZ2VFbGVtZW50LnNyYyA9IHNyYztcbiAgICBpbWFnZUVsZW1lbnQuYWx0ID0gYWx0O1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzLFxuICAgIGNyZWF0ZUNoaWxkRWxlbWVudFdpdGhJZCxcbiAgICBjcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3NBbmRJZCxcbiAgICBjcmVhdGVDaGlsZEltYWdlRWxlbWVudFdpdGhDbGFzcyxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEVsZW1lbnRDcmVhdGlvbjtcbiIsImltcG9ydCB7IGdldENoYW1waW9uRGV0YWlscyB9IGZyb20gJy4uL2NoYW1waW9uRGF0YS9jaGFtcGlvbkRldGFpbHMnO1xuaW1wb3J0IHsgcmVuZGVySGVhZGVyRGV0YWlscywgaW1hZ2VzIH0gZnJvbSAnLi9yZW5kZXJIZWxwZXJzJztcblxuY29uc3QgY2hhbXBpb25EZXRhaWxzTW9kYWwgPSBhc3luYyAoY2hhbXBpb25JZCkgPT4ge1xuICBjb25zdCBjaGFtcGlvbkRhdGEgPSBhd2FpdCBnZXRDaGFtcGlvbkRldGFpbHMoY2hhbXBpb25JZCk7XG5cbiAgcmVuZGVySGVhZGVyRGV0YWlscyhjaGFtcGlvbkRhdGEsICdtYWluJyk7XG5cbiAgY29uc3QgY2hhbXBpb25Sb2xlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbi1yb2xlcycpO1xuICBjb25zdCB7IHJvbGVzIH0gPSBjaGFtcGlvbkRhdGE7XG4gIHJvbGVzLmZvckVhY2goKHJvbGUpID0+IHtcbiAgICBjb25zdCBjaGFtcGlvblJvbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjaGFtcGlvblJvbGVOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IGNoYW1waW9uUm9sZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICBjaGFtcGlvblJvbGUuY2xhc3NOYW1lID0gJ2NoYW1waW9uLXJvbGUnO1xuICAgIGNoYW1waW9uUm9sZU5hbWUuY2xhc3NOYW1lID0gJ2NoYW1waW9uLXJvbGUtbmFtZSc7XG4gICAgY2hhbXBpb25Sb2xlSW1hZ2UuY2xhc3NOYW1lID0gJ2NoYW1waW9uLXJvbGUtaW1hZ2UnO1xuXG4gICAgY2hhbXBpb25Sb2xlTmFtZS50ZXh0Q29udGVudCA9IHJvbGU7XG4gICAgY2hhbXBpb25Sb2xlSW1hZ2Uuc3JjID0gYCR7aW1hZ2VzW2Ake3JvbGV9LnBuZ2BdfWA7XG4gICAgY2hhbXBpb25Sb2xlSW1hZ2UuYWx0ID0gYCR7cm9sZX0ucG5nYDtcblxuICAgIGNoYW1waW9uUm9sZS5hcHBlbmRDaGlsZChjaGFtcGlvblJvbGVOYW1lKTsgY2hhbXBpb25Sb2xlLmFwcGVuZENoaWxkKGNoYW1waW9uUm9sZUltYWdlKTtcbiAgICBjaGFtcGlvblJvbGVzLmFwcGVuZENoaWxkKGNoYW1waW9uUm9sZSk7XG4gIH0pO1xuICAvLyBUaGUgdHlwZSBvZiByZXNvdXJjZSB0aGF0IGEgY2hhbXBpb24gdXNlcyBlLmcuIG1hbmEsIGVuZXJneSBldGNcbiAgY29uc3QgY2hhbXBpb25SZXNvdXJjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB7IHJlc291cmNlIH0gPSBjaGFtcGlvbkRhdGE7XG4gIGNoYW1waW9uUmVzb3VyY2UuY2xhc3NOYW1lID0gJ2NoYW1waW9uLXJlc291cmNlJztcbiAgY29uc3QgY2hhbXBpb25SZXNvdXJjZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNvbnN0IGNoYW1waW9uUmVzb3VyY2VJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjaGFtcGlvblJlc291cmNlTmFtZS5jbGFzc05hbWUgPSAnY2hhbXBpb24tcmVzb3VyY2UtbmFtZSc7XG4gIGNoYW1waW9uUmVzb3VyY2VJbWFnZS5jbGFzc05hbWUgPSAnY2hhbXBpb24tcmVzb3VyY2UtaW1hZ2UnO1xuICBjaGFtcGlvblJlc291cmNlTmFtZS50ZXh0Q29udGVudCA9IHJlc291cmNlO1xuICBjaGFtcGlvblJlc291cmNlSW1hZ2Uuc3JjID0gYCR7aW1hZ2VzW2Ake3Jlc291cmNlfS5wbmdgXX1gOyBjaGFtcGlvblJlc291cmNlSW1hZ2UuYWx0ID0gYCR7cmVzb3VyY2V9LnBuZ2A7XG5cbiAgY2hhbXBpb25SZXNvdXJjZS5hcHBlbmRDaGlsZChjaGFtcGlvblJlc291cmNlTmFtZSk7XG4gIGNoYW1waW9uUmVzb3VyY2UuYXBwZW5kQ2hpbGQoY2hhbXBpb25SZXNvdXJjZUltYWdlKTtcbiAgY2hhbXBpb25Sb2xlcy5hcHBlbmRDaGlsZChjaGFtcGlvblJlc291cmNlKTtcblxuICBjb25zdCBjaGFtcGlvbkxvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tbG9yZScpO1xuICBjaGFtcGlvbkxvcmUudGV4dENvbnRlbnQgPSBjaGFtcGlvbkRhdGEubG9yZTtcblxuICBjb25zdCBhYmlsaXR5UGljdHVyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJpbGl0eS1waWN0dXJlcycpO1xuXG4gIGNvbnN0IHBhc3NpdmVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgcGFzc2l2ZUltZy5jbGFzc05hbWUgPSAnc3BlbGwtaW1nIGNsaWNrZWQnO1xuICBwYXNzaXZlSW1nLmlkID0gJ3Bhc3NpdmUtaW1nJztcbiAgcGFzc2l2ZUltZy5zcmMgPSBjaGFtcGlvbkRhdGEucGFzc2l2ZS5wYXNzaXZlSW1nVXJsO1xuICBwYXNzaXZlSW1nLmFsdCA9IGAke2NoYW1waW9uRGF0YS5wYXNzaXZlLnBhc3NpdmVOYW1lfS5wbmdgO1xuICBhYmlsaXR5UGljdHVyZXMuYXBwZW5kQ2hpbGQocGFzc2l2ZUltZyk7XG5cbiAgY29uc3QgaW1nTGFiZWwgPSBbJ1EnLCAnVycsICdFJywgJ1InXTtcbiAgbGV0IGluZGV4ID0gMDtcblxuICBjaGFtcGlvbkRhdGEuc3BlbGxzLmZvckVhY2goKHNwZWxsKSA9PiB7XG4gICAgY29uc3Qgc3BlbGxJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBzcGVsbEltZy5jbGFzc05hbWUgPSAnc3BlbGwtaW1nJztcbiAgICAvLyBHcmFicyBsZXR0ZXIgUSwgVywgRSBvciBSIHdoaWNoIHVuaXF1ZWx5IGlkZW50aWZpZXMgYSBjaGFtcGlvbnMgYWJpbGl0aWVzXG4gICAgc3BlbGxJbWcuaWQgPSBgJHtpbWdMYWJlbFtpbmRleF19LWltZ2A7XG4gICAgc3BlbGxJbWcuc3JjID0gc3BlbGwuaW1nVXJsO1xuICAgIHNwZWxsSW1nLmFsdCA9IGAke3NwZWxsLm5hbWV9LnBuZ2A7XG4gICAgYWJpbGl0eVBpY3R1cmVzLmFwcGVuZENoaWxkKHNwZWxsSW1nKTtcbiAgICBpbmRleCArPSAxO1xuICB9KTtcblxuICBjb25zdCBhYmlsaXRpZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJpbGl0aWVzLWNvbnRhaW5lcicpO1xuICAvLyBsb29wcyB0aHJvdWdoIGNoYW1waW9uJ3MgcGFzc2l2ZSBhbmQgNCBhYmlsaXRpZXNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpICs9IDEpIHtcbiAgICBjb25zdCBhYmlsaXR5SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGFiaWxpdHlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IGFiaWxpdHlEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBhYmlsaXR5TmFtZS5jbGFzc05hbWUgPSAnYWJpbGl0eS1uYW1lJzsgYWJpbGl0eURlc2NyaXB0aW9uLmNsYXNzTmFtZSA9ICdhYmlsaXR5LWRlc2NyaXB0aW9uJztcbiAgICBhYmlsaXR5SW5mby5hcHBlbmRDaGlsZChhYmlsaXR5TmFtZSk7IGFiaWxpdHlJbmZvLmFwcGVuZENoaWxkKGFiaWxpdHlEZXNjcmlwdGlvbik7XG4gICAgY29uc3QgYWJpbGl0eUxhYmVsID0gWydQYXNzaXZlJywgJ1EnLCAnVycsICdFJywgJ1InXTtcblxuICAgIGlmIChpID09PSAwKSB7XG4gICAgICBhYmlsaXR5SW5mby5jbGFzc05hbWUgPSAnYWJpbGl0eS1pbmZvIGFjdGl2ZSc7XG4gICAgICBhYmlsaXR5SW5mby5pZCA9ICdwYXNzaXZlLWFiaWxpdHknO1xuICAgICAgYWJpbGl0eU5hbWUudGV4dENvbnRlbnQgPSBgJHtjaGFtcGlvbkRhdGEucGFzc2l2ZS5wYXNzaXZlTmFtZX0gKCR7YWJpbGl0eUxhYmVsW2ldfSlgO1xuICAgICAgYWJpbGl0eURlc2NyaXB0aW9uLmlubmVySFRNTCA9IGNoYW1waW9uRGF0YS5wYXNzaXZlLnBhc3NpdmVEZXNjcmlwdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY29vbGRvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBjb29sZG93bi5jbGFzc05hbWUgPSAnYWJpbGl0eS1jb29sZG93bic7XG4gICAgICBjb29sZG93bi50ZXh0Q29udGVudCA9IGBDb29sZG93bjogJHtjaGFtcGlvbkRhdGEuc3BlbGxzW2kgLSAxXS5jb29sZG93bn0gc2Vjb25kc2A7XG4gICAgICBhYmlsaXR5SW5mby5hcHBlbmRDaGlsZChjb29sZG93bik7XG5cbiAgICAgIGFiaWxpdHlJbmZvLmNsYXNzTmFtZSA9ICdhYmlsaXR5LWluZm8nO1xuICAgICAgYWJpbGl0eUluZm8uaWQgPSBgJHthYmlsaXR5TGFiZWxbaV19LWFiaWxpdHlgO1xuICAgICAgYWJpbGl0eU5hbWUudGV4dENvbnRlbnQgPSBgJHtjaGFtcGlvbkRhdGEuc3BlbGxzW2kgLSAxXS5uYW1lfSAoJHthYmlsaXR5TGFiZWxbaV19KWA7XG4gICAgICBhYmlsaXR5RGVzY3JpcHRpb24uaW5uZXJIVE1MID0gY2hhbXBpb25EYXRhLnNwZWxsc1tpIC0gMV0uZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgYWJpbGl0aWVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFiaWxpdHlJbmZvKTtcbiAgfVxuXG4gIGNvbnN0IGNoYW1waW9uVGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbi10aXBzJyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAyICYmIGkgPCBjaGFtcGlvbkRhdGEudGlwcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGNoYW1waW9uVGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNoYW1waW9uVGlwLmNsYXNzTmFtZSA9ICdjaGFtcGlvbi10aXAnO1xuICAgIGNoYW1waW9uVGlwLnRleHRDb250ZW50ID0gYCR7Y2hhbXBpb25EYXRhLnRpcHNbaV19YDtcbiAgICBjaGFtcGlvblRpcHMuYXBwZW5kQ2hpbGQoY2hhbXBpb25UaXApO1xuICB9XG59O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuZXhwb3J0IHsgY2hhbXBpb25EZXRhaWxzTW9kYWwgfTtcbiIsImltcG9ydCB7IGdldENoYW1waW9uRGV0YWlscyB9IGZyb20gJy4uL2NoYW1waW9uRGF0YS9jaGFtcGlvbkRldGFpbHMnO1xuaW1wb3J0IGdldENoYW1waW9uU3RhdHMgZnJvbSAnLi4vY2hhbXBpb25EYXRhL2NoYW1waW9uU3RhdHMnO1xuaW1wb3J0IEl0ZW1JbmZvIGZyb20gJy4uL2NoYW1waW9uRGF0YS9pdGVtSW5mbyc7XG5pbXBvcnQge1xuICByZW5kZXJIZWFkZXJEZXRhaWxzLFxuICByZW5kZXJTdGF0T3ZlcnZpZXcsXG4gIHJlbmRlckRhbWFnZVN0YXRzLFxuICByZW5kZXJDaGFtcGlvbkxhbmUsXG4gIHJlbmRlck1hdGNodXBzSW5mbyxcbn0gZnJvbSAnLi9yZW5kZXJIZWxwZXJzJztcbmltcG9ydCBFbGVtZW50Q3JlYXRpb24gZnJvbSAnLi4vaGVscGVycy9lbGVtZW50Q3JlYXRpb24nO1xuXG5jb25zdCBjaGFtcGlvblN0YXRzTW9kYWwgPSBhc3luYyAoY2hhbXBpb25JZCkgPT4ge1xuICBjb25zdCBjaGFtcGlvbkRhdGEgPSBhd2FpdCBnZXRDaGFtcGlvbkRldGFpbHMoY2hhbXBpb25JZCk7XG4gIGNvbnN0IGNoYW1waW9uU3RhdHMgPSBhd2FpdCBnZXRDaGFtcGlvblN0YXRzKGNoYW1waW9uSWQpO1xuXG4gIHJlbmRlckhlYWRlckRldGFpbHMoY2hhbXBpb25EYXRhLCAnc3RhdHMnKTtcblxuICBjb25zdCBzdGF0c092ZXJ2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLXN0YXRzLW92ZXJ2aWV3Jyk7XG5cbiAgcmVuZGVyU3RhdE92ZXJ2aWV3KHN0YXRzT3ZlcnZpZXcsICdXaW4gUmF0ZScsIGNoYW1waW9uU3RhdHMud2luUmF0ZSk7XG4gIHJlbmRlclN0YXRPdmVydmlldyhzdGF0c092ZXJ2aWV3LCAnUGljayBSYXRlJywgY2hhbXBpb25TdGF0cy5waWNrUmF0ZSk7XG4gIC8qIE1ha2UgZXZlcnkgbGV0dGVyIGV4Y2VwdCB0aGUgZmlyc3QgbG93ZXIgY2FzZSAqL1xuICBjb25zdCBsYW5lID0gYCR7Y2hhbXBpb25TdGF0cy5sYW5lWzBdICsgY2hhbXBpb25TdGF0cy5sYW5lLnN1YnN0cmluZygxKS50b0xvd2VyQ2FzZSgpfWA7XG4gIHJlbmRlckNoYW1waW9uTGFuZShzdGF0c092ZXJ2aWV3LCBsYW5lKTtcblxuICAvKiBTZXRzIHRoZSB2YWx1ZXMgYW5kIHBlcmNlbnRhZ2VzIGZvciB0aGUgYXZlcmFnZSBkYW1hZ2Ugc2VjdGlvbiBvZiB0aGUgc3RhdHMgbW9kYWwgKi9cblxuICBjb25zdCB0cnVlRGFtYWdlQ2lyY2xlU3Ryb2tlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RydWUtZGFtYWdlLXN0cm9rZScpO1xuICBjb25zdCBwaHlzaWNhbERhbWFnZUNpcmNsZVN0cm9rZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwaHlzaWNhbC1kYW1hZ2Utc3Ryb2tlJyk7XG4gIGNvbnN0IG1hZ2ljRGFtYWdlQ2lyY2xlU3Ryb2tlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hZ2ljLWRhbWFnZS1zdHJva2UnKTtcblxuICBjb25zdCB0cnVlRGFtYWdlUGVyY2VudCA9IE1hdGgucm91bmQoY2hhbXBpb25TdGF0cy5kYW1hZ2VQZXJNYXRjaC50cnVlRGFtYWdlLnBlcmNlbnRhZ2UpO1xuICBjb25zdCBwaHlzaWNhbERhbWFnZVBlcmNlbnQgPSBNYXRoLnJvdW5kKGNoYW1waW9uU3RhdHMuZGFtYWdlUGVyTWF0Y2gucGh5c2ljYWxEYW1hZ2UucGVyY2VudGFnZSk7XG4gIGNvbnN0IG1hZ2ljRGFtYWdlUGVyY2VudCA9IE1hdGgucm91bmQoY2hhbXBpb25TdGF0cy5kYW1hZ2VQZXJNYXRjaC5tYWdpY0RhbWFnZS5wZXJjZW50YWdlKTtcblxuICB0cnVlRGFtYWdlQ2lyY2xlU3Ryb2tlLnN0eWxlLnN0cm9rZURhc2hhcnJheSA9IGAke3RydWVEYW1hZ2VQZXJjZW50fSAxMDBgO1xuICBwaHlzaWNhbERhbWFnZUNpcmNsZVN0cm9rZS5zdHlsZS5zdHJva2VEYXNoYXJyYXkgPSBgJHtwaHlzaWNhbERhbWFnZVBlcmNlbnQgKyB0cnVlRGFtYWdlUGVyY2VudH0gMTAwYDtcbiAgbWFnaWNEYW1hZ2VDaXJjbGVTdHJva2Uuc3R5bGUuc3Ryb2tlRGFzaGFycmF5ID0gJzEwMCwgMTAwJztcbiAgY29uc3QgdG90YWxEYW1hZ2VUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvdGFsLWRhbWFnZS10ZXh0Jyk7XG4gIHRvdGFsRGFtYWdlVGV4dC50ZXh0Q29udGVudCA9IE1hdGgucm91bmQoY2hhbXBpb25TdGF0cy5kYW1hZ2VQZXJNYXRjaC50b3RhbERhbWFnZS52YWx1ZSk7XG5cbiAgY29uc3QgdHJ1ZURhbWFnZVZhbHVlID0gTWF0aC5yb3VuZChjaGFtcGlvblN0YXRzLmRhbWFnZVBlck1hdGNoLnRydWVEYW1hZ2UudmFsdWUpO1xuICBjb25zdCBwaHlzaWNhbERhbWFnZVZhbHVlID0gTWF0aC5yb3VuZChjaGFtcGlvblN0YXRzLmRhbWFnZVBlck1hdGNoLnBoeXNpY2FsRGFtYWdlLnZhbHVlKTtcbiAgY29uc3QgbWFnaWNEYW1hZ2VWYWx1ZSA9IE1hdGgucm91bmQoY2hhbXBpb25TdGF0cy5kYW1hZ2VQZXJNYXRjaC5tYWdpY0RhbWFnZS52YWx1ZSk7XG5cbiAgcmVuZGVyRGFtYWdlU3RhdHMoJ3BoeXNpY2FsJywgcGh5c2ljYWxEYW1hZ2VWYWx1ZSwgcGh5c2ljYWxEYW1hZ2VQZXJjZW50KTtcbiAgcmVuZGVyRGFtYWdlU3RhdHMoJ21hZ2ljJywgbWFnaWNEYW1hZ2VWYWx1ZSwgbWFnaWNEYW1hZ2VQZXJjZW50KTtcbiAgcmVuZGVyRGFtYWdlU3RhdHMoJ3RydWUnLCB0cnVlRGFtYWdlVmFsdWUsIHRydWVEYW1hZ2VQZXJjZW50KTtcblxuICAvKiBSZW5kZXJzIHRoZSBpdGVtIGJ1aWxkcyBzZWN0aW9uIG9mIHRoZSBzdGF0cyBtb2RhbCAqL1xuICBjb25zdCB7IGl0ZW1TZXRzIH0gPSBjaGFtcGlvblN0YXRzO1xuICBjb25zdCBhbGxJdGVtcyA9IGF3YWl0IEl0ZW1JbmZvLmdldEFsbEl0ZW1zKCk7XG4gIGNvbnN0IGNoYW1waW9uSXRlbUJ1aWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbi1pdGVtLWJ1aWxkcycpO1xuICBjb25zdCBpdGVtU2V0c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpdGVtU2V0c0NvbnRhaW5lci5jbGFzc05hbWUgPSAnaXRlbS1zZXRzLWNvbnRhaW5lcic7XG4gIGNoYW1waW9uSXRlbUJ1aWxkcy5hcHBlbmRDaGlsZChpdGVtU2V0c0NvbnRhaW5lcik7XG5cbiAgaXRlbVNldHMuZm9yRWFjaCgoaXRlbVNldCkgPT4ge1xuICAgIGNvbnN0IGl0ZW1TZXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtU2V0Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdpdGVtLXNldC1jb250YWluZXInO1xuICAgIGl0ZW1TZXRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1TZXRDb250YWluZXIpO1xuXG4gICAgaXRlbVNldC5mb3JFYWNoKChpdGVtSWQpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBuZXcgSXRlbUluZm8oaXRlbUlkKTtcbiAgICAgIGNvbnN0IGl0ZW1JbmZvID0gaXRlbS5nZXRJdGVtSW5mbyhhbGxJdGVtcyk7XG4gICAgICBpZiAoIWl0ZW1JbmZvLnRhZ3MuaW5jbHVkZXMoJ1RyaW5rZXQnKSAmJiAhaXRlbUluZm8udGFncy5pbmNsdWRlcygnQ29uc3VtYWJsZScpKSB7XG4gICAgICAgIGNvbnN0IG1haW5Db21wb25lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWFpbkNvbXBvbmVudENvbnRhaW5lci5jbGFzc05hbWUgPSAnbWFpbi1jb21wb25lbnQtY29udGFpbmVyJztcbiAgICAgICAgaXRlbVNldENvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluQ29tcG9uZW50Q29udGFpbmVyKTtcblxuICAgICAgICBjb25zdCBtYWluSXRlbSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdtYWluLWl0ZW0nLCBtYWluQ29tcG9uZW50Q29udGFpbmVyKTtcblxuICAgICAgICBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MoJ2l0ZW0taW1nJywgbWFpbkl0ZW0sIGl0ZW1JbmZvLmltYWdlVXJsLCBgJHtpdGVtSWR9LnBuZ2ApO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1EZXRhaWxzQ29udGFpbmVyID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2l0ZW0tZGV0YWlscy1jb250YWluZXInLCBtYWluSXRlbSk7XG5cbiAgICAgICAgY29uc3QgbmFtZUVsZW1lbnQgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2l0ZW0tbmFtZScsIGl0ZW1EZXRhaWxzQ29udGFpbmVyKTtcbiAgICAgICAgbmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSBpdGVtSW5mby5uYW1lO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkVsZW1lbnQgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2l0ZW0tZGVzY3JpcHRpb24nLCBpdGVtRGV0YWlsc0NvbnRhaW5lcik7XG4gICAgICAgIGRlc2NyaXB0aW9uRWxlbWVudC5pbm5lckhUTUwgPSBpdGVtSW5mby5kZXNjcmlwdGlvbjtcbiAgICAgICAgY29uc3QgaXRlbUNvc3QgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnaXRlbS1jb3N0JywgaXRlbURldGFpbHNDb250YWluZXIpO1xuICAgICAgICBjb25zdCBjb3N0TGFiZWwgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2Nvc3QtbGFiZWwnLCBpdGVtQ29zdCk7XG4gICAgICAgIGNvc3RMYWJlbC50ZXh0Q29udGVudCA9ICdHb2xkOiAnO1xuICAgICAgICBjb25zdCBjb3N0QW1vdW50ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdjb3N0LWFtb3VudCcsIGl0ZW1Db3N0KTtcbiAgICAgICAgY29zdEFtb3VudC50ZXh0Q29udGVudCA9IGl0ZW1JbmZvLmNvc3Q7XG5cbiAgICAgICAgLyogVGhlIGNvbXBvbmVudCBpdGVtcyBhcmUgdGhlIHNtYWxsZXIgaXRlbXMgdGhhdCBhcHBlYXIgYmVsb3cgdGhlIG1haW4gaXRlbSAqL1xuICAgICAgICBjb25zdCB7IGNvbXBvbmVudEl0ZW1zIH0gPSBpdGVtSW5mbztcbiAgICAgICAgY29uc3QgY29tcG9uZW50SXRlbXNDb250YWluZXIgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnY29tcG9uZW50LWl0ZW1zLWNvbnRhaW5lcicsIG1haW5Db21wb25lbnRDb250YWluZXIpO1xuXG4gICAgICAgIGNvbXBvbmVudEl0ZW1zLmZvckVhY2goKGNvbXBvbmVudEl0ZW0pID0+IHtcbiAgICAgICAgICBjb25zdCBjb21wb25lbnRJdGVtRWxlbWVudCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdjb21wb25lbnQtaXRlbScsIGNvbXBvbmVudEl0ZW1zQ29udGFpbmVyKTtcbiAgICAgICAgICBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MoJ2NvbXBvbmVudC1pdGVtLWltZycsXG4gICAgICAgICAgICBjb21wb25lbnRJdGVtRWxlbWVudCwgY29tcG9uZW50SXRlbS5pbWFnZVVybCwgYCR7Y29tcG9uZW50SXRlbS5uYW1lfWApO1xuXG4gICAgICAgICAgY29uc3QgY29tcG9uZW50SXRlbURldGFpbHNDb250YWluZXIgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnY29tcG9uZW50LWl0ZW0tZGV0YWlscy1jb250YWluZXInLCBjb21wb25lbnRJdGVtRWxlbWVudCk7XG5cbiAgICAgICAgICBjb25zdCBjb21wb25lbnRJdGVtTmFtZSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnY29tcG9uZW50LWl0ZW0tbmFtZScsIGNvbXBvbmVudEl0ZW1EZXRhaWxzQ29udGFpbmVyKTtcbiAgICAgICAgICBjb21wb25lbnRJdGVtTmFtZS50ZXh0Q29udGVudCA9IGNvbXBvbmVudEl0ZW0ubmFtZTtcbiAgICAgICAgICBjb25zdCBjb21wb25lbnRJdGVtQ29zdCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdjb21wb25lbnQtaXRlbS1jb3N0JywgY29tcG9uZW50SXRlbURldGFpbHNDb250YWluZXIpO1xuICAgICAgICAgIGNvbnN0IGNvbXBvbmVudEl0ZW1Db3N0TGFiZWwgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2NvbXBvbmVudC1pdGVtLWNvc3QtbGFiZWwnLCBjb21wb25lbnRJdGVtQ29zdCk7XG4gICAgICAgICAgY29tcG9uZW50SXRlbUNvc3RMYWJlbC50ZXh0Q29udGVudCA9ICdHb2xkOiAnO1xuICAgICAgICAgIGNvbnN0IGNvbXBvbmVudEl0ZW1BbW91bnQgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2NvbXBvbmVudC1pdGVtLWFtb3VudCcsIGNvbXBvbmVudEl0ZW1Db3N0KTtcbiAgICAgICAgICBjb21wb25lbnRJdGVtQW1vdW50LnRleHRDb250ZW50ID0gY29tcG9uZW50SXRlbS5jb3N0O1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIC8qIFJlbmRlcnMgdGhlIG1hdGNodXBzIHNlY3Rpb24gb2YgdGhlIGNoYW1waW9uIG1vZGFsIHN0YXRzIHBhZ2UgKi9cbiAgY29uc3QgYmVzdE1hdGNodXBzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iZXN0LW1hdGNodXBzLXNlY3Rpb24nKTtcbiAgY29uc3QgYmVzdE1hdGNodXBzRWxlbWVudCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdiZXN0LW1hdGNodXBzIG1hdGNodXBzJywgYmVzdE1hdGNodXBzU2VjdGlvbik7XG4gIGNvbnN0IGJlc3RNYXRjaHVwc0RhdGEgPSBjaGFtcGlvblN0YXRzLmJlc3RNYXRjaFVwcztcbiAgcmVuZGVyTWF0Y2h1cHNJbmZvKGJlc3RNYXRjaHVwc0VsZW1lbnQsIGJlc3RNYXRjaHVwc0RhdGEpO1xuXG4gIGNvbnN0IHdvcnN0TWF0Y2h1cHNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcnN0LW1hdGNodXBzLXNlY3Rpb24nKTtcbiAgY29uc3Qgd29yc3RNYXRjaHVwc0VsZW1lbnQgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnd29yc3QtbWF0Y2h1cHMgbWF0Y2h1cHMnLCB3b3JzdE1hdGNodXBzU2VjdGlvbik7XG4gIGNvbnN0IHdvcnN0TWF0Y2h1cHNEYXRhID0gY2hhbXBpb25TdGF0cy53b3JzdE1hdGNoVXBzO1xuICByZW5kZXJNYXRjaHVwc0luZm8od29yc3RNYXRjaHVwc0VsZW1lbnQsIHdvcnN0TWF0Y2h1cHNEYXRhKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNoYW1waW9uU3RhdHNNb2RhbDtcbiIsIi8vIFJlbmRlcnMgRE9NIGVsZW1lbnRzIHRoYXQgYXJlIHJlcGVhdGVkIGFjcm9zcyB0ZW1wbGF0ZXNcblxuaW1wb3J0IEVsZW1lbnRDcmVhdGlvbiBmcm9tICcuLi9oZWxwZXJzL2VsZW1lbnRDcmVhdGlvbic7XG5cbmNvbnN0IGltcG9ydEFsbCA9IChyKSA9PiB7XG4gIGNvbnN0IGltYWdlcyA9IHt9O1xuICByLmtleXMoKS5mb3JFYWNoKChpdGVtKSA9PiB7IGltYWdlc1tpdGVtLnJlcGxhY2UoJy4vJywgJycpXSA9IHIoaXRlbSk7IH0pO1xuICByZXR1cm4gaW1hZ2VzO1xufTtcblxuY29uc3QgaW1hZ2VzID0gaW1wb3J0QWxsKHJlcXVpcmUuY29udGV4dCgnLi4vaW1hZ2VzJywgZmFsc2UsIC9cXC4ocG5nfGpwZT9nfHN2ZykkLykpO1xuXG5jb25zdCByZW5kZXJIZWFkZXJEZXRhaWxzID0gKGNoYW1waW9uRGF0YSwgbW9kYWxDb250YWluZXIpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7bW9kYWxDb250YWluZXJ9LWNvbnRhaW5lcmApO1xuICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZCA9IGBuby1yZXBlYXQgdXJsKGh0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi9pbWcvY2hhbXBpb24vc3BsYXNoLyR7Y2hhbXBpb25EYXRhLmlkfV8wLmpwZykgNzAlIDgwJWA7XG4gIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb3Zlcic7XG5cbiAgY29uc3QgY2hhbXBpb25UaXRsZSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tdGl0bGUnKTtcbiAgY2hhbXBpb25UaXRsZS50ZXh0Q29udGVudCA9IGNoYW1waW9uRGF0YS50aXRsZTtcblxuICBjb25zdCBjaGFtcGlvbk5hbWUgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLW5hbWUnKTtcbiAgY2hhbXBpb25OYW1lLnRleHRDb250ZW50ID0gY2hhbXBpb25EYXRhLm5hbWU7XG59O1xuXG4vLyBSZW5kZXJzIHdpbiBvciBwaWNrIHJhdGUgdG8gdGhlIERPTVxuY29uc3QgcmVuZGVyU3RhdE92ZXJ2aWV3ID0gKHN0YXRzT3ZlcnZpZXcsIHJhdGVUZXh0LCByYXRlVHlwZSkgPT4ge1xuICBjb25zdCBjaGFtcGlvblJhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNvbnN0IHJhdGVWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAvLyBUdXJucyAnV2luIFJhdGUnIGludG8gJ3dpbi1yYXRlJ1xuICBjb25zdCBsb3dlckNhc2VUZXh0ID0gcmF0ZVRleHQucmVwbGFjZSgnICcsICctJykudG9Mb3dlckNhc2UoKTtcblxuICBjaGFtcGlvblJhdGUuY2xhc3NOYW1lID0gbG93ZXJDYXNlVGV4dDtcbiAgbGFiZWwuaWQgPSBgJHtsb3dlckNhc2VUZXh0fS1sYWJlbGA7XG4gIGxhYmVsLmNsYXNzTmFtZSA9ICdsYWJlbCc7XG4gIHJhdGVWYWx1ZS5jbGFzc05hbWUgPSBgJHtsb3dlckNhc2VUZXh0fS12YWx1ZWA7XG4gIGxhYmVsLnRleHRDb250ZW50ID0gcmF0ZVRleHQ7XG4gIHJhdGVWYWx1ZS50ZXh0Q29udGVudCA9IGAke3JhdGVUeXBlfSVgO1xuXG4gIGNoYW1waW9uUmF0ZS5hcHBlbmRDaGlsZChsYWJlbCk7IGNoYW1waW9uUmF0ZS5hcHBlbmRDaGlsZChyYXRlVmFsdWUpO1xuICBzdGF0c092ZXJ2aWV3LmFwcGVuZENoaWxkKGNoYW1waW9uUmF0ZSk7XG59O1xuXG5jb25zdCByZW5kZXJDaGFtcGlvbkxhbmUgPSAoc3RhdHNPdmVydmlldywgbGFuZSkgPT4ge1xuICBjb25zdCBjaGFtcGlvbkxhbmVJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNoYW1waW9uTGFuZUluZm8uY2xhc3NOYW1lID0gJ2xhbmUtaW5mbyc7XG4gIGNvbnN0IGxhbmVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBsYW5lVGV4dC5jbGFzc05hbWUgPSAnbGFuZS10ZXh0IGxhYmVsJztcbiAgbGFuZVRleHQudGV4dENvbnRlbnQgPSBsYW5lO1xuICBjb25zdCBsYW5lSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBsYW5lSWNvbi5jbGFzc05hbWUgPSAnbGFuZS1pY29uIGNoYW1waW9uLXJvbGUtaW1hZ2UnO1xuICBsYW5lSWNvbi5zcmMgPSBgJHtpbWFnZXNbYCR7bGFuZX0ucG5nYF19YDtcbiAgbGFuZUljb24uYWx0ID0gYCR7bGFuZX0ucG5nYDtcbiAgY2hhbXBpb25MYW5lSW5mby5hcHBlbmRDaGlsZChsYW5lVGV4dCk7XG4gIGNoYW1waW9uTGFuZUluZm8uYXBwZW5kQ2hpbGQobGFuZUljb24pO1xuICBzdGF0c092ZXJ2aWV3LmFwcGVuZENoaWxkKGNoYW1waW9uTGFuZUluZm8pO1xufTtcblxuY29uc3QgcmVuZGVyRGFtYWdlU3RhdHMgPSAoZGFtYWdlVHlwZSwgZGFtYWdlVmFsdWUsIGRhbWFnZVBlcmNlbnRhZ2UpID0+IHtcbiAgY29uc3QgZGFtYWdlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZGFtYWdlVHlwZX0tZGFtYWdlLWNvbnRhaW5lcmApO1xuXG4gIGNvbnN0IGRhbWFnZVN0YXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRhbWFnZVN0YXRzLmNsYXNzTmFtZSA9ICdkYW1hZ2Utc3RhdHMnO1xuXG4gIGNvbnN0IGRhbWFnZVZhbHVlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgY29uc3QgZGFtYWdlUGVyY2VudGFnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGRhbWFnZVZhbHVlRWxlbWVudC5pZCA9IGAke2RhbWFnZVR5cGV9LXZhbHVlYDsgZGFtYWdlUGVyY2VudGFnZUVsZW1lbnQuaWQgPSBgJHtkYW1hZ2VUeXBlfS1wZXJjZW50YWdlYDtcbiAgZGFtYWdlVmFsdWVFbGVtZW50LnRleHRDb250ZW50ID0gYCR7ZGFtYWdlVmFsdWV9YDtcbiAgZGFtYWdlUGVyY2VudGFnZUVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtkYW1hZ2VQZXJjZW50YWdlfSVgO1xuXG4gIGRhbWFnZVN0YXRzLmFwcGVuZENoaWxkKGRhbWFnZVZhbHVlRWxlbWVudCk7IGRhbWFnZVN0YXRzLmFwcGVuZENoaWxkKGRhbWFnZVBlcmNlbnRhZ2VFbGVtZW50KTtcbiAgZGFtYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhbWFnZVN0YXRzKTtcbn07XG5cbmNvbnN0IHJlbmRlck1hdGNodXBzSW5mbyA9IChtYXRjaHVwc0VsZW1lbnQsIG1hdGNodXBzRGF0YSkgPT4ge1xuICBtYXRjaHVwc0RhdGEuZm9yRWFjaCgobWF0Y2h1cCkgPT4ge1xuICAgIGNvbnN0IG1hdGNodXBJbmZvID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ21hdGNodXAtaW5mbycsIG1hdGNodXBzRWxlbWVudCk7XG4gICAgY29uc3QgZW5lbXlDaGFtcGlvbk5hbWUgPSBtYXRjaHVwWzBdO1xuICAgIGNvbnN0IGVuZW15Q2hhbXBpb25JbWdVcmwgPSBgaHR0cDovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vMTEuMjIuMS9pbWcvY2hhbXBpb24vJHtlbmVteUNoYW1waW9uTmFtZX0ucG5nYDtcbiAgICBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRJbWFnZUVsZW1lbnRXaXRoQ2xhc3MoXG4gICAgICAnZW5lbXktY2hhbXBpb24taW1nJywgbWF0Y2h1cEluZm8sIGVuZW15Q2hhbXBpb25JbWdVcmwsIGBzbWFsbC0ke2VuZW15Q2hhbXBpb25OYW1lfS5wbmdgLFxuICAgICk7XG5cbiAgICBjb25zdCBtYXRjaHVwU3RhdHMgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnbWF0Y2h1cC1zdGF0cycsIG1hdGNodXBJbmZvKTtcbiAgICBjb25zdCBlbmVteUNoYW1waW9uTmFtZUVsZW1lbnQgPSBFbGVtZW50Q3JlYXRpb24uY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzKCdzcGFuJywgJ2VuZW15LWNoYW1waW9uLW5hbWUnLCBtYXRjaHVwU3RhdHMpO1xuICAgIGVuZW15Q2hhbXBpb25OYW1lRWxlbWVudC50ZXh0Q29udGVudCA9IGVuZW15Q2hhbXBpb25OYW1lO1xuICAgIGNvbnN0IHdpbnJhdGVBZ2FpbnN0ID0gRWxlbWVudENyZWF0aW9uLmNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ3dpbnJhdGUtYWdhaW5zdCcsIG1hdGNodXBTdGF0cyk7XG4gICAgY29uc3Qgd2lucmF0ZUFnYWluc3RMYWJlbCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnd2lucmF0ZS1hZ2FpbnN0LWxhYmVsJywgd2lucmF0ZUFnYWluc3QpO1xuICAgIHdpbnJhdGVBZ2FpbnN0TGFiZWwudGV4dENvbnRlbnQgPSAnV2lucmF0ZTogJztcbiAgICBjb25zdCBjb2xvciA9IG1hdGNodXBzRWxlbWVudC5jbGFzc05hbWUgPT09ICdiZXN0LW1hdGNodXBzIG1hdGNodXBzJyA/ICdibHVlJyA6ICdyZWQnO1xuICAgIGNvbnN0IHdpbnJhdGVBZ2FpbnN0UGVyY2VudGFnZSA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCBgd2lucmF0ZS1hZ2FpbnN0LXBlcmNlbnRhZ2UgJHtjb2xvcn1gLCB3aW5yYXRlQWdhaW5zdCk7XG4gICAgd2lucmF0ZUFnYWluc3RQZXJjZW50YWdlLnRleHRDb250ZW50ID0gYCR7bWF0Y2h1cFsxXS53aW5SYXRlQWdhaW5zdC50b0ZpeGVkKDApfSVgO1xuICAgIGNvbnN0IGdhbWVzUGxheWVkQWdhaW5zdCA9IEVsZW1lbnRDcmVhdGlvbi5jcmVhdGVDaGlsZEVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnZ2FtZXMtcGxheWVkLWFnYWluc3QnLCBtYXRjaHVwU3RhdHMpO1xuICAgIGdhbWVzUGxheWVkQWdhaW5zdC50ZXh0Q29udGVudCA9IGBHYW1lczogJHttYXRjaHVwWzFdLm1hdGNoZXN9YDtcbiAgfSk7XG59O1xuXG5leHBvcnQge1xuICByZW5kZXJIZWFkZXJEZXRhaWxzLFxuICByZW5kZXJTdGF0T3ZlcnZpZXcsXG4gIHJlbmRlckNoYW1waW9uTGFuZSxcbiAgcmVuZGVyRGFtYWdlU3RhdHMsXG4gIGltYWdlcyxcbiAgcmVuZGVyTWF0Y2h1cHNJbmZvLFxufTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDE7XFxuICBwYWRkaW5nOiA0cmVtO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuLm1vZGFsICNtYWluLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nOiAwO1xcbiAgbWF4LXdpZHRoOiA3NSU7XFxuICBtaW4taGVpZ2h0OiA0OXJlbTtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5tb2RhbCAubW9kYWwtaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBiZjtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3JkZXItY29sb3I6ICM5Mjc1NDM7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5tb2RhbCAubW9kYWwtbmF2LWxpbmtzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcbi5tb2RhbCAubW9kYWwtbmF2LWxpbmsge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLXRvcDogMC41ZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG59XFxuLm1vZGFsIC5tb2RhbC1uYXYtbGluazpob3ZlciB7XFxuICBjb2xvcjogIzkyNzU0MztcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1oZWFkaW5nIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1uYW1lIHtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi10aXRsZSB7XFxuICBjb2xvcjogI2M3YWI2ZTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tcm9sZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXJvbGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1yZXNvdXJjZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXJvbGUtaW1hZ2Uge1xcbiAgaGVpZ2h0OiAzLjVyZW07XFxuICB3aWR0aDogMy41cmVtO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXJlc291cmNlLWltYWdlIHtcXG4gIGhlaWdodDogMy41cmVtO1xcbiAgd2lkdGg6IDMuNXJlbTtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1yb2xlLW5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1yZXNvdXJjZS1uYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tbWFpbi1pbmZvIHtcXG4gIHBhZGRpbmc6IDEuOHJlbTtcXG4gIG1heC13aWR0aDogMzRyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogbGFzdCBiYXNlbGluZTtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xcbiAgZnJvbSB7XFxuICAgIHRvcDogLTMwMHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0b3A6IDA7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XFxuICBmcm9tIHtcXG4gICAgdG9wOiAtMzAwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICB0byB7XFxuICAgIHRvcDogMDtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuLm1vZGFsIC5sb3JlLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwYmY7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyLWNvbG9yOiAjOTI3NTQzO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG59XFxuLm1vZGFsIC5zdWJoZWFkaW5nIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDAuNGVtO1xcbiAgY29sb3I6ICNjN2FiNmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tb2RhbCAuYWJpbGl0aWVzLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwYmY7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyLWNvbG9yOiAjOTI3NTQzO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIHdpZHRoOiAyMGVtO1xcbn1cXG4ubW9kYWwgLmFiaWxpdGllcy1oZWFkaW5nIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1vZGFsIC5hYmlsaXR5LXBpY3R1cmVzIHtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuLm1vZGFsIC5hYmlsaXR5LWRlc2NyaXB0aW9uIHtcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tZGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1leHRyYS1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ubW9kYWwgLmFiaWxpdHktaW5mbyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubW9kYWwgLmFiaWxpdHktaW5mby5hY3RpdmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5tb2RhbCAuc3BlbGwtaW1nIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMCAwLjVyZW07XFxuICBoZWlnaHQ6IDMuM3JlbTtcXG4gIHdpZHRoOiAzLjNyZW07XFxufVxcbi5tb2RhbCAuc3BlbGwtaW1nLmNsaWNrZWQge1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogIzkyNzU0MztcXG4gIGJvcmRlci13aWR0aDogNHB4O1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXRpcHMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMGJmO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC42ZW07XFxuICBsaW5lLWhlaWdodDogMS40O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlci1jb2xvcjogIzkyNzU0MztcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XFxuICBtYXgtd2lkdGg6IDM0cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXRpcCB7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcbi5tb2RhbCAjc3RhdHMtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXgtd2lkdGg6IDc1JTtcXG4gIG1pbi1oZWlnaHQ6IDQ5cmVtO1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXN0YXRzLW92ZXJ2aWV3IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxuICBtYXgtd2lkdGg6IDI1cmVtO1xcbiAgbWluLXdpZHRoOiAyMHJlbTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuLm1vZGFsIC53aW4tcmF0ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLm1vZGFsIC5waWNrLXJhdGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5tb2RhbCAubGFuZS1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1vZGFsIC5waWNrLXJhdGUtdmFsdWUge1xcbiAgbWFyZ2luLXRvcDogMC40ZW07XFxuICBjb2xvcjogI2M3YWI2ZTtcXG59XFxuLm1vZGFsIC53aW4tcmF0ZS12YWx1ZSB7XFxuICBtYXJnaW4tdG9wOiAwLjRlbTtcXG4gIGNvbG9yOiAjYzdhYjZlO1xcbn1cXG4ubW9kYWwgLmxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1kYW1hZ2UtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBiZjtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3JkZXItY29sb3I6ICM5Mjc1NDM7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgbWF4LWhlaWdodDogMTcuNXJlbTtcXG59XFxuLm1vZGFsIC5kYW1hZ2UtaGVhZGluZyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tb2RhbCAuY2lyY3VsYXItY2hhcnQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXgtd2lkdGg6IDgwJTtcXG4gIG1heC1oZWlnaHQ6IDI1MHB4O1xcbn1cXG4ubW9kYWwgLmNpcmNsZSB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlLXdpZHRoOiAyLjI7XFxuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XFxuICBhbmltYXRpb246IHByb2dyZXNzIDFzIGVhc2Utb3V0IGZvcndhcmRzO1xcbn1cXG4ubW9kYWwgI21hZ2ljLWRhbWFnZS1zdHJva2Uge1xcbiAgc3Ryb2tlOiAjMzVBN0ZGO1xcbn1cXG4ubW9kYWwgI3BoeXNpY2FsLWRhbWFnZS1zdHJva2Uge1xcbiAgc3Ryb2tlOiAjZmY1OTY0O1xcbn1cXG4ubW9kYWwgI3RydWUtZGFtYWdlLXN0cm9rZSB7XFxuICBzdHJva2U6ICNGRkU3NEM7XFxufVxcbkBrZXlmcmFtZXMgcHJvZ3Jlc3Mge1xcbiAgMCUge1xcbiAgICBzdHJva2UtZGFzaGFycmF5OiAwIDEwMDtcXG4gIH1cXG59XFxuLm1vZGFsIC50b3RhbC1kYW1hZ2UtdGV4dCB7XFxuICBmb250LXNpemU6IDRweDtcXG4gIHRleHQtYW5jaG9yOiBtaWRkbGU7XFxuICBmaWxsOiB3aGl0ZTtcXG59XFxuLm1vZGFsIC50b3RhbC1kYW1hZ2UtbGFiZWwge1xcbiAgZm9udC1zaXplOiAzcHg7XFxuICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xcbiAgZmlsbDogIzkyNzU0MztcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1tYWluLXN0YXRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1pdGVtLWJ1aWxkcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwYmY7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyLWNvbG9yOiAjOTI3NTQzO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIG1heC1oZWlnaHQ6IDE3LjVyZW07XFxufVxcbi5tb2RhbCAuZGFtYWdlLXN0YXRzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1vZGFsIC5kYW1hZ2UtaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWF4LWhlaWdodDogOTIlO1xcbiAgaGVpZ2h0OiA5MiU7XFxufVxcbi5tb2RhbCAuZGFtYWdlLXR5cGUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcbi5tb2RhbCAuZGFtYWdlLXN0YXRzIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcbi5tb2RhbCAjcGh5c2ljYWwtZGFtYWdlLWxhYmVsIHtcXG4gIGNvbG9yOiAjZmY1OTY0O1xcbn1cXG4ubW9kYWwgI21hZ2ljLWRhbWFnZS1sYWJlbCB7XFxuICBjb2xvcjogIzM1QTdGRjtcXG59XFxuLm1vZGFsICN0cnVlLWRhbWFnZS1sYWJlbCB7XFxuICBjb2xvcjogI0ZGRTc0QztcXG59XFxuLm1vZGFsIC5pdGVtLWRldGFpbHMtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBiZjtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3JkZXItY29sb3I6ICM5Mjc1NDM7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjA7XFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB3aWR0aDogNDAlO1xcbiAgcmlnaHQ6IDFlbTtcXG4gIG1hcmdpbi1ib3R0b206IDMuNWVtO1xcbn1cXG4ubW9kYWwgLml0ZW0tbmFtZSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4ubW9kYWwgLm1haW4taXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbn1cXG4ubW9kYWwgLmNvc3QtbGFiZWwge1xcbiAgY29sb3I6ICNjN2FiNmU7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5tb2RhbCAuY29tcG9uZW50LWl0ZW1zLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ubW9kYWwgLmNvbXBvbmVudC1pdGVtLW5hbWUge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4ubW9kYWwgLmNvc3QtYW1vdW50IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLm1vZGFsIC5jb21wb25lbnQtaXRlbS1jb3N0LWxhYmVsIHtcXG4gIGNvbG9yOiAjYzdhYjZlO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4ubW9kYWwgLmNvbXBvbmVudC1pdGVtLWFtb3VudCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5tb2RhbCAuY29tcG9uZW50LWl0ZW0tZGV0YWlscy1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMGJmO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC42ZW07XFxuICBsaW5lLWhlaWdodDogMS40O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlci1jb2xvcjogIzkyNzU0MztcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5tb2RhbCAuaXRlbS1zZXRzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1heC1oZWlnaHQ6IDkwJTtcXG59XFxuLm1vZGFsIC5pdGVtLXNldC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICBwYWRkaW5nOiAwLjRlbTtcXG59XFxuLm1vZGFsIC5tYWluLWNvbXBvbmVudC1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMGJmO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC42ZW07XFxuICBsaW5lLWhlaWdodDogMS40O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlci1jb2xvcjogIzkyNzU0MztcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYwNDAwODM7XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDBlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG59XFxuLm1vZGFsIC5pdGVtLWltZyB7XFxuICBtYXgtd2lkdGg6IDIuN2VtO1xcbiAgbWF4LWhlaWdodDogMi43ZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG59XFxuLm1vZGFsIC5jb21wb25lbnQtaXRlbS1pbWcge1xcbiAgbWF4LXdpZHRoOiAxLjhlbTtcXG4gIG1heC1oZWlnaHQ6IDEuOGVtO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLW1hdGNodXBzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBiZjtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3JkZXItY29sb3I6ICM5Mjc1NDM7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgbWF4LWhlaWdodDogMjUuMnJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgMCAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG4ubW9kYWwgLm1hdGNodXBzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIG1heC13aWR0aDogMjRyZW07XFxufVxcbi5tb2RhbCAubWF0Y2h1cC1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTYxYTtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgbWFyZ2luOiBhdXRvIDAuNWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG4ubW9kYWwgLm1hdGNodXAtaW5mbzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNjFhYzk7XFxufVxcbi5tb2RhbCAubWF0Y2h1cC1zdGF0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIFxcXCJBcHBsZSBTRCBHb3RoaWMgTmVvXFxcIiwgQXBwbGVHb3RoaWMsIERvdHVtLCBBcmlhbCwgVGFob21hO1xcbn1cXG4ubW9kYWwgLmVuZW15LWNoYW1waW9uLWltZyB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBtYXgtaGVpZ2h0OiAzZW07XFxuICBtYXgtd2lkdGg6IDNlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG4ubW9kYWwgLndpbnJhdGUtYWdhaW5zdC1wZXJjZW50YWdlLmJsdWUge1xcbiAgY29sb3I6ICMzNUE3RkY7XFxufVxcbi5tb2RhbCAud2lucmF0ZS1hZ2FpbnN0LXBlcmNlbnRhZ2UucmVkIHtcXG4gIGNvbG9yOiAjZmY1OTY0O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTEyMHB4KSB7XFxuICAubW9kYWwgLmNvbXBvbmVudC1pdGVtLWltZyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAubW9kYWwgLml0ZW0tc2V0cy1jb250YWluZXIge1xcbiAgICBtaW4taGVpZ2h0OiA4MCU7XFxuICB9XFxuICAubW9kYWwgLml0ZW0tZGV0YWlscy1jb250YWluZXIge1xcbiAgICBtaW4td2lkdGg6IDcwJTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDg2N3B4KSB7XFxuICAubW9kYWwgLml0ZW0taW1nIHtcXG4gICAgbWF4LWhlaWdodDogMi4ycmVtO1xcbiAgICBtYXgtd2lkdGg6IDIuMnJlbTtcXG4gIH1cXG4gIC5tb2RhbCAuY2hhbXBpb24tZGV0YWlscyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gIH1cXG4gIC5tb2RhbCAuYWJpbGl0aWVzLWNvbnRhaW5lciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIG1heC13aWR0aDogMjByZW07XFxuICB9XFxuICAubW9kYWwgLmxvcmUtY29udGFpbmVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIC5tb2RhbCAuaXRlbS1zZXRzLWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB9XFxuICAubW9kYWwgLml0ZW0tc2V0LWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAubW9kYWwgLm1hdGNodXBzIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5tb2RhbCAubWF0Y2h1cC1pbmZvIHtcXG4gICAgbWFyZ2luOiAwLjVlbSBhdXRvO1xcbiAgfVxcbiAgLm1vZGFsICNtYWluLWNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG4gIC5tb2RhbCAjc3RhdHMtY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogODQwcHgpIHtcXG4gIC5tb2RhbCAuZGFtYWdlLWluZm8ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgfVxcbiAgLm1vZGFsIC5nYW1lcy1wbGF5ZWQtYWdhaW5zdCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAubW9kYWwgLmRhbWFnZS1zdGF0cy1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTYwcHgpIHtcXG4gIC5tb2RhbCAuY2hhbXBpb24tbWFpbi1zdGF0cyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAubW9kYWwgLml0ZW0tc2V0LWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB9XFxuICAubW9kYWwgLml0ZW0tc2V0cy1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLm1vZGFsIC5jaGFtcGlvbi1kYW1hZ2UtY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgLm1vZGFsIC5kYW1hZ2Utc3RhdHMtaW5mbyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAubW9kYWwgLmRhbWFnZS1pbmZvIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICB9XFxuICAubW9kYWwgLmRhbWFnZS10eXBlLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMC4yZW0gYXV0bztcXG4gIH1cXG4gIC5tb2RhbCAuY2lyY3VsYXItY2hhcnQge1xcbiAgICBtYXgtaGVpZ2h0OiAxOTVweDtcXG4gICAgbWF4LXdpZHRoOiA4MCU7XFxuICB9XFxuICAubW9kYWwgLmRhbWFnZS1zdGF0cy1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLm1vZGFsIC5jaGFtcGlvbi1yb2xlIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xcbiAgfVxcbiAgLm1vZGFsIC5jaGFtcGlvbi1yZXNvdXJjZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcXG4gIH1cXG4gIC5tb2RhbCAuY2hhbXBpb24tcm9sZXMge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICB9XFxuICAubW9kYWwgLnNwZWxsLWltZyB7XFxuICAgIGhlaWdodDogMi44ZW07XFxuICAgIHdpZHRoOiAyLjhlbTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNDE0cHgpIHtcXG4gIC5tb2RhbCAuY2hhbXBpb24tc3RhdHMtb3ZlcnZpZXcge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG1pbi13aWR0aDogMTdyZW07XFxuICB9XFxuICAubW9kYWwgLmNoYW1waW9uLW5hbWUge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBQTtBQUNGOztBQWdFQTtFQUNFLGtEQUFBO0FBN0RGOztBQWdFQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFB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Q0EsbUJBQUE7RUFqQko7RUFvQkU7SUFDRSxzQkFBQTtFQWxCSjtFQXFCRTtJQUNFLG1CQUFBO0lBQ0EsdUJBQUE7RUFuQko7RUFzQkU7SUFDRSxrQkFBQTtFQXBCSjtFQXVCRTtJQUNFLGlCQUFBO0lBQ0EsY0FBQTtFQXJCSjtFQXdCRTtJQUNFLHNCQUFBO0VBdEJKO0VBeUJFO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtFQXZCSjtFQTBCRTtJQUNFLGtCQUFBO0lBQ0EsbUJBQUE7RUF4Qko7RUEyQkU7SUFDRSxlQUFBO0VBekJKO0VBNEJFO0lBQ0UsYUFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0VBMUJKO0FBQ0Y7QUE2QkU7RUFDRTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQTNCSjtFQThCRTtJQUNFLGVBQUE7RUE1Qko7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuQG1peGluIGNvbnRhaW5lckJhY2tncm91bmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMGJmO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC42ZW07XFxuICBsaW5lLWhlaWdodDogMS40O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlci1jb2xvcjogIzkyNzU0MztcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxufVxcblxcbkBtaXhpbiBzdWJIZWFkaW5nU3R5bGUge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMC40ZW07XFxuICAvLyBmb250LXNpemU6IDI0cHg7XFxuICBjb2xvcjogI2M3YWI2ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59IFxcblxcbkBtaXhpbiBpY29uU2l6ZSB7XFxuICBoZWlnaHQ6IDMuNXJlbTtcXG4gIHdpZHRoOiAzLjVyZW07XFxufVxcblxcbkBtaXhpbiBpY29uVGV4dCB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG5AbWl4aW4gaWNvbkNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbn1cXG5cXG5AbWl4aW4gc21hbGxNYXJnaW4ge1xcbiAgbWFyZ2luLXRvcDogMC41ZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG59XFxuXFxuQG1peGluIG1vZGFsQ29udGVudENvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nOiAwO1xcbiAgbWF4LXdpZHRoOiA3NSU7XFxuICBtaW4taGVpZ2h0OiA0OXJlbTtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgXFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDE7XFxuICBwYWRkaW5nOiA0cmVtO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC4xKTtcXG4gIFxcbiAgI21haW4tY29udGFpbmVyIHtcXG4gICAgQGluY2x1ZGUgbW9kYWxDb250ZW50Q29udGFpbmVyKCk7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcblxcbiAgLm1vZGFsLWhlYWRlciB7XFxuICAgIEBpbmNsdWRlIGNvbnRhaW5lckJhY2tncm91bmQoKTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5tb2RhbC1uYXYtbGlua3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7ICAgXFxuICB9XFxuXFxuICAubW9kYWwtbmF2LWxpbmsge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIEBpbmNsdWRlIHNtYWxsTWFyZ2luKCk7XFxuICB9XFxuXFxuICAubW9kYWwtbmF2LWxpbms6aG92ZXIge1xcbiAgICBjb2xvcjogIzkyNzU0MztcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1oZWFkaW5nIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLW5hbWUge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICB9XFxuXFxuICAuY2hhbXBpb24tdGl0bGUge1xcbiAgICBjb2xvcjogI2M3YWI2ZTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBAaW5jbHVkZSBzbWFsbE1hcmdpbigpO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXJvbGVzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tcm9sZSB7XFxuICAgIEBpbmNsdWRlIGljb25Db250YWluZXIoKTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1yZXNvdXJjZSB7XFxuICAgIEBpbmNsdWRlIGljb25Db250YWluZXIoKTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1yb2xlLWltYWdlIHtcXG4gICAgQGluY2x1ZGUgaWNvblNpemUoKTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1yZXNvdXJjZS1pbWFnZSB7XFxuICAgIEBpbmNsdWRlIGljb25TaXplKCk7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tcm9sZS1uYW1lIHtcXG4gICAgQGluY2x1ZGUgaWNvblRleHQoKTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1yZXNvdXJjZS1uYW1lIHtcXG4gICAgQGluY2x1ZGUgaWNvblRleHQoKTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1tYWluLWluZm8ge1xcbiAgICBwYWRkaW5nOiAxLjhyZW07XFxuICAgIG1heC13aWR0aDogMzRyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDpsYXN0IGJhc2VsaW5lOyAgICBcXG4gIH1cXG5cXG4gIEAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRldG9wIHtcXG4gICAgZnJvbSB7dG9wOiAtMzAwcHg7IG9wYWNpdHk6MH1cXG4gICAgdG8ge3RvcDowOyBvcGFjaXR5OiAxO31cXG4gIH1cXG5cXG4gIEBrZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XFxuICAgIGZyb20ge3RvcDogLTMwMHB4OyBvcGFjaXR5OjB9XFxuICAgIHRvIHt0b3A6MDsgb3BhY2l0eTogMTt9XFxuICB9XFxuXFxuICAubG9yZS1jb250YWluZXIge1xcbiAgIEBpbmNsdWRlIGNvbnRhaW5lckJhY2tncm91bmQoKTtcXG4gIH1cXG5cXG4gIC5zdWJoZWFkaW5nIHtcXG4gICAgQGluY2x1ZGUgc3ViSGVhZGluZ1N0eWxlKCk7XFxuICB9XFxuXFxuICAuYWJpbGl0aWVzLWNvbnRhaW5lciB7XFxuICAgIEBpbmNsdWRlIGNvbnRhaW5lckJhY2tncm91bmQoKTtcXG4gICAgd2lkdGg6IDIwZW07XFxuICB9XFxuXFxuICAuYWJpbGl0aWVzLWhlYWRpbmcge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuYWJpbGl0eS1waWN0dXJlcyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB9XFxuXFxuICAuYWJpbGl0eS1kZXNjcmlwdGlvbiB7XFxuICAgIEBpbmNsdWRlIHNtYWxsTWFyZ2luKCk7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tZGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLWV4dHJhLWluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgXFxuICAuYWJpbGl0eS1pbmZvIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5hYmlsaXR5LWluZm8uYWN0aXZlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5zcGVsbC1pbWcge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbjogMCAwLjVyZW07XFxuICAgIGhlaWdodDogMy4zcmVtO1xcbiAgICB3aWR0aDogMy4zcmVtO1xcbiAgfVxcblxcbiAgLnNwZWxsLWltZy5jbGlja2VkIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiAjOTI3NTQzO1xcbiAgICBib3JkZXItd2lkdGg6IDRweDtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi10aXBzIHtcXG4gICAgQGluY2x1ZGUgY29udGFpbmVyQmFja2dyb3VuZCgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDM0cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tdGlwIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgfVxcblxcbiAgI3N0YXRzLWNvbnRhaW5lciB7XFxuICAgIEBpbmNsdWRlIG1vZGFsQ29udGVudENvbnRhaW5lcigpO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXN0YXRzLW92ZXJ2aWV3IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIEBpbmNsdWRlIHNtYWxsTWFyZ2luKCk7XFxuICAgIG1heC13aWR0aDogMjVyZW07XFxuICAgIG1pbi13aWR0aDogMjByZW07XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gIH1cXG5cXG4gIC53aW4tcmF0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAucGljay1yYXRlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5sYW5lLWluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLnBpY2stcmF0ZS12YWx1ZSB7XFxuICAgIG1hcmdpbi10b3A6IDAuNGVtO1xcbiAgICBjb2xvcjogI2M3YWI2ZTtcXG4gIH1cXG5cXG4gIC53aW4tcmF0ZS12YWx1ZSB7XFxuICAgIG1hcmdpbi10b3A6IDAuNGVtO1xcbiAgICBjb2xvcjogI2M3YWI2ZTtcXG4gIH1cXG5cXG4gIC5sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1kYW1hZ2UtY29udGFpbmVyIHtcXG4gICAgQGluY2x1ZGUgY29udGFpbmVyQmFja2dyb3VuZCgpO1xcbiAgICBtYXgtaGVpZ2h0OiAxNy41cmVtO1xcbiAgfVxcblxcbiAgLmRhbWFnZS1oZWFkaW5nIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmNpcmN1bGFyLWNoYXJ0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbWF4LXdpZHRoOiA4MCU7XFxuICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xcbiAgfVxcblxcbiAgLmNpcmNsZSB7XFxuICAgIGZpbGw6IG5vbmU7XFxuICAgIHN0cm9rZS13aWR0aDogMi4yO1xcbiAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XFxuICAgIGFuaW1hdGlvbjogcHJvZ3Jlc3MgMXMgZWFzZS1vdXQgZm9yd2FyZHM7XFxuICB9XFxuXFxuICAjbWFnaWMtZGFtYWdlLXN0cm9rZSB7XFxuICAgIHN0cm9rZTogIzM1QTdGRjtcXG4gIH1cXG5cXG4gICNwaHlzaWNhbC1kYW1hZ2Utc3Ryb2tlIHtcXG4gICAgc3Ryb2tlOiAjZmY1OTY0XFxuICB9XFxuXFxuICAjdHJ1ZS1kYW1hZ2Utc3Ryb2tlIHtcXG4gICAgc3Ryb2tlOiAjRkZFNzRDXFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIHByb2dyZXNzIHtcXG4gICAgMCUge1xcbiAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDAgMTAwO1xcbiAgICB9XFxuICB9XFxuXFxuICAudG90YWwtZGFtYWdlLXRleHQge1xcbiAgICBmb250LXNpemU6IDRweDtcXG4gICAgdGV4dC1hbmNob3I6IG1pZGRsZTtcXG4gICAgZmlsbDogd2hpdGU7XFxuICB9XFxuXFxuICAudG90YWwtZGFtYWdlLWxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAzcHg7XFxuICAgIHRleHQtYW5jaG9yOiBtaWRkbGU7XFxuICAgIGZpbGw6ICM5Mjc1NDM7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tbWFpbi1zdGF0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLWl0ZW0tYnVpbGRzIHtcXG4gICAgQGluY2x1ZGUgY29udGFpbmVyQmFja2dyb3VuZCgpO1xcbiAgICBtYXgtaGVpZ2h0OiAxNy41cmVtO1xcbiAgfVxcblxcbiAgLmRhbWFnZS1zdGF0cy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5kYW1hZ2UtaW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1heC1oZWlnaHQ6IDkyJTtcXG4gICAgaGVpZ2h0OiA5MiU7XFxuICB9XFxuXFxuICAuZGFtYWdlLXR5cGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICB9XFxuXFxuICAuZGFtYWdlLXN0YXRzIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIH1cXG5cXG4gICNwaHlzaWNhbC1kYW1hZ2UtbGFiZWwge1xcbiAgICBjb2xvcjogI2ZmNTk2NDtcXG4gIH1cXG5cXG4gICNtYWdpYy1kYW1hZ2UtbGFiZWwge1xcbiAgICBjb2xvcjogIzM1QTdGRlxcbiAgfVxcblxcbiAgI3RydWUtZGFtYWdlLWxhYmVsIHtcXG4gICAgY29sb3I6ICNGRkU3NENcXG4gIH1cXG5cXG4gIC5pdGVtLWRldGFpbHMtY29udGFpbmVyIHtcXG4gICAgQGluY2x1ZGUgY29udGFpbmVyQmFja2dyb3VuZCgpO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMTgxYTIwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICByaWdodDogMWVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzLjVlbTtcXG4gIH1cXG5cXG4gIC5pdGVtLW5hbWUge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICB9XFxuXFxuICAubWFpbi1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgfVxcblxcbiAgLmNvc3QtbGFiZWwge1xcbiAgICBjb2xvcjogI2M3YWI2ZTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgfVxcblxcbiAgLmNvbXBvbmVudC1pdGVtcy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcblxcbiAgLmNvbXBvbmVudC1pdGVtLW5hbWUge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICB9XFxuXFxuICAuY29zdC1hbW91bnQge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICB9XFxuXFxuICAuY29tcG9uZW50LWl0ZW0tY29zdC1sYWJlbCB7XFxuICAgIGNvbG9yOiAjYzdhYjZlO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICB9XFxuXFxuICAuY29tcG9uZW50LWl0ZW0tYW1vdW50IHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgfVxcblxcbiAgLmNvbXBvbmVudC1pdGVtLWRldGFpbHMtY29udGFpbmVyIHtcXG4gICAgQGluY2x1ZGUgY29udGFpbmVyQmFja2dyb3VuZCgpO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMTgxYTIwO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLml0ZW0tc2V0cy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWF4LWhlaWdodDogOTAlO1xcbiAgfVxcblxcbiAgLml0ZW0tc2V0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICAgIHBhZGRpbmc6IDAuNGVtO1xcbiAgfSAgXFxuXFxuICAubWFpbi1jb21wb25lbnQtY29udGFpbmVyIHtcXG4gICAgQGluY2x1ZGUgY29udGFpbmVyQmFja2dyb3VuZCgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYwNDAwODM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDBlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXG4gXFxuICB9XFxuXFxuICAuaXRlbS1pbWcge1xcbiAgICBtYXgtd2lkdGg6IDIuN2VtO1xcbiAgICBtYXgtaGVpZ2h0OiAyLjdlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgICAvL3BhZGRpbmc6IDFlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDA7XFxuICB9XFxuXFxuICAuY29tcG9uZW50LWl0ZW0taW1nIHtcXG4gICAgbWF4LXdpZHRoOiAxLjhlbTtcXG4gICAgbWF4LWhlaWdodDogMS44ZW07XFxuICB9XFxuXFxuICAuY2hhbXBpb24tbWF0Y2h1cHMge1xcbiAgICBAaW5jbHVkZSBjb250YWluZXJCYWNrZ3JvdW5kKCk7XFxuICAgIG1heC1oZWlnaHQ6IDI1LjJyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwIDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgfVxcblxcbiAgLm1hdGNodXBzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIG1heC13aWR0aDogMjRyZW07XFxuICB9XFxuXFxuICAubWF0Y2h1cC1pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTYxYTtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIG1hcmdpbjogYXV0byAwLjVlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgfVxcblxcbiAgLm1hdGNodXAtaW5mbzpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzE2MWFjOTtcXG4gIH1cXG5cXG4gIC5tYXRjaHVwLXN0YXRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIixIZWx2ZXRpY2EsXFxcIkFwcGxlIFNEIEdvdGhpYyBOZW9cXFwiLEFwcGxlR290aGljLERvdHVtLEFyaWFsLFRhaG9tYTtcXG4gIH1cXG5cXG4gIC5lbmVteS1jaGFtcGlvbi1pbWcge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG1heC1oZWlnaHQ6IDNlbTtcXG4gICAgbWF4LXdpZHRoOiAzZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbiAgfVxcblxcbiAgLndpbnJhdGUtYWdhaW5zdC1wZXJjZW50YWdlLmJsdWUge1xcbiAgICBjb2xvcjogIzM1QTdGRjtcXG4gIH1cXG5cXG4gIC53aW5yYXRlLWFnYWluc3QtcGVyY2VudGFnZS5yZWQge1xcbiAgICBjb2xvcjogI2ZmNTk2NDtcXG4gIH1cXG5cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMTIwcHgpIHtcXG4gICAgLmNvbXBvbmVudC1pdGVtLWltZyB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAuaXRlbS1zZXRzLWNvbnRhaW5lciB7XFxuICAgICAgbWluLWhlaWdodDogODAlO1xcbiAgICB9XFxuXFxuICAgIC5pdGVtLWRldGFpbHMtY29udGFpbmVyIHtcXG4gICAgICBtaW4td2lkdGg6IDcwJTtcXG4gICAgfVxcbiAgfVxcblxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDg2N3B4KSB7XFxuICAgIC5pdGVtLWltZyB7XFxuICAgICAgbWF4LWhlaWdodDogMi4ycmVtO1xcbiAgICAgIG1heC13aWR0aDogMi4ycmVtO1xcbiAgICB9XFxuXFxuICAgIC5jaGFtcGlvbi1kZXRhaWxzIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgIH1cXG5cXG4gICAgLmFiaWxpdGllcy1jb250YWluZXIge1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICB3aWR0aDogYXV0bztcXG4gICAgICBtYXgtd2lkdGg6IDIwcmVtO1xcbiAgICB9XFxuXFxuICAgIC5sb3JlLWNvbnRhaW5lciB7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gICAgLml0ZW0tc2V0cy1jb250YWluZXIge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIH1cXG5cXG4gICAgLml0ZW0tc2V0LWNvbnRhaW5lciB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAubWF0Y2h1cHMge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgLm1hdGNodXAtaW5mbyB7XFxuICAgICAgbWFyZ2luOiAwLjVlbSBhdXRvO1xcbiAgICB9XFxuXFxuICAgICNtYWluLWNvbnRhaW5lciB7XFxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgICNzdGF0cy1jb250YWluZXIge1xcbiAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgfVxcbiAgfVxcblxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDg0MHB4KSB7XFxuICAgIC5kYW1hZ2UtaW5mbyB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIH1cXG5cXG4gICAgLmdhbWVzLXBsYXllZC1hZ2FpbnN0IHtcXG4gICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5kYW1hZ2Utc3RhdHMtY29udGFpbmVyIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICB9XFxuICB9XFxuXFxuICBAbWVkaWEgKG1heC13aWR0aDogNTYwcHgpIHtcXG4gICAgLmNoYW1waW9uLW1haW4tc3RhdHMge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgLml0ZW0tc2V0LWNvbnRhaW5lciB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgfVxcblxcbiAgICAuaXRlbS1zZXRzLWNvbnRhaW5lciB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAuY2hhbXBpb24tZGFtYWdlLWNvbnRhaW5lciB7XFxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLmRhbWFnZS1zdGF0cy1pbmZvIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5kYW1hZ2UtaW5mbyB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgfVxcblxcbiAgICAuZGFtYWdlLXR5cGUtY29udGFpbmVyIHtcXG4gICAgICBtYXJnaW46IDAuMmVtIGF1dG87XFxuICAgIH1cXG5cXG4gICAgLmNpcmN1bGFyLWNoYXJ0IHtcXG4gICAgICBtYXgtaGVpZ2h0OiAxOTVweDtcXG4gICAgICBtYXgtd2lkdGg6IDgwJTtcXG4gICAgfVxcblxcbiAgICAuZGFtYWdlLXN0YXRzLWNvbnRhaW5lciB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAuY2hhbXBpb24tcm9sZSB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xcbiAgICAgIG1hcmdpbi1yaWdodDogMC41ZW07XFxuICAgIH1cXG5cXG4gICAgLmNoYW1waW9uLXJlc291cmNlIHtcXG4gICAgICBtYXJnaW4tbGVmdDogMC41ZW07XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcXG4gICAgfVxcblxcbiAgICAuY2hhbXBpb24tcm9sZXMge1xcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgfVxcblxcbiAgICAuc3BlbGwtaW1nIHtcXG4gICAgICBoZWlnaHQ6IDIuOGVtO1xcbiAgICAgIHdpZHRoOiAyLjhlbTtcXG4gICAgICBtYXJnaW46IGF1dG87XFxuICAgIH1cXG4gIH1cXG5cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0MTRweCkge1xcbiAgICAuY2hhbXBpb24tc3RhdHMtb3ZlcnZpZXcge1xcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICBtaW4td2lkdGg6IDE3cmVtO1xcbiAgICB9XFxuXFxuICAgIC5jaGFtcGlvbi1uYW1lIHtcXG4gICAgICBmb250LXNpemU6IDJyZW07XFxuICAgIH1cXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIGRlZmluZShJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgZGVmaW5lKEdwLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGFzeW5jSXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgZGVmaW5lKEdwLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIGRlZmluZShHcCwgXCJ0b1N0cmluZ1wiLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgaW4gbW9kZXJuIGVuZ2luZXNcbiAgLy8gd2UgY2FuIGV4cGxpY2l0bHkgYWNjZXNzIGdsb2JhbFRoaXMuIEluIG9sZGVyIGVuZ2luZXMgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xuICB9IGVsc2Uge1xuICAgIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG4gIH1cbn1cbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwidmFyIG1hcCA9IHtcblx0XCIuL0Fzc2Fzc2luLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9Bc3Nhc3Npbi5wbmdcIixcblx0XCIuL0JvdHRvbS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvQm90dG9tLnBuZ1wiLFxuXHRcIi4vQ29udHJvbGxlci5wbmdcIjogXCIuL3NyYy9pbWFnZXMvQ29udHJvbGxlci5wbmdcIixcblx0XCIuL0NvdXJhZ2UucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL0NvdXJhZ2UucG5nXCIsXG5cdFwiLi9Dcmltc29uIFJ1c2gucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL0NyaW1zb24gUnVzaC5wbmdcIixcblx0XCIuL0VuZXJneS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvRW5lcmd5LnBuZ1wiLFxuXHRcIi4vRmlnaHRlci5wbmdcIjogXCIuL3NyYy9pbWFnZXMvRmlnaHRlci5wbmdcIixcblx0XCIuL0Zsb3cucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL0Zsb3cucG5nXCIsXG5cdFwiLi9GdXJ5LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9GdXJ5LnBuZ1wiLFxuXHRcIi4vR3JpdC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvR3JpdC5wbmdcIixcblx0XCIuL0hlYXQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL0hlYXQucG5nXCIsXG5cdFwiLi9KdW5nbGUucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL0p1bmdsZS5wbmdcIixcblx0XCIuL01hZ2UucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL01hZ2UucG5nXCIsXG5cdFwiLi9NYW5hLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9NYW5hLnBuZ1wiLFxuXHRcIi4vTWFuYWxlc3MucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL01hbmFsZXNzLnBuZ1wiLFxuXHRcIi4vTWFya3NtYW4ucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL01hcmtzbWFuLnBuZ1wiLFxuXHRcIi4vTWVsZWUucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL01lbGVlLnBuZ1wiLFxuXHRcIi4vTWlkZGxlLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9NaWRkbGUucG5nXCIsXG5cdFwiLi9SYWdlLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9SYWdlLnBuZ1wiLFxuXHRcIi4vUmFuZ2VkLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9SYW5nZWQucG5nXCIsXG5cdFwiLi9TcGVjaWFsaXN0LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9TcGVjaWFsaXN0LnBuZ1wiLFxuXHRcIi4vU3VwcG9ydC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvU3VwcG9ydC5wbmdcIixcblx0XCIuL1RhbmsucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL1RhbmsucG5nXCIsXG5cdFwiLi9Ub3AucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL1RvcC5wbmdcIixcblx0XCIuL1V0aWxpdHkucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL1V0aWxpdHkucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltYWdlcyBzeW5jIFxcXFwuKHBuZ3xqcGU/Z3xzdmcpJFwiOyIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0IHsgY2hhbXBpb25EZXRhaWxzTW9kYWwgfSBmcm9tICcuL3RlbXBsYXRlcy9jaGFtcGlvbkRldGFpbHNNb2RhbCc7XG5pbXBvcnQgY2hhbXBpb25TdGF0c01vZGFsIGZyb20gJy4vdGVtcGxhdGVzL2NoYW1waW9uU3RhdHNNb2RhbCc7XG5pbXBvcnQgeyBDaGFtcGlvbk1vZGFsQ29udHJvbGxlciB9IGZyb20gJy4vYXBwQ29udHJvbC9jaGFtcGlvbk1vZGFsQ29udHJvbGxlcic7XG5pbXBvcnQgSXRlbUluZm8gZnJvbSAnLi9jaGFtcGlvbkRhdGEvaXRlbUluZm8nO1xuXG5jb25zdCB0ZXN0ID0gYXN5bmMgKGNoYW1waW9uSWQpID0+IHtcbiAgYXdhaXQgY2hhbXBpb25EZXRhaWxzTW9kYWwoY2hhbXBpb25JZCk7XG4gIGF3YWl0IGNoYW1waW9uU3RhdHNNb2RhbChjaGFtcGlvbklkKTtcbiAgY29uc3QgY29udHJvbGxlciA9IENoYW1waW9uTW9kYWxDb250cm9sbGVyKCk7XG4gIGNvbnRyb2xsZXIubW9kYWxDaGFuZ2VMaXN0ZW5lcnMoKTtcblxuICBjb25zdCBhbGxJdGVtcyA9IGF3YWl0IEl0ZW1JbmZvLmdldEFsbEl0ZW1zKCk7XG4gIGNvbnN0IGl0ZW0xID0gbmV3IEl0ZW1JbmZvKCc2MzMzJyk7XG4gIGNvbnNvbGUubG9nKGl0ZW0xLmdldEl0ZW1JbmZvKGFsbEl0ZW1zKSk7XG59O1xuXG50ZXN0KCdQb3BweScpO1xuIl0sIm5hbWVzIjpbIkNoYW1waW9uTW9kYWxDb250cm9sbGVyIiwidG9nZ2xlQWN0aXZlQWJpbGl0eSIsImNsaWNrZWRBYmlsaXR5SWQiLCJhYmlsaXR5SW1hZ2VzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWJpbGl0eUluZm9zIiwiZm9yRWFjaCIsImltZyIsImNsYXNzTGlzdCIsInJlbW92ZSIsImluZm8iLCJjbGlja2VkSW1hZ2UiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NOYW1lIiwiYWN0aXZlQWJpbGl0eSIsImNoYW5nZU1vZGFsVGVtcGxhdGUiLCJjbGlja2VkTW9kYWxOYXZMaW5rIiwidGVtcGxhdGVzIiwidGVtcGxhdGUiLCJpZCIsInN1YnN0cmluZyIsImluZGV4T2YiLCJjaG9zZW5UZW1wbGF0ZSIsInN0eWxlIiwiZGlzcGxheSIsImhpZGRlblRlbXBsYXRlIiwiZGlzcGF5SXRlbURldGFpbHMiLCJob3ZlcmVkSXRlbUltYWdlIiwiaXRlbURldGFpbHMiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJoaWRlSXRlbURldGFpbHMiLCJ1bmhvdmVyZWRJdGVtSW1hZ2UiLCJtb2RhbENoYW5nZUxpc3RlbmVycyIsIm1vZGFsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwidGFyZ2V0IiwiZGFzaEluZGV4IiwiYWJpbGl0eUlkIiwic2xpY2UiLCJjdXJyRWxlbWVudCIsInJlbGF0ZWRUYXJnZXQiLCJjb25zb2xlIiwibG9nIiwicGFyZW50Tm9kZSIsImZldGNoQ2hhbXBpb25EZXRhaWxzIiwiY2hhbXBpb25JZCIsImZldGNoIiwibW9kZSIsInJlc3BvbnNlIiwianNvbiIsImNoYW1waW9ucyIsImNoYW1waW9uRGV0YWlscyIsImRhdGEiLCJnZXRDaGFtcGlvbkltYWdlcyIsInByb2ZpbGVJbWdOdW1iZXIiLCJza2lucyIsIm51bSIsInByb2ZpbGVJbWdVcmwiLCJzbWFsbEltZ1VybCIsInNraW5JbWdzIiwic2tpbkltZ1VybHMiLCJwdXNoIiwiZ2V0Q2hhbXBpb25QYXNzaXZlcyIsInBhc3NpdmVEYXRhIiwicGFzc2l2ZSIsInBhc3NpdmVOYW1lIiwibmFtZSIsInBhc3NpdmVEZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uIiwicGFzc2l2ZUlkIiwiaW1hZ2UiLCJmdWxsIiwicGFzc2l2ZUltZ1VybCIsImdldENoYW1waW9uU3BlbGxzIiwic3BlbGxzRGF0YSIsInNwZWxscyIsInNwZWxsIiwic3BlbGxPYmplY3QiLCJjb3N0QnVybiIsImNvc3RUeXBlIiwiY29vbGRvd24iLCJjb29sZG93bkJ1cm4iLCJpbWdVcmwiLCJnZXRDaGFtcGlvbkRldGFpbHMiLCJjaGFtcGlvbkltYWdlcyIsImNoYW1waW9uUGFzc2l2ZSIsImNoYW1waW9uVGl0bGUiLCJ0aXRsZSIsInJlcGxhY2UiLCJ0b1VwcGVyQ2FzZSIsInBhcnR5cGUiLCJsb3JlIiwicm9sZXMiLCJ0YWdzIiwicmVzb3VyY2UiLCJwcm9maWxlSW1nIiwic21hbGxJbWciLCJ0aXBzIiwiYWxseXRpcHMiLCJkaWZmaWN1bHR5IiwiZmV0Y2hDaGFtcGlvblN0YXRzIiwiY2hhbXBpb25TdGF0cyIsImdldENoYW1waW9uU3RhdHMiLCJ3aW5SYXRlIiwidG9GaXhlZCIsInBpY2tSYXRlIiwibGFuZSIsInRvTG93ZXJDYXNlIiwia2RhIiwia2RhUmF0aW8iLCJkYW1hZ2VQZXJNYXRjaCIsIml0ZW1TZXRzIiwiaXRlbUNob2ljZXMiLCJiZXN0TWF0Y2hVcHMiLCJtYXRjaFVwcyIsIndvcnN0TWF0Y2hVcHMiLCJmZXRjaEFsbEl0ZW1zIiwidmVyc2lvblJlc3BvbnNlIiwidmVyc2lvbnMiLCJsYXRlc3RWZXJzaW9uIiwiYWxsSXRlbXMiLCJJdGVtSW5mbyIsIml0ZW1JZCIsImdldEl0ZW1EZXRhaWxzIiwiaXRlbUltYWdlSWQiLCJpbWFnZVVybCIsImNvbXBvbmVudEl0ZW1JZHMiLCJmcm9tIiwidW5kZWZpbmVkIiwiY29tcG9uZW50SXRlbURldGFpbHMiLCJtYXAiLCJjb3N0IiwiZ29sZCIsInRvdGFsIiwiZ2V0SXRlbUltYWdlIiwiY29tcG9uZW50SXRlbXMiLCJnZXRDb21wb25lbnRJdGVtcyIsIkVsZW1lbnRDcmVhdGlvbiIsImNyZWF0ZUNoaWxkRWxlbWVudFdpdGhDbGFzcyIsInRhZyIsInBhcmVudEVsZW1lbnQiLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiY3JlYXRlQ2hpbGRFbGVtZW50V2l0aElkIiwiY3JlYXRlQ2hpbGRFbGVtZW50V2l0aENsYXNzQW5kSWQiLCJjcmVhdGVDaGlsZEltYWdlRWxlbWVudFdpdGhDbGFzcyIsInNyYyIsImFsdCIsImltYWdlRWxlbWVudCIsInJlbmRlckhlYWRlckRldGFpbHMiLCJpbWFnZXMiLCJjaGFtcGlvbkRldGFpbHNNb2RhbCIsImNoYW1waW9uRGF0YSIsImNoYW1waW9uUm9sZXMiLCJyb2xlIiwiY2hhbXBpb25Sb2xlIiwiY2hhbXBpb25Sb2xlTmFtZSIsImNoYW1waW9uUm9sZUltYWdlIiwidGV4dENvbnRlbnQiLCJjaGFtcGlvblJlc291cmNlIiwiY2hhbXBpb25SZXNvdXJjZU5hbWUiLCJjaGFtcGlvblJlc291cmNlSW1hZ2UiLCJjaGFtcGlvbkxvcmUiLCJhYmlsaXR5UGljdHVyZXMiLCJwYXNzaXZlSW1nIiwiaW1nTGFiZWwiLCJpbmRleCIsInNwZWxsSW1nIiwiYWJpbGl0aWVzQ29udGFpbmVyIiwiaSIsImFiaWxpdHlJbmZvIiwiYWJpbGl0eU5hbWUiLCJhYmlsaXR5RGVzY3JpcHRpb24iLCJhYmlsaXR5TGFiZWwiLCJpbm5lckhUTUwiLCJjaGFtcGlvblRpcHMiLCJsZW5ndGgiLCJjaGFtcGlvblRpcCIsInJlbmRlclN0YXRPdmVydmlldyIsInJlbmRlckRhbWFnZVN0YXRzIiwicmVuZGVyQ2hhbXBpb25MYW5lIiwicmVuZGVyTWF0Y2h1cHNJbmZvIiwiY2hhbXBpb25TdGF0c01vZGFsIiwic3RhdHNPdmVydmlldyIsInRydWVEYW1hZ2VDaXJjbGVTdHJva2UiLCJwaHlzaWNhbERhbWFnZUNpcmNsZVN0cm9rZSIsIm1hZ2ljRGFtYWdlQ2lyY2xlU3Ryb2tlIiwidHJ1ZURhbWFnZVBlcmNlbnQiLCJNYXRoIiwicm91bmQiLCJ0cnVlRGFtYWdlIiwicGVyY2VudGFnZSIsInBoeXNpY2FsRGFtYWdlUGVyY2VudCIsInBoeXNpY2FsRGFtYWdlIiwibWFnaWNEYW1hZ2VQZXJjZW50IiwibWFnaWNEYW1hZ2UiLCJzdHJva2VEYXNoYXJyYXkiLCJ0b3RhbERhbWFnZVRleHQiLCJ0b3RhbERhbWFnZSIsInZhbHVlIiwidHJ1ZURhbWFnZVZhbHVlIiwicGh5c2ljYWxEYW1hZ2VWYWx1ZSIsIm1hZ2ljRGFtYWdlVmFsdWUiLCJnZXRBbGxJdGVtcyIsImNoYW1waW9uSXRlbUJ1aWxkcyIsIml0ZW1TZXRzQ29udGFpbmVyIiwiaXRlbVNldCIsIml0ZW1TZXRDb250YWluZXIiLCJpdGVtIiwiaXRlbUluZm8iLCJnZXRJdGVtSW5mbyIsImluY2x1ZGVzIiwibWFpbkNvbXBvbmVudENvbnRhaW5lciIsIm1haW5JdGVtIiwiaXRlbURldGFpbHNDb250YWluZXIiLCJuYW1lRWxlbWVudCIsImRlc2NyaXB0aW9uRWxlbWVudCIsIml0ZW1Db3N0IiwiY29zdExhYmVsIiwiY29zdEFtb3VudCIsImNvbXBvbmVudEl0ZW1zQ29udGFpbmVyIiwiY29tcG9uZW50SXRlbSIsImNvbXBvbmVudEl0ZW1FbGVtZW50IiwiY29tcG9uZW50SXRlbURldGFpbHNDb250YWluZXIiLCJjb21wb25lbnRJdGVtTmFtZSIsImNvbXBvbmVudEl0ZW1Db3N0IiwiY29tcG9uZW50SXRlbUNvc3RMYWJlbCIsImNvbXBvbmVudEl0ZW1BbW91bnQiLCJiZXN0TWF0Y2h1cHNTZWN0aW9uIiwiYmVzdE1hdGNodXBzRWxlbWVudCIsImJlc3RNYXRjaHVwc0RhdGEiLCJ3b3JzdE1hdGNodXBzU2VjdGlvbiIsIndvcnN0TWF0Y2h1cHNFbGVtZW50Iiwid29yc3RNYXRjaHVwc0RhdGEiLCJpbXBvcnRBbGwiLCJyIiwia2V5cyIsInJlcXVpcmUiLCJjb250ZXh0IiwibW9kYWxDb250YWluZXIiLCJjb250YWluZXIiLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZFNpemUiLCJjaGFtcGlvbk5hbWUiLCJyYXRlVGV4dCIsInJhdGVUeXBlIiwiY2hhbXBpb25SYXRlIiwibGFiZWwiLCJyYXRlVmFsdWUiLCJsb3dlckNhc2VUZXh0IiwiY2hhbXBpb25MYW5lSW5mbyIsImxhbmVUZXh0IiwibGFuZUljb24iLCJkYW1hZ2VUeXBlIiwiZGFtYWdlVmFsdWUiLCJkYW1hZ2VQZXJjZW50YWdlIiwiZGFtYWdlQ29udGFpbmVyIiwiZGFtYWdlU3RhdHMiLCJkYW1hZ2VWYWx1ZUVsZW1lbnQiLCJkYW1hZ2VQZXJjZW50YWdlRWxlbWVudCIsIm1hdGNodXBzRWxlbWVudCIsIm1hdGNodXBzRGF0YSIsIm1hdGNodXAiLCJtYXRjaHVwSW5mbyIsImVuZW15Q2hhbXBpb25OYW1lIiwiZW5lbXlDaGFtcGlvbkltZ1VybCIsIm1hdGNodXBTdGF0cyIsImVuZW15Q2hhbXBpb25OYW1lRWxlbWVudCIsIndpbnJhdGVBZ2FpbnN0Iiwid2lucmF0ZUFnYWluc3RMYWJlbCIsImNvbG9yIiwid2lucmF0ZUFnYWluc3RQZXJjZW50YWdlIiwid2luUmF0ZUFnYWluc3QiLCJnYW1lc1BsYXllZEFnYWluc3QiLCJtYXRjaGVzIiwidGVzdCIsImNvbnRyb2xsZXIiLCJpdGVtMSJdLCJzb3VyY2VSb290IjoiIn0=