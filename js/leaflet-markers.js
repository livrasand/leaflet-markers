function createCustomIcon(iconName) {
    return new L.Icon({
        iconUrl: `img/${iconName}.png`,
        shadowUrl: 'img/marker-shadow.png',
        iconSize: [38, 38], 
        iconAnchor: [19, 38],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });
}

var busIcon = createCustomIcon('bus');
var callIcon = createCustomIcon('call');
var carIcon = createCustomIcon('car');
var carServicesIcon = createCustomIcon('car-services');
var closureIcon = createCustomIcon('closure');
var coinsIcon = createCustomIcon('coins');
var currentLocationIcon = createCustomIcon('current-location');
var currentLocationOnMapIcon = createCustomIcon('current-location-on-map');
var dangerIcon = createCustomIcon('danger');
var errorIcon = createCustomIcon('error');
var evChargingIcon = createCustomIcon('ev-charging');
var homeIcon = createCustomIcon('home');
var homeBittersweetIcon = createCustomIcon('home-bittersweet');
var homeEmeraldIcon = createCustomIcon('home-emerald');
var homeFawnIcon = createCustomIcon('home-fawn');
var homeFillIcon = createCustomIcon('home-fill');
var homeFillBittersweetIcon = createCustomIcon('home-fill-bittersweet');
var homeFillEmeraldIcon = createCustomIcon('home-fill-emerald');
var homeFillFawnIcon = createCustomIcon('home-fill-fawn');
var homeFillMikadoYellowIcon = createCustomIcon('home-fill-mikado-yellow');
var homeFillPlatinumIcon = createCustomIcon('home-fill-platinum');
var homeMikadoYellowIcon = createCustomIcon('home-mikado-yellow');
var homePlatinumIcon = createCustomIcon('home-platinum');
var hotelIcon = createCustomIcon('hotel');
var locationIcon = createCustomIcon('location');
var locationErrorIcon = createCustomIcon('location-error');
var locationOffIcon = createCustomIcon('location-off');
var navigationNowFillIcon = createCustomIcon('navigation-now-fill');
var nodeIcon = createCustomIcon('node');
var outdoorParksIcon = createCustomIcon('outdoor-parks');
var parkingIcon = createCustomIcon('parking');
var peopleIcon = createCustomIcon('people');
var phoneIcon = createCustomIcon('phone');
var residentialIcon = createCustomIcon('residential');
var restaurantIcon = createCustomIcon('restaurant');
var roadIcon = createCustomIcon('road');
var schoolIcon = createCustomIcon('school');
var sheildIcon = createCustomIcon('sheild');
var storeIcon = createCustomIcon('store');
var theaterIcon = createCustomIcon('theater');
var thunderboltIcon = createCustomIcon('thunderbolt');
var toolboxIcon = createCustomIcon('toolbox');
var trashIcon = createCustomIcon('trash');
var universityIcon = createCustomIcon('university');
var wifiIcon = createCustomIcon('wifi');
var workIcon = createCustomIcon('work');
