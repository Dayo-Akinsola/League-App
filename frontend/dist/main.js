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

  var modalChangeListeners = function modalChangeListeners() {
    var championDetailsContainer = document.querySelector('.champion-details-container');
    championDetailsContainer.addEventListener('click', function (event) {
      if (event.target.className === 'spell-img') {
        var dashIndex = event.target.id.indexOf('-');
        var abilityId = event.target.id.slice(0, dashIndex);
        toggleActiveAbility(abilityId);
      }
    });
  };

  return {
    modalChangeListeners: modalChangeListeners
  };
}; // eslint-disable-next-line import/prefer-default-export




/***/ }),

/***/ "./src/championData.js":
/*!*****************************!*\
  !*** ./src/championData.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getChampionData": () => (/* binding */ getChampionData)
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
  var skinImgs = championDetails.skins.slice(1);
  var skinImgUrls = [];
  skinImgs.forEach(function (img) {
    skinImgUrls.push("https://ddragon.leagueoflegends.com/cdn/img/champion/splash/".concat(championDetails.id, "_").concat(img.num, ".jpg"));
  });
  return {
    profileImgUrl: profileImgUrl,
    skinImgUrls: skinImgUrls
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

var getChampionData = /*#__PURE__*/function () {
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
              spells: spells,
              tips: championDetails.allytips
            });

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getChampionData(_x2) {
    return _ref2.apply(this, arguments);
  };
}();



/***/ }),

/***/ "./src/championDetailsModal.js":
/*!*************************************!*\
  !*** ./src/championDetailsModal.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChampionDetailsModal": () => (/* binding */ ChampionDetailsModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _championData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./championData */ "./src/championData.js");




var importAll = function importAll(r) {
  var images = {};
  r.keys().forEach(function (item) {
    images[item.replace('./', '')] = r(item);
  });
  return images;
};

var images = importAll(__webpack_require__("./src/images sync \\.(png|jpe?g|svg)$"));

