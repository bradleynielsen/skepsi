var nestUser = 'bradleynielsen@gmail.com';
var nestPassword = '*9Ph^VRrYU!1zZ6';
var nestSerialNumber = '02AA01AC061508AP';


//=============================//
// google-nest-api  NPM package//
//=============================//


var nest = require('nest-thermostat').init(nestUser, nestPassword);

// Get the Temps
nest.getInfo(nestSerialNumber, function(data) {
	console.log(data);
	console.log('Currently ' + celsiusToFahrenheit(data.current_temperature) + ' degrees fahrenheit');
	console.log('Target is ' + celsiusToFahrenheit(data.target_temperature) + ' degrees fahrenheit');
});

function celsiusToFahrenheit(temp) {
    return Math.round(temp * (9 / 5.0) + 32.0);
};

// nest.fetchStatus(function (data) {
//         for (var deviceId in data.device) {
//             if (data.device.hasOwnProperty(deviceId)) {
//                 var device = data.shared[deviceId];
//                 // here's the device and ID
//                 nest.setTemperature(deviceId, nest.ftoc(70));
//             }
//         }
//     });





// // unofficial-nest-api NPM package

// nest.login('bradleynielsen@gmail.com', '*9Ph^VRrYU!1zZ6', function (err, data) {
//     if (err) {
//         console.log(err.message);
//         process.exit(1);
//         return;
//     }
//     nest.fetchStatus(function (data) {
//         for (var deviceId in data.device) {
//             if (data.device.hasOwnProperty(deviceId)) {
//                 var device = data.shared[deviceId];
//                 // here's the device and ID
//                 nest.setTemperature(deviceId, nest.ftoc(70));
//             }
//         }
//     });
// });







// // nest-api NPM package
// var NestApi = require('nest-api');
// var nestApi = new NestApi('bradleynielsen@gmail.com', '*9Ph^VRrYU!1zZ6');

// nestApi.login(function(data) {
//   nestApi.get(function(data) {
//     var shared = data.shared[Object.keys(data.schedule)[0]];
//     console.log('Currently ' + shared.current_temperature + ' degrees celcius');
//     console.log('Target is ' + shared.target_temperature + ' degrees celcius');
//   });
// });

// // Below is an example data structure / JSON object returned from the Nest API:
// // {
// //   user_alert_dialog: { '###':  { /* ... */ } },
// //   track:  { '0123456789ABCDEF': { /* ... */ }, /* ... */ },
// //   message_center: { '###': { /* ... */ } },
// //   utility: { /* ... */ },
// //   where: { '### uuid ###': { /* ... */ },
// //   structure: { '### uuid ###': { /* ... */ },
// //   message: { '0123456789ABCDEF': { /* ... */ }, /* ... */ },
// //   tuneups: { '0123456789ABCDEF': { /* ... */ }, /* ... */ },
// //   device: { '0123456789ABCDEF': { /* ... */ }, /* ... */ },
// //   demand_response: { '0123456789ABCDEF': { /* ... */ }, /* ... */ },
// //   user: { '###': { /* ... */ },
// //   link: { '0123456789ABCDEF': { /* ... */ }, /* ... */ },
// //   device_alert_dialog: { '0123456789ABCDEF': { /* ... */ }, /* ... */ },
// //   metadata: { '0123456789ABCDEF': { /* ... */ }, /* ... */ },
// //   user_settings: { '###': { /* ... */ },
// //   schedule: { '0123456789ABCDEF': { /* ... */ }, /* ... */ },
// //   shared: { '0123456789ABCDEF': { /* ... */ }, /* ... */ }
// //  }