var ChampionDetailsModal = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(championId) {
    var championData, detailsContainer, championTitle, championName, championRoles, roles, championResource, resource, championResourceName, championResourceImage, championLore, abilityPictures, passiveImg, abilitiesContainer, i, abilityInfo, abilityName, abilityDescription, cooldown, spellId, championTips;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,_championData__WEBPACK_IMPORTED_MODULE_2__.getChampionData)(championId);

          case 2:
            championData = _context.sent;
            detailsContainer = document.querySelector('.champion-details-container');
            detailsContainer.style.background = "no-repeat url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/".concat(championData.id, "_0.jpg)");
            detailsContainer.style.backgroundSize = 'cover';
            championTitle = document.querySelector('.champion-title');
            championTitle.textContent = championData.title;
            championName = document.querySelector('.champion-name');
            championName.textContent = championData.name;
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
              championRoleImage.src = "".concat(images["".concat(role, ".png")]);
              championRoleImage.alt = "".concat(role, ".png");
              championRole.appendChild(championRoleName);
              championRole.appendChild(championRoleImage);
              championRoles.appendChild(championRole);
            }); // The type of energy that a champion uses e.g. mana, energy etc

            championResource = document.createElement('div');
            resource = championData.resource;
            championResource.className = 'champion-resource';
            championResourceName = document.createElement('span');
            championResourceImage = document.createElement('img');
            championResourceName.className = 'champion-resource-name';
            championResourceImage.className = 'champion-resource-image';
            championResourceName.textContent = resource;
            championResourceImage.src = "".concat(images["".concat(resource, ".png")]);
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
            championData.spells.forEach(function (spell) {
              var spellImg = document.createElement('img');
              spellImg.className = 'spell-img'; // Grabs letter Q, W, E or R which unique identifies a champions abilities

              spellImg.id = "".concat(spell.id[spell.id.length - 1], "-img");
              spellImg.src = spell.imgUrl;
              spellImg.alt = "".concat(spell.name, ".png");
              abilityPictures.appendChild(spellImg);
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

              if (i === 0) {
                abilityInfo.className = 'ability-info active';
                abilityInfo.id = 'passive-ability';
                abilityName.textContent = championData.passive.passiveName;
                abilityDescription.innerHTML = championData.passive.passiveDescription;
              } else {
                cooldown = document.createElement('span');
                cooldown.className = 'ability-cooldown';
                cooldown.textContent = "Cooldown: ".concat(championData.spells[i - 1].cooldown, " seconds");
                abilityInfo.appendChild(cooldown);
                spellId = championData.spells[i - 1].id;
                abilityInfo.className = 'ability-info';
                abilityInfo.id = "".concat(spellId[spellId.length - 1], "-ability");
                abilityName.textContent = "".concat(championData.spells[i - 1].name, " (").concat(spellId[spellId.length - 1], ")");
                abilityDescription.innerHTML = championData.spells[i - 1].description;
                console.log(abilityDescription.innerHTML);
              }

              abilitiesContainer.appendChild(abilityInfo);
            }

            championTips = document.querySelector('.champion-tips');
            championData.tips.forEach(function (tip) {
              var championTip = document.createElement('span');
              championTip.className = 'champion-tip';
              championTip.textContent = "".concat(tip);
              championTips.appendChild(championTip);
            }); // code to create the modal navigation links

          case 40:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function ChampionDetailsModal(_x) {
    return _ref.apply(this, arguments);
  };
}(); // eslint-disable-next-line import/prefer-default-export




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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  font-family: \"Inter\", Arial, Helvetica, sans-serif;\n}\n\n.modal {\n  display: block;\n  position: fixed;\n  z-index: 1;\n  padding-top: 4rem;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.modal .champion-details-container {\n  position: relative;\n  margin: auto;\n  padding: 0;\n  max-width: 75%;\n  min-height: 49rem;\n  margin-top: 0;\n  background: rgba(0, 0, 0, 0.1);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -webkit-animation-name: animatetop;\n  -webkit-animation-duration: 0.4s;\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n  border: 1px solid #888;\n  background: no-repeat url(\"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Poppy_0.jpg\");\n  background-size: cover;\n}\n.modal .modal-header {\n  background-color: #181a20bf;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 16px;\n  border-color: #927543;\n  border-style: solid;\n  padding: 0;\n  border-radius: 0;\n  display: flex;\n  align-items: center;\n}\n.modal .modal-nav-links {\n  display: flex;\n  flex-direction: column;\n  align-content: space-between;\n  height: 100%;\n  font-size: 22px;\n  background-color: black;\n  padding-left: 1em;\n  padding-right: 1em;\n}\n.modal .modal-nav-link {\n  cursor: pointer;\n  margin-top: 1em;\n  margin-bottom: 1em;\n}\n.modal .modal-nav-link:hover {\n  color: #927543;\n}\n.modal .champion-heading {\n  margin: auto;\n  text-align: center;\n  font-size: 20px;\n  color: white;\n  padding-right: 6em;\n}\n.modal .champion-name {\n  margin: auto;\n}\n.modal .champion-title {\n  color: #927543;\n  font-size: 16px;\n}\n.modal .champion-roles {\n  display: flex;\n  justify-content: center;\n}\n.modal .champion-role {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-left: 2rem;\n  margin-right: 2rem;\n}\n.modal .champion-resource {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-left: 2rem;\n  margin-right: 2rem;\n}\n.modal .champion-role-image {\n  height: 3.5rem;\n  width: 3.5rem;\n}\n.modal .champion-resource-image {\n  height: 3.5rem;\n  width: 3.5rem;\n}\n.modal .champion-role-name {\n  font-weight: 600;\n  font-size: 20px;\n}\n.modal .champion-resource-name {\n  font-weight: 600;\n  font-size: 20px;\n}\n.modal .champion-main-info {\n  padding: 1.8rem;\n  max-width: 34rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: last baseline;\n}\n@-webkit-keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n.modal .lore-container {\n  background-color: #181a20bf;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 16px;\n  border-color: #927543;\n  border-style: solid;\n}\n.modal .lore-heading {\n  margin: auto;\n  margin-bottom: 0.4em;\n  font-size: 24px;\n  color: #927543;\n}\n.modal .abilities-container {\n  background-color: #181a20bf;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 16px;\n  border-color: #927543;\n  border-style: solid;\n  max-width: 34rem;\n}\n.modal .abilities-heading {\n  margin: auto;\n  margin-bottom: 0.4em;\n  font-size: 24px;\n  color: #927543;\n  text-align: center;\n}\n.modal .ability-pictures {\n  margin-bottom: 1em;\n  display: flex;\n  justify-content: space-evenly;\n}\n.modal .ability-description {\n  margin-top: 1em;\n  margin-bottom: 1em;\n}\n.modal .champion-details {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.modal .champion-extra-info {\n  display: flex;\n  flex-direction: column;\n}\n.modal .ability-info {\n  display: none;\n}\n.modal .ability-info.active {\n  display: flex;\n  flex-direction: column;\n}\n.modal .spell-img {\n  cursor: pointer;\n}\n.modal .spell-img.clicked {\n  border-style: solid;\n  border-color: #927543;\n  border-width: 4px;\n}\n.modal .tips-heading {\n  margin: auto;\n  margin-bottom: 0.4em;\n  font-size: 24px;\n  color: #927543;\n}\n.modal .champion-tips {\n  background-color: #181a20bf;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 16px;\n  border-color: #927543;\n  border-style: solid;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: auto;\n  max-width: 34rem;\n  text-align: center;\n}\n.modal .champion-tip {\n  margin-bottom: 1em;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["@mixin containerBackground {\n  background-color: #181a20bf;\n  padding: 1em;\n  border-radius: 1em;\n  color: white;\n  margin-bottom: 0.6em;\n  line-height: 1.4;\n  font-weight: 600;\n  font-size: 16px;\n  border-color: #927543;\n  border-style: solid;\n}\n\n@mixin subHeadingStyle {\n  margin: auto;\n  margin-bottom: 0.4em;\n  font-size: 24px;\n  color: #927543;\n} \n\n@mixin iconSize {\n  height: 3.5rem;\n  width: 3.5rem;\n}\n\n@mixin iconText {\n  font-weight: 600;\n  font-size: 20px;\n}\n\n@mixin iconContainer {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-left: 2rem;\n  margin-right: 2rem;\n}\n\n@mixin smallMargin {\n  margin-top: 1em;\n  margin-bottom: 1em;\n}\n\nbody {\n  font-family: \"Inter\", Arial, Helvetica, sans-serif;\n}\n\n.modal {\n  display: block;\n  position: fixed;\n  z-index: 1;\n  padding-top: 4rem;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgb(0, 0, 0, 0.1);\n  \n  .champion-details-container {\n    position: relative;\n    margin: auto;\n    padding: 0;\n    max-width: 75%;\n    min-height: 49rem;\n    margin-top: 0;\n    background: rgba(0, 0, 0, 0.1);\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    -webkit-animation-name: animatetop;\n    -webkit-animation-duration: 0.4s;\n    animation-name: animatetop;\n    animation-duration: 0.4s;\n    border: 1px solid #888;\n    background: no-repeat url(\"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Poppy_0.jpg\");\n    background-size: cover;\n    \n  }\n\n  .modal-header {\n    @include containerBackground();\n    padding: 0;\n    border-radius: 0;\n    display: flex;\n    align-items: center;\n  }\n\n  .modal-nav-links {\n    display: flex;\n    flex-direction: column;\n    align-content: space-between;\n    height: 100%;\n    font-size: 22px;\n    background-color: black;\n    padding-left: 1em;\n    padding-right: 1em;    \n  }\n\n  .modal-nav-link {\n    cursor: pointer;\n    @include smallMargin();\n  }\n\n  .modal-nav-link:hover {\n    color: #927543;\n  }\n\n  .champion-heading {\n    margin: auto;\n    text-align: center;\n    font-size: 20px;\n    color: white;\n    padding-right: 6em;\n  }\n\n  .champion-name {\n    margin: auto;\n  }\n\n  .champion-title {\n    color: #927543;\n    font-size: 16px;\n  }\n\n  .champion-roles {\n    display: flex;\n    justify-content: center;\n  }\n\n  .champion-role {\n    @include iconContainer();\n  }\n\n  .champion-resource {\n    @include iconContainer();\n  }\n\n  .champion-role-image {\n    @include iconSize();\n  }\n\n  .champion-resource-image {\n    @include iconSize();\n  }\n\n  .champion-role-name {\n    @include iconText();\n  }\n\n  .champion-resource-name {\n    @include iconText();\n  }\n\n  .champion-main-info {\n    padding: 1.8rem;\n    max-width: 34rem;\n    display: flex;\n    flex-direction: column;\n    justify-content:last baseline;    \n  }\n\n  @-webkit-keyframes animatetop {\n    from {top: -300px; opacity:0}\n    to {top:0; opacity: 1;}\n  }\n\n  @keyframes animatetop {\n    from {top: -300px; opacity:0}\n    to {top:0; opacity: 1;}\n  }\n\n  .lore-container {\n   @include containerBackground();\n  }\n\n  .lore-heading {\n    @include subHeadingStyle();\n  }\n\n  .abilities-container {\n    @include containerBackground();\n    max-width: 34rem;\n  }\n\n  .abilities-heading {\n    @include subHeadingStyle();\n    text-align: center;\n  }\n\n  .ability-pictures {\n    margin-bottom: 1em;\n    display: flex;\n    justify-content: space-evenly;\n  }\n\n  .ability-description {\n    @include smallMargin();\n  }\n\n  .champion-details {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .champion-extra-info {\n    display: flex;\n    flex-direction: column;\n  }\n  \n  .ability-info {\n    display: none;\n  }\n\n  .ability-info.active {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .spell-img {\n    cursor: pointer;\n  }\n\n  .spell-img.clicked {\n    border-style: solid;\n    border-color: #927543;\n    border-width: 4px;\n  }\n\n  .tips-heading {\n    @include subHeadingStyle();\n  \n  }\n\n  .champion-tips {\n    @include containerBackground();\n    display: flex;\n    flex-direction: column;\n    margin-bottom: auto;\n    max-width: 34rem;\n    text-align: center;\n  }\n\n  .champion-tip {\n    margin-bottom: 1em;\n  }\n\n}"],"sourceRoot":""}]);
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
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

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
	"./Energy.png": "./src/images/Energy.png",
	"./Fighter.png": "./src/images/Fighter.png",
	"./Flow.png": "./src/images/Flow.png",
	"./Fury.png": "./src/images/Fury.png",
	"./Heat.png": "./src/images/Heat.png",
	"./Jungle.png": "./src/images/Jungle.png",
	"./Mage.png": "./src/images/Mage.png",
	"./Mana.png": "./src/images/Mana.png",
	"./Manaless.png": "./src/images/Manaless.png",
	"./Marksman.png": "./src/images/Marksman.png",
	"./Melee.png": "./src/images/Melee.png",
	"./Middle.png": "./src/images/Middle.png",
	"./Ranged.png": "./src/images/Ranged.png",
	"./Specialist.png": "./src/images/Specialist.png",
	"./Support.png": "./src/images/Support.png",
	"./Tank.png": "./src/images/Tank.png",
	"./Top.png": "./src/images/Top.png"
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
/* harmony import */ var _championDetailsModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./championDetailsModal */ "./src/championDetailsModal.js");
/* harmony import */ var _appControl_championModalController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./appControl/championModalController */ "./src/appControl/championModalController.js");






var test = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var controller;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,_championDetailsModal__WEBPACK_IMPORTED_MODULE_3__.ChampionDetailsModal)('Poppy');

          case 2:
            controller = (0,_appControl_championModalController__WEBPACK_IMPORTED_MODULE_4__.ChampionModalController)();
            controller.modalChangeListeners();

          case 4:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFVBQVU7QUFDVjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLGNBQWM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLG1CQUFtQjtBQUNwRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLGtCQUFrQjs7QUFFbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdCQUFnQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FB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QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7O1VDbENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNcUMsSUFBSTtBQUFBLHNMQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0xyQywyRUFBb0IsQ0FBQyxPQUFELENBRGY7O0FBQUE7QUFFTHNDLFlBQUFBLFVBRkssR0FFUTVILDRGQUF1QixFQUYvQjtBQUdYNEgsWUFBQUEsVUFBVSxDQUFDNUcsb0JBQVg7O0FBSFc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBSjJHLElBQUk7QUFBQTtBQUFBO0FBQUEsR0FBVjs7QUFNQUEsSUFBSSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL2FwcENvbnRyb2wvY2hhbXBpb25Nb2RhbENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9jaGFtcGlvbkRhdGEuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9jaGFtcGlvbkRldGFpbHNNb2RhbC5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8vaG9tZS9kYXlvL0Rlc2t0b3Avb2RpblByb2plY3QvTGVhZ3VlLUFwcC9mcm9udGVuZC9zcmMvaW1hZ2VzfHN5bmN8bm9ucmVjdXJzaXZlfC9cXC4ocG5nfGpwZSIsIndlYnBhY2s6Ly9sZWFndWUtYXBwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9sZWFndWUtYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2xlYWd1ZS1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xlYWd1ZS1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9sZWFndWUtYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2xlYWd1ZS1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiY29uc3QgQ2hhbXBpb25Nb2RhbENvbnRyb2xsZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHRvZ2dsZUFjdGl2ZUFiaWxpdHkgPSAoY2xpY2tlZEFiaWxpdHlJZCkgPT4ge1xuICAgIGNvbnN0IGFiaWxpdHlJbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3BlbGwtaW1nJyk7XG4gICAgY29uc3QgYWJpbGl0eUluZm9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFiaWxpdHktaW5mbycpO1xuXG4gICAgYWJpbGl0eUltYWdlcy5mb3JFYWNoKChpbWcpID0+IHtcbiAgICAgIGltZy5jbGFzc0xpc3QucmVtb3ZlKCdjbGlja2VkJyk7XG4gICAgfSk7XG4gICAgYWJpbGl0eUluZm9zLmZvckVhY2goKGluZm8pID0+IHtcbiAgICAgIGluZm8uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjbGlja2VkSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtjbGlja2VkQWJpbGl0eUlkfS1pbWdgKTtcbiAgICBjbGlja2VkSW1hZ2UuY2xhc3NOYW1lID0gJ3NwZWxsLWltZyBjbGlja2VkJztcblxuICAgIGNvbnN0IGFjdGl2ZUFiaWxpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtjbGlja2VkQWJpbGl0eUlkfS1hYmlsaXR5YCk7XG4gICAgYWN0aXZlQWJpbGl0eS5jbGFzc05hbWUgPSAnYWJpbGl0eS1pbmZvIGFjdGl2ZSc7XG4gIH07XG5cbiAgY29uc3QgbW9kYWxDaGFuZ2VMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgY2hhbXBpb25EZXRhaWxzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLWRldGFpbHMtY29udGFpbmVyJyk7XG5cbiAgICBjaGFtcGlvbkRldGFpbHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnc3BlbGwtaW1nJykge1xuICAgICAgICBjb25zdCBkYXNoSW5kZXggPSBldmVudC50YXJnZXQuaWQuaW5kZXhPZignLScpO1xuICAgICAgICBjb25zdCBhYmlsaXR5SWQgPSBldmVudC50YXJnZXQuaWQuc2xpY2UoMCwgZGFzaEluZGV4KTtcbiAgICAgICAgdG9nZ2xlQWN0aXZlQWJpbGl0eShhYmlsaXR5SWQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbW9kYWxDaGFuZ2VMaXN0ZW5lcnMsXG4gIH07XG59O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuZXhwb3J0IHsgQ2hhbXBpb25Nb2RhbENvbnRyb2xsZXIgfTtcbiIsImNvbnN0IGZldGNoQ2hhbXBpb25EZXRhaWxzID0gYXN5bmMgKGNoYW1waW9uSWQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vMTEuMjAuMS9kYXRhL2VuX1VTL2NoYW1waW9uLyR7Y2hhbXBpb25JZH0uanNvbmAsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICBjb25zdCBjaGFtcGlvbnMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IGNoYW1waW9uRGV0YWlscyA9IGNoYW1waW9ucy5kYXRhW2NoYW1waW9uSWRdO1xuXG4gIHJldHVybiBjaGFtcGlvbkRldGFpbHM7XG59O1xuXG5jb25zdCBnZXRDaGFtcGlvbkltYWdlcyA9IChjaGFtcGlvbkRldGFpbHMpID0+IHtcbiAgY29uc3QgcHJvZmlsZUltZ051bWJlciA9IGNoYW1waW9uRGV0YWlscy5za2luc1swXS5udW07XG4gIGNvbnN0IHByb2ZpbGVJbWdVcmwgPSAoYGh0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi9pbWcvY2hhbXBpb24vc3BsYXNoLyR7Y2hhbXBpb25EZXRhaWxzLmlkfV8ke3Byb2ZpbGVJbWdOdW1iZXJ9LmpwZ2ApO1xuICBjb25zdCBza2luSW1ncyA9IGNoYW1waW9uRGV0YWlscy5za2lucy5zbGljZSgxKTtcbiAgY29uc3Qgc2tpbkltZ1VybHMgPSBbXTtcbiAgc2tpbkltZ3MuZm9yRWFjaCgoaW1nKSA9PiB7XG4gICAgc2tpbkltZ1VybHMucHVzaChgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuL2ltZy9jaGFtcGlvbi9zcGxhc2gvJHtjaGFtcGlvbkRldGFpbHMuaWR9XyR7aW1nLm51bX0uanBnYCk7XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgcHJvZmlsZUltZ1VybCxcbiAgICBza2luSW1nVXJscyxcbiAgfTtcbn07XG5cbmNvbnN0IGdldENoYW1waW9uUGFzc2l2ZXMgPSAoY2hhbXBpb25EZXRhaWxzKSA9PiB7XG4gIGNvbnN0IHBhc3NpdmVEYXRhID0gY2hhbXBpb25EZXRhaWxzLnBhc3NpdmU7XG4gIGNvbnN0IHBhc3NpdmVOYW1lID0gcGFzc2l2ZURhdGEubmFtZTtcbiAgY29uc3QgcGFzc2l2ZURlc2NyaXB0aW9uID0gcGFzc2l2ZURhdGEuZGVzY3JpcHRpb247XG4gIGNvbnN0IHBhc3NpdmVJZCA9IHBhc3NpdmVEYXRhLmltYWdlLmZ1bGw7XG4gIGNvbnN0IHBhc3NpdmVJbWdVcmwgPSBgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLzExLjIxLjEvaW1nL3Bhc3NpdmUvJHtwYXNzaXZlSWR9YDtcblxuICByZXR1cm4ge1xuICAgIHBhc3NpdmVOYW1lLFxuICAgIHBhc3NpdmVEZXNjcmlwdGlvbixcbiAgICBwYXNzaXZlSW1nVXJsLFxuICB9O1xufTtcblxuY29uc3QgZ2V0Q2hhbXBpb25TcGVsbHMgPSAoY2hhbXBpb25EZXRhaWxzKSA9PiB7XG4gIGNvbnN0IHNwZWxsc0RhdGEgPSBjaGFtcGlvbkRldGFpbHMuc3BlbGxzO1xuICBjb25zdCBzcGVsbHMgPSBbXTtcblxuICBzcGVsbHNEYXRhLmZvckVhY2goKHNwZWxsKSA9PiB7XG4gICAgY29uc3Qgc3BlbGxPYmplY3QgPSB7XG4gICAgICBuYW1lOiBzcGVsbC5uYW1lLFxuICAgICAgaWQ6IHNwZWxsLmlkLFxuICAgICAgZGVzY3JpcHRpb246IHNwZWxsLmRlc2NyaXB0aW9uLFxuICAgICAgY29zdEJ1cm46IHNwZWxsLmNvc3RCdXJuLFxuICAgICAgY29zdFR5cGU6IHNwZWxsLmNvc3RUeXBlLFxuICAgICAgY29vbGRvd246IHNwZWxsLmNvb2xkb3duQnVybixcbiAgICAgIGltZ1VybDogYGh0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL2Nkbi8xMS4yMS4xL2ltZy9zcGVsbC8ke3NwZWxsLmlkfS5wbmdgLFxuICAgIH07XG4gICAgc3BlbGxzLnB1c2goc3BlbGxPYmplY3QpO1xuICB9KTtcblxuICByZXR1cm4gc3BlbGxzO1xufTtcblxuY29uc3QgZ2V0Q2hhbXBpb25EYXRhID0gYXN5bmMgKGNoYW1waW9uSWQpID0+IHtcbiAgY29uc3QgY2hhbXBpb25EZXRhaWxzID0gYXdhaXQgZmV0Y2hDaGFtcGlvbkRldGFpbHMoY2hhbXBpb25JZCk7XG4gIGNvbnN0IGNoYW1waW9uSW1hZ2VzID0gZ2V0Q2hhbXBpb25JbWFnZXMoY2hhbXBpb25EZXRhaWxzKTtcbiAgY29uc3QgY2hhbXBpb25QYXNzaXZlID0gZ2V0Q2hhbXBpb25QYXNzaXZlcyhjaGFtcGlvbkRldGFpbHMpO1xuICBjb25zdCBzcGVsbHMgPSBnZXRDaGFtcGlvblNwZWxscyhjaGFtcGlvbkRldGFpbHMpO1xuXG4gIC8vIE1ha2UgZmlyc3QgbGV0dGVyIG9mIHRoZSBjaGFtcGlvbiB0aXRsZSBhIGNhcGl0YWwgbGV0dGVyLlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICBjb25zdCBjaGFtcGlvblRpdGxlID0gY2hhbXBpb25EZXRhaWxzLnRpdGxlLnJlcGxhY2UoY2hhbXBpb25EZXRhaWxzLnRpdGxlWzBdLCBjaGFtcGlvbkRldGFpbHMudGl0bGVbMF0udG9VcHBlckNhc2UoKSk7XG5cbiAgaWYgKGNoYW1waW9uRGV0YWlscy5wYXJ0eXBlID09PSAnTm9uZScpIHtcbiAgICBjaGFtcGlvbkRldGFpbHMucGFydHlwZSA9ICdNYW5hbGVzcyc7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5hbWU6IGNoYW1waW9uRGV0YWlscy5uYW1lLFxuICAgIGlkOiBjaGFtcGlvbkRldGFpbHMuaWQsXG4gICAgdGl0bGU6IGNoYW1waW9uVGl0bGUsXG4gICAgbG9yZTogY2hhbXBpb25EZXRhaWxzLmxvcmUsXG4gICAgcm9sZXM6IGNoYW1waW9uRGV0YWlscy50YWdzLFxuICAgIHJlc291cmNlOiBjaGFtcGlvbkRldGFpbHMucGFydHlwZSxcbiAgICBwYXNzaXZlOiBjaGFtcGlvblBhc3NpdmUsXG4gICAgcHJvZmlsZUltZzogY2hhbXBpb25JbWFnZXMucHJvZmlsZUltZ1VybCxcbiAgICBza2luSW1nczogY2hhbXBpb25JbWFnZXMuc2tpbkltZ1VybHMsXG4gICAgc3BlbGxzLFxuICAgIHRpcHM6IGNoYW1waW9uRGV0YWlscy5hbGx5dGlwcyxcbiAgfTtcbn07XG5cbmV4cG9ydCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG4gIGdldENoYW1waW9uRGF0YSxcbn07XG4iLCJpbXBvcnQgeyBnZXRDaGFtcGlvbkRhdGEgfSBmcm9tICcuL2NoYW1waW9uRGF0YSc7XG5cbmNvbnN0IGltcG9ydEFsbCA9IChyKSA9PiB7XG4gIGNvbnN0IGltYWdlcyA9IHt9O1xuICByLmtleXMoKS5mb3JFYWNoKChpdGVtKSA9PiB7IGltYWdlc1tpdGVtLnJlcGxhY2UoJy4vJywgJycpXSA9IHIoaXRlbSk7IH0pO1xuICByZXR1cm4gaW1hZ2VzO1xufTtcblxuY29uc3QgaW1hZ2VzID0gaW1wb3J0QWxsKHJlcXVpcmUuY29udGV4dCgnLi9pbWFnZXMnLCBmYWxzZSwgL1xcLihwbmd8anBlP2d8c3ZnKSQvKSk7XG5cbmNvbnN0IENoYW1waW9uRGV0YWlsc01vZGFsID0gYXN5bmMgKGNoYW1waW9uSWQpID0+IHtcbiAgY29uc3QgY2hhbXBpb25EYXRhID0gYXdhaXQgZ2V0Q2hhbXBpb25EYXRhKGNoYW1waW9uSWQpO1xuXG4gIGNvbnN0IGRldGFpbHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tZGV0YWlscy1jb250YWluZXInKTtcbiAgZGV0YWlsc0NvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kID0gYG5vLXJlcGVhdCB1cmwoaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuL2ltZy9jaGFtcGlvbi9zcGxhc2gvJHtjaGFtcGlvbkRhdGEuaWR9XzAuanBnKWA7XG4gIGRldGFpbHNDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY292ZXInO1xuXG4gIGNvbnN0IGNoYW1waW9uVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tdGl0bGUnKTtcbiAgY2hhbXBpb25UaXRsZS50ZXh0Q29udGVudCA9IGNoYW1waW9uRGF0YS50aXRsZTtcblxuICBjb25zdCBjaGFtcGlvbk5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tbmFtZScpO1xuICBjaGFtcGlvbk5hbWUudGV4dENvbnRlbnQgPSBjaGFtcGlvbkRhdGEubmFtZTtcblxuICBjb25zdCBjaGFtcGlvblJvbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW1waW9uLXJvbGVzJyk7XG4gIGNvbnN0IHsgcm9sZXMgfSA9IGNoYW1waW9uRGF0YTtcbiAgcm9sZXMuZm9yRWFjaCgocm9sZSkgPT4ge1xuICAgIGNvbnN0IGNoYW1waW9uUm9sZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNoYW1waW9uUm9sZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgY2hhbXBpb25Sb2xlSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgIGNoYW1waW9uUm9sZS5jbGFzc05hbWUgPSAnY2hhbXBpb24tcm9sZSc7XG4gICAgY2hhbXBpb25Sb2xlTmFtZS5jbGFzc05hbWUgPSAnY2hhbXBpb24tcm9sZS1uYW1lJztcbiAgICBjaGFtcGlvblJvbGVJbWFnZS5jbGFzc05hbWUgPSAnY2hhbXBpb24tcm9sZS1pbWFnZSc7XG5cbiAgICBjaGFtcGlvblJvbGVOYW1lLnRleHRDb250ZW50ID0gcm9sZTtcbiAgICBjaGFtcGlvblJvbGVJbWFnZS5zcmMgPSBgJHtpbWFnZXNbYCR7cm9sZX0ucG5nYF19YDtcbiAgICBjaGFtcGlvblJvbGVJbWFnZS5hbHQgPSBgJHtyb2xlfS5wbmdgO1xuXG4gICAgY2hhbXBpb25Sb2xlLmFwcGVuZENoaWxkKGNoYW1waW9uUm9sZU5hbWUpOyBjaGFtcGlvblJvbGUuYXBwZW5kQ2hpbGQoY2hhbXBpb25Sb2xlSW1hZ2UpO1xuICAgIGNoYW1waW9uUm9sZXMuYXBwZW5kQ2hpbGQoY2hhbXBpb25Sb2xlKTtcbiAgfSk7XG4gIC8vIFRoZSB0eXBlIG9mIGVuZXJneSB0aGF0IGEgY2hhbXBpb24gdXNlcyBlLmcuIG1hbmEsIGVuZXJneSBldGNcbiAgY29uc3QgY2hhbXBpb25SZXNvdXJjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB7IHJlc291cmNlIH0gPSBjaGFtcGlvbkRhdGE7XG4gIGNoYW1waW9uUmVzb3VyY2UuY2xhc3NOYW1lID0gJ2NoYW1waW9uLXJlc291cmNlJztcbiAgY29uc3QgY2hhbXBpb25SZXNvdXJjZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNvbnN0IGNoYW1waW9uUmVzb3VyY2VJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjaGFtcGlvblJlc291cmNlTmFtZS5jbGFzc05hbWUgPSAnY2hhbXBpb24tcmVzb3VyY2UtbmFtZSc7XG4gIGNoYW1waW9uUmVzb3VyY2VJbWFnZS5jbGFzc05hbWUgPSAnY2hhbXBpb24tcmVzb3VyY2UtaW1hZ2UnO1xuICBjaGFtcGlvblJlc291cmNlTmFtZS50ZXh0Q29udGVudCA9IHJlc291cmNlO1xuICBjaGFtcGlvblJlc291cmNlSW1hZ2Uuc3JjID0gYCR7aW1hZ2VzW2Ake3Jlc291cmNlfS5wbmdgXX1gOyBjaGFtcGlvblJlc291cmNlSW1hZ2UuYWx0ID0gYCR7cmVzb3VyY2V9LnBuZ2A7XG5cbiAgY2hhbXBpb25SZXNvdXJjZS5hcHBlbmRDaGlsZChjaGFtcGlvblJlc291cmNlTmFtZSk7XG4gIGNoYW1waW9uUmVzb3VyY2UuYXBwZW5kQ2hpbGQoY2hhbXBpb25SZXNvdXJjZUltYWdlKTtcbiAgY2hhbXBpb25Sb2xlcy5hcHBlbmRDaGlsZChjaGFtcGlvblJlc291cmNlKTtcblxuICBjb25zdCBjaGFtcGlvbkxvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbXBpb24tbG9yZScpO1xuICBjaGFtcGlvbkxvcmUudGV4dENvbnRlbnQgPSBjaGFtcGlvbkRhdGEubG9yZTtcblxuICBjb25zdCBhYmlsaXR5UGljdHVyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJpbGl0eS1waWN0dXJlcycpO1xuXG4gIGNvbnN0IHBhc3NpdmVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgcGFzc2l2ZUltZy5jbGFzc05hbWUgPSAnc3BlbGwtaW1nIGNsaWNrZWQnO1xuICBwYXNzaXZlSW1nLmlkID0gJ3Bhc3NpdmUtaW1nJztcbiAgcGFzc2l2ZUltZy5zcmMgPSBjaGFtcGlvbkRhdGEucGFzc2l2ZS5wYXNzaXZlSW1nVXJsO1xuICBwYXNzaXZlSW1nLmFsdCA9IGAke2NoYW1waW9uRGF0YS5wYXNzaXZlLnBhc3NpdmVOYW1lfS5wbmdgO1xuICBhYmlsaXR5UGljdHVyZXMuYXBwZW5kQ2hpbGQocGFzc2l2ZUltZyk7XG5cbiAgY2hhbXBpb25EYXRhLnNwZWxscy5mb3JFYWNoKChzcGVsbCkgPT4ge1xuICAgIGNvbnN0IHNwZWxsSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgc3BlbGxJbWcuY2xhc3NOYW1lID0gJ3NwZWxsLWltZyc7XG4gICAgLy8gR3JhYnMgbGV0dGVyIFEsIFcsIEUgb3IgUiB3aGljaCB1bmlxdWUgaWRlbnRpZmllcyBhIGNoYW1waW9ucyBhYmlsaXRpZXNcbiAgICBzcGVsbEltZy5pZCA9IGAke3NwZWxsLmlkW3NwZWxsLmlkLmxlbmd0aCAtIDFdfS1pbWdgO1xuICAgIHNwZWxsSW1nLnNyYyA9IHNwZWxsLmltZ1VybDtcbiAgICBzcGVsbEltZy5hbHQgPSBgJHtzcGVsbC5uYW1lfS5wbmdgO1xuICAgIGFiaWxpdHlQaWN0dXJlcy5hcHBlbmRDaGlsZChzcGVsbEltZyk7XG4gIH0pO1xuXG4gIGNvbnN0IGFiaWxpdGllc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYmlsaXRpZXMtY29udGFpbmVyJyk7XG4gIC8vIGxvb3BzIHRocm91Z2ggY2hhbXBpb24ncyBwYXNzaXZlIGFuZCA0IGFiaWxpdGllc1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkgKz0gMSkge1xuICAgIGNvbnN0IGFiaWxpdHlJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYWJpbGl0eU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgYWJpbGl0eURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGFiaWxpdHlOYW1lLmNsYXNzTmFtZSA9ICdhYmlsaXR5LW5hbWUnOyBhYmlsaXR5RGVzY3JpcHRpb24uY2xhc3NOYW1lID0gJ2FiaWxpdHktZGVzY3JpcHRpb24nO1xuICAgIGFiaWxpdHlJbmZvLmFwcGVuZENoaWxkKGFiaWxpdHlOYW1lKTsgYWJpbGl0eUluZm8uYXBwZW5kQ2hpbGQoYWJpbGl0eURlc2NyaXB0aW9uKTtcblxuICAgIGlmIChpID09PSAwKSB7XG4gICAgICBhYmlsaXR5SW5mby5jbGFzc05hbWUgPSAnYWJpbGl0eS1pbmZvIGFjdGl2ZSc7XG4gICAgICBhYmlsaXR5SW5mby5pZCA9ICdwYXNzaXZlLWFiaWxpdHknO1xuICAgICAgYWJpbGl0eU5hbWUudGV4dENvbnRlbnQgPSBjaGFtcGlvbkRhdGEucGFzc2l2ZS5wYXNzaXZlTmFtZTtcbiAgICAgIGFiaWxpdHlEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBjaGFtcGlvbkRhdGEucGFzc2l2ZS5wYXNzaXZlRGVzY3JpcHRpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvb2xkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgY29vbGRvd24uY2xhc3NOYW1lID0gJ2FiaWxpdHktY29vbGRvd24nO1xuICAgICAgY29vbGRvd24udGV4dENvbnRlbnQgPSBgQ29vbGRvd246ICR7Y2hhbXBpb25EYXRhLnNwZWxsc1tpIC0gMV0uY29vbGRvd259IHNlY29uZHNgO1xuICAgICAgYWJpbGl0eUluZm8uYXBwZW5kQ2hpbGQoY29vbGRvd24pO1xuXG4gICAgICBjb25zdCBzcGVsbElkID0gY2hhbXBpb25EYXRhLnNwZWxsc1tpIC0gMV0uaWQ7XG4gICAgICBhYmlsaXR5SW5mby5jbGFzc05hbWUgPSAnYWJpbGl0eS1pbmZvJztcbiAgICAgIGFiaWxpdHlJbmZvLmlkID0gYCR7c3BlbGxJZFtzcGVsbElkLmxlbmd0aCAtIDFdfS1hYmlsaXR5YDtcbiAgICAgIGFiaWxpdHlOYW1lLnRleHRDb250ZW50ID0gYCR7Y2hhbXBpb25EYXRhLnNwZWxsc1tpIC0gMV0ubmFtZX0gKCR7c3BlbGxJZFtzcGVsbElkLmxlbmd0aCAtIDFdfSlgO1xuICAgICAgYWJpbGl0eURlc2NyaXB0aW9uLmlubmVySFRNTCA9IGNoYW1waW9uRGF0YS5zcGVsbHNbaSAtIDFdLmRlc2NyaXB0aW9uO1xuICAgICAgY29uc29sZS5sb2coYWJpbGl0eURlc2NyaXB0aW9uLmlubmVySFRNTCk7XG4gICAgfVxuXG4gICAgYWJpbGl0aWVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFiaWxpdHlJbmZvKTtcbiAgfVxuXG4gIGNvbnN0IGNoYW1waW9uVGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbi10aXBzJyk7XG4gIGNoYW1waW9uRGF0YS50aXBzLmZvckVhY2goKHRpcCkgPT4ge1xuICAgIGNvbnN0IGNoYW1waW9uVGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNoYW1waW9uVGlwLmNsYXNzTmFtZSA9ICdjaGFtcGlvbi10aXAnO1xuICAgIGNoYW1waW9uVGlwLnRleHRDb250ZW50ID0gYCR7dGlwfWA7XG4gICAgY2hhbXBpb25UaXBzLmFwcGVuZENoaWxkKGNoYW1waW9uVGlwKTtcbiAgfSk7XG5cbiAgLy8gY29kZSB0byBjcmVhdGUgdGhlIG1vZGFsIG5hdmlnYXRpb24gbGlua3Ncbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgeyBDaGFtcGlvbkRldGFpbHNNb2RhbCB9O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgcGFkZGluZy10b3A6IDRyZW07XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLWRldGFpbHMtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXgtd2lkdGg6IDc1JTtcXG4gIG1pbi1oZWlnaHQ6IDQ5cmVtO1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgdXJsKFxcXCJodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vaW1nL2NoYW1waW9uL3NwbGFzaC9Qb3BweV8wLmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuLm1vZGFsIC5tb2RhbC1oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMGJmO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC42ZW07XFxuICBsaW5lLWhlaWdodDogMS40O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlci1jb2xvcjogIzkyNzU0MztcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubW9kYWwgLm1vZGFsLW5hdi1saW5rcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmctbGVmdDogMWVtO1xcbiAgcGFkZGluZy1yaWdodDogMWVtO1xcbn1cXG4ubW9kYWwgLm1vZGFsLW5hdi1saW5rIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuLm1vZGFsIC5tb2RhbC1uYXYtbGluazpob3ZlciB7XFxuICBjb2xvcjogIzkyNzU0MztcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1oZWFkaW5nIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmctcmlnaHQ6IDZlbTtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1uYW1lIHtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi10aXRsZSB7XFxuICBjb2xvcjogIzkyNzU0MztcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1yb2xlcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tcm9sZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXJlc291cmNlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tcm9sZS1pbWFnZSB7XFxuICBoZWlnaHQ6IDMuNXJlbTtcXG4gIHdpZHRoOiAzLjVyZW07XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tcmVzb3VyY2UtaW1hZ2Uge1xcbiAgaGVpZ2h0OiAzLjVyZW07XFxuICB3aWR0aDogMy41cmVtO1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXJvbGUtbmFtZSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4ubW9kYWwgLmNoYW1waW9uLXJlc291cmNlLW5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1tYWluLWluZm8ge1xcbiAgcGFkZGluZzogMS44cmVtO1xcbiAgbWF4LXdpZHRoOiAzNHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBsYXN0IGJhc2VsaW5lO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XFxuICBmcm9tIHtcXG4gICAgdG9wOiAtMzAwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICB0byB7XFxuICAgIHRvcDogMDtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBhbmltYXRldG9wIHtcXG4gIGZyb20ge1xcbiAgICB0b3A6IC0zMDBweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdG9wOiAwO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG4ubW9kYWwgLmxvcmUtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBiZjtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3JkZXItY29sb3I6ICM5Mjc1NDM7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbn1cXG4ubW9kYWwgLmxvcmUtaGVhZGluZyB7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAwLjRlbTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGNvbG9yOiAjOTI3NTQzO1xcbn1cXG4ubW9kYWwgLmFiaWxpdGllcy1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWEyMGJmO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC42ZW07XFxuICBsaW5lLWhlaWdodDogMS40O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlci1jb2xvcjogIzkyNzU0MztcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBtYXgtd2lkdGg6IDM0cmVtO1xcbn1cXG4ubW9kYWwgLmFiaWxpdGllcy1oZWFkaW5nIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDAuNGVtO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgY29sb3I6ICM5Mjc1NDM7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tb2RhbCAuYWJpbGl0eS1waWN0dXJlcyB7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcbi5tb2RhbCAuYWJpbGl0eS1kZXNjcmlwdGlvbiB7XFxuICBtYXJnaW4tdG9wOiAxZW07XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tZGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1vZGFsIC5jaGFtcGlvbi1leHRyYS1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ubW9kYWwgLmFiaWxpdHktaW5mbyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubW9kYWwgLmFiaWxpdHktaW5mby5hY3RpdmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5tb2RhbCAuc3BlbGwtaW1nIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm1vZGFsIC5zcGVsbC1pbWcuY2xpY2tlZCB7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiAjOTI3NTQzO1xcbiAgYm9yZGVyLXdpZHRoOiA0cHg7XFxufVxcbi5tb2RhbCAudGlwcy1oZWFkaW5nIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDAuNGVtO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgY29sb3I6ICM5Mjc1NDM7XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tdGlwcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTIwYmY7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyLWNvbG9yOiAjOTI3NTQzO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG4gIG1heC13aWR0aDogMzRyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tb2RhbCAuY2hhbXBpb24tdGlwIHtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBNENBO0VBQ0Usa0RBQUE7QUEzQ0Y7O0FBOENBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0Esb0NBQUE7QUEzQ0Y7QUE2Q0U7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsNEVBQUE7RUFDQSxrQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0dBQUE7RUFDQSxzQkFBQTtBQTNDSjtBQStDRTtFQS9FQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQXdFRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFwQ0o7QUF1Q0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBckNKO0FBd0NFO0VBQ0UsZUFBQTtFQTVERixlQUFBO0VBQ0Esa0JBQUE7QUF1QkY7QUF3Q0U7RUFDRSxjQUFBO0FBdENKO0FBeUNFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQXZDSjtBQTBDRTtFQUNFLFlBQUE7QUF4Q0o7QUEyQ0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQXpDSjtBQTRDRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQTFDSjtBQTZDRTtFQW5HQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQXlERjtBQXlDRTtFQXZHQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQWlFRjtBQXFDRTtFQXJIQSxjQUFBO0VBQ0EsYUFBQTtBQW1GRjtBQXFDRTtFQXpIQSxjQUFBO0VBQ0EsYUFBQTtBQXVGRjtBQXFDRTtFQXhIQSxnQkFBQTtFQUNBLGVBQUE7QUFzRkY7QUFxQ0U7RUE1SEEsZ0JBQUE7RUFDQSxlQUFBO0FBMEZGO0FBcUNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFuQ0o7QUFzQ0U7RUFDRTtJQUFNLFdBQUE7SUFBYSxVQUFBO0VBbENyQjtFQW1DRTtJQUFJLE1BQUE7SUFBTyxVQUFBO0VBL0JiO0FBQ0Y7QUFpQ0U7RUFDRTtJQUFNLFdBQUE7SUFBYSxVQUFBO0VBN0JyQjtFQThCRTtJQUFJLE1BQUE7SUFBTyxVQUFBO0VBMUJiO0FBQ0Y7QUE0QkU7RUEzS0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFrSkY7QUFvQkU7RUFsS0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFpSkY7QUFrQkU7RUFuTEEsMkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUE0S0UsZ0JBQUE7QUFQSjtBQVVFO0VBM0tBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBMEtFLGtCQUFBO0FBTEo7QUFRRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FBTko7QUFTRTtFQTVKQSxlQUFBO0VBQ0Esa0JBQUE7QUFzSkY7QUFTRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFQSjtBQVVFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBUko7QUFXRTtFQUNFLGFBQUE7QUFUSjtBQVlFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBVko7QUFhRTtFQUNFLGVBQUE7QUFYSjtBQWNFO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBWko7QUFlRTtFQXpOQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQTZNRjtBQWNFO0VBM09BLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBb09FLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUhKO0FBTUU7RUFDRSxrQkFBQTtBQUpKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtaXhpbiBjb250YWluZXJCYWNrZ3JvdW5kIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODFhMjBiZjtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3JkZXItY29sb3I6ICM5Mjc1NDM7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbn1cXG5cXG5AbWl4aW4gc3ViSGVhZGluZ1N0eWxlIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDAuNGVtO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgY29sb3I6ICM5Mjc1NDM7XFxufSBcXG5cXG5AbWl4aW4gaWNvblNpemUge1xcbiAgaGVpZ2h0OiAzLjVyZW07XFxuICB3aWR0aDogMy41cmVtO1xcbn1cXG5cXG5AbWl4aW4gaWNvblRleHQge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuQG1peGluIGljb25Db250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXG59XFxuXFxuQG1peGluIHNtYWxsTWFyZ2luIHtcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIHBhZGRpbmctdG9wOiA0cmVtO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC4xKTtcXG4gIFxcbiAgLmNoYW1waW9uLWRldGFpbHMtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1heC13aWR0aDogNzUlO1xcbiAgICBtaW4taGVpZ2h0OiA0OXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gICAgYmFja2dyb3VuZDogbm8tcmVwZWF0IHVybChcXFwiaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuL2ltZy9jaGFtcGlvbi9zcGxhc2gvUG9wcHlfMC5qcGdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgXFxuICB9XFxuXFxuICAubW9kYWwtaGVhZGVyIHtcXG4gICAgQGluY2x1ZGUgY29udGFpbmVyQmFja2dyb3VuZCgpO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLm1vZGFsLW5hdi1saW5rcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgcGFkZGluZy1sZWZ0OiAxZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDFlbTsgICAgXFxuICB9XFxuXFxuICAubW9kYWwtbmF2LWxpbmsge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIEBpbmNsdWRlIHNtYWxsTWFyZ2luKCk7XFxuICB9XFxuXFxuICAubW9kYWwtbmF2LWxpbms6aG92ZXIge1xcbiAgICBjb2xvcjogIzkyNzU0MztcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1oZWFkaW5nIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA2ZW07XFxuICB9XFxuXFxuICAuY2hhbXBpb24tbmFtZSB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi10aXRsZSB7XFxuICAgIGNvbG9yOiAjOTI3NTQzO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICB9XFxuXFxuICAuY2hhbXBpb24tcm9sZXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1yb2xlIHtcXG4gICAgQGluY2x1ZGUgaWNvbkNvbnRhaW5lcigpO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXJlc291cmNlIHtcXG4gICAgQGluY2x1ZGUgaWNvbkNvbnRhaW5lcigpO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXJvbGUtaW1hZ2Uge1xcbiAgICBAaW5jbHVkZSBpY29uU2l6ZSgpO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXJlc291cmNlLWltYWdlIHtcXG4gICAgQGluY2x1ZGUgaWNvblNpemUoKTtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1yb2xlLW5hbWUge1xcbiAgICBAaW5jbHVkZSBpY29uVGV4dCgpO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLXJlc291cmNlLW5hbWUge1xcbiAgICBAaW5jbHVkZSBpY29uVGV4dCgpO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLW1haW4taW5mbyB7XFxuICAgIHBhZGRpbmc6IDEuOHJlbTtcXG4gICAgbWF4LXdpZHRoOiAzNHJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50Omxhc3QgYmFzZWxpbmU7ICAgIFxcbiAgfVxcblxcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xcbiAgICBmcm9tIHt0b3A6IC0zMDBweDsgb3BhY2l0eTowfVxcbiAgICB0byB7dG9wOjA7IG9wYWNpdHk6IDE7fVxcbiAgfVxcblxcbiAgQGtleWZyYW1lcyBhbmltYXRldG9wIHtcXG4gICAgZnJvbSB7dG9wOiAtMzAwcHg7IG9wYWNpdHk6MH1cXG4gICAgdG8ge3RvcDowOyBvcGFjaXR5OiAxO31cXG4gIH1cXG5cXG4gIC5sb3JlLWNvbnRhaW5lciB7XFxuICAgQGluY2x1ZGUgY29udGFpbmVyQmFja2dyb3VuZCgpO1xcbiAgfVxcblxcbiAgLmxvcmUtaGVhZGluZyB7XFxuICAgIEBpbmNsdWRlIHN1YkhlYWRpbmdTdHlsZSgpO1xcbiAgfVxcblxcbiAgLmFiaWxpdGllcy1jb250YWluZXIge1xcbiAgICBAaW5jbHVkZSBjb250YWluZXJCYWNrZ3JvdW5kKCk7XFxuICAgIG1heC13aWR0aDogMzRyZW07XFxuICB9XFxuXFxuICAuYWJpbGl0aWVzLWhlYWRpbmcge1xcbiAgICBAaW5jbHVkZSBzdWJIZWFkaW5nU3R5bGUoKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmFiaWxpdHktcGljdHVyZXMge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgfVxcblxcbiAgLmFiaWxpdHktZGVzY3JpcHRpb24ge1xcbiAgICBAaW5jbHVkZSBzbWFsbE1hcmdpbigpO1xcbiAgfVxcblxcbiAgLmNoYW1waW9uLWRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi1leHRyYS1pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIFxcbiAgLmFiaWxpdHktaW5mbyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAuYWJpbGl0eS1pbmZvLmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAuc3BlbGwtaW1nIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAgLnNwZWxsLWltZy5jbGlja2VkIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiAjOTI3NTQzO1xcbiAgICBib3JkZXItd2lkdGg6IDRweDtcXG4gIH1cXG5cXG4gIC50aXBzLWhlYWRpbmcge1xcbiAgICBAaW5jbHVkZSBzdWJIZWFkaW5nU3R5bGUoKTtcXG4gIFxcbiAgfVxcblxcbiAgLmNoYW1waW9uLXRpcHMge1xcbiAgICBAaW5jbHVkZSBjb250YWluZXJCYWNrZ3JvdW5kKCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XFxuICAgIG1heC13aWR0aDogMzRyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5jaGFtcGlvbi10aXAge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICB9XFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIGRlZmluZShJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgZGVmaW5lKEdwLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGFzeW5jSXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgZGVmaW5lKEdwLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIGRlZmluZShHcCwgXCJ0b1N0cmluZ1wiLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgaW4gbW9kZXJuIGVuZ2luZXNcbiAgLy8gd2UgY2FuIGV4cGxpY2l0bHkgYWNjZXNzIGdsb2JhbFRoaXMuIEluIG9sZGVyIGVuZ2luZXMgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xuICB9IGVsc2Uge1xuICAgIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG4gIH1cbn1cbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwidmFyIG1hcCA9IHtcblx0XCIuL0Fzc2Fzc2luLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9Bc3Nhc3Npbi5wbmdcIixcblx0XCIuL0JvdHRvbS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvQm90dG9tLnBuZ1wiLFxuXHRcIi4vQ29udHJvbGxlci5wbmdcIjogXCIuL3NyYy9pbWFnZXMvQ29udHJvbGxlci5wbmdcIixcblx0XCIuL0VuZXJneS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvRW5lcmd5LnBuZ1wiLFxuXHRcIi4vRmlnaHRlci5wbmdcIjogXCIuL3NyYy9pbWFnZXMvRmlnaHRlci5wbmdcIixcblx0XCIuL0Zsb3cucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL0Zsb3cucG5nXCIsXG5cdFwiLi9GdXJ5LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9GdXJ5LnBuZ1wiLFxuXHRcIi4vSGVhdC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvSGVhdC5wbmdcIixcblx0XCIuL0p1bmdsZS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvSnVuZ2xlLnBuZ1wiLFxuXHRcIi4vTWFnZS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvTWFnZS5wbmdcIixcblx0XCIuL01hbmEucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL01hbmEucG5nXCIsXG5cdFwiLi9NYW5hbGVzcy5wbmdcIjogXCIuL3NyYy9pbWFnZXMvTWFuYWxlc3MucG5nXCIsXG5cdFwiLi9NYXJrc21hbi5wbmdcIjogXCIuL3NyYy9pbWFnZXMvTWFya3NtYW4ucG5nXCIsXG5cdFwiLi9NZWxlZS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvTWVsZWUucG5nXCIsXG5cdFwiLi9NaWRkbGUucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL01pZGRsZS5wbmdcIixcblx0XCIuL1JhbmdlZC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvUmFuZ2VkLnBuZ1wiLFxuXHRcIi4vU3BlY2lhbGlzdC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvU3BlY2lhbGlzdC5wbmdcIixcblx0XCIuL1N1cHBvcnQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL1N1cHBvcnQucG5nXCIsXG5cdFwiLi9UYW5rLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9UYW5rLnBuZ1wiLFxuXHRcIi4vVG9wLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9Ub3AucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltYWdlcyBzeW5jIFxcXFwuKHBuZ3xqcGU/Z3xzdmcpJFwiOyIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0IHsgQ2hhbXBpb25EZXRhaWxzTW9kYWwgfSBmcm9tICcuL2NoYW1waW9uRGV0YWlsc01vZGFsJztcbmltcG9ydCB7IENoYW1waW9uTW9kYWxDb250cm9sbGVyIH0gZnJvbSAnLi9hcHBDb250cm9sL2NoYW1waW9uTW9kYWxDb250cm9sbGVyJztcblxuY29uc3QgdGVzdCA9IGFzeW5jICgpID0+IHtcbiAgYXdhaXQgQ2hhbXBpb25EZXRhaWxzTW9kYWwoJ1BvcHB5Jyk7XG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBDaGFtcGlvbk1vZGFsQ29udHJvbGxlcigpO1xuICBjb250cm9sbGVyLm1vZGFsQ2hhbmdlTGlzdGVuZXJzKCk7XG59O1xuXG50ZXN0KCk7XG4iXSwibmFtZXMiOlsiQ2hhbXBpb25Nb2RhbENvbnRyb2xsZXIiLCJ0b2dnbGVBY3RpdmVBYmlsaXR5IiwiY2xpY2tlZEFiaWxpdHlJZCIsImFiaWxpdHlJbWFnZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhYmlsaXR5SW5mb3MiLCJmb3JFYWNoIiwiaW1nIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiaW5mbyIsImNsaWNrZWRJbWFnZSIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc05hbWUiLCJhY3RpdmVBYmlsaXR5IiwibW9kYWxDaGFuZ2VMaXN0ZW5lcnMiLCJjaGFtcGlvbkRldGFpbHNDb250YWluZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJkYXNoSW5kZXgiLCJpZCIsImluZGV4T2YiLCJhYmlsaXR5SWQiLCJzbGljZSIsImZldGNoQ2hhbXBpb25EZXRhaWxzIiwiY2hhbXBpb25JZCIsImZldGNoIiwibW9kZSIsInJlc3BvbnNlIiwianNvbiIsImNoYW1waW9ucyIsImNoYW1waW9uRGV0YWlscyIsImRhdGEiLCJnZXRDaGFtcGlvbkltYWdlcyIsInByb2ZpbGVJbWdOdW1iZXIiLCJza2lucyIsIm51bSIsInByb2ZpbGVJbWdVcmwiLCJza2luSW1ncyIsInNraW5JbWdVcmxzIiwicHVzaCIsImdldENoYW1waW9uUGFzc2l2ZXMiLCJwYXNzaXZlRGF0YSIsInBhc3NpdmUiLCJwYXNzaXZlTmFtZSIsIm5hbWUiLCJwYXNzaXZlRGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsInBhc3NpdmVJZCIsImltYWdlIiwiZnVsbCIsInBhc3NpdmVJbWdVcmwiLCJnZXRDaGFtcGlvblNwZWxscyIsInNwZWxsc0RhdGEiLCJzcGVsbHMiLCJzcGVsbCIsInNwZWxsT2JqZWN0IiwiY29zdEJ1cm4iLCJjb3N0VHlwZSIsImNvb2xkb3duIiwiY29vbGRvd25CdXJuIiwiaW1nVXJsIiwiZ2V0Q2hhbXBpb25EYXRhIiwiY2hhbXBpb25JbWFnZXMiLCJjaGFtcGlvblBhc3NpdmUiLCJjaGFtcGlvblRpdGxlIiwidGl0bGUiLCJyZXBsYWNlIiwidG9VcHBlckNhc2UiLCJwYXJ0eXBlIiwibG9yZSIsInJvbGVzIiwidGFncyIsInJlc291cmNlIiwicHJvZmlsZUltZyIsInRpcHMiLCJhbGx5dGlwcyIsImltcG9ydEFsbCIsInIiLCJpbWFnZXMiLCJrZXlzIiwiaXRlbSIsInJlcXVpcmUiLCJjb250ZXh0IiwiQ2hhbXBpb25EZXRhaWxzTW9kYWwiLCJjaGFtcGlvbkRhdGEiLCJkZXRhaWxzQ29udGFpbmVyIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZFNpemUiLCJ0ZXh0Q29udGVudCIsImNoYW1waW9uTmFtZSIsImNoYW1waW9uUm9sZXMiLCJyb2xlIiwiY2hhbXBpb25Sb2xlIiwiY3JlYXRlRWxlbWVudCIsImNoYW1waW9uUm9sZU5hbWUiLCJjaGFtcGlvblJvbGVJbWFnZSIsInNyYyIsImFsdCIsImFwcGVuZENoaWxkIiwiY2hhbXBpb25SZXNvdXJjZSIsImNoYW1waW9uUmVzb3VyY2VOYW1lIiwiY2hhbXBpb25SZXNvdXJjZUltYWdlIiwiY2hhbXBpb25Mb3JlIiwiYWJpbGl0eVBpY3R1cmVzIiwicGFzc2l2ZUltZyIsInNwZWxsSW1nIiwibGVuZ3RoIiwiYWJpbGl0aWVzQ29udGFpbmVyIiwiaSIsImFiaWxpdHlJbmZvIiwiYWJpbGl0eU5hbWUiLCJhYmlsaXR5RGVzY3JpcHRpb24iLCJpbm5lckhUTUwiLCJzcGVsbElkIiwiY29uc29sZSIsImxvZyIsImNoYW1waW9uVGlwcyIsInRpcCIsImNoYW1waW9uVGlwIiwidGVzdCIsImNvbnRyb2xsZXIiXSwic291cmNlUm9vdCI6IiJ9